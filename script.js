const calcButtons = document.querySelectorAll('.cards');
const operator = document.querySelectorAll('.arithmetic-op');
let output = document.querySelector('.calc-header');
let equalsOperation = document.querySelector('equality.op');
const selectedKeys = [];
let valuesOnScreen = '';


enterText();
output.textContent =0;

//equalsOperation.addEventListener
// calcButtons.forEach((button) => {
//     output.textContent = '';
//     button.addEventListener('click', () =>
//     {
//         //output.textContent+='';
//         button.classList.add('selected');
//         if(button.className.includes('arithmetic-op')){
//             operatorButtons('disable');
//             selectedKeys.push(button.textContent);
//             output.textContent =0;
//         }
//         else 
//         {operatorButtons('enable');
//         output.textContent += button.textContent;
//         selectedKeys.push(button.textContent);
//         }
//     })

//     button.addEventListener('transitionend', ()=>
//     {
//         button.classList.remove('selected');
//     })

    
// })

//operatorButtons('enable');


function operatorButtons(event){
    const operator = document.querySelectorAll('.arithmetic-op');

    if(event ==='disable'){
        operator.forEach(button =>{
            button.disable = true;
            button.classList.add('disabled');
            //console.log(selectedKeys);
        });
    }

    else if(event ==='enable'){
        operator.forEach(button =>{
            button.disable = false;
            button.classList.remove('disabled');
            //console.log(selectedKeys);
        });
    }
    console.log(selectedKeys);
}


function startUp(){
    operationsButtons('disable');
}
function calculate(array){
    let calculation ='';
    if(array.length >0){
        for(let i =0; i <array.length; i++){
            if( array[i] =='+' || array[i] =='-' ||array[i] =='*' ||array[i] =='/'){
                calculation += ' '+array[i]+' '; 
            }
            else{
                calculation += array[i];
            }
        }
        return calculation.split(' ');
  
    }
  
    else return 0;
  }

  function performCalculation(str){
  
    if(str.length >0){
      let sum = parseInt(str[0]);
      for(let i =1; i < str.length; i++){
        if(str[i] =='+' || str[i] =='-' ||str[i] =='*' ||str[i] =='/'){
          switch (str[i]){
            case '+':
              if(str[i+1]){
                sum += parseInt(str[i+1]);
                break;
              }
              case '-':
                if(str[i+1]){
                  sum -= parseInt(str[i+1]);
                  break;
                }
  
              case '*':
                if(str[i+1]){
                  sum *= parseInt(str[i+1]);
                  break;
                }
  
              case '/':
                if(str[i+1]){
                  sum /= parseInt(str[i+1]);
                  break;
                }
  
              default:
                break;
          }
        }
      }
      return sum;
    }
  
    else return 0
  }

function enterText(){
    calcButtons.forEach((button) => {
        
        button.addEventListener('click', () =>
        {
            //output.textContent+='';
            button.classList.add('selected');
            if(button.className.includes('arithmetic-op')){
                operatorButtons('disable');
                selectedKeys.push(button.textContent);
                output.textContent =0;
                valuesOnScreen ='';
            }

            else if(button.className.includes('equality-op')){
                if(selectedKeys.length > 0){
                    let valuesToCalculate = calculate(selectedKeys);
                    output.textContent= performCalculation(valuesToCalculate);
                    selectedKeys.splice(0, selectedKeys.length);
                    valuesOnScreen='';
                }
                else return output.textContent = 0;
            }
            else 
                {operatorButtons('enable');
                valuesOnScreen += button.textContent;
                output.textContent = valuesOnScreen;
                selectedKeys.push(button.textContent);
            }
        })
    
        button.addEventListener('transitionend', ()=>
        {
            button.classList.remove('selected');
        })
    
        
    })
}

