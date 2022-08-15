// This creates an alert. The world needs more lerts.
alert("Hello World!")

/*
This is a multi-line 
comment.
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openMenu() {
    var x = document.getElementById("portfolioTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }