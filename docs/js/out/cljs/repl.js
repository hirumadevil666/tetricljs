// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__65059){
var map__65060 = p__65059;
var map__65060__$1 = ((((!((map__65060 == null)))?((((map__65060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65060):map__65060);
var m = map__65060__$1;
var n = cljs.core.get.call(null,map__65060__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__65060__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65062_65084 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65063_65085 = null;
var count__65064_65086 = (0);
var i__65065_65087 = (0);
while(true){
if((i__65065_65087 < count__65064_65086)){
var f_65088 = cljs.core._nth.call(null,chunk__65063_65085,i__65065_65087);
cljs.core.println.call(null,"  ",f_65088);

var G__65089 = seq__65062_65084;
var G__65090 = chunk__65063_65085;
var G__65091 = count__65064_65086;
var G__65092 = (i__65065_65087 + (1));
seq__65062_65084 = G__65089;
chunk__65063_65085 = G__65090;
count__65064_65086 = G__65091;
i__65065_65087 = G__65092;
continue;
} else {
var temp__4657__auto___65093 = cljs.core.seq.call(null,seq__65062_65084);
if(temp__4657__auto___65093){
var seq__65062_65094__$1 = temp__4657__auto___65093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65062_65094__$1)){
var c__44860__auto___65095 = cljs.core.chunk_first.call(null,seq__65062_65094__$1);
var G__65096 = cljs.core.chunk_rest.call(null,seq__65062_65094__$1);
var G__65097 = c__44860__auto___65095;
var G__65098 = cljs.core.count.call(null,c__44860__auto___65095);
var G__65099 = (0);
seq__65062_65084 = G__65096;
chunk__65063_65085 = G__65097;
count__65064_65086 = G__65098;
i__65065_65087 = G__65099;
continue;
} else {
var f_65100 = cljs.core.first.call(null,seq__65062_65094__$1);
cljs.core.println.call(null,"  ",f_65100);

var G__65101 = cljs.core.next.call(null,seq__65062_65094__$1);
var G__65102 = null;
var G__65103 = (0);
var G__65104 = (0);
seq__65062_65084 = G__65101;
chunk__65063_65085 = G__65102;
count__65064_65086 = G__65103;
i__65065_65087 = G__65104;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_65105 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44021__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44021__auto__)){
return or__44021__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_65105);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_65105)))?cljs.core.second.call(null,arglists_65105):arglists_65105));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__65066_65106 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65067_65107 = null;
var count__65068_65108 = (0);
var i__65069_65109 = (0);
while(true){
if((i__65069_65109 < count__65068_65108)){
var vec__65070_65110 = cljs.core._nth.call(null,chunk__65067_65107,i__65069_65109);
var name_65111 = cljs.core.nth.call(null,vec__65070_65110,(0),null);
var map__65073_65112 = cljs.core.nth.call(null,vec__65070_65110,(1),null);
var map__65073_65113__$1 = ((((!((map__65073_65112 == null)))?((((map__65073_65112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65073_65112.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65073_65112):map__65073_65112);
var doc_65114 = cljs.core.get.call(null,map__65073_65113__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_65115 = cljs.core.get.call(null,map__65073_65113__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_65111);

cljs.core.println.call(null," ",arglists_65115);

if(cljs.core.truth_(doc_65114)){
cljs.core.println.call(null," ",doc_65114);
} else {
}

var G__65116 = seq__65066_65106;
var G__65117 = chunk__65067_65107;
var G__65118 = count__65068_65108;
var G__65119 = (i__65069_65109 + (1));
seq__65066_65106 = G__65116;
chunk__65067_65107 = G__65117;
count__65068_65108 = G__65118;
i__65069_65109 = G__65119;
continue;
} else {
var temp__4657__auto___65120 = cljs.core.seq.call(null,seq__65066_65106);
if(temp__4657__auto___65120){
var seq__65066_65121__$1 = temp__4657__auto___65120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65066_65121__$1)){
var c__44860__auto___65122 = cljs.core.chunk_first.call(null,seq__65066_65121__$1);
var G__65123 = cljs.core.chunk_rest.call(null,seq__65066_65121__$1);
var G__65124 = c__44860__auto___65122;
var G__65125 = cljs.core.count.call(null,c__44860__auto___65122);
var G__65126 = (0);
seq__65066_65106 = G__65123;
chunk__65067_65107 = G__65124;
count__65068_65108 = G__65125;
i__65069_65109 = G__65126;
continue;
} else {
var vec__65075_65127 = cljs.core.first.call(null,seq__65066_65121__$1);
var name_65128 = cljs.core.nth.call(null,vec__65075_65127,(0),null);
var map__65078_65129 = cljs.core.nth.call(null,vec__65075_65127,(1),null);
var map__65078_65130__$1 = ((((!((map__65078_65129 == null)))?((((map__65078_65129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65078_65129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65078_65129):map__65078_65129);
var doc_65131 = cljs.core.get.call(null,map__65078_65130__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_65132 = cljs.core.get.call(null,map__65078_65130__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_65128);

cljs.core.println.call(null," ",arglists_65132);

if(cljs.core.truth_(doc_65131)){
cljs.core.println.call(null," ",doc_65131);
} else {
}

var G__65133 = cljs.core.next.call(null,seq__65066_65121__$1);
var G__65134 = null;
var G__65135 = (0);
var G__65136 = (0);
seq__65066_65106 = G__65133;
chunk__65067_65107 = G__65134;
count__65068_65108 = G__65135;
i__65069_65109 = G__65136;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__65080 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__65081 = null;
var count__65082 = (0);
var i__65083 = (0);
while(true){
if((i__65083 < count__65082)){
var role = cljs.core._nth.call(null,chunk__65081,i__65083);
var temp__4657__auto___65137__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___65137__$1)){
var spec_65138 = temp__4657__auto___65137__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_65138));
} else {
}

var G__65139 = seq__65080;
var G__65140 = chunk__65081;
var G__65141 = count__65082;
var G__65142 = (i__65083 + (1));
seq__65080 = G__65139;
chunk__65081 = G__65140;
count__65082 = G__65141;
i__65083 = G__65142;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__65080);
if(temp__4657__auto____$1){
var seq__65080__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65080__$1)){
var c__44860__auto__ = cljs.core.chunk_first.call(null,seq__65080__$1);
var G__65143 = cljs.core.chunk_rest.call(null,seq__65080__$1);
var G__65144 = c__44860__auto__;
var G__65145 = cljs.core.count.call(null,c__44860__auto__);
var G__65146 = (0);
seq__65080 = G__65143;
chunk__65081 = G__65144;
count__65082 = G__65145;
i__65083 = G__65146;
continue;
} else {
var role = cljs.core.first.call(null,seq__65080__$1);
var temp__4657__auto___65147__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___65147__$2)){
var spec_65148 = temp__4657__auto___65147__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_65148));
} else {
}

var G__65149 = cljs.core.next.call(null,seq__65080__$1);
var G__65150 = null;
var G__65151 = (0);
var G__65152 = (0);
seq__65080 = G__65149;
chunk__65081 = G__65150;
count__65082 = G__65151;
i__65083 = G__65152;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1510936796711
