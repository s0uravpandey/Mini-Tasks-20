var indon=[
{
        "Brand": "Indomie",
        "Variety": "Mi Goreng Rendang (Import)",
        "Style": "Pack",
        "Country": "Indonesia",
        "Stars": 5,
        "TopTen": "2013 #3"
    },
    {
        "Brand": "Indomie",
        "Variety": "Special Fried Curly Noodle",
        "Style": "Pack",
        "Country": "Indonesia",
        "Stars": 5,
        "TopTen": "2012 #1"
    },
    {
        "Brand": "Indomie",
        "Variety": "Mi Goreng Jumbo Barbecue Chicken",
        "Style": "Pack",
        "Country": "Indonesia",
        "Stars": "NaN",
        "TopTen": "2012 #2"
    },
     {
        "Brand": "Mi Sedaap",
        "Variety": "Kari Spesial",
        "Style": "Pack",
        "Country": "Indonesia",
        "Stars": 4.5,
        "TopTen": "2012 #5"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="bg-warning text-center">Restaurants in Indonesia! (${indon.length} results) <h1>
${indon.map(function(data){
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