var gen;
const list=[];

function validate()
{
	var nn=document.f1.name.value;
	var em=document.f1.email.value;
	var msg=document.f1.comments.value;
	var ph=document.f1.phone.value;

	if(nn=="")
		{
			alert("Enter Name!");
			document.f1.name.focus();
		}
		else
	if(em=="")
		{
			alert("Enter Email!");
			document.f1.email.focus();
		}
		else
	if(ph!="" && ph.length!=10)
		{
			
			alert("Invalid Phone Number!");
			document.f1.phone.focus();
		}
		else
	if(msg=="")
		{
			alert("Enter Message!");
			document.f1.comments.focus();
		}
		else
	if(document.getElementById("m").checked==true || document.getElementById("f").checked==true)
		{	
		
				if(document.getElementById("m").checked==true)
					{
						gen="Male";
					}
					else
					{
						gen="Female";
					}

		if(document.getElementById("c1").checked==true)
		{
			list.push("Starters");

		}	

		if(document.getElementById("c2").checked==true)
		{
			list.push("Main course");
			
		}	

		if(document.getElementById("c3").checked==true)
		{
			list.push("Dessert");
			
		}	

		sendEmail();
		}
		else
		{
			alert("Select Gender !");
		}	

}


function sendEmail()
{
	var nn=document.f1.name.value;
	var em=document.f1.email.value;
	var msg=document.f1.comments.value;

	if(ph!="")
		{
			var ph=document.f1.phone.value;
		}
		else
		{
			var ph="Not provided";
		}


	
	Email.send({
			Host:"smtp.gmail.com",
			Username:"shauzab23@gmail.com",
			Password:"vqqdkcoltcwnqicv",
			To:em,
			From:"shauzab23@gmail.com",
			Subject:"Feedback",
			Body:"Name: "+nn+"<br>Message: "+msg+"<br>Phone: "+ph+"<br>Gender: "+gen+"<br>Food Ordered: "+list,		
		}).then(message=>alert("Mail sent successfully"))	
}