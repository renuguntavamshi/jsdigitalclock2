
function runningtime(){
    let date=new Date();
let runninghours=date.getHours();
let runningminutes=date.getMinutes();
let runningseconds=date.getSeconds();
let amorpm=document.getElementById("isamorpm");
if(runninghours>12){
    runninghours-=12;
 amorpm.innerText="PM";  
}
document.getElementById("hours").innerText=runninghours;
document.getElementById('minutes').innerText=runningminutes;
document.getElementById('seconds').innerText=runningseconds;

}
setInterval(runningtime,1000);
let wakingtime=document.getElementById("wakeup");
let lunchtime=document.getElementById("lunch");
let naptime=document.getElementById("nap");
let sleeptime=document.getElementById("niight");

function settime(){
   document.querySelector("#settingwakeuptime").innerText=wakingtime.options[wakingtime.selectedIndex].text;
  document.querySelector("#settinglunchtime").innerText=lunchtime.options[lunchtime.selectedIndex].text;
   document.querySelector("#settingnaptime").innerText=naptime.options[naptime.selectedIndex].text;
  document.querySelector("#settingnighttime").innerText=sleeptime.options[sleeptime.selectedIndex].text;
let mainimage=document.querySelector("#mainimage");
  let wake=wakingtime.value;
let lunch=lunchtime.value;
let nap=naptime.value;
let sleep=sleeptime.value;
  let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let amorpm=document.getElementById("isamorpm");
    if(hours===parseInt(wakingtime.value)){
        document.querySelector("#greeting1").innerText="Good Morning!Start the day feshly";
        document.querySelector("#greeting2").innerText="Grab some Healthy Breakfast";
        mainimage.src='morning.png'
    }
else  if(hours===parseInt(lunch)){
        document.querySelector("#greeting1").innerText="Good Afternoon Dear";
        document.querySelector("#greeting2").innerText="Keep Working Hard";
        mainimage.src="./lunch.jpg"
    }
    else if(hours===parseInt(nap)){
        document.querySelector("#greeting1").innerText="Good Evening!Have some Tea or Snacks";
        document.querySelector("#greeting2").innerText="Take a few minutes break and come back to your work again";
        mainimage.src="./tea.jpg"
    }
    else if(hours===parseInt(sleep)){
        document.querySelector("#greeting1").innerText="Good Night";
        document.querySelector("#greeting2").innerText="Turn off your lights and sleep";
        mainimage.src="./sleep.jpg"
    }    
//     console.log(hours);
//     console.log(lunch.value);
}
