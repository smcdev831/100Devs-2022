document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  if (day === "WEDNESDAY"){
    alert("Humpdaaaaaaaaaay!")
  }else if (day === "SATURDAY" || day === "SUNDAY"){
    alert("It's the weekend")
  }else if (day === "TUESDAY" || day === "THURSDAY"){
    alert("Class today!")
  }else{
    alert("It's just a boring day")
  }
}
