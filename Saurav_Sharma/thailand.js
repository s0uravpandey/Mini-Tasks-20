var thai=[
{
        "Brand": "Mama",
        "Variety": "Instant Noodles Shrimp Creamy Tom Yum Flavour Jumbo Pack",
        "Style": "Pack",
        "Country": "Thailand",
        "Stars": 5,
        "TopTen": "2013 #10"
    },
    {
        "Brand": "Mama",
        "Variety": "Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack",
        "Style": "Pack",
        "Country": "Thailand",
        "Stars": 5,
        "TopTen": "2015 #8"
    },
    {
        "Brand": "Mama",
        "Variety": "Instant Noodles Yentafo Tom Yum Mohfai Flavour",
        "Style": "Pack",
        "Country": "Thailand",
        "Stars": 5,
        "TopTen": "2014 #10"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="text-center" style="background:yellow;">Restaurants in Thailand! (${thai.length} results) <h1>
${thai.map(function(data){
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