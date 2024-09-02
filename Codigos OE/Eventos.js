function inicializarModal() {
  // Criação dos elementos
  const botaoAbrir = document.createElement('button');
  botaoAbrir.textContent = 'Abrir Modal';
  
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.style.display = 'none';  // Inicialmente escondido
  modal.style.position = 'fixed';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';

  const conteudoModal = document.createElement('div');
  conteudoModal.style.backgroundColor = 'white';
  conteudoModal.style.padding = '20px';
  conteudoModal.style.borderRadius = '5px';
  
  const textoModal = document.createElement('p');
  textoModal.textContent = 'Este é o conteúdo do modal!';
  
  const botaoFechar = document.createElement('button');
  botaoFechar.textContent = 'Fechar';
  
  // Adicionando elementos ao modal
  conteudoModal.appendChild(textoModal);
  conteudoModal.appendChild(botaoFechar);
  modal.appendChild(conteudoModal);

  // Adiciona os elementos ao corpo do documento
  document.body.appendChild(botaoAbrir);
  document.body.appendChild(modal);

  // Função para abrir o modal
  function abrirModal() {
    modal.style.display = 'flex';
  }

  // Função para fechar o modal
  function fecharModal() {
    modal.style.display = 'none';
  }

  // Adiciona ouvintes de eventos
  botaoAbrir.addEventListener('click', abrirModal);
  botaoFechar.addEventListener('click', fecharModal);
  // Fechar o modal clicando fora do conteúdo
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      fecharModal();
    }
  });
}

// Inicializa o modal
inicializarModal();
