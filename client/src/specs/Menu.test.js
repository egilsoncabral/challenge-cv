import React from 'react'
import Menu from '../components/Menu'
import { mount } from 'enzyme';


describe('The Menu component: ', () =>{
    it('has a item: New', () =>{
        const wrapper = mount(
                <Menu />
        );
        expect(wrapper.containsMatchingElement(
            <option value="newstories" aria-label="News Stories" defaultValue>New</option>
        )).toEqual(true)
    })

})    