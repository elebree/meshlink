<script lang="ts">
  import Prism from "prismjs";
  import "prismjs/components/prism-json";
  import "prismjs/themes/prism-tomorrow.css";
  import QRCode from "qrcode";
  import { onDestroy, onMount, tick } from "svelte";
  import { decodeMeshtasticURL, type DecodedResult } from "./decoder";

  let input: string = "";
  let decoded: DecodedResult | null = null;
  let error: string | null = null;
  let qrCodeDataUrl: string | null = null;

  const exampleURL =
    "https://meshtastic.org/e/#CisSIANumm0eLMrIHWiL18TEMiPd9yhGrhWXnh2bYgZ8AWU8GgdlbGVicmVlEgwIATgDQApIAVAbaAE";

  function decodeFromHash() {
    const hash = decodeURIComponent(location.hash.slice(1));
    input = hash;
  }

  $: {
    const trimmed = input.trim();

    if (!trimmed) {
      decoded = null;
      error = null;
    } else {
      try {
        decoded = decodeMeshtasticURL(trimmed);
        error = null;
      } catch (err) {
        decoded = null;
        error = err instanceof Error ? err.message : String(err);
      }
    }

    const currentHash = decodeURIComponent(location.hash.slice(1));
    if (trimmed !== currentHash) {
      history.replaceState(null, "", "#" + encodeURIComponent(trimmed));
    }

    // Generate QR code for the input
    if (trimmed) {
      QRCode.toDataURL(trimmed, { margin: 1, width: 180 })
        .then((url) => {
          qrCodeDataUrl = url;
        })
        .catch(() => {
          qrCodeDataUrl = null;
        });
    } else {
      qrCodeDataUrl = null;
    }
  }

  // Highlight updated JSON after decoding
  $: if (decoded) {
    tick().then(() => {
      Prism.highlightAll();
    });
  }

  onMount(() => {
    decodeFromHash();
    window.addEventListener("hashchange", decodeFromHash);
  });

  onDestroy(() => {
    window.removeEventListener("hashchange", decodeFromHash);
  });
</script>

<main>
  <div class="header">
    <h1>Meshtastic Link Decoder</h1>
    <a
      href="https://github.com/elebree/meshlink?tab=readme-ov-file#meshtastic-link-decoder"
      class="github-icon"
      target="_blank"
      aria-label="View source on GitHub"
    >
      <svg width="26" height="26" viewBox="0 0 16 16" fill="currentColor"
        ><path
          d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
        ></path></svg
      >
    </a>
  </div>
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

      {#if qrCodeDataUrl && !error}
        <div class="qr-box">
          <img src={qrCodeDataUrl} alt="QR Code for input URL" />
        </div>
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
          {#key JSON.stringify(decoded.data)}
            <pre class="language-json"><code
                >{JSON.stringify(decoded.data, null, 2)}</code
              ></pre>
          {/key}
        </div>
      {:else}
        <div class="result">
          Decoded output will appear here.
          {#if !input}
            <p style="margin-top: 1rem;">
              Try this example:<br />
              <a href={"#" + encodeURIComponent(exampleURL)}>{exampleURL}</a>
            </p>
          {/if}
        </div>
      {/if}
    </div>
  </div>

  <footer>
    Meshtastic® is a registered trademark of Meshtastic LLC. Meshtastic
    software components are released under various licenses, see GitHub for
    details. No warranty is provided - use at your own risk.
  </footer>
</main>
