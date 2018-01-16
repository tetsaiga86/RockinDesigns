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

function load(pageName){
  ReactDOM.unmountComponentAtNode(document.getElementById('app'))
  renderComponent(pageName);
}

page('/', function () {
  load(<Home />);
});

page('/about', function () {
  load(<About />);
})

page('/portfolio', function () {
  load(<Portfolio />);
})

page('/services', function () {
  load(<Services />);
})

page('/resume', function () {
  load(<Resume />);
})

page(window.ENV.route);
