Ask-Fm-auto-liker
=================
this is a small script allows u to perform likes on Ask.fm in a while

What is ASK.FM?
Social Network for asking and answering 

How it works?

run this script on your browser console using F12
then paste it and hit enter while standing on the page of the profile u wnat to increase likes 

note 
 .... profile u want increase likes  , u must log in with another account 
 
 
 
 script 
 
 
 var x = document.getElementsByClassName('like hintable'); 
for (var i=0 ; i<9 ; i++) 
x[i].click();
