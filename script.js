function show(var1) {
  console.log(var1)
  
  document.getElementById("homepage").style.display = "none"
  document.getElementById("div1").style.display = "none"
  document.getElementById("div2").style.display = "none"
  document.getElementById("div3").style.display = "none"
  document.getElementById("div4").style.display = "none"
  document.getElementById("div5").style.display = "none"

  document.getElementById(var1).style.display = "block"
}
