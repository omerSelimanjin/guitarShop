function ValidateMail(mail) {
  var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  return regex.test(mail);
}

function ValidateName(name){
    var regex = /^[a-zA-Z ]{2,30}$/;
    return regex.test(name);
}

function ValidateContact(){
    var errorLabel = document.getElementById('errorLabel');
    var errorName = false;
    var errorMail = false;
    var errorText = false;
    var anyError = false;
    var nameField = document.getElementById('input-32');
    var mailField = document.getElementById('input-33');
    var textField = document.getElementById('input-34');
    if(!ValidateName(nameField.value)){
        errorLabel.innerHTML = 'One or more fields are not valid.';
        errorName = true;
    }
    else{
        errorLabel.innerHTML = '';
        errorName = false;
    }
    if(!ValidateMail(mailField.value)){
        errorLabel.innerHTML = 'One or more fields are not valid.';
        errorMail = true;
    }
    else{
        errorLabel.innerHTML = '';
        errorMail = false;
    }
    if(textField.value == '' || textField.value > 200){
        errorLabel.innerHTML = 'One or more fields are not valid.';
        errorText = true;
    }
    else{
        errorLabel.innerHTML = '';
        errorText = false;
    }
    anyError = errorName || errorMail || errorText;

    if(!anyError){
        // do something
    }
}

var selectedGuitar;
var availableProducts = ["gibson-les-paul", "esp-custom", "esp-jh", "esp-kh2", "esp-willie"];

function productInit(){
    if(selectedGuitar==null || selectedGuitar==undefined){
        selectedGuitar="gibson-les-paul";
    }
    var remainingProducts = [];
    for(var i=0; i<availableProducts.length; i++){
        if(availableProducts[i]!=selectedGuitar)
            remainingProducts.push(availableProducts[i]);
    }
    document.getElementById('text-header').innerHTML = formatSelectedGuitar();

	var xhr= new XMLHttpRequest();
	xhr.open('GET', selectedGuitar + '.txt', true);
	xhr.onreadystatechange= function() {
		if (this.readyState!==4) return;
		if (this.status!==200) return;
		document.getElementById('product-text').innerHTML= this.responseText;
        document.getElementById('product-image-modal').src = selectedGuitar+'.jpg';
        document.getElementById('product-image-full').src = selectedGuitar+'.jpg';
        document.getElementById('img1').src = remainingProducts[0] + '.jpg';
        document.getElementById('img2').src = remainingProducts[1] + '.jpg';
        document.getElementById('img3').src = remainingProducts[2] + '.jpg';
        document.getElementById('img4').src = remainingProducts[3] + '.jpg';
	};
	xhr.send();
}

function formatSelectedGuitar(){
    var pov = selectedGuitar.replace(/-/g, ' ');
    return pov.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

document.onkeyup = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        var modal = document.getElementById('fsmodal');
       // modal.classList.add('sakrij');
    }
};

function img1Click(){
    var img = document.getElementById('img1');
    selectedGuitar = img.src.substr(21, img.src.length-25);
    productInit();
    
}

function img2Click(){
    var img = document.getElementById('img2');
    selectedGuitar = img.src.substr(21, img.src.length-25);
    productInit();
}

function img3Click(){
    var img = document.getElementById('img3');
    selectedGuitar = img.src.substr(21, img.src.length-25);
    productInit();
}

function img4Click(){
    var img = document.getElementById('img4');
    selectedGuitar = img.src.substr(21, img.src.length-25);
    productInit();
}

function showVisible(){
    var modal = document.getElementById('fsmodal');
    modal.classList.remove('sakrij');
   // modal.classList.add('show');
}