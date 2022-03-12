$(document).ready(function() {
$('form').sumbit(function(element){
    element.preventDefalt();

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $("form").trigger('reset')
    });

});

});