import Logo from "../assets/SVG/fluur-white.svg";

const socials = [
  {
    name: "Twitter",
    icon: "bi-twitter",
  },
  {
    name: "Discord",
    icon: "bi-discord",
  },
  {
    name: "Telegram",
    icon: "bi-telegram",
  },
];

function Footer(props) {
  return (
    <footer className="flex w-full mx-auto pt-12  lg:pt-24 pb-16 flex-col   lg:space-y-0 lg:flex-row justify-center lg:justify-around mt-32 rounded-3xl border-t border-white/20 text-white px-8 lg:px-0 space-y-8">
      <div className="space-y-8 ">
        <div className=" flex-shrink-0 self-center space-y-4 flex lg:block flex-col justify-center w-full items-center">
          <img alt="Logo" src={Logo} width="150" height="50" />
        </div>

        <button className="block mx-auto lg:mx-0  hover:text-[#5D1DE9] hover:border-[#5D1DE9] group text-white transition-colors duration-200  rounded-3xl border border-white/50  px-12 font-bold capitalize py-2 text-xl lg:text-2xl">
          <span className="text-white group-hover:c-text  ">Docs</span>
        </button>

        <p className="text-white/50 hidden lg:block text-sm py-4 text-center lg:text-left mt-6">
          <i className="bi-c-circle"></i> {new Date().getFullYear()} Fluur
          Network. All rights reserved
        </p>
      </div>

      <div className="space-y-8  ">
        <p className="font-bold text-xl text-center lg:text-left lg:text-2xl">
          {" "}
          Get Invovled{" "}
        </p>

        {/* Socials  */}
        <div className="flex flex-row justify-center lg:justify-start space-x-8 lg:space-x-20">
          {socials.map((a, i) => (
            <a key={i} href="/">
              {" "}
              <i
                title={a.name}
                className={
                  " text-3xl lg:text-4xl text-white hover:c-text " + a.icon
                }
              ></i>
            </a>
          ))}
        </div>

        <p className="text-white text-center lg:text-left lowercase text-xl lg:py-4 ">
          <i className="bi-envelope text-3xl  align-middle"></i>{" "}
          <a href="mailto:hello@fluur.io" className="hover:c-text">
            Hello@Fluur.io
          </a>
        </p>

        <p className="text-white/50 lg:hidden text-sm py-4 text-center lg:text-left mt-6">
          <i className="bi-c-circle"></i> {new Date().getFullYear()} Fluur Labs.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
