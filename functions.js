
function scatterIn() {
    setTimeout(function() {
    $('#scatter').addClass('animated bounceInDown');
    $('#scatter').css('visibility', 'visible');
        
    }, 2000)
}
scatterIn();

function forceIn() {
    setTimeout(function() {
    $('#force').addClass('animated bounceInLeft');
    $('#force').css('visibility', 'visible');
        
    }, 3000)
}
forceIn();

function worldIn() {
    setTimeout(function() {
    $('#world').addClass('animated flipInY');
    $('#world').css('visibility', 'visible');
        
    }, 4000)
    
    setTimeout(function() {
      
        $('#world').addClass('animated hinge');
        $('#world').removeClass('flipInY');
    }, 6500);
    setTimeout(function() {
        $('#world').removeClass('hinge');
        $('#world').addClass('animated rotateInUpLeft');
    },9500)
}
worldIn();

function heatIn() {
    setTimeout(function() {
    $('#heat').addClass('animated flipInX');
    $('#heat').css('visibility', 'visible');
        
    }, 5000)
}

heatIn();

