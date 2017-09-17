import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {Provider} from 'react-redux';
import configureStore from './configs/store.config';
import {Router, browserHistory, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import {Home, Browse, Profile, Overview, MyPath, Syllabus, SyllabusDetail, Quiz, ViewAll, Authenticate, NonAuthenticate} from './containers';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} >
        <Route component={NonAuthenticate} >
          <Route path="/" component={Home} />
          <Route path="/ViewAll" component={ViewAll} /> 
        </Route>                  
        <Route path="/Path/:path_Id" component={Overview} />
        <Route path="/Path/:path_Id/Syllabus" component={Syllabus} />
        <Route path="/Path/:path_Id/Syllabus/:syllabus_Id" component={SyllabusDetail} />
        <Route component={Authenticate} >
          <Route path="/Browse" component={Browse} />
          <Route path="/Profile" component={Profile} />
          <Route path="/MyPath" component={MyPath} />
          <Route path="/Quiz" component={Quiz} />     
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();