import React, { Component } from "react";
import { connect } from "react-redux";
import "./ShoppingList.scss";

class ShoppingList extends Component {
  render() {
    return (
      <div className={"info-card"}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// function mapStateToProps(store) {
//   return {

//   };
// }

// function mapDispatchToProps(store) {
//   return {

//   };
// }

export default connect()(ShoppingList);
