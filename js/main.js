(function($) {
    $(document).ready(function() {

        $('.nav-toogle').click(function(e) {
            e.preventDefault();
            $('.nav-toogle').toggleClass('state-active');
            $('.header__menu').toggleClass('state-active');
            $('body').toggleClass('state-locked');
        });

        var customSelect = $(".custom-select");

        customSelect.each(function() {
            var thisCustomSelect = $(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $("<div></div>", {
                    class: "select__selected"
                })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $("<div></div>", {
                class: "select__dropdown select__dropdown-hide"
            }).appendTo(thisCustomSelect);

            options.each(function() {
                var that = $(this),
                    optionText = that.text();

                var item = $("<div></div>", {
                        class: "select__item",
                        on: {
                            click: function() {
                                var selectedOptionText = that.text();
                                selectedItem.text(selectedOptionText).removeClass("arrowanim");
                                allItems.addClass("select__dropdown-hide");
                            }
                        }
                    })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $(".select__selected"),
            allItems = $(".select__dropdown");

        selectedItem.on("click", function(e) {
            var currentSelectedItem = $(this),
                currentAllItems = currentSelectedItem.next(".select__dropdown");

            allItems.not(currentAllItems).addClass("select__dropdown-hide");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim");

            currentAllItems.toggleClass("select__dropdown-hide");
            currentSelectedItem.toggleClass("arrowanim");

            e.stopPropagation();
        });

        $(document).on("click", function() {
            var opened = $(".select__dropdown:not(.select__dropdown-hide)"),
                index = opened.parent().index();

            customSelect
                .eq(index)
                .find(".select__dropdown")
                .addClass("select__dropdown-hide");
            customSelect
                .eq(index)
                .find(".select__selected")
                .removeClass("arrowanim");
        });

        var slider = document.getElementById("myRange");
        var output = document.getElementById("order__range-value");
        output.innerHTML = slider.value;

        slider.oninput = function() {
            output.innerHTML = this.value;
        }

    });
})(jQuery);