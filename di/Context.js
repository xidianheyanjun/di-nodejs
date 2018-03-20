"use strict";
let path = require("path");
let fileUtils = require("../lib/FileUtils");
class Context {
    constructor(env) {
        let self = this;
        self["env"] = env;
        self["_class"] = {};
        let rootPath = path.join(path.dirname(__dirname), self["env"]["scanRootPath"]);
        let pathRegular = new RegExp(self["env"]["pathRegular"]);
        let filePathList = fileUtils.listFilePath(rootPath, pathRegular);
        console.log("filePathList", filePathList);
        filePathList.forEach((filePath)=> {
            self["_class"][filePath] = require(filePath);
        });
        console.log(self["_class"]);
    }
}
module.exports = Context;