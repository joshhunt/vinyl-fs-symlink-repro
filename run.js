var map = require("map-stream");
var vfs = require("vinyl-fs");

var log = function (file, cb) {
  console.log(file.path.replace(process.cwd(), ""));
  cb(null, file);
};

vfs.src(["./test/**/*.js"]).pipe(map(log));
