var mal=[
 {
        "Brand": "MyKuali",
        "Variety": "Penang Hokkien Prawn Noodle (New Improved Taste)",
        "Style": "Pack",
        "Country": "Malaysia",
        "Stars": 5,
        "TopTen": "NaN"
    },
  {
        "Brand": "CarJEN",
        "Variety": "Nyonya Curry Laksa",
        "Style": "Pack",
        "Country": "Malaysia",
        "Stars": 5,
        "TopTen": "2015 #4"
    },
    {
        "Brand": "Mamee",
        "Variety": "Chef Gold Recipe Mi Kari Seribu Rasa",
        "Style": "Pack",
        "Country": "Malaysia",
        "Stars": 5,
        "TopTen": "2015 #6"
    },
    {
        "Brand": "MyKuali",
        "Variety": "Penang Red Tom Yum Goong Noodle",
        "Style": "Pack",
        "Country": "Malaysia",
        "Stars": 5,
        "TopTen": "2015 #1"
    },
    {
        "Brand": "Mamee",
        "Variety": "Chef Curry Laksa Flavour",
        "Style": "Pack",
        "Country": "Malaysia",
        "Stars": "NaN",
        "TopTen": "2014 #7"
    },
    {
        "Brand": "MyKuali",
        "Variety": "Penang White Curry Noodle",
        "Style": "Pack",
        "Country": "Malaysia",
        "Stars": 5,
        "TopTen": "2014 #1"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="bg-warning text-center">Restaurants in Malaysia! (${mal.length} results) <h1>
${mal.map(function(data){
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