import React, { Component } from "react";
import axios from "axios";

class DeleteLead extends Component {
  state = {};
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      // .put("https://jsonplaceholder.typicode.com/users/1", this.state)
      // I'm getting Response When Trying with this API
      .delete("http://192.168.99.100:8080/api/leads/:id", this.state)
      .then(res => {
        console.log(res, "Deleting Lead");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          data-toggle="modal"
          data-target="#deleteLead"
          className="btn btn-danger btn-md fa fa-trash"
        ></button>
        <div className="modal fade" id="deleteLead" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={this.submitHandler}>
                <div className="modal-header">
                  <h5 className="modal-title">Delete Lead </h5>
                </div>
                <div className="modal-body">
                  <h4>Are you sure want to Delete?</h4>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-danger">
                    Delete
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

export default DeleteLead;
