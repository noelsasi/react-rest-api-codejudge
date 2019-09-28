import React, { Component } from "react";
import axios from "axios";

class EditLead extends Component {
  state = {
    communication: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      // .put("https://jsonplaceholder.typicode.com/users/1", this.state)
      // I'm getting Response When Trying with this API
      .put("http://192.168.99.100:8080/api/leads/:id", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { communication } = this.state;
    return (
      <div>
        <button
          type="button"
          data-toggle="modal"
          data-target="#editLead"
          className="btn btn-info btn-md fa fa-pencil"
        ></button>
        <div className="modal fade" id="editLead" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={this.submitHandler}>
                <div className="modal-header">
                  <h5 className="modal-title">Mark Communication </h5>
                </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Communication</label>
                    <span className="text-danger ml-2">*</span>
                    <input
                      type="text"
                      name="communication"
                      className="form-control"
                      value={communication}
                      onChange={this.changeHandler}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-success">
                    Mark Communication
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditLead;
