import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";

    const label = document.createElement("label");
    label.className = "donate-form__input-label";
    label.textContent = "Введите сумму в $";

    this.$input = document.createElement("input");
    this.$input.className = "donate-form__donate-input";
    this.$input.name = "amount";
    this.$input.type = "number";
    this.$input.max = "100";
    this.$input.min = "1";
    this.$input.required = true;

    label.appendChild(this.$input);

    this.$submitButton = document.createElement("button");
    this.$submitButton.className = "donate-form__submit-button";
    this.$submitButton.type = "submit";
    this.$submitButton.textContent = "Задонатить";
    this.$submitButton.disabled = true;

    this.$rootElement.appendChild(label);
    this.$rootElement.appendChild(this.$submitButton);

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  handleInput(event) {
    const value = parseInt(event.target.value);
    const isValid = value >= 1 && value <= 100;
    this.$submitButton.disabled = !isValid;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.props.onSubmit) {
      const amount = parseInt(this.$input.value);
      this.props.onSubmit(amount);
      this.$input.value = "";
      this.$submitButton.disabled = true;
    }
  }
}
