
class Book {
    title: string;
    author: string;
    pages: number;
  
    constructor(title: string, author: string, pages: number) {
      this.title = title;
      this.author = author;
      this.pages = pages;
    }
  
    getSummary(): string {
      return `${this.title} écrit par ${this.author}, contient ${this.pages} pages.`;
    }
  }
  
  // Classe EBook héritant de Book
  class EBook extends Book {
    fileSize: number; // Taille en Mo
  
    constructor(title: string, author: string, pages: number, fileSize: number) {
      super(title, author, pages);
      this.fileSize = fileSize;
    }
  
    // Redéfinir la méthode getSummary
    getSummary(): string {
      return `${super.getSummary()} Taille du fichier: ${this.fileSize} Mo.`;
    }
  }
  
  // Instancier un objet de Book
  const physicalBook = new Book("1984", "George Orwell", 328);
  console.log(physicalBook.getSummary());
  
  // Instancier un objet de EBook
  const digitalBook = new EBook("Brave New World", "Aldous Huxley", 288, 1.5);
  console.log(digitalBook.getSummary());
  