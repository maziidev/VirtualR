import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from '../constants/index';

const Price = () => {
  return (
      <section className="mt-20" id="pricing">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>

          <div className="flex flex-wrap">
              {
                  pricingOptions.map((pric, index) => (
                      <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                          <div className="p-10 border border-neutral-700 rounded-xl">
                              <p className="text-4xl mb-8">{pric.title}
                                  {
                                      pric.title === "Pro" &&
                                      <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-xl mb-4 ml-2 capitalize">
                                              {" "}(most popular)
                                  </span>}
                              </p>

                              <p className="mb-8">
                                  <span className="text-5xl mt-6 mr-2">{pric.price}</span>
                                  <span className="text-neutral-400 tracking-tight">/Month</span>
                              </p>

                              <ul>
                                  {pric.features.map((feat, index) => (
                                      <li key={index} className="mt-8 flex items-center">
                                          <CheckCircle2 />
                                          <span className="ml-2">
                                              {feat}
                                          </span>
                                      </li>
                                  ))}
                              </ul>

                              <a href="#" className="inline-flex justify-center text-center mt-20 items-center w-full h-12 p-5 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                                  Subscribe
                              </a>
                          </div>
                      </div>
                  ))
              }
          </div>
</section>
  )
}

export default Price