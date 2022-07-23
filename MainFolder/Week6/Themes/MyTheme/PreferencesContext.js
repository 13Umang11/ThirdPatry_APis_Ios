import React from 'react';

export const PreferencesContext = React.createContext({
  toggleDark: () => {},
  toggleLight: () => {},
  toggleDefault: () => {},
  isThemeDark: 'Light Mode',
});
