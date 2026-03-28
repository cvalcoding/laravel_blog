<?php

namespace App\Enum;

enum HttpCode: string
{
    case Ok = '200';
    case Created = '201';
    case NoContent = '204';
    case BadRequest = '400';
    case Unauthenticated = '401';
    case Unauthorized = '403';
    case NotFound = '404';
    case UnprocessableEntity = '422';
}
