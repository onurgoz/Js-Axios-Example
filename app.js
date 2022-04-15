import axios from "axios";

const getData = async (userId) => {
  return await axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users/" + userId,
  }).then(async (userResponse) => {
    await axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts?userId=" + userId,
    }).then((posts) => {
      userResponse.data.posts = posts.data;
    });
    return userResponse.data;
  });
};
(async () => {
  await getData(1).then((data) => {console.log(data);}).catch((err) => {console.log(err)});
})();
