let logoutTimer;

const startLogoutTimer = (logoutAction, time) => {
  logoutTimer = setTimeout(logoutAction, time);
};

const clearLogoutTimer = () => {
  if (logoutTimer) {
    clearTimeout(logoutTimer);
    logoutTimer = null;
  }
};
