import express from 'express';
import {getUser, createUser, transfer, deleteUser} from './Controllers/UserController';

const routes = express.Router(); 

routes.post('/signup', createUser);
routes.get('/users/:id', getUser);
routes.put('/user/transfer/:id', transfer);
routes.delete('/user/:id', deleteUser);
// routes.get('/users/:id', UserController.getTotalMoney);


export default routes;