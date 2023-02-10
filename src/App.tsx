import { Tweet } from './components/Tweet'
import './styles/layout.css'
import tweetLogo from './assets/tweetLogo.svg'
export function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={tweetLogo} alt="Logo" />
        <nav className="mainNavigation">
          <a href="">Home</a>
          <a href="">Explore</a>
          <a href="">Notifications</a>
          <a href="">Bookmarks</a>
          <a href="">Lists</a>
          <a href="">Profile</a>
          <a href="">More</a>
        </nav>
        <button className="newTweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">content</div>
    </div>
  )
}
