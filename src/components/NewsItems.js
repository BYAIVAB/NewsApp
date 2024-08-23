import React, { Component } from 'react';

export class NewsItems extends Component {

    render() {
        let { title, description, imageurl, newsurl } = this.props;
        console.log('Image URL:', imageurl);
        return (
            <div>
                <div className="my-3">
                    <div className="card" style={{ width: "18rem" }}>
                        <img
                            src={imageurl && imageurl.trim() ? imageurl : "https://newsapi.org/v2/everything?q=tesla&from=2024-07-13&sortBy=publishedAt&apiKey=93965bf5640a471f8db69fdade876050"}
                            className="card-img-top"
                            alt="news"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = "https://ichef.bbci.co.uk/news/1024/branded_news/e97c/live/5f1ad910-557e-11ef-8983-2f675dccb54a.jpg";
                            }}
                        />

                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsurl ? newsurl : "#"} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark" >Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems;
