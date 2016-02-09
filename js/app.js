/*
1 - sort items by class or by dragging
*/

var input = $('.input__new');
//var need = [];
//var have = [];

$(document).ready(function() {
    /*
    if (input.val().length > 0) {
        $(input).keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
            }
        })
    }
    */
    
    $('.input__add').click(addNewItem); 
    
    $('.list__items').click('.check', function() {
        $(event.target).closest('li.list__items-need').toggleClass('list__items-have');
    });
});

function renderListElement(content) {
    return '<li class="list__items-need">'+
                '<span class="material-icons move">more_vert</span>'+
                '<span class="material-icons check">check_box</span>'+
                '<p class="list__items-text">'+ content +'</p>'+
                '<span class="material-icons trash">delete</span>'+
            '</li>';
    
}

function addNewItem() {
    
    if (input.val().trim().length == 0) {
           alert('Please add an item');
       }
       else {
           $('.list__items').prepend(renderListElement(input.val()));
            input.val('');
           var currentElement = $('.list__items li').first();
           currentElement.find('.trash').on('click', trashItem);
           currentElement.find('.check').on('click', callCheckItem);
           currentElement.find('.move').on('mousedown', moveItem);
       }
}

function callCheckItem() {
    $(event.target).html(
        $(event.target).text() == 'check_box' ? 'check_box_outline_blank' : 'check_box');
    //terneray operator (look this up).
}

function trashItem() {
    $(event.target).closest('li.list__items-need').remove();
    $(event.target).closest('li.list__items-have').remove();
} 

function moveItem() {
    $('.list__items').sortable();
    $('.list__items').disableSelection();  
}

function sortItem() {
    //sort the items
}