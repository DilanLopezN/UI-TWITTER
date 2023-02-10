import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'
import '../styles/tweet.css'
import { Link } from 'react-router-dom'
interface TweetProps {
  content: string
}
export function Tweet({ content }: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/92648265?v=4"
        alt="imagem de usuario"
      />
      <div className="tweetContent">
        <div className="tweetContentHeader">
          <strong>Dilan lopez</strong>
          <span>@dilanln</span>
        </div>
        <p>{content}</p>
        <div className="tweetContentFooter">
          <button type="submit">
            <ChatCircle />
            20
          </button>
          <button type="submit">
            <ArrowsClockwise />
            Share
          </button>
          <button type="submit">
            <ChatCircle />
            Like
          </button>
        </div>
      </div>
    </Link>
  )
}
