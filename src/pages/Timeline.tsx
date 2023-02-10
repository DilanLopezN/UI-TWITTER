import { FormEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import '../styles/layout.css'

let newTweet = ''
export function TimeLine() {
  const [tweets, setTweets] = useState(['Tweet test'])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
    setTweets([...tweets, newTweet])
  }
  return (
    <main className="timeLine">
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="newTweetForm">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/92648265?v=4"
            alt="imagem do usuario"
          />
          <textarea
            id="tweet"
            placeholder=" What's Happening? "
            onChange={event => {
              newTweet = event.target.value
            }}
          />
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
