import {post} from "./Server";


const authProvider = {
    login: ({ username, password }) =>  {
        const url  = 'api/user/login';
        const data = {
            email: username,
            password: password
        };
        return post(url,data)
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    getPermissions: () => Promise.resolve(),

};

export default authProvider;