<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AuditController extends Controller
{
    public function index()
    {
        return view('audit.index');
    }
}
