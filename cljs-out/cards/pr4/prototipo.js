// Compiled by ClojureScript 1.10.520 {}
goog.provide('pr4.prototipo');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('reagent.core');
goog.require('pr4.periodization');
goog.require('tick.alpha.api');
goog.require('re_frame.core');
goog.require('pr4.app_state');
goog.require('pr4.events');
goog.require('pr4.util');
goog.require('goog.events');
goog.require('goog.events.EventType');
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

return re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","initialize-app-state","pr4.events/initialize-app-state",-1875868992)], null));
})()
;
}
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.devcards_hidden !== 'undefined')){
} else {
pr4.prototipo.devcards_hidden = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"hidding-cards","hidding-cards",-932317179)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"hidding-cards",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo30131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo30131 = (function (meta30132){
this.meta30132 = meta30132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo30131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30133,meta30132__$1){
var self__ = this;
var _30133__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo30131(meta30132__$1));
});

pr4.prototipo.t_pr4$prototipo30131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30133){
var self__ = this;
var _30133__$1 = this;
return self__.meta30132;
});

pr4.prototipo.t_pr4$prototipo30131.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo30131.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__28402__auto__,devcard_opts__28403__auto__){
var self__ = this;
var this__28402__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__28403__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__28421__auto__ = (function (){var card_container_style = ({"display": "flex", "justifyContent": "space-evenly", "padding": "20px 0"});
return ((function (card_container_style,this__28402__auto____$1){
return (function (devcard_data,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),card_container_style], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__28402__auto____$1){
return (function (){
var seq__30134 = cljs.core.seq.call(null,cljs.core.deref.call(null,pr4.prototipo.devcards_hidden));
var chunk__30135 = null;
var count__30136 = (0);
var i__30137 = (0);
while(true){
if((i__30137 < count__30136)){
var hidden_atom = cljs.core._nth.call(null,chunk__30135,i__30137);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__30142 = seq__30134;
var G__30143 = chunk__30135;
var G__30144 = count__30136;
var G__30145 = (i__30137 + (1));
seq__30134 = G__30142;
chunk__30135 = G__30143;
count__30136 = G__30144;
i__30137 = G__30145;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30134);
if(temp__5735__auto__){
var seq__30134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30134__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30134__$1);
var G__30146 = cljs.core.chunk_rest.call(null,seq__30134__$1);
var G__30147 = c__4550__auto__;
var G__30148 = cljs.core.count.call(null,c__4550__auto__);
var G__30149 = (0);
seq__30134 = G__30146;
chunk__30135 = G__30147;
count__30136 = G__30148;
i__30137 = G__30149;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__30134__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,true);


var G__30150 = cljs.core.next.call(null,seq__30134__$1);
var G__30151 = null;
var G__30152 = (0);
var G__30153 = (0);
seq__30134 = G__30150;
chunk__30135 = G__30151;
count__30136 = G__30152;
i__30137 = G__30153;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__28402__auto____$1))
], null),"hide all"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (card_container_style,this__28402__auto____$1){
return (function (){
var seq__30138 = cljs.core.seq.call(null,cljs.core.deref.call(null,pr4.prototipo.devcards_hidden));
var chunk__30139 = null;
var count__30140 = (0);
var i__30141 = (0);
while(true){
if((i__30141 < count__30140)){
var hidden_atom = cljs.core._nth.call(null,chunk__30139,i__30141);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__30154 = seq__30138;
var G__30155 = chunk__30139;
var G__30156 = count__30140;
var G__30157 = (i__30141 + (1));
seq__30138 = G__30154;
chunk__30139 = G__30155;
count__30140 = G__30156;
i__30141 = G__30157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30138);
if(temp__5735__auto__){
var seq__30138__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30138__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30138__$1);
var G__30158 = cljs.core.chunk_rest.call(null,seq__30138__$1);
var G__30159 = c__4550__auto__;
var G__30160 = cljs.core.count.call(null,c__4550__auto__);
var G__30161 = (0);
seq__30138 = G__30158;
chunk__30139 = G__30159;
count__30140 = G__30160;
i__30141 = G__30161;
continue;
} else {
var hidden_atom = cljs.core.first.call(null,seq__30138__$1);
cljs.core.reset_BANG_.call(null,hidden_atom,false);


var G__30162 = cljs.core.next.call(null,seq__30138__$1);
var G__30163 = null;
var G__30164 = (0);
var G__30165 = (0);
seq__30138 = G__30162;
chunk__30139 = G__30163;
count__30140 = G__30164;
i__30141 = G__30165;
continue;
}
} else {
return null;
}
}
break;
}
});})(card_container_style,this__28402__auto____$1))
], null),"show all"], null)], null);
});
;})(card_container_style,this__28402__auto____$1))
})();
if(cljs.core.fn_QMARK_.call(null,v__28421__auto__)){
return ((function (v__28421__auto__,this__28402__auto____$1){
return (function (data_atom__28422__auto__,owner__28423__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__28421__auto__,data_atom__28422__auto__,owner__28423__auto__], null));
});
;})(v__28421__auto__,this__28402__auto____$1))
} else {
return reagent.core.as_element.call(null,v__28421__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__28403__auto__))));
});

pr4.prototipo.t_pr4$prototipo30131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30132","meta30132",787898465,null)], null);
});

pr4.prototipo.t_pr4$prototipo30131.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo30131.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo30131";

pr4.prototipo.t_pr4$prototipo30131.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo30131");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo30131.
 */
pr4.prototipo.__GT_t_pr4$prototipo30131 = (function pr4$prototipo$__GT_t_pr4$prototipo30131(meta30132){
return (new pr4.prototipo.t_pr4$prototipo30131(meta30132));
});

}

return (new pr4.prototipo.t_pr4$prototipo30131(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pr4.prototipo.sessions__GT_chart_data = (function pr4$prototipo$sessions__GT_chart_data(sessions,selection){
var row_fn = (function (index,p__30166){
var map__30167 = p__30166;
var map__30167__$1 = (((((!((map__30167 == null))))?(((((map__30167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30167):map__30167);
var total_sets = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var reps_max = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
return [["Sess\u00E3o ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1)))].join(''),pr4.periodization.session_volume.call(null,reps_max,total_sets),["color: ",((pr4.util.between_QMARK_.call(null,index,selection))?"#3bbcb7":"#b3e5e3")].join(''),pr4.periodization.reps_to_intensity.call(null,reps_max),["color: ",((pr4.util.between_QMARK_.call(null,index,selection))?"#ffd237":"#ffe99c")].join('')];
});
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Sess\u00E3o","Volume",({"role": "style"}),"Intensidade",({"role": "style"})],cljs.core.map_indexed.call(null,row_fn,sessions)));
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
pr4.prototipo.micro_chart_data = (function pr4$prototipo$micro_chart_data(sessions,p__30172,micros){
var vec__30173 = p__30172;
var selection_f = cljs.core.nth.call(null,vec__30173,(0),null);
var selection_l = cljs.core.nth.call(null,vec__30173,(1),null);
var summed_volumes = ((function (vec__30173,selection_f,selection_l){
return (function (sessions__$1){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__30173,selection_f,selection_l){
return (function (p1__30170_SHARP_){
return cljs.core.apply.call(null,pr4.periodization.session_volume,p1__30170_SHARP_);
});})(vec__30173,selection_f,selection_l))
,cljs.core.map.call(null,((function (vec__30173,selection_f,selection_l){
return (function (p1__30169_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30169_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__30169_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
});})(vec__30173,selection_f,selection_l))
,sessions__$1)));
});})(vec__30173,selection_f,selection_l))
;
var avg_intensity = ((function (summed_volumes,vec__30173,selection_f,selection_l){
return (function (sessions__$1){
return ((function (summed_volumes,vec__30173,selection_f,selection_l){
return (function (p1__30171_SHARP_){
return (p1__30171_SHARP_ / cljs.core.count.call(null,sessions__$1));
});})(summed_volumes,vec__30173,selection_f,selection_l))
.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,pr4.periodization.reps_to_intensity,cljs.core.map.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),sessions__$1))));
});})(summed_volumes,vec__30173,selection_f,selection_l))
;
var row_fn = ((function (summed_volumes,avg_intensity,vec__30173,selection_f,selection_l){
return (function (index,micro_range){
return [["Micro ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((index + (1)))].join(''),summed_volumes.call(null,pr4.util.select_indexes.call(null,sessions,micro_range)),["color: ",((cljs.core._EQ_.call(null,micro_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_f,selection_l], null)))?"#3bbc8e":"#74deb8")].join(''),avg_intensity.call(null,pr4.util.select_indexes.call(null,sessions,micro_range)),["color: ",((cljs.core._EQ_.call(null,micro_range,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [selection_f,selection_l], null)))?"#ffbd38":"#ffcf70")].join('')];
});})(summed_volumes,avg_intensity,vec__30173,selection_f,selection_l))
;
return cljs.core.into_array.call(null,cljs.core.cons.call(null,["Micro","Volume do Micro",({"role": "style"}),"Intensidade",({"role": "style"})],cljs.core.map_indexed.call(null,row_fn,pr4.prototipo.microciclos__GT_ranged_micros.call(null,micros))));
});
pr4.prototipo.reps__GT_intensity_text = (function pr4$prototipo$reps__GT_intensity_text(min,max){
if(cljs.core._EQ_.call(null,min,max)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,min))),"%"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,max))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pr4.periodization.reps_to_intensity.call(null,min))),"%"].join('');
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
pr4.prototipo.normal_chart_options = ({"theme": "maximized", "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "70%"}), "vAxes": [({"minValue": (2500), "maxValue": (35000), "viewWindowMode": "maximized"}),({"minValue": (40), "maxValue": (100), "viewWindowMode": "maximized"})]});
pr4.prototipo.side_arrows = (function pr4$prototipo$side_arrows(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30183 = arguments.length;
var i__4731__auto___30184 = (0);
while(true){
if((i__4731__auto___30184 < len__4730__auto___30183)){
args__4736__auto__.push((arguments[i__4731__auto___30184]));

var G__30185 = (i__4731__auto___30184 + (1));
i__4731__auto___30184 = G__30185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return pr4.prototipo.side_arrows.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

pr4.prototipo.side_arrows.cljs$core$IFn$_invoke$arity$variadic = (function (p__30180,children){
var map__30181 = p__30180;
var map__30181__$1 = (((((!((map__30181 == null))))?(((((map__30181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30181):map__30181);
var onClickLeft = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512));
var onClickRight = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801));
var style = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"style","style",-496642736));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.js__GT_clj.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 -12px"], null),cljs.core.js__GT_clj.call(null,style)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClickLeft], null)], null),cljs.core.map_indexed.call(null,((function (map__30181,map__30181__$1,onClickLeft,onClickRight,style){
return (function (p1__30177_SHARP_,p2__30176_SHARP_){
return cljs.core.with_meta.call(null,p2__30176_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__30177_SHARP_], null));
});})(map__30181,map__30181__$1,onClickLeft,onClickRight,style))
,children),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),onClickRight], null)], null)], null);
});

pr4.prototipo.side_arrows.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
pr4.prototipo.side_arrows.cljs$lang$applyTo = (function (seq30178){
var G__30179 = cljs.core.first.call(null,seq30178);
var seq30178__$1 = cljs.core.next.call(null,seq30178);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30179,seq30178__$1);
});

/**
 * Show last session, but edit all the selected range.
 */
pr4.prototipo.session_component = (function pr4$prototipo$session_component(p__30191){
var map__30192 = p__30191;
var map__30192__$1 = (((((!((map__30192 == null))))?(((((map__30192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30192):map__30192);
var selected_sessions = cljs.core.get.call(null,map__30192__$1,new cljs.core.Keyword(null,"selected-sessions","selected-sessions",-1967071592));
var map__30194 = cljs.core.last.call(null,selected_sessions);
var map__30194__$1 = (((((!((map__30194 == null))))?(((((map__30194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30194):map__30194);
var session = map__30194__$1;
var reps_min = cljs.core.get.call(null,map__30194__$1,new cljs.core.Keyword(null,"reps-min","reps-min",1114264304));
var reps_max = cljs.core.get.call(null,map__30194__$1,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311));
var total_sets = cljs.core.get.call(null,map__30194__$1,new cljs.core.Keyword(null,"total-sets","total-sets",467388901));
var rest_time = cljs.core.get.call(null,map__30194__$1,new cljs.core.Keyword(null,"rest-time","rest-time",-840693892));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Intensidade: ",pr4.prototipo.reps__GT_intensity_text.call(null,reps_min,reps_max)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Repeti\u00E7\u00F5es: ",pr4.prototipo.reps__GT_reps_zone.call(null,reps_min,reps_max)," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","decrease-reps-range","pr4.events/decrease-reps-range",-463483143)], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","increase-reps-range","pr4.events/increase-reps-range",-1629298855)], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min - (1))], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),(reps_min + (1))], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(30),new cljs.core.Keyword(null,"value","value",305978217),reps_min,new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"label","label",1718410804),"1RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(8),new cljs.core.Keyword(null,"label","label",1718410804),"8RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(15),new cljs.core.Keyword(null,"label","label",1718410804),"15RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(20),new cljs.core.Keyword(null,"label","label",1718410804),"20RM"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(25),new cljs.core.Keyword(null,"label","label",1718410804),"25RM"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (p1__30187_SHARP_,p2__30186_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reps-slider-change","pr4.events/reps-slider-change",1471895148),p2__30186_SHARP_], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"S\u00E9ries: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(99),new cljs.core.Keyword(null,"value","value",305978217),total_sets,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (p1__30188_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","total-sets-changed","pr4.events/total-sets-changed",-2039067665),p1__30188_SHARP_.target.value], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Descanso por s\u00E9rie: ",pr4.util.seconds__GT_minute_text.call(null,rest_time)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time - (15))], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),(rest_time + (15))], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),rest_time,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions){
return (function (p1__30190_SHARP_,p2__30189_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","rest-slider-changed","pr4.events/rest-slider-changed",-1837443574),p2__30189_SHARP_], null));
});})(map__30194,map__30194__$1,session,reps_min,reps_max,total_sets,rest_time,map__30192,map__30192__$1,selected_sessions))
,new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"label","label",1718410804),"0"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(60),new cljs.core.Keyword(null,"label","label",1718410804),"1:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(120),new cljs.core.Keyword(null,"label","label",1718410804),"2:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(180),new cljs.core.Keyword(null,"label","label",1718410804),"3:00"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(240),new cljs.core.Keyword(null,"label","label",1718410804),"4:00"], null)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(300),new cljs.core.Keyword(null,"step","step",1288888124),(15)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Volume total (Intens. x Rep. x S\u00E9ries): ",pr4.periodization.session__GT_total_volume.call(null,session)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Tempo estimado da sess\u00E3o: ",pr4.util.seconds__GT_minute_text.call(null,pr4.util.round_to_precision.call(null,pr4.periodization.session__GT_time_estimate.call(null,session),(300)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Rela\u00E7\u00E3o [Execu\u00E7\u00E3o Descanso]: ",["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * (pr4.periodization.execution_time.call(null,reps_max,total_sets) / pr4.periodization.session__GT_time_estimate.call(null,session))))),"% ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(((100) * (pr4.periodization.total_rest_time.call(null,total_sets,rest_time) / pr4.periodization.session__GT_time_estimate.call(null,session))))),"%]"].join('')], null)], null);
});
pr4.prototipo.replace_logo = (function pr4$prototipo$replace_logo(event){
var periodiza_logo = document.createElement("img");
var breadcrumb = document.getElementsByClassName("com-rigsomelight-devcards_set-current-path").item((0));
var cljs_logo = document.getElementsByClassName("cljs-logo").item((0));
periodiza_logo.src = "icon/icon-48x48.png";

cljs_logo.parentNode.style = "display: flex; width: 100%; justify-content: flex-end; margin-top: -16px";

cljs_logo.parentNode.parentNode.style = "display: flex;";

breadcrumb.innerHTML = "Periodiza";

return cljs_logo.parentNode.replaceChild(periodiza_logo,cljs_logo);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Sess\u00E3o","Sess\u00E3o",1735620633)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Sess\u00E3o",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo30198 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo30198 = (function (meta30199){
this.meta30199 = meta30199;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo30198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30200,meta30199__$1){
var self__ = this;
var _30200__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo30198(meta30199__$1));
});

pr4.prototipo.t_pr4$prototipo30198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30200){
var self__ = this;
var _30200__$1 = this;
return self__.meta30199;
});

pr4.prototipo.t_pr4$prototipo30198.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo30198.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__28402__auto__,devcard_opts__28403__auto__){
var self__ = this;
var this__28402__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__28403__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__28421__auto__ = ((function (this__28402__auto____$1){
return (function (devcard_data,_){
var map__30201 = cljs.core.deref.call(null,devcard_data);
var map__30201__$1 = (((((!((map__30201 == null))))?(((((map__30201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30201):map__30201);
var hidden_QMARK_ = cljs.core.get.call(null,map__30201__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"",new cljs.core.Keyword(null,"onError","onError",1669791984),pr4.prototipo.replace_logo], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),"Sess\u00E3o ",(function (){var vec__30203 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)));
var selection_start = cljs.core.nth.call(null,vec__30203,(0),null);
var selection_end = cljs.core.nth.call(null,vec__30203,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((selection_start + (1))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(selection_end)].join('');
})()," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","decrease-selected-range","pr4.events/decrease-selected-range",-532870732)], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),"secondary",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","increase-selected-range","pr4.events/increase-selected-range",199933605)], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-sel-slider-changed","pr4.events/session-sel-slider-changed",-423555165),(cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))) - (1))], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-sel-slider-changed","pr4.events/session-sel-slider-changed",-423555165),(cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))) + (1))], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null)))),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30197_SHARP_,p2__30196_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","session-sel-slider-changed","pr4.events/session-sel-slider-changed",-423555165),p2__30196_SHARP_], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "center", "flexWrap": "wrap"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "3px"})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","delete-selected-sessions","pr4.events/delete-selected-sessions",246616778)], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null),"Excluir"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","duplicate-selected-sessions","pr4.events/duplicate-selected-sessions",2056027331)], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null),"Duplicar"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "3px"})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","move-sessions-left","pr4.events/move-sessions-left",-364668232)], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null),"Mover"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","move-sessions-right","pr4.events/move-sessions-right",411726822)], null));
});})(map__30201,map__30201__$1,hidden_QMARK_,this__28402__auto____$1))
], null),"Mover",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#chart-div","div#chart-div",-424237732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"paddingTop": "20px", "height": (200)})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"onError","onError",1669791984),pr4.prototipo.draw_chart.call(null,"chart-div",pr4.prototipo.sessions__GT_chart_data.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))),0.9,pr4.prototipo.normal_chart_options)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.session_component,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-sessions","selected-sessions",-1967071592),pr4.util.select_indexes.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null))))], null)], null)], null)], null)], null);
});})(this__28402__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__28421__auto__)){
return ((function (v__28421__auto__,this__28402__auto____$1){
return (function (data_atom__28422__auto__,owner__28423__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__28421__auto__,data_atom__28422__auto__,owner__28423__auto__], null));
});
;})(v__28421__auto__,this__28402__auto____$1))
} else {
return reagent.core.as_element.call(null,v__28421__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__28403__auto__))));
});

pr4.prototipo.t_pr4$prototipo30198.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30199","meta30199",-1397362029,null)], null);
});

pr4.prototipo.t_pr4$prototipo30198.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo30198.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo30198";

pr4.prototipo.t_pr4$prototipo30198.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo30198");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo30198.
 */
pr4.prototipo.__GT_t_pr4$prototipo30198 = (function pr4$prototipo$__GT_t_pr4$prototipo30198(meta30199){
return (new pr4.prototipo.t_pr4$prototipo30198(meta30199));
});

}

return (new pr4.prototipo.t_pr4$prototipo30198(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
pr4.prototipo.micro_name = (function pr4$prototipo$micro_name(sessions_atoms,models){
var sessions = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__30206_SHARP_){
return cljs.core.select_keys.call(null,p1__30206_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892)], null));
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
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Microciclo","Microciclo",1605278952)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Microciclo",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo30211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo30211 = (function (meta30212){
this.meta30212 = meta30212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo30211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30213,meta30212__$1){
var self__ = this;
var _30213__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo30211(meta30212__$1));
});

pr4.prototipo.t_pr4$prototipo30211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30213){
var self__ = this;
var _30213__$1 = this;
return self__.meta30212;
});

pr4.prototipo.t_pr4$prototipo30211.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo30211.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__28402__auto__,devcard_opts__28403__auto__){
var self__ = this;
var this__28402__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__28403__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__28421__auto__ = ((function (this__28402__auto____$1){
return (function (devcard_data,_){
var map__30214 = cljs.core.deref.call(null,devcard_data);
var map__30214__$1 = (((((!((map__30214 == null))))?(((((map__30214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30214):map__30214);
var hidden_QMARK_ = cljs.core.get.call(null,map__30214__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),"Microciclo ",(function (){var vec__30216 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)));
var session_sel_start = cljs.core.nth.call(null,vec__30216,(0),null);
var session_sel_end = cljs.core.nth.call(null,vec__30216,(1),null);
var micro_sel_start = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","idx-micros","pr4.app-state/idx-micros",-1514411070)], null))).call(null,session_sel_start);
var micro_sel_end = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","idx-micros","pr4.app-state/idx-micros",-1514411070)], null))).call(null,session_sel_end);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(micro_sel_start)?(micro_sel_start + (1)):null)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(micro_sel_end)].join('');
})()," "], null),(function (){var slider_value = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","idx-micros","pr4.app-state/idx-micros",-1514411070)], null))).call(null,cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (slider_value,map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","microcycles-sel-slider-changed","pr4.events/microcycles-sel-slider-changed",1289237402),(slider_value - (1))], null));
});})(slider_value,map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (slider_value,map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","microcycles-sel-slider-changed","pr4.events/microcycles-sel-slider-changed",1289237402),(slider_value + (1))], null));
});})(slider_value,map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375)], null)))),new cljs.core.Keyword(null,"value","value",305978217),slider_value,new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (slider_value,map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30208_SHARP_,p2__30207_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","microcycles-sel-slider-changed","pr4.events/microcycles-sel-slider-changed",1289237402),p2__30207_SHARP_], null));
});})(slider_value,map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1))
], null)], null)], null);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex"})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#micro-chart","div#micro-chart",1224772728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "10px 0", "height": (200)})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#micro-sessions-chart","div#micro-sessions-chart",-1010364140),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "10px 0", "height": (200)})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"onError","onError",1669791984),pr4.prototipo.draw_chart.call(null,"micro-chart",pr4.prototipo.micro_chart_data.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","microcycles","pr4.app-state/microcycles",-1287931375)], null)))),0.6,pr4.prototipo.normal_chart_options)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"onError","onError",1669791984),pr4.prototipo.draw_chart.call(null,"micro-sessions-chart",(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","idx-micros","pr4.app-state/idx-micros",-1514411070)], null))).call(null,cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","idx-micros","pr4.app-state/idx-micros",-1514411070)], null))).call(null,cljs.core.second.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))));
} else {
return and__4120__auto__;
}
})())?pr4.prototipo.sessions__GT_chart_data.call(null,pr4.util.select_indexes.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))))], null)):[["Sess\u00E3o","Volume","Intensidade"],["1",(0),(0)]]),0.35,pr4.prototipo.normal_chart_options)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$select,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),pr4.prototipo.micro_name.call(null,pr4.util.select_indexes.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","session-selection","pr4.app-state/session-selection",-295200129)], null)))),pr4.periodization.micros_models),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30209_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","update-sessions-by-model","pr4.events/update-sessions-by-model",-392885995),p1__30209_SHARP_.target.value], null));
});})(map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1))
], null),cljs.core.map.call(null,((function (map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30210_SHARP_){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),p1__30210_SHARP_], null),p1__30210_SHARP_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p1__30210_SHARP_], null));
});})(map__30214,map__30214__$1,hidden_QMARK_,this__28402__auto____$1))
,pr4.prototipo.models_names.call(null,pr4.periodization.micros_models)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$menu_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"Custom.",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),"Custom."], null)], null)], null)], null)], null)], null);
});})(this__28402__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__28421__auto__)){
return ((function (v__28421__auto__,this__28402__auto____$1){
return (function (data_atom__28422__auto__,owner__28423__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__28421__auto__,data_atom__28422__auto__,owner__28423__auto__], null));
});
;})(v__28421__auto__,this__28402__auto____$1))
} else {
return reagent.core.as_element.call(null,v__28421__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__28403__auto__))));
});

pr4.prototipo.t_pr4$prototipo30211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30212","meta30212",-1879936888,null)], null);
});

pr4.prototipo.t_pr4$prototipo30211.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo30211.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo30211";

pr4.prototipo.t_pr4$prototipo30211.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo30211");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo30211.
 */
pr4.prototipo.__GT_t_pr4$prototipo30211 = (function pr4$prototipo$__GT_t_pr4$prototipo30211(meta30212){
return (new pr4.prototipo.t_pr4$prototipo30211(meta30212));
});

}

return (new pr4.prototipo.t_pr4$prototipo30211(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
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
pr4.prototipo.calendar_chart_options = ({"chartArea": ({"width": "100%"}), "legend": ({"position": "none"}), "series": ({"0": ({"targetAxisIndex": (0)}), "1": ({"targetAxisIndex": (1)})}), "bar": ({"groupWidth": "100%"}), "vAxes": [({"textPosition": "none", "maxValue": (35000), "viewWindowMode": "maximized"}),({"textPosition": "none", "viewWindowMode": "maximized"})]});
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.chart_zoom !== 'undefined')){
} else {
pr4.prototipo.chart_zoom = reagent.core.atom.call(null,(30));
}
pr4.prototipo.calendar_chart_data = (function pr4$prototipo$calendar_chart_data(calendar,sessions){
var session_idx__GT_volume = (function (session_idx){
if(cljs.core.truth_(session_idx)){
return cljs.core.apply.call(null,pr4.periodization.session_volume,(function (p1__30220_SHARP_){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30220_SHARP_.call(null,new cljs.core.Keyword(null,"reps-max","reps-max",-707901311)),p1__30220_SHARP_.call(null,new cljs.core.Keyword(null,"total-sets","total-sets",467388901))], null));
}).call(null,(function (p1__30219_SHARP_){
return cljs.core.nth.call(null,sessions,p1__30219_SHARP_,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reps-min","reps-min",1114264304),(20),new cljs.core.Keyword(null,"reps-max","reps-max",-707901311),(20),new cljs.core.Keyword(null,"total-sets","total-sets",467388901),(1),new cljs.core.Keyword(null,"rest-time","rest-time",-840693892),(10)], null));
}).call(null,session_idx)));
} else {
return null;
}
});
var zoom_in = cljs.core.deref.call(null,pr4.prototipo.chart_zoom);
var all_days_without_week_vol = cljs.core.map_indexed.call(null,((function (session_idx__GT_volume,zoom_in){
return (function (p1__30222_SHARP_,p2__30221_SHARP_){
return cljs.core.assoc.call(null,p2__30221_SHARP_,new cljs.core.Keyword(null,"idx","idx",1053688473),p1__30222_SHARP_);
});})(session_idx__GT_volume,zoom_in))
,calendar);
var first_week = cljs.core.take_while.call(null,((function (session_idx__GT_volume,zoom_in,all_days_without_week_vol){
return (function (p1__30223_SHARP_){
return cljs.core.not_EQ_.call(null,tick.alpha.api.day_of_week.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__30223_SHARP_)),tick.alpha.api.SUNDAY);
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
return (function (p1__30224_SHARP_){
if(cljs.core.not_EQ_.call(null,(7),cljs.core.count.call(null,p1__30224_SHARP_))){
return p1__30224_SHARP_;
} else {
return add_week_vol.call(null,p1__30224_SHARP_);
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
return (function (p__30225){
var map__30226 = p__30225;
var map__30226__$1 = (((((!((map__30226 == null))))?(((((map__30226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30226):map__30226);
var date = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01");
var session_idx = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168));
var absent_QMARK_ = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"absent?","absent?",1101710978));
var week_volume = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"week-volume","week-volume",630206840));
var idx = cljs.core.get.call(null,map__30226__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
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
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"Calend\u00E1rio","Calend\u00E1rio",-343597592)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"Calend\u00E1rio",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo30234 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo30234 = (function (meta30235){
this.meta30235 = meta30235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo30234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30236,meta30235__$1){
var self__ = this;
var _30236__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo30234(meta30235__$1));
});

pr4.prototipo.t_pr4$prototipo30234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30236){
var self__ = this;
var _30236__$1 = this;
return self__.meta30235;
});

pr4.prototipo.t_pr4$prototipo30234.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo30234.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__28402__auto__,devcard_opts__28403__auto__){
var self__ = this;
var this__28402__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__28403__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__28421__auto__ = ((function (this__28402__auto____$1){
return (function (devcard_data,_){
var map__30237 = cljs.core.deref.call(null,devcard_data);
var map__30237__$1 = (((((!((map__30237 == null))))?(((((map__30237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30237):map__30237);
var hidden_QMARK_ = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-evenly"})], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"flexBasis": "100%"})], null),((cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))),(-1)))?pr4.prototipo.date_str.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null))),cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01"], null)))):[pr4.prototipo.date_str.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null))),cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01"], null))))," - ",pr4.prototipo.date_str.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null))),(cljs.core.second.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))) - (1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),"2020-01-01"], null))))].join(''))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "space-between"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)))),cljs.core.deref.call(null,pr4.prototipo.chart_zoom)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,pr4.prototipo.chart_zoom,cljs.core.inc);
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"color","color",1011675173),"secondary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$search], null),"-"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core._EQ_.call(null,(1),cljs.core.deref.call(null,pr4.prototipo.chart_zoom)),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,pr4.prototipo.chart_zoom,cljs.core.dec);
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"color","color",1011675173),"secondary"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$search], null),"+"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variant","variant",-424354234),"contained",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))),(-1)))?"default":"primary"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","toggle-multiple-calendar-selection","pr4.events/toggle-multiple-calendar-selection",-731597265)], null));
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null),"Selecionar intervalo"], null)], null)], null),((cljs.core._EQ_.call(null,cljs.core.reduce.call(null,cljs.core._,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)))),(-1)))?(function (){var slider_value = cljs.core.first.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"margin": "10px -12px"}),new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (slider_value,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(slider_value - (1)),slider_value.call(null)], null)], null));
});})(slider_value,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (slider_value,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(slider_value + (1)),((2) + slider_value)], null)], null));
});})(slider_value,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)))) - (1)),new cljs.core.Keyword(null,"value","value",305978217),slider_value,new cljs.core.Keyword(null,"marks","marks",-1844991497),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),pr4.util.days_difference.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","today","pr4.app-state/today",595935666)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","first-calendar-day","pr4.app-state/first-calendar-day",-862392952)], null)))),new cljs.core.Keyword(null,"label","label",1718410804),"Hoje"], null)], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (slider_value,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30229_SHARP_,p2__30228_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__30228_SHARP_,(p2__30228_SHARP_ + (1))], null)], null));
});})(slider_value,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null)], null)], null);
})():(function (){var vec__30239 = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar-selection","pr4.app-state/calendar-selection",56221146)], null)));
var slider_value_left = cljs.core.nth.call(null,vec__30239,(0),null);
var slider_value_right = cljs.core.nth.call(null,vec__30239,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pr4.prototipo.side_arrows,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),({"margin": "10px -12px"}),new cljs.core.Keyword(null,"onClickLeft","onClickLeft",860241512),((function (vec__30239,slider_value_left,slider_value_right,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(slider_value_left - (1)),(slider_value_right - (1))], null)], null));
});})(vec__30239,slider_value_left,slider_value_right,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"onClickRight","onClickRight",1634620801),((function (vec__30239,slider_value_left,slider_value_right,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(slider_value_left + (1)),(slider_value_right + (1))], null)], null));
});})(vec__30239,slider_value_left,slider_value_right,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$slider,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.count.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)))),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slider_value_left,slider_value_right], null),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (vec__30239,slider_value_left,slider_value_right,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30231_SHARP_,p2__30230_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","reset-calendar-selection","pr4.events/reset-calendar-selection",-1074855052),p2__30230_SHARP_], null));
});})(vec__30239,slider_value_left,slider_value_right,map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null)], null)], null);
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Pr\u00F3xima sess\u00E3o do aluno: ",(new cljs.core.Keyword(null,"session-idx","session-idx",1467570168).cljs$core$IFn$_invoke$arity$1(pr4.util.first_filter.call(null,((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30232_SHARP_){
return tick.alpha.api._GT__EQ_.call(null,tick.alpha.api.date.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__30232_SHARP_)),tick.alpha.api.date.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","today","pr4.app-state/today",595935666)], null)))));
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
,cljs.core.filter.call(null,new cljs.core.Keyword(null,"session-idx","session-idx",1467570168),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null)))))) + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#calendar-chart","div#calendar-chart",874696928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"height": (200)})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null))),new cljs.core.Keyword(null,"hidden","hidden",-312506092),true,new cljs.core.Keyword(null,"onError","onError",1669791984),pr4.prototipo.draw_chart.call(null,"calendar-chart",pr4.prototipo.calendar_chart_data.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","calendar","pr4.app-state/calendar",71914441)], null))),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","sessions","pr4.app-state/sessions",-572941137)], null)))),0.93,pr4.prototipo.calendar_chart_options)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"display": "flex", "justifyContent": "center"})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","move-calendar-sel-left","pr4.events/move-calendar-sel-left",-180215541)], null));
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_left], null),"Mover"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","move-calendar-sel-right","pr4.events/move-calendar-sel-right",-1182109671)], null));
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null),"Mover",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$chevron_right], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$form_control_label,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$checkbox,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.app-state","absent?","pr4.app-state/absent?",1153211167)], null))),new cljs.core.Keyword(null,"onChange","onChange",-312891301),((function (map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (p1__30233_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("pr4.events","toggled-absent","pr4.events/toggled-absent",-1111391280),p1__30233_SHARP_.target.checked], null));
});})(map__30237,map__30237__$1,hidden_QMARK_,this__28402__auto____$1))
], null)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Meu aluno faltou nesse dia"], null)], null)], null)], null)], null);
});})(this__28402__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__28421__auto__)){
return ((function (v__28421__auto__,this__28402__auto____$1){
return (function (data_atom__28422__auto__,owner__28423__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__28421__auto__,data_atom__28422__auto__,owner__28423__auto__], null));
});
;})(v__28421__auto__,this__28402__auto____$1))
} else {
return reagent.core.as_element.call(null,v__28421__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__28403__auto__))));
});

pr4.prototipo.t_pr4$prototipo30234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30235","meta30235",-882399473,null)], null);
});

pr4.prototipo.t_pr4$prototipo30234.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo30234.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo30234";

pr4.prototipo.t_pr4$prototipo30234.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo30234");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo30234.
 */
pr4.prototipo.__GT_t_pr4$prototipo30234 = (function pr4$prototipo$__GT_t_pr4$prototipo30234(meta30235){
return (new pr4.prototipo.t_pr4$prototipo30234(meta30235));
});

}

return (new pr4.prototipo.t_pr4$prototipo30234(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pr4.prototipo","pr4.prototipo",-2139251796),new cljs.core.Keyword(null,"por-que-periodizar","por-que-periodizar",924709767)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"por-que-periodizar",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof pr4 !== 'undefined') && (typeof pr4.prototipo !== 'undefined') && (typeof pr4.prototipo.t_pr4$prototipo30242 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
pr4.prototipo.t_pr4$prototipo30242 = (function (meta30243){
this.meta30243 = meta30243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
pr4.prototipo.t_pr4$prototipo30242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30244,meta30243__$1){
var self__ = this;
var _30244__$1 = this;
return (new pr4.prototipo.t_pr4$prototipo30242(meta30243__$1));
});

pr4.prototipo.t_pr4$prototipo30242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30244){
var self__ = this;
var _30244__$1 = this;
return self__.meta30243;
});

pr4.prototipo.t_pr4$prototipo30242.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL;

pr4.prototipo.t_pr4$prototipo30242.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__28402__auto__,devcard_opts__28403__auto__){
var self__ = this;
var this__28402__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__28403__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__28421__auto__ = ((function (this__28402__auto____$1){
return (function (devcard_data,_){
var map__30245 = cljs.core.deref.call(null,devcard_data);
var map__30245__$1 = (((((!((map__30245 == null))))?(((((map__30245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30245):map__30245);
var hidden_QMARK_ = cljs.core.get.call(null,map__30245__$1,new cljs.core.Keyword(null,"hidden?","hidden?",1339691380));
cljs.core.swap_BANG_.call(null,pr4.prototipo.devcards_hidden,cljs.core.conj,hidden_QMARK_);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-expander","div.card-expander",969295648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__30245,map__30245__$1,hidden_QMARK_,this__28402__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,hidden_QMARK_,cljs.core.not);
});})(map__30245,map__30245__$1,hidden_QMARK_,this__28402__auto____$1))
,new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "padding": "20px 0"})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"textAlign": "center", "margin": "20px 0 10px 0"})], null),"Por que periodizar?"], null),(cljs.core.truth_(cljs.core.deref.call(null,hidden_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_more,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "border-radius": "7px"})], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),pr4.prototipo.global$module$expand_less,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),({"padding": "0 10px", "border": "1px solid lightgray", "border-radius": "7px"})], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-container","div.card-container",-901577759),(function (){var p_style = ({"textIndent": "30px"});
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.component-container","div.component-container",-642182457),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),cljs.core.deref.call(null,hidden_QMARK_)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"A periodiza\u00E7\u00E3o surge como uma forma de facilitar e tornar mais eficaz a organiza\u00E7\u00E3o de um programa de treinamento, adequando cada fase e suas vari\u00E1veis, para alcan\u00E7ar os objetivos do indiv\u00EDduo, seja ele um atleta ou n\u00E3o. Esse sistema se ajusta \u00E0 necessidade do treinamento e de suas vari\u00E1veis, potencializando o resultado. Por conseguinte, melhores resultados s\u00E3o obtidos devido \u00E0 organiza\u00E7\u00E3o da variedade de m\u00E9todos existentes, pela implementa\u00E7\u00E3o estrat\u00E9gica das fases e das cargas espec\u00EDficas, causando altern\u00E2ncia nos est\u00EDmulos. Um exemplo pr\u00E1tico \u00E9 a estabiliza\u00E7\u00E3o dos processos hipertr\u00F3ficos observados ap\u00F3s quatro a cinco meses de treinamento quando s\u00E3o utilizadas cargas fixas, tr\u00EAs s\u00E9ries de 10 repeti\u00E7\u00F5es m\u00E1ximas (RM) durante todo o per\u00EDodo. Na periodiza\u00E7\u00E3o, o aluno iniciante de academia pode ser submetido a uma carga de hipertrofia por quatro semanas, 3 s\u00E9ries de 12-14RM, seguido de mais quatro semanas com outra carga de hipertrofia em outra intensidade, por exemplo, 3 s\u00E9ries de 8-10RM. Em suma, o praticante treinar\u00E1 para atingir seus objetivos, por\u00E9m com cargas variadas durante o seu ciclo semestral ou anual, sem esquecer que os ciclos (tempo em que a carga ser\u00E1 realizada) devem ser respeitados. Enfim, periodizar n\u00E3o se trata apenas de modificar as vari\u00E1veis do treinamento de maneira aleat\u00F3ria, mas sim de respeitar as modifica\u00E7\u00F5es de acordo com os ciclos programados."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Vale ressaltar que a periodiza\u00E7\u00E3o n\u00E3o \u00E9 um conceito r\u00EDgido, podendo ser aplicado \u00E0s mais variadas popula\u00E7\u00F5es, como atletas de diversas modalidades, indiv\u00EDduos ativos e/ou sedent\u00E1rios, desde que sejam considerados os diferentes compromissos pessoais e profissionais. No caso dos praticantes de treinamento de for\u00E7a em academias e alunos de treinamento personalizado, os objetivos podem ser: ganhos de aptid\u00E3o f\u00EDsica voltada \u00E0 sa\u00FAde, emagrecimento, aumento de for\u00E7a, resist\u00EAncia, flexibilidade, aumento da massa magra, entre outros."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Na compara\u00E7\u00E3o entre programas periodizados e n\u00E3o periodizados, foi demonstrada a superioridade do treinamento periodizado no aumento de for\u00E7a muscular. De fato, estudos que compararam treinamentos de for\u00E7a periodizados com n\u00E3o periodizados evidenciaram que a periodiza\u00E7\u00E3o foi mais eficiente em promover altera\u00E7\u00F5es positivas nos componentes da composi\u00E7\u00E3o corporal e da for\u00E7a m\u00E1xima. Programas n\u00E3o periodizados com cargas fixas tamb\u00E9m promovem altera\u00E7\u00F5es positivas na composi\u00E7\u00E3o corporal e na for\u00E7a, por\u00E9m, por per\u00EDodos limitados, at\u00E9 quatro a cinco meses. Desse modo, periodizar auxilia no processo de melhora das capacidades funcionais por per\u00EDodos superiores a seis meses."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Os programas de treinamento de for\u00E7a periodizados com varia\u00E7\u00E3o da intensidade e per\u00EDodos ativos de descanso podem atenuar a estabiliza\u00E7\u00E3o dos resultados no desempenho, diminuindo a probabilidade de sobretreinamento e proporcionando maiores aumentos na for\u00E7a e na pot\u00EAncia."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),"Os objetivos da periodiza\u00E7\u00E3o incluem maximizar o princ\u00EDpio da sobrecarga e garantir uma melhor rela\u00E7\u00E3o entre estresse e recupera\u00E7\u00E3o (heterocronismo). O princ\u00EDpio da sobrecarga pode ser descrito pelo processo de aplica\u00E7\u00E3o de cargas \u00E0s quais o sistema neuromuscular n\u00E3o est\u00E1 adaptado. Quando maiores demandas s\u00E3o impostas ao sistema neuromuscular, ocorrem adapta\u00E7\u00F5es que resultam em n\u00EDveis aumentados de for\u00E7a. As vari\u00E1veis do treinamento que podem ser articuladas para aperfei\u00E7oar o programa s\u00E3o: n\u00FAmero de s\u00E9ries realizadas em cada exerc\u00EDcio, n\u00FAmero de repeti\u00E7\u00F5es por s\u00E9rie, exerc\u00EDcios realizados, n\u00FAmero de exerc\u00EDcios realizados a cada sess\u00E3o, per\u00EDodos de descanso entre as s\u00E9ries e exerc\u00EDcios, carga utilizada a cada s\u00E9rie, tipo e velocidade da a\u00E7\u00E3o muscular utilizada (conc\u00EAntrica, exc\u00EAntrica, isom\u00E9trica), n\u00FAmero de sess\u00F5es de treinamento realizadas por dia e por semana. Conforme comentado anteriormente, o treinamento de for\u00E7a em academias tamb\u00E9m requer a organiza\u00E7\u00E3o em ciclos, nos quais as suas vari\u00E1veis s\u00E3o sistematizadas."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),p_style], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://books.google.com.br/books?id=r2aJDAAAQBAJ"], null),"Prestes, Jonato, et al. \"Prescri\u00E7\u00E3o e periodiza\u00E7\u00E3o do treinamento de for\u00E7a em academias.\" (2010)."], null)], null)], null);
})()], null)], null);
});})(this__28402__auto____$1))
;
if(cljs.core.fn_QMARK_.call(null,v__28421__auto__)){
return ((function (v__28421__auto__,this__28402__auto____$1){
return (function (data_atom__28422__auto__,owner__28423__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__28421__auto__,data_atom__28422__auto__,owner__28423__auto__], null));
});
;})(v__28421__auto__,this__28402__auto____$1))
} else {
return reagent.core.as_element.call(null,v__28421__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__28403__auto__))));
});

pr4.prototipo.t_pr4$prototipo30242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta30243","meta30243",122110547,null)], null);
});

pr4.prototipo.t_pr4$prototipo30242.cljs$lang$type = true;

pr4.prototipo.t_pr4$prototipo30242.cljs$lang$ctorStr = "pr4.prototipo/t_pr4$prototipo30242";

pr4.prototipo.t_pr4$prototipo30242.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"pr4.prototipo/t_pr4$prototipo30242");
});

/**
 * Positional factory function for pr4.prototipo/t_pr4$prototipo30242.
 */
pr4.prototipo.__GT_t_pr4$prototipo30242 = (function pr4$prototipo$__GT_t_pr4$prototipo30242(meta30243){
return (new pr4.prototipo.t_pr4$prototipo30242(meta30243));
});

}

return (new pr4.prototipo.t_pr4$prototipo30242(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden?","hidden?",1339691380),reagent.core.atom.call(null,false)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"frame","frame",-1711082588),true,new cljs.core.Keyword(null,"heading","heading",-1312171873),false,new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
