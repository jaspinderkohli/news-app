import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    console.log("Hello I am a constructor from News component");
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url =
      `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc&pageSize=${this.props.pageSize}` +
      `&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    let url =
    `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc&pageSize=${this.props.pageSize}` +
    `&page=${this.state.page + 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
    });
  };

  // called after the render method
  async componentDidMount() {
    // let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc"
    let url =
      `https://newsapi.org/v2/everything?sources=techcrunch&apiKey=6bd6166654804b34a8fdc039e264fadc` + `&pageSize=` + `${this.props.pageSize}` + `&page=1`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{color: "black"}}> NewsWave - Top Tech Headlines</h1>
        { this.state.loading && <Spinner/> }
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
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
              Math.ceil(this.state.totalResults / this.props.pageSize)
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
