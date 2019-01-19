
const handleClick = (event) => {
  console.log('click')
  event.preventDefault();
  let firstName = document.querySelector('#first-name').value;
  let age = document.querySelector('#age').value;
  let main = document.querySelector('main');

  let nameText = document.createElement('p');
  let ageText = document.createElement('p');

  nameText.append(firstName);
  ageText.append(age);

  main.append(nameText);
  main.append(ageText);

  firstName = '';
  age = '';
}

document.querySelector('#first-name').focus();
document.querySelector('button').addEventListener('click', handleClick);