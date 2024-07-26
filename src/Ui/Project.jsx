import React from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { shop } from "./Assets/images/index";
import { cyberImg } from "./Assets/images/index";
import { marketImg } from "./Assets/images/index";
import ProjectLink from "./ProjectLink";

const Project = () => {
  return (
    <Container id="project" className="py-24">
      <SectionTitle title="Some  Things I Have Build" titleNo="03" />
      <div className="mt-10 flex flex-col items-center justify-center gap-28">
        <div className="flex flex-col lg:flex-row gap-10">
          {/*project1*/}
          <a
            href="https://nextshop.reactbd.com"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img src={shop} alt="shop" className="w-full h-full object-cover" />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          <div className="w-full lg:1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Amazone clone 2.0</h3>
              {/*project2*/}
              {/*project3*/}
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualization personalized Amazone
              website. View your products, Add your account with{" "}
              <span className="text-designColor">
                and then make the purchange using{" "}
              </span>
              stripe
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLink link="http://nextamazon.reactbd.com/" />
          </div>
        </div>
        {/*project2*/}
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <a
            href="https://nextshop.reactbd.com"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={cyberImg}
              alt="cyberImg"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          <div className="w-full lg:1/2 flex flex-col gap-6 lg:justify-between items-end text-right  z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Cyber Secutiry Blog</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md lg:mr-16">
              An Amazon clone website for visualization personalized Amazone
              website. View your products, Add your account with{" "}
              <span className="text-designColor">
                and then make the purchange using{" "}
              </span>
              stripe
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLink link="http://nextamazon.reactbd.com/" />
          </div>
        </div>
        {/*project3*/}
        <div className="flex flex-col lg:flex-row gap-10">
          <a
            href="https://nextshop.reactbd.com"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={marketImg}
              alt="marketimg"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full bg-designColor/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300" />
          </a>
          <div className="w-full lg:1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Feature Project
              </p>
              <h3 className="text-2xl font-bold">Apurbo Shop 2.0</h3>
            </div>
            <p className="bg-textBg text-sm md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualization personalized Amazone
              website. View your products, Add your account with{" "}
              <span className="text-designColor">
                and then make the purchange using{" "}
              </span>
              stripe
            </p>
            <ul className="text-xs md:text-sm tracking-wide flex gap-2 md:gap-5 justify-between text-darkText">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <ProjectLink link="http://nextamazon.reactbd.com/" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Project;
