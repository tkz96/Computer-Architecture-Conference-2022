import speakersData from './speakersData.js';

const speakersContainer = document.getElementById("speakers-container");

function createSpeaker({name, occupation, desc, photo}) {
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  speaker.innerHTML = 
  `
  <div class="speaker-image"><img src="${photo}" alt="${name}" /></div>
  <div>
    <h3>${name}</h3>
    <p class="occupation">${occupation}</p>
    <p>${desc}</p>
  </div>
  `
  ;

  speakersContainer.appendChild(speaker);
}

if (speakersContainer) {
  speakersData.forEach((e) => {
    createSpeaker(e);
  });
}

