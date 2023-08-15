
var score=0;
function increasescore(){
   score+=10; //to increase the score by 10 on clicking on correct bubble
   document.querySelector("#scoreval").textContent=score; 
}
var hitrn=0;//global variable to be used during comparison
function getnew_hit(){
 hitrn=Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent=hitrn;
}


function makebubble()
{
    var clutter="";

    for(var i=1;i<=102;i++){
        var rn=Math.floor(Math.random()*10);//to create random number
    clutter+=`<div class="bubble">${rn}</div>`; //to add bubbles
    }
    
    document.querySelector("#pbtm").innerHTML=clutter; //to put bubbles in panel bottom
    

}

var timer=60;//global variable
function runtimer()//runtimer chalega to setinterval chalega
{
var timerint=setInterval(function(){ //timer rukne ke badd uske clear karne ke liye variable banaya
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;//to pick timer using id from html
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over</h1>`;//time khatam hone ke baad bubbles hat jayenge
    }
   
},1000);//it will run the function in each second...i.e. for timer
}

//hum bubble ke parent par event listener lagayenge pbottom taki hum ko sare bubble par listener na lagana pade or hum sirf uske parent se query raise kare

document.querySelector("#pbtm").addEventListener("click",
function(dets){
var clickednum=Number(dets.target.textContent);//dets.target vo h jispar click hua h or ye ek div h .textcontnt se sirf vo value ayegi jispar click hua number() se vo number mein change ho jayegi
if(clickednum===hitrn){
    increasescore();
    makebubble();
    getnew_hit();
}
});

// increasescore();
getnew_hit();
runtimer();
makebubble();