<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $fillable = [
            'learn_number',
            'last_name',
            'first_name',
            'middle_name',
            'gender',
            'birth_date',
            'age',
            'nationality',
            'birthplace',
            'email',
            'mobile_number',
            'tel_phone_number',
            'home_address',
            'guardian_name',
            'guardian_address',
            'civil_status',
            'educational_attainment',
            'employment_type',
            'employment_status',
            'employer_name',
            'agreement',
            'photo',
            'isregular',
            'applicant_classification',
            'course_qualification',
            'scholar_type',
    ];

    public function attachments(){
        return $this->hasMany(Attachment::class);
    }

}
