import { profileImg1 } from "./Assets/images";
import Container from "./Container";

import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa";

const About = () => {
  const textArray = [
    { title: "JavaScript(ES6+)", link: "https://www.javascript.com/" },
    { title: "React js", link: "https://react.dev/learn" },
    { title: "TypeScript", link: "https://www.typescriptlang.org/" },
    { title: "MongoDB", link: "https://reactbd.com/" },
    { title: "TailwindCSS", link: "https://reactbd.com/" },
    { title: "Node js", link: "https://reactbd.com/" },
    { title: "Next js", link: "https://reactbd.com/" },
    { title: "Express", link: "https://reactbd.com/" },
  ];
  return (
    <Container id="about" className=" p-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About Me" />
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4">
          <p>
            Hello! My Name is Apurbo Tudu and I enjoy creating thing that live
            on the internet. My interest in web development started back in 2023
            when I decided to try editing custom Tumblr themes - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Hello! My Name is Apurbo Tudu and I enjoy creating thing that
            live on the internet. My interest in web development started back in
            2023 when I decided to try editing custom Tumblr themes - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
            <div className="max-w-[450px] text-sm grid grid-cols-2 gap-2 mt-6">
              {textArray.map((item) => (
                <a
                  key={item?.title}
                  href="{item?.link} "
                  className="flex items-center gap-2 hover:text-white/80 duration-200 group"
                >
                  <FaCode className="text-designColor/80 group-hover:text-designColor duration-200" />
                  {item?.title}
                </a>
              ))}
            </div>
          </p>
        </div>

        <div className="w-full lg:w-1/3 h-80 relative group">
          <div className="absolute w-full h-96 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lg:pl-0">
              <img
                src={profileImg1}
                alt="profile"
                className="rounded-lg lg:w-full h-full object-cover"
              />
              <div className="hidden lg:inline-block absolute w-full h-90  bg-designColor/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
            </div>
          </div>
          <div className="hidden lg:inline-flex w-full h-96 border-2 border-designColor rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
        </div>
      </div>
    </Container>
  );
};

export default About;
