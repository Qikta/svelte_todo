<script>
  import {push} from 'svelte-spa-router';
  export let notes;
</script>

<div class="ui segments note">
  {#each notes as note, index}
    <div class="ui segment" on:click={() => push(`/edit/${index}`)}>
      <div class="ui large header">{note.title}</div>
      <div class="">{note.content}</div>
    </div>
  {/each}
</div>



