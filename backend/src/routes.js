import express from 'express';
import {getUser, createUser, makeWithdraw} from './Controllers/UserController';

const routes = express.Router(); 

routes.get('/users/:id', getUser);
routes.post('/users/signup', createUser);
routes.put('/user/withdrawal/:id', makeWithdraw);
// routes.get('/users/:id', UserController.getTotalMoney);


export default routes;