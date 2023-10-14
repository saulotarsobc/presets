const datalist = document.querySelector("datalist");

const pessoas = ["Aline", "Jaqueline", "Geise", "Saulo", "Filipe", "Sargio", "Sarah", "Rose", "Jhonatas", "Zilene", "Paulo H", "Jeferson", "Neia"]

pessoas.forEach(pessoa => {
    datalist.innerHTML += `<option value="${pessoa}"/>`;
});