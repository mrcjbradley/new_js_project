import "./styles/app.scss";

if (process.env.NODE_ENV !== "production") {
  console.log("Development Mode Ahoy!");
}

// document.addEventListener("DOMContentLoaded", () => {
//   const foldingArticles = document.querySelectorAll(
//     ".inspiration, .font-tools, .asset-resources"
//   );
//   foldingArticles.forEach(art => {
//     art.addEventListener("click", e => {
//       e.preventDefault();
//       // console.log(art);
//       document.querySelectorAll(".angle-down").forEach(icon => {
//         icon.className = "icon angle-left";
//       });
//       document.querySelector(".open-list").classList.remove("open-list");
//       art.lastElementChild.classList.add("open-list");
//       art.firstElementChild.lastElementChild.classList.remove("angle-left");
//       art.firstElementChild.lastElementChild.classList.add("angle-down");
//     });
//   });
// });
