Vue.component('btn', {
	template: 
	`
	<a class="button is-dark">Launch modal</a>

	`
});

Vue.component('modal', {
	template: 
	`
		<div class="modal is-active">
	  <div class="modal-background"></div>
	  <div class="modal-card">
	    <header class="modal-card-head">
	      <p class="modal-card-title">
	      	<slot></slot>
	      </p>
	      <button class="delete" aria-label="close"></button>
	    </header>
	    <section class="modal-card-body">
	      <slot name="content"></slot>
	    </section>
	    <footer class="modal-card-foot">
	      <button class="button is-success">Save changes</button>
	      <button class="button">Cancel</button>
	    </footer>
	  </div>
	</div>
	
	`
});

new Vue ({
	el: '#app'
});