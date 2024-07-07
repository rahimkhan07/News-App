import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div className="my-5" style={{marginLeft:"2vh"}}>
            <div className="card" >
            <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"94%", zIndex:"1"}}>{source}</span>
                <img src={!imageUrl?"https://khabaronline24.in/public/user/images/3d-world-news.jpg" :imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{title} </h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">By : {author}, On - {new Date(publishedAt).toGMTString()} </small></p>
                  <a ref="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-secondary">Read more</a>
                </div>
            </div>
            
      </div>
    )
  }
}

export default Newsitem
