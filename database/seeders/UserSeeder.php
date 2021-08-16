<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name'=> 'test',
            'email' => 'test@test.com',
            'password' => '$2y$10$x5pc84duEg7cbL/0GXURXel5Yt/d5322LM6PdpABwhegJ4g96qb9u'
        ]);
    }
}
