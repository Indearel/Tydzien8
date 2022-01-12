import React from "react";
import ReactDOM, { render } from "react-dom";

import "./styles.css";

const Button = React.forwardRef (function(
  { backgroundColor, children, onClick },
  ref
  ) {
  return  ( 
    <button ref={ref} onClick={onClick} style={{ backgroundColor }}>
    {children}
    </button>
  );
});

const IndigoButton = React.forwardRef (({children, onClick }, ref) =>
  <Button backgroundColor = "indigo" onClick={onClick} ref={ref}>
    {children}
  </Button>
)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.firstref = React.createRef();
    this.secondref = React.createRef();
  }
  render() {
    return (
      <div className="App">
        <IndigoButton 
        onClick={() => this.secondref.current.focus()} 
        ref={this.firstref} 
        >
          <h1>Firstu</h1>
        </IndigoButton>
        <Button 
        onClick={() => this.firstref.current.focus()} 
        ref={this.secondref} 
        backgroundColor = "blue" 
        >
          <h1>Secondu</h1>
        </Button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
