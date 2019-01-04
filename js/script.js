var total = 0.0;
function add() {
 var table=document.getElementById("myTable");
   var pId= document.getElementById("pId").value;
    var pName= document.getElementById("pName").value;
     var pModel= document.getElementById("pModel").value;
     var pPrice= parseFloat(document.getElementById("pPrice").value);
     var pQty=parseFloat(document.getElementById("pQuantity").value);
    //calculate the net price
    var netPrice=pPrice*pQty;
    //update the total ammount
    total=total+netPrice;
    
    //add to <tbody>
    var row =table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5=row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML=pId;
    cell2.innerHTML=pName;
    cell3.innerHTML=pModel;
    cell4.innerHTML=pPrice;
    cell5.innerHTML=pQty;
    cell6.innerHTML=netPrice;
}//add()
function printBill(){
    
    var table = document.getElementById("myTable");
    //add to <tbody>
    var row =table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2 = row.insertCell(1);
   
    
    cell1.innerHTML="<b>Total Amount::</b>";
    cell1.colSpan = 5;
    cell2.innerHTML=total;
    //set all the irrelavent things as off
    document.getElementById("formContainer").style.display="none";
    //document.getElementById("printing").style.display="none";
    document.getElementById("billHead").innerHTML=prompt("Enter Your Shop Name ::","YourBill").toUpperCase();
    
    //Add Date
    var d = new Date();
    document.getElementById("myDate").innerHTML="Date :: "+String(d).substring(4,21);
    window.print();
}//printBill
