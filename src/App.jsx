import "./App.css";
import About from "./Ui/About";
import Archive from "./Ui/Archive";
import Banner from "./Ui/Banner";
import Contact from "./Ui/Contact";
import Experience from "./Ui/Experience";
import Header from "./Ui/Header";
import LeftSide from "./Ui/LeftSide";
import Project from "./Ui/Project";
import RightSide from "./Ui/RightSide";
import ScrollBtn from "./Ui/ScrollBtn";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="font-bodyFont min-h-screen bg-primaryColor text-lightText">
      <Header />

      <Banner />
      <About />
      <Experience />
      <Project />
      <Archive />
      <Contact />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftSide />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed right-0 bottom-0"
      >
        <RightSide />
      </motion.div>
      <ScrollBtn />
    </main>
  );
}

export default App;
