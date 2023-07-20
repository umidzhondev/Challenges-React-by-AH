import React from "react";

class App extends React.Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    timeInterval: "",
    startIsDisabled: false,
    intervals: [],
  };

  clickStart = () => {
    this.setState({ startIsDisabled: true });
    let timeInterval = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 100);
    this.setState({ timeInterval });
  };

  clickStop = () => {
    clearInterval(this.state.timeInterval);
    this.setState({ startIsDisabled: false });
  };

  clickInterval = () => {
    const { second, minute, hour, intervals } = this.state;
    intervals.push(`${hour}:${minute}:${second}`);
    this.setState({
      intervals,
    });
  };

  clickClear = () => {
    this.clickStop();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      intervals: [],
      startIsDisabled: false,
    });
    clearInterval(this.state.timeInterval);
  };

  render() {
    const { second, minute, hour, startIsDisabled, intervals } = this.state;

    return (
      <div className="App">
        <div className="container">
          <h1 className="title text-center my-5 fs-1 text-warning fw-bold">
            My Stopwatch
          </h1>
          <div className="stopwatch mx-auto p-2">
            <div className="stopwatch__header">
              <div className="stopwatch__header-item">{hour}</div>
              <span>:</span>
              <div className="stopwatch__header-item">{minute}</div>
              <span>:</span>
              <div className="stopwatch__header-item second">{second}</div>
            </div>
            <div className="stopwatch__body">
              <div className="stopwatch__intervals">
                {intervals.map((item, index) => {
                  return (
                    <div className="stopwatch__interval-item" key={index}>
                      {item}
                    </div>
                  );
                })}
              </div>
              <div className="stopwatch__buttons mt-3 mb-5">
                <button
                  className="btn btn-primary"
                  disabled={startIsDisabled}
                  onClick={this.clickStart}
                >
                  Start
                </button>
                <button
                  className="btn btn-danger"
                  onClick={this.clickStop}
                  disabled={!startIsDisabled}
                >
                  Stop
                </button>
                <button
                  className="btn btn-success"
                  disabled={!startIsDisabled}
                  onClick={this.clickInterval}
                >
                  Interval
                </button>
                <button className="btn btn-dark" onClick={this.clickClear}>
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
