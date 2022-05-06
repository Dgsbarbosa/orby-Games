function getAdmins(map){
    let admins = [];
    for ([key, value] of map){
        if (value === 'User'){ //o valor do if define o retorno
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set('Luiz' , 'Admin');
usuarios.set('Shefany' , 'Admin');
usuarios.set('Jorge' , 'User');
usuarios.set('Natalia' , 'Admin');

console.log(getAdmins(usuarios))