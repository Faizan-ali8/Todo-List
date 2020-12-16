// Start -Check Off Specific Todos By Clicking

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

// End -Check Off Specific Todos By Clicking

// Start - Click on X to Delete Todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// End - Click on X to Delete Todo

// Start - Adding a New Todo

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class= 'fas fa-trash-alt'></i></span> " + todoText +  "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});

// End - Adding a New Todo
