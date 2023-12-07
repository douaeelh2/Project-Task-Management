<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'img' => 'required|string',
            'firstname' => 'required|string|max:25',
            'lastname' => 'required|string|max:25',
            'designation' => 'required|string|max:25',
            'email' => 'required|string|email|max:30|unique:users',
            'phone' => 'required|string|max:14|min:10',
            'password' => 'required|string|min:6',
            'graduation_university' => 'required|string|max:25',
            'graduate_at' => 'required|date',
            'employed_at' => 'required|date',
            'facebook_url' => 'nullable|string|url',
            'linkedin_url' => 'nullable|string|url',
            'github_url' => 'nullable|string|url',
        ];
    }
}
