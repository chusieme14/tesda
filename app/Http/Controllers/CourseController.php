<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function getCourses($status){
        return Course::where('status',$status)->get();
    }
    public function addCourses(Request $request){
        // return $request->all();
        $course = Course::create([
            'course_code' => $request->course_code,
            'name' => $request->name,
            'status' => $request->status,
            'durations' => $request->durations,
            'slots' => $request->slots,
            'description' => $request->description,
            'requirements' => $request->requirements,
        ]);
        if($request->thumbnail){
            $this->uploadPhoto($request->thumbnail,$course);
        }
        return $course;
    }
    private function uploadPhoto($photo,$course){
        $image = $photo;  // your base64 encoded
        list($type, $image) = explode(';', $image);
        list(, $image)      = explode(',', $image);
        $data = base64_decode($image);
        $imageName = date("YmdHis") . $course['id'] . '.' . 'jpeg';
        if(!file_exists(public_path('/courses/thumbnail'))){
            mkdir(public_path('/courses/thumbnail'),0777,true);
        }
        file_put_contents(public_path() . '/' . 'courses/thumbnail/' . $imageName, $data);
        $course->update([
            'thumbnail' =>  '/courses/thumbnail' . '/' . $imageName,
        ]);
    }
    public function removeCourse(Course $course){
        if($course->status == 2){
            return $course->delete();
        }
        $course->status = 2;
        $course->save();
    }
    public function updateCourse(Request $request, Course $course){
        $course->update([
            'course_code' => $request->course_code,
            'name' => $request->name,
            'status' => $request->status,
            'durations' => $request->durations,
            'slots' => $request->slots,
            'description' => $request->description,
            'requirements' => $request->requirements,
        ]);
        return $course;
    }
    public function activeCourse(Course $course){
        $course->status = 1;
        $course->save();
    }
    public function updateThumbnail(Request $request){
        $course = Course::where('id',$request->id)->first();
        $this->uploadPhoto($request->thumbnail,$course);
    }
}
