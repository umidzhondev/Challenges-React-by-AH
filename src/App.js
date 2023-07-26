import React from "react";
import PlayerModal from "./components/PlayerModal";

class App extends React.Component {
  state = {
    players: [],
    modalVisibility: false,
    currentData: "",

  };

  componentDidMount() {
    const players = [
      {
        firstName: "Mbappe",
        age: 23,
        club: "PSJ",
        value: 160,
      },
      {
        firstName: "Sallah",
        age: 28,
        club: "Liverpool",
        value: 100,
      },
      {
        firstName: "Lukaku",
        age: 29,
        club: "Chelsea",
        value: 100,
      },
      {
        firstName: "Neymar",
        age: 28,
        club: "PSJ",
        value: 90,
      },
    ];

    this.setState({
      players: players,
    });
  }

  removePlayer = (index) => {
    const players = this.state.players;
    players.splice(index, 1);
    this.setState({
      players,
    });
  };

  openModal = () => {
    this.setState({
      modalVisibility: true,
    });
  };
  hideModal = () => {
    this.setState({
      modalVisibility: false,
    });
  };


  changeCurrentData = (type, isInc) => {
    const newCurrentData = this.state.currentData
      ? this.state.currentData
      : { firstName: "None", age: 0, club: "none", value: 0 };

      if(type === "age"){
        if(isInc){
          newCurrentData.age++
        }else if(newCurrentData.age < 1){
          newCurrentData.age = 0
        }
        else{
          newCurrentData.age--;
        }
      }
      
      if(type === "value"){
        if(isInc){
          newCurrentData.value++
        }else if(newCurrentData.value < 1){
          newCurrentData.value = 0
        }
        else{
          newCurrentData.value--;
        }
      }

      this.setState({
        currentData: newCurrentData
      })
  };

  saveChanges = () => {
    const {players,currentData} = this.state;
    players.push(currentData);
    currentData.firstName = "Player"
    this.setState({
      players,
      modalVisibility:false
    })
  }

  clearCurrentData = () => {
    this.setState({
      currentData: ''
    })
  }

  render() {
    const { players, modalVisibility, currentData } = this.state;
    return (
      <div className="market">
        <div className="container">
          <h1>⚽ TRANSFER market</h1>
          <div className="row">
            <div className="col">
              <button onClick={this.openModal} className="btn btn-primary m-2">
                Add a player
              </button>
              {modalVisibility ? (
                <PlayerModal
                  hideModal={this.hideModal}
                  currentData={currentData}
                  changeCurrentData={this.changeCurrentData}
                  saveChanges={this.saveChanges}
                  clearCurrentData={this.clearCurrentData}
                />
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-sm table-hover">
                <thead className="thead-light">
                  <tr>
                    <th>№</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Club</th>
                    <th>Market Value</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstName}</td>
                        <td>{item.age}</td>
                        <td>{item.club}</td>
                        <td>
                          <span className="badge bg-primary">
                            💰${item.value}.00m
                          </span>
                        </td>
                        <td>
                          <button
                            onClick={() => this.removePlayer(index)}
                            className="btn btn-danger btn-sm"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
