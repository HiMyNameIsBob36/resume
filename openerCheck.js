var openerElement;

window.customElements.whenDefined('my-opener').then( function() { 
   var openerElement = document.getElementById("opener") 
})

var openerElement = document.getElementById("opener")
// sessionStorage.setItem("visitorName", "Micky Mouse");
// TURN OFF WHEN READY TO POST
sessionStorage.removeItem("visitorName");
sessionStorage.removeItem("visitorCompany");

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

document.getElementById("SubmitVisitor").addEventListener('click', function(event) {
  event.preventDefault();
  registerNewVisitor( false);
  openElement.style.display = "none"
})

document.getElementById("SubmitAnon").addEventListener('click', function(event) {
  event.preventDefault();
  registerNewVisitor( true );
  openElement.style.display = "none"
})
