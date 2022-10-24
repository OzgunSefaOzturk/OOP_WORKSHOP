import Header from "./header.js";
import Content from "./content.js";
import Footer from "./footer.js";

// HEADER

let header = new Header("kodlamaIo", "Ana Sayfa");
header.addUrlToMenu("Kurslarım", "Tüm Kurslar", "Kariyer", "SSS");
let brand = header.getBrand();
let menu = header.getMenu();

// COURSES

let content = new Content();
content.addCourse("JavaScript", "js.png", "Ahmet Çetinkaya", 43);
content.addCourse("Python", "py.png", "Ahmet Çetinkaya", 34);
content.addCourse("C#", "c.png", "Ahmet Çetinkaya", 13);
content.addCourse("Java", "java.png", "Ahmet Çetinkaya", 3);

let courses = content.getCourses();

// FOOTER

let footer = new Footer(
  "© Kodlama.io 2022",
  "Kullanım Koşulları",
  "Gizlilik Politikası"
);

footer.addUrl("İletişim");
let footerUrls = footer.getUrls();
let footerText = footer.getFooterText();
console.log(brand);
console.log(menu);
console.log(courses);
console.log(footerText);
console.log(footerUrls);
