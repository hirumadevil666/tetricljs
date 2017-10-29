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
var x__44704__auto__ = (((value == null))?null:value);
var m__44705__auto__ = (devtools.format._header[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,value);
} else {
var m__44705__auto____$1 = (devtools.format._header["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,value);
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
var x__44704__auto__ = (((value == null))?null:value);
var m__44705__auto__ = (devtools.format._has_body[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,value);
} else {
var m__44705__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,value);
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
var x__44704__auto__ = (((value == null))?null:value);
var m__44705__auto__ = (devtools.format._body[goog.typeOf(x__44704__auto__)]);
if(!((m__44705__auto__ == null))){
return m__44705__auto__.call(null,value);
} else {
var m__44705__auto____$1 = (devtools.format._body["_"]);
if(!((m__44705__auto____$1 == null))){
return m__44705__auto____$1.call(null,value);
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
var o59012 = temp__4655__auto__;
var temp__4655__auto____$1 = (o59012["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o59013 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o59013["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o59014 = temp__4655__auto____$2;
return (o59014["make_template"]);
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
var o59015 = temp__4655__auto__;
var temp__4655__auto____$1 = (o59015["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o59016 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o59016["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o59017 = temp__4655__auto____$2;
return (o59017["make_group"]);
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
var o59018 = temp__4655__auto__;
var temp__4655__auto____$1 = (o59018["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o59019 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o59019["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o59020 = temp__4655__auto____$2;
return (o59020["make_reference"]);
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
var o59021 = temp__4655__auto__;
var temp__4655__auto____$1 = (o59021["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o59022 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o59022["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o59023 = temp__4655__auto____$2;
return (o59023["make_surrogate"]);
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
var o59024 = temp__4655__auto__;
var temp__4655__auto____$1 = (o59024["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o59025 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o59025["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o59026 = temp__4655__auto____$2;
return (o59026["render_markup"]);
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
var o59027 = temp__4655__auto__;
var temp__4655__auto____$1 = (o59027["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o59028 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o59028["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o59029 = temp__4655__auto____$2;
return (o59029["_LT_header_GT_"]);
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
var o59030 = temp__4655__auto__;
var temp__4655__auto____$1 = (o59030["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o59031 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o59031["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o59032 = temp__4655__auto____$2;
return (o59032["_LT_standard_body_GT_"]);
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
var args__45199__auto__ = [];
var len__45192__auto___59034 = arguments.length;
var i__45193__auto___59035 = (0);
while(true){
if((i__45193__auto___59035 < len__45192__auto___59034)){
args__45199__auto__.push((arguments[i__45193__auto___59035]));

var G__59036 = (i__45193__auto___59035 + (1));
i__45193__auto___59035 = G__59036;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq59033){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59033));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59038 = arguments.length;
var i__45193__auto___59039 = (0);
while(true){
if((i__45193__auto___59039 < len__45192__auto___59038)){
args__45199__auto__.push((arguments[i__45193__auto___59039]));

var G__59040 = (i__45193__auto___59039 + (1));
i__45193__auto___59039 = G__59040;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq59037){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59037));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59042 = arguments.length;
var i__45193__auto___59043 = (0);
while(true){
if((i__45193__auto___59043 < len__45192__auto___59042)){
args__45199__auto__.push((arguments[i__45193__auto___59043]));

var G__59044 = (i__45193__auto___59043 + (1));
i__45193__auto___59043 = G__59044;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq59041){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59041));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59046 = arguments.length;
var i__45193__auto___59047 = (0);
while(true){
if((i__45193__auto___59047 < len__45192__auto___59046)){
args__45199__auto__.push((arguments[i__45193__auto___59047]));

var G__59048 = (i__45193__auto___59047 + (1));
i__45193__auto___59047 = G__59048;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq59045){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59045));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59050 = arguments.length;
var i__45193__auto___59051 = (0);
while(true){
if((i__45193__auto___59051 < len__45192__auto___59050)){
args__45199__auto__.push((arguments[i__45193__auto___59051]));

var G__59052 = (i__45193__auto___59051 + (1));
i__45193__auto___59051 = G__59052;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq59049){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59049));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59054 = arguments.length;
var i__45193__auto___59055 = (0);
while(true){
if((i__45193__auto___59055 < len__45192__auto___59054)){
args__45199__auto__.push((arguments[i__45193__auto___59055]));

var G__59056 = (i__45193__auto___59055 + (1));
i__45193__auto___59055 = G__59056;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq59053){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59053));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59058 = arguments.length;
var i__45193__auto___59059 = (0);
while(true){
if((i__45193__auto___59059 < len__45192__auto___59058)){
args__45199__auto__.push((arguments[i__45193__auto___59059]));

var G__59060 = (i__45193__auto___59059 + (1));
i__45193__auto___59059 = G__59060;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq59057){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59057));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59068 = arguments.length;
var i__45193__auto___59069 = (0);
while(true){
if((i__45193__auto___59069 < len__45192__auto___59068)){
args__45199__auto__.push((arguments[i__45193__auto___59069]));

var G__59070 = (i__45193__auto___59069 + (1));
i__45193__auto___59069 = G__59070;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((1) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45200__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__59064){
var vec__59065 = p__59064;
var state_override = cljs.core.nth.call(null,vec__59065,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__59065,state_override){
return (function (p1__59061_SHARP_){
return cljs.core.merge.call(null,p1__59061_SHARP_,state_override);
});})(vec__59065,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq59062){
var G__59063 = cljs.core.first.call(null,seq59062);
var seq59062__$1 = cljs.core.next.call(null,seq59062);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__59063,seq59062__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59072 = arguments.length;
var i__45193__auto___59073 = (0);
while(true){
if((i__45193__auto___59073 < len__45192__auto___59072)){
args__45199__auto__.push((arguments[i__45193__auto___59073]));

var G__59074 = (i__45193__auto___59073 + (1));
i__45193__auto___59073 = G__59074;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq59071){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59071));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__45199__auto__ = [];
var len__45192__auto___59077 = arguments.length;
var i__45193__auto___59078 = (0);
while(true){
if((i__45193__auto___59078 < len__45192__auto___59077)){
args__45199__auto__.push((arguments[i__45193__auto___59078]));

var G__59079 = (i__45193__auto___59078 + (1));
i__45193__auto___59078 = G__59079;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((1) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45200__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq59075){
var G__59076 = cljs.core.first.call(null,seq59075);
var seq59075__$1 = cljs.core.next.call(null,seq59075);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__59076,seq59075__$1);
});


//# sourceMappingURL=format.js.map?rel=1510936787363
