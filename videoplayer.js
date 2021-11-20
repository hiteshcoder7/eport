var player = videojs('videoPlayer',{
// autoplay : "muted",
 controls  : true,

fluid : true, 
// aspectRatio : '4:3'
playbackRates : [0.25,0.5,1,1.5,2 ],
VideoPlaybackQuality : true, 

  
  

});

player.watermalk({
  file : '',
  xpos:0,
  ypos: 0,
  opacity:1,
  clickable :true,
  url : ''
})