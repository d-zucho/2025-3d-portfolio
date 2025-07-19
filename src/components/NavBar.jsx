import { useEffect, useState } from 'react'
import { navLinks } from '/src/constants/index.js'
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(true)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
        // this is so that the event listener is removed when the component unmounts in order to prevent memory leaks
        // memory leaks mean that the browser keeps the event listener in memory even after the component is unmounted, which can lead to performance issues
      )
  }, [])
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className='inner'>
        <a href='#hero' className='logo'>
          Danny
        </a>

        <nav className='desktop'>
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className='group'>
                <a href={link}>
                  <span>{name}</span>
                  <span className='underline' />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href='#contact' className='contact-btn group'>
          <div className='inner'>
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default NavBar
