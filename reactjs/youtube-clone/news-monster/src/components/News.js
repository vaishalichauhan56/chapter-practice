import React, { Component } from 'react'
import NewsList from './NewsList'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jeff Dunn",
      "title": "The best iPads for 2022: how to pick the best Apple tablet for you",
      "description": "Apple’s iPad lineup is both more interesting and more complicated than it’s been in years. After October’s launch of the 10th-generation iPad and the M2-powered iPad Pro, Apple now sells three tablets in the 11-inch range that pack broadly similar designs but…",
      "url": "https://www.engadget.com/best-ipads-how-to-pick-the-best-apple-tablet-for-you-150054066.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-03/de844380-a47d-11ec-b6be-9dd2ff775c4e",
      "publishedAt": "2022-12-01T15:00:54Z",
      "content": "Apples iPad lineup is both more interesting and more complicated than its been in years. After Octobers launch of the 10th-generation iPad and the M2-powered iPad Pro, Apple now sells three tablets i… [+8379 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Karissa Bell",
      "title": "Elon Musk says he and Tim Cook 'resolved the misunderstanding' about Twitter's iOS app",
      "description": "Elon Musk and Tim Cook have apparently made up following a dustup over the status of Twitter’s iOS app. Musk, who earlier this week, claimed that Apple had “threatened to withhold’ Twitter from the App Store,” said he and Cook had a “good conversation” during…",
      "url": "https://www.engadget.com/elon-musk-says-he-and-tim-cook-resolved-the-misunderstanding-about-twitter-005702715.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/bac63060-3024-11ed-a6b7-80a6381a50f2",
      "publishedAt": "2022-12-01T00:57:02Z",
      "content": "Elon Musk and Tim Cook have apparently made up following a dustup over the status of Twitters iOS app. Musk, who earlier this week, claimed that Apple had threatened to withhold Twitter from the App … [+1160 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Jon Fingas",
      "title": "Google’s best app of 2022 is an AI art generator, which sounds about right",
      "description": "Google is quickly joining Apple in recognizing the top apps of the year. The company has announced the Google Play Best of 2022 awards, and this year's biggest winners clearly reflect the cultural zeitgeist. The best Android app of the year is Wombo's Dream, …",
      "url": "https://www.engadget.com/google-play-store-best-of-2022-app-awards-145230579.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-12/1e53d0d0-7182-11ed-bdee-e1e95b939aaf",
      "publishedAt": "2022-12-01T14:52:30Z",
      "content": "Google is quickly joining Apple in recognizing the top apps of the year. The company has announced the Google Play Best of 2022 awards, and this year's biggest winners clearly reflect the cultural ze… [+1412 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Valentina Palladino",
      "title": "Apple's 12.9-inch Magic Keyboard is $100 off and cheaper than ever",
      "description": "Whether you know someone who just got an iPad Pro or you want to experiment with using the premium tablet as a laptop in the new year, Apple's Magic Keyboard is one of the best typing solutions out there. However, like most first-party Apple accessories, it'l…",
      "url": "https://www.engadget.com/apples-129-inch-magic-keyboard-is-100-off-and-cheaper-than-ever-140024666.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-04/fd7dace0-8283-11ea-bdbd-e2dfef5b65cc",
      "publishedAt": "2022-12-01T14:00:24Z",
      "content": "Whether you know someone who just got an iPad Pro or you want to experiment with using the premium tablet as a laptop in the new year, Apple's Magic Keyboard is one of the best typing solutions out t… [+2282 chars]"
    },
  ]
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2a4744301ea248b39694f956dd9e7218";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    
  }
  render() {
    return (
      <div>
        <div className='container my-5'>
          <div className='row'>

            <h2>This is News Component</h2>
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}> <NewsList title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}
