<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class AuthFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return $this->isMethod('post') ? $this->store() : $this->show();
    }

    /**
     * function for post method
     * @return array
     */
    public function store(): array
    {
        return [
            'name' => 'min:4|nullable',
            'email' => 'required|email',
            'password' => 'required'
        ];
    }

    /**
     * function for get method
     * @return array
     */
    public function show(): array
    {
        return [];
    }
}
