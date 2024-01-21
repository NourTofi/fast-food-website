import React, { useState } from "react";
import Header from "./components/header/Header";

const App: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <div>
      <Header
        nav={nav}
        setNav={setNav}
      />
    </div>
  );
};

export default App;
