$(document).ready(function () {
    
    // Start Header Section  
        // Start intro
    $(".logins").click(function (e) {
            
        $(".login-downs").toggleClass("rotate-arrows");
        $(".login-forms").slideToggle(500);
        e.preventDefault();            
    });

    $(".humbagers").click(function (e) { 

        $(".navbar-slides").show("slide", {direction: "left"}, 300);
        e.preventDefault();

    });
        // End Intro

        // Start hotel address
    $(window).scroll(function() {
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if(getscrolltop >= 330) {

            $(".park-imgs").hide("slide", 800); // hide logo
            $(".full-sydneys").addClass("left-annimations"); // move to left side header
            $(".informations").hide("slide", 800); // hide hotel address
            $(".navbarlink-hides").hide("slide", {
                direction: "up"
            }, 800); // hide nav link

        } else {
            $(".park-imgs").show("slide", 1000); // show logo
            $(".full-sydneys").removeClass("left-annimations"); // move back to origin space header
            $(".informations").show("slide", 1000); // show hotel address
            $(".navbarlink-hides").show("slide", {
                direction:"up"
            }, 1000); // show nav link
        }

        
    });
        // End hotel address

        // Start navbar
    $(".crosss").click(function (e) { 
        
        $(".navbar-slides").hide("slide", {direction: "left"}, 300);
        e.preventDefault();  
    });
        // End navbar
    // End Header Section
});