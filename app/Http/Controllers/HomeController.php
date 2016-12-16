<?php

namespace App\Http\Controllers;

use App\Announce;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $announces = Announce::where('state', 'A')
            ->orderBy('apply_date', 'desc')
            ->paginate(5);

        // TODO: extract to portal_sidebars
        $sidebars = [
            ['title' => 'Web Mail', 'link' => '#' ],
            ['title' => 'KKBOX Blog', 'link' => '#' ],
            ['title' => 'Twiki', 'link' => '#' ],
            ['title' => 'Galley', 'link' => '#' ],
            ['title' => 'HR Portal', 'link' => '#' ],
            ['title' => 'HR Portal (EN)', 'link' => '#' ],
            ['title' => 'eflow', 'link' => '#' ],
            ['title' => 'Trac', 'link' => '#' ],
            ['title' => 'Slack', 'link' => '#' ],
            ['title' => 'CRM', 'link' => '#' ]
        ];

        $others = [
            ['title' => '外出申請', 'link' => '#' ],
            ['title' => '名片申請', 'link' => '#' ],
            ['title' => 'Time Card', 'link' => '#' ],
        ];

        return view('home', [
            'announces' => $announces,
            'sidebars' => $sidebars,
            'others' => $others,
        ]);
    }
}
