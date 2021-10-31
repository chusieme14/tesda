<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppointmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->string('learn_number');
            $table->string('last_name');
            $table->string('first_name');
            $table->string('middle_name');
            $table->string('gender');
            $table->string('birth_date');
            $table->string('age');
            $table->string('nationality');
            $table->string('birthplace');
            $table->string('email')->nullable();
            $table->string('mobile_number')->nullable();
            $table->string('tel_phone_number')->nullable();
            $table->string('home_address');
            $table->string('guardian_name');
            $table->string('guardian_address');
            $table->integer('civil_status');
            $table->string('educational_attainment');
            $table->integer('employment_type');
            $table->integer('employment_status');
            $table->string('employer_name')->nullable();
            $table->boolean('agreement')->nullable();
            $table->string('photo');
            $table->boolean('isregular')->default(true);
            $table->string('applicant_classification')->nullable();
            $table->string('course_qualification')->nullable();
            $table->string('scholar_type')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('appointments');
    }
}
