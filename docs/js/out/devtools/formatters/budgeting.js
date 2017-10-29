// Compiled by ClojureScript 1.9.946 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__46283__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__46283__auto__["add"]).call(o__46283__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__46283__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__46283__auto__["delete"]).call(o__46283__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__46283__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__46283__auto__["has"]).call(o__46283__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__60911 = data;
var target__46288__auto__ = G__60911;
if(cljs.core.truth_(target__46288__auto__)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["unable to locate object path ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(null)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60911)].join('')),"\n","target__46288__auto__"].join('')));
}

(target__46288__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__60911;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_60916 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_60916);
} else {
var seq__60912_60917 = cljs.core.seq.call(null,json_ml);
var chunk__60913_60918 = null;
var count__60914_60919 = (0);
var i__60915_60920 = (0);
while(true){
if((i__60915_60920 < count__60914_60919)){
var item_60921 = cljs.core._nth.call(null,chunk__60913_60918,i__60915_60920);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_60921,new_depth_budget_60916);

var G__60922 = seq__60912_60917;
var G__60923 = chunk__60913_60918;
var G__60924 = count__60914_60919;
var G__60925 = (i__60915_60920 + (1));
seq__60912_60917 = G__60922;
chunk__60913_60918 = G__60923;
count__60914_60919 = G__60924;
i__60915_60920 = G__60925;
continue;
} else {
var temp__4657__auto___60926 = cljs.core.seq.call(null,seq__60912_60917);
if(temp__4657__auto___60926){
var seq__60912_60927__$1 = temp__4657__auto___60926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60912_60927__$1)){
var c__44860__auto___60928 = cljs.core.chunk_first.call(null,seq__60912_60927__$1);
var G__60929 = cljs.core.chunk_rest.call(null,seq__60912_60927__$1);
var G__60930 = c__44860__auto___60928;
var G__60931 = cljs.core.count.call(null,c__44860__auto___60928);
var G__60932 = (0);
seq__60912_60917 = G__60929;
chunk__60913_60918 = G__60930;
count__60914_60919 = G__60931;
i__60915_60920 = G__60932;
continue;
} else {
var item_60933 = cljs.core.first.call(null,seq__60912_60927__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_60933,new_depth_budget_60916);

var G__60934 = cljs.core.next.call(null,seq__60912_60927__$1);
var G__60935 = null;
var G__60936 = (0);
var G__60937 = (0);
seq__60912_60917 = G__60934;
chunk__60913_60918 = G__60935;
count__60914_60919 = G__60936;
i__60915_60920 = G__60937;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__44021__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1510936790831
