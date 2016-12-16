<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Announce extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'intranet_announce';

    protected $fillable = [
        'announce_title',
        'announce_detail',
        'apply_person',
        'apply_date',
        'start_time',
        'end_time',
        'priority',
        'state',
        'mail_remind'
    ];
}
