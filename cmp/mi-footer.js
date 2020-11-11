class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Hugo Alberto Glez`;
  }
}
customElements.define("mi-footer", MiFooter);
