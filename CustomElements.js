console.log("working just fine!")

//OOP - Inheritence
class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
     <h1>The Resume of ME :D</h1>
      <div id="navigationButtons">
        <button onclick="window.location.href = 'index.html'">Home</button>
        <button onclick="window.location.href = 'HTMLGames.html'">HTML Games</button>
        <button onclick="window.location.href = 'game1.html'">The Bridge</button>
        <button onclick="window.location.href = 'game2.html'">The Pizza Ria</button>
        <button onclick="window.location.href = 'game3.html'">Game #3</button>
      </div>
    `
  }
}

class MyFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `<p>When I get the chance :P</p>`
  }
}

class MyOpener extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `   
      <div id = 'opener'> 
       <form action="https://api.web3forms.com/submit" method="POST" id="VisitorForm">
          <input type="hidden" name="access_key" value="39daabdd-7de4-4142-81ca-ab4554932530">
          <label for=""> Name <input type="text" id="visitorName" name="VisitorName"> </label>
          <label for=""> Company <input type="text" id="visitorCompany" name="visitorCompany"> </label>
          <input type="submit" id="submitVisitor" value="Submit">
          <input type="button" id="submitAnon" value="Decline">
        </form>  
      </div>`
  }
}

customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)
customElements.define('my-opener', MyOpener)
