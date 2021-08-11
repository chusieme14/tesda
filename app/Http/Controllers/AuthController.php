<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request){
        $data = $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);
        if(!auth()->attempt($data)){
            // $user = User::where('username',$data['email'])->first();
            // if(!$user){
            return response(['error_message' => 'Incorrect credentials']);
            // }
            // $user->makeVisible(['password']);
            // if(!Hash::check($data['password'],$user->password)){
            //     return response(['error_message' => 'Incorrect credentials']);
            // }
            // Auth::login($user);
        }
        $token = auth()->user()->createToken('ACCESS TOKEN')->accessToken;

        return response(['user' => auth()->user(), 'token' => $token]);
    }
    public function logout(Request $request){
        $request->user()->tokens()->delete();
        Cookie::queue(Cookie::forget('tesda_session'));
        return $request->user();
        // auth()->user()->token()->revoke();
    }
    public function checkuser(Request $request){
        if($request->user()) return true;
        else return false;
    }
    public function getuser(Request $request){
        return $request->user();
    }
}
