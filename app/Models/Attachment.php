<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    use HasFactory;
    protected $fillable = [
        'path',
        'appointment_id'
    ];

    public function appointment(){
        return $this->belongsTo(Appointment::class);
    }
}
