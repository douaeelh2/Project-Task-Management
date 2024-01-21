<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProjectController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/signin', [AuthController::class, 'signin']);

Route::get('/create-users', [AdminController::class, 'createUsers']);
Route::get('/create-projects', [AdminController::class, 'createProjects']);
Route::get('/create-tasks', [AdminController::class, 'createTasks']);


// Routes nécessitant une authentification avec Sanctum

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', [AuthController::class, 'user']);

    Route::put('/user/profile/edit', [AuthController::class, 'edit']);

    // Routes spécifiques à l'administration (utilisant le middleware 'admin')

    Route::middleware('admin')->group(function () {

        //Users

        Route::get('/admin/users', [AdminController::class, 'index']);
        Route::get('/admin/users/pagination', [AdminController::class, 'listUsers']);
        Route::post('/admin/user/create', [AdminController::class, 'create']);
        Route::get('/admin/user/show/{id}', [AdminController::class, 'show']);
        Route::delete('/admin/user/delete/{id}', [AdminController::class, 'delete']);

        //Projects

        Route::get('admin/projects',[ProjectController::class,'index']);       
        Route::post('admin/project/create',[ProjectController::class,'create']);
        Route::get('admin/project/show/{id}',[ProjectController::class,'show']);
        Route::put('admin/project/edit/{id}',[ProjectController::class,'edit']); 
        Route::delete('admin/project/delete/{id}',[ProjectController::class,'delete']);

        //Tasks

        Route::get('admin/tasks', [TaskController::class, 'index']);
        Route::post('admin/task/create', [TaskController::class, 'create']);
        Route::get('admin/task/show/{id}', [TaskController::class, 'show']);
        Route::put('admin/task/edit/{id}', [TaskController::class, 'edit']);
        Route::delete('admin/task/delete/{id}', [TaskController::class, 'delete']);

});

});

