// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44021__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44021__auto__){
return or__44021__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44021__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
var or__44021__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__44021__auto____$1)){
return or__44021__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__63592_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__63592_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__63593 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__63594 = null;
var count__63595 = (0);
var i__63596 = (0);
while(true){
if((i__63596 < count__63595)){
var n = cljs.core._nth.call(null,chunk__63594,i__63596);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__63597 = seq__63593;
var G__63598 = chunk__63594;
var G__63599 = count__63595;
var G__63600 = (i__63596 + (1));
seq__63593 = G__63597;
chunk__63594 = G__63598;
count__63595 = G__63599;
i__63596 = G__63600;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63593);
if(temp__4657__auto__){
var seq__63593__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63593__$1)){
var c__44860__auto__ = cljs.core.chunk_first.call(null,seq__63593__$1);
var G__63601 = cljs.core.chunk_rest.call(null,seq__63593__$1);
var G__63602 = c__44860__auto__;
var G__63603 = cljs.core.count.call(null,c__44860__auto__);
var G__63604 = (0);
seq__63593 = G__63601;
chunk__63594 = G__63602;
count__63595 = G__63603;
i__63596 = G__63604;
continue;
} else {
var n = cljs.core.first.call(null,seq__63593__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__63605 = cljs.core.next.call(null,seq__63593__$1);
var G__63606 = null;
var G__63607 = (0);
var G__63608 = (0);
seq__63593 = G__63605;
chunk__63594 = G__63606;
count__63595 = G__63607;
i__63596 = G__63608;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__63609){
var vec__63610 = p__63609;
var _ = cljs.core.nth.call(null,vec__63610,(0),null);
var v = cljs.core.nth.call(null,vec__63610,(1),null);
var and__44009__auto__ = v;
if(cljs.core.truth_(and__44009__auto__)){
return v.call(null,dep);
} else {
return and__44009__auto__;
}
}),cljs.core.filter.call(null,(function (p__63613){
var vec__63614 = p__63613;
var k = cljs.core.nth.call(null,vec__63614,(0),null);
var v = cljs.core.nth.call(null,vec__63614,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__63626_63634 = cljs.core.seq.call(null,deps);
var chunk__63627_63635 = null;
var count__63628_63636 = (0);
var i__63629_63637 = (0);
while(true){
if((i__63629_63637 < count__63628_63636)){
var dep_63638 = cljs.core._nth.call(null,chunk__63627_63635,i__63629_63637);
if(cljs.core.truth_((function (){var and__44009__auto__ = dep_63638;
if(cljs.core.truth_(and__44009__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_63638));
} else {
return and__44009__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_63638,(depth + (1)),state);
} else {
}

var G__63639 = seq__63626_63634;
var G__63640 = chunk__63627_63635;
var G__63641 = count__63628_63636;
var G__63642 = (i__63629_63637 + (1));
seq__63626_63634 = G__63639;
chunk__63627_63635 = G__63640;
count__63628_63636 = G__63641;
i__63629_63637 = G__63642;
continue;
} else {
var temp__4657__auto___63643 = cljs.core.seq.call(null,seq__63626_63634);
if(temp__4657__auto___63643){
var seq__63626_63644__$1 = temp__4657__auto___63643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63626_63644__$1)){
var c__44860__auto___63645 = cljs.core.chunk_first.call(null,seq__63626_63644__$1);
var G__63646 = cljs.core.chunk_rest.call(null,seq__63626_63644__$1);
var G__63647 = c__44860__auto___63645;
var G__63648 = cljs.core.count.call(null,c__44860__auto___63645);
var G__63649 = (0);
seq__63626_63634 = G__63646;
chunk__63627_63635 = G__63647;
count__63628_63636 = G__63648;
i__63629_63637 = G__63649;
continue;
} else {
var dep_63650 = cljs.core.first.call(null,seq__63626_63644__$1);
if(cljs.core.truth_((function (){var and__44009__auto__ = dep_63650;
if(cljs.core.truth_(and__44009__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_63650));
} else {
return and__44009__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_63650,(depth + (1)),state);
} else {
}

var G__63651 = cljs.core.next.call(null,seq__63626_63644__$1);
var G__63652 = null;
var G__63653 = (0);
var G__63654 = (0);
seq__63626_63634 = G__63651;
chunk__63627_63635 = G__63652;
count__63628_63636 = G__63653;
i__63629_63637 = G__63654;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__63630){
var vec__63631 = p__63630;
var seq__63632 = cljs.core.seq.call(null,vec__63631);
var first__63633 = cljs.core.first.call(null,seq__63632);
var seq__63632__$1 = cljs.core.next.call(null,seq__63632);
var x = first__63633;
var xs = seq__63632__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__63631,seq__63632,first__63633,seq__63632__$1,x,xs,get_deps__$1){
return (function (p1__63617_SHARP_){
return clojure.set.difference.call(null,p1__63617_SHARP_,x);
});})(vec__63631,seq__63632,first__63633,seq__63632__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__63655 = cljs.core.seq.call(null,provides);
var chunk__63656 = null;
var count__63657 = (0);
var i__63658 = (0);
while(true){
if((i__63658 < count__63657)){
var prov = cljs.core._nth.call(null,chunk__63656,i__63658);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__63659_63667 = cljs.core.seq.call(null,requires);
var chunk__63660_63668 = null;
var count__63661_63669 = (0);
var i__63662_63670 = (0);
while(true){
if((i__63662_63670 < count__63661_63669)){
var req_63671 = cljs.core._nth.call(null,chunk__63660_63668,i__63662_63670);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63671,prov);

var G__63672 = seq__63659_63667;
var G__63673 = chunk__63660_63668;
var G__63674 = count__63661_63669;
var G__63675 = (i__63662_63670 + (1));
seq__63659_63667 = G__63672;
chunk__63660_63668 = G__63673;
count__63661_63669 = G__63674;
i__63662_63670 = G__63675;
continue;
} else {
var temp__4657__auto___63676 = cljs.core.seq.call(null,seq__63659_63667);
if(temp__4657__auto___63676){
var seq__63659_63677__$1 = temp__4657__auto___63676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63659_63677__$1)){
var c__44860__auto___63678 = cljs.core.chunk_first.call(null,seq__63659_63677__$1);
var G__63679 = cljs.core.chunk_rest.call(null,seq__63659_63677__$1);
var G__63680 = c__44860__auto___63678;
var G__63681 = cljs.core.count.call(null,c__44860__auto___63678);
var G__63682 = (0);
seq__63659_63667 = G__63679;
chunk__63660_63668 = G__63680;
count__63661_63669 = G__63681;
i__63662_63670 = G__63682;
continue;
} else {
var req_63683 = cljs.core.first.call(null,seq__63659_63677__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63683,prov);

var G__63684 = cljs.core.next.call(null,seq__63659_63677__$1);
var G__63685 = null;
var G__63686 = (0);
var G__63687 = (0);
seq__63659_63667 = G__63684;
chunk__63660_63668 = G__63685;
count__63661_63669 = G__63686;
i__63662_63670 = G__63687;
continue;
}
} else {
}
}
break;
}

var G__63688 = seq__63655;
var G__63689 = chunk__63656;
var G__63690 = count__63657;
var G__63691 = (i__63658 + (1));
seq__63655 = G__63688;
chunk__63656 = G__63689;
count__63657 = G__63690;
i__63658 = G__63691;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__63655);
if(temp__4657__auto__){
var seq__63655__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63655__$1)){
var c__44860__auto__ = cljs.core.chunk_first.call(null,seq__63655__$1);
var G__63692 = cljs.core.chunk_rest.call(null,seq__63655__$1);
var G__63693 = c__44860__auto__;
var G__63694 = cljs.core.count.call(null,c__44860__auto__);
var G__63695 = (0);
seq__63655 = G__63692;
chunk__63656 = G__63693;
count__63657 = G__63694;
i__63658 = G__63695;
continue;
} else {
var prov = cljs.core.first.call(null,seq__63655__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__63663_63696 = cljs.core.seq.call(null,requires);
var chunk__63664_63697 = null;
var count__63665_63698 = (0);
var i__63666_63699 = (0);
while(true){
if((i__63666_63699 < count__63665_63698)){
var req_63700 = cljs.core._nth.call(null,chunk__63664_63697,i__63666_63699);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63700,prov);

var G__63701 = seq__63663_63696;
var G__63702 = chunk__63664_63697;
var G__63703 = count__63665_63698;
var G__63704 = (i__63666_63699 + (1));
seq__63663_63696 = G__63701;
chunk__63664_63697 = G__63702;
count__63665_63698 = G__63703;
i__63666_63699 = G__63704;
continue;
} else {
var temp__4657__auto___63705__$1 = cljs.core.seq.call(null,seq__63663_63696);
if(temp__4657__auto___63705__$1){
var seq__63663_63706__$1 = temp__4657__auto___63705__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63663_63706__$1)){
var c__44860__auto___63707 = cljs.core.chunk_first.call(null,seq__63663_63706__$1);
var G__63708 = cljs.core.chunk_rest.call(null,seq__63663_63706__$1);
var G__63709 = c__44860__auto___63707;
var G__63710 = cljs.core.count.call(null,c__44860__auto___63707);
var G__63711 = (0);
seq__63663_63696 = G__63708;
chunk__63664_63697 = G__63709;
count__63665_63698 = G__63710;
i__63666_63699 = G__63711;
continue;
} else {
var req_63712 = cljs.core.first.call(null,seq__63663_63706__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_63712,prov);

var G__63713 = cljs.core.next.call(null,seq__63663_63706__$1);
var G__63714 = null;
var G__63715 = (0);
var G__63716 = (0);
seq__63663_63696 = G__63713;
chunk__63664_63697 = G__63714;
count__63665_63698 = G__63715;
i__63666_63699 = G__63716;
continue;
}
} else {
}
}
break;
}

var G__63717 = cljs.core.next.call(null,seq__63655__$1);
var G__63718 = null;
var G__63719 = (0);
var G__63720 = (0);
seq__63655 = G__63717;
chunk__63656 = G__63718;
count__63657 = G__63719;
i__63658 = G__63720;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__63721_63725 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__63722_63726 = null;
var count__63723_63727 = (0);
var i__63724_63728 = (0);
while(true){
if((i__63724_63728 < count__63723_63727)){
var ns_63729 = cljs.core._nth.call(null,chunk__63722_63726,i__63724_63728);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_63729);

var G__63730 = seq__63721_63725;
var G__63731 = chunk__63722_63726;
var G__63732 = count__63723_63727;
var G__63733 = (i__63724_63728 + (1));
seq__63721_63725 = G__63730;
chunk__63722_63726 = G__63731;
count__63723_63727 = G__63732;
i__63724_63728 = G__63733;
continue;
} else {
var temp__4657__auto___63734 = cljs.core.seq.call(null,seq__63721_63725);
if(temp__4657__auto___63734){
var seq__63721_63735__$1 = temp__4657__auto___63734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63721_63735__$1)){
var c__44860__auto___63736 = cljs.core.chunk_first.call(null,seq__63721_63735__$1);
var G__63737 = cljs.core.chunk_rest.call(null,seq__63721_63735__$1);
var G__63738 = c__44860__auto___63736;
var G__63739 = cljs.core.count.call(null,c__44860__auto___63736);
var G__63740 = (0);
seq__63721_63725 = G__63737;
chunk__63722_63726 = G__63738;
count__63723_63727 = G__63739;
i__63724_63728 = G__63740;
continue;
} else {
var ns_63741 = cljs.core.first.call(null,seq__63721_63735__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_63741);

var G__63742 = cljs.core.next.call(null,seq__63721_63735__$1);
var G__63743 = null;
var G__63744 = (0);
var G__63745 = (0);
seq__63721_63725 = G__63742;
chunk__63722_63726 = G__63743;
count__63723_63727 = G__63744;
i__63724_63728 = G__63745;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44021__auto__ = goog.require__;
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__63746__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__63746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63747__i = 0, G__63747__a = new Array(arguments.length -  0);
while (G__63747__i < G__63747__a.length) {G__63747__a[G__63747__i] = arguments[G__63747__i + 0]; ++G__63747__i;}
  args = new cljs.core.IndexedSeq(G__63747__a,0,null);
} 
return G__63746__delegate.call(this,args);};
G__63746.cljs$lang$maxFixedArity = 0;
G__63746.cljs$lang$applyTo = (function (arglist__63748){
var args = cljs.core.seq(arglist__63748);
return G__63746__delegate(args);
});
G__63746.cljs$core$IFn$_invoke$arity$variadic = G__63746__delegate;
return G__63746;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__63749_SHARP_,p2__63750_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63749_SHARP_)].join('')),p2__63750_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__63751_SHARP_,p2__63752_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63751_SHARP_)].join(''),p2__63752_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__63753 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__63753.addCallback(((function (G__63753){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__63753))
);

G__63753.addErrback(((function (G__63753){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__63753))
);

return G__63753;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e63754){if((e63754 instanceof Error)){
var e = e63754;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e63754;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e63755){if((e63755 instanceof Error)){
var e = e63755;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e63755;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__63756 = cljs.core._EQ_;
var expr__63757 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__63756.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__63757))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__63756.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__63757))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__63756.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__63757))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__63756,expr__63757){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__63756,expr__63757))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__63759,callback){
var map__63760 = p__63759;
var map__63760__$1 = ((((!((map__63760 == null)))?((((map__63760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63760):map__63760);
var file_msg = map__63760__$1;
var request_url = cljs.core.get.call(null,map__63760__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__44021__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__63760,map__63760__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__63760,map__63760__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__){
return (function (state_63800){
var state_val_63801 = (state_63800[(1)]);
if((state_val_63801 === (7))){
var inst_63796 = (state_63800[(2)]);
var state_63800__$1 = state_63800;
var statearr_63802_63829 = state_63800__$1;
(statearr_63802_63829[(2)] = inst_63796);

(statearr_63802_63829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (1))){
var state_63800__$1 = state_63800;
var statearr_63803_63830 = state_63800__$1;
(statearr_63803_63830[(2)] = null);

(statearr_63803_63830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (4))){
var inst_63764 = (state_63800[(7)]);
var inst_63764__$1 = (state_63800[(2)]);
var state_63800__$1 = (function (){var statearr_63804 = state_63800;
(statearr_63804[(7)] = inst_63764__$1);

return statearr_63804;
})();
if(cljs.core.truth_(inst_63764__$1)){
var statearr_63805_63831 = state_63800__$1;
(statearr_63805_63831[(1)] = (5));

} else {
var statearr_63806_63832 = state_63800__$1;
(statearr_63806_63832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (15))){
var inst_63778 = (state_63800[(8)]);
var inst_63781 = (state_63800[(9)]);
var inst_63783 = inst_63781.call(null,inst_63778);
var state_63800__$1 = state_63800;
var statearr_63807_63833 = state_63800__$1;
(statearr_63807_63833[(2)] = inst_63783);

(statearr_63807_63833[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (13))){
var inst_63790 = (state_63800[(2)]);
var state_63800__$1 = state_63800;
var statearr_63808_63834 = state_63800__$1;
(statearr_63808_63834[(2)] = inst_63790);

(statearr_63808_63834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (6))){
var state_63800__$1 = state_63800;
var statearr_63809_63835 = state_63800__$1;
(statearr_63809_63835[(2)] = null);

(statearr_63809_63835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (17))){
var inst_63787 = (state_63800[(2)]);
var state_63800__$1 = state_63800;
var statearr_63810_63836 = state_63800__$1;
(statearr_63810_63836[(2)] = inst_63787);

(statearr_63810_63836[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (3))){
var inst_63798 = (state_63800[(2)]);
var state_63800__$1 = state_63800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63800__$1,inst_63798);
} else {
if((state_val_63801 === (12))){
var state_63800__$1 = state_63800;
var statearr_63811_63837 = state_63800__$1;
(statearr_63811_63837[(2)] = null);

(statearr_63811_63837[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (2))){
var state_63800__$1 = state_63800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63800__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_63801 === (11))){
var inst_63769 = (state_63800[(10)]);
var inst_63776 = figwheel.client.file_reloading.blocking_load.call(null,inst_63769);
var state_63800__$1 = state_63800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63800__$1,(14),inst_63776);
} else {
if((state_val_63801 === (9))){
var inst_63769 = (state_63800[(10)]);
var state_63800__$1 = state_63800;
if(cljs.core.truth_(inst_63769)){
var statearr_63812_63838 = state_63800__$1;
(statearr_63812_63838[(1)] = (11));

} else {
var statearr_63813_63839 = state_63800__$1;
(statearr_63813_63839[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (5))){
var inst_63770 = (state_63800[(11)]);
var inst_63764 = (state_63800[(7)]);
var inst_63769 = cljs.core.nth.call(null,inst_63764,(0),null);
var inst_63770__$1 = cljs.core.nth.call(null,inst_63764,(1),null);
var state_63800__$1 = (function (){var statearr_63814 = state_63800;
(statearr_63814[(11)] = inst_63770__$1);

(statearr_63814[(10)] = inst_63769);

return statearr_63814;
})();
if(cljs.core.truth_(inst_63770__$1)){
var statearr_63815_63840 = state_63800__$1;
(statearr_63815_63840[(1)] = (8));

} else {
var statearr_63816_63841 = state_63800__$1;
(statearr_63816_63841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (14))){
var inst_63769 = (state_63800[(10)]);
var inst_63781 = (state_63800[(9)]);
var inst_63778 = (state_63800[(2)]);
var inst_63779 = console.log("Loading!",inst_63769);
var inst_63780 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_63781__$1 = cljs.core.get.call(null,inst_63780,inst_63769);
var state_63800__$1 = (function (){var statearr_63817 = state_63800;
(statearr_63817[(8)] = inst_63778);

(statearr_63817[(9)] = inst_63781__$1);

(statearr_63817[(12)] = inst_63779);

return statearr_63817;
})();
if(cljs.core.truth_(inst_63781__$1)){
var statearr_63818_63842 = state_63800__$1;
(statearr_63818_63842[(1)] = (15));

} else {
var statearr_63819_63843 = state_63800__$1;
(statearr_63819_63843[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (16))){
var inst_63778 = (state_63800[(8)]);
var inst_63785 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_63778);
var state_63800__$1 = state_63800;
var statearr_63820_63844 = state_63800__$1;
(statearr_63820_63844[(2)] = inst_63785);

(statearr_63820_63844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (10))){
var inst_63792 = (state_63800[(2)]);
var state_63800__$1 = (function (){var statearr_63821 = state_63800;
(statearr_63821[(13)] = inst_63792);

return statearr_63821;
})();
var statearr_63822_63845 = state_63800__$1;
(statearr_63822_63845[(2)] = null);

(statearr_63822_63845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63801 === (8))){
var inst_63770 = (state_63800[(11)]);
var inst_63772 = console.log("Evaling!",inst_63770);
var inst_63773 = eval(inst_63770);
var state_63800__$1 = (function (){var statearr_63823 = state_63800;
(statearr_63823[(14)] = inst_63772);

return statearr_63823;
})();
var statearr_63824_63846 = state_63800__$1;
(statearr_63824_63846[(2)] = inst_63773);

(statearr_63824_63846[(1)] = (10));


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
});})(c__47313__auto__))
;
return ((function (switch__47292__auto__,c__47313__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__47293__auto__ = null;
var figwheel$client$file_reloading$state_machine__47293__auto____0 = (function (){
var statearr_63825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63825[(0)] = figwheel$client$file_reloading$state_machine__47293__auto__);

(statearr_63825[(1)] = (1));

return statearr_63825;
});
var figwheel$client$file_reloading$state_machine__47293__auto____1 = (function (state_63800){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_63800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e63826){if((e63826 instanceof Object)){
var ex__47296__auto__ = e63826;
var statearr_63827_63847 = state_63800;
(statearr_63827_63847[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63848 = state_63800;
state_63800 = G__63848;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__47293__auto__ = function(state_63800){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__47293__auto____1.call(this,state_63800);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__47293__auto____0;
figwheel$client$file_reloading$state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__47293__auto____1;
return figwheel$client$file_reloading$state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__))
})();
var state__47315__auto__ = (function (){var statearr_63828 = f__47314__auto__.call(null);
(statearr_63828[(6)] = c__47313__auto__);

return statearr_63828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__))
);

return c__47313__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__63850 = arguments.length;
switch (G__63850) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__63852,callback){
var map__63853 = p__63852;
var map__63853__$1 = ((((!((map__63853 == null)))?((((map__63853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63853.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63853):map__63853);
var file_msg = map__63853__$1;
var namespace = cljs.core.get.call(null,map__63853__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__63853,map__63853__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__63853,map__63853__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__63855){
var map__63856 = p__63855;
var map__63856__$1 = ((((!((map__63856 == null)))?((((map__63856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63856.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63856):map__63856);
var file_msg = map__63856__$1;
var namespace = cljs.core.get.call(null,map__63856__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__63858){
var map__63859 = p__63858;
var map__63859__$1 = ((((!((map__63859 == null)))?((((map__63859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63859.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63859):map__63859);
var file_msg = map__63859__$1;
var namespace = cljs.core.get.call(null,map__63859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44009__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__44009__auto__){
var or__44021__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
var or__44021__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44021__auto____$1)){
return or__44021__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44009__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__63861,callback){
var map__63862 = p__63861;
var map__63862__$1 = ((((!((map__63862 == null)))?((((map__63862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63862):map__63862);
var file_msg = map__63862__$1;
var request_url = cljs.core.get.call(null,map__63862__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__63862__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__47313__auto___63912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___63912,out){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___63912,out){
return (function (state_63897){
var state_val_63898 = (state_63897[(1)]);
if((state_val_63898 === (1))){
var inst_63871 = cljs.core.seq.call(null,files);
var inst_63872 = cljs.core.first.call(null,inst_63871);
var inst_63873 = cljs.core.next.call(null,inst_63871);
var inst_63874 = files;
var state_63897__$1 = (function (){var statearr_63899 = state_63897;
(statearr_63899[(7)] = inst_63874);

(statearr_63899[(8)] = inst_63872);

(statearr_63899[(9)] = inst_63873);

return statearr_63899;
})();
var statearr_63900_63913 = state_63897__$1;
(statearr_63900_63913[(2)] = null);

(statearr_63900_63913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63898 === (2))){
var inst_63874 = (state_63897[(7)]);
var inst_63880 = (state_63897[(10)]);
var inst_63879 = cljs.core.seq.call(null,inst_63874);
var inst_63880__$1 = cljs.core.first.call(null,inst_63879);
var inst_63881 = cljs.core.next.call(null,inst_63879);
var inst_63882 = (inst_63880__$1 == null);
var inst_63883 = cljs.core.not.call(null,inst_63882);
var state_63897__$1 = (function (){var statearr_63901 = state_63897;
(statearr_63901[(11)] = inst_63881);

(statearr_63901[(10)] = inst_63880__$1);

return statearr_63901;
})();
if(inst_63883){
var statearr_63902_63914 = state_63897__$1;
(statearr_63902_63914[(1)] = (4));

} else {
var statearr_63903_63915 = state_63897__$1;
(statearr_63903_63915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63898 === (3))){
var inst_63895 = (state_63897[(2)]);
var state_63897__$1 = state_63897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63897__$1,inst_63895);
} else {
if((state_val_63898 === (4))){
var inst_63880 = (state_63897[(10)]);
var inst_63885 = figwheel.client.file_reloading.reload_js_file.call(null,inst_63880);
var state_63897__$1 = state_63897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63897__$1,(7),inst_63885);
} else {
if((state_val_63898 === (5))){
var inst_63891 = cljs.core.async.close_BANG_.call(null,out);
var state_63897__$1 = state_63897;
var statearr_63904_63916 = state_63897__$1;
(statearr_63904_63916[(2)] = inst_63891);

(statearr_63904_63916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63898 === (6))){
var inst_63893 = (state_63897[(2)]);
var state_63897__$1 = state_63897;
var statearr_63905_63917 = state_63897__$1;
(statearr_63905_63917[(2)] = inst_63893);

(statearr_63905_63917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63898 === (7))){
var inst_63881 = (state_63897[(11)]);
var inst_63887 = (state_63897[(2)]);
var inst_63888 = cljs.core.async.put_BANG_.call(null,out,inst_63887);
var inst_63874 = inst_63881;
var state_63897__$1 = (function (){var statearr_63906 = state_63897;
(statearr_63906[(7)] = inst_63874);

(statearr_63906[(12)] = inst_63888);

return statearr_63906;
})();
var statearr_63907_63918 = state_63897__$1;
(statearr_63907_63918[(2)] = null);

(statearr_63907_63918[(1)] = (2));


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
});})(c__47313__auto___63912,out))
;
return ((function (switch__47292__auto__,c__47313__auto___63912,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto____0 = (function (){
var statearr_63908 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63908[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto__);

(statearr_63908[(1)] = (1));

return statearr_63908;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto____1 = (function (state_63897){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_63897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e63909){if((e63909 instanceof Object)){
var ex__47296__auto__ = e63909;
var statearr_63910_63919 = state_63897;
(statearr_63910_63919[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63920 = state_63897;
state_63897 = G__63920;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto__ = function(state_63897){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto____1.call(this,state_63897);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___63912,out))
})();
var state__47315__auto__ = (function (){var statearr_63911 = f__47314__auto__.call(null);
(statearr_63911[(6)] = c__47313__auto___63912);

return statearr_63911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___63912,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__63921,opts){
var map__63922 = p__63921;
var map__63922__$1 = ((((!((map__63922 == null)))?((((map__63922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63922):map__63922);
var eval_body = cljs.core.get.call(null,map__63922__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__63922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44009__auto__ = eval_body;
if(cljs.core.truth_(and__44009__auto__)){
return typeof eval_body === 'string';
} else {
return and__44009__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e63924){var e = e63924;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__63925_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__63925_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__63926){
var vec__63927 = p__63926;
var k = cljs.core.nth.call(null,vec__63927,(0),null);
var v = cljs.core.nth.call(null,vec__63927,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__63930){
var vec__63931 = p__63930;
var k = cljs.core.nth.call(null,vec__63931,(0),null);
var v = cljs.core.nth.call(null,vec__63931,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__63937,p__63938){
var map__63939 = p__63937;
var map__63939__$1 = ((((!((map__63939 == null)))?((((map__63939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63939):map__63939);
var opts = map__63939__$1;
var before_jsload = cljs.core.get.call(null,map__63939__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__63939__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__63939__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__63940 = p__63938;
var map__63940__$1 = ((((!((map__63940 == null)))?((((map__63940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63940):map__63940);
var msg = map__63940__$1;
var files = cljs.core.get.call(null,map__63940__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__63940__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__63940__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_64094){
var state_val_64095 = (state_64094[(1)]);
if((state_val_64095 === (7))){
var inst_63957 = (state_64094[(7)]);
var inst_63954 = (state_64094[(8)]);
var inst_63956 = (state_64094[(9)]);
var inst_63955 = (state_64094[(10)]);
var inst_63962 = cljs.core._nth.call(null,inst_63955,inst_63957);
var inst_63963 = figwheel.client.file_reloading.eval_body.call(null,inst_63962,opts);
var inst_63964 = (inst_63957 + (1));
var tmp64096 = inst_63954;
var tmp64097 = inst_63956;
var tmp64098 = inst_63955;
var inst_63954__$1 = tmp64096;
var inst_63955__$1 = tmp64098;
var inst_63956__$1 = tmp64097;
var inst_63957__$1 = inst_63964;
var state_64094__$1 = (function (){var statearr_64099 = state_64094;
(statearr_64099[(7)] = inst_63957__$1);

(statearr_64099[(8)] = inst_63954__$1);

(statearr_64099[(9)] = inst_63956__$1);

(statearr_64099[(11)] = inst_63963);

(statearr_64099[(10)] = inst_63955__$1);

return statearr_64099;
})();
var statearr_64100_64183 = state_64094__$1;
(statearr_64100_64183[(2)] = null);

(statearr_64100_64183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (20))){
var inst_63997 = (state_64094[(12)]);
var inst_64005 = figwheel.client.file_reloading.sort_files.call(null,inst_63997);
var state_64094__$1 = state_64094;
var statearr_64101_64184 = state_64094__$1;
(statearr_64101_64184[(2)] = inst_64005);

(statearr_64101_64184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (27))){
var state_64094__$1 = state_64094;
var statearr_64102_64185 = state_64094__$1;
(statearr_64102_64185[(2)] = null);

(statearr_64102_64185[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (1))){
var inst_63946 = (state_64094[(13)]);
var inst_63943 = before_jsload.call(null,files);
var inst_63944 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_63945 = (function (){return ((function (inst_63946,inst_63943,inst_63944,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63934_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__63934_SHARP_);
});
;})(inst_63946,inst_63943,inst_63944,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63946__$1 = cljs.core.filter.call(null,inst_63945,files);
var inst_63947 = cljs.core.not_empty.call(null,inst_63946__$1);
var state_64094__$1 = (function (){var statearr_64103 = state_64094;
(statearr_64103[(13)] = inst_63946__$1);

(statearr_64103[(14)] = inst_63943);

(statearr_64103[(15)] = inst_63944);

return statearr_64103;
})();
if(cljs.core.truth_(inst_63947)){
var statearr_64104_64186 = state_64094__$1;
(statearr_64104_64186[(1)] = (2));

} else {
var statearr_64105_64187 = state_64094__$1;
(statearr_64105_64187[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (24))){
var state_64094__$1 = state_64094;
var statearr_64106_64188 = state_64094__$1;
(statearr_64106_64188[(2)] = null);

(statearr_64106_64188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (39))){
var inst_64047 = (state_64094[(16)]);
var state_64094__$1 = state_64094;
var statearr_64107_64189 = state_64094__$1;
(statearr_64107_64189[(2)] = inst_64047);

(statearr_64107_64189[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (46))){
var inst_64089 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
var statearr_64108_64190 = state_64094__$1;
(statearr_64108_64190[(2)] = inst_64089);

(statearr_64108_64190[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (4))){
var inst_63991 = (state_64094[(2)]);
var inst_63992 = cljs.core.List.EMPTY;
var inst_63993 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_63992);
var inst_63994 = (function (){return ((function (inst_63991,inst_63992,inst_63993,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63935_SHARP_){
var and__44009__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__63935_SHARP_);
if(cljs.core.truth_(and__44009__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__63935_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__63935_SHARP_)));
} else {
return and__44009__auto__;
}
});
;})(inst_63991,inst_63992,inst_63993,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63995 = cljs.core.filter.call(null,inst_63994,files);
var inst_63996 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_63997 = cljs.core.concat.call(null,inst_63995,inst_63996);
var state_64094__$1 = (function (){var statearr_64109 = state_64094;
(statearr_64109[(17)] = inst_63993);

(statearr_64109[(18)] = inst_63991);

(statearr_64109[(12)] = inst_63997);

return statearr_64109;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_64110_64191 = state_64094__$1;
(statearr_64110_64191[(1)] = (16));

} else {
var statearr_64111_64192 = state_64094__$1;
(statearr_64111_64192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (15))){
var inst_63981 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
var statearr_64112_64193 = state_64094__$1;
(statearr_64112_64193[(2)] = inst_63981);

(statearr_64112_64193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (21))){
var inst_64007 = (state_64094[(19)]);
var inst_64007__$1 = (state_64094[(2)]);
var inst_64008 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_64007__$1);
var state_64094__$1 = (function (){var statearr_64113 = state_64094;
(statearr_64113[(19)] = inst_64007__$1);

return statearr_64113;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64094__$1,(22),inst_64008);
} else {
if((state_val_64095 === (31))){
var inst_64092 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64094__$1,inst_64092);
} else {
if((state_val_64095 === (32))){
var inst_64047 = (state_64094[(16)]);
var inst_64052 = inst_64047.cljs$lang$protocol_mask$partition0$;
var inst_64053 = (inst_64052 & (64));
var inst_64054 = inst_64047.cljs$core$ISeq$;
var inst_64055 = (cljs.core.PROTOCOL_SENTINEL === inst_64054);
var inst_64056 = (inst_64053) || (inst_64055);
var state_64094__$1 = state_64094;
if(cljs.core.truth_(inst_64056)){
var statearr_64114_64194 = state_64094__$1;
(statearr_64114_64194[(1)] = (35));

} else {
var statearr_64115_64195 = state_64094__$1;
(statearr_64115_64195[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (40))){
var inst_64069 = (state_64094[(20)]);
var inst_64068 = (state_64094[(2)]);
var inst_64069__$1 = cljs.core.get.call(null,inst_64068,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_64070 = cljs.core.get.call(null,inst_64068,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_64071 = cljs.core.not_empty.call(null,inst_64069__$1);
var state_64094__$1 = (function (){var statearr_64116 = state_64094;
(statearr_64116[(20)] = inst_64069__$1);

(statearr_64116[(21)] = inst_64070);

return statearr_64116;
})();
if(cljs.core.truth_(inst_64071)){
var statearr_64117_64196 = state_64094__$1;
(statearr_64117_64196[(1)] = (41));

} else {
var statearr_64118_64197 = state_64094__$1;
(statearr_64118_64197[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (33))){
var state_64094__$1 = state_64094;
var statearr_64119_64198 = state_64094__$1;
(statearr_64119_64198[(2)] = false);

(statearr_64119_64198[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (13))){
var inst_63967 = (state_64094[(22)]);
var inst_63971 = cljs.core.chunk_first.call(null,inst_63967);
var inst_63972 = cljs.core.chunk_rest.call(null,inst_63967);
var inst_63973 = cljs.core.count.call(null,inst_63971);
var inst_63954 = inst_63972;
var inst_63955 = inst_63971;
var inst_63956 = inst_63973;
var inst_63957 = (0);
var state_64094__$1 = (function (){var statearr_64120 = state_64094;
(statearr_64120[(7)] = inst_63957);

(statearr_64120[(8)] = inst_63954);

(statearr_64120[(9)] = inst_63956);

(statearr_64120[(10)] = inst_63955);

return statearr_64120;
})();
var statearr_64121_64199 = state_64094__$1;
(statearr_64121_64199[(2)] = null);

(statearr_64121_64199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (22))){
var inst_64015 = (state_64094[(23)]);
var inst_64011 = (state_64094[(24)]);
var inst_64010 = (state_64094[(25)]);
var inst_64007 = (state_64094[(19)]);
var inst_64010__$1 = (state_64094[(2)]);
var inst_64011__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_64010__$1);
var inst_64012 = (function (){var all_files = inst_64007;
var res_SINGLEQUOTE_ = inst_64010__$1;
var res = inst_64011__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_64015,inst_64011,inst_64010,inst_64007,inst_64010__$1,inst_64011__$1,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__63936_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__63936_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_64015,inst_64011,inst_64010,inst_64007,inst_64010__$1,inst_64011__$1,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64013 = cljs.core.filter.call(null,inst_64012,inst_64010__$1);
var inst_64014 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_64015__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_64014);
var inst_64016 = cljs.core.not_empty.call(null,inst_64015__$1);
var state_64094__$1 = (function (){var statearr_64122 = state_64094;
(statearr_64122[(23)] = inst_64015__$1);

(statearr_64122[(24)] = inst_64011__$1);

(statearr_64122[(26)] = inst_64013);

(statearr_64122[(25)] = inst_64010__$1);

return statearr_64122;
})();
if(cljs.core.truth_(inst_64016)){
var statearr_64123_64200 = state_64094__$1;
(statearr_64123_64200[(1)] = (23));

} else {
var statearr_64124_64201 = state_64094__$1;
(statearr_64124_64201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (36))){
var state_64094__$1 = state_64094;
var statearr_64125_64202 = state_64094__$1;
(statearr_64125_64202[(2)] = false);

(statearr_64125_64202[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (41))){
var inst_64069 = (state_64094[(20)]);
var inst_64073 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_64074 = cljs.core.map.call(null,inst_64073,inst_64069);
var inst_64075 = cljs.core.pr_str.call(null,inst_64074);
var inst_64076 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64075)].join('');
var inst_64077 = figwheel.client.utils.log.call(null,inst_64076);
var state_64094__$1 = state_64094;
var statearr_64126_64203 = state_64094__$1;
(statearr_64126_64203[(2)] = inst_64077);

(statearr_64126_64203[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (43))){
var inst_64070 = (state_64094[(21)]);
var inst_64080 = (state_64094[(2)]);
var inst_64081 = cljs.core.not_empty.call(null,inst_64070);
var state_64094__$1 = (function (){var statearr_64127 = state_64094;
(statearr_64127[(27)] = inst_64080);

return statearr_64127;
})();
if(cljs.core.truth_(inst_64081)){
var statearr_64128_64204 = state_64094__$1;
(statearr_64128_64204[(1)] = (44));

} else {
var statearr_64129_64205 = state_64094__$1;
(statearr_64129_64205[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (29))){
var inst_64015 = (state_64094[(23)]);
var inst_64011 = (state_64094[(24)]);
var inst_64013 = (state_64094[(26)]);
var inst_64010 = (state_64094[(25)]);
var inst_64047 = (state_64094[(16)]);
var inst_64007 = (state_64094[(19)]);
var inst_64043 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_64046 = (function (){var all_files = inst_64007;
var res_SINGLEQUOTE_ = inst_64010;
var res = inst_64011;
var files_not_loaded = inst_64013;
var dependencies_that_loaded = inst_64015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64047,inst_64007,inst_64043,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__64045){
var map__64130 = p__64045;
var map__64130__$1 = ((((!((map__64130 == null)))?((((map__64130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64130):map__64130);
var namespace = cljs.core.get.call(null,map__64130__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64047,inst_64007,inst_64043,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64047__$1 = cljs.core.group_by.call(null,inst_64046,inst_64013);
var inst_64049 = (inst_64047__$1 == null);
var inst_64050 = cljs.core.not.call(null,inst_64049);
var state_64094__$1 = (function (){var statearr_64132 = state_64094;
(statearr_64132[(28)] = inst_64043);

(statearr_64132[(16)] = inst_64047__$1);

return statearr_64132;
})();
if(inst_64050){
var statearr_64133_64206 = state_64094__$1;
(statearr_64133_64206[(1)] = (32));

} else {
var statearr_64134_64207 = state_64094__$1;
(statearr_64134_64207[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (44))){
var inst_64070 = (state_64094[(21)]);
var inst_64083 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_64070);
var inst_64084 = cljs.core.pr_str.call(null,inst_64083);
var inst_64085 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64084)].join('');
var inst_64086 = figwheel.client.utils.log.call(null,inst_64085);
var state_64094__$1 = state_64094;
var statearr_64135_64208 = state_64094__$1;
(statearr_64135_64208[(2)] = inst_64086);

(statearr_64135_64208[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (6))){
var inst_63988 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
var statearr_64136_64209 = state_64094__$1;
(statearr_64136_64209[(2)] = inst_63988);

(statearr_64136_64209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (28))){
var inst_64013 = (state_64094[(26)]);
var inst_64040 = (state_64094[(2)]);
var inst_64041 = cljs.core.not_empty.call(null,inst_64013);
var state_64094__$1 = (function (){var statearr_64137 = state_64094;
(statearr_64137[(29)] = inst_64040);

return statearr_64137;
})();
if(cljs.core.truth_(inst_64041)){
var statearr_64138_64210 = state_64094__$1;
(statearr_64138_64210[(1)] = (29));

} else {
var statearr_64139_64211 = state_64094__$1;
(statearr_64139_64211[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (25))){
var inst_64011 = (state_64094[(24)]);
var inst_64027 = (state_64094[(2)]);
var inst_64028 = cljs.core.not_empty.call(null,inst_64011);
var state_64094__$1 = (function (){var statearr_64140 = state_64094;
(statearr_64140[(30)] = inst_64027);

return statearr_64140;
})();
if(cljs.core.truth_(inst_64028)){
var statearr_64141_64212 = state_64094__$1;
(statearr_64141_64212[(1)] = (26));

} else {
var statearr_64142_64213 = state_64094__$1;
(statearr_64142_64213[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (34))){
var inst_64063 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
if(cljs.core.truth_(inst_64063)){
var statearr_64143_64214 = state_64094__$1;
(statearr_64143_64214[(1)] = (38));

} else {
var statearr_64144_64215 = state_64094__$1;
(statearr_64144_64215[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (17))){
var state_64094__$1 = state_64094;
var statearr_64145_64216 = state_64094__$1;
(statearr_64145_64216[(2)] = recompile_dependents);

(statearr_64145_64216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (3))){
var state_64094__$1 = state_64094;
var statearr_64146_64217 = state_64094__$1;
(statearr_64146_64217[(2)] = null);

(statearr_64146_64217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (12))){
var inst_63984 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
var statearr_64147_64218 = state_64094__$1;
(statearr_64147_64218[(2)] = inst_63984);

(statearr_64147_64218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (2))){
var inst_63946 = (state_64094[(13)]);
var inst_63953 = cljs.core.seq.call(null,inst_63946);
var inst_63954 = inst_63953;
var inst_63955 = null;
var inst_63956 = (0);
var inst_63957 = (0);
var state_64094__$1 = (function (){var statearr_64148 = state_64094;
(statearr_64148[(7)] = inst_63957);

(statearr_64148[(8)] = inst_63954);

(statearr_64148[(9)] = inst_63956);

(statearr_64148[(10)] = inst_63955);

return statearr_64148;
})();
var statearr_64149_64219 = state_64094__$1;
(statearr_64149_64219[(2)] = null);

(statearr_64149_64219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (23))){
var inst_64015 = (state_64094[(23)]);
var inst_64011 = (state_64094[(24)]);
var inst_64013 = (state_64094[(26)]);
var inst_64010 = (state_64094[(25)]);
var inst_64007 = (state_64094[(19)]);
var inst_64018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_64020 = (function (){var all_files = inst_64007;
var res_SINGLEQUOTE_ = inst_64010;
var res = inst_64011;
var files_not_loaded = inst_64013;
var dependencies_that_loaded = inst_64015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64007,inst_64018,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__64019){
var map__64150 = p__64019;
var map__64150__$1 = ((((!((map__64150 == null)))?((((map__64150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64150):map__64150);
var request_url = cljs.core.get.call(null,map__64150__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64007,inst_64018,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64021 = cljs.core.reverse.call(null,inst_64015);
var inst_64022 = cljs.core.map.call(null,inst_64020,inst_64021);
var inst_64023 = cljs.core.pr_str.call(null,inst_64022);
var inst_64024 = figwheel.client.utils.log.call(null,inst_64023);
var state_64094__$1 = (function (){var statearr_64152 = state_64094;
(statearr_64152[(31)] = inst_64018);

return statearr_64152;
})();
var statearr_64153_64220 = state_64094__$1;
(statearr_64153_64220[(2)] = inst_64024);

(statearr_64153_64220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (35))){
var state_64094__$1 = state_64094;
var statearr_64154_64221 = state_64094__$1;
(statearr_64154_64221[(2)] = true);

(statearr_64154_64221[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (19))){
var inst_63997 = (state_64094[(12)]);
var inst_64003 = figwheel.client.file_reloading.expand_files.call(null,inst_63997);
var state_64094__$1 = state_64094;
var statearr_64155_64222 = state_64094__$1;
(statearr_64155_64222[(2)] = inst_64003);

(statearr_64155_64222[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (11))){
var state_64094__$1 = state_64094;
var statearr_64156_64223 = state_64094__$1;
(statearr_64156_64223[(2)] = null);

(statearr_64156_64223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (9))){
var inst_63986 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
var statearr_64157_64224 = state_64094__$1;
(statearr_64157_64224[(2)] = inst_63986);

(statearr_64157_64224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (5))){
var inst_63957 = (state_64094[(7)]);
var inst_63956 = (state_64094[(9)]);
var inst_63959 = (inst_63957 < inst_63956);
var inst_63960 = inst_63959;
var state_64094__$1 = state_64094;
if(cljs.core.truth_(inst_63960)){
var statearr_64158_64225 = state_64094__$1;
(statearr_64158_64225[(1)] = (7));

} else {
var statearr_64159_64226 = state_64094__$1;
(statearr_64159_64226[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (14))){
var inst_63967 = (state_64094[(22)]);
var inst_63976 = cljs.core.first.call(null,inst_63967);
var inst_63977 = figwheel.client.file_reloading.eval_body.call(null,inst_63976,opts);
var inst_63978 = cljs.core.next.call(null,inst_63967);
var inst_63954 = inst_63978;
var inst_63955 = null;
var inst_63956 = (0);
var inst_63957 = (0);
var state_64094__$1 = (function (){var statearr_64160 = state_64094;
(statearr_64160[(7)] = inst_63957);

(statearr_64160[(8)] = inst_63954);

(statearr_64160[(9)] = inst_63956);

(statearr_64160[(32)] = inst_63977);

(statearr_64160[(10)] = inst_63955);

return statearr_64160;
})();
var statearr_64161_64227 = state_64094__$1;
(statearr_64161_64227[(2)] = null);

(statearr_64161_64227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (45))){
var state_64094__$1 = state_64094;
var statearr_64162_64228 = state_64094__$1;
(statearr_64162_64228[(2)] = null);

(statearr_64162_64228[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (26))){
var inst_64015 = (state_64094[(23)]);
var inst_64011 = (state_64094[(24)]);
var inst_64013 = (state_64094[(26)]);
var inst_64010 = (state_64094[(25)]);
var inst_64007 = (state_64094[(19)]);
var inst_64030 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_64032 = (function (){var all_files = inst_64007;
var res_SINGLEQUOTE_ = inst_64010;
var res = inst_64011;
var files_not_loaded = inst_64013;
var dependencies_that_loaded = inst_64015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64007,inst_64030,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__64031){
var map__64163 = p__64031;
var map__64163__$1 = ((((!((map__64163 == null)))?((((map__64163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64163):map__64163);
var namespace = cljs.core.get.call(null,map__64163__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__64163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64007,inst_64030,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64033 = cljs.core.map.call(null,inst_64032,inst_64011);
var inst_64034 = cljs.core.pr_str.call(null,inst_64033);
var inst_64035 = figwheel.client.utils.log.call(null,inst_64034);
var inst_64036 = (function (){var all_files = inst_64007;
var res_SINGLEQUOTE_ = inst_64010;
var res = inst_64011;
var files_not_loaded = inst_64013;
var dependencies_that_loaded = inst_64015;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64007,inst_64030,inst_64032,inst_64033,inst_64034,inst_64035,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64015,inst_64011,inst_64013,inst_64010,inst_64007,inst_64030,inst_64032,inst_64033,inst_64034,inst_64035,state_val_64095,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64037 = setTimeout(inst_64036,(10));
var state_64094__$1 = (function (){var statearr_64165 = state_64094;
(statearr_64165[(33)] = inst_64035);

(statearr_64165[(34)] = inst_64030);

return statearr_64165;
})();
var statearr_64166_64229 = state_64094__$1;
(statearr_64166_64229[(2)] = inst_64037);

(statearr_64166_64229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (16))){
var state_64094__$1 = state_64094;
var statearr_64167_64230 = state_64094__$1;
(statearr_64167_64230[(2)] = reload_dependents);

(statearr_64167_64230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (38))){
var inst_64047 = (state_64094[(16)]);
var inst_64065 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64047);
var state_64094__$1 = state_64094;
var statearr_64168_64231 = state_64094__$1;
(statearr_64168_64231[(2)] = inst_64065);

(statearr_64168_64231[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (30))){
var state_64094__$1 = state_64094;
var statearr_64169_64232 = state_64094__$1;
(statearr_64169_64232[(2)] = null);

(statearr_64169_64232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (10))){
var inst_63967 = (state_64094[(22)]);
var inst_63969 = cljs.core.chunked_seq_QMARK_.call(null,inst_63967);
var state_64094__$1 = state_64094;
if(inst_63969){
var statearr_64170_64233 = state_64094__$1;
(statearr_64170_64233[(1)] = (13));

} else {
var statearr_64171_64234 = state_64094__$1;
(statearr_64171_64234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (18))){
var inst_64001 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
if(cljs.core.truth_(inst_64001)){
var statearr_64172_64235 = state_64094__$1;
(statearr_64172_64235[(1)] = (19));

} else {
var statearr_64173_64236 = state_64094__$1;
(statearr_64173_64236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (42))){
var state_64094__$1 = state_64094;
var statearr_64174_64237 = state_64094__$1;
(statearr_64174_64237[(2)] = null);

(statearr_64174_64237[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (37))){
var inst_64060 = (state_64094[(2)]);
var state_64094__$1 = state_64094;
var statearr_64175_64238 = state_64094__$1;
(statearr_64175_64238[(2)] = inst_64060);

(statearr_64175_64238[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64095 === (8))){
var inst_63954 = (state_64094[(8)]);
var inst_63967 = (state_64094[(22)]);
var inst_63967__$1 = cljs.core.seq.call(null,inst_63954);
var state_64094__$1 = (function (){var statearr_64176 = state_64094;
(statearr_64176[(22)] = inst_63967__$1);

return statearr_64176;
})();
if(inst_63967__$1){
var statearr_64177_64239 = state_64094__$1;
(statearr_64177_64239[(1)] = (10));

} else {
var statearr_64178_64240 = state_64094__$1;
(statearr_64178_64240[(1)] = (11));

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
}
});})(c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__47292__auto__,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto____0 = (function (){
var statearr_64179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64179[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto__);

(statearr_64179[(1)] = (1));

return statearr_64179;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto____1 = (function (state_64094){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_64094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e64180){if((e64180 instanceof Object)){
var ex__47296__auto__ = e64180;
var statearr_64181_64241 = state_64094;
(statearr_64181_64241[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64242 = state_64094;
state_64094 = G__64242;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto__ = function(state_64094){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto____1.call(this,state_64094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47315__auto__ = (function (){var statearr_64182 = f__47314__auto__.call(null);
(statearr_64182[(6)] = c__47313__auto__);

return statearr_64182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__,map__63939,map__63939__$1,opts,before_jsload,on_jsload,reload_dependents,map__63940,map__63940__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47313__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__64245,link){
var map__64246 = p__64245;
var map__64246__$1 = ((((!((map__64246 == null)))?((((map__64246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64246.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64246):map__64246);
var file = cljs.core.get.call(null,map__64246__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__64246,map__64246__$1,file){
return (function (p1__64243_SHARP_,p2__64244_SHARP_){
if(cljs.core._EQ_.call(null,p1__64243_SHARP_,p2__64244_SHARP_)){
return p1__64243_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__64246,map__64246__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__64249){
var map__64250 = p__64249;
var map__64250__$1 = ((((!((map__64250 == null)))?((((map__64250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64250.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64250):map__64250);
var match_length = cljs.core.get.call(null,map__64250__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__64250__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__64248_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__64248_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__64252_SHARP_,p2__64253_SHARP_){
return cljs.core.assoc.call(null,p1__64252_SHARP_,cljs.core.get.call(null,p2__64253_SHARP_,key),p2__64253_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_64254 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_64254);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_64254);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__64255,p__64256){
var map__64257 = p__64255;
var map__64257__$1 = ((((!((map__64257 == null)))?((((map__64257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64257.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64257):map__64257);
var on_cssload = cljs.core.get.call(null,map__64257__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__64258 = p__64256;
var map__64258__$1 = ((((!((map__64258 == null)))?((((map__64258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64258.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64258):map__64258);
var files_msg = map__64258__$1;
var files = cljs.core.get.call(null,map__64258__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1510936794976
