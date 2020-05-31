var myan=[{
        "Brand": "MAMA",
        "Variety": "Instant Noodles Coconut Milk Flavour",
        "Style": "Pack",
        "Country": "Myanmar",
        "Stars": 5,
        "TopTen": "2016 #10"
    },
]
document.getElementById("resume").innerHTML=`
<h1 style="background:cyan;" class="text-center">Restaurants in Myanmar! (${myan.length} results) <h1>
${myan.map(function(data){
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