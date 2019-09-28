import React from "react";
import EditLead from "./editLead";
import DeleteLead from "./deleteLead";

class Leads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      list: []
    };
  }

  componentDidMount() {
    // const api = "https://jsonplaceholder.typicode.com/users";
    const apiUrl = "http://192.168.99.100:8080/api/leads/";
    fetch(apiUrl)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            list: result
          });
        },
        error => {
          this.setState({ error });
        }
      );
  }

  render() {
    const { error, list } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          <table className="table table-striped mt-2">
            <thead>
              <tr>
                <th>#ID</th>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Location Type</th>
                <th>Country</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {list.map(list => (
                <tr key={list.id}>
                  <td>{list.id}</td>
                  <td>{list.first_name + " " + list.last_name}</td>
                  <td>{list.mobile}</td>
                  <td>{list.email}</td>
                  <td>{list.location_type}</td>
                  <td>{list.location_string}</td>
                  <td>
                    {/* {list.communication} */}
                    <EditLead list={this.state.list} />
                  </td>
                  <td>
                    <DeleteLead list={this.state.list} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Leads;
