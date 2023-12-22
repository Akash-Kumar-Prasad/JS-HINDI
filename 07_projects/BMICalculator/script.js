const form = document.querySelector('form');
//this use case will give empty value because when the page is opened the script loads and the blank spaces in both the input fields will be empty that is why it is necessary to have a event listener 
// const height = parseInt(document.querySelector('#height').value)
//   const weight = parseInt(document.querySelector('#weight').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
  }

});