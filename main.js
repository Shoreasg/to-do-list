const toDolist = [];

const render = () => {
  $('#to-do-list-container').children("ul").append(`<li class="items">${toDolist[toDolist.length-1]}<span class="tooltiptext">Drag me </span></li>`);
  drag();
  dropped();
 
}

const drag = () => {
  
  $('.items').draggable({
    containment: ".lists",
    revert: "invalid",
    cursor: "grabbing",
    helper: "clone"
  });
  
}


const dropped = () => {
  $('#completed-container').droppable({
    tolerance: 'pointer',
    accept: '#firstlist .items',
    drop: function(event,ui)
    {
      let droppable = $(this).children("ul");
      let  draggable = ui.draggable; 
      draggable.appendTo(droppable);
      $(".tooltiptext").text("Double click to remove me!")
      
    }
  })
}

const submit = () => {
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