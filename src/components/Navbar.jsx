import { useState, useEffect } from "react"

// import { Link } from "react-scroll"

const Navbar = () => {
  const [navActive, setNavActive] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const toggleNav = () => {
    setNavActive(!navActive)
  }

  const closedMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)

      if (window.innerWidth <= 500) {
        closedMenu()
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [window.innerWidth])

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closedMenu()
    }
  }, [])

  const changeNavColor = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
    // console.log(window.scrollY)
  }
  window.addEventListener("scroll", changeNavColor)
  console.log(navActive)
  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <a className="title" href="/">
        HOME
      </a>
      <div className="menu">
        <ul className="menuItems">
          <li>
            <a href="#skills">ABOUT</a>
          </li>
          <li>
            <a href="#portfolio">PORTFOLIO</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
          {/* <li>
            <a target="_blank" rel="noopener" href={resume}>RESUME</a>
          </li> */}
        </ul>
      </div>
    </nav>
  )

}

export default Navbar
