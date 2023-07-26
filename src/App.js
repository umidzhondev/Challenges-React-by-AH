import React, { Component } from "react";
import User from "./components/User";

class App extends Component {
  state = {
    users: [],
    name: "",
    model: "",
    number: "",
  };

  componentDidMount() {
    const users = [
      {
        name: "Karabaev.U",
        model: "Lexux",
        number: "0657",
      },
      {
        name: "Fayzullaev.N",
        model: "Tayota",
        number: "4519",
      },
      {
        name: "Rejabaliev.U",
        model: "BMW",
        number: "0205",
      },
    ];
    this.setState({ users: users });
  }

  deleteUser = (index) => {
    let newUsers = this.state.users;
    newUsers.splice(index, 1);
    this.setState({ users: newUsers });
  };

  addUser = () => {
    const {name ,model,number,users} = this.state;
    let newUser = {
      name,
      model,
      number
    }
    users.push(newUser);
    this.setState({
      users,
      name: "",
      model: "",
      number: "",
    })

  };

  handleInput = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value
    });
  }



  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <div className="radar m-4">
          <h1 className="text-center mb-5">Radar </h1>

          <h2 className="text-left mb-4">Yangi Qo'shish:</h2>
          <div className="row radar__header d-flex align-items-end">
            <div className="col-3">
              <label className="mb-2 fs-5" htmlFor="name">
                Ism va familiyasi:
              </label>
              <input
                value={this.state.name}
                onChange={this.handleInput}
                type="text"
                className="form-control"
                name="name"
                id="name"
              />
            </div>
            <div className="col-3">
              <label className="mb-2 fs-5" htmlFor="model">
                Modeli:
              </label>
              <input
                value={this.state.model}
                onChange={this.handleInput}
                type="text"
                className="form-control"
                name="model"
                id="model"
              />
            </div>
            <div className="col-3">
              <label className="mb-2 fs-5" htmlFor="number">
                Raqami:
              </label>
              <input
                value={this.state.number}
                onChange={this.handleInput}
                type="text"
                className="form-control"
                name="number"
                id="number"
              />
            </div>
            <div className="col-3">
              <button onClick={this.addUser} className="btn btn-primary">
                Qo'shish
              </button>
            </div>
          </div>

          <div className="row radar__body">
            <table className="table table-hover table-striped mt-5">
              <thead className="table-dark">
                <tr>
                  <th>№</th>
                  <th>Ism va familiyasi</th>
                  <th>Modeli</th>
                  <th>Raqami</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                  const { name, model, number } = user;
                  return (
                    <User
                      key={index}
                      listNumber={index}
                      name={name}
                      model={model}
                      number={number}
                      deleteUser={this.deleteUser}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
