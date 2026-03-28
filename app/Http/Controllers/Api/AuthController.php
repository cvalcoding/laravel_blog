<?php

namespace App\Http\Controllers\Api;

use App\Enum\Token;
use App\Http\Controllers\Controller;
use App\Http\Requests\AuthFormRequest;
use App\Models\User;
use App\Services\Auth\AuthServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    protected $authServiceInterface;

    public function __construct(AuthServiceInterface $authServiceInterface)
    {
        $this->authServiceInterface = $authServiceInterface;
    }

    public function register(AuthFormRequest $request)
    {
        $credentials = $request->validated();
        $user = User::create($credentials);

        $token = $this->authServiceInterface->generateToken($user);

        return response()->json($token, 201);
    }

    public function login(AuthFormRequest $request)
    {
        if (!Auth::attempt($request->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $user = User::where('email', '=', $request['email'])->firstOrFail();

        if (!is_null($user->currentAccessToken())) {
            $user->currentAccessToken()->delete();
        }

        $token = $this->authServiceInterface->generateToken($user);

        return response()->json($token, 200);
    }

    public function profile(AuthFormRequest $request)
    {
        return response()->json([
            'user' => $request->user(),
        ]);
    }

    public function logout(Request $request)
    {
        $token = PersonalAccessToken::findToken($request->bearerToken());
        $token->delete();

        return response()->json(['message' => 'Logged out successfully']);
    }
}
