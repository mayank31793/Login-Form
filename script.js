function open(){
	document.getElementById('page1').style.display="inline";
	document.getElementById('page2').style.display="none";
	document.getElementById('page3').style.display="none";

	document.getElementById('formDetailsId').style.height = 
	document.getElementById('myFormId').clientHeight;	
}

open();

function page2content(){
	document.getElementById('page3').style.display="none";
	document.getElementById('page1').style.display="none";
	document.getElementById('page2').style.display="inline";
}

function page3content(){
	document.getElementById('page3').style.display="inline";
	document.getElementById('page1').style.display="none";
	document.getElementById('page2').style.display="none";
}

function page1(){
	open();
}

function page2(){

	var fname = document.forms["formDetails"]["fname"].value;
	var lname = document.forms["formDetails"]["lname"].value;
	var age = document.forms["formDetails"]["age"].value;
	var phonenumber = document.forms["formDetails"]["phonenumber"].value;
	var address = document.forms["formDetails2"]["address"].value;
	var city = document.forms["formDetails2"]["city"].value;
	var zipcode = document.forms["formDetails2"]["zipcode"].value;
    var email = document.forms["formDetails"]["email"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
	
	if(fname==""){
		console.log("fname be empty");
		document.getElementById('errfname').style.opacity = '1';
		setTimeout(function () {document.getElementById('errfname').style.opacity='0'}, 2000);
		open();		
	}

	else if(lname==""){
		console.log("lname be empty");
		document.getElementById('errlname').style.opacity = '1';
		setTimeout(function () {document.getElementById('errlname').style.opacity='0'}, 2000);
		open();		
	}

    else if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        console.log("Not a valid e-mail address");
        document.getElementById('erremail').style.opacity = '1';
        setTimeout(function () {document.getElementById('erremail').style.opacity='0'}, 2000);
        return false;
        open();
    }

	else if(age==""){
		console.log("age be empty");
		document.getElementById('errage').style.opacity = '1';
		setTimeout(function () {document.getElementById('errage').style.opacity='0'}, 2000);
		open();		
	}

	else if(phonenumber==""){
		console.log("phonenumber be empty");
		document.getElementById('errphone').style.opacity = '1';
		setTimeout(function () {document.getElementById('errphone').style.opacity='0'}, 2000);
		open();		
	}	

	else{
		page2content();
	}
}

function page3(){
	var address = document.forms["formDetails2"]["address"].value;
	var city = document.forms["formDetails2"]["city"].value;
	var zipcode = document.forms["formDetails2"]["zipcode"].value;
	if(address==""){
		console.log("address be empty");
		document.getElementById('erraddress').style.opacity = '1';
		setTimeout(function () {document.getElementById('erraddress').style.opacity='0'}, 2000);
		page2content();		
	}
	else if(city==""){
		console.log("city be empty");
		document.getElementById('errcity').style.opacity = '1';
		setTimeout(function () {document.getElementById('errcity').style.opacity='0'}, 2000);
		page2content();	
	}
	else if(zipcode==""){
		console.log("zipcode be empty");
		document.getElementById('errzipcode').style.opacity = '1';
		setTimeout(function () {document.getElementById('errzipcode').style.opacity='0'}, 2000);
		page2content();	
	}	
	else{
		page3content();
	}
}

function submitForm(){
	if(document.getElementById('termsCheckbox').checked){
		console.log('form submit');
		document.getElementById('formBegin').style.display='none';
		document.getElementById('formBegin2').style.display='inline';
	}	
	else{
		alert('Accept terms and conditions');
	}
}

function funthis(a){
	// console.log(a)
	document.getElementById('selectCountry').innerHTML = a.innerHTML;
}

