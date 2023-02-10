import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle
} from 'phosphor-react'
import '../styles/layout.css'
import tweetLogo from '../assets/tweetLogo.svg'

export function Sidebar() {
  return (
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
  )
}
