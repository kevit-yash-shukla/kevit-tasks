//fetching posts from api

const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/posts';
request(url, (err, res, body) => {
    if (err) {
        console.log(err);
    }
    console.log(body)
})




// fetching the users from api

const url1 = 'https://jsonplaceholder.typicode.com/users';
request(url1, (err, res, body) => {
    if (err) {
        console.log(err);
    }
    console.log(body)
})




//fetching the comments from api


const url2 = 'https://jsonplaceholder.typicode.com/comments';
request(url2, (err, res, body) => {
    if (err) {
        console.log(err);
    }
    console.log(body)
})