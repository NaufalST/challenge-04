class Car {
    static list = [];
  
    static init(cars) {
      this.list = cars.map((i) => new this(i));
    }
  
    constructor({
      id,
      plate,
      manufacture,
      model,
      image,
      rentPerDay,
      capacity,
      description,
      transmission,
      available,
      type,
      year,
      options,
      specs,
      availableAt,
    }) {
      this.id = id;
      this.plate = plate;
      this.manufacture = manufacture;
      this.model = model;
      this.image = image;
      this.rentPerDay = rentPerDay;
      this.capacity = capacity;
      this.description = description;
      this.transmission = transmission;
      this.available = available;
      this.type = type;
      this.year = year;
      this.options = options;
      this.specs = specs;
      this.availableAt = availableAt;
    }
  
    render() {

      return `
      <div class="item-list">
        <img src="${this.image}" alt="">
        <h6>${this.manufacture}/${this.type}</h6>
        <h3>Rp ${this.rentPerDay} / hari</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, omnis neque earum et quaerat facilis ducimus accusamus repudiandae recusandae ad?</p>
        <p><img src="/public/images/fi_users.png" class="img-item-list" alt="">${this.capacity} orang</p>
        <p><img src="/public/images/fi_settings.png" class="img-item-list" alt="">${this.transmission}</p>
        <p><img src="/public/images/fi_calendar.png" class="img-item-list" alt="">Tahun ${this.year}</p>
        <button class="btn-choice">Pilih Mobil</button>            
      </div>      
      `;
    }
}