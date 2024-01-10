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


// Routes nécessitant une authentification avec Sanctum

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/user', [AuthController::class, 'user']);

    Route::put('/user/profile/edit', [AuthController::class, 'edit']);

    // Routes spécifiques à l'administration (utilisant le middleware 'admin')
    Route::middleware('admin')->group(function () {
        //Users
        // Admin peut lister tous les utilisateurs
        Route::get('/admin/users', [AdminController::class, 'listUsers']);

        // Admin peut créer un utilisateur
        Route::post('/admin/user/create', [AdminController::class, 'create']);

        // Admin peut afficher un utilisateur par son ID
        Route::get('/admin/user/show/{id}', [AdminController::class, 'show']);

        // Admin peut supprimer un utilisateur
        Route::delete('/admin/user/delete/{id}', [AdminController::class, 'delete']);

        //projects

        Route::get('admin/projects',[ProjectController::class,'index']);

        Route::get('admin/project/show/{id}',[ProjectController::class,'show']);

        // Route::post('admin/projects',[ProjectController::class,'store']);
        Route::delete('admin/projects/delete/{id}',[ProjectController::class,'destroy']);

        Route::put('admin/projects/{id}',[ProjectController::class,'update']);

});

});


