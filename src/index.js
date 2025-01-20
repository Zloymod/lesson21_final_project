// import { App } from './components/App';
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import { Form } from "./components/Form";
import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const appElement = document.createElement("div");
  appElement.className = "app";

  const totalElement = document.createElement("h1");
  totalElement.className = "total-amount";
  totalElement.innerHTML = "Итого: $<span>0</span>";

  const donates = [];

  const formComponent = new Form({
    onSubmit: (amount) => {
      donates.push({
        date: new Date(),
        amount: amount,
      });

      listComponent.renderDonates(donates);
      updateTotal();
    },
  });

  const listComponent = new List({ donates });

  function updateTotal() {
    const total = donates.reduce((sum, donate) => sum + donate.amount, 0);
    totalElement.querySelector("span").textContent = total;
  }

  appElement.appendChild(totalElement);
  appElement.appendChild(formComponent.$rootElement);
  appElement.appendChild(listComponent.$rootElement);
  document.body.appendChild(appElement);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const testDonates = [
//     { date: new Date(), amount: 4 },
//     { date: new Date(), amount: 20 },
//     { date: new Date(), amount: 3 },
//     { date: new Date(), amount: 2 },
//     { date: new Date(), amount: 1 },
//   ];
//   const listComponent = new List({ donates: testDonates });
//   document.body.appendChild(listComponent.$rootElement);

// });
