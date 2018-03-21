"use strict";
let Controller = require("../../di/web/annotation/Controller");
let RequestMapping = require("../../di/web/annotation/RequestMapping");
let Autowired = require("../../di/web/annotation/Autowired");
@Controller({
    name: "Manage",
    basePath: "/manage"
})
class Manage {
    @Autowired
    Service111() {
    }

    @RequestMapping({
        path: "/list",
        method: "post"
    })
    list(req, res) {
        console.log(111);
        res.send("heyanjun");
    }

    @RequestMapping({
        path: "/index",
        method: "get"
    })
    index(req, res) {
        // this.Service111().query();
        this.Service111().queryAeolus();
        res.send("heyanjun222");
    }
}
module.exports = Manage;