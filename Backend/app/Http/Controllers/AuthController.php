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
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'error' => 'Email or Password Invalid'
            ]);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 60 * 24); // 1 day

        return response([
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

    public function updateProfile(Request $request)
    {
        $user = Auth::user();

        // Validez les données du formulaire selon vos besoins
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            // Ajoutez d'autres règles de validation au besoin
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
