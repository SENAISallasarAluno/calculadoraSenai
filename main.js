//Função: define umna lista de ações que serão executadas quando a função for chamada. Palavra reservada para criar uma função em Java function.
function insert(num){//Início da função
    //Variável é um espaço na memória que armazena uma informação para uso posterior. Ao nomeá-la evite: nºs e letras maiúsculas no início, espaço entre palavras (use _ ou camelCase) e acentuação.
    //Captura o conteúdo atual exibido no elemento com id 'resultado' e armazena na variável 'número'.
    var numero = document.getElementById('resultado').innerHTML
    //Atualiza o conteúdo do elemento 'resultado' concatenando o valor atual com o nº ou o operador (+,-,/,*) passad o no parâmetro num.
    document.getElementById('resultado').innerHTML = numero + num
} //Fim da função
//Função para limpar todo o conteúdo que aparece no visor (tag p [id=resultado])
function clean(){
    //Define que o conteúdo do elemento 'resultado' como um elemento de texto vazio, limpando a tela.
    document.getElementById('resultado').innerHTML = "";
}
function del(){
    var resultado = document.getElementById('resultado').innerHTML;
    //Usa o método substring para remover o último caracter digitado na tela, autalizando o valor. O método length retornará o tamanho da string, ou seja, quantos elementos aparecerem na tela.
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length - 1);
}
//Função 'calcular' irá avaliar a expressão da tela e realizar o calculo exibindo-o na tela.
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    //Se o conteúdo da tela (tag p) não estiver vazio.
    if(resultado){
        //Use a função eval() para avaliar a expressão matemática e retornar o resultado da operação.
        document.getElementById('resultado').innerHTML = eval(resultado);
    } //Senão, caso não haja nenhum conteúdo no visor.
    else{
        //Exiba uma mensagem de Erro.
        document.getElementById('resultado').innerHTML = 'NULL';
    }
}
document.addEventListener('keydown',function(event){
    //'Salva' a tecla pressionada
    var tecla = event.key
    if(/[0-9+\-*/]/.test(tecla)){
        insert(tecla); //Chama a função insert
    } //Verifica se a tecla pressionada é o Enter
    else if (tecla == 'Enter' || tecla == '='){
        calcular(); //Chama a função calcular
    } //Verifica se a tecla pressionada é o Backspace
    else if(tecla == 'Backspace'){
        del(); //Chama a função del - Apaga o último caracter
    } //Verifica se a tecla pressionada é o Delete
    else if (tecla == 'Delete'){
        clean(); //Chama a função clean - Apagando todo o conteúdo do visor.
    }

} //Fim da função
) //Fecha o bloco do evento
