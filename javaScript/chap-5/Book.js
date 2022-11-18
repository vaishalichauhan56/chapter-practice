class Book {
  constructor(
    // Defines parameters:
    title,
    author,
    publicationYear,
    pageNum,
    currentPage,
    readStatus
  ) {
    // Define properties:
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.pageNum = pageNum;
    this.currentPage = currentPage;
    this.readStatus = readStatus;
  }
  // Add methods like normal functions:
  updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
  }
  updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
  }

}

export default Book;