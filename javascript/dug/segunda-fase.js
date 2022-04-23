function validacaoDeDados(){
    var escolhaUmaOpcao = prompt("Tome uma decisao: Opção 1 ou 2?");
    while(true) {
        if(escolhaUmaOpcao == 1 || escolhaUmaOpcao == 2) {
            break
        } else {
            alert ("INVÁLIDO Escolha entre a opção 1 ou 2!");
            escolhaUmaOpcao = prompt("Tome uma decisao: Opção 1 ou 2?");
        }
    } function proximaFase(){
        if (escolhaUmaOpcao == '2'){
            window.location.href = "game-over.html";
        } else {
            window.location.href = "terceira-fase.html";
        }
    } proximaFase();
}