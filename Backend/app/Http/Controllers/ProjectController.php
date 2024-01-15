<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProjectRequest;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::with('users')->orderBy('dateend')->get();
        return response()->json($projects);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(ProjectRequest $request)
    {
        // Laravel effectuera automatiquement la validation ici
        // Si la validation échoue, il renverra automatiquement une réponse JSON avec les erreurs appropriées
        // Sinon, il exécutera le reste du code ici

        // Create a new Project instance and set its attributes
        $project = Project::create($request->only(['name', 'category', 'datestart', 'dateend', 'description']) + ['status' => 'not started']);

        // Save the project to the database
        $project->save();

        // Attach users to the project
        $userIds = [$request->id1, $request->id2, $request->id3, $request->id4];
        if (!empty($userIds)) {
            $project->users()->attach($userIds);
        }

        return response()->json(['success' => 'Project created successfully', 'project' => $project]);
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project=Project::with('users')->findOrFail($id);
        return response()->json($project);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(ProjectRequest $request, $id)
    {
        $project=Project::findOrFail($id);
        $project->update($request->only(['name', 'category','datestart' , 'dateend' , 'status', 'description']));
        $project->save();

        $userIds = [$request->id1, $request->id2, $request->id3, $request->id4];
        $project->users()->detach();
        $project->users()->attach($userIds);
        return response()->json($project);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $project=Project::findOrFail($id);
        $project->users()->detach();
        $project->delete();
        return response()->json($project);
    }
}
