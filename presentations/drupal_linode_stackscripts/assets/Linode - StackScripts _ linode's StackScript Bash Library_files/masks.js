/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
var KT_focusedEl=null;
KT_validateSingle=function(_8fc,_8fd){
var _8fe=_8fc.charCodeAt(0);
switch(_8fd){
case "9":
if(_8fe<58&&_8fe>47){
return true;
}
break;
case "A":
if((_8fe<91&&_8fe>64)||(_8fe<123&&_8fe>96)){
return true;
}
break;
case "X":
if((_8fe<91&&_8fe>64)||(_8fe<123&&_8fe>96)||(_8fe<58&&_8fe>47)){
return true;
}
break;
case "?":
return true;
break;
default:
return true;
break;
}
};
KT_maskDefaultValue=function(_8ff){
switch(_8ff){
case "9":
return "0";
break;
case "A":
return "a";
break;
case "X":
return "0";
break;
case "?":
return "0";
break;
default:
return "0";
break;
}
};
KT_isSpecialChar=function(_900){
if(_900=="9"||_900=="A"||_900=="X"||_900=="?"){
return true;
}else{
return false;
}
};
mask_onValueChanged=function(){
if((typeof window.getSelection=="undefined"&&typeof document.selection=="undefined")){
return;
}
if(KT_focusedEl==null||KT_focusedEl.mask==null||KT_focusedEl.mask==""){
return;
}
var mask=KT_focusedEl.mask;
var val=KT_focusedEl.value;
var i=0;
var _904=false;
if(val==KT_focusedEl.oldText){
return;
}
if(val.length>mask.length){
val=val.substr(0,mask.length);
_904=true;
}
for(;i<mask.length;i++){
if(val.charCodeAt(i).toString()!="NaN"){
if(KT_isSpecialChar(mask.charAt(i))){
if(KT_validateSingle(val.charAt(i),mask.charAt(i))){
continue;
}else{
val=KT_focusedEl.oldText;
i=mask.length;
break;
}
}else{
if(val.charAt(i)!=mask.charAt(i)){
if(i==val.length-1){
var _905=val.substr(val.length-1,val.length);
val=val.substr(0,val.length-1)+mask.charAt(i)+_905;
_904=true;
continue;
}else{
val=KT_focusedEl.oldText;
i=mask.length;
}
break;
}
}
}else{
if(val.length<KT_focusedEl.oldText.length){
break;
}
for(;i<mask.length;i++){
if(!KT_isSpecialChar(mask.charAt(i))){
val+=mask.charAt(i);
_904=true;
}else{
break;
}
}
break;
}
}
if(val.length>mask.length){
val=val.substr(0,mask.length);
_904=true;
}
if(KT_focusedEl.value!=val){
KT_focusedEl.value=val;
}
KT_focusedEl.oldText=val;
if(_904){
}
};
mask_parseFirstTime=function(_906,mask){
var _908="";
var _909="";
cond=1;
imask=0;
ival=0;
cnt=0;
while(cond==1){
cond=1;
if(!KT_isSpecialChar(mask.charAt(imask))){
if(_906.charCodeAt(ival).toString()!="NaN"){
if(mask.charAt(imask)==_906.charAt(ival)){
imask++;
ival++;
}else{
_906=_906.substr(0,ival)+mask.charAt(imask)+_906.substr(ival,_906.length);
imask=0;
ival=0;
cond=1;
}
}else{
_906+=KT_maskDefaultValue(mask.charAt(imask));
}
}else{
imask++;
ival++;
}
if(imask>=mask.length||ival>=_906.length){
cond=0;
}
}
for(i=0;i<mask.length;i++){
if(KT_isSpecialChar(mask.charAt(i))){
_908+=mask.charAt(i);
if(_906.charCodeAt(i).toString()!="NaN"){
_909+=_906.charAt(i);
}else{
_909+=KT_maskDefaultValue(mask.charAt(i));
}
}
}
oldvalue=_906;
_906=_909;
var _90a="";
for(i=0;i<_908.length;i++){
if(!KT_validateSingle(_906.charAt(i),_908.charAt(i))){
_90a+=KT_maskDefaultValue(_908.charAt(i));
}else{
_90a+=_906.charAt(i);
}
}
var _90b="";
var j=0;
for(i=0;i<mask.length;i++){
if(KT_isSpecialChar(mask.charAt(i))){
_90b+=_90a.charAt(j++);
}else{
_90b+=mask.charAt(i);
}
}
return _90b;
};
mask_onSetFocus=function(obj,mask){
if((typeof window.getSelection=="undefined"&&typeof document.selection=="undefined")){
return;
}
if(typeof obj.mask=="undefined"){
ret="";
if(obj.value!=""){
ret=mask_parseFirstTime(obj.value,mask);
}
obj.value=ret;
obj.mask=mask;
}
KT_focusedEl=obj;
if(typeof KT_focusedEl.oldText=="undefined"){
KT_focusedEl.oldText=obj.value;
mask_onValueChanged();
}
};
mask_onKillFocus=function(){
if((typeof window.getSelection=="undefined"&&typeof document.selection=="undefined")){
return;
}
mask_onValueChanged();
KT_focusedEl=null;
};
