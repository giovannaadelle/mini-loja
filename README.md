# Projeto mini loja estilizada 

Projeto de mini loja virtual desenvolvido durante a formação Dev Fullstack da +PraTI como parte de um estudo sobre arquiteturas de CSS em aplicações React. O objetivo é demonstrar e comparar quatro abordagens de estilização diferentes para a mesma tela, destacando as vantagens e desvantagens de cada método.

A aplicação consiste em uma página de produtos responsiva, contendo uma barra de navegação fixa e um grid de cards de produto.

### Principais Funcionalidades
- Grid Responsivo: O layout dos produtos se adapta a diferentes tamanhos de tela.
- Tema Claro e Escuro: A loja oferece um modo noturno persistente, que é salvo na memória do navegador.
- Estados do Componente: cards de produto com efeitos de hover, estados de carregamento (skeleton) e botões com variantes e estados de disabled.


### Estrutura do Projeto
O projeto é dividido em quatro pastas, cada uma representando uma técnica de estilização:

- `1-css-global:` Estilos tradicionais com variáveis CSS e convenção BEM.
- `2-css-modules:` Estilos com escopo local para evitar conflitos.
- `3-tailwind:` Estilização com classes de utilidade.
- `4-styled-components:` Estilização com JavaScript (CSS-in-JS) e ThemeProvider.