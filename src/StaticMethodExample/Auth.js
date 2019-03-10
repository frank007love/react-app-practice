import React, { Component } from 'react';

const session_token_key = 'session_token';

export default class Auth extends Component {
    
    static signIn(username, password){
        // check credential
        sessionStorage.setItem(session_token_key,'session_info');
    }

    static signOut(){
        sessionStorage.clear();
    }

    static checkLogin(){
        if( !sessionStorage.getItem(session_token_key) ) {
            throw new Error("no session info");
        }
    }
};
