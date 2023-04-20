// credit card 
let visa = document.getElementById("visa")
let card = document.querySelectorAll(".cardNumber")
visa.addEventListener('change', function () {
  if (visa.value == 'visa') {
    for (let i = 0; i < card.length; i++) {
      card[i].style.display = 'block';
      card[i].style.visibility = 'visible'
    }
  } else {
    for (let i = 0; i < card.length; i++) {
      card[i].style.display = 'none';
      card[i].style.visibility = 'hidden'

    }
  }
})

// suite and hall code
let suite = document.getElementById("roomType")
let room = document.querySelectorAll(".Room")
let hall = document.querySelectorAll(".hall")
let bed = document.querySelectorAll("#bed")
suite.addEventListener("change", function () {
  if (suite.value == 'suite') {
    for (let i = 0; i < room.length; i++) {
      room[i].style.display = 'block';
      room[i].style.visibility = 'visible'
      hall[i].style.display = 'none';
      hall[i].style.visibility = 'hidden'
    }
  } else if (suite.value == 'hall') {
    for (let i = 0; i < hall.length; i++) {
      hall[i].style.display = 'block';
      hall[i].style.visibility = 'visible'
      room[i].style.display = 'none';
      room[i].style.visibility = 'hidden'
      bed[i].style.visibility = "hidden";
      bed[i].style.display = 'none'
    }
  } else {
    for (let i = 0; i < room.length; i++) {
      hall[i].style.display = 'none';
      hall[i].style.visibility = 'hidden'
      room[i].style.display = 'none';
      room[i].style.visibility = 'hidden'
    }
  }
})