console.log("working just fine!")

//OOP - Inheritence
class MyHeader extends HTMLElement {
  conectedCallback() {
      this.innerHTML = ``
  }
}
