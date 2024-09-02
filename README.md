# Repositório de Exemplos de Eventos em JavaScript

## Descrição

Este repositório contém exemplos de como utilizar eventos em JavaScript para criar interações dinâmicas em uma página web. Os exemplos demonstram diferentes tipos de eventos e manipulação de eventos usando JavaScript puro.

## Como Rodar os Exemplos

1. **Abra o Navegador**:
   - Utilize qualquer navegador moderno, como Google Chrome, Mozilla Firefox ou Microsoft Edge.

2. **Abra uma Nova Aba em Branco**:
   - Navegue para `about:blank` ou simplesmente abra uma nova aba em branco.

3. **Abra o Console do Navegador**:
   - Pressione `F12` ou `Ctrl+Shift+I` (Windows/Linux) ou `Cmd+Option+I` (Mac) para abrir as ferramentas de desenvolvedor.
   - Selecione a aba **Console**.

4. **Cole o Código JavaScript**:
   - Copie o código JavaScript de um dos exemplos abaixo e cole-o no console.
   - Pressione **Enter** para executar o código.

## Exemplos

### 1. Propagação de Eventos

- **Descrição**: Demonstra a propagação de eventos (bubbling e capturing) e como controlar a propagação.
- **Como Funciona**: Cria um contêiner e um botão. Adiciona ouvintes de eventos para mostrar alertas quando o botão ou o contêiner são clicados. O evento do botão não se propaga para o contêiner devido ao uso de `event.stopPropagation()`.

### 2. Ouvinte de Eventos (Autocompletar em Barra de Pesquisa)

- **Descrição**: Implementa uma barra de pesquisa com sugestões automáticas baseadas na entrada do usuário.
- **Como Funciona**: Cria um campo de entrada e uma `<div>` para mostrar sugestões filtradas conforme o usuário digita. As sugestões são exibidas dinamicamente com base no texto inserido.

### 3. Clique para Abrir um Modal

- **Descrição**: Cria um modal que pode ser aberto e fechado com cliques.
- **Como Funciona**: Cria um botão para abrir um modal e um modal com um botão de fechar. O modal pode ser fechado clicando no botão de fechar ou clicando fora do conteúdo do modal.

### 4. Validação de Formulário

- **Descrição**: Valida um formulário simples para garantir que os campos não estejam vazios e que o e-mail tenha um formato válido.
- **Como Funciona**: Cria um formulário com campos para nome e e-mail. Valida a entrada do usuário e exibe mensagens de erro ou sucesso com base na validade dos dados inseridos.
