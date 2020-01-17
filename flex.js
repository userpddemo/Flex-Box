$(document).ready(function(){
    $("#flex1").click(function(){
        $(this).parents(".container").find("#view_code").load("flex-1.txt");
     alert("OK");
    })
})