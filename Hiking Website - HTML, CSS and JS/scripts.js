// Função que seleciona os elementos do menu
const selectElement = (s) => document.querySelector(s);
// Abrir o menu com um clique
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});
// Abrir o menu com um clique
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});