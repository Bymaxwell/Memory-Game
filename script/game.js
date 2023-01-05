const grid = document.querySelector('.grid');
const player = document.querySelector('.player');
const time = document.querySelector('.time');

const cards = ['Madeline', 'Badline', 'Theo', 'Mr.Oshiro', 'Vovó'];

let firstCard = '';
let secondCard ='';


const createElements = (tag, className)=>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const game_end = () => {
    const disabled_cards = document.querySelectorAll('.disabled_front');
    console.log(disabled_cards.length);
    console.log(cards.length);
    if(disabled_cards.length == 2*cards.length){
        clearInterval(this.relogio);
        setTimeout(()=>{
            alert(`Parabén, ${player.innerHTML}!. Você ganhou em ${time.innerHTML} segundos`);
        }, 500)
    }
}




const checkcards = ()=>{
    first_character = firstCard.getAttribute('data-personagem');
    second_character = secondCard.getAttribute('data-personagem');
    if(first_character== second_character){
        firstCard.firstChild.classList.add('disabled_front');
        secondCard.firstChild.classList.add('disabled_front');

        firstCard = '';
        secondCard = '';

        game_end();
        
    } else {
        setTimeout(()=>{
            firstCard.classList.remove('reveal_card');
            secondCard.classList.remove('reveal_card');
            firstCard = '';
            secondCard = '';
        }, 800)
    }



}

const revealcard = (event)=>{
    if(event.target.parentNode.className.includes('reveal_card')){
        return;
    }

    if(firstCard == ''){
        event.target.parentNode.classList.add('reveal_card');
        firstCard = event.target.parentNode;
    } else if (secondCard == ''){
        event.target.parentNode.classList.add('reveal_card');
        secondCard = event.target.parentNode;
        checkcards();
    } 
   
}




const create_card = (personagem)=>{
    const card = createElements('div', 'card');
    const front = createElements('div', 'face front');
    const back = createElements('div', 'face back');

    front.style.backgroundImage = `url('../imagens/${personagem}.png')`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealcard);
    card.setAttribute('data-personagem', personagem);

    return card;
}

const create_grid = ()=>{
    const duplicate_cards = [...cards, ...cards]

    const shuffled_cards = duplicate_cards.sort( ()=> Math.random()-0.5);

    for(let i=0; i<shuffled_cards.length; i++){
        const card = create_card(shuffled_cards[i])
        grid.appendChild(card);
    }
}


const timer = () => {
    this.relogio = setInterval(() => {
        const clock = +time.innerHTML;
        time.innerHTML = clock + 1;

    }, 1000);
}




window.onload = () => {
    const player_name = localStorage.getItem('Nome');
    player.innerHTML = player_name;
    timer();

    create_grid();

}






