window.addEventListener("DOMContentLoaded", () => {

    function parallax(event) {
        this.querySelectorAll(".parallax-el").forEach((element) => {
            const position = element.getAttribute("value");
            const translateX = element.getAttribute("percentTranslateX");
            const translateY = element.getAttribute("percentTranslateY");

            const bounding = element.getBoundingClientRect();
            const widthEl = bounding.width / 2;
            const heightEl = bounding.height / 2

            const x = (window.innerWidth - event.pageX * position) / widthEl;
            const y = (window.innerHeight - event.pageY * position) / heightEl;

            let calX = Number(translateX) + x;
            let calY = Number(translateY) + y;

            if(!translateX) {
                calX = x;
            }

            if(!translateY) {
                calY = y;
            }

            element.style.transform = `translateX(${calX}%) translateY(${calY}%)`;
        });
    }

    document.addEventListener("mousemove", parallax);
    
});