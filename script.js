let score = 0;
let current = 0;
document.querySelector('.btn--new').addEventListener('click', () => {

    score = 0;
    current = 0
    document.getElementById('current--0').textContent = current;
    document.getElementById('current--1').textContent = current;
    document.getElementById('score--0').textContent = score;
    document.getElementById('score--1').textContent = score;
});
document.querySelector('.btn--hold').addEventListener('click', () => {
    score = document.getElementById('score--0');
    current = document.getElementById('current--0');
    let scoreCurrent = parseInt(score.textContent) + parseInt(current.textContent);
    document.getElementById('current--0').textContent = scoreCurrent;
    score = 0;
    document.getElementById('score--0').textContent = score;
    
    var secao1 = document.getElementById('0player');
    var secao2 = document.getElementById('1player');

    // Verifica se a primeira seção está sendo exibida
    if (secao1.classList.contains('player--active')) {
        secao1.classList.remove('player--active');
        secao2.classList.add('player--active');
    } else { // Se a segunda seção estiver sendo exibida
        secao2.classList.contains('player--active')
        secao2.classList.remove('player--active');
        secao1.classList.add('player--active');
        score = document.getElementById('score--1');
        current = document.getElementById('current--1');
        let scoreCurrent = parseInt(score.textContent) + parseInt(current.textContent);
        document.getElementById('current--1').textContent = scoreCurrent;
        score = 0;
        document.getElementById('score--1').textContent = score;
    }
});


    document.querySelector('.btn--roll').addEventListener('click', () => {
        const imagensUrls = [
            'img/dice-1.png',
            'img/dice-2.png',
            'img/dice-3.png',
            'img/dice-4.png',
            'img/dice-5.png',
            'img/dice-6.png',
        ];
        // Gerar um índice aleatório baseado no comprimento do array de URLs
        const indiceAleatorio = Math.floor(Math.random() * 6);
        // Obter a URL da imagem sorteada
        const urlImagemSorteada = imagensUrls[indiceAleatorio];

        // Selecionar o elemento de imagem onde você quer exibir a imagem sorteada
        const elementoImagem = document.querySelector('.dice');

        // Atualizar o atributo src do elemento de imagem com a URL sorteada
        elementoImagem.src = urlImagemSorteada;
        var secao1 = document.getElementById('0player');
    var secao2 = document.getElementById('1player');










        
            if(indiceAleatorio===0){
                if (secao1.classList.contains('player--active')){
            score = document.getElementById('score--0');
            document.getElementById('score--0').textContent = 0;
            secao1.classList.remove('player--active');
            secao2.classList.add('player--active');}
            else{
                score = document.getElementById('score--1');
            document.getElementById('score--1').textContent = 0;
            secao2.classList.remove('player--active');
        secao1.classList.add('player--active');
            }
        }
        else{
            if (secao1.classList.contains('player--active')){
                score = document.getElementById('score--0');
                document.getElementById('score--0').textContent = parseInt(score.textContent) + indiceAleatorio + 1;}
                else if(secao2.classList.contains('player--active')){
                    score = document.getElementById('score--1');
                document.getElementById('score--1').textContent = parseInt(score.textContent) + indiceAleatorio + 1;
                }
        }
    });











   // rollDice.addEventListener('click', () => {
    //  if (playing) {
       // const diceNumber = Math.trunc(Math.random() * 6) + 1;
       // dice.classList.remove('hidden');
       // dice.src = `dice-${diceNumber}.png`;
    
    
      //  if (diceNumber !== 1) {
       //   currentScore += diceNumber;
       //   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
       // } else {
         // switchPlayer();
        //}
      //}
    //});