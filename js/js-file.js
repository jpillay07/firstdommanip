const container = document.querySelector("#container");// stores a reference to the element with ID = "container"

const redText = document.createElement("p");//Create a p tag and set the contents to "Hey Im red!", make text red and add to container
redText.setAttribute("class", "red-text");
redText.style.color = "red";
redText.innerText = "Hey I'm red!";
container.appendChild(redText);

const blueText = document.createElement("h3");//Create a h3 tag and set the contents to "hey I'm a blue h3!", make text blue and add to container
blueText.setAttribute("class", "blue-text");
blueText.innerText = "Hey I'm a blue h3!";
blueText.style.color = "blue";
container.appendChild(blueText);

const blackPink = document.createElement("div");//Create a div tag with pink background and black border
blackPink.setAttribute("class", "black-pink");
blackPink.style.cssText = "background-color: pink; border-style: solid; border-color: black;"

const hOneInADiv = document.createElement("h1");//Create a h1 tag and set the contents to "Im in a div!"
hOneInADiv.innerText = "I'm in a Div!";

const pInADiv = document.createElement("p");//Create a p tag and set the contents to "ME TOO!"
pInADiv.innerText = "ME TOO!";

blackPink.appendChild(hOneInADiv);//add the h1 and p to black pink div
blackPink.appendChild(pInADiv);

container.appendChild(blackPink);//add black pink div to container




