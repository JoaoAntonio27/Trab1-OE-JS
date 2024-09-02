function inicializarAutocompletar() {
  // Cria elementos
  const input = document.createElement('input');
  input.id = 'barraPesquisa';
  input.placeholder = 'Digite algo...';
  
  const sugestoesDiv = document.createElement('div');
  sugestoesDiv.id = 'sugestoes';
  sugestoesDiv.style.border = '1px solid #ccc';
  sugestoesDiv.style.maxHeight = '100px';
  sugestoesDiv.style.overflowY = 'auto';
  
  // Adiciona os elementos ao corpo do documento
  document.body.appendChild(input);
  document.body.appendChild(sugestoesDiv);
  
  // Lista de sugestões
  const sugestoes = ['Sugestão 1', 'Sugestão 2', 'Sugestão 3'];
  
  // Função que exibe as sugestões filtradas
  function exibirSugestoes(query) {
    const caixaSugestoes = document.getElementById('sugestoes');
    
    if (query.trim() === '') {
      caixaSugestoes.innerHTML = ''; // Limpa sugestões se o campo estiver vazio
      return;
    }

    caixaSugestoes.innerHTML = ''; // Limpa sugestões anteriores
    
    const sugestoesFiltradas = sugestoes.filter(sugestao => 
      sugestao.toLowerCase().includes(query.toLowerCase())
    );
    
    sugestoesFiltradas.forEach(sugestao => {
      const divSugestao = document.createElement('div');
      divSugestao.textContent = sugestao;
      divSugestao.style.padding = '8px';
      divSugestao.style.cursor = 'pointer';
      divSugestao.addEventListener('mouseover', function() {
        divSugestao.style.backgroundColor = '#f0f0f0';
      });
      divSugestao.addEventListener('mouseout', function() {
        divSugestao.style.backgroundColor = 'transparent';
      });
      caixaSugestoes.appendChild(divSugestao);
    });
    
    if (sugestoesFiltradas.length === 0) {
      caixaSugestoes.textContent = 'Nenhuma sugestão disponível';
    }
  }
  
  // Adiciona o ouvinte de eventos para a barra de pesquisa
  input.addEventListener('input', function(event) {
    const query = event.target.value;
    exibirSugestoes(query);
  });
}

// Inicializa o autocompletar
inicializarAutocompletar();
