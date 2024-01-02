<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function createUsers(Request $request)
    {
        $UsersData = [
            [
                "img" => "/img/team-2.jpeg",
                "firstname" => "John",
                "lastname" => "Doe",
                "designation" => "Developer",
                "email" => "john@example.com",
                "phone" => "1234567890",
                "password" => "johnjohn",
                "graduation_university" => "ABC Technologies",
                "graduate_at" => "2020-05-01",
                "employed_at" => "2021-01-15",
                "facebook_url" => null,
                "linkedin_url" => "https://www.linkedin.com/in/johndoe",
                "github_url" => "https://github.com/johndoe",
                "role" => "user"
            ],
            [
                "img" => "/img/team-4.jpeg",
                "firstname" => "Jane",
                "lastname" => "Smith",
                "designation" => "Systems Analyst",
                "email" => "jane@example.com",
                "phone" => "9876543210",
                "password" => "janejane",
                "graduation_university" => "XYZ Software",
                "graduate_at" => "2019-08-15",
                "employed_at" => "2020-03-10",
                "facebook_url" => null,
                "linkedin_url" => "https://www.linkedin.com/in/janesmith",
                "github_url" => "https://github.com/janesmith",
                "role" => "admin"
            ],
            [
                "img" => "/img/team-3.jpeg",
                "firstname" => "Emily",
                "lastname" => "White",
                "designation" => "Project Manager",
                "email" => "emily.@example.com",
                "phone" => "3335557777",
                "password" => "emilyemily",
                "graduation_university" => "Innovate Tech Labs",
                "graduate_at" => "2021-10-10",
                "employed_at" => "2022-01-02",
                "facebook_url" => null,
                "linkedin_url" => "https://www.linkedin.com/in/emilywhite",
                "github_url" => "https://github.com/emilywhite",
                "role" => "user"
            ],
            [
                "img" => "/img/team-1.jpeg",
                "firstname" => "Michael",
                "lastname" => "Brown",
                "designation" => "Front-end Developer",
                "email" => "michael@example.com",
                "phone" => "4448889999",
                "password" => "michaelmichael",
                "graduation_university" => "Software Wizards Ltd.",
                "graduate_at" => "2020-12-05",
                "employed_at" => "2021-03-25",
                "facebook_url" => null,
                "linkedin_url" => "https://www.linkedin.com/in/michaelbrown",
                "github_url" => "https://github.com/michaelbrown",
                "role" => "user"
            ]
        ];
        
        foreach ($UsersData as $userData) {
            // Créer un nouvel utilisateur avec les données fournies
            $user = new User([
                'img' => $userData['img'],
                'firstname' => $userData['firstname'],
                'lastname' => $userData['lastname'],
                'designation' => $userData['designation'],
                'email' => $userData['email'],
                'phone' => $userData['phone'],
                'password' => bcrypt($userData['password']),
                'graduation_university' => $userData['graduation_university'],
                'graduate_at' => $userData['graduate_at'],
                'employed_at' => $userData['employed_at'],
                'facebook_url' => $userData['facebook_url'],
                'linkedin_url' => $userData['linkedin_url'],
                'github_url' => $userData['github_url'],
                'role' => $userData['role'],
            ]);

            $user->save();
        }

        return response()->json(['message' => 'Utilisateurs fictifs créés avec succès'], 201);
    }

    public function listUsers()
{
    $loggedInUser = Auth::user();

    $users = User::where('id', '!=', $loggedInUser->id)->get();

    return response()->json(['users' => $users]);
}

    public function create(UserRequest $request)
    {
        $data = $request->validated();

        $user = User::create($data);

        return response()->json(['message' => 'User created successfully', 'user' => $user]);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);

        return response()->json(['user' => $user]);
    }

    public function delete($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(['message' => 'User deleted successfully']);
    }
}
