<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $table='projects';
    protected $fillable = [
        'name','category','datestart','dateend','description','status',
    ];

    public function tasks() {
        return $this->belongsToMany(Task::class, 'project_task_user', 'project_id', 'task_id')
            ->withPivot('user_id');
            
    }

    public function users() {
        return $this->belongsToMany(User::class, 'project_task_user', 'project_id', 'user_id')
            ->withPivot('task_id');
    }
}
