import React, { useState, useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./AddOperationForm.scss";

import { validate } from "../../../utils/validation/addOperationFormValidation";

function AddOperationForm(props) {
  const {
    categories,
    currency,
    addOperation,
    history: { push },
    match: {
      params: { categoryId }
    }
  } = props;

  const [sum, setSum] = useState("");
  const [errors, setErrors] = useState([]);
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const category = categories.find(category => category.id === categoryId);

  const handleSubmit = event => {
    event.preventDefault();

    const errorMessages = validate([
      {
        name: "sum",
        value: sum
      }
    ]);
    if (errorMessages.length === 0) {
      addOperation(parseFloat(sum), categoryId);
    } else {
      setErrors([...errorMessages]);
    }
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
        <form
          className="addOperationForm__form"
          onSubmit={handleSubmit}
          novalidate="true"
        >
          <div className="addOperationForm__error-block">
            {errors.map(error => {
              return (
                <div key={error} className="addOperationForm__error">
                  {error}
                </div>
              );
            })}
          </div>
          <label className="addOperationForm__label" htmlFor="sum">
            Сумма
          </label>
          <input
            className="addOperationForm__input"
            type="number"
            name="sum"
            value={sum}
            onChange={event => setSum(event.target.value)}
            ref={inputEl}
          />
          <div className="addOperationForm__cyrrency">{currency}</div>
          <div className="addOperationForm__button-block">
            <input
              type="button"
              className="addOperationForm__button button"
              onClick={() => push("/")}
              value="Закрыть"
            />
            <input
              className="addOperationForm__button addOperationForm__button_submit button"
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
