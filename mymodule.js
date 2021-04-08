var fs = require("fs");
var path = require("path");

module.exports = function (dir, mymoduleStr, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list.filter(function (file) {
            return path.extname(file) === "." + mymoduleStr;
        });

        callback(null, list);
    });
};
