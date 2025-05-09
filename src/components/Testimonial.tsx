import { testimonials } from "../constants"

const Testimonial = () => {
  return (
      <section id='testimonials' className="mt-20 tracking-wide">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
              What people are saying
          </h2>

          <div className="flex flex-wrap justify-center">
              {
                  testimonials.map((testi, index) => (
                      <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={index}>
                          <div className="bg-neutral-800 rounded-md p-6 text-md border border-neutral-800 font-thin">
                              <p>{testi.text}</p>
                              <div className="flex mt-8 items-center">
                                  <img src={testi.image} alt={testi.user} className="w-12 h-12 mr-6 rounded-full border border-neutral-300" />

                                  <div>
                                      <h6>{testi.user}</h6>
                                      <span className="text-sm italic text-neutral-600 font-normal">{testi.company}</span>
                                  </div>
                              </div>

                          </div>
                      </div>
                  ))
              }
          </div>
    </section>
  )
}

export default Testimonial