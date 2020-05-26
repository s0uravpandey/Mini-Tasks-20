var xml = new XMLHttpRequest();
xml.onreadystatechange = function(){
    if(xml.status == 200 && xml.readyState==4){
        var food = JSON.parse(xml.responseText);
        let i;
        for(i=0;i<37;i++){
            document.getElementsByClassName("name")[i].innerHTML = food[i].Brand;
            document.getElementsByClassName("variety")[i].innerHTML = food[i].Variety;
            document.getElementsByClassName("style")[i].innerHTML = food[i].Style;
            document.getElementsByClassName("country")[i].innerHTML = food[i].Country;
            document.getElementsByClassName("stars")[i].innerHTML = food[i].Stars;
            document.getElementsByClassName("topten")[i].innerHTML = food[i].TopTen;
        }
     }
};
xml.open("GET","https://api.jsonbin.io/b/5ea441ca98b3d53752344cc5",true);
xml.send();