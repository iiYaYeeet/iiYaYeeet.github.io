	var totalviews;
	var totaldownloads;
	const oldElement = document.getElementById("views");
	const newElement = document.createElement("div");	
	var view =[];
	var downs =[];
	//pull from api
	function pullapi() {
	totalviews=0;
	totaldownloads=0;
	fetch("https://cors-anywhere.herokuapp.com/https://itch.io/api/1/98EDYuzPNLo22ofUPRd4IH4vFYlVQLlesraGAwYK/my-games",)
	.then(res => {
	return res.json();
	})
	//filter data
		.then(data=>{
		data.games.forEach(object => {
        var views = object.views_count;
        var dowloads = object.downloads_count;
		view.push(views);
		downs.push(dowloads);
	})
	//concentrate
		totalviews = view.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		totaldownloads = downs.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		view =[];
        downs =[];
		console.log(totalviews);
		console.log(totaldownloads);
		replacedata(totalviews,totaldownloads);
	})
	.catch(error=>console.log(error));
	}
	//push it out
	function replacedata(v,d) {
		const values = document.getElementsByClassName("displays")[0];
		values.getElementsByClassName("views")[0].innerHTML = v;
		values.getElementsByClassName("views")[1].innerHTML = d;
	}
	function clear()
	{
		totalviews=0;
		totaldownloads=0;
	}
	
	function validate()
	{
		let name = document.getElementById("name").value;
		let email = document.getElementById("email").value;
		let phone = document.getElementById("phone").value;

		// name check
		if (name === "")
		{
			alert("Enter a name.");
			return false;
		}

		// email check
		if (!validateEmail(email))
		{
		alert("Enter a valid email address.");
		return false;
		}
		
		// phone check
		if (!validatephone(phone))
		{
		alert("Enter a valid phone number.");
		return false;
		}
		
		function validateEmail(email)
		{
			// validate email
			const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return re.test(email);
		}
		function validatephone(phone)
		{
			// validate phone
			const re = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g;
			return re.test(phone);
		}
		// Form is valid
		return true;
	}