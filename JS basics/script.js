var guess= Math.floor(Math.random()*100)+1
function guessNumber()
{
    var num= document.getElementById("in").value
    if (num==guess)
    {
      document.getElementById("p1").innerText="congrats! You Got It"
    
    }
    else if(num<guess)
     {
        document.getElementById("p1").innerText="Select a Greater number"
    
     }
    else{
        document.getElementById("p1").innerText="Select a Lesser number"
    }
}