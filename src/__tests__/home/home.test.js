import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../components/home';

it('render home UI correctly', () => {
  const home = renderer.create(<Home />).toJSON();
  expect(home).toMatchSnapshot();
});
