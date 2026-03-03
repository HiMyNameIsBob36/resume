var openerElement = document.getElementById("opener")
// sessionStorage.setItem("visitorName", "Micky Mouse");
// sessionStorage.removeItem("visitorName");

if (sessionStorage.getItem("visitorName") == null
  openerElement style.display = "block";
else
  openerElement style.display = "none";

function registerNewVisitor( anonCheck ) {
  if (anonCheck) {
    sessionStorage.setItem("visitorName", "anon")
    sessionStorage.setItem("visitorCompany", "anon")
  } else {
    sessionStorage.setItem("visitorName", document.getElementById("visitorName").value)
    sessionStorage.setItem("visitorCompany", document.getElementById("visitorCompany").value)
  }
}
