class Header {
  constructor(brand, ...urls) {
    this.brand = brand;
    this.menu = urls;
  }
  setBrand(brand) {
    this.brand = brand;
  }
  getBrand() {
    return this.brand;
  }
  addUrlToMenu(...urls) {
    this.menu = [...this.menu, ...urls];
  }
  getMenu() {
    return this.menu;
  }
}

export default Header;
