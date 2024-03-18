import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    console.log("Hello I am a constructor from News component");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 12,
    };
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url =
      `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc&pageSize=${this.state.pageSize}` +
      `&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    let url =
    `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc&pageSize=${this.state.pageSize}` +
    `&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles,
    });
  };

  // called after the render method
  async componentDidMount() {
    // let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc"
    let url =
      "https://newsapi.org/v2/everything?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc&pageSize=12&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h1> NewsWave - Top Tech Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col md-4" key={element.url}>
                {/* <NewsItems title={(element.title?element.title:"").slice(0, 45)} description={(element.description?element.description:"").slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                <NewsItems
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
          ;
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
