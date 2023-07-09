import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationCard from "./components/NotificationCard";
import { Fade } from "react-reveal";
import { useState } from "react";
import cn from "classnames";

export default function Home() {
  const [showComingSoon, setShow] = useState(false);
  const [choice, setChoice] = useState(0);

  function choose(n) {
    setChoice(n);
  }

  function handleLaunchpadClick(e) {
    setShow(true);
  }

  function handleCloseClick(e) {
    setShow(false);
  }

  return (
    <div className="bg-black w-full">
      <main
        style={{ fontFamily: "Space Mono" }}
        className="bg-black min-h-screen w-full"
      >
        <Header />

        <NotificationCard
          successText="Notify Me"
          sMsg="Our launchpad is coming soon!"
          successIcon="bi-rocket"
          successCallback={handleCloseClick}
          show={showComingSoon}
        />

        <div className="min-h-screen pb-16 flex flex-col justify-center items-center lg:max-w-5xl  mx-auto w-full bg-black ">
          <h1 className="text-3xl  leading-10 lg:text-5xl xl:text-6xl 2xl:text-7xl p py-12 px-8 lg:px-16 font-bold text-center text-white">
            {" "}
            Building Infrastructure for Web3 Adoption
          </h1>

          <h2 className="c-text  text-lg w-[90%] mx-auto text-center md:text-2xl lg:text-3xl">
            Using NFTs to Scale Web3 adoption
          </h2>

          {/* Buttons  */}
          <div className="mt-16 space-y-6">
            <Fade bottom cascade>
              <button className="block  w-full group hover:border-[#5D1DE9]  transition-colors duration-200  rounded-3xl border border-white  px-12 font-bold capitalize py-2 text-base lg:text-lg">
                <span className="text-white group-hover:c-text  ">
                  {" "}
                  Read our litepaper{" "}
                </span>
              </button>

              <button
                onClick={handleLaunchpadClick}
                className="block  w-full  hover:border-[#5D1DE9] group transition-colors duration-200  rounded-3xl border border-white  px-12 font-bold capitalize py-2 text-base lg:text-lg"
              >
                <span className="text-white group-hover:c-text  ">
                  Apply for launchpad
                </span>{" "}
              </button>
            </Fade>
          </div>
        </div>

        {/* Second box  */}

        <div className="mt-8 w-full ">
          <h2 className="text-white text-3xl  md:text-4xl  lg:text-6xl font-bold text-center ">
            What is Fluur?
          </h2>

          <div className="flex flex-col justify-center space-y-16 lg:space-y-0 lg:flex-row lg:justify-around items-center py-8 lg:w-[85%] mx-auto text-white/70 lg:space-x-20 mt-16 px-8 lg:px-0">
            <div>
              <div className="mb-8 ml-4">
                <i className="text-7xl 2xl:text-8xl c-text bi-rocket-takeoff"></i>
                {/* <img
                  src="/assets/icons/rocket_launch_FILL0_wght100_GRAD0_opsz48.svg"
                  alt="launchpad"
                  width="100"
                  height="100"
                /> */}
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                {" "}
                NFT Launchpad
              </h1>

              <Fade bottom exit>
                <p className="py-2 text-base">
                  A Launchpad, built specifically to onboard quality projects
                  into web3, eliminate rugs and bad actors, permissionless for
                  creators & projects to launch and open for the community to
                  safely Invest in these projects at their early stages.
                </p>
              </Fade>
            </div>
            <div>
              <div className="mb-8 ml-4">
                <i className="text-7xl 2xl:text-8xl c-text bi-sign-intersection-y"></i>

                {/* <img
                  src="/assets/icons/handshake_FILL0_wght100_GRAD0_opsz48.svg"
                  alt="launchpad"
                  width="100"
                  height="100"
                /> */}
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                {" "}
                Marketing & Partnership
              </h1>

              <Fade bottom exit>
                <p className="py-2 text-base">
                  We will partner with global brands and leaders, to make
                  available the most promising NFT collections, ranging from
                  white-glove partnerships to totally new ideas, We want to hear
                  your bright ideas.
                </p>
              </Fade>
            </div>
            <div>
              <div className="mb-8 ml-4">
                <i className="text-7xl 2xl:text-8xl c-text bi-building-up"></i>

                {/* <img
                  src="/assets/icons/component_exchange_FILL1_wght100_GRAD0_opsz48.svg"
                  alt="launchpad"
                  width="100"
                  height="100"
                /> */}
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                Project Incubation{" "}
              </h1>

              <Fade bottom exit>
                <p className="py-2 text-base">
                  We will partner with Promising projects with good technology
                  and utility, onboard them, Invest and also give them access to
                  potential investors and project Advisors making it easier to
                  fulfill their objectives.
                </p>
              </Fade>
            </div>
          </div>
        </div>

        {/* Third Box  */}

        <div className="mt-16  flex-col lg:flex-row justify-center lg:justify-between lg:w-[85%] mx-auto pt-12 flex px-8 lg:px-0">
          <div className="lg:w-[50%]">
            <h2 className="text-white text-3xl  md:text-4xl  xl:text-5xl font-bold text-center lg:text-left ">
              Fluur:Defuture
            </h2>

            {/* <div className="mt-16 space-y-12"> */}
            <div className="mt-8 lg:mt-16 space-x-6 lg:space-x-0 lg:space-y-12  flex lg:flex-col flex-row overflow-x-scroll  lg:overflow-x-auto pb-8">
              <div
                onClick={() => choose(0)}
                className={
                  "min-w-[80%]   text-left lg:text-left py-4 rounded-3xl " +
                  cn({
                    " lg:opacity-40 ": choice !== 0,
                  })
                }
              >
                <div className="self-stretch w-[90%] flex flex-row justify-center items-center min-h-[100px] lg:hidden my-8 lg:w-[40%]">
                  <i className="fa-brands fa-hive c-text text-7xl "></i>
                </div>

                <h3 className="font-bold  capitalize text-white text-lg lg:text-2xl mb-6 2xl:text-3xl">
                  {" "}
                  White label services
                </h3>

                <p className="py-2 text-white/70 text-base">
                  Ambitious builders ready to do more with the platform have the
                  option to partner with us by using our tech expertise to build
                  and power their own marketplace, mint buttons and other
                  required infrastructures.
                </p>
              </div>

              <div
                onClick={() => choose(1)}
                className={
                  "min-w-[80%]   text-left lg:text-left py-4 rounded-3xl " +
                  cn({
                    " lg:opacity-40 ": choice !== 1,
                  })
                }
              >
                <div className="self-stretch w-[90%] flex flex-row justify-center items-center min-h-[100px] lg:hidden my-8 lg:w-[40%]">
                  {" "}
                  <i className="fa-solid fa-sharp fa-certificate c-text text-7xl "></i>
                </div>
                <h3 className="font-bold 2xl:text-3xl capitalize text-white text-lg lg:text-2xl mb-6">
                  {" "}
                  Whitelist services
                </h3>

                <p className="py-2 text-white/70 text-base">
                  A whitelist feature that reduces the stress of selecting
                  winners to mint from your public mint, making it easier and
                  seamless to create an allowlist for NFT projects.
                </p>
              </div>

              <div
                onClick={() => choose(2)}
                className={
                  "min-w-[80%]   text-left lg:text-left py-4 rounded-3xl " +
                  cn({
                    " lg:opacity-40 ": choice !== 2,
                  })
                }
              >
                <div className="self-stretch w-[90%] flex flex-row justify-center items-center min-h-[100px] lg:hidden my-8 lg:w-[40%]">
                  {" "}
                  <i className="fa-solid fa-sharp fa-money-bill-trend-up c-text text-7xl "></i>
                </div>
                <h3 className="font-bold 2xl:text-3xl capitalize text-white text-lg lg:text-2xl mb-6">
                  {" "}
                  Secondary Market
                </h3>

                <p className="py-2 text-white/70 text-base">
                  Going forward, we plan to expand our services to accommodate
                  the buy and sale of NFTs alongside the launchpad, therefore, a
                  full-fledged NFT marketplace will be the end goal of Fluur.
                </p>
              </div>
            </div>
          </div>

          <div className="self-center hidden lg:block  mt-12  lg:w-[40%]">
            {/* Icons  */}{" "}
            {choice === 0 && (
              <i className="fa-solid fa-sharp fa-money-bill-trend-up c-text text-[20rem] 2xl:text-[30rem] "></i>
            )}
            {choice === 1 && (
              <i className="fa-brands fa-hive c-text text-[20rem] 2xl:text-[30rem]  hidden"></i>
            )}
            {choice === 2 && (
              <i className="fa-solid fa-sharp fa-certificate c-text text-[20rem] 2xl:text-[30rem]  hidden"></i>
            )}
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
