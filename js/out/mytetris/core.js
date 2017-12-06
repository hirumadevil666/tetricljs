// Compiled by ClojureScript 1.9.946 {}
goog.provide('mytetris.core');
goog.require('cljs.core');
goog.require('reagent.core');





























mytetris.core.window_width = reagent.core.atom.call(null,null);
mytetris.core.on_window_resize = (function mytetris$core$on_window_resize(evt){
return cljs.core.reset_BANG_.call(null,mytetris.core.window_width,window.innerWidth);
});
mytetris.core.div_with_canvas = (function mytetris$core$div_with_canvas(dom_node,state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return mytetris.core.draw_canvas_contents.call(null,document.getElementById("field"),cljs.core.deref.call(null,state));
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_.call(null,dom_node,reagent.core.dom_node.call(null,this$));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
cljs.core.deref.call(null,mytetris.core.window_width);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.with-canvas","div.with-canvas",1346023179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left","div.left",1530800130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#field","canvas#field",1436083734),(function (){var temp__4655__auto__ = cljs.core.deref.call(null,dom_node);
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),node.clientWidth,new cljs.core.Keyword(null,"height","height",1025178622),node.clientHeight], null);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right","div.right",1671235139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#next-block","canvas#next-block",291102840),(function (){var temp__4655__auto__ = cljs.core.deref.call(null,dom_node);
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),((5) * (node.clientWidth / mytetris.core.field_width)),new cljs.core.Keyword(null,"height","height",1025178622),((3) * (node.clientHeight / mytetris.core.field_height))], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mytetris.core.usage], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mytetris.core.score_field,state], null)], null)], null);
})], null));
});
mytetris.core.score_field = (function mytetris$core$score_field(state){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
return null;
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return null;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.score-field","div.score-field",-2144244818),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.erased","div.erased",1704271160),"erased ",cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"erased-lines","erased-lines",135254682))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.score","div.score",-360914498),"score ",cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"score","score",-1963588780))], null)], null);
})], null));
});
mytetris.core.render_button = (function mytetris$core$render_button(value,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.squre","button.squre",-750302749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),value], null);
});
mytetris.core.color_map = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(5),(8)],["rgb(180, 180, 180)","rgb(180, 30, 20)","rgb(50, 30, 100)","rgb(0, 180, 0)","rgb(0, 80, 180)","rgb(180, 0, 180)","rgb(0, 180, 180)","rgb(130, 50, 0)","rgb(100, 50, 20)"]);
mytetris.core.draw_block = (function mytetris$core$draw_block(ctx,block,x,y,cell_w,cell_h){
var draw_row = (function mytetris$core$draw_block_$_draw_row(row,row_index,ctx__$1,w,h){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12449_SHARP_){
(ctx__$1["fillStyle"] = mytetris.core.color_map.call(null,p1__12449_SHARP_.call(null,(1))));

return ctx__$1.fillRect(((p1__12449_SHARP_.call(null,(0)) + x) * w),((row_index + y) * h),(w - (3)),(h - (3)));
}),cljs.core.map_indexed.call(null,cljs.core.vector,row)));
});
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__12450_SHARP_){
return draw_row.call(null,p1__12450_SHARP_.call(null,(1)),p1__12450_SHARP_.call(null,(0)),ctx,cell_w,cell_h);
}),cljs.core.map_indexed.call(null,cljs.core.vector,block)));
});
mytetris.core.draw_next_block = (function mytetris$core$draw_next_block(canvas,block){
var ctx = canvas.getContext("2d");
var b = mytetris.core.move_block.call(null,block,(-3),(1));
var f = cljs.core.vec.call(null,cljs.core.repeat.call(null,(2),cljs.core.vec.call(null,cljs.core.repeat.call(null,(4),(0)))));
return mytetris.core.draw_block.call(null,ctx,mytetris.core.set_block.call(null,f,b),(0),(0),(25),(25));
});
mytetris.core.draw_canvas_contents = (function mytetris$core$draw_canvas_contents(canvas,state){
var ctx = canvas.getContext("2d");
var field = state.call(null,new cljs.core.Keyword(null,"field","field",-1302436500));
var block = state.call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var w = (canvas.clientWidth / mytetris.core.field_width);
var h = (canvas.clientHeight / mytetris.core.field_height);
if(!((block == null))){
return mytetris.core.draw_block.call(null,ctx,mytetris.core.set_block.call(null,field,block),(0),(0),w,h);
} else {
return mytetris.core.draw_block.call(null,ctx,field,(0),(0),w,h);
}
});
mytetris.core.initialize_state = (function mytetris$core$initialize_state(state){
cljs.core.swap_BANG_.call(null,state,(function (p1__12452_SHARP_,p2__12451_SHARP_){
return cljs.core.identity.call(null,p2__12451_SHARP_);
}),mytetris.core.make_initial_state.call(null));

return cljs.core.deref.call(null,state);
});
mytetris.core.key_down_handler = (function mytetris$core$key_down_handler(dom_node,state){
return (function (ev){
var get_new_block = (function mytetris$core$key_down_handler_$_get_new_block(e,b){
var G__12454 = ev.code;
switch (G__12454) {
case "ArrowRight":
return mytetris.core.move_right.call(null,b);

break;
case "ArrowLeft":
return mytetris.core.move_left.call(null,b);

break;
case "ArrowUp":
return mytetris.core.rot_left.call(null,b);

break;
case "ArrowDown":
return mytetris.core.rot_right.call(null,b);

break;
case "Space":
return mytetris.core.move_down.call(null,b);

break;
default:
return null;

}
});
if((cljs.core._EQ_.call(null,"keydown",ev.type)) && (!((cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970)) == null)))){
var new_block = get_new_block.call(null,ev,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970)));
var field = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"field","field",-1302436500));
if((new_block == null)){
return null;
} else {
if(cljs.core.truth_(mytetris.core.can_move_QMARK_.call(null,field,mytetris.core.get_block_pattern.call(null,new_block)))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),new_block);

return mytetris.core.draw_canvas_contents.call(null,document.getElementById("field"),cljs.core.deref.call(null,state));
} else {
return null;
}
}
} else {
return null;
}
});
});
mytetris.core.set_timer = (function mytetris$core$set_timer(dom_node,state){
var interval_id = window.setTimeout(mytetris.core.main_loop,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"interval","interval",1708495417)),dom_node,state);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"interval-id","interval-id",79285360),interval_id);
});
mytetris.core.set_main_loop = (function mytetris$core$set_main_loop(dom_node,state,handler){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),mytetris.core.generate_block.call(null));

window.addEventListener("keydown",handler);

return mytetris.core.set_timer.call(null,dom_node,state);
});
mytetris.core.stop_timer = (function mytetris$core$stop_timer(state){
var interval_id = new cljs.core.Keyword(null,"interval-id","interval-id",79285360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
if(!((interval_id == null))){
window.clearInterval(interval_id);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"interval-id","interval-id",79285360),null);

return true;
} else {
return null;
}
});
mytetris.core.top_of_field_QMARK_ = (function mytetris$core$top_of_field_QMARK_(block){
if((cljs.core.get_in.call(null,block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) === (0))){
return true;
} else {
return false;
}
});
mytetris.core.get_new_interval = (function mytetris$core$get_new_interval(current_interval,min_interval,count){
if((cljs.core.mod.call(null,count,(20)) === (0))){
var x__8018__auto__ = min_interval;
var y__8019__auto__ = (current_interval - (50));
return ((x__8018__auto__ > y__8019__auto__) ? x__8018__auto__ : y__8019__auto__);
} else {
return current_interval;
}
});
mytetris.core.score = (function mytetris$core$score(l){
var G__12456 = l;
switch (G__12456) {
case (1):
return (10);

break;
case (2):
return (100);

break;
case (3):
return (500);

break;
case (4):
return (1000);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12456)].join('')));

}
});
mytetris.core.main_loop = (function mytetris$core$main_loop(dom_node,state){
var temp__4655__auto___12462 = mytetris.core.erase_blocks.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"field","field",-1302436500)));
if(cljs.core.truth_(temp__4655__auto___12462)){
var vec__12459_12463 = temp__4655__auto___12462;
var erased_field_12464 = cljs.core.nth.call(null,vec__12459_12463,(0),null);
var erased_count_12465 = cljs.core.nth.call(null,vec__12459_12463,(1),null);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),erased_field_12464);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"erased-lines","erased-lines",135254682)], null),cljs.core._PLUS_,erased_count_12465);

cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core._PLUS_,mytetris.core.score.call(null,erased_count_12465));

mytetris.core.set_timer.call(null,dom_node,state);
} else {
var current_block_12466 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var next_block_12467 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"next-block","next-block",-53854328));
var field_12468 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"field","field",-1302436500));
var b_12469 = mytetris.core.move_down.call(null,current_block_12466);
if(cljs.core.truth_(mytetris.core.can_move_QMARK_.call(null,field_12468,mytetris.core.get_block_pattern.call(null,b_12469)))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),b_12469);

mytetris.core.set_timer.call(null,dom_node,state);
} else {
if(cljs.core.truth_(mytetris.core.top_of_field_QMARK_.call(null,current_block_12466))){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500)], null),((function (current_block_12466,next_block_12467,field_12468,b_12469,temp__4655__auto___12462){
return (function (p1__12458_SHARP_){
return mytetris.core.set_block.call(null,p1__12458_SHARP_,current_block_12466);
});})(current_block_12466,next_block_12467,field_12468,b_12469,temp__4655__auto___12462))
);

mytetris.core.stop_game.call(null,state);
} else {
var new_field_12470 = mytetris.core.set_block.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"field","field",-1302436500)),current_block_12466);
var c_12471 = (cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"count","count",2139924085)) + (1));
var interval_12472 = mytetris.core.get_new_interval.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"interval","interval",1708495417)),cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"min-inteval","min-inteval",-394819106)),c_12471);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),new_field_12470,new cljs.core.Keyword(null,"current-block","current-block",1027687970),next_block_12467,new cljs.core.Keyword(null,"next-block","next-block",-53854328),mytetris.core.generate_block.call(null),new cljs.core.Keyword(null,"interval","interval",1708495417),interval_12472,new cljs.core.Keyword(null,"count","count",2139924085),c_12471);

mytetris.core.set_timer.call(null,dom_node,state);
}
}
}

mytetris.core.draw_canvas_contents.call(null,document.getElementById("field"),cljs.core.deref.call(null,state));

var temp__4655__auto__ = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"next-block","next-block",-53854328));
if(cljs.core.truth_(temp__4655__auto__)){
var next_block = temp__4655__auto__;
return mytetris.core.draw_next_block.call(null,document.getElementById("next-block"),next_block);
} else {
return null;
}
});
mytetris.core.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-block","current-block",1027687970),new cljs.core.Keyword(null,"next-block","next-block",-53854328),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"interval-id","interval-id",79285360),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"interval","interval",1708495417),new cljs.core.Keyword(null,"erased-lines","erased-lines",135254682),new cljs.core.Keyword(null,"min-inteval","min-inteval",-394819106)],[null,null,null,null,(0),(0),(600),(0),(100)]);
mytetris.core.make_initial_state = (function mytetris$core$make_initial_state(){
var v = cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_height,cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_width,(0)))));
return cljs.core.assoc.call(null,mytetris.core.initial_state,new cljs.core.Keyword(null,"field","field",-1302436500),v,new cljs.core.Keyword(null,"next-block","next-block",-53854328),mytetris.core.generate_block.call(null));
});
mytetris.core.stop_game = (function mytetris$core$stop_game(state){
mytetris.core.stop_timer.call(null,state);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),null,new cljs.core.Keyword(null,"next-block","next-block",-53854328),null);

return console.log("stop block ",cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970)));
});
mytetris.core.usage = (function mytetris$core$usage(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.usage","div.usage",-416463271),"usage",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2191 rotate right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2193 rotate left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2192 move right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u2190 move left"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"space  down"], null)], null);
});
mytetris.core.game = (function mytetris$core$game(){
var state = reagent.core.atom.call(null,mytetris.core.make_initial_state.call(null));
var dom_node = reagent.core.atom.call(null,null);
var handler = mytetris.core.key_down_handler.call(null,dom_node,state);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),mytetris.core.render_button.call(null,"start",((function (state,dom_node,handler){
return (function (){
if((cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970)) == null)){
mytetris.core.initialize_state.call(null,state);

return mytetris.core.set_main_loop.call(null,dom_node,state,handler);
} else {
return null;
}
});})(state,dom_node,handler))
),mytetris.core.render_button.call(null,"stop",((function (state,dom_node,handler){
return (function (){
return mytetris.core.stop_game.call(null,state);
});})(state,dom_node,handler))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mytetris.core.div_with_canvas,dom_node,state], null)], null);
});
mytetris.core.main = (function mytetris$core$main(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mytetris.core.game], null),document.getElementById("app"));

window.addEventListener("resize",mytetris.core.on_window_resize);

var canvas = document.getElementById("field");
return null;
});
mytetris.core.init_BANG_ = (function mytetris$core$init_BANG_(){
return mytetris.core.main.call(null);
});
mytetris.core.blocks = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null);
mytetris.core.rot_left_internal = (function mytetris$core$rot_left_internal(b){
return cljs.core.mapv.call(null,(function (p1__12473_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12473_SHARP_.call(null,(1)),(- p1__12473_SHARP_.call(null,(0)))],null));
}),b);
});
mytetris.core.rot_left = (function mytetris$core$rot_left(block){
var map__12474 = block;
var map__12474__$1 = ((((!((map__12474 == null)))?((((map__12474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12474):map__12474);
var pattern = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var type = cljs.core.get.call(null,map__12474__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(!(cljs.core._EQ_.call(null,type,(2)))){
return cljs.core.assoc.call(null,block,new cljs.core.Keyword(null,"pattern","pattern",242135423),mytetris.core.rot_left_internal.call(null,pattern));
} else {
return null;
}
});
mytetris.core.rot_right_internal = (function mytetris$core$rot_right_internal(b){
return cljs.core.mapv.call(null,(function (p1__12476_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(- p1__12476_SHARP_.call(null,(1))),p1__12476_SHARP_.call(null,(0))],null));
}),b);
});
mytetris.core.rot_right = (function mytetris$core$rot_right(block){
var map__12477 = block;
var map__12477__$1 = ((((!((map__12477 == null)))?((((map__12477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12477):map__12477);
var pattern = cljs.core.get.call(null,map__12477__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var type = cljs.core.get.call(null,map__12477__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(!(cljs.core._EQ_.call(null,type,(2)))){
return cljs.core.assoc.call(null,block,new cljs.core.Keyword(null,"pattern","pattern",242135423),mytetris.core.rot_right_internal.call(null,pattern));
} else {
return null;
}
});
mytetris.core.field_width = (10);
mytetris.core.field_height = (20);
mytetris.core.select_block_index = (function (){var c = cljs.core.count.call(null,mytetris.core.blocks);
return ((function (c){
return (function (){
return cljs.core.rand_int.call(null,c);
});
;})(c))
})();

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mytetris.core.Pos = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mytetris.core.Pos.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8308__auto__,k__8309__auto__){
var self__ = this;
var this__8308__auto____$1 = this;
return this__8308__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8309__auto__,null);
});

mytetris.core.Pos.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8310__auto__,k12480,else__8311__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
var G__12484 = k12480;
var G__12484__$1 = (((G__12484 instanceof cljs.core.Keyword))?G__12484.fqn:null);
switch (G__12484__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12480,else__8311__auto__);

}
});

mytetris.core.Pos.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8322__auto__,writer__8323__auto__,opts__8324__auto__){
var self__ = this;
var this__8322__auto____$1 = this;
var pr_pair__8325__auto__ = ((function (this__8322__auto____$1){
return (function (keyval__8326__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8323__auto__,cljs.core.pr_writer,""," ","",opts__8324__auto__,keyval__8326__auto__);
});})(this__8322__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8323__auto__,pr_pair__8325__auto__,"#mytetris.core.Pos{",", ","}",opts__8324__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12479){
var self__ = this;
var G__12479__$1 = this;
return (new cljs.core.RecordIter((0),G__12479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mytetris.core.Pos.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8306__auto__){
var self__ = this;
var this__8306__auto____$1 = this;
return self__.__meta;
});

mytetris.core.Pos.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8303__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
return (new mytetris.core.Pos(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

mytetris.core.Pos.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8312__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8304__auto__){
var self__ = this;
var this__8304__auto____$1 = this;
var h__8122__auto__ = self__.__hash;
if(!((h__8122__auto__ == null))){
return h__8122__auto__;
} else {
var h__8122__auto____$1 = ((function (h__8122__auto__,this__8304__auto____$1){
return (function (coll__8305__auto__){
return (-469649647 ^ cljs.core.hash_unordered_coll.call(null,coll__8305__auto__));
});})(h__8122__auto__,this__8304__auto____$1))
.call(null,this__8304__auto____$1);
self__.__hash = h__8122__auto____$1;

return h__8122__auto____$1;
}
});

mytetris.core.Pos.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12481,other12482){
var self__ = this;
var this12481__$1 = this;
return (!((other12482 == null))) && ((this12481__$1.constructor === other12482.constructor)) && (cljs.core._EQ_.call(null,this12481__$1.x,other12482.x)) && (cljs.core._EQ_.call(null,this12481__$1.y,other12482.y)) && (cljs.core._EQ_.call(null,this12481__$1.__extmap,other12482.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8317__auto__,k__8318__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__8318__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8317__auto____$1),self__.__meta),k__8318__auto__);
} else {
return (new mytetris.core.Pos(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8318__auto__)),null));
}
});

mytetris.core.Pos.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8315__auto__,k__8316__auto__,G__12479){
var self__ = this;
var this__8315__auto____$1 = this;
var pred__12485 = cljs.core.keyword_identical_QMARK_;
var expr__12486 = k__8316__auto__;
if(cljs.core.truth_(pred__12485.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12486))){
return (new mytetris.core.Pos(G__12479,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12485.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12486))){
return (new mytetris.core.Pos(self__.x,G__12479,self__.__meta,self__.__extmap,null));
} else {
return (new mytetris.core.Pos(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8316__auto__,G__12479),null));
}
}
});

mytetris.core.Pos.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8320__auto__){
var self__ = this;
var this__8320__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8307__auto__,G__12479){
var self__ = this;
var this__8307__auto____$1 = this;
return (new mytetris.core.Pos(self__.x,self__.y,G__12479,self__.__extmap,self__.__hash));
});

mytetris.core.Pos.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8313__auto__,entry__8314__auto__){
var self__ = this;
var this__8313__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8314__auto__)){
return this__8313__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8314__auto__,(0)),cljs.core._nth.call(null,entry__8314__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8313__auto____$1,entry__8314__auto__);
}
});

mytetris.core.Pos.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

mytetris.core.Pos.cljs$lang$type = true;

mytetris.core.Pos.cljs$lang$ctorPrSeq = (function (this__8344__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mytetris.core/Pos");
});

mytetris.core.Pos.cljs$lang$ctorPrWriter = (function (this__8344__auto__,writer__8345__auto__){
return cljs.core._write.call(null,writer__8345__auto__,"mytetris.core/Pos");
});

mytetris.core.__GT_Pos = (function mytetris$core$__GT_Pos(x,y){
return (new mytetris.core.Pos(x,y,null,null,null));
});

mytetris.core.map__GT_Pos = (function mytetris$core$map__GT_Pos(G__12483){
return (new mytetris.core.Pos(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12483),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12483),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12483,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mytetris.core.Block = (function (type,pattern,pos,__meta,__extmap,__hash){
this.type = type;
this.pattern = pattern;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mytetris.core.Block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8308__auto__,k__8309__auto__){
var self__ = this;
var this__8308__auto____$1 = this;
return this__8308__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8309__auto__,null);
});

mytetris.core.Block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8310__auto__,k12490,else__8311__auto__){
var self__ = this;
var this__8310__auto____$1 = this;
var G__12494 = k12490;
var G__12494__$1 = (((G__12494 instanceof cljs.core.Keyword))?G__12494.fqn:null);
switch (G__12494__$1) {
case "type":
return self__.type;

break;
case "pattern":
return self__.pattern;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k12490,else__8311__auto__);

}
});

mytetris.core.Block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8322__auto__,writer__8323__auto__,opts__8324__auto__){
var self__ = this;
var this__8322__auto____$1 = this;
var pr_pair__8325__auto__ = ((function (this__8322__auto____$1){
return (function (keyval__8326__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__8323__auto__,cljs.core.pr_writer,""," ","",opts__8324__auto__,keyval__8326__auto__);
});})(this__8322__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__8323__auto__,pr_pair__8325__auto__,"#mytetris.core.Block{",", ","}",opts__8324__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12489){
var self__ = this;
var G__12489__$1 = this;
return (new cljs.core.RecordIter((0),G__12489__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mytetris.core.Block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8306__auto__){
var self__ = this;
var this__8306__auto____$1 = this;
return self__.__meta;
});

mytetris.core.Block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8303__auto__){
var self__ = this;
var this__8303__auto____$1 = this;
return (new mytetris.core.Block(self__.type,self__.pattern,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

mytetris.core.Block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8312__auto__){
var self__ = this;
var this__8312__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8304__auto__){
var self__ = this;
var this__8304__auto____$1 = this;
var h__8122__auto__ = self__.__hash;
if(!((h__8122__auto__ == null))){
return h__8122__auto__;
} else {
var h__8122__auto____$1 = ((function (h__8122__auto__,this__8304__auto____$1){
return (function (coll__8305__auto__){
return (-1161368528 ^ cljs.core.hash_unordered_coll.call(null,coll__8305__auto__));
});})(h__8122__auto__,this__8304__auto____$1))
.call(null,this__8304__auto____$1);
self__.__hash = h__8122__auto____$1;

return h__8122__auto____$1;
}
});

mytetris.core.Block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12491,other12492){
var self__ = this;
var this12491__$1 = this;
return (!((other12492 == null))) && ((this12491__$1.constructor === other12492.constructor)) && (cljs.core._EQ_.call(null,this12491__$1.type,other12492.type)) && (cljs.core._EQ_.call(null,this12491__$1.pattern,other12492.pattern)) && (cljs.core._EQ_.call(null,this12491__$1.pos,other12492.pos)) && (cljs.core._EQ_.call(null,this12491__$1.__extmap,other12492.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8317__auto__,k__8318__auto__){
var self__ = this;
var this__8317__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__8318__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__8317__auto____$1),self__.__meta),k__8318__auto__);
} else {
return (new mytetris.core.Block(self__.type,self__.pattern,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__8318__auto__)),null));
}
});

mytetris.core.Block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8315__auto__,k__8316__auto__,G__12489){
var self__ = this;
var this__8315__auto____$1 = this;
var pred__12495 = cljs.core.keyword_identical_QMARK_;
var expr__12496 = k__8316__auto__;
if(cljs.core.truth_(pred__12495.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__12496))){
return (new mytetris.core.Block(G__12489,self__.pattern,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12495.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__12496))){
return (new mytetris.core.Block(self__.type,G__12489,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__12495.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__12496))){
return (new mytetris.core.Block(self__.type,self__.pattern,G__12489,self__.__meta,self__.__extmap,null));
} else {
return (new mytetris.core.Block(self__.type,self__.pattern,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__8316__auto__,G__12489),null));
}
}
}
});

mytetris.core.Block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8320__auto__){
var self__ = this;
var this__8320__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8307__auto__,G__12489){
var self__ = this;
var this__8307__auto____$1 = this;
return (new mytetris.core.Block(self__.type,self__.pattern,self__.pos,G__12489,self__.__extmap,self__.__hash));
});

mytetris.core.Block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8313__auto__,entry__8314__auto__){
var self__ = this;
var this__8313__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__8314__auto__)){
return this__8313__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__8314__auto__,(0)),cljs.core._nth.call(null,entry__8314__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__8313__auto____$1,entry__8314__auto__);
}
});

mytetris.core.Block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

mytetris.core.Block.cljs$lang$type = true;

mytetris.core.Block.cljs$lang$ctorPrSeq = (function (this__8344__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mytetris.core/Block");
});

mytetris.core.Block.cljs$lang$ctorPrWriter = (function (this__8344__auto__,writer__8345__auto__){
return cljs.core._write.call(null,writer__8345__auto__,"mytetris.core/Block");
});

mytetris.core.__GT_Block = (function mytetris$core$__GT_Block(type,pattern,pos){
return (new mytetris.core.Block(type,pattern,pos,null,null,null));
});

mytetris.core.map__GT_Block = (function mytetris$core$map__GT_Block(G__12493){
return (new mytetris.core.Block(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__12493),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__12493),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__12493),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__12493,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"pos","pos",-864607220))),null));
});

mytetris.core.generate_block = (function mytetris$core$generate_block(){
var i = mytetris.core.select_block_index.call(null);
var x = (4);
var y = (0);
return mytetris.core.__GT_Block.call(null,i,mytetris.core.blocks.call(null,i),mytetris.core.__GT_Pos.call(null,x,y));
});
mytetris.core.initial_field = cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_height,cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_width,(0)))));
mytetris.core.unerase_line_QMARK_ = (function mytetris$core$unerase_line_QMARK_(l){
return cljs.core.not_every_QMARK_.call(null,(function (p1__12499_SHARP_){
return (p1__12499_SHARP_ >= (1));
}),l);
});
/**
 * 消さないブロックのインデクスのシーケンスを返す
 */
mytetris.core.get_store_candidate = (function mytetris$core$get_store_candidate(field){
var indexed_field = cljs.core.map_indexed.call(null,cljs.core.vector,field);
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (indexed_field){
return (function (p1__12500_SHARP_){
return mytetris.core.unerase_line_QMARK_.call(null,cljs.core.second.call(null,p1__12500_SHARP_));
});})(indexed_field))
,indexed_field)));
});
/**
 * 0000.... 行を消して落とす
 */
mytetris.core.erase_blocks = (function mytetris$core$erase_blocks(field){
var store_lines = mytetris.core.get_store_candidate.call(null,field);
var c = (mytetris.core.field_height - cljs.core.count.call(null,store_lines));
if((c > (0))){
var clean_field = cljs.core.repeat.call(null,c,cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_width,(0))));
var deleted_field = cljs.core.replace.call(null,field,store_lines);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,clean_field,deleted_field)),c], null);
} else {
return null;
}
});
mytetris.core.move_block = (function mytetris$core$move_block(block,dx,dy){
var map__12501 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(block);
var map__12501__$1 = ((((!((map__12501 == null)))?((((map__12501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12501):map__12501);
var x = cljs.core.get.call(null,map__12501__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12501__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var p = mytetris.core.__GT_Pos.call(null,(x + dx),(y + dy));
return cljs.core.assoc.call(null,block,new cljs.core.Keyword(null,"pos","pos",-864607220),p);
});
mytetris.core.move_left = (function mytetris$core$move_left(block){
return mytetris.core.move_block.call(null,block,(-1),(0));
});
mytetris.core.move_right = (function mytetris$core$move_right(block){
return mytetris.core.move_block.call(null,block,(1),(0));
});
mytetris.core.move_down = (function mytetris$core$move_down(block){
return mytetris.core.move_block.call(null,block,(0),(1));
});
mytetris.core.get_block_pattern = (function mytetris$core$get_block_pattern(block){
var map__12504 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(block);
var map__12504__$1 = ((((!((map__12504 == null)))?((((map__12504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12504):map__12504);
var dx = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.call(null,map__12504__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var block_pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(block);
return cljs.core.mapv.call(null,((function (map__12504,map__12504__$1,dx,dy,block_pattern){
return (function (p1__12503_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__12503_SHARP_.call(null,(0)) + dx),(p1__12503_SHARP_.call(null,(1)) + dy)],null));
});})(map__12504,map__12504__$1,dx,dy,block_pattern))
,block_pattern);
});
mytetris.core.set_block = (function mytetris$core$set_block(field,block){
var pattern = mytetris.core.get_block_pattern.call(null,block);
var color = (new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block) + (1));
var valid_pattern = cljs.core.filter.call(null,((function (pattern,color){
return (function (p1__12506_SHARP_){
return (p1__12506_SHARP_.call(null,(1)) >= (0));
});})(pattern,color))
,pattern);
return cljs.core.reduce.call(null,((function (pattern,color,valid_pattern){
return (function (p1__12507_SHARP_,p2__12508_SHARP_){
return cljs.core.assoc_in.call(null,p1__12507_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__12508_SHARP_.call(null,(1)),p2__12508_SHARP_.call(null,(0))], null),color);
});})(pattern,color,valid_pattern))
,field,valid_pattern);
});
mytetris.core.in_field_QMARK_ = (function mytetris$core$in_field_QMARK_(f,x,y){
return ((x >= (0))) && ((x < mytetris.core.field_width)) && ((y < mytetris.core.field_height)) && ((f.call(null,y).call(null,x) === (0)));
});
mytetris.core.can_move_QMARK_ = (function mytetris$core$can_move_QMARK_(field,pattern){
var p = cljs.core.filter.call(null,(function (p1__12509_SHARP_){
return (p1__12509_SHARP_.call(null,(1)) >= (0));
}),pattern);
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,((function (p){
return (function (p1__12510_SHARP_){
return cljs.core.apply.call(null,mytetris.core.in_field_QMARK_,field,p1__12510_SHARP_);
});})(p))
,p));
});

//# sourceMappingURL=core.js.map
