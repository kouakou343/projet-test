const knex = require("./knex");

function createUser(user){
    return knex("user").insert(user);
};
function getAllUser(){
    return knex("user").select("*");
};
function getUserById(id){
    return knex("user").where("id", id = req.params.id).select("id");
};

function deleteUser(id){
    return knex("user").where("id",id).del();
};

function updateUser(id , user){
    return knex("user").where("id",id).update(user);
}

module.exports = {
    createUser,
    getAllUser,
    getUserById,
    deleteUser,
    updateUser
}
