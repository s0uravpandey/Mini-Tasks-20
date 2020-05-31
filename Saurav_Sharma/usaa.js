var data1=[
{
        "Brand": "Nongshim",
        "Variety": "Jinjja Jinjja Flamin' Hot & Nutty",
        "Style": "Pack",
        "Country": "USA",
        "Stars": 5,
        "TopTen": "2013 #4"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="bg-white text-center">Restaurants in United States! (${data1.length} results) <h1>
${data1.map(function(dat){
    return `<div class="container">
    <div class="jumbotron">
    <p style="font-size:30px; color:black;"><strong>Brand:</strong>${dat.Brand}</p>
    <p style="font-size:30px;color:blue"><strong>Variety:</strong>${dat.Variety}</p>
    <p style="color:green;font-size:30px"><strong>Style:</strong>${dat.Style}</p>
    <p style="font-size:30px;color:red"><strong>Stars:</strong>${dat.Stars}</p>
    <p style="font-size:30px;color:brown"<strong>TopTen:<strong>${dat.TopTen}</p>
    </div>
    </div> `
}
)}`