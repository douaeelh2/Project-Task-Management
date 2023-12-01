<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function create(Request $request)
    {
        $UsersData = [
            [
                "img" => null,
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
                "is_admin" => false
            ],
            [
                "img" => null,
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
                "is_admin" => false
            ],
            [
                "img" => null,
                "firstname" => "Robert",
                "lastname" => "Johnson",
                "designation" => "Software Engineer",
                "email" => "robert@example.com",
                "phone" => "5551234567",
                "password" => "robertrobert",
                "graduation_university" => "IT Solutions Inc.",
                "graduate_at" => "2022-02-28",
                "employed_at" => "2022-05-20",
                "facebook_url" => null,
                "linkedin_url" => "https://www.linkedin.com/in/robertjohnson",
                "github_url" => "https://github.com/robertjohnson",
                "is_admin" => false
            ],
            [
                "img" => null,
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
                "is_admin" => false
            ],
            [
                "img" => null,
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
                "is_admin" => false
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
                'is_admin' => $userData['is_admin'],
            ]);

            $user->save();
        }

        return response()->json(['message' => 'Utilisateurs fictifs créés avec succès'], 201);
    }
}
