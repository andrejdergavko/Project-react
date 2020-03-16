import React from "react";
import { withRouter } from "react-router-dom";

import "./AddOperationForm.scss";

function AddOperationForm(props) {
  const {
    categories,
    history: { push },
    match: {
      params: { categoryId }
    }
  } = props;

  const category = categories.find(category => category.id === categoryId);

  return (
    <div className="addOperationForm">
      <div className="addOperationForm__wrapper info-card">
        <div
          className="addOperationForm__header"
          style={{ backgroundColor: category.color }}
        >
          {category.title}
        </div>
        <form className="addOperationForm__form">
          <label className="addOperationForm__label" htmlFor="sum">
            Сумма
          </label>
          <input className="addOperationForm__input" type="number" name="sum" />
          <div className="addOperationForm__cyrrency">BYR</div>
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
