// navigation.js
// Reusable navigation for all pages on the website

const navigation = document.createElement("nav");

navigation.classList.add("main-navigation");

navigation.innerHTML = `
  <ul>
    <li><a href="index.html#about">About Me</a></li>
    <li><a href="index.html#experience">Experience</a></li>
    <li><a href="index.html#projects">Projects</a></li>
  </ul>
`;

document.body.prepend(navigation);
