# Trim Big EDH List Server
A personal project to trim a big EDH list to a Commander Deck

# Next Step
	Dar uma limpa no readme

	Testar de verdade

	Fazer a lógica que salva a imagem e o resto das informações no banco

		Cadastrar as informações no banco

# TODO

	Terminar o banco
		https://github.com/ThadeuJose/express-example
	Separar a classe db
	Fazer um botão que reseta o banco
	Criar um crud das cartas
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
	Separar a classe db

	Consertar os import (parserDecklist, scryfall ... )
