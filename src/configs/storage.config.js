exports.setUserLocal = (xhr, name, id) => {
  let userLocal = {
    token: xhr.getResponseHeader('Access-Token'),
    client: xhr.getResponseHeader('Client'),
    expiry: xhr.getResponseHeader('Expiry'),
    tokenType: xhr.getResponseHeader('Token-Type'),
    uid: xhr.getResponseHeader('Uid'),
    userName: name,
    id: id,
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

exports.setHeader = () => {
  if (typeof localStorage !== 'undefined' && localStorage) {
    let userLocal = JSON.parse(localStorage.getItem('userLocal'));
    return {
      'access-token': userLocal.token,
      'client': userLocal.client,
      'expiry': userLocal.expiry,
      'token-type': userLocal.tokenType,
      'uid': userLocal.uid,
      'Content-Type': 'application/json',
    };
  }
};

exports.clearUserLocal = () => {
  if (typeof localStorage !== 'undefined' && localStorage) {
    localStorage.clear();
  }
};

