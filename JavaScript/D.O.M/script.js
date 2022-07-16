function darkmode(){
    trocaClasse()
    trocaTexto()
}
function trocaClasse(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-mode");
    document.getElementsByTagName('button')[0].classList.toggle("dark-mode"); 
    document.getElementsByTagName('footer')[0].classList.toggle("dark-mode");
}
function trocaTexto(){
    if (document.getElementsByTagName('h1')[0].innerText == 'Light Mode ON'){
        document.getElementsByTagName('h1')[0].innerText = 'Dark Mode ON'
    }
    else{
        document.getElementsByTagName('h1')[0].innerText = 'Light Mode ON'
    }
    
    if (document.getElementsByTagName('button')[0].innerText == 'Dark Mode'){
        document.getElementsByTagName('button')[0].innerText = 'Light Mode'
    }
    else{
        document.getElementsByTagName('button')[0].innerText = 'Dark Mode'
    }
}
const botao = document.getElementById('mode-selector')

botao.addEventListener("click", darkmode)