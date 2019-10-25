// $(document).ready(function() {
//     $.ajax({
//         url: "http://localhost:3211/api/notes"
//     }).then(function(data) {
//        $('.id').append(data.id);
//        $('.name').append(data.name);
//        $('.content').append(data.content);
//        $('.createdAt').append(data.createdAt);
//        $('.updatedAt').append(data.updatedAt);

//     });
// });


//start here

//fUNCTION TO GET
$(document).ready(function(){

    // $("#btn").click(function(){
        $.ajax({

            url:"http://localhost:3211/api/notes",
            type: "GET",
            Accept: "application/json",
            success: function (outputdata) {
             
                $.each(outputdata, function(key, value){

                    var id = value.id;
                    var name = value.name;
                    var content = value.content;
                    var createdAt = value.createdAt;
                    var updatedAt = value.updatedAt;
                    // var action = "Edit";

                    $("#tbl").append("<tr><td>"+id+"</td><td>"+name+"</td><td>"+content+"</td><td>"+createdAt+"</td><td>"+updatedAt+"</td></td></tr>")
                });

            },
            error: function(e){
                alert("something went wrong");
            }
            
        // })

        
    });
$("#btn").click(function(){
    $.ajax({

        url:"http://localhost:3211/api/notes",
        type: "POST",
        Accept: "application/json",
        success: function (outputdata) {
         
            $.each(outputdata, function(key, value){

                var id = value.id;
                var name = value.name;
                var content = value.content;
                var createdAt = value.createdAt;
                var updatedAt = value.updatedAt;
                // var action = "Edit";

                $("#tbl").append("<tr><td>"+id+"</td><td>"+name+"</td><td>"+content+"</td><td>"+createdAt+"</td><td>"+updatedAt+"</td></td></tr>")
            });

        },
        error: function(e){
            alert("something went wrong");
        }
        
    })

    
});


});

