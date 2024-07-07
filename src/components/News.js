import React, { Component } from 'react'
import  Newsitem  from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
      static defaultProps = {
        country: 'in',
        pageSize:8,
        category: 'general'
      }

      static PropoTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
      } 
  
  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state={
        articles:[],
        loading:false,
        page:1
    }
  }

  async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80a004a296774fc78959efd39df33768&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({articles: parsedData.articles, totleResults: parsedData.totleResults, loading:false})
  }

 handlePrevClick = async ()=>{
        console.log("prev")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80a004a296774fc78959efd39df33768&page=${this.state.page -1}&pageSize=$
        {this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
          page:this.state.page -1,
          articles: parsedData.articles
        })
  }

  handleNextClick = async ()=>{
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totleResults/this.props.pageSize))){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=80a004a296774fc78959efd39df33768&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
          page:this.state.page + 1,
          articles: parsedData.articles,
          loading:false 
        })
      
  }
}


  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2 className="text-center text-secondary">Ｎｅｗｓ　－　Ｔｏｐ　Ｈｅａｄｌｉｎｅｓ</h2>
              {this.state.loading && <Spinner/>}
              <divuu className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4"  key={element.url}>
                            <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                       </div>

              })}
                    
              </divuu>

              <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totleResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
              </div>

              <footer className="page-footer font-small blue my-3 bg-body-secondary"> 
              <div className="footer-copyright text-center py-2 fw-bold">© 2023 Rahim Khan: All right reserved.
              </div>
            </footer>
      </div>
    )
  }
}

export default News
