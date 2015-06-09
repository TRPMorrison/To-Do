 // DIALOGUE BOX & SCRIPT
 $('#new-todo').dialog({
     modal: true,
     autoOpen: false,
     buttons: {
         "Add task": function() {
                 var taskName = $('#task').val();
                 if (taskName === '') {
                     return false;
                 }
                 var taskHTML = '<li><span class="done">%</span>';
                 taskHTML += '<span class="delete">x</span>';
                 taskHTML += '<span class="task"></span></li>';
             }
             // HTML TARGET
         var $newTask = $(taskHTML);


         $newTask.find('.task').text(taskName);


         $newTask.hide();

         $('#todo-list').prepend($newTask);


         $newTask.show('clip', 250).effect('highlight', 1000);
         $(this).dialog('close');
     },
     "Cancel": function() {
         $(this).dialog('close');
     }
 },
 close: function() {
     $('#new-todo input').val('');
 }
 }); // END OF DIALOGUE BOX

 // COMPLETED ITEMS
 $('#todo-list').on('click', '.done', function() {
     var $taskItem = $(this).parent('li');
     $taskItem.slideUp(250, function() {
         var $this = $(this);
         $this.detach();
         $('#completed-list').prepend($this);
         $this.slideDown();
     });
 });
 // END OF COMPLETED ITEMS



 // DELETE TO DO
 $('.sortlist').on('click', '.delete', function() {
 $(this).parent('li').effect('explode', function() {
     $(this).remove();
 });
