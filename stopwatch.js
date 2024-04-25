let a = document.getElementsByTagName("span");
    let ss = document.getElementById("s")
    let div = document.getElementsByTagName("div")

    let count = 0
    let milliseconds =0;
    let seconds =0;
    let mins = 0;
    let hours =0;
let id;
let startu = false;
    function start(){
        if(!startu){
            startu=true;
            count=0;
            
            s.innerHTML="pause";
            id = setInterval(()=>{
        
    milliseconds+=100;
div[0].style.backgroundImage="url(timelapse.gif)";
    a[0].textContent=hours.toString().padStart(2,0);
    a[1].innerHTML=mins.toString().padStart(2,0);
    a[2].innerHTML=seconds.toString().padStart(2,0);
    a[3].innerHTML=milliseconds.toString().padStart(4,0);

    console.log(milliseconds,seconds,mins,hours)
if(milliseconds==1000){
milliseconds=0;
seconds+=1
console.log(milliseconds)
}
if(seconds==60){
    seconds=0;
    mins+=1;
}
if(mins==60){
    mins=0;
    hours+=1;
}
},100)
   
        }else{
            startu=false;
s.innerHTML="start";
count=0;
clearInterval(id)
        }
 }

    // function pause(){
       
    // }
     function reset(){
        clearInterval(id)
        // s.innerHTML="start"
        count=0;
        milliseconds =0;
    seconds =0;
    mins = 0;
    hours =0;
    a[0].textContent=hours.toString().padStart(2,0);
    a[1].innerHTML=mins.toString().padStart(2,0);
    a[2].innerHTML=seconds.toString().padStart(2,0);
    a[3].innerHTML=milliseconds.toString().padStart(4,0);


     }
    