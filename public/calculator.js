
function percent(){
  var x = document.getElementsByClassName('numerator');
  var y = document.getElementsByClassName('denominator');
  for (var i = 0;i <x.length; i++){
    if(x[i].value ===""){
      document.getElementsByClassName('result')[i].innerHTML = "";
    }
    var percent = parseFloat(x[i].value,10)/parseFloat(y[i].value,10);
    if (!isNaN(percent)){
      document.getElementsByClassName('result')[i].innerHTML = (percent*100).toFixed(2) + "%";
    }
  }
}

function addActivity(){
  var table = document.getElementsByClassName('table');
  table[0].insertRow();
  var lastRow = table[0].rows.length -1;
  for(var i = 0; i<5; i++){
    table[0].rows[lastRow].insertCell();
  }
  table[0].rows[lastRow].cells[0].innerHTML = "<p class='name' onclick='changeName()'> Activity " + lastRow + "</p>";

  table[0].rows[lastRow].cells[1].innerHTML = "<p class='short_name' onclick='changeName()'> A" + lastRow + "</p>";
  table[0].rows[lastRow].cells[2].innerHTML = "<input type='text' class='weighted'>";
  table[0].rows[lastRow].cells[3].innerHTML = "<input type='text' class='numerator' oninput='percent()'>" + "/" +"<br>" +
      "<input type='text' class='denominator' oninput='percent()'></td>";
  table[0].rows[lastRow].cells[4].className = "result";


}

function mean(){
  var results = document.getElementsByClassName('result');
  var sum = 0;
  var total = 0 ;
  for (var i=0; i<results.length; i++){
    var num = parseFloat(results[i].innerHTML.slice(0,-1));
    if (!isNaN(num)){
      sum += num;
      total += 1;
    }
  }
  var final = (sum/total).toFixed(2);
  if (!isNaN(final)){
    document.getElementById('final_result').innerHTML = final + "%";

  }
}

function weighted(){
  var weights = document.getElementsByClassName('weighted');
  var results = document.getElementsByClassName('result');
  var total = 0;
  var sum = 0;
  for (var i = 0; i < results.length; i++){
    var num = parseFloat(weights[i].value)*parseFloat(results[i].innerHTML.slice(0,-1));
    if (!isNaN(num)){
      sum += num;
      total += parseFloat(weights[i].value);
    }

  }
  var final = (sum/total).toFixed(2);
  if (!isNaN(final)){
    document.getElementById('final_result').innerHTML = final + "%";
  }
}

function changeName(){
  var name = document.getElementsByClassName('name');
  var short_name = document.getElementsByClassName('short_name');
  for(var i = 0; i< name.length; i++){
    name[i].addEventListener('click', change, false);
    name[i].addEventListener('blur', changeback, false);
    short_name[i].addEventListener('click', change, false);
    short_name[i].addEventListener('blur', changeback, false);
  }

  function change(){
    this.setAttribute('contenteditable', 'true');
    this.focus();
  }
  function changeback(){
    this.removeAttribute('contenteditable');
  }

}
