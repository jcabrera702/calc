const numbers = document.querySelector('#numbers');

const createBoxes = function(){
    for (let i=0; i <12; i++){
        let sum =0;
        const createBox = document.createElement('div');
        createBox.setAttribute('style', `border:2px solid black; `);
        createBox.setAttribute('class', "num")
        createBox.setAttribute('id', sum+=i)
        createBox.textContent = i;
        numbers.append(createBox);
    }
  const num10 = document.getElementById('10');
  num10.textContent = ".";
  const num11 = document.getElementById('11');
  num11.textContent = "clear";

  for(let i=0; i<5; i++){
    let sum =20;
    const opBox = document.createElement('div');
    opBox.setAttribute('style', `border: 2px solid;`);
    opBox.setAttribute('class', "op");
    opBox.setAttribute('id', sum+=i);
    opBox.textContent = i;
    document.querySelector('#operators').append(opBox);
  }
  const num20 = document.getElementById('20');
  const num21 = document.getElementById('21');
  const num22= document.getElementById('22');
  const num23 = document.getElementById('23');
  const num24 = document.getElementById('24');
  num24.setAttribute('style',`font-size: 10px; height:100px;`)
  num20.textContent = "+";
  num21.textContent = "-";
  num22.textContent = "x";
  num23.textContent = "/";
  num24.textContent = "Back space";
}
createBoxes();
