(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),s=n(4),i=n(3),c=n(5),o=n(9),u=n(0),l=n.n(u),h=n(7),m=n.n(h),p=n(8),d=n.n(p);n(16);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(o.a)(t[n],3),r=a[0],s=a[1],i=a[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return[e[r],[r,s,i]]}return null}var f=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).state={component_index:""},e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){this.setState({component_index:this.props.component_index})}},{key:"render",value:function(){var e=this,t=!1;if(this.props.win_array){var n=this.props.win_array[0];n&&n.findIndex(function(n){n===e.state.component_index&&(t=!0)})}var a=d()({square:!0,active:t});return l.a.createElement("button",{className:a,onClick:this.props.onClick},this.props.value)}}]),t}(l.a.Component),b=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"renderSquare",value:function(e){var t=this;return l.a.createElement(f,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},win_array:this.props.win_array,component_index:e})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),l.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),l.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(l.a.Component),y=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0,win_array:null},e}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();v(n)||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n}]),xIsNext:!this.state.xIsNext,stepNumber:t.length}))}},{key:"jumpTo",value:function(e){this.setState({xIsNext:!(e%2),stepNumber:e})}},{key:"render",value:function(){var e,t=this,n=this.state.history,a=n[this.state.stepNumber],r=v(a.squares),s=null,i=n.map(function(e,n){var a=n?"move # ".concat(n):"Game start";return l.a.createElement("li",{key:n},l.a.createElement("a",{href:"#",onClick:function(){t.jumpTo(n)}},a))});return r?(e="Winnder:"+r,s=r.slice(1,4)):e="Next player: ".concat(this.state.xIsNext?"X":"O"),l.a.createElement("div",{className:"game"},l.a.createElement("div",{className:"game-board"},l.a.createElement(b,{squares:a.squares,onClick:function(e){return t.handleClick(e)},win_array:s})),l.a.createElement("div",{className:"game-info"},l.a.createElement("div",null,e),l.a.createElement("ol",null,i)))}}]),t}(l.a.Component);m.a.render(l.a.createElement(y,null),document.getElementById("root"))},16:function(e,t,n){}},[[10,2,1]]]);
//# sourceMappingURL=main.6153004f.chunk.js.map