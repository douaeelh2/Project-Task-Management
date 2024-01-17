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
        return [
            'name' => 'required|max:255|unique:projects,name,' . $this->route('id'),
            'category'=>'required|max:15',
            'datestart'=>[
                'required',
                'date',
                'after_or_equal:' . now()->toDateString(),
            ],
            'dateend'=>[
                'required',
                'date',
                'after:datestart',
            ],
            'description'=>'required',
            'id1'=>[
                'required',
            ],
            'id2'=>[
                'required',
                'different:id1'
            ],
            'id3'=>[
                'required',
                'different:id1,id2'
            ],
            'id4'=>[
                'required',
                'different:id1,id2,id3'
            ],
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'The name of the project is required.',
            'name.unique'=>'The name of the project should be unique',
            'category.required' => 'The category of the project is requiered.',
            'datestart.required' => 'The start date of the project is requiered.',
            'dateend.required' => 'The end date of the project is requiered.',
            'id1.required' => 'The first member is required.',
            'id2.required' => 'The second member is required.',
            'id3.required' => 'The third member is required.',
            'id4.required' => 'The fourth member is required.',
            'description.required' => 'The description of the project is requiered.',

            'id2.different' => 'The second member must be different from the other members.',
            'id3.different' => 'The third member must be different from the other members.',
            'id4.different' => 'The fourth member must be different from the other members.',
            'datestart.after_or_equal' => 'The start date must be equal to or later than today.',
            'dateend.after' => 'The end date must be later than start date.',
        ];
    }
}
