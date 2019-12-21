const { server } = require("./server");

server.listen(process.env.PORT ? process.env.PORT : 4200, () => {
  console.log(
    `Listening on port ${process.env.PORT ? process.env.PORT : 4200}`
  );
});
