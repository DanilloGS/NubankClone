import { Schema as _Schema, model } from 'mongoose';
var Schema = _Schema;

const UserSchema = new Schema({
    "name": String,
    "_id": String,
    "email": String,
    "accountNumber": String,
    "agency": String,
    "debit": Number
    
});

export default model('User', UserSchema);