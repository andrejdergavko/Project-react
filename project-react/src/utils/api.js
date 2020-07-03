// const API_BASE_ADDRESS = "http://localhost:3001";
export const API_BASE_ADDRESS = "https://my-server-3214403.herokuapp.com";

export default class Api {
  static loginUser(email, password) {
    const uri = API_BASE_ADDRESS + `/users?email=${email}&password=${password}`;
    return fetch(uri, {
      method: "GET"
    });
  }

  static createUser(user) {
    const uri = API_BASE_ADDRESS + `/users`;
    return fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(user)
    });
  }

  static loadCurrencies() {
    const uri = API_BASE_ADDRESS + `/currencies`;
    return fetch(uri, {
      method: "GET"
    });
  }

  static loadDefaultCategories() {
    const uri = API_BASE_ADDRESS + `/defaultCategories`;
    return fetch(uri, {
      method: "GET"
    });
  }

  static loadCastomCategories(userId) {
    const uri = API_BASE_ADDRESS + `/castomCategories?userId=${userId}`;
    return fetch(uri, {
      method: "GET"
    });
  }

  static loadOperations(from, to, id) {
    const uri =
      API_BASE_ADDRESS +
      `/operations?date_gte=${from}&date_lte=${to}&userId=${id}`;
    return fetch(uri, {
      method: "GET"
    });
  }

  static setOperation(operation) {
    const uri = API_BASE_ADDRESS + `/operations`;
    return fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(operation)
    });
  }

  static deleteOperation(id) {
    const uri = API_BASE_ADDRESS + `/operations/${id}`;
    return fetch(uri, {
      method: "DELETE"
    });
  }
}
