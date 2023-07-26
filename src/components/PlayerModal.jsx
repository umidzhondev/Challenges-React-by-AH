import React from "react";

class PlayerModal extends React.Component {
  state = {};

  cancelBtn = () => {
    this.props.hideModal();
  };

  changeCurrentData(type,isInc){
    this.props.changeCurrentData(type,isInc);
  }

  saveChanges= () => {
    this.props.saveChanges();
    this.props.clearCurrentData();
  }

  componentWillUnmount(){
    this.props.clearCurrentData();
  }

  render() {
    const {currentData} = this.props;
    return (
      <div className="card">
        <div className="card-header">Add Player Modal</div>
        <div className="card-body">
          <div className="row text-center">
            <div className="col-5">
              <h5>Player's age:</h5>
              <div className="btn-group">
                <button className="btn btn-secondary" onClick={()=>this.changeCurrentData("age",false)}> - </button>
                <button className="btn">{currentData?currentData.age: 0}</button>
                <button className="btn btn-info" onClick={()=>this.changeCurrentData("age",true)}>+</button>
              </div>
            </div>

            <div className="col-2 ">
              <img className="img-fluid" src="https://images.keepersport.net/eyJidWNrZXQiOiJrZWVwZXJzcG9ydC1jdXN0b20tcHJvZHVjdC1pbWFnZXMiLCJrZXkiOiJuaWtlXC9FVFM4OTQwODdfNjU4XC9uaWtlLXN0cmlwZWQtZGl2aXNpb24taWlpLXRyaWtvdC1sYW5nYXJtLWY2NTgtODk0MDg3LWZ1c3NiYWxsLXRlYW1zcG9ydC10ZXh0aWwtdHJpa290cy1hdXNydWVzdHVuZy1tYW5uc2NoYWZ0LnBuZyIsImVkaXRzIjpbXX0=" alt="" />
            </div>

            <div className="col-5">
              <h5>Player's value:</h5>
              <div className="btn-group">
                <button className="btn btn-secondary"onClick={()=>this.changeCurrentData("value",false)}> - </button>
                <button className="btn btn-">💰{currentData?currentData.value: 0}</button>
                <button className="btn btn-info"onClick={()=>this.changeCurrentData("value",true)}>+</button>
              </div>
            </div>
      
          </div>
        </div>
        <div className="card-footer">
          <button onClick={this.cancelBtn} className="btn btn-warning m-1">
            Cancel
          </button>
          <button className="btn btn-success m-1" onClick={this.saveChanges}>Save changes</button>
        </div>
      </div>
    );
  }
}

export default PlayerModal;
