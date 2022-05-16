const fetch = require("node-fetch");

module.exports = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return { posts };
};
