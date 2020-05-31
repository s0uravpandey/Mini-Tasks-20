const rest=[
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Laksa Wholegrain La Mian",
        "Style": "Nan",
        "Country": "Singapore",
        "Stars": 5,
        "TopTen": "2016 #1"
    },
    {
        "Brand": "Prima",
        "Variety": "Juzz's Mee Creamy Chicken Flavour",
        "Style": "Pack",
        "Country": "SG",
        "Stars": "NaN",
        "TopTen": "2016 #8"
    },
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Curry Wholegrain La Mian",
        "Style": "Pack",
        "Country": "Singapore",
        "Stars": 5,
        "TopTen": "2016 #5"
    },
    
    
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Chilli Crab La Mian",
        "Style": "NaN",
        "Country": "Singapore",
        "Stars": 5,
        "TopTen": "NaN"
    },
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Laksa La Mian",
        "Style": "Pack",
        "Country": "SG",
        "Stars": 5,
        "TopTen": "2013 #1"
    },
    {
        "Brand": "Prima Taste",
        "Variety": "Singapore Curry La Mian",
        "Style": "Pack",
        "Country": "Singapore",
        "Stars": "NaN",
        "TopTen": "2013 #2"
    },
    
    {
        "Brand": "Koka",
        "Variety": "Spicy Black Pepper",
        "Style": "Pack",
        "Country": "SG",
        "Stars": 5,
        "TopTen": "NaN"
    },
]
document.getElementById("resume").innerHTML=`
<h1 class="bg-info text-center">Restaurants in Singapore (${rest.length} results) <h1>
${rest.map(function(data){
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