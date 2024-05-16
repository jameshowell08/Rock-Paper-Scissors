const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user-result img"),
cpuResult = document.querySelector(".cpu-result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option-image");

const userScoreInfo = document.getElementById("userScore");
const cpuScoreInfo = document.getElementById("cpuScore");
let userScores = 0;
let cpuScores = 0;
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });
        const Changes = () => {
            setTimeout(() => {
                userResult.src = cpuResult.src = "assets/rock.png";
                result.textContent="Ready!";
            }, 0);
            setTimeout(() => {
                userResult.src = cpuResult.src = "assets/paper.png";
                result.textContent="set!";
            }, 1000);
            setTimeout(() => {
                userResult.src = cpuResult.src = "assets/scissors.png";
                result.textContent="go!";
            }, 2000);   
        } 
        Changes();
        gameContainer.classList.add("start");
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["assets/rock.png", "assets/paper.png", "assets/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];
            let cpuValue = ["R","P","S"][randomNumber];
            let userValue = ["R","P","S"][index];
            let outcomes ={
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };
            let outComeValue = outcomes[userValue+cpuValue];
            let resultText = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
            result.textContent = resultText;
            switch(resultText){
                case "User Won!!":
                    userScores++;
                    break;
                case "Cpu Won!!":
                    cpuScores++;
                    break;
            }
            console.log(userScores , cpuScores);
            userScoreInfo.textContent = userScores;
            cpuScoreInfo.textContent = cpuScores;
       },3000)
    });
});