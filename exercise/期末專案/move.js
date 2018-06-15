const move = {
}

move.html = `
<style type="text/css">
body {
margin-top: 0px;
margin-right: 0px;
margin-bottom: 0px;
margin-left: 0px;
}
body{
height:1000px;
margin-top:0px;
background: -webkit-linear-gradient(yellow,blue);
background: -o-linear-gradient(yellow,blue);
background: -moz-linear-gradient(yellow,blue);
background: linear-gradient(yellow,blue);
text-align:center;
}
</style>
<div style="width:100px">
  <button class="big" onclick="canvas.start()">消除相同色</button><br/><br/>
  <button class="big"  onclick="play.start()">打磚塊</button><br/><br/>
  <button class="big" onclick="next.start()">下一頁</button><br/><br/>
</div>
`

move.start = function () {
  show(move.html)
}
