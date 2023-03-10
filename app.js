const colors = {
	Reaction :{
        text : "hsl(0, 100%, 67%)",
        bg : "hsla(0, 100%, 67% , .05)"
    },
    Memory : {
        text : "hsl(39, 100%, 56%)",
        bg : "hsla(39, 100%, 56% , .05)"
    },
    Verbal: {
        text : "hsl(166, 100%, 37%)",
        bg : "hsla(166, 100%, 37% , .05)"
    },
    Visual : {
        text : "hsl(234, 85%, 45%)",
        bg : "hsla(234, 85%, 45% , .05)"
    }
};

window.addEventListener("DOMContentLoaded", async () => {
    const statsList = document.getElementById("stats-list");
    const score = document.getElementById("score");
	const data = await (await fetch("data.json")).json();

    let total = 0;

	if (!statsList || !data || !score) throw new Error();
    
    //Set data 
	data.forEach((element) => {

        total += element.score;

		statsList.innerHTML += getItem(element.icon , element.category , element.score);

	});
    score.textContent =  Math.floor(total / data.length);
});


function getItem(icon , category , score){
    return (
    `<li class="stats__item" style="background-color : ${colors[category].bg};">
        <span class="stats__title" style="color : ${colors[category].text};">
            <img src=${icon} alt="brain icon"> ${category}
        </span>
        <span class="stats__value">
            <span>${score}</span>
            <span class="stats__max-value"> / 100</span>
        </span>
    </li>`
    );
}
