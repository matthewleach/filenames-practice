
// Display current year within the copyright

var now = new Date();

function fourdigits(number) {
  return (number < 1000) ? number + 1900 : number;
}

document.getElementById('copyright').innerHTML = "Copyright &copy; " + fourdigits(now.getYear());