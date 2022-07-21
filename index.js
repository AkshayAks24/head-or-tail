function handClick(){
    var res = Math.floor((Math.random()*2)+1);
   
    if (res==1){
    document.querySelector("img").setAttribute("src","gold-coin-png-11552734544buvivt5vmi-modified.png" );
    document.querySelector("h3").innerHTML =  document.querySelector("h3").innerHTML +" Head";}
    else{
        document.querySelector("img").setAttribute("src","tail.png" );
        document.querySelector("h3").innerHTML = document.querySelector("h3").innerHTML +" Tail";}
    }

document.querySelector("button").addEventListener("click",handClick);