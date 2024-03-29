<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectTaskTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_task', function (Blueprint $table) {
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('task_id');
            $table->foreign('project_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
            $table->primary(['project_id', 'task_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_task');
    }
}
