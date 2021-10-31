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
            'first_name'=> 'super',
            'last_name'=> 'admin',
            'position'=> 'admin',
            'privilege'=> 1,
            'status'=> true,
            'email' => 'admin@admin.com',
            'password' => '$2y$10$x5pc84duEg7cbL/0GXURXel5Yt/d5322LM6PdpABwhegJ4g96qb9u'
        ]);
    }
}
