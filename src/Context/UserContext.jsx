import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// PropTypes Validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
