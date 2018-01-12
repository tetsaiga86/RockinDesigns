import React from 'react'
import ReactDOM from 'react-dom'
import page from 'page'
import Home from './components/home'
import About from './components/about'
import Resume from './components/resume'
import Services from './components/services'
import Portfolio from './components/portfolio'

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

page('/portfolio', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<Portfolio />);
})

page('/services', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<Services />);
})

page('/resume', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(<Resume />);
})

page(window.ENV.route);
