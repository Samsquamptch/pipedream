const fetch = require("node-fetch");

class Counter {
  constructor(mac = null, token = null) {
    this.mac = mac;
    this.token = token;
  }

  async request(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  normalize(number) {
    return parseInt(number, 10);
  }

  push(number) {
    var url = "https://api.smiirl.com/" +
      (this.mac ? this.mac : "js-nomac") +
      "/number/set?token=" +
      (this.token ? this.token : "js-notoken") +
      "&number=" +
      this.normalize(number);
    return this.request(url);
  }

  add(number) {
    var url = "https://api.smiirl.com/" +
      (this.mac ? this.mac : "js-nomac") +
      "/number/add?token=" +
      (this.token ? this.token : "js-notoken") +
      "&number=" +
      this.normalize(number);
    return this.request(url);
  }

  reset(){
    return this.push(0)
  }

  static jsonResponse(number) {
    return { number: number };
  }

  static stringResponse(number) {
    return JSON.stringify({ number: number });
  }
}

module.exports = Counter;
