class MiFooter extends HTMLElements{
connectedCallback(){
this.innerHTML=/* html*/ ´Copyrigth &copy; Hugo Glez´;
}
}
customElements.define ("mi-footer",MiFooter);
