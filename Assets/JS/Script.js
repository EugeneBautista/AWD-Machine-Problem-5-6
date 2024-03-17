const button = document.querySelector('button');
const cbg = document.getElementById("bg");
button.addEventListener('click', () => {

    if (cbg.style.backgroundImage === '') {
        cbg.style.backgroundImage = 'url("https://pa1.aminoapps.com/5831/1b5d2f04176762169d2b48cbe67d6a69ebbb2f04_hq.gif")';
    } 
    else {
        cbg.style.backgroundImage = '';
    }
  });

const cardBody = document.querySelector('.card-body');
button.addEventListener('click', () => {
    if (cardBody.style.backgroundImage === '') {
        cardBody.style.backgroundImage = 'url("https://i.pinimg.com/originals/ef/af/16/efaf163a382cb8514608b8e715c41e97.gif")';
    } else {
        cardBody.style.backgroundImage = '';
    }
});

const cbtn = document.getElementById("changebg1");
const cbg1 = document.getElementById("bg");
cbtn.addEventListener('click', () => {
    if (cbg1.style.backgroundImage === '') {
        cbg1.style.backgroundImage = 'url("https://i.pinimg.com/originals/48/47/5d/48475d7584881d43fb04d4f94c96912a.gif")';
    } 
    else {
        cbg1.style.backgroundImage = '';
    }
  });

const cardBody2 = document.getElementById("card-body2");
cbtn.addEventListener('click', () => {
    if (cardBody2.style.backgroundImage === '') {
        cardBody2.style.backgroundImage = 'url("https://pa1.aminoapps.com/5700/07b097399de3792e6c30b71440f843a8f90755ff_hq.gif")';
    } else {
        cardBody2.style.backgroundImage = '';
    }
});


const cbtn2 = document.getElementById("changebg2");
const cbg2 = document.getElementById("bg");
cbtn2.addEventListener('click', () => {
    if (cbg2.style.backgroundImage === '') {
        cbg2.style.backgroundImage = 'url("https://media.tenor.com/ms3H65D2v0gAAAAM/sceptile-pok%C3%A9mon-sceptile.gif")';
    } 
    else {
        cbg2.style.backgroundImage = '';
    }
  });

const cardBody3 = document.getElementById("card-body3");
cbtn2.addEventListener('click', () => {
    if (cardBody3.style.backgroundImage === '') {
        cardBody3.style.backgroundImage = 'url("https://i.pinimg.com/originals/ac/80/59/ac8059ebda75f12f5df142d05f591418.gif")';
    } else {
        cardBody3.style.backgroundImage = '';
    }
});

const cbtn3 = document.getElementById("changebg3");
const cbg3 = document.getElementById("bg");
cbtn3.addEventListener('click', () => {
    if (cbg3.style.backgroundImage === '') {
        cbg3.style.backgroundImage = 'url("https://i.makeagif.com/media/8-29-2023/k5sz-c.gif")';
    } 
    else {
        cbg3.style.backgroundImage = '';
    }
  });

const cardBody4 = document.getElementById("card-body4");
cbtn3.addEventListener('click', () => {
    if (cardBody4.style.backgroundImage === '') {
        cardBody4.style.backgroundImage = 'url("https://i.pinimg.com/originals/b5/5a/85/b55a8566f3aef51cb5e194cabdc41e86.gif")';
    } else {
        cardBody4.style.backgroundImage = '';
    }
});
