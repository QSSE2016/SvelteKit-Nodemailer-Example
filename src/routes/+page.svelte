<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  const { form }: { form: any } = $props();
</script>

{#if form}
  {#if form.success}
    <p style="color: green;">Email was sent succesfully!</p>
  {:else}
    <p style="color: red;">
      Oops, something went wrong while sending your email
    </p>
  {/if}
{/if}

<form method="POST" action="?/signup" use:enhance>
  <label for="name"> Name </label>
  <input type="text" name="name" required />
  <label for="email"> Email </label>
  <input type="email" name="email" required />
  <button type="submit"> I'm Interested </button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
