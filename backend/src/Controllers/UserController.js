import User from '../Models/User';

const createUser = async (request, response) => {
    const {_id, email} = request.body;
    let newUser = await User.findOne({_id});
    if(!newUser){
        newUser = await User.findOne({email});
        if(!newUser){
            newUser = await User.create(request.body);
            return response.status(201).json({
                status:'success',
                data: {newUser}
            });
        }
        return response.json("Email já cadastrado"); 
    } else {
    return response.json("Usuário já cadastrado");
    } 
}

const getUser = async (request, response) => {
    const cpf = request.params.id;
    const userFound = await User.findById(cpf);
    if(userFound)
        return response.status(201).json({
            status:'success',
            data: {userFound}
        });
    return response.json("Usuário não cadastrado");
}

const makeWithdraw = async (request, response) => {
    const {withdrawalValue} = Number(request.body);
    let currentUserInfo = await User.findById(request.params.id);
    let totalMoney = currentUserInfo.conta.debito - withdrawalValue;
    if(totalMoney < 0) {
        return response.json("Débito insuficiente");
    }
    User.updateOne(request.params.id.json(), {conta:{debito: totalMoney}}, (error, raw) => {
        if(error){
            console.log(error);
            // throw 'Error';
        } else {
            console.log(raw);
        }
    })
}

export { createUser, getUser, makeWithdraw };