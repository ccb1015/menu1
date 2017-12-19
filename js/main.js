jQuery(document).ready(function($) {
    var isLateralNavAnimating = false;
    //o鎵撳紑鎴栧叧闂鑸彍鍗�
    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();
        //鑻ュ姩鐢绘鍦ㄨ繘琛岋紝鍒欏仠姝� 
        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0)
                isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
                //鍔ㄧ敾缁撴潫
                isLateralNavAnimating = false;
            });
        }
    });
});