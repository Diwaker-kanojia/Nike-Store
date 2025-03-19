import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="bg-theme pt-7 pb-5 ">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5 ">
            {titles.map((item, index) => (
              <div className="grid items-center" key={index}>
                <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                  {item.title}
                </h1>
              </div>
            ))}
            {links.map((link, index) => (
              <ul className="grid items-center gap-1 " key={index}>
                {link.map((item, index) => (
                  <li className="text-sm sm:text-xs cursor-pointer hover:translate-x-1 transition-all duration-500" key={index}>
                    {item.link}
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Reserved Rights 2025{" "}
              <span className="font-semibold">@Diwaker_17</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
