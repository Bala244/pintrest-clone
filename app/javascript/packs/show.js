$(document).on('turbolinks:load' ,function(){
  $('.like_as').on('click', function(event){
    event.stopPropagation();
    
    console.log(this.parentNode.id);
    $.ajax({
        url: '/pins/' + this.parentNode.id + '/like',
        type: 'PUT',
        success: function(r){
        	
        }
      });
  });
});


$(document).on('turbolinks:load' ,function(){
  $('.dislike_as').on('click', function(event){
  	event.stopPropagation();
    
    $.ajax({
        url: '/pins/' + this.parentNode.id + '/dislike',
        type: 'PUT',
        success: function(r){
        }
      });
  });
});