/*
1 - click/return on + button sends value from Add It box to Get It box.
2 - click on Get It item (or drag it to Got It) sends Get It item to Got It
3 - Find a way to delete unwanted items (maybe an 'x' button?)
4 - Add accordion for each item to add categories (or tags)
*/

var input = $('.input__new');

$(document).ready(function() {
   $('.input__add').click(function() {
       if (input.val().trim().length == 0) {
           alert('Please add an item');
       }
       else {
           $('.list__items').prepend(renderListElement(input.val()));
            input.val('');
       }
   }) 
   
   itemChecked();
});

function renderListElement(content) {
    return '<li class="list__items-need">'+
                '<span class="material-icons move">more_vert</span>'+
                '<span class="material-icons check">check_box</span>'+
                '<p class="list__items-text">'+ content +'</p>'+
                '<span class="material-icons trash" onclick="trashItem()">delete</span>'+
            '</li>';
}

function itemChecked() {
    $('.list__items').click('.check', function() {
        $(event.target).closest('li.list__items-need').toggleClass('list__items-have');
    });
}

function trashItem() {
    $(event.target).closest('li.list__items-need').remove();
    $(event.target).closest('li.list__items-have').remove();
} 
