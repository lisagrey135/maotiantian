
(() => {
 const frame=document.querySelector('.character');
 const sheep=document.querySelector('.doodle-sheep');
 const yarn=document.querySelector('.doodle-yarn');
 function positionDoodles(){
  const w=frame.clientWidth,h=frame.clientHeight;
  if(!w||!h)return;
  const transform=getComputedStyle(document.getElementById('outfit-image')).transform;
  const scale=transform.startsWith('matrix(')?Number(transform.slice(7).split(',')[0]):1.35;
  const bodyWidth=Math.min(w,h*2/3)*scale*.64;
  const sideSpace=Math.max(0,(w-bodyWidth)/2);
  const size=Math.min(92,Math.max(24,sideSpace*.64),h*.23);
  const left=Math.max(size*.55+3,sideSpace*.55);
  for(const [el,x,y] of [[sheep,left,h*.61],[yarn,w-left,h*.70]]){
   el.style.width=el.style.height=size+'px';el.style.left=x+'px';el.style.top=y+'px';el.style.visibility='visible';
  }
 }
 if(typeof ResizeObserver!=='undefined')new ResizeObserver(positionDoodles).observe(frame);
 window.addEventListener('resize',positionDoodles);
 window.fullImageReviewReady.then(positionDoodles);
})();
