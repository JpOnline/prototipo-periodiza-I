// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.prototipo');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('pr4.periodization');
goog.require('button');
goog.require('slider');
goog.require('select');
goog.require('menu_item');
goog.require('form_control_label');
goog.require('checkbox');
goog.require('expand_more');
goog.require('expand_less');
goog.require('search');
goog.require('chevron_left');
goog.require('chevron_right');
goog.require('google_charts');
goog.require('tick.alpha.api');
goog.require('re_frame.core');
goog.require('pr4.app_state');
goog.require('pr4.events');
goog.require('pr4.util');
goog.require('pr4.external_storage');
goog.require('cljs.spec.alpha');
goog.require('day8.re_frame.tracing');
pr4.prototipo.global$module$button = goog.global["Button"];
pr4.prototipo.global$module$slider = goog.global["Slider"];
pr4.prototipo.global$module$select = goog.global["Select"];
pr4.prototipo.global$module$menu_item = goog.global["MenuItem"];
pr4.prototipo.global$module$form_control_label = goog.global["FormControlLabel"];
pr4.prototipo.global$module$checkbox = goog.global["Checkbox"];
pr4.prototipo.global$module$expand_more = goog.global["ExpandMore"];
pr4.prototipo.global$module$expand_less = goog.global["ExpandLess"];
pr4.prototipo.global$module$search = goog.global["Search"];
pr4.prototipo.global$module$chevron_left = goog.global["ChevronLeft"];
pr4.prototipo.global$module$chevron_right = goog.global["ChevronRight"];
pr4.prototipo.global$module$google_charts = goog.global["GoogleCharts"];
devcards.core.start_devcard_ui_BANG__STAR_.call(null);
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.init_app_state !== 'undefined')){
} else {
pr4.prototipo.init_app_state = (function (){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return pr4.external_storage.init_app_state.call(null);
})()
;
}
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.devcards_hidden !== 'undefined')){
} else {
pr4.prototipo.devcards_hidden = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"hidding-cards","hidding-cards",-932317179)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hidding-cards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26391 = (function (meta26392){
this.meta26392 = meta26392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26393,meta26392__$1){
var self__ = this;
var _26393__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26391(meta26392__$1));
});

pr4.prototipo.t_pr4$prototipo26391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26393){
var self__ = this;
var _26393__$1 = this;
return self__.meta26392;
});

pr4.prototipo.t_pr4$prototipo26391.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26391.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__24579__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"hide-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__24579__auto____$1){
return (function (){
var seq__26394 = cljs.core.seq.call(null,cljs.core.deref.call(null,pr4.prototipo.devcards_hidden));
var chunk__26395 = null;
var count__26396 = (0);
var i__26397 = (0);
while(true){
if((i__26397 < count__26396)){
var hidden_atom = cljs.core._nth.call(null,chunk__26395,i__26397);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__26402 = seq__26394;
var G__26403 = chunk__26395;
var G__26404 = count__26396;
var G__26405 = (i__26397 + (1));
seq__26394 = G__26402;
chunk__26395 = G__26403;
count__26396 = G__26404;
i__26397 = G__26405;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26394);
if(temp__5735__auto__){
var seq__26394__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26394__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26394__$1);
var G__26406 = cljs.core.chunk_rest.call(null,seq__26394__$1);
var G__26407 = c__4550__auto__;
var G__26408 = cljs.core.count.call(null,c__4550__auto__);
var G__26409 = (0);
seq__26394 = G__26406;
chunk__26395 = G__26407;
count__26396 = G__26408;
i__26397 = G__26409;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__26394__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__26410 = cljs.core.next.call(null,seq__26394__$1);
var G__26411 = null;
var G__26412 = (0);
var G__26413 = (0);
seq__26394 = G__26410;
chunk__26395 = G__26411;
count__26396 = G__26412;
i__26397 = G__26413;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__24579__auto____$1))
], null),"hide all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"show-all",new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__24579__auto____$1){
return (function (){
var seq__26398 = cljs.core.seq.call(null,cljs.core.deref.call(null,pr4.prototipo.devcards_hidden));
var chunk__26399 = null;
var count__26400 = (0);
var i__26401 = (0);
while(true){
if((i__26401 < count__26400)){
var hidden_atom = cljs.core._nth.call(null,chunk__26399,i__26401);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__26414 = seq__26398;
var G__26415 = chunk__26399;
var G__26416 = count__26400;
var G__26417 = (i__26401 + (1));
seq__26398 = G__26414;
chunk__26399 = G__26415;
count__26400 = G__26416;
i__26401 = G__26417;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__26398);
if(temp__5735__auto__){
var seq__26398__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26398__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26398__$1);
var G__26418 = cljs.core.chunk_rest.call(null,seq__26398__$1);
var G__26419 = c__4550__auto__;
var G__26420 = cljs.core.count.call(null,c__4550__auto__);
var G__26421 = (0);
seq__26398 = G__26418;
chunk__26399 = G__26419;
count__26400 = G__26420;
i__26401 = G__26421;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__26398__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__26422 = cljs.core.next.call(null,seq__26398__$1);
var G__26423 = null;
var G__26424 = (0);
var G__26425 = (0);
seq__26398 = G__26422;
chunk__26399 = G__26423;
count__26400 = G__26424;
i__26401 = G__26425;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__24579__auto____$1))
], null),"show all"], null)], null);
});
;})(card_container_style,this__24579__auto____$1))
})();
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26392","meta26392",701553770,null)], null);
});

pr4.prototipo.t_pr4$prototipo26391.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26391.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26391";

pr4.prototipo.t_pr4$prototipo26391.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26391");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26391.
 */
pr4.prototipo.__GT_t_pr4$prototipo26391 = (function pr4$prototipo$__GT_t_pr4$prototipo26391(meta26392){
return (new pr4.prototipo.t_pr4$prototipo26391(meta26392));
});

}

return (new pr4.prototipo.t_pr4$prototipo26391(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Por-que-o-Periodiza?","Por-que-o-Periodiza?",46885131)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Por-que-o-Periodiza?",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26426 = (function (meta26427){
this.meta26427 = meta26427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26428,meta26427__$1){
var self__ = this;
var _26428__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26426(meta26427__$1));
});

pr4.prototipo.t_pr4$prototipo26426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26428){
var self__ = this;
var _26428__$1 = this;
return self__.meta26427;
});

pr4.prototipo.t_pr4$prototipo26426.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26426.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26429 = cljs.core.deref.call(null,devcard_data);
var map__26429__$1 = (((((!((map__26429 == null))))?(((((map__26429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26429):map__26429);
var hidden_QMARK_ = cljs.core.get.call(null,map__26429__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26429,map__26429__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26429,map__26429__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "padding": "20px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "margin": "20px 0 10px 0"})], null),"O que \u00E9 o Periodiza?"], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),(function (){var p_style = ({"textIndent": "30px"});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"O Periodiza \u00E9 uma ferramenta para o educador f\u00EDsico que faz um planejamento de longo prazo para seus alunos. O objetivo da ferramenta \u00E9 ajudar em c\u00E1lculos de volume e intensidade de treino sem restring\u00ED-lo, ou seja, dando a liberdade total para adaptar o planejamento a realidade de seu aluno."], null)], null);
})()], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26427","meta26427",1745250349,null)], null);
});

pr4.prototipo.t_pr4$prototipo26426.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26426.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26426";

pr4.prototipo.t_pr4$prototipo26426.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26426");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26426.
 */
pr4.prototipo.__GT_t_pr4$prototipo26426 = (function pr4$prototipo$__GT_t_pr4$prototipo26426(meta26427){
return (new pr4.prototipo.t_pr4$prototipo26426(meta26427));
});

}

return (new pr4.prototipo.t_pr4$prototipo26426(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"A-metodologia-da-periodiza\u00E7\u00E3o","A-metodologia-da-periodiza\u00E7\u00E3o",1930871409)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"A-metodologia-da-periodiza\u00E7\u00E3o",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26431 = (function (meta26432){
this.meta26432 = meta26432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26433,meta26432__$1){
var self__ = this;
var _26433__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26431(meta26432__$1));
});

pr4.prototipo.t_pr4$prototipo26431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26433){
var self__ = this;
var _26433__$1 = this;
return self__.meta26432;
});

pr4.prototipo.t_pr4$prototipo26431.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26431.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26434 = cljs.core.deref.call(null,devcard_data);
var map__26434__$1 = (((((!((map__26434 == null))))?(((((map__26434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26434):map__26434);
var hidden_QMARK_ = cljs.core.get.call(null,map__26434__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26434,map__26434__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26434,map__26434__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "padding": "20px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "margin": "20px 0 10px 0"})], null),"A metodologia da periodiza\u00E7\u00E3o"], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),(function (){var p_style = ({"textIndent": "30px"});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"O per\u00EDodo total do planejamento \u00E9 chamado de ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"macrociclo"], null)," divido em 3 fases: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"b\u00E1sica"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"espec\u00EDfica"], null)," e ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"transi\u00E7\u00E3o"], null),"."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"fase b\u00E1sica"], null)," \u00E9 respons\u00E1vel por uma adapta\u00E7\u00E3o do aluno, \u00E9 caracterizada por um volume de treino alto e intensidade baixa."], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"fase espec\u00EDfica"], null)," \u00E9 caracterizada por um volume baixo e uma intensidade alta, \u00E9 o per\u00EDodo em que o aluno encontra seu auge de intensidade. "], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"fase de transi\u00E7\u00E3o"], null)," \u00E9 o per\u00EDodo que antecede uma pr\u00F3xima periodiza\u00E7\u00E3o, com o objetivo de recuperar o aluno. "], null)], null);
})()], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26432","meta26432",53076366,null)], null);
});

pr4.prototipo.t_pr4$prototipo26431.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26431.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26431";

pr4.prototipo.t_pr4$prototipo26431.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26431");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26431.
 */
pr4.prototipo.__GT_t_pr4$prototipo26431 = (function pr4$prototipo$__GT_t_pr4$prototipo26431(meta26432){
return (new pr4.prototipo.t_pr4$prototipo26431(meta26432));
});

}

return (new pr4.prototipo.t_pr4$prototipo26431(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
(new pr4.prototipo.global$module$google_charts()).load("current",({"packages": ["timeline"]}));
pr4.prototipo.draw_timeline_chart = (function pr4$prototipo$draw_timeline_chart(element_id,data_array_input,chart_width){
return (function (){
var g_charts_instance = (new pr4.prototipo.global$module$google_charts());
var el = document.getElementById(element_id);
var color_map = cljs.core.PersistentHashMap.fromArrays(["Estabilizador","Base","Espec\u00EDfica","Macroc\u00EDclo","Ordin\u00E1rio","Recupera\u00E7\u00E3o","Auge","B\u00E1sica","Choque 1","Controle","Recuperativo","Choque 2","Incorporativo","Incorpora\u00E7\u00E3o","Transi\u00E7\u00E3o"],["#b7a6cd","#86acd3","#2965af","#3bbab5","#86acd3","#83d1d5","#3276b5","#69419b","#b7a6cd","#4cb4b9","#83d1d5","#3276b5","#8869ad","#8869ad","#44a3a8"]);
var data_array = cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,cljs.core.clj__GT_js,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Type","Name",({"role": "style"}),"Start","End"], null),cljs.core.map.call(null,((function (g_charts_instance,el,color_map){
return (function (p__26438){
var vec__26439 = p__26438;
var type = cljs.core.nth.call(null,vec__26439,(0),null);
var name = cljs.core.nth.call(null,vec__26439,(1),null);
var start = cljs.core.nth.call(null,vec__26439,(2),null);
var end = cljs.core.nth.call(null,vec__26439,(3),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,name,color_map.call(null,name),tick.alpha.api.inst.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(start),"T00:00"].join('')),tick.alpha.api.inst.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(end),"T00:00"].join(''))], null);
});})(g_charts_instance,el,color_map))
,data_array_input))));
var data = ((function (g_charts_instance,el,color_map,data_array){
return (function (){
return g_charts_instance.api.visualization.arrayToDataTable(data_array);
});})(g_charts_instance,el,color_map,data_array))
;
var options = ({"timeline": ({"showRowLabels": false})});
var draw_fn = ((function (g_charts_instance,el,color_map,data_array,data,options){
return (function (){
var chart = (new g_charts_instance.api.visualization.Timeline(el));
var select_handler = ((function (chart,g_charts_instance,el,color_map,data_array,data,options){
return (function (){
return ((function (chart,g_charts_instance,el,color_map,data_array,data,options){
return (function (p1__26437_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","zoom-macro-timeline","pr4.events/zoom-macro-timeline",1070822918),p1__26437_SHARP_], null));
});})(chart,g_charts_instance,el,color_map,data_array,data,options))
.call(null,((function (chart,g_charts_instance,el,color_map,data_array,data,options){
return (function (p1__26436_SHARP_){
return cljs.core.nth.call(null,data_array_input,p1__26436_SHARP_,cljs.core.last.call(null,data_array_input));
});})(chart,g_charts_instance,el,color_map,data_array,data,options))
.call(null,cljs.core.first.call(null,chart.getSelection()).row));
});})(chart,g_charts_instance,el,color_map,data_array,data,options))
;
g_charts_instance.api.visualization.events.addListener(chart,"select",select_handler);

el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((document.getElementsByClassName("com-rigsomelight-devcard").item((0)).clientWidth * chart_width)),"px"].join('');

return chart.draw(data.call(null),options);
});})(g_charts_instance,el,color_map,data_array,data,options))
;
return g_charts_instance.load(draw_fn);
});
});
pr4.prototipo.redef_prdz_state = (function pr4$prototipo$redef_prdz_state(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-state","pr4.prototipo/redef-prdz-state",503596578),pr4.prototipo.redef_prdz_state);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redef_prdz_box_clicked = (function pr4$prototipo$redef_prdz_box_clicked(app_state,p__26442){
var vec__26443 = p__26442;
var _ = cljs.core.nth.call(null,vec__26443,(0),null);
var redef_prdz_state = cljs.core.nth.call(null,vec__26443,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"redef-prdz-state","redef-prdz-state",-1252985719,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))));

return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"state","state",-1988618099)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = redef_prdz_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"redef-prdz-state","redef-prdz-state",-1252985719,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"state","state",-1988618099)], null),new cljs.core.Symbol(null,"redef-prdz-state","redef-prdz-state",-1252985719,null)),(1)),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1((function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),cljs.core.list(new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),(0));
}catch (e26446){var e = e26446;
throw e;
}});
} else {
pr4.prototipo.redef_prdz_box_clicked = (function pr4$prototipo$redef_prdz_box_clicked(app_state,p__26447){
var vec__26448 = p__26447;
var _ = cljs.core.nth.call(null,vec__26448,(0),null);
var redef_prdz_state = cljs.core.nth.call(null,vec__26448,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"state","state",-1988618099)], null),redef_prdz_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"domain","domain",1847214937).cljs$core$IFn$_invoke$arity$1(app_state));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-box-clicked","pr4.prototipo/redef-prdz-box-clicked",-187746555),pr4.prototipo.redef_prdz_box_clicked);
pr4.prototipo.redef_prdz_box_display = (function pr4$prototipo$redef_prdz_box_display(state){
var G__26451 = state;
switch (G__26451) {
case "editing-goal-level":
return "none";

break;
case "editing-week":
return "none";

break;
case "editing-time":
return "none";

break;
case "editing-duration":
return "none";

break;
default:
return "flex";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-box-display","pr4.prototipo/redef-prdz-box-display",1194187874),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-state","pr4.prototipo/redef-prdz-state",503596578)], null),pr4.prototipo.redef_prdz_box_display);
pr4.prototipo.redef_prdz_level_goal_display = (function pr4$prototipo$redef_prdz_level_goal_display(state){
var G__26453 = state;
switch (G__26453) {
case "editing-goal-level":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null);

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-level-goal-display","pr4.prototipo/redef-prdz-level-goal-display",-1558621209),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-state","pr4.prototipo/redef-prdz-state",503596578)], null),pr4.prototipo.redef_prdz_level_goal_display);
pr4.prototipo.redef_prdz_week_display = (function pr4$prototipo$redef_prdz_week_display(state){
var G__26455 = state;
switch (G__26455) {
case "editing-week":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null);

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-week-display","pr4.prototipo/redef-prdz-week-display",-1845883597),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-state","pr4.prototipo/redef-prdz-state",503596578)], null),pr4.prototipo.redef_prdz_week_display);
pr4.prototipo.redef_prdz_time_display = (function pr4$prototipo$redef_prdz_time_display(state){
var G__26457 = state;
switch (G__26457) {
case "editing-time":
return "grid";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-time-display","pr4.prototipo/redef-prdz-time-display",1566282473),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-state","pr4.prototipo/redef-prdz-state",503596578)], null),pr4.prototipo.redef_prdz_time_display);
pr4.prototipo.redef_prdz_duration_display = (function pr4$prototipo$redef_prdz_duration_display(state){
var G__26459 = state;
switch (G__26459) {
case "editing-duration":
return "flex";

break;
default:
return "none";

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-duration-display","pr4.prototipo/redef-prdz-duration-display",2001443448),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-state","pr4.prototipo/redef-prdz-state",503596578)], null),pr4.prototipo.redef_prdz_duration_display);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redef_prdz_edit_cancel = (function pr4$prototipo$redef_prdz_edit_cancel(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26461){var e = e26461;
throw e;
}});
} else {
pr4.prototipo.redef_prdz_edit_cancel = (function pr4$prototipo$redef_prdz_edit_cancel(app_state){
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"backup","backup",26347393)], null)));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-edit-cancel","pr4.prototipo/redef-prdz-edit-cancel",2037157106),pr4.prototipo.redef_prdz_edit_cancel);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redef_prdz_edit_ok = (function pr4$prototipo$redef_prdz_edit_ok(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393))));

return debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,cljs.core.update_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(2)),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"state","state",-1988618099)),(1)),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.dissoc;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),new cljs.core.Keyword(null,"backup","backup",26347393)),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),new cljs.core.Symbol(null,"dissoc","dissoc",1039760994,null),new cljs.core.Keyword(null,"backup","backup",26347393)),(0));
}catch (e26462){var e = e26462;
throw e;
}});
} else {
pr4.prototipo.redef_prdz_edit_ok = (function pr4$prototipo$redef_prdz_edit_ok(app_state){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"state","state",-1988618099)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"backup","backup",26347393));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-edit-ok","pr4.prototipo/redef-prdz-edit-ok",-351863494),pr4.prototipo.redef_prdz_edit_ok);
pr4.prototipo.redef_prdz_buttons_display = (function pr4$prototipo$redef_prdz_buttons_display(state){
var G__26463 = state;
switch (G__26463) {
case "editing-goal-level":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);

break;
case "editing-week":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);

break;
case "editing-time":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);

break;
case "editing-duration":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"flex"], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null);

}
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-buttons-display","pr4.prototipo/redef-prdz-buttons-display",821311093),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-state","pr4.prototipo/redef-prdz-state",503596578)], null),pr4.prototipo.redef_prdz_buttons_display);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Macroc\u00EDclo","Macroc\u00EDclo",1970044108)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Macroc\u00EDclo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26467 = (function (meta26468){
this.meta26468 = meta26468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26469,meta26468__$1){
var self__ = this;
var _26469__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26467(meta26468__$1));
});

pr4.prototipo.t_pr4$prototipo26467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26469){
var self__ = this;
var _26469__$1 = this;
return self__.meta26468;
});

pr4.prototipo.t_pr4$prototipo26467.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26467.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26470 = cljs.core.deref.call(null,devcard_data);
var map__26470__$1 = (((((!((map__26470 == null))))?(((((map__26470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26470):map__26470);
var hidden_QMARK_ = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#session2-chart","div#session2-chart",250490069),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingTop": "20px", "height": (200)}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pr4.prototipo.draw_chart.call(null,"session2-chart",pr4.prototipo.sessions__GT_chart_data2.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","zoom-dates","pr4.prototipo/zoom-dates",1521240307)], null)))),0.95,pr4.prototipo.normal_chart_options.call(null,(4085),(14825),(63),(90)))], null),"Carregando.."], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#macrocycle-timeline","div#macrocycle-timeline",-1505355510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingTop": "20px", "height": (250)}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),pr4.prototipo.draw_timeline_chart.call(null,"macrocycle-timeline",cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","macrocycle-timeline","pr4.app-state/macrocycle-timeline",-2103232921)], null))),0.98)], null),"Carregando.."], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
var two_line_box = ({"flexFlow": "column", "cursor": "pointer", "padding": "4px", "display": "flex", "boxShadow": "1px 3px 6px 2px #0000003b", "backgroundColor": "#ebebeb", "flexGrow": (1), "alignItems": "center", "margin": "10px 4px 0 4px"});
var adjust_area = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ebebeb",new cljs.core.Keyword(null,"height","height",1025178622),"10vh",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 10px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null);
var adjust_buttons_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ebebeb",new cljs.core.Keyword(null,"height","height",1025178622),"10vh",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"space-around",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),"2px"], null);
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),".choose-button {\n                    margin: 0 2px;\n                    flex: 1;\n                    padding: 4px;\n                    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),\n                    0 1px 5px 0 rgba(0, 0, 0, 0.12),\n                    0 3px 1px -2px rgba(0, 0, 0, 0.2);\n                    border-radius: 4px;\n                    cursor: pointer;\n                  }\n                  .selected-light{\n                    background: #35b39d;\n                    color: white;\n                  }\n                  .selected-dark{\n                    background: #308c7c;\n                    color: white;\n                  }\n                  .deselected{\n                    background: none;\n                    color: black;\n                  }"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-box-display","pr4.prototipo/redef-prdz-box-display",1194187874)], null))), "flexWrap": "wrap"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "flexGrow": (1)})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),two_line_box,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-box-clicked","pr4.prototipo/redef-prdz-box-clicked",-187746555),"editing-goal-level"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-txt","pr4.prototipo/redefine-periodization-goal-txt",-1982846338)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-txt","pr4.prototipo/redefine-periodization-level-txt",-389777345)], null)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),two_line_box,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-box-clicked","pr4.prototipo/redef-prdz-box-clicked",-187746555),"editing-time"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target","pr4.prototipo/redefine-periodization-session-time-target",-334973700)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tempo da Sess\u00E3o"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "flexGrow": (1)})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),two_line_box,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-box-clicked","pr4.prototipo/redef-prdz-box-clicked",-187746555),"editing-week"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions","pr4.prototipo/redefine-periodization-week-sessions",178865259)], null)))),"x"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"por Semana"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),two_line_box,new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-box-clicked","pr4.prototipo/redef-prdz-box-clicked",-187746555),"editing-duration"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-planning-months-duration","pr4.prototipo/redef-prdz-planning-months-duration",720488816)], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"de Planejamento"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.goal","div.goal",-1770576318),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,adjust_area,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-level-goal-display","pr4.prototipo/redef-prdz-level-goal-display",-1558621209)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"Objetivo"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "textAlign": "center", "alignSelf": "stretch"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"Hipertrofia"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"Hipertrofia"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Hipertrofia"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"For\u00E7a"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"For\u00E7a"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"For\u00E7a"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"Pot\u00EAncia"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"Pot\u00EAncia"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Pot\u00EAncia"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194)], null))).call(null,"Resist\u00EAncia"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"Resist\u00EAncia"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Resist\u00EAncia"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,adjust_area,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-level-goal-display","pr4.prototipo/redef-prdz-level-goal-display",-1558621209)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"N\u00EDvel"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "textAlign": "center", "alignSelf": "stretch"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814)], null))).call(null,"Iniciante"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"Iniciante"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Iniciante"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814)], null))).call(null,"Intermedi\u00E1rio"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"Intermedi\u00E1rio"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Intermedi\u00E1rio"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814)], null))).call(null,"Avan\u00E7ado"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"Avan\u00E7ado"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Avan\u00E7ado"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,adjust_area,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-week-display","pr4.prototipo/redef-prdz-week-display",-1845883597)], null)))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"Sess\u00F5es na Semana"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "textAlign": "center", "alignSelf": "stretch"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Domingo"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Domingo"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Dom"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Segunda"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Segunda"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Seg"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Ter\u00E7a"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Ter\u00E7a"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Ter"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Quarta"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Quarta"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Qua"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Quinta"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Quinta"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Qui"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"Sexta"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"Sexta"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Sex"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.choose-button","div.choose-button",64476900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606)], null))).call(null,"S\u00E1bado"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"S\u00E1bado"], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Sab"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-session-time","div.adjust-session-time",-2134098498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#ebebeb", "height": "10vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-time-display","pr4.prototipo/redef-prdz-time-display",1566282473)], null))), "grid": "2fr 1fr / 1fr 1fr 1fr"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 1 / 2 / 4", "placeSelf": "end center", "fontSize": "1.17em"})], null),"Tempo M\u00E9dio por Sess\u00E3o"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "cursor": "pointer", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),(-300)], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target","pr4.prototipo/redefine-periodization-session-time-target",-334973700)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "cursor": "pointer", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),(300)], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.duration-selector","div.duration-selector",65913048),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#ebebeb", "height": "10vh", "padding": "0 10px", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-duration-display","pr4.prototipo/redef-prdz-duration-display",2001443448)], null))), "justifyContent": "space-evenly", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"In\u00EDcio do planejamento",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start","pr4.prototipo/redefine-periodization-planning-start",1739749629)], null))),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (this$){
return reagent.core.dom_node.call(null,this$).onchange = ((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (p1__26465_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),p1__26465_SHARP_.target.value], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
;
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null)], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.util.with_mount_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vaadin-date-picker","vaadin-date-picker",293781945),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Final do planejamento",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end","pr4.prototipo/redefine-periodization-planning-end",-106317155)], null))),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (this$){
return reagent.core.dom_node.call(null,this$).onchange = ((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (p1__26466_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),p1__26466_SHARP_.target.value], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
;
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null)], null))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.duration-text","div.duration-text",-1395370019),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#ebebeb", "height": "8vh", "padding": "0 10px", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-duration-display","pr4.prototipo/redef-prdz-duration-display",2001443448)], null))), "flexDirection": "column", "alignItems": "center"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "small", "textAlign": "center", "color": "#555"})], null),"Dura\u00E7\u00E3o do Planejamento"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"fontSize": "medium", "textAlign": "center", "color": "black"})], null),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-duration","pr4.prototipo/redefine-periodization-planning-duration",-1882696871)], null)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,adjust_buttons_style,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-buttons-display","pr4.prototipo/redef-prdz-buttons-display",821311093)], null)))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#3bbcb7", "color": "white"}),new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-edit-cancel","pr4.prototipo/redef-prdz-edit-cancel",2037157106)], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null),"Cancelar"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"width": "110px", "backgroundColor": "#3bbcb7", "color": "white"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redef-prdz-edit-ok","pr4.prototipo/redef-prdz-edit-ok",-351863494)], null));
});})(two_line_box,adjust_area,adjust_buttons_style,map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"variant","variant",-424354234),"contained"], null),"Ok"], null)], null)], null);
});})(map__26470,map__26470__$1,hidden_QMARK_,this__24579__auto____$1))
], null)], null)], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26468","meta26468",216986032,null)], null);
});

pr4.prototipo.t_pr4$prototipo26467.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26467.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26467";

pr4.prototipo.t_pr4$prototipo26467.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26467");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26467.
 */
pr4.prototipo.__GT_t_pr4$prototipo26467 = (function pr4$prototipo$__GT_t_pr4$prototipo26467(meta26468){
return (new pr4.prototipo.t_pr4$prototipo26467(meta26468));
});

}

return (new pr4.prototipo.t_pr4$prototipo26467(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("pr4.prototipo","macrocycle-timeline","pr4.prototipo/macrocycle-timeline",-1203941531,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.Keyword(null,"end-date","end-date",-208259642)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),null,(6),null,(3),null,(2),null,(5),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01",null,"2019-07-01",null,"2018-09-01",null,"2019-06-01",null,"2018-12-01",null,"2019-01-01",null,"2019-05-01",null,"2018-10-01",null,"2018-08-01",null,"2019-02-01",null,"2019-03-01",null,"2019-04-01",null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01",null,"2020-07-01",null,"2019-12-01",null,"2020-05-01",null,"2020-06-01",null,"2020-02-01",null,"2019-09-01",null,"2020-04-01",null,"2019-08-01",null,"2019-10-01",null,"2020-08-01",null,"2020-01-01",null,"2019-11-01",null], null), null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"sessions-per-week","sessions-per-week",2019796502),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [(4),"null",(6),"null",(3),"null",(2),"null",(5),"null"], null), null),new cljs.core.Keyword(null,"initial-date","initial-date",718380793),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null),new cljs.core.Keyword(null,"end-date","end-date",-208259642),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
pr4.prototipo.valid_redef_args_QMARK_ = (function pr4$prototipo$valid_redef_args_QMARK_(app_state){
var vec__26472 = pr4.prototipo.get_in_redefine_periodization.call(null,app_state);
var days_of_training = cljs.core.nth.call(null,vec__26472,(0),null);
var initial_date = cljs.core.nth.call(null,vec__26472,(1),null);
var end_date = cljs.core.nth.call(null,vec__26472,(2),null);
var sessions_time_target = cljs.core.nth.call(null,vec__26472,(3),null);
var total_days = pr4.util.days_difference.call(null,end_date,initial_date);
var days_per_micro = ((28) / cljs.core.count.call(null,days_of_training));
var micros_amount = Math.floor((total_days / days_per_micro));
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,days_of_training))){
alert("Selecione pelo menos um dia na semana de treino.");

return false;
} else {
if((micros_amount < (7))){
alert("Desculpe, mas com essa altera\u00E7\u00E3o o planejamento fica muito curto.");

return false;
} else {
if(cljs.core._EQ_.call(null,(7),cljs.core.count.call(null,days_of_training))){
alert("N\u00E3o \u00E9 bom ficar pelo menos um dia na semana sem treinar? \u00C9 s\u00F3 uma sugest\u00E3o ;)");

return true;
} else {
if((sessions_time_target <= (0))){
alert("O tempo m\u00E9dio por sess\u00E3o tem que ser maior que zero :/");

return false;
} else {
return true;

}
}
}
}
});
pr4.prototipo.domain_sessions = (function pr4$prototipo$domain_sessions(days_of_training,initial_date,end_date,sessions_time_target){
var total_days = pr4.util.days_difference.call(null,end_date,initial_date);
var days_per_micro = ((28) / cljs.core.count.call(null,days_of_training));
var micros_amount = Math.floor((total_days / days_per_micro));
return pr4.periodization.periodization_sessions.call(null,((4) * micros_amount),sessions_time_target);
});
pr4.prototipo.macrocycle_timeline = (function pr4$prototipo$macrocycle_timeline(days_of_training,initial_date,end_date){
var total_days = pr4.util.days_difference.call(null,pr4.util.plus_days.call(null,end_date,(-3)),initial_date);
var days_per_micro = ((28) / cljs.core.count.call(null,days_of_training));
var micros_amount = Math.floor((total_days / days_per_micro));
var phases = cljs.core.remove.call(null,cljs.core.zero_QMARK_,pr4.periodization.count_phases.call(null,micros_amount));
var mesos = cljs.core.mapcat.call(null,((function (total_days,days_per_micro,micros_amount,phases){
return (function (p1__26476_SHARP_,p2__26475_SHARP_){
return pr4.periodization.phase_mesos.call(null,p2__26475_SHARP_,p1__26476_SHARP_);
});})(total_days,days_per_micro,micros_amount,phases))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B\u00E1sica","Espec\u00EDfica","Transi\u00E7\u00E3o"], null),phases);
var micros = cljs.core.mapcat.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos){
return (function (p1__26477_SHARP_){
return cljs.core.apply.call(null,pr4.periodization.meso_micros,p1__26477_SHARP_);
});})(total_days,days_per_micro,micros_amount,phases,mesos))
,cljs.core.map.call(null,cljs.core.vals,mesos));
var offset_list = ((function (total_days,days_per_micro,micros_amount,phases,mesos,micros){
return (function (p1__26478_SHARP_,p2__26479_SHARP_){
return cljs.core.take.call(null,cljs.core.count.call(null,p1__26478_SHARP_),cljs.core.drop.call(null,p2__26479_SHARP_,cljs.core.cycle.call(null,p1__26478_SHARP_)));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros))
;
var final_micro_date = ((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list){
return (function (start){
var i = (4);
var date = pr4.util.plus_days.call(null,start,(1));
var week_days_of_training = (function (){var current = pr4.util.plus_days.call(null,start,(1));
var index = days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current)));
while(true){
if(cljs.core._EQ_.call(null,(-1),index)){
var G__26488 = pr4.util.plus_days.call(null,current,(1));
var G__26489 = days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,pr4.util.plus_days.call(null,current,(1)))));
current = G__26488;
index = G__26489;
continue;
} else {
return offset_list.call(null,days_of_training,index);
}
break;
}
})();
while(true){
if(cljs.core._EQ_.call(null,i,(0))){
return pr4.util.plus_days.call(null,date,(-1));
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,week_days_of_training),tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,date)))){
var G__26490 = (i - (1));
var G__26491 = pr4.util.plus_days.call(null,date,(1));
var G__26492 = offset_list.call(null,week_days_of_training,(1));
i = G__26490;
date = G__26491;
week_days_of_training = G__26492;
continue;
} else {
var G__26493 = i;
var G__26494 = pr4.util.plus_days.call(null,date,(1));
var G__26495 = week_days_of_training;
i = G__26493;
date = G__26494;
week_days_of_training = G__26495;
continue;

}
}
break;
}
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list))
;
var micros__GT_dates = ((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date){
return (function (val,p__26484){
var vec__26485 = p__26484;
var type = cljs.core.nth.call(null,vec__26485,(0),null);
var category = cljs.core.nth.call(null,vec__26485,(1),null);
var micros_amount__$1 = cljs.core.nth.call(null,vec__26485,(2),null);
var last_date = (function (){var or__4131__auto__ = cljs.core.last.call(null,cljs.core.last.call(null,val));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return pr4.util.plus_days.call(null,initial_date,(-1));
}
})();
var final$ = cljs.core.nth.call(null,cljs.core.iterate.call(null,final_micro_date,last_date),micros_amount__$1);
var start = pr4.util.plus_days.call(null,last_date,(1));
return cljs.core.conj.call(null,val,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,category,start,cljs.core.str.cljs$core$IFn$_invoke$arity$1(final$)], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date))
;
var macro_final_date = cljs.core.nth.call(null,cljs.core.iterate.call(null,final_micro_date,pr4.util.plus_days.call(null,initial_date,(-1))),micros_amount);
return cljs.core.concat.call(null,cljs.core.reduce.call(null,micros__GT_dates,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date){
return (function (p1__26480_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Micro",p1__26480_SHARP_,(1)], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date))
,micros)),cljs.core.reduce.call(null,micros__GT_dates,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date){
return (function (p1__26481_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Meso",new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__26481_SHARP_),new cljs.core.Keyword(null,"micros-amount","micros-amount",-1669453673).cljs$core$IFn$_invoke$arity$1(p1__26481_SHARP_)], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date))
,mesos)),cljs.core.reduce.call(null,micros__GT_dates,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date){
return (function (p1__26482_SHARP_,p2__26483_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Fase",p1__26482_SHARP_,p2__26483_SHARP_], null));
});})(total_days,days_per_micro,micros_amount,phases,mesos,micros,offset_list,final_micro_date,micros__GT_dates,macro_final_date))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B\u00E1sica","Espec\u00EDfica","Transi\u00E7\u00E3o"], null),phases)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Macro","Macroc\u00EDclo",initial_date,cljs.core.str.cljs$core$IFn$_invoke$arity$1(macro_final_date)], null)], null));
});
pr4.prototipo.redefine_periodization_goal_txt = (function pr4$prototipo$redefine_periodization_goal_txt(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-txt","pr4.prototipo/redefine-periodization-goal-txt",-1982846338),pr4.prototipo.redefine_periodization_goal_txt);
pr4.prototipo.redefine_periodization_goal = (function pr4$prototipo$redefine_periodization_goal(goal){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 4, ["Hipertrofia","deselected","For\u00E7a","deselected","Pot\u00EAncia","deselected","Resist\u00EAncia","deselected"], null),goal,"selected-light");
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal","pr4.prototipo/redefine-periodization-goal",-123827194),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-txt","pr4.prototipo/redefine-periodization-goal-txt",-1982846338)], null),pr4.prototipo.redefine_periodization_goal);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_goal_select = (function pr4$prototipo$redefine_periodization_goal_select(app_state,p__26496){
var vec__26497 = p__26496;
var event = cljs.core.nth.call(null,vec__26497,(0),null);
var new_goal = cljs.core.nth.call(null,vec__26497,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new cljs.core.Symbol(null,"new-goal","new-goal",-1942070504,null)));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_goal;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-goal","new-goal",-1942070504,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new cljs.core.Symbol(null,"new-goal","new-goal",-1942070504,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26500){var e = e26500;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_goal_select = (function pr4$prototipo$redefine_periodization_goal_select(app_state,p__26501){
var vec__26502 = p__26501;
var event = cljs.core.nth.call(null,vec__26502,(0),null);
var new_goal = cljs.core.nth.call(null,vec__26502,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"goal","goal",-2073396501)], null),new_goal);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),pr4.prototipo.redefine_periodization_goal_select);
pr4.prototipo.redefine_periodization_level_txt = (function pr4$prototipo$redefine_periodization_level_txt(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-txt","pr4.prototipo/redefine-periodization-level-txt",-389777345),pr4.prototipo.redefine_periodization_level_txt);
pr4.prototipo.redefine_periodization_level = (function pr4$prototipo$redefine_periodization_level(level){
return cljs.core.assoc.call(null,new cljs.core.PersistentArrayMap(null, 3, ["Iniciante","deselected","Intermedi\u00E1rio","deselected","Avan\u00E7ado","deselected"], null),level,"selected-light");
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level","pr4.prototipo/redefine-periodization-level",-1942256814),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-txt","pr4.prototipo/redefine-periodization-level-txt",-389777345)], null),pr4.prototipo.redefine_periodization_level);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_level_select = (function pr4$prototipo$redefine_periodization_level_select(app_state,p__26505){
var vec__26506 = p__26505;
var event = cljs.core.nth.call(null,vec__26506,(0),null);
var new_level = cljs.core.nth.call(null,vec__26506,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.Symbol(null,"new-level","new-level",1227476992,null)));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_level;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-level","new-level",1227476992,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.Symbol(null,"new-level","new-level",1227476992,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26509){var e = e26509;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_level_select = (function pr4$prototipo$redefine_periodization_level_select(app_state,p__26510){
var vec__26511 = p__26510;
var event = cljs.core.nth.call(null,vec__26511,(0),null);
var new_level = cljs.core.nth.call(null,vec__26511,(1),null);
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"level","level",1290497552)], null),new_level);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),pr4.prototipo.redefine_periodization_level_select);
pr4.prototipo.redefine_periodization_week_sessions = (function pr4$prototipo$redefine_periodization_week_sessions(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"week-sessions","week-sessions",482312455)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions","pr4.prototipo/redefine-periodization-week-sessions",178865259),pr4.prototipo.redefine_periodization_week_sessions);
pr4.prototipo.redefine_periodization_week_sessions_class = (function pr4$prototipo$redefine_periodization_week_sessions_class(week_sessions){
var to_class = (function (day,yes_value){
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__26514_SHARP_){
return cljs.core._EQ_.call(null,day,p1__26514_SHARP_);
}),week_sessions))){
return yes_value;
} else {
return "deselected";
}
});
return new cljs.core.PersistentArrayMap(null, 7, ["Domingo",to_class.call(null,"Domingo","selected-dark"),"Segunda",to_class.call(null,"Segunda","selected-light"),"Ter\u00E7a",to_class.call(null,"Ter\u00E7a","selected-dark"),"Quarta",to_class.call(null,"Quarta","selected-light"),"Quinta",to_class.call(null,"Quinta","selected-dark"),"Sexta",to_class.call(null,"Sexta","selected-light"),"S\u00E1bado",to_class.call(null,"S\u00E1bado","selected-dark")], null);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-class","pr4.prototipo/redefine-periodization-week-sessions-class",-740846606),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions","pr4.prototipo/redefine-periodization-week-sessions",178865259)], null),pr4.prototipo.redefine_periodization_week_sessions_class);
pr4.prototipo.redefine_periodization_week_sessions_toggle = (function pr4$prototipo$redefine_periodization_week_sessions_toggle(p__26515,p__26516){
var map__26517 = p__26515;
var map__26517__$1 = (((((!((map__26517 == null))))?(((((map__26517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26517):map__26517);
var app_state = cljs.core.get.call(null,map__26517__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26518 = p__26516;
var event = cljs.core.nth.call(null,vec__26518,(0),null);
var week_day = cljs.core.nth.call(null,vec__26518,(1),null);
var full_week = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Domingo","Segunda","Ter\u00E7a","Quarta","Quinta","Sexta","S\u00E1bado"], null);
var toggle_fn = ((function (full_week,map__26517,map__26517__$1,app_state,vec__26518,event,week_day){
return (function (week_sessions){
if(cljs.core.truth_(cljs.core.set.call(null,week_sessions).call(null,week_day))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([week_day]),week_sessions);
} else {
return cljs.core.filter.call(null,cljs.core.conj.call(null,cljs.core.set.call(null,week_sessions),week_day),full_week);
}
});})(full_week,map__26517,map__26517__$1,app_state,vec__26518,event,week_day))
;
var new_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"week-sessions","week-sessions",482312455)], null),toggle_fn);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),pr4.prototipo.redefine_periodization_week_sessions_toggle);
pr4.prototipo.redefine_periodization_planning_start = (function pr4$prototipo$redefine_periodization_planning_start(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start","pr4.prototipo/redefine-periodization-planning-start",1739749629),pr4.prototipo.redefine_periodization_planning_start);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_planning_start_event = (function pr4$prototipo$redefine_periodization_planning_start_event(p__26522,p__26523){
var map__26524 = p__26522;
var map__26524__$1 = (((((!((map__26524 == null))))?(((((map__26524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26524):map__26524);
var app_state = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26525 = p__26523;
var event = cljs.core.nth.call(null,vec__26525,(0),null);
var new_start_date = cljs.core.nth.call(null,vec__26525,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_start_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.valid_redef_args_QMARK_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new cljs.core.Symbol(null,"new-start-date","new-start-date",-1261415230,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26529){var e = e26529;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_planning_start_event = (function pr4$prototipo$redefine_periodization_planning_start_event(p__26530,p__26531){
var map__26532 = p__26530;
var map__26532__$1 = (((((!((map__26532 == null))))?(((((map__26532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26532):map__26532);
var app_state = cljs.core.get.call(null,map__26532__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26533 = p__26531;
var event = cljs.core.nth.call(null,vec__26533,(0),null);
var new_start_date = cljs.core.nth.call(null,vec__26533,(1),null);
var new_app_state = cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-start","planning-start",782605822)], null),new_start_date);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),pr4.prototipo.redefine_periodization_planning_start_event);
pr4.prototipo.redefine_periodization_planning_end = (function pr4$prototipo$redefine_periodization_planning_end(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end","pr4.prototipo/redefine-periodization-planning-end",-106317155),pr4.prototipo.redefine_periodization_planning_end);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_planning_end_event = (function pr4$prototipo$redefine_periodization_planning_end_event(p__26537,p__26538){
var map__26539 = p__26537;
var map__26539__$1 = (((((!((map__26539 == null))))?(((((map__26539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26539):map__26539);
var app_state = cljs.core.get.call(null,map__26539__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26540 = p__26538;
var event = cljs.core.nth.call(null,vec__26540,(0),null);
var new_end_date = cljs.core.nth.call(null,vec__26540,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_end_date;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.valid_redef_args_QMARK_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new cljs.core.Symbol(null,"new-end-date","new-end-date",-983483857,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26544){var e = e26544;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_planning_end_event = (function pr4$prototipo$redefine_periodization_planning_end_event(p__26545,p__26546){
var map__26547 = p__26545;
var map__26547__$1 = (((((!((map__26547 == null))))?(((((map__26547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26547):map__26547);
var app_state = cljs.core.get.call(null,map__26547__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26548 = p__26546;
var event = cljs.core.nth.call(null,vec__26548,(0),null);
var new_end_date = cljs.core.nth.call(null,vec__26548,(1),null);
var new_app_state = cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"planning-end","planning-end",33818477)], null),new_end_date);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),pr4.prototipo.redefine_periodization_planning_end_event);
pr4.prototipo.redef_prdz_planning_months_duration = (function pr4$prototipo$redef_prdz_planning_months_duration(p__26552){
var vec__26553 = p__26552;
var planning_start = cljs.core.nth.call(null,vec__26553,(0),null);
var planning_end = cljs.core.nth.call(null,vec__26553,(1),null);
var total_days = pr4.util.days_difference.call(null,planning_end,planning_start);
var months_amount = Math.round((total_days / 30.5));
var days_reminder = cljs.core.rem.call(null,total_days,30.5);
var months = (((months_amount === (0)))?(1):months_amount);
return [(((days_reminder > (0)))?"+/- ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(months),(((months > (1)))?" meses":" m\u00EAs")].join('');
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redef-prdz-planning-months-duration","pr4.prototipo/redef-prdz-planning-months-duration",720488816),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start","pr4.prototipo/redefine-periodization-planning-start",1739749629)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end","pr4.prototipo/redefine-periodization-planning-end",-106317155)], null),pr4.prototipo.redef_prdz_planning_months_duration);
pr4.prototipo.redefine_periodization_planning_duration = (function pr4$prototipo$redefine_periodization_planning_duration(p__26556){
var vec__26557 = p__26556;
var planning_start = cljs.core.nth.call(null,vec__26557,(0),null);
var planning_end = cljs.core.nth.call(null,vec__26557,(1),null);
var total_days = pr4.util.days_difference.call(null,planning_end,planning_start);
var months = cljs.core.quot.call(null,total_days,30.5);
var days = Math.ceil(cljs.core.rem.call(null,total_days,30.5));
var month_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(months),(((months > (1)))?" meses":" m\u00EAs")].join('');
var days_str = (((days > (1)))?[" e ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(days)," dias"].join(''):((cljs.core._EQ_.call(null,days,(1)))?[" e ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(days)," dia"].join(''):null
));
return [month_str,days_str].join('');
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-duration","pr4.prototipo/redefine-periodization-planning-duration",-1882696871),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start","pr4.prototipo/redefine-periodization-planning-start",1739749629)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end","pr4.prototipo/redefine-periodization-planning-end",-106317155)], null),pr4.prototipo.redefine_periodization_planning_duration);
pr4.prototipo.redefine_periodization_session_time_target = (function pr4$prototipo$redefine_periodization_session_time_target(app_state){
return pr4.util.seconds__GT_minute_text.call(null,cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target","pr4.prototipo/redefine-periodization-session-time-target",-334973700),pr4.prototipo.redefine_periodization_session_time_target);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.redefine_periodization_session_time_target_add = (function pr4$prototipo$redefine_periodization_session_time_target_add(p__26560,p__26561){
var map__26562 = p__26560;
var map__26562__$1 = (((((!((map__26562 == null))))?(((((map__26562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26562):map__26562);
var app_state = cljs.core.get.call(null,map__26562__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26563 = p__26561;
var event = cljs.core.nth.call(null,vec__26563,(0),null);
var to_add = cljs.core.nth.call(null,vec__26563,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_app_state = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.update_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core._PLUS_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = to_add;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.valid_redef_args_QMARK_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})())?(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})():null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),cljs.core.list(new cljs.core.Symbol(null,"update-in","update-in",-1445516941,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"to-add","to-add",1069654325,null))], null),cljs.core.list(new cljs.core.Symbol(null,"when","when",1064114221,null),cljs.core.list(new cljs.core.Symbol(null,"valid-redef-args?","valid-redef-args?",-1220334124,null),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Symbol(null,"new-app-state","new-app-state",181186544,null),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26567){var e = e26567;
throw e;
}});
} else {
pr4.prototipo.redefine_periodization_session_time_target_add = (function pr4$prototipo$redefine_periodization_session_time_target_add(p__26568,p__26569){
var map__26570 = p__26568;
var map__26570__$1 = (((((!((map__26570 == null))))?(((((map__26570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26570):map__26570);
var app_state = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__26571 = p__26569;
var event = cljs.core.nth.call(null,vec__26571,(0),null);
var to_add = cljs.core.nth.call(null,vec__26571,(1),null);
var new_app_state = cljs.core.update_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null),cljs.core._PLUS_,to_add);
if(pr4.prototipo.valid_redef_args_QMARK_.call(null,new_app_state)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_app_state,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237)], null)], null)], null);
} else {
return null;
}
});
}
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),pr4.prototipo.redefine_periodization_session_time_target_add);
pr4.prototipo.get_in_redefine_periodization = (function pr4$prototipo$get_in_redefine_periodization(app_state){
var week_sessions = pr4.prototipo.redefine_periodization_week_sessions.call(null,app_state);
var days_of_training = cljs.core.mapv.call(null,new cljs.core.PersistentArrayMap(null, 7, ["Segunda",tick.alpha.api.MONDAY,"Ter\u00E7a",tick.alpha.api.TUESDAY,"Quarta",tick.alpha.api.WEDNESDAY,"Quinta",tick.alpha.api.THURSDAY,"Sexta",tick.alpha.api.FRIDAY,"S\u00E1bado",tick.alpha.api.SATURDAY,"Domingo",tick.alpha.api.SUNDAY], null),week_sessions);
var start_date = pr4.prototipo.redefine_periodization_planning_start.call(null,app_state);
var end_date = pr4.prototipo.redefine_periodization_planning_end.call(null,app_state);
var sessions_time_target = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"redefine-periodization","redefine-periodization",854484643),new cljs.core.Keyword(null,"sessions-time-target","sessions-time-target",-1855695935)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [days_of_training,start_date,end_date,sessions_time_target], null);
});
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.update_timeline = (function pr4$prototipo$update_timeline(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null))], null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null)),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null)))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var timeline = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.macrocycle_timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.get_in_redefine_periodization.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var vec__26576 = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.last.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var _ = cljs.core.nth.call(null,vec__26576,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26576,(1),null);
var start = cljs.core.nth.call(null,vec__26576,(2),null);
var end = cljs.core.nth.call(null,vec__26576,(3),null);
return debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,cljs.core.assoc_in.call(null,debux.common.util.spy_first.call(null,app_state,new cljs.core.Symbol(null,"app-state","app-state",130568249,null),(3)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = timeline;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null)),(2)),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = start;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = end;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})()),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null)),(1));
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"timeline","timeline",1833434688,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"macrocycle-timeline","macrocycle-timeline",-489601531,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null),cljs.core.list(new cljs.core.Symbol(null,"last","last",-1548700637,null),new cljs.core.Symbol(null,"timeline","timeline",1833434688,null))], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null)], null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26575){var e = e26575;
throw e;
}});
} else {
pr4.prototipo.update_timeline = (function pr4$prototipo$update_timeline(app_state){
var timeline = cljs.core.apply.call(null,pr4.prototipo.macrocycle_timeline,pr4.prototipo.get_in_redefine_periodization.call(null,app_state));
var vec__26579 = cljs.core.last.call(null,timeline);
var _ = cljs.core.nth.call(null,vec__26579,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__26579,(1),null);
var start = cljs.core.nth.call(null,vec__26579,(2),null);
var end = cljs.core.nth.call(null,vec__26579,(3),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"macrocycle-timeline","macrocycle-timeline",-2130133058)], null),timeline),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","update-timeline","pr4.prototipo/update-timeline",-783755717),pr4.prototipo.update_timeline);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.reset_sessions = (function pr4$prototipo$reset_sessions(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var new_sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.apply.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.domain_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.get_in_redefine_periodization.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"domain-sessions","domain-sessions",560304629,null),cljs.core.list(new cljs.core.Symbol(null,"get-in-redefine-periodization","get-in-redefine-periodization",1207425903,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Symbol(null,"new-sessions","new-sessions",-299298984,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26582){var e = e26582;
throw e;
}});
} else {
pr4.prototipo.reset_sessions = (function pr4$prototipo$reset_sessions(app_state){
var new_sessions = cljs.core.apply.call(null,pr4.prototipo.domain_sessions,pr4.prototipo.get_in_redefine_periodization.call(null,app_state));
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new_sessions);
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","reset-sessions","pr4.prototipo/reset-sessions",593635908),pr4.prototipo.reset_sessions);
if(day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null)){
pr4.prototipo.update_calendar = (function pr4$prototipo$update_calendar(app_state){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-week-sessions","redefine-periodization-week-sessions",630571794,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null)),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-planning-start","redefine-periodization-planning-start",-1830357852,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"%2","%2",1953183984,null)], null),cljs.core.list(new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null),new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"%2","%2",1953183984,null)),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"%1","%1",1309450150,null))))),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))))),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)))),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)], null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)], null),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null))));

var opts__25969__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.get_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var week_sessions = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.redefine_periodization_week_sessions.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-week-sessions","redefine-periodization-week-sessions",630571794,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var week_days_of_training = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.mapv.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 7, ["Segunda",tick.alpha.api.MONDAY,"Ter\u00E7a",tick.alpha.api.TUESDAY,"Quarta",tick.alpha.api.WEDNESDAY,"Quinta",tick.alpha.api.THURSDAY,"Sexta",tick.alpha.api.FRIDAY,"S\u00E1bado",tick.alpha.api.SATURDAY,"Domingo",tick.alpha.api.SUNDAY], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var first_day = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.prototipo.redefine_periodization_planning_start.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(3)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-planning-start","redefine-periodization-planning-start",-1830357852,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var offset_list = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (opts__25969__auto____$1,sessions,week_sessions,week_days_of_training,first_day,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_){
return (function (p1__26583_SHARP_,p2__26584_SHARP_){
return debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null))),(3),cljs.core.take.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.count.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p1__26583_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"p2__26584#","p2__26584#",350938044,null)),(4),cljs.core.drop.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = p2__26584_SHARP_;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"p2__26584#","p2__26584#",350938044,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),(5),cljs.core.cycle.call(null,debux.common.util.spy_last.call(null,new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null),(6),p1__26583_SHARP_)))))));
});})(opts__25969__auto____$1,sessions,week_sessions,week_days_of_training,first_day,opts__25969__auto__,_PLUS_debux_dbg_opts_PLUS_))
;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null),new cljs.core.Symbol(null,"p2__26584#","p2__26584#",350938044,null)], null),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null)),cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"p2__26584#","p2__26584#",350938044,null),cljs.core.list(new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var rearranged_week_days = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var current = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = first_day;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var index = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days_of_training;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})().indexOf((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.day_of_week.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
while(true){
if((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core._EQ_.call(null,(-1),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = index;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()){
var G__26638 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26639 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days_of_training;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})().indexOf((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.day_of_week.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$6 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current","current",552492924,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(9)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(8)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
current = G__26638;
index = G__26639;
continue;
} else {
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = offset_list.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days_of_training;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = index;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
}
break;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))))),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var new_calendar_days = (function (){var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = (function (){var idx = (0);
var val = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.PersistentVector.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var current_day = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = first_day;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var G__26592 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var vec__26594 = G__26592;
var seq__26595 = cljs.core.seq.call(null,vec__26594);
var first__26596 = cljs.core.first.call(null,seq__26595);
var seq__26595__$1 = cljs.core.next.call(null,seq__26595);
var current_session = first__26596;
var sessions__$1 = seq__26595__$1;
var G__26593 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = rearranged_week_days;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})();
var vec__26597 = G__26593;
var seq__26598 = cljs.core.seq.call(null,vec__26597);
var first__26599 = cljs.core.first.call(null,seq__26598);
var seq__26598__$1 = cljs.core.next.call(null,seq__26598);
var current_week_day = first__26599;
var week_days = seq__26598__$1;
var idx__$1 = idx;
var val__$1 = val;
var current_day__$1 = current_day;
var G__26592__$1 = G__26592;
var G__26593__$1 = G__26593;
while(true){
var idx__$2 = idx__$1;
var val__$2 = val__$1;
var current_day__$2 = current_day__$1;
var vec__26606 = G__26592__$1;
var seq__26607 = cljs.core.seq.call(null,vec__26606);
var first__26608 = cljs.core.first.call(null,seq__26607);
var seq__26607__$1 = cljs.core.next.call(null,seq__26607);
var current_session__$1 = first__26608;
var sessions__$2 = seq__26607__$1;
var vec__26609 = G__26593__$1;
var seq__26610 = cljs.core.seq.call(null,vec__26609);
var first__26611 = cljs.core.first.call(null,seq__26610);
var seq__26610__$1 = cljs.core.next.call(null,seq__26610);
var current_week_day__$1 = first__26611;
var week_days__$1 = seq__26610__$1;
if((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_session__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})() == null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()){
var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = val__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
} else {
if((function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.not_EQ_.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_week_day__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.day_of_week.call(null,(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = tick.alpha.api.date.call(null,(function (){var opts__25969__auto____$5 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_day__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(4)], null));

return result__25970__auto__;
})()){
var G__26640 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26641 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.conj.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = val__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.PersistentArrayMap.EMPTY;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26642 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_day__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26643 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.cons.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_session__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26644 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.cons.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_week_day__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
idx__$1 = G__26640;
val__$1 = G__26641;
current_day__$1 = G__26642;
G__26592__$1 = G__26643;
G__26593__$1 = G__26644;
continue;
} else {
var G__26645 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = ((function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = idx__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})() + (1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26646 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.conj.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = val__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),idx__$2], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26647 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = pr4.util.plus_days.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_day__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(1));
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26648 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = sessions__$2;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
var G__26649 = (function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.concat.call(null,(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = week_days__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$3 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var opts__25969__auto____$4 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = current_week_day__$1;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(7)], null));

return result__25970__auto__;
})()], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(6)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(5)], null));

return result__25970__auto__;
})();
idx__$1 = G__26645;
val__$1 = G__26646;
current_day__$1 = G__26647;
G__26592__$1 = G__26648;
G__26593__$1 = G__26649;
continue;

}
}
break;
}
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)], null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)], null),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null))))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})();
var opts__25969__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = cljs.core.assoc_in.call(null,(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = app_state;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})(),(function (){var opts__25969__auto____$2 = _PLUS_debux_dbg_opts_PLUS_;
var result__25970__auto__ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),first_day,new cljs.core.Keyword(null,"days","days",-1394072564),new_calendar_days], null);
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__25970__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__25970__auto__;
})();
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__25970__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"get-in","get-in",-1965644065,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null)),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-week-sessions","redefine-periodization-week-sessions",630571794,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol(null,"mapv","mapv",-241595241,null),new cljs.core.PersistentArrayMap(null, 7, ["Segunda",new cljs.core.Symbol("tick","MONDAY","tick/MONDAY",-1807261548,null),"Ter\u00E7a",new cljs.core.Symbol("tick","TUESDAY","tick/TUESDAY",-653364979,null),"Quarta",new cljs.core.Symbol("tick","WEDNESDAY","tick/WEDNESDAY",184695186,null),"Quinta",new cljs.core.Symbol("tick","THURSDAY","tick/THURSDAY",752671260,null),"Sexta",new cljs.core.Symbol("tick","FRIDAY","tick/FRIDAY",1676329874,null),"S\u00E1bado",new cljs.core.Symbol("tick","SATURDAY","tick/SATURDAY",-777750673,null),"Domingo",new cljs.core.Symbol("tick","SUNDAY","tick/SUNDAY",972583333,null)], null),new cljs.core.Symbol(null,"week-sessions","week-sessions",2122843982,null)),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),cljs.core.list(new cljs.core.Symbol(null,"redefine-periodization-planning-start","redefine-periodization-planning-start",-1830357852,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null)),new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null),new cljs.core.Symbol(null,"p2__26584#","p2__26584#",350938044,null)], null),cljs.core.list(new cljs.core.Symbol(null,"take","take",871646627,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null)),cljs.core.list(new cljs.core.Symbol(null,"drop","drop",2005013138,null),new cljs.core.Symbol(null,"p2__26584#","p2__26584#",350938044,null),cljs.core.list(new cljs.core.Symbol(null,"cycle","cycle",-1944070485,null),new cljs.core.Symbol(null,"p1__26583#","p1__26583#",-181899432,null))))),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current","current",552492924,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),(1)),new cljs.core.Symbol(null,"index","index",108845612,null),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current","current",552492924,null))))], null),cljs.core.list(new cljs.core.Symbol(null,"if","if",1181717262,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(-1),new cljs.core.Symbol(null,"index","index",108845612,null)),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)),cljs.core.list(new cljs.core.Symbol(null,".indexOf",".indexOf",-1910538923,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current","current",552492924,null),(1)))))),cljs.core.list(new cljs.core.Symbol(null,"offset-list","offset-list",1213530192,null),new cljs.core.Symbol(null,"week-days-of-training","week-days-of-training",-1634989970,null),new cljs.core.Symbol(null,"index","index",108845612,null)))),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null),cljs.core.list(new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null),(0),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentVector.EMPTY,new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)], null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null)], null),new cljs.core.Symbol(null,"rearranged-week-days","rearranged-week-days",-449759585,null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond","cond",1606708055,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null)),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),cljs.core.list(new cljs.core.Symbol("tick","day-of-week","tick/day-of-week",-1018891021,null),cljs.core.list(new cljs.core.Symbol("tick","date","tick/date",179804874,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null)))),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),cljs.core.PersistentArrayMap.EMPTY),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-session","current-session",-1072228558,null),new cljs.core.Symbol(null,"sessions","sessions",941215135,null)),cljs.core.list(new cljs.core.Symbol(null,"cons","cons",755448454,null),new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null))),new cljs.core.Keyword(null,"else","else",-1508377146),cljs.core.list(new cljs.core.Symbol(null,"recur","recur",1202958259,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)),cljs.core.list(new cljs.core.Symbol(null,"conj","conj",-1127293942,null),new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null)),cljs.core.list(new cljs.core.Symbol("util","plus-days","util/plus-days",2140931136,null),new cljs.core.Symbol(null,"current-day","current-day",1769672939,null),(1)),new cljs.core.Symbol(null,"sessions","sessions",941215135,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"week-days","week-days",-2035612276,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"current-week-day","current-week-day",2004952211,null)], null)))))], null),cljs.core.list(new cljs.core.Symbol(null,"assoc-in","assoc-in",-113585743,null),new cljs.core.Symbol(null,"app-state","app-state",130568249,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),new cljs.core.Symbol(null,"first-day","first-day",121281763,null),new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.Symbol(null,"new-calendar-days","new-calendar-days",1334227214,null)], null))),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__25970__auto__;
}catch (e26585){var e = e26585;
throw e;
}});
} else {
pr4.prototipo.update_calendar = (function pr4$prototipo$update_calendar(app_state){
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var week_sessions = pr4.prototipo.redefine_periodization_week_sessions.call(null,app_state);
var week_days_of_training = cljs.core.mapv.call(null,new cljs.core.PersistentArrayMap(null, 7, ["Segunda",tick.alpha.api.MONDAY,"Ter\u00E7a",tick.alpha.api.TUESDAY,"Quarta",tick.alpha.api.WEDNESDAY,"Quinta",tick.alpha.api.THURSDAY,"Sexta",tick.alpha.api.FRIDAY,"S\u00E1bado",tick.alpha.api.SATURDAY,"Domingo",tick.alpha.api.SUNDAY], null),week_sessions);
var first_day = pr4.prototipo.redefine_periodization_planning_start.call(null,app_state);
var offset_list = ((function (sessions,week_sessions,week_days_of_training,first_day){
return (function (p1__26583_SHARP_,p2__26584_SHARP_){
return cljs.core.take.call(null,cljs.core.count.call(null,p1__26583_SHARP_),cljs.core.drop.call(null,p2__26584_SHARP_,cljs.core.cycle.call(null,p1__26583_SHARP_)));
});})(sessions,week_sessions,week_days_of_training,first_day))
;
var rearranged_week_days = (function (){var current = pr4.util.plus_days.call(null,first_day,(1));
var index = week_days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current)));
while(true){
if(cljs.core._EQ_.call(null,(-1),index)){
var G__26650 = pr4.util.plus_days.call(null,current,(1));
var G__26651 = week_days_of_training.indexOf(tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,pr4.util.plus_days.call(null,current,(1)))));
current = G__26650;
index = G__26651;
continue;
} else {
return offset_list.call(null,week_days_of_training,index);
}
break;
}
})();
var new_calendar_days = (function (){var idx = (0);
var val = cljs.core.PersistentVector.EMPTY;
var current_day = first_day;
var G__26618 = sessions;
var vec__26620 = G__26618;
var seq__26621 = cljs.core.seq.call(null,vec__26620);
var first__26622 = cljs.core.first.call(null,seq__26621);
var seq__26621__$1 = cljs.core.next.call(null,seq__26621);
var current_session = first__26622;
var sessions__$1 = seq__26621__$1;
var G__26619 = rearranged_week_days;
var vec__26623 = G__26619;
var seq__26624 = cljs.core.seq.call(null,vec__26623);
var first__26625 = cljs.core.first.call(null,seq__26624);
var seq__26624__$1 = cljs.core.next.call(null,seq__26624);
var current_week_day = first__26625;
var week_days = seq__26624__$1;
var idx__$1 = idx;
var val__$1 = val;
var current_day__$1 = current_day;
var G__26618__$1 = G__26618;
var G__26619__$1 = G__26619;
while(true){
var idx__$2 = idx__$1;
var val__$2 = val__$1;
var current_day__$2 = current_day__$1;
var vec__26632 = G__26618__$1;
var seq__26633 = cljs.core.seq.call(null,vec__26632);
var first__26634 = cljs.core.first.call(null,seq__26633);
var seq__26633__$1 = cljs.core.next.call(null,seq__26633);
var current_session__$1 = first__26634;
var sessions__$2 = seq__26633__$1;
var vec__26635 = G__26619__$1;
var seq__26636 = cljs.core.seq.call(null,vec__26635);
var first__26637 = cljs.core.first.call(null,seq__26636);
var seq__26636__$1 = cljs.core.next.call(null,seq__26636);
var current_week_day__$1 = first__26637;
var week_days__$1 = seq__26636__$1;
if((current_session__$1 == null)){
return val__$2;
} else {
if(cljs.core.not_EQ_.call(null,current_week_day__$1,tick.alpha.api.day_of_week.call(null,tick.alpha.api.date.call(null,current_day__$2)))){
var G__26652 = idx__$2;
var G__26653 = cljs.core.conj.call(null,val__$2,cljs.core.PersistentArrayMap.EMPTY);
var G__26654 = pr4.util.plus_days.call(null,current_day__$2,(1));
var G__26655 = cljs.core.cons.call(null,current_session__$1,sessions__$2);
var G__26656 = cljs.core.cons.call(null,current_week_day__$1,week_days__$1);
idx__$1 = G__26652;
val__$1 = G__26653;
current_day__$1 = G__26654;
G__26618__$1 = G__26655;
G__26619__$1 = G__26656;
continue;
} else {
var G__26657 = (idx__$2 + (1));
var G__26658 = cljs.core.conj.call(null,val__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),idx__$2], null));
var G__26659 = pr4.util.plus_days.call(null,current_day__$2,(1));
var G__26660 = sessions__$2;
var G__26661 = cljs.core.concat.call(null,week_days__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_week_day__$1], null));
idx__$1 = G__26657;
val__$1 = G__26658;
current_day__$1 = G__26659;
G__26618__$1 = G__26660;
G__26619__$1 = G__26661;
continue;

}
}
break;
}
})();
return cljs.core.assoc_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first-day","first-day",-1519249764),first_day,new cljs.core.Keyword(null,"days","days",-1394072564),new_calendar_days], null));
});
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("pr4.prototipo","update-calendar","pr4.prototipo/update-calendar",1570326237),pr4.prototipo.update_calendar);
pr4.prototipo.sessions__GT_chart_data = (function pr4$prototipo$sessions__GT_chart_data(sessions,selection){
var row_fn = (function (index,p__26664){
var map__26665 = p__26664;
var map__26665__$1 = (((((!((map__26665 == null))))?(((((map__26665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26665):map__26665);
var total_sets = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var reps_max = cljs.core.get.call(null,map__26665__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
return [["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1)))].join(''),pr4.periodization.session_volume.call(null,reps_max,total_sets),["color: ",((pr4.util.between_QMARK_.call(null,index,selection))?"#3bbcb7":"#b3e5e3")].join(''),pr4.periodization.reps_to_intensity.call(null,reps_max),["color: ",((pr4.util.between_QMARK_.call(null,index,selection))?"#ffd237":"#ffe99c")].join('')];
});
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Sess\u00E3o","Volume",({"role": "style"}),"Intensidade",({"role": "style"})],cljs.core.map_indexed.call(null,row_fn,sessions)));
});
pr4.prototipo.sessions_with_dates_idx = (function pr4$prototipo$sessions_with_dates_idx(app_state){
var first_day = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"first-day","first-day",-1519249764)], null));
var days = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"days","days",-1394072564)], null));
var sessions = cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null));
var idx_date = cljs.core.map.call(null,((function (first_day,days,sessions){
return (function (p1__26667_SHARP_,p2__26668_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-idx","session-idx",1467570168).cljs$core$IFn$_invoke$arity$1(p1__26667_SHARP_),p2__26668_SHARP_], null));
});})(first_day,days,sessions))
,days,cljs.core.iterate.call(null,((function (first_day,days,sessions){
return (function (p1__26669_SHARP_){
return pr4.util.plus_days.call(null,p1__26669_SHARP_,(1));
});})(first_day,days,sessions))
,first_day));
return cljs.core.map.call(null,((function (first_day,days,sessions,idx_date){
return (function (p__26671){
var vec__26672 = p__26671;
var idx = cljs.core.nth.call(null,vec__26672,(0),null);
var date = cljs.core.nth.call(null,vec__26672,(1),null);
return cljs.core.assoc.call(null,cljs.core.nth.call(null,sessions,idx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null)),new cljs.core.Keyword(null,"date","date",-1463434462),date,new cljs.core.Keyword(null,"idx","idx",1053688473),idx);
});})(first_day,days,sessions,idx_date))
,cljs.core.remove.call(null,((function (first_day,days,sessions,idx_date){
return (function (p1__26670_SHARP_){
return (cljs.core.first.call(null,p1__26670_SHARP_) == null);
});})(first_day,days,sessions,idx_date))
,idx_date));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","sessions-with-dates-idx","pr4.prototipo/sessions-with-dates-idx",685675840),pr4.prototipo.sessions_with_dates_idx);
pr4.prototipo.zoom_dates = (function pr4$prototipo$zoom_dates(app_state){
return cljs.core.get_in.call(null,app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"zoom-dates","zoom-dates",1690849683)], null));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("pr4.prototipo","zoom-dates","pr4.prototipo/zoom-dates",1521240307),pr4.prototipo.zoom_dates);
pr4.prototipo.sessions__GT_chart_data2 = (function pr4$prototipo$sessions__GT_chart_data2(_,___$1){
var sessions_with_dates_idx = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","sessions-with-dates-idx","pr4.prototipo/sessions-with-dates-idx",685675840)], null)));
var date_between_QMARK_ = ((function (sessions_with_dates_idx){
return (function (p1__26676_SHARP_,p2__26675_SHARP_,p3__26677_SHARP_){
return tick.alpha.api._LT__EQ_.call(null,(cljs.core.truth_(p2__26675_SHARP_)?tick.alpha.api.date.call(null,p2__26675_SHARP_):tick.alpha.api.date.call(null,p1__26676_SHARP_)),tick.alpha.api.date.call(null,p1__26676_SHARP_),(cljs.core.truth_(p3__26677_SHARP_)?tick.alpha.api.date.call(null,p3__26677_SHARP_):tick.alpha.api.date.call(null,p1__26676_SHARP_)));
});})(sessions_with_dates_idx))
;
var zoom_dates = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","zoom-dates","pr4.prototipo/zoom-dates",1521240307)], null)));
var row_fn = ((function (sessions_with_dates_idx,date_between_QMARK_,zoom_dates){
return (function (p__26679){
var map__26680 = p__26679;
var map__26680__$1 = (((((!((map__26680 == null))))?(((((map__26680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26680):map__26680);
var idx = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var total_sets = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var reps_max = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var reps_min = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var rest_time = cljs.core.get.call(null,map__26680__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
var vol_min = pr4.periodization.session_volume.call(null,reps_min,total_sets);
var vol_max = pr4.periodization.session_volume.call(null,reps_max,total_sets);
var int_min = pr4.periodization.reps_to_intensity.call(null,reps_max);
var int_max = pr4.periodization.reps_to_intensity.call(null,reps_min);
return [["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))].join(''),vol_min,"color: #3bbcb7",["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1))),"\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_sets)," s\u00E9ries","\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_min),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_max)," repeti\u00E7\u00F5es"].join(''),vol_min,vol_max,int_min,"color: #ffd237",["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1))),"\n\nIntensidade: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pr4.prototipo.reps__GT_intensity_text.call(null,reps_min,reps_max))," de RM","\nRecupera\u00E7\u00E3o: ",pr4.util.seconds__GT_minute_text.call(null,rest_time)].join(''),int_min,int_max];
});})(sessions_with_dates_idx,date_between_QMARK_,zoom_dates))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Sess\u00E3o","Volume",({"role": "style"}),({"role": "tooltip"}),({"role": "interval"}),({"role": "interval"}),"Intensidade",({"role": "style"}),({"role": "tooltip"}),({"role": "interval"}),({"role": "interval"})],cljs.core.map.call(null,row_fn,cljs.core.filter.call(null,((function (sessions_with_dates_idx,date_between_QMARK_,zoom_dates,row_fn){
return (function (p1__26678_SHARP_){
return cljs.core.apply.call(null,date_between_QMARK_,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__26678_SHARP_),zoom_dates);
});})(sessions_with_dates_idx,date_between_QMARK_,zoom_dates,row_fn))
,sessions_with_dates_idx))));
});
/**
 * Output example:
 *  ([0 2] [3 5] [6 8] [9 11] [12 14] [15 17] [18 20] [21 23] [24 26] [27 29] [30 31])
 */
pr4.prototipo.microciclos__GT_ranged_micros = (function pr4$prototipo$microciclos__GT_ranged_micros(micros){
return cljs.core.map.call(null,(function (first,last){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last], null);
}),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),micros),micros);
});
pr4.prototipo.micro_chart_data = (function pr4$prototipo$micro_chart_data(sessions,p__26685,micros){
var vec__26686 = p__26685;
var selection_f = cljs.core.nth.call(null,vec__26686,(0),null);
var selection_l = cljs.core.nth.call(null,vec__26686,(1),null);
var summed_volumes = ((function (vec__26686,selection_f,selection_l){
return (function (sessions__$1){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__26686,selection_f,selection_l){
return (function (p1__26683_SHARP_){
return cljs.core.apply.call(null,pr4.periodization.session_volume,p1__26683_SHARP_);
});})(vec__26686,selection_f,selection_l))
,cljs.core.map.call(null,((function (vec__26686,selection_f,selection_l){
return (function (p1__26682_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26682_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26682_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
});})(vec__26686,selection_f,selection_l))
,sessions__$1)));
});})(vec__26686,selection_f,selection_l))
;
var avg_intensity = ((function (summed_volumes,vec__26686,selection_f,selection_l){
return (function (sessions__$1){
return ((function (summed_volumes,vec__26686,selection_f,selection_l){
return (function (p1__26684_SHARP_){
return (p1__26684_SHARP_ / cljs.core.count.call(null,sessions__$1));
});})(summed_volumes,vec__26686,selection_f,selection_l))
.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,pr4.periodization.reps_to_intensity,cljs.core.map.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),sessions__$1))));
});})(summed_volumes,vec__26686,selection_f,selection_l))
;
var row_fn = ((function (summed_volumes,avg_intensity,vec__26686,selection_f,selection_l){
return (function (index,micro_range){
return [["Micro ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1)))].join(''),summed_volumes.call(null,pr4.util.select_indexes.call(null,sessions,micro_range)),["color: ",((cljs.core._EQ_.call(null,micro_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_f,selection_l], null)))?"#3bbc8e":"#74deb8")].join(''),avg_intensity.call(null,pr4.util.select_indexes.call(null,sessions,micro_range)),["color: ",((cljs.core._EQ_.call(null,micro_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_f,selection_l], null)))?"#ffbd38":"#ffcf70")].join('')];
});})(summed_volumes,avg_intensity,vec__26686,selection_f,selection_l))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Micro","Volume do Micro",({"role": "style"}),"Intensidade",({"role": "style"})],cljs.core.map_indexed.call(null,row_fn,pr4.prototipo.microciclos__GT_ranged_micros.call(null,micros))));
});
pr4.prototipo.reps__GT_intensity_text = (function pr4$prototipo$reps__GT_intensity_text(min,max){
if(cljs.core._EQ_.call(null,min,max)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,min))),"%"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,max))),"%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,min))),"%"].join('');
}
});
pr4.prototipo.reps__GT_reps_zone = (function pr4$prototipo$reps__GT_reps_zone(min,max){
if(cljs.core._EQ_.call(null,min,max)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),"RM"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(min),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max),"RM"].join('');
}
});
pr4.prototipo.draw_chart = (function pr4$prototipo$draw_chart(element_id,data_array,chart_width,options){
return (function (){
var g_charts_instance = (new pr4.prototipo.global$module$google_charts());
var el = document.getElementById(element_id);
var data = ((function (g_charts_instance,el){
return (function (){
return g_charts_instance.api.visualization.arrayToDataTable(data_array);
});})(g_charts_instance,el))
;
var chart = ((function (g_charts_instance,el,data){
return (function (){
el.style.width = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((document.getElementsByClassName("com-rigsomelight-devcard").item((0)).clientWidth * chart_width)),"px"].join('');

return (new g_charts_instance.api.visualization.ColumnChart(el));
});})(g_charts_instance,el,data))
;
var draw_fn = ((function (g_charts_instance,el,data,chart){
return (function (){
return chart.call(null).draw(data.call(null),options);
});})(g_charts_instance,el,data,chart))
;
return g_charts_instance.load(draw_fn);
});
});
pr4.prototipo.normal_chart_options = (function pr4$prototipo$normal_chart_options(vol_min,vol_max,inten_min,inten_max){
return ({"theme": "maximized", "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "70%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "minValue": vol_min, "maxValue": vol_max, "viewWindowMode": "maximized"}),({"textPosition": "none", "minValue": inten_min, "maxValue": inten_max, "viewWindowMode": "maximized"})]});
});
pr4.prototipo.side_arrows = (function pr4$prototipo$side_arrows(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26696 = arguments.length;
var i__4731__auto___26697 = (0);
while(true){
if((i__4731__auto___26697 < len__4730__auto___26696)){
args__4736__auto__.push((arguments[i__4731__auto___26697]));

var G__26698 = (i__4731__auto___26697 + (1));
i__4731__auto___26697 = G__26698;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pr4.prototipo.side_arrows.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pr4.prototipo.side_arrows.cljs$core$IFn$_invoke$arity$variadic = (function (p__26693,children){
var map__26694 = p__26693;
var map__26694__$1 = (((((!((map__26694 == null))))?(((((map__26694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26694):map__26694);
var onClickLeft = cljs.core.get.call(null,map__26694__$1,new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512));
var onClickRight = cljs.core.get.call(null,map__26694__$1,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801));
var style = cljs.core.get.call(null,map__26694__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.js__GT_clj.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 -12px"], null),cljs.core.js__GT_clj.call(null,style)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClickLeft], null)], null),cljs.core.map_indexed.call(null,((function (map__26694,map__26694__$1,onClickLeft,onClickRight,style){
return (function (p1__26690_SHARP_,p2__26689_SHARP_){
return cljs.core.with_meta.call(null,p2__26689_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__26690_SHARP_], null));
});})(map__26694,map__26694__$1,onClickLeft,onClickRight,style))
,children),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClickRight], null)], null)], null);
});

pr4.prototipo.side_arrows.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pr4.prototipo.side_arrows.cljs$lang$applyTo = (function (seq26691){
var G__26692 = cljs.core.first.call(null,seq26691);
var seq26691__$1 = cljs.core.next.call(null,seq26691);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26692,seq26691__$1);
});

/**
 * Show last session, but edit all the selected range.
 */
pr4.prototipo.old_session_component = (function pr4$prototipo$old_session_component(p__26704){
var map__26705 = p__26704;
var map__26705__$1 = (((((!((map__26705 == null))))?(((((map__26705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26705):map__26705);
var selected_sessions = cljs.core.get.call(null,map__26705__$1,new cljs.core.Keyword(null,"selected-sessions","selected-sessions",-1967071592));
var map__26707 = cljs.core.last.call(null,selected_sessions);
var map__26707__$1 = (((((!((map__26707 == null))))?(((((map__26707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26707):map__26707);
var session = map__26707__$1;
var reps_min = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var total_sets = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var rest_time = cljs.core.get.call(null,map__26707__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Intensidade: ",pr4.prototipo.reps__GT_intensity_text.call(null,reps_min,reps_max)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Repeti\u00E7\u00F5es: ",pr4.prototipo.reps__GT_reps_zone.call(null,reps_min,reps_max)," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143)], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855)], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min - (1))], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min + (1))], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(30),new cljs.core.Keyword(null,"value","value",305978217),reps_min,new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"label","label",1718410804),"1RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(8),new cljs.core.Keyword(null,"label","label",1718410804),"8RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(15),new cljs.core.Keyword(null,"label","label",1718410804),"15RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(20),new cljs.core.Keyword(null,"label","label",1718410804),"20RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(25),new cljs.core.Keyword(null,"label","label",1718410804),"25RM"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (p1__26700_SHARP_,p2__26699_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),p2__26699_SHARP_], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"S\u00E9ries: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(99),new cljs.core.Keyword(null,"value","value",305978217),total_sets,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (p1__26701_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),p1__26701_SHARP_.target.value], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Descanso por s\u00E9rie: ",pr4.util.seconds__GT_minute_text.call(null,rest_time)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time - (15))], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time + (15))], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),rest_time,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions){
return (function (p1__26703_SHARP_,p2__26702_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),p2__26702_SHARP_], null));
});})(map__26707,map__26707__$1,session,reps_min,reps_max,total_sets,rest_time,map__26705,map__26705__$1,selected_sessions))
,new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"label","label",1718410804),"0"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(60),new cljs.core.Keyword(null,"label","label",1718410804),"1:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(120),new cljs.core.Keyword(null,"label","label",1718410804),"2:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(180),new cljs.core.Keyword(null,"label","label",1718410804),"3:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(240),new cljs.core.Keyword(null,"label","label",1718410804),"4:00"], null)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(300),new cljs.core.Keyword(null,"step","step",1288888124),(15)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Volume total (Intens. x Rep. x S\u00E9ries): ",pr4.periodization.session__GT_total_volume.call(null,session)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Tempo estimado da sess\u00E3o: ",pr4.util.seconds__GT_minute_text.call(null,pr4.util.round_to_precision.call(null,pr4.periodization.session__GT_time_estimate.call(null,session),(300)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Rela\u00E7\u00E3o [Execu\u00E7\u00E3o Descanso]: ",["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * (pr4.periodization.execution_time.call(null,reps_max,total_sets) / pr4.periodization.session__GT_time_estimate.call(null,session))))),"% ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * (pr4.periodization.total_rest_time.call(null,total_sets,rest_time) / pr4.periodization.session__GT_time_estimate.call(null,session))))),"%]"].join('')], null)], null);
});
/**
 * Show last session, but edit all the selected range.
 */
pr4.prototipo.session_component = (function pr4$prototipo$session_component(p__26709){
var map__26710 = p__26709;
var map__26710__$1 = (((((!((map__26710 == null))))?(((((map__26710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26710):map__26710);
var selected_sessions = cljs.core.get.call(null,map__26710__$1,new cljs.core.Keyword(null,"selected-sessions","selected-sessions",-1967071592));
var map__26712 = cljs.core.last.call(null,selected_sessions);
var map__26712__$1 = (((((!((map__26712 == null))))?(((((map__26712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26712):map__26712);
var session = map__26712__$1;
var reps_min = cljs.core.get.call(null,map__26712__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__26712__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var total_sets = cljs.core.get.call(null,map__26712__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var rest_time = cljs.core.get.call(null,map__26712__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
var two_line_box = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexFlow","flexFlow",-537374551),"column",new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center",new cljs.core.Keyword(null,"flexGrow","flexGrow",1882590718),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 0",new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 4px 0 4px",new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862),"1px 3px 6px 2px #0000003b"], null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","set-inten-boxes-display","pr4.app-state/set-inten-boxes-display",-2106184780)], null)))})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,two_line_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#b3e5e3"], null))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-sets-box-clicked","pr4.events/session-sets-box-clicked",-1377129740)], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),total_sets], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"S\u00E9ries"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,two_line_box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#ffe99c"], null))),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-intensity-box-clicked","pr4.events/session-intensity-box-clicked",851837502)], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_min),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reps_max),"RM"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Intensidade"], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-intensity","div.adjust-intensity",-146565931),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#ebebeb", "height": "14vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-intensity-display","pr4.app-state/adjust-intensity-display",638208732)], null))), "grid": "2fr 1fr / 1fr 1fr 1fr", "marginTop": "2px"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 1 / 2 / 4", "placeSelf": "end center", "fontSize": "1.07em"})], null),"Intensidade ",pr4.prototipo.reps__GT_intensity_text.call(null,reps_min,reps_max)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min - (1))], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),pr4.prototipo.reps__GT_reps_zone.call(null,reps_min,reps_max)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min + (1))], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143)], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
,new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 1", "placeSelf": "center start"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855)], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
,new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 3", "placeSelf": "center end"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-sets","div.adjust-sets",-897093489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#ebebeb", "height": "14vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-sets-display","pr4.app-state/adjust-sets-display",-1034755893)], null))), "grid": "2fr 1fr / 1fr 1fr 1fr", "marginTop": "2px"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 2", "placeSelf": "end center", "fontSize": "1.17em"})], null),"S\u00E9ries"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),(total_sets - (1))], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),total_sets], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),(total_sets + (1))], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-rest-time","div.adjust-rest-time",1455145760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#ebebeb", "height": "14vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-rest-time-display","pr4.app-state/adjust-rest-time-display",2009185317)], null))), "grid": "2fr 1fr / 1fr 1fr 1fr"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "1 / 1 / 2 / 4", "placeSelf": "end center", "fontSize": "1.17em"})], null),"Descanso entre s\u00E9ries"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center end", "borderRadius": "30px", "gridArea": "2 / 1", "width": "30px", "justifyContent": "center", "display": "flex", "fontSize": "3em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time - (15))], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "7px"})], null),"-"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"gridArea": "2 / 2", "placeSelf": "center", "fontSize": "1.57em"})], null),pr4.util.seconds__GT_minute_text.call(null,rest_time)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),({"placeSelf": "center start", "borderRadius": "30px", "gridArea": "2 / 3", "width": "30px", "justifyContent": "center", "textAlign": "center", "display": "flex", "fontSize": "2em", "boxShadow": "1px 1px 2px 0px black", "backgroundColor": "white", "height": "30px", "alignItems": "center"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time + (15))], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingBottom": "2px"})], null),"+"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.adjust-buttons","div.adjust-buttons",-1478997565),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#ebebeb", "height": "16vh", "display": cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","adjust-buttons-display","pr4.app-state/adjust-buttons-display",-1277840286)], null))), "justifyContent": "space-around", "alignItems": "center", "marginBottom": "2px"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"backgroundColor": "#3bbcb7", "color": "white"}),new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-adjust-canceled","pr4.events/session-adjust-canceled",267115587)], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
], null),"Cancelar"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"width": "110px", "backgroundColor": "#3bbcb7", "color": "white"}),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-adjust-confirmed","pr4.events/session-adjust-confirmed",2106134146)], null));
});})(map__26712,map__26712__$1,session,reps_min,reps_max,total_sets,rest_time,two_line_box,map__26710,map__26710__$1,selected_sessions))
,new cljs.core.Keyword(null,"variant","variant",-424354234),"contained"], null),"Ok"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,two_line_box,new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),pr4.util.seconds__GT_minute_text.call(null,pr4.util.round_to_precision.call(null,pr4.periodization.session__GT_time_estimate.call(null,session),(300)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tempo estimado da sess\u00E3o"], null)], null)], null);
});
pr4.prototipo.micro_name = (function pr4$prototipo$micro_name(sessions_atoms,models){
var sessions = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__26716_SHARP_){
return cljs.core.select_keys.call(null,p1__26716_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892)], null));
}),sessions_atoms));
var or__4131__auto__ = models.call(null,sessions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Custom.";
}
});
pr4.prototipo.models_names = (function pr4$prototipo$models_names(models){
return cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,pr4.periodization.micros_models)));
});
pr4.prototipo.date_dd_mm = (function pr4$prototipo$date_dd_mm(date){
if(cljs.core.truth_(date)){
var dd = tick.alpha.api.day_of_month.call(null,date);
var MM = tick.alpha.api.int$.call(null,tick.alpha.api.month.call(null,date));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dd),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(MM)].join('');
} else {
return null;
}
});
pr4.prototipo.date_str = (function pr4$prototipo$date_str(date){
var dd = tick.alpha.api.day_of_month.call(null,date);
var MM = tick.alpha.api.int$.call(null,tick.alpha.api.month.call(null,date));
var yyyy = tick.alpha.api.int$.call(null,tick.alpha.api.year.call(null,date));
var day = tick.alpha.api.day_of_week.call(null,date);
var pt_week = cljs.core.PersistentArrayMap.createAsIfByAssoc([tick.alpha.api.MONDAY,"Segunda",tick.alpha.api.TUESDAY,"Ter\u00E7a",tick.alpha.api.WEDNESDAY,"Quarta",tick.alpha.api.THURSDAY,"Quinta",tick.alpha.api.FRIDAY,"Sexta",tick.alpha.api.SATURDAY,"S\u00E1bado",tick.alpha.api.SUNDAY,"Domingo"]);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dd),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(MM),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(yyyy)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.take.call(null,(3),pt_week.call(null,day)))),")"].join('');
});
pr4.prototipo.calendar_chart_options = ({"chartArea": ({"width": "100%"}), "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "100%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "maxValue": (35000), "viewWindowMode": "maximized"}),({"textPosition": "none", "viewWindowMode": "maximized"})]});
pr4.prototipo.calendar_chart_options2 = ({"title": "Volume por Sess\u00E3o", "chartArea": ({"width": "100%"}), "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "98%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "viewWindowMode": "maximized"}),({"textPosition": "none", "viewWindowMode": "maximized"})]});
pr4.prototipo.week_vol_options = ({"title": "Volume Semanal", "chartArea": ({"width": "100%"}), "legend": ({"position": "none"}), "bar": ({"groupWidth": "90%"}), "vAxis": ({"gridlines": ({"color": "transparent"})}), "vAxes": [({"textPosition": "none", "viewWindowMode": "maximized", "minValue": (20000)}),({"textPosition": "none", "viewWindowMode": "maximized"})]});
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.chart_zoom !== 'undefined')){
} else {
pr4.prototipo.chart_zoom = reagent.core.atom.call(null,(30));
}
pr4.prototipo.calendar_chart_data = (function pr4$prototipo$calendar_chart_data(calendar,sessions){
var session_idx__GT_volume = (function (session_idx){
if(cljs.core.truth_(session_idx)){
return cljs.core.apply.call(null,pr4.periodization.session_volume,(function (p1__26722_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26722_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26722_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
}).call(null,(function (p1__26721_SHARP_){
return cljs.core.nth.call(null,sessions,p1__26721_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null));
}).call(null,session_idx)));
} else {
return null;
}
});
var zoom_in = cljs.core.deref.call(null,pr4.prototipo.chart_zoom);
var all_days_without_week_vol = cljs.core.map_indexed.call(null,((function (session_idx__GT_volume,zoom_in){
return (function (p1__26724_SHARP_,p2__26723_SHARP_){
return cljs.core.assoc.call(null,p2__26723_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__26724_SHARP_);
});})(session_idx__GT_volume,zoom_in))
,calendar);
var first_week = cljs.core.take_while.call(null,((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol){
return (function (p1__26725_SHARP_){
return cljs.core.not_EQ_.call(null,tick.alpha.api.day_of_week.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__26725_SHARP_)),tick.alpha.api.SUNDAY);
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol))
,all_days_without_week_vol);
var add_week_vol = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week){
return (function (week){
if((!(cljs.core.empty_QMARK_.call(null,week)))){
return cljs.core.assoc_in.call(null,cljs.core.vec.call(null,week),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,week) - (1)),new cljs.core.Keyword(null,"week-volume","week-volume",630206840)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,session_idx__GT_volume,cljs.core.map.call(null,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),week))));
} else {
return null;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week))
;
var all_days = (function (){var $ = all_days_without_week_vol;
var $__$1 = cljs.core.drop.call(null,cljs.core.count.call(null,first_week),$);
var $__$2 = cljs.core.partition_all.call(null,(7),$__$1);
var $__$3 = cljs.core.map.call(null,((function ($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol){
return (function (p1__26726_SHARP_){
if(cljs.core.not_EQ_.call(null,(7),cljs.core.count.call(null,p1__26726_SHARP_))){
return p1__26726_SHARP_;
} else {
return add_week_vol.call(null,p1__26726_SHARP_);
}
});})($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol))
,$__$2);
return cljs.core.flatten.call(null,cljs.core.cons.call(null,add_week_vol.call(null,first_week),$__$3));
})();
var shift = ((cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))) / (2)) - (cljs.core.count.call(null,all_days) / (2)));
var to_drop = ((cljs.core.count.call(null,all_days) - zoom_in) / (2));
var r = cljs.core.drop.call(null,(to_drop + shift),all_days);
var some_days = cljs.core.take.call(null,zoom_in,r);
var on_saturday = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days){
return (function (date,if_true,if_false){
if(cljs.core._EQ_.call(null,tick.alpha.api.day_of_week.call(null,date),tick.alpha.api.SATURDAY)){
return if_true;
} else {
return if_false;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days))
;
var row_fn = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday){
return (function (p__26727){
var map__26728 = p__26727;
var map__26728__$1 = (((((!((map__26728 == null))))?(((((map__26728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26728):map__26728);
var date = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01");
var session_idx = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168));
var absent_QMARK_ = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"absent?","absent?",1101710978));
var week_volume = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"week-volume","week-volume",630206840));
var idx = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.truth_(absent_QMARK_)){
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"color: red",[pr4.prototipo.date_str.call(null,date),"\nSeu aluno faltou nesse dia"].join(''),"Falta",on_saturday.call(null,date,week_volume,(0)),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join(''),on_saturday.call(null,date,"Volume semanal",null)];
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((session_idx == null)));
if(and__4120__auto__){
return cljs.core.nth.call(null,sessions,session_idx,false);
} else {
return and__4120__auto__;
}
})())){
return [pr4.prototipo.date_dd_mm.call(null,date),session_idx__GT_volume.call(null,session_idx),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"#3bbcb7":"#b3e5e3")].join(''),[pr4.prototipo.date_str.call(null,date),"\nSess\u00E3o: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((session_idx + (1))),"\nVolume: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_idx__GT_volume.call(null,session_idx))].join(''),null,on_saturday.call(null,date,week_volume,(0)),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join(''),on_saturday.call(null,date,"Volume semanal",null)];
} else {
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"","","",on_saturday.call(null,date,week_volume,(0)),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join(''),on_saturday.call(null,date,"Volume semanal",null)];

}
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Data","Volume ou falta",({"role": "style"}),({"role": "tooltip"}),({"role": "annotation"}),"Volume semanal",({"role": "style"}),({"role": "annotation"})],cljs.core.map.call(null,row_fn,some_days)));
});
pr4.prototipo.calendar_chart_data2 = (function pr4$prototipo$calendar_chart_data2(calendar,sessions){
var session_idx__GT_volume = (function (session_idx){
if(cljs.core.truth_(session_idx)){
return cljs.core.apply.call(null,pr4.periodization.session_volume,(function (p1__26731_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26731_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26731_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
}).call(null,(function (p1__26730_SHARP_){
return cljs.core.nth.call(null,sessions,p1__26730_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null));
}).call(null,session_idx)));
} else {
return null;
}
});
var zoom_in = (21);
var all_days = cljs.core.map_indexed.call(null,((function (session_idx__GT_volume,zoom_in){
return (function (p1__26733_SHARP_,p2__26732_SHARP_){
return cljs.core.assoc.call(null,p2__26732_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__26733_SHARP_);
});})(session_idx__GT_volume,zoom_in))
,calendar);
var shift = ((cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))) / (2)) - (cljs.core.count.call(null,all_days) / (2)));
var to_drop = ((cljs.core.count.call(null,all_days) - zoom_in) / (2));
var r = cljs.core.drop.call(null,(to_drop + shift),all_days);
var some_days = cljs.core.take.call(null,zoom_in,r);
var row_fn = ((function (session_idx__GT_volume,zoom_in,all_days,shift,to_drop,r,some_days){
return (function (p__26734){
var map__26735 = p__26734;
var map__26735__$1 = (((((!((map__26735 == null))))?(((((map__26735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26735):map__26735);
var date = cljs.core.get.call(null,map__26735__$1,new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01");
var session_idx = cljs.core.get.call(null,map__26735__$1,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168));
var absent_QMARK_ = cljs.core.get.call(null,map__26735__$1,new cljs.core.Keyword(null,"absent?","absent?",1101710978));
var idx = cljs.core.get.call(null,map__26735__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.truth_(absent_QMARK_)){
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"color: red",[pr4.prototipo.date_str.call(null,date),"\nSeu aluno faltou nesse dia"].join(''),"Falta"];
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((session_idx == null)));
if(and__4120__auto__){
return cljs.core.nth.call(null,sessions,session_idx,false);
} else {
return and__4120__auto__;
}
})())){
return [pr4.prototipo.date_dd_mm.call(null,date),session_idx__GT_volume.call(null,session_idx),["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"#3bbcb7":"#b3e5e3")].join(''),[pr4.prototipo.date_str.call(null,date),"\nSess\u00E3o: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((session_idx + (1))),"\nVolume: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_idx__GT_volume.call(null,session_idx))].join(''),null];
} else {
return [pr4.prototipo.date_dd_mm.call(null,date),(0),"","",""];

}
}
});})(session_idx__GT_volume,zoom_in,all_days,shift,to_drop,r,some_days))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Data","Volume ou falta",({"role": "style"}),({"role": "tooltip"}),({"role": "annotation"})],cljs.core.map.call(null,row_fn,some_days)));
});
pr4.prototipo.week_vol_chart_data = (function pr4$prototipo$week_vol_chart_data(calendar,sessions){
var session_idx__GT_volume = (function (session_idx){
if(cljs.core.truth_(session_idx)){
return cljs.core.apply.call(null,pr4.periodization.session_volume,(function (p1__26738_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26738_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__26738_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
}).call(null,(function (p1__26737_SHARP_){
return cljs.core.nth.call(null,sessions,p1__26737_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null));
}).call(null,session_idx)));
} else {
return null;
}
});
var zoom_in = (21);
var all_days_without_week_vol = cljs.core.map_indexed.call(null,((function (session_idx__GT_volume,zoom_in){
return (function (p1__26740_SHARP_,p2__26739_SHARP_){
return cljs.core.assoc.call(null,p2__26739_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__26740_SHARP_);
});})(session_idx__GT_volume,zoom_in))
,calendar);
var first_week = cljs.core.take_while.call(null,((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol){
return (function (p1__26741_SHARP_){
return cljs.core.not_EQ_.call(null,tick.alpha.api.day_of_week.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__26741_SHARP_)),tick.alpha.api.SUNDAY);
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol))
,all_days_without_week_vol);
var add_week_vol = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week){
return (function (week){
if((!(cljs.core.empty_QMARK_.call(null,week)))){
return cljs.core.assoc_in.call(null,cljs.core.vec.call(null,week),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,week) - (1)),new cljs.core.Keyword(null,"week-volume","week-volume",630206840)], null),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,session_idx__GT_volume,cljs.core.map.call(null,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),week))));
} else {
return null;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week))
;
var all_days = (function (){var $ = all_days_without_week_vol;
var $__$1 = cljs.core.drop.call(null,cljs.core.count.call(null,first_week),$);
var $__$2 = cljs.core.partition_all.call(null,(7),$__$1);
var $__$3 = cljs.core.map.call(null,((function ($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol){
return (function (p1__26742_SHARP_){
if(cljs.core.not_EQ_.call(null,(7),cljs.core.count.call(null,p1__26742_SHARP_))){
return p1__26742_SHARP_;
} else {
return add_week_vol.call(null,p1__26742_SHARP_);
}
});})($,$__$1,$__$2,session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol))
,$__$2);
return cljs.core.flatten.call(null,cljs.core.cons.call(null,add_week_vol.call(null,first_week),$__$3));
})();
var shift = ((cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))) / (2)) - (cljs.core.count.call(null,all_days) / (2)));
var to_drop = ((cljs.core.count.call(null,all_days) - zoom_in) / (2));
var r = cljs.core.drop.call(null,(to_drop + shift),all_days);
var some_days = cljs.core.take.call(null,zoom_in,r);
var on_saturday = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days){
return (function (date,if_true,if_false){
if(cljs.core._EQ_.call(null,tick.alpha.api.day_of_week.call(null,date),tick.alpha.api.SATURDAY)){
return if_true;
} else {
return if_false;
}
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days))
;
var row_fn = ((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday){
return (function (p__26743){
var map__26744 = p__26743;
var map__26744__$1 = (((((!((map__26744 == null))))?(((((map__26744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26744):map__26744);
var date = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01");
var session_idx = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168));
var absent_QMARK_ = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"absent?","absent?",1101710978));
var week_volume = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"week-volume","week-volume",630206840));
var idx = cljs.core.get.call(null,map__26744__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
return [(function (){var G__26746 = date;
switch (G__26746) {
case "2019-05-25":
return "Sem 5";

break;
case "2019-06-01":
return "Sem 6";

break;
case "2019-06-08":
return "Sem 7";

break;
default:
return pr4.prototipo.date_dd_mm.call(null,date);

}
})(),week_volume,["color: ",((pr4.util.between_QMARK_.call(null,idx,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))))?"blue":"lightblue")].join('')];
});})(session_idx__GT_volume,zoom_in,all_days_without_week_vol,first_week,add_week_vol,all_days,shift,to_drop,r,some_days,on_saturday))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Data","Volume semanal",({"role": "style"})],cljs.core.map.call(null,row_fn,cljs.core.filter.call(null,new cljs.core.Keyword(null,"week-volume","week-volume",630206840),some_days))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Por-que-periodizar?","Por-que-periodizar?",-358171707)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Por-que-periodizar?",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26754 = (function (meta26755){
this.meta26755 = meta26755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26756,meta26755__$1){
var self__ = this;
var _26756__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26754(meta26755__$1));
});

pr4.prototipo.t_pr4$prototipo26754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26756){
var self__ = this;
var _26756__$1 = this;
return self__.meta26755;
});

pr4.prototipo.t_pr4$prototipo26754.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26754.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (devcard_data,_){
var map__26757 = cljs.core.deref.call(null,devcard_data);
var map__26757__$1 = (((((!((map__26757 == null))))?(((((map__26757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26757):map__26757);
var hidden_QMARK_ = cljs.core.get.call(null,map__26757__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__26757,map__26757__$1,hidden_QMARK_,this__24579__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__26757,map__26757__$1,hidden_QMARK_,this__24579__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "padding": "20px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "margin": "20px 0 10px 0"})], null),"Por que periodizar?"], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "borderRadius": "7px"})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),(function (){var p_style = ({"textIndent": "30px"});
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A periodiza\u00E7\u00E3o surge como uma forma de facilitar e tornar mais eficaz a organiza\u00E7\u00E3o de um programa de treinamento, adequando cada fase e suas vari\u00E1veis, para alcan\u00E7ar os objetivos do indiv\u00EDduo, seja ele um atleta ou n\u00E3o. Esse sistema se ajusta \u00E0 necessidade do treinamento e de suas vari\u00E1veis, potencializando o resultado. Por conseguinte, melhores resultados s\u00E3o obtidos devido \u00E0 organiza\u00E7\u00E3o da variedade de m\u00E9todos existentes, pela implementa\u00E7\u00E3o estrat\u00E9gica das fases e das cargas espec\u00EDficas, causando altern\u00E2ncia nos est\u00EDmulos. Um exemplo pr\u00E1tico \u00E9 a estabiliza\u00E7\u00E3o dos processos hipertr\u00F3ficos observados ap\u00F3s quatro a cinco meses de treinamento quando s\u00E3o utilizadas cargas fixas, tr\u00EAs s\u00E9ries de 10 repeti\u00E7\u00F5es m\u00E1ximas (RM) durante todo o per\u00EDodo. Na periodiza\u00E7\u00E3o, o aluno iniciante de academia pode ser submetido a uma carga de hipertrofia por quatro semanas, 3 s\u00E9ries de 12-14RM, seguido de mais quatro semanas com outra carga de hipertrofia em outra intensidade, por exemplo, 3 s\u00E9ries de 8-10RM. Em suma, o praticante treinar\u00E1 para atingir seus objetivos, por\u00E9m com cargas variadas durante o seu ciclo semestral ou anual, sem esquecer que os ciclos (tempo em que a carga ser\u00E1 realizada) devem ser respeitados. Enfim, periodizar n\u00E3o se trata apenas de modificar as vari\u00E1veis do treinamento de maneira aleat\u00F3ria, mas sim de respeitar as modifica\u00E7\u00F5es de acordo com os ciclos programados."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Vale ressaltar que a periodiza\u00E7\u00E3o n\u00E3o \u00E9 um conceito r\u00EDgido, podendo ser aplicado \u00E0s mais variadas popula\u00E7\u00F5es, como atletas de diversas modalidades, indiv\u00EDduos ativos e/ou sedent\u00E1rios, desde que sejam considerados os diferentes compromissos pessoais e profissionais. No caso dos praticantes de treinamento de for\u00E7a em academias e alunos de treinamento personalizado, os objetivos podem ser: ganhos de aptid\u00E3o f\u00EDsica voltada \u00E0 sa\u00FAde, emagrecimento, aumento de for\u00E7a, resist\u00EAncia, flexibilidade, aumento da massa magra, entre outros."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Na compara\u00E7\u00E3o entre programas periodizados e n\u00E3o periodizados, foi demonstrada a superioridade do treinamento periodizado no aumento de for\u00E7a muscular. De fato, estudos que compararam treinamentos de for\u00E7a periodizados com n\u00E3o periodizados evidenciaram que a periodiza\u00E7\u00E3o foi mais eficiente em promover altera\u00E7\u00F5es positivas nos componentes da composi\u00E7\u00E3o corporal e da for\u00E7a m\u00E1xima. Programas n\u00E3o periodizados com cargas fixas tamb\u00E9m promovem altera\u00E7\u00F5es positivas na composi\u00E7\u00E3o corporal e na for\u00E7a, por\u00E9m, por per\u00EDodos limitados, at\u00E9 quatro a cinco meses. Desse modo, periodizar auxilia no processo de melhora das capacidades funcionais por per\u00EDodos superiores a seis meses."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Os programas de treinamento de for\u00E7a periodizados com varia\u00E7\u00E3o da intensidade e per\u00EDodos ativos de descanso podem atenuar a estabiliza\u00E7\u00E3o dos resultados no desempenho, diminuindo a probabilidade de sobretreinamento e proporcionando maiores aumentos na for\u00E7a e na pot\u00EAncia."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Os objetivos da periodiza\u00E7\u00E3o incluem maximizar o princ\u00EDpio da sobrecarga e garantir uma melhor rela\u00E7\u00E3o entre estresse e recupera\u00E7\u00E3o (heterocronismo). O princ\u00EDpio da sobrecarga pode ser descrito pelo processo de aplica\u00E7\u00E3o de cargas \u00E0s quais o sistema neuromuscular n\u00E3o est\u00E1 adaptado. Quando maiores demandas s\u00E3o impostas ao sistema neuromuscular, ocorrem adapta\u00E7\u00F5es que resultam em n\u00EDveis aumentados de for\u00E7a. As vari\u00E1veis do treinamento que podem ser articuladas para aperfei\u00E7oar o programa s\u00E3o: n\u00FAmero de s\u00E9ries realizadas em cada exerc\u00EDcio, n\u00FAmero de repeti\u00E7\u00F5es por s\u00E9rie, exerc\u00EDcios realizados, n\u00FAmero de exerc\u00EDcios realizados a cada sess\u00E3o, per\u00EDodos de descanso entre as s\u00E9ries e exerc\u00EDcios, carga utilizada a cada s\u00E9rie, tipo e velocidade da a\u00E7\u00E3o muscular utilizada (conc\u00EAntrica, exc\u00EAntrica, isom\u00E9trica), n\u00FAmero de sess\u00F5es de treinamento realizadas por dia e por semana. Conforme comentado anteriormente, o treinamento de for\u00E7a em academias tamb\u00E9m requer a organiza\u00E7\u00E3o em ciclos, nos quais as suas vari\u00E1veis s\u00E3o sistematizadas."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://books.google.com.br/books?id=r2aJDAAAQBAJ"], null),"Prestes, Jonato, et al. \"Prescri\u00E7\u00E3o e periodiza\u00E7\u00E3o do treinamento de for\u00E7a em academias.\" (2010)."], null)], null)], null);
})()], null)], null);
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26755","meta26755",1313799759,null)], null);
});

pr4.prototipo.t_pr4$prototipo26754.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26754.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26754";

pr4.prototipo.t_pr4$prototipo26754.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26754");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26754.
 */
pr4.prototipo.__GT_t_pr4$prototipo26754 = (function pr4$prototipo$__GT_t_pr4$prototipo26754(meta26755){
return (new pr4.prototipo.t_pr4$prototipo26754(meta26755));
});

}

return (new pr4.prototipo.t_pr4$prototipo26754(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,true)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"external-storage","external-storage",861359306)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"external-storage",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26759 = (function (meta26760){
this.meta26760 = meta26760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26761,meta26760__$1){
var self__ = this;
var _26761__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26759(meta26760__$1));
});

pr4.prototipo.t_pr4$prototipo26759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26761){
var self__ = this;
var _26761__$1 = this;
return self__.meta26760;
});

pr4.prototipo.t_pr4$prototipo26759.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26760","meta26760",-1106833983,null)], null);
});

pr4.prototipo.t_pr4$prototipo26759.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26759.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26759";

pr4.prototipo.t_pr4$prototipo26759.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26759");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26759.
 */
pr4.prototipo.__GT_t_pr4$prototipo26759 = (function pr4$prototipo$__GT_t_pr4$prototipo26759(meta26760){
return (new pr4.prototipo.t_pr4$prototipo26759(meta26760));
});

}

return (new pr4.prototipo.t_pr4$prototipo26759(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pr4.prototipo.replace_logo = (function pr4$prototipo$replace_logo(event){
var periodiza_logo = document.createElement("img");
var breadcrumb = document.getElementsByClassName("com-rigsomelight-devcards_set-current-path").item((0));
var cljs_logo = document.getElementsByClassName("cljs-logo").item((0));
if(cljs.core.truth_(cljs_logo)){
periodiza_logo.src = "images/manifest/icon-48x48.png";

cljs_logo.parentNode.style = "display: flex; width: 100%; justify-content: flex-end; margin-top: -16px";

cljs_logo.parentNode.parentNode.style = "display: flex;";

breadcrumb.innerHTML = "Periodiza";

return cljs_logo.parentNode.replaceChild(periodiza_logo,cljs_logo);
} else {
return null;
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"replace-logo","replace-logo",779151097)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"replace-logo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo26762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo26762 = (function (meta26763){
this.meta26763 = meta26763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo26762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26764,meta26763__$1){
var self__ = this;
var _26764__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo26762(meta26763__$1));
});

pr4.prototipo.t_pr4$prototipo26762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26764){
var self__ = this;
var _26764__$1 = this;
return self__.meta26763;
});

pr4.prototipo.t_pr4$prototipo26762.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo26762.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__24579__auto__,devcard_opts__24580__auto__){
var self__ = this;
var this__24579__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__24580__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__24598__auto__ = ((function (this__24579__auto____$1){
return (function (){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"",new cljs.core.Keyword(null,"onError","onError",1669791984),pr4.prototipo.replace_logo], null)], null));
});})(this__24579__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__24598__auto__)){
return ((function (v__24598__auto__,this__24579__auto____$1){
return (function (data_atom__24599__auto__,owner__24600__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__24598__auto__,data_atom__24599__auto__,owner__24600__auto__], null));
});
;})(v__24598__auto__,this__24579__auto____$1))
} else {
return reagent.core.as_element.call(null,v__24598__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__24580__auto__))));
});

pr4.prototipo.t_pr4$prototipo26762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta26763","meta26763",-1755990429,null)], null);
});

pr4.prototipo.t_pr4$prototipo26762.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo26762.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo26762";

pr4.prototipo.t_pr4$prototipo26762.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo26762");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo26762.
 */
pr4.prototipo.__GT_t_pr4$prototipo26762 = (function pr4$prototipo$__GT_t_pr4$prototipo26762(meta26763){
return (new pr4.prototipo.t_pr4$prototipo26762(meta26763));
});

}

return (new pr4.prototipo.t_pr4$prototipo26762(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Pot\u00EAncia","null","Hipertrofia","null","Resist\u00EAncia","null","For\u00E7a","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Pot\u00EAncia","null","Hipertrofia","null","Resist\u00EAncia","null","For\u00E7a","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["Pot\u00EAncia",null,"Hipertrofia",null,"Resist\u00EAncia",null,"For\u00E7a",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Avan\u00E7ado","null","Iniciante","null","Intermedi\u00E1rio","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Avan\u00E7ado","null","Iniciante","null","Intermedi\u00E1rio","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["Avan\u00E7ado",null,"Iniciante",null,"Intermedi\u00E1rio",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Sexta","null","S\u00E1bado","null","Ter\u00E7a","null","Quinta","null","Segunda","null","Domingo","null","Quarta","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Sexta","null","S\u00E1bado","null","Ter\u00E7a","null","Quinta","null","Segunda","null","Domingo","null","Quarta","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, ["Sexta",null,"S\u00E1bado",null,"Ter\u00E7a",null,"Quinta",null,"Segunda",null,"Domingo",null,"Quarta",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01","null","2019-07-01","null","2018-09-01","null","2019-06-01","null","2018-12-01","null","2019-01-01","null","2019-05-01","null","2018-10-01","null","2018-08-01","null","2019-02-01","null","2019-03-01","null","2019-04-01","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, ["2018-11-01",null,"2019-07-01",null,"2018-09-01",null,"2019-06-01",null,"2018-12-01",null,"2019-01-01",null,"2019-05-01",null,"2018-10-01",null,"2018-08-01",null,"2019-02-01",null,"2019-03-01",null,"2019-04-01",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01","null","2020-07-01","null","2019-12-01","null","2020-05-01","null","2020-06-01","null","2020-02-01","null","2019-09-01","null","2020-04-01","null","2019-08-01","null","2019-10-01","null","2020-08-01","null","2020-01-01","null","2019-11-01","null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["2020-03-01",null,"2020-07-01",null,"2019-12-01",null,"2020-05-01",null,"2020-06-01",null,"2020-02-01",null,"2019-09-01",null,"2020-04-01",null,"2019-08-01",null,"2019-10-01",null,"2020-08-01",null,"2020-01-01",null,"2019-11-01",null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(-300),"null",(-900),"null",(300),"null",(600),"null",(-600),"null",(900),"null"], null), null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(-300),"null",(-900),"null",(300),"null",(600),"null",(-600),"null",(900),"null"], null), null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [(-300),null,(-900),null,(300),null,(600),null,(-600),null,(900),null], null), null)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("pr4.prototipo","dispatch-an-event-args","pr4.prototipo/dispatch-an-event-args",-1254082902),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword(null,"redef-goal","redef-goal",1886246024),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),new cljs.core.Keyword(null,"redef-level","redef-level",1605415716),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),new cljs.core.Keyword(null,"redef-wk-days","redef-wk-days",-18650998),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),new cljs.core.Keyword(null,"redef-end","redef-end",-1799400107),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),new cljs.core.Keyword(null,"redef-start","redef-start",1020904956),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),new cljs.core.Keyword(null,"redef-time","redef-time",303417329),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redef-goal","redef-goal",1886246024),new cljs.core.Keyword(null,"redef-level","redef-level",1605415716),new cljs.core.Keyword(null,"redef-wk-days","redef-wk-days",-18650998),new cljs.core.Keyword(null,"redef-end","redef-end",-1799400107),new cljs.core.Keyword(null,"redef-start","redef-start",1020904956),new cljs.core.Keyword(null,"redef-time","redef-time",303417329)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.prototipo","redefine-periodization-goal-select","pr4.prototipo/redefine-periodization-goal-select",-801571644),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-level-select","pr4.prototipo/redefine-periodization-level-select",-3057356),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-week-sessions-toggle","pr4.prototipo/redefine-periodization-week-sessions-toggle",1135593205),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-start-event","pr4.prototipo/redefine-periodization-planning-start-event",1330830705),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-planning-end-event","pr4.prototipo/redefine-periodization-planning-end-event",1247467056),new cljs.core.Keyword("pr4.prototipo","redefine-periodization-session-time-target-add","pr4.prototipo/redefine-periodization-session-time-target-add",1563754573)], null),null));

//# sourceMappingURL=prototipo.js.map
