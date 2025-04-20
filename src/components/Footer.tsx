import { resourcesLinks, communityLinks, platformLinks } from "../constants"

const Footer = () => {
  return (
      <footer className="mt-20 border-t py-10 border-neutral-700">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                  <h3 className="text-md font-semibold mb-4">Resources</h3>

                  <ul className="space-y-2">
                      {
                          resourcesLinks.map((resource, index) => (
                              <li key={index}>
                                  <a href={resource.href} className="text-neutral-300 hover:text-white">{resource.text}</a>
                              </li>
                          ))
                      }
                  </ul>
              </div>

              {/* platforms */}

               <div>
                  <h3 className="text-md font-semibold mb-4">Platform</h3>

                  <ul className="space-y-2">
                      {
                          platformLinks.map((platform, index) => (
                              <li key={index}>
                                  <a href={platform.href} className="text-neutral-300 hover:text-white">{platform.text}</a>
                              </li>
                          ))
                      }
                  </ul>
              </div>


              {/* community */}


               <div>
                  <h3 className="text-md font-semibold mb-4">Community</h3>

                  <ul className="space-y-2">
                      {
                          communityLinks.map((community, index) => (
                              <li key={index}>
                                  <a href={community.href} className="text-neutral-300 hover:text-white">{community.text}</a>
                              </li>
                          ))
                      }
                  </ul>
              </div>

          </div>

          <p className="mt-10 text-center text-sm text-neutral-600 border-t     border-neutral-700 tracking-wider font-normal py-4">
              &copy; Built with ❤️ by
              <a href="https://github.com/maziidev" >
              Godswill Nathaniel (maziidev)
              </a>
          </p>
    </footer>
  )
}

export default Footer