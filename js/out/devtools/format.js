// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8351__auto__ = (((value == null))?null:value);
var m__8352__auto__ = (devtools.format._header[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,value);
} else {
var m__8352__auto____$1 = (devtools.format._header["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8351__auto__ = (((value == null))?null:value);
var m__8352__auto__ = (devtools.format._has_body[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,value);
} else {
var m__8352__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8351__auto__ = (((value == null))?null:value);
var m__8352__auto__ = (devtools.format._body[goog.typeOf(x__8351__auto__)]);
if(!((m__8352__auto__ == null))){
return m__8352__auto__.call(null,value);
} else {
var m__8352__auto____$1 = (devtools.format._body["_"]);
if(!((m__8352__auto____$1 == null))){
return m__8352__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9410 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9410["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9411 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9411["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9412 = temp__4655__auto____$2;
return (o9412["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9413 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9413["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9414 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9414["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9415 = temp__4655__auto____$2;
return (o9415["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9416 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9416["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9417 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9417["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9418 = temp__4655__auto____$2;
return (o9418["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9419 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9419["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9420 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9420["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9421 = temp__4655__auto____$2;
return (o9421["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9422 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9422["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9423 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9423["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9424 = temp__4655__auto____$2;
return (o9424["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9425 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9425["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9426 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9426["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9427 = temp__4655__auto____$2;
return (o9427["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o9428 = temp__4655__auto__;
var temp__4655__auto____$1 = (o9428["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o9429 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o9429["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o9430 = temp__4655__auto____$2;
return (o9430["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9432 = arguments.length;
var i__8840__auto___9433 = (0);
while(true){
if((i__8840__auto___9433 < len__8839__auto___9432)){
args__8846__auto__.push((arguments[i__8840__auto___9433]));

var G__9434 = (i__8840__auto___9433 + (1));
i__8840__auto___9433 = G__9434;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq9431){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9431));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9436 = arguments.length;
var i__8840__auto___9437 = (0);
while(true){
if((i__8840__auto___9437 < len__8839__auto___9436)){
args__8846__auto__.push((arguments[i__8840__auto___9437]));

var G__9438 = (i__8840__auto___9437 + (1));
i__8840__auto___9437 = G__9438;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq9435){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9435));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9440 = arguments.length;
var i__8840__auto___9441 = (0);
while(true){
if((i__8840__auto___9441 < len__8839__auto___9440)){
args__8846__auto__.push((arguments[i__8840__auto___9441]));

var G__9442 = (i__8840__auto___9441 + (1));
i__8840__auto___9441 = G__9442;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq9439){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9439));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9444 = arguments.length;
var i__8840__auto___9445 = (0);
while(true){
if((i__8840__auto___9445 < len__8839__auto___9444)){
args__8846__auto__.push((arguments[i__8840__auto___9445]));

var G__9446 = (i__8840__auto___9445 + (1));
i__8840__auto___9445 = G__9446;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq9443){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9443));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9448 = arguments.length;
var i__8840__auto___9449 = (0);
while(true){
if((i__8840__auto___9449 < len__8839__auto___9448)){
args__8846__auto__.push((arguments[i__8840__auto___9449]));

var G__9450 = (i__8840__auto___9449 + (1));
i__8840__auto___9449 = G__9450;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq9447){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9447));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9452 = arguments.length;
var i__8840__auto___9453 = (0);
while(true){
if((i__8840__auto___9453 < len__8839__auto___9452)){
args__8846__auto__.push((arguments[i__8840__auto___9453]));

var G__9454 = (i__8840__auto___9453 + (1));
i__8840__auto___9453 = G__9454;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq9451){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9451));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9456 = arguments.length;
var i__8840__auto___9457 = (0);
while(true){
if((i__8840__auto___9457 < len__8839__auto___9456)){
args__8846__auto__.push((arguments[i__8840__auto___9457]));

var G__9458 = (i__8840__auto___9457 + (1));
i__8840__auto___9457 = G__9458;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq9455){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9455));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9466 = arguments.length;
var i__8840__auto___9467 = (0);
while(true){
if((i__8840__auto___9467 < len__8839__auto___9466)){
args__8846__auto__.push((arguments[i__8840__auto___9467]));

var G__9468 = (i__8840__auto___9467 + (1));
i__8840__auto___9467 = G__9468;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__9462){
var vec__9463 = p__9462;
var state_override = cljs.core.nth.call(null,vec__9463,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__9463,state_override){
return (function (p1__9459_SHARP_){
return cljs.core.merge.call(null,p1__9459_SHARP_,state_override);
});})(vec__9463,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq9460){
var G__9461 = cljs.core.first.call(null,seq9460);
var seq9460__$1 = cljs.core.next.call(null,seq9460);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__9461,seq9460__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9470 = arguments.length;
var i__8840__auto___9471 = (0);
while(true){
if((i__8840__auto___9471 < len__8839__auto___9470)){
args__8846__auto__.push((arguments[i__8840__auto___9471]));

var G__9472 = (i__8840__auto___9471 + (1));
i__8840__auto___9471 = G__9472;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq9469){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9469));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___9475 = arguments.length;
var i__8840__auto___9476 = (0);
while(true){
if((i__8840__auto___9476 < len__8839__auto___9475)){
args__8846__auto__.push((arguments[i__8840__auto___9476]));

var G__9477 = (i__8840__auto___9476 + (1));
i__8840__auto___9476 = G__9477;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq9473){
var G__9474 = cljs.core.first.call(null,seq9473);
var seq9473__$1 = cljs.core.next.call(null,seq9473);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__9474,seq9473__$1);
});


//# sourceMappingURL=format.js.map
