import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Sparkle
} from 'phosphor-react'
import './styles/layout.css'
import tweetLogo from './assets/tweetLogo.svg'
export function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={tweetLogo} alt="Logo" />
        <nav className="mainNavigation">
          <a href="" className="active">
            <House weight="fill" />
            Home
          </a>
          <a href="">
            <Hash />
            Explore
          </a>
          <a href="">
            <Bell />
            Notifications
          </a>
          <a href="">
            <Envelope />
            Messages
          </a>
          <a href="">
            <BookmarkSimple />
            Bookmarks
          </a>
          <a href="">
            <FileText />
            Lists
          </a>
          <a href="">
            <User />
            Profile
          </a>
          <a href="">
            <DotsThreeCircle />
            More
          </a>
        </nav>
        <button className="newTweet" type="button">
          Tweet
        </button>
      </aside>
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
      </div>
    </div>
  )
}
