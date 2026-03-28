<?php

namespace App\Trait;

use Illuminate\Support\Str;

trait Uuid
{
    protected static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->uuid = Str::uuid();
        });
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
