






class Card{
    constructor(suit, value){
        this.suit= suit;
        this.value= value;
    }   
}
 

class Player{
    constructor(name){
        this.name= name;
        this.score = 0;
        this.hand=[ ]; 
    }
    playCard(){
        return this.hand.pop( )
    }

}


 var player1 = new Player("Gloria");
 var player2= new Player("Tom");




 
class Deck{ 
    constructor(cards){
        this.cards= cards

    
    }
    shuffle(){
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}


function createCards( ){
    var suit=['hearts', 'spade','diamond','club']
    var value=[ 2,3,4,5,6,7,8,9,10,11,12,13,14]
    return suit.flatMap(suit => {
                return value.map(value =>{
                    return new Card( suit, value)
                })
            })
 
}

console.log(createCards());




// var cards = createCards()
// var deck = new Deck(cards)
// deck.shuffle()
// //deck.cards.forEach((c) => console.log(c.value,c.suit));
// cards.forEach((c) => console.log(c.value,c.suit));




startGame()
function startGame( ){
    var card= createCards()
    const deck = new Deck(card) 
    deck.shuffle()
    var numberOfCards= deck.cards.length
    const deckMidPoint = Math.ceil(numberOfCards /2 )
    player1.hand = deck.cards.slice(0,deckMidPoint)
    player2.hand = deck.cards.slice(deckMidPoint, numberOfCards)

    while( player1.hand.length>0 && player2.hand.length>0 ){
        let card1= player1.playCard()
        let card2= player2.playCard()

        if ( card1.value > card2.value ){
            player1.score = player1.score + 1
        } else if ( card2.value > card1.value){
            player2.score++
        }   
    }
    console.log(player1.score,player2.score)
    if (player1.score> player2.score){
        alert(player1.name + ' wins')
    } else if( player2.score> player1.score){
        alert(player2.name + ' wins')
    }else{
        alert('Tie')
    }

}
 



