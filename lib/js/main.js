    let dragItems = document.querySelector("#weapons outfits money");
    let container = document.querySelector(".images");
    
    // for (let i = 0; i < dragItems.length; i++) {
        
    // }


    // let navElements = document.querySelectorAll('#weapons #outfits #money');
    // for (var i = 0; i &lt; navElements.length; i++) {
    // console.log('navElements[i]: ', navElements[i].clientHeight);
    // }

    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItems[0]) {
        active = true;
      } else if (e.target === dragItems[1]){
          active = true;
      } else if (e.target === dragItems[2]){
          active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        if (dragItems = "#weapons"){
            setTranslate(currentX, currentY, "#weapons");
        } else if (dragItems = "#outfits"){
            setTranslate(currentX, currentY, "#outfits");
        } else {
            setTranslate(currentX, currentY, "#money")
        }

       
        
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }