
var expect = chai.expect;

describe('MyFunction' , function(){
    describe('#createDeck' , function (){
        it ('this function should create a deck of cards', function(){
            var x= createCards();
            expect(x).to.equal ([]);   
        });

        it('should throw an error if the function has a parameter passed to it', function() {
            expect(function() {
                createCards(cards);
            }).to.throw(Error);
        });
    });
});


