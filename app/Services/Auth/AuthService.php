<?php

namespace App\Services\Auth;

use App\Enum\Token;
use App\Models\User;
use Illuminate\Support\Carbon;

class AuthService implements AuthServiceInterface
{
    /**
     * Add token for user
     * @param User $user
     * return array
     */
    public function generateToken(User $user): array
    {
        $tokenExpiration = Carbon::now()->addDay(1);
        $token = $user->createToken('access_api', [Token::ACCESS_API->value], $tokenExpiration)->plainTextToken;

        return [
            'access_token' => $token,
            'expiration_token' => Carbon::parse($tokenExpiration)->format('Y-m-d H:m:s'),
            'token_type' => 'Bearer'
        ];
    }

    /**
     * refresh token for user
     * @param string $token
     */
    public function refreshToken(string $token)
    {
        throw new \Exception('Not implemented');
    }
}
