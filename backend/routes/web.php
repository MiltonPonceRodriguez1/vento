<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MotorcycleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/motorcycle/index', [MotorcycleController::class, 'index']);
Route::post('/motorcycle/store', [MotorcycleController::class, 'store']);
Route::put('/motorcycle/update/{id}', [MotorcycleController::class, 'update']);
Route::delete('/motorcycle/destroy/{id}', [MotorcycleController::class, 'destroy']);

