var count=1

function select(input) {
  if (count < 10) {
    if (count % 2 === 0) {
      document.getElementById(input.id).className = 'used1'
  }
  else {
    document.getElementById(input.id).className = 'used2'
  }
  count+=1
  }
}
