
$(document).ready(function () {
    const video = document.getElementById('vd');
    const source = document.getElementById('vds');
    let sourceChanged = false;

    video.oncanplaythrough = () => {
        if (!sourceChanged) { 
            setTimeout(() => {
                source.src = "https://vod.plaync.com/Lineage2M/20241106/bg_index_loop.mp4"; 
                video.load(); 
                video.play(); 
                sourceChanged = true; 
            }, 7900); 
        }
    };
   });