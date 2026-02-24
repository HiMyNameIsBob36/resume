var openerElement = document.getElementById("opener")
// sessionStorage.setItem("visitorName", "Micky Mouse");
// sessionStorage.removeItem("visitorName");

if (sessionStorage.getItem("visitorName") == null
  openerElement style.display = "block";
else
  openerElement style.display = "none";
