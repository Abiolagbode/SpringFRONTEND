
// //start here

// //fUNCTION TO GET
// $(document).ready(function(){

//     $("#edit").click(function(){
//         $.ajax({

//             url:"http://localhost:3211/api/notes/{id}",
//             type: "POST",
//             Accept: "application/json",
//             success: function (outputdata) {
             
//                 $.each(outputdata, function(key, value){

//                     var id = value.id;
//                     var name = value.name;
//                     var content = value.content;
//                     var createdAt = value.createdAt;
//                     var updatedAt = value.updatedAt;

//                     $("#tbl").append("<tr><td>"+id+"</td><td>"+name+"</td><td>"+content+"</td><td>"+createdAt+"</td><td>"+updatedAt+"</td></tr>")
//                 });

//             },
//             error: function(e){
//                 alert("something went wrong");
//             }
            
//         })
//     });


// });

