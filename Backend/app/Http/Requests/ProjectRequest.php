<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
{
    $rules = [
        'name' => 'required|max:255|unique:projects,name,' . $this->route('id'),
        'category' => 'required',
        'datestart' => [
            'required',
            'date',
        ],
        'dateend' => [
            'required',
            'date',
            'after:datestart',
        ],
        'description' => 'required',
        'id1' => 'required',
        'id2' => [
            'required',
            'different:id1',
        ],
        'id3' => [
            'required',
            'different:id1,id2',
        ],
        'id4' => [
            'required',
            'different:id1,id2,id3',
        ],
    ];

    // Ajoutez la règle de validation spécifique pour 'datestart' uniquement lors de l'ajout d'un projet
    if ($this->isMethod('post')) {
        $rules['datestart'][] = 'after_or_equal:' . now()->toDateString();
    }

    return $rules;
}


    public function messages()
    {
        return [
            'name.required' => 'The name of the project is required.',
            'name.unique'=>'The name of the project should be unique',
            'category.required' => 'The category of the project is required.',
            'datestart.required' => 'The start date of the project is required.',
            'datestart.after_or_equal' => 'The start date must be equal to or later than today.',
            'dateend.required' => 'The end date of the project is required.',
            'dateend.after' => 'The end date must be later than start date.',
            'id1.required' => 'The first member is required.',
            'id2.required' => 'The second member is required.',
            'id2.different' => 'The second member must be different from the other members.',
            'id3.required' => 'The third member is required.',
            'id3.different' => 'The third member must be different from the other members.',
            'id4.required' => 'The fourth member is required.',
            'id4.different' => 'The fourth member must be different from the other members.',
            'description.required' => 'The description of the project is required.',
        ];
    }
}
