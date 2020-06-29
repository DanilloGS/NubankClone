import User from '../Models/User';

exports.createUser = async (request, response) => {
    const {cpf, email} = request.body;
    let newUser = await User.findOne({cpf});
    if(!newUser){
        newUser = await User.findOne({email});
        if(!newUser){
            newUser = await User.create(request.body);
            return response.status(201).json({
                status:'success',
                data: {newUser}
            });
        }
    }
    return response.json("Usuário já cadastrado"); 
}
