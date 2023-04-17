const lampadaApagada = document.querySelector('#lampada-desligada')
const lampadaLigada = document.querySelector('#lampada-ligada')
const  btnLigar = document.querySelector('#ligar')
const btnDesligar = document.querySelector('#desligar')


btnLigar.addEventListener('click' , fotoLigada);
btnDesligar.addEventListener('click', fotoDesligada)

function fotoLigada() {
    lampadaApagada.style.display = 'none'
    lampadaLigada.classList.toggle('active')
    btnDesligar.style.backgroundColor = '#c1c1c1'
    btnDesligar.style.color = 'black'


}

function fotoDesligada() {
    lampadaApagada.style.display = 'flex'
    lampadaLigada.classList.toggle('active')
}