export default defineEventHandler((event) => {
  console.log("New req: ", getRequestURL(event));
});
