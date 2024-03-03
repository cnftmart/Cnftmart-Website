import type { NextPage } from "next";
import Footer from "../components/Footer/Footer";
import FAQ from "@/components/Fooldal/FAQ/FAQ";
import Services from "@/components/Fooldal/Services/Services";
import Main from "@/components/Fooldal/Main/Main";
import TYOH from "@/components/Fooldal/TYOH/Tyoh";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Main />
        <Services />
        <TYOH />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Home;
