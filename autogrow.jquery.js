/**
 * Absurdly simple box autogrow system. Most likely a ton of space for improvement
 *
 * @author Mike Joseph <mike.joseph@statenews.com>
 * @copyright State News, Inc.
 * @license BSD
 */
(function($){
    $.fn.autoGrow = function(options){
        var grow = function(el) {

            var winHeight = $(window).height();
            var maxHeight = winHeight - el.offset().top;

            el.css({
                'max-height':   maxHeight,
                'height':       maxHeight,
                'overflow':     'auto'
            });

        };

        return this.each(function(){
            var $this = $(this);
            grow($this);

            if( !options || options.autoResize !== false ) {
                $(window).on('resize', function() {
                    grow($this);
                });
            }
        });
    };

})(jQuery);
