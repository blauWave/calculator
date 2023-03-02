// JavaScript kodu
function calculate() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var operator = document.getElementById("operator").value;
    var result;

    if (operator == "add") {
        result = parseFloat(input1) + parseFloat(input2);
    } else if (operator == "subtract") {
        result = parseFloat(input1) - parseFloat(input2);
    } else if (operator == "multiply") {
        result = parseFloat(input1) * parseFloat(input2);
    } else if (operator == "divide") {
        result = parseFloat(input1) / parseFloat(input2);
    } else if (operator == "power") {
        result = parseFloat(input1) ** parseFloat(input2);
    }
    else if (operator == "mod") {
        result = parseFloat(input1) % parseFloat(input2);
    }


    document.getElementById("result").innerHTML = result;


    //td elementlerini oluşturuyoruz
    let value1 = document.createElement("td");
    let value2 = document.createElement("td");
    let operator2 = document.createElement("td");
    let value3 = document.createElement("td");

    //sil butonu ekleme
    let tSil = document.createElement("td");
    let silBtn = document.createElement("button");
    silBtn.textContent = "Sil";
    tSil.appendChild(silBtn); //butonu td içine ekliyoruz.

    silBtn.onclick = function (e) {
        liste.removeChild(this.parentNode.parentNode);
    }

    value1.textContent = document.getElementById("input1").value;//textboxtan değeri okuyup aktarıyoruz.
    value2.textContent = document.getElementById("input2").value;//textboxtan değeri okuyup aktarıyoruz.
    operator2.textContent = operator;
    value3.textContent = result;

    //tr elementi oluşturuyoruz
    let tr = document.createElement("tr");

    //tdleri tr içine ekliyoruz
    tr.appendChild(value1);
    tr.appendChild(value2);
    tr.appendChild(operator2);
    tr.appendChild(value3);
    tr.appendChild(tSil); //sil butonu.


    //tr elementini liste (tablo) içine ekliyoruz
    liste.appendChild(tr);

    //nenelerin için eklemeden sonra temizleyelim
    ad.value = "";
    soyad.value = "";
    yas.value = "";

    //temizlemeden sonra ad içine odaklansın
    ad.focus();

}

function ResetTheForm(form) {
    if (confirm("Formu temizlemek istediğinize emin misiniz?")) {
        form.reset();

    }
}
