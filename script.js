let list = $('#userList');

$('#postsButton').click(()=>{
   $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(response){
        list.empty();
	    response.forEach(function(element){
		    let li = $('<li></li>');
		    li.text(JSON.stringify(element));
		    list.append(li);
	    });
    }); 
});

$('#posts10').click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(response){
         list.empty();
         response.forEach(function(element){
             if(element.id == 10) {
                let li = $('<li></li>');
                li.text(JSON.stringify(element));
                list.append(li);
             } 
         });
     }); 
 });

 $('#posts12Comments').click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', function(response){
         list.empty();
         response.forEach(function(element){
             if(element.id == 12) {
                let li = $('<li></li>');
                li.text(JSON.stringify(element));
                list.append(li);
             } 
         });
     }); 
 });

 $('#user2posts').click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(response){
         list.empty();
         response.forEach(function(element){
             if(element.userID == 2) {
                let li = $('<li></li>');
                li.text(JSON.stringify(element));
                list.append(li);
             } 
         });
     }); 
 });

 $('#createPost').click(()=>{
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', 
        {
            "userID": 15,
            "title": "test title",
            "body": "this is a test body"
        },
        function(data){
            list.empty();
            let li = $('<li></li>');
            li.text(JSON.stringify(data));
            list.append(li);
        }
    )
 });

 $('#replacePost12').click(()=>{
    $.ajax({
            method: 'PUT',
            url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
            data: {
                "userID": 15,
                "title": "test title replace",
                "body": "this is a test body replace"},
            complete: function(data){
                list.empty();
                let li = $('<li></li>');
                li.text(JSON.stringify(data.responseJSON));
                list.append(li);
            }
        },
    )
 });

 $('#updatePost12').click(()=>{
    $.ajax({
            method: 'PATCH',
            url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
            data: {
                "title": "test title update"},
            complete: function(data){
                list.empty();
                let li = $('<li></li>');
                li.text(JSON.stringify(data.responseJSON));
                list.append(li);
            }
        },
    )
 });

 $('#deletePost12').click(()=>{
    $.ajax({
            method: 'DELETE',
            url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10',
            complete: function(data){
                list.empty();
                let li = $('<li></li>');
                li.text("Delete status: " + data.statusText);
                list.append(li);
            }
        },
    )
 });

 $('#displayListPosts').click(()=>{
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/db', function(response){
         list.empty();
         response.posts.forEach(function(element){
             let li = $('<li></li>');
             li.text(JSON.stringify(element));
             list.append(li);
             response.comments.forEach(function(e){
                 if(element.id == e.id){
                     let list2 = $('<ul></ul>');
                     let li2 = $('<li></li>');
                     li2.text(JSON.stringify(e));
                     list2.append(li2);
                     li.append(list2);
                     li.children().hide();
                 }
             });
         });
     }); 
 });

 $('#linkBack').click(()=>{
     list.empty();
     let li = $('<li></li>');
     li.html("<a href='https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts'>link back to all posts</a>");
     list.append(li);
 });

 list.click( (e)=>{
    if(e.target && e.target.nodeName == "LI"){
        $(e.target).children().show();
    };
})

// function getAllUsers(){
//     return new Promise(function(resolve, reject){
//         $.get('https://reqres.in/api/users', function(users){
//             if(users.data.length){
//                 resolve(users.data);
//             } else {
//                 reject("Danger Will Robinson");
//             }
//         });
//     });
// };

// function getAllPosts(){
//     return new Promise(function(resolve, reject){
//         $.get('https://reqres.in/api/posts', function(posts){
//             resolve(posts);
//         });
//     });
// };

// let userPromise = getAllUsers();
// let postPromise = getAllPosts();
// Promise.all([userPromise, postPromise]).then(function(results){
//         console.log(results);
// }).catch((err)=>{
//     console.log(err);
// });