
let array=[];
let count=0;
let arraystring = localStorage.getItem('itemJson');
        array = JSON.parse(arraystring);

        str="";

        array.forEach((element, index) => {
     
    
            str += ` 
                <div id="divi2" class="info2">
             <div id="h3_tag">
            
              <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PATIENT &nbsp;&nbspNO &nbsp;
              ${index + 1} &nbsp&nbspDETAILS  
             <br></div> 
              
          <!--  &nbsp;&nbsp;&nbsp;&nbsp;<span id="span" class="name">NAME :</span>&nbsp;&nbsp;&nbsp; -->
          <div class="name"> NAME</div>
            <div class="element" id="element1"> 
               ${element[0]} 
            </div>
            
            <div class="name"> ADDRESS</div>
            <div class="element" id="element1">
            ${element[1]} 
            </div>
            <div class="name"> DISEASE</div>
            <div class="element" id="element1"> 
            ${element[2]} 
            </div>
        
            <div class="name"> AGE</div>
            <div class="element" id="element1"> 
            ${element[3]} 
            </div>
            
            <div class="name"> DATE OF BIRTH</div>
            <div class="element" id="element1"> 
            ${element[4]} 
            </div>

            <div class="name"> MOBILE NUMBER</div>
            <div class="element" id="element1"> 
            ${element[5]} 
            </div>
        
            <div class="name"> EMAIL</div>
            <div class="element" id="element1"> 
            ${element[6]} 
            </div>
            
            <div class="name"> OTHER INFORMATION</div>
            <div class="element textarea" id="element1"> 
            ${element[7]} 
            </div>
            </div>`
        count++;

    
        });

let display=document.getElementById("divi");
display.innerHTML=str;

let search =document.getElementById("running_tagg");

 let i=0;
search.addEventListener("keypress",function search_Info(){

    // console.log();
  i++;
    let name1= document.getElementById("divi");
      let name2 , name3;
        
        for(let j=0 ; j < count ; j++)
        {
            //  console.log("1");
          name2=name1.getElementsByClassName("info2")[j];
          name3=name2.getElementsByClassName("element")[0];
    
         
         
         let name4=name3.innerHTML.toUpperCase();
         let search2=search.value.toUpperCase();
         console.log(search2);
         console.log(name4);
        //  search2=search2.toString();
        //  console.log(search2[i]);
          if(name4.indexOf(search2) > -1)
          {
            console.log("1");
            name2.style.display="block";
          }
          else{
            console.log(search2.innerHTML);
            name2.style.display="none";
          }
         }

          
      //     }



});

function cancel()
{
      

let cancel=document.getElementById("");
let name1= document.getElementById("divi");
let name2 , name3;


      console.log("hi")
      for(let j=0 ; j < count ; j++)
      {
           
        name2=name1.getElementsByClassName("info2")[j];
        name2.style.display="block";
        
       }


}












