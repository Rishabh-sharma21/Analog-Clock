var currentDate = new Date();

// Get individual components of the date and time
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
var day = currentDate.getDate();
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

function updateTime(){
    var newSecondsMain = new Date().getSeconds()
    var newMinutesMain = new Date().getMinutes()
    var newHoursMain = new Date().getHours()
   let Hrotation= 30.2*newHoursMain
   let Mrotation= 6*newMinutesMain
   let Srotation= 7*newSecondsMain 
   console.log(currentDate);
   document.getElementsByClassName("Hours")[0].style.transform= `rotate(${Hrotation}deg)`
   document.getElementsByClassName("minutes")[0].style.transform= `rotate(${Mrotation}deg)`
   document.getElementsByClassName("secondspin")[0].style.transform= `rotate(${Srotation}deg)`


}
setInterval( updateTime , 1000 );
