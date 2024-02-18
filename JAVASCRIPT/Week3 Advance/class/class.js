export class Customers {
  constructor(id, firstname, lastname, address, phone,DateTime) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.phone = phone;
    this.DateTime = DateTime;
  }
  getCustomer(){
    return `id:${this.id} firstname:${this.firstname} lastname:${this.lastname} address:${this.address} phone:${this.phone}, DateTime:${this.DateTime}`
}}

