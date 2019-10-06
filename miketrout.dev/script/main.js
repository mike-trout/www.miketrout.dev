'use strict';

// Create the placeholders for the experience items
function createExperienceItemPlaceholders(count) {
  // Get the experience container div
  var experienceDiv = document.getElementsByClassName('experience')[0];
  // Create the number of placeholders specified by count
  for (var i = 0; i < count; i++) {
    // Create the experience item div
    var experienceItemDiv = document.createElement('div');
    experienceItemDiv.classList.add(
      'experience__item',
      'experience__item--placeholder'
    );
    // Create the experience item job role div and append to the
    // experience item div
    var experienceItemJobRoleDiv = document.createElement('div');
    experienceItemJobRoleDiv.classList.add(
      'experience__item-job-role',
      'experience__item-job-role--placeholder'
    );
    experienceItemDiv.appendChild(experienceItemJobRoleDiv);
    // Create the experience item date range div and append to the
    // experience item div
    var experienceItemDateRangeDiv = document.createElement('div');
    experienceItemDateRangeDiv.classList.add(
      'experience__item-date-range',
      'experience__item-date-range--placeholder'
    );
    experienceItemDiv.appendChild(experienceItemDateRangeDiv);
    // Create the experience item employer div and append to the
    // experience item div
    var experienceItemEmployerDiv = document.createElement('div');
    experienceItemEmployerDiv.classList.add(
      'experience__item-employer',
      'experience__item-employer--placeholder'
    );
    experienceItemDiv.appendChild(experienceItemEmployerDiv);
    // Create the experience item description div and append to the
    // experience item div
    var experienceItemDescriptionDiv = document.createElement('div');
    experienceItemDescriptionDiv.classList.add(
      'experience__item-description',
      'experience__item-description--placeholder'
    );
    experienceItemDiv.appendChild(experienceItemDescriptionDiv);
    // Add the experience item div to the experience container div
    experienceDiv.appendChild(experienceItemDiv);
  }
}

// Get experience resource from the specified URL
function getExperience(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var experience = JSON.parse(xhr.responseText);
        createExperienceItemPlaceholders(experience.count);
        for (var i = 0; i < parseInt(experience.count); i++) {
          getExperienceItem(experience.items[i], i);
        }
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(e);
  };
  xhr.ontimeout = function () {
    console.error('The request to the experience service timed out.');
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.timeout = 2000;
  xhr.send();
}

function getExperienceItem(url, index) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var experienceItem = JSON.parse(xhr.responseText);
        displayExperienceItem(experienceItem, index);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(e);
  };
  console.ontimeout = function () {
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

function displayExperienceItem(experienceItem, index) {
  var experienceItemContainer = document.getElementsByClassName('experience__item')[index];
  var experienceItemJobRole = document.getElementsByClassName('experience__item-job-role')[index];
  experienceItemJobRole.innerHTML = experienceItem.jobRole;
  experienceItemJobRole.classList.remove('experience__item-job-role--placeholder');
  var experienceItemDateRange = document.getElementsByClassName('experience__item-date-range')[index];
  experienceItemDateRange.innerHTML = experienceItem.dateRange;
  experienceItemDateRange.classList.remove('experience__item-date-range--placeholder');
  var experienceItemEmployer = document.getElementsByClassName('experience__item-employer')[index];
  experienceItemEmployer.innerHTML = experienceItem.employer;
  experienceItemEmployer.classList.remove('experience__item-employer--placeholder');
  var experienceItemDescription = document.getElementsByClassName('experience__item-description')[index];
  experienceItemDescription.innerHTML = experienceItem.description;
  experienceItemDescription.classList.remove('experience__item-description--placeholder');
  experienceItemContainer.classList.remove('experience__item--placeholder');
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
  getExperience('https://api.miketrout.dev/experience/');
  getProjects();
  getSkills();
}
