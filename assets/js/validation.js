$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:4
            },
            email:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:5
            },
            message:{
                required:true,
                minlength:15
            }
            
        },
        messages:{
            name:{
                required:"enter first name",
                minlength:"atleast 4 characters"
            },
            email:{
                required:"need an email",
                email:"valid email please"
            },
            subject:{
                minlength:"atlest 5 characters",
                required:"subject please"
            },
            message:{
                required:"write your message please",
                minlength:"atleast 15 charecters"
            }
        }
    })
})