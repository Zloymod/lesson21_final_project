import { Component } from "../core/Component";
import { ListItem } from "./ListItem";

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";

    const title = document.createElement("h2");
    title.className = "donates-container__title";
    title.textContent = "Список донатов";
    this.$rootElement.appendChild(title);

    this.$donatesContainer = document.createElement("div");
    this.$donatesContainer.className = "donates-container__donates";
    this.$rootElement.appendChild(this.$donatesContainer);

    if (props && props.donates) {
      this.renderDonates(props.donates);
    }
  }
  renderDonates(donates) {
    if (!Array.isArray(donates)) return;

    this.$donatesContainer.innerHTML = "";
    donates.forEach((donate) => {
      const donateItem = new ListItem({
        date: donate.date,
        amount: donate.amount,
      });
      this.$donatesContainer.appendChild(donateItem.$rootElement);
    });
  }

  // addItem(item) {
  //   // ...
  // }
}
