var orm = require("../config/orm");

module.exports = {
    selectAll: orm.selectAll("burgers", function(result){
        console.log(result);
    }),
    insertOne: function(burgerName, devoured){
        orm.insertOne("burgers", burgerName, devoured,function(result){
            console.log(result);
        })
    },
    updateOne: function(condition){
        orm.updateOne("burgers", condition ,function(result){
            console.log(result);
        })
    }
};