let readline = require("readline-sync");


let login = readline.question("Diga a palavra: ").toLowerCase();

if(login == "admin"){

    let senha = readline.questionInt("Digite sua senha em numeros: ")

    if(senha == 1234){
        console.log("Login realizado com sucesso"); 
    }
    else{
        console.log("Senha incorreta!")
    }
}
else{
        console.log("Usuario incorreto!")
}