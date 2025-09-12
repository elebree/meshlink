<script lang="ts">
  import { onMount, tick } from "svelte";
  import { decodeMeshtasticURL, type DecodedResult } from "./decoder";
  import Prism from "prismjs";
  import "prismjs/components/prism-json";
  import "prismjs/themes/prism-tomorrow.css"; // You can change to prism-dark.css for dark mode

  let input: string = "";
  let decoded: DecodedResult | null = null;
  let error: string | null = null;

  const exampleURL =
    "https://meshtastic.org/e/#CisSIANumm0eLMrIHWiL18TEMiPd9yhGrhWXnh2bYgZ8AWU8GgdlbGVicmVlEgwIATgDQApIAVAbaAE";

  function decodeFromHash() {
    const hash = decodeURIComponent(location.hash.slice(1));
    input = hash;

    if (!hash) {
      decoded = null;
      error = null;
      return;
    }

    try {
      decoded = decodeMeshtasticURL(hash.trim());
      error = null;
    } catch (err) {
      decoded = null;
      error = err instanceof Error ? err.message : String(err);
    }
  }

  // Highlight updated JSON after decoding
  $: if (decoded) {
    tick().then(() => {
      Prism.highlightAll();
    });
  }

  // Keep input and hash in sync
  $: if (input && input !== decodeURIComponent(location.hash.slice(1))) {
    history.replaceState(null, "", "#" + encodeURIComponent(input.trim()));
    decodeFromHash();
  }

  decodeFromHash();
  window.addEventListener("hashchange", decodeFromHash);
</script>

<main>
  <h1>Meshtastic Link Decoder</h1>

  <div class="container">
    <!-- Left column: input -->
    <div class="left">
      <div class="info-box">
        This tool decodes <strong>Meshtastic</strong> links and extracts the
        embedded configuration or channel information. Paste a link or use a URL
        with a <code>#fragment</code> to auto-decode.
      </div>

      <div class="disclaimer-box">
        All decoding happens locally in your browser. This site does not
        transmit or store any Meshtastic data. Be cautious when sharing links,
        as they may contain private network or device details.
      </div>

      <textarea
        bind:value={input}
        rows="3"
        placeholder="Paste a Meshtastic link here..."
      ></textarea>

      {#if !input}
        <p style="margin-top: 1rem;">
          Try this example:<br />
          <a href={"#" + encodeURIComponent(exampleURL)}>{exampleURL}</a>
        </p>
      {/if}
    </div>

    <!-- Right column: output -->
    <div class="right">
      {#if error}
        <div class="result error">❌ Error: {error}</div>
      {:else if decoded}
        <div class="result">
          <strong>Type:</strong>
          {decoded.type}
          <pre class="language-json"><code
              >{JSON.stringify(decoded.data, null, 2)}</code
            ></pre>
        </div>
      {:else}
        <div class="result">Decoded output will appear here.</div>
      {/if}
    </div>
  </div>

  <footer>
    Meshtastic® is a registered trademark of Meshtastic LLC. Meshtastic
    software components are released under various licenses, see GitHub for
    details. No warranty is provided - use at your own risk.
  </footer>
</main>