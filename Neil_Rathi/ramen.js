 	
var div1=document.querySelector('#container');
let requesturl='https://neilrathi17.github.io/test1/ramen.json'
let request=new XMLHttpRequest();
request.open("GET",requesturl);
request.responseType='text';
request.send();
var jsonObj=[]
request.onload=function()
{
// var ram=request.response;
			jsonObj=JSON.parse(request.response)
			// console.log(jsonObj)
			display(jsonObj)
		}
var sorry=document.createElement('h4');
sorry.textContent="No matches found";
sorry.style.color="white";
sorry.classList.add("active");
div1.append(sorry);
			//display function to display all restsurants
		function display(jsonObj)
		{
			for(var i=0;i<37;++i)
				creator(jsonObj,i)
		// 
		}
		// display(jsonObj);
		//destroyer function to clear contents of the page
		function destroyer(jsonObj)
		{
			var list=document.querySelectorAll(".rest");
			for(var i=0;i<list.length;++i)
			{
				list[i].remove();
				// list[i].innerHTML="";
			}
		}
		// -----------------------------------------------------------------------------------------
		function creator(jsonObj,n)
		{
			sorry.classList.add('active')
			var div=document.createElement('div');
			div.classList.add("rest");
			div1.appendChild(div);
			
			//brand 
			var brand=document.createElement('p');
			brand.textContent=jsonObj[n]["Brand"];
			brand.classList.add("brand")
			div.append(brand);
			//stars
			var stars=document.createElement('p');
			if( jsonObj[n]["Stars"]==="NaN")
				stars.textContent="No Rating";
			else
			stars.innerHTML= jsonObj[n]["Stars"]+ '<i class="fas fa-star"></i>';
			stars.classList.add("stars");
			div.append(stars);
			//variety
			var variety=document.createElement('p');
			variety.textContent=jsonObj[n]["Variety"];
			variety.insertAdjacentHTML("afterbegin", "<span class='tags'>Variety of ramen served: </span>");
		    div.append(variety);
			//style
			var style=document.createElement('p');
			style.textContent=jsonObj[n]["Style"];
			style.insertAdjacentHTML("afterbegin", "<span class='tags'>Style of ramen: </span>");
			div.append(style);
			// country and rating
			var country=document.createElement('p');
			country.textContent=jsonObj[n]["Country"];
			country.insertAdjacentHTML("afterbegin", "<span class='tags'>Location: </span>");
			div.append(country);
			//topten
			var top=document.createElement('p');
			var list=jsonObj[n]["TopTen"].split(" ");
			if(list.length==2)
			top.textContent="Ranked "+list[1]+" in "+ list[0];
			else 
				top.textContent="No previous top ten ranking"
			top.classList.add('topten')
			div.append(top);
		}
		// --------------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------------

		//input for search box
		var input=document.querySelector("input[type='text']")
		input.addEventListener("keypress",function(event)
		{
			if(event.which==13)
			{var text=this.value;
			this.value="";
			search(text);
			
		}})
		
		var home=document.querySelector('#home')
		home.addEventListener("click",function()
		{
			
			destroyer(jsonObj)
			reset('country');
			reset('topten');
			reset('sort');
			display(jsonObj);
		})
		// -----------------------------------------------------------------------------------------------------------------------------------
		// ---------------------------------------------------------------------------------------------------------------------------------
		function sort()
		{	
			sorry.classList.add('active')
			var obj2=[]
			var index=0;
			var imp=document.getElementById('topten')
			var x = document.getElementById("topten").value;
			for(var i=0;i<37;++i)
			{
				if(x==='none')
				{
					obj2=jsonObj.slice()
					index=36;
					break;
				}
				var list=jsonObj[i]['TopTen'].split(" ");
				if(x===list[0])	
				{
					obj2[index]=jsonObj[i];
					++index;
				}		
			}
			var index=0;
			var obj1=[];
			var imp=document.getElementById('country')
			var x = document.getElementById("country").value;
			for(var i=0;i<36;++i)
			{	
				if(x==="All" || imp.selectedIndex===0)
				{
					
					obj1=jsonObj.slice()
					index=36;
					break;
				}

				if(x.toUpperCase()==jsonObj[i]["Country"].toUpperCase())
				{
				obj1[index]=jsonObj[i];
				index++;
				}	
			}
			obj=[];
			var count=0;
			for(var i=0;i<obj1.length;++i)
			{
				for(var j=0;j<obj2.length;++j)
					if(obj1[i]===obj2[j] && obj[i]!="")

						{
							obj[count]=obj1[i];
							obj1[i]="";
							count++;
						}
			}
			if(obj.length===0)
				sorry.classList.remove('active')
			destroyer(jsonObj)
			var x = document.getElementById("sort").value;
			if(x==='Stars')
			{
				for(var i=0;i<count-1;++i)
			{
				var min=i;
				for(var j=i+1;j<count;++j)
					{
						if(obj[j][x]>obj[min][x])
							{
								min=j;
							}
					}
				// creator(jsonObj,min)
				var temp = obj[min]; 
            	obj[min] = obj[i]; 
            	obj[i] = temp; 
			}
			display(obj)	
			}
			else 
			{
				for(var i=0;i<count-1;++i)
			{
				var min=i;
				for(var j=i+1;j<count;++j)
					{
						if(obj[j][x]<obj[min][x])
							{
								min=j;
							}
					}
				// creator(jsonObj,min)
				var temp = obj[min]; 
            	obj[min] = obj[i]; 
            	obj[i] = temp; 
				
			}
					display(obj)
			}
			// jsonObj.sort((a, b) => (a.x > b.x) ? 1 : -1)
		}
		// ------------------------------------------------------------------------------------------------------------------------------------
		// ------------------------------------------------------------------------------------------------------------------------------------

		function countr()
		{
			var obj=[]
			var index=0;
			var num=0;
			var imp=document.getElementById('topten')
			var x = document.getElementById("topten").value;
			for(var i=0;i<37;++i)
			{
				if(x==='none')
				{
					obj=jsonObj.slice()
					index=36;
					break;
				}
				var list=jsonObj[i]['TopTen'].split(" ");
				if(x===list[0])	
				{
					obj[index]=jsonObj[i];
					++index;
				}		
			}
			sorry.classList.add('active')
			destroyer(jsonObj);
			var x = document.getElementById("country").value;
			var imp=document.getElementById('country')
			if(x==="All"  || imp.selectedIndex===0)
				display(obj);
			for(var i=0;i<index;++i)
			{		
				if(x.toUpperCase()==obj[i]["Country"].toUpperCase())
				{
				creator(obj,i);
				num++;
				}	
			}

			if(num===0)
				sorry.classList.remove('active')
					
		}
		// ---------------------------------------------------------------------------------------------------------------------------------------
		// --------------------------------------------------------------------------------------------------------------------------------------
		
		function search(input)
		{
			var chk=false;
		
			for(var i=0;i<36;++i)
			{
				if(input.toUpperCase()==jsonObj[i]["Brand"].toUpperCase())
					{
						if(chk==false)
							destroyer(jsonObj);

						sorry.classList.add('active')
						
						creator(jsonObj,i);
						chk=true;
					}
			}
			if(chk==false)
					{
						destroyer(jsonObj)
						sorry.classList.remove('active')
					}
		}
		// ---------------------------------------------------------------------------------------------------------------------
		// ---------------------------------------------------------------------------------------------------------------------
		function reset(input)
		{
			destroyer(jsonObj)
			var index=document.getElementById(input);
			index.selectedIndex=0;
		}

		

	


