db.reserva.insertMany([
    {
        entrada: new Date("2021-05-28"),
        saida: new Date("2021-05-30"),
        preco: 234.00,
        usuario: [
            {
                nome: "André Luiz",
                email: "andre@mail.com",
                telefone: [
                    "(83) 98834-0022",
                    "(83) 92244-1133"
                ],
                profissao:"Engenheiro de Software"
            }
        ],
        acomodacao: ObjectId("60aed62f0213426e9eff3a6b")
    },
    {
        entrada: new Date("2021-11-21"),
        saida: new Date("2021-11-23"),
        preco: 2670.00,
        usuario: [
            {
                nome: "Jorja Alice",
                email: "jorjasmith@mail.com",
                telefone: [
                    "020 8759 4321",
                    "0870 000 0123"
                ],
                profissao: "Cantora"
            }
        ], 
        acomodacao: ObjectId("60aed62f0213426e9eff3a6e")
    }, {

        entrada: new Date("2021-06-01"),
        saida: new Date("2021-06-02"),
        preco: 140.00,
        usuario: [
            {
                nome: "Bernardo Filho",
                email: "bern@mail.com",
                telefone: [
                    "(83) 99924-8822",
                    "(83) 97744-1122"
                ],
                profissao: ""
            }
        ],
        acomodacao: ObjectId("60aed62f0213426e9eff3a6d")
    },

    {
        entrada: new Date("2021-12-01"),
        saida: new Date("2021-12-04"),
        preco: 155.00,
        usuario: [
            {
                nome: "Maria Silva",
                email: "mmsilva@mail.com",
                telefone: [
                    "(83) 99999-0000",
                    "(83) 92244-1133"
                ],
                profissao: "Jornalista"
            }
        ],
        acomodacao: ObjectId("60aed62f0213426e9eff3a6e")
    },

    {
        entrada: new Date("2021-07-13"),
        saida: new Date("2021-07-16"),
        preco: 600.00,
        usuario: [
            {
                nome: "Julia Nunes",
                email: "jjn@mail.com",
                telefone: [
                    "(83) 99999-0000",
                    "(83) 95554-2222"
                ],
                profissao: "Engenheira de Software"
            }
        ],
        acomodacao: ObjectId("60aed62f0213426e9eff3a6f")
    },

    {
        entrada: new Date("2021-12-01"),
        saida: new Date("2021-12-14"),
        preco: 2560.00,
        usuario: [
            {
                nome: "Marina Pereira",
                email: "mmp@mail.com",
                telefone: [
                    "(81) 99999-0000",
                    "(83) 97777-3333"
                ],
                profissao: "Astronauta"
            }
        ],
        acomodacao: ObjectId("60aed62f0213426e9eff3a70")
    },
    {
        entrada: new Date("2021-12-21"),
        saida: new Date("2021-12-23"),
        preco: 400.00,
        usuario: [
            {
                nome: "Guilherme Ulisses",
                email: "guiu123@mail.com",
                telefone: [
                    "(11) 99999-0000",
                    "(84) 96666-7777"
                ],
                profissao: "Professor"
            }
        ],
        acomodacao: ObjectId("60aed62f0213426e9eff3a71")
    }
])

