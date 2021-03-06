'use strict';

const modules = {
    _linklist: {
        "[READ]": { since: "5.0.0", replacedBy: null },
    },
    assert: {
        deepEqual: {
            "[READ]": {
                since: "10.0.0",
                replacedBy:
                    "'assert.deepStrictEqual' or 'assert.strict.deepEqual'",
            },
        },
        equal: {
            "[READ]": {
                since: "10.0.0",
                replacedBy: "'assert.strictEqual' or 'assert.strict.equal'",
            },
        },
        notDeepEqual: {
            "[READ]": {
                since: "10.0.0",
                replacedBy:
                    "'assert.notDeepStrictEqual' or 'assert.strict.notDeepEqual'",
            },
        },
        notEqual: {
            "[READ]": {
                since: "10.0.0",
                replacedBy:
                    "'assert.notStrictEqual' or 'assert.strict.notEqual'",
            },
        },
    },
    //eslint-disable-next-line camelcase
    async_hooks: {
        currentId: {
            "[READ]": {
                since: "8.2.0",
                replacedBy: "'async_hooks.executionAsyncId()'",
            },
        },
        triggerId: {
            "[READ]": {
                since: "8.2.0",
                replacedBy: "'async_hooks.triggerAsyncId()'",
            },
        },
    },
    buffer: {
        Buffer: {
            "[CONSTRUCT]": {
                since: "6.0.0",
                replacedBy: "'buffer.Buffer.alloc()' or 'buffer.Buffer.from()'",
            },
            "[CALL]": {
                since: "6.0.0",
                replacedBy: "'buffer.Buffer.alloc()' or 'buffer.Buffer.from()'",
            },
        },
        SlowBuffer: {
            "[READ]": {
                since: "6.0.0",
                replacedBy: "'buffer.Buffer.allocUnsafeSlow()'",
            },
        },
    },
    constants: {
        "[READ]": {
            since: "6.3.0",
            replacedBy: "'constants' property of each module",
        },
    },
    crypto: {
        _toBuf: {
            "[READ]": { since: "11.0.0", replacedBy: null },
        },
        Credentials: {
            "[READ]": { since: "0.12.0", replacedBy: "'tls.SecureContext'" },
        },
        DEFAULT_ENCODING: {
            "[READ]": { since: "10.0.0", replacedBy: null },
        },
        createCipher: {
            "[READ]": {
                since: "10.0.0",
                replacedBy: "'crypto.createCipheriv()'",
            },
        },
        createCredentials: {
            "[READ]": {
                since: "0.12.0",
                replacedBy: "'tls.createSecureContext()'",
            },
        },
        createDecipher: {
            "[READ]": {
                since: "10.0.0",
                replacedBy: "'crypto.createDecipheriv()'",
            },
        },
        fips: {
            "[READ]": {
                since: "10.0.0",
                replacedBy: "'crypto.getFips()' and 'crypto.setFips()'",
            },
        },
        prng: {
            "[READ]": { since: "11.0.0", replacedBy: "'crypto.randomBytes()'" },
        },
        pseudoRandomBytes: {
            "[READ]": { since: "11.0.0", replacedBy: "'crypto.randomBytes()'" },
        },
        rng: {
            "[READ]": { since: "11.0.0", replacedBy: "'crypto.randomBytes()'" },
        },
    },
    domain: {
        "[READ]": { since: "4.0.0", replacedBy: null },
    },
    events: {
        EventEmitter: {
            listenerCount: {
                "[READ]": {
                    since: "4.0.0",
                    replacedBy: "'events.EventEmitter#listenerCount()'",
                },
            },
        },
        listenerCount: {
            "[READ]": {
                since: "4.0.0",
                replacedBy: "'events.EventEmitter#listenerCount()'",
            },
        },
    },
    freelist: {
        "[READ]": { since: "4.0.0", replacedBy: null },
    },
    fs: {
        SyncWriteStream: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        exists: {
            "[READ]": {
                since: "4.0.0",
                replacedBy: "'fs.stat()' or 'fs.access()'",
            },
        },
        lchmod: {
            "[READ]": { since: "0.4.0", replacedBy: null },
        },
        lchmodSync: {
            "[READ]": { since: "0.4.0", replacedBy: null },
        },
        lchown: {
            "[READ]": { since: "0.4.0", replacedBy: null },
        },
        lchownSync: {
            "[READ]": { since: "0.4.0", replacedBy: null },
        },
    },
    http: {
        createClient: {
            "[READ]": { since: "0.10.0", replacedBy: "'http.request()'" },
        },
    },
    module: {
        Module: {
            requireRepl: {
                "[READ]": { since: "6.0.0", replacedBy: "'require(\"repl\")'" },
            },
            _debug: {
                "[READ]": { since: "9.0.0", replacedBy: null },
            },
        },
        requireRepl: {
            "[READ]": { since: "6.0.0", replacedBy: "'require(\"repl\")'" },
        },
        _debug: {
            "[READ]": { since: "9.0.0", replacedBy: null },
        },
    },
    os: {
        getNetworkInterfaces: {
            "[READ]": { since: "0.6.0", replacedBy: "'os.networkInterfaces()'" },
        },
        tmpDir: {
            "[READ]": { since: "7.0.0", replacedBy: "'os.tmpdir()'" },
        },
    },
    path: {
        _makeLong: {
            "[READ]": { since: "9.0.0", replacedBy: "'path.toNamespacedPath()'" },
        },
    },
    process: {
        EventEmitter: {
            "[READ]": { since: "0.6.0", replacedBy: "'require(\"events\")'" },
        },
        assert: {
            "[READ]": { since: "10.0.0", replacedBy: "'require(\"assert\")'" },
        },
        binding: {
            "[READ]": { since: "10.9.0", replacedBy: null },
        },
        env: {
            NODE_REPL_HISTORY_FILE: {
                "[READ]": { since: "4.0.0", replacedBy: "'NODE_REPL_HISTORY'" },
            },
        },
    },
    punycode: {
        "[READ]": {
            since: "7.0.0",
            replacedBy: "'https://www.npmjs.com/package/punycode'",
        },
    },
    readline: {
        codePointAt: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        getStringWidth: {
            "[READ]": { since: "6.0.0", replacedBy: null },
        },
        isFullWidthCodePoint: {
            "[READ]": { since: "6.0.0", replacedBy: null },
        },
        stripVTControlCharacters: {
            "[READ]": { since: "6.0.0", replacedBy: null },
        },
    },
    // safe-buffer.Buffer function/constructror is just a re-export of buffer.Buffer
    // and should be deprecated likewise.
    "safe-buffer": {
        Buffer: {
            "[CONSTRUCT]": {
                since: "6.0.0",
                replacedBy: "'buffer.Buffer.alloc()' or 'buffer.Buffer.from()'",
            },
            "[CALL]": {
                since: "6.0.0",
                replacedBy: "'buffer.Buffer.alloc()' or 'buffer.Buffer.from()'",
            },
        },
        SlowBuffer: {
            "[READ]": {
                since: "6.0.0",
                replacedBy: "'buffer.Buffer.allocUnsafeSlow()'",
            },
        },
    },
    sys: {
        "[READ]": { since: "0.3.0", replacedBy: "'util' module" },
    },
    timers: {
        enroll: {
            "[READ]": {
                since: "10.0.0",
                replacedBy: "'setTimeout()' or 'setInterval()'",
            },
        },
        unenroll: {
            "[READ]": {
                since: "10.0.0",
                replacedBy: "'clearTimeout()' or 'clearInterval()'",
            },
        },
    },
    tls: {
        CleartextStream: {
            "[READ]": { since: "0.10.0", replacedBy: null },
        },
        CryptoStream: {
            "[READ]": { since: "0.12.0", replacedBy: "'tls.TLSSocket'" },
        },
        SecurePair: {
            "[READ]": { since: "6.0.0", replacedBy: "'tls.TLSSocket'" },
        },
        convertNPNProtocols: {
            "[READ]": { since: "10.0.0", replacedBy: null },
        },
        createSecurePair: {
            "[READ]": { since: "6.0.0", replacedBy: "'tls.TLSSocket'" },
        },
        parseCertString: {
            "[READ]": { since: "8.6.0", replacedBy: "'querystring.parse()'" },
        },
    },
    tty: {
        setRawMode: {
            "[READ]": {
                since: "0.10.0",
                replacedBy:
                    "'tty.ReadStream#setRawMode()' (e.g. 'process.stdin.setRawMode()')",
            },
        },
    },
    url: {
        parse: {
            "[READ]": { since: "11.0.0", replacedBy: "'url.URL' constructor" },
        },
        resolve: {
            "[READ]": { since: "11.0.0", replacedBy: "'url.URL' constructor" },
        },
    },
    util: {
        debug: {
            "[READ]": { since: "0.12.0", replacedBy: "'console.error()'" },
        },
        error: {
            "[READ]": { since: "0.12.0", replacedBy: "'console.error()'" },
        },
        isArray: {
            "[READ]": { since: "4.0.0", replacedBy: "'Array.isArray()'" },
        },
        isBoolean: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isBuffer: {
            "[READ]": { since: "4.0.0", replacedBy: "'Buffer.isBuffer()'" },
        },
        isDate: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isError: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isFunction: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isNull: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isNullOrUndefined: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isNumber: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isObject: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isPrimitive: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isRegExp: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isString: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isSymbol: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        isUndefined: {
            "[READ]": { since: "4.0.0", replacedBy: null },
        },
        log: {
            "[READ]": { since: "6.0.0", replacedBy: "a third party module" },
        },
        print: {
            "[READ]": { since: "0.12.0", replacedBy: "'console.log()'" },
        },
        pump: {
            "[READ]": { since: "0.10.0", replacedBy: "'stream.Readable#pipe()'" },
        },
        puts: {
            "[READ]": { since: "0.12.0", replacedBy: "'console.log()'" },
        },
        _extend: {
            "[READ]": { since: "6.0.0", replacedBy: "'Object.assign()'" },
        },
    },
    vm: {
        runInDebugContext: {
            "[READ]": { since: "8.0.0", replacedBy: null },
        },
    },
}
const globals = {
    Buffer: {
        "[CONSTRUCT]": {
            since: "6.0.0",
            replacedBy: "'Buffer.alloc()' or 'Buffer.from()'",
        },
        "[CALL]": {
            since: "6.0.0",
            replacedBy: "'Buffer.alloc()' or 'Buffer.from()'",
        },
    },
    COUNTER_NET_SERVER_CONNECTION: {
        "[READ]": { since: "11.0.0", replacedBy: null },
    },
    COUNTER_NET_SERVER_CONNECTION_CLOSE: {
        "[READ]": { since: "11.0.0", replacedBy: null },
    },
    COUNTER_HTTP_SERVER_REQUEST: {
        "[READ]": { since: "11.0.0", replacedBy: null },
    },
    COUNTER_HTTP_SERVER_RESPONSE: {
        "[READ]": { since: "11.0.0", replacedBy: null },
    },
    COUNTER_HTTP_CLIENT_REQUEST: {
        "[READ]": { since: "11.0.0", replacedBy: null },
    },
    COUNTER_HTTP_CLIENT_RESPONSE: {
        "[READ]": { since: "11.0.0", replacedBy: null },
    },
    GLOBAL: {
        "[READ]": { since: "6.0.0", replacedBy: "'global'" },
    },
    Intl: {
        v8BreakIterator: {
            "[READ]": { since: "7.0.0", replacedBy: null },
        },
    },
    require: {
        extensions: {
            "[READ]": {
                since: "0.12.0",
                replacedBy: "compiling them ahead of time",
            },
        },
    },
    root: {
        "[READ]": { since: "6.0.0", replacedBy: "'global'" },
    },
    process: modules.process,
}

module.exports = {
  modules,
  globals
};
