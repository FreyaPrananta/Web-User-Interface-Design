document.addEventListener("DOMContentLoaded", (event) => {
  console.log(document.querySelector('#btn'))
  const button = document.querySelector('#btn');
  if(button!== null) {
button.addEventListener('mouseover', function(){this.style.backgroundColor = '#b1416c';});
button.addEventListener('mouseout', function(){this.style.backgroundColor = '';});
  }

function submitFunction() {
    event.preventDefault();
    let timetableData = document.getElementById("timetable").value;
    
    switch (timetableData) {
        case "begmon":
            console.log(document.querySelector('.begmon'));
            document.querySelector('.begmon').style.backgroundColor = '#8a7475';
            document.querySelector('.begmon').textContent= 'Unavailable';
            
          break;
        case "begthur":
            document.querySelector('.begthur').style.backgroundColor = '#8a7475';
            document.querySelector('.begthur').textContent= 'Unavailable';
          break;
        case "begsat":
            document.querySelector('.begsat').style.backgroundColor = '#8a7475';
            document.querySelector('.begsat').textContent= 'Unavailable';
          break;
        case "intmon":
            document.querySelector('.intmon').style.backgroundColor = '#8a7475';
            document.querySelector('.intmon').textContent= 'Unavailable';
          break;
        case "intsun":
            document.querySelector('.intsun').style.backgroundColor = '#8a7475';
            document.querySelector('.intsun').textContent= 'Unavailable';
          break;
        case "intfri":
            document.querySelector('.intfri').style.backgroundColor = '#8a7475';
            document.querySelector('.intfri').textContent= 'Unavailable';
          break;
        case "extue":
            document.querySelector('.extue').style.backgroundColor = '#8a7475';
            document.querySelector('.extue').textContent= 'Unavailable';
          break;
        case "exfri":
            document.querySelector('.exfri').style.backgroundColor = '#8a7475';
            document.querySelector('.exfri').textContent= 'Unavailable';
          break;
    }
    alert("form successfully submitted");
    return false;
}

$(document).ready(function(){
  $("#change").click(function(){
    $("#quote2").toggle();
    $("#quote1").toggle();
  });});
});