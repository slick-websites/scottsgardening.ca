/**==== Slick Laboratory JS ====
---- Copyright 2014 Chase Moskal
**/

window.website = window.ws = new function Website(){
	var ws=this;
	$(function whenDocumentIsReady(){
    
    var $window     = $(window);
    var $htmlBody   = $('html,body');
    var $header     = $('header');
    var $navLinks   = $('a','.nav');
    var $pages      = $('.page','main');
    var $spacers    = $('.spacer');
    var $leadphotos = $('.leadphoto');
    var $main       = $('main');
    
    
    ws.pages = new function Pages(){
      var pages=this;
      var page_anim_time_ms = 500;
      pages.page_label = "about";
      pages.$page = $pages.filter('.about');
      
      var trans = "all "+page_anim_time_ms+"ms ease";
      $pages
        .css({ webkitTransition: trans })
        .css({ transition: trans });
      
      var tx = null;
      
      var scrollPrefs={};
      pages.backToTop = function(label,lastLabel){
        if (lastLabel) scrollPrefs[lastLabel] = $window.scrollTop();
        var target = label
          ? label in scrollPrefs
            ? scrollPrefs[label]
            : 0
          : 0;
        $htmlBody.stop(true,true).animate({
          scrollTop: target
        },page_anim_time_ms);
      };
      
      sc.pages.onNavigate(function(page,details){      
        var pageLabel = (page&&page.label) || 'not-found';
        
        var lastPageLabel = (details.lastPage&&details.lastPage.label) || 'not-found';
        pages.backToTop(pageLabel,lastPageLabel);
        
        pages.current_page_label = pageLabel;
        
        var $page = $pages.filter('.'+pageLabel);
        var $inactivePages = $pages.not($page);
        
        pages.$page = $page;
        
        var $navLink = $navLinks.filter('.nav-'+pageLabel);
        var $inactiveNavLinks = $navLinks.not($navLink);
                
        $inactivePages.css({ opacity: 0 });
        if (tx) clearTimeout(tx);
        tx = setTimeout(function(){ 
            $inactivePages.css({display:'none'});
          },page_anim_time_ms);
        
        $page.css({ display: 'block' });
        setTimeout(function(){
          $page.css({ opacity: 1 });
        },0);
        
        $inactiveNavLinks.removeClass('is-active');
        $navLink.addClass('is-active');
        
        ws.fitter.fit();
      });
    };
    
    
    ws.fitter = new function Fitter(){
      var fitter=this;
      var leadphoto_height_percent_beyond_header = 50;
      
      var fit = fitter.fit = function fit(){
        var header_height = $header.outerHeight();
        var viewport_width = $window.width();
        var viewport_height = $window.height();
        
        var available_space = viewport_height - header_height;
        available_space = available_space<0?-available_space:available_space; // Math.abs lol
                
        $spacers.css({ minHeight: header_height });
        
        var leadphoto_space_gobble = available_space * (leadphoto_height_percent_beyond_header/100);
        $leadphotos.css({ minHeight: header_height + leadphoto_space_gobble });
        
        $main.css({ minHeight: ws.pages.$page.height() });
      }
      
      var requestFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.setTimeout;
      
      function alwaysFit(){
        fit();
        requestFrame(alwaysFit,25);
      }
      alwaysFit();
      //fit();
      //setInterval(fit,1000);
      $window.on('resize',fit);
    };
    
    // Run sc pages after fitter is defined, because they depend on each other
    sc.pages.run();
    
    /*
    ws.enlarger = new function Enlarger(){
      var enlarger=this;
      enlarger.modal = null;
      $('body').on('click','figure[data-enlarge]',function handleEnlargementClicks(){
        var $figure = $(this);
        var src = $figure.attr('data-enlarge');
        var alt = $figure.find('img').attr('alt');
        enlarger.modal = new sc.ModalPhoto(src,alt);
      });
    };
    */
    
  });
};











/*
     FILE ARCHIVED ON 16:18:28 Aug 07, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:03:58 May 04, 2018.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 135.361 (3)
  esindex: 0.007
  captures_list: 155.429
  CDXLines.iter: 15.276 (3)
  PetaboxLoader3.datanode: 132.92 (4)
  exclusion.robots: 0.252
  exclusion.robots.policy: 0.227
  RedisCDXSource: 0.744
  PetaboxLoader3.resolve: 260.957
  load_resource: 282.13
*/