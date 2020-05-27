function search(){
    let input1 = document.getElementsByClassName("Searchbar")[0].value
    input1 = input1.toLowerCase();
    let dish = document.getElementsByClassName("name");
    let variety = document.getElementsByClassName("variety");
    let stylee =document.getElementsByClassName("style");
    let stars = document.getElementsByClassName("stars");
    let country = document.getElementsByClassName("country");
    let topten = document.getElementsByClassName("topten");
    let i;
    console.log(input1);
    for(i=0;i<dish.length;i++){
        if(!dish[i].innerHTML.toLowerCase().includes(input1) && !variety[i].innerHTML.toLowerCase().includes(input1) && !stylee[i].innerHTML.toLowerCase().includes(input1) && !country[i].innerHTML.toLowerCase().includes(input1) && !stars[i].innerHTML.toLowerCase().includes(input1) && !topten[i].innerHTML.toLowerCase().includes(input1)){
            dish[i].style.display= "none";
            variety[i].style.display= "none";
            stylee[i].style.display = "none";
            stars[i].style.display = "none";
            country[i].style.display = "none";
            topten[i].style.display = "none";
        }
        else{
            variety[i].style.display="";
            dish[i].style.display = "";
            stylee[i].style.display = "";
            stars[i].style.display = "";
            country[i].style.display = "";
            topten[i].style.display = "";
        }

    }
    
}
