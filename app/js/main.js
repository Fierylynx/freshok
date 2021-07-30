$('.menu-product').each(function() {
  const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации 

  _this.hide();
  _this.wrap('<div class="menu-product"></div>');
  $('<div>', {
      class: 'select-product',
      text: _this.children('option:disabled').text()
  }).insertAfter(_this);

  const selectHead = _this.next('.select-product');
  $('<ul>', {
      class: 'select-product__list'
  }).insertAfter(selectHead);

  const selectList = selectHead.next('.select-product__list');
  for (let i = 1; i < selectOptionLength; i++) {
      $('<li>', {
          class: 'select-product__item',
          html: $('<span>', {
              text: selectOption.eq(i).text()
          })
      })
      .attr('data-value', selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find('.select-product__item');
  selectList.slideUp(0);
  selectHead.on('click', function() {
      if ( !$(this).hasClass('on') ) {
          $(this).addClass('on');
          selectList.slideDown(duration);

          selectItem.on('click', function() {
              let chooseItem = $(this).data('value');

              $('select').val(chooseItem).attr('selected', 'selected');
              selectHead.text( $(this).find('span').text() );

              selectList.slideUp(duration);
              selectHead.removeClass('on');
          });

      } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
      }
  });
});