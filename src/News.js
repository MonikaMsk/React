import {useEffect, useState} from 'react'
import Headline from './Headline'
import './News.css'


var url = 'http://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=6a4bb4de40ee4089a27a423787170ad1';

function News(){
  const [news, setNews] = useState()

  useEffect(() => {
  fetch(`${url}`)
  .then((response) => response.json())
  .then((result) => {
  console.log(result)
    setNews(result.articles)
 
  })

  }, [])

return (
  <div>
    <Headline mainTitle={"Latest news"}/>


{
     news && (
    <div className="list">
      {news.map((n) => (
      
        <div className="element" key={n.url}>{n.title} 
        <div className="details">{n.description}</div>
      <div>For more info go <a href={n.url}>here</a></div>
        </div>
      
      ))}
  
    </div>
  )
      }
   </div>
)
}

export default News


//