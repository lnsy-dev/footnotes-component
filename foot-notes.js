class FootNotes extends HTMLElement {
  connectedCallback(){
    const foot_notes = document.querySelectorAll('foot-note');
    [...foot_notes].forEach((note,index) => {
      const footnote = document.createElement('div');
      footnote.setAttribute('id', index);
      footnote.innerHTML = `
      ${note.innerHTML}`; 
      this.appendChild(footnote);
      note.innerHTML = `<a href="#${index}">[${index}]</a>`
    })
  }
}

customElements.define('foot-notes', FootNotes)


