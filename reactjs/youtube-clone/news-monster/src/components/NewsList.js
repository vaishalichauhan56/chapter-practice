import React, { Component } from 'react'

export default class NewsList extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
            <div className="card-group">
              <div className="card">
                <img src={imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  <a href={newsUrl}>Read Me</a>
                </div>
              </div>
        </div>
    )
  }
}
