import User from '../Models/User';

const createUser = async (request, response) => {
    const {_id, email} = request.body;
    let newUser = await User.findOne({_id});
    if(!newUser){
        newUser = await User.findOne({email});
        if(!newUser){
            newUser = await User.create(request.body);
            return response.status(201).json({
                status:'Success',
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
            status:'Success',
            data: {userFound}
        });
    return response.json("Usuário não cadastrado");
}

const transfer = async (request, response) => {
    const currentUserId = request.params.id;
    const valueTransfered = Number(request.query.valueTransfered);
    const userRecivingMoneyId = request.query.userRecivingMoneyId;

    const currentUser = await User.findById(currentUserId);
    const debitAfterTransfer = currentUser.conta.debito - valueTransfered;
    if(debitAfterTransfer < 0) {
        return response.json("Débito insuficiente");
    }

    const userRecivingMoney = await User.findById(userRecivingMoneyId);
    
    if(userRecivingMoney) {
        const valueBeingRecived = userRecivingMoney.conta.debito + valueTransfered
        await User.findByIdAndUpdate(currentUserId, {conta:{debito: debitAfterTransfer}});
        await User.findByIdAndUpdate(userRecivingMoneyId, {conta:{debito: valueBeingRecived}});
        return response.status(201).json({
            status:'Success'
        });
    }    
    return response.json({
        status: 'Error',
        data: {userRecivingMoney}
    })
}

export { createUser, getUser, transfer };