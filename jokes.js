const jokeButton = document.querySelector('.getJoke');
const jokeHolder = document.querySelector('.joke p');
const baseEndpoint = 'https://icanhazdadjoke.com';
const loader = document.querySelector('.loader');

const buttonText = [
  'Ugh.',
  '🤦🏻‍♂️',
  'omg dad',
  'you are the worst',
  'seriously?',
  'stop',
  'please stop',
  'that was the worst one',
  'ok, no more',
  'he, he. that was kinda funny',
];

async function fetchJoke() {
  // Show loader & hide joke
  loader.classList.remove('hidden');
  jokeHolder.classList.add('hidden');
  const response = await fetch(baseEndpoint, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = response.json();
  setTimeout(() => {
    // Hide loader & show joke
    loader.classList.add('hidden');
    jokeHolder.classList.remove('hidden');
  }, 650);
  return data;
}

function randomArrayItem(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];

  if (item === not) {
    return randomArrayItem(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomArrayItem(buttonText, jokeButton.textContent);
}

jokeButton.addEventListener('click', handleClick);
