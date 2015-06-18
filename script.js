<script type="text/javascript">

Function getMoreAnsweres()
{
  var g = document.getElementsByClassName('submit-button-more submit-button-active');
  g[0].click();
}
Function sleep_()
{
setTimeout(function(){
                      console.log("THIS IS");
                     }
                , 5000);
}

var x = document.getElementById('like hintable' );
for (var i =0 ; i<x.length; i++)
{
x[i].click();
if(i<length-1)
{
    getMoreAnsweres();
    sleep_();
    x = document.getElementById('like hintable' );
} if(i==99)
return;

}


<script>
