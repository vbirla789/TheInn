import React from "react";

const Footer = ({ footerApi: { titles, links } }) => {
  return (
    <footer className="bg-[#7A7A7A] pt-7 pb-5">
      <div className="nike-container text-[#A9AB9D]">
        <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5 md:grid-cols-1">
          {titles.map((val, i) => (
            <div key={i} className="">
              <h1 className="text-4xl lg:text-4xl md:text-4xl uppercase font-normal mb-5">
                {val.title}
              </h1>
            </div>
          ))}
          {links.map((list, i) => (
            <ul key={i} className="grid items-center gap-1">
              {list.map((link, i) => (
                <li key={i} className="text-lg sm:text-lg">
                  {link.link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
