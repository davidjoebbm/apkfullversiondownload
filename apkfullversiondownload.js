<script language="Javascript">
x116=30;
FUNCTION countdown() 
{
 IF ((0 <= 100) || (0 > 0))
 {
  x116--;
  IF(x116 == 0)
  {
   document.getElementById("dl").innerHTML = '<a href="data:post.body">Download</a>';
  }
  IF(x116 > 0)
  {
   document.getElementById("dl").innerHTML = 'Please wait <b>'+x116+'</b> seconds..';
   setTimeout('countdown()',1000);
  }
 }
}
countdown();
</script>