function reqListener() {
  console.log(this.responseText);
  var experience = JSON.parse(this.responseText);
  var experienceItemsJobRole = document.getElementsByClassName('experience-item__job-role');
  for (var i = 0; i < experienceItemsJobRole.length; i++) {
    experienceItemsJobRole[i].innerHTML = experience[i].jobRole;
  }
}

var oReq = new XMLHttpRequest();
oReq.addEventListener('load', reqListener);
oReq.setRequestHeader('Accept', 'application/json');
oReq.open('GET', '/api/experience');
oReq.send();
