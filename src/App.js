import React, { useState } from "react";
import Header from "./components/header/Header";

const App = () => {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <Header nav={nav} setNav={setNav} />
    </div>
  );
};

export default App;
