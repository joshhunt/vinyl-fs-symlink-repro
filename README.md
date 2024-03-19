Tested on Ubuntu 20.04.5 LTS, Node v20.9.0

1. `npm install`
2. `./symlink.sh`
3. `node run.js`

Expect output to list something like

```
/test/top-file.js
/test/folder-a/file-a.js
/test/folder-b/file-b.js
/test/folder-b/folder-c/file-c.js
/test/symlink-dest/s-top-file.js
/test/symlink-dest/s-folder-a/s-file-a.js
/test/symlink-dest/s-folder-b/s-file-b.js
/test/symlink-dest/s-folder-b/folder-c/s-file-c.js
```
