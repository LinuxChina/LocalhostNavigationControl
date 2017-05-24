/**
 * Created by Administrator on 2017/5/24 0024.
 */
(function () {
    // 定义构造函数
    function LocalhostNavigationControl() {
        this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
        this.defaultOffset = new BMap.Size(0,0);
    }
    //继承
    LocalhostNavigationControl.prototype = new BMap.Control();


    //添加到地图上调用
    LocalhostNavigationControl.prototype.initialize = function (map) {
        //创建一个要求的元素，达到返回的目的

        this.context = document.createElement('div');


        // 按钮四个初始化，并写上事件监听
        this.btntop =document.createElement('button');
        this.btntop.innerText = "上走你";
        this.btntop.addEventListener('click',function (event) {

            map.panBy(0,event.pageY-500);
        });

        this.btnleft = document.createElement('button');
        this.btnleft.innerText = "右走你";
        this.btnleft.addEventListener('click',function () {
            map.panBy(event.pageY+500,0);
        });


        this.btnbottom = document.createElement('button');
        this.btnbottom.innerText = "下走你";
        this.btnbottom.addEventListener('click',function () {
            map.panBy(0,event.pageY+500);
        });


        this.btnright = document.createElement('button');
        this.btnright.innerText = "左走你";
        this.btnright.addEventListener('click',function () {
            map.panBy(event.pageY-500,0);
        });


        
        // 将按钮放到div容器中
        this.context.appendChild(this.btntop);
        this.context.appendChild(this.btnleft);
        this.context.appendChild(this.btnbottom);
        this.context.appendChild(this.btnright);


        //使用map.getContainer()方法得到地图容器，然后将创建的元素放到地图容器中
        map.getContainer().appendChild(this.context);


        return this.context;
    }


    //LocalCalss中公开
    window.localhostNavigationControl = LocalhostNavigationControl;
})();