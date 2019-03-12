import React from 'react'
import NewsItem from '../components/NewsItem'
import PropTypes from 'prop-types';

import '../assets/css/news.css'

const ListNews = ({ news, openCommentsModal }) => {

    return (
        <div className="news">
            {news ? news.map((item, index) =>
                <div className="row" key={index}>
                    <div className="col rcorners1">{item.counter}</div>
                    <div className="col l11 m11 s11">
                        {item !== null ? <NewsItem 
                                            newsItem={item} key={item.id} 
                                            openCommentsModal={openCommentsModal}/> : ''}
                    </div>
                </div>
            ):''}
        </div>
    )

}

ListNews.propTypes = {
    news: PropTypes.array.isRequired,
    openCommentsModal: PropTypes.func.isRequired
};

export default ListNews
