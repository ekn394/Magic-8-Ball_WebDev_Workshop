
function choosePic() {
     var myPix = [
	 "Images/ball1.png",
	 "Images/ball2.png",
	 "Images/ball3.png",
	 "Images/ball4.png",
	 "Images/ball5.png",
	 "Images/ball6.png",
	 "Images/ball7.png",
	 "Images/ball8.png",
	 "Images/ball9.png",
	 "Images/ball10.png"];
	 
     var randomNum = Math.floor ((Math.random() * myPix.length));
	 
     document.getElementById("myPicture").src = myPix[randomNum];
}