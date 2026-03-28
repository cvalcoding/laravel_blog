<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthFormRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(AuthFormRequest $request)
    {
        $credentials = $request->validated();
        $user = User::create($credentials);

        $token = $user->createToken('auth_user')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer'
        ], 201);
    }

    public function login(AuthFormRequest $request)
    {
        if (Auth::attempt($request->validated())) {
            $user = User::where('email', '=', $request['email'])->firstOrFail();

            $token = $user->createToken('auth_user')->plainTextToken;

            return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer'
            ], 200);
        }

        return response()->json([
            'message' => 'User not found'
        ], 401);
    }

    public function profile(Request $request)
    {
        return response()->json([
            'user' => $request->user(),
        ]);
    }
}
