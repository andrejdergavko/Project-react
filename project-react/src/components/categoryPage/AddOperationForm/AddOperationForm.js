import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import "./AddOperationForm.scss";

function AddOperationForm(props) {
  const [sum, setSum] = useState("");

  const {
    categories,
    currency,
    addOperation,
    history: { push },
    match: {
      params: { categoryId }
    }
  } = props;

  const category = categories.find(category => category.id === categoryId);

  const handleSubmit = event => {
    event.preventDefault();
    addOperation(parseFloat(sum), categoryId);
  };

  return (
    <div className="addOperationForm">
      <div className="addOperationForm__wrapper info-card">
        <div
          className="addOperationForm__header"
          style={{ backgroundColor: category && category.color }}
        >
          {category && category.title}
        </div>
        <form className="addOperationForm__form" onSubmit={handleSubmit}>
          <label className="addOperationForm__label" htmlFor="sum">
            Сумма
          </label>
          <input
            className="addOperationForm__input"
            type="number"
            name="sum"
            value={sum}
            onChange={event => setSum(event.target.value)}
          />
          <div className="addOperationForm__cyrrency">{currency}</div>
          <div className="addOperationForm__button-block">
            <button
              className="addOperationForm__button button"
              onClick={() => push("/")}
            >
              Закрыть
            </button>
            <input
              className="addOperationForm__submit button"
              type="submit"
              value="Сохранить"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(AddOperationForm);
