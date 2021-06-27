const textVal=document.querySelector('.enterlist');
const itemList=document.querySelector('.items');


var count=0;
function additem(event)
{
    var x=event.keyCode;
    if(x==13)
    
    {
        console.log("enter clicked");
        var node=document.createElement("li");
        count++;
        node.setAttribute("class",count);
        var textNode=document.createTextNode(textVal.value);
        node.appendChild(textNode);
        itemList.style.display="flex";
        itemList.appendChild(node);
        
    }

}

function edititem(event)
{
    var y=event.button;
   
    if(y==0)
    {
      const elements=document.querySelectorAll("body > div.mainPart > div:nth-child(2) > ul > li");
       elements.forEach(function(item)
       {
            item.addEventListener("click",()=>{
                if(item.classList.contains("check"))
                item.classList.remove("check");
                else
                item.classList.toggle("check");
            });
        });
    }
     
    
    else if(y==2)
    {
        console.log("right");
        const elements2=document.querySelectorAll("body > div.mainPart > div:nth-child(2) > ul > li");
        elements2.forEach(function(item)
       {
            item.addEventListener("click",()=>{
              item.style.display="none";
            });
        });
    }

}


 
