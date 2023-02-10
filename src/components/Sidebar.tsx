import { Link, NavLink } from 'react-router-dom'
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
import '../styles/sidebar.css'
import tweetLogo from '../assets/tweetLogo.svg'

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img className="logo" src={tweetLogo} alt="Logo" />
      <nav className="mainNavigation">
        <NavLink to="/">
          <House weight="fill" />
          Home
        </NavLink>
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
