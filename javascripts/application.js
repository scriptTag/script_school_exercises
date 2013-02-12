var MyFirstHtmlPage = {

	myName: "Mike",

	initMyApp: function (someName) {
		MyFirstHtmlPage.injectMyNameIntoLogoDiv(someName);
		MyFirstHtmlPage.sizeChanger();
	},

	someOtherName: function () {
		return "Neil";
	},

	injectMyNameIntoLogoDiv: function (someName) {
		var categoryDiv = $("#category_bar");

		OtherObject.createHoverOnElement(categoryDiv, MyFirstHtmlPage.setLogoText);
	},

	setLogoText: function () {
		var logoDiv = $("#logo_bar"),
				welcomeText = MyFirstHtmlPage.myName + " and " + MyFirstHtmlPage.someOtherName() +  " say hello fools!";
		logoDiv.text(welcomeText);
	},

	sizeChanger: function () {
		var categoryDiv = $("#category_bar");

		categoryDiv.on("mouseenter", function() {
			$(this).animate({
  			opacity: .5,
  			height: '300px'
			});

		});

		categoryDiv.on("mouseleave", function() {
			$(this).animate({
  			opacity: 1,
  			height: '40px'
			}, 2000);

		});

	}


};

var OtherObject = {

	createHoverOnElement: function (element, callback) {
		element.on("mouseenter", function() {
			callback();
		});
	element.on("mouseleave", function () {
		var logoDiv = $("#logo_bar");
		logoDiv.text("");
	});

	}

}