alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }


//desafios
 //1- alert("Boas vindas ao nosso site!");
 //2- let nome = "Lua";
 //3- let idade = "25";
 //4- let numeroDeVendas = "50";
 //5- let saldoDisponivel = "1000";
 //6- let mensagemDeErro = "Erro!";
    //alert ("mensagemDeErro");
 //7- let nome = prompt("Qual o nome de usuário?");   
 //8- let idade = prompt("Qual é sua idade?");
 //9- alert("Erro!Preencha todos os campos");
 //10- let idade = prompt("Digite sua idade:");
        //if (idade >= 18){ 
            //alert("Pode tirar habilitação");}