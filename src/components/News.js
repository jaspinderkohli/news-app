import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2> NewsWave - Top Headlines</h2>
        <div className="row">
            <div className="col md-4">
                <NewsItems title="myTitle" description="my description"/>
            </div>
            <div className="col md-4">
                <NewsItems title="myTitle" description="my description"/>
            </div>
            <div className="col md-4">
                <NewsItems title="myTitle" description="my description"/>   
            </div>
        </div>
      </div>
    )
  }
}

export default News
