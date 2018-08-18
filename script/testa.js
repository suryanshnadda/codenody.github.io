var requestButton = document.querySelector(".request-button");
    var showButton = document.querySelector(".show-button");


	   
  
	  
	  
    function LOAD() {
        Push.create("advance javascript course ", {
            body: " advance java script course is launched check it out now ",
            icon: "http://www.codenody.com/images/MPCOD/js.png",
			
            timeout: 10000,
			
            onClick: function() {
                console.log(this);
            }
        });
    };