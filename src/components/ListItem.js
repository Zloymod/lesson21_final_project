import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";

    // ...
    if (props && props.date && props.amount) {
      const formattedDate = new Date(props.date).toLocaleString();
      this.$rootElement.innerHTML = `${formattedDate} - <b>$${props.amount}</b>`;
    }
  }
}
