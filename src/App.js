import './App.css';
import ChatWindow from './components/ChatWindow/ChatWindow';
import Header from './components/Header';
import Panel from './components/Panel/Panel';

function App() {
  return (
    <div>
      <Header/>
      <Panel/>
      <ChatWindow/>
    </div>
  );
}

export default App;
