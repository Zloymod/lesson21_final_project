import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = {
      donates: [],
      totalAmount: 0,
    };

    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";

    this.$total = document.createElement("h1");
    this.$total.className = "total-amount";
    this.$total.innerHTML = "Итого: $<span>0</span>";
    this.$rootElement.appendChild(this.$total);

    const donateForm = new Form({
      onSubmit: this.onItemCreate.bind(this),
    });
    this.$rootElement.appendChild(donateForm.$rootElement);
    this.donateList = new List({
      donates: this.state.donates,
    });
    this.$rootElement.appendChild(this.donateList.$rootElement);
  }

  onItemCreate(amount) {
    this.state.donates.push({
      date: new Date(),
      amount: amount,
    });
    this.state.totalAmount += amount;
    this.$total.querySelector("span").textContent = this.state.totalAmount;
    this.donateList.renderDonates(this.state.donates);
  }
}
