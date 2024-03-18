import React, { Component } from 'react'

export class NewsItems extends Component {
    

  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem"}}>
        <img src={imageUrl?imageUrl:"https://media.istockphoto.com/id/1193558441/vector/breaking-news-banner-template-breaking-news-background-for-screensaver-lower-third-red-and.jpg?s=612x612&w=0&k=20&c=ycErMi8WwaM4vicwaCTGTxamSJpq271CdcXGqBTKpPw="} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More!</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
