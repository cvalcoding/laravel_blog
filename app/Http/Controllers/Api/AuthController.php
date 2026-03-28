<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthFormRequest;
use App\Http\Resources\UserResource;
use App\Services\Auth\AuthServiceInterface;
use App\Services\User\UserServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;

class AuthController extends Controller
{
    protected $authServiceInterface;

    protected $userServiceInterface;

    public function __construct(AuthServiceInterface $authServiceInterface, UserServiceInterface $userServiceInterface)
    {
        $this->authServiceInterface = $authServiceInterface;
        $this->userServiceInterface = $userServiceInterface;
    }

    /**
     * create user
     * @param AuthFormRequest $request
     * @return JsonResponse
     */
    public function register(AuthFormRequest $request): JsonResponse
    {
        $token = $this->authServiceInterface->generateToken($this->userServiceInterface->addUser($request->validated()));

        return response()->json($token, 201);
    }

    /**
     * Authenticate user
     * @param AuthFormRequest $request
     * @return JsonResponse
     */
    public function login(AuthFormRequest $request): JsonResponse
    {
        if (!Auth::attempt($request->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = $this->userServiceInterface->getUserByEmail($request['email']);

        if (!is_null($user->currentAccessToken())) {
            $user->currentAccessToken()->delete();
        }

        $token = $this->authServiceInterface->generateToken($user);

        return $this->successResponse('User logged in', $token);
    }

    /**
     * User profile
     * @param AuthFormRequest $request
     * @return JsonResponse
     */
    public function profile(AuthFormRequest $request): JsonResponse
    {
        return $this->successResponse('User profile', new UserResource($request->user()));
    }

    /**
     * Logout user
     * @param Request $request
     * @return JsonResponse
     */
    public function logout(Request $request): JsonResponse
    {
        $token = $this->userServiceInterface->getUserByToken($request);
        $token->delete();

        return $this->successResponse('User logout');
    }
}
