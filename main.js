const toDolist = [];

const render = () => {
    $('#to-do-list').children("ul").empty();
    toDolist.forEach((item) => {    
      $('#to-do-list').children("ul").append(`<li> ${item}</li>`);
    });
  }

$(() => {
    $('form').on('submit', (e) => { //submit the things to do

        const inputValue = $('#input-box').val(); //get the input
        toDolist.push(inputValue);
        console.log(toDolist);
        e.preventDefault(); //prevent from resetting
        $(e.currentTarget).trigger('reset'); // reset after entering the to do list
        render();
    });
})