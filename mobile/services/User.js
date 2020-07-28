import api from './api';

const login = async (cpf) => {
    try {
        const user = await api.get(`/users/${cpf}`);
        // console.log("userData ", userData.data);
        return user.data;
    }
    catch (error) {
        console.log(error);
        return {
            "status":false,
            "data":"Usuário Invalido",
        }
    }
}

export { login };