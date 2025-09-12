import { meshtastic } from './protobuf.js';
const { ChannelSet, SharedContact } = meshtastic;

export type IChannelSet = meshtastic.IChannelSet;
export type ISharedContact = meshtastic.ISharedContact;

const normalizeBase64 = (base64: string): string => {
    const normalized = base64.replace(/-/g, '+').replace(/_/g, '/');
    const paddingNeeded = (4 - (normalized.length % 4)) % 4;
    return normalized + '='.repeat(paddingNeeded);
};

export type DecodedResult = {
    type: 'ChannelSet' | 'SharedContact';
    data: IChannelSet | ISharedContact;
};

export const decodeMeshtasticURL = (url: string): DecodedResult => {
    const base64Fragment = url.split('#').pop();
    if (!base64Fragment) {
        throw new Error("Invalid URL: No base64 fragment found.");
    }

    const base64 = normalizeBase64(base64Fragment);
    const buffer = Uint8Array.from(atob(base64), c => c.charCodeAt(0));

    try {
        const channelSet = ChannelSet.decode(buffer);
        if (channelSet.settings && channelSet.settings.length > 0) {
            return { type: 'ChannelSet', data: channelSet };
        }
    } catch (e) { }

    try {
        const sharedContact = SharedContact.decode(buffer);
        if (sharedContact.user) {
            return { type: 'SharedContact', data: sharedContact };
        }
    } catch (e) {
        throw new Error("Buffer could not be decoded as ChannelSet or SharedContact.");
    }

    throw new Error("Decoded data did not match known types.");
};
