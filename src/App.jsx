import './App.css';
import Calculator from './Component/Calculator';


const App=()=> {

  return (
    <div className="App">

      <header className="App-header">
        <h1 className="App-title">React Calculator</h1>
      </header>
        <div className='calc'>
          <Calculator/>
        </div>
      </div>
      
   
  );
}

export default App;
