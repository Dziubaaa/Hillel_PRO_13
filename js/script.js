
//First task

function firstTask() {
    for(let i = 20; i <= 30; i += 0.5) {
      console.log(i);
    }
  }
  
  //Second Task
  
  function secondTask() {
    const oneDollar = 27;
    for(let i = 10; i <= 100; i+=10){
      const value = i * oneDollar;
      console.log(`${i}$ = ${value}uah.`);
    }
  }
  
  //Third Task
  
  function thirdTask(N) {
    let i = 1;
  
    while (i * i <= N && i <= 100) {
        console.log(i * i);
        i++;
    }
  }
  
  thirdTask(1000);
  
  //Fourth Task 
  
  function fourthTask() {
    const numCheck = +prompt("Введіть число для перевірки: ");
  
    if (numCheck <= 1) {
        console.log(`${numCheck} - не просте число`);
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(numCheck); i++) {
            if (numCheck % i === 0) {
                console.log(`${numCheck} - не просте число`);
                return false;
            }
        }
        console.log(`${numCheck} - просте число`);
        return true;
    }
  }
  
  
  //Fift Task
  
  function fifthTask() {
    const num = +prompt("Введіть число для перевірки: ");
  
    if (num <= 0) {
        console.log(`Число ${num} не можна отримати від взведення в 3.`);
        return false;
    }
  
    let number = num;
    let exponent = 0;
  
  
    while (number !== 1) {
        if (number % 3 !== 0) {
            console.log(`Число ${num} не можна отримати від взведення в 3.`);
            return false;
        }
        number /= 3;
        exponent++;
    }
  
    console.log(`${num} це 3 в ${exponent} степені.`);
    return true;
  }
  