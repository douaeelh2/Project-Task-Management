<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use function Ramsey\Uuid\v1;

class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        return [
            'name'=>$this->faker->unique()->sentence(3),
            'category'=>$this->faker->randomElement(['Web Development', 'Mobile Development', 'Software Development','Web Mobile Application','Networking and Security','Artificial Intelligence']),
            'datestart'=>$this->faker->date,
            'dateend'=>$this->faker->date,
            'description'=>$this->faker->paragraph,
            'status'=>$this->faker->randomElement(['pending', 'in_progress', 'completed']),
        ];
    }
}