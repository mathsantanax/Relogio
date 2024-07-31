// var cronometro = ('view/Cronometro.html');
// var temporizador = ('view/Temporizador.html');
// var Home = ('view/Home.html');
// const nav_link = document.getElementsByClassName("nav-link");
// const content = document.getElementById("content");


// document.addEventListener('DOMContentLoaded', function () {
//     const links = document.querySelectorAll('.nav-link');
//     const content = document.getElementById('content');

//     links.forEach(link => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             const page = this.getAttribute('data-page');
//             loadPage(page);
//         });
//     });

//     function loadPage(page) {
//         fetch(page)
//             .then(response => response.text())
//             .then(html => {
//                 content.innerHTML = html;
//             })
//             .catch(error => {
//                 console.error('Error loading page:', error);
//             });
//     }

//     // Load the initial page
//     loadPage('view/Home.html');
// });



// // Adiciona evento de clique ao link
// nav_link[0].addEventListener('click', function(event) {
//   event.preventDefault();
//   fetch('view/Home.html')
//     .then(response => response.text())
//     .then(html => {
//       content.innerHTML = html;
//     });
// });

// console.log(content.children);
// // document.onload(loadPage(Home));
// nav_link[0].addEventListener("click", () => loadPage(Home));
// nav_link[1].addEventListener("click", () => loadPage(cronometro));
// nav_link[2].addEventListener("click", () => loadPage(temporizador));

// Cria um container para o conteúdo
// var container = document.getElementById('#content');

// // Define as rotas
// var routes = {
//   '/pagina1': 'view/Home.html',
//   '/pagina2': 'view/Cronometro.html'
// };

// // Carrega o conteúdo da página atual
// function loadPage(url) {
//   fetch(url)
//     .then(response => response.text())
//     .then(html => {
//       container.innerHTML = html;
//     });
// }

// // Adiciona evento de clique ao link
// document.onload('click', function(event) {
//   if (event.target.tagName === 'A') {
//     event.preventDefault();
//     var url = event.target.href;
//     loadPage(routes[url]);
//   }
// });