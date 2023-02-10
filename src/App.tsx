import { Sparkle } from 'phosphor-react'
import './styles/layout.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
export function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <main className="timeLine"></main>
        <div className="timeLineHeader">
          Home
          <Sparkle />
        </div>

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

        <div className="separator" />

        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  )
}
