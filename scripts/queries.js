/* a. Objetos básicos: */

// i. Coleção(ões) de documentos: criar coleção(ões) conforme mapeamento realizado e decisões de projeto 

// ii. 01 índice com apresentação de justificativa

/* ----------------------------------------------- ii. Consultas diversas ----------------------------------------- */

/* 01 para coleção inteira 

Enunciado: Consulta para retornar todas as informações da coleção reserva */
db.reserva.find({})

/* 01 com contagem de documentos na coleção

Enunciado: Quantidade de acomodações cadastradas*/
db.acomodacao.count({})

/* 02 consultas com filtros diversos (IN, GT, etc), sem projeção */

// Enunciado: Acha as acomodações nos estados da PB e SP
db.acomodacao.find( {"endereco.estado" : { $in: [ "PB", "SP" ] } } )

// Enunciado: Exibir todas as informações das reservas feitas no mês de junho
db.reserva.find({ "entrada": { $gte: ISODate("2021-06-01T00:00:00.000+0000"), $lt: ISODate("2021-06-31T00:00:00.000+0000") } })

/* 02 consultas com filtros diversos e com projeção */

/*Enunciado: Consultar acomodações que estejam disponíveis na cidade de João Pessoa tendo diária menores 
que 200,00 reais, exibir o nome, descrição e diária */
db.acomodacao.find({ "endereco.cidade": "João Pessoa", "status": "D", "diaria": {$lt: 200.00}},
    { _id: 0, nome: 1, descricao: 1, diaria: 1 })

// Enunciado:

/* 01 consulta com filtro, projeção e uso de expressão regular */
// Enunciado: Exibe apenas as acomodacoes que sejam hoteis e projeta o nome, descrição e preço da diária
db.acomodacao.find({
    nome:
    {
        $regex: /Hotel/
    }
},
    {
        _id: 0,
        nome: 1,
        descricao: 1,
        diaria: 1
    })

/* 02 consultas com acesso a array de elementos */

// Enunciado: Retorna o nome dos clientes e o primeiro número telefone omitindo o id da reserva
db.reserva.aggregate([
    { $unwind: "$usuario" },
    {
        $project: {
            _id: 0,
            Nome_do_cliente: "$usuario.nome",
            primeiroTelefone: { $arrayElemAt: ["$usuario.telefone", 0] },
        }
    }
]);

// Enunciado:

/* 02 consultas com acesso a estrutura embutida */

// Enunciado: Acha o cep de uma acomodação acessando endereço.cep (estrutura embutida)
db.acomodacao.find({
    "endereco.cep": "58000-222"
},
    {
        nome: 1,
        "endereco.rua": 1,
        descricao: 1,
        diaria: 1
    })

// Enunciado: Exibir os nomes, datas da reserva e preco de todos os hospedes que forem escritores
db.reserva.aggregate([
    { $unwind: "$usuario" },
    {
        $match:
        {
            "usuario.profissao": "Escritor(a)"
        }
    },
    {
        $project: { "_id": 0, "usuario.nome": 1, "preco": 1, "entrada": 1, "saida": 1 }
    }
]);

/* 02 consultas diferentes com aggregate */

// Enunciado: Exibir a média de preços das diárias agrupadas por estado
db.acomodacao.aggregate(
    [
        {
            $group: {
                _id: "$endereco.estado",
                MediaDiariaPorEstado: { $avg: "$diaria" }
            }
        }
    ]
);

// Enunciado: Exibir a quantidade de reservas por acomodacao e ordená-las em ordem decrescente
db.reserva.aggregate([
    {
        $group: {
            _id: "$acomodacao",
            quantidade_reservas: { $sum: 1 }
        }
    },
    {
        $sort: {
            quantidade_reservas: -1
        }
    }
])

/* 01 consulta com lookup 

Enunciado: Exibir os dados das reservas omitindo o id, profissão e telefone do usuário fazendo 
a junção com as acomodacoess que possuam diárias com precos menores ou iguais a 100,00 
e que estão na paraíba */
db.reserva.aggregate([
    {
        $lookup:
        {
            from: "acomodacao",
            localField: "acomodacao",
            foreignField: "_id",
            as: "Dados_das_acomodacoes"
        }
    }, {
        $match: {
            "Dados_das_acomodacoes.endereco.estado": "PB"
        }
    },
    {
        $match: {
            "Dados_das_acomodacoes.diaria": { $lte: 100.00 }
        }
    },
    {
        $project:
        {
            _id: 0,
            usuario: {
                profissao: 0,
                telefone: 0,
            },
        }
    },
])

/* 01 outra consulta a seu critério, dentro do contexto da aplicação
Enunciado:
*/
