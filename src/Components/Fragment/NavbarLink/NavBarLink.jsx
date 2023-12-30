import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarLink = ({href, children, ClassProp}) => {
  return (
    <div>
        <Link to={href} className={ClassProp}>{children}</Link>
    </div>
  )
}
