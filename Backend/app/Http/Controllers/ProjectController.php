<?php

namespace App\Http\Controllers;

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
    public function create(Request $request)
    {
        $project=new Project;
        $project->name=$request->name;
        $project->category=$request->category;
        $project->datestart=$request->datestart;
        $project->dateend=$request->dateend;
        $project->description=$request->description;
        $project->status="not started";
        $project->save();

        $userIds = [$request->id1, $request->id2, $request->id3, $request->id4];
        if (!empty($userIds)) {
            $project->users()->attach($userIds);
        }
        return response()->json($project);
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
    public function edit(Request $request, $id)
    {
        $project=Project::findOrFail($id);
        $project->name=$request->name;
        $project->category=$request->category;
        $project->datestart=$request->datestart;
        $project->dateend=$request->dateend;
        $project->description=$request->description;
        $project->status=$request->status;
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
