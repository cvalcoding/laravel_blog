<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthFormRequest;
use App\Models\User;
use App\Services\Auth\AuthServiceInterface;
use App\Services\User\UserServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

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
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(AuthFormRequest $request)
    {
        $token = $this->authServiceInterface->generateToken($this->userServiceInterface->addUser($request->validated()));

        return response()->json($token, 201);
    }

    /**
     * Authenticate user
     * @param AuthFormRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(AuthFormRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = $this->userServiceInterface->getUserByEmail($request['email']);

        if (!is_null($user->currentAccessToken())) {
            $user->currentAccessToken()->delete();
        }

        $token = $this->authServiceInterface->generateToken($user);

        return response()->json($token, 200);
    }

    /**
     * User profile
     * @param AuthFormRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile(AuthFormRequest $request)
    {
        return response()->json([
            'user' => $request->user(),
        ]);
    }

    /**
     * Logout user
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        $token = $this->userServiceInterface->getUserByToken($request);
        $token->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
