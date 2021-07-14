'use strict';

// Create the placeholders for the experience items
// count: Number of placeholders to create
function createExperienceItemPlaceholders(count) {
  // Get the experience container div
  var experienceDiv = document.getElementById('experience');
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

// Create a fixed position bar warning that Internet Explorer is
// an unsupported browser
function createInternetExplorerWarningBar() {
  var div = document.createElement('div');
  div.style.backgroundColor = 'deepskyblue';
  div.style.padding = '0.5rem 0';
  div.style.position = 'fixed';
  div.style.top = 0;
  div.style.width = '100%';
  var h3 = document.createElement('h3');
  h3.innerText = 'This website does not support Internet Explorer. Consider using a modern browser.';
  h3.style.color = 'white';
  h3.style.textAlign = 'center';
  div.appendChild(h3);
  return div;
}

// Create the placeholders for the projects items
// count: Number of placeholders to create
function createProjectsItemPlaceholders(count) {
  // Get the projects container div
  var projectsDiv = document.getElementById('projects');
  // Create the number of placeholders specified by count
  for (var i = 0; i < count; i++) {
    // Create the projects item div
    var projectsItemDiv = document.createElement('div');
    projectsItemDiv.classList.add(
      'projects__item',
      'projects__item--placeholder'
    );
    // Create the projects item name div and append to the
    // projects item div
    var projectsItemNameDiv = document.createElement('div');
    projectsItemNameDiv.classList.add(
      'projects__item-name',
      'projects__item-name--placeholder'
    );
    projectsItemDiv.appendChild(projectsItemNameDiv);
    // Create the projects item description div and append to
    // the projects item div
    var projectsItemDescriptionDiv = document.createElement('div');
    projectsItemDescriptionDiv.classList.add(
      'projects__item-description',
      'projects__item-description--placeholder'
    );
    projectsItemDiv.appendChild(projectsItemDescriptionDiv);
    // Add the projects item div to the projects container div
    projectsDiv.appendChild(projectsItemDiv);
  }
}

// Create the placeholders for the skills items
// count: Number of placeholders to create
function createSkillsItemPlaceholders(count) {
  // Get the skills detail container div
  var skillsDetailDiv = document.getElementById('skills-detail');
  // Create the number of placeholders specified by count
  for (var i = 0; i < count; i++) {
    // Create the skills detail item div
    var skillsDetailItemDiv = document.createElement('div');
    skillsDetailItemDiv.classList.add('skills__detail-item');
    // Create the skills detail item name div and append to the
    // skills detail item div
    var skillsDetailItemNameDiv = document.createElement('div');
    skillsDetailItemNameDiv.classList.add(
      'skills__detail-item-name',
      'skills__detail-item-name--placeholder'
    );
    skillsDetailItemDiv.appendChild(skillsDetailItemNameDiv);
    // Create the skills detail item score div and append to the
    // skills detail item div
    var skillsDetailItemScoreDiv = document.createElement('div');
    skillsDetailItemScoreDiv.classList.add('skills__detail-item-score');
    skillsDetailItemDiv.appendChild(skillsDetailItemScoreDiv);
    // Create the skills detail item score bar div and append to
    // the skills detail item score div
    var skillsDetailItemScoreBarDiv = document.createElement('div');
    skillsDetailItemScoreBarDiv.classList.add(
      'skills__detail-item-score-bar',
      'skills__detail-item-score-bar--placeholder'
    );
    skillsDetailItemScoreDiv.appendChild(skillsDetailItemScoreBarDiv);
    // Append the skills detail item div to the skills detail
    // container
    skillsDetailDiv.appendChild(skillsDetailItemDiv);
  }
}

// Callback function to display the experience resource collection
// experience: The experience resource collection
function displayExperienceCallback(experience) {
  // Create placeholders, accounting for the existing placeholder
  createExperienceItemPlaceholders(experience.count - 1);
  // Get the experience resources with an artifical delay to emphasise
  // that the resources are being fetched from a web service
  setTimeout(function () {
    for (var i = 0; i < parseInt(experience.count); i++) {
      getResource(experience.items[i], displayExperienceItemCallback, { index: i });
    }
  }, 250);
}

// Callback function to display an experience item
// experienceItem: The experience item to display
// params: Parameters object containing index to display
function displayExperienceItemCallback(experienceItem, params) {
  var index = params.index;
  var experienceItemDiv = document.getElementsByClassName('experience__item')[index];
  var experienceItemJobRoleDiv = document.getElementsByClassName('experience__item-job-role')[index];
  experienceItemJobRoleDiv.innerHTML = experienceItem.jobRole;
  experienceItemJobRoleDiv.classList.remove('experience__item-job-role--placeholder');
  var experienceItemDateRangeDiv = document.getElementsByClassName('experience__item-date-range')[index];
  experienceItemDateRangeDiv.innerHTML = experienceItem.dateRange;
  experienceItemDateRangeDiv.classList.remove('experience__item-date-range--placeholder');
  var experienceItemEmployerDiv = document.getElementsByClassName('experience__item-employer')[index];
  experienceItemEmployerDiv.innerHTML = experienceItem.employer;
  experienceItemEmployerDiv.classList.remove('experience__item-employer--placeholder');
  var experienceItemDescriptionDiv = document.getElementsByClassName('experience__item-description')[index];
  experienceItemDescriptionDiv.innerHTML = experienceItem.description;
  experienceItemDescriptionDiv.classList.remove('experience__item-description--placeholder');
  experienceItemDescriptionDiv.style.maxHeight = experienceItemDescriptionDiv.scrollHeight + 'px';
  experienceItemDiv.classList.remove('experience__item--placeholder');
}

// Callback function to display the projects resource collection
// projects: The projects resource collection
function displayProjectsCallback(projects) {
  // Create placeholders, accounting for the existing placeholder
  createProjectsItemPlaceholders(projects.length - 1);
  // Display the project resources with an artifical delay to emphasise that the
  // resources are being fetched from an API
  setTimeout(function () {
    for (var i = 0; i < projects.length; i++) {
      var projectsItemNameDiv = document.getElementsByClassName('projects__item-name')[i];
      projectsItemNameDiv.innerHTML = projects[i].name;
      projectsItemNameDiv.classList.remove('projects__item-name--placeholder');
      var projectsItemDescriptionDiv = document.getElementsByClassName('projects__item-description')[i];
      projectsItemDescriptionDiv.innerHTML = projects[i].description;
      projectsItemDescriptionDiv.classList.remove('projects__item-description--placeholder');
      var projectsItemDiv = document.getElementsByClassName('projects__item')[i];
      projectsItemDiv.classList.remove('projects__item--placeholder');
    }
  }, 250);
}

// Callback function to display the skills resource collection
// skills: The skills resource collection
function displaySkillsCallback(skills) {
  // Create placeholders, accounting for the existing 3 placeholders
  createSkillsItemPlaceholders(skills.length - 3);
  // Display the skills resources with an artifical delay to emphasise that the
  // resources are being fetched from a web service
  setTimeout(function () {
    for (var i = 0; i < skills.length; i++) {
      var skillsDetailItemNameDiv = document.getElementsByClassName('skills__detail-item-name')[i];
      skillsDetailItemNameDiv.innerHTML = skills[i].name;
      skillsDetailItemNameDiv.classList.remove('skills__detail-item-name--placeholder');
      var skillsDetailItemScoreBarDiv = document.getElementsByClassName('skills__detail-item-score-bar')[i];
      skillsDetailItemScoreBarDiv.style.width = (parseInt(skills[i].level) * 10) + '%';
      skillsDetailItemScoreBarDiv.classList.remove('skills__detail-item-score-bar--placeholder');
    }
    var skillsDetailDiv = document.getElementById('skills-detail');
    skillsDetailDiv.classList.remove('skills__detail--placeholder');
  }, 250);
}

// Get resource
// url: The URL to get the resource from
// displayResourceCallback: function to display the resource
// params: optional additional paramters to pass to the callback
function getResource(url, displayResourceCallback, params) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.timeout = 2000;
  xhr.onload = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var resource = JSON.parse(xhr.responseText);
        displayResourceCallback(resource, params);
      } else {
        console.error('Error getting resource ' + url + '\n' + xhr.statusText);
      }
    }
  }
  xhr.onerror = function (e) {
    console.error('Error getting resource ' + url + '\n' + e);
  }
  xhr.timeout = function () {
    console.error('Timed out getting resource ' + url);
  }
  xhr.send();
}

document.body.onload = function () {
  // Check if the browser is Internet Explorer and, if so, warn the user
  // that it is unsupported
  var isIE = /MSIE|Trident/.test(window.navigator.userAgent);
  if (isIE) document.body.appendChild(createInternetExplorerWarningBar());
  // Get the Experience resource
  getResource('https://api.miketrout.dev/experience/', displayExperienceCallback);
  // Get the Projects resource
  getResource('https://api.miketrout.dev/projects/', displayProjectsCallback);
  // Get the Skills resource
  getResource('https://api.miketrout.dev/skills/', displaySkillsCallback);
};
