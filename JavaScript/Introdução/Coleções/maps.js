let mapa = new Map();

mapa.set('João', 'Admin');
mapa.set('William', 'Usuário');
mapa.set('Jorge', 'Admin');
mapa.set('Jeferson', 'Usuário');
let admins = [];
function getAdmins(map){
    for ([nome, cargo ] of map){
        if (cargo === 'Admin'){
            console.log (`O ${nome} é um Admin`)
            admins.push(nome)
        }
        else{
            console.log (`O ${cargo} não é um Admin`)
        }
    }
        console.log(`Lista de admins:${admins}`)
}

getAdmins(mapa)