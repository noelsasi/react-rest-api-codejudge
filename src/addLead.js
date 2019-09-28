import React from "react";
import axios from "axios";

class AddLead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
      location_string: "",
      location_type: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      // .post("https://jsonplaceholder.typicode.com/posts", this.state) I'm getting Response When Trying with this API
      .post("http://192.168.99.100:8080/api/leads/", this.state)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      first_name,
      last_name,
      mobile,
      email,
      location_string,
      location_type
    } = this.state;
    return (
      <div className="col-md-2 mt-5 mb-3">
        <button
          type="button"
          data-toggle="modal"
          data-target="#addLead"
          className="btn btn-primary btn-md btn-block"
        >
          Add Lead
        </button>
        <div className="modal fade" id="addLead" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <form onSubmit={this.submitHandler}>
                <div className="modal-header">
                  <h5 className="modal-title">Add Lead</h5>
                </div>
                <div className="modal-body">
                  <div className="row col-md-12">
                    <div className="form-group col-6">
                      <label className="margin_">First Name</label>
                      <span className="text-danger ml-2">*</span>
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        value={first_name}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-6">
                      <label className="margin_">Last Name</label>
                      <span className="text-danger ml-2">*</span>
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        value={last_name}
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="form-group col-6">
                      <label className="margin_1">Mobile Number</label>
                      <span className="text-danger ml-2">*</span>
                      <input
                        type="tel"
                        name="mobile"
                        className="form-control"
                        value={mobile}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-6">
                      <label className="margin_1">Email Address</label>
                      <span className="text-danger ml-2">*</span>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={this.changeHandler}
                      />
                    </div>
                  </div>
                  <div className="row col-md-12">
                    <div className="form-group col-6">
                      <label className="margin_1">Location Type</label>
                      <span className="text-danger ml-2">*</span>
                      <input
                        type="text"
                        name="location_type"
                        className="form-control"
                        value={location_type}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="form-group col-6">
                      <label className="margin_1">Location String</label>
                      <span className="text-danger ml-2">*</span>
                      <input
                        type="text"
                        name="location_string"
                        className="form-control"
                        value={location_string}
                        onChange={this.changeHandler}
                      />
                    </div>
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
                    Save changes
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

export default AddLead;
