const socialMediaIcons = document.querySelector('.social-media');

const facebookIcon = document.createElement('a');
facebookIcon.href = 'https://www.facebook.com/Hyundai/';
facebookIcon.target = '_blank';
const facebookIconElement = document.createElement('i');
facebookIconElement.classList.add('fab', 'fa-facebook');
facebookIcon.appendChild(facebookIconElement);
socialMediaIcons.appendChild(facebookIcon);

const twitterIcon = document.createElement('a');
twitterIcon.href = 'https://twitter.com/hyundai';
twitterIcon.target = '_blank';
const twitterIconElement = document.createElement('i');
twitterIconElement.classList.add('fab', 'fa-twitter');
twitterIcon.appendChild(twitterIconElement);
socialMediaIcons.appendChild(twitterIcon);

const instagramIcon = document.createElement('a');
instagramIcon.href = 'https://www.instagram.com/Hyundai/';
instagramIcon.target = '_blank';
const instagramIconElement = document.createElement('i');
instagramIconElement.classList.add('fab', 'fa-instagram');
instagramIcon.appendChild(instagramIconElement);
socialMediaIcons.appendChild(instagramIcon);

for (let i = 0; i < 2; i++) {
    const space = document.createElement('span');
    space.textContent = ' ';
    socialMediaIcons.appendChild(space);
}