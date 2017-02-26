$(document).ready(function(){



	//DROPDOWN SAAT UKURAN HP
    $(".button-collapse").sideNav();

    //JQUERY SLIDER
      $('.slider').slider({full_width: true});

    //JQUERY TABEL
     $('ul.tabs').tabs();

    //JQUERY SELECT
  $('select').material_select();

	//JQUERY DIALOG
	Materialize.toast(message, displayLength, className, completeCallback);
  	Materialize.toast('ADA MASALAH ORDERAN? CONTACT ME!', 4000)

  	//collapse
  	 $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });



    

});