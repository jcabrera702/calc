const numbers = document.querySelector('#numbers');
// created buttons to the .work div which are #numbers and #operators
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

  for(let i=0; i<=5; i++){
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
  const num25 = document.getElementById('25');
  num24.setAttribute('style',`font-size: 10px; height:100px;`)
  num20.textContent = "+";
  num21.textContent = "-";
  num22.textContent = "x";
  num23.textContent = "/";
  num24.textContent = "Back space";
  num25.textContent = "=";
}
createBoxes();


// displayScreen inputs the value of .work elements when clicked
const displayScreen = function(){
  const getDisplay = document.querySelector('#display');
  const divValue = document.querySelectorAll('.work');
  
  divValue.forEach(box => {
    box.addEventListener('click' ,function(event){
      const clicked = event.target;
      const inputValue = clicked.textContent;
      
      if (clicked.id === '11'){
        getDisplay.textContent = "";
        return;
      } else if (clicked.id ==='25'){
        //Start of the logic//
      const calculateExpression = function(){
          const expression = getDisplay.textContent;
           // Input clean and sanitization
          let safeExpression = expression;
          safeExpression = safeExpression.replace(/x/g, '*').replace(/X/g, '*');
          
          //check if the result expression is empty after cleaning
         
          const result = new Function('return '+ safeExpression)();
          return result;
      }
      getDisplay.textContent = calculateExpression();
      //end of the logic//
      return;
      } else if (clicked.id === '24'){
        let currentContent = getDisplay.textContent
        getDisplay.textContent = currentContent.slice(0, -1);
        return;
      } else if(clicked.id === '10'){
        if(getDisplay.textContent.includes('.'))
          // left off here, need to be able to add another . after operator
        return getDisplay.textContent;
      }
      getDisplay.append(inputValue);
   
    })
    return ;
  });
}
displayScreen();

// const displayFunction = function(){
//     const num11 = document.getElementById('11');
//      num11.addEventListener('click', function(event){
//       getDisplay.textContent = '';
//      })
// };
// displayFunction();