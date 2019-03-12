import React from 'react'
import ShowComments from '../components/ShowComments'
import { mount } from 'enzyme';


describe('The ShowComments component: ', () =>{
    it('has a close button', () =>{
        const wrapper = mount(
                <ShowComments />
        );
        expect(wrapper.containsMatchingElement(
            <a href="#!" className="modal-close waves-effect waves-green btn">Close</a>
        )).toEqual(true)
    })

})   