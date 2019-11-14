const chokidar = require("chokidar");

chokidar.watch("./uploads").on("all", (event, path) => {
  console.log(event, path);
});

// https://github.com/paulmillr/chokidar
