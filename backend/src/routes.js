import express from 'express';
import UserController from './Controllers/UserController';

const routes = express.Router(); 

routes.post('/users/signup', UserController.createUser);
routes.get('/users/login', );

// routes.get('/users/:id', UserController.getTotalMoney);

routes.put('/users')

export default routes;