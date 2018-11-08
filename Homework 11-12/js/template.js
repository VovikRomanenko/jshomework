(function(){
  var cache = {};

  this.tmpl = function tmpl(str, data){
    var fn = !/\W/.test(str) ?
      cache[str] = cache[str] ||
        tmpl(document.getElementById(str).innerHTML) :
      new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +
        "with(obj){p.push('" +
        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");
    return data ? fn( data ) : fn;
  };
})();


$(function(){

  var dataObject = {
    members:[
    {id:1, name:"Romanenko Vladimir Vadimovich", text:"<img src='img/image1.jpg'> <br /> Student KPI"},
    {id:9, name:"Lorem ipsum dolor sit amet.", text:"<li> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li><li> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li><li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>"},
    {id:15, name:"My number", text:"+380930000000"},
    {id:22, name:"My facebook profile", text:"<a href='http://facebook.com'>Vladimir Romanenko</a>"},
    ]
  };

  var results = document.getElementById("results");
  results.innerHTML = tmpl("item_tmpl", dataObject);

});
