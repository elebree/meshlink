<script lang="ts">
  import { browser } from "$app/environment";
  import Prism from "prismjs";
  import "prismjs/components/prism-json";
  import "prismjs/themes/prism-tomorrow.css";
  import QRCode from "qrcode";
  import { onDestroy, onMount, tick } from "svelte";
  import { decodeMeshtasticURL, type DecodedResult } from "../lib/Decoder";

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

    if (browser) {
      const currentHash = decodeURIComponent(location.hash.slice(1));
      if (trimmed !== currentHash) {
        history.replaceState(null, "", "#" + encodeURIComponent(trimmed));
      }
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
  if (browser) {
    onMount(() => {
      decodeFromHash();
      window.addEventListener("hashchange", decodeFromHash);
    });

    onDestroy(() => {
      window.removeEventListener("hashchange", decodeFromHash);
    });
  }
</script>

<div class="container">
  <!-- Left column: input -->
  <div class="left">
    <div class="info-box">
      This tool decodes <strong>Meshtastic</strong> links and extracts the
      embedded configuration or channel information. Paste a link or use a URL
      with a <code>#fragment</code> to auto-decode.
    </div>

    <div class="disclaimer-box">
      All decoding happens locally in your browser. This site does not transmit
      or store any Meshtastic data. Be cautious when sharing links, as they may
      contain private network or device details.
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
