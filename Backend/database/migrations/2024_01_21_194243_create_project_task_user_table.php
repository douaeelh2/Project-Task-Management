<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTaskUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
            Schema::create('project_task_user', function (Blueprint $table) {
                $table->primary(['project_id', 'task_id','user_id']);
                $table->unsignedBigInteger('project_id');
                $table->unsignedBigInteger('task_id');
                $table->unsignedBigInteger('user_id');
    
                $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
                $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    
                $table->timestamps();
            });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_task_user');
    }
}
