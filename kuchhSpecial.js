let mainBox = document.getElementById("main");
let plus = document.getElementById("plus");
let container = document.getElementsByClassName("container");

mainBox.addEventListener("click",() => {
    mainBox.style.height = 'auto';
    mainBox.style.display = 'inline-block';
    mainBox.style.fontSize = '20px'
    mainBox.innerHTML = '<p> What is NetFlix? <br><br><br><br><br> Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> Consectetur voluptatibus quo reiciendis illo sapiente esse<br> possimus assumenda natus neque quidem?Lorem ipsum dolor sit <br>amet consectetur, adipisicing elit. Consectetur<br> voluptatibus quo reiciendis illo sapiente esse possimus <br> assumenda natus neque quidem?</p>'
});
plus.addEventListener("click",() => {
    mainBox.style.height = 'auto';
    mainBox.style.display = 'inline-block';
    mainBox.style.fontSize = '20px'
    plus.style.display = 'inline-block';
    plus.style.marginTop = '25px'
    mainBox.innerHTML = '<p> What is NetFlix? <br><br><br><br><br> Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br> Consectetur voluptatibus quo reiciendis illo sapiente esse<br> possimus assumenda natus neque quidem?Lorem ipsum dolor sit <br>amet consectetur, adipisicing elit. Consectetur<br> voluptatibus quo reiciendis illo sapiente esse possimus <br> assumenda natus neque quidem?</p>'
});

