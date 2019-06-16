// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAt1aqeIc_8h5MJvPpfuYEhknV2W2v8inI",
    authDomain: "fir-go-d8bbf.firebaseapp.com",
    databaseURL: "https://fir-go-d8bbf.firebaseio.com",
    projectId: "fir-go-d8bbf",
    storageBucket: "fir-go-d8bbf.appspot.com",
    messagingSenderId: "1045580147572",
    appId: "1:1045580147572:web:d3335c7488ad0303"
  };
  firebase.initializeApp(firebaseConfig);

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();
	//get values
	var name = getValues('name');
	var prenom = getValues('prenom');
	var email = getValues('email');
	var tel = getValues('tel');
	var sujet = getValues('sujet');
	var message = getValues('message');

	send(name,prenom,email,tel,sujet,message);  

		document.getElementById('contactForm').reset();	
}

function getValues(id){return document.getElementById(id).value;}

var feedbacks = firebase.database().ref('feedbacks');

function send(name,prenom,email,tel,sujet,message){
	var feedback = feedbacks.push();
	feedback.set({
		Nom: name,
		prenom: prenom,
		email: email,
		tel: tel,
		sujet:sujet,
		message:message
	});
}

	var starCountRef = firebase.database().ref('feedbacks');
	starCountRef.on('value', function(snapshot) 
	{
		snapshot.forEach(function(childNodes){
  		var x=childNodes.val().prenom
  		console.log(x)
  	})
  }

  	);
