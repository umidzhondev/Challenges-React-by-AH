import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    count: 0,
  };

  addDeleteReset = (value) => {
    this.setState({ count: value });
  };


  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h1>Counter: {this.state.count}</h1>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-success"
                    onClick={() => this.addDeleteReset(this.state.count + 1)}
                  >
                    Increment
                  </button>
                  <button
                    className="btn btn-primary m-2"
                    onClick={()=> this.addDeleteReset(0)}
                  >
                    Reset
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => this.addDeleteReset(this.state.count - 1)}
                  >
                    Decrement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
