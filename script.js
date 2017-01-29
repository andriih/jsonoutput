var table = document.getElementById("tbl"),
    xhr = new XMLHttpRequest();
xhr.open("GET","data.json");

xhr.addEventListener("readystatechange",function(){
     if(xhr.readyState != 4){
        return;
     }
     var str = JSON.parse(xhr.responseText);

    for(var i = 0;i<=str.length-1;i++){
        var newTr = document.createElement("tr"),
            userNameField = document.createElement("td"),
            birthDayField = document.createElement("td"),
            professionField = document.createElement("td"),
            addressField = document.createElement("td"),
            removeField = document.createElement("td");


        userNameField.innerText = str[i].userName;
        birthDayField.innerText = str[i].birthDay;
        professionField.innerText =  str[i].profession;
        addressField.innerText = str[i].address;
        removeField.innerHTML = '<button type="click" class="btn" name="btn">Remove</button>';

        newTr.appendChild(userNameField);
        newTr.appendChild(birthDayField);
        newTr.appendChild(professionField);
        newTr.appendChild(addressField);
        newTr.appendChild(removeField);

        table.appendChild(newTr);
    };


    table.addEventListener("click",function(e){
        var target = e.target;

        if(target.innerText === "Remove"){
            target.parentElement.parentElement.remove();
            console.log(str.length);
        }
    });
});

xhr.send();
