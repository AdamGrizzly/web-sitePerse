var rend
var site='http://api.giphy.com/v1/gifs/search?q={';
var api='}&api_key=dc6zaTOxFJmzC';
function Giphy() {
	var q=document.getElementById("searchTxt").value;
	fetch(site+q+api).then(data=>data.json()).then(resp=>window.rend=resp.data);
	rend.forEach(function(pochti) {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src",pochti.embed_url);
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    });
}

function people() {
	var q=document.getElementById("searchTxt").value;
	var people;
	const res = fetch('https://gist.githubusercontent.com/raine/cd11686e0b8a4a43bbf6/raw/people.json')
	.then(response=>response.json())
	.then(f=>people=f)
	.then(rend);
	function rend(){
				for(var i=0; i<q;i++){
					var new_row = document.createElement("div");
					new_row.setAttribute("class", "aClassName" );
					function addText(node,text){     
					         var t=text.split(/\s*<br ?\/?>\s*/i),
					             i;
					         if(t[0].length>0){         
					           new_row.appendChild(document.createTextNode(t[0]));
					         }
					         for(i=1;i<t.length;i++){
					            new_row.appendChild(document.createElement('BR'));
					            if(t[i].length>0){
					              new_row.appendChild(document.createTextNode(t[i]));
					            }
					         } 
					}            
					addText(document,'Name: '+people[i].name+'<br>'+'City: '+people[i].city+'<br>'+'Email: '+people[i].email+'<BR/>');
					document.body.appendChild( new_row );
				}
			}
}


function Photo(){
	var q=document.getElementById("searchTxt").value;
	var images;
	const res=fetch('https://raw.githubusercontent.com/manolo/v-upload-gallery/master/ajax/images.json')
		.then(response=>response.json())
		.then(f=>images=f)
		.then(rend);
		function rend() {
			for(var i=0; i<q;i++){
				var ifrm = document.createElement("img");
		        ifrm.setAttribute("src",images[i].src);
		        ifrm.style.width = "250px";
		        ifrm.style.height = "250px";
		        document.body.appendChild(ifrm);
	    }

    };
}