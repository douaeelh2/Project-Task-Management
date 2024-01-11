<?php

namespace Database\Factories;

<<<<<<< HEAD
use App\Models\Project;
=======
>>>>>>> 554640930a0ba3d76728401e795a89e677b45a5b
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(){
        $project_id=rand(0, 1) ? Project::inRandomOrder()->first()->id : null;

        $avatarUrls = [
            'https://img.freepik.com/photos-gratuite/jolie-fille-blonde-chemise-rayee-montrant-signe-paix-vue-face-dame-francaise-riant-posant-mur-bleu_197531-14466.jpg',
            'https://img.freepik.com/photos-gratuite/fille-francaise-emotionnelle-t-shirt-mangeant-sucette-enchanteur-femme-frisee-appreciant-bonbons_197531-11762.jpg?w=360',
            'https://c8.alamy.com/compfr/2kaf92b/photo-de-jeune-positif-nice-beau-cheveux-boucles-femme-confiant-expert-des-medias-sociaux-blogger-recommander-comme-mise-a-jour-instagram-isole-sur-la-couleur-bleue-2kaf92b.jpg',
            'https://cdn.unitycms.io/images/6noSHuprqylAI-s_8GqFIA.jpg?op=ocroped&val=1200,1200,1000,1000,0,0&sum=apoVHSeCqmI',
            'https://resize-public.ladmedia.fr/r/479,,forcex/img/var/public/storage/images/toutes-les-photos/voici-les-plus-beaux-visages-du-monde-selon-la-science-1612315/selon-la-science-amber-heard-a-le-visage-le-plus-parfait-au-monde-1612326/41460129-1-fre-FR/Selon-la-science-Amber-Heard-a-le-visage-le-plus-parfait-au-monde.jpg',
            'https://i.pinimg.com/236x/6c/15/f6/6c15f63ce68f35a22f336749534218e4.jpg',
        ];

        return [
            'img' => ('https://c8.alamy.com/compfr/2kaf92b/photo-de-jeune-positif-nice-beau-cheveux-boucles-femme-confiant-expert-des-medias-sociaux-blogger-recommander-comme-mise-a-jour-instagram-isole-sur-la-couleur-bleue-2kaf92b.jpg'),
            'firstname' => ('jane'),
            'lastname' => $this->faker->lastName(),
            'designation' => $this->faker->jobTitle,
            'email' => ('jane@example.com'),
            'phone' => $this->faker->phoneNumber,
            'password' => bcrypt('janejane'),
            'graduation_university' => $this->faker->company,
            'graduate_at' => $this->faker->date,
            'employed_at' => $this->faker->date,
            'facebook_url' => $this->faker->url,
            'linkedin_url' => $this->faker->url,
            'github_url' => $this->faker->url,
        ];
    }
}
