import express from 'express';
import User from './Models/User';
import UserController from './Controllers/UserController';

const routes = express.Router(); 

routes.post('/users', UserController.createUser);

export default routes;