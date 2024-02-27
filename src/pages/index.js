import * as React from "react";
import TopBar from "../components/top-bar";
import HomePage from "./home";

const IndexPage = () => {
  return (
    <>
      <TopBar></TopBar>
      {/* {data.firstName} */}
      <HomePage></HomePage>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
