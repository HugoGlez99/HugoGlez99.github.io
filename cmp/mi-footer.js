class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Hugo Alberto Gonzalez Perez`;
  }
}
customElements.define("mi-footer", MiFooter);
