import React from "react";
import Intro from "../../components/Intro/Intro";
import Intro1 from "../../components/Intro/Intro1";

function Page(props) {
  const displayPage = (no) => {
    switch (no) {
      case 0:
        return <Intro />;
      case 1:
        return <Intro1 />;
      default:
        return <Intro />;
    }
  };
  return <div>{displayPage(props.page)}</div>;
}

export default Page;
