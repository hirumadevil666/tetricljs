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
return mytetris.core.draw_canvas_contents.call(null,cljs.core.deref.call(null,dom_node).firstChild,cljs.core.deref.call(null,state));
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return cljs.core.reset_BANG_.call(null,dom_node,reagent.core.dom_node.call(null,this$));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
cljs.core.deref.call(null,mytetris.core.window_width);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.with-canvas","div.with-canvas",1346023179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#field","canvas#field",1436083734),(function (){var temp__4655__auto__ = cljs.core.deref.call(null,dom_node);
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),node.clientWidth,new cljs.core.Keyword(null,"height","height",1025178622),node.clientHeight], null);
} else {
return null;
}
})()], null)], null);
})], null));
});
mytetris.core.render_button = (function mytetris$core$render_button(value,on_click){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.squre","button.squre",-750302749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),value], null);
});
mytetris.core.color_map = new cljs.core.PersistentArrayMap(null, 8, [(0),"rgb(180, 180, 180)",(1),"rgb(50, 30, 100)",(2),"rgb(0, 180, 180)",(3),"rgb(180, 0, 180)",(4),"rgb(0, 180, 0)",(5),"rgb(130, 50, 0)",(6),"rgb(0, 80, 180)",(7),"rgb(0, 80, 0)"], null);
mytetris.core.draw_block = (function mytetris$core$draw_block(ctx,block,x,y,cell_w,cell_h){
var draw_row = (function mytetris$core$draw_block_$_draw_row(row,row_index,ctx__$1,w,h){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__58959_SHARP_){
(ctx__$1["fillStyle"] = mytetris.core.color_map.call(null,p1__58959_SHARP_.call(null,(1))));

return ctx__$1.fillRect(((p1__58959_SHARP_.call(null,(0)) + x) * w),((row_index + y) * h),(w - (3)),(h - (3)));
}),cljs.core.map_indexed.call(null,(function (p1__58960_SHARP_,p2__58961_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58960_SHARP_,p2__58961_SHARP_],null));
}),row)));
});
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__58962_SHARP_){
return draw_row.call(null,p1__58962_SHARP_.call(null,(1)),p1__58962_SHARP_.call(null,(0)),ctx,cell_w,cell_h);
}),cljs.core.map_indexed.call(null,(function (p1__58963_SHARP_,p2__58964_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58963_SHARP_,p2__58964_SHARP_],null));
}),block)));
});
mytetris.core.draw_canvas_contents = (function mytetris$core$draw_canvas_contents(canvas,state){
var ctx = canvas.getContext("2d");
var field = state.call(null,new cljs.core.Keyword(null,"field","field",-1302436500));
var block = state.call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var h = canvas.clientHeight;
var w = canvas.clientWidth;
var cell_w = (w / mytetris.core.field_width);
var cell_h = (h / mytetris.core.field_height);
if(!((block == null))){
var x = cljs.core.get_in.call(null,block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var y = cljs.core.get_in.call(null,block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var b = mytetris.core.get_block_pattern.call(null,block);
return mytetris.core.draw_block.call(null,ctx,mytetris.core.set_block.call(null,field,block),(0),(0),cell_w,cell_h);
} else {
return null;
}
});
mytetris.core.initialize_state = (function mytetris$core$initialize_state(state){
cljs.core.swap_BANG_.call(null,state,(function (p1__58966_SHARP_,p2__58965_SHARP_){
return cljs.core.identity.call(null,p2__58965_SHARP_);
}),mytetris.core.make_initial_state.call(null));

return cljs.core.deref.call(null,state);
});
mytetris.core.key_down_handler = (function mytetris$core$key_down_handler(dom_node,state){
return (function (ev){
var get_new_block = (function mytetris$core$key_down_handler_$_get_new_block(e,b){
var G__58968 = ev.code;
switch (G__58968) {
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
if(cljs.core.truth_(mytetris.core.can_move_QMARK_.call(null,field,new_block))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),new_block);

return mytetris.core.draw_canvas_contents.call(null,cljs.core.deref.call(null,dom_node).firstChild,cljs.core.deref.call(null,state));
} else {
return null;
}
}
} else {
return null;
}
});
});
mytetris.core.set_main_loop = (function mytetris$core$set_main_loop(dom_node,state,handler){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),mytetris.core.generate_block.call(null));

window.addEventListener("keydown",handler);

var interval_id = window.setInterval(mytetris.core.main_loop,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"interval","interval",1708495417)),dom_node,state);
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"interval-id","interval-id",79285360),interval_id);
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
mytetris.core.main_loop = (function mytetris$core$main_loop(dom_node,state){
var temp__4655__auto___58970 = mytetris.core.erase_blocks.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"field","field",-1302436500)));
if(cljs.core.truth_(temp__4655__auto___58970)){
var erased_field_58971 = temp__4655__auto___58970;
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),erased_field_58971);
} else {
var current_block_58972 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970));
var field_58973 = cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"field","field",-1302436500));
var b_58974 = mytetris.core.move_down.call(null,current_block_58972);
if(cljs.core.truth_(mytetris.core.can_move_QMARK_.call(null,field_58973,b_58974))){
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),b_58974);
} else {
if(cljs.core.truth_(mytetris.core.top_of_field_QMARK_.call(null,current_block_58972))){
mytetris.core.stop_game.call(null,state);
} else {
var new_field_58975 = mytetris.core.set_block.call(null,cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"field","field",-1302436500)),current_block_58972);
cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),new_field_58975);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),mytetris.core.generate_block.call(null));
}
}
}

return mytetris.core.draw_canvas_contents.call(null,cljs.core.deref.call(null,dom_node).firstChild,cljs.core.deref.call(null,state));
});
mytetris.core.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"current-block","current-block",1027687970),null,new cljs.core.Keyword(null,"next-block","next-block",-53854328),null,new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"interval","interval",1708495417),(600),new cljs.core.Keyword(null,"interval-id","interval-id",79285360),null], null);
mytetris.core.make_initial_state = (function mytetris$core$make_initial_state(){
var v = cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_height,cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_width,(0)))));
return cljs.core.assoc.call(null,mytetris.core.initial_state,new cljs.core.Keyword(null,"field","field",-1302436500),v);
});
mytetris.core.stop_game = (function mytetris$core$stop_game(state){
mytetris.core.stop_timer.call(null,state);

cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"current-block","current-block",1027687970),null);

return console.log("stop block ",cljs.core.deref.call(null,state).call(null,new cljs.core.Keyword(null,"current-block","current-block",1027687970)));
});
mytetris.core.game = (function mytetris$core$game(){
var state = reagent.core.atom.call(null,mytetris.core.initial_state);
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
mytetris.core.on_click = (function mytetris$core$on_click(ev){
return console.log("xxxxx");
});
mytetris.core.main = (function mytetris$core$main(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mytetris.core.game], null),document.getElementById("app"));

window.addEventListener("resize",mytetris.core.on_window_resize);

var canvas = document.getElementById("field");
return canvas.addEventListener("click",mytetris.core.on_click);
});
mytetris.core.init_BANG_ = (function mytetris$core$init_BANG_(){
return mytetris.core.main.call(null);
});
mytetris.core.block0 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null)], null);
mytetris.core.block1 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)], null)], null);
mytetris.core.block2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(3)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null)], null)], null);
mytetris.core.block3 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(4)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(0)], null)], null)], null);
mytetris.core.block4 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5)], null)], null)], null);
mytetris.core.block5 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(6)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(1)], null)], null)], null);
mytetris.core.block6 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(7),(7),(7)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(7),(7),(7)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null)], null)], null);
mytetris.core.field_width = (10);
mytetris.core.field_height = (20);
mytetris.core.blocks = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [mytetris.core.block0,mytetris.core.block1,mytetris.core.block2,mytetris.core.block3,mytetris.core.block4,mytetris.core.block5,mytetris.core.block6], null);
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
mytetris.core.Pos.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44661__auto__,k__44662__auto__){
var self__ = this;
var this__44661__auto____$1 = this;
return this__44661__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__44662__auto__,null);
});

mytetris.core.Pos.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44663__auto__,k58977,else__44664__auto__){
var self__ = this;
var this__44663__auto____$1 = this;
var G__58981 = k58977;
var G__58981__$1 = (((G__58981 instanceof cljs.core.Keyword))?G__58981.fqn:null);
switch (G__58981__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k58977,else__44664__auto__);

}
});

mytetris.core.Pos.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44675__auto__,writer__44676__auto__,opts__44677__auto__){
var self__ = this;
var this__44675__auto____$1 = this;
var pr_pair__44678__auto__ = ((function (this__44675__auto____$1){
return (function (keyval__44679__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44676__auto__,cljs.core.pr_writer,""," ","",opts__44677__auto__,keyval__44679__auto__);
});})(this__44675__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44676__auto__,pr_pair__44678__auto__,"#mytetris.core.Pos{",", ","}",opts__44677__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58976){
var self__ = this;
var G__58976__$1 = this;
return (new cljs.core.RecordIter((0),G__58976__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mytetris.core.Pos.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44659__auto__){
var self__ = this;
var this__44659__auto____$1 = this;
return self__.__meta;
});

mytetris.core.Pos.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44656__auto__){
var self__ = this;
var this__44656__auto____$1 = this;
return (new mytetris.core.Pos(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

mytetris.core.Pos.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44665__auto__){
var self__ = this;
var this__44665__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44657__auto__){
var self__ = this;
var this__44657__auto____$1 = this;
var h__44475__auto__ = self__.__hash;
if(!((h__44475__auto__ == null))){
return h__44475__auto__;
} else {
var h__44475__auto____$1 = ((function (h__44475__auto__,this__44657__auto____$1){
return (function (coll__44658__auto__){
return (-469649647 ^ cljs.core.hash_unordered_coll.call(null,coll__44658__auto__));
});})(h__44475__auto__,this__44657__auto____$1))
.call(null,this__44657__auto____$1);
self__.__hash = h__44475__auto____$1;

return h__44475__auto____$1;
}
});

mytetris.core.Pos.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58978,other58979){
var self__ = this;
var this58978__$1 = this;
return (!((other58979 == null))) && ((this58978__$1.constructor === other58979.constructor)) && (cljs.core._EQ_.call(null,this58978__$1.x,other58979.x)) && (cljs.core._EQ_.call(null,this58978__$1.y,other58979.y)) && (cljs.core._EQ_.call(null,this58978__$1.__extmap,other58979.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44670__auto__,k__44671__auto__){
var self__ = this;
var this__44670__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__44671__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44670__auto____$1),self__.__meta),k__44671__auto__);
} else {
return (new mytetris.core.Pos(self__.x,self__.y,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44671__auto__)),null));
}
});

mytetris.core.Pos.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44668__auto__,k__44669__auto__,G__58976){
var self__ = this;
var this__44668__auto____$1 = this;
var pred__58982 = cljs.core.keyword_identical_QMARK_;
var expr__58983 = k__44669__auto__;
if(cljs.core.truth_(pred__58982.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58983))){
return (new mytetris.core.Pos(G__58976,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58982.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58983))){
return (new mytetris.core.Pos(self__.x,G__58976,self__.__meta,self__.__extmap,null));
} else {
return (new mytetris.core.Pos(self__.x,self__.y,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44669__auto__,G__58976),null));
}
}
});

mytetris.core.Pos.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44673__auto__){
var self__ = this;
var this__44673__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

mytetris.core.Pos.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44660__auto__,G__58976){
var self__ = this;
var this__44660__auto____$1 = this;
return (new mytetris.core.Pos(self__.x,self__.y,G__58976,self__.__extmap,self__.__hash));
});

mytetris.core.Pos.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44666__auto__,entry__44667__auto__){
var self__ = this;
var this__44666__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44667__auto__)){
return this__44666__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__44667__auto__,(0)),cljs.core._nth.call(null,entry__44667__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44666__auto____$1,entry__44667__auto__);
}
});

mytetris.core.Pos.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

mytetris.core.Pos.cljs$lang$type = true;

mytetris.core.Pos.cljs$lang$ctorPrSeq = (function (this__44697__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mytetris.core/Pos");
});

mytetris.core.Pos.cljs$lang$ctorPrWriter = (function (this__44697__auto__,writer__44698__auto__){
return cljs.core._write.call(null,writer__44698__auto__,"mytetris.core/Pos");
});

mytetris.core.__GT_Pos = (function mytetris$core$__GT_Pos(x,y){
return (new mytetris.core.Pos(x,y,null,null,null));
});

mytetris.core.map__GT_Pos = (function mytetris$core$map__GT_Pos(G__58980){
return (new mytetris.core.Pos(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58980),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58980),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__58980,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776))),null));
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
mytetris.core.Block = (function (type,direction,pos,__meta,__extmap,__hash){
this.type = type;
this.direction = direction;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mytetris.core.Block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__44661__auto__,k__44662__auto__){
var self__ = this;
var this__44661__auto____$1 = this;
return this__44661__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__44662__auto__,null);
});

mytetris.core.Block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__44663__auto__,k58987,else__44664__auto__){
var self__ = this;
var this__44663__auto____$1 = this;
var G__58991 = k58987;
var G__58991__$1 = (((G__58991 instanceof cljs.core.Keyword))?G__58991.fqn:null);
switch (G__58991__$1) {
case "type":
return self__.type;

break;
case "direction":
return self__.direction;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k58987,else__44664__auto__);

}
});

mytetris.core.Block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__44675__auto__,writer__44676__auto__,opts__44677__auto__){
var self__ = this;
var this__44675__auto____$1 = this;
var pr_pair__44678__auto__ = ((function (this__44675__auto____$1){
return (function (keyval__44679__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__44676__auto__,cljs.core.pr_writer,""," ","",opts__44677__auto__,keyval__44679__auto__);
});})(this__44675__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__44676__auto__,pr_pair__44678__auto__,"#mytetris.core.Block{",", ","}",opts__44677__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58986){
var self__ = this;
var G__58986__$1 = this;
return (new cljs.core.RecordIter((0),G__58986__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mytetris.core.Block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__44659__auto__){
var self__ = this;
var this__44659__auto____$1 = this;
return self__.__meta;
});

mytetris.core.Block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__44656__auto__){
var self__ = this;
var this__44656__auto____$1 = this;
return (new mytetris.core.Block(self__.type,self__.direction,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

mytetris.core.Block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__44665__auto__){
var self__ = this;
var this__44665__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__44657__auto__){
var self__ = this;
var this__44657__auto____$1 = this;
var h__44475__auto__ = self__.__hash;
if(!((h__44475__auto__ == null))){
return h__44475__auto__;
} else {
var h__44475__auto____$1 = ((function (h__44475__auto__,this__44657__auto____$1){
return (function (coll__44658__auto__){
return (-1161368528 ^ cljs.core.hash_unordered_coll.call(null,coll__44658__auto__));
});})(h__44475__auto__,this__44657__auto____$1))
.call(null,this__44657__auto____$1);
self__.__hash = h__44475__auto____$1;

return h__44475__auto____$1;
}
});

mytetris.core.Block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58988,other58989){
var self__ = this;
var this58988__$1 = this;
return (!((other58989 == null))) && ((this58988__$1.constructor === other58989.constructor)) && (cljs.core._EQ_.call(null,this58988__$1.type,other58989.type)) && (cljs.core._EQ_.call(null,this58988__$1.direction,other58989.direction)) && (cljs.core._EQ_.call(null,this58988__$1.pos,other58989.pos)) && (cljs.core._EQ_.call(null,this58988__$1.__extmap,other58989.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__44670__auto__,k__44671__auto__){
var self__ = this;
var this__44670__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"direction","direction",-633359395),null], null), null),k__44671__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__44670__auto____$1),self__.__meta),k__44671__auto__);
} else {
return (new mytetris.core.Block(self__.type,self__.direction,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__44671__auto__)),null));
}
});

mytetris.core.Block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__44668__auto__,k__44669__auto__,G__58986){
var self__ = this;
var this__44668__auto____$1 = this;
var pred__58992 = cljs.core.keyword_identical_QMARK_;
var expr__58993 = k__44669__auto__;
if(cljs.core.truth_(pred__58992.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__58993))){
return (new mytetris.core.Block(G__58986,self__.direction,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58992.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395),expr__58993))){
return (new mytetris.core.Block(self__.type,G__58986,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__58992.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__58993))){
return (new mytetris.core.Block(self__.type,self__.direction,G__58986,self__.__meta,self__.__extmap,null));
} else {
return (new mytetris.core.Block(self__.type,self__.direction,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__44669__auto__,G__58986),null));
}
}
}
});

mytetris.core.Block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__44673__auto__){
var self__ = this;
var this__44673__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"direction","direction",-633359395),self__.direction],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

mytetris.core.Block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__44660__auto__,G__58986){
var self__ = this;
var this__44660__auto____$1 = this;
return (new mytetris.core.Block(self__.type,self__.direction,self__.pos,G__58986,self__.__extmap,self__.__hash));
});

mytetris.core.Block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__44666__auto__,entry__44667__auto__){
var self__ = this;
var this__44666__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__44667__auto__)){
return this__44666__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__44667__auto__,(0)),cljs.core._nth.call(null,entry__44667__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__44666__auto____$1,entry__44667__auto__);
}
});

mytetris.core.Block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"direction","direction",1007172132,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

mytetris.core.Block.cljs$lang$type = true;

mytetris.core.Block.cljs$lang$ctorPrSeq = (function (this__44697__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"mytetris.core/Block");
});

mytetris.core.Block.cljs$lang$ctorPrWriter = (function (this__44697__auto__,writer__44698__auto__){
return cljs.core._write.call(null,writer__44698__auto__,"mytetris.core/Block");
});

mytetris.core.__GT_Block = (function mytetris$core$__GT_Block(type,direction,pos){
return (new mytetris.core.Block(type,direction,pos,null,null,null));
});

mytetris.core.map__GT_Block = (function mytetris$core$map__GT_Block(G__58990){
return (new mytetris.core.Block(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__58990),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(G__58990),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__58990),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__58990,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"pos","pos",-864607220))),null));
});

mytetris.core.generate_block = (function mytetris$core$generate_block(){
var i = mytetris.core.select_block_index.call(null);
var dir = (0);
var x = (4);
var y = (0);
return mytetris.core.__GT_Block.call(null,i,dir,mytetris.core.__GT_Pos.call(null,x,y));
});
mytetris.core.get_block_pattern = (function mytetris$core$get_block_pattern(block){
return cljs.core.nth.call(null,mytetris.core.blocks.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block)),new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(block));
});
mytetris.core.b = mytetris.core.generate_block.call(null);
mytetris.core.b2 = mytetris.core.generate_block.call(null);
mytetris.core.initial_field = cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_height,cljs.core.vec.call(null,cljs.core.repeat.call(null,mytetris.core.field_width,(0)))));
mytetris.core.unerase_line_QMARK_ = (function mytetris$core$unerase_line_QMARK_(l){
return cljs.core.not_every_QMARK_.call(null,(function (p1__58996_SHARP_){
return (p1__58996_SHARP_ >= (1));
}),l);
});
/**
 * 消さないブロックのインデクスのシーケンスを返す
 */
mytetris.core.get_store_candidate = (function mytetris$core$get_store_candidate(field){
var indexed_field = cljs.core.map_indexed.call(null,(function (p1__58997_SHARP_,p2__58998_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58997_SHARP_,p2__58998_SHARP_],null));
}),field);
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,((function (indexed_field){
return (function (p1__58999_SHARP_){
return mytetris.core.unerase_line_QMARK_.call(null,cljs.core.second.call(null,p1__58999_SHARP_));
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
var clean_field = cljs.core.repeat.call(null,c,cljs.core.repeat.call(null,mytetris.core.field_width,(0)));
var deleted_field = cljs.core.replace.call(null,field,store_lines);
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.concat.call(null,clean_field,deleted_field));
} else {
return null;
}
});
mytetris.core.move_block = (function mytetris$core$move_block(block,x,y){
var p = mytetris.core.__GT_Pos.call(null,(x + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(block))),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(block)) + y));
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
mytetris.core.get_match_pattern = (function mytetris$core$get_match_pattern(b){

var pattern = mytetris.core.get_block_pattern.call(null,b);
var h = cljs.core.count.call(null,pattern);
var end = cljs.core.get_in.call(null,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
var start = (end - h);
var targets = cljs.core.filter.call(null,((function (pattern,h,end,start){
return (function (p1__59000_SHARP_){
return ((0) <= cljs.core.first.call(null,p1__59000_SHARP_));
});})(pattern,h,end,start))
,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.range.call(null,start,end),pattern)));
return targets;
});
mytetris.core.set_line = (function mytetris$core$set_line(target,data,x){
var f = (function mytetris$core$set_line_$_f(lis,n){
return cljs.core.concat.call(null,cljs.core.repeat.call(null,n,(0)),lis,cljs.core.repeat.call(null,mytetris.core.field_width,(0)));
});
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__59001_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__59001_SHARP_);
}),cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,target,f.call(null,data,x)))));
});
mytetris.core.set_block = (function mytetris$core$set_block(field,block){
var pattern = mytetris.core.get_match_pattern.call(null,block);
var key = cljs.core.map.call(null,cljs.core.first,pattern);
var x = cljs.core.get_in.call(null,block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var new_lines = cljs.core.map.call(null,((function (pattern,key,x){
return (function (p1__59002_SHARP_){
return mytetris.core.set_line.call(null,cljs.core.nth.call(null,field,cljs.core.first.call(null,p1__59002_SHARP_)),cljs.core.second.call(null,p1__59002_SHARP_),x);
});})(pattern,key,x))
,pattern);
if(!(cljs.core.empty_QMARK_.call(null,key))){
return cljs.core.apply.call(null,cljs.core.assoc,field,cljs.core.interleave.call(null,key,new_lines));
} else {
return null;
}
});
mytetris.core.rot_right = (function mytetris$core$rot_right(block){
return cljs.core.assoc.call(null,block,new cljs.core.Keyword(null,"direction","direction",-633359395),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(block) + (1)),(4)));
});
mytetris.core.rot_left = (function mytetris$core$rot_left(block){
return cljs.core.assoc.call(null,block,new cljs.core.Keyword(null,"direction","direction",-633359395),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(block) - (1)),(4)));
});
mytetris.core.check_line = (function mytetris$core$check_line(target,data,x){
var f = (function mytetris$core$check_line_$_f(lis){
return cljs.core.not_every_QMARK_.call(null,(function (p1__59003_SHARP_){
return (p1__59003_SHARP_ > (0));
}),lis);
});
var get_newdata = (function mytetris$core$check_line_$_get_newdata(x__$1,data__$1){
return cljs.core.concat.call(null,cljs.core.repeat.call(null,x__$1,(0)),data__$1);
});
var new_data = get_newdata.call(null,x,data);
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,f,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,new_data,target))));
});
cljs.core.not_every_QMARK_.call(null,(function (p1__59004_SHARP_){
return (p1__59004_SHARP_ > (0));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null));
mytetris.core.can_move_QMARK_ = (function mytetris$core$can_move_QMARK_(field,block){
var pattern = mytetris.core.get_match_pattern.call(null,block);
var bp = mytetris.core.get_block_pattern.call(null,block);
var x = cljs.core.get_in.call(null,block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var y = cljs.core.get_in.call(null,block,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"y","y",-1757859776)], null));
if((x < (0))){
return false;
} else {
if(((x + cljs.core.count.call(null,bp.call(null,(0)))) > mytetris.core.field_width)){
return false;
} else {
if((y > mytetris.core.field_height)){
return false;
} else {
var r = cljs.core.map.call(null,((function (pattern,bp,x,y){
return (function (p1__59005_SHARP_){
return mytetris.core.check_line.call(null,cljs.core.nth.call(null,field,cljs.core.first.call(null,p1__59005_SHARP_)),cljs.core.second.call(null,p1__59005_SHARP_),x);
});})(pattern,bp,x,y))
,pattern);
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,r);

}
}
}
});
mytetris.core.can_down_QMARK_ = (function mytetris$core$can_down_QMARK_(field,block){
var b = mytetris.core.move_down.call(null,block);
return mytetris.core.can_move_QMARK_.call(null,field,b);
});

//# sourceMappingURL=core.js.map?rel=1510936787206
