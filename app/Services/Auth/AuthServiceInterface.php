<?php

namespace App\Services\Auth;

use App\Models\User;

interface AuthServiceInterface
{
    public function generateToken(User $user): array;
    public function refreshToken(string $token);
}
