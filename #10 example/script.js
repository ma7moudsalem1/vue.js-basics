new Vue ({
	el: '#app',
	data: {
		lists:['Apple', 'banana', 'orange'],
		newItem: ''
	},

	methods:{
		removeItem(item){
			var index = this.lists.indexOf(item);
			this.lists.splice(index, 1);
		},
		addItem(){
			this.lists.push(this.newItem);
			this.newItem = ''
		}
	}
});