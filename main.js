const toDolist = [];

const render = () => {
    $('#to-do-list-container').children("ul").empty();
    toDolist.forEach((item) => {    
      $('#to-do-list-container').children("ul").append(`<li class="items">${item}<span class="tooltiptext">Drag me </span></li>`);
    });
    drag();
  }

const drag = () => {
  $('.items').draggable({
    containment: "#lists",
    revert: "invalid"
  });

  
  
}

  const submit = () =>{
    $('form').on('submit', (e) => { //submit the things to do

      const inputValue = $('#input-box').val(); //get the input
      toDolist.push(inputValue);
      console.log(toDolist);
      e.preventDefault(); //prevent from resetting
      $(e.currentTarget).trigger('reset'); // reset after entering the to do list
      render();
  });
  }

$(() => {

  submit();
  
  
})