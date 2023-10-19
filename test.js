__d(function (g, r, i, a, m, e, d) {
  Object.defineProperty(e, "__esModule", {value: true});
  e.setPassword = e.sendCode = e.resetPassword = e.logout = e.login = e.getSecurityKey = e.getRegistrationInfo = e.getAuthKey = void 0;
  var t = r(d[0])(r(d[1])), n = r(d[0])(r(d[2])), u = r(d[0])(r(d[3])), s = r(d[0])(r(d[4])), o = r(d[0])(r(d[5])), c = ["securityKey"], l = ["needEncrypt", "securityKey", "password"];
  e.getRegistrationInfo = function (t) {
    return u.default.async(function (n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", (0, r(d[6]).request)("/accounts/registration_info", {method: "GET", data: t}));
        case 1:
        case "end":
          return n.stop();
      }
    }, null, null, null, Promise);
  };
  e.getAuthKey = function (t) {
    return u.default.async(function (n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", (0, r(d[6]).request)("/oauth2/keys", {method: "POST", data: t}));
        case 1:
        case "end":
          return n.stop();
      }
    }, null, null, null, Promise);
  };
  e.getSecurityKey = function () {
    return u.default.async(function (t) {
      for (;;) switch (t.prev = t.next) {
        case 0:
          return t.abrupt("return", (0, r(d[6]).request)("/system/security/key", {json: false, headers: {"Content-Type": "text/plain"}}));
        case 1:
        case "end":
          return t.stop();
      }
    }, null, null, null, Promise);
  };
  e.sendCode = function (u) {
    var l = u.securityKey, f = (0, n.default)(u, c), p = new s.default;
    p.setPublicKey(l);
    var y = (0, t.default)({}, f), h = p.encrypt(JSON.stringify(y)), P = "";
    Object.keys(f).sort().forEach(function (t) {
      P += t + "=" + f[t];
    });
    var w = (0, r(d[6]).getLocalTimeRegulateStamp)();
    return P = "params" + P + "paramstimestamp" + w + "timestamp", (0, r(d[6]).request)("/aptcha?sign=" + (0, o.default)(P) + "&timestamp=" + w, {method: "POST", data: {data: h}});
  };
  e.login = function (o) {
    var c, f, p, y, h, P, w, v;
    return u.default.async(function (u) {
      for (;;) switch (u.prev = u.next) {
        case 0:
          c = o.needEncrypt, f = o.securityKey, p = o.password, y = (0, n.default)(o, l), h = y, c && ((P = new s.default).setPublicKey(f), w = {password: p}, v = P.encrypt(JSON.stringify(w)), h = (0, t.default)({data: v}, y));
          return u.abrupt("return", (0, r(d[6]).request)("/logins", {method: "POST", data: h}));
        case 4:
        case "end":
          return u.stop();
      }
    }, null, null, null, Promise);
  };
  e.logout = function (t) {
    return u.default.async(function (n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", (0, r(d[6]).request)("/logins", {method: "DELETE", data: t, joinDataToUrl: true}));
        case 1:
        case "end":
          return n.stop();
      }
    }, null, null, null, Promise);
  };
  e.setPassword = function (t) {
    return u.default.async(function (n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.t0 = r(d[6]).request, n.next = 3, u.default.awrap((0, r(d[7]).getLoginId)());
        case 3:
          return n.t1 = n.sent, n.t2 = "/accounts/" + n.t1, n.t3 = n.t2 + "/password", n.t4 = {method: "PATCH", data: t}, n.abrupt("return", (0, n.t0)(n.t3, n.t4));
        case 8:
        case "end":
          return n.stop();
      }
    }, null, null, null, Promise);
  };
  e.resetPassword = function (t) {
    return u.default.async(function (n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", (0, r(d[6]).request)("/accounts/resetPassword", {method: "PUT", data: t}));
        case 1:
        case "end":
          return n.stop();
      }
    }, null, null, null, Promise);
  };
}, 1015, [2, 3, 108, 79, 1016, 1031, 1032, 1004]);

