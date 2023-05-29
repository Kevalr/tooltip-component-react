import Tooltip from "./Tooltip";

function App() {
  return (
    <div className="App">
      <div style={{ "display": "flex", "justify-content": "space-around", "align-items": "center", "width":"50%","height":"100vh", "margin":"auto"}}>
        <Tooltip position="top">
          <button>top</button>
        </Tooltip>
        <Tooltip position="right">
          <button>right</button>
        </Tooltip>
        <Tooltip position="bottom">
          <button>bottom</button>
        </Tooltip>
        <Tooltip position="left">
          <button>left</button>
        </Tooltip>
      </div>
    </div>
  );
}

export default App;
