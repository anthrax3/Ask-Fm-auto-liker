<script type="text/javascript">

Function getMoreAnsweres()
{
  var g = document.getElementsByClassName('submit-button-more submit-button-active');
  g[0].click();
}
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
var x = document.getElementById('like hintable' );
for (var i =0 ; i<x.length; i++)
{
x[i].click();
if(i<length-1)
{
    getMoreAnsweres();
    sleep(5000);
    x = document.getElementById('like hintable' );
} if(i==99)
return;

}


<script>
