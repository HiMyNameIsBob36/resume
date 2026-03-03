document.getElementById("submittionID").addEventListener('submit',
      event.preventDefualt();

      const formData = new FormData(event.target);

      fetch(event.target.action, {
            method: event.target.method,
            body: formData
      })

      document.getElementById("submissionPanel").style.display = "none";
})
