$('.product .constructor .change').click(function() {
  $(this).siblings('aside').toggleClass("show")
  $(this).parents('article').toggleClass('constructor__opened');
})

$('.product .cancel').click(function() {
  $(this).parents('article').toggleClass('constructor__opened')
  $(this).parents('aside').removeClass('show')
})


$('.product article aside li').each(function() {
    $(this).find('a').append(`<a class="rm-item" href="javascript:void(0)"><span></span><span></span></a>`)
})

$('.product .rm-item').click(function() {
  $(this).parents('li').toggleClass('removed')
})

$('.aside-footer .add_to_cart').click(function() {
  let list = $(this).parents('aside').find('li:not(.removed)'),
      ingredients = {}

  console.log('Добавлено ' + list.length + ' ингредиента')

  list.each(function() {
    let current   = $(this).find('a'),
        id        = current.data('id'),
        text      = current.text()

    ingredients[text] = id


  })

  console.log(ingredients)
})

function getCurrentPostTaxonomy(element) {
  let item = element.parents('li')

  if (!item.hasClass('active')) {
    $('.product .taxonomies .active').removeClass('active')
    item.addClass('active')
  }

  return item.data('term')
}

$('.product .taxonomies li a').click(function() {
  let tax = getCurrentPostTaxonomy($(this))

  console.log(tax)

})

$('.product .product-footer .add_to_cart').click(function() {

  data = {
    tax: getCurrentPostTaxonomy($('.product .taxonomies .active a')),
    variables: $(this).parents('article').find('.atts .active a').data()
  }

  console.log(data)
})


$('.product .atts li a').click(function() {
  let item = $(this).parents('li')

  if (!item.hasClass('active')) {
    $('.product .atts .active').removeClass('active')
    item.addClass('active')
  }
})
