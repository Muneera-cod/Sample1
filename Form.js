$(document).ready(function(){
    $("#content").validate({
      rules:{
         fname:{
             required:true,
             minlength:4,
             maxlength:15
         },
         age:{
             required:true,
             minlength:1,
             maxlength:3
         },
         emailaddress:{
            required:true,
            email:true
         },
         Qualification:{
            required:true
         },
         Skills:{
            required:true
         }
      },
      messages:{
         age:{
             required:"Enter the age",
             maxlength:"Enter the valid age"
         }
      }
      
    })
    $("#content").submit(function(){
        alert("Submitted")
    })
 })  