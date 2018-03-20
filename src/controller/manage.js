"use strict";
let Controller = require("../../di/Controller");
let RequestMapping = require("../../di/RequestMapping");
@Controller({
    name: "Manage"
})
class Manage {
    @RequestMapping({
        name: "123"
    })
    list() {
        console.log(111);
    }
}
module.exports = Manage;