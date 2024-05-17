// Garden Gnome Software - Skin
// Pano2VR 5.2.4/15996
// Filename: cardboard2.ggsk
// Generated Чт май 16 16:29:06 2024

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	ggSkinVars['ht_ani'] = false;
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._screentint_info=document.createElement('div');
		this._screentint_info.ggId="screentint_info";
		this._screentint_info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint_info.ggVisible=false;
		this._screentint_info.className='ggskin ggskin_rectangle ';
		this._screentint_info.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -0.32%;';
		hs+='position : absolute;';
		hs+='top : 0.14%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screentint_info.setAttribute('style',hs);
		this._screentint_info.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		me._screentint_info.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint_info.onclick=function (e) {
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint_info.style[domTransition]='none';
			me._screentint_info.style.visibility='hidden';
			me._screentint_info.ggVisible=false;
		}
		this._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screentint_info);
		this._information=document.createElement('div');
		this._information.ggId="information";
		this._information.ggLeft=-153;
		this._information.ggTop=-130;
		this._information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information.ggVisible=false;
		this._information.className='ggskin ggskin_container ';
		this._information.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -153px;';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		this._information.setAttribute('style',hs);
		this._information.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		me._information.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._information_bg=document.createElement('div');
		this._information_bg.ggId="information_bg";
		this._information_bg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._information_bg.ggVisible=true;
		this._information_bg.className='ggskin ggskin_rectangle ';
		this._information_bg.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		this._information_bg.setAttribute('style',hs);
		this._information_bg.style[domTransform + 'Origin']='50% 50%';
		me._information_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._information_bg.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._information_bg.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._information_bg);
		this._info_text_body=document.createElement('div');
		this._info_text_body__text=document.createElement('div');
		this._info_text_body.className='ggskin ggskin_textdiv';
		this._info_text_body.ggTextDiv=this._info_text_body__text;
		this._info_text_body.ggId="info_text_body";
		this._info_text_body.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_text_body.ggVisible=true;
		this._info_text_body.className='ggskin ggskin_text ';
		this._info_text_body.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 274px;';
		hs+='pointer-events:auto;';
		this._info_text_body.setAttribute('style',hs);
		this._info_text_body.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 274px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		this._info_text_body__text.setAttribute('style',hs);
		this._info_text_body__text.innerHTML="";
		this._info_text_body.appendChild(this._info_text_body__text);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_text_body.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_text_body);
		this._info_title=document.createElement('div');
		this._info_title__text=document.createElement('div');
		this._info_title.className='ggskin ggskin_textdiv';
		this._info_title.ggTextDiv=this._info_title__text;
		this._info_title.ggId="info_title";
		this._info_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_title.ggVisible=true;
		this._info_title.className='ggskin ggskin_text ';
		this._info_title.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 243px;';
		hs+='pointer-events:auto;';
		this._info_title.setAttribute('style',hs);
		this._info_title.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 243px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._info_title__text.setAttribute('style',hs);
		this._info_title__text.innerHTML="";
		this._info_title.appendChild(this._info_title__text);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_title.ggUpdatePosition=function (useTransition) {
		}
		this._information.appendChild(this._info_title);
		this._info_popup_close=document.createElement('div');
		this._info_popup_close__img=document.createElement('img');
		this._info_popup_close__img.className='ggskin ggskin_svg';
		this._info_popup_close__img.setAttribute('src',basePath + 'images/info_popup_close.svg');
		this._info_popup_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._info_popup_close__img['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__img);
		this._info_popup_close__imgo=document.createElement('img');
		this._info_popup_close__imgo.className='ggskin ggskin_svg';
		this._info_popup_close__imgo.setAttribute('src',basePath + 'images/info_popup_close__o.svg');
		this._info_popup_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._info_popup_close__imgo['ondragstart']=function() { return false; };
		this._info_popup_close.appendChild(this._info_popup_close__imgo);
		this._info_popup_close.ggId="info_popup_close";
		this._info_popup_close.ggLeft=-37;
		this._info_popup_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_popup_close.ggVisible=false;
		this._info_popup_close.className='ggskin ggskin_svg ';
		this._info_popup_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._info_popup_close.setAttribute('style',hs);
		this._info_popup_close.style[domTransform + 'Origin']='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._info_popup_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._info_popup_close.onclick=function (e) {
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
			me._information.style[domTransition]='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint_info.style[domTransition]='none';
			me._screentint_info.style.visibility='hidden';
			me._screentint_info.ggVisible=false;
		}
		this._info_popup_close.onmouseover=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
		}
		this._info_popup_close.onmouseout=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
		}
		this._info_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._information.appendChild(this._info_popup_close);
		this.divSkin.appendChild(this._information);
		this._screentint_image=document.createElement('div');
		this._screentint_image.ggId="screentint_image";
		this._screentint_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screentint_image.ggVisible=false;
		this._screentint_image.className='ggskin ggskin_rectangle ';
		this._screentint_image.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._screentint_image.setAttribute('style',hs);
		this._screentint_image.style[domTransform + 'Origin']='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		me._screentint_image.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._screentint_image.onclick=function (e) {
			me._image_popup_close.style[domTransition]='none';
			me._image_popup_close.style.visibility='hidden';
			me._image_popup_close.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._screentint_image.style[domTransition]='none';
			me._screentint_image.style.visibility='hidden';
			me._screentint_image.ggVisible=false;
		}
		this._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._screentint_image);
		this._image_popup=document.createElement('div');
		this._image_popup.ggId="image_popup";
		this._image_popup.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup.ggVisible=false;
		this._image_popup.className='ggskin ggskin_container ';
		this._image_popup.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._image_popup.setAttribute('style',hs);
		this._image_popup.style[domTransform + 'Origin']='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		me._image_popup.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup.ggUpdatePosition=function (useTransition) {
		}
		this._loading_image=document.createElement('div');
		this._loading_image__img=document.createElement('img');
		this._loading_image__img.className='ggskin ggskin_svg';
		this._loading_image__img.setAttribute('src',basePath + 'images/loading_image.svg');
		this._loading_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_image__img['ondragstart']=function() { return false; };
		this._loading_image.appendChild(this._loading_image__img);
		this._loading_image.ggId="loading_image";
		this._loading_image.ggLeft=-20;
		this._loading_image.ggTop=-20;
		this._loading_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_image.ggVisible=true;
		this._loading_image.className='ggskin ggskin_svg ';
		this._loading_image.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_image.setAttribute('style',hs);
		this._loading_image.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._image_popup.appendChild(this._loading_image);
		this._popup_image=document.createElement('div');
		this._popup_image__img=document.createElement('img');
		this._popup_image__img.className='ggskin ggskin_external';
		this._popup_image__img.onload=function() {me._popup_image.ggUpdatePosition();}
		this._popup_image__img.setAttribute('src',basePath + '');
		this._popup_image__img['ondragstart']=function() { return false; };
		hs ='';
		this._popup_image.appendChild(this._popup_image__img);
		this._popup_image.ggId="popup_image";
		this._popup_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_image.ggVisible=false;
		this._popup_image.className='ggskin ggskin_external ';
		this._popup_image.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_image.setAttribute('style',hs);
		this._popup_image.style[domTransform + 'Origin']='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._popup_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = me._popup_image__img.naturalWidth / me._popup_image__img.naturalHeight;
			if (me._popup_image__img.naturalWidth < parentWidth) parentWidth = me._popup_image__img.naturalWidth;
			if (me._popup_image__img.naturalHeight < parentHeight) parentHeight = me._popup_image__img.naturalHeight;
			var currentWidth = me._popup_image__img.naturalWidth;
			var currentHeight = me._popup_image__img.naturalHeight;
			if (aspectRatioDiv > aspectRatioImg) {
			currentHeight = parentHeight;
			currentWidth = parentHeight * aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;height:' + parentHeight + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			} else {
			currentWidth = parentWidth;
			currentHeight = parentWidth / aspectRatioImg;
			me._popup_image__img.setAttribute('style','position: absolute; left: 50%; margin-left: -' + currentWidth/2 + 'px; top: 50%; margin-top: -' + currentHeight/2 + 'px;width:' + parentWidth + 'px;-webkit-user-drag:none;pointer-events:none;border-radius:0px;');
			};
		}
		this._image_popup.appendChild(this._popup_image);
		this.divSkin.appendChild(this._image_popup);
		this._image_popup_close=document.createElement('div');
		this._image_popup_close__img=document.createElement('img');
		this._image_popup_close__img.className='ggskin ggskin_svg';
		this._image_popup_close__img.setAttribute('src',basePath + 'images/image_popup_close.svg');
		this._image_popup_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_popup_close__img['ondragstart']=function() { return false; };
		this._image_popup_close.appendChild(this._image_popup_close__img);
		this._image_popup_close__imgo=document.createElement('img');
		this._image_popup_close__imgo.className='ggskin ggskin_svg';
		this._image_popup_close__imgo.setAttribute('src',basePath + 'images/image_popup_close__o.svg');
		this._image_popup_close__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._image_popup_close__imgo['ondragstart']=function() { return false; };
		this._image_popup_close.appendChild(this._image_popup_close__imgo);
		this._image_popup_close.ggId="image_popup_close";
		this._image_popup_close.ggLeft=-37;
		this._image_popup_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_popup_close.ggVisible=false;
		this._image_popup_close.className='ggskin ggskin_svg ';
		this._image_popup_close.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._image_popup_close.setAttribute('style',hs);
		this._image_popup_close.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			return false;
		}
		me._image_popup_close.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_popup_close.onclick=function (e) {
			me._image_popup_close.style[domTransition]='none';
			me._image_popup_close.style.visibility='hidden';
			me._image_popup_close.ggVisible=false;
			me._popup_image.ggText="";
			me._popup_image__img.src=me._popup_image.ggText;
			me._image_popup.style[domTransition]='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.style[domTransition]='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._screentint_image.style[domTransition]='none';
			me._screentint_image.style.visibility='hidden';
			me._screentint_image.ggVisible=false;
		}
		this._image_popup_close.onmouseover=function (e) {
			me._image_popup_close__img.style.visibility='hidden';
			me._image_popup_close__imgo.style.visibility='inherit';
		}
		this._image_popup_close.onmouseout=function (e) {
			me._image_popup_close__img.style.visibility='inherit';
			me._image_popup_close__imgo.style.visibility='hidden';
		}
		this._image_popup_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_popup_close);
		this._video_popup_close_url=document.createElement('div');
		this._video_popup_close_url__img=document.createElement('img');
		this._video_popup_close_url__img.className='ggskin ggskin_svg';
		this._video_popup_close_url__img.setAttribute('src',basePath + 'images/video_popup_close_url.svg');
		this._video_popup_close_url__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._video_popup_close_url__img['ondragstart']=function() { return false; };
		this._video_popup_close_url.appendChild(this._video_popup_close_url__img);
		this._video_popup_close_url__imgo=document.createElement('img');
		this._video_popup_close_url__imgo.className='ggskin ggskin_svg';
		this._video_popup_close_url__imgo.setAttribute('src',basePath + 'images/video_popup_close_url__o.svg');
		this._video_popup_close_url__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._video_popup_close_url__imgo['ondragstart']=function() { return false; };
		this._video_popup_close_url.appendChild(this._video_popup_close_url__imgo);
		this._video_popup_close_url.ggId="video_popup_close_url";
		this._video_popup_close_url.ggLeft=-37;
		this._video_popup_close_url.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_close_url.ggVisible=false;
		this._video_popup_close_url.className='ggskin ggskin_svg ';
		this._video_popup_close_url.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._video_popup_close_url.setAttribute('style',hs);
		this._video_popup_close_url.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_close_url.ggIsActive=function() {
			return false;
		}
		me._video_popup_close_url.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_close_url.onclick=function (e) {
			me._video_popup_close_url.style[domTransition]='none';
			me._video_popup_close_url.style.visibility='hidden';
			me._video_popup_close_url.ggVisible=false;
		}
		this._video_popup_close_url.onmouseover=function (e) {
			me._video_popup_close_url__img.style.visibility='hidden';
			me._video_popup_close_url__imgo.style.visibility='inherit';
		}
		this._video_popup_close_url.onmouseout=function (e) {
			me._video_popup_close_url__img.style.visibility='inherit';
			me._video_popup_close_url__imgo.style.visibility='hidden';
		}
		this._video_popup_close_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._video_popup_close_url);
		this._video_screentint_file=document.createElement('div');
		this._video_screentint_file.ggId="video_screentint_file";
		this._video_screentint_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_screentint_file.ggVisible=false;
		this._video_screentint_file.className='ggskin ggskin_rectangle ';
		this._video_screentint_file.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._video_screentint_file.setAttribute('style',hs);
		this._video_screentint_file.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_file.ggIsActive=function() {
			return false;
		}
		me._video_screentint_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_screentint_file.onclick=function (e) {
			me._video_popup_close_file.style[domTransition]='none';
			me._video_popup_close_file.style.visibility='hidden';
			me._video_popup_close_file.ggVisible=false;
			me._popup_video_file.ggInitMedia('');
			me._popup_video_file.style[domTransition]='none';
			me._popup_video_file.style.visibility='hidden';
			me._popup_video_file.ggVisible=false;
			me._video_screentint_file.style[domTransition]='none';
			me._video_screentint_file.style.visibility='hidden';
			me._video_screentint_file.ggVisible=false;
			me._video_popup_controls_file.style[domTransition]='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._video_popup_file.style[domTransition]='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
		}
		this._video_screentint_file.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._video_screentint_file);
		this._video_popup_file=document.createElement('div');
		this._video_popup_file.ggId="video_popup_file";
		this._video_popup_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_file.ggVisible=false;
		this._video_popup_file.className='ggskin ggskin_container ';
		this._video_popup_file.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		this._video_popup_file.setAttribute('style',hs);
		this._video_popup_file.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		this._loading_video_file=document.createElement('div');
		this._loading_video_file__img=document.createElement('img');
		this._loading_video_file__img.className='ggskin ggskin_svg';
		this._loading_video_file__img.setAttribute('src',basePath + 'images/loading_video_file.svg');
		this._loading_video_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._loading_video_file__img['ondragstart']=function() { return false; };
		this._loading_video_file.appendChild(this._loading_video_file__img);
		this._loading_video_file.ggId="loading_video_file";
		this._loading_video_file.ggLeft=-20;
		this._loading_video_file.ggTop=-20;
		this._loading_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loading_video_file.ggVisible=true;
		this._loading_video_file.className='ggskin ggskin_svg ';
		this._loading_video_file.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -20px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._loading_video_file.setAttribute('style',hs);
		this._loading_video_file.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._loading_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
		}
		this._video_popup_file.appendChild(this._loading_video_file);
		this._popup_video_file=document.createElement('div');
		this._popup_video_file.seekbars = [];
		this._popup_video_file.seekbars.push('seekbar_file');
		this._popup_video_file.ggInitMedia = function(media) {
			notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				me._popup_video_file.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = me.player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		this._popup_video_file.ggId="popup_video_file";
		this._popup_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_video_file.ggVisible=false;
		this._popup_video_file.className='ggskin ggskin_video ';
		this._popup_video_file.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		this._popup_video_file.setAttribute('style',hs);
		this._popup_video_file.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.currentTime > 0 && me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		me._popup_video_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_file.appendChild(this._popup_video_file);
		this.divSkin.appendChild(this._video_popup_file);
		this._video_popup_controls_file=document.createElement('div');
		this._video_popup_controls_file.ggId="video_popup_controls_file";
		this._video_popup_controls_file.ggLeft=-142;
		this._video_popup_controls_file.ggTop=-31;
		this._video_popup_controls_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_controls_file.ggVisible=false;
		this._video_popup_controls_file.className='ggskin ggskin_container ';
		this._video_popup_controls_file.ggType='container';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -142px;';
		hs+='position : absolute;';
		hs+='top : -31px;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		this._video_popup_controls_file.setAttribute('style',hs);
		this._video_popup_controls_file.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_controls_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._seekbar_file=document.createElement('div');
		this._seekbar_file__playhead=document.createElement('div');
		this._seekbar_file.mediaEl = null;
		this._seekbar_file.ggId="seekbar_file";
		this._seekbar_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._seekbar_file.ggVisible=true;
		this._seekbar_file.className='ggskin ggskin_seekbar ';
		this._seekbar_file.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		this._seekbar_file.setAttribute('style',hs);
		this._seekbar_file.style[domTransform + 'Origin']='50% 50%';
		this._seekbar_file.connectToMediaEl = function() {
			disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#000000';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
			}
			me._seekbar_file.mediaEl = me.player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '0px';
				me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
				me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
				if (me._seekbar_file.ggActivate) {
					me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
				}
				if (me._seekbar_file.ggDeactivate) {
					me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
					me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
				}
			me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		this._seekbar_file.updatePlayback = function() {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState) {
					var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 0;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #000000 ' + currPos + '%, #000000 ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #000000 ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		this._seekbar_file.appendChild(this._seekbar_file__playhead);
		var hs;
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 0px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 8;';
		hs_playhead += cssPrefix + 'border-radius: 8px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		this._seekbar_file.setAttribute('style', hs);
		this._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.currentTime > 0 && me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		me._seekbar_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
					me._seekbar_file.mediaEl.currentTime = seekpos;
				}
			}
		}
		this._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		this._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		this._seekbar_file.ggUpdatePosition=function (useTransition) {
		}
		this._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		this._video_popup_controls_file.appendChild(this._seekbar_file);
		this._ht_video_play_file=document.createElement('div');
		this._ht_video_play_file__img=document.createElement('img');
		this._ht_video_play_file__img.className='ggskin ggskin_svg';
		this._ht_video_play_file__img.setAttribute('src',basePath + 'images/ht_video_play_file.svg');
		this._ht_video_play_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_play_file__img['ondragstart']=function() { return false; };
		this._ht_video_play_file.appendChild(this._ht_video_play_file__img);
		this._ht_video_play_file__imgo=document.createElement('img');
		this._ht_video_play_file__imgo.className='ggskin ggskin_svg';
		this._ht_video_play_file__imgo.setAttribute('src',basePath + 'images/ht_video_play_file__o.svg');
		this._ht_video_play_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_play_file__imgo['ondragstart']=function() { return false; };
		this._ht_video_play_file.appendChild(this._ht_video_play_file__imgo);
		this._ht_video_play_file.ggId="ht_video_play_file";
		this._ht_video_play_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_play_file.ggVisible=false;
		this._ht_video_play_file.className='ggskin ggskin_svg ';
		this._ht_video_play_file.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._ht_video_play_file.setAttribute('style',hs);
		this._ht_video_play_file.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_play_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_play_file.onclick=function (e) {
			me.player.playSound("popup_video_file","1");
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		this._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		this._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		this._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_controls_file.appendChild(this._ht_video_play_file);
		this._ht_video_pause_file=document.createElement('div');
		this._ht_video_pause_file__img=document.createElement('img');
		this._ht_video_pause_file__img.className='ggskin ggskin_svg';
		this._ht_video_pause_file__img.setAttribute('src',basePath + 'images/ht_video_pause_file.svg');
		this._ht_video_pause_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._ht_video_pause_file__img['ondragstart']=function() { return false; };
		this._ht_video_pause_file.appendChild(this._ht_video_pause_file__img);
		this._ht_video_pause_file__imgo=document.createElement('img');
		this._ht_video_pause_file__imgo.className='ggskin ggskin_svg';
		this._ht_video_pause_file__imgo.setAttribute('src',basePath + 'images/ht_video_pause_file__o.svg');
		this._ht_video_pause_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._ht_video_pause_file__imgo['ondragstart']=function() { return false; };
		this._ht_video_pause_file.appendChild(this._ht_video_pause_file__imgo);
		this._ht_video_pause_file.ggId="ht_video_pause_file";
		this._ht_video_pause_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_video_pause_file.ggVisible=true;
		this._ht_video_pause_file.className='ggskin ggskin_svg ';
		this._ht_video_pause_file.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		this._ht_video_pause_file.setAttribute('style',hs);
		this._ht_video_pause_file.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._ht_video_pause_file.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._ht_video_pause_file.onclick=function (e) {
			me.player.pauseSound("popup_video_file");
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		this._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		this._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		this._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		this._video_popup_controls_file.appendChild(this._ht_video_pause_file);
		this.divSkin.appendChild(this._video_popup_controls_file);
		this._video_popup_close_file=document.createElement('div');
		this._video_popup_close_file__img=document.createElement('img');
		this._video_popup_close_file__img.className='ggskin ggskin_svg';
		this._video_popup_close_file__img.setAttribute('src',basePath + 'images/video_popup_close_file.svg');
		this._video_popup_close_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._video_popup_close_file__img['ondragstart']=function() { return false; };
		this._video_popup_close_file.appendChild(this._video_popup_close_file__img);
		this._video_popup_close_file__imgo=document.createElement('img');
		this._video_popup_close_file__imgo.className='ggskin ggskin_svg';
		this._video_popup_close_file__imgo.setAttribute('src',basePath + 'images/video_popup_close_file__o.svg');
		this._video_popup_close_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._video_popup_close_file__imgo['ondragstart']=function() { return false; };
		this._video_popup_close_file.appendChild(this._video_popup_close_file__imgo);
		this._video_popup_close_file.ggId="video_popup_close_file";
		this._video_popup_close_file.ggLeft=-37;
		this._video_popup_close_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._video_popup_close_file.ggVisible=false;
		this._video_popup_close_file.className='ggskin ggskin_svg ';
		this._video_popup_close_file.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._video_popup_close_file.setAttribute('style',hs);
		this._video_popup_close_file.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_close_file.ggIsActive=function() {
			return false;
		}
		me._video_popup_close_file.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._video_popup_close_file.onclick=function (e) {
			me._video_popup_close_file.style[domTransition]='none';
			me._video_popup_close_file.style.visibility='hidden';
			me._video_popup_close_file.ggVisible=false;
			me._popup_video_file.ggInitMedia('');
			me._popup_video_file.style[domTransition]='none';
			me._popup_video_file.style.visibility='hidden';
			me._popup_video_file.ggVisible=false;
			me._video_screentint_file.style[domTransition]='none';
			me._video_screentint_file.style.visibility='hidden';
			me._video_screentint_file.ggVisible=false;
			me._video_popup_controls_file.style[domTransition]='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._video_popup_file.style[domTransition]='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
		}
		this._video_popup_close_file.onmouseover=function (e) {
			me._video_popup_close_file__img.style.visibility='hidden';
			me._video_popup_close_file__imgo.style.visibility='inherit';
		}
		this._video_popup_close_file.onmouseout=function (e) {
			me._video_popup_close_file__img.style.visibility='inherit';
			me._video_popup_close_file__imgo.style.visibility='hidden';
		}
		this._video_popup_close_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this.divSkin.appendChild(this._video_popup_close_file);
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._seekbar_file.ggNodeChange();
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_info') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 5px;';
			hs+='left : 97px;';
			hs+='position : absolute;';
			hs+='top : 95px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._info_title.ggText="<b>"+me.hotspot.title+"<\/b>";
				me.skin._info_title.ggTextDiv.innerHTML=me.skin._info_title.ggText;
				if (me.skin._info_title.ggUpdateText) {
					me.skin._info_title.ggUpdateText=function() {
						var hs="<b>"+me.hotspot.title+"<\/b>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_title.ggUpdatePosition) {
					me.skin._info_title.ggUpdatePosition();
				}
				me.skin._info_title.ggTextDiv.scrollTop = 0;
				me.skin._info_text_body.ggText=me.hotspot.description;
				me.skin._info_text_body.ggTextDiv.innerHTML=me.skin._info_text_body.ggText;
				if (me.skin._info_text_body.ggUpdateText) {
					me.skin._info_text_body.ggUpdateText=function() {
						var hs=me.hotspot.description;
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (me.skin._info_text_body.ggUpdatePosition) {
					me.skin._info_text_body.ggUpdatePosition();
				}
				me.skin._info_text_body.ggTextDiv.scrollTop = 0;
				me.skin._information.style[domTransition]='none';
				me.skin._information.style.visibility=(Number(me.skin._information.style.opacity)>0||!me.skin._information.style.opacity)?'inherit':'hidden';
				me.skin._information.ggVisible=true;
				me.skin._screentint_info.style[domTransition]='none';
				me.skin._screentint_info.style.visibility=(Number(me.skin._screentint_info.style.opacity)>0||!me.skin._screentint_info.style.opacity)?'inherit':'hidden';
				me.skin._screentint_info.ggVisible=true;
				me.skin._info_popup_close.style[domTransition]='none';
				me.skin._info_popup_close.style.visibility=(Number(me.skin._info_popup_close.style.opacity)>0||!me.skin._info_popup_close.style.opacity)?'inherit':'hidden';
				me.skin._info_popup_close.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_info_image=document.createElement('div');
			this._ht_info_image__img=document.createElement('img');
			this._ht_info_image__img.className='ggskin ggskin_svg';
			this._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
			this._ht_info_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_image__img['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__img);
			this._ht_info_image__imgo=document.createElement('img');
			this._ht_info_image__imgo.className='ggskin ggskin_svg';
			this._ht_info_image__imgo.setAttribute('src',basePath + 'images/ht_info_image__o.svg');
			this._ht_info_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_info_image__imgo['ondragstart']=function() { return false; };
			this._ht_info_image.appendChild(this._ht_info_image__imgo);
			this._ht_info_image.ggId="ht_info_image";
			this._ht_info_image.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._ht_info_image.ggVisible=true;
			this._ht_info_image.className='ggskin ggskin_svg ';
			this._ht_info_image.ggType='svg';
			hs ='';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -17px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_info_image.setAttribute('style',hs);
			this._ht_info_image.style[domTransform + 'Origin']='50% 50%';
			this._ht_info_image.style[domTransform]=parameterToTransform(this._ht_info_image.ggParameter);
			me._ht_info_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_image.onmouseover=function (e) {
				me._ht_info_image__img.style.visibility='hidden';
				me._ht_info_image__imgo.style.visibility='inherit';
			}
			this._ht_info_image.onmouseout=function (e) {
				me._ht_info_image__img.style.visibility='inherit';
				me._ht_info_image__imgo.style.visibility='hidden';
			}
			this._ht_info_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_info_image);
			this._tt_information=document.createElement('div');
			this._tt_information__text=document.createElement('div');
			this._tt_information.className='ggskin ggskin_textdiv';
			this._tt_information.ggTextDiv=this._tt_information__text;
			this._tt_information.ggId="tt_information";
			this._tt_information.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_information.ggVisible=false;
			this._tt_information.className='ggskin ggskin_text ';
			this._tt_information.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			hs+='pointer-events:auto;';
			this._tt_information.setAttribute('style',hs);
			this._tt_information.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 5px 2px 5px;';
			hs+='overflow: hidden;';
			this._tt_information__text.setAttribute('style',hs);
			this._tt_information__text.innerHTML=me.hotspot.title;
			this._tt_information.appendChild(this._tt_information__text);
			me._tt_information.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_information.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_information.ggCurrentLogicStateVisible = -1;
			this._tt_information.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_information.style[domTransition]='';
					if (me._tt_information.ggCurrentLogicStateVisible == 0) {
						me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
						me._tt_information.ggVisible=true;
					}
					else {
						me._tt_information.style.visibility="hidden";
						me._tt_information.ggVisible=false;
					}
				}
			}
			this._tt_information.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_information);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_information.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_image') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_image";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 200px;';
			hs+='position : absolute;';
			hs+='top : 200px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._popup_image.ggText=me.player.getBasePath()+""+me.hotspot.url;
				me.skin._popup_image__img.src=me.skin._popup_image.ggText;
				me.skin._popup_image.style[domTransition]='none';
				me.skin._popup_image.style.visibility=(Number(me.skin._popup_image.style.opacity)>0||!me.skin._popup_image.style.opacity)?'inherit':'hidden';
				me.skin._popup_image.ggVisible=true;
				me.skin._image_popup.style[domTransition]='none';
				me.skin._image_popup.style.visibility=(Number(me.skin._image_popup.style.opacity)>0||!me.skin._image_popup.style.opacity)?'inherit':'hidden';
				me.skin._image_popup.ggVisible=true;
				me.skin._screentint_image.style[domTransition]='none';
				me.skin._screentint_image.style.visibility=(Number(me.skin._screentint_image.style.opacity)>0||!me.skin._screentint_image.style.opacity)?'inherit':'hidden';
				me.skin._screentint_image.ggVisible=true;
				me.skin._image_popup_close.style[domTransition]='none';
				me.skin._image_popup_close.style.visibility=(Number(me.skin._image_popup_close.style.opacity)>0||!me.skin._image_popup_close.style.opacity)?'inherit':'hidden';
				me.skin._image_popup_close.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_image_image=document.createElement('div');
			this._ht_image_image__img=document.createElement('img');
			this._ht_image_image__img.className='ggskin ggskin_svg';
			this._ht_image_image__img.setAttribute('src',basePath + 'images/ht_image_image.svg');
			this._ht_image_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_image_image__img['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__img);
			this._ht_image_image__imgo=document.createElement('img');
			this._ht_image_image__imgo.className='ggskin ggskin_svg';
			this._ht_image_image__imgo.setAttribute('src',basePath + 'images/ht_image_image__o.svg');
			this._ht_image_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_image_image__imgo['ondragstart']=function() { return false; };
			this._ht_image_image.appendChild(this._ht_image_image__imgo);
			this._ht_image_image.ggId="ht_image_image";
			this._ht_image_image.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._ht_image_image.ggVisible=true;
			this._ht_image_image.className='ggskin ggskin_svg ';
			this._ht_image_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_image_image.setAttribute('style',hs);
			this._ht_image_image.style[domTransform + 'Origin']='50% 50%';
			this._ht_image_image.style[domTransform]=parameterToTransform(this._ht_image_image.ggParameter);
			me._ht_image_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_image_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_image_image.onmouseover=function (e) {
				me._ht_image_image__img.style.visibility='hidden';
				me._ht_image_image__imgo.style.visibility='inherit';
			}
			this._ht_image_image.onmouseout=function (e) {
				me._ht_image_image__img.style.visibility='inherit';
				me._ht_image_image__imgo.style.visibility='hidden';
			}
			this._ht_image_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_image_image);
			this._tt_ht_image=document.createElement('div');
			this._tt_ht_image__text=document.createElement('div');
			this._tt_ht_image.className='ggskin ggskin_textdiv';
			this._tt_ht_image.ggTextDiv=this._tt_ht_image__text;
			this._tt_ht_image.ggId="tt_ht_image";
			this._tt_ht_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_image.ggVisible=false;
			this._tt_ht_image.className='ggskin ggskin_text ';
			this._tt_ht_image.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			hs+='pointer-events:auto;';
			this._tt_ht_image.setAttribute('style',hs);
			this._tt_ht_image.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 5px 2px 5px;';
			hs+='overflow: hidden;';
			this._tt_ht_image__text.setAttribute('style',hs);
			this._tt_ht_image__text.innerHTML=me.hotspot.title;
			this._tt_ht_image.appendChild(this._tt_ht_image__text);
			me._tt_ht_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_image.ggCurrentLogicStateVisible = -1;
			this._tt_ht_image.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_image.style[domTransition]='';
					if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
						me._tt_ht_image.ggVisible=true;
					}
					else {
						me._tt_ht_image.style.visibility="hidden";
						me._tt_ht_image.ggVisible=false;
					}
				}
			}
			this._tt_ht_image.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_image);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_image.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='ht_node') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_node";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 50px;';
			hs+='position : absolute;';
			hs+='top : 16px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_node_image=document.createElement('div');
			this._ht_node_image__img=document.createElement('img');
			this._ht_node_image__img.className='ggskin ggskin_svg';
			this._ht_node_image__img.setAttribute('src',basePath + 'images/ht_node_image.svg');
			this._ht_node_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_node_image__img['ondragstart']=function() { return false; };
			this._ht_node_image.appendChild(this._ht_node_image__img);
			this._ht_node_image.ggId="ht_node_image";
			this._ht_node_image.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._ht_node_image.ggVisible=true;
			this._ht_node_image.className='ggskin ggskin_svg ';
			this._ht_node_image.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_node_image.setAttribute('style',hs);
			this._ht_node_image.style[domTransform + 'Origin']='50% 50%';
			this._ht_node_image.style[domTransform]=parameterToTransform(this._ht_node_image.ggParameter);
			me._ht_node_image.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_node_image.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_node_image.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_node_image);
			this._tt_ht_node=document.createElement('div');
			this._tt_ht_node__text=document.createElement('div');
			this._tt_ht_node.className='ggskin ggskin_textdiv';
			this._tt_ht_node.ggTextDiv=this._tt_ht_node__text;
			this._tt_ht_node.ggId="tt_ht_node";
			this._tt_ht_node.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_node.ggVisible=false;
			this._tt_ht_node.className='ggskin ggskin_text ';
			this._tt_ht_node.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 17px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 95px;';
			hs+='pointer-events:auto;';
			this._tt_ht_node.setAttribute('style',hs);
			this._tt_ht_node.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._tt_ht_node__text.setAttribute('style',hs);
			this._tt_ht_node__text.innerHTML=me.hotspot.title;
			this._tt_ht_node.appendChild(this._tt_ht_node__text);
			me._tt_ht_node.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_node.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_node.ggCurrentLogicStateVisible = -1;
			this._tt_ht_node.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_node.style[domTransition]='';
					if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
						me._tt_ht_node.ggVisible=true;
					}
					else {
						me._tt_ht_node.style.visibility="hidden";
						me._tt_ht_node.ggVisible=false;
					}
				}
			}
			this._tt_ht_node.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((99-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_node);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_node.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_video_file";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 200px;';
			hs+='position : absolute;';
			hs+='top : 200px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin._popup_video_file.ggInitMedia(me.player.getBasePath()+""+me.hotspot.url);
				if (me.skin._popup_video_file.ggVideoNotLoaded) {
					me.skin._popup_video_file.ggInitMedia(me.skin._popup_video_file.ggVideoSource);
				}
				me.skin._popup_video_file.style[domTransition]='none';
				me.skin._popup_video_file.style.visibility=(Number(me.skin._popup_video_file.style.opacity)>0||!me.skin._popup_video_file.style.opacity)?'inherit':'hidden';
				me.skin._popup_video_file.ggVisible=true;
				me.skin._video_popup_close_file.style[domTransition]='none';
				me.skin._video_popup_close_file.style.visibility=(Number(me.skin._video_popup_close_file.style.opacity)>0||!me.skin._video_popup_close_file.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_close_file.ggVisible=true;
				me.skin._video_screentint_file.style[domTransition]='none';
				me.skin._video_screentint_file.style.visibility=(Number(me.skin._video_screentint_file.style.opacity)>0||!me.skin._video_screentint_file.style.opacity)?'inherit':'hidden';
				me.skin._video_screentint_file.ggVisible=true;
				me.skin._video_popup_controls_file.style[domTransition]='none';
				me.skin._video_popup_controls_file.style.visibility=(Number(me.skin._video_popup_controls_file.style.opacity)>0||!me.skin._video_popup_controls_file.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_controls_file.ggVisible=true;
				me.skin._video_popup_file.style[domTransition]='none';
				me.skin._video_popup_file.style.visibility=(Number(me.skin._video_popup_file.style.opacity)>0||!me.skin._video_popup_file.style.opacity)?'inherit':'hidden';
				me.skin._video_popup_file.ggVisible=true;
				me.player.playSound("popup_video_file","1");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_video_video_file=document.createElement('div');
			this._ht_video_video_file__img=document.createElement('img');
			this._ht_video_video_file__img.className='ggskin ggskin_svg';
			this._ht_video_video_file__img.setAttribute('src',basePath + 'images/ht_video_video_file.svg');
			this._ht_video_video_file__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_video_video_file__img['ondragstart']=function() { return false; };
			this._ht_video_video_file.appendChild(this._ht_video_video_file__img);
			this._ht_video_video_file__imgo=document.createElement('img');
			this._ht_video_video_file__imgo.className='ggskin ggskin_svg';
			this._ht_video_video_file__imgo.setAttribute('src',basePath + 'images/ht_video_video_file__o.svg');
			this._ht_video_video_file__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
			this._ht_video_video_file__imgo['ondragstart']=function() { return false; };
			this._ht_video_video_file.appendChild(this._ht_video_video_file__imgo);
			this._ht_video_video_file.ggId="ht_video_video_file";
			this._ht_video_video_file.ggParameter={ rx:0,ry:0,a:0,sx:2,sy:2 };
			this._ht_video_video_file.ggVisible=true;
			this._ht_video_video_file.className='ggskin ggskin_svg ';
			this._ht_video_video_file.ggType='svg';
			hs ='';
			hs+='cursor : pointer;';
			hs+='height : 32px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 32px;';
			hs+='pointer-events:auto;';
			this._ht_video_video_file.setAttribute('style',hs);
			this._ht_video_video_file.style[domTransform + 'Origin']='50% 50%';
			this._ht_video_video_file.style[domTransform]=parameterToTransform(this._ht_video_video_file.ggParameter);
			me._ht_video_video_file.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_video_video_file.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_video_video_file.onmouseover=function (e) {
				me._ht_video_video_file__img.style.visibility='hidden';
				me._ht_video_video_file__imgo.style.visibility='inherit';
			}
			this._ht_video_video_file.onmouseout=function (e) {
				me._ht_video_video_file__img.style.visibility='inherit';
				me._ht_video_video_file__imgo.style.visibility='hidden';
			}
			this._ht_video_video_file.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_video_video_file);
			this._tt_ht_video_file=document.createElement('div');
			this._tt_ht_video_file__text=document.createElement('div');
			this._tt_ht_video_file.className='ggskin ggskin_textdiv';
			this._tt_ht_video_file.ggTextDiv=this._tt_ht_video_file__text;
			this._tt_ht_video_file.ggId="tt_ht_video_file";
			this._tt_ht_video_file.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._tt_ht_video_file.ggVisible=false;
			this._tt_ht_video_file.className='ggskin ggskin_text ';
			this._tt_ht_video_file.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 20px;';
			hs+='left : -50px;';
			hs+='position : absolute;';
			hs+='top : 21px;';
			hs+='visibility : hidden;';
			hs+='width : 98px;';
			hs+='pointer-events:auto;';
			this._tt_ht_video_file.setAttribute('style',hs);
			this._tt_ht_video_file.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='background: rgba(0,0,0,0.666667);';
			hs+='border: 0px solid #000000;';
			hs+='color: rgba(255,255,255,1);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 2px 5px 2px 5px;';
			hs+='overflow: hidden;';
			this._tt_ht_video_file__text.setAttribute('style',hs);
			this._tt_ht_video_file__text.innerHTML=me.hotspot.title;
			this._tt_ht_video_file.appendChild(this._tt_ht_video_file__text);
			me._tt_ht_video_file.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._tt_ht_video_file.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._tt_ht_video_file.ggCurrentLogicStateVisible = -1;
			this._tt_ht_video_file.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._tt_ht_video_file.style[domTransition]='';
					if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
						me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
						me._tt_ht_video_file.ggVisible=true;
					}
					else {
						me._tt_ht_video_file.style.visibility="hidden";
						me._tt_ht_video_file.ggVisible=false;
					}
				}
			}
			this._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			this.__div.appendChild(this._tt_ht_video_file);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._tt_ht_video_file.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};