const next = {}

next.html = `
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
background: -webkit-linear-gradient(green,blue);
background: -o-linear-gradient(green,blue);
background: -moz-linear-gradient(green,blue);
background: linear-gradient(green,blue);
text-align:center;
}
</style>
<button onclick="move.start()">回上一頁喔</button>
`
next.start = function () {
  show(next.html)
}