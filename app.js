

const endDate = "30 october 2023 10:00 PM";

document.getElementById("end-date").innerText = endDate
const  inputs =  document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate)
    const now = new Date()
    // convert to seconds divide by 1000
    const diff = (end-now) /1000

    if (diff<0) return    
    // convert into days
   inputs[0].value= Math.floor(diff/3600/24)
   // convert into hour
   inputs[1].value = Math.floor(diff/3600)%24;
   // convert into minutes

   inputs[2].value = Math.floor(diff/60)%60;

   // convert into seconds
   inputs[3].value = Math.floor(diff)%60;

    
}


clock()


// 1 days =  24 hrs
//  1 hrs = 60 mins
//  60 mins =  3600 sec


setInterval(() => {
    clock()
    
}, 1000);