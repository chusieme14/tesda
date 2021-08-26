<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CourseController;
use Illuminate\Support\Facades\Route;

Route::get('/admin/api/checkuser',[AuthController::class,'checkuser']);
Route::post('/admin/api/loginrequest',[AuthController::class,'login']);
Route::group(['middleware'=>['auth:sanctum']],function(){
    Route::get('/admin/api/logout',[AuthController::class,'logout']);
    Route::get('/admin/ongoing/courses/{status}',[CourseController::class,'getCourses']);
    Route::post('/admin/add/course',[CourseController::class,'addCourses']);
    Route::delete('/admin/remove/course/{course}',[CourseController::class,'removeCourse']);
    Route::put('/admin/update/course/{course}',[CourseController::class,'updateCourse']);
    Route::put('/admin/active/course/{course}',[CourseController::class,'activeCourse']);
});
Route::get('admin/{any?}',function(){
    return view('back.app');
})->where('any','.*');