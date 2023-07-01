import './App.css';

import { Sidebar, Allroutes } from "./components";

function App() {
  return (
    <div className=" h-screen flex md:flex-row flex-col gap-4 ">
      <Sidebar />
      <Allroutes />
    </div>
  );
}

export default App;
