exports.setUserLocal = (xhr, name, id, layoutId) => {
  let userLocal = {
    token: xhr.getResponseHeader('Access-Token'),
    client: xhr.getResponseHeader('Client'),
    expiry: xhr.getResponseHeader('Expiry'),
    tokenType: xhr.getResponseHeader('Token-Type'),
    uid: xhr.getResponseHeader('Uid'),
    userName: name,
    id: id,
    layout_id: layoutId, 
  };
  if (typeof localStorage !== 'undefined' && localStorage) {
    localStorage.setItem('userLocal', JSON.stringify(userLocal));
  }
};

exports.changeLayoutID = (store) => {
  let currentStorage;
  if (typeof localStorage !== 'undefined' && localStorage) {
    currentStorage = JSON.parse(localStorage.getItem('userLocal'));
  }
  let userLocal = {
    token: currentStorage.token,
    client: currentStorage.client,
    expiry: currentStorage.expiry,
    tokenType: currentStorage.tokenType,
    uid: currentStorage.uid,
    userName: currentStorage.userName,
    id: currentStorage.id,
    layout_id: store.getState().userReducer.userInfo.layout_id, 
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
    if (userLocal) {
      return {
        'access-token': userLocal.token,
        'client': userLocal.client,
        'expiry': userLocal.expiry,
        'token-type': userLocal.tokenType,
        'uid': userLocal.uid,
        'Content-Type': 'application/json',
      };
    } else return null;
  }
};

exports.clearUserLocal = () => {
  if (typeof localStorage !== 'undefined' && localStorage) {
    localStorage.clear();
  }
};

