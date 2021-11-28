<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use App\Models\Attachment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index()
    {

    }

    public function enrollee_data($appointment, $request){
        $appointment->learn_number = $this->generateLearnNumber();
        $appointment->last_name = $request->last_name;
        $appointment->first_name = $request->first_name;
        $appointment->middle_name = $request->middle_name;
        $appointment->gender = $request->gender;
        $appointment->birth_date = $request->birth_date;
        $appointment->age = $request->age;
        $appointment->nationality = $request->nationality;
        $appointment->birthplace = $request->birthplace;
        $appointment->email = $request->email;
        $appointment->mobile_number = $request->mobile_number;
        $appointment->tel_phone_number = $request->tel_phone_number;
        $appointment->home_address = $request->home_address;
        $appointment->guardian_name = $request->guardian_name;
        $appointment->guardian_address = $request->guardian_address;
        $appointment->civil_status = $request->civil_status;
        $appointment->educational_attainment = $request->educational_attainment;
        $appointment->employment_type = $request->employment_type;
        $appointment->employment_status = $request->employment_status;
        $appointment->employer_name = $request->employer_name;
        $appointment->agreement = $request->agreement;
        $appointment->photo = $request->photo;
        $appointment->isregular = $request->isregular;
        $appointment->applicant_classification = $request->applicant_classification;
        $appointment->course_qualification = $request->course_qualification;
        $appointment->scholar_type = $request->scholar_type;
    }

    public function store(Request $request)
    {
        $appointment = new Appointment();
        $request->photo =  $this->uploadPhotos($request->photo, 'images/enrollees/');
        $this->enrollee_data($appointment, $request);
        $appointment->save();
        return response()->json($appointment);
    }

    public function createAttachments($request){
        $attach = new Attachment();

    }

    public function generateLearnNumber(){
        $letters = '';
		$numbers = '';
		foreach (range('A', 'Z') as $char) {
		    $letters .= $char;
		}
		for($i = 0; $i < 10; $i++){
			$numbers .= $i;
		}
		$learn_number = substr(str_shuffle($letters), 0, 3).substr(str_shuffle($numbers), 0, 9);
        return $learn_number;
    }

    public function uploadPhotos($img, $path)
    {
        $imageName = "";
        try {
            $random = $this->generateRandomString();
            $image = $img;  // your base64 encoded
            list($type, $image) = explode(';', $image);
            list(, $image)      = explode(',', $image);
            $data = base64_decode($image);
            $imageName = date("YmdHis").$random.'.jpeg';
            file_put_contents(public_path() . '/' . $path . $imageName, $data);
        } catch (\Exception $e) {}
        
        return $imageName;
        // file_put_contents(public_path() . '/' . 'images/items/' . $imageName, $data);
    }

    public function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    public function allPending(){
        return Appointment::where('status',0)->get();
    }
    public function allApproved(){
        return Appointment::where('status',1)->get();
    }
}
