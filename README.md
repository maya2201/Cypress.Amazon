Este projeto é uma automação de testes usando Cypress para validar funcionalidades da Home Page , Busca de produtos e do Carrinho de compras no site da Amazon. O objetivo é garantir que as funcionalidades da HomePage da Busca e da Adição ao Carrinho estejam funcionando corretamente.

**🛠 Tecnologias Utilizadas:**

**Cypress**: Ferramenta para testes de ponta a ponta (end-to-end).

**JavaScript**: Linguagem de programação usada para escrever os testes.

**📝 Exemplos de Testes**


**Home**

Em home.cy.js
Validar a pagina principal da Amazon

**Busca de Produtos**

Em busca.cy.js, você encontrará testes que:

Acessam a página inicial da Amazon.

Realizam uma busca por um termo específico.

Validam a exibição dos resultados da busca.

Valida sugestões ao digitar o produto

Valida resultado de busca para produtos nao encontrados

**Carrinho de Compras:**

Em cart.spec.js, você encontrará testes que:

Adicionam um produto ao carrinho.

Validam se o produto foi corretamente adicionado ao carrinho

valida a adição de mais produtos no carrinho

valida a exclusão de produto do carrinho



