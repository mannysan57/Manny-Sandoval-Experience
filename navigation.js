document.addEventListener("DOMContentLoaded", function () {

  const navigationHTML = `
    <ul>

      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/index.html">
          Home
        </a>
      </li>

      <li>
        <a href="https://mannysan57.github.io/Manny-Sandoval-Experience/education.html">
          Education
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

  const navigation =
    document.getElementById("main-navigation");

  if (navigation) {
    navigation.innerHTML = navigationHTML;
  }

});
