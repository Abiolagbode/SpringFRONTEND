$(document).ready(function(){

    $("#update").hide();

    assignDataToTable();

    $('table').on('click', 'button[id="delete"]', function(e){
       var id = $(this).closest('tr').children('td:first').text();
       
       $.ajax({
            type:"DELETE",
            url:"http://localhost:3211/api/notes/" + id,
            success: function(data){
                alertUsing("testing.", true);
                assignDataToTable();
            },
            error: function(err) {  
                console.log(err);
                alert(err);
            }
        });

    })

    $('table').on('click', 'button[id="edit"]', function(e){
       var id = $(this).closest('tr').children('td:first').text();
       var name = $(this).closest('tr').children('td:nth-child(2)').text(); 
       var content = $(this).closest('tr').children('td:nth-child(3)').text(); 
   
       $("#id").val(id);
        $("#name").val(name);
        $("#content").val(content);
        // $("#updatedAt").val(updatedAt);
        // $("#createdAt").val(createdAt);

        $("#update").show();
        $("#save").hide();

        $("#update").click(function() {
        
            var id = $("#id").val();
            console.log("id ", $("#id").val());

            var jsonVar = {
                name: $("#name").val(),
                createdAt: $("#createdAt").val(),
                updatedAt: $("#updatedAt").val()
                };

            $.ajax({
                type:"PUT",
                data: JSON.stringify(jsonVar),
                contentType: "application/json",
                url:"http://localhost:3211/api/notes/" + id,
                success: function(data){
                    alertUsing("saving.", true);
                    $("#update").hide();
                    $("#save").show();
                    $("#id").val("").hide();
                    $("#name").val("");
                    $("#content").val("");
                    // $("#createdAt").val("");
                    // $("#updatedAt").val("");
                    assignDataToTable();
                },
                error: function(err) {  
                    console.log(err);
                    // alert(err);
                }


        });

    });

    })

// to save data to db
    $("#save").click(function() {

        var jsonVar = {
            name: $("#name").val(),
            content: $("#content").val(),
            // createdAt: $("#createdAt").val()
            // updatedAt: $("#updatedAt").val()
        };

        $.ajax({
            type:"POST",
            url:"http://localhost:3211/api/notes/",
            data: JSON.stringify(jsonVar),
            contentType: "application/json",
            success: function(data){
                assignDataToTable();
            },
            error: function(err) {
                console.log(err);
                alert(err);
            }
        });

    });

    //to get data from db
    function assignDataToTable() {
        $("tbody").empty();
        $.ajax({    
          type:"GET",
          contentType: "application/json",
          url:"http://localhost:3211/api/notes",
          success: function(data) {
            var users = JSON.parse(JSON.stringify(data));
            for (var i in users) {
                $("tbody").
                append("<tr> \
                            <td>" +  users[i].id + "</td> \
                            <td>" +  users[i].name + "</td> \
                            <td>" +  users[i].content + "</td> \
                            <td>" +  users[i].createdAt + "</td> \
                            <td>" +  users[i].updatedAt + "</td> \
                            <td> \ <button id='delete' class='btn btn-danger'>Delete</button> \
                           <button id='edit' class='btn btn-warning'>Edit</button> \ </td> \
                        </tr>");
            }
          },
          error: function(data) { 
            console.log(data);
            }
        });
       
    }

function alertUsing(text, flag) {

    var alert = $(".alert");

    if(flag){
        alert.removeClass("alert-danger").addClass("alert-success");
    }else{
        alert.removeClass("alert-success").addClass("alert-danger");
        
    }
    
    alert.fadeIn(400);
    alert.css("display", "block");
    alert.text(text);
    setTimeout(function() {
        alert.fadeOut();
    }, 2000);

  }

});