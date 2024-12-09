var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Book = /** @class */ (function () {
    function Book(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    Book.prototype.getSummary = function () {
        return "".concat(this.title, " \u00E9crit par ").concat(this.author, ", contient ").concat(this.pages, " pages.");
    };
    return Book;
}());
// Classe EBook héritant de Book
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(title, author, pages, fileSize) {
        var _this = _super.call(this, title, author, pages) || this;
        _this.fileSize = fileSize;
        return _this;
    }
    // Redéfinir la méthode getSummary
    EBook.prototype.getSummary = function () {
        return "".concat(_super.prototype.getSummary.call(this), " Taille du fichier: ").concat(this.fileSize, " Mo.");
    };
    return EBook;
}(Book));
// Instancier un objet de Book
var physicalBook = new Book("1984", "George Orwell", 328);
console.log(physicalBook.getSummary());
// Instancier un objet de EBook
var digitalBook = new EBook("Brave New World", "Aldous Huxley", 288, 1.5);
console.log(digitalBook.getSummary());
