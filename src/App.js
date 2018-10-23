/**
Please do not edit this file.
*/

import React from "react";
import styled from "styled-components";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from "react-router-dom";

import skipioLogoUrl from "./img/skipio-logo.svg";

import Instructions from "./Instructions.js";
import Clock from "./questions/Clock.js";
import JSX from "./questions/JSX.js";
import Todos from "./questions/Todos.js";
import Ajax from "./questions/Ajax.js";
import Forms from "./questions/Forms.js";
import Architecture from "./questions/Architecture.js";

export default () => (
  <Router>
    <Container>
      <Nav>
        <img src={skipioLogoUrl} alt="skipio logo" />
        <Link to="/instructions" activeClassName="active">
          Instructions
        </Link>
        <Link to="/todos" activeClassName="active">
          To-do App
        </Link>
        <Link to="/ajax" activeClassName="active">
          Ajax
        </Link>
        <Link to="/clock" activeClassName="active">
          Analog Clock
        </Link>
        <Link to="/forms" activeClassName="active">
          Forms
        </Link>
        <Link to="/jsx" activeClassName="active">
          JSX Renderer
        </Link>
        <Link to="/archetecture" activeClassName="active">
          Architecture
        </Link>
      </Nav>
      <Content>
        <Switch>
          <Route path="/instructions" component={Instructions} />
          <Route path="/todos" component={Todos} />
          <Route path="/clock" component={Clock} />
          <Route path="/forms" component={Forms} />
          <Route path="/jsx" component={JSX} />
          <Route path="/ajax" component={Ajax} />
          <Route path="/archetecture" component={Architecture} />
          <Redirect to="/instructions" />
        </Switch>
      </Content>
    </Container>
  </Router>
);

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Link = styled(NavLink)`
  display: block;
  text-align: left;
  color: inherit;
  margin: 8px;
  margin-right: 0;
  border: 1px solid transparent;
  border-right: 0;
  line-height: 40px;
  padding: 0px 20px;
  transition-duration: 0.2s;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  position: relative;
  &:link {
    text-decoration: none;
  }
  &:visited {
    color: inherit;
  }
  &:hover {
    background: #f0f0f0;
  }
  &:active {
    background: #ddd;
    transition-duration: 0s;
  }
  &.active {
    background: white;
    border-color: #eee;
    transform: translateX(2px);
  }
`;

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 180px;
  background: #f8f8f8;
  box-shadow: -1px 0px 0px 0px #eee inset;
  text-align: center;
  img {
    width: 100%;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 180px;
  padding: 40px;
  overflow-x: hidden;
  overflow-y: auto;
  p,
  li {
    max-width: 70ch;
    line-height: 1.7em;
  }
`;
