
let array=[];
let count=0;

let str="";

function display()
{

let arraystring = localStorage.getItem('itemJson');
        array = JSON.parse(arraystring);

        str="";

        array.forEach((element, index) => {
         
           
         
            str += `
            
            <tr class="row">
                <td class="srno1">
                  ${index+1} .
                </td>
                <td class="name1">
                  ${element[0]}
                </td>
                <td class="action1">
                <button type="submit" class="action2 deleted" onclick="delete_record(${index})">
                     DELETE
                    </button>
                    
                <button type="submit" class="action2 updated" onclick="update_record(${index})">
                     UPDATE
                    </button>
                </td>
            
               </tr>
               
                ` 
              
        count++;

    
        }); 
    

let display=document.getElementById("table2");
display.innerHTML=str;

}
let search , search2;
display();


 search =document.getElementById("running_tagg");

 let i=count;
search.addEventListener("keypress",function search_Info(){


    let name1= document.getElementById("table2");
      let name2 , name3 ;
    
        for(let j=0 ; j < i ; j++)
        {
            
          name2=name1.getElementsByClassName("row")[j];

        
          name3=name2.getElementsByTagName("td")[1];
    
         
         
         let name4=name3.innerHTML.toUpperCase();
        
     
          search2=search.value.toUpperCase();
         console.log(search2);
         console.log(name4);
       
          if(name4.indexOf(search2) > -1)
          {
            console.log("1");
          
          }
          else{
            // console.log(search2.innerHTML);
            // name2.style.innerHTML=null;
            name2.style.display="none";
          }
        
         }

           if(search2.length==0)
         {
              cancel();
              console.log("hioii")
         }
          
      //     }



});




function cancel()
{
      

let cancel=document.getElementById("");


i++;
let name1= document.getElementById("table2");
  let name2 , name3;
    
    for(let j=0 ; j < count ; j++)
    {
      
      name2=name1.getElementsByClassName("row")[j];
  
        name2.style.display="";
        
       }

      let search = document.getElementById("running_tagg");
      search.value="";


}

// document.getElementBy


function delete_record(delete_index)
{
 
       let arraystring2 = localStorage.getItem('itemJson');
        let array2 = JSON.parse(arraystring2);
        // console.log(array2);

        let name1= document.getElementById("table2");

        let name2=name1.getElementsByClassName("row")[delete_index];
        name2.style.display="none";

        array2.splice(delete_index,1);
      

        localStorage.setItem('itemJson', JSON.stringify(array2));
        
        
        
      

}


function update_record(update_index)
{

  let navbar=document.getElementsByClassName("same")[0];
  
  navbar.style.display="none";

  let table1= document.getElementById("table1");
 table1.style.display="none";

 let main=document.getElementById("tables");
//  main.style.alignContent="center";
 
 main.style.marginTop="6%";

 main.style.border="";

  let name1= document.getElementById("table2");

  let name2=name1.getElementsByClassName("row")[update_index];

  let name3=name2.getElementsByTagName("td")[1];

  console.log(array[update_index]);

  

  str+=`
  

  `;


  str="";
  let array2=[];
    array2=array[update_index];     



   
    str += `
    
    <tr class="row row1">
    <td class="srno1">
       NAME
    </td>
    <td class="name1">
        <input type="text"  class="input_tag" required value="${array[update_index][0]}" >

    </td>
   
    <td class="action1">
    
      
    </td>

   </tr>

   <tr class="row">
    <td class="srno1">
       ADDRESS
    </td>
    <td class="name1">
        <input type="text" class="input_tag" required value="${array[update_index][1]}">
   
        </td>
   
        <td class="action1">
        
          
        </td>

   </tr>

   <tr class="row">
    <td class="srno1">
       DISEASE
    </td>
    <td class="name1">
        <input type="text"  class="input_tag" value="${array[update_index][2]}">
   
    </td>

   
    <td class="action1">
    
      
    </td>
   

   </tr>

   <tr class="row">
    <td class="srno1">
       AGE
    </td>
    <td class="name1">
        <input type="number" class="input_tag"  value="${array[update_index][3]}">
   
    </td>
   
  
   
    <td class="action1">
    
      
    </td>


   </tr>
   

   <tr class="row">
    <td class="srno1">
       DOB
    </td>
    <td class="name1">
        <input type="date" class="input_tag" value="${array[update_index][4]}">
   
    </td>
   
    <td class="action1">
    
      
    </td>
   

   </tr>

   <tr class="row">
    <td class="srno1">
       MOBILE NO 
    </td>
    <td class="name1">
        <input type="number" class="input_tag" required value="${array[update_index][5]}">
   
    </td>
   
    <td class="action1">
    
      
    </td>
   

   </tr>

   <tr class="row">
    <td class="srno1">
       EMAIL
    </td>
    <td class="name1">
        <input type="email" class="input_tag" value="${array[update_index][6]}">
        </td>
      
      
   
        <td class="action1">
        
          
        </td>
   

   </tr>
   <tr class="row">
    <td class="srno1">
       INFO
    </td>
    <td class="name1">
        <input type="text" class="input_tag" value="${array[update_index][7]}">
   
    </td>

   
    <td class="action1">
    
      
    </td>
   
    
    </tr>

    <tr class="row row2">
  
    <td class="srno1">
       

        <button type="" class="action2 deleted" onclick="cancel();">
        CANCEL 
       </button>
    </td>
    
        <td class="name1">
       
    </td>

        
       <td class="action1">
      
       <button type="" class="action2 deleted" onclick="clear_text();">
        CLEAR
       </button>


       <button type="submit" class="action2 updated" id="" onclick="done(${update_index});">
         DONE
        </button> 
    </td;
       

    

       </tr>
   
        ` ;


        let display=document.getElementById("table2");
        display.innerHTML=str;
        


}


function cancel()
{

  
  let navbar=document.getElementsByClassName("same")[0];
  
  navbar.style.display="";
   
  let table1= document.getElementById("table1");
  table1.style.display="";

  let main=document.getElementById("tables");
  //  main.style.alignContent="center";
   
   main.style.marginTop="";
  
  display();


}

function clear_text()
{
  let inner_info;
  console.log("hi");

  for(let i=0;i<8;i++)
  {
    document.getElementsByClassName("input_tag")[i].value="";
  }

  

}

function done(index)
{

  let name=document.getElementsByClassName("input_tag")[0].value;
  let address=document.getElementsByClassName("input_tag")[1].value;
  let mo_no=document.getElementsByClassName("input_tag")[5].value;
  
   
  if(name.length==0 || address.length==0 || mo_no.length==0)
   {
        alert("NAME , ADDRESS AND MOBILE NO IS MUST");
         return;
   }

     for(let i=0 ; i<8 ; i++)
     {
       
      array[index][i]=document.getElementsByClassName("input_tag")[i].value;

     }

     localStorage.setItem('itemJson',JSON.stringify(array));
     cancel();

    //  display();


}







