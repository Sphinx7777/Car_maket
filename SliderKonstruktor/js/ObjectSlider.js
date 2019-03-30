function Slider() {
    this.carrentImage = 0;
    this.arreyImages = [];

    this.prevButton = null;
    this.nextButton = null;
    this.imageSlider = null;

    this.startSlider = function (elId) {
        var that = this;

        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.prevButton = el.querySelector('.showPrevBtn');
        this.nextButton = el.querySelector('.showNextBtn');
        this.imageSlider = el.querySelector('.imageSlider');
       
        this.prevButton.addEventListener('click', function(e) {
            that.onPrevBtnClick(e);
        });
        this.nextButton.addEventListener('click', function(e) {
            that.onNextBtnClick(e);
        });

        this.arreyImages.push('image/arhip.jpg');
        this.arreyImages.push('image/globus.gif');
        this.arreyImages.push('image/okean.jpg');
        this.arreyImages.push('image/oblaka.jpg');
        this.arreyImages.push('image/shtorm.jpg');

        this.prevButton.disabled = true;

        this.imageSlider.src = this.arreyImages[this.carrentImage];
    }
    this.onPrevBtnClick = function (e) {
        this.carrentImage--;
        this.imageSlider.src = this.arreyImages[this.carrentImage];
        this.nextButton.disabled = false;

        if (this.carrentImage === 0) {
            this.prevButton.disabled = true;
        }
    },
    this.onNextBtnClick = function (e) {
        this.carrentImage++;
        this.imageSlider.src = this.arreyImages[this.carrentImage];
        this.prevButton.disabled = false;

        if (this.carrentImage === this.arreyImages.length - 1) {
            this.nextButton.disabled = true;
        }
    }
}

// var sliderFactory = {
//      createSlider: function() {
//         var newSlider = {
//             carrentImage: 0,
//             arreyImages: [],
        
//             prevButton: null,
//             nextButton: null,
//             imageSlider: null,
            
//             startSlider: function (elId) {
//                 var that = this;
        
//                 var elSelector = '#' + elId;
//                 var el = document.querySelector(elSelector);
        
//                 this.prevButton = el.querySelector('.showPrevBtn');
//                 this.nextButton = el.querySelector('.showNextBtn');
//                 this.imageSlider = el.querySelector('.imageSlider');
               
//                 this.prevButton.addEventListener('click', function(e) {
//                     that.onPrevBtnClick(e);
//                 });
//                 this.nextButton.addEventListener('click', function(e) {
//                     that.onNextBtnClick(e);
//                 });
        
//                 this.arreyImages.push('image/arhip.jpg');
//                 this.arreyImages.push('image/globus.gif');
//                 this.arreyImages.push('image/okean.jpg');
//                 this.arreyImages.push('image/oblaka.jpg');
//                 this.arreyImages.push('image/shtorm.jpg');
        
//                 this.prevButton.disabled = true;
        
//                 this.imageSlider.src = this.arreyImages[this.carrentImage];
//             },
//             onPrevBtnClick: function (e) {
//                 this.carrentImage--;
//                 this.imageSlider.src = this.arreyImages[this.carrentImage];
//                 this.nextButton.disabled = false;
        
//                 if (this.carrentImage === 0) {
//                     this.prevButton.disabled = true;
//                 }
//             },
//             onNextBtnClick: function (e) {
//                 this.carrentImage++;
//                 this.imageSlider.src = this.arreyImages[this.carrentImage];
//                 this.prevButton.disabled = false;
        
//                 if (this.carrentImage === this.arreyImages.length - 1) {
//                     this.nextButton.disabled = true;
//                 }
//             }
//         }
    
//         return newSlider;
//     } 
// }
