function getExperience() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/experience", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        populateExperience(JSON.parse(xhr.responseText));
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send(null);
}

function getProjects() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/api/projects", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        populateProjects(JSON.parse(xhr.responseText));
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send(null);
}

function populateExperience(experienceJson) {
  var experienceItemJobRoles = document.getElementsByClassName('experience__item-job-role');
  var experienceItemDateRanges = document.getElementsByClassName('experience__item-date-range');
  var experienceItemEmployers = document.getElementsByClassName('experience__item-employer');
  var experienceItemDescriptions = document.getElementsByClassName('experience__item-description');
  var experienceItems = document.getElementsByClassName('experience__item');
  for (var i = 0; i < experienceJson.length; i++) {
    experienceItemJobRoles[i].innerHTML = experienceJson[i].jobRole;
    experienceItemDateRanges[i].innerHTML = experienceJson[i].dateRange;
    experienceItemEmployers[i].innerHTML = experienceJson[i].employer;
    experienceItemDescriptions[i].innerHTML = experienceJson[i].description;
    experienceItemJobRoles[i].classList.remove('experience__item-job-role--placeholder');
    experienceItemDateRanges[i].classList.remove('experience__item-date-range--placeholder');
    experienceItemEmployers[i].classList.remove('experience__item-employer--placeholder');
    experienceItemDescriptions[i].classList.remove('experience__item-description--placeholder');
    experienceItems[i].classList.remove('experience__item--placeholder');
  }
}

function populateProjects(projectsJson) {
  var projectsItemNames = document.getElementsByClassName('projects__item-name');
  var projectsItemDescriptions = document.getElementsByClassName('projects__item-description');
  var projectsItems = document.getElementsByClassName('projects__item');
  for (var i = 0; i < projectsJson.length; i++) {
    projectsItemNames[i].innerHTML = projectsJson[i].name;
    projectsItemDescriptions[i].innerHTML = projectsJson[i].description;
    projectsItemNames[i].classList.remove('projects__item-name--placeholder');
    projectsItemDescriptions[i].classList.remove('projects__item-description--placeholder');
    projectsItems[i].classList.remove('projects__item--placeholder');
  }
}

getExperience();
getProjects();
