document.addEventListener("DOMContentLoaded", function () {

  const primaryNavigation = `
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Me</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="projects.html">Projects</a></li>
    </ul>
  `;

  const secondaryNavigation = `
    <ul>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="resume.html">Resume</a></li>
    </ul>
  `;

  const sideNavigation = `
    <h2>Navigation</h2>

    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About Me</a></li>
      <li><a href="experience.html">Experience</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  `;

  const primaryNav = document.getElementById("primary-navigation");
  const secondaryNav = document.getElementById("secondary-navigation");
  const sideNav = document.getElementById("side-navigation");

  if (primaryNav) {
    primaryNav.innerHTML = primaryNavigation;
  }

  if (secondaryNav) {
    secondaryNav.innerHTML = secondaryNavigation;
  }

  if (sideNav) {
    sideNav.innerHTML = sideNavigation;
  }

});
