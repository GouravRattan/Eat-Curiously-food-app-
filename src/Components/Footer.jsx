import React from 'react';
import FooterImg from '../assets/Footer.png';
// import FooterImgSmall from '../assets/FooterSmall.png'; // Example small image

const Footer = () => {
  return (
    <>
      <div className='bg-[#fc74b4] md:bg-[#yourMediumScreenColor] lg:bg-[#yourLargeScreenColor] text-teal-950 mb-20'>
        <div className="flex justify-center items-center">
          <img className='h-auto w-full md:w-auto md:h-[yourMdHeight] lg:h-[yourLgHeight]' src={FooterImg} alt="footer-img" />
        </div>
        <footer className="flex flex-col items-center text-center text-surface dark:bg-neutral-700 bg-[#fc74b4] md:bg-[#yourMediumScreenColor] lg:bg-[#yourLargeScreenColor]">
          <div className="container px-6 pt-6">
            <div>
              <form action="">
                <div className="gird-cols-1 grid items-center justify-center gap-80 md:grid-cols-3">
                  <div className="relative md:mb-6">
                    <input
                      type="text"
                      className="peer h-10 bg-white block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInputEmail"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="exampleFormControlInputEmail"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Full name
                    </label>
                  </div>

                  <div className="relative md:mb-6" data-twe-input-wrapper-init>
                    <input
                      type="email"
                      className="peer bg-white block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInputEmail"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="exampleFormControlInputEmail"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Email address
                    </label>
                  </div>

                  <div className="mb-6 md:me-auto">
                    <button
                      type="submit"
                      className="inline-block rounded px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-surface shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:bg-neutral-700 dark:text-white"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className="mb-6 font-rammetto font-bold text-6xl">
              <p>
                FEED ME MORE
              </p>
            </div>

            <div className="mb-6 flex justify-center space-x-2">
              {/* Social media icons */}
            </div>
          </div>

          <div className="w-full bg-black/5 p-4 text-center">
            © 2023 Copyright:
            <a className="font-semibold" href="https://tw-elements.com/">TW Elements</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
