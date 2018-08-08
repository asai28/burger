var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableName, cb){
        connection.query("SELECT * FROM ??", [tableName], function(err, result){
            if(err) console.log(err);
            cb(result);
        });
    },
    insertOne: function(tableName, burgerName, devoured, cb){
        connection.query("INSERT INTO ?? VALUES(?,?)", [tableName, burgerName, devoured], function(err, result){
            if(err) console.log(err);
            cb(result);
        });
    },
    updateOne: function(tableName, condition, cb){
        var queryString = "UPDATE " + tableName + " SET " + condition;
        connection.query(queryString, function(err, result){
            if(err) console.log(err);
            cb(result);
        });
    }
}

module.exports = orm;