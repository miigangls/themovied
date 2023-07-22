import React from 'react';

export const emptyAuth = {
  jwt: '',
  email: '',
  firstName: '',
  lastName: '',
};

export default React.createContext({
  auth: emptyAuth,
  onLogin: (email: string, password: string) => {
    /*empty*/
  },
  onLogout: () => {
    /*empty*/
  },
});
