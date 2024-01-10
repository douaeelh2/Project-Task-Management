<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Validator;



class AuthController extends Controller
{
    public function signin(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ], [
            'email.required' => 'Email is required.',
            'email.email' => 'Invalid email format.',
            'password.required' => 'Password is required.',
        ]);
    
        if (!Auth::attempt($validatedData)) {
            $errors = $validator->errors()->all();
            
            return response()->json([
                'error' => 'Email or Password Invalid',
            ], 422);
        }
    
        $user = Auth::user();
    
        $token = $user->createToken('token')->plainTextToken;
    
        $cookie = cookie('jwt', $token, 60 * 24); // 1 day
    
        return response()->json([
            'success' => $token
        ])->withCookie($cookie);
    }
    

    public function user()
    {
        return Auth::user();
    }

    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }

    public function edit(Request $request)
{
    try {
        $authenticatedUser = Auth::user();

        if ($request->hasFile('img')) {
            try {
                $uploadedFile = $request->file('img');
                $fileName = $uploadedFile->getClientOriginalName();
                $uploadedFile->storeAs('public/img', $fileName);
                $authenticatedUser->update(['img' => '/storage/img/' . $fileName]);
                return response()->json(['success' => 'image updated successfully']);
            } catch (\Exception $e) {
                return response()->json(['error' => 'An error occurred during profile image update', 'details' => $e->getMessage()], 500);
            }
        }
        
        if ($request->filled('newPassword') && $request->input('newPassword') !== $request->input('confirmPassword')) {
            return response()->json(['error' => 'New password and confirm password do not match'], 422);
        }

        if ($request->filled('newPassword')) {
            if (Hash::check($request->input('currentPassword'), $authenticatedUser->password)) {
                $authenticatedUser->update([
                    'firstname' => $request->input('firstname'),
                    'lastname' => $request->input('lastname'),
                    'phone' => $request->input('phone'),
                    'designation' => $request->input('designation'),
                    'graduation_university' => $request->input('graduation_university'),
                    'graduate_at' => $request->input('graduate_at'),
                    'facebook_url' => $request->input('facebook_url'),
                    'github_url' => $request->input('github_url'),
                    'linkedin_url' => $request->input('linkedin_url'),
                    'password' => Hash::make($request->input('newPassword'))
                ]);
                return response()->json(['success' => 'Profile updated successfully', 'user' => $authenticatedUser]);
            } else {
                return response()->json(['error' => 'Current password is invalid'], 422);
            }
        }
        if(!$request->filled('newPassword')){
            
            $authenticatedUser->update([
                'firstname' => $request->input('firstname'),
                'lastname' => $request->input('lastname'),
                'phone' => $request->input('phone'),
                'designation' => $request->input('designation'),
                'graduation_university' => $request->input('graduation_university'),
                'graduate_at' => $request->input('graduate_at'),
                'facebook_url' => $request->input('facebook_url'),
                'github_url' => $request->input('github_url'),
                'linkedin_url' => $request->input('linkedin_url'),
            ]);
            return response()->json(['success' => 'Profil updated successfully', 'user' => $authenticatedUser]);
        }
    } catch (\Exception $e) {
        return response()->json(['error' => 'Une erreur est survenue lors de la mise à jour du profil', 'details' => $e->getMessage()], 500);
    }
}

}
