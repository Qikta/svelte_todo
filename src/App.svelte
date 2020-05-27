<script>
  import Home from './Home.svelte';
  import Router from 'svelte-spa-router';
  import Add from './Add.svelte';
  import Edit from './Edit.svelte';

  const routes = {
    '/' : Home,
    '/add' : Add,
    '/edit/:id': Edit,
    '*' : Home
  };
</script>

<main>
  <Router routes={routes}></Router>
</main>

<style>
	main {
    background: #f5f5f5;
		padding: 2em;
		max-width: 600px;
		margin: 5em auto;
    overflow-y: auto;
	}
</style>
