import React from 'react'
import NewsItem from '../components/NewsItem'
import ListNews from '../components/ListNews'

import {shallow} from 'enzyme'

describe('The ListNews component', () => {

    it('render NewsItem component', () =>{
        const wrapper =shallow(
            <ListNews news={[{counter:1, id:1}]}/>
        );
        expect(wrapper.containsMatchingElement(<NewsItem />)).toEqual(true)
    })
})