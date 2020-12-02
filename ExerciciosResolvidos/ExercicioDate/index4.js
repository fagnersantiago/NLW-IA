function dateOfYear() {
  let date = new Date();
  const weekDay = new Date()

  switch(weekDay.getDay()){
    case 0 : 
    console.log('Domingo')
    break;
    case 1: 
    console.log('Segunda feira')
    break;
    case 2: 
    console.log('Terça feira')
    break;
    case  3: 
    console.log('Quarta feira')
    break; 
    case 4: 
    console.log('Quinta feira')
    break;
    case 5: 
    console.log('Sexta feira')
    break;
    case 6:  console.log('Sábado')
    break;

  }

  console.log(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );

  
}

function localHour() {
  let times = new Date();

  let currentHour =
    times.getHours() < 10 ? "0".slice(-2) + times.getHours() : times.getHours();
  let currentMinutes =
    times.getMinutes() < 10
      ? "0".slice(-2) + times.getMinutes()
      : times.getMinutes();
  let currentSecond =
    times.getSeconds() < 10
      ? "0".slice(-2) + times.getSeconds()
      : times.getSeconds();

  console.log(`Hora:${currentHour}:${currentMinutes}:${currentSecond}`);

  let periodDay =
    times.getHours() >= 5 && times.getHours <=11
      ? "Manhã"
      : times.getHours() >= 12 && times.getHours() <= 18
      ? "tarde"
      : times.getHours() > 18 && times.getHours() <= 23
      ? "Noite"
      : times.getHours() > 00 && times.getHours()<=4  ? 'Madrugada' : 'Manhã'

  console.log(periodDay);
}
dateOfYear();
localHour();


