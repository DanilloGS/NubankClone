import { Schema as _Schema, model } from 'mongoose';
var Schema = _Schema;

const UserSchema = new Schema({
    "name": String,
    "_id": String,
    "email": String,
    "conta": {
        "numeroConta": Number,
        "agencia": Number,
        "debito": Number
    }
});

export default model('User', UserSchema);