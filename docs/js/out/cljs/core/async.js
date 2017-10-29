// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61327 = arguments.length;
switch (G__61327) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async61328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61328 = (function (f,blockable,meta61329){
this.f = f;
this.blockable = blockable;
this.meta61329 = meta61329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61330,meta61329__$1){
var self__ = this;
var _61330__$1 = this;
return (new cljs.core.async.t_cljs$core$async61328(self__.f,self__.blockable,meta61329__$1));
});

cljs.core.async.t_cljs$core$async61328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61330){
var self__ = this;
var _61330__$1 = this;
return self__.meta61329;
});

cljs.core.async.t_cljs$core$async61328.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61328.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61328.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async61328.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async61328.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61329","meta61329",1326528997,null)], null);
});

cljs.core.async.t_cljs$core$async61328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61328";

cljs.core.async.t_cljs$core$async61328.cljs$lang$ctorPrWriter = (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async61328");
});

cljs.core.async.__GT_t_cljs$core$async61328 = (function cljs$core$async$__GT_t_cljs$core$async61328(f__$1,blockable__$1,meta61329){
return (new cljs.core.async.t_cljs$core$async61328(f__$1,blockable__$1,meta61329));
});

}

return (new cljs.core.async.t_cljs$core$async61328(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__61334 = arguments.length;
switch (G__61334) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__61337 = arguments.length;
switch (G__61337) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__61340 = arguments.length;
switch (G__61340) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_61342 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_61342);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_61342,ret){
return (function (){
return fn1.call(null,val_61342);
});})(val_61342,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__61344 = arguments.length;
switch (G__61344) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__44968__auto___61346 = n;
var x_61347 = (0);
while(true){
if((x_61347 < n__44968__auto___61346)){
(a[x_61347] = (0));

var G__61348 = (x_61347 + (1));
x_61347 = G__61348;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__61349 = (i + (1));
i = G__61349;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async61350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61350 = (function (flag,meta61351){
this.flag = flag;
this.meta61351 = meta61351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_61352,meta61351__$1){
var self__ = this;
var _61352__$1 = this;
return (new cljs.core.async.t_cljs$core$async61350(self__.flag,meta61351__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async61350.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_61352){
var self__ = this;
var _61352__$1 = this;
return self__.meta61351;
});})(flag))
;

cljs.core.async.t_cljs$core$async61350.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async61350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async61350.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61351","meta61351",-1751556523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async61350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61350";

cljs.core.async.t_cljs$core$async61350.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async61350");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async61350 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61350(flag__$1,meta61351){
return (new cljs.core.async.t_cljs$core$async61350(flag__$1,meta61351));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async61350(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async61353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61353 = (function (flag,cb,meta61354){
this.flag = flag;
this.cb = cb;
this.meta61354 = meta61354;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61355,meta61354__$1){
var self__ = this;
var _61355__$1 = this;
return (new cljs.core.async.t_cljs$core$async61353(self__.flag,self__.cb,meta61354__$1));
});

cljs.core.async.t_cljs$core$async61353.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61355){
var self__ = this;
var _61355__$1 = this;
return self__.meta61354;
});

cljs.core.async.t_cljs$core$async61353.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61353.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async61353.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async61353.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async61353.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61354","meta61354",-360907224,null)], null);
});

cljs.core.async.t_cljs$core$async61353.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61353.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61353";

cljs.core.async.t_cljs$core$async61353.cljs$lang$ctorPrWriter = (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async61353");
});

cljs.core.async.__GT_t_cljs$core$async61353 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61353(flag__$1,cb__$1,meta61354){
return (new cljs.core.async.t_cljs$core$async61353(flag__$1,cb__$1,meta61354));
});

}

return (new cljs.core.async.t_cljs$core$async61353(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61356_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61356_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61357_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61357_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44021__auto__ = wport;
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return port;
}
})()], null));
} else {
var G__61358 = (i + (1));
i = G__61358;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44021__auto__ = ret;
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44009__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44009__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44009__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45199__auto__ = [];
var len__45192__auto___61364 = arguments.length;
var i__45193__auto___61365 = (0);
while(true){
if((i__45193__auto___61365 < len__45192__auto___61364)){
args__45199__auto__.push((arguments[i__45193__auto___61365]));

var G__61366 = (i__45193__auto___61365 + (1));
i__45193__auto___61365 = G__61366;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((1) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45200__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61361){
var map__61362 = p__61361;
var map__61362__$1 = ((((!((map__61362 == null)))?((((map__61362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61362.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61362):map__61362);
var opts = map__61362__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61359){
var G__61360 = cljs.core.first.call(null,seq61359);
var seq61359__$1 = cljs.core.next.call(null,seq61359);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61360,seq61359__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__61368 = arguments.length;
switch (G__61368) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47313__auto___61414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___61414){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___61414){
return (function (state_61392){
var state_val_61393 = (state_61392[(1)]);
if((state_val_61393 === (7))){
var inst_61388 = (state_61392[(2)]);
var state_61392__$1 = state_61392;
var statearr_61394_61415 = state_61392__$1;
(statearr_61394_61415[(2)] = inst_61388);

(statearr_61394_61415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (1))){
var state_61392__$1 = state_61392;
var statearr_61395_61416 = state_61392__$1;
(statearr_61395_61416[(2)] = null);

(statearr_61395_61416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (4))){
var inst_61371 = (state_61392[(7)]);
var inst_61371__$1 = (state_61392[(2)]);
var inst_61372 = (inst_61371__$1 == null);
var state_61392__$1 = (function (){var statearr_61396 = state_61392;
(statearr_61396[(7)] = inst_61371__$1);

return statearr_61396;
})();
if(cljs.core.truth_(inst_61372)){
var statearr_61397_61417 = state_61392__$1;
(statearr_61397_61417[(1)] = (5));

} else {
var statearr_61398_61418 = state_61392__$1;
(statearr_61398_61418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (13))){
var state_61392__$1 = state_61392;
var statearr_61399_61419 = state_61392__$1;
(statearr_61399_61419[(2)] = null);

(statearr_61399_61419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (6))){
var inst_61371 = (state_61392[(7)]);
var state_61392__$1 = state_61392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61392__$1,(11),to,inst_61371);
} else {
if((state_val_61393 === (3))){
var inst_61390 = (state_61392[(2)]);
var state_61392__$1 = state_61392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61392__$1,inst_61390);
} else {
if((state_val_61393 === (12))){
var state_61392__$1 = state_61392;
var statearr_61400_61420 = state_61392__$1;
(statearr_61400_61420[(2)] = null);

(statearr_61400_61420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (2))){
var state_61392__$1 = state_61392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61392__$1,(4),from);
} else {
if((state_val_61393 === (11))){
var inst_61381 = (state_61392[(2)]);
var state_61392__$1 = state_61392;
if(cljs.core.truth_(inst_61381)){
var statearr_61401_61421 = state_61392__$1;
(statearr_61401_61421[(1)] = (12));

} else {
var statearr_61402_61422 = state_61392__$1;
(statearr_61402_61422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (9))){
var state_61392__$1 = state_61392;
var statearr_61403_61423 = state_61392__$1;
(statearr_61403_61423[(2)] = null);

(statearr_61403_61423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (5))){
var state_61392__$1 = state_61392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61404_61424 = state_61392__$1;
(statearr_61404_61424[(1)] = (8));

} else {
var statearr_61405_61425 = state_61392__$1;
(statearr_61405_61425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (14))){
var inst_61386 = (state_61392[(2)]);
var state_61392__$1 = state_61392;
var statearr_61406_61426 = state_61392__$1;
(statearr_61406_61426[(2)] = inst_61386);

(statearr_61406_61426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (10))){
var inst_61378 = (state_61392[(2)]);
var state_61392__$1 = state_61392;
var statearr_61407_61427 = state_61392__$1;
(statearr_61407_61427[(2)] = inst_61378);

(statearr_61407_61427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61393 === (8))){
var inst_61375 = cljs.core.async.close_BANG_.call(null,to);
var state_61392__$1 = state_61392;
var statearr_61408_61428 = state_61392__$1;
(statearr_61408_61428[(2)] = inst_61375);

(statearr_61408_61428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___61414))
;
return ((function (switch__47292__auto__,c__47313__auto___61414){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_61409 = [null,null,null,null,null,null,null,null];
(statearr_61409[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_61409[(1)] = (1));

return statearr_61409;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_61392){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61410){if((e61410 instanceof Object)){
var ex__47296__auto__ = e61410;
var statearr_61411_61429 = state_61392;
(statearr_61411_61429[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61430 = state_61392;
state_61392 = G__61430;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_61392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_61392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___61414))
})();
var state__47315__auto__ = (function (){var statearr_61412 = f__47314__auto__.call(null);
(statearr_61412[(6)] = c__47313__auto___61414);

return statearr_61412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___61414))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__61431){
var vec__61432 = p__61431;
var v = cljs.core.nth.call(null,vec__61432,(0),null);
var p = cljs.core.nth.call(null,vec__61432,(1),null);
var job = vec__61432;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__47313__auto___61603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___61603,res,vec__61432,v,p,job,jobs,results){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___61603,res,vec__61432,v,p,job,jobs,results){
return (function (state_61439){
var state_val_61440 = (state_61439[(1)]);
if((state_val_61440 === (1))){
var state_61439__$1 = state_61439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61439__$1,(2),res,v);
} else {
if((state_val_61440 === (2))){
var inst_61436 = (state_61439[(2)]);
var inst_61437 = cljs.core.async.close_BANG_.call(null,res);
var state_61439__$1 = (function (){var statearr_61441 = state_61439;
(statearr_61441[(7)] = inst_61436);

return statearr_61441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61439__$1,inst_61437);
} else {
return null;
}
}
});})(c__47313__auto___61603,res,vec__61432,v,p,job,jobs,results))
;
return ((function (switch__47292__auto__,c__47313__auto___61603,res,vec__61432,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0 = (function (){
var statearr_61442 = [null,null,null,null,null,null,null,null];
(statearr_61442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__);

(statearr_61442[(1)] = (1));

return statearr_61442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1 = (function (state_61439){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61443){if((e61443 instanceof Object)){
var ex__47296__auto__ = e61443;
var statearr_61444_61604 = state_61439;
(statearr_61444_61604[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61605 = state_61439;
state_61439 = G__61605;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = function(state_61439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1.call(this,state_61439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___61603,res,vec__61432,v,p,job,jobs,results))
})();
var state__47315__auto__ = (function (){var statearr_61445 = f__47314__auto__.call(null);
(statearr_61445[(6)] = c__47313__auto___61603);

return statearr_61445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___61603,res,vec__61432,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__61446){
var vec__61447 = p__61446;
var v = cljs.core.nth.call(null,vec__61447,(0),null);
var p = cljs.core.nth.call(null,vec__61447,(1),null);
var job = vec__61447;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__44968__auto___61606 = n;
var __61607 = (0);
while(true){
if((__61607 < n__44968__auto___61606)){
var G__61450_61608 = type;
var G__61450_61609__$1 = (((G__61450_61608 instanceof cljs.core.Keyword))?G__61450_61608.fqn:null);
switch (G__61450_61609__$1) {
case "compute":
var c__47313__auto___61611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__61607,c__47313__auto___61611,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (__61607,c__47313__auto___61611,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async){
return (function (state_61463){
var state_val_61464 = (state_61463[(1)]);
if((state_val_61464 === (1))){
var state_61463__$1 = state_61463;
var statearr_61465_61612 = state_61463__$1;
(statearr_61465_61612[(2)] = null);

(statearr_61465_61612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61464 === (2))){
var state_61463__$1 = state_61463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61463__$1,(4),jobs);
} else {
if((state_val_61464 === (3))){
var inst_61461 = (state_61463[(2)]);
var state_61463__$1 = state_61463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61463__$1,inst_61461);
} else {
if((state_val_61464 === (4))){
var inst_61453 = (state_61463[(2)]);
var inst_61454 = process.call(null,inst_61453);
var state_61463__$1 = state_61463;
if(cljs.core.truth_(inst_61454)){
var statearr_61466_61613 = state_61463__$1;
(statearr_61466_61613[(1)] = (5));

} else {
var statearr_61467_61614 = state_61463__$1;
(statearr_61467_61614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61464 === (5))){
var state_61463__$1 = state_61463;
var statearr_61468_61615 = state_61463__$1;
(statearr_61468_61615[(2)] = null);

(statearr_61468_61615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61464 === (6))){
var state_61463__$1 = state_61463;
var statearr_61469_61616 = state_61463__$1;
(statearr_61469_61616[(2)] = null);

(statearr_61469_61616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61464 === (7))){
var inst_61459 = (state_61463[(2)]);
var state_61463__$1 = state_61463;
var statearr_61470_61617 = state_61463__$1;
(statearr_61470_61617[(2)] = inst_61459);

(statearr_61470_61617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61607,c__47313__auto___61611,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async))
;
return ((function (__61607,switch__47292__auto__,c__47313__auto___61611,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0 = (function (){
var statearr_61471 = [null,null,null,null,null,null,null];
(statearr_61471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__);

(statearr_61471[(1)] = (1));

return statearr_61471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1 = (function (state_61463){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61472){if((e61472 instanceof Object)){
var ex__47296__auto__ = e61472;
var statearr_61473_61618 = state_61463;
(statearr_61473_61618[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61619 = state_61463;
state_61463 = G__61619;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = function(state_61463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1.call(this,state_61463);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__;
})()
;})(__61607,switch__47292__auto__,c__47313__auto___61611,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async))
})();
var state__47315__auto__ = (function (){var statearr_61474 = f__47314__auto__.call(null);
(statearr_61474[(6)] = c__47313__auto___61611);

return statearr_61474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(__61607,c__47313__auto___61611,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async))
);


break;
case "async":
var c__47313__auto___61620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__61607,c__47313__auto___61620,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (__61607,c__47313__auto___61620,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async){
return (function (state_61487){
var state_val_61488 = (state_61487[(1)]);
if((state_val_61488 === (1))){
var state_61487__$1 = state_61487;
var statearr_61489_61621 = state_61487__$1;
(statearr_61489_61621[(2)] = null);

(statearr_61489_61621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61488 === (2))){
var state_61487__$1 = state_61487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61487__$1,(4),jobs);
} else {
if((state_val_61488 === (3))){
var inst_61485 = (state_61487[(2)]);
var state_61487__$1 = state_61487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61487__$1,inst_61485);
} else {
if((state_val_61488 === (4))){
var inst_61477 = (state_61487[(2)]);
var inst_61478 = async.call(null,inst_61477);
var state_61487__$1 = state_61487;
if(cljs.core.truth_(inst_61478)){
var statearr_61490_61622 = state_61487__$1;
(statearr_61490_61622[(1)] = (5));

} else {
var statearr_61491_61623 = state_61487__$1;
(statearr_61491_61623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61488 === (5))){
var state_61487__$1 = state_61487;
var statearr_61492_61624 = state_61487__$1;
(statearr_61492_61624[(2)] = null);

(statearr_61492_61624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61488 === (6))){
var state_61487__$1 = state_61487;
var statearr_61493_61625 = state_61487__$1;
(statearr_61493_61625[(2)] = null);

(statearr_61493_61625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61488 === (7))){
var inst_61483 = (state_61487[(2)]);
var state_61487__$1 = state_61487;
var statearr_61494_61626 = state_61487__$1;
(statearr_61494_61626[(2)] = inst_61483);

(statearr_61494_61626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__61607,c__47313__auto___61620,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async))
;
return ((function (__61607,switch__47292__auto__,c__47313__auto___61620,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0 = (function (){
var statearr_61495 = [null,null,null,null,null,null,null];
(statearr_61495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__);

(statearr_61495[(1)] = (1));

return statearr_61495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1 = (function (state_61487){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61496){if((e61496 instanceof Object)){
var ex__47296__auto__ = e61496;
var statearr_61497_61627 = state_61487;
(statearr_61497_61627[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61628 = state_61487;
state_61487 = G__61628;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = function(state_61487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1.call(this,state_61487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__;
})()
;})(__61607,switch__47292__auto__,c__47313__auto___61620,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async))
})();
var state__47315__auto__ = (function (){var statearr_61498 = f__47314__auto__.call(null);
(statearr_61498[(6)] = c__47313__auto___61620);

return statearr_61498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(__61607,c__47313__auto___61620,G__61450_61608,G__61450_61609__$1,n__44968__auto___61606,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61450_61609__$1)].join('')));

}

var G__61629 = (__61607 + (1));
__61607 = G__61629;
continue;
} else {
}
break;
}

var c__47313__auto___61630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___61630,jobs,results,process,async){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___61630,jobs,results,process,async){
return (function (state_61520){
var state_val_61521 = (state_61520[(1)]);
if((state_val_61521 === (1))){
var state_61520__$1 = state_61520;
var statearr_61522_61631 = state_61520__$1;
(statearr_61522_61631[(2)] = null);

(statearr_61522_61631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61521 === (2))){
var state_61520__$1 = state_61520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61520__$1,(4),from);
} else {
if((state_val_61521 === (3))){
var inst_61518 = (state_61520[(2)]);
var state_61520__$1 = state_61520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61520__$1,inst_61518);
} else {
if((state_val_61521 === (4))){
var inst_61501 = (state_61520[(7)]);
var inst_61501__$1 = (state_61520[(2)]);
var inst_61502 = (inst_61501__$1 == null);
var state_61520__$1 = (function (){var statearr_61523 = state_61520;
(statearr_61523[(7)] = inst_61501__$1);

return statearr_61523;
})();
if(cljs.core.truth_(inst_61502)){
var statearr_61524_61632 = state_61520__$1;
(statearr_61524_61632[(1)] = (5));

} else {
var statearr_61525_61633 = state_61520__$1;
(statearr_61525_61633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61521 === (5))){
var inst_61504 = cljs.core.async.close_BANG_.call(null,jobs);
var state_61520__$1 = state_61520;
var statearr_61526_61634 = state_61520__$1;
(statearr_61526_61634[(2)] = inst_61504);

(statearr_61526_61634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61521 === (6))){
var inst_61501 = (state_61520[(7)]);
var inst_61506 = (state_61520[(8)]);
var inst_61506__$1 = cljs.core.async.chan.call(null,(1));
var inst_61507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61508 = [inst_61501,inst_61506__$1];
var inst_61509 = (new cljs.core.PersistentVector(null,2,(5),inst_61507,inst_61508,null));
var state_61520__$1 = (function (){var statearr_61527 = state_61520;
(statearr_61527[(8)] = inst_61506__$1);

return statearr_61527;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61520__$1,(8),jobs,inst_61509);
} else {
if((state_val_61521 === (7))){
var inst_61516 = (state_61520[(2)]);
var state_61520__$1 = state_61520;
var statearr_61528_61635 = state_61520__$1;
(statearr_61528_61635[(2)] = inst_61516);

(statearr_61528_61635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61521 === (8))){
var inst_61506 = (state_61520[(8)]);
var inst_61511 = (state_61520[(2)]);
var state_61520__$1 = (function (){var statearr_61529 = state_61520;
(statearr_61529[(9)] = inst_61511);

return statearr_61529;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61520__$1,(9),results,inst_61506);
} else {
if((state_val_61521 === (9))){
var inst_61513 = (state_61520[(2)]);
var state_61520__$1 = (function (){var statearr_61530 = state_61520;
(statearr_61530[(10)] = inst_61513);

return statearr_61530;
})();
var statearr_61531_61636 = state_61520__$1;
(statearr_61531_61636[(2)] = null);

(statearr_61531_61636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___61630,jobs,results,process,async))
;
return ((function (switch__47292__auto__,c__47313__auto___61630,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0 = (function (){
var statearr_61532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__);

(statearr_61532[(1)] = (1));

return statearr_61532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1 = (function (state_61520){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61533){if((e61533 instanceof Object)){
var ex__47296__auto__ = e61533;
var statearr_61534_61637 = state_61520;
(statearr_61534_61637[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61638 = state_61520;
state_61520 = G__61638;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = function(state_61520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1.call(this,state_61520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___61630,jobs,results,process,async))
})();
var state__47315__auto__ = (function (){var statearr_61535 = f__47314__auto__.call(null);
(statearr_61535[(6)] = c__47313__auto___61630);

return statearr_61535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___61630,jobs,results,process,async))
);


var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__,jobs,results,process,async){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__,jobs,results,process,async){
return (function (state_61573){
var state_val_61574 = (state_61573[(1)]);
if((state_val_61574 === (7))){
var inst_61569 = (state_61573[(2)]);
var state_61573__$1 = state_61573;
var statearr_61575_61639 = state_61573__$1;
(statearr_61575_61639[(2)] = inst_61569);

(statearr_61575_61639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (20))){
var state_61573__$1 = state_61573;
var statearr_61576_61640 = state_61573__$1;
(statearr_61576_61640[(2)] = null);

(statearr_61576_61640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (1))){
var state_61573__$1 = state_61573;
var statearr_61577_61641 = state_61573__$1;
(statearr_61577_61641[(2)] = null);

(statearr_61577_61641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (4))){
var inst_61538 = (state_61573[(7)]);
var inst_61538__$1 = (state_61573[(2)]);
var inst_61539 = (inst_61538__$1 == null);
var state_61573__$1 = (function (){var statearr_61578 = state_61573;
(statearr_61578[(7)] = inst_61538__$1);

return statearr_61578;
})();
if(cljs.core.truth_(inst_61539)){
var statearr_61579_61642 = state_61573__$1;
(statearr_61579_61642[(1)] = (5));

} else {
var statearr_61580_61643 = state_61573__$1;
(statearr_61580_61643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (15))){
var inst_61551 = (state_61573[(8)]);
var state_61573__$1 = state_61573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61573__$1,(18),to,inst_61551);
} else {
if((state_val_61574 === (21))){
var inst_61564 = (state_61573[(2)]);
var state_61573__$1 = state_61573;
var statearr_61581_61644 = state_61573__$1;
(statearr_61581_61644[(2)] = inst_61564);

(statearr_61581_61644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (13))){
var inst_61566 = (state_61573[(2)]);
var state_61573__$1 = (function (){var statearr_61582 = state_61573;
(statearr_61582[(9)] = inst_61566);

return statearr_61582;
})();
var statearr_61583_61645 = state_61573__$1;
(statearr_61583_61645[(2)] = null);

(statearr_61583_61645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (6))){
var inst_61538 = (state_61573[(7)]);
var state_61573__$1 = state_61573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61573__$1,(11),inst_61538);
} else {
if((state_val_61574 === (17))){
var inst_61559 = (state_61573[(2)]);
var state_61573__$1 = state_61573;
if(cljs.core.truth_(inst_61559)){
var statearr_61584_61646 = state_61573__$1;
(statearr_61584_61646[(1)] = (19));

} else {
var statearr_61585_61647 = state_61573__$1;
(statearr_61585_61647[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (3))){
var inst_61571 = (state_61573[(2)]);
var state_61573__$1 = state_61573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61573__$1,inst_61571);
} else {
if((state_val_61574 === (12))){
var inst_61548 = (state_61573[(10)]);
var state_61573__$1 = state_61573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61573__$1,(14),inst_61548);
} else {
if((state_val_61574 === (2))){
var state_61573__$1 = state_61573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61573__$1,(4),results);
} else {
if((state_val_61574 === (19))){
var state_61573__$1 = state_61573;
var statearr_61586_61648 = state_61573__$1;
(statearr_61586_61648[(2)] = null);

(statearr_61586_61648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (11))){
var inst_61548 = (state_61573[(2)]);
var state_61573__$1 = (function (){var statearr_61587 = state_61573;
(statearr_61587[(10)] = inst_61548);

return statearr_61587;
})();
var statearr_61588_61649 = state_61573__$1;
(statearr_61588_61649[(2)] = null);

(statearr_61588_61649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (9))){
var state_61573__$1 = state_61573;
var statearr_61589_61650 = state_61573__$1;
(statearr_61589_61650[(2)] = null);

(statearr_61589_61650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (5))){
var state_61573__$1 = state_61573;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61590_61651 = state_61573__$1;
(statearr_61590_61651[(1)] = (8));

} else {
var statearr_61591_61652 = state_61573__$1;
(statearr_61591_61652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (14))){
var inst_61551 = (state_61573[(8)]);
var inst_61553 = (state_61573[(11)]);
var inst_61551__$1 = (state_61573[(2)]);
var inst_61552 = (inst_61551__$1 == null);
var inst_61553__$1 = cljs.core.not.call(null,inst_61552);
var state_61573__$1 = (function (){var statearr_61592 = state_61573;
(statearr_61592[(8)] = inst_61551__$1);

(statearr_61592[(11)] = inst_61553__$1);

return statearr_61592;
})();
if(inst_61553__$1){
var statearr_61593_61653 = state_61573__$1;
(statearr_61593_61653[(1)] = (15));

} else {
var statearr_61594_61654 = state_61573__$1;
(statearr_61594_61654[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (16))){
var inst_61553 = (state_61573[(11)]);
var state_61573__$1 = state_61573;
var statearr_61595_61655 = state_61573__$1;
(statearr_61595_61655[(2)] = inst_61553);

(statearr_61595_61655[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (10))){
var inst_61545 = (state_61573[(2)]);
var state_61573__$1 = state_61573;
var statearr_61596_61656 = state_61573__$1;
(statearr_61596_61656[(2)] = inst_61545);

(statearr_61596_61656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (18))){
var inst_61556 = (state_61573[(2)]);
var state_61573__$1 = state_61573;
var statearr_61597_61657 = state_61573__$1;
(statearr_61597_61657[(2)] = inst_61556);

(statearr_61597_61657[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61574 === (8))){
var inst_61542 = cljs.core.async.close_BANG_.call(null,to);
var state_61573__$1 = state_61573;
var statearr_61598_61658 = state_61573__$1;
(statearr_61598_61658[(2)] = inst_61542);

(statearr_61598_61658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto__,jobs,results,process,async))
;
return ((function (switch__47292__auto__,c__47313__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0 = (function (){
var statearr_61599 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_61599[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__);

(statearr_61599[(1)] = (1));

return statearr_61599;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1 = (function (state_61573){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61600){if((e61600 instanceof Object)){
var ex__47296__auto__ = e61600;
var statearr_61601_61659 = state_61573;
(statearr_61601_61659[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61660 = state_61573;
state_61573 = G__61660;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__ = function(state_61573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1.call(this,state_61573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47293__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__,jobs,results,process,async))
})();
var state__47315__auto__ = (function (){var statearr_61602 = f__47314__auto__.call(null);
(statearr_61602[(6)] = c__47313__auto__);

return statearr_61602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__,jobs,results,process,async))
);

return c__47313__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__61662 = arguments.length;
switch (G__61662) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__61665 = arguments.length;
switch (G__61665) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__61668 = arguments.length;
switch (G__61668) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__47313__auto___61717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___61717,tc,fc){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___61717,tc,fc){
return (function (state_61694){
var state_val_61695 = (state_61694[(1)]);
if((state_val_61695 === (7))){
var inst_61690 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
var statearr_61696_61718 = state_61694__$1;
(statearr_61696_61718[(2)] = inst_61690);

(statearr_61696_61718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (1))){
var state_61694__$1 = state_61694;
var statearr_61697_61719 = state_61694__$1;
(statearr_61697_61719[(2)] = null);

(statearr_61697_61719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (4))){
var inst_61671 = (state_61694[(7)]);
var inst_61671__$1 = (state_61694[(2)]);
var inst_61672 = (inst_61671__$1 == null);
var state_61694__$1 = (function (){var statearr_61698 = state_61694;
(statearr_61698[(7)] = inst_61671__$1);

return statearr_61698;
})();
if(cljs.core.truth_(inst_61672)){
var statearr_61699_61720 = state_61694__$1;
(statearr_61699_61720[(1)] = (5));

} else {
var statearr_61700_61721 = state_61694__$1;
(statearr_61700_61721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (13))){
var state_61694__$1 = state_61694;
var statearr_61701_61722 = state_61694__$1;
(statearr_61701_61722[(2)] = null);

(statearr_61701_61722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (6))){
var inst_61671 = (state_61694[(7)]);
var inst_61677 = p.call(null,inst_61671);
var state_61694__$1 = state_61694;
if(cljs.core.truth_(inst_61677)){
var statearr_61702_61723 = state_61694__$1;
(statearr_61702_61723[(1)] = (9));

} else {
var statearr_61703_61724 = state_61694__$1;
(statearr_61703_61724[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (3))){
var inst_61692 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61694__$1,inst_61692);
} else {
if((state_val_61695 === (12))){
var state_61694__$1 = state_61694;
var statearr_61704_61725 = state_61694__$1;
(statearr_61704_61725[(2)] = null);

(statearr_61704_61725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (2))){
var state_61694__$1 = state_61694;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61694__$1,(4),ch);
} else {
if((state_val_61695 === (11))){
var inst_61671 = (state_61694[(7)]);
var inst_61681 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61694__$1,(8),inst_61681,inst_61671);
} else {
if((state_val_61695 === (9))){
var state_61694__$1 = state_61694;
var statearr_61705_61726 = state_61694__$1;
(statearr_61705_61726[(2)] = tc);

(statearr_61705_61726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (5))){
var inst_61674 = cljs.core.async.close_BANG_.call(null,tc);
var inst_61675 = cljs.core.async.close_BANG_.call(null,fc);
var state_61694__$1 = (function (){var statearr_61706 = state_61694;
(statearr_61706[(8)] = inst_61674);

return statearr_61706;
})();
var statearr_61707_61727 = state_61694__$1;
(statearr_61707_61727[(2)] = inst_61675);

(statearr_61707_61727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (14))){
var inst_61688 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
var statearr_61708_61728 = state_61694__$1;
(statearr_61708_61728[(2)] = inst_61688);

(statearr_61708_61728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (10))){
var state_61694__$1 = state_61694;
var statearr_61709_61729 = state_61694__$1;
(statearr_61709_61729[(2)] = fc);

(statearr_61709_61729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61695 === (8))){
var inst_61683 = (state_61694[(2)]);
var state_61694__$1 = state_61694;
if(cljs.core.truth_(inst_61683)){
var statearr_61710_61730 = state_61694__$1;
(statearr_61710_61730[(1)] = (12));

} else {
var statearr_61711_61731 = state_61694__$1;
(statearr_61711_61731[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___61717,tc,fc))
;
return ((function (switch__47292__auto__,c__47313__auto___61717,tc,fc){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_61712 = [null,null,null,null,null,null,null,null,null];
(statearr_61712[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_61712[(1)] = (1));

return statearr_61712;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_61694){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61713){if((e61713 instanceof Object)){
var ex__47296__auto__ = e61713;
var statearr_61714_61732 = state_61694;
(statearr_61714_61732[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61733 = state_61694;
state_61694 = G__61733;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_61694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_61694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___61717,tc,fc))
})();
var state__47315__auto__ = (function (){var statearr_61715 = f__47314__auto__.call(null);
(statearr_61715[(6)] = c__47313__auto___61717);

return statearr_61715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___61717,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__){
return (function (state_61754){
var state_val_61755 = (state_61754[(1)]);
if((state_val_61755 === (7))){
var inst_61750 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61756_61774 = state_61754__$1;
(statearr_61756_61774[(2)] = inst_61750);

(statearr_61756_61774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (1))){
var inst_61734 = init;
var state_61754__$1 = (function (){var statearr_61757 = state_61754;
(statearr_61757[(7)] = inst_61734);

return statearr_61757;
})();
var statearr_61758_61775 = state_61754__$1;
(statearr_61758_61775[(2)] = null);

(statearr_61758_61775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (4))){
var inst_61737 = (state_61754[(8)]);
var inst_61737__$1 = (state_61754[(2)]);
var inst_61738 = (inst_61737__$1 == null);
var state_61754__$1 = (function (){var statearr_61759 = state_61754;
(statearr_61759[(8)] = inst_61737__$1);

return statearr_61759;
})();
if(cljs.core.truth_(inst_61738)){
var statearr_61760_61776 = state_61754__$1;
(statearr_61760_61776[(1)] = (5));

} else {
var statearr_61761_61777 = state_61754__$1;
(statearr_61761_61777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (6))){
var inst_61734 = (state_61754[(7)]);
var inst_61737 = (state_61754[(8)]);
var inst_61741 = (state_61754[(9)]);
var inst_61741__$1 = f.call(null,inst_61734,inst_61737);
var inst_61742 = cljs.core.reduced_QMARK_.call(null,inst_61741__$1);
var state_61754__$1 = (function (){var statearr_61762 = state_61754;
(statearr_61762[(9)] = inst_61741__$1);

return statearr_61762;
})();
if(inst_61742){
var statearr_61763_61778 = state_61754__$1;
(statearr_61763_61778[(1)] = (8));

} else {
var statearr_61764_61779 = state_61754__$1;
(statearr_61764_61779[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (3))){
var inst_61752 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61754__$1,inst_61752);
} else {
if((state_val_61755 === (2))){
var state_61754__$1 = state_61754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61754__$1,(4),ch);
} else {
if((state_val_61755 === (9))){
var inst_61741 = (state_61754[(9)]);
var inst_61734 = inst_61741;
var state_61754__$1 = (function (){var statearr_61765 = state_61754;
(statearr_61765[(7)] = inst_61734);

return statearr_61765;
})();
var statearr_61766_61780 = state_61754__$1;
(statearr_61766_61780[(2)] = null);

(statearr_61766_61780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (5))){
var inst_61734 = (state_61754[(7)]);
var state_61754__$1 = state_61754;
var statearr_61767_61781 = state_61754__$1;
(statearr_61767_61781[(2)] = inst_61734);

(statearr_61767_61781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (10))){
var inst_61748 = (state_61754[(2)]);
var state_61754__$1 = state_61754;
var statearr_61768_61782 = state_61754__$1;
(statearr_61768_61782[(2)] = inst_61748);

(statearr_61768_61782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61755 === (8))){
var inst_61741 = (state_61754[(9)]);
var inst_61744 = cljs.core.deref.call(null,inst_61741);
var state_61754__$1 = state_61754;
var statearr_61769_61783 = state_61754__$1;
(statearr_61769_61783[(2)] = inst_61744);

(statearr_61769_61783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto__))
;
return ((function (switch__47292__auto__,c__47313__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__47293__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47293__auto____0 = (function (){
var statearr_61770 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61770[(0)] = cljs$core$async$reduce_$_state_machine__47293__auto__);

(statearr_61770[(1)] = (1));

return statearr_61770;
});
var cljs$core$async$reduce_$_state_machine__47293__auto____1 = (function (state_61754){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61771){if((e61771 instanceof Object)){
var ex__47296__auto__ = e61771;
var statearr_61772_61784 = state_61754;
(statearr_61772_61784[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61785 = state_61754;
state_61754 = G__61785;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47293__auto__ = function(state_61754){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47293__auto____1.call(this,state_61754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47293__auto____0;
cljs$core$async$reduce_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47293__auto____1;
return cljs$core$async$reduce_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__))
})();
var state__47315__auto__ = (function (){var statearr_61773 = f__47314__auto__.call(null);
(statearr_61773[(6)] = c__47313__auto__);

return statearr_61773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__))
);

return c__47313__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__,f__$1){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__,f__$1){
return (function (state_61791){
var state_val_61792 = (state_61791[(1)]);
if((state_val_61792 === (1))){
var inst_61786 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_61791__$1 = state_61791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61791__$1,(2),inst_61786);
} else {
if((state_val_61792 === (2))){
var inst_61788 = (state_61791[(2)]);
var inst_61789 = f__$1.call(null,inst_61788);
var state_61791__$1 = state_61791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61791__$1,inst_61789);
} else {
return null;
}
}
});})(c__47313__auto__,f__$1))
;
return ((function (switch__47292__auto__,c__47313__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__47293__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47293__auto____0 = (function (){
var statearr_61793 = [null,null,null,null,null,null,null];
(statearr_61793[(0)] = cljs$core$async$transduce_$_state_machine__47293__auto__);

(statearr_61793[(1)] = (1));

return statearr_61793;
});
var cljs$core$async$transduce_$_state_machine__47293__auto____1 = (function (state_61791){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61794){if((e61794 instanceof Object)){
var ex__47296__auto__ = e61794;
var statearr_61795_61797 = state_61791;
(statearr_61795_61797[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61798 = state_61791;
state_61791 = G__61798;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47293__auto__ = function(state_61791){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47293__auto____1.call(this,state_61791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47293__auto____0;
cljs$core$async$transduce_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47293__auto____1;
return cljs$core$async$transduce_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__,f__$1))
})();
var state__47315__auto__ = (function (){var statearr_61796 = f__47314__auto__.call(null);
(statearr_61796[(6)] = c__47313__auto__);

return statearr_61796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__,f__$1))
);

return c__47313__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__61800 = arguments.length;
switch (G__61800) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__){
return (function (state_61825){
var state_val_61826 = (state_61825[(1)]);
if((state_val_61826 === (7))){
var inst_61807 = (state_61825[(2)]);
var state_61825__$1 = state_61825;
var statearr_61827_61848 = state_61825__$1;
(statearr_61827_61848[(2)] = inst_61807);

(statearr_61827_61848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (1))){
var inst_61801 = cljs.core.seq.call(null,coll);
var inst_61802 = inst_61801;
var state_61825__$1 = (function (){var statearr_61828 = state_61825;
(statearr_61828[(7)] = inst_61802);

return statearr_61828;
})();
var statearr_61829_61849 = state_61825__$1;
(statearr_61829_61849[(2)] = null);

(statearr_61829_61849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (4))){
var inst_61802 = (state_61825[(7)]);
var inst_61805 = cljs.core.first.call(null,inst_61802);
var state_61825__$1 = state_61825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61825__$1,(7),ch,inst_61805);
} else {
if((state_val_61826 === (13))){
var inst_61819 = (state_61825[(2)]);
var state_61825__$1 = state_61825;
var statearr_61830_61850 = state_61825__$1;
(statearr_61830_61850[(2)] = inst_61819);

(statearr_61830_61850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (6))){
var inst_61810 = (state_61825[(2)]);
var state_61825__$1 = state_61825;
if(cljs.core.truth_(inst_61810)){
var statearr_61831_61851 = state_61825__$1;
(statearr_61831_61851[(1)] = (8));

} else {
var statearr_61832_61852 = state_61825__$1;
(statearr_61832_61852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (3))){
var inst_61823 = (state_61825[(2)]);
var state_61825__$1 = state_61825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61825__$1,inst_61823);
} else {
if((state_val_61826 === (12))){
var state_61825__$1 = state_61825;
var statearr_61833_61853 = state_61825__$1;
(statearr_61833_61853[(2)] = null);

(statearr_61833_61853[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (2))){
var inst_61802 = (state_61825[(7)]);
var state_61825__$1 = state_61825;
if(cljs.core.truth_(inst_61802)){
var statearr_61834_61854 = state_61825__$1;
(statearr_61834_61854[(1)] = (4));

} else {
var statearr_61835_61855 = state_61825__$1;
(statearr_61835_61855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (11))){
var inst_61816 = cljs.core.async.close_BANG_.call(null,ch);
var state_61825__$1 = state_61825;
var statearr_61836_61856 = state_61825__$1;
(statearr_61836_61856[(2)] = inst_61816);

(statearr_61836_61856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (9))){
var state_61825__$1 = state_61825;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61837_61857 = state_61825__$1;
(statearr_61837_61857[(1)] = (11));

} else {
var statearr_61838_61858 = state_61825__$1;
(statearr_61838_61858[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (5))){
var inst_61802 = (state_61825[(7)]);
var state_61825__$1 = state_61825;
var statearr_61839_61859 = state_61825__$1;
(statearr_61839_61859[(2)] = inst_61802);

(statearr_61839_61859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (10))){
var inst_61821 = (state_61825[(2)]);
var state_61825__$1 = state_61825;
var statearr_61840_61860 = state_61825__$1;
(statearr_61840_61860[(2)] = inst_61821);

(statearr_61840_61860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61826 === (8))){
var inst_61802 = (state_61825[(7)]);
var inst_61812 = cljs.core.next.call(null,inst_61802);
var inst_61802__$1 = inst_61812;
var state_61825__$1 = (function (){var statearr_61841 = state_61825;
(statearr_61841[(7)] = inst_61802__$1);

return statearr_61841;
})();
var statearr_61842_61861 = state_61825__$1;
(statearr_61842_61861[(2)] = null);

(statearr_61842_61861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto__))
;
return ((function (switch__47292__auto__,c__47313__auto__){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_61843 = [null,null,null,null,null,null,null,null];
(statearr_61843[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_61843[(1)] = (1));

return statearr_61843;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_61825){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_61825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e61844){if((e61844 instanceof Object)){
var ex__47296__auto__ = e61844;
var statearr_61845_61862 = state_61825;
(statearr_61845_61862[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e61844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61863 = state_61825;
state_61825 = G__61863;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_61825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_61825);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__))
})();
var state__47315__auto__ = (function (){var statearr_61846 = f__47314__auto__.call(null);
(statearr_61846[(6)] = c__47313__auto__);

return statearr_61846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__))
);

return c__47313__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__44704__auto__ = (((_ == null))?null:_);
var m__44705__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,_);
} else {
var m__44705__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__44705__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m,ch);
} else {
var m__44705__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m);
} else {
var m__44705__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async61864 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61864 = (function (ch,cs,meta61865){
this.ch = ch;
this.cs = cs;
this.meta61865 = meta61865;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_61866,meta61865__$1){
var self__ = this;
var _61866__$1 = this;
return (new cljs.core.async.t_cljs$core$async61864(self__.ch,self__.cs,meta61865__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_61866){
var self__ = this;
var _61866__$1 = this;
return self__.meta61865;
});})(cs))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61864.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async61864.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta61865","meta61865",508230257,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async61864.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async61864.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61864";

cljs.core.async.t_cljs$core$async61864.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async61864");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async61864 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async61864(ch__$1,cs__$1,meta61865){
return (new cljs.core.async.t_cljs$core$async61864(ch__$1,cs__$1,meta61865));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async61864(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__47313__auto___62086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___62086,cs,m,dchan,dctr,done){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___62086,cs,m,dchan,dctr,done){
return (function (state_62001){
var state_val_62002 = (state_62001[(1)]);
if((state_val_62002 === (7))){
var inst_61997 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62003_62087 = state_62001__$1;
(statearr_62003_62087[(2)] = inst_61997);

(statearr_62003_62087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (20))){
var inst_61900 = (state_62001[(7)]);
var inst_61912 = cljs.core.first.call(null,inst_61900);
var inst_61913 = cljs.core.nth.call(null,inst_61912,(0),null);
var inst_61914 = cljs.core.nth.call(null,inst_61912,(1),null);
var state_62001__$1 = (function (){var statearr_62004 = state_62001;
(statearr_62004[(8)] = inst_61913);

return statearr_62004;
})();
if(cljs.core.truth_(inst_61914)){
var statearr_62005_62088 = state_62001__$1;
(statearr_62005_62088[(1)] = (22));

} else {
var statearr_62006_62089 = state_62001__$1;
(statearr_62006_62089[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (27))){
var inst_61944 = (state_62001[(9)]);
var inst_61949 = (state_62001[(10)]);
var inst_61869 = (state_62001[(11)]);
var inst_61942 = (state_62001[(12)]);
var inst_61949__$1 = cljs.core._nth.call(null,inst_61942,inst_61944);
var inst_61950 = cljs.core.async.put_BANG_.call(null,inst_61949__$1,inst_61869,done);
var state_62001__$1 = (function (){var statearr_62007 = state_62001;
(statearr_62007[(10)] = inst_61949__$1);

return statearr_62007;
})();
if(cljs.core.truth_(inst_61950)){
var statearr_62008_62090 = state_62001__$1;
(statearr_62008_62090[(1)] = (30));

} else {
var statearr_62009_62091 = state_62001__$1;
(statearr_62009_62091[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (1))){
var state_62001__$1 = state_62001;
var statearr_62010_62092 = state_62001__$1;
(statearr_62010_62092[(2)] = null);

(statearr_62010_62092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (24))){
var inst_61900 = (state_62001[(7)]);
var inst_61919 = (state_62001[(2)]);
var inst_61920 = cljs.core.next.call(null,inst_61900);
var inst_61878 = inst_61920;
var inst_61879 = null;
var inst_61880 = (0);
var inst_61881 = (0);
var state_62001__$1 = (function (){var statearr_62011 = state_62001;
(statearr_62011[(13)] = inst_61881);

(statearr_62011[(14)] = inst_61879);

(statearr_62011[(15)] = inst_61919);

(statearr_62011[(16)] = inst_61880);

(statearr_62011[(17)] = inst_61878);

return statearr_62011;
})();
var statearr_62012_62093 = state_62001__$1;
(statearr_62012_62093[(2)] = null);

(statearr_62012_62093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (39))){
var state_62001__$1 = state_62001;
var statearr_62016_62094 = state_62001__$1;
(statearr_62016_62094[(2)] = null);

(statearr_62016_62094[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (4))){
var inst_61869 = (state_62001[(11)]);
var inst_61869__$1 = (state_62001[(2)]);
var inst_61870 = (inst_61869__$1 == null);
var state_62001__$1 = (function (){var statearr_62017 = state_62001;
(statearr_62017[(11)] = inst_61869__$1);

return statearr_62017;
})();
if(cljs.core.truth_(inst_61870)){
var statearr_62018_62095 = state_62001__$1;
(statearr_62018_62095[(1)] = (5));

} else {
var statearr_62019_62096 = state_62001__$1;
(statearr_62019_62096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (15))){
var inst_61881 = (state_62001[(13)]);
var inst_61879 = (state_62001[(14)]);
var inst_61880 = (state_62001[(16)]);
var inst_61878 = (state_62001[(17)]);
var inst_61896 = (state_62001[(2)]);
var inst_61897 = (inst_61881 + (1));
var tmp62013 = inst_61879;
var tmp62014 = inst_61880;
var tmp62015 = inst_61878;
var inst_61878__$1 = tmp62015;
var inst_61879__$1 = tmp62013;
var inst_61880__$1 = tmp62014;
var inst_61881__$1 = inst_61897;
var state_62001__$1 = (function (){var statearr_62020 = state_62001;
(statearr_62020[(18)] = inst_61896);

(statearr_62020[(13)] = inst_61881__$1);

(statearr_62020[(14)] = inst_61879__$1);

(statearr_62020[(16)] = inst_61880__$1);

(statearr_62020[(17)] = inst_61878__$1);

return statearr_62020;
})();
var statearr_62021_62097 = state_62001__$1;
(statearr_62021_62097[(2)] = null);

(statearr_62021_62097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (21))){
var inst_61923 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62025_62098 = state_62001__$1;
(statearr_62025_62098[(2)] = inst_61923);

(statearr_62025_62098[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (31))){
var inst_61949 = (state_62001[(10)]);
var inst_61953 = done.call(null,null);
var inst_61954 = cljs.core.async.untap_STAR_.call(null,m,inst_61949);
var state_62001__$1 = (function (){var statearr_62026 = state_62001;
(statearr_62026[(19)] = inst_61953);

return statearr_62026;
})();
var statearr_62027_62099 = state_62001__$1;
(statearr_62027_62099[(2)] = inst_61954);

(statearr_62027_62099[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (32))){
var inst_61944 = (state_62001[(9)]);
var inst_61941 = (state_62001[(20)]);
var inst_61943 = (state_62001[(21)]);
var inst_61942 = (state_62001[(12)]);
var inst_61956 = (state_62001[(2)]);
var inst_61957 = (inst_61944 + (1));
var tmp62022 = inst_61941;
var tmp62023 = inst_61943;
var tmp62024 = inst_61942;
var inst_61941__$1 = tmp62022;
var inst_61942__$1 = tmp62024;
var inst_61943__$1 = tmp62023;
var inst_61944__$1 = inst_61957;
var state_62001__$1 = (function (){var statearr_62028 = state_62001;
(statearr_62028[(9)] = inst_61944__$1);

(statearr_62028[(20)] = inst_61941__$1);

(statearr_62028[(22)] = inst_61956);

(statearr_62028[(21)] = inst_61943__$1);

(statearr_62028[(12)] = inst_61942__$1);

return statearr_62028;
})();
var statearr_62029_62100 = state_62001__$1;
(statearr_62029_62100[(2)] = null);

(statearr_62029_62100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (40))){
var inst_61969 = (state_62001[(23)]);
var inst_61973 = done.call(null,null);
var inst_61974 = cljs.core.async.untap_STAR_.call(null,m,inst_61969);
var state_62001__$1 = (function (){var statearr_62030 = state_62001;
(statearr_62030[(24)] = inst_61973);

return statearr_62030;
})();
var statearr_62031_62101 = state_62001__$1;
(statearr_62031_62101[(2)] = inst_61974);

(statearr_62031_62101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (33))){
var inst_61960 = (state_62001[(25)]);
var inst_61962 = cljs.core.chunked_seq_QMARK_.call(null,inst_61960);
var state_62001__$1 = state_62001;
if(inst_61962){
var statearr_62032_62102 = state_62001__$1;
(statearr_62032_62102[(1)] = (36));

} else {
var statearr_62033_62103 = state_62001__$1;
(statearr_62033_62103[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (13))){
var inst_61890 = (state_62001[(26)]);
var inst_61893 = cljs.core.async.close_BANG_.call(null,inst_61890);
var state_62001__$1 = state_62001;
var statearr_62034_62104 = state_62001__$1;
(statearr_62034_62104[(2)] = inst_61893);

(statearr_62034_62104[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (22))){
var inst_61913 = (state_62001[(8)]);
var inst_61916 = cljs.core.async.close_BANG_.call(null,inst_61913);
var state_62001__$1 = state_62001;
var statearr_62035_62105 = state_62001__$1;
(statearr_62035_62105[(2)] = inst_61916);

(statearr_62035_62105[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (36))){
var inst_61960 = (state_62001[(25)]);
var inst_61964 = cljs.core.chunk_first.call(null,inst_61960);
var inst_61965 = cljs.core.chunk_rest.call(null,inst_61960);
var inst_61966 = cljs.core.count.call(null,inst_61964);
var inst_61941 = inst_61965;
var inst_61942 = inst_61964;
var inst_61943 = inst_61966;
var inst_61944 = (0);
var state_62001__$1 = (function (){var statearr_62036 = state_62001;
(statearr_62036[(9)] = inst_61944);

(statearr_62036[(20)] = inst_61941);

(statearr_62036[(21)] = inst_61943);

(statearr_62036[(12)] = inst_61942);

return statearr_62036;
})();
var statearr_62037_62106 = state_62001__$1;
(statearr_62037_62106[(2)] = null);

(statearr_62037_62106[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (41))){
var inst_61960 = (state_62001[(25)]);
var inst_61976 = (state_62001[(2)]);
var inst_61977 = cljs.core.next.call(null,inst_61960);
var inst_61941 = inst_61977;
var inst_61942 = null;
var inst_61943 = (0);
var inst_61944 = (0);
var state_62001__$1 = (function (){var statearr_62038 = state_62001;
(statearr_62038[(27)] = inst_61976);

(statearr_62038[(9)] = inst_61944);

(statearr_62038[(20)] = inst_61941);

(statearr_62038[(21)] = inst_61943);

(statearr_62038[(12)] = inst_61942);

return statearr_62038;
})();
var statearr_62039_62107 = state_62001__$1;
(statearr_62039_62107[(2)] = null);

(statearr_62039_62107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (43))){
var state_62001__$1 = state_62001;
var statearr_62040_62108 = state_62001__$1;
(statearr_62040_62108[(2)] = null);

(statearr_62040_62108[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (29))){
var inst_61985 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62041_62109 = state_62001__$1;
(statearr_62041_62109[(2)] = inst_61985);

(statearr_62041_62109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (44))){
var inst_61994 = (state_62001[(2)]);
var state_62001__$1 = (function (){var statearr_62042 = state_62001;
(statearr_62042[(28)] = inst_61994);

return statearr_62042;
})();
var statearr_62043_62110 = state_62001__$1;
(statearr_62043_62110[(2)] = null);

(statearr_62043_62110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (6))){
var inst_61933 = (state_62001[(29)]);
var inst_61932 = cljs.core.deref.call(null,cs);
var inst_61933__$1 = cljs.core.keys.call(null,inst_61932);
var inst_61934 = cljs.core.count.call(null,inst_61933__$1);
var inst_61935 = cljs.core.reset_BANG_.call(null,dctr,inst_61934);
var inst_61940 = cljs.core.seq.call(null,inst_61933__$1);
var inst_61941 = inst_61940;
var inst_61942 = null;
var inst_61943 = (0);
var inst_61944 = (0);
var state_62001__$1 = (function (){var statearr_62044 = state_62001;
(statearr_62044[(9)] = inst_61944);

(statearr_62044[(20)] = inst_61941);

(statearr_62044[(30)] = inst_61935);

(statearr_62044[(29)] = inst_61933__$1);

(statearr_62044[(21)] = inst_61943);

(statearr_62044[(12)] = inst_61942);

return statearr_62044;
})();
var statearr_62045_62111 = state_62001__$1;
(statearr_62045_62111[(2)] = null);

(statearr_62045_62111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (28))){
var inst_61941 = (state_62001[(20)]);
var inst_61960 = (state_62001[(25)]);
var inst_61960__$1 = cljs.core.seq.call(null,inst_61941);
var state_62001__$1 = (function (){var statearr_62046 = state_62001;
(statearr_62046[(25)] = inst_61960__$1);

return statearr_62046;
})();
if(inst_61960__$1){
var statearr_62047_62112 = state_62001__$1;
(statearr_62047_62112[(1)] = (33));

} else {
var statearr_62048_62113 = state_62001__$1;
(statearr_62048_62113[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (25))){
var inst_61944 = (state_62001[(9)]);
var inst_61943 = (state_62001[(21)]);
var inst_61946 = (inst_61944 < inst_61943);
var inst_61947 = inst_61946;
var state_62001__$1 = state_62001;
if(cljs.core.truth_(inst_61947)){
var statearr_62049_62114 = state_62001__$1;
(statearr_62049_62114[(1)] = (27));

} else {
var statearr_62050_62115 = state_62001__$1;
(statearr_62050_62115[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (34))){
var state_62001__$1 = state_62001;
var statearr_62051_62116 = state_62001__$1;
(statearr_62051_62116[(2)] = null);

(statearr_62051_62116[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (17))){
var state_62001__$1 = state_62001;
var statearr_62052_62117 = state_62001__$1;
(statearr_62052_62117[(2)] = null);

(statearr_62052_62117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (3))){
var inst_61999 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62001__$1,inst_61999);
} else {
if((state_val_62002 === (12))){
var inst_61928 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62053_62118 = state_62001__$1;
(statearr_62053_62118[(2)] = inst_61928);

(statearr_62053_62118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (2))){
var state_62001__$1 = state_62001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62001__$1,(4),ch);
} else {
if((state_val_62002 === (23))){
var state_62001__$1 = state_62001;
var statearr_62054_62119 = state_62001__$1;
(statearr_62054_62119[(2)] = null);

(statearr_62054_62119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (35))){
var inst_61983 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62055_62120 = state_62001__$1;
(statearr_62055_62120[(2)] = inst_61983);

(statearr_62055_62120[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (19))){
var inst_61900 = (state_62001[(7)]);
var inst_61904 = cljs.core.chunk_first.call(null,inst_61900);
var inst_61905 = cljs.core.chunk_rest.call(null,inst_61900);
var inst_61906 = cljs.core.count.call(null,inst_61904);
var inst_61878 = inst_61905;
var inst_61879 = inst_61904;
var inst_61880 = inst_61906;
var inst_61881 = (0);
var state_62001__$1 = (function (){var statearr_62056 = state_62001;
(statearr_62056[(13)] = inst_61881);

(statearr_62056[(14)] = inst_61879);

(statearr_62056[(16)] = inst_61880);

(statearr_62056[(17)] = inst_61878);

return statearr_62056;
})();
var statearr_62057_62121 = state_62001__$1;
(statearr_62057_62121[(2)] = null);

(statearr_62057_62121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (11))){
var inst_61900 = (state_62001[(7)]);
var inst_61878 = (state_62001[(17)]);
var inst_61900__$1 = cljs.core.seq.call(null,inst_61878);
var state_62001__$1 = (function (){var statearr_62058 = state_62001;
(statearr_62058[(7)] = inst_61900__$1);

return statearr_62058;
})();
if(inst_61900__$1){
var statearr_62059_62122 = state_62001__$1;
(statearr_62059_62122[(1)] = (16));

} else {
var statearr_62060_62123 = state_62001__$1;
(statearr_62060_62123[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (9))){
var inst_61930 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62061_62124 = state_62001__$1;
(statearr_62061_62124[(2)] = inst_61930);

(statearr_62061_62124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (5))){
var inst_61876 = cljs.core.deref.call(null,cs);
var inst_61877 = cljs.core.seq.call(null,inst_61876);
var inst_61878 = inst_61877;
var inst_61879 = null;
var inst_61880 = (0);
var inst_61881 = (0);
var state_62001__$1 = (function (){var statearr_62062 = state_62001;
(statearr_62062[(13)] = inst_61881);

(statearr_62062[(14)] = inst_61879);

(statearr_62062[(16)] = inst_61880);

(statearr_62062[(17)] = inst_61878);

return statearr_62062;
})();
var statearr_62063_62125 = state_62001__$1;
(statearr_62063_62125[(2)] = null);

(statearr_62063_62125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (14))){
var state_62001__$1 = state_62001;
var statearr_62064_62126 = state_62001__$1;
(statearr_62064_62126[(2)] = null);

(statearr_62064_62126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (45))){
var inst_61991 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62065_62127 = state_62001__$1;
(statearr_62065_62127[(2)] = inst_61991);

(statearr_62065_62127[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (26))){
var inst_61933 = (state_62001[(29)]);
var inst_61987 = (state_62001[(2)]);
var inst_61988 = cljs.core.seq.call(null,inst_61933);
var state_62001__$1 = (function (){var statearr_62066 = state_62001;
(statearr_62066[(31)] = inst_61987);

return statearr_62066;
})();
if(inst_61988){
var statearr_62067_62128 = state_62001__$1;
(statearr_62067_62128[(1)] = (42));

} else {
var statearr_62068_62129 = state_62001__$1;
(statearr_62068_62129[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (16))){
var inst_61900 = (state_62001[(7)]);
var inst_61902 = cljs.core.chunked_seq_QMARK_.call(null,inst_61900);
var state_62001__$1 = state_62001;
if(inst_61902){
var statearr_62069_62130 = state_62001__$1;
(statearr_62069_62130[(1)] = (19));

} else {
var statearr_62070_62131 = state_62001__$1;
(statearr_62070_62131[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (38))){
var inst_61980 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62071_62132 = state_62001__$1;
(statearr_62071_62132[(2)] = inst_61980);

(statearr_62071_62132[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (30))){
var state_62001__$1 = state_62001;
var statearr_62072_62133 = state_62001__$1;
(statearr_62072_62133[(2)] = null);

(statearr_62072_62133[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (10))){
var inst_61881 = (state_62001[(13)]);
var inst_61879 = (state_62001[(14)]);
var inst_61889 = cljs.core._nth.call(null,inst_61879,inst_61881);
var inst_61890 = cljs.core.nth.call(null,inst_61889,(0),null);
var inst_61891 = cljs.core.nth.call(null,inst_61889,(1),null);
var state_62001__$1 = (function (){var statearr_62073 = state_62001;
(statearr_62073[(26)] = inst_61890);

return statearr_62073;
})();
if(cljs.core.truth_(inst_61891)){
var statearr_62074_62134 = state_62001__$1;
(statearr_62074_62134[(1)] = (13));

} else {
var statearr_62075_62135 = state_62001__$1;
(statearr_62075_62135[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (18))){
var inst_61926 = (state_62001[(2)]);
var state_62001__$1 = state_62001;
var statearr_62076_62136 = state_62001__$1;
(statearr_62076_62136[(2)] = inst_61926);

(statearr_62076_62136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (42))){
var state_62001__$1 = state_62001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62001__$1,(45),dchan);
} else {
if((state_val_62002 === (37))){
var inst_61969 = (state_62001[(23)]);
var inst_61869 = (state_62001[(11)]);
var inst_61960 = (state_62001[(25)]);
var inst_61969__$1 = cljs.core.first.call(null,inst_61960);
var inst_61970 = cljs.core.async.put_BANG_.call(null,inst_61969__$1,inst_61869,done);
var state_62001__$1 = (function (){var statearr_62077 = state_62001;
(statearr_62077[(23)] = inst_61969__$1);

return statearr_62077;
})();
if(cljs.core.truth_(inst_61970)){
var statearr_62078_62137 = state_62001__$1;
(statearr_62078_62137[(1)] = (39));

} else {
var statearr_62079_62138 = state_62001__$1;
(statearr_62079_62138[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62002 === (8))){
var inst_61881 = (state_62001[(13)]);
var inst_61880 = (state_62001[(16)]);
var inst_61883 = (inst_61881 < inst_61880);
var inst_61884 = inst_61883;
var state_62001__$1 = state_62001;
if(cljs.core.truth_(inst_61884)){
var statearr_62080_62139 = state_62001__$1;
(statearr_62080_62139[(1)] = (10));

} else {
var statearr_62081_62140 = state_62001__$1;
(statearr_62081_62140[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___62086,cs,m,dchan,dctr,done))
;
return ((function (switch__47292__auto__,c__47313__auto___62086,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__47293__auto__ = null;
var cljs$core$async$mult_$_state_machine__47293__auto____0 = (function (){
var statearr_62082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62082[(0)] = cljs$core$async$mult_$_state_machine__47293__auto__);

(statearr_62082[(1)] = (1));

return statearr_62082;
});
var cljs$core$async$mult_$_state_machine__47293__auto____1 = (function (state_62001){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62083){if((e62083 instanceof Object)){
var ex__47296__auto__ = e62083;
var statearr_62084_62141 = state_62001;
(statearr_62084_62141[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62142 = state_62001;
state_62001 = G__62142;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47293__auto__ = function(state_62001){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47293__auto____1.call(this,state_62001);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47293__auto____0;
cljs$core$async$mult_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47293__auto____1;
return cljs$core$async$mult_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___62086,cs,m,dchan,dctr,done))
})();
var state__47315__auto__ = (function (){var statearr_62085 = f__47314__auto__.call(null);
(statearr_62085[(6)] = c__47313__auto___62086);

return statearr_62085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___62086,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__62144 = arguments.length;
switch (G__62144) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m,ch);
} else {
var m__44705__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m,ch);
} else {
var m__44705__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m);
} else {
var m__44705__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m,state_map);
} else {
var m__44705__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__44704__auto__ = (((m == null))?null:m);
var m__44705__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,m,mode);
} else {
var m__44705__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45199__auto__ = [];
var len__45192__auto___62156 = arguments.length;
var i__45193__auto___62157 = (0);
while(true){
if((i__45193__auto___62157 < len__45192__auto___62156)){
args__45199__auto__.push((arguments[i__45193__auto___62157]));

var G__62158 = (i__45193__auto___62157 + (1));
i__45193__auto___62157 = G__62158;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((3) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45200__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62150){
var map__62151 = p__62150;
var map__62151__$1 = ((((!((map__62151 == null)))?((((map__62151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62151):map__62151);
var opts = map__62151__$1;
var statearr_62153_62159 = state;
(statearr_62153_62159[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__62151,map__62151__$1,opts){
return (function (val){
var statearr_62154_62160 = state;
(statearr_62154_62160[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__62151,map__62151__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_62155_62161 = state;
(statearr_62155_62161[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62146){
var G__62147 = cljs.core.first.call(null,seq62146);
var seq62146__$1 = cljs.core.next.call(null,seq62146);
var G__62148 = cljs.core.first.call(null,seq62146__$1);
var seq62146__$2 = cljs.core.next.call(null,seq62146__$1);
var G__62149 = cljs.core.first.call(null,seq62146__$2);
var seq62146__$3 = cljs.core.next.call(null,seq62146__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62147,G__62148,G__62149,seq62146__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async62162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62162 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta62163){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta62163 = meta62163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62164,meta62163__$1){
var self__ = this;
var _62164__$1 = this;
return (new cljs.core.async.t_cljs$core$async62162(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta62163__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62164){
var self__ = this;
var _62164__$1 = this;
return self__.meta62163;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta62163","meta62163",-1672744786,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async62162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62162";

cljs.core.async.t_cljs$core$async62162.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async62162");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async62162 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async62162(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta62163){
return (new cljs.core.async.t_cljs$core$async62162(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta62163));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async62162(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47313__auto___62326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___62326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___62326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_62266){
var state_val_62267 = (state_62266[(1)]);
if((state_val_62267 === (7))){
var inst_62181 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
var statearr_62268_62327 = state_62266__$1;
(statearr_62268_62327[(2)] = inst_62181);

(statearr_62268_62327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (20))){
var inst_62193 = (state_62266[(7)]);
var state_62266__$1 = state_62266;
var statearr_62269_62328 = state_62266__$1;
(statearr_62269_62328[(2)] = inst_62193);

(statearr_62269_62328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (27))){
var state_62266__$1 = state_62266;
var statearr_62270_62329 = state_62266__$1;
(statearr_62270_62329[(2)] = null);

(statearr_62270_62329[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (1))){
var inst_62168 = (state_62266[(8)]);
var inst_62168__$1 = calc_state.call(null);
var inst_62170 = (inst_62168__$1 == null);
var inst_62171 = cljs.core.not.call(null,inst_62170);
var state_62266__$1 = (function (){var statearr_62271 = state_62266;
(statearr_62271[(8)] = inst_62168__$1);

return statearr_62271;
})();
if(inst_62171){
var statearr_62272_62330 = state_62266__$1;
(statearr_62272_62330[(1)] = (2));

} else {
var statearr_62273_62331 = state_62266__$1;
(statearr_62273_62331[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (24))){
var inst_62240 = (state_62266[(9)]);
var inst_62226 = (state_62266[(10)]);
var inst_62217 = (state_62266[(11)]);
var inst_62240__$1 = inst_62217.call(null,inst_62226);
var state_62266__$1 = (function (){var statearr_62274 = state_62266;
(statearr_62274[(9)] = inst_62240__$1);

return statearr_62274;
})();
if(cljs.core.truth_(inst_62240__$1)){
var statearr_62275_62332 = state_62266__$1;
(statearr_62275_62332[(1)] = (29));

} else {
var statearr_62276_62333 = state_62266__$1;
(statearr_62276_62333[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (4))){
var inst_62184 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
if(cljs.core.truth_(inst_62184)){
var statearr_62277_62334 = state_62266__$1;
(statearr_62277_62334[(1)] = (8));

} else {
var statearr_62278_62335 = state_62266__$1;
(statearr_62278_62335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (15))){
var inst_62211 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
if(cljs.core.truth_(inst_62211)){
var statearr_62279_62336 = state_62266__$1;
(statearr_62279_62336[(1)] = (19));

} else {
var statearr_62280_62337 = state_62266__$1;
(statearr_62280_62337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (21))){
var inst_62216 = (state_62266[(12)]);
var inst_62216__$1 = (state_62266[(2)]);
var inst_62217 = cljs.core.get.call(null,inst_62216__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62218 = cljs.core.get.call(null,inst_62216__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62219 = cljs.core.get.call(null,inst_62216__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62266__$1 = (function (){var statearr_62281 = state_62266;
(statearr_62281[(12)] = inst_62216__$1);

(statearr_62281[(13)] = inst_62218);

(statearr_62281[(11)] = inst_62217);

return statearr_62281;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_62266__$1,(22),inst_62219);
} else {
if((state_val_62267 === (31))){
var inst_62248 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
if(cljs.core.truth_(inst_62248)){
var statearr_62282_62338 = state_62266__$1;
(statearr_62282_62338[(1)] = (32));

} else {
var statearr_62283_62339 = state_62266__$1;
(statearr_62283_62339[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (32))){
var inst_62225 = (state_62266[(14)]);
var state_62266__$1 = state_62266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62266__$1,(35),out,inst_62225);
} else {
if((state_val_62267 === (33))){
var inst_62216 = (state_62266[(12)]);
var inst_62193 = inst_62216;
var state_62266__$1 = (function (){var statearr_62284 = state_62266;
(statearr_62284[(7)] = inst_62193);

return statearr_62284;
})();
var statearr_62285_62340 = state_62266__$1;
(statearr_62285_62340[(2)] = null);

(statearr_62285_62340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (13))){
var inst_62193 = (state_62266[(7)]);
var inst_62200 = inst_62193.cljs$lang$protocol_mask$partition0$;
var inst_62201 = (inst_62200 & (64));
var inst_62202 = inst_62193.cljs$core$ISeq$;
var inst_62203 = (cljs.core.PROTOCOL_SENTINEL === inst_62202);
var inst_62204 = (inst_62201) || (inst_62203);
var state_62266__$1 = state_62266;
if(cljs.core.truth_(inst_62204)){
var statearr_62286_62341 = state_62266__$1;
(statearr_62286_62341[(1)] = (16));

} else {
var statearr_62287_62342 = state_62266__$1;
(statearr_62287_62342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (22))){
var inst_62225 = (state_62266[(14)]);
var inst_62226 = (state_62266[(10)]);
var inst_62224 = (state_62266[(2)]);
var inst_62225__$1 = cljs.core.nth.call(null,inst_62224,(0),null);
var inst_62226__$1 = cljs.core.nth.call(null,inst_62224,(1),null);
var inst_62227 = (inst_62225__$1 == null);
var inst_62228 = cljs.core._EQ_.call(null,inst_62226__$1,change);
var inst_62229 = (inst_62227) || (inst_62228);
var state_62266__$1 = (function (){var statearr_62288 = state_62266;
(statearr_62288[(14)] = inst_62225__$1);

(statearr_62288[(10)] = inst_62226__$1);

return statearr_62288;
})();
if(cljs.core.truth_(inst_62229)){
var statearr_62289_62343 = state_62266__$1;
(statearr_62289_62343[(1)] = (23));

} else {
var statearr_62290_62344 = state_62266__$1;
(statearr_62290_62344[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (36))){
var inst_62216 = (state_62266[(12)]);
var inst_62193 = inst_62216;
var state_62266__$1 = (function (){var statearr_62291 = state_62266;
(statearr_62291[(7)] = inst_62193);

return statearr_62291;
})();
var statearr_62292_62345 = state_62266__$1;
(statearr_62292_62345[(2)] = null);

(statearr_62292_62345[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (29))){
var inst_62240 = (state_62266[(9)]);
var state_62266__$1 = state_62266;
var statearr_62293_62346 = state_62266__$1;
(statearr_62293_62346[(2)] = inst_62240);

(statearr_62293_62346[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (6))){
var state_62266__$1 = state_62266;
var statearr_62294_62347 = state_62266__$1;
(statearr_62294_62347[(2)] = false);

(statearr_62294_62347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (28))){
var inst_62236 = (state_62266[(2)]);
var inst_62237 = calc_state.call(null);
var inst_62193 = inst_62237;
var state_62266__$1 = (function (){var statearr_62295 = state_62266;
(statearr_62295[(7)] = inst_62193);

(statearr_62295[(15)] = inst_62236);

return statearr_62295;
})();
var statearr_62296_62348 = state_62266__$1;
(statearr_62296_62348[(2)] = null);

(statearr_62296_62348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (25))){
var inst_62262 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
var statearr_62297_62349 = state_62266__$1;
(statearr_62297_62349[(2)] = inst_62262);

(statearr_62297_62349[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (34))){
var inst_62260 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
var statearr_62298_62350 = state_62266__$1;
(statearr_62298_62350[(2)] = inst_62260);

(statearr_62298_62350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (17))){
var state_62266__$1 = state_62266;
var statearr_62299_62351 = state_62266__$1;
(statearr_62299_62351[(2)] = false);

(statearr_62299_62351[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (3))){
var state_62266__$1 = state_62266;
var statearr_62300_62352 = state_62266__$1;
(statearr_62300_62352[(2)] = false);

(statearr_62300_62352[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (12))){
var inst_62264 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62266__$1,inst_62264);
} else {
if((state_val_62267 === (2))){
var inst_62168 = (state_62266[(8)]);
var inst_62173 = inst_62168.cljs$lang$protocol_mask$partition0$;
var inst_62174 = (inst_62173 & (64));
var inst_62175 = inst_62168.cljs$core$ISeq$;
var inst_62176 = (cljs.core.PROTOCOL_SENTINEL === inst_62175);
var inst_62177 = (inst_62174) || (inst_62176);
var state_62266__$1 = state_62266;
if(cljs.core.truth_(inst_62177)){
var statearr_62301_62353 = state_62266__$1;
(statearr_62301_62353[(1)] = (5));

} else {
var statearr_62302_62354 = state_62266__$1;
(statearr_62302_62354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (23))){
var inst_62225 = (state_62266[(14)]);
var inst_62231 = (inst_62225 == null);
var state_62266__$1 = state_62266;
if(cljs.core.truth_(inst_62231)){
var statearr_62303_62355 = state_62266__$1;
(statearr_62303_62355[(1)] = (26));

} else {
var statearr_62304_62356 = state_62266__$1;
(statearr_62304_62356[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (35))){
var inst_62251 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
if(cljs.core.truth_(inst_62251)){
var statearr_62305_62357 = state_62266__$1;
(statearr_62305_62357[(1)] = (36));

} else {
var statearr_62306_62358 = state_62266__$1;
(statearr_62306_62358[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (19))){
var inst_62193 = (state_62266[(7)]);
var inst_62213 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62193);
var state_62266__$1 = state_62266;
var statearr_62307_62359 = state_62266__$1;
(statearr_62307_62359[(2)] = inst_62213);

(statearr_62307_62359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (11))){
var inst_62193 = (state_62266[(7)]);
var inst_62197 = (inst_62193 == null);
var inst_62198 = cljs.core.not.call(null,inst_62197);
var state_62266__$1 = state_62266;
if(inst_62198){
var statearr_62308_62360 = state_62266__$1;
(statearr_62308_62360[(1)] = (13));

} else {
var statearr_62309_62361 = state_62266__$1;
(statearr_62309_62361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (9))){
var inst_62168 = (state_62266[(8)]);
var state_62266__$1 = state_62266;
var statearr_62310_62362 = state_62266__$1;
(statearr_62310_62362[(2)] = inst_62168);

(statearr_62310_62362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (5))){
var state_62266__$1 = state_62266;
var statearr_62311_62363 = state_62266__$1;
(statearr_62311_62363[(2)] = true);

(statearr_62311_62363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (14))){
var state_62266__$1 = state_62266;
var statearr_62312_62364 = state_62266__$1;
(statearr_62312_62364[(2)] = false);

(statearr_62312_62364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (26))){
var inst_62226 = (state_62266[(10)]);
var inst_62233 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_62226);
var state_62266__$1 = state_62266;
var statearr_62313_62365 = state_62266__$1;
(statearr_62313_62365[(2)] = inst_62233);

(statearr_62313_62365[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (16))){
var state_62266__$1 = state_62266;
var statearr_62314_62366 = state_62266__$1;
(statearr_62314_62366[(2)] = true);

(statearr_62314_62366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (38))){
var inst_62256 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
var statearr_62315_62367 = state_62266__$1;
(statearr_62315_62367[(2)] = inst_62256);

(statearr_62315_62367[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (30))){
var inst_62218 = (state_62266[(13)]);
var inst_62226 = (state_62266[(10)]);
var inst_62217 = (state_62266[(11)]);
var inst_62243 = cljs.core.empty_QMARK_.call(null,inst_62217);
var inst_62244 = inst_62218.call(null,inst_62226);
var inst_62245 = cljs.core.not.call(null,inst_62244);
var inst_62246 = (inst_62243) && (inst_62245);
var state_62266__$1 = state_62266;
var statearr_62316_62368 = state_62266__$1;
(statearr_62316_62368[(2)] = inst_62246);

(statearr_62316_62368[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (10))){
var inst_62168 = (state_62266[(8)]);
var inst_62189 = (state_62266[(2)]);
var inst_62190 = cljs.core.get.call(null,inst_62189,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62191 = cljs.core.get.call(null,inst_62189,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62192 = cljs.core.get.call(null,inst_62189,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62193 = inst_62168;
var state_62266__$1 = (function (){var statearr_62317 = state_62266;
(statearr_62317[(16)] = inst_62190);

(statearr_62317[(17)] = inst_62191);

(statearr_62317[(18)] = inst_62192);

(statearr_62317[(7)] = inst_62193);

return statearr_62317;
})();
var statearr_62318_62369 = state_62266__$1;
(statearr_62318_62369[(2)] = null);

(statearr_62318_62369[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (18))){
var inst_62208 = (state_62266[(2)]);
var state_62266__$1 = state_62266;
var statearr_62319_62370 = state_62266__$1;
(statearr_62319_62370[(2)] = inst_62208);

(statearr_62319_62370[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (37))){
var state_62266__$1 = state_62266;
var statearr_62320_62371 = state_62266__$1;
(statearr_62320_62371[(2)] = null);

(statearr_62320_62371[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62267 === (8))){
var inst_62168 = (state_62266[(8)]);
var inst_62186 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62168);
var state_62266__$1 = state_62266;
var statearr_62321_62372 = state_62266__$1;
(statearr_62321_62372[(2)] = inst_62186);

(statearr_62321_62372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___62326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__47292__auto__,c__47313__auto___62326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__47293__auto__ = null;
var cljs$core$async$mix_$_state_machine__47293__auto____0 = (function (){
var statearr_62322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62322[(0)] = cljs$core$async$mix_$_state_machine__47293__auto__);

(statearr_62322[(1)] = (1));

return statearr_62322;
});
var cljs$core$async$mix_$_state_machine__47293__auto____1 = (function (state_62266){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62323){if((e62323 instanceof Object)){
var ex__47296__auto__ = e62323;
var statearr_62324_62373 = state_62266;
(statearr_62324_62373[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62374 = state_62266;
state_62266 = G__62374;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47293__auto__ = function(state_62266){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47293__auto____1.call(this,state_62266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47293__auto____0;
cljs$core$async$mix_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47293__auto____1;
return cljs$core$async$mix_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___62326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__47315__auto__ = (function (){var statearr_62325 = f__47314__auto__.call(null);
(statearr_62325[(6)] = c__47313__auto___62326);

return statearr_62325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___62326,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__44704__auto__ = (((p == null))?null:p);
var m__44705__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__44705__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__44704__auto__ = (((p == null))?null:p);
var m__44705__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,p,v,ch);
} else {
var m__44705__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__62376 = arguments.length;
switch (G__62376) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__44704__auto__ = (((p == null))?null:p);
var m__44705__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,p);
} else {
var m__44705__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__44704__auto__ = (((p == null))?null:p);
var m__44705__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,p,v);
} else {
var m__44705__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__62380 = arguments.length;
switch (G__62380) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44021__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44021__auto__,mults){
return (function (p1__62378_SHARP_){
if(cljs.core.truth_(p1__62378_SHARP_.call(null,topic))){
return p1__62378_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__62378_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44021__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async62381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62381 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62382){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62382 = meta62382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_62383,meta62382__$1){
var self__ = this;
var _62383__$1 = this;
return (new cljs.core.async.t_cljs$core$async62381(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62382__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_62383){
var self__ = this;
var _62383__$1 = this;
return self__.meta62382;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62382","meta62382",-1931898640,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async62381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62381";

cljs.core.async.t_cljs$core$async62381.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async62381");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async62381 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async62381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62382){
return (new cljs.core.async.t_cljs$core$async62381(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62382));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async62381(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47313__auto___62501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___62501,mults,ensure_mult,p){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___62501,mults,ensure_mult,p){
return (function (state_62455){
var state_val_62456 = (state_62455[(1)]);
if((state_val_62456 === (7))){
var inst_62451 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
var statearr_62457_62502 = state_62455__$1;
(statearr_62457_62502[(2)] = inst_62451);

(statearr_62457_62502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (20))){
var state_62455__$1 = state_62455;
var statearr_62458_62503 = state_62455__$1;
(statearr_62458_62503[(2)] = null);

(statearr_62458_62503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (1))){
var state_62455__$1 = state_62455;
var statearr_62459_62504 = state_62455__$1;
(statearr_62459_62504[(2)] = null);

(statearr_62459_62504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (24))){
var inst_62434 = (state_62455[(7)]);
var inst_62443 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_62434);
var state_62455__$1 = state_62455;
var statearr_62460_62505 = state_62455__$1;
(statearr_62460_62505[(2)] = inst_62443);

(statearr_62460_62505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (4))){
var inst_62386 = (state_62455[(8)]);
var inst_62386__$1 = (state_62455[(2)]);
var inst_62387 = (inst_62386__$1 == null);
var state_62455__$1 = (function (){var statearr_62461 = state_62455;
(statearr_62461[(8)] = inst_62386__$1);

return statearr_62461;
})();
if(cljs.core.truth_(inst_62387)){
var statearr_62462_62506 = state_62455__$1;
(statearr_62462_62506[(1)] = (5));

} else {
var statearr_62463_62507 = state_62455__$1;
(statearr_62463_62507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (15))){
var inst_62428 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
var statearr_62464_62508 = state_62455__$1;
(statearr_62464_62508[(2)] = inst_62428);

(statearr_62464_62508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (21))){
var inst_62448 = (state_62455[(2)]);
var state_62455__$1 = (function (){var statearr_62465 = state_62455;
(statearr_62465[(9)] = inst_62448);

return statearr_62465;
})();
var statearr_62466_62509 = state_62455__$1;
(statearr_62466_62509[(2)] = null);

(statearr_62466_62509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (13))){
var inst_62410 = (state_62455[(10)]);
var inst_62412 = cljs.core.chunked_seq_QMARK_.call(null,inst_62410);
var state_62455__$1 = state_62455;
if(inst_62412){
var statearr_62467_62510 = state_62455__$1;
(statearr_62467_62510[(1)] = (16));

} else {
var statearr_62468_62511 = state_62455__$1;
(statearr_62468_62511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (22))){
var inst_62440 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
if(cljs.core.truth_(inst_62440)){
var statearr_62469_62512 = state_62455__$1;
(statearr_62469_62512[(1)] = (23));

} else {
var statearr_62470_62513 = state_62455__$1;
(statearr_62470_62513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (6))){
var inst_62436 = (state_62455[(11)]);
var inst_62434 = (state_62455[(7)]);
var inst_62386 = (state_62455[(8)]);
var inst_62434__$1 = topic_fn.call(null,inst_62386);
var inst_62435 = cljs.core.deref.call(null,mults);
var inst_62436__$1 = cljs.core.get.call(null,inst_62435,inst_62434__$1);
var state_62455__$1 = (function (){var statearr_62471 = state_62455;
(statearr_62471[(11)] = inst_62436__$1);

(statearr_62471[(7)] = inst_62434__$1);

return statearr_62471;
})();
if(cljs.core.truth_(inst_62436__$1)){
var statearr_62472_62514 = state_62455__$1;
(statearr_62472_62514[(1)] = (19));

} else {
var statearr_62473_62515 = state_62455__$1;
(statearr_62473_62515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (25))){
var inst_62445 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
var statearr_62474_62516 = state_62455__$1;
(statearr_62474_62516[(2)] = inst_62445);

(statearr_62474_62516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (17))){
var inst_62410 = (state_62455[(10)]);
var inst_62419 = cljs.core.first.call(null,inst_62410);
var inst_62420 = cljs.core.async.muxch_STAR_.call(null,inst_62419);
var inst_62421 = cljs.core.async.close_BANG_.call(null,inst_62420);
var inst_62422 = cljs.core.next.call(null,inst_62410);
var inst_62396 = inst_62422;
var inst_62397 = null;
var inst_62398 = (0);
var inst_62399 = (0);
var state_62455__$1 = (function (){var statearr_62475 = state_62455;
(statearr_62475[(12)] = inst_62421);

(statearr_62475[(13)] = inst_62397);

(statearr_62475[(14)] = inst_62398);

(statearr_62475[(15)] = inst_62396);

(statearr_62475[(16)] = inst_62399);

return statearr_62475;
})();
var statearr_62476_62517 = state_62455__$1;
(statearr_62476_62517[(2)] = null);

(statearr_62476_62517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (3))){
var inst_62453 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62455__$1,inst_62453);
} else {
if((state_val_62456 === (12))){
var inst_62430 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
var statearr_62477_62518 = state_62455__$1;
(statearr_62477_62518[(2)] = inst_62430);

(statearr_62477_62518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (2))){
var state_62455__$1 = state_62455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62455__$1,(4),ch);
} else {
if((state_val_62456 === (23))){
var state_62455__$1 = state_62455;
var statearr_62478_62519 = state_62455__$1;
(statearr_62478_62519[(2)] = null);

(statearr_62478_62519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (19))){
var inst_62436 = (state_62455[(11)]);
var inst_62386 = (state_62455[(8)]);
var inst_62438 = cljs.core.async.muxch_STAR_.call(null,inst_62436);
var state_62455__$1 = state_62455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62455__$1,(22),inst_62438,inst_62386);
} else {
if((state_val_62456 === (11))){
var inst_62410 = (state_62455[(10)]);
var inst_62396 = (state_62455[(15)]);
var inst_62410__$1 = cljs.core.seq.call(null,inst_62396);
var state_62455__$1 = (function (){var statearr_62479 = state_62455;
(statearr_62479[(10)] = inst_62410__$1);

return statearr_62479;
})();
if(inst_62410__$1){
var statearr_62480_62520 = state_62455__$1;
(statearr_62480_62520[(1)] = (13));

} else {
var statearr_62481_62521 = state_62455__$1;
(statearr_62481_62521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (9))){
var inst_62432 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
var statearr_62482_62522 = state_62455__$1;
(statearr_62482_62522[(2)] = inst_62432);

(statearr_62482_62522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (5))){
var inst_62393 = cljs.core.deref.call(null,mults);
var inst_62394 = cljs.core.vals.call(null,inst_62393);
var inst_62395 = cljs.core.seq.call(null,inst_62394);
var inst_62396 = inst_62395;
var inst_62397 = null;
var inst_62398 = (0);
var inst_62399 = (0);
var state_62455__$1 = (function (){var statearr_62483 = state_62455;
(statearr_62483[(13)] = inst_62397);

(statearr_62483[(14)] = inst_62398);

(statearr_62483[(15)] = inst_62396);

(statearr_62483[(16)] = inst_62399);

return statearr_62483;
})();
var statearr_62484_62523 = state_62455__$1;
(statearr_62484_62523[(2)] = null);

(statearr_62484_62523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (14))){
var state_62455__$1 = state_62455;
var statearr_62488_62524 = state_62455__$1;
(statearr_62488_62524[(2)] = null);

(statearr_62488_62524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (16))){
var inst_62410 = (state_62455[(10)]);
var inst_62414 = cljs.core.chunk_first.call(null,inst_62410);
var inst_62415 = cljs.core.chunk_rest.call(null,inst_62410);
var inst_62416 = cljs.core.count.call(null,inst_62414);
var inst_62396 = inst_62415;
var inst_62397 = inst_62414;
var inst_62398 = inst_62416;
var inst_62399 = (0);
var state_62455__$1 = (function (){var statearr_62489 = state_62455;
(statearr_62489[(13)] = inst_62397);

(statearr_62489[(14)] = inst_62398);

(statearr_62489[(15)] = inst_62396);

(statearr_62489[(16)] = inst_62399);

return statearr_62489;
})();
var statearr_62490_62525 = state_62455__$1;
(statearr_62490_62525[(2)] = null);

(statearr_62490_62525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (10))){
var inst_62397 = (state_62455[(13)]);
var inst_62398 = (state_62455[(14)]);
var inst_62396 = (state_62455[(15)]);
var inst_62399 = (state_62455[(16)]);
var inst_62404 = cljs.core._nth.call(null,inst_62397,inst_62399);
var inst_62405 = cljs.core.async.muxch_STAR_.call(null,inst_62404);
var inst_62406 = cljs.core.async.close_BANG_.call(null,inst_62405);
var inst_62407 = (inst_62399 + (1));
var tmp62485 = inst_62397;
var tmp62486 = inst_62398;
var tmp62487 = inst_62396;
var inst_62396__$1 = tmp62487;
var inst_62397__$1 = tmp62485;
var inst_62398__$1 = tmp62486;
var inst_62399__$1 = inst_62407;
var state_62455__$1 = (function (){var statearr_62491 = state_62455;
(statearr_62491[(17)] = inst_62406);

(statearr_62491[(13)] = inst_62397__$1);

(statearr_62491[(14)] = inst_62398__$1);

(statearr_62491[(15)] = inst_62396__$1);

(statearr_62491[(16)] = inst_62399__$1);

return statearr_62491;
})();
var statearr_62492_62526 = state_62455__$1;
(statearr_62492_62526[(2)] = null);

(statearr_62492_62526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (18))){
var inst_62425 = (state_62455[(2)]);
var state_62455__$1 = state_62455;
var statearr_62493_62527 = state_62455__$1;
(statearr_62493_62527[(2)] = inst_62425);

(statearr_62493_62527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62456 === (8))){
var inst_62398 = (state_62455[(14)]);
var inst_62399 = (state_62455[(16)]);
var inst_62401 = (inst_62399 < inst_62398);
var inst_62402 = inst_62401;
var state_62455__$1 = state_62455;
if(cljs.core.truth_(inst_62402)){
var statearr_62494_62528 = state_62455__$1;
(statearr_62494_62528[(1)] = (10));

} else {
var statearr_62495_62529 = state_62455__$1;
(statearr_62495_62529[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___62501,mults,ensure_mult,p))
;
return ((function (switch__47292__auto__,c__47313__auto___62501,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_62496 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62496[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_62496[(1)] = (1));

return statearr_62496;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_62455){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62497){if((e62497 instanceof Object)){
var ex__47296__auto__ = e62497;
var statearr_62498_62530 = state_62455;
(statearr_62498_62530[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62531 = state_62455;
state_62455 = G__62531;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_62455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_62455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___62501,mults,ensure_mult,p))
})();
var state__47315__auto__ = (function (){var statearr_62499 = f__47314__auto__.call(null);
(statearr_62499[(6)] = c__47313__auto___62501);

return statearr_62499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___62501,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__62533 = arguments.length;
switch (G__62533) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__62536 = arguments.length;
switch (G__62536) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__62539 = arguments.length;
switch (G__62539) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__47313__auto___62606 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___62606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___62606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_62578){
var state_val_62579 = (state_62578[(1)]);
if((state_val_62579 === (7))){
var state_62578__$1 = state_62578;
var statearr_62580_62607 = state_62578__$1;
(statearr_62580_62607[(2)] = null);

(statearr_62580_62607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (1))){
var state_62578__$1 = state_62578;
var statearr_62581_62608 = state_62578__$1;
(statearr_62581_62608[(2)] = null);

(statearr_62581_62608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (4))){
var inst_62542 = (state_62578[(7)]);
var inst_62544 = (inst_62542 < cnt);
var state_62578__$1 = state_62578;
if(cljs.core.truth_(inst_62544)){
var statearr_62582_62609 = state_62578__$1;
(statearr_62582_62609[(1)] = (6));

} else {
var statearr_62583_62610 = state_62578__$1;
(statearr_62583_62610[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (15))){
var inst_62574 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
var statearr_62584_62611 = state_62578__$1;
(statearr_62584_62611[(2)] = inst_62574);

(statearr_62584_62611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (13))){
var inst_62567 = cljs.core.async.close_BANG_.call(null,out);
var state_62578__$1 = state_62578;
var statearr_62585_62612 = state_62578__$1;
(statearr_62585_62612[(2)] = inst_62567);

(statearr_62585_62612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (6))){
var state_62578__$1 = state_62578;
var statearr_62586_62613 = state_62578__$1;
(statearr_62586_62613[(2)] = null);

(statearr_62586_62613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (3))){
var inst_62576 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62578__$1,inst_62576);
} else {
if((state_val_62579 === (12))){
var inst_62564 = (state_62578[(8)]);
var inst_62564__$1 = (state_62578[(2)]);
var inst_62565 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_62564__$1);
var state_62578__$1 = (function (){var statearr_62587 = state_62578;
(statearr_62587[(8)] = inst_62564__$1);

return statearr_62587;
})();
if(cljs.core.truth_(inst_62565)){
var statearr_62588_62614 = state_62578__$1;
(statearr_62588_62614[(1)] = (13));

} else {
var statearr_62589_62615 = state_62578__$1;
(statearr_62589_62615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (2))){
var inst_62541 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_62542 = (0);
var state_62578__$1 = (function (){var statearr_62590 = state_62578;
(statearr_62590[(9)] = inst_62541);

(statearr_62590[(7)] = inst_62542);

return statearr_62590;
})();
var statearr_62591_62616 = state_62578__$1;
(statearr_62591_62616[(2)] = null);

(statearr_62591_62616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (11))){
var inst_62542 = (state_62578[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_62578,(10),Object,null,(9));
var inst_62551 = chs__$1.call(null,inst_62542);
var inst_62552 = done.call(null,inst_62542);
var inst_62553 = cljs.core.async.take_BANG_.call(null,inst_62551,inst_62552);
var state_62578__$1 = state_62578;
var statearr_62592_62617 = state_62578__$1;
(statearr_62592_62617[(2)] = inst_62553);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (9))){
var inst_62542 = (state_62578[(7)]);
var inst_62555 = (state_62578[(2)]);
var inst_62556 = (inst_62542 + (1));
var inst_62542__$1 = inst_62556;
var state_62578__$1 = (function (){var statearr_62593 = state_62578;
(statearr_62593[(10)] = inst_62555);

(statearr_62593[(7)] = inst_62542__$1);

return statearr_62593;
})();
var statearr_62594_62618 = state_62578__$1;
(statearr_62594_62618[(2)] = null);

(statearr_62594_62618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (5))){
var inst_62562 = (state_62578[(2)]);
var state_62578__$1 = (function (){var statearr_62595 = state_62578;
(statearr_62595[(11)] = inst_62562);

return statearr_62595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62578__$1,(12),dchan);
} else {
if((state_val_62579 === (14))){
var inst_62564 = (state_62578[(8)]);
var inst_62569 = cljs.core.apply.call(null,f,inst_62564);
var state_62578__$1 = state_62578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62578__$1,(16),out,inst_62569);
} else {
if((state_val_62579 === (16))){
var inst_62571 = (state_62578[(2)]);
var state_62578__$1 = (function (){var statearr_62596 = state_62578;
(statearr_62596[(12)] = inst_62571);

return statearr_62596;
})();
var statearr_62597_62619 = state_62578__$1;
(statearr_62597_62619[(2)] = null);

(statearr_62597_62619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (10))){
var inst_62546 = (state_62578[(2)]);
var inst_62547 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_62578__$1 = (function (){var statearr_62598 = state_62578;
(statearr_62598[(13)] = inst_62546);

return statearr_62598;
})();
var statearr_62599_62620 = state_62578__$1;
(statearr_62599_62620[(2)] = inst_62547);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62578__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62579 === (8))){
var inst_62560 = (state_62578[(2)]);
var state_62578__$1 = state_62578;
var statearr_62600_62621 = state_62578__$1;
(statearr_62600_62621[(2)] = inst_62560);

(statearr_62600_62621[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___62606,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__47292__auto__,c__47313__auto___62606,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_62601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62601[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_62601[(1)] = (1));

return statearr_62601;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_62578){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62602){if((e62602 instanceof Object)){
var ex__47296__auto__ = e62602;
var statearr_62603_62622 = state_62578;
(statearr_62603_62622[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62623 = state_62578;
state_62578 = G__62623;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_62578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_62578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___62606,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__47315__auto__ = (function (){var statearr_62604 = f__47314__auto__.call(null);
(statearr_62604[(6)] = c__47313__auto___62606);

return statearr_62604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___62606,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__62626 = arguments.length;
switch (G__62626) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47313__auto___62680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___62680,out){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___62680,out){
return (function (state_62658){
var state_val_62659 = (state_62658[(1)]);
if((state_val_62659 === (7))){
var inst_62637 = (state_62658[(7)]);
var inst_62638 = (state_62658[(8)]);
var inst_62637__$1 = (state_62658[(2)]);
var inst_62638__$1 = cljs.core.nth.call(null,inst_62637__$1,(0),null);
var inst_62639 = cljs.core.nth.call(null,inst_62637__$1,(1),null);
var inst_62640 = (inst_62638__$1 == null);
var state_62658__$1 = (function (){var statearr_62660 = state_62658;
(statearr_62660[(7)] = inst_62637__$1);

(statearr_62660[(8)] = inst_62638__$1);

(statearr_62660[(9)] = inst_62639);

return statearr_62660;
})();
if(cljs.core.truth_(inst_62640)){
var statearr_62661_62681 = state_62658__$1;
(statearr_62661_62681[(1)] = (8));

} else {
var statearr_62662_62682 = state_62658__$1;
(statearr_62662_62682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62659 === (1))){
var inst_62627 = cljs.core.vec.call(null,chs);
var inst_62628 = inst_62627;
var state_62658__$1 = (function (){var statearr_62663 = state_62658;
(statearr_62663[(10)] = inst_62628);

return statearr_62663;
})();
var statearr_62664_62683 = state_62658__$1;
(statearr_62664_62683[(2)] = null);

(statearr_62664_62683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62659 === (4))){
var inst_62628 = (state_62658[(10)]);
var state_62658__$1 = state_62658;
return cljs.core.async.ioc_alts_BANG_.call(null,state_62658__$1,(7),inst_62628);
} else {
if((state_val_62659 === (6))){
var inst_62654 = (state_62658[(2)]);
var state_62658__$1 = state_62658;
var statearr_62665_62684 = state_62658__$1;
(statearr_62665_62684[(2)] = inst_62654);

(statearr_62665_62684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62659 === (3))){
var inst_62656 = (state_62658[(2)]);
var state_62658__$1 = state_62658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62658__$1,inst_62656);
} else {
if((state_val_62659 === (2))){
var inst_62628 = (state_62658[(10)]);
var inst_62630 = cljs.core.count.call(null,inst_62628);
var inst_62631 = (inst_62630 > (0));
var state_62658__$1 = state_62658;
if(cljs.core.truth_(inst_62631)){
var statearr_62667_62685 = state_62658__$1;
(statearr_62667_62685[(1)] = (4));

} else {
var statearr_62668_62686 = state_62658__$1;
(statearr_62668_62686[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62659 === (11))){
var inst_62628 = (state_62658[(10)]);
var inst_62647 = (state_62658[(2)]);
var tmp62666 = inst_62628;
var inst_62628__$1 = tmp62666;
var state_62658__$1 = (function (){var statearr_62669 = state_62658;
(statearr_62669[(10)] = inst_62628__$1);

(statearr_62669[(11)] = inst_62647);

return statearr_62669;
})();
var statearr_62670_62687 = state_62658__$1;
(statearr_62670_62687[(2)] = null);

(statearr_62670_62687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62659 === (9))){
var inst_62638 = (state_62658[(8)]);
var state_62658__$1 = state_62658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62658__$1,(11),out,inst_62638);
} else {
if((state_val_62659 === (5))){
var inst_62652 = cljs.core.async.close_BANG_.call(null,out);
var state_62658__$1 = state_62658;
var statearr_62671_62688 = state_62658__$1;
(statearr_62671_62688[(2)] = inst_62652);

(statearr_62671_62688[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62659 === (10))){
var inst_62650 = (state_62658[(2)]);
var state_62658__$1 = state_62658;
var statearr_62672_62689 = state_62658__$1;
(statearr_62672_62689[(2)] = inst_62650);

(statearr_62672_62689[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62659 === (8))){
var inst_62637 = (state_62658[(7)]);
var inst_62628 = (state_62658[(10)]);
var inst_62638 = (state_62658[(8)]);
var inst_62639 = (state_62658[(9)]);
var inst_62642 = (function (){var cs = inst_62628;
var vec__62633 = inst_62637;
var v = inst_62638;
var c = inst_62639;
return ((function (cs,vec__62633,v,c,inst_62637,inst_62628,inst_62638,inst_62639,state_val_62659,c__47313__auto___62680,out){
return (function (p1__62624_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__62624_SHARP_);
});
;})(cs,vec__62633,v,c,inst_62637,inst_62628,inst_62638,inst_62639,state_val_62659,c__47313__auto___62680,out))
})();
var inst_62643 = cljs.core.filterv.call(null,inst_62642,inst_62628);
var inst_62628__$1 = inst_62643;
var state_62658__$1 = (function (){var statearr_62673 = state_62658;
(statearr_62673[(10)] = inst_62628__$1);

return statearr_62673;
})();
var statearr_62674_62690 = state_62658__$1;
(statearr_62674_62690[(2)] = null);

(statearr_62674_62690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___62680,out))
;
return ((function (switch__47292__auto__,c__47313__auto___62680,out){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_62675 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62675[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_62675[(1)] = (1));

return statearr_62675;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_62658){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62676){if((e62676 instanceof Object)){
var ex__47296__auto__ = e62676;
var statearr_62677_62691 = state_62658;
(statearr_62677_62691[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62692 = state_62658;
state_62658 = G__62692;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_62658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_62658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___62680,out))
})();
var state__47315__auto__ = (function (){var statearr_62678 = f__47314__auto__.call(null);
(statearr_62678[(6)] = c__47313__auto___62680);

return statearr_62678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___62680,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__62694 = arguments.length;
switch (G__62694) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47313__auto___62739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___62739,out){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___62739,out){
return (function (state_62718){
var state_val_62719 = (state_62718[(1)]);
if((state_val_62719 === (7))){
var inst_62700 = (state_62718[(7)]);
var inst_62700__$1 = (state_62718[(2)]);
var inst_62701 = (inst_62700__$1 == null);
var inst_62702 = cljs.core.not.call(null,inst_62701);
var state_62718__$1 = (function (){var statearr_62720 = state_62718;
(statearr_62720[(7)] = inst_62700__$1);

return statearr_62720;
})();
if(inst_62702){
var statearr_62721_62740 = state_62718__$1;
(statearr_62721_62740[(1)] = (8));

} else {
var statearr_62722_62741 = state_62718__$1;
(statearr_62722_62741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (1))){
var inst_62695 = (0);
var state_62718__$1 = (function (){var statearr_62723 = state_62718;
(statearr_62723[(8)] = inst_62695);

return statearr_62723;
})();
var statearr_62724_62742 = state_62718__$1;
(statearr_62724_62742[(2)] = null);

(statearr_62724_62742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (4))){
var state_62718__$1 = state_62718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62718__$1,(7),ch);
} else {
if((state_val_62719 === (6))){
var inst_62713 = (state_62718[(2)]);
var state_62718__$1 = state_62718;
var statearr_62725_62743 = state_62718__$1;
(statearr_62725_62743[(2)] = inst_62713);

(statearr_62725_62743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (3))){
var inst_62715 = (state_62718[(2)]);
var inst_62716 = cljs.core.async.close_BANG_.call(null,out);
var state_62718__$1 = (function (){var statearr_62726 = state_62718;
(statearr_62726[(9)] = inst_62715);

return statearr_62726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62718__$1,inst_62716);
} else {
if((state_val_62719 === (2))){
var inst_62695 = (state_62718[(8)]);
var inst_62697 = (inst_62695 < n);
var state_62718__$1 = state_62718;
if(cljs.core.truth_(inst_62697)){
var statearr_62727_62744 = state_62718__$1;
(statearr_62727_62744[(1)] = (4));

} else {
var statearr_62728_62745 = state_62718__$1;
(statearr_62728_62745[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (11))){
var inst_62695 = (state_62718[(8)]);
var inst_62705 = (state_62718[(2)]);
var inst_62706 = (inst_62695 + (1));
var inst_62695__$1 = inst_62706;
var state_62718__$1 = (function (){var statearr_62729 = state_62718;
(statearr_62729[(8)] = inst_62695__$1);

(statearr_62729[(10)] = inst_62705);

return statearr_62729;
})();
var statearr_62730_62746 = state_62718__$1;
(statearr_62730_62746[(2)] = null);

(statearr_62730_62746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (9))){
var state_62718__$1 = state_62718;
var statearr_62731_62747 = state_62718__$1;
(statearr_62731_62747[(2)] = null);

(statearr_62731_62747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (5))){
var state_62718__$1 = state_62718;
var statearr_62732_62748 = state_62718__$1;
(statearr_62732_62748[(2)] = null);

(statearr_62732_62748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (10))){
var inst_62710 = (state_62718[(2)]);
var state_62718__$1 = state_62718;
var statearr_62733_62749 = state_62718__$1;
(statearr_62733_62749[(2)] = inst_62710);

(statearr_62733_62749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62719 === (8))){
var inst_62700 = (state_62718[(7)]);
var state_62718__$1 = state_62718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62718__$1,(11),out,inst_62700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___62739,out))
;
return ((function (switch__47292__auto__,c__47313__auto___62739,out){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_62734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62734[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_62734[(1)] = (1));

return statearr_62734;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_62718){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62735){if((e62735 instanceof Object)){
var ex__47296__auto__ = e62735;
var statearr_62736_62750 = state_62718;
(statearr_62736_62750[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62751 = state_62718;
state_62718 = G__62751;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_62718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_62718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___62739,out))
})();
var state__47315__auto__ = (function (){var statearr_62737 = f__47314__auto__.call(null);
(statearr_62737[(6)] = c__47313__auto___62739);

return statearr_62737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___62739,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async62753 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62753 = (function (f,ch,meta62754){
this.f = f;
this.ch = ch;
this.meta62754 = meta62754;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62755,meta62754__$1){
var self__ = this;
var _62755__$1 = this;
return (new cljs.core.async.t_cljs$core$async62753(self__.f,self__.ch,meta62754__$1));
});

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62755){
var self__ = this;
var _62755__$1 = this;
return self__.meta62754;
});

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async62756 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62756 = (function (f,ch,meta62754,_,fn1,meta62757){
this.f = f;
this.ch = ch;
this.meta62754 = meta62754;
this._ = _;
this.fn1 = fn1;
this.meta62757 = meta62757;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_62758,meta62757__$1){
var self__ = this;
var _62758__$1 = this;
return (new cljs.core.async.t_cljs$core$async62756(self__.f,self__.ch,self__.meta62754,self__._,self__.fn1,meta62757__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_62758){
var self__ = this;
var _62758__$1 = this;
return self__.meta62757;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async62756.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__62752_SHARP_){
return f1.call(null,(((p1__62752_SHARP_ == null))?null:self__.f.call(null,p1__62752_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async62756.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62754","meta62754",871632852,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62753","cljs.core.async/t_cljs$core$async62753",1438401390,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62757","meta62757",1350923082,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async62756.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62756.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62756";

cljs.core.async.t_cljs$core$async62756.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async62756");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async62756 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62756(f__$1,ch__$1,meta62754__$1,___$2,fn1__$1,meta62757){
return (new cljs.core.async.t_cljs$core$async62756(f__$1,ch__$1,meta62754__$1,___$2,fn1__$1,meta62757));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async62756(self__.f,self__.ch,self__.meta62754,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44009__auto__ = ret;
if(cljs.core.truth_(and__44009__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44009__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62753.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async62753.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62754","meta62754",871632852,null)], null);
});

cljs.core.async.t_cljs$core$async62753.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62753.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62753";

cljs.core.async.t_cljs$core$async62753.cljs$lang$ctorPrWriter = (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async62753");
});

cljs.core.async.__GT_t_cljs$core$async62753 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62753(f__$1,ch__$1,meta62754){
return (new cljs.core.async.t_cljs$core$async62753(f__$1,ch__$1,meta62754));
});

}

return (new cljs.core.async.t_cljs$core$async62753(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async62759 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62759 = (function (f,ch,meta62760){
this.f = f;
this.ch = ch;
this.meta62760 = meta62760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62761,meta62760__$1){
var self__ = this;
var _62761__$1 = this;
return (new cljs.core.async.t_cljs$core$async62759(self__.f,self__.ch,meta62760__$1));
});

cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62761){
var self__ = this;
var _62761__$1 = this;
return self__.meta62760;
});

cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62759.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async62759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62760","meta62760",1101866249,null)], null);
});

cljs.core.async.t_cljs$core$async62759.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62759";

cljs.core.async.t_cljs$core$async62759.cljs$lang$ctorPrWriter = (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async62759");
});

cljs.core.async.__GT_t_cljs$core$async62759 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62759(f__$1,ch__$1,meta62760){
return (new cljs.core.async.t_cljs$core$async62759(f__$1,ch__$1,meta62760));
});

}

return (new cljs.core.async.t_cljs$core$async62759(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async62762 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62762 = (function (p,ch,meta62763){
this.p = p;
this.ch = ch;
this.meta62763 = meta62763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62764,meta62763__$1){
var self__ = this;
var _62764__$1 = this;
return (new cljs.core.async.t_cljs$core$async62762(self__.p,self__.ch,meta62763__$1));
});

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62764){
var self__ = this;
var _62764__$1 = this;
return self__.meta62763;
});

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62762.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async62762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62763","meta62763",-692282925,null)], null);
});

cljs.core.async.t_cljs$core$async62762.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62762";

cljs.core.async.t_cljs$core$async62762.cljs$lang$ctorPrWriter = (function (this__44646__auto__,writer__44647__auto__,opt__44648__auto__){
return cljs.core._write.call(null,writer__44647__auto__,"cljs.core.async/t_cljs$core$async62762");
});

cljs.core.async.__GT_t_cljs$core$async62762 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62762(p__$1,ch__$1,meta62763){
return (new cljs.core.async.t_cljs$core$async62762(p__$1,ch__$1,meta62763));
});

}

return (new cljs.core.async.t_cljs$core$async62762(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__62766 = arguments.length;
switch (G__62766) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47313__auto___62806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___62806,out){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___62806,out){
return (function (state_62787){
var state_val_62788 = (state_62787[(1)]);
if((state_val_62788 === (7))){
var inst_62783 = (state_62787[(2)]);
var state_62787__$1 = state_62787;
var statearr_62789_62807 = state_62787__$1;
(statearr_62789_62807[(2)] = inst_62783);

(statearr_62789_62807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (1))){
var state_62787__$1 = state_62787;
var statearr_62790_62808 = state_62787__$1;
(statearr_62790_62808[(2)] = null);

(statearr_62790_62808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (4))){
var inst_62769 = (state_62787[(7)]);
var inst_62769__$1 = (state_62787[(2)]);
var inst_62770 = (inst_62769__$1 == null);
var state_62787__$1 = (function (){var statearr_62791 = state_62787;
(statearr_62791[(7)] = inst_62769__$1);

return statearr_62791;
})();
if(cljs.core.truth_(inst_62770)){
var statearr_62792_62809 = state_62787__$1;
(statearr_62792_62809[(1)] = (5));

} else {
var statearr_62793_62810 = state_62787__$1;
(statearr_62793_62810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (6))){
var inst_62769 = (state_62787[(7)]);
var inst_62774 = p.call(null,inst_62769);
var state_62787__$1 = state_62787;
if(cljs.core.truth_(inst_62774)){
var statearr_62794_62811 = state_62787__$1;
(statearr_62794_62811[(1)] = (8));

} else {
var statearr_62795_62812 = state_62787__$1;
(statearr_62795_62812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (3))){
var inst_62785 = (state_62787[(2)]);
var state_62787__$1 = state_62787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62787__$1,inst_62785);
} else {
if((state_val_62788 === (2))){
var state_62787__$1 = state_62787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62787__$1,(4),ch);
} else {
if((state_val_62788 === (11))){
var inst_62777 = (state_62787[(2)]);
var state_62787__$1 = state_62787;
var statearr_62796_62813 = state_62787__$1;
(statearr_62796_62813[(2)] = inst_62777);

(statearr_62796_62813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (9))){
var state_62787__$1 = state_62787;
var statearr_62797_62814 = state_62787__$1;
(statearr_62797_62814[(2)] = null);

(statearr_62797_62814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (5))){
var inst_62772 = cljs.core.async.close_BANG_.call(null,out);
var state_62787__$1 = state_62787;
var statearr_62798_62815 = state_62787__$1;
(statearr_62798_62815[(2)] = inst_62772);

(statearr_62798_62815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (10))){
var inst_62780 = (state_62787[(2)]);
var state_62787__$1 = (function (){var statearr_62799 = state_62787;
(statearr_62799[(8)] = inst_62780);

return statearr_62799;
})();
var statearr_62800_62816 = state_62787__$1;
(statearr_62800_62816[(2)] = null);

(statearr_62800_62816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62788 === (8))){
var inst_62769 = (state_62787[(7)]);
var state_62787__$1 = state_62787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62787__$1,(11),out,inst_62769);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___62806,out))
;
return ((function (switch__47292__auto__,c__47313__auto___62806,out){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_62801 = [null,null,null,null,null,null,null,null,null];
(statearr_62801[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_62801[(1)] = (1));

return statearr_62801;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_62787){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62802){if((e62802 instanceof Object)){
var ex__47296__auto__ = e62802;
var statearr_62803_62817 = state_62787;
(statearr_62803_62817[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62818 = state_62787;
state_62787 = G__62818;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_62787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_62787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___62806,out))
})();
var state__47315__auto__ = (function (){var statearr_62804 = f__47314__auto__.call(null);
(statearr_62804[(6)] = c__47313__auto___62806);

return statearr_62804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___62806,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62820 = arguments.length;
switch (G__62820) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__){
return (function (state_62883){
var state_val_62884 = (state_62883[(1)]);
if((state_val_62884 === (7))){
var inst_62879 = (state_62883[(2)]);
var state_62883__$1 = state_62883;
var statearr_62885_62923 = state_62883__$1;
(statearr_62885_62923[(2)] = inst_62879);

(statearr_62885_62923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (20))){
var inst_62849 = (state_62883[(7)]);
var inst_62860 = (state_62883[(2)]);
var inst_62861 = cljs.core.next.call(null,inst_62849);
var inst_62835 = inst_62861;
var inst_62836 = null;
var inst_62837 = (0);
var inst_62838 = (0);
var state_62883__$1 = (function (){var statearr_62886 = state_62883;
(statearr_62886[(8)] = inst_62838);

(statearr_62886[(9)] = inst_62837);

(statearr_62886[(10)] = inst_62835);

(statearr_62886[(11)] = inst_62860);

(statearr_62886[(12)] = inst_62836);

return statearr_62886;
})();
var statearr_62887_62924 = state_62883__$1;
(statearr_62887_62924[(2)] = null);

(statearr_62887_62924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (1))){
var state_62883__$1 = state_62883;
var statearr_62888_62925 = state_62883__$1;
(statearr_62888_62925[(2)] = null);

(statearr_62888_62925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (4))){
var inst_62824 = (state_62883[(13)]);
var inst_62824__$1 = (state_62883[(2)]);
var inst_62825 = (inst_62824__$1 == null);
var state_62883__$1 = (function (){var statearr_62889 = state_62883;
(statearr_62889[(13)] = inst_62824__$1);

return statearr_62889;
})();
if(cljs.core.truth_(inst_62825)){
var statearr_62890_62926 = state_62883__$1;
(statearr_62890_62926[(1)] = (5));

} else {
var statearr_62891_62927 = state_62883__$1;
(statearr_62891_62927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (15))){
var state_62883__$1 = state_62883;
var statearr_62895_62928 = state_62883__$1;
(statearr_62895_62928[(2)] = null);

(statearr_62895_62928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (21))){
var state_62883__$1 = state_62883;
var statearr_62896_62929 = state_62883__$1;
(statearr_62896_62929[(2)] = null);

(statearr_62896_62929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (13))){
var inst_62838 = (state_62883[(8)]);
var inst_62837 = (state_62883[(9)]);
var inst_62835 = (state_62883[(10)]);
var inst_62836 = (state_62883[(12)]);
var inst_62845 = (state_62883[(2)]);
var inst_62846 = (inst_62838 + (1));
var tmp62892 = inst_62837;
var tmp62893 = inst_62835;
var tmp62894 = inst_62836;
var inst_62835__$1 = tmp62893;
var inst_62836__$1 = tmp62894;
var inst_62837__$1 = tmp62892;
var inst_62838__$1 = inst_62846;
var state_62883__$1 = (function (){var statearr_62897 = state_62883;
(statearr_62897[(8)] = inst_62838__$1);

(statearr_62897[(9)] = inst_62837__$1);

(statearr_62897[(10)] = inst_62835__$1);

(statearr_62897[(12)] = inst_62836__$1);

(statearr_62897[(14)] = inst_62845);

return statearr_62897;
})();
var statearr_62898_62930 = state_62883__$1;
(statearr_62898_62930[(2)] = null);

(statearr_62898_62930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (22))){
var state_62883__$1 = state_62883;
var statearr_62899_62931 = state_62883__$1;
(statearr_62899_62931[(2)] = null);

(statearr_62899_62931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (6))){
var inst_62824 = (state_62883[(13)]);
var inst_62833 = f.call(null,inst_62824);
var inst_62834 = cljs.core.seq.call(null,inst_62833);
var inst_62835 = inst_62834;
var inst_62836 = null;
var inst_62837 = (0);
var inst_62838 = (0);
var state_62883__$1 = (function (){var statearr_62900 = state_62883;
(statearr_62900[(8)] = inst_62838);

(statearr_62900[(9)] = inst_62837);

(statearr_62900[(10)] = inst_62835);

(statearr_62900[(12)] = inst_62836);

return statearr_62900;
})();
var statearr_62901_62932 = state_62883__$1;
(statearr_62901_62932[(2)] = null);

(statearr_62901_62932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (17))){
var inst_62849 = (state_62883[(7)]);
var inst_62853 = cljs.core.chunk_first.call(null,inst_62849);
var inst_62854 = cljs.core.chunk_rest.call(null,inst_62849);
var inst_62855 = cljs.core.count.call(null,inst_62853);
var inst_62835 = inst_62854;
var inst_62836 = inst_62853;
var inst_62837 = inst_62855;
var inst_62838 = (0);
var state_62883__$1 = (function (){var statearr_62902 = state_62883;
(statearr_62902[(8)] = inst_62838);

(statearr_62902[(9)] = inst_62837);

(statearr_62902[(10)] = inst_62835);

(statearr_62902[(12)] = inst_62836);

return statearr_62902;
})();
var statearr_62903_62933 = state_62883__$1;
(statearr_62903_62933[(2)] = null);

(statearr_62903_62933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (3))){
var inst_62881 = (state_62883[(2)]);
var state_62883__$1 = state_62883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62883__$1,inst_62881);
} else {
if((state_val_62884 === (12))){
var inst_62869 = (state_62883[(2)]);
var state_62883__$1 = state_62883;
var statearr_62904_62934 = state_62883__$1;
(statearr_62904_62934[(2)] = inst_62869);

(statearr_62904_62934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (2))){
var state_62883__$1 = state_62883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62883__$1,(4),in$);
} else {
if((state_val_62884 === (23))){
var inst_62877 = (state_62883[(2)]);
var state_62883__$1 = state_62883;
var statearr_62905_62935 = state_62883__$1;
(statearr_62905_62935[(2)] = inst_62877);

(statearr_62905_62935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (19))){
var inst_62864 = (state_62883[(2)]);
var state_62883__$1 = state_62883;
var statearr_62906_62936 = state_62883__$1;
(statearr_62906_62936[(2)] = inst_62864);

(statearr_62906_62936[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (11))){
var inst_62835 = (state_62883[(10)]);
var inst_62849 = (state_62883[(7)]);
var inst_62849__$1 = cljs.core.seq.call(null,inst_62835);
var state_62883__$1 = (function (){var statearr_62907 = state_62883;
(statearr_62907[(7)] = inst_62849__$1);

return statearr_62907;
})();
if(inst_62849__$1){
var statearr_62908_62937 = state_62883__$1;
(statearr_62908_62937[(1)] = (14));

} else {
var statearr_62909_62938 = state_62883__$1;
(statearr_62909_62938[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (9))){
var inst_62871 = (state_62883[(2)]);
var inst_62872 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_62883__$1 = (function (){var statearr_62910 = state_62883;
(statearr_62910[(15)] = inst_62871);

return statearr_62910;
})();
if(cljs.core.truth_(inst_62872)){
var statearr_62911_62939 = state_62883__$1;
(statearr_62911_62939[(1)] = (21));

} else {
var statearr_62912_62940 = state_62883__$1;
(statearr_62912_62940[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (5))){
var inst_62827 = cljs.core.async.close_BANG_.call(null,out);
var state_62883__$1 = state_62883;
var statearr_62913_62941 = state_62883__$1;
(statearr_62913_62941[(2)] = inst_62827);

(statearr_62913_62941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (14))){
var inst_62849 = (state_62883[(7)]);
var inst_62851 = cljs.core.chunked_seq_QMARK_.call(null,inst_62849);
var state_62883__$1 = state_62883;
if(inst_62851){
var statearr_62914_62942 = state_62883__$1;
(statearr_62914_62942[(1)] = (17));

} else {
var statearr_62915_62943 = state_62883__$1;
(statearr_62915_62943[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (16))){
var inst_62867 = (state_62883[(2)]);
var state_62883__$1 = state_62883;
var statearr_62916_62944 = state_62883__$1;
(statearr_62916_62944[(2)] = inst_62867);

(statearr_62916_62944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62884 === (10))){
var inst_62838 = (state_62883[(8)]);
var inst_62836 = (state_62883[(12)]);
var inst_62843 = cljs.core._nth.call(null,inst_62836,inst_62838);
var state_62883__$1 = state_62883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62883__$1,(13),out,inst_62843);
} else {
if((state_val_62884 === (18))){
var inst_62849 = (state_62883[(7)]);
var inst_62858 = cljs.core.first.call(null,inst_62849);
var state_62883__$1 = state_62883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62883__$1,(20),out,inst_62858);
} else {
if((state_val_62884 === (8))){
var inst_62838 = (state_62883[(8)]);
var inst_62837 = (state_62883[(9)]);
var inst_62840 = (inst_62838 < inst_62837);
var inst_62841 = inst_62840;
var state_62883__$1 = state_62883;
if(cljs.core.truth_(inst_62841)){
var statearr_62917_62945 = state_62883__$1;
(statearr_62917_62945[(1)] = (10));

} else {
var statearr_62918_62946 = state_62883__$1;
(statearr_62918_62946[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto__))
;
return ((function (switch__47292__auto__,c__47313__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47293__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47293__auto____0 = (function (){
var statearr_62919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62919[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47293__auto__);

(statearr_62919[(1)] = (1));

return statearr_62919;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47293__auto____1 = (function (state_62883){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62920){if((e62920 instanceof Object)){
var ex__47296__auto__ = e62920;
var statearr_62921_62947 = state_62883;
(statearr_62921_62947[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62948 = state_62883;
state_62883 = G__62948;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47293__auto__ = function(state_62883){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47293__auto____1.call(this,state_62883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47293__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47293__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__))
})();
var state__47315__auto__ = (function (){var statearr_62922 = f__47314__auto__.call(null);
(statearr_62922[(6)] = c__47313__auto__);

return statearr_62922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__))
);

return c__47313__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62950 = arguments.length;
switch (G__62950) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__62953 = arguments.length;
switch (G__62953) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__62956 = arguments.length;
switch (G__62956) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47313__auto___63003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___63003,out){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___63003,out){
return (function (state_62980){
var state_val_62981 = (state_62980[(1)]);
if((state_val_62981 === (7))){
var inst_62975 = (state_62980[(2)]);
var state_62980__$1 = state_62980;
var statearr_62982_63004 = state_62980__$1;
(statearr_62982_63004[(2)] = inst_62975);

(statearr_62982_63004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62981 === (1))){
var inst_62957 = null;
var state_62980__$1 = (function (){var statearr_62983 = state_62980;
(statearr_62983[(7)] = inst_62957);

return statearr_62983;
})();
var statearr_62984_63005 = state_62980__$1;
(statearr_62984_63005[(2)] = null);

(statearr_62984_63005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62981 === (4))){
var inst_62960 = (state_62980[(8)]);
var inst_62960__$1 = (state_62980[(2)]);
var inst_62961 = (inst_62960__$1 == null);
var inst_62962 = cljs.core.not.call(null,inst_62961);
var state_62980__$1 = (function (){var statearr_62985 = state_62980;
(statearr_62985[(8)] = inst_62960__$1);

return statearr_62985;
})();
if(inst_62962){
var statearr_62986_63006 = state_62980__$1;
(statearr_62986_63006[(1)] = (5));

} else {
var statearr_62987_63007 = state_62980__$1;
(statearr_62987_63007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62981 === (6))){
var state_62980__$1 = state_62980;
var statearr_62988_63008 = state_62980__$1;
(statearr_62988_63008[(2)] = null);

(statearr_62988_63008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62981 === (3))){
var inst_62977 = (state_62980[(2)]);
var inst_62978 = cljs.core.async.close_BANG_.call(null,out);
var state_62980__$1 = (function (){var statearr_62989 = state_62980;
(statearr_62989[(9)] = inst_62977);

return statearr_62989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62980__$1,inst_62978);
} else {
if((state_val_62981 === (2))){
var state_62980__$1 = state_62980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62980__$1,(4),ch);
} else {
if((state_val_62981 === (11))){
var inst_62960 = (state_62980[(8)]);
var inst_62969 = (state_62980[(2)]);
var inst_62957 = inst_62960;
var state_62980__$1 = (function (){var statearr_62990 = state_62980;
(statearr_62990[(10)] = inst_62969);

(statearr_62990[(7)] = inst_62957);

return statearr_62990;
})();
var statearr_62991_63009 = state_62980__$1;
(statearr_62991_63009[(2)] = null);

(statearr_62991_63009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62981 === (9))){
var inst_62960 = (state_62980[(8)]);
var state_62980__$1 = state_62980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62980__$1,(11),out,inst_62960);
} else {
if((state_val_62981 === (5))){
var inst_62960 = (state_62980[(8)]);
var inst_62957 = (state_62980[(7)]);
var inst_62964 = cljs.core._EQ_.call(null,inst_62960,inst_62957);
var state_62980__$1 = state_62980;
if(inst_62964){
var statearr_62993_63010 = state_62980__$1;
(statearr_62993_63010[(1)] = (8));

} else {
var statearr_62994_63011 = state_62980__$1;
(statearr_62994_63011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62981 === (10))){
var inst_62972 = (state_62980[(2)]);
var state_62980__$1 = state_62980;
var statearr_62995_63012 = state_62980__$1;
(statearr_62995_63012[(2)] = inst_62972);

(statearr_62995_63012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62981 === (8))){
var inst_62957 = (state_62980[(7)]);
var tmp62992 = inst_62957;
var inst_62957__$1 = tmp62992;
var state_62980__$1 = (function (){var statearr_62996 = state_62980;
(statearr_62996[(7)] = inst_62957__$1);

return statearr_62996;
})();
var statearr_62997_63013 = state_62980__$1;
(statearr_62997_63013[(2)] = null);

(statearr_62997_63013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___63003,out))
;
return ((function (switch__47292__auto__,c__47313__auto___63003,out){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_62998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62998[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_62998[(1)] = (1));

return statearr_62998;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_62980){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_62980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e62999){if((e62999 instanceof Object)){
var ex__47296__auto__ = e62999;
var statearr_63000_63014 = state_62980;
(statearr_63000_63014[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63015 = state_62980;
state_62980 = G__63015;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_62980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_62980);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___63003,out))
})();
var state__47315__auto__ = (function (){var statearr_63001 = f__47314__auto__.call(null);
(statearr_63001[(6)] = c__47313__auto___63003);

return statearr_63001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___63003,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63017 = arguments.length;
switch (G__63017) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47313__auto___63083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___63083,out){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___63083,out){
return (function (state_63055){
var state_val_63056 = (state_63055[(1)]);
if((state_val_63056 === (7))){
var inst_63051 = (state_63055[(2)]);
var state_63055__$1 = state_63055;
var statearr_63057_63084 = state_63055__$1;
(statearr_63057_63084[(2)] = inst_63051);

(statearr_63057_63084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (1))){
var inst_63018 = (new Array(n));
var inst_63019 = inst_63018;
var inst_63020 = (0);
var state_63055__$1 = (function (){var statearr_63058 = state_63055;
(statearr_63058[(7)] = inst_63020);

(statearr_63058[(8)] = inst_63019);

return statearr_63058;
})();
var statearr_63059_63085 = state_63055__$1;
(statearr_63059_63085[(2)] = null);

(statearr_63059_63085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (4))){
var inst_63023 = (state_63055[(9)]);
var inst_63023__$1 = (state_63055[(2)]);
var inst_63024 = (inst_63023__$1 == null);
var inst_63025 = cljs.core.not.call(null,inst_63024);
var state_63055__$1 = (function (){var statearr_63060 = state_63055;
(statearr_63060[(9)] = inst_63023__$1);

return statearr_63060;
})();
if(inst_63025){
var statearr_63061_63086 = state_63055__$1;
(statearr_63061_63086[(1)] = (5));

} else {
var statearr_63062_63087 = state_63055__$1;
(statearr_63062_63087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (15))){
var inst_63045 = (state_63055[(2)]);
var state_63055__$1 = state_63055;
var statearr_63063_63088 = state_63055__$1;
(statearr_63063_63088[(2)] = inst_63045);

(statearr_63063_63088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (13))){
var state_63055__$1 = state_63055;
var statearr_63064_63089 = state_63055__$1;
(statearr_63064_63089[(2)] = null);

(statearr_63064_63089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (6))){
var inst_63020 = (state_63055[(7)]);
var inst_63041 = (inst_63020 > (0));
var state_63055__$1 = state_63055;
if(cljs.core.truth_(inst_63041)){
var statearr_63065_63090 = state_63055__$1;
(statearr_63065_63090[(1)] = (12));

} else {
var statearr_63066_63091 = state_63055__$1;
(statearr_63066_63091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (3))){
var inst_63053 = (state_63055[(2)]);
var state_63055__$1 = state_63055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63055__$1,inst_63053);
} else {
if((state_val_63056 === (12))){
var inst_63019 = (state_63055[(8)]);
var inst_63043 = cljs.core.vec.call(null,inst_63019);
var state_63055__$1 = state_63055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63055__$1,(15),out,inst_63043);
} else {
if((state_val_63056 === (2))){
var state_63055__$1 = state_63055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63055__$1,(4),ch);
} else {
if((state_val_63056 === (11))){
var inst_63035 = (state_63055[(2)]);
var inst_63036 = (new Array(n));
var inst_63019 = inst_63036;
var inst_63020 = (0);
var state_63055__$1 = (function (){var statearr_63067 = state_63055;
(statearr_63067[(7)] = inst_63020);

(statearr_63067[(10)] = inst_63035);

(statearr_63067[(8)] = inst_63019);

return statearr_63067;
})();
var statearr_63068_63092 = state_63055__$1;
(statearr_63068_63092[(2)] = null);

(statearr_63068_63092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (9))){
var inst_63019 = (state_63055[(8)]);
var inst_63033 = cljs.core.vec.call(null,inst_63019);
var state_63055__$1 = state_63055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63055__$1,(11),out,inst_63033);
} else {
if((state_val_63056 === (5))){
var inst_63023 = (state_63055[(9)]);
var inst_63020 = (state_63055[(7)]);
var inst_63028 = (state_63055[(11)]);
var inst_63019 = (state_63055[(8)]);
var inst_63027 = (inst_63019[inst_63020] = inst_63023);
var inst_63028__$1 = (inst_63020 + (1));
var inst_63029 = (inst_63028__$1 < n);
var state_63055__$1 = (function (){var statearr_63069 = state_63055;
(statearr_63069[(12)] = inst_63027);

(statearr_63069[(11)] = inst_63028__$1);

return statearr_63069;
})();
if(cljs.core.truth_(inst_63029)){
var statearr_63070_63093 = state_63055__$1;
(statearr_63070_63093[(1)] = (8));

} else {
var statearr_63071_63094 = state_63055__$1;
(statearr_63071_63094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (14))){
var inst_63048 = (state_63055[(2)]);
var inst_63049 = cljs.core.async.close_BANG_.call(null,out);
var state_63055__$1 = (function (){var statearr_63073 = state_63055;
(statearr_63073[(13)] = inst_63048);

return statearr_63073;
})();
var statearr_63074_63095 = state_63055__$1;
(statearr_63074_63095[(2)] = inst_63049);

(statearr_63074_63095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (10))){
var inst_63039 = (state_63055[(2)]);
var state_63055__$1 = state_63055;
var statearr_63075_63096 = state_63055__$1;
(statearr_63075_63096[(2)] = inst_63039);

(statearr_63075_63096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63056 === (8))){
var inst_63028 = (state_63055[(11)]);
var inst_63019 = (state_63055[(8)]);
var tmp63072 = inst_63019;
var inst_63019__$1 = tmp63072;
var inst_63020 = inst_63028;
var state_63055__$1 = (function (){var statearr_63076 = state_63055;
(statearr_63076[(7)] = inst_63020);

(statearr_63076[(8)] = inst_63019__$1);

return statearr_63076;
})();
var statearr_63077_63097 = state_63055__$1;
(statearr_63077_63097[(2)] = null);

(statearr_63077_63097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___63083,out))
;
return ((function (switch__47292__auto__,c__47313__auto___63083,out){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_63078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63078[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_63078[(1)] = (1));

return statearr_63078;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_63055){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_63055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e63079){if((e63079 instanceof Object)){
var ex__47296__auto__ = e63079;
var statearr_63080_63098 = state_63055;
(statearr_63080_63098[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63099 = state_63055;
state_63055 = G__63099;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_63055){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_63055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___63083,out))
})();
var state__47315__auto__ = (function (){var statearr_63081 = f__47314__auto__.call(null);
(statearr_63081[(6)] = c__47313__auto___63083);

return statearr_63081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___63083,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__63101 = arguments.length;
switch (G__63101) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__47313__auto___63171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___63171,out){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___63171,out){
return (function (state_63143){
var state_val_63144 = (state_63143[(1)]);
if((state_val_63144 === (7))){
var inst_63139 = (state_63143[(2)]);
var state_63143__$1 = state_63143;
var statearr_63145_63172 = state_63143__$1;
(statearr_63145_63172[(2)] = inst_63139);

(statearr_63145_63172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (1))){
var inst_63102 = [];
var inst_63103 = inst_63102;
var inst_63104 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63143__$1 = (function (){var statearr_63146 = state_63143;
(statearr_63146[(7)] = inst_63103);

(statearr_63146[(8)] = inst_63104);

return statearr_63146;
})();
var statearr_63147_63173 = state_63143__$1;
(statearr_63147_63173[(2)] = null);

(statearr_63147_63173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (4))){
var inst_63107 = (state_63143[(9)]);
var inst_63107__$1 = (state_63143[(2)]);
var inst_63108 = (inst_63107__$1 == null);
var inst_63109 = cljs.core.not.call(null,inst_63108);
var state_63143__$1 = (function (){var statearr_63148 = state_63143;
(statearr_63148[(9)] = inst_63107__$1);

return statearr_63148;
})();
if(inst_63109){
var statearr_63149_63174 = state_63143__$1;
(statearr_63149_63174[(1)] = (5));

} else {
var statearr_63150_63175 = state_63143__$1;
(statearr_63150_63175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (15))){
var inst_63133 = (state_63143[(2)]);
var state_63143__$1 = state_63143;
var statearr_63151_63176 = state_63143__$1;
(statearr_63151_63176[(2)] = inst_63133);

(statearr_63151_63176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (13))){
var state_63143__$1 = state_63143;
var statearr_63152_63177 = state_63143__$1;
(statearr_63152_63177[(2)] = null);

(statearr_63152_63177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (6))){
var inst_63103 = (state_63143[(7)]);
var inst_63128 = inst_63103.length;
var inst_63129 = (inst_63128 > (0));
var state_63143__$1 = state_63143;
if(cljs.core.truth_(inst_63129)){
var statearr_63153_63178 = state_63143__$1;
(statearr_63153_63178[(1)] = (12));

} else {
var statearr_63154_63179 = state_63143__$1;
(statearr_63154_63179[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (3))){
var inst_63141 = (state_63143[(2)]);
var state_63143__$1 = state_63143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63143__$1,inst_63141);
} else {
if((state_val_63144 === (12))){
var inst_63103 = (state_63143[(7)]);
var inst_63131 = cljs.core.vec.call(null,inst_63103);
var state_63143__$1 = state_63143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63143__$1,(15),out,inst_63131);
} else {
if((state_val_63144 === (2))){
var state_63143__$1 = state_63143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63143__$1,(4),ch);
} else {
if((state_val_63144 === (11))){
var inst_63107 = (state_63143[(9)]);
var inst_63111 = (state_63143[(10)]);
var inst_63121 = (state_63143[(2)]);
var inst_63122 = [];
var inst_63123 = inst_63122.push(inst_63107);
var inst_63103 = inst_63122;
var inst_63104 = inst_63111;
var state_63143__$1 = (function (){var statearr_63155 = state_63143;
(statearr_63155[(11)] = inst_63123);

(statearr_63155[(7)] = inst_63103);

(statearr_63155[(12)] = inst_63121);

(statearr_63155[(8)] = inst_63104);

return statearr_63155;
})();
var statearr_63156_63180 = state_63143__$1;
(statearr_63156_63180[(2)] = null);

(statearr_63156_63180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (9))){
var inst_63103 = (state_63143[(7)]);
var inst_63119 = cljs.core.vec.call(null,inst_63103);
var state_63143__$1 = state_63143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63143__$1,(11),out,inst_63119);
} else {
if((state_val_63144 === (5))){
var inst_63107 = (state_63143[(9)]);
var inst_63111 = (state_63143[(10)]);
var inst_63104 = (state_63143[(8)]);
var inst_63111__$1 = f.call(null,inst_63107);
var inst_63112 = cljs.core._EQ_.call(null,inst_63111__$1,inst_63104);
var inst_63113 = cljs.core.keyword_identical_QMARK_.call(null,inst_63104,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_63114 = (inst_63112) || (inst_63113);
var state_63143__$1 = (function (){var statearr_63157 = state_63143;
(statearr_63157[(10)] = inst_63111__$1);

return statearr_63157;
})();
if(cljs.core.truth_(inst_63114)){
var statearr_63158_63181 = state_63143__$1;
(statearr_63158_63181[(1)] = (8));

} else {
var statearr_63159_63182 = state_63143__$1;
(statearr_63159_63182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (14))){
var inst_63136 = (state_63143[(2)]);
var inst_63137 = cljs.core.async.close_BANG_.call(null,out);
var state_63143__$1 = (function (){var statearr_63161 = state_63143;
(statearr_63161[(13)] = inst_63136);

return statearr_63161;
})();
var statearr_63162_63183 = state_63143__$1;
(statearr_63162_63183[(2)] = inst_63137);

(statearr_63162_63183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (10))){
var inst_63126 = (state_63143[(2)]);
var state_63143__$1 = state_63143;
var statearr_63163_63184 = state_63143__$1;
(statearr_63163_63184[(2)] = inst_63126);

(statearr_63163_63184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63144 === (8))){
var inst_63107 = (state_63143[(9)]);
var inst_63111 = (state_63143[(10)]);
var inst_63103 = (state_63143[(7)]);
var inst_63116 = inst_63103.push(inst_63107);
var tmp63160 = inst_63103;
var inst_63103__$1 = tmp63160;
var inst_63104 = inst_63111;
var state_63143__$1 = (function (){var statearr_63164 = state_63143;
(statearr_63164[(14)] = inst_63116);

(statearr_63164[(7)] = inst_63103__$1);

(statearr_63164[(8)] = inst_63104);

return statearr_63164;
})();
var statearr_63165_63185 = state_63143__$1;
(statearr_63165_63185[(2)] = null);

(statearr_63165_63185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__47313__auto___63171,out))
;
return ((function (switch__47292__auto__,c__47313__auto___63171,out){
return (function() {
var cljs$core$async$state_machine__47293__auto__ = null;
var cljs$core$async$state_machine__47293__auto____0 = (function (){
var statearr_63166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63166[(0)] = cljs$core$async$state_machine__47293__auto__);

(statearr_63166[(1)] = (1));

return statearr_63166;
});
var cljs$core$async$state_machine__47293__auto____1 = (function (state_63143){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_63143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e63167){if((e63167 instanceof Object)){
var ex__47296__auto__ = e63167;
var statearr_63168_63186 = state_63143;
(statearr_63168_63186[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63187 = state_63143;
state_63143 = G__63187;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
cljs$core$async$state_machine__47293__auto__ = function(state_63143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47293__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47293__auto____1.call(this,state_63143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47293__auto____0;
cljs$core$async$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47293__auto____1;
return cljs$core$async$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___63171,out))
})();
var state__47315__auto__ = (function (){var statearr_63169 = f__47314__auto__.call(null);
(statearr_63169[(6)] = c__47313__auto___63171);

return statearr_63169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___63171,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1510936793113
