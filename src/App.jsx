import './App.css';
import React, {useState} from "react";
import ChatWindow from './components/ChatWindow/ChatWindow';
import Header from './components/Header';
import Panel from './components/Panel/Panel';

function App() {
  const [panelVis, togglePanel] = useState(1);
  return (
    <div className={"bg-[#3D3B40] w-screen h-screen overflow-y-hidden"}>
      <Header/>
      <div className={"flex flex-row gap-4 transition-all ease-in-out duration-500 w-full h-[95vh]"}>
        <div className={"h-full mt-4 ml-4"}>
          <button onClick={()=>{togglePanel(!panelVis)}} className={""}>
            <div className={"w-7 h-0.5 bg-white mb-1"}></div>
            <div className={"w-7 h-0.5 bg-white mb-1"}></div>
            <div className={"w-7 h-0.5 bg-white mb-1"}></div>
          </button>
        </div>
        <div className={"h-[95vh]"}>
        {panelVis ? <Panel/> : ''}
        </div>
        <ChatWindow className={"h-[95vh] flex-1"}/>
      </div>
    </div>
  );
  
}

export default App;