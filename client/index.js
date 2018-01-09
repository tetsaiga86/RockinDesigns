import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import Home from './components/home'
import About from './components/about'

function renderComponent(component) {
  ReactDOM.render(
    component,
    document.getElementById('app')
  );
}

// page('*', function (context, next) {
//   ga('set', 'page', context.path);
//   ga('send', 'pageview');
//   next();
// })

page('/', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<Home />);
});

page('/about', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<About />);
})

page(window.ENV.route);
