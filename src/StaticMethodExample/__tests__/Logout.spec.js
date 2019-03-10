import Logout from '../Logout'
import React, { useState, useEffect } from 'react';
import { AuthContext } from '../AuthContext';
import { render, fireEvent } from 'react-testing-library';
import Auth from '../Auth';
import sinon from 'sinon';
import { fail } from 'assert';

let authState = true;
function LogoutComp(){
    const [ state, setState ] = useState(true);
    useEffect(()=>{
        authState = state;
    });
    return <AuthContext.Provider value={[state, setState]}><Logout/></AuthContext.Provider>;
}

describe('<Logout/>',()=>{
  let stubSignOut, stubSignIn;
  beforeEach(()=>{
    stubSignOut = sinon.stub(Auth, 'signOut');
    stubSignIn = sinon.stub(Auth, 'signIn');
  });

  afterEach(()=>{
    stubSignOut.restore();
    stubSignIn.restore();
  });

  it('Test logout', () => {
    // given
    const utils = render(<LogoutComp/>);
    const logout_nav_item = utils.getByLabelText('logout-nav-item');

    // when
    fireEvent.click(logout_nav_item);

    // then
    expect(authState).toBe(false);
    expect(stubSignOut.called).toBe(true);
  });  

  it('Test stub with throw', ()=> {
    stubSignOut.throws("name", "message");
    try {
      Auth.signOut();
      fail("should be failed");
    } catch(e) {
      expect(e.name).toBe("name");
      expect(e.message).toBe("message");
    }
    expect(stubSignOut.called).toBe(true);
  });

  it('Test stub with return value', ()=> {
    stubSignOut.returns(true);
    expect(Auth.signOut()).toBe(true);
    expect(stubSignOut.called).toBe(true);
  }); 

  it('Test stub with arguments', ()=> {
    stubSignIn.withArgs('root', '123456').throws("login failed", "wrong password");
    try {
      Auth.signIn('root', '123456');
      fail("should be failed");
    } catch(e) {
      expect(e.name).toBe("login failed");
      expect(e.message).toBe("wrong password");
    }
    expect(stubSignIn.called).toBe(true);
  }); 
});


