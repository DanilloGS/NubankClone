var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    "name": String,
    "cpf": String,
    "email": String,
    "conta": {
        "numeroConta": Number,
        "agencia": Number,
        "debito": Number
    }
});

module.exports = mongoose.model('User', UserSchema);