const tabHeaders = document.querySelectorAll("[data-tab]");
const contentBoxes = document.querySelectorAll("[data-tab-content]");

tabHeaders.forEach ( function (item) {
  item.addEventListener('click',function(){

    contentBoxes.forEach(function(item){
      item.classList.add('hidden');
    })



    const contentBox = document.querySelector(`#${this.dataset.tab}` )
    contentBox.classList.remove('hidden')
    
  })
});
