var sk=[
{
        "Brand": "Samyang Foods",
        "Variety": "Maesaengyitangmyun Baked Noodle",
        "Style": "Pack",
        "Country": "South Korea",
        "Stars": 5,
        "TopTen": "2014 #5"
    },
    {
        "Brand": "Paldo",
        "Variety": "Cheese Noodle",
        "Style": "Pack",
        "Country": "South Korea",
        "Stars": 5,
        "TopTen": "2014 #6"
    },
    {
        "Brand": "Nongshim",
        "Variety": "Soon Veggie Noodle Soup",
        "Style": "Pack",
        "Country": "South Korea",
        "Stars": 5,
        "TopTen": "2014 #9"
    },
    {
        "Brand": "Paldo",
        "Variety": "Kokomen Spicy Chicken",
        "Style": "Pack",
        "Country": "South Korea",
        "Stars": 5,
        "TopTen": "2013 #9"
    },
    {
        "Brand": "Nongshim",
        "Variety": "Shin Ramyun Black",
        "Style": "Pack",
        "Country": "South Korea",
        "Stars": 4.75,
        "TopTen": "2012 #7"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="bg-success text-center">Restaurants in South Korea! (${sk.length} results) <h1>
${sk.map(function(data){
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