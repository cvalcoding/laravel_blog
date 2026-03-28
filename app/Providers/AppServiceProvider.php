<?php

namespace App\Providers;

use App\Services\Auth\AuthService;
use App\Services\Auth\AuthServiceInterface;
use App\Services\User\UserService;
use App\Services\User\UserServiceInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public $bindings = [
        AuthServiceInterface::class => AuthService::class,
        UserServiceInterface::class => UserService::class
    ];
    /**
     * Register any application services.
     */
    public function register(): void {}

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
