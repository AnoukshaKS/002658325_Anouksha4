function showUP(object, type){
    var stat=false;
    var curr=type;

   stat!=stat;
   var stat=document.getElementById(curr).checked;
   stat!=stat;
   console.log(stat);
   if(stat){
       document.getElementById("comments1").style.display="block";
       document.getElementById("comments11").style.display="block";
       document.getElementById("comments11").attributes["required"]=true;
   }else{
       document.getElementById("comments1").style.display="none";
       document.getElementById("comments11").style.display="none";
       document.getElementById("comments11").attributes["required"]=false;
   }



}

function showText(){
   
   var eleout=document.getElementById("drinks").value;
   if(eleout=="Java chip"){
       
       document.getElementById("source2").style.display="none";
       document.getElementById("source22").style.display="none";
       document.getElementById("source3").style.display="none";
       document.getElementById("source33").style.display="none";
       document.getElementById("source4").style.display="none";
       document.getElementById("source44").style.display="none";


       document.getElementById("source1").style.display="block";
       document.getElementById("source11").style.display="block";
       
   }
   else if(eleout=="Ice latte"){
       
       document.getElementById("source2").style.display="block";
       document.getElementById("source22").style.display="block";


       document.getElementById("source1").style.display="none";
       document.getElementById("source11").style.display="none";
       document.getElementById("source3").style.display="none";
       document.getElementById("source33").style.display="none";
       document.getElementById("source4").style.display="none";
       document.getElementById("source44").style.display="none";
       
   }
   else if(eleout=="Strawberry Frappe"){
       
       document.getElementById("source3").style.display="block";
       document.getElementById("source33").style.display="block";

       document.getElementById("source2").style.display="none";
       document.getElementById("source22").style.display="none";
       document.getElementById("source1").style.display="none";
       document.getElementById("source11").style.display="none";
       document.getElementById("source4").style.display="none";
       document.getElementById("source44").style.display="none";
       
   }
   else if(eleout=="Mocha Cookie"){
       
       document.getElementById("source4").style.display="block";
       document.getElementById("source44").style.display="block";

       document.getElementById("source2").style.display="none";
       document.getElementById("source22").style.display="none";
       document.getElementById("source3").style.display="none";
       document.getElementById("source33").style.display="none";
       document.getElementById("source1").style.display="none";
       document.getElementById("source11").style.display="none";
       
   }
   else{

       document.getElementById("source4").style.display="none";
       document.getElementById("source44").style.display="none";

       document.getElementById("source2").style.display="none";
       document.getElementById("source22").style.display="none";
       document.getElementById("source3").style.display="none";
       document.getElementById("source33").style.display="none";
       document.getElementById("source1").style.display="none";
       document.getElementById("source11").style.display="none";

       document.getElementById("comments11").style.display="none";
       document.getElementById("comments1").style.display="none";

       
       
       
   }

   

}


function validinput(object,type,nameType){
       var regExName=/^[a-zA-Z]+$/;
       var regExEmail = /^[a-zA-Z0-9+_.-]+@northeastern.edu/;
       var regExPhone=/\d{3}-\d{3}-\d{4}$/;
       var regExZip=/^\d{5}$/;
       var name='errorMsg'+nameType;
       switch(type){
           case 1:if(!object.value.trim().match(regExName)){
               object.style.border = "2px solid red";
               document.getElementById(name).style.display ="block";
               object.value="";
           }else{
               object.style.border="";
               document.getElementById(name).style.display="none";
           }
           break;
           case 3:if(!object.value.trim().match(regExEmail)){
               object.style.border = "2px solid red";
               document.getElementById("errorMsgEmail").style.display ="block";
               object.value="";
           }else{
               object.style.border="";
               document.getElementById("errorMsgEmail").style.display="none";
           }
           break;
           case 4:if(!object.value.trim().match(regExPhone)){
               object.style.border = "2px solid red";
               document.getElementById("errorMsgPhone").style.display ="block";
               object.value="";
           }else{
               object.style.border="";
               document.getElementById("errorMsgPhone").style.display="none";
           }
           break;
           case 5:if(!object.value.trim().match(regExZip)){
               object.style.border = "2px solid red";
               document.getElementById("errorMsgZip").style.display ="block";
               object.value="";
           }else{
               object.style.border="";
               document.getElementById("errorMsgZip").style.display="none";
           
           }
       }
   }




   var j=1;
       function getData(){
           var name = document.getElementById("firstName").value;
           var lm= document.getElementById("lastName").value;
           var fn= name + " " + lm;
           var ph =document.getElementById("phoneNumber").value;
           var em= document.getElementById("emailId").value;
           var zp = document.getElementById("zipcode").value;
           var com= document.getElementById("comments").value;
           var dd=document.getElementById("drinks").value;
           var comm=document.getElementById('comments1').value;
           var st1 = document.getElementById("StreetAdress1").value;
           var st2 = document.getElementById("StreetAdress2").value;
           
           
           var radios = document.querySelectorAll('input[name="title"]:checked');
            var vel = radios.length>0? radios[0].value: '';

            var checkbox = document.querySelectorAll('input[name="source"]:checked');
            var vel1 = checkbox.length>0? checkbox[0].value: '';

            var checkbox1 = document.querySelectorAll('input[name="source100"]:checked');
            var vel2 = checkbox1.length>0? checkbox1[0].value: '';

            
           
           if (name=="" || lm=="" || ph=="" || em=="" || zp=="" || vel=="" || vel1=="" || com=="" || dd=="default" || st1 == ""){
               alert("All fields are mandatory!");
           }
            else if(vel2!='' && comm==""){
                alert("All fields are mandatory!");
            }
           else{
           
               

                   var content="";
               
                   content+="<tr><td>"+name+"</td><td>"+lm+"</td></tr>";
                   
                   
                   
                   var userTable=document.getElementById("userTable");
                   
                   
for(var i=j;i<=j;i++){
                   var row = userTable.insertRow(i);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 =row.insertCell(2);
var cell4 =row.insertCell(3);
var cell5 =row.insertCell(4);
var cell6 =row.insertCell(5);
cell1.innerHTML = fn;
cell2.innerHTML = ph;
cell3.innerHTML = em;
cell4.innerHTML = zp;
cell5.innerHTML = st1;
cell6.innerHTML = st2;
}
j=j+1;
var element = document.getElementById(" myform ");
element.reset()    
           
       }}
