import React from 'react'
import { slide as Menu } from 'react-burger-menu'

export default function Nav() {
  return (
    <>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>{' '}
        {/*Takes user to own profile*/}
        <a id="edit" className="menu-item" href="/">
          Edit Profile
        </a>{' '}
        {/* allows user to edit their profile */}
        <a id="chats" className="menu-item" href="/chats"></a>{' '}
        {/* Takes user to their chat screen */}
        <a id="log-out" className="" href=""></a>{' '}
        {/* Takes users to pre-login screen*/}
      </Menu>
    </>
  )
}
