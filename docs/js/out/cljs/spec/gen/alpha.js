// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64264 = arguments.length;
var i__45193__auto___64265 = (0);
while(true){
if((i__45193__auto___64265 < len__45192__auto___64264)){
args__45199__auto__.push((arguments[i__45193__auto___64265]));

var G__64266 = (i__45193__auto___64265 + (1));
i__45193__auto___64265 = G__64266;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq64263){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64263));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64268 = arguments.length;
var i__45193__auto___64269 = (0);
while(true){
if((i__45193__auto___64269 < len__45192__auto___64268)){
args__45199__auto__.push((arguments[i__45193__auto___64269]));

var G__64270 = (i__45193__auto___64269 + (1));
i__45193__auto___64269 = G__64270;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq64267){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64267));
});

var g_QMARK__64271 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_64272 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64271){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__64271))
,null));
var mkg_64273 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__64271,g_64272){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__64271,g_64272))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__64271,g_64272,mkg_64273){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__64271).call(null,x);
});})(g_QMARK__64271,g_64272,mkg_64273))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__64271,g_64272,mkg_64273){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_64273).call(null,gfn);
});})(g_QMARK__64271,g_64272,mkg_64273))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__64271,g_64272,mkg_64273){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_64272).call(null,generator);
});})(g_QMARK__64271,g_64272,mkg_64273))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__45285__auto___64293 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__45285__auto___64293){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64294 = arguments.length;
var i__45193__auto___64295 = (0);
while(true){
if((i__45193__auto___64295 < len__45192__auto___64294)){
args__45199__auto__.push((arguments[i__45193__auto___64295]));

var G__64296 = (i__45193__auto___64295 + (1));
i__45193__auto___64295 = G__64296;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64293))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64293){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64293),args);
});})(g__45285__auto___64293))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__45285__auto___64293){
return (function (seq64274){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64274));
});})(g__45285__auto___64293))
;


var g__45285__auto___64297 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__45285__auto___64297){
return (function cljs$spec$gen$alpha$list(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64298 = arguments.length;
var i__45193__auto___64299 = (0);
while(true){
if((i__45193__auto___64299 < len__45192__auto___64298)){
args__45199__auto__.push((arguments[i__45193__auto___64299]));

var G__64300 = (i__45193__auto___64299 + (1));
i__45193__auto___64299 = G__64300;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64297))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64297){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64297),args);
});})(g__45285__auto___64297))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__45285__auto___64297){
return (function (seq64275){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64275));
});})(g__45285__auto___64297))
;


var g__45285__auto___64301 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__45285__auto___64301){
return (function cljs$spec$gen$alpha$map(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64302 = arguments.length;
var i__45193__auto___64303 = (0);
while(true){
if((i__45193__auto___64303 < len__45192__auto___64302)){
args__45199__auto__.push((arguments[i__45193__auto___64303]));

var G__64304 = (i__45193__auto___64303 + (1));
i__45193__auto___64303 = G__64304;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64301))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64301){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64301),args);
});})(g__45285__auto___64301))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__45285__auto___64301){
return (function (seq64276){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64276));
});})(g__45285__auto___64301))
;


var g__45285__auto___64305 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__45285__auto___64305){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64306 = arguments.length;
var i__45193__auto___64307 = (0);
while(true){
if((i__45193__auto___64307 < len__45192__auto___64306)){
args__45199__auto__.push((arguments[i__45193__auto___64307]));

var G__64308 = (i__45193__auto___64307 + (1));
i__45193__auto___64307 = G__64308;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64305))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64305){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64305),args);
});})(g__45285__auto___64305))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__45285__auto___64305){
return (function (seq64277){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64277));
});})(g__45285__auto___64305))
;


var g__45285__auto___64309 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__45285__auto___64309){
return (function cljs$spec$gen$alpha$set(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64310 = arguments.length;
var i__45193__auto___64311 = (0);
while(true){
if((i__45193__auto___64311 < len__45192__auto___64310)){
args__45199__auto__.push((arguments[i__45193__auto___64311]));

var G__64312 = (i__45193__auto___64311 + (1));
i__45193__auto___64311 = G__64312;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64309))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64309){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64309),args);
});})(g__45285__auto___64309))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__45285__auto___64309){
return (function (seq64278){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64278));
});})(g__45285__auto___64309))
;


var g__45285__auto___64313 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__45285__auto___64313){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64314 = arguments.length;
var i__45193__auto___64315 = (0);
while(true){
if((i__45193__auto___64315 < len__45192__auto___64314)){
args__45199__auto__.push((arguments[i__45193__auto___64315]));

var G__64316 = (i__45193__auto___64315 + (1));
i__45193__auto___64315 = G__64316;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64313))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64313){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64313),args);
});})(g__45285__auto___64313))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__45285__auto___64313){
return (function (seq64279){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64279));
});})(g__45285__auto___64313))
;


var g__45285__auto___64317 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__45285__auto___64317){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64318 = arguments.length;
var i__45193__auto___64319 = (0);
while(true){
if((i__45193__auto___64319 < len__45192__auto___64318)){
args__45199__auto__.push((arguments[i__45193__auto___64319]));

var G__64320 = (i__45193__auto___64319 + (1));
i__45193__auto___64319 = G__64320;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64317))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64317){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64317),args);
});})(g__45285__auto___64317))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__45285__auto___64317){
return (function (seq64280){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64280));
});})(g__45285__auto___64317))
;


var g__45285__auto___64321 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__45285__auto___64321){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64322 = arguments.length;
var i__45193__auto___64323 = (0);
while(true){
if((i__45193__auto___64323 < len__45192__auto___64322)){
args__45199__auto__.push((arguments[i__45193__auto___64323]));

var G__64324 = (i__45193__auto___64323 + (1));
i__45193__auto___64323 = G__64324;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64321))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64321){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64321),args);
});})(g__45285__auto___64321))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__45285__auto___64321){
return (function (seq64281){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64281));
});})(g__45285__auto___64321))
;


var g__45285__auto___64325 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__45285__auto___64325){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64326 = arguments.length;
var i__45193__auto___64327 = (0);
while(true){
if((i__45193__auto___64327 < len__45192__auto___64326)){
args__45199__auto__.push((arguments[i__45193__auto___64327]));

var G__64328 = (i__45193__auto___64327 + (1));
i__45193__auto___64327 = G__64328;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64325))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64325){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64325),args);
});})(g__45285__auto___64325))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__45285__auto___64325){
return (function (seq64282){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64282));
});})(g__45285__auto___64325))
;


var g__45285__auto___64329 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__45285__auto___64329){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64330 = arguments.length;
var i__45193__auto___64331 = (0);
while(true){
if((i__45193__auto___64331 < len__45192__auto___64330)){
args__45199__auto__.push((arguments[i__45193__auto___64331]));

var G__64332 = (i__45193__auto___64331 + (1));
i__45193__auto___64331 = G__64332;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64329))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64329){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64329),args);
});})(g__45285__auto___64329))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__45285__auto___64329){
return (function (seq64283){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64283));
});})(g__45285__auto___64329))
;


var g__45285__auto___64333 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__45285__auto___64333){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64334 = arguments.length;
var i__45193__auto___64335 = (0);
while(true){
if((i__45193__auto___64335 < len__45192__auto___64334)){
args__45199__auto__.push((arguments[i__45193__auto___64335]));

var G__64336 = (i__45193__auto___64335 + (1));
i__45193__auto___64335 = G__64336;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64333))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64333){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64333),args);
});})(g__45285__auto___64333))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__45285__auto___64333){
return (function (seq64284){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64284));
});})(g__45285__auto___64333))
;


var g__45285__auto___64337 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__45285__auto___64337){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64338 = arguments.length;
var i__45193__auto___64339 = (0);
while(true){
if((i__45193__auto___64339 < len__45192__auto___64338)){
args__45199__auto__.push((arguments[i__45193__auto___64339]));

var G__64340 = (i__45193__auto___64339 + (1));
i__45193__auto___64339 = G__64340;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64337))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64337){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64337),args);
});})(g__45285__auto___64337))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__45285__auto___64337){
return (function (seq64285){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64285));
});})(g__45285__auto___64337))
;


var g__45285__auto___64341 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__45285__auto___64341){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64342 = arguments.length;
var i__45193__auto___64343 = (0);
while(true){
if((i__45193__auto___64343 < len__45192__auto___64342)){
args__45199__auto__.push((arguments[i__45193__auto___64343]));

var G__64344 = (i__45193__auto___64343 + (1));
i__45193__auto___64343 = G__64344;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64341))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64341){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64341),args);
});})(g__45285__auto___64341))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__45285__auto___64341){
return (function (seq64286){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64286));
});})(g__45285__auto___64341))
;


var g__45285__auto___64345 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__45285__auto___64345){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64346 = arguments.length;
var i__45193__auto___64347 = (0);
while(true){
if((i__45193__auto___64347 < len__45192__auto___64346)){
args__45199__auto__.push((arguments[i__45193__auto___64347]));

var G__64348 = (i__45193__auto___64347 + (1));
i__45193__auto___64347 = G__64348;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64345))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64345){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64345),args);
});})(g__45285__auto___64345))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__45285__auto___64345){
return (function (seq64287){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64287));
});})(g__45285__auto___64345))
;


var g__45285__auto___64349 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__45285__auto___64349){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64350 = arguments.length;
var i__45193__auto___64351 = (0);
while(true){
if((i__45193__auto___64351 < len__45192__auto___64350)){
args__45199__auto__.push((arguments[i__45193__auto___64351]));

var G__64352 = (i__45193__auto___64351 + (1));
i__45193__auto___64351 = G__64352;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64349))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64349){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64349),args);
});})(g__45285__auto___64349))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__45285__auto___64349){
return (function (seq64288){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64288));
});})(g__45285__auto___64349))
;


var g__45285__auto___64353 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__45285__auto___64353){
return (function cljs$spec$gen$alpha$return(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64354 = arguments.length;
var i__45193__auto___64355 = (0);
while(true){
if((i__45193__auto___64355 < len__45192__auto___64354)){
args__45199__auto__.push((arguments[i__45193__auto___64355]));

var G__64356 = (i__45193__auto___64355 + (1));
i__45193__auto___64355 = G__64356;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64353))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64353){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64353),args);
});})(g__45285__auto___64353))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__45285__auto___64353){
return (function (seq64289){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64289));
});})(g__45285__auto___64353))
;


var g__45285__auto___64357 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__45285__auto___64357){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64358 = arguments.length;
var i__45193__auto___64359 = (0);
while(true){
if((i__45193__auto___64359 < len__45192__auto___64358)){
args__45199__auto__.push((arguments[i__45193__auto___64359]));

var G__64360 = (i__45193__auto___64359 + (1));
i__45193__auto___64359 = G__64360;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64357))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64357){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64357),args);
});})(g__45285__auto___64357))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__45285__auto___64357){
return (function (seq64290){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64290));
});})(g__45285__auto___64357))
;


var g__45285__auto___64361 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__45285__auto___64361){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64362 = arguments.length;
var i__45193__auto___64363 = (0);
while(true){
if((i__45193__auto___64363 < len__45192__auto___64362)){
args__45199__auto__.push((arguments[i__45193__auto___64363]));

var G__64364 = (i__45193__auto___64363 + (1));
i__45193__auto___64363 = G__64364;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64361))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64361){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64361),args);
});})(g__45285__auto___64361))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__45285__auto___64361){
return (function (seq64291){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64291));
});})(g__45285__auto___64361))
;


var g__45285__auto___64365 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__45285__auto___64365){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64366 = arguments.length;
var i__45193__auto___64367 = (0);
while(true){
if((i__45193__auto___64367 < len__45192__auto___64366)){
args__45199__auto__.push((arguments[i__45193__auto___64367]));

var G__64368 = (i__45193__auto___64367 + (1));
i__45193__auto___64367 = G__64368;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45285__auto___64365))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45285__auto___64365){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__45285__auto___64365),args);
});})(g__45285__auto___64365))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__45285__auto___64365){
return (function (seq64292){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64292));
});})(g__45285__auto___64365))
;

var g__45298__auto___64390 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__45298__auto___64390){
return (function cljs$spec$gen$alpha$any(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64391 = arguments.length;
var i__45193__auto___64392 = (0);
while(true){
if((i__45193__auto___64392 < len__45192__auto___64391)){
args__45199__auto__.push((arguments[i__45193__auto___64392]));

var G__64393 = (i__45193__auto___64392 + (1));
i__45193__auto___64392 = G__64393;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64390))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64390){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64390);
});})(g__45298__auto___64390))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__45298__auto___64390){
return (function (seq64369){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64369));
});})(g__45298__auto___64390))
;


var g__45298__auto___64394 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__45298__auto___64394){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64395 = arguments.length;
var i__45193__auto___64396 = (0);
while(true){
if((i__45193__auto___64396 < len__45192__auto___64395)){
args__45199__auto__.push((arguments[i__45193__auto___64396]));

var G__64397 = (i__45193__auto___64396 + (1));
i__45193__auto___64396 = G__64397;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64394))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64394){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64394);
});})(g__45298__auto___64394))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__45298__auto___64394){
return (function (seq64370){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64370));
});})(g__45298__auto___64394))
;


var g__45298__auto___64398 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__45298__auto___64398){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64399 = arguments.length;
var i__45193__auto___64400 = (0);
while(true){
if((i__45193__auto___64400 < len__45192__auto___64399)){
args__45199__auto__.push((arguments[i__45193__auto___64400]));

var G__64401 = (i__45193__auto___64400 + (1));
i__45193__auto___64400 = G__64401;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64398))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64398){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64398);
});})(g__45298__auto___64398))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__45298__auto___64398){
return (function (seq64371){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64371));
});})(g__45298__auto___64398))
;


var g__45298__auto___64402 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__45298__auto___64402){
return (function cljs$spec$gen$alpha$char(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64403 = arguments.length;
var i__45193__auto___64404 = (0);
while(true){
if((i__45193__auto___64404 < len__45192__auto___64403)){
args__45199__auto__.push((arguments[i__45193__auto___64404]));

var G__64405 = (i__45193__auto___64404 + (1));
i__45193__auto___64404 = G__64405;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64402))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64402){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64402);
});})(g__45298__auto___64402))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__45298__auto___64402){
return (function (seq64372){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64372));
});})(g__45298__auto___64402))
;


var g__45298__auto___64406 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__45298__auto___64406){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64407 = arguments.length;
var i__45193__auto___64408 = (0);
while(true){
if((i__45193__auto___64408 < len__45192__auto___64407)){
args__45199__auto__.push((arguments[i__45193__auto___64408]));

var G__64409 = (i__45193__auto___64408 + (1));
i__45193__auto___64408 = G__64409;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64406))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64406){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64406);
});})(g__45298__auto___64406))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__45298__auto___64406){
return (function (seq64373){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64373));
});})(g__45298__auto___64406))
;


var g__45298__auto___64410 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__45298__auto___64410){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64411 = arguments.length;
var i__45193__auto___64412 = (0);
while(true){
if((i__45193__auto___64412 < len__45192__auto___64411)){
args__45199__auto__.push((arguments[i__45193__auto___64412]));

var G__64413 = (i__45193__auto___64412 + (1));
i__45193__auto___64412 = G__64413;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64410))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64410){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64410);
});})(g__45298__auto___64410))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__45298__auto___64410){
return (function (seq64374){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64374));
});})(g__45298__auto___64410))
;


var g__45298__auto___64414 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__45298__auto___64414){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64415 = arguments.length;
var i__45193__auto___64416 = (0);
while(true){
if((i__45193__auto___64416 < len__45192__auto___64415)){
args__45199__auto__.push((arguments[i__45193__auto___64416]));

var G__64417 = (i__45193__auto___64416 + (1));
i__45193__auto___64416 = G__64417;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64414))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64414){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64414);
});})(g__45298__auto___64414))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__45298__auto___64414){
return (function (seq64375){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64375));
});})(g__45298__auto___64414))
;


var g__45298__auto___64418 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__45298__auto___64418){
return (function cljs$spec$gen$alpha$double(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64419 = arguments.length;
var i__45193__auto___64420 = (0);
while(true){
if((i__45193__auto___64420 < len__45192__auto___64419)){
args__45199__auto__.push((arguments[i__45193__auto___64420]));

var G__64421 = (i__45193__auto___64420 + (1));
i__45193__auto___64420 = G__64421;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64418))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64418){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64418);
});})(g__45298__auto___64418))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__45298__auto___64418){
return (function (seq64376){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64376));
});})(g__45298__auto___64418))
;


var g__45298__auto___64422 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__45298__auto___64422){
return (function cljs$spec$gen$alpha$int(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64423 = arguments.length;
var i__45193__auto___64424 = (0);
while(true){
if((i__45193__auto___64424 < len__45192__auto___64423)){
args__45199__auto__.push((arguments[i__45193__auto___64424]));

var G__64425 = (i__45193__auto___64424 + (1));
i__45193__auto___64424 = G__64425;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64422))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64422){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64422);
});})(g__45298__auto___64422))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__45298__auto___64422){
return (function (seq64377){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64377));
});})(g__45298__auto___64422))
;


var g__45298__auto___64426 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__45298__auto___64426){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64427 = arguments.length;
var i__45193__auto___64428 = (0);
while(true){
if((i__45193__auto___64428 < len__45192__auto___64427)){
args__45199__auto__.push((arguments[i__45193__auto___64428]));

var G__64429 = (i__45193__auto___64428 + (1));
i__45193__auto___64428 = G__64429;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64426))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64426){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64426);
});})(g__45298__auto___64426))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__45298__auto___64426){
return (function (seq64378){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64378));
});})(g__45298__auto___64426))
;


var g__45298__auto___64430 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__45298__auto___64430){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64431 = arguments.length;
var i__45193__auto___64432 = (0);
while(true){
if((i__45193__auto___64432 < len__45192__auto___64431)){
args__45199__auto__.push((arguments[i__45193__auto___64432]));

var G__64433 = (i__45193__auto___64432 + (1));
i__45193__auto___64432 = G__64433;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64430))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64430){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64430);
});})(g__45298__auto___64430))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__45298__auto___64430){
return (function (seq64379){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64379));
});})(g__45298__auto___64430))
;


var g__45298__auto___64434 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__45298__auto___64434){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64435 = arguments.length;
var i__45193__auto___64436 = (0);
while(true){
if((i__45193__auto___64436 < len__45192__auto___64435)){
args__45199__auto__.push((arguments[i__45193__auto___64436]));

var G__64437 = (i__45193__auto___64436 + (1));
i__45193__auto___64436 = G__64437;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64434))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64434){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64434);
});})(g__45298__auto___64434))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__45298__auto___64434){
return (function (seq64380){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64380));
});})(g__45298__auto___64434))
;


var g__45298__auto___64438 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__45298__auto___64438){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64439 = arguments.length;
var i__45193__auto___64440 = (0);
while(true){
if((i__45193__auto___64440 < len__45192__auto___64439)){
args__45199__auto__.push((arguments[i__45193__auto___64440]));

var G__64441 = (i__45193__auto___64440 + (1));
i__45193__auto___64440 = G__64441;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64438))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64438){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64438);
});})(g__45298__auto___64438))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__45298__auto___64438){
return (function (seq64381){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64381));
});})(g__45298__auto___64438))
;


var g__45298__auto___64442 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__45298__auto___64442){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64443 = arguments.length;
var i__45193__auto___64444 = (0);
while(true){
if((i__45193__auto___64444 < len__45192__auto___64443)){
args__45199__auto__.push((arguments[i__45193__auto___64444]));

var G__64445 = (i__45193__auto___64444 + (1));
i__45193__auto___64444 = G__64445;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64442))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64442){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64442);
});})(g__45298__auto___64442))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__45298__auto___64442){
return (function (seq64382){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64382));
});})(g__45298__auto___64442))
;


var g__45298__auto___64446 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__45298__auto___64446){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64447 = arguments.length;
var i__45193__auto___64448 = (0);
while(true){
if((i__45193__auto___64448 < len__45192__auto___64447)){
args__45199__auto__.push((arguments[i__45193__auto___64448]));

var G__64449 = (i__45193__auto___64448 + (1));
i__45193__auto___64448 = G__64449;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64446))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64446){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64446);
});})(g__45298__auto___64446))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__45298__auto___64446){
return (function (seq64383){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64383));
});})(g__45298__auto___64446))
;


var g__45298__auto___64450 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__45298__auto___64450){
return (function cljs$spec$gen$alpha$string(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64451 = arguments.length;
var i__45193__auto___64452 = (0);
while(true){
if((i__45193__auto___64452 < len__45192__auto___64451)){
args__45199__auto__.push((arguments[i__45193__auto___64452]));

var G__64453 = (i__45193__auto___64452 + (1));
i__45193__auto___64452 = G__64453;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64450))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64450){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64450);
});})(g__45298__auto___64450))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__45298__auto___64450){
return (function (seq64384){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64384));
});})(g__45298__auto___64450))
;


var g__45298__auto___64454 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__45298__auto___64454){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64455 = arguments.length;
var i__45193__auto___64456 = (0);
while(true){
if((i__45193__auto___64456 < len__45192__auto___64455)){
args__45199__auto__.push((arguments[i__45193__auto___64456]));

var G__64457 = (i__45193__auto___64456 + (1));
i__45193__auto___64456 = G__64457;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64454))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64454){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64454);
});})(g__45298__auto___64454))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__45298__auto___64454){
return (function (seq64385){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64385));
});})(g__45298__auto___64454))
;


var g__45298__auto___64458 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__45298__auto___64458){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64459 = arguments.length;
var i__45193__auto___64460 = (0);
while(true){
if((i__45193__auto___64460 < len__45192__auto___64459)){
args__45199__auto__.push((arguments[i__45193__auto___64460]));

var G__64461 = (i__45193__auto___64460 + (1));
i__45193__auto___64460 = G__64461;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64458))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64458){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64458);
});})(g__45298__auto___64458))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__45298__auto___64458){
return (function (seq64386){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64386));
});})(g__45298__auto___64458))
;


var g__45298__auto___64462 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__45298__auto___64462){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64463 = arguments.length;
var i__45193__auto___64464 = (0);
while(true){
if((i__45193__auto___64464 < len__45192__auto___64463)){
args__45199__auto__.push((arguments[i__45193__auto___64464]));

var G__64465 = (i__45193__auto___64464 + (1));
i__45193__auto___64464 = G__64465;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64462))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64462){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64462);
});})(g__45298__auto___64462))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__45298__auto___64462){
return (function (seq64387){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64387));
});})(g__45298__auto___64462))
;


var g__45298__auto___64466 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__45298__auto___64466){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64467 = arguments.length;
var i__45193__auto___64468 = (0);
while(true){
if((i__45193__auto___64468 < len__45192__auto___64467)){
args__45199__auto__.push((arguments[i__45193__auto___64468]));

var G__64469 = (i__45193__auto___64468 + (1));
i__45193__auto___64468 = G__64469;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64466))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64466){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64466);
});})(g__45298__auto___64466))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__45298__auto___64466){
return (function (seq64388){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64388));
});})(g__45298__auto___64466))
;


var g__45298__auto___64470 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__45298__auto___64470){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64471 = arguments.length;
var i__45193__auto___64472 = (0);
while(true){
if((i__45193__auto___64472 < len__45192__auto___64471)){
args__45199__auto__.push((arguments[i__45193__auto___64472]));

var G__64473 = (i__45193__auto___64472 + (1));
i__45193__auto___64472 = G__64473;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});})(g__45298__auto___64470))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__45298__auto___64470){
return (function (args){
return cljs.core.deref.call(null,g__45298__auto___64470);
});})(g__45298__auto___64470))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__45298__auto___64470){
return (function (seq64389){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64389));
});})(g__45298__auto___64470))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__45199__auto__ = [];
var len__45192__auto___64476 = arguments.length;
var i__45193__auto___64477 = (0);
while(true){
if((i__45193__auto___64477 < len__45192__auto___64476)){
args__45199__auto__.push((arguments[i__45193__auto___64477]));

var G__64478 = (i__45193__auto___64477 + (1));
i__45193__auto___64477 = G__64478;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__64474_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__64474_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq64475){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64475));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__64479_SHARP_){
return (new Date(p1__64479_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1510936795376
