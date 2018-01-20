import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain:"siriuszz.auth0.com",
        clientID:"U4F_RLDPyR7uwQfBsM0tMb4zG2zOenHT",
        redirectUri:"http://localhost:3000/user/dashboard",
        responseType:"token id_token",
        scope:"openid"
    });


    login(){
        this.auth0.authorize();
    }
};
