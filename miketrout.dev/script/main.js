'use strict';

function getExperience() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.miketrout.dev/experience/', true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        displayExperience(JSON.parse(xhr.responseText));
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.ontimeout = function () {
    console.error('The request to the experience service timed out.');
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.timeout = 2000;
  xhr.send();
}

function getProjects() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.miketrout.dev/projects/', true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        displayProjects(JSON.parse(xhr.responseText));
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.ontimeout = function () {
    console.error('The request to the projects service timed out.');
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.timeout = 2000;
  xhr.send();
}

function getSkills() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.miketrout.dev/skills/', true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        displaySkills(JSON.parse(xhr.responseText));
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  }
  xhr.ontimeout = function () {
    console.error('The request to the skills service timed out.');
  }
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.timeout = 2000;
  xhr.send();
}

function displayExperience(experience) {
  var experienceItemPlaceholders = document.getElementsByClassName('experience__item--placeholder');
  var numPlaceholders = experienceItemPlaceholders.length;
  var numExperience = experience.length;
  if (numPlaceholders > numExperience) {
    for (var i = 0; i < numPlaceholders - numExperience; i++) {
      experienceItemPlaceholders[0].parentElement.removeChild(experienceItemPlaceholders[0]);
    }
  } else if (numPlaceholders < numExperience) {
    for (var i = 0; i < numExperience - numPlaceholders; i++) {
      experienceItemPlaceholders[0].parentElement.appendChild(experienceItemPlaceholders[0].cloneNode(true));
    }
  }
  var experienceItemJobRoles = document.getElementsByClassName('experience__item-job-role');
  var experienceItemDateRanges = document.getElementsByClassName('experience__item-date-range');
  var experienceItemEmployers = document.getElementsByClassName('experience__item-employer');
  var experienceItemDescriptions = document.getElementsByClassName('experience__item-description');
  var experienceItems = document.getElementsByClassName('experience__item');
  for (var i = 0; i < numExperience; i++) {
    experienceItemJobRoles[i].innerHTML = experience[i].jobRole;
    experienceItemDateRanges[i].innerHTML = experience[i].dateRange;
    experienceItemEmployers[i].innerHTML = experience[i].employer;
    experienceItemDescriptions[i].innerHTML = experience[i].description;
    experienceItemJobRoles[i].classList.remove('experience__item-job-role--placeholder');
    experienceItemDateRanges[i].classList.remove('experience__item-date-range--placeholder');
    experienceItemEmployers[i].classList.remove('experience__item-employer--placeholder');
    experienceItemDescriptions[i].classList.remove('experience__item-description--placeholder');
    experienceItems[i].classList.remove('experience__item--placeholder');
  }
}

function displayProjects(projects) {
  var projectsItemPlaceholders = document.getElementsByClassName('projects__item--placeholder');
  var numPlaceholders = projectsItemPlaceholders.length;
  var numProjects = projects.length;
  if (numPlaceholders > numProjects) {
    for (var i = 0; i < numPlaceholders - numProjects; i++) {
      projectsItemPlaceholders[0].parentElement.removeChild(projectsItemPlaceholders[0]);
    }
  } else if (numPlaceholders < numProjects) {
    for (var i = 0; i < numProjects - numPlaceholders; i++) {
      projectsItemPlaceholders[0].parentElement.appendChild(projectsItemPlaceholders[0].cloneNode(true));
    }
  }
  var projectsItemNames = document.getElementsByClassName('projects__item-name');
  var projectsItemDescriptions = document.getElementsByClassName('projects__item-description');
  var projectsItems = document.getElementsByClassName('projects__item');
  for (var i = 0; i < numProjects; i++) {
    projectsItemNames[i].innerHTML = projects[i].name;
    projectsItemDescriptions[i].innerHTML = projects[i].description;
    projectsItemNames[i].classList.remove('projects__item-name--placeholder');
    projectsItemDescriptions[i].classList.remove('projects__item-description--placeholder');
    projectsItems[i].classList.remove('projects__item--placeholder');
  }
}

function displaySkills(skills) {
  var skillNamePlaceholders = document.getElementsByClassName('skills__detail-item-name--placeholder');
  var numPlaceholders = skillNamePlaceholders.length;
  var numSkills = skills.length;
  if (numPlaceholders > numSkills) {
    for (var i = 0; i < numPlaceholders - numSkills; i++) {
      skillNamePlaceholders[0].parentElement.removeChild(skillNamePlaceholders[0]);
    }
  } else if (numPlaceholders < numSkills) {
    for (var i = 0; i < numSkills - numPlaceholders; i++) {
      skillNamePlaceholders[0].parentElement.appendChild(skillNamePlaceholders[0].cloneNode(true));
    }
  }
  var skillLevelPlaceholders = document.getElementsByClassName('skills__detail-item-score--placeholder');
  numPlaceholders = skillLevelPlaceholders.length;
  if (numPlaceholders > numSkills) {
    for (var i = 0; i < numPlaceholders - numSkills; i++) {
      skillLevelPlaceholders[0].parentElement.removeChild(skillLevelPlaceholders[0]);
    }
  } else if (numPlaceholders < numSkills) {
    for (var i = 0; i < numSkills - numPlaceholders; i++) {
      skillLevelPlaceholders[0].parentElement.appendChild(skillLevelPlaceholders[0].cloneNode(true));
    }
  }
  var skillNames = document.getElementsByClassName('skills__detail-item-name');
  for (var i = 0; i < numSkills; i++) {
    skillNames[i].innerHTML = skills[i].name;
    skillNames[i].classList.remove('skills__detail-item-name--placeholder');
  }
  var skillLevels = document.getElementsByClassName('skills__detail-item-score');
  for (var i = 0; i < numSkills; i++) {
    skillLevels[i].style.width = skills[i].level + '0%';
    skillLevels[i].classList.remove('skills__detail-item-score--placeholder');
  }
  document.getElementsByClassName('skills__detail--placeholder')[0].classList.remove('skills__detail--placeholder');
}

document.body.onload = function () {
  getExperience();
  getProjects();
  getSkills();
}
