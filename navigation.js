document.addEventListener("DOMContentLoaded", function () {

  const primaryNavigation = `
    <ul>
      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/index.html">
          Home
        </a>
      </li>

      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/about.html">
          About Me
        </a>
      </li>

      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/experience.html">
          Experience
        </a>
      </li>

      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/projects.html">
          Projects
        </a>
      </li>

      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/contact.html">
          Contact
        </a>
      </li>

      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/resume.html">
          Resume
        </a>
      </li>
    </ul>
  `;

  const primaryNav = document.getElementById("primary-navigation");

  if (primaryNav) {
    primaryNav.innerHTML = primaryNavigation;
  }

});
