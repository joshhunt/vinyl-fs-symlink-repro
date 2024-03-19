const map = require("map-stream");
const vfs = require("vinyl-fs");
const gs = require("glob-stream");

console.log("vinyl-fs:");
const vpipe = vfs.src(["./test/**/*.js"]).pipe(
  map((file, cb) => {
    console.log(file.path.replace(process.cwd(), ""));
    cb(null, file);
  })
);

vpipe.on("end", () => {
  console.log("");
  console.log("glob-stream:");

  gs("./test/**/*.js").pipe(
    map((file, cb) => {
      console.log(file.path.replace(process.cwd(), ""));
      cb(null, file);
    })
  );
});
