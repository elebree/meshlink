# Meshtastic Link Decoder

A browser-based tool for decoding [Meshtastic](https://meshtastic.org/) URLs with channels or contacts into human-readable JSON.

All decoding happens locally in the browser. No data is sent to any server.

## Demo

[Open Meshtastic Link Decoder](https://elebree.github.io/meshlink)

## Types of Meshtastic URLs

Meshtastic uses special URL formats to share configuration data in a compact and portable way. These links can be exchanged between devices or users to quickly set up networks or contacts.

The most common types are:

- **Channel Links** contain channel settings, such as frequency, encryption keys, and modulation parameters.
- **Contact Links** share a single contact identity or node information (e.g., long name, short name, hardware ID).

## How Meshtastic URLs Are Encoded

Meshtastic URLs are a compact, URL-safe representation of binary protobuf messages. The encoding process works as follows:

1. **Protobuf Serialization**
   Configuration objects (channel, contact, etc.) are serialized using Meshtastic’s protobuf schema.

2. **Base64-URL Encoding**
   The binary blob is encoded using a URL-safe variant of Base64 (replacing `+` and `/` with `-` and `_`). This ensures compatibility with browsers and messaging apps.

3. **Prefixing with Path Identifier**
   The encoded data is appended to a base URL, typically `https://meshtastic.org/`, with a single-letter path to indicate the type:

- `/e/` → Encoded **channel**
- `/c/` → Encoded **contact**

4. **Decoding**
   To reverse the process:

- Extract the Base64 string from the URL.
- Decode it back into binary.
- Parse the protobuf message into JSON.

This tool automates that decoding process entirely within your browser.
