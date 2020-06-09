<?php

namespace App\Http\Controllers;

use App\NewsCompose;
use Illuminate\Http\Request;

class NewsComposeController extends Controller
{
    /**
    * Create a new controller instance.
    *
    * @return void
    */
    public function __construct()
    {
        //
    }
    
    // showall
    public function index()
    {
        $news = NewsCompose::all();
        return response()->json($news);
    }

    // add new newsletter
    public function create(Request $request)
    {
        // validation 
        $this->validate($request, [
            'title'=> 'required',
            'content' => 'required'
            ]);
            $news = NewsCompose::create($request->all());
            return response()->json($news);
            
        }

        //show a particular newsletter
        public function showone($id)
        {
            $news = NewsCompose::findOrFail($id);
            return response()->json($news);
        }
        
        // update 
        public function update(Request $request, $id)
        {
            //validate
            $this->validate($request, [
                'title'=> 'required',
                'content' => 'required'
                ]);
                //update
                $news= NewsCompose::findOrFail($id);
                
                $news->title = $request->input('title');
                $news->content = $request->input('content');
                $news->save();
                return response()->json($news);
                
            }
            

            // delete
            public function destroy($id)
            {
                $news = NewsCompose::findOrFail($id);
                $news->delete();
                return response()->json('news removed successfully');
            }
            
        }
        