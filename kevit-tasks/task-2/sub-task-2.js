const axios = require("axios");

async function getInfo(commentEmail, commentName) {
    try {
        const url = `https://jsonplaceholder.typicode.com`;

        const commentResponce = await axios.get(
            `${url}/comments?email=${commentEmail}&name=${commentName}`
        );
        const comment = commentResponce.data;

        const postResponce = await axios.get(
            `${url}/posts?id=${comment[0].postId}`
        );
        const post = postResponce.data;

        const userResponce = await axios.get(`${url}/users?id=${post[0].userId}`);
        const user = userResponce.data[0];

        const finalData = {
            username: user.username,
            name: user.name,
            email: user.email,
        };
        console.log(finalData);
    } catch (e) {
        console.log(e);
    }
}

getInfo("Eliseo@gardner.biz", "id labore ex et quam laborum");