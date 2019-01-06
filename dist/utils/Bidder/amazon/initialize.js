"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _default = function _default() {
  /*! amazon-dtb-javascript-api - apstag - v7.20.00 - 2018-11-08 20:28:00 */
  !function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 14);
  }([function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    };
    t.shouldSample = function (e) {
      try {
        var t = parseInt(e, 10);

        if (!isNaN(t)) {
          if (t <= 0) return !1;
          if (t >= 100) return !0;
          if (100 * Math.random() <= t) return !0;
        }

        return !1;
      } catch (e) {
        return !1;
      }
    }, t.getRandomArrayElement = function (e) {
      return i(e)[0];
    }, t.shuffleArray = i, t.getRand = function () {
      return "" + Math.round(1e12 * Math.random()) + Date.now();
    }, t.isObject = a, t.isArray = s, t.safeObjectHasProp = c, t.hasLocalStorage = d, t.checkAllPossibleBidCacheIds = function (e, t, r) {
      return e.amzniid === t || e[r + "amzniid"] === t || e.amzniid_sp === t;
    }, t.inArray = u, t.isDebugEnabled = function (e) {
      return u(l(), e);
    }, t.setDebugMode = function (e, t) {
      if (!d()) return !1;
      var r = l();
      return t && -1 === r.indexOf(e) ? r.push(e) : t || (r = r.filter(function (t) {
        return t !== e;
      })), 0 === r.length ? window.localStorage.removeItem(o.DEBUG_LOCAL_STORAGE_KEY) : window.localStorage.setItem(o.DEBUG_LOCAL_STORAGE_KEY, JSON.stringify(r)), !0;
    }, t.getDebugValue = function (e) {
      return "undefined" != typeof window && c(window, o.DEBUG_GLOBAL) && c(window[o.DEBUG_GLOBAL], e) ? window[o.DEBUG_GLOBAL][e] : "";
    };
    var o = r(1);

    function i(e) {
      var t = e.length,
          r = void 0,
          n = void 0;

      for (e = [].concat(function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = Array(e.length); t < e.length; t++) {
            r[t] = e[t];
          }

          return r;
        }

        return Array.from(e);
      }(e)); 0 !== t;) {
        n = Math.floor(Math.random() * t), r = e[--t], e[t] = e[n], e[n] = r;
      }

      return e;
    }

    function a(e) {
      return "object" === (void 0 === e ? "undefined" : n(e)) && null !== e;
    }

    function s(e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    }

    function c(e, t) {
      return a(e) && Object.prototype.hasOwnProperty.call(e, t) && void 0 !== e[t] && "" !== e[t];
    }

    function d() {
      var e = "amzn_lsTest";

      try {
        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
      } catch (e) {
        return !1;
      }
    }

    function u(e, t) {
      return -1 !== e.indexOf(t);
    }

    function l() {
      if (!d()) return [];
      var e = window.localStorage.getItem(o.DEBUG_LOCAL_STORAGE_KEY);
      null === e || "false" === e ? e = "[]" : "true" === e && (e = '["fake_bids"]');
      var t = void 0;

      try {
        t = JSON.parse(e);
      } catch (e) {}

      return s(t) || (t = []), t;
    }
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.DISPLAY_TARGETING_KEYS = ["amznbid", "amzniid", "amznsz", "amznp"], t.VIDEO_TARGETING_KEYS = ["amznbid", "amzniid", "amznp", "r_amznbid", "r_amzniid", "r_amznp"], t.BID_STATES = {
      new: "NEW",
      exposed: "EXPOSED",
      set: "SET",
      rendered: "RENDERED"
    }, t.DEBUG_LOCAL_STORAGE_KEY = "apstagDebug", t.DEBUG_CONSOLE_HEIGHT_KEY = "apstagDebugHeight", t.DEBUG_GLOBAL = "apstagDEBUG", t.CFG_LOCAL_STORAGE_KEY = "apstagCfg", t.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX = 0, t.MINIMUM_BID_TIMEOUT = 0, t.MOCKBID = {
      amznbid: "testBid",
      amzniid: "testImpression",
      amznp: "testP",
      crid: "testCrid"
    }, t.MEDIA_TYPES_MAGIC_STRING_FOR_AAX = {
      video: "v"
    }, t.SLOT_STATE_KEYS = ["amznbid", "amznp"], t.FIRST_PARTY_COOKIE_KEYS = {
      __apsid: {
        urlParam: "ck"
      },
      __aps_id_p: {
        urlParam: "ckp"
      },
      aps_ext_917: {
        urlParam: "st"
      }
    }, t.SLOT_STATES = {
      noRequest: "0",
      bidInFlight: "1",
      noBid: "2"
    }, t.AAX_RESP_REMAP_COOKIE_KEY = "cr", t.SELF_SERVE_PUB_SRC = "600", t.LIBRARY_VERSION = "7.20.00", t.PROTOCOL = function () {
      try {
        var e = window.document.location.protocol;
        if ("h" === e[0]) return e + "//";
      } catch (e) {}

      return "https://";
    }(), t.HAS_XHR_SUPPORT = "function" == typeof XMLHttpRequest && void 0 !== new XMLHttpRequest().withCredentials;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.store = void 0;

    var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];

        for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }

      return e;
    };

    t.reducer = u;
    var o = r(1),
        i = r(0);

    function a(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function s(e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) {
          r[t] = e[t];
        }

        return r;
      }

      return Array.from(e);
    }

    var c = void 0,
        d = [];

    function u() {
      var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
          t = arguments[1];
      return {
        AAXReqs: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "RECORD_AAX_REQUEST":
              return [].concat(s(e), [n({}, t.data)]);

            case "RECORD_AAX_RESPONSE_PROP":
              return e.map(function (e) {
                return (e = n({}, e)).bidReqID === t.bidReqID && (e[t.key] = t.value), e;
              });

            default:
              return [].concat(s(e));
          }
        }(e.AAXReqs, t),
        aaxViewabilityEnabled: function () {
          var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SET_VIEWABILITY":
              return t.viewability;

            default:
              return e;
          }
        }(e.aaxViewabilityEnabled, t),
        bidConfigs: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "RECORD_ORIGINAL_BID_CONFIG":
              return n({}, e, a({}, t.bidConfig.bidReqID, n({}, t.bidConfig)));

            default:
              return n({}, e);
          }
        }(e.bidConfigs, t),
        bidReqs: function () {
          var e,
              t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              r = arguments[1];

          switch (r.type) {
            case "ADD_CHUNKED_REQUESTS":
              return n({}, t, a({}, r.fid, n({}, t[r.fid], {
                networkReqs: new Array(r.numChunks)
              })));

            case "NEW_FETCH_BID_REQUEST":
              return n({}, t, a({}, r.fid, {
                pto: r.pto,
                hasCallbackExecuted: !1
              }));

            case "RECORD_CALLBACK":
              return n({}, t, a({}, r.fid, n({}, t[r.fid], {
                hasCallbackExecuted: !0
              })));

            case "RECORD_NETWORK_EXCHANGE":
              return n({}, t, a({}, r.fid, n({}, t[r.fid], {
                networkReqs: n([].concat(s(t[r.fid].networkReqs)), a({}, r.networkID, n({}, t[r.fid].networkReqs[r.networkID], (e = {}, a(e, r.exchangeType + "Time", r.timestamp), a(e, "inFlight", "request" === r.exchangeType), e))))
              })));

            case "RECORD_TIMEOUT":
              return n({}, t, a({}, r.fid, n({}, t[r.fid], {
                networkReqs: t[r.fid].networkReqs.map(function (e) {
                  return e.inFlight ? n({}, e, {
                    timeOut: r.timeOut
                  }) : e;
                })
              })));

            default:
              return n({}, t);
          }
        }(e.bidReqs, t),
        bsPixels: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "RECORD_BID_INFO_SENT":
              return n({}, e, a({}, t.bidInfo.iid, t.bidInfo.state));

            default:
              return n({}, e);
          }
        }(e.bsPixels, t),
        cfg: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            DEFAULT_AAX_HOST: (0, i.getDebugValue)("host") || "aax.amazon-adsystem.com",
            CSM_JS: "//c.amazon-adsystem.com/aax2/csm.js.gz",
            CSM_RTB_COMMUNICATOR_JS: "//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js",
            DEBUG_APP_HTML: "//c.amazon-adsystem.com/aax2/debugApp.html",
            DEFAULT_TIMEOUT: 2e3,
            DTB_PATH: "/e/dtb",
            PIXEL_PATH: "/x/px/",
            LATENCY_SAMPLING_RATE: 1,
            COOKIE_MATCH_DELAY: 0,
            MAX_SLOTS_PER_REQUEST: 1
          } : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SET_CFG":
              return n({}, e, t.cfg);

            default:
              return n({}, e);
          }
        }(e.cfg, t),
        cmpFired: function () {
          var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];

          switch (arguments[1].type) {
            case "CMP_FIRED":
              return !0;

            default:
              return e;
          }
        }(e.cmpFired, t),
        config: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SET_CONFIG":
              return n({}, t.config, {
                gdpr: n({
                  cmpTimeout: t.defaultCmpTimeout
                }, t.config.gdpr),
                isSelfServePub: t.config.pubID && t.config.pubID.length >= 5
              });

            default:
              return n({}, e);
          }
        }(e.config, t),
        displayAdServer: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {
            noBidSlotIDs: []
          } : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SLOT_RENDER_ENDED_SET":
              return n({}, e, {
                slotRenderEndedSet: !0
              });

            case "NO_BID_ON_ADSERVER_SLOTS":
              return n({}, e, {
                noBidSlotIDs: e.noBidSlotIDs.concat(t.slotIDs)
              });

            case "REQUESTED_BID_FOR_ADSERVER_SLOTS":
              return n({}, e, {
                noBidSlotIDs: e.noBidSlotIDs.filter(function (e) {
                  return !(0, i.inArray)(t.slotIDs, e);
                })
              });

            default:
              return n({}, e, {
                noBidSlotIDs: [].concat(s(e.noBidSlotIDs))
              });
          }
        }(e.displayAdServer, t),
        eventLog: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "LOG_EVENT":
              return [].concat(s(e), [n({}, t.event)]);

            default:
              return [].concat(s(e));
          }
        }(e.eventLog, t),
        experiments: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SHOULD_CHUNK_REQUESTS":
              return n({
                chunkRequests: !0 === e.shouldSampleLatency && t.value
              }, e);

            case "SHOULD_SAMPLE_LATENCY":
              return n({}, e, {
                shouldSampleLatency: t.value
              });

            default:
              return n({}, e);
          }
        }(e.experiments, t),
        gdpr: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SET_GDPR_CONFIG":
              return null === t.config ? null : n({}, t.config);

            default:
              return null === e ? e : n({}, e);
          }
        }(e.gdpr, t),
        gdprQue: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "ADD_GDPR_QUE_ITEM":
              return [].concat(s(e), [t.func]);

            case "CLEAR_GDPR_QUE":
              return [];

            default:
              return [].concat(s(e));
          }
        }(e.gdprQue, t),
        Q: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SET_Q":
              return [].concat(s(t.Q));

            default:
              return [].concat(s(e));
          }
        }(e.Q, t),
        slotBids: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "BID_STATE_CHANGE":
              return n({}, e, a({}, t.slotID, e[t.slotID].map(function (e) {
                var r = {};
                return (0, i.checkAllPossibleBidCacheIds)(e, t.bidID, t.dealId) && (r.bidState = t.bidState, t.bidState === o.BID_STATES.rendered ? r.renderTime = t.ts : t.bidState === o.BID_STATES.set && (r.setAtTimes = (0, i.safeObjectHasProp)(e, "setAtTimes") ? [].concat(s(e.setAtTimes), [t.ts]) : [t.ts])), n({}, e, r);
              })));

            case "UPDATE_BID_INFO_PROP":
              return void 0 === e[t.slotID] || e[t.slotID].filter(function (e) {
                return (0, i.checkAllPossibleBidCacheIds)(e, t.iid, t.dealId);
              }).length < 1 ? n({}, e) : n({}, e, a({}, t.slotID, e[t.slotID].map(function (e) {
                return e = n({}, e), (0, i.checkAllPossibleBidCacheIds)(e, t.iid, t.dealId) && (e[t.key] = t.value), e;
              })));

            case "UPDATE_SLOT_BIDS":
              return n({}, e, t.bids.reduce(function (t, r) {
                return (0, i.safeObjectHasProp)(t, r.slotID) ? t[r.slotID] = [].concat(s(t[r.slotID]), [n({}, r)]) : (0, i.safeObjectHasProp)(e, r.slotID) ? t[r.slotID] = [].concat(s(e[r.slotID]), [n({}, r)]) : t[r.slotID] = [n({}, r)], t;
              }, {}));

            default:
              return n({}, e);
          }
        }(e.slotBids, t),
        sync917: function () {
          var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "SET_SYNC_917":
              return t.value;

            default:
              return e;
          }
        }(e.sync917, t),
        targetingKeys: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "UPDATE_SLOT_BIDS":
              return n({}, e, t.bids.reduce(function (t, r) {
                return (0, i.safeObjectHasProp)(e, r.slotID) ? t[r.slotID] = [].concat(s(e[r.slotID]), s((r.targeting ? r.targeting : o.DISPLAY_TARGETING_KEYS).filter(function (t) {
                  return -1 === e[r.slotID].indexOf(t);
                }))) : t[r.slotID] = r.targeting ? r.targeting : o.DISPLAY_TARGETING_KEYS, t;
              }, {}));

            default:
              return n({}, e);
          }
        }(e.targetingKeys, t),
        tests: function () {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
              t = arguments[1];

          switch (t.type) {
            case "UPDATE_TEST":
              return n({}, e, a({}, t.id, {
                name: t.name,
                status: t.status,
                case: t.case
              }));

            default:
              return n({}, e);
          }
        }(e.tests, t)
      };
    }

    var l = {
      getState: function getState() {
        return c;
      },
      dispatch: function dispatch(e) {
        c = u(c, e), d.forEach(function (e) {
          return e();
        });
      },
      subscribe: function subscribe(e) {
        d.push(e);
      }
    };
    (0, i.isDebugEnabled)("redux") && (0, i.hasLocalStorage)() && (0, i.safeObjectHasProp)(window, "__REDUX_DEVTOOLS_EXTENSION__") && (t.store = l = window.__REDUX_DEVTOOLS_EXTENSION__(u)), l.dispatch({
      type: "NOOP"
    }), t.store = l;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.pixels = t.pixelQueue = void 0, t.noBidCacheIdPixel = function (e) {
      return u(d() + "p/PH/" + c(e));
    }, t.bidCacheIdPixel = function (e, t) {
      return u("" + d() + e + "/" + c(t));
    }, t.sendPixels = function () {
      a || (a = !0, i.forEach(u));
    }, t.resetSendPixels = function () {
      a = !1, t.pixels = s = [], t.pixelQueue = i = [];
    };
    var n = r(1),
        o = r(2),
        i = t.pixelQueue = [],
        a = !1,
        s = t.pixels = [];

    function c(e) {
      e._tl = "aps-tag";
      var t = JSON.stringify(e);
      return t = t.replace(/\\.{1}/g, ""), encodeURIComponent(t);
    }

    function d() {
      var e = o.store.getState().cfg,
          t = e.DEFAULT_AAX_HOST,
          r = e.PIXEL_PATH;
      return "" + n.PROTOCOL + t + r;
    }

    function u(e) {
      if (a) {
        var t = new Image();
        return t.src = e, s.push(t), t;
      }

      return i.push(e), e;
    }
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.reportError = p, t.wrapFunction = function (e, t) {
      return function () {
        try {
          return e.apply(null, arguments);
        } catch (e) {
          return p(e, t), null;
        }
      };
    }, t.consoleWarn = function (e) {
      (!(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1] || (0, n.isDebugEnabled)("errors")) && window[c][u](e);
    };
    var n = r(0),
        o = r(1),
        i = r(3),
        a = r(2),
        s = (0, n.shouldSample)(10),
        c = "console",
        d = "error",
        u = "warn",
        l = void 0,
        f = void 0;

    function p(e, t, r) {
      try {
        if ((r || (0, n.isDebugEnabled)("errors")) && window[c][d](e), !s) return !1;
        var u = {
          lv: o.LIBRARY_VERSION,
          ts: Date.now(),
          url: encodeURIComponent(window.document.documentURI),
          r: encodeURIComponent(window.document.referrer),
          _type: "apstagError",
          e: {
            et: e.name,
            el: t,
            msg: e.message
          }
        };

        if (void 0 === l) {
          var p = a.store.getState();
          void 0 !== p && void 0 !== p.config && (l = p.config.isSelfServePub, f = p.config.pubID);
        }

        return void 0 !== l && (l ? (u.src = o.SELF_SERVE_PUB_SRC, u.pubid = f) : u.src = f), (0, i.noBidCacheIdPixel)(u), !0;
      } catch (e) {}

      return !1;
    }
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.GDPR = t.cmpLocalStorageChanged = t.cmpResponseKey = void 0;

    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        o = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];

        for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }

      return e;
    },
        i = r(0),
        a = r(4);

    Number.isInteger = Number.isInteger || function (e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
    };

    var s = t.cmpResponseKey = "cmpRTimesA",
        c = t.cmpLocalStorageChanged = "crfgL0cSt0rC";

    t.GDPR = function (e, t) {
      e = o({}, e);
      var r = void 0,
          d = 50,
          u = [1, 1, 3, 5],
          l = 0,
          f = !1,
          p = "crfgL0cSt0r",
          g = !1,
          m = "cmp-timeout";

      try {
        var _ = function () {
          t = (0, a.wrapFunction)(t, "GdprCallback");

          var _ = function _(e) {
            try {
              if (!(0, i.hasLocalStorage)()) return;
              window.localStorage.setItem(c, "0"), !1 !== g && g.enabled === e.enabled && g.consent === e.consent || (window.localStorage.setItem(c, "2"), window.localStorage.setItem(p, JSON.stringify({
                enabled: e.enabled,
                consent: e.consent
              })), !1 !== g && (S.lsStatus = "cmp-override", window.localStorage.setItem(c, "1"))), window.document.cookie = p + "=true;max-age=604800";
            } catch (e) {
              return void (0, a.reportError)(e, "__gdpr_save__");
            }
          },
              b = function b(e) {
            try {
              e = o({}, e), Object.keys(e.log).map(function (t) {
                "string" == typeof e.log[t] && -1 !== e.log[t].indexOf("/") && (e.log[t] = encodeURIComponent(e.log[t]));
              }), e.log = JSON.stringify(e.log);
            } catch (e) {
              (0, a.reportError)(e, "__gdpr_stringify_log__");
            }

            t(e);
          };

          "object" === (void 0 === e ? "undefined" : n(e)) && null !== e || (e = {});
          var S = {
            cmpGlobal: e.cmpGlobal,
            cmpTimeout: e.cmpTimeout,
            enabled: e.enabled
          };
          !1 === e.enabled ? S.status = "explicit-no-gdpr" : !0 === e.enabled && (S.status = void 0 !== e.consent ? "explicit-consent-passed" : "explicit-no-consent-passed"), (0, i.hasLocalStorage)() && (g = function () {
            try {
              var e = window.localStorage.getItem(p);
              return null !== e && JSON.parse(e);
            } catch (e) {
              return (0, a.reportError)(e, "__gdpr_parse_ls__"), !1;
            }
          }()), !1 !== g && (void 0 === window.document.cookie || -1 === window.document.cookie.indexOf(p + "=true") ? (g = !1, S.lsStatus = "invalid") : (S.lsStatus = "present", d = 50, m = "cmp-timeout-cfb")), "string" != typeof e.cmpGlobal && (e.cmpGlobal = "__cmp"), Number.isInteger(e.cmpTimeout) || (e.cmpTimeout = d);
          var E,
              h,
              y = (h = {
            log: S
          }, void 0 === (E = e).enabled ? h : !1 === E.enabled ? (h.enabled = 0, h) : (Number.isInteger(E.enabled) ? h.enabled = E.enabled : h.enabled = 1, "string" == typeof E.consent && (h.consent = E.consent), h));
          if (void 0 !== y.enabled) return b(y), {
            v: void 0
          };
          !1 !== g && (y = o({}, g, y)), !1 === g || g.enabled === y.enabled && g.consent === y.consent || (S.lsStatus = "pub-override"), function e(t, n) {
            if (!(0, i.safeObjectHasProp)(window, t.cmpGlobal) || "function" != typeof window[t.cmpGlobal]) return n({
              error: "no-cmp"
            }), void (l < u.length && (setTimeout(e, 1e3 * u[l], t, n), l++));
            setTimeout(n, t.cmpTimeout, {
              timeout: !0
            }, !0), r = Date.now();

            try {
              window[t.cmpGlobal]("getConsentData", null, n);
            } catch (e) {
              n({
                error: "cmp-internal-error"
              }), (0, a.reportError)(e, "__gdpr_cmp__");
            }
          }(e, function (e, t, o) {
            if (!f || "object" !== (void 0 === t ? "undefined" : n(t)) || null === t || !t.timeout) {
              f = !0;

              try {
                return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t && void 0 !== t.error ? (S.status = t.error, void b(e)) : o && "object" === (void 0 === t ? "undefined" : n(t)) && null !== t ? t.timeout ? (S.status = m, void b(e)) : (function (e) {
                  if ((0, i.hasLocalStorage)()) try {
                    var t = window.localStorage.getItem(s);
                    (t = null !== t ? JSON.parse(t) : []).push(e), window.localStorage.setItem(s, JSON.stringify(t));
                  } catch (e) {
                    (0, a.reportError)(e, "__gdpr_save_time__");
                  }
                }(Date.now() - r), S.status = "success", t.gdprApplies ? (e.enabled = 1, e.consent = t.consentData, _(e), void b(e)) : (e.enabled = 0, delete e.consent, _(e), void b(e))) : (S.status = "cmp-error", void b(e));
              } catch (t) {
                return (0, a.reportError)(t, "__gdpr_cmp_callback__"), S.status = "func-error", void b(e);
              }
            }
          }.bind(null, y));
        }();

        if ("object" === (void 0 === _ ? "undefined" : n(_))) return _.v;
      } catch (e) {
        f || t({
          log: '{"status":"global-func-error"}'
        }), f = !0, (0, a.reportError)(e, "__gdpr_global_func__");
      }
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.xhrGet = function (e) {
      var t = e.url,
          r = e.onload,
          o = e.onerror,
          i = void 0 === o ? null : o,
          a = e.ontimeout,
          s = void 0 === a ? null : a,
          c = e.withCredentials,
          d = void 0 === c ? null : c;

      try {
        var u = new window.XMLHttpRequest();
        u.onload = r.bind(null, u), null !== i && (u.onerror = i), null !== s && (u.ontimeout = s), null !== d && (u.withCredentials = d), u.open("GET", t), u.send(null);
      } catch (e) {
        (0, n.reportError)(e, "__xhrGet__");
      }
    }, t.loadScriptTag = function (e, t) {
      var r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];

      try {
        if (null === r && (r = document), void 0 === e) return "function" == typeof t && t(!0), !1;
        var i = r.getElementsByTagName("script")[0] || r.body.firstChild,
            a = r.createElement("script");
        return a.type = "text/javascript", a.async = !0, a.src = e, t && o(a, t), i.parentNode.insertBefore(a, i), !0;
      } catch (e) {
        return (0, n.reportError)(e, "__loadScriptTag__"), !1;
      }
    }, t.addOnLoadFunction = o;
    var n = r(4);

    function o(e, t) {
      var r = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];

      try {
        return "function" == typeof t && (e.readyState ? (e.onreadystatechange = function () {
          -1 !== ["loaded", "complete"].indexOf(e.readyState) && (e.onreadystatechange = null, t.apply(null, r));
        }, !0) : (e.onload = function () {
          t.apply(null, r);
        }, !0));
      } catch (e) {
        return (0, n.reportError)(e, "__addOnLoadFunction__"), !1;
      }
    }
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.displayAdServerDefault = {
      isSupported: !1,
      cmdQueuePush: function cmdQueuePush() {},
      setToBeginningOfCmdQueue: function setToBeginningOfCmdQueue() {},
      setTargeting: function setTargeting() {},
      getTargeting: function getTargeting() {},
      clearTargeting: function clearTargeting() {},
      slotRenderEndedEvent: function slotRenderEndedEvent() {},
      hasAdServerObjectLoaded: function hasAdServerObjectLoaded() {},
      isCommandQueueDefined: function isCommandQueueDefined() {},
      getSlotElementId: function getSlotElementId() {},
      getSlots: function getSlots() {}
    };
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.displayAdServerGoogletag = void 0;
    var n = r(0),
        o = {
      isSupported: !0,
      cmdQueuePush: function cmdQueuePush(e) {
        googletag.cmd.push(e);
      },
      setTargeting: function setTargeting(e, t, r) {
        void 0 === r ? googletag.pubads().setTargeting(e, t) : r.setTargeting(e, t);
      },
      getTargeting: function getTargeting(e, t) {
        return void 0 === t ? googletag.pubads().getTargeting(e) : t.getTargeting(e);
      },
      clearTargeting: function clearTargeting(e, t) {
        void 0 === t ? googletag.pubads().clearTargeting(e) : t.clearTargeting(e);
      },
      slotRenderEndedEvent: function slotRenderEndedEvent(e) {
        googletag.pubads().addEventListener("slotRenderEnded", e);
      },
      hasAdServerObjectLoaded: function hasAdServerObjectLoaded() {
        return "undefined" != typeof googletag && (0, n.safeObjectHasProp)(googletag, "apiReady") && !0 === googletag.apiReady;
      },
      isCommandQueueDefined: function isCommandQueueDefined() {
        return "undefined" != typeof googletag && void 0 !== googletag.cmd;
      },
      getSlotElementId: function getSlotElementId(e) {
        return e.getSlotElementId();
      },
      getSlots: function getSlots() {
        return googletag.pubads().getSlots();
      }
    };
    t.displayAdServerGoogletag = o;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.displayAdServerAppNexus = void 0;
    var n = r(0),
        o = {
      isSupported: !0,
      cmdQueuePush: function cmdQueuePush(e) {
        window.apntag.anq.push(e);
      },
      setTargeting: function setTargeting(e, t, r) {
        void 0 === r ? window.apntag.requests.keywords[e] = t : r.keywords[e] = t;
      },
      getTargeting: function getTargeting(e, t) {
        var r;
        return void 0 === t ? ((0, n.safeObjectHasProp)(window.apntag.requests, "keywords") || (window.apntag.requests.keywords = {}), r = window.apntag.requests.keywords[e]) : ((0, n.safeObjectHasProp)(t, "keywords") || (t.keywords = {}), r = t.keywords[e]), void 0 === r ? [] : [r];
      },
      clearTargeting: function clearTargeting(e, t) {
        void 0 === t ? delete window.apntag.requests.keywords[e] : delete t.keywords[e];
      },
      slotRenderEndedEvent: function slotRenderEndedEvent(e) {
        window.apntag.onEvent("adLoaded", e);
      },
      hasAdServerObjectLoaded: function hasAdServerObjectLoaded() {
        return void 0 !== window.apntag && (0, n.safeObjectHasProp)(window.apntag, "loaded") && !0 === window.apntag.loaded;
      },
      isCommandQueueDefined: function isCommandQueueDefined() {
        return void 0 !== window.apntag && void 0 !== window.apntag.anq;
      },
      getSlotElementId: function getSlotElementId(e) {
        return e.targetId;
      },
      getSlots: function getSlots() {
        return Object.keys(window.apntag.requests.tags).map(function (e) {
          return window.apntag.requests.tags[e];
        });
      }
    };
    t.displayAdServerAppNexus = o;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.enableDebugConsole = function () {
      var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];

      if ((0, o.setDebugMode)("console", !0), 0 !== n.store.getState().eventLog.length || e) {
        if (null === c) {
          var t = {
            url: n.store.getState().cfg.DEBUG_APP_HTML,
            onload: f,
            onerror: console.error
          };
          (0, a.xhrGet)(t), setTimeout(function () {
            var t = {
              _type: "debugLoad",
              onstart: e ? 1 : 0
            },
                r = n.store.getState().config.pubID;
            void 0 !== r && (t.src = r), (0, s.noBidCacheIdPixel)(t);
          }, 5e3);
        }
      } else window.location.reload();
    }, t.disableDebugConsole = function () {
      (0, o.setDebugMode)("console", !1), null !== c && document.body.removeChild(c), c = null, d = null, u = null, (0, o.hasLocalStorage)() && window.localStorage.removeItem(i.DEBUG_CONSOLE_HEIGHT_KEY);
    };
    var n = r(2),
        o = r(0),
        i = r(1),
        a = r(6),
        s = r(3),
        c = null,
        d = null,
        u = null,
        l = null;

    function f(e) {
      var t = e.responseText;
      c = document.createElement("div"), d = document.createElement("div"), u = document.createElement("iframe");
      var r = 200;
      (0, o.hasLocalStorage)() && null !== window.localStorage.getItem(i.DEBUG_CONSOLE_HEIGHT_KEY) && (r = window.localStorage.getItem(i.DEBUG_CONSOLE_HEIGHT_KEY)), c.style = "background: #eaeded;z-index: 2147483647;bottom: 0;position: fixed !important;display: block !important;left: 0;right: 0;height: " + r + "px;", d.style = "cursor: row-resize;height: 2px;position: absolute;top: 0;left: 0;right: 0;background-color: RGBA(0,0,0,0);", c.appendChild(d), u.frameBorder = 0, u.marginHeight = 0, u.marginWidth = 0, u.topMargin = 0, u.leftMargin = 0, u.scrolling = "no", u.allowTransparency = !0, u.id = "apstag-debug-iframe", u.src = "about:blank", u.style = "display: block; width: 100%; height: " + r + "px;", c.appendChild(u), document.body.appendChild(c), u.contentDocument.open(), u.contentDocument.write(t), u.contentDocument.close(), d.addEventListener("mousedown", m);
    }

    function p(e) {
      var t = window.innerHeight - e.clientY;
      return t < 200 && (t = 200), c.style.height = t + "px", u.style.height = t + "px", t;
    }

    function g(e) {
      return e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault(), e.cancelBubble = !0, e.returnValue = !1, !1;
    }

    function m() {
      (l = document.createElement("div")).style = "position: fixed; left: 0; right: 0; top: 0; bottom: 0; z-index: 9999999999;", c.appendChild(l), window.addEventListener("mouseup", b), window.addEventListener("mousemove", _);
    }

    function _(e) {
      return p(e), g(e);
    }

    function b(e) {
      null !== l && (c.removeChild(l), l = null), window.removeEventListener("mousemove", _), window.removeEventListener("mouseup", b);
      var t = p(e);
      return (0, o.hasLocalStorage)() && window.localStorage.setItem(i.DEBUG_CONSOLE_HEIGHT_KEY, t), g(e);
    }
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    };
    t.getMetricFromPerformanceObject = i, t.getResourcePerformanceObject = function (e, t) {
      try {
        var r = e.performance.getEntriesByType("resource").filter(function (e) {
          return -1 !== e.name.indexOf(t);
        })[0];
        return void 0 === r ? null : r;
      } catch (e) {
        return null;
      }
    }, t.getWindowPerformanceMetric = function (e, t) {
      try {
        var r = e.performance.timing[t];
        return void 0 === r ? o : r;
      } catch (e) {
        return o;
      }
    }, t.isResourceCached = function (e) {
      try {
        var t = function () {
          if (0 === ["redirectStart", "redirectEnd", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "requestStart", "responseStart", "secureConnectionStart"].reduce(function (t, r) {
            return t + i(e, r);
          }, 0)) return {
            v: null
          };
          var t = i(e, "fetchStart");
          return {
            v: ["domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd"].reduce(function (r, n) {
              return r && i(e, n) === t;
            }, !0)
          };
        }();

        if ("object" === (void 0 === t ? "undefined" : n(t))) return t.v;
      } catch (e) {
        return null;
      }
    }, t.getTimeOrigin = function () {
      try {
        var e = window.performance.timeOrigin;
        return void 0 === e && (e = window.performance.timing.navigationStart), e;
      } catch (e) {
        return o;
      }
    };
    var o = 0;

    function i(e, t) {
      try {
        return "number" != typeof e[t] ? o : Math.round(e[t]);
      } catch (e) {
        return o;
      }
    }
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = function (e) {
      var t = this;
      this.testId = (0, o.getRand)(), e.sample = void 0 === e.sample ? 1 : e.sample, e.delay = void 0 === e.delay ? 5e3 : e.delay;

      var r = function r(_r) {
        a("pixeling"), _r._type = encodeURIComponent(e.name + "-tst"), Object.keys(e.cases).length > 1 && (_r._case = encodeURIComponent(t.runningCase)), (0, i.noBidCacheIdPixel)(_r), a("done");
      },
          a = function a(e) {
        t.status = e, n.store.dispatch({
          type: "UPDATE_TEST",
          id: t.testId,
          status: t.status,
          name: t.name,
          case: t.runningCase
        });
      };

      this.name = e.name, this.sampleRate = e.sample, this.runningCase = "", this.status = "", a("config"), a("waiting"), setTimeout(function () {
        "string" == typeof e.sample && (e.sample = n.store.getState().cfg[e.sample]), (0, o.shouldSample)(e.sample) ? (a("setup"), t.runningCase = (0, o.getRandomArrayElement)(Object.keys(e.cases)), a("running"), e.run(r, e.cases[t.runningCase])) : a("nosample");
      }, e.delay);
    };
    var n = r(2),
        o = r(0),
        i = r(3);
  }, function (e, t, r) {
    "use strict";

    var n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];

        for (var n in r) {
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
      }

      return e;
    },
        o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        i = r(12),
        a = E(i),
        s = r(5),
        c = r(2),
        d = r(0),
        u = r(1),
        l = r(11),
        f = r(3),
        p = r(4),
        g = r(10),
        m = r(6),
        _ = r(9),
        b = r(8),
        S = r(7);

    function E(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    function h(e, t, r) {
      return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r, e;
    }

    function v(e, t) {
      var r = {};

      for (var n in e) {
        t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
      }

      return r;
    }

    var y = {},
        I;

    try {
      var O = (I = !1, (0, d.safeObjectHasProp)(window, "apstag") && (0, d.safeObjectHasProp)(window.apstag, "debug") && (I = !0, (0, p.reportError)(new Error("apstag has already loaded - preventing duplicate load"), "__error-apstag_duplicate_load__", !0)), I);
      O || function () {
        var e = (0, l.getWindowPerformanceMetric)(window, "navigationStart"),
            t = (0, d.getRand)(),
            r = (0, d.isDebugEnabled)("console");

        function i() {
          try {
            return window.top !== window.self ? encodeURIComponent(document.referrer) : "";
          } catch (e) {
            return (0, p.reportError)(e, "__error-detectIframeAndGetURL__"), encodeURIComponent(document.documentURI);
          }
        }

        function E() {
          var e, t;

          try {
            try {
              t = window.top.document.referrer;
            } catch (e) {
              (0, p.reportError)(e, "__error-getPageReferrerURL-1__"), t = window.document.referrer;
            }

            e = encodeURIComponent(t);
          } catch (e) {
            (0, p.reportError)(e, "__error-getPageReferrerURL-2__");
          }

          return e;
        }

        function I() {
          var e = (0, d.getDebugValue)("url");
          if ("" !== e) return encodeURIComponent(e);
          var t = encodeURIComponent(document.documentURI);

          try {
            (t = encodeURIComponent(window.top.location.href)) && void 0 !== t || (t = i());
          } catch (e) {
            (0, p.reportError)(e, "__error-getReferrerURL__"), t = i();
          }

          return t;
        }

        function O() {
          if (!(0, d.hasLocalStorage)()) return u.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX;
          var e = c.store.getState();
          return (0, d.safeObjectHasProp)(e, "cfg") && (0, d.safeObjectHasProp)(e.cfg, "v") ? e.cfg.v : null;
        }

        function D(e) {
          return encodeURIComponent(JSON.stringify(e));
        }

        !function () {
          if ((0, d.hasLocalStorage)()) {
            var e = localStorage.getItem(u.CFG_LOCAL_STORAGE_KEY);

            if (e && "undefined" !== e) {
              var t = JSON.parse(e);
              c.store.dispatch({
                type: "SET_CFG",
                cfg: t
              });
            }
          }
        }();
        var T = (R = {}, w = Date.now(), A = 0, {
          addTimer: function addTimer(e, t) {
            t || (t = Date.now()), R[e] = t - w;
          },
          set: function set(e, t) {
            R[e] = t;
          },
          schedule: function schedule(e, t) {
            e || (e = 5e3), t || (t = "PH"), t += "/", setTimeout(function () {
              var e;
              R.i = A, R.t0 = w, R.site = ((e = decodeURIComponent(I())).indexOf("://") > -1 ? e.split("/")[2] : e.split("/")[0]).split(":")[0], (0, f.noBidCacheIdPixel)(R), R = {}, w = Date.now(), A++;
            }, e);
          }
        }),
            R,
            w,
            A,
            P;

        function C(e) {
          e.ts = Date.now(), c.store.dispatch({
            type: "LOG_EVENT",
            event: e
          });
        }

        function z(e) {
          function t(e) {
            if (!c.store.getState().cmpFired) {
              c.store.dispatch({
                type: "CMP_FIRED"
              });
              var t = document.createElement("iframe");
              t.style.display = "none", t.src = e, document.body.appendChild(t);
            }
          }

          document.readyState && "loading" === document.readyState ? document.addEventListener ? document.addEventListener("DOMContentLoaded", function () {
            t(e);
          }, !1) : document.attachEvent && document.attachEvent("onreadystatechange", function () {
            "complete" === document.readyState && t(e);
          }) : t(e);
        }

        function L(e) {
          try {
            var t = c.store.getState().cfg.COOKIE_MATCH_DELAY;
            window.setTimeout(function () {
              try {
                e && e.cmp && "" !== e.cmp && void 0 !== e.cmp ? z(e.cmp) : e && e.cmpjs && "" !== e.cmpjs && void 0 !== e.cmpjs && (0, m.loadScriptTag)(e.cmpjs);
              } catch (e) {
                (0, p.reportError)(e, "__error-tryCookieMatch-1__");
              }
            }, t);
          } catch (e) {
            (0, p.reportError)(e, "__error-tryCookieMatch-2__");
          }
        }

        function B(e) {
          if (!e) return !1;

          try {
            var t = Math.floor(Number(e));
            if (t > u.MINIMUM_BID_TIMEOUT) return t;
          } catch (e) {
            return (0, p.reportError)(e, "__error-getValidMilliseconds__", !0), !1;
          }

          return !1;
        }

        function j(e) {
          return !c.store.getState().experiments.chunkRequests || 0 === c.store.getState().bidReqs[e.split("-")[0]].networkReqs.filter(function (e) {
            return e.inFlight;
          }).length;
        }

        function x(e, t) {
          !c.store.getState().bidReqs[e[0]].hasCallbackExecuted && j(e[0]) && (c.store.dispatch({
            type: "RECORD_CALLBACK",
            fid: e[0]
          }), t());
        }

        function N(e) {
          c.store.getState().experiments.chunkRequests && c.store.dispatch({
            type: "RECORD_NETWORK_EXCHANGE",
            fid: e[0],
            timestamp: Date.now(),
            exchangeType: "response",
            networkID: e[1]
          });
        }

        function M(e, t, r) {
          var n = r.split("-"),
              o = {
            url: e,
            withCredentials: !0
          };

          try {
            o.onload = function (e) {
              N(n), eval(e.responseText), x(n, t);
            }, o.onerror = function () {
              N(n), x(n, t);
            }, (0, m.xhrGet)(o);
          } catch (e) {
            (0, p.reportError)(e, "__error-xhrBid__"), N(n), x(n, t);
          }
        }

        function q() {
          var e,
              t = {},
              r = document.cookie.split("; ");
          return t.cookiesParams = "", r.forEach(function (r) {
            if ((e = r.split("="))[0] in u.FIRST_PARTY_COOKIE_KEYS) switch (e[0]) {
              case "aps_ext_917":
                t.fb = e[1];
                break;

              default:
                t.cookiesParams += "&" + u.FIRST_PARTY_COOKIE_KEYS[e[0]].urlParam + "=" + e[1];
            }
          }), t.fb || c.store.getState().sync917 || c.store.dispatch({
            type: "SET_SYNC_917",
            value: !0
          }), t;
        }

        function k(e) {
          var t = new Date();
          return t.setTime(t.getTime() + 1e3 * e), t.toGMTString();
        }

        function U(e) {
          if (e[u.AAX_RESP_REMAP_COOKIE_KEY]) try {
            e[u.AAX_RESP_REMAP_COOKIE_KEY].forEach(function (e) {
              document.cookie = e.k + "=" + e.v + ";expires=" + k(e.exp) + ";";
            });
          } catch (e) {
            (0, p.reportError)(e, "__error-setFirstPartyCookies__");
          }
        }

        function H(e) {
          (0, d.safeObjectHasProp)(e, "cb") && (c.store.dispatch({
            type: "RECORD_AAX_RESPONSE_PROP",
            bidReqID: e.cb,
            key: "resTs",
            value: Date.now()
          }), c.store.dispatch({
            type: "RECORD_AAX_RESPONSE_PROP",
            bidReqID: e.cb,
            key: "perf",
            value: (0, l.getResourcePerformanceObject)(window, e.cb)
          })), (0, d.safeObjectHasProp)(e, "cfg") && c.store.dispatch({
            type: "SET_CFG",
            cfg: e.cfg
          }), T.addTimer("br"), T.set("brs", e.punt ? "0" : "1"), (0, d.safeObjectHasProp)(e, "rm") && T.schedule(e.to, e.id), Ne(e);
        }

        function G(e) {
          if (L(e), U(e), (0, d.safeObjectHasProp)(e, "cfg") && localStorage.setItem(u.CFG_LOCAL_STORAGE_KEY, JSON.stringify(e.cfg)), (0, d.safeObjectHasProp)(e, "st") && e.st.includes(917) && c.store.getState().sync917) {
            c.store.dispatch({
              type: "SET_SYNC_917",
              value: !1
            });

            try {
              Ee();
            } catch (e) {
              (0, p.reportError)(e, "__error-doFbSync__");
            }
          }

          e.punt || (0, f.sendPixels)();
        }

        function F(e, t) {
          var r = !1,
              n = null,
              o = function o(t) {
            if (!r) {
              try {
                e(t), n && clearTimeout(n);
              } catch (e) {
                (0, p.reportError)(e, "__error-wrapCallback__", !0);
              }

              r = !0;
            }
          };

          return n = window.setTimeout(o.bind(null, !0), t || c.store.getState().cfg.DEFAULT_TIMEOUT), o.bind(null, !1);
        }

        function K() {
          try {
            return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) + "x" + (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
          } catch (e) {
            (0, p.reportError)(e, "__error-getWindowsDimensions__");
          }

          return "x";
        }

        function X(e) {
          if ("string" == typeof e && e.length > 0) return !0;

          if (Array.isArray(e)) {
            for (var t = 0; t < e.length; t++) {
              if ("string" != typeof e[t]) return !1;
              if (0 === e[t].length) return !1;
            }

            return !0;
          }

          return !1;
        }

        function Q(e) {
          return D(e.map(function (e) {
            var t = {};
            return (0, d.safeObjectHasProp)(e, "mediaType") && "video" === e.mediaType ? (t.id = e.slotID, t.mt = u.MEDIA_TYPES_MAGIC_STRING_FOR_AAX.video) : (0, d.safeObjectHasProp)(e, "sizes") && (t.sd = e.slotID, t.s = e.sizes.filter(d.isArray).map(function (e) {
              return e.join("x");
            }), (0, d.safeObjectHasProp)(e, "slotName") && e.slotName !== e.slotID && (t.sn = e.slotName)), (0, d.safeObjectHasProp)(e, "slotParams") && "object" === o(e.slotParams) && null !== e.slotParams && (t.kv = {}, Object.keys(e.slotParams).forEach(function (r) {
              X(e.slotParams[r]) && (t.kv[r] = e.slotParams[r]);
            })), 0 !== Object.keys(t).length ? t : n({}, e, {
              id: "error"
            });
          }).filter(function (e) {
            return "error" !== e.id;
          }));
        }

        function Y(e) {
          var t,
              r = e.blockedBidders && (0, d.isArray)(e.blockedBidders) ? e.blockedBidders : c.store.getState().config.blockedBidders;
          return r && (0, d.isArray)(r) && (t = JSON.stringify(r)), t;
        }

        function V(e, r) {
          var i,
              a,
              l = c.store.getState().cfg.DEFAULT_AAX_HOST,
              f = c.store.getState().cfg.DTB_PATH,
              p = c.store.getState().config.pubID,
              g = t,
              m = I(),
              _ = E(),
              b = K(),
              S = u.LIBRARY_VERSION,
              h = q(),
              y = Y(e),
              v = O(),
              T = {};

          if (c.store.dispatch({
            type: "RECORD_AAX_REQUEST",
            data: {
              bidConfig: e,
              timeout: r,
              bidReqID: e.bidReqID,
              ws: b,
              url: m,
              rqTs: Date.now()
            }
          }), c.store.getState().experiments.chunkRequests) {
            var R = e.bidReqID.split("-");
            c.store.dispatch({
              type: "RECORD_NETWORK_EXCHANGE",
              fid: R[0],
              networkID: R[1],
              timestamp: Date.now(),
              exchangeType: "request"
            });
          }

          i = c.store.getState().config.isSelfServePub ? "src=600&pubid=" + p : "src=" + p, i += "&u=" + m + "&pid=" + g + "&cb=" + e.bidReqID + "&ws=" + b + "&v=" + S + "&t=" + r, (0, d.safeObjectHasProp)(e, "slots") && (i += "&slots=" + Q(e.slots));
          var w = c.store.getState().config.params,
              A = e.params,
              P = c.store.getState().experiments;
          w = (0, d.isObject)(w) ? w : {}, A = (0, d.isObject)(A) ? A : {}, a = n({}, w, A, {
            apse: P
          }), i += "&pj=" + D(a), h.cookiesParams && (i += h.cookiesParams), h.fb && (T[917] = h.fb, i += "&" + u.FIRST_PARTY_COOKIE_KEYS.aps_ext_917.urlParam + "=" + encodeURIComponent(JSON.stringify(T))), (v || v === u.NO_LOCAL_STORAGE_SUPPORT_MAGIC_NUMBER_FOR_AAX) && (i += "&cfgv=" + v);
          var C,
              z,
              L = (0, d.getDebugValue)("bidParams");
          return "" !== L && Object.keys(L).forEach(function (e) {
            i += "&" + e + "=" + L[e];
          }), _ && "" !== _ && (i += "&pr=" + _), y && (i += "&bb=" + y), "object" === o(c.store.getState().gdpr) && null !== c.store.getState().gdpr && (C = n({}, c.store.getState().gdpr), z = {
            enabled: "gdpre",
            consent: "gdprc",
            log: "gdprl"
          }, Object.keys(z).filter(function (e) {
            return void 0 !== C[e];
          }).map(function (e) {
            switch (e) {
              case "log":
                if ((0, d.hasLocalStorage)()) {
                  var t = window.localStorage.getItem(s.cmpResponseKey);

                  if (null !== t) {
                    try {
                      t = JSON.parse(t);
                    } catch (e) {
                      t = null;
                    }

                    window.localStorage.removeItem(s.cmpResponseKey);
                  }

                  null !== t && (C.log = JSON.stringify(n({}, JSON.parse(C.log), {
                    rtimes: t
                  })));
                  var r = window.localStorage.getItem(s.cmpLocalStorageChanged);
                  null !== r && (window.localStorage.removeItem(s.cmpLocalStorageChanged), C.log = JSON.stringify(n({}, JSON.parse(C.log), {
                    cc: r
                  })));
                }

            }

            i += "&" + z[e] + "=" + encodeURIComponent(C[e]);
          })), "" + u.PROTOCOL + l + f + "/bid?" + i;
        }

        function J() {
          c.store.getState().Q.forEach(function (e) {
            "i" === e[0] ? window.apstag.init.apply(null, e[1]) : window.apstag.fetchBids.apply(null, e[1]);
          });
        }

        function W(e) {
          return c.store.dispatch({
            type: "SET_GDPR_CONFIG",
            config: null
          }), c.store.dispatch({
            type: "SET_CONFIG",
            config: e,
            defaultCmpTimeout: c.store.getState().cfg.GDPR_CMP_TIMEOUT
          }), "success";
        }

        function Z() {
          var e = c.store.getState();
          return (0, d.safeObjectHasProp)(e, "config") && (0, d.safeObjectHasProp)(e.config, "deals") && !0 === e.config.deals;
        }

        function $() {
          var e = c.store.getState();
          return (0, d.safeObjectHasProp)(e, "config") && (0, d.safeObjectHasProp)(e.config, "adServer") && "oas" === e.config.adServer;
        }

        function ee(e) {
          var t = e.slotID;
          (0, d.safeObjectHasProp)(e, "mediaType") && "video" === e.mediaType || y.hasAdServerObjectLoaded() && y.isCommandQueueDefined() && (y.hasAdServerObjectLoaded() ? te(t) && me(e) : y.cmdQueuePush(function () {
            ee(e);
          }));
        }

        function te(e) {
          var t;

          try {
            t = ce().filter(function (t) {
              return y.getSlotElementId(t) === e;
            })[0];
          } catch (e) {
            (0, p.reportError)(e, "__error-getAdServerSlot__");
          }

          return t;
        }

        function re(e) {
          return (0, d.safeObjectHasProp)(e, "amzniid") ? e.amzniid : e.amzniid_sp;
        }

        function ne(e) {
          try {
            var t = c.store.getState().targetingKeys[e];

            if (y.hasAdServerObjectLoaded() && (0, d.isArray)(t)) {
              var r = te(e);
              t.forEach(function (e) {
                y.getTargeting(e, r).length > 0 && y.clearTargeting(e, r);
              });
            }
          } catch (e) {
            (0, p.reportError)(e, "__error-clearTargetingFromSlot__");
          }
        }

        function oe(e) {
          var t;

          try {
            var r = c.store.getState().slotBids;
            (0, d.safeObjectHasProp)(r, e) && r[e].forEach(function (e) {
              e.bidState === u.BID_STATES.set && (t = re(e));
            });
          } catch (e) {
            (0, p.reportError)(e, "__error-findBidIDSetBySlotID__");
          }

          return t;
        }

        function ie(e) {
          try {
            if ((0, d.safeObjectHasProp)(c.store.getState().slotBids, e)) {
              var t = c.store.getState().slotBids[e].filter(function (e) {
                return e.bidState === u.BID_STATES.set;
              })[0];
              t && t.bidState === u.BID_STATES.set && c.store.dispatch({
                type: "BID_STATE_CHANGE",
                slotID: e,
                bidID: oe(e),
                bidState: u.BID_STATES.exposed
              });
            }
          } catch (e) {
            (0, p.reportError)(e, "__error-clearbidSetOnSlot__");
          }
        }

        function ae(e, t) {
          return decodeURIComponent(e).split("?")[0].split("#")[0] === decodeURIComponent(t).split("?")[0].split("#")[0];
        }

        function se(e, t) {
          return e.map(function (e) {
            return (0, d.inArray)(t, e);
          }).filter(function (e) {
            return e;
          }).length === e.length;
        }

        function ce() {
          var e = [];

          try {
            y.hasAdServerObjectLoaded() && (e = y.getSlots());
          } catch (e) {
            (0, p.reportError)(e, "__error-getAdServerSlots__");
          }

          return e;
        }

        function de() {
          var e = {};

          try {
            Object.keys(c.store.getState().slotBids).forEach(function (t) {
              if (-1 === c.store.getState().displayAdServer.noBidSlotIDs.indexOf(t)) {
                var r = c.store.getState().slotBids[t];

                if (!(r.filter(function (e) {
                  return e.bidState === u.BID_STATES.set;
                }).length > 0)) {
                  var o = r.filter(function (e) {
                    return Date.now() - c.store.getState().AAXReqs.filter(function (t) {
                      return t.bidReqID === e.bidReqID;
                    })[0].rqTs < 24e4;
                  }).filter(function (e) {
                    return ae(I(), c.store.getState().AAXReqs.filter(function (t) {
                      return t.bidReqID === e.bidReqID;
                    })[0].url);
                  }).filter(function (e) {
                    return e.bidState !== u.BID_STATES.rendered;
                  });
                  o.length > 0 && (e[t] = o.map(function (e) {
                    var t = c.store.getState().AAXReqs.filter(function (t) {
                      return t.bidReqID === e.bidReqID;
                    })[0].rqTs;
                    return n({}, e, {
                      rqTs: t
                    });
                  }).reduce(function (e, t) {
                    return e.rqTs > t.rqTs ? e : t;
                  }));
                }
              }
            });
          } catch (e) {
            (0, p.reportError)(e, "__error-getCurrentSlotBids__");
          }

          return e;
        }

        function ue(e, t) {
          return (0, d.isArray)(c.store.getState().targetingKeys[e]) ? t ? ["amzniid_sp"] : c.store.getState().targetingKeys[e].filter(function (e) {
            return e.indexOf("amzniid") > -1 && e.indexOf("amzniid_sp") < 0;
          }) : ["amzniid"];
        }

        function le(e, t) {
          var r, n;

          try {
            var o = c.store.getState().slotBids;
            Object.keys(o).forEach(function (i) {
              o[i].forEach(function (o) {
                ue(i, t).forEach(function (t) {
                  o[t] === e && (r = o, "amzniid_sp" === t ? n = "sp" : "amzniid" !== t && (n = t.substr(0, t.indexOf("amzniid"))));
                });
              });
            });
          } catch (e) {
            (0, p.reportError)(e, "__error-findSlotBidByBidID__");
          }

          return {
            slotBid: r,
            dealId: n
          };
        }

        function fe(e, t, r) {
          var n;
          return t[r + "amzniid"] === e && (n = r.split("_").pop().trim()), n;
        }

        function pe(e) {
          var t = {};
          return e.slots.forEach(function (e) {
            "video" !== e.mediaType ? t[e.slotID] = e : (e.slotID.indexOf("rsv-") >= 0 && (e = {
              slotID: e.slotID.substring(4),
              r_amznbid: e.amznbid,
              r_amzniid: e.amzniid,
              r_amznp: e.amznp,
              mediaType: "video",
              targeting: ["r_amznbid", "r_amzniid", "r_amznp"]
            }), t[e.slotID] ? (e.targeting = e.targeting.concat(t[e.slotID].targeting), t[e.slotID] = n({}, t[e.slotID], e)) : t[e.slotID] = e);
          }), Object.keys(t).map(function (e) {
            return t[e];
          });
        }

        function ge(e) {
          var t,
              r = pe(e),
              o = ["host", "ev", "cb", "cmp", "cfe"];

          try {
            t = r.map(function (t) {
              var r = {
                bidState: u.BID_STATES.new
              };
              return (0, d.safeObjectHasProp)(t, "amznsz") || (r.amznsz = t.size), o.forEach(function (t) {
                if ((0, d.safeObjectHasProp)(e, t)) {
                  var n = e[t],
                      o = t;
                  "cb" === t && (o = "bidReqID"), r[o] = n;
                }
              }), n({}, t, r);
            });
          } catch (e) {
            (0, p.reportError)(e, "__error-convertAAXResponse__");
          }

          return t;
        }

        function me(e) {
          try {
            var t,
                r = e.slotID,
                n = re(e),
                o = e.targeting ? e.targeting : Ct("display");
            (t = te(r)) && (Object.keys(e).filter(function (e) {
              return (0, d.inArray)(o, e);
            }).forEach(function (r) {
              return y.setTargeting(r, e[r], t);
            }), c.store.dispatch({
              type: "BID_STATE_CHANGE",
              slotID: r,
              bidID: n,
              bidState: u.BID_STATES.set,
              ts: Date.now()
            }));
          } catch (e) {
            (0, p.reportError)(e, "__error-applyTargetingToAdServerSlot__");
          }
        }

        function _e(e) {
          var t = de();
          e.forEach(function (e) {
            t[e] && ee(t[e]);
          });
        }

        function be() {
          var e = de();
          Object.keys(e).forEach(function (t) {
            ee(e[t]);
          });
        }

        function Se(e) {
          try {
            e ? _e(e) : be(), c.store.getState().displayAdServer.slotRenderEndedSet || (y.cmdQueuePush(function () {
              y.slotRenderEndedEvent(function (e) {
                ne(y.getSlotElementId(e.slot)), ie(y.getSlotElementId(e.slot));
              });
            }), c.store.dispatch({
              type: "SLOT_RENDER_ENDED_SET"
            }));
          } catch (e) {
            (0, p.reportError)(e, "__error-applySlotTargeting__");
          }
        }

        function Ee() {
          var e = 197,
              t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
              r = "1881141382166183",
              n = "https://www.facebook.com/audiencenetwork/token/update";

          function o(e) {
            var t = JSON.parse(e),
                r = t.fbToken,
                n = new Date(parseInt(t.expAfter, 10)).toUTCString();
            document.cookie = "aps_ext_917=" + r + "; expires=" + n;
          }

          function i(r) {
            !function (e, t, r) {
              var o;
              !function (e, t) {
                var r = {
                  url: e,
                  withCredentials: !0
                };

                try {
                  r.onload = function (e) {
                    t(e.responseText);
                  }, r.onerror = function () {}, (0, m.xhrGet)(r);
                } catch (e) {
                  (0, p.reportError)(e, "__error-fbTokenRequest__");
                }
              }((o = t, n + "?partner=" + encodeURIComponent(e) + "&vr_token=" + encodeURIComponent(o)), r);
            }(r, function () {
              for (var r = "VR_", n = 0; n < e; ++n) {
                r += t.charAt(Math.floor(Math.random() * t.length));
              }

              return r;
            }(), o);
          }

          "complete" === document.readyState ? i(r) : window.addEventListener("load", function () {
            i(r);
          });
        }

        function he(e) {
          var t, r;
          return t = "" + e.host + c.store.getState().cfg.DTB_PATH + "/imp", r = "" + e.host + c.store.getState().cfg.DTB_PATH + "/adm", e.cfe || e.isAmp ? r : t;
        }

        function ve(e) {
          var t,
              r = "?b=" + e.bidID + "&rnd=" + (0, d.getRand)();
          return (0, d.safeObjectHasProp)(e, "pp") && (r += "&pp=" + e.pp), (0, d.safeObjectHasProp)(e, "amznp") && (r += "&p=" + e.amznp), (0, d.safeObjectHasProp)(e, "crID") && (r += "&crid=" + e.crID), (0, d.safeObjectHasProp)(e, "isSharedPMP") && !0 === e.isSharedPMP && (r += "&sp=true"), t = he(e), "1" === e.fif ? t + "j" + r : t + "i" + r;
        }

        function ye(e) {
          var t = e.doc.createElement("iframe");
          return t.frameBorder = 0, t.marginHeight = 0, t.marginWidth = 0, t.topMargin = 0, t.leftMargin = 0, t.scrolling = "no", t.allowTransparency = !0, t.width = e.sizes[0] + "px", t.height = e.sizes[1] + "px", t;
        }

        function Ie(e) {
          De({
            bidID: e.amzniid,
            doc: e.document,
            pp: e.amznbid.split("_").pop(),
            host: e.amznhost.replace("http://", "https://"),
            adID: "amznad" + Math.round(1e6 * Math.random()),
            sizes: e.amznsz.split("x"),
            fif: !1,
            isAmp: !0,
            amznp: e.amznp
          });
        }

        function Oe(e) {
          try {
            var t = ye(e);
            t.id = "apstag-f-iframe-" + (0, d.getRand)(), t.src = "about:blank", e.doc.body.appendChild(t);
            var r = e.html;
            t.contentWindow.document.open(), t.contentWindow.document.write(r), t.contentWindow.document.close();
          } catch (e) {
            (0, p.reportError)(e, "__error-loadAdIntoFriendlyIframe__");
          }
        }

        function De(e, t) {
          try {
            var r = ye(e),
                n = {};

            if (r.id = e.adID, r.sandbox = "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation", (0, d.isDebugEnabled)("fake_bids")) {
              var o = '<body style="background-color: #FF9900;">' + (e.sizes[1] > 50 ? "<h3>apstag Test Creative</h3>" : "") + "<h4>amzniid - " + e.bidID + " | amznbid: " + e.pp + " | size: " + e.sizes.join("x") + "</h4></body>";
              r.src = "javascript:'" + o + "'";
            } else r.src = ve(e);

            e.isAmp ? (n.doc = e.doc, n.amzniid = e.bidID, n.slotID = "amp") : (n = le(e.bidID, e.isSharedPMP).slotBid).doc = e.doc, e.doc.body.appendChild(r), e.viewabilityParams = e.viewabilityParams || {
              states: {}
            }, e.viewabilityParams.iframe = r, r.onload = function () {
              e.viewabilityParams.states.iframeLoaded = !0, t && t();
            };
          } catch (e) {
            (0, p.reportError)(e, "__error-loadAdIntoUnfriendlyIframe__");
          }
        }

        function Te(e) {
          var t,
              r = e.states,
              n = e.doc,
              o = e.bidID,
              i = e.iframe;
          st(r) || (r.shouldRunViewability = !1, (0, d.safeObjectHasProp)(window, "amzncsm") ? t = window.amzncsm : (0, d.safeObjectHasProp)(n.defaultView, "amzncsm") && (t = n.defaultView.amzncsm), t && (0, d.safeObjectHasProp)(t, "rmD") && (t.host = c.store.getState().cfg.DEFAULT_AAX_HOST, t.rmD(i, o, n.defaultView, n, c.store.getState().config.pubID)));
        }

        function Re(e) {
          var t = e.map(xe),
              r = {};
          return Object.keys(c.store.getState().slotBids).forEach(function (e) {
            var n = c.store.getState().slotBids[e].filter(function (e) {
              return e.bidState === u.BID_STATES.new;
            })[0];
            n && (0, d.inArray)(t, e) && (r[e] = n, c.store.dispatch({
              type: "BID_STATE_CHANGE",
              slotID: e,
              bidID: re(n),
              bidState: u.BID_STATES.exposed
            }));
          }), r;
        }

        function we(e, t) {
          var r = "0x0";
          return Z() ? {
            slotID: e,
            size: r,
            mediaType: "banner",
            targeting: {
              amznbid: t,
              amzniid: "",
              amznp: t,
              amznsz: r
            },
            helpers: {
              targetingKeys: ["amznbid", "amzniid", "amznp", "amznsz"]
            }
          } : {
            slotID: e,
            amzniid: "",
            amznbid: t,
            amznp: t,
            amznsz: r,
            size: r
          };
        }

        function Ae(e, t) {
          var r = "";
          return e.targeting.forEach(function (t) {
            r += "&" + t + "=" + e[t];
          }), !0 === t && (r = encodeURIComponent(r)), r;
        }

        function Pe(e, t, r) {
          var n,
              o = t.slots.filter(dt).map(xe),
              i = e.map(xe);
          return n = r ? o.map(function (e) {
            return we(e, u.SLOT_STATES.bidInFlight);
          }) : o.reduce(function (e, t) {
            return (0, d.inArray)(i, t) || e.push(we(t, u.SLOT_STATES.noBid)), e;
          }, []), e.concat(n);
        }

        function Ce(e, t) {
          return function (r) {
            var n = Re(t.slots),
                o = Object.keys(n),
                i = [];
            r && (c.store.dispatch({
              type: "RECORD_AAX_RESPONSE_PROP",
              bidReqID: t.bidReqID,
              key: "timedOutAt",
              value: Date.now()
            }), c.store.getState().experiments.chunkRequests && c.store.dispatch({
              type: "RECORD_TIMEOUT",
              fid: t.bidReqID,
              timeOut: Date.now()
            })), o.forEach(function (e) {
              if ((0, d.safeObjectHasProp)(n, e)) {
                var t = n[e],
                    r = {};
                if (Z()) t.meta.forEach(function (e) {
                  r[e] = t[e];
                }), r.targeting = {}, t.targeting.forEach(function (e) {
                  r.targeting[e] = t[e];
                }), r.helpers = {
                  targetingKeys: t.targeting,
                  qsParams: Ae.bind(null, t, !1),
                  encodedQsParams: Ae.bind(null, t, !0)
                };else if ((0, d.safeObjectHasProp)(t, "amznbid")) {
                  if ((0, d.safeObjectHasProp)(t, "amznp") || (t.amznp = ""), r = {
                    amzniid: t.amzniid,
                    amznbid: t.amznbid,
                    amznp: t.amznp,
                    slotID: e
                  }, (0, d.safeObjectHasProp)(t, "size") && (r.size = t.size, r.amznsz = t.amznsz), "video" === t.mediaType) {
                    r.mediaType = "video";
                    var o = "";
                    t.amznbid ? o += "&amzniid=" + t.amzniid + "&amznbid=" + t.amznbid + "&amznp=" + t.amznp : (r.amznbid = "", r.amzniid = ""), t.r_amznbid ? (r.r_amznbid = t.r_amznbid, r.r_amzniid = t.r_amzniid, r.r_amznp = t.r_amznp, o += "&r_amzniid=" + t.r_amzniid + "&r_amznbid=" + t.r_amznbid + "&r_amznp=" + t.r_amznp) : (r.r_amznbid = "", r.r_amzniid = "", r.r_amznp = ""), r.qsParams = o, r.encodedQsParams = encodeURIComponent(o);
                  }
                } else r = we(t.slotID, u.SLOT_STATES.noBid);
                i.push(r);
              }
            }), y.isSupported && (i = Pe(i, t, r)), e(i, {
              fromTimeout: r
            });
          };
        }

        function ze(e, t) {
          try {
            var r;
            (r = e.defaultView && e.defaultView.frameElement ? e.defaultView.frameElement : window.frameElement).width = t[0], r.height = t[1];
          } catch (e) {
            (0, p.reportError)(e, "__error-resizeIframe__");
          }
        }

        function Le(e) {
          return e[0] + "x" + e[1];
        }

        function Be(e) {
          return 1 === e.length ? Le(e[0]) : Le(e[Math.floor(e.length * Math.random())]);
        }

        function je(e, t) {
          var r,
              n = c.store.getState().cfg.DEFAULT_AAX_HOST,
              o = I(),
              i = e.bidReqID,
              a = K(),
              s = (0, d.getDebugValue)("testBidTimeout") || 200;
          c.store.dispatch({
            type: "RECORD_AAX_REQUEST",
            data: {
              bidConfig: e,
              timeout: s,
              bidReqID: i,
              ws: a,
              url: o,
              rqTs: Date.now()
            }
          }), r = e.slots.map(function (e) {
            var t = {
              slotID: e.slotID,
              amzniid: u.MOCKBID.amzniid + "-" + (0, d.getRand)(),
              amznbid: u.MOCKBID.amznbid,
              amznp: u.MOCKBID.amznp,
              crid: u.MOCKBID.crid + "-" + (0, d.getRand)()
            };

            if ((0, d.safeObjectHasProp)(e, "sizes")) {
              var r = Be(e.sizes);
              t.size = r, t.amznsz = r;
            } else "video" === e.mediaType && (t.mediaType = "video", t.amznbid = "v_" + t.amznbid);

            if (Z()) {
              t.mediaType = "banner", t.meta = ["slotID", "mediaType", "size"], t.amznbid_sp = u.MOCKBID.amznbid + "SP", t.amznp_sp = u.MOCKBID.amznp + "SP", t.amznsz_sp = t.size;
              var n = "testDeal" + (0, d.getRand)() + "_" + t.size,
                  o = "testDealImpression-" + (0, d.getRand)();
              t.amzndeal_sp = n, t.amzndeals = [n], t[n + "amzniid"] = o, t.amzniid_sp = o, t.targeting = ["amzniid", "amznbid", "amznp", "amznsz", "amzniid_sp", "amznbid_sp", "amznp_sp", "amznsz_sp", "amzndeal_sp", "amzndeals", n + "amzniid"];
            }

            return t;
          }), window.setTimeout(function () {
            window.apstag.bids({
              slots: r,
              host: n,
              status: "ok",
              cb: i
            }), t(!0);
          }, s);
        }

        function xe(e) {
          return e.slotID;
        }

        function Ne(e) {
          var t = c.store.getState().AAXReqs.filter(function (t) {
            return t.bidReqID === e.cb;
          })[0];

          if (t && t.bidConfig && t.bidConfig.slots) {
            var r = t.bidConfig.slots.filter(dt).map(function (e) {
              return e.slotID;
            }),
                n = (0, d.safeObjectHasProp)(e, "slots") ? e.slots.map(function (e) {
              return e.slotID;
            }) : [],
                o = r.filter(function (e) {
              return !(0, d.inArray)(n, e);
            });
            c.store.dispatch({
              type: "NO_BID_ON_ADSERVER_SLOTS",
              slotIDs: o
            }), y.hasAdServerObjectLoaded() ? ke() : y.isCommandQueueDefined() && y.cmdQueuePush(function () {
              ke();
            });
          }
        }

        function Me(e) {
          return (0, d.inArray)(c.store.getState().AAXReqs.filter(function (e) {
            return !e.resTs;
          }).map(function (e) {
            return e.bidConfig.slots;
          }).reduce(function (e, t) {
            return e.concat(t);
          }, []).map(xe), e);
        }

        function qe(e) {
          var t = y.getTargeting("amznbid", e);
          return t.length > 0 && t[0].length > 2;
        }

        function ke() {
          y.hasAdServerObjectLoaded() && "1" === y.getTargeting("amznbid")[0] && He(), ce().forEach(function (e) {
            !(0, d.inArray)(c.store.getState().displayAdServer.noBidSlotIDs, y.getSlotElementId(e)) || Me(y.getSlotElementId(e)) || qe(e) || "2" === y.getTargeting("amznbid", e)[0] || Ue("noBid", e);
          });
        }

        function Ue(e, t) {
          u.SLOT_STATE_KEYS.forEach(function (r) {
            return y.setTargeting(r, u.SLOT_STATES[e], t);
          });
        }

        function He() {
          u.SLOT_STATE_KEYS.forEach(function (e) {
            return y.clearTargeting(e);
          });
        }

        function Ge(e) {
          var t = {
            _type: "dupePixel",
            dd: Date.now() - e.renderTime
          };
          (0, f.bidCacheIdPixel)(e.amzniid, t);
        }

        function Fe() {
          var r = (0, l.getResourcePerformanceObject)(window, "aax2/apstag.js"),
              n = {
            pid: t,
            ns: e,
            fs: (0, l.getMetricFromPerformanceObject)(r, "fetchStart"),
            re: (0, l.getMetricFromPerformanceObject)(r, "responseEnd")
          },
              o = (0, l.isResourceCached)(r);
          null !== o && (n.c = o ? 1 : 0), window.setTimeout(f.noBidCacheIdPixel, 1e3, n);
        }

        function Ke() {
          try {
            window.setTimeout(function () {
              var e = Ve().filter(function (e) {
                return !(0, d.safeObjectHasProp)(c.store.getState().bsPixels, e.iid) || e.state !== c.store.getState().bsPixels[e.iid];
              });
              e && e.length && e.length > 0 && (e.forEach(function (e) {
                var t = e.iid,
                    r = v(e, ["iid"]);
                (0, f.bidCacheIdPixel)(t, Qe(r));
              }), Xe(e));
              var r = {
                fetchStart: "a",
                domainLookupStart: "b",
                domainLookupEnd: "c",
                connectStart: "d",
                secureConnectionStart: "e",
                connectEnd: "f",
                requestStart: "g",
                responseStart: "h",
                responseEnd: "i",
                resTs: "j"
              };
              Object.keys(c.store.getState().slotBids).forEach(function (e) {
                c.store.getState().slotBids[e].filter(function (e) {
                  return void 0 !== e.amzniid;
                }).forEach(function (n) {
                  if (!n.pixelSent) {
                    var i = c.store.getState().AAXReqs.filter(function (e) {
                      return e.bidReqID === n.bidReqID;
                    })[0];

                    if ("object" === (void 0 === i ? "undefined" : o(i)) && null !== i) {
                      var a = i.rqTs - (0, l.getTimeOrigin)(),
                          s = {
                        pid: t,
                        lv: u.LIBRARY_VERSION,
                        ns: i.bidConfig.slots.length,
                        fid: n.bidReqID,
                        fbrq: i.rqTs,
                        _type: "latencyBd"
                      };
                      "object" === o(i.perf) && null !== i.perf && Object.keys(r).forEach(function (e) {
                        0 !== (0, l.getMetricFromPerformanceObject)(i.perf, e) && (s[r[e]] = (0, l.getMetricFromPerformanceObject)(i.perf, e) - a);
                      }), s[r.resTs] = i.resTs - i.rqTs, (0, f.bidCacheIdPixel)(n.amzniid, s), c.store.dispatch({
                        type: "UPDATE_BID_INFO_PROP",
                        slotID: e,
                        iid: n.amzniid,
                        key: "pixelSent",
                        value: !0
                      });
                    }
                  }
                });
              }), Ke();
            }, 5e3);
          } catch (e) {
            (0, p.reportError)(e, "__error-bidSetPixel__");
          }
        }

        function Xe(e) {
          e.forEach(function (e) {
            return c.store.dispatch({
              type: "RECORD_BID_INFO_SENT",
              bidInfo: e
            });
          });
        }

        function Qe(e) {
          var t = {};

          try {
            var r = Ye(e.fid);
            (t = {
              status: e.state,
              pubid: c.store.getState().config.pubID,
              lv: u.LIBRARY_VERSION,
              _type: "bidSetPixel"
            }).toa = (0, d.safeObjectHasProp)(r.req, "timedOutAt") ? r.req.timedOutAt : "0", t.fbrq = r.req.rqTs, t.pto = r.req.timeout, t.ns = r.req.bidConfig.slots.length, t.bla = r.req.resTs - r.req.rqTs, t.reqindex = r.index, t.fid = e.fid, c.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION && (t.eid = c.store.getState().experiments.chunkRequests ? 2 : 1, t.fbindex = r.fbIndex, t.fbns = c.store.getState().bidConfigs[e.fid.split("-")[0]].slots.length), e.delta && (t.delay = e.delta);
          } catch (e) {
            (0, p.reportError)(e, "__error-mapBidInfoToPixel__");
          }

          return t;
        }

        function Ye(e) {
          var t = {
            req: c.store.getState().AAXReqs.filter(function (t) {
              return t.bidReqID === e;
            })[0]
          };
          return t.index = c.store.getState().AAXReqs.indexOf(t.req) + 1, c.store.getState().experiments.chunkRequests ? t.fbIndex = c.store.getState().AAXReqs.filter(function (e) {
            return -1 === e.bidReqID.indexOf("-") || "0" === e.bidReqID.split("-")[1];
          }).map(function (e) {
            return e.bidReqID.split("-")[0];
          }).indexOf(e.split("-")[0]) + 1 : t.fbIndex = t.index, t;
        }

        function Ve() {
          var e = $e(),
              t = [];
          return e ? (Object.keys(c.store.getState().slotBids).forEach(function (r) {
            "video" !== c.store.getState().slotBids[r][0].mediaType && c.store.getState().slotBids[r].filter(function (e) {
              return void 0 !== e.amzniid;
            }).forEach(function (n) {
              var o = {
                slotID: r,
                iid: n.amzniid,
                fid: n.bidReqID
              },
                  i = [],
                  a = [];

              if (r in e && (i = e[r].fetchedAt.filter(function (e) {
                return e.AAXReqInfo && e.AAXReqInfo.bidReqID === n.bidReqID;
              }), a = e[r].targetedAt.filter(function (e) {
                return e.targeting === n.amzniid;
              })), i.length > 0 ? i.length > 0 && a.length >= i.length && i.slice(i.length - 1)[0].ts > a.slice(i.length - 1)[0].ts ? 1 === e[r].fetchWithIID.filter(function (e) {
                return e === n.amzniid;
              }).length ? o.state = 1 : o.state = 4 : -1 !== e[r].fetchWithIID.indexOf(n.amzniid) ? o.state = 3 : o.state = 2 : o.state = 0, 1 === o.state || 2 === o.state) {
                var s = c.store.getState().AAXReqs.filter(function (e) {
                  return e.bidReqID === n.bidReqID;
                })[0].resTs,
                    u = Je(s, e[r].fetchedAt, 2 === o.state);
                u && (0, d.safeObjectHasProp)(u, "ts") && (o.delta = s - u.ts);
              }

              t.push(o);
            });
          }), t) : t;
        }

        function Je(e, t, r) {
          return t[We(t.map(function (t) {
            var n = e - t.ts;
            return r ? n >= 0 ? n : null : n <= 0 ? -n : null;
          }))];
        }

        function We(e) {
          for (var t, r, n, o = 0; o < e.length; o++) {
            "number" == typeof (t = e[o]) && ("number" != typeof n || t < r) && (n = o, r = t);
          }

          return n;
        }

        function Ze(e, t) {
          return c.store.getState().AAXReqs.filter(function (e) {
            return e.bidConfig.slots.map(function (e) {
              return e.slotID;
            }).indexOf(t) > -1;
          })[e];
        }

        function $e() {
          if (!y.hasAdServerObjectLoaded()) return null;
          var e = googletag.debug_log.getAllEvents().map(function (e) {
            var t = e.getMessage(),
                r = e.getSlot();
            return {
              id: t.getMessageId(),
              args: t.getMessageArgs(),
              slotID: r ? y.getSlotElementId(r) : null,
              ts: e.getTimestamp().getTime()
            };
          }).filter(function (e) {
            return 17 === e.id && "amzniid" === e.args[0] || 103 === e.id && "amzniid" === e.args[0] || 3 === e.id;
          }).reduce(function (e, t) {
            (0, d.safeObjectHasProp)(e, t.slotID) || (e[t.slotID] = {
              fetchedAt: [],
              targetedAt: []
            });
            var r = e[t.slotID];
            return 3 === t.id ? r.fetchedAt.push({
              ts: t.ts,
              AAXReqInfo: Ze(e[t.slotID].fetchedAt.length, t.slotID)
            }) : 17 === t.id ? r.targetedAt.push({
              ts: t.ts,
              targeting: t.args[1]
            }) : 103 === t.id && r.targetedAt.push({
              ts: t.ts,
              targeting: ""
            }), e;
          }, {});
          return Object.keys(e).forEach(function (t) {
            var r = e[t];
            r.fetchWithIID = r.fetchedAt.map(function (e) {
              var t = Je(e.ts, r.targetedAt, !0);
              return t ? t.targeting : 0;
            }), e[t] = r;
          }), e;
        }

        function et() {
          tt(), rt();
        }

        function tt() {
          "http://" === u.PROTOCOL && new a.default({
            run: nt.bind(null, ["http", "https"]),
            cases: {
              aax: ["http://aax.amazon-adsystem.com/dtb-ping", "https://aax.amazon-adsystem.com/dtb-ping"],
              cf: ["http://c.amazon-adsystem.com/aax2/dtb-ping.txt", "https://c.amazon-adsystem.com/aax2/dtb-ping.txt"]
            },
            name: "https",
            sample: "EXPERIMENT_HTTPS"
          });
        }

        function rt() {
          new a.default({
            run: nt.bind(null, ["aax", "cf"]),
            cases: {
              tst: ["https://d29a6k4186aqcx.cloudfront.net/2k.txt", "https://d29a6k4186aqcx.cloudfront.net/2k.txt"]
            },
            name: "edge-server",
            sample: "EXPERIMENT_EDGE"
          });
        }

        function nt(e, t, r) {
          r = ot(r), at((0, d.shuffleArray)(r), function () {
            var n;
            return t((h(n = {
              pubID: c.store.getState().config ? c.store.getState().config.pubID : null
            }, e[0], it(r[0])), h(n, e[1], it(r[1])), n));
          });
        }

        function ot(e) {
          return e.map(function (e) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + "cb=" + (0, d.getRand)();
          });
        }

        function it(e) {
          try {
            var t = (0, l.getResourcePerformanceObject)(window, e);
            return (0, l.getMetricFromPerformanceObject)(t, "fetchStart") - (0, l.getMetricFromPerformanceObject)(t, "responseEnd");
          } catch (e) {
            return (0, p.reportError)(e, "__getRoundTripTime-error__"), 0;
          }
        }

        function at(e, t) {
          var r = {
            requests: {},
            callback: !1
          };
          e.map(function (e) {
            r.requests[e] = !1;
          });

          var n = function n(e) {
            r.requests[e] = !0, !r.callback && st(r.requests) && t();
          };

          e.map(function (e) {
            (0, m.xhrGet)({
              url: e,
              onload: n.bind(null, e),
              onerror: n.bind(null, e, !0)
            });
          });
        }

        function st(e) {
          var t = Object.keys(e);
          return t.map(function (t) {
            return e[t];
          }).filter(function (e) {
            return e;
          }).length === t.length;
        }

        function ct() {
          y.hasAdServerObjectLoaded() ? Ue("noRequest") : y.isCommandQueueDefined() && y.cmdQueuePush(function () {
            Ue("noRequest");
          });
        }

        function dt(e) {
          return "video" !== e.mediaType;
        }

        function ut(e) {
          y.isCommandQueueDefined() && (c.store.dispatch({
            type: "REQUESTED_BID_FOR_ADSERVER_SLOTS",
            slotIDs: e
          }), c.store.dispatch({
            type: "REQUESTED_BID_FOR_PMP_ONLY_DFP_SLOTS",
            slotIDs: e
          }), y.cmdQueuePush(function () {
            var t = ce();
            "0" === y.getTargeting("amznbid")[0] && He(), se(e, t.map(function (e) {
              return y.getSlotElementId(e);
            })) ? t.forEach(function (t) {
              (0, d.inArray)(e, y.getSlotElementId(t)) && !qe(t) && Ue("bidInFlight", t);
            }) : y.cmdQueuePush(function () {
              Ue("bidInFlight");
            });
          }));
        }

        function lt(e, t, r) {
          switch (e) {
            case "getLog":
              return c.store.getState().eventLog;

            case "getState":
              return c.store.getState();

            case "enable":
              return (0, d.setDebugMode)("fake_bids", !0), "DEBUG MODE ENABLED";

            case "disable":
              return (0, d.setDebugMode)("fake_bids", !1), "DEBUG MODE DISABLED";

            case "enableConsole":
              return (0, g.enableDebugConsole)(), "Debug console enabled";

            case "disableConsole":
              return (0, g.disableDebugConsole)(), "Debug console disabled";

            case "setDebug":
              return (0, d.setDebugMode)(t, r) ? "Set debug mode '" + t + "' to '" + r + "'" : "Failed to set debug mode '" + t + "'";

            default:
              return "unknown debug argument";
          }
        }

        function ft(e) {
          return e.split("x").map(function (e) {
            return parseInt(e, 10);
          });
        }

        function pt(e, t) {
          if (e.type && "amp" === e.type) Ie(e);else {
            var r = !1;
            t && "string" == typeof t && 0 === t.indexOf("sp|") && (t = t.substring(3), r = !0);
            var n,
                o = t || e.amzniid,
                i = le(o, r),
                a = i.slotBid,
                s = i.dealId;
            if (n = s && s.length >= 1 ? ft("sp" === s ? a.amznsz_sp : fe(o, a, s)) : ft(a.size), 1 !== arguments.length) {
              if (a) {
                a.bidState === u.BID_STATES.rendered && Ge(a), c.store.dispatch({
                  type: "BID_STATE_CHANGE",
                  slotID: a.slotID,
                  bidID: t,
                  bidState: u.BID_STATES.rendered,
                  dealId: s,
                  ts: Date.now()
                }), T.addTimer("imp");

                var d = a.host,
                    l = "amznad" + Math.round(1e6 * Math.random()),
                    f = gt("amznbid", a, s),
                    g = gt("amznp", a, s),
                    _ = gt("crid", a, s),
                    b = a.cfe,
                    S = {
                  bidID: t,
                  doc: e,
                  pp: f,
                  host: d,
                  adID: l,
                  sizes: n,
                  amznp: g,
                  crID: _,
                  fif: !1,
                  dealId: s,
                  isSharedPMP: r,
                  cfe: b
                };

                "1" === a.fif ? (S.fif = "1", c.store.dispatch({
                  type: "UPDATE_BID_INFO_PROP",
                  slotID: a.slotID,
                  iid: t,
                  key: "doc",
                  value: e,
                  dealId: s
                }), (0, m.loadScriptTag)(ve(S), null, document)) : c.store.getState().aaxViewabilityEnabled ? $() && "loading" === e.readyState ? e.addEventListener("DOMContentLoaded", function () {
                  mt(S, e);
                }) : mt(S, e) : De(S), ze(e, n);
              } else (0, p.reportError)(new Error("Invalid bid ID tried to render"), "__error-invalid_bid_id_render__");
            } else Oe({
              doc: a.doc,
              bidID: a.amzniid,
              sizes: n,
              html: e.html
            });
          }
        }

        function gt(e, t, r) {
          return r && r.length >= 1 ? "sp" === r ? t[e + "_sp"] : "" : t[e] ? t[e] : "";
        }

        function mt(e, t) {
          var r = t.createElement("script");
          r.type = "text/javascript", r.async = !0, e.viewabilityParams = {
            doc: t,
            bidID: e.bidID,
            states: {
              csmLoaded: !1,
              iframeLoaded: !1,
              shouldRunViewability: !0
            }
          };
          var n = Te.bind(null, e.viewabilityParams);
          (0, m.addOnLoadFunction)(r, function () {
            e.viewabilityParams.states.csmLoaded = !0, n();
          });

          try {
            r.onerror = function (e) {
              return (0, f.noBidCacheIdPixel)({
                _type: "csm_fail",
                ts: Date.now(),
                msg: e.message
              });
            };
          } catch (e) {
            (0, p.reportError)(e, "__error-csm_onerror__");
          }

          De(e, n), r.src = c.store.getState().cfg.CSM_JS, t.body.appendChild(r);
        }

        function _t(e) {
          H(e), c.store.dispatch({
            type: "UPDATE_SLOT_BIDS",
            bids: ge(e)
          }), (0, d.safeObjectHasProp)(e, "ev") && c.store.dispatch({
            type: "SET_VIEWABILITY",
            viewability: e.ev
          }), (0, d.safeObjectHasProp)(e, "cfn") && c.store.dispatch({
            type: "SET_CFG",
            cfg: {
              CSM_JS: "//" === e.cfn.substring(0, 2) ? e.cfn : "//c.amazon-adsystem.com/" + e.cfn
            }
          }), G(e);
        }

        function bt() {
          return "number" == typeof c.store.getState().cfg.MAX_SLOTS_PER_REQUEST && c.store.getState().cfg.MAX_SLOTS_PER_REQUEST > 0;
        }

        function St(e, t) {
          var r = Dt.bind(null, e, t);
          void 0 === c.store.getState().gdpr || null === c.store.getState().gdpr ? (c.store.dispatch({
            type: "ADD_GDPR_QUE_ITEM",
            func: r
          }), 1 === c.store.getState().gdprQue.length && (0, s.GDPR)(c.store.getState().config.gdpr, Et)) : r();
        }

        function Et(e) {
          c.store.dispatch({
            type: "SET_GDPR_CONFIG",
            config: e
          }), c.store.getState().gdprQue.map(function (e) {
            try {
              e();
            } catch (e) {
              (0, p.reportError)(e, "__gdpr_que__");
            }
          }), c.store.dispatch({
            type: "CLEAR_GDPR_QUE"
          });
        }

        function ht(e) {
          var t = ["300,250", "300,600", "160,600", "320,50", "728,90", "970,250"],
              r = "";
          return e.filter(function (e) {
            return r = e.join(","), t.indexOf(r) >= 0;
          });
        }

        function vt(e) {
          var t = e.filter(function (e) {
            return "fluid" !== e;
          }).map(function (e) {
            return [e.getWidth(), e.getHeight()];
          });
          return c.store.getState().config.isSelfServePub ? ht(t) : t;
        }

        function yt(e) {
          var t = K().split("x");
          return {
            slotID: e.getSlotElementId(),
            slotName: e.getAdUnitPath(),
            sizes: vt(e.getSizes(Number(t[0]), Number(t[1])))
          };
        }

        function It(e) {
          return e.filter(function (e) {
            return 0 !== e.sizes.length;
          });
        }

        function Ot(e) {
          return e || (e = ce()), It(e.map(function (e) {
            return yt(e);
          }));
        }

        function Dt(e, t) {
          var r = !1;
          !0 === c.store.getState().config.simplerGPT && (!(0, d.safeObjectHasProp)(e, "slots") || e.slots.length > 0 && !(0, d.safeObjectHasProp)(e.slots[0], "slotID")) && (0 === ce().length ? ((0, p.reportError)(new Error("fetchBids was called in simplerGPT mode before any slots were defined in GPT"), !0), r = !0, e.slots = []) : (e.slots = Ot(e.slots), 0 === e.slots.length && ((0, p.consoleWarn)(new Error("No GPT slots provided to apstag.fetchBids() had valid sizes"), !0), r = !0)));
          var n,
              o,
              i,
              a = Rt(e.slots);
          a && (e.slots = a);

          try {
            (o = B(o = e.timeout || c.store.getState().config.bidTimeout || c.store.getState().cfg.DEFAULT_TIMEOUT)) || (o = c.store.getState().cfg.DEFAULT_TIMEOUT), "function" != typeof t && (void 0 !== t && (0, p.reportError)(new Error("Invalid callback function provided to apstag.fetchBids"), "__error-invalid_callback_fetchbids_", !0), t = function t() {}), e.bidReqID = (0, d.getRand)(), n = F(Ce(t, e), o);
          } catch (e) {
            (0, p.reportError)(e, "__error-fetchBids__");
          }

          if (0 === e.slots.length) return !1 === r && (0, p.reportError)(new Error("No slots provided to apstag.fetchBids"), "__error-no_slots_provided_bid_request__", !0), void setTimeout(n.bind(null, []), 10);
          if (ut(e.slots.filter(dt).map(xe)), c.store.dispatch({
            type: "NEW_FETCH_BID_REQUEST",
            fid: e.bidReqID,
            pto: o
          }), c.store.dispatch({
            type: "RECORD_ORIGINAL_BID_CONFIG",
            bidConfig: e
          }), (0, d.isDebugEnabled)("fake_bids")) je(e, n);else if (u.HAS_XHR_SUPPORT) {
            if (c.store.dispatch({
              type: "SHOULD_CHUNK_REQUESTS",
              value: (0, d.shouldSample)(c.store.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION)
            }), c.store.getState().experiments.chunkRequests && bt()) {
              i = Tt(e);

              for (var s = 0; s < i.length; s++) {
                i[s].bidReqID = e.bidReqID + "-" + s;
              }

              c.store.dispatch({
                type: "ADD_CHUNKED_REQUESTS",
                fid: e.bidReqID,
                numChunks: i.length
              }), i.forEach(function (e) {
                M(V(e, o), n, e.bidReqID);
              });
            } else M(V(e, o), n, e.bidReqID);
          } else (0, m.loadScriptTag)(V(e, o), n);
        }

        function Tt(e) {
          for (var t = Math.ceil(e.slots.length / c.store.getState().cfg.MAX_SLOTS_PER_REQUEST), r = new Array(t), o = 0; o < t; o++) {
            var i = o * c.store.getState().cfg.MAX_SLOTS_PER_REQUEST;
            r[o] = {
              slots: e.slots.slice(i, i + c.store.getState().cfg.MAX_SLOTS_PER_REQUEST)
            };
          }

          return r.map(function (t) {
            return n({}, e, t);
          });
        }

        function Rt(e) {
          try {
            return e.map(function (e) {
              return e.sizes && (0, d.isArray)(e.sizes) && !(0, d.isArray)(e.sizes[0]) ? n({}, e, {
                sizes: [e.sizes]
              }) : e;
            });
          } catch (e) {
            (0, p.reportError)(e, "__error-adjustSlotArraySizes__");
          }

          return !1;
        }

        function wt(e) {
          e.punt = !0, H(e), G(e);
        }

        function At(e) {
          (0, d.safeObjectHasProp)(c.store.getState().config, "adServer") ? y.isSupported ? (Se(e), ke()) : (0, p.reportError)(new Error("apstag.setDisplayBids called with unsupported ad server: " + c.store.getState().config.adServer), "__error-invalid_ad_server_setdisplaybids__", !0) : (0, p.reportError)(new Error("apstag.setDisplayBids called without specifying ad server"), "__error-no_ad_server_setdisplaybids__", !0);
        }

        function Pt(e, t) {
          switch (e.adServer) {
            case "appNexus":
              y = _.displayAdServerAppNexus;
              break;

            case "googletag":
              y = b.displayAdServerGoogletag;
              break;

            default:
              y = S.displayAdServerDefault;
          }

          var r = W(e);
          ct(), "success" === r && "function" == typeof t && t();
        }

        function Ct() {
          var e = arguments.length <= 0 || void 0 === arguments[0] ? "display" : arguments[0];

          switch (e) {
            case "display":
              return u.DISPLAY_TARGETING_KEYS;

            case "video":
              return u.VIDEO_TARGETING_KEYS;

            default:
              return Z() && (0, d.isArray)(c.store.getState().targetingKeys[e]) ? c.store.getState().targetingKeys[e] : "unknown targeting type " + e;
          }
        }

        function zt(e, t) {
          var r = t;
          return function () {
            return C({
              method: e,
              args: arguments
            }), r.apply(void 0, arguments);
          };
        }

        function Lt(e) {
          return function () {
            try {
              return e.apply(void 0, arguments);
            } catch (t) {
              return (0, p.reportError)(t, e.name), null;
            }
          };
        }

        T.addTimer("tlt");

        try {
          (0, d.safeObjectHasProp)(window, "apstag") && (0, d.safeObjectHasProp)(window.apstag, "_Q") && window.apstag._Q.length > 0 && c.store.dispatch({
            type: "SET_Q",
            Q: window.apstag._Q
          });
        } catch (e) {
          (0, p.reportError)(e, "__error-storeApstagQ__");
        }

        window.apstag = (P = {
          punt: wt,
          init: Pt,
          debug: lt,
          targetingKeys: Ct,
          fetchBids: St,
          setDisplayBids: At,
          renderImp: pt,
          bids: _t
        }, r && (Object.keys(P).forEach(function (e) {
          P[e] = zt(e, P[e]);
        }), (0, g.enableDebugConsole)(!0)), Object.keys(P).forEach(function (e) {
          P[e] = Lt(P[e]);
        }), P), function () {
          try {
            c.store.dispatch({
              type: "SHOULD_SAMPLE_LATENCY",
              value: (0, d.shouldSample)(c.store.getState().cfg.LATENCY_SAMPLING_RATE)
            }), c.store.getState().experiments.shouldSampleLatency && (Fe(), Ke()), et();
          } catch (e) {
            (0, p.reportError)(e, "__error-sampleLatency__");
          }

          try {
            J();
          } catch (e) {
            (0, p.reportError)(e, "__error-doLast__");
          }

          try {
            var e = {};
            e.url = c.store.getState().cfg.CSM_RTB_COMMUNICATOR_JS;

            var t = function t(e) {
              e && "object" !== (void 0 === e ? "undefined" : o(e)) || (e = "Request Timeout or Error"), (0, p.reportError)({
                message: "csm-rtb-comm-js loading failed",
                name: e
              }, "__csm-rtb-comm-js__");
            };

            e.onload = function (e) {
              e.readyState === XMLHttpRequest.DONE && 200 === e.status ? eval(e.responseText) : t(JSON.stringify({
                status: e.statusText,
                response: e.responseXML
              }));
            }, e.onerror = t, e.ontimeout = t, (0, m.xhrGet)(e);
          } catch (e) {
            (0, p.reportError)(e, "__load-csm-rtb-comm-js__");
          }
        }();
      }();
    } catch (e) {
      (0, p.reportError)(e, "__error-global__");
    }
  }, function (e, t, r) {
    e.exports = r(13);
  }]);
};

exports.default = _default;