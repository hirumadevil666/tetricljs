// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x60603_60604 = value;
x60603_60604.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x60606_60607 = value;
x60606_60607.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x60609_60610 = value;
x60609_60610.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__44009__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__44009__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__44009__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__45199__auto__ = [];
var len__45192__auto___60617 = arguments.length;
var i__45193__auto___60618 = (0);
while(true){
if((i__45193__auto___60618 < len__45192__auto___60617)){
args__45199__auto__.push((arguments[i__45193__auto___60618]));

var G__60619 = (i__45193__auto___60618 + (1));
i__45193__auto___60618 = G__60619;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__60613_60620 = cljs.core.seq.call(null,items);
var chunk__60614_60621 = null;
var count__60615_60622 = (0);
var i__60616_60623 = (0);
while(true){
if((i__60616_60623 < count__60615_60622)){
var item_60624 = cljs.core._nth.call(null,chunk__60614_60621,i__60616_60623);
if(!((item_60624 == null))){
if(cljs.core.coll_QMARK_.call(null,item_60624)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_60624)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_60624));
}
} else {
}

var G__60625 = seq__60613_60620;
var G__60626 = chunk__60614_60621;
var G__60627 = count__60615_60622;
var G__60628 = (i__60616_60623 + (1));
seq__60613_60620 = G__60625;
chunk__60614_60621 = G__60626;
count__60615_60622 = G__60627;
i__60616_60623 = G__60628;
continue;
} else {
var temp__4657__auto___60629 = cljs.core.seq.call(null,seq__60613_60620);
if(temp__4657__auto___60629){
var seq__60613_60630__$1 = temp__4657__auto___60629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60613_60630__$1)){
var c__44860__auto___60631 = cljs.core.chunk_first.call(null,seq__60613_60630__$1);
var G__60632 = cljs.core.chunk_rest.call(null,seq__60613_60630__$1);
var G__60633 = c__44860__auto___60631;
var G__60634 = cljs.core.count.call(null,c__44860__auto___60631);
var G__60635 = (0);
seq__60613_60620 = G__60632;
chunk__60614_60621 = G__60633;
count__60615_60622 = G__60634;
i__60616_60623 = G__60635;
continue;
} else {
var item_60636 = cljs.core.first.call(null,seq__60613_60630__$1);
if(!((item_60636 == null))){
if(cljs.core.coll_QMARK_.call(null,item_60636)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_60636)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_60636));
}
} else {
}

var G__60637 = cljs.core.next.call(null,seq__60613_60630__$1);
var G__60638 = null;
var G__60639 = (0);
var G__60640 = (0);
seq__60613_60620 = G__60637;
chunk__60614_60621 = G__60638;
count__60615_60622 = G__60639;
i__60616_60623 = G__60640;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq60612){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60612));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__45199__auto__ = [];
var len__45192__auto___60648 = arguments.length;
var i__45193__auto___60649 = (0);
while(true){
if((i__45193__auto___60649 < len__45192__auto___60648)){
args__45199__auto__.push((arguments[i__45193__auto___60649]));

var G__60650 = (i__45193__auto___60649 + (1));
i__45193__auto___60649 = G__60650;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((2) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45200__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__60644_60651 = cljs.core.seq.call(null,children);
var chunk__60645_60652 = null;
var count__60646_60653 = (0);
var i__60647_60654 = (0);
while(true){
if((i__60647_60654 < count__60646_60653)){
var child_60655 = cljs.core._nth.call(null,chunk__60645_60652,i__60647_60654);
if(!((child_60655 == null))){
if(cljs.core.coll_QMARK_.call(null,child_60655)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_60655))));
} else {
var temp__4655__auto___60656 = devtools.formatters.helpers.pref.call(null,child_60655);
if(cljs.core.truth_(temp__4655__auto___60656)){
var child_value_60657 = temp__4655__auto___60656;
template.push(child_value_60657);
} else {
}
}
} else {
}

var G__60658 = seq__60644_60651;
var G__60659 = chunk__60645_60652;
var G__60660 = count__60646_60653;
var G__60661 = (i__60647_60654 + (1));
seq__60644_60651 = G__60658;
chunk__60645_60652 = G__60659;
count__60646_60653 = G__60660;
i__60647_60654 = G__60661;
continue;
} else {
var temp__4657__auto___60662 = cljs.core.seq.call(null,seq__60644_60651);
if(temp__4657__auto___60662){
var seq__60644_60663__$1 = temp__4657__auto___60662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60644_60663__$1)){
var c__44860__auto___60664 = cljs.core.chunk_first.call(null,seq__60644_60663__$1);
var G__60665 = cljs.core.chunk_rest.call(null,seq__60644_60663__$1);
var G__60666 = c__44860__auto___60664;
var G__60667 = cljs.core.count.call(null,c__44860__auto___60664);
var G__60668 = (0);
seq__60644_60651 = G__60665;
chunk__60645_60652 = G__60666;
count__60646_60653 = G__60667;
i__60647_60654 = G__60668;
continue;
} else {
var child_60669 = cljs.core.first.call(null,seq__60644_60663__$1);
if(!((child_60669 == null))){
if(cljs.core.coll_QMARK_.call(null,child_60669)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_60669))));
} else {
var temp__4655__auto___60670 = devtools.formatters.helpers.pref.call(null,child_60669);
if(cljs.core.truth_(temp__4655__auto___60670)){
var child_value_60671 = temp__4655__auto___60670;
template.push(child_value_60671);
} else {
}
}
} else {
}

var G__60672 = cljs.core.next.call(null,seq__60644_60663__$1);
var G__60673 = null;
var G__60674 = (0);
var G__60675 = (0);
seq__60644_60651 = G__60672;
chunk__60645_60652 = G__60673;
count__60646_60653 = G__60674;
i__60647_60654 = G__60675;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq60641){
var G__60642 = cljs.core.first.call(null,seq60641);
var seq60641__$1 = cljs.core.next.call(null,seq60641);
var G__60643 = cljs.core.first.call(null,seq60641__$1);
var seq60641__$2 = cljs.core.next.call(null,seq60641__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__60642,G__60643,seq60641__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__45199__auto__ = [];
var len__45192__auto___60678 = arguments.length;
var i__45193__auto___60679 = (0);
while(true){
if((i__45193__auto___60679 < len__45192__auto___60678)){
args__45199__auto__.push((arguments[i__45193__auto___60679]));

var G__60680 = (i__45193__auto___60679 + (1));
i__45193__auto___60679 = G__60680;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((1) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45200__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq60676){
var G__60677 = cljs.core.first.call(null,seq60676);
var seq60676__$1 = cljs.core.next.call(null,seq60676);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60677,seq60676__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__45199__auto__ = [];
var len__45192__auto___60683 = arguments.length;
var i__45193__auto___60684 = (0);
while(true){
if((i__45193__auto___60684 < len__45192__auto___60683)){
args__45199__auto__.push((arguments[i__45193__auto___60684]));

var G__60685 = (i__45193__auto___60684 + (1));
i__45193__auto___60684 = G__60685;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((1) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45200__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq60681){
var G__60682 = cljs.core.first.call(null,seq60681);
var seq60681__$1 = cljs.core.next.call(null,seq60681);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60682,seq60681__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__60687 = arguments.length;
switch (G__60687) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj60689 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__44021__auto__ = start_index;
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return (0);
}
})()};
return obj60689;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__45199__auto__ = [];
var len__45192__auto___60697 = arguments.length;
var i__45193__auto___60698 = (0);
while(true){
if((i__45193__auto___60698 < len__45192__auto___60697)){
args__45199__auto__.push((arguments[i__45193__auto___60698]));

var G__60699 = (i__45193__auto___60698 + (1));
i__45193__auto___60698 = G__60699;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((1) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45200__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__60693){
var vec__60694 = p__60693;
var state_override_fn = cljs.core.nth.call(null,vec__60694,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq60691){
var G__60692 = cljs.core.first.call(null,seq60691);
var seq60691__$1 = cljs.core.next.call(null,seq60691);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__60692,seq60691__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_60700 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_60700;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__60701 = name;
switch (G__60701) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__60703 = tag;
var html_tag = cljs.core.nth.call(null,vec__60703,(0),null);
var style = cljs.core.nth.call(null,vec__60703,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_60706 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_60706;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_60707 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_60708 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_60708;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_60707;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__60709 = initial_value;
var G__60710 = value.call(null);
initial_value = G__60709;
value = G__60710;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__60711 = initial_value;
var G__60712 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__60711;
value = G__60712;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__60713 = initial_value;
var G__60714 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__60713;
value = G__60714;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1510936790403
