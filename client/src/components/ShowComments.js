import React, { Component } from 'react';

import * as Formater from '../utils/formater'

import '../assets/css/modal.css';

import '../assets/css/comments.css';

class ShowComments extends Component {  

  render() {
    var comments = this.props.comments;
    return (
      <div id="comments" className="modal modal-fixed-footer">
        {comments ? 
        <div className="modal-content">
          {comments}
          <h4>{comments.length > 0 ? comments[0].title : ''}</h4>
          <hr />
          <div className="comments-wrapper">
            {comments.map(comment => {
              return (
                <div className="comment-details" key={comment.id}>
                  <span> <span className="bold"> Author: </span> {comment.by} - {Formater.formatTime(comment.time)}</span>
                  <p>{comment.text}</p>
                </div>
              )
            })}
          </div>
        </div> :''}
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn">Close</a>
        </div>
      </div>
    )
  }

}

export default ShowComments;