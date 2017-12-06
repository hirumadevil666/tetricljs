// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9352__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9353__i = 0, G__9353__a = new Array(arguments.length -  0);
while (G__9353__i < G__9353__a.length) {G__9353__a[G__9353__i] = arguments[G__9353__i + 0]; ++G__9353__i;}
  args = new cljs.core.IndexedSeq(G__9353__a,0,null);
} 
return G__9352__delegate.call(this,args);};
G__9352.cljs$lang$maxFixedArity = 0;
G__9352.cljs$lang$applyTo = (function (arglist__9354){
var args = cljs.core.seq(arglist__9354);
return G__9352__delegate(args);
});
G__9352.cljs$core$IFn$_invoke$arity$variadic = G__9352__delegate;
return G__9352;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9355__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9355 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9356__i = 0, G__9356__a = new Array(arguments.length -  0);
while (G__9356__i < G__9356__a.length) {G__9356__a[G__9356__i] = arguments[G__9356__i + 0]; ++G__9356__i;}
  args = new cljs.core.IndexedSeq(G__9356__a,0,null);
} 
return G__9355__delegate.call(this,args);};
G__9355.cljs$lang$maxFixedArity = 0;
G__9355.cljs$lang$applyTo = (function (arglist__9357){
var args = cljs.core.seq(arglist__9357);
return G__9355__delegate(args);
});
G__9355.cljs$core$IFn$_invoke$arity$variadic = G__9355__delegate;
return G__9355;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
