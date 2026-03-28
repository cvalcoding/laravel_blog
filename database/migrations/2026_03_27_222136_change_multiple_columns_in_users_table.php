<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('name', 64)->nullable()->change();
            $table->string('email', 128)->change();
            $table->string('password', 128)->change();
            $table->uuid();
            $table->string('avatar', 128)->nullable();
            $table->boolean('active')->default(true)->nullable();
        });
    }
};
