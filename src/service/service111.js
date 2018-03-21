"use strict";
let Resource = require("../../di/web/annotation/Resource");
let Autowired = require("../../di/web/annotation/Autowired");
@Resource({
    name: "Service111"
})
class Service111 {
    @Autowired
    cip() {
    }

    @Autowired
    aeolus() {
    }

    query() {
        this.cip().prepareQuery({
            sql: "select * from t_interface",
            params: []
        }).then((data)=> {
            console.log("Service111-query-data", data);
        }, (err)=> {
            console.log("Service111-query-err", err);
        });
    }

    queryAeolus() {
        this.aeolus().prepareQuery({
            sql: "select * from t_data_source",
            params: []
        }).then((data)=> {
            console.log("Service111-query-data", data);
        }, (err)=> {
            console.log("Service111-query-err", err);
        });
    }
}
module.exports = Service111;