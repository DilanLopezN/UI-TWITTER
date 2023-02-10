import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'
import '../styles/tweet.css'
export function Tweet() {
  return (
    <a href="#" className="tweet">
      <img
        src="https://avatars.githubusercontent.com/u/92648265?v=4"
        alt="imagem de usuario"
      />
      <div className="tweetContent">
        <div className="tweetContentHeader">
          <strong>Dilan lopez</strong>
          <span>@dilanln</span>
        </div>
        <p>
          O React é uma biblioteca front-end JavaScript de código aberto <br />{' '}
          com foco em criar interfaces de usuário em páginas web
        </p>
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
    </a>
  )
}
