var openerElement = document.getElementById("opener")
sessionStorage.setItem("visitorName", "Micky Mouse")

if (sessionStorage.getItem("visitorName") == null
  openerElement style.display = "block";
else
  openerElement style.display = "none";
