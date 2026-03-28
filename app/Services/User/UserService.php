<?php

namespace App\Services\User;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\PersonalAccessToken;

class UserService implements UserServiceInterface
{

    protected $user;

    /**
     * Constructor
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * create user
     * @param array $data
     */
    public function addUser(array $data)
    {
        DB::beginTransaction();
        try {
            $user = User::create($data);
            DB::commit();
            return $user;
        } catch (Exception $e) {
            return ['status' => false, 'message' => 'Error in get : ' . $e->getMessage()];
        }
    }

    /**
     * get user by email
     * @param string $email
     */
    public function getUserByEmail(string $email)
    {
        try {
            $user = $this->user->where('email', '=', $email)->firstOrFail();
            return $user;
        } catch (Exception $e) {
            return ['status' => false, 'message' => 'Error in get : ' . $e->getMessage()];
        }
    }
    /**
     * get user by token
     * @param Request $request
     */
    public function getUserByToken(Request $request)
    {
        $currentToken = $request->bearerToken();
        try {
            $token = PersonalAccessToken::findToken($currentToken);
            $user = $token->tokenable;

            return $user;
        } catch (Exception $e) {
            return ['status' => false, 'message' => 'Error in get : ' . $e->getMessage()];
        }
    }
}
