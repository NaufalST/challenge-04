class App {
    constructor() {
      this.searchButton = document.getElementById("btn-search");
      this.carContainerElement = document.getElementById("result");
      this.readyToSearch = false;
      let myAlert = document.getElementById("my-alert");
      myAlert.style.display = 'none';
    }

    async init() {
      await this.load();
  
      // Register click listener
      this.searchButton.onclick = this.run;
    }

    run = async () => {
        this.clear();
        await this.load();

        if (Car.list == null) {
          myAlert.style.display = 'block';
        }

        Car.list.forEach((car) => {
            const node = document.createElement("div");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
        });
    };
  
    async load() {
      const cars = await Binar.listCars(car => {
        let isValid = true;
        let selElmnt = document.getElementById("tipe");
        let setElmnt = document.getElementById("time");
        let tipeDriver = selElmnt.value;
        let timeInput = setElmnt.value;
        let penumpang = document.getElementById("jlh-penumpang").value;
        let date = document.getElementById("date").value;
        let dateInput = date + "T" + timeInput;
        let formDate = Date.parse(dateInput);
        let boolString = car.available.toString();

        console.log(tipeDriver);
        console.log(timeInput);
        console.log(date);
        console.log(penumpang);

        
        if (penumpang !== "" && car.capacity < penumpang) {
            isValid = false;
            
        }

        if (tipeDriver !== boolString) {
            isValid = false;
        }

        return isValid;
      });

      Car.init(cars);

      console.log(Car.list);
    }

    clear = () => {
            let child = this.carContainerElement.firstElementChild;
        
            while (child) {
              child.remove();
              child = this.carContainerElement.firstElementChild;
            }
    };
}
  