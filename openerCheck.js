var openerElement;

window.customElements.whenDefined('my-opener').then( function() { 
    openerElement = document.getElementById("opener");

   if (sessionStorage.getItem("visitorName") == null)
  openerElement.style.display = "block";
   else
  openerElement.style.display = "none";
   
document.getElementBuId("VisitorName").addEventListener('submit', function(event) {
   event.preventDefault();
   const formData = new FromData(event.targer);
   fetch(event.target.action, {
     method:event.targer.method,
      body:formData    
   })
   registerNewvisitor(false);
   openerElement.style.dispaly = "none;
      
 
   }

}


   document.getElementById("SubmitVisitor").addEventListener('click', function(event) {
      event.preventDefault();
  registerNewVisitor(false);
  openerElement.style.display = "none"
})

document.getElementById("SubmitAnon").addEventListener('click', function(event) {
  event.preventDefault();
  registerNewVisitor(true);
  openerElement.style.display = "none"
})

})

var openerElement = document.getElementById("opener")
// sessionStorage.setItem("visitorName", "Micky Mouse");
// TURN OFF WHEN READY TO POST
sessionStorage.removeItem("visitorName");
sessionStorage.removeItem("visitorCompany");


function registerNewVisitor( anonCheck ) {
  if (anonCheck) {
    sessionStorage.setItem("visitorName", "anon")
    sessionStorage.setItem("visitorCompany", "anon")
  } else {
    sessionStorage.setItem("visitorName", document.getElementById("visitorName").value)
    sessionStorage.setItem("visitorCompany", document.getElementById("visitorCompany").value)
  }
}
