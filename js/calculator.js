$('#plus-one').click(function(){
  $('#categoryTwo').removeClass('hidden');
});
$('#plus-two').click(function(){
  $('#categoryThree').removeClass('hidden');
});
$('#plus-three').click(function(){
  $('#categoryFour').removeClass('hidden');
});
$(window).load(function(){
  var comum = 15.00,
      edredom = 20.00,
      infantil = 19.00,
      terno = 40.00,
      valor = 0.00;
  $('#click-result').click(function(){
    var categoryOne = parseInt($('#category').val());
    var weightOne = parseInt($('#weight-one').val());
    if(!isNaN(categoryOne)){
      switch (categoryOne) {
        case 1: valor = weightOne*comum;
                break;
        case 2: valor = weightOne*infantil;
                break;
        case 3: valor = weightOne*edredom;
                break;
        case 4: valor = weightOne*terno;
                break;
        default:valor = 0.00;
      }
    }
    var categoryTwo = parseInt($('#category-two').val());
    var weightTwo = parseInt($('#weight-two').val());
    if(!isNaN(categoryTwo)){
      switch (categoryTwo) {
        case 1: valor += weightTwo*comum;
                break;
        case 2: valor += weightTwo*infantil;
                break;
        case 3: valor += weightTwo*edredom;
                break;
        case 4: valor += weightTwo*terno;
                break;
        default:valor += 0.00;
      }
    }
    var categoryThree = parseInt($('#category-three').val());
    var weightThree = parseInt($('#weight-three').val());
    if(!isNaN(categoryThree)){
      switch (categoryThree) {
        case 1: valor += weightThree*comum;
                break;
        case 2: valor += weightThree*infantil;
                break;
        case 3: valor += weightThree*edredom;
                break;
        case 4: valor += weightThree*terno;
                break;
        default:valor += 0.00;
      }
    }
    var categoryFour = parseInt($('#category-four').val());
    var weightFour = parseInt($('#weight-four').val());
    if(!isNaN(categoryFour)){
      switch (categoryFour) {
        case 1: valor += weightFour*comum;
                break;
        case 2: valor += weightFour*infantil;
                break;
        case 3: valor += weightFour*edredom;
                break;
        case 4: valor += weightFour*terno;
                break;
        default:valor += 0.00;
      }
    }

    $('#result').val('R$ '+valor+',00')

  });
  setTimeout(function(){
    $('#skel-layers-hiddenWrapper').css('height','0');
  });
});
