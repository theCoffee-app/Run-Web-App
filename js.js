/*jslint browser: true*/
/*jQuery unsured:false*/
/* eslint-env browser*/

/* Shoe Calculator */
function calculate() {
    var shoeType = document.getElementById("cushionDropdown");    
    
    if (shoeType.value == "Maximal")
        {
            var maxMiles = 375.00;
            var miles = document.getElementById("Miles").value;
            var remainMiles = maxMiles - miles;
             //alert('Remaining Miles: ' + remainMiles);
            
            if (remainMiles < 75)
                {
                    alert("Your shoes are dead! Looks like you could use a new pair!");
                }
            else if (remainMiles <= 175 && remainMiles >= 75)
                {
                     alert("Meh. You only have " + remainMiles + " left.");
                }
            else 
                {
                    alert("Good! You've still got some more miles!");
                }
                    
        }
    
    if (shoeType.value == "High Cushion")
        {
            var maxMiles = 450.00;
            var miles = document.getElementById("Miles").value;
            var remainMiles = maxMiles - miles;             
            
            if (remainMiles < 75)
                {
                    alert("Your shoes are dead! Looks like you could use a new pair!");
                }
            else if (remainMiles <= 175 && remainMiles >= 75)
                {
                     alert("Meh. You only have " + remainMiles + " left.");
                }
            else 
                {
                    alert("Good! You've still got some more miles!");
                }
                    
        }

     if (shoeType.value == "Normal Cushion")
        {
            var maxMiles = 400.00;
            var miles = document.getElementById("Miles").value;
            var remainMiles = maxMiles - miles;             
            
            if (remainMiles < 75)
                {
                    alert("Your shoes are dead! Looks like you could use a new pair!");
                }
            else if (remainMiles <= 175 && remainMiles >= 75)
                {
                     alert("Meh. You only have " + remainMiles + " left.");
                }
            else 
                {
                    alert("Good! You've still got some more miles!");
                }
                    
        }
    
    if (shoeType.value == "Light Cushion")
        {
            var maxMiles = 325.00;
            var miles = document.getElementById("Miles").value;
            var remainMiles = maxMiles - miles;             
            
            if (remainMiles < 75)
                {
                    alert("Your shoes are dead! Looks like you could use a new pair!");
                }
            else if (remainMiles <= 175 && remainMiles >= 75)
                {
                     alert("Meh. You only have " + remainMiles + " left.");
                }
            else 
                {
                    alert("Good! You've still got some more miles!");
                }
                    
        }
    
    if (shoeType.value == "Minimalist")
        {
            var maxMiles = 200.00;
            var miles = document.getElementById("Miles").value;
            var remainMiles = maxMiles - miles;             
            
            if (remainMiles < 75)
                {
                    alert("Your shoes are dead! Looks like you could use a new pair!");
                }
            else if (remainMiles <= 175 && remainMiles >= 75)
                {
                     alert("Meh. You only have " + remainMiles + " left.");
                }
            else 
                {
                    alert("Good! You've still got some more miles!");
                }
                    
        }

} 

/** Pace Calculator */

function calcPace(){             
    var dist = document.getElementById("distance").value;
    var min = document.getElementById("min").value;
    var sec = document.getElementById("sec").value;

    var convSec = sec/60;                
    var convMin = (+min + +convSec);
    var pace = convMin/dist;                
    var p = pace.toFixed(2);
    //
    var newMin = Math.trunc(p);
    var dec = p - Math.floor(p);        
    var newSec = (dec *60).toFixed(2); //Convert from decimal to time (sec)
    var newSec1 = Math.trunc(newSec); //Removes decimals                                             
          
function padNum(newSec1) {
    return (newSec1 < 10 ? '0' : '') + newSec1        
    }

var time = (newMin + ":" + padNum(newSec1) + " min/mile");
document.getElementById("pace").value = time;   
//   alert(time);        
}




