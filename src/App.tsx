import './styles/layout.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'
export function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
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

          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  )
}
