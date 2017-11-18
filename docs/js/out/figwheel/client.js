// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.14";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e65347){if((e65347 instanceof Error)){
var e = e65347;
return "Error: Unable to stringify";
} else {
throw e65347;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__65350 = arguments.length;
switch (G__65350) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__65348_SHARP_){
if(typeof p1__65348_SHARP_ === 'string'){
return p1__65348_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__65348_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45199__auto__ = [];
var len__45192__auto___65353 = arguments.length;
var i__45193__auto___65354 = (0);
while(true){
if((i__45193__auto___65354 < len__45192__auto___65353)){
args__45199__auto__.push((arguments[i__45193__auto___65354]));

var G__65355 = (i__45193__auto___65354 + (1));
i__45193__auto___65354 = G__65355;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq65352){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65352));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45199__auto__ = [];
var len__45192__auto___65357 = arguments.length;
var i__45193__auto___65358 = (0);
while(true){
if((i__45193__auto___65358 < len__45192__auto___65357)){
args__45199__auto__.push((arguments[i__45193__auto___65358]));

var G__65359 = (i__45193__auto___65358 + (1));
i__45193__auto___65358 = G__65359;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq65356){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65356));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__65360){
var map__65361 = p__65360;
var map__65361__$1 = ((((!((map__65361 == null)))?((((map__65361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65361):map__65361);
var message = cljs.core.get.call(null,map__65361__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__65361__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44021__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44009__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44009__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44009__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__47313__auto___65440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___65440,ch){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___65440,ch){
return (function (state_65412){
var state_val_65413 = (state_65412[(1)]);
if((state_val_65413 === (7))){
var inst_65408 = (state_65412[(2)]);
var state_65412__$1 = state_65412;
var statearr_65414_65441 = state_65412__$1;
(statearr_65414_65441[(2)] = inst_65408);

(statearr_65414_65441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (1))){
var state_65412__$1 = state_65412;
var statearr_65415_65442 = state_65412__$1;
(statearr_65415_65442[(2)] = null);

(statearr_65415_65442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (4))){
var inst_65365 = (state_65412[(7)]);
var inst_65365__$1 = (state_65412[(2)]);
var state_65412__$1 = (function (){var statearr_65416 = state_65412;
(statearr_65416[(7)] = inst_65365__$1);

return statearr_65416;
})();
if(cljs.core.truth_(inst_65365__$1)){
var statearr_65417_65443 = state_65412__$1;
(statearr_65417_65443[(1)] = (5));

} else {
var statearr_65418_65444 = state_65412__$1;
(statearr_65418_65444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (15))){
var inst_65372 = (state_65412[(8)]);
var inst_65387 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65372);
var inst_65388 = cljs.core.first.call(null,inst_65387);
var inst_65389 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_65388);
var inst_65390 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65389)].join('');
var inst_65391 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_65390);
var state_65412__$1 = state_65412;
var statearr_65419_65445 = state_65412__$1;
(statearr_65419_65445[(2)] = inst_65391);

(statearr_65419_65445[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (13))){
var inst_65396 = (state_65412[(2)]);
var state_65412__$1 = state_65412;
var statearr_65420_65446 = state_65412__$1;
(statearr_65420_65446[(2)] = inst_65396);

(statearr_65420_65446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (6))){
var state_65412__$1 = state_65412;
var statearr_65421_65447 = state_65412__$1;
(statearr_65421_65447[(2)] = null);

(statearr_65421_65447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (17))){
var inst_65394 = (state_65412[(2)]);
var state_65412__$1 = state_65412;
var statearr_65422_65448 = state_65412__$1;
(statearr_65422_65448[(2)] = inst_65394);

(statearr_65422_65448[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (3))){
var inst_65410 = (state_65412[(2)]);
var state_65412__$1 = state_65412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65412__$1,inst_65410);
} else {
if((state_val_65413 === (12))){
var inst_65371 = (state_65412[(9)]);
var inst_65385 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_65371,opts);
var state_65412__$1 = state_65412;
if(cljs.core.truth_(inst_65385)){
var statearr_65423_65449 = state_65412__$1;
(statearr_65423_65449[(1)] = (15));

} else {
var statearr_65424_65450 = state_65412__$1;
(statearr_65424_65450[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (2))){
var state_65412__$1 = state_65412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65412__$1,(4),ch);
} else {
if((state_val_65413 === (11))){
var inst_65372 = (state_65412[(8)]);
var inst_65377 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65378 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_65372);
var inst_65379 = cljs.core.async.timeout.call(null,(1000));
var inst_65380 = [inst_65378,inst_65379];
var inst_65381 = (new cljs.core.PersistentVector(null,2,(5),inst_65377,inst_65380,null));
var state_65412__$1 = state_65412;
return cljs.core.async.ioc_alts_BANG_.call(null,state_65412__$1,(14),inst_65381);
} else {
if((state_val_65413 === (9))){
var inst_65372 = (state_65412[(8)]);
var inst_65398 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_65399 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_65372);
var inst_65400 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_65399);
var inst_65401 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_65400)].join('');
var inst_65402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_65401);
var state_65412__$1 = (function (){var statearr_65425 = state_65412;
(statearr_65425[(10)] = inst_65398);

return statearr_65425;
})();
var statearr_65426_65451 = state_65412__$1;
(statearr_65426_65451[(2)] = inst_65402);

(statearr_65426_65451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (5))){
var inst_65365 = (state_65412[(7)]);
var inst_65367 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_65368 = (new cljs.core.PersistentArrayMap(null,2,inst_65367,null));
var inst_65369 = (new cljs.core.PersistentHashSet(null,inst_65368,null));
var inst_65370 = figwheel.client.focus_msgs.call(null,inst_65369,inst_65365);
var inst_65371 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_65370);
var inst_65372 = cljs.core.first.call(null,inst_65370);
var inst_65373 = figwheel.client.autoload_QMARK_.call(null);
var state_65412__$1 = (function (){var statearr_65427 = state_65412;
(statearr_65427[(8)] = inst_65372);

(statearr_65427[(9)] = inst_65371);

return statearr_65427;
})();
if(cljs.core.truth_(inst_65373)){
var statearr_65428_65452 = state_65412__$1;
(statearr_65428_65452[(1)] = (8));

} else {
var statearr_65429_65453 = state_65412__$1;
(statearr_65429_65453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (14))){
var inst_65383 = (state_65412[(2)]);
var state_65412__$1 = state_65412;
var statearr_65430_65454 = state_65412__$1;
(statearr_65430_65454[(2)] = inst_65383);

(statearr_65430_65454[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (16))){
var state_65412__$1 = state_65412;
var statearr_65431_65455 = state_65412__$1;
(statearr_65431_65455[(2)] = null);

(statearr_65431_65455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (10))){
var inst_65404 = (state_65412[(2)]);
var state_65412__$1 = (function (){var statearr_65432 = state_65412;
(statearr_65432[(11)] = inst_65404);

return statearr_65432;
})();
var statearr_65433_65456 = state_65412__$1;
(statearr_65433_65456[(2)] = null);

(statearr_65433_65456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65413 === (8))){
var inst_65371 = (state_65412[(9)]);
var inst_65375 = figwheel.client.reload_file_state_QMARK_.call(null,inst_65371,opts);
var state_65412__$1 = state_65412;
if(cljs.core.truth_(inst_65375)){
var statearr_65434_65457 = state_65412__$1;
(statearr_65434_65457[(1)] = (11));

} else {
var statearr_65435_65458 = state_65412__$1;
(statearr_65435_65458[(1)] = (12));

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
});})(c__47313__auto___65440,ch))
;
return ((function (switch__47292__auto__,c__47313__auto___65440,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__47293__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__47293__auto____0 = (function (){
var statearr_65436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65436[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__47293__auto__);

(statearr_65436[(1)] = (1));

return statearr_65436;
});
var figwheel$client$file_reloader_plugin_$_state_machine__47293__auto____1 = (function (state_65412){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_65412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e65437){if((e65437 instanceof Object)){
var ex__47296__auto__ = e65437;
var statearr_65438_65459 = state_65412;
(statearr_65438_65459[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65460 = state_65412;
state_65412 = G__65460;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__47293__auto__ = function(state_65412){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__47293__auto____1.call(this,state_65412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__47293__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__47293__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___65440,ch))
})();
var state__47315__auto__ = (function (){var statearr_65439 = f__47314__auto__.call(null);
(statearr_65439[(6)] = c__47313__auto___65440);

return statearr_65439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___65440,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__65461_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__65461_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_65463 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_65463){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e65462){if((e65462 instanceof Error)){
var e = e65462;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_65463], null));
} else {
var e = e65462;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_65463))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__65464){
var map__65465 = p__65464;
var map__65465__$1 = ((((!((map__65465 == null)))?((((map__65465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65465.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65465):map__65465);
var opts = map__65465__$1;
var build_id = cljs.core.get.call(null,map__65465__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__65465,map__65465__$1,opts,build_id){
return (function (p__65467){
var vec__65468 = p__65467;
var seq__65469 = cljs.core.seq.call(null,vec__65468);
var first__65470 = cljs.core.first.call(null,seq__65469);
var seq__65469__$1 = cljs.core.next.call(null,seq__65469);
var map__65471 = first__65470;
var map__65471__$1 = ((((!((map__65471 == null)))?((((map__65471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65471):map__65471);
var msg = map__65471__$1;
var msg_name = cljs.core.get.call(null,map__65471__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65469__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__65468,seq__65469,first__65470,seq__65469__$1,map__65471,map__65471__$1,msg,msg_name,_,map__65465,map__65465__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__65468,seq__65469,first__65470,seq__65469__$1,map__65471,map__65471__$1,msg,msg_name,_,map__65465,map__65465__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__65465,map__65465__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__65473){
var vec__65474 = p__65473;
var seq__65475 = cljs.core.seq.call(null,vec__65474);
var first__65476 = cljs.core.first.call(null,seq__65475);
var seq__65475__$1 = cljs.core.next.call(null,seq__65475);
var map__65477 = first__65476;
var map__65477__$1 = ((((!((map__65477 == null)))?((((map__65477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65477):map__65477);
var msg = map__65477__$1;
var msg_name = cljs.core.get.call(null,map__65477__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65475__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__65479){
var map__65480 = p__65479;
var map__65480__$1 = ((((!((map__65480 == null)))?((((map__65480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65480):map__65480);
var on_compile_warning = cljs.core.get.call(null,map__65480__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__65480__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__65480,map__65480__$1,on_compile_warning,on_compile_fail){
return (function (p__65482){
var vec__65483 = p__65482;
var seq__65484 = cljs.core.seq.call(null,vec__65483);
var first__65485 = cljs.core.first.call(null,seq__65484);
var seq__65484__$1 = cljs.core.next.call(null,seq__65484);
var map__65486 = first__65485;
var map__65486__$1 = ((((!((map__65486 == null)))?((((map__65486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65486.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65486):map__65486);
var msg = map__65486__$1;
var msg_name = cljs.core.get.call(null,map__65486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__65484__$1;
var pred__65488 = cljs.core._EQ_;
var expr__65489 = msg_name;
if(cljs.core.truth_(pred__65488.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__65489))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__65488.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__65489))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__65480,map__65480__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__,msg_hist,msg_names,msg){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__,msg_hist,msg_names,msg){
return (function (state_65578){
var state_val_65579 = (state_65578[(1)]);
if((state_val_65579 === (7))){
var inst_65498 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65498)){
var statearr_65580_65627 = state_65578__$1;
(statearr_65580_65627[(1)] = (8));

} else {
var statearr_65581_65628 = state_65578__$1;
(statearr_65581_65628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (20))){
var inst_65572 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65582_65629 = state_65578__$1;
(statearr_65582_65629[(2)] = inst_65572);

(statearr_65582_65629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (27))){
var inst_65568 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65583_65630 = state_65578__$1;
(statearr_65583_65630[(2)] = inst_65568);

(statearr_65583_65630[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (1))){
var inst_65491 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65491)){
var statearr_65584_65631 = state_65578__$1;
(statearr_65584_65631[(1)] = (2));

} else {
var statearr_65585_65632 = state_65578__$1;
(statearr_65585_65632[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (24))){
var inst_65570 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65586_65633 = state_65578__$1;
(statearr_65586_65633[(2)] = inst_65570);

(statearr_65586_65633[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (4))){
var inst_65576 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65578__$1,inst_65576);
} else {
if((state_val_65579 === (15))){
var inst_65574 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65587_65634 = state_65578__$1;
(statearr_65587_65634[(2)] = inst_65574);

(statearr_65587_65634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (21))){
var inst_65527 = (state_65578[(2)]);
var inst_65528 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65529 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65528);
var state_65578__$1 = (function (){var statearr_65588 = state_65578;
(statearr_65588[(7)] = inst_65527);

return statearr_65588;
})();
var statearr_65589_65635 = state_65578__$1;
(statearr_65589_65635[(2)] = inst_65529);

(statearr_65589_65635[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (31))){
var inst_65557 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65557)){
var statearr_65590_65636 = state_65578__$1;
(statearr_65590_65636[(1)] = (34));

} else {
var statearr_65591_65637 = state_65578__$1;
(statearr_65591_65637[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (32))){
var inst_65566 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65592_65638 = state_65578__$1;
(statearr_65592_65638[(2)] = inst_65566);

(statearr_65592_65638[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (33))){
var inst_65553 = (state_65578[(2)]);
var inst_65554 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65555 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65554);
var state_65578__$1 = (function (){var statearr_65593 = state_65578;
(statearr_65593[(8)] = inst_65553);

return statearr_65593;
})();
var statearr_65594_65639 = state_65578__$1;
(statearr_65594_65639[(2)] = inst_65555);

(statearr_65594_65639[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (13))){
var inst_65512 = figwheel.client.heads_up.clear.call(null);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(16),inst_65512);
} else {
if((state_val_65579 === (22))){
var inst_65533 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65534 = figwheel.client.heads_up.append_warning_message.call(null,inst_65533);
var state_65578__$1 = state_65578;
var statearr_65595_65640 = state_65578__$1;
(statearr_65595_65640[(2)] = inst_65534);

(statearr_65595_65640[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (36))){
var inst_65564 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65596_65641 = state_65578__$1;
(statearr_65596_65641[(2)] = inst_65564);

(statearr_65596_65641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (29))){
var inst_65544 = (state_65578[(2)]);
var inst_65545 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65546 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65545);
var state_65578__$1 = (function (){var statearr_65597 = state_65578;
(statearr_65597[(9)] = inst_65544);

return statearr_65597;
})();
var statearr_65598_65642 = state_65578__$1;
(statearr_65598_65642[(2)] = inst_65546);

(statearr_65598_65642[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (6))){
var inst_65493 = (state_65578[(10)]);
var state_65578__$1 = state_65578;
var statearr_65599_65643 = state_65578__$1;
(statearr_65599_65643[(2)] = inst_65493);

(statearr_65599_65643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (28))){
var inst_65540 = (state_65578[(2)]);
var inst_65541 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65542 = figwheel.client.heads_up.display_warning.call(null,inst_65541);
var state_65578__$1 = (function (){var statearr_65600 = state_65578;
(statearr_65600[(11)] = inst_65540);

return statearr_65600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(29),inst_65542);
} else {
if((state_val_65579 === (25))){
var inst_65538 = figwheel.client.heads_up.clear.call(null);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(28),inst_65538);
} else {
if((state_val_65579 === (34))){
var inst_65559 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(37),inst_65559);
} else {
if((state_val_65579 === (17))){
var inst_65518 = (state_65578[(2)]);
var inst_65519 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65520 = figwheel.client.auto_jump_to_error.call(null,opts,inst_65519);
var state_65578__$1 = (function (){var statearr_65601 = state_65578;
(statearr_65601[(12)] = inst_65518);

return statearr_65601;
})();
var statearr_65602_65644 = state_65578__$1;
(statearr_65602_65644[(2)] = inst_65520);

(statearr_65602_65644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (3))){
var inst_65510 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65510)){
var statearr_65603_65645 = state_65578__$1;
(statearr_65603_65645[(1)] = (13));

} else {
var statearr_65604_65646 = state_65578__$1;
(statearr_65604_65646[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (12))){
var inst_65506 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65605_65647 = state_65578__$1;
(statearr_65605_65647[(2)] = inst_65506);

(statearr_65605_65647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (2))){
var inst_65493 = (state_65578[(10)]);
var inst_65493__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_65578__$1 = (function (){var statearr_65606 = state_65578;
(statearr_65606[(10)] = inst_65493__$1);

return statearr_65606;
})();
if(cljs.core.truth_(inst_65493__$1)){
var statearr_65607_65648 = state_65578__$1;
(statearr_65607_65648[(1)] = (5));

} else {
var statearr_65608_65649 = state_65578__$1;
(statearr_65608_65649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (23))){
var inst_65536 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65536)){
var statearr_65609_65650 = state_65578__$1;
(statearr_65609_65650[(1)] = (25));

} else {
var statearr_65610_65651 = state_65578__$1;
(statearr_65610_65651[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (35))){
var state_65578__$1 = state_65578;
var statearr_65611_65652 = state_65578__$1;
(statearr_65611_65652[(2)] = null);

(statearr_65611_65652[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (19))){
var inst_65531 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65531)){
var statearr_65612_65653 = state_65578__$1;
(statearr_65612_65653[(1)] = (22));

} else {
var statearr_65613_65654 = state_65578__$1;
(statearr_65613_65654[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (11))){
var inst_65502 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65614_65655 = state_65578__$1;
(statearr_65614_65655[(2)] = inst_65502);

(statearr_65614_65655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (9))){
var inst_65504 = figwheel.client.heads_up.clear.call(null);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(12),inst_65504);
} else {
if((state_val_65579 === (5))){
var inst_65495 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_65578__$1 = state_65578;
var statearr_65615_65656 = state_65578__$1;
(statearr_65615_65656[(2)] = inst_65495);

(statearr_65615_65656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (14))){
var inst_65522 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65522)){
var statearr_65616_65657 = state_65578__$1;
(statearr_65616_65657[(1)] = (18));

} else {
var statearr_65617_65658 = state_65578__$1;
(statearr_65617_65658[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (26))){
var inst_65548 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_65578__$1 = state_65578;
if(cljs.core.truth_(inst_65548)){
var statearr_65618_65659 = state_65578__$1;
(statearr_65618_65659[(1)] = (30));

} else {
var statearr_65619_65660 = state_65578__$1;
(statearr_65619_65660[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (16))){
var inst_65514 = (state_65578[(2)]);
var inst_65515 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65516 = figwheel.client.heads_up.display_exception.call(null,inst_65515);
var state_65578__$1 = (function (){var statearr_65620 = state_65578;
(statearr_65620[(13)] = inst_65514);

return statearr_65620;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(17),inst_65516);
} else {
if((state_val_65579 === (30))){
var inst_65550 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65551 = figwheel.client.heads_up.display_warning.call(null,inst_65550);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(33),inst_65551);
} else {
if((state_val_65579 === (10))){
var inst_65508 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65621_65661 = state_65578__$1;
(statearr_65621_65661[(2)] = inst_65508);

(statearr_65621_65661[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (18))){
var inst_65524 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65525 = figwheel.client.heads_up.display_exception.call(null,inst_65524);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(21),inst_65525);
} else {
if((state_val_65579 === (37))){
var inst_65561 = (state_65578[(2)]);
var state_65578__$1 = state_65578;
var statearr_65622_65662 = state_65578__$1;
(statearr_65622_65662[(2)] = inst_65561);

(statearr_65622_65662[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65579 === (8))){
var inst_65500 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65578__$1 = state_65578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65578__$1,(11),inst_65500);
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
});})(c__47313__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__47292__auto__,c__47313__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto____0 = (function (){
var statearr_65623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65623[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto__);

(statearr_65623[(1)] = (1));

return statearr_65623;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto____1 = (function (state_65578){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_65578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e65624){if((e65624 instanceof Object)){
var ex__47296__auto__ = e65624;
var statearr_65625_65663 = state_65578;
(statearr_65625_65663[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65664 = state_65578;
state_65578 = G__65664;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto__ = function(state_65578){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto____1.call(this,state_65578);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__,msg_hist,msg_names,msg))
})();
var state__47315__auto__ = (function (){var statearr_65626 = f__47314__auto__.call(null);
(statearr_65626[(6)] = c__47313__auto__);

return statearr_65626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__,msg_hist,msg_names,msg))
);

return c__47313__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__47313__auto___65693 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto___65693,ch){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto___65693,ch){
return (function (state_65679){
var state_val_65680 = (state_65679[(1)]);
if((state_val_65680 === (1))){
var state_65679__$1 = state_65679;
var statearr_65681_65694 = state_65679__$1;
(statearr_65681_65694[(2)] = null);

(statearr_65681_65694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65680 === (2))){
var state_65679__$1 = state_65679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65679__$1,(4),ch);
} else {
if((state_val_65680 === (3))){
var inst_65677 = (state_65679[(2)]);
var state_65679__$1 = state_65679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65679__$1,inst_65677);
} else {
if((state_val_65680 === (4))){
var inst_65667 = (state_65679[(7)]);
var inst_65667__$1 = (state_65679[(2)]);
var state_65679__$1 = (function (){var statearr_65682 = state_65679;
(statearr_65682[(7)] = inst_65667__$1);

return statearr_65682;
})();
if(cljs.core.truth_(inst_65667__$1)){
var statearr_65683_65695 = state_65679__$1;
(statearr_65683_65695[(1)] = (5));

} else {
var statearr_65684_65696 = state_65679__$1;
(statearr_65684_65696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65680 === (5))){
var inst_65667 = (state_65679[(7)]);
var inst_65669 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_65667);
var state_65679__$1 = state_65679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65679__$1,(8),inst_65669);
} else {
if((state_val_65680 === (6))){
var state_65679__$1 = state_65679;
var statearr_65685_65697 = state_65679__$1;
(statearr_65685_65697[(2)] = null);

(statearr_65685_65697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65680 === (7))){
var inst_65675 = (state_65679[(2)]);
var state_65679__$1 = state_65679;
var statearr_65686_65698 = state_65679__$1;
(statearr_65686_65698[(2)] = inst_65675);

(statearr_65686_65698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65680 === (8))){
var inst_65671 = (state_65679[(2)]);
var state_65679__$1 = (function (){var statearr_65687 = state_65679;
(statearr_65687[(8)] = inst_65671);

return statearr_65687;
})();
var statearr_65688_65699 = state_65679__$1;
(statearr_65688_65699[(2)] = null);

(statearr_65688_65699[(1)] = (2));


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
});})(c__47313__auto___65693,ch))
;
return ((function (switch__47292__auto__,c__47313__auto___65693,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__47293__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__47293__auto____0 = (function (){
var statearr_65689 = [null,null,null,null,null,null,null,null,null];
(statearr_65689[(0)] = figwheel$client$heads_up_plugin_$_state_machine__47293__auto__);

(statearr_65689[(1)] = (1));

return statearr_65689;
});
var figwheel$client$heads_up_plugin_$_state_machine__47293__auto____1 = (function (state_65679){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_65679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e65690){if((e65690 instanceof Object)){
var ex__47296__auto__ = e65690;
var statearr_65691_65700 = state_65679;
(statearr_65691_65700[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65701 = state_65679;
state_65679 = G__65701;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__47293__auto__ = function(state_65679){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__47293__auto____1.call(this,state_65679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__47293__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__47293__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto___65693,ch))
})();
var state__47315__auto__ = (function (){var statearr_65692 = f__47314__auto__.call(null);
(statearr_65692[(6)] = c__47313__auto___65693);

return statearr_65692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto___65693,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__){
return (function (state_65707){
var state_val_65708 = (state_65707[(1)]);
if((state_val_65708 === (1))){
var inst_65702 = cljs.core.async.timeout.call(null,(3000));
var state_65707__$1 = state_65707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65707__$1,(2),inst_65702);
} else {
if((state_val_65708 === (2))){
var inst_65704 = (state_65707[(2)]);
var inst_65705 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_65707__$1 = (function (){var statearr_65709 = state_65707;
(statearr_65709[(7)] = inst_65704);

return statearr_65709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65707__$1,inst_65705);
} else {
return null;
}
}
});})(c__47313__auto__))
;
return ((function (switch__47292__auto__,c__47313__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__47293__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__47293__auto____0 = (function (){
var statearr_65710 = [null,null,null,null,null,null,null,null];
(statearr_65710[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__47293__auto__);

(statearr_65710[(1)] = (1));

return statearr_65710;
});
var figwheel$client$enforce_project_plugin_$_state_machine__47293__auto____1 = (function (state_65707){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_65707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e65711){if((e65711 instanceof Object)){
var ex__47296__auto__ = e65711;
var statearr_65712_65714 = state_65707;
(statearr_65712_65714[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65715 = state_65707;
state_65707 = G__65715;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__47293__auto__ = function(state_65707){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__47293__auto____1.call(this,state_65707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__47293__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__47293__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__))
})();
var state__47315__auto__ = (function (){var statearr_65713 = f__47314__auto__.call(null);
(statearr_65713[(6)] = c__47313__auto__);

return statearr_65713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__))
);

return c__47313__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__47313__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47313__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__47314__auto__ = (function (){var switch__47292__auto__ = ((function (c__47313__auto__,figwheel_version,temp__4657__auto__){
return (function (state_65722){
var state_val_65723 = (state_65722[(1)]);
if((state_val_65723 === (1))){
var inst_65716 = cljs.core.async.timeout.call(null,(2000));
var state_65722__$1 = state_65722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65722__$1,(2),inst_65716);
} else {
if((state_val_65723 === (2))){
var inst_65718 = (state_65722[(2)]);
var inst_65719 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_65720 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_65719);
var state_65722__$1 = (function (){var statearr_65724 = state_65722;
(statearr_65724[(7)] = inst_65718);

return statearr_65724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65722__$1,inst_65720);
} else {
return null;
}
}
});})(c__47313__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__47292__auto__,c__47313__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto____0 = (function (){
var statearr_65725 = [null,null,null,null,null,null,null,null];
(statearr_65725[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto__);

(statearr_65725[(1)] = (1));

return statearr_65725;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto____1 = (function (state_65722){
while(true){
var ret_value__47294__auto__ = (function (){try{while(true){
var result__47295__auto__ = switch__47292__auto__.call(null,state_65722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47295__auto__;
}
break;
}
}catch (e65726){if((e65726 instanceof Object)){
var ex__47296__auto__ = e65726;
var statearr_65727_65729 = state_65722;
(statearr_65727_65729[(5)] = ex__47296__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65730 = state_65722;
state_65722 = G__65730;
continue;
} else {
return ret_value__47294__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto__ = function(state_65722){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto____1.call(this,state_65722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47293__auto__;
})()
;})(switch__47292__auto__,c__47313__auto__,figwheel_version,temp__4657__auto__))
})();
var state__47315__auto__ = (function (){var statearr_65728 = f__47314__auto__.call(null);
(statearr_65728[(6)] = c__47313__auto__);

return statearr_65728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47315__auto__);
});})(c__47313__auto__,figwheel_version,temp__4657__auto__))
);

return c__47313__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__65731){
var map__65732 = p__65731;
var map__65732__$1 = ((((!((map__65732 == null)))?((((map__65732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65732):map__65732);
var file = cljs.core.get.call(null,map__65732__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__65732__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__65732__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__65734 = "";
var G__65734__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65734),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__65734);
var G__65734__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65734__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__65734__$1);
if(cljs.core.truth_((function (){var and__44009__auto__ = line;
if(cljs.core.truth_(and__44009__auto__)){
return column;
} else {
return and__44009__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65734__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__65734__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__65735){
var map__65736 = p__65735;
var map__65736__$1 = ((((!((map__65736 == null)))?((((map__65736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65736):map__65736);
var ed = map__65736__$1;
var formatted_exception = cljs.core.get.call(null,map__65736__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__65736__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__65736__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__65738_65742 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__65739_65743 = null;
var count__65740_65744 = (0);
var i__65741_65745 = (0);
while(true){
if((i__65741_65745 < count__65740_65744)){
var msg_65746 = cljs.core._nth.call(null,chunk__65739_65743,i__65741_65745);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_65746);

var G__65747 = seq__65738_65742;
var G__65748 = chunk__65739_65743;
var G__65749 = count__65740_65744;
var G__65750 = (i__65741_65745 + (1));
seq__65738_65742 = G__65747;
chunk__65739_65743 = G__65748;
count__65740_65744 = G__65749;
i__65741_65745 = G__65750;
continue;
} else {
var temp__4657__auto___65751 = cljs.core.seq.call(null,seq__65738_65742);
if(temp__4657__auto___65751){
var seq__65738_65752__$1 = temp__4657__auto___65751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65738_65752__$1)){
var c__44860__auto___65753 = cljs.core.chunk_first.call(null,seq__65738_65752__$1);
var G__65754 = cljs.core.chunk_rest.call(null,seq__65738_65752__$1);
var G__65755 = c__44860__auto___65753;
var G__65756 = cljs.core.count.call(null,c__44860__auto___65753);
var G__65757 = (0);
seq__65738_65742 = G__65754;
chunk__65739_65743 = G__65755;
count__65740_65744 = G__65756;
i__65741_65745 = G__65757;
continue;
} else {
var msg_65758 = cljs.core.first.call(null,seq__65738_65752__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_65758);

var G__65759 = cljs.core.next.call(null,seq__65738_65752__$1);
var G__65760 = null;
var G__65761 = (0);
var G__65762 = (0);
seq__65738_65742 = G__65759;
chunk__65739_65743 = G__65760;
count__65740_65744 = G__65761;
i__65741_65745 = G__65762;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__65763){
var map__65764 = p__65763;
var map__65764__$1 = ((((!((map__65764 == null)))?((((map__65764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65764):map__65764);
var w = map__65764__$1;
var message = cljs.core.get.call(null,map__65764__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__44009__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44009__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44009__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__65766 = cljs.core.seq.call(null,plugins);
var chunk__65767 = null;
var count__65768 = (0);
var i__65769 = (0);
while(true){
if((i__65769 < count__65768)){
var vec__65770 = cljs.core._nth.call(null,chunk__65767,i__65769);
var k = cljs.core.nth.call(null,vec__65770,(0),null);
var plugin = cljs.core.nth.call(null,vec__65770,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65776 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65766,chunk__65767,count__65768,i__65769,pl_65776,vec__65770,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_65776.call(null,msg_hist);
});})(seq__65766,chunk__65767,count__65768,i__65769,pl_65776,vec__65770,k,plugin))
);
} else {
}

var G__65777 = seq__65766;
var G__65778 = chunk__65767;
var G__65779 = count__65768;
var G__65780 = (i__65769 + (1));
seq__65766 = G__65777;
chunk__65767 = G__65778;
count__65768 = G__65779;
i__65769 = G__65780;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__65766);
if(temp__4657__auto__){
var seq__65766__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65766__$1)){
var c__44860__auto__ = cljs.core.chunk_first.call(null,seq__65766__$1);
var G__65781 = cljs.core.chunk_rest.call(null,seq__65766__$1);
var G__65782 = c__44860__auto__;
var G__65783 = cljs.core.count.call(null,c__44860__auto__);
var G__65784 = (0);
seq__65766 = G__65781;
chunk__65767 = G__65782;
count__65768 = G__65783;
i__65769 = G__65784;
continue;
} else {
var vec__65773 = cljs.core.first.call(null,seq__65766__$1);
var k = cljs.core.nth.call(null,vec__65773,(0),null);
var plugin = cljs.core.nth.call(null,vec__65773,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65785 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65766,chunk__65767,count__65768,i__65769,pl_65785,vec__65773,k,plugin,seq__65766__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_65785.call(null,msg_hist);
});})(seq__65766,chunk__65767,count__65768,i__65769,pl_65785,vec__65773,k,plugin,seq__65766__$1,temp__4657__auto__))
);
} else {
}

var G__65786 = cljs.core.next.call(null,seq__65766__$1);
var G__65787 = null;
var G__65788 = (0);
var G__65789 = (0);
seq__65766 = G__65786;
chunk__65767 = G__65787;
count__65768 = G__65788;
i__65769 = G__65789;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__65791 = arguments.length;
switch (G__65791) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__65792_65797 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__65793_65798 = null;
var count__65794_65799 = (0);
var i__65795_65800 = (0);
while(true){
if((i__65795_65800 < count__65794_65799)){
var msg_65801 = cljs.core._nth.call(null,chunk__65793_65798,i__65795_65800);
figwheel.client.socket.handle_incoming_message.call(null,msg_65801);

var G__65802 = seq__65792_65797;
var G__65803 = chunk__65793_65798;
var G__65804 = count__65794_65799;
var G__65805 = (i__65795_65800 + (1));
seq__65792_65797 = G__65802;
chunk__65793_65798 = G__65803;
count__65794_65799 = G__65804;
i__65795_65800 = G__65805;
continue;
} else {
var temp__4657__auto___65806 = cljs.core.seq.call(null,seq__65792_65797);
if(temp__4657__auto___65806){
var seq__65792_65807__$1 = temp__4657__auto___65806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65792_65807__$1)){
var c__44860__auto___65808 = cljs.core.chunk_first.call(null,seq__65792_65807__$1);
var G__65809 = cljs.core.chunk_rest.call(null,seq__65792_65807__$1);
var G__65810 = c__44860__auto___65808;
var G__65811 = cljs.core.count.call(null,c__44860__auto___65808);
var G__65812 = (0);
seq__65792_65797 = G__65809;
chunk__65793_65798 = G__65810;
count__65794_65799 = G__65811;
i__65795_65800 = G__65812;
continue;
} else {
var msg_65813 = cljs.core.first.call(null,seq__65792_65807__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_65813);

var G__65814 = cljs.core.next.call(null,seq__65792_65807__$1);
var G__65815 = null;
var G__65816 = (0);
var G__65817 = (0);
seq__65792_65797 = G__65814;
chunk__65793_65798 = G__65815;
count__65794_65799 = G__65816;
i__65795_65800 = G__65817;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45199__auto__ = [];
var len__45192__auto___65822 = arguments.length;
var i__45193__auto___65823 = (0);
while(true){
if((i__45193__auto___65823 < len__45192__auto___65822)){
args__45199__auto__.push((arguments[i__45193__auto___65823]));

var G__65824 = (i__45193__auto___65823 + (1));
i__45193__auto___65823 = G__65824;
continue;
} else {
}
break;
}

var argseq__45200__auto__ = ((((0) < args__45199__auto__.length))?(new cljs.core.IndexedSeq(args__45199__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45200__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__65819){
var map__65820 = p__65819;
var map__65820__$1 = ((((!((map__65820 == null)))?((((map__65820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65820.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65820):map__65820);
var opts = map__65820__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq65818){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65818));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e65825){if((e65825 instanceof Error)){
var e = e65825;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e65825;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__65826){
var map__65827 = p__65826;
var map__65827__$1 = ((((!((map__65827 == null)))?((((map__65827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65827):map__65827);
var msg_name = cljs.core.get.call(null,map__65827__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1510936797333
