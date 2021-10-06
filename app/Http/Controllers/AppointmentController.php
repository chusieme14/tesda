<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function index()
    {

    }

    public function store(Request $request)
    {
        $request->learn_number = $this->generateLearnNumber();
        $appointment = Appointment::create($request->all());
        return response()->json($appointment);
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
}
