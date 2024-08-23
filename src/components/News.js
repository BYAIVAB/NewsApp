import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  articles = []

  constructor() {
    super();
    console.log("Hello, I am a constructor from the News component.")
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  // run after render()
  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=93965bf5640a471f8db69fdade876050";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData); // Log the entire response
    console.log(parsedData.articles); // Log the articles array

    // this.setState({ articles: parsedData.articles, loading: true });
    this.setState({
      articles: parsedData.articles.map(article => ({
        ...article,
        urlToImage: article.urlToImage ? article.urlToImage.replace('http:', 'https:') : null
      })),
      loading: false
    });
  }


  render() {
    console.log(this.render);
    return (
      <div>
        <div className="container my-3">
          <h2>Newsapp - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              console.log("Image URL:", element.urlToImage);
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="container d-flex justify-content-between">
          <button type='button' className='btn btn-dark'>&larr; Previous</button>
          <button type='button' className='btn btn-dark'>Next &rarr;</button>
        </div>
        </div>
      </div>
    );
  }
}  
export default News