function getValues(){
    let fizzVal = document.getElementById("fizzNum").value;
    let buzzVal = document.getElementById("buzzNum").value;
    let stopVal = document.getElementById("stopNum").value;

    fizzNumber = parseInt(fizzVal);
    buzzNumber = parseInt(buzzVal);
    stopNumber = parseInt(stopVal);

    if(!Number.isInteger(fizzNumber) || !Number.isInteger(buzzNumber) || !Number.isInteger(stopNumber) || fizzNumber < 1 || buzzNumber < 1 || stopNumber < 1){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter positive integers for all values.",
            backdrop: false
        });
        return;
    }

    if(stopNumber > 5000){
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Please enter a Stop value below 5000",
            backdrop: false,
        });
        return;
    }

    document.getElementById("fizzNum").value = fizzNumber;
    document.getElementById("buzzNum").value = buzzNumber;
    document.getElementById("stopNum").value = stopNumber;

    let fbArr = generateFizzBuzz(fizzNumber, buzzNumber, stopNumber);
    displayFizzBuzz(fbArr);
    // pulls values from the user input boxes
    // converts the values to numbers and checks to see if the numbers are within the criteria created
}

function generateFizzBuzz(fizzNumber, buzzNumber, stopNumber) {
    let fbArr = [];
    for (i = 1; i <= stopNumber; i++) {
        let val = i%(fizzNumber*buzzNumber) == 0 ? "FizzBuzz" : i%fizzNumber == 0 ? "Fizz" : i%buzzNumber == 0 ? "Buzz" : "" + i;
        fbArr.push(val);
    }
    return fbArr;
    // checks which numbers are divisible by fizz, buzz, and fizz*buzz
    // correctly assigns values to the numbers divisible by fizz, buzz, fizz*buzz, and non-divisible ones
}

function displayFizzBuzz(fbArr){
    let table = document.getElementById("results");
    let out = "<tr>";
    
    for(i = 0; i < fbArr.length; i++){
        let val = fbArr[i]
        if(val == "Fizz"){
            out += "<td class='table-warning'>Fizz</td>";
        }
        else if(val == "Buzz"){
            out += "<td class='table-success'>Buzz</td>";
        }
        else if(val == "FizzBuzz"){
            out += "<td class='table-danger'>FizzBuzz</td>";
        }
        else{
            out += "<td class='table-light'>" + val + "</td>";
        }

        if(i%5 == 4){
            out += "</tr><tr>"
        }
    }

    var tcount = fbArr.length;
    while(tcount%5 != 0){
        out += "<td class='table-light'></td>";
        tcount++;
    }

    out += "</tr>"

    table.innerHTML = out;
    // checks the values and assigns the correct table data to display the fizzbuzz/non-fizzbuzz values
}