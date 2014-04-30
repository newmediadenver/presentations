/*ADOBE SYSTEMS INCORPORATED
Copyright 2007 Adobe Systems Incorporated
All Rights Reserved.

NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
terms of the Adobe license agreement accompanying it.  If you have received this file from a
source other than Adobe, then your use, modification, or distribution of it requires the prior
written permission of Adobe.*/
var _CF_error_messages=new Array();
var _CF_error_fields=new Object();
var _CF_FirstErrorField=null;
var _CF_submit_status=new Array();
_CF_signalLoad=function(){
_CF_loaded=1;
};
_CF_onError=function(_8ab,_8ac,_8ad,_8ae){
if(_CF_error_fields[_8ac]==null){
if(_CF_FirstErrorField==null){
_CF_FirstErrorField=_8ac;
}
_CF_error_exists=true;
_CF_error_fields[_8ac]=_8ae;
_CF_error_messages[_CF_error_messages.length]=_8ae;
}
};
_CF_onErrorAlert=function(_8af){
var _8b0="";
for(var i=0;i<_8af.length;i++){
_8b0+=_8af[i]+"\n";
}
alert(_8b0);
return false;
};
updateHiddenValue=function(val,form,name){
if(form==null||form==""){
form=0;
}
if(document.forms[form]==null||document.forms[form][name]==null){
return;
}
document.forms[form][name].value=val;
};
_CF_hasValue=function(obj,_8b6,_8b7){
if(_8b6=="TEXT"||_8b6=="FILE"||_8b6=="PASSWORD"||_8b6=="CFTEXTAREA"||_8b6=="TEXTAREA"||_8b6=="CFTEXTINPUT"||_8b6=="DATEFIELD"){
if(obj.value.length==0){
return false;
}else{
if(_8b7){
str=obj.value.replace(/^\s+/,"").replace(/\s+$/,"");
if(str.length==0){
return false;
}
}
}
return true;
}else{
if(_8b6=="SELECT"){
for(i=0;i<obj.length;i++){
if(obj.options[i].selected&&obj.options[i].value.length>0){
return true;
}
}
return false;
}else{
if(_8b6=="SINGLE_VALUE_RADIO"||_8b6=="SINGLE_VALUE_CHECKBOX"){
if(obj.checked){
return true;
}else{
return false;
}
}else{
if(_8b6=="RADIO"||_8b6=="CHECKBOX"){
if(obj.length==undefined&&obj.checked){
return true;
}else{
for(i=0;i<obj.length;i++){
if(obj[i].checked){
return true;
}
}
}
return false;
}else{
if(_8b6=="CFTREE"){
if(obj["value"].length>0){
return true;
}else{
return false;
}
}else{
if(_8b6=="RICHTEXT"){
var _8b8=FCKeditorAPI.GetInstance(obj.id);
var val=_8b8.GetXHTML();
if(val.length==0){
return false;
}else{
if(_8b7){
str=val.replace(/^\s+/,"").replace(/\s+$/,"");
if(str.length==0){
return false;
}
}
return true;
}
}else{
return true;
}
}
}
}
}
}
};
_CF_checkdate=function(_8ba,_8bb){
_8ba=_8ba.replace(/^\s+/,"").replace(/\s+$/,"");
_8ba=_8ba=_8ba.replace(/{d \'/,"").replace(/'}/,"");
if(_8bb){
if(_8ba.length==0){
return false;
}
}else{
if(_8ba.length==0){
return true;
}
}
if(_8ba.length==0){
return true;
}
isplit=_8ba.indexOf("/");
splitchr="/";
if(isplit==-1){
isplit=_8ba.indexOf(".");
splitchr=".";
}
if(isplit==-1){
isplit=_8ba.indexOf("-");
splitchr="-";
}
if(isplit==-1||isplit==_8ba.length){
return false;
}
var _8bc=_8ba.substring(0,isplit);
if(_8bc.length==4){
sYear=_8ba.substring(0,isplit);
isplit=_8ba.indexOf(splitchr,isplit+1);
if(isplit==-1||(isplit+1)==_8ba.length){
return false;
}
sMonth=_8ba.substring((sYear.length+1),isplit);
sDay=_8ba.substring(isplit+1);
}else{
sMonth=_8ba.substring(0,isplit);
isplit=_8ba.indexOf(splitchr,isplit+1);
if(isplit==-1||(isplit+1)==_8ba.length){
return false;
}
sDay=_8ba.substring((sMonth.length+1),isplit);
sYear=_8ba.substring(isplit+1);
}
if((sDay.length==0)||(sMonth.length==0)||(sYear.length==0)){
return false;
}
if(!_CF_checkinteger(sMonth)){
return false;
}else{
if(!_CF_checkrange(sMonth,1,12)){
return false;
}else{
if(!_CF_checkinteger(sYear)){
return false;
}else{
if(sYear.length!=1&&sYear.length!=2&&sYear.length!=4){
return false;
}else{
if(!_CF_checkrange(sYear,0,9999)){
return false;
}else{
if(!_CF_checkinteger(sDay)){
return false;
}else{
if(!_CF_checkday(sYear,sMonth,sDay)){
return false;
}else{
return true;
}
}
}
}
}
}
}
};
_CF_checkeurodate=function(_8bd,_8be){
_8bd=_8bd.replace(/^\s+/,"").replace(/\s+$/,"");
_8bd=_8bd=_8bd.replace(/{d \'/,"").replace(/'}/,"");
if(_8be){
if(_8bd.length==0){
return false;
}
}else{
if(_8bd.length==0){
return true;
}
}
isplit=_8bd.indexOf("/");
splitchr="/";
if(isplit==-1){
isplit=_8bd.indexOf(".");
splitchr=".";
}
if(isplit==-1){
isplit=_8bd.indexOf("-");
splitchr="-";
}
if(isplit==-1||isplit==_8bd.length){
return false;
}
var _8bf=_8bd.substring(0,isplit);
if(_8bf.length==4){
sYear=_8bd.substring(0,isplit);
isplit=_8bd.indexOf(splitchr,isplit+1);
if(isplit==-1||(isplit+1)==_8bd.length){
return false;
}
sMonth=_8bd.substring((sYear.length+1),isplit);
sDay=_8bd.substring(isplit+1);
}else{
sDay=_8bd.substring(0,isplit);
isplit=_8bd.indexOf(splitchr,isplit+1);
if(isplit==-1||(isplit+1)==_8bd.length){
return false;
}
sMonth=_8bd.substring((sDay.length+1),isplit);
sYear=_8bd.substring(isplit+1);
}
if(!_CF_checkinteger(sMonth)){
return false;
}else{
if(!_CF_checkrange(sMonth,1,12)){
return false;
}else{
if(!_CF_checkinteger(sYear)){
return false;
}else{
if(!_CF_checkrange(sYear,0,null)){
return false;
}else{
if(!_CF_checkinteger(sDay)){
return false;
}else{
if(!_CF_checkday(sYear,sMonth,sDay)){
return false;
}else{
return true;
}
}
}
}
}
}
};
_CF_checkday=function(_8c0,_8c1,_8c2){
maxDay=31;
if(_8c1==4||_8c1==6||_8c1==9||_8c1==11){
maxDay=30;
}else{
if(_8c1==2){
if(_8c0%4>0){
maxDay=28;
}else{
if(_8c0%100==0&&_8c0%400>0){
maxDay=28;
}else{
maxDay=29;
}
}
}
}
return _CF_checkrange(_8c2,1,maxDay);
};
_CF_checkinteger=function(_8c3,_8c4){
_8c3=_8c3.replace(/^\s+/,"").replace(/\s+$/,"");
_8c3=_8c3.replace(/[$£¥€,~+]?/g,"");
if(_8c4){
if(_8c3.length==0){
return false;
}
}else{
if(_8c3.length==0){
return true;
}
}
var _8c5=".";
var _8c6=_8c3.indexOf(_8c5);
if(_8c6==-1){
return _CF_checknumber(_8c3);
}else{
return false;
}
};
_CF_numberrange=function(_8c7,_8c8,_8c9,_8ca){
if(_8ca){
if(_8c7.length==0){
return false;
}
}else{
if(_8c7.length==0){
return true;
}
}
if(_8c8!=null){
if(_8c7<_8c8){
return false;
}
}
if(_8c9!=null){
if(_8c7>_8c9){
return false;
}
}
return true;
};
_CF_checknumber=function(_8cb,_8cc){
var _8cd=" .+-0123456789";
var _8ce=" .0123456789";
var _8cf;
var _8d0=false;
var _8d1=false;
var _8d2=false;
_8cb=_8cb.replace(/^\s+/,"").replace(/\s+$/,"");
_8cb=_8cb.replace(/[$£¥€,~+]?/g,"");
if(_8cc){
if(_8cb.length==0){
return false;
}
}else{
if(_8cb.length==0){
return true;
}
}
_8cf=_8cd.indexOf(_8cb.charAt(0));
if(_8cf==1){
_8d0=true;
}else{
if(_8cf<1){
return false;
}
}
for(var i=1;i<_8cb.length;i++){
_8cf=_8ce.indexOf(_8cb.charAt(i));
if(_8cf<0){
return false;
}else{
if(_8cf==1){
if(_8d0){
return false;
}else{
_8d0=true;
}
}else{
if(_8cf==0){
if(_8d0||_8d2){
_8d1=true;
}
}else{
if(_8d1){
return false;
}else{
_8d2=true;
}
}
}
}
}
return true;
};
_CF_checkrange=function(_8d4,_8d5,_8d6,_8d7){
_8d4=_8d4.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8d7){
if(_8d4.length==0){
return false;
}
}else{
if(_8d4.length==0){
return true;
}
}
if(!_CF_checknumber(_8d4)){
return false;
}else{
return (_CF_numberrange((eval(_8d4)),_8d5,_8d6));
}
return true;
};
_CF_checktime=function(_8d8,_8d9){
_8d8=_8d8.replace(/^\s+/,"").replace(/\s+$/,"");
_8d8=_8d8.replace(/\s+:\s+/,":");
_8d8=_8d8=_8d8.replace(/{t \'/,"").replace(/'}/,"");
if(_8d9){
if(_8d8.length==0){
return false;
}
}else{
if(_8d8.length==0){
return true;
}
}
var _8da=_CF_checkregex(_8d8,/^((([0-1]?\d)|(2[0-3])):[0-5]?\d)?(:[0-5]?\d)? ?([AP]M|[AP]m|[ap]m|[ap]M)?$/,_8d9);
return _8da;
};
_CF_checkphone=function(_8db,_8dc){
_8db=_8db.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8dc){
if(_8db.length==0){
return false;
}
}else{
if(_8db.length==0){
return true;
}
}
if(_8db.length==0){
return true;
}
return _CF_checkregex(_8db,/^(((1))?[ ,\-,\.]?([\\(]?([1-9][0-9]{2})[\\)]?))?[ ,\-,\.]?([^0-1]){1}([0-9]){2}[ ,\-,\.]?([0-9]){4}(( )((x){0,1}([0-9]){1,5}){0,1})?$/,_8dc);
};
_CF_checkzip=function(_8dd,_8de){
_8dd=_8dd.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8de){
if(_8dd.length==0){
return false;
}
}else{
if(_8dd.length==0){
return true;
}
}
return _CF_checkregex(_8dd,/^([0-9]){5,5}$|(([0-9]){5,5}(-| ){1}([0-9]){4,4}$)/,_8de);
};
_CF_checkcreditcard=function(_8df,_8e0){
_8df=_8df.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8e0){
if(_8df.length==0){
return false;
}
}else{
if(_8df.length==0){
return true;
}
}
if(_8df.length==0){
return true;
}
var _8e1=" -";
var _8e2="";
var _8e3;
for(var i=0;i<_8df.length;i++){
_8e3=_8e1.indexOf(_8df.charAt(i));
if(_8e3<0){
_8e2+=_8df.substring(i,(i+1));
}
}
if(_8e2.length<13||_8e2.length>19){
return false;
}
if(_8e2.charAt(0)=="+"){
return false;
}
if(!_CF_checkinteger(_8e2)){
return false;
}
var _8e5=_8e2.length%2==1?false:true;
var _8e6=0;
var _8e7;
for(var i=0;i<_8e2.length;i++){
_8e7=eval(_8e2.charAt(i));
if(_8e5){
_8e7*=2;
_8e6+=(_8e7%10);
if((_8e7/10)>=1){
_8e6++;
}
_8e5=false;
}else{
_8e6+=_8e7;
_8e5=true;
}
}
return (_8e6%10)==0?true:false;
};
_CF_checkssn=function(_8e8,_8e9){
_8e8=_8e8.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8e9){
if(_8e8.length==0){
return false;
}
}else{
if(_8e8.length==0){
return true;
}
}
return _CF_checkregex(_8e8,/^[0-9]{3}(-| )[0-9]{2}(-| )[0-9]{4}$/,_8e9);
};
_CF_checkEmail=function(_8ea,_8eb){
_8ea=_8ea.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8eb){
if(_8ea.length==0){
return false;
}
}else{
if(_8ea.length==0){
return true;
}
}
return _CF_checkregex(_8ea,/^[a-zA-Z_0-9-'\+~]+(\.[a-zA-Z_0-9-'\+~]+)*@([a-zA-Z_0-9-]+\.)+[a-zA-Z]{2,7}$/,_8eb);
};
_CF_checkURL=function(_8ec,_8ed){
_8ec=_8ec.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8ed){
if(_8ec.length==0){
return false;
}
}else{
if(_8ec.length==0){
return true;
}
}
return _CF_checkregex(_8ec.toLowerCase(),/^((http|https|ftp|file)\:\/\/([a-zA-Z0-0]*:[a-zA-Z0-0]*(@))?[a-zA-Z0-9-\.]+(\.[a-zA-Z]{2,3})?(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9-\._\?\,\'\/\+&amp;%\$#\=~])*)|((mailto)\:[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,7})|((news)\:[a-zA-Z0-9\.]*)$/,_8ed);
};
_CF_checkUUID=function(_8ee,_8ef){
_8ee=_8ee.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8ef){
if(_8ee.length==0){
return false;
}
}else{
if(_8ee.length==0){
return true;
}
}
return _CF_checkregex(_8ee,/[A-Fa-f0-9]{8,8}-[A-Fa-f0-9]{4,4}-[A-Fa-f0-9]{4,4}-[A-Fa-f0-9]{16,16}/,_8ef);
};
_CF_checkGUID=function(_8f0,_8f1){
_8f0=_8f0.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8f1){
if(_8f0.length==0){
return false;
}
}else{
if(_8f0.length==0){
return true;
}
}
return _CF_checkregex(_8f0,/[A-Fa-f0-9]{8,8}-[A-Fa-f0-9]{4,4}-[A-Fa-f0-9]{4,4}-[A-Fa-f0-9]{4,4}-[A-Fa-f0-9]{12,12}/,_8f1);
};
_CF_checkBoolean=function(_8f2,_8f3){
_8f2=_8f2.replace(/^\s+/,"").replace(/\s+$/,"");
if(_8f3){
if(_8f2.length==0){
return false;
}
}else{
if(_8f2.length==0){
return true;
}
}
if(_8f2.toUpperCase()=="TRUE"||_8f2.toUpperCase()=="YES"||(_CF_checknumber(_8f2)&&_8f2!="0")){
return true;
}else{
if(_8f2.toUpperCase()=="FALSE"||_8f2.toUpperCase()=="NO"||_8f2=="0"){
return true;
}else{
return false;
}
}
};
_CF_setFormParam=function(_8f4,_8f5,_8f6){
var _8f7="document['"+_8f4+"']['"+_8f5+"']";
var obj=eval(_8f7);
if(obj==undefined){
return false;
}else{
obj.value=_8f6;
return true;
}
};
_CF_checkregex=function(_8f9,_8fa,_8fb){
if(_8fb){
if(_8f9.length==0){
return false;
}
}else{
if(_8f9.length==0){
return true;
}
}
return _8fa.test(_8f9);
};
