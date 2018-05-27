//添加事件對象
function addEvent (cobj,type,data,callback){
    this.cobj=cobj;
    this.type=type;
    this.data=data;
    this.callback=callback;
    this.redraw();
}

addEvent.prototype={
    redraw:function (){
        if(this.type=="arc"){
            this.cobj.beginPath();
            var arr=this.data.split(",");
            this.cobj.arc(arr[0],arr[1],arr[2],arr[3],arr[4]);
            this.cobj.fill();      
        }
        if(this.type=="rect"){
            this.cobj.beginPath();
            var arr=this.data.split(",");
            this.cobj.rect(arr[0],arr[1],arr[2],arr[3],arr[4]);
            this.cobj.fill();
        }
    },
    add:function(mx,my){
        if(this.cobj.isPointInPath(mx,my)){
            this.callback();
        }
    }
}