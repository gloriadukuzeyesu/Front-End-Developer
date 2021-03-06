
var expect = chai.expect;

describe('MyFunction' , function(){
    describe('#createDeck' , function (){
        it ('this function should create a deck of cards', function(){
            var x= createCards();
            /* var suit=['hearts', 'spade','diamond','club'];
            var value=[ 2,3,4,5,6,7,8,9,10,11,12,13,14]; */
            expect(x).to.have.lengthOf(52);
            expect(x.every((card) => { card instanceof Card })).to.be.false

        it('should throw an error if the function has a parameter passed to it', function() {
            expect(function() {
                createCards(cards);
            }).to.throw(Error);
        });
    });
});
});



