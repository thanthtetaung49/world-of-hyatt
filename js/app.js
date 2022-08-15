$(document).ready(function () {   
    // Start Header Section  
    // Start intro

    $(window).scroll(function() {

        var getscrolltop = $(this).scrollTop();
        var getscrollheight = $(document).height();
        var getclientheight = $(window).height();
        
        var calcheight = getscrollheight - getclientheight;
        
        var final = Math.round((getscrolltop / calcheight) * 100);
    
        $("#progresss").css({
            width: `${final}%`
        });
    });


    $(".humbagers").click(function (e) { 
        
        $(".navbar-slides").show("slide", {direction: "left"}, 300);
        e.preventDefault();
        
    });

    $(".languages").click(function (e) { 

        $(".global-arrows").toggleClass("rotate-arrows");
        e.preventDefault();
    });

    $(".logins").click(function (e) {
        
        $(".login-arrows").toggleClass("rotate-arrows");
        $(".login-forms").toggle();
        e.preventDefault();            
    });
    // End Intro
    
    // Start hotel address
    $(window).scroll(function() {
        let getscrolltop = $(this).scrollTop();
        
        if(getscrolltop >= 330) {
            
            $(".park-imgs").hide("slide", 800); // hide logo
            $(".full-sydneys").addClass("parkhyatt-animations"); // move to left side header
            $(".informations").hide("slide", 800); // hide hotel address
            $(".navbarhides").hide("slide", {
                direction: "up"
            }, 800); // hide nav link
            
        } else {
            $(".park-imgs").show("slide", 1000); // show logo
            $(".full-sydneys").removeClass("parkhyatt-animations"); // move back to origin space header
            $(".informations").show("slide", 1000); // show hotel address
            $(".navbarhides").show("slide", {
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
    
    // Start Commitent Care Section Animation 
    $(window).scroll(function() {
        
        let getscrolltop = $(this).scrollTop();
        
        if(getscrolltop >= 750) {
            $(".care-texts").addClass("left");
            $(".global-logos").addClass("right");
        } else {
            $(".care-texts").removeClass("left");
            $(".global-logos").removeClass("right");
        }
    });
    // End Commitent Care Section Animation 
    
    // Start Amenities Section
    $(window).scroll(function() {
        
        let getscrolltop = $(this).scrollTop();
        
        if(getscrolltop >= 1000) {
            $(".amenitiess").addClass("amenities-animations");
        } else {
            $(".amenitiess").removeClass("amenities-animations");
        }
    });

    $(".detail-amenities").hide();

    $(".amenities-btns button").click(function (e) { 

        $(".amenitie-arrows").toggleClass("rotate-arrows");
        $(".detail-amenities").toggle();
        e.preventDefault();   
    });
    // End Amenities Section
    
    // Start Safety First Section 
    $(window).scroll(function() {
        
        let getscrolltop = $(this).scrollTop();
        
        if(getscrolltop >= 1500) {
            $(".anis").addClass("right");
        } else {
            $(".anis").removeClass("right");
        }
    });
    // End Safety First Section 
    
    // Start Map,Parking+Transportation Section
    $(window).scroll(function() {
        let getscrolltop = $(this).scrollTop();
        
        if(getscrolltop >= 3000) {
            $(".aniss").addClass("right");
        } else {
            $(".aniss").removeClass("right");
        }
    });
    // End Map,Parking+Transportation Section

    // Start Our Hotel Section 
    // Start Rooftop
    $(".rooftops").click(function (e) { 
        e.preventDefault();
        
        $(".hotel-arrows").toggleClass("rotate-arrows");
        $(".text-rooftops").toggle();
    });
    // End Rooftop

    // Start Guesthouse
    $(".guesthouses").click(function (e) { 
        e.preventDefault();

        $(".hotel-arrows").toggleClass("rotate-arrows");
        $(".text-guesthouses").toggle();
        
    });
    // End Guesthouse

    // Start Fitness 
    $(".fitness").click(function (e) { 
        e.preventDefault();
        
        $(".hotel-arrows").toggleClass("rotate-arrows");
        $(".text-fitness").toggle();
    });
    // End Fitness

    // Start Art
    $(".art").click(function (e) { 
        e.preventDefault();
        
        $(".hotel-arrows").toggleClass("rotate-arrows");
        $(".text-art").toggle();
    });
    // End Art 
    // End Our Hotel Section

    // Start Copyright Section 
    let today = new Date();
    
    let getyear = today.getUTCFullYear();
    
    $("#year").text(getyear);
    // End Copyright Section

    // Start Modal Section 
    $("#checkin").datepicker({
        showAnim: "fade",
        duration: 500,

        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

        changeMonth: true,
        changeYear: true,

        dateFormat: "dd/MM/yy",

        onClose: function(selectdate) {
            $("#checkout").datepicker("option", "minDate", selectdate);
        }
    });

    $("#checkout").datepicker({
        showAnim: "fade",
        duration: 500,

        dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

        changeMonth: true,
        changeYear: true,

        dateFormat: "dd/MM/yy",

        onClose: function(selectdate) {
            $("#checkin").datepicker("option", "maxDate", selectdate);
        }
    });

    let roomnumber = 0;

    $("#plus").click("click", function() {

        roomnumber++;
        restrictroom(roomnumber);
    });

    $("#minus").click("click", function() {

        roomnumber--;
        restrictroom(roomnumber);
    }) 

    function restrictroom (restrictroom) {

        if (restrictroom < 1) {
            restrictroom = 0;
        }

        $("#roomnumbers").text(`${restrictroom}`);

        console.log(restrictroom);
    }
    // End Modal Section 
});