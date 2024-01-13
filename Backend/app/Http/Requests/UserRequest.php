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
            'img' => 'nullable|string',
            'firstname' => 'required|string|max:25',
            'lastname' => 'required|string|max:25',
            'designation' => 'required|string|max:25',
            'email' => 'required|string|email|max:30|unique:users',
            'phone' => ['required', 'string', 'regex:/^(\d{10}|\+?\d{11})$/'],
            'password' => 'required|string|min:6',
            'graduation_university' => 'nullable|string|max:25',
            'graduate_at' => 'nullable|date',
            'facebook_url' => 'nullable|string|url',
            'linkedin_url' => 'nullable|string|url',
            'github_url' => 'nullable|string|url',
        ];
    }

    /**
     * Get custom messages for validator errors.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'firstname.required' => 'Firstname is required',
            'lastname.required' => 'Lastname is required',
            'designation.required' => 'Job is required',
            'email.required' => 'Email is required',
            'phone.required' => 'Phone number is required',
            'phone.regex' => 'Invalid phone number format',
            'password.required' => 'Password is required',
            'password.min' => 'Password must be at least :min characters long',
            'graduation_university.max' => 'Graduation university should not exceed :max characters',
            'graduate_at.date' => 'Invalid graduation date format',
            'facebook_url.url' => 'Invalid Facebook URL format',
            'linkedin_url.url' => 'Invalid LinkedIn URL format',
            'github_url.url' => 'Invalid GitHub URL format',
        ];
    }

}
