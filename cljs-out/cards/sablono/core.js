// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23765__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23762 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23763 = cljs.core.seq.call(null,vec__23762);
var first__23764 = cljs.core.first.call(null,seq__23763);
var seq__23763__$1 = cljs.core.next.call(null,seq__23763);
var tag = first__23764;
var body = seq__23763__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23766__i = 0, G__23766__a = new Array(arguments.length -  0);
while (G__23766__i < G__23766__a.length) {G__23766__a[G__23766__i] = arguments[G__23766__i + 0]; ++G__23766__i;}
  args = new cljs.core.IndexedSeq(G__23766__a,0,null);
} 
return G__23765__delegate.call(this,args);};
G__23765.cljs$lang$maxFixedArity = 0;
G__23765.cljs$lang$applyTo = (function (arglist__23767){
var args = cljs.core.seq(arglist__23767);
return G__23765__delegate(args);
});
G__23765.cljs$core$IFn$_invoke$arity$variadic = G__23765__delegate;
return G__23765;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__23768(s__23769){
return (new cljs.core.LazySeq(null,(function (){
var s__23769__$1 = s__23769;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23769__$1);
if(temp__5735__auto__){
var s__23769__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23769__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23769__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23771 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23770 = (0);
while(true){
if((i__23770 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__23770);
cljs.core.chunk_append.call(null,b__23771,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23772 = (i__23770 + (1));
i__23770 = G__23772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23771),sablono$core$update_arglists_$_iter__23768.call(null,cljs.core.chunk_rest.call(null,s__23769__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23771),null);
}
} else {
var args = cljs.core.first.call(null,s__23769__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23768.call(null,cljs.core.rest.call(null,s__23769__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23778 = arguments.length;
var i__4731__auto___23779 = (0);
while(true){
if((i__4731__auto___23779 < len__4730__auto___23778)){
args__4736__auto__.push((arguments[i__4731__auto___23779]));

var G__23780 = (i__4731__auto___23779 + (1));
i__4731__auto___23779 = G__23780;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__23774(s__23775){
return (new cljs.core.LazySeq(null,(function (){
var s__23775__$1 = s__23775;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23775__$1);
if(temp__5735__auto__){
var s__23775__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23775__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23775__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23777 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23776 = (0);
while(true){
if((i__23776 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__23776);
cljs.core.chunk_append.call(null,b__23777,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23781 = (i__23776 + (1));
i__23776 = G__23781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23777),sablono$core$iter__23774.call(null,cljs.core.chunk_rest.call(null,s__23775__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23777),null);
}
} else {
var style = cljs.core.first.call(null,s__23775__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23774.call(null,cljs.core.rest.call(null,s__23775__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23773){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23773));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23782 = (function sablono$core$link_to23782(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23785 = arguments.length;
var i__4731__auto___23786 = (0);
while(true){
if((i__4731__auto___23786 < len__4730__auto___23785)){
args__4736__auto__.push((arguments[i__4731__auto___23786]));

var G__23787 = (i__4731__auto___23786 + (1));
i__4731__auto___23786 = G__23787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23782.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to23782.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23782.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23782.cljs$lang$applyTo = (function (seq23783){
var G__23784 = cljs.core.first.call(null,seq23783);
var seq23783__$1 = cljs.core.next.call(null,seq23783);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23784,seq23783__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23782);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23788 = (function sablono$core$mail_to23788(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23795 = arguments.length;
var i__4731__auto___23796 = (0);
while(true){
if((i__4731__auto___23796 < len__4730__auto___23795)){
args__4736__auto__.push((arguments[i__4731__auto___23796]));

var G__23797 = (i__4731__auto___23796 + (1));
i__4731__auto___23796 = G__23797;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23788.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to23788.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23791){
var vec__23792 = p__23791;
var content = cljs.core.nth.call(null,vec__23792,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23788.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23788.cljs$lang$applyTo = (function (seq23789){
var G__23790 = cljs.core.first.call(null,seq23789);
var seq23789__$1 = cljs.core.next.call(null,seq23789);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23790,seq23789__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23788);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23798 = (function sablono$core$unordered_list23798(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list23798_$_iter__23799(s__23800){
return (new cljs.core.LazySeq(null,(function (){
var s__23800__$1 = s__23800;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23800__$1);
if(temp__5735__auto__){
var s__23800__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23800__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23800__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23802 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23801 = (0);
while(true){
if((i__23801 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23801);
cljs.core.chunk_append.call(null,b__23802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23803 = (i__23801 + (1));
i__23801 = G__23803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23802),sablono$core$unordered_list23798_$_iter__23799.call(null,cljs.core.chunk_rest.call(null,s__23800__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23802),null);
}
} else {
var x = cljs.core.first.call(null,s__23800__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23798_$_iter__23799.call(null,cljs.core.rest.call(null,s__23800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23798);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23804 = (function sablono$core$ordered_list23804(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list23804_$_iter__23805(s__23806){
return (new cljs.core.LazySeq(null,(function (){
var s__23806__$1 = s__23806;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23806__$1);
if(temp__5735__auto__){
var s__23806__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23806__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23806__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23808 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23807 = (0);
while(true){
if((i__23807 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23807);
cljs.core.chunk_append.call(null,b__23808,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23809 = (i__23807 + (1));
i__23807 = G__23809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23808),sablono$core$ordered_list23804_$_iter__23805.call(null,cljs.core.chunk_rest.call(null,s__23806__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23808),null);
}
} else {
var x = cljs.core.first.call(null,s__23806__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23804_$_iter__23805.call(null,cljs.core.rest.call(null,s__23806__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23804);
/**
 * Create an image element.
 */
sablono.core.image23810 = (function sablono$core$image23810(var_args){
var G__23812 = arguments.length;
switch (G__23812) {
case 1:
return sablono.core.image23810.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23810.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23810.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23810.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23810.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23810);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23814_SHARP_,p2__23815_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23814_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23815_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23816_SHARP_,p2__23817_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23816_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23817_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__23819 = arguments.length;
switch (G__23819) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field23821 = (function sablono$core$color_field23821(var_args){
var G__23823 = arguments.length;
switch (G__23823) {
case 1:
return sablono.core.color_field23821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23821.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23752__auto__);
});

sablono.core.color_field23821.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.color_field23821.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23821);

/**
 * Creates a date input field.
 */
sablono.core.date_field23824 = (function sablono$core$date_field23824(var_args){
var G__23826 = arguments.length;
switch (G__23826) {
case 1:
return sablono.core.date_field23824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23824.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23752__auto__);
});

sablono.core.date_field23824.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.date_field23824.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23824);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23827 = (function sablono$core$datetime_field23827(var_args){
var G__23829 = arguments.length;
switch (G__23829) {
case 1:
return sablono.core.datetime_field23827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23827.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23752__auto__);
});

sablono.core.datetime_field23827.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.datetime_field23827.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23827);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23830 = (function sablono$core$datetime_local_field23830(var_args){
var G__23832 = arguments.length;
switch (G__23832) {
case 1:
return sablono.core.datetime_local_field23830.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23830.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23830.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23752__auto__);
});

sablono.core.datetime_local_field23830.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.datetime_local_field23830.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23830);

/**
 * Creates a email input field.
 */
sablono.core.email_field23833 = (function sablono$core$email_field23833(var_args){
var G__23835 = arguments.length;
switch (G__23835) {
case 1:
return sablono.core.email_field23833.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23833.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23833.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23752__auto__);
});

sablono.core.email_field23833.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.email_field23833.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23833);

/**
 * Creates a file input field.
 */
sablono.core.file_field23836 = (function sablono$core$file_field23836(var_args){
var G__23838 = arguments.length;
switch (G__23838) {
case 1:
return sablono.core.file_field23836.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23836.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23836.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23752__auto__);
});

sablono.core.file_field23836.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.file_field23836.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23836);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23839 = (function sablono$core$hidden_field23839(var_args){
var G__23841 = arguments.length;
switch (G__23841) {
case 1:
return sablono.core.hidden_field23839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23839.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23752__auto__);
});

sablono.core.hidden_field23839.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.hidden_field23839.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23839);

/**
 * Creates a month input field.
 */
sablono.core.month_field23842 = (function sablono$core$month_field23842(var_args){
var G__23844 = arguments.length;
switch (G__23844) {
case 1:
return sablono.core.month_field23842.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23842.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23842.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23752__auto__);
});

sablono.core.month_field23842.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.month_field23842.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23842);

/**
 * Creates a number input field.
 */
sablono.core.number_field23845 = (function sablono$core$number_field23845(var_args){
var G__23847 = arguments.length;
switch (G__23847) {
case 1:
return sablono.core.number_field23845.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23845.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23845.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23752__auto__);
});

sablono.core.number_field23845.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.number_field23845.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23845);

/**
 * Creates a password input field.
 */
sablono.core.password_field23848 = (function sablono$core$password_field23848(var_args){
var G__23850 = arguments.length;
switch (G__23850) {
case 1:
return sablono.core.password_field23848.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23848.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23848.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23752__auto__);
});

sablono.core.password_field23848.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.password_field23848.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23848);

/**
 * Creates a range input field.
 */
sablono.core.range_field23851 = (function sablono$core$range_field23851(var_args){
var G__23853 = arguments.length;
switch (G__23853) {
case 1:
return sablono.core.range_field23851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23851.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23752__auto__);
});

sablono.core.range_field23851.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.range_field23851.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23851);

/**
 * Creates a search input field.
 */
sablono.core.search_field23854 = (function sablono$core$search_field23854(var_args){
var G__23856 = arguments.length;
switch (G__23856) {
case 1:
return sablono.core.search_field23854.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23854.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23854.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23752__auto__);
});

sablono.core.search_field23854.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.search_field23854.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23854);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23857 = (function sablono$core$tel_field23857(var_args){
var G__23859 = arguments.length;
switch (G__23859) {
case 1:
return sablono.core.tel_field23857.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23857.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23857.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23752__auto__);
});

sablono.core.tel_field23857.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.tel_field23857.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23857);

/**
 * Creates a text input field.
 */
sablono.core.text_field23860 = (function sablono$core$text_field23860(var_args){
var G__23862 = arguments.length;
switch (G__23862) {
case 1:
return sablono.core.text_field23860.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field23860.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field23860.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23752__auto__);
});

sablono.core.text_field23860.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.text_field23860.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field23860);

/**
 * Creates a time input field.
 */
sablono.core.time_field23863 = (function sablono$core$time_field23863(var_args){
var G__23865 = arguments.length;
switch (G__23865) {
case 1:
return sablono.core.time_field23863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field23863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field23863.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23752__auto__);
});

sablono.core.time_field23863.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.time_field23863.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field23863);

/**
 * Creates a url input field.
 */
sablono.core.url_field23866 = (function sablono$core$url_field23866(var_args){
var G__23868 = arguments.length;
switch (G__23868) {
case 1:
return sablono.core.url_field23866.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field23866.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field23866.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23752__auto__);
});

sablono.core.url_field23866.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.url_field23866.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field23866);

/**
 * Creates a week input field.
 */
sablono.core.week_field23869 = (function sablono$core$week_field23869(var_args){
var G__23871 = arguments.length;
switch (G__23871) {
case 1:
return sablono.core.week_field23869.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field23869.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field23869.cljs$core$IFn$_invoke$arity$1 = (function (name__23752__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23752__auto__);
});

sablono.core.week_field23869.cljs$core$IFn$_invoke$arity$2 = (function (name__23752__auto__,value__23753__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23752__auto__,value__23753__auto__);
});

sablono.core.week_field23869.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field23869);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box23889 = (function sablono$core$check_box23889(var_args){
var G__23891 = arguments.length;
switch (G__23891) {
case 1:
return sablono.core.check_box23889.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box23889.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box23889.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box23889.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box23889.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23889.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box23889.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box23889);
/**
 * Creates a radio button.
 */
sablono.core.radio_button23893 = (function sablono$core$radio_button23893(var_args){
var G__23895 = arguments.length;
switch (G__23895) {
case 1:
return sablono.core.radio_button23893.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button23893.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button23893.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button23893.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button23893.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23893.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button23893.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button23893);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options23897 = (function sablono$core$select_options23897(coll){
var iter__4523__auto__ = (function sablono$core$select_options23897_$_iter__23898(s__23899){
return (new cljs.core.LazySeq(null,(function (){
var s__23899__$1 = s__23899;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__23899__$1);
if(temp__5735__auto__){
var s__23899__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23899__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23899__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23901 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23900 = (0);
while(true){
if((i__23900 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23900);
cljs.core.chunk_append.call(null,b__23901,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23902 = x;
var text = cljs.core.nth.call(null,vec__23902,(0),null);
var val = cljs.core.nth.call(null,vec__23902,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23902,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23897.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__23908 = (i__23900 + (1));
i__23900 = G__23908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23901),sablono$core$select_options23897_$_iter__23898.call(null,cljs.core.chunk_rest.call(null,s__23899__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23901),null);
}
} else {
var x = cljs.core.first.call(null,s__23899__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__23905 = x;
var text = cljs.core.nth.call(null,vec__23905,(0),null);
var val = cljs.core.nth.call(null,vec__23905,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__23905,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options23897.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options23897_$_iter__23898.call(null,cljs.core.rest.call(null,s__23899__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options23897);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down23909 = (function sablono$core$drop_down23909(var_args){
var G__23911 = arguments.length;
switch (G__23911) {
case 2:
return sablono.core.drop_down23909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down23909.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down23909.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down23909.call(null,name,options,null);
});

sablono.core.drop_down23909.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down23909.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down23909);
/**
 * Creates a text area element.
 */
sablono.core.text_area23913 = (function sablono$core$text_area23913(var_args){
var G__23915 = arguments.length;
switch (G__23915) {
case 1:
return sablono.core.text_area23913.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area23913.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area23913.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area23913.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area23913.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area23913);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label23917 = (function sablono$core$label23917(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label23917);
/**
 * Creates a submit button.
 */
sablono.core.submit_button23918 = (function sablono$core$submit_button23918(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button23918);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button23919 = (function sablono$core$reset_button23919(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button23919);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to23920 = (function sablono$core$form_to23920(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23927 = arguments.length;
var i__4731__auto___23928 = (0);
while(true){
if((i__4731__auto___23928 < len__4730__auto___23927)){
args__4736__auto__.push((arguments[i__4731__auto___23928]));

var G__23929 = (i__4731__auto___23928 + (1));
i__4731__auto___23928 = G__23929;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to23920.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to23920.cljs$core$IFn$_invoke$arity$variadic = (function (p__23923,body){
var vec__23924 = p__23923;
var method = cljs.core.nth.call(null,vec__23924,(0),null);
var action = cljs.core.nth.call(null,vec__23924,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to23920.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to23920.cljs$lang$applyTo = (function (seq23921){
var G__23922 = cljs.core.first.call(null,seq23921);
var seq23921__$1 = cljs.core.next.call(null,seq23921);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23922,seq23921__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to23920);

//# sourceMappingURL=core.js.map
