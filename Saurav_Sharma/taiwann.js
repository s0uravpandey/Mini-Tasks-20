var taiw=[
{
        "Brand": "Tseng Noodles",
        "Variety": "Scallion With Sichuan Pepper  Flavor",
        "Style": "Pack",
        "Country": "Taiwan",
        "Stars": 5,
        "TopTen": "2016 #9"
    },
 {
        "Brand": "A-Sha Dry Noodle",
        "Variety": "Veggie Noodle Tomato Noodle With Vine Ripened Tomato Sauce",
        "Style": "Pack",
        "Country": "Taiwan",
        "Stars": 5,
        "TopTen": "NaN"
    },   
]
document.getElementById("resume").innerHTML=`
<h1 class="text-center" style="background:maroon;">Restaurants in Taiwan! (${taiw.length} results) </h1>
${taiw.map(function(data){
    return `<div class="container">
    <div class="jumbotron">
    <p style="font-size:30px; color:black;"><strong>Brand:</strong>${data.Brand}</p>
    <p style="font-size:30px;color:blue"><strong>Variety:</strong>${data.Variety}</p>
    <p style="color:green;font-size:30px"><strong>Style:</strong>${data.Style}</p>
    <p style="font-size:30px;color:red"><strong>Stars:</strong>${data.Stars}</p>
    <p style="font-size:30px;color:brown"<strong>TopTen:<strong>${data.TopTen}</p>
    </div>
    </div> `
}
)}`