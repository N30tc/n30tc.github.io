const updateVisitCounter = () => {
  let visitCount = localStorage.getItem('visitCount');

  if (visitCount === null) {
      visitCount = 0;
  } else {
      visitCount = parseInt(visitCount, 10) + 1;
  }

  localStorage.setItem('visitCount', visitCount);
  document.getElementById('visit-counter').innerText = visitCount;
};

document.addEventListener('DOMContentLoaded', updateVisitCounter);
