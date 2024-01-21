<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name','description','datestart','dateend','status',
    ];

    public function projects() {
        return $this->belongsToMany(Project::class, 'project_task_user', 'task_id', 'project_id')
            ->withPivot('user_id');
    }

    public function users() {
        return $this->belongsToMany(User::class, 'project_task_user', 'task_id', 'user_id')
            ->withPivot('project_id');
    }

}
