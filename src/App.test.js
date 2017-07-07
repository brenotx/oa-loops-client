import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { shallow, mount, render } from 'enzyme';
import { stub } from 'sinon';

import App from './App';
import Header from './containers/Header';
import Cell from './components/Cell';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//});

describe('<App />', () => {

    it('should render the header', () => {
        const renderedComponent = shallow(
            <App />
        );
        expect(renderedComponent.find(Header).length).toBe(1);
    });

  // it('should render three <Game /> components', () => {
    // const wrapper = shallow(<App />);
    // expect(wrapper.find(Game).length).toBe(1);
  // });

  // it('should render aaa <Game /> components', () => {
  //   const wrapper = shallow(
  //     <Game rows={5} columns={5} />
  //   );
  //   expect(wrapper.find(Cell).length).toBe(25);
  // });

  // it('should render three <Cell /> components', () => {
  //   const gameNivel = fromJS(["20", "21", "22", "23", "24"]);
  //   const wrapper = shallow(
  //     <Game rows={5} columns={5} />
  //   );
  //   expect(mount(<Cell gameNivel={gameNivel} />).find('.active').length).toBe(1);
  //   // expect(wrapper.find('.active').length).toBe(25);
  // });

  // it('allows us to set props', () => {
  //   const gameNivel = ["20", "21", "22", "23", "24"];
  //   const wrapper = shallow(
  //     <Game rows={5} columns={5}>
  //       <Cell gameNivel={gameNivel} />
  //     </Game>
  //   );
    // expect(wrapper.props().gameNivel).to.equal('baz');
    // wrapper.setProps({ gameNivel: ["20", "21", "22", "23", "24"] });
    // wrapper.props.gameNivel = ["20", "21", "22", "23", "24"];
    // expect(wrapper.find(Cell).filter('.active')).to.have.length(1);
    // expect(wrapper.props.gameNivel.length).toBe(5);
  // });


  // it('should render its heading', () => {
  //   const renderedComponent = shallow(
  //     <Game />
  //   );
  //   expect(renderedComponent.contains(
  //     <Cell key={cellId} id={cellId} gameNivel={this.gameNivel} />
  //   )).toBe(true);
  // });

  // it('should render an `.icon-star`', () => {
  //   const wrapper = shallow(<MyComponent />);
  //   expect(wrapper.find('.icon-star')).to.have.length(1);
  // });

  // it('should render children when passed in', () => {
  //   const wrapper = shallow(
  //     <MyComponent>
  //       <div className="unique" />
  //     </MyComponent>
  //   );
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Foo onButtonClick={onButtonClick} />
  //   );
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.equal(true);
  // });

});