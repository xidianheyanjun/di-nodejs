"use strict";
let BaseDao = require("../../di/web/dao/BaseDao");
let Dao = require("../../di/web/annotation/Dao");
@Dao({
    name: "aeolus",
    configKey: "aeolus"
})
class Aeolus extends BaseDao {
}
module.exports = Aeolus;