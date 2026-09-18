
// Shared product source for random selection and manual wardrobe.
const correctedSweater = embeddedCatalog.find(item => item.id === 'top-9');
if (correctedSweater) {
  correctedSweater.source = './assets/8d9658f9afda3f1cfd7c0487.png';
  document.querySelectorAll('.closet-item[data-id="top-9"] img').forEach(img => { img.src = correctedSweater.source; });
  if (store && store.current.topId === 'top-9') renderReels(store.current);
}
