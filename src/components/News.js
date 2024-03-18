import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
    static defaultProps = {
        country: 'ca',
        pageSize: 12,
        category: 'general',
    };

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    };

    state = {
        articles: [],
        loading: false,
        page: 1,
        totalResults: 0,
    };

    componentDidMount() {
        this.fetchNews();
    }

    async fetchNews(page = 1) {
        const { country, category, pageSize } = this.props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${page}&pageSize=${pageSize}`;
        this.setState({ loading: true });
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            page,
        });
    }

    handlePrevClick = () => {
        this.fetchNews(this.state.page - 1);
    };

    handleNextClick = () => {
        const { page, totalResults } = this.state;
        const { pageSize } = this.props;
        const nextPage = page + 1;
        if (nextPage <= Math.ceil(totalResults / pageSize)) {
            this.fetchNews(nextPage);
        }
    };

    renderNewsItems() {
        return this.state.articles.map((element) => (
            <div className="col-md-3" key={element.url}>
                <NewsItems
                    title={element.title || ''}
                    description={element.description || ''}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                />
            </div>
        ));
    }

    render() {
        const { loading, page, totalResults } = this.state;

        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '35px 0px' }}>
                    NewsMonkey - Top Headlines
                </h1>
                {loading && <Spinner />}
                <div className="row">{!loading && this.renderNewsItems()}</div>
                <div className="container d-flex justify-content-between">
                    <button
                        disabled={page <= 1}
                        type="button"
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                    >
                        &larr; Previous
                    </button>
                    <button
                        disabled={page + 1 > Math.ceil(totalResults / this.props.pageSize)}
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
