function ageinday(){
  let age=prompt("plz put birth year");
  let totalday=(2021-age)*365;
  console.log(totalday)
  var h1=document.createElement('h1');
  var textin=document.createTextNode('you are'+ totalday +'day of old')
  h1.setAttribute('id','ageinday');
  h1.appendChild(textin);
  document.getElementById('flex-result').appendChild(h1);
 
}

function reset(){
  document.getElementById('ageinday').remove();
}