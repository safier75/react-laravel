<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
   public function index(){
      return view('welcome');
   }
   public function create(Request $req){
     
    $contact = new Contact;
    $contact->firstName=$req->firstName;
    $contact->lastName=$req->lastName;
    $contact->phone=$req->phone;
    $contact->email=$req->email;
    $contact->address=$req->address;
    $contact->message=$req->message;
    $contact->save();


   }


}
