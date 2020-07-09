import xr from 'xr'
import one from '../templates/timelineOne.html'
import two from '../templates/timelineThree.html'
import three from '../templates/timelineTwo.html'
import Mustache from 'mustache'

// load the docs data
xr.get('https://interactive.guim.co.uk/docsdata-test/1p5wUohEYbJx8V8xAcbEb0PMtgRJFftSu9lJDn4O8VfQ.json').then((resp) => {
    var sheets = resp.data.sheets;
    console.log(sheets);

    // render just the html for the blocks
    var html = Mustache.render(one, sheets);
    var htmlTwo = Mustache.render(two, sheets);
    var htmlThree = Mustache.render(three, sheets);

    // inject that rendered html into the empty div we declared in main.html
    document.querySelector(".interactive-blocks-world").innerHTML = html;
    document.querySelector(".interactive-blocks-UK").innerHTML = htmlTwo;
    document.querySelector(".interactive-blocks-US").innerHTML = htmlThree;
});

function scroll() {
  var blocks = document.querySelector('.bh-blocks');
  document.addEventListener('scroll', function(){
    var top = blocks.getBoundingClientRect().top;
    if(top < 1) {
      blocks.classList.add('overflow');
    }else {
      blocks.classList.remove('overflow');
    }
  });
}scroll();
