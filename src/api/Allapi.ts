
export const fetchPost = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());