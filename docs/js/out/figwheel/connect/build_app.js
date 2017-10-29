// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect.build_app');
goog.require('cljs.core');
goog.require('mytetris.core');
goog.require('mytetris.dev');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__65831__delegate = function (x){
if(cljs.core.truth_(mytetris.core.mount_root)){
return cljs.core.apply.call(null,mytetris.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mytetris.core/mount-root' is missing");
}
};
var G__65831 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__65832__i = 0, G__65832__a = new Array(arguments.length -  0);
while (G__65832__i < G__65832__a.length) {G__65832__a[G__65832__i] = arguments[G__65832__i + 0]; ++G__65832__i;}
  x = new cljs.core.IndexedSeq(G__65832__a,0,null);
} 
return G__65831__delegate.call(this,x);};
G__65831.cljs$lang$maxFixedArity = 0;
G__65831.cljs$lang$applyTo = (function (arglist__65833){
var x = cljs.core.seq(arglist__65833);
return G__65831__delegate(x);
});
G__65831.cljs$core$IFn$_invoke$arity$variadic = G__65831__delegate;
return G__65831;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_app.js.map?rel=1510936797387
