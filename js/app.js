/*
1 - sort items by class or by dragging
*/

var input = $('.input__new');

$(document).ready(function() {
    //use enter key to input items
    $('input').keydown(function(enter) {
        if (enter.keyCode == 13) {
            enter.preventDefault();
            addNewItem();
        }
    });
    //click on cart to input items
    $('.input__add').click(addNewItem); 
    //click on checkbox to toggle class
    $('.list__items').click('.check', function() {
        $(event.target).closest('li.list__items-need').toggleClass('list__items-have');
    });
});
//create full list item w/ all symbols
function renderListElement(content) {
    return '<li class="list__items-need">'+
                '<span class="material-icons move">more_vert</span>'+
                '<span class="material-icons check">check_box</span>'+
                '<p class="list__items-text">'+ content +'</p>'+
                '<span class="material-icons trash">delete</span>'+
            '</li>';
    
}
//add an item to the list
function addNewItem() {
    if (input.val().trim().length == 0) {
           alert('Please add an item');
       }
       else {
           $('.list__items').prepend(renderListElement(input.val()));
            input.val('');
           var currentElement = $('.list__items li').first();
           currentElement.find('.trash').on('click', trashItem);
           currentElement.find('.check').on('click', callCheckItem);//do I need this and the function in $(document).ready?
           currentElement.find('.move').on('mousedown', moveItem);
       }
}
//toggle type of box
function callCheckItem() {
    //sort item to top or bottom of list according to class
    $(event.target).closest('li.list__items-need').appendTo('.list__items');
    $(event.target).closest('li.list__items-have').prependTo('.list__items');
    //check or uncheck the box
    $(event.target).html($(event.target).text() == 'check_box' ? 'check_box_outline_blank' : 'check_box');
    //terneray operator - a short way of making an if statement.
}
//remove item from list
function trashItem() {
    $(event.target).closest('li.list__items-need').remove();
    $(event.target).closest('li.list__items-have').remove();
} 
//make items sortable by dragging
function moveItem() {
    $('.list__items').sortable();
    $('.list__items').disableSelection();  
}

function sortItem() {
    //sort the items
}