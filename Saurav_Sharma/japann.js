var jpn=[
{
        "Brand": "Maruchan",
        "Variety": "Gotsumori Sauce Yakisoba",
        "Style": "Tray",
        "Country": "JPN",
        "Stars": 5,
        "TopTen": "2015 #9"
    },
    {
        "Brand": "Sapporo Ichiban",
        "Variety": "Otafuku Okonomi Sauce Yakisoba",
        "Style": "Tray",
        "Country": "Japan",
        "Stars": "NaN",
        "TopTen": "2014 #4"
    },
    {
        "Brand": "Nissin",
        "Variety": "Yakisoba Noodles Karashi",
        "Style": "Tray",
        "Country": "Japan",
        "Stars": 5,
        "TopTen": "2012 #3"
    },
    {
        "Brand": "Myojo",
        "Variety": "Hyoubanya No Chukasoba Oriental",
        "Style": "Pack",
        "Country": "JPN",
        "Stars": 4.25,
        "TopTen": "2012 #6"
    },
    {
        "Brand": "Myojo",
        "Variety": "Ippeichan Yakisoba",
        "Style": "Tray",
        "Country": "Japan",
        "Stars": 4,
        "TopTen": "2013 #6"
    },
    {
        "Brand": "Sapporo Ichiban",
        "Variety": "Chow Mein",
        "Style": "Pack",
        "Country": "JPN",
        "Stars": 5,
        "TopTen": "2012 #4"
    }
]
document.getElementById("resume").innerHTML=`
<h1 class="text-center" style="background:red;">Restaurants in Japan! (${jpn.length} results) <h1>
${jpn.map(function(data){
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