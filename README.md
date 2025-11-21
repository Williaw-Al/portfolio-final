# Portfólio Pessoal

Bem vindo a um projeto muito especial. O meu Portfólio Pessoal!

Tematizado em volta do meu mascote Coruja, ele traz algo de interessante e interativo em cada sessão da página!

## 🛠 Tecnologias

Para criar uma experiência mais leve ao lado do cliente, decidi criar uma página estática utilizando apenas linguagens da base da web. O maior diferencial foi o uso do framework tailwindcss, com o intuito de praticar essa tecnologia bastante utilizada hoje em dia:

- **HTML**: Toda a base e infraestrutura do site;
- **Tailwind CSS**: Framework usado para a estilização geral da página;
- **Javascript**: A lógica dos elementos interativos e funcionalidades;

Também utilizei de outras ferramentas para a criação de elementos específicos:

- **Inkspace**: Imagens vetoriais. Todo o Coruja foi feito com o programa;
- **RealWorldPaint**: Design geral dos elementos, a edição, correção e transformação de imagens;
- **FontAwesome**: Os ícones do cabeçalho e das redes sociais.
- **Devicon**: Para os ícones da seção Habilidades.

Para auxiliar na criação do site, utilizei algumas inteligências artificiais. Se percebi uma coisa, foi que o no-coding está muito mais próximo de tirar o trabalho de programadores do que o vibe-coding.

- **ChatGPT**/**Gemini**: Suporte para conceitos, ajuda ao ficar preso em alguma criação e me deixando preso em outras;
- **GeminiCLI**: Efetuação de código repetitivo, orientação com a estrutura de pastas do projeto.

## 🤔 Ideia da página 💡

Após muito tempo, decidi ajustar meu antigo portfólio para representar melhor onde estou como programador. Deixando tudo mais interativo e aplicando novos conceitos, como o tailwindcss.

Ao planejar a nova versão, optei por utilizar apenas o básico (html, css e js) no site, deixando complexidade de diversas bibliotecas e frameworks para outros projetos. Escolhi o tailwindcss para fins didáticos, praticando seu uso em um projeto grande.

Com isso o portfólio trouxe muitos desafios, e me permitiu brincar com diversos conceitos. Estar envolvido em todo o processo da criação foi um desafio enorme, mas me sinto muito satisfeito com o resultado final. Se divirtam na página!

### ✨ Dinâmicas interativas - A base desse portfólio 🧩

Cada sessão possui uma dinâmica diferente, permitindo ao usuário interagir e brincar com o site.

- **Header**: Todos elementos com efeito ao clique e ao toque. E o que é aquilo ao descer a página?
- **Home**: O Coruja aparece com todo o seu resplendor pela primeira vez! Depois de dar as caras em um pequeno projeto, o Coruja recebe o corpo que tanto desejou! Seu design é inspirado em um objeto muito simbólico que recebi ao completar meu curso de Administração, e suas cores (assim como do site!) vieram do Mucho Negro, uma espécie de coruja com plumagem e cores muito peculiares!
- **Sobre**: Aqui está a minha foto e meu texto... muito simples. Onde está a interação?
- **Habilidades**: Todas linguagens/programas que tenho maior facilidade de usar. Consegue ver todos?
- **Projetos**: Passe na vitrine e deixa o celular perto!
- **Rodapé**: Simples, mas temos um formulário funcional para entrar em contato!

## 📱 Usando o site 💻

### Header

![Imagem de exemplo do Header](./src/assets/readme-images/header-site-sample.png 'Header da página')

Um header fixado na tela que acompanha o usuário e dá um feedback de quanto o mesmo navegou na tela. O botão da logo puxa o usuário para o topo da tela e cada um dos ícones levam o usuário para a respectiva sessão, bem intuitivo. Todos esses ícones são agrupados em um menu hamburguer se a tela do aparelho for mobile.

![Imagem do menu hamburguer](./src/assets/readme-images/header-mobile-sample.png 'Menu hamburguer')

Outros elementos de destaque são uma barra de progresso e o Coruja?!

![Gif da barra de progresso e do Coruja](./src/assets/readme-images/header-progress-bar.gif 'Elementos visuais: Bara de progresso e o coruja')

A barra de progresso se extende por toda a largura da tela, dando um feedback ao usuário para o quanto ele percorreu do site. E o Coruja ajuda na ideia de interatividade do site, dando um feedback quando o usuário navega pela página.

### Home

![Imagem de exemplo da seção Home](./src/assets/readme-images/home-section-sample.png 'Home da página')

O Home é o contato inicial à página, juntamente ao header. Eu queria algo bem simples, sem assustar as pessoas com a minha cara. Então optei por algo bem minimalista, mas apostando no carisma do Coruja.

![Gif da animação do Coruja](./src/assets/readme-images/home-coruja-animation.gif 'Animação do Coruja')

A imagem dele foi repartida em partes, e usando uma mesma animação simples de movimento vertical, mas mudando a velocidade para cada uma dessas partes, consegui criar a impressão dele estar respirando.

A tela também já mostra minhas redes sociais e currículo, caso a pessoa esteja retornando e já queira um acesso rápido às informações.

### Sobre mim

![Imagem de exemplo da seção Sobre Mim](./src/assets/readme-images/about-section-sample.png 'Seção Sobre mim')

Escrever sobre nós mesmos é um pouco estranho quando não temos a prática, mas acredito que dá para se ter uma ideia de quem é a página ao utilizá-la e ler o texto.

A seção about foi idealizada para simular vagamente uma janela de um software. Isso se traduz também nas interações com ela. Onde você pode escrever no programa e interagir com a janela.

![Imagem das possíveis interações da seção](./src/assets/readme-images/about-interactions-sample.png 'Possíveis interações da seção')

A borda foi criada usando o border-image, para dar um toque mais pessoal no site e deixá-la com um design mais único.

### Habilidades

![Imagem de exemplo da seção Habilidades](./src/assets/readme-images/skills-section-sample.png 'Seção Habilidades')

Essa seção apresenta linguagens/programas que tenho bom conhecimento técnico.

As habilidades se expandem como estrelas, pedindo a interação do usuário de maneira intuitiva. A ideia foi unir uma interação rápida com o olhar do Coruja, criando uma unidade aos elementos presentes na tela.

![Gif da animação de hover das Habilidades](./src/assets/readme-images/skills-hover-animation.gif 'Animação das habilidades surgindo')

Cada habilidade possui um hover no elemento que mostra os pontos mais relevantes que eu apresento em certa linguagem ou programa. Para não poluir o mobile, optei por deixar somente a interação básica de clique.

### Projetos

![Imagem de exemplo da seção Projetos](./src/assets/readme-images/projects-section-sample.png 'Seção Projetos')

Apresenta duas partes: uma lista de projetos selecionados e uma aba para visitar meus repositórios no github e no gitlab.

![Imagem de exemplo da seção Projetos aba 'Outros'](./src/assets/readme-images/projects-section-sample2.png 'Aba Outros')

Essa seção também utiliza de uma border-image para dar um toque mais personalizado, além de uma pequena demonstração das páginas. A criação dessa parte foi feita para suportar novos projetos sendo colocados eventualmente, principalmente com o uso de um arquivo JSON personalizável.

![Gif dos diferentes projetos sendo selecionados](./src/assets/readme-images/projects-display-list.gif 'Uso do display para os projetos')

Ele apresenta também um QRCode diferenciado para os projetos na vitrine, levando o usuário diretamente para a página selecionada.

### Rodapé

![Imagem de exemplo do rodapé do site](./src/assets/readme-images/footer-site-sample.png 'Footer do site')

Simples e direto ao ponto. É a área com menos interação o usuário, mas ao mesmo tempo é a parte com o qual pode entrar em contato diretamente comigo ao usar o formulário.

![Imagem do formulário Web3Forms](./src/assets/readme-images/footer-form-sample.png 'Formulário da página')

Ele utiliza o Web3Forms para realizar o contato com o meu email, porém a ideia é mudá-lo para meu próprio database local quando eu tiver mais prática com SQL.

## 🔥 Desafios e Obstáculos

O projeto demonstrou diferentes desafios ao longo de sua concepção e aplicação.

Desde o princípio eu sabia que queria colocar diferentes formas de interagir com cada sessão, além de utilizar o Coruja no header. Para isso funcionar e não ser algo aleatório, o usuário deveria ser instigado à brincar com os elementos do site, então foquei em criar um ambiente propenso à exploração.

Pude utilizar de antigos projetos para enriquecer o site, além da ajuda de pessoas próximas para feedback e brainstorm.

O uso de IA se mostrou um pouco mais complexo do que imaginei, onde muitas vezes me vi apagando incêndios ou tendo que fazer tudo do zero, mas para funções mais repetitivas e simples, elas agilizaram o processo. Seu uso foi mais no fato de aprender coisas novas e ajuda para a resolução de bugs.

A necessidade de refatoração nunca acaba. Muitas funções e classes foram se transformando ao longo do tempo, mas mesmo assim todo o dia que abro o código já modifico algo antigo para melhorar o site.

O design do site, assim como cada interação diferenciada das seções foi um grande desafio. Ter que pensar nas cores, estrutura, elementos... Mas no fim consegui criar algo que me deixou orgulhoso.

![Imagem comparando a versão antiga da página com a nova](./src/assets/readme-images/page-evolution-comparison.png 'Comparação visual entre a versão antiga e nova')

## 🦉 Finalizando

Depois de muito esforço, inspiração por outros devs e o fato de ser difícil se motivar todos os dias, a página está completa e funcional. Muitas coisas para melhorar, mas já pode ser usufruida por todos.

Agora o objetivo é continuar me aperfeiçoando e seguindo os estudos, não podemos parar de evoluir!