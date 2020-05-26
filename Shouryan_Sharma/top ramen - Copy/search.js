function search(){
    let input = document.getElementsByClassName("Searchbar")[0].value
    input = input.toLowerCase();
    let obj = document.getElementsByClassName("name");
    let i;
    for(i=0;i<obj.length;i++){
        if (!obj[i].innerHTML.toLowerCase().includes(input)) { 
            obj[i].style.display="none"; 
        } 
        else { 
            obj[i].style.display="list-item";                  
        } 
    }

}