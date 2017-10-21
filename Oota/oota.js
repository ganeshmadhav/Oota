function openCity(evt, featureName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(featureName).style.display = "block";
    evt.currentTarget.className += " active";
    if(featureName == "Trending"){
    	var display = document.getElementById("display_id");
    	display.innerHTML = "";
    	displayFire();
    }
}

function dragFire(){
	var dropzone = document.getElementById('dropzoneid');

	var displayUploads = function(data) {
		/*var uploads = document.getElementById('uploads');*/
	}
	var upload = function(files){
		var formdata = new FormData(),
		xhr = new XMLHttpRequest(),
		x;
		for(x =0; x < files.length; x = x+1){
			formdata.append('file[]', files[x]);
		}

		xhr.onload = function() {
			var data = JSON.parse(this.responseText);

			console.log(data);
		}
		xhr.open('post', 'upload.php');
		xhr.send(formdata);	
	}

	dropzone.ondrop = function(e){
		e.preventDefault();
		this.className = 'dropzone';
		upload(e.dataTransfer.files);
	}

	dropzone.ondragover = function(){

		this.className = 'dropzone dragover';
		return false;
	}

	dropzone.ondragleave = function(){
		this.className = 'dropzone';
		return false;
	}
}
function displayFire(){
	var display = document.getElementById("display_id");
	var div = document.createElement('div');

    div.className = 'row';
	http_req = new XMLHttpRequest();
	http_req.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       div.innerHTML = http_req.responseText;
       display.appendChild(div);
    }
};
	http_req.open('get', 'down.php');
	http_req.send();
	
}

dragFire();