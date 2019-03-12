import React from 'react'

import * as Formater from '../utils/formater'

import PropTypes from 'prop-types';

const NewsItem = ({ newsItem, openCommentsModal }) => {

    const createCommentsLink = newsItem => {
        if (newsItem.kids) {
            return (
                <a href="#/" onClick={() => {openCommentsModal(newsItem)}}>
                    {newsItem.kids.length} comments
                </a>
            )
        }

        return ('0 comments');

    }

    return (
        <div className="news-item">
            <div className="item-header">
                {newsItem.url ?
                    <a href={newsItem.url}>
                        <span className="title" arial-label={'title - ' + newsItem.title}>{newsItem.title}</span>
                        <span className="sub-text">
                            <span> ({Formater.formatUrl(newsItem.url)})</span>
                        </span>
                    </a>
                    : <span className="title">{newsItem.title}</span>
                }
            </div>
            <div className="item-footer">
                <div className="sub-text">
                    <span>{newsItem.score} points |</span>
                    <span> Author: {newsItem.by} | </span>
                    <span>{Formater.formatTime(newsItem.time)} |</span>
                </div>
                <div className="sub-text">
                    {createCommentsLink(newsItem)}
                </div>
            </div>

        </div>
    )
}

NewsItem.propTypes = {
    newsItem: PropTypes.object.isRequired,
    openCommentsModal: PropTypes.func.isRequired
};

export default NewsItem
