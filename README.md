AngularJS-Fundamentos-Start
===========================

> Este app é um ponto de partida para os alunos do curso [AngularJS - Fundamentos](#).

Instalação
----------

<ol>
<li>Instale o [Node.js](http://nodejs.org/download/) na sua máquina</li>
<li>Faça o download do projeto clicando no botão Download ZIP ao lado, na barra lateral desta página</li>
<li>Descompacte o arquivo obtido</li>
<li>Abra o prompt de comando e navegue até o caminho da pasta descompactada</li>
<li>Na pasta compactada, instale os módulos do NPM</li>
<p><pre><code>npm install</code></pre></p>
<li>Instale o gulp e o bower globalmente e depois o somente o gulp localmente como uma dependência de desenvolvimento</li>
<p>
<pre><code>npm install -g gulp bower
npm install --save-dev gulp</code></pre>
</p>
<li>Pronto! =D Agora é só rodar a aplicação</li>
<p><pre><code>gulp</code></pre></p>
<li>E executá-la no browser com o endereço <code>localhost:3000</code></li>
</ol>


Usando o Bower
--------------

O <a href="http://bower.io/">Bower</a> é um gerenciador de pacotes web. Com ele a gente pode obter rapidamente bibliotecas e frameworks
(como o AngularJS, jQuery, Bootstrap) sem nem sequer abrir o browser. Consequentemente você não precisaria,
após baixar a biblioteca desejada, descompactar, copiar e colar pra pasta desejada.

Com o Bower, as coisas ficam muito mais fáceis. Basta você digitar um único comando e ele se encarrega de buscar
o pacote que você quer, baixa, descompacta e instala direto no seu projeto dentro de uma pasta definida por você.
Não acredita? Veja abaixo alguns dos comandos.

Pra procurar por um pacote (biblioteca), basta digitar o comando abaixo no prompt de comando
```
bower search NOME_DO_PACOTE
```

Ao achar o pacote que você procurou, é possível instalá-lo direto no seu projeto com o comando
```
bower intall NOME_DO_PACOTE
```

Pra atualizar um pacote já instalado, basta executar o comando
```
bower update NOME_DO_PACOTE_INSTALADO
```

Fácil, hein?! E caso você queira excluir algum pacote instalado no seu projeto, é só executar
```
bower uninstall NOME_DO_PACOTE_INSTALADO
```

Esses são os comandos básicos. A gente vai usar pra baixar nossas bibliotecas durante o curso.

Pra saber mais sobre o Bower, entre no site [bower.io](http://bower.io/).
