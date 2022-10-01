//* ======================================================
//*        OOP - Static and Private  (ES6)
//* ======================================================

//? Static degiskenler ve metotlar butun bir class'i ilgilendiren
//? verileri tutmak veya degistirmek icin elverislidir.

//? Eger nesnelerden bagimsiz sadece ilgili class' a ait bir degiskene
//? ihtiyac varsa o zaman static degisken kullanmak mantiklidir.

//! Encapsulation OOP'nin temel unsurlarindan birisidir.
//! Bir class icerisindeki degeri/durumu class disindan dogrudan ve
//! izinsiz erisimlere kapatmak icin kullanilir.

//! Encapsulation private degiskenler ve private metotlar yardimiyla yapilir.
//! ES6 ve sornasinda private degisken ve metotlari belirtmek icin
//! # (hash) kullanilir.

//! Private degiskenler dogrudan erisilemezler. Bunlara erismek icin class
//! icerisinde tanimlanan public (genel) erisimli getter ve setter metotlar
//! kullanilir.

//! Private metotlara ise class disirasindan da eriselemez.
//! Private metotlara ancak class icerisindeki diger metotlar ile erisilebilir.

class Book {
    //! Private property
    #id;

    //!static property
    static counter = 0;

    constructor(title, author, year) {
      this.author = author;
      this.title = title;
      this.year = year;
      
        
      this.#id =44;
      this.getTitle = function () {
        return this.title;
      };

      //* static degiskenin degerini degistirdik
      Book.counter++; //! ClasName.propertyName
    }

    getId(){
        return this.#id;
    }

    getSummary() {
        return `${this.title} was writtten by ${this.author} so its age is ${this.#computeAge()}`;
      }

    #computeAge() {
        return new Date().getFullYear()-this.year;
    }

    setId(id){
        this.#id=id;
    }

    static compareAge(b1,b2) {
        return `Books age difference: ${b1.year-b2.year}`
    }
}

const book1 = new Book("Simyaci", "Poelho Coelgo", 1988);

console.log(book1.title);

//? Private bir degiskenin degeri class disindan dogrudan okunamaz.
// console.log(book1.#id);

//? Private bir degiskenin degeri class disindan dogrudan degistirilemez
// book1.#id = "11111";

//! Private field '#id' must be declared in an enclosing class (at 5-static-private.js:42:18)
//? Private degiskeni okuma
console.log(book1.getId());

//? Private degiskene deger atama
book1.setId("00000");
console.log(book1.getId());

console.log(book1.getSummary());


const book2 = new Book("abc", "ali veli", 1970);
const book3 = new Book("XYZ", "ahme can", 1997);
const book4 = new Book("cücü", "yazılımcı", 2020);

console.log(Book.counter);

console.log(Book.compareAge(book3, book2));