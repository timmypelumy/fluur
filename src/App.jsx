import Header from "./components/Header";
import Footer from "./components/Footer";
import NotificationCard from "./components/NotificationCard";
import { Fade } from "react-reveal";
import { useState } from "react";
import cn from "classnames";
import Typewriter from "typewriter-effect";
import {
  FaFileContract,
  FaRegMoneyBillAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { RiNftFill, RiStockLine } from "react-icons/ri";
import { MdGeneratingTokens, MdOutlineRealEstateAgent } from "react-icons/md";

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
            Building Infrastructure for <WordScripter />
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

        <div className="mt-8 mb-16 w-full space-y-16 ">
          <h2 className="text-white text-3xl  md:text-4xl  lg:text-5xl font-bold text-center ">
            What is Fluur?
          </h2>

          <div className="mt-6 flex flex-col justify-center items-center px-8">
            <p className="text-white max-w-5xl text-lg  md:text-xl  lg:text-2xl font-normal text-center lg:text-center ">
              Fluur is a web3 tech startup that focuses on building top notch
              infrastructures for other web 3 projects and tech startups. We are
              a development and marketing firm that offers end to end solutions
              projects, startups and organizations. We offer unique white label
              services and solutions tailored to meet our clients projects and
              business needs. We have a dedicated team of Developers ,
              Designers, Project managers, content writers, social media
              managers, researchers, etc to help manage, develop and build in
              demand solutions for our clients.
            </p>
          </div>

          <h2 className="text-white text-3xl  md:text-4xl  lg:text-5xl font-bold text-center ">
            Our Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2  justify-items-center justify-between items-center gap-y-16 lg:gap-y-32 gap-x-10 py-8   text-white/70  mt-16 px-8 ">
            <div className="flex flex-col  justify-center items-start lg:items-center">
              <div className="mb-8 ml-4">
                <FaFileContract className="text-7xl 2xl:text-8xl c-text bi-rocket-takeoff"></FaFileContract>
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                {" "}
                Smart Contract Development
              </h1>

              <Fade bottom exit>
                <p className="py-2 text-base text-left lg:text-center">
                  We write and deploy your smart contract to suit your business
                  goals and objectives.
                </p>
              </Fade>
            </div>
            <div className="flex flex-col  justify-center items-start lg:items-center">
              {" "}
              <div className="mb-8 ml-4">
                <RiNftFill className="text-7xl 2xl:text-8xl c-text bi-sign-intersection-y"></RiNftFill>
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                {" "}
                NFT Development
              </h1>
              <Fade bottom exit>
                <p className="py-2 text-base text-left lg:text-center">
                  We will develop your NFT marketplace and Launchpad making it
                  easy for you to do business and seamlessly make money.
                </p>
              </Fade>
            </div>
            <div className="flex flex-col  justify-center items-start lg:items-center">
              {" "}
              <div className="mb-8 ml-4">
                <MdGeneratingTokens className="text-7xl 2xl:text-8xl c-text bi-building-up"></MdGeneratingTokens>
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                Token and NFT Developement
              </h1>
              <Fade bottom exit>
                <p className="py-2 text-base text-left lg:text-center">
                  We will develop your tokens and NFTs for your project and make
                  it easy for you to raise funds from investors.
                </p>
              </Fade>
            </div>

            <div className="flex flex-col  justify-center items-start lg:items-center">
              {" "}
              <div className="mb-8 ml-4">
                <FaRegMoneyBillAlt className="text-7xl 2xl:text-8xl c-text bi-building-up"></FaRegMoneyBillAlt>
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                Defi Infrastrcutures
              </h1>
              <Fade bottom exit>
                <p className="py-2 text-base text-left lg:text-center">
                  We build safe, secure and scalable Defi infrastructure on
                  multiple blockchains in the web3 space
                </p>
              </Fade>
            </div>

            <div className="flex flex-col  justify-center items-start lg:items-center">
              {" "}
              <div className="mb-8 ml-4">
                <RiStockLine className="text-7xl 2xl:text-8xl c-text bi-building-up"></RiStockLine>
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                ICO/IEO Development
              </h1>
              <Fade bottom exit>
                <p className="py-2 text-base text-left lg:text-center">
                  Work with our team of experts to build and launch your Token
                  sale successfully.
                </p>
              </Fade>
            </div>

            <div className="flex flex-col  justify-center items-start lg:items-center">
              {" "}
              <div className="mb-8 ml-4">
                <MdOutlineRealEstateAgent className="text-7xl 2xl:text-8xl c-text bi-building-up"></MdOutlineRealEstateAgent>
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                Real Estate Tokenization
              </h1>
              <Fade bottom exit>
                <p className="py-2 text-base text-left lg:text-center">
                  We will work with you comprehensively to easily mint and sell
                  your Real Estate assets globally as onchain assets.
                </p>
              </Fade>
            </div>

            <div className="flex flex-col  justify-center items-start lg:items-center">
              {" "}
              <div className="mb-8 ml-4">
                <FaProjectDiagram className="text-7xl 2xl:text-8xl c-text bi-building-up"></FaProjectDiagram>
              </div>
              <h1 className="font-bold capitalize text-white text-2xl mb-6">
                Project Management
              </h1>
              <Fade bottom exit>
                <p className="py-2 text-base text-left lg:text-center">
                  With our team of experts we can manage your project from
                  ideation to development and Launch.
                </p>
              </Fade>
            </div>
          </div>
        </div>

        {/* Third Box  */}

        <div className="hidden mt-16  flex-col lg:flex-row justify-center lg:justify-between lg:w-[85%] mx-auto pt-12  px-8 lg:px-0">
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
                  <i className="fa-solid fa-sharp fa-money-bill-trend-up c-text text-6xl "></i>
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

function WordScripter() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Web3 Adoption")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Startups")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Web3 Onboarding")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Project Marketing")
          .pauseFor(2000)
          .deleteAll()
          .start();
      }}
      options={{
        autoStart: true,
        loop: true,
      }}
    />
  );
}
