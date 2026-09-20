document.addEventListener("DOMContentLoaded", function () {

  const navigationHTML = `
    <ul>

      <li>
        <a href="index.html">
          Home
        </a>
      </li>

      <li>
        <a href="education.html">
          Education
        </a>
      </li>

      <li>
        <a href="experience.html">
          Experience
        </a>
      </li>

      <li>
        <a href="feedback.html">
          Feedback
        </a>
      </li>

      <li>
        <a href="contact.html">
          Contact
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
