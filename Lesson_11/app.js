// console.log("Dinner starts...");
// console.log("Washing starts...");

// setTimeout(() => {
//   console.log("Dinner done...");
// }, 4000); // 4 секунды

// setTimeout(() => {
//   console.log("Washing done...");
// }, 8000);

// console.log("Cleaning starts....");

// console.log("Loading transfer data...");

// setTimeout(() => {
//   const transferResponse = {
//     player: "Messi",
//     oldClub: "Barcelona",
//     newClub: "PSG",
//   };

//   console.log("Transfer data fetched", transferResponse);

//   console.log("Loading transfer details data...");
//   setTimeout(() => {
//     const transferDetailsResponse = {
//       player: {
//         name: "Messi",
//         position: "forward",
//         goals: 155,
//       },
//       oldClub: {
//         name: "Barcelona",
//         coach: "Gvardiola",
//       },
//       newClub: {
//         name: "PSG",
//         coach: "Lui",
//       },
//       amount: "500,000$",
//     };

//     console.log("Transfer details fetched", transferDetailsResponse);
//   }, 3500);

//   localStorage.setItem("transfer", JSON.stringify(transferResponse));
// }, 3000);

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const transferResponse = {
//       player: "Messi",
//       oldClub: "Barcelona",
//       newClub: "PSG",
//     };
//     resolve(transferResponse);
//     // reject("Transfer data error");
//   }, 3000);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const transferDetailsResponse = {
//         player: {
//           name: "Messi",
//           position: "forward",
//           goals: 155,
//         },
//         oldClub: {
//           name: "Barcelona",
//           coach: "Gvardiola",
//         },
//         newClub: {
//           name: "PSG",
//           coach: "Lui",
//         },
//         amount: "500,000$",
//       };
//       resolve(transferDetailsResponse);
//       //   reject("Transfer details data error");
//     }, 3500);
//   });
// });

// p.then((transfer) => {
//   console.log("Transfer data fetched", transfer);
//   console.log("Loading transfer details data...");
// })
//   .then((transferDetails) => {
//     console.log("Transfer details fetched", transferDetails);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error in promise", error);
//   });

class TodoItem {
  static render(task) {
    return `
<div class="TodoListItem"}>
<p><span class="taskAuthor">${task.userId}</span> ${task.title}</p>
<div class="TodoListItem-Buttons">
  <button
    class="TodoListItem-CompleteButton">+
  </button>
  <button class="TodoListItem-DeleteButton">-
  </button>
</div>
</div>`;
  }
}

class Loader {
  static render() {
    return `<div class="lds-dual-ring"></div>`;
  }
}

const tasks = document.getElementById("tasks");
tasks.innerHTML = Loader.render();
// setTimeout(() => {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((response) => response.json())
    .then((tasksFromServer) => {
      const tasksComponents = tasksFromServer
        .filter((task, index) => index < 10)
        .map((task) => TodoItem.render(task));
      tasks.innerHTML = tasksComponents.join("");
    });
// }, 4000);
