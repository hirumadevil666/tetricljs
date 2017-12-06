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
var x11686_11687 = value;
x11686_11687.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x11689_11690 = value;
x11689_11690.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x11692_11693 = value;
x11692_11693.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var and__7656__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__7656__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__7656__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__8846__auto__ = [];
var len__8839__auto___11700 = arguments.length;
var i__8840__auto___11701 = (0);
while(true){
if((i__8840__auto___11701 < len__8839__auto___11700)){
args__8846__auto__.push((arguments[i__8840__auto___11701]));

var G__11702 = (i__8840__auto___11701 + (1));
i__8840__auto___11701 = G__11702;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((0) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8847__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__11696_11703 = cljs.core.seq.call(null,items);
var chunk__11697_11704 = null;
var count__11698_11705 = (0);
var i__11699_11706 = (0);
while(true){
if((i__11699_11706 < count__11698_11705)){
var item_11707 = cljs.core._nth.call(null,chunk__11697_11704,i__11699_11706);
if(!((item_11707 == null))){
if(cljs.core.coll_QMARK_.call(null,item_11707)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_11707)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_11707));
}
} else {
}

var G__11708 = seq__11696_11703;
var G__11709 = chunk__11697_11704;
var G__11710 = count__11698_11705;
var G__11711 = (i__11699_11706 + (1));
seq__11696_11703 = G__11708;
chunk__11697_11704 = G__11709;
count__11698_11705 = G__11710;
i__11699_11706 = G__11711;
continue;
} else {
var temp__4657__auto___11712 = cljs.core.seq.call(null,seq__11696_11703);
if(temp__4657__auto___11712){
var seq__11696_11713__$1 = temp__4657__auto___11712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11696_11713__$1)){
var c__8507__auto___11714 = cljs.core.chunk_first.call(null,seq__11696_11713__$1);
var G__11715 = cljs.core.chunk_rest.call(null,seq__11696_11713__$1);
var G__11716 = c__8507__auto___11714;
var G__11717 = cljs.core.count.call(null,c__8507__auto___11714);
var G__11718 = (0);
seq__11696_11703 = G__11715;
chunk__11697_11704 = G__11716;
count__11698_11705 = G__11717;
i__11699_11706 = G__11718;
continue;
} else {
var item_11719 = cljs.core.first.call(null,seq__11696_11713__$1);
if(!((item_11719 == null))){
if(cljs.core.coll_QMARK_.call(null,item_11719)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_11719)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_11719));
}
} else {
}

var G__11720 = cljs.core.next.call(null,seq__11696_11713__$1);
var G__11721 = null;
var G__11722 = (0);
var G__11723 = (0);
seq__11696_11703 = G__11720;
chunk__11697_11704 = G__11721;
count__11698_11705 = G__11722;
i__11699_11706 = G__11723;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq11695){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11695));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__8846__auto__ = [];
var len__8839__auto___11731 = arguments.length;
var i__8840__auto___11732 = (0);
while(true){
if((i__8840__auto___11732 < len__8839__auto___11731)){
args__8846__auto__.push((arguments[i__8840__auto___11732]));

var G__11733 = (i__8840__auto___11732 + (1));
i__8840__auto___11732 = G__11733;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((2) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8847__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__11727_11734 = cljs.core.seq.call(null,children);
var chunk__11728_11735 = null;
var count__11729_11736 = (0);
var i__11730_11737 = (0);
while(true){
if((i__11730_11737 < count__11729_11736)){
var child_11738 = cljs.core._nth.call(null,chunk__11728_11735,i__11730_11737);
if(!((child_11738 == null))){
if(cljs.core.coll_QMARK_.call(null,child_11738)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_11738))));
} else {
var temp__4655__auto___11739 = devtools.formatters.helpers.pref.call(null,child_11738);
if(cljs.core.truth_(temp__4655__auto___11739)){
var child_value_11740 = temp__4655__auto___11739;
template.push(child_value_11740);
} else {
}
}
} else {
}

var G__11741 = seq__11727_11734;
var G__11742 = chunk__11728_11735;
var G__11743 = count__11729_11736;
var G__11744 = (i__11730_11737 + (1));
seq__11727_11734 = G__11741;
chunk__11728_11735 = G__11742;
count__11729_11736 = G__11743;
i__11730_11737 = G__11744;
continue;
} else {
var temp__4657__auto___11745 = cljs.core.seq.call(null,seq__11727_11734);
if(temp__4657__auto___11745){
var seq__11727_11746__$1 = temp__4657__auto___11745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11727_11746__$1)){
var c__8507__auto___11747 = cljs.core.chunk_first.call(null,seq__11727_11746__$1);
var G__11748 = cljs.core.chunk_rest.call(null,seq__11727_11746__$1);
var G__11749 = c__8507__auto___11747;
var G__11750 = cljs.core.count.call(null,c__8507__auto___11747);
var G__11751 = (0);
seq__11727_11734 = G__11748;
chunk__11728_11735 = G__11749;
count__11729_11736 = G__11750;
i__11730_11737 = G__11751;
continue;
} else {
var child_11752 = cljs.core.first.call(null,seq__11727_11746__$1);
if(!((child_11752 == null))){
if(cljs.core.coll_QMARK_.call(null,child_11752)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_11752))));
} else {
var temp__4655__auto___11753 = devtools.formatters.helpers.pref.call(null,child_11752);
if(cljs.core.truth_(temp__4655__auto___11753)){
var child_value_11754 = temp__4655__auto___11753;
template.push(child_value_11754);
} else {
}
}
} else {
}

var G__11755 = cljs.core.next.call(null,seq__11727_11746__$1);
var G__11756 = null;
var G__11757 = (0);
var G__11758 = (0);
seq__11727_11734 = G__11755;
chunk__11728_11735 = G__11756;
count__11729_11736 = G__11757;
i__11730_11737 = G__11758;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq11724){
var G__11725 = cljs.core.first.call(null,seq11724);
var seq11724__$1 = cljs.core.next.call(null,seq11724);
var G__11726 = cljs.core.first.call(null,seq11724__$1);
var seq11724__$2 = cljs.core.next.call(null,seq11724__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__11725,G__11726,seq11724__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___11761 = arguments.length;
var i__8840__auto___11762 = (0);
while(true){
if((i__8840__auto___11762 < len__8839__auto___11761)){
args__8846__auto__.push((arguments[i__8840__auto___11762]));

var G__11763 = (i__8840__auto___11762 + (1));
i__8840__auto___11762 = G__11763;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq11759){
var G__11760 = cljs.core.first.call(null,seq11759);
var seq11759__$1 = cljs.core.next.call(null,seq11759);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11760,seq11759__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__8846__auto__ = [];
var len__8839__auto___11766 = arguments.length;
var i__8840__auto___11767 = (0);
while(true){
if((i__8840__auto___11767 < len__8839__auto___11766)){
args__8846__auto__.push((arguments[i__8840__auto___11767]));

var G__11768 = (i__8840__auto___11767 + (1));
i__8840__auto___11767 = G__11768;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq11764){
var G__11765 = cljs.core.first.call(null,seq11764);
var seq11764__$1 = cljs.core.next.call(null,seq11764);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11765,seq11764__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__11770 = arguments.length;
switch (G__11770) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj11772 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__7668__auto__ = start_index;
if(cljs.core.truth_(or__7668__auto__)){
return or__7668__auto__;
} else {
return (0);
}
})()};
return obj11772;
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
var args__8846__auto__ = [];
var len__8839__auto___11780 = arguments.length;
var i__8840__auto___11781 = (0);
while(true){
if((i__8840__auto___11781 < len__8839__auto___11780)){
args__8846__auto__.push((arguments[i__8840__auto___11781]));

var G__11782 = (i__8840__auto___11781 + (1));
i__8840__auto___11781 = G__11782;
continue;
} else {
}
break;
}

var argseq__8847__auto__ = ((((1) < args__8846__auto__.length))?(new cljs.core.IndexedSeq(args__8846__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8847__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__11776){
var vec__11777 = p__11776;
var state_override_fn = cljs.core.nth.call(null,vec__11777,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq11774){
var G__11775 = cljs.core.first.call(null,seq11774);
var seq11774__$1 = cljs.core.next.call(null,seq11774);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__11775,seq11774__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_11783 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_11783;
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
var G__11784 = name;
switch (G__11784) {
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
var vec__11786 = tag;
var html_tag = cljs.core.nth.call(null,vec__11786,(0),null);
var style = cljs.core.nth.call(null,vec__11786,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_11789 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_11789;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_11790 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_11791 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_11791;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_11790;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__11792 = initial_value;
var G__11793 = value.call(null);
initial_value = G__11792;
value = G__11793;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__11794 = initial_value;
var G__11795 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__11794;
value = G__11795;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__11796 = initial_value;
var G__11797 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__11796;
value = G__11797;
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

//# sourceMappingURL=templating.js.map
