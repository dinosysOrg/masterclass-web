exports.setUserLocal = (xhr) => {
  let userLocal = {
    'Access-Token': xhr.getResponseHeader('Access-Token'),
    'Client': xhr.getResponseHeader('Client'),
    'Expiry': xhr.getResponseHeader('Expiry'),
    'Token-Type': xhr.getResponseHeader('Token-Type'),
    'Uid': xhr.getResponseHeader('Uid'),
  };
  localStorage.setItem('userLocal', JSON.stringify(userLocal));
};

exports.getUserLocal = () => localStorage.getItem('userLocal');
