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

// Enunciado:

// Enunciado: Exibir todas as informações das reservas feitas no mês de junho
db.reserva.find({ "entrada": { $gte: ISODate("2021-06-01T00:00:00.000+0000"), $lt: ISODate("2021-06-31T00:00:00.000+0000") } })

/* 02 consultas com filtros diversos e com projeção */

// Enunciado:

// Enunciado:

/* 01 consulta com filtro, projeção e uso de expressão regular */
// Acha os hoteis exigindo apenas nome descrição e preço da diária
db.acomodacao.find({
    nome:
     {
      $regex: /Hotel/
     }
     },
     {
         _id:0,
         nome:1,
         descricao:1,
         diaria:1
     })

/* 02 consultas com acesso a array de elementos */

// Enunciado: Exibir os nomes, datas da reserva e preco de todos os hospedes que for escritor(a)
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


// Enunciado:

/* 02 consultas com acesso a estrutura embutida */

// Enunciado:

// Enunciado:

/* 02 consultas diferentes com aggregate */

// Enunciado: Exibir a média dos preços das diárias agrupadas por estado
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

// Enunciado:

/* 01 consulta com lookup 

Enunciado: Exibir os dados da reserva exceto o id, e omitir profissão e telefone do usuário,
incluir todas as informações da acomodações que possuem diárias com precos menores ou igual 
a 100,00 e que estão na paraíba */
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
