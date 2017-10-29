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
var G__58544__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__58544 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58545__i = 0, G__58545__a = new Array(arguments.length -  0);
while (G__58545__i < G__58545__a.length) {G__58545__a[G__58545__i] = arguments[G__58545__i + 0]; ++G__58545__i;}
  args = new cljs.core.IndexedSeq(G__58545__a,0,null);
} 
return G__58544__delegate.call(this,args);};
G__58544.cljs$lang$maxFixedArity = 0;
G__58544.cljs$lang$applyTo = (function (arglist__58546){
var args = cljs.core.seq(arglist__58546);
return G__58544__delegate(args);
});
G__58544.cljs$core$IFn$_invoke$arity$variadic = G__58544__delegate;
return G__58544;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__58547__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__58547 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58548__i = 0, G__58548__a = new Array(arguments.length -  0);
while (G__58548__i < G__58548__a.length) {G__58548__a[G__58548__i] = arguments[G__58548__i + 0]; ++G__58548__i;}
  args = new cljs.core.IndexedSeq(G__58548__a,0,null);
} 
return G__58547__delegate.call(this,args);};
G__58547.cljs$lang$maxFixedArity = 0;
G__58547.cljs$lang$applyTo = (function (arglist__58549){
var args = cljs.core.seq(arglist__58549);
return G__58547__delegate(args);
});
G__58547.cljs$core$IFn$_invoke$arity$variadic = G__58547__delegate;
return G__58547;
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

//# sourceMappingURL=debug.js.map?rel=1510936785647
