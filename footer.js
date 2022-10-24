class Footer {
  constructor(footerText, ...urls) {
    this.footerText = footerText;
    this.footerUrls = urls;
  }
  setFooterText(footerText) {
    this.footerText = footerText;
  }
  getFooterText() {
    return this.footerText;
  }
  addUrl(...urls) {
    this.footerUrls = [...this.footerUrls, ...urls];
  }
  getUrls() {
    return this.footerUrls;
  }
}

export default Footer;
