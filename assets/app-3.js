
(() => {
 const control = document.getElementById('download-outfit');
 control.addEventListener('click', async event => {
  event.preventDefault(); event.stopImmediatePropagation();
  if (!store || busy) return;
  if (spinning) stop();
  const pair = store.current;
  try {
   const source = manifest[pair.key];
   const response = await fetch(source);
   if (!response.ok) throw new Error('Image download failed');
   const url=URL.createObjectURL(await response.blob());
   const attachment=document.createElement('a');
   attachment.href=url;
   attachment.download=`猫天天-${pair.top.name}-${pair.bottom.name}.png`;
   attachment.target='_blank'; attachment.rel='noopener'; attachment.hidden=true;
   document.body.append(attachment); attachment.click(); attachment.remove();
   setTimeout(()=>URL.revokeObjectURL(url),60000);
   $('announcement').textContent='已发起当前穿搭图的附件下载';
  } catch(error) { $('announcement').textContent='下载未能完成，请重试'; console.error(error); }
 },true);
})();
