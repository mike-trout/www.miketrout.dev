function reqListener() {
  console.log(this.responseText);
  var experience = JSON.parse(this.responseText);
  var experienceItemsJobRole = document.getElementsByClassName('experience-item__job-role');
  var experienceItemsDateRange = document.getElementsByClassName('experience-item__date-range');
  var experienceItemsEmployer = document.getElementsByClassName('experience-item__employer');
  var experienceItemsDescription = document.getElementsByClassName('experience-item__description');
  var experienceItems = document.getElementsByClassName('experience-item');
  for (var i = 0; i < experience.length; i++) {
    experienceItemsJobRole[i].innerHTML = experience[i].jobRole;
    experienceItemsDateRange[i].innerHTML = experience[i].dateRange;
    experienceItemsEmployer[i].innerHTML = experience[i].employer;
    experienceItemsDescription[i].innerHTML = experience[i].description;
    experienceItemsJobRole[i].classList.remove('experience-item__job-role--placeholder');
    experienceItemsDateRange[i].classList.remove('experience-item__date-range--placeholder');
    experienceItemsEmployer[i].classList.remove('experience-item__employer--placeholder');
    experienceItemsDescription[i].classList.remove('experience-item__description--placeholder');
    experienceItems[i].classList.remove('experience-item--placeholder');
  }
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.open('GET', '/api/experience');
oReq.setRequestHeader('Accept', 'application/json');
oReq.send();
