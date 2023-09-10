import { Link } from '../components/Link'
import React from 'react';
import { SECTIONS } from '../common/constants';
import logo from '../assets/logo.png'

export const Header = () => {


  return (
    <div>
      <img src={logo} alt="Home" href="/" />
      <nav>
        {SECTIONS.map(({title, url}) => {
          return (
            <Link key={url} url={url} label={title} />
          )
        })}
      </nav>
    </div>
  );
}