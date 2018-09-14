//creating function
function githubData() {
  var url = "https://api.github.com/users/mmadhuparna";
  //fetching data from github
  fetch(url).then(response=>response.json())
  .then(function(result){
   console.log(result)
   document.querySelector('p').innerText = JSON.stringify(result);
  });
}
//adding event to button
document.querySelector('input').addEventListener('click', githubData);