AFRAME.registerComponent ('pages',{
schema: {
	pages: {type:'array', default: [
		{
		page: 'page1',
		color: 'gray'
		},
		{
		page: 'page2',
		color: 'light blue'
		},
		{
		page: 'page3',
		color: 'black'
		},
		{
		page: 'page4',
		color: 'pink'
		},
		{
		page: 'page5',
		color: 'yellow'
		},
		
	]},
	pageIndex: {type:'int', default: 0}
},
	init: function (){
		var pageEl = this.pageEl = document.querySelector('[layer]');
		pageEl.object3D.position.set(0, 1.8, -2.5);

		var papgeIndex = this.data.pageIndex;

		window.addEventListener("keydown",(e) =>{
			if(e.key === "ArrowRight" & pageIndex < 4) {
				pageIndex +=1; 
				this.turnPage(pageIndex);
			}
			if(e.key === "ArrowLeft" & pageIndex > 0) {
				pageIndex -=1; 
				this.turnPage(pageIndex);
			}
		});
	},
	turnPage: function (pageIndex){
		var pages = this.data.pages;
		var pageId = pages[pageIndex].page;
		var color = pages[pageIndex].color;

		this.pageEl.setAttribute('layer', 'src', '#' + pageId);
		this.el.sceneEl.setAttribute('background', 'color', color);
	},
});
