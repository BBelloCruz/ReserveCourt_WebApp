/*eslint-env browser*/

//Start JavaScript for Court Reserve
var court_1 = document.getElementById("court_1");
var court_2 = document.getElementById("court_2");
var court_3 = document.getElementById("court_3");
var court_4 = document.getElementById("court_4");

var courts = document.getElementsByClassName("courts");

var body_homeContainer = document.getElementById("home_body");
var court_infoContainer = document.getElementById("court_info");

var submitBtn = document.getElementById("submitBtn");
var CourtClicked;
var time_selected = document.querySelector('input[name="time_reserved_input"]:checked');
var user_name = document.querySelector("input[name='user_name']");

//Set all court container to green
for (var i = 0; i < courts.length; i++) 
    {
        courts[i].style.backgroundColor = "green";
    } 

// reserveCourt function
/* This function will receive a parameter and use it to decide which container is clicked. It will hide the current content container and open the form container where you will need to type name and select time. After submiting, it will change the color of the clicked court container, add name and time selected.
*/
function reserveCourt(event)
{
    
    if (event.target.hasChildNodes() === true)
    {
        CourtClicked = event.currentTarget;
    }
    else
    {
        CourtClicked = event.parentNode;
    }
    
    if(CourtClicked.style.backgroundColor == "red")
    {
        document.getElementById(CourtClicked.id).style.backgroundColor = "green";
        document.getElementById(CourtClicked.id).childNodes[3].innerHTML = "Available";
        document.getElementById(CourtClicked.id).childNodes[7].innerHTML = "Reserve Now!";
        document.getElementById(CourtClicked.id).childNodes[11].innerHTML = "Enjoy!";
    }
    else
    {
        body_homeContainer.style.display = "none";
        court_infoContainer.style.display = "block";
    }
    
}

// FormDataHandler
// This function will take care of the text and color changes.
function FormDataHandler(event)
{
    
//    console.log(event.id);
    
    if(event.style.backgroundColor == "green") 
    {
        document.getElementById(event.id).style.backgroundColor = "red";
       
        document.getElementById(event.id).childNodes[3].innerHTML = "Reserved";
        document.getElementById(event.id).childNodes[7].innerHTML = document.querySelector('input[name="time_reserved_input"]:checked').value; document.getElementById(event.id).childNodes[11].innerHTML = 
        document.querySelector("input[name='user_name']").value;
        
    }
    body_homeContainer.style.display = "block";
    court_infoContainer.style.display = "none";
}

court_1.addEventListener("click", function() {reserveCourt(event)});
court_2.addEventListener("click", function() {reserveCourt(event)});
court_3.addEventListener("click", function() {reserveCourt(event)});
court_4.addEventListener("click", function() {reserveCourt(event)});

submitBtn.addEventListener("click", function() {FormDataHandler(CourtClicked)});

//End JavaScript for Court Reserve