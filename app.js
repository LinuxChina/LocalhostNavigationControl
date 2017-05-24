/**
 * Created by Administrator on 2017/5/24 0024.
 */
(function () {


    var map = new BMap.Map("container");
    map.centerAndZoom('广州',15);


    var Obj = new localhostNavigationControl();
    map.addControl(Obj);


})();