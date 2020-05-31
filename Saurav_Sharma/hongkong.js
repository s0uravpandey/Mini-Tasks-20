var hk=[
{
        "Brand": "Doll",
        "Variety": "Artificial Chicken",
        "Style": "Pack",
        "Country": "Hong Kong",
        "Stars": 4.5,
        "TopTen": "2012 #9"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="text-center" style="background:brown;">Restaurants in Hong Kong! (${hk.length} results) <h1>
${hk.map(function(data){
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