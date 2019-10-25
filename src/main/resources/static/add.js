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