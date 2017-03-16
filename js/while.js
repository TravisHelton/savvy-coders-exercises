var i = 0;
var words=["big","pew","lasers","cranberry"];
while(i < words.length){

  console.log(words[i]);
  i++;

}
console.log("PEWPEW");
var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";

while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;
