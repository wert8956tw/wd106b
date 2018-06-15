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
background: -webkit-linear-gradient(blue,green);
background: -o-linear-gradient(blue,green);
background: -moz-linear-gradient(blue,green);
background: linear-gradient(blue,green);
text-align:center;
}
</style>
<button onclick="Shop.start()">回上一頁喔</button>
`
next.start = function () {
  show(next.html)
}