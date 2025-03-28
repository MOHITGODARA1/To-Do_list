// window.addEventListener("load",()=>{
//    let popup=document.getElementsByClassName("popupanimation");
//    setTimeout(()=>{
//       popup.style.visibility='hidden';
//    },3000);
// })
window.addEventListener("DOMContentLoaded", () => {
   let popup = document.getElementsByClassName("popupanimation")[0];
   let next = document.querySelector(".start");
       if (popup) { 
           setTimeout(() => {
               popup.classList.add("hidden");
               setTimeout(() => {
                   next.classList.add("visible");
               }, 1500);
           }, 3000);
       }
   });
// datemaneger
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const hour=hours.toString().padStart(2, '0');
const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
const time=document.getElementsByClassName("according_to_time")[0];
if(hour>6 && hour<=12){
   // goodmorning
   time.innerHTML="Good Morning,";
}else if(hour>12&&hour<=17){
   //goodafternoon
   time.innerHTML="Good Afternoon,";
}else{
   //goodevening
   time.innerHTML="Good evening,";
}
console.log("Current Time:", hour);


//importent note js
