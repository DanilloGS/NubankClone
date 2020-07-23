import User from '../Models/User';

const createUser = async (request, response) => {
    try {
        const {_id, email} = request.body;
        let newUser = await User.findOne({_id});
        if(!newUser){
            newUser = await User.findOne({email});
            if(!newUser){
                newUser = await User.create(request.body);
                return response.json({
                    status: true,
                    data: {newUser}
                });
            }
            throw 'Email já cadastrado'; 
        } else {
            throw 'Usuário já cadastrado';
        } 
    } catch(error) {
        return response.json({
            status: false,
            error
        });
    }
}

const getUser = async (request, response) => {
    try {
        const cpf = request.params.id;
        const userFound = await User.findById(cpf);
        if(userFound)
            return response.json({
                status: true,
                userFound
            });
        throw 'Usuário não cadastrado';
    } catch (error) {
        return response.json({
            status: false,    
            error
        });
    }
    
}

const transfer = async (request, response) => {
    try {
        const currentUserId = request.params.id;
        const valueTransfered = Number(request.query.valueTransfered);
        const userRecivingMoneyId = request.query.userRecivingMoneyId;

        const currentUser = await User.findById(currentUserId);
        const debitAfterTransfer = currentUser.debit - valueTransfered;
        if(debitAfterTransfer < 0) {
            throw 'Débito insuficiente';
        }

        const userRecivingMoney = await User.findById(userRecivingMoneyId);
        
        if(userRecivingMoney) {
            const valueBeingRecived = userRecivingMoney.debit + valueTransfered
            await User.updateOne({_id: currentUserId}, {debit: debitAfterTransfer});
            await User.updateOne({_id: userRecivingMoneyId}, {debit: valueBeingRecived});
            return response.json({
                status: true,
            });
        }    
        throw 'Usuário não cadastrado';
    } catch(error) {
        return response.json({
            status: false,
            error
        })
    }
    
}

const deleteUser = async (request, response) => {
    try {
        const currentUserId = request.params.id;
        await User.deleteOne({_id: currentUserId}, (error, raw) => {
            if(error)
                throw 'Usuário não encontrado';
            else
                return response.json({
                    status:  true,
                    raw
                });
        });
    } catch(error) {
        return response.json({
            status: false,
            error
        });
    }    
}

export { createUser, getUser, transfer, deleteUser};