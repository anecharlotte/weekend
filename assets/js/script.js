$( document ).ready(function() {
  zoomRotate();
  shake();
  sad();

  /* Oui */
  /* Vodka */
  $('.vodkaOmbre').hover(function(){
    $(this).hide();
  });
  $('.vodka').hover(function(){
    $('.vodkaOmbre').hide();
    $('.texteVodka').show();
  }, function(){
    $('.vodkaOmbre').show();
    $('.texteVodka').hide();
  });

  /* ticket */
  $('.ticketOmbre').hover(function(){
    $(this).hide();
  });
  $('.ticket').hover(function(){
    $('.ticketOmbre').hide();
    $('.texteTicket').show();
  }, function(){
    $('.ticketOmbre').show();
    $('.texteTicket').hide();
  });

  /* protection */
  $('.protectionOmbre').hover(function(){
    $(this).hide();
  });
  $('.protection').hover(function(){
    $('.protectionOmbre').hide();
    $('.texteProtection').show();
  }, function(){
    $('.protectionOmbre').show();
    $('.texteProtection').hide();
  });

  /* lingerie */
  $('.lingerieOmbre').hover(function(){
    $(this).hide();
  });
  $('.lingerie').hover(function(){
    $('.lingerieOmbre').hide();
    $('.texteLingerie').show();
  }, function(){
    $('.lingerieOmbre').show();
    $('.texteLingerie').hide();
  });
  /* Fin Oui */
  /* Non */
  /* Eau */
  $('.bouteilleOmbre').hover(function(){
    $(this).hide();
  });
  $('.bouteille').hover(function(){
    $('.bouteilleOmbre').hide();
    $('.texteBouteille').show();
  }, function(){
    $('.bouteilleOmbre').show();
    $('.texteBouteille').hide();
  });
  /* aspirine */
  $('.cernesOmbre').hover(function(){
    $(this).hide();
  });
  $('.cernes').hover(function(){
    $('.cernesOmbre').hide();
    $('.texteCernes').show();
  }, function(){
    $('.cernesOmbre').show();
    $('.texteCernes').hide();
  });
  /* Cernes */
  $('.aspirineOmbre').hover(function(){
    $(this).hide();
  });
  $('.aspirine').hover(function(){
    $('.aspirineOmbre').hide();
    $('.texteAspirine').show();
  }, function(){
    $('.aspirineOmbre').show();
    $('.texteAspirine').hide();
  });
  /* Allumettes */
  $('.allumettesOmbre').hover(function(){
    $(this).hide();
  });
  $('.allumettes').hover(function(){
    $('.allumettesOmbre').hide();
    $('.texteAllumettes').show();
  }, function(){
    $('.allumettesOmbre').show();
    $('.texteAllumettes').hide();
  });
  /* Fin Non */
  /* bientot */
  /* Agenda */
  $('.agendaOmbre').hover(function(){
    $(this).hide();
  });
  $('.agenda').hover(function(){
    $('.agendaOmbre').hide();
    $('.texteAgenda').show();
  }, function(){
    $('.agendaOmbre').show();
    $('.texteAgenda').hide();
  });
  /* Clef */
  $('.clefOmbre').hover(function(){
    $(this).hide();
  });
  $('.clef').hover(function(){
    $('.clefOmbre').hide();
    $('.texteClef').show();
  }, function(){
    $('.clefOmbre').show();
    $('.texteClef').hide();
  });
  /* Monnaie */
  $('.monnaieOmbre').hover(function(){
    $(this).hide();
  });
  $('.monnaie').hover(function(){
    $('.monnaieOmbre').hide();
    $('.texteMonnaie').show();
  }, function(){
    $('.monnaieOmbre').show();
    $('.texteMonnaie').hide();
  });
  /* Mouchoirs */
  $('.mouchoirsOmbre').hover(function(){
    $(this).hide();
  });
  $('.mouchoirs').hover(function(){
    $('.mouchoirsOmbre').hide();
    $('.texteMouchoirs').show();
  }, function(){
    $('.mouchoirsOmbre').show();
    $('.texteMouchoirs').hide();
  });
  /* Fin Bientot */
});


function zoomRotate(){
  if($('.oui').hasClass('zoomRotate')){
    $('.oui').removeClass('zoomRotate');
  }else{
    $('.oui').addClass('zoomRotate');
  }
  setTimeout(function () {
    zoomRotate();
  }, 2000);
}

function shake(){

  if($('.bientot').hasClass('shake')){
    $('.bientot').removeClass('shake');
  }else{
    $('.bientot').addClass('shake');
  }
  setTimeout(function () {
    shake();
  }, 1000);
}


function sad(){

  if($('.non').hasClass('sad')){
    $('.non').removeClass('sad');
    console.log("remove")
  }else{
    $('.non').addClass('sad');
    console.log('add')
  }
  setTimeout(function () {
    sad();
  }, 2000);
}
