let inputs = [].slice.call(document.querySelectorAll('input'))


inputs.forEach(function (input) {
    if (input.getAttribute('type')!== 'submit' && input.getAttribute('type')!=='hidden'){
        console.log(input)
        if(this.value !=''){
            let = document.querySelectorAll('label[for="' + input.id + '"]')
            label.classList.add('focused')
        }
        addEventListener('focusIn', focusInInputHandler, false)
        addEventListener('focusout', focusoutInputHandler, false)
    }   
});

function focusInInputHandler (){
    let label = document.querySelector('label[for="'+ this.id + '"]')
    label.classList.add("focused")
    // console.log(this.id + ' focus in')
}

function focusoutInputHandler() {
    let label = document.querySelector('label[for="'+ this.id + '"]')
    if(this.value == '') {
        label.classList.remove("focused")
    }
    // console.log(this.id + ' focus out')
}

$(document).

$('form').sumbit(function(element){
    element.preventDefalt();

    if(!(this).valid()){
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $("form").trigger('reset')
    });
});