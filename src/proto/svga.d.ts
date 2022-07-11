import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace opensource. */
    namespace opensource {

        /** Namespace svga. */
        namespace svga {

            /** Properties of a MovieParams. */
            interface IMovieParams {

                /** MovieParams viewBoxWidth */
                viewBoxWidth?: (number|null);

                /** MovieParams viewBoxHeight */
                viewBoxHeight?: (number|null);

                /** MovieParams fps */
                fps?: (number|null);

                /** MovieParams frames */
                frames?: (number|null);
            }

            /** Represents a MovieParams. */
            class MovieParams implements IMovieParams {

                /**
                 * Constructs a new MovieParams.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.IMovieParams);

                /** MovieParams viewBoxWidth. */
                public viewBoxWidth: number;

                /** MovieParams viewBoxHeight. */
                public viewBoxHeight: number;

                /** MovieParams fps. */
                public fps: number;

                /** MovieParams frames. */
                public frames: number;

                /**
                 * Decodes a MovieParams message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MovieParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.MovieParams;

                /**
                 * Gets the default type url for MovieParams
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a SpriteEntity. */
            interface ISpriteEntity {

                /** SpriteEntity imageKey */
                imageKey?: (string|null);

                /** SpriteEntity frames */
                frames?: (com.opensource.svga.IFrameEntity[]|null);

                /** SpriteEntity matteKey */
                matteKey?: (string|null);
            }

            /** Represents a SpriteEntity. */
            class SpriteEntity implements ISpriteEntity {

                /**
                 * Constructs a new SpriteEntity.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.ISpriteEntity);

                /** SpriteEntity imageKey. */
                public imageKey: string;

                /** SpriteEntity frames. */
                public frames: com.opensource.svga.IFrameEntity[];

                /** SpriteEntity matteKey. */
                public matteKey: string;

                /**
                 * Decodes a SpriteEntity message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns SpriteEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.SpriteEntity;

                /**
                 * Gets the default type url for SpriteEntity
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an AudioEntity. */
            interface IAudioEntity {

                /** AudioEntity audioKey */
                audioKey?: (string|null);

                /** AudioEntity startFrame */
                startFrame?: (number|null);

                /** AudioEntity endFrame */
                endFrame?: (number|null);

                /** AudioEntity startTime */
                startTime?: (number|null);

                /** AudioEntity totalTime */
                totalTime?: (number|null);
            }

            /** Represents an AudioEntity. */
            class AudioEntity implements IAudioEntity {

                /**
                 * Constructs a new AudioEntity.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.IAudioEntity);

                /** AudioEntity audioKey. */
                public audioKey: string;

                /** AudioEntity startFrame. */
                public startFrame: number;

                /** AudioEntity endFrame. */
                public endFrame: number;

                /** AudioEntity startTime. */
                public startTime: number;

                /** AudioEntity totalTime. */
                public totalTime: number;

                /**
                 * Decodes an AudioEntity message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns AudioEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.AudioEntity;

                /**
                 * Gets the default type url for AudioEntity
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Layout. */
            interface ILayout {

                /** Layout x */
                x?: (number|null);

                /** Layout y */
                y?: (number|null);

                /** Layout width */
                width?: (number|null);

                /** Layout height */
                height?: (number|null);
            }

            /** Represents a Layout. */
            class Layout implements ILayout {

                /**
                 * Constructs a new Layout.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.ILayout);

                /** Layout x. */
                public x: number;

                /** Layout y. */
                public y: number;

                /** Layout width. */
                public width: number;

                /** Layout height. */
                public height: number;

                /**
                 * Decodes a Layout message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Layout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.Layout;

                /**
                 * Gets the default type url for Layout
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a Transform. */
            interface ITransform {

                /** Transform a */
                a?: (number|null);

                /** Transform b */
                b?: (number|null);

                /** Transform c */
                c?: (number|null);

                /** Transform d */
                d?: (number|null);

                /** Transform tx */
                tx?: (number|null);

                /** Transform ty */
                ty?: (number|null);
            }

            /** Represents a Transform. */
            class Transform implements ITransform {

                /**
                 * Constructs a new Transform.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.ITransform);

                /** Transform a. */
                public a: number;

                /** Transform b. */
                public b: number;

                /** Transform c. */
                public c: number;

                /** Transform d. */
                public d: number;

                /** Transform tx. */
                public tx: number;

                /** Transform ty. */
                public ty: number;

                /**
                 * Decodes a Transform message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns Transform
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.Transform;

                /**
                 * Gets the default type url for Transform
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ShapeEntity. */
            interface IShapeEntity {

                /** ShapeEntity type */
                type?: (com.opensource.svga.ShapeEntity.ShapeType|null);

                /** ShapeEntity shape */
                shape?: (com.opensource.svga.ShapeEntity.IShapeArgs|null);

                /** ShapeEntity rect */
                rect?: (com.opensource.svga.ShapeEntity.IRectArgs|null);

                /** ShapeEntity ellipse */
                ellipse?: (com.opensource.svga.ShapeEntity.IEllipseArgs|null);

                /** ShapeEntity styles */
                styles?: (com.opensource.svga.ShapeEntity.IShapeStyle|null);

                /** ShapeEntity transform */
                transform?: (com.opensource.svga.ITransform|null);
            }

            /** Represents a ShapeEntity. */
            class ShapeEntity implements IShapeEntity {

                /**
                 * Constructs a new ShapeEntity.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.IShapeEntity);

                /** ShapeEntity type. */
                public type: com.opensource.svga.ShapeEntity.ShapeType;

                /** ShapeEntity shape. */
                public shape?: (com.opensource.svga.ShapeEntity.IShapeArgs|null);

                /** ShapeEntity rect. */
                public rect?: (com.opensource.svga.ShapeEntity.IRectArgs|null);

                /** ShapeEntity ellipse. */
                public ellipse?: (com.opensource.svga.ShapeEntity.IEllipseArgs|null);

                /** ShapeEntity styles. */
                public styles?: (com.opensource.svga.ShapeEntity.IShapeStyle|null);

                /** ShapeEntity transform. */
                public transform?: (com.opensource.svga.ITransform|null);

                /** ShapeEntity args. */
                public args?: ("shape"|"rect"|"ellipse");

                /**
                 * Decodes a ShapeEntity message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns ShapeEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.ShapeEntity;

                /**
                 * Gets the default type url for ShapeEntity
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace ShapeEntity {

                /** ShapeType enum. */
                enum ShapeType {
                    SHAPE = 0,
                    RECT = 1,
                    ELLIPSE = 2,
                    KEEP = 3
                }

                /** Properties of a ShapeArgs. */
                interface IShapeArgs {

                    /** ShapeArgs d */
                    d?: (string|null);
                }

                /** Represents a ShapeArgs. */
                class ShapeArgs implements IShapeArgs {

                    /**
                     * Constructs a new ShapeArgs.
                     * @param [p] Properties to set
                     */
                    constructor(p?: com.opensource.svga.ShapeEntity.IShapeArgs);

                    /** ShapeArgs d. */
                    public d: string;

                    /**
                     * Decodes a ShapeArgs message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ShapeArgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.ShapeEntity.ShapeArgs;

                    /**
                     * Gets the default type url for ShapeArgs
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a RectArgs. */
                interface IRectArgs {

                    /** RectArgs x */
                    x?: (number|null);

                    /** RectArgs y */
                    y?: (number|null);

                    /** RectArgs width */
                    width?: (number|null);

                    /** RectArgs height */
                    height?: (number|null);

                    /** RectArgs cornerRadius */
                    cornerRadius?: (number|null);
                }

                /** Represents a RectArgs. */
                class RectArgs implements IRectArgs {

                    /**
                     * Constructs a new RectArgs.
                     * @param [p] Properties to set
                     */
                    constructor(p?: com.opensource.svga.ShapeEntity.IRectArgs);

                    /** RectArgs x. */
                    public x: number;

                    /** RectArgs y. */
                    public y: number;

                    /** RectArgs width. */
                    public width: number;

                    /** RectArgs height. */
                    public height: number;

                    /** RectArgs cornerRadius. */
                    public cornerRadius: number;

                    /**
                     * Decodes a RectArgs message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns RectArgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.ShapeEntity.RectArgs;

                    /**
                     * Gets the default type url for RectArgs
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of an EllipseArgs. */
                interface IEllipseArgs {

                    /** EllipseArgs x */
                    x?: (number|null);

                    /** EllipseArgs y */
                    y?: (number|null);

                    /** EllipseArgs radiusX */
                    radiusX?: (number|null);

                    /** EllipseArgs radiusY */
                    radiusY?: (number|null);
                }

                /** Represents an EllipseArgs. */
                class EllipseArgs implements IEllipseArgs {

                    /**
                     * Constructs a new EllipseArgs.
                     * @param [p] Properties to set
                     */
                    constructor(p?: com.opensource.svga.ShapeEntity.IEllipseArgs);

                    /** EllipseArgs x. */
                    public x: number;

                    /** EllipseArgs y. */
                    public y: number;

                    /** EllipseArgs radiusX. */
                    public radiusX: number;

                    /** EllipseArgs radiusY. */
                    public radiusY: number;

                    /**
                     * Decodes an EllipseArgs message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns EllipseArgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.ShapeEntity.EllipseArgs;

                    /**
                     * Gets the default type url for EllipseArgs
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a ShapeStyle. */
                interface IShapeStyle {

                    /** ShapeStyle fill */
                    fill?: (com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null);

                    /** ShapeStyle stroke */
                    stroke?: (com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null);

                    /** ShapeStyle strokeWidth */
                    strokeWidth?: (number|null);

                    /** ShapeStyle lineCap */
                    lineCap?: (com.opensource.svga.ShapeEntity.ShapeStyle.LineCap|null);

                    /** ShapeStyle lineJoin */
                    lineJoin?: (com.opensource.svga.ShapeEntity.ShapeStyle.LineJoin|null);

                    /** ShapeStyle miterLimit */
                    miterLimit?: (number|null);

                    /** ShapeStyle lineDashI */
                    lineDashI?: (number|null);

                    /** ShapeStyle lineDashII */
                    lineDashII?: (number|null);

                    /** ShapeStyle lineDashIII */
                    lineDashIII?: (number|null);
                }

                /** Represents a ShapeStyle. */
                class ShapeStyle implements IShapeStyle {

                    /**
                     * Constructs a new ShapeStyle.
                     * @param [p] Properties to set
                     */
                    constructor(p?: com.opensource.svga.ShapeEntity.IShapeStyle);

                    /** ShapeStyle fill. */
                    public fill?: (com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null);

                    /** ShapeStyle stroke. */
                    public stroke?: (com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null);

                    /** ShapeStyle strokeWidth. */
                    public strokeWidth: number;

                    /** ShapeStyle lineCap. */
                    public lineCap: com.opensource.svga.ShapeEntity.ShapeStyle.LineCap;

                    /** ShapeStyle lineJoin. */
                    public lineJoin: com.opensource.svga.ShapeEntity.ShapeStyle.LineJoin;

                    /** ShapeStyle miterLimit. */
                    public miterLimit: number;

                    /** ShapeStyle lineDashI. */
                    public lineDashI: number;

                    /** ShapeStyle lineDashII. */
                    public lineDashII: number;

                    /** ShapeStyle lineDashIII. */
                    public lineDashIII: number;

                    /**
                     * Decodes a ShapeStyle message from the specified reader or buffer.
                     * @param r Reader or buffer to decode from
                     * @param [l] Message length if known beforehand
                     * @returns ShapeStyle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.ShapeEntity.ShapeStyle;

                    /**
                     * Gets the default type url for ShapeStyle
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                namespace ShapeStyle {

                    /** Properties of a RGBAColor. */
                    interface IRGBAColor {

                        /** RGBAColor r */
                        r?: (number|null);

                        /** RGBAColor g */
                        g?: (number|null);

                        /** RGBAColor b */
                        b?: (number|null);

                        /** RGBAColor a */
                        a?: (number|null);
                    }

                    /** Represents a RGBAColor. */
                    class RGBAColor implements IRGBAColor {

                        /**
                         * Constructs a new RGBAColor.
                         * @param [p] Properties to set
                         */
                        constructor(p?: com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor);

                        /** RGBAColor r. */
                        public r: number;

                        /** RGBAColor g. */
                        public g: number;

                        /** RGBAColor b. */
                        public b: number;

                        /** RGBAColor a. */
                        public a: number;

                        /**
                         * Decodes a RGBAColor message from the specified reader or buffer.
                         * @param r Reader or buffer to decode from
                         * @param [l] Message length if known beforehand
                         * @returns RGBAColor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor;

                        /**
                         * Gets the default type url for RGBAColor
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** LineCap enum. */
                    enum LineCap {
                        LineCap_BUTT = 0,
                        LineCap_ROUND = 1,
                        LineCap_SQUARE = 2
                    }

                    /** LineJoin enum. */
                    enum LineJoin {
                        LineJoin_MITER = 0,
                        LineJoin_ROUND = 1,
                        LineJoin_BEVEL = 2
                    }
                }
            }

            /** Properties of a FrameEntity. */
            interface IFrameEntity {

                /** FrameEntity alpha */
                alpha?: (number|null);

                /** FrameEntity layout */
                layout?: (com.opensource.svga.ILayout|null);

                /** FrameEntity transform */
                transform?: (com.opensource.svga.ITransform|null);

                /** FrameEntity clipPath */
                clipPath?: (string|null);

                /** FrameEntity shapes */
                shapes?: (com.opensource.svga.IShapeEntity[]|null);
            }

            /** Represents a FrameEntity. */
            class FrameEntity implements IFrameEntity {

                /**
                 * Constructs a new FrameEntity.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.IFrameEntity);

                /** FrameEntity alpha. */
                public alpha: number;

                /** FrameEntity layout. */
                public layout?: (com.opensource.svga.ILayout|null);

                /** FrameEntity transform. */
                public transform?: (com.opensource.svga.ITransform|null);

                /** FrameEntity clipPath. */
                public clipPath: string;

                /** FrameEntity shapes. */
                public shapes: com.opensource.svga.IShapeEntity[];

                /**
                 * Decodes a FrameEntity message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns FrameEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.FrameEntity;

                /**
                 * Gets the default type url for FrameEntity
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a MovieEntity. */
            interface IMovieEntity {

                /** MovieEntity version */
                version?: (string|null);

                /** MovieEntity params */
                params?: (com.opensource.svga.IMovieParams|null);

                /** MovieEntity images */
                images?: ({ [k: string]: Uint8Array }|null);

                /** MovieEntity sprites */
                sprites?: (com.opensource.svga.ISpriteEntity[]|null);

                /** MovieEntity audios */
                audios?: (com.opensource.svga.IAudioEntity[]|null);
            }

            /** Represents a MovieEntity. */
            class MovieEntity implements IMovieEntity {

                /**
                 * Constructs a new MovieEntity.
                 * @param [p] Properties to set
                 */
                constructor(p?: com.opensource.svga.IMovieEntity);

                /** MovieEntity version. */
                public version: string;

                /** MovieEntity params. */
                public params?: (com.opensource.svga.IMovieParams|null);

                /** MovieEntity images. */
                public images: { [k: string]: Uint8Array };

                /** MovieEntity sprites. */
                public sprites: com.opensource.svga.ISpriteEntity[];

                /** MovieEntity audios. */
                public audios: com.opensource.svga.IAudioEntity[];

                /**
                 * Decodes a MovieEntity message from the specified reader or buffer.
                 * @param r Reader or buffer to decode from
                 * @param [l] Message length if known beforehand
                 * @returns MovieEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): com.opensource.svga.MovieEntity;

                /**
                 * Gets the default type url for MovieEntity
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}
