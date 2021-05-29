db.acomodacao.insertMany([
    {
        _id: ObjectId("60aed62f0213426e9eff3a6b"),
        nome: "Casa na praia",
        descricao: "Casa na praia com 5 quartos, sala ampla, 3 banheiros, 1° Andar",
        diaria: 149.0,
        status: "D",
        endereco: {
            estado:"PB",
            cidade: "João Pessoa",
            bairro: "Manaíra",
            rua: "R. José Felix da Silva",
            cep: "58000-222"
        }
    },
    {
        _id: ObjectId("60aed62f0213426e9eff3a6c"),
        nome: "Hotel Luxus",
        descricao: "Suite casal, ar condicionado, cozinha gourmet",
        diaria: 890.0,
        status: "D",
        endereco: {
            estado: "SP",
            cidade: "São Paulo",
            bairro: "Chelsea",
            rua: "Alpha Pl",
            cep: "35043-000"
        }
    },
    {
        _id: ObjectId("60aed62f0213426e9eff3a6d"),
        nome: "Hotel DriveSleep",
        descricao: "Quarto com ar condicionado, cama box, suíte",
        diaria: 70.0,
        status: "I",
        endereco: {
            estado: "PB",
            cidade: "João Pessoa",
            bairro: "Bessa",
            rua: "R. Pedro Batista",
            cep: "53043-325"
        }
    },
    {
        _id: ObjectId("60aed62f0213426e9eff3a6e"),
        nome: "Charara JAY",
        descricao: "Chacara com salão de festa, area de recreamento, campo de futebol",
        diaria: 100.0,
        status: "D",
        endereco: {
            estado: "AL",
            cidade: "Maceió",
            bairro: "Pajuçara",
            rua: "R. Desembargador Silveira",
            cep: "53043-111"
        }
    },
    {
        _id: ObjectId("60aed62f0213426e9eff3a6f"),
        nome: "Cabana AfroFree",
        descricao: "Quarto com 2 camas de casal, passeio ao ar livre",
        diaria: 520.0,
        status: "I",
        endereco: {
            estado: "SE",
            cidade: "Aracaju",
            bairro: "América",
            rua: "R. Pedrosa Dutra",
            cep: "53043-325"
        }
    },
    {
        _id: ObjectId("60aed62f0213426e9eff3a70"),
        nome: "Charara YWE",
        descricao: "Quarto com ar condicionado, banheira de hidromassagem, cama casal",
        diaria: 182.86,
        status: "D",
        endereco: {
            estado: "PE",
            cidade: "Fernando de Noronha",
            bairro: "Açores Fidélio",
            rua: "Av. Lagosta Meire",
            cep: "58043-325"
        }
    },
    {
        _id: ObjectId("60aed62f0213426e9eff3a71"),
        nome: "Hotel Cósmica",
        descricao: "Quarto com ar condicionado,cama casal",
        diaria: 182.86,
        status: "D",
        endereco: {
            estado: "PI",
            cidade: "Picos",
            bairro: "Mangaba",
            rua: "Rua Dom Quixote",
            cep: "58085-000"
        }
    },
    {
        _id: ObjectId("60aed62f0213426e9eff3a72"),
        nome: "Acampamento Wib",
        descricao: "Quarto com ar condicionado,cama casal, área de lazer e trilha" ,
        diaria: 99.86,
        status: "D",
        endereco: {
            estado: "PB",
            cidade: "Princesa Isabel",
            bairro: "Maia",
            rua: "Rua Cícero Beserra",
            cep: "58085-001"
        }
    }
])

