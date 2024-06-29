import { Button } from "@chakra-ui/react";
import React from "react";
// import { PageContainer } from "./index";
import style from './Page.module.css'
import useRoutes from "@/Features/Hooks/Routes/Routes";
// import { LogoWhiteX } from "Src/components/Logo";
import { Next_Icon, NextIconX } from "Src/Assets/index";

const Page = ({ handleNext }) => {
  const { handleOnboardingRoute } = useRoutes();

  return (
    // <PageContainer>
    <>
      <header className={style.header}>
        <div className="overlay" />
      </header>

      <div className="text">
        <h1>Lorem ipsum dolor amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button
          onClick={handleNext}
          color={"#fff"}
          background={"#1a1a1a"}
          size={"lg"}
          width={"90%"}
          margin={"0 10%"}
          display={"flex"}
          alignItems={"center"}
          gap={"10px"}
          borderReadius={"16px"}
        >
          Get Started  <NextIconX />
        </Button>
      </div>
      </>
    // </PageContainer>
  );
};

export default Page;