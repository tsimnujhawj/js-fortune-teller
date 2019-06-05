window.onload = ()=> {
    const fortuneArray = [
        "Yes, that will happen...",
        "NO! You better not do that.",
        "Maybe, try again...",
        "I'm not sure, I understand...",
        "Yes, definitely!",
        "Maybe, I don't know, can you repeat the question?",
        "Shazaam boy/girl!"
    ]

    let button = document.createElement("button");
    button.innerHTML = "CLICK";
    document.getElementsByClassName("fortune-btn")[0].appendChild(button);

    button.addEventListener("click", ()=> {
        const randomNumber = Math.floor(Math.random() * 7);
        const word = fortuneArray[randomNumber]
        document.getElementById("fortune-text").innerHTML = word;
    })

}