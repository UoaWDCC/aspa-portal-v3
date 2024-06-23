import Link from 'next/link';

import React from 'react'

const NavLinks = () => {
  return (
    <nav>
      <Link href="/home">home</Link>
      <Link  href="/contact">contact</Link>

    </nav>
  )
}

export default NavLinks