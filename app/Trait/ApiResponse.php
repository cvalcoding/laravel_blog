<?php

namespace App\Trait;

use App\Enum\HttpCode;
use Illuminate\Http\JsonResponse;

trait ApiResponse
{
    public function successResponse(string $message, Mixed $data = [], HttpCode $httpCode = HttpCode::Ok): JsonResponse
    {
        return response()->json([
            'success' => true,
            'data' => $data,
            'message' => $message
        ], $httpCode->value);
    }

    public function errorResponse(string $message, HttpCode $httpCode = HttpCode::BadRequest): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message
        ], $httpCode->value);
    }
}
