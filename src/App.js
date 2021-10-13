import React, { useState } from "react";
import Menubar from "./hoc/Menu/Menubar";
import Page from "./hoc/Page/Page";

function App() {
  const [state, setState] = useState({
    page: 0,
  });
  const showPage = (no) => {
    setState({ page: no });
  };
  return (
    <div>
      <Menubar showPage={showPage} />
      <Page page={state.page} />
    </div>
  );
}

export default App;

//semantic ui / css 설치
