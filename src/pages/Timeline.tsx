import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import '../styles/layout.css'
export function TimeLine() {
  const tweets = ['Tweet Teste 1', 'Tweet Teste 2', 'Tweet Teste 3']
  return (
    <main className="timeLine">
      <Header title="Home" />
      <form className="newTweetForm">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/92648265?v=4"
            alt="imagem do usuario"
          />
          <textarea id="tweet" placeholder=" What's Happening? " />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
