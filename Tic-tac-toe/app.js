// Alerts
function insertWin() {
    $('<div class="alert alert-success" role="alert">You win the game!</div>').prependTo($('.center'));         
   } 

function insertLose() {
$('<div class="alert alert-danger" role="alert">You are a loser!</div>').prependTo($('.center'));         
} 


// Game
$( document ).ready( () => {

let array = []
let turn = true;


// added
let table = $('table');
let X = $('.X');
let O = $('.O');


for ( let i = 0; i < 9; i++ ) {
    let td = $(`#t${i+1}`);
    td.on('click', () => {
        if (turn) {
            td.text('X').addClass('X');
            check(X);
            turn = false;
            
        } else {
            td.text('O').addClass('O');
            check(X);
            turn = true;
        }
    });
    array.push(td);
}
}); 


// Check for win condition

// Check if three in alignment are marked with X or O

function check() {
    if ($("#t1").hasClass('X') &&
        $("#t2").hasClass('X') &&
        $("#t3").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t4").hasClass('X') &&
        $("#t5").hasClass('X') &&
        $("#t6").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t7").hasClass('X') &&
        $("#t8").hasClass('X') &&
        $("#t9").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t1").hasClass('X') &&
        $("#t4").hasClass('X') &&
        $("#t7").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t2").hasClass('X') &&
        $("#t5").hasClass('X') &&
        $("#t8").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t3").hasClass('X') &&
        $("#t6").hasClass('X') &&
        $("#t9").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t1").hasClass('X') &&
        $("#t5").hasClass('X') &&
        $("#t9").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t3").hasClass('X') &&
        $("#t5").hasClass('X') &&
        $("#t7").hasClass('X'))
        { console.log('Winner')
        insertWin();
    } else if ($("#t2").hasClass('O') &&
        $("#t5").hasClass('O') &&
        $("#t8").hasClass('O'))
        { console.log('winner')
        insertWin();
    }  if ($("#t1").hasClass('O') &&
        $("#t2").hasClass('O') &&
        $("#t3").hasClass('O'))
        { console.log('Loser')
        insertLose();
    } else if ($("#t4").hasClass('O') &&
        $("#t5").hasClass('O') &&
        $("#t6").hasClass('O'))
        { console.log('Loser')
        insertLose();
    } else if ($("#t7").hasClass('O') &&
        $("#t8").hasClass('O') &&
        $("#t9").hasClass('O'))
        { console.log('Loser')
        insertLose();
    } else if ($("#t1").hasClass('O') &&
        $("#t4").hasClass('O') &&
        $("#t7").hasClass('O'))
        { console.log('Loser')
        insertLose();
   
    } else if ($("#t3").hasClass('O') &&
        $("#t6").hasClass('O') &&
        $("#t9").hasClass('O'))
        { console.log('Loser')
        insertLose();
    } else if ($("#t1").hasClass('O') &&
        $("#t5").hasClass('O') &&
        $("#t9").hasClass('O'))
        { console.log('Loser')
        insertLose();
    } else if ($("#t3").hasClass('O') &&
        $("#t5").hasClass('O') &&
        $("#t7").hasClass('O'))
        { console.log('Loser')
        insertLose();
    }   else {
        console.log('keep playing')
    }
};


// Reset button
$('.reset').click(function() {
    $('td').html('');
  });

function reset(table) {
    table.find('td').each(function() {
      $(this).removeClass('X').removeClass('O');
    });
}


