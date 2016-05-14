<?php

namespace App\Http\Controllers;

use App\Audit;
use Illuminate\Http\Request;

use App\Http\Requests;

class AuditController extends Controller
{
    public function index()
    {
        $audits = Audit::with(['type', 'user'])->latest()->get();

        dd($audits);

        return view('audit.index')->with(['audits' => $audits]);
    }
}
