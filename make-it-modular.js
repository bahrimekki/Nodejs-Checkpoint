const mymodule = require("./mymodule.js");
var dir = process.argv[2];
var mymoduleStr = process.argv[3];

mymodule(dir, mymoduleStr, function (err, list) {
    if (err) {
        return console.error("There was an error:", err);
    }

    list.forEach(function (file) {
        console.log(file);
    });
});
