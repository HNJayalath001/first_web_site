function loadData(name)

{
	if(name=="btn1")
	{
		document.getElementById("para").innerHTML = "Cinnamon Lakeside Chicken Biryani Sawan<br/>price 1000.00";
		
	}
	else if(name == "btn2")
	{
		document.getElementById("para").innerHTML = "Sawan- Chicken Biriyani 8 Pax<br/>price 1000.00";
	
	}
	else if(name == "btn3")
	{
		document.getElementById("para").innerHTML = "Sawan- Chicken Biriyani 4 Pax<br/>price 1000.00";

	}
	else if(name == "btn4")
	{
		document.getElementById("para").innerHTML = "Cinnamon Grand Chicken Biryani Sawan<br/>price 1000.00";

	}
	else if(name == "btn5")
	{
		document.getElementById("para").innerHTML = "Cinnamon Grand Chicken Biryani Sawan<br/>price 1000.00";

	}
	else if(name == "btn6")
	{
		document.getElementById("para").innerHTML = "Vegetable Biriyani sawan<br/>price 1000.00";

	}

	else
	{
		alert("Invalid");
	}
}

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';
document.getElementById('greetings').innerHTML ='<b>' + greet + '</b>';
loadData