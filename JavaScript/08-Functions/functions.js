const ftrue = () => {
  return true
}

const miPromesa = async () => {
  if (true) {
    return setTimeout(() => console.log('Hola soy una promesa'), 5000);
  }
};

function* pares() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      yield i;      
    }    
  } 
}