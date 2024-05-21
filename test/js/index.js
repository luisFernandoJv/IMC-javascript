// prevenir o evento acontecer

const form = document.querySelector('.formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const n1 = e.target.querySelector('#numero1');
    const n2 = e.target.querySelector('#numero2');
    const n3 = e.target.querySelector('#numero3');

    const numero1 = Number(n1.value);
    const numero2 = Number(n2.value);
    const numero3 = Number(n3.value);

    const media = mediaN(numero1, numero2, numero3);

    if(!numero1 && !numero2 && !numero3){
        setResultado('Por favor, insira as notas', false);
        return;
    }
    
    if(!numero1){
        setResultado('Por favor, insira a nota 1!', false);
        return;
    }
    if(!numero2){
        setResultado('Por favor, insira a nota 2!', false);
        return;
    }
    if(!numero3){
        setResultado('Por favor, insira a nota 3!', false);
        return;
    }
    if(!numero1 && !numero2 && !numero3){
        setResultado('Por favor, insira as notas', false);
        return;
    }

    if(media < 7){
        setResultado(`Reprovado sua media é: ${media}`, false);
        return
    }
    if(media == 7){
        setResultado(`Passou raspando hein :0 média: ${media}`, true);
        return;
    }
    if(media == 10){
        setResultado(`Nossa, você é o cara: ${media}`, true);
        return
    }
    if(media > 7){
        setResultado(`Aprovado!!! e sua média é: ${media}`, true);
        return
    }
  

})

function setResultado(msg, isValid){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
      } else {
        p.classList.add('bad');
      }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaP(){
    const p = document.createElement('p');
    return p;
}

function mediaN (numero1, numero2, numero3) {
    const media = (numero1 + numero2 + numero3)/3;
    return media.toFixed(2);
  }