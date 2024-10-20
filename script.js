document.addEventListener("DOMContentLoaded", function () {

    const cars = [
        "Chevrolet Silverado",
        "Ford F-Series",
        "Toyota RAV4",
        "Honda CR-V",
        "GMC Sierra",
        "Toyota Tacoma",
        "Tesla Model Y",
    ];

    const addNewCar = document.getElementById("addNewCar");
    const addCarButton = document.getElementById ("addCarButton");
    const carList = document.getElementById ("carList");


    function renderCarList() {
        carList.innerHTML = "";


        cars.forEach (function (car, index) {
            const li = document.createElement("li");
            li.textContent = car ;


            const removeButton = document.createElement ("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function () {
                cars.splice(index, 1);
                renderCarList();
                
            });

            li.appendChild(removeButton);
            carList.appendChild(li);
            
        });
        
    }

    addCarButton.addEventListener("click" , function () {
        const newCar = addNewCar.value.trim();
        if (newCar) {
            cars.push(newCar);
            newCar.value = "";
            renderCarList ();
            
        }
        
    });

    renderCarList();
    
})