import React, { Component } from 'react';
import ListNews from '../components/ListNews'
import axios from 'axios';
import * as ErrorHandler from '../utils/errorHandler'
import '../assets/css/home.css';
import NavBar from './NavBar';
import ShowComments from '../components/ShowComments';
import Pagination from "react-js-pagination";

import * as Custom from '../utils/custom';

const PAGE_LIMIT = 50;
const API_URL = "https://hacker-news.firebaseio.com/v0";

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            news: [],
            activePage: 1,
            counter: 1,
            comments : []            
        }
        this.filterByCategorie = this.filterByCategorie.bind(this)
        this.onChangePage = this.onChangePage.bind(this);
        this.openCommentsModal = this.openCommentsModal.bind(this);
    }

    openCommentsModal = (newsItem) => {
        this.setState({comments:[]})                
        newsItem.kids.forEach(commentId => {
            Custom.loadNews(API_URL, 'item/'+ commentId)
                .then(result => {   
                    result.data.title = newsItem.title                 
                    const data_comments = [...this.state.comments, result.data] 
                    this.setState({ comments: data_comments})
                })
                .catch(error => {
                    ErrorHandler.handleToasts(error)
                })
        })

        let elementoVisual = Custom.loadVisualComponent("#comments", "M.Modal", '');
        if (elementoVisual != null)
            elementoVisual.open();
    }

    

    getItems = dados => {
        dados.forEach(dado => {
            Custom.loadNews(API_URL, 'item/'+ dado)
                .then(result => {
                    result.data.counter = this.state.counter;
                    const items = [...this.state.news, result.data] 
                    this.setState({ news: items, counter: this.state.counter + 1 })
                })
                .catch(error => {
                    ErrorHandler.handleToasts(error)
                })
        })

    }


    getStories = (categorie) => {
        Custom.loadNews(API_URL, categorie ? categorie : 'newstories')
            .then(res => {
                return this.getItems(res.data.slice(0, PAGE_LIMIT))
            })
            .catch(error => {
                ErrorHandler.handleToasts(error)
            })
    }

    componentDidMount() {
        this.getStories();
    }

    filterByCategorie(categorie){
        this.setState({news: [], activePage: 1, counter:1})
        
        this.getStories(categorie);
    }

    onChangePage(pageNumber) {
        // update state with new page of items
        this.setState({activePage: pageNumber});
    }

    getItens(){
        var itens = []
        itens = [...this.state.news]
        return itens
    }

    render() {
        return (
            <div>
                <NavBar filterByCategorie={this.filterByCategorie}/>
                <div className="home-container">
                    <div className="wrapper-news">
                        <ListNews 
                        //Used to create the pagination
                        news={this.state.news.slice(this.state.activePage * 10 - 10  , this.state.activePage * 10)} 
                        openCommentsModal = {this.openCommentsModal}
                        />
                        <div className="center-align">
                            {/* Show pagination */}
                            <Pagination
                            activePage={this.state.activePage}
                            totalItemsCount={this.state.news.length}
                            onChange={this.onChangePage}
                            />
                        </div>
                    </div>
                </div>
                <ShowComments comments = {this.state.comments} />
            </div>
           
        )
    }
}

export default Home;