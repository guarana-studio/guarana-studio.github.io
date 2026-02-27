<script lang="ts">
    import { CONTACT_URL, GITHUB_URL } from "$lib/const";
</script>

<div class="flex items-center justify-between">
    <a href="/" title="Guarana Studio">
        <img src="/logo.svg" class="size-16" alt="Guarana Studio" />
    </a>
    <div class="flex gap-8 items-center">
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" class="font-semibold text-orange-700">GitHub</a>
        <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" class="font-semibold text-orange-700">Contact</a>
    </div>
</div>
