$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        
        var item = $('#item').val(); 
        $("#listaItens").append("<li>" + item +"</li>");
        $("#item").val(""); 
    });

    $("#listaItens").on("click", "li", function(){
        $(this).toggleClass("finalizada");
    });
});
