import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

const ProjectLink = ({ link }) => {
  return (
    <div className="text-2xl flex items-center gap-4">
      <a
        href="https://github.com/apurbo501893"
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <TbBrandGithub />
      </a>
      <a
        href="https://youtu.be/WzMtRfzkP-Q/"
        target="blank"
        className="hover:text-designColor duration-200"
      >
        <AiOutlineYoutube />
      </a>
      <a
        href={link}
        target="blank "
        className="hover:text-designColor duration-200"
      >
        <RxOpenInNewWindow />
      </a>
    </div>
  );
};

export default ProjectLink;
