<?php

namespace App\Services\User;

use Illuminate\Http\Request;

interface UserServiceInterface
{
    public function addUser(array $data);
    public function getUserByEmail(string $email);
    public function getUserByToken(Request $request);
}
