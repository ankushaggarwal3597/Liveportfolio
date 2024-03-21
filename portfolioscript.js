function confirmSubmission() {
  var confirmation = confirm("Are you sure you want to submit the form?");
  if (confirmation) {
      document.getElementById("myForm").submit();
  }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
function isInViewport(element) {
  var bounding = element.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function handleEducationAnimation() {
  var leftElement = document.getElementById('leftele');
  var rightElement = document.getElementById('rightele');

  if (isInViewport(leftElement)) {
      leftElement.classList.add('slideInLeft');
      window.removeEventListener('scroll', handleEducationAnimation);
  }
  if (isInViewport(rightElement)) {
      rightElement.classList.add('slideInRight');
      window.removeEventListener('scroll', handleEducationAnimation);
  }
}
function handleSkillsAnimation() {
  var skillItems = document.querySelectorAll('.skillitem');
  skillItems.forEach(function(item, index) {
      if (isInViewport(item)) {
          item.classList.add('fadeInUp');
          window.removeEventListener('scroll', handleSkillsAnimation);
      }
  });
}
function handleProjectsAnimation() {
  var projectItems = document.querySelectorAll('.projectitem');
  projectItems.forEach(function(item, index) {
      if (isInViewport(item)) {
          if (index === 0) {
              item.classList.add('slideInLeft');
          } else if (index === 1) {
              item.classList.add('fadeInUp');
          } else {
              item.classList.add('slideInRight');
          }
          window.removeEventListener('scroll', handleProjectsAnimation);
      }
  });
}
function handleAboutMeAnimation() {
  var aboutMeSection = document.getElementById('aboutmeidtext');
  if (isInViewport(aboutMeSection)) {
      aboutMeSection.classList.add('fadeInUp');
      window.removeEventListener('scroll', handleAboutMeAnimation);
  }
}
function handleContactFormAnimation() {
  var contactForm = document.getElementById('contact');
  if (isInViewport(contactForm)) {
      contactForm.classList.add('fadeInUp');
      window.removeEventListener('scroll', handleContactFormAnimation);
  }
}

window.addEventListener('scroll', function() {
  handleEducationAnimation();
  handleSkillsAnimation();
  handleProjectsAnimation();
  handleAboutMeAnimation();
  handleContactFormAnimation();
});
handleEducationAnimation();
handleSkillsAnimation();
handleProjectsAnimation();
handleAboutMeAnimation();
handleContactFormAnimation();