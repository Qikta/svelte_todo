<script>
  import {push} from 'svelte-spa-router';
  import NoteList from './components/NoteList.svelte';
  import { loadNotes } from './lib/storage';

  const userNotes = loadNotes();
</script>

<div class="ui container">
  <h1 class="ui center aligned icon header">
    <i class="tasks icon"></i>
    Svelte Note
  </h1>
  <NoteList notes={userNotes} />
  <div class="fluid ui teal button" on:click={()=> push('/add')}>
    New Note
  </div>
</div>

