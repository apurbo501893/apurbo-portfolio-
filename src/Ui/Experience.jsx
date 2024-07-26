import { useState } from "react";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import WorkCard from "./Assets/WorkCard";

const Experience = () => {
  const [workReactBD, setWorkReactBD] = useState(true);
  const [workAmazon, setWorkAmazon] = useState(false);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);

  const handleReactBD = () => {
    setWorkReactBD(true);
    setWorkAmazon(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
  };
  const handleAmazon = () => {
    setWorkReactBD(false);
    setWorkAmazon(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
  };
  const handleGoogle = () => {
    setWorkReactBD(false);
    setWorkAmazon(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
  };
  const handleApple = () => {
    setWorkReactBD(false);
    setWorkAmazon(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
  };
  const handleSplash = () => {
    setWorkReactBD(false);
    setWorkAmazon(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
  };
  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24 gap-16"
    >
      <SectionTitle title="Where I have worked" titleNo="02. " />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactBD}
            className={`${
              workReactBD
                ? "border-l-designColor text-designColor "
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            ReactBD
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor "
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Amazon
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-designColor text-designColor "
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor "
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-designColor text-designColor "
                : "border-l-hoverColor text-darkText"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`}
          >
            Splash
          </li>
        </ul>
        {workReactBD && (
          <WorkCard
            jobTitle="Engineer"
            jobTag="@ReactBd"
            date="Jan 2023 - present"
            detailsOne="write modern,performant,  maintanable code for a diverse array of client and internal project"
            detailsTwo="Work with a variety of differrent language,platforms, framework,and content management system such as javascript , Typescript,Gatsby,React,Craft,WordPress,prismic, and Netlify"
            detailsThree="Communicate with multidiscipinary teams of Engineers, designer,producer, and clients on a daily basic"
          />
        )}
        {workAmazon && (
          <WorkCard
            jobTag="@Amazon"
            detailsOne="write modern,performant,  maintanable code for a diverse array of client and internal project"
            detailsTwo="Work with a variety of differrent language,platforms, framework,and content management system such as javascript , Typescript,Gatsby,React,Craft,WordPress,prismic, and Netlify"
            detailsThree="Communicate with multidiscipinary teams of Engineers, designer,producer, and clients on a daily basic"
          />
        )}
        {workGoogle && (
          <WorkCard
            jobTag="@Google"
            detailsOne="write modern,performant,  maintanable code for a diverse array of client and internal project"
            detailsTwo="Work with a variety of differrent language,platforms, framework,and content management system such as javascript , Typescript,Gatsby,React,Craft,WordPress,prismic, and Netlify"
            detailsThree="Communicate with multidiscipinary teams of Engineers, designer,producer, and clients on a daily basic"
          />
        )}
        {workApple && (
          <WorkCard
            jobTag="@Apple"
            detailsOne="write modern,performant,  maintanable code for a diverse array of client and internal project"
            detailsTwo="Work with a variety of differrent language,platforms, framework,and content management system such as javascript , Typescript,Gatsby,React,Craft,WordPress,prismic, and Netlify"
            detailsThree="Communicate with multidiscipinary teams of Engineers, designer,producer, and clients on a daily basic"
          />
        )}
        {workSplash && (
          <WorkCard
            jobTag="@Splash"
            detailsOne="write modern,performant,  maintanable code for a diverse array of client and internal project"
            detailsTwo="Work with a variety of differrent language,platforms, framework,and content management system such as javascript , Typescript,Gatsby,React,Craft,WordPress,prismic, and Netlify"
            detailsThree="Communicate with multidiscipinary teams of Engineers, designer,producer, and clients on a daily basic"
          />
        )}
      </div>
    </Container>
  );
};

export default Experience;
