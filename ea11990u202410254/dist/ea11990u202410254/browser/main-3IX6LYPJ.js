import{a as at,b as ae,c as rt,d as lt,e as st,f as re,h as dt,i as le,j as ct,k as be,x as fe,y as ve}from"./chunk-RBBXDORR.js";import{A as k,Aa as J,Ba as E,C as d,Ca as S,Da as O,Db as ot,E as zt,Ea as Ut,Eb as j,F as Nt,Fa as R,Ga as B,Gb as se,Hb as de,I as Ft,Ib as ce,K as q,Ka as Qt,La as V,M as Ht,Ma as qt,Mb as ge,N as W,Na as s,Oa as f,Ob as Tt,Pa as h,R as C,Ra as X,Ta as p,U as r,Ua as m,Ub as pe,Va as Wt,Vb as me,Wb as ue,Ya as Y,Yb as he,Za as Zt,_a as $,aa as u,ba as P,bb as xt,ca as z,cb as x,ha as Ot,ja as Vt,jb as Kt,ka as I,kb as tt,la as Z,lb as Jt,ma as K,mb as wt,na as $t,nb as et,oa as N,ob as Xt,pa as F,pb as Yt,qa as _,ra as c,rb as te,sa as l,sb as ee,ta as b,tb as ne,ua as M,ub as ie,va as D,vb as nt,wb as T,x as At,xa as jt,xb as oe,y as Pt,yb as it,z as A,za as H}from"./chunk-TCEJC2RE.js";import{a as Lt}from"./chunk-2NFLSA4Y.js";var gt=class{tracker;columnIndex=0;rowIndex=0;get rowCount(){return this.rowIndex+1}get rowspan(){let i=Math.max(...this.tracker);return i>1?this.rowCount+i-1:this.rowCount}positions;update(i,t){this.columnIndex=0,this.rowIndex=0,this.tracker=new Array(i),this.tracker.fill(0,0,this.tracker.length),this.positions=t.map(e=>this._trackTile(e))}_trackTile(i){let t=this._findMatchingGap(i.colspan);return this._markTilePosition(t,i),this.columnIndex=t+i.colspan,new Mt(this.rowIndex,t)}_findMatchingGap(i){i>this.tracker.length;let t=-1,e=-1;do{if(this.columnIndex+i>this.tracker.length){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(t);continue}if(t=this.tracker.indexOf(0,this.columnIndex),t==-1){this._nextRow(),t=this.tracker.indexOf(0,this.columnIndex),e=this._findGapEndIndex(t);continue}e=this._findGapEndIndex(t),this.columnIndex=t+1}while(e-t<i||e==0);return Math.max(t,0)}_nextRow(){this.columnIndex=0,this.rowIndex++;for(let i=0;i<this.tracker.length;i++)this.tracker[i]=Math.max(0,this.tracker[i]-1)}_findGapEndIndex(i){for(let t=i+1;t<this.tracker.length;t++)if(this.tracker[t]!=0)return t;return this.tracker.length}_markTilePosition(i,t){for(let e=0;e<t.colspan;e++)this.tracker[i+e]=t.rowspan}},Mt=class{row;col;constructor(i,t){this.row=i,this.col=t}};var St=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=P({type:n});static \u0275inj=A({imports:[j]})}return n})();var ye=["*"];var Ge=`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`,_e=new k("MAT_GRID_LIST"),Dt=(()=>{class n{_element=d(C);_gridList=d(_e,{optional:!0});_rowspan=1;_colspan=1;constructor(){}get rowspan(){return this._rowspan}set rowspan(t){this._rowspan=Math.round(it(t))}get colspan(){return this._colspan}set colspan(t){this._colspan=Math.round(it(t))}_setStyle(t,e){this._element.nativeElement.style[t]=e}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["mat-grid-tile"]],hostAttrs:[1,"mat-grid-tile"],hostVars:2,hostBindings:function(e,o){e&2&&I("rowspan",o.rowspan)("colspan",o.colspan)},inputs:{rowspan:"rowspan",colspan:"colspan"},exportAs:["matGridTile"],ngContentSelectors:ye,decls:2,vars:0,consts:[[1,"mat-grid-tile-content"]],template:function(e,o){e&1&&(E(),M(0,"div",0),S(1),D())},styles:[`.mat-grid-list {
  display: block;
  position: relative;
}

.mat-grid-tile {
  display: block;
  position: absolute;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-tile-header,
.mat-grid-tile .mat-grid-tile-footer {
  display: flex;
  align-items: center;
  height: 48px;
  color: #fff;
  background: rgba(0, 0, 0, 0.38);
  overflow: hidden;
  padding: 0 16px;
  position: absolute;
  left: 0;
  right: 0;
}
.mat-grid-tile .mat-grid-tile-header > *,
.mat-grid-tile .mat-grid-tile-footer > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-tile-header.mat-2-line,
.mat-grid-tile .mat-grid-tile-footer.mat-2-line {
  height: 68px;
}
.mat-grid-tile .mat-grid-list-text {
  display: flex;
  flex-direction: column;
  flex: auto;
  box-sizing: border-box;
  overflow: hidden;
}
.mat-grid-tile .mat-grid-list-text > * {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: inherit;
}
.mat-grid-tile .mat-grid-list-text:empty {
  display: none;
}
.mat-grid-tile .mat-grid-tile-header {
  top: 0;
}
.mat-grid-tile .mat-grid-tile-footer {
  bottom: 0;
}
.mat-grid-tile .mat-grid-avatar {
  padding-right: 16px;
}
[dir=rtl] .mat-grid-tile .mat-grid-avatar {
  padding-right: 0;
  padding-left: 16px;
}
.mat-grid-tile .mat-grid-avatar:empty {
  display: none;
}

.mat-grid-tile-header {
  font-size: var(--mat-grid-list-tile-header-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-header .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-header .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-header-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-footer {
  font-size: var(--mat-grid-list-tile-footer-primary-text-size, var(--mat-sys-body-large));
}
.mat-grid-tile-footer .mat-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  box-sizing: border-box;
}
.mat-grid-tile-footer .mat-line:nth-child(n+2) {
  font-size: var(--mat-grid-list-tile-footer-secondary-text-size, var(--mat-sys-body-medium));
}

.mat-grid-tile-content {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0;
  margin: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var Le=/^-?\d+((\.\d+)?[A-Za-z%$]?)+$/,U=class{_gutterSize;_rows=0;_rowspan=0;_cols;_direction;init(i,t,e,o){this._gutterSize=xe(i),this._rows=t.rowCount,this._rowspan=t.rowspan,this._cols=e,this._direction=o}getBaseTileSize(i,t){return`(${i}% - (${this._gutterSize} * ${t}))`}getTilePosition(i,t){return t===0?"0":G(`(${i} + ${this._gutterSize}) * ${t}`)}getTileSize(i,t){return`(${i} * ${t}) + (${t-1} * ${this._gutterSize})`}setStyle(i,t,e){let o=100/this._cols,a=(this._cols-1)/this._cols;this.setColStyles(i,e,o,a),this.setRowStyles(i,t,o,a)}setColStyles(i,t,e,o){let a=this.getBaseTileSize(e,o),g=this._direction==="rtl"?"right":"left";i._setStyle(g,this.getTilePosition(a,t)),i._setStyle("width",G(this.getTileSize(a,i.colspan)))}getGutterSpan(){return`${this._gutterSize} * (${this._rowspan} - 1)`}getTileSpan(i){return`${this._rowspan} * ${this.getTileSize(i,1)}`}getComputedHeight(){return null}},kt=class extends U{fixedRowHeight;constructor(i){super(),this.fixedRowHeight=i}init(i,t,e,o){super.init(i,t,e,o),this.fixedRowHeight=xe(this.fixedRowHeight),Le.test(this.fixedRowHeight)}setRowStyles(i,t){i._setStyle("top",this.getTilePosition(this.fixedRowHeight,t)),i._setStyle("height",G(this.getTileSize(this.fixedRowHeight,i.rowspan)))}getComputedHeight(){return["height",G(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["height",null]),i._tiles&&i._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}},Ct=class extends U{rowHeightRatio;baseTileHeight;constructor(i){super(),this._parseRatio(i)}setRowStyles(i,t,e,o){let a=e/this.rowHeightRatio;this.baseTileHeight=this.getBaseTileSize(a,o),i._setStyle("marginTop",this.getTilePosition(this.baseTileHeight,t)),i._setStyle("paddingTop",G(this.getTileSize(this.baseTileHeight,i.rowspan)))}getComputedHeight(){return["paddingBottom",G(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)]}reset(i){i._setListStyle(["paddingBottom",null]),i._tiles.forEach(t=>{t._setStyle("marginTop",null),t._setStyle("paddingTop",null)})}_parseRatio(i){let t=i.split(":");t.length,this.rowHeightRatio=parseFloat(t[0])/parseFloat(t[1])}},It=class extends U{setRowStyles(i,t){let e=100/this._rowspan,o=(this._rows-1)/this._rows,a=this.getBaseTileSize(e,o);i._setStyle("top",this.getTilePosition(a,t)),i._setStyle("height",G(this.getTileSize(a,i.rowspan)))}reset(i){i._tiles&&i._tiles.forEach(t=>{t._setStyle("top",null),t._setStyle("height",null)})}};function G(n){return`calc(${n})`}function xe(n){return n.match(/([A-Za-z%]+)$/)?n:`${n}px`}var Ae="fit",we=(()=>{class n{_element=d(C);_dir=d(ot,{optional:!0});_cols;_tileCoordinator;_rowHeight;_gutter="1px";_tileStyler;_tiles;constructor(){}get cols(){return this._cols}set cols(t){this._cols=Math.max(1,Math.round(it(t)))}get gutterSize(){return this._gutter}set gutterSize(t){this._gutter=`${t??""}`}get rowHeight(){return this._rowHeight}set rowHeight(t){let e=`${t??""}`;e!==this._rowHeight&&(this._rowHeight=e,this._setTileStyler(this._rowHeight))}ngOnInit(){this._checkCols(),this._checkRowHeight()}ngAfterContentChecked(){this._layoutTiles()}_checkCols(){this.cols}_checkRowHeight(){this._rowHeight||this._setTileStyler("1:1")}_setTileStyler(t){this._tileStyler&&this._tileStyler.reset(this),t===Ae?this._tileStyler=new It:t&&t.indexOf(":")>-1?this._tileStyler=new Ct(t):this._tileStyler=new kt(t)}_layoutTiles(){this._tileCoordinator||(this._tileCoordinator=new gt);let t=this._tileCoordinator,e=this._tiles.filter(a=>!a._gridList||a._gridList===this),o=this._dir?this._dir.value:"ltr";this._tileCoordinator.update(this.cols,e),this._tileStyler.init(this.gutterSize,t,this.cols,o),e.forEach((a,g)=>{let w=t.positions[g];this._tileStyler.setStyle(a,w.row,w.col)}),this._setListStyle(this._tileStyler.getComputedHeight())}_setListStyle(t){t&&(this._element.nativeElement.style[t[0]]=t[1])}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["mat-grid-list"]],contentQueries:function(e,o,a){if(e&1&&O(a,Dt,5),e&2){let g;R(g=B())&&(o._tiles=g)}},hostAttrs:[1,"mat-grid-list"],hostVars:1,hostBindings:function(e,o){e&2&&I("cols",o.cols)},inputs:{cols:"cols",gutterSize:"gutterSize",rowHeight:"rowHeight"},exportAs:["matGridList"],features:[X([{provide:_e,useExisting:n}])],ngContentSelectors:ye,decls:2,vars:0,template:function(e,o){e&1&&(E(),M(0,"div"),S(1),D())},styles:[Ge],encapsulation:2,changeDetection:0})}return n})(),Te=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=P({type:n});static \u0275inj=A({imports:[St,j,St]})}return n})();var pt=class n{vehicleType=$.required();dailyRevenuePotential=$.required();estimatedIncidentCost=$.required();vehiclesRented=$.required();static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-vehicle-type-stats-card"]],inputs:{vehicleType:[1,"vehicleType"],dailyRevenuePotential:[1,"dailyRevenuePotential"],estimatedIncidentCost:[1,"estimatedIncidentCost"],vehiclesRented:[1,"vehiclesRented"]},decls:25,vars:17,consts:[["appearance","outlined","role","article",1,"stats-card"],[1,"metric"],[1,"card-footer"]],template:function(t,e){t&1&&(c(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),s(3),l()(),c(4,"mat-card-content")(5,"div",1)(6,"span"),s(7),p(8,"translate"),l(),c(9,"strong"),s(10),p(11,"currency"),l()(),c(12,"div",1)(13,"span"),s(14),p(15,"translate"),l(),c(16,"strong"),s(17),p(18,"currency"),l()()(),c(19,"mat-card-footer",2)(20,"span"),s(21),p(22,"translate"),l(),c(23,"strong"),s(24),l()()()),t&2&&(r(3),f(e.vehicleType()),r(4),f(m(8,7,"analytics.daily-revenue-potential")),r(3),f(m(11,9,e.dailyRevenuePotential())),r(4),f(m(15,11,"analytics.estimated-incident-cost")),r(3),f(m(18,13,e.estimatedIncidentCost())),r(4),f(m(22,15,"analytics.vehicles-rented")),r(3),f(e.vehiclesRented()))},dependencies:[ct,rt,st,le,dt,lt,tt,T],styles:[".stats-card[_ngcontent-%COMP%]{height:100%}.metric[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;padding:.75rem 0}.metric[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#4b5563}.card-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1rem;border-top:1px solid #e5e7eb}"]})};var Ne=(n,i)=>i.vehicleType;function Fe(n,i){if(n&1&&(c(0,"mat-grid-tile"),b(1,"app-vehicle-type-stats-card",1),l()),n&2){let t=i.$implicit;r(),_("vehicleType",t.vehicleType)("dailyRevenuePotential",t.dailyRevenuePotential)("estimatedIncidentCost",t.estimatedIncidentCost)("vehiclesRented",t.vehiclesRented)}}var mt=class n{mastersStore=d(ae);operationsStore=d(at);stats=Y(()=>{let i=this.mastersStore.vehicles(),t=this.operationsStore.incidents();return[...new Set(i.map(o=>o.vehicleType))].map(o=>{let a=i.filter(y=>y.vehicleType===o),g=a.filter(y=>y.status==="RENTED"),w=a.map(y=>y.id),Re=t.filter(y=>w.includes(y.vehicleId)).reduce((y,Q)=>{let Be=Q.priority==="HIGH"?2:1;return y+Q.estimatedRepairCost*Be},0);return{vehicleType:o,dailyRevenuePotential:g.reduce((y,Q)=>y+Q.dailyRate,0),estimatedIncidentCost:Math.round(Re*100)/100,vehiclesRented:g.length}})});static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-vehicle-type-stats-grid"]],decls:3,vars:0,consts:[["cols","3","rowHeight","220px","gutterSize","16px","aria-label","Vehicle type statistics"],[3,"vehicleType","dailyRevenuePotential","estimatedIncidentCost","vehiclesRented"]],template:function(t,e){t&1&&(c(0,"mat-grid-list",0),N(1,Fe,2,4,"mat-grid-tile",null,Ne),l()),t&2&&(r(),F(e.stats()))},dependencies:[Te,we,Dt,pt],styles:["[_nghost-%COMP%]{display:block;width:100%}app-vehicle-type-stats-card[_ngcontent-%COMP%]{width:100%;height:100%}"]})};function He(n,i){if(n&1&&(c(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),s(3),l(),c(4,"mat-card-subtitle"),s(5),p(6,"date"),l()(),c(7,"mat-card-content")(8,"p")(9,"strong"),s(10),p(11,"translate"),l(),s(12),l(),c(13,"p")(14,"strong"),s(15),p(16,"translate"),l(),s(17),l(),c(18,"p")(19,"strong"),s(20),p(21,"translate"),l(),s(22),p(23,"currency"),l(),c(24,"p")(25,"strong"),s(26),p(27,"translate"),l(),s(28),l()()()),n&2){let t=i;r(3),f(t.incidentType),r(2),h(" ",Wt(6,10,t.registeredAt,"medium")," "),r(5),h("",m(11,13,"incident.vehicle-id"),":"),r(2),h(" ",t.vehicleId," "),r(3),h("",m(16,15,"incident.rental-id"),":"),r(2),h(" ",t.rentalId??"N/A"," "),r(3),h("",m(21,17,"incident.estimated-repair-cost"),":"),r(2),h(" ",m(23,19,t.estimatedRepairCost)," "),r(4),h("",m(27,21,"incident.priority"),":"),r(2),h(" ",t.priority," ")}}function Oe(n,i){n&1&&(c(0,"mat-card",1)(1,"mat-card-content"),s(2),p(3,"translate"),l()()),n&2&&(r(2),h(" ",m(3,1,"incident.empty")," "))}var ut=class n{operationsStore=d(at);incident=Y(()=>this.operationsStore.incidents().filter(i=>i.priority==="NORMAL").sort((i,t)=>new Date(t.registeredAt).getTime()-new Date(i.registeredAt).getTime())[0]);static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-next-urgent-incident-card"]],decls:2,vars:1,consts:[["appearance","outlined","role","article",1,"incident-card"],["appearance","outlined",1,"incident-card"]],template:function(t,e){if(t&1&&Z(0,He,29,23,"mat-card",0)(1,Oe,4,3,"mat-card",1),t&2){let o;K((o=e.incident())?0:1,o)}},dependencies:[ct,rt,st,dt,re,lt,tt,Kt,T],encapsulation:2})};var ht=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-home"]],decls:18,vars:12,consts:[["aria-labelledby","home-title",1,"home-page"],[1,"page-header"],["id","home-title"],["aria-labelledby","fleet-analytics-title",1,"page-section"],["id","fleet-analytics-title"],["aria-labelledby","next-urgent-incident-title",1,"page-section"],["id","next-urgent-incident-title"]],template:function(t,e){t&1&&(c(0,"section",0)(1,"header",1)(2,"h1",2),s(3),p(4,"translate"),l(),c(5,"p"),s(6),p(7,"translate"),l()(),c(8,"section",3)(9,"h2",4),s(10),p(11,"translate"),l(),b(12,"app-vehicle-type-stats-grid"),l(),c(13,"section",5)(14,"h2",6),s(15),p(16,"translate"),l(),b(17,"app-next-urgent-incident-card"),l()()),t&2&&(r(3),f(m(4,4,"home.title")),r(3),f(m(7,6,"home.content")),r(4),h(" ",m(11,8,"analytics.title")," "),r(5),h(" ",m(16,10,"incident.next-urgent-title")," "))},dependencies:[ut,mt,T],styles:[".home-page[_ngcontent-%COMP%]{display:grid;gap:2rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0;font-size:2rem}.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.5rem 0 0;color:#4b5563}.page-section[_ngcontent-%COMP%]{display:grid;gap:1rem}.page-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:1.25rem}"]})};var Ve=()=>import("./chunk-MQ52O34Y.js").then(n=>n.PageNotFound),Me="Enterprise Fleet Manager",Se=[{path:"home",component:ht,title:`${Me} - Home`},{path:"operations",loadChildren:()=>import("./chunk-PYFFIC65.js").then(n=>n.operationsRoutes)},{path:"",redirectTo:"/home",pathMatch:"full"},{path:"**",loadComponent:Ve,title:`${Me} - Page Not Found`}];var Et=new k("TRANSLATE_HTTP_LOADER_CONFIG"),$e=(()=>{class n{http;config;constructor(){this.config=Lt({prefix:"/assets/i18n/",suffix:".json",enforceLoading:!1,useHttpBackend:!1},d(Et)),this.http=this.config.useHttpBackend?new et(d(wt)):d(et)}getTranslation(t){let e=this.config.enforceLoading?`?enforceLoading=${Date.now()}`:"";return this.http.get(`${this.config.prefix}${t}${this.config.suffix}${e}`)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=Pt({token:n,factory:n.\u0275fac})}return n})();function ke(n={}){let i=n.useHttpBackend??!1;return[{provide:Et,useValue:n},{provide:ie,useClass:$e,deps:[i?wt:et,Et]}]}var Ce={providers:[Ht(),ne(Se),Xt(),oe({loader:ke({prefix:"./assets/i18n/",suffix:".json"}),lang:"en",fallbackLang:"en"}),Ot(()=>{let n=d(nt);n.use(n.getBrowserLang()||"en")})]};var je=["*",[["mat-toolbar-row"]]],Ue=["*","mat-toolbar-row"],Rt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),Ie=(()=>{class n{_elementRef=d(C);_platform=d(se);_document=d(Ft);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,o,a){if(e&1&&O(a,Rt,5),e&2){let g;R(g=B())&&(o._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,o){e&2&&(qt(o.color?"mat-"+o.color:""),V("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Ue,decls:2,vars:0,template:function(e,o){e&1&&(E(je),S(0),S(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Xe=["button"],Ye=["*"];function tn(n,i){if(n&1&&(c(0,"div",2),b(1,"mat-pseudo-checkbox",6),l()),n&2){let t=J();r(),_("disabled",t.disabled)}}var De=new k("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Ee=new k("MatButtonToggleGroup"),en={provide:be,useExisting:At(()=>Bt),multi:!0},bt=class{source;value;constructor(i,t){this.source=i,this.value=t}},Bt=(()=>{class n{_changeDetector=d(xt);_dir=d(ot,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=d(Tt).getId("mat-button-toggle-group-");vertical=!1;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(e=>e.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new q;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new q;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=d(De,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this._hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new fe(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled||ge(t))return;let o=t.target.id,a=this._buttonToggles.toArray().findIndex(w=>w.buttonId===o),g=null;switch(t.keyCode){case 32:case 13:g=this._buttonToggles.get(a)||null;break;case 38:g=this._getNextButton(a,-1);break;case 37:g=this._getNextButton(a,this.dir==="ltr"?-1:1);break;case 40:g=this._getNextButton(a,1);break;case 39:g=this._getNextButton(a,this.dir==="ltr"?1:-1);break;default:return}g&&(t.preventDefault(),g._onButtonClick(),g.focus())}_emitChangeEvent(t){let e=new bt(t,this.value);this._rawValue=e.value,this._controlValueAccessorChangeFn(e.value),this.change.emit(e)}_syncButtonToggle(t,e,o=!1,a=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?e?this._selectionModel.select(t):this._selectionModel.deselect(t):a=!0,a?Promise.resolve().then(()=>this._updateModelValue(t,o)):this._updateModelValue(t,o)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(e=>t.value!=null&&e===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let e=this._buttonToggles.get(t);if(!e.disabled){e.tabIndex=0;break}}}_getNextButton(t,e){let o=this._buttonToggles;for(let a=1;a<=o.length;a++){let g=(t+e*a+o.length)%o.length,w=o.get(g);if(w&&!w.disabled)return w}return null}_setSelectionByValue(t){if(this._rawValue=t,!this._buttonToggles)return;let e=this._buttonToggles.toArray();if(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(o=>this._selectValue(o,e))):(this._clearSelection(),this._selectValue(t,e)),!this.multiple&&e.every(o=>o.tabIndex===-1)){for(let o of e)if(!o.disabled){o.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t,e){for(let o of e)if(o.value===t){o.checked=!0,this._selectionModel.select(o),this.multiple||(o.tabIndex=0);break}}_updateModelValue(t,e){e&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(e){return new(e||n)};static \u0275dir=z({type:n,selectors:[["mat-button-toggle-group"]],contentQueries:function(e,o,a){if(e&1&&O(a,Gt,5),e&2){let g;R(g=B())&&(o._buttonToggles=g)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(e,o){e&1&&H("keydown",function(g){return o._keydown(g)}),e&2&&(I("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),V("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",x],value:"value",multiple:[2,"multiple","multiple",x],disabled:[2,"disabled","disabled",x],disabledInteractive:[2,"disabledInteractive","disabledInteractive",x],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",x],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",x]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[X([en,{provide:Ee,useExisting:n}])]})}return n})(),Gt=(()=>{class n{_changeDetectorRef=d(xt);_elementRef=d(C);_focusMonitor=d(de);_idGenerator=d(Tt);_animationDisabled=pe();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(t){this._tabIndex.set(t)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new q;constructor(){d(ce).load(ue);let t=d(Ee,{optional:!0}),e=d(new Zt("tabindex"),{optional:!0})||"",o=d(De,{optional:!0});this._tabIndex=W(parseInt(e)||0),this.buttonToggleGroup=t,this._appearance=o&&o.appearance?o.appearance:"standard",this._disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let e=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);e&&(e.tabIndex=-1),this.tabIndex=0}this.change.emit(new bt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=u({type:n,selectors:[["mat-button-toggle"]],viewQuery:function(e,o){if(e&1&&Ut(Xe,5),e&2){let a;R(a=B())&&(o._buttonElement=a.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(e,o){e&1&&H("focus",function(){return o.focus()}),e&2&&(I("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),V("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",x],appearance:"appearance",checked:[2,"checked","checked",x],disabled:[2,"disabled","disabled",x],disabledInteractive:[2,"disabledInteractive","disabledInteractive",x]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:Ye,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(e,o){if(e&1&&(E(),c(0,"button",1,0),H("click",function(){return o._onButtonClick()}),Z(2,tn,2,1,"div",2),c(3,"span",3),S(4),l()(),b(5,"span",4)(6,"span",5)),e&2){let a=Qt(1);_("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),I("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),r(2),K(o.buttonToggleGroup&&(!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator||o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),r(4),_("matRippleTrigger",a)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[me,ve],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return n})();function nn(n,i){if(n&1){let t=jt();c(0,"mat-button-toggle",2),H("click",function(){let o=zt(t).$implicit,a=J();return Nt(a.useLanguage(o))}),s(1),l()}if(n&2){let t=i.$implicit;_("value",t),Vt("aria-label",t),r(),h(" ",t.toUpperCase()," ")}}var ft=class n{currentLang="en";languages=["en","es"];translate;constructor(){this.translate=d(nt),this.currentLang=this.translate.getCurrentLang()}useLanguage(i){this.translate.use(i),this.currentLang=i}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-language-switcher"]],decls:3,vars:1,consts:[["appearance","standard","aria-label","Preferred language","name","language",3,"value"],[3,"value","aria-label"],[3,"click","value","aria-label"]],template:function(t,e){t&1&&(c(0,"mat-button-toggle-group",0),N(1,nn,2,3,"mat-button-toggle",1,$t),l()),t&2&&(_("value",e.currentLang),r(),F(e.languages))},dependencies:[Bt,Gt],encapsulation:2})};var vt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-footer-content"]],decls:13,vars:9,consts:[[1,"footer-content"],["href","https://material.angular.dev/","target","_blank"],["href","https://ngx-translate.org/","target","_blank"]],template:function(t,e){t&1&&(M(0,"div",0)(1,"p"),s(2),p(3,"translate"),D(),M(4,"p"),s(5),p(6,"translate"),M(7,"a",1),s(8,"Angular Material"),D(),s(9),p(10,"translate"),M(11,"a",2),s(12,"ngx-translate"),D()()()),t&2&&(r(2),h("Copyright \xA9 2026 Enterprise Fleet Manager. ",m(3,3,"footer.rights")),r(3),h("",m(6,5,"footer.powered-by")," "),r(4),h(" ",m(10,7,"footer.and")," "))},dependencies:[T],styles:[".footer-content[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;height:80px;background-color:#708090;color:#fff;text-align:center;margin:0;padding:5px}"]})};var on=(n,i)=>i.label;function an(n,i){if(n&1&&(c(0,"a",2),s(1),p(2,"translate"),l()),n&2){let t=i.$implicit;_("routerLink",t.link),r(),f(m(2,2,t.label))}}var yt=class n{options=[{link:"/home",label:"option.home"},{link:"/operations/rentals/new",label:"option.new-rental"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-layout"]],decls:11,vars:0,consts:[["src","https://logo.clearbit.com/enterprise.com","alt","Enterprise Rent-A-Car logo",1,"brand-logo"],[1,"mat-spacer"],["mat-button","","routerLinkActive","active",3,"routerLink"]],template:function(t,e){t&1&&(c(0,"mat-toolbar")(1,"mat-toolbar-row"),b(2,"img",0),c(3,"h1"),s(4,"Enterprise Fleet Manager"),l(),b(5,"div",1),N(6,an,3,4,"a",2,on),b(8,"app-language-switcher"),l()(),b(9,"router-outlet")(10,"app-footer-content")),t&2&&(r(6),F(e.options))},dependencies:[Yt,te,Rt,Ie,he,ee,ft,vt,T],styles:[".mat-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]})};var _t=class n{title=W("ea11990u202410254");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=u({type:n,selectors:[["app-root"]],decls:1,vars:0,template:function(t,e){t&1&&b(0,"app-layout")},dependencies:[yt],encapsulation:2})};Jt(_t,Ce).catch(n=>console.error(n));
