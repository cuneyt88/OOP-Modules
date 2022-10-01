//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.

class Book {
    constructor(title, author, year) {
      this.author = author;
      this.title = title;
      this.year = year;
  
      //? Bu alanda yazilan bir metot butun instance'ların belleginde tek tek yer kaplar.
      this.getTitle = function () {
        return this.title;
      };
    }
  
    //! Bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur.
    getAge() {
      return new Date().getFullYear() - this.year;
    }
    getSummary() {
      return `${this.title} was writtten by ${this.author} in ${this.year}`;
    }
  }
  
  //? Sub-Class tanimlamasi (Inheritance)
  class Magazine extends Book {
    constructor(title, author, year, month) {
      //! Book'un constructor'i cagrildi
      super(title, author, year); //! Book'un prototpye kopyalnmis
      this.month = month;
    }
    //! Overrided Metot (Parent class'daki bir metodun farkli
    //! fonksiyonellikle  ve ayni parametre listesi ile yeniden tanimlanmasi)
    getSummary() {
      return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
    }
  
    //!Override edilmis bir parent fonksiyonunu kullanmak icin super keyword'u kullanilabilr.
    getSummaryParent() {
      return super.getSummary();
    }
  }
  
  //? Magazine objesinin yeni bir instance
  const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
  console.log(mag1.getSummary());
  console.log(mag1.getSummaryParent());
  
  const book1 = new Book("Simyacı", "Poelho Coelgo", 1988);
  console.log(book1);
  book1.setPrice(100);
  console.log(book1);