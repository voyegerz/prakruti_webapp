import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import ChatBody from './ChatBody/ChatBody';

function App() {
  document.getElementById("root").requestFullscreen({ navigationUI: "hide" });
  return (
    <div className="App">
      <Sidebar/>
      <Header/>
      <ChatBody/>
    </div>
  );
}

export default App;
