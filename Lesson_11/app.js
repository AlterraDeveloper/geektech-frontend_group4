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

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    const transferResponse = {
      player: "Messi",
      oldClub: "Barcelona",
      newClub: "PSG",
    };
    resolve(transferResponse);
    // reject("Transfer data error");
  }, 3000);
});

p.then((transfer) => {
  console.log("Transfer data fetched", transfer);
  console.log("Loading transfer details data...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const transferDetailsResponse = {
        player: {
          name: "Messi",
          position: "forward",
          goals: 155,
        },
        oldClub: {
          name: "Barcelona",
          coach: "Gvardiola",
        },
        newClub: {
          name: "PSG",
          coach: "Lui",
        },
        amount: "500,000$",
      };
      resolve(transferDetailsResponse);
      //   reject("Transfer details data error");
    }, 3500);
  });
})
  .then((transferDetails) => {
    console.log("Transfer details fetched", transferDetails);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error in promise", error);
  });

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
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => response.json())
  .then((tasksFromServer) => {
    tasks.innerHTML = tasksFromServer
      .filter((task, index) => index < 10)
      .map((task) => TodoItem.render(task))
      .join("");
  });

//   const tasksComponents = tasksFromServer
//     .filter((task, index) => index < 10)
//     .map((task) => TodoItem.render(task));
//   tasks.innerHTML = tasksComponents.join("");
// })
// .catch((error) => {
//   console.log(error);
// });
// }, 4000);

//REST API - REpresentation State Transfer Application Programming Interface
//HTTP - Hyper Text Transfer Protocol
//HTTPS - Hyper Text Transfer Protocol Secured

// var xhr = new XMLHttpRequest();

// xhr.addEventListener("load", function () {
//   // if (this.readyState === 4) {
//   console.log("XHR Response", this.responseText);
//   // }
// });

// xhr.open("GET", "https://jsonplaceholder.typicode.com/users/1");
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.send();

// fetch("https://restcountries.eu/rest/v2/name/canada?fullText=true")
//   .then((res) => res.json())
//   .then((country) => {
//     console.log(country);
//     console.log(country[0].name);
//     console.log(country[0].capital);
//     console.log(country[0].subregion);
//   });

// const btn = document.getElementById("toUserPage");
// btn.onclick = () => {
//   document.location = "./user.html";
// };

// let age = 5;
// age = "dhivusd";
