<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

public function up()
{
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('img');
        $table->string('firstname');
        $table->string('lastname');
        $table->string('designation');
        $table->string('email')->unique();
        $table->string('phone');
        $table->string('password');
        $table->string('graduation_university');
        $table->date('graduate_at');
        $table->date('employed_at');
        $table->string('facebook_url')->nullable();
        $table->string('linkedin_url')->nullable();
        $table->string('github_url')->nullable();
        $table->string('role')->default('user');
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
        Schema::dropIfExists('users');
    }
}
