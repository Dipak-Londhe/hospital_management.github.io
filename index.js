
let value_of_index_page;
let str;

 function display_info() {
    

    let patient_name = document.getElementById("p_name").value;
    let patient_address = document.getElementById("addresses").value;
    let patient_disease = document.getElementById("disease").value;
    let patient_age = document.getElementById("age").value;
    let patient_dob = document.getElementById("dob").value;
    let patient_mobile_no = document.getElementById("mobile_no").value;
    let patient_email = document.getElementById("email").value;
    let patient_info = document.getElementById("textarea").value;

   if(patient_name.length==0 || patient_address.length==0 || patient_mobile_no.length==0 || patient_age.length==0 || patient_email.length==0 )
   {
         return;
   }

    let array = [];
    if (localStorage.getItem('itemJson') == null) {
        
        array.push([patient_name, patient_address, patient_disease, patient_age, patient_dob,
        patient_mobile_no, patient_email, patient_info]);
        localStorage.setItem('itemJson', JSON.stringify(array));

    }
    else {
        let arraystring = localStorage.getItem('itemJson');
        array = JSON.parse(arraystring);

        array.push([patient_name, patient_address.value, patient_disease, patient_age, patient_dob,
            patient_mobile_no, patient_email, patient_info]);
        localStorage.setItem('itemJson', JSON.stringify(array));
        console.log("success2");

    }

      alert(" your datails submitted successfully ");

      value_of_index_page=str;
      

}

let display = document.getElementById("submit_button");


display.addEventListener("click", display_info);
// display_info();


jsarray=value_of_index_page;

// sessionStorage.setItem("JsArray",JSON.stringify(jsarray));





