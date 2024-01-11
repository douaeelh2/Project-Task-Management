<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'img' => $this->faker->imageUrl(),
            'firstname' => $this->faker->firstName,
            'lastname' => $this->faker->lastName,
            'designation' => $this->faker->jobTitle,
            'email' => $this->faker->unique()->safeEmail,
            'phone' => $this->faker->phoneNumber,
            'password' => bcrypt('password'),
            'graduation_university' => $this->faker->company,
            'graduate_at' => $this->faker->date,
            'facebook_url' => $this->faker->url,
            'linkedin_url' => $this->faker->url,
            'github_url' => $this->faker->url,
        ];
    }
}
