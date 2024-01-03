<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

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
        $user = Auth::user();

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
        ]);

        // Mettez à jour les informations du profil
        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            // Mettez à jour d'autres champs au besoin
        ]);

        return response()->json(['message' => 'Profile updated successfully', 'user' => $user]);
    }
}
