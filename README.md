# Trim Big EDH List Server
A personal project to trim a big EDH list to a Commander Deck

# Next Step
Adicionar as informações no decklist


# TODO
	https://mtgjson.com/faq/#how-do-i-access-a-card-s-imagery
	https://mtgjson.com/api/v5/

	https://mtg.gamepedia.com/Color_indicator
	https://mtgjson.com/data-models/card/#colorIndicator


	Ver como vai ser a entrega da informações das cartas
		Ajeitar a url quando enviar 

	Fazer o endpoint que retorna uma carta válida?
		NÃO USAR O FUSE POR ENQUANTO

	Colocar o uuid na outra database

	Ver o lance do cardtype não entrando na tabela

	Limpar isso aqui

----------------------------------------------------------------------------

	Criar um crud das cartas com o vue
		Pelo menos o read de uma carta com imagem

	Criar um crud dos decks

	Fazer o backup do banco
		Fazer um read all debug
		Criar na mão um metodo de fazer fazer download de todos os dados no banco e inserir tudo no banco  

	Dar uma limpa no readme

	Testar de verdade

	Fazer a lógica que salva a imagem e o resto das informações no banco

		Cadastrar as informações no banco

	https://stackoverflow.com/questions/21105748/sequelize-js-how-to-use-migrations-and-sync

	Fazer um botão que reseta o banco
	Fazer um endpoint que retorna tudo
	Server não esta servindo para nada
	Banco
		Primeiro uma maneira de fazer o backup do banco
			Salva o banco em um arquivo de backup .json chamado de date.now - production
		Cadastrar na mão
			Multiplas Imagens - https://api.scryfall.com/cards/search?q=!%22The+Gitrog+Monster%22&unique=prints
			Cache das cartas
	Fazer o vue voltar a funcionar

	Fazer voltar ao que está agora so que removendo as duplicatas
		Fazer testes
		https://mochajs.org/#getting-started

	Usar o Omnath The 4th, Kelsien e a Azusa como exemplo

	Entrega a decklist
		Pelo vue 	X
		Usando actions e tal
		Guardar na store
	Ele ajeita o nome X
		Se possivel usando o fuzzy enquanto popula o banco
		Colocar um timer
	Remove as duplicatas <-
		Ajeitar o format line para pesquisar com número na frente e voltar mais informações X
		Fazer uma classe que faz isso e é utilizada depois de todas as promises  X
		Tirar número a mais. Exemplo: '13 Wastes, 3 Garruk' -> '13 Wastes, 1 Garruk'
	Inserir no banco
		Falta a imagem



	Ver como vai ficar a maybeboard
			Proxima versão
			Colocar uma ordem
			First In First Out
			https://en.wikipedia.org/wiki/Doubly_linked_list
				Prev and Next are foreignKey ou Integer para o mesmo elemento
			https://stackoverflow.com/questions/330482/best-way-to-save-a-ordered-list-to-the-database-while-keeping-the-ordering
			https://stackoverflow.com/questions/1861207/saving-order-preference-in-sql
	Cache das imagens das cartas

# Technical Debt
	Transformar o decklist em um objeto
		https://martinfowler.com/articles/refactoring-video-store-js/classes.html
		Consertar o removeDuplicate

	Consertar os import (parserDecklist, scryfall ... )

	Colocar os AllPrintings e o production em uma pasta so para eles

	https://bezkoder.com/vue-axios-file-upload/

# Source

		Chai-as-promised https://github.com/domenic/chai-as-promised/blob/master/test/should-eventually.js

		Create Sequelize Models from file https://github.com/sequelize/sequelize-auto

		Source of AllPrintings https://mtgjson.com/
