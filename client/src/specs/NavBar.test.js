import React from 'react'
import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import { mount } from 'enzyme';


describe('O componente NavBar: ', () =>{
    it('has a title', () =>{
        const wrapper = mount(
                <NavBar />
        );
        expect(wrapper.containsMatchingElement(
            <a tabIndex="0" href="!#"><h5>Hacker News</h5></a>
        )).toEqual(true)
    })

    it('has a menu component', () =>{
        const wrapper = mount(
                <NavBar />
        );
        expect(wrapper.containsMatchingElement(
            <Menu />
        )).toEqual(true)
    })

})   