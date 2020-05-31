var chin=[
{
        "Brand": "Wugudaochang",
        "Variety": "Tomato Beef Brisket Flavor Purple Potato Noodle",
        "Style": "Pack",
        "Country": "China",
        "Stars": 5,
        "TopTen": "2016 #7"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="bg-success text-center">Restaurants in China! (${chin.length} results) <h1>
${chin.map(function(cho){
    return `<div class="container">
    <div class="jumbotron">
    <p style="font-size:30px; color:black;"><strong>Brand:</strong>${cho.Brand}</p>
    <p style="font-size:30px;color:blue"><strong>Variety:</strong>${cho.Variety}</p>
    <p style="color:green;font-size:30px"><strong>Style:</strong>${cho.Style}</p>
    <p style="font-size:30px;color:red"><strong>Stars:</strong>${cho.Stars}</p>
    <p style="font-size:30px;color:brown"<strong>TopTen:<strong>${cho.TopTen}</p>
    </div>
    </div> `
}
)}`