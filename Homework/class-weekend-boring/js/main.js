document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day.upcase === "WEDNESDAY"){
    alert("Humpdaaaaaaaaaay!")
  }else if (day.upcase === "SATURDAY" || day.upcase === "SUNDAY"){
    alert("It's the weekend")
  }else if (day.upcase === "TUESDAY" || day.upcase === "THURSDAY"){
    alert("Class today!")
  }else{
    alert("It's just a boring day")
  }
}
