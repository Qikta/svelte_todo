<script>
  export let title;
  export let content;
</script>

<div class="ui form">
  <div class="field">
    <label>Title name</label>
    <input type="text" placeholder="Title name" bind:value={title}>
  </div>
  <div class="field">
    <textarea class="" placeholder="content" bind:value={content}></textarea>
  </div>
</div>
