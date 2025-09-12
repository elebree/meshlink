import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace meshtastic. */
export namespace meshtastic {

    /** Properties of an AdminMessage. */
    interface IAdminMessage {

        /** AdminMessage sessionPasskey */
        sessionPasskey?: (Uint8Array|null);

        /** AdminMessage getChannelRequest */
        getChannelRequest?: (number|null);

        /** AdminMessage getChannelResponse */
        getChannelResponse?: (meshtastic.IChannel|null);

        /** AdminMessage getOwnerRequest */
        getOwnerRequest?: (boolean|null);

        /** AdminMessage getOwnerResponse */
        getOwnerResponse?: (meshtastic.IUser|null);

        /** AdminMessage getConfigRequest */
        getConfigRequest?: (meshtastic.AdminMessage.ConfigType|null);

        /** AdminMessage getConfigResponse */
        getConfigResponse?: (meshtastic.IConfig|null);

        /** AdminMessage getModuleConfigRequest */
        getModuleConfigRequest?: (meshtastic.AdminMessage.ModuleConfigType|null);

        /** AdminMessage getModuleConfigResponse */
        getModuleConfigResponse?: (meshtastic.IModuleConfig|null);

        /** AdminMessage getCannedMessageModuleMessagesRequest */
        getCannedMessageModuleMessagesRequest?: (boolean|null);

        /** AdminMessage getCannedMessageModuleMessagesResponse */
        getCannedMessageModuleMessagesResponse?: (string|null);

        /** AdminMessage getDeviceMetadataRequest */
        getDeviceMetadataRequest?: (boolean|null);

        /** AdminMessage getDeviceMetadataResponse */
        getDeviceMetadataResponse?: (meshtastic.IDeviceMetadata|null);

        /** AdminMessage getRingtoneRequest */
        getRingtoneRequest?: (boolean|null);

        /** AdminMessage getRingtoneResponse */
        getRingtoneResponse?: (string|null);

        /** AdminMessage getDeviceConnectionStatusRequest */
        getDeviceConnectionStatusRequest?: (boolean|null);

        /** AdminMessage getDeviceConnectionStatusResponse */
        getDeviceConnectionStatusResponse?: (meshtastic.IDeviceConnectionStatus|null);

        /** AdminMessage setHamMode */
        setHamMode?: (meshtastic.IHamParameters|null);

        /** AdminMessage getNodeRemoteHardwarePinsRequest */
        getNodeRemoteHardwarePinsRequest?: (boolean|null);

        /** AdminMessage getNodeRemoteHardwarePinsResponse */
        getNodeRemoteHardwarePinsResponse?: (meshtastic.INodeRemoteHardwarePinsResponse|null);

        /** AdminMessage enterDfuModeRequest */
        enterDfuModeRequest?: (boolean|null);

        /** AdminMessage deleteFileRequest */
        deleteFileRequest?: (string|null);

        /** AdminMessage setScale */
        setScale?: (number|null);

        /** AdminMessage backupPreferences */
        backupPreferences?: (meshtastic.AdminMessage.BackupLocation|null);

        /** AdminMessage restorePreferences */
        restorePreferences?: (meshtastic.AdminMessage.BackupLocation|null);

        /** AdminMessage removeBackupPreferences */
        removeBackupPreferences?: (meshtastic.AdminMessage.BackupLocation|null);

        /** AdminMessage sendInputEvent */
        sendInputEvent?: (meshtastic.AdminMessage.IInputEvent|null);

        /** AdminMessage setOwner */
        setOwner?: (meshtastic.IUser|null);

        /** AdminMessage setChannel */
        setChannel?: (meshtastic.IChannel|null);

        /** AdminMessage setConfig */
        setConfig?: (meshtastic.IConfig|null);

        /** AdminMessage setModuleConfig */
        setModuleConfig?: (meshtastic.IModuleConfig|null);

        /** AdminMessage setCannedMessageModuleMessages */
        setCannedMessageModuleMessages?: (string|null);

        /** AdminMessage setRingtoneMessage */
        setRingtoneMessage?: (string|null);

        /** AdminMessage removeByNodenum */
        removeByNodenum?: (number|null);

        /** AdminMessage setFavoriteNode */
        setFavoriteNode?: (number|null);

        /** AdminMessage removeFavoriteNode */
        removeFavoriteNode?: (number|null);

        /** AdminMessage setFixedPosition */
        setFixedPosition?: (meshtastic.IPosition|null);

        /** AdminMessage removeFixedPosition */
        removeFixedPosition?: (boolean|null);

        /** AdminMessage setTimeOnly */
        setTimeOnly?: (number|null);

        /** AdminMessage getUiConfigRequest */
        getUiConfigRequest?: (boolean|null);

        /** AdminMessage getUiConfigResponse */
        getUiConfigResponse?: (meshtastic.IDeviceUIConfig|null);

        /** AdminMessage storeUiConfig */
        storeUiConfig?: (meshtastic.IDeviceUIConfig|null);

        /** AdminMessage setIgnoredNode */
        setIgnoredNode?: (number|null);

        /** AdminMessage removeIgnoredNode */
        removeIgnoredNode?: (number|null);

        /** AdminMessage beginEditSettings */
        beginEditSettings?: (boolean|null);

        /** AdminMessage commitEditSettings */
        commitEditSettings?: (boolean|null);

        /** AdminMessage addContact */
        addContact?: (meshtastic.ISharedContact|null);

        /** AdminMessage keyVerification */
        keyVerification?: (meshtastic.IKeyVerificationAdmin|null);

        /** AdminMessage factoryResetDevice */
        factoryResetDevice?: (number|null);

        /** AdminMessage rebootOtaSeconds */
        rebootOtaSeconds?: (number|null);

        /** AdminMessage exitSimulator */
        exitSimulator?: (boolean|null);

        /** AdminMessage rebootSeconds */
        rebootSeconds?: (number|null);

        /** AdminMessage shutdownSeconds */
        shutdownSeconds?: (number|null);

        /** AdminMessage factoryResetConfig */
        factoryResetConfig?: (number|null);

        /** AdminMessage nodedbReset */
        nodedbReset?: (number|null);
    }

    /** Represents an AdminMessage. */
    class AdminMessage implements IAdminMessage {

        /**
         * Constructs a new AdminMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IAdminMessage);

        /** AdminMessage sessionPasskey. */
        public sessionPasskey: Uint8Array;

        /** AdminMessage getChannelRequest. */
        public getChannelRequest?: (number|null);

        /** AdminMessage getChannelResponse. */
        public getChannelResponse?: (meshtastic.IChannel|null);

        /** AdminMessage getOwnerRequest. */
        public getOwnerRequest?: (boolean|null);

        /** AdminMessage getOwnerResponse. */
        public getOwnerResponse?: (meshtastic.IUser|null);

        /** AdminMessage getConfigRequest. */
        public getConfigRequest?: (meshtastic.AdminMessage.ConfigType|null);

        /** AdminMessage getConfigResponse. */
        public getConfigResponse?: (meshtastic.IConfig|null);

        /** AdminMessage getModuleConfigRequest. */
        public getModuleConfigRequest?: (meshtastic.AdminMessage.ModuleConfigType|null);

        /** AdminMessage getModuleConfigResponse. */
        public getModuleConfigResponse?: (meshtastic.IModuleConfig|null);

        /** AdminMessage getCannedMessageModuleMessagesRequest. */
        public getCannedMessageModuleMessagesRequest?: (boolean|null);

        /** AdminMessage getCannedMessageModuleMessagesResponse. */
        public getCannedMessageModuleMessagesResponse?: (string|null);

        /** AdminMessage getDeviceMetadataRequest. */
        public getDeviceMetadataRequest?: (boolean|null);

        /** AdminMessage getDeviceMetadataResponse. */
        public getDeviceMetadataResponse?: (meshtastic.IDeviceMetadata|null);

        /** AdminMessage getRingtoneRequest. */
        public getRingtoneRequest?: (boolean|null);

        /** AdminMessage getRingtoneResponse. */
        public getRingtoneResponse?: (string|null);

        /** AdminMessage getDeviceConnectionStatusRequest. */
        public getDeviceConnectionStatusRequest?: (boolean|null);

        /** AdminMessage getDeviceConnectionStatusResponse. */
        public getDeviceConnectionStatusResponse?: (meshtastic.IDeviceConnectionStatus|null);

        /** AdminMessage setHamMode. */
        public setHamMode?: (meshtastic.IHamParameters|null);

        /** AdminMessage getNodeRemoteHardwarePinsRequest. */
        public getNodeRemoteHardwarePinsRequest?: (boolean|null);

        /** AdminMessage getNodeRemoteHardwarePinsResponse. */
        public getNodeRemoteHardwarePinsResponse?: (meshtastic.INodeRemoteHardwarePinsResponse|null);

        /** AdminMessage enterDfuModeRequest. */
        public enterDfuModeRequest?: (boolean|null);

        /** AdminMessage deleteFileRequest. */
        public deleteFileRequest?: (string|null);

        /** AdminMessage setScale. */
        public setScale?: (number|null);

        /** AdminMessage backupPreferences. */
        public backupPreferences?: (meshtastic.AdminMessage.BackupLocation|null);

        /** AdminMessage restorePreferences. */
        public restorePreferences?: (meshtastic.AdminMessage.BackupLocation|null);

        /** AdminMessage removeBackupPreferences. */
        public removeBackupPreferences?: (meshtastic.AdminMessage.BackupLocation|null);

        /** AdminMessage sendInputEvent. */
        public sendInputEvent?: (meshtastic.AdminMessage.IInputEvent|null);

        /** AdminMessage setOwner. */
        public setOwner?: (meshtastic.IUser|null);

        /** AdminMessage setChannel. */
        public setChannel?: (meshtastic.IChannel|null);

        /** AdminMessage setConfig. */
        public setConfig?: (meshtastic.IConfig|null);

        /** AdminMessage setModuleConfig. */
        public setModuleConfig?: (meshtastic.IModuleConfig|null);

        /** AdminMessage setCannedMessageModuleMessages. */
        public setCannedMessageModuleMessages?: (string|null);

        /** AdminMessage setRingtoneMessage. */
        public setRingtoneMessage?: (string|null);

        /** AdminMessage removeByNodenum. */
        public removeByNodenum?: (number|null);

        /** AdminMessage setFavoriteNode. */
        public setFavoriteNode?: (number|null);

        /** AdminMessage removeFavoriteNode. */
        public removeFavoriteNode?: (number|null);

        /** AdminMessage setFixedPosition. */
        public setFixedPosition?: (meshtastic.IPosition|null);

        /** AdminMessage removeFixedPosition. */
        public removeFixedPosition?: (boolean|null);

        /** AdminMessage setTimeOnly. */
        public setTimeOnly?: (number|null);

        /** AdminMessage getUiConfigRequest. */
        public getUiConfigRequest?: (boolean|null);

        /** AdminMessage getUiConfigResponse. */
        public getUiConfigResponse?: (meshtastic.IDeviceUIConfig|null);

        /** AdminMessage storeUiConfig. */
        public storeUiConfig?: (meshtastic.IDeviceUIConfig|null);

        /** AdminMessage setIgnoredNode. */
        public setIgnoredNode?: (number|null);

        /** AdminMessage removeIgnoredNode. */
        public removeIgnoredNode?: (number|null);

        /** AdminMessage beginEditSettings. */
        public beginEditSettings?: (boolean|null);

        /** AdminMessage commitEditSettings. */
        public commitEditSettings?: (boolean|null);

        /** AdminMessage addContact. */
        public addContact?: (meshtastic.ISharedContact|null);

        /** AdminMessage keyVerification. */
        public keyVerification?: (meshtastic.IKeyVerificationAdmin|null);

        /** AdminMessage factoryResetDevice. */
        public factoryResetDevice?: (number|null);

        /** AdminMessage rebootOtaSeconds. */
        public rebootOtaSeconds?: (number|null);

        /** AdminMessage exitSimulator. */
        public exitSimulator?: (boolean|null);

        /** AdminMessage rebootSeconds. */
        public rebootSeconds?: (number|null);

        /** AdminMessage shutdownSeconds. */
        public shutdownSeconds?: (number|null);

        /** AdminMessage factoryResetConfig. */
        public factoryResetConfig?: (number|null);

        /** AdminMessage nodedbReset. */
        public nodedbReset?: (number|null);

        /** AdminMessage payloadVariant. */
        public payloadVariant?: ("getChannelRequest"|"getChannelResponse"|"getOwnerRequest"|"getOwnerResponse"|"getConfigRequest"|"getConfigResponse"|"getModuleConfigRequest"|"getModuleConfigResponse"|"getCannedMessageModuleMessagesRequest"|"getCannedMessageModuleMessagesResponse"|"getDeviceMetadataRequest"|"getDeviceMetadataResponse"|"getRingtoneRequest"|"getRingtoneResponse"|"getDeviceConnectionStatusRequest"|"getDeviceConnectionStatusResponse"|"setHamMode"|"getNodeRemoteHardwarePinsRequest"|"getNodeRemoteHardwarePinsResponse"|"enterDfuModeRequest"|"deleteFileRequest"|"setScale"|"backupPreferences"|"restorePreferences"|"removeBackupPreferences"|"sendInputEvent"|"setOwner"|"setChannel"|"setConfig"|"setModuleConfig"|"setCannedMessageModuleMessages"|"setRingtoneMessage"|"removeByNodenum"|"setFavoriteNode"|"removeFavoriteNode"|"setFixedPosition"|"removeFixedPosition"|"setTimeOnly"|"getUiConfigRequest"|"getUiConfigResponse"|"storeUiConfig"|"setIgnoredNode"|"removeIgnoredNode"|"beginEditSettings"|"commitEditSettings"|"addContact"|"keyVerification"|"factoryResetDevice"|"rebootOtaSeconds"|"exitSimulator"|"rebootSeconds"|"shutdownSeconds"|"factoryResetConfig"|"nodedbReset");

        /**
         * Creates a new AdminMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminMessage instance
         */
        public static create(properties?: meshtastic.IAdminMessage): meshtastic.AdminMessage;

        /**
         * Encodes the specified AdminMessage message. Does not implicitly {@link meshtastic.AdminMessage.verify|verify} messages.
         * @param message AdminMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IAdminMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.AdminMessage;

        /**
         * Creates an AdminMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminMessage
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.AdminMessage;

        /**
         * Creates a plain object from an AdminMessage message. Also converts values to other types if specified.
         * @param message AdminMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.AdminMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AdminMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace AdminMessage {

        /** ConfigType enum. */
        enum ConfigType {
            DEVICE_CONFIG = 0,
            POSITION_CONFIG = 1,
            POWER_CONFIG = 2,
            NETWORK_CONFIG = 3,
            DISPLAY_CONFIG = 4,
            LORA_CONFIG = 5,
            BLUETOOTH_CONFIG = 6,
            SECURITY_CONFIG = 7,
            SESSIONKEY_CONFIG = 8,
            DEVICEUI_CONFIG = 9
        }

        /** ModuleConfigType enum. */
        enum ModuleConfigType {
            MQTT_CONFIG = 0,
            SERIAL_CONFIG = 1,
            EXTNOTIF_CONFIG = 2,
            STOREFORWARD_CONFIG = 3,
            RANGETEST_CONFIG = 4,
            TELEMETRY_CONFIG = 5,
            CANNEDMSG_CONFIG = 6,
            AUDIO_CONFIG = 7,
            REMOTEHARDWARE_CONFIG = 8,
            NEIGHBORINFO_CONFIG = 9,
            AMBIENTLIGHTING_CONFIG = 10,
            DETECTIONSENSOR_CONFIG = 11,
            PAXCOUNTER_CONFIG = 12
        }

        /** BackupLocation enum. */
        enum BackupLocation {
            FLASH = 0,
            SD = 1
        }

        /** Properties of an InputEvent. */
        interface IInputEvent {

            /** InputEvent eventCode */
            eventCode?: (number|null);

            /** InputEvent kbChar */
            kbChar?: (number|null);

            /** InputEvent touchX */
            touchX?: (number|null);

            /** InputEvent touchY */
            touchY?: (number|null);
        }

        /** Represents an InputEvent. */
        class InputEvent implements IInputEvent {

            /**
             * Constructs a new InputEvent.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.AdminMessage.IInputEvent);

            /** InputEvent eventCode. */
            public eventCode: number;

            /** InputEvent kbChar. */
            public kbChar: number;

            /** InputEvent touchX. */
            public touchX: number;

            /** InputEvent touchY. */
            public touchY: number;

            /**
             * Creates a new InputEvent instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InputEvent instance
             */
            public static create(properties?: meshtastic.AdminMessage.IInputEvent): meshtastic.AdminMessage.InputEvent;

            /**
             * Encodes the specified InputEvent message. Does not implicitly {@link meshtastic.AdminMessage.InputEvent.verify|verify} messages.
             * @param message InputEvent message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.AdminMessage.IInputEvent, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InputEvent message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InputEvent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.AdminMessage.InputEvent;

            /**
             * Creates an InputEvent message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InputEvent
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.AdminMessage.InputEvent;

            /**
             * Creates a plain object from an InputEvent message. Also converts values to other types if specified.
             * @param message InputEvent
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.AdminMessage.InputEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InputEvent to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for InputEvent
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a HamParameters. */
    interface IHamParameters {

        /** HamParameters callSign */
        callSign?: (string|null);

        /** HamParameters txPower */
        txPower?: (number|null);

        /** HamParameters frequency */
        frequency?: (number|null);

        /** HamParameters shortName */
        shortName?: (string|null);
    }

    /** Represents a HamParameters. */
    class HamParameters implements IHamParameters {

        /**
         * Constructs a new HamParameters.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IHamParameters);

        /** HamParameters callSign. */
        public callSign: string;

        /** HamParameters txPower. */
        public txPower: number;

        /** HamParameters frequency. */
        public frequency: number;

        /** HamParameters shortName. */
        public shortName: string;

        /**
         * Creates a new HamParameters instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HamParameters instance
         */
        public static create(properties?: meshtastic.IHamParameters): meshtastic.HamParameters;

        /**
         * Encodes the specified HamParameters message. Does not implicitly {@link meshtastic.HamParameters.verify|verify} messages.
         * @param message HamParameters message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IHamParameters, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HamParameters message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HamParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.HamParameters;

        /**
         * Creates a HamParameters message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HamParameters
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.HamParameters;

        /**
         * Creates a plain object from a HamParameters message. Also converts values to other types if specified.
         * @param message HamParameters
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.HamParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HamParameters to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HamParameters
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeRemoteHardwarePinsResponse. */
    interface INodeRemoteHardwarePinsResponse {

        /** NodeRemoteHardwarePinsResponse nodeRemoteHardwarePins */
        nodeRemoteHardwarePins?: (meshtastic.INodeRemoteHardwarePin[]|null);
    }

    /** Represents a NodeRemoteHardwarePinsResponse. */
    class NodeRemoteHardwarePinsResponse implements INodeRemoteHardwarePinsResponse {

        /**
         * Constructs a new NodeRemoteHardwarePinsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INodeRemoteHardwarePinsResponse);

        /** NodeRemoteHardwarePinsResponse nodeRemoteHardwarePins. */
        public nodeRemoteHardwarePins: meshtastic.INodeRemoteHardwarePin[];

        /**
         * Creates a new NodeRemoteHardwarePinsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeRemoteHardwarePinsResponse instance
         */
        public static create(properties?: meshtastic.INodeRemoteHardwarePinsResponse): meshtastic.NodeRemoteHardwarePinsResponse;

        /**
         * Encodes the specified NodeRemoteHardwarePinsResponse message. Does not implicitly {@link meshtastic.NodeRemoteHardwarePinsResponse.verify|verify} messages.
         * @param message NodeRemoteHardwarePinsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INodeRemoteHardwarePinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeRemoteHardwarePinsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeRemoteHardwarePinsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.NodeRemoteHardwarePinsResponse;

        /**
         * Creates a NodeRemoteHardwarePinsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeRemoteHardwarePinsResponse
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.NodeRemoteHardwarePinsResponse;

        /**
         * Creates a plain object from a NodeRemoteHardwarePinsResponse message. Also converts values to other types if specified.
         * @param message NodeRemoteHardwarePinsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.NodeRemoteHardwarePinsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeRemoteHardwarePinsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeRemoteHardwarePinsResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SharedContact. */
    interface ISharedContact {

        /** SharedContact nodeNum */
        nodeNum?: (number|null);

        /** SharedContact user */
        user?: (meshtastic.IUser|null);

        /** SharedContact shouldIgnore */
        shouldIgnore?: (boolean|null);
    }

    /** Represents a SharedContact. */
    class SharedContact implements ISharedContact {

        /**
         * Constructs a new SharedContact.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.ISharedContact);

        /** SharedContact nodeNum. */
        public nodeNum: number;

        /** SharedContact user. */
        public user?: (meshtastic.IUser|null);

        /** SharedContact shouldIgnore. */
        public shouldIgnore: boolean;

        /**
         * Creates a new SharedContact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SharedContact instance
         */
        public static create(properties?: meshtastic.ISharedContact): meshtastic.SharedContact;

        /**
         * Encodes the specified SharedContact message. Does not implicitly {@link meshtastic.SharedContact.verify|verify} messages.
         * @param message SharedContact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.ISharedContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedContact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SharedContact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.SharedContact;

        /**
         * Creates a SharedContact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SharedContact
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.SharedContact;

        /**
         * Creates a plain object from a SharedContact message. Also converts values to other types if specified.
         * @param message SharedContact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.SharedContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SharedContact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SharedContact
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyVerificationAdmin. */
    interface IKeyVerificationAdmin {

        /** KeyVerificationAdmin messageType */
        messageType?: (meshtastic.KeyVerificationAdmin.MessageType|null);

        /** KeyVerificationAdmin remoteNodenum */
        remoteNodenum?: (number|null);

        /** KeyVerificationAdmin nonce */
        nonce?: (number|Long|null);

        /** KeyVerificationAdmin securityNumber */
        securityNumber?: (number|null);
    }

    /** Represents a KeyVerificationAdmin. */
    class KeyVerificationAdmin implements IKeyVerificationAdmin {

        /**
         * Constructs a new KeyVerificationAdmin.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IKeyVerificationAdmin);

        /** KeyVerificationAdmin messageType. */
        public messageType: meshtastic.KeyVerificationAdmin.MessageType;

        /** KeyVerificationAdmin remoteNodenum. */
        public remoteNodenum: number;

        /** KeyVerificationAdmin nonce. */
        public nonce: (number|Long);

        /** KeyVerificationAdmin securityNumber. */
        public securityNumber?: (number|null);

        /** KeyVerificationAdmin _securityNumber. */
        public _securityNumber?: "securityNumber";

        /**
         * Creates a new KeyVerificationAdmin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyVerificationAdmin instance
         */
        public static create(properties?: meshtastic.IKeyVerificationAdmin): meshtastic.KeyVerificationAdmin;

        /**
         * Encodes the specified KeyVerificationAdmin message. Does not implicitly {@link meshtastic.KeyVerificationAdmin.verify|verify} messages.
         * @param message KeyVerificationAdmin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IKeyVerificationAdmin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyVerificationAdmin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyVerificationAdmin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.KeyVerificationAdmin;

        /**
         * Creates a KeyVerificationAdmin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyVerificationAdmin
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.KeyVerificationAdmin;

        /**
         * Creates a plain object from a KeyVerificationAdmin message. Also converts values to other types if specified.
         * @param message KeyVerificationAdmin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.KeyVerificationAdmin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyVerificationAdmin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyVerificationAdmin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace KeyVerificationAdmin {

        /** MessageType enum. */
        enum MessageType {
            INITIATE_VERIFICATION = 0,
            PROVIDE_SECURITY_NUMBER = 1,
            DO_VERIFY = 2,
            DO_NOT_VERIFY = 3
        }
    }

    /** Properties of a ChannelSettings. */
    interface IChannelSettings {

        /** ChannelSettings channelNum */
        channelNum?: (number|null);

        /** ChannelSettings psk */
        psk?: (Uint8Array|null);

        /** ChannelSettings name */
        name?: (string|null);

        /** ChannelSettings id */
        id?: (number|null);

        /** ChannelSettings uplinkEnabled */
        uplinkEnabled?: (boolean|null);

        /** ChannelSettings downlinkEnabled */
        downlinkEnabled?: (boolean|null);

        /** ChannelSettings moduleSettings */
        moduleSettings?: (meshtastic.IModuleSettings|null);
    }

    /** Represents a ChannelSettings. */
    class ChannelSettings implements IChannelSettings {

        /**
         * Constructs a new ChannelSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IChannelSettings);

        /** ChannelSettings channelNum. */
        public channelNum: number;

        /** ChannelSettings psk. */
        public psk: Uint8Array;

        /** ChannelSettings name. */
        public name: string;

        /** ChannelSettings id. */
        public id: number;

        /** ChannelSettings uplinkEnabled. */
        public uplinkEnabled: boolean;

        /** ChannelSettings downlinkEnabled. */
        public downlinkEnabled: boolean;

        /** ChannelSettings moduleSettings. */
        public moduleSettings?: (meshtastic.IModuleSettings|null);

        /**
         * Creates a new ChannelSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelSettings instance
         */
        public static create(properties?: meshtastic.IChannelSettings): meshtastic.ChannelSettings;

        /**
         * Encodes the specified ChannelSettings message. Does not implicitly {@link meshtastic.ChannelSettings.verify|verify} messages.
         * @param message ChannelSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IChannelSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ChannelSettings;

        /**
         * Creates a ChannelSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelSettings
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ChannelSettings;

        /**
         * Creates a plain object from a ChannelSettings message. Also converts values to other types if specified.
         * @param message ChannelSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ChannelSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChannelSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ModuleSettings. */
    interface IModuleSettings {

        /** ModuleSettings positionPrecision */
        positionPrecision?: (number|null);

        /** ModuleSettings isClientMuted */
        isClientMuted?: (boolean|null);
    }

    /** Represents a ModuleSettings. */
    class ModuleSettings implements IModuleSettings {

        /**
         * Constructs a new ModuleSettings.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IModuleSettings);

        /** ModuleSettings positionPrecision. */
        public positionPrecision: number;

        /** ModuleSettings isClientMuted. */
        public isClientMuted: boolean;

        /**
         * Creates a new ModuleSettings instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModuleSettings instance
         */
        public static create(properties?: meshtastic.IModuleSettings): meshtastic.ModuleSettings;

        /**
         * Encodes the specified ModuleSettings message. Does not implicitly {@link meshtastic.ModuleSettings.verify|verify} messages.
         * @param message ModuleSettings message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IModuleSettings, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModuleSettings message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModuleSettings
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleSettings;

        /**
         * Creates a ModuleSettings message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModuleSettings
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ModuleSettings;

        /**
         * Creates a plain object from a ModuleSettings message. Also converts values to other types if specified.
         * @param message ModuleSettings
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ModuleSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModuleSettings to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ModuleSettings
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Channel. */
    interface IChannel {

        /** Channel index */
        index?: (number|null);

        /** Channel settings */
        settings?: (meshtastic.IChannelSettings|null);

        /** Channel role */
        role?: (meshtastic.Channel.Role|null);
    }

    /** Represents a Channel. */
    class Channel implements IChannel {

        /**
         * Constructs a new Channel.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IChannel);

        /** Channel index. */
        public index: number;

        /** Channel settings. */
        public settings?: (meshtastic.IChannelSettings|null);

        /** Channel role. */
        public role: meshtastic.Channel.Role;

        /**
         * Creates a new Channel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Channel instance
         */
        public static create(properties?: meshtastic.IChannel): meshtastic.Channel;

        /**
         * Encodes the specified Channel message. Does not implicitly {@link meshtastic.Channel.verify|verify} messages.
         * @param message Channel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Channel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Channel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Channel;

        /**
         * Creates a Channel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Channel
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Channel;

        /**
         * Creates a plain object from a Channel message. Also converts values to other types if specified.
         * @param message Channel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Channel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Channel
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Channel {

        /** Role enum. */
        enum Role {
            DISABLED = 0,
            PRIMARY = 1,
            SECONDARY = 2
        }
    }

    /** Properties of a Config. */
    interface IConfig {

        /** Config device */
        device?: (meshtastic.Config.IDeviceConfig|null);

        /** Config position */
        position?: (meshtastic.Config.IPositionConfig|null);

        /** Config power */
        power?: (meshtastic.Config.IPowerConfig|null);

        /** Config network */
        network?: (meshtastic.Config.INetworkConfig|null);

        /** Config display */
        display?: (meshtastic.Config.IDisplayConfig|null);

        /** Config lora */
        lora?: (meshtastic.Config.ILoRaConfig|null);

        /** Config bluetooth */
        bluetooth?: (meshtastic.Config.IBluetoothConfig|null);

        /** Config security */
        security?: (meshtastic.Config.ISecurityConfig|null);

        /** Config sessionkey */
        sessionkey?: (meshtastic.Config.ISessionkeyConfig|null);

        /** Config deviceUi */
        deviceUi?: (meshtastic.IDeviceUIConfig|null);
    }

    /** Represents a Config. */
    class Config implements IConfig {

        /**
         * Constructs a new Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IConfig);

        /** Config device. */
        public device?: (meshtastic.Config.IDeviceConfig|null);

        /** Config position. */
        public position?: (meshtastic.Config.IPositionConfig|null);

        /** Config power. */
        public power?: (meshtastic.Config.IPowerConfig|null);

        /** Config network. */
        public network?: (meshtastic.Config.INetworkConfig|null);

        /** Config display. */
        public display?: (meshtastic.Config.IDisplayConfig|null);

        /** Config lora. */
        public lora?: (meshtastic.Config.ILoRaConfig|null);

        /** Config bluetooth. */
        public bluetooth?: (meshtastic.Config.IBluetoothConfig|null);

        /** Config security. */
        public security?: (meshtastic.Config.ISecurityConfig|null);

        /** Config sessionkey. */
        public sessionkey?: (meshtastic.Config.ISessionkeyConfig|null);

        /** Config deviceUi. */
        public deviceUi?: (meshtastic.IDeviceUIConfig|null);

        /** Config payloadVariant. */
        public payloadVariant?: ("device"|"position"|"power"|"network"|"display"|"lora"|"bluetooth"|"security"|"sessionkey"|"deviceUi");

        /**
         * Creates a new Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Config instance
         */
        public static create(properties?: meshtastic.IConfig): meshtastic.Config;

        /**
         * Encodes the specified Config message. Does not implicitly {@link meshtastic.Config.verify|verify} messages.
         * @param message Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config;

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Config
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Config;

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @param message Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Config to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Config
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Config {

        /** Properties of a DeviceConfig. */
        interface IDeviceConfig {

            /** DeviceConfig role */
            role?: (meshtastic.Config.DeviceConfig.Role|null);

            /** DeviceConfig serialEnabled */
            serialEnabled?: (boolean|null);

            /** DeviceConfig buttonGpio */
            buttonGpio?: (number|null);

            /** DeviceConfig buzzerGpio */
            buzzerGpio?: (number|null);

            /** DeviceConfig rebroadcastMode */
            rebroadcastMode?: (meshtastic.Config.DeviceConfig.RebroadcastMode|null);

            /** DeviceConfig nodeInfoBroadcastSecs */
            nodeInfoBroadcastSecs?: (number|null);

            /** DeviceConfig doubleTapAsButtonPress */
            doubleTapAsButtonPress?: (boolean|null);

            /** DeviceConfig isManaged */
            isManaged?: (boolean|null);

            /** DeviceConfig disableTripleClick */
            disableTripleClick?: (boolean|null);

            /** DeviceConfig tzdef */
            tzdef?: (string|null);

            /** DeviceConfig ledHeartbeatDisabled */
            ledHeartbeatDisabled?: (boolean|null);

            /** DeviceConfig buzzerMode */
            buzzerMode?: (meshtastic.Config.DeviceConfig.BuzzerMode|null);
        }

        /** Represents a DeviceConfig. */
        class DeviceConfig implements IDeviceConfig {

            /**
             * Constructs a new DeviceConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.IDeviceConfig);

            /** DeviceConfig role. */
            public role: meshtastic.Config.DeviceConfig.Role;

            /** DeviceConfig serialEnabled. */
            public serialEnabled: boolean;

            /** DeviceConfig buttonGpio. */
            public buttonGpio: number;

            /** DeviceConfig buzzerGpio. */
            public buzzerGpio: number;

            /** DeviceConfig rebroadcastMode. */
            public rebroadcastMode: meshtastic.Config.DeviceConfig.RebroadcastMode;

            /** DeviceConfig nodeInfoBroadcastSecs. */
            public nodeInfoBroadcastSecs: number;

            /** DeviceConfig doubleTapAsButtonPress. */
            public doubleTapAsButtonPress: boolean;

            /** DeviceConfig isManaged. */
            public isManaged: boolean;

            /** DeviceConfig disableTripleClick. */
            public disableTripleClick: boolean;

            /** DeviceConfig tzdef. */
            public tzdef: string;

            /** DeviceConfig ledHeartbeatDisabled. */
            public ledHeartbeatDisabled: boolean;

            /** DeviceConfig buzzerMode. */
            public buzzerMode: meshtastic.Config.DeviceConfig.BuzzerMode;

            /**
             * Creates a new DeviceConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeviceConfig instance
             */
            public static create(properties?: meshtastic.Config.IDeviceConfig): meshtastic.Config.DeviceConfig;

            /**
             * Encodes the specified DeviceConfig message. Does not implicitly {@link meshtastic.Config.DeviceConfig.verify|verify} messages.
             * @param message DeviceConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.IDeviceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeviceConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeviceConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.DeviceConfig;

            /**
             * Creates a DeviceConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeviceConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.DeviceConfig;

            /**
             * Creates a plain object from a DeviceConfig message. Also converts values to other types if specified.
             * @param message DeviceConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.DeviceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeviceConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DeviceConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DeviceConfig {

            /** Role enum. */
            enum Role {
                CLIENT = 0,
                CLIENT_MUTE = 1,
                ROUTER = 2,
                ROUTER_CLIENT = 3,
                REPEATER = 4,
                TRACKER = 5,
                SENSOR = 6,
                TAK = 7,
                CLIENT_HIDDEN = 8,
                LOST_AND_FOUND = 9,
                TAK_TRACKER = 10,
                ROUTER_LATE = 11
            }

            /** RebroadcastMode enum. */
            enum RebroadcastMode {
                ALL = 0,
                ALL_SKIP_DECODING = 1,
                LOCAL_ONLY = 2,
                KNOWN_ONLY = 3,
                NONE = 4,
                CORE_PORTNUMS_ONLY = 5
            }

            /** BuzzerMode enum. */
            enum BuzzerMode {
                ALL_ENABLED = 0,
                DISABLED = 1,
                NOTIFICATIONS_ONLY = 2,
                SYSTEM_ONLY = 3,
                DIRECT_MSG_ONLY = 4
            }
        }

        /** Properties of a PositionConfig. */
        interface IPositionConfig {

            /** PositionConfig positionBroadcastSecs */
            positionBroadcastSecs?: (number|null);

            /** PositionConfig positionBroadcastSmartEnabled */
            positionBroadcastSmartEnabled?: (boolean|null);

            /** PositionConfig fixedPosition */
            fixedPosition?: (boolean|null);

            /** PositionConfig gpsEnabled */
            gpsEnabled?: (boolean|null);

            /** PositionConfig gpsUpdateInterval */
            gpsUpdateInterval?: (number|null);

            /** PositionConfig gpsAttemptTime */
            gpsAttemptTime?: (number|null);

            /** PositionConfig positionFlags */
            positionFlags?: (number|null);

            /** PositionConfig rxGpio */
            rxGpio?: (number|null);

            /** PositionConfig txGpio */
            txGpio?: (number|null);

            /** PositionConfig broadcastSmartMinimumDistance */
            broadcastSmartMinimumDistance?: (number|null);

            /** PositionConfig broadcastSmartMinimumIntervalSecs */
            broadcastSmartMinimumIntervalSecs?: (number|null);

            /** PositionConfig gpsEnGpio */
            gpsEnGpio?: (number|null);

            /** PositionConfig gpsMode */
            gpsMode?: (meshtastic.Config.PositionConfig.GpsMode|null);
        }

        /** Represents a PositionConfig. */
        class PositionConfig implements IPositionConfig {

            /**
             * Constructs a new PositionConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.IPositionConfig);

            /** PositionConfig positionBroadcastSecs. */
            public positionBroadcastSecs: number;

            /** PositionConfig positionBroadcastSmartEnabled. */
            public positionBroadcastSmartEnabled: boolean;

            /** PositionConfig fixedPosition. */
            public fixedPosition: boolean;

            /** PositionConfig gpsEnabled. */
            public gpsEnabled: boolean;

            /** PositionConfig gpsUpdateInterval. */
            public gpsUpdateInterval: number;

            /** PositionConfig gpsAttemptTime. */
            public gpsAttemptTime: number;

            /** PositionConfig positionFlags. */
            public positionFlags: number;

            /** PositionConfig rxGpio. */
            public rxGpio: number;

            /** PositionConfig txGpio. */
            public txGpio: number;

            /** PositionConfig broadcastSmartMinimumDistance. */
            public broadcastSmartMinimumDistance: number;

            /** PositionConfig broadcastSmartMinimumIntervalSecs. */
            public broadcastSmartMinimumIntervalSecs: number;

            /** PositionConfig gpsEnGpio. */
            public gpsEnGpio: number;

            /** PositionConfig gpsMode. */
            public gpsMode: meshtastic.Config.PositionConfig.GpsMode;

            /**
             * Creates a new PositionConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PositionConfig instance
             */
            public static create(properties?: meshtastic.Config.IPositionConfig): meshtastic.Config.PositionConfig;

            /**
             * Encodes the specified PositionConfig message. Does not implicitly {@link meshtastic.Config.PositionConfig.verify|verify} messages.
             * @param message PositionConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.IPositionConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PositionConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PositionConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.PositionConfig;

            /**
             * Creates a PositionConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PositionConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.PositionConfig;

            /**
             * Creates a plain object from a PositionConfig message. Also converts values to other types if specified.
             * @param message PositionConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.PositionConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PositionConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PositionConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PositionConfig {

            /** PositionFlags enum. */
            enum PositionFlags {
                UNSET = 0,
                ALTITUDE = 1,
                ALTITUDE_MSL = 2,
                GEOIDAL_SEPARATION = 4,
                DOP = 8,
                HVDOP = 16,
                SATINVIEW = 32,
                SEQ_NO = 64,
                TIMESTAMP = 128,
                HEADING = 256,
                SPEED = 512
            }

            /** GpsMode enum. */
            enum GpsMode {
                DISABLED = 0,
                ENABLED = 1,
                NOT_PRESENT = 2
            }
        }

        /** Properties of a PowerConfig. */
        interface IPowerConfig {

            /** PowerConfig isPowerSaving */
            isPowerSaving?: (boolean|null);

            /** PowerConfig onBatteryShutdownAfterSecs */
            onBatteryShutdownAfterSecs?: (number|null);

            /** PowerConfig adcMultiplierOverride */
            adcMultiplierOverride?: (number|null);

            /** PowerConfig waitBluetoothSecs */
            waitBluetoothSecs?: (number|null);

            /** PowerConfig sdsSecs */
            sdsSecs?: (number|null);

            /** PowerConfig lsSecs */
            lsSecs?: (number|null);

            /** PowerConfig minWakeSecs */
            minWakeSecs?: (number|null);

            /** PowerConfig deviceBatteryInaAddress */
            deviceBatteryInaAddress?: (number|null);

            /** PowerConfig powermonEnables */
            powermonEnables?: (number|Long|null);
        }

        /** Represents a PowerConfig. */
        class PowerConfig implements IPowerConfig {

            /**
             * Constructs a new PowerConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.IPowerConfig);

            /** PowerConfig isPowerSaving. */
            public isPowerSaving: boolean;

            /** PowerConfig onBatteryShutdownAfterSecs. */
            public onBatteryShutdownAfterSecs: number;

            /** PowerConfig adcMultiplierOverride. */
            public adcMultiplierOverride: number;

            /** PowerConfig waitBluetoothSecs. */
            public waitBluetoothSecs: number;

            /** PowerConfig sdsSecs. */
            public sdsSecs: number;

            /** PowerConfig lsSecs. */
            public lsSecs: number;

            /** PowerConfig minWakeSecs. */
            public minWakeSecs: number;

            /** PowerConfig deviceBatteryInaAddress. */
            public deviceBatteryInaAddress: number;

            /** PowerConfig powermonEnables. */
            public powermonEnables: (number|Long);

            /**
             * Creates a new PowerConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PowerConfig instance
             */
            public static create(properties?: meshtastic.Config.IPowerConfig): meshtastic.Config.PowerConfig;

            /**
             * Encodes the specified PowerConfig message. Does not implicitly {@link meshtastic.Config.PowerConfig.verify|verify} messages.
             * @param message PowerConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.IPowerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PowerConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PowerConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.PowerConfig;

            /**
             * Creates a PowerConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PowerConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.PowerConfig;

            /**
             * Creates a plain object from a PowerConfig message. Also converts values to other types if specified.
             * @param message PowerConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.PowerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PowerConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PowerConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NetworkConfig. */
        interface INetworkConfig {

            /** NetworkConfig wifiEnabled */
            wifiEnabled?: (boolean|null);

            /** NetworkConfig wifiSsid */
            wifiSsid?: (string|null);

            /** NetworkConfig wifiPsk */
            wifiPsk?: (string|null);

            /** NetworkConfig ntpServer */
            ntpServer?: (string|null);

            /** NetworkConfig ethEnabled */
            ethEnabled?: (boolean|null);

            /** NetworkConfig addressMode */
            addressMode?: (meshtastic.Config.NetworkConfig.AddressMode|null);

            /** NetworkConfig ipv4Config */
            ipv4Config?: (meshtastic.Config.NetworkConfig.IIpV4Config|null);

            /** NetworkConfig rsyslogServer */
            rsyslogServer?: (string|null);

            /** NetworkConfig enabledProtocols */
            enabledProtocols?: (number|null);

            /** NetworkConfig ipv6Enabled */
            ipv6Enabled?: (boolean|null);
        }

        /** Represents a NetworkConfig. */
        class NetworkConfig implements INetworkConfig {

            /**
             * Constructs a new NetworkConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.INetworkConfig);

            /** NetworkConfig wifiEnabled. */
            public wifiEnabled: boolean;

            /** NetworkConfig wifiSsid. */
            public wifiSsid: string;

            /** NetworkConfig wifiPsk. */
            public wifiPsk: string;

            /** NetworkConfig ntpServer. */
            public ntpServer: string;

            /** NetworkConfig ethEnabled. */
            public ethEnabled: boolean;

            /** NetworkConfig addressMode. */
            public addressMode: meshtastic.Config.NetworkConfig.AddressMode;

            /** NetworkConfig ipv4Config. */
            public ipv4Config?: (meshtastic.Config.NetworkConfig.IIpV4Config|null);

            /** NetworkConfig rsyslogServer. */
            public rsyslogServer: string;

            /** NetworkConfig enabledProtocols. */
            public enabledProtocols: number;

            /** NetworkConfig ipv6Enabled. */
            public ipv6Enabled: boolean;

            /**
             * Creates a new NetworkConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NetworkConfig instance
             */
            public static create(properties?: meshtastic.Config.INetworkConfig): meshtastic.Config.NetworkConfig;

            /**
             * Encodes the specified NetworkConfig message. Does not implicitly {@link meshtastic.Config.NetworkConfig.verify|verify} messages.
             * @param message NetworkConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.INetworkConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NetworkConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NetworkConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.NetworkConfig;

            /**
             * Creates a NetworkConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NetworkConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.NetworkConfig;

            /**
             * Creates a plain object from a NetworkConfig message. Also converts values to other types if specified.
             * @param message NetworkConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.NetworkConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NetworkConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NetworkConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace NetworkConfig {

            /** AddressMode enum. */
            enum AddressMode {
                DHCP = 0,
                STATIC = 1
            }

            /** Properties of an IpV4Config. */
            interface IIpV4Config {

                /** IpV4Config ip */
                ip?: (number|null);

                /** IpV4Config gateway */
                gateway?: (number|null);

                /** IpV4Config subnet */
                subnet?: (number|null);

                /** IpV4Config dns */
                dns?: (number|null);
            }

            /** Represents an IpV4Config. */
            class IpV4Config implements IIpV4Config {

                /**
                 * Constructs a new IpV4Config.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: meshtastic.Config.NetworkConfig.IIpV4Config);

                /** IpV4Config ip. */
                public ip: number;

                /** IpV4Config gateway. */
                public gateway: number;

                /** IpV4Config subnet. */
                public subnet: number;

                /** IpV4Config dns. */
                public dns: number;

                /**
                 * Creates a new IpV4Config instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns IpV4Config instance
                 */
                public static create(properties?: meshtastic.Config.NetworkConfig.IIpV4Config): meshtastic.Config.NetworkConfig.IpV4Config;

                /**
                 * Encodes the specified IpV4Config message. Does not implicitly {@link meshtastic.Config.NetworkConfig.IpV4Config.verify|verify} messages.
                 * @param message IpV4Config message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: meshtastic.Config.NetworkConfig.IIpV4Config, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IpV4Config message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IpV4Config
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.NetworkConfig.IpV4Config;

                /**
                 * Creates an IpV4Config message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IpV4Config
                 */
                public static fromObject(object: { [k: string]: any }): meshtastic.Config.NetworkConfig.IpV4Config;

                /**
                 * Creates a plain object from an IpV4Config message. Also converts values to other types if specified.
                 * @param message IpV4Config
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: meshtastic.Config.NetworkConfig.IpV4Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IpV4Config to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for IpV4Config
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** ProtocolFlags enum. */
            enum ProtocolFlags {
                NO_BROADCAST = 0,
                UDP_BROADCAST = 1
            }
        }

        /** Properties of a DisplayConfig. */
        interface IDisplayConfig {

            /** DisplayConfig screenOnSecs */
            screenOnSecs?: (number|null);

            /** DisplayConfig gpsFormat */
            gpsFormat?: (meshtastic.Config.DisplayConfig.GpsCoordinateFormat|null);

            /** DisplayConfig autoScreenCarouselSecs */
            autoScreenCarouselSecs?: (number|null);

            /** DisplayConfig compassNorthTop */
            compassNorthTop?: (boolean|null);

            /** DisplayConfig flipScreen */
            flipScreen?: (boolean|null);

            /** DisplayConfig units */
            units?: (meshtastic.Config.DisplayConfig.DisplayUnits|null);

            /** DisplayConfig oled */
            oled?: (meshtastic.Config.DisplayConfig.OledType|null);

            /** DisplayConfig displaymode */
            displaymode?: (meshtastic.Config.DisplayConfig.DisplayMode|null);

            /** DisplayConfig headingBold */
            headingBold?: (boolean|null);

            /** DisplayConfig wakeOnTapOrMotion */
            wakeOnTapOrMotion?: (boolean|null);

            /** DisplayConfig compassOrientation */
            compassOrientation?: (meshtastic.Config.DisplayConfig.CompassOrientation|null);

            /** DisplayConfig use_12hClock */
            use_12hClock?: (boolean|null);
        }

        /** Represents a DisplayConfig. */
        class DisplayConfig implements IDisplayConfig {

            /**
             * Constructs a new DisplayConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.IDisplayConfig);

            /** DisplayConfig screenOnSecs. */
            public screenOnSecs: number;

            /** DisplayConfig gpsFormat. */
            public gpsFormat: meshtastic.Config.DisplayConfig.GpsCoordinateFormat;

            /** DisplayConfig autoScreenCarouselSecs. */
            public autoScreenCarouselSecs: number;

            /** DisplayConfig compassNorthTop. */
            public compassNorthTop: boolean;

            /** DisplayConfig flipScreen. */
            public flipScreen: boolean;

            /** DisplayConfig units. */
            public units: meshtastic.Config.DisplayConfig.DisplayUnits;

            /** DisplayConfig oled. */
            public oled: meshtastic.Config.DisplayConfig.OledType;

            /** DisplayConfig displaymode. */
            public displaymode: meshtastic.Config.DisplayConfig.DisplayMode;

            /** DisplayConfig headingBold. */
            public headingBold: boolean;

            /** DisplayConfig wakeOnTapOrMotion. */
            public wakeOnTapOrMotion: boolean;

            /** DisplayConfig compassOrientation. */
            public compassOrientation: meshtastic.Config.DisplayConfig.CompassOrientation;

            /** DisplayConfig use_12hClock. */
            public use_12hClock: boolean;

            /**
             * Creates a new DisplayConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DisplayConfig instance
             */
            public static create(properties?: meshtastic.Config.IDisplayConfig): meshtastic.Config.DisplayConfig;

            /**
             * Encodes the specified DisplayConfig message. Does not implicitly {@link meshtastic.Config.DisplayConfig.verify|verify} messages.
             * @param message DisplayConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.IDisplayConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DisplayConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DisplayConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.DisplayConfig;

            /**
             * Creates a DisplayConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DisplayConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.DisplayConfig;

            /**
             * Creates a plain object from a DisplayConfig message. Also converts values to other types if specified.
             * @param message DisplayConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.DisplayConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DisplayConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DisplayConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DisplayConfig {

            /** GpsCoordinateFormat enum. */
            enum GpsCoordinateFormat {
                DEC = 0,
                DMS = 1,
                UTM = 2,
                MGRS = 3,
                OLC = 4,
                OSGR = 5
            }

            /** DisplayUnits enum. */
            enum DisplayUnits {
                METRIC = 0,
                IMPERIAL = 1
            }

            /** OledType enum. */
            enum OledType {
                OLED_AUTO = 0,
                OLED_SSD1306 = 1,
                OLED_SH1106 = 2,
                OLED_SH1107 = 3,
                OLED_SH1107_128_128 = 4
            }

            /** DisplayMode enum. */
            enum DisplayMode {
                DEFAULT = 0,
                TWOCOLOR = 1,
                INVERTED = 2,
                COLOR = 3
            }

            /** CompassOrientation enum. */
            enum CompassOrientation {
                DEGREES_0 = 0,
                DEGREES_90 = 1,
                DEGREES_180 = 2,
                DEGREES_270 = 3,
                DEGREES_0_INVERTED = 4,
                DEGREES_90_INVERTED = 5,
                DEGREES_180_INVERTED = 6,
                DEGREES_270_INVERTED = 7
            }
        }

        /** Properties of a LoRaConfig. */
        interface ILoRaConfig {

            /** LoRaConfig usePreset */
            usePreset?: (boolean|null);

            /** LoRaConfig modemPreset */
            modemPreset?: (meshtastic.Config.LoRaConfig.ModemPreset|null);

            /** LoRaConfig bandwidth */
            bandwidth?: (number|null);

            /** LoRaConfig spreadFactor */
            spreadFactor?: (number|null);

            /** LoRaConfig codingRate */
            codingRate?: (number|null);

            /** LoRaConfig frequencyOffset */
            frequencyOffset?: (number|null);

            /** LoRaConfig region */
            region?: (meshtastic.Config.LoRaConfig.RegionCode|null);

            /** LoRaConfig hopLimit */
            hopLimit?: (number|null);

            /** LoRaConfig txEnabled */
            txEnabled?: (boolean|null);

            /** LoRaConfig txPower */
            txPower?: (number|null);

            /** LoRaConfig channelNum */
            channelNum?: (number|null);

            /** LoRaConfig overrideDutyCycle */
            overrideDutyCycle?: (boolean|null);

            /** LoRaConfig sx126xRxBoostedGain */
            sx126xRxBoostedGain?: (boolean|null);

            /** LoRaConfig overrideFrequency */
            overrideFrequency?: (number|null);

            /** LoRaConfig paFanDisabled */
            paFanDisabled?: (boolean|null);

            /** LoRaConfig ignoreIncoming */
            ignoreIncoming?: (number[]|null);

            /** LoRaConfig ignoreMqtt */
            ignoreMqtt?: (boolean|null);

            /** LoRaConfig configOkToMqtt */
            configOkToMqtt?: (boolean|null);
        }

        /** Represents a LoRaConfig. */
        class LoRaConfig implements ILoRaConfig {

            /**
             * Constructs a new LoRaConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.ILoRaConfig);

            /** LoRaConfig usePreset. */
            public usePreset: boolean;

            /** LoRaConfig modemPreset. */
            public modemPreset: meshtastic.Config.LoRaConfig.ModemPreset;

            /** LoRaConfig bandwidth. */
            public bandwidth: number;

            /** LoRaConfig spreadFactor. */
            public spreadFactor: number;

            /** LoRaConfig codingRate. */
            public codingRate: number;

            /** LoRaConfig frequencyOffset. */
            public frequencyOffset: number;

            /** LoRaConfig region. */
            public region: meshtastic.Config.LoRaConfig.RegionCode;

            /** LoRaConfig hopLimit. */
            public hopLimit: number;

            /** LoRaConfig txEnabled. */
            public txEnabled: boolean;

            /** LoRaConfig txPower. */
            public txPower: number;

            /** LoRaConfig channelNum. */
            public channelNum: number;

            /** LoRaConfig overrideDutyCycle. */
            public overrideDutyCycle: boolean;

            /** LoRaConfig sx126xRxBoostedGain. */
            public sx126xRxBoostedGain: boolean;

            /** LoRaConfig overrideFrequency. */
            public overrideFrequency: number;

            /** LoRaConfig paFanDisabled. */
            public paFanDisabled: boolean;

            /** LoRaConfig ignoreIncoming. */
            public ignoreIncoming: number[];

            /** LoRaConfig ignoreMqtt. */
            public ignoreMqtt: boolean;

            /** LoRaConfig configOkToMqtt. */
            public configOkToMqtt: boolean;

            /**
             * Creates a new LoRaConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LoRaConfig instance
             */
            public static create(properties?: meshtastic.Config.ILoRaConfig): meshtastic.Config.LoRaConfig;

            /**
             * Encodes the specified LoRaConfig message. Does not implicitly {@link meshtastic.Config.LoRaConfig.verify|verify} messages.
             * @param message LoRaConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.ILoRaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LoRaConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LoRaConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.LoRaConfig;

            /**
             * Creates a LoRaConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LoRaConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.LoRaConfig;

            /**
             * Creates a plain object from a LoRaConfig message. Also converts values to other types if specified.
             * @param message LoRaConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.LoRaConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LoRaConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LoRaConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LoRaConfig {

            /** RegionCode enum. */
            enum RegionCode {
                UNSET = 0,
                US = 1,
                EU_433 = 2,
                EU_868 = 3,
                CN = 4,
                JP = 5,
                ANZ = 6,
                KR = 7,
                TW = 8,
                RU = 9,
                IN = 10,
                NZ_865 = 11,
                TH = 12,
                LORA_24 = 13,
                UA_433 = 14,
                UA_868 = 15,
                MY_433 = 16,
                MY_919 = 17,
                SG_923 = 18,
                PH_433 = 19,
                PH_868 = 20,
                PH_915 = 21,
                ANZ_433 = 22,
                KZ_433 = 23,
                KZ_863 = 24,
                NP_865 = 25,
                BR_902 = 26
            }

            /** ModemPreset enum. */
            enum ModemPreset {
                LONG_FAST = 0,
                LONG_SLOW = 1,
                VERY_LONG_SLOW = 2,
                MEDIUM_SLOW = 3,
                MEDIUM_FAST = 4,
                SHORT_SLOW = 5,
                SHORT_FAST = 6,
                LONG_MODERATE = 7,
                SHORT_TURBO = 8
            }
        }

        /** Properties of a BluetoothConfig. */
        interface IBluetoothConfig {

            /** BluetoothConfig enabled */
            enabled?: (boolean|null);

            /** BluetoothConfig mode */
            mode?: (meshtastic.Config.BluetoothConfig.PairingMode|null);

            /** BluetoothConfig fixedPin */
            fixedPin?: (number|null);
        }

        /** Represents a BluetoothConfig. */
        class BluetoothConfig implements IBluetoothConfig {

            /**
             * Constructs a new BluetoothConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.IBluetoothConfig);

            /** BluetoothConfig enabled. */
            public enabled: boolean;

            /** BluetoothConfig mode. */
            public mode: meshtastic.Config.BluetoothConfig.PairingMode;

            /** BluetoothConfig fixedPin. */
            public fixedPin: number;

            /**
             * Creates a new BluetoothConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BluetoothConfig instance
             */
            public static create(properties?: meshtastic.Config.IBluetoothConfig): meshtastic.Config.BluetoothConfig;

            /**
             * Encodes the specified BluetoothConfig message. Does not implicitly {@link meshtastic.Config.BluetoothConfig.verify|verify} messages.
             * @param message BluetoothConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.IBluetoothConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BluetoothConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BluetoothConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.BluetoothConfig;

            /**
             * Creates a BluetoothConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BluetoothConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.BluetoothConfig;

            /**
             * Creates a plain object from a BluetoothConfig message. Also converts values to other types if specified.
             * @param message BluetoothConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.BluetoothConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BluetoothConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BluetoothConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace BluetoothConfig {

            /** PairingMode enum. */
            enum PairingMode {
                RANDOM_PIN = 0,
                FIXED_PIN = 1,
                NO_PIN = 2
            }
        }

        /** Properties of a SecurityConfig. */
        interface ISecurityConfig {

            /** SecurityConfig publicKey */
            publicKey?: (Uint8Array|null);

            /** SecurityConfig privateKey */
            privateKey?: (Uint8Array|null);

            /** SecurityConfig adminKey */
            adminKey?: (Uint8Array[]|null);

            /** SecurityConfig isManaged */
            isManaged?: (boolean|null);

            /** SecurityConfig serialEnabled */
            serialEnabled?: (boolean|null);

            /** SecurityConfig debugLogApiEnabled */
            debugLogApiEnabled?: (boolean|null);

            /** SecurityConfig adminChannelEnabled */
            adminChannelEnabled?: (boolean|null);
        }

        /** Represents a SecurityConfig. */
        class SecurityConfig implements ISecurityConfig {

            /**
             * Constructs a new SecurityConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.ISecurityConfig);

            /** SecurityConfig publicKey. */
            public publicKey: Uint8Array;

            /** SecurityConfig privateKey. */
            public privateKey: Uint8Array;

            /** SecurityConfig adminKey. */
            public adminKey: Uint8Array[];

            /** SecurityConfig isManaged. */
            public isManaged: boolean;

            /** SecurityConfig serialEnabled. */
            public serialEnabled: boolean;

            /** SecurityConfig debugLogApiEnabled. */
            public debugLogApiEnabled: boolean;

            /** SecurityConfig adminChannelEnabled. */
            public adminChannelEnabled: boolean;

            /**
             * Creates a new SecurityConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SecurityConfig instance
             */
            public static create(properties?: meshtastic.Config.ISecurityConfig): meshtastic.Config.SecurityConfig;

            /**
             * Encodes the specified SecurityConfig message. Does not implicitly {@link meshtastic.Config.SecurityConfig.verify|verify} messages.
             * @param message SecurityConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.ISecurityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SecurityConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SecurityConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.SecurityConfig;

            /**
             * Creates a SecurityConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SecurityConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.SecurityConfig;

            /**
             * Creates a plain object from a SecurityConfig message. Also converts values to other types if specified.
             * @param message SecurityConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.SecurityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SecurityConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SecurityConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SessionkeyConfig. */
        interface ISessionkeyConfig {
        }

        /** Represents a SessionkeyConfig. */
        class SessionkeyConfig implements ISessionkeyConfig {

            /**
             * Constructs a new SessionkeyConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.Config.ISessionkeyConfig);

            /**
             * Creates a new SessionkeyConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SessionkeyConfig instance
             */
            public static create(properties?: meshtastic.Config.ISessionkeyConfig): meshtastic.Config.SessionkeyConfig;

            /**
             * Encodes the specified SessionkeyConfig message. Does not implicitly {@link meshtastic.Config.SessionkeyConfig.verify|verify} messages.
             * @param message SessionkeyConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.Config.ISessionkeyConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SessionkeyConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SessionkeyConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Config.SessionkeyConfig;

            /**
             * Creates a SessionkeyConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SessionkeyConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.Config.SessionkeyConfig;

            /**
             * Creates a plain object from a SessionkeyConfig message. Also converts values to other types if specified.
             * @param message SessionkeyConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.Config.SessionkeyConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SessionkeyConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SessionkeyConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a DeviceUIConfig. */
    interface IDeviceUIConfig {

        /** DeviceUIConfig version */
        version?: (number|null);

        /** DeviceUIConfig screenBrightness */
        screenBrightness?: (number|null);

        /** DeviceUIConfig screenTimeout */
        screenTimeout?: (number|null);

        /** DeviceUIConfig screenLock */
        screenLock?: (boolean|null);

        /** DeviceUIConfig settingsLock */
        settingsLock?: (boolean|null);

        /** DeviceUIConfig pinCode */
        pinCode?: (number|null);

        /** DeviceUIConfig theme */
        theme?: (meshtastic.Theme|null);

        /** DeviceUIConfig alertEnabled */
        alertEnabled?: (boolean|null);

        /** DeviceUIConfig bannerEnabled */
        bannerEnabled?: (boolean|null);

        /** DeviceUIConfig ringToneId */
        ringToneId?: (number|null);

        /** DeviceUIConfig language */
        language?: (meshtastic.Language|null);

        /** DeviceUIConfig nodeFilter */
        nodeFilter?: (meshtastic.INodeFilter|null);

        /** DeviceUIConfig nodeHighlight */
        nodeHighlight?: (meshtastic.INodeHighlight|null);

        /** DeviceUIConfig calibrationData */
        calibrationData?: (Uint8Array|null);

        /** DeviceUIConfig mapData */
        mapData?: (meshtastic.IMap|null);

        /** DeviceUIConfig compassMode */
        compassMode?: (meshtastic.CompassMode|null);

        /** DeviceUIConfig screenRgbColor */
        screenRgbColor?: (number|null);

        /** DeviceUIConfig isClockfaceAnalog */
        isClockfaceAnalog?: (boolean|null);
    }

    /** Represents a DeviceUIConfig. */
    class DeviceUIConfig implements IDeviceUIConfig {

        /**
         * Constructs a new DeviceUIConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IDeviceUIConfig);

        /** DeviceUIConfig version. */
        public version: number;

        /** DeviceUIConfig screenBrightness. */
        public screenBrightness: number;

        /** DeviceUIConfig screenTimeout. */
        public screenTimeout: number;

        /** DeviceUIConfig screenLock. */
        public screenLock: boolean;

        /** DeviceUIConfig settingsLock. */
        public settingsLock: boolean;

        /** DeviceUIConfig pinCode. */
        public pinCode: number;

        /** DeviceUIConfig theme. */
        public theme: meshtastic.Theme;

        /** DeviceUIConfig alertEnabled. */
        public alertEnabled: boolean;

        /** DeviceUIConfig bannerEnabled. */
        public bannerEnabled: boolean;

        /** DeviceUIConfig ringToneId. */
        public ringToneId: number;

        /** DeviceUIConfig language. */
        public language: meshtastic.Language;

        /** DeviceUIConfig nodeFilter. */
        public nodeFilter?: (meshtastic.INodeFilter|null);

        /** DeviceUIConfig nodeHighlight. */
        public nodeHighlight?: (meshtastic.INodeHighlight|null);

        /** DeviceUIConfig calibrationData. */
        public calibrationData: Uint8Array;

        /** DeviceUIConfig mapData. */
        public mapData?: (meshtastic.IMap|null);

        /** DeviceUIConfig compassMode. */
        public compassMode: meshtastic.CompassMode;

        /** DeviceUIConfig screenRgbColor. */
        public screenRgbColor: number;

        /** DeviceUIConfig isClockfaceAnalog. */
        public isClockfaceAnalog: boolean;

        /**
         * Creates a new DeviceUIConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceUIConfig instance
         */
        public static create(properties?: meshtastic.IDeviceUIConfig): meshtastic.DeviceUIConfig;

        /**
         * Encodes the specified DeviceUIConfig message. Does not implicitly {@link meshtastic.DeviceUIConfig.verify|verify} messages.
         * @param message DeviceUIConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IDeviceUIConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceUIConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceUIConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.DeviceUIConfig;

        /**
         * Creates a DeviceUIConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceUIConfig
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.DeviceUIConfig;

        /**
         * Creates a plain object from a DeviceUIConfig message. Also converts values to other types if specified.
         * @param message DeviceUIConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.DeviceUIConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceUIConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceUIConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeFilter. */
    interface INodeFilter {

        /** NodeFilter unknownSwitch */
        unknownSwitch?: (boolean|null);

        /** NodeFilter offlineSwitch */
        offlineSwitch?: (boolean|null);

        /** NodeFilter publicKeySwitch */
        publicKeySwitch?: (boolean|null);

        /** NodeFilter hopsAway */
        hopsAway?: (number|null);

        /** NodeFilter positionSwitch */
        positionSwitch?: (boolean|null);

        /** NodeFilter nodeName */
        nodeName?: (string|null);

        /** NodeFilter channel */
        channel?: (number|null);
    }

    /** Represents a NodeFilter. */
    class NodeFilter implements INodeFilter {

        /**
         * Constructs a new NodeFilter.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INodeFilter);

        /** NodeFilter unknownSwitch. */
        public unknownSwitch: boolean;

        /** NodeFilter offlineSwitch. */
        public offlineSwitch: boolean;

        /** NodeFilter publicKeySwitch. */
        public publicKeySwitch: boolean;

        /** NodeFilter hopsAway. */
        public hopsAway: number;

        /** NodeFilter positionSwitch. */
        public positionSwitch: boolean;

        /** NodeFilter nodeName. */
        public nodeName: string;

        /** NodeFilter channel. */
        public channel: number;

        /**
         * Creates a new NodeFilter instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeFilter instance
         */
        public static create(properties?: meshtastic.INodeFilter): meshtastic.NodeFilter;

        /**
         * Encodes the specified NodeFilter message. Does not implicitly {@link meshtastic.NodeFilter.verify|verify} messages.
         * @param message NodeFilter message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INodeFilter, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeFilter message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeFilter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.NodeFilter;

        /**
         * Creates a NodeFilter message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeFilter
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.NodeFilter;

        /**
         * Creates a plain object from a NodeFilter message. Also converts values to other types if specified.
         * @param message NodeFilter
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.NodeFilter, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeFilter to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeFilter
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeHighlight. */
    interface INodeHighlight {

        /** NodeHighlight chatSwitch */
        chatSwitch?: (boolean|null);

        /** NodeHighlight positionSwitch */
        positionSwitch?: (boolean|null);

        /** NodeHighlight telemetrySwitch */
        telemetrySwitch?: (boolean|null);

        /** NodeHighlight iaqSwitch */
        iaqSwitch?: (boolean|null);

        /** NodeHighlight nodeName */
        nodeName?: (string|null);
    }

    /** Represents a NodeHighlight. */
    class NodeHighlight implements INodeHighlight {

        /**
         * Constructs a new NodeHighlight.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INodeHighlight);

        /** NodeHighlight chatSwitch. */
        public chatSwitch: boolean;

        /** NodeHighlight positionSwitch. */
        public positionSwitch: boolean;

        /** NodeHighlight telemetrySwitch. */
        public telemetrySwitch: boolean;

        /** NodeHighlight iaqSwitch. */
        public iaqSwitch: boolean;

        /** NodeHighlight nodeName. */
        public nodeName: string;

        /**
         * Creates a new NodeHighlight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeHighlight instance
         */
        public static create(properties?: meshtastic.INodeHighlight): meshtastic.NodeHighlight;

        /**
         * Encodes the specified NodeHighlight message. Does not implicitly {@link meshtastic.NodeHighlight.verify|verify} messages.
         * @param message NodeHighlight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INodeHighlight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeHighlight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeHighlight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.NodeHighlight;

        /**
         * Creates a NodeHighlight message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeHighlight
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.NodeHighlight;

        /**
         * Creates a plain object from a NodeHighlight message. Also converts values to other types if specified.
         * @param message NodeHighlight
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.NodeHighlight, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeHighlight to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeHighlight
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a GeoPoint. */
    interface IGeoPoint {

        /** GeoPoint zoom */
        zoom?: (number|null);

        /** GeoPoint latitude */
        latitude?: (number|null);

        /** GeoPoint longitude */
        longitude?: (number|null);
    }

    /** Represents a GeoPoint. */
    class GeoPoint implements IGeoPoint {

        /**
         * Constructs a new GeoPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IGeoPoint);

        /** GeoPoint zoom. */
        public zoom: number;

        /** GeoPoint latitude. */
        public latitude: number;

        /** GeoPoint longitude. */
        public longitude: number;

        /**
         * Creates a new GeoPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GeoPoint instance
         */
        public static create(properties?: meshtastic.IGeoPoint): meshtastic.GeoPoint;

        /**
         * Encodes the specified GeoPoint message. Does not implicitly {@link meshtastic.GeoPoint.verify|verify} messages.
         * @param message GeoPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IGeoPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GeoPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GeoPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.GeoPoint;

        /**
         * Creates a GeoPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GeoPoint
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.GeoPoint;

        /**
         * Creates a plain object from a GeoPoint message. Also converts values to other types if specified.
         * @param message GeoPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.GeoPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GeoPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for GeoPoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Map. */
    interface IMap {

        /** Map home */
        home?: (meshtastic.IGeoPoint|null);

        /** Map style */
        style?: (string|null);

        /** Map followGps */
        followGps?: (boolean|null);
    }

    /** Represents a Map. */
    class Map implements IMap {

        /**
         * Constructs a new Map.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IMap);

        /** Map home. */
        public home?: (meshtastic.IGeoPoint|null);

        /** Map style. */
        public style: string;

        /** Map followGps. */
        public followGps: boolean;

        /**
         * Creates a new Map instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Map instance
         */
        public static create(properties?: meshtastic.IMap): meshtastic.Map;

        /**
         * Encodes the specified Map message. Does not implicitly {@link meshtastic.Map.verify|verify} messages.
         * @param message Map message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Map message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Map
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Map;

        /**
         * Creates a Map message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Map
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Map;

        /**
         * Creates a plain object from a Map message. Also converts values to other types if specified.
         * @param message Map
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Map, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Map to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Map
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** CompassMode enum. */
    enum CompassMode {
        DYNAMIC = 0,
        FIXED_RING = 1,
        FREEZE_HEADING = 2
    }

    /** Theme enum. */
    enum Theme {
        DARK = 0,
        LIGHT = 1,
        RED = 2
    }

    /** Language enum. */
    enum Language {
        ENGLISH = 0,
        FRENCH = 1,
        GERMAN = 2,
        ITALIAN = 3,
        PORTUGUESE = 4,
        SPANISH = 5,
        SWEDISH = 6,
        FINNISH = 7,
        POLISH = 8,
        TURKISH = 9,
        SERBIAN = 10,
        RUSSIAN = 11,
        DUTCH = 12,
        GREEK = 13,
        NORWEGIAN = 14,
        SLOVENIAN = 15,
        UKRAINIAN = 16,
        BULGARIAN = 17,
        SIMPLIFIED_CHINESE = 30,
        TRADITIONAL_CHINESE = 31
    }

    /** Properties of a DeviceConnectionStatus. */
    interface IDeviceConnectionStatus {

        /** DeviceConnectionStatus wifi */
        wifi?: (meshtastic.IWifiConnectionStatus|null);

        /** DeviceConnectionStatus ethernet */
        ethernet?: (meshtastic.IEthernetConnectionStatus|null);

        /** DeviceConnectionStatus bluetooth */
        bluetooth?: (meshtastic.IBluetoothConnectionStatus|null);

        /** DeviceConnectionStatus serial */
        serial?: (meshtastic.ISerialConnectionStatus|null);
    }

    /** Represents a DeviceConnectionStatus. */
    class DeviceConnectionStatus implements IDeviceConnectionStatus {

        /**
         * Constructs a new DeviceConnectionStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IDeviceConnectionStatus);

        /** DeviceConnectionStatus wifi. */
        public wifi?: (meshtastic.IWifiConnectionStatus|null);

        /** DeviceConnectionStatus ethernet. */
        public ethernet?: (meshtastic.IEthernetConnectionStatus|null);

        /** DeviceConnectionStatus bluetooth. */
        public bluetooth?: (meshtastic.IBluetoothConnectionStatus|null);

        /** DeviceConnectionStatus serial. */
        public serial?: (meshtastic.ISerialConnectionStatus|null);

        /** DeviceConnectionStatus _wifi. */
        public _wifi?: "wifi";

        /** DeviceConnectionStatus _ethernet. */
        public _ethernet?: "ethernet";

        /** DeviceConnectionStatus _bluetooth. */
        public _bluetooth?: "bluetooth";

        /** DeviceConnectionStatus _serial. */
        public _serial?: "serial";

        /**
         * Creates a new DeviceConnectionStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceConnectionStatus instance
         */
        public static create(properties?: meshtastic.IDeviceConnectionStatus): meshtastic.DeviceConnectionStatus;

        /**
         * Encodes the specified DeviceConnectionStatus message. Does not implicitly {@link meshtastic.DeviceConnectionStatus.verify|verify} messages.
         * @param message DeviceConnectionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IDeviceConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceConnectionStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceConnectionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.DeviceConnectionStatus;

        /**
         * Creates a DeviceConnectionStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceConnectionStatus
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.DeviceConnectionStatus;

        /**
         * Creates a plain object from a DeviceConnectionStatus message. Also converts values to other types if specified.
         * @param message DeviceConnectionStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.DeviceConnectionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceConnectionStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceConnectionStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WifiConnectionStatus. */
    interface IWifiConnectionStatus {

        /** WifiConnectionStatus status */
        status?: (meshtastic.INetworkConnectionStatus|null);

        /** WifiConnectionStatus ssid */
        ssid?: (string|null);

        /** WifiConnectionStatus rssi */
        rssi?: (number|null);
    }

    /** Represents a WifiConnectionStatus. */
    class WifiConnectionStatus implements IWifiConnectionStatus {

        /**
         * Constructs a new WifiConnectionStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IWifiConnectionStatus);

        /** WifiConnectionStatus status. */
        public status?: (meshtastic.INetworkConnectionStatus|null);

        /** WifiConnectionStatus ssid. */
        public ssid: string;

        /** WifiConnectionStatus rssi. */
        public rssi: number;

        /**
         * Creates a new WifiConnectionStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WifiConnectionStatus instance
         */
        public static create(properties?: meshtastic.IWifiConnectionStatus): meshtastic.WifiConnectionStatus;

        /**
         * Encodes the specified WifiConnectionStatus message. Does not implicitly {@link meshtastic.WifiConnectionStatus.verify|verify} messages.
         * @param message WifiConnectionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IWifiConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WifiConnectionStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WifiConnectionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.WifiConnectionStatus;

        /**
         * Creates a WifiConnectionStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WifiConnectionStatus
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.WifiConnectionStatus;

        /**
         * Creates a plain object from a WifiConnectionStatus message. Also converts values to other types if specified.
         * @param message WifiConnectionStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.WifiConnectionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WifiConnectionStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WifiConnectionStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EthernetConnectionStatus. */
    interface IEthernetConnectionStatus {

        /** EthernetConnectionStatus status */
        status?: (meshtastic.INetworkConnectionStatus|null);
    }

    /** Represents an EthernetConnectionStatus. */
    class EthernetConnectionStatus implements IEthernetConnectionStatus {

        /**
         * Constructs a new EthernetConnectionStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IEthernetConnectionStatus);

        /** EthernetConnectionStatus status. */
        public status?: (meshtastic.INetworkConnectionStatus|null);

        /**
         * Creates a new EthernetConnectionStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EthernetConnectionStatus instance
         */
        public static create(properties?: meshtastic.IEthernetConnectionStatus): meshtastic.EthernetConnectionStatus;

        /**
         * Encodes the specified EthernetConnectionStatus message. Does not implicitly {@link meshtastic.EthernetConnectionStatus.verify|verify} messages.
         * @param message EthernetConnectionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IEthernetConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EthernetConnectionStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EthernetConnectionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.EthernetConnectionStatus;

        /**
         * Creates an EthernetConnectionStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EthernetConnectionStatus
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.EthernetConnectionStatus;

        /**
         * Creates a plain object from an EthernetConnectionStatus message. Also converts values to other types if specified.
         * @param message EthernetConnectionStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.EthernetConnectionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EthernetConnectionStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EthernetConnectionStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NetworkConnectionStatus. */
    interface INetworkConnectionStatus {

        /** NetworkConnectionStatus ipAddress */
        ipAddress?: (number|null);

        /** NetworkConnectionStatus isConnected */
        isConnected?: (boolean|null);

        /** NetworkConnectionStatus isMqttConnected */
        isMqttConnected?: (boolean|null);

        /** NetworkConnectionStatus isSyslogConnected */
        isSyslogConnected?: (boolean|null);
    }

    /** Represents a NetworkConnectionStatus. */
    class NetworkConnectionStatus implements INetworkConnectionStatus {

        /**
         * Constructs a new NetworkConnectionStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INetworkConnectionStatus);

        /** NetworkConnectionStatus ipAddress. */
        public ipAddress: number;

        /** NetworkConnectionStatus isConnected. */
        public isConnected: boolean;

        /** NetworkConnectionStatus isMqttConnected. */
        public isMqttConnected: boolean;

        /** NetworkConnectionStatus isSyslogConnected. */
        public isSyslogConnected: boolean;

        /**
         * Creates a new NetworkConnectionStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetworkConnectionStatus instance
         */
        public static create(properties?: meshtastic.INetworkConnectionStatus): meshtastic.NetworkConnectionStatus;

        /**
         * Encodes the specified NetworkConnectionStatus message. Does not implicitly {@link meshtastic.NetworkConnectionStatus.verify|verify} messages.
         * @param message NetworkConnectionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INetworkConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetworkConnectionStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetworkConnectionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.NetworkConnectionStatus;

        /**
         * Creates a NetworkConnectionStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetworkConnectionStatus
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.NetworkConnectionStatus;

        /**
         * Creates a plain object from a NetworkConnectionStatus message. Also converts values to other types if specified.
         * @param message NetworkConnectionStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.NetworkConnectionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetworkConnectionStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NetworkConnectionStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a BluetoothConnectionStatus. */
    interface IBluetoothConnectionStatus {

        /** BluetoothConnectionStatus pin */
        pin?: (number|null);

        /** BluetoothConnectionStatus rssi */
        rssi?: (number|null);

        /** BluetoothConnectionStatus isConnected */
        isConnected?: (boolean|null);
    }

    /** Represents a BluetoothConnectionStatus. */
    class BluetoothConnectionStatus implements IBluetoothConnectionStatus {

        /**
         * Constructs a new BluetoothConnectionStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IBluetoothConnectionStatus);

        /** BluetoothConnectionStatus pin. */
        public pin: number;

        /** BluetoothConnectionStatus rssi. */
        public rssi: number;

        /** BluetoothConnectionStatus isConnected. */
        public isConnected: boolean;

        /**
         * Creates a new BluetoothConnectionStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BluetoothConnectionStatus instance
         */
        public static create(properties?: meshtastic.IBluetoothConnectionStatus): meshtastic.BluetoothConnectionStatus;

        /**
         * Encodes the specified BluetoothConnectionStatus message. Does not implicitly {@link meshtastic.BluetoothConnectionStatus.verify|verify} messages.
         * @param message BluetoothConnectionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IBluetoothConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BluetoothConnectionStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BluetoothConnectionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.BluetoothConnectionStatus;

        /**
         * Creates a BluetoothConnectionStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BluetoothConnectionStatus
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.BluetoothConnectionStatus;

        /**
         * Creates a plain object from a BluetoothConnectionStatus message. Also converts values to other types if specified.
         * @param message BluetoothConnectionStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.BluetoothConnectionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BluetoothConnectionStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for BluetoothConnectionStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SerialConnectionStatus. */
    interface ISerialConnectionStatus {

        /** SerialConnectionStatus baud */
        baud?: (number|null);

        /** SerialConnectionStatus isConnected */
        isConnected?: (boolean|null);
    }

    /** Represents a SerialConnectionStatus. */
    class SerialConnectionStatus implements ISerialConnectionStatus {

        /**
         * Constructs a new SerialConnectionStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.ISerialConnectionStatus);

        /** SerialConnectionStatus baud. */
        public baud: number;

        /** SerialConnectionStatus isConnected. */
        public isConnected: boolean;

        /**
         * Creates a new SerialConnectionStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SerialConnectionStatus instance
         */
        public static create(properties?: meshtastic.ISerialConnectionStatus): meshtastic.SerialConnectionStatus;

        /**
         * Encodes the specified SerialConnectionStatus message. Does not implicitly {@link meshtastic.SerialConnectionStatus.verify|verify} messages.
         * @param message SerialConnectionStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.ISerialConnectionStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SerialConnectionStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SerialConnectionStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.SerialConnectionStatus;

        /**
         * Creates a SerialConnectionStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SerialConnectionStatus
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.SerialConnectionStatus;

        /**
         * Creates a plain object from a SerialConnectionStatus message. Also converts values to other types if specified.
         * @param message SerialConnectionStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.SerialConnectionStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SerialConnectionStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SerialConnectionStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position latitudeI */
        latitudeI?: (number|null);

        /** Position longitudeI */
        longitudeI?: (number|null);

        /** Position altitude */
        altitude?: (number|null);

        /** Position time */
        time?: (number|null);

        /** Position locationSource */
        locationSource?: (meshtastic.Position.LocSource|null);

        /** Position altitudeSource */
        altitudeSource?: (meshtastic.Position.AltSource|null);

        /** Position timestamp */
        timestamp?: (number|null);

        /** Position timestampMillisAdjust */
        timestampMillisAdjust?: (number|null);

        /** Position altitudeHae */
        altitudeHae?: (number|null);

        /** Position altitudeGeoidalSeparation */
        altitudeGeoidalSeparation?: (number|null);

        /** Position PDOP */
        PDOP?: (number|null);

        /** Position HDOP */
        HDOP?: (number|null);

        /** Position VDOP */
        VDOP?: (number|null);

        /** Position gpsAccuracy */
        gpsAccuracy?: (number|null);

        /** Position groundSpeed */
        groundSpeed?: (number|null);

        /** Position groundTrack */
        groundTrack?: (number|null);

        /** Position fixQuality */
        fixQuality?: (number|null);

        /** Position fixType */
        fixType?: (number|null);

        /** Position satsInView */
        satsInView?: (number|null);

        /** Position sensorId */
        sensorId?: (number|null);

        /** Position nextUpdate */
        nextUpdate?: (number|null);

        /** Position seqNumber */
        seqNumber?: (number|null);

        /** Position precisionBits */
        precisionBits?: (number|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IPosition);

        /** Position latitudeI. */
        public latitudeI?: (number|null);

        /** Position longitudeI. */
        public longitudeI?: (number|null);

        /** Position altitude. */
        public altitude?: (number|null);

        /** Position time. */
        public time: number;

        /** Position locationSource. */
        public locationSource: meshtastic.Position.LocSource;

        /** Position altitudeSource. */
        public altitudeSource: meshtastic.Position.AltSource;

        /** Position timestamp. */
        public timestamp: number;

        /** Position timestampMillisAdjust. */
        public timestampMillisAdjust: number;

        /** Position altitudeHae. */
        public altitudeHae?: (number|null);

        /** Position altitudeGeoidalSeparation. */
        public altitudeGeoidalSeparation?: (number|null);

        /** Position PDOP. */
        public PDOP: number;

        /** Position HDOP. */
        public HDOP: number;

        /** Position VDOP. */
        public VDOP: number;

        /** Position gpsAccuracy. */
        public gpsAccuracy: number;

        /** Position groundSpeed. */
        public groundSpeed?: (number|null);

        /** Position groundTrack. */
        public groundTrack?: (number|null);

        /** Position fixQuality. */
        public fixQuality: number;

        /** Position fixType. */
        public fixType: number;

        /** Position satsInView. */
        public satsInView: number;

        /** Position sensorId. */
        public sensorId: number;

        /** Position nextUpdate. */
        public nextUpdate: number;

        /** Position seqNumber. */
        public seqNumber: number;

        /** Position precisionBits. */
        public precisionBits: number;

        /** Position _latitudeI. */
        public _latitudeI?: "latitudeI";

        /** Position _longitudeI. */
        public _longitudeI?: "longitudeI";

        /** Position _altitude. */
        public _altitude?: "altitude";

        /** Position _altitudeHae. */
        public _altitudeHae?: "altitudeHae";

        /** Position _altitudeGeoidalSeparation. */
        public _altitudeGeoidalSeparation?: "altitudeGeoidalSeparation";

        /** Position _groundSpeed. */
        public _groundSpeed?: "groundSpeed";

        /** Position _groundTrack. */
        public _groundTrack?: "groundTrack";

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: meshtastic.IPosition): meshtastic.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link meshtastic.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Position;

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Position
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Position {

        /** LocSource enum. */
        enum LocSource {
            LOC_UNSET = 0,
            LOC_MANUAL = 1,
            LOC_INTERNAL = 2,
            LOC_EXTERNAL = 3
        }

        /** AltSource enum. */
        enum AltSource {
            ALT_UNSET = 0,
            ALT_MANUAL = 1,
            ALT_INTERNAL = 2,
            ALT_EXTERNAL = 3,
            ALT_BAROMETRIC = 4
        }
    }

    /** HardwareModel enum. */
    enum HardwareModel {
        UNSET = 0,
        TLORA_V2 = 1,
        TLORA_V1 = 2,
        TLORA_V2_1_1P6 = 3,
        TBEAM = 4,
        HELTEC_V2_0 = 5,
        TBEAM_V0P7 = 6,
        T_ECHO = 7,
        TLORA_V1_1P3 = 8,
        RAK4631 = 9,
        HELTEC_V2_1 = 10,
        HELTEC_V1 = 11,
        LILYGO_TBEAM_S3_CORE = 12,
        RAK11200 = 13,
        NANO_G1 = 14,
        TLORA_V2_1_1P8 = 15,
        TLORA_T3_S3 = 16,
        NANO_G1_EXPLORER = 17,
        NANO_G2_ULTRA = 18,
        LORA_TYPE = 19,
        WIPHONE = 20,
        WIO_WM1110 = 21,
        RAK2560 = 22,
        HELTEC_HRU_3601 = 23,
        HELTEC_WIRELESS_BRIDGE = 24,
        STATION_G1 = 25,
        RAK11310 = 26,
        SENSELORA_RP2040 = 27,
        SENSELORA_S3 = 28,
        CANARYONE = 29,
        RP2040_LORA = 30,
        STATION_G2 = 31,
        LORA_RELAY_V1 = 32,
        NRF52840DK = 33,
        PPR = 34,
        GENIEBLOCKS = 35,
        NRF52_UNKNOWN = 36,
        PORTDUINO = 37,
        ANDROID_SIM = 38,
        DIY_V1 = 39,
        NRF52840_PCA10059 = 40,
        DR_DEV = 41,
        M5STACK = 42,
        HELTEC_V3 = 43,
        HELTEC_WSL_V3 = 44,
        BETAFPV_2400_TX = 45,
        BETAFPV_900_NANO_TX = 46,
        RPI_PICO = 47,
        HELTEC_WIRELESS_TRACKER = 48,
        HELTEC_WIRELESS_PAPER = 49,
        T_DECK = 50,
        T_WATCH_S3 = 51,
        PICOMPUTER_S3 = 52,
        HELTEC_HT62 = 53,
        EBYTE_ESP32_S3 = 54,
        ESP32_S3_PICO = 55,
        CHATTER_2 = 56,
        HELTEC_WIRELESS_PAPER_V1_0 = 57,
        HELTEC_WIRELESS_TRACKER_V1_0 = 58,
        UNPHONE = 59,
        TD_LORAC = 60,
        CDEBYTE_EORA_S3 = 61,
        TWC_MESH_V4 = 62,
        NRF52_PROMICRO_DIY = 63,
        RADIOMASTER_900_BANDIT_NANO = 64,
        HELTEC_CAPSULE_SENSOR_V3 = 65,
        HELTEC_VISION_MASTER_T190 = 66,
        HELTEC_VISION_MASTER_E213 = 67,
        HELTEC_VISION_MASTER_E290 = 68,
        HELTEC_MESH_NODE_T114 = 69,
        SENSECAP_INDICATOR = 70,
        TRACKER_T1000_E = 71,
        RAK3172 = 72,
        WIO_E5 = 73,
        RADIOMASTER_900_BANDIT = 74,
        ME25LS01_4Y10TD = 75,
        RP2040_FEATHER_RFM95 = 76,
        M5STACK_COREBASIC = 77,
        M5STACK_CORE2 = 78,
        RPI_PICO2 = 79,
        M5STACK_CORES3 = 80,
        SEEED_XIAO_S3 = 81,
        MS24SF1 = 82,
        TLORA_C6 = 83,
        WISMESH_TAP = 84,
        ROUTASTIC = 85,
        MESH_TAB = 86,
        MESHLINK = 87,
        XIAO_NRF52_KIT = 88,
        THINKNODE_M1 = 89,
        THINKNODE_M2 = 90,
        T_ETH_ELITE = 91,
        HELTEC_SENSOR_HUB = 92,
        RESERVED_FRIED_CHICKEN = 93,
        HELTEC_MESH_POCKET = 94,
        SEEED_SOLAR_NODE = 95,
        NOMADSTAR_METEOR_PRO = 96,
        CROWPANEL = 97,
        LINK_32 = 98,
        SEEED_WIO_TRACKER_L1 = 99,
        SEEED_WIO_TRACKER_L1_EINK = 100,
        QWANTZ_TINY_ARMS = 101,
        T_DECK_PRO = 102,
        T_LORA_PAGER = 103,
        GAT562_MESH_TRIAL_TRACKER = 104,
        WISMESH_TAG = 105,
        RAK3312 = 106,
        THINKNODE_M5 = 107,
        HELTEC_MESH_SOLAR = 108,
        T_ECHO_LITE = 109,
        HELTEC_V4 = 110,
        PRIVATE_HW = 255
    }

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User longName */
        longName?: (string|null);

        /** User shortName */
        shortName?: (string|null);

        /** User macaddr */
        macaddr?: (Uint8Array|null);

        /** User hwModel */
        hwModel?: (meshtastic.HardwareModel|null);

        /** User isLicensed */
        isLicensed?: (boolean|null);

        /** User role */
        role?: (meshtastic.Config.DeviceConfig.Role|null);

        /** User publicKey */
        publicKey?: (Uint8Array|null);

        /** User isUnmessagable */
        isUnmessagable?: (boolean|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IUser);

        /** User id. */
        public id: string;

        /** User longName. */
        public longName: string;

        /** User shortName. */
        public shortName: string;

        /** User macaddr. */
        public macaddr: Uint8Array;

        /** User hwModel. */
        public hwModel: meshtastic.HardwareModel;

        /** User isLicensed. */
        public isLicensed: boolean;

        /** User role. */
        public role: meshtastic.Config.DeviceConfig.Role;

        /** User publicKey. */
        public publicKey: Uint8Array;

        /** User isUnmessagable. */
        public isUnmessagable?: (boolean|null);

        /** User _isUnmessagable. */
        public _isUnmessagable?: "isUnmessagable";

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: meshtastic.IUser): meshtastic.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link meshtastic.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.User;

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for User
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RouteDiscovery. */
    interface IRouteDiscovery {

        /** RouteDiscovery route */
        route?: (number[]|null);

        /** RouteDiscovery snrTowards */
        snrTowards?: (number[]|null);

        /** RouteDiscovery routeBack */
        routeBack?: (number[]|null);

        /** RouteDiscovery snrBack */
        snrBack?: (number[]|null);
    }

    /** Represents a RouteDiscovery. */
    class RouteDiscovery implements IRouteDiscovery {

        /**
         * Constructs a new RouteDiscovery.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IRouteDiscovery);

        /** RouteDiscovery route. */
        public route: number[];

        /** RouteDiscovery snrTowards. */
        public snrTowards: number[];

        /** RouteDiscovery routeBack. */
        public routeBack: number[];

        /** RouteDiscovery snrBack. */
        public snrBack: number[];

        /**
         * Creates a new RouteDiscovery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteDiscovery instance
         */
        public static create(properties?: meshtastic.IRouteDiscovery): meshtastic.RouteDiscovery;

        /**
         * Encodes the specified RouteDiscovery message. Does not implicitly {@link meshtastic.RouteDiscovery.verify|verify} messages.
         * @param message RouteDiscovery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IRouteDiscovery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteDiscovery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteDiscovery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.RouteDiscovery;

        /**
         * Creates a RouteDiscovery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteDiscovery
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.RouteDiscovery;

        /**
         * Creates a plain object from a RouteDiscovery message. Also converts values to other types if specified.
         * @param message RouteDiscovery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.RouteDiscovery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteDiscovery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RouteDiscovery
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Routing. */
    interface IRouting {

        /** Routing routeRequest */
        routeRequest?: (meshtastic.IRouteDiscovery|null);

        /** Routing routeReply */
        routeReply?: (meshtastic.IRouteDiscovery|null);

        /** Routing errorReason */
        errorReason?: (meshtastic.Routing.Error|null);
    }

    /** Represents a Routing. */
    class Routing implements IRouting {

        /**
         * Constructs a new Routing.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IRouting);

        /** Routing routeRequest. */
        public routeRequest?: (meshtastic.IRouteDiscovery|null);

        /** Routing routeReply. */
        public routeReply?: (meshtastic.IRouteDiscovery|null);

        /** Routing errorReason. */
        public errorReason?: (meshtastic.Routing.Error|null);

        /** Routing variant. */
        public variant?: ("routeRequest"|"routeReply"|"errorReason");

        /**
         * Creates a new Routing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Routing instance
         */
        public static create(properties?: meshtastic.IRouting): meshtastic.Routing;

        /**
         * Encodes the specified Routing message. Does not implicitly {@link meshtastic.Routing.verify|verify} messages.
         * @param message Routing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IRouting, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Routing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Routing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Routing;

        /**
         * Creates a Routing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Routing
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Routing;

        /**
         * Creates a plain object from a Routing message. Also converts values to other types if specified.
         * @param message Routing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Routing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Routing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Routing
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Routing {

        /** Error enum. */
        enum Error {
            NONE = 0,
            NO_ROUTE = 1,
            GOT_NAK = 2,
            TIMEOUT = 3,
            NO_INTERFACE = 4,
            MAX_RETRANSMIT = 5,
            NO_CHANNEL = 6,
            TOO_LARGE = 7,
            NO_RESPONSE = 8,
            DUTY_CYCLE_LIMIT = 9,
            BAD_REQUEST = 32,
            NOT_AUTHORIZED = 33,
            PKI_FAILED = 34,
            PKI_UNKNOWN_PUBKEY = 35,
            ADMIN_BAD_SESSION_KEY = 36,
            ADMIN_PUBLIC_KEY_UNAUTHORIZED = 37,
            RATE_LIMIT_EXCEEDED = 38
        }
    }

    /** Properties of a Data. */
    interface IData {

        /** Data portnum */
        portnum?: (meshtastic.PortNum|null);

        /** Data payload */
        payload?: (Uint8Array|null);

        /** Data wantResponse */
        wantResponse?: (boolean|null);

        /** Data dest */
        dest?: (number|null);

        /** Data source */
        source?: (number|null);

        /** Data requestId */
        requestId?: (number|null);

        /** Data replyId */
        replyId?: (number|null);

        /** Data emoji */
        emoji?: (number|null);

        /** Data bitfield */
        bitfield?: (number|null);
    }

    /** Represents a Data. */
    class Data implements IData {

        /**
         * Constructs a new Data.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IData);

        /** Data portnum. */
        public portnum: meshtastic.PortNum;

        /** Data payload. */
        public payload: Uint8Array;

        /** Data wantResponse. */
        public wantResponse: boolean;

        /** Data dest. */
        public dest: number;

        /** Data source. */
        public source: number;

        /** Data requestId. */
        public requestId: number;

        /** Data replyId. */
        public replyId: number;

        /** Data emoji. */
        public emoji: number;

        /** Data bitfield. */
        public bitfield?: (number|null);

        /** Data _bitfield. */
        public _bitfield?: "bitfield";

        /**
         * Creates a new Data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Data instance
         */
        public static create(properties?: meshtastic.IData): meshtastic.Data;

        /**
         * Encodes the specified Data message. Does not implicitly {@link meshtastic.Data.verify|verify} messages.
         * @param message Data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Data;

        /**
         * Creates a Data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Data
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Data;

        /**
         * Creates a plain object from a Data message. Also converts values to other types if specified.
         * @param message Data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Data
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyVerification. */
    interface IKeyVerification {

        /** KeyVerification nonce */
        nonce?: (number|Long|null);

        /** KeyVerification hash1 */
        hash1?: (Uint8Array|null);

        /** KeyVerification hash2 */
        hash2?: (Uint8Array|null);
    }

    /** Represents a KeyVerification. */
    class KeyVerification implements IKeyVerification {

        /**
         * Constructs a new KeyVerification.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IKeyVerification);

        /** KeyVerification nonce. */
        public nonce: (number|Long);

        /** KeyVerification hash1. */
        public hash1: Uint8Array;

        /** KeyVerification hash2. */
        public hash2: Uint8Array;

        /**
         * Creates a new KeyVerification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyVerification instance
         */
        public static create(properties?: meshtastic.IKeyVerification): meshtastic.KeyVerification;

        /**
         * Encodes the specified KeyVerification message. Does not implicitly {@link meshtastic.KeyVerification.verify|verify} messages.
         * @param message KeyVerification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IKeyVerification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyVerification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyVerification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.KeyVerification;

        /**
         * Creates a KeyVerification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyVerification
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.KeyVerification;

        /**
         * Creates a plain object from a KeyVerification message. Also converts values to other types if specified.
         * @param message KeyVerification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.KeyVerification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyVerification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyVerification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Waypoint. */
    interface IWaypoint {

        /** Waypoint id */
        id?: (number|null);

        /** Waypoint latitudeI */
        latitudeI?: (number|null);

        /** Waypoint longitudeI */
        longitudeI?: (number|null);

        /** Waypoint expire */
        expire?: (number|null);

        /** Waypoint lockedTo */
        lockedTo?: (number|null);

        /** Waypoint name */
        name?: (string|null);

        /** Waypoint description */
        description?: (string|null);

        /** Waypoint icon */
        icon?: (number|null);
    }

    /** Represents a Waypoint. */
    class Waypoint implements IWaypoint {

        /**
         * Constructs a new Waypoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IWaypoint);

        /** Waypoint id. */
        public id: number;

        /** Waypoint latitudeI. */
        public latitudeI?: (number|null);

        /** Waypoint longitudeI. */
        public longitudeI?: (number|null);

        /** Waypoint expire. */
        public expire: number;

        /** Waypoint lockedTo. */
        public lockedTo: number;

        /** Waypoint name. */
        public name: string;

        /** Waypoint description. */
        public description: string;

        /** Waypoint icon. */
        public icon: number;

        /** Waypoint _latitudeI. */
        public _latitudeI?: "latitudeI";

        /** Waypoint _longitudeI. */
        public _longitudeI?: "longitudeI";

        /**
         * Creates a new Waypoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Waypoint instance
         */
        public static create(properties?: meshtastic.IWaypoint): meshtastic.Waypoint;

        /**
         * Encodes the specified Waypoint message. Does not implicitly {@link meshtastic.Waypoint.verify|verify} messages.
         * @param message Waypoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IWaypoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Waypoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Waypoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Waypoint;

        /**
         * Creates a Waypoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Waypoint
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Waypoint;

        /**
         * Creates a plain object from a Waypoint message. Also converts values to other types if specified.
         * @param message Waypoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Waypoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Waypoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Waypoint
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MqttClientProxyMessage. */
    interface IMqttClientProxyMessage {

        /** MqttClientProxyMessage topic */
        topic?: (string|null);

        /** MqttClientProxyMessage data */
        data?: (Uint8Array|null);

        /** MqttClientProxyMessage text */
        text?: (string|null);

        /** MqttClientProxyMessage retained */
        retained?: (boolean|null);
    }

    /** Represents a MqttClientProxyMessage. */
    class MqttClientProxyMessage implements IMqttClientProxyMessage {

        /**
         * Constructs a new MqttClientProxyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IMqttClientProxyMessage);

        /** MqttClientProxyMessage topic. */
        public topic: string;

        /** MqttClientProxyMessage data. */
        public data?: (Uint8Array|null);

        /** MqttClientProxyMessage text. */
        public text?: (string|null);

        /** MqttClientProxyMessage retained. */
        public retained: boolean;

        /** MqttClientProxyMessage payloadVariant. */
        public payloadVariant?: ("data"|"text");

        /**
         * Creates a new MqttClientProxyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MqttClientProxyMessage instance
         */
        public static create(properties?: meshtastic.IMqttClientProxyMessage): meshtastic.MqttClientProxyMessage;

        /**
         * Encodes the specified MqttClientProxyMessage message. Does not implicitly {@link meshtastic.MqttClientProxyMessage.verify|verify} messages.
         * @param message MqttClientProxyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IMqttClientProxyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MqttClientProxyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MqttClientProxyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.MqttClientProxyMessage;

        /**
         * Creates a MqttClientProxyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MqttClientProxyMessage
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.MqttClientProxyMessage;

        /**
         * Creates a plain object from a MqttClientProxyMessage message. Also converts values to other types if specified.
         * @param message MqttClientProxyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.MqttClientProxyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MqttClientProxyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MqttClientProxyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a MeshPacket. */
    interface IMeshPacket {

        /** MeshPacket from */
        from?: (number|null);

        /** MeshPacket to */
        to?: (number|null);

        /** MeshPacket channel */
        channel?: (number|null);

        /** MeshPacket decoded */
        decoded?: (meshtastic.IData|null);

        /** MeshPacket encrypted */
        encrypted?: (Uint8Array|null);

        /** MeshPacket id */
        id?: (number|null);

        /** MeshPacket rxTime */
        rxTime?: (number|null);

        /** MeshPacket rxSnr */
        rxSnr?: (number|null);

        /** MeshPacket hopLimit */
        hopLimit?: (number|null);

        /** MeshPacket wantAck */
        wantAck?: (boolean|null);

        /** MeshPacket priority */
        priority?: (meshtastic.MeshPacket.Priority|null);

        /** MeshPacket rxRssi */
        rxRssi?: (number|null);

        /** MeshPacket delayed */
        delayed?: (meshtastic.MeshPacket.Delayed|null);

        /** MeshPacket viaMqtt */
        viaMqtt?: (boolean|null);

        /** MeshPacket hopStart */
        hopStart?: (number|null);

        /** MeshPacket publicKey */
        publicKey?: (Uint8Array|null);

        /** MeshPacket pkiEncrypted */
        pkiEncrypted?: (boolean|null);

        /** MeshPacket nextHop */
        nextHop?: (number|null);

        /** MeshPacket relayNode */
        relayNode?: (number|null);

        /** MeshPacket txAfter */
        txAfter?: (number|null);

        /** MeshPacket transportMechanism */
        transportMechanism?: (meshtastic.MeshPacket.TransportMechanism|null);
    }

    /** Represents a MeshPacket. */
    class MeshPacket implements IMeshPacket {

        /**
         * Constructs a new MeshPacket.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IMeshPacket);

        /** MeshPacket from. */
        public from: number;

        /** MeshPacket to. */
        public to: number;

        /** MeshPacket channel. */
        public channel: number;

        /** MeshPacket decoded. */
        public decoded?: (meshtastic.IData|null);

        /** MeshPacket encrypted. */
        public encrypted?: (Uint8Array|null);

        /** MeshPacket id. */
        public id: number;

        /** MeshPacket rxTime. */
        public rxTime: number;

        /** MeshPacket rxSnr. */
        public rxSnr: number;

        /** MeshPacket hopLimit. */
        public hopLimit: number;

        /** MeshPacket wantAck. */
        public wantAck: boolean;

        /** MeshPacket priority. */
        public priority: meshtastic.MeshPacket.Priority;

        /** MeshPacket rxRssi. */
        public rxRssi: number;

        /** MeshPacket delayed. */
        public delayed: meshtastic.MeshPacket.Delayed;

        /** MeshPacket viaMqtt. */
        public viaMqtt: boolean;

        /** MeshPacket hopStart. */
        public hopStart: number;

        /** MeshPacket publicKey. */
        public publicKey: Uint8Array;

        /** MeshPacket pkiEncrypted. */
        public pkiEncrypted: boolean;

        /** MeshPacket nextHop. */
        public nextHop: number;

        /** MeshPacket relayNode. */
        public relayNode: number;

        /** MeshPacket txAfter. */
        public txAfter: number;

        /** MeshPacket transportMechanism. */
        public transportMechanism: meshtastic.MeshPacket.TransportMechanism;

        /** MeshPacket payloadVariant. */
        public payloadVariant?: ("decoded"|"encrypted");

        /**
         * Creates a new MeshPacket instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MeshPacket instance
         */
        public static create(properties?: meshtastic.IMeshPacket): meshtastic.MeshPacket;

        /**
         * Encodes the specified MeshPacket message. Does not implicitly {@link meshtastic.MeshPacket.verify|verify} messages.
         * @param message MeshPacket message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IMeshPacket, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MeshPacket message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MeshPacket
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.MeshPacket;

        /**
         * Creates a MeshPacket message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MeshPacket
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.MeshPacket;

        /**
         * Creates a plain object from a MeshPacket message. Also converts values to other types if specified.
         * @param message MeshPacket
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.MeshPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MeshPacket to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MeshPacket
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MeshPacket {

        /** Priority enum. */
        enum Priority {
            UNSET = 0,
            MIN = 1,
            BACKGROUND = 10,
            DEFAULT = 64,
            RELIABLE = 70,
            RESPONSE = 80,
            HIGH = 100,
            ALERT = 110,
            ACK = 120,
            MAX = 127
        }

        /** Delayed enum. */
        enum Delayed {
            NO_DELAY = 0,
            DELAYED_BROADCAST = 1,
            DELAYED_DIRECT = 2
        }

        /** TransportMechanism enum. */
        enum TransportMechanism {
            TRANSPORT_INTERNAL = 0,
            TRANSPORT_LORA = 1,
            TRANSPORT_LORA_ALT1 = 2,
            TRANSPORT_LORA_ALT2 = 3,
            TRANSPORT_LORA_ALT3 = 4,
            TRANSPORT_MQTT = 5,
            TRANSPORT_MULTICAST_UDP = 6,
            TRANSPORT_API = 7
        }
    }

    /** Constants enum. */
    enum Constants {
        ZERO = 0,
        DATA_PAYLOAD_LEN = 233
    }

    /** Properties of a NodeInfo. */
    interface INodeInfo {

        /** NodeInfo num */
        num?: (number|null);

        /** NodeInfo user */
        user?: (meshtastic.IUser|null);

        /** NodeInfo position */
        position?: (meshtastic.IPosition|null);

        /** NodeInfo snr */
        snr?: (number|null);

        /** NodeInfo lastHeard */
        lastHeard?: (number|null);

        /** NodeInfo deviceMetrics */
        deviceMetrics?: (meshtastic.IDeviceMetrics|null);

        /** NodeInfo channel */
        channel?: (number|null);

        /** NodeInfo viaMqtt */
        viaMqtt?: (boolean|null);

        /** NodeInfo hopsAway */
        hopsAway?: (number|null);

        /** NodeInfo isFavorite */
        isFavorite?: (boolean|null);

        /** NodeInfo isIgnored */
        isIgnored?: (boolean|null);

        /** NodeInfo isKeyManuallyVerified */
        isKeyManuallyVerified?: (boolean|null);
    }

    /** Represents a NodeInfo. */
    class NodeInfo implements INodeInfo {

        /**
         * Constructs a new NodeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INodeInfo);

        /** NodeInfo num. */
        public num: number;

        /** NodeInfo user. */
        public user?: (meshtastic.IUser|null);

        /** NodeInfo position. */
        public position?: (meshtastic.IPosition|null);

        /** NodeInfo snr. */
        public snr: number;

        /** NodeInfo lastHeard. */
        public lastHeard: number;

        /** NodeInfo deviceMetrics. */
        public deviceMetrics?: (meshtastic.IDeviceMetrics|null);

        /** NodeInfo channel. */
        public channel: number;

        /** NodeInfo viaMqtt. */
        public viaMqtt: boolean;

        /** NodeInfo hopsAway. */
        public hopsAway?: (number|null);

        /** NodeInfo isFavorite. */
        public isFavorite: boolean;

        /** NodeInfo isIgnored. */
        public isIgnored: boolean;

        /** NodeInfo isKeyManuallyVerified. */
        public isKeyManuallyVerified: boolean;

        /** NodeInfo _hopsAway. */
        public _hopsAway?: "hopsAway";

        /**
         * Creates a new NodeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeInfo instance
         */
        public static create(properties?: meshtastic.INodeInfo): meshtastic.NodeInfo;

        /**
         * Encodes the specified NodeInfo message. Does not implicitly {@link meshtastic.NodeInfo.verify|verify} messages.
         * @param message NodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.NodeInfo;

        /**
         * Creates a NodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeInfo
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.NodeInfo;

        /**
         * Creates a plain object from a NodeInfo message. Also converts values to other types if specified.
         * @param message NodeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.NodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** CriticalErrorCode enum. */
    enum CriticalErrorCode {
        NONE = 0,
        TX_WATCHDOG = 1,
        SLEEP_ENTER_WAIT = 2,
        NO_RADIO = 3,
        UNSPECIFIED = 4,
        UBLOX_UNIT_FAILED = 5,
        NO_AXP192 = 6,
        INVALID_RADIO_SETTING = 7,
        TRANSMIT_FAILED = 8,
        BROWNOUT = 9,
        SX1262_FAILURE = 10,
        RADIO_SPI_BUG = 11,
        FLASH_CORRUPTION_RECOVERABLE = 12,
        FLASH_CORRUPTION_UNRECOVERABLE = 13
    }

    /** FirmwareEdition enum. */
    enum FirmwareEdition {
        VANILLA = 0,
        SMART_CITIZEN = 1,
        OPEN_SAUCE = 16,
        DEFCON = 17,
        BURNING_MAN = 18,
        HAMVENTION = 19,
        DIY_EDITION = 127
    }

    /** Properties of a MyNodeInfo. */
    interface IMyNodeInfo {

        /** MyNodeInfo myNodeNum */
        myNodeNum?: (number|null);

        /** MyNodeInfo rebootCount */
        rebootCount?: (number|null);

        /** MyNodeInfo minAppVersion */
        minAppVersion?: (number|null);

        /** MyNodeInfo deviceId */
        deviceId?: (Uint8Array|null);

        /** MyNodeInfo pioEnv */
        pioEnv?: (string|null);

        /** MyNodeInfo firmwareEdition */
        firmwareEdition?: (meshtastic.FirmwareEdition|null);

        /** MyNodeInfo nodedbCount */
        nodedbCount?: (number|null);
    }

    /** Represents a MyNodeInfo. */
    class MyNodeInfo implements IMyNodeInfo {

        /**
         * Constructs a new MyNodeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IMyNodeInfo);

        /** MyNodeInfo myNodeNum. */
        public myNodeNum: number;

        /** MyNodeInfo rebootCount. */
        public rebootCount: number;

        /** MyNodeInfo minAppVersion. */
        public minAppVersion: number;

        /** MyNodeInfo deviceId. */
        public deviceId: Uint8Array;

        /** MyNodeInfo pioEnv. */
        public pioEnv: string;

        /** MyNodeInfo firmwareEdition. */
        public firmwareEdition: meshtastic.FirmwareEdition;

        /** MyNodeInfo nodedbCount. */
        public nodedbCount: number;

        /**
         * Creates a new MyNodeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MyNodeInfo instance
         */
        public static create(properties?: meshtastic.IMyNodeInfo): meshtastic.MyNodeInfo;

        /**
         * Encodes the specified MyNodeInfo message. Does not implicitly {@link meshtastic.MyNodeInfo.verify|verify} messages.
         * @param message MyNodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IMyNodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MyNodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MyNodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.MyNodeInfo;

        /**
         * Creates a MyNodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MyNodeInfo
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.MyNodeInfo;

        /**
         * Creates a plain object from a MyNodeInfo message. Also converts values to other types if specified.
         * @param message MyNodeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.MyNodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MyNodeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MyNodeInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LogRecord. */
    interface ILogRecord {

        /** LogRecord message */
        message?: (string|null);

        /** LogRecord time */
        time?: (number|null);

        /** LogRecord source */
        source?: (string|null);

        /** LogRecord level */
        level?: (meshtastic.LogRecord.Level|null);
    }

    /** Represents a LogRecord. */
    class LogRecord implements ILogRecord {

        /**
         * Constructs a new LogRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.ILogRecord);

        /** LogRecord message. */
        public message: string;

        /** LogRecord time. */
        public time: number;

        /** LogRecord source. */
        public source: string;

        /** LogRecord level. */
        public level: meshtastic.LogRecord.Level;

        /**
         * Creates a new LogRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogRecord instance
         */
        public static create(properties?: meshtastic.ILogRecord): meshtastic.LogRecord;

        /**
         * Encodes the specified LogRecord message. Does not implicitly {@link meshtastic.LogRecord.verify|verify} messages.
         * @param message LogRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.ILogRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.LogRecord;

        /**
         * Creates a LogRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogRecord
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.LogRecord;

        /**
         * Creates a plain object from a LogRecord message. Also converts values to other types if specified.
         * @param message LogRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.LogRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LogRecord
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LogRecord {

        /** Level enum. */
        enum Level {
            UNSET = 0,
            CRITICAL = 50,
            ERROR = 40,
            WARNING = 30,
            INFO = 20,
            DEBUG = 10,
            TRACE = 5
        }
    }

    /** Properties of a QueueStatus. */
    interface IQueueStatus {

        /** QueueStatus res */
        res?: (number|null);

        /** QueueStatus free */
        free?: (number|null);

        /** QueueStatus maxlen */
        maxlen?: (number|null);

        /** QueueStatus meshPacketId */
        meshPacketId?: (number|null);
    }

    /** Represents a QueueStatus. */
    class QueueStatus implements IQueueStatus {

        /**
         * Constructs a new QueueStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IQueueStatus);

        /** QueueStatus res. */
        public res: number;

        /** QueueStatus free. */
        public free: number;

        /** QueueStatus maxlen. */
        public maxlen: number;

        /** QueueStatus meshPacketId. */
        public meshPacketId: number;

        /**
         * Creates a new QueueStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueueStatus instance
         */
        public static create(properties?: meshtastic.IQueueStatus): meshtastic.QueueStatus;

        /**
         * Encodes the specified QueueStatus message. Does not implicitly {@link meshtastic.QueueStatus.verify|verify} messages.
         * @param message QueueStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IQueueStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueueStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueueStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.QueueStatus;

        /**
         * Creates a QueueStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueueStatus
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.QueueStatus;

        /**
         * Creates a plain object from a QueueStatus message. Also converts values to other types if specified.
         * @param message QueueStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.QueueStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueueStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for QueueStatus
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FromRadio. */
    interface IFromRadio {

        /** FromRadio id */
        id?: (number|null);

        /** FromRadio packet */
        packet?: (meshtastic.IMeshPacket|null);

        /** FromRadio myInfo */
        myInfo?: (meshtastic.IMyNodeInfo|null);

        /** FromRadio nodeInfo */
        nodeInfo?: (meshtastic.INodeInfo|null);

        /** FromRadio config */
        config?: (meshtastic.IConfig|null);

        /** FromRadio logRecord */
        logRecord?: (meshtastic.ILogRecord|null);

        /** FromRadio configCompleteId */
        configCompleteId?: (number|null);

        /** FromRadio rebooted */
        rebooted?: (boolean|null);

        /** FromRadio moduleConfig */
        moduleConfig?: (meshtastic.IModuleConfig|null);

        /** FromRadio channel */
        channel?: (meshtastic.IChannel|null);

        /** FromRadio queueStatus */
        queueStatus?: (meshtastic.IQueueStatus|null);

        /** FromRadio xmodemPacket */
        xmodemPacket?: (meshtastic.IXModem|null);

        /** FromRadio metadata */
        metadata?: (meshtastic.IDeviceMetadata|null);

        /** FromRadio mqttClientProxyMessage */
        mqttClientProxyMessage?: (meshtastic.IMqttClientProxyMessage|null);

        /** FromRadio fileInfo */
        fileInfo?: (meshtastic.IFileInfo|null);

        /** FromRadio clientNotification */
        clientNotification?: (meshtastic.IClientNotification|null);

        /** FromRadio deviceuiConfig */
        deviceuiConfig?: (meshtastic.IDeviceUIConfig|null);
    }

    /** Represents a FromRadio. */
    class FromRadio implements IFromRadio {

        /**
         * Constructs a new FromRadio.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IFromRadio);

        /** FromRadio id. */
        public id: number;

        /** FromRadio packet. */
        public packet?: (meshtastic.IMeshPacket|null);

        /** FromRadio myInfo. */
        public myInfo?: (meshtastic.IMyNodeInfo|null);

        /** FromRadio nodeInfo. */
        public nodeInfo?: (meshtastic.INodeInfo|null);

        /** FromRadio config. */
        public config?: (meshtastic.IConfig|null);

        /** FromRadio logRecord. */
        public logRecord?: (meshtastic.ILogRecord|null);

        /** FromRadio configCompleteId. */
        public configCompleteId?: (number|null);

        /** FromRadio rebooted. */
        public rebooted?: (boolean|null);

        /** FromRadio moduleConfig. */
        public moduleConfig?: (meshtastic.IModuleConfig|null);

        /** FromRadio channel. */
        public channel?: (meshtastic.IChannel|null);

        /** FromRadio queueStatus. */
        public queueStatus?: (meshtastic.IQueueStatus|null);

        /** FromRadio xmodemPacket. */
        public xmodemPacket?: (meshtastic.IXModem|null);

        /** FromRadio metadata. */
        public metadata?: (meshtastic.IDeviceMetadata|null);

        /** FromRadio mqttClientProxyMessage. */
        public mqttClientProxyMessage?: (meshtastic.IMqttClientProxyMessage|null);

        /** FromRadio fileInfo. */
        public fileInfo?: (meshtastic.IFileInfo|null);

        /** FromRadio clientNotification. */
        public clientNotification?: (meshtastic.IClientNotification|null);

        /** FromRadio deviceuiConfig. */
        public deviceuiConfig?: (meshtastic.IDeviceUIConfig|null);

        /** FromRadio payloadVariant. */
        public payloadVariant?: ("packet"|"myInfo"|"nodeInfo"|"config"|"logRecord"|"configCompleteId"|"rebooted"|"moduleConfig"|"channel"|"queueStatus"|"xmodemPacket"|"metadata"|"mqttClientProxyMessage"|"fileInfo"|"clientNotification"|"deviceuiConfig");

        /**
         * Creates a new FromRadio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FromRadio instance
         */
        public static create(properties?: meshtastic.IFromRadio): meshtastic.FromRadio;

        /**
         * Encodes the specified FromRadio message. Does not implicitly {@link meshtastic.FromRadio.verify|verify} messages.
         * @param message FromRadio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IFromRadio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FromRadio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FromRadio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.FromRadio;

        /**
         * Creates a FromRadio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FromRadio
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.FromRadio;

        /**
         * Creates a plain object from a FromRadio message. Also converts values to other types if specified.
         * @param message FromRadio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.FromRadio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FromRadio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FromRadio
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ClientNotification. */
    interface IClientNotification {

        /** ClientNotification replyId */
        replyId?: (number|null);

        /** ClientNotification time */
        time?: (number|null);

        /** ClientNotification level */
        level?: (meshtastic.LogRecord.Level|null);

        /** ClientNotification message */
        message?: (string|null);

        /** ClientNotification keyVerificationNumberInform */
        keyVerificationNumberInform?: (meshtastic.IKeyVerificationNumberInform|null);

        /** ClientNotification keyVerificationNumberRequest */
        keyVerificationNumberRequest?: (meshtastic.IKeyVerificationNumberRequest|null);

        /** ClientNotification keyVerificationFinal */
        keyVerificationFinal?: (meshtastic.IKeyVerificationFinal|null);

        /** ClientNotification duplicatedPublicKey */
        duplicatedPublicKey?: (meshtastic.IDuplicatedPublicKey|null);

        /** ClientNotification lowEntropyKey */
        lowEntropyKey?: (meshtastic.ILowEntropyKey|null);
    }

    /** Represents a ClientNotification. */
    class ClientNotification implements IClientNotification {

        /**
         * Constructs a new ClientNotification.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IClientNotification);

        /** ClientNotification replyId. */
        public replyId?: (number|null);

        /** ClientNotification time. */
        public time: number;

        /** ClientNotification level. */
        public level: meshtastic.LogRecord.Level;

        /** ClientNotification message. */
        public message: string;

        /** ClientNotification keyVerificationNumberInform. */
        public keyVerificationNumberInform?: (meshtastic.IKeyVerificationNumberInform|null);

        /** ClientNotification keyVerificationNumberRequest. */
        public keyVerificationNumberRequest?: (meshtastic.IKeyVerificationNumberRequest|null);

        /** ClientNotification keyVerificationFinal. */
        public keyVerificationFinal?: (meshtastic.IKeyVerificationFinal|null);

        /** ClientNotification duplicatedPublicKey. */
        public duplicatedPublicKey?: (meshtastic.IDuplicatedPublicKey|null);

        /** ClientNotification lowEntropyKey. */
        public lowEntropyKey?: (meshtastic.ILowEntropyKey|null);

        /** ClientNotification _replyId. */
        public _replyId?: "replyId";

        /** ClientNotification payloadVariant. */
        public payloadVariant?: ("keyVerificationNumberInform"|"keyVerificationNumberRequest"|"keyVerificationFinal"|"duplicatedPublicKey"|"lowEntropyKey");

        /**
         * Creates a new ClientNotification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientNotification instance
         */
        public static create(properties?: meshtastic.IClientNotification): meshtastic.ClientNotification;

        /**
         * Encodes the specified ClientNotification message. Does not implicitly {@link meshtastic.ClientNotification.verify|verify} messages.
         * @param message ClientNotification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IClientNotification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientNotification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ClientNotification;

        /**
         * Creates a ClientNotification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientNotification
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ClientNotification;

        /**
         * Creates a plain object from a ClientNotification message. Also converts values to other types if specified.
         * @param message ClientNotification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ClientNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientNotification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientNotification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyVerificationNumberInform. */
    interface IKeyVerificationNumberInform {

        /** KeyVerificationNumberInform nonce */
        nonce?: (number|Long|null);

        /** KeyVerificationNumberInform remoteLongname */
        remoteLongname?: (string|null);

        /** KeyVerificationNumberInform securityNumber */
        securityNumber?: (number|null);
    }

    /** Represents a KeyVerificationNumberInform. */
    class KeyVerificationNumberInform implements IKeyVerificationNumberInform {

        /**
         * Constructs a new KeyVerificationNumberInform.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IKeyVerificationNumberInform);

        /** KeyVerificationNumberInform nonce. */
        public nonce: (number|Long);

        /** KeyVerificationNumberInform remoteLongname. */
        public remoteLongname: string;

        /** KeyVerificationNumberInform securityNumber. */
        public securityNumber: number;

        /**
         * Creates a new KeyVerificationNumberInform instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyVerificationNumberInform instance
         */
        public static create(properties?: meshtastic.IKeyVerificationNumberInform): meshtastic.KeyVerificationNumberInform;

        /**
         * Encodes the specified KeyVerificationNumberInform message. Does not implicitly {@link meshtastic.KeyVerificationNumberInform.verify|verify} messages.
         * @param message KeyVerificationNumberInform message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IKeyVerificationNumberInform, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyVerificationNumberInform message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyVerificationNumberInform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.KeyVerificationNumberInform;

        /**
         * Creates a KeyVerificationNumberInform message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyVerificationNumberInform
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.KeyVerificationNumberInform;

        /**
         * Creates a plain object from a KeyVerificationNumberInform message. Also converts values to other types if specified.
         * @param message KeyVerificationNumberInform
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.KeyVerificationNumberInform, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyVerificationNumberInform to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyVerificationNumberInform
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyVerificationNumberRequest. */
    interface IKeyVerificationNumberRequest {

        /** KeyVerificationNumberRequest nonce */
        nonce?: (number|Long|null);

        /** KeyVerificationNumberRequest remoteLongname */
        remoteLongname?: (string|null);
    }

    /** Represents a KeyVerificationNumberRequest. */
    class KeyVerificationNumberRequest implements IKeyVerificationNumberRequest {

        /**
         * Constructs a new KeyVerificationNumberRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IKeyVerificationNumberRequest);

        /** KeyVerificationNumberRequest nonce. */
        public nonce: (number|Long);

        /** KeyVerificationNumberRequest remoteLongname. */
        public remoteLongname: string;

        /**
         * Creates a new KeyVerificationNumberRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyVerificationNumberRequest instance
         */
        public static create(properties?: meshtastic.IKeyVerificationNumberRequest): meshtastic.KeyVerificationNumberRequest;

        /**
         * Encodes the specified KeyVerificationNumberRequest message. Does not implicitly {@link meshtastic.KeyVerificationNumberRequest.verify|verify} messages.
         * @param message KeyVerificationNumberRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IKeyVerificationNumberRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyVerificationNumberRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyVerificationNumberRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.KeyVerificationNumberRequest;

        /**
         * Creates a KeyVerificationNumberRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyVerificationNumberRequest
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.KeyVerificationNumberRequest;

        /**
         * Creates a plain object from a KeyVerificationNumberRequest message. Also converts values to other types if specified.
         * @param message KeyVerificationNumberRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.KeyVerificationNumberRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyVerificationNumberRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyVerificationNumberRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a KeyVerificationFinal. */
    interface IKeyVerificationFinal {

        /** KeyVerificationFinal nonce */
        nonce?: (number|Long|null);

        /** KeyVerificationFinal remoteLongname */
        remoteLongname?: (string|null);

        /** KeyVerificationFinal isSender */
        isSender?: (boolean|null);

        /** KeyVerificationFinal verificationCharacters */
        verificationCharacters?: (string|null);
    }

    /** Represents a KeyVerificationFinal. */
    class KeyVerificationFinal implements IKeyVerificationFinal {

        /**
         * Constructs a new KeyVerificationFinal.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IKeyVerificationFinal);

        /** KeyVerificationFinal nonce. */
        public nonce: (number|Long);

        /** KeyVerificationFinal remoteLongname. */
        public remoteLongname: string;

        /** KeyVerificationFinal isSender. */
        public isSender: boolean;

        /** KeyVerificationFinal verificationCharacters. */
        public verificationCharacters: string;

        /**
         * Creates a new KeyVerificationFinal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyVerificationFinal instance
         */
        public static create(properties?: meshtastic.IKeyVerificationFinal): meshtastic.KeyVerificationFinal;

        /**
         * Encodes the specified KeyVerificationFinal message. Does not implicitly {@link meshtastic.KeyVerificationFinal.verify|verify} messages.
         * @param message KeyVerificationFinal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IKeyVerificationFinal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyVerificationFinal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyVerificationFinal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.KeyVerificationFinal;

        /**
         * Creates a KeyVerificationFinal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyVerificationFinal
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.KeyVerificationFinal;

        /**
         * Creates a plain object from a KeyVerificationFinal message. Also converts values to other types if specified.
         * @param message KeyVerificationFinal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.KeyVerificationFinal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyVerificationFinal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for KeyVerificationFinal
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DuplicatedPublicKey. */
    interface IDuplicatedPublicKey {
    }

    /** Represents a DuplicatedPublicKey. */
    class DuplicatedPublicKey implements IDuplicatedPublicKey {

        /**
         * Constructs a new DuplicatedPublicKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IDuplicatedPublicKey);

        /**
         * Creates a new DuplicatedPublicKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DuplicatedPublicKey instance
         */
        public static create(properties?: meshtastic.IDuplicatedPublicKey): meshtastic.DuplicatedPublicKey;

        /**
         * Encodes the specified DuplicatedPublicKey message. Does not implicitly {@link meshtastic.DuplicatedPublicKey.verify|verify} messages.
         * @param message DuplicatedPublicKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IDuplicatedPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DuplicatedPublicKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DuplicatedPublicKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.DuplicatedPublicKey;

        /**
         * Creates a DuplicatedPublicKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DuplicatedPublicKey
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.DuplicatedPublicKey;

        /**
         * Creates a plain object from a DuplicatedPublicKey message. Also converts values to other types if specified.
         * @param message DuplicatedPublicKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.DuplicatedPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DuplicatedPublicKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DuplicatedPublicKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LowEntropyKey. */
    interface ILowEntropyKey {
    }

    /** Represents a LowEntropyKey. */
    class LowEntropyKey implements ILowEntropyKey {

        /**
         * Constructs a new LowEntropyKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.ILowEntropyKey);

        /**
         * Creates a new LowEntropyKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LowEntropyKey instance
         */
        public static create(properties?: meshtastic.ILowEntropyKey): meshtastic.LowEntropyKey;

        /**
         * Encodes the specified LowEntropyKey message. Does not implicitly {@link meshtastic.LowEntropyKey.verify|verify} messages.
         * @param message LowEntropyKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.ILowEntropyKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LowEntropyKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LowEntropyKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.LowEntropyKey;

        /**
         * Creates a LowEntropyKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LowEntropyKey
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.LowEntropyKey;

        /**
         * Creates a plain object from a LowEntropyKey message. Also converts values to other types if specified.
         * @param message LowEntropyKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.LowEntropyKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LowEntropyKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LowEntropyKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FileInfo. */
    interface IFileInfo {

        /** FileInfo fileName */
        fileName?: (string|null);

        /** FileInfo sizeBytes */
        sizeBytes?: (number|null);
    }

    /** Represents a FileInfo. */
    class FileInfo implements IFileInfo {

        /**
         * Constructs a new FileInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IFileInfo);

        /** FileInfo fileName. */
        public fileName: string;

        /** FileInfo sizeBytes. */
        public sizeBytes: number;

        /**
         * Creates a new FileInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileInfo instance
         */
        public static create(properties?: meshtastic.IFileInfo): meshtastic.FileInfo;

        /**
         * Encodes the specified FileInfo message. Does not implicitly {@link meshtastic.FileInfo.verify|verify} messages.
         * @param message FileInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IFileInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.FileInfo;

        /**
         * Creates a FileInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileInfo
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.FileInfo;

        /**
         * Creates a plain object from a FileInfo message. Also converts values to other types if specified.
         * @param message FileInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.FileInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ToRadio. */
    interface IToRadio {

        /** ToRadio packet */
        packet?: (meshtastic.IMeshPacket|null);

        /** ToRadio wantConfigId */
        wantConfigId?: (number|null);

        /** ToRadio disconnect */
        disconnect?: (boolean|null);

        /** ToRadio xmodemPacket */
        xmodemPacket?: (meshtastic.IXModem|null);

        /** ToRadio mqttClientProxyMessage */
        mqttClientProxyMessage?: (meshtastic.IMqttClientProxyMessage|null);

        /** ToRadio heartbeat */
        heartbeat?: (meshtastic.IHeartbeat|null);
    }

    /** Represents a ToRadio. */
    class ToRadio implements IToRadio {

        /**
         * Constructs a new ToRadio.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IToRadio);

        /** ToRadio packet. */
        public packet?: (meshtastic.IMeshPacket|null);

        /** ToRadio wantConfigId. */
        public wantConfigId?: (number|null);

        /** ToRadio disconnect. */
        public disconnect?: (boolean|null);

        /** ToRadio xmodemPacket. */
        public xmodemPacket?: (meshtastic.IXModem|null);

        /** ToRadio mqttClientProxyMessage. */
        public mqttClientProxyMessage?: (meshtastic.IMqttClientProxyMessage|null);

        /** ToRadio heartbeat. */
        public heartbeat?: (meshtastic.IHeartbeat|null);

        /** ToRadio payloadVariant. */
        public payloadVariant?: ("packet"|"wantConfigId"|"disconnect"|"xmodemPacket"|"mqttClientProxyMessage"|"heartbeat");

        /**
         * Creates a new ToRadio instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToRadio instance
         */
        public static create(properties?: meshtastic.IToRadio): meshtastic.ToRadio;

        /**
         * Encodes the specified ToRadio message. Does not implicitly {@link meshtastic.ToRadio.verify|verify} messages.
         * @param message ToRadio message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IToRadio, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToRadio message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToRadio
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ToRadio;

        /**
         * Creates a ToRadio message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToRadio
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ToRadio;

        /**
         * Creates a plain object from a ToRadio message. Also converts values to other types if specified.
         * @param message ToRadio
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ToRadio, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToRadio to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToRadio
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Compressed. */
    interface ICompressed {

        /** Compressed portnum */
        portnum?: (meshtastic.PortNum|null);

        /** Compressed data */
        data?: (Uint8Array|null);
    }

    /** Represents a Compressed. */
    class Compressed implements ICompressed {

        /**
         * Constructs a new Compressed.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.ICompressed);

        /** Compressed portnum. */
        public portnum: meshtastic.PortNum;

        /** Compressed data. */
        public data: Uint8Array;

        /**
         * Creates a new Compressed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Compressed instance
         */
        public static create(properties?: meshtastic.ICompressed): meshtastic.Compressed;

        /**
         * Encodes the specified Compressed message. Does not implicitly {@link meshtastic.Compressed.verify|verify} messages.
         * @param message Compressed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.ICompressed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Compressed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Compressed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Compressed;

        /**
         * Creates a Compressed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Compressed
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Compressed;

        /**
         * Creates a plain object from a Compressed message. Also converts values to other types if specified.
         * @param message Compressed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Compressed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Compressed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Compressed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NeighborInfo. */
    interface INeighborInfo {

        /** NeighborInfo nodeId */
        nodeId?: (number|null);

        /** NeighborInfo lastSentById */
        lastSentById?: (number|null);

        /** NeighborInfo nodeBroadcastIntervalSecs */
        nodeBroadcastIntervalSecs?: (number|null);

        /** NeighborInfo neighbors */
        neighbors?: (meshtastic.INeighbor[]|null);
    }

    /** Represents a NeighborInfo. */
    class NeighborInfo implements INeighborInfo {

        /**
         * Constructs a new NeighborInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INeighborInfo);

        /** NeighborInfo nodeId. */
        public nodeId: number;

        /** NeighborInfo lastSentById. */
        public lastSentById: number;

        /** NeighborInfo nodeBroadcastIntervalSecs. */
        public nodeBroadcastIntervalSecs: number;

        /** NeighborInfo neighbors. */
        public neighbors: meshtastic.INeighbor[];

        /**
         * Creates a new NeighborInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NeighborInfo instance
         */
        public static create(properties?: meshtastic.INeighborInfo): meshtastic.NeighborInfo;

        /**
         * Encodes the specified NeighborInfo message. Does not implicitly {@link meshtastic.NeighborInfo.verify|verify} messages.
         * @param message NeighborInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INeighborInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NeighborInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NeighborInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.NeighborInfo;

        /**
         * Creates a NeighborInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NeighborInfo
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.NeighborInfo;

        /**
         * Creates a plain object from a NeighborInfo message. Also converts values to other types if specified.
         * @param message NeighborInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.NeighborInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NeighborInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NeighborInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Neighbor. */
    interface INeighbor {

        /** Neighbor nodeId */
        nodeId?: (number|null);

        /** Neighbor snr */
        snr?: (number|null);

        /** Neighbor lastRxTime */
        lastRxTime?: (number|null);

        /** Neighbor nodeBroadcastIntervalSecs */
        nodeBroadcastIntervalSecs?: (number|null);
    }

    /** Represents a Neighbor. */
    class Neighbor implements INeighbor {

        /**
         * Constructs a new Neighbor.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INeighbor);

        /** Neighbor nodeId. */
        public nodeId: number;

        /** Neighbor snr. */
        public snr: number;

        /** Neighbor lastRxTime. */
        public lastRxTime: number;

        /** Neighbor nodeBroadcastIntervalSecs. */
        public nodeBroadcastIntervalSecs: number;

        /**
         * Creates a new Neighbor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Neighbor instance
         */
        public static create(properties?: meshtastic.INeighbor): meshtastic.Neighbor;

        /**
         * Encodes the specified Neighbor message. Does not implicitly {@link meshtastic.Neighbor.verify|verify} messages.
         * @param message Neighbor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INeighbor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Neighbor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Neighbor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Neighbor;

        /**
         * Creates a Neighbor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Neighbor
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Neighbor;

        /**
         * Creates a plain object from a Neighbor message. Also converts values to other types if specified.
         * @param message Neighbor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Neighbor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Neighbor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Neighbor
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DeviceMetadata. */
    interface IDeviceMetadata {

        /** DeviceMetadata firmwareVersion */
        firmwareVersion?: (string|null);

        /** DeviceMetadata deviceStateVersion */
        deviceStateVersion?: (number|null);

        /** DeviceMetadata canShutdown */
        canShutdown?: (boolean|null);

        /** DeviceMetadata hasWifi */
        hasWifi?: (boolean|null);

        /** DeviceMetadata hasBluetooth */
        hasBluetooth?: (boolean|null);

        /** DeviceMetadata hasEthernet */
        hasEthernet?: (boolean|null);

        /** DeviceMetadata role */
        role?: (meshtastic.Config.DeviceConfig.Role|null);

        /** DeviceMetadata positionFlags */
        positionFlags?: (number|null);

        /** DeviceMetadata hwModel */
        hwModel?: (meshtastic.HardwareModel|null);

        /** DeviceMetadata hasRemoteHardware */
        hasRemoteHardware?: (boolean|null);

        /** DeviceMetadata hasPKC */
        hasPKC?: (boolean|null);

        /** DeviceMetadata excludedModules */
        excludedModules?: (number|null);
    }

    /** Represents a DeviceMetadata. */
    class DeviceMetadata implements IDeviceMetadata {

        /**
         * Constructs a new DeviceMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IDeviceMetadata);

        /** DeviceMetadata firmwareVersion. */
        public firmwareVersion: string;

        /** DeviceMetadata deviceStateVersion. */
        public deviceStateVersion: number;

        /** DeviceMetadata canShutdown. */
        public canShutdown: boolean;

        /** DeviceMetadata hasWifi. */
        public hasWifi: boolean;

        /** DeviceMetadata hasBluetooth. */
        public hasBluetooth: boolean;

        /** DeviceMetadata hasEthernet. */
        public hasEthernet: boolean;

        /** DeviceMetadata role. */
        public role: meshtastic.Config.DeviceConfig.Role;

        /** DeviceMetadata positionFlags. */
        public positionFlags: number;

        /** DeviceMetadata hwModel. */
        public hwModel: meshtastic.HardwareModel;

        /** DeviceMetadata hasRemoteHardware. */
        public hasRemoteHardware: boolean;

        /** DeviceMetadata hasPKC. */
        public hasPKC: boolean;

        /** DeviceMetadata excludedModules. */
        public excludedModules: number;

        /**
         * Creates a new DeviceMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceMetadata instance
         */
        public static create(properties?: meshtastic.IDeviceMetadata): meshtastic.DeviceMetadata;

        /**
         * Encodes the specified DeviceMetadata message. Does not implicitly {@link meshtastic.DeviceMetadata.verify|verify} messages.
         * @param message DeviceMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IDeviceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.DeviceMetadata;

        /**
         * Creates a DeviceMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceMetadata
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.DeviceMetadata;

        /**
         * Creates a plain object from a DeviceMetadata message. Also converts values to other types if specified.
         * @param message DeviceMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.DeviceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceMetadata
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** ExcludedModules enum. */
    enum ExcludedModules {
        EXCLUDED_NONE = 0,
        MQTT_CONFIG = 1,
        SERIAL_CONFIG = 2,
        EXTNOTIF_CONFIG = 4,
        STOREFORWARD_CONFIG = 8,
        RANGETEST_CONFIG = 16,
        TELEMETRY_CONFIG = 32,
        CANNEDMSG_CONFIG = 64,
        AUDIO_CONFIG = 128,
        REMOTEHARDWARE_CONFIG = 256,
        NEIGHBORINFO_CONFIG = 512,
        AMBIENTLIGHTING_CONFIG = 1024,
        DETECTIONSENSOR_CONFIG = 2048,
        PAXCOUNTER_CONFIG = 4096,
        BLUETOOTH_CONFIG = 8192,
        NETWORK_CONFIG = 16384
    }

    /** Properties of a Heartbeat. */
    interface IHeartbeat {

        /** Heartbeat nonce */
        nonce?: (number|null);
    }

    /** Represents a Heartbeat. */
    class Heartbeat implements IHeartbeat {

        /**
         * Constructs a new Heartbeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IHeartbeat);

        /** Heartbeat nonce. */
        public nonce: number;

        /**
         * Creates a new Heartbeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Heartbeat instance
         */
        public static create(properties?: meshtastic.IHeartbeat): meshtastic.Heartbeat;

        /**
         * Encodes the specified Heartbeat message. Does not implicitly {@link meshtastic.Heartbeat.verify|verify} messages.
         * @param message Heartbeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Heartbeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Heartbeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Heartbeat;

        /**
         * Creates a Heartbeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Heartbeat
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Heartbeat;

        /**
         * Creates a plain object from a Heartbeat message. Also converts values to other types if specified.
         * @param message Heartbeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Heartbeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Heartbeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Heartbeat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a NodeRemoteHardwarePin. */
    interface INodeRemoteHardwarePin {

        /** NodeRemoteHardwarePin nodeNum */
        nodeNum?: (number|null);

        /** NodeRemoteHardwarePin pin */
        pin?: (meshtastic.IRemoteHardwarePin|null);
    }

    /** Represents a NodeRemoteHardwarePin. */
    class NodeRemoteHardwarePin implements INodeRemoteHardwarePin {

        /**
         * Constructs a new NodeRemoteHardwarePin.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INodeRemoteHardwarePin);

        /** NodeRemoteHardwarePin nodeNum. */
        public nodeNum: number;

        /** NodeRemoteHardwarePin pin. */
        public pin?: (meshtastic.IRemoteHardwarePin|null);

        /**
         * Creates a new NodeRemoteHardwarePin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeRemoteHardwarePin instance
         */
        public static create(properties?: meshtastic.INodeRemoteHardwarePin): meshtastic.NodeRemoteHardwarePin;

        /**
         * Encodes the specified NodeRemoteHardwarePin message. Does not implicitly {@link meshtastic.NodeRemoteHardwarePin.verify|verify} messages.
         * @param message NodeRemoteHardwarePin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INodeRemoteHardwarePin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeRemoteHardwarePin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeRemoteHardwarePin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.NodeRemoteHardwarePin;

        /**
         * Creates a NodeRemoteHardwarePin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeRemoteHardwarePin
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.NodeRemoteHardwarePin;

        /**
         * Creates a plain object from a NodeRemoteHardwarePin message. Also converts values to other types if specified.
         * @param message NodeRemoteHardwarePin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.NodeRemoteHardwarePin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeRemoteHardwarePin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NodeRemoteHardwarePin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChunkedPayload. */
    interface IChunkedPayload {

        /** ChunkedPayload payloadId */
        payloadId?: (number|null);

        /** ChunkedPayload chunkCount */
        chunkCount?: (number|null);

        /** ChunkedPayload chunkIndex */
        chunkIndex?: (number|null);

        /** ChunkedPayload payloadChunk */
        payloadChunk?: (Uint8Array|null);
    }

    /** Represents a ChunkedPayload. */
    class ChunkedPayload implements IChunkedPayload {

        /**
         * Constructs a new ChunkedPayload.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IChunkedPayload);

        /** ChunkedPayload payloadId. */
        public payloadId: number;

        /** ChunkedPayload chunkCount. */
        public chunkCount: number;

        /** ChunkedPayload chunkIndex. */
        public chunkIndex: number;

        /** ChunkedPayload payloadChunk. */
        public payloadChunk: Uint8Array;

        /**
         * Creates a new ChunkedPayload instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChunkedPayload instance
         */
        public static create(properties?: meshtastic.IChunkedPayload): meshtastic.ChunkedPayload;

        /**
         * Encodes the specified ChunkedPayload message. Does not implicitly {@link meshtastic.ChunkedPayload.verify|verify} messages.
         * @param message ChunkedPayload message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IChunkedPayload, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChunkedPayload message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChunkedPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ChunkedPayload;

        /**
         * Creates a ChunkedPayload message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChunkedPayload
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ChunkedPayload;

        /**
         * Creates a plain object from a ChunkedPayload message. Also converts values to other types if specified.
         * @param message ChunkedPayload
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ChunkedPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChunkedPayload to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChunkedPayload
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a resend_chunks. */
    interface Iresend_chunks {

        /** resend_chunks chunks */
        chunks?: (number[]|null);
    }

    /** Represents a resend_chunks. */
    class resend_chunks implements Iresend_chunks {

        /**
         * Constructs a new resend_chunks.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.Iresend_chunks);

        /** resend_chunks chunks. */
        public chunks: number[];

        /**
         * Creates a new resend_chunks instance using the specified properties.
         * @param [properties] Properties to set
         * @returns resend_chunks instance
         */
        public static create(properties?: meshtastic.Iresend_chunks): meshtastic.resend_chunks;

        /**
         * Encodes the specified resend_chunks message. Does not implicitly {@link meshtastic.resend_chunks.verify|verify} messages.
         * @param message resend_chunks message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.Iresend_chunks, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a resend_chunks message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns resend_chunks
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.resend_chunks;

        /**
         * Creates a resend_chunks message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns resend_chunks
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.resend_chunks;

        /**
         * Creates a plain object from a resend_chunks message. Also converts values to other types if specified.
         * @param message resend_chunks
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.resend_chunks, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this resend_chunks to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for resend_chunks
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ChunkedPayloadResponse. */
    interface IChunkedPayloadResponse {

        /** ChunkedPayloadResponse payloadId */
        payloadId?: (number|null);

        /** ChunkedPayloadResponse requestTransfer */
        requestTransfer?: (boolean|null);

        /** ChunkedPayloadResponse acceptTransfer */
        acceptTransfer?: (boolean|null);

        /** ChunkedPayloadResponse resendChunks */
        resendChunks?: (meshtastic.Iresend_chunks|null);
    }

    /** Represents a ChunkedPayloadResponse. */
    class ChunkedPayloadResponse implements IChunkedPayloadResponse {

        /**
         * Constructs a new ChunkedPayloadResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IChunkedPayloadResponse);

        /** ChunkedPayloadResponse payloadId. */
        public payloadId: number;

        /** ChunkedPayloadResponse requestTransfer. */
        public requestTransfer?: (boolean|null);

        /** ChunkedPayloadResponse acceptTransfer. */
        public acceptTransfer?: (boolean|null);

        /** ChunkedPayloadResponse resendChunks. */
        public resendChunks?: (meshtastic.Iresend_chunks|null);

        /** ChunkedPayloadResponse payloadVariant. */
        public payloadVariant?: ("requestTransfer"|"acceptTransfer"|"resendChunks");

        /**
         * Creates a new ChunkedPayloadResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChunkedPayloadResponse instance
         */
        public static create(properties?: meshtastic.IChunkedPayloadResponse): meshtastic.ChunkedPayloadResponse;

        /**
         * Encodes the specified ChunkedPayloadResponse message. Does not implicitly {@link meshtastic.ChunkedPayloadResponse.verify|verify} messages.
         * @param message ChunkedPayloadResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IChunkedPayloadResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChunkedPayloadResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChunkedPayloadResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ChunkedPayloadResponse;

        /**
         * Creates a ChunkedPayloadResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChunkedPayloadResponse
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ChunkedPayloadResponse;

        /**
         * Creates a plain object from a ChunkedPayloadResponse message. Also converts values to other types if specified.
         * @param message ChunkedPayloadResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ChunkedPayloadResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChunkedPayloadResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChunkedPayloadResponse
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ModuleConfig. */
    interface IModuleConfig {

        /** ModuleConfig mqtt */
        mqtt?: (meshtastic.ModuleConfig.IMQTTConfig|null);

        /** ModuleConfig serial */
        serial?: (meshtastic.ModuleConfig.ISerialConfig|null);

        /** ModuleConfig externalNotification */
        externalNotification?: (meshtastic.ModuleConfig.IExternalNotificationConfig|null);

        /** ModuleConfig storeForward */
        storeForward?: (meshtastic.ModuleConfig.IStoreForwardConfig|null);

        /** ModuleConfig rangeTest */
        rangeTest?: (meshtastic.ModuleConfig.IRangeTestConfig|null);

        /** ModuleConfig telemetry */
        telemetry?: (meshtastic.ModuleConfig.ITelemetryConfig|null);

        /** ModuleConfig cannedMessage */
        cannedMessage?: (meshtastic.ModuleConfig.ICannedMessageConfig|null);

        /** ModuleConfig audio */
        audio?: (meshtastic.ModuleConfig.IAudioConfig|null);

        /** ModuleConfig remoteHardware */
        remoteHardware?: (meshtastic.ModuleConfig.IRemoteHardwareConfig|null);

        /** ModuleConfig neighborInfo */
        neighborInfo?: (meshtastic.ModuleConfig.INeighborInfoConfig|null);

        /** ModuleConfig ambientLighting */
        ambientLighting?: (meshtastic.ModuleConfig.IAmbientLightingConfig|null);

        /** ModuleConfig detectionSensor */
        detectionSensor?: (meshtastic.ModuleConfig.IDetectionSensorConfig|null);

        /** ModuleConfig paxcounter */
        paxcounter?: (meshtastic.ModuleConfig.IPaxcounterConfig|null);
    }

    /** Represents a ModuleConfig. */
    class ModuleConfig implements IModuleConfig {

        /**
         * Constructs a new ModuleConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IModuleConfig);

        /** ModuleConfig mqtt. */
        public mqtt?: (meshtastic.ModuleConfig.IMQTTConfig|null);

        /** ModuleConfig serial. */
        public serial?: (meshtastic.ModuleConfig.ISerialConfig|null);

        /** ModuleConfig externalNotification. */
        public externalNotification?: (meshtastic.ModuleConfig.IExternalNotificationConfig|null);

        /** ModuleConfig storeForward. */
        public storeForward?: (meshtastic.ModuleConfig.IStoreForwardConfig|null);

        /** ModuleConfig rangeTest. */
        public rangeTest?: (meshtastic.ModuleConfig.IRangeTestConfig|null);

        /** ModuleConfig telemetry. */
        public telemetry?: (meshtastic.ModuleConfig.ITelemetryConfig|null);

        /** ModuleConfig cannedMessage. */
        public cannedMessage?: (meshtastic.ModuleConfig.ICannedMessageConfig|null);

        /** ModuleConfig audio. */
        public audio?: (meshtastic.ModuleConfig.IAudioConfig|null);

        /** ModuleConfig remoteHardware. */
        public remoteHardware?: (meshtastic.ModuleConfig.IRemoteHardwareConfig|null);

        /** ModuleConfig neighborInfo. */
        public neighborInfo?: (meshtastic.ModuleConfig.INeighborInfoConfig|null);

        /** ModuleConfig ambientLighting. */
        public ambientLighting?: (meshtastic.ModuleConfig.IAmbientLightingConfig|null);

        /** ModuleConfig detectionSensor. */
        public detectionSensor?: (meshtastic.ModuleConfig.IDetectionSensorConfig|null);

        /** ModuleConfig paxcounter. */
        public paxcounter?: (meshtastic.ModuleConfig.IPaxcounterConfig|null);

        /** ModuleConfig payloadVariant. */
        public payloadVariant?: ("mqtt"|"serial"|"externalNotification"|"storeForward"|"rangeTest"|"telemetry"|"cannedMessage"|"audio"|"remoteHardware"|"neighborInfo"|"ambientLighting"|"detectionSensor"|"paxcounter");

        /**
         * Creates a new ModuleConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModuleConfig instance
         */
        public static create(properties?: meshtastic.IModuleConfig): meshtastic.ModuleConfig;

        /**
         * Encodes the specified ModuleConfig message. Does not implicitly {@link meshtastic.ModuleConfig.verify|verify} messages.
         * @param message ModuleConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IModuleConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModuleConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModuleConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig;

        /**
         * Creates a ModuleConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModuleConfig
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig;

        /**
         * Creates a plain object from a ModuleConfig message. Also converts values to other types if specified.
         * @param message ModuleConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ModuleConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModuleConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ModuleConfig
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ModuleConfig {

        /** Properties of a MQTTConfig. */
        interface IMQTTConfig {

            /** MQTTConfig enabled */
            enabled?: (boolean|null);

            /** MQTTConfig address */
            address?: (string|null);

            /** MQTTConfig username */
            username?: (string|null);

            /** MQTTConfig password */
            password?: (string|null);

            /** MQTTConfig encryptionEnabled */
            encryptionEnabled?: (boolean|null);

            /** MQTTConfig jsonEnabled */
            jsonEnabled?: (boolean|null);

            /** MQTTConfig tlsEnabled */
            tlsEnabled?: (boolean|null);

            /** MQTTConfig root */
            root?: (string|null);

            /** MQTTConfig proxyToClientEnabled */
            proxyToClientEnabled?: (boolean|null);

            /** MQTTConfig mapReportingEnabled */
            mapReportingEnabled?: (boolean|null);

            /** MQTTConfig mapReportSettings */
            mapReportSettings?: (meshtastic.ModuleConfig.IMapReportSettings|null);
        }

        /** Represents a MQTTConfig. */
        class MQTTConfig implements IMQTTConfig {

            /**
             * Constructs a new MQTTConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IMQTTConfig);

            /** MQTTConfig enabled. */
            public enabled: boolean;

            /** MQTTConfig address. */
            public address: string;

            /** MQTTConfig username. */
            public username: string;

            /** MQTTConfig password. */
            public password: string;

            /** MQTTConfig encryptionEnabled. */
            public encryptionEnabled: boolean;

            /** MQTTConfig jsonEnabled. */
            public jsonEnabled: boolean;

            /** MQTTConfig tlsEnabled. */
            public tlsEnabled: boolean;

            /** MQTTConfig root. */
            public root: string;

            /** MQTTConfig proxyToClientEnabled. */
            public proxyToClientEnabled: boolean;

            /** MQTTConfig mapReportingEnabled. */
            public mapReportingEnabled: boolean;

            /** MQTTConfig mapReportSettings. */
            public mapReportSettings?: (meshtastic.ModuleConfig.IMapReportSettings|null);

            /**
             * Creates a new MQTTConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MQTTConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IMQTTConfig): meshtastic.ModuleConfig.MQTTConfig;

            /**
             * Encodes the specified MQTTConfig message. Does not implicitly {@link meshtastic.ModuleConfig.MQTTConfig.verify|verify} messages.
             * @param message MQTTConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IMQTTConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MQTTConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MQTTConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.MQTTConfig;

            /**
             * Creates a MQTTConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MQTTConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.MQTTConfig;

            /**
             * Creates a plain object from a MQTTConfig message. Also converts values to other types if specified.
             * @param message MQTTConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.MQTTConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MQTTConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MQTTConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MapReportSettings. */
        interface IMapReportSettings {

            /** MapReportSettings publishIntervalSecs */
            publishIntervalSecs?: (number|null);

            /** MapReportSettings positionPrecision */
            positionPrecision?: (number|null);

            /** MapReportSettings shouldReportLocation */
            shouldReportLocation?: (boolean|null);
        }

        /** Represents a MapReportSettings. */
        class MapReportSettings implements IMapReportSettings {

            /**
             * Constructs a new MapReportSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IMapReportSettings);

            /** MapReportSettings publishIntervalSecs. */
            public publishIntervalSecs: number;

            /** MapReportSettings positionPrecision. */
            public positionPrecision: number;

            /** MapReportSettings shouldReportLocation. */
            public shouldReportLocation: boolean;

            /**
             * Creates a new MapReportSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MapReportSettings instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IMapReportSettings): meshtastic.ModuleConfig.MapReportSettings;

            /**
             * Encodes the specified MapReportSettings message. Does not implicitly {@link meshtastic.ModuleConfig.MapReportSettings.verify|verify} messages.
             * @param message MapReportSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IMapReportSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MapReportSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MapReportSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.MapReportSettings;

            /**
             * Creates a MapReportSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MapReportSettings
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.MapReportSettings;

            /**
             * Creates a plain object from a MapReportSettings message. Also converts values to other types if specified.
             * @param message MapReportSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.MapReportSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MapReportSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MapReportSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RemoteHardwareConfig. */
        interface IRemoteHardwareConfig {

            /** RemoteHardwareConfig enabled */
            enabled?: (boolean|null);

            /** RemoteHardwareConfig allowUndefinedPinAccess */
            allowUndefinedPinAccess?: (boolean|null);

            /** RemoteHardwareConfig availablePins */
            availablePins?: (meshtastic.IRemoteHardwarePin[]|null);
        }

        /** Represents a RemoteHardwareConfig. */
        class RemoteHardwareConfig implements IRemoteHardwareConfig {

            /**
             * Constructs a new RemoteHardwareConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IRemoteHardwareConfig);

            /** RemoteHardwareConfig enabled. */
            public enabled: boolean;

            /** RemoteHardwareConfig allowUndefinedPinAccess. */
            public allowUndefinedPinAccess: boolean;

            /** RemoteHardwareConfig availablePins. */
            public availablePins: meshtastic.IRemoteHardwarePin[];

            /**
             * Creates a new RemoteHardwareConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoteHardwareConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IRemoteHardwareConfig): meshtastic.ModuleConfig.RemoteHardwareConfig;

            /**
             * Encodes the specified RemoteHardwareConfig message. Does not implicitly {@link meshtastic.ModuleConfig.RemoteHardwareConfig.verify|verify} messages.
             * @param message RemoteHardwareConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IRemoteHardwareConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RemoteHardwareConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoteHardwareConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.RemoteHardwareConfig;

            /**
             * Creates a RemoteHardwareConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RemoteHardwareConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.RemoteHardwareConfig;

            /**
             * Creates a plain object from a RemoteHardwareConfig message. Also converts values to other types if specified.
             * @param message RemoteHardwareConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.RemoteHardwareConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RemoteHardwareConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RemoteHardwareConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a NeighborInfoConfig. */
        interface INeighborInfoConfig {

            /** NeighborInfoConfig enabled */
            enabled?: (boolean|null);

            /** NeighborInfoConfig updateInterval */
            updateInterval?: (number|null);

            /** NeighborInfoConfig transmitOverLora */
            transmitOverLora?: (boolean|null);
        }

        /** Represents a NeighborInfoConfig. */
        class NeighborInfoConfig implements INeighborInfoConfig {

            /**
             * Constructs a new NeighborInfoConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.INeighborInfoConfig);

            /** NeighborInfoConfig enabled. */
            public enabled: boolean;

            /** NeighborInfoConfig updateInterval. */
            public updateInterval: number;

            /** NeighborInfoConfig transmitOverLora. */
            public transmitOverLora: boolean;

            /**
             * Creates a new NeighborInfoConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NeighborInfoConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.INeighborInfoConfig): meshtastic.ModuleConfig.NeighborInfoConfig;

            /**
             * Encodes the specified NeighborInfoConfig message. Does not implicitly {@link meshtastic.ModuleConfig.NeighborInfoConfig.verify|verify} messages.
             * @param message NeighborInfoConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.INeighborInfoConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NeighborInfoConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NeighborInfoConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.NeighborInfoConfig;

            /**
             * Creates a NeighborInfoConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NeighborInfoConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.NeighborInfoConfig;

            /**
             * Creates a plain object from a NeighborInfoConfig message. Also converts values to other types if specified.
             * @param message NeighborInfoConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.NeighborInfoConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NeighborInfoConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NeighborInfoConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DetectionSensorConfig. */
        interface IDetectionSensorConfig {

            /** DetectionSensorConfig enabled */
            enabled?: (boolean|null);

            /** DetectionSensorConfig minimumBroadcastSecs */
            minimumBroadcastSecs?: (number|null);

            /** DetectionSensorConfig stateBroadcastSecs */
            stateBroadcastSecs?: (number|null);

            /** DetectionSensorConfig sendBell */
            sendBell?: (boolean|null);

            /** DetectionSensorConfig name */
            name?: (string|null);

            /** DetectionSensorConfig monitorPin */
            monitorPin?: (number|null);

            /** DetectionSensorConfig detectionTriggerType */
            detectionTriggerType?: (meshtastic.ModuleConfig.DetectionSensorConfig.TriggerType|null);

            /** DetectionSensorConfig usePullup */
            usePullup?: (boolean|null);
        }

        /** Represents a DetectionSensorConfig. */
        class DetectionSensorConfig implements IDetectionSensorConfig {

            /**
             * Constructs a new DetectionSensorConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IDetectionSensorConfig);

            /** DetectionSensorConfig enabled. */
            public enabled: boolean;

            /** DetectionSensorConfig minimumBroadcastSecs. */
            public minimumBroadcastSecs: number;

            /** DetectionSensorConfig stateBroadcastSecs. */
            public stateBroadcastSecs: number;

            /** DetectionSensorConfig sendBell. */
            public sendBell: boolean;

            /** DetectionSensorConfig name. */
            public name: string;

            /** DetectionSensorConfig monitorPin. */
            public monitorPin: number;

            /** DetectionSensorConfig detectionTriggerType. */
            public detectionTriggerType: meshtastic.ModuleConfig.DetectionSensorConfig.TriggerType;

            /** DetectionSensorConfig usePullup. */
            public usePullup: boolean;

            /**
             * Creates a new DetectionSensorConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DetectionSensorConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IDetectionSensorConfig): meshtastic.ModuleConfig.DetectionSensorConfig;

            /**
             * Encodes the specified DetectionSensorConfig message. Does not implicitly {@link meshtastic.ModuleConfig.DetectionSensorConfig.verify|verify} messages.
             * @param message DetectionSensorConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IDetectionSensorConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DetectionSensorConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DetectionSensorConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.DetectionSensorConfig;

            /**
             * Creates a DetectionSensorConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DetectionSensorConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.DetectionSensorConfig;

            /**
             * Creates a plain object from a DetectionSensorConfig message. Also converts values to other types if specified.
             * @param message DetectionSensorConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.DetectionSensorConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DetectionSensorConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DetectionSensorConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DetectionSensorConfig {

            /** TriggerType enum. */
            enum TriggerType {
                LOGIC_LOW = 0,
                LOGIC_HIGH = 1,
                FALLING_EDGE = 2,
                RISING_EDGE = 3,
                EITHER_EDGE_ACTIVE_LOW = 4,
                EITHER_EDGE_ACTIVE_HIGH = 5
            }
        }

        /** Properties of an AudioConfig. */
        interface IAudioConfig {

            /** AudioConfig codec2Enabled */
            codec2Enabled?: (boolean|null);

            /** AudioConfig pttPin */
            pttPin?: (number|null);

            /** AudioConfig bitrate */
            bitrate?: (meshtastic.ModuleConfig.AudioConfig.Audio_Baud|null);

            /** AudioConfig i2sWs */
            i2sWs?: (number|null);

            /** AudioConfig i2sSd */
            i2sSd?: (number|null);

            /** AudioConfig i2sDin */
            i2sDin?: (number|null);

            /** AudioConfig i2sSck */
            i2sSck?: (number|null);
        }

        /** Represents an AudioConfig. */
        class AudioConfig implements IAudioConfig {

            /**
             * Constructs a new AudioConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IAudioConfig);

            /** AudioConfig codec2Enabled. */
            public codec2Enabled: boolean;

            /** AudioConfig pttPin. */
            public pttPin: number;

            /** AudioConfig bitrate. */
            public bitrate: meshtastic.ModuleConfig.AudioConfig.Audio_Baud;

            /** AudioConfig i2sWs. */
            public i2sWs: number;

            /** AudioConfig i2sSd. */
            public i2sSd: number;

            /** AudioConfig i2sDin. */
            public i2sDin: number;

            /** AudioConfig i2sSck. */
            public i2sSck: number;

            /**
             * Creates a new AudioConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AudioConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IAudioConfig): meshtastic.ModuleConfig.AudioConfig;

            /**
             * Encodes the specified AudioConfig message. Does not implicitly {@link meshtastic.ModuleConfig.AudioConfig.verify|verify} messages.
             * @param message AudioConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IAudioConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AudioConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AudioConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.AudioConfig;

            /**
             * Creates an AudioConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AudioConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.AudioConfig;

            /**
             * Creates a plain object from an AudioConfig message. Also converts values to other types if specified.
             * @param message AudioConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.AudioConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AudioConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AudioConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace AudioConfig {

            /** Audio_Baud enum. */
            enum Audio_Baud {
                CODEC2_DEFAULT = 0,
                CODEC2_3200 = 1,
                CODEC2_2400 = 2,
                CODEC2_1600 = 3,
                CODEC2_1400 = 4,
                CODEC2_1300 = 5,
                CODEC2_1200 = 6,
                CODEC2_700 = 7,
                CODEC2_700B = 8
            }
        }

        /** Properties of a PaxcounterConfig. */
        interface IPaxcounterConfig {

            /** PaxcounterConfig enabled */
            enabled?: (boolean|null);

            /** PaxcounterConfig paxcounterUpdateInterval */
            paxcounterUpdateInterval?: (number|null);

            /** PaxcounterConfig wifiThreshold */
            wifiThreshold?: (number|null);

            /** PaxcounterConfig bleThreshold */
            bleThreshold?: (number|null);
        }

        /** Represents a PaxcounterConfig. */
        class PaxcounterConfig implements IPaxcounterConfig {

            /**
             * Constructs a new PaxcounterConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IPaxcounterConfig);

            /** PaxcounterConfig enabled. */
            public enabled: boolean;

            /** PaxcounterConfig paxcounterUpdateInterval. */
            public paxcounterUpdateInterval: number;

            /** PaxcounterConfig wifiThreshold. */
            public wifiThreshold: number;

            /** PaxcounterConfig bleThreshold. */
            public bleThreshold: number;

            /**
             * Creates a new PaxcounterConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PaxcounterConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IPaxcounterConfig): meshtastic.ModuleConfig.PaxcounterConfig;

            /**
             * Encodes the specified PaxcounterConfig message. Does not implicitly {@link meshtastic.ModuleConfig.PaxcounterConfig.verify|verify} messages.
             * @param message PaxcounterConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IPaxcounterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PaxcounterConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PaxcounterConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.PaxcounterConfig;

            /**
             * Creates a PaxcounterConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PaxcounterConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.PaxcounterConfig;

            /**
             * Creates a plain object from a PaxcounterConfig message. Also converts values to other types if specified.
             * @param message PaxcounterConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.PaxcounterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PaxcounterConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PaxcounterConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SerialConfig. */
        interface ISerialConfig {

            /** SerialConfig enabled */
            enabled?: (boolean|null);

            /** SerialConfig echo */
            echo?: (boolean|null);

            /** SerialConfig rxd */
            rxd?: (number|null);

            /** SerialConfig txd */
            txd?: (number|null);

            /** SerialConfig baud */
            baud?: (meshtastic.ModuleConfig.SerialConfig.Serial_Baud|null);

            /** SerialConfig timeout */
            timeout?: (number|null);

            /** SerialConfig mode */
            mode?: (meshtastic.ModuleConfig.SerialConfig.Serial_Mode|null);

            /** SerialConfig overrideConsoleSerialPort */
            overrideConsoleSerialPort?: (boolean|null);
        }

        /** Represents a SerialConfig. */
        class SerialConfig implements ISerialConfig {

            /**
             * Constructs a new SerialConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.ISerialConfig);

            /** SerialConfig enabled. */
            public enabled: boolean;

            /** SerialConfig echo. */
            public echo: boolean;

            /** SerialConfig rxd. */
            public rxd: number;

            /** SerialConfig txd. */
            public txd: number;

            /** SerialConfig baud. */
            public baud: meshtastic.ModuleConfig.SerialConfig.Serial_Baud;

            /** SerialConfig timeout. */
            public timeout: number;

            /** SerialConfig mode. */
            public mode: meshtastic.ModuleConfig.SerialConfig.Serial_Mode;

            /** SerialConfig overrideConsoleSerialPort. */
            public overrideConsoleSerialPort: boolean;

            /**
             * Creates a new SerialConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SerialConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.ISerialConfig): meshtastic.ModuleConfig.SerialConfig;

            /**
             * Encodes the specified SerialConfig message. Does not implicitly {@link meshtastic.ModuleConfig.SerialConfig.verify|verify} messages.
             * @param message SerialConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.ISerialConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SerialConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SerialConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.SerialConfig;

            /**
             * Creates a SerialConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SerialConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.SerialConfig;

            /**
             * Creates a plain object from a SerialConfig message. Also converts values to other types if specified.
             * @param message SerialConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.SerialConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SerialConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SerialConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SerialConfig {

            /** Serial_Baud enum. */
            enum Serial_Baud {
                BAUD_DEFAULT = 0,
                BAUD_110 = 1,
                BAUD_300 = 2,
                BAUD_600 = 3,
                BAUD_1200 = 4,
                BAUD_2400 = 5,
                BAUD_4800 = 6,
                BAUD_9600 = 7,
                BAUD_19200 = 8,
                BAUD_38400 = 9,
                BAUD_57600 = 10,
                BAUD_115200 = 11,
                BAUD_230400 = 12,
                BAUD_460800 = 13,
                BAUD_576000 = 14,
                BAUD_921600 = 15
            }

            /** Serial_Mode enum. */
            enum Serial_Mode {
                DEFAULT = 0,
                SIMPLE = 1,
                PROTO = 2,
                TEXTMSG = 3,
                NMEA = 4,
                CALTOPO = 5,
                WS85 = 6,
                VE_DIRECT = 7,
                MS_CONFIG = 8
            }
        }

        /** Properties of an ExternalNotificationConfig. */
        interface IExternalNotificationConfig {

            /** ExternalNotificationConfig enabled */
            enabled?: (boolean|null);

            /** ExternalNotificationConfig outputMs */
            outputMs?: (number|null);

            /** ExternalNotificationConfig output */
            output?: (number|null);

            /** ExternalNotificationConfig outputVibra */
            outputVibra?: (number|null);

            /** ExternalNotificationConfig outputBuzzer */
            outputBuzzer?: (number|null);

            /** ExternalNotificationConfig active */
            active?: (boolean|null);

            /** ExternalNotificationConfig alertMessage */
            alertMessage?: (boolean|null);

            /** ExternalNotificationConfig alertMessageVibra */
            alertMessageVibra?: (boolean|null);

            /** ExternalNotificationConfig alertMessageBuzzer */
            alertMessageBuzzer?: (boolean|null);

            /** ExternalNotificationConfig alertBell */
            alertBell?: (boolean|null);

            /** ExternalNotificationConfig alertBellVibra */
            alertBellVibra?: (boolean|null);

            /** ExternalNotificationConfig alertBellBuzzer */
            alertBellBuzzer?: (boolean|null);

            /** ExternalNotificationConfig usePwm */
            usePwm?: (boolean|null);

            /** ExternalNotificationConfig nagTimeout */
            nagTimeout?: (number|null);

            /** ExternalNotificationConfig useI2sAsBuzzer */
            useI2sAsBuzzer?: (boolean|null);
        }

        /** Represents an ExternalNotificationConfig. */
        class ExternalNotificationConfig implements IExternalNotificationConfig {

            /**
             * Constructs a new ExternalNotificationConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IExternalNotificationConfig);

            /** ExternalNotificationConfig enabled. */
            public enabled: boolean;

            /** ExternalNotificationConfig outputMs. */
            public outputMs: number;

            /** ExternalNotificationConfig output. */
            public output: number;

            /** ExternalNotificationConfig outputVibra. */
            public outputVibra: number;

            /** ExternalNotificationConfig outputBuzzer. */
            public outputBuzzer: number;

            /** ExternalNotificationConfig active. */
            public active: boolean;

            /** ExternalNotificationConfig alertMessage. */
            public alertMessage: boolean;

            /** ExternalNotificationConfig alertMessageVibra. */
            public alertMessageVibra: boolean;

            /** ExternalNotificationConfig alertMessageBuzzer. */
            public alertMessageBuzzer: boolean;

            /** ExternalNotificationConfig alertBell. */
            public alertBell: boolean;

            /** ExternalNotificationConfig alertBellVibra. */
            public alertBellVibra: boolean;

            /** ExternalNotificationConfig alertBellBuzzer. */
            public alertBellBuzzer: boolean;

            /** ExternalNotificationConfig usePwm. */
            public usePwm: boolean;

            /** ExternalNotificationConfig nagTimeout. */
            public nagTimeout: number;

            /** ExternalNotificationConfig useI2sAsBuzzer. */
            public useI2sAsBuzzer: boolean;

            /**
             * Creates a new ExternalNotificationConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExternalNotificationConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IExternalNotificationConfig): meshtastic.ModuleConfig.ExternalNotificationConfig;

            /**
             * Encodes the specified ExternalNotificationConfig message. Does not implicitly {@link meshtastic.ModuleConfig.ExternalNotificationConfig.verify|verify} messages.
             * @param message ExternalNotificationConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IExternalNotificationConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExternalNotificationConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExternalNotificationConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.ExternalNotificationConfig;

            /**
             * Creates an ExternalNotificationConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExternalNotificationConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.ExternalNotificationConfig;

            /**
             * Creates a plain object from an ExternalNotificationConfig message. Also converts values to other types if specified.
             * @param message ExternalNotificationConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.ExternalNotificationConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExternalNotificationConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExternalNotificationConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StoreForwardConfig. */
        interface IStoreForwardConfig {

            /** StoreForwardConfig enabled */
            enabled?: (boolean|null);

            /** StoreForwardConfig heartbeat */
            heartbeat?: (boolean|null);

            /** StoreForwardConfig records */
            records?: (number|null);

            /** StoreForwardConfig historyReturnMax */
            historyReturnMax?: (number|null);

            /** StoreForwardConfig historyReturnWindow */
            historyReturnWindow?: (number|null);

            /** StoreForwardConfig isServer */
            isServer?: (boolean|null);
        }

        /** Represents a StoreForwardConfig. */
        class StoreForwardConfig implements IStoreForwardConfig {

            /**
             * Constructs a new StoreForwardConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IStoreForwardConfig);

            /** StoreForwardConfig enabled. */
            public enabled: boolean;

            /** StoreForwardConfig heartbeat. */
            public heartbeat: boolean;

            /** StoreForwardConfig records. */
            public records: number;

            /** StoreForwardConfig historyReturnMax. */
            public historyReturnMax: number;

            /** StoreForwardConfig historyReturnWindow. */
            public historyReturnWindow: number;

            /** StoreForwardConfig isServer. */
            public isServer: boolean;

            /**
             * Creates a new StoreForwardConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StoreForwardConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IStoreForwardConfig): meshtastic.ModuleConfig.StoreForwardConfig;

            /**
             * Encodes the specified StoreForwardConfig message. Does not implicitly {@link meshtastic.ModuleConfig.StoreForwardConfig.verify|verify} messages.
             * @param message StoreForwardConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IStoreForwardConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StoreForwardConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StoreForwardConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.StoreForwardConfig;

            /**
             * Creates a StoreForwardConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StoreForwardConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.StoreForwardConfig;

            /**
             * Creates a plain object from a StoreForwardConfig message. Also converts values to other types if specified.
             * @param message StoreForwardConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.StoreForwardConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StoreForwardConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StoreForwardConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RangeTestConfig. */
        interface IRangeTestConfig {

            /** RangeTestConfig enabled */
            enabled?: (boolean|null);

            /** RangeTestConfig sender */
            sender?: (number|null);

            /** RangeTestConfig save */
            save?: (boolean|null);

            /** RangeTestConfig clearOnReboot */
            clearOnReboot?: (boolean|null);
        }

        /** Represents a RangeTestConfig. */
        class RangeTestConfig implements IRangeTestConfig {

            /**
             * Constructs a new RangeTestConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IRangeTestConfig);

            /** RangeTestConfig enabled. */
            public enabled: boolean;

            /** RangeTestConfig sender. */
            public sender: number;

            /** RangeTestConfig save. */
            public save: boolean;

            /** RangeTestConfig clearOnReboot. */
            public clearOnReboot: boolean;

            /**
             * Creates a new RangeTestConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RangeTestConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IRangeTestConfig): meshtastic.ModuleConfig.RangeTestConfig;

            /**
             * Encodes the specified RangeTestConfig message. Does not implicitly {@link meshtastic.ModuleConfig.RangeTestConfig.verify|verify} messages.
             * @param message RangeTestConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IRangeTestConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RangeTestConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RangeTestConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.RangeTestConfig;

            /**
             * Creates a RangeTestConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RangeTestConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.RangeTestConfig;

            /**
             * Creates a plain object from a RangeTestConfig message. Also converts values to other types if specified.
             * @param message RangeTestConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.RangeTestConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RangeTestConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RangeTestConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a TelemetryConfig. */
        interface ITelemetryConfig {

            /** TelemetryConfig deviceUpdateInterval */
            deviceUpdateInterval?: (number|null);

            /** TelemetryConfig environmentUpdateInterval */
            environmentUpdateInterval?: (number|null);

            /** TelemetryConfig environmentMeasurementEnabled */
            environmentMeasurementEnabled?: (boolean|null);

            /** TelemetryConfig environmentScreenEnabled */
            environmentScreenEnabled?: (boolean|null);

            /** TelemetryConfig environmentDisplayFahrenheit */
            environmentDisplayFahrenheit?: (boolean|null);

            /** TelemetryConfig airQualityEnabled */
            airQualityEnabled?: (boolean|null);

            /** TelemetryConfig airQualityInterval */
            airQualityInterval?: (number|null);

            /** TelemetryConfig powerMeasurementEnabled */
            powerMeasurementEnabled?: (boolean|null);

            /** TelemetryConfig powerUpdateInterval */
            powerUpdateInterval?: (number|null);

            /** TelemetryConfig powerScreenEnabled */
            powerScreenEnabled?: (boolean|null);

            /** TelemetryConfig healthMeasurementEnabled */
            healthMeasurementEnabled?: (boolean|null);

            /** TelemetryConfig healthUpdateInterval */
            healthUpdateInterval?: (number|null);

            /** TelemetryConfig healthScreenEnabled */
            healthScreenEnabled?: (boolean|null);
        }

        /** Represents a TelemetryConfig. */
        class TelemetryConfig implements ITelemetryConfig {

            /**
             * Constructs a new TelemetryConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.ITelemetryConfig);

            /** TelemetryConfig deviceUpdateInterval. */
            public deviceUpdateInterval: number;

            /** TelemetryConfig environmentUpdateInterval. */
            public environmentUpdateInterval: number;

            /** TelemetryConfig environmentMeasurementEnabled. */
            public environmentMeasurementEnabled: boolean;

            /** TelemetryConfig environmentScreenEnabled. */
            public environmentScreenEnabled: boolean;

            /** TelemetryConfig environmentDisplayFahrenheit. */
            public environmentDisplayFahrenheit: boolean;

            /** TelemetryConfig airQualityEnabled. */
            public airQualityEnabled: boolean;

            /** TelemetryConfig airQualityInterval. */
            public airQualityInterval: number;

            /** TelemetryConfig powerMeasurementEnabled. */
            public powerMeasurementEnabled: boolean;

            /** TelemetryConfig powerUpdateInterval. */
            public powerUpdateInterval: number;

            /** TelemetryConfig powerScreenEnabled. */
            public powerScreenEnabled: boolean;

            /** TelemetryConfig healthMeasurementEnabled. */
            public healthMeasurementEnabled: boolean;

            /** TelemetryConfig healthUpdateInterval. */
            public healthUpdateInterval: number;

            /** TelemetryConfig healthScreenEnabled. */
            public healthScreenEnabled: boolean;

            /**
             * Creates a new TelemetryConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TelemetryConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.ITelemetryConfig): meshtastic.ModuleConfig.TelemetryConfig;

            /**
             * Encodes the specified TelemetryConfig message. Does not implicitly {@link meshtastic.ModuleConfig.TelemetryConfig.verify|verify} messages.
             * @param message TelemetryConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.ITelemetryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TelemetryConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TelemetryConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.TelemetryConfig;

            /**
             * Creates a TelemetryConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TelemetryConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.TelemetryConfig;

            /**
             * Creates a plain object from a TelemetryConfig message. Also converts values to other types if specified.
             * @param message TelemetryConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.TelemetryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TelemetryConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TelemetryConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CannedMessageConfig. */
        interface ICannedMessageConfig {

            /** CannedMessageConfig rotary1Enabled */
            rotary1Enabled?: (boolean|null);

            /** CannedMessageConfig inputbrokerPinA */
            inputbrokerPinA?: (number|null);

            /** CannedMessageConfig inputbrokerPinB */
            inputbrokerPinB?: (number|null);

            /** CannedMessageConfig inputbrokerPinPress */
            inputbrokerPinPress?: (number|null);

            /** CannedMessageConfig inputbrokerEventCw */
            inputbrokerEventCw?: (meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar|null);

            /** CannedMessageConfig inputbrokerEventCcw */
            inputbrokerEventCcw?: (meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar|null);

            /** CannedMessageConfig inputbrokerEventPress */
            inputbrokerEventPress?: (meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar|null);

            /** CannedMessageConfig updown1Enabled */
            updown1Enabled?: (boolean|null);

            /** CannedMessageConfig enabled */
            enabled?: (boolean|null);

            /** CannedMessageConfig allowInputSource */
            allowInputSource?: (string|null);

            /** CannedMessageConfig sendBell */
            sendBell?: (boolean|null);
        }

        /** Represents a CannedMessageConfig. */
        class CannedMessageConfig implements ICannedMessageConfig {

            /**
             * Constructs a new CannedMessageConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.ICannedMessageConfig);

            /** CannedMessageConfig rotary1Enabled. */
            public rotary1Enabled: boolean;

            /** CannedMessageConfig inputbrokerPinA. */
            public inputbrokerPinA: number;

            /** CannedMessageConfig inputbrokerPinB. */
            public inputbrokerPinB: number;

            /** CannedMessageConfig inputbrokerPinPress. */
            public inputbrokerPinPress: number;

            /** CannedMessageConfig inputbrokerEventCw. */
            public inputbrokerEventCw: meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar;

            /** CannedMessageConfig inputbrokerEventCcw. */
            public inputbrokerEventCcw: meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar;

            /** CannedMessageConfig inputbrokerEventPress. */
            public inputbrokerEventPress: meshtastic.ModuleConfig.CannedMessageConfig.InputEventChar;

            /** CannedMessageConfig updown1Enabled. */
            public updown1Enabled: boolean;

            /** CannedMessageConfig enabled. */
            public enabled: boolean;

            /** CannedMessageConfig allowInputSource. */
            public allowInputSource: string;

            /** CannedMessageConfig sendBell. */
            public sendBell: boolean;

            /**
             * Creates a new CannedMessageConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CannedMessageConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.ICannedMessageConfig): meshtastic.ModuleConfig.CannedMessageConfig;

            /**
             * Encodes the specified CannedMessageConfig message. Does not implicitly {@link meshtastic.ModuleConfig.CannedMessageConfig.verify|verify} messages.
             * @param message CannedMessageConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.ICannedMessageConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CannedMessageConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CannedMessageConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.CannedMessageConfig;

            /**
             * Creates a CannedMessageConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CannedMessageConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.CannedMessageConfig;

            /**
             * Creates a plain object from a CannedMessageConfig message. Also converts values to other types if specified.
             * @param message CannedMessageConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.CannedMessageConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CannedMessageConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CannedMessageConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace CannedMessageConfig {

            /** InputEventChar enum. */
            enum InputEventChar {
                NONE = 0,
                UP = 17,
                DOWN = 18,
                LEFT = 19,
                RIGHT = 20,
                SELECT = 10,
                BACK = 27,
                CANCEL = 24
            }
        }

        /** Properties of an AmbientLightingConfig. */
        interface IAmbientLightingConfig {

            /** AmbientLightingConfig ledState */
            ledState?: (boolean|null);

            /** AmbientLightingConfig current */
            current?: (number|null);

            /** AmbientLightingConfig red */
            red?: (number|null);

            /** AmbientLightingConfig green */
            green?: (number|null);

            /** AmbientLightingConfig blue */
            blue?: (number|null);
        }

        /** Represents an AmbientLightingConfig. */
        class AmbientLightingConfig implements IAmbientLightingConfig {

            /**
             * Constructs a new AmbientLightingConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: meshtastic.ModuleConfig.IAmbientLightingConfig);

            /** AmbientLightingConfig ledState. */
            public ledState: boolean;

            /** AmbientLightingConfig current. */
            public current: number;

            /** AmbientLightingConfig red. */
            public red: number;

            /** AmbientLightingConfig green. */
            public green: number;

            /** AmbientLightingConfig blue. */
            public blue: number;

            /**
             * Creates a new AmbientLightingConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AmbientLightingConfig instance
             */
            public static create(properties?: meshtastic.ModuleConfig.IAmbientLightingConfig): meshtastic.ModuleConfig.AmbientLightingConfig;

            /**
             * Encodes the specified AmbientLightingConfig message. Does not implicitly {@link meshtastic.ModuleConfig.AmbientLightingConfig.verify|verify} messages.
             * @param message AmbientLightingConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: meshtastic.ModuleConfig.IAmbientLightingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AmbientLightingConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AmbientLightingConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ModuleConfig.AmbientLightingConfig;

            /**
             * Creates an AmbientLightingConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AmbientLightingConfig
             */
            public static fromObject(object: { [k: string]: any }): meshtastic.ModuleConfig.AmbientLightingConfig;

            /**
             * Creates a plain object from an AmbientLightingConfig message. Also converts values to other types if specified.
             * @param message AmbientLightingConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: meshtastic.ModuleConfig.AmbientLightingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AmbientLightingConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AmbientLightingConfig
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a RemoteHardwarePin. */
    interface IRemoteHardwarePin {

        /** RemoteHardwarePin gpioPin */
        gpioPin?: (number|null);

        /** RemoteHardwarePin name */
        name?: (string|null);

        /** RemoteHardwarePin type */
        type?: (meshtastic.RemoteHardwarePinType|null);
    }

    /** Represents a RemoteHardwarePin. */
    class RemoteHardwarePin implements IRemoteHardwarePin {

        /**
         * Constructs a new RemoteHardwarePin.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IRemoteHardwarePin);

        /** RemoteHardwarePin gpioPin. */
        public gpioPin: number;

        /** RemoteHardwarePin name. */
        public name: string;

        /** RemoteHardwarePin type. */
        public type: meshtastic.RemoteHardwarePinType;

        /**
         * Creates a new RemoteHardwarePin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoteHardwarePin instance
         */
        public static create(properties?: meshtastic.IRemoteHardwarePin): meshtastic.RemoteHardwarePin;

        /**
         * Encodes the specified RemoteHardwarePin message. Does not implicitly {@link meshtastic.RemoteHardwarePin.verify|verify} messages.
         * @param message RemoteHardwarePin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IRemoteHardwarePin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoteHardwarePin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoteHardwarePin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.RemoteHardwarePin;

        /**
         * Creates a RemoteHardwarePin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoteHardwarePin
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.RemoteHardwarePin;

        /**
         * Creates a plain object from a RemoteHardwarePin message. Also converts values to other types if specified.
         * @param message RemoteHardwarePin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.RemoteHardwarePin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoteHardwarePin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RemoteHardwarePin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** RemoteHardwarePinType enum. */
    enum RemoteHardwarePinType {
        UNKNOWN = 0,
        DIGITAL_READ = 1,
        DIGITAL_WRITE = 2
    }

    /** PortNum enum. */
    enum PortNum {
        UNKNOWN_APP = 0,
        TEXT_MESSAGE_APP = 1,
        REMOTE_HARDWARE_APP = 2,
        POSITION_APP = 3,
        NODEINFO_APP = 4,
        ROUTING_APP = 5,
        ADMIN_APP = 6,
        TEXT_MESSAGE_COMPRESSED_APP = 7,
        WAYPOINT_APP = 8,
        AUDIO_APP = 9,
        DETECTION_SENSOR_APP = 10,
        ALERT_APP = 11,
        KEY_VERIFICATION_APP = 12,
        REPLY_APP = 32,
        IP_TUNNEL_APP = 33,
        PAXCOUNTER_APP = 34,
        SERIAL_APP = 64,
        STORE_FORWARD_APP = 65,
        RANGE_TEST_APP = 66,
        TELEMETRY_APP = 67,
        ZPS_APP = 68,
        SIMULATOR_APP = 69,
        TRACEROUTE_APP = 70,
        NEIGHBORINFO_APP = 71,
        ATAK_PLUGIN = 72,
        MAP_REPORT_APP = 73,
        POWERSTRESS_APP = 74,
        RETICULUM_TUNNEL_APP = 76,
        CAYENNE_APP = 77,
        PRIVATE_APP = 256,
        ATAK_FORWARDER = 257,
        MAX = 511
    }

    /** Properties of a DeviceMetrics. */
    interface IDeviceMetrics {

        /** DeviceMetrics batteryLevel */
        batteryLevel?: (number|null);

        /** DeviceMetrics voltage */
        voltage?: (number|null);

        /** DeviceMetrics channelUtilization */
        channelUtilization?: (number|null);

        /** DeviceMetrics airUtilTx */
        airUtilTx?: (number|null);

        /** DeviceMetrics uptimeSeconds */
        uptimeSeconds?: (number|null);
    }

    /** Represents a DeviceMetrics. */
    class DeviceMetrics implements IDeviceMetrics {

        /**
         * Constructs a new DeviceMetrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IDeviceMetrics);

        /** DeviceMetrics batteryLevel. */
        public batteryLevel?: (number|null);

        /** DeviceMetrics voltage. */
        public voltage?: (number|null);

        /** DeviceMetrics channelUtilization. */
        public channelUtilization?: (number|null);

        /** DeviceMetrics airUtilTx. */
        public airUtilTx?: (number|null);

        /** DeviceMetrics uptimeSeconds. */
        public uptimeSeconds?: (number|null);

        /** DeviceMetrics _batteryLevel. */
        public _batteryLevel?: "batteryLevel";

        /** DeviceMetrics _voltage. */
        public _voltage?: "voltage";

        /** DeviceMetrics _channelUtilization. */
        public _channelUtilization?: "channelUtilization";

        /** DeviceMetrics _airUtilTx. */
        public _airUtilTx?: "airUtilTx";

        /** DeviceMetrics _uptimeSeconds. */
        public _uptimeSeconds?: "uptimeSeconds";

        /**
         * Creates a new DeviceMetrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceMetrics instance
         */
        public static create(properties?: meshtastic.IDeviceMetrics): meshtastic.DeviceMetrics;

        /**
         * Encodes the specified DeviceMetrics message. Does not implicitly {@link meshtastic.DeviceMetrics.verify|verify} messages.
         * @param message DeviceMetrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IDeviceMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceMetrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceMetrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.DeviceMetrics;

        /**
         * Creates a DeviceMetrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceMetrics
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.DeviceMetrics;

        /**
         * Creates a plain object from a DeviceMetrics message. Also converts values to other types if specified.
         * @param message DeviceMetrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.DeviceMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceMetrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DeviceMetrics
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an EnvironmentMetrics. */
    interface IEnvironmentMetrics {

        /** EnvironmentMetrics temperature */
        temperature?: (number|null);

        /** EnvironmentMetrics relativeHumidity */
        relativeHumidity?: (number|null);

        /** EnvironmentMetrics barometricPressure */
        barometricPressure?: (number|null);

        /** EnvironmentMetrics gasResistance */
        gasResistance?: (number|null);

        /** EnvironmentMetrics voltage */
        voltage?: (number|null);

        /** EnvironmentMetrics current */
        current?: (number|null);

        /** EnvironmentMetrics iaq */
        iaq?: (number|null);

        /** EnvironmentMetrics distance */
        distance?: (number|null);

        /** EnvironmentMetrics lux */
        lux?: (number|null);

        /** EnvironmentMetrics whiteLux */
        whiteLux?: (number|null);

        /** EnvironmentMetrics irLux */
        irLux?: (number|null);

        /** EnvironmentMetrics uvLux */
        uvLux?: (number|null);

        /** EnvironmentMetrics windDirection */
        windDirection?: (number|null);

        /** EnvironmentMetrics windSpeed */
        windSpeed?: (number|null);

        /** EnvironmentMetrics weight */
        weight?: (number|null);

        /** EnvironmentMetrics windGust */
        windGust?: (number|null);

        /** EnvironmentMetrics windLull */
        windLull?: (number|null);

        /** EnvironmentMetrics radiation */
        radiation?: (number|null);

        /** EnvironmentMetrics rainfall_1h */
        rainfall_1h?: (number|null);

        /** EnvironmentMetrics rainfall_24h */
        rainfall_24h?: (number|null);

        /** EnvironmentMetrics soilMoisture */
        soilMoisture?: (number|null);

        /** EnvironmentMetrics soilTemperature */
        soilTemperature?: (number|null);
    }

    /** Represents an EnvironmentMetrics. */
    class EnvironmentMetrics implements IEnvironmentMetrics {

        /**
         * Constructs a new EnvironmentMetrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IEnvironmentMetrics);

        /** EnvironmentMetrics temperature. */
        public temperature?: (number|null);

        /** EnvironmentMetrics relativeHumidity. */
        public relativeHumidity?: (number|null);

        /** EnvironmentMetrics barometricPressure. */
        public barometricPressure?: (number|null);

        /** EnvironmentMetrics gasResistance. */
        public gasResistance?: (number|null);

        /** EnvironmentMetrics voltage. */
        public voltage?: (number|null);

        /** EnvironmentMetrics current. */
        public current?: (number|null);

        /** EnvironmentMetrics iaq. */
        public iaq?: (number|null);

        /** EnvironmentMetrics distance. */
        public distance?: (number|null);

        /** EnvironmentMetrics lux. */
        public lux?: (number|null);

        /** EnvironmentMetrics whiteLux. */
        public whiteLux?: (number|null);

        /** EnvironmentMetrics irLux. */
        public irLux?: (number|null);

        /** EnvironmentMetrics uvLux. */
        public uvLux?: (number|null);

        /** EnvironmentMetrics windDirection. */
        public windDirection?: (number|null);

        /** EnvironmentMetrics windSpeed. */
        public windSpeed?: (number|null);

        /** EnvironmentMetrics weight. */
        public weight?: (number|null);

        /** EnvironmentMetrics windGust. */
        public windGust?: (number|null);

        /** EnvironmentMetrics windLull. */
        public windLull?: (number|null);

        /** EnvironmentMetrics radiation. */
        public radiation?: (number|null);

        /** EnvironmentMetrics rainfall_1h. */
        public rainfall_1h?: (number|null);

        /** EnvironmentMetrics rainfall_24h. */
        public rainfall_24h?: (number|null);

        /** EnvironmentMetrics soilMoisture. */
        public soilMoisture?: (number|null);

        /** EnvironmentMetrics soilTemperature. */
        public soilTemperature?: (number|null);

        /** EnvironmentMetrics _temperature. */
        public _temperature?: "temperature";

        /** EnvironmentMetrics _relativeHumidity. */
        public _relativeHumidity?: "relativeHumidity";

        /** EnvironmentMetrics _barometricPressure. */
        public _barometricPressure?: "barometricPressure";

        /** EnvironmentMetrics _gasResistance. */
        public _gasResistance?: "gasResistance";

        /** EnvironmentMetrics _voltage. */
        public _voltage?: "voltage";

        /** EnvironmentMetrics _current. */
        public _current?: "current";

        /** EnvironmentMetrics _iaq. */
        public _iaq?: "iaq";

        /** EnvironmentMetrics _distance. */
        public _distance?: "distance";

        /** EnvironmentMetrics _lux. */
        public _lux?: "lux";

        /** EnvironmentMetrics _whiteLux. */
        public _whiteLux?: "whiteLux";

        /** EnvironmentMetrics _irLux. */
        public _irLux?: "irLux";

        /** EnvironmentMetrics _uvLux. */
        public _uvLux?: "uvLux";

        /** EnvironmentMetrics _windDirection. */
        public _windDirection?: "windDirection";

        /** EnvironmentMetrics _windSpeed. */
        public _windSpeed?: "windSpeed";

        /** EnvironmentMetrics _weight. */
        public _weight?: "weight";

        /** EnvironmentMetrics _windGust. */
        public _windGust?: "windGust";

        /** EnvironmentMetrics _windLull. */
        public _windLull?: "windLull";

        /** EnvironmentMetrics _radiation. */
        public _radiation?: "radiation";

        /** EnvironmentMetrics _rainfall_1h. */
        public _rainfall_1h?: "rainfall_1h";

        /** EnvironmentMetrics _rainfall_24h. */
        public _rainfall_24h?: "rainfall_24h";

        /** EnvironmentMetrics _soilMoisture. */
        public _soilMoisture?: "soilMoisture";

        /** EnvironmentMetrics _soilTemperature. */
        public _soilTemperature?: "soilTemperature";

        /**
         * Creates a new EnvironmentMetrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnvironmentMetrics instance
         */
        public static create(properties?: meshtastic.IEnvironmentMetrics): meshtastic.EnvironmentMetrics;

        /**
         * Encodes the specified EnvironmentMetrics message. Does not implicitly {@link meshtastic.EnvironmentMetrics.verify|verify} messages.
         * @param message EnvironmentMetrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IEnvironmentMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EnvironmentMetrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnvironmentMetrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.EnvironmentMetrics;

        /**
         * Creates an EnvironmentMetrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EnvironmentMetrics
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.EnvironmentMetrics;

        /**
         * Creates a plain object from an EnvironmentMetrics message. Also converts values to other types if specified.
         * @param message EnvironmentMetrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.EnvironmentMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EnvironmentMetrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EnvironmentMetrics
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PowerMetrics. */
    interface IPowerMetrics {

        /** PowerMetrics ch1Voltage */
        ch1Voltage?: (number|null);

        /** PowerMetrics ch1Current */
        ch1Current?: (number|null);

        /** PowerMetrics ch2Voltage */
        ch2Voltage?: (number|null);

        /** PowerMetrics ch2Current */
        ch2Current?: (number|null);

        /** PowerMetrics ch3Voltage */
        ch3Voltage?: (number|null);

        /** PowerMetrics ch3Current */
        ch3Current?: (number|null);

        /** PowerMetrics ch4Voltage */
        ch4Voltage?: (number|null);

        /** PowerMetrics ch4Current */
        ch4Current?: (number|null);

        /** PowerMetrics ch5Voltage */
        ch5Voltage?: (number|null);

        /** PowerMetrics ch5Current */
        ch5Current?: (number|null);

        /** PowerMetrics ch6Voltage */
        ch6Voltage?: (number|null);

        /** PowerMetrics ch6Current */
        ch6Current?: (number|null);

        /** PowerMetrics ch7Voltage */
        ch7Voltage?: (number|null);

        /** PowerMetrics ch7Current */
        ch7Current?: (number|null);

        /** PowerMetrics ch8Voltage */
        ch8Voltage?: (number|null);

        /** PowerMetrics ch8Current */
        ch8Current?: (number|null);
    }

    /** Represents a PowerMetrics. */
    class PowerMetrics implements IPowerMetrics {

        /**
         * Constructs a new PowerMetrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IPowerMetrics);

        /** PowerMetrics ch1Voltage. */
        public ch1Voltage?: (number|null);

        /** PowerMetrics ch1Current. */
        public ch1Current?: (number|null);

        /** PowerMetrics ch2Voltage. */
        public ch2Voltage?: (number|null);

        /** PowerMetrics ch2Current. */
        public ch2Current?: (number|null);

        /** PowerMetrics ch3Voltage. */
        public ch3Voltage?: (number|null);

        /** PowerMetrics ch3Current. */
        public ch3Current?: (number|null);

        /** PowerMetrics ch4Voltage. */
        public ch4Voltage?: (number|null);

        /** PowerMetrics ch4Current. */
        public ch4Current?: (number|null);

        /** PowerMetrics ch5Voltage. */
        public ch5Voltage?: (number|null);

        /** PowerMetrics ch5Current. */
        public ch5Current?: (number|null);

        /** PowerMetrics ch6Voltage. */
        public ch6Voltage?: (number|null);

        /** PowerMetrics ch6Current. */
        public ch6Current?: (number|null);

        /** PowerMetrics ch7Voltage. */
        public ch7Voltage?: (number|null);

        /** PowerMetrics ch7Current. */
        public ch7Current?: (number|null);

        /** PowerMetrics ch8Voltage. */
        public ch8Voltage?: (number|null);

        /** PowerMetrics ch8Current. */
        public ch8Current?: (number|null);

        /** PowerMetrics _ch1Voltage. */
        public _ch1Voltage?: "ch1Voltage";

        /** PowerMetrics _ch1Current. */
        public _ch1Current?: "ch1Current";

        /** PowerMetrics _ch2Voltage. */
        public _ch2Voltage?: "ch2Voltage";

        /** PowerMetrics _ch2Current. */
        public _ch2Current?: "ch2Current";

        /** PowerMetrics _ch3Voltage. */
        public _ch3Voltage?: "ch3Voltage";

        /** PowerMetrics _ch3Current. */
        public _ch3Current?: "ch3Current";

        /** PowerMetrics _ch4Voltage. */
        public _ch4Voltage?: "ch4Voltage";

        /** PowerMetrics _ch4Current. */
        public _ch4Current?: "ch4Current";

        /** PowerMetrics _ch5Voltage. */
        public _ch5Voltage?: "ch5Voltage";

        /** PowerMetrics _ch5Current. */
        public _ch5Current?: "ch5Current";

        /** PowerMetrics _ch6Voltage. */
        public _ch6Voltage?: "ch6Voltage";

        /** PowerMetrics _ch6Current. */
        public _ch6Current?: "ch6Current";

        /** PowerMetrics _ch7Voltage. */
        public _ch7Voltage?: "ch7Voltage";

        /** PowerMetrics _ch7Current. */
        public _ch7Current?: "ch7Current";

        /** PowerMetrics _ch8Voltage. */
        public _ch8Voltage?: "ch8Voltage";

        /** PowerMetrics _ch8Current. */
        public _ch8Current?: "ch8Current";

        /**
         * Creates a new PowerMetrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PowerMetrics instance
         */
        public static create(properties?: meshtastic.IPowerMetrics): meshtastic.PowerMetrics;

        /**
         * Encodes the specified PowerMetrics message. Does not implicitly {@link meshtastic.PowerMetrics.verify|verify} messages.
         * @param message PowerMetrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IPowerMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PowerMetrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PowerMetrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.PowerMetrics;

        /**
         * Creates a PowerMetrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PowerMetrics
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.PowerMetrics;

        /**
         * Creates a plain object from a PowerMetrics message. Also converts values to other types if specified.
         * @param message PowerMetrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.PowerMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PowerMetrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PowerMetrics
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an AirQualityMetrics. */
    interface IAirQualityMetrics {

        /** AirQualityMetrics pm10Standard */
        pm10Standard?: (number|null);

        /** AirQualityMetrics pm25Standard */
        pm25Standard?: (number|null);

        /** AirQualityMetrics pm100Standard */
        pm100Standard?: (number|null);

        /** AirQualityMetrics pm10Environmental */
        pm10Environmental?: (number|null);

        /** AirQualityMetrics pm25Environmental */
        pm25Environmental?: (number|null);

        /** AirQualityMetrics pm100Environmental */
        pm100Environmental?: (number|null);

        /** AirQualityMetrics particles_03um */
        particles_03um?: (number|null);

        /** AirQualityMetrics particles_05um */
        particles_05um?: (number|null);

        /** AirQualityMetrics particles_10um */
        particles_10um?: (number|null);

        /** AirQualityMetrics particles_25um */
        particles_25um?: (number|null);

        /** AirQualityMetrics particles_50um */
        particles_50um?: (number|null);

        /** AirQualityMetrics particles_100um */
        particles_100um?: (number|null);

        /** AirQualityMetrics co2 */
        co2?: (number|null);

        /** AirQualityMetrics co2Temperature */
        co2Temperature?: (number|null);

        /** AirQualityMetrics co2Humidity */
        co2Humidity?: (number|null);

        /** AirQualityMetrics formFormaldehyde */
        formFormaldehyde?: (number|null);

        /** AirQualityMetrics formHumidity */
        formHumidity?: (number|null);

        /** AirQualityMetrics formTemperature */
        formTemperature?: (number|null);

        /** AirQualityMetrics pm40Standard */
        pm40Standard?: (number|null);

        /** AirQualityMetrics particles_40um */
        particles_40um?: (number|null);

        /** AirQualityMetrics pmTemperature */
        pmTemperature?: (number|null);

        /** AirQualityMetrics pmHumidity */
        pmHumidity?: (number|null);

        /** AirQualityMetrics pmVocIdx */
        pmVocIdx?: (number|null);

        /** AirQualityMetrics pmNoxIdx */
        pmNoxIdx?: (number|null);

        /** AirQualityMetrics particlesTps */
        particlesTps?: (number|null);
    }

    /** Represents an AirQualityMetrics. */
    class AirQualityMetrics implements IAirQualityMetrics {

        /**
         * Constructs a new AirQualityMetrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IAirQualityMetrics);

        /** AirQualityMetrics pm10Standard. */
        public pm10Standard?: (number|null);

        /** AirQualityMetrics pm25Standard. */
        public pm25Standard?: (number|null);

        /** AirQualityMetrics pm100Standard. */
        public pm100Standard?: (number|null);

        /** AirQualityMetrics pm10Environmental. */
        public pm10Environmental?: (number|null);

        /** AirQualityMetrics pm25Environmental. */
        public pm25Environmental?: (number|null);

        /** AirQualityMetrics pm100Environmental. */
        public pm100Environmental?: (number|null);

        /** AirQualityMetrics particles_03um. */
        public particles_03um?: (number|null);

        /** AirQualityMetrics particles_05um. */
        public particles_05um?: (number|null);

        /** AirQualityMetrics particles_10um. */
        public particles_10um?: (number|null);

        /** AirQualityMetrics particles_25um. */
        public particles_25um?: (number|null);

        /** AirQualityMetrics particles_50um. */
        public particles_50um?: (number|null);

        /** AirQualityMetrics particles_100um. */
        public particles_100um?: (number|null);

        /** AirQualityMetrics co2. */
        public co2?: (number|null);

        /** AirQualityMetrics co2Temperature. */
        public co2Temperature?: (number|null);

        /** AirQualityMetrics co2Humidity. */
        public co2Humidity?: (number|null);

        /** AirQualityMetrics formFormaldehyde. */
        public formFormaldehyde?: (number|null);

        /** AirQualityMetrics formHumidity. */
        public formHumidity?: (number|null);

        /** AirQualityMetrics formTemperature. */
        public formTemperature?: (number|null);

        /** AirQualityMetrics pm40Standard. */
        public pm40Standard?: (number|null);

        /** AirQualityMetrics particles_40um. */
        public particles_40um?: (number|null);

        /** AirQualityMetrics pmTemperature. */
        public pmTemperature?: (number|null);

        /** AirQualityMetrics pmHumidity. */
        public pmHumidity?: (number|null);

        /** AirQualityMetrics pmVocIdx. */
        public pmVocIdx?: (number|null);

        /** AirQualityMetrics pmNoxIdx. */
        public pmNoxIdx?: (number|null);

        /** AirQualityMetrics particlesTps. */
        public particlesTps?: (number|null);

        /** AirQualityMetrics _pm10Standard. */
        public _pm10Standard?: "pm10Standard";

        /** AirQualityMetrics _pm25Standard. */
        public _pm25Standard?: "pm25Standard";

        /** AirQualityMetrics _pm100Standard. */
        public _pm100Standard?: "pm100Standard";

        /** AirQualityMetrics _pm10Environmental. */
        public _pm10Environmental?: "pm10Environmental";

        /** AirQualityMetrics _pm25Environmental. */
        public _pm25Environmental?: "pm25Environmental";

        /** AirQualityMetrics _pm100Environmental. */
        public _pm100Environmental?: "pm100Environmental";

        /** AirQualityMetrics _particles_03um. */
        public _particles_03um?: "particles_03um";

        /** AirQualityMetrics _particles_05um. */
        public _particles_05um?: "particles_05um";

        /** AirQualityMetrics _particles_10um. */
        public _particles_10um?: "particles_10um";

        /** AirQualityMetrics _particles_25um. */
        public _particles_25um?: "particles_25um";

        /** AirQualityMetrics _particles_50um. */
        public _particles_50um?: "particles_50um";

        /** AirQualityMetrics _particles_100um. */
        public _particles_100um?: "particles_100um";

        /** AirQualityMetrics _co2. */
        public _co2?: "co2";

        /** AirQualityMetrics _co2Temperature. */
        public _co2Temperature?: "co2Temperature";

        /** AirQualityMetrics _co2Humidity. */
        public _co2Humidity?: "co2Humidity";

        /** AirQualityMetrics _formFormaldehyde. */
        public _formFormaldehyde?: "formFormaldehyde";

        /** AirQualityMetrics _formHumidity. */
        public _formHumidity?: "formHumidity";

        /** AirQualityMetrics _formTemperature. */
        public _formTemperature?: "formTemperature";

        /** AirQualityMetrics _pm40Standard. */
        public _pm40Standard?: "pm40Standard";

        /** AirQualityMetrics _particles_40um. */
        public _particles_40um?: "particles_40um";

        /** AirQualityMetrics _pmTemperature. */
        public _pmTemperature?: "pmTemperature";

        /** AirQualityMetrics _pmHumidity. */
        public _pmHumidity?: "pmHumidity";

        /** AirQualityMetrics _pmVocIdx. */
        public _pmVocIdx?: "pmVocIdx";

        /** AirQualityMetrics _pmNoxIdx. */
        public _pmNoxIdx?: "pmNoxIdx";

        /** AirQualityMetrics _particlesTps. */
        public _particlesTps?: "particlesTps";

        /**
         * Creates a new AirQualityMetrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AirQualityMetrics instance
         */
        public static create(properties?: meshtastic.IAirQualityMetrics): meshtastic.AirQualityMetrics;

        /**
         * Encodes the specified AirQualityMetrics message. Does not implicitly {@link meshtastic.AirQualityMetrics.verify|verify} messages.
         * @param message AirQualityMetrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IAirQualityMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AirQualityMetrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AirQualityMetrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.AirQualityMetrics;

        /**
         * Creates an AirQualityMetrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AirQualityMetrics
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.AirQualityMetrics;

        /**
         * Creates a plain object from an AirQualityMetrics message. Also converts values to other types if specified.
         * @param message AirQualityMetrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.AirQualityMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AirQualityMetrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for AirQualityMetrics
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LocalStats. */
    interface ILocalStats {

        /** LocalStats uptimeSeconds */
        uptimeSeconds?: (number|null);

        /** LocalStats channelUtilization */
        channelUtilization?: (number|null);

        /** LocalStats airUtilTx */
        airUtilTx?: (number|null);

        /** LocalStats numPacketsTx */
        numPacketsTx?: (number|null);

        /** LocalStats numPacketsRx */
        numPacketsRx?: (number|null);

        /** LocalStats numPacketsRxBad */
        numPacketsRxBad?: (number|null);

        /** LocalStats numOnlineNodes */
        numOnlineNodes?: (number|null);

        /** LocalStats numTotalNodes */
        numTotalNodes?: (number|null);

        /** LocalStats numRxDupe */
        numRxDupe?: (number|null);

        /** LocalStats numTxRelay */
        numTxRelay?: (number|null);

        /** LocalStats numTxRelayCanceled */
        numTxRelayCanceled?: (number|null);

        /** LocalStats heapTotalBytes */
        heapTotalBytes?: (number|null);

        /** LocalStats heapFreeBytes */
        heapFreeBytes?: (number|null);
    }

    /** Represents a LocalStats. */
    class LocalStats implements ILocalStats {

        /**
         * Constructs a new LocalStats.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.ILocalStats);

        /** LocalStats uptimeSeconds. */
        public uptimeSeconds: number;

        /** LocalStats channelUtilization. */
        public channelUtilization: number;

        /** LocalStats airUtilTx. */
        public airUtilTx: number;

        /** LocalStats numPacketsTx. */
        public numPacketsTx: number;

        /** LocalStats numPacketsRx. */
        public numPacketsRx: number;

        /** LocalStats numPacketsRxBad. */
        public numPacketsRxBad: number;

        /** LocalStats numOnlineNodes. */
        public numOnlineNodes: number;

        /** LocalStats numTotalNodes. */
        public numTotalNodes: number;

        /** LocalStats numRxDupe. */
        public numRxDupe: number;

        /** LocalStats numTxRelay. */
        public numTxRelay: number;

        /** LocalStats numTxRelayCanceled. */
        public numTxRelayCanceled: number;

        /** LocalStats heapTotalBytes. */
        public heapTotalBytes: number;

        /** LocalStats heapFreeBytes. */
        public heapFreeBytes: number;

        /**
         * Creates a new LocalStats instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LocalStats instance
         */
        public static create(properties?: meshtastic.ILocalStats): meshtastic.LocalStats;

        /**
         * Encodes the specified LocalStats message. Does not implicitly {@link meshtastic.LocalStats.verify|verify} messages.
         * @param message LocalStats message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.ILocalStats, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LocalStats message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LocalStats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.LocalStats;

        /**
         * Creates a LocalStats message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LocalStats
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.LocalStats;

        /**
         * Creates a plain object from a LocalStats message. Also converts values to other types if specified.
         * @param message LocalStats
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.LocalStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LocalStats to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LocalStats
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HealthMetrics. */
    interface IHealthMetrics {

        /** HealthMetrics heartBpm */
        heartBpm?: (number|null);

        /** HealthMetrics spO2 */
        spO2?: (number|null);

        /** HealthMetrics temperature */
        temperature?: (number|null);
    }

    /** Represents a HealthMetrics. */
    class HealthMetrics implements IHealthMetrics {

        /**
         * Constructs a new HealthMetrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IHealthMetrics);

        /** HealthMetrics heartBpm. */
        public heartBpm?: (number|null);

        /** HealthMetrics spO2. */
        public spO2?: (number|null);

        /** HealthMetrics temperature. */
        public temperature?: (number|null);

        /** HealthMetrics _heartBpm. */
        public _heartBpm?: "heartBpm";

        /** HealthMetrics _spO2. */
        public _spO2?: "spO2";

        /** HealthMetrics _temperature. */
        public _temperature?: "temperature";

        /**
         * Creates a new HealthMetrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HealthMetrics instance
         */
        public static create(properties?: meshtastic.IHealthMetrics): meshtastic.HealthMetrics;

        /**
         * Encodes the specified HealthMetrics message. Does not implicitly {@link meshtastic.HealthMetrics.verify|verify} messages.
         * @param message HealthMetrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IHealthMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HealthMetrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HealthMetrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.HealthMetrics;

        /**
         * Creates a HealthMetrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HealthMetrics
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.HealthMetrics;

        /**
         * Creates a plain object from a HealthMetrics message. Also converts values to other types if specified.
         * @param message HealthMetrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.HealthMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HealthMetrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HealthMetrics
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HostMetrics. */
    interface IHostMetrics {

        /** HostMetrics uptimeSeconds */
        uptimeSeconds?: (number|null);

        /** HostMetrics freememBytes */
        freememBytes?: (number|Long|null);

        /** HostMetrics diskfree1Bytes */
        diskfree1Bytes?: (number|Long|null);

        /** HostMetrics diskfree2Bytes */
        diskfree2Bytes?: (number|Long|null);

        /** HostMetrics diskfree3Bytes */
        diskfree3Bytes?: (number|Long|null);

        /** HostMetrics load1 */
        load1?: (number|null);

        /** HostMetrics load5 */
        load5?: (number|null);

        /** HostMetrics load15 */
        load15?: (number|null);

        /** HostMetrics userString */
        userString?: (string|null);
    }

    /** Represents a HostMetrics. */
    class HostMetrics implements IHostMetrics {

        /**
         * Constructs a new HostMetrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IHostMetrics);

        /** HostMetrics uptimeSeconds. */
        public uptimeSeconds: number;

        /** HostMetrics freememBytes. */
        public freememBytes: (number|Long);

        /** HostMetrics diskfree1Bytes. */
        public diskfree1Bytes: (number|Long);

        /** HostMetrics diskfree2Bytes. */
        public diskfree2Bytes?: (number|Long|null);

        /** HostMetrics diskfree3Bytes. */
        public diskfree3Bytes?: (number|Long|null);

        /** HostMetrics load1. */
        public load1: number;

        /** HostMetrics load5. */
        public load5: number;

        /** HostMetrics load15. */
        public load15: number;

        /** HostMetrics userString. */
        public userString?: (string|null);

        /** HostMetrics _diskfree2Bytes. */
        public _diskfree2Bytes?: "diskfree2Bytes";

        /** HostMetrics _diskfree3Bytes. */
        public _diskfree3Bytes?: "diskfree3Bytes";

        /** HostMetrics _userString. */
        public _userString?: "userString";

        /**
         * Creates a new HostMetrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HostMetrics instance
         */
        public static create(properties?: meshtastic.IHostMetrics): meshtastic.HostMetrics;

        /**
         * Encodes the specified HostMetrics message. Does not implicitly {@link meshtastic.HostMetrics.verify|verify} messages.
         * @param message HostMetrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IHostMetrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HostMetrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HostMetrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.HostMetrics;

        /**
         * Creates a HostMetrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HostMetrics
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.HostMetrics;

        /**
         * Creates a plain object from a HostMetrics message. Also converts values to other types if specified.
         * @param message HostMetrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.HostMetrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HostMetrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HostMetrics
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Telemetry. */
    interface ITelemetry {

        /** Telemetry time */
        time?: (number|null);

        /** Telemetry deviceMetrics */
        deviceMetrics?: (meshtastic.IDeviceMetrics|null);

        /** Telemetry environmentMetrics */
        environmentMetrics?: (meshtastic.IEnvironmentMetrics|null);

        /** Telemetry airQualityMetrics */
        airQualityMetrics?: (meshtastic.IAirQualityMetrics|null);

        /** Telemetry powerMetrics */
        powerMetrics?: (meshtastic.IPowerMetrics|null);

        /** Telemetry localStats */
        localStats?: (meshtastic.ILocalStats|null);

        /** Telemetry healthMetrics */
        healthMetrics?: (meshtastic.IHealthMetrics|null);

        /** Telemetry hostMetrics */
        hostMetrics?: (meshtastic.IHostMetrics|null);
    }

    /** Represents a Telemetry. */
    class Telemetry implements ITelemetry {

        /**
         * Constructs a new Telemetry.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.ITelemetry);

        /** Telemetry time. */
        public time: number;

        /** Telemetry deviceMetrics. */
        public deviceMetrics?: (meshtastic.IDeviceMetrics|null);

        /** Telemetry environmentMetrics. */
        public environmentMetrics?: (meshtastic.IEnvironmentMetrics|null);

        /** Telemetry airQualityMetrics. */
        public airQualityMetrics?: (meshtastic.IAirQualityMetrics|null);

        /** Telemetry powerMetrics. */
        public powerMetrics?: (meshtastic.IPowerMetrics|null);

        /** Telemetry localStats. */
        public localStats?: (meshtastic.ILocalStats|null);

        /** Telemetry healthMetrics. */
        public healthMetrics?: (meshtastic.IHealthMetrics|null);

        /** Telemetry hostMetrics. */
        public hostMetrics?: (meshtastic.IHostMetrics|null);

        /** Telemetry variant. */
        public variant?: ("deviceMetrics"|"environmentMetrics"|"airQualityMetrics"|"powerMetrics"|"localStats"|"healthMetrics"|"hostMetrics");

        /**
         * Creates a new Telemetry instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Telemetry instance
         */
        public static create(properties?: meshtastic.ITelemetry): meshtastic.Telemetry;

        /**
         * Encodes the specified Telemetry message. Does not implicitly {@link meshtastic.Telemetry.verify|verify} messages.
         * @param message Telemetry message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.ITelemetry, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Telemetry message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Telemetry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Telemetry;

        /**
         * Creates a Telemetry message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Telemetry
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Telemetry;

        /**
         * Creates a plain object from a Telemetry message. Also converts values to other types if specified.
         * @param message Telemetry
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Telemetry, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Telemetry to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Telemetry
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** TelemetrySensorType enum. */
    enum TelemetrySensorType {
        SENSOR_UNSET = 0,
        BME280 = 1,
        BME680 = 2,
        MCP9808 = 3,
        INA260 = 4,
        INA219 = 5,
        BMP280 = 6,
        SHTC3 = 7,
        LPS22 = 8,
        QMC6310 = 9,
        QMI8658 = 10,
        QMC5883L = 11,
        SHT31 = 12,
        PMSA003I = 13,
        INA3221 = 14,
        BMP085 = 15,
        RCWL9620 = 16,
        SHT4X = 17,
        VEML7700 = 18,
        MLX90632 = 19,
        OPT3001 = 20,
        LTR390UV = 21,
        TSL25911FN = 22,
        AHT10 = 23,
        DFROBOT_LARK = 24,
        NAU7802 = 25,
        BMP3XX = 26,
        ICM20948 = 27,
        MAX17048 = 28,
        CUSTOM_SENSOR = 29,
        MAX30102 = 30,
        MLX90614 = 31,
        SCD4X = 32,
        RADSENS = 33,
        INA226 = 34,
        DFROBOT_RAIN = 35,
        DPS310 = 36,
        RAK12035 = 37,
        MAX17261 = 38,
        PCT2075 = 39,
        ADS1X15 = 40,
        ADS1X15_ALT = 41,
        SFA30 = 42,
        SEN5X = 43,
        TSL2561 = 44
    }

    /** Properties of a Nau7802Config. */
    interface INau7802Config {

        /** Nau7802Config zeroOffset */
        zeroOffset?: (number|null);

        /** Nau7802Config calibrationFactor */
        calibrationFactor?: (number|null);
    }

    /** Represents a Nau7802Config. */
    class Nau7802Config implements INau7802Config {

        /**
         * Constructs a new Nau7802Config.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.INau7802Config);

        /** Nau7802Config zeroOffset. */
        public zeroOffset: number;

        /** Nau7802Config calibrationFactor. */
        public calibrationFactor: number;

        /**
         * Creates a new Nau7802Config instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Nau7802Config instance
         */
        public static create(properties?: meshtastic.INau7802Config): meshtastic.Nau7802Config;

        /**
         * Encodes the specified Nau7802Config message. Does not implicitly {@link meshtastic.Nau7802Config.verify|verify} messages.
         * @param message Nau7802Config message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.INau7802Config, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Nau7802Config message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Nau7802Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.Nau7802Config;

        /**
         * Creates a Nau7802Config message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Nau7802Config
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.Nau7802Config;

        /**
         * Creates a plain object from a Nau7802Config message. Also converts values to other types if specified.
         * @param message Nau7802Config
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.Nau7802Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Nau7802Config to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Nau7802Config
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a XModem. */
    interface IXModem {

        /** XModem control */
        control?: (meshtastic.XModem.Control|null);

        /** XModem seq */
        seq?: (number|null);

        /** XModem crc16 */
        crc16?: (number|null);

        /** XModem buffer */
        buffer?: (Uint8Array|null);
    }

    /** Represents a XModem. */
    class XModem implements IXModem {

        /**
         * Constructs a new XModem.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IXModem);

        /** XModem control. */
        public control: meshtastic.XModem.Control;

        /** XModem seq. */
        public seq: number;

        /** XModem crc16. */
        public crc16: number;

        /** XModem buffer. */
        public buffer: Uint8Array;

        /**
         * Creates a new XModem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns XModem instance
         */
        public static create(properties?: meshtastic.IXModem): meshtastic.XModem;

        /**
         * Encodes the specified XModem message. Does not implicitly {@link meshtastic.XModem.verify|verify} messages.
         * @param message XModem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IXModem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a XModem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns XModem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.XModem;

        /**
         * Creates a XModem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns XModem
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.XModem;

        /**
         * Creates a plain object from a XModem message. Also converts values to other types if specified.
         * @param message XModem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.XModem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this XModem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for XModem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace XModem {

        /** Control enum. */
        enum Control {
            NUL = 0,
            SOH = 1,
            STX = 2,
            EOT = 4,
            ACK = 6,
            NAK = 21,
            CAN = 24,
            CTRLZ = 26
        }
    }

    /** Properties of a ChannelSet. */
    interface IChannelSet {

        /** ChannelSet settings */
        settings?: (meshtastic.IChannelSettings[]|null);

        /** ChannelSet loraConfig */
        loraConfig?: (meshtastic.Config.ILoRaConfig|null);
    }

    /** Represents a ChannelSet. */
    class ChannelSet implements IChannelSet {

        /**
         * Constructs a new ChannelSet.
         * @param [properties] Properties to set
         */
        constructor(properties?: meshtastic.IChannelSet);

        /** ChannelSet settings. */
        public settings: meshtastic.IChannelSettings[];

        /** ChannelSet loraConfig. */
        public loraConfig?: (meshtastic.Config.ILoRaConfig|null);

        /**
         * Creates a new ChannelSet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelSet instance
         */
        public static create(properties?: meshtastic.IChannelSet): meshtastic.ChannelSet;

        /**
         * Encodes the specified ChannelSet message. Does not implicitly {@link meshtastic.ChannelSet.verify|verify} messages.
         * @param message ChannelSet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: meshtastic.IChannelSet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelSet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): meshtastic.ChannelSet;

        /**
         * Creates a ChannelSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelSet
         */
        public static fromObject(object: { [k: string]: any }): meshtastic.ChannelSet;

        /**
         * Creates a plain object from a ChannelSet message. Also converts values to other types if specified.
         * @param message ChannelSet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: meshtastic.ChannelSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelSet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ChannelSet
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
