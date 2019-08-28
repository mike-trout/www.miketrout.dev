'use strict';

function getExperience() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/experience", true);
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
    console.error("The request to the experience service timed out.");
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.timeout = 2000;
  xhr.send(null);
}

function getProjects() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/projects", true);
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
    console.error("The request to the projects service timed out.");
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.timeout = 2000;
  xhr.send(null);
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

document.body.onload = function () {
  getExperience();
  getProjects();
}
