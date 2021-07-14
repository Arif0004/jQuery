

$(document).ready(function(){

    let btn1 = $('#btn1')
    let btn2 = $('#btn2')
    let p = $('p')

    btn1.click(function(){
        p.hide()
    })

    btn2.click(()=>{
        p.show()
    })

    //toggle
    $('#toggle').click(function(){
        $('h6').toggle()
    })

    //fade
    $('#fadeOut').click(function(){
        $('.ourH1').fadeOut(1000)
    })
    $('#fadeIn').click(function(){
        $('.ourH1').fadeIn(1000)
    })

    //fadeToggle
    $('#fadeToggle').click(function(){
        $('.ourH1').fadeToggle(1000)
    })

    //slide
    $('#slideDown').click(function(){
        $('.ourH4').slideDown(1000)
    })
    $('#slideUp').click(function(){
        $('.ourH4').slideUp(1000)
    })

    //slideToggle
    $('#slideToggle').click(function(){
        $('.ourH4').slideToggle(1000,function(){
            alert("working")
        })
    })

    $('#animation').click(function(){
        $('.animation').animate({
            
        })
    })
    //animate

    $('#animation').click(function(){
        $('.animation').animate({
            left: '250px',
            pacity: '0.5',
            height: '150px',
            width:'150px',
            marginTop: '100px'
    
        });
    })

    //callback
    $("#callback").click(function(){
        $("h5").hide("slow", function(){
          alert("The paragraph is now hidden");
        });
      });

      //chain
      $("#div").css("backgroundColor", "red").slideUp(2000).slideDown(2000);



})

