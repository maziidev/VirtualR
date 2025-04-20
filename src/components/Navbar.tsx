import { useState } from "react"
import logo from "../assets/logo.png"
import { navItems } from "../constants"
import { Menu, X } from "lucide-react"



function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [activeLink, setActiveLink] = useState<string>("")

    const handleToggle = (): void => {
        setIsOpen((prev) => !prev)
    }

    const handleMenuClose = (href: string): void => {
        setIsOpen(false)
        setActiveLink(href)
    }
  return (

      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
          <div className="container px-4 mx-auto relative text-sm">
              <div className="flex justify-between items-center">

                  {/* logo */}
                  <div className="flex items-center flex-shrink-0 cursor-pointer">
                      <img src={logo} alt="" className="h-10 w-10 mr-2" />
                      <span className="text-xl tracking-tight">VirtualR</span>
                  </div>

                  {/* links */}

                  <ul className="hidden lg:flex ml-14 space-x-12">
                      {
                          navItems.map((item, index) => (
                              <li key={index}>
                                  <a href={item.href} className={`hover:text-orange-500 transition duration-200 ${activeLink === item?.href ? "text-orange-500 font-bold" : ""}`}>{item.label}</a>
                              </li>
                          ))
                      }
                  </ul>

                  {/* buttons */}
                  <div className="hidden lg:flex justify-center items-center space-x-12">
                      <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                      <a href="#" className="py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md">Create an account</a>
                  </div>

                  {/* mobile menu toggle */}
                  <div className="lg:hidden md:flex flex-col justify-end">
                      <button onClick={handleToggle}>
                          {
                              isOpen ? <X/> : <Menu/>
                          }
                      </button>
                  </div>

              </div>
              {/* mobile navigation */}
              {
                  isOpen && (
                      <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                          <ul>
                              {navItems.map((item, index) => (
                                  <li key={index} className="py-4 uppercase text-center">
                                      <a href={item.href} onClick={() => handleMenuClose(item.href)} className={`hover:text-orange-500 transition duration-200 ${activeLink === item?.href ?"text-orange-500" : ""}`}>
                                          {item.label}
                                      </a>
                                  </li>
                              ))}
                          </ul>

                          <div className="flex flex-col items-center justify-center space-y-6 text-center mt-10">
                              <a href="" className="py-2 px-3 border rounded-md" onClick={() => handleMenuClose("")}>
                                  Sign In

                              </a>
                              <a href="" className="py-2 px-3  rounded-md bg-gradient-to-r from-orange-500 to-orange-800" onClick={() => handleMenuClose("")}>
                                  Create an account
                              </a>
                          </div>
                      </div>
                  )
              }
          </div>
      </nav>
  )
}

export default Navbar