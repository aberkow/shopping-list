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
           alert('please add an item');
       }
       else {
           alert(input.val());
           $('.list__items').prepend(input.val());
       }
   }) 
});