import { fromBinary, toJson, type JsonValue } from "@bufbuild/protobuf";
import { SharedContactSchema } from "./gen/meshtastic/admin_pb";
import { ChannelSetSchema } from "./gen/meshtastic/apponly_pb";

const normalizeBase64 = (base64: string): string => {
    const normalized = base64.replace(/-/g, '+').replace(/_/g, '/');
    const paddingNeeded = (4 - (normalized.length % 4)) % 4;
    return normalized + '='.repeat(paddingNeeded);
};

export type DecodedResult = {
    type: 'ChannelSet' | 'SharedContact';
    data: JsonValue;
};

export const decodeMeshtasticURL = (url: string): DecodedResult => {
    const base64Fragment = url.split('#').pop();
    if (!base64Fragment) {
        throw new Error("Invalid URL: No base64 fragment found.");
    }

    const base64 = normalizeBase64(base64Fragment);
    const buffer = Uint8Array.from(atob(base64), c => c.charCodeAt(0));

    try {
        const channelSet = fromBinary(ChannelSetSchema, buffer);
        if (channelSet.settings && channelSet.settings.length > 0) {
            return { type: 'ChannelSet', data: toJson(ChannelSetSchema, channelSet) };
        }
    } catch (e) { }

    try {
        const sharedContact = fromBinary(SharedContactSchema, buffer);
        if (sharedContact.user) {
            return { type: 'SharedContact', data: toJson(SharedContactSchema, sharedContact) };
        }
    } catch (e) {
        throw new Error("Buffer could not be decoded as ChannelSet or SharedContact.");
    }

    throw new Error("Decoded data did not match known types.");
};
