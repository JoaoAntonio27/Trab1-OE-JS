function inicializarFormulario() {
  // Criação dos elementos do formulário
  const formulario = document.createElement('form');
  formulario.id = 'formulario';
  
  const campoNome = document.createElement('input');
  campoNome.type = 'text';
  campoNome.id = 'nome';
  campoNome.placeholder = 'Nome';
  
  const campoEmail = document.createElement('input');
  campoEmail.type = 'email';
  campoEmail.id = 'email';
  campoEmail.placeholder = 'E-mail';
  
  const botaoEnviar = document.createElement('button');
  botaoEnviar.type = 'submit';
  botaoEnviar.textContent = 'Enviar';
  
  const mensagemErro = document.createElement('div');
  mensagemErro.id = 'mensagemErro';
  mensagemErro.style.color = 'red';
  
  // Adiciona os elementos ao formulário
  formulario.appendChild(campoNome);
  formulario.appendChild(campoEmail);
  formulario.appendChild(botaoEnviar);
  formulario.appendChild(mensagemErro);
  
  // Adiciona o formulário ao corpo do documento
  document.body.appendChild(formulario);
  
  // Função de validação do formulário
  function validarFormulario(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
    
    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const mensagemErro = document.getElementById('mensagemErro');
    
    mensagemErro.textContent = ''; // Limpa mensagens de erro anteriores
    
    let valido = true;
    
    if (nome === '') {
      mensagemErro.textContent += 'O nome é obrigatório.\n';
      valido = false;
    }
    
    if (email === '') {
      mensagemErro.textContent += 'O e-mail é obrigatório.\n';
      valido = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      mensagemErro.textContent += 'O e-mail deve ser válido.\n';
      valido = false;
    }
    
    if (valido) {
      mensagemErro.textContent = 'Formulário enviado com sucesso!';
      mensagemErro.style.color = 'green';
    }
  }
  
  // Adiciona o ouvinte de eventos para o envio do formulário
  formulario.addEventListener('submit', validarFormulario);
}

// Inicializa o formulário
inicializarFormulario();
