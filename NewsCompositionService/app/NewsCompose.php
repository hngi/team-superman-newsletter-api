<?php

namespace App;


use Illuminate\Database\Eloquent\Model;

class NewsCompose extends Model 
{
 
    protected $table = 'news';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'content',
    ];

    
}
