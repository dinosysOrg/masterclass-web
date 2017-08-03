exports.setUserLocal = (xhr, name) => {
  let userLocal = {
    token: xhr.getResponseHeader('Access-Token'),
    client: xhr.getResponseHeader('Client'),
    expiry: xhr.getResponseHeader('Expiry'),
    tokenType: xhr.getResponseHeader('Token-Type'),
    Uid: xhr.getResponseHeader('Uid'),
    userName: name,
  };
  if (typeof localStorage !== 'undefined' && localStorage) {
    localStorage.setItem('userLocal', JSON.stringify(userLocal));
  }
};

exports.getUserLocal = () => {
  if (typeof localStorage !== 'undefined' && localStorage) {
    return JSON.parse(localStorage.getItem('userLocal'));
  }
};

exports.clearUserLocal = () => {
  if (typeof localStorage !== 'undefined' && localStorage) {
    return localStorage.clear();
  }
};

