$(document).ready(function () {
    
     // mask
     $(function () {
        $('[data-mask]').inputmask("+7 999 999 9999");
    });
    
    // Form success
    $(document).on('submit', '.form', function(e){
        
        const inputs = document.querySelectorAll('[data-input]');
            inputs.forEach(input => {
                if(input.value){
                    consultWrapper.innerHTML = success;
                    $('.form-label').removeClass('error')
                    e.preventDefault()
                    return false;
                } else {
                    e.preventDefault()
                    $('.form-label').addClass('error')
                }
            })
      })
      
      
      $(function(){
        $(window).bind("resize",function(){
         if($(this).width() < 568){
           $('.logo-link').addClass('js-logo-link');
           $('.nav-menu').css('display', 'none');
         }
         else{
           $('.logo-link').removeClass('js-logo-link');
           $('.nav-menu').css('display', 'flex');
         }
        }).resize();
        $('.js-logo-link').click(function(e){
            e.preventDefault();
            $('.nav-menu').slideToggle(200).css('display', 'flex');
        })
     });
     
     
});