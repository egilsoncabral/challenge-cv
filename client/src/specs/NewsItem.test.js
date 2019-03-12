import React from 'react'
import NewsItem from '../components/NewsItem'
import { mount } from 'enzyme';


describe('The NewsItem component: ', () =>{
    it('has a news title', () =>{
        var newsItem = {
            "by" : "svenfaw",
            "descendants" : 0,
            "id" : 19359338,
            "score" : 1,
            "time" : 1552315560,
            "title" : "Forkle – the smallest viable web browser (beta)",
            "type" : "story",
            "url" : "Https://www.radsix.com/"
          }
        const wrapper = mount(
                <NewsItem newsItem={newsItem}/>
        );
        expect(wrapper.containsMatchingElement(
            <span className="title" arial-label={'title - ' + newsItem.title}>{newsItem.title}</span>
        )).toEqual(true)
    })

})   