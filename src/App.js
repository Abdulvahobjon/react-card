import React from "react";
import Nuestros from "./component/Nuestros";
import Nosotras from "./component/Nosotras";
import Quality from "./component/Quality";
import Hero from "./component/Hero";
import AppLayout from "./component/Layout/AppLayout";
function App() {
  return (
    <div className=" my-24">
      <AppLayout>
        <Hero/>
        <Nuestros/>
        <Quality/>
        <Nosotras/>
      </AppLayout>
    </div>
  );
}

export default App;
