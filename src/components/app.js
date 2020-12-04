var input, filter, smain, div, td, i, txtValue;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
smain = document.getElementById("smain");
div = smain.getElementsByTagName("div");
for (i = 0; i < div.length; i++) {
  td = div[i].getElementsByTagName("p")[0];
  if (td) {
    txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}