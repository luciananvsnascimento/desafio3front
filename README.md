# Furniro - Site de Vendas de Móveis

## Descrição
Furniro é um projeto de e-commerce desenvolvido com React, TypeScript e Vite. O objetivo é proporcionar uma experiência de compra de móveis completa, com páginas de produtos, carrinho de compras, checkout e autenticação de usuários via Firebase. Desafio 3 do PB Compass Uol - Trilha React.

### Tecnologias Utilizadas

- React: Biblioteca para construção de interfaces de usuário.
- TypeScript: Superset de JavaScript com tipagem estática.
- Vite: Ferramenta de build rápida para projetos front-end.
- Firebase: Autenticação de usuários.
- JSON Server: Simulação de API backend (Products).
- Axios: Cliente HTTP.
- React Router Dom: Roteamento no React.
- Jest e Testing Library: Testes unitários.
- Slick Carousel: Carrossel de imagens.

### Funcionalidades
- Home: Página inicial.
- Shop: Página com todos os móveis.
- About: Sem redirecionamento.
- Contact: Página de contato.
- Ícone de Perfil: Página de login.
- Ícone de Carrinho: Abre modal com produtos e redirecionamento para a página do carrinho.
- Cards de produtos: Página de detalhes do produto.
- Página de Produto: Adição/remoção de produtos no carrinho.
- Página de Carrinho: Remoção de todos os produtos.
- Check Out: Rota protegida, acessível apenas para usuários logados.
- Formulário de Check Out: Validação de campos e preenchimento automático de endereço via API ViaCEP.
- Página de Login: Autenticação de usuários.
- Página de Cadastro: Cadastro de usuários.

### Infraestrutura
S3: Imagens hospedadas em um bucket S3.

### Scripts Disponíveis
- dev: Inicia o servidor de desenvolvimento.
- test: Executa testes com Jest.
- build: Realiza o build da aplicação.
- lint: Executa o ESLint para verificar padrões de código.
- start:json-server: Inicia o JSON Server na porta 3001.
- preview: Inicia a aplicação em modo de preview.
- test:coverage: Executa testes com cobertura de código.


