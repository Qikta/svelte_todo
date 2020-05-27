<script>
  import { push } from 'svelte-spa-router';
  import NoteEditor from './components/NoteEditor.svelte';
  import { addNote } from './lib/storage';

  let title = 'New note';
  let content = '';

  const onSave = () => {
    addNote({title, content});
    push('/');
  };
</script>

<div class="ui segment">
  <NoteEditor bind:title={title} bind:content={content} />
  <div class="ui fluid green  button" on:click={onSave} disable={!title || !content}>
    Add
  </div>
</div>

<style>
  .ui.green.button {
    margin-top: 1em;
  }
</style>
