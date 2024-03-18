import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
     articles =  []
    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles : this.articles,
            loading: false
        }
    }

    // called after the render method
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc"
        // let url = "https://newsapi.org/v2/everything?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
      <div className="container my-3">
        <h2> NewsWave - Top Tech Headlines</h2>
        <div className="row">
            {
            this.state.articles.map(
                (element)=>
                {
                    return <div className="col md-4" key={element.url}>
                                {/* <NewsItems title={(element.title?element.title:"").slice(0, 45)} description={(element.description?element.description:"").slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                                <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                           </div>
                }
              )
            };
        </div>
      </div>
    )
  }
}

export default News
