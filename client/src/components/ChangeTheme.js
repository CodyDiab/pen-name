import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const ChangeTheme = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <button className="toggle-icons" type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button className="toggle-icons"  type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default ChangeTheme;