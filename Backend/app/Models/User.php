<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    // app/Models/User.php

    protected $fillable = [
        'img', 'firstname', 'lastname', 'designation', 'email', 'phone', 'password',
        'graduation_university', 'graduate_at', 'facebook_url', 'linkedin_url', 'github_url',
        'role',
    ];



    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];


    public function projects() {
        return $this->belongsToMany(Project::class, 'project_task_user', 'user_id', 'project_id')
            ->withPivot('task_id');
    }

    public function tasks() {
        return $this->belongsToMany(Task::class, 'project_task_user', 'user_id', 'task_id')
            ->withPivot('project_id');
    }
}
