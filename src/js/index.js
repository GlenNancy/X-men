const personagens = document.querySelectorAll('.personagem');
const imagemPersonagemGrande = document.querySelector('.personagem-grande');
const nomePersonagem = document.getElementById('nome-personagem');
const descricaoPersonagem = document.getElementById('descricao-personagem');

personagens.forEach((personagem) => {
  personagem.addEventListener('mouseenter', () => {
    
    if(window.innerWidth < 450) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
    personagem.classList.add('selecionado');
    
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `src/img/card-${idPersonagem}.png`;

    nomePersonagem.innerHTML = personagem.attributes.id.value;

    descricaoPersonagem.innerHTML = personagem.getAttribute('data-description')
  })
})