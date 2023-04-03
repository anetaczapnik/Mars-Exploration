"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* binding */ AbortedDeferredError),
/* harmony export */   "Action": () => (/* binding */ Action),
/* harmony export */   "ErrorResponse": () => (/* binding */ ErrorResponse),
/* harmony export */   "IDLE_BLOCKER": () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   "IDLE_FETCHER": () => (/* binding */ IDLE_FETCHER),
/* harmony export */   "IDLE_NAVIGATION": () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   "UNSAFE_DEFERRED_SYMBOL": () => (/* binding */ UNSAFE_DEFERRED_SYMBOL),
/* harmony export */   "UNSAFE_DeferredData": () => (/* binding */ DeferredData),
/* harmony export */   "UNSAFE_convertRoutesToDataRoutes": () => (/* binding */ convertRoutesToDataRoutes),
/* harmony export */   "UNSAFE_getPathContributingMatches": () => (/* binding */ getPathContributingMatches),
/* harmony export */   "createBrowserHistory": () => (/* binding */ createBrowserHistory),
/* harmony export */   "createHashHistory": () => (/* binding */ createHashHistory),
/* harmony export */   "createMemoryHistory": () => (/* binding */ createMemoryHistory),
/* harmony export */   "createPath": () => (/* binding */ createPath),
/* harmony export */   "createRouter": () => (/* binding */ createRouter),
/* harmony export */   "createStaticHandler": () => (/* binding */ createStaticHandler),
/* harmony export */   "defer": () => (/* binding */ defer),
/* harmony export */   "generatePath": () => (/* binding */ generatePath),
/* harmony export */   "getStaticContextFromError": () => (/* binding */ getStaticContextFromError),
/* harmony export */   "getToPathname": () => (/* binding */ getToPathname),
/* harmony export */   "invariant": () => (/* binding */ invariant),
/* harmony export */   "isRouteErrorResponse": () => (/* binding */ isRouteErrorResponse),
/* harmony export */   "joinPaths": () => (/* binding */ joinPaths),
/* harmony export */   "json": () => (/* binding */ json),
/* harmony export */   "matchPath": () => (/* binding */ matchPath),
/* harmony export */   "matchRoutes": () => (/* binding */ matchRoutes),
/* harmony export */   "normalizePathname": () => (/* binding */ normalizePathname),
/* harmony export */   "parsePath": () => (/* binding */ parsePath),
/* harmony export */   "redirect": () => (/* binding */ redirect),
/* harmony export */   "resolvePath": () => (/* binding */ resolvePath),
/* harmony export */   "resolveTo": () => (/* binding */ resolveTo),
/* harmony export */   "stripBasename": () => (/* binding */ stripBasename),
/* harmony export */   "warning": () => (/* binding */ warning)
/* harmony export */ });
/**
 * @remix-run/router v1.3.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////

/**
 * Actions represent the type of change to a location value.
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

const PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  let {
    initialEntries = ["/"],
    initialIndex,
    v5Compat = false
  } = options;
  let entries; // Declare so we can access from createMemoryLocation

  entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
  let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
  let action = Action.Pop;
  let listener = null;

  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }

  function getCurrentLocation() {
    return entries[index];
  }

  function createMemoryLocation(to, state, key) {
    if (state === void 0) {
      state = null;
    }

    let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
    return location;
  }

  function createHref(to) {
    return typeof to === "string" ? to : createPath(to);
  }

  let history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return getCurrentLocation();
    },

    createHref,

    createURL(to) {
      return new URL(createHref(to), "http://localhost");
    },

    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },

    push(to, state) {
      action = Action.Push;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 1
        });
      }
    },

    replace(to, state) {
      action = Action.Replace;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;

      if (v5Compat && listener) {
        listener({
          action,
          location: nextLocation,
          delta: 0
        });
      }
    },

    go(delta) {
      action = Action.Pop;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;

      if (listener) {
        listener({
          action,
          location: nextLocation,
          delta
        });
      }
    },

    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }

  };
  return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createBrowserLocation(window, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window.location;
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createBrowserHref(window, to) {
    return typeof to === "string" ? to : createPath(to);
  }

  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  function createHashLocation(window, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window.location.hash.substr(1));
    return createLocation("", {
      pathname,
      search,
      hash
    }, // state defaults to `null` because `window.history.state` does
    globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
  }

  function createHashHref(window, to) {
    let base = window.document.querySelector("base");
    let href = "";

    if (base && base.getAttribute("href")) {
      let url = window.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }

  function validateHashLocation(location, to) {
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }

  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

function warning$1(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */


function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
/**
 * Creates a Location object with a unique key from the given Path
 */


function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }

  let location = _extends({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });

  return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */

function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */

function parsePath(path) {
  let parsedPath = {};

  if (path) {
    let hashIndex = path.indexOf("#");

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    let searchIndex = path.indexOf("?");

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}

function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }

  let {
    window = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex(); // Index should only be null when we initialize. If not, it's because the
  // user called history.pushState or history.replaceState directly, in which
  // case we should log a warning as it will result in bugs.

  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends({}, globalHistory.state, {
      idx: index
    }), "");
  }

  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }

  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;

    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }

  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location); // try...catch because iOS limits us to 100 pushState calls :/

    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      // They are going to lose state here, but there is no real
      // way to warn them about it since the page will refresh...
      window.location.assign(url);
    }

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }

  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);

    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }

  function createURL(to) {
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }

  let history = {
    get action() {
      return action;
    },

    get location() {
      return getLocation(window, globalHistory);
    },

    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }

      window.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },

    createHref(to) {
      return createHref(window, to);
    },

    createURL,

    encodeLocation(to) {
      // Encode a Location the same way window.location would
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },

    push,
    replace,

    go(n) {
      return globalHistory.go(n);
    }

  };
  return history;
} //#endregion

var ResultType;

(function (ResultType) {
  ResultType["data"] = "data";
  ResultType["deferred"] = "deferred";
  ResultType["redirect"] = "redirect";
  ResultType["error"] = "error";
})(ResultType || (ResultType = {}));

function isIndexRoute(route) {
  return route.index === true;
} // Walk the route tree generating unique IDs where necessary so we are working
// solely with AgnosticDataRouteObject's within the Router


function convertRoutesToDataRoutes(routes, parentPath, allIds) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  if (allIds === void 0) {
    allIds = new Set();
  }

  return routes.map((route, index) => {
    let treePath = [...parentPath, index];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
    invariant(!allIds.has(id), "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
    allIds.add(id);

    if (isIndexRoute(route)) {
      let indexRoute = _extends({}, route, {
        id
      });

      return indexRoute;
    } else {
      let pathOrLayoutRoute = _extends({}, route, {
        id,
        children: route.children ? convertRoutesToDataRoutes(route.children, treePath, allIds) : undefined
      });

      return pathOrLayoutRoute;
    }
  });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */

function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }

  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);

  if (pathname == null) {
    return null;
  }

  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;

  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(branches[i], // Incoming pathnames are generally encoded from either window.location
    // or from router.navigate, but we want to match against the unencoded
    // paths in the route definitions.  Memory router locations won't be
    // encoded here but there also shouldn't be anything to decode so this
    // should be a safe operation.  This avoids needing matchRoutes to be
    // history-aware.
    safelyDecodeURI(pathname));
  }

  return matches;
}

function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }

  if (parentsMeta === void 0) {
    parentsMeta = [];
  }

  if (parentPath === void 0) {
    parentPath = "";
  }

  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === undefined ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };

    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }

    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta); // Add the children before adding this route to the array so we traverse the
    // route tree depth-first and child routes appear before their parents in
    // the "flattened" version.

    if (route.children && route.children.length > 0) {
      invariant( // Our types know better, but runtime JS may not!
      // @ts-expect-error
      route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
      flattenRoutes(route.children, branches, routesMeta, path);
    } // Routes without a path shouldn't ever match by themselves unless they are
    // index routes, so don't add them to the list of possible branches.


    if (route.path == null && !route.index) {
      return;
    }

    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };

  routes.forEach((route, index) => {
    var _route$path;

    // coarse-grain check for optional params
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */


function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments; // Optional path segments are denoted by a trailing `?`

  let isOptional = first.endsWith("?"); // Compute the corresponding required segment: `foo?` -> `foo`

  let required = first.replace(/\?$/, "");

  if (rest.length === 0) {
    // Intepret empty string as omitting an optional segment
    // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
    return isOptional ? [required, ""] : [required];
  }

  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = []; // All child paths with the prefix.  Do this for all children before the
  // optional version for all children so we get consistent ordering where the
  // parent optional aspect is preferred as required.  Otherwise, we can get
  // child sections interspersed where deeper optional segments are higher than
  // parent optional segments, where for example, /:two would explodes _earlier_
  // then /:one.  By always including the parent as required _for all children_
  // first, we avoid this issue

  result.push(...restExploded.map(subpath => subpath === "" ? required : [required, subpath].join("/"))); // Then if this is an optional value, add all child versions without

  if (isOptional) {
    result.push(...restExploded);
  } // for absolute paths, ensure `/` instead of empty segment


  return result.map(exploded => path.startsWith("/") && exploded === "" ? "/" : exploded);
}

function rankRouteBranches(branches) {
  branches.sort((a, b) => a.score !== b.score ? b.score - a.score // Higher score first
  : compareIndexes(a.routesMeta.map(meta => meta.childrenIndex), b.routesMeta.map(meta => meta.childrenIndex)));
}

const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;

const isSplat = s => s === "*";

function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;

  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }

  if (index) {
    initialScore += indexRouteValue;
  }

  return segments.filter(s => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}

function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? // If two routes are siblings, we should try to match the earlier sibling
  // first. This allows people to have fine-grained control over the matching
  // behavior by simply putting routes with identical paths in the order they
  // want them tried.
  a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
  // so they sort equally.
  0;
}

function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];

  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match) return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });

    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }

  return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */


function generatePath(originalPath, params) {
  if (params === void 0) {
    params = {};
  }

  let path = originalPath;

  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    path = path.replace(/\*$/, "/*");
  }

  return path.replace(/^:(\w+)(\??)/g, (_, key, optional) => {
    let param = params[key];

    if (optional === "?") {
      return param == null ? "" : param;
    }

    if (param == null) {
      invariant(false, "Missing \":" + key + "\" param");
    }

    return param;
  }).replace(/\/:(\w+)(\??)/g, (_, key, optional) => {
    let param = params[key];

    if (optional === "?") {
      return param == null ? "" : "/" + param;
    }

    if (param == null) {
      invariant(false, "Missing \":" + key + "\" param");
    }

    return "/" + param;
  }) // Remove any optional markers from optional static segments
  .replace(/\?/g, "").replace(/(\/?)\*/, (_, prefix, __, str) => {
    const star = "*";

    if (params[star] == null) {
      // If no splat was provided, trim the trailing slash _unless_ it's
      // the entire path
      return str === "/*" ? "/" : "";
    } // Apply the splat


    return "" + prefix + params[star];
  });
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */

function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }

  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    // We need to compute the pathnameBase here using the raw splat value
    // instead of using params["*"] later because it will be decoded then
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }

    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}

function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }

  if (end === void 0) {
    end = true;
  }

  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
  .replace(/^\/*/, "/") // Make sure it has a leading /
  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&") // Escape special regex chars
  .replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });

  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
    : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
  } else if (end) {
    // When matching to the end, ignore trailing slashes
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    // If our path is non-empty and contains anything beyond an initial slash,
    // then we have _some_ form of path in our regex so we should expect to
    // match only if we find the end of this path segment.  Look for an optional
    // non-captured trailing slash (to match a portion of the URL) or the end
    // of the path (if we've matched to the end).  We used to do this with a
    // word boundary but that gives false positives on routes like
    // /user-preferences since `-` counts as a word boundary.
    regexpSource += "(?:(?=\\/|$))";
  } else ;

  let matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
  return [matcher, paramNames];
}

function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
    return value;
  }
}

function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, "The value for the URL param \"" + paramName + "\" will not be decoded because" + (" the string \"" + value + "\" is a malformed URL segment. This is probably") + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
/**
 * @private
 */


function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;

  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  } // We want to leave trailing slash behavior in the user's control, so if they
  // specify a basename with a trailing slash, we should support it


  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);

  if (nextChar && nextChar !== "/") {
    // pathname does not start with basename/
    return null;
  }

  return pathname.slice(startIndex) || "/";
}
/**
 * @private
 */

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging @remix-run/router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */

function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }

  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}

function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach(segment => {
    if (segment === "..") {
      // Keep the root "" segment so the pathname starts at /
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}

function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */


function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
 * @private
 */

function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }

  let to;

  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }

  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from; // Routing is relative to the current pathname if explicitly requested.
  //
  // If a pathname is explicitly provided in `to`, it should be relative to the
  // route context. This is explained in `Note on `<Link to>` values` in our
  // migration guide from v5 as a means of disambiguation between `to` values
  // that begin with `/` and those that do not. However, this is problematic for
  // `to` values that do not provide a pathname. `to` can simply be a search or
  // hash string, in which case we should assume that the navigation is relative
  // to the current location's pathname and *not* the route pathname.

  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;

    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/"); // Each leading .. segment means "go up one route" instead of "go up one
      // URL segment".  This is a key difference from how <a href> works and a
      // major reason we call this a "to" value instead of a "href".

      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }

      to.pathname = toSegments.join("/");
    } // If there are more ".." segments than parent routes, resolve relative to
    // the root / URL.


    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }

  let path = resolvePath(to, from); // Ensure the pathname has a trailing slash if the original "to" had one

  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/"); // Or if this was a link to the current path which has a trailing slash

  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");

  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }

  return path;
}
/**
 * @private
 */

function getToPathname(to) {
  // Empty strings should be treated the same as / paths
  return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */

const joinPaths = paths => paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */

const normalizePathname = pathname => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */

const normalizeSearch = search => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */

const normalizeHash = hash => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */

const json = function json(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  let headers = new Headers(responseInit.headers);

  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }

  return new Response(JSON.stringify(data), _extends({}, responseInit, {
    headers
  }));
};
class AbortedDeferredError extends Error {}
class DeferredData {
  constructor(data, responseInit) {
    this.pendingKeysSet = new Set();
    this.subscribers = new Set();
    this.deferredKeys = [];
    invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects"); // Set up an AbortController + Promise we can race against to exit early
    // cancellation

    let reject;
    this.abortPromise = new Promise((_, r) => reject = r);
    this.controller = new AbortController();

    let onAbort = () => reject(new AbortedDeferredError("Deferred data aborted"));

    this.unlistenAbortSignal = () => this.controller.signal.removeEventListener("abort", onAbort);

    this.controller.signal.addEventListener("abort", onAbort);
    this.data = Object.entries(data).reduce((acc, _ref) => {
      let [key, value] = _ref;
      return Object.assign(acc, {
        [key]: this.trackPromise(key, value)
      });
    }, {});

    if (this.done) {
      // All incoming values were resolved
      this.unlistenAbortSignal();
    }

    this.init = responseInit;
  }

  trackPromise(key, value) {
    if (!(value instanceof Promise)) {
      return value;
    }

    this.deferredKeys.push(key);
    this.pendingKeysSet.add(key); // We store a little wrapper promise that will be extended with
    // _data/_error props upon resolve/reject

    let promise = Promise.race([value, this.abortPromise]).then(data => this.onSettle(promise, key, null, data), error => this.onSettle(promise, key, error)); // Register rejection listeners to avoid uncaught promise rejections on
    // errors or aborted deferred values

    promise.catch(() => {});
    Object.defineProperty(promise, "_tracked", {
      get: () => true
    });
    return promise;
  }

  onSettle(promise, key, error, data) {
    if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
      this.unlistenAbortSignal();
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      return Promise.reject(error);
    }

    this.pendingKeysSet.delete(key);

    if (this.done) {
      // Nothing left to abort!
      this.unlistenAbortSignal();
    }

    if (error) {
      Object.defineProperty(promise, "_error", {
        get: () => error
      });
      this.emit(false, key);
      return Promise.reject(error);
    }

    Object.defineProperty(promise, "_data", {
      get: () => data
    });
    this.emit(false, key);
    return data;
  }

  emit(aborted, settledKey) {
    this.subscribers.forEach(subscriber => subscriber(aborted, settledKey));
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  cancel() {
    this.controller.abort();
    this.pendingKeysSet.forEach((v, k) => this.pendingKeysSet.delete(k));
    this.emit(true);
  }

  async resolveData(signal) {
    let aborted = false;

    if (!this.done) {
      let onAbort = () => this.cancel();

      signal.addEventListener("abort", onAbort);
      aborted = await new Promise(resolve => {
        this.subscribe(aborted => {
          signal.removeEventListener("abort", onAbort);

          if (aborted || this.done) {
            resolve(aborted);
          }
        });
      });
    }

    return aborted;
  }

  get done() {
    return this.pendingKeysSet.size === 0;
  }

  get unwrappedData() {
    invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
    return Object.entries(this.data).reduce((acc, _ref2) => {
      let [key, value] = _ref2;
      return Object.assign(acc, {
        [key]: unwrapTrackedPromise(value)
      });
    }, {});
  }

  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }

}

function isTrackedPromise(value) {
  return value instanceof Promise && value._tracked === true;
}

function unwrapTrackedPromise(value) {
  if (!isTrackedPromise(value)) {
    return value;
  }

  if (value._error) {
    throw value._error;
  }

  return value._data;
}

const defer = function defer(data, init) {
  if (init === void 0) {
    init = {};
  }

  let responseInit = typeof init === "number" ? {
    status: init
  } : init;
  return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */

const redirect = function redirect(url, init) {
  if (init === void 0) {
    init = 302;
  }

  let responseInit = init;

  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }

  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, _extends({}, responseInit, {
    headers
  }));
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 */

class ErrorResponse {
  constructor(status, statusText, data, internal) {
    if (internal === void 0) {
      internal = false;
    }

    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;

    if (data instanceof Error) {
      this.data = data.toString();
      this.error = data;
    } else {
      this.data = data;
    }
  }

}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */

function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

const validMutationMethodsArr = ["post", "put", "patch", "delete"];
const validMutationMethods = new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
const validRequestMethods = new Set(validRequestMethodsArr);
const redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
const redirectPreserveMethodStatusCodes = new Set([307, 308]);
const IDLE_NAVIGATION = {
  state: "idle",
  location: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_FETCHER = {
  state: "idle",
  data: undefined,
  formMethod: undefined,
  formAction: undefined,
  formEncType: undefined,
  formData: undefined
};
const IDLE_BLOCKER = {
  state: "unblocked",
  proceed: undefined,
  reset: undefined,
  location: undefined
};
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const isServer = !isBrowser; //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////

/**
 * Create a router and listen to history POP navigations
 */

function createRouter(init) {
  invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let dataRoutes = convertRoutesToDataRoutes(init.routes); // Cleanup function for history

  let unlistenHistory = null; // Externally-provided functions to call on all state changes

  let subscribers = new Set(); // Externally-provided object to hold scroll restoration locations during routing

  let savedScrollPositions = null; // Externally-provided function to get scroll restoration keys

  let getScrollRestorationKey = null; // Externally-provided function to get current scroll position

  let getScrollPosition = null; // One-time flag to control the initial hydration scroll restoration.  Because
  // we don't get the saved positions from <ScrollRestoration /> until _after_
  // the initial render, we need to manually trigger a separate updateState to
  // send along the restoreScrollPosition
  // Set to true if we have `hydrationData` since we assume we were SSR'd and that
  // SSR did the initial scroll restoration.

  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, init.basename);
  let initialErrors = null;

  if (initialMatches == null) {
    // If we do not match a user-provided-route, fall back to the root
    // to allow the error boundary to take over
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let {
      matches,
      route
    } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = {
      [route.id]: error
    };
  }

  let initialized = !initialMatches.some(m => m.route.loader) || init.hydrationData != null;
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: new Map(),
    blockers: new Map()
  }; // -- Stateful internal variables to manage navigations --
  // Current navigation in progress (to be committed in completeNavigation)

  let pendingAction = Action.Pop; // Should the current navigation prevent the scroll reset if scroll cannot
  // be restored?

  let pendingPreventScrollReset = false; // AbortController for the active navigation

  let pendingNavigationController; // We use this to avoid touching history in completeNavigation if a
  // revalidation is entirely uninterrupted

  let isUninterruptedRevalidation = false; // Use this internal flag to force revalidation of all loaders:
  //  - submissions (completed or interrupted)
  //  - useRevalidate()
  //  - X-Remix-Revalidate (from redirect)

  let isRevalidationRequired = false; // Use this internal array to capture routes that require revalidation due
  // to a cancelled deferred on action submission

  let cancelledDeferredRoutes = []; // Use this internal array to capture fetcher loads that were cancelled by an
  // action navigation and require revalidation

  let cancelledFetcherLoads = []; // AbortControllers for any in-flight fetchers

  let fetchControllers = new Map(); // Track loads based on the order in which they started

  let incrementingLoadId = 0; // Track the outstanding pending navigation data load to be compared against
  // the globally incrementing load when a fetcher load lands after a completed
  // navigation

  let pendingNavigationLoadId = -1; // Fetchers that triggered data reloads as a result of their actions

  let fetchReloadIds = new Map(); // Fetchers that triggered redirect navigations from their actions

  let fetchRedirectIds = new Set(); // Most recent href/match for fetcher.load calls for fetchers

  let fetchLoadMatches = new Map(); // Store DeferredData instances for active route matches.  When a
  // route loader returns defer() we stick one in here.  Then, when a nested
  // promise resolves we update loaderData.  If a new navigation starts we
  // cancel active deferreds for eliminated routes.

  let activeDeferreds = new Map(); // Store blocker functions in a separate Map outside of router state since
  // we don't need to update UI state if they change

  let blockerFunctions = new Map(); // Flag to ignore the next history update, so we can revert the URL change on
  // a POP navigation that was blocked by the user without touching router state

  let ignoreNextHistoryUpdate = false; // Initialize the router, all side effects should be kicked off from here.
  // Implemented as a Fluent API for ease of:
  //   let router = createRouter(init).initialize();

  function initialize() {
    // If history informs us of a POP navigation, start the navigation but do not update
    // state.  We'll update our own state once the navigation completes
    unlistenHistory = init.history.listen(_ref => {
      let {
        action: historyAction,
        location,
        delta
      } = _ref;

      // Ignore this event if it was just us resetting the URL from a
      // blocked POP navigation
      if (ignoreNextHistoryUpdate) {
        ignoreNextHistoryUpdate = false;
        return;
      }

      warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
      let blockerKey = shouldBlockNavigation({
        currentLocation: state.location,
        nextLocation: location,
        historyAction
      });

      if (blockerKey && delta != null) {
        // Restore the URL to match the current UI, but don't update router state
        ignoreNextHistoryUpdate = true;
        init.history.go(delta * -1); // Put the blocker into a blocked state

        updateBlocker(blockerKey, {
          state: "blocked",
          location,

          proceed() {
            updateBlocker(blockerKey, {
              state: "proceeding",
              proceed: undefined,
              reset: undefined,
              location
            }); // Re-do the same POP navigation we just blocked

            init.history.go(delta);
          },

          reset() {
            deleteBlocker(blockerKey);
            updateState({
              blockers: new Map(router.state.blockers)
            });
          }

        });
        return;
      }

      return startNavigation(historyAction, location);
    }); // Kick off initial data load if needed.  Use Pop to avoid modifying history

    if (!state.initialized) {
      startNavigation(Action.Pop, state.location);
    }

    return router;
  } // Clean up a router and it's side effects


  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }

    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  } // Subscribe to state updates for the router


  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  } // Update our state and notify the calling context of the change


  function updateState(newState) {
    state = _extends({}, state, newState);
    subscribers.forEach(subscriber => subscriber(state));
  } // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
  // and setting state.[historyAction/location/matches] to the new route.
  // - Location is a required param
  // - Navigation will always be set to IDLE_NAVIGATION
  // - Can pass any other state in newState


  function completeNavigation(location, newState) {
    var _location$state, _location$state2;

    // Deduce if we're in a loading/actionReload state:
    // - We have committed actionData in the store
    // - The current navigation was a mutation submission
    // - We're past the submitting state and into the loading state
    // - The location being loaded is not the result of a redirect
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
    let actionData;

    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        // Empty actionData -> clear prior actionData due to an action error
        actionData = null;
      }
    } else if (isActionReload) {
      // Keep the current data if we're wrapping up the action reload
      actionData = state.actionData;
    } else {
      // Clear actionData on any other completed navigations
      actionData = null;
    } // Always preserve any existing loaderData from re-used routes


    let loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData; // On a successful navigation we can assume we got through all blockers
    // so we can start fresh

    for (let [key] of blockerFunctions) {
      deleteBlocker(key);
    } // Always respect the user flag.  Otherwise don't reset on mutation
    // submission navigations unless they redirect


    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
    updateState(_extends({}, newState, {
      actionData,
      loaderData,
      historyAction: pendingAction,
      location,
      initialized: true,
      navigation: IDLE_NAVIGATION,
      revalidation: "idle",
      restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
      preventScrollReset,
      blockers: new Map(state.blockers)
    }));

    if (isUninterruptedRevalidation) ; else if (pendingAction === Action.Pop) ; else if (pendingAction === Action.Push) {
      init.history.push(location, location.state);
    } else if (pendingAction === Action.Replace) {
      init.history.replace(location, location.state);
    } // Reset stateful navigation vars


    pendingAction = Action.Pop;
    pendingPreventScrollReset = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    cancelledDeferredRoutes = [];
    cancelledFetcherLoads = [];
  } // Trigger a navigation event, which can either be a numerical POP or a PUSH
  // replace with an optional submission


  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }

    let {
      path,
      submission,
      error
    } = normalizeNavigateOptions(to, opts);
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state); // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
    // URL from window.location, so we need to encode it here so the behavior
    // remains the same as POP and non-data-router usages.  new URL() does all
    // the same encoding we'd get from a history.pushState/window.location read
    // without having to touch history

    nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
    let userReplace = opts && opts.replace != null ? opts.replace : undefined;
    let historyAction = Action.Push;

    if (userReplace === true) {
      historyAction = Action.Replace;
    } else if (userReplace === false) ; else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      // By default on submissions to the current location we REPLACE so that
      // users don't have to double-click the back button to get to the prior
      // location.  If the user redirects to a different location from the
      // action/loader this will be ignored and the redirect will be a PUSH
      historyAction = Action.Replace;
    }

    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });

    if (blockerKey) {
      // Put the blocker into a blocked state
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,

        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: undefined,
            reset: undefined,
            location: nextLocation
          }); // Send the same navigation through

          navigate(to, opts);
        },

        reset() {
          deleteBlocker(blockerKey);
          updateState({
            blockers: new Map(state.blockers)
          });
        }

      });
      return;
    }

    return await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace
    });
  } // Revalidate all current loaders.  If a navigation is in progress or if this
  // is interrupted by a navigation, allow this to "succeed" by calling all
  // loaders during the next loader round


  function revalidate() {
    interruptActiveLoads();
    updateState({
      revalidation: "loading"
    }); // If we're currently submitting an action, we don't need to start a new
    // navigation, we'll just let the follow up loader execution call all loaders

    if (state.navigation.state === "submitting") {
      return;
    } // If we're currently in an idle state, start a new navigation for the current
    // action/location and mark it as uninterrupted, which will skip the history
    // update in completeNavigation


    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return;
    } // Otherwise, if we're currently in a loading state, just start a new
    // navigation to the navigation.location but do not trigger an uninterrupted
    // revalidation so that history correctly updates once the navigation completes


    startNavigation(pendingAction || state.historyAction, state.navigation.location, {
      overrideNavigation: state.navigation
    });
  } // Start a navigation to the given action/location.  Can optionally provide a
  // overrideNavigation which will override the normalLoad in the case of a redirect
  // navigation


  async function startNavigation(historyAction, location, opts) {
    // Abort any in-progress navigations and start a new one. Unset any ongoing
    // uninterrupted revalidations unless told otherwise, since we want this
    // new navigation to update history normally
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true; // Save the current scroll position every time we start a new navigation,
    // and track whether we should reset scroll on completion

    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = matchRoutes(dataRoutes, location, init.basename); // Short circuit with a 404 on the root error boundary if we match nothing

    if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes); // Cancel all pending deferred on 404s since we don't keep any routes

      cancelActiveDeferreds();
      completeNavigation(location, {
        matches: notFoundMatches,
        loaderData: {},
        errors: {
          [route.id]: error
        }
      });
      return;
    } // Short circuit if it's only a hash change and not a mutation submission
    // For example, on /page#hash and submit a <Form method="post"> which will
    // default to a navigation to /page


    if (isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, {
        matches
      });
      return;
    } // Create a controller/Request for this navigation


    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
    let pendingActionData;
    let pendingError;

    if (opts && opts.pendingError) {
      // If we have a pendingError, it means the user attempted a GET submission
      // with binary FormData so assign here and skip to handleLoaders.  That
      // way we handle calling loaders above the boundary etc.  It's not really
      // different from an actionError in that sense.
      pendingError = {
        [findNearestBoundary(matches).route.id]: opts.pendingError
      };
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      // Call action if we received an action submission
      let actionOutput = await handleAction(request, location, opts.submission, matches, {
        replace: opts.replace
      });

      if (actionOutput.shortCircuited) {
        return;
      }

      pendingActionData = actionOutput.pendingActionData;
      pendingError = actionOutput.pendingActionError;

      let navigation = _extends({
        state: "loading",
        location
      }, opts.submission);

      loadingNavigation = navigation; // Create a GET request for the loaders

      request = new Request(request.url, {
        signal: request.signal
      });
    } // Call loaders


    let {
      shortCircuited,
      loaderData,
      errors
    } = await handleLoaders(request, location, matches, loadingNavigation, opts && opts.submission, opts && opts.replace, pendingActionData, pendingError);

    if (shortCircuited) {
      return;
    } // Clean up now that the action/loaders have completed.  Don't clean up if
    // we short circuited because pendingNavigationController will have already
    // been assigned to a new controller for the next navigation


    pendingNavigationController = null;
    completeNavigation(location, _extends({
      matches
    }, pendingActionData ? {
      actionData: pendingActionData
    } : {}, {
      loaderData,
      errors
    }));
  } // Call the action matched by the leaf route for this navigation and handle
  // redirects/errors


  async function handleAction(request, location, submission, matches, opts) {
    interruptActiveLoads(); // Put us in a submitting state

    let navigation = _extends({
      state: "submitting",
      location
    }, submission);

    updateState({
      navigation
    }); // Call our action and get the result

    let result;
    let actionMatch = getTargetMatch(matches, location);

    if (!actionMatch.route.action) {
      result = {
        type: ResultType.error,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, router.basename);

      if (request.signal.aborted) {
        return {
          shortCircuited: true
        };
      }
    }

    if (isRedirectResult(result)) {
      let replace;

      if (opts && opts.replace != null) {
        replace = opts.replace;
      } else {
        // If the user didn't explicity indicate replace behavior, replace if
        // we redirected to the exact same location we're currently at to avoid
        // double back-buttons
        replace = result.location === state.location.pathname + state.location.search;
      }

      await startRedirectNavigation(state, result, {
        submission,
        replace
      });
      return {
        shortCircuited: true
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id); // By default, all submissions are REPLACE navigations, but if the
      // action threw an error that'll be rendered in an errorElement, we fall
      // back to PUSH so that the user can use the back button to get back to
      // the pre-submission form location to try again

      if ((opts && opts.replace) !== true) {
        pendingAction = Action.Push;
      }

      return {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [boundaryMatch.route.id]: result.error
        }
      };
    }

    if (isDeferredResult(result)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    }

    return {
      pendingActionData: {
        [actionMatch.route.id]: result.data
      }
    };
  } // Call all applicable loaders for the given matches, handling redirects,
  // errors, etc.


  async function handleLoaders(request, location, matches, overrideNavigation, submission, replace, pendingActionData, pendingError) {
    // Figure out the right navigation we want to use for data loading
    let loadingNavigation = overrideNavigation;

    if (!loadingNavigation) {
      let navigation = _extends({
        state: "loading",
        location,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined
      }, submission);

      loadingNavigation = navigation;
    } // If this was a redirect from an action we don't have a "submission" but
    // we have it on the loading navigation so use that if available


    let activeSubmission = submission ? submission : loadingNavigation.formMethod && loadingNavigation.formAction && loadingNavigation.formData && loadingNavigation.formEncType ? {
      formMethod: loadingNavigation.formMethod,
      formAction: loadingNavigation.formAction,
      formData: loadingNavigation.formData,
      formEncType: loadingNavigation.formEncType
    } : undefined;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches); // Cancel pending deferreds for no-longer-matched routes or routes we're
    // about to reload.  Note that if this is an action reload we would have
    // already cancelled all pending deferreds so this would be a no-op

    cancelActiveDeferreds(routeId => !(matches && matches.some(m => m.route.id === routeId)) || matchesToLoad && matchesToLoad.some(m => m.route.id === routeId)); // Short circuit if we have no loaders to run

    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      completeNavigation(location, _extends({
        matches,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: pendingError || null
      }, pendingActionData ? {
        actionData: pendingActionData
      } : {}));
      return {
        shortCircuited: true
      };
    } // If this is an uninterrupted revalidation, we remain in our current idle
    // state.  If not, we need to switch to our loading state and load data,
    // preserving any new action data or existing action data (in the case of
    // a revalidation interrupting an actionReload)


    if (!isUninterruptedRevalidation) {
      revalidatingFetchers.forEach(rf => {
        let fetcher = state.fetchers.get(rf.key);
        let revalidatingFetcher = {
          state: "loading",
          data: fetcher && fetcher.data,
          formMethod: undefined,
          formAction: undefined,
          formEncType: undefined,
          formData: undefined,
          " _hasFetcherDoneAnything ": true
        };
        state.fetchers.set(rf.key, revalidatingFetcher);
      });
      let actionData = pendingActionData || state.actionData;
      updateState(_extends({
        navigation: loadingNavigation
      }, actionData ? Object.keys(actionData).length === 0 ? {
        actionData: null
      } : {
        actionData
      } : {}, revalidatingFetchers.length > 0 ? {
        fetchers: new Map(state.fetchers)
      } : {}));
    }

    pendingNavigationLoadId = ++incrementingLoadId;
    revalidatingFetchers.forEach(rf => fetchControllers.set(rf.key, pendingNavigationController));
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, request);

    if (request.signal.aborted) {
      return {
        shortCircuited: true
      };
    } // Clean up _after_ loaders have completed.  Don't clean up if we short
    // circuited because fetchControllers would have been aborted and
    // reassigned to new controllers for the next navigation


    revalidatingFetchers.forEach(rf => fetchControllers.delete(rf.key)); // If any loaders returned a redirect Response, start a new REPLACE navigation

    let redirect = findRedirect(results);

    if (redirect) {
      await startRedirectNavigation(state, redirect, {
        replace
      });
      return {
        shortCircuited: true
      };
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, matches, matchesToLoad, loaderResults, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds); // Wire up subscribers to update loaderData as promises settle

    activeDeferreds.forEach((deferredData, routeId) => {
      deferredData.subscribe(aborted => {
        // Note: No need to updateState here since the TrackedPromise on
        // loaderData is stable across resolve/reject
        // Remove this instance if we were aborted or if promises have settled
        if (aborted || deferredData.done) {
          activeDeferreds.delete(routeId);
        }
      });
    });
    markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    return _extends({
      loaderData,
      errors
    }, didAbortFetchLoads || revalidatingFetchers.length > 0 ? {
      fetchers: new Map(state.fetchers)
    } : {});
  }

  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  } // Trigger a fetcher load/submit for the given fetcher key


  function fetch(key, routeId, href, opts) {
    if (isServer) {
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
    }

    if (fetchControllers.has(key)) abortFetcher(key);
    let matches = matchRoutes(dataRoutes, href, init.basename);

    if (!matches) {
      setFetcherError(key, routeId, getInternalRouterError(404, {
        pathname: href
      }));
      return;
    }

    let {
      path,
      submission
    } = normalizeNavigateOptions(href, opts, true);
    let match = getTargetMatch(matches, path);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;

    if (submission && isMutationMethod(submission.formMethod)) {
      handleFetcherAction(key, routeId, path, match, matches, submission);
      return;
    } // Store off the match so we can call it's shouldRevalidate on subsequent
    // revalidations


    fetchLoadMatches.set(key, {
      routeId,
      path,
      match,
      matches
    });
    handleFetcherLoader(key, routeId, path, match, matches, submission);
  } // Call the action for the matched fetcher.submit(), and then handle redirects,
  // errors, and revalidation


  async function handleFetcherAction(key, routeId, path, match, requestMatches, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);

    if (!match.route.action) {
      let error = getInternalRouterError(405, {
        method: submission.formMethod,
        pathname: path,
        routeId: routeId
      });
      setFetcherError(key, routeId, error);
      return;
    } // Put this fetcher into it's submitting state


    let existingFetcher = state.fetchers.get(key);

    let fetcher = _extends({
      state: "submitting"
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, fetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the action for the fetcher

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
    fetchControllers.set(key, abortController);
    let actionResult = await callLoaderOrAction("action", fetchRequest, match, requestMatches, router.basename);

    if (fetchRequest.signal.aborted) {
      // We can delete this so long as we weren't aborted by ou our own fetcher
      // re-submit which would have put _new_ controller is in fetchControllers
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }

      return;
    }

    if (isRedirectResult(actionResult)) {
      fetchControllers.delete(key);
      fetchRedirectIds.add(key);

      let loadingFetcher = _extends({
        state: "loading"
      }, submission, {
        data: undefined,
        " _hasFetcherDoneAnything ": true
      });

      state.fetchers.set(key, loadingFetcher);
      updateState({
        fetchers: new Map(state.fetchers)
      });
      return startRedirectNavigation(state, actionResult, {
        isFetchActionRedirect: true
      });
    } // Process any non-redirect errors thrown


    if (isErrorResult(actionResult)) {
      setFetcherError(key, routeId, actionResult.error);
      return;
    }

    if (isDeferredResult(actionResult)) {
      throw getInternalRouterError(400, {
        type: "defer-action"
      });
    } // Start the data load for current matches, or the next location if we're
    // in the middle of a navigation


    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
    let matches = state.navigation.state !== "idle" ? matchRoutes(dataRoutes, state.navigation.location, init.basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);

    let loadFetcher = _extends({
      state: "loading",
      data: actionResult.data
    }, submission, {
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, {
      [match.route.id]: actionResult.data
    }, undefined, // No need to send through errors since we short circuit above
    fetchLoadMatches); // Put all revalidating fetchers into the loading state, except for the
    // current fetcher which we want to keep in it's current loading state which
    // contains it's action submission info + action data

    revalidatingFetchers.filter(rf => rf.key !== key).forEach(rf => {
      let staleKey = rf.key;
      let existingFetcher = state.fetchers.get(staleKey);
      let revalidatingFetcher = {
        state: "loading",
        data: existingFetcher && existingFetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(staleKey, revalidatingFetcher);
      fetchControllers.set(staleKey, abortController);
    });
    updateState({
      fetchers: new Map(state.fetchers)
    });
    let {
      results,
      loaderResults,
      fetcherResults
    } = await callLoadersAndMaybeResolveData(state.matches, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);

    if (abortController.signal.aborted) {
      return;
    }

    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach(r => fetchControllers.delete(r.key));
    let redirect = findRedirect(results);

    if (redirect) {
      return startRedirectNavigation(state, redirect);
    } // Process and commit output from loaders


    let {
      loaderData,
      errors
    } = processLoaderData(state, state.matches, matchesToLoad, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
    let doneFetcher = {
      state: "idle",
      data: actionResult.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    let didAbortFetchLoads = abortStaleFetchLoads(loadId); // If we are currently in a navigation loading state and this fetcher is
    // more recent than the navigation, we want the newer data so abort the
    // navigation and complete it with the fetcher data

    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      // otherwise just update with the fetcher data, preserving any existing
      // loaderData for loaders that did not need to reload.  We have to
      // manually merge here since we aren't going through completeNavigation
      updateState(_extends({
        errors,
        loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors)
      }, didAbortFetchLoads ? {
        fetchers: new Map(state.fetchers)
      } : {}));
      isRevalidationRequired = false;
    }
  } // Call the matched loader for fetcher.load(), handling redirects, errors, etc.


  async function handleFetcherLoader(key, routeId, path, match, matches, submission) {
    let existingFetcher = state.fetchers.get(key); // Put this fetcher into it's loading state

    let loadingFetcher = _extends({
      state: "loading",
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined
    }, submission, {
      data: existingFetcher && existingFetcher.data,
      " _hasFetcherDoneAnything ": true
    });

    state.fetchers.set(key, loadingFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    }); // Call the loader for this fetcher route match

    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
    fetchControllers.set(key, abortController);
    let result = await callLoaderOrAction("loader", fetchRequest, match, matches, router.basename); // Deferred isn't supported for fetcher loads, await everything and treat it
    // as a normal load.  resolveDeferredData will return undefined if this
    // fetcher gets aborted, so we just leave result untouched and short circuit
    // below if that happens

    if (isDeferredResult(result)) {
      result = (await resolveDeferredData(result, fetchRequest.signal, true)) || result;
    } // We can delete this so long as we weren't aborted by ou our own fetcher
    // re-load which would have put _new_ controller is in fetchControllers


    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }

    if (fetchRequest.signal.aborted) {
      return;
    } // If the loader threw a redirect Response, start a new REPLACE navigation


    if (isRedirectResult(result)) {
      await startRedirectNavigation(state, result);
      return;
    } // Process any non-redirect errors thrown


    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, routeId);
      state.fetchers.delete(key); // TODO: In remix, this would reset to IDLE_NAVIGATION if it was a catch -
      // do we need to behave any differently with our non-redirect errors?
      // What if it was a non-redirect Response?

      updateState({
        fetchers: new Map(state.fetchers),
        errors: {
          [boundaryMatch.route.id]: result.error
        }
      });
      return;
    }

    invariant(!isDeferredResult(result), "Unhandled fetcher deferred data"); // Put the fetcher back into an idle state

    let doneFetcher = {
      state: "idle",
      data: result.data,
      formMethod: undefined,
      formAction: undefined,
      formEncType: undefined,
      formData: undefined,
      " _hasFetcherDoneAnything ": true
    };
    state.fetchers.set(key, doneFetcher);
    updateState({
      fetchers: new Map(state.fetchers)
    });
  }
  /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */


  async function startRedirectNavigation(state, redirect, _temp) {
    var _window;

    let {
      submission,
      replace,
      isFetchActionRedirect
    } = _temp === void 0 ? {} : _temp;

    if (redirect.revalidate) {
      isRevalidationRequired = true;
    }

    let redirectLocation = createLocation(state.location, redirect.location, // TODO: This can be removed once we get rid of useTransition in Remix v2
    _extends({
      _isRedirect: true
    }, isFetchActionRedirect ? {
      _isFetchActionRedirect: true
    } : {}));
    invariant(redirectLocation, "Expected a location on the redirect navigation"); // Check if this an absolute external redirect that goes to a new origin

    if (ABSOLUTE_URL_REGEX.test(redirect.location) && isBrowser && typeof ((_window = window) == null ? void 0 : _window.location) !== "undefined") {
      let newOrigin = init.history.createURL(redirect.location).origin;

      if (window.location.origin !== newOrigin) {
        if (replace) {
          window.location.replace(redirect.location);
        } else {
          window.location.assign(redirect.location);
        }

        return;
      }
    } // There's no need to abort on redirects, since we don't detect the
    // redirect until the action/loaders have settled


    pendingNavigationController = null;
    let redirectHistoryAction = replace === true ? Action.Replace : Action.Push; // Use the incoming submission if provided, fallback on the active one in
    // state.navigation

    let {
      formMethod,
      formAction,
      formEncType,
      formData
    } = state.navigation;

    if (!submission && formMethod && formAction && formData && formEncType) {
      submission = {
        formMethod,
        formAction,
        formEncType,
        formData
      };
    } // If this was a 307/308 submission we want to preserve the HTTP method and
    // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
    // redirected location


    if (redirectPreserveMethodStatusCodes.has(redirect.status) && submission && isMutationMethod(submission.formMethod)) {
      await startNavigation(redirectHistoryAction, redirectLocation, {
        submission: _extends({}, submission, {
          formAction: redirect.location
        }),
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    } else {
      // Otherwise, we kick off a new loading navigation, preserving the
      // submission info for the duration of this navigation
      await startNavigation(redirectHistoryAction, redirectLocation, {
        overrideNavigation: {
          state: "loading",
          location: redirectLocation,
          formMethod: submission ? submission.formMethod : undefined,
          formAction: submission ? submission.formAction : undefined,
          formEncType: submission ? submission.formEncType : undefined,
          formData: submission ? submission.formData : undefined
        },
        // Preserve this flag across redirects
        preventScrollReset: pendingPreventScrollReset
      });
    }
  }

  async function callLoadersAndMaybeResolveData(currentMatches, matches, matchesToLoad, fetchersToLoad, request) {
    // Call all navigation loaders and revalidating fetcher loaders in parallel,
    // then slice off the results into separate arrays so we can handle them
    // accordingly
    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, router.basename)), ...fetchersToLoad.map(f => callLoaderOrAction("loader", createClientSideRequest(init.history, f.path, request.signal), f.match, f.matches, router.basename))]);
    let loaderResults = results.slice(0, matchesToLoad.length);
    let fetcherResults = results.slice(matchesToLoad.length);
    await Promise.all([resolveDeferredResults(currentMatches, matchesToLoad, loaderResults, request.signal, false, state.loaderData), resolveDeferredResults(currentMatches, fetchersToLoad.map(f => f.match), fetcherResults, request.signal, true)]);
    return {
      results,
      loaderResults,
      fetcherResults
    };
  }

  function interruptActiveLoads() {
    // Every interruption triggers a revalidation
    isRevalidationRequired = true; // Cancel pending route-level deferreds and mark cancelled routes for
    // revalidation

    cancelledDeferredRoutes.push(...cancelActiveDeferreds()); // Abort in-flight fetcher loads

    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.push(key);
        abortFetcher(key);
      }
    });
  }

  function setFetcherError(key, routeId, error) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState({
      errors: {
        [boundaryMatch.route.id]: error
      },
      fetchers: new Map(state.fetchers)
    });
  }

  function deleteFetcher(key) {
    if (fetchControllers.has(key)) abortFetcher(key);
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    state.fetchers.delete(key);
  }

  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, "Expected fetch controller: " + key);
    controller.abort();
    fetchControllers.delete(key);
  }

  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        data: fetcher.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  function markFetchRedirectsDone() {
    let doneKeys = [];

    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, "Expected fetcher: " + key);

      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
      }
    }

    markFetchersDone(doneKeys);
  }

  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];

    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, "Expected fetcher: " + key);

        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }

    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }

  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;

    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }

    return blocker;
  }

  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  } // Utility function to update blockers, ensuring valid state transitions


  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER; // Poor mans state machine :)
    // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM

    invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
    state.blockers.set(key, newBlocker);
    updateState({
      blockers: new Map(state.blockers)
    });
  }

  function shouldBlockNavigation(_ref2) {
    let {
      currentLocation,
      nextLocation,
      historyAction
    } = _ref2;

    if (blockerFunctions.size === 0) {
      return;
    } // We ony support a single active blocker at the moment since we don't have
    // any compelling use cases for multi-blocker yet


    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }

    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);

    if (blocker && blocker.state === "proceeding") {
      // If the blocker is currently proceeding, we don't need to re-check
      // it and can let this navigation continue
      return;
    } // At this point, we know we're unblocked/blocked so we need to check the
    // user-provided blocker function


    if (blockerFunction({
      currentLocation,
      nextLocation,
      historyAction
    })) {
      return blockerKey;
    }
  }

  function cancelActiveDeferreds(predicate) {
    let cancelledRouteIds = [];
    activeDeferreds.forEach((dfd, routeId) => {
      if (!predicate || predicate(routeId)) {
        // Cancel the deferred - but do not remove from activeDeferreds here -
        // we rely on the subscribers to do that so our tests can assert proper
        // cleanup via _internalActiveDeferreds
        dfd.cancel();
        cancelledRouteIds.push(routeId);
        activeDeferreds.delete(routeId);
      }
    });
    return cancelledRouteIds;
  } // Opt in to capturing and reporting scroll positions during navigations,
  // used by the <ScrollRestoration> component


  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions = positions;
    getScrollPosition = getPosition;

    getScrollRestorationKey = getKey || (location => location.key); // Perform initial hydration scroll restoration, since we miss the boat on
    // the initial updateState() because we've not yet rendered <ScrollRestoration/>
    // and therefore have no savedScrollPositions available


    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);

      if (y != null) {
        updateState({
          restoreScrollPosition: y
        });
      }
    }

    return () => {
      savedScrollPositions = null;
      getScrollPosition = null;
      getScrollRestorationKey = null;
    };
  }

  function saveScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      savedScrollPositions[key] = getScrollPosition();
    }
  }

  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions && getScrollRestorationKey && getScrollPosition) {
      let userMatches = matches.map(m => createUseMatchesMatch(m, state.loaderData));
      let key = getScrollRestorationKey(location, userMatches) || location.key;
      let y = savedScrollPositions[key];

      if (typeof y === "number") {
        return y;
      }
    }

    return null;
  }

  router = {
    get basename() {
      return init.basename;
    },

    get state() {
      return state;
    },

    get routes() {
      return dataRoutes;
    },

    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: to => init.history.createHref(to),
    encodeLocation: to => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher,
    dispose,
    getBlocker,
    deleteBlocker,
    _internalFetchControllers: fetchControllers,
    _internalActiveDeferreds: activeDeferreds
  };
  return router;
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////

const UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
  invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
  let dataRoutes = convertRoutesToDataRoutes(routes);
  let basename = (opts ? opts.basename : null) || "/";
  /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   */

  async function query(request, _temp2) {
    let {
      requestContext
    } = _temp2 === void 0 ? {} : _temp2;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head") {
      let error = getInternalRouterError(405, {
        method
      });
      let {
        matches: methodNotAllowedMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    } else if (!matches) {
      let error = getInternalRouterError(404, {
        pathname: location.pathname
      });
      let {
        matches: notFoundMatches,
        route
      } = getShortCircuitMatches(dataRoutes);
      return {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    let result = await queryImpl(request, location, matches, requestContext);

    if (isResponse(result)) {
      return result;
    } // When returning StaticHandlerContext, we patch back in the location here
    // since we need it for React Context.  But this helps keep our submit and
    // loadRouteData operating on a Request instead of a Location


    return _extends({
      location,
      basename
    }, result);
  }
  /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   */


  async function queryRoute(request, _temp3) {
    let {
      routeId,
      requestContext
    } = _temp3 === void 0 ? {} : _temp3;
    let url = new URL(request.url);
    let method = request.method.toLowerCase();
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename); // SSR supports HEAD requests while SPA doesn't

    if (!isValidMethod(method) && method !== "head" && method !== "options") {
      throw getInternalRouterError(405, {
        method
      });
    } else if (!matches) {
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let match = routeId ? matches.find(m => m.route.id === routeId) : getTargetMatch(matches, location);

    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      // This should never hit I don't think?
      throw getInternalRouterError(404, {
        pathname: location.pathname
      });
    }

    let result = await queryImpl(request, location, matches, requestContext, match);

    if (isResponse(result)) {
      return result;
    }

    let error = result.errors ? Object.values(result.errors)[0] : undefined;

    if (error !== undefined) {
      // If we got back result.errors, that means the loader/action threw
      // _something_ that wasn't a Response, but it's not guaranteed/required
      // to be an `instanceof Error` either, so we have to use throw here to
      // preserve the "error" state outside of queryImpl.
      throw error;
    } // Pick off the right state value to return


    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }

    if (result.loaderData) {
      var _result$activeDeferre;

      let data = Object.values(result.loaderData)[0];

      if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
        data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
      }

      return data;
    }

    return undefined;
  }

  async function queryImpl(request, location, matches, requestContext, routeMatch) {
    invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");

    try {
      if (isMutationMethod(request.method.toLowerCase())) {
        let result = await submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, routeMatch != null);
        return result;
      }

      let result = await loadRouteData(request, matches, requestContext, routeMatch);
      return isResponse(result) ? result : _extends({}, result, {
        actionData: null,
        actionHeaders: {}
      });
    } catch (e) {
      // If the user threw/returned a Response in callLoaderOrAction, we throw
      // it to bail out and then return or throw here based on whether the user
      // returned or threw
      if (isQueryRouteResponse(e)) {
        if (e.type === ResultType.error && !isRedirectResponse(e.response)) {
          throw e.response;
        }

        return e.response;
      } // Redirects are always returned since they don't propagate to catch
      // boundaries


      if (isRedirectResponse(e)) {
        return e;
      }

      throw e;
    }
  }

  async function submit(request, matches, actionMatch, requestContext, isRouteRequest) {
    let result;

    if (!actionMatch.route.action) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    } else {
      result = await callLoaderOrAction("action", request, actionMatch, matches, basename, true, isRouteRequest, requestContext);

      if (request.signal.aborted) {
        let method = isRouteRequest ? "queryRoute" : "query";
        throw new Error(method + "() call aborted");
      }
    }

    if (isRedirectResult(result)) {
      // Uhhhh - this should never happen, we should always throw these from
      // callLoaderOrAction, but the type narrowing here keeps TS happy and we
      // can get back on the "throw all redirect responses" train here should
      // this ever happen :/
      throw new Response(null, {
        status: result.status,
        headers: {
          Location: result.location
        }
      });
    }

    if (isDeferredResult(result)) {
      let error = getInternalRouterError(400, {
        type: "defer-action"
      });

      if (isRouteRequest) {
        throw error;
      }

      result = {
        type: ResultType.error,
        error
      };
    }

    if (isRouteRequest) {
      // Note: This should only be non-Response values if we get here, since
      // isRouteRequest should throw any Response received in callLoaderOrAction
      if (isErrorResult(result)) {
        throw result.error;
      }

      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: {
          [actionMatch.route.id]: result.data
        },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {},
        activeDeferreds: null
      };
    }

    if (isErrorResult(result)) {
      // Store off the pending error - we use it to determine which loaders
      // to call and will commit it when we complete the navigation
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      let context = await loadRouteData(request, matches, requestContext, undefined, {
        [boundaryMatch.route.id]: result.error
      }); // action status codes take precedence over loader status codes

      return _extends({}, context, {
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : 500,
        actionData: null,
        actionHeaders: _extends({}, result.headers ? {
          [actionMatch.route.id]: result.headers
        } : {})
      });
    } // Create a GET request for the loaders


    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    let context = await loadRouteData(loaderRequest, matches, requestContext);
    return _extends({}, context, result.statusCode ? {
      statusCode: result.statusCode
    } : {}, {
      actionData: {
        [actionMatch.route.id]: result.data
      },
      actionHeaders: _extends({}, result.headers ? {
        [actionMatch.route.id]: result.headers
      } : {})
    });
  }

  async function loadRouteData(request, matches, requestContext, routeMatch, pendingActionError) {
    let isRouteRequest = routeMatch != null; // Short circuit if we have no loaders to run (queryRoute())

    if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader)) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch == null ? void 0 : routeMatch.route.id
      });
    }

    let requestMatches = routeMatch ? [routeMatch] : getLoaderMatchesUntilBoundary(matches, Object.keys(pendingActionError || {})[0]);
    let matchesToLoad = requestMatches.filter(m => m.route.loader); // Short circuit if we have no loaders to run (query())

    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce((acc, m) => Object.assign(acc, {
          [m.route.id]: null
        }), {}),
        errors: pendingActionError || null,
        statusCode: 200,
        loaderHeaders: {},
        activeDeferreds: null
      };
    }

    let results = await Promise.all([...matchesToLoad.map(match => callLoaderOrAction("loader", request, match, matches, basename, true, isRouteRequest, requestContext))]);

    if (request.signal.aborted) {
      let method = isRouteRequest ? "queryRoute" : "query";
      throw new Error(method + "() call aborted");
    } // Process and commit output from loaders


    let activeDeferreds = new Map();
    let context = processRouteLoaderData(matches, matchesToLoad, results, pendingActionError, activeDeferreds); // Add a null for any non-loader matches for proper revalidation on the client

    let executedLoaders = new Set(matchesToLoad.map(match => match.route.id));
    matches.forEach(match => {
      if (!executedLoaders.has(match.route.id)) {
        context.loaderData[match.route.id] = null;
      }
    });
    return _extends({}, context, {
      matches,
      activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
    });
  }

  return {
    dataRoutes,
    query,
    queryRoute
  };
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////

/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */

function getStaticContextFromError(routes, context, error) {
  let newContext = _extends({}, context, {
    statusCode: 500,
    errors: {
      [context._deepestRenderedBoundaryId || routes[0].id]: error
    }
  });

  return newContext;
}

function isSubmissionNavigation(opts) {
  return opts != null && "formData" in opts;
} // Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params


function normalizeNavigateOptions(to, opts, isFetcher) {
  if (isFetcher === void 0) {
    isFetcher = false;
  }

  let path = typeof to === "string" ? to : createPath(to); // Return location verbatim on non-submission navigations

  if (!opts || !isSubmissionNavigation(opts)) {
    return {
      path
    };
  }

  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, {
        method: opts.formMethod
      })
    };
  } // Create a Submission on non-GET navigations


  let submission;

  if (opts.formData) {
    submission = {
      formMethod: opts.formMethod || "get",
      formAction: stripHashFromPath(path),
      formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
      formData: opts.formData
    };

    if (isMutationMethod(submission.formMethod)) {
      return {
        path,
        submission
      };
    }
  } // Flatten submission onto URLSearchParams for GET submissions


  let parsedPath = parsePath(path);
  let searchParams = convertFormDataToSearchParams(opts.formData); // Since fetcher GET submissions only run a single loader (as opposed to
  // navigation GET submissions which run all loaders), we need to preserve
  // any incoming ?index params

  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }

  parsedPath.search = "?" + searchParams;
  return {
    path: createPath(parsedPath),
    submission
  };
} // Filter out all routes below any caught error as they aren't going to
// render so we don't need to load them


function getLoaderMatchesUntilBoundary(matches, boundaryId) {
  let boundaryMatches = matches;

  if (boundaryId) {
    let index = matches.findIndex(m => m.route.id === boundaryId);

    if (index >= 0) {
      boundaryMatches = matches.slice(0, index);
    }
  }

  return boundaryMatches;
}

function getMatchesToLoad(history, state, matches, submission, location, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, pendingActionData, pendingError, fetchLoadMatches) {
  let actionResult = pendingError ? Object.values(pendingError)[0] : pendingActionData ? Object.values(pendingActionData)[0] : undefined;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let defaultShouldRevalidate = // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
  isRevalidationRequired || // Clicked the same link, resubmitted a GET form
  currentUrl.toString() === nextUrl.toString() || // Search params affect all loaders
  currentUrl.search !== nextUrl.search; // Pick navigation matches that are net-new or qualify for revalidation

  let boundaryId = pendingError ? Object.keys(pendingError)[0] : undefined;
  let boundaryMatches = getLoaderMatchesUntilBoundary(matches, boundaryId);
  let navigationMatches = boundaryMatches.filter((match, index) => {
    if (match.route.loader == null) {
      return false;
    } // Always call the loader on new route instances and pending defer cancellations


    if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some(id => id === match.route.id)) {
      return true;
    } // This is the default implementation for when we revalidate.  If the route
    // provides it's own implementation, then we give them full control but
    // provide this value so they can leverage it if needed after they check
    // their own specific use cases


    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, _extends({
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params
    }, submission, {
      actionResult,
      defaultShouldRevalidate: defaultShouldRevalidate || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
    }));
  }); // Pick fetcher.loads that need to be revalidated

  let revalidatingFetchers = [];
  fetchLoadMatches && fetchLoadMatches.forEach((f, key) => {
    if (!matches.some(m => m.route.id === f.routeId)) {
      // This fetcher is not going to be present in the subsequent render so
      // there's no need to revalidate it
      return;
    } else if (cancelledFetcherLoads.includes(key)) {
      // This fetcher was cancelled from a prior action submission - force reload
      revalidatingFetchers.push(_extends({
        key
      }, f));
    } else {
      // Revalidating fetchers are decoupled from the route matches since they
      // hit a static href, so they _always_ check shouldRevalidate and the
      // default is strictly if a revalidation is explicitly required (action
      // submissions, useRevalidator, X-Remix-Revalidate).
      let shouldRevalidate = shouldRevalidateLoader(f.match, _extends({
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params
      }, submission, {
        actionResult,
        defaultShouldRevalidate
      }));

      if (shouldRevalidate) {
        revalidatingFetchers.push(_extends({
          key
        }, f));
      }
    }
  });
  return [navigationMatches, revalidatingFetchers];
}

function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = // [a] -> [a, b]
  !currentMatch || // [a, b] -> [a, c]
  match.route.id !== currentMatch.route.id; // Handle the case that we don't have data for a re-used route, potentially
  // from a prior error or from a cancelled pending deferred

  let isMissingData = currentLoaderData[match.route.id] === undefined; // Always load if this is a net-new route or we don't yet have data

  return isNew || isMissingData;
}

function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}

function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);

    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }

  return arg.defaultShouldRevalidate;
}

async function callLoaderOrAction(type, request, match, matches, basename, isStaticRequest, isRouteRequest, requestContext) {
  if (basename === void 0) {
    basename = "/";
  }

  if (isStaticRequest === void 0) {
    isStaticRequest = false;
  }

  if (isRouteRequest === void 0) {
    isRouteRequest = false;
  }

  let resultType;
  let result; // Setup a promise we can race against so that abort signals short circuit

  let reject;
  let abortPromise = new Promise((_, r) => reject = r);

  let onReject = () => reject();

  request.signal.addEventListener("abort", onReject);

  try {
    let handler = match.route[type];
    invariant(handler, "Could not find the " + type + " to run on the \"" + match.route.id + "\" route");
    result = await Promise.race([handler({
      request,
      params: match.params,
      context: requestContext
    }), abortPromise]);
    invariant(result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
  } catch (e) {
    resultType = ResultType.error;
    result = e;
  } finally {
    request.signal.removeEventListener("abort", onReject);
  }

  if (isResponse(result)) {
    let status = result.status; // Process redirects

    if (redirectStatusCodes.has(status)) {
      let location = result.headers.get("Location");
      invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header"); // Support relative routing in internal redirects

      if (!ABSOLUTE_URL_REGEX.test(location)) {
        let activeMatches = matches.slice(0, matches.indexOf(match) + 1);
        let routePathnames = getPathContributingMatches(activeMatches).map(match => match.pathnameBase);
        let resolvedLocation = resolveTo(location, routePathnames, new URL(request.url).pathname);
        invariant(createPath(resolvedLocation), "Unable to resolve redirect location: " + location); // Prepend the basename to the redirect location if we have one

        if (basename) {
          let path = resolvedLocation.pathname;
          resolvedLocation.pathname = path === "/" ? basename : joinPaths([basename, path]);
        }

        location = createPath(resolvedLocation);
      } else if (!isStaticRequest) {
        // Strip off the protocol+origin for same-origin absolute redirects.
        // If this is a static reques, we can let it go back to the browser
        // as-is
        let currentUrl = new URL(request.url);
        let url = location.startsWith("//") ? new URL(currentUrl.protocol + location) : new URL(location);

        if (url.origin === currentUrl.origin) {
          location = url.pathname + url.search + url.hash;
        }
      } // Don't process redirects in the router during static requests requests.
      // Instead, throw the Response and let the server handle it with an HTTP
      // redirect.  We also update the Location header in place in this flow so
      // basename and relative routing is taken into account


      if (isStaticRequest) {
        result.headers.set("Location", location);
        throw result;
      }

      return {
        type: ResultType.redirect,
        status,
        location,
        revalidate: result.headers.get("X-Remix-Revalidate") !== null
      };
    } // For SSR single-route requests, we want to hand Responses back directly
    // without unwrapping.  We do this with the QueryRouteResponse wrapper
    // interface so we can know whether it was returned or thrown


    if (isRouteRequest) {
      // eslint-disable-next-line no-throw-literal
      throw {
        type: resultType || ResultType.data,
        response: result
      };
    }

    let data;
    let contentType = result.headers.get("Content-Type"); // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type

    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      data = await result.json();
    } else {
      data = await result.text();
    }

    if (resultType === ResultType.error) {
      return {
        type: resultType,
        error: new ErrorResponse(status, result.statusText, data),
        headers: result.headers
      };
    }

    return {
      type: ResultType.data,
      data,
      statusCode: result.status,
      headers: result.headers
    };
  }

  if (resultType === ResultType.error) {
    return {
      type: resultType,
      error: result
    };
  }

  if (result instanceof DeferredData) {
    return {
      type: ResultType.deferred,
      deferredData: result
    };
  }

  return {
    type: ResultType.data,
    data: result
  };
} // Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)


function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = {
    signal
  };

  if (submission && isMutationMethod(submission.formMethod)) {
    let {
      formMethod,
      formEncType,
      formData
    } = submission;
    init.method = formMethod.toUpperCase();
    init.body = formEncType === "application/x-www-form-urlencoded" ? convertFormDataToSearchParams(formData) : formData;
  } // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)


  return new Request(url, init);
}

function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();

  for (let [key, value] of formData.entries()) {
    // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
    searchParams.append(key, value instanceof File ? value.name : value);
  }

  return searchParams;
}

function processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds) {
  // Fill in loaderData/errors from our loaders
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {}; // Process loader results into state.loaderData/state.errors

  results.forEach((result, index) => {
    let id = matchesToLoad[index].route.id;
    invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");

    if (isErrorResult(result)) {
      // Look upwards from the matched route for the closest ancestor
      // error boundary, defaulting to the root match
      let boundaryMatch = findNearestBoundary(matches, id);
      let error = result.error; // If we have a pending action error, we report it at the highest-route
      // that throws a loader error, and then clear it out to indicate that
      // it was consumed

      if (pendingError) {
        error = Object.values(pendingError)[0];
        pendingError = undefined;
      }

      errors = errors || {}; // Prefer higher error values if lower errors bubble to the same boundary

      if (errors[boundaryMatch.route.id] == null) {
        errors[boundaryMatch.route.id] = error;
      } // Clear our any prior loaderData for the throwing route


      loaderData[id] = undefined; // Once we find our first (highest) error, we set the status code and
      // prevent deeper status codes from overriding

      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      if (isDeferredResult(result)) {
        activeDeferreds.set(id, result.deferredData);
        loaderData[id] = result.deferredData.data;
      } else {
        loaderData[id] = result.data;
      } // Error status codes always override success status codes, but if all
      // loaders are successful we take the deepest status code.


      if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }

      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  }); // If we didn't consume the pending action error (i.e., all loaders
  // resolved), then consume it here.  Also clear out any loaderData for the
  // throwing route

  if (pendingError) {
    errors = pendingError;
    loaderData[Object.keys(pendingError)[0]] = undefined;
  }

  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}

function processLoaderData(state, matches, matchesToLoad, results, pendingError, revalidatingFetchers, fetcherResults, activeDeferreds) {
  let {
    loaderData,
    errors
  } = processRouteLoaderData(matches, matchesToLoad, results, pendingError, activeDeferreds); // Process results from our revalidating fetchers

  for (let index = 0; index < revalidatingFetchers.length; index++) {
    let {
      key,
      match
    } = revalidatingFetchers[index];
    invariant(fetcherResults !== undefined && fetcherResults[index] !== undefined, "Did not find corresponding fetcher result");
    let result = fetcherResults[index]; // Process fetcher non-redirect errors

    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match.route.id);

      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = _extends({}, errors, {
          [boundaryMatch.route.id]: result.error
        });
      }

      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      // Should never get here, redirects should get processed above, but we
      // keep this to type narrow to a success result in the else
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else if (isDeferredResult(result)) {
      // Should never get here, deferred data should be awaited for fetchers
      // in resolveDeferredResults
      invariant(false, "Unhandled fetcher deferred data");
    } else {
      let doneFetcher = {
        state: "idle",
        data: result.data,
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        " _hasFetcherDoneAnything ": true
      };
      state.fetchers.set(key, doneFetcher);
    }
  }

  return {
    loaderData,
    errors
  };
}

function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = _extends({}, newLoaderData);

  for (let match of matches) {
    let id = match.route.id;

    if (newLoaderData.hasOwnProperty(id)) {
      if (newLoaderData[id] !== undefined) {
        mergedLoaderData[id] = newLoaderData[id];
      }
    } else if (loaderData[id] !== undefined) {
      mergedLoaderData[id] = loaderData[id];
    }

    if (errors && errors.hasOwnProperty(id)) {
      // Don't keep any loader data below the boundary
      break;
    }
  }

  return mergedLoaderData;
} // Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match


function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex(m => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find(m => m.route.hasErrorBoundary === true) || matches[0];
}

function getShortCircuitMatches(routes) {
  // Prefer a root layout route if present, otherwise shim in a route object
  let route = routes.find(r => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route
    }],
    route
  };
}

function getInternalRouterError(status, _temp4) {
  let {
    pathname,
    routeId,
    method,
    type
  } = _temp4 === void 0 ? {} : _temp4;
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";

  if (status === 400) {
    statusText = "Bad Request";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (type === "defer-action") {
      errorMessage = "defer() is not supported in actions";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = "No route matches URL \"" + pathname + "\"";
  } else if (status === 405) {
    statusText = "Method Not Allowed";

    if (method && pathname && routeId) {
      errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
    } else if (method) {
      errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
    }
  }

  return new ErrorResponse(status || 500, statusText, new Error(errorMessage), true);
} // Find any returned redirect errors, starting from the lowest match


function findRedirect(results) {
  for (let i = results.length - 1; i >= 0; i--) {
    let result = results[i];

    if (isRedirectResult(result)) {
      return result;
    }
  }
}

function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath(_extends({}, parsedPath, {
    hash: ""
  }));
}

function isHashChangeOnly(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash !== b.hash;
}

function isDeferredResult(result) {
  return result.type === ResultType.deferred;
}

function isErrorResult(result) {
  return result.type === ResultType.error;
}

function isRedirectResult(result) {
  return (result && result.type) === ResultType.redirect;
}

function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}

function isRedirectResponse(result) {
  if (!isResponse(result)) {
    return false;
  }

  let status = result.status;
  let location = result.headers.get("Location");
  return status >= 300 && status <= 399 && location != null;
}

function isQueryRouteResponse(obj) {
  return obj && isResponse(obj.response) && (obj.type === ResultType.data || ResultType.error);
}

function isValidMethod(method) {
  return validRequestMethods.has(method);
}

function isMutationMethod(method) {
  return validMutationMethods.has(method);
}

async function resolveDeferredResults(currentMatches, matchesToLoad, results, signal, isFetcher, currentLoaderData) {
  for (let index = 0; index < results.length; index++) {
    let result = results[index];
    let match = matchesToLoad[index];
    let currentMatch = currentMatches.find(m => m.route.id === match.route.id);
    let isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;

    if (isDeferredResult(result) && (isFetcher || isRevalidatingLoader)) {
      // Note: we do not have to touch activeDeferreds here since we race them
      // against the signal in resolveDeferredData and they'll get aborted
      // there if needed
      await resolveDeferredData(result, signal, isFetcher).then(result => {
        if (result) {
          results[index] = result || results[index];
        }
      });
    }
  }
}

async function resolveDeferredData(result, signal, unwrap) {
  if (unwrap === void 0) {
    unwrap = false;
  }

  let aborted = await result.deferredData.resolveData(signal);

  if (aborted) {
    return;
  }

  if (unwrap) {
    try {
      return {
        type: ResultType.data,
        data: result.deferredData.unwrappedData
      };
    } catch (e) {
      // Handle any TrackedPromise._error values encountered while unwrapping
      return {
        type: ResultType.error,
        error: e
      };
    }
  }

  return {
    type: ResultType.data,
    data: result.deferredData.data
  };
}

function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some(v => v === "");
} // Note: This should match the format exported by useMatches, so if you change
// this please also change that :)  Eventually we'll DRY this up


function createUseMatchesMatch(match, loaderData) {
  let {
    route,
    pathname,
    params
  } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}

function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;

  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    // Return the leaf index route when index is present
    return matches[matches.length - 1];
  } // Otherwise grab the deepest "path contributing" match (ignoring index and
  // pathless layout routes)


  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
} //#endregion


//# sourceMappingURL=router.js.map


/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(190);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(192);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _SecondPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(188);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(189);








/*export const AppContext = createContext(null);*/

var App = function App() {
  /*    const [candidates, setCandidates] = useState([
          {
              firstName: "Anna",
              lastName: "Kowalik",
              email: "anna.kowalik@wp.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Katarzyna",
              lastName: "Piotrowska",
              email: "k.piotrowska@onet.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Marcin",
              lastName: "Mulicki",
              email: "mm2589@wp.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
          {
              firstName: "Adam",
              lastName: "Wolecki",
              email: "a.woleckik@onet.pl",
              motivation: "Corpus callosum descended from astronomers cosmic ocean a very small stage in a vast cosmic arena encyclopaedia galactica the only home we've ever known."
          },
      ]);*/

  return (
    /*#__PURE__*/
    /*        <AppContext.Provider value={{candidates, setCandidates}}>*/
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SecondPage__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null))))
    /*        </AppContext.Provider>*/
  );
};

var container = document.getElementById("app");
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ 190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Await),
/* harmony export */   "BrowserRouter": () => (/* binding */ BrowserRouter),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "HashRouter": () => (/* binding */ HashRouter),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "MemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.MemoryRouter),
/* harmony export */   "NavLink": () => (/* binding */ NavLink),
/* harmony export */   "Navigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.Action),
/* harmony export */   "Outlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Outlet),
/* harmony export */   "Route": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Route),
/* harmony export */   "Router": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Router),
/* harmony export */   "RouterProvider": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.RouterProvider),
/* harmony export */   "Routes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Routes),
/* harmony export */   "ScrollRestoration": () => (/* binding */ ScrollRestoration),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext),
/* harmony export */   "UNSAFE_enhanceManualRouteObjects": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_enhanceManualRouteObjects),
/* harmony export */   "UNSAFE_useScrollRestoration": () => (/* binding */ useScrollRestoration),
/* harmony export */   "createBrowserRouter": () => (/* binding */ createBrowserRouter),
/* harmony export */   "createHashRouter": () => (/* binding */ createHashRouter),
/* harmony export */   "createMemoryRouter": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createRoutesFromElements),
/* harmony export */   "createSearchParams": () => (/* binding */ createSearchParams),
/* harmony export */   "defer": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.redirect),
/* harmony export */   "renderMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.renderMatches),
/* harmony export */   "resolvePath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath),
/* harmony export */   "unstable_HistoryRouter": () => (/* binding */ HistoryRouter),
/* harmony export */   "unstable_useBlocker": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker),
/* harmony export */   "unstable_usePrompt": () => (/* binding */ usePrompt),
/* harmony export */   "useActionData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useActionData),
/* harmony export */   "useAsyncError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useAsyncValue),
/* harmony export */   "useBeforeUnload": () => (/* binding */ useBeforeUnload),
/* harmony export */   "useFetcher": () => (/* binding */ useFetcher),
/* harmony export */   "useFetchers": () => (/* binding */ useFetchers),
/* harmony export */   "useFormAction": () => (/* binding */ useFormAction),
/* harmony export */   "useHref": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useHref),
/* harmony export */   "useInRouterContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useInRouterContext),
/* harmony export */   "useLinkClickHandler": () => (/* binding */ useLinkClickHandler),
/* harmony export */   "useLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLoaderData),
/* harmony export */   "useLocation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation),
/* harmony export */   "useMatch": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatch),
/* harmony export */   "useMatches": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches),
/* harmony export */   "useNavigate": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate),
/* harmony export */   "useNavigation": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation),
/* harmony export */   "useNavigationType": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigationType),
/* harmony export */   "useOutlet": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutlet),
/* harmony export */   "useOutletContext": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useOutletContext),
/* harmony export */   "useParams": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useParams),
/* harmony export */   "useResolvedPath": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRevalidator),
/* harmony export */   "useRouteError": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.useRoutes),
/* harmony export */   "useSearchParams": () => (/* binding */ useSearchParams),
/* harmony export */   "useSubmit": () => (/* binding */ useSubmit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(191);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router DOM v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */





function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const defaultMethod = "get";
const defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function shouldProcessLinkClick(event, target) {
  return event.button === 0 && ( // Ignore everything but left clicks
  !target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // Ignore clicks with modifier keys
  ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */

function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }

  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map(v => [key, v]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);

  if (defaultSearchParams) {
    for (let key of defaultSearchParams.keys()) {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach(value => {
          searchParams.append(key, value);
        });
      }
    }
  }

  return searchParams;
}
function getFormSubmissionInfo(target, defaultAction, options) {
  let method;
  let action;
  let encType;
  let formData;

  if (isFormElement(target)) {
    let submissionTrigger = options.submissionTrigger;
    method = options.method || target.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("enctype") || defaultEncType;
    formData = new FormData(target);

    if (submissionTrigger && submissionTrigger.name) {
      formData.append(submissionTrigger.name, submissionTrigger.value);
    }
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;

    if (form == null) {
      throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
    } // <button>/<input type="submit"> may override attributes of <form>


    method = options.method || target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    action = options.action || target.getAttribute("formaction") || form.getAttribute("action") || defaultAction;
    encType = options.encType || target.getAttribute("formenctype") || form.getAttribute("enctype") || defaultEncType;
    formData = new FormData(form); // Include name + value from a <button>, appending in case the button name
    // matches an existing input name

    if (target.name) {
      formData.append(target.name, target.value);
    }
  } else if (isHtmlElement(target)) {
    throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
  } else {
    method = options.method || defaultMethod;
    action = options.action || defaultAction;
    encType = options.encType || defaultEncType;

    if (target instanceof FormData) {
      formData = target;
    } else {
      formData = new FormData();

      if (target instanceof URLSearchParams) {
        for (let [name, value] of target) {
          formData.append(name, value);
        }
      } else if (target != null) {
        for (let name of Object.keys(target)) {
          formData.append(name, target[name]);
        }
      }
    }
  }

  let {
    protocol,
    host
  } = window.location;
  let url = new URL(action, protocol + "//" + host);
  return {
    url,
    method: method.toLowerCase(),
    encType,
    formData
  };
}

const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
      _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"],
      _excluded3 = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
//#region Routers
////////////////////////////////////////////////////////////////////////////////

function createBrowserRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_enhanceManualRouteObjects)(routes)
  }).initialize();
}
function createHashRouter(routes, opts) {
  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    history: (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window: opts == null ? void 0 : opts.window
    }),
    hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
    routes: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_enhanceManualRouteObjects)(routes)
  }).initialize();
}

function parseHydrationData() {
  var _window;

  let state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;

  if (state && state.errors) {
    state = _extends({}, state, {
      errors: deserializeErrors(state.errors)
    });
  }

  return state;
}

function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};

  for (let [key, val] of entries) {
    // Hey you!  If you change this, please change the corresponding logic in
    // serializeErrors in react-router-dom/server.tsx :)
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_1__.ErrorResponse(val.status, val.statusText, val.data, val.internal === true);
    } else if (val && val.__type === "Error") {
      let error = new Error(val.message); // Wipe away the client-side stack trace.  Nothing to fill it in with
      // because we don't serialize SSR stack traces for security reasons

      error.stack = "";
      serialized[key] = error;
    } else {
      serialized[key] = val;
    }
  }

  return serialized;
}
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */


function BrowserRouter(_ref) {
  let {
    basename,
    children,
    window
  } = _ref;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createBrowserHistory)({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */

function HashRouter(_ref2) {
  let {
    basename,
    children,
    window
  } = _ref2;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createHashHistory)({
      window,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */

function HistoryRouter(_ref3) {
  let {
    basename,
    children,
    history
  } = _ref3;
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__.Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

if (process.env.NODE_ENV !== "production") {
  HistoryRouter.displayName = "unstable_HistoryRouter";
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
/**
 * The public API for rendering a history-aware <a>.
 */

const Link = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded);

  // Rendered into <a href> for absolute URLs
  let absoluteHref;
  let isExternal = false;

  if (isBrowser && typeof to === "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(to)) {
    absoluteHref = to;
    let currentUrl = new URL(window.location.href);
    let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);

    if (targetUrl.origin === currentUrl.origin) {
      // Strip the protocol/origin for same-origin absolute URLs
      to = targetUrl.pathname + targetUrl.search + targetUrl.hash;
    } else {
      isExternal = true;
    }
  } // Rendered into <a href> for relative URLs


  let href = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useHref)(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });

  function handleClick(event) {
    if (onClick) onClick(event);

    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }

  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref: ref,
      target: target
    }))
  );
});

if (process.env.NODE_ENV !== "production") {
  Link.displayName = "Link";
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


const NavLink = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function NavLinkWithRef(_ref5, ref) {
  let {
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    children
  } = _ref5,
      rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);

  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative: rest.relative
  });
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
  let locationPathname = location.pathname;
  let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;

  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
    toPathname = toPathname.toLowerCase();
  }

  let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
  let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className;

  if (typeof classNameProp === "function") {
    className = classNameProp({
      isActive,
      isPending
    });
  } else {
    // If the className prop is not a function, we use a default `active`
    // class for <NavLink />s that are active. In v5 `active` was the default
    // value for `activeClassName`, but we are removing that API and can still
    // use the old default behavior for a cleaner upgrade path and keep the
    // simple styling rules working as they currently do.
    className = [classNameProp, isActive ? "active" : null, isPending ? "pending" : null].filter(Boolean).join(" ");
  }

  let style = typeof styleProp === "function" ? styleProp({
    isActive,
    isPending
  }) : styleProp;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
    "aria-current": ariaCurrent,
    className: className,
    ref: ref,
    style: style,
    to: to
  }), typeof children === "function" ? children({
    isActive,
    isPending
  }) : children);
});

if (process.env.NODE_ENV !== "production") {
  NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */


const Form = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
    ref: ref
  }));
});

if (process.env.NODE_ENV !== "production") {
  Form.displayName = "Form";
}

const FormImpl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((_ref6, forwardedRef) => {
  let {
    reloadDocument,
    replace,
    method = defaultMethod,
    action,
    onSubmit,
    fetcherKey,
    routeId,
    relative,
    preventScrollReset
  } = _ref6,
      props = _objectWithoutPropertiesLoose(_ref6, _excluded3);

  let submit = useSubmitImpl(fetcherKey, routeId);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action, {
    relative
  });

  let submitHandler = event => {
    onSubmit && onSubmit(event);
    if (event.defaultPrevented) return;
    event.preventDefault();
    let submitter = event.nativeEvent.submitter;
    let submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
    submit(submitter || event.currentTarget, {
      method: submitMethod,
      replace,
      relative,
      preventScrollReset
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
    ref: forwardedRef,
    method: formMethod,
    action: formAction,
    onSubmit: reloadDocument ? onSubmit : submitHandler
  }, props));
});

if (process.env.NODE_ENV !== "production") {
  FormImpl.displayName = "FormImpl";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */


function ScrollRestoration(_ref7) {
  let {
    getKey,
    storageKey
  } = _ref7;
  useScrollRestoration({
    getKey,
    storageKey
  });
  return null;
}

if (process.env.NODE_ENV !== "production") {
  ScrollRestoration.displayName = "ScrollRestoration";
} //#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////


var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseFetchers"] = "useFetchers";
  DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, getDataRouterConsoleError(hookName)) : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
  return state;
}
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */


function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(to, {
    relative
  });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(event => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault(); // If the URL hasn't changed, a regular <a> will do a replace instead of
      // a push, so do the same here unless the replace prop is explicitly set

      let replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */

function useSearchParams(defaultInit) {
  process.env.NODE_ENV !== "production" ? warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params\n\n" + "If you're unsure how to load polyfills, we recommend you check out " + "https://polyfill.io/v3/ which provides some recommendations about how " + "to load polyfills only for users that need them, instead of for every " + "user.") : void 0;
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => // Only merge in the defaults if we haven't yet called setSearchParams.
  // Once we call that we want those to take precedence, otherwise you can't
  // remove a param with setSearchParams({}) if it has an initial value
  getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [location.search]);
  let navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */

function useSubmit() {
  return useSubmitImpl();
}

function useSubmitImpl(fetcherKey, routeId) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseSubmitImpl);
  let defaultAction = useFormAction();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (target, options) {
    if (options === void 0) {
      options = {};
    }

    if (typeof document === "undefined") {
      throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }

    let {
      method,
      encType,
      formData,
      url
    } = getFormSubmissionInfo(target, defaultAction, options);
    let href = url.pathname + url.search;
    let opts = {
      replace: options.replace,
      preventScrollReset: options.preventScrollReset,
      formData,
      formMethod: method,
      formEncType: encType
    };

    if (fetcherKey) {
      !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "No routeId available for useFetcher()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
      router.fetch(fetcherKey, routeId, href, opts);
    } else {
      router.navigate(href, opts);
    }
  }, [defaultAction, router, fetcherKey, routeId]);
}

function useFormAction(action, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    basename
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  !routeContext ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "useFormAction must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
  let [match] = routeContext.matches.slice(-1); // Shallow clone path so we can modify it below, otherwise we modify the
  // object referenced by useMemo inside useResolvedPath

  let path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useResolvedPath)(action ? action : ".", {
    relative
  })); // Previously we set the default action to ".". The problem with this is that
  // `useResolvedPath(".")` excludes search params and the hash of the resolved
  // URL. This is the intended behavior of when "." is specifically provided as
  // the form action, but inconsistent w/ browsers when the action is omitted.
  // https://github.com/remix-run/remix/issues/927


  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();

  if (action == null) {
    // Safe to write to these directly here since if action was undefined, we
    // would have called useResolvedPath(".") which will never include a search
    // or hash
    path.search = location.search;
    path.hash = location.hash; // When grabbing search params from the URL, remove the automatically
    // inserted ?index param so we match the useResolvedPath search behavior
    // which would not include ?index

    if (match.route.index) {
      let params = new URLSearchParams(path.search);
      params.delete("index");
      path.search = params.toString() ? "?" + params.toString() : "";
    }
  }

  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  } // If we're operating within a basename, prepend it to the pathname prior
  // to creating the form action.  If this is a root navigation, then just use
  // the raw basename which allows the basename to have full control over the
  // presence of a trailing slash on root actions


  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([basename, path.pathname]);
  }

  return (0,react_router__WEBPACK_IMPORTED_MODULE_1__.createPath)(path);
}

function createFetcherForm(fetcherKey, routeId) {
  let FetcherForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormImpl, _extends({}, props, {
      ref: ref,
      fetcherKey: fetcherKey,
      routeId: routeId
    }));
  });

  if (process.env.NODE_ENV !== "production") {
    FetcherForm.displayName = "fetcher.Form";
  }

  return FetcherForm;
}

let fetcherId = 0;
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */

function useFetcher() {
  var _route$matches;

  let {
    router
  } = useDataRouterContext(DataRouterHook.UseFetcher);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "useFetcher must be used inside a RouteContext") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
  let routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
  !(routeId != null) ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
  let [fetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => String(++fetcherId));
  let [Form] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    !routeId ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "No routeId available for fetcher.Form()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
    return createFetcherForm(fetcherKey, routeId);
  });
  let [load] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => href => {
    !router ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "No router available for fetcher.load()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
    !routeId ? process.env.NODE_ENV !== "production" ? (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false, "No routeId available for fetcher.load()") : (0,react_router__WEBPACK_IMPORTED_MODULE_1__.invariant)(false) : void 0;
    router.fetch(fetcherKey, routeId, href);
  });
  let submit = useSubmitImpl(fetcherKey, routeId);
  let fetcher = router.getFetcher(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => _extends({
    Form,
    submit,
    load
  }, fetcher), [fetcher, Form, submit, load]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    // Is this busted when the React team gets real weird and calls effects
    // twice on mount?  We really just need to garbage collect here when this
    // fetcher is no longer around.
    return () => {
      if (!router) {
        console.warn("No fetcher available to clean up from useFetcher()");
        return;
      }

      router.deleteFetcher(fetcherKey);
    };
  }, [router, fetcherKey]);
  return fetcherWithComponents;
}
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */

function useFetchers() {
  let state = useDataRouterState(DataRouterStateHook.UseFetchers);
  return [...state.fetchers.values()];
}
const SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
let savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */

function useScrollRestoration(_temp3) {
  let {
    getKey,
    storageKey
  } = _temp3 === void 0 ? {} : _temp3;
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
  let {
    restoreScrollPosition,
    preventScrollReset
  } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
  let location = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  let matches = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useMatches)();
  let navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.useNavigation)(); // Trigger manual scroll restoration while we're active

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []); // Save positions on pagehide

  usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
    if (navigation.state === "idle") {
      let key = (getKey ? getKey(location, matches) : null) || location.key;
      savedScrollPositions[key] = window.scrollY;
    }

    sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
    window.history.scrollRestoration = "auto";
  }, [storageKey, getKey, navigation.state, location, matches])); // Read in any saved scroll locations

  if (typeof document !== "undefined") {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);

        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {// no-op, use default empty object
      }
    }, [storageKey]); // Enable scroll restoration in the router
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, () => window.scrollY, getKey);
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, getKey]); // Restore scrolling when state.restoreScrollPosition changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      // Explicit false means don't do anything (used for submissions)
      if (restoreScrollPosition === false) {
        return;
      } // been here before, scroll to it


      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      } // try to scroll to the hash


      if (location.hash) {
        let el = document.getElementById(location.hash.slice(1));

        if (el) {
          el.scrollIntoView();
          return;
        }
      } // Don't reset if this navigation opted out


      if (preventScrollReset === true) {
        return;
      } // otherwise go to the top on new locations


      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */


function useBeforeUnload(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */

function usePageHide(callback, options) {
  let {
    capture
  } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? {
      capture
    } : undefined;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */


function usePrompt(_ref8) {
  let {
    when,
    message
  } = _ref8;
  let blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.unstable_useBlocker)(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);

      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
}
////////////////////////////////////////////////////////////////////////////////
//#region Utils
////////////////////////////////////////////////////////////////////////////////

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== "undefined") console.warn(message);

    try {
      // Welcome to debugging React Router!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
} //#endregion


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortedDeferredError": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.AbortedDeferredError),
/* harmony export */   "Await": () => (/* binding */ Await),
/* harmony export */   "MemoryRouter": () => (/* binding */ MemoryRouter),
/* harmony export */   "Navigate": () => (/* binding */ Navigate),
/* harmony export */   "NavigationType": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action),
/* harmony export */   "Outlet": () => (/* binding */ Outlet),
/* harmony export */   "Route": () => (/* binding */ Route),
/* harmony export */   "Router": () => (/* binding */ Router),
/* harmony export */   "RouterProvider": () => (/* binding */ RouterProvider),
/* harmony export */   "Routes": () => (/* binding */ Routes),
/* harmony export */   "UNSAFE_DataRouterContext": () => (/* binding */ DataRouterContext),
/* harmony export */   "UNSAFE_DataRouterStateContext": () => (/* binding */ DataRouterStateContext),
/* harmony export */   "UNSAFE_LocationContext": () => (/* binding */ LocationContext),
/* harmony export */   "UNSAFE_NavigationContext": () => (/* binding */ NavigationContext),
/* harmony export */   "UNSAFE_RouteContext": () => (/* binding */ RouteContext),
/* harmony export */   "UNSAFE_enhanceManualRouteObjects": () => (/* binding */ enhanceManualRouteObjects),
/* harmony export */   "createMemoryRouter": () => (/* binding */ createMemoryRouter),
/* harmony export */   "createPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createPath),
/* harmony export */   "createRoutesFromChildren": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "createRoutesFromElements": () => (/* binding */ createRoutesFromChildren),
/* harmony export */   "defer": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.defer),
/* harmony export */   "generatePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.generatePath),
/* harmony export */   "isRouteErrorResponse": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse),
/* harmony export */   "json": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.json),
/* harmony export */   "matchPath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchPath),
/* harmony export */   "matchRoutes": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchRoutes),
/* harmony export */   "parsePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath),
/* harmony export */   "redirect": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.redirect),
/* harmony export */   "renderMatches": () => (/* binding */ renderMatches),
/* harmony export */   "resolvePath": () => (/* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolvePath),
/* harmony export */   "unstable_useBlocker": () => (/* binding */ useBlocker),
/* harmony export */   "useActionData": () => (/* binding */ useActionData),
/* harmony export */   "useAsyncError": () => (/* binding */ useAsyncError),
/* harmony export */   "useAsyncValue": () => (/* binding */ useAsyncValue),
/* harmony export */   "useHref": () => (/* binding */ useHref),
/* harmony export */   "useInRouterContext": () => (/* binding */ useInRouterContext),
/* harmony export */   "useLoaderData": () => (/* binding */ useLoaderData),
/* harmony export */   "useLocation": () => (/* binding */ useLocation),
/* harmony export */   "useMatch": () => (/* binding */ useMatch),
/* harmony export */   "useMatches": () => (/* binding */ useMatches),
/* harmony export */   "useNavigate": () => (/* binding */ useNavigate),
/* harmony export */   "useNavigation": () => (/* binding */ useNavigation),
/* harmony export */   "useNavigationType": () => (/* binding */ useNavigationType),
/* harmony export */   "useOutlet": () => (/* binding */ useOutlet),
/* harmony export */   "useOutletContext": () => (/* binding */ useOutletContext),
/* harmony export */   "useParams": () => (/* binding */ useParams),
/* harmony export */   "useResolvedPath": () => (/* binding */ useResolvedPath),
/* harmony export */   "useRevalidator": () => (/* binding */ useRevalidator),
/* harmony export */   "useRouteError": () => (/* binding */ useRouteError),
/* harmony export */   "useRouteLoaderData": () => (/* binding */ useRouteLoaderData),
/* harmony export */   "useRoutes": () => (/* binding */ useRoutes)
/* harmony export */ });
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var process = __webpack_require__(9);
/**
 * React Router v6.8.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */




function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */

function isPolyfill(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

const is = typeof Object.is === "function" ? Object.is : isPolyfill; // Intentionally not using named imports because Rollup uses dynamic
// dispatch for CommonJS interop named imports.

const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = react__WEBPACK_IMPORTED_MODULE_1__;
let didWarnOld18Alpha = false;
let didWarnUncachedGetSnapshot = false; // Disclaimer: This shim breaks many of the rules of React, and only works
// because of a very particular set of implementation details and assumptions
// -- change any one of them and it will break. The most important assumption
// is that updates are always synchronous, because concurrent rendering is
// only available in versions of React that also have a built-in
// useSyncExternalStore API. And we only use this shim when the built-in API
// does not exist.
//
// Do not assume that the clever hacks used by this hook also work in general.
// The point of this shim is to replace the need for hacks by other libraries.

function useSyncExternalStore$2(subscribe, getSnapshot, // Note: The shim does not use getServerSnapshot, because pre-18 versions of
// React do not expose a way to check if we're hydrating. So users of the shim
// will need to track that themselves and return the correct value
// from `getSnapshot`.
getServerSnapshot) {
  if (process.env.NODE_ENV !== "production") {
    if (!didWarnOld18Alpha) {
      if ( true) {
        didWarnOld18Alpha = true;
        console.error("You are using an outdated, pre-release alpha of React 18 that " + "does not support useSyncExternalStore. The " + "use-sync-external-store shim will not work correctly. Upgrade " + "to a newer pre-release.");
      }
    }
  } // Read the current snapshot from the store on every render. Again, this
  // breaks the rules of React, and only works here because of specific
  // implementation details, most importantly that updates are
  // always synchronous.


  const value = getSnapshot();

  if (process.env.NODE_ENV !== "production") {
    if (!didWarnUncachedGetSnapshot) {
      const cachedValue = getSnapshot();

      if (!is(value, cachedValue)) {
        console.error("The result of getSnapshot should be cached to avoid an infinite loop");
        didWarnUncachedGetSnapshot = true;
      }
    }
  } // Because updates are synchronous, we don't queue them. Instead we force a
  // re-render whenever the subscribed state changes by updating an some
  // arbitrary useState hook. Then, during render, we call getSnapshot to read
  // the current value.
  //
  // Because we don't actually use the state returned by the useState hook, we
  // can save a bit of memory by storing other stuff in that slot.
  //
  // To implement the early bailout, we need to track some things on a mutable
  // object. Usually, we would put that in a useRef hook, but we can stash it in
  // our useState hook instead.
  //
  // To force a re-render, we call forceUpdate({inst}). That works because the
  // new object always fails an equality check.


  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  }); // Track the latest getSnapshot function with a ref. This needs to be updated
  // in the layout phase so we can access it during the tearing check that
  // happens on subscribe.

  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot; // Whenever getSnapshot or subscribe changes, we need to check in the
    // commit phase if there was an interleaved mutation. In concurrent mode
    // this can happen all the time, but even in synchronous mode, an earlier
    // effect may have mutated the store.

    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    // Check for changes right before subscribing. Subsequent changes will be
    // detected in the subscription handler.
    if (checkIfSnapshotChanged(inst)) {
      // Force a re-render.
      forceUpdate({
        inst
      });
    }

    const handleStoreChange = () => {
      // TODO: Because there is no cross-renderer API for batching updates, it's
      // up to the consumer of this library to wrap their subscription event
      // with unstable_batchedUpdates. Should we try to detect when this isn't
      // the case and print a warning in development?
      // The store changed. Check if the snapshot changed since the last time we
      // read from the store.
      if (checkIfSnapshotChanged(inst)) {
        // Force a re-render.
        forceUpdate({
          inst
        });
      }
    }; // Subscribe to the store and return a clean-up function.


    return subscribe(handleStoreChange); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subscribe]);
  useDebugValue(value);
  return value;
}

function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;

  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  // Note: The shim does not use getServerSnapshot, because pre-18 versions of
  // React do not expose a way to check if we're hydrating. So users of the shim
  // will need to track that themselves and return the correct value
  // from `getSnapshot`.
  return getSnapshot();
}

/**
 * Inlined into the react-router repo since use-sync-external-store does not
 * provide a UMD-compatible package, so we need this to be able to distribute
 * UMD react-router bundles
 */
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
const useSyncExternalStore =  true ? (module => module.useSyncExternalStore)(react__WEBPACK_IMPORTED_MODULE_1__) : shim;

const DataRouterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterContext.displayName = "DataRouter";
}

const DataRouterStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  DataRouterStateContext.displayName = "DataRouterState";
}

const AwaitContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  AwaitContext.displayName = "Await";
}

const NavigationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  NavigationContext.displayName = "Navigation";
}

const LocationContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  LocationContext.displayName = "Location";
}

const RouteContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext({
  outlet: null,
  matches: []
});

if (process.env.NODE_ENV !== "production") {
  RouteContext.displayName = "Route";
}

const RouteErrorContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);

if (process.env.NODE_ENV !== "production") {
  RouteErrorContext.displayName = "RouteError";
}

/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */

function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useHref() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname; // If we're operating within a basename, prepend it to the pathname prior
  // to creating the href.  If this is a root navigation, then just use the raw
  // basename which allows the basename to have full control over the presence
  // of a trailing slash on root links

  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([basename, pathname]);
  }

  return navigator.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
/**
 * Returns true if this component is a descendant of a <Router>.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */

function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext) != null;
}
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */

function useLocation() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useLocation() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext).location;
}
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */

function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(LocationContext).navigationType;
}
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * <NavLink>.
 *
 * @see https://reactrouter.com/hooks/use-match
 */

function useMatch(pattern) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useMatch() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  let {
    pathname
  } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchPath)(pattern, pathname), [pathname, pattern]);
}
/**
 * The interface for the navigate() function returned from useNavigate().
 */

/**
 * Returns an imperative method for changing the location. Used by <Link>s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */
function useNavigate() {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useNavigate() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  let {
    basename,
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(function (to, options) {
    if (options === void 0) {
      options = {};
    }

    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.warning)(activeRef.current, "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.") : void 0;
    if (!activeRef.current) return;

    if (typeof to === "number") {
      navigator.go(to);
      return;
    }

    let path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path"); // If we're operating within a basename, prepend it to the pathname prior
    // to handing off to history.  If this is a root navigation, then we
    // navigate to the raw basename which allows the basename to have full
    // control over the presence of a trailing slash on root links

    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([basename, path.pathname]);
    }

    (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
  }, [basename, navigator, routePathnamesJson, locationPathname]);
  return navigate;
}
const OutletContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */

function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(OutletContext);
}
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by <Outlet> to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */

function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext).outlet;

  if (outlet) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }

  return outlet;
}
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */

function useParams() {
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */

function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.UNSAFE_getPathContributingMatches)(matches).map(match => match.pathnameBase));
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an <Outlet> to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */

function useRoutes(routes, locationArg) {
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, // TODO: This error is probably because they somehow have 2 versions of the
  // router loaded. We can help them understand how to avoid that.
  "useRoutes() may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  let {
    navigator
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext);
  let dataRouterStateContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;

  if (process.env.NODE_ENV !== "production") {
    // You won't get a warning about 2 different <Routes> under a <Route>
    // without a trailing *, but this is a best-effort warning anyway since we
    // cannot even give the warning unless they land at the parent route.
    //
    // Example:
    //
    // <Routes>
    //   {/* This route path MUST end with /* because otherwise
    //       it will never match /blog/post/123 */}
    //   <Route path="blog" element={<Blog />} />
    //   <Route path="blog/feed" element={<BlogFeed />} />
    // </Routes>
    //
    // function Blog() {
    //   return (
    //     <Routes>
    //       <Route path="post/:id" element={<Post />} />
    //     </Routes>
    //   );
    // }
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
  }

  let locationFromContext = useLocation();
  let location;

  if (locationArg) {
    var _parsedLocationArg$pa;

    let parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }

  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.matchRoutes)(routes, {
    pathname: remainingPathname
  });

  if (process.env.NODE_ENV !== "production") {
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : void 0;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.warning)(matches == null || matches[matches.length - 1].route.element !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" does not have an element. " + "This means it will render an <Outlet /> with a null value by default resulting in an \"empty\" page.") : void 0;
  }

  let renderedMatches = _renderMatches(matches && matches.map(match => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.joinPaths)([parentPathnameBase, // Re-encode pathnames that were decoded inside matchRoutes
    navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase])
  })), parentMatches, dataRouterStateContext || undefined); // When a user passes in a `locationArg`, the associated routes need to
  // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
  // to use the scoped location instead of the global location.


  if (locationArg && renderedMatches) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationContext.Provider, {
      value: {
        location: _extends({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action.Pop
      }
    }, renderedMatches);
  }

  return renderedMatches;
}

function DefaultErrorElement() {
  let error = useRouteError();
  let message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let codeStyles = {
    padding: "2px 4px",
    backgroundColor: lightgrey
  };
  let devInfo = null;

  if (process.env.NODE_ENV !== "production") {
    devInfo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
      style: codeStyles
    }, "errorElement"), " props on\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("code", {
      style: codeStyles
    }, "<Route>")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}

class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error: error
    };
  }

  static getDerivedStateFromProps(props, state) {
    // When we get into an error state, the user will likely click "back" to the
    // previous page that didn't have an error. Because this wraps the entire
    // application, that will have no effect--the error page continues to display.
    // This gives us a mechanism to recover from the error when the location changes.
    //
    // Whether we're in an error state or not, we update the location in state
    // so that when we are in an error state, it gets reset when a new location
    // comes in and the user recovers from the error.
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    } // If we're not changing locations, preserve the location but still surface
    // any new errors that may come through. We retain the existing error, we do
    // this because the error provided from the app state may be cleared without
    // the location changing.


    return {
      error: props.error || state.error,
      location: state.location
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }

  render() {
    return this.state.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }

}

function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext); // Track how deep we got in our render pass to emulate SSR componentDidCatch
  // in a DataStaticRouter

  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}

function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }

  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      // Don't bail if we have data router errors so we can render them in the
      // boundary.  Use the pre-matched (or shimmed) matches
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }

  let renderedMatches = matches; // If we have data errors, trim matches to the highest error boundary

  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;

  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(m => m.route.id && (errors == null ? void 0 : errors[m.route.id]));
    !(errorIndex >= 0) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "Could not find a matching route for the current errors: " + errors) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }

  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null; // Only data routers handle errors

    let errorElement = dataRouterState ? match.route.errorElement || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DefaultErrorElement, null) : null;
    let matches = parentMatches.concat(renderedMatches.slice(0, index + 1));

    let getChildren = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RenderedRoute, {
      match: match,
      routeContext: {
        outlet,
        matches
      }
    }, error ? errorElement : match.route.element !== undefined ? match.route.element : outlet); // Only wrap in an error boundary within data router usages when we have an
    // errorElement on this route.  Otherwise let it bubble up to an ancestor
    // errorElement


    return dataRouterState && (match.route.errorElement || index === 0) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error: error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook;

(function (DataRouterHook) {
  DataRouterHook["UseBlocker"] = "useBlocker";
  DataRouterHook["UseRevalidator"] = "useRevalidator";
})(DataRouterHook || (DataRouterHook = {}));

var DataRouterStateHook;

(function (DataRouterStateHook) {
  DataRouterStateHook["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook["UseActionData"] = "useActionData";
  DataRouterStateHook["UseRouteError"] = "useRouteError";
  DataRouterStateHook["UseNavigation"] = "useNavigation";
  DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook["UseMatches"] = "useMatches";
  DataRouterStateHook["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook || (DataRouterStateHook = {}));

function getDataRouterConsoleError(hookName) {
  return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}

function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext);
  !ctx ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  return ctx;
}

function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  !state ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  return state;
}

function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, getDataRouterConsoleError(hookName)) : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  return route;
}

function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  return thisRoute.route.id;
}
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */


function useNavigation() {
  let state = useDataRouterState(DataRouterStateHook.UseNavigation);
  return state.navigation;
}
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */

function useRevalidator() {
  let dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
  let state = useDataRouterState(DataRouterStateHook.UseRevalidator);
  return {
    revalidate: dataRouterContext.router.revalidate,
    state: state.revalidation
  };
}
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */

function useMatches() {
  let {
    matches,
    loaderData
  } = useDataRouterState(DataRouterStateHook.UseMatches);
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => matches.map(match => {
    let {
      pathname,
      params
    } = match; // Note: This structure matches that created by createUseMatchesMatch
    // in the @remix-run/router , so if you change this please also change
    // that :)  Eventually we'll DRY this up

    return {
      id: match.route.id,
      pathname,
      params,
      data: loaderData[match.route.id],
      handle: match.route.handle
    };
  }), [matches, loaderData]);
}
/**
 * Returns the loader data for the nearest ancestor Route loader
 */

function useLoaderData() {
  let state = useDataRouterState(DataRouterStateHook.UseLoaderData);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);

  if (state.errors && state.errors[routeId] != null) {
    console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
    return undefined;
  }

  return state.loaderData[routeId];
}
/**
 * Returns the loaderData for the given routeId
 */

function useRouteLoaderData(routeId) {
  let state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
  return state.loaderData[routeId];
}
/**
 * Returns the action data for the nearest ancestor Route action
 */

function useActionData() {
  let state = useDataRouterState(DataRouterStateHook.UseActionData);
  let route = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteContext);
  !route ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "useActionData must be used inside a RouteContext") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  return Object.values((state == null ? void 0 : state.actionData) || {})[0];
}
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * errorElement to display a proper error message.
 */

function useRouteError() {
  var _state$errors;

  let error = react__WEBPACK_IMPORTED_MODULE_1__.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError); // If this was a render error, we put it in a RouteError context inside
  // of RenderErrorBoundary

  if (error) {
    return error;
  } // Otherwise look for errors from our data router state


  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
/**
 * Returns the happy-path data from the nearest ancestor <Await /> value
 */

function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_1__.useContext(AwaitContext);
  return value == null ? void 0 : value._data;
}
/**
 * Returns the error from the nearest ancestor <Await /> value
 */

function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_1__.useContext(AwaitContext);
  return value == null ? void 0 : value._error;
}
let blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */

function useBlocker(shouldBlock) {
  let {
    router
  } = useDataRouterContext(DataRouterHook.UseBlocker);
  let [blockerKey] = react__WEBPACK_IMPORTED_MODULE_1__.useState(() => String(++blockerId));
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(args => {
    return typeof shouldBlock === "function" ? !!shouldBlock(args) : !!shouldBlock;
  }, [shouldBlock]);
  let blocker = router.getBlocker(blockerKey, blockerFunction); // Cleanup on unmount

  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => () => router.deleteBlocker(blockerKey), [router, blockerKey]);
  return blocker;
}
const alreadyWarned = {};

function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.warning)(false, message) : void 0;
  }
}

/**
 * Given a Remix Router instance, render the appropriate UI
 */
function RouterProvider(_ref) {
  let {
    fallbackElement,
    router
  } = _ref;
  // Sync router state to our component state to force re-renders
  let state = useSyncExternalStore(router.subscribe, () => router.state, // We have to provide this so React@18 doesn't complain during hydration,
  // but we pass our serialized hydration data into the router so state here
  // is already synced with what the server saw
  () => router.state);
  let navigator = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: n => router.navigate(n),
      push: (to, state, opts) => router.navigate(to, {
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      }),
      replace: (to, state, opts) => router.navigate(to, {
        replace: true,
        state,
        preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/"; // The fragment and {null} here are important!  We need them to keep React 18's
  // useId happy when we are server-rendering since we may have a <script> here
  // containing the hydrated server-side staticContext (from StaticRouterProvider).
  // useId relies on the component tree structure to generate deterministic id's
  // so we need to ensure it remains the same on the client even though
  // we don't need the <script> tag

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataRouterContext.Provider, {
    value: {
      router,
      navigator,
      static: false,
      // Do we need this?
      basename
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(DataRouterStateContext.Provider, {
    value: state
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
    basename: router.basename,
    location: router.state.location,
    navigationType: router.state.historyAction,
    navigator: navigator
  }, router.state.initialized ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Routes, null) : fallbackElement))), null);
}

/**
 * A <Router> that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */
function MemoryRouter(_ref2) {
  let {
    basename,
    children,
    initialEntries,
    initialIndex
  } = _ref2;
  let historyRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();

  if (historyRef.current == null) {
    historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }

  let history = historyRef.current;
  let [state, setState] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    action: history.action,
    location: history.location
  });
  react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(() => history.listen(setState), [history]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Router, {
    basename: basename,
    children: children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}

/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */
function Navigate(_ref3) {
  let {
    to,
    replace,
    state,
    relative
  } = _ref3;
  !useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, // TODO: This error is probably because they somehow have 2 versions of
  // the router loaded. We can help them understand how to avoid that.
  "<Navigate> may be used only in the context of a <Router> component.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.warning)(!react__WEBPACK_IMPORTED_MODULE_1__.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : void 0;
  let dataRouterState = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterStateContext);
  let navigate = useNavigate();
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
    // Avoid kicking off multiple navigations if we're in the middle of a
    // data-router navigation, since components get re-rendered when we enter
    // a submitting/loading state
    if (dataRouterState && dataRouterState.navigation.state !== "idle") {
      return;
    }

    navigate(to, {
      replace,
      state,
      relative
    });
  });
  return null;
}

/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */
function Outlet(props) {
  return useOutlet(props.context);
}

/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */
function Route(_props) {
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) ;
}

/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a <Router> directly. Instead, you'll render a
 * router that is more specific to your environment such as a <BrowserRouter>
 * in web browsers or a <StaticRouter> for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.Action.Pop,
    navigator,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0; // Preserve trailing slashes on basename, so we can let the user control
  // the enforcement of trailing slashes throughout the app

  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    basename,
    navigator,
    static: staticProp
  }), [basename, navigator, staticProp]);

  if (typeof locationProp === "string") {
    locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.parsePath)(locationProp);
  }

  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => {
    let trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.stripBasename)(pathname, basename);

    if (trailingPathname == null) {
      return null;
    }

    return {
      pathname: trailingPathname,
      search,
      hash,
      state,
      key
    };
  }, [basename, pathname, search, hash, state, key]);
  process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.warning)(location != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : void 0;

  if (location == null) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(LocationContext.Provider, {
    children: children,
    value: {
      location,
      navigationType
    }
  }));
}

/**
 * A container for a nested tree of <Route> elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(DataRouterContext); // When in a DataRouterContext _without_ children, we use the router routes
  // directly.  If we have children, then we're in a descendant tree and we
  // need to use child routes.

  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}

/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */
function Await(_ref6) {
  let {
    children,
    errorElement,
    resolve
  } = _ref6;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitErrorBoundary, {
    resolve: resolve,
    errorElement: errorElement
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ResolveAwait, null, children));
}
var AwaitRenderStatus;

(function (AwaitRenderStatus) {
  AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
  AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
  AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));

const neverSettledPromise = new Promise(() => {});

class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("<Await> caught the following error during render", error, errorInfo);
  }

  render() {
    let {
      children,
      errorElement,
      resolve
    } = this.props;
    let promise = null;
    let status = AwaitRenderStatus.pending;

    if (!(resolve instanceof Promise)) {
      // Didn't get a promise - provide as a resolved promise
      status = AwaitRenderStatus.success;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_data", {
        get: () => resolve
      });
    } else if (this.state.error) {
      // Caught a render error, provide it as a rejected promise
      status = AwaitRenderStatus.error;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {}); // Avoid unhandled rejection warnings

      Object.defineProperty(promise, "_tracked", {
        get: () => true
      });
      Object.defineProperty(promise, "_error", {
        get: () => renderError
      });
    } else if (resolve._tracked) {
      // Already tracked promise - check contents
      promise = resolve;
      status = promise._error !== undefined ? AwaitRenderStatus.error : promise._data !== undefined ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
    } else {
      // Raw (untracked) promise - track it
      status = AwaitRenderStatus.pending;
      Object.defineProperty(resolve, "_tracked", {
        get: () => true
      });
      promise = resolve.then(data => Object.defineProperty(resolve, "_data", {
        get: () => data
      }), error => Object.defineProperty(resolve, "_error", {
        get: () => error
      }));
    }

    if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_0__.AbortedDeferredError) {
      // Freeze the UI by throwing a never resolved promise
      throw neverSettledPromise;
    }

    if (status === AwaitRenderStatus.error && !errorElement) {
      // No errorElement, throw to the nearest route-level error boundary
      throw promise._error;
    }

    if (status === AwaitRenderStatus.error) {
      // Render via our errorElement
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitContext.Provider, {
        value: promise,
        children: errorElement
      });
    }

    if (status === AwaitRenderStatus.success) {
      // Render children with resolved value
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(AwaitContext.Provider, {
        value: promise,
        children: children
      });
    } // Throw to the suspense boundary


    throw promise;
  }

}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on <Await>
 */


function ResolveAwait(_ref7) {
  let {
    children
  } = _ref7;
  let data = useAsyncValue();
  let toRender = typeof children === "function" ? children(data) : children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, toRender);
} ///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////

/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */


function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }

  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(children, (element, index) => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.isValidElement(element)) {
      // Ignore non-elements. This allows people to more easily inline
      // conditionals in their route config.
      return;
    }

    if (element.type === react__WEBPACK_IMPORTED_MODULE_1__.Fragment) {
      // Transparently support React.Fragment and its children.
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }

    !(element.type === Route) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
    !(!element.props.index || !element.props.children) ? process.env.NODE_ENV !== "production" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false, "An index route cannot have child routes.") : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.invariant)(false) : void 0;
    let treePath = [...parentPath, index];
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };

    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }

    routes.push(route);
  });
  return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */

function renderMatches(matches) {
  return _renderMatches(matches);
}
/**
 * @private
 * Walk the route tree and add hasErrorBoundary if it's not provided, so that
 * users providing manual route arrays can just specify errorElement
 */

function enhanceManualRouteObjects(routes) {
  return routes.map(route => {
    let routeClone = _extends({}, route);

    if (routeClone.hasErrorBoundary == null) {
      routeClone.hasErrorBoundary = routeClone.errorElement != null;
    }

    if (routeClone.children) {
      routeClone.children = enhanceManualRouteObjects(routeClone.children);
    }

    return routeClone;
  });
}

function createMemoryRouter(routes, opts) {
  return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({
    basename: opts == null ? void 0 : opts.basename,
    history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_0__.createMemoryHistory)({
      initialEntries: opts == null ? void 0 : opts.initialEntries,
      initialIndex: opts == null ? void 0 : opts.initialIndex
    }),
    hydrationData: opts == null ? void 0 : opts.hydrationData,
    routes: enhanceManualRouteObjects(routes)
  }).initialize();
} ///////////////////////////////////////////////////////////////////////////////


//# sourceMappingURL=index.js.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("88373594fed098bfed0f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMDFhNzcyOTRiMmM0NDY0Zjc2MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLHdCQUF3Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDOztBQUVqQztBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLE1BQU07QUFDTix5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix3Q0FBd0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkMsd0NBQXdDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwR0FBMEc7O0FBRTFHO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNB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QU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdJQUF3STs7QUFFOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLE1BQU0sSUFBSTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1QkFBdUI7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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW9FO0FBQ3BFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRkFBMEY7O0FB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QUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtREFBc0I7QUFDeEIsdUJBQXVCLGlEQUFvQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsMkNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLE9BQU8saUNBQWlDLDREQUFTLGtNQUFrTSw0REFBUztBQUM1Uix5REFBeUQsT0FBTyxpQ0FBaUMsNERBQVMsc0RBQXNELDREQUFTO0FBQ3pLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsU0FBUywrREFBWTtBQUNyQjtBQUNBLGFBQWEsc0VBQW1CO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVvekI7QUFDdHpCOzs7Ozs7Ozs7VUNwM0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vcm91dGVyL2Rpc3Qvcm91dGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL2RldmVsb3BtZW50L2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi9ub2RlX21vZHVsZXMvcmVhY3Qtcm91dGVyLWRvbS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1yb3V0ZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3Qvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHJlbWl4LXJ1bi9yb3V0ZXIgdjEuMy4yXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBUeXBlcyBhbmQgQ29uc3RhbnRzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIEFjdGlvbnMgcmVwcmVzZW50IHRoZSB0eXBlIG9mIGNoYW5nZSB0byBhIGxvY2F0aW9uIHZhbHVlLlxuICovXG52YXIgQWN0aW9uO1xuXG4oZnVuY3Rpb24gKEFjdGlvbikge1xuICAvKipcbiAgICogQSBQT1AgaW5kaWNhdGVzIGEgY2hhbmdlIHRvIGFuIGFyYml0cmFyeSBpbmRleCBpbiB0aGUgaGlzdG9yeSBzdGFjaywgc3VjaFxuICAgKiBhcyBhIGJhY2sgb3IgZm9yd2FyZCBuYXZpZ2F0aW9uLiBJdCBkb2VzIG5vdCBkZXNjcmliZSB0aGUgZGlyZWN0aW9uIG9mIHRoZVxuICAgKiBuYXZpZ2F0aW9uLCBvbmx5IHRoYXQgdGhlIGN1cnJlbnQgaW5kZXggY2hhbmdlZC5cbiAgICpcbiAgICogTm90ZTogVGhpcyBpcyB0aGUgZGVmYXVsdCBhY3Rpb24gZm9yIG5ld2x5IGNyZWF0ZWQgaGlzdG9yeSBvYmplY3RzLlxuICAgKi9cbiAgQWN0aW9uW1wiUG9wXCJdID0gXCJQT1BcIjtcbiAgLyoqXG4gICAqIEEgUFVTSCBpbmRpY2F0ZXMgYSBuZXcgZW50cnkgYmVpbmcgYWRkZWQgdG8gdGhlIGhpc3Rvcnkgc3RhY2ssIHN1Y2ggYXMgd2hlblxuICAgKiBhIGxpbmsgaXMgY2xpY2tlZCBhbmQgYSBuZXcgcGFnZSBsb2Fkcy4gV2hlbiB0aGlzIGhhcHBlbnMsIGFsbCBzdWJzZXF1ZW50XG4gICAqIGVudHJpZXMgaW4gdGhlIHN0YWNrIGFyZSBsb3N0LlxuICAgKi9cblxuICBBY3Rpb25bXCJQdXNoXCJdID0gXCJQVVNIXCI7XG4gIC8qKlxuICAgKiBBIFJFUExBQ0UgaW5kaWNhdGVzIHRoZSBlbnRyeSBhdCB0aGUgY3VycmVudCBpbmRleCBpbiB0aGUgaGlzdG9yeSBzdGFja1xuICAgKiBiZWluZyByZXBsYWNlZCBieSBhIG5ldyBvbmUuXG4gICAqL1xuXG4gIEFjdGlvbltcIlJlcGxhY2VcIl0gPSBcIlJFUExBQ0VcIjtcbn0pKEFjdGlvbiB8fCAoQWN0aW9uID0ge30pKTtcblxuY29uc3QgUG9wU3RhdGVFdmVudFR5cGUgPSBcInBvcHN0YXRlXCI7XG4vKipcbiAqIE1lbW9yeSBoaXN0b3J5IHN0b3JlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiBtZW1vcnkuIEl0IGlzIGRlc2lnbmVkIGZvciB1c2VcbiAqIGluIHN0YXRlZnVsIG5vbi1icm93c2VyIGVudmlyb25tZW50cyBsaWtlIHRlc3RzIGFuZCBSZWFjdCBOYXRpdmUuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBsZXQge1xuICAgIGluaXRpYWxFbnRyaWVzID0gW1wiL1wiXSxcbiAgICBpbml0aWFsSW5kZXgsXG4gICAgdjVDb21wYXQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgbGV0IGVudHJpZXM7IC8vIERlY2xhcmUgc28gd2UgY2FuIGFjY2VzcyBmcm9tIGNyZWF0ZU1lbW9yeUxvY2F0aW9uXG5cbiAgZW50cmllcyA9IGluaXRpYWxFbnRyaWVzLm1hcCgoZW50cnksIGluZGV4KSA9PiBjcmVhdGVNZW1vcnlMb2NhdGlvbihlbnRyeSwgdHlwZW9mIGVudHJ5ID09PSBcInN0cmluZ1wiID8gbnVsbCA6IGVudHJ5LnN0YXRlLCBpbmRleCA9PT0gMCA/IFwiZGVmYXVsdFwiIDogdW5kZWZpbmVkKSk7XG4gIGxldCBpbmRleCA9IGNsYW1wSW5kZXgoaW5pdGlhbEluZGV4ID09IG51bGwgPyBlbnRyaWVzLmxlbmd0aCAtIDEgOiBpbml0aWFsSW5kZXgpO1xuICBsZXQgYWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgbGV0IGxpc3RlbmVyID0gbnVsbDtcblxuICBmdW5jdGlvbiBjbGFtcEluZGV4KG4pIHtcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgMCksIGVudHJpZXMubGVuZ3RoIC0gMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIGVudHJpZXNbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlLCBrZXkpIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgIH1cblxuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGVudHJpZXMgPyBnZXRDdXJyZW50TG9jYXRpb24oKS5wYXRobmFtZSA6IFwiL1wiLCB0bywgc3RhdGUsIGtleSk7XG4gICAgd2FybmluZyQxKGxvY2F0aW9uLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gXCIvXCIsIFwicmVsYXRpdmUgcGF0aG5hbWVzIGFyZSBub3Qgc3VwcG9ydGVkIGluIG1lbW9yeSBoaXN0b3J5OiBcIiArIEpTT04uc3RyaW5naWZ5KHRvKSk7XG4gICAgcmV0dXJuIGxvY2F0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSHJlZih0bykge1xuICAgIHJldHVybiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGluZGV4KCkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH0sXG5cbiAgICBnZXQgYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgIH0sXG5cbiAgICBjcmVhdGVIcmVmLFxuXG4gICAgY3JlYXRlVVJMKHRvKSB7XG4gICAgICByZXR1cm4gbmV3IFVSTChjcmVhdGVIcmVmKHRvKSwgXCJodHRwOi8vbG9jYWxob3N0XCIpO1xuICAgIH0sXG5cbiAgICBlbmNvZGVMb2NhdGlvbih0bykge1xuICAgICAgbGV0IHBhdGggPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pIDogdG87XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZTogcGF0aC5wYXRobmFtZSB8fCBcIlwiLFxuICAgICAgICBzZWFyY2g6IHBhdGguc2VhcmNoIHx8IFwiXCIsXG4gICAgICAgIGhhc2g6IHBhdGguaGFzaCB8fCBcIlwiXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBwdXNoKHRvLCBzdGF0ZSkge1xuICAgICAgYWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTWVtb3J5TG9jYXRpb24odG8sIHN0YXRlKTtcbiAgICAgIGluZGV4ICs9IDE7XG4gICAgICBlbnRyaWVzLnNwbGljZShpbmRleCwgZW50cmllcy5sZW5ndGgsIG5leHRMb2NhdGlvbik7XG5cbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHJlcGxhY2UodG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUpO1xuICAgICAgZW50cmllc1tpbmRleF0gPSBuZXh0TG9jYXRpb247XG5cbiAgICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGE6IDBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGdvKGRlbHRhKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgICAgbGV0IG5leHRJbmRleCA9IGNsYW1wSW5kZXgoaW5kZXggKyBkZWx0YSk7XG4gICAgICBsZXQgbmV4dExvY2F0aW9uID0gZW50cmllc1tuZXh0SW5kZXhdO1xuICAgICAgaW5kZXggPSBuZXh0SW5kZXg7XG5cbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lcih7XG4gICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG4gICAgICAgICAgZGVsdGFcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGxpc3Rlbihmbikge1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufVxuLyoqXG4gKiBCcm93c2VyIGhpc3Rvcnkgc3RvcmVzIHRoZSBsb2NhdGlvbiBpbiByZWd1bGFyIFVSTHMuIFRoaXMgaXMgdGhlIHN0YW5kYXJkIGZvclxuICogbW9zdCB3ZWIgYXBwcywgYnV0IGl0IHJlcXVpcmVzIHNvbWUgY29uZmlndXJhdGlvbiBvbiB0aGUgc2VydmVyIHRvIGVuc3VyZSB5b3VcbiAqIHNlcnZlIHRoZSBzYW1lIGFwcCBhdCBtdWx0aXBsZSBVUkxzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlbWl4LXJ1bi9oaXN0b3J5L3RyZWUvbWFpbi9kb2NzL2FwaS1yZWZlcmVuY2UubWQjY3JlYXRlYnJvd3Nlcmhpc3RvcnlcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeShvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VyTG9jYXRpb24od2luZG93LCBnbG9iYWxIaXN0b3J5KSB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGNyZWF0ZUxvY2F0aW9uKFwiXCIsIHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaFxuICAgIH0sIC8vIHN0YXRlIGRlZmF1bHRzIHRvIGBudWxsYCBiZWNhdXNlIGB3aW5kb3cuaGlzdG9yeS5zdGF0ZWAgZG9lc1xuICAgIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS51c3IgfHwgbnVsbCwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLmtleSB8fCBcImRlZmF1bHRcIik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVCcm93c2VySHJlZih3aW5kb3csIHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cblxuICByZXR1cm4gZ2V0VXJsQmFzZWRIaXN0b3J5KGNyZWF0ZUJyb3dzZXJMb2NhdGlvbiwgY3JlYXRlQnJvd3NlckhyZWYsIG51bGwsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBIYXNoIGhpc3Rvcnkgc3RvcmVzIHRoZSBsb2NhdGlvbiBpbiB3aW5kb3cubG9jYXRpb24uaGFzaC4gVGhpcyBtYWtlcyBpdCBpZGVhbFxuICogZm9yIHNpdHVhdGlvbnMgd2hlcmUgeW91IGRvbid0IHdhbnQgdG8gc2VuZCB0aGUgbG9jYXRpb24gdG8gdGhlIHNlcnZlciBmb3JcbiAqIHNvbWUgcmVhc29uLCBlaXRoZXIgYmVjYXVzZSB5b3UgZG8gY2Fubm90IGNvbmZpZ3VyZSBpdCBvciB0aGUgVVJMIHNwYWNlIGlzXG4gKiByZXNlcnZlZCBmb3Igc29tZXRoaW5nIGVsc2UuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL2hpc3RvcnkvdHJlZS9tYWluL2RvY3MvYXBpLXJlZmVyZW5jZS5tZCNjcmVhdGVoYXNoaGlzdG9yeVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpIHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgICBoYXNoID0gXCJcIlxuICAgIH0gPSBwYXJzZVBhdGgod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKTtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24oXCJcIiwge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSwgLy8gc3RhdGUgZGVmYXVsdHMgdG8gYG51bGxgIGJlY2F1c2UgYHdpbmRvdy5oaXN0b3J5LnN0YXRlYCBkb2VzXG4gICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLnVzciB8fCBudWxsLCBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUua2V5IHx8IFwiZGVmYXVsdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhhc2hIcmVmKHdpbmRvdywgdG8pIHtcbiAgICBsZXQgYmFzZSA9IHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYmFzZVwiKTtcbiAgICBsZXQgaHJlZiA9IFwiXCI7XG5cbiAgICBpZiAoYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIikpIHtcbiAgICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XG4gICAgICBocmVmID0gaGFzaEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBoYXNoSW5kZXgpO1xuICAgIH1cblxuICAgIHJldHVybiBocmVmICsgXCIjXCIgKyAodHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKSk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUhhc2hMb2NhdGlvbihsb2NhdGlvbiwgdG8pIHtcbiAgICB3YXJuaW5nJDEobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApID09PSBcIi9cIiwgXCJyZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gaGFzaCBoaXN0b3J5LnB1c2goXCIgKyBKU09OLnN0cmluZ2lmeSh0bykgKyBcIilcIik7XG4gIH1cblxuICByZXR1cm4gZ2V0VXJsQmFzZWRIaXN0b3J5KGNyZWF0ZUhhc2hMb2NhdGlvbiwgY3JlYXRlSGFzaEhyZWYsIHZhbGlkYXRlSGFzaExvY2F0aW9uLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIGludmFyaWFudCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlIHx8IHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB3YXJuaW5nJDEoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIGhpc3RvcnkhXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBlcnJvciBpcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB5b3UgY2FuIG1vcmUgZWFzaWx5XG4gICAgICAvLyBmaW5kIHRoZSBzb3VyY2UgZm9yIGEgd2FybmluZyB0aGF0IGFwcGVhcnMgaW4gdGhlIGNvbnNvbGUgYnlcbiAgICAgIC8vIGVuYWJsaW5nIFwicGF1c2Ugb24gZXhjZXB0aW9uc1wiIGluIHlvdXIgSmF2YVNjcmlwdCBkZWJ1Z2dlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOCk7XG59XG4vKipcbiAqIEZvciBicm93c2VyLWJhc2VkIGhpc3Rvcmllcywgd2UgY29tYmluZSB0aGUgc3RhdGUgYW5kIGtleSBpbnRvIGFuIG9iamVjdFxuICovXG5cblxuZnVuY3Rpb24gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCkge1xuICByZXR1cm4ge1xuICAgIHVzcjogbG9jYXRpb24uc3RhdGUsXG4gICAga2V5OiBsb2NhdGlvbi5rZXksXG4gICAgaWR4OiBpbmRleFxuICB9O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgTG9jYXRpb24gb2JqZWN0IHdpdGggYSB1bmlxdWUga2V5IGZyb20gdGhlIGdpdmVuIFBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKGN1cnJlbnQsIHRvLCBzdGF0ZSwga2V5KSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBudWxsO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uID0gX2V4dGVuZHMoe1xuICAgIHBhdGhuYW1lOiB0eXBlb2YgY3VycmVudCA9PT0gXCJzdHJpbmdcIiA/IGN1cnJlbnQgOiBjdXJyZW50LnBhdGhuYW1lLFxuICAgIHNlYXJjaDogXCJcIixcbiAgICBoYXNoOiBcIlwiXG4gIH0sIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bywge1xuICAgIHN0YXRlLFxuICAgIC8vIFRPRE86IFRoaXMgY291bGQgYmUgY2xlYW5lZCB1cC4gIHB1c2gvcmVwbGFjZSBzaG91bGQgcHJvYmFibHkganVzdCB0YWtlXG4gICAgLy8gZnVsbCBMb2NhdGlvbnMgbm93IGFuZCBhdm9pZCB0aGUgbmVlZCB0byBydW4gdGhyb3VnaCB0aGlzIGZsb3cgYXQgYWxsXG4gICAgLy8gQnV0IHRoYXQncyBhIHByZXR0eSBiaWcgcmVmYWN0b3IgdG8gdGhlIGN1cnJlbnQgdGVzdCBzdWl0ZSBzbyBnb2luZyB0b1xuICAgIC8vIGtlZXAgYXMgaXMgZm9yIHRoZSB0aW1lIGJlaW5nIGFuZCBqdXN0IGxldCBhbnkgaW5jb21pbmcga2V5cyB0YWtlIHByZWNlZGVuY2VcbiAgICBrZXk6IHRvICYmIHRvLmtleSB8fCBrZXkgfHwgY3JlYXRlS2V5KClcbiAgfSk7XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgc3RyaW5nIFVSTCBwYXRoIGZyb20gdGhlIGdpdmVuIHBhdGhuYW1lLCBzZWFyY2gsIGFuZCBoYXNoIGNvbXBvbmVudHMuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUGF0aChfcmVmKSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWUgPSBcIi9cIixcbiAgICBzZWFyY2ggPSBcIlwiLFxuICAgIGhhc2ggPSBcIlwiXG4gIH0gPSBfcmVmO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaCAhPT0gXCI/XCIpIHBhdGhuYW1lICs9IHNlYXJjaC5jaGFyQXQoMCkgPT09IFwiP1wiID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4gIGlmIChoYXNoICYmIGhhc2ggIT09IFwiI1wiKSBwYXRobmFtZSArPSBoYXNoLmNoYXJBdCgwKSA9PT0gXCIjXCIgPyBoYXNoIDogXCIjXCIgKyBoYXNoO1xuICByZXR1cm4gcGF0aG5hbWU7XG59XG4vKipcbiAqIFBhcnNlcyBhIHN0cmluZyBVUkwgcGF0aCBpbnRvIGl0cyBzZXBhcmF0ZSBwYXRobmFtZSwgc2VhcmNoLCBhbmQgaGFzaCBjb21wb25lbnRzLlxuICovXG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIGxldCBwYXJzZWRQYXRoID0ge307XG5cbiAgaWYgKHBhdGgpIHtcbiAgICBsZXQgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiI1wiKTtcblxuICAgIGlmIChoYXNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5oYXNoID0gcGF0aC5zdWJzdHIoaGFzaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBoYXNoSW5kZXgpO1xuICAgIH1cblxuICAgIGxldCBzZWFyY2hJbmRleCA9IHBhdGguaW5kZXhPZihcIj9cIik7XG5cbiAgICBpZiAoc2VhcmNoSW5kZXggPj0gMCkge1xuICAgICAgcGFyc2VkUGF0aC5zZWFyY2ggPSBwYXRoLnN1YnN0cihzZWFyY2hJbmRleCk7XG4gICAgICBwYXRoID0gcGF0aC5zdWJzdHIoMCwgc2VhcmNoSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChwYXRoKSB7XG4gICAgICBwYXJzZWRQYXRoLnBhdGhuYW1lID0gcGF0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFyc2VkUGF0aDtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsQmFzZWRIaXN0b3J5KGdldExvY2F0aW9uLCBjcmVhdGVIcmVmLCB2YWxpZGF0ZUxvY2F0aW9uLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBsZXQge1xuICAgIHdpbmRvdyA9IGRvY3VtZW50LmRlZmF1bHRWaWV3LFxuICAgIHY1Q29tcGF0ID0gZmFsc2VcbiAgfSA9IG9wdGlvbnM7XG4gIGxldCBnbG9iYWxIaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuICBsZXQgaW5kZXggPSBnZXRJbmRleCgpOyAvLyBJbmRleCBzaG91bGQgb25seSBiZSBudWxsIHdoZW4gd2UgaW5pdGlhbGl6ZS4gSWYgbm90LCBpdCdzIGJlY2F1c2UgdGhlXG4gIC8vIHVzZXIgY2FsbGVkIGhpc3RvcnkucHVzaFN0YXRlIG9yIGhpc3RvcnkucmVwbGFjZVN0YXRlIGRpcmVjdGx5LCBpbiB3aGljaFxuICAvLyBjYXNlIHdlIHNob3VsZCBsb2cgYSB3YXJuaW5nIGFzIGl0IHdpbGwgcmVzdWx0IGluIGJ1Z3MuXG5cbiAgaWYgKGluZGV4ID09IG51bGwpIHtcbiAgICBpbmRleCA9IDA7XG4gICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGdsb2JhbEhpc3Rvcnkuc3RhdGUsIHtcbiAgICAgIGlkeDogaW5kZXhcbiAgICB9KSwgXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRJbmRleCgpIHtcbiAgICBsZXQgc3RhdGUgPSBnbG9iYWxIaXN0b3J5LnN0YXRlIHx8IHtcbiAgICAgIGlkeDogbnVsbFxuICAgIH07XG4gICAgcmV0dXJuIHN0YXRlLmlkeDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBvcCgpIHtcbiAgICBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgIGxldCBuZXh0SW5kZXggPSBnZXRJbmRleCgpO1xuICAgIGxldCBkZWx0YSA9IG5leHRJbmRleCA9PSBudWxsID8gbnVsbCA6IG5leHRJbmRleCAtIGluZGV4O1xuICAgIGluZGV4ID0gbmV4dEluZGV4O1xuXG4gICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24sIHRvLCBzdGF0ZSk7XG4gICAgaWYgKHZhbGlkYXRlTG9jYXRpb24pIHZhbGlkYXRlTG9jYXRpb24obG9jYXRpb24sIHRvKTtcbiAgICBpbmRleCA9IGdldEluZGV4KCkgKyAxO1xuICAgIGxldCBoaXN0b3J5U3RhdGUgPSBnZXRIaXN0b3J5U3RhdGUobG9jYXRpb24sIGluZGV4KTtcbiAgICBsZXQgdXJsID0gaGlzdG9yeS5jcmVhdGVIcmVmKGxvY2F0aW9uKTsgLy8gdHJ5Li4uY2F0Y2ggYmVjYXVzZSBpT1MgbGltaXRzIHVzIHRvIDEwMCBwdXNoU3RhdGUgY2FsbHMgOi9cblxuICAgIHRyeSB7XG4gICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5U3RhdGUsIFwiXCIsIHVybCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFRoZXkgYXJlIGdvaW5nIHRvIGxvc2Ugc3RhdGUgaGVyZSwgYnV0IHRoZXJlIGlzIG5vIHJlYWxcbiAgICAgIC8vIHdheSB0byB3YXJuIHRoZW0gYWJvdXQgaXQgc2luY2UgdGhlIHBhZ2Ugd2lsbCByZWZyZXNoLi4uXG4gICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHVybCk7XG4gICAgfVxuXG4gICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhOiAxXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKHRvLCBzdGF0ZSkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKGhpc3RvcnkubG9jYXRpb24sIHRvLCBzdGF0ZSk7XG4gICAgaWYgKHZhbGlkYXRlTG9jYXRpb24pIHZhbGlkYXRlTG9jYXRpb24obG9jYXRpb24sIHRvKTtcbiAgICBpbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIiwgdXJsKTtcblxuICAgIGlmICh2NUNvbXBhdCAmJiBsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uLFxuICAgICAgICBkZWx0YTogMFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVVJMKHRvKSB7XG4gICAgLy8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiBpcyBcIm51bGxcIiAodGhlIGxpdGVyYWwgc3RyaW5nIHZhbHVlKSBpbiBGaXJlZm94XG4gICAgLy8gdW5kZXIgY2VydGFpbiBjb25kaXRpb25zLCBub3RhYmx5IHdoZW4gc2VydmluZyBmcm9tIGEgbG9jYWwgSFRNTCBmaWxlXG4gICAgLy8gU2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg3ODI5N1xuICAgIGxldCBiYXNlID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiAhPT0gXCJudWxsXCIgPyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIDogd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgbGV0IGhyZWYgPSB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pO1xuICAgIGludmFyaWFudChiYXNlLCBcIk5vIHdpbmRvdy5sb2NhdGlvbi4ob3JpZ2lufGhyZWYpIGF2YWlsYWJsZSB0byBjcmVhdGUgVVJMIGZvciBocmVmOiBcIiArIGhyZWYpO1xuICAgIHJldHVybiBuZXcgVVJMKGhyZWYsIGJhc2UpO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSB7XG4gICAgZ2V0IGFjdGlvbigpIHtcbiAgICAgIHJldHVybiBhY3Rpb247XG4gICAgfSxcblxuICAgIGdldCBsb2NhdGlvbigpIHtcbiAgICAgIHJldHVybiBnZXRMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpO1xuICAgIH0sXG5cbiAgICBsaXN0ZW4oZm4pIHtcbiAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBIGhpc3Rvcnkgb25seSBhY2NlcHRzIG9uZSBhY3RpdmUgbGlzdGVuZXJcIik7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgbGlzdGVuZXIgPSBmbjtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBoYW5kbGVQb3ApO1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVIcmVmKHRvKSB7XG4gICAgICByZXR1cm4gY3JlYXRlSHJlZih3aW5kb3csIHRvKTtcbiAgICB9LFxuXG4gICAgY3JlYXRlVVJMLFxuXG4gICAgZW5jb2RlTG9jYXRpb24odG8pIHtcbiAgICAgIC8vIEVuY29kZSBhIExvY2F0aW9uIHRoZSBzYW1lIHdheSB3aW5kb3cubG9jYXRpb24gd291bGRcbiAgICAgIGxldCB1cmwgPSBjcmVhdGVVUkwodG8pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aG5hbWU6IHVybC5wYXRobmFtZSxcbiAgICAgICAgc2VhcmNoOiB1cmwuc2VhcmNoLFxuICAgICAgICBoYXNoOiB1cmwuaGFzaFxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgcHVzaCxcbiAgICByZXBsYWNlLFxuXG4gICAgZ28obikge1xuICAgICAgcmV0dXJuIGdsb2JhbEhpc3RvcnkuZ28obik7XG4gICAgfVxuXG4gIH07XG4gIHJldHVybiBoaXN0b3J5O1xufSAvLyNlbmRyZWdpb25cblxudmFyIFJlc3VsdFR5cGU7XG5cbihmdW5jdGlvbiAoUmVzdWx0VHlwZSkge1xuICBSZXN1bHRUeXBlW1wiZGF0YVwiXSA9IFwiZGF0YVwiO1xuICBSZXN1bHRUeXBlW1wiZGVmZXJyZWRcIl0gPSBcImRlZmVycmVkXCI7XG4gIFJlc3VsdFR5cGVbXCJyZWRpcmVjdFwiXSA9IFwicmVkaXJlY3RcIjtcbiAgUmVzdWx0VHlwZVtcImVycm9yXCJdID0gXCJlcnJvclwiO1xufSkoUmVzdWx0VHlwZSB8fCAoUmVzdWx0VHlwZSA9IHt9KSk7XG5cbmZ1bmN0aW9uIGlzSW5kZXhSb3V0ZShyb3V0ZSkge1xuICByZXR1cm4gcm91dGUuaW5kZXggPT09IHRydWU7XG59IC8vIFdhbGsgdGhlIHJvdXRlIHRyZWUgZ2VuZXJhdGluZyB1bmlxdWUgSURzIHdoZXJlIG5lY2Vzc2FyeSBzbyB3ZSBhcmUgd29ya2luZ1xuLy8gc29sZWx5IHdpdGggQWdub3N0aWNEYXRhUm91dGVPYmplY3QncyB3aXRoaW4gdGhlIFJvdXRlclxuXG5cbmZ1bmN0aW9uIGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGVzLCBwYXJlbnRQYXRoLCBhbGxJZHMpIHtcbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBbXTtcbiAgfVxuXG4gIGlmIChhbGxJZHMgPT09IHZvaWQgMCkge1xuICAgIGFsbElkcyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHJldHVybiByb3V0ZXMubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdHJlZVBhdGggPSBbLi4ucGFyZW50UGF0aCwgaW5kZXhdO1xuICAgIGxldCBpZCA9IHR5cGVvZiByb3V0ZS5pZCA9PT0gXCJzdHJpbmdcIiA/IHJvdXRlLmlkIDogdHJlZVBhdGguam9pbihcIi1cIik7XG4gICAgaW52YXJpYW50KHJvdXRlLmluZGV4ICE9PSB0cnVlIHx8ICFyb3V0ZS5jaGlsZHJlbiwgXCJDYW5ub3Qgc3BlY2lmeSBjaGlsZHJlbiBvbiBhbiBpbmRleCByb3V0ZVwiKTtcbiAgICBpbnZhcmlhbnQoIWFsbElkcy5oYXMoaWQpLCBcIkZvdW5kIGEgcm91dGUgaWQgY29sbGlzaW9uIG9uIGlkIFxcXCJcIiArIGlkICsgXCJcXFwiLiAgUm91dGUgXCIgKyBcImlkJ3MgbXVzdCBiZSBnbG9iYWxseSB1bmlxdWUgd2l0aGluIERhdGEgUm91dGVyIHVzYWdlc1wiKTtcbiAgICBhbGxJZHMuYWRkKGlkKTtcblxuICAgIGlmIChpc0luZGV4Um91dGUocm91dGUpKSB7XG4gICAgICBsZXQgaW5kZXhSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwge1xuICAgICAgICBpZFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbmRleFJvdXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcGF0aE9yTGF5b3V0Um91dGUgPSBfZXh0ZW5kcyh7fSwgcm91dGUsIHtcbiAgICAgICAgaWQsXG4gICAgICAgIGNoaWxkcmVuOiByb3V0ZS5jaGlsZHJlbiA/IGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMocm91dGUuY2hpbGRyZW4sIHRyZWVQYXRoLCBhbGxJZHMpIDogdW5kZWZpbmVkXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHBhdGhPckxheW91dFJvdXRlO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIE1hdGNoZXMgdGhlIGdpdmVuIHJvdXRlcyB0byBhIGxvY2F0aW9uIGFuZCByZXR1cm5zIHRoZSBtYXRjaCBkYXRhLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvbWF0Y2gtcm91dGVzXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZXMocm91dGVzLCBsb2NhdGlvbkFyZywgYmFzZW5hbWUpIHtcbiAgaWYgKGJhc2VuYW1lID09PSB2b2lkIDApIHtcbiAgICBiYXNlbmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uID0gdHlwZW9mIGxvY2F0aW9uQXJnID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uQXJnKSA6IGxvY2F0aW9uQXJnO1xuICBsZXQgcGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKGxvY2F0aW9uLnBhdGhuYW1lIHx8IFwiL1wiLCBiYXNlbmFtZSk7XG5cbiAgaWYgKHBhdGhuYW1lID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBicmFuY2hlcyA9IGZsYXR0ZW5Sb3V0ZXMocm91dGVzKTtcbiAgcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpO1xuICBsZXQgbWF0Y2hlcyA9IG51bGw7XG5cbiAgZm9yIChsZXQgaSA9IDA7IG1hdGNoZXMgPT0gbnVsbCAmJiBpIDwgYnJhbmNoZXMubGVuZ3RoOyArK2kpIHtcbiAgICBtYXRjaGVzID0gbWF0Y2hSb3V0ZUJyYW5jaChicmFuY2hlc1tpXSwgLy8gSW5jb21pbmcgcGF0aG5hbWVzIGFyZSBnZW5lcmFsbHkgZW5jb2RlZCBmcm9tIGVpdGhlciB3aW5kb3cubG9jYXRpb25cbiAgICAvLyBvciBmcm9tIHJvdXRlci5uYXZpZ2F0ZSwgYnV0IHdlIHdhbnQgdG8gbWF0Y2ggYWdhaW5zdCB0aGUgdW5lbmNvZGVkXG4gICAgLy8gcGF0aHMgaW4gdGhlIHJvdXRlIGRlZmluaXRpb25zLiAgTWVtb3J5IHJvdXRlciBsb2NhdGlvbnMgd29uJ3QgYmVcbiAgICAvLyBlbmNvZGVkIGhlcmUgYnV0IHRoZXJlIGFsc28gc2hvdWxkbid0IGJlIGFueXRoaW5nIHRvIGRlY29kZSBzbyB0aGlzXG4gICAgLy8gc2hvdWxkIGJlIGEgc2FmZSBvcGVyYXRpb24uICBUaGlzIGF2b2lkcyBuZWVkaW5nIG1hdGNoUm91dGVzIHRvIGJlXG4gICAgLy8gaGlzdG9yeS1hd2FyZS5cbiAgICBzYWZlbHlEZWNvZGVVUkkocGF0aG5hbWUpKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuUm91dGVzKHJvdXRlcywgYnJhbmNoZXMsIHBhcmVudHNNZXRhLCBwYXJlbnRQYXRoKSB7XG4gIGlmIChicmFuY2hlcyA9PT0gdm9pZCAwKSB7XG4gICAgYnJhbmNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRzTWV0YSA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50c01ldGEgPSBbXTtcbiAgfVxuXG4gIGlmIChwYXJlbnRQYXRoID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRQYXRoID0gXCJcIjtcbiAgfVxuXG4gIGxldCBmbGF0dGVuUm91dGUgPSAocm91dGUsIGluZGV4LCByZWxhdGl2ZVBhdGgpID0+IHtcbiAgICBsZXQgbWV0YSA9IHtcbiAgICAgIHJlbGF0aXZlUGF0aDogcmVsYXRpdmVQYXRoID09PSB1bmRlZmluZWQgPyByb3V0ZS5wYXRoIHx8IFwiXCIgOiByZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiByb3V0ZS5jYXNlU2Vuc2l0aXZlID09PSB0cnVlLFxuICAgICAgY2hpbGRyZW5JbmRleDogaW5kZXgsXG4gICAgICByb3V0ZVxuICAgIH07XG5cbiAgICBpZiAobWV0YS5yZWxhdGl2ZVBhdGguc3RhcnRzV2l0aChcIi9cIikpIHtcbiAgICAgIGludmFyaWFudChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKHBhcmVudFBhdGgpLCBcIkFic29sdXRlIHJvdXRlIHBhdGggXFxcIlwiICsgbWV0YS5yZWxhdGl2ZVBhdGggKyBcIlxcXCIgbmVzdGVkIHVuZGVyIHBhdGggXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiIGlzIG5vdCB2YWxpZC4gQW4gYWJzb2x1dGUgY2hpbGQgcm91dGUgcGF0aCBcIikgKyBcIm11c3Qgc3RhcnQgd2l0aCB0aGUgY29tYmluZWQgcGF0aCBvZiBhbGwgaXRzIHBhcmVudCByb3V0ZXMuXCIpO1xuICAgICAgbWV0YS5yZWxhdGl2ZVBhdGggPSBtZXRhLnJlbGF0aXZlUGF0aC5zbGljZShwYXJlbnRQYXRoLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSBqb2luUGF0aHMoW3BhcmVudFBhdGgsIG1ldGEucmVsYXRpdmVQYXRoXSk7XG4gICAgbGV0IHJvdXRlc01ldGEgPSBwYXJlbnRzTWV0YS5jb25jYXQobWV0YSk7IC8vIEFkZCB0aGUgY2hpbGRyZW4gYmVmb3JlIGFkZGluZyB0aGlzIHJvdXRlIHRvIHRoZSBhcnJheSBzbyB3ZSB0cmF2ZXJzZSB0aGVcbiAgICAvLyByb3V0ZSB0cmVlIGRlcHRoLWZpcnN0IGFuZCBjaGlsZCByb3V0ZXMgYXBwZWFyIGJlZm9yZSB0aGVpciBwYXJlbnRzIGluXG4gICAgLy8gdGhlIFwiZmxhdHRlbmVkXCIgdmVyc2lvbi5cblxuICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICBpbnZhcmlhbnQoIC8vIE91ciB0eXBlcyBrbm93IGJldHRlciwgYnV0IHJ1bnRpbWUgSlMgbWF5IG5vdCFcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgIHJvdXRlLmluZGV4ICE9PSB0cnVlLCBcIkluZGV4IHJvdXRlcyBtdXN0IG5vdCBoYXZlIGNoaWxkIHJvdXRlcy4gUGxlYXNlIHJlbW92ZSBcIiArIChcImFsbCBjaGlsZCByb3V0ZXMgZnJvbSByb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIuXCIpKTtcbiAgICAgIGZsYXR0ZW5Sb3V0ZXMocm91dGUuY2hpbGRyZW4sIGJyYW5jaGVzLCByb3V0ZXNNZXRhLCBwYXRoKTtcbiAgICB9IC8vIFJvdXRlcyB3aXRob3V0IGEgcGF0aCBzaG91bGRuJ3QgZXZlciBtYXRjaCBieSB0aGVtc2VsdmVzIHVubGVzcyB0aGV5IGFyZVxuICAgIC8vIGluZGV4IHJvdXRlcywgc28gZG9uJ3QgYWRkIHRoZW0gdG8gdGhlIGxpc3Qgb2YgcG9zc2libGUgYnJhbmNoZXMuXG5cblxuICAgIGlmIChyb3V0ZS5wYXRoID09IG51bGwgJiYgIXJvdXRlLmluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYnJhbmNoZXMucHVzaCh7XG4gICAgICBwYXRoLFxuICAgICAgc2NvcmU6IGNvbXB1dGVTY29yZShwYXRoLCByb3V0ZS5pbmRleCksXG4gICAgICByb3V0ZXNNZXRhXG4gICAgfSk7XG4gIH07XG5cbiAgcm91dGVzLmZvckVhY2goKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgIHZhciBfcm91dGUkcGF0aDtcblxuICAgIC8vIGNvYXJzZS1ncmFpbiBjaGVjayBmb3Igb3B0aW9uYWwgcGFyYW1zXG4gICAgaWYgKHJvdXRlLnBhdGggPT09IFwiXCIgfHwgISgoX3JvdXRlJHBhdGggPSByb3V0ZS5wYXRoKSAhPSBudWxsICYmIF9yb3V0ZSRwYXRoLmluY2x1ZGVzKFwiP1wiKSkpIHtcbiAgICAgIGZsYXR0ZW5Sb3V0ZShyb3V0ZSwgaW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBleHBsb2RlZCBvZiBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhyb3V0ZS5wYXRoKSkge1xuICAgICAgICBmbGF0dGVuUm91dGUocm91dGUsIGluZGV4LCBleHBsb2RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGJyYW5jaGVzO1xufVxuLyoqXG4gKiBDb21wdXRlcyBhbGwgY29tYmluYXRpb25zIG9mIG9wdGlvbmFsIHBhdGggc2VnbWVudHMgZm9yIGEgZ2l2ZW4gcGF0aCxcbiAqIGV4Y2x1ZGluZyBjb21iaW5hdGlvbnMgdGhhdCBhcmUgYW1iaWd1b3VzIGFuZCBvZiBsb3dlciBwcmlvcml0eS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYC9vbmUvOnR3bz8vdGhyZWUvOmZvdXI/LzpmaXZlP2AgZXhwbG9kZXMgdG86XG4gKiAtIGAvb25lL3RocmVlYFxuICogLSBgL29uZS86dHdvL3RocmVlYFxuICogLSBgL29uZS90aHJlZS86Zm91cmBcbiAqIC0gYC9vbmUvdGhyZWUvOmZpdmVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZvdXJgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZpdmVgXG4gKiAtIGAvb25lL3RocmVlLzpmb3VyLzpmaXZlYFxuICogLSBgL29uZS86dHdvL3RocmVlLzpmb3VyLzpmaXZlYFxuICovXG5cblxuZnVuY3Rpb24gZXhwbG9kZU9wdGlvbmFsU2VnbWVudHMocGF0aCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdO1xuICBsZXQgW2ZpcnN0LCAuLi5yZXN0XSA9IHNlZ21lbnRzOyAvLyBPcHRpb25hbCBwYXRoIHNlZ21lbnRzIGFyZSBkZW5vdGVkIGJ5IGEgdHJhaWxpbmcgYD9gXG5cbiAgbGV0IGlzT3B0aW9uYWwgPSBmaXJzdC5lbmRzV2l0aChcIj9cIik7IC8vIENvbXB1dGUgdGhlIGNvcnJlc3BvbmRpbmcgcmVxdWlyZWQgc2VnbWVudDogYGZvbz9gIC0+IGBmb29gXG5cbiAgbGV0IHJlcXVpcmVkID0gZmlyc3QucmVwbGFjZSgvXFw/JC8sIFwiXCIpO1xuXG4gIGlmIChyZXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIEludGVwcmV0IGVtcHR5IHN0cmluZyBhcyBvbWl0dGluZyBhbiBvcHRpb25hbCBzZWdtZW50XG4gICAgLy8gYFtcIm9uZVwiLCBcIlwiLCBcInRocmVlXCJdYCBjb3JyZXNwb25kcyB0byBvbWl0dGluZyBgOnR3b2AgZnJvbSBgL29uZS86dHdvPy90aHJlZWAgLT4gYC9vbmUvdGhyZWVgXG4gICAgcmV0dXJuIGlzT3B0aW9uYWwgPyBbcmVxdWlyZWQsIFwiXCJdIDogW3JlcXVpcmVkXTtcbiAgfVxuXG4gIGxldCByZXN0RXhwbG9kZWQgPSBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhyZXN0LmpvaW4oXCIvXCIpKTtcbiAgbGV0IHJlc3VsdCA9IFtdOyAvLyBBbGwgY2hpbGQgcGF0aHMgd2l0aCB0aGUgcHJlZml4LiAgRG8gdGhpcyBmb3IgYWxsIGNoaWxkcmVuIGJlZm9yZSB0aGVcbiAgLy8gb3B0aW9uYWwgdmVyc2lvbiBmb3IgYWxsIGNoaWxkcmVuIHNvIHdlIGdldCBjb25zaXN0ZW50IG9yZGVyaW5nIHdoZXJlIHRoZVxuICAvLyBwYXJlbnQgb3B0aW9uYWwgYXNwZWN0IGlzIHByZWZlcnJlZCBhcyByZXF1aXJlZC4gIE90aGVyd2lzZSwgd2UgY2FuIGdldFxuICAvLyBjaGlsZCBzZWN0aW9ucyBpbnRlcnNwZXJzZWQgd2hlcmUgZGVlcGVyIG9wdGlvbmFsIHNlZ21lbnRzIGFyZSBoaWdoZXIgdGhhblxuICAvLyBwYXJlbnQgb3B0aW9uYWwgc2VnbWVudHMsIHdoZXJlIGZvciBleGFtcGxlLCAvOnR3byB3b3VsZCBleHBsb2RlcyBfZWFybGllcl9cbiAgLy8gdGhlbiAvOm9uZS4gIEJ5IGFsd2F5cyBpbmNsdWRpbmcgdGhlIHBhcmVudCBhcyByZXF1aXJlZCBfZm9yIGFsbCBjaGlsZHJlbl9cbiAgLy8gZmlyc3QsIHdlIGF2b2lkIHRoaXMgaXNzdWVcblxuICByZXN1bHQucHVzaCguLi5yZXN0RXhwbG9kZWQubWFwKHN1YnBhdGggPT4gc3VicGF0aCA9PT0gXCJcIiA/IHJlcXVpcmVkIDogW3JlcXVpcmVkLCBzdWJwYXRoXS5qb2luKFwiL1wiKSkpOyAvLyBUaGVuIGlmIHRoaXMgaXMgYW4gb3B0aW9uYWwgdmFsdWUsIGFkZCBhbGwgY2hpbGQgdmVyc2lvbnMgd2l0aG91dFxuXG4gIGlmIChpc09wdGlvbmFsKSB7XG4gICAgcmVzdWx0LnB1c2goLi4ucmVzdEV4cGxvZGVkKTtcbiAgfSAvLyBmb3IgYWJzb2x1dGUgcGF0aHMsIGVuc3VyZSBgL2AgaW5zdGVhZCBvZiBlbXB0eSBzZWdtZW50XG5cblxuICByZXR1cm4gcmVzdWx0Lm1hcChleHBsb2RlZCA9PiBwYXRoLnN0YXJ0c1dpdGgoXCIvXCIpICYmIGV4cGxvZGVkID09PSBcIlwiID8gXCIvXCIgOiBleHBsb2RlZCk7XG59XG5cbmZ1bmN0aW9uIHJhbmtSb3V0ZUJyYW5jaGVzKGJyYW5jaGVzKSB7XG4gIGJyYW5jaGVzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgIT09IGIuc2NvcmUgPyBiLnNjb3JlIC0gYS5zY29yZSAvLyBIaWdoZXIgc2NvcmUgZmlyc3RcbiAgOiBjb21wYXJlSW5kZXhlcyhhLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSwgYi5yb3V0ZXNNZXRhLm1hcChtZXRhID0+IG1ldGEuY2hpbGRyZW5JbmRleCkpKTtcbn1cblxuY29uc3QgcGFyYW1SZSA9IC9eOlxcdyskLztcbmNvbnN0IGR5bmFtaWNTZWdtZW50VmFsdWUgPSAzO1xuY29uc3QgaW5kZXhSb3V0ZVZhbHVlID0gMjtcbmNvbnN0IGVtcHR5U2VnbWVudFZhbHVlID0gMTtcbmNvbnN0IHN0YXRpY1NlZ21lbnRWYWx1ZSA9IDEwO1xuY29uc3Qgc3BsYXRQZW5hbHR5ID0gLTI7XG5cbmNvbnN0IGlzU3BsYXQgPSBzID0+IHMgPT09IFwiKlwiO1xuXG5mdW5jdGlvbiBjb21wdXRlU2NvcmUocGF0aCwgaW5kZXgpIHtcbiAgbGV0IHNlZ21lbnRzID0gcGF0aC5zcGxpdChcIi9cIik7XG4gIGxldCBpbml0aWFsU2NvcmUgPSBzZWdtZW50cy5sZW5ndGg7XG5cbiAgaWYgKHNlZ21lbnRzLnNvbWUoaXNTcGxhdCkpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gc3BsYXRQZW5hbHR5O1xuICB9XG5cbiAgaWYgKGluZGV4KSB7XG4gICAgaW5pdGlhbFNjb3JlICs9IGluZGV4Um91dGVWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50cy5maWx0ZXIocyA9PiAhaXNTcGxhdChzKSkucmVkdWNlKChzY29yZSwgc2VnbWVudCkgPT4gc2NvcmUgKyAocGFyYW1SZS50ZXN0KHNlZ21lbnQpID8gZHluYW1pY1NlZ21lbnRWYWx1ZSA6IHNlZ21lbnQgPT09IFwiXCIgPyBlbXB0eVNlZ21lbnRWYWx1ZSA6IHN0YXRpY1NlZ21lbnRWYWx1ZSksIGluaXRpYWxTY29yZSk7XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmVJbmRleGVzKGEsIGIpIHtcbiAgbGV0IHNpYmxpbmdzID0gYS5sZW5ndGggPT09IGIubGVuZ3RoICYmIGEuc2xpY2UoMCwgLTEpLmV2ZXJ5KChuLCBpKSA9PiBuID09PSBiW2ldKTtcbiAgcmV0dXJuIHNpYmxpbmdzID8gLy8gSWYgdHdvIHJvdXRlcyBhcmUgc2libGluZ3MsIHdlIHNob3VsZCB0cnkgdG8gbWF0Y2ggdGhlIGVhcmxpZXIgc2libGluZ1xuICAvLyBmaXJzdC4gVGhpcyBhbGxvd3MgcGVvcGxlIHRvIGhhdmUgZmluZS1ncmFpbmVkIGNvbnRyb2wgb3ZlciB0aGUgbWF0Y2hpbmdcbiAgLy8gYmVoYXZpb3IgYnkgc2ltcGx5IHB1dHRpbmcgcm91dGVzIHdpdGggaWRlbnRpY2FsIHBhdGhzIGluIHRoZSBvcmRlciB0aGV5XG4gIC8vIHdhbnQgdGhlbSB0cmllZC5cbiAgYVthLmxlbmd0aCAtIDFdIC0gYltiLmxlbmd0aCAtIDFdIDogLy8gT3RoZXJ3aXNlLCBpdCBkb2Vzbid0IHJlYWxseSBtYWtlIHNlbnNlIHRvIHJhbmsgbm9uLXNpYmxpbmdzIGJ5IGluZGV4LFxuICAvLyBzbyB0aGV5IHNvcnQgZXF1YWxseS5cbiAgMDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hSb3V0ZUJyYW5jaChicmFuY2gsIHBhdGhuYW1lKSB7XG4gIGxldCB7XG4gICAgcm91dGVzTWV0YVxuICB9ID0gYnJhbmNoO1xuICBsZXQgbWF0Y2hlZFBhcmFtcyA9IHt9O1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZXNNZXRhLmxlbmd0aDsgKytpKSB7XG4gICAgbGV0IG1ldGEgPSByb3V0ZXNNZXRhW2ldO1xuICAgIGxldCBlbmQgPSBpID09PSByb3V0ZXNNZXRhLmxlbmd0aCAtIDE7XG4gICAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gbWF0Y2hlZFBhdGhuYW1lID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UobWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCkgfHwgXCIvXCI7XG4gICAgbGV0IG1hdGNoID0gbWF0Y2hQYXRoKHtcbiAgICAgIHBhdGg6IG1ldGEucmVsYXRpdmVQYXRoLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogbWV0YS5jYXNlU2Vuc2l0aXZlLFxuICAgICAgZW5kXG4gICAgfSwgcmVtYWluaW5nUGF0aG5hbWUpO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICAgIE9iamVjdC5hc3NpZ24obWF0Y2hlZFBhcmFtcywgbWF0Y2gucGFyYW1zKTtcbiAgICBsZXQgcm91dGUgPSBtZXRhLnJvdXRlO1xuICAgIG1hdGNoZXMucHVzaCh7XG4gICAgICAvLyBUT0RPOiBDYW4gdGhpcyBhcyBiZSBhdm9pZGVkP1xuICAgICAgcGFyYW1zOiBtYXRjaGVkUGFyYW1zLFxuICAgICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZV0pLFxuICAgICAgcGF0aG5hbWVCYXNlOiBub3JtYWxpemVQYXRobmFtZShqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSkpLFxuICAgICAgcm91dGVcbiAgICB9KTtcblxuICAgIGlmIChtYXRjaC5wYXRobmFtZUJhc2UgIT09IFwiL1wiKSB7XG4gICAgICBtYXRjaGVkUGF0aG5hbWUgPSBqb2luUGF0aHMoW21hdGNoZWRQYXRobmFtZSwgbWF0Y2gucGF0aG5hbWVCYXNlXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG4vKipcbiAqIFJldHVybnMgYSBwYXRoIHdpdGggcGFyYW1zIGludGVycG9sYXRlZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL2dlbmVyYXRlLXBhdGhcbiAqL1xuXG5cbmZ1bmN0aW9uIGdlbmVyYXRlUGF0aChvcmlnaW5hbFBhdGgsIHBhcmFtcykge1xuICBpZiAocGFyYW1zID09PSB2b2lkIDApIHtcbiAgICBwYXJhbXMgPSB7fTtcbiAgfVxuXG4gIGxldCBwYXRoID0gb3JpZ2luYWxQYXRoO1xuXG4gIGlmIChwYXRoLmVuZHNXaXRoKFwiKlwiKSAmJiBwYXRoICE9PSBcIipcIiAmJiAhcGF0aC5lbmRzV2l0aChcIi8qXCIpKSB7XG4gICAgd2FybmluZyhmYWxzZSwgXCJSb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdlcmUgXCIgKyAoXCJcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiIGJlY2F1c2UgdGhlIGAqYCBjaGFyYWN0ZXIgbXVzdCBcIikgKyBcImFsd2F5cyBmb2xsb3cgYSBgL2AgaW4gdGhlIHBhdHRlcm4uIFRvIGdldCByaWQgb2YgdGhpcyB3YXJuaW5nLCBcIiArIChcInBsZWFzZSBjaGFuZ2UgdGhlIHJvdXRlIHBhdGggdG8gXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIi5cIikpO1xuICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpO1xuICB9XG5cbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXjooXFx3KykoXFw/PykvZywgKF8sIGtleSwgb3B0aW9uYWwpID0+IHtcbiAgICBsZXQgcGFyYW0gPSBwYXJhbXNba2V5XTtcblxuICAgIGlmIChvcHRpb25hbCA9PT0gXCI/XCIpIHtcbiAgICAgIHJldHVybiBwYXJhbSA9PSBudWxsID8gXCJcIiA6IHBhcmFtO1xuICAgIH1cblxuICAgIGlmIChwYXJhbSA9PSBudWxsKSB7XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiTWlzc2luZyBcXFwiOlwiICsga2V5ICsgXCJcXFwiIHBhcmFtXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJhbTtcbiAgfSkucmVwbGFjZSgvXFwvOihcXHcrKShcXD8/KS9nLCAoXywga2V5LCBvcHRpb25hbCkgPT4ge1xuICAgIGxldCBwYXJhbSA9IHBhcmFtc1trZXldO1xuXG4gICAgaWYgKG9wdGlvbmFsID09PSBcIj9cIikge1xuICAgICAgcmV0dXJuIHBhcmFtID09IG51bGwgPyBcIlwiIDogXCIvXCIgKyBwYXJhbTtcbiAgICB9XG5cbiAgICBpZiAocGFyYW0gPT0gbnVsbCkge1xuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIk1pc3NpbmcgXFxcIjpcIiArIGtleSArIFwiXFxcIiBwYXJhbVwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCIvXCIgKyBwYXJhbTtcbiAgfSkgLy8gUmVtb3ZlIGFueSBvcHRpb25hbCBtYXJrZXJzIGZyb20gb3B0aW9uYWwgc3RhdGljIHNlZ21lbnRzXG4gIC5yZXBsYWNlKC9cXD8vZywgXCJcIikucmVwbGFjZSgvKFxcLz8pXFwqLywgKF8sIHByZWZpeCwgX18sIHN0cikgPT4ge1xuICAgIGNvbnN0IHN0YXIgPSBcIipcIjtcblxuICAgIGlmIChwYXJhbXNbc3Rhcl0gPT0gbnVsbCkge1xuICAgICAgLy8gSWYgbm8gc3BsYXQgd2FzIHByb3ZpZGVkLCB0cmltIHRoZSB0cmFpbGluZyBzbGFzaCBfdW5sZXNzXyBpdCdzXG4gICAgICAvLyB0aGUgZW50aXJlIHBhdGhcbiAgICAgIHJldHVybiBzdHIgPT09IFwiLypcIiA/IFwiL1wiIDogXCJcIjtcbiAgICB9IC8vIEFwcGx5IHRoZSBzcGxhdFxuXG5cbiAgICByZXR1cm4gXCJcIiArIHByZWZpeCArIHBhcmFtc1tzdGFyXTtcbiAgfSk7XG59XG4vKipcbiAqIFBlcmZvcm1zIHBhdHRlcm4gbWF0Y2hpbmcgb24gYSBVUkwgcGF0aG5hbWUgYW5kIHJldHVybnMgaW5mb3JtYXRpb24gYWJvdXRcbiAqIHRoZSBtYXRjaC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL21hdGNoLXBhdGhcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBwYXR0ZXJuID09PSBcInN0cmluZ1wiKSB7XG4gICAgcGF0dGVybiA9IHtcbiAgICAgIHBhdGg6IHBhdHRlcm4sXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBmYWxzZSxcbiAgICAgIGVuZDogdHJ1ZVxuICAgIH07XG4gIH1cblxuICBsZXQgW21hdGNoZXIsIHBhcmFtTmFtZXNdID0gY29tcGlsZVBhdGgocGF0dGVybi5wYXRoLCBwYXR0ZXJuLmNhc2VTZW5zaXRpdmUsIHBhdHRlcm4uZW5kKTtcbiAgbGV0IG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobWF0Y2hlcik7XG4gIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuICBsZXQgbWF0Y2hlZFBhdGhuYW1lID0gbWF0Y2hbMF07XG4gIGxldCBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUucmVwbGFjZSgvKC4pXFwvKyQvLCBcIiQxXCIpO1xuICBsZXQgY2FwdHVyZUdyb3VwcyA9IG1hdGNoLnNsaWNlKDEpO1xuICBsZXQgcGFyYW1zID0gcGFyYW1OYW1lcy5yZWR1Y2UoKG1lbW8sIHBhcmFtTmFtZSwgaW5kZXgpID0+IHtcbiAgICAvLyBXZSBuZWVkIHRvIGNvbXB1dGUgdGhlIHBhdGhuYW1lQmFzZSBoZXJlIHVzaW5nIHRoZSByYXcgc3BsYXQgdmFsdWVcbiAgICAvLyBpbnN0ZWFkIG9mIHVzaW5nIHBhcmFtc1tcIipcIl0gbGF0ZXIgYmVjYXVzZSBpdCB3aWxsIGJlIGRlY29kZWQgdGhlblxuICAgIGlmIChwYXJhbU5hbWUgPT09IFwiKlwiKSB7XG4gICAgICBsZXQgc3BsYXRWYWx1ZSA9IGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCI7XG4gICAgICBwYXRobmFtZUJhc2UgPSBtYXRjaGVkUGF0aG5hbWUuc2xpY2UoMCwgbWF0Y2hlZFBhdGhuYW1lLmxlbmd0aCAtIHNwbGF0VmFsdWUubGVuZ3RoKS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gICAgfVxuXG4gICAgbWVtb1twYXJhbU5hbWVdID0gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KGNhcHR1cmVHcm91cHNbaW5kZXhdIHx8IFwiXCIsIHBhcmFtTmFtZSk7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcGF0aG5hbWU6IG1hdGNoZWRQYXRobmFtZSxcbiAgICBwYXRobmFtZUJhc2UsXG4gICAgcGF0dGVyblxuICB9O1xufVxuXG5mdW5jdGlvbiBjb21waWxlUGF0aChwYXRoLCBjYXNlU2Vuc2l0aXZlLCBlbmQpIHtcbiAgaWYgKGNhc2VTZW5zaXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbmQgPT09IHZvaWQgMCkge1xuICAgIGVuZCA9IHRydWU7XG4gIH1cblxuICB3YXJuaW5nKHBhdGggPT09IFwiKlwiIHx8ICFwYXRoLmVuZHNXaXRoKFwiKlwiKSB8fCBwYXRoLmVuZHNXaXRoKFwiLypcIiksIFwiUm91dGUgcGF0aCBcXFwiXCIgKyBwYXRoICsgXCJcXFwiIHdpbGwgYmUgdHJlYXRlZCBhcyBpZiBpdCB3ZXJlIFwiICsgKFwiXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIiBiZWNhdXNlIHRoZSBgKmAgY2hhcmFjdGVyIG11c3QgXCIpICsgXCJhbHdheXMgZm9sbG93IGEgYC9gIGluIHRoZSBwYXR0ZXJuLiBUbyBnZXQgcmlkIG9mIHRoaXMgd2FybmluZywgXCIgKyAoXCJwbGVhc2UgY2hhbmdlIHRoZSByb3V0ZSBwYXRoIHRvIFxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIuXCIpKTtcbiAgbGV0IHBhcmFtTmFtZXMgPSBbXTtcbiAgbGV0IHJlZ2V4cFNvdXJjZSA9IFwiXlwiICsgcGF0aC5yZXBsYWNlKC9cXC8qXFwqPyQvLCBcIlwiKSAvLyBJZ25vcmUgdHJhaWxpbmcgLyBhbmQgLyosIHdlJ2xsIGhhbmRsZSBpdCBiZWxvd1xuICAucmVwbGFjZSgvXlxcLyovLCBcIi9cIikgLy8gTWFrZSBzdXJlIGl0IGhhcyBhIGxlYWRpbmcgL1xuICAucmVwbGFjZSgvW1xcXFwuKiteJD97fXwoKVtcXF1dL2csIFwiXFxcXCQmXCIpIC8vIEVzY2FwZSBzcGVjaWFsIHJlZ2V4IGNoYXJzXG4gIC5yZXBsYWNlKC9cXC86KFxcdyspL2csIChfLCBwYXJhbU5hbWUpID0+IHtcbiAgICBwYXJhbU5hbWVzLnB1c2gocGFyYW1OYW1lKTtcbiAgICByZXR1cm4gXCIvKFteXFxcXC9dKylcIjtcbiAgfSk7XG5cbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpKSB7XG4gICAgcGFyYW1OYW1lcy5wdXNoKFwiKlwiKTtcbiAgICByZWdleHBTb3VyY2UgKz0gcGF0aCA9PT0gXCIqXCIgfHwgcGF0aCA9PT0gXCIvKlwiID8gXCIoLiopJFwiIC8vIEFscmVhZHkgbWF0Y2hlZCB0aGUgaW5pdGlhbCAvLCBqdXN0IG1hdGNoIHRoZSByZXN0XG4gICAgOiBcIig/OlxcXFwvKC4rKXxcXFxcLyopJFwiOyAvLyBEb24ndCBpbmNsdWRlIHRoZSAvIGluIHBhcmFtc1tcIipcIl1cbiAgfSBlbHNlIGlmIChlbmQpIHtcbiAgICAvLyBXaGVuIG1hdGNoaW5nIHRvIHRoZSBlbmQsIGlnbm9yZSB0cmFpbGluZyBzbGFzaGVzXG4gICAgcmVnZXhwU291cmNlICs9IFwiXFxcXC8qJFwiO1xuICB9IGVsc2UgaWYgKHBhdGggIT09IFwiXCIgJiYgcGF0aCAhPT0gXCIvXCIpIHtcbiAgICAvLyBJZiBvdXIgcGF0aCBpcyBub24tZW1wdHkgYW5kIGNvbnRhaW5zIGFueXRoaW5nIGJleW9uZCBhbiBpbml0aWFsIHNsYXNoLFxuICAgIC8vIHRoZW4gd2UgaGF2ZSBfc29tZV8gZm9ybSBvZiBwYXRoIGluIG91ciByZWdleCBzbyB3ZSBzaG91bGQgZXhwZWN0IHRvXG4gICAgLy8gbWF0Y2ggb25seSBpZiB3ZSBmaW5kIHRoZSBlbmQgb2YgdGhpcyBwYXRoIHNlZ21lbnQuICBMb29rIGZvciBhbiBvcHRpb25hbFxuICAgIC8vIG5vbi1jYXB0dXJlZCB0cmFpbGluZyBzbGFzaCAodG8gbWF0Y2ggYSBwb3J0aW9uIG9mIHRoZSBVUkwpIG9yIHRoZSBlbmRcbiAgICAvLyBvZiB0aGUgcGF0aCAoaWYgd2UndmUgbWF0Y2hlZCB0byB0aGUgZW5kKS4gIFdlIHVzZWQgdG8gZG8gdGhpcyB3aXRoIGFcbiAgICAvLyB3b3JkIGJvdW5kYXJ5IGJ1dCB0aGF0IGdpdmVzIGZhbHNlIHBvc2l0aXZlcyBvbiByb3V0ZXMgbGlrZVxuICAgIC8vIC91c2VyLXByZWZlcmVuY2VzIHNpbmNlIGAtYCBjb3VudHMgYXMgYSB3b3JkIGJvdW5kYXJ5LlxuICAgIHJlZ2V4cFNvdXJjZSArPSBcIig/Oig/PVxcXFwvfCQpKVwiO1xuICB9IGVsc2UgO1xuXG4gIGxldCBtYXRjaGVyID0gbmV3IFJlZ0V4cChyZWdleHBTb3VyY2UsIGNhc2VTZW5zaXRpdmUgPyB1bmRlZmluZWQgOiBcImlcIik7XG4gIHJldHVybiBbbWF0Y2hlciwgcGFyYW1OYW1lc107XG59XG5cbmZ1bmN0aW9uIHNhZmVseURlY29kZVVSSSh2YWx1ZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUkkodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiVGhlIFVSTCBwYXRoIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiIGNvdWxkIG5vdCBiZSBkZWNvZGVkIGJlY2F1c2UgaXQgaXMgaXMgYSBcIiArIFwibWFsZm9ybWVkIFVSTCBzZWdtZW50LiBUaGlzIGlzIHByb2JhYmx5IGR1ZSB0byBhIGJhZCBwZXJjZW50IFwiICsgKFwiZW5jb2RpbmcgKFwiICsgZXJyb3IgKyBcIikuXCIpKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLCBwYXJhbU5hbWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlRoZSB2YWx1ZSBmb3IgdGhlIFVSTCBwYXJhbSBcXFwiXCIgKyBwYXJhbU5hbWUgKyBcIlxcXCIgd2lsbCBub3QgYmUgZGVjb2RlZCBiZWNhdXNlXCIgKyAoXCIgdGhlIHN0cmluZyBcXFwiXCIgKyB2YWx1ZSArIFwiXFxcIiBpcyBhIG1hbGZvcm1lZCBVUkwgc2VnbWVudC4gVGhpcyBpcyBwcm9iYWJseVwiKSArIChcIiBkdWUgdG8gYSBiYWQgcGVyY2VudCBlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gc3RyaXBCYXNlbmFtZShwYXRobmFtZSwgYmFzZW5hbWUpIHtcbiAgaWYgKGJhc2VuYW1lID09PSBcIi9cIikgcmV0dXJuIHBhdGhuYW1lO1xuXG4gIGlmICghcGF0aG5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGJhc2VuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gV2Ugd2FudCB0byBsZWF2ZSB0cmFpbGluZyBzbGFzaCBiZWhhdmlvciBpbiB0aGUgdXNlcidzIGNvbnRyb2wsIHNvIGlmIHRoZXlcbiAgLy8gc3BlY2lmeSBhIGJhc2VuYW1lIHdpdGggYSB0cmFpbGluZyBzbGFzaCwgd2Ugc2hvdWxkIHN1cHBvcnQgaXRcblxuXG4gIGxldCBzdGFydEluZGV4ID0gYmFzZW5hbWUuZW5kc1dpdGgoXCIvXCIpID8gYmFzZW5hbWUubGVuZ3RoIC0gMSA6IGJhc2VuYW1lLmxlbmd0aDtcbiAgbGV0IG5leHRDaGFyID0gcGF0aG5hbWUuY2hhckF0KHN0YXJ0SW5kZXgpO1xuXG4gIGlmIChuZXh0Q2hhciAmJiBuZXh0Q2hhciAhPT0gXCIvXCIpIHtcbiAgICAvLyBwYXRobmFtZSBkb2VzIG5vdCBzdGFydCB3aXRoIGJhc2VuYW1lL1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHBhdGhuYW1lLnNsaWNlKHN0YXJ0SW5kZXgpIHx8IFwiL1wiO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHdhcm5pbmcoY29uZCwgbWVzc2FnZSkge1xuICBpZiAoIWNvbmQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikgY29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlbGNvbWUgdG8gZGVidWdnaW5nIEByZW1peC1ydW4vcm91dGVyIVxuICAgICAgLy9cbiAgICAgIC8vIFRoaXMgZXJyb3IgaXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28geW91IGNhbiBtb3JlIGVhc2lseVxuICAgICAgLy8gZmluZCB0aGUgc291cmNlIGZvciBhIHdhcm5pbmcgdGhhdCBhcHBlYXJzIGluIHRoZSBjb25zb2xlIGJ5XG4gICAgICAvLyBlbmFibGluZyBcInBhdXNlIG9uIGV4Y2VwdGlvbnNcIiBpbiB5b3VyIEphdmFTY3JpcHQgZGVidWdnZXIuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1lbXB0eVxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbn1cbi8qKlxuICogUmV0dXJucyBhIHJlc29sdmVkIHBhdGggb2JqZWN0IHJlbGF0aXZlIHRvIHRoZSBnaXZlbiBwYXRobmFtZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3V0aWxzL3Jlc29sdmUtcGF0aFxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRoKHRvLCBmcm9tUGF0aG5hbWUpIHtcbiAgaWYgKGZyb21QYXRobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgZnJvbVBhdGhuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQge1xuICAgIHBhdGhuYW1lOiB0b1BhdGhuYW1lLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgbGV0IHBhdGhuYW1lID0gdG9QYXRobmFtZSA/IHRvUGF0aG5hbWUuc3RhcnRzV2l0aChcIi9cIikgPyB0b1BhdGhuYW1lIDogcmVzb2x2ZVBhdGhuYW1lKHRvUGF0aG5hbWUsIGZyb21QYXRobmFtZSkgOiBmcm9tUGF0aG5hbWU7XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBub3JtYWxpemVTZWFyY2goc2VhcmNoKSxcbiAgICBoYXNoOiBub3JtYWxpemVIYXNoKGhhc2gpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZShyZWxhdGl2ZVBhdGgsIGZyb21QYXRobmFtZSkge1xuICBsZXQgc2VnbWVudHMgPSBmcm9tUGF0aG5hbWUucmVwbGFjZSgvXFwvKyQvLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIGxldCByZWxhdGl2ZVNlZ21lbnRzID0gcmVsYXRpdmVQYXRoLnNwbGl0KFwiL1wiKTtcbiAgcmVsYXRpdmVTZWdtZW50cy5mb3JFYWNoKHNlZ21lbnQgPT4ge1xuICAgIGlmIChzZWdtZW50ID09PSBcIi4uXCIpIHtcbiAgICAgIC8vIEtlZXAgdGhlIHJvb3QgXCJcIiBzZWdtZW50IHNvIHRoZSBwYXRobmFtZSBzdGFydHMgYXQgL1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHNlZ21lbnRzLnBvcCgpO1xuICAgIH0gZWxzZSBpZiAoc2VnbWVudCAhPT0gXCIuXCIpIHtcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlZ21lbnRzLmxlbmd0aCA+IDEgPyBzZWdtZW50cy5qb2luKFwiL1wiKSA6IFwiL1wiO1xufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkUGF0aEVycm9yKGNoYXIsIGZpZWxkLCBkZXN0LCBwYXRoKSB7XG4gIHJldHVybiBcIkNhbm5vdCBpbmNsdWRlIGEgJ1wiICsgY2hhciArIFwiJyBjaGFyYWN0ZXIgaW4gYSBtYW51YWxseSBzcGVjaWZpZWQgXCIgKyAoXCJgdG8uXCIgKyBmaWVsZCArIFwiYCBmaWVsZCBbXCIgKyBKU09OLnN0cmluZ2lmeShwYXRoKSArIFwiXS4gIFBsZWFzZSBzZXBhcmF0ZSBpdCBvdXQgdG8gdGhlIFwiKSArIChcImB0by5cIiArIGRlc3QgKyBcImAgZmllbGQuIEFsdGVybmF0aXZlbHkgeW91IG1heSBwcm92aWRlIHRoZSBmdWxsIHBhdGggYXMgXCIpICsgXCJhIHN0cmluZyBpbiA8TGluayB0bz1cXFwiLi4uXFxcIj4gYW5kIHRoZSByb3V0ZXIgd2lsbCBwYXJzZSBpdCBmb3IgeW91LlwiO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIFdoZW4gcHJvY2Vzc2luZyByZWxhdGl2ZSBuYXZpZ2F0aW9uIHdlIHdhbnQgdG8gaWdub3JlIGFuY2VzdG9yIHJvdXRlcyB0aGF0XG4gKiBkbyBub3QgY29udHJpYnV0ZSB0byB0aGUgcGF0aCwgc3VjaCB0aGF0IGluZGV4L3BhdGhsZXNzIGxheW91dCByb3V0ZXMgZG9uJ3RcbiAqIGludGVyZmVyZS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgd2hlbiBtb3ZpbmcgYSByb3V0ZSBlbGVtZW50IGludG8gYW4gaW5kZXggcm91dGUgYW5kL29yIGFcbiAqIHBhdGhsZXNzIGxheW91dCByb3V0ZSwgcmVsYXRpdmUgbGluayBiZWhhdmlvciBjb250YWluZWQgd2l0aGluIHNob3VsZCBzdGF5XG4gKiB0aGUgc2FtZS4gIEJvdGggb2YgdGhlIGZvbGxvd2luZyBleGFtcGxlcyBzaG91bGQgbGluayBiYWNrIHRvIHRoZSByb290OlxuICpcbiAqICAgPFJvdXRlIHBhdGg9XCIvXCI+XG4gKiAgICAgPFJvdXRlIHBhdGg9XCJhY2NvdW50c1wiIGVsZW1lbnQ9ezxMaW5rIHRvPVwiLi5cIn0+XG4gKiAgIDwvUm91dGU+XG4gKlxuICogICA8Um91dGUgcGF0aD1cIi9cIj5cbiAqICAgICA8Um91dGUgcGF0aD1cImFjY291bnRzXCI+XG4gKiAgICAgICA8Um91dGUgZWxlbWVudD17PEFjY291bnRzTGF5b3V0IC8+fT4gICAgICAgLy8gPC0tIERvZXMgbm90IGNvbnRyaWJ1dGVcbiAqICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxMaW5rIHRvPVwiLi5cIn0gLz4gIC8vIDwtLSBEb2VzIG5vdCBjb250cmlidXRlXG4gKiAgICAgICA8L1JvdXRlXG4gKiAgICAgPC9Sb3V0ZT5cbiAqICAgPC9Sb3V0ZT5cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIG1hdGNoZXMuZmlsdGVyKChtYXRjaCwgaW5kZXgpID0+IGluZGV4ID09PSAwIHx8IG1hdGNoLnJvdXRlLnBhdGggJiYgbWF0Y2gucm91dGUucGF0aC5sZW5ndGggPiAwKTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiByZXNvbHZlVG8odG9BcmcsIHJvdXRlUGF0aG5hbWVzLCBsb2NhdGlvblBhdGhuYW1lLCBpc1BhdGhSZWxhdGl2ZSkge1xuICBpZiAoaXNQYXRoUmVsYXRpdmUgPT09IHZvaWQgMCkge1xuICAgIGlzUGF0aFJlbGF0aXZlID0gZmFsc2U7XG4gIH1cblxuICBsZXQgdG87XG5cbiAgaWYgKHR5cGVvZiB0b0FyZyA9PT0gXCJzdHJpbmdcIikge1xuICAgIHRvID0gcGFyc2VQYXRoKHRvQXJnKTtcbiAgfSBlbHNlIHtcbiAgICB0byA9IF9leHRlbmRzKHt9LCB0b0FyZyk7XG4gICAgaW52YXJpYW50KCF0by5wYXRobmFtZSB8fCAhdG8ucGF0aG5hbWUuaW5jbHVkZXMoXCI/XCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiP1wiLCBcInBhdGhuYW1lXCIsIFwic2VhcmNoXCIsIHRvKSk7XG4gICAgaW52YXJpYW50KCF0by5wYXRobmFtZSB8fCAhdG8ucGF0aG5hbWUuaW5jbHVkZXMoXCIjXCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInBhdGhuYW1lXCIsIFwiaGFzaFwiLCB0bykpO1xuICAgIGludmFyaWFudCghdG8uc2VhcmNoIHx8ICF0by5zZWFyY2guaW5jbHVkZXMoXCIjXCIpLCBnZXRJbnZhbGlkUGF0aEVycm9yKFwiI1wiLCBcInNlYXJjaFwiLCBcImhhc2hcIiwgdG8pKTtcbiAgfVxuXG4gIGxldCBpc0VtcHR5UGF0aCA9IHRvQXJnID09PSBcIlwiIHx8IHRvLnBhdGhuYW1lID09PSBcIlwiO1xuICBsZXQgdG9QYXRobmFtZSA9IGlzRW1wdHlQYXRoID8gXCIvXCIgOiB0by5wYXRobmFtZTtcbiAgbGV0IGZyb207IC8vIFJvdXRpbmcgaXMgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgcGF0aG5hbWUgaWYgZXhwbGljaXRseSByZXF1ZXN0ZWQuXG4gIC8vXG4gIC8vIElmIGEgcGF0aG5hbWUgaXMgZXhwbGljaXRseSBwcm92aWRlZCBpbiBgdG9gLCBpdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlXG4gIC8vIHJvdXRlIGNvbnRleHQuIFRoaXMgaXMgZXhwbGFpbmVkIGluIGBOb3RlIG9uIGA8TGluayB0bz5gIHZhbHVlc2AgaW4gb3VyXG4gIC8vIG1pZ3JhdGlvbiBndWlkZSBmcm9tIHY1IGFzIGEgbWVhbnMgb2YgZGlzYW1iaWd1YXRpb24gYmV0d2VlbiBgdG9gIHZhbHVlc1xuICAvLyB0aGF0IGJlZ2luIHdpdGggYC9gIGFuZCB0aG9zZSB0aGF0IGRvIG5vdC4gSG93ZXZlciwgdGhpcyBpcyBwcm9ibGVtYXRpYyBmb3JcbiAgLy8gYHRvYCB2YWx1ZXMgdGhhdCBkbyBub3QgcHJvdmlkZSBhIHBhdGhuYW1lLiBgdG9gIGNhbiBzaW1wbHkgYmUgYSBzZWFyY2ggb3JcbiAgLy8gaGFzaCBzdHJpbmcsIGluIHdoaWNoIGNhc2Ugd2Ugc2hvdWxkIGFzc3VtZSB0aGF0IHRoZSBuYXZpZ2F0aW9uIGlzIHJlbGF0aXZlXG4gIC8vIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uJ3MgcGF0aG5hbWUgYW5kICpub3QqIHRoZSByb3V0ZSBwYXRobmFtZS5cblxuICBpZiAoaXNQYXRoUmVsYXRpdmUgfHwgdG9QYXRobmFtZSA9PSBudWxsKSB7XG4gICAgZnJvbSA9IGxvY2F0aW9uUGF0aG5hbWU7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHJvdXRlUGF0aG5hbWVJbmRleCA9IHJvdXRlUGF0aG5hbWVzLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAodG9QYXRobmFtZS5zdGFydHNXaXRoKFwiLi5cIikpIHtcbiAgICAgIGxldCB0b1NlZ21lbnRzID0gdG9QYXRobmFtZS5zcGxpdChcIi9cIik7IC8vIEVhY2ggbGVhZGluZyAuLiBzZWdtZW50IG1lYW5zIFwiZ28gdXAgb25lIHJvdXRlXCIgaW5zdGVhZCBvZiBcImdvIHVwIG9uZVxuICAgICAgLy8gVVJMIHNlZ21lbnRcIi4gIFRoaXMgaXMgYSBrZXkgZGlmZmVyZW5jZSBmcm9tIGhvdyA8YSBocmVmPiB3b3JrcyBhbmQgYVxuICAgICAgLy8gbWFqb3IgcmVhc29uIHdlIGNhbGwgdGhpcyBhIFwidG9cIiB2YWx1ZSBpbnN0ZWFkIG9mIGEgXCJocmVmXCIuXG5cbiAgICAgIHdoaWxlICh0b1NlZ21lbnRzWzBdID09PSBcIi4uXCIpIHtcbiAgICAgICAgdG9TZWdtZW50cy5zaGlmdCgpO1xuICAgICAgICByb3V0ZVBhdGhuYW1lSW5kZXggLT0gMTtcbiAgICAgIH1cblxuICAgICAgdG8ucGF0aG5hbWUgPSB0b1NlZ21lbnRzLmpvaW4oXCIvXCIpO1xuICAgIH0gLy8gSWYgdGhlcmUgYXJlIG1vcmUgXCIuLlwiIHNlZ21lbnRzIHRoYW4gcGFyZW50IHJvdXRlcywgcmVzb2x2ZSByZWxhdGl2ZSB0b1xuICAgIC8vIHRoZSByb290IC8gVVJMLlxuXG5cbiAgICBmcm9tID0gcm91dGVQYXRobmFtZUluZGV4ID49IDAgPyByb3V0ZVBhdGhuYW1lc1tyb3V0ZVBhdGhuYW1lSW5kZXhdIDogXCIvXCI7XG4gIH1cblxuICBsZXQgcGF0aCA9IHJlc29sdmVQYXRoKHRvLCBmcm9tKTsgLy8gRW5zdXJlIHRoZSBwYXRobmFtZSBoYXMgYSB0cmFpbGluZyBzbGFzaCBpZiB0aGUgb3JpZ2luYWwgXCJ0b1wiIGhhZCBvbmVcblxuICBsZXQgaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoID0gdG9QYXRobmFtZSAmJiB0b1BhdGhuYW1lICE9PSBcIi9cIiAmJiB0b1BhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKTsgLy8gT3IgaWYgdGhpcyB3YXMgYSBsaW5rIHRvIHRoZSBjdXJyZW50IHBhdGggd2hpY2ggaGFzIGEgdHJhaWxpbmcgc2xhc2hcblxuICBsZXQgaGFzQ3VycmVudFRyYWlsaW5nU2xhc2ggPSAoaXNFbXB0eVBhdGggfHwgdG9QYXRobmFtZSA9PT0gXCIuXCIpICYmIGxvY2F0aW9uUGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpO1xuXG4gIGlmICghcGF0aC5wYXRobmFtZS5lbmRzV2l0aChcIi9cIikgJiYgKGhhc0V4cGxpY2l0VHJhaWxpbmdTbGFzaCB8fCBoYXNDdXJyZW50VHJhaWxpbmdTbGFzaCkpIHtcbiAgICBwYXRoLnBhdGhuYW1lICs9IFwiL1wiO1xuICB9XG5cbiAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0VG9QYXRobmFtZSh0bykge1xuICAvLyBFbXB0eSBzdHJpbmdzIHNob3VsZCBiZSB0cmVhdGVkIHRoZSBzYW1lIGFzIC8gcGF0aHNcbiAgcmV0dXJuIHRvID09PSBcIlwiIHx8IHRvLnBhdGhuYW1lID09PSBcIlwiID8gXCIvXCIgOiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgodG8pLnBhdGhuYW1lIDogdG8ucGF0aG5hbWU7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgam9pblBhdGhzID0gcGF0aHMgPT4gcGF0aHMuam9pbihcIi9cIikucmVwbGFjZSgvXFwvXFwvKy9nLCBcIi9cIik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgbm9ybWFsaXplUGF0aG5hbWUgPSBwYXRobmFtZSA9PiBwYXRobmFtZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmNvbnN0IG5vcm1hbGl6ZVNlYXJjaCA9IHNlYXJjaCA9PiAhc2VhcmNoIHx8IHNlYXJjaCA9PT0gXCI/XCIgPyBcIlwiIDogc2VhcmNoLnN0YXJ0c1dpdGgoXCI/XCIpID8gc2VhcmNoIDogXCI/XCIgKyBzZWFyY2g7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgbm9ybWFsaXplSGFzaCA9IGhhc2ggPT4gIWhhc2ggfHwgaGFzaCA9PT0gXCIjXCIgPyBcIlwiIDogaGFzaC5zdGFydHNXaXRoKFwiI1wiKSA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4vKipcbiAqIFRoaXMgaXMgYSBzaG9ydGN1dCBmb3IgY3JlYXRpbmcgYGFwcGxpY2F0aW9uL2pzb25gIHJlc3BvbnNlcy4gQ29udmVydHMgYGRhdGFgXG4gKiB0byBKU09OIGFuZCBzZXRzIHRoZSBgQ29udGVudC1UeXBlYCBoZWFkZXIuXG4gKi9cblxuY29uc3QganNvbiA9IGZ1bmN0aW9uIGpzb24oZGF0YSwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IHt9O1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IHR5cGVvZiBpbml0ID09PSBcIm51bWJlclwiID8ge1xuICAgIHN0YXR1czogaW5pdFxuICB9IDogaW5pdDtcbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXNwb25zZUluaXQuaGVhZGVycyk7XG5cbiAgaWYgKCFoZWFkZXJzLmhhcyhcIkNvbnRlbnQtVHlwZVwiKSkge1xuICAgIGhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSksIF9leHRlbmRzKHt9LCByZXNwb25zZUluaXQsIHtcbiAgICBoZWFkZXJzXG4gIH0pKTtcbn07XG5jbGFzcyBBYm9ydGVkRGVmZXJyZWRFcnJvciBleHRlbmRzIEVycm9yIHt9XG5jbGFzcyBEZWZlcnJlZERhdGEge1xuICBjb25zdHJ1Y3RvcihkYXRhLCByZXNwb25zZUluaXQpIHtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0ID0gbmV3IFNldCgpO1xuICAgIHRoaXMuc3Vic2NyaWJlcnMgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5kZWZlcnJlZEtleXMgPSBbXTtcbiAgICBpbnZhcmlhbnQoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhKSwgXCJkZWZlcigpIG9ubHkgYWNjZXB0cyBwbGFpbiBvYmplY3RzXCIpOyAvLyBTZXQgdXAgYW4gQWJvcnRDb250cm9sbGVyICsgUHJvbWlzZSB3ZSBjYW4gcmFjZSBhZ2FpbnN0IHRvIGV4aXQgZWFybHlcbiAgICAvLyBjYW5jZWxsYXRpb25cblxuICAgIGxldCByZWplY3Q7XG4gICAgdGhpcy5hYm9ydFByb21pc2UgPSBuZXcgUHJvbWlzZSgoXywgcikgPT4gcmVqZWN0ID0gcik7XG4gICAgdGhpcy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuXG4gICAgbGV0IG9uQWJvcnQgPSAoKSA9PiByZWplY3QobmV3IEFib3J0ZWREZWZlcnJlZEVycm9yKFwiRGVmZXJyZWQgZGF0YSBhYm9ydGVkXCIpKTtcblxuICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCA9ICgpID0+IHRoaXMuY29udHJvbGxlci5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIG9uQWJvcnQpO1xuXG4gICAgdGhpcy5jb250cm9sbGVyLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmVudHJpZXMoZGF0YSkucmVkdWNlKChhY2MsIF9yZWYpID0+IHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBfcmVmO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgIFtrZXldOiB0aGlzLnRyYWNrUHJvbWlzZShrZXksIHZhbHVlKVxuICAgICAgfSk7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgLy8gQWxsIGluY29taW5nIHZhbHVlcyB3ZXJlIHJlc29sdmVkXG4gICAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwoKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXQgPSByZXNwb25zZUluaXQ7XG4gIH1cblxuICB0cmFja1Byb21pc2Uoa2V5LCB2YWx1ZSkge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmRlZmVycmVkS2V5cy5wdXNoKGtleSk7XG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldC5hZGQoa2V5KTsgLy8gV2Ugc3RvcmUgYSBsaXR0bGUgd3JhcHBlciBwcm9taXNlIHRoYXQgd2lsbCBiZSBleHRlbmRlZCB3aXRoXG4gICAgLy8gX2RhdGEvX2Vycm9yIHByb3BzIHVwb24gcmVzb2x2ZS9yZWplY3RcblxuICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yYWNlKFt2YWx1ZSwgdGhpcy5hYm9ydFByb21pc2VdKS50aGVuKGRhdGEgPT4gdGhpcy5vblNldHRsZShwcm9taXNlLCBrZXksIG51bGwsIGRhdGEpLCBlcnJvciA9PiB0aGlzLm9uU2V0dGxlKHByb21pc2UsIGtleSwgZXJyb3IpKTsgLy8gUmVnaXN0ZXIgcmVqZWN0aW9uIGxpc3RlbmVycyB0byBhdm9pZCB1bmNhdWdodCBwcm9taXNlIHJlamVjdGlvbnMgb25cbiAgICAvLyBlcnJvcnMgb3IgYWJvcnRlZCBkZWZlcnJlZCB2YWx1ZXNcblxuICAgIHByb21pc2UuY2F0Y2goKCkgPT4ge30pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgb25TZXR0bGUocHJvbWlzZSwga2V5LCBlcnJvciwgZGF0YSkge1xuICAgIGlmICh0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQgJiYgZXJyb3IgaW5zdGFuY2VvZiBBYm9ydGVkRGVmZXJyZWRFcnJvcikge1xuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGVycm9yXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldC5kZWxldGUoa2V5KTtcblxuICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgIC8vIE5vdGhpbmcgbGVmdCB0byBhYm9ydCFcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgIH1cblxuICAgIGlmIChlcnJvcikge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSk7XG4gICAgICB0aGlzLmVtaXQoZmFsc2UsIGtleSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9kYXRhXCIsIHtcbiAgICAgIGdldDogKCkgPT4gZGF0YVxuICAgIH0pO1xuICAgIHRoaXMuZW1pdChmYWxzZSwga2V5KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGVtaXQoYWJvcnRlZCwgc2V0dGxlZEtleSkge1xuICAgIHRoaXMuc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIoYWJvcnRlZCwgc2V0dGxlZEtleSkpO1xuICB9XG5cbiAgc3Vic2NyaWJlKGZuKSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5hZGQoZm4pO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnN1YnNjcmliZXJzLmRlbGV0ZShmbik7XG4gIH1cblxuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5jb250cm9sbGVyLmFib3J0KCk7XG4gICAgdGhpcy5wZW5kaW5nS2V5c1NldC5mb3JFYWNoKCh2LCBrKSA9PiB0aGlzLnBlbmRpbmdLZXlzU2V0LmRlbGV0ZShrKSk7XG4gICAgdGhpcy5lbWl0KHRydWUpO1xuICB9XG5cbiAgYXN5bmMgcmVzb2x2ZURhdGEoc2lnbmFsKSB7XG4gICAgbGV0IGFib3J0ZWQgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5kb25lKSB7XG4gICAgICBsZXQgb25BYm9ydCA9ICgpID0+IHRoaXMuY2FuY2VsKCk7XG5cbiAgICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG4gICAgICBhYm9ydGVkID0gYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKGFib3J0ZWQgPT4ge1xuICAgICAgICAgIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG5cbiAgICAgICAgICBpZiAoYWJvcnRlZCB8fCB0aGlzLmRvbmUpIHtcbiAgICAgICAgICAgIHJlc29sdmUoYWJvcnRlZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhYm9ydGVkO1xuICB9XG5cbiAgZ2V0IGRvbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZ0tleXNTZXQuc2l6ZSA9PT0gMDtcbiAgfVxuXG4gIGdldCB1bndyYXBwZWREYXRhKCkge1xuICAgIGludmFyaWFudCh0aGlzLmRhdGEgIT09IG51bGwgJiYgdGhpcy5kb25lLCBcIkNhbiBvbmx5IHVud3JhcCBkYXRhIG9uIGluaXRpYWxpemVkIGFuZCBzZXR0bGVkIGRlZmVycmVkc1wiKTtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKS5yZWR1Y2UoKGFjYywgX3JlZjIpID0+IHtcbiAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSBfcmVmMjtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFjYywge1xuICAgICAgICBba2V5XTogdW53cmFwVHJhY2tlZFByb21pc2UodmFsdWUpXG4gICAgICB9KTtcbiAgICB9LCB7fSk7XG4gIH1cblxuICBnZXQgcGVuZGluZ0tleXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wZW5kaW5nS2V5c1NldCk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBpc1RyYWNrZWRQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgdmFsdWUuX3RyYWNrZWQgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIHVud3JhcFRyYWNrZWRQcm9taXNlKHZhbHVlKSB7XG4gIGlmICghaXNUcmFja2VkUHJvbWlzZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBpZiAodmFsdWUuX2Vycm9yKSB7XG4gICAgdGhyb3cgdmFsdWUuX2Vycm9yO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlLl9kYXRhO1xufVxuXG5jb25zdCBkZWZlciA9IGZ1bmN0aW9uIGRlZmVyKGRhdGEsIGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSB7fTtcbiAgfVxuXG4gIGxldCByZXNwb25zZUluaXQgPSB0eXBlb2YgaW5pdCA9PT0gXCJudW1iZXJcIiA/IHtcbiAgICBzdGF0dXM6IGluaXRcbiAgfSA6IGluaXQ7XG4gIHJldHVybiBuZXcgRGVmZXJyZWREYXRhKGRhdGEsIHJlc3BvbnNlSW5pdCk7XG59O1xuLyoqXG4gKiBBIHJlZGlyZWN0IHJlc3BvbnNlLiBTZXRzIHRoZSBzdGF0dXMgY29kZSBhbmQgdGhlIGBMb2NhdGlvbmAgaGVhZGVyLlxuICogRGVmYXVsdHMgdG8gXCIzMDIgRm91bmRcIi5cbiAqL1xuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uIHJlZGlyZWN0KHVybCwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IDMwMjtcbiAgfVxuXG4gIGxldCByZXNwb25zZUluaXQgPSBpbml0O1xuXG4gIGlmICh0eXBlb2YgcmVzcG9uc2VJbml0ID09PSBcIm51bWJlclwiKSB7XG4gICAgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgc3RhdHVzOiByZXNwb25zZUluaXRcbiAgICB9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiByZXNwb25zZUluaXQuc3RhdHVzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmVzcG9uc2VJbml0LnN0YXR1cyA9IDMwMjtcbiAgfVxuXG4gIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVzcG9uc2VJbml0LmhlYWRlcnMpO1xuICBoZWFkZXJzLnNldChcIkxvY2F0aW9uXCIsIHVybCk7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwgX2V4dGVuZHMoe30sIHJlc3BvbnNlSW5pdCwge1xuICAgIGhlYWRlcnNcbiAgfSkpO1xufTtcbi8qKlxuICogQHByaXZhdGVcbiAqIFV0aWxpdHkgY2xhc3Mgd2UgdXNlIHRvIGhvbGQgYXV0by11bndyYXBwZWQgNHh4LzV4eCBSZXNwb25zZSBib2RpZXNcbiAqL1xuXG5jbGFzcyBFcnJvclJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3Ioc3RhdHVzLCBzdGF0dXNUZXh0LCBkYXRhLCBpbnRlcm5hbCkge1xuICAgIGlmIChpbnRlcm5hbCA9PT0gdm9pZCAwKSB7XG4gICAgICBpbnRlcm5hbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQgfHwgXCJcIjtcbiAgICB0aGlzLmludGVybmFsID0gaW50ZXJuYWw7XG5cbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmVycm9yID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG4gIH1cblxufVxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZXJyb3IgaXMgYW4gRXJyb3JSZXNwb25zZSBnZW5lcmF0ZWQgZnJvbSBhIDR4eC81eHhcbiAqIFJlc3BvbnNlIHRocm93biBmcm9tIGFuIGFjdGlvbi9sb2FkZXJcbiAqL1xuXG5mdW5jdGlvbiBpc1JvdXRlRXJyb3JSZXNwb25zZShlcnJvcikge1xuICByZXR1cm4gZXJyb3IgIT0gbnVsbCAmJiB0eXBlb2YgZXJyb3Iuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiBlcnJvci5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBlcnJvci5pbnRlcm5hbCA9PT0gXCJib29sZWFuXCIgJiYgXCJkYXRhXCIgaW4gZXJyb3I7XG59XG5cbmNvbnN0IHZhbGlkTXV0YXRpb25NZXRob2RzQXJyID0gW1wicG9zdFwiLCBcInB1dFwiLCBcInBhdGNoXCIsIFwiZGVsZXRlXCJdO1xuY29uc3QgdmFsaWRNdXRhdGlvbk1ldGhvZHMgPSBuZXcgU2V0KHZhbGlkTXV0YXRpb25NZXRob2RzQXJyKTtcbmNvbnN0IHZhbGlkUmVxdWVzdE1ldGhvZHNBcnIgPSBbXCJnZXRcIiwgLi4udmFsaWRNdXRhdGlvbk1ldGhvZHNBcnJdO1xuY29uc3QgdmFsaWRSZXF1ZXN0TWV0aG9kcyA9IG5ldyBTZXQodmFsaWRSZXF1ZXN0TWV0aG9kc0Fycik7XG5jb25zdCByZWRpcmVjdFN0YXR1c0NvZGVzID0gbmV3IFNldChbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdKTtcbmNvbnN0IHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2RlcyA9IG5ldyBTZXQoWzMwNywgMzA4XSk7XG5jb25zdCBJRExFX05BVklHQVRJT04gPSB7XG4gIHN0YXRlOiBcImlkbGVcIixcbiAgbG9jYXRpb246IHVuZGVmaW5lZCxcbiAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gIGZvcm1EYXRhOiB1bmRlZmluZWRcbn07XG5jb25zdCBJRExFX0ZFVENIRVIgPSB7XG4gIHN0YXRlOiBcImlkbGVcIixcbiAgZGF0YTogdW5kZWZpbmVkLFxuICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgZm9ybURhdGE6IHVuZGVmaW5lZFxufTtcbmNvbnN0IElETEVfQkxPQ0tFUiA9IHtcbiAgc3RhdGU6IFwidW5ibG9ja2VkXCIsXG4gIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgbG9jYXRpb246IHVuZGVmaW5lZFxufTtcbmNvbnN0IEFCU09MVVRFX1VSTF9SRUdFWCA9IC9eKD86W2Etel1bYS16MC05Ky4tXSo6fFxcL1xcLykvaTtcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBpc1NlcnZlciA9ICFpc0Jyb3dzZXI7IC8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBjcmVhdGVSb3V0ZXJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQ3JlYXRlIGEgcm91dGVyIGFuZCBsaXN0ZW4gdG8gaGlzdG9yeSBQT1AgbmF2aWdhdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoaW5pdCkge1xuICBpbnZhcmlhbnQoaW5pdC5yb3V0ZXMubGVuZ3RoID4gMCwgXCJZb3UgbXVzdCBwcm92aWRlIGEgbm9uLWVtcHR5IHJvdXRlcyBhcnJheSB0byBjcmVhdGVSb3V0ZXJcIik7XG4gIGxldCBkYXRhUm91dGVzID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhpbml0LnJvdXRlcyk7IC8vIENsZWFudXAgZnVuY3Rpb24gZm9yIGhpc3RvcnlcblxuICBsZXQgdW5saXN0ZW5IaXN0b3J5ID0gbnVsbDsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbnMgdG8gY2FsbCBvbiBhbGwgc3RhdGUgY2hhbmdlc1xuXG4gIGxldCBzdWJzY3JpYmVycyA9IG5ldyBTZXQoKTsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBvYmplY3QgdG8gaG9sZCBzY3JvbGwgcmVzdG9yYXRpb24gbG9jYXRpb25zIGR1cmluZyByb3V0aW5nXG5cbiAgbGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gbnVsbDsgLy8gRXh0ZXJuYWxseS1wcm92aWRlZCBmdW5jdGlvbiB0byBnZXQgc2Nyb2xsIHJlc3RvcmF0aW9uIGtleXNcblxuICBsZXQgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBudWxsOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9uIHRvIGdldCBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuXG4gIGxldCBnZXRTY3JvbGxQb3NpdGlvbiA9IG51bGw7IC8vIE9uZS10aW1lIGZsYWcgdG8gY29udHJvbCB0aGUgaW5pdGlhbCBoeWRyYXRpb24gc2Nyb2xsIHJlc3RvcmF0aW9uLiAgQmVjYXVzZVxuICAvLyB3ZSBkb24ndCBnZXQgdGhlIHNhdmVkIHBvc2l0aW9ucyBmcm9tIDxTY3JvbGxSZXN0b3JhdGlvbiAvPiB1bnRpbCBfYWZ0ZXJfXG4gIC8vIHRoZSBpbml0aWFsIHJlbmRlciwgd2UgbmVlZCB0byBtYW51YWxseSB0cmlnZ2VyIGEgc2VwYXJhdGUgdXBkYXRlU3RhdGUgdG9cbiAgLy8gc2VuZCBhbG9uZyB0aGUgcmVzdG9yZVNjcm9sbFBvc2l0aW9uXG4gIC8vIFNldCB0byB0cnVlIGlmIHdlIGhhdmUgYGh5ZHJhdGlvbkRhdGFgIHNpbmNlIHdlIGFzc3VtZSB3ZSB3ZXJlIFNTUidkIGFuZCB0aGF0XG4gIC8vIFNTUiBkaWQgdGhlIGluaXRpYWwgc2Nyb2xsIHJlc3RvcmF0aW9uLlxuXG4gIGxldCBpbml0aWFsU2Nyb2xsUmVzdG9yZWQgPSBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbDtcbiAgbGV0IGluaXRpYWxNYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgaW5pdC5oaXN0b3J5LmxvY2F0aW9uLCBpbml0LmJhc2VuYW1lKTtcbiAgbGV0IGluaXRpYWxFcnJvcnMgPSBudWxsO1xuXG4gIGlmIChpbml0aWFsTWF0Y2hlcyA9PSBudWxsKSB7XG4gICAgLy8gSWYgd2UgZG8gbm90IG1hdGNoIGEgdXNlci1wcm92aWRlZC1yb3V0ZSwgZmFsbCBiYWNrIHRvIHRoZSByb290XG4gICAgLy8gdG8gYWxsb3cgdGhlIGVycm9yIGJvdW5kYXJ5IHRvIHRha2Ugb3ZlclxuICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICBwYXRobmFtZTogaW5pdC5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgfSk7XG4gICAgbGV0IHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICByb3V0ZVxuICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgIGluaXRpYWxNYXRjaGVzID0gbWF0Y2hlcztcbiAgICBpbml0aWFsRXJyb3JzID0ge1xuICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgbGV0IGluaXRpYWxpemVkID0gIWluaXRpYWxNYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmxvYWRlcikgfHwgaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGw7XG4gIGxldCByb3V0ZXI7XG4gIGxldCBzdGF0ZSA9IHtcbiAgICBoaXN0b3J5QWN0aW9uOiBpbml0Lmhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBpbml0Lmhpc3RvcnkubG9jYXRpb24sXG4gICAgbWF0Y2hlczogaW5pdGlhbE1hdGNoZXMsXG4gICAgaW5pdGlhbGl6ZWQsXG4gICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgIC8vIERvbid0IHJlc3RvcmUgb24gaW5pdGlhbCB1cGRhdGVTdGF0ZSgpIGlmIHdlIHdlcmUgU1NSJ2RcbiAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsID8gZmFsc2UgOiBudWxsLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldDogZmFsc2UsXG4gICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICBsb2FkZXJEYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmxvYWRlckRhdGEgfHwge30sXG4gICAgYWN0aW9uRGF0YTogaW5pdC5oeWRyYXRpb25EYXRhICYmIGluaXQuaHlkcmF0aW9uRGF0YS5hY3Rpb25EYXRhIHx8IG51bGwsXG4gICAgZXJyb3JzOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmVycm9ycyB8fCBpbml0aWFsRXJyb3JzLFxuICAgIGZldGNoZXJzOiBuZXcgTWFwKCksXG4gICAgYmxvY2tlcnM6IG5ldyBNYXAoKVxuICB9OyAvLyAtLSBTdGF0ZWZ1bCBpbnRlcm5hbCB2YXJpYWJsZXMgdG8gbWFuYWdlIG5hdmlnYXRpb25zIC0tXG4gIC8vIEN1cnJlbnQgbmF2aWdhdGlvbiBpbiBwcm9ncmVzcyAodG8gYmUgY29tbWl0dGVkIGluIGNvbXBsZXRlTmF2aWdhdGlvbilcblxuICBsZXQgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5Qb3A7IC8vIFNob3VsZCB0aGUgY3VycmVudCBuYXZpZ2F0aW9uIHByZXZlbnQgdGhlIHNjcm9sbCByZXNldCBpZiBzY3JvbGwgY2Fubm90XG4gIC8vIGJlIHJlc3RvcmVkP1xuXG4gIGxldCBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gZmFsc2U7IC8vIEFib3J0Q29udHJvbGxlciBmb3IgdGhlIGFjdGl2ZSBuYXZpZ2F0aW9uXG5cbiAgbGV0IHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlcjsgLy8gV2UgdXNlIHRoaXMgdG8gYXZvaWQgdG91Y2hpbmcgaGlzdG9yeSBpbiBjb21wbGV0ZU5hdmlnYXRpb24gaWYgYVxuICAvLyByZXZhbGlkYXRpb24gaXMgZW50aXJlbHkgdW5pbnRlcnJ1cHRlZFxuXG4gIGxldCBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgZmxhZyB0byBmb3JjZSByZXZhbGlkYXRpb24gb2YgYWxsIGxvYWRlcnM6XG4gIC8vICAtIHN1Ym1pc3Npb25zIChjb21wbGV0ZWQgb3IgaW50ZXJydXB0ZWQpXG4gIC8vICAtIHVzZVJldmFsaWRhdGUoKVxuICAvLyAgLSBYLVJlbWl4LVJldmFsaWRhdGUgKGZyb20gcmVkaXJlY3QpXG5cbiAgbGV0IGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSBmYWxzZTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSByb3V0ZXMgdGhhdCByZXF1aXJlIHJldmFsaWRhdGlvbiBkdWVcbiAgLy8gdG8gYSBjYW5jZWxsZWQgZGVmZXJyZWQgb24gYWN0aW9uIHN1Ym1pc3Npb25cblxuICBsZXQgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTsgLy8gVXNlIHRoaXMgaW50ZXJuYWwgYXJyYXkgdG8gY2FwdHVyZSBmZXRjaGVyIGxvYWRzIHRoYXQgd2VyZSBjYW5jZWxsZWQgYnkgYW5cbiAgLy8gYWN0aW9uIG5hdmlnYXRpb24gYW5kIHJlcXVpcmUgcmV2YWxpZGF0aW9uXG5cbiAgbGV0IGNhbmNlbGxlZEZldGNoZXJMb2FkcyA9IFtdOyAvLyBBYm9ydENvbnRyb2xsZXJzIGZvciBhbnkgaW4tZmxpZ2h0IGZldGNoZXJzXG5cbiAgbGV0IGZldGNoQ29udHJvbGxlcnMgPSBuZXcgTWFwKCk7IC8vIFRyYWNrIGxvYWRzIGJhc2VkIG9uIHRoZSBvcmRlciBpbiB3aGljaCB0aGV5IHN0YXJ0ZWRcblxuICBsZXQgaW5jcmVtZW50aW5nTG9hZElkID0gMDsgLy8gVHJhY2sgdGhlIG91dHN0YW5kaW5nIHBlbmRpbmcgbmF2aWdhdGlvbiBkYXRhIGxvYWQgdG8gYmUgY29tcGFyZWQgYWdhaW5zdFxuICAvLyB0aGUgZ2xvYmFsbHkgaW5jcmVtZW50aW5nIGxvYWQgd2hlbiBhIGZldGNoZXIgbG9hZCBsYW5kcyBhZnRlciBhIGNvbXBsZXRlZFxuICAvLyBuYXZpZ2F0aW9uXG5cbiAgbGV0IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkID0gLTE7IC8vIEZldGNoZXJzIHRoYXQgdHJpZ2dlcmVkIGRhdGEgcmVsb2FkcyBhcyBhIHJlc3VsdCBvZiB0aGVpciBhY3Rpb25zXG5cbiAgbGV0IGZldGNoUmVsb2FkSWRzID0gbmV3IE1hcCgpOyAvLyBGZXRjaGVycyB0aGF0IHRyaWdnZXJlZCByZWRpcmVjdCBuYXZpZ2F0aW9ucyBmcm9tIHRoZWlyIGFjdGlvbnNcblxuICBsZXQgZmV0Y2hSZWRpcmVjdElkcyA9IG5ldyBTZXQoKTsgLy8gTW9zdCByZWNlbnQgaHJlZi9tYXRjaCBmb3IgZmV0Y2hlci5sb2FkIGNhbGxzIGZvciBmZXRjaGVyc1xuXG4gIGxldCBmZXRjaExvYWRNYXRjaGVzID0gbmV3IE1hcCgpOyAvLyBTdG9yZSBEZWZlcnJlZERhdGEgaW5zdGFuY2VzIGZvciBhY3RpdmUgcm91dGUgbWF0Y2hlcy4gIFdoZW4gYVxuICAvLyByb3V0ZSBsb2FkZXIgcmV0dXJucyBkZWZlcigpIHdlIHN0aWNrIG9uZSBpbiBoZXJlLiAgVGhlbiwgd2hlbiBhIG5lc3RlZFxuICAvLyBwcm9taXNlIHJlc29sdmVzIHdlIHVwZGF0ZSBsb2FkZXJEYXRhLiAgSWYgYSBuZXcgbmF2aWdhdGlvbiBzdGFydHMgd2VcbiAgLy8gY2FuY2VsIGFjdGl2ZSBkZWZlcnJlZHMgZm9yIGVsaW1pbmF0ZWQgcm91dGVzLlxuXG4gIGxldCBhY3RpdmVEZWZlcnJlZHMgPSBuZXcgTWFwKCk7IC8vIFN0b3JlIGJsb2NrZXIgZnVuY3Rpb25zIGluIGEgc2VwYXJhdGUgTWFwIG91dHNpZGUgb2Ygcm91dGVyIHN0YXRlIHNpbmNlXG4gIC8vIHdlIGRvbid0IG5lZWQgdG8gdXBkYXRlIFVJIHN0YXRlIGlmIHRoZXkgY2hhbmdlXG5cbiAgbGV0IGJsb2NrZXJGdW5jdGlvbnMgPSBuZXcgTWFwKCk7IC8vIEZsYWcgdG8gaWdub3JlIHRoZSBuZXh0IGhpc3RvcnkgdXBkYXRlLCBzbyB3ZSBjYW4gcmV2ZXJ0IHRoZSBVUkwgY2hhbmdlIG9uXG4gIC8vIGEgUE9QIG5hdmlnYXRpb24gdGhhdCB3YXMgYmxvY2tlZCBieSB0aGUgdXNlciB3aXRob3V0IHRvdWNoaW5nIHJvdXRlciBzdGF0ZVxuXG4gIGxldCBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IGZhbHNlOyAvLyBJbml0aWFsaXplIHRoZSByb3V0ZXIsIGFsbCBzaWRlIGVmZmVjdHMgc2hvdWxkIGJlIGtpY2tlZCBvZmYgZnJvbSBoZXJlLlxuICAvLyBJbXBsZW1lbnRlZCBhcyBhIEZsdWVudCBBUEkgZm9yIGVhc2Ugb2Y6XG4gIC8vICAgbGV0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcihpbml0KS5pbml0aWFsaXplKCk7XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAvLyBJZiBoaXN0b3J5IGluZm9ybXMgdXMgb2YgYSBQT1AgbmF2aWdhdGlvbiwgc3RhcnQgdGhlIG5hdmlnYXRpb24gYnV0IGRvIG5vdCB1cGRhdGVcbiAgICAvLyBzdGF0ZS4gIFdlJ2xsIHVwZGF0ZSBvdXIgb3duIHN0YXRlIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG4gICAgdW5saXN0ZW5IaXN0b3J5ID0gaW5pdC5oaXN0b3J5Lmxpc3RlbihfcmVmID0+IHtcbiAgICAgIGxldCB7XG4gICAgICAgIGFjdGlvbjogaGlzdG9yeUFjdGlvbixcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGRlbHRhXG4gICAgICB9ID0gX3JlZjtcblxuICAgICAgLy8gSWdub3JlIHRoaXMgZXZlbnQgaWYgaXQgd2FzIGp1c3QgdXMgcmVzZXR0aW5nIHRoZSBVUkwgZnJvbSBhXG4gICAgICAvLyBibG9ja2VkIFBPUCBuYXZpZ2F0aW9uXG4gICAgICBpZiAoaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUpIHtcbiAgICAgICAgaWdub3JlTmV4dEhpc3RvcnlVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuaW5nKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCB8fCBkZWx0YSAhPSBudWxsLCBcIllvdSBhcmUgdHJ5aW5nIHRvIHVzZSBhIGJsb2NrZXIgb24gYSBQT1AgbmF2aWdhdGlvbiB0byBhIGxvY2F0aW9uIFwiICsgXCJ0aGF0IHdhcyBub3QgY3JlYXRlZCBieSBAcmVtaXgtcnVuL3JvdXRlci4gVGhpcyB3aWxsIGZhaWwgc2lsZW50bHkgaW4gXCIgKyBcInByb2R1Y3Rpb24uIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgYXJlIG5hdmlnYXRpbmcgb3V0c2lkZSB0aGUgcm91dGVyIFwiICsgXCJ2aWEgYHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZWAvYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCBpbnN0ZWFkIG9mIHVzaW5nIFwiICsgXCJyb3V0ZXIgbmF2aWdhdGlvbiBBUElzLiAgVGhpcyBjYW4gYWxzbyBoYXBwZW4gaWYgeW91IGFyZSB1c2luZyBcIiArIFwiY3JlYXRlSGFzaFJvdXRlciBhbmQgdGhlIHVzZXIgbWFudWFsbHkgY2hhbmdlcyB0aGUgVVJMLlwiKTtcbiAgICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgICAgY3VycmVudExvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbmV4dExvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgaGlzdG9yeUFjdGlvblxuICAgICAgfSk7XG5cbiAgICAgIGlmIChibG9ja2VyS2V5ICYmIGRlbHRhICE9IG51bGwpIHtcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgVVJMIHRvIG1hdGNoIHRoZSBjdXJyZW50IFVJLCBidXQgZG9uJ3QgdXBkYXRlIHJvdXRlciBzdGF0ZVxuICAgICAgICBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGluaXQuaGlzdG9yeS5nbyhkZWx0YSAqIC0xKTsgLy8gUHV0IHRoZSBibG9ja2VyIGludG8gYSBibG9ja2VkIHN0YXRlXG5cbiAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgc3RhdGU6IFwiYmxvY2tlZFwiLFxuICAgICAgICAgIGxvY2F0aW9uLFxuXG4gICAgICAgICAgcHJvY2VlZCgpIHtcbiAgICAgICAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICAgIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgcmVzZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgbG9jYXRpb25cbiAgICAgICAgICAgIH0pOyAvLyBSZS1kbyB0aGUgc2FtZSBQT1AgbmF2aWdhdGlvbiB3ZSBqdXN0IGJsb2NrZWRcblxuICAgICAgICAgICAgaW5pdC5oaXN0b3J5LmdvKGRlbHRhKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICBkZWxldGVCbG9ja2VyKGJsb2NrZXJLZXkpO1xuICAgICAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgICBibG9ja2VyczogbmV3IE1hcChyb3V0ZXIuc3RhdGUuYmxvY2tlcnMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBsb2NhdGlvbik7XG4gICAgfSk7IC8vIEtpY2sgb2ZmIGluaXRpYWwgZGF0YSBsb2FkIGlmIG5lZWRlZC4gIFVzZSBQb3AgdG8gYXZvaWQgbW9kaWZ5aW5nIGhpc3RvcnlcblxuICAgIGlmICghc3RhdGUuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHN0YXJ0TmF2aWdhdGlvbihBY3Rpb24uUG9wLCBzdGF0ZS5sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvdXRlcjtcbiAgfSAvLyBDbGVhbiB1cCBhIHJvdXRlciBhbmQgaXQncyBzaWRlIGVmZmVjdHNcblxuXG4gIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgaWYgKHVubGlzdGVuSGlzdG9yeSkge1xuICAgICAgdW5saXN0ZW5IaXN0b3J5KCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlcnMuY2xlYXIoKTtcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgc3RhdGUuZmV0Y2hlcnMuZm9yRWFjaCgoXywga2V5KSA9PiBkZWxldGVGZXRjaGVyKGtleSkpO1xuICAgIHN0YXRlLmJsb2NrZXJzLmZvckVhY2goKF8sIGtleSkgPT4gZGVsZXRlQmxvY2tlcihrZXkpKTtcbiAgfSAvLyBTdWJzY3JpYmUgdG8gc3RhdGUgdXBkYXRlcyBmb3IgdGhlIHJvdXRlclxuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGZuKSB7XG4gICAgc3Vic2NyaWJlcnMuYWRkKGZuKTtcbiAgICByZXR1cm4gKCkgPT4gc3Vic2NyaWJlcnMuZGVsZXRlKGZuKTtcbiAgfSAvLyBVcGRhdGUgb3VyIHN0YXRlIGFuZCBub3RpZnkgdGhlIGNhbGxpbmcgY29udGV4dCBvZiB0aGUgY2hhbmdlXG5cblxuICBmdW5jdGlvbiB1cGRhdGVTdGF0ZShuZXdTdGF0ZSkge1xuICAgIHN0YXRlID0gX2V4dGVuZHMoe30sIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChzdWJzY3JpYmVyID0+IHN1YnNjcmliZXIoc3RhdGUpKTtcbiAgfSAvLyBDb21wbGV0ZSBhIG5hdmlnYXRpb24gcmV0dXJuaW5nIHRoZSBzdGF0ZS5uYXZpZ2F0aW9uIGJhY2sgdG8gdGhlIElETEVfTkFWSUdBVElPTlxuICAvLyBhbmQgc2V0dGluZyBzdGF0ZS5baGlzdG9yeUFjdGlvbi9sb2NhdGlvbi9tYXRjaGVzXSB0byB0aGUgbmV3IHJvdXRlLlxuICAvLyAtIExvY2F0aW9uIGlzIGEgcmVxdWlyZWQgcGFyYW1cbiAgLy8gLSBOYXZpZ2F0aW9uIHdpbGwgYWx3YXlzIGJlIHNldCB0byBJRExFX05BVklHQVRJT05cbiAgLy8gLSBDYW4gcGFzcyBhbnkgb3RoZXIgc3RhdGUgaW4gbmV3U3RhdGVcblxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgbmV3U3RhdGUpIHtcbiAgICB2YXIgX2xvY2F0aW9uJHN0YXRlLCBfbG9jYXRpb24kc3RhdGUyO1xuXG4gICAgLy8gRGVkdWNlIGlmIHdlJ3JlIGluIGEgbG9hZGluZy9hY3Rpb25SZWxvYWQgc3RhdGU6XG4gICAgLy8gLSBXZSBoYXZlIGNvbW1pdHRlZCBhY3Rpb25EYXRhIGluIHRoZSBzdG9yZVxuICAgIC8vIC0gVGhlIGN1cnJlbnQgbmF2aWdhdGlvbiB3YXMgYSBtdXRhdGlvbiBzdWJtaXNzaW9uXG4gICAgLy8gLSBXZSdyZSBwYXN0IHRoZSBzdWJtaXR0aW5nIHN0YXRlIGFuZCBpbnRvIHRoZSBsb2FkaW5nIHN0YXRlXG4gICAgLy8gLSBUaGUgbG9jYXRpb24gYmVpbmcgbG9hZGVkIGlzIG5vdCB0aGUgcmVzdWx0IG9mIGEgcmVkaXJlY3RcbiAgICBsZXQgaXNBY3Rpb25SZWxvYWQgPSBzdGF0ZS5hY3Rpb25EYXRhICE9IG51bGwgJiYgc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QpICYmIHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmICgoX2xvY2F0aW9uJHN0YXRlID0gbG9jYXRpb24uc3RhdGUpID09IG51bGwgPyB2b2lkIDAgOiBfbG9jYXRpb24kc3RhdGUuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuICAgIGxldCBhY3Rpb25EYXRhO1xuXG4gICAgaWYgKG5ld1N0YXRlLmFjdGlvbkRhdGEpIHtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdTdGF0ZS5hY3Rpb25EYXRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGFjdGlvbkRhdGEgPSBuZXdTdGF0ZS5hY3Rpb25EYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRW1wdHkgYWN0aW9uRGF0YSAtPiBjbGVhciBwcmlvciBhY3Rpb25EYXRhIGR1ZSB0byBhbiBhY3Rpb24gZXJyb3JcbiAgICAgICAgYWN0aW9uRGF0YSA9IG51bGw7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FjdGlvblJlbG9hZCkge1xuICAgICAgLy8gS2VlcCB0aGUgY3VycmVudCBkYXRhIGlmIHdlJ3JlIHdyYXBwaW5nIHVwIHRoZSBhY3Rpb24gcmVsb2FkXG4gICAgICBhY3Rpb25EYXRhID0gc3RhdGUuYWN0aW9uRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2xlYXIgYWN0aW9uRGF0YSBvbiBhbnkgb3RoZXIgY29tcGxldGVkIG5hdmlnYXRpb25zXG4gICAgICBhY3Rpb25EYXRhID0gbnVsbDtcbiAgICB9IC8vIEFsd2F5cyBwcmVzZXJ2ZSBhbnkgZXhpc3RpbmcgbG9hZGVyRGF0YSBmcm9tIHJlLXVzZWQgcm91dGVzXG5cblxuICAgIGxldCBsb2FkZXJEYXRhID0gbmV3U3RhdGUubG9hZGVyRGF0YSA/IG1lcmdlTG9hZGVyRGF0YShzdGF0ZS5sb2FkZXJEYXRhLCBuZXdTdGF0ZS5sb2FkZXJEYXRhLCBuZXdTdGF0ZS5tYXRjaGVzIHx8IFtdLCBuZXdTdGF0ZS5lcnJvcnMpIDogc3RhdGUubG9hZGVyRGF0YTsgLy8gT24gYSBzdWNjZXNzZnVsIG5hdmlnYXRpb24gd2UgY2FuIGFzc3VtZSB3ZSBnb3QgdGhyb3VnaCBhbGwgYmxvY2tlcnNcbiAgICAvLyBzbyB3ZSBjYW4gc3RhcnQgZnJlc2hcblxuICAgIGZvciAobGV0IFtrZXldIG9mIGJsb2NrZXJGdW5jdGlvbnMpIHtcbiAgICAgIGRlbGV0ZUJsb2NrZXIoa2V5KTtcbiAgICB9IC8vIEFsd2F5cyByZXNwZWN0IHRoZSB1c2VyIGZsYWcuICBPdGhlcndpc2UgZG9uJ3QgcmVzZXQgb24gbXV0YXRpb25cbiAgICAvLyBzdWJtaXNzaW9uIG5hdmlnYXRpb25zIHVubGVzcyB0aGV5IHJlZGlyZWN0XG5cblxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIHx8IHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kKSAmJiAoKF9sb2NhdGlvbiRzdGF0ZTIgPSBsb2NhdGlvbi5zdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sb2NhdGlvbiRzdGF0ZTIuX2lzUmVkaXJlY3QpICE9PSB0cnVlO1xuICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHt9LCBuZXdTdGF0ZSwge1xuICAgICAgYWN0aW9uRGF0YSxcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBoaXN0b3J5QWN0aW9uOiBwZW5kaW5nQWN0aW9uLFxuICAgICAgbG9jYXRpb24sXG4gICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgIG5hdmlnYXRpb246IElETEVfTkFWSUdBVElPTixcbiAgICAgIHJldmFsaWRhdGlvbjogXCJpZGxlXCIsXG4gICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IGdldFNhdmVkU2Nyb2xsUG9zaXRpb24obG9jYXRpb24sIG5ld1N0YXRlLm1hdGNoZXMgfHwgc3RhdGUubWF0Y2hlcyksXG4gICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICBibG9ja2VyczogbmV3IE1hcChzdGF0ZS5ibG9ja2VycylcbiAgICB9KSk7XG5cbiAgICBpZiAoaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uKSA7IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5Qb3ApIDsgZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlB1c2gpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5wdXNoKGxvY2F0aW9uLCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgfSBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUmVwbGFjZSkge1xuICAgICAgaW5pdC5oaXN0b3J5LnJlcGxhY2UobG9jYXRpb24sIGxvY2F0aW9uLnN0YXRlKTtcbiAgICB9IC8vIFJlc2V0IHN0YXRlZnVsIG5hdmlnYXRpb24gdmFyc1xuXG5cbiAgICBwZW5kaW5nQWN0aW9uID0gQWN0aW9uLlBvcDtcbiAgICBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gZmFsc2U7XG4gICAgaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uID0gZmFsc2U7XG4gICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgIGNhbmNlbGxlZERlZmVycmVkUm91dGVzID0gW107XG4gICAgY2FuY2VsbGVkRmV0Y2hlckxvYWRzID0gW107XG4gIH0gLy8gVHJpZ2dlciBhIG5hdmlnYXRpb24gZXZlbnQsIHdoaWNoIGNhbiBlaXRoZXIgYmUgYSBudW1lcmljYWwgUE9QIG9yIGEgUFVTSFxuICAvLyByZXBsYWNlIHdpdGggYW4gb3B0aW9uYWwgc3VibWlzc2lvblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gbmF2aWdhdGUodG8sIG9wdHMpIHtcbiAgICBpZiAodHlwZW9mIHRvID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpbml0Lmhpc3RvcnkuZ28odG8pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB7XG4gICAgICBwYXRoLFxuICAgICAgc3VibWlzc2lvbixcbiAgICAgIGVycm9yXG4gICAgfSA9IG5vcm1hbGl6ZU5hdmlnYXRlT3B0aW9ucyh0bywgb3B0cyk7XG4gICAgbGV0IGN1cnJlbnRMb2NhdGlvbiA9IHN0YXRlLmxvY2F0aW9uO1xuICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcGF0aCwgb3B0cyAmJiBvcHRzLnN0YXRlKTsgLy8gV2hlbiB1c2luZyBuYXZpZ2F0ZSBhcyBhIFBVU0gvUkVQTEFDRSB3ZSBhcmVuJ3QgcmVhZGluZyBhbiBhbHJlYWR5LWVuY29kZWRcbiAgICAvLyBVUkwgZnJvbSB3aW5kb3cubG9jYXRpb24sIHNvIHdlIG5lZWQgdG8gZW5jb2RlIGl0IGhlcmUgc28gdGhlIGJlaGF2aW9yXG4gICAgLy8gcmVtYWlucyB0aGUgc2FtZSBhcyBQT1AgYW5kIG5vbi1kYXRhLXJvdXRlciB1c2FnZXMuICBuZXcgVVJMKCkgZG9lcyBhbGxcbiAgICAvLyB0aGUgc2FtZSBlbmNvZGluZyB3ZSdkIGdldCBmcm9tIGEgaGlzdG9yeS5wdXNoU3RhdGUvd2luZG93LmxvY2F0aW9uIHJlYWRcbiAgICAvLyB3aXRob3V0IGhhdmluZyB0byB0b3VjaCBoaXN0b3J5XG5cbiAgICBuZXh0TG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbmV4dExvY2F0aW9uLCBpbml0Lmhpc3RvcnkuZW5jb2RlTG9jYXRpb24obmV4dExvY2F0aW9uKSk7XG4gICAgbGV0IHVzZXJSZXBsYWNlID0gb3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCA/IG9wdHMucmVwbGFjZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5QdXNoO1xuXG4gICAgaWYgKHVzZXJSZXBsYWNlID09PSB0cnVlKSB7XG4gICAgICBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgfSBlbHNlIGlmICh1c2VyUmVwbGFjZSA9PT0gZmFsc2UpIDsgZWxzZSBpZiAoc3VibWlzc2lvbiAhPSBudWxsICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSAmJiBzdWJtaXNzaW9uLmZvcm1BY3Rpb24gPT09IHN0YXRlLmxvY2F0aW9uLnBhdGhuYW1lICsgc3RhdGUubG9jYXRpb24uc2VhcmNoKSB7XG4gICAgICAvLyBCeSBkZWZhdWx0IG9uIHN1Ym1pc3Npb25zIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIHdlIFJFUExBQ0Ugc28gdGhhdFxuICAgICAgLy8gdXNlcnMgZG9uJ3QgaGF2ZSB0byBkb3VibGUtY2xpY2sgdGhlIGJhY2sgYnV0dG9uIHRvIGdldCB0byB0aGUgcHJpb3JcbiAgICAgIC8vIGxvY2F0aW9uLiAgSWYgdGhlIHVzZXIgcmVkaXJlY3RzIHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIGZyb20gdGhlXG4gICAgICAvLyBhY3Rpb24vbG9hZGVyIHRoaXMgd2lsbCBiZSBpZ25vcmVkIGFuZCB0aGUgcmVkaXJlY3Qgd2lsbCBiZSBhIFBVU0hcbiAgICAgIGhpc3RvcnlBY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICB9XG5cbiAgICBsZXQgcHJldmVudFNjcm9sbFJlc2V0ID0gb3B0cyAmJiBcInByZXZlbnRTY3JvbGxSZXNldFwiIGluIG9wdHMgPyBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCA9PT0gdHJ1ZSA6IHVuZGVmaW5lZDtcbiAgICBsZXQgYmxvY2tlcktleSA9IHNob3VsZEJsb2NrTmF2aWdhdGlvbih7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSk7XG5cbiAgICBpZiAoYmxvY2tlcktleSkge1xuICAgICAgLy8gUHV0IHRoZSBibG9ja2VyIGludG8gYSBibG9ja2VkIHN0YXRlXG4gICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgc3RhdGU6IFwiYmxvY2tlZFwiLFxuICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uLFxuXG4gICAgICAgIHByb2NlZWQoKSB7XG4gICAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgICBzdGF0ZTogXCJwcm9jZWVkaW5nXCIsXG4gICAgICAgICAgICBwcm9jZWVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICByZXNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvblxuICAgICAgICAgIH0pOyAvLyBTZW5kIHRoZSBzYW1lIG5hdmlnYXRpb24gdGhyb3VnaFxuXG4gICAgICAgICAgbmF2aWdhdGUodG8sIG9wdHMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgIGRlbGV0ZUJsb2NrZXIoYmxvY2tlcktleSk7XG4gICAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgICAgYmxvY2tlcnM6IG5ldyBNYXAoc3RhdGUuYmxvY2tlcnMpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihoaXN0b3J5QWN0aW9uLCBuZXh0TG9jYXRpb24sIHtcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICAvLyBTZW5kIHRocm91Z2ggdGhlIGZvcm1EYXRhIHNlcmlhbGl6YXRpb24gZXJyb3IgaWYgd2UgaGF2ZSBvbmUgc28gd2UgY2FuXG4gICAgICAvLyByZW5kZXIgYXQgdGhlIHJpZ2h0IGVycm9yIGJvdW5kYXJ5IGFmdGVyIHdlIG1hdGNoIHJvdXRlc1xuICAgICAgcGVuZGluZ0Vycm9yOiBlcnJvcixcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIHJlcGxhY2U6IG9wdHMgJiYgb3B0cy5yZXBsYWNlXG4gICAgfSk7XG4gIH0gLy8gUmV2YWxpZGF0ZSBhbGwgY3VycmVudCBsb2FkZXJzLiAgSWYgYSBuYXZpZ2F0aW9uIGlzIGluIHByb2dyZXNzIG9yIGlmIHRoaXNcbiAgLy8gaXMgaW50ZXJydXB0ZWQgYnkgYSBuYXZpZ2F0aW9uLCBhbGxvdyB0aGlzIHRvIFwic3VjY2VlZFwiIGJ5IGNhbGxpbmcgYWxsXG4gIC8vIGxvYWRlcnMgZHVyaW5nIHRoZSBuZXh0IGxvYWRlciByb3VuZFxuXG5cbiAgZnVuY3Rpb24gcmV2YWxpZGF0ZSgpIHtcbiAgICBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIHJldmFsaWRhdGlvbjogXCJsb2FkaW5nXCJcbiAgICB9KTsgLy8gSWYgd2UncmUgY3VycmVudGx5IHN1Ym1pdHRpbmcgYW4gYWN0aW9uLCB3ZSBkb24ndCBuZWVkIHRvIHN0YXJ0IGEgbmV3XG4gICAgLy8gbmF2aWdhdGlvbiwgd2UnbGwganVzdCBsZXQgdGhlIGZvbGxvdyB1cCBsb2FkZXIgZXhlY3V0aW9uIGNhbGwgYWxsIGxvYWRlcnNcblxuICAgIGlmIChzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlID09PSBcInN1Ym1pdHRpbmdcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgd2UncmUgY3VycmVudGx5IGluIGFuIGlkbGUgc3RhdGUsIHN0YXJ0IGEgbmV3IG5hdmlnYXRpb24gZm9yIHRoZSBjdXJyZW50XG4gICAgLy8gYWN0aW9uL2xvY2F0aW9uIGFuZCBtYXJrIGl0IGFzIHVuaW50ZXJydXB0ZWQsIHdoaWNoIHdpbGwgc2tpcCB0aGUgaGlzdG9yeVxuICAgIC8vIHVwZGF0ZSBpbiBjb21wbGV0ZU5hdmlnYXRpb25cblxuXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwiaWRsZVwiKSB7XG4gICAgICBzdGFydE5hdmlnYXRpb24oc3RhdGUuaGlzdG9yeUFjdGlvbiwgc3RhdGUubG9jYXRpb24sIHtcbiAgICAgICAgc3RhcnRVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIE90aGVyd2lzZSwgaWYgd2UncmUgY3VycmVudGx5IGluIGEgbG9hZGluZyBzdGF0ZSwganVzdCBzdGFydCBhIG5ld1xuICAgIC8vIG5hdmlnYXRpb24gdG8gdGhlIG5hdmlnYXRpb24ubG9jYXRpb24gYnV0IGRvIG5vdCB0cmlnZ2VyIGFuIHVuaW50ZXJydXB0ZWRcbiAgICAvLyByZXZhbGlkYXRpb24gc28gdGhhdCBoaXN0b3J5IGNvcnJlY3RseSB1cGRhdGVzIG9uY2UgdGhlIG5hdmlnYXRpb24gY29tcGxldGVzXG5cblxuICAgIHN0YXJ0TmF2aWdhdGlvbihwZW5kaW5nQWN0aW9uIHx8IHN0YXRlLmhpc3RvcnlBY3Rpb24sIHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24sIHtcbiAgICAgIG92ZXJyaWRlTmF2aWdhdGlvbjogc3RhdGUubmF2aWdhdGlvblxuICAgIH0pO1xuICB9IC8vIFN0YXJ0IGEgbmF2aWdhdGlvbiB0byB0aGUgZ2l2ZW4gYWN0aW9uL2xvY2F0aW9uLiAgQ2FuIG9wdGlvbmFsbHkgcHJvdmlkZSBhXG4gIC8vIG92ZXJyaWRlTmF2aWdhdGlvbiB3aGljaCB3aWxsIG92ZXJyaWRlIHRoZSBub3JtYWxMb2FkIGluIHRoZSBjYXNlIG9mIGEgcmVkaXJlY3RcbiAgLy8gbmF2aWdhdGlvblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnROYXZpZ2F0aW9uKGhpc3RvcnlBY3Rpb24sIGxvY2F0aW9uLCBvcHRzKSB7XG4gICAgLy8gQWJvcnQgYW55IGluLXByb2dyZXNzIG5hdmlnYXRpb25zIGFuZCBzdGFydCBhIG5ldyBvbmUuIFVuc2V0IGFueSBvbmdvaW5nXG4gICAgLy8gdW5pbnRlcnJ1cHRlZCByZXZhbGlkYXRpb25zIHVubGVzcyB0b2xkIG90aGVyd2lzZSwgc2luY2Ugd2Ugd2FudCB0aGlzXG4gICAgLy8gbmV3IG5hdmlnYXRpb24gdG8gdXBkYXRlIGhpc3Rvcnkgbm9ybWFsbHlcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgJiYgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLmFib3J0KCk7XG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBwZW5kaW5nQWN0aW9uID0gaGlzdG9yeUFjdGlvbjtcbiAgICBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSAob3B0cyAmJiBvcHRzLnN0YXJ0VW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbikgPT09IHRydWU7IC8vIFNhdmUgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGV2ZXJ5IHRpbWUgd2Ugc3RhcnQgYSBuZXcgbmF2aWdhdGlvbixcbiAgICAvLyBhbmQgdHJhY2sgd2hldGhlciB3ZSBzaG91bGQgcmVzZXQgc2Nyb2xsIG9uIGNvbXBsZXRpb25cblxuICAgIHNhdmVTY3JvbGxQb3NpdGlvbihzdGF0ZS5sb2NhdGlvbiwgc3RhdGUubWF0Y2hlcyk7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IChvcHRzICYmIG9wdHMucHJldmVudFNjcm9sbFJlc2V0KSA9PT0gdHJ1ZTtcbiAgICBsZXQgbG9hZGluZ05hdmlnYXRpb24gPSBvcHRzICYmIG9wdHMub3ZlcnJpZGVOYXZpZ2F0aW9uO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgbG9jYXRpb24sIGluaXQuYmFzZW5hbWUpOyAvLyBTaG9ydCBjaXJjdWl0IHdpdGggYSA0MDQgb24gdGhlIHJvb3QgZXJyb3IgYm91bmRhcnkgaWYgd2UgbWF0Y2ggbm90aGluZ1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7IC8vIENhbmNlbCBhbGwgcGVuZGluZyBkZWZlcnJlZCBvbiA0MDRzIHNpbmNlIHdlIGRvbid0IGtlZXAgYW55IHJvdXRlc1xuXG4gICAgICBjYW5jZWxBY3RpdmVEZWZlcnJlZHMoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFNob3J0IGNpcmN1aXQgaWYgaXQncyBvbmx5IGEgaGFzaCBjaGFuZ2UgYW5kIG5vdCBhIG11dGF0aW9uIHN1Ym1pc3Npb25cbiAgICAvLyBGb3IgZXhhbXBsZSwgb24gL3BhZ2UjaGFzaCBhbmQgc3VibWl0IGEgPEZvcm0gbWV0aG9kPVwicG9zdFwiPiB3aGljaCB3aWxsXG4gICAgLy8gZGVmYXVsdCB0byBhIG5hdmlnYXRpb24gdG8gL3BhZ2VcblxuXG4gICAgaWYgKGlzSGFzaENoYW5nZU9ubHkoc3RhdGUubG9jYXRpb24sIGxvY2F0aW9uKSAmJiAhKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSkge1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ3JlYXRlIGEgY29udHJvbGxlci9SZXF1ZXN0IGZvciB0aGlzIG5hdmlnYXRpb25cblxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCByZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBsb2NhdGlvbiwgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyLnNpZ25hbCwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24pO1xuICAgIGxldCBwZW5kaW5nQWN0aW9uRGF0YTtcbiAgICBsZXQgcGVuZGluZ0Vycm9yO1xuXG4gICAgaWYgKG9wdHMgJiYgb3B0cy5wZW5kaW5nRXJyb3IpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwZW5kaW5nRXJyb3IsIGl0IG1lYW5zIHRoZSB1c2VyIGF0dGVtcHRlZCBhIEdFVCBzdWJtaXNzaW9uXG4gICAgICAvLyB3aXRoIGJpbmFyeSBGb3JtRGF0YSBzbyBhc3NpZ24gaGVyZSBhbmQgc2tpcCB0byBoYW5kbGVMb2FkZXJzLiAgVGhhdFxuICAgICAgLy8gd2F5IHdlIGhhbmRsZSBjYWxsaW5nIGxvYWRlcnMgYWJvdmUgdGhlIGJvdW5kYXJ5IGV0Yy4gIEl0J3Mgbm90IHJlYWxseVxuICAgICAgLy8gZGlmZmVyZW50IGZyb20gYW4gYWN0aW9uRXJyb3IgaW4gdGhhdCBzZW5zZS5cbiAgICAgIHBlbmRpbmdFcnJvciA9IHtcbiAgICAgICAgW2ZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcykucm91dGUuaWRdOiBvcHRzLnBlbmRpbmdFcnJvclxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKG9wdHMgJiYgb3B0cy5zdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qob3B0cy5zdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICAvLyBDYWxsIGFjdGlvbiBpZiB3ZSByZWNlaXZlZCBhbiBhY3Rpb24gc3VibWlzc2lvblxuICAgICAgbGV0IGFjdGlvbk91dHB1dCA9IGF3YWl0IGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgb3B0cy5zdWJtaXNzaW9uLCBtYXRjaGVzLCB7XG4gICAgICAgIHJlcGxhY2U6IG9wdHMucmVwbGFjZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY3Rpb25PdXRwdXQuc2hvcnRDaXJjdWl0ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwZW5kaW5nQWN0aW9uRGF0YSA9IGFjdGlvbk91dHB1dC5wZW5kaW5nQWN0aW9uRGF0YTtcbiAgICAgIHBlbmRpbmdFcnJvciA9IGFjdGlvbk91dHB1dC5wZW5kaW5nQWN0aW9uRXJyb3I7XG5cbiAgICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGxvY2F0aW9uXG4gICAgICB9LCBvcHRzLnN1Ym1pc3Npb24pO1xuXG4gICAgICBsb2FkaW5nTmF2aWdhdGlvbiA9IG5hdmlnYXRpb247IC8vIENyZWF0ZSBhIEdFVCByZXF1ZXN0IGZvciB0aGUgbG9hZGVyc1xuXG4gICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdC51cmwsIHtcbiAgICAgICAgc2lnbmFsOiByZXF1ZXN0LnNpZ25hbFxuICAgICAgfSk7XG4gICAgfSAvLyBDYWxsIGxvYWRlcnNcblxuXG4gICAgbGV0IHtcbiAgICAgIHNob3J0Q2lyY3VpdGVkLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBhd2FpdCBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBsb2FkaW5nTmF2aWdhdGlvbiwgb3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24sIG9wdHMgJiYgb3B0cy5yZXBsYWNlLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKTtcblxuICAgIGlmIChzaG9ydENpcmN1aXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gQ2xlYW4gdXAgbm93IHRoYXQgdGhlIGFjdGlvbi9sb2FkZXJzIGhhdmUgY29tcGxldGVkLiAgRG9uJ3QgY2xlYW4gdXAgaWZcbiAgICAvLyB3ZSBzaG9ydCBjaXJjdWl0ZWQgYmVjYXVzZSBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgd2lsbCBoYXZlIGFscmVhZHlcbiAgICAvLyBiZWVuIGFzc2lnbmVkIHRvIGEgbmV3IGNvbnRyb2xsZXIgZm9yIHRoZSBuZXh0IG5hdmlnYXRpb25cblxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyID0gbnVsbDtcbiAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIF9leHRlbmRzKHtcbiAgICAgIG1hdGNoZXNcbiAgICB9LCBwZW5kaW5nQWN0aW9uRGF0YSA/IHtcbiAgICAgIGFjdGlvbkRhdGE6IHBlbmRpbmdBY3Rpb25EYXRhXG4gICAgfSA6IHt9LCB7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSkpO1xuICB9IC8vIENhbGwgdGhlIGFjdGlvbiBtYXRjaGVkIGJ5IHRoZSBsZWFmIHJvdXRlIGZvciB0aGlzIG5hdmlnYXRpb24gYW5kIGhhbmRsZVxuICAvLyByZWRpcmVjdHMvZXJyb3JzXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBY3Rpb24ocmVxdWVzdCwgbG9jYXRpb24sIHN1Ym1pc3Npb24sIG1hdGNoZXMsIG9wdHMpIHtcbiAgICBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpOyAvLyBQdXQgdXMgaW4gYSBzdWJtaXR0aW5nIHN0YXRlXG5cbiAgICBsZXQgbmF2aWdhdGlvbiA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcInN1Ym1pdHRpbmdcIixcbiAgICAgIGxvY2F0aW9uXG4gICAgfSwgc3VibWlzc2lvbik7XG5cbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBuYXZpZ2F0aW9uXG4gICAgfSk7IC8vIENhbGwgb3VyIGFjdGlvbiBhbmQgZ2V0IHRoZSByZXN1bHRcblxuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGFjdGlvbk1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pO1xuXG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24pIHtcbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgcm91dGVJZDogYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgICAgfSlcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImFjdGlvblwiLCByZXF1ZXN0LCBhY3Rpb25NYXRjaCwgbWF0Y2hlcywgcm91dGVyLmJhc2VuYW1lKTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCByZXBsYWNlO1xuXG4gICAgICBpZiAob3B0cyAmJiBvcHRzLnJlcGxhY2UgIT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlID0gb3B0cy5yZXBsYWNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgZGlkbid0IGV4cGxpY2l0eSBpbmRpY2F0ZSByZXBsYWNlIGJlaGF2aW9yLCByZXBsYWNlIGlmXG4gICAgICAgIC8vIHdlIHJlZGlyZWN0ZWQgdG8gdGhlIGV4YWN0IHNhbWUgbG9jYXRpb24gd2UncmUgY3VycmVudGx5IGF0IHRvIGF2b2lkXG4gICAgICAgIC8vIGRvdWJsZSBiYWNrLWJ1dHRvbnNcbiAgICAgICAgcmVwbGFjZSA9IHJlc3VsdC5sb2NhdGlvbiA9PT0gc3RhdGUubG9jYXRpb24ucGF0aG5hbWUgKyBzdGF0ZS5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZXN1bHQsIHtcbiAgICAgICAgc3VibWlzc2lvbixcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTdG9yZSBvZmYgdGhlIHBlbmRpbmcgZXJyb3IgLSB3ZSB1c2UgaXQgdG8gZGV0ZXJtaW5lIHdoaWNoIGxvYWRlcnNcbiAgICAgIC8vIHRvIGNhbGwgYW5kIHdpbGwgY29tbWl0IGl0IHdoZW4gd2UgY29tcGxldGUgdGhlIG5hdmlnYXRpb25cbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBhY3Rpb25NYXRjaC5yb3V0ZS5pZCk7IC8vIEJ5IGRlZmF1bHQsIGFsbCBzdWJtaXNzaW9ucyBhcmUgUkVQTEFDRSBuYXZpZ2F0aW9ucywgYnV0IGlmIHRoZVxuICAgICAgLy8gYWN0aW9uIHRocmV3IGFuIGVycm9yIHRoYXQnbGwgYmUgcmVuZGVyZWQgaW4gYW4gZXJyb3JFbGVtZW50LCB3ZSBmYWxsXG4gICAgICAvLyBiYWNrIHRvIFBVU0ggc28gdGhhdCB0aGUgdXNlciBjYW4gdXNlIHRoZSBiYWNrIGJ1dHRvbiB0byBnZXQgYmFjayB0b1xuICAgICAgLy8gdGhlIHByZS1zdWJtaXNzaW9uIGZvcm0gbG9jYXRpb24gdG8gdHJ5IGFnYWluXG5cbiAgICAgIGlmICgob3B0cyAmJiBvcHRzLnJlcGxhY2UpICE9PSB0cnVlKSB7XG4gICAgICAgIHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gU2VuZCBiYWNrIGFuIGVtcHR5IG9iamVjdCB3ZSBjYW4gdXNlIHRvIGNsZWFyIG91dCBhbnkgcHJpb3IgYWN0aW9uRGF0YVxuICAgICAgICBwZW5kaW5nQWN0aW9uRGF0YToge30sXG4gICAgICAgIHBlbmRpbmdBY3Rpb25FcnJvcjoge1xuICAgICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgdHlwZTogXCJkZWZlci1hY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBlbmRpbmdBY3Rpb25EYXRhOiB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICB9XG4gICAgfTtcbiAgfSAvLyBDYWxsIGFsbCBhcHBsaWNhYmxlIGxvYWRlcnMgZm9yIHRoZSBnaXZlbiBtYXRjaGVzLCBoYW5kbGluZyByZWRpcmVjdHMsXG4gIC8vIGVycm9ycywgZXRjLlxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9hZGVycyhyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgb3ZlcnJpZGVOYXZpZ2F0aW9uLCBzdWJtaXNzaW9uLCByZXBsYWNlLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yKSB7XG4gICAgLy8gRmlndXJlIG91dCB0aGUgcmlnaHQgbmF2aWdhdGlvbiB3ZSB3YW50IHRvIHVzZSBmb3IgZGF0YSBsb2FkaW5nXG4gICAgbGV0IGxvYWRpbmdOYXZpZ2F0aW9uID0gb3ZlcnJpZGVOYXZpZ2F0aW9uO1xuXG4gICAgaWYgKCFsb2FkaW5nTmF2aWdhdGlvbikge1xuICAgICAgbGV0IG5hdmlnYXRpb24gPSBfZXh0ZW5kcyh7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkXG4gICAgICB9LCBzdWJtaXNzaW9uKTtcblxuICAgICAgbG9hZGluZ05hdmlnYXRpb24gPSBuYXZpZ2F0aW9uO1xuICAgIH0gLy8gSWYgdGhpcyB3YXMgYSByZWRpcmVjdCBmcm9tIGFuIGFjdGlvbiB3ZSBkb24ndCBoYXZlIGEgXCJzdWJtaXNzaW9uXCIgYnV0XG4gICAgLy8gd2UgaGF2ZSBpdCBvbiB0aGUgbG9hZGluZyBuYXZpZ2F0aW9uIHNvIHVzZSB0aGF0IGlmIGF2YWlsYWJsZVxuXG5cbiAgICBsZXQgYWN0aXZlU3VibWlzc2lvbiA9IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uIDogbG9hZGluZ05hdmlnYXRpb24uZm9ybU1ldGhvZCAmJiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtQWN0aW9uICYmIGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1EYXRhICYmIGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1FbmNUeXBlID8ge1xuICAgICAgZm9ybU1ldGhvZDogbG9hZGluZ05hdmlnYXRpb24uZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1BY3Rpb246IGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1BY3Rpb24sXG4gICAgICBmb3JtRGF0YTogbG9hZGluZ05hdmlnYXRpb24uZm9ybURhdGEsXG4gICAgICBmb3JtRW5jVHlwZTogbG9hZGluZ05hdmlnYXRpb24uZm9ybUVuY1R5cGVcbiAgICB9IDogdW5kZWZpbmVkO1xuICAgIGxldCBbbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdID0gZ2V0TWF0Y2hlc1RvTG9hZChpbml0Lmhpc3RvcnksIHN0YXRlLCBtYXRjaGVzLCBhY3RpdmVTdWJtaXNzaW9uLCBsb2NhdGlvbiwgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMsIGNhbmNlbGxlZEZldGNoZXJMb2FkcywgcGVuZGluZ0FjdGlvbkRhdGEsIHBlbmRpbmdFcnJvciwgZmV0Y2hMb2FkTWF0Y2hlcyk7IC8vIENhbmNlbCBwZW5kaW5nIGRlZmVycmVkcyBmb3Igbm8tbG9uZ2VyLW1hdGNoZWQgcm91dGVzIG9yIHJvdXRlcyB3ZSdyZVxuICAgIC8vIGFib3V0IHRvIHJlbG9hZC4gIE5vdGUgdGhhdCBpZiB0aGlzIGlzIGFuIGFjdGlvbiByZWxvYWQgd2Ugd291bGQgaGF2ZVxuICAgIC8vIGFscmVhZHkgY2FuY2VsbGVkIGFsbCBwZW5kaW5nIGRlZmVycmVkcyBzbyB0aGlzIHdvdWxkIGJlIGEgbm8tb3BcblxuICAgIGNhbmNlbEFjdGl2ZURlZmVycmVkcyhyb3V0ZUlkID0+ICEobWF0Y2hlcyAmJiBtYXRjaGVzLnNvbWUobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSkgfHwgbWF0Y2hlc1RvTG9hZCAmJiBtYXRjaGVzVG9Mb2FkLnNvbWUobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSk7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1blxuXG4gICAgaWYgKG1hdGNoZXNUb0xvYWQubGVuZ3RoID09PSAwICYmIHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBfZXh0ZW5kcyh7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICAvLyBDb21taXQgcGVuZGluZyBlcnJvciBpZiB3ZSdyZSBzaG9ydCBjaXJjdWl0aW5nXG4gICAgICAgIGVycm9yczogcGVuZGluZ0Vycm9yIHx8IG51bGxcbiAgICAgIH0sIHBlbmRpbmdBY3Rpb25EYXRhID8ge1xuICAgICAgICBhY3Rpb25EYXRhOiBwZW5kaW5nQWN0aW9uRGF0YVxuICAgICAgfSA6IHt9KSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9IC8vIElmIHRoaXMgaXMgYW4gdW5pbnRlcnJ1cHRlZCByZXZhbGlkYXRpb24sIHdlIHJlbWFpbiBpbiBvdXIgY3VycmVudCBpZGxlXG4gICAgLy8gc3RhdGUuICBJZiBub3QsIHdlIG5lZWQgdG8gc3dpdGNoIHRvIG91ciBsb2FkaW5nIHN0YXRlIGFuZCBsb2FkIGRhdGEsXG4gICAgLy8gcHJlc2VydmluZyBhbnkgbmV3IGFjdGlvbiBkYXRhIG9yIGV4aXN0aW5nIGFjdGlvbiBkYXRhIChpbiB0aGUgY2FzZSBvZlxuICAgIC8vIGEgcmV2YWxpZGF0aW9uIGludGVycnVwdGluZyBhbiBhY3Rpb25SZWxvYWQpXG5cblxuICAgIGlmICghaXNVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uKSB7XG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHJmID0+IHtcbiAgICAgICAgbGV0IGZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQocmYua2V5KTtcbiAgICAgICAgbGV0IHJldmFsaWRhdGluZ0ZldGNoZXIgPSB7XG4gICAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICAgIGRhdGE6IGZldGNoZXIgJiYgZmV0Y2hlci5kYXRhLFxuICAgICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHN0YXRlLmZldGNoZXJzLnNldChyZi5rZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgICAgfSk7XG4gICAgICBsZXQgYWN0aW9uRGF0YSA9IHBlbmRpbmdBY3Rpb25EYXRhIHx8IHN0YXRlLmFjdGlvbkRhdGE7XG4gICAgICB1cGRhdGVTdGF0ZShfZXh0ZW5kcyh7XG4gICAgICAgIG5hdmlnYXRpb246IGxvYWRpbmdOYXZpZ2F0aW9uXG4gICAgICB9LCBhY3Rpb25EYXRhID8gT2JqZWN0LmtleXMoYWN0aW9uRGF0YSkubGVuZ3RoID09PSAwID8ge1xuICAgICAgICBhY3Rpb25EYXRhOiBudWxsXG4gICAgICB9IDoge1xuICAgICAgICBhY3Rpb25EYXRhXG4gICAgICB9IDoge30sIHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aCA+IDAgPyB7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSA6IHt9KSk7XG4gICAgfVxuXG4gICAgcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPSArK2luY3JlbWVudGluZ0xvYWRJZDtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHJmID0+IGZldGNoQ29udHJvbGxlcnMuc2V0KHJmLmtleSwgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyKSk7XG4gICAgbGV0IHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBsb2FkZXJSZXN1bHRzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICB9ID0gYXdhaXQgY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKHN0YXRlLm1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCByZXF1ZXN0KTtcblxuICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9IC8vIENsZWFuIHVwIF9hZnRlcl8gbG9hZGVycyBoYXZlIGNvbXBsZXRlZC4gIERvbid0IGNsZWFuIHVwIGlmIHdlIHNob3J0XG4gICAgLy8gY2lyY3VpdGVkIGJlY2F1c2UgZmV0Y2hDb250cm9sbGVycyB3b3VsZCBoYXZlIGJlZW4gYWJvcnRlZCBhbmRcbiAgICAvLyByZWFzc2lnbmVkIHRvIG5ldyBjb250cm9sbGVycyBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxuXG5cbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHJmID0+IGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKHJmLmtleSkpOyAvLyBJZiBhbnkgbG9hZGVycyByZXR1cm5lZCBhIHJlZGlyZWN0IFJlc3BvbnNlLCBzdGFydCBhIG5ldyBSRVBMQUNFIG5hdmlnYXRpb25cblxuICAgIGxldCByZWRpcmVjdCA9IGZpbmRSZWRpcmVjdChyZXN1bHRzKTtcblxuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgYXdhaXQgc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlZGlyZWN0LCB7XG4gICAgICAgIHJlcGxhY2VcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvcnRDaXJjdWl0ZWQ6IHRydWVcbiAgICAgIH07XG4gICAgfSAvLyBQcm9jZXNzIGFuZCBjb21taXQgb3V0cHV0IGZyb20gbG9hZGVyc1xuXG5cbiAgICBsZXQge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgcGVuZGluZ0Vycm9yLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcyk7IC8vIFdpcmUgdXAgc3Vic2NyaWJlcnMgdG8gdXBkYXRlIGxvYWRlckRhdGEgYXMgcHJvbWlzZXMgc2V0dGxlXG5cbiAgICBhY3RpdmVEZWZlcnJlZHMuZm9yRWFjaCgoZGVmZXJyZWREYXRhLCByb3V0ZUlkKSA9PiB7XG4gICAgICBkZWZlcnJlZERhdGEuc3Vic2NyaWJlKGFib3J0ZWQgPT4ge1xuICAgICAgICAvLyBOb3RlOiBObyBuZWVkIHRvIHVwZGF0ZVN0YXRlIGhlcmUgc2luY2UgdGhlIFRyYWNrZWRQcm9taXNlIG9uXG4gICAgICAgIC8vIGxvYWRlckRhdGEgaXMgc3RhYmxlIGFjcm9zcyByZXNvbHZlL3JlamVjdFxuICAgICAgICAvLyBSZW1vdmUgdGhpcyBpbnN0YW5jZSBpZiB3ZSB3ZXJlIGFib3J0ZWQgb3IgaWYgcHJvbWlzZXMgaGF2ZSBzZXR0bGVkXG4gICAgICAgIGlmIChhYm9ydGVkIHx8IGRlZmVycmVkRGF0YS5kb25lKSB7XG4gICAgICAgICAgYWN0aXZlRGVmZXJyZWRzLmRlbGV0ZShyb3V0ZUlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpO1xuICAgIGxldCBkaWRBYm9ydEZldGNoTG9hZHMgPSBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9LCBkaWRBYm9ydEZldGNoTG9hZHMgfHwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID4gMCA/IHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0gOiB7fSk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRGZXRjaGVyKGtleSkge1xuICAgIHJldHVybiBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KSB8fCBJRExFX0ZFVENIRVI7XG4gIH0gLy8gVHJpZ2dlciBhIGZldGNoZXIgbG9hZC9zdWJtaXQgZm9yIHRoZSBnaXZlbiBmZXRjaGVyIGtleVxuXG5cbiAgZnVuY3Rpb24gZmV0Y2goa2V5LCByb3V0ZUlkLCBocmVmLCBvcHRzKSB7XG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyb3V0ZXIuZmV0Y2goKSB3YXMgY2FsbGVkIGR1cmluZyB0aGUgc2VydmVyIHJlbmRlciwgYnV0IGl0IHNob3VsZG4ndCBiZS4gXCIgKyBcIllvdSBhcmUgbGlrZWx5IGNhbGxpbmcgYSB1c2VGZXRjaGVyKCkgbWV0aG9kIGluIHRoZSBib2R5IG9mIHlvdXIgY29tcG9uZW50LiBcIiArIFwiVHJ5IG1vdmluZyBpdCB0byBhIHVzZUVmZmVjdCBvciBhIGNhbGxiYWNrLlwiKTtcbiAgICB9XG5cbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBocmVmLCBpbml0LmJhc2VuYW1lKTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGhyZWZcbiAgICAgIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgcGF0aCxcbiAgICAgIHN1Ym1pc3Npb25cbiAgICB9ID0gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKGhyZWYsIG9wdHMsIHRydWUpO1xuICAgIGxldCBtYXRjaCA9IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIHBhdGgpO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSAob3B0cyAmJiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldCkgPT09IHRydWU7XG5cbiAgICBpZiAoc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGhhbmRsZUZldGNoZXJBY3Rpb24oa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgbWF0Y2hlcywgc3VibWlzc2lvbik7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBTdG9yZSBvZmYgdGhlIG1hdGNoIHNvIHdlIGNhbiBjYWxsIGl0J3Mgc2hvdWxkUmV2YWxpZGF0ZSBvbiBzdWJzZXF1ZW50XG4gICAgLy8gcmV2YWxpZGF0aW9uc1xuXG5cbiAgICBmZXRjaExvYWRNYXRjaGVzLnNldChrZXksIHtcbiAgICAgIHJvdXRlSWQsXG4gICAgICBwYXRoLFxuICAgICAgbWF0Y2gsXG4gICAgICBtYXRjaGVzXG4gICAgfSk7XG4gICAgaGFuZGxlRmV0Y2hlckxvYWRlcihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKTtcbiAgfSAvLyBDYWxsIHRoZSBhY3Rpb24gZm9yIHRoZSBtYXRjaGVkIGZldGNoZXIuc3VibWl0KCksIGFuZCB0aGVuIGhhbmRsZSByZWRpcmVjdHMsXG4gIC8vIGVycm9ycywgYW5kIHJldmFsaWRhdGlvblxuXG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmV0Y2hlckFjdGlvbihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCByZXF1ZXN0TWF0Y2hlcywgc3VibWlzc2lvbikge1xuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5kZWxldGUoa2V5KTtcblxuICAgIGlmICghbWF0Y2gucm91dGUuYWN0aW9uKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IHBhdGgsXG4gICAgICAgIHJvdXRlSWQ6IHJvdXRlSWRcbiAgICAgIH0pO1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUHV0IHRoaXMgZmV0Y2hlciBpbnRvIGl0J3Mgc3VibWl0dGluZyBzdGF0ZVxuXG5cbiAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG5cbiAgICBsZXQgZmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcInN1Ym1pdHRpbmdcIlxuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGRhdGE6IGV4aXN0aW5nRmV0Y2hlciAmJiBleGlzdGluZ0ZldGNoZXIuZGF0YSxcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfSk7XG5cbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBmZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTsgLy8gQ2FsbCB0aGUgYWN0aW9uIGZvciB0aGUgZmV0Y2hlclxuXG4gICAgbGV0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBwYXRoLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsLCBzdWJtaXNzaW9uKTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLnNldChrZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgbGV0IGFjdGlvblJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImFjdGlvblwiLCBmZXRjaFJlcXVlc3QsIG1hdGNoLCByZXF1ZXN0TWF0Y2hlcywgcm91dGVyLmJhc2VuYW1lKTtcblxuICAgIGlmIChmZXRjaFJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIC8vIFdlIGNhbiBkZWxldGUgdGhpcyBzbyBsb25nIGFzIHdlIHdlcmVuJ3QgYWJvcnRlZCBieSBvdSBvdXIgb3duIGZldGNoZXJcbiAgICAgIC8vIHJlLXN1Ym1pdCB3aGljaCB3b3VsZCBoYXZlIHB1dCBfbmV3XyBjb250cm9sbGVyIGlzIGluIGZldGNoQ29udHJvbGxlcnNcbiAgICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmdldChrZXkpID09PSBhYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgICBmZXRjaFJlZGlyZWN0SWRzLmFkZChrZXkpO1xuXG4gICAgICBsZXQgbG9hZGluZ0ZldGNoZXIgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIlxuICAgICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgICBkYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9KTtcblxuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZGluZ0ZldGNoZXIpO1xuICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCBhY3Rpb25SZXN1bHQsIHtcbiAgICAgICAgaXNGZXRjaEFjdGlvblJlZGlyZWN0OiB0cnVlXG4gICAgICB9KTtcbiAgICB9IC8vIFByb2Nlc3MgYW55IG5vbi1yZWRpcmVjdCBlcnJvcnMgdGhyb3duXG5cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KGFjdGlvblJlc3VsdCkpIHtcbiAgICAgIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGFjdGlvblJlc3VsdC5lcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgdHlwZTogXCJkZWZlci1hY3Rpb25cIlxuICAgICAgfSk7XG4gICAgfSAvLyBTdGFydCB0aGUgZGF0YSBsb2FkIGZvciBjdXJyZW50IG1hdGNoZXMsIG9yIHRoZSBuZXh0IGxvY2F0aW9uIGlmIHdlJ3JlXG4gICAgLy8gaW4gdGhlIG1pZGRsZSBvZiBhIG5hdmlnYXRpb25cblxuXG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24gfHwgc3RhdGUubG9jYXRpb247XG4gICAgbGV0IHJldmFsaWRhdGlvblJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIG5leHRMb2NhdGlvbiwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgbGV0IG1hdGNoZXMgPSBzdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlICE9PSBcImlkbGVcIiA/IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24sIGluaXQuYmFzZW5hbWUpIDogc3RhdGUubWF0Y2hlcztcbiAgICBpbnZhcmlhbnQobWF0Y2hlcywgXCJEaWRuJ3QgZmluZCBhbnkgbWF0Y2hlcyBhZnRlciBmZXRjaGVyIGFjdGlvblwiKTtcbiAgICBsZXQgbG9hZElkID0gKytpbmNyZW1lbnRpbmdMb2FkSWQ7XG4gICAgZmV0Y2hSZWxvYWRJZHMuc2V0KGtleSwgbG9hZElkKTtcblxuICAgIGxldCBsb2FkRmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgIGRhdGE6IGFjdGlvblJlc3VsdC5kYXRhXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRGZXRjaGVyKTtcbiAgICBsZXQgW21hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzXSA9IGdldE1hdGNoZXNUb0xvYWQoaW5pdC5oaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbmV4dExvY2F0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCB7XG4gICAgICBbbWF0Y2gucm91dGUuaWRdOiBhY3Rpb25SZXN1bHQuZGF0YVxuICAgIH0sIHVuZGVmaW5lZCwgLy8gTm8gbmVlZCB0byBzZW5kIHRocm91Z2ggZXJyb3JzIHNpbmNlIHdlIHNob3J0IGNpcmN1aXQgYWJvdmVcbiAgICBmZXRjaExvYWRNYXRjaGVzKTsgLy8gUHV0IGFsbCByZXZhbGlkYXRpbmcgZmV0Y2hlcnMgaW50byB0aGUgbG9hZGluZyBzdGF0ZSwgZXhjZXB0IGZvciB0aGVcbiAgICAvLyBjdXJyZW50IGZldGNoZXIgd2hpY2ggd2Ugd2FudCB0byBrZWVwIGluIGl0J3MgY3VycmVudCBsb2FkaW5nIHN0YXRlIHdoaWNoXG4gICAgLy8gY29udGFpbnMgaXQncyBhY3Rpb24gc3VibWlzc2lvbiBpbmZvICsgYWN0aW9uIGRhdGFcblxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZpbHRlcihyZiA9PiByZi5rZXkgIT09IGtleSkuZm9yRWFjaChyZiA9PiB7XG4gICAgICBsZXQgc3RhbGVLZXkgPSByZi5rZXk7XG4gICAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KHN0YWxlS2V5KTtcbiAgICAgIGxldCByZXZhbGlkYXRpbmdGZXRjaGVyID0ge1xuICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgIGRhdGE6IGV4aXN0aW5nRmV0Y2hlciAmJiBleGlzdGluZ0ZldGNoZXIuZGF0YSxcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9O1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHN0YWxlS2V5LCByZXZhbGlkYXRpbmdGZXRjaGVyKTtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KHN0YWxlS2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIH0pO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICAgIGxldCB7XG4gICAgICByZXN1bHRzLFxuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfSA9IGF3YWl0IGNhbGxMb2FkZXJzQW5kTWF5YmVSZXNvbHZlRGF0YShzdGF0ZS5tYXRjaGVzLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVycywgcmV2YWxpZGF0aW9uUmVxdWVzdCk7XG5cbiAgICBpZiAoYWJvcnRDb250cm9sbGVyLnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5mb3JFYWNoKHIgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUoci5rZXkpKTtcbiAgICBsZXQgcmVkaXJlY3QgPSBmaW5kUmVkaXJlY3QocmVzdWx0cyk7XG5cbiAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgIHJldHVybiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QpO1xuICAgIH0gLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcblxuXG4gICAgbGV0IHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9ID0gcHJvY2Vzc0xvYWRlckRhdGEoc3RhdGUsIHN0YXRlLm1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGxvYWRlclJlc3VsdHMsIHVuZGVmaW5lZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIGZldGNoZXJSZXN1bHRzLCBhY3RpdmVEZWZlcnJlZHMpO1xuICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgIGRhdGE6IGFjdGlvblJlc3VsdC5kYXRhLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH07XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIGxldCBkaWRBYm9ydEZldGNoTG9hZHMgPSBhYm9ydFN0YWxlRmV0Y2hMb2Fkcyhsb2FkSWQpOyAvLyBJZiB3ZSBhcmUgY3VycmVudGx5IGluIGEgbmF2aWdhdGlvbiBsb2FkaW5nIHN0YXRlIGFuZCB0aGlzIGZldGNoZXIgaXNcbiAgICAvLyBtb3JlIHJlY2VudCB0aGFuIHRoZSBuYXZpZ2F0aW9uLCB3ZSB3YW50IHRoZSBuZXdlciBkYXRhIHNvIGFib3J0IHRoZVxuICAgIC8vIG5hdmlnYXRpb24gYW5kIGNvbXBsZXRlIGl0IHdpdGggdGhlIGZldGNoZXIgZGF0YVxuXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwibG9hZGluZ1wiICYmIGxvYWRJZCA+IHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKSB7XG4gICAgICBpbnZhcmlhbnQocGVuZGluZ0FjdGlvbiwgXCJFeHBlY3RlZCBwZW5kaW5nIGFjdGlvblwiKTtcbiAgICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgIGNvbXBsZXRlTmF2aWdhdGlvbihzdGF0ZS5uYXZpZ2F0aW9uLmxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGEsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgdXBkYXRlIHdpdGggdGhlIGZldGNoZXIgZGF0YSwgcHJlc2VydmluZyBhbnkgZXhpc3RpbmdcbiAgICAgIC8vIGxvYWRlckRhdGEgZm9yIGxvYWRlcnMgdGhhdCBkaWQgbm90IG5lZWQgdG8gcmVsb2FkLiAgV2UgaGF2ZSB0b1xuICAgICAgLy8gbWFudWFsbHkgbWVyZ2UgaGVyZSBzaW5jZSB3ZSBhcmVuJ3QgZ29pbmcgdGhyb3VnaCBjb21wbGV0ZU5hdmlnYXRpb25cbiAgICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBsb2FkZXJEYXRhOiBtZXJnZUxvYWRlckRhdGEoc3RhdGUubG9hZGVyRGF0YSwgbG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKVxuICAgICAgfSwgZGlkQWJvcnRGZXRjaExvYWRzID8ge1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0gOiB7fSkpO1xuICAgICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xuICAgIH1cbiAgfSAvLyBDYWxsIHRoZSBtYXRjaGVkIGxvYWRlciBmb3IgZmV0Y2hlci5sb2FkKCksIGhhbmRsaW5nIHJlZGlyZWN0cywgZXJyb3JzLCBldGMuXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIHN1Ym1pc3Npb24pIHtcbiAgICBsZXQgZXhpc3RpbmdGZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7IC8vIFB1dCB0aGlzIGZldGNoZXIgaW50byBpdCdzIGxvYWRpbmcgc3RhdGVcblxuICAgIGxldCBsb2FkaW5nRmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRGF0YTogdW5kZWZpbmVkXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGxvYWRpbmdGZXRjaGVyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICB9KTsgLy8gQ2FsbCB0aGUgbG9hZGVyIGZvciB0aGlzIGZldGNoZXIgcm91dGUgbWF0Y2hcblxuICAgIGxldCBhYm9ydENvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IGZldGNoUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgcGF0aCwgYWJvcnRDb250cm9sbGVyLnNpZ25hbCk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5zZXQoa2V5LCBhYm9ydENvbnRyb2xsZXIpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgZmV0Y2hSZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgcm91dGVyLmJhc2VuYW1lKTsgLy8gRGVmZXJyZWQgaXNuJ3Qgc3VwcG9ydGVkIGZvciBmZXRjaGVyIGxvYWRzLCBhd2FpdCBldmVyeXRoaW5nIGFuZCB0cmVhdCBpdFxuICAgIC8vIGFzIGEgbm9ybWFsIGxvYWQuICByZXNvbHZlRGVmZXJyZWREYXRhIHdpbGwgcmV0dXJuIHVuZGVmaW5lZCBpZiB0aGlzXG4gICAgLy8gZmV0Y2hlciBnZXRzIGFib3J0ZWQsIHNvIHdlIGp1c3QgbGVhdmUgcmVzdWx0IHVudG91Y2hlZCBhbmQgc2hvcnQgY2lyY3VpdFxuICAgIC8vIGJlbG93IGlmIHRoYXQgaGFwcGVuc1xuXG4gICAgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmVzdWx0ID0gKGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBmZXRjaFJlcXVlc3Quc2lnbmFsLCB0cnVlKSkgfHwgcmVzdWx0O1xuICAgIH0gLy8gV2UgY2FuIGRlbGV0ZSB0aGlzIHNvIGxvbmcgYXMgd2Ugd2VyZW4ndCBhYm9ydGVkIGJ5IG91IG91ciBvd24gZmV0Y2hlclxuICAgIC8vIHJlLWxvYWQgd2hpY2ggd291bGQgaGF2ZSBwdXQgX25ld18gY29udHJvbGxlciBpcyBpbiBmZXRjaENvbnRyb2xsZXJzXG5cblxuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmdldChrZXkpID09PSBhYm9ydENvbnRyb2xsZXIpIHtcbiAgICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gICAgfVxuXG4gICAgaWYgKGZldGNoUmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgdGhlIGxvYWRlciB0aHJldyBhIHJlZGlyZWN0IFJlc3BvbnNlLCBzdGFydCBhIG5ldyBSRVBMQUNFIG5hdmlnYXRpb25cblxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgYXdhaXQgc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlc3VsdCk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBQcm9jZXNzIGFueSBub24tcmVkaXJlY3QgZXJyb3JzIHRocm93blxuXG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgcm91dGVJZCk7XG4gICAgICBzdGF0ZS5mZXRjaGVycy5kZWxldGUoa2V5KTsgLy8gVE9ETzogSW4gcmVtaXgsIHRoaXMgd291bGQgcmVzZXQgdG8gSURMRV9OQVZJR0FUSU9OIGlmIGl0IHdhcyBhIGNhdGNoIC1cbiAgICAgIC8vIGRvIHdlIG5lZWQgdG8gYmVoYXZlIGFueSBkaWZmZXJlbnRseSB3aXRoIG91ciBub24tcmVkaXJlY3QgZXJyb3JzP1xuICAgICAgLy8gV2hhdCBpZiBpdCB3YXMgYSBub24tcmVkaXJlY3QgUmVzcG9uc2U/XG5cbiAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnZhcmlhbnQoIWlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSwgXCJVbmhhbmRsZWQgZmV0Y2hlciBkZWZlcnJlZCBkYXRhXCIpOyAvLyBQdXQgdGhlIGZldGNoZXIgYmFjayBpbnRvIGFuIGlkbGUgc3RhdGVcblxuICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH07XG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGhhbmRsZSByZWRpcmVjdHMgcmV0dXJuZWQgZnJvbSBhbiBhY3Rpb24gb3IgbG9hZGVyLlxuICAgKiBOb3JtYWxseSwgYSByZWRpcmVjdCBcInJlcGxhY2VzXCIgdGhlIG5hdmlnYXRpb24gdGhhdCB0cmlnZ2VyZWQgaXQuICBTbywgZm9yXG4gICAqIGV4YW1wbGU6XG4gICAqXG4gICAqICAtIHVzZXIgaXMgb24gL2FcbiAgICogIC0gdXNlciBjbGlja3MgYSBsaW5rIHRvIC9iXG4gICAqICAtIGxvYWRlciBmb3IgL2IgcmVkaXJlY3RzIHRvIC9jXG4gICAqXG4gICAqIEluIGEgbm9uLUpTIGFwcCB0aGUgYnJvd3NlciB3b3VsZCB0cmFjayB0aGUgaW4tZmxpZ2h0IG5hdmlnYXRpb24gdG8gL2IgYW5kXG4gICAqIHRoZW4gcmVwbGFjZSBpdCB3aXRoIC9jIHdoZW4gaXQgZW5jb3VudGVyZWQgdGhlIHJlZGlyZWN0IHJlc3BvbnNlLiAgSW5cbiAgICogdGhlIGVuZCBpdCB3b3VsZCBvbmx5IGV2ZXIgdXBkYXRlIHRoZSBVUkwgYmFyIHdpdGggL2MuXG4gICAqXG4gICAqIEluIGNsaWVudC1zaWRlIHJvdXRpbmcgdXNpbmcgcHVzaFN0YXRlL3JlcGxhY2VTdGF0ZSwgd2UgYWltIHRvIGVtdWxhdGVcbiAgICogdGhpcyBiZWhhdmlvciBhbmQgd2UgYWxzbyBkbyBub3QgdXBkYXRlIGhpc3RvcnkgdW50aWwgdGhlIGVuZCBvZiB0aGVcbiAgICogbmF2aWdhdGlvbiAoaW5jbHVkaW5nIHByb2Nlc3NlZCByZWRpcmVjdHMpLiAgVGhpcyBtZWFucyB0aGF0IHdlIG5ldmVyXG4gICAqIGFjdHVhbGx5IHRvdWNoIGhpc3RvcnkgdW50aWwgd2UndmUgcHJvY2Vzc2VkIHJlZGlyZWN0cywgc28gd2UganVzdCB1c2VcbiAgICogdGhlIGhpc3RvcnkgYWN0aW9uIGZyb20gdGhlIG9yaWdpbmFsIG5hdmlnYXRpb24gKFBVU0ggb3IgUkVQTEFDRSkuXG4gICAqL1xuXG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlZGlyZWN0LCBfdGVtcCkge1xuICAgIHZhciBfd2luZG93O1xuXG4gICAgbGV0IHtcbiAgICAgIHN1Ym1pc3Npb24sXG4gICAgICByZXBsYWNlLFxuICAgICAgaXNGZXRjaEFjdGlvblJlZGlyZWN0XG4gICAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuXG4gICAgaWYgKHJlZGlyZWN0LnJldmFsaWRhdGUpIHtcbiAgICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCByZWRpcmVjdExvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oc3RhdGUubG9jYXRpb24sIHJlZGlyZWN0LmxvY2F0aW9uLCAvLyBUT0RPOiBUaGlzIGNhbiBiZSByZW1vdmVkIG9uY2Ugd2UgZ2V0IHJpZCBvZiB1c2VUcmFuc2l0aW9uIGluIFJlbWl4IHYyXG4gICAgX2V4dGVuZHMoe1xuICAgICAgX2lzUmVkaXJlY3Q6IHRydWVcbiAgICB9LCBpc0ZldGNoQWN0aW9uUmVkaXJlY3QgPyB7XG4gICAgICBfaXNGZXRjaEFjdGlvblJlZGlyZWN0OiB0cnVlXG4gICAgfSA6IHt9KSk7XG4gICAgaW52YXJpYW50KHJlZGlyZWN0TG9jYXRpb24sIFwiRXhwZWN0ZWQgYSBsb2NhdGlvbiBvbiB0aGUgcmVkaXJlY3QgbmF2aWdhdGlvblwiKTsgLy8gQ2hlY2sgaWYgdGhpcyBhbiBhYnNvbHV0ZSBleHRlcm5hbCByZWRpcmVjdCB0aGF0IGdvZXMgdG8gYSBuZXcgb3JpZ2luXG5cbiAgICBpZiAoQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QocmVkaXJlY3QubG9jYXRpb24pICYmIGlzQnJvd3NlciAmJiB0eXBlb2YgKChfd2luZG93ID0gd2luZG93KSA9PSBudWxsID8gdm9pZCAwIDogX3dpbmRvdy5sb2NhdGlvbikgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGxldCBuZXdPcmlnaW4gPSBpbml0Lmhpc3RvcnkuY3JlYXRlVVJMKHJlZGlyZWN0LmxvY2F0aW9uKS5vcmlnaW47XG5cbiAgICAgIGlmICh3aW5kb3cubG9jYXRpb24ub3JpZ2luICE9PSBuZXdPcmlnaW4pIHtcbiAgICAgICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShyZWRpcmVjdC5sb2NhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmFzc2lnbihyZWRpcmVjdC5sb2NhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gYWJvcnQgb24gcmVkaXJlY3RzLCBzaW5jZSB3ZSBkb24ndCBkZXRlY3QgdGhlXG4gICAgLy8gcmVkaXJlY3QgdW50aWwgdGhlIGFjdGlvbi9sb2FkZXJzIGhhdmUgc2V0dGxlZFxuXG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIGxldCByZWRpcmVjdEhpc3RvcnlBY3Rpb24gPSByZXBsYWNlID09PSB0cnVlID8gQWN0aW9uLlJlcGxhY2UgOiBBY3Rpb24uUHVzaDsgLy8gVXNlIHRoZSBpbmNvbWluZyBzdWJtaXNzaW9uIGlmIHByb3ZpZGVkLCBmYWxsYmFjayBvbiB0aGUgYWN0aXZlIG9uZSBpblxuICAgIC8vIHN0YXRlLm5hdmlnYXRpb25cblxuICAgIGxldCB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbixcbiAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGFcbiAgICB9ID0gc3RhdGUubmF2aWdhdGlvbjtcblxuICAgIGlmICghc3VibWlzc2lvbiAmJiBmb3JtTWV0aG9kICYmIGZvcm1BY3Rpb24gJiYgZm9ybURhdGEgJiYgZm9ybUVuY1R5cGUpIHtcbiAgICAgIHN1Ym1pc3Npb24gPSB7XG4gICAgICAgIGZvcm1NZXRob2QsXG4gICAgICAgIGZvcm1BY3Rpb24sXG4gICAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgICBmb3JtRGF0YVxuICAgICAgfTtcbiAgICB9IC8vIElmIHRoaXMgd2FzIGEgMzA3LzMwOCBzdWJtaXNzaW9uIHdlIHdhbnQgdG8gcHJlc2VydmUgdGhlIEhUVFAgbWV0aG9kIGFuZFxuICAgIC8vIHJlLXN1Ym1pdCB0aGUgR0VUL1BPU1QvUFVUL1BBVENIL0RFTEVURSBhcyBhIHN1Ym1pc3Npb24gbmF2aWdhdGlvbiB0byB0aGVcbiAgICAvLyByZWRpcmVjdGVkIGxvY2F0aW9uXG5cblxuICAgIGlmIChyZWRpcmVjdFByZXNlcnZlTWV0aG9kU3RhdHVzQ29kZXMuaGFzKHJlZGlyZWN0LnN0YXR1cykgJiYgc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdEhpc3RvcnlBY3Rpb24sIHJlZGlyZWN0TG9jYXRpb24sIHtcbiAgICAgICAgc3VibWlzc2lvbjogX2V4dGVuZHMoe30sIHN1Ym1pc3Npb24sIHtcbiAgICAgICAgICBmb3JtQWN0aW9uOiByZWRpcmVjdC5sb2NhdGlvblxuICAgICAgICB9KSxcbiAgICAgICAgLy8gUHJlc2VydmUgdGhpcyBmbGFnIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBraWNrIG9mZiBhIG5ldyBsb2FkaW5nIG5hdmlnYXRpb24sIHByZXNlcnZpbmcgdGhlXG4gICAgICAvLyBzdWJtaXNzaW9uIGluZm8gZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGlzIG5hdmlnYXRpb25cbiAgICAgIGF3YWl0IHN0YXJ0TmF2aWdhdGlvbihyZWRpcmVjdEhpc3RvcnlBY3Rpb24sIHJlZGlyZWN0TG9jYXRpb24sIHtcbiAgICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICAgIGxvY2F0aW9uOiByZWRpcmVjdExvY2F0aW9uLFxuICAgICAgICAgIGZvcm1NZXRob2Q6IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1NZXRob2QgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybUFjdGlvbjogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybUFjdGlvbiA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybUVuY1R5cGUgOiB1bmRlZmluZWQsXG4gICAgICAgICAgZm9ybURhdGE6IHN1Ym1pc3Npb24gPyBzdWJtaXNzaW9uLmZvcm1EYXRhIDogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIC8vIFByZXNlcnZlIHRoaXMgZmxhZyBhY3Jvc3MgcmVkaXJlY3RzXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKGN1cnJlbnRNYXRjaGVzLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBmZXRjaGVyc1RvTG9hZCwgcmVxdWVzdCkge1xuICAgIC8vIENhbGwgYWxsIG5hdmlnYXRpb24gbG9hZGVycyBhbmQgcmV2YWxpZGF0aW5nIGZldGNoZXIgbG9hZGVycyBpbiBwYXJhbGxlbCxcbiAgICAvLyB0aGVuIHNsaWNlIG9mZiB0aGUgcmVzdWx0cyBpbnRvIHNlcGFyYXRlIGFycmF5cyBzbyB3ZSBjYW4gaGFuZGxlIHRoZW1cbiAgICAvLyBhY2NvcmRpbmdseVxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLm1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgcm91dGVyLmJhc2VuYW1lKSksIC4uLmZldGNoZXJzVG9Mb2FkLm1hcChmID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIGYucGF0aCwgcmVxdWVzdC5zaWduYWwpLCBmLm1hdGNoLCBmLm1hdGNoZXMsIHJvdXRlci5iYXNlbmFtZSkpXSk7XG4gICAgbGV0IGxvYWRlclJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG1hdGNoZXNUb0xvYWQubGVuZ3RoKTtcbiAgICBsZXQgZmV0Y2hlclJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKG1hdGNoZXNUb0xvYWQubGVuZ3RoKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgcmVxdWVzdC5zaWduYWwsIGZhbHNlLCBzdGF0ZS5sb2FkZXJEYXRhKSwgcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgZmV0Y2hlcnNUb0xvYWQubWFwKGYgPT4gZi5tYXRjaCksIGZldGNoZXJSZXN1bHRzLCByZXF1ZXN0LnNpZ25hbCwgdHJ1ZSldKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpbnRlcnJ1cHRBY3RpdmVMb2FkcygpIHtcbiAgICAvLyBFdmVyeSBpbnRlcnJ1cHRpb24gdHJpZ2dlcnMgYSByZXZhbGlkYXRpb25cbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gdHJ1ZTsgLy8gQ2FuY2VsIHBlbmRpbmcgcm91dGUtbGV2ZWwgZGVmZXJyZWRzIGFuZCBtYXJrIGNhbmNlbGxlZCByb3V0ZXMgZm9yXG4gICAgLy8gcmV2YWxpZGF0aW9uXG5cbiAgICBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcy5wdXNoKC4uLmNhbmNlbEFjdGl2ZURlZmVycmVkcygpKTsgLy8gQWJvcnQgaW4tZmxpZ2h0IGZldGNoZXIgbG9hZHNcblxuICAgIGZldGNoTG9hZE1hdGNoZXMuZm9yRWFjaCgoXywga2V5KSA9PiB7XG4gICAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkge1xuICAgICAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMucHVzaChrZXkpO1xuICAgICAgICBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZldGNoZXJFcnJvcihrZXksIHJvdXRlSWQsIGVycm9yKSB7XG4gICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KHN0YXRlLm1hdGNoZXMsIHJvdXRlSWQpO1xuICAgIGRlbGV0ZUZldGNoZXIoa2V5KTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiBlcnJvclxuICAgICAgfSxcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlRmV0Y2hlcihrZXkpIHtcbiAgICBpZiAoZmV0Y2hDb250cm9sbGVycy5oYXMoa2V5KSkgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWJvcnRGZXRjaGVyKGtleSkge1xuICAgIGxldCBjb250cm9sbGVyID0gZmV0Y2hDb250cm9sbGVycy5nZXQoa2V5KTtcbiAgICBpbnZhcmlhbnQoY29udHJvbGxlciwgXCJFeHBlY3RlZCBmZXRjaCBjb250cm9sbGVyOiBcIiArIGtleSk7XG4gICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgIGZldGNoQ29udHJvbGxlcnMuZGVsZXRlKGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrRmV0Y2hlcnNEb25lKGtleXMpIHtcbiAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xuICAgICAgbGV0IGZldGNoZXIgPSBnZXRGZXRjaGVyKGtleSk7XG4gICAgICBsZXQgZG9uZUZldGNoZXIgPSB7XG4gICAgICAgIHN0YXRlOiBcImlkbGVcIixcbiAgICAgICAgZGF0YTogZmV0Y2hlci5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbWFya0ZldGNoUmVkaXJlY3RzRG9uZSgpIHtcbiAgICBsZXQgZG9uZUtleXMgPSBbXTtcblxuICAgIGZvciAobGV0IGtleSBvZiBmZXRjaFJlZGlyZWN0SWRzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgaW52YXJpYW50KGZldGNoZXIsIFwiRXhwZWN0ZWQgZmV0Y2hlcjogXCIgKyBrZXkpO1xuXG4gICAgICBpZiAoZmV0Y2hlci5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgZmV0Y2hSZWRpcmVjdElkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgZG9uZUtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtGZXRjaGVyc0RvbmUoZG9uZUtleXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWJvcnRTdGFsZUZldGNoTG9hZHMobGFuZGVkSWQpIHtcbiAgICBsZXQgeWVldGVkS2V5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgW2tleSwgaWRdIG9mIGZldGNoUmVsb2FkSWRzKSB7XG4gICAgICBpZiAoaWQgPCBsYW5kZWRJZCkge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChrZXkpO1xuICAgICAgICBpbnZhcmlhbnQoZmV0Y2hlciwgXCJFeHBlY3RlZCBmZXRjaGVyOiBcIiArIGtleSk7XG5cbiAgICAgICAgaWYgKGZldGNoZXIuc3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgICAgICAgYWJvcnRGZXRjaGVyKGtleSk7XG4gICAgICAgICAgZmV0Y2hSZWxvYWRJZHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgeWVldGVkS2V5cy5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRmV0Y2hlcnNEb25lKHllZXRlZEtleXMpO1xuICAgIHJldHVybiB5ZWV0ZWRLZXlzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRCbG9ja2VyKGtleSwgZm4pIHtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChrZXkpIHx8IElETEVfQkxPQ0tFUjtcblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLmdldChrZXkpICE9PSBmbikge1xuICAgICAgYmxvY2tlckZ1bmN0aW9ucy5zZXQoa2V5LCBmbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVCbG9ja2VyKGtleSkge1xuICAgIHN0YXRlLmJsb2NrZXJzLmRlbGV0ZShrZXkpO1xuICAgIGJsb2NrZXJGdW5jdGlvbnMuZGVsZXRlKGtleSk7XG4gIH0gLy8gVXRpbGl0eSBmdW5jdGlvbiB0byB1cGRhdGUgYmxvY2tlcnMsIGVuc3VyaW5nIHZhbGlkIHN0YXRlIHRyYW5zaXRpb25zXG5cblxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyKGtleSwgbmV3QmxvY2tlcikge1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGtleSkgfHwgSURMRV9CTE9DS0VSOyAvLyBQb29yIG1hbnMgc3RhdGUgbWFjaGluZSA6KVxuICAgIC8vIGh0dHBzOi8vbWVybWFpZC5saXZlL2VkaXQjcGFrbzplTnFWa2M5T3d6QU14bDhsOG5uakFZckV0RElPSEVCSWd3dktKVFJlR3kzX2xEcElxTzI3azZhd01HMFhjckxsbno4N253ZG9uRVNvZ0tYWEJ1RTc5cnE3NVhaTzMteUhkczBSSlZ1djcwWXJQbFVyQ0VlMkhmck9SUzNydWJxWmZ1aHRwZzVDOXdrNXRaNFZLY1JVcTg4cTlaOFJTMC00OGNFMWlISmtMMHVnYkh1Rkx1czlMNnNwWnk4blg5TVAyQ05kb21WYXBvc3F1M2ZHYXlUOFQ4LWpKUXdoZXBvX1V0cGdCUWFERVVvbTA0ZFpoQU4xYUpCRGxVS0pCeEUxY2VCMlNtajBNbG4tSUJXNUFGVTJkd1Vpa3R0XzJRYXEyZEJmYUtkRXVwODVVVjdZZC1kS2psbmthYmwyUHZyMERUa1RyZU1cblxuICAgIGludmFyaWFudChibG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiIHx8IGJsb2NrZXIuc3RhdGUgPT09IFwiYmxvY2tlZFwiICYmIG5ld0Jsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiwgXCJJbnZhbGlkIGJsb2NrZXIgc3RhdGUgdHJhbnNpdGlvbjogXCIgKyBibG9ja2VyLnN0YXRlICsgXCIgLT4gXCIgKyBuZXdCbG9ja2VyLnN0YXRlKTtcbiAgICBzdGF0ZS5ibG9ja2Vycy5zZXQoa2V5LCBuZXdCbG9ja2VyKTtcbiAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICBibG9ja2VyczogbmV3IE1hcChzdGF0ZS5ibG9ja2VycylcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJsb2NrTmF2aWdhdGlvbihfcmVmMikge1xuICAgIGxldCB7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSA9IF9yZWYyO1xuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuc2l6ZSA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gV2Ugb255IHN1cHBvcnQgYSBzaW5nbGUgYWN0aXZlIGJsb2NrZXIgYXQgdGhlIG1vbWVudCBzaW5jZSB3ZSBkb24ndCBoYXZlXG4gICAgLy8gYW55IGNvbXBlbGxpbmcgdXNlIGNhc2VzIGZvciBtdWx0aS1ibG9ja2VyIHlldFxuXG5cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5zaXplID4gMSkge1xuICAgICAgd2FybmluZyhmYWxzZSwgXCJBIHJvdXRlciBvbmx5IHN1cHBvcnRzIG9uZSBibG9ja2VyIGF0IGEgdGltZVwiKTtcbiAgICB9XG5cbiAgICBsZXQgZW50cmllcyA9IEFycmF5LmZyb20oYmxvY2tlckZ1bmN0aW9ucy5lbnRyaWVzKCkpO1xuICAgIGxldCBbYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uXSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICBsZXQgYmxvY2tlciA9IHN0YXRlLmJsb2NrZXJzLmdldChibG9ja2VyS2V5KTtcblxuICAgIGlmIChibG9ja2VyICYmIGJsb2NrZXIuc3RhdGUgPT09IFwicHJvY2VlZGluZ1wiKSB7XG4gICAgICAvLyBJZiB0aGUgYmxvY2tlciBpcyBjdXJyZW50bHkgcHJvY2VlZGluZywgd2UgZG9uJ3QgbmVlZCB0byByZS1jaGVja1xuICAgICAgLy8gaXQgYW5kIGNhbiBsZXQgdGhpcyBuYXZpZ2F0aW9uIGNvbnRpbnVlXG4gICAgICByZXR1cm47XG4gICAgfSAvLyBBdCB0aGlzIHBvaW50LCB3ZSBrbm93IHdlJ3JlIHVuYmxvY2tlZC9ibG9ja2VkIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGhlXG4gICAgLy8gdXNlci1wcm92aWRlZCBibG9ja2VyIGZ1bmN0aW9uXG5cblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb24oe1xuICAgICAgY3VycmVudExvY2F0aW9uLFxuICAgICAgbmV4dExvY2F0aW9uLFxuICAgICAgaGlzdG9yeUFjdGlvblxuICAgIH0pKSB7XG4gICAgICByZXR1cm4gYmxvY2tlcktleTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBY3RpdmVEZWZlcnJlZHMocHJlZGljYXRlKSB7XG4gICAgbGV0IGNhbmNlbGxlZFJvdXRlSWRzID0gW107XG4gICAgYWN0aXZlRGVmZXJyZWRzLmZvckVhY2goKGRmZCwgcm91dGVJZCkgPT4ge1xuICAgICAgaWYgKCFwcmVkaWNhdGUgfHwgcHJlZGljYXRlKHJvdXRlSWQpKSB7XG4gICAgICAgIC8vIENhbmNlbCB0aGUgZGVmZXJyZWQgLSBidXQgZG8gbm90IHJlbW92ZSBmcm9tIGFjdGl2ZURlZmVycmVkcyBoZXJlIC1cbiAgICAgICAgLy8gd2UgcmVseSBvbiB0aGUgc3Vic2NyaWJlcnMgdG8gZG8gdGhhdCBzbyBvdXIgdGVzdHMgY2FuIGFzc2VydCBwcm9wZXJcbiAgICAgICAgLy8gY2xlYW51cCB2aWEgX2ludGVybmFsQWN0aXZlRGVmZXJyZWRzXG4gICAgICAgIGRmZC5jYW5jZWwoKTtcbiAgICAgICAgY2FuY2VsbGVkUm91dGVJZHMucHVzaChyb3V0ZUlkKTtcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzLmRlbGV0ZShyb3V0ZUlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY2FuY2VsbGVkUm91dGVJZHM7XG4gIH0gLy8gT3B0IGluIHRvIGNhcHR1cmluZyBhbmQgcmVwb3J0aW5nIHNjcm9sbCBwb3NpdGlvbnMgZHVyaW5nIG5hdmlnYXRpb25zLFxuICAvLyB1c2VkIGJ5IHRoZSA8U2Nyb2xsUmVzdG9yYXRpb24+IGNvbXBvbmVudFxuXG5cbiAgZnVuY3Rpb24gZW5hYmxlU2Nyb2xsUmVzdG9yYXRpb24ocG9zaXRpb25zLCBnZXRQb3NpdGlvbiwgZ2V0S2V5KSB7XG4gICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG4gICAgZ2V0U2Nyb2xsUG9zaXRpb24gPSBnZXRQb3NpdGlvbjtcblxuICAgIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gZ2V0S2V5IHx8IChsb2NhdGlvbiA9PiBsb2NhdGlvbi5rZXkpOyAvLyBQZXJmb3JtIGluaXRpYWwgaHlkcmF0aW9uIHNjcm9sbCByZXN0b3JhdGlvbiwgc2luY2Ugd2UgbWlzcyB0aGUgYm9hdCBvblxuICAgIC8vIHRoZSBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgYmVjYXVzZSB3ZSd2ZSBub3QgeWV0IHJlbmRlcmVkIDxTY3JvbGxSZXN0b3JhdGlvbi8+XG4gICAgLy8gYW5kIHRoZXJlZm9yZSBoYXZlIG5vIHNhdmVkU2Nyb2xsUG9zaXRpb25zIGF2YWlsYWJsZVxuXG5cbiAgICBpZiAoIWluaXRpYWxTY3JvbGxSZXN0b3JlZCAmJiBzdGF0ZS5uYXZpZ2F0aW9uID09PSBJRExFX05BVklHQVRJT04pIHtcbiAgICAgIGluaXRpYWxTY3JvbGxSZXN0b3JlZCA9IHRydWU7XG4gICAgICBsZXQgeSA9IGdldFNhdmVkU2Nyb2xsUG9zaXRpb24oc3RhdGUubG9jYXRpb24sIHN0YXRlLm1hdGNoZXMpO1xuXG4gICAgICBpZiAoeSAhPSBudWxsKSB7XG4gICAgICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsUG9zaXRpb246IHlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zID0gbnVsbDtcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uID0gbnVsbDtcbiAgICAgIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ID0gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQgdXNlck1hdGNoZXMgPSBtYXRjaGVzLm1hcChtID0+IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSk7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkobG9jYXRpb24sIHVzZXJNYXRjaGVzKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBzYXZlZFNjcm9sbFBvc2l0aW9uc1trZXldID0gZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTYXZlZFNjcm9sbFBvc2l0aW9uKGxvY2F0aW9uLCBtYXRjaGVzKSB7XG4gICAgaWYgKHNhdmVkU2Nyb2xsUG9zaXRpb25zICYmIGdldFNjcm9sbFJlc3RvcmF0aW9uS2V5ICYmIGdldFNjcm9sbFBvc2l0aW9uKSB7XG4gICAgICBsZXQgdXNlck1hdGNoZXMgPSBtYXRjaGVzLm1hcChtID0+IGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtLCBzdGF0ZS5sb2FkZXJEYXRhKSk7XG4gICAgICBsZXQga2V5ID0gZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkobG9jYXRpb24sIHVzZXJNYXRjaGVzKSB8fCBsb2NhdGlvbi5rZXk7XG4gICAgICBsZXQgeSA9IHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV07XG5cbiAgICAgIGlmICh0eXBlb2YgeSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4geTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJvdXRlciA9IHtcbiAgICBnZXQgYmFzZW5hbWUoKSB7XG4gICAgICByZXR1cm4gaW5pdC5iYXNlbmFtZTtcbiAgICB9LFxuXG4gICAgZ2V0IHN0YXRlKCkge1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG5cbiAgICBnZXQgcm91dGVzKCkge1xuICAgICAgcmV0dXJuIGRhdGFSb3V0ZXM7XG4gICAgfSxcblxuICAgIGluaXRpYWxpemUsXG4gICAgc3Vic2NyaWJlLFxuICAgIGVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uLFxuICAgIG5hdmlnYXRlLFxuICAgIGZldGNoLFxuICAgIHJldmFsaWRhdGUsXG4gICAgLy8gUGFzc3Rocm91Z2ggdG8gaGlzdG9yeS1hd2FyZSBjcmVhdGVIcmVmIHVzZWQgYnkgdXNlSHJlZiBzbyB3ZSBnZXQgcHJvcGVyXG4gICAgLy8gaGFzaC1hd2FyZSBVUkxzIGluIERPTSBwYXRoc1xuICAgIGNyZWF0ZUhyZWY6IHRvID0+IGluaXQuaGlzdG9yeS5jcmVhdGVIcmVmKHRvKSxcbiAgICBlbmNvZGVMb2NhdGlvbjogdG8gPT4gaW5pdC5oaXN0b3J5LmVuY29kZUxvY2F0aW9uKHRvKSxcbiAgICBnZXRGZXRjaGVyLFxuICAgIGRlbGV0ZUZldGNoZXIsXG4gICAgZGlzcG9zZSxcbiAgICBnZXRCbG9ja2VyLFxuICAgIGRlbGV0ZUJsb2NrZXIsXG4gICAgX2ludGVybmFsRmV0Y2hDb250cm9sbGVyczogZmV0Y2hDb250cm9sbGVycyxcbiAgICBfaW50ZXJuYWxBY3RpdmVEZWZlcnJlZHM6IGFjdGl2ZURlZmVycmVkc1xuICB9O1xuICByZXR1cm4gcm91dGVyO1xufSAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gY3JlYXRlU3RhdGljSGFuZGxlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuY29uc3QgVU5TQUZFX0RFRkVSUkVEX1NZTUJPTCA9IFN5bWJvbChcImRlZmVycmVkXCIpO1xuZnVuY3Rpb24gY3JlYXRlU3RhdGljSGFuZGxlcihyb3V0ZXMsIG9wdHMpIHtcbiAgaW52YXJpYW50KHJvdXRlcy5sZW5ndGggPiAwLCBcIllvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgcm91dGVzIGFycmF5IHRvIGNyZWF0ZVN0YXRpY0hhbmRsZXJcIik7XG4gIGxldCBkYXRhUm91dGVzID0gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZXMpO1xuICBsZXQgYmFzZW5hbWUgPSAob3B0cyA/IG9wdHMuYmFzZW5hbWUgOiBudWxsKSB8fCBcIi9cIjtcbiAgLyoqXG4gICAqIFRoZSBxdWVyeSgpIG1ldGhvZCBpcyBpbnRlbmRlZCBmb3IgZG9jdW1lbnQgcmVxdWVzdHMsIGluIHdoaWNoIHdlIHdhbnQgdG9cbiAgICogY2FsbCBhbiBvcHRpb25hbCBhY3Rpb24gYW5kIHBvdGVudGlhbGx5IG11bHRpcGxlIGxvYWRlcnMgZm9yIGFsbCBuZXN0ZWRcbiAgICogcm91dGVzLiAgSXQgcmV0dXJucyBhIFN0YXRpY0hhbmRsZXJDb250ZXh0IG9iamVjdCwgd2hpY2ggaXMgdmVyeSBzaW1pbGFyXG4gICAqIHRvIHRoZSByb3V0ZXIgc3RhdGUgKGxvY2F0aW9uLCBsb2FkZXJEYXRhLCBhY3Rpb25EYXRhLCBlcnJvcnMsIGV0Yy4pIGFuZFxuICAgKiBhbHNvIGFkZHMgU1NSLXNwZWNpZmljIGluZm9ybWF0aW9uIHN1Y2ggYXMgdGhlIHN0YXR1c0NvZGUgYW5kIGhlYWRlcnNcbiAgICogZnJvbSBhY3Rpb24vbG9hZGVycyBSZXNwb25zZXMuXG4gICAqXG4gICAqIEl0IF9zaG91bGRfIG5ldmVyIHRocm93IGFuZCBzaG91bGQgcmVwb3J0IGFsbCBlcnJvcnMgdGhyb3VnaCB0aGVcbiAgICogcmV0dXJuZWQgY29udGV4dC5lcnJvcnMgb2JqZWN0LCBwcm9wZXJseSBhc3NvY2lhdGluZyBlcnJvcnMgdG8gdGhlaXIgZXJyb3JcbiAgICogYm91bmRhcnkuICBBZGRpdGlvbmFsbHksIGl0IHRyYWNrcyBfZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB3aGljaCBjYW4gYmVcbiAgICogdXNlZCB0byBlbXVsYXRlIFJlYWN0IGVycm9yIGJvdW5kYXJpZXMgZHVyaW5nIFNTciBieSBwZXJmb3JtaW5nIGEgc2Vjb25kXG4gICAqIHBhc3Mgb25seSBkb3duIHRvIHRoZSBib3VuZGFyeUlkLlxuICAgKlxuICAgKiBUaGUgb25lIGV4Y2VwdGlvbiB3aGVyZSB3ZSBkbyBub3QgcmV0dXJuIGEgU3RhdGljSGFuZGxlckNvbnRleHQgaXMgd2hlbiBhXG4gICAqIHJlZGlyZWN0IHJlc3BvbnNlIGlzIHJldHVybmVkIG9yIHRocm93biBmcm9tIGFueSBhY3Rpb24vbG9hZGVyLiAgV2VcbiAgICogcHJvcGFnYXRlIHRoYXQgb3V0IGFuZCByZXR1cm4gdGhlIHJhdyBSZXNwb25zZSBzbyB0aGUgSFRUUCBzZXJ2ZXIgY2FuXG4gICAqIHJldHVybiBpdCBkaXJlY3RseS5cbiAgICovXG5cbiAgYXN5bmMgZnVuY3Rpb24gcXVlcnkocmVxdWVzdCwgX3RlbXAyKSB7XG4gICAgbGV0IHtcbiAgICAgIHJlcXVlc3RDb250ZXh0XG4gICAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gICAgbGV0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgIGxldCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKFwiXCIsIGNyZWF0ZVBhdGgodXJsKSwgbnVsbCwgXCJkZWZhdWx0XCIpO1xuICAgIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgbG9jYXRpb24sIGJhc2VuYW1lKTsgLy8gU1NSIHN1cHBvcnRzIEhFQUQgcmVxdWVzdHMgd2hpbGUgU1BBIGRvZXNuJ3RcblxuICAgIGlmICghaXNWYWxpZE1ldGhvZChtZXRob2QpICYmIG1ldGhvZCAhPT0gXCJoZWFkXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZFxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBtZXRob2ROb3RBbGxvd2VkTWF0Y2hlcyxcbiAgICAgICAgcm91dGVcbiAgICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBtYXRjaGVzOiBtZXRob2ROb3RBbGxvd2VkTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1c0NvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICAgIGxldCB7XG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgcm91dGVcbiAgICAgIH0gPSBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKGRhdGFSb3V0ZXMpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZW5hbWUsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXNDb2RlOiBlcnJvci5zdGF0dXMsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXN1bHQgPSBhd2FpdCBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcblxuICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSAvLyBXaGVuIHJldHVybmluZyBTdGF0aWNIYW5kbGVyQ29udGV4dCwgd2UgcGF0Y2ggYmFjayBpbiB0aGUgbG9jYXRpb24gaGVyZVxuICAgIC8vIHNpbmNlIHdlIG5lZWQgaXQgZm9yIFJlYWN0IENvbnRleHQuICBCdXQgdGhpcyBoZWxwcyBrZWVwIG91ciBzdWJtaXQgYW5kXG4gICAgLy8gbG9hZFJvdXRlRGF0YSBvcGVyYXRpbmcgb24gYSBSZXF1ZXN0IGluc3RlYWQgb2YgYSBMb2NhdGlvblxuXG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9jYXRpb24sXG4gICAgICBiYXNlbmFtZVxuICAgIH0sIHJlc3VsdCk7XG4gIH1cbiAgLyoqXG4gICAqIFRoZSBxdWVyeVJvdXRlKCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciB0YXJnZXRlZCByb3V0ZSByZXF1ZXN0cywgZWl0aGVyXG4gICAqIGZvciBmZXRjaCA/X2RhdGEgcmVxdWVzdHMgb3IgcmVzb3VyY2Ugcm91dGUgcmVxdWVzdHMuICBJbiB0aGlzIGNhc2UsIHdlXG4gICAqIGFyZSBvbmx5IGV2ZXIgY2FsbGluZyBhIHNpbmdsZSBhY3Rpb24gb3IgbG9hZGVyLCBhbmQgd2UgYXJlIHJldHVybmluZyB0aGVcbiAgICogcmV0dXJuZWQgdmFsdWUgZGlyZWN0bHkuICBJbiBtb3N0IGNhc2VzLCB0aGlzIHdpbGwgYmUgYSBSZXNwb25zZSByZXR1cm5lZFxuICAgKiBmcm9tIHRoZSBhY3Rpb24vbG9hZGVyLCBidXQgaXQgbWF5IGJlIGEgcHJpbWl0aXZlIG9yIG90aGVyIHZhbHVlIGFzIHdlbGwgLVxuICAgKiBhbmQgaW4gc3VjaCBjYXNlcyB0aGUgY2FsbGluZyBjb250ZXh0IHNob3VsZCBoYW5kbGUgdGhhdCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogV2UgZG8gcmVzcGVjdCB0aGUgdGhyb3cvcmV0dXJuIGRpZmZlcmVudGlhdGlvbiwgc28gaWYgYW4gYWN0aW9uL2xvYWRlclxuICAgKiB0aHJvd3MsIHRoZW4gdGhpcyBtZXRob2Qgd2lsbCB0aHJvdyB0aGUgdmFsdWUuICBUaGlzIGlzIGltcG9ydGFudCBzbyB3ZVxuICAgKiBjYW4gZG8gcHJvcGVyIGJvdW5kYXJ5IGlkZW50aWZpY2F0aW9uIGluIFJlbWl4IHdoZXJlIGEgdGhyb3duIFJlc3BvbnNlXG4gICAqIG11c3QgZ28gdG8gdGhlIENhdGNoIEJvdW5kYXJ5IGJ1dCBhIHJldHVybmVkIFJlc3BvbnNlIGlzIGhhcHB5LXBhdGguXG4gICAqXG4gICAqIE9uZSB0aGluZyB0byBub3RlIGlzIHRoYXQgYW55IFJvdXRlci1pbml0aWF0ZWQgRXJyb3JzIHRoYXQgbWFrZSBzZW5zZVxuICAgKiB0byBhc3NvY2lhdGUgd2l0aCBhIHN0YXR1cyBjb2RlIHdpbGwgYmUgdGhyb3duIGFzIGFuIEVycm9yUmVzcG9uc2VcbiAgICogaW5zdGFuY2Ugd2hpY2ggaW5jbHVkZSB0aGUgcmF3IEVycm9yLCBzdWNoIHRoYXQgdGhlIGNhbGxpbmcgY29udGV4dCBjYW5cbiAgICogc2VyaWFsaXplIHRoZSBlcnJvciBhcyB0aGV5IHNlZSBmaXQgd2hpbGUgaW5jbHVkaW5nIHRoZSBwcm9wZXIgcmVzcG9uc2VcbiAgICogY29kZS4gIEV4YW1wbGVzIGhlcmUgYXJlIDQwNCBhbmQgNDA1IGVycm9ycyB0aGF0IG9jY3VyIHByaW9yIHRvIHJlYWNoaW5nXG4gICAqIGFueSB1c2VyLWRlZmluZWQgbG9hZGVycy5cbiAgICovXG5cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeVJvdXRlKHJlcXVlc3QsIF90ZW1wMykge1xuICAgIGxldCB7XG4gICAgICByb3V0ZUlkLFxuICAgICAgcmVxdWVzdENvbnRleHRcbiAgICB9ID0gX3RlbXAzID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMztcbiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgbGV0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oXCJcIiwgY3JlYXRlUGF0aCh1cmwpLCBudWxsLCBcImRlZmF1bHRcIik7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBsb2NhdGlvbiwgYmFzZW5hbWUpOyAvLyBTU1Igc3VwcG9ydHMgSEVBRCByZXF1ZXN0cyB3aGlsZSBTUEEgZG9lc24ndFxuXG4gICAgaWYgKCFpc1ZhbGlkTWV0aG9kKG1ldGhvZCkgJiYgbWV0aG9kICE9PSBcImhlYWRcIiAmJiBtZXRob2QgIT09IFwib3B0aW9uc1wiKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2RcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IG1hdGNoID0gcm91dGVJZCA/IG1hdGNoZXMuZmluZChtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpIDogZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pO1xuXG4gICAgaWYgKHJvdXRlSWQgJiYgIW1hdGNoKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMywge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgIHJvdXRlSWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIW1hdGNoKSB7XG4gICAgICAvLyBUaGlzIHNob3VsZCBuZXZlciBoaXQgSSBkb24ndCB0aGluaz9cbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIG1hdGNoKTtcblxuICAgIGlmIChpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGV0IGVycm9yID0gcmVzdWx0LmVycm9ycyA/IE9iamVjdC52YWx1ZXMocmVzdWx0LmVycm9ycylbMF0gOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gSWYgd2UgZ290IGJhY2sgcmVzdWx0LmVycm9ycywgdGhhdCBtZWFucyB0aGUgbG9hZGVyL2FjdGlvbiB0aHJld1xuICAgICAgLy8gX3NvbWV0aGluZ18gdGhhdCB3YXNuJ3QgYSBSZXNwb25zZSwgYnV0IGl0J3Mgbm90IGd1YXJhbnRlZWQvcmVxdWlyZWRcbiAgICAgIC8vIHRvIGJlIGFuIGBpbnN0YW5jZW9mIEVycm9yYCBlaXRoZXIsIHNvIHdlIGhhdmUgdG8gdXNlIHRocm93IGhlcmUgdG9cbiAgICAgIC8vIHByZXNlcnZlIHRoZSBcImVycm9yXCIgc3RhdGUgb3V0c2lkZSBvZiBxdWVyeUltcGwuXG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IC8vIFBpY2sgb2ZmIHRoZSByaWdodCBzdGF0ZSB2YWx1ZSB0byByZXR1cm5cblxuXG4gICAgaWYgKHJlc3VsdC5hY3Rpb25EYXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhyZXN1bHQuYWN0aW9uRGF0YSlbMF07XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5sb2FkZXJEYXRhKSB7XG4gICAgICB2YXIgX3Jlc3VsdCRhY3RpdmVEZWZlcnJlO1xuXG4gICAgICBsZXQgZGF0YSA9IE9iamVjdC52YWx1ZXMocmVzdWx0LmxvYWRlckRhdGEpWzBdO1xuXG4gICAgICBpZiAoKF9yZXN1bHQkYWN0aXZlRGVmZXJyZSA9IHJlc3VsdC5hY3RpdmVEZWZlcnJlZHMpICE9IG51bGwgJiYgX3Jlc3VsdCRhY3RpdmVEZWZlcnJlW21hdGNoLnJvdXRlLmlkXSkge1xuICAgICAgICBkYXRhW1VOU0FGRV9ERUZFUlJFRF9TWU1CT0xdID0gcmVzdWx0LmFjdGl2ZURlZmVycmVkc1ttYXRjaC5yb3V0ZS5pZF07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeUltcGwocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoKSB7XG4gICAgaW52YXJpYW50KHJlcXVlc3Quc2lnbmFsLCBcInF1ZXJ5KCkvcXVlcnlSb3V0ZSgpIHJlcXVlc3RzIG11c3QgY29udGFpbiBhbiBBYm9ydENvbnRyb2xsZXIgc2lnbmFsXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChpc011dGF0aW9uTWV0aG9kKHJlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBzdWJtaXQocmVxdWVzdCwgbWF0Y2hlcywgcm91dGVNYXRjaCB8fCBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbiksIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoICE9IG51bGwpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCk7XG4gICAgICByZXR1cm4gaXNSZXNwb25zZShyZXN1bHQpID8gcmVzdWx0IDogX2V4dGVuZHMoe30sIHJlc3VsdCwge1xuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgdGhlIHVzZXIgdGhyZXcvcmV0dXJuZWQgYSBSZXNwb25zZSBpbiBjYWxsTG9hZGVyT3JBY3Rpb24sIHdlIHRocm93XG4gICAgICAvLyBpdCB0byBiYWlsIG91dCBhbmQgdGhlbiByZXR1cm4gb3IgdGhyb3cgaGVyZSBiYXNlZCBvbiB3aGV0aGVyIHRoZSB1c2VyXG4gICAgICAvLyByZXR1cm5lZCBvciB0aHJld1xuICAgICAgaWYgKGlzUXVlcnlSb3V0ZVJlc3BvbnNlKGUpKSB7XG4gICAgICAgIGlmIChlLnR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IgJiYgIWlzUmVkaXJlY3RSZXNwb25zZShlLnJlc3BvbnNlKSkge1xuICAgICAgICAgIHRocm93IGUucmVzcG9uc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZS5yZXNwb25zZTtcbiAgICAgIH0gLy8gUmVkaXJlY3RzIGFyZSBhbHdheXMgcmV0dXJuZWQgc2luY2UgdGhleSBkb24ndCBwcm9wYWdhdGUgdG8gY2F0Y2hcbiAgICAgIC8vIGJvdW5kYXJpZXNcblxuXG4gICAgICBpZiAoaXNSZWRpcmVjdFJlc3BvbnNlKGUpKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuXG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdChyZXF1ZXN0LCBtYXRjaGVzLCBhY3Rpb25NYXRjaCwgcmVxdWVzdENvbnRleHQsIGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIGlmICghYWN0aW9uTWF0Y2gucm91dGUuYWN0aW9uKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNSwge1xuICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUsXG4gICAgICAgIHJvdXRlSWQ6IGFjdGlvbk1hdGNoLnJvdXRlLmlkXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBjYWxsTG9hZGVyT3JBY3Rpb24oXCJhY3Rpb25cIiwgcmVxdWVzdCwgYWN0aW9uTWF0Y2gsIG1hdGNoZXMsIGJhc2VuYW1lLCB0cnVlLCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICBsZXQgbWV0aG9kID0gaXNSb3V0ZVJlcXVlc3QgPyBcInF1ZXJ5Um91dGVcIiA6IFwicXVlcnlcIjtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1ldGhvZCArIFwiKCkgY2FsbCBhYm9ydGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFVoaGhoIC0gdGhpcyBzaG91bGQgbmV2ZXIgaGFwcGVuLCB3ZSBzaG91bGQgYWx3YXlzIHRocm93IHRoZXNlIGZyb21cbiAgICAgIC8vIGNhbGxMb2FkZXJPckFjdGlvbiwgYnV0IHRoZSB0eXBlIG5hcnJvd2luZyBoZXJlIGtlZXBzIFRTIGhhcHB5IGFuZCB3ZVxuICAgICAgLy8gY2FuIGdldCBiYWNrIG9uIHRoZSBcInRocm93IGFsbCByZWRpcmVjdCByZXNwb25zZXNcIiB0cmFpbiBoZXJlIHNob3VsZFxuICAgICAgLy8gdGhpcyBldmVyIGhhcHBlbiA6L1xuICAgICAgdGhyb3cgbmV3IFJlc3BvbnNlKG51bGwsIHtcbiAgICAgICAgc3RhdHVzOiByZXN1bHQuc3RhdHVzLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgTG9jYXRpb246IHJlc3VsdC5sb2NhdGlvblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXN1bHQgPSB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc1JvdXRlUmVxdWVzdCkge1xuICAgICAgLy8gTm90ZTogVGhpcyBzaG91bGQgb25seSBiZSBub24tUmVzcG9uc2UgdmFsdWVzIGlmIHdlIGdldCBoZXJlLCBzaW5jZVxuICAgICAgLy8gaXNSb3V0ZVJlcXVlc3Qgc2hvdWxkIHRocm93IGFueSBSZXNwb25zZSByZWNlaXZlZCBpbiBjYWxsTG9hZGVyT3JBY3Rpb25cbiAgICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgdGhyb3cgcmVzdWx0LmVycm9yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXRjaGVzOiBbYWN0aW9uTWF0Y2hdLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YToge1xuICAgICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgLy8gTm90ZTogc3RhdHVzQ29kZSArIGhlYWRlcnMgYXJlIHVudXNlZCBoZXJlIHNpbmNlIHF1ZXJ5Um91dGUgd2lsbFxuICAgICAgICAvLyByZXR1cm4gdGhlIHJhdyBSZXNwb25zZSBvciB2YWx1ZVxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIGxvYWRlckhlYWRlcnM6IHt9LFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFN0b3JlIG9mZiB0aGUgcGVuZGluZyBlcnJvciAtIHdlIHVzZSBpdCB0byBkZXRlcm1pbmUgd2hpY2ggbG9hZGVyc1xuICAgICAgLy8gdG8gY2FsbCBhbmQgd2lsbCBjb21taXQgaXQgd2hlbiB3ZSBjb21wbGV0ZSB0aGUgbmF2aWdhdGlvblxuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIGFjdGlvbk1hdGNoLnJvdXRlLmlkKTtcbiAgICAgIGxldCBjb250ZXh0ID0gYXdhaXQgbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgdW5kZWZpbmVkLCB7XG4gICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICB9KTsgLy8gYWN0aW9uIHN0YXR1cyBjb2RlcyB0YWtlIHByZWNlZGVuY2Ugb3ZlciBsb2FkZXIgc3RhdHVzIGNvZGVzXG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgICAgICBzdGF0dXNDb2RlOiBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQuZXJyb3IpID8gcmVzdWx0LmVycm9yLnN0YXR1cyA6IDUwMCxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgYWN0aW9uSGVhZGVyczogX2V4dGVuZHMoe30sIHJlc3VsdC5oZWFkZXJzID8ge1xuICAgICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5oZWFkZXJzXG4gICAgICAgIH0gOiB7fSlcbiAgICAgIH0pO1xuICAgIH0gLy8gQ3JlYXRlIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSBsb2FkZXJzXG5cblxuICAgIGxldCBsb2FkZXJSZXF1ZXN0ID0gbmV3IFJlcXVlc3QocmVxdWVzdC51cmwsIHtcbiAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycyxcbiAgICAgIHJlZGlyZWN0OiByZXF1ZXN0LnJlZGlyZWN0LFxuICAgICAgc2lnbmFsOiByZXF1ZXN0LnNpZ25hbFxuICAgIH0pO1xuICAgIGxldCBjb250ZXh0ID0gYXdhaXQgbG9hZFJvdXRlRGF0YShsb2FkZXJSZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCByZXN1bHQuc3RhdHVzQ29kZSA/IHtcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3VsdC5zdGF0dXNDb2RlXG4gICAgfSA6IHt9LCB7XG4gICAgICBhY3Rpb25EYXRhOiB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5kYXRhXG4gICAgICB9LFxuICAgICAgYWN0aW9uSGVhZGVyczogX2V4dGVuZHMoe30sIHJlc3VsdC5oZWFkZXJzID8ge1xuICAgICAgICBbYWN0aW9uTWF0Y2gucm91dGUuaWRdOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfSA6IHt9KVxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gbG9hZFJvdXRlRGF0YShyZXF1ZXN0LCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgcm91dGVNYXRjaCwgcGVuZGluZ0FjdGlvbkVycm9yKSB7XG4gICAgbGV0IGlzUm91dGVSZXF1ZXN0ID0gcm91dGVNYXRjaCAhPSBudWxsOyAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW4gKHF1ZXJ5Um91dGUoKSlcblxuICAgIGlmIChpc1JvdXRlUmVxdWVzdCAmJiAhKHJvdXRlTWF0Y2ggIT0gbnVsbCAmJiByb3V0ZU1hdGNoLnJvdXRlLmxvYWRlcikpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZDogcm91dGVNYXRjaCA9PSBudWxsID8gdm9pZCAwIDogcm91dGVNYXRjaC5yb3V0ZS5pZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IHJlcXVlc3RNYXRjaGVzID0gcm91dGVNYXRjaCA/IFtyb3V0ZU1hdGNoXSA6IGdldExvYWRlck1hdGNoZXNVbnRpbEJvdW5kYXJ5KG1hdGNoZXMsIE9iamVjdC5rZXlzKHBlbmRpbmdBY3Rpb25FcnJvciB8fCB7fSlbMF0pO1xuICAgIGxldCBtYXRjaGVzVG9Mb2FkID0gcmVxdWVzdE1hdGNoZXMuZmlsdGVyKG0gPT4gbS5yb3V0ZS5sb2FkZXIpOyAvLyBTaG9ydCBjaXJjdWl0IGlmIHdlIGhhdmUgbm8gbG9hZGVycyB0byBydW4gKHF1ZXJ5KCkpXG5cbiAgICBpZiAobWF0Y2hlc1RvTG9hZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoZXMsXG4gICAgICAgIC8vIEFkZCBhIG51bGwgZm9yIGFsbCBtYXRjaGVkIHJvdXRlcyBmb3IgcHJvcGVyIHJldmFsaWRhdGlvbiBvbiB0aGUgY2xpZW50XG4gICAgICAgIGxvYWRlckRhdGE6IG1hdGNoZXMucmVkdWNlKChhY2MsIG0pID0+IE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgICAgW20ucm91dGUuaWRdOiBudWxsXG4gICAgICAgIH0pLCB7fSksXG4gICAgICAgIGVycm9yczogcGVuZGluZ0FjdGlvbkVycm9yIHx8IG51bGwsXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFsuLi5tYXRjaGVzVG9Mb2FkLm1hcChtYXRjaCA9PiBjYWxsTG9hZGVyT3JBY3Rpb24oXCJsb2FkZXJcIiwgcmVxdWVzdCwgbWF0Y2gsIG1hdGNoZXMsIGJhc2VuYW1lLCB0cnVlLCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQpKV0pO1xuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1ldGhvZCArIFwiKCkgY2FsbCBhYm9ydGVkXCIpO1xuICAgIH0gLy8gUHJvY2VzcyBhbmQgY29tbWl0IG91dHB1dCBmcm9tIGxvYWRlcnNcblxuXG4gICAgbGV0IGFjdGl2ZURlZmVycmVkcyA9IG5ldyBNYXAoKTtcbiAgICBsZXQgY29udGV4dCA9IHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0FjdGlvbkVycm9yLCBhY3RpdmVEZWZlcnJlZHMpOyAvLyBBZGQgYSBudWxsIGZvciBhbnkgbm9uLWxvYWRlciBtYXRjaGVzIGZvciBwcm9wZXIgcmV2YWxpZGF0aW9uIG9uIHRoZSBjbGllbnRcblxuICAgIGxldCBleGVjdXRlZExvYWRlcnMgPSBuZXcgU2V0KG1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IG1hdGNoLnJvdXRlLmlkKSk7XG4gICAgbWF0Y2hlcy5mb3JFYWNoKG1hdGNoID0+IHtcbiAgICAgIGlmICghZXhlY3V0ZWRMb2FkZXJzLmhhcyhtYXRjaC5yb3V0ZS5pZCkpIHtcbiAgICAgICAgY29udGV4dC5sb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSA9IG51bGw7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgICBtYXRjaGVzLFxuICAgICAgYWN0aXZlRGVmZXJyZWRzOiBhY3RpdmVEZWZlcnJlZHMuc2l6ZSA+IDAgPyBPYmplY3QuZnJvbUVudHJpZXMoYWN0aXZlRGVmZXJyZWRzLmVudHJpZXMoKSkgOiBudWxsXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRhdGFSb3V0ZXMsXG4gICAgcXVlcnksXG4gICAgcXVlcnlSb3V0ZVxuICB9O1xufSAvLyNlbmRyZWdpb25cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyNyZWdpb24gSGVscGVyc1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBHaXZlbiBhbiBleGlzdGluZyBTdGF0aWNIYW5kbGVyQ29udGV4dCBhbmQgYW4gZXJyb3IgdGhyb3duIGF0IHJlbmRlciB0aW1lLFxuICogcHJvdmlkZSBhbiB1cGRhdGVkIFN0YXRpY0hhbmRsZXJDb250ZXh0IHN1aXRhYmxlIGZvciBhIHNlY29uZCBTU1IgcmVuZGVyXG4gKi9cblxuZnVuY3Rpb24gZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvcihyb3V0ZXMsIGNvbnRleHQsIGVycm9yKSB7XG4gIGxldCBuZXdDb250ZXh0ID0gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICBzdGF0dXNDb2RlOiA1MDAsXG4gICAgZXJyb3JzOiB7XG4gICAgICBbY29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCB8fCByb3V0ZXNbMF0uaWRdOiBlcnJvclxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0NvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzU3VibWlzc2lvbk5hdmlnYXRpb24ob3B0cykge1xuICByZXR1cm4gb3B0cyAhPSBudWxsICYmIFwiZm9ybURhdGFcIiBpbiBvcHRzO1xufSAvLyBOb3JtYWxpemUgbmF2aWdhdGlvbiBvcHRpb25zIGJ5IGNvbnZlcnRpbmcgZm9ybU1ldGhvZD1HRVQgZm9ybURhdGEgb2JqZWN0cyB0b1xuLy8gVVJMU2VhcmNoUGFyYW1zIHNvIHRoZXkgYmVoYXZlIGlkZW50aWNhbGx5IHRvIGxpbmtzIHdpdGggcXVlcnkgcGFyYW1zXG5cblxuZnVuY3Rpb24gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKHRvLCBvcHRzLCBpc0ZldGNoZXIpIHtcbiAgaWYgKGlzRmV0Y2hlciA9PT0gdm9pZCAwKSB7XG4gICAgaXNGZXRjaGVyID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7IC8vIFJldHVybiBsb2NhdGlvbiB2ZXJiYXRpbSBvbiBub24tc3VibWlzc2lvbiBuYXZpZ2F0aW9uc1xuXG4gIGlmICghb3B0cyB8fCAhaXNTdWJtaXNzaW9uTmF2aWdhdGlvbihvcHRzKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoXG4gICAgfTtcbiAgfVxuXG4gIGlmIChvcHRzLmZvcm1NZXRob2QgJiYgIWlzVmFsaWRNZXRob2Qob3B0cy5mb3JtTWV0aG9kKSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoLFxuICAgICAgZXJyb3I6IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogb3B0cy5mb3JtTWV0aG9kXG4gICAgICB9KVxuICAgIH07XG4gIH0gLy8gQ3JlYXRlIGEgU3VibWlzc2lvbiBvbiBub24tR0VUIG5hdmlnYXRpb25zXG5cblxuICBsZXQgc3VibWlzc2lvbjtcblxuICBpZiAob3B0cy5mb3JtRGF0YSkge1xuICAgIHN1Ym1pc3Npb24gPSB7XG4gICAgICBmb3JtTWV0aG9kOiBvcHRzLmZvcm1NZXRob2QgfHwgXCJnZXRcIixcbiAgICAgIGZvcm1BY3Rpb246IHN0cmlwSGFzaEZyb21QYXRoKHBhdGgpLFxuICAgICAgZm9ybUVuY1R5cGU6IG9wdHMgJiYgb3B0cy5mb3JtRW5jVHlwZSB8fCBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgZm9ybURhdGE6IG9wdHMuZm9ybURhdGFcbiAgICB9O1xuXG4gICAgaWYgKGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgc3VibWlzc2lvblxuICAgICAgfTtcbiAgICB9XG4gIH0gLy8gRmxhdHRlbiBzdWJtaXNzaW9uIG9udG8gVVJMU2VhcmNoUGFyYW1zIGZvciBHRVQgc3VibWlzc2lvbnNcblxuXG4gIGxldCBwYXJzZWRQYXRoID0gcGFyc2VQYXRoKHBhdGgpO1xuICBsZXQgc2VhcmNoUGFyYW1zID0gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMob3B0cy5mb3JtRGF0YSk7IC8vIFNpbmNlIGZldGNoZXIgR0VUIHN1Ym1pc3Npb25zIG9ubHkgcnVuIGEgc2luZ2xlIGxvYWRlciAoYXMgb3Bwb3NlZCB0b1xuICAvLyBuYXZpZ2F0aW9uIEdFVCBzdWJtaXNzaW9ucyB3aGljaCBydW4gYWxsIGxvYWRlcnMpLCB3ZSBuZWVkIHRvIHByZXNlcnZlXG4gIC8vIGFueSBpbmNvbWluZyA/aW5kZXggcGFyYW1zXG5cbiAgaWYgKGlzRmV0Y2hlciAmJiBwYXJzZWRQYXRoLnNlYXJjaCAmJiBoYXNOYWtlZEluZGV4UXVlcnkocGFyc2VkUGF0aC5zZWFyY2gpKSB7XG4gICAgc2VhcmNoUGFyYW1zLmFwcGVuZChcImluZGV4XCIsIFwiXCIpO1xuICB9XG5cbiAgcGFyc2VkUGF0aC5zZWFyY2ggPSBcIj9cIiArIHNlYXJjaFBhcmFtcztcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjcmVhdGVQYXRoKHBhcnNlZFBhdGgpLFxuICAgIHN1Ym1pc3Npb25cbiAgfTtcbn0gLy8gRmlsdGVyIG91dCBhbGwgcm91dGVzIGJlbG93IGFueSBjYXVnaHQgZXJyb3IgYXMgdGhleSBhcmVuJ3QgZ29pbmcgdG9cbi8vIHJlbmRlciBzbyB3ZSBkb24ndCBuZWVkIHRvIGxvYWQgdGhlbVxuXG5cbmZ1bmN0aW9uIGdldExvYWRlck1hdGNoZXNVbnRpbEJvdW5kYXJ5KG1hdGNoZXMsIGJvdW5kYXJ5SWQpIHtcbiAgbGV0IGJvdW5kYXJ5TWF0Y2hlcyA9IG1hdGNoZXM7XG5cbiAgaWYgKGJvdW5kYXJ5SWQpIHtcbiAgICBsZXQgaW5kZXggPSBtYXRjaGVzLmZpbmRJbmRleChtID0+IG0ucm91dGUuaWQgPT09IGJvdW5kYXJ5SWQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIGJvdW5kYXJ5TWF0Y2hlcyA9IG1hdGNoZXMuc2xpY2UoMCwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib3VuZGFyeU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1hdGNoZXNUb0xvYWQoaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIHN1Ym1pc3Npb24sIGxvY2F0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yLCBmZXRjaExvYWRNYXRjaGVzKSB7XG4gIGxldCBhY3Rpb25SZXN1bHQgPSBwZW5kaW5nRXJyb3IgPyBPYmplY3QudmFsdWVzKHBlbmRpbmdFcnJvcilbMF0gOiBwZW5kaW5nQWN0aW9uRGF0YSA/IE9iamVjdC52YWx1ZXMocGVuZGluZ0FjdGlvbkRhdGEpWzBdIDogdW5kZWZpbmVkO1xuICBsZXQgY3VycmVudFVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKHN0YXRlLmxvY2F0aW9uKTtcbiAgbGV0IG5leHRVcmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChsb2NhdGlvbik7XG4gIGxldCBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSA9IC8vIEZvcmNlZCByZXZhbGlkYXRpb24gZHVlIHRvIHN1Ym1pc3Npb24sIHVzZVJldmFsaWRhdGUsIG9yIFgtUmVtaXgtUmV2YWxpZGF0ZVxuICBpc1JldmFsaWRhdGlvblJlcXVpcmVkIHx8IC8vIENsaWNrZWQgdGhlIHNhbWUgbGluaywgcmVzdWJtaXR0ZWQgYSBHRVQgZm9ybVxuICBjdXJyZW50VXJsLnRvU3RyaW5nKCkgPT09IG5leHRVcmwudG9TdHJpbmcoKSB8fCAvLyBTZWFyY2ggcGFyYW1zIGFmZmVjdCBhbGwgbG9hZGVyc1xuICBjdXJyZW50VXJsLnNlYXJjaCAhPT0gbmV4dFVybC5zZWFyY2g7IC8vIFBpY2sgbmF2aWdhdGlvbiBtYXRjaGVzIHRoYXQgYXJlIG5ldC1uZXcgb3IgcXVhbGlmeSBmb3IgcmV2YWxpZGF0aW9uXG5cbiAgbGV0IGJvdW5kYXJ5SWQgPSBwZW5kaW5nRXJyb3IgPyBPYmplY3Qua2V5cyhwZW5kaW5nRXJyb3IpWzBdIDogdW5kZWZpbmVkO1xuICBsZXQgYm91bmRhcnlNYXRjaGVzID0gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgYm91bmRhcnlJZCk7XG4gIGxldCBuYXZpZ2F0aW9uTWF0Y2hlcyA9IGJvdW5kYXJ5TWF0Y2hlcy5maWx0ZXIoKG1hdGNoLCBpbmRleCkgPT4ge1xuICAgIGlmIChtYXRjaC5yb3V0ZS5sb2FkZXIgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gQWx3YXlzIGNhbGwgdGhlIGxvYWRlciBvbiBuZXcgcm91dGUgaW5zdGFuY2VzIGFuZCBwZW5kaW5nIGRlZmVyIGNhbmNlbGxhdGlvbnNcblxuXG4gICAgaWYgKGlzTmV3TG9hZGVyKHN0YXRlLmxvYWRlckRhdGEsIHN0YXRlLm1hdGNoZXNbaW5kZXhdLCBtYXRjaCkgfHwgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMuc29tZShpZCA9PiBpZCA9PT0gbWF0Y2gucm91dGUuaWQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFRoaXMgaXMgdGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gZm9yIHdoZW4gd2UgcmV2YWxpZGF0ZS4gIElmIHRoZSByb3V0ZVxuICAgIC8vIHByb3ZpZGVzIGl0J3Mgb3duIGltcGxlbWVudGF0aW9uLCB0aGVuIHdlIGdpdmUgdGhlbSBmdWxsIGNvbnRyb2wgYnV0XG4gICAgLy8gcHJvdmlkZSB0aGlzIHZhbHVlIHNvIHRoZXkgY2FuIGxldmVyYWdlIGl0IGlmIG5lZWRlZCBhZnRlciB0aGV5IGNoZWNrXG4gICAgLy8gdGhlaXIgb3duIHNwZWNpZmljIHVzZSBjYXNlc1xuXG5cbiAgICBsZXQgY3VycmVudFJvdXRlTWF0Y2ggPSBzdGF0ZS5tYXRjaGVzW2luZGV4XTtcbiAgICBsZXQgbmV4dFJvdXRlTWF0Y2ggPSBtYXRjaDtcbiAgICByZXR1cm4gc2hvdWxkUmV2YWxpZGF0ZUxvYWRlcihtYXRjaCwgX2V4dGVuZHMoe1xuICAgICAgY3VycmVudFVybCxcbiAgICAgIGN1cnJlbnRQYXJhbXM6IGN1cnJlbnRSb3V0ZU1hdGNoLnBhcmFtcyxcbiAgICAgIG5leHRVcmwsXG4gICAgICBuZXh0UGFyYW1zOiBuZXh0Um91dGVNYXRjaC5wYXJhbXNcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBhY3Rpb25SZXN1bHQsXG4gICAgICBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTogZGVmYXVsdFNob3VsZFJldmFsaWRhdGUgfHwgaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRSb3V0ZU1hdGNoLCBuZXh0Um91dGVNYXRjaClcbiAgICB9KSk7XG4gIH0pOyAvLyBQaWNrIGZldGNoZXIubG9hZHMgdGhhdCBuZWVkIHRvIGJlIHJldmFsaWRhdGVkXG5cbiAgbGV0IHJldmFsaWRhdGluZ0ZldGNoZXJzID0gW107XG4gIGZldGNoTG9hZE1hdGNoZXMgJiYgZmV0Y2hMb2FkTWF0Y2hlcy5mb3JFYWNoKChmLCBrZXkpID0+IHtcbiAgICBpZiAoIW1hdGNoZXMuc29tZShtID0+IG0ucm91dGUuaWQgPT09IGYucm91dGVJZCkpIHtcbiAgICAgIC8vIFRoaXMgZmV0Y2hlciBpcyBub3QgZ29pbmcgdG8gYmUgcHJlc2VudCBpbiB0aGUgc3Vic2VxdWVudCByZW5kZXIgc29cbiAgICAgIC8vIHRoZXJlJ3Mgbm8gbmVlZCB0byByZXZhbGlkYXRlIGl0XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChjYW5jZWxsZWRGZXRjaGVyTG9hZHMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgLy8gVGhpcyBmZXRjaGVyIHdhcyBjYW5jZWxsZWQgZnJvbSBhIHByaW9yIGFjdGlvbiBzdWJtaXNzaW9uIC0gZm9yY2UgcmVsb2FkXG4gICAgICByZXZhbGlkYXRpbmdGZXRjaGVycy5wdXNoKF9leHRlbmRzKHtcbiAgICAgICAga2V5XG4gICAgICB9LCBmKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJldmFsaWRhdGluZyBmZXRjaGVycyBhcmUgZGVjb3VwbGVkIGZyb20gdGhlIHJvdXRlIG1hdGNoZXMgc2luY2UgdGhleVxuICAgICAgLy8gaGl0IGEgc3RhdGljIGhyZWYsIHNvIHRoZXkgX2Fsd2F5c18gY2hlY2sgc2hvdWxkUmV2YWxpZGF0ZSBhbmQgdGhlXG4gICAgICAvLyBkZWZhdWx0IGlzIHN0cmljdGx5IGlmIGEgcmV2YWxpZGF0aW9uIGlzIGV4cGxpY2l0bHkgcmVxdWlyZWQgKGFjdGlvblxuICAgICAgLy8gc3VibWlzc2lvbnMsIHVzZVJldmFsaWRhdG9yLCBYLVJlbWl4LVJldmFsaWRhdGUpLlxuICAgICAgbGV0IHNob3VsZFJldmFsaWRhdGUgPSBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKGYubWF0Y2gsIF9leHRlbmRzKHtcbiAgICAgICAgY3VycmVudFVybCxcbiAgICAgICAgY3VycmVudFBhcmFtczogc3RhdGUubWF0Y2hlc1tzdGF0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtcyxcbiAgICAgICAgbmV4dFVybCxcbiAgICAgICAgbmV4dFBhcmFtczogbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdLnBhcmFtc1xuICAgICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgICBhY3Rpb25SZXN1bHQsXG4gICAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlXG4gICAgICB9KSk7XG5cbiAgICAgIGlmIChzaG91bGRSZXZhbGlkYXRlKSB7XG4gICAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICAgIGtleVxuICAgICAgICB9LCBmKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIFtuYXZpZ2F0aW9uTWF0Y2hlcywgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdO1xufVxuXG5mdW5jdGlvbiBpc05ld0xvYWRlcihjdXJyZW50TG9hZGVyRGF0YSwgY3VycmVudE1hdGNoLCBtYXRjaCkge1xuICBsZXQgaXNOZXcgPSAvLyBbYV0gLT4gW2EsIGJdXG4gICFjdXJyZW50TWF0Y2ggfHwgLy8gW2EsIGJdIC0+IFthLCBjXVxuICBtYXRjaC5yb3V0ZS5pZCAhPT0gY3VycmVudE1hdGNoLnJvdXRlLmlkOyAvLyBIYW5kbGUgdGhlIGNhc2UgdGhhdCB3ZSBkb24ndCBoYXZlIGRhdGEgZm9yIGEgcmUtdXNlZCByb3V0ZSwgcG90ZW50aWFsbHlcbiAgLy8gZnJvbSBhIHByaW9yIGVycm9yIG9yIGZyb20gYSBjYW5jZWxsZWQgcGVuZGluZyBkZWZlcnJlZFxuXG4gIGxldCBpc01pc3NpbmdEYXRhID0gY3VycmVudExvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID09PSB1bmRlZmluZWQ7IC8vIEFsd2F5cyBsb2FkIGlmIHRoaXMgaXMgYSBuZXQtbmV3IHJvdXRlIG9yIHdlIGRvbid0IHlldCBoYXZlIGRhdGFcblxuICByZXR1cm4gaXNOZXcgfHwgaXNNaXNzaW5nRGF0YTtcbn1cblxuZnVuY3Rpb24gaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRNYXRjaCwgbWF0Y2gpIHtcbiAgbGV0IGN1cnJlbnRQYXRoID0gY3VycmVudE1hdGNoLnJvdXRlLnBhdGg7XG4gIHJldHVybiAoLy8gcGFyYW0gY2hhbmdlIGZvciB0aGlzIG1hdGNoLCAvdXNlcnMvMTIzIC0+IC91c2Vycy80NTZcbiAgICBjdXJyZW50TWF0Y2gucGF0aG5hbWUgIT09IG1hdGNoLnBhdGhuYW1lIHx8IC8vIHNwbGF0IHBhcmFtIGNoYW5nZWQsIHdoaWNoIGlzIG5vdCBwcmVzZW50IGluIG1hdGNoLnBhdGhcbiAgICAvLyBlLmcuIC9maWxlcy9pbWFnZXMvYXZhdGFyLmpwZyAtPiBmaWxlcy9maW5hbmNlcy54bHNcbiAgICBjdXJyZW50UGF0aCAhPSBudWxsICYmIGN1cnJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSAmJiBjdXJyZW50TWF0Y2gucGFyYW1zW1wiKlwiXSAhPT0gbWF0Y2gucGFyYW1zW1wiKlwiXVxuICApO1xufVxuXG5mdW5jdGlvbiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKGxvYWRlck1hdGNoLCBhcmcpIHtcbiAgaWYgKGxvYWRlck1hdGNoLnJvdXRlLnNob3VsZFJldmFsaWRhdGUpIHtcbiAgICBsZXQgcm91dGVDaG9pY2UgPSBsb2FkZXJNYXRjaC5yb3V0ZS5zaG91bGRSZXZhbGlkYXRlKGFyZyk7XG5cbiAgICBpZiAodHlwZW9mIHJvdXRlQ2hvaWNlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcmV0dXJuIHJvdXRlQ2hvaWNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcmcuZGVmYXVsdFNob3VsZFJldmFsaWRhdGU7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGxMb2FkZXJPckFjdGlvbih0eXBlLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgYmFzZW5hbWUsIGlzU3RhdGljUmVxdWVzdCwgaXNSb3V0ZVJlcXVlc3QsIHJlcXVlc3RDb250ZXh0KSB7XG4gIGlmIChiYXNlbmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZW5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGlmIChpc1N0YXRpY1JlcXVlc3QgPT09IHZvaWQgMCkge1xuICAgIGlzU3RhdGljUmVxdWVzdCA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzUm91dGVSZXF1ZXN0ID09PSB2b2lkIDApIHtcbiAgICBpc1JvdXRlUmVxdWVzdCA9IGZhbHNlO1xuICB9XG5cbiAgbGV0IHJlc3VsdFR5cGU7XG4gIGxldCByZXN1bHQ7IC8vIFNldHVwIGEgcHJvbWlzZSB3ZSBjYW4gcmFjZSBhZ2FpbnN0IHNvIHRoYXQgYWJvcnQgc2lnbmFscyBzaG9ydCBjaXJjdWl0XG5cbiAgbGV0IHJlamVjdDtcbiAgbGV0IGFib3J0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChfLCByKSA9PiByZWplY3QgPSByKTtcblxuICBsZXQgb25SZWplY3QgPSAoKSA9PiByZWplY3QoKTtcblxuICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25SZWplY3QpO1xuXG4gIHRyeSB7XG4gICAgbGV0IGhhbmRsZXIgPSBtYXRjaC5yb3V0ZVt0eXBlXTtcbiAgICBpbnZhcmlhbnQoaGFuZGxlciwgXCJDb3VsZCBub3QgZmluZCB0aGUgXCIgKyB0eXBlICsgXCIgdG8gcnVuIG9uIHRoZSBcXFwiXCIgKyBtYXRjaC5yb3V0ZS5pZCArIFwiXFxcIiByb3V0ZVwiKTtcbiAgICByZXN1bHQgPSBhd2FpdCBQcm9taXNlLnJhY2UoW2hhbmRsZXIoe1xuICAgICAgcmVxdWVzdCxcbiAgICAgIHBhcmFtczogbWF0Y2gucGFyYW1zLFxuICAgICAgY29udGV4dDogcmVxdWVzdENvbnRleHRcbiAgICB9KSwgYWJvcnRQcm9taXNlXSk7XG4gICAgaW52YXJpYW50KHJlc3VsdCAhPT0gdW5kZWZpbmVkLCBcIllvdSBkZWZpbmVkIFwiICsgKHR5cGUgPT09IFwiYWN0aW9uXCIgPyBcImFuIGFjdGlvblwiIDogXCJhIGxvYWRlclwiKSArIFwiIGZvciByb3V0ZSBcIiArIChcIlxcXCJcIiArIG1hdGNoLnJvdXRlLmlkICsgXCJcXFwiIGJ1dCBkaWRuJ3QgcmV0dXJuIGFueXRoaW5nIGZyb20geW91ciBgXCIgKyB0eXBlICsgXCJgIFwiKSArIFwiZnVuY3Rpb24uIFBsZWFzZSByZXR1cm4gYSB2YWx1ZSBvciBgbnVsbGAuXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzdWx0VHlwZSA9IFJlc3VsdFR5cGUuZXJyb3I7XG4gICAgcmVzdWx0ID0gZTtcbiAgfSBmaW5hbGx5IHtcbiAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25SZWplY3QpO1xuICB9XG5cbiAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgIGxldCBzdGF0dXMgPSByZXN1bHQuc3RhdHVzOyAvLyBQcm9jZXNzIHJlZGlyZWN0c1xuXG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzQ29kZXMuaGFzKHN0YXR1cykpIHtcbiAgICAgIGxldCBsb2NhdGlvbiA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICAgICAgaW52YXJpYW50KGxvY2F0aW9uLCBcIlJlZGlyZWN0cyByZXR1cm5lZC90aHJvd24gZnJvbSBsb2FkZXJzL2FjdGlvbnMgbXVzdCBoYXZlIGEgTG9jYXRpb24gaGVhZGVyXCIpOyAvLyBTdXBwb3J0IHJlbGF0aXZlIHJvdXRpbmcgaW4gaW50ZXJuYWwgcmVkaXJlY3RzXG5cbiAgICAgIGlmICghQUJTT0xVVEVfVVJMX1JFR0VYLnRlc3QobG9jYXRpb24pKSB7XG4gICAgICAgIGxldCBhY3RpdmVNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgwLCBtYXRjaGVzLmluZGV4T2YobWF0Y2gpICsgMSk7XG4gICAgICAgIGxldCByb3V0ZVBhdGhuYW1lcyA9IGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKGFjdGl2ZU1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRMb2NhdGlvbiA9IHJlc29sdmVUbyhsb2NhdGlvbiwgcm91dGVQYXRobmFtZXMsIG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lKTtcbiAgICAgICAgaW52YXJpYW50KGNyZWF0ZVBhdGgocmVzb2x2ZWRMb2NhdGlvbiksIFwiVW5hYmxlIHRvIHJlc29sdmUgcmVkaXJlY3QgbG9jYXRpb246IFwiICsgbG9jYXRpb24pOyAvLyBQcmVwZW5kIHRoZSBiYXNlbmFtZSB0byB0aGUgcmVkaXJlY3QgbG9jYXRpb24gaWYgd2UgaGF2ZSBvbmVcblxuICAgICAgICBpZiAoYmFzZW5hbWUpIHtcbiAgICAgICAgICBsZXQgcGF0aCA9IHJlc29sdmVkTG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgICAgcmVzb2x2ZWRMb2NhdGlvbi5wYXRobmFtZSA9IHBhdGggPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhdGlvbiA9IGNyZWF0ZVBhdGgocmVzb2x2ZWRMb2NhdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKCFpc1N0YXRpY1JlcXVlc3QpIHtcbiAgICAgICAgLy8gU3RyaXAgb2ZmIHRoZSBwcm90b2NvbCtvcmlnaW4gZm9yIHNhbWUtb3JpZ2luIGFic29sdXRlIHJlZGlyZWN0cy5cbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHN0YXRpYyByZXF1ZXMsIHdlIGNhbiBsZXQgaXQgZ28gYmFjayB0byB0aGUgYnJvd3NlclxuICAgICAgICAvLyBhcy1pc1xuICAgICAgICBsZXQgY3VycmVudFVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xuICAgICAgICBsZXQgdXJsID0gbG9jYXRpb24uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgbG9jYXRpb24pIDogbmV3IFVSTChsb2NhdGlvbik7XG5cbiAgICAgICAgaWYgKHVybC5vcmlnaW4gPT09IGN1cnJlbnRVcmwub3JpZ2luKSB7XG4gICAgICAgICAgbG9jYXRpb24gPSB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoICsgdXJsLmhhc2g7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gRG9uJ3QgcHJvY2VzcyByZWRpcmVjdHMgaW4gdGhlIHJvdXRlciBkdXJpbmcgc3RhdGljIHJlcXVlc3RzIHJlcXVlc3RzLlxuICAgICAgLy8gSW5zdGVhZCwgdGhyb3cgdGhlIFJlc3BvbnNlIGFuZCBsZXQgdGhlIHNlcnZlciBoYW5kbGUgaXQgd2l0aCBhbiBIVFRQXG4gICAgICAvLyByZWRpcmVjdC4gIFdlIGFsc28gdXBkYXRlIHRoZSBMb2NhdGlvbiBoZWFkZXIgaW4gcGxhY2UgaW4gdGhpcyBmbG93IHNvXG4gICAgICAvLyBiYXNlbmFtZSBhbmQgcmVsYXRpdmUgcm91dGluZyBpcyB0YWtlbiBpbnRvIGFjY291bnRcblxuXG4gICAgICBpZiAoaXNTdGF0aWNSZXF1ZXN0KSB7XG4gICAgICAgIHJlc3VsdC5oZWFkZXJzLnNldChcIkxvY2F0aW9uXCIsIGxvY2F0aW9uKTtcbiAgICAgICAgdGhyb3cgcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLnJlZGlyZWN0LFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGxvY2F0aW9uLFxuICAgICAgICByZXZhbGlkYXRlOiByZXN1bHQuaGVhZGVycy5nZXQoXCJYLVJlbWl4LVJldmFsaWRhdGVcIikgIT09IG51bGxcbiAgICAgIH07XG4gICAgfSAvLyBGb3IgU1NSIHNpbmdsZS1yb3V0ZSByZXF1ZXN0cywgd2Ugd2FudCB0byBoYW5kIFJlc3BvbnNlcyBiYWNrIGRpcmVjdGx5XG4gICAgLy8gd2l0aG91dCB1bndyYXBwaW5nLiAgV2UgZG8gdGhpcyB3aXRoIHRoZSBRdWVyeVJvdXRlUmVzcG9uc2Ugd3JhcHBlclxuICAgIC8vIGludGVyZmFjZSBzbyB3ZSBjYW4ga25vdyB3aGV0aGVyIGl0IHdhcyByZXR1cm5lZCBvciB0aHJvd25cblxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICAgICAgdGhyb3cge1xuICAgICAgICB0eXBlOiByZXN1bHRUeXBlIHx8IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgICAgcmVzcG9uc2U6IHJlc3VsdFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgY29udGVudFR5cGUgPSByZXN1bHQuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIik7IC8vIENoZWNrIGJldHdlZW4gd29yZCBib3VuZGFyaWVzIGluc3RlYWQgb2Ygc3RhcnRzV2l0aCgpIGR1ZSB0byB0aGUgbGFzdFxuICAgIC8vIHBhcmFncmFwaCBvZiBodHRwczovL2h0dHB3Zy5vcmcvc3BlY3MvcmZjOTExMC5odG1sI2ZpZWxkLmNvbnRlbnQtdHlwZVxuXG4gICAgaWYgKGNvbnRlbnRUeXBlICYmIC9cXGJhcHBsaWNhdGlvblxcL2pzb25cXGIvLnRlc3QoY29udGVudFR5cGUpKSB7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0YSA9IGF3YWl0IHJlc3VsdC50ZXh0KCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdFR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IHJlc3VsdFR5cGUsXG4gICAgICAgIGVycm9yOiBuZXcgRXJyb3JSZXNwb25zZShzdGF0dXMsIHJlc3VsdC5zdGF0dXNUZXh0LCBkYXRhKSxcbiAgICAgICAgaGVhZGVyczogcmVzdWx0LmhlYWRlcnNcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICAgIGRhdGEsXG4gICAgICBzdGF0dXNDb2RlOiByZXN1bHQuc3RhdHVzLFxuICAgICAgaGVhZGVyczogcmVzdWx0LmhlYWRlcnNcbiAgICB9O1xuICB9XG5cbiAgaWYgKHJlc3VsdFR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogcmVzdWx0VHlwZSxcbiAgICAgIGVycm9yOiByZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIERlZmVycmVkRGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBSZXN1bHRUeXBlLmRlZmVycmVkLFxuICAgICAgZGVmZXJyZWREYXRhOiByZXN1bHRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgZGF0YTogcmVzdWx0XG4gIH07XG59IC8vIFV0aWxpdHkgbWV0aG9kIGZvciBjcmVhdGluZyB0aGUgUmVxdWVzdCBpbnN0YW5jZXMgZm9yIGxvYWRlcnMvYWN0aW9ucyBkdXJpbmdcbi8vIGNsaWVudC1zaWRlIG5hdmlnYXRpb25zIGFuZCBmZXRjaGVzLiAgRHVyaW5nIFNTUiB3ZSB3aWxsIGFsd2F5cyBoYXZlIGFcbi8vIFJlcXVlc3QgaW5zdGFuY2UgZnJvbSB0aGUgc3RhdGljIGhhbmRsZXIgKHF1ZXJ5L3F1ZXJ5Um91dGUpXG5cblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaGlzdG9yeSwgbG9jYXRpb24sIHNpZ25hbCwgc3VibWlzc2lvbikge1xuICBsZXQgdXJsID0gaGlzdG9yeS5jcmVhdGVVUkwoc3RyaXBIYXNoRnJvbVBhdGgobG9jYXRpb24pKS50b1N0cmluZygpO1xuICBsZXQgaW5pdCA9IHtcbiAgICBzaWduYWxcbiAgfTtcblxuICBpZiAoc3VibWlzc2lvbiAmJiBpc011dGF0aW9uTWV0aG9kKHN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICBsZXQge1xuICAgICAgZm9ybU1ldGhvZCxcbiAgICAgIGZvcm1FbmNUeXBlLFxuICAgICAgZm9ybURhdGFcbiAgICB9ID0gc3VibWlzc2lvbjtcbiAgICBpbml0Lm1ldGhvZCA9IGZvcm1NZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICBpbml0LmJvZHkgPSBmb3JtRW5jVHlwZSA9PT0gXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiA/IGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKGZvcm1EYXRhKSA6IGZvcm1EYXRhO1xuICB9IC8vIENvbnRlbnQtVHlwZSBpcyBpbmZlcnJlZCAoaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2RvbS1yZXF1ZXN0KVxuXG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHVybCwgaW5pdCk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGb3JtRGF0YVRvU2VhcmNoUGFyYW1zKGZvcm1EYXRhKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG5cbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIGZvcm1EYXRhLmVudHJpZXMoKSkge1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm0tY29udHJvbC1pbmZyYXN0cnVjdHVyZS5odG1sI2NvbnZlcnRpbmctYW4tZW50cnktbGlzdC10by1hLWxpc3Qtb2YtbmFtZS12YWx1ZS1wYWlyc1xuICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSBpbnN0YW5jZW9mIEZpbGUgPyB2YWx1ZS5uYW1lIDogdmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIHNlYXJjaFBhcmFtcztcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nRXJyb3IsIGFjdGl2ZURlZmVycmVkcykge1xuICAvLyBGaWxsIGluIGxvYWRlckRhdGEvZXJyb3JzIGZyb20gb3VyIGxvYWRlcnNcbiAgbGV0IGxvYWRlckRhdGEgPSB7fTtcbiAgbGV0IGVycm9ycyA9IG51bGw7XG4gIGxldCBzdGF0dXNDb2RlO1xuICBsZXQgZm91bmRFcnJvciA9IGZhbHNlO1xuICBsZXQgbG9hZGVySGVhZGVycyA9IHt9OyAvLyBQcm9jZXNzIGxvYWRlciByZXN1bHRzIGludG8gc3RhdGUubG9hZGVyRGF0YS9zdGF0ZS5lcnJvcnNcblxuICByZXN1bHRzLmZvckVhY2goKHJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICBsZXQgaWQgPSBtYXRjaGVzVG9Mb2FkW2luZGV4XS5yb3V0ZS5pZDtcbiAgICBpbnZhcmlhbnQoIWlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSwgXCJDYW5ub3QgaGFuZGxlIHJlZGlyZWN0IHJlc3VsdHMgaW4gcHJvY2Vzc0xvYWRlckRhdGFcIik7XG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBMb29rIHVwd2FyZHMgZnJvbSB0aGUgbWF0Y2hlZCByb3V0ZSBmb3IgdGhlIGNsb3Nlc3QgYW5jZXN0b3JcbiAgICAgIC8vIGVycm9yIGJvdW5kYXJ5LCBkZWZhdWx0aW5nIHRvIHRoZSByb290IG1hdGNoXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgaWQpO1xuICAgICAgbGV0IGVycm9yID0gcmVzdWx0LmVycm9yOyAvLyBJZiB3ZSBoYXZlIGEgcGVuZGluZyBhY3Rpb24gZXJyb3IsIHdlIHJlcG9ydCBpdCBhdCB0aGUgaGlnaGVzdC1yb3V0ZVxuICAgICAgLy8gdGhhdCB0aHJvd3MgYSBsb2FkZXIgZXJyb3IsIGFuZCB0aGVuIGNsZWFyIGl0IG91dCB0byBpbmRpY2F0ZSB0aGF0XG4gICAgICAvLyBpdCB3YXMgY29uc3VtZWRcblxuICAgICAgaWYgKHBlbmRpbmdFcnJvcikge1xuICAgICAgICBlcnJvciA9IE9iamVjdC52YWx1ZXMocGVuZGluZ0Vycm9yKVswXTtcbiAgICAgICAgcGVuZGluZ0Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBlcnJvcnMgPSBlcnJvcnMgfHwge307IC8vIFByZWZlciBoaWdoZXIgZXJyb3IgdmFsdWVzIGlmIGxvd2VyIGVycm9ycyBidWJibGUgdG8gdGhlIHNhbWUgYm91bmRhcnlcblxuICAgICAgaWYgKGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSA9PSBudWxsKSB7XG4gICAgICAgIGVycm9yc1tib3VuZGFyeU1hdGNoLnJvdXRlLmlkXSA9IGVycm9yO1xuICAgICAgfSAvLyBDbGVhciBvdXIgYW55IHByaW9yIGxvYWRlckRhdGEgZm9yIHRoZSB0aHJvd2luZyByb3V0ZVxuXG5cbiAgICAgIGxvYWRlckRhdGFbaWRdID0gdW5kZWZpbmVkOyAvLyBPbmNlIHdlIGZpbmQgb3VyIGZpcnN0IChoaWdoZXN0KSBlcnJvciwgd2Ugc2V0IHRoZSBzdGF0dXMgY29kZSBhbmRcbiAgICAgIC8vIHByZXZlbnQgZGVlcGVyIHN0YXR1cyBjb2RlcyBmcm9tIG92ZXJyaWRpbmdcblxuICAgICAgaWYgKCFmb3VuZEVycm9yKSB7XG4gICAgICAgIGZvdW5kRXJyb3IgPSB0cnVlO1xuICAgICAgICBzdGF0dXNDb2RlID0gaXNSb3V0ZUVycm9yUmVzcG9uc2UocmVzdWx0LmVycm9yKSA/IHJlc3VsdC5lcnJvci5zdGF0dXMgOiA1MDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXN1bHQuaGVhZGVycykge1xuICAgICAgICBsb2FkZXJIZWFkZXJzW2lkXSA9IHJlc3VsdC5oZWFkZXJzO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAgIGFjdGl2ZURlZmVycmVkcy5zZXQoaWQsIHJlc3VsdC5kZWZlcnJlZERhdGEpO1xuICAgICAgICBsb2FkZXJEYXRhW2lkXSA9IHJlc3VsdC5kZWZlcnJlZERhdGEuZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvYWRlckRhdGFbaWRdID0gcmVzdWx0LmRhdGE7XG4gICAgICB9IC8vIEVycm9yIHN0YXR1cyBjb2RlcyBhbHdheXMgb3ZlcnJpZGUgc3VjY2VzcyBzdGF0dXMgY29kZXMsIGJ1dCBpZiBhbGxcbiAgICAgIC8vIGxvYWRlcnMgYXJlIHN1Y2Nlc3NmdWwgd2UgdGFrZSB0aGUgZGVlcGVzdCBzdGF0dXMgY29kZS5cblxuXG4gICAgICBpZiAocmVzdWx0LnN0YXR1c0NvZGUgIT0gbnVsbCAmJiByZXN1bHQuc3RhdHVzQ29kZSAhPT0gMjAwICYmICFmb3VuZEVycm9yKSB7XG4gICAgICAgIHN0YXR1c0NvZGUgPSByZXN1bHQuc3RhdHVzQ29kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfVxuICB9KTsgLy8gSWYgd2UgZGlkbid0IGNvbnN1bWUgdGhlIHBlbmRpbmcgYWN0aW9uIGVycm9yIChpLmUuLCBhbGwgbG9hZGVyc1xuICAvLyByZXNvbHZlZCksIHRoZW4gY29uc3VtZSBpdCBoZXJlLiAgQWxzbyBjbGVhciBvdXQgYW55IGxvYWRlckRhdGEgZm9yIHRoZVxuICAvLyB0aHJvd2luZyByb3V0ZVxuXG4gIGlmIChwZW5kaW5nRXJyb3IpIHtcbiAgICBlcnJvcnMgPSBwZW5kaW5nRXJyb3I7XG4gICAgbG9hZGVyRGF0YVtPYmplY3Qua2V5cyhwZW5kaW5nRXJyb3IpWzBdXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZGVyRGF0YSxcbiAgICBlcnJvcnMsXG4gICAgc3RhdHVzQ29kZTogc3RhdHVzQ29kZSB8fCAyMDAsXG4gICAgbG9hZGVySGVhZGVyc1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcykge1xuICBsZXQge1xuICAgIGxvYWRlckRhdGEsXG4gICAgZXJyb3JzXG4gIH0gPSBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdFcnJvciwgYWN0aXZlRGVmZXJyZWRzKTsgLy8gUHJvY2VzcyByZXN1bHRzIGZyb20gb3VyIHJldmFsaWRhdGluZyBmZXRjaGVyc1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQge1xuICAgICAga2V5LFxuICAgICAgbWF0Y2hcbiAgICB9ID0gcmV2YWxpZGF0aW5nRmV0Y2hlcnNbaW5kZXhdO1xuICAgIGludmFyaWFudChmZXRjaGVyUmVzdWx0cyAhPT0gdW5kZWZpbmVkICYmIGZldGNoZXJSZXN1bHRzW2luZGV4XSAhPT0gdW5kZWZpbmVkLCBcIkRpZCBub3QgZmluZCBjb3JyZXNwb25kaW5nIGZldGNoZXIgcmVzdWx0XCIpO1xuICAgIGxldCByZXN1bHQgPSBmZXRjaGVyUmVzdWx0c1tpbmRleF07IC8vIFByb2Nlc3MgZmV0Y2hlciBub24tcmVkaXJlY3QgZXJyb3JzXG5cbiAgICBpZiAoaXNFcnJvclJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgbWF0Y2gucm91dGUuaWQpO1xuXG4gICAgICBpZiAoIShlcnJvcnMgJiYgZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdKSkge1xuICAgICAgICBlcnJvcnMgPSBfZXh0ZW5kcyh7fSwgZXJyb3JzLCB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpO1xuICAgIH0gZWxzZSBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgZ2V0IGhlcmUsIHJlZGlyZWN0cyBzaG91bGQgZ2V0IHByb2Nlc3NlZCBhYm92ZSwgYnV0IHdlXG4gICAgICAvLyBrZWVwIHRoaXMgdG8gdHlwZSBuYXJyb3cgdG8gYSBzdWNjZXNzIHJlc3VsdCBpbiB0aGUgZWxzZVxuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIHJldmFsaWRhdGlvbiByZWRpcmVjdFwiKTtcbiAgICB9IGVsc2UgaWYgKGlzRGVmZXJyZWRSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU2hvdWxkIG5ldmVyIGdldCBoZXJlLCBkZWZlcnJlZCBkYXRhIHNob3VsZCBiZSBhd2FpdGVkIGZvciBmZXRjaGVyc1xuICAgICAgLy8gaW4gcmVzb2x2ZURlZmVycmVkUmVzdWx0c1xuICAgICAgaW52YXJpYW50KGZhbHNlLCBcIlVuaGFuZGxlZCBmZXRjaGVyIGRlZmVycmVkIGRhdGFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgICB9O1xuICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgZG9uZUZldGNoZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZGVyRGF0YSxcbiAgICBlcnJvcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VMb2FkZXJEYXRhKGxvYWRlckRhdGEsIG5ld0xvYWRlckRhdGEsIG1hdGNoZXMsIGVycm9ycykge1xuICBsZXQgbWVyZ2VkTG9hZGVyRGF0YSA9IF9leHRlbmRzKHt9LCBuZXdMb2FkZXJEYXRhKTtcblxuICBmb3IgKGxldCBtYXRjaCBvZiBtYXRjaGVzKSB7XG4gICAgbGV0IGlkID0gbWF0Y2gucm91dGUuaWQ7XG5cbiAgICBpZiAobmV3TG9hZGVyRGF0YS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICAgIGlmIChuZXdMb2FkZXJEYXRhW2lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1lcmdlZExvYWRlckRhdGFbaWRdID0gbmV3TG9hZGVyRGF0YVtpZF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChsb2FkZXJEYXRhW2lkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtZXJnZWRMb2FkZXJEYXRhW2lkXSA9IGxvYWRlckRhdGFbaWRdO1xuICAgIH1cblxuICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgLy8gRG9uJ3Qga2VlcCBhbnkgbG9hZGVyIGRhdGEgYmVsb3cgdGhlIGJvdW5kYXJ5XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkTG9hZGVyRGF0YTtcbn0gLy8gRmluZCB0aGUgbmVhcmVzdCBlcnJvciBib3VuZGFyeSwgbG9va2luZyB1cHdhcmRzIGZyb20gdGhlIGxlYWYgcm91dGUgKG9yIHRoZVxuLy8gcm91dGUgc3BlY2lmaWVkIGJ5IHJvdXRlSWQpIGZvciB0aGUgY2xvc2VzdCBhbmNlc3RvciBlcnJvciBib3VuZGFyeSxcbi8vIGRlZmF1bHRpbmcgdG8gdGhlIHJvb3QgbWF0Y2hcblxuXG5mdW5jdGlvbiBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIHJvdXRlSWQpIHtcbiAgbGV0IGVsaWdpYmxlTWF0Y2hlcyA9IHJvdXRlSWQgPyBtYXRjaGVzLnNsaWNlKDAsIG1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkgKyAxKSA6IFsuLi5tYXRjaGVzXTtcbiAgcmV0dXJuIGVsaWdpYmxlTWF0Y2hlcy5yZXZlcnNlKCkuZmluZChtID0+IG0ucm91dGUuaGFzRXJyb3JCb3VuZGFyeSA9PT0gdHJ1ZSkgfHwgbWF0Y2hlc1swXTtcbn1cblxuZnVuY3Rpb24gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhyb3V0ZXMpIHtcbiAgLy8gUHJlZmVyIGEgcm9vdCBsYXlvdXQgcm91dGUgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIHNoaW0gaW4gYSByb3V0ZSBvYmplY3RcbiAgbGV0IHJvdXRlID0gcm91dGVzLmZpbmQociA9PiByLmluZGV4IHx8ICFyLnBhdGggfHwgci5wYXRoID09PSBcIi9cIikgfHwge1xuICAgIGlkOiBcIl9fc2hpbS1lcnJvci1yb3V0ZV9fXCJcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBtYXRjaGVzOiBbe1xuICAgICAgcGFyYW1zOiB7fSxcbiAgICAgIHBhdGhuYW1lOiBcIlwiLFxuICAgICAgcGF0aG5hbWVCYXNlOiBcIlwiLFxuICAgICAgcm91dGVcbiAgICB9XSxcbiAgICByb3V0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRJbnRlcm5hbFJvdXRlckVycm9yKHN0YXR1cywgX3RlbXA0KSB7XG4gIGxldCB7XG4gICAgcGF0aG5hbWUsXG4gICAgcm91dGVJZCxcbiAgICBtZXRob2QsXG4gICAgdHlwZVxuICB9ID0gX3RlbXA0ID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wNDtcbiAgbGV0IHN0YXR1c1RleHQgPSBcIlVua25vd24gU2VydmVyIEVycm9yXCI7XG4gIGxldCBlcnJvck1lc3NhZ2UgPSBcIlVua25vd24gQHJlbWl4LXJ1bi9yb3V0ZXIgZXJyb3JcIjtcblxuICBpZiAoc3RhdHVzID09PSA0MDApIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJCYWQgUmVxdWVzdFwiO1xuXG4gICAgaWYgKG1ldGhvZCAmJiBwYXRobmFtZSAmJiByb3V0ZUlkKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIllvdSBtYWRlIGEgXCIgKyBtZXRob2QgKyBcIiByZXF1ZXN0IHRvIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiIGJ1dCBcIiArIChcImRpZCBub3QgcHJvdmlkZSBhIGBsb2FkZXJgIGZvciByb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiLCBcIikgKyBcInNvIHRoZXJlIGlzIG5vIHdheSB0byBoYW5kbGUgdGhlIHJlcXVlc3QuXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcImRlZmVyLWFjdGlvblwiKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcImRlZmVyKCkgaXMgbm90IHN1cHBvcnRlZCBpbiBhY3Rpb25zXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDAzKSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiRm9yYmlkZGVuXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJSb3V0ZSBcXFwiXCIgKyByb3V0ZUlkICsgXCJcXFwiIGRvZXMgbm90IG1hdGNoIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA0KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTm90IEZvdW5kXCI7XG4gICAgZXJyb3JNZXNzYWdlID0gXCJObyByb3V0ZSBtYXRjaGVzIFVSTCBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIlwiO1xuICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gNDA1KSB7XG4gICAgc3RhdHVzVGV4dCA9IFwiTWV0aG9kIE5vdCBBbGxvd2VkXCI7XG5cbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG1hZGUgYSBcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCIgcmVxdWVzdCB0byBcXFwiXCIgKyBwYXRobmFtZSArIFwiXFxcIiBidXQgXCIgKyAoXCJkaWQgbm90IHByb3ZpZGUgYW4gYGFjdGlvbmAgZm9yIHJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIsIFwiKSArIFwic28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5cIjtcbiAgICB9IGVsc2UgaWYgKG1ldGhvZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJJbnZhbGlkIHJlcXVlc3QgbWV0aG9kIFxcXCJcIiArIG1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCJcXFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cyB8fCA1MDAsIHN0YXR1c1RleHQsIG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpLCB0cnVlKTtcbn0gLy8gRmluZCBhbnkgcmV0dXJuZWQgcmVkaXJlY3QgZXJyb3JzLCBzdGFydGluZyBmcm9tIHRoZSBsb3dlc3QgbWF0Y2hcblxuXG5mdW5jdGlvbiBmaW5kUmVkaXJlY3QocmVzdWx0cykge1xuICBmb3IgKGxldCBpID0gcmVzdWx0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2ldO1xuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBIYXNoRnJvbVBhdGgocGF0aCkge1xuICBsZXQgcGFyc2VkUGF0aCA9IHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHBhdGgpIDogcGF0aDtcbiAgcmV0dXJuIGNyZWF0ZVBhdGgoX2V4dGVuZHMoe30sIHBhcnNlZFBhdGgsIHtcbiAgICBoYXNoOiBcIlwiXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gaXNIYXNoQ2hhbmdlT25seShhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJiBhLmhhc2ggIT09IGIuaGFzaDtcbn1cblxuZnVuY3Rpb24gaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIHJlc3VsdC50eXBlID09PSBSZXN1bHRUeXBlLmRlZmVycmVkO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yUmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZXJyb3I7XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiAocmVzdWx0ICYmIHJlc3VsdC50eXBlKSA9PT0gUmVzdWx0VHlwZS5yZWRpcmVjdDtcbn1cblxuZnVuY3Rpb24gaXNSZXNwb25zZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUuc3RhdHVzID09PSBcIm51bWJlclwiICYmIHR5cGVvZiB2YWx1ZS5zdGF0dXNUZXh0ID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZS5oZWFkZXJzID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS5ib2R5ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuXG5mdW5jdGlvbiBpc1JlZGlyZWN0UmVzcG9uc2UocmVzdWx0KSB7XG4gIGlmICghaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7XG4gIGxldCBsb2NhdGlvbiA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkxvY2F0aW9uXCIpO1xuICByZXR1cm4gc3RhdHVzID49IDMwMCAmJiBzdGF0dXMgPD0gMzk5ICYmIGxvY2F0aW9uICE9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzUXVlcnlSb3V0ZVJlc3BvbnNlKG9iaikge1xuICByZXR1cm4gb2JqICYmIGlzUmVzcG9uc2Uob2JqLnJlc3BvbnNlKSAmJiAob2JqLnR5cGUgPT09IFJlc3VsdFR5cGUuZGF0YSB8fCBSZXN1bHRUeXBlLmVycm9yKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZE1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkUmVxdWVzdE1ldGhvZHMuaGFzKG1ldGhvZCk7XG59XG5cbmZ1bmN0aW9uIGlzTXV0YXRpb25NZXRob2QobWV0aG9kKSB7XG4gIHJldHVybiB2YWxpZE11dGF0aW9uTWV0aG9kcy5oYXMobWV0aG9kKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZURlZmVycmVkUmVzdWx0cyhjdXJyZW50TWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgc2lnbmFsLCBpc0ZldGNoZXIsIGN1cnJlbnRMb2FkZXJEYXRhKSB7XG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZXN1bHRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCByZXN1bHQgPSByZXN1bHRzW2luZGV4XTtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaGVzVG9Mb2FkW2luZGV4XTtcbiAgICBsZXQgY3VycmVudE1hdGNoID0gY3VycmVudE1hdGNoZXMuZmluZChtID0+IG0ucm91dGUuaWQgPT09IG1hdGNoLnJvdXRlLmlkKTtcbiAgICBsZXQgaXNSZXZhbGlkYXRpbmdMb2FkZXIgPSBjdXJyZW50TWF0Y2ggIT0gbnVsbCAmJiAhaXNOZXdSb3V0ZUluc3RhbmNlKGN1cnJlbnRNYXRjaCwgbWF0Y2gpICYmIChjdXJyZW50TG9hZGVyRGF0YSAmJiBjdXJyZW50TG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0pICE9PSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpICYmIChpc0ZldGNoZXIgfHwgaXNSZXZhbGlkYXRpbmdMb2FkZXIpKSB7XG4gICAgICAvLyBOb3RlOiB3ZSBkbyBub3QgaGF2ZSB0byB0b3VjaCBhY3RpdmVEZWZlcnJlZHMgaGVyZSBzaW5jZSB3ZSByYWNlIHRoZW1cbiAgICAgIC8vIGFnYWluc3QgdGhlIHNpZ25hbCBpbiByZXNvbHZlRGVmZXJyZWREYXRhIGFuZCB0aGV5J2xsIGdldCBhYm9ydGVkXG4gICAgICAvLyB0aGVyZSBpZiBuZWVkZWRcbiAgICAgIGF3YWl0IHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBzaWduYWwsIGlzRmV0Y2hlcikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSByZXN1bHQgfHwgcmVzdWx0c1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlRGVmZXJyZWREYXRhKHJlc3VsdCwgc2lnbmFsLCB1bndyYXApIHtcbiAgaWYgKHVud3JhcCA9PT0gdm9pZCAwKSB7XG4gICAgdW53cmFwID0gZmFsc2U7XG4gIH1cblxuICBsZXQgYWJvcnRlZCA9IGF3YWl0IHJlc3VsdC5kZWZlcnJlZERhdGEucmVzb2x2ZURhdGEoc2lnbmFsKTtcblxuICBpZiAoYWJvcnRlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh1bndyYXApIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICBkYXRhOiByZXN1bHQuZGVmZXJyZWREYXRhLnVud3JhcHBlZERhdGFcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSGFuZGxlIGFueSBUcmFja2VkUHJvbWlzZS5fZXJyb3IgdmFsdWVzIGVuY291bnRlcmVkIHdoaWxlIHVud3JhcHBpbmdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZXJyb3IsXG4gICAgICAgIGVycm9yOiBlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgIGRhdGE6IHJlc3VsdC5kZWZlcnJlZERhdGEuZGF0YVxuICB9O1xufVxuXG5mdW5jdGlvbiBoYXNOYWtlZEluZGV4UXVlcnkoc2VhcmNoKSB7XG4gIHJldHVybiBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCkuZ2V0QWxsKFwiaW5kZXhcIikuc29tZSh2ID0+IHYgPT09IFwiXCIpO1xufSAvLyBOb3RlOiBUaGlzIHNob3VsZCBtYXRjaCB0aGUgZm9ybWF0IGV4cG9ydGVkIGJ5IHVzZU1hdGNoZXMsIHNvIGlmIHlvdSBjaGFuZ2Vcbi8vIHRoaXMgcGxlYXNlIGFsc28gY2hhbmdlIHRoYXQgOikgIEV2ZW50dWFsbHkgd2UnbGwgRFJZIHRoaXMgdXBcblxuXG5mdW5jdGlvbiBjcmVhdGVVc2VNYXRjaGVzTWF0Y2gobWF0Y2gsIGxvYWRlckRhdGEpIHtcbiAgbGV0IHtcbiAgICByb3V0ZSxcbiAgICBwYXRobmFtZSxcbiAgICBwYXJhbXNcbiAgfSA9IG1hdGNoO1xuICByZXR1cm4ge1xuICAgIGlkOiByb3V0ZS5pZCxcbiAgICBwYXRobmFtZSxcbiAgICBwYXJhbXMsXG4gICAgZGF0YTogbG9hZGVyRGF0YVtyb3V0ZS5pZF0sXG4gICAgaGFuZGxlOiByb3V0ZS5oYW5kbGVcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgbG9jYXRpb24pIHtcbiAgbGV0IHNlYXJjaCA9IHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbikuc2VhcmNoIDogbG9jYXRpb24uc2VhcmNoO1xuXG4gIGlmIChtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuaW5kZXggJiYgaGFzTmFrZWRJbmRleFF1ZXJ5KHNlYXJjaCB8fCBcIlwiKSkge1xuICAgIC8vIFJldHVybiB0aGUgbGVhZiBpbmRleCByb3V0ZSB3aGVuIGluZGV4IGlzIHByZXNlbnRcbiAgICByZXR1cm4gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICB9IC8vIE90aGVyd2lzZSBncmFiIHRoZSBkZWVwZXN0IFwicGF0aCBjb250cmlidXRpbmdcIiBtYXRjaCAoaWdub3JpbmcgaW5kZXggYW5kXG4gIC8vIHBhdGhsZXNzIGxheW91dCByb3V0ZXMpXG5cblxuICBsZXQgcGF0aE1hdGNoZXMgPSBnZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKTtcbiAgcmV0dXJuIHBhdGhNYXRjaGVzW3BhdGhNYXRjaGVzLmxlbmd0aCAtIDFdO1xufSAvLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQWJvcnRlZERlZmVycmVkRXJyb3IsIEFjdGlvbiwgRXJyb3JSZXNwb25zZSwgSURMRV9CTE9DS0VSLCBJRExFX0ZFVENIRVIsIElETEVfTkFWSUdBVElPTiwgVU5TQUZFX0RFRkVSUkVEX1NZTUJPTCwgRGVmZXJyZWREYXRhIGFzIFVOU0FGRV9EZWZlcnJlZERhdGEsIGNvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMgYXMgVU5TQUZFX2NvbnZlcnRSb3V0ZXNUb0RhdGFSb3V0ZXMsIGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzIGFzIFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcywgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVQYXRoLCBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVN0YXRpY0hhbmRsZXIsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGdldFN0YXRpY0NvbnRleHRGcm9tRXJyb3IsIGdldFRvUGF0aG5hbWUsIGludmFyaWFudCwgaXNSb3V0ZUVycm9yUmVzcG9uc2UsIGpvaW5QYXRocywganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgbm9ybWFsaXplUGF0aG5hbWUsIHBhcnNlUGF0aCwgcmVkaXJlY3QsIHJlc29sdmVQYXRoLCByZXNvbHZlVG8sIHN0cmlwQmFzZW5hbWUsIHdhcm5pbmcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgICBIYXNoUm91dGVyLFxuICAgIFJvdXRlLFxuICAgIFJvdXRlcyxcbiAgICBMaW5rLFxuICAgIE5hdkxpbmssXG4gICAgT3V0bGV0XG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFwiLi4vc2Nzcy9tYWluLnNjc3NcIlxuaW1wb3J0IEhlcm8gZnJvbSBcIi4vSGVyb1wiO1xuaW1wb3J0IFNlY29uZFBhZ2UgZnJvbSBcIi4vU2Vjb25kUGFnZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuLypleHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7Ki9cblxuY29uc3QgQXBwID0gKCkgPT4ge1xuLyogICAgY29uc3QgW2NhbmRpZGF0ZXMsIHNldENhbmRpZGF0ZXNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiQW5uYVwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiS293YWxpa1wiLFxuICAgICAgICAgICAgZW1haWw6IFwiYW5uYS5rb3dhbGlrQHdwLnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJLYXRhcnp5bmFcIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIlBpb3Ryb3dza2FcIixcbiAgICAgICAgICAgIGVtYWlsOiBcImsucGlvdHJvd3NrYUBvbmV0LnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogXCJNYXJjaW5cIixcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIk11bGlja2lcIixcbiAgICAgICAgICAgIGVtYWlsOiBcIm1tMjU4OUB3cC5wbFwiLFxuICAgICAgICAgICAgbW90aXZhdGlvbjogXCJDb3JwdXMgY2FsbG9zdW0gZGVzY2VuZGVkIGZyb20gYXN0cm9ub21lcnMgY29zbWljIG9jZWFuIGEgdmVyeSBzbWFsbCBzdGFnZSBpbiBhIHZhc3QgY29zbWljIGFyZW5hIGVuY3ljbG9wYWVkaWEgZ2FsYWN0aWNhIHRoZSBvbmx5IGhvbWUgd2UndmUgZXZlciBrbm93bi5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IFwiQWRhbVwiLFxuICAgICAgICAgICAgbGFzdE5hbWU6IFwiV29sZWNraVwiLFxuICAgICAgICAgICAgZW1haWw6IFwiYS53b2xlY2tpa0BvbmV0LnBsXCIsXG4gICAgICAgICAgICBtb3RpdmF0aW9uOiBcIkNvcnB1cyBjYWxsb3N1bSBkZXNjZW5kZWQgZnJvbSBhc3Ryb25vbWVycyBjb3NtaWMgb2NlYW4gYSB2ZXJ5IHNtYWxsIHN0YWdlIGluIGEgdmFzdCBjb3NtaWMgYXJlbmEgZW5jeWNsb3BhZWRpYSBnYWxhY3RpY2EgdGhlIG9ubHkgaG9tZSB3ZSd2ZSBldmVyIGtub3duLlwiXG4gICAgICAgIH0sXG4gICAgXSk7Ki9cblxuICAgIHJldHVybihcbi8qICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhbmRpZGF0ZXMsIHNldENhbmRpZGF0ZXN9fT4qL1xuICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZXJvIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Vjb25kUGFnZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1JvdXRlcz5cbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cbi8qICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+Ki8pXG59XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpO1xuY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbnJvb3QucmVuZGVyKDxBcHAgLz4pOyIsIi8qKlxuICogUmVhY3QgUm91dGVyIERPTSB2Ni44LjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVU5TQUZFX2VuaGFuY2VNYW51YWxSb3V0ZU9iamVjdHMsIFJvdXRlciwgdXNlSHJlZiwgdXNlUmVzb2x2ZWRQYXRoLCB1c2VMb2NhdGlvbiwgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgdXNlTmF2aWdhdGUsIGNyZWF0ZVBhdGgsIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRpb24sIHVuc3RhYmxlX3VzZUJsb2NrZXIsIFVOU0FGRV9EYXRhUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5leHBvcnQgeyBBYm9ydGVkRGVmZXJyZWRFcnJvciwgQXdhaXQsIE1lbW9yeVJvdXRlciwgTmF2aWdhdGUsIE5hdmlnYXRpb25UeXBlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlclByb3ZpZGVyLCBSb3V0ZXMsIFVOU0FGRV9EYXRhUm91dGVyQ29udGV4dCwgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsIFVOU0FGRV9Mb2NhdGlvbkNvbnRleHQsIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgVU5TQUZFX1JvdXRlQ29udGV4dCwgVU5TQUZFX2VuaGFuY2VNYW51YWxSb3V0ZU9iamVjdHMsIGNyZWF0ZU1lbW9yeVJvdXRlciwgY3JlYXRlUGF0aCwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLCBjcmVhdGVSb3V0ZXNGcm9tRWxlbWVudHMsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZW5kZXJNYXRjaGVzLCByZXNvbHZlUGF0aCwgdW5zdGFibGVfdXNlQmxvY2tlciwgdXNlQWN0aW9uRGF0YSwgdXNlQXN5bmNFcnJvciwgdXNlQXN5bmNWYWx1ZSwgdXNlSHJlZiwgdXNlSW5Sb3V0ZXJDb250ZXh0LCB1c2VMb2FkZXJEYXRhLCB1c2VMb2NhdGlvbiwgdXNlTWF0Y2gsIHVzZU1hdGNoZXMsIHVzZU5hdmlnYXRlLCB1c2VOYXZpZ2F0aW9uLCB1c2VOYXZpZ2F0aW9uVHlwZSwgdXNlT3V0bGV0LCB1c2VPdXRsZXRDb250ZXh0LCB1c2VQYXJhbXMsIHVzZVJlc29sdmVkUGF0aCwgdXNlUmV2YWxpZGF0b3IsIHVzZVJvdXRlRXJyb3IsIHVzZVJvdXRlTG9hZGVyRGF0YSwgdXNlUm91dGVzIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZVJvdXRlciwgY3JlYXRlQnJvd3Nlckhpc3RvcnksIGNyZWF0ZUhhc2hIaXN0b3J5LCBFcnJvclJlc3BvbnNlLCBpbnZhcmlhbnQsIGpvaW5QYXRocyB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuY29uc3QgZGVmYXVsdE1ldGhvZCA9IFwiZ2V0XCI7XG5jb25zdCBkZWZhdWx0RW5jVHlwZSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5mdW5jdGlvbiBpc0h0bWxFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYgdHlwZW9mIG9iamVjdC50YWdOYW1lID09PSBcInN0cmluZ1wiO1xufVxuZnVuY3Rpb24gaXNCdXR0b25FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiYnV0dG9uXCI7XG59XG5mdW5jdGlvbiBpc0Zvcm1FbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gaXNIdG1sRWxlbWVudChvYmplY3QpICYmIG9iamVjdC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiZm9ybVwiO1xufVxuZnVuY3Rpb24gaXNJbnB1dEVsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiBpc0h0bWxFbGVtZW50KG9iamVjdCkgJiYgb2JqZWN0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpIHtcbiAgcmV0dXJuIGV2ZW50LmJ1dHRvbiA9PT0gMCAmJiAoIC8vIElnbm9yZSBldmVyeXRoaW5nIGJ1dCBsZWZ0IGNsaWNrc1xuICAhdGFyZ2V0IHx8IHRhcmdldCA9PT0gXCJfc2VsZlwiKSAmJiAvLyBMZXQgYnJvd3NlciBoYW5kbGUgXCJ0YXJnZXQ9X2JsYW5rXCIgZXRjLlxuICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAvLyBJZ25vcmUgY2xpY2tzIHdpdGggbW9kaWZpZXIga2V5c1xuICA7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0IHVzaW5nIHRoZSBnaXZlbiBpbml0aWFsaXplci5cbiAqXG4gKiBUaGlzIGlzIGlkZW50aWNhbCB0byBgbmV3IFVSTFNlYXJjaFBhcmFtcyhpbml0KWAgZXhjZXB0IGl0IGFsc29cbiAqIHN1cHBvcnRzIGFycmF5cyBhcyB2YWx1ZXMgaW4gdGhlIG9iamVjdCBmb3JtIG9mIHRoZSBpbml0aWFsaXplclxuICogaW5zdGVhZCBvZiBqdXN0IHN0cmluZ3MuIFRoaXMgaXMgY29udmVuaWVudCB3aGVuIHlvdSBuZWVkIG11bHRpcGxlXG4gKiB2YWx1ZXMgZm9yIGEgZ2l2ZW4ga2V5LCBidXQgZG9uJ3Qgd2FudCB0byB1c2UgYW4gYXJyYXkgaW5pdGlhbGl6ZXIuXG4gKlxuICogRm9yIGV4YW1wbGUsIGluc3RlYWQgb2Y6XG4gKlxuICogICBsZXQgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbXG4gKiAgICAgWydzb3J0JywgJ25hbWUnXSxcbiAqICAgICBbJ3NvcnQnLCAncHJpY2UnXVxuICogICBdKTtcbiAqXG4gKiB5b3UgY2FuIGRvOlxuICpcbiAqICAgbGV0IHNlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh7XG4gKiAgICAgc29ydDogWyduYW1lJywgJ3ByaWNlJ11cbiAqICAgfSk7XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU2VhcmNoUGFyYW1zKGluaXQpIHtcbiAgaWYgKGluaXQgPT09IHZvaWQgMCkge1xuICAgIGluaXQgPSBcIlwiO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXModHlwZW9mIGluaXQgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheShpbml0KSB8fCBpbml0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zID8gaW5pdCA6IE9iamVjdC5rZXlzKGluaXQpLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gaW5pdFtrZXldO1xuICAgIHJldHVybiBtZW1vLmNvbmNhdChBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLm1hcCh2ID0+IFtrZXksIHZdKSA6IFtba2V5LCB2YWx1ZV1dKTtcbiAgfSwgW10pKTtcbn1cbmZ1bmN0aW9uIGdldFNlYXJjaFBhcmFtc0ZvckxvY2F0aW9uKGxvY2F0aW9uU2VhcmNoLCBkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjcmVhdGVTZWFyY2hQYXJhbXMobG9jYXRpb25TZWFyY2gpO1xuXG4gIGlmIChkZWZhdWx0U2VhcmNoUGFyYW1zKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIGRlZmF1bHRTZWFyY2hQYXJhbXMua2V5cygpKSB7XG4gICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoa2V5KSkge1xuICAgICAgICBkZWZhdWx0U2VhcmNoUGFyYW1zLmdldEFsbChrZXkpLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICAgIHNlYXJjaFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWFyY2hQYXJhbXM7XG59XG5mdW5jdGlvbiBnZXRGb3JtU3VibWlzc2lvbkluZm8odGFyZ2V0LCBkZWZhdWx0QWN0aW9uLCBvcHRpb25zKSB7XG4gIGxldCBtZXRob2Q7XG4gIGxldCBhY3Rpb247XG4gIGxldCBlbmNUeXBlO1xuICBsZXQgZm9ybURhdGE7XG5cbiAgaWYgKGlzRm9ybUVsZW1lbnQodGFyZ2V0KSkge1xuICAgIGxldCBzdWJtaXNzaW9uVHJpZ2dlciA9IG9wdGlvbnMuc3VibWlzc2lvblRyaWdnZXI7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKSB8fCBkZWZhdWx0TWV0aG9kO1xuICAgIGFjdGlvbiA9IG9wdGlvbnMuYWN0aW9uIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJlbmN0eXBlXCIpIHx8IGRlZmF1bHRFbmNUeXBlO1xuICAgIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRhcmdldCk7XG5cbiAgICBpZiAoc3VibWlzc2lvblRyaWdnZXIgJiYgc3VibWlzc2lvblRyaWdnZXIubmFtZSkge1xuICAgICAgZm9ybURhdGEuYXBwZW5kKHN1Ym1pc3Npb25UcmlnZ2VyLm5hbWUsIHN1Ym1pc3Npb25UcmlnZ2VyLnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCdXR0b25FbGVtZW50KHRhcmdldCkgfHwgaXNJbnB1dEVsZW1lbnQodGFyZ2V0KSAmJiAodGFyZ2V0LnR5cGUgPT09IFwic3VibWl0XCIgfHwgdGFyZ2V0LnR5cGUgPT09IFwiaW1hZ2VcIikpIHtcbiAgICBsZXQgZm9ybSA9IHRhcmdldC5mb3JtO1xuXG4gICAgaWYgKGZvcm0gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBhIDxidXR0b24+IG9yIDxpbnB1dCB0eXBlPVxcXCJzdWJtaXRcXFwiPiB3aXRob3V0IGEgPGZvcm0+XCIpO1xuICAgIH0gLy8gPGJ1dHRvbj4vPGlucHV0IHR5cGU9XCJzdWJtaXRcIj4gbWF5IG92ZXJyaWRlIGF0dHJpYnV0ZXMgb2YgPGZvcm0+XG5cblxuICAgIG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtbWV0aG9kXCIpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpIHx8IGRlZmF1bHRNZXRob2Q7XG4gICAgYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gfHwgdGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvcm1hY3Rpb25cIikgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIikgfHwgZGVmYXVsdEFjdGlvbjtcbiAgICBlbmNUeXBlID0gb3B0aW9ucy5lbmNUeXBlIHx8IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJmb3JtZW5jdHlwZVwiKSB8fCBmb3JtLmdldEF0dHJpYnV0ZShcImVuY3R5cGVcIikgfHwgZGVmYXVsdEVuY1R5cGU7XG4gICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7IC8vIEluY2x1ZGUgbmFtZSArIHZhbHVlIGZyb20gYSA8YnV0dG9uPiwgYXBwZW5kaW5nIGluIGNhc2UgdGhlIGJ1dHRvbiBuYW1lXG4gICAgLy8gbWF0Y2hlcyBhbiBleGlzdGluZyBpbnB1dCBuYW1lXG5cbiAgICBpZiAodGFyZ2V0Lm5hbWUpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCh0YXJnZXQubmFtZSwgdGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNIdG1sRWxlbWVudCh0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHN1Ym1pdCBlbGVtZW50IHRoYXQgaXMgbm90IDxmb3JtPiwgPGJ1dHRvbj4sIG9yIFwiICsgXCI8aW5wdXQgdHlwZT1cXFwic3VibWl0fGltYWdlXFxcIj5cIik7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgZGVmYXVsdE1ldGhvZDtcbiAgICBhY3Rpb24gPSBvcHRpb25zLmFjdGlvbiB8fCBkZWZhdWx0QWN0aW9uO1xuICAgIGVuY1R5cGUgPSBvcHRpb25zLmVuY1R5cGUgfHwgZGVmYXVsdEVuY1R5cGU7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgIGZvcm1EYXRhID0gdGFyZ2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zKSB7XG4gICAgICAgIGZvciAobGV0IFtuYW1lLCB2YWx1ZV0gb2YgdGFyZ2V0KSB7XG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQobmFtZSwgdGFyZ2V0W25hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCB7XG4gICAgcHJvdG9jb2wsXG4gICAgaG9zdFxuICB9ID0gd2luZG93LmxvY2F0aW9uO1xuICBsZXQgdXJsID0gbmV3IFVSTChhY3Rpb24sIHByb3RvY29sICsgXCIvL1wiICsgaG9zdCk7XG4gIHJldHVybiB7XG4gICAgdXJsLFxuICAgIG1ldGhvZDogbWV0aG9kLnRvTG93ZXJDYXNlKCksXG4gICAgZW5jVHlwZSxcbiAgICBmb3JtRGF0YVxuICB9O1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJvbkNsaWNrXCIsIFwicmVsYXRpdmVcIiwgXCJyZWxvYWREb2N1bWVudFwiLCBcInJlcGxhY2VcIiwgXCJzdGF0ZVwiLCBcInRhcmdldFwiLCBcInRvXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdLFxuICAgICAgX2V4Y2x1ZGVkMiA9IFtcImFyaWEtY3VycmVudFwiLCBcImNhc2VTZW5zaXRpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJlbmRcIiwgXCJzdHlsZVwiLCBcInRvXCIsIFwiY2hpbGRyZW5cIl0sXG4gICAgICBfZXhjbHVkZWQzID0gW1wicmVsb2FkRG9jdW1lbnRcIiwgXCJyZXBsYWNlXCIsIFwibWV0aG9kXCIsIFwiYWN0aW9uXCIsIFwib25TdWJtaXRcIiwgXCJmZXRjaGVyS2V5XCIsIFwicm91dGVJZFwiLCBcInJlbGF0aXZlXCIsIFwicHJldmVudFNjcm9sbFJlc2V0XCJdO1xuLy8jcmVnaW9uIFJvdXRlcnNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJSb3V0ZXIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGJhc2VuYW1lOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmJhc2VuYW1lLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvdzogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy53aW5kb3dcbiAgICB9KSxcbiAgICBoeWRyYXRpb25EYXRhOiAob3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhKSB8fCBwYXJzZUh5ZHJhdGlvbkRhdGEoKSxcbiAgICByb3V0ZXM6IFVOU0FGRV9lbmhhbmNlTWFudWFsUm91dGVPYmplY3RzKHJvdXRlcylcbiAgfSkuaW5pdGlhbGl6ZSgpO1xufVxuZnVuY3Rpb24gY3JlYXRlSGFzaFJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgaGlzdG9yeTogY3JlYXRlSGFzaEhpc3Rvcnkoe1xuICAgICAgd2luZG93OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLndpbmRvd1xuICAgIH0pLFxuICAgIGh5ZHJhdGlvbkRhdGE6IChvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEpIHx8IHBhcnNlSHlkcmF0aW9uRGF0YSgpLFxuICAgIHJvdXRlczogVU5TQUZFX2VuaGFuY2VNYW51YWxSb3V0ZU9iamVjdHMocm91dGVzKVxuICB9KS5pbml0aWFsaXplKCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlSHlkcmF0aW9uRGF0YSgpIHtcbiAgdmFyIF93aW5kb3c7XG5cbiAgbGV0IHN0YXRlID0gKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93Ll9fc3RhdGljUm91dGVySHlkcmF0aW9uRGF0YTtcblxuICBpZiAoc3RhdGUgJiYgc3RhdGUuZXJyb3JzKSB7XG4gICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgIGVycm9yczogZGVzZXJpYWxpemVFcnJvcnMoc3RhdGUuZXJyb3JzKVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUVycm9ycyhlcnJvcnMpIHtcbiAgaWYgKCFlcnJvcnMpIHJldHVybiBudWxsO1xuICBsZXQgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGVycm9ycyk7XG4gIGxldCBzZXJpYWxpemVkID0ge307XG5cbiAgZm9yIChsZXQgW2tleSwgdmFsXSBvZiBlbnRyaWVzKSB7XG4gICAgLy8gSGV5IHlvdSEgIElmIHlvdSBjaGFuZ2UgdGhpcywgcGxlYXNlIGNoYW5nZSB0aGUgY29ycmVzcG9uZGluZyBsb2dpYyBpblxuICAgIC8vIHNlcmlhbGl6ZUVycm9ycyBpbiByZWFjdC1yb3V0ZXItZG9tL3NlcnZlci50c3ggOilcbiAgICBpZiAodmFsICYmIHZhbC5fX3R5cGUgPT09IFwiUm91dGVFcnJvclJlc3BvbnNlXCIpIHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IG5ldyBFcnJvclJlc3BvbnNlKHZhbC5zdGF0dXMsIHZhbC5zdGF0dXNUZXh0LCB2YWwuZGF0YSwgdmFsLmludGVybmFsID09PSB0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHZhbCAmJiB2YWwuX190eXBlID09PSBcIkVycm9yXCIpIHtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcih2YWwubWVzc2FnZSk7IC8vIFdpcGUgYXdheSB0aGUgY2xpZW50LXNpZGUgc3RhY2sgdHJhY2UuICBOb3RoaW5nIHRvIGZpbGwgaXQgaW4gd2l0aFxuICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBzZXJpYWxpemUgU1NSIHN0YWNrIHRyYWNlcyBmb3Igc2VjdXJpdHkgcmVhc29uc1xuXG4gICAgICBlcnJvci5zdGFjayA9IFwiXCI7XG4gICAgICBzZXJpYWxpemVkW2tleV0gPSBlcnJvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VyaWFsaXplZFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVkO1xufVxuLyoqXG4gKiBBIGA8Um91dGVyPmAgZm9yIHVzZSBpbiB3ZWIgYnJvd3NlcnMuIFByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICovXG5cblxuZnVuY3Rpb24gQnJvd3NlclJvdXRlcihfcmVmKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KHtcbiAgICAgIHdpbmRvdyxcbiAgICAgIHY1Q29tcGF0OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IGhpc3RvcnlSZWYuY3VycmVudDtcbiAgbGV0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xuICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb25cbiAgfSk7XG4gIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiBoaXN0b3J5Lmxpc3RlbihzZXRTdGF0ZSksIFtoaXN0b3J5XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWUsXG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcbiAgICBuYXZpZ2F0aW9uVHlwZTogc3RhdGUuYWN0aW9uLFxuICAgIG5hdmlnYXRvcjogaGlzdG9yeVxuICB9KTtcbn1cbi8qKlxuICogQSBgPFJvdXRlcj5gIGZvciB1c2UgaW4gd2ViIGJyb3dzZXJzLiBTdG9yZXMgdGhlIGxvY2F0aW9uIGluIHRoZSBoYXNoXG4gKiBwb3J0aW9uIG9mIHRoZSBVUkwgc28gaXQgaXMgbm90IHNlbnQgdG8gdGhlIHNlcnZlci5cbiAqL1xuXG5mdW5jdGlvbiBIYXNoUm91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgd2luZG93XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVIYXNoSGlzdG9yeSh7XG4gICAgICB3aW5kb3csXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG4vKipcbiAqIEEgYDxSb3V0ZXI+YCB0aGF0IGFjY2VwdHMgYSBwcmUtaW5zdGFudGlhdGVkIGhpc3Rvcnkgb2JqZWN0LiBJdCdzIGltcG9ydGFudFxuICogdG8gbm90ZSB0aGF0IHVzaW5nIHlvdXIgb3duIGhpc3Rvcnkgb2JqZWN0IGlzIGhpZ2hseSBkaXNjb3VyYWdlZCBhbmQgbWF5IGFkZFxuICogdHdvIHZlcnNpb25zIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdG8geW91ciBidW5kbGVzIHVubGVzcyB5b3UgdXNlIHRoZSBzYW1lXG4gKiB2ZXJzaW9uIG9mIHRoZSBoaXN0b3J5IGxpYnJhcnkgdGhhdCBSZWFjdCBSb3V0ZXIgdXNlcyBpbnRlcm5hbGx5LlxuICovXG5cbmZ1bmN0aW9uIEhpc3RvcnlSb3V0ZXIoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBoaXN0b3J5XG4gIH0gPSBfcmVmMztcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEhpc3RvcnlSb3V0ZXIuZGlzcGxheU5hbWUgPSBcInVuc3RhYmxlX0hpc3RvcnlSb3V0ZXJcIjtcbn1cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCI7XG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciByZW5kZXJpbmcgYSBoaXN0b3J5LWF3YXJlIDxhPi5cbiAqL1xuXG5jb25zdCBMaW5rID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlua1dpdGhSZWYoX3JlZjQsIHJlZikge1xuICBsZXQge1xuICAgIG9uQ2xpY2ssXG4gICAgcmVsYXRpdmUsXG4gICAgcmVsb2FkRG9jdW1lbnQsXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgdG8sXG4gICAgcHJldmVudFNjcm9sbFJlc2V0XG4gIH0gPSBfcmVmNCxcbiAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmNCwgX2V4Y2x1ZGVkKTtcblxuICAvLyBSZW5kZXJlZCBpbnRvIDxhIGhyZWY+IGZvciBhYnNvbHV0ZSBVUkxzXG4gIGxldCBhYnNvbHV0ZUhyZWY7XG4gIGxldCBpc0V4dGVybmFsID0gZmFsc2U7XG5cbiAgaWYgKGlzQnJvd3NlciAmJiB0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgJiYgL14oPzpbYS16XVthLXowLTkrLi1dKjp8XFwvXFwvKS9pLnRlc3QodG8pKSB7XG4gICAgYWJzb2x1dGVIcmVmID0gdG87XG4gICAgbGV0IGN1cnJlbnRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICBsZXQgdGFyZ2V0VXJsID0gdG8uc3RhcnRzV2l0aChcIi8vXCIpID8gbmV3IFVSTChjdXJyZW50VXJsLnByb3RvY29sICsgdG8pIDogbmV3IFVSTCh0byk7XG5cbiAgICBpZiAodGFyZ2V0VXJsLm9yaWdpbiA9PT0gY3VycmVudFVybC5vcmlnaW4pIHtcbiAgICAgIC8vIFN0cmlwIHRoZSBwcm90b2NvbC9vcmlnaW4gZm9yIHNhbWUtb3JpZ2luIGFic29sdXRlIFVSTHNcbiAgICAgIHRvID0gdGFyZ2V0VXJsLnBhdGhuYW1lICsgdGFyZ2V0VXJsLnNlYXJjaCArIHRhcmdldFVybC5oYXNoO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0V4dGVybmFsID0gdHJ1ZTtcbiAgICB9XG4gIH0gLy8gUmVuZGVyZWQgaW50byA8YSBocmVmPiBmb3IgcmVsYXRpdmUgVVJMc1xuXG5cbiAgbGV0IGhyZWYgPSB1c2VIcmVmKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBpbnRlcm5hbE9uQ2xpY2sgPSB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCB7XG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICB0YXJnZXQsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuXG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICBpbnRlcm5hbE9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9hbmNob3ItaGFzLWNvbnRlbnRcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaHJlZjogYWJzb2x1dGVIcmVmIHx8IGhyZWYsXG4gICAgICBvbkNsaWNrOiBpc0V4dGVybmFsIHx8IHJlbG9hZERvY3VtZW50ID8gb25DbGljayA6IGhhbmRsZUNsaWNrLFxuICAgICAgcmVmOiByZWYsXG4gICAgICB0YXJnZXQ6IHRhcmdldFxuICAgIH0pKVxuICApO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTGluay5kaXNwbGF5TmFtZSA9IFwiTGlua1wiO1xufVxuLyoqXG4gKiBBIDxMaW5rPiB3cmFwcGVyIHRoYXQga25vd3MgaWYgaXQncyBcImFjdGl2ZVwiIG9yIG5vdC5cbiAqL1xuXG5cbmNvbnN0IE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOYXZMaW5rV2l0aFJlZihfcmVmNSwgcmVmKSB7XG4gIGxldCB7XG4gICAgXCJhcmlhLWN1cnJlbnRcIjogYXJpYUN1cnJlbnRQcm9wID0gXCJwYWdlXCIsXG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCA9IFwiXCIsXG4gICAgZW5kID0gZmFsc2UsXG4gICAgc3R5bGU6IHN0eWxlUHJvcCxcbiAgICB0byxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjUsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjUsIF9leGNsdWRlZDIpO1xuXG4gIGxldCBwYXRoID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmU6IHJlc3QucmVsYXRpdmVcbiAgfSk7XG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZXJTdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgdG9QYXRobmFtZSA9IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihwYXRoKS5wYXRobmFtZSA6IHBhdGgucGF0aG5hbWU7XG4gIGxldCBsb2NhdGlvblBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gIGxldCBuZXh0TG9jYXRpb25QYXRobmFtZSA9IHJvdXRlclN0YXRlICYmIHJvdXRlclN0YXRlLm5hdmlnYXRpb24gJiYgcm91dGVyU3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiA/IHJvdXRlclN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24ucGF0aG5hbWUgOiBudWxsO1xuXG4gIGlmICghY2FzZVNlbnNpdGl2ZSkge1xuICAgIGxvY2F0aW9uUGF0aG5hbWUgPSBsb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgbmV4dExvY2F0aW9uUGF0aG5hbWUgPSBuZXh0TG9jYXRpb25QYXRobmFtZSA/IG5leHRMb2NhdGlvblBhdGhuYW1lLnRvTG93ZXJDYXNlKCkgOiBudWxsO1xuICAgIHRvUGF0aG5hbWUgPSB0b1BhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBsZXQgaXNBY3RpdmUgPSBsb2NhdGlvblBhdGhuYW1lID09PSB0b1BhdGhuYW1lIHx8ICFlbmQgJiYgbG9jYXRpb25QYXRobmFtZS5zdGFydHNXaXRoKHRvUGF0aG5hbWUpICYmIGxvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCI7XG4gIGxldCBpc1BlbmRpbmcgPSBuZXh0TG9jYXRpb25QYXRobmFtZSAhPSBudWxsICYmIChuZXh0TG9jYXRpb25QYXRobmFtZSA9PT0gdG9QYXRobmFtZSB8fCAhZW5kICYmIG5leHRMb2NhdGlvblBhdGhuYW1lLnN0YXJ0c1dpdGgodG9QYXRobmFtZSkgJiYgbmV4dExvY2F0aW9uUGF0aG5hbWUuY2hhckF0KHRvUGF0aG5hbWUubGVuZ3RoKSA9PT0gXCIvXCIpO1xuICBsZXQgYXJpYUN1cnJlbnQgPSBpc0FjdGl2ZSA/IGFyaWFDdXJyZW50UHJvcCA6IHVuZGVmaW5lZDtcbiAgbGV0IGNsYXNzTmFtZTtcblxuICBpZiAodHlwZW9mIGNsYXNzTmFtZVByb3AgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZVByb3Aoe1xuICAgICAgaXNBY3RpdmUsXG4gICAgICBpc1BlbmRpbmdcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgY2xhc3NOYW1lIHByb3AgaXMgbm90IGEgZnVuY3Rpb24sIHdlIHVzZSBhIGRlZmF1bHQgYGFjdGl2ZWBcbiAgICAvLyBjbGFzcyBmb3IgPE5hdkxpbmsgLz5zIHRoYXQgYXJlIGFjdGl2ZS4gSW4gdjUgYGFjdGl2ZWAgd2FzIHRoZSBkZWZhdWx0XG4gICAgLy8gdmFsdWUgZm9yIGBhY3RpdmVDbGFzc05hbWVgLCBidXQgd2UgYXJlIHJlbW92aW5nIHRoYXQgQVBJIGFuZCBjYW4gc3RpbGxcbiAgICAvLyB1c2UgdGhlIG9sZCBkZWZhdWx0IGJlaGF2aW9yIGZvciBhIGNsZWFuZXIgdXBncmFkZSBwYXRoIGFuZCBrZWVwIHRoZVxuICAgIC8vIHNpbXBsZSBzdHlsaW5nIHJ1bGVzIHdvcmtpbmcgYXMgdGhleSBjdXJyZW50bHkgZG8uXG4gICAgY2xhc3NOYW1lID0gW2NsYXNzTmFtZVByb3AsIGlzQWN0aXZlID8gXCJhY3RpdmVcIiA6IG51bGwsIGlzUGVuZGluZyA/IFwicGVuZGluZ1wiIDogbnVsbF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgbGV0IHN0eWxlID0gdHlwZW9mIHN0eWxlUHJvcCA9PT0gXCJmdW5jdGlvblwiID8gc3R5bGVQcm9wKHtcbiAgICBpc0FjdGl2ZSxcbiAgICBpc1BlbmRpbmdcbiAgfSkgOiBzdHlsZVByb3A7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMaW5rLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFyaWFDdXJyZW50LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICB0bzogdG9cbiAgfSksIHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4oe1xuICAgIGlzQWN0aXZlLFxuICAgIGlzUGVuZGluZ1xuICB9KSA6IGNoaWxkcmVuKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIE5hdkxpbmsuZGlzcGxheU5hbWUgPSBcIk5hdkxpbmtcIjtcbn1cbi8qKlxuICogQSBgQHJlbWl4LXJ1bi9yb3V0ZXJgLWF3YXJlIGA8Zm9ybT5gLiBJdCBiZWhhdmVzIGxpa2UgYSBub3JtYWwgZm9ybSBleGNlcHRcbiAqIHRoYXQgdGhlIGludGVyYWN0aW9uIHdpdGggdGhlIHNlcnZlciBpcyB3aXRoIGBmZXRjaGAgaW5zdGVhZCBvZiBuZXcgZG9jdW1lbnRcbiAqIHJlcXVlc3RzLCBhbGxvd2luZyBjb21wb25lbnRzIHRvIGFkZCBuaWNlciBVWCB0byB0aGUgcGFnZSBhcyB0aGUgZm9ybSBpc1xuICogc3VibWl0dGVkIGFuZCByZXR1cm5zIHdpdGggZGF0YS5cbiAqL1xuXG5cbmNvbnN0IEZvcm0gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmXG4gIH0pKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm0uZGlzcGxheU5hbWUgPSBcIkZvcm1cIjtcbn1cblxuY29uc3QgRm9ybUltcGwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZigoX3JlZjYsIGZvcndhcmRlZFJlZikgPT4ge1xuICBsZXQge1xuICAgIHJlbG9hZERvY3VtZW50LFxuICAgIHJlcGxhY2UsXG4gICAgbWV0aG9kID0gZGVmYXVsdE1ldGhvZCxcbiAgICBhY3Rpb24sXG4gICAgb25TdWJtaXQsXG4gICAgZmV0Y2hlcktleSxcbiAgICByb3V0ZUlkLFxuICAgIHJlbGF0aXZlLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICB9ID0gX3JlZjYsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWY2LCBfZXhjbHVkZWQzKTtcblxuICBsZXQgc3VibWl0ID0gdXNlU3VibWl0SW1wbChmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgbGV0IGZvcm1NZXRob2QgPSBtZXRob2QudG9Mb3dlckNhc2UoKSA9PT0gXCJnZXRcIiA/IFwiZ2V0XCIgOiBcInBvc3RcIjtcbiAgbGV0IGZvcm1BY3Rpb24gPSB1c2VGb3JtQWN0aW9uKGFjdGlvbiwge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuXG4gIGxldCBzdWJtaXRIYW5kbGVyID0gZXZlbnQgPT4ge1xuICAgIG9uU3VibWl0ICYmIG9uU3VibWl0KGV2ZW50KTtcbiAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHN1Ym1pdHRlciA9IGV2ZW50Lm5hdGl2ZUV2ZW50LnN1Ym1pdHRlcjtcbiAgICBsZXQgc3VibWl0TWV0aG9kID0gKHN1Ym1pdHRlciA9PSBudWxsID8gdm9pZCAwIDogc3VibWl0dGVyLmdldEF0dHJpYnV0ZShcImZvcm1tZXRob2RcIikpIHx8IG1ldGhvZDtcbiAgICBzdWJtaXQoc3VibWl0dGVyIHx8IGV2ZW50LmN1cnJlbnRUYXJnZXQsIHtcbiAgICAgIG1ldGhvZDogc3VibWl0TWV0aG9kLFxuICAgICAgcmVwbGFjZSxcbiAgICAgIHJlbGF0aXZlLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBmb3J3YXJkZWRSZWYsXG4gICAgbWV0aG9kOiBmb3JtTWV0aG9kLFxuICAgIGFjdGlvbjogZm9ybUFjdGlvbixcbiAgICBvblN1Ym1pdDogcmVsb2FkRG9jdW1lbnQgPyBvblN1Ym1pdCA6IHN1Ym1pdEhhbmRsZXJcbiAgfSwgcHJvcHMpKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEZvcm1JbXBsLmRpc3BsYXlOYW1lID0gXCJGb3JtSW1wbFwiO1xufVxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCB3aWxsIGVtdWxhdGUgdGhlIGJyb3dzZXIncyBzY3JvbGwgcmVzdG9yYXRpb24gb24gbG9jYXRpb25cbiAqIGNoYW5nZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBTY3JvbGxSZXN0b3JhdGlvbihfcmVmNykge1xuICBsZXQge1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0gPSBfcmVmNztcbiAgdXNlU2Nyb2xsUmVzdG9yYXRpb24oe1xuICAgIGdldEtleSxcbiAgICBzdG9yYWdlS2V5XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTY3JvbGxSZXN0b3JhdGlvbi5kaXNwbGF5TmFtZSA9IFwiU2Nyb2xsUmVzdG9yYXRpb25cIjtcbn0gLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIEhvb2tzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbnZhciBEYXRhUm91dGVySG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVySG9vaykge1xuICBEYXRhUm91dGVySG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVN1Ym1pdEltcGxcIl0gPSBcInVzZVN1Ym1pdEltcGxcIjtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VGZXRjaGVyXCJdID0gXCJ1c2VGZXRjaGVyXCI7XG59KShEYXRhUm91dGVySG9vayB8fCAoRGF0YVJvdXRlckhvb2sgPSB7fSkpO1xuXG52YXIgRGF0YVJvdXRlclN0YXRlSG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VGZXRjaGVyc1wiXSA9IFwidXNlRmV0Y2hlcnNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVNjcm9sbFJlc3RvcmF0aW9uXCJdID0gXCJ1c2VTY3JvbGxSZXN0b3JhdGlvblwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJDb250ZXh0KTtcbiAgIWN0eCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGN0eDtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlclN0YXRlKGhvb2tOYW1lKSB7XG4gIGxldCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICAhc3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBzdGF0ZTtcbn1cbi8qKlxuICogSGFuZGxlcyB0aGUgY2xpY2sgYmVoYXZpb3IgZm9yIHJvdXRlciBgPExpbms+YCBjb21wb25lbnRzLiBUaGlzIGlzIHVzZWZ1bCBpZlxuICogeW91IG5lZWQgdG8gY3JlYXRlIGN1c3RvbSBgPExpbms+YCBjb21wb25lbnRzIHdpdGggdGhlIHNhbWUgY2xpY2sgYmVoYXZpb3Igd2VcbiAqIHVzZSBpbiBvdXIgZXhwb3J0ZWQgYDxMaW5rPmAuXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VMaW5rQ2xpY2tIYW5kbGVyKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHRhcmdldCxcbiAgICByZXBsYWNlOiByZXBsYWNlUHJvcCxcbiAgICBzdGF0ZSxcbiAgICBwcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcGF0aCA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZXZlbnQgPT4ge1xuICAgIGlmIChzaG91bGRQcm9jZXNzTGlua0NsaWNrKGV2ZW50LCB0YXJnZXQpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBJZiB0aGUgVVJMIGhhc24ndCBjaGFuZ2VkLCBhIHJlZ3VsYXIgPGE+IHdpbGwgZG8gYSByZXBsYWNlIGluc3RlYWQgb2ZcbiAgICAgIC8vIGEgcHVzaCwgc28gZG8gdGhlIHNhbWUgaGVyZSB1bmxlc3MgdGhlIHJlcGxhY2UgcHJvcCBpcyBleHBsaWNpdGx5IHNldFxuXG4gICAgICBsZXQgcmVwbGFjZSA9IHJlcGxhY2VQcm9wICE9PSB1bmRlZmluZWQgPyByZXBsYWNlUHJvcCA6IGNyZWF0ZVBhdGgobG9jYXRpb24pID09PSBjcmVhdGVQYXRoKHBhdGgpO1xuICAgICAgbmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgICAgcmVsYXRpdmVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2xvY2F0aW9uLCBuYXZpZ2F0ZSwgcGF0aCwgcmVwbGFjZVByb3AsIHN0YXRlLCB0YXJnZXQsIHRvLCBwcmV2ZW50U2Nyb2xsUmVzZXQsIHJlbGF0aXZlXSk7XG59XG4vKipcbiAqIEEgY29udmVuaWVudCB3cmFwcGVyIGZvciByZWFkaW5nIGFuZCB3cml0aW5nIHNlYXJjaCBwYXJhbWV0ZXJzIHZpYSB0aGVcbiAqIFVSTFNlYXJjaFBhcmFtcyBpbnRlcmZhY2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcodHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gXCJ1bmRlZmluZWRcIiwgXCJZb3UgY2Fubm90IHVzZSB0aGUgYHVzZVNlYXJjaFBhcmFtc2AgaG9vayBpbiBhIGJyb3dzZXIgdGhhdCBkb2VzIG5vdCBcIiArIFwic3VwcG9ydCB0aGUgVVJMU2VhcmNoUGFyYW1zIEFQSS4gSWYgeW91IG5lZWQgdG8gc3VwcG9ydCBJbnRlcm5ldCBcIiArIFwiRXhwbG9yZXIgMTEsIHdlIHJlY29tbWVuZCB5b3UgbG9hZCBhIHBvbHlmaWxsIHN1Y2ggYXMgXCIgKyBcImh0dHBzOi8vZ2l0aHViLmNvbS91bmdhcC91cmwtc2VhcmNoLXBhcmFtc1xcblxcblwiICsgXCJJZiB5b3UncmUgdW5zdXJlIGhvdyB0byBsb2FkIHBvbHlmaWxscywgd2UgcmVjb21tZW5kIHlvdSBjaGVjayBvdXQgXCIgKyBcImh0dHBzOi8vcG9seWZpbGwuaW8vdjMvIHdoaWNoIHByb3ZpZGVzIHNvbWUgcmVjb21tZW5kYXRpb25zIGFib3V0IGhvdyBcIiArIFwidG8gbG9hZCBwb2x5ZmlsbHMgb25seSBmb3IgdXNlcnMgdGhhdCBuZWVkIHRoZW0sIGluc3RlYWQgb2YgZm9yIGV2ZXJ5IFwiICsgXCJ1c2VyLlwiKSA6IHZvaWQgMDtcbiAgbGV0IGRlZmF1bHRTZWFyY2hQYXJhbXNSZWYgPSBSZWFjdC51c2VSZWYoY3JlYXRlU2VhcmNoUGFyYW1zKGRlZmF1bHRJbml0KSk7XG4gIGxldCBoYXNTZXRTZWFyY2hQYXJhbXNSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgc2VhcmNoUGFyYW1zID0gUmVhY3QudXNlTWVtbygoKSA9PiAvLyBPbmx5IG1lcmdlIGluIHRoZSBkZWZhdWx0cyBpZiB3ZSBoYXZlbid0IHlldCBjYWxsZWQgc2V0U2VhcmNoUGFyYW1zLlxuICAvLyBPbmNlIHdlIGNhbGwgdGhhdCB3ZSB3YW50IHRob3NlIHRvIHRha2UgcHJlY2VkZW5jZSwgb3RoZXJ3aXNlIHlvdSBjYW4ndFxuICAvLyByZW1vdmUgYSBwYXJhbSB3aXRoIHNldFNlYXJjaFBhcmFtcyh7fSkgaWYgaXQgaGFzIGFuIGluaXRpYWwgdmFsdWVcbiAgZ2V0U2VhcmNoUGFyYW1zRm9yTG9jYXRpb24obG9jYXRpb24uc2VhcmNoLCBoYXNTZXRTZWFyY2hQYXJhbXNSZWYuY3VycmVudCA/IG51bGwgOiBkZWZhdWx0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQpLCBbbG9jYXRpb24uc2VhcmNoXSk7XG4gIGxldCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gIGxldCBzZXRTZWFyY2hQYXJhbXMgPSBSZWFjdC51c2VDYWxsYmFjaygobmV4dEluaXQsIG5hdmlnYXRlT3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IG5ld1NlYXJjaFBhcmFtcyA9IGNyZWF0ZVNlYXJjaFBhcmFtcyh0eXBlb2YgbmV4dEluaXQgPT09IFwiZnVuY3Rpb25cIiA/IG5leHRJbml0KHNlYXJjaFBhcmFtcykgOiBuZXh0SW5pdCk7XG4gICAgaGFzU2V0U2VhcmNoUGFyYW1zUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIG5hdmlnYXRlKFwiP1wiICsgbmV3U2VhcmNoUGFyYW1zLCBuYXZpZ2F0ZU9wdGlvbnMpO1xuICB9LCBbbmF2aWdhdGUsIHNlYXJjaFBhcmFtc10pO1xuICByZXR1cm4gW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXTtcbn1cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gcHJvZ3JhbW1hdGljYWxseSBzdWJtaXQgYSBmb3JtIChvclxuICogc29tZSBhcmJpdHJhcnkgZGF0YSkgdG8gdGhlIHNlcnZlci5cbiAqL1xuXG5mdW5jdGlvbiB1c2VTdWJtaXQoKSB7XG4gIHJldHVybiB1c2VTdWJtaXRJbXBsKCk7XG59XG5cbmZ1bmN0aW9uIHVzZVN1Ym1pdEltcGwoZmV0Y2hlcktleSwgcm91dGVJZCkge1xuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlU3VibWl0SW1wbCk7XG4gIGxldCBkZWZhdWx0QWN0aW9uID0gdXNlRm9ybUFjdGlvbigpO1xuICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGNhbGxpbmcgc3VibWl0IGR1cmluZyB0aGUgc2VydmVyIHJlbmRlci4gXCIgKyBcIlRyeSBjYWxsaW5nIHN1Ym1pdCB3aXRoaW4gYSBgdXNlRWZmZWN0YCBvciBjYWxsYmFjayBpbnN0ZWFkLlwiKTtcbiAgICB9XG5cbiAgICBsZXQge1xuICAgICAgbWV0aG9kLFxuICAgICAgZW5jVHlwZSxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAgdXJsXG4gICAgfSA9IGdldEZvcm1TdWJtaXNzaW9uSW5mbyh0YXJnZXQsIGRlZmF1bHRBY3Rpb24sIG9wdGlvbnMpO1xuICAgIGxldCBocmVmID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICBsZXQgb3B0cyA9IHtcbiAgICAgIHJlcGxhY2U6IG9wdGlvbnMucmVwbGFjZSxcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0aW9ucy5wcmV2ZW50U2Nyb2xsUmVzZXQsXG4gICAgICBmb3JtRGF0YSxcbiAgICAgIGZvcm1NZXRob2Q6IG1ldGhvZCxcbiAgICAgIGZvcm1FbmNUeXBlOiBlbmNUeXBlXG4gICAgfTtcblxuICAgIGlmIChmZXRjaGVyS2V5KSB7XG4gICAgICAhKHJvdXRlSWQgIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiTm8gcm91dGVJZCBhdmFpbGFibGUgZm9yIHVzZUZldGNoZXIoKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICByb3V0ZXIuZmV0Y2goZmV0Y2hlcktleSwgcm91dGVJZCwgaHJlZiwgb3B0cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShocmVmLCBvcHRzKTtcbiAgICB9XG4gIH0sIFtkZWZhdWx0QWN0aW9uLCByb3V0ZXIsIGZldGNoZXJLZXksIHJvdXRlSWRdKTtcbn1cblxuZnVuY3Rpb24gdXNlRm9ybUFjdGlvbihhY3Rpb24sIF90ZW1wMikge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyO1xuICBsZXQge1xuICAgIGJhc2VuYW1lXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCByb3V0ZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KFVOU0FGRV9Sb3V0ZUNvbnRleHQpO1xuICAhcm91dGVDb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcInVzZUZvcm1BY3Rpb24gbXVzdCBiZSB1c2VkIGluc2lkZSBhIFJvdXRlQ29udGV4dFwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBbbWF0Y2hdID0gcm91dGVDb250ZXh0Lm1hdGNoZXMuc2xpY2UoLTEpOyAvLyBTaGFsbG93IGNsb25lIHBhdGggc28gd2UgY2FuIG1vZGlmeSBpdCBiZWxvdywgb3RoZXJ3aXNlIHdlIG1vZGlmeSB0aGVcbiAgLy8gb2JqZWN0IHJlZmVyZW5jZWQgYnkgdXNlTWVtbyBpbnNpZGUgdXNlUmVzb2x2ZWRQYXRoXG5cbiAgbGV0IHBhdGggPSBfZXh0ZW5kcyh7fSwgdXNlUmVzb2x2ZWRQYXRoKGFjdGlvbiA/IGFjdGlvbiA6IFwiLlwiLCB7XG4gICAgcmVsYXRpdmVcbiAgfSkpOyAvLyBQcmV2aW91c2x5IHdlIHNldCB0aGUgZGVmYXVsdCBhY3Rpb24gdG8gXCIuXCIuIFRoZSBwcm9ibGVtIHdpdGggdGhpcyBpcyB0aGF0XG4gIC8vIGB1c2VSZXNvbHZlZFBhdGgoXCIuXCIpYCBleGNsdWRlcyBzZWFyY2ggcGFyYW1zIGFuZCB0aGUgaGFzaCBvZiB0aGUgcmVzb2x2ZWRcbiAgLy8gVVJMLiBUaGlzIGlzIHRoZSBpbnRlbmRlZCBiZWhhdmlvciBvZiB3aGVuIFwiLlwiIGlzIHNwZWNpZmljYWxseSBwcm92aWRlZCBhc1xuICAvLyB0aGUgZm9ybSBhY3Rpb24sIGJ1dCBpbmNvbnNpc3RlbnQgdy8gYnJvd3NlcnMgd2hlbiB0aGUgYWN0aW9uIGlzIG9taXR0ZWQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vcmVtaXgvaXNzdWVzLzkyN1xuXG5cbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuICBpZiAoYWN0aW9uID09IG51bGwpIHtcbiAgICAvLyBTYWZlIHRvIHdyaXRlIHRvIHRoZXNlIGRpcmVjdGx5IGhlcmUgc2luY2UgaWYgYWN0aW9uIHdhcyB1bmRlZmluZWQsIHdlXG4gICAgLy8gd291bGQgaGF2ZSBjYWxsZWQgdXNlUmVzb2x2ZWRQYXRoKFwiLlwiKSB3aGljaCB3aWxsIG5ldmVyIGluY2x1ZGUgYSBzZWFyY2hcbiAgICAvLyBvciBoYXNoXG4gICAgcGF0aC5zZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgcGF0aC5oYXNoID0gbG9jYXRpb24uaGFzaDsgLy8gV2hlbiBncmFiYmluZyBzZWFyY2ggcGFyYW1zIGZyb20gdGhlIFVSTCwgcmVtb3ZlIHRoZSBhdXRvbWF0aWNhbGx5XG4gICAgLy8gaW5zZXJ0ZWQgP2luZGV4IHBhcmFtIHNvIHdlIG1hdGNoIHRoZSB1c2VSZXNvbHZlZFBhdGggc2VhcmNoIGJlaGF2aW9yXG4gICAgLy8gd2hpY2ggd291bGQgbm90IGluY2x1ZGUgP2luZGV4XG5cbiAgICBpZiAobWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhdGguc2VhcmNoKTtcbiAgICAgIHBhcmFtcy5kZWxldGUoXCJpbmRleFwiKTtcbiAgICAgIHBhdGguc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCkgPyBcIj9cIiArIHBhcmFtcy50b1N0cmluZygpIDogXCJcIjtcbiAgICB9XG4gIH1cblxuICBpZiAoKCFhY3Rpb24gfHwgYWN0aW9uID09PSBcIi5cIikgJiYgbWF0Y2gucm91dGUuaW5kZXgpIHtcbiAgICBwYXRoLnNlYXJjaCA9IHBhdGguc2VhcmNoID8gcGF0aC5zZWFyY2gucmVwbGFjZSgvXlxcPy8sIFwiP2luZGV4JlwiKSA6IFwiP2luZGV4XCI7XG4gIH0gLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgZm9ybSBhY3Rpb24uICBJZiB0aGlzIGlzIGEgcm9vdCBuYXZpZ2F0aW9uLCB0aGVuIGp1c3QgdXNlXG4gIC8vIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoZVxuICAvLyBwcmVzZW5jZSBvZiBhIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgYWN0aW9uc1xuXG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVBhdGgocGF0aCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZldGNoZXJGb3JtKGZldGNoZXJLZXksIHJvdXRlSWQpIHtcbiAgbGV0IEZldGNoZXJGb3JtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUltcGwsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgcmVmOiByZWYsXG4gICAgICBmZXRjaGVyS2V5OiBmZXRjaGVyS2V5LFxuICAgICAgcm91dGVJZDogcm91dGVJZFxuICAgIH0pKTtcbiAgfSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIEZldGNoZXJGb3JtLmRpc3BsYXlOYW1lID0gXCJmZXRjaGVyLkZvcm1cIjtcbiAgfVxuXG4gIHJldHVybiBGZXRjaGVyRm9ybTtcbn1cblxubGV0IGZldGNoZXJJZCA9IDA7XG4vKipcbiAqIEludGVyYWN0cyB3aXRoIHJvdXRlIGxvYWRlcnMgYW5kIGFjdGlvbnMgd2l0aG91dCBjYXVzaW5nIGEgbmF2aWdhdGlvbi4gR3JlYXRcbiAqIGZvciBhbnkgaW50ZXJhY3Rpb24gdGhhdCBzdGF5cyBvbiB0aGUgc2FtZSBwYWdlLlxuICovXG5cbmZ1bmN0aW9uIHVzZUZldGNoZXIoKSB7XG4gIHZhciBfcm91dGUkbWF0Y2hlcztcblxuICBsZXQge1xuICAgIHJvdXRlclxuICB9ID0gdXNlRGF0YVJvdXRlckNvbnRleHQoRGF0YVJvdXRlckhvb2suVXNlRmV0Y2hlcik7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoVU5TQUZFX1JvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJ1c2VGZXRjaGVyIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQgcm91dGVJZCA9IChfcm91dGUkbWF0Y2hlcyA9IHJvdXRlLm1hdGNoZXNbcm91dGUubWF0Y2hlcy5sZW5ndGggLSAxXSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9yb3V0ZSRtYXRjaGVzLnJvdXRlLmlkO1xuICAhKHJvdXRlSWQgIT0gbnVsbCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwidXNlRmV0Y2hlciBjYW4gb25seSBiZSB1c2VkIG9uIHJvdXRlcyB0aGF0IGNvbnRhaW4gYSB1bmlxdWUgXFxcImlkXFxcIlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCBbZmV0Y2hlcktleV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBTdHJpbmcoKytmZXRjaGVySWQpKTtcbiAgbGV0IFtGb3JtXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcbiAgICAhcm91dGVJZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5Gb3JtKClcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBjcmVhdGVGZXRjaGVyRm9ybShmZXRjaGVyS2V5LCByb3V0ZUlkKTtcbiAgfSk7XG4gIGxldCBbbG9hZF0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiBocmVmID0+IHtcbiAgICAhcm91dGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIk5vIHJvdXRlciBhdmFpbGFibGUgZm9yIGZldGNoZXIubG9hZCgpXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAhcm91dGVJZCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJObyByb3V0ZUlkIGF2YWlsYWJsZSBmb3IgZmV0Y2hlci5sb2FkKClcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJvdXRlci5mZXRjaChmZXRjaGVyS2V5LCByb3V0ZUlkLCBocmVmKTtcbiAgfSk7XG4gIGxldCBzdWJtaXQgPSB1c2VTdWJtaXRJbXBsKGZldGNoZXJLZXksIHJvdXRlSWQpO1xuICBsZXQgZmV0Y2hlciA9IHJvdXRlci5nZXRGZXRjaGVyKGZldGNoZXJLZXkpO1xuICBsZXQgZmV0Y2hlcldpdGhDb21wb25lbnRzID0gUmVhY3QudXNlTWVtbygoKSA9PiBfZXh0ZW5kcyh7XG4gICAgRm9ybSxcbiAgICBzdWJtaXQsXG4gICAgbG9hZFxuICB9LCBmZXRjaGVyKSwgW2ZldGNoZXIsIEZvcm0sIHN1Ym1pdCwgbG9hZF0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIElzIHRoaXMgYnVzdGVkIHdoZW4gdGhlIFJlYWN0IHRlYW0gZ2V0cyByZWFsIHdlaXJkIGFuZCBjYWxscyBlZmZlY3RzXG4gICAgLy8gdHdpY2Ugb24gbW91bnQ/ICBXZSByZWFsbHkganVzdCBuZWVkIHRvIGdhcmJhZ2UgY29sbGVjdCBoZXJlIHdoZW4gdGhpc1xuICAgIC8vIGZldGNoZXIgaXMgbm8gbG9uZ2VyIGFyb3VuZC5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKCFyb3V0ZXIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiTm8gZmV0Y2hlciBhdmFpbGFibGUgdG8gY2xlYW4gdXAgZnJvbSB1c2VGZXRjaGVyKClcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcm91dGVyLmRlbGV0ZUZldGNoZXIoZmV0Y2hlcktleSk7XG4gICAgfTtcbiAgfSwgW3JvdXRlciwgZmV0Y2hlcktleV0pO1xuICByZXR1cm4gZmV0Y2hlcldpdGhDb21wb25lbnRzO1xufVxuLyoqXG4gKiBQcm92aWRlcyBhbGwgZmV0Y2hlcnMgY3VycmVudGx5IG9uIHRoZSBwYWdlLiBVc2VmdWwgZm9yIGxheW91dHMgYW5kIHBhcmVudFxuICogcm91dGVzIHRoYXQgbmVlZCB0byBwcm92aWRlIHBlbmRpbmcvb3B0aW1pc3RpYyBVSSByZWdhcmRpbmcgdGhlIGZldGNoLlxuICovXG5cbmZ1bmN0aW9uIHVzZUZldGNoZXJzKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VGZXRjaGVycyk7XG4gIHJldHVybiBbLi4uc3RhdGUuZmV0Y2hlcnMudmFsdWVzKCldO1xufVxuY29uc3QgU0NST0xMX1JFU1RPUkFUSU9OX1NUT1JBR0VfS0VZID0gXCJyZWFjdC1yb3V0ZXItc2Nyb2xsLXBvc2l0aW9uc1wiO1xubGV0IHNhdmVkU2Nyb2xsUG9zaXRpb25zID0ge307XG4vKipcbiAqIFdoZW4gcmVuZGVyZWQgaW5zaWRlIGEgUm91dGVyUHJvdmlkZXIsIHdpbGwgcmVzdG9yZSBzY3JvbGwgcG9zaXRpb25zIG9uIG5hdmlnYXRpb25zXG4gKi9cblxuZnVuY3Rpb24gdXNlU2Nyb2xsUmVzdG9yYXRpb24oX3RlbXAzKSB7XG4gIGxldCB7XG4gICAgZ2V0S2V5LFxuICAgIHN0b3JhZ2VLZXlcbiAgfSA9IF90ZW1wMyA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDM7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VTY3JvbGxSZXN0b3JhdGlvbik7XG4gIGxldCB7XG4gICAgcmVzdG9yZVNjcm9sbFBvc2l0aW9uLFxuICAgIHByZXZlbnRTY3JvbGxSZXNldFxuICB9ID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlU2Nyb2xsUmVzdG9yYXRpb24pO1xuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbWF0Y2hlcyA9IHVzZU1hdGNoZXMoKTtcbiAgbGV0IG5hdmlnYXRpb24gPSB1c2VOYXZpZ2F0aW9uKCk7IC8vIFRyaWdnZXIgbWFudWFsIHNjcm9sbCByZXN0b3JhdGlvbiB3aGlsZSB3ZSdyZSBhY3RpdmVcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gXCJtYW51YWxcIjtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIjtcbiAgICB9O1xuICB9LCBbXSk7IC8vIFNhdmUgcG9zaXRpb25zIG9uIHBhZ2VoaWRlXG5cbiAgdXNlUGFnZUhpZGUoUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChuYXZpZ2F0aW9uLnN0YXRlID09PSBcImlkbGVcIikge1xuICAgICAgbGV0IGtleSA9IChnZXRLZXkgPyBnZXRLZXkobG9jYXRpb24sIG1hdGNoZXMpIDogbnVsbCkgfHwgbG9jYXRpb24ua2V5O1xuICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnNba2V5XSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIH1cblxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSB8fCBTQ1JPTExfUkVTVE9SQVRJT05fU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KHNhdmVkU2Nyb2xsUG9zaXRpb25zKSk7XG4gICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSBcImF1dG9cIjtcbiAgfSwgW3N0b3JhZ2VLZXksIGdldEtleSwgbmF2aWdhdGlvbi5zdGF0ZSwgbG9jYXRpb24sIG1hdGNoZXNdKSk7IC8vIFJlYWQgaW4gYW55IHNhdmVkIHNjcm9sbCBsb2NhdGlvbnNcblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCBzZXNzaW9uUG9zaXRpb25zID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5IHx8IFNDUk9MTF9SRVNUT1JBVElPTl9TVE9SQUdFX0tFWSk7XG5cbiAgICAgICAgaWYgKHNlc3Npb25Qb3NpdGlvbnMpIHtcbiAgICAgICAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IEpTT04ucGFyc2Uoc2Vzc2lvblBvc2l0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHsvLyBuby1vcCwgdXNlIGRlZmF1bHQgZW1wdHkgb2JqZWN0XG4gICAgICB9XG4gICAgfSwgW3N0b3JhZ2VLZXldKTsgLy8gRW5hYmxlIHNjcm9sbCByZXN0b3JhdGlvbiBpbiB0aGUgcm91dGVyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgICAgbGV0IGRpc2FibGVTY3JvbGxSZXN0b3JhdGlvbiA9IHJvdXRlciA9PSBudWxsID8gdm9pZCAwIDogcm91dGVyLmVuYWJsZVNjcm9sbFJlc3RvcmF0aW9uKHNhdmVkU2Nyb2xsUG9zaXRpb25zLCAoKSA9PiB3aW5kb3cuc2Nyb2xsWSwgZ2V0S2V5KTtcbiAgICAgIHJldHVybiAoKSA9PiBkaXNhYmxlU2Nyb2xsUmVzdG9yYXRpb24gJiYgZGlzYWJsZVNjcm9sbFJlc3RvcmF0aW9uKCk7XG4gICAgfSwgW3JvdXRlciwgZ2V0S2V5XSk7IC8vIFJlc3RvcmUgc2Nyb2xsaW5nIHdoZW4gc3RhdGUucmVzdG9yZVNjcm9sbFBvc2l0aW9uIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcblxuICAgIFJlYWN0LnVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBFeHBsaWNpdCBmYWxzZSBtZWFucyBkb24ndCBkbyBhbnl0aGluZyAodXNlZCBmb3Igc3VibWlzc2lvbnMpXG4gICAgICBpZiAocmVzdG9yZVNjcm9sbFBvc2l0aW9uID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIGJlZW4gaGVyZSBiZWZvcmUsIHNjcm9sbCB0byBpdFxuXG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdG9yZVNjcm9sbFBvc2l0aW9uID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCByZXN0b3JlU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIHRyeSB0byBzY3JvbGwgdG8gdGhlIGhhc2hcblxuXG4gICAgICBpZiAobG9jYXRpb24uaGFzaCkge1xuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsb2NhdGlvbi5oYXNoLnNsaWNlKDEpKTtcblxuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICBlbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEb24ndCByZXNldCBpZiB0aGlzIG5hdmlnYXRpb24gb3B0ZWQgb3V0XG5cblxuICAgICAgaWYgKHByZXZlbnRTY3JvbGxSZXNldCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIG90aGVyd2lzZSBnbyB0byB0aGUgdG9wIG9uIG5ldyBsb2NhdGlvbnNcblxuXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgfSwgW2xvY2F0aW9uLCByZXN0b3JlU2Nyb2xsUG9zaXRpb24sIHByZXZlbnRTY3JvbGxSZXNldF0pO1xuICB9XG59XG4vKipcbiAqIFNldHVwIGEgY2FsbGJhY2sgdG8gYmUgZmlyZWQgb24gdGhlIHdpbmRvdydzIGBiZWZvcmV1bmxvYWRgIGV2ZW50LiBUaGlzIGlzXG4gKiB1c2VmdWwgZm9yIHNhdmluZyBzb21lIGRhdGEgdG8gYHdpbmRvdy5sb2NhbFN0b3JhZ2VgIGp1c3QgYmVmb3JlIHRoZSBwYWdlXG4gKiByZWZyZXNoZXMuXG4gKlxuICogTm90ZTogVGhlIGBjYWxsYmFja2AgYXJndW1lbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24gY3JlYXRlZCB3aXRoXG4gKiBgUmVhY3QudXNlQ2FsbGJhY2soKWAuXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VCZWZvcmVVbmxvYWQoY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgbGV0IHtcbiAgICBjYXB0dXJlXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvcHRzID0gY2FwdHVyZSAhPSBudWxsID8ge1xuICAgICAgY2FwdHVyZVxuICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgfTtcbiAgfSwgW2NhbGxiYWNrLCBjYXB0dXJlXSk7XG59XG4vKipcbiAqIFNldHVwIGEgY2FsbGJhY2sgdG8gYmUgZmlyZWQgb24gdGhlIHdpbmRvdydzIGBwYWdlaGlkZWAgZXZlbnQuIFRoaXMgaXNcbiAqIHVzZWZ1bCBmb3Igc2F2aW5nIHNvbWUgZGF0YSB0byBgd2luZG93LmxvY2FsU3RvcmFnZWAganVzdCBiZWZvcmUgdGhlIHBhZ2VcbiAqIHJlZnJlc2hlcy4gIFRoaXMgZXZlbnQgaXMgYmV0dGVyIHN1cHBvcnRlZCB0aGFuIGJlZm9yZXVubG9hZCBhY3Jvc3MgYnJvd3NlcnMuXG4gKlxuICogTm90ZTogVGhlIGBjYWxsYmFja2AgYXJndW1lbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24gY3JlYXRlZCB3aXRoXG4gKiBgUmVhY3QudXNlQ2FsbGJhY2soKWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlUGFnZUhpZGUoY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgbGV0IHtcbiAgICBjYXB0dXJlXG4gIH0gPSBvcHRpb25zIHx8IHt9O1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBvcHRzID0gY2FwdHVyZSAhPSBudWxsID8ge1xuICAgICAgY2FwdHVyZVxuICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwYWdlaGlkZVwiLCBjYWxsYmFjaywgb3B0cyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicGFnZWhpZGVcIiwgY2FsbGJhY2ssIG9wdHMpO1xuICAgIH07XG4gIH0sIFtjYWxsYmFjaywgY2FwdHVyZV0pO1xufVxuLyoqXG4gKiBXcmFwcGVyIGFyb3VuZCB1c2VCbG9ja2VyIHRvIHNob3cgYSB3aW5kb3cuY29uZmlybSBwcm9tcHQgdG8gdXNlcnMgaW5zdGVhZFxuICogb2YgYnVpbGRpbmcgYSBjdXN0b20gVUkgd2l0aCB1c2VCbG9ja2VyLlxuICpcbiAqIFdhcm5pbmc6IFRoaXMgaGFzICphIGxvdCBvZiByb3VnaCBlZGdlcyogYW5kIGJlaGF2ZXMgdmVyeSBkaWZmZXJlbnRseSAoYW5kXG4gKiB2ZXJ5IGluY29ycmVjdGx5IGluIHNvbWUgY2FzZXMpIGFjcm9zcyBicm93c2VycyBpZiB1c2VyIGNsaWNrIGFkZGl0aW9uXG4gKiBiYWNrL2ZvcndhcmQgbmF2aWdhdGlvbnMgd2hpbGUgdGhlIGNvbmZpcm0gaXMgb3Blbi4gIFVzZSBhdCB5b3VyIG93biByaXNrLlxuICovXG5cblxuZnVuY3Rpb24gdXNlUHJvbXB0KF9yZWY4KSB7XG4gIGxldCB7XG4gICAgd2hlbixcbiAgICBtZXNzYWdlXG4gIH0gPSBfcmVmODtcbiAgbGV0IGJsb2NrZXIgPSB1bnN0YWJsZV91c2VCbG9ja2VyKHdoZW4pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChibG9ja2VyLnN0YXRlID09PSBcImJsb2NrZWRcIiAmJiAhd2hlbikge1xuICAgICAgYmxvY2tlci5yZXNldCgpO1xuICAgIH1cbiAgfSwgW2Jsb2NrZXIsIHdoZW5dKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIpIHtcbiAgICAgIGxldCBwcm9jZWVkID0gd2luZG93LmNvbmZpcm0obWVzc2FnZSk7XG5cbiAgICAgIGlmIChwcm9jZWVkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoYmxvY2tlci5wcm9jZWVkLCAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJsb2NrZXIucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtibG9ja2VyLCBtZXNzYWdlXSk7XG59XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIFV0aWxzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mdW5jdGlvbiB3YXJuaW5nKGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIpIGNvbnNvbGUud2FybihtZXNzYWdlKTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCBSb3V0ZXIhXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBlcnJvciBpcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB5b3UgY2FuIG1vcmUgZWFzaWx5XG4gICAgICAvLyBmaW5kIHRoZSBzb3VyY2UgZm9yIGEgd2FybmluZyB0aGF0IGFwcGVhcnMgaW4gdGhlIGNvbnNvbGUgYnlcbiAgICAgIC8vIGVuYWJsaW5nIFwicGF1c2Ugb24gZXhjZXB0aW9uc1wiIGluIHlvdXIgSmF2YVNjcmlwdCBkZWJ1Z2dlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufSAvLyNlbmRyZWdpb25cblxuZXhwb3J0IHsgQnJvd3NlclJvdXRlciwgRm9ybSwgSGFzaFJvdXRlciwgTGluaywgTmF2TGluaywgU2Nyb2xsUmVzdG9yYXRpb24sIHVzZVNjcm9sbFJlc3RvcmF0aW9uIGFzIFVOU0FGRV91c2VTY3JvbGxSZXN0b3JhdGlvbiwgY3JlYXRlQnJvd3NlclJvdXRlciwgY3JlYXRlSGFzaFJvdXRlciwgY3JlYXRlU2VhcmNoUGFyYW1zLCBIaXN0b3J5Um91dGVyIGFzIHVuc3RhYmxlX0hpc3RvcnlSb3V0ZXIsIHVzZVByb21wdCBhcyB1bnN0YWJsZV91c2VQcm9tcHQsIHVzZUJlZm9yZVVubG9hZCwgdXNlRmV0Y2hlciwgdXNlRmV0Y2hlcnMsIHVzZUZvcm1BY3Rpb24sIHVzZUxpbmtDbGlja0hhbmRsZXIsIHVzZVNlYXJjaFBhcmFtcywgdXNlU3VibWl0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIi8qKlxuICogUmVhY3QgUm91dGVyIHY2LjguMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5pbXBvcnQgeyBpbnZhcmlhbnQsIGpvaW5QYXRocywgbWF0Y2hQYXRoLCBVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMsIHdhcm5pbmcsIHJlc29sdmVUbywgcGFyc2VQYXRoLCBtYXRjaFJvdXRlcywgQWN0aW9uLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgY3JlYXRlTWVtb3J5SGlzdG9yeSwgc3RyaXBCYXNlbmFtZSwgQWJvcnRlZERlZmVycmVkRXJyb3IsIGNyZWF0ZVJvdXRlciB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmV4cG9ydCB7IEFib3J0ZWREZWZlcnJlZEVycm9yLCBBY3Rpb24gYXMgTmF2aWdhdGlvblR5cGUsIGNyZWF0ZVBhdGgsIGRlZmVyLCBnZW5lcmF0ZVBhdGgsIGlzUm91dGVFcnJvclJlc3BvbnNlLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBwYXJzZVBhdGgsIHJlZGlyZWN0LCByZXNvbHZlUGF0aCB9IGZyb20gJ0ByZW1peC1ydW4vcm91dGVyJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5cbmZ1bmN0aW9uIGlzUG9seWZpbGwoeCwgeSkge1xuICByZXR1cm4geCA9PT0geSAmJiAoeCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkpIHx8IHggIT09IHggJiYgeSAhPT0geSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxuICA7XG59XG5cbmNvbnN0IGlzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gXCJmdW5jdGlvblwiID8gT2JqZWN0LmlzIDogaXNQb2x5ZmlsbDsgLy8gSW50ZW50aW9uYWxseSBub3QgdXNpbmcgbmFtZWQgaW1wb3J0cyBiZWNhdXNlIFJvbGx1cCB1c2VzIGR5bmFtaWNcbi8vIGRpc3BhdGNoIGZvciBDb21tb25KUyBpbnRlcm9wIG5hbWVkIGltcG9ydHMuXG5cbmNvbnN0IHtcbiAgdXNlU3RhdGUsXG4gIHVzZUVmZmVjdCxcbiAgdXNlTGF5b3V0RWZmZWN0LFxuICB1c2VEZWJ1Z1ZhbHVlXG59ID0gUmVhY3Q7XG5sZXQgZGlkV2Fybk9sZDE4QWxwaGEgPSBmYWxzZTtcbmxldCBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9IGZhbHNlOyAvLyBEaXNjbGFpbWVyOiBUaGlzIHNoaW0gYnJlYWtzIG1hbnkgb2YgdGhlIHJ1bGVzIG9mIFJlYWN0LCBhbmQgb25seSB3b3Jrc1xuLy8gYmVjYXVzZSBvZiBhIHZlcnkgcGFydGljdWxhciBzZXQgb2YgaW1wbGVtZW50YXRpb24gZGV0YWlscyBhbmQgYXNzdW1wdGlvbnNcbi8vIC0tIGNoYW5nZSBhbnkgb25lIG9mIHRoZW0gYW5kIGl0IHdpbGwgYnJlYWsuIFRoZSBtb3N0IGltcG9ydGFudCBhc3N1bXB0aW9uXG4vLyBpcyB0aGF0IHVwZGF0ZXMgYXJlIGFsd2F5cyBzeW5jaHJvbm91cywgYmVjYXVzZSBjb25jdXJyZW50IHJlbmRlcmluZyBpc1xuLy8gb25seSBhdmFpbGFibGUgaW4gdmVyc2lvbnMgb2YgUmVhY3QgdGhhdCBhbHNvIGhhdmUgYSBidWlsdC1pblxuLy8gdXNlU3luY0V4dGVybmFsU3RvcmUgQVBJLiBBbmQgd2Ugb25seSB1c2UgdGhpcyBzaGltIHdoZW4gdGhlIGJ1aWx0LWluIEFQSVxuLy8gZG9lcyBub3QgZXhpc3QuXG4vL1xuLy8gRG8gbm90IGFzc3VtZSB0aGF0IHRoZSBjbGV2ZXIgaGFja3MgdXNlZCBieSB0aGlzIGhvb2sgYWxzbyB3b3JrIGluIGdlbmVyYWwuXG4vLyBUaGUgcG9pbnQgb2YgdGhpcyBzaGltIGlzIHRvIHJlcGxhY2UgdGhlIG5lZWQgZm9yIGhhY2tzIGJ5IG90aGVyIGxpYnJhcmllcy5cblxuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMihzdWJzY3JpYmUsIGdldFNuYXBzaG90LCAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4vLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbi8vIHdpbGwgbmVlZCB0byB0cmFjayB0aGF0IHRoZW1zZWx2ZXMgYW5kIHJldHVybiB0aGUgY29ycmVjdCB2YWx1ZVxuLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghZGlkV2Fybk9sZDE4QWxwaGEpIHtcbiAgICAgIGlmIChcInN0YXJ0VHJhbnNpdGlvblwiIGluIFJlYWN0KSB7XG4gICAgICAgIGRpZFdhcm5PbGQxOEFscGhhID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIllvdSBhcmUgdXNpbmcgYW4gb3V0ZGF0ZWQsIHByZS1yZWxlYXNlIGFscGhhIG9mIFJlYWN0IDE4IHRoYXQgXCIgKyBcImRvZXMgbm90IHN1cHBvcnQgdXNlU3luY0V4dGVybmFsU3RvcmUuIFRoZSBcIiArIFwidXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUgc2hpbSB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseS4gVXBncmFkZSBcIiArIFwidG8gYSBuZXdlciBwcmUtcmVsZWFzZS5cIik7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFJlYWQgdGhlIGN1cnJlbnQgc25hcHNob3QgZnJvbSB0aGUgc3RvcmUgb24gZXZlcnkgcmVuZGVyLiBBZ2FpbiwgdGhpc1xuICAvLyBicmVha3MgdGhlIHJ1bGVzIG9mIFJlYWN0LCBhbmQgb25seSB3b3JrcyBoZXJlIGJlY2F1c2Ugb2Ygc3BlY2lmaWNcbiAgLy8gaW1wbGVtZW50YXRpb24gZGV0YWlscywgbW9zdCBpbXBvcnRhbnRseSB0aGF0IHVwZGF0ZXMgYXJlXG4gIC8vIGFsd2F5cyBzeW5jaHJvbm91cy5cblxuXG4gIGNvbnN0IHZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKCFkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCkge1xuICAgICAgY29uc3QgY2FjaGVkVmFsdWUgPSBnZXRTbmFwc2hvdCgpO1xuXG4gICAgICBpZiAoIWlzKHZhbHVlLCBjYWNoZWRWYWx1ZSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSByZXN1bHQgb2YgZ2V0U25hcHNob3Qgc2hvdWxkIGJlIGNhY2hlZCB0byBhdm9pZCBhbiBpbmZpbml0ZSBsb29wXCIpO1xuICAgICAgICBkaWRXYXJuVW5jYWNoZWRHZXRTbmFwc2hvdCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIEJlY2F1c2UgdXBkYXRlcyBhcmUgc3luY2hyb25vdXMsIHdlIGRvbid0IHF1ZXVlIHRoZW0uIEluc3RlYWQgd2UgZm9yY2UgYVxuICAvLyByZS1yZW5kZXIgd2hlbmV2ZXIgdGhlIHN1YnNjcmliZWQgc3RhdGUgY2hhbmdlcyBieSB1cGRhdGluZyBhbiBzb21lXG4gIC8vIGFyYml0cmFyeSB1c2VTdGF0ZSBob29rLiBUaGVuLCBkdXJpbmcgcmVuZGVyLCB3ZSBjYWxsIGdldFNuYXBzaG90IHRvIHJlYWRcbiAgLy8gdGhlIGN1cnJlbnQgdmFsdWUuXG4gIC8vXG4gIC8vIEJlY2F1c2Ugd2UgZG9uJ3QgYWN0dWFsbHkgdXNlIHRoZSBzdGF0ZSByZXR1cm5lZCBieSB0aGUgdXNlU3RhdGUgaG9vaywgd2VcbiAgLy8gY2FuIHNhdmUgYSBiaXQgb2YgbWVtb3J5IGJ5IHN0b3Jpbmcgb3RoZXIgc3R1ZmYgaW4gdGhhdCBzbG90LlxuICAvL1xuICAvLyBUbyBpbXBsZW1lbnQgdGhlIGVhcmx5IGJhaWxvdXQsIHdlIG5lZWQgdG8gdHJhY2sgc29tZSB0aGluZ3Mgb24gYSBtdXRhYmxlXG4gIC8vIG9iamVjdC4gVXN1YWxseSwgd2Ugd291bGQgcHV0IHRoYXQgaW4gYSB1c2VSZWYgaG9vaywgYnV0IHdlIGNhbiBzdGFzaCBpdCBpblxuICAvLyBvdXIgdXNlU3RhdGUgaG9vayBpbnN0ZWFkLlxuICAvL1xuICAvLyBUbyBmb3JjZSBhIHJlLXJlbmRlciwgd2UgY2FsbCBmb3JjZVVwZGF0ZSh7aW5zdH0pLiBUaGF0IHdvcmtzIGJlY2F1c2UgdGhlXG4gIC8vIG5ldyBvYmplY3QgYWx3YXlzIGZhaWxzIGFuIGVxdWFsaXR5IGNoZWNrLlxuXG5cbiAgY29uc3QgW3tcbiAgICBpbnN0XG4gIH0sIGZvcmNlVXBkYXRlXSA9IHVzZVN0YXRlKHtcbiAgICBpbnN0OiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGdldFNuYXBzaG90XG4gICAgfVxuICB9KTsgLy8gVHJhY2sgdGhlIGxhdGVzdCBnZXRTbmFwc2hvdCBmdW5jdGlvbiB3aXRoIGEgcmVmLiBUaGlzIG5lZWRzIHRvIGJlIHVwZGF0ZWRcbiAgLy8gaW4gdGhlIGxheW91dCBwaGFzZSBzbyB3ZSBjYW4gYWNjZXNzIGl0IGR1cmluZyB0aGUgdGVhcmluZyBjaGVjayB0aGF0XG4gIC8vIGhhcHBlbnMgb24gc3Vic2NyaWJlLlxuXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICAgIGluc3QuZ2V0U25hcHNob3QgPSBnZXRTbmFwc2hvdDsgLy8gV2hlbmV2ZXIgZ2V0U25hcHNob3Qgb3Igc3Vic2NyaWJlIGNoYW5nZXMsIHdlIG5lZWQgdG8gY2hlY2sgaW4gdGhlXG4gICAgLy8gY29tbWl0IHBoYXNlIGlmIHRoZXJlIHdhcyBhbiBpbnRlcmxlYXZlZCBtdXRhdGlvbi4gSW4gY29uY3VycmVudCBtb2RlXG4gICAgLy8gdGhpcyBjYW4gaGFwcGVuIGFsbCB0aGUgdGltZSwgYnV0IGV2ZW4gaW4gc3luY2hyb25vdXMgbW9kZSwgYW4gZWFybGllclxuICAgIC8vIGVmZmVjdCBtYXkgaGF2ZSBtdXRhdGVkIHRoZSBzdG9yZS5cblxuICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAvLyBGb3JjZSBhIHJlLXJlbmRlci5cbiAgICAgIGZvcmNlVXBkYXRlKHtcbiAgICAgICAgaW5zdFxuICAgICAgfSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgfSwgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgZm9yIGNoYW5nZXMgcmlnaHQgYmVmb3JlIHN1YnNjcmliaW5nLiBTdWJzZXF1ZW50IGNoYW5nZXMgd2lsbCBiZVxuICAgIC8vIGRldGVjdGVkIGluIHRoZSBzdWJzY3JpcHRpb24gaGFuZGxlci5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3RcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN0b3JlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgLy8gVE9ETzogQmVjYXVzZSB0aGVyZSBpcyBubyBjcm9zcy1yZW5kZXJlciBBUEkgZm9yIGJhdGNoaW5nIHVwZGF0ZXMsIGl0J3NcbiAgICAgIC8vIHVwIHRvIHRoZSBjb25zdW1lciBvZiB0aGlzIGxpYnJhcnkgdG8gd3JhcCB0aGVpciBzdWJzY3JpcHRpb24gZXZlbnRcbiAgICAgIC8vIHdpdGggdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMuIFNob3VsZCB3ZSB0cnkgdG8gZGV0ZWN0IHdoZW4gdGhpcyBpc24ndFxuICAgICAgLy8gdGhlIGNhc2UgYW5kIHByaW50IGEgd2FybmluZyBpbiBkZXZlbG9wbWVudD9cbiAgICAgIC8vIFRoZSBzdG9yZSBjaGFuZ2VkLiBDaGVjayBpZiB0aGUgc25hcHNob3QgY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCB0aW1lIHdlXG4gICAgICAvLyByZWFkIGZyb20gdGhlIHN0b3JlLlxuICAgICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICAgIGZvcmNlVXBkYXRlKHtcbiAgICAgICAgICBpbnN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07IC8vIFN1YnNjcmliZSB0byB0aGUgc3RvcmUgYW5kIHJldHVybiBhIGNsZWFuLXVwIGZ1bmN0aW9uLlxuXG5cbiAgICByZXR1cm4gc3Vic2NyaWJlKGhhbmRsZVN0b3JlQ2hhbmdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbc3Vic2NyaWJlXSk7XG4gIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkge1xuICBjb25zdCBsYXRlc3RHZXRTbmFwc2hvdCA9IGluc3QuZ2V0U25hcHNob3Q7XG4gIGNvbnN0IHByZXZWYWx1ZSA9IGluc3QudmFsdWU7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBuZXh0VmFsdWUgPSBsYXRlc3RHZXRTbmFwc2hvdCgpO1xuICAgIHJldHVybiAhaXMocHJldlZhbHVlLCBuZXh0VmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGZsb3dcbiAqL1xuZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICAvLyBOb3RlOiBUaGUgc2hpbSBkb2VzIG5vdCB1c2UgZ2V0U2VydmVyU25hcHNob3QsIGJlY2F1c2UgcHJlLTE4IHZlcnNpb25zIG9mXG4gIC8vIFJlYWN0IGRvIG5vdCBleHBvc2UgYSB3YXkgdG8gY2hlY2sgaWYgd2UncmUgaHlkcmF0aW5nLiBTbyB1c2VycyBvZiB0aGUgc2hpbVxuICAvLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbiAgLy8gZnJvbSBgZ2V0U25hcHNob3RgLlxuICByZXR1cm4gZ2V0U25hcHNob3QoKTtcbn1cblxuLyoqXG4gKiBJbmxpbmVkIGludG8gdGhlIHJlYWN0LXJvdXRlciByZXBvIHNpbmNlIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIGRvZXMgbm90XG4gKiBwcm92aWRlIGEgVU1ELWNvbXBhdGlibGUgcGFja2FnZSwgc28gd2UgbmVlZCB0aGlzIHRvIGJlIGFibGUgdG8gZGlzdHJpYnV0ZVxuICogVU1EIHJlYWN0LXJvdXRlciBidW5kbGVzXG4gKi9cbmNvbnN0IGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIpO1xuY29uc3QgaXNTZXJ2ZXJFbnZpcm9ubWVudCA9ICFjYW5Vc2VET007XG5jb25zdCBzaGltID0gaXNTZXJ2ZXJFbnZpcm9ubWVudCA/IHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEgOiB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQyO1xuY29uc3QgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBcInVzZVN5bmNFeHRlcm5hbFN0b3JlXCIgaW4gUmVhY3QgPyAobW9kdWxlID0+IG1vZHVsZS51c2VTeW5jRXh0ZXJuYWxTdG9yZSkoUmVhY3QpIDogc2hpbTtcblxuY29uc3QgRGF0YVJvdXRlckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBEYXRhUm91dGVyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclwiO1xufVxuXG5jb25zdCBEYXRhUm91dGVyU3RhdGVDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlclN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiRGF0YVJvdXRlclN0YXRlXCI7XG59XG5cbmNvbnN0IEF3YWl0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIEF3YWl0Q29udGV4dC5kaXNwbGF5TmFtZSA9IFwiQXdhaXRcIjtcbn1cblxuY29uc3QgTmF2aWdhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBOYXZpZ2F0aW9uQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiTmF2aWdhdGlvblwiO1xufVxuXG5jb25zdCBMb2NhdGlvbkNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBMb2NhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkxvY2F0aW9uXCI7XG59XG5cbmNvbnN0IFJvdXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgb3V0bGV0OiBudWxsLFxuICBtYXRjaGVzOiBbXVxufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUm91dGVDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZVwiO1xufVxuXG5jb25zdCBSb3V0ZUVycm9yQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlRXJyb3JDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJSb3V0ZUVycm9yXCI7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVsbCBocmVmIGZvciB0aGUgZ2l2ZW4gXCJ0b1wiIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCBmb3IgYnVpbGRpbmdcbiAqIGN1c3RvbSBsaW5rcyB0aGF0IGFyZSBhbHNvIGFjY2Vzc2libGUgYW5kIHByZXNlcnZlIHJpZ2h0LWNsaWNrIGJlaGF2aW9yLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLWhyZWZcbiAqL1xuXG5mdW5jdGlvbiB1c2VIcmVmKHRvLCBfdGVtcCkge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUhyZWYoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHtcbiAgICBoYXNoLFxuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFxuICB9ID0gdXNlUmVzb2x2ZWRQYXRoKHRvLCB7XG4gICAgcmVsYXRpdmVcbiAgfSk7XG4gIGxldCBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lOyAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lIHByaW9yXG4gIC8vIHRvIGNyZWF0aW5nIHRoZSBocmVmLiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiBqdXN0IHVzZSB0aGUgcmF3XG4gIC8vIGJhc2VuYW1lIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGUgcHJlc2VuY2VcbiAgLy8gb2YgYSB0cmFpbGluZyBzbGFzaCBvbiByb290IGxpbmtzXG5cbiAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgIGpvaW5lZFBhdGhuYW1lID0gcGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRobmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIG5hdmlnYXRvci5jcmVhdGVIcmVmKHtcbiAgICBwYXRobmFtZTogam9pbmVkUGF0aG5hbWUsXG4gICAgc2VhcmNoLFxuICAgIGhhc2hcbiAgfSk7XG59XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYSA8Um91dGVyPi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1pbi1yb3V0ZXItY29udGV4dFxuICovXG5cbmZ1bmN0aW9uIHVzZUluUm91dGVyQ29udGV4dCgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoTG9jYXRpb25Db250ZXh0KSAhPSBudWxsO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxvY2F0aW9uIG9iamVjdCwgd2hpY2ggcmVwcmVzZW50cyB0aGUgY3VycmVudCBVUkwgaW4gd2ViXG4gKiBicm93c2Vycy5cbiAqXG4gKiBOb3RlOiBJZiB5b3UncmUgdXNpbmcgdGhpcyBpdCBtYXkgbWVhbiB5b3UncmUgZG9pbmcgc29tZSBvZiB5b3VyIG93blxuICogXCJyb3V0aW5nXCIgaW4geW91ciBhcHAsIGFuZCB3ZSdkIGxpa2UgdG8ga25vdyB3aGF0IHlvdXIgdXNlIGNhc2UgaXMuIFdlIG1heVxuICogYmUgYWJsZSB0byBwcm92aWRlIHNvbWV0aGluZyBoaWdoZXItbGV2ZWwgdG8gYmV0dGVyIHN1aXQgeW91ciBuZWVkcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1sb2NhdGlvblxuICovXG5cbmZ1bmN0aW9uIHVzZUxvY2F0aW9uKCkge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTG9jYXRpb24oKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubG9jYXRpb247XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgbmF2aWdhdGlvbiBhY3Rpb24gd2hpY2ggZGVzY3JpYmVzIGhvdyB0aGUgcm91dGVyIGNhbWUgdG9cbiAqIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBlaXRoZXIgYnkgYSBwb3AsIHB1c2gsIG9yIHJlcGxhY2Ugb24gdGhlIGhpc3Rvcnkgc3RhY2suXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGlvbi10eXBlXG4gKi9cblxuZnVuY3Rpb24gdXNlTmF2aWdhdGlvblR5cGUoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkubmF2aWdhdGlvblR5cGU7XG59XG4vKipcbiAqIFJldHVybnMgYSBQYXRoTWF0Y2ggb2JqZWN0IGlmIHRoZSBnaXZlbiBwYXR0ZXJuIG1hdGNoZXMgdGhlIGN1cnJlbnQgVVJMLlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIGNvbXBvbmVudHMgdGhhdCBuZWVkIHRvIGtub3cgXCJhY3RpdmVcIiBzdGF0ZSwgZS5nLlxuICogPE5hdkxpbms+LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW1hdGNoXG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2gocGF0dGVybikge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTWF0Y2goKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgcGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSksIFtwYXRobmFtZSwgcGF0dGVybl0pO1xufVxuLyoqXG4gKiBUaGUgaW50ZXJmYWNlIGZvciB0aGUgbmF2aWdhdGUoKSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHVzZU5hdmlnYXRlKCkuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGltcGVyYXRpdmUgbWV0aG9kIGZvciBjaGFuZ2luZyB0aGUgbG9jYXRpb24uIFVzZWQgYnkgPExpbms+cywgYnV0XG4gKiBtYXkgYWxzbyBiZSB1c2VkIGJ5IG90aGVyIGVsZW1lbnRzIHRvIGNoYW5nZSB0aGUgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gdXNlTmF2aWdhdGUoKSB7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VOYXZpZ2F0ZSgpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKS5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKSk7XG4gIGxldCBhY3RpdmVSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFjdGl2ZVJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfSk7XG4gIGxldCBuYXZpZ2F0ZSA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICh0bywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGFjdGl2ZVJlZi5jdXJyZW50LCBcIllvdSBzaG91bGQgY2FsbCBuYXZpZ2F0ZSgpIGluIGEgUmVhY3QudXNlRWZmZWN0KCksIG5vdCB3aGVuIFwiICsgXCJ5b3VyIGNvbXBvbmVudCBpcyBmaXJzdCByZW5kZXJlZC5cIikgOiB2b2lkIDA7XG4gICAgaWYgKCFhY3RpdmVSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiB0byA9PT0gXCJudW1iZXJcIikge1xuICAgICAgbmF2aWdhdG9yLmdvKHRvKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lLCBvcHRpb25zLnJlbGF0aXZlID09PSBcInBhdGhcIik7IC8vIElmIHdlJ3JlIG9wZXJhdGluZyB3aXRoaW4gYSBiYXNlbmFtZSwgcHJlcGVuZCBpdCB0byB0aGUgcGF0aG5hbWUgcHJpb3JcbiAgICAvLyB0byBoYW5kaW5nIG9mZiB0byBoaXN0b3J5LiAgSWYgdGhpcyBpcyBhIHJvb3QgbmF2aWdhdGlvbiwgdGhlbiB3ZVxuICAgIC8vIG5hdmlnYXRlIHRvIHRoZSByYXcgYmFzZW5hbWUgd2hpY2ggYWxsb3dzIHRoZSBiYXNlbmFtZSB0byBoYXZlIGZ1bGxcbiAgICAvLyBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBsaW5rc1xuXG4gICAgaWYgKGJhc2VuYW1lICE9PSBcIi9cIikge1xuICAgICAgcGF0aC5wYXRobmFtZSA9IHBhdGgucGF0aG5hbWUgPT09IFwiL1wiID8gYmFzZW5hbWUgOiBqb2luUGF0aHMoW2Jhc2VuYW1lLCBwYXRoLnBhdGhuYW1lXSk7XG4gICAgfVxuXG4gICAgKCEhb3B0aW9ucy5yZXBsYWNlID8gbmF2aWdhdG9yLnJlcGxhY2UgOiBuYXZpZ2F0b3IucHVzaCkocGF0aCwgb3B0aW9ucy5zdGF0ZSwgb3B0aW9ucyk7XG4gIH0sIFtiYXNlbmFtZSwgbmF2aWdhdG9yLCByb3V0ZVBhdGhuYW1lc0pzb24sIGxvY2F0aW9uUGF0aG5hbWVdKTtcbiAgcmV0dXJuIG5hdmlnYXRlO1xufVxuY29uc3QgT3V0bGV0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IChpZiBwcm92aWRlZCkgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utb3V0bGV0LWNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VPdXRsZXRDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChPdXRsZXRDb250ZXh0KTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBmb3IgdGhlIGNoaWxkIHJvdXRlIGF0IHRoaXMgbGV2ZWwgb2YgdGhlIHJvdXRlXG4gKiBoaWVyYXJjaHkuIFVzZWQgaW50ZXJuYWxseSBieSA8T3V0bGV0PiB0byByZW5kZXIgY2hpbGQgcm91dGVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW91dGxldFxuICovXG5cbmZ1bmN0aW9uIHVzZU91dGxldChjb250ZXh0KSB7XG4gIGxldCBvdXRsZXQgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCkub3V0bGV0O1xuXG4gIGlmIChvdXRsZXQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoT3V0bGV0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICB9LCBvdXRsZXQpO1xuICB9XG5cbiAgcmV0dXJuIG91dGxldDtcbn1cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3Qgb2Yga2V5L3ZhbHVlIHBhaXJzIG9mIHRoZSBkeW5hbWljIHBhcmFtcyBmcm9tIHRoZSBjdXJyZW50XG4gKiBVUkwgdGhhdCB3ZXJlIG1hdGNoZWQgYnkgdGhlIHJvdXRlIHBhdGguXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcGFyYW1zXG4gKi9cblxuZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHJvdXRlTWF0Y2ggPSBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIHJldHVybiByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXJhbXMgOiB7fTtcbn1cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhdGhuYW1lIG9mIHRoZSBnaXZlbiBgdG9gIHZhbHVlIGFnYWluc3QgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtcmVzb2x2ZWQtcGF0aFxuICovXG5cbmZ1bmN0aW9uIHVzZVJlc29sdmVkUGF0aCh0bywgX3RlbXAyKSB7XG4gIGxldCB7XG4gICAgcmVsYXRpdmVcbiAgfSA9IF90ZW1wMiA9PT0gdm9pZCAwID8ge30gOiBfdGVtcDI7XG4gIGxldCB7XG4gICAgbWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvblBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgcm91dGVQYXRobmFtZXNKc29uID0gSlNPTi5zdHJpbmdpZnkoVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpLm1hcChtYXRjaCA9PiBtYXRjaC5wYXRobmFtZUJhc2UpKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gcmVzb2x2ZVRvKHRvLCBKU09OLnBhcnNlKHJvdXRlUGF0aG5hbWVzSnNvbiksIGxvY2F0aW9uUGF0aG5hbWUsIHJlbGF0aXZlID09PSBcInBhdGhcIiksIFt0bywgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lLCByZWxhdGl2ZV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlbGVtZW50IG9mIHRoZSByb3V0ZSB0aGF0IG1hdGNoZWQgdGhlIGN1cnJlbnQgbG9jYXRpb24sIHByZXBhcmVkXG4gKiB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHQgdG8gcmVuZGVyIHRoZSByZW1haW5kZXIgb2YgdGhlIHJvdXRlIHRyZWUuIFJvdXRlXG4gKiBlbGVtZW50cyBpbiB0aGUgdHJlZSBtdXN0IHJlbmRlciBhbiA8T3V0bGV0PiB0byByZW5kZXIgdGhlaXIgY2hpbGQgcm91dGUnc1xuICogZWxlbWVudC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1yb3V0ZXNcbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbkFyZykge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlUm91dGVzKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCBkYXRhUm91dGVyU3RhdGVDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBtYXRjaGVzOiBwYXJlbnRNYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCByb3V0ZU1hdGNoID0gcGFyZW50TWF0Y2hlc1twYXJlbnRNYXRjaGVzLmxlbmd0aCAtIDFdO1xuICBsZXQgcGFyZW50UGFyYW1zID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGFyYW1zIDoge307XG4gIGxldCBwYXJlbnRQYXRobmFtZSA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhdGhuYW1lIDogXCIvXCI7XG4gIGxldCBwYXJlbnRQYXRobmFtZUJhc2UgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZUJhc2UgOiBcIi9cIjtcbiAgbGV0IHBhcmVudFJvdXRlID0gcm91dGVNYXRjaCAmJiByb3V0ZU1hdGNoLnJvdXRlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAvLyBZb3Ugd29uJ3QgZ2V0IGEgd2FybmluZyBhYm91dCAyIGRpZmZlcmVudCA8Um91dGVzPiB1bmRlciBhIDxSb3V0ZT5cbiAgICAvLyB3aXRob3V0IGEgdHJhaWxpbmcgKiwgYnV0IHRoaXMgaXMgYSBiZXN0LWVmZm9ydCB3YXJuaW5nIGFueXdheSBzaW5jZSB3ZVxuICAgIC8vIGNhbm5vdCBldmVuIGdpdmUgdGhlIHdhcm5pbmcgdW5sZXNzIHRoZXkgbGFuZCBhdCB0aGUgcGFyZW50IHJvdXRlLlxuICAgIC8vXG4gICAgLy8gRXhhbXBsZTpcbiAgICAvL1xuICAgIC8vIDxSb3V0ZXM+XG4gICAgLy8gICB7LyogVGhpcyByb3V0ZSBwYXRoIE1VU1QgZW5kIHdpdGggLyogYmVjYXVzZSBvdGhlcndpc2VcbiAgICAvLyAgICAgICBpdCB3aWxsIG5ldmVyIG1hdGNoIC9ibG9nL3Bvc3QvMTIzICovfVxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nXCIgZWxlbWVudD17PEJsb2cgLz59IC8+XG4gICAgLy8gICA8Um91dGUgcGF0aD1cImJsb2cvZmVlZFwiIGVsZW1lbnQ9ezxCbG9nRmVlZCAvPn0gLz5cbiAgICAvLyA8L1JvdXRlcz5cbiAgICAvL1xuICAgIC8vIGZ1bmN0aW9uIEJsb2coKSB7XG4gICAgLy8gICByZXR1cm4gKFxuICAgIC8vICAgICA8Um91dGVzPlxuICAgIC8vICAgICAgIDxSb3V0ZSBwYXRoPVwicG9zdC86aWRcIiBlbGVtZW50PXs8UG9zdCAvPn0gLz5cbiAgICAvLyAgICAgPC9Sb3V0ZXM+XG4gICAgLy8gICApO1xuICAgIC8vIH1cbiAgICBsZXQgcGFyZW50UGF0aCA9IHBhcmVudFJvdXRlICYmIHBhcmVudFJvdXRlLnBhdGggfHwgXCJcIjtcbiAgICB3YXJuaW5nT25jZShwYXJlbnRQYXRobmFtZSwgIXBhcmVudFJvdXRlIHx8IHBhcmVudFBhdGguZW5kc1dpdGgoXCIqXCIpLCBcIllvdSByZW5kZXJlZCBkZXNjZW5kYW50IDxSb3V0ZXM+IChvciBjYWxsZWQgYHVzZVJvdXRlcygpYCkgYXQgXCIgKyAoXCJcXFwiXCIgKyBwYXJlbnRQYXRobmFtZSArIFwiXFxcIiAodW5kZXIgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4pIGJ1dCB0aGUgXCIpICsgXCJwYXJlbnQgcm91dGUgcGF0aCBoYXMgbm8gdHJhaWxpbmcgXFxcIipcXFwiLiBUaGlzIG1lYW5zIGlmIHlvdSBuYXZpZ2F0ZSBcIiArIFwiZGVlcGVyLCB0aGUgcGFyZW50IHdvbid0IG1hdGNoIGFueW1vcmUgYW5kIHRoZXJlZm9yZSB0aGUgY2hpbGQgXCIgKyBcInJvdXRlcyB3aWxsIG5ldmVyIHJlbmRlci5cXG5cXG5cIiArIChcIlBsZWFzZSBjaGFuZ2UgdGhlIHBhcmVudCA8Um91dGUgcGF0aD1cXFwiXCIgKyBwYXJlbnRQYXRoICsgXCJcXFwiPiB0byA8Um91dGUgXCIpICsgKFwicGF0aD1cXFwiXCIgKyAocGFyZW50UGF0aCA9PT0gXCIvXCIgPyBcIipcIiA6IHBhcmVudFBhdGggKyBcIi8qXCIpICsgXCJcXFwiPi5cIikpO1xuICB9XG5cbiAgbGV0IGxvY2F0aW9uRnJvbUNvbnRleHQgPSB1c2VMb2NhdGlvbigpO1xuICBsZXQgbG9jYXRpb247XG5cbiAgaWYgKGxvY2F0aW9uQXJnKSB7XG4gICAgdmFyIF9wYXJzZWRMb2NhdGlvbkFyZyRwYTtcblxuICAgIGxldCBwYXJzZWRMb2NhdGlvbkFyZyA9IHR5cGVvZiBsb2NhdGlvbkFyZyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aChsb2NhdGlvbkFyZykgOiBsb2NhdGlvbkFyZztcbiAgICAhKHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgfHwgKChfcGFyc2VkTG9jYXRpb25BcmckcGEgPSBwYXJzZWRMb2NhdGlvbkFyZy5wYXRobmFtZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9wYXJzZWRMb2NhdGlvbkFyZyRwYS5zdGFydHNXaXRoKHBhcmVudFBhdGhuYW1lQmFzZSkpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJXaGVuIG92ZXJyaWRpbmcgdGhlIGxvY2F0aW9uIHVzaW5nIGA8Um91dGVzIGxvY2F0aW9uPmAgb3IgYHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKWAsIFwiICsgXCJ0aGUgbG9jYXRpb24gcGF0aG5hbWUgbXVzdCBiZWdpbiB3aXRoIHRoZSBwb3J0aW9uIG9mIHRoZSBVUkwgcGF0aG5hbWUgdGhhdCB3YXMgXCIgKyAoXCJtYXRjaGVkIGJ5IGFsbCBwYXJlbnQgcm91dGVzLiBUaGUgY3VycmVudCBwYXRobmFtZSBiYXNlIGlzIFxcXCJcIiArIHBhcmVudFBhdGhuYW1lQmFzZSArIFwiXFxcIiBcIikgKyAoXCJidXQgcGF0aG5hbWUgXFxcIlwiICsgcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUgKyBcIlxcXCIgd2FzIGdpdmVuIGluIHRoZSBgbG9jYXRpb25gIHByb3AuXCIpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbG9jYXRpb24gPSBwYXJzZWRMb2NhdGlvbkFyZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbiA9IGxvY2F0aW9uRnJvbUNvbnRleHQ7XG4gIH1cblxuICBsZXQgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCBcIi9cIjtcbiAgbGV0IHJlbWFpbmluZ1BhdGhuYW1lID0gcGFyZW50UGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhdGhuYW1lIDogcGF0aG5hbWUuc2xpY2UocGFyZW50UGF0aG5hbWVCYXNlLmxlbmd0aCkgfHwgXCIvXCI7XG4gIGxldCBtYXRjaGVzID0gbWF0Y2hSb3V0ZXMocm91dGVzLCB7XG4gICAgcGF0aG5hbWU6IHJlbWFpbmluZ1BhdGhuYW1lXG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKHBhcmVudFJvdXRlIHx8IG1hdGNoZXMgIT0gbnVsbCwgXCJObyByb3V0ZXMgbWF0Y2hlZCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcobWF0Y2hlcyA9PSBudWxsIHx8IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5lbGVtZW50ICE9PSB1bmRlZmluZWQsIFwiTWF0Y2hlZCBsZWFmIHJvdXRlIGF0IGxvY2F0aW9uIFxcXCJcIiArIGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoICsgbG9jYXRpb24uaGFzaCArIFwiXFxcIiBkb2VzIG5vdCBoYXZlIGFuIGVsZW1lbnQuIFwiICsgXCJUaGlzIG1lYW5zIGl0IHdpbGwgcmVuZGVyIGFuIDxPdXRsZXQgLz4gd2l0aCBhIG51bGwgdmFsdWUgYnkgZGVmYXVsdCByZXN1bHRpbmcgaW4gYW4gXFxcImVtcHR5XFxcIiBwYWdlLlwiKSA6IHZvaWQgMDtcbiAgfVxuXG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzICYmIG1hdGNoZXMubWFwKG1hdGNoID0+IE9iamVjdC5hc3NpZ24oe30sIG1hdGNoLCB7XG4gICAgcGFyYW1zOiBPYmplY3QuYXNzaWduKHt9LCBwYXJlbnRQYXJhbXMsIG1hdGNoLnBhcmFtcyksXG4gICAgcGF0aG5hbWU6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZSkucGF0aG5hbWUgOiBtYXRjaC5wYXRobmFtZV0pLFxuICAgIHBhdGhuYW1lQmFzZTogbWF0Y2gucGF0aG5hbWVCYXNlID09PSBcIi9cIiA/IHBhcmVudFBhdGhuYW1lQmFzZSA6IGpvaW5QYXRocyhbcGFyZW50UGF0aG5hbWVCYXNlLCAvLyBSZS1lbmNvZGUgcGF0aG5hbWVzIHRoYXQgd2VyZSBkZWNvZGVkIGluc2lkZSBtYXRjaFJvdXRlc1xuICAgIG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbiA/IG5hdmlnYXRvci5lbmNvZGVMb2NhdGlvbihtYXRjaC5wYXRobmFtZUJhc2UpLnBhdGhuYW1lIDogbWF0Y2gucGF0aG5hbWVCYXNlXSlcbiAgfSkpLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGVDb250ZXh0IHx8IHVuZGVmaW5lZCk7IC8vIFdoZW4gYSB1c2VyIHBhc3NlcyBpbiBhIGBsb2NhdGlvbkFyZ2AsIHRoZSBhc3NvY2lhdGVkIHJvdXRlcyBuZWVkIHRvXG4gIC8vIGJlIHdyYXBwZWQgaW4gYSBuZXcgYExvY2F0aW9uQ29udGV4dC5Qcm92aWRlcmAgaW4gb3JkZXIgZm9yIGB1c2VMb2NhdGlvbmBcbiAgLy8gdG8gdXNlIHRoZSBzY29wZWQgbG9jYXRpb24gaW5zdGVhZCBvZiB0aGUgZ2xvYmFsIGxvY2F0aW9uLlxuXG5cbiAgaWYgKGxvY2F0aW9uQXJnICYmIHJlbmRlcmVkTWF0Y2hlcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGxvY2F0aW9uOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgICAgICBoYXNoOiBcIlwiLFxuICAgICAgICAgIHN0YXRlOiBudWxsLFxuICAgICAgICAgIGtleTogXCJkZWZhdWx0XCJcbiAgICAgICAgfSwgbG9jYXRpb24pLFxuICAgICAgICBuYXZpZ2F0aW9uVHlwZTogQWN0aW9uLlBvcFxuICAgICAgfVxuICAgIH0sIHJlbmRlcmVkTWF0Y2hlcyk7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyZWRNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBEZWZhdWx0RXJyb3JFbGVtZW50KCkge1xuICBsZXQgZXJyb3IgPSB1c2VSb3V0ZUVycm9yKCk7XG4gIGxldCBtZXNzYWdlID0gaXNSb3V0ZUVycm9yUmVzcG9uc2UoZXJyb3IpID8gZXJyb3Iuc3RhdHVzICsgXCIgXCIgKyBlcnJvci5zdGF0dXNUZXh0IDogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBKU09OLnN0cmluZ2lmeShlcnJvcik7XG4gIGxldCBzdGFjayA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5zdGFjayA6IG51bGw7XG4gIGxldCBsaWdodGdyZXkgPSBcInJnYmEoMjAwLDIwMCwyMDAsIDAuNSlcIjtcbiAgbGV0IHByZVN0eWxlcyA9IHtcbiAgICBwYWRkaW5nOiBcIjAuNXJlbVwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHRncmV5XG4gIH07XG4gIGxldCBjb2RlU3R5bGVzID0ge1xuICAgIHBhZGRpbmc6IFwiMnB4IDRweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogbGlnaHRncmV5XG4gIH07XG4gIGxldCBkZXZJbmZvID0gbnVsbDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgZGV2SW5mbyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJcXHVEODNEXFx1RENCRiBIZXkgZGV2ZWxvcGVyIFxcdUQ4M0RcXHVEQzRCXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJZb3UgY2FuIHByb3ZpZGUgYSB3YXkgYmV0dGVyIFVYIHRoYW4gdGhpcyB3aGVuIHlvdXIgYXBwIHRocm93cyBlcnJvcnMgYnkgcHJvdmlkaW5nIHlvdXIgb3duXFx4QTBcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHtcbiAgICAgIHN0eWxlOiBjb2RlU3R5bGVzXG4gICAgfSwgXCJlcnJvckVsZW1lbnRcIiksIFwiIHByb3BzIG9uXFx4QTBcIiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIHtcbiAgICAgIHN0eWxlOiBjb2RlU3R5bGVzXG4gICAgfSwgXCI8Um91dGU+XCIpKSk7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJVbmV4cGVjdGVkIEFwcGxpY2F0aW9uIEVycm9yIVwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIlxuICAgIH1cbiAgfSwgbWVzc2FnZSksIHN0YWNrID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIiwge1xuICAgIHN0eWxlOiBwcmVTdHlsZXNcbiAgfSwgc3RhY2spIDogbnVsbCwgZGV2SW5mbyk7XG59XG5cbmNsYXNzIFJlbmRlckVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uLFxuICAgICAgZXJyb3I6IHByb3BzLmVycm9yXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGVycm9yXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgLy8gV2hlbiB3ZSBnZXQgaW50byBhbiBlcnJvciBzdGF0ZSwgdGhlIHVzZXIgd2lsbCBsaWtlbHkgY2xpY2sgXCJiYWNrXCIgdG8gdGhlXG4gICAgLy8gcHJldmlvdXMgcGFnZSB0aGF0IGRpZG4ndCBoYXZlIGFuIGVycm9yLiBCZWNhdXNlIHRoaXMgd3JhcHMgdGhlIGVudGlyZVxuICAgIC8vIGFwcGxpY2F0aW9uLCB0aGF0IHdpbGwgaGF2ZSBubyBlZmZlY3QtLXRoZSBlcnJvciBwYWdlIGNvbnRpbnVlcyB0byBkaXNwbGF5LlxuICAgIC8vIFRoaXMgZ2l2ZXMgdXMgYSBtZWNoYW5pc20gdG8gcmVjb3ZlciBmcm9tIHRoZSBlcnJvciB3aGVuIHRoZSBsb2NhdGlvbiBjaGFuZ2VzLlxuICAgIC8vXG4gICAgLy8gV2hldGhlciB3ZSdyZSBpbiBhbiBlcnJvciBzdGF0ZSBvciBub3QsIHdlIHVwZGF0ZSB0aGUgbG9jYXRpb24gaW4gc3RhdGVcbiAgICAvLyBzbyB0aGF0IHdoZW4gd2UgYXJlIGluIGFuIGVycm9yIHN0YXRlLCBpdCBnZXRzIHJlc2V0IHdoZW4gYSBuZXcgbG9jYXRpb25cbiAgICAvLyBjb21lcyBpbiBhbmQgdGhlIHVzZXIgcmVjb3ZlcnMgZnJvbSB0aGUgZXJyb3IuXG4gICAgaWYgKHN0YXRlLmxvY2F0aW9uICE9PSBwcm9wcy5sb2NhdGlvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IHByb3BzLmVycm9yLFxuICAgICAgICBsb2NhdGlvbjogcHJvcHMubG9jYXRpb25cbiAgICAgIH07XG4gICAgfSAvLyBJZiB3ZSdyZSBub3QgY2hhbmdpbmcgbG9jYXRpb25zLCBwcmVzZXJ2ZSB0aGUgbG9jYXRpb24gYnV0IHN0aWxsIHN1cmZhY2VcbiAgICAvLyBhbnkgbmV3IGVycm9ycyB0aGF0IG1heSBjb21lIHRocm91Z2guIFdlIHJldGFpbiB0aGUgZXhpc3RpbmcgZXJyb3IsIHdlIGRvXG4gICAgLy8gdGhpcyBiZWNhdXNlIHRoZSBlcnJvciBwcm92aWRlZCBmcm9tIHRoZSBhcHAgc3RhdGUgbWF5IGJlIGNsZWFyZWQgd2l0aG91dFxuICAgIC8vIHRoZSBsb2NhdGlvbiBjaGFuZ2luZy5cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBwcm9wcy5lcnJvciB8fCBzdGF0ZS5lcnJvcixcbiAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvblxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlJlYWN0IFJvdXRlciBjYXVnaHQgdGhlIGZvbGxvd2luZyBlcnJvciBkdXJpbmcgcmVuZGVyXCIsIGVycm9yLCBlcnJvckluZm8pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmVycm9yID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy5yb3V0ZUNvbnRleHRcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUVycm9yQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuZXJyb3IsXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jb21wb25lbnRcbiAgICB9KSkgOiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gUmVuZGVyZWRSb3V0ZShfcmVmKSB7XG4gIGxldCB7XG4gICAgcm91dGVDb250ZXh0LFxuICAgIG1hdGNoLFxuICAgIGNoaWxkcmVuXG4gIH0gPSBfcmVmO1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTsgLy8gVHJhY2sgaG93IGRlZXAgd2UgZ290IGluIG91ciByZW5kZXIgcGFzcyB0byBlbXVsYXRlIFNTUiBjb21wb25lbnREaWRDYXRjaFxuICAvLyBpbiBhIERhdGFTdGF0aWNSb3V0ZXJcblxuICBpZiAoZGF0YVJvdXRlckNvbnRleHQgJiYgZGF0YVJvdXRlckNvbnRleHQuc3RhdGljICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpY0NvbnRleHQgJiYgbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50KSB7XG4gICAgZGF0YVJvdXRlckNvbnRleHQuc3RhdGljQ29udGV4dC5fZGVlcGVzdFJlbmRlcmVkQm91bmRhcnlJZCA9IG1hdGNoLnJvdXRlLmlkO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiByb3V0ZUNvbnRleHRcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBfcmVuZGVyTWF0Y2hlcyhtYXRjaGVzLCBwYXJlbnRNYXRjaGVzLCBkYXRhUm91dGVyU3RhdGUpIHtcbiAgaWYgKHBhcmVudE1hdGNoZXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudE1hdGNoZXMgPSBbXTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzID09IG51bGwpIHtcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlICE9IG51bGwgJiYgZGF0YVJvdXRlclN0YXRlLmVycm9ycykge1xuICAgICAgLy8gRG9uJ3QgYmFpbCBpZiB3ZSBoYXZlIGRhdGEgcm91dGVyIGVycm9ycyBzbyB3ZSBjYW4gcmVuZGVyIHRoZW0gaW4gdGhlXG4gICAgICAvLyBib3VuZGFyeS4gIFVzZSB0aGUgcHJlLW1hdGNoZWQgKG9yIHNoaW1tZWQpIG1hdGNoZXNcbiAgICAgIG1hdGNoZXMgPSBkYXRhUm91dGVyU3RhdGUubWF0Y2hlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IHJlbmRlcmVkTWF0Y2hlcyA9IG1hdGNoZXM7IC8vIElmIHdlIGhhdmUgZGF0YSBlcnJvcnMsIHRyaW0gbWF0Y2hlcyB0byB0aGUgaGlnaGVzdCBlcnJvciBib3VuZGFyeVxuXG4gIGxldCBlcnJvcnMgPSBkYXRhUm91dGVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IGRhdGFSb3V0ZXJTdGF0ZS5lcnJvcnM7XG5cbiAgaWYgKGVycm9ycyAhPSBudWxsKSB7XG4gICAgbGV0IGVycm9ySW5kZXggPSByZW5kZXJlZE1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCAmJiAoZXJyb3JzID09IG51bGwgPyB2b2lkIDAgOiBlcnJvcnNbbS5yb3V0ZS5pZF0pKTtcbiAgICAhKGVycm9ySW5kZXggPj0gMCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiQ291bGQgbm90IGZpbmQgYSBtYXRjaGluZyByb3V0ZSBmb3IgdGhlIGN1cnJlbnQgZXJyb3JzOiBcIiArIGVycm9ycykgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIHJlbmRlcmVkTWF0Y2hlcyA9IHJlbmRlcmVkTWF0Y2hlcy5zbGljZSgwLCBNYXRoLm1pbihyZW5kZXJlZE1hdGNoZXMubGVuZ3RoLCBlcnJvckluZGV4ICsgMSkpO1xuICB9XG5cbiAgcmV0dXJuIHJlbmRlcmVkTWF0Y2hlcy5yZWR1Y2VSaWdodCgob3V0bGV0LCBtYXRjaCwgaW5kZXgpID0+IHtcbiAgICBsZXQgZXJyb3IgPSBtYXRjaC5yb3V0ZS5pZCA/IGVycm9ycyA9PSBudWxsID8gdm9pZCAwIDogZXJyb3JzW21hdGNoLnJvdXRlLmlkXSA6IG51bGw7IC8vIE9ubHkgZGF0YSByb3V0ZXJzIGhhbmRsZSBlcnJvcnNcblxuICAgIGxldCBlcnJvckVsZW1lbnQgPSBkYXRhUm91dGVyU3RhdGUgPyBtYXRjaC5yb3V0ZS5lcnJvckVsZW1lbnQgfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGVmYXVsdEVycm9yRWxlbWVudCwgbnVsbCkgOiBudWxsO1xuICAgIGxldCBtYXRjaGVzID0gcGFyZW50TWF0Y2hlcy5jb25jYXQocmVuZGVyZWRNYXRjaGVzLnNsaWNlKDAsIGluZGV4ICsgMSkpO1xuXG4gICAgbGV0IGdldENoaWxkcmVuID0gKCkgPT4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVuZGVyZWRSb3V0ZSwge1xuICAgICAgbWF0Y2g6IG1hdGNoLFxuICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgIG91dGxldCxcbiAgICAgICAgbWF0Y2hlc1xuICAgICAgfVxuICAgIH0sIGVycm9yID8gZXJyb3JFbGVtZW50IDogbWF0Y2gucm91dGUuZWxlbWVudCAhPT0gdW5kZWZpbmVkID8gbWF0Y2gucm91dGUuZWxlbWVudCA6IG91dGxldCk7IC8vIE9ubHkgd3JhcCBpbiBhbiBlcnJvciBib3VuZGFyeSB3aXRoaW4gZGF0YSByb3V0ZXIgdXNhZ2VzIHdoZW4gd2UgaGF2ZSBhblxuICAgIC8vIGVycm9yRWxlbWVudCBvbiB0aGlzIHJvdXRlLiAgT3RoZXJ3aXNlIGxldCBpdCBidWJibGUgdXAgdG8gYW4gYW5jZXN0b3JcbiAgICAvLyBlcnJvckVsZW1lbnRcblxuXG4gICAgcmV0dXJuIGRhdGFSb3V0ZXJTdGF0ZSAmJiAobWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IGluZGV4ID09PSAwKSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlckVycm9yQm91bmRhcnksIHtcbiAgICAgIGxvY2F0aW9uOiBkYXRhUm91dGVyU3RhdGUubG9jYXRpb24sXG4gICAgICBjb21wb25lbnQ6IGVycm9yRWxlbWVudCxcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIGNoaWxkcmVuOiBnZXRDaGlsZHJlbigpLFxuICAgICAgcm91dGVDb250ZXh0OiB7XG4gICAgICAgIG91dGxldDogbnVsbCxcbiAgICAgICAgbWF0Y2hlc1xuICAgICAgfVxuICAgIH0pIDogZ2V0Q2hpbGRyZW4oKTtcbiAgfSwgbnVsbCk7XG59XG52YXIgRGF0YVJvdXRlckhvb2s7XG5cbihmdW5jdGlvbiAoRGF0YVJvdXRlckhvb2spIHtcbiAgRGF0YVJvdXRlckhvb2tbXCJVc2VCbG9ja2VyXCJdID0gXCJ1c2VCbG9ja2VyXCI7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlUmV2YWxpZGF0b3JcIl0gPSBcInVzZVJldmFsaWRhdG9yXCI7XG59KShEYXRhUm91dGVySG9vayB8fCAoRGF0YVJvdXRlckhvb2sgPSB7fSkpO1xuXG52YXIgRGF0YVJvdXRlclN0YXRlSG9vaztcblxuKGZ1bmN0aW9uIChEYXRhUm91dGVyU3RhdGVIb29rKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VMb2FkZXJEYXRhXCJdID0gXCJ1c2VMb2FkZXJEYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VBY3Rpb25EYXRhXCJdID0gXCJ1c2VBY3Rpb25EYXRhXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSb3V0ZUVycm9yXCJdID0gXCJ1c2VSb3V0ZUVycm9yXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VOYXZpZ2F0aW9uXCJdID0gXCJ1c2VOYXZpZ2F0aW9uXCI7XG4gIERhdGFSb3V0ZXJTdGF0ZUhvb2tbXCJVc2VSb3V0ZUxvYWRlckRhdGFcIl0gPSBcInVzZVJvdXRlTG9hZGVyRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTWF0Y2hlc1wiXSA9IFwidXNlTWF0Y2hlc1wiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUmV2YWxpZGF0b3JcIl0gPSBcInVzZVJldmFsaWRhdG9yXCI7XG59KShEYXRhUm91dGVyU3RhdGVIb29rIHx8IChEYXRhUm91dGVyU3RhdGVIb29rID0ge30pKTtcblxuZnVuY3Rpb24gZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkge1xuICByZXR1cm4gaG9va05hbWUgKyBcIiBtdXN0IGJlIHVzZWQgd2l0aGluIGEgZGF0YSByb3V0ZXIuICBTZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVycy9waWNraW5nLWEtcm91dGVyLlwiO1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgY3R4ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7XG4gICFjdHggPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBjdHg7XG59XG5cbmZ1bmN0aW9uIHVzZURhdGFSb3V0ZXJTdGF0ZShob29rTmFtZSkge1xuICBsZXQgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICAhc3RhdGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gdXNlUm91dGVDb250ZXh0KGhvb2tOYW1lKSB7XG4gIGxldCByb3V0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgIXJvdXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gcm91dGU7XG59XG5cbmZ1bmN0aW9uIHVzZUN1cnJlbnRSb3V0ZUlkKGhvb2tOYW1lKSB7XG4gIGxldCByb3V0ZSA9IHVzZVJvdXRlQ29udGV4dChob29rTmFtZSk7XG4gIGxldCB0aGlzUm91dGUgPSByb3V0ZS5tYXRjaGVzW3JvdXRlLm1hdGNoZXMubGVuZ3RoIC0gMV07XG4gICF0aGlzUm91dGUucm91dGUuaWQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIGhvb2tOYW1lICsgXCIgY2FuIG9ubHkgYmUgdXNlZCBvbiByb3V0ZXMgdGhhdCBjb250YWluIGEgdW5pcXVlIFxcXCJpZFxcXCJcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gdGhpc1JvdXRlLnJvdXRlLmlkO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24sIGRlZmF1bHRpbmcgdG8gYW4gXCJpZGxlXCIgbmF2aWdhdGlvbiB3aGVuXG4gKiBubyBuYXZpZ2F0aW9uIGlzIGluIHByb2dyZXNzXG4gKi9cblxuXG5mdW5jdGlvbiB1c2VOYXZpZ2F0aW9uKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VOYXZpZ2F0aW9uKTtcbiAgcmV0dXJuIHN0YXRlLm5hdmlnYXRpb247XG59XG4vKipcbiAqIFJldHVybnMgYSByZXZhbGlkYXRlIGZ1bmN0aW9uIGZvciBtYW51YWxseSB0cmlnZ2VyaW5nIHJldmFsaWRhdGlvbiwgYXMgd2VsbFxuICogYXMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgYW55IG1hbnVhbCByZXZhbGlkYXRpb25zXG4gKi9cblxuZnVuY3Rpb24gdXNlUmV2YWxpZGF0b3IoKSB7XG4gIGxldCBkYXRhUm91dGVyQ29udGV4dCA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZVJldmFsaWRhdG9yKTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUmV2YWxpZGF0b3IpO1xuICByZXR1cm4ge1xuICAgIHJldmFsaWRhdGU6IGRhdGFSb3V0ZXJDb250ZXh0LnJvdXRlci5yZXZhbGlkYXRlLFxuICAgIHN0YXRlOiBzdGF0ZS5yZXZhbGlkYXRpb25cbiAgfTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aXZlIHJvdXRlIG1hdGNoZXMsIHVzZWZ1bCBmb3IgYWNjZXNzaW5nIGxvYWRlckRhdGEgZm9yXG4gKiBwYXJlbnQvY2hpbGQgcm91dGVzIG9yIHRoZSByb3V0ZSBcImhhbmRsZVwiIHByb3BlcnR5XG4gKi9cblxuZnVuY3Rpb24gdXNlTWF0Y2hlcygpIHtcbiAgbGV0IHtcbiAgICBtYXRjaGVzLFxuICAgIGxvYWRlckRhdGFcbiAgfSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZU1hdGNoZXMpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBtYXRjaGVzLm1hcChtYXRjaCA9PiB7XG4gICAgbGV0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcGFyYW1zXG4gICAgfSA9IG1hdGNoOyAvLyBOb3RlOiBUaGlzIHN0cnVjdHVyZSBtYXRjaGVzIHRoYXQgY3JlYXRlZCBieSBjcmVhdGVVc2VNYXRjaGVzTWF0Y2hcbiAgICAvLyBpbiB0aGUgQHJlbWl4LXJ1bi9yb3V0ZXIgLCBzbyBpZiB5b3UgY2hhbmdlIHRoaXMgcGxlYXNlIGFsc28gY2hhbmdlXG4gICAgLy8gdGhhdCA6KSAgRXZlbnR1YWxseSB3ZSdsbCBEUlkgdGhpcyB1cFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBtYXRjaC5yb3V0ZS5pZCxcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcGFyYW1zLFxuICAgICAgZGF0YTogbG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0sXG4gICAgICBoYW5kbGU6IG1hdGNoLnJvdXRlLmhhbmRsZVxuICAgIH07XG4gIH0pLCBbbWF0Y2hlcywgbG9hZGVyRGF0YV0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsb2FkZXIgZGF0YSBmb3IgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgbG9hZGVyXG4gKi9cblxuZnVuY3Rpb24gdXNlTG9hZGVyRGF0YSgpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTG9hZGVyRGF0YSk7XG4gIGxldCByb3V0ZUlkID0gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VMb2FkZXJEYXRhKTtcblxuICBpZiAoc3RhdGUuZXJyb3JzICYmIHN0YXRlLmVycm9yc1tyb3V0ZUlkXSAhPSBudWxsKSB7XG4gICAgY29uc29sZS5lcnJvcihcIllvdSBjYW5ub3QgYHVzZUxvYWRlckRhdGFgIGluIGFuIGVycm9yRWxlbWVudCAocm91dGVJZDogXCIgKyByb3V0ZUlkICsgXCIpXCIpO1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbG9hZGVyRGF0YSBmb3IgdGhlIGdpdmVuIHJvdXRlSWRcbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZUxvYWRlckRhdGEocm91dGVJZCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUxvYWRlckRhdGEpO1xuICByZXR1cm4gc3RhdGUubG9hZGVyRGF0YVtyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgYWN0aW9uIGRhdGEgZm9yIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGFjdGlvblxuICovXG5cbmZ1bmN0aW9uIHVzZUFjdGlvbkRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUFjdGlvbkRhdGEpO1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJ1c2VBY3Rpb25EYXRhIG11c3QgYmUgdXNlZCBpbnNpZGUgYSBSb3V0ZUNvbnRleHRcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gT2JqZWN0LnZhbHVlcygoc3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IHN0YXRlLmFjdGlvbkRhdGEpIHx8IHt9KVswXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbmVhcmVzdCBhbmNlc3RvciBSb3V0ZSBlcnJvciwgd2hpY2ggY291bGQgYmUgYSBsb2FkZXIvYWN0aW9uXG4gKiBlcnJvciBvciBhIHJlbmRlciBlcnJvci4gIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmUgY2FsbGVkIGZyb20geW91clxuICogZXJyb3JFbGVtZW50IHRvIGRpc3BsYXkgYSBwcm9wZXIgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG5mdW5jdGlvbiB1c2VSb3V0ZUVycm9yKCkge1xuICB2YXIgX3N0YXRlJGVycm9ycztcblxuICBsZXQgZXJyb3IgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlRXJyb3JDb250ZXh0KTtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVFcnJvcik7XG4gIGxldCByb3V0ZUlkID0gdXNlQ3VycmVudFJvdXRlSWQoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VSb3V0ZUVycm9yKTsgLy8gSWYgdGhpcyB3YXMgYSByZW5kZXIgZXJyb3IsIHdlIHB1dCBpdCBpbiBhIFJvdXRlRXJyb3IgY29udGV4dCBpbnNpZGVcbiAgLy8gb2YgUmVuZGVyRXJyb3JCb3VuZGFyeVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfSAvLyBPdGhlcndpc2UgbG9vayBmb3IgZXJyb3JzIGZyb20gb3VyIGRhdGEgcm91dGVyIHN0YXRlXG5cblxuICByZXR1cm4gKF9zdGF0ZSRlcnJvcnMgPSBzdGF0ZS5lcnJvcnMpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkZXJyb3JzW3JvdXRlSWRdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBoYXBweS1wYXRoIGRhdGEgZnJvbSB0aGUgbmVhcmVzdCBhbmNlc3RvciA8QXdhaXQgLz4gdmFsdWVcbiAqL1xuXG5mdW5jdGlvbiB1c2VBc3luY1ZhbHVlKCkge1xuICBsZXQgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEF3YWl0Q29udGV4dCk7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gdm9pZCAwIDogdmFsdWUuX2RhdGE7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVycm9yIGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgPEF3YWl0IC8+IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQXN5bmNFcnJvcigpIHtcbiAgbGV0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLl9lcnJvcjtcbn1cbmxldCBibG9ja2VySWQgPSAwO1xuLyoqXG4gKiBBbGxvdyB0aGUgYXBwbGljYXRpb24gdG8gYmxvY2sgbmF2aWdhdGlvbnMgd2l0aGluIHRoZSBTUEEgYW5kIHByZXNlbnQgdGhlXG4gKiB1c2VyIGEgY29uZmlybWF0aW9uIGRpYWxvZyB0byBjb25maXJtIHRoZSBuYXZpZ2F0aW9uLiAgTW9zdGx5IHVzZWQgdG8gYXZvaWRcbiAqIHVzaW5nIGhhbGYtZmlsbGVkIGZvcm0gZGF0YS4gIFRoaXMgZG9lcyBub3QgaGFuZGxlIGhhcmQtcmVsb2FkcyBvclxuICogY3Jvc3Mtb3JpZ2luIG5hdmlnYXRpb25zLlxuICovXG5cbmZ1bmN0aW9uIHVzZUJsb2NrZXIoc2hvdWxkQmxvY2spIHtcbiAgbGV0IHtcbiAgICByb3V0ZXJcbiAgfSA9IHVzZURhdGFSb3V0ZXJDb250ZXh0KERhdGFSb3V0ZXJIb29rLlVzZUJsb2NrZXIpO1xuICBsZXQgW2Jsb2NrZXJLZXldID0gUmVhY3QudXNlU3RhdGUoKCkgPT4gU3RyaW5nKCsrYmxvY2tlcklkKSk7XG4gIGxldCBibG9ja2VyRnVuY3Rpb24gPSBSZWFjdC51c2VDYWxsYmFjayhhcmdzID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHNob3VsZEJsb2NrID09PSBcImZ1bmN0aW9uXCIgPyAhIXNob3VsZEJsb2NrKGFyZ3MpIDogISFzaG91bGRCbG9jaztcbiAgfSwgW3Nob3VsZEJsb2NrXSk7XG4gIGxldCBibG9ja2VyID0gcm91dGVyLmdldEJsb2NrZXIoYmxvY2tlcktleSwgYmxvY2tlckZ1bmN0aW9uKTsgLy8gQ2xlYW51cCBvbiB1bm1vdW50XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+ICgpID0+IHJvdXRlci5kZWxldGVCbG9ja2VyKGJsb2NrZXJLZXkpLCBbcm91dGVyLCBibG9ja2VyS2V5XSk7XG4gIHJldHVybiBibG9ja2VyO1xufVxuY29uc3QgYWxyZWFkeVdhcm5lZCA9IHt9O1xuXG5mdW5jdGlvbiB3YXJuaW5nT25jZShrZXksIGNvbmQsIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kICYmICFhbHJlYWR5V2FybmVkW2tleV0pIHtcbiAgICBhbHJlYWR5V2FybmVkW2tleV0gPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIG1lc3NhZ2UpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBSZW1peCBSb3V0ZXIgaW5zdGFuY2UsIHJlbmRlciB0aGUgYXBwcm9wcmlhdGUgVUlcbiAqL1xuZnVuY3Rpb24gUm91dGVyUHJvdmlkZXIoX3JlZikge1xuICBsZXQge1xuICAgIGZhbGxiYWNrRWxlbWVudCxcbiAgICByb3V0ZXJcbiAgfSA9IF9yZWY7XG4gIC8vIFN5bmMgcm91dGVyIHN0YXRlIHRvIG91ciBjb21wb25lbnQgc3RhdGUgdG8gZm9yY2UgcmUtcmVuZGVyc1xuICBsZXQgc3RhdGUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShyb3V0ZXIuc3Vic2NyaWJlLCAoKSA9PiByb3V0ZXIuc3RhdGUsIC8vIFdlIGhhdmUgdG8gcHJvdmlkZSB0aGlzIHNvIFJlYWN0QDE4IGRvZXNuJ3QgY29tcGxhaW4gZHVyaW5nIGh5ZHJhdGlvbixcbiAgLy8gYnV0IHdlIHBhc3Mgb3VyIHNlcmlhbGl6ZWQgaHlkcmF0aW9uIGRhdGEgaW50byB0aGUgcm91dGVyIHNvIHN0YXRlIGhlcmVcbiAgLy8gaXMgYWxyZWFkeSBzeW5jZWQgd2l0aCB3aGF0IHRoZSBzZXJ2ZXIgc2F3XG4gICgpID0+IHJvdXRlci5zdGF0ZSk7XG4gIGxldCBuYXZpZ2F0b3IgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlSHJlZjogcm91dGVyLmNyZWF0ZUhyZWYsXG4gICAgICBlbmNvZGVMb2NhdGlvbjogcm91dGVyLmVuY29kZUxvY2F0aW9uLFxuICAgICAgZ286IG4gPT4gcm91dGVyLm5hdmlnYXRlKG4pLFxuICAgICAgcHVzaDogKHRvLCBzdGF0ZSwgb3B0cykgPT4gcm91dGVyLm5hdmlnYXRlKHRvLCB7XG4gICAgICAgIHN0YXRlLFxuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMucHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KSxcbiAgICAgIHJlcGxhY2U6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSlcbiAgICB9O1xuICB9LCBbcm91dGVyXSk7XG4gIGxldCBiYXNlbmFtZSA9IHJvdXRlci5iYXNlbmFtZSB8fCBcIi9cIjsgLy8gVGhlIGZyYWdtZW50IGFuZCB7bnVsbH0gaGVyZSBhcmUgaW1wb3J0YW50ISAgV2UgbmVlZCB0aGVtIHRvIGtlZXAgUmVhY3QgMTgnc1xuICAvLyB1c2VJZCBoYXBweSB3aGVuIHdlIGFyZSBzZXJ2ZXItcmVuZGVyaW5nIHNpbmNlIHdlIG1heSBoYXZlIGEgPHNjcmlwdD4gaGVyZVxuICAvLyBjb250YWluaW5nIHRoZSBoeWRyYXRlZCBzZXJ2ZXItc2lkZSBzdGF0aWNDb250ZXh0IChmcm9tIFN0YXRpY1JvdXRlclByb3ZpZGVyKS5cbiAgLy8gdXNlSWQgcmVsaWVzIG9uIHRoZSBjb21wb25lbnQgdHJlZSBzdHJ1Y3R1cmUgdG8gZ2VuZXJhdGUgZGV0ZXJtaW5pc3RpYyBpZCdzXG4gIC8vIHNvIHdlIG5lZWQgdG8gZW5zdXJlIGl0IHJlbWFpbnMgdGhlIHNhbWUgb24gdGhlIGNsaWVudCBldmVuIHRob3VnaFxuICAvLyB3ZSBkb24ndCBuZWVkIHRoZSA8c2NyaXB0PiB0YWdcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHJvdXRlcixcbiAgICAgIG5hdmlnYXRvcixcbiAgICAgIHN0YXRpYzogZmFsc2UsXG4gICAgICAvLyBEbyB3ZSBuZWVkIHRoaXM/XG4gICAgICBiYXNlbmFtZVxuICAgIH1cbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRGF0YVJvdXRlclN0YXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBzdGF0ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICBiYXNlbmFtZTogcm91dGVyLmJhc2VuYW1lLFxuICAgIGxvY2F0aW9uOiByb3V0ZXIuc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHJvdXRlci5zdGF0ZS5oaXN0b3J5QWN0aW9uLFxuICAgIG5hdmlnYXRvcjogbmF2aWdhdG9yXG4gIH0sIHJvdXRlci5zdGF0ZS5pbml0aWFsaXplZCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlcywgbnVsbCkgOiBmYWxsYmFja0VsZW1lbnQpKSksIG51bGwpO1xufVxuXG4vKipcbiAqIEEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgYWxsIGVudHJpZXMgaW4gbWVtb3J5LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vcm91dGVyLWNvbXBvbmVudHMvbWVtb3J5LXJvdXRlclxuICovXG5mdW5jdGlvbiBNZW1vcnlSb3V0ZXIoX3JlZjIpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbixcbiAgICBpbml0aWFsRW50cmllcyxcbiAgICBpbml0aWFsSW5kZXhcbiAgfSA9IF9yZWYyO1xuICBsZXQgaGlzdG9yeVJlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIGlmIChoaXN0b3J5UmVmLmN1cnJlbnQgPT0gbnVsbCkge1xuICAgIGhpc3RvcnlSZWYuY3VycmVudCA9IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXgsXG4gICAgICB2NUNvbXBhdDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgbGV0IGhpc3RvcnkgPSBoaXN0b3J5UmVmLmN1cnJlbnQ7XG4gIGxldCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKHtcbiAgICBhY3Rpb246IGhpc3RvcnkuYWN0aW9uLFxuICAgIGxvY2F0aW9uOiBoaXN0b3J5LmxvY2F0aW9uXG4gIH0pO1xuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gaGlzdG9yeS5saXN0ZW4oc2V0U3RhdGUpLCBbaGlzdG9yeV0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lLFxuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24sXG4gICAgbmF2aWdhdGlvblR5cGU6IHN0YXRlLmFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IGhpc3RvcnlcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBOb3RlOiBUaGlzIEFQSSBpcyBtb3N0bHkgdXNlZnVsIGluIFJlYWN0LkNvbXBvbmVudCBzdWJjbGFzc2VzIHRoYXQgYXJlIG5vdFxuICogYWJsZSB0byB1c2UgaG9va3MuIEluIGZ1bmN0aW9uYWwgY29tcG9uZW50cywgd2UgcmVjb21tZW5kIHlvdSB1c2UgdGhlXG4gKiBgdXNlTmF2aWdhdGVgIGhvb2sgaW5zdGVhZC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvbmF2aWdhdGVcbiAqL1xuZnVuY3Rpb24gTmF2aWdhdGUoX3JlZjMpIHtcbiAgbGV0IHtcbiAgICB0byxcbiAgICByZXBsYWNlLFxuICAgIHN0YXRlLFxuICAgIHJlbGF0aXZlXG4gIH0gPSBfcmVmMztcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZlxuICAvLyB0aGUgcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcIjxOYXZpZ2F0ZT4gbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KS5zdGF0aWMsIFwiPE5hdmlnYXRlPiBtdXN0IG5vdCBiZSB1c2VkIG9uIHRoZSBpbml0aWFsIHJlbmRlciBpbiBhIDxTdGF0aWNSb3V0ZXI+LiBcIiArIFwiVGhpcyBpcyBhIG5vLW9wLCBidXQgeW91IHNob3VsZCBtb2RpZnkgeW91ciBjb2RlIHNvIHRoZSA8TmF2aWdhdGU+IGlzIFwiICsgXCJvbmx5IGV2ZXIgcmVuZGVyZWQgaW4gcmVzcG9uc2UgdG8gc29tZSB1c2VyIGludGVyYWN0aW9uIG9yIHN0YXRlIGNoYW5nZS5cIikgOiB2b2lkIDA7XG4gIGxldCBkYXRhUm91dGVyU3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQpO1xuICBsZXQgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEF2b2lkIGtpY2tpbmcgb2ZmIG11bHRpcGxlIG5hdmlnYXRpb25zIGlmIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYVxuICAgIC8vIGRhdGEtcm91dGVyIG5hdmlnYXRpb24sIHNpbmNlIGNvbXBvbmVudHMgZ2V0IHJlLXJlbmRlcmVkIHdoZW4gd2UgZW50ZXJcbiAgICAvLyBhIHN1Ym1pdHRpbmcvbG9hZGluZyBzdGF0ZVxuICAgIGlmIChkYXRhUm91dGVyU3RhdGUgJiYgZGF0YVJvdXRlclN0YXRlLm5hdmlnYXRpb24uc3RhdGUgIT09IFwiaWRsZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmF2aWdhdGUodG8sIHtcbiAgICAgIHJlcGxhY2UsXG4gICAgICBzdGF0ZSxcbiAgICAgIHJlbGF0aXZlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBjaGlsZCByb3V0ZSdzIGVsZW1lbnQsIGlmIHRoZXJlIGlzIG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvb3V0bGV0XG4gKi9cbmZ1bmN0aW9uIE91dGxldChwcm9wcykge1xuICByZXR1cm4gdXNlT3V0bGV0KHByb3BzLmNvbnRleHQpO1xufVxuXG4vKipcbiAqIERlY2xhcmVzIGFuIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgcmVuZGVyZWQgYXQgYSBjZXJ0YWluIFVSTCBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9yb3V0ZVxuICovXG5mdW5jdGlvbiBSb3V0ZShfcHJvcHMpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkEgPFJvdXRlPiBpcyBvbmx5IGV2ZXIgdG8gYmUgdXNlZCBhcyB0aGUgY2hpbGQgb2YgPFJvdXRlcz4gZWxlbWVudCwgXCIgKyBcIm5ldmVyIHJlbmRlcmVkIGRpcmVjdGx5LiBQbGVhc2Ugd3JhcCB5b3VyIDxSb3V0ZT4gaW4gYSA8Um91dGVzPi5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBsb2NhdGlvbiBjb250ZXh0IGZvciB0aGUgcmVzdCBvZiB0aGUgYXBwLlxuICpcbiAqIE5vdGU6IFlvdSB1c3VhbGx5IHdvbid0IHJlbmRlciBhIDxSb3V0ZXI+IGRpcmVjdGx5LiBJbnN0ZWFkLCB5b3UnbGwgcmVuZGVyIGFcbiAqIHJvdXRlciB0aGF0IGlzIG1vcmUgc3BlY2lmaWMgdG8geW91ciBlbnZpcm9ubWVudCBzdWNoIGFzIGEgPEJyb3dzZXJSb3V0ZXI+XG4gKiBpbiB3ZWIgYnJvd3NlcnMgb3IgYSA8U3RhdGljUm91dGVyPiBmb3Igc2VydmVyIHJlbmRlcmluZy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlci1jb21wb25lbnRzL3JvdXRlclxuICovXG5mdW5jdGlvbiBSb3V0ZXIoX3JlZjQpIHtcbiAgbGV0IHtcbiAgICBiYXNlbmFtZTogYmFzZW5hbWVQcm9wID0gXCIvXCIsXG4gICAgY2hpbGRyZW4gPSBudWxsLFxuICAgIGxvY2F0aW9uOiBsb2NhdGlvblByb3AsXG4gICAgbmF2aWdhdGlvblR5cGUgPSBBY3Rpb24uUG9wLFxuICAgIG5hdmlnYXRvcixcbiAgICBzdGF0aWM6IHN0YXRpY1Byb3AgPSBmYWxzZVxuICB9ID0gX3JlZjQ7XG4gICEhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCByZW5kZXIgYSA8Um91dGVyPiBpbnNpZGUgYW5vdGhlciA8Um91dGVyPi5cIiArIFwiIFlvdSBzaG91bGQgbmV2ZXIgaGF2ZSBtb3JlIHRoYW4gb25lIGluIHlvdXIgYXBwLlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7IC8vIFByZXNlcnZlIHRyYWlsaW5nIHNsYXNoZXMgb24gYmFzZW5hbWUsIHNvIHdlIGNhbiBsZXQgdGhlIHVzZXIgY29udHJvbFxuICAvLyB0aGUgZW5mb3JjZW1lbnQgb2YgdHJhaWxpbmcgc2xhc2hlcyB0aHJvdWdob3V0IHRoZSBhcHBcblxuICBsZXQgYmFzZW5hbWUgPSBiYXNlbmFtZVByb3AucmVwbGFjZSgvXlxcLyovLCBcIi9cIik7XG4gIGxldCBuYXZpZ2F0aW9uQ29udGV4dCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBiYXNlbmFtZSxcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBzdGF0aWNQcm9wXG4gIH0pLCBbYmFzZW5hbWUsIG5hdmlnYXRvciwgc3RhdGljUHJvcF0pO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb25Qcm9wID09PSBcInN0cmluZ1wiKSB7XG4gICAgbG9jYXRpb25Qcm9wID0gcGFyc2VQYXRoKGxvY2F0aW9uUHJvcCk7XG4gIH1cblxuICBsZXQge1xuICAgIHBhdGhuYW1lID0gXCIvXCIsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIixcbiAgICBzdGF0ZSA9IG51bGwsXG4gICAga2V5ID0gXCJkZWZhdWx0XCJcbiAgfSA9IGxvY2F0aW9uUHJvcDtcbiAgbGV0IGxvY2F0aW9uID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IHRyYWlsaW5nUGF0aG5hbWUgPSBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSk7XG5cbiAgICBpZiAodHJhaWxpbmdQYXRobmFtZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF0aG5hbWU6IHRyYWlsaW5nUGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoLFxuICAgICAgc3RhdGUsXG4gICAgICBrZXlcbiAgICB9O1xuICB9LCBbYmFzZW5hbWUsIHBhdGhuYW1lLCBzZWFyY2gsIGhhc2gsIHN0YXRlLCBrZXldKTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhsb2NhdGlvbiAhPSBudWxsLCBcIjxSb3V0ZXIgYmFzZW5hbWU9XFxcIlwiICsgYmFzZW5hbWUgKyBcIlxcXCI+IGlzIG5vdCBhYmxlIHRvIG1hdGNoIHRoZSBVUkwgXCIgKyAoXCJcXFwiXCIgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggKyBcIlxcXCIgYmVjYXVzZSBpdCBkb2VzIG5vdCBzdGFydCB3aXRoIHRoZSBcIikgKyBcImJhc2VuYW1lLCBzbyB0aGUgPFJvdXRlcj4gd29uJ3QgcmVuZGVyIGFueXRoaW5nLlwiKSA6IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE5hdmlnYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG5hdmlnYXRpb25Db250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExvY2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICB2YWx1ZToge1xuICAgICAgbG9jYXRpb24sXG4gICAgICBuYXZpZ2F0aW9uVHlwZVxuICAgIH1cbiAgfSkpO1xufVxuXG4vKipcbiAqIEEgY29udGFpbmVyIGZvciBhIG5lc3RlZCB0cmVlIG9mIDxSb3V0ZT4gZWxlbWVudHMgdGhhdCByZW5kZXJzIHRoZSBicmFuY2hcbiAqIHRoYXQgYmVzdCBtYXRjaGVzIHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vY29tcG9uZW50cy9yb3V0ZXNcbiAqL1xuZnVuY3Rpb24gUm91dGVzKF9yZWY1KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgbG9jYXRpb25cbiAgfSA9IF9yZWY1O1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KERhdGFSb3V0ZXJDb250ZXh0KTsgLy8gV2hlbiBpbiBhIERhdGFSb3V0ZXJDb250ZXh0IF93aXRob3V0XyBjaGlsZHJlbiwgd2UgdXNlIHRoZSByb3V0ZXIgcm91dGVzXG4gIC8vIGRpcmVjdGx5LiAgSWYgd2UgaGF2ZSBjaGlsZHJlbiwgdGhlbiB3ZSdyZSBpbiBhIGRlc2NlbmRhbnQgdHJlZSBhbmQgd2VcbiAgLy8gbmVlZCB0byB1c2UgY2hpbGQgcm91dGVzLlxuXG4gIGxldCByb3V0ZXMgPSBkYXRhUm91dGVyQ29udGV4dCAmJiAhY2hpbGRyZW4gPyBkYXRhUm91dGVyQ29udGV4dC5yb3V0ZXIucm91dGVzIDogY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgcmV0dXJuIHVzZVJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uKTtcbn1cblxuLyoqXG4gKiBDb21wb25lbnQgdG8gdXNlIGZvciByZW5kZXJpbmcgbGF6aWx5IGxvYWRlZCBkYXRhIGZyb20gcmV0dXJuaW5nIGRlZmVyKClcbiAqIGluIGEgbG9hZGVyIGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIEF3YWl0KF9yZWY2KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3JFbGVtZW50LFxuICAgIHJlc29sdmVcbiAgfSA9IF9yZWY2O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRFcnJvckJvdW5kYXJ5LCB7XG4gICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICBlcnJvckVsZW1lbnQ6IGVycm9yRWxlbWVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZXNvbHZlQXdhaXQsIG51bGwsIGNoaWxkcmVuKSk7XG59XG52YXIgQXdhaXRSZW5kZXJTdGF0dXM7XG5cbihmdW5jdGlvbiAoQXdhaXRSZW5kZXJTdGF0dXMpIHtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJwZW5kaW5nXCJdID0gMF0gPSBcInBlbmRpbmdcIjtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJzdWNjZXNzXCJdID0gMV0gPSBcInN1Y2Nlc3NcIjtcbiAgQXdhaXRSZW5kZXJTdGF0dXNbQXdhaXRSZW5kZXJTdGF0dXNbXCJlcnJvclwiXSA9IDJdID0gXCJlcnJvclwiO1xufSkoQXdhaXRSZW5kZXJTdGF0dXMgfHwgKEF3YWl0UmVuZGVyU3RhdHVzID0ge30pKTtcblxuY29uc3QgbmV2ZXJTZXR0bGVkUHJvbWlzZSA9IG5ldyBQcm9taXNlKCgpID0+IHt9KTtcblxuY2xhc3MgQXdhaXRFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCI8QXdhaXQ+IGNhdWdodCB0aGUgZm9sbG93aW5nIGVycm9yIGR1cmluZyByZW5kZXJcIiwgZXJyb3IsIGVycm9ySW5mbyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZXJyb3JFbGVtZW50LFxuICAgICAgcmVzb2x2ZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBwcm9taXNlID0gbnVsbDtcbiAgICBsZXQgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMucGVuZGluZztcblxuICAgIGlmICghKHJlc29sdmUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgLy8gRGlkbid0IGdldCBhIHByb21pc2UgLSBwcm92aWRlIGFzIGEgcmVzb2x2ZWQgcHJvbWlzZVxuICAgICAgc3RhdHVzID0gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2VzcztcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl90cmFja2VkXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9kYXRhXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiByZXNvbHZlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuZXJyb3IpIHtcbiAgICAgIC8vIENhdWdodCBhIHJlbmRlciBlcnJvciwgcHJvdmlkZSBpdCBhcyBhIHJlamVjdGVkIHByb21pc2VcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yO1xuICAgICAgbGV0IHJlbmRlckVycm9yID0gdGhpcy5zdGF0ZS5lcnJvcjtcbiAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdCgpLmNhdGNoKCgpID0+IHt9KTsgLy8gQXZvaWQgdW5oYW5kbGVkIHJlamVjdGlvbiB3YXJuaW5nc1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHJlbmRlckVycm9yXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlc29sdmUuX3RyYWNrZWQpIHtcbiAgICAgIC8vIEFscmVhZHkgdHJhY2tlZCBwcm9taXNlIC0gY2hlY2sgY29udGVudHNcbiAgICAgIHByb21pc2UgPSByZXNvbHZlO1xuICAgICAgc3RhdHVzID0gcHJvbWlzZS5fZXJyb3IgIT09IHVuZGVmaW5lZCA/IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yIDogcHJvbWlzZS5fZGF0YSAhPT0gdW5kZWZpbmVkID8gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2VzcyA6IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJhdyAodW50cmFja2VkKSBwcm9taXNlIC0gdHJhY2sgaXRcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBwcm9taXNlID0gcmVzb2x2ZS50aGVuKGRhdGEgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX2RhdGFcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGRhdGFcbiAgICAgIH0pLCBlcnJvciA9PiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGVycm9yXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgcHJvbWlzZS5fZXJyb3IgaW5zdGFuY2VvZiBBYm9ydGVkRGVmZXJyZWRFcnJvcikge1xuICAgICAgLy8gRnJlZXplIHRoZSBVSSBieSB0aHJvd2luZyBhIG5ldmVyIHJlc29sdmVkIHByb21pc2VcbiAgICAgIHRocm93IG5ldmVyU2V0dGxlZFByb21pc2U7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IgJiYgIWVycm9yRWxlbWVudCkge1xuICAgICAgLy8gTm8gZXJyb3JFbGVtZW50LCB0aHJvdyB0byB0aGUgbmVhcmVzdCByb3V0ZS1sZXZlbCBlcnJvciBib3VuZGFyeVxuICAgICAgdGhyb3cgcHJvbWlzZS5fZXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuZXJyb3IpIHtcbiAgICAgIC8vIFJlbmRlciB2aWEgb3VyIGVycm9yRWxlbWVudFxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvbWlzZSxcbiAgICAgICAgY2hpbGRyZW46IGVycm9yRWxlbWVudFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gQXdhaXRSZW5kZXJTdGF0dXMuc3VjY2Vzcykge1xuICAgICAgLy8gUmVuZGVyIGNoaWxkcmVuIHdpdGggcmVzb2x2ZWQgdmFsdWVcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHByb21pc2UsXG4gICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgfSk7XG4gICAgfSAvLyBUaHJvdyB0byB0aGUgc3VzcGVuc2UgYm91bmRhcnlcblxuXG4gICAgdGhyb3cgcHJvbWlzZTtcbiAgfVxuXG59XG4vKipcbiAqIEBwcml2YXRlXG4gKiBJbmRpcmVjdGlvbiB0byBsZXZlcmFnZSB1c2VBc3luY1ZhbHVlIGZvciBhIHJlbmRlci1wcm9wIEFQSSBvbiA8QXdhaXQ+XG4gKi9cblxuXG5mdW5jdGlvbiBSZXNvbHZlQXdhaXQoX3JlZjcpIHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjc7XG4gIGxldCBkYXRhID0gdXNlQXN5bmNWYWx1ZSgpO1xuICBsZXQgdG9SZW5kZXIgPSB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IGNoaWxkcmVuKGRhdGEpIDogY2hpbGRyZW47XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgdG9SZW5kZXIpO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBVVElMU1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIENyZWF0ZXMgYSByb3V0ZSBjb25maWcgZnJvbSBhIFJlYWN0IFwiY2hpbGRyZW5cIiBvYmplY3QsIHdoaWNoIGlzIHVzdWFsbHlcbiAqIGVpdGhlciBhIGA8Um91dGU+YCBlbGVtZW50IG9yIGFuIGFycmF5IG9mIHRoZW0uIFVzZWQgaW50ZXJuYWxseSBieVxuICogYDxSb3V0ZXM+YCB0byBjcmVhdGUgYSByb3V0ZSBjb25maWcgZnJvbSBpdHMgY2hpbGRyZW4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9jcmVhdGUtcm91dGVzLWZyb20tY2hpbGRyZW5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbiwgcGFyZW50UGF0aCkge1xuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFtdO1xuICB9XG5cbiAgbGV0IHJvdXRlcyA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAgIC8vIElnbm9yZSBub24tZWxlbWVudHMuIFRoaXMgYWxsb3dzIHBlb3BsZSB0byBtb3JlIGVhc2lseSBpbmxpbmVcbiAgICAgIC8vIGNvbmRpdGlvbmFscyBpbiB0aGVpciByb3V0ZSBjb25maWcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICAgIC8vIFRyYW5zcGFyZW50bHkgc3VwcG9ydCBSZWFjdC5GcmFnbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAgcm91dGVzLnB1c2guYXBwbHkocm91dGVzLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oZWxlbWVudC5wcm9wcy5jaGlsZHJlbiwgcGFyZW50UGF0aCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICEoZWxlbWVudC50eXBlID09PSBSb3V0ZSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiW1wiICsgKHR5cGVvZiBlbGVtZW50LnR5cGUgPT09IFwic3RyaW5nXCIgPyBlbGVtZW50LnR5cGUgOiBlbGVtZW50LnR5cGUubmFtZSkgKyBcIl0gaXMgbm90IGEgPFJvdXRlPiBjb21wb25lbnQuIEFsbCBjb21wb25lbnQgY2hpbGRyZW4gb2YgPFJvdXRlcz4gbXVzdCBiZSBhIDxSb3V0ZT4gb3IgPFJlYWN0LkZyYWdtZW50PlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgISghZWxlbWVudC5wcm9wcy5pbmRleCB8fCAhZWxlbWVudC5wcm9wcy5jaGlsZHJlbikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiQW4gaW5kZXggcm91dGUgY2Fubm90IGhhdmUgY2hpbGQgcm91dGVzLlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgbGV0IHRyZWVQYXRoID0gWy4uLnBhcmVudFBhdGgsIGluZGV4XTtcbiAgICBsZXQgcm91dGUgPSB7XG4gICAgICBpZDogZWxlbWVudC5wcm9wcy5pZCB8fCB0cmVlUGF0aC5qb2luKFwiLVwiKSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGVsZW1lbnQucHJvcHMuY2FzZVNlbnNpdGl2ZSxcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZWxlbWVudCxcbiAgICAgIGluZGV4OiBlbGVtZW50LnByb3BzLmluZGV4LFxuICAgICAgcGF0aDogZWxlbWVudC5wcm9wcy5wYXRoLFxuICAgICAgbG9hZGVyOiBlbGVtZW50LnByb3BzLmxvYWRlcixcbiAgICAgIGFjdGlvbjogZWxlbWVudC5wcm9wcy5hY3Rpb24sXG4gICAgICBlcnJvckVsZW1lbnQ6IGVsZW1lbnQucHJvcHMuZXJyb3JFbGVtZW50LFxuICAgICAgaGFzRXJyb3JCb3VuZGFyeTogZWxlbWVudC5wcm9wcy5lcnJvckVsZW1lbnQgIT0gbnVsbCxcbiAgICAgIHNob3VsZFJldmFsaWRhdGU6IGVsZW1lbnQucHJvcHMuc2hvdWxkUmV2YWxpZGF0ZSxcbiAgICAgIGhhbmRsZTogZWxlbWVudC5wcm9wcy5oYW5kbGVcbiAgICB9O1xuXG4gICAgaWYgKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4pIHtcbiAgICAgIHJvdXRlLmNoaWxkcmVuID0gY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4sIHRyZWVQYXRoKTtcbiAgICB9XG5cbiAgICByb3V0ZXMucHVzaChyb3V0ZSk7XG4gIH0pO1xuICByZXR1cm4gcm91dGVzO1xufVxuLyoqXG4gKiBSZW5kZXJzIHRoZSByZXN1bHQgb2YgYG1hdGNoUm91dGVzKClgIGludG8gYSBSZWFjdCBlbGVtZW50LlxuICovXG5cbmZ1bmN0aW9uIHJlbmRlck1hdGNoZXMobWF0Y2hlcykge1xuICByZXR1cm4gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyk7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKiBXYWxrIHRoZSByb3V0ZSB0cmVlIGFuZCBhZGQgaGFzRXJyb3JCb3VuZGFyeSBpZiBpdCdzIG5vdCBwcm92aWRlZCwgc28gdGhhdFxuICogdXNlcnMgcHJvdmlkaW5nIG1hbnVhbCByb3V0ZSBhcnJheXMgY2FuIGp1c3Qgc3BlY2lmeSBlcnJvckVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBlbmhhbmNlTWFudWFsUm91dGVPYmplY3RzKHJvdXRlcykge1xuICByZXR1cm4gcm91dGVzLm1hcChyb3V0ZSA9PiB7XG4gICAgbGV0IHJvdXRlQ2xvbmUgPSBfZXh0ZW5kcyh7fSwgcm91dGUpO1xuXG4gICAgaWYgKHJvdXRlQ2xvbmUuaGFzRXJyb3JCb3VuZGFyeSA9PSBudWxsKSB7XG4gICAgICByb3V0ZUNsb25lLmhhc0Vycm9yQm91bmRhcnkgPSByb3V0ZUNsb25lLmVycm9yRWxlbWVudCAhPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChyb3V0ZUNsb25lLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZUNsb25lLmNoaWxkcmVuID0gZW5oYW5jZU1hbnVhbFJvdXRlT2JqZWN0cyhyb3V0ZUNsb25lLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm91dGVDbG9uZTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeVJvdXRlcihyb3V0ZXMsIG9wdHMpIHtcbiAgcmV0dXJuIGNyZWF0ZVJvdXRlcih7XG4gICAgYmFzZW5hbWU6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuYmFzZW5hbWUsXG4gICAgaGlzdG9yeTogY3JlYXRlTWVtb3J5SGlzdG9yeSh7XG4gICAgICBpbml0aWFsRW50cmllczogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5pbml0aWFsRW50cmllcyxcbiAgICAgIGluaXRpYWxJbmRleDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5pbml0aWFsSW5kZXhcbiAgICB9KSxcbiAgICBoeWRyYXRpb25EYXRhOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmh5ZHJhdGlvbkRhdGEsXG4gICAgcm91dGVzOiBlbmhhbmNlTWFudWFsUm91dGVPYmplY3RzKHJvdXRlcylcbiAgfSkuaW5pdGlhbGl6ZSgpO1xufSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmV4cG9ydCB7IEF3YWl0LCBNZW1vcnlSb3V0ZXIsIE5hdmlnYXRlLCBPdXRsZXQsIFJvdXRlLCBSb3V0ZXIsIFJvdXRlclByb3ZpZGVyLCBSb3V0ZXMsIERhdGFSb3V0ZXJDb250ZXh0IGFzIFVOU0FGRV9EYXRhUm91dGVyQ29udGV4dCwgRGF0YVJvdXRlclN0YXRlQ29udGV4dCBhcyBVTlNBRkVfRGF0YVJvdXRlclN0YXRlQ29udGV4dCwgTG9jYXRpb25Db250ZXh0IGFzIFVOU0FGRV9Mb2NhdGlvbkNvbnRleHQsIE5hdmlnYXRpb25Db250ZXh0IGFzIFVOU0FGRV9OYXZpZ2F0aW9uQ29udGV4dCwgUm91dGVDb250ZXh0IGFzIFVOU0FGRV9Sb3V0ZUNvbnRleHQsIGVuaGFuY2VNYW51YWxSb3V0ZU9iamVjdHMgYXMgVU5TQUZFX2VuaGFuY2VNYW51YWxSb3V0ZU9iamVjdHMsIGNyZWF0ZU1lbW9yeVJvdXRlciwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuLCBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4gYXMgY3JlYXRlUm91dGVzRnJvbUVsZW1lbnRzLCByZW5kZXJNYXRjaGVzLCB1c2VCbG9ja2VyIGFzIHVuc3RhYmxlX3VzZUJsb2NrZXIsIHVzZUFjdGlvbkRhdGEsIHVzZUFzeW5jRXJyb3IsIHVzZUFzeW5jVmFsdWUsIHVzZUhyZWYsIHVzZUluUm91dGVyQ29udGV4dCwgdXNlTG9hZGVyRGF0YSwgdXNlTG9jYXRpb24sIHVzZU1hdGNoLCB1c2VNYXRjaGVzLCB1c2VOYXZpZ2F0ZSwgdXNlTmF2aWdhdGlvbiwgdXNlTmF2aWdhdGlvblR5cGUsIHVzZU91dGxldCwgdXNlT3V0bGV0Q29udGV4dCwgdXNlUGFyYW1zLCB1c2VSZXNvbHZlZFBhdGgsIHVzZVJldmFsaWRhdG9yLCB1c2VSb3V0ZUVycm9yLCB1c2VSb3V0ZUxvYWRlckRhdGEsIHVzZVJvdXRlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ODM3MzU5NGZlZDA5OGJmZWQwZlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNvbXBvbmVudCIsImNyZWF0ZVJvb3QiLCJIYXNoUm91dGVyIiwiUm91dGUiLCJSb3V0ZXMiLCJMaW5rIiwiTmF2TGluayIsIk91dGxldCIsIkhlcm8iLCJTZWNvbmRQYWdlIiwiRm9vdGVyIiwiQXBwIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJvb3QiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9