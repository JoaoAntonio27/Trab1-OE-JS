// Funções de manipulação de eventos
function clicouNoElemento(evento) {
  console.log('Clicou no elemento:', evento.currentTarget.tagName);
  // Para interromper a propagação, descomente a linha abaixo
  // evento.stopPropagation();
}

// Elementos para adicionar os eventos
const elementoPai = document.createElement('div');
const elementoFilho = document.createElement('button');

// Configurando os estilos para visualização
elementoPai.style.padding = '50px';
elementoPai.style.border = '2px solid black';
elementoPai.textContent = 'Elemento Pai';

elementoFilho.textContent = 'Elemento Filho';
elementoFilho.style.margin = '10px';

// Adicionando os elementos na página
document.body.appendChild(elementoPai);
elementoPai.appendChild(elementoFilho);

// Adicionando eventos de clique
elementoPai.addEventListener('click', clicouNoElemento, true);  // Capturing (true)
elementoFilho.addEventListener('click', clicouNoElemento);       // Bubbling (false)
