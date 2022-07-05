 const axios = require("axios");
 const url = "https://jsonplaceholder.typicode.com";
 async function printData(username) {
     try {
         const response = await axios.get(`${url}/users?username=${username}`);
         const user = response.data[0];

         const allposts = await axios.get(`${url}/posts/?userId=${user.id}`);
         const allCommentsData = await axios.get(`${url}/comments`);

         const userData = {
             username: user.username,
             name: user.name,
             email: user.email,
             city: user.address.city,
             posts: allposts.data.map((post) => ({
                 title: post.title,
                 comments: allCommentsData.data
                     .filter((comment) => comment.postId === post.id)
                     .map((comment) => ({
                         name: comment.name,
                         body: comment.body,
                     })),
             })),
         };

         console.log(JSON.stringify(userData, null, 3));
     } catch (error) {
         console.log("Something is Wrong! " + error);
     }
 }

 printData("Antonette");