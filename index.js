const axios = require("axios");

async function getUsersWithPosts() {
  try {
    // Fetch users
    const usersResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = usersResponse.data;

    // Fetch posts
    const postsResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = postsResponse.data;

    // Map users with their posts
    const usersWithPosts = users.map((user) => ({
      ...user,
      posts: posts.filter((post) => post.userId === user.id),
    }));

    return usersWithPosts;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Propagate the error to the caller
  }
}

// Example usage
getUsersWithPosts()
  .then((usersWithPosts) => {
    console.log("Users with their posts:", usersWithPosts);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
