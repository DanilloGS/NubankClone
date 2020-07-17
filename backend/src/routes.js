import express from 'express';
import {getUser, createUser, transfer} from './Controllers/UserController';

const routes = express.Router(); 

routes.post('/signup', createUser);
routes.get('/users/:id', getUser);
routes.put('/user/transfer/:id', transfer);
// routes.get('/users/:id', UserController.getTotalMoney);


export default routes;