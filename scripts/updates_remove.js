/* i. Básicos (1,1) */

// 02 atualizações

db.acomodacao.updateOne( { "nome" : "Casa na praia" }, { $set: { "diaria" : 160 } })

db.acomodacao.updateMany( { "diaria": { $gte: 100 } }, { $set: { "status" : "D" } } )

// 01 remoção 

db.reserva.deleteMany({ "acomodacao": ObjectId("60aed62f0213426e9eff3a6e") })