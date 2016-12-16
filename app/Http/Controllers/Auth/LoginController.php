<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use DateTime;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = new User();
        $user->remember_token = '';
        $user->name = 'wusungpeng';
        $user->email = 'wusungpeng@kkfarm.me';
        $user->avatar = '';
        $user->password = ' ';
        $user->updated_at = new DateTime();
        $user->created_at = new DateTime();

        $authUser = $this->findOrCreateUser($user);
        \Illuminate\Support\Facades\Auth::login($authUser, true);
        return redirect($this->redirectTo);
    }

    /** Return user if exists; create and return if doesn't
     *
     * @param $Google User
     * @return User
     */
    private function findOrCreateUser($user)
    {
        $authUser = User::where('email', $user->email)->first();

        if ($authUser) {
            return $authUser;
        }

        return User::create([
            'name' => $user->name,
            'email' => $user->email,
            'password' => '',
            'avatar' => $user->avatar_original,
            'updated_at' => new \DateTime,
            'created_at' => new \DateTime
        ]);
    }
}
