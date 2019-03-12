import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';

describe('A tela de login', () => {

    it("render Login component", () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.containsMatchingElement(
        <label htmlFor="username" className="center-align">Usuário</label>
      )).toEqual(true);
  
      expect(wrapper.containsMatchingElement(
        <label htmlFor="password">Senha</label>
      )).toEqual(true);
    })
  
})