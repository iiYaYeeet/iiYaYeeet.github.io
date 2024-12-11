	var totalviews;
	var totaldownloads;
	const oldElement = document.getElementById("views");
	const newElement = document.createElement("div");	
	const view =[];
	const downs =[];
	function pullapi() {
	fetch("https://cors-anywhere.herokuapp.com/https://itch.io/api/1/98EDYuzPNLo22ofUPRd4IH4vFYlVQLlesraGAwYK/my-games",)
	.then(res => {
	return res.json();
	})
		.then(data=>{
		data.games.forEach(object => {
        var views = object.views_count;
        var dowloads = object.downloads_count;
		view.push(views);
		downs.push(dowloads);
	})
		const totalviews = view.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		const totaldownloads = downs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		console.log(totalviews);
		console.log(totaldownloads);
		replacedata(totalviews,totaldownloads);
	})
	}
	function replacedata(v,d) {
		const values = document.getElementsByClassName("displays")[0];
		values.getElementsByClassName("views")[0].innerHTML = v;
		values.getElementsByClassName("downloads")[0].innerHTML = d;
	}