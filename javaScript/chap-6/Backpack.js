/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

 class Backpack {
    constructor(
      // Defines parameters:
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen,
      dateAcquired,
    ) {
      // Define properties:
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.pocketNum = pocketNum;
      this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
      };
      this.lidOpen = lidOpen;
      this.dateAcquired = dateAcquired;
    }
    // Add methods like normal functions:
    toggleLid(lidStatus) {
      this.lidOpen = lidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    }
    backpackAge(){
      var now = new Date();
      var acquired = new Date(this.dateAcquired);
      var elapse = now - acquired;
      var daySince = Math.floor(elapse / (1000 * 3600 * 24 ));
      return daySince;
    }
  }
  
  export default Backpack;
  