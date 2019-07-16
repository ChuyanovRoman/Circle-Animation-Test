   var circle = document.getElementsByClassName('layer');
   var size = [10, 33, 56];
   var padding = [40, 28, 16];
   setInterval(frame, 70);

   function frame() {
       size[0] = size[0] + 2;
       size[1] = size[1] + 2;
       size[2] = size[2] + 2;
       padding[0]--;
       padding[1]--;
       padding[2]--;
       for (var i = 0; i < circle.length; i++) {
           circle[i].style.height = size[i] + 'px';
           circle[i].style.width = size[i] + 'px';
           circle[i].style.padding = padding[i] + 'px';
       }
       if (size[0] >= 80) {
           size[0] = 10;
           padding[0] = 40;
       }
       if (size[1] >= 80) {
           size[1] = 10;
           padding[1] = 40;
       }
       if (size[2] >= 80) {
           size[2] = 10;
           padding[2] = 40;
       }
   }