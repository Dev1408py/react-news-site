import React, { Component} from 'react';
// import {useState } from 'react';

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export default class news extends Component {
    

    constructor(){
        super();
        this.state = {
            loading:true,
            page:1, 
            page_size:10,
            total_res:0,
            articles:[]
        }
    }

    static defaultProps = {
        country:"in",
        category:"general"
    }

    static propTypes = {
        country:PropTypes.string,
        category:PropTypes.string
    }

    async ChangePage(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c52d924f788a43b18db86bda3a187712&page=${this.state.page}&pageSize=${this.state.page_size}`;
            this.setState({loading:true})
            let data = await fetch(url);
            let parsed_data = await data.json();
            console.log(parsed_data);
            this.setState({articles: parsed_data.articles,loading:false});
    }

    async componentDidMount(){
        this.ChangePage();
      }


      
    fetchMoreData = async()=>{
        this.setState({page:this.state.page+1})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c52d924f788a43b18db86bda3a187712&page=${this.state.page}&pageSize=${this.state.page_size}`;
          let data = await fetch(url);
          let parsed_data = await data.json();
          this.setState({
            articles: this.state.articles.concat(parsed_data.articles),
            total_res: parsed_data.totalResults
        })
    }
        
        
  render() {
    return (
        <>
            <h1 className="text-center">Top News!!!</h1>
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.total_res}
          loader={<Spinner/>}
        >
            <div className="container">
            <div className="row my-3">
                {this.state.loading && <Spinner/>}
                {(!this.state.loading) && this.state.articles.map((element,index)=>{
                if(this.state.articles.length!==this.state.total_res){
                return <div className="col-md-3 my-2" key={index} >
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsId={element.url} date_pub={element.publishedAt} author={element.author} source = {element.source.name} />
                    </div>
                }
                return <h1>No more data for now.</h1>
                })}
                
            </div>
          </div>
                </InfiniteScroll>
            
               
                                                                                                                                                                                                          
        </>
    )
  }
}

