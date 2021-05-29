/* a. Objetos básicos: */

// i. Coleção(ões) de documentos: criar coleção(ões) conforme mapeamento realizado e decisões de projeto 

// ii. 01 índice com apresentação de justificativa

/* ----------------------------------------------- ii. Consultas diversas ----------------------------------------- */

/* 01 para coleção inteira 

Enunciado: Consulta para retornar todas as informações da coleção reserva */
db.reserva.find({})

/* 01 com contagem de documentos na coleção*/
db.acomodacao.count({})

/* 02 consultas com filtros diversos (IN, GT, etc), sem projeção */

// Enunciado:

// Enunciado:


/* 02 consultas com filtros diversos e com projeção */

// Enunciado:

// Enunciado:

/* 01 consulta com filtro, projeção e uso de expressão regular 
Enunciado: */
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

// Enunciado:

// Enunciado:

/* 02 consultas com acesso a estrutura embutida */

// Enunciado:

// Enunciado:

/* 02 consultas diferentes com aggregate */

// Enunciado:

// Enunciado:

/* 01 consulta com lookup 

Enunciado: Exibir os dados da reserva exceto o id, e omitir profissão e telefone do usuário,
incluir todas as informações da acomodações que possuem diárias com precos menores ou igual a 100,00 e que 
estão na paraíba */ 
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


