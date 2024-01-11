<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\UserRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Models\Project;


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
                "phone" => "9876543215",
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


    public function createProjects(Request $request)
{
    $projectsData = [
        [
            "name" => "E-commerce Platform",
            "category" => "Web Development",
            "datestart" => "2022-02-15",
            "dateend" => "2022-08-30",
            "description" => "Develop a feature-rich e-commerce platform with secure payment integration.",
            "status" => "In Progress",
        ],
        [
            "name" => "Mobile App Redesign",
            "category" => "Mobile App Development",
            "datestart" => "2022-03-10",
            "dateend" => "2022-06-30",
            "description" => "Redesign the user interface and improve performance for our mobile app.",
            "status" => "Completed",
        ],
        [
            "name" => "Database Optimization",
            "category" => "Database Management",
            "datestart" => "2022-01-05",
            "dateend" => "2022-04-15",
            "description" => "Optimize and improve the efficiency of our database system.",
            "status" => "Pending",
        ],
        [
            "name" => "AI Chatbot Integration",
            "category" => "Artificial Intelligence",
            "datestart" => "2022-04-20",
            "dateend" => "2022-09-30",
            "description" => "Integrate an AI-powered chatbot to enhance customer support.",
            "status" => "Planned",
        ],
    ];

    foreach ($projectsData as $projectData) {
        $project = new Project([
            'name' => $projectData['name'],
            'category' => $projectData['category'],
            'datestart' => $projectData['datestart'],
            'dateend' => $projectData['dateend'],
            'description' => $projectData['description'],
            'status' => $projectData['status'],
        ]);

        $project->save();
         $users = User::inRandomOrder()->take(3)->get();
         $project->users()->attach($users);
    }

    return response()->json(['message' => 'Fictional computer projects created successfully'], 201);
}

public function index()
{
    $loggedInUser = Auth::user();

    $users = User::where('id', '!=', $loggedInUser->id)->get();

    return response()->json($users);
}


public function listUsers()
{
    $loggedInUser = Auth::user();

    $users = User::where('id', '!=', $loggedInUser->id)->paginate(10);

    return response()->json($users);
}

public function create(UserRequest $request)
{
    $validator = validator($request->all(), $request->rules());

    if ($validator->fails()) {
        $errorMessage = $validator->messages()->first();

        return response()->json(['error' => $errorMessage]);
    } else {
        $data = $validator->validated();
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);

        return response()->json(['message' => 'User created successfully', 'user' => $user]);
    }
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

        return response()->json(['success' => 'User Deleted Successfully']);
    }
}
