var table = document.getElementById("tbl"),
    xhr = new XMLHttpRequest();
xhr.open("GET","data.json");

xhr.addEventListener("readystatechange",function(){
     if(xhr.readyState != 4){
        return;
     }
     var str = JSON.parse(xhr.responseText);

    var newTr = document.createElement("tr");

    var userNameField = document.createElement("td");
    var birthDayField = document.createElement("td");
    var professionField = document.createElement("td");
    var addressField = document.createElement("td");

    for(var i = 0;i<=str.length-1;i++){
        userNameField.innerText = str[i].userName;
        birthDayField.innerText = str[i].birthDay;
        professionField.innerText =  str[i].profession;
        addressField.innerText = str[i].address;

        newTr.appendChild(userNameField);
        newTr.appendChild(birthDayField);
        newTr.appendChild(professionField);
        newTr.appendChild(addressField);

        table.appendChild(newTr);

    };







});

xhr.send();
