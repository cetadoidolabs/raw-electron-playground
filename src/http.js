document.getElementById('get-dogs-facts').addEventListener('click', async () => {
  window.fetch('http://dog-api.kinduff.com/api/facts?number=5')
    .then(response => response.json())
    .then(data => {
      console.log('**** ', data);

      data.facts.forEach((fact) => {
        const liNode = document.createElement("li");
        const textnode = document.createTextNode(`${fact}`);
        liNode.appendChild(textnode);
        document.getElementById("dogs-facts-list").appendChild(liNode);        
      })
    });
})

document.getElementById('clear-dogs-facts').addEventListener('click', async () => {
  document.getElementById("dogs-facts-list").innerHTML = '';        
})