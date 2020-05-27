<script>
  import {push} from 'svelte-spa-router';
  import NoteEditor from './components/NoteEditor.svelte';
  import { loadNotes, overwriteNote } from './lib/storage';

  export let params = {};

  const note = loadNotes()[params.id];

  let title = note.title;
  let content = note.content;

  const onSave = () => {
    overwriteNote(params.id, {title, content});
    push('/');
  };
</script>

<div class="ui segment">
  <NoteEditor bind:title={title} bind:content={content} />
  <div class="ui fluid green button" on:click={onSave} disabled={!title || !content}>
    Finished!
  </div>  
</div>

<style>
  .ui.green.button {
    margin-top: 1em;
  }
</style>
