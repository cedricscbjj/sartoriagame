class LookImage {
    constructor(src, isClasse, hasModal = false, modalText = "") {
      this.src = src;
      this.isClasse = isClasse; // true = classe, false = pas classe
      this.hasModal = hasModal;
      this.modalText = modalText;
    }
  }
  
  const allImages = [
    new LookImage("image1.jpg", true),
    new LookImage("image2.jpg", false),
    new LookImage("image3.jpg", true, true, "Ce look s’inspire du style napolitain."),
    new LookImage("image4.JPG", false, true, "tres tres moche"),
    new LookImage("image5.jpg", true, true, "preppy black"),
    new LookImage("image6.jpg", true),
    new LookImage("image7.jpg", false, true, "lapo elkann toujours aussi naze"),
    new LookImage("image8.jpg", true),
    new LookImage("image9.JPG", false),
    new LookImage("image10.jpg", true, true, "dinguerie!!! dictator style"),
    new LookImage("image11.JPG", true),
    new LookImage("image12.jpeg", true),
    new LookImage("image13.png", true),
    new LookImage("image14.jpg", true, true, "japon style"),
    new LookImage("image15.jpg", true, true, "tres beau"),
    new LookImage("image16.jpg", true, true, "tres beau"),
    new LookImage("image17.jpg", false, true, "tres moche"),
    new LookImage("image18.jpg", true, true, "tres bien"),
    new LookImage("image19.jpg", false, true, "tres moche"),
    new LookImage("image20.jpg", true, true, "tres beau"),
    new LookImage("image21.jpg", true),
    new LookImage("image22.jpg", false, true, "se la raconte trop"),
    new LookImage("image23.jpg", true, true, "tres beau"),
    new LookImage("image24.JPG", false, true, "merdique"),
    new LookImage("image25.jpg", false, true, "merdique"),
    new LookImage("image26.jpg", false),
    new LookImage("image27.jpg", true),
    new LookImage("image28.jpg", true, true, "ok"),
    new LookImage("image29.jpg", true),
    new LookImage("image30.jpg", true, true, "ok"),
    new LookImage("image31.jpg", false, true, "ok moche"),
    new LookImage("image32.jpg", true, true, "ok bg"),
    new LookImage("image33.jpg", true),
    new LookImage("image34.jpg", true, true, "ok ok"),
    new LookImage("image35.jpg", true),
    new LookImage("image36.jpg", true, true, "ok"),
    new LookImage("image37.jpg", false, true, "ok pt"),
    new LookImage("image38.jpg", true, true, "okk"),
    new LookImage("image39.jpg", true),
    new LookImage("image40.JPG", false, true, "naze"),
    new LookImage("image41.jpg", false, true, "lasdeg"),
    new LookImage("image42.JPG", false, true, "pourri"), 
    new LookImage("image43.jpg", true),
    new LookImage("image44.jpg", false, true, "lame"),
    new LookImage("image45.JPG", false, true, "horrigle"),
    new LookImage("image46.jpg", true, true, "genial"),
    new LookImage("image47.jpg", true, true, "ozwald le boss"),
    new LookImage("image48.jpg", true, true, "italian srtyle"),
    new LookImage("image49.jpg", true, true, "black sartorial"),
    new LookImage("image50.JPG", false, true, "debilite stylistique"),
    new LookImage("image51.jpg", true, true, "simple and stylish"),
    new LookImage("image52.jpg", true, true, "dope"),
    new LookImage("image53.jpg", true, true, "black excellence"),
    new LookImage("image54.jpg", true, true, " noir excellence agin"),
    new LookImage("image55.jpg", true, true, "japanese stylishhh"),
    new LookImage("image56.jpg", true, true, "sprezzatura"),
    new LookImage("image57.jpg", true, true, "black sprezzatura"),
    new LookImage("image58.jpg", true),
    new LookImage("image59.jpg", true),
    new LookImage("image60.jpg", true),
    new LookImage("image61.jpg", true),
    new LookImage("image62.jpg", true),
    new LookImage("image63.jpg", true),
    new LookImage("image64.JPG", false, true, "ghetto again"),
    new LookImage("image65.jpg", false, true, "ghetto"),

  ];
  
  // Fonction pour obtenir 10 images aléatoires uniques
  function getRandomImages() {
    const shuffled = [...allImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
  
  let selectedImages = []; // Pour la session en cours