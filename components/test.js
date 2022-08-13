class Test extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = '<div>test</div>'
  }
}

window.customElements.define('test-copm', Test);