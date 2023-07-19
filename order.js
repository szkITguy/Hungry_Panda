var counter1=0;
var counter2=0;
var counter3=0;
var counter4=0;
var counter5=0;
var counter6=0;
var counter7=0;
var counter8=0;
var counter9=0;
var counter10=0;

function itm1(){
	counter1++;
	document.getElementById("b1").style.backgroundColor="#90ee90";
	document.getElementById("b1").style.color="white";
}

function itm2(){
	counter2++;
	document.getElementById("b2").style.backgroundColor="#90ee90";
	document.getElementById("b2").style.color="white";
}

function itm3(){
	counter3++;
	document.getElementById("b3").style.backgroundColor="#90ee90";
	document.getElementById("b3").style.color="white";
}

function itm4(){
	counter4++;
	document.getElementById("b4").style.backgroundColor="#90ee90";
	document.getElementById("b4").style.color="white";
}

function itm5(){
	counter5++;
	document.getElementById("b5").style.backgroundColor="#90ee90";
	document.getElementById("b5").style.color="white";
}

function itm6(){
	counter6++;
	document.getElementById("b6").style.backgroundColor="#90ee90";
	document.getElementById("b6").style.color="white";
}

function itm7(){
	counter7++;
	document.getElementById("b7").style.backgroundColor="#90ee90";
	document.getElementById("b7").style.color="white";
}

function itm8(){
	counter8++;
	document.getElementById("b8").style.backgroundColor="#90ee90";
	document.getElementById("b8").style.color="white";
}

function itm9(){
	counter9++;
	document.getElementById("b9").style.backgroundColor="#90ee90";
	document.getElementById("b9").style.color="white";
}

function itm10(){
	counter10++;
	document.getElementById("b10").style.backgroundColor="#90ee90";
	document.getElementById("b10").style.color="white";
}


function calst()
{
	if(counter1==0 && counter2==0 && counter3==0 && counter4==0 && counter5==0)
	{
		alert("No Items Selected !");
	}
	else
	{
		var item1=document.getElementById("cb1").innerText;
		var p1=document.getElementById("p1").innerText;
		var price1=p1.replace(/\D/g, "");	
	
		var item2=document.getElementById("vb2").innerText;
		var p2=document.getElementById("p2").innerText;
		var price2=p2.replace(/\D/g, "");

		var item3=document.getElementById("pb3").innerText;
		var p3=document.getElementById("p3").innerText;
		var price3=p3.replace(/\D/g, "");

		var item4=document.getElementById("gr4").innerText;
		var p4=document.getElementById("p4").innerText;
		var price4=p4.replace(/\D/g, "");

		var item5=document.getElementById("vc5").innerText;
		var p5=document.getElementById("p5").innerText;
		var price5=p5.replace(/\D/g, "");


		if(counter1>0)
		{
			var t1=document.getElementById("t1").value;
		}
		else
		{
			var t1=0;
		}

		if(counter2>0)
		{
			var t2=document.getElementById("t2").value;
		}
		else
		{
			var t2=0;
		}
	
		if(counter3>0)
		{
			var t3=document.getElementById("t3").value;
		}
		else
		{
			var t3=0;
		}
	
		if(counter4>0)
		{
			var t4=document.getElementById("t4").value;
		}
		else
		{
			var t4=0;
		}

		if(counter5>0)
		{
			var t5=document.getElementById("t5").value;
		}
		else
		{
			var t5=0;
		}


		var res=price1*eval(t1)+price2*eval(t2)+price3*eval(t3)+price4*eval(t4)+price5*eval(t5);
		alert("Total= "+res);


		document.write("<style>");
		document.write("tr{font-size:30;background:white;}");
		document.write("</style>");
		document.write("<center>");
		document.write("<table border='1' style='width:600'>");

		document.write("<tr style='background:#8f512f;color:white'>");
		document.write("<th> Item </th><th> Price </th><th> Qty </th><th> Total </th></tr>");

		if(counter1>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item1+ " </td><td> "+p1+" </td><td> "+t1+" </td><td> " +price1*t1+ " </td>");
			document.write ("</tr>");
		}

		if(counter2>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item2+ " </td><td> "+p2+" </td><td> "+t2+" </td><td> " +price2*t2+ " </td>");
			document.write ("</tr>");
		}

		if(counter3>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item3+ " </td><td> "+p3+" </td><td> "+t3+" </td><td> " +price3*t3+ " </td>");
			document.write ("</tr>");
		}


		if(counter4>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item4+ " </td><td> "+p4+" </td><td> "+t4+" </td><td> " +price4*t4+ " </td>");
			document.write ("</tr>");
		}

		if(counter5>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item5+ " </td><td> "+p5+" </td><td> "+t5+" </td><td> " +price5*t5+ " </td>");
			document.write ("</tr>");
		}

		document.write ("<tr>");
		document.write ("<td></td><td></td><td></td><td>₹ "+res+" </td>");
		document.write ("</tr>");

		document.write("</table>");


	}
}


function calmc()
{

	if(counter6==0 && counter7==0 && counter8==0 && counter9==0 && counter10==0)
	{
		alert("No Items Selected !");
	}
	else
	{

		var item6=document.getElementById("mc6").innerText;
		var p6=document.getElementById("p6").innerText;
		var price6=p6.replace(/\D/g, "");

		var item7=document.getElementById("mk7").innerText;
		var p7=document.getElementById("p7").innerText;
		var price7=p7.replace(/\D/g, "");

		var item8=document.getElementById("pn8").innerText;
		var p8=document.getElementById("p8").innerText;
		var price8=p8.replace(/\D/g, "");

		var item9=document.getElementById("pv9").innerText;
		var p9=document.getElementById("p9").innerText;
		var price9=p9.replace(/\D/g, "");

		var item10=document.getElementById("fr10").innerText;
		var p10=document.getElementById("p10").innerText;
		var price10=p10.replace(/\D/g, "");
	

		if(counter6>0)
		{
			var t6=document.getElementById("t6").value;
		}
		else
		{
			var t6=0;
		}

		if(counter7>0)
		{
			var t7=document.getElementById("t7").value;
		}
		else
		{
			var t7=0;
		}
	
		if(counter8>0)
		{
			var t8=document.getElementById("t8").value;
		}
		else
		{
			var t8=0;
		}
	
		if(counter9>0)
		{
			var t9=document.getElementById("t9").value;
		}
		else
		{
			var t9=0;
		}

		if(counter10>0)
		{
			var t10=document.getElementById("t10").value;
		}
		else
		{
			var t10=0;
		}


		var res=price6*eval(t6)+price7*eval(t7)+price8*eval(t8)+price9*eval(t9)+price10*eval(t10);
		alert("Total= "+res);


		document.write("<style>");
		document.write("tr{font-size:30;background:white;}");
		document.write("</style>");
		document.write("<center>");
		document.write("<table border='1' style='width:600'>");

		document.write("<tr style='background:#8f512f;color:white'>");
		document.write("<th> Item </th><th> Price </th><th> Qty </th><th> Total </th></tr>");

		if(counter6>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item6+ " </td><td> "+p6+" </td><td> "+t6+" </td><td> " +price6*t6+ " </td>");
			document.write ("</tr>");
		}

		if(counter7>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item7+ " </td><td> "+p7+" </td><td> "+t7+" </td><td> " +price7*t7+ " </td>");
			document.write ("</tr>");
		}

		if(counter8>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item8+ " </td><td> "+p8+" </td><td> "+t8+" </td><td> " +price8*t8+ " </td>");
			document.write ("</tr>");
		}

		if(counter9>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item9+ " </td><td> "+p9+" </td><td> "+t9+" </td><td> " +price9*t9+ " </td>");
			document.write ("</tr>");
		}

		if(counter10>0)
		{
			document.write ("<tr>");
			document.write ("<td> " +item10+ " </td><td> "+p10+" </td><td> "+t10+" </td><td> " +price10*t10+ " </td>");
			document.write ("</tr>");
		}

		document.write ("<tr>");
		document.write ("<td></td><td></td><td></td><td>₹ "+res+" </td>");
		document.write ("</tr>");

		document.write("</table>");
	}
}




