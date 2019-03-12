import React from 'react'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import ListNews from '../components/ListNews'
import ShowComments from '../components/ShowComments';
import Pagination from "react-js-pagination";

import {shallow} from 'enzyme'

describe('The Home', () => {

    it('render NavBar component', () =>{
        const wrapper =shallow(
            <Home />
        );
        expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true)
    })
    it('render ListNews component', () =>{
        const wrapper =shallow(
            <Home />
        );

        expect(wrapper.containsMatchingElement(<ListNews />)).toEqual(true)
    })
    it('render Pagination component', () =>{
        const wrapper =shallow(
            <Home />
        );

        expect(wrapper.containsMatchingElement(<Pagination />)).toEqual(true)
    })
    it('render ShowComments component', () =>{
        const wrapper =shallow(
            <Home />
        );

        expect(wrapper.containsMatchingElement(<ShowComments />)).toEqual(true)
    })
})