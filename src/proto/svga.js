/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
import $protobuf from "protobufjs/minimal.js";

// Common aliases
const $Reader = $protobuf.Reader, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const com = $root.com = (() => {

    /**
     * Namespace com.
     * @exports com
     * @namespace
     */
    const com = {};

    com.opensource = (function() {

        /**
         * Namespace opensource.
         * @memberof com
         * @namespace
         */
        const opensource = {};

        opensource.svga = (function() {

            /**
             * Namespace svga.
             * @memberof com.opensource
             * @namespace
             */
            const svga = {};

            svga.MovieParams = (function() {

                /**
                 * Properties of a MovieParams.
                 * @memberof com.opensource.svga
                 * @interface IMovieParams
                 * @property {number|null} [viewBoxWidth] MovieParams viewBoxWidth
                 * @property {number|null} [viewBoxHeight] MovieParams viewBoxHeight
                 * @property {number|null} [fps] MovieParams fps
                 * @property {number|null} [frames] MovieParams frames
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new MovieParams.
                 * @memberof com.opensource.svga
                 * @classdesc Represents a MovieParams.
                 * @implements IMovieParams
                 * @constructor
                 * @param {com.opensource.svga.IMovieParams=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function MovieParams(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * MovieParams viewBoxWidth.
                 * @member {number} viewBoxWidth
                 * @memberof com.opensource.svga.MovieParams
                 * @instance
                 */
                MovieParams.prototype.viewBoxWidth = 0;

                /**
                 * MovieParams viewBoxHeight.
                 * @member {number} viewBoxHeight
                 * @memberof com.opensource.svga.MovieParams
                 * @instance
                 */
                MovieParams.prototype.viewBoxHeight = 0;

                /**
                 * MovieParams fps.
                 * @member {number} fps
                 * @memberof com.opensource.svga.MovieParams
                 * @instance
                 */
                MovieParams.prototype.fps = 0;

                /**
                 * MovieParams frames.
                 * @member {number} frames
                 * @memberof com.opensource.svga.MovieParams
                 * @instance
                 */
                MovieParams.prototype.frames = 0;

                /**
                 * Decodes a MovieParams message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.MovieParams
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.MovieParams} MovieParams
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MovieParams.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.MovieParams(), v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.viewBoxWidth = v;
                                else
                                    delete m.viewBoxWidth;
                                continue;
                            }
                        case 2: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.viewBoxHeight = v;
                                else
                                    delete m.viewBoxHeight;
                                continue;
                            }
                        case 3: {
                                if (u !== 0)
                                    break;
                                if (v = r.int32())
                                    m.fps = v;
                                else
                                    delete m.fps;
                                continue;
                            }
                        case 4: {
                                if (u !== 0)
                                    break;
                                if (v = r.int32())
                                    m.frames = v;
                                else
                                    delete m.frames;
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for MovieParams
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.MovieParams
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                MovieParams.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.MovieParams";
                };

                return MovieParams;
            })();

            svga.SpriteEntity = (function() {

                /**
                 * Properties of a SpriteEntity.
                 * @memberof com.opensource.svga
                 * @interface ISpriteEntity
                 * @property {string|null} [imageKey] SpriteEntity imageKey
                 * @property {Array.<com.opensource.svga.IFrameEntity>|null} [frames] SpriteEntity frames
                 * @property {string|null} [matteKey] SpriteEntity matteKey
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new SpriteEntity.
                 * @memberof com.opensource.svga
                 * @classdesc Represents a SpriteEntity.
                 * @implements ISpriteEntity
                 * @constructor
                 * @param {com.opensource.svga.ISpriteEntity=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function SpriteEntity(p) {
                    this.frames = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * SpriteEntity imageKey.
                 * @member {string} imageKey
                 * @memberof com.opensource.svga.SpriteEntity
                 * @instance
                 */
                SpriteEntity.prototype.imageKey = "";

                /**
                 * SpriteEntity frames.
                 * @member {Array.<com.opensource.svga.IFrameEntity>} frames
                 * @memberof com.opensource.svga.SpriteEntity
                 * @instance
                 */
                SpriteEntity.prototype.frames = $util.emptyArray;

                /**
                 * SpriteEntity matteKey.
                 * @member {string} matteKey
                 * @memberof com.opensource.svga.SpriteEntity
                 * @instance
                 */
                SpriteEntity.prototype.matteKey = "";

                /**
                 * Decodes a SpriteEntity message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.SpriteEntity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.SpriteEntity} SpriteEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SpriteEntity.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.SpriteEntity(), v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 2)
                                    break;
                                if ((v = r.string()).length)
                                    m.imageKey = v;
                                else
                                    delete m.imageKey;
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                if (!(m.frames && m.frames.length))
                                    m.frames = [];
                                m.frames.push($root.com.opensource.svga.FrameEntity.decode(r, r.uint32(), undefined, q + 1));
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                if ((v = r.string()).length)
                                    m.matteKey = v;
                                else
                                    delete m.matteKey;
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for SpriteEntity
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.SpriteEntity
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                SpriteEntity.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.SpriteEntity";
                };

                return SpriteEntity;
            })();

            svga.AudioEntity = (function() {

                /**
                 * Properties of an AudioEntity.
                 * @memberof com.opensource.svga
                 * @interface IAudioEntity
                 * @property {string|null} [audioKey] AudioEntity audioKey
                 * @property {number|null} [startFrame] AudioEntity startFrame
                 * @property {number|null} [endFrame] AudioEntity endFrame
                 * @property {number|null} [startTime] AudioEntity startTime
                 * @property {number|null} [totalTime] AudioEntity totalTime
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new AudioEntity.
                 * @memberof com.opensource.svga
                 * @classdesc Represents an AudioEntity.
                 * @implements IAudioEntity
                 * @constructor
                 * @param {com.opensource.svga.IAudioEntity=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function AudioEntity(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * AudioEntity audioKey.
                 * @member {string} audioKey
                 * @memberof com.opensource.svga.AudioEntity
                 * @instance
                 */
                AudioEntity.prototype.audioKey = "";

                /**
                 * AudioEntity startFrame.
                 * @member {number} startFrame
                 * @memberof com.opensource.svga.AudioEntity
                 * @instance
                 */
                AudioEntity.prototype.startFrame = 0;

                /**
                 * AudioEntity endFrame.
                 * @member {number} endFrame
                 * @memberof com.opensource.svga.AudioEntity
                 * @instance
                 */
                AudioEntity.prototype.endFrame = 0;

                /**
                 * AudioEntity startTime.
                 * @member {number} startTime
                 * @memberof com.opensource.svga.AudioEntity
                 * @instance
                 */
                AudioEntity.prototype.startTime = 0;

                /**
                 * AudioEntity totalTime.
                 * @member {number} totalTime
                 * @memberof com.opensource.svga.AudioEntity
                 * @instance
                 */
                AudioEntity.prototype.totalTime = 0;

                /**
                 * Decodes an AudioEntity message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.AudioEntity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.AudioEntity} AudioEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AudioEntity.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.AudioEntity(), v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 2)
                                    break;
                                if ((v = r.string()).length)
                                    m.audioKey = v;
                                else
                                    delete m.audioKey;
                                continue;
                            }
                        case 2: {
                                if (u !== 0)
                                    break;
                                if (v = r.int32())
                                    m.startFrame = v;
                                else
                                    delete m.startFrame;
                                continue;
                            }
                        case 3: {
                                if (u !== 0)
                                    break;
                                if (v = r.int32())
                                    m.endFrame = v;
                                else
                                    delete m.endFrame;
                                continue;
                            }
                        case 4: {
                                if (u !== 0)
                                    break;
                                if (v = r.int32())
                                    m.startTime = v;
                                else
                                    delete m.startTime;
                                continue;
                            }
                        case 5: {
                                if (u !== 0)
                                    break;
                                if (v = r.int32())
                                    m.totalTime = v;
                                else
                                    delete m.totalTime;
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for AudioEntity
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.AudioEntity
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                AudioEntity.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.AudioEntity";
                };

                return AudioEntity;
            })();

            svga.Layout = (function() {

                /**
                 * Properties of a Layout.
                 * @memberof com.opensource.svga
                 * @interface ILayout
                 * @property {number|null} [x] Layout x
                 * @property {number|null} [y] Layout y
                 * @property {number|null} [width] Layout width
                 * @property {number|null} [height] Layout height
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new Layout.
                 * @memberof com.opensource.svga
                 * @classdesc Represents a Layout.
                 * @implements ILayout
                 * @constructor
                 * @param {com.opensource.svga.ILayout=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function Layout(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Layout x.
                 * @member {number} x
                 * @memberof com.opensource.svga.Layout
                 * @instance
                 */
                Layout.prototype.x = 0;

                /**
                 * Layout y.
                 * @member {number} y
                 * @memberof com.opensource.svga.Layout
                 * @instance
                 */
                Layout.prototype.y = 0;

                /**
                 * Layout width.
                 * @member {number} width
                 * @memberof com.opensource.svga.Layout
                 * @instance
                 */
                Layout.prototype.width = 0;

                /**
                 * Layout height.
                 * @member {number} height
                 * @memberof com.opensource.svga.Layout
                 * @instance
                 */
                Layout.prototype.height = 0;

                /**
                 * Decodes a Layout message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.Layout
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.Layout} Layout
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Layout.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.Layout(), v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.x = v;
                                else
                                    delete m.x;
                                continue;
                            }
                        case 2: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.y = v;
                                else
                                    delete m.y;
                                continue;
                            }
                        case 3: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.width = v;
                                else
                                    delete m.width;
                                continue;
                            }
                        case 4: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.height = v;
                                else
                                    delete m.height;
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for Layout
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.Layout
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Layout.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.Layout";
                };

                return Layout;
            })();

            svga.Transform = (function() {

                /**
                 * Properties of a Transform.
                 * @memberof com.opensource.svga
                 * @interface ITransform
                 * @property {number|null} [a] Transform a
                 * @property {number|null} [b] Transform b
                 * @property {number|null} [c] Transform c
                 * @property {number|null} [d] Transform d
                 * @property {number|null} [tx] Transform tx
                 * @property {number|null} [ty] Transform ty
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new Transform.
                 * @memberof com.opensource.svga
                 * @classdesc Represents a Transform.
                 * @implements ITransform
                 * @constructor
                 * @param {com.opensource.svga.ITransform=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function Transform(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * Transform a.
                 * @member {number} a
                 * @memberof com.opensource.svga.Transform
                 * @instance
                 */
                Transform.prototype.a = 0;

                /**
                 * Transform b.
                 * @member {number} b
                 * @memberof com.opensource.svga.Transform
                 * @instance
                 */
                Transform.prototype.b = 0;

                /**
                 * Transform c.
                 * @member {number} c
                 * @memberof com.opensource.svga.Transform
                 * @instance
                 */
                Transform.prototype.c = 0;

                /**
                 * Transform d.
                 * @member {number} d
                 * @memberof com.opensource.svga.Transform
                 * @instance
                 */
                Transform.prototype.d = 0;

                /**
                 * Transform tx.
                 * @member {number} tx
                 * @memberof com.opensource.svga.Transform
                 * @instance
                 */
                Transform.prototype.tx = 0;

                /**
                 * Transform ty.
                 * @member {number} ty
                 * @memberof com.opensource.svga.Transform
                 * @instance
                 */
                Transform.prototype.ty = 0;

                /**
                 * Decodes a Transform message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.Transform
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.Transform} Transform
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Transform.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.Transform(), v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.a = v;
                                else
                                    delete m.a;
                                continue;
                            }
                        case 2: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.b = v;
                                else
                                    delete m.b;
                                continue;
                            }
                        case 3: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.c = v;
                                else
                                    delete m.c;
                                continue;
                            }
                        case 4: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.d = v;
                                else
                                    delete m.d;
                                continue;
                            }
                        case 5: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.tx = v;
                                else
                                    delete m.tx;
                                continue;
                            }
                        case 6: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.ty = v;
                                else
                                    delete m.ty;
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for Transform
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.Transform
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Transform.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.Transform";
                };

                return Transform;
            })();

            svga.ShapeEntity = (function() {

                /**
                 * Properties of a ShapeEntity.
                 * @memberof com.opensource.svga
                 * @interface IShapeEntity
                 * @property {com.opensource.svga.ShapeEntity.ShapeType|null} [type] ShapeEntity type
                 * @property {com.opensource.svga.ShapeEntity.IShapeArgs|null} [shape] ShapeEntity shape
                 * @property {com.opensource.svga.ShapeEntity.IRectArgs|null} [rect] ShapeEntity rect
                 * @property {com.opensource.svga.ShapeEntity.IEllipseArgs|null} [ellipse] ShapeEntity ellipse
                 * @property {com.opensource.svga.ShapeEntity.IShapeStyle|null} [styles] ShapeEntity styles
                 * @property {com.opensource.svga.ITransform|null} [transform] ShapeEntity transform
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new ShapeEntity.
                 * @memberof com.opensource.svga
                 * @classdesc Represents a ShapeEntity.
                 * @implements IShapeEntity
                 * @constructor
                 * @param {com.opensource.svga.IShapeEntity=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function ShapeEntity(p) {
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * ShapeEntity type.
                 * @member {com.opensource.svga.ShapeEntity.ShapeType} type
                 * @memberof com.opensource.svga.ShapeEntity
                 * @instance
                 */
                ShapeEntity.prototype.type = 0;

                /**
                 * ShapeEntity shape.
                 * @member {com.opensource.svga.ShapeEntity.IShapeArgs|null|undefined} shape
                 * @memberof com.opensource.svga.ShapeEntity
                 * @instance
                 */
                ShapeEntity.prototype.shape = null;

                /**
                 * ShapeEntity rect.
                 * @member {com.opensource.svga.ShapeEntity.IRectArgs|null|undefined} rect
                 * @memberof com.opensource.svga.ShapeEntity
                 * @instance
                 */
                ShapeEntity.prototype.rect = null;

                /**
                 * ShapeEntity ellipse.
                 * @member {com.opensource.svga.ShapeEntity.IEllipseArgs|null|undefined} ellipse
                 * @memberof com.opensource.svga.ShapeEntity
                 * @instance
                 */
                ShapeEntity.prototype.ellipse = null;

                /**
                 * ShapeEntity styles.
                 * @member {com.opensource.svga.ShapeEntity.IShapeStyle|null|undefined} styles
                 * @memberof com.opensource.svga.ShapeEntity
                 * @instance
                 */
                ShapeEntity.prototype.styles = null;

                /**
                 * ShapeEntity transform.
                 * @member {com.opensource.svga.ITransform|null|undefined} transform
                 * @memberof com.opensource.svga.ShapeEntity
                 * @instance
                 */
                ShapeEntity.prototype.transform = null;

                // OneOf field names bound to virtual getters and setters
                let $oneOfFields;

                /**
                 * ShapeEntity args.
                 * @member {"shape"|"rect"|"ellipse"|undefined} args
                 * @memberof com.opensource.svga.ShapeEntity
                 * @instance
                 */
                Object.defineProperty(ShapeEntity.prototype, "args", {
                    get: $util.oneOfGetter($oneOfFields = ["shape", "rect", "ellipse"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Decodes a ShapeEntity message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.ShapeEntity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.ShapeEntity} ShapeEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ShapeEntity.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.ShapeEntity(), v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 0)
                                    break;
                                if (v = r.int32())
                                    m.type = v;
                                else
                                    delete m.type;
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.shape = $root.com.opensource.svga.ShapeEntity.ShapeArgs.decode(r, r.uint32(), undefined, q + 1, m.shape);
                                m.args = "shape";
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.rect = $root.com.opensource.svga.ShapeEntity.RectArgs.decode(r, r.uint32(), undefined, q + 1, m.rect);
                                m.args = "rect";
                                continue;
                            }
                        case 4: {
                                if (u !== 2)
                                    break;
                                m.ellipse = $root.com.opensource.svga.ShapeEntity.EllipseArgs.decode(r, r.uint32(), undefined, q + 1, m.ellipse);
                                m.args = "ellipse";
                                continue;
                            }
                        case 10: {
                                if (u !== 2)
                                    break;
                                m.styles = $root.com.opensource.svga.ShapeEntity.ShapeStyle.decode(r, r.uint32(), undefined, q + 1, m.styles);
                                continue;
                            }
                        case 11: {
                                if (u !== 2)
                                    break;
                                m.transform = $root.com.opensource.svga.Transform.decode(r, r.uint32(), undefined, q + 1, m.transform);
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for ShapeEntity
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.ShapeEntity
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ShapeEntity.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.ShapeEntity";
                };

                /**
                 * ShapeType enum.
                 * @name com.opensource.svga.ShapeEntity.ShapeType
                 * @enum {number}
                 * @property {number} SHAPE=0 SHAPE value
                 * @property {number} RECT=1 RECT value
                 * @property {number} ELLIPSE=2 ELLIPSE value
                 * @property {number} KEEP=3 KEEP value
                 */
                ShapeEntity.ShapeType = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SHAPE"] = 0;
                    values[valuesById[1] = "RECT"] = 1;
                    values[valuesById[2] = "ELLIPSE"] = 2;
                    values[valuesById[3] = "KEEP"] = 3;
                    return values;
                })();

                ShapeEntity.ShapeArgs = (function() {

                    /**
                     * Properties of a ShapeArgs.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @interface IShapeArgs
                     * @property {string|null} [d] ShapeArgs d
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */

                    /**
                     * Constructs a new ShapeArgs.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @classdesc Represents a ShapeArgs.
                     * @implements IShapeArgs
                     * @constructor
                     * @param {com.opensource.svga.ShapeEntity.IShapeArgs=} [p] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */
                    function ShapeArgs(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * ShapeArgs d.
                     * @member {string} d
                     * @memberof com.opensource.svga.ShapeEntity.ShapeArgs
                     * @instance
                     */
                    ShapeArgs.prototype.d = "";

                    /**
                     * Decodes a ShapeArgs message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.opensource.svga.ShapeEntity.ShapeArgs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.opensource.svga.ShapeEntity.ShapeArgs} ShapeArgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ShapeArgs.decode = function decode(r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw Error("max depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.ShapeEntity.ShapeArgs(), v;
                        while (r.pos < c) {
                            var s = r.pos;
                            var t = r.tag();
                            if (t === z) {
                                z = undefined;
                                break;
                            }
                            var u = t & 7;
                            switch (t >>>= 3) {
                            case 1: {
                                    if (u !== 2)
                                        break;
                                    if ((v = r.string()).length)
                                        m.d = v;
                                    else
                                        delete m.d;
                                    continue;
                                }
                            }
                            r.skipType(u, q, t);
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        if (z !== undefined)
                            throw Error("missing end group");
                        return m;
                    };

                    /**
                     * Gets the type url for ShapeArgs
                     * @function getTypeUrl
                     * @memberof com.opensource.svga.ShapeEntity.ShapeArgs
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ShapeArgs.getTypeUrl = function getTypeUrl(prefix) {
                        if (prefix === undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.opensource.svga.ShapeEntity.ShapeArgs";
                    };

                    return ShapeArgs;
                })();

                ShapeEntity.RectArgs = (function() {

                    /**
                     * Properties of a RectArgs.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @interface IRectArgs
                     * @property {number|null} [x] RectArgs x
                     * @property {number|null} [y] RectArgs y
                     * @property {number|null} [width] RectArgs width
                     * @property {number|null} [height] RectArgs height
                     * @property {number|null} [cornerRadius] RectArgs cornerRadius
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */

                    /**
                     * Constructs a new RectArgs.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @classdesc Represents a RectArgs.
                     * @implements IRectArgs
                     * @constructor
                     * @param {com.opensource.svga.ShapeEntity.IRectArgs=} [p] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */
                    function RectArgs(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * RectArgs x.
                     * @member {number} x
                     * @memberof com.opensource.svga.ShapeEntity.RectArgs
                     * @instance
                     */
                    RectArgs.prototype.x = 0;

                    /**
                     * RectArgs y.
                     * @member {number} y
                     * @memberof com.opensource.svga.ShapeEntity.RectArgs
                     * @instance
                     */
                    RectArgs.prototype.y = 0;

                    /**
                     * RectArgs width.
                     * @member {number} width
                     * @memberof com.opensource.svga.ShapeEntity.RectArgs
                     * @instance
                     */
                    RectArgs.prototype.width = 0;

                    /**
                     * RectArgs height.
                     * @member {number} height
                     * @memberof com.opensource.svga.ShapeEntity.RectArgs
                     * @instance
                     */
                    RectArgs.prototype.height = 0;

                    /**
                     * RectArgs cornerRadius.
                     * @member {number} cornerRadius
                     * @memberof com.opensource.svga.ShapeEntity.RectArgs
                     * @instance
                     */
                    RectArgs.prototype.cornerRadius = 0;

                    /**
                     * Decodes a RectArgs message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.opensource.svga.ShapeEntity.RectArgs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.opensource.svga.ShapeEntity.RectArgs} RectArgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RectArgs.decode = function decode(r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw Error("max depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.ShapeEntity.RectArgs(), v;
                        while (r.pos < c) {
                            var s = r.pos;
                            var t = r.tag();
                            if (t === z) {
                                z = undefined;
                                break;
                            }
                            var u = t & 7;
                            switch (t >>>= 3) {
                            case 1: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.x = v;
                                    else
                                        delete m.x;
                                    continue;
                                }
                            case 2: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.y = v;
                                    else
                                        delete m.y;
                                    continue;
                                }
                            case 3: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.width = v;
                                    else
                                        delete m.width;
                                    continue;
                                }
                            case 4: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.height = v;
                                    else
                                        delete m.height;
                                    continue;
                                }
                            case 5: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.cornerRadius = v;
                                    else
                                        delete m.cornerRadius;
                                    continue;
                                }
                            }
                            r.skipType(u, q, t);
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        if (z !== undefined)
                            throw Error("missing end group");
                        return m;
                    };

                    /**
                     * Gets the type url for RectArgs
                     * @function getTypeUrl
                     * @memberof com.opensource.svga.ShapeEntity.RectArgs
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    RectArgs.getTypeUrl = function getTypeUrl(prefix) {
                        if (prefix === undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.opensource.svga.ShapeEntity.RectArgs";
                    };

                    return RectArgs;
                })();

                ShapeEntity.EllipseArgs = (function() {

                    /**
                     * Properties of an EllipseArgs.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @interface IEllipseArgs
                     * @property {number|null} [x] EllipseArgs x
                     * @property {number|null} [y] EllipseArgs y
                     * @property {number|null} [radiusX] EllipseArgs radiusX
                     * @property {number|null} [radiusY] EllipseArgs radiusY
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */

                    /**
                     * Constructs a new EllipseArgs.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @classdesc Represents an EllipseArgs.
                     * @implements IEllipseArgs
                     * @constructor
                     * @param {com.opensource.svga.ShapeEntity.IEllipseArgs=} [p] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */
                    function EllipseArgs(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * EllipseArgs x.
                     * @member {number} x
                     * @memberof com.opensource.svga.ShapeEntity.EllipseArgs
                     * @instance
                     */
                    EllipseArgs.prototype.x = 0;

                    /**
                     * EllipseArgs y.
                     * @member {number} y
                     * @memberof com.opensource.svga.ShapeEntity.EllipseArgs
                     * @instance
                     */
                    EllipseArgs.prototype.y = 0;

                    /**
                     * EllipseArgs radiusX.
                     * @member {number} radiusX
                     * @memberof com.opensource.svga.ShapeEntity.EllipseArgs
                     * @instance
                     */
                    EllipseArgs.prototype.radiusX = 0;

                    /**
                     * EllipseArgs radiusY.
                     * @member {number} radiusY
                     * @memberof com.opensource.svga.ShapeEntity.EllipseArgs
                     * @instance
                     */
                    EllipseArgs.prototype.radiusY = 0;

                    /**
                     * Decodes an EllipseArgs message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.opensource.svga.ShapeEntity.EllipseArgs
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.opensource.svga.ShapeEntity.EllipseArgs} EllipseArgs
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EllipseArgs.decode = function decode(r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw Error("max depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.ShapeEntity.EllipseArgs(), v;
                        while (r.pos < c) {
                            var s = r.pos;
                            var t = r.tag();
                            if (t === z) {
                                z = undefined;
                                break;
                            }
                            var u = t & 7;
                            switch (t >>>= 3) {
                            case 1: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.x = v;
                                    else
                                        delete m.x;
                                    continue;
                                }
                            case 2: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.y = v;
                                    else
                                        delete m.y;
                                    continue;
                                }
                            case 3: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.radiusX = v;
                                    else
                                        delete m.radiusX;
                                    continue;
                                }
                            case 4: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.radiusY = v;
                                    else
                                        delete m.radiusY;
                                    continue;
                                }
                            }
                            r.skipType(u, q, t);
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        if (z !== undefined)
                            throw Error("missing end group");
                        return m;
                    };

                    /**
                     * Gets the type url for EllipseArgs
                     * @function getTypeUrl
                     * @memberof com.opensource.svga.ShapeEntity.EllipseArgs
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    EllipseArgs.getTypeUrl = function getTypeUrl(prefix) {
                        if (prefix === undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.opensource.svga.ShapeEntity.EllipseArgs";
                    };

                    return EllipseArgs;
                })();

                ShapeEntity.ShapeStyle = (function() {

                    /**
                     * Properties of a ShapeStyle.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @interface IShapeStyle
                     * @property {com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null} [fill] ShapeStyle fill
                     * @property {com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null} [stroke] ShapeStyle stroke
                     * @property {number|null} [strokeWidth] ShapeStyle strokeWidth
                     * @property {com.opensource.svga.ShapeEntity.ShapeStyle.LineCap|null} [lineCap] ShapeStyle lineCap
                     * @property {com.opensource.svga.ShapeEntity.ShapeStyle.LineJoin|null} [lineJoin] ShapeStyle lineJoin
                     * @property {number|null} [miterLimit] ShapeStyle miterLimit
                     * @property {number|null} [lineDashI] ShapeStyle lineDashI
                     * @property {number|null} [lineDashII] ShapeStyle lineDashII
                     * @property {number|null} [lineDashIII] ShapeStyle lineDashIII
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */

                    /**
                     * Constructs a new ShapeStyle.
                     * @memberof com.opensource.svga.ShapeEntity
                     * @classdesc Represents a ShapeStyle.
                     * @implements IShapeStyle
                     * @constructor
                     * @param {com.opensource.svga.ShapeEntity.IShapeStyle=} [p] Properties to set
                     * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                     */
                    function ShapeStyle(p) {
                        if (p)
                            for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                if (p[ks[i]] != null && ks[i] !== "__proto__")
                                    this[ks[i]] = p[ks[i]];
                    }

                    /**
                     * ShapeStyle fill.
                     * @member {com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null|undefined} fill
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.fill = null;

                    /**
                     * ShapeStyle stroke.
                     * @member {com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor|null|undefined} stroke
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.stroke = null;

                    /**
                     * ShapeStyle strokeWidth.
                     * @member {number} strokeWidth
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.strokeWidth = 0;

                    /**
                     * ShapeStyle lineCap.
                     * @member {com.opensource.svga.ShapeEntity.ShapeStyle.LineCap} lineCap
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.lineCap = 0;

                    /**
                     * ShapeStyle lineJoin.
                     * @member {com.opensource.svga.ShapeEntity.ShapeStyle.LineJoin} lineJoin
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.lineJoin = 0;

                    /**
                     * ShapeStyle miterLimit.
                     * @member {number} miterLimit
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.miterLimit = 0;

                    /**
                     * ShapeStyle lineDashI.
                     * @member {number} lineDashI
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.lineDashI = 0;

                    /**
                     * ShapeStyle lineDashII.
                     * @member {number} lineDashII
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.lineDashII = 0;

                    /**
                     * ShapeStyle lineDashIII.
                     * @member {number} lineDashIII
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @instance
                     */
                    ShapeStyle.prototype.lineDashIII = 0;

                    /**
                     * Decodes a ShapeStyle message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                     * @param {number} [l] Message length if known beforehand
                     * @returns {com.opensource.svga.ShapeEntity.ShapeStyle} ShapeStyle
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ShapeStyle.decode = function decode(r, l, z, q, g) {
                        if (!(r instanceof $Reader))
                            r = $Reader.create(r);
                        if (q === undefined)
                            q = 0;
                        if (q > $Reader.recursionLimit)
                            throw Error("max depth exceeded");
                        var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.ShapeEntity.ShapeStyle(), v;
                        while (r.pos < c) {
                            var s = r.pos;
                            var t = r.tag();
                            if (t === z) {
                                z = undefined;
                                break;
                            }
                            var u = t & 7;
                            switch (t >>>= 3) {
                            case 1: {
                                    if (u !== 2)
                                        break;
                                    m.fill = $root.com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor.decode(r, r.uint32(), undefined, q + 1, m.fill);
                                    continue;
                                }
                            case 2: {
                                    if (u !== 2)
                                        break;
                                    m.stroke = $root.com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor.decode(r, r.uint32(), undefined, q + 1, m.stroke);
                                    continue;
                                }
                            case 3: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.strokeWidth = v;
                                    else
                                        delete m.strokeWidth;
                                    continue;
                                }
                            case 4: {
                                    if (u !== 0)
                                        break;
                                    if (v = r.int32())
                                        m.lineCap = v;
                                    else
                                        delete m.lineCap;
                                    continue;
                                }
                            case 5: {
                                    if (u !== 0)
                                        break;
                                    if (v = r.int32())
                                        m.lineJoin = v;
                                    else
                                        delete m.lineJoin;
                                    continue;
                                }
                            case 6: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.miterLimit = v;
                                    else
                                        delete m.miterLimit;
                                    continue;
                                }
                            case 7: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.lineDashI = v;
                                    else
                                        delete m.lineDashI;
                                    continue;
                                }
                            case 8: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.lineDashII = v;
                                    else
                                        delete m.lineDashII;
                                    continue;
                                }
                            case 9: {
                                    if (u !== 5)
                                        break;
                                    if ((v = r.float()) !== 0)
                                        m.lineDashIII = v;
                                    else
                                        delete m.lineDashIII;
                                    continue;
                                }
                            }
                            r.skipType(u, q, t);
                            $util.makeProp(m, "$unknowns", false);
                            (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                        }
                        if (z !== undefined)
                            throw Error("missing end group");
                        return m;
                    };

                    /**
                     * Gets the type url for ShapeStyle
                     * @function getTypeUrl
                     * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                     * @static
                     * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                     * @returns {string} The type url
                     */
                    ShapeStyle.getTypeUrl = function getTypeUrl(prefix) {
                        if (prefix === undefined)
                            prefix = "type.googleapis.com";
                        return prefix + "/com.opensource.svga.ShapeEntity.ShapeStyle";
                    };

                    ShapeStyle.RGBAColor = (function() {

                        /**
                         * Properties of a RGBAColor.
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                         * @interface IRGBAColor
                         * @property {number|null} [r] RGBAColor r
                         * @property {number|null} [g] RGBAColor g
                         * @property {number|null} [b] RGBAColor b
                         * @property {number|null} [a] RGBAColor a
                         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                         */

                        /**
                         * Constructs a new RGBAColor.
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle
                         * @classdesc Represents a RGBAColor.
                         * @implements IRGBAColor
                         * @constructor
                         * @param {com.opensource.svga.ShapeEntity.ShapeStyle.IRGBAColor=} [p] Properties to set
                         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                         */
                        function RGBAColor(p) {
                            if (p)
                                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                                    if (p[ks[i]] != null && ks[i] !== "__proto__")
                                        this[ks[i]] = p[ks[i]];
                        }

                        /**
                         * RGBAColor r.
                         * @member {number} r
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor
                         * @instance
                         */
                        RGBAColor.prototype.r = 0;

                        /**
                         * RGBAColor g.
                         * @member {number} g
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor
                         * @instance
                         */
                        RGBAColor.prototype.g = 0;

                        /**
                         * RGBAColor b.
                         * @member {number} b
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor
                         * @instance
                         */
                        RGBAColor.prototype.b = 0;

                        /**
                         * RGBAColor a.
                         * @member {number} a
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor
                         * @instance
                         */
                        RGBAColor.prototype.a = 0;

                        /**
                         * Decodes a RGBAColor message from the specified reader or buffer.
                         * @function decode
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                         * @param {number} [l] Message length if known beforehand
                         * @returns {com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor} RGBAColor
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        RGBAColor.decode = function decode(r, l, z, q, g) {
                            if (!(r instanceof $Reader))
                                r = $Reader.create(r);
                            if (q === undefined)
                                q = 0;
                            if (q > $Reader.recursionLimit)
                                throw Error("max depth exceeded");
                            var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor(), v;
                            while (r.pos < c) {
                                var s = r.pos;
                                var t = r.tag();
                                if (t === z) {
                                    z = undefined;
                                    break;
                                }
                                var u = t & 7;
                                switch (t >>>= 3) {
                                case 1: {
                                        if (u !== 5)
                                            break;
                                        if ((v = r.float()) !== 0)
                                            m.r = v;
                                        else
                                            delete m.r;
                                        continue;
                                    }
                                case 2: {
                                        if (u !== 5)
                                            break;
                                        if ((v = r.float()) !== 0)
                                            m.g = v;
                                        else
                                            delete m.g;
                                        continue;
                                    }
                                case 3: {
                                        if (u !== 5)
                                            break;
                                        if ((v = r.float()) !== 0)
                                            m.b = v;
                                        else
                                            delete m.b;
                                        continue;
                                    }
                                case 4: {
                                        if (u !== 5)
                                            break;
                                        if ((v = r.float()) !== 0)
                                            m.a = v;
                                        else
                                            delete m.a;
                                        continue;
                                    }
                                }
                                r.skipType(u, q, t);
                                $util.makeProp(m, "$unknowns", false);
                                (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                            }
                            if (z !== undefined)
                                throw Error("missing end group");
                            return m;
                        };

                        /**
                         * Gets the type url for RGBAColor
                         * @function getTypeUrl
                         * @memberof com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor
                         * @static
                         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                         * @returns {string} The type url
                         */
                        RGBAColor.getTypeUrl = function getTypeUrl(prefix) {
                            if (prefix === undefined)
                                prefix = "type.googleapis.com";
                            return prefix + "/com.opensource.svga.ShapeEntity.ShapeStyle.RGBAColor";
                        };

                        return RGBAColor;
                    })();

                    /**
                     * LineCap enum.
                     * @name com.opensource.svga.ShapeEntity.ShapeStyle.LineCap
                     * @enum {number}
                     * @property {number} LineCap_BUTT=0 LineCap_BUTT value
                     * @property {number} LineCap_ROUND=1 LineCap_ROUND value
                     * @property {number} LineCap_SQUARE=2 LineCap_SQUARE value
                     */
                    ShapeStyle.LineCap = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "LineCap_BUTT"] = 0;
                        values[valuesById[1] = "LineCap_ROUND"] = 1;
                        values[valuesById[2] = "LineCap_SQUARE"] = 2;
                        return values;
                    })();

                    /**
                     * LineJoin enum.
                     * @name com.opensource.svga.ShapeEntity.ShapeStyle.LineJoin
                     * @enum {number}
                     * @property {number} LineJoin_MITER=0 LineJoin_MITER value
                     * @property {number} LineJoin_ROUND=1 LineJoin_ROUND value
                     * @property {number} LineJoin_BEVEL=2 LineJoin_BEVEL value
                     */
                    ShapeStyle.LineJoin = (function() {
                        const valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "LineJoin_MITER"] = 0;
                        values[valuesById[1] = "LineJoin_ROUND"] = 1;
                        values[valuesById[2] = "LineJoin_BEVEL"] = 2;
                        return values;
                    })();

                    return ShapeStyle;
                })();

                return ShapeEntity;
            })();

            svga.FrameEntity = (function() {

                /**
                 * Properties of a FrameEntity.
                 * @memberof com.opensource.svga
                 * @interface IFrameEntity
                 * @property {number|null} [alpha] FrameEntity alpha
                 * @property {com.opensource.svga.ILayout|null} [layout] FrameEntity layout
                 * @property {com.opensource.svga.ITransform|null} [transform] FrameEntity transform
                 * @property {string|null} [clipPath] FrameEntity clipPath
                 * @property {Array.<com.opensource.svga.IShapeEntity>|null} [shapes] FrameEntity shapes
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new FrameEntity.
                 * @memberof com.opensource.svga
                 * @classdesc Represents a FrameEntity.
                 * @implements IFrameEntity
                 * @constructor
                 * @param {com.opensource.svga.IFrameEntity=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function FrameEntity(p) {
                    this.shapes = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * FrameEntity alpha.
                 * @member {number} alpha
                 * @memberof com.opensource.svga.FrameEntity
                 * @instance
                 */
                FrameEntity.prototype.alpha = 0;

                /**
                 * FrameEntity layout.
                 * @member {com.opensource.svga.ILayout|null|undefined} layout
                 * @memberof com.opensource.svga.FrameEntity
                 * @instance
                 */
                FrameEntity.prototype.layout = null;

                /**
                 * FrameEntity transform.
                 * @member {com.opensource.svga.ITransform|null|undefined} transform
                 * @memberof com.opensource.svga.FrameEntity
                 * @instance
                 */
                FrameEntity.prototype.transform = null;

                /**
                 * FrameEntity clipPath.
                 * @member {string} clipPath
                 * @memberof com.opensource.svga.FrameEntity
                 * @instance
                 */
                FrameEntity.prototype.clipPath = "";

                /**
                 * FrameEntity shapes.
                 * @member {Array.<com.opensource.svga.IShapeEntity>} shapes
                 * @memberof com.opensource.svga.FrameEntity
                 * @instance
                 */
                FrameEntity.prototype.shapes = $util.emptyArray;

                /**
                 * Decodes a FrameEntity message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.FrameEntity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.FrameEntity} FrameEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FrameEntity.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.FrameEntity(), v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 5)
                                    break;
                                if ((v = r.float()) !== 0)
                                    m.alpha = v;
                                else
                                    delete m.alpha;
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.layout = $root.com.opensource.svga.Layout.decode(r, r.uint32(), undefined, q + 1, m.layout);
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                m.transform = $root.com.opensource.svga.Transform.decode(r, r.uint32(), undefined, q + 1, m.transform);
                                continue;
                            }
                        case 4: {
                                if (u !== 2)
                                    break;
                                if ((v = r.string()).length)
                                    m.clipPath = v;
                                else
                                    delete m.clipPath;
                                continue;
                            }
                        case 5: {
                                if (u !== 2)
                                    break;
                                if (!(m.shapes && m.shapes.length))
                                    m.shapes = [];
                                m.shapes.push($root.com.opensource.svga.ShapeEntity.decode(r, r.uint32(), undefined, q + 1));
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for FrameEntity
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.FrameEntity
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                FrameEntity.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.FrameEntity";
                };

                return FrameEntity;
            })();

            svga.MovieEntity = (function() {

                /**
                 * Properties of a MovieEntity.
                 * @memberof com.opensource.svga
                 * @interface IMovieEntity
                 * @property {string|null} [version] MovieEntity version
                 * @property {com.opensource.svga.IMovieParams|null} [params] MovieEntity params
                 * @property {Object.<string,Uint8Array>|null} [images] MovieEntity images
                 * @property {Array.<com.opensource.svga.ISpriteEntity>|null} [sprites] MovieEntity sprites
                 * @property {Array.<com.opensource.svga.IAudioEntity>|null} [audios] MovieEntity audios
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */

                /**
                 * Constructs a new MovieEntity.
                 * @memberof com.opensource.svga
                 * @classdesc Represents a MovieEntity.
                 * @implements IMovieEntity
                 * @constructor
                 * @param {com.opensource.svga.IMovieEntity=} [p] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
                 */
                function MovieEntity(p) {
                    this.images = {};
                    this.sprites = [];
                    this.audios = [];
                    if (p)
                        for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                            if (p[ks[i]] != null && ks[i] !== "__proto__")
                                this[ks[i]] = p[ks[i]];
                }

                /**
                 * MovieEntity version.
                 * @member {string} version
                 * @memberof com.opensource.svga.MovieEntity
                 * @instance
                 */
                MovieEntity.prototype.version = "";

                /**
                 * MovieEntity params.
                 * @member {com.opensource.svga.IMovieParams|null|undefined} params
                 * @memberof com.opensource.svga.MovieEntity
                 * @instance
                 */
                MovieEntity.prototype.params = null;

                /**
                 * MovieEntity images.
                 * @member {Object.<string,Uint8Array>} images
                 * @memberof com.opensource.svga.MovieEntity
                 * @instance
                 */
                MovieEntity.prototype.images = $util.emptyObject;

                /**
                 * MovieEntity sprites.
                 * @member {Array.<com.opensource.svga.ISpriteEntity>} sprites
                 * @memberof com.opensource.svga.MovieEntity
                 * @instance
                 */
                MovieEntity.prototype.sprites = $util.emptyArray;

                /**
                 * MovieEntity audios.
                 * @member {Array.<com.opensource.svga.IAudioEntity>} audios
                 * @memberof com.opensource.svga.MovieEntity
                 * @instance
                 */
                MovieEntity.prototype.audios = $util.emptyArray;

                /**
                 * Decodes a MovieEntity message from the specified reader or buffer.
                 * @function decode
                 * @memberof com.opensource.svga.MovieEntity
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} r Reader or buffer to decode from
                 * @param {number} [l] Message length if known beforehand
                 * @returns {com.opensource.svga.MovieEntity} MovieEntity
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MovieEntity.decode = function decode(r, l, z, q, g) {
                    if (!(r instanceof $Reader))
                        r = $Reader.create(r);
                    if (q === undefined)
                        q = 0;
                    if (q > $Reader.recursionLimit)
                        throw Error("max depth exceeded");
                    var c = l === undefined ? r.len : r.pos + l, m = g || new $root.com.opensource.svga.MovieEntity(), k, v;
                    while (r.pos < c) {
                        var s = r.pos;
                        var t = r.tag();
                        if (t === z) {
                            z = undefined;
                            break;
                        }
                        var u = t & 7;
                        switch (t >>>= 3) {
                        case 1: {
                                if (u !== 2)
                                    break;
                                if ((v = r.string()).length)
                                    m.version = v;
                                else
                                    delete m.version;
                                continue;
                            }
                        case 2: {
                                if (u !== 2)
                                    break;
                                m.params = $root.com.opensource.svga.MovieParams.decode(r, r.uint32(), undefined, q + 1, m.params);
                                continue;
                            }
                        case 3: {
                                if (u !== 2)
                                    break;
                                if (m.images === $util.emptyObject)
                                    m.images = {};
                                var c2 = r.uint32() + r.pos;
                                k = "";
                                v = [];
                                while (r.pos < c2) {
                                    var t2 = r.tag();
                                    u = t2 & 7;
                                    switch (t2 >>>= 3) {
                                    case 1:
                                        if (u !== 2)
                                            break;
                                        k = r.string();
                                        continue;
                                    case 2:
                                        if (u !== 2)
                                            break;
                                        v = r.bytes();
                                        continue;
                                    }
                                    r.skipType(u, q, t2);
                                }
                                if (k === "__proto__")
                                    $util.makeProp(m.images, k);
                                m.images[k] = v;
                                continue;
                            }
                        case 4: {
                                if (u !== 2)
                                    break;
                                if (!(m.sprites && m.sprites.length))
                                    m.sprites = [];
                                m.sprites.push($root.com.opensource.svga.SpriteEntity.decode(r, r.uint32(), undefined, q + 1));
                                continue;
                            }
                        case 5: {
                                if (u !== 2)
                                    break;
                                if (!(m.audios && m.audios.length))
                                    m.audios = [];
                                m.audios.push($root.com.opensource.svga.AudioEntity.decode(r, r.uint32(), undefined, q + 1));
                                continue;
                            }
                        }
                        r.skipType(u, q, t);
                        $util.makeProp(m, "$unknowns", false);
                        (m.$unknowns || (m.$unknowns = [])).push(r.raw(s, r.pos));
                    }
                    if (z !== undefined)
                        throw Error("missing end group");
                    return m;
                };

                /**
                 * Gets the type url for MovieEntity
                 * @function getTypeUrl
                 * @memberof com.opensource.svga.MovieEntity
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                MovieEntity.getTypeUrl = function getTypeUrl(prefix) {
                    if (prefix === undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/com.opensource.svga.MovieEntity";
                };

                return MovieEntity;
            })();

            return svga;
        })();

        return opensource;
    })();

    return com;
})();

export {
  $root as default
};
