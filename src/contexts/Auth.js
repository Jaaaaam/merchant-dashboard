import React, { useReducer } from 'react';

const dummyUsers = [
  {
    id: 1,
    email: 'jamille@test.com',
    name: 'Jamille Silvestre',
    password: 'test123',
    role: 'admin',
    position: 'developer'
  },
  {
    id: 2,
    email: 'louie@test.com',
    name: 'Louie Foronda',
    password: 'test123',
    role: 'admin',
    position: 'developer'
  }
]

const initialState = {
  user: {},
  isAuthenticated: false
}

const reducer = ( (state, { type, payload }) => {
  switch(type) {
    case 'login':
      const user = dummyUsers.find(({email, password}) => {
        return email === payload.email && password === payload.password
      })
      const isAuthenticated = !!user;

      if (isAuthenticated) {
        localStorage.setItem('merch-dash-user', JSON.stringify(user));
        localStorage.setItem('merch-dash-is-authenticated', true);
      }
      return {
        ...state,
        user,
        isAuthenticated
      }

      case 'logout': 
        return initialState

      default: 
        return initialState
  }
})


const AuthContext = React.createContext();

function AuthProvider(props) {
  const [authState, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      { props.children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider };

