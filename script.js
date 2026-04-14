let div = document.createElement("div");
document.body.appendChild(div);
div.classList.add("parent");

let heading = document.createElement("h1");
heading.innerText = "Todolist";
div.appendChild(heading);
heading.style.textAlign = "center";
heading.style.fontSize = "50px";
heading.style.color = "white";
heading.style.marginBottom = "15px";

let para = document.createElement("p");
para.innerHTML = "Each day I will accomplish one thing on my todo <br> list.";
div.appendChild(para);
para.style.color = "white";
para.style.fontSize = "17px";
para.style.textAlign = "center";

let text = document.createElement("h4");
text.innerText = "Read a Book";
div.appendChild(text);
text.style.color = "white";
text.style.fontSize = "20px";
text.style.marginTop = "10px";
text.style.marginBottom = "10px";
text.style.marginLeft = "470px";

let para2 = document.createElement("p");
para2.innerHTML = "I don't think that the human race will survive the <br> next thousand years, unless we spread into space.<br> There are too many accidents that can befall life on <br>a single Planet. But I'm optimist....<br>";
div.appendChild(para2);
para2.style.display = "flex";
para2.style.justifyContent = "center";
para2.style.marginBottom = "30px";

let div2 = document.createElement("div");
div.appendChild(div2);
div2.style.textAlign = "center";

let btn = document.createElement("button");
btn.innerText = "Start";
div2.appendChild(btn);
btn.style.backgroundColor = "orange";
btn.style.padding = "7px 20px";
btn.style.color = "white";
btn.style.borderRadius ="2px";
btn.style.cursor = "pointer";
btn.style.fontWeight = "bold";
btn.style.fontSize = "16px";

let para3 = document.createElement("p");
para3.innerText = "Don't Skip Introduction";
para3.style.textDecoration = "underline";
div.appendChild(para3);
para3.style.textAlign = "center";
para3.style.marginTop = "10px";


