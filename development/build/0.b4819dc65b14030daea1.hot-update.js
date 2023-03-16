"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 39:
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

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCar": () => (/* binding */ AddCar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddCar = function AddCar(_ref) {
  var add = _ref.add;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      name: "",
      brand: "",
      type: "",
      hp: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var name = values.name,
    brand = values.brand,
    type = values.type,
    hp = values.hp;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    add({
      name: name,
      brand: brand,
      engine: {
        hp: hp,
        type: type
      }
    });
  };
  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
      name = _ref2$target.name,
      value = _ref2$target.value;
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: name,
    name: "name",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Brand", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: brand,
    name: "brand",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Type", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: type,
    name: "type",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "HP", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: hp,
    name: "hp",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Dodaj"));
};

/***/ }),

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarsManager": () => (/* binding */ CarsManager),
/* harmony export */   "URL": () => (/* binding */ URL)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _AddCar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var URL = "http://localhost:3005/cars";
var CarsManager = function CarsManager() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cars = _useState2[0],
    setCars = _useState2[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch(URL).then(function (r) {
      return r.json();
    }).then(function (data) {
      return setCars(data);
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  var handleDelete = function handleDelete(id) {
    return function () {
      fetch("".concat(URL, "/").concat(id), {
        method: "DELETE"
      }).then(function () {
        return setCars(function (prev) {
          return prev.filter(function (el) {
            return el.id !== id;
          });
        });
      })["catch"](function (err) {
        return console.log(err);
      });
    };
  };
  var handleAdd = function handleAdd(car) {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      return setCars(function (prev) {
        return [].concat(_toConsumableArray(prev), [data]);
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
  var goToDetails = function goToDetails(id) {
    return function () {
      navigate("/".concat(id, "/details"));
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddCar__WEBPACK_IMPORTED_MODULE_1__.AddCar, {
    add: handleAdd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, cars.map(function (_ref) {
    var id = _ref.id,
      name = _ref.name,
      brand = _ref.brand,
      _ref$engine = _ref.engine,
      type = _ref$engine.type,
      hp = _ref$engine.hp;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, name), " - ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, brand), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, type, " | ", hp))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: handleDelete(id)
    }, "Sprzedaj"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: goToDetails(id)
    }, "Details"))));
  })));
};

/***/ }),

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _07_Dzien_4_03_JSON_Server_0101_Zadanie_js_CarsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var AddUser = function AddUser(_ref) {
  var add = _ref.add;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      id: "",
      name: "",
      surname: "",
      age: "",
      city: "",
      gender: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    values = _useState2[0],
    setValues = _useState2[1];
  var id = values.id,
    name = values.name,
    surname = values.surname,
    age = values.age,
    city = values.city,
    gender = values.gender;
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    add({
      id: id,
      name: name,
      surname: surname,
      age: age,
      city: city,
      gender: gender
    });
  };
  var handleChange = function handleChange(_ref2) {
    var _ref2$target = _ref2.target,
      name = _ref2$target.name,
      value = _ref2$target.value;
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: id,
    name: "id",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Name", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: name,
    name: "name",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Brand", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: surname,
    name: "surname",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Type", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: age,
    name: "age",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "HP", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: city,
    name: "city",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "HP", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    value: gender,
    name: "gender",
    onChange: handleChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit"
  }, "Dodaj"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUser);

/***/ }),

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Users = function Users() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  // const [users, setUsers] = useState([]);

  var handleAdd = function handleAdd(dat) {
    fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dat)
    }).then(function (r) {
      return r.json();
    }).then(function (data) {
      return setData(function (prev) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(data));
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("http://localhost:3005/users").then(function (r) {
      return r.json();
    }).then(function (rr) {
      return setData(function (prev) {
        return [].concat(_toConsumableArray(prev), _toConsumableArray(rr));
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddUser__WEBPACK_IMPORTED_MODULE_1__["default"], {
    add: handleAdd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, data.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, el.id, " ", el.name, " ", el.surname, " ", el.age, " ", el.city, " ", el.gender);
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);

/***/ }),

/***/ 38:
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
/* harmony import */ var _remix_run_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
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
      if (true) {
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
const useSyncExternalStore = true ? (module => module.useSyncExternalStore)(react__WEBPACK_IMPORTED_MODULE_1__) : shim;

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
/******/ 	__webpack_require__.h = () => ("16af83c7710d6842fe52")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5iNDgxOWRjNjViMTQwMzBkYWVhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLHdCQUF3Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDOztBQUVqQztBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLE1BQU07QUFDTix5Q0FBeUM7QUFDekM7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix3Q0FBd0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkMsd0NBQXdDOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwR0FBMEc7O0FBRTFHO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxJQUFJO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNB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QU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQSxNQUFNLHdJQUF3STs7QUFFOUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLE1BQU0sSUFBSTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07OztBQUdOOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHOztBQUVSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx1QkFBdUI7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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0EsMkRBQTJEO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW9FO0FBQ3BFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBLFFBQVE7OztBQUdSLGtDQUFrQztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRkFBMEY7O0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsU0FBUywrREFBWTtBQUNyQjtBQUNBLGFBQWEsc0VBQW1CO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVvekI7QUFDdHpCOzs7Ozs7Ozs7VUNwM0NBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vcm91dGVyL2Rpc3Qvcm91dGVyLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzQvMDNfSlNPTl9TZXJ2ZXIvMDEwMV9aYWRhbmllL2pzL0FkZENhci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wN19Eemllbl80LzAzX0pTT05fU2VydmVyLzAxMDFfWmFkYW5pZS9qcy9DYXJzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl80Xy1fUHJhY2FfZG9tb3dhLzAxX1phZGFuaWUvanMvQWRkVXNlci5qcyIsIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8wOF9Eemllbl80Xy1fUHJhY2FfZG9tb3dhLzAxX1phZGFuaWUvanMvVXNlcnMuanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAcmVtaXgtcnVuL3JvdXRlciB2MS4zLjJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIFR5cGVzIGFuZCBDb25zdGFudHNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi8qKlxuICogQWN0aW9ucyByZXByZXNlbnQgdGhlIHR5cGUgb2YgY2hhbmdlIHRvIGEgbG9jYXRpb24gdmFsdWUuXG4gKi9cbnZhciBBY3Rpb247XG5cbihmdW5jdGlvbiAoQWN0aW9uKSB7XG4gIC8qKlxuICAgKiBBIFBPUCBpbmRpY2F0ZXMgYSBjaGFuZ2UgdG8gYW4gYXJiaXRyYXJ5IGluZGV4IGluIHRoZSBoaXN0b3J5IHN0YWNrLCBzdWNoXG4gICAqIGFzIGEgYmFjayBvciBmb3J3YXJkIG5hdmlnYXRpb24uIEl0IGRvZXMgbm90IGRlc2NyaWJlIHRoZSBkaXJlY3Rpb24gb2YgdGhlXG4gICAqIG5hdmlnYXRpb24sIG9ubHkgdGhhdCB0aGUgY3VycmVudCBpbmRleCBjaGFuZ2VkLlxuICAgKlxuICAgKiBOb3RlOiBUaGlzIGlzIHRoZSBkZWZhdWx0IGFjdGlvbiBmb3IgbmV3bHkgY3JlYXRlZCBoaXN0b3J5IG9iamVjdHMuXG4gICAqL1xuICBBY3Rpb25bXCJQb3BcIl0gPSBcIlBPUFwiO1xuICAvKipcbiAgICogQSBQVVNIIGluZGljYXRlcyBhIG5ldyBlbnRyeSBiZWluZyBhZGRlZCB0byB0aGUgaGlzdG9yeSBzdGFjaywgc3VjaCBhcyB3aGVuXG4gICAqIGEgbGluayBpcyBjbGlja2VkIGFuZCBhIG5ldyBwYWdlIGxvYWRzLiBXaGVuIHRoaXMgaGFwcGVucywgYWxsIHN1YnNlcXVlbnRcbiAgICogZW50cmllcyBpbiB0aGUgc3RhY2sgYXJlIGxvc3QuXG4gICAqL1xuXG4gIEFjdGlvbltcIlB1c2hcIl0gPSBcIlBVU0hcIjtcbiAgLyoqXG4gICAqIEEgUkVQTEFDRSBpbmRpY2F0ZXMgdGhlIGVudHJ5IGF0IHRoZSBjdXJyZW50IGluZGV4IGluIHRoZSBoaXN0b3J5IHN0YWNrXG4gICAqIGJlaW5nIHJlcGxhY2VkIGJ5IGEgbmV3IG9uZS5cbiAgICovXG5cbiAgQWN0aW9uW1wiUmVwbGFjZVwiXSA9IFwiUkVQTEFDRVwiO1xufSkoQWN0aW9uIHx8IChBY3Rpb24gPSB7fSkpO1xuXG5jb25zdCBQb3BTdGF0ZUV2ZW50VHlwZSA9IFwicG9wc3RhdGVcIjtcbi8qKlxuICogTWVtb3J5IGhpc3Rvcnkgc3RvcmVzIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIG1lbW9yeS4gSXQgaXMgZGVzaWduZWQgZm9yIHVzZVxuICogaW4gc3RhdGVmdWwgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzIGxpa2UgdGVzdHMgYW5kIFJlYWN0IE5hdGl2ZS5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGxldCB7XG4gICAgaW5pdGlhbEVudHJpZXMgPSBbXCIvXCJdLFxuICAgIGluaXRpYWxJbmRleCxcbiAgICB2NUNvbXBhdCA9IGZhbHNlXG4gIH0gPSBvcHRpb25zO1xuICBsZXQgZW50cmllczsgLy8gRGVjbGFyZSBzbyB3ZSBjYW4gYWNjZXNzIGZyb20gY3JlYXRlTWVtb3J5TG9jYXRpb25cblxuICBlbnRyaWVzID0gaW5pdGlhbEVudHJpZXMubWFwKChlbnRyeSwgaW5kZXgpID0+IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKGVudHJ5LCB0eXBlb2YgZW50cnkgPT09IFwic3RyaW5nXCIgPyBudWxsIDogZW50cnkuc3RhdGUsIGluZGV4ID09PSAwID8gXCJkZWZhdWx0XCIgOiB1bmRlZmluZWQpKTtcbiAgbGV0IGluZGV4ID0gY2xhbXBJbmRleChpbml0aWFsSW5kZXggPT0gbnVsbCA/IGVudHJpZXMubGVuZ3RoIC0gMSA6IGluaXRpYWxJbmRleCk7XG4gIGxldCBhY3Rpb24gPSBBY3Rpb24uUG9wO1xuICBsZXQgbGlzdGVuZXIgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGNsYW1wSW5kZXgobikge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCAwKSwgZW50cmllcy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gZW50cmllc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUsIGtleSkge1xuICAgIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oZW50cmllcyA/IGdldEN1cnJlbnRMb2NhdGlvbigpLnBhdGhuYW1lIDogXCIvXCIsIHRvLCBzdGF0ZSwga2V5KTtcbiAgICB3YXJuaW5nJDEobG9jYXRpb24ucGF0aG5hbWUuY2hhckF0KDApID09PSBcIi9cIiwgXCJyZWxhdGl2ZSBwYXRobmFtZXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gbWVtb3J5IGhpc3Rvcnk6IFwiICsgSlNPTi5zdHJpbmdpZnkodG8pKTtcbiAgICByZXR1cm4gbG9jYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHRvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IHtcbiAgICBnZXQgaW5kZXgoKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcblxuICAgIGdldCBhY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYWN0aW9uO1xuICAgIH0sXG5cbiAgICBnZXQgbG9jYXRpb24oKSB7XG4gICAgICByZXR1cm4gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgfSxcblxuICAgIGNyZWF0ZUhyZWYsXG5cbiAgICBjcmVhdGVVUkwodG8pIHtcbiAgICAgIHJldHVybiBuZXcgVVJMKGNyZWF0ZUhyZWYodG8pLCBcImh0dHA6Ly9sb2NhbGhvc3RcIik7XG4gICAgfSxcblxuICAgIGVuY29kZUxvY2F0aW9uKHRvKSB7XG4gICAgICBsZXQgcGF0aCA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykgOiB0bztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lOiBwYXRoLnBhdGhuYW1lIHx8IFwiXCIsXG4gICAgICAgIHNlYXJjaDogcGF0aC5zZWFyY2ggfHwgXCJcIixcbiAgICAgICAgaGFzaDogcGF0aC5oYXNoIHx8IFwiXCJcbiAgICAgIH07XG4gICAgfSxcblxuICAgIHB1c2godG8sIHN0YXRlKSB7XG4gICAgICBhY3Rpb24gPSBBY3Rpb24uUHVzaDtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVNZW1vcnlMb2NhdGlvbih0bywgc3RhdGUpO1xuICAgICAgaW5kZXggKz0gMTtcbiAgICAgIGVudHJpZXMuc3BsaWNlKGluZGV4LCBlbnRyaWVzLmxlbmd0aCwgbmV4dExvY2F0aW9uKTtcblxuICAgICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YTogMVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVwbGFjZSh0bywgc3RhdGUpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZU1lbW9yeUxvY2F0aW9uKHRvLCBzdGF0ZSk7XG4gICAgICBlbnRyaWVzW2luZGV4XSA9IG5leHRMb2NhdGlvbjtcblxuICAgICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YTogMFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ28oZGVsdGEpIHtcbiAgICAgIGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgICBsZXQgbmV4dEluZGV4ID0gY2xhbXBJbmRleChpbmRleCArIGRlbHRhKTtcbiAgICAgIGxldCBuZXh0TG9jYXRpb24gPSBlbnRyaWVzW25leHRJbmRleF07XG4gICAgICBpbmRleCA9IG5leHRJbmRleDtcblxuICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcbiAgICAgICAgICBkZWx0YVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbGlzdGVuKGZuKSB7XG4gICAgICBsaXN0ZW5lciA9IGZuO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgbGlzdGVuZXIgPSBudWxsO1xuICAgICAgfTtcbiAgICB9XG5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59XG4vKipcbiAqIEJyb3dzZXIgaGlzdG9yeSBzdG9yZXMgdGhlIGxvY2F0aW9uIGluIHJlZ3VsYXIgVVJMcy4gVGhpcyBpcyB0aGUgc3RhbmRhcmQgZm9yXG4gKiBtb3N0IHdlYiBhcHBzLCBidXQgaXQgcmVxdWlyZXMgc29tZSBjb25maWd1cmF0aW9uIG9uIHRoZSBzZXJ2ZXIgdG8gZW5zdXJlIHlvdVxuICogc2VydmUgdGhlIHNhbWUgYXBwIGF0IG11bHRpcGxlIFVSTHMuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVtaXgtcnVuL2hpc3RvcnkvdHJlZS9tYWluL2RvY3MvYXBpLXJlZmVyZW5jZS5tZCNjcmVhdGVicm93c2VyaGlzdG9yeVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJMb2NhdGlvbih3aW5kb3csIGdsb2JhbEhpc3RvcnkpIHtcbiAgICBsZXQge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gY3JlYXRlTG9jYXRpb24oXCJcIiwge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2gsXG4gICAgICBoYXNoXG4gICAgfSwgLy8gc3RhdGUgZGVmYXVsdHMgdG8gYG51bGxgIGJlY2F1c2UgYHdpbmRvdy5oaXN0b3J5LnN0YXRlYCBkb2VzXG4gICAgZ2xvYmFsSGlzdG9yeS5zdGF0ZSAmJiBnbG9iYWxIaXN0b3J5LnN0YXRlLnVzciB8fCBudWxsLCBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUua2V5IHx8IFwiZGVmYXVsdFwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIcmVmKHdpbmRvdywgdG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTtcbiAgfVxuXG4gIHJldHVybiBnZXRVcmxCYXNlZEhpc3RvcnkoY3JlYXRlQnJvd3NlckxvY2F0aW9uLCBjcmVhdGVCcm93c2VySHJlZiwgbnVsbCwgb3B0aW9ucyk7XG59XG4vKipcbiAqIEhhc2ggaGlzdG9yeSBzdG9yZXMgdGhlIGxvY2F0aW9uIGluIHdpbmRvdy5sb2NhdGlvbi5oYXNoLiBUaGlzIG1ha2VzIGl0IGlkZWFsXG4gKiBmb3Igc2l0dWF0aW9ucyB3aGVyZSB5b3UgZG9uJ3Qgd2FudCB0byBzZW5kIHRoZSBsb2NhdGlvbiB0byB0aGUgc2VydmVyIGZvclxuICogc29tZSByZWFzb24sIGVpdGhlciBiZWNhdXNlIHlvdSBkbyBjYW5ub3QgY29uZmlndXJlIGl0IG9yIHRoZSBVUkwgc3BhY2UgaXNcbiAqIHJlc2VydmVkIGZvciBzb21ldGhpbmcgZWxzZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZW1peC1ydW4vaGlzdG9yeS90cmVlL21haW4vZG9jcy9hcGktcmVmZXJlbmNlLm1kI2NyZWF0ZWhhc2hoaXN0b3J5XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlSGFzaEhpc3Rvcnkob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSGFzaExvY2F0aW9uKHdpbmRvdywgZ2xvYmFsSGlzdG9yeSkge1xuICAgIGxldCB7XG4gICAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgICAgc2VhcmNoID0gXCJcIixcbiAgICAgIGhhc2ggPSBcIlwiXG4gICAgfSA9IHBhcnNlUGF0aCh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHIoMSkpO1xuICAgIHJldHVybiBjcmVhdGVMb2NhdGlvbihcIlwiLCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhhc2hcbiAgICB9LCAvLyBzdGF0ZSBkZWZhdWx0cyB0byBgbnVsbGAgYmVjYXVzZSBgd2luZG93Lmhpc3Rvcnkuc3RhdGVgIGRvZXNcbiAgICBnbG9iYWxIaXN0b3J5LnN0YXRlICYmIGdsb2JhbEhpc3Rvcnkuc3RhdGUudXNyIHx8IG51bGwsIGdsb2JhbEhpc3Rvcnkuc3RhdGUgJiYgZ2xvYmFsSGlzdG9yeS5zdGF0ZS5rZXkgfHwgXCJkZWZhdWx0XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSGFzaEhyZWYod2luZG93LCB0bykge1xuICAgIGxldCBiYXNlID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpO1xuICAgIGxldCBocmVmID0gXCJcIjtcblxuICAgIGlmIChiYXNlICYmIGJhc2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSkge1xuICAgICAgbGV0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgbGV0IGhhc2hJbmRleCA9IHVybC5pbmRleE9mKFwiI1wiKTtcbiAgICAgIGhyZWYgPSBoYXNoSW5kZXggPT09IC0xID8gdXJsIDogdXJsLnNsaWNlKDAsIGhhc2hJbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhyZWYgKyBcIiNcIiArICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIgPyB0byA6IGNyZWF0ZVBhdGgodG8pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlSGFzaExvY2F0aW9uKGxvY2F0aW9uLCB0bykge1xuICAgIHdhcm5pbmckMShsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgPT09IFwiL1wiLCBcInJlbGF0aXZlIHBhdGhuYW1lcyBhcmUgbm90IHN1cHBvcnRlZCBpbiBoYXNoIGhpc3RvcnkucHVzaChcIiArIEpTT04uc3RyaW5naWZ5KHRvKSArIFwiKVwiKTtcbiAgfVxuXG4gIHJldHVybiBnZXRVcmxCYXNlZEhpc3RvcnkoY3JlYXRlSGFzaExvY2F0aW9uLCBjcmVhdGVIYXNoSHJlZiwgdmFsaWRhdGVIYXNoTG9jYXRpb24sIG9wdGlvbnMpO1xufVxuZnVuY3Rpb24gaW52YXJpYW50KHZhbHVlLCBtZXNzYWdlKSB7XG4gIGlmICh2YWx1ZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHdhcm5pbmckMShjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gV2VsY29tZSB0byBkZWJ1Z2dpbmcgaGlzdG9yeSFcbiAgICAgIC8vXG4gICAgICAvLyBUaGlzIGVycm9yIGlzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHlvdSBjYW4gbW9yZSBlYXNpbHlcbiAgICAgIC8vIGZpbmQgdGhlIHNvdXJjZSBmb3IgYSB3YXJuaW5nIHRoYXQgYXBwZWFycyBpbiB0aGUgY29uc29sZSBieVxuICAgICAgLy8gZW5hYmxpbmcgXCJwYXVzZSBvbiBleGNlcHRpb25zXCIgaW4geW91ciBKYXZhU2NyaXB0IGRlYnVnZ2VyLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA4KTtcbn1cbi8qKlxuICogRm9yIGJyb3dzZXItYmFzZWQgaGlzdG9yaWVzLCB3ZSBjb21iaW5lIHRoZSBzdGF0ZSBhbmQga2V5IGludG8gYW4gb2JqZWN0XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRIaXN0b3J5U3RhdGUobG9jYXRpb24sIGluZGV4KSB7XG4gIHJldHVybiB7XG4gICAgdXNyOiBsb2NhdGlvbi5zdGF0ZSxcbiAgICBrZXk6IGxvY2F0aW9uLmtleSxcbiAgICBpZHg6IGluZGV4XG4gIH07XG59XG4vKipcbiAqIENyZWF0ZXMgYSBMb2NhdGlvbiBvYmplY3Qgd2l0aCBhIHVuaXF1ZSBrZXkgZnJvbSB0aGUgZ2l2ZW4gUGF0aFxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oY3VycmVudCwgdG8sIHN0YXRlLCBrZXkpIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IG51bGw7XG4gIH1cblxuICBsZXQgbG9jYXRpb24gPSBfZXh0ZW5kcyh7XG4gICAgcGF0aG5hbWU6IHR5cGVvZiBjdXJyZW50ID09PSBcInN0cmluZ1wiID8gY3VycmVudCA6IGN1cnJlbnQucGF0aG5hbWUsXG4gICAgc2VhcmNoOiBcIlwiLFxuICAgIGhhc2g6IFwiXCJcbiAgfSwgdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvLCB7XG4gICAgc3RhdGUsXG4gICAgLy8gVE9ETzogVGhpcyBjb3VsZCBiZSBjbGVhbmVkIHVwLiAgcHVzaC9yZXBsYWNlIHNob3VsZCBwcm9iYWJseSBqdXN0IHRha2VcbiAgICAvLyBmdWxsIExvY2F0aW9ucyBub3cgYW5kIGF2b2lkIHRoZSBuZWVkIHRvIHJ1biB0aHJvdWdoIHRoaXMgZmxvdyBhdCBhbGxcbiAgICAvLyBCdXQgdGhhdCdzIGEgcHJldHR5IGJpZyByZWZhY3RvciB0byB0aGUgY3VycmVudCB0ZXN0IHN1aXRlIHNvIGdvaW5nIHRvXG4gICAgLy8ga2VlcCBhcyBpcyBmb3IgdGhlIHRpbWUgYmVpbmcgYW5kIGp1c3QgbGV0IGFueSBpbmNvbWluZyBrZXlzIHRha2UgcHJlY2VkZW5jZVxuICAgIGtleTogdG8gJiYgdG8ua2V5IHx8IGtleSB8fCBjcmVhdGVLZXkoKVxuICB9KTtcblxuICByZXR1cm4gbG9jYXRpb247XG59XG4vKipcbiAqIENyZWF0ZXMgYSBzdHJpbmcgVVJMIHBhdGggZnJvbSB0aGUgZ2l2ZW4gcGF0aG5hbWUsIHNlYXJjaCwgYW5kIGhhc2ggY29tcG9uZW50cy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVQYXRoKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCJcbiAgfSA9IF9yZWY7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoICE9PSBcIj9cIikgcGF0aG5hbWUgKz0gc2VhcmNoLmNoYXJBdCgwKSA9PT0gXCI/XCIgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gXCIjXCIpIHBhdGhuYW1lICs9IGhhc2guY2hhckF0KDApID09PSBcIiNcIiA/IGhhc2ggOiBcIiNcIiArIGhhc2g7XG4gIHJldHVybiBwYXRobmFtZTtcbn1cbi8qKlxuICogUGFyc2VzIGEgc3RyaW5nIFVSTCBwYXRoIGludG8gaXRzIHNlcGFyYXRlIHBhdGhuYW1lLCBzZWFyY2gsIGFuZCBoYXNoIGNvbXBvbmVudHMuXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgbGV0IHBhcnNlZFBhdGggPSB7fTtcblxuICBpZiAocGF0aCkge1xuICAgIGxldCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoXCIjXCIpO1xuXG4gICAgaWYgKGhhc2hJbmRleCA+PSAwKSB7XG4gICAgICBwYXJzZWRQYXRoLmhhc2ggPSBwYXRoLnN1YnN0cihoYXNoSW5kZXgpO1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIGhhc2hJbmRleCk7XG4gICAgfVxuXG4gICAgbGV0IHNlYXJjaEluZGV4ID0gcGF0aC5pbmRleE9mKFwiP1wiKTtcblxuICAgIGlmIChzZWFyY2hJbmRleCA+PSAwKSB7XG4gICAgICBwYXJzZWRQYXRoLnNlYXJjaCA9IHBhdGguc3Vic3RyKHNlYXJjaEluZGV4KTtcbiAgICAgIHBhdGggPSBwYXRoLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XG4gICAgfVxuXG4gICAgaWYgKHBhdGgpIHtcbiAgICAgIHBhcnNlZFBhdGgucGF0aG5hbWUgPSBwYXRoO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJzZWRQYXRoO1xufVxuXG5mdW5jdGlvbiBnZXRVcmxCYXNlZEhpc3RvcnkoZ2V0TG9jYXRpb24sIGNyZWF0ZUhyZWYsIHZhbGlkYXRlTG9jYXRpb24sIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGxldCB7XG4gICAgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsXG4gICAgdjVDb21wYXQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucztcbiAgbGV0IGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcbiAgbGV0IGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gIGxldCBsaXN0ZW5lciA9IG51bGw7XG4gIGxldCBpbmRleCA9IGdldEluZGV4KCk7IC8vIEluZGV4IHNob3VsZCBvbmx5IGJlIG51bGwgd2hlbiB3ZSBpbml0aWFsaXplLiBJZiBub3QsIGl0J3MgYmVjYXVzZSB0aGVcbiAgLy8gdXNlciBjYWxsZWQgaGlzdG9yeS5wdXNoU3RhdGUgb3IgaGlzdG9yeS5yZXBsYWNlU3RhdGUgZGlyZWN0bHksIGluIHdoaWNoXG4gIC8vIGNhc2Ugd2Ugc2hvdWxkIGxvZyBhIHdhcm5pbmcgYXMgaXQgd2lsbCByZXN1bHQgaW4gYnVncy5cblxuICBpZiAoaW5kZXggPT0gbnVsbCkge1xuICAgIGluZGV4ID0gMDtcbiAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZShfZXh0ZW5kcyh7fSwgZ2xvYmFsSGlzdG9yeS5zdGF0ZSwge1xuICAgICAgaWR4OiBpbmRleFxuICAgIH0pLCBcIlwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluZGV4KCkge1xuICAgIGxldCBzdGF0ZSA9IGdsb2JhbEhpc3Rvcnkuc3RhdGUgfHwge1xuICAgICAgaWR4OiBudWxsXG4gICAgfTtcbiAgICByZXR1cm4gc3RhdGUuaWR4O1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUG9wKCkge1xuICAgIGFjdGlvbiA9IEFjdGlvbi5Qb3A7XG4gICAgbGV0IG5leHRJbmRleCA9IGdldEluZGV4KCk7XG4gICAgbGV0IGRlbHRhID0gbmV4dEluZGV4ID09IG51bGwgPyBudWxsIDogbmV4dEluZGV4IC0gaW5kZXg7XG4gICAgaW5kZXggPSBuZXh0SW5kZXg7XG5cbiAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgZGVsdGFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2godG8sIHN0YXRlKSB7XG4gICAgYWN0aW9uID0gQWN0aW9uLlB1c2g7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbiwgdG8sIHN0YXRlKTtcbiAgICBpZiAodmFsaWRhdGVMb2NhdGlvbikgdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbiwgdG8pO1xuICAgIGluZGV4ID0gZ2V0SW5kZXgoKSArIDE7XG4gICAgbGV0IGhpc3RvcnlTdGF0ZSA9IGdldEhpc3RvcnlTdGF0ZShsb2NhdGlvbiwgaW5kZXgpO1xuICAgIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZUhyZWYobG9jYXRpb24pOyAvLyB0cnkuLi5jYXRjaCBiZWNhdXNlIGlPUyBsaW1pdHMgdXMgdG8gMTAwIHB1c2hTdGF0ZSBjYWxscyA6L1xuXG4gICAgdHJ5IHtcbiAgICAgIGdsb2JhbEhpc3RvcnkucHVzaFN0YXRlKGhpc3RvcnlTdGF0ZSwgXCJcIiwgdXJsKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gVGhleSBhcmUgZ29pbmcgdG8gbG9zZSBzdGF0ZSBoZXJlLCBidXQgdGhlcmUgaXMgbm8gcmVhbFxuICAgICAgLy8gd2F5IHRvIHdhcm4gdGhlbSBhYm91dCBpdCBzaW5jZSB0aGUgcGFnZSB3aWxsIHJlZnJlc2guLi5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICB9XG5cbiAgICBpZiAodjVDb21wYXQgJiYgbGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgZGVsdGE6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2UodG8sIHN0YXRlKSB7XG4gICAgYWN0aW9uID0gQWN0aW9uLlJlcGxhY2U7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oaGlzdG9yeS5sb2NhdGlvbiwgdG8sIHN0YXRlKTtcbiAgICBpZiAodmFsaWRhdGVMb2NhdGlvbikgdmFsaWRhdGVMb2NhdGlvbihsb2NhdGlvbiwgdG8pO1xuICAgIGluZGV4ID0gZ2V0SW5kZXgoKTtcbiAgICBsZXQgaGlzdG9yeVN0YXRlID0gZ2V0SGlzdG9yeVN0YXRlKGxvY2F0aW9uLCBpbmRleCk7XG4gICAgbGV0IHVybCA9IGhpc3RvcnkuY3JlYXRlSHJlZihsb2NhdGlvbik7XG4gICAgZ2xvYmFsSGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBcIlwiLCB1cmwpO1xuXG4gICAgaWYgKHY1Q29tcGF0ICYmIGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcih7XG4gICAgICAgIGFjdGlvbixcbiAgICAgICAgbG9jYXRpb246IGhpc3RvcnkubG9jYXRpb24sXG4gICAgICAgIGRlbHRhOiAwXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVUkwodG8pIHtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24ub3JpZ2luIGlzIFwibnVsbFwiICh0aGUgbGl0ZXJhbCBzdHJpbmcgdmFsdWUpIGluIEZpcmVmb3hcbiAgICAvLyB1bmRlciBjZXJ0YWluIGNvbmRpdGlvbnMsIG5vdGFibHkgd2hlbiBzZXJ2aW5nIGZyb20gYSBsb2NhbCBIVE1MIGZpbGVcbiAgICAvLyBTZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODc4Mjk3XG4gICAgbGV0IGJhc2UgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICE9PSBcIm51bGxcIiA/IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gOiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBsZXQgaHJlZiA9IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHRvIDogY3JlYXRlUGF0aCh0byk7XG4gICAgaW52YXJpYW50KGJhc2UsIFwiTm8gd2luZG93LmxvY2F0aW9uLihvcmlnaW58aHJlZikgYXZhaWxhYmxlIHRvIGNyZWF0ZSBVUkwgZm9yIGhyZWY6IFwiICsgaHJlZik7XG4gICAgcmV0dXJuIG5ldyBVUkwoaHJlZiwgYmFzZSk7XG4gIH1cblxuICBsZXQgaGlzdG9yeSA9IHtcbiAgICBnZXQgYWN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9LFxuXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xuICAgICAgcmV0dXJuIGdldExvY2F0aW9uKHdpbmRvdywgZ2xvYmFsSGlzdG9yeSk7XG4gICAgfSxcblxuICAgIGxpc3Rlbihmbikge1xuICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkEgaGlzdG9yeSBvbmx5IGFjY2VwdHMgb25lIGFjdGl2ZSBsaXN0ZW5lclwiKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudFR5cGUsIGhhbmRsZVBvcCk7XG4gICAgICBsaXN0ZW5lciA9IGZuO1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoUG9wU3RhdGVFdmVudFR5cGUsIGhhbmRsZVBvcCk7XG4gICAgICAgIGxpc3RlbmVyID0gbnVsbDtcbiAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZUhyZWYodG8pIHtcbiAgICAgIHJldHVybiBjcmVhdGVIcmVmKHdpbmRvdywgdG8pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVVUkwsXG5cbiAgICBlbmNvZGVMb2NhdGlvbih0bykge1xuICAgICAgLy8gRW5jb2RlIGEgTG9jYXRpb24gdGhlIHNhbWUgd2F5IHdpbmRvdy5sb2NhdGlvbiB3b3VsZFxuICAgICAgbGV0IHVybCA9IGNyZWF0ZVVSTCh0byk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuICAgICAgICBzZWFyY2g6IHVybC5zZWFyY2gsXG4gICAgICAgIGhhc2g6IHVybC5oYXNoXG4gICAgICB9O1xuICAgIH0sXG5cbiAgICBwdXNoLFxuICAgIHJlcGxhY2UsXG5cbiAgICBnbyhuKSB7XG4gICAgICByZXR1cm4gZ2xvYmFsSGlzdG9yeS5nbyhuKTtcbiAgICB9XG5cbiAgfTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59IC8vI2VuZHJlZ2lvblxuXG52YXIgUmVzdWx0VHlwZTtcblxuKGZ1bmN0aW9uIChSZXN1bHRUeXBlKSB7XG4gIFJlc3VsdFR5cGVbXCJkYXRhXCJdID0gXCJkYXRhXCI7XG4gIFJlc3VsdFR5cGVbXCJkZWZlcnJlZFwiXSA9IFwiZGVmZXJyZWRcIjtcbiAgUmVzdWx0VHlwZVtcInJlZGlyZWN0XCJdID0gXCJyZWRpcmVjdFwiO1xuICBSZXN1bHRUeXBlW1wiZXJyb3JcIl0gPSBcImVycm9yXCI7XG59KShSZXN1bHRUeXBlIHx8IChSZXN1bHRUeXBlID0ge30pKTtcblxuZnVuY3Rpb24gaXNJbmRleFJvdXRlKHJvdXRlKSB7XG4gIHJldHVybiByb3V0ZS5pbmRleCA9PT0gdHJ1ZTtcbn0gLy8gV2FsayB0aGUgcm91dGUgdHJlZSBnZW5lcmF0aW5nIHVuaXF1ZSBJRHMgd2hlcmUgbmVjZXNzYXJ5IHNvIHdlIGFyZSB3b3JraW5nXG4vLyBzb2xlbHkgd2l0aCBBZ25vc3RpY0RhdGFSb3V0ZU9iamVjdCdzIHdpdGhpbiB0aGUgUm91dGVyXG5cblxuZnVuY3Rpb24gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZXMsIHBhcmVudFBhdGgsIGFsbElkcykge1xuICBpZiAocGFyZW50UGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50UGF0aCA9IFtdO1xuICB9XG5cbiAgaWYgKGFsbElkcyA9PT0gdm9pZCAwKSB7XG4gICAgYWxsSWRzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgcmV0dXJuIHJvdXRlcy5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xuICAgIGxldCB0cmVlUGF0aCA9IFsuLi5wYXJlbnRQYXRoLCBpbmRleF07XG4gICAgbGV0IGlkID0gdHlwZW9mIHJvdXRlLmlkID09PSBcInN0cmluZ1wiID8gcm91dGUuaWQgOiB0cmVlUGF0aC5qb2luKFwiLVwiKTtcbiAgICBpbnZhcmlhbnQocm91dGUuaW5kZXggIT09IHRydWUgfHwgIXJvdXRlLmNoaWxkcmVuLCBcIkNhbm5vdCBzcGVjaWZ5IGNoaWxkcmVuIG9uIGFuIGluZGV4IHJvdXRlXCIpO1xuICAgIGludmFyaWFudCghYWxsSWRzLmhhcyhpZCksIFwiRm91bmQgYSByb3V0ZSBpZCBjb2xsaXNpb24gb24gaWQgXFxcIlwiICsgaWQgKyBcIlxcXCIuICBSb3V0ZSBcIiArIFwiaWQncyBtdXN0IGJlIGdsb2JhbGx5IHVuaXF1ZSB3aXRoaW4gRGF0YSBSb3V0ZXIgdXNhZ2VzXCIpO1xuICAgIGFsbElkcy5hZGQoaWQpO1xuXG4gICAgaWYgKGlzSW5kZXhSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGxldCBpbmRleFJvdXRlID0gX2V4dGVuZHMoe30sIHJvdXRlLCB7XG4gICAgICAgIGlkXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGluZGV4Um91dGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBwYXRoT3JMYXlvdXRSb3V0ZSA9IF9leHRlbmRzKHt9LCByb3V0ZSwge1xuICAgICAgICBpZCxcbiAgICAgICAgY2hpbGRyZW46IHJvdXRlLmNoaWxkcmVuID8gY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgdHJlZVBhdGgsIGFsbElkcykgOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcGF0aE9yTGF5b3V0Um91dGU7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogTWF0Y2hlcyB0aGUgZ2l2ZW4gcm91dGVzIHRvIGEgbG9jYXRpb24gYW5kIHJldHVybnMgdGhlIG1hdGNoIGRhdGEuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS91dGlscy9tYXRjaC1yb3V0ZXNcbiAqL1xuXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uQXJnLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IHZvaWQgMCkge1xuICAgIGJhc2VuYW1lID0gXCIvXCI7XG4gIH1cblxuICBsZXQgbG9jYXRpb24gPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gIGxldCBwYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUobG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCIsIGJhc2VuYW1lKTtcblxuICBpZiAocGF0aG5hbWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGJyYW5jaGVzID0gZmxhdHRlblJvdXRlcyhyb3V0ZXMpO1xuICByYW5rUm91dGVCcmFuY2hlcyhicmFuY2hlcyk7XG4gIGxldCBtYXRjaGVzID0gbnVsbDtcblxuICBmb3IgKGxldCBpID0gMDsgbWF0Y2hlcyA9PSBudWxsICYmIGkgPCBicmFuY2hlcy5sZW5ndGg7ICsraSkge1xuICAgIG1hdGNoZXMgPSBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaGVzW2ldLCAvLyBJbmNvbWluZyBwYXRobmFtZXMgYXJlIGdlbmVyYWxseSBlbmNvZGVkIGZyb20gZWl0aGVyIHdpbmRvdy5sb2NhdGlvblxuICAgIC8vIG9yIGZyb20gcm91dGVyLm5hdmlnYXRlLCBidXQgd2Ugd2FudCB0byBtYXRjaCBhZ2FpbnN0IHRoZSB1bmVuY29kZWRcbiAgICAvLyBwYXRocyBpbiB0aGUgcm91dGUgZGVmaW5pdGlvbnMuICBNZW1vcnkgcm91dGVyIGxvY2F0aW9ucyB3b24ndCBiZVxuICAgIC8vIGVuY29kZWQgaGVyZSBidXQgdGhlcmUgYWxzbyBzaG91bGRuJ3QgYmUgYW55dGhpbmcgdG8gZGVjb2RlIHNvIHRoaXNcbiAgICAvLyBzaG91bGQgYmUgYSBzYWZlIG9wZXJhdGlvbi4gIFRoaXMgYXZvaWRzIG5lZWRpbmcgbWF0Y2hSb3V0ZXMgdG8gYmVcbiAgICAvLyBoaXN0b3J5LWF3YXJlLlxuICAgIHNhZmVseURlY29kZVVSSShwYXRobmFtZSkpO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Sb3V0ZXMocm91dGVzLCBicmFuY2hlcywgcGFyZW50c01ldGEsIHBhcmVudFBhdGgpIHtcbiAgaWYgKGJyYW5jaGVzID09PSB2b2lkIDApIHtcbiAgICBicmFuY2hlcyA9IFtdO1xuICB9XG5cbiAgaWYgKHBhcmVudHNNZXRhID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRzTWV0YSA9IFtdO1xuICB9XG5cbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBcIlwiO1xuICB9XG5cbiAgbGV0IGZsYXR0ZW5Sb3V0ZSA9IChyb3V0ZSwgaW5kZXgsIHJlbGF0aXZlUGF0aCkgPT4ge1xuICAgIGxldCBtZXRhID0ge1xuICAgICAgcmVsYXRpdmVQYXRoOiByZWxhdGl2ZVBhdGggPT09IHVuZGVmaW5lZCA/IHJvdXRlLnBhdGggfHwgXCJcIiA6IHJlbGF0aXZlUGF0aCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHJvdXRlLmNhc2VTZW5zaXRpdmUgPT09IHRydWUsXG4gICAgICBjaGlsZHJlbkluZGV4OiBpbmRleCxcbiAgICAgIHJvdXRlXG4gICAgfTtcblxuICAgIGlmIChtZXRhLnJlbGF0aXZlUGF0aC5zdGFydHNXaXRoKFwiL1wiKSkge1xuICAgICAgaW52YXJpYW50KG1ldGEucmVsYXRpdmVQYXRoLnN0YXJ0c1dpdGgocGFyZW50UGF0aCksIFwiQWJzb2x1dGUgcm91dGUgcGF0aCBcXFwiXCIgKyBtZXRhLnJlbGF0aXZlUGF0aCArIFwiXFxcIiBuZXN0ZWQgdW5kZXIgcGF0aCBcIiArIChcIlxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCIgaXMgbm90IHZhbGlkLiBBbiBhYnNvbHV0ZSBjaGlsZCByb3V0ZSBwYXRoIFwiKSArIFwibXVzdCBzdGFydCB3aXRoIHRoZSBjb21iaW5lZCBwYXRoIG9mIGFsbCBpdHMgcGFyZW50IHJvdXRlcy5cIik7XG4gICAgICBtZXRhLnJlbGF0aXZlUGF0aCA9IG1ldGEucmVsYXRpdmVQYXRoLnNsaWNlKHBhcmVudFBhdGgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IGpvaW5QYXRocyhbcGFyZW50UGF0aCwgbWV0YS5yZWxhdGl2ZVBhdGhdKTtcbiAgICBsZXQgcm91dGVzTWV0YSA9IHBhcmVudHNNZXRhLmNvbmNhdChtZXRhKTsgLy8gQWRkIHRoZSBjaGlsZHJlbiBiZWZvcmUgYWRkaW5nIHRoaXMgcm91dGUgdG8gdGhlIGFycmF5IHNvIHdlIHRyYXZlcnNlIHRoZVxuICAgIC8vIHJvdXRlIHRyZWUgZGVwdGgtZmlyc3QgYW5kIGNoaWxkIHJvdXRlcyBhcHBlYXIgYmVmb3JlIHRoZWlyIHBhcmVudHMgaW5cbiAgICAvLyB0aGUgXCJmbGF0dGVuZWRcIiB2ZXJzaW9uLlxuXG4gICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGludmFyaWFudCggLy8gT3VyIHR5cGVzIGtub3cgYmV0dGVyLCBidXQgcnVudGltZSBKUyBtYXkgbm90IVxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgcm91dGUuaW5kZXggIT09IHRydWUsIFwiSW5kZXggcm91dGVzIG11c3Qgbm90IGhhdmUgY2hpbGQgcm91dGVzLiBQbGVhc2UgcmVtb3ZlIFwiICsgKFwiYWxsIGNoaWxkIHJvdXRlcyBmcm9tIHJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIi5cIikpO1xuICAgICAgZmxhdHRlblJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgYnJhbmNoZXMsIHJvdXRlc01ldGEsIHBhdGgpO1xuICAgIH0gLy8gUm91dGVzIHdpdGhvdXQgYSBwYXRoIHNob3VsZG4ndCBldmVyIG1hdGNoIGJ5IHRoZW1zZWx2ZXMgdW5sZXNzIHRoZXkgYXJlXG4gICAgLy8gaW5kZXggcm91dGVzLCBzbyBkb24ndCBhZGQgdGhlbSB0byB0aGUgbGlzdCBvZiBwb3NzaWJsZSBicmFuY2hlcy5cblxuXG4gICAgaWYgKHJvdXRlLnBhdGggPT0gbnVsbCAmJiAhcm91dGUuaW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBicmFuY2hlcy5wdXNoKHtcbiAgICAgIHBhdGgsXG4gICAgICBzY29yZTogY29tcHV0ZVNjb3JlKHBhdGgsIHJvdXRlLmluZGV4KSxcbiAgICAgIHJvdXRlc01ldGFcbiAgICB9KTtcbiAgfTtcblxuICByb3V0ZXMuZm9yRWFjaCgocm91dGUsIGluZGV4KSA9PiB7XG4gICAgdmFyIF9yb3V0ZSRwYXRoO1xuXG4gICAgLy8gY29hcnNlLWdyYWluIGNoZWNrIGZvciBvcHRpb25hbCBwYXJhbXNcbiAgICBpZiAocm91dGUucGF0aCA9PT0gXCJcIiB8fCAhKChfcm91dGUkcGF0aCA9IHJvdXRlLnBhdGgpICE9IG51bGwgJiYgX3JvdXRlJHBhdGguaW5jbHVkZXMoXCI/XCIpKSkge1xuICAgICAgZmxhdHRlblJvdXRlKHJvdXRlLCBpbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGV4cGxvZGVkIG9mIGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHJvdXRlLnBhdGgpKSB7XG4gICAgICAgIGZsYXR0ZW5Sb3V0ZShyb3V0ZSwgaW5kZXgsIGV4cGxvZGVkKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYnJhbmNoZXM7XG59XG4vKipcbiAqIENvbXB1dGVzIGFsbCBjb21iaW5hdGlvbnMgb2Ygb3B0aW9uYWwgcGF0aCBzZWdtZW50cyBmb3IgYSBnaXZlbiBwYXRoLFxuICogZXhjbHVkaW5nIGNvbWJpbmF0aW9ucyB0aGF0IGFyZSBhbWJpZ3VvdXMgYW5kIG9mIGxvd2VyIHByaW9yaXR5LlxuICpcbiAqIEZvciBleGFtcGxlLCBgL29uZS86dHdvPy90aHJlZS86Zm91cj8vOmZpdmU/YCBleHBsb2RlcyB0bzpcbiAqIC0gYC9vbmUvdGhyZWVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWVgXG4gKiAtIGAvb25lL3RocmVlLzpmb3VyYFxuICogLSBgL29uZS90aHJlZS86Zml2ZWBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zm91cmBcbiAqIC0gYC9vbmUvOnR3by90aHJlZS86Zml2ZWBcbiAqIC0gYC9vbmUvdGhyZWUvOmZvdXIvOmZpdmVgXG4gKiAtIGAvb25lLzp0d28vdGhyZWUvOmZvdXIvOmZpdmVgXG4gKi9cblxuXG5mdW5jdGlvbiBleHBsb2RlT3B0aW9uYWxTZWdtZW50cyhwYXRoKSB7XG4gIGxldCBzZWdtZW50cyA9IHBhdGguc3BsaXQoXCIvXCIpO1xuICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGxldCBbZmlyc3QsIC4uLnJlc3RdID0gc2VnbWVudHM7IC8vIE9wdGlvbmFsIHBhdGggc2VnbWVudHMgYXJlIGRlbm90ZWQgYnkgYSB0cmFpbGluZyBgP2BcblxuICBsZXQgaXNPcHRpb25hbCA9IGZpcnN0LmVuZHNXaXRoKFwiP1wiKTsgLy8gQ29tcHV0ZSB0aGUgY29ycmVzcG9uZGluZyByZXF1aXJlZCBzZWdtZW50OiBgZm9vP2AgLT4gYGZvb2BcblxuICBsZXQgcmVxdWlyZWQgPSBmaXJzdC5yZXBsYWNlKC9cXD8kLywgXCJcIik7XG5cbiAgaWYgKHJlc3QubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSW50ZXByZXQgZW1wdHkgc3RyaW5nIGFzIG9taXR0aW5nIGFuIG9wdGlvbmFsIHNlZ21lbnRcbiAgICAvLyBgW1wib25lXCIsIFwiXCIsIFwidGhyZWVcIl1gIGNvcnJlc3BvbmRzIHRvIG9taXR0aW5nIGA6dHdvYCBmcm9tIGAvb25lLzp0d28/L3RocmVlYCAtPiBgL29uZS90aHJlZWBcbiAgICByZXR1cm4gaXNPcHRpb25hbCA/IFtyZXF1aXJlZCwgXCJcIl0gOiBbcmVxdWlyZWRdO1xuICB9XG5cbiAgbGV0IHJlc3RFeHBsb2RlZCA9IGV4cGxvZGVPcHRpb25hbFNlZ21lbnRzKHJlc3Quam9pbihcIi9cIikpO1xuICBsZXQgcmVzdWx0ID0gW107IC8vIEFsbCBjaGlsZCBwYXRocyB3aXRoIHRoZSBwcmVmaXguICBEbyB0aGlzIGZvciBhbGwgY2hpbGRyZW4gYmVmb3JlIHRoZVxuICAvLyBvcHRpb25hbCB2ZXJzaW9uIGZvciBhbGwgY2hpbGRyZW4gc28gd2UgZ2V0IGNvbnNpc3RlbnQgb3JkZXJpbmcgd2hlcmUgdGhlXG4gIC8vIHBhcmVudCBvcHRpb25hbCBhc3BlY3QgaXMgcHJlZmVycmVkIGFzIHJlcXVpcmVkLiAgT3RoZXJ3aXNlLCB3ZSBjYW4gZ2V0XG4gIC8vIGNoaWxkIHNlY3Rpb25zIGludGVyc3BlcnNlZCB3aGVyZSBkZWVwZXIgb3B0aW9uYWwgc2VnbWVudHMgYXJlIGhpZ2hlciB0aGFuXG4gIC8vIHBhcmVudCBvcHRpb25hbCBzZWdtZW50cywgd2hlcmUgZm9yIGV4YW1wbGUsIC86dHdvIHdvdWxkIGV4cGxvZGVzIF9lYXJsaWVyX1xuICAvLyB0aGVuIC86b25lLiAgQnkgYWx3YXlzIGluY2x1ZGluZyB0aGUgcGFyZW50IGFzIHJlcXVpcmVkIF9mb3IgYWxsIGNoaWxkcmVuX1xuICAvLyBmaXJzdCwgd2UgYXZvaWQgdGhpcyBpc3N1ZVxuXG4gIHJlc3VsdC5wdXNoKC4uLnJlc3RFeHBsb2RlZC5tYXAoc3VicGF0aCA9PiBzdWJwYXRoID09PSBcIlwiID8gcmVxdWlyZWQgOiBbcmVxdWlyZWQsIHN1YnBhdGhdLmpvaW4oXCIvXCIpKSk7IC8vIFRoZW4gaWYgdGhpcyBpcyBhbiBvcHRpb25hbCB2YWx1ZSwgYWRkIGFsbCBjaGlsZCB2ZXJzaW9ucyB3aXRob3V0XG5cbiAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICByZXN1bHQucHVzaCguLi5yZXN0RXhwbG9kZWQpO1xuICB9IC8vIGZvciBhYnNvbHV0ZSBwYXRocywgZW5zdXJlIGAvYCBpbnN0ZWFkIG9mIGVtcHR5IHNlZ21lbnRcblxuXG4gIHJldHVybiByZXN1bHQubWFwKGV4cGxvZGVkID0+IHBhdGguc3RhcnRzV2l0aChcIi9cIikgJiYgZXhwbG9kZWQgPT09IFwiXCIgPyBcIi9cIiA6IGV4cGxvZGVkKTtcbn1cblxuZnVuY3Rpb24gcmFua1JvdXRlQnJhbmNoZXMoYnJhbmNoZXMpIHtcbiAgYnJhbmNoZXMuc29ydCgoYSwgYikgPT4gYS5zY29yZSAhPT0gYi5zY29yZSA/IGIuc2NvcmUgLSBhLnNjb3JlIC8vIEhpZ2hlciBzY29yZSBmaXJzdFxuICA6IGNvbXBhcmVJbmRleGVzKGEucm91dGVzTWV0YS5tYXAobWV0YSA9PiBtZXRhLmNoaWxkcmVuSW5kZXgpLCBiLnJvdXRlc01ldGEubWFwKG1ldGEgPT4gbWV0YS5jaGlsZHJlbkluZGV4KSkpO1xufVxuXG5jb25zdCBwYXJhbVJlID0gL146XFx3KyQvO1xuY29uc3QgZHluYW1pY1NlZ21lbnRWYWx1ZSA9IDM7XG5jb25zdCBpbmRleFJvdXRlVmFsdWUgPSAyO1xuY29uc3QgZW1wdHlTZWdtZW50VmFsdWUgPSAxO1xuY29uc3Qgc3RhdGljU2VnbWVudFZhbHVlID0gMTA7XG5jb25zdCBzcGxhdFBlbmFsdHkgPSAtMjtcblxuY29uc3QgaXNTcGxhdCA9IHMgPT4gcyA9PT0gXCIqXCI7XG5cbmZ1bmN0aW9uIGNvbXB1dGVTY29yZShwYXRoLCBpbmRleCkge1xuICBsZXQgc2VnbWVudHMgPSBwYXRoLnNwbGl0KFwiL1wiKTtcbiAgbGV0IGluaXRpYWxTY29yZSA9IHNlZ21lbnRzLmxlbmd0aDtcblxuICBpZiAoc2VnbWVudHMuc29tZShpc1NwbGF0KSkge1xuICAgIGluaXRpYWxTY29yZSArPSBzcGxhdFBlbmFsdHk7XG4gIH1cblxuICBpZiAoaW5kZXgpIHtcbiAgICBpbml0aWFsU2NvcmUgKz0gaW5kZXhSb3V0ZVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRzLmZpbHRlcihzID0+ICFpc1NwbGF0KHMpKS5yZWR1Y2UoKHNjb3JlLCBzZWdtZW50KSA9PiBzY29yZSArIChwYXJhbVJlLnRlc3Qoc2VnbWVudCkgPyBkeW5hbWljU2VnbWVudFZhbHVlIDogc2VnbWVudCA9PT0gXCJcIiA/IGVtcHR5U2VnbWVudFZhbHVlIDogc3RhdGljU2VnbWVudFZhbHVlKSwgaW5pdGlhbFNjb3JlKTtcbn1cblxuZnVuY3Rpb24gY29tcGFyZUluZGV4ZXMoYSwgYikge1xuICBsZXQgc2libGluZ3MgPSBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5zbGljZSgwLCAtMSkuZXZlcnkoKG4sIGkpID0+IG4gPT09IGJbaV0pO1xuICByZXR1cm4gc2libGluZ3MgPyAvLyBJZiB0d28gcm91dGVzIGFyZSBzaWJsaW5ncywgd2Ugc2hvdWxkIHRyeSB0byBtYXRjaCB0aGUgZWFybGllciBzaWJsaW5nXG4gIC8vIGZpcnN0LiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gaGF2ZSBmaW5lLWdyYWluZWQgY29udHJvbCBvdmVyIHRoZSBtYXRjaGluZ1xuICAvLyBiZWhhdmlvciBieSBzaW1wbHkgcHV0dGluZyByb3V0ZXMgd2l0aCBpZGVudGljYWwgcGF0aHMgaW4gdGhlIG9yZGVyIHRoZXlcbiAgLy8gd2FudCB0aGVtIHRyaWVkLlxuICBhW2EubGVuZ3RoIC0gMV0gLSBiW2IubGVuZ3RoIC0gMV0gOiAvLyBPdGhlcndpc2UsIGl0IGRvZXNuJ3QgcmVhbGx5IG1ha2Ugc2Vuc2UgdG8gcmFuayBub24tc2libGluZ3MgYnkgaW5kZXgsXG4gIC8vIHNvIHRoZXkgc29ydCBlcXVhbGx5LlxuICAwO1xufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlQnJhbmNoKGJyYW5jaCwgcGF0aG5hbWUpIHtcbiAgbGV0IHtcbiAgICByb3V0ZXNNZXRhXG4gIH0gPSBicmFuY2g7XG4gIGxldCBtYXRjaGVkUGFyYW1zID0ge307XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBcIi9cIjtcbiAgbGV0IG1hdGNoZXMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlc01ldGEubGVuZ3RoOyArK2kpIHtcbiAgICBsZXQgbWV0YSA9IHJvdXRlc01ldGFbaV07XG4gICAgbGV0IGVuZCA9IGkgPT09IHJvdXRlc01ldGEubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkUGF0aG5hbWUgPT09IFwiL1wiID8gcGF0aG5hbWUgOiBwYXRobmFtZS5zbGljZShtYXRjaGVkUGF0aG5hbWUubGVuZ3RoKSB8fCBcIi9cIjtcbiAgICBsZXQgbWF0Y2ggPSBtYXRjaFBhdGgoe1xuICAgICAgcGF0aDogbWV0YS5yZWxhdGl2ZVBhdGgsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBtZXRhLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbmRcbiAgICB9LCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gICAgT2JqZWN0LmFzc2lnbihtYXRjaGVkUGFyYW1zLCBtYXRjaC5wYXJhbXMpO1xuICAgIGxldCByb3V0ZSA9IG1ldGEucm91dGU7XG4gICAgbWF0Y2hlcy5wdXNoKHtcbiAgICAgIC8vIFRPRE86IENhbiB0aGlzIGFzIGJlIGF2b2lkZWQ/XG4gICAgICBwYXJhbXM6IG1hdGNoZWRQYXJhbXMsXG4gICAgICBwYXRobmFtZTogam9pblBhdGhzKFttYXRjaGVkUGF0aG5hbWUsIG1hdGNoLnBhdGhuYW1lXSksXG4gICAgICBwYXRobmFtZUJhc2U6IG5vcm1hbGl6ZVBhdGhuYW1lKGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKSksXG4gICAgICByb3V0ZVxuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoLnBhdGhuYW1lQmFzZSAhPT0gXCIvXCIpIHtcbiAgICAgIG1hdGNoZWRQYXRobmFtZSA9IGpvaW5QYXRocyhbbWF0Y2hlZFBhdGhuYW1lLCBtYXRjaC5wYXRobmFtZUJhc2VdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlcztcbn1cbi8qKlxuICogUmV0dXJucyBhIHBhdGggd2l0aCBwYXJhbXMgaW50ZXJwb2xhdGVkLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvZ2VuZXJhdGUtcGF0aFxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKG9yaWdpbmFsUGF0aCwgcGFyYW1zKSB7XG4gIGlmIChwYXJhbXMgPT09IHZvaWQgMCkge1xuICAgIHBhcmFtcyA9IHt9O1xuICB9XG5cbiAgbGV0IHBhdGggPSBvcmlnaW5hbFBhdGg7XG5cbiAgaWYgKHBhdGguZW5kc1dpdGgoXCIqXCIpICYmIHBhdGggIT09IFwiKlwiICYmICFwYXRoLmVuZHNXaXRoKFwiLypcIikpIHtcbiAgICB3YXJuaW5nKGZhbHNlLCBcIlJvdXRlIHBhdGggXFxcIlwiICsgcGF0aCArIFwiXFxcIiB3aWxsIGJlIHRyZWF0ZWQgYXMgaWYgaXQgd2VyZSBcIiArIChcIlxcXCJcIiArIHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIikgKyBcIlxcXCIgYmVjYXVzZSB0aGUgYCpgIGNoYXJhY3RlciBtdXN0IFwiKSArIFwiYWx3YXlzIGZvbGxvdyBhIGAvYCBpbiB0aGUgcGF0dGVybi4gVG8gZ2V0IHJpZCBvZiB0aGlzIHdhcm5pbmcsIFwiICsgKFwicGxlYXNlIGNoYW5nZSB0aGUgcm91dGUgcGF0aCB0byBcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiLlwiKSk7XG4gICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFwqJC8sIFwiLypcIik7XG4gIH1cblxuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9eOihcXHcrKShcXD8/KS9nLCAoXywga2V5LCBvcHRpb25hbCkgPT4ge1xuICAgIGxldCBwYXJhbSA9IHBhcmFtc1trZXldO1xuXG4gICAgaWYgKG9wdGlvbmFsID09PSBcIj9cIikge1xuICAgICAgcmV0dXJuIHBhcmFtID09IG51bGwgPyBcIlwiIDogcGFyYW07XG4gICAgfVxuXG4gICAgaWYgKHBhcmFtID09IG51bGwpIHtcbiAgICAgIGludmFyaWFudChmYWxzZSwgXCJNaXNzaW5nIFxcXCI6XCIgKyBrZXkgKyBcIlxcXCIgcGFyYW1cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtO1xuICB9KS5yZXBsYWNlKC9cXC86KFxcdyspKFxcPz8pL2csIChfLCBrZXksIG9wdGlvbmFsKSA9PiB7XG4gICAgbGV0IHBhcmFtID0gcGFyYW1zW2tleV07XG5cbiAgICBpZiAob3B0aW9uYWwgPT09IFwiP1wiKSB7XG4gICAgICByZXR1cm4gcGFyYW0gPT0gbnVsbCA/IFwiXCIgOiBcIi9cIiArIHBhcmFtO1xuICAgIH1cblxuICAgIGlmIChwYXJhbSA9PSBudWxsKSB7XG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiTWlzc2luZyBcXFwiOlwiICsga2V5ICsgXCJcXFwiIHBhcmFtXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBcIi9cIiArIHBhcmFtO1xuICB9KSAvLyBSZW1vdmUgYW55IG9wdGlvbmFsIG1hcmtlcnMgZnJvbSBvcHRpb25hbCBzdGF0aWMgc2VnbWVudHNcbiAgLnJlcGxhY2UoL1xcPy9nLCBcIlwiKS5yZXBsYWNlKC8oXFwvPylcXCovLCAoXywgcHJlZml4LCBfXywgc3RyKSA9PiB7XG4gICAgY29uc3Qgc3RhciA9IFwiKlwiO1xuXG4gICAgaWYgKHBhcmFtc1tzdGFyXSA9PSBudWxsKSB7XG4gICAgICAvLyBJZiBubyBzcGxhdCB3YXMgcHJvdmlkZWQsIHRyaW0gdGhlIHRyYWlsaW5nIHNsYXNoIF91bmxlc3NfIGl0J3NcbiAgICAgIC8vIHRoZSBlbnRpcmUgcGF0aFxuICAgICAgcmV0dXJuIHN0ciA9PT0gXCIvKlwiID8gXCIvXCIgOiBcIlwiO1xuICAgIH0gLy8gQXBwbHkgdGhlIHNwbGF0XG5cblxuICAgIHJldHVybiBcIlwiICsgcHJlZml4ICsgcGFyYW1zW3N0YXJdO1xuICB9KTtcbn1cbi8qKlxuICogUGVyZm9ybXMgcGF0dGVybiBtYXRjaGluZyBvbiBhIFVSTCBwYXRobmFtZSBhbmQgcmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dFxuICogdGhlIG1hdGNoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvbWF0Y2gtcGF0aFxuICovXG5cbmZ1bmN0aW9uIG1hdGNoUGF0aChwYXR0ZXJuLCBwYXRobmFtZSkge1xuICBpZiAodHlwZW9mIHBhdHRlcm4gPT09IFwic3RyaW5nXCIpIHtcbiAgICBwYXR0ZXJuID0ge1xuICAgICAgcGF0aDogcGF0dGVybixcbiAgICAgIGNhc2VTZW5zaXRpdmU6IGZhbHNlLFxuICAgICAgZW5kOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIGxldCBbbWF0Y2hlciwgcGFyYW1OYW1lc10gPSBjb21waWxlUGF0aChwYXR0ZXJuLnBhdGgsIHBhdHRlcm4uY2FzZVNlbnNpdGl2ZSwgcGF0dGVybi5lbmQpO1xuICBsZXQgbWF0Y2ggPSBwYXRobmFtZS5tYXRjaChtYXRjaGVyKTtcbiAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG4gIGxldCBtYXRjaGVkUGF0aG5hbWUgPSBtYXRjaFswXTtcbiAgbGV0IHBhdGhuYW1lQmFzZSA9IG1hdGNoZWRQYXRobmFtZS5yZXBsYWNlKC8oLilcXC8rJC8sIFwiJDFcIik7XG4gIGxldCBjYXB0dXJlR3JvdXBzID0gbWF0Y2guc2xpY2UoMSk7XG4gIGxldCBwYXJhbXMgPSBwYXJhbU5hbWVzLnJlZHVjZSgobWVtbywgcGFyYW1OYW1lLCBpbmRleCkgPT4ge1xuICAgIC8vIFdlIG5lZWQgdG8gY29tcHV0ZSB0aGUgcGF0aG5hbWVCYXNlIGhlcmUgdXNpbmcgdGhlIHJhdyBzcGxhdCB2YWx1ZVxuICAgIC8vIGluc3RlYWQgb2YgdXNpbmcgcGFyYW1zW1wiKlwiXSBsYXRlciBiZWNhdXNlIGl0IHdpbGwgYmUgZGVjb2RlZCB0aGVuXG4gICAgaWYgKHBhcmFtTmFtZSA9PT0gXCIqXCIpIHtcbiAgICAgIGxldCBzcGxhdFZhbHVlID0gY2FwdHVyZUdyb3Vwc1tpbmRleF0gfHwgXCJcIjtcbiAgICAgIHBhdGhuYW1lQmFzZSA9IG1hdGNoZWRQYXRobmFtZS5zbGljZSgwLCBtYXRjaGVkUGF0aG5hbWUubGVuZ3RoIC0gc3BsYXRWYWx1ZS5sZW5ndGgpLnJlcGxhY2UoLyguKVxcLyskLywgXCIkMVwiKTtcbiAgICB9XG5cbiAgICBtZW1vW3BhcmFtTmFtZV0gPSBzYWZlbHlEZWNvZGVVUklDb21wb25lbnQoY2FwdHVyZUdyb3Vwc1tpbmRleF0gfHwgXCJcIiwgcGFyYW1OYW1lKTtcbiAgICByZXR1cm4gbWVtbztcbiAgfSwge30pO1xuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICBwYXRobmFtZTogbWF0Y2hlZFBhdGhuYW1lLFxuICAgIHBhdGhuYW1lQmFzZSxcbiAgICBwYXR0ZXJuXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgsIGNhc2VTZW5zaXRpdmUsIGVuZCkge1xuICBpZiAoY2FzZVNlbnNpdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgY2FzZVNlbnNpdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGVuZCA9PT0gdm9pZCAwKSB7XG4gICAgZW5kID0gdHJ1ZTtcbiAgfVxuXG4gIHdhcm5pbmcocGF0aCA9PT0gXCIqXCIgfHwgIXBhdGguZW5kc1dpdGgoXCIqXCIpIHx8IHBhdGguZW5kc1dpdGgoXCIvKlwiKSwgXCJSb3V0ZSBwYXRoIFxcXCJcIiArIHBhdGggKyBcIlxcXCIgd2lsbCBiZSB0cmVhdGVkIGFzIGlmIGl0IHdlcmUgXCIgKyAoXCJcXFwiXCIgKyBwYXRoLnJlcGxhY2UoL1xcKiQvLCBcIi8qXCIpICsgXCJcXFwiIGJlY2F1c2UgdGhlIGAqYCBjaGFyYWN0ZXIgbXVzdCBcIikgKyBcImFsd2F5cyBmb2xsb3cgYSBgL2AgaW4gdGhlIHBhdHRlcm4uIFRvIGdldCByaWQgb2YgdGhpcyB3YXJuaW5nLCBcIiArIChcInBsZWFzZSBjaGFuZ2UgdGhlIHJvdXRlIHBhdGggdG8gXFxcIlwiICsgcGF0aC5yZXBsYWNlKC9cXCokLywgXCIvKlwiKSArIFwiXFxcIi5cIikpO1xuICBsZXQgcGFyYW1OYW1lcyA9IFtdO1xuICBsZXQgcmVnZXhwU291cmNlID0gXCJeXCIgKyBwYXRoLnJlcGxhY2UoL1xcLypcXCo/JC8sIFwiXCIpIC8vIElnbm9yZSB0cmFpbGluZyAvIGFuZCAvKiwgd2UnbGwgaGFuZGxlIGl0IGJlbG93XG4gIC5yZXBsYWNlKC9eXFwvKi8sIFwiL1wiKSAvLyBNYWtlIHN1cmUgaXQgaGFzIGEgbGVhZGluZyAvXG4gIC5yZXBsYWNlKC9bXFxcXC4qK14kP3t9fCgpW1xcXV0vZywgXCJcXFxcJCZcIikgLy8gRXNjYXBlIHNwZWNpYWwgcmVnZXggY2hhcnNcbiAgLnJlcGxhY2UoL1xcLzooXFx3KykvZywgKF8sIHBhcmFtTmFtZSkgPT4ge1xuICAgIHBhcmFtTmFtZXMucHVzaChwYXJhbU5hbWUpO1xuICAgIHJldHVybiBcIi8oW15cXFxcL10rKVwiO1xuICB9KTtcblxuICBpZiAocGF0aC5lbmRzV2l0aChcIipcIikpIHtcbiAgICBwYXJhbU5hbWVzLnB1c2goXCIqXCIpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBwYXRoID09PSBcIipcIiB8fCBwYXRoID09PSBcIi8qXCIgPyBcIiguKikkXCIgLy8gQWxyZWFkeSBtYXRjaGVkIHRoZSBpbml0aWFsIC8sIGp1c3QgbWF0Y2ggdGhlIHJlc3RcbiAgICA6IFwiKD86XFxcXC8oLispfFxcXFwvKikkXCI7IC8vIERvbid0IGluY2x1ZGUgdGhlIC8gaW4gcGFyYW1zW1wiKlwiXVxuICB9IGVsc2UgaWYgKGVuZCkge1xuICAgIC8vIFdoZW4gbWF0Y2hpbmcgdG8gdGhlIGVuZCwgaWdub3JlIHRyYWlsaW5nIHNsYXNoZXNcbiAgICByZWdleHBTb3VyY2UgKz0gXCJcXFxcLyokXCI7XG4gIH0gZWxzZSBpZiAocGF0aCAhPT0gXCJcIiAmJiBwYXRoICE9PSBcIi9cIikge1xuICAgIC8vIElmIG91ciBwYXRoIGlzIG5vbi1lbXB0eSBhbmQgY29udGFpbnMgYW55dGhpbmcgYmV5b25kIGFuIGluaXRpYWwgc2xhc2gsXG4gICAgLy8gdGhlbiB3ZSBoYXZlIF9zb21lXyBmb3JtIG9mIHBhdGggaW4gb3VyIHJlZ2V4IHNvIHdlIHNob3VsZCBleHBlY3QgdG9cbiAgICAvLyBtYXRjaCBvbmx5IGlmIHdlIGZpbmQgdGhlIGVuZCBvZiB0aGlzIHBhdGggc2VnbWVudC4gIExvb2sgZm9yIGFuIG9wdGlvbmFsXG4gICAgLy8gbm9uLWNhcHR1cmVkIHRyYWlsaW5nIHNsYXNoICh0byBtYXRjaCBhIHBvcnRpb24gb2YgdGhlIFVSTCkgb3IgdGhlIGVuZFxuICAgIC8vIG9mIHRoZSBwYXRoIChpZiB3ZSd2ZSBtYXRjaGVkIHRvIHRoZSBlbmQpLiAgV2UgdXNlZCB0byBkbyB0aGlzIHdpdGggYVxuICAgIC8vIHdvcmQgYm91bmRhcnkgYnV0IHRoYXQgZ2l2ZXMgZmFsc2UgcG9zaXRpdmVzIG9uIHJvdXRlcyBsaWtlXG4gICAgLy8gL3VzZXItcHJlZmVyZW5jZXMgc2luY2UgYC1gIGNvdW50cyBhcyBhIHdvcmQgYm91bmRhcnkuXG4gICAgcmVnZXhwU291cmNlICs9IFwiKD86KD89XFxcXC98JCkpXCI7XG4gIH0gZWxzZSA7XG5cbiAgbGV0IG1hdGNoZXIgPSBuZXcgUmVnRXhwKHJlZ2V4cFNvdXJjZSwgY2FzZVNlbnNpdGl2ZSA/IHVuZGVmaW5lZCA6IFwiaVwiKTtcbiAgcmV0dXJuIFttYXRjaGVyLCBwYXJhbU5hbWVzXTtcbn1cblxuZnVuY3Rpb24gc2FmZWx5RGVjb2RlVVJJKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSSh2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgd2FybmluZyhmYWxzZSwgXCJUaGUgVVJMIHBhdGggXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgY291bGQgbm90IGJlIGRlY29kZWQgYmVjYXVzZSBpdCBpcyBpcyBhIFwiICsgXCJtYWxmb3JtZWQgVVJMIHNlZ21lbnQuIFRoaXMgaXMgcHJvYmFibHkgZHVlIHRvIGEgYmFkIHBlcmNlbnQgXCIgKyAoXCJlbmNvZGluZyAoXCIgKyBlcnJvciArIFwiKS5cIikpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYWZlbHlEZWNvZGVVUklDb21wb25lbnQodmFsdWUsIHBhcmFtTmFtZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHdhcm5pbmcoZmFsc2UsIFwiVGhlIHZhbHVlIGZvciB0aGUgVVJMIHBhcmFtIFxcXCJcIiArIHBhcmFtTmFtZSArIFwiXFxcIiB3aWxsIG5vdCBiZSBkZWNvZGVkIGJlY2F1c2VcIiArIChcIiB0aGUgc3RyaW5nIFxcXCJcIiArIHZhbHVlICsgXCJcXFwiIGlzIGEgbWFsZm9ybWVkIFVSTCBzZWdtZW50LiBUaGlzIGlzIHByb2JhYmx5XCIpICsgKFwiIGR1ZSB0byBhIGJhZCBwZXJjZW50IGVuY29kaW5nIChcIiArIGVycm9yICsgXCIpLlwiKSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGhuYW1lLCBiYXNlbmFtZSkge1xuICBpZiAoYmFzZW5hbWUgPT09IFwiL1wiKSByZXR1cm4gcGF0aG5hbWU7XG5cbiAgaWYgKCFwYXRobmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoYmFzZW5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBXZSB3YW50IHRvIGxlYXZlIHRyYWlsaW5nIHNsYXNoIGJlaGF2aW9yIGluIHRoZSB1c2VyJ3MgY29udHJvbCwgc28gaWYgdGhleVxuICAvLyBzcGVjaWZ5IGEgYmFzZW5hbWUgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLCB3ZSBzaG91bGQgc3VwcG9ydCBpdFxuXG5cbiAgbGV0IHN0YXJ0SW5kZXggPSBiYXNlbmFtZS5lbmRzV2l0aChcIi9cIikgPyBiYXNlbmFtZS5sZW5ndGggLSAxIDogYmFzZW5hbWUubGVuZ3RoO1xuICBsZXQgbmV4dENoYXIgPSBwYXRobmFtZS5jaGFyQXQoc3RhcnRJbmRleCk7XG5cbiAgaWYgKG5leHRDaGFyICYmIG5leHRDaGFyICE9PSBcIi9cIikge1xuICAgIC8vIHBhdGhuYW1lIGRvZXMgbm90IHN0YXJ0IHdpdGggYmFzZW5hbWUvXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gcGF0aG5hbWUuc2xpY2Uoc3RhcnRJbmRleCkgfHwgXCIvXCI7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gd2FybmluZyhjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLndhcm4obWVzc2FnZSk7XG5cbiAgICB0cnkge1xuICAgICAgLy8gV2VsY29tZSB0byBkZWJ1Z2dpbmcgQHJlbWl4LXJ1bi9yb3V0ZXIhXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBlcnJvciBpcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB5b3UgY2FuIG1vcmUgZWFzaWx5XG4gICAgICAvLyBmaW5kIHRoZSBzb3VyY2UgZm9yIGEgd2FybmluZyB0aGF0IGFwcGVhcnMgaW4gdGhlIGNvbnNvbGUgYnlcbiAgICAgIC8vIGVuYWJsaW5nIFwicGF1c2Ugb24gZXhjZXB0aW9uc1wiIGluIHlvdXIgSmF2YVNjcmlwdCBkZWJ1Z2dlci5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmVzb2x2ZWQgcGF0aCBvYmplY3QgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIHBhdGhuYW1lLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvcmVzb2x2ZS1wYXRoXG4gKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGgodG8sIGZyb21QYXRobmFtZSkge1xuICBpZiAoZnJvbVBhdGhuYW1lID09PSB2b2lkIDApIHtcbiAgICBmcm9tUGF0aG5hbWUgPSBcIi9cIjtcbiAgfVxuXG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IHRvUGF0aG5hbWUsXG4gICAgc2VhcmNoID0gXCJcIixcbiAgICBoYXNoID0gXCJcIlxuICB9ID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKHRvKSA6IHRvO1xuICBsZXQgcGF0aG5hbWUgPSB0b1BhdGhuYW1lID8gdG9QYXRobmFtZS5zdGFydHNXaXRoKFwiL1wiKSA/IHRvUGF0aG5hbWUgOiByZXNvbHZlUGF0aG5hbWUodG9QYXRobmFtZSwgZnJvbVBhdGhuYW1lKSA6IGZyb21QYXRobmFtZTtcbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2g6IG5vcm1hbGl6ZVNlYXJjaChzZWFyY2gpLFxuICAgIGhhc2g6IG5vcm1hbGl6ZUhhc2goaGFzaClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVBhdGhuYW1lKHJlbGF0aXZlUGF0aCwgZnJvbVBhdGhuYW1lKSB7XG4gIGxldCBzZWdtZW50cyA9IGZyb21QYXRobmFtZS5yZXBsYWNlKC9cXC8rJC8sIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgbGV0IHJlbGF0aXZlU2VnbWVudHMgPSByZWxhdGl2ZVBhdGguc3BsaXQoXCIvXCIpO1xuICByZWxhdGl2ZVNlZ21lbnRzLmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgaWYgKHNlZ21lbnQgPT09IFwiLi5cIikge1xuICAgICAgLy8gS2VlcCB0aGUgcm9vdCBcIlwiIHNlZ21lbnQgc28gdGhlIHBhdGhuYW1lIHN0YXJ0cyBhdCAvXG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkgc2VnbWVudHMucG9wKCk7XG4gICAgfSBlbHNlIGlmIChzZWdtZW50ICE9PSBcIi5cIikge1xuICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VnbWVudHMubGVuZ3RoID4gMSA/IHNlZ21lbnRzLmpvaW4oXCIvXCIpIDogXCIvXCI7XG59XG5cbmZ1bmN0aW9uIGdldEludmFsaWRQYXRoRXJyb3IoY2hhciwgZmllbGQsIGRlc3QsIHBhdGgpIHtcbiAgcmV0dXJuIFwiQ2Fubm90IGluY2x1ZGUgYSAnXCIgKyBjaGFyICsgXCInIGNoYXJhY3RlciBpbiBhIG1hbnVhbGx5IHNwZWNpZmllZCBcIiArIChcImB0by5cIiArIGZpZWxkICsgXCJgIGZpZWxkIFtcIiArIEpTT04uc3RyaW5naWZ5KHBhdGgpICsgXCJdLiAgUGxlYXNlIHNlcGFyYXRlIGl0IG91dCB0byB0aGUgXCIpICsgKFwiYHRvLlwiICsgZGVzdCArIFwiYCBmaWVsZC4gQWx0ZXJuYXRpdmVseSB5b3UgbWF5IHByb3ZpZGUgdGhlIGZ1bGwgcGF0aCBhcyBcIikgKyBcImEgc3RyaW5nIGluIDxMaW5rIHRvPVxcXCIuLi5cXFwiPiBhbmQgdGhlIHJvdXRlciB3aWxsIHBhcnNlIGl0IGZvciB5b3UuXCI7XG59XG4vKipcbiAqIEBwcml2YXRlXG4gKlxuICogV2hlbiBwcm9jZXNzaW5nIHJlbGF0aXZlIG5hdmlnYXRpb24gd2Ugd2FudCB0byBpZ25vcmUgYW5jZXN0b3Igcm91dGVzIHRoYXRcbiAqIGRvIG5vdCBjb250cmlidXRlIHRvIHRoZSBwYXRoLCBzdWNoIHRoYXQgaW5kZXgvcGF0aGxlc3MgbGF5b3V0IHJvdXRlcyBkb24ndFxuICogaW50ZXJmZXJlLlxuICpcbiAqIEZvciBleGFtcGxlLCB3aGVuIG1vdmluZyBhIHJvdXRlIGVsZW1lbnQgaW50byBhbiBpbmRleCByb3V0ZSBhbmQvb3IgYVxuICogcGF0aGxlc3MgbGF5b3V0IHJvdXRlLCByZWxhdGl2ZSBsaW5rIGJlaGF2aW9yIGNvbnRhaW5lZCB3aXRoaW4gc2hvdWxkIHN0YXlcbiAqIHRoZSBzYW1lLiAgQm90aCBvZiB0aGUgZm9sbG93aW5nIGV4YW1wbGVzIHNob3VsZCBsaW5rIGJhY2sgdG8gdGhlIHJvb3Q6XG4gKlxuICogICA8Um91dGUgcGF0aD1cIi9cIj5cbiAqICAgICA8Um91dGUgcGF0aD1cImFjY291bnRzXCIgZWxlbWVudD17PExpbmsgdG89XCIuLlwifT5cbiAqICAgPC9Sb3V0ZT5cbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL1wiPlxuICogICAgIDxSb3V0ZSBwYXRoPVwiYWNjb3VudHNcIj5cbiAqICAgICAgIDxSb3V0ZSBlbGVtZW50PXs8QWNjb3VudHNMYXlvdXQgLz59PiAgICAgICAvLyA8LS0gRG9lcyBub3QgY29udHJpYnV0ZVxuICogICAgICAgICA8Um91dGUgaW5kZXggZWxlbWVudD17PExpbmsgdG89XCIuLlwifSAvPiAgLy8gPC0tIERvZXMgbm90IGNvbnRyaWJ1dGVcbiAqICAgICAgIDwvUm91dGVcbiAqICAgICA8L1JvdXRlPlxuICogICA8L1JvdXRlPlxuICovXG5cblxuZnVuY3Rpb24gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykge1xuICByZXR1cm4gbWF0Y2hlcy5maWx0ZXIoKG1hdGNoLCBpbmRleCkgPT4gaW5kZXggPT09IDAgfHwgbWF0Y2gucm91dGUucGF0aCAmJiBtYXRjaC5yb3V0ZS5wYXRoLmxlbmd0aCA+IDApO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHJlc29sdmVUbyh0b0FyZywgcm91dGVQYXRobmFtZXMsIGxvY2F0aW9uUGF0aG5hbWUsIGlzUGF0aFJlbGF0aXZlKSB7XG4gIGlmIChpc1BhdGhSZWxhdGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgaXNQYXRoUmVsYXRpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCB0bztcblxuICBpZiAodHlwZW9mIHRvQXJnID09PSBcInN0cmluZ1wiKSB7XG4gICAgdG8gPSBwYXJzZVBhdGgodG9BcmcpO1xuICB9IGVsc2Uge1xuICAgIHRvID0gX2V4dGVuZHMoe30sIHRvQXJnKTtcbiAgICBpbnZhcmlhbnQoIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIj9cIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCI/XCIsIFwicGF0aG5hbWVcIiwgXCJzZWFyY2hcIiwgdG8pKTtcbiAgICBpbnZhcmlhbnQoIXRvLnBhdGhuYW1lIHx8ICF0by5wYXRobmFtZS5pbmNsdWRlcyhcIiNcIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCIjXCIsIFwicGF0aG5hbWVcIiwgXCJoYXNoXCIsIHRvKSk7XG4gICAgaW52YXJpYW50KCF0by5zZWFyY2ggfHwgIXRvLnNlYXJjaC5pbmNsdWRlcyhcIiNcIiksIGdldEludmFsaWRQYXRoRXJyb3IoXCIjXCIsIFwic2VhcmNoXCIsIFwiaGFzaFwiLCB0bykpO1xuICB9XG5cbiAgbGV0IGlzRW1wdHlQYXRoID0gdG9BcmcgPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCI7XG4gIGxldCB0b1BhdGhuYW1lID0gaXNFbXB0eVBhdGggPyBcIi9cIiA6IHRvLnBhdGhuYW1lO1xuICBsZXQgZnJvbTsgLy8gUm91dGluZyBpcyByZWxhdGl2ZSB0byB0aGUgY3VycmVudCBwYXRobmFtZSBpZiBleHBsaWNpdGx5IHJlcXVlc3RlZC5cbiAgLy9cbiAgLy8gSWYgYSBwYXRobmFtZSBpcyBleHBsaWNpdGx5IHByb3ZpZGVkIGluIGB0b2AsIGl0IHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGVcbiAgLy8gcm91dGUgY29udGV4dC4gVGhpcyBpcyBleHBsYWluZWQgaW4gYE5vdGUgb24gYDxMaW5rIHRvPmAgdmFsdWVzYCBpbiBvdXJcbiAgLy8gbWlncmF0aW9uIGd1aWRlIGZyb20gdjUgYXMgYSBtZWFucyBvZiBkaXNhbWJpZ3VhdGlvbiBiZXR3ZWVuIGB0b2AgdmFsdWVzXG4gIC8vIHRoYXQgYmVnaW4gd2l0aCBgL2AgYW5kIHRob3NlIHRoYXQgZG8gbm90LiBIb3dldmVyLCB0aGlzIGlzIHByb2JsZW1hdGljIGZvclxuICAvLyBgdG9gIHZhbHVlcyB0aGF0IGRvIG5vdCBwcm92aWRlIGEgcGF0aG5hbWUuIGB0b2AgY2FuIHNpbXBseSBiZSBhIHNlYXJjaCBvclxuICAvLyBoYXNoIHN0cmluZywgaW4gd2hpY2ggY2FzZSB3ZSBzaG91bGQgYXNzdW1lIHRoYXQgdGhlIG5hdmlnYXRpb24gaXMgcmVsYXRpdmVcbiAgLy8gdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24ncyBwYXRobmFtZSBhbmQgKm5vdCogdGhlIHJvdXRlIHBhdGhuYW1lLlxuXG4gIGlmIChpc1BhdGhSZWxhdGl2ZSB8fCB0b1BhdGhuYW1lID09IG51bGwpIHtcbiAgICBmcm9tID0gbG9jYXRpb25QYXRobmFtZTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgcm91dGVQYXRobmFtZUluZGV4ID0gcm91dGVQYXRobmFtZXMubGVuZ3RoIC0gMTtcblxuICAgIGlmICh0b1BhdGhuYW1lLnN0YXJ0c1dpdGgoXCIuLlwiKSkge1xuICAgICAgbGV0IHRvU2VnbWVudHMgPSB0b1BhdGhuYW1lLnNwbGl0KFwiL1wiKTsgLy8gRWFjaCBsZWFkaW5nIC4uIHNlZ21lbnQgbWVhbnMgXCJnbyB1cCBvbmUgcm91dGVcIiBpbnN0ZWFkIG9mIFwiZ28gdXAgb25lXG4gICAgICAvLyBVUkwgc2VnbWVudFwiLiAgVGhpcyBpcyBhIGtleSBkaWZmZXJlbmNlIGZyb20gaG93IDxhIGhyZWY+IHdvcmtzIGFuZCBhXG4gICAgICAvLyBtYWpvciByZWFzb24gd2UgY2FsbCB0aGlzIGEgXCJ0b1wiIHZhbHVlIGluc3RlYWQgb2YgYSBcImhyZWZcIi5cblxuICAgICAgd2hpbGUgKHRvU2VnbWVudHNbMF0gPT09IFwiLi5cIikge1xuICAgICAgICB0b1NlZ21lbnRzLnNoaWZ0KCk7XG4gICAgICAgIHJvdXRlUGF0aG5hbWVJbmRleCAtPSAxO1xuICAgICAgfVxuXG4gICAgICB0by5wYXRobmFtZSA9IHRvU2VnbWVudHMuam9pbihcIi9cIik7XG4gICAgfSAvLyBJZiB0aGVyZSBhcmUgbW9yZSBcIi4uXCIgc2VnbWVudHMgdGhhbiBwYXJlbnQgcm91dGVzLCByZXNvbHZlIHJlbGF0aXZlIHRvXG4gICAgLy8gdGhlIHJvb3QgLyBVUkwuXG5cblxuICAgIGZyb20gPSByb3V0ZVBhdGhuYW1lSW5kZXggPj0gMCA/IHJvdXRlUGF0aG5hbWVzW3JvdXRlUGF0aG5hbWVJbmRleF0gOiBcIi9cIjtcbiAgfVxuXG4gIGxldCBwYXRoID0gcmVzb2x2ZVBhdGgodG8sIGZyb20pOyAvLyBFbnN1cmUgdGhlIHBhdGhuYW1lIGhhcyBhIHRyYWlsaW5nIHNsYXNoIGlmIHRoZSBvcmlnaW5hbCBcInRvXCIgaGFkIG9uZVxuXG4gIGxldCBoYXNFeHBsaWNpdFRyYWlsaW5nU2xhc2ggPSB0b1BhdGhuYW1lICYmIHRvUGF0aG5hbWUgIT09IFwiL1wiICYmIHRvUGF0aG5hbWUuZW5kc1dpdGgoXCIvXCIpOyAvLyBPciBpZiB0aGlzIHdhcyBhIGxpbmsgdG8gdGhlIGN1cnJlbnQgcGF0aCB3aGljaCBoYXMgYSB0cmFpbGluZyBzbGFzaFxuXG4gIGxldCBoYXNDdXJyZW50VHJhaWxpbmdTbGFzaCA9IChpc0VtcHR5UGF0aCB8fCB0b1BhdGhuYW1lID09PSBcIi5cIikgJiYgbG9jYXRpb25QYXRobmFtZS5lbmRzV2l0aChcIi9cIik7XG5cbiAgaWYgKCFwYXRoLnBhdGhuYW1lLmVuZHNXaXRoKFwiL1wiKSAmJiAoaGFzRXhwbGljaXRUcmFpbGluZ1NsYXNoIHx8IGhhc0N1cnJlbnRUcmFpbGluZ1NsYXNoKSkge1xuICAgIHBhdGgucGF0aG5hbWUgKz0gXCIvXCI7XG4gIH1cblxuICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRUb1BhdGhuYW1lKHRvKSB7XG4gIC8vIEVtcHR5IHN0cmluZ3Mgc2hvdWxkIGJlIHRyZWF0ZWQgdGhlIHNhbWUgYXMgLyBwYXRoc1xuICByZXR1cm4gdG8gPT09IFwiXCIgfHwgdG8ucGF0aG5hbWUgPT09IFwiXCIgPyBcIi9cIiA6IHR5cGVvZiB0byA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlUGF0aCh0bykucGF0aG5hbWUgOiB0by5wYXRobmFtZTtcbn1cbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBqb2luUGF0aHMgPSBwYXRocyA9PiBwYXRocy5qb2luKFwiL1wiKS5yZXBsYWNlKC9cXC9cXC8rL2csIFwiL1wiKTtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBub3JtYWxpemVQYXRobmFtZSA9IHBhdGhuYW1lID0+IHBhdGhuYW1lLnJlcGxhY2UoL1xcLyskLywgXCJcIikucmVwbGFjZSgvXlxcLyovLCBcIi9cIik7XG4vKipcbiAqIEBwcml2YXRlXG4gKi9cblxuY29uc3Qgbm9ybWFsaXplU2VhcmNoID0gc2VhcmNoID0+ICFzZWFyY2ggfHwgc2VhcmNoID09PSBcIj9cIiA/IFwiXCIgOiBzZWFyY2guc3RhcnRzV2l0aChcIj9cIikgPyBzZWFyY2ggOiBcIj9cIiArIHNlYXJjaDtcbi8qKlxuICogQHByaXZhdGVcbiAqL1xuXG5jb25zdCBub3JtYWxpemVIYXNoID0gaGFzaCA9PiAhaGFzaCB8fCBoYXNoID09PSBcIiNcIiA/IFwiXCIgOiBoYXNoLnN0YXJ0c1dpdGgoXCIjXCIpID8gaGFzaCA6IFwiI1wiICsgaGFzaDtcbi8qKlxuICogVGhpcyBpcyBhIHNob3J0Y3V0IGZvciBjcmVhdGluZyBgYXBwbGljYXRpb24vanNvbmAgcmVzcG9uc2VzLiBDb252ZXJ0cyBgZGF0YWBcbiAqIHRvIEpTT04gYW5kIHNldHMgdGhlIGBDb250ZW50LVR5cGVgIGhlYWRlci5cbiAqL1xuXG5jb25zdCBqc29uID0gZnVuY3Rpb24ganNvbihkYXRhLCBpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0ge307XG4gIH1cblxuICBsZXQgcmVzcG9uc2VJbml0ID0gdHlwZW9mIGluaXQgPT09IFwibnVtYmVyXCIgPyB7XG4gICAgc3RhdHVzOiBpbml0XG4gIH0gOiBpbml0O1xuICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHJlc3BvbnNlSW5pdC5oZWFkZXJzKTtcblxuICBpZiAoIWhlYWRlcnMuaGFzKFwiQ29udGVudC1UeXBlXCIpKSB7XG4gICAgaGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShkYXRhKSwgX2V4dGVuZHMoe30sIHJlc3BvbnNlSW5pdCwge1xuICAgIGhlYWRlcnNcbiAgfSkpO1xufTtcbmNsYXNzIEFib3J0ZWREZWZlcnJlZEVycm9yIGV4dGVuZHMgRXJyb3Ige31cbmNsYXNzIERlZmVycmVkRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHJlc3BvbnNlSW5pdCkge1xuICAgIHRoaXMucGVuZGluZ0tleXNTZXQgPSBuZXcgU2V0KCk7XG4gICAgdGhpcy5zdWJzY3JpYmVycyA9IG5ldyBTZXQoKTtcbiAgICB0aGlzLmRlZmVycmVkS2V5cyA9IFtdO1xuICAgIGludmFyaWFudChkYXRhICYmIHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEpLCBcImRlZmVyKCkgb25seSBhY2NlcHRzIHBsYWluIG9iamVjdHNcIik7IC8vIFNldCB1cCBhbiBBYm9ydENvbnRyb2xsZXIgKyBQcm9taXNlIHdlIGNhbiByYWNlIGFnYWluc3QgdG8gZXhpdCBlYXJseVxuICAgIC8vIGNhbmNlbGxhdGlvblxuXG4gICAgbGV0IHJlamVjdDtcbiAgICB0aGlzLmFib3J0UHJvbWlzZSA9IG5ldyBQcm9taXNlKChfLCByKSA9PiByZWplY3QgPSByKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5cbiAgICBsZXQgb25BYm9ydCA9ICgpID0+IHJlamVjdChuZXcgQWJvcnRlZERlZmVycmVkRXJyb3IoXCJEZWZlcnJlZCBkYXRhIGFib3J0ZWRcIikpO1xuXG4gICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsID0gKCkgPT4gdGhpcy5jb250cm9sbGVyLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgb25BYm9ydCk7XG5cbiAgICB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICB0aGlzLmRhdGEgPSBPYmplY3QuZW50cmllcyhkYXRhKS5yZWR1Y2UoKGFjYywgX3JlZikgPT4ge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IF9yZWY7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgW2tleV06IHRoaXMudHJhY2tQcm9taXNlKGtleSwgdmFsdWUpXG4gICAgICB9KTtcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAvLyBBbGwgaW5jb21pbmcgdmFsdWVzIHdlcmUgcmVzb2x2ZWRcbiAgICAgIHRoaXMudW5saXN0ZW5BYm9ydFNpZ25hbCgpO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdCA9IHJlc3BvbnNlSW5pdDtcbiAgfVxuXG4gIHRyYWNrUHJvbWlzZShrZXksIHZhbHVlKSB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuZGVmZXJyZWRLZXlzLnB1c2goa2V5KTtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmFkZChrZXkpOyAvLyBXZSBzdG9yZSBhIGxpdHRsZSB3cmFwcGVyIHByb21pc2UgdGhhdCB3aWxsIGJlIGV4dGVuZGVkIHdpdGhcbiAgICAvLyBfZGF0YS9fZXJyb3IgcHJvcHMgdXBvbiByZXNvbHZlL3JlamVjdFxuXG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJhY2UoW3ZhbHVlLCB0aGlzLmFib3J0UHJvbWlzZV0pLnRoZW4oZGF0YSA9PiB0aGlzLm9uU2V0dGxlKHByb21pc2UsIGtleSwgbnVsbCwgZGF0YSksIGVycm9yID0+IHRoaXMub25TZXR0bGUocHJvbWlzZSwga2V5LCBlcnJvcikpOyAvLyBSZWdpc3RlciByZWplY3Rpb24gbGlzdGVuZXJzIHRvIGF2b2lkIHVuY2F1Z2h0IHByb21pc2UgcmVqZWN0aW9ucyBvblxuICAgIC8vIGVycm9ycyBvciBhYm9ydGVkIGRlZmVycmVkIHZhbHVlc1xuXG4gICAgcHJvbWlzZS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgZ2V0OiAoKSA9PiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBvblNldHRsZShwcm9taXNlLCBrZXksIGVycm9yLCBkYXRhKSB7XG4gICAgaWYgKHRoaXMuY29udHJvbGxlci5zaWduYWwuYWJvcnRlZCAmJiBlcnJvciBpbnN0YW5jZW9mIEFib3J0ZWREZWZlcnJlZEVycm9yKSB7XG4gICAgICB0aGlzLnVubGlzdGVuQWJvcnRTaWduYWwoKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9taXNlLCBcIl9lcnJvclwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gZXJyb3JcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmRlbGV0ZShrZXkpO1xuXG4gICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgLy8gTm90aGluZyBsZWZ0IHRvIGFib3J0IVxuICAgICAgdGhpcy51bmxpc3RlbkFib3J0U2lnbmFsKCk7XG4gICAgfVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZXJyb3JcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IGVycm9yXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZW1pdChmYWxzZSwga2V5KTtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2RhdGFcIiwge1xuICAgICAgZ2V0OiAoKSA9PiBkYXRhXG4gICAgfSk7XG4gICAgdGhpcy5lbWl0KGZhbHNlLCBrZXkpO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgZW1pdChhYm9ydGVkLCBzZXR0bGVkS2V5KSB7XG4gICAgdGhpcy5zdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihhYm9ydGVkLCBzZXR0bGVkS2V5KSk7XG4gIH1cblxuICBzdWJzY3JpYmUoZm4pIHtcbiAgICB0aGlzLnN1YnNjcmliZXJzLmFkZChmbik7XG4gICAgcmV0dXJuICgpID0+IHRoaXMuc3Vic2NyaWJlcnMuZGVsZXRlKGZuKTtcbiAgfVxuXG4gIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICB0aGlzLnBlbmRpbmdLZXlzU2V0LmZvckVhY2goKHYsIGspID0+IHRoaXMucGVuZGluZ0tleXNTZXQuZGVsZXRlKGspKTtcbiAgICB0aGlzLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBhc3luYyByZXNvbHZlRGF0YShzaWduYWwpIHtcbiAgICBsZXQgYWJvcnRlZCA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLmRvbmUpIHtcbiAgICAgIGxldCBvbkFib3J0ID0gKCkgPT4gdGhpcy5jYW5jZWwoKTtcblxuICAgICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcbiAgICAgIGFib3J0ZWQgPSBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoYWJvcnRlZCA9PiB7XG4gICAgICAgICAgc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvbkFib3J0KTtcblxuICAgICAgICAgIGlmIChhYm9ydGVkIHx8IHRoaXMuZG9uZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShhYm9ydGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFib3J0ZWQ7XG4gIH1cblxuICBnZXQgZG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wZW5kaW5nS2V5c1NldC5zaXplID09PSAwO1xuICB9XG5cbiAgZ2V0IHVud3JhcHBlZERhdGEoKSB7XG4gICAgaW52YXJpYW50KHRoaXMuZGF0YSAhPT0gbnVsbCAmJiB0aGlzLmRvbmUsIFwiQ2FuIG9ubHkgdW53cmFwIGRhdGEgb24gaW5pdGlhbGl6ZWQgYW5kIHNldHRsZWQgZGVmZXJyZWRzXCIpO1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyh0aGlzLmRhdGEpLnJlZHVjZSgoYWNjLCBfcmVmMikgPT4ge1xuICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IF9yZWYyO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oYWNjLCB7XG4gICAgICAgIFtrZXldOiB1bndyYXBUcmFja2VkUHJvbWlzZSh2YWx1ZSlcbiAgICAgIH0pO1xuICAgIH0sIHt9KTtcbiAgfVxuXG4gIGdldCBwZW5kaW5nS2V5cygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLnBlbmRpbmdLZXlzU2V0KTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGlzVHJhY2tlZFByb21pc2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSAmJiB2YWx1ZS5fdHJhY2tlZCA9PT0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdW53cmFwVHJhY2tlZFByb21pc2UodmFsdWUpIHtcbiAgaWYgKCFpc1RyYWNrZWRQcm9taXNlKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGlmICh2YWx1ZS5fZXJyb3IpIHtcbiAgICB0aHJvdyB2YWx1ZS5fZXJyb3I7XG4gIH1cblxuICByZXR1cm4gdmFsdWUuX2RhdGE7XG59XG5cbmNvbnN0IGRlZmVyID0gZnVuY3Rpb24gZGVmZXIoZGF0YSwgaW5pdCkge1xuICBpZiAoaW5pdCA9PT0gdm9pZCAwKSB7XG4gICAgaW5pdCA9IHt9O1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IHR5cGVvZiBpbml0ID09PSBcIm51bWJlclwiID8ge1xuICAgIHN0YXR1czogaW5pdFxuICB9IDogaW5pdDtcbiAgcmV0dXJuIG5ldyBEZWZlcnJlZERhdGEoZGF0YSwgcmVzcG9uc2VJbml0KTtcbn07XG4vKipcbiAqIEEgcmVkaXJlY3QgcmVzcG9uc2UuIFNldHMgdGhlIHN0YXR1cyBjb2RlIGFuZCB0aGUgYExvY2F0aW9uYCBoZWFkZXIuXG4gKiBEZWZhdWx0cyB0byBcIjMwMiBGb3VuZFwiLlxuICovXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gcmVkaXJlY3QodXJsLCBpbml0KSB7XG4gIGlmIChpbml0ID09PSB2b2lkIDApIHtcbiAgICBpbml0ID0gMzAyO1xuICB9XG5cbiAgbGV0IHJlc3BvbnNlSW5pdCA9IGluaXQ7XG5cbiAgaWYgKHR5cGVvZiByZXNwb25zZUluaXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXNwb25zZUluaXQgPSB7XG4gICAgICBzdGF0dXM6IHJlc3BvbnNlSW5pdFxuICAgIH07XG4gIH0gZWxzZSBpZiAodHlwZW9mIHJlc3BvbnNlSW5pdC5zdGF0dXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXNwb25zZUluaXQuc3RhdHVzID0gMzAyO1xuICB9XG5cbiAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyhyZXNwb25zZUluaXQuaGVhZGVycyk7XG4gIGhlYWRlcnMuc2V0KFwiTG9jYXRpb25cIiwgdXJsKTtcbiAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCBfZXh0ZW5kcyh7fSwgcmVzcG9uc2VJbml0LCB7XG4gICAgaGVhZGVyc1xuICB9KSk7XG59O1xuLyoqXG4gKiBAcHJpdmF0ZVxuICogVXRpbGl0eSBjbGFzcyB3ZSB1c2UgdG8gaG9sZCBhdXRvLXVud3JhcHBlZCA0eHgvNXh4IFJlc3BvbnNlIGJvZGllc1xuICovXG5cbmNsYXNzIEVycm9yUmVzcG9uc2Uge1xuICBjb25zdHJ1Y3RvcihzdGF0dXMsIHN0YXR1c1RleHQsIGRhdGEsIGludGVybmFsKSB7XG4gICAgaWYgKGludGVybmFsID09PSB2b2lkIDApIHtcbiAgICAgIGludGVybmFsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gc3RhdHVzVGV4dCB8fCBcIlwiO1xuICAgIHRoaXMuaW50ZXJuYWwgPSBpbnRlcm5hbDtcblxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGRhdGEudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMuZXJyb3IgPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIH1cbiAgfVxuXG59XG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlcnJvciBpcyBhbiBFcnJvclJlc3BvbnNlIGdlbmVyYXRlZCBmcm9tIGEgNHh4LzV4eFxuICogUmVzcG9uc2UgdGhyb3duIGZyb20gYW4gYWN0aW9uL2xvYWRlclxuICovXG5cbmZ1bmN0aW9uIGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSB7XG4gIHJldHVybiBlcnJvciAhPSBudWxsICYmIHR5cGVvZiBlcnJvci5zdGF0dXMgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIGVycm9yLnN0YXR1c1RleHQgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIGVycm9yLmludGVybmFsID09PSBcImJvb2xlYW5cIiAmJiBcImRhdGFcIiBpbiBlcnJvcjtcbn1cblxuY29uc3QgdmFsaWRNdXRhdGlvbk1ldGhvZHNBcnIgPSBbXCJwb3N0XCIsIFwicHV0XCIsIFwicGF0Y2hcIiwgXCJkZWxldGVcIl07XG5jb25zdCB2YWxpZE11dGF0aW9uTWV0aG9kcyA9IG5ldyBTZXQodmFsaWRNdXRhdGlvbk1ldGhvZHNBcnIpO1xuY29uc3QgdmFsaWRSZXF1ZXN0TWV0aG9kc0FyciA9IFtcImdldFwiLCAuLi52YWxpZE11dGF0aW9uTWV0aG9kc0Fycl07XG5jb25zdCB2YWxpZFJlcXVlc3RNZXRob2RzID0gbmV3IFNldCh2YWxpZFJlcXVlc3RNZXRob2RzQXJyKTtcbmNvbnN0IHJlZGlyZWN0U3RhdHVzQ29kZXMgPSBuZXcgU2V0KFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF0pO1xuY29uc3QgcmVkaXJlY3RQcmVzZXJ2ZU1ldGhvZFN0YXR1c0NvZGVzID0gbmV3IFNldChbMzA3LCAzMDhdKTtcbmNvbnN0IElETEVfTkFWSUdBVElPTiA9IHtcbiAgc3RhdGU6IFwiaWRsZVwiLFxuICBsb2NhdGlvbjogdW5kZWZpbmVkLFxuICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgZm9ybURhdGE6IHVuZGVmaW5lZFxufTtcbmNvbnN0IElETEVfRkVUQ0hFUiA9IHtcbiAgc3RhdGU6IFwiaWRsZVwiLFxuICBkYXRhOiB1bmRlZmluZWQsXG4gIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICBmb3JtRGF0YTogdW5kZWZpbmVkXG59O1xuY29uc3QgSURMRV9CTE9DS0VSID0ge1xuICBzdGF0ZTogXCJ1bmJsb2NrZWRcIixcbiAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICByZXNldDogdW5kZWZpbmVkLFxuICBsb2NhdGlvbjogdW5kZWZpbmVkXG59O1xuY29uc3QgQUJTT0xVVEVfVVJMX1JFR0VYID0gL14oPzpbYS16XVthLXowLTkrLi1dKjp8XFwvXFwvKS9pO1xuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcbmNvbnN0IGlzU2VydmVyID0gIWlzQnJvd3NlcjsgLy8jZW5kcmVnaW9uXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8jcmVnaW9uIGNyZWF0ZVJvdXRlclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBDcmVhdGUgYSByb3V0ZXIgYW5kIGxpc3RlbiB0byBoaXN0b3J5IFBPUCBuYXZpZ2F0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcihpbml0KSB7XG4gIGludmFyaWFudChpbml0LnJvdXRlcy5sZW5ndGggPiAwLCBcIllvdSBtdXN0IHByb3ZpZGUgYSBub24tZW1wdHkgcm91dGVzIGFycmF5IHRvIGNyZWF0ZVJvdXRlclwiKTtcbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKGluaXQucm91dGVzKTsgLy8gQ2xlYW51cCBmdW5jdGlvbiBmb3IgaGlzdG9yeVxuXG4gIGxldCB1bmxpc3Rlbkhpc3RvcnkgPSBudWxsOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9ucyB0byBjYWxsIG9uIGFsbCBzdGF0ZSBjaGFuZ2VzXG5cbiAgbGV0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIG9iamVjdCB0byBob2xkIHNjcm9sbCByZXN0b3JhdGlvbiBsb2NhdGlvbnMgZHVyaW5nIHJvdXRpbmdcblxuICBsZXQgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBudWxsOyAvLyBFeHRlcm5hbGx5LXByb3ZpZGVkIGZ1bmN0aW9uIHRvIGdldCBzY3JvbGwgcmVzdG9yYXRpb24ga2V5c1xuXG4gIGxldCBnZXRTY3JvbGxSZXN0b3JhdGlvbktleSA9IG51bGw7IC8vIEV4dGVybmFsbHktcHJvdmlkZWQgZnVuY3Rpb24gdG8gZ2V0IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uXG5cbiAgbGV0IGdldFNjcm9sbFBvc2l0aW9uID0gbnVsbDsgLy8gT25lLXRpbWUgZmxhZyB0byBjb250cm9sIHRoZSBpbml0aWFsIGh5ZHJhdGlvbiBzY3JvbGwgcmVzdG9yYXRpb24uICBCZWNhdXNlXG4gIC8vIHdlIGRvbid0IGdldCB0aGUgc2F2ZWQgcG9zaXRpb25zIGZyb20gPFNjcm9sbFJlc3RvcmF0aW9uIC8+IHVudGlsIF9hZnRlcl9cbiAgLy8gdGhlIGluaXRpYWwgcmVuZGVyLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHRyaWdnZXIgYSBzZXBhcmF0ZSB1cGRhdGVTdGF0ZSB0b1xuICAvLyBzZW5kIGFsb25nIHRoZSByZXN0b3JlU2Nyb2xsUG9zaXRpb25cbiAgLy8gU2V0IHRvIHRydWUgaWYgd2UgaGF2ZSBgaHlkcmF0aW9uRGF0YWAgc2luY2Ugd2UgYXNzdW1lIHdlIHdlcmUgU1NSJ2QgYW5kIHRoYXRcbiAgLy8gU1NSIGRpZCB0aGUgaW5pdGlhbCBzY3JvbGwgcmVzdG9yYXRpb24uXG5cbiAgbGV0IGluaXRpYWxTY3JvbGxSZXN0b3JlZCA9IGluaXQuaHlkcmF0aW9uRGF0YSAhPSBudWxsO1xuICBsZXQgaW5pdGlhbE1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBpbml0Lmhpc3RvcnkubG9jYXRpb24sIGluaXQuYmFzZW5hbWUpO1xuICBsZXQgaW5pdGlhbEVycm9ycyA9IG51bGw7XG5cbiAgaWYgKGluaXRpYWxNYXRjaGVzID09IG51bGwpIHtcbiAgICAvLyBJZiB3ZSBkbyBub3QgbWF0Y2ggYSB1c2VyLXByb3ZpZGVkLXJvdXRlLCBmYWxsIGJhY2sgdG8gdGhlIHJvb3RcbiAgICAvLyB0byBhbGxvdyB0aGUgZXJyb3IgYm91bmRhcnkgdG8gdGFrZSBvdmVyXG4gICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgIHBhdGhuYW1lOiBpbml0Lmhpc3RvcnkubG9jYXRpb24ucGF0aG5hbWVcbiAgICB9KTtcbiAgICBsZXQge1xuICAgICAgbWF0Y2hlcyxcbiAgICAgIHJvdXRlXG4gICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgaW5pdGlhbE1hdGNoZXMgPSBtYXRjaGVzO1xuICAgIGluaXRpYWxFcnJvcnMgPSB7XG4gICAgICBbcm91dGUuaWRdOiBlcnJvclxuICAgIH07XG4gIH1cblxuICBsZXQgaW5pdGlhbGl6ZWQgPSAhaW5pdGlhbE1hdGNoZXMuc29tZShtID0+IG0ucm91dGUubG9hZGVyKSB8fCBpbml0Lmh5ZHJhdGlvbkRhdGEgIT0gbnVsbDtcbiAgbGV0IHJvdXRlcjtcbiAgbGV0IHN0YXRlID0ge1xuICAgIGhpc3RvcnlBY3Rpb246IGluaXQuaGlzdG9yeS5hY3Rpb24sXG4gICAgbG9jYXRpb246IGluaXQuaGlzdG9yeS5sb2NhdGlvbixcbiAgICBtYXRjaGVzOiBpbml0aWFsTWF0Y2hlcyxcbiAgICBpbml0aWFsaXplZCxcbiAgICBuYXZpZ2F0aW9uOiBJRExFX05BVklHQVRJT04sXG4gICAgLy8gRG9uJ3QgcmVzdG9yZSBvbiBpbml0aWFsIHVwZGF0ZVN0YXRlKCkgaWYgd2Ugd2VyZSBTU1InZFxuICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogaW5pdC5oeWRyYXRpb25EYXRhICE9IG51bGwgPyBmYWxzZSA6IG51bGwsXG4gICAgcHJldmVudFNjcm9sbFJlc2V0OiBmYWxzZSxcbiAgICByZXZhbGlkYXRpb246IFwiaWRsZVwiLFxuICAgIGxvYWRlckRhdGE6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEubG9hZGVyRGF0YSB8fCB7fSxcbiAgICBhY3Rpb25EYXRhOiBpbml0Lmh5ZHJhdGlvbkRhdGEgJiYgaW5pdC5oeWRyYXRpb25EYXRhLmFjdGlvbkRhdGEgfHwgbnVsbCxcbiAgICBlcnJvcnM6IGluaXQuaHlkcmF0aW9uRGF0YSAmJiBpbml0Lmh5ZHJhdGlvbkRhdGEuZXJyb3JzIHx8IGluaXRpYWxFcnJvcnMsXG4gICAgZmV0Y2hlcnM6IG5ldyBNYXAoKSxcbiAgICBibG9ja2VyczogbmV3IE1hcCgpXG4gIH07IC8vIC0tIFN0YXRlZnVsIGludGVybmFsIHZhcmlhYmxlcyB0byBtYW5hZ2UgbmF2aWdhdGlvbnMgLS1cbiAgLy8gQ3VycmVudCBuYXZpZ2F0aW9uIGluIHByb2dyZXNzICh0byBiZSBjb21taXR0ZWQgaW4gY29tcGxldGVOYXZpZ2F0aW9uKVxuXG4gIGxldCBwZW5kaW5nQWN0aW9uID0gQWN0aW9uLlBvcDsgLy8gU2hvdWxkIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gcHJldmVudCB0aGUgc2Nyb2xsIHJlc2V0IGlmIHNjcm9sbCBjYW5ub3RcbiAgLy8gYmUgcmVzdG9yZWQ/XG5cbiAgbGV0IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSBmYWxzZTsgLy8gQWJvcnRDb250cm9sbGVyIGZvciB0aGUgYWN0aXZlIG5hdmlnYXRpb25cblxuICBsZXQgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyOyAvLyBXZSB1c2UgdGhpcyB0byBhdm9pZCB0b3VjaGluZyBoaXN0b3J5IGluIGNvbXBsZXRlTmF2aWdhdGlvbiBpZiBhXG4gIC8vIHJldmFsaWRhdGlvbiBpcyBlbnRpcmVseSB1bmludGVycnVwdGVkXG5cbiAgbGV0IGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbiA9IGZhbHNlOyAvLyBVc2UgdGhpcyBpbnRlcm5hbCBmbGFnIHRvIGZvcmNlIHJldmFsaWRhdGlvbiBvZiBhbGwgbG9hZGVyczpcbiAgLy8gIC0gc3VibWlzc2lvbnMgKGNvbXBsZXRlZCBvciBpbnRlcnJ1cHRlZClcbiAgLy8gIC0gdXNlUmV2YWxpZGF0ZSgpXG4gIC8vICAtIFgtUmVtaXgtUmV2YWxpZGF0ZSAoZnJvbSByZWRpcmVjdClcblxuICBsZXQgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IGZhbHNlOyAvLyBVc2UgdGhpcyBpbnRlcm5hbCBhcnJheSB0byBjYXB0dXJlIHJvdXRlcyB0aGF0IHJlcXVpcmUgcmV2YWxpZGF0aW9uIGR1ZVxuICAvLyB0byBhIGNhbmNlbGxlZCBkZWZlcnJlZCBvbiBhY3Rpb24gc3VibWlzc2lvblxuXG4gIGxldCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcyA9IFtdOyAvLyBVc2UgdGhpcyBpbnRlcm5hbCBhcnJheSB0byBjYXB0dXJlIGZldGNoZXIgbG9hZHMgdGhhdCB3ZXJlIGNhbmNlbGxlZCBieSBhblxuICAvLyBhY3Rpb24gbmF2aWdhdGlvbiBhbmQgcmVxdWlyZSByZXZhbGlkYXRpb25cblxuICBsZXQgY2FuY2VsbGVkRmV0Y2hlckxvYWRzID0gW107IC8vIEFib3J0Q29udHJvbGxlcnMgZm9yIGFueSBpbi1mbGlnaHQgZmV0Y2hlcnNcblxuICBsZXQgZmV0Y2hDb250cm9sbGVycyA9IG5ldyBNYXAoKTsgLy8gVHJhY2sgbG9hZHMgYmFzZWQgb24gdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgc3RhcnRlZFxuXG4gIGxldCBpbmNyZW1lbnRpbmdMb2FkSWQgPSAwOyAvLyBUcmFjayB0aGUgb3V0c3RhbmRpbmcgcGVuZGluZyBuYXZpZ2F0aW9uIGRhdGEgbG9hZCB0byBiZSBjb21wYXJlZCBhZ2FpbnN0XG4gIC8vIHRoZSBnbG9iYWxseSBpbmNyZW1lbnRpbmcgbG9hZCB3aGVuIGEgZmV0Y2hlciBsb2FkIGxhbmRzIGFmdGVyIGEgY29tcGxldGVkXG4gIC8vIG5hdmlnYXRpb25cblxuICBsZXQgcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQgPSAtMTsgLy8gRmV0Y2hlcnMgdGhhdCB0cmlnZ2VyZWQgZGF0YSByZWxvYWRzIGFzIGEgcmVzdWx0IG9mIHRoZWlyIGFjdGlvbnNcblxuICBsZXQgZmV0Y2hSZWxvYWRJZHMgPSBuZXcgTWFwKCk7IC8vIEZldGNoZXJzIHRoYXQgdHJpZ2dlcmVkIHJlZGlyZWN0IG5hdmlnYXRpb25zIGZyb20gdGhlaXIgYWN0aW9uc1xuXG4gIGxldCBmZXRjaFJlZGlyZWN0SWRzID0gbmV3IFNldCgpOyAvLyBNb3N0IHJlY2VudCBocmVmL21hdGNoIGZvciBmZXRjaGVyLmxvYWQgY2FsbHMgZm9yIGZldGNoZXJzXG5cbiAgbGV0IGZldGNoTG9hZE1hdGNoZXMgPSBuZXcgTWFwKCk7IC8vIFN0b3JlIERlZmVycmVkRGF0YSBpbnN0YW5jZXMgZm9yIGFjdGl2ZSByb3V0ZSBtYXRjaGVzLiAgV2hlbiBhXG4gIC8vIHJvdXRlIGxvYWRlciByZXR1cm5zIGRlZmVyKCkgd2Ugc3RpY2sgb25lIGluIGhlcmUuICBUaGVuLCB3aGVuIGEgbmVzdGVkXG4gIC8vIHByb21pc2UgcmVzb2x2ZXMgd2UgdXBkYXRlIGxvYWRlckRhdGEuICBJZiBhIG5ldyBuYXZpZ2F0aW9uIHN0YXJ0cyB3ZVxuICAvLyBjYW5jZWwgYWN0aXZlIGRlZmVycmVkcyBmb3IgZWxpbWluYXRlZCByb3V0ZXMuXG5cbiAgbGV0IGFjdGl2ZURlZmVycmVkcyA9IG5ldyBNYXAoKTsgLy8gU3RvcmUgYmxvY2tlciBmdW5jdGlvbnMgaW4gYSBzZXBhcmF0ZSBNYXAgb3V0c2lkZSBvZiByb3V0ZXIgc3RhdGUgc2luY2VcbiAgLy8gd2UgZG9uJ3QgbmVlZCB0byB1cGRhdGUgVUkgc3RhdGUgaWYgdGhleSBjaGFuZ2VcblxuICBsZXQgYmxvY2tlckZ1bmN0aW9ucyA9IG5ldyBNYXAoKTsgLy8gRmxhZyB0byBpZ25vcmUgdGhlIG5leHQgaGlzdG9yeSB1cGRhdGUsIHNvIHdlIGNhbiByZXZlcnQgdGhlIFVSTCBjaGFuZ2Ugb25cbiAgLy8gYSBQT1AgbmF2aWdhdGlvbiB0aGF0IHdhcyBibG9ja2VkIGJ5IHRoZSB1c2VyIHdpdGhvdXQgdG91Y2hpbmcgcm91dGVyIHN0YXRlXG5cbiAgbGV0IGlnbm9yZU5leHRIaXN0b3J5VXBkYXRlID0gZmFsc2U7IC8vIEluaXRpYWxpemUgdGhlIHJvdXRlciwgYWxsIHNpZGUgZWZmZWN0cyBzaG91bGQgYmUga2lja2VkIG9mZiBmcm9tIGhlcmUuXG4gIC8vIEltcGxlbWVudGVkIGFzIGEgRmx1ZW50IEFQSSBmb3IgZWFzZSBvZjpcbiAgLy8gICBsZXQgcm91dGVyID0gY3JlYXRlUm91dGVyKGluaXQpLmluaXRpYWxpemUoKTtcblxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIC8vIElmIGhpc3RvcnkgaW5mb3JtcyB1cyBvZiBhIFBPUCBuYXZpZ2F0aW9uLCBzdGFydCB0aGUgbmF2aWdhdGlvbiBidXQgZG8gbm90IHVwZGF0ZVxuICAgIC8vIHN0YXRlLiAgV2UnbGwgdXBkYXRlIG91ciBvd24gc3RhdGUgb25jZSB0aGUgbmF2aWdhdGlvbiBjb21wbGV0ZXNcbiAgICB1bmxpc3Rlbkhpc3RvcnkgPSBpbml0Lmhpc3RvcnkubGlzdGVuKF9yZWYgPT4ge1xuICAgICAgbGV0IHtcbiAgICAgICAgYWN0aW9uOiBoaXN0b3J5QWN0aW9uLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZGVsdGFcbiAgICAgIH0gPSBfcmVmO1xuXG4gICAgICAvLyBJZ25vcmUgdGhpcyBldmVudCBpZiBpdCB3YXMganVzdCB1cyByZXNldHRpbmcgdGhlIFVSTCBmcm9tIGFcbiAgICAgIC8vIGJsb2NrZWQgUE9QIG5hdmlnYXRpb25cbiAgICAgIGlmIChpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSkge1xuICAgICAgICBpZ25vcmVOZXh0SGlzdG9yeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHdhcm5pbmcoYmxvY2tlckZ1bmN0aW9ucy5zaXplID09PSAwIHx8IGRlbHRhICE9IG51bGwsIFwiWW91IGFyZSB0cnlpbmcgdG8gdXNlIGEgYmxvY2tlciBvbiBhIFBPUCBuYXZpZ2F0aW9uIHRvIGEgbG9jYXRpb24gXCIgKyBcInRoYXQgd2FzIG5vdCBjcmVhdGVkIGJ5IEByZW1peC1ydW4vcm91dGVyLiBUaGlzIHdpbGwgZmFpbCBzaWxlbnRseSBpbiBcIiArIFwicHJvZHVjdGlvbi4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgbmF2aWdhdGluZyBvdXRzaWRlIHRoZSByb3V0ZXIgXCIgKyBcInZpYSBgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlYC9gd2luZG93LmxvY2F0aW9uLmhhc2hgIGluc3RlYWQgb2YgdXNpbmcgXCIgKyBcInJvdXRlciBuYXZpZ2F0aW9uIEFQSXMuICBUaGlzIGNhbiBhbHNvIGhhcHBlbiBpZiB5b3UgYXJlIHVzaW5nIFwiICsgXCJjcmVhdGVIYXNoUm91dGVyIGFuZCB0aGUgdXNlciBtYW51YWxseSBjaGFuZ2VzIHRoZSBVUkwuXCIpO1xuICAgICAgbGV0IGJsb2NrZXJLZXkgPSBzaG91bGRCbG9ja05hdmlnYXRpb24oe1xuICAgICAgICBjdXJyZW50TG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgICAgICBuZXh0TG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBoaXN0b3J5QWN0aW9uXG4gICAgICB9KTtcblxuICAgICAgaWYgKGJsb2NrZXJLZXkgJiYgZGVsdGEgIT0gbnVsbCkge1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBVUkwgdG8gbWF0Y2ggdGhlIGN1cnJlbnQgVUksIGJ1dCBkb24ndCB1cGRhdGUgcm91dGVyIHN0YXRlXG4gICAgICAgIGlnbm9yZU5leHRIaXN0b3J5VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgaW5pdC5oaXN0b3J5LmdvKGRlbHRhICogLTEpOyAvLyBQdXQgdGhlIGJsb2NrZXIgaW50byBhIGJsb2NrZWQgc3RhdGVcblxuICAgICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgICAgbG9jYXRpb24sXG5cbiAgICAgICAgICBwcm9jZWVkKCkge1xuICAgICAgICAgICAgdXBkYXRlQmxvY2tlcihibG9ja2VyS2V5LCB7XG4gICAgICAgICAgICAgIHN0YXRlOiBcInByb2NlZWRpbmdcIixcbiAgICAgICAgICAgICAgcHJvY2VlZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICByZXNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBsb2NhdGlvblxuICAgICAgICAgICAgfSk7IC8vIFJlLWRvIHRoZSBzYW1lIFBPUCBuYXZpZ2F0aW9uIHdlIGp1c3QgYmxvY2tlZFxuXG4gICAgICAgICAgICBpbml0Lmhpc3RvcnkuZ28oZGVsdGEpO1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJsb2NrZXIoYmxvY2tlcktleSk7XG4gICAgICAgICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHJvdXRlci5zdGF0ZS5ibG9ja2VycylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhcnROYXZpZ2F0aW9uKGhpc3RvcnlBY3Rpb24sIGxvY2F0aW9uKTtcbiAgICB9KTsgLy8gS2ljayBvZmYgaW5pdGlhbCBkYXRhIGxvYWQgaWYgbmVlZGVkLiAgVXNlIFBvcCB0byBhdm9pZCBtb2RpZnlpbmcgaGlzdG9yeVxuXG4gICAgaWYgKCFzdGF0ZS5pbml0aWFsaXplZCkge1xuICAgICAgc3RhcnROYXZpZ2F0aW9uKEFjdGlvbi5Qb3AsIHN0YXRlLmxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm91dGVyO1xuICB9IC8vIENsZWFuIHVwIGEgcm91dGVyIGFuZCBpdCdzIHNpZGUgZWZmZWN0c1xuXG5cbiAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBpZiAodW5saXN0ZW5IaXN0b3J5KSB7XG4gICAgICB1bmxpc3Rlbkhpc3RvcnkoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVycy5jbGVhcigpO1xuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBzdGF0ZS5mZXRjaGVycy5mb3JFYWNoKChfLCBrZXkpID0+IGRlbGV0ZUZldGNoZXIoa2V5KSk7XG4gICAgc3RhdGUuYmxvY2tlcnMuZm9yRWFjaCgoXywga2V5KSA9PiBkZWxldGVCbG9ja2VyKGtleSkpO1xuICB9IC8vIFN1YnNjcmliZSB0byBzdGF0ZSB1cGRhdGVzIGZvciB0aGUgcm91dGVyXG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUoZm4pIHtcbiAgICBzdWJzY3JpYmVycy5hZGQoZm4pO1xuICAgIHJldHVybiAoKSA9PiBzdWJzY3JpYmVycy5kZWxldGUoZm4pO1xuICB9IC8vIFVwZGF0ZSBvdXIgc3RhdGUgYW5kIG5vdGlmeSB0aGUgY2FsbGluZyBjb250ZXh0IG9mIHRoZSBjaGFuZ2VcblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKG5ld1N0YXRlKSB7XG4gICAgc3RhdGUgPSBfZXh0ZW5kcyh7fSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKHN1YnNjcmliZXIgPT4gc3Vic2NyaWJlcihzdGF0ZSkpO1xuICB9IC8vIENvbXBsZXRlIGEgbmF2aWdhdGlvbiByZXR1cm5pbmcgdGhlIHN0YXRlLm5hdmlnYXRpb24gYmFjayB0byB0aGUgSURMRV9OQVZJR0FUSU9OXG4gIC8vIGFuZCBzZXR0aW5nIHN0YXRlLltoaXN0b3J5QWN0aW9uL2xvY2F0aW9uL21hdGNoZXNdIHRvIHRoZSBuZXcgcm91dGUuXG4gIC8vIC0gTG9jYXRpb24gaXMgYSByZXF1aXJlZCBwYXJhbVxuICAvLyAtIE5hdmlnYXRpb24gd2lsbCBhbHdheXMgYmUgc2V0IHRvIElETEVfTkFWSUdBVElPTlxuICAvLyAtIENhbiBwYXNzIGFueSBvdGhlciBzdGF0ZSBpbiBuZXdTdGF0ZVxuXG5cbiAgZnVuY3Rpb24gY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCBuZXdTdGF0ZSkge1xuICAgIHZhciBfbG9jYXRpb24kc3RhdGUsIF9sb2NhdGlvbiRzdGF0ZTI7XG5cbiAgICAvLyBEZWR1Y2UgaWYgd2UncmUgaW4gYSBsb2FkaW5nL2FjdGlvblJlbG9hZCBzdGF0ZTpcbiAgICAvLyAtIFdlIGhhdmUgY29tbWl0dGVkIGFjdGlvbkRhdGEgaW4gdGhlIHN0b3JlXG4gICAgLy8gLSBUaGUgY3VycmVudCBuYXZpZ2F0aW9uIHdhcyBhIG11dGF0aW9uIHN1Ym1pc3Npb25cbiAgICAvLyAtIFdlJ3JlIHBhc3QgdGhlIHN1Ym1pdHRpbmcgc3RhdGUgYW5kIGludG8gdGhlIGxvYWRpbmcgc3RhdGVcbiAgICAvLyAtIFRoZSBsb2NhdGlvbiBiZWluZyBsb2FkZWQgaXMgbm90IHRoZSByZXN1bHQgb2YgYSByZWRpcmVjdFxuICAgIGxldCBpc0FjdGlvblJlbG9hZCA9IHN0YXRlLmFjdGlvbkRhdGEgIT0gbnVsbCAmJiBzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QgIT0gbnVsbCAmJiBpc011dGF0aW9uTWV0aG9kKHN0YXRlLm5hdmlnYXRpb24uZm9ybU1ldGhvZCkgJiYgc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgJiYgKChfbG9jYXRpb24kc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9sb2NhdGlvbiRzdGF0ZS5faXNSZWRpcmVjdCkgIT09IHRydWU7XG4gICAgbGV0IGFjdGlvbkRhdGE7XG5cbiAgICBpZiAobmV3U3RhdGUuYWN0aW9uRGF0YSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKG5ld1N0YXRlLmFjdGlvbkRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYWN0aW9uRGF0YSA9IG5ld1N0YXRlLmFjdGlvbkRhdGE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBFbXB0eSBhY3Rpb25EYXRhIC0+IGNsZWFyIHByaW9yIGFjdGlvbkRhdGEgZHVlIHRvIGFuIGFjdGlvbiBlcnJvclxuICAgICAgICBhY3Rpb25EYXRhID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQWN0aW9uUmVsb2FkKSB7XG4gICAgICAvLyBLZWVwIHRoZSBjdXJyZW50IGRhdGEgaWYgd2UncmUgd3JhcHBpbmcgdXAgdGhlIGFjdGlvbiByZWxvYWRcbiAgICAgIGFjdGlvbkRhdGEgPSBzdGF0ZS5hY3Rpb25EYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDbGVhciBhY3Rpb25EYXRhIG9uIGFueSBvdGhlciBjb21wbGV0ZWQgbmF2aWdhdGlvbnNcbiAgICAgIGFjdGlvbkRhdGEgPSBudWxsO1xuICAgIH0gLy8gQWx3YXlzIHByZXNlcnZlIGFueSBleGlzdGluZyBsb2FkZXJEYXRhIGZyb20gcmUtdXNlZCByb3V0ZXNcblxuXG4gICAgbGV0IGxvYWRlckRhdGEgPSBuZXdTdGF0ZS5sb2FkZXJEYXRhID8gbWVyZ2VMb2FkZXJEYXRhKHN0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLmxvYWRlckRhdGEsIG5ld1N0YXRlLm1hdGNoZXMgfHwgW10sIG5ld1N0YXRlLmVycm9ycykgOiBzdGF0ZS5sb2FkZXJEYXRhOyAvLyBPbiBhIHN1Y2Nlc3NmdWwgbmF2aWdhdGlvbiB3ZSBjYW4gYXNzdW1lIHdlIGdvdCB0aHJvdWdoIGFsbCBibG9ja2Vyc1xuICAgIC8vIHNvIHdlIGNhbiBzdGFydCBmcmVzaFxuXG4gICAgZm9yIChsZXQgW2tleV0gb2YgYmxvY2tlckZ1bmN0aW9ucykge1xuICAgICAgZGVsZXRlQmxvY2tlcihrZXkpO1xuICAgIH0gLy8gQWx3YXlzIHJlc3BlY3QgdGhlIHVzZXIgZmxhZy4gIE90aGVyd2lzZSBkb24ndCByZXNldCBvbiBtdXRhdGlvblxuICAgIC8vIHN1Ym1pc3Npb24gbmF2aWdhdGlvbnMgdW5sZXNzIHRoZXkgcmVkaXJlY3RcblxuXG4gICAgbGV0IHByZXZlbnRTY3JvbGxSZXNldCA9IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPT09IHRydWUgfHwgc3RhdGUubmF2aWdhdGlvbi5mb3JtTWV0aG9kICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdGF0ZS5uYXZpZ2F0aW9uLmZvcm1NZXRob2QpICYmICgoX2xvY2F0aW9uJHN0YXRlMiA9IGxvY2F0aW9uLnN0YXRlKSA9PSBudWxsID8gdm9pZCAwIDogX2xvY2F0aW9uJHN0YXRlMi5faXNSZWRpcmVjdCkgIT09IHRydWU7XG4gICAgdXBkYXRlU3RhdGUoX2V4dGVuZHMoe30sIG5ld1N0YXRlLCB7XG4gICAgICBhY3Rpb25EYXRhLFxuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGhpc3RvcnlBY3Rpb246IHBlbmRpbmdBY3Rpb24sXG4gICAgICBsb2NhdGlvbixcbiAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgbmF2aWdhdGlvbjogSURMRV9OQVZJR0FUSU9OLFxuICAgICAgcmV2YWxpZGF0aW9uOiBcImlkbGVcIixcbiAgICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihsb2NhdGlvbiwgbmV3U3RhdGUubWF0Y2hlcyB8fCBzdGF0ZS5tYXRjaGVzKSxcbiAgICAgIHByZXZlbnRTY3JvbGxSZXNldCxcbiAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKVxuICAgIH0pKTtcblxuICAgIGlmIChpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIDsgZWxzZSBpZiAocGVuZGluZ0FjdGlvbiA9PT0gQWN0aW9uLlBvcCkgOyBlbHNlIGlmIChwZW5kaW5nQWN0aW9uID09PSBBY3Rpb24uUHVzaCkge1xuICAgICAgaW5pdC5oaXN0b3J5LnB1c2gobG9jYXRpb24sIGxvY2F0aW9uLnN0YXRlKTtcbiAgICB9IGVsc2UgaWYgKHBlbmRpbmdBY3Rpb24gPT09IEFjdGlvbi5SZXBsYWNlKSB7XG4gICAgICBpbml0Lmhpc3RvcnkucmVwbGFjZShsb2NhdGlvbiwgbG9jYXRpb24uc3RhdGUpO1xuICAgIH0gLy8gUmVzZXQgc3RhdGVmdWwgbmF2aWdhdGlvbiB2YXJzXG5cblxuICAgIHBlbmRpbmdBY3Rpb24gPSBBY3Rpb24uUG9wO1xuICAgIHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXQgPSBmYWxzZTtcbiAgICBpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24gPSBmYWxzZTtcbiAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgY2FuY2VsbGVkRGVmZXJyZWRSb3V0ZXMgPSBbXTtcbiAgICBjYW5jZWxsZWRGZXRjaGVyTG9hZHMgPSBbXTtcbiAgfSAvLyBUcmlnZ2VyIGEgbmF2aWdhdGlvbiBldmVudCwgd2hpY2ggY2FuIGVpdGhlciBiZSBhIG51bWVyaWNhbCBQT1Agb3IgYSBQVVNIXG4gIC8vIHJlcGxhY2Ugd2l0aCBhbiBvcHRpb25hbCBzdWJtaXNzaW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBuYXZpZ2F0ZSh0bywgb3B0cykge1xuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIGluaXQuaGlzdG9yeS5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHtcbiAgICAgIHBhdGgsXG4gICAgICBzdWJtaXNzaW9uLFxuICAgICAgZXJyb3JcbiAgICB9ID0gbm9ybWFsaXplTmF2aWdhdGVPcHRpb25zKHRvLCBvcHRzKTtcbiAgICBsZXQgY3VycmVudExvY2F0aW9uID0gc3RhdGUubG9jYXRpb247XG4gICAgbGV0IG5leHRMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHN0YXRlLmxvY2F0aW9uLCBwYXRoLCBvcHRzICYmIG9wdHMuc3RhdGUpOyAvLyBXaGVuIHVzaW5nIG5hdmlnYXRlIGFzIGEgUFVTSC9SRVBMQUNFIHdlIGFyZW4ndCByZWFkaW5nIGFuIGFscmVhZHktZW5jb2RlZFxuICAgIC8vIFVSTCBmcm9tIHdpbmRvdy5sb2NhdGlvbiwgc28gd2UgbmVlZCB0byBlbmNvZGUgaXQgaGVyZSBzbyB0aGUgYmVoYXZpb3JcbiAgICAvLyByZW1haW5zIHRoZSBzYW1lIGFzIFBPUCBhbmQgbm9uLWRhdGEtcm91dGVyIHVzYWdlcy4gIG5ldyBVUkwoKSBkb2VzIGFsbFxuICAgIC8vIHRoZSBzYW1lIGVuY29kaW5nIHdlJ2QgZ2V0IGZyb20gYSBoaXN0b3J5LnB1c2hTdGF0ZS93aW5kb3cubG9jYXRpb24gcmVhZFxuICAgIC8vIHdpdGhvdXQgaGF2aW5nIHRvIHRvdWNoIGhpc3RvcnlcblxuICAgIG5leHRMb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBuZXh0TG9jYXRpb24sIGluaXQuaGlzdG9yeS5lbmNvZGVMb2NhdGlvbihuZXh0TG9jYXRpb24pKTtcbiAgICBsZXQgdXNlclJlcGxhY2UgPSBvcHRzICYmIG9wdHMucmVwbGFjZSAhPSBudWxsID8gb3B0cy5yZXBsYWNlIDogdW5kZWZpbmVkO1xuICAgIGxldCBoaXN0b3J5QWN0aW9uID0gQWN0aW9uLlB1c2g7XG5cbiAgICBpZiAodXNlclJlcGxhY2UgPT09IHRydWUpIHtcbiAgICAgIGhpc3RvcnlBY3Rpb24gPSBBY3Rpb24uUmVwbGFjZTtcbiAgICB9IGVsc2UgaWYgKHVzZXJSZXBsYWNlID09PSBmYWxzZSkgOyBlbHNlIGlmIChzdWJtaXNzaW9uICE9IG51bGwgJiYgaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpICYmIHN1Ym1pc3Npb24uZm9ybUFjdGlvbiA9PT0gc3RhdGUubG9jYXRpb24ucGF0aG5hbWUgKyBzdGF0ZS5sb2NhdGlvbi5zZWFyY2gpIHtcbiAgICAgIC8vIEJ5IGRlZmF1bHQgb24gc3VibWlzc2lvbnMgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2UgUkVQTEFDRSBzbyB0aGF0XG4gICAgICAvLyB1c2VycyBkb24ndCBoYXZlIHRvIGRvdWJsZS1jbGljayB0aGUgYmFjayBidXR0b24gdG8gZ2V0IHRvIHRoZSBwcmlvclxuICAgICAgLy8gbG9jYXRpb24uICBJZiB0aGUgdXNlciByZWRpcmVjdHMgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gZnJvbSB0aGVcbiAgICAgIC8vIGFjdGlvbi9sb2FkZXIgdGhpcyB3aWxsIGJlIGlnbm9yZWQgYW5kIHRoZSByZWRpcmVjdCB3aWxsIGJlIGEgUFVTSFxuICAgICAgaGlzdG9yeUFjdGlvbiA9IEFjdGlvbi5SZXBsYWNlO1xuICAgIH1cblxuICAgIGxldCBwcmV2ZW50U2Nyb2xsUmVzZXQgPSBvcHRzICYmIFwicHJldmVudFNjcm9sbFJlc2V0XCIgaW4gb3B0cyA/IG9wdHMucHJldmVudFNjcm9sbFJlc2V0ID09PSB0cnVlIDogdW5kZWZpbmVkO1xuICAgIGxldCBibG9ja2VyS2V5ID0gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9KTtcblxuICAgIGlmIChibG9ja2VyS2V5KSB7XG4gICAgICAvLyBQdXQgdGhlIGJsb2NrZXIgaW50byBhIGJsb2NrZWQgc3RhdGVcbiAgICAgIHVwZGF0ZUJsb2NrZXIoYmxvY2tlcktleSwge1xuICAgICAgICBzdGF0ZTogXCJibG9ja2VkXCIsXG4gICAgICAgIGxvY2F0aW9uOiBuZXh0TG9jYXRpb24sXG5cbiAgICAgICAgcHJvY2VlZCgpIHtcbiAgICAgICAgICB1cGRhdGVCbG9ja2VyKGJsb2NrZXJLZXksIHtcbiAgICAgICAgICAgIHN0YXRlOiBcInByb2NlZWRpbmdcIixcbiAgICAgICAgICAgIHByb2NlZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHJlc2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBsb2NhdGlvbjogbmV4dExvY2F0aW9uXG4gICAgICAgICAgfSk7IC8vIFNlbmQgdGhlIHNhbWUgbmF2aWdhdGlvbiB0aHJvdWdoXG5cbiAgICAgICAgICBuYXZpZ2F0ZSh0bywgb3B0cyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgZGVsZXRlQmxvY2tlcihibG9ja2VyS2V5KTtcbiAgICAgICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgICAgICBibG9ja2VyczogbmV3IE1hcChzdGF0ZS5ibG9ja2VycylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgc3RhcnROYXZpZ2F0aW9uKGhpc3RvcnlBY3Rpb24sIG5leHRMb2NhdGlvbiwge1xuICAgICAgc3VibWlzc2lvbixcbiAgICAgIC8vIFNlbmQgdGhyb3VnaCB0aGUgZm9ybURhdGEgc2VyaWFsaXphdGlvbiBlcnJvciBpZiB3ZSBoYXZlIG9uZSBzbyB3ZSBjYW5cbiAgICAgIC8vIHJlbmRlciBhdCB0aGUgcmlnaHQgZXJyb3IgYm91bmRhcnkgYWZ0ZXIgd2UgbWF0Y2ggcm91dGVzXG4gICAgICBwZW5kaW5nRXJyb3I6IGVycm9yLFxuICAgICAgcHJldmVudFNjcm9sbFJlc2V0LFxuICAgICAgcmVwbGFjZTogb3B0cyAmJiBvcHRzLnJlcGxhY2VcbiAgICB9KTtcbiAgfSAvLyBSZXZhbGlkYXRlIGFsbCBjdXJyZW50IGxvYWRlcnMuICBJZiBhIG5hdmlnYXRpb24gaXMgaW4gcHJvZ3Jlc3Mgb3IgaWYgdGhpc1xuICAvLyBpcyBpbnRlcnJ1cHRlZCBieSBhIG5hdmlnYXRpb24sIGFsbG93IHRoaXMgdG8gXCJzdWNjZWVkXCIgYnkgY2FsbGluZyBhbGxcbiAgLy8gbG9hZGVycyBkdXJpbmcgdGhlIG5leHQgbG9hZGVyIHJvdW5kXG5cblxuICBmdW5jdGlvbiByZXZhbGlkYXRlKCkge1xuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgcmV2YWxpZGF0aW9uOiBcImxvYWRpbmdcIlxuICAgIH0pOyAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgc3VibWl0dGluZyBhbiBhY3Rpb24sIHdlIGRvbid0IG5lZWQgdG8gc3RhcnQgYSBuZXdcbiAgICAvLyBuYXZpZ2F0aW9uLCB3ZSdsbCBqdXN0IGxldCB0aGUgZm9sbG93IHVwIGxvYWRlciBleGVjdXRpb24gY2FsbCBhbGwgbG9hZGVyc1xuXG4gICAgaWYgKHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgPT09IFwic3VibWl0dGluZ1wiKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB3ZSdyZSBjdXJyZW50bHkgaW4gYW4gaWRsZSBzdGF0ZSwgc3RhcnQgYSBuZXcgbmF2aWdhdGlvbiBmb3IgdGhlIGN1cnJlbnRcbiAgICAvLyBhY3Rpb24vbG9jYXRpb24gYW5kIG1hcmsgaXQgYXMgdW5pbnRlcnJ1cHRlZCwgd2hpY2ggd2lsbCBza2lwIHRoZSBoaXN0b3J5XG4gICAgLy8gdXBkYXRlIGluIGNvbXBsZXRlTmF2aWdhdGlvblxuXG5cbiAgICBpZiAoc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJpZGxlXCIpIHtcbiAgICAgIHN0YXJ0TmF2aWdhdGlvbihzdGF0ZS5oaXN0b3J5QWN0aW9uLCBzdGF0ZS5sb2NhdGlvbiwge1xuICAgICAgICBzdGFydFVuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb246IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gT3RoZXJ3aXNlLCBpZiB3ZSdyZSBjdXJyZW50bHkgaW4gYSBsb2FkaW5nIHN0YXRlLCBqdXN0IHN0YXJ0IGEgbmV3XG4gICAgLy8gbmF2aWdhdGlvbiB0byB0aGUgbmF2aWdhdGlvbi5sb2NhdGlvbiBidXQgZG8gbm90IHRyaWdnZXIgYW4gdW5pbnRlcnJ1cHRlZFxuICAgIC8vIHJldmFsaWRhdGlvbiBzbyB0aGF0IGhpc3RvcnkgY29ycmVjdGx5IHVwZGF0ZXMgb25jZSB0aGUgbmF2aWdhdGlvbiBjb21wbGV0ZXNcblxuXG4gICAgc3RhcnROYXZpZ2F0aW9uKHBlbmRpbmdBY3Rpb24gfHwgc3RhdGUuaGlzdG9yeUFjdGlvbiwgc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwge1xuICAgICAgb3ZlcnJpZGVOYXZpZ2F0aW9uOiBzdGF0ZS5uYXZpZ2F0aW9uXG4gICAgfSk7XG4gIH0gLy8gU3RhcnQgYSBuYXZpZ2F0aW9uIHRvIHRoZSBnaXZlbiBhY3Rpb24vbG9jYXRpb24uICBDYW4gb3B0aW9uYWxseSBwcm92aWRlIGFcbiAgLy8gb3ZlcnJpZGVOYXZpZ2F0aW9uIHdoaWNoIHdpbGwgb3ZlcnJpZGUgdGhlIG5vcm1hbExvYWQgaW4gdGhlIGNhc2Ugb2YgYSByZWRpcmVjdFxuICAvLyBuYXZpZ2F0aW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydE5hdmlnYXRpb24oaGlzdG9yeUFjdGlvbiwgbG9jYXRpb24sIG9wdHMpIHtcbiAgICAvLyBBYm9ydCBhbnkgaW4tcHJvZ3Jlc3MgbmF2aWdhdGlvbnMgYW5kIHN0YXJ0IGEgbmV3IG9uZS4gVW5zZXQgYW55IG9uZ29pbmdcbiAgICAvLyB1bmludGVycnVwdGVkIHJldmFsaWRhdGlvbnMgdW5sZXNzIHRvbGQgb3RoZXJ3aXNlLCBzaW5jZSB3ZSB3YW50IHRoaXNcbiAgICAvLyBuZXcgbmF2aWdhdGlvbiB0byB1cGRhdGUgaGlzdG9yeSBub3JtYWxseVxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciAmJiBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIHBlbmRpbmdBY3Rpb24gPSBoaXN0b3J5QWN0aW9uO1xuICAgIGlzVW5pbnRlcnJ1cHRlZFJldmFsaWRhdGlvbiA9IChvcHRzICYmIG9wdHMuc3RhcnRVbmludGVycnVwdGVkUmV2YWxpZGF0aW9uKSA9PT0gdHJ1ZTsgLy8gU2F2ZSB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24gZXZlcnkgdGltZSB3ZSBzdGFydCBhIG5ldyBuYXZpZ2F0aW9uLFxuICAgIC8vIGFuZCB0cmFjayB3aGV0aGVyIHdlIHNob3VsZCByZXNldCBzY3JvbGwgb24gY29tcGxldGlvblxuXG4gICAgc2F2ZVNjcm9sbFBvc2l0aW9uKHN0YXRlLmxvY2F0aW9uLCBzdGF0ZS5tYXRjaGVzKTtcbiAgICBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0ID0gKG9wdHMgJiYgb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXQpID09PSB0cnVlO1xuICAgIGxldCBsb2FkaW5nTmF2aWdhdGlvbiA9IG9wdHMgJiYgb3B0cy5vdmVycmlkZU5hdmlnYXRpb247XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBsb2NhdGlvbiwgaW5pdC5iYXNlbmFtZSk7IC8vIFNob3J0IGNpcmN1aXQgd2l0aCBhIDQwNCBvbiB0aGUgcm9vdCBlcnJvciBib3VuZGFyeSBpZiB3ZSBtYXRjaCBub3RoaW5nXG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA0LCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgfSk7XG4gICAgICBsZXQge1xuICAgICAgICBtYXRjaGVzOiBub3RGb3VuZE1hdGNoZXMsXG4gICAgICAgIHJvdXRlXG4gICAgICB9ID0gZ2V0U2hvcnRDaXJjdWl0TWF0Y2hlcyhkYXRhUm91dGVzKTsgLy8gQ2FuY2VsIGFsbCBwZW5kaW5nIGRlZmVycmVkIG9uIDQwNHMgc2luY2Ugd2UgZG9uJ3Qga2VlcCBhbnkgcm91dGVzXG5cbiAgICAgIGNhbmNlbEFjdGl2ZURlZmVycmVkcygpO1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKGxvY2F0aW9uLCB7XG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU2hvcnQgY2lyY3VpdCBpZiBpdCdzIG9ubHkgYSBoYXNoIGNoYW5nZSBhbmQgbm90IGEgbXV0YXRpb24gc3VibWlzc2lvblxuICAgIC8vIEZvciBleGFtcGxlLCBvbiAvcGFnZSNoYXNoIGFuZCBzdWJtaXQgYSA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+IHdoaWNoIHdpbGxcbiAgICAvLyBkZWZhdWx0IHRvIGEgbmF2aWdhdGlvbiB0byAvcGFnZVxuXG5cbiAgICBpZiAoaXNIYXNoQ2hhbmdlT25seShzdGF0ZS5sb2NhdGlvbiwgbG9jYXRpb24pICYmICEob3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChvcHRzLnN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpKSB7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIHtcbiAgICAgICAgbWF0Y2hlc1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDcmVhdGUgYSBjb250cm9sbGVyL1JlcXVlc3QgZm9yIHRoaXMgbmF2aWdhdGlvblxuXG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG4gICAgbGV0IHJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIGxvY2F0aW9uLCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIuc2lnbmFsLCBvcHRzICYmIG9wdHMuc3VibWlzc2lvbik7XG4gICAgbGV0IHBlbmRpbmdBY3Rpb25EYXRhO1xuICAgIGxldCBwZW5kaW5nRXJyb3I7XG5cbiAgICBpZiAob3B0cyAmJiBvcHRzLnBlbmRpbmdFcnJvcikge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhIHBlbmRpbmdFcnJvciwgaXQgbWVhbnMgdGhlIHVzZXIgYXR0ZW1wdGVkIGEgR0VUIHN1Ym1pc3Npb25cbiAgICAgIC8vIHdpdGggYmluYXJ5IEZvcm1EYXRhIHNvIGFzc2lnbiBoZXJlIGFuZCBza2lwIHRvIGhhbmRsZUxvYWRlcnMuICBUaGF0XG4gICAgICAvLyB3YXkgd2UgaGFuZGxlIGNhbGxpbmcgbG9hZGVycyBhYm92ZSB0aGUgYm91bmRhcnkgZXRjLiAgSXQncyBub3QgcmVhbGx5XG4gICAgICAvLyBkaWZmZXJlbnQgZnJvbSBhbiBhY3Rpb25FcnJvciBpbiB0aGF0IHNlbnNlLlxuICAgICAgcGVuZGluZ0Vycm9yID0ge1xuICAgICAgICBbZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzKS5yb3V0ZS5pZF06IG9wdHMucGVuZGluZ0Vycm9yXG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiBvcHRzLnN1Ym1pc3Npb24gJiYgaXNNdXRhdGlvbk1ldGhvZChvcHRzLnN1Ym1pc3Npb24uZm9ybU1ldGhvZCkpIHtcbiAgICAgIC8vIENhbGwgYWN0aW9uIGlmIHdlIHJlY2VpdmVkIGFuIGFjdGlvbiBzdWJtaXNzaW9uXG4gICAgICBsZXQgYWN0aW9uT3V0cHV0ID0gYXdhaXQgaGFuZGxlQWN0aW9uKHJlcXVlc3QsIGxvY2F0aW9uLCBvcHRzLnN1Ym1pc3Npb24sIG1hdGNoZXMsIHtcbiAgICAgICAgcmVwbGFjZTogb3B0cy5yZXBsYWNlXG4gICAgICB9KTtcblxuICAgICAgaWYgKGFjdGlvbk91dHB1dC5zaG9ydENpcmN1aXRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBlbmRpbmdBY3Rpb25EYXRhID0gYWN0aW9uT3V0cHV0LnBlbmRpbmdBY3Rpb25EYXRhO1xuICAgICAgcGVuZGluZ0Vycm9yID0gYWN0aW9uT3V0cHV0LnBlbmRpbmdBY3Rpb25FcnJvcjtcblxuICAgICAgbGV0IG5hdmlnYXRpb24gPSBfZXh0ZW5kcyh7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgbG9jYXRpb25cbiAgICAgIH0sIG9wdHMuc3VibWlzc2lvbik7XG5cbiAgICAgIGxvYWRpbmdOYXZpZ2F0aW9uID0gbmF2aWdhdGlvbjsgLy8gQ3JlYXRlIGEgR0VUIHJlcXVlc3QgZm9yIHRoZSBsb2FkZXJzXG5cbiAgICAgIHJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0LnVybCwge1xuICAgICAgICBzaWduYWw6IHJlcXVlc3Quc2lnbmFsXG4gICAgICB9KTtcbiAgICB9IC8vIENhbGwgbG9hZGVyc1xuXG5cbiAgICBsZXQge1xuICAgICAgc2hvcnRDaXJjdWl0ZWQsXG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSA9IGF3YWl0IGhhbmRsZUxvYWRlcnMocmVxdWVzdCwgbG9jYXRpb24sIG1hdGNoZXMsIGxvYWRpbmdOYXZpZ2F0aW9uLCBvcHRzICYmIG9wdHMuc3VibWlzc2lvbiwgb3B0cyAmJiBvcHRzLnJlcGxhY2UsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpO1xuXG4gICAgaWYgKHNob3J0Q2lyY3VpdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBDbGVhbiB1cCBub3cgdGhhdCB0aGUgYWN0aW9uL2xvYWRlcnMgaGF2ZSBjb21wbGV0ZWQuICBEb24ndCBjbGVhbiB1cCBpZlxuICAgIC8vIHdlIHNob3J0IGNpcmN1aXRlZCBiZWNhdXNlIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciB3aWxsIGhhdmUgYWxyZWFkeVxuICAgIC8vIGJlZW4gYXNzaWduZWQgdG8gYSBuZXcgY29udHJvbGxlciBmb3IgdGhlIG5leHQgbmF2aWdhdGlvblxuXG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIgPSBudWxsO1xuICAgIGNvbXBsZXRlTmF2aWdhdGlvbihsb2NhdGlvbiwgX2V4dGVuZHMoe1xuICAgICAgbWF0Y2hlc1xuICAgIH0sIHBlbmRpbmdBY3Rpb25EYXRhID8ge1xuICAgICAgYWN0aW9uRGF0YTogcGVuZGluZ0FjdGlvbkRhdGFcbiAgICB9IDoge30sIHtcbiAgICAgIGxvYWRlckRhdGEsXG4gICAgICBlcnJvcnNcbiAgICB9KSk7XG4gIH0gLy8gQ2FsbCB0aGUgYWN0aW9uIG1hdGNoZWQgYnkgdGhlIGxlYWYgcm91dGUgZm9yIHRoaXMgbmF2aWdhdGlvbiBhbmQgaGFuZGxlXG4gIC8vIHJlZGlyZWN0cy9lcnJvcnNcblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbihyZXF1ZXN0LCBsb2NhdGlvbiwgc3VibWlzc2lvbiwgbWF0Y2hlcywgb3B0cykge1xuICAgIGludGVycnVwdEFjdGl2ZUxvYWRzKCk7IC8vIFB1dCB1cyBpbiBhIHN1Ym1pdHRpbmcgc3RhdGVcblxuICAgIGxldCBuYXZpZ2F0aW9uID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwic3VibWl0dGluZ1wiLFxuICAgICAgbG9jYXRpb25cbiAgICB9LCBzdWJtaXNzaW9uKTtcblxuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIG5hdmlnYXRpb25cbiAgICB9KTsgLy8gQ2FsbCBvdXIgYWN0aW9uIGFuZCBnZXQgdGhlIHJlc3VsdFxuXG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgYWN0aW9uTWF0Y2ggPSBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG5cbiAgICBpZiAoIWFjdGlvbk1hdGNoLnJvdXRlLmFjdGlvbikge1xuICAgICAgcmVzdWx0ID0ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmVycm9yLFxuICAgICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICByb3V0ZUlkOiBhY3Rpb25NYXRjaC5yb3V0ZS5pZFxuICAgICAgICB9KVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIHJlcXVlc3QsIGFjdGlvbk1hdGNoLCBtYXRjaGVzLCByb3V0ZXIuYmFzZW5hbWUpO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgbGV0IHJlcGxhY2U7XG5cbiAgICAgIGlmIChvcHRzICYmIG9wdHMucmVwbGFjZSAhPSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2UgPSBvcHRzLnJlcGxhY2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBkaWRuJ3QgZXhwbGljaXR5IGluZGljYXRlIHJlcGxhY2UgYmVoYXZpb3IsIHJlcGxhY2UgaWZcbiAgICAgICAgLy8gd2UgcmVkaXJlY3RlZCB0byB0aGUgZXhhY3Qgc2FtZSBsb2NhdGlvbiB3ZSdyZSBjdXJyZW50bHkgYXQgdG8gYXZvaWRcbiAgICAgICAgLy8gZG91YmxlIGJhY2stYnV0dG9uc1xuICAgICAgICByZXBsYWNlID0gcmVzdWx0LmxvY2F0aW9uID09PSBzdGF0ZS5sb2NhdGlvbi5wYXRobmFtZSArIHN0YXRlLmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIHJlc3VsdCwge1xuICAgICAgICBzdWJtaXNzaW9uLFxuICAgICAgICByZXBsYWNlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFN0b3JlIG9mZiB0aGUgcGVuZGluZyBlcnJvciAtIHdlIHVzZSBpdCB0byBkZXRlcm1pbmUgd2hpY2ggbG9hZGVyc1xuICAgICAgLy8gdG8gY2FsbCBhbmQgd2lsbCBjb21taXQgaXQgd2hlbiB3ZSBjb21wbGV0ZSB0aGUgbmF2aWdhdGlvblxuICAgICAgbGV0IGJvdW5kYXJ5TWF0Y2ggPSBmaW5kTmVhcmVzdEJvdW5kYXJ5KG1hdGNoZXMsIGFjdGlvbk1hdGNoLnJvdXRlLmlkKTsgLy8gQnkgZGVmYXVsdCwgYWxsIHN1Ym1pc3Npb25zIGFyZSBSRVBMQUNFIG5hdmlnYXRpb25zLCBidXQgaWYgdGhlXG4gICAgICAvLyBhY3Rpb24gdGhyZXcgYW4gZXJyb3IgdGhhdCdsbCBiZSByZW5kZXJlZCBpbiBhbiBlcnJvckVsZW1lbnQsIHdlIGZhbGxcbiAgICAgIC8vIGJhY2sgdG8gUFVTSCBzbyB0aGF0IHRoZSB1c2VyIGNhbiB1c2UgdGhlIGJhY2sgYnV0dG9uIHRvIGdldCBiYWNrIHRvXG4gICAgICAvLyB0aGUgcHJlLXN1Ym1pc3Npb24gZm9ybSBsb2NhdGlvbiB0byB0cnkgYWdhaW5cblxuICAgICAgaWYgKChvcHRzICYmIG9wdHMucmVwbGFjZSkgIT09IHRydWUpIHtcbiAgICAgICAgcGVuZGluZ0FjdGlvbiA9IEFjdGlvbi5QdXNoO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAvLyBTZW5kIGJhY2sgYW4gZW1wdHkgb2JqZWN0IHdlIGNhbiB1c2UgdG8gY2xlYXIgb3V0IGFueSBwcmlvciBhY3Rpb25EYXRhXG4gICAgICAgIHBlbmRpbmdBY3Rpb25EYXRhOiB7fSxcbiAgICAgICAgcGVuZGluZ0FjdGlvbkVycm9yOiB7XG4gICAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGVuZGluZ0FjdGlvbkRhdGE6IHtcbiAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgIH1cbiAgICB9O1xuICB9IC8vIENhbGwgYWxsIGFwcGxpY2FibGUgbG9hZGVycyBmb3IgdGhlIGdpdmVuIG1hdGNoZXMsIGhhbmRsaW5nIHJlZGlyZWN0cyxcbiAgLy8gZXJyb3JzLCBldGMuXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVMb2FkZXJzKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCBvdmVycmlkZU5hdmlnYXRpb24sIHN1Ym1pc3Npb24sIHJlcGxhY2UsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IpIHtcbiAgICAvLyBGaWd1cmUgb3V0IHRoZSByaWdodCBuYXZpZ2F0aW9uIHdlIHdhbnQgdG8gdXNlIGZvciBkYXRhIGxvYWRpbmdcbiAgICBsZXQgbG9hZGluZ05hdmlnYXRpb24gPSBvdmVycmlkZU5hdmlnYXRpb247XG5cbiAgICBpZiAoIWxvYWRpbmdOYXZpZ2F0aW9uKSB7XG4gICAgICBsZXQgbmF2aWdhdGlvbiA9IF9leHRlbmRzKHtcbiAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1FbmNUeXBlOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWRcbiAgICAgIH0sIHN1Ym1pc3Npb24pO1xuXG4gICAgICBsb2FkaW5nTmF2aWdhdGlvbiA9IG5hdmlnYXRpb247XG4gICAgfSAvLyBJZiB0aGlzIHdhcyBhIHJlZGlyZWN0IGZyb20gYW4gYWN0aW9uIHdlIGRvbid0IGhhdmUgYSBcInN1Ym1pc3Npb25cIiBidXRcbiAgICAvLyB3ZSBoYXZlIGl0IG9uIHRoZSBsb2FkaW5nIG5hdmlnYXRpb24gc28gdXNlIHRoYXQgaWYgYXZhaWxhYmxlXG5cblxuICAgIGxldCBhY3RpdmVTdWJtaXNzaW9uID0gc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24gOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtTWV0aG9kICYmIGxvYWRpbmdOYXZpZ2F0aW9uLmZvcm1BY3Rpb24gJiYgbG9hZGluZ05hdmlnYXRpb24uZm9ybURhdGEgJiYgbG9hZGluZ05hdmlnYXRpb24uZm9ybUVuY1R5cGUgPyB7XG4gICAgICBmb3JtTWV0aG9kOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtTWV0aG9kLFxuICAgICAgZm9ybUFjdGlvbjogbG9hZGluZ05hdmlnYXRpb24uZm9ybUFjdGlvbixcbiAgICAgIGZvcm1EYXRhOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRGF0YSxcbiAgICAgIGZvcm1FbmNUeXBlOiBsb2FkaW5nTmF2aWdhdGlvbi5mb3JtRW5jVHlwZVxuICAgIH0gOiB1bmRlZmluZWQ7XG4gICAgbGV0IFttYXRjaGVzVG9Mb2FkLCByZXZhbGlkYXRpbmdGZXRjaGVyc10gPSBnZXRNYXRjaGVzVG9Mb2FkKGluaXQuaGlzdG9yeSwgc3RhdGUsIG1hdGNoZXMsIGFjdGl2ZVN1Ym1pc3Npb24sIGxvY2F0aW9uLCBpc1JldmFsaWRhdGlvblJlcXVpcmVkLCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcywgY2FuY2VsbGVkRmV0Y2hlckxvYWRzLCBwZW5kaW5nQWN0aW9uRGF0YSwgcGVuZGluZ0Vycm9yLCBmZXRjaExvYWRNYXRjaGVzKTsgLy8gQ2FuY2VsIHBlbmRpbmcgZGVmZXJyZWRzIGZvciBuby1sb25nZXItbWF0Y2hlZCByb3V0ZXMgb3Igcm91dGVzIHdlJ3JlXG4gICAgLy8gYWJvdXQgdG8gcmVsb2FkLiAgTm90ZSB0aGF0IGlmIHRoaXMgaXMgYW4gYWN0aW9uIHJlbG9hZCB3ZSB3b3VsZCBoYXZlXG4gICAgLy8gYWxyZWFkeSBjYW5jZWxsZWQgYWxsIHBlbmRpbmcgZGVmZXJyZWRzIHNvIHRoaXMgd291bGQgYmUgYSBuby1vcFxuXG4gICAgY2FuY2VsQWN0aXZlRGVmZXJyZWRzKHJvdXRlSWQgPT4gIShtYXRjaGVzICYmIG1hdGNoZXMuc29tZShtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpKSB8fCBtYXRjaGVzVG9Mb2FkICYmIG1hdGNoZXNUb0xvYWQuc29tZShtID0+IG0ucm91dGUuaWQgPT09IHJvdXRlSWQpKTsgLy8gU2hvcnQgY2lyY3VpdCBpZiB3ZSBoYXZlIG5vIGxvYWRlcnMgdG8gcnVuXG5cbiAgICBpZiAobWF0Y2hlc1RvTG9hZC5sZW5ndGggPT09IDAgJiYgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb21wbGV0ZU5hdmlnYXRpb24obG9jYXRpb24sIF9leHRlbmRzKHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIC8vIENvbW1pdCBwZW5kaW5nIGVycm9yIGlmIHdlJ3JlIHNob3J0IGNpcmN1aXRpbmdcbiAgICAgICAgZXJyb3JzOiBwZW5kaW5nRXJyb3IgfHwgbnVsbFxuICAgICAgfSwgcGVuZGluZ0FjdGlvbkRhdGEgPyB7XG4gICAgICAgIGFjdGlvbkRhdGE6IHBlbmRpbmdBY3Rpb25EYXRhXG4gICAgICB9IDoge30pKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdGhpcyBpcyBhbiB1bmludGVycnVwdGVkIHJldmFsaWRhdGlvbiwgd2UgcmVtYWluIGluIG91ciBjdXJyZW50IGlkbGVcbiAgICAvLyBzdGF0ZS4gIElmIG5vdCwgd2UgbmVlZCB0byBzd2l0Y2ggdG8gb3VyIGxvYWRpbmcgc3RhdGUgYW5kIGxvYWQgZGF0YSxcbiAgICAvLyBwcmVzZXJ2aW5nIGFueSBuZXcgYWN0aW9uIGRhdGEgb3IgZXhpc3RpbmcgYWN0aW9uIGRhdGEgKGluIHRoZSBjYXNlIG9mXG4gICAgLy8gYSByZXZhbGlkYXRpb24gaW50ZXJydXB0aW5nIGFuIGFjdGlvblJlbG9hZClcblxuXG4gICAgaWYgKCFpc1VuaW50ZXJydXB0ZWRSZXZhbGlkYXRpb24pIHtcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4ge1xuICAgICAgICBsZXQgZmV0Y2hlciA9IHN0YXRlLmZldGNoZXJzLmdldChyZi5rZXkpO1xuICAgICAgICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlciA9IHtcbiAgICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgZGF0YTogZmV0Y2hlciAmJiBmZXRjaGVyLmRhdGEsXG4gICAgICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWQsXG4gICAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGUuZmV0Y2hlcnMuc2V0KHJmLmtleSwgcmV2YWxpZGF0aW5nRmV0Y2hlcik7XG4gICAgICB9KTtcbiAgICAgIGxldCBhY3Rpb25EYXRhID0gcGVuZGluZ0FjdGlvbkRhdGEgfHwgc3RhdGUuYWN0aW9uRGF0YTtcbiAgICAgIHVwZGF0ZVN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgbmF2aWdhdGlvbjogbG9hZGluZ05hdmlnYXRpb25cbiAgICAgIH0sIGFjdGlvbkRhdGEgPyBPYmplY3Qua2V5cyhhY3Rpb25EYXRhKS5sZW5ndGggPT09IDAgPyB7XG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGxcbiAgICAgIH0gOiB7XG4gICAgICAgIGFjdGlvbkRhdGFcbiAgICAgIH0gOiB7fSwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMubGVuZ3RoID4gMCA/IHtcbiAgICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgICB9IDoge30pKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nTmF2aWdhdGlvbkxvYWRJZCA9ICsraW5jcmVtZW50aW5nTG9hZElkO1xuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gZmV0Y2hDb250cm9sbGVycy5zZXQocmYua2V5LCBwZW5kaW5nTmF2aWdhdGlvbkNvbnRyb2xsZXIpKTtcbiAgICBsZXQge1xuICAgICAgcmVzdWx0cyxcbiAgICAgIGxvYWRlclJlc3VsdHMsXG4gICAgICBmZXRjaGVyUmVzdWx0c1xuICAgIH0gPSBhd2FpdCBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoc3RhdGUubWF0Y2hlcywgbWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnMsIHJlcXVlc3QpO1xuXG4gICAgaWYgKHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3J0Q2lyY3VpdGVkOiB0cnVlXG4gICAgICB9O1xuICAgIH0gLy8gQ2xlYW4gdXAgX2FmdGVyXyBsb2FkZXJzIGhhdmUgY29tcGxldGVkLiAgRG9uJ3QgY2xlYW4gdXAgaWYgd2Ugc2hvcnRcbiAgICAvLyBjaXJjdWl0ZWQgYmVjYXVzZSBmZXRjaENvbnRyb2xsZXJzIHdvdWxkIGhhdmUgYmVlbiBhYm9ydGVkIGFuZFxuICAgIC8vIHJlYXNzaWduZWQgdG8gbmV3IGNvbnRyb2xsZXJzIGZvciB0aGUgbmV4dCBuYXZpZ2F0aW9uXG5cblxuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gocmYgPT4gZmV0Y2hDb250cm9sbGVycy5kZWxldGUocmYua2V5KSk7IC8vIElmIGFueSBsb2FkZXJzIHJldHVybmVkIGEgcmVkaXJlY3QgUmVzcG9uc2UsIHN0YXJ0IGEgbmV3IFJFUExBQ0UgbmF2aWdhdGlvblxuXG4gICAgbGV0IHJlZGlyZWN0ID0gZmluZFJlZGlyZWN0KHJlc3VsdHMpO1xuXG4gICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QsIHtcbiAgICAgICAgcmVwbGFjZVxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG9ydENpcmN1aXRlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9IC8vIFByb2Nlc3MgYW5kIGNvbW1pdCBvdXRwdXQgZnJvbSBsb2FkZXJzXG5cblxuICAgIGxldCB7XG4gICAgICBsb2FkZXJEYXRhLFxuICAgICAgZXJyb3JzXG4gICAgfSA9IHByb2Nlc3NMb2FkZXJEYXRhKHN0YXRlLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBsb2FkZXJSZXN1bHRzLCBwZW5kaW5nRXJyb3IsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCBmZXRjaGVyUmVzdWx0cywgYWN0aXZlRGVmZXJyZWRzKTsgLy8gV2lyZSB1cCBzdWJzY3JpYmVycyB0byB1cGRhdGUgbG9hZGVyRGF0YSBhcyBwcm9taXNlcyBzZXR0bGVcblxuICAgIGFjdGl2ZURlZmVycmVkcy5mb3JFYWNoKChkZWZlcnJlZERhdGEsIHJvdXRlSWQpID0+IHtcbiAgICAgIGRlZmVycmVkRGF0YS5zdWJzY3JpYmUoYWJvcnRlZCA9PiB7XG4gICAgICAgIC8vIE5vdGU6IE5vIG5lZWQgdG8gdXBkYXRlU3RhdGUgaGVyZSBzaW5jZSB0aGUgVHJhY2tlZFByb21pc2Ugb25cbiAgICAgICAgLy8gbG9hZGVyRGF0YSBpcyBzdGFibGUgYWNyb3NzIHJlc29sdmUvcmVqZWN0XG4gICAgICAgIC8vIFJlbW92ZSB0aGlzIGluc3RhbmNlIGlmIHdlIHdlcmUgYWJvcnRlZCBvciBpZiBwcm9taXNlcyBoYXZlIHNldHRsZWRcbiAgICAgICAgaWYgKGFib3J0ZWQgfHwgZGVmZXJyZWREYXRhLmRvbmUpIHtcbiAgICAgICAgICBhY3RpdmVEZWZlcnJlZHMuZGVsZXRlKHJvdXRlSWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBtYXJrRmV0Y2hSZWRpcmVjdHNEb25lKCk7XG4gICAgbGV0IGRpZEFib3J0RmV0Y2hMb2FkcyA9IGFib3J0U3RhbGVGZXRjaExvYWRzKHBlbmRpbmdOYXZpZ2F0aW9uTG9hZElkKTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0sIGRpZEFib3J0RmV0Y2hMb2FkcyB8fCByZXZhbGlkYXRpbmdGZXRjaGVycy5sZW5ndGggPiAwID8ge1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSA6IHt9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEZldGNoZXIoa2V5KSB7XG4gICAgcmV0dXJuIHN0YXRlLmZldGNoZXJzLmdldChrZXkpIHx8IElETEVfRkVUQ0hFUjtcbiAgfSAvLyBUcmlnZ2VyIGEgZmV0Y2hlciBsb2FkL3N1Ym1pdCBmb3IgdGhlIGdpdmVuIGZldGNoZXIga2V5XG5cblxuICBmdW5jdGlvbiBmZXRjaChrZXksIHJvdXRlSWQsIGhyZWYsIG9wdHMpIHtcbiAgICBpZiAoaXNTZXJ2ZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInJvdXRlci5mZXRjaCgpIHdhcyBjYWxsZWQgZHVyaW5nIHRoZSBzZXJ2ZXIgcmVuZGVyLCBidXQgaXQgc2hvdWxkbid0IGJlLiBcIiArIFwiWW91IGFyZSBsaWtlbHkgY2FsbGluZyBhIHVzZUZldGNoZXIoKSBtZXRob2QgaW4gdGhlIGJvZHkgb2YgeW91ciBjb21wb25lbnQuIFwiICsgXCJUcnkgbW92aW5nIGl0IHRvIGEgdXNlRWZmZWN0IG9yIGEgY2FsbGJhY2suXCIpO1xuICAgIH1cblxuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpKSBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGhyZWYsIGluaXQuYmFzZW5hbWUpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogaHJlZlxuICAgICAgfSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB7XG4gICAgICBwYXRoLFxuICAgICAgc3VibWlzc2lvblxuICAgIH0gPSBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnMoaHJlZiwgb3B0cywgdHJ1ZSk7XG4gICAgbGV0IG1hdGNoID0gZ2V0VGFyZ2V0TWF0Y2gobWF0Y2hlcywgcGF0aCk7XG4gICAgcGVuZGluZ1ByZXZlbnRTY3JvbGxSZXNldCA9IChvcHRzICYmIG9wdHMucHJldmVudFNjcm9sbFJlc2V0KSA9PT0gdHJ1ZTtcblxuICAgIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgaGFuZGxlRmV0Y2hlckFjdGlvbihrZXksIHJvdXRlSWQsIHBhdGgsIG1hdGNoLCBtYXRjaGVzLCBzdWJtaXNzaW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFN0b3JlIG9mZiB0aGUgbWF0Y2ggc28gd2UgY2FuIGNhbGwgaXQncyBzaG91bGRSZXZhbGlkYXRlIG9uIHN1YnNlcXVlbnRcbiAgICAvLyByZXZhbGlkYXRpb25zXG5cblxuICAgIGZldGNoTG9hZE1hdGNoZXMuc2V0KGtleSwge1xuICAgICAgcm91dGVJZCxcbiAgICAgIHBhdGgsXG4gICAgICBtYXRjaCxcbiAgICAgIG1hdGNoZXNcbiAgICB9KTtcbiAgICBoYW5kbGVGZXRjaGVyTG9hZGVyKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIG1hdGNoZXMsIHN1Ym1pc3Npb24pO1xuICB9IC8vIENhbGwgdGhlIGFjdGlvbiBmb3IgdGhlIG1hdGNoZWQgZmV0Y2hlci5zdWJtaXQoKSwgYW5kIHRoZW4gaGFuZGxlIHJlZGlyZWN0cyxcbiAgLy8gZXJyb3JzLCBhbmQgcmV2YWxpZGF0aW9uXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGZXRjaGVyQWN0aW9uKGtleSwgcm91dGVJZCwgcGF0aCwgbWF0Y2gsIHJlcXVlc3RNYXRjaGVzLCBzdWJtaXNzaW9uKSB7XG4gICAgaW50ZXJydXB0QWN0aXZlTG9hZHMoKTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuXG4gICAgaWYgKCFtYXRjaC5yb3V0ZS5hY3Rpb24pIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogc3VibWlzc2lvbi5mb3JtTWV0aG9kLFxuICAgICAgICBwYXRobmFtZTogcGF0aCxcbiAgICAgICAgcm91dGVJZDogcm91dGVJZFxuICAgICAgfSk7XG4gICAgICBzZXRGZXRjaGVyRXJyb3Ioa2V5LCByb3V0ZUlkLCBlcnJvcik7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBQdXQgdGhpcyBmZXRjaGVyIGludG8gaXQncyBzdWJtaXR0aW5nIHN0YXRlXG5cblxuICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTtcblxuICAgIGxldCBmZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwic3VibWl0dGluZ1wiXG4gICAgfSwgc3VibWlzc2lvbiwge1xuICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICB9KTtcblxuICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGZldGNoZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pOyAvLyBDYWxsIHRoZSBhY3Rpb24gZm9yIHRoZSBmZXRjaGVyXG5cbiAgICBsZXQgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGxldCBmZXRjaFJlcXVlc3QgPSBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChpbml0Lmhpc3RvcnksIHBhdGgsIGFib3J0Q29udHJvbGxlci5zaWduYWwsIHN1Ym1pc3Npb24pO1xuICAgIGZldGNoQ29udHJvbGxlcnMuc2V0KGtleSwgYWJvcnRDb250cm9sbGVyKTtcbiAgICBsZXQgYWN0aW9uUmVzdWx0ID0gYXdhaXQgY2FsbExvYWRlck9yQWN0aW9uKFwiYWN0aW9uXCIsIGZldGNoUmVxdWVzdCwgbWF0Y2gsIHJlcXVlc3RNYXRjaGVzLCByb3V0ZXIuYmFzZW5hbWUpO1xuXG4gICAgaWYgKGZldGNoUmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgLy8gV2UgY2FuIGRlbGV0ZSB0aGlzIHNvIGxvbmcgYXMgd2Ugd2VyZW4ndCBhYm9ydGVkIGJ5IG91IG91ciBvd24gZmV0Y2hlclxuICAgICAgLy8gcmUtc3VibWl0IHdoaWNoIHdvdWxkIGhhdmUgcHV0IF9uZXdfIGNvbnRyb2xsZXIgaXMgaW4gZmV0Y2hDb250cm9sbGVyc1xuICAgICAgaWYgKGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSkgPT09IGFib3J0Q29udHJvbGxlcikge1xuICAgICAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICAgIGZldGNoUmVkaXJlY3RJZHMuYWRkKGtleSk7XG5cbiAgICAgIGxldCBsb2FkaW5nRmV0Y2hlciA9IF9leHRlbmRzKHtcbiAgICAgICAgc3RhdGU6IFwibG9hZGluZ1wiXG4gICAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBsb2FkaW5nRmV0Y2hlcik7XG4gICAgICB1cGRhdGVTdGF0ZSh7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gc3RhcnRSZWRpcmVjdE5hdmlnYXRpb24oc3RhdGUsIGFjdGlvblJlc3VsdCwge1xuICAgICAgICBpc0ZldGNoQWN0aW9uUmVkaXJlY3Q6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gLy8gUHJvY2VzcyBhbnkgbm9uLXJlZGlyZWN0IGVycm9ycyB0aHJvd25cblxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQoYWN0aW9uUmVzdWx0KSkge1xuICAgICAgc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgYWN0aW9uUmVzdWx0LmVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChhY3Rpb25SZXN1bHQpKSB7XG4gICAgICB0aHJvdyBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwMCwge1xuICAgICAgICB0eXBlOiBcImRlZmVyLWFjdGlvblwiXG4gICAgICB9KTtcbiAgICB9IC8vIFN0YXJ0IHRoZSBkYXRhIGxvYWQgZm9yIGN1cnJlbnQgbWF0Y2hlcywgb3IgdGhlIG5leHQgbG9jYXRpb24gaWYgd2UncmVcbiAgICAvLyBpbiB0aGUgbWlkZGxlIG9mIGEgbmF2aWdhdGlvblxuXG5cbiAgICBsZXQgbmV4dExvY2F0aW9uID0gc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiB8fCBzdGF0ZS5sb2NhdGlvbjtcbiAgICBsZXQgcmV2YWxpZGF0aW9uUmVxdWVzdCA9IGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgbmV4dExvY2F0aW9uLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICBsZXQgbWF0Y2hlcyA9IHN0YXRlLm5hdmlnYXRpb24uc3RhdGUgIT09IFwiaWRsZVwiID8gbWF0Y2hSb3V0ZXMoZGF0YVJvdXRlcywgc3RhdGUubmF2aWdhdGlvbi5sb2NhdGlvbiwgaW5pdC5iYXNlbmFtZSkgOiBzdGF0ZS5tYXRjaGVzO1xuICAgIGludmFyaWFudChtYXRjaGVzLCBcIkRpZG4ndCBmaW5kIGFueSBtYXRjaGVzIGFmdGVyIGZldGNoZXIgYWN0aW9uXCIpO1xuICAgIGxldCBsb2FkSWQgPSArK2luY3JlbWVudGluZ0xvYWRJZDtcbiAgICBmZXRjaFJlbG9hZElkcy5zZXQoa2V5LCBsb2FkSWQpO1xuXG4gICAgbGV0IGxvYWRGZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgZGF0YTogYWN0aW9uUmVzdWx0LmRhdGFcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZEZldGNoZXIpO1xuICAgIGxldCBbbWF0Y2hlc1RvTG9hZCwgcmV2YWxpZGF0aW5nRmV0Y2hlcnNdID0gZ2V0TWF0Y2hlc1RvTG9hZChpbml0Lmhpc3RvcnksIHN0YXRlLCBtYXRjaGVzLCBzdWJtaXNzaW9uLCBuZXh0TG9jYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsIHtcbiAgICAgIFttYXRjaC5yb3V0ZS5pZF06IGFjdGlvblJlc3VsdC5kYXRhXG4gICAgfSwgdW5kZWZpbmVkLCAvLyBObyBuZWVkIHRvIHNlbmQgdGhyb3VnaCBlcnJvcnMgc2luY2Ugd2Ugc2hvcnQgY2lyY3VpdCBhYm92ZVxuICAgIGZldGNoTG9hZE1hdGNoZXMpOyAvLyBQdXQgYWxsIHJldmFsaWRhdGluZyBmZXRjaGVycyBpbnRvIHRoZSBsb2FkaW5nIHN0YXRlLCBleGNlcHQgZm9yIHRoZVxuICAgIC8vIGN1cnJlbnQgZmV0Y2hlciB3aGljaCB3ZSB3YW50IHRvIGtlZXAgaW4gaXQncyBjdXJyZW50IGxvYWRpbmcgc3RhdGUgd2hpY2hcbiAgICAvLyBjb250YWlucyBpdCdzIGFjdGlvbiBzdWJtaXNzaW9uIGluZm8gKyBhY3Rpb24gZGF0YVxuXG4gICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMuZmlsdGVyKHJmID0+IHJmLmtleSAhPT0ga2V5KS5mb3JFYWNoKHJmID0+IHtcbiAgICAgIGxldCBzdGFsZUtleSA9IHJmLmtleTtcbiAgICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoc3RhbGVLZXkpO1xuICAgICAgbGV0IHJldmFsaWRhdGluZ0ZldGNoZXIgPSB7XG4gICAgICAgIHN0YXRlOiBcImxvYWRpbmdcIixcbiAgICAgICAgZGF0YTogZXhpc3RpbmdGZXRjaGVyICYmIGV4aXN0aW5nRmV0Y2hlci5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoc3RhbGVLZXksIHJldmFsaWRhdGluZ0ZldGNoZXIpO1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5zZXQoc3RhbGVLZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgfSk7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gICAgbGV0IHtcbiAgICAgIHJlc3VsdHMsXG4gICAgICBsb2FkZXJSZXN1bHRzLFxuICAgICAgZmV0Y2hlclJlc3VsdHNcbiAgICB9ID0gYXdhaXQgY2FsbExvYWRlcnNBbmRNYXliZVJlc29sdmVEYXRhKHN0YXRlLm1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCByZXZhbGlkYXRpb25SZXF1ZXN0KTtcblxuICAgIGlmIChhYm9ydENvbnRyb2xsZXIuc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShrZXkpO1xuICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLmZvckVhY2gociA9PiBmZXRjaENvbnRyb2xsZXJzLmRlbGV0ZShyLmtleSkpO1xuICAgIGxldCByZWRpcmVjdCA9IGZpbmRSZWRpcmVjdChyZXN1bHRzKTtcblxuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgcmV0dXJuIHN0YXJ0UmVkaXJlY3ROYXZpZ2F0aW9uKHN0YXRlLCByZWRpcmVjdCk7XG4gICAgfSAvLyBQcm9jZXNzIGFuZCBjb21taXQgb3V0cHV0IGZyb20gbG9hZGVyc1xuXG5cbiAgICBsZXQge1xuICAgICAgbG9hZGVyRGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0gPSBwcm9jZXNzTG9hZGVyRGF0YShzdGF0ZSwgc3RhdGUubWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgbG9hZGVyUmVzdWx0cywgdW5kZWZpbmVkLCByZXZhbGlkYXRpbmdGZXRjaGVycywgZmV0Y2hlclJlc3VsdHMsIGFjdGl2ZURlZmVycmVkcyk7XG4gICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgZGF0YTogYWN0aW9uUmVzdWx0LmRhdGEsXG4gICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfTtcbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgbGV0IGRpZEFib3J0RmV0Y2hMb2FkcyA9IGFib3J0U3RhbGVGZXRjaExvYWRzKGxvYWRJZCk7IC8vIElmIHdlIGFyZSBjdXJyZW50bHkgaW4gYSBuYXZpZ2F0aW9uIGxvYWRpbmcgc3RhdGUgYW5kIHRoaXMgZmV0Y2hlciBpc1xuICAgIC8vIG1vcmUgcmVjZW50IHRoYW4gdGhlIG5hdmlnYXRpb24sIHdlIHdhbnQgdGhlIG5ld2VyIGRhdGEgc28gYWJvcnQgdGhlXG4gICAgLy8gbmF2aWdhdGlvbiBhbmQgY29tcGxldGUgaXQgd2l0aCB0aGUgZmV0Y2hlciBkYXRhXG5cbiAgICBpZiAoc3RhdGUubmF2aWdhdGlvbi5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIgJiYgbG9hZElkID4gcGVuZGluZ05hdmlnYXRpb25Mb2FkSWQpIHtcbiAgICAgIGludmFyaWFudChwZW5kaW5nQWN0aW9uLCBcIkV4cGVjdGVkIHBlbmRpbmcgYWN0aW9uXCIpO1xuICAgICAgcGVuZGluZ05hdmlnYXRpb25Db250cm9sbGVyICYmIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgY29tcGxldGVOYXZpZ2F0aW9uKHN0YXRlLm5hdmlnYXRpb24ubG9jYXRpb24sIHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YSxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycylcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBvdGhlcndpc2UganVzdCB1cGRhdGUgd2l0aCB0aGUgZmV0Y2hlciBkYXRhLCBwcmVzZXJ2aW5nIGFueSBleGlzdGluZ1xuICAgICAgLy8gbG9hZGVyRGF0YSBmb3IgbG9hZGVycyB0aGF0IGRpZCBub3QgbmVlZCB0byByZWxvYWQuICBXZSBoYXZlIHRvXG4gICAgICAvLyBtYW51YWxseSBtZXJnZSBoZXJlIHNpbmNlIHdlIGFyZW4ndCBnb2luZyB0aHJvdWdoIGNvbXBsZXRlTmF2aWdhdGlvblxuICAgICAgdXBkYXRlU3RhdGUoX2V4dGVuZHMoe1xuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGxvYWRlckRhdGE6IG1lcmdlTG9hZGVyRGF0YShzdGF0ZS5sb2FkZXJEYXRhLCBsb2FkZXJEYXRhLCBtYXRjaGVzLCBlcnJvcnMpXG4gICAgICB9LCBkaWRBYm9ydEZldGNoTG9hZHMgPyB7XG4gICAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgICAgfSA6IHt9KSk7XG4gICAgICBpc1JldmFsaWRhdGlvblJlcXVpcmVkID0gZmFsc2U7XG4gICAgfVxuICB9IC8vIENhbGwgdGhlIG1hdGNoZWQgbG9hZGVyIGZvciBmZXRjaGVyLmxvYWQoKSwgaGFuZGxpbmcgcmVkaXJlY3RzLCBlcnJvcnMsIGV0Yy5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUZldGNoZXJMb2FkZXIoa2V5LCByb3V0ZUlkLCBwYXRoLCBtYXRjaCwgbWF0Y2hlcywgc3VibWlzc2lvbikge1xuICAgIGxldCBleGlzdGluZ0ZldGNoZXIgPSBzdGF0ZS5mZXRjaGVycy5nZXQoa2V5KTsgLy8gUHV0IHRoaXMgZmV0Y2hlciBpbnRvIGl0J3MgbG9hZGluZyBzdGF0ZVxuXG4gICAgbGV0IGxvYWRpbmdGZXRjaGVyID0gX2V4dGVuZHMoe1xuICAgICAgc3RhdGU6IFwibG9hZGluZ1wiLFxuICAgICAgZm9ybU1ldGhvZDogdW5kZWZpbmVkLFxuICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgIGZvcm1EYXRhOiB1bmRlZmluZWRcbiAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICBkYXRhOiBleGlzdGluZ0ZldGNoZXIgJiYgZXhpc3RpbmdGZXRjaGVyLmRhdGEsXG4gICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgIH0pO1xuXG4gICAgc3RhdGUuZmV0Y2hlcnMuc2V0KGtleSwgbG9hZGluZ0ZldGNoZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGZldGNoZXJzOiBuZXcgTWFwKHN0YXRlLmZldGNoZXJzKVxuICAgIH0pOyAvLyBDYWxsIHRoZSBsb2FkZXIgZm9yIHRoaXMgZmV0Y2hlciByb3V0ZSBtYXRjaFxuXG4gICAgbGV0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBsZXQgZmV0Y2hSZXF1ZXN0ID0gY3JlYXRlQ2xpZW50U2lkZVJlcXVlc3QoaW5pdC5oaXN0b3J5LCBwYXRoLCBhYm9ydENvbnRyb2xsZXIuc2lnbmFsKTtcbiAgICBmZXRjaENvbnRyb2xsZXJzLnNldChrZXksIGFib3J0Q29udHJvbGxlcik7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCBmZXRjaFJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCByb3V0ZXIuYmFzZW5hbWUpOyAvLyBEZWZlcnJlZCBpc24ndCBzdXBwb3J0ZWQgZm9yIGZldGNoZXIgbG9hZHMsIGF3YWl0IGV2ZXJ5dGhpbmcgYW5kIHRyZWF0IGl0XG4gICAgLy8gYXMgYSBub3JtYWwgbG9hZC4gIHJlc29sdmVEZWZlcnJlZERhdGEgd2lsbCByZXR1cm4gdW5kZWZpbmVkIGlmIHRoaXNcbiAgICAvLyBmZXRjaGVyIGdldHMgYWJvcnRlZCwgc28gd2UganVzdCBsZWF2ZSByZXN1bHQgdW50b3VjaGVkIGFuZCBzaG9ydCBjaXJjdWl0XG4gICAgLy8gYmVsb3cgaWYgdGhhdCBoYXBwZW5zXG5cbiAgICBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICByZXN1bHQgPSAoYXdhaXQgcmVzb2x2ZURlZmVycmVkRGF0YShyZXN1bHQsIGZldGNoUmVxdWVzdC5zaWduYWwsIHRydWUpKSB8fCByZXN1bHQ7XG4gICAgfSAvLyBXZSBjYW4gZGVsZXRlIHRoaXMgc28gbG9uZyBhcyB3ZSB3ZXJlbid0IGFib3J0ZWQgYnkgb3Ugb3VyIG93biBmZXRjaGVyXG4gICAgLy8gcmUtbG9hZCB3aGljaCB3b3VsZCBoYXZlIHB1dCBfbmV3XyBjb250cm9sbGVyIGlzIGluIGZldGNoQ29udHJvbGxlcnNcblxuXG4gICAgaWYgKGZldGNoQ29udHJvbGxlcnMuZ2V0KGtleSkgPT09IGFib3J0Q29udHJvbGxlcikge1xuICAgICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgICB9XG5cbiAgICBpZiAoZmV0Y2hSZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBJZiB0aGUgbG9hZGVyIHRocmV3IGEgcmVkaXJlY3QgUmVzcG9uc2UsIHN0YXJ0IGEgbmV3IFJFUExBQ0UgbmF2aWdhdGlvblxuXG5cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICBhd2FpdCBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVzdWx0KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFByb2Nlc3MgYW55IG5vbi1yZWRpcmVjdCBlcnJvcnMgdGhyb3duXG5cblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShzdGF0ZS5tYXRjaGVzLCByb3V0ZUlkKTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLmRlbGV0ZShrZXkpOyAvLyBUT0RPOiBJbiByZW1peCwgdGhpcyB3b3VsZCByZXNldCB0byBJRExFX05BVklHQVRJT04gaWYgaXQgd2FzIGEgY2F0Y2ggLVxuICAgICAgLy8gZG8gd2UgbmVlZCB0byBiZWhhdmUgYW55IGRpZmZlcmVudGx5IHdpdGggb3VyIG5vbi1yZWRpcmVjdCBlcnJvcnM/XG4gICAgICAvLyBXaGF0IGlmIGl0IHdhcyBhIG5vbi1yZWRpcmVjdCBSZXNwb25zZT9cblxuICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICBmZXRjaGVyczogbmV3IE1hcChzdGF0ZS5mZXRjaGVycyksXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtib3VuZGFyeU1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmVycm9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGludmFyaWFudCghaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpLCBcIlVuaGFuZGxlZCBmZXRjaGVyIGRlZmVycmVkIGRhdGFcIik7IC8vIFB1dCB0aGUgZmV0Y2hlciBiYWNrIGludG8gYW4gaWRsZSBzdGF0ZVxuXG4gICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICBmb3JtQWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgIFwiIF9oYXNGZXRjaGVyRG9uZUFueXRoaW5nIFwiOiB0cnVlXG4gICAgfTtcbiAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgdXBkYXRlU3RhdGUoe1xuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFV0aWxpdHkgZnVuY3Rpb24gdG8gaGFuZGxlIHJlZGlyZWN0cyByZXR1cm5lZCBmcm9tIGFuIGFjdGlvbiBvciBsb2FkZXIuXG4gICAqIE5vcm1hbGx5LCBhIHJlZGlyZWN0IFwicmVwbGFjZXNcIiB0aGUgbmF2aWdhdGlvbiB0aGF0IHRyaWdnZXJlZCBpdC4gIFNvLCBmb3JcbiAgICogZXhhbXBsZTpcbiAgICpcbiAgICogIC0gdXNlciBpcyBvbiAvYVxuICAgKiAgLSB1c2VyIGNsaWNrcyBhIGxpbmsgdG8gL2JcbiAgICogIC0gbG9hZGVyIGZvciAvYiByZWRpcmVjdHMgdG8gL2NcbiAgICpcbiAgICogSW4gYSBub24tSlMgYXBwIHRoZSBicm93c2VyIHdvdWxkIHRyYWNrIHRoZSBpbi1mbGlnaHQgbmF2aWdhdGlvbiB0byAvYiBhbmRcbiAgICogdGhlbiByZXBsYWNlIGl0IHdpdGggL2Mgd2hlbiBpdCBlbmNvdW50ZXJlZCB0aGUgcmVkaXJlY3QgcmVzcG9uc2UuICBJblxuICAgKiB0aGUgZW5kIGl0IHdvdWxkIG9ubHkgZXZlciB1cGRhdGUgdGhlIFVSTCBiYXIgd2l0aCAvYy5cbiAgICpcbiAgICogSW4gY2xpZW50LXNpZGUgcm91dGluZyB1c2luZyBwdXNoU3RhdGUvcmVwbGFjZVN0YXRlLCB3ZSBhaW0gdG8gZW11bGF0ZVxuICAgKiB0aGlzIGJlaGF2aW9yIGFuZCB3ZSBhbHNvIGRvIG5vdCB1cGRhdGUgaGlzdG9yeSB1bnRpbCB0aGUgZW5kIG9mIHRoZVxuICAgKiBuYXZpZ2F0aW9uIChpbmNsdWRpbmcgcHJvY2Vzc2VkIHJlZGlyZWN0cykuICBUaGlzIG1lYW5zIHRoYXQgd2UgbmV2ZXJcbiAgICogYWN0dWFsbHkgdG91Y2ggaGlzdG9yeSB1bnRpbCB3ZSd2ZSBwcm9jZXNzZWQgcmVkaXJlY3RzLCBzbyB3ZSBqdXN0IHVzZVxuICAgKiB0aGUgaGlzdG9yeSBhY3Rpb24gZnJvbSB0aGUgb3JpZ2luYWwgbmF2aWdhdGlvbiAoUFVTSCBvciBSRVBMQUNFKS5cbiAgICovXG5cblxuICBhc3luYyBmdW5jdGlvbiBzdGFydFJlZGlyZWN0TmF2aWdhdGlvbihzdGF0ZSwgcmVkaXJlY3QsIF90ZW1wKSB7XG4gICAgdmFyIF93aW5kb3c7XG5cbiAgICBsZXQge1xuICAgICAgc3VibWlzc2lvbixcbiAgICAgIHJlcGxhY2UsXG4gICAgICBpc0ZldGNoQWN0aW9uUmVkaXJlY3RcbiAgICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG5cbiAgICBpZiAocmVkaXJlY3QucmV2YWxpZGF0ZSkge1xuICAgICAgaXNSZXZhbGlkYXRpb25SZXF1aXJlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHJlZGlyZWN0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihzdGF0ZS5sb2NhdGlvbiwgcmVkaXJlY3QubG9jYXRpb24sIC8vIFRPRE86IFRoaXMgY2FuIGJlIHJlbW92ZWQgb25jZSB3ZSBnZXQgcmlkIG9mIHVzZVRyYW5zaXRpb24gaW4gUmVtaXggdjJcbiAgICBfZXh0ZW5kcyh7XG4gICAgICBfaXNSZWRpcmVjdDogdHJ1ZVxuICAgIH0sIGlzRmV0Y2hBY3Rpb25SZWRpcmVjdCA/IHtcbiAgICAgIF9pc0ZldGNoQWN0aW9uUmVkaXJlY3Q6IHRydWVcbiAgICB9IDoge30pKTtcbiAgICBpbnZhcmlhbnQocmVkaXJlY3RMb2NhdGlvbiwgXCJFeHBlY3RlZCBhIGxvY2F0aW9uIG9uIHRoZSByZWRpcmVjdCBuYXZpZ2F0aW9uXCIpOyAvLyBDaGVjayBpZiB0aGlzIGFuIGFic29sdXRlIGV4dGVybmFsIHJlZGlyZWN0IHRoYXQgZ29lcyB0byBhIG5ldyBvcmlnaW5cblxuICAgIGlmIChBQlNPTFVURV9VUkxfUkVHRVgudGVzdChyZWRpcmVjdC5sb2NhdGlvbikgJiYgaXNCcm93c2VyICYmIHR5cGVvZiAoKF93aW5kb3cgPSB3aW5kb3cpID09IG51bGwgPyB2b2lkIDAgOiBfd2luZG93LmxvY2F0aW9uKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbGV0IG5ld09yaWdpbiA9IGluaXQuaGlzdG9yeS5jcmVhdGVVUkwocmVkaXJlY3QubG9jYXRpb24pLm9yaWdpbjtcblxuICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gIT09IG5ld09yaWdpbikge1xuICAgICAgICBpZiAocmVwbGFjZSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlZGlyZWN0LmxvY2F0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKHJlZGlyZWN0LmxvY2F0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IC8vIFRoZXJlJ3Mgbm8gbmVlZCB0byBhYm9ydCBvbiByZWRpcmVjdHMsIHNpbmNlIHdlIGRvbid0IGRldGVjdCB0aGVcbiAgICAvLyByZWRpcmVjdCB1bnRpbCB0aGUgYWN0aW9uL2xvYWRlcnMgaGF2ZSBzZXR0bGVkXG5cblxuICAgIHBlbmRpbmdOYXZpZ2F0aW9uQ29udHJvbGxlciA9IG51bGw7XG4gICAgbGV0IHJlZGlyZWN0SGlzdG9yeUFjdGlvbiA9IHJlcGxhY2UgPT09IHRydWUgPyBBY3Rpb24uUmVwbGFjZSA6IEFjdGlvbi5QdXNoOyAvLyBVc2UgdGhlIGluY29taW5nIHN1Ym1pc3Npb24gaWYgcHJvdmlkZWQsIGZhbGxiYWNrIG9uIHRoZSBhY3RpdmUgb25lIGluXG4gICAgLy8gc3RhdGUubmF2aWdhdGlvblxuXG4gICAgbGV0IHtcbiAgICAgIGZvcm1NZXRob2QsXG4gICAgICBmb3JtQWN0aW9uLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YVxuICAgIH0gPSBzdGF0ZS5uYXZpZ2F0aW9uO1xuXG4gICAgaWYgKCFzdWJtaXNzaW9uICYmIGZvcm1NZXRob2QgJiYgZm9ybUFjdGlvbiAmJiBmb3JtRGF0YSAmJiBmb3JtRW5jVHlwZSkge1xuICAgICAgc3VibWlzc2lvbiA9IHtcbiAgICAgICAgZm9ybU1ldGhvZCxcbiAgICAgICAgZm9ybUFjdGlvbixcbiAgICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICAgIGZvcm1EYXRhXG4gICAgICB9O1xuICAgIH0gLy8gSWYgdGhpcyB3YXMgYSAzMDcvMzA4IHN1Ym1pc3Npb24gd2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGUgSFRUUCBtZXRob2QgYW5kXG4gICAgLy8gcmUtc3VibWl0IHRoZSBHRVQvUE9TVC9QVVQvUEFUQ0gvREVMRVRFIGFzIGEgc3VibWlzc2lvbiBuYXZpZ2F0aW9uIHRvIHRoZVxuICAgIC8vIHJlZGlyZWN0ZWQgbG9jYXRpb25cblxuXG4gICAgaWYgKHJlZGlyZWN0UHJlc2VydmVNZXRob2RTdGF0dXNDb2Rlcy5oYXMocmVkaXJlY3Quc3RhdHVzKSAmJiBzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBzdWJtaXNzaW9uOiBfZXh0ZW5kcyh7fSwgc3VibWlzc2lvbiwge1xuICAgICAgICAgIGZvcm1BY3Rpb246IHJlZGlyZWN0LmxvY2F0aW9uXG4gICAgICAgIH0pLFxuICAgICAgICAvLyBQcmVzZXJ2ZSB0aGlzIGZsYWcgYWNyb3NzIHJlZGlyZWN0c1xuICAgICAgICBwcmV2ZW50U2Nyb2xsUmVzZXQ6IHBlbmRpbmdQcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHdlIGtpY2sgb2ZmIGEgbmV3IGxvYWRpbmcgbmF2aWdhdGlvbiwgcHJlc2VydmluZyB0aGVcbiAgICAgIC8vIHN1Ym1pc3Npb24gaW5mbyBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoaXMgbmF2aWdhdGlvblxuICAgICAgYXdhaXQgc3RhcnROYXZpZ2F0aW9uKHJlZGlyZWN0SGlzdG9yeUFjdGlvbiwgcmVkaXJlY3RMb2NhdGlvbiwge1xuICAgICAgICBvdmVycmlkZU5hdmlnYXRpb246IHtcbiAgICAgICAgICBzdGF0ZTogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgbG9jYXRpb246IHJlZGlyZWN0TG9jYXRpb24sXG4gICAgICAgICAgZm9ybU1ldGhvZDogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybU1ldGhvZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtQWN0aW9uOiBzdWJtaXNzaW9uID8gc3VibWlzc2lvbi5mb3JtQWN0aW9uIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGZvcm1FbmNUeXBlOiBzdWJtaXNzaW9uID8gc3VibWlzc2lvbi5mb3JtRW5jVHlwZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBmb3JtRGF0YTogc3VibWlzc2lvbiA/IHN1Ym1pc3Npb24uZm9ybURhdGEgOiB1bmRlZmluZWRcbiAgICAgICAgfSxcbiAgICAgICAgLy8gUHJlc2VydmUgdGhpcyBmbGFnIGFjcm9zcyByZWRpcmVjdHNcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBwZW5kaW5nUHJldmVudFNjcm9sbFJlc2V0XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBjYWxsTG9hZGVyc0FuZE1heWJlUmVzb2x2ZURhdGEoY3VycmVudE1hdGNoZXMsIG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIGZldGNoZXJzVG9Mb2FkLCByZXF1ZXN0KSB7XG4gICAgLy8gQ2FsbCBhbGwgbmF2aWdhdGlvbiBsb2FkZXJzIGFuZCByZXZhbGlkYXRpbmcgZmV0Y2hlciBsb2FkZXJzIGluIHBhcmFsbGVsLFxuICAgIC8vIHRoZW4gc2xpY2Ugb2ZmIHRoZSByZXN1bHRzIGludG8gc2VwYXJhdGUgYXJyYXlzIHNvIHdlIGNhbiBoYW5kbGUgdGhlbVxuICAgIC8vIGFjY29yZGluZ2x5XG4gICAgbGV0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChbLi4ubWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIHJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCByb3V0ZXIuYmFzZW5hbWUpKSwgLi4uZmV0Y2hlcnNUb0xvYWQubWFwKGYgPT4gY2FsbExvYWRlck9yQWN0aW9uKFwibG9hZGVyXCIsIGNyZWF0ZUNsaWVudFNpZGVSZXF1ZXN0KGluaXQuaGlzdG9yeSwgZi5wYXRoLCByZXF1ZXN0LnNpZ25hbCksIGYubWF0Y2gsIGYubWF0Y2hlcywgcm91dGVyLmJhc2VuYW1lKSldKTtcbiAgICBsZXQgbG9hZGVyUmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF0Y2hlc1RvTG9hZC5sZW5ndGgpO1xuICAgIGxldCBmZXRjaGVyUmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UobWF0Y2hlc1RvTG9hZC5sZW5ndGgpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKFtyZXNvbHZlRGVmZXJyZWRSZXN1bHRzKGN1cnJlbnRNYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCBsb2FkZXJSZXN1bHRzLCByZXF1ZXN0LnNpZ25hbCwgZmFsc2UsIHN0YXRlLmxvYWRlckRhdGEpLCByZXNvbHZlRGVmZXJyZWRSZXN1bHRzKGN1cnJlbnRNYXRjaGVzLCBmZXRjaGVyc1RvTG9hZC5tYXAoZiA9PiBmLm1hdGNoKSwgZmV0Y2hlclJlc3VsdHMsIHJlcXVlc3Quc2lnbmFsLCB0cnVlKV0pO1xuICAgIHJldHVybiB7XG4gICAgICByZXN1bHRzLFxuICAgICAgbG9hZGVyUmVzdWx0cyxcbiAgICAgIGZldGNoZXJSZXN1bHRzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGludGVycnVwdEFjdGl2ZUxvYWRzKCkge1xuICAgIC8vIEV2ZXJ5IGludGVycnVwdGlvbiB0cmlnZ2VycyBhIHJldmFsaWRhdGlvblxuICAgIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgPSB0cnVlOyAvLyBDYW5jZWwgcGVuZGluZyByb3V0ZS1sZXZlbCBkZWZlcnJlZHMgYW5kIG1hcmsgY2FuY2VsbGVkIHJvdXRlcyBmb3JcbiAgICAvLyByZXZhbGlkYXRpb25cblxuICAgIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLnB1c2goLi4uY2FuY2VsQWN0aXZlRGVmZXJyZWRzKCkpOyAvLyBBYm9ydCBpbi1mbGlnaHQgZmV0Y2hlciBsb2Fkc1xuXG4gICAgZmV0Y2hMb2FkTWF0Y2hlcy5mb3JFYWNoKChfLCBrZXkpID0+IHtcbiAgICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpKSB7XG4gICAgICAgIGNhbmNlbGxlZEZldGNoZXJMb2Fkcy5wdXNoKGtleSk7XG4gICAgICAgIGFib3J0RmV0Y2hlcihrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0RmV0Y2hlckVycm9yKGtleSwgcm91dGVJZCwgZXJyb3IpIHtcbiAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkoc3RhdGUubWF0Y2hlcywgcm91dGVJZCk7XG4gICAgZGVsZXRlRmV0Y2hlcihrZXkpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGVycm9yczoge1xuICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IGVycm9yXG4gICAgICB9LFxuICAgICAgZmV0Y2hlcnM6IG5ldyBNYXAoc3RhdGUuZmV0Y2hlcnMpXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVGZXRjaGVyKGtleSkge1xuICAgIGlmIChmZXRjaENvbnRyb2xsZXJzLmhhcyhrZXkpKSBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICBmZXRjaExvYWRNYXRjaGVzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoUmVsb2FkSWRzLmRlbGV0ZShrZXkpO1xuICAgIGZldGNoUmVkaXJlY3RJZHMuZGVsZXRlKGtleSk7XG4gICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBhYm9ydEZldGNoZXIoa2V5KSB7XG4gICAgbGV0IGNvbnRyb2xsZXIgPSBmZXRjaENvbnRyb2xsZXJzLmdldChrZXkpO1xuICAgIGludmFyaWFudChjb250cm9sbGVyLCBcIkV4cGVjdGVkIGZldGNoIGNvbnRyb2xsZXI6IFwiICsga2V5KTtcbiAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgZmV0Y2hDb250cm9sbGVycy5kZWxldGUoa2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcmtGZXRjaGVyc0RvbmUoa2V5cykge1xuICAgIGZvciAobGV0IGtleSBvZiBrZXlzKSB7XG4gICAgICBsZXQgZmV0Y2hlciA9IGdldEZldGNoZXIoa2V5KTtcbiAgICAgIGxldCBkb25lRmV0Y2hlciA9IHtcbiAgICAgICAgc3RhdGU6IFwiaWRsZVwiLFxuICAgICAgICBkYXRhOiBmZXRjaGVyLmRhdGEsXG4gICAgICAgIGZvcm1NZXRob2Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUFjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRW5jVHlwZTogdW5kZWZpbmVkLFxuICAgICAgICBmb3JtRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBcIiBfaGFzRmV0Y2hlckRvbmVBbnl0aGluZyBcIjogdHJ1ZVxuICAgICAgfTtcbiAgICAgIHN0YXRlLmZldGNoZXJzLnNldChrZXksIGRvbmVGZXRjaGVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtYXJrRmV0Y2hSZWRpcmVjdHNEb25lKCkge1xuICAgIGxldCBkb25lS2V5cyA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IG9mIGZldGNoUmVkaXJlY3RJZHMpIHtcbiAgICAgIGxldCBmZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG4gICAgICBpbnZhcmlhbnQoZmV0Y2hlciwgXCJFeHBlY3RlZCBmZXRjaGVyOiBcIiArIGtleSk7XG5cbiAgICAgIGlmIChmZXRjaGVyLnN0YXRlID09PSBcImxvYWRpbmdcIikge1xuICAgICAgICBmZXRjaFJlZGlyZWN0SWRzLmRlbGV0ZShrZXkpO1xuICAgICAgICBkb25lS2V5cy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWFya0ZldGNoZXJzRG9uZShkb25lS2V5cyk7XG4gIH1cblxuICBmdW5jdGlvbiBhYm9ydFN0YWxlRmV0Y2hMb2FkcyhsYW5kZWRJZCkge1xuICAgIGxldCB5ZWV0ZWRLZXlzID0gW107XG5cbiAgICBmb3IgKGxldCBba2V5LCBpZF0gb2YgZmV0Y2hSZWxvYWRJZHMpIHtcbiAgICAgIGlmIChpZCA8IGxhbmRlZElkKSB7XG4gICAgICAgIGxldCBmZXRjaGVyID0gc3RhdGUuZmV0Y2hlcnMuZ2V0KGtleSk7XG4gICAgICAgIGludmFyaWFudChmZXRjaGVyLCBcIkV4cGVjdGVkIGZldGNoZXI6IFwiICsga2V5KTtcblxuICAgICAgICBpZiAoZmV0Y2hlci5zdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICAgICAgICBhYm9ydEZldGNoZXIoa2V5KTtcbiAgICAgICAgICBmZXRjaFJlbG9hZElkcy5kZWxldGUoa2V5KTtcbiAgICAgICAgICB5ZWV0ZWRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG1hcmtGZXRjaGVyc0RvbmUoeWVldGVkS2V5cyk7XG4gICAgcmV0dXJuIHllZXRlZEtleXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJsb2NrZXIoa2V5LCBmbikge1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGtleSkgfHwgSURMRV9CTE9DS0VSO1xuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbnMuZ2V0KGtleSkgIT09IGZuKSB7XG4gICAgICBibG9ja2VyRnVuY3Rpb25zLnNldChrZXksIGZuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZUJsb2NrZXIoa2V5KSB7XG4gICAgc3RhdGUuYmxvY2tlcnMuZGVsZXRlKGtleSk7XG4gICAgYmxvY2tlckZ1bmN0aW9ucy5kZWxldGUoa2V5KTtcbiAgfSAvLyBVdGlsaXR5IGZ1bmN0aW9uIHRvIHVwZGF0ZSBibG9ja2VycywgZW5zdXJpbmcgdmFsaWQgc3RhdGUgdHJhbnNpdGlvbnNcblxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXIoa2V5LCBuZXdCbG9ja2VyKSB7XG4gICAgbGV0IGJsb2NrZXIgPSBzdGF0ZS5ibG9ja2Vycy5nZXQoa2V5KSB8fCBJRExFX0JMT0NLRVI7IC8vIFBvb3IgbWFucyBzdGF0ZSBtYWNoaW5lIDopXG4gICAgLy8gaHR0cHM6Ly9tZXJtYWlkLmxpdmUvZWRpdCNwYWtvOmVOcVZrYzlPd3pBTXhsOGw4bm5qQVlyRXRESU9IRUJJZ3d2S0pUUmVHeTNfbERwSXFPMjdrNmF3TUcwWGNyTGxuejg3bndkb25FU29nS1hYQnVFNzlycTc1WFpPMy15SGRzMFJKVnV2NzBZclBsVXJDRWUySGZyT1JTM3J1YnFaZnVodHBnNUM5d2s1dFo0VktjUlVxODhxOVo4UlMwLTQ4Y0UxaUhKa0wwdWdiSHVGTHVzOUw2c3BaeThuWDlNUDJDTmRvbVZhcG9zcXUzZkdheVQ4VDgtakpRd2hlcG9fVXRwZ0JRYURFVW9tMDRkWmhBTjFhSkJEbFVLSkJ4RTFjZUIyU21qME1sbi1JQlc1QUZVMmR3VWlrdHRfMlFhcTJkQmZhS2RFdXA4NVVWN1lkLWRLamxua2FibDJQdnIwRFRrVHJlTVxuXG4gICAgaW52YXJpYW50KGJsb2NrZXIuc3RhdGUgPT09IFwidW5ibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIgfHwgYmxvY2tlci5zdGF0ZSA9PT0gXCJibG9ja2VkXCIgJiYgbmV3QmxvY2tlci5zdGF0ZSA9PT0gXCJ1bmJsb2NrZWRcIiB8fCBibG9ja2VyLnN0YXRlID09PSBcInByb2NlZWRpbmdcIiAmJiBuZXdCbG9ja2VyLnN0YXRlID09PSBcInVuYmxvY2tlZFwiLCBcIkludmFsaWQgYmxvY2tlciBzdGF0ZSB0cmFuc2l0aW9uOiBcIiArIGJsb2NrZXIuc3RhdGUgKyBcIiAtPiBcIiArIG5ld0Jsb2NrZXIuc3RhdGUpO1xuICAgIHN0YXRlLmJsb2NrZXJzLnNldChrZXksIG5ld0Jsb2NrZXIpO1xuICAgIHVwZGF0ZVN0YXRlKHtcbiAgICAgIGJsb2NrZXJzOiBuZXcgTWFwKHN0YXRlLmJsb2NrZXJzKVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmxvY2tOYXZpZ2F0aW9uKF9yZWYyKSB7XG4gICAgbGV0IHtcbiAgICAgIGN1cnJlbnRMb2NhdGlvbixcbiAgICAgIG5leHRMb2NhdGlvbixcbiAgICAgIGhpc3RvcnlBY3Rpb25cbiAgICB9ID0gX3JlZjI7XG5cbiAgICBpZiAoYmxvY2tlckZ1bmN0aW9ucy5zaXplID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBXZSBvbnkgc3VwcG9ydCBhIHNpbmdsZSBhY3RpdmUgYmxvY2tlciBhdCB0aGUgbW9tZW50IHNpbmNlIHdlIGRvbid0IGhhdmVcbiAgICAvLyBhbnkgY29tcGVsbGluZyB1c2UgY2FzZXMgZm9yIG11bHRpLWJsb2NrZXIgeWV0XG5cblxuICAgIGlmIChibG9ja2VyRnVuY3Rpb25zLnNpemUgPiAxKSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIkEgcm91dGVyIG9ubHkgc3VwcG9ydHMgb25lIGJsb2NrZXIgYXQgYSB0aW1lXCIpO1xuICAgIH1cblxuICAgIGxldCBlbnRyaWVzID0gQXJyYXkuZnJvbShibG9ja2VyRnVuY3Rpb25zLmVudHJpZXMoKSk7XG4gICAgbGV0IFtibG9ja2VyS2V5LCBibG9ja2VyRnVuY3Rpb25dID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgIGxldCBibG9ja2VyID0gc3RhdGUuYmxvY2tlcnMuZ2V0KGJsb2NrZXJLZXkpO1xuXG4gICAgaWYgKGJsb2NrZXIgJiYgYmxvY2tlci5zdGF0ZSA9PT0gXCJwcm9jZWVkaW5nXCIpIHtcbiAgICAgIC8vIElmIHRoZSBibG9ja2VyIGlzIGN1cnJlbnRseSBwcm9jZWVkaW5nLCB3ZSBkb24ndCBuZWVkIHRvIHJlLWNoZWNrXG4gICAgICAvLyBpdCBhbmQgY2FuIGxldCB0aGlzIG5hdmlnYXRpb24gY29udGludWVcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEF0IHRoaXMgcG9pbnQsIHdlIGtub3cgd2UncmUgdW5ibG9ja2VkL2Jsb2NrZWQgc28gd2UgbmVlZCB0byBjaGVjayB0aGVcbiAgICAvLyB1c2VyLXByb3ZpZGVkIGJsb2NrZXIgZnVuY3Rpb25cblxuXG4gICAgaWYgKGJsb2NrZXJGdW5jdGlvbih7XG4gICAgICBjdXJyZW50TG9jYXRpb24sXG4gICAgICBuZXh0TG9jYXRpb24sXG4gICAgICBoaXN0b3J5QWN0aW9uXG4gICAgfSkpIHtcbiAgICAgIHJldHVybiBibG9ja2VyS2V5O1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbEFjdGl2ZURlZmVycmVkcyhwcmVkaWNhdGUpIHtcbiAgICBsZXQgY2FuY2VsbGVkUm91dGVJZHMgPSBbXTtcbiAgICBhY3RpdmVEZWZlcnJlZHMuZm9yRWFjaCgoZGZkLCByb3V0ZUlkKSA9PiB7XG4gICAgICBpZiAoIXByZWRpY2F0ZSB8fCBwcmVkaWNhdGUocm91dGVJZCkpIHtcbiAgICAgICAgLy8gQ2FuY2VsIHRoZSBkZWZlcnJlZCAtIGJ1dCBkbyBub3QgcmVtb3ZlIGZyb20gYWN0aXZlRGVmZXJyZWRzIGhlcmUgLVxuICAgICAgICAvLyB3ZSByZWx5IG9uIHRoZSBzdWJzY3JpYmVycyB0byBkbyB0aGF0IHNvIG91ciB0ZXN0cyBjYW4gYXNzZXJ0IHByb3BlclxuICAgICAgICAvLyBjbGVhbnVwIHZpYSBfaW50ZXJuYWxBY3RpdmVEZWZlcnJlZHNcbiAgICAgICAgZGZkLmNhbmNlbCgpO1xuICAgICAgICBjYW5jZWxsZWRSb3V0ZUlkcy5wdXNoKHJvdXRlSWQpO1xuICAgICAgICBhY3RpdmVEZWZlcnJlZHMuZGVsZXRlKHJvdXRlSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjYW5jZWxsZWRSb3V0ZUlkcztcbiAgfSAvLyBPcHQgaW4gdG8gY2FwdHVyaW5nIGFuZCByZXBvcnRpbmcgc2Nyb2xsIHBvc2l0aW9ucyBkdXJpbmcgbmF2aWdhdGlvbnMsXG4gIC8vIHVzZWQgYnkgdGhlIDxTY3JvbGxSZXN0b3JhdGlvbj4gY29tcG9uZW50XG5cblxuICBmdW5jdGlvbiBlbmFibGVTY3JvbGxSZXN0b3JhdGlvbihwb3NpdGlvbnMsIGdldFBvc2l0aW9uLCBnZXRLZXkpIHtcbiAgICBzYXZlZFNjcm9sbFBvc2l0aW9ucyA9IHBvc2l0aW9ucztcbiAgICBnZXRTY3JvbGxQb3NpdGlvbiA9IGdldFBvc2l0aW9uO1xuXG4gICAgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBnZXRLZXkgfHwgKGxvY2F0aW9uID0+IGxvY2F0aW9uLmtleSk7IC8vIFBlcmZvcm0gaW5pdGlhbCBoeWRyYXRpb24gc2Nyb2xsIHJlc3RvcmF0aW9uLCBzaW5jZSB3ZSBtaXNzIHRoZSBib2F0IG9uXG4gICAgLy8gdGhlIGluaXRpYWwgdXBkYXRlU3RhdGUoKSBiZWNhdXNlIHdlJ3ZlIG5vdCB5ZXQgcmVuZGVyZWQgPFNjcm9sbFJlc3RvcmF0aW9uLz5cbiAgICAvLyBhbmQgdGhlcmVmb3JlIGhhdmUgbm8gc2F2ZWRTY3JvbGxQb3NpdGlvbnMgYXZhaWxhYmxlXG5cblxuICAgIGlmICghaW5pdGlhbFNjcm9sbFJlc3RvcmVkICYmIHN0YXRlLm5hdmlnYXRpb24gPT09IElETEVfTkFWSUdBVElPTikge1xuICAgICAgaW5pdGlhbFNjcm9sbFJlc3RvcmVkID0gdHJ1ZTtcbiAgICAgIGxldCB5ID0gZ2V0U2F2ZWRTY3JvbGxQb3NpdGlvbihzdGF0ZS5sb2NhdGlvbiwgc3RhdGUubWF0Y2hlcyk7XG5cbiAgICAgIGlmICh5ICE9IG51bGwpIHtcbiAgICAgICAgdXBkYXRlU3RhdGUoe1xuICAgICAgICAgIHJlc3RvcmVTY3JvbGxQb3NpdGlvbjogeVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2F2ZWRTY3JvbGxQb3NpdGlvbnMgPSBudWxsO1xuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb24gPSBudWxsO1xuICAgICAgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgPSBudWxsO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlU2Nyb2xsUG9zaXRpb24obG9jYXRpb24sIG1hdGNoZXMpIHtcbiAgICBpZiAoc2F2ZWRTY3JvbGxQb3NpdGlvbnMgJiYgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgJiYgZ2V0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIGxldCB1c2VyTWF0Y2hlcyA9IG1hdGNoZXMubWFwKG0gPT4gY3JlYXRlVXNlTWF0Y2hlc01hdGNoKG0sIHN0YXRlLmxvYWRlckRhdGEpKTtcbiAgICAgIGxldCBrZXkgPSBnZXRTY3JvbGxSZXN0b3JhdGlvbktleShsb2NhdGlvbiwgdXNlck1hdGNoZXMpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIHNhdmVkU2Nyb2xsUG9zaXRpb25zW2tleV0gPSBnZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNhdmVkU2Nyb2xsUG9zaXRpb24obG9jYXRpb24sIG1hdGNoZXMpIHtcbiAgICBpZiAoc2F2ZWRTY3JvbGxQb3NpdGlvbnMgJiYgZ2V0U2Nyb2xsUmVzdG9yYXRpb25LZXkgJiYgZ2V0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIGxldCB1c2VyTWF0Y2hlcyA9IG1hdGNoZXMubWFwKG0gPT4gY3JlYXRlVXNlTWF0Y2hlc01hdGNoKG0sIHN0YXRlLmxvYWRlckRhdGEpKTtcbiAgICAgIGxldCBrZXkgPSBnZXRTY3JvbGxSZXN0b3JhdGlvbktleShsb2NhdGlvbiwgdXNlck1hdGNoZXMpIHx8IGxvY2F0aW9uLmtleTtcbiAgICAgIGxldCB5ID0gc2F2ZWRTY3JvbGxQb3NpdGlvbnNba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiB5ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiB5O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcm91dGVyID0ge1xuICAgIGdldCBiYXNlbmFtZSgpIHtcbiAgICAgIHJldHVybiBpbml0LmJhc2VuYW1lO1xuICAgIH0sXG5cbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcblxuICAgIGdldCByb3V0ZXMoKSB7XG4gICAgICByZXR1cm4gZGF0YVJvdXRlcztcbiAgICB9LFxuXG4gICAgaW5pdGlhbGl6ZSxcbiAgICBzdWJzY3JpYmUsXG4gICAgZW5hYmxlU2Nyb2xsUmVzdG9yYXRpb24sXG4gICAgbmF2aWdhdGUsXG4gICAgZmV0Y2gsXG4gICAgcmV2YWxpZGF0ZSxcbiAgICAvLyBQYXNzdGhyb3VnaCB0byBoaXN0b3J5LWF3YXJlIGNyZWF0ZUhyZWYgdXNlZCBieSB1c2VIcmVmIHNvIHdlIGdldCBwcm9wZXJcbiAgICAvLyBoYXNoLWF3YXJlIFVSTHMgaW4gRE9NIHBhdGhzXG4gICAgY3JlYXRlSHJlZjogdG8gPT4gaW5pdC5oaXN0b3J5LmNyZWF0ZUhyZWYodG8pLFxuICAgIGVuY29kZUxvY2F0aW9uOiB0byA9PiBpbml0Lmhpc3RvcnkuZW5jb2RlTG9jYXRpb24odG8pLFxuICAgIGdldEZldGNoZXIsXG4gICAgZGVsZXRlRmV0Y2hlcixcbiAgICBkaXNwb3NlLFxuICAgIGdldEJsb2NrZXIsXG4gICAgZGVsZXRlQmxvY2tlcixcbiAgICBfaW50ZXJuYWxGZXRjaENvbnRyb2xsZXJzOiBmZXRjaENvbnRyb2xsZXJzLFxuICAgIF9pbnRlcm5hbEFjdGl2ZURlZmVycmVkczogYWN0aXZlRGVmZXJyZWRzXG4gIH07XG4gIHJldHVybiByb3V0ZXI7XG59IC8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBjcmVhdGVTdGF0aWNIYW5kbGVyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5jb25zdCBVTlNBRkVfREVGRVJSRURfU1lNQk9MID0gU3ltYm9sKFwiZGVmZXJyZWRcIik7XG5mdW5jdGlvbiBjcmVhdGVTdGF0aWNIYW5kbGVyKHJvdXRlcywgb3B0cykge1xuICBpbnZhcmlhbnQocm91dGVzLmxlbmd0aCA+IDAsIFwiWW91IG11c3QgcHJvdmlkZSBhIG5vbi1lbXB0eSByb3V0ZXMgYXJyYXkgdG8gY3JlYXRlU3RhdGljSGFuZGxlclwiKTtcbiAgbGV0IGRhdGFSb3V0ZXMgPSBjb252ZXJ0Um91dGVzVG9EYXRhUm91dGVzKHJvdXRlcyk7XG4gIGxldCBiYXNlbmFtZSA9IChvcHRzID8gb3B0cy5iYXNlbmFtZSA6IG51bGwpIHx8IFwiL1wiO1xuICAvKipcbiAgICogVGhlIHF1ZXJ5KCkgbWV0aG9kIGlzIGludGVuZGVkIGZvciBkb2N1bWVudCByZXF1ZXN0cywgaW4gd2hpY2ggd2Ugd2FudCB0b1xuICAgKiBjYWxsIGFuIG9wdGlvbmFsIGFjdGlvbiBhbmQgcG90ZW50aWFsbHkgbXVsdGlwbGUgbG9hZGVycyBmb3IgYWxsIG5lc3RlZFxuICAgKiByb3V0ZXMuICBJdCByZXR1cm5zIGEgU3RhdGljSGFuZGxlckNvbnRleHQgb2JqZWN0LCB3aGljaCBpcyB2ZXJ5IHNpbWlsYXJcbiAgICogdG8gdGhlIHJvdXRlciBzdGF0ZSAobG9jYXRpb24sIGxvYWRlckRhdGEsIGFjdGlvbkRhdGEsIGVycm9ycywgZXRjLikgYW5kXG4gICAqIGFsc28gYWRkcyBTU1Itc3BlY2lmaWMgaW5mb3JtYXRpb24gc3VjaCBhcyB0aGUgc3RhdHVzQ29kZSBhbmQgaGVhZGVyc1xuICAgKiBmcm9tIGFjdGlvbi9sb2FkZXJzIFJlc3BvbnNlcy5cbiAgICpcbiAgICogSXQgX3Nob3VsZF8gbmV2ZXIgdGhyb3cgYW5kIHNob3VsZCByZXBvcnQgYWxsIGVycm9ycyB0aHJvdWdoIHRoZVxuICAgKiByZXR1cm5lZCBjb250ZXh0LmVycm9ycyBvYmplY3QsIHByb3Blcmx5IGFzc29jaWF0aW5nIGVycm9ycyB0byB0aGVpciBlcnJvclxuICAgKiBib3VuZGFyeS4gIEFkZGl0aW9uYWxseSwgaXQgdHJhY2tzIF9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkIHdoaWNoIGNhbiBiZVxuICAgKiB1c2VkIHRvIGVtdWxhdGUgUmVhY3QgZXJyb3IgYm91bmRhcmllcyBkdXJpbmcgU1NyIGJ5IHBlcmZvcm1pbmcgYSBzZWNvbmRcbiAgICogcGFzcyBvbmx5IGRvd24gdG8gdGhlIGJvdW5kYXJ5SWQuXG4gICAqXG4gICAqIFRoZSBvbmUgZXhjZXB0aW9uIHdoZXJlIHdlIGRvIG5vdCByZXR1cm4gYSBTdGF0aWNIYW5kbGVyQ29udGV4dCBpcyB3aGVuIGFcbiAgICogcmVkaXJlY3QgcmVzcG9uc2UgaXMgcmV0dXJuZWQgb3IgdGhyb3duIGZyb20gYW55IGFjdGlvbi9sb2FkZXIuICBXZVxuICAgKiBwcm9wYWdhdGUgdGhhdCBvdXQgYW5kIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIHNvIHRoZSBIVFRQIHNlcnZlciBjYW5cbiAgICogcmV0dXJuIGl0IGRpcmVjdGx5LlxuICAgKi9cblxuICBhc3luYyBmdW5jdGlvbiBxdWVyeShyZXF1ZXN0LCBfdGVtcDIpIHtcbiAgICBsZXQge1xuICAgICAgcmVxdWVzdENvbnRleHRcbiAgICB9ID0gX3RlbXAyID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wMjtcbiAgICBsZXQgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgbGV0IG1ldGhvZCA9IHJlcXVlc3QubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oXCJcIiwgY3JlYXRlUGF0aCh1cmwpLCBudWxsLCBcImRlZmF1bHRcIik7XG4gICAgbGV0IG1hdGNoZXMgPSBtYXRjaFJvdXRlcyhkYXRhUm91dGVzLCBsb2NhdGlvbiwgYmFzZW5hbWUpOyAvLyBTU1Igc3VwcG9ydHMgSEVBRCByZXF1ZXN0cyB3aGlsZSBTUEEgZG9lc24ndFxuXG4gICAgaWYgKCFpc1ZhbGlkTWV0aG9kKG1ldGhvZCkgJiYgbWV0aG9kICE9PSBcImhlYWRcIikge1xuICAgICAgbGV0IGVycm9yID0gZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kXG4gICAgICB9KTtcbiAgICAgIGxldCB7XG4gICAgICAgIG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXM6IG1ldGhvZE5vdEFsbG93ZWRNYXRjaGVzLFxuICAgICAgICBsb2FkZXJEYXRhOiB7fSxcbiAgICAgICAgYWN0aW9uRGF0YTogbnVsbCxcbiAgICAgICAgZXJyb3JzOiB7XG4gICAgICAgICAgW3JvdXRlLmlkXTogZXJyb3JcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzQ29kZTogZXJyb3Iuc3RhdHVzLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aW9uSGVhZGVyczoge30sXG4gICAgICAgIGFjdGl2ZURlZmVycmVkczogbnVsbFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgZXJyb3IgPSBnZXRJbnRlcm5hbFJvdXRlckVycm9yKDQwNCwge1xuICAgICAgICBwYXRobmFtZTogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH0pO1xuICAgICAgbGV0IHtcbiAgICAgICAgbWF0Y2hlczogbm90Rm91bmRNYXRjaGVzLFxuICAgICAgICByb3V0ZVxuICAgICAgfSA9IGdldFNob3J0Q2lyY3VpdE1hdGNoZXMoZGF0YVJvdXRlcyk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIG1hdGNoZXM6IG5vdEZvdW5kTWF0Y2hlcyxcbiAgICAgICAgbG9hZGVyRGF0YToge30sXG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGVycm9yczoge1xuICAgICAgICAgIFtyb3V0ZS5pZF06IGVycm9yXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1c0NvZGU6IGVycm9yLnN0YXR1cyxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQpO1xuXG4gICAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IC8vIFdoZW4gcmV0dXJuaW5nIFN0YXRpY0hhbmRsZXJDb250ZXh0LCB3ZSBwYXRjaCBiYWNrIGluIHRoZSBsb2NhdGlvbiBoZXJlXG4gICAgLy8gc2luY2Ugd2UgbmVlZCBpdCBmb3IgUmVhY3QgQ29udGV4dC4gIEJ1dCB0aGlzIGhlbHBzIGtlZXAgb3VyIHN1Ym1pdCBhbmRcbiAgICAvLyBsb2FkUm91dGVEYXRhIG9wZXJhdGluZyBvbiBhIFJlcXVlc3QgaW5zdGVhZCBvZiBhIExvY2F0aW9uXG5cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICBsb2NhdGlvbixcbiAgICAgIGJhc2VuYW1lXG4gICAgfSwgcmVzdWx0KTtcbiAgfVxuICAvKipcbiAgICogVGhlIHF1ZXJ5Um91dGUoKSBtZXRob2QgaXMgaW50ZW5kZWQgZm9yIHRhcmdldGVkIHJvdXRlIHJlcXVlc3RzLCBlaXRoZXJcbiAgICogZm9yIGZldGNoID9fZGF0YSByZXF1ZXN0cyBvciByZXNvdXJjZSByb3V0ZSByZXF1ZXN0cy4gIEluIHRoaXMgY2FzZSwgd2VcbiAgICogYXJlIG9ubHkgZXZlciBjYWxsaW5nIGEgc2luZ2xlIGFjdGlvbiBvciBsb2FkZXIsIGFuZCB3ZSBhcmUgcmV0dXJuaW5nIHRoZVxuICAgKiByZXR1cm5lZCB2YWx1ZSBkaXJlY3RseS4gIEluIG1vc3QgY2FzZXMsIHRoaXMgd2lsbCBiZSBhIFJlc3BvbnNlIHJldHVybmVkXG4gICAqIGZyb20gdGhlIGFjdGlvbi9sb2FkZXIsIGJ1dCBpdCBtYXkgYmUgYSBwcmltaXRpdmUgb3Igb3RoZXIgdmFsdWUgYXMgd2VsbCAtXG4gICAqIGFuZCBpbiBzdWNoIGNhc2VzIHRoZSBjYWxsaW5nIGNvbnRleHQgc2hvdWxkIGhhbmRsZSB0aGF0IGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBXZSBkbyByZXNwZWN0IHRoZSB0aHJvdy9yZXR1cm4gZGlmZmVyZW50aWF0aW9uLCBzbyBpZiBhbiBhY3Rpb24vbG9hZGVyXG4gICAqIHRocm93cywgdGhlbiB0aGlzIG1ldGhvZCB3aWxsIHRocm93IHRoZSB2YWx1ZS4gIFRoaXMgaXMgaW1wb3J0YW50IHNvIHdlXG4gICAqIGNhbiBkbyBwcm9wZXIgYm91bmRhcnkgaWRlbnRpZmljYXRpb24gaW4gUmVtaXggd2hlcmUgYSB0aHJvd24gUmVzcG9uc2VcbiAgICogbXVzdCBnbyB0byB0aGUgQ2F0Y2ggQm91bmRhcnkgYnV0IGEgcmV0dXJuZWQgUmVzcG9uc2UgaXMgaGFwcHktcGF0aC5cbiAgICpcbiAgICogT25lIHRoaW5nIHRvIG5vdGUgaXMgdGhhdCBhbnkgUm91dGVyLWluaXRpYXRlZCBFcnJvcnMgdGhhdCBtYWtlIHNlbnNlXG4gICAqIHRvIGFzc29jaWF0ZSB3aXRoIGEgc3RhdHVzIGNvZGUgd2lsbCBiZSB0aHJvd24gYXMgYW4gRXJyb3JSZXNwb25zZVxuICAgKiBpbnN0YW5jZSB3aGljaCBpbmNsdWRlIHRoZSByYXcgRXJyb3IsIHN1Y2ggdGhhdCB0aGUgY2FsbGluZyBjb250ZXh0IGNhblxuICAgKiBzZXJpYWxpemUgdGhlIGVycm9yIGFzIHRoZXkgc2VlIGZpdCB3aGlsZSBpbmNsdWRpbmcgdGhlIHByb3BlciByZXNwb25zZVxuICAgKiBjb2RlLiAgRXhhbXBsZXMgaGVyZSBhcmUgNDA0IGFuZCA0MDUgZXJyb3JzIHRoYXQgb2NjdXIgcHJpb3IgdG8gcmVhY2hpbmdcbiAgICogYW55IHVzZXItZGVmaW5lZCBsb2FkZXJzLlxuICAgKi9cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5Um91dGUocmVxdWVzdCwgX3RlbXAzKSB7XG4gICAgbGV0IHtcbiAgICAgIHJvdXRlSWQsXG4gICAgICByZXF1ZXN0Q29udGV4dFxuICAgIH0gPSBfdGVtcDMgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAzO1xuICAgIGxldCB1cmwgPSBuZXcgVVJMKHJlcXVlc3QudXJsKTtcbiAgICBsZXQgbWV0aG9kID0gcmVxdWVzdC5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihcIlwiLCBjcmVhdGVQYXRoKHVybCksIG51bGwsIFwiZGVmYXVsdFwiKTtcbiAgICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKGRhdGFSb3V0ZXMsIGxvY2F0aW9uLCBiYXNlbmFtZSk7IC8vIFNTUiBzdXBwb3J0cyBIRUFEIHJlcXVlc3RzIHdoaWxlIFNQQSBkb2Vzbid0XG5cbiAgICBpZiAoIWlzVmFsaWRNZXRob2QobWV0aG9kKSAmJiBtZXRob2QgIT09IFwiaGVhZFwiICYmIG1ldGhvZCAhPT0gXCJvcHRpb25zXCIpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgbWF0Y2ggPSByb3V0ZUlkID8gbWF0Y2hlcy5maW5kKG0gPT4gbS5yb3V0ZS5pZCA9PT0gcm91dGVJZCkgOiBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbik7XG5cbiAgICBpZiAocm91dGVJZCAmJiAhbWF0Y2gpIHtcbiAgICAgIHRocm93IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAzLCB7XG4gICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICghbWF0Y2gpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIG5ldmVyIGhpdCBJIGRvbid0IHRoaW5rP1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDQsIHtcbiAgICAgICAgcGF0aG5hbWU6IGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgcXVlcnlJbXBsKHJlcXVlc3QsIGxvY2F0aW9uLCBtYXRjaGVzLCByZXF1ZXN0Q29udGV4dCwgbWF0Y2gpO1xuXG4gICAgaWYgKGlzUmVzcG9uc2UocmVzdWx0KSkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZXQgZXJyb3IgPSByZXN1bHQuZXJyb3JzID8gT2JqZWN0LnZhbHVlcyhyZXN1bHQuZXJyb3JzKVswXSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChlcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBJZiB3ZSBnb3QgYmFjayByZXN1bHQuZXJyb3JzLCB0aGF0IG1lYW5zIHRoZSBsb2FkZXIvYWN0aW9uIHRocmV3XG4gICAgICAvLyBfc29tZXRoaW5nXyB0aGF0IHdhc24ndCBhIFJlc3BvbnNlLCBidXQgaXQncyBub3QgZ3VhcmFudGVlZC9yZXF1aXJlZFxuICAgICAgLy8gdG8gYmUgYW4gYGluc3RhbmNlb2YgRXJyb3JgIGVpdGhlciwgc28gd2UgaGF2ZSB0byB1c2UgdGhyb3cgaGVyZSB0b1xuICAgICAgLy8gcHJlc2VydmUgdGhlIFwiZXJyb3JcIiBzdGF0ZSBvdXRzaWRlIG9mIHF1ZXJ5SW1wbC5cbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gLy8gUGljayBvZmYgdGhlIHJpZ2h0IHN0YXRlIHZhbHVlIHRvIHJldHVyblxuXG5cbiAgICBpZiAocmVzdWx0LmFjdGlvbkRhdGEpIHtcbiAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlc3VsdC5hY3Rpb25EYXRhKVswXTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0LmxvYWRlckRhdGEpIHtcbiAgICAgIHZhciBfcmVzdWx0JGFjdGl2ZURlZmVycmU7XG5cbiAgICAgIGxldCBkYXRhID0gT2JqZWN0LnZhbHVlcyhyZXN1bHQubG9hZGVyRGF0YSlbMF07XG5cbiAgICAgIGlmICgoX3Jlc3VsdCRhY3RpdmVEZWZlcnJlID0gcmVzdWx0LmFjdGl2ZURlZmVycmVkcykgIT0gbnVsbCAmJiBfcmVzdWx0JGFjdGl2ZURlZmVycmVbbWF0Y2gucm91dGUuaWRdKSB7XG4gICAgICAgIGRhdGFbVU5TQUZFX0RFRkVSUkVEX1NZTUJPTF0gPSByZXN1bHQuYWN0aXZlRGVmZXJyZWRzW21hdGNoLnJvdXRlLmlkXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIHF1ZXJ5SW1wbChyZXF1ZXN0LCBsb2NhdGlvbiwgbWF0Y2hlcywgcmVxdWVzdENvbnRleHQsIHJvdXRlTWF0Y2gpIHtcbiAgICBpbnZhcmlhbnQocmVxdWVzdC5zaWduYWwsIFwicXVlcnkoKS9xdWVyeVJvdXRlKCkgcmVxdWVzdHMgbXVzdCBjb250YWluIGFuIEFib3J0Q29udHJvbGxlciBzaWduYWxcIik7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGlzTXV0YXRpb25NZXRob2QocmVxdWVzdC5tZXRob2QudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHN1Ym1pdChyZXF1ZXN0LCBtYXRjaGVzLCByb3V0ZU1hdGNoIHx8IGdldFRhcmdldE1hdGNoKG1hdGNoZXMsIGxvY2F0aW9uKSwgcmVxdWVzdENvbnRleHQsIHJvdXRlTWF0Y2ggIT0gbnVsbCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoKTtcbiAgICAgIHJldHVybiBpc1Jlc3BvbnNlKHJlc3VsdCkgPyByZXN1bHQgOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LCB7XG4gICAgICAgIGFjdGlvbkRhdGE6IG51bGwsXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB0aHJldy9yZXR1cm5lZCBhIFJlc3BvbnNlIGluIGNhbGxMb2FkZXJPckFjdGlvbiwgd2UgdGhyb3dcbiAgICAgIC8vIGl0IHRvIGJhaWwgb3V0IGFuZCB0aGVuIHJldHVybiBvciB0aHJvdyBoZXJlIGJhc2VkIG9uIHdoZXRoZXIgdGhlIHVzZXJcbiAgICAgIC8vIHJldHVybmVkIG9yIHRocmV3XG4gICAgICBpZiAoaXNRdWVyeVJvdXRlUmVzcG9uc2UoZSkpIHtcbiAgICAgICAgaWYgKGUudHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvciAmJiAhaXNSZWRpcmVjdFJlc3BvbnNlKGUucmVzcG9uc2UpKSB7XG4gICAgICAgICAgdGhyb3cgZS5yZXNwb25zZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlLnJlc3BvbnNlO1xuICAgICAgfSAvLyBSZWRpcmVjdHMgYXJlIGFsd2F5cyByZXR1cm5lZCBzaW5jZSB0aGV5IGRvbid0IHByb3BhZ2F0ZSB0byBjYXRjaFxuICAgICAgLy8gYm91bmRhcmllc1xuXG5cbiAgICAgIGlmIChpc1JlZGlyZWN0UmVzcG9uc2UoZSkpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9XG5cbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3VibWl0KHJlcXVlc3QsIG1hdGNoZXMsIGFjdGlvbk1hdGNoLCByZXF1ZXN0Q29udGV4dCwgaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgaWYgKCFhY3Rpb25NYXRjaC5yb3V0ZS5hY3Rpb24pIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDA1LCB7XG4gICAgICAgIG1ldGhvZDogcmVxdWVzdC5tZXRob2QsXG4gICAgICAgIHBhdGhuYW1lOiBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZSxcbiAgICAgICAgcm91dGVJZDogYWN0aW9uTWF0Y2gucm91dGUuaWRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3JcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGF3YWl0IGNhbGxMb2FkZXJPckFjdGlvbihcImFjdGlvblwiLCByZXF1ZXN0LCBhY3Rpb25NYXRjaCwgbWF0Y2hlcywgYmFzZW5hbWUsIHRydWUsIGlzUm91dGVSZXF1ZXN0LCByZXF1ZXN0Q29udGV4dCk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnNpZ25hbC5hYm9ydGVkKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSBpc1JvdXRlUmVxdWVzdCA/IFwicXVlcnlSb3V0ZVwiIDogXCJxdWVyeVwiO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzUmVkaXJlY3RSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gVWhoaGggLSB0aGlzIHNob3VsZCBuZXZlciBoYXBwZW4sIHdlIHNob3VsZCBhbHdheXMgdGhyb3cgdGhlc2UgZnJvbVxuICAgICAgLy8gY2FsbExvYWRlck9yQWN0aW9uLCBidXQgdGhlIHR5cGUgbmFycm93aW5nIGhlcmUga2VlcHMgVFMgaGFwcHkgYW5kIHdlXG4gICAgICAvLyBjYW4gZ2V0IGJhY2sgb24gdGhlIFwidGhyb3cgYWxsIHJlZGlyZWN0IHJlc3BvbnNlc1wiIHRyYWluIGhlcmUgc2hvdWxkXG4gICAgICAvLyB0aGlzIGV2ZXIgaGFwcGVuIDovXG4gICAgICB0aHJvdyBuZXcgUmVzcG9uc2UobnVsbCwge1xuICAgICAgICBzdGF0dXM6IHJlc3VsdC5zdGF0dXMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBMb2NhdGlvbjogcmVzdWx0LmxvY2F0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBlcnJvciA9IGdldEludGVybmFsUm91dGVyRXJyb3IoNDAwLCB7XG4gICAgICAgIHR5cGU6IFwiZGVmZXItYWN0aW9uXCJcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0KSB7XG4gICAgICAvLyBOb3RlOiBUaGlzIHNob3VsZCBvbmx5IGJlIG5vbi1SZXNwb25zZSB2YWx1ZXMgaWYgd2UgZ2V0IGhlcmUsIHNpbmNlXG4gICAgICAvLyBpc1JvdXRlUmVxdWVzdCBzaG91bGQgdGhyb3cgYW55IFJlc3BvbnNlIHJlY2VpdmVkIGluIGNhbGxMb2FkZXJPckFjdGlvblxuICAgICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyByZXN1bHQuZXJyb3I7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1hdGNoZXM6IFthY3Rpb25NYXRjaF0sXG4gICAgICAgIGxvYWRlckRhdGE6IHt9LFxuICAgICAgICBhY3Rpb25EYXRhOiB7XG4gICAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAvLyBOb3RlOiBzdGF0dXNDb2RlICsgaGVhZGVycyBhcmUgdW51c2VkIGhlcmUgc2luY2UgcXVlcnlSb3V0ZSB3aWxsXG4gICAgICAgIC8vIHJldHVybiB0aGUgcmF3IFJlc3BvbnNlIG9yIHZhbHVlXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgbG9hZGVySGVhZGVyczoge30sXG4gICAgICAgIGFjdGlvbkhlYWRlcnM6IHt9LFxuICAgICAgICBhY3RpdmVEZWZlcnJlZHM6IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzRXJyb3JSZXN1bHQocmVzdWx0KSkge1xuICAgICAgLy8gU3RvcmUgb2ZmIHRoZSBwZW5kaW5nIGVycm9yIC0gd2UgdXNlIGl0IHRvIGRldGVybWluZSB3aGljaCBsb2FkZXJzXG4gICAgICAvLyB0byBjYWxsIGFuZCB3aWxsIGNvbW1pdCBpdCB3aGVuIHdlIGNvbXBsZXRlIHRoZSBuYXZpZ2F0aW9uXG4gICAgICBsZXQgYm91bmRhcnlNYXRjaCA9IGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgYWN0aW9uTWF0Y2gucm91dGUuaWQpO1xuICAgICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCB1bmRlZmluZWQsIHtcbiAgICAgICAgW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdOiByZXN1bHQuZXJyb3JcbiAgICAgIH0pOyAvLyBhY3Rpb24gc3RhdHVzIGNvZGVzIHRha2UgcHJlY2VkZW5jZSBvdmVyIGxvYWRlciBzdGF0dXMgY29kZXNcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBjb250ZXh0LCB7XG4gICAgICAgIHN0YXR1c0NvZGU6IGlzUm91dGVFcnJvclJlc3BvbnNlKHJlc3VsdC5lcnJvcikgPyByZXN1bHQuZXJyb3Iuc3RhdHVzIDogNTAwLFxuICAgICAgICBhY3Rpb25EYXRhOiBudWxsLFxuICAgICAgICBhY3Rpb25IZWFkZXJzOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LmhlYWRlcnMgPyB7XG4gICAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmhlYWRlcnNcbiAgICAgICAgfSA6IHt9KVxuICAgICAgfSk7XG4gICAgfSAvLyBDcmVhdGUgYSBHRVQgcmVxdWVzdCBmb3IgdGhlIGxvYWRlcnNcblxuXG4gICAgbGV0IGxvYWRlclJlcXVlc3QgPSBuZXcgUmVxdWVzdChyZXF1ZXN0LnVybCwge1xuICAgICAgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzLFxuICAgICAgcmVkaXJlY3Q6IHJlcXVlc3QucmVkaXJlY3QsXG4gICAgICBzaWduYWw6IHJlcXVlc3Quc2lnbmFsXG4gICAgfSk7XG4gICAgbGV0IGNvbnRleHQgPSBhd2FpdCBsb2FkUm91dGVEYXRhKGxvYWRlclJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHJlc3VsdC5zdGF0dXNDb2RlID8ge1xuICAgICAgc3RhdHVzQ29kZTogcmVzdWx0LnN0YXR1c0NvZGVcbiAgICB9IDoge30sIHtcbiAgICAgIGFjdGlvbkRhdGE6IHtcbiAgICAgICAgW2FjdGlvbk1hdGNoLnJvdXRlLmlkXTogcmVzdWx0LmRhdGFcbiAgICAgIH0sXG4gICAgICBhY3Rpb25IZWFkZXJzOiBfZXh0ZW5kcyh7fSwgcmVzdWx0LmhlYWRlcnMgPyB7XG4gICAgICAgIFthY3Rpb25NYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5oZWFkZXJzXG4gICAgICB9IDoge30pXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsb2FkUm91dGVEYXRhKHJlcXVlc3QsIG1hdGNoZXMsIHJlcXVlc3RDb250ZXh0LCByb3V0ZU1hdGNoLCBwZW5kaW5nQWN0aW9uRXJyb3IpIHtcbiAgICBsZXQgaXNSb3V0ZVJlcXVlc3QgPSByb3V0ZU1hdGNoICE9IG51bGw7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnlSb3V0ZSgpKVxuXG4gICAgaWYgKGlzUm91dGVSZXF1ZXN0ICYmICEocm91dGVNYXRjaCAhPSBudWxsICYmIHJvdXRlTWF0Y2gucm91dGUubG9hZGVyKSkge1xuICAgICAgdGhyb3cgZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDAsIHtcbiAgICAgICAgbWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcbiAgICAgICAgcGF0aG5hbWU6IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lLFxuICAgICAgICByb3V0ZUlkOiByb3V0ZU1hdGNoID09IG51bGwgPyB2b2lkIDAgOiByb3V0ZU1hdGNoLnJvdXRlLmlkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgcmVxdWVzdE1hdGNoZXMgPSByb3V0ZU1hdGNoID8gW3JvdXRlTWF0Y2hdIDogZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgT2JqZWN0LmtleXMocGVuZGluZ0FjdGlvbkVycm9yIHx8IHt9KVswXSk7XG4gICAgbGV0IG1hdGNoZXNUb0xvYWQgPSByZXF1ZXN0TWF0Y2hlcy5maWx0ZXIobSA9PiBtLnJvdXRlLmxvYWRlcik7IC8vIFNob3J0IGNpcmN1aXQgaWYgd2UgaGF2ZSBubyBsb2FkZXJzIHRvIHJ1biAocXVlcnkoKSlcblxuICAgIGlmIChtYXRjaGVzVG9Mb2FkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWF0Y2hlcyxcbiAgICAgICAgLy8gQWRkIGEgbnVsbCBmb3IgYWxsIG1hdGNoZWQgcm91dGVzIGZvciBwcm9wZXIgcmV2YWxpZGF0aW9uIG9uIHRoZSBjbGllbnRcbiAgICAgICAgbG9hZGVyRGF0YTogbWF0Y2hlcy5yZWR1Y2UoKGFjYywgbSkgPT4gT2JqZWN0LmFzc2lnbihhY2MsIHtcbiAgICAgICAgICBbbS5yb3V0ZS5pZF06IG51bGxcbiAgICAgICAgfSksIHt9KSxcbiAgICAgICAgZXJyb3JzOiBwZW5kaW5nQWN0aW9uRXJyb3IgfHwgbnVsbCxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICBsb2FkZXJIZWFkZXJzOiB7fSxcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGwoWy4uLm1hdGNoZXNUb0xvYWQubWFwKG1hdGNoID0+IGNhbGxMb2FkZXJPckFjdGlvbihcImxvYWRlclwiLCByZXF1ZXN0LCBtYXRjaCwgbWF0Y2hlcywgYmFzZW5hbWUsIHRydWUsIGlzUm91dGVSZXF1ZXN0LCByZXF1ZXN0Q29udGV4dCkpXSk7XG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgbGV0IG1ldGhvZCA9IGlzUm91dGVSZXF1ZXN0ID8gXCJxdWVyeVJvdXRlXCIgOiBcInF1ZXJ5XCI7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWV0aG9kICsgXCIoKSBjYWxsIGFib3J0ZWRcIik7XG4gICAgfSAvLyBQcm9jZXNzIGFuZCBjb21taXQgb3V0cHV0IGZyb20gbG9hZGVyc1xuXG5cbiAgICBsZXQgYWN0aXZlRGVmZXJyZWRzID0gbmV3IE1hcCgpO1xuICAgIGxldCBjb250ZXh0ID0gcHJvY2Vzc1JvdXRlTG9hZGVyRGF0YShtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nQWN0aW9uRXJyb3IsIGFjdGl2ZURlZmVycmVkcyk7IC8vIEFkZCBhIG51bGwgZm9yIGFueSBub24tbG9hZGVyIG1hdGNoZXMgZm9yIHByb3BlciByZXZhbGlkYXRpb24gb24gdGhlIGNsaWVudFxuXG4gICAgbGV0IGV4ZWN1dGVkTG9hZGVycyA9IG5ldyBTZXQobWF0Y2hlc1RvTG9hZC5tYXAobWF0Y2ggPT4gbWF0Y2gucm91dGUuaWQpKTtcbiAgICBtYXRjaGVzLmZvckVhY2gobWF0Y2ggPT4ge1xuICAgICAgaWYgKCFleGVjdXRlZExvYWRlcnMuaGFzKG1hdGNoLnJvdXRlLmlkKSkge1xuICAgICAgICBjb250ZXh0LmxvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdID0gbnVsbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGNvbnRleHQsIHtcbiAgICAgIG1hdGNoZXMsXG4gICAgICBhY3RpdmVEZWZlcnJlZHM6IGFjdGl2ZURlZmVycmVkcy5zaXplID4gMCA/IE9iamVjdC5mcm9tRW50cmllcyhhY3RpdmVEZWZlcnJlZHMuZW50cmllcygpKSA6IG51bGxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGF0YVJvdXRlcyxcbiAgICBxdWVyeSxcbiAgICBxdWVyeVJvdXRlXG4gIH07XG59IC8vI2VuZHJlZ2lvblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vI3JlZ2lvbiBIZWxwZXJzXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKipcbiAqIEdpdmVuIGFuIGV4aXN0aW5nIFN0YXRpY0hhbmRsZXJDb250ZXh0IGFuZCBhbiBlcnJvciB0aHJvd24gYXQgcmVuZGVyIHRpbWUsXG4gKiBwcm92aWRlIGFuIHVwZGF0ZWQgU3RhdGljSGFuZGxlckNvbnRleHQgc3VpdGFibGUgZm9yIGEgc2Vjb25kIFNTUiByZW5kZXJcbiAqL1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNDb250ZXh0RnJvbUVycm9yKHJvdXRlcywgY29udGV4dCwgZXJyb3IpIHtcbiAgbGV0IG5ld0NvbnRleHQgPSBfZXh0ZW5kcyh7fSwgY29udGV4dCwge1xuICAgIHN0YXR1c0NvZGU6IDUwMCxcbiAgICBlcnJvcnM6IHtcbiAgICAgIFtjb250ZXh0Ll9kZWVwZXN0UmVuZGVyZWRCb3VuZGFyeUlkIHx8IHJvdXRlc1swXS5pZF06IGVycm9yXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbmV3Q29udGV4dDtcbn1cblxuZnVuY3Rpb24gaXNTdWJtaXNzaW9uTmF2aWdhdGlvbihvcHRzKSB7XG4gIHJldHVybiBvcHRzICE9IG51bGwgJiYgXCJmb3JtRGF0YVwiIGluIG9wdHM7XG59IC8vIE5vcm1hbGl6ZSBuYXZpZ2F0aW9uIG9wdGlvbnMgYnkgY29udmVydGluZyBmb3JtTWV0aG9kPUdFVCBmb3JtRGF0YSBvYmplY3RzIHRvXG4vLyBVUkxTZWFyY2hQYXJhbXMgc28gdGhleSBiZWhhdmUgaWRlbnRpY2FsbHkgdG8gbGlua3Mgd2l0aCBxdWVyeSBwYXJhbXNcblxuXG5mdW5jdGlvbiBub3JtYWxpemVOYXZpZ2F0ZU9wdGlvbnModG8sIG9wdHMsIGlzRmV0Y2hlcikge1xuICBpZiAoaXNGZXRjaGVyID09PSB2b2lkIDApIHtcbiAgICBpc0ZldGNoZXIgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBwYXRoID0gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gdG8gOiBjcmVhdGVQYXRoKHRvKTsgLy8gUmV0dXJuIGxvY2F0aW9uIHZlcmJhdGltIG9uIG5vbi1zdWJtaXNzaW9uIG5hdmlnYXRpb25zXG5cbiAgaWYgKCFvcHRzIHx8ICFpc1N1Ym1pc3Npb25OYXZpZ2F0aW9uKG9wdHMpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhcbiAgICB9O1xuICB9XG5cbiAgaWYgKG9wdHMuZm9ybU1ldGhvZCAmJiAhaXNWYWxpZE1ldGhvZChvcHRzLmZvcm1NZXRob2QpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGgsXG4gICAgICBlcnJvcjogZ2V0SW50ZXJuYWxSb3V0ZXJFcnJvcig0MDUsIHtcbiAgICAgICAgbWV0aG9kOiBvcHRzLmZvcm1NZXRob2RcbiAgICAgIH0pXG4gICAgfTtcbiAgfSAvLyBDcmVhdGUgYSBTdWJtaXNzaW9uIG9uIG5vbi1HRVQgbmF2aWdhdGlvbnNcblxuXG4gIGxldCBzdWJtaXNzaW9uO1xuXG4gIGlmIChvcHRzLmZvcm1EYXRhKSB7XG4gICAgc3VibWlzc2lvbiA9IHtcbiAgICAgIGZvcm1NZXRob2Q6IG9wdHMuZm9ybU1ldGhvZCB8fCBcImdldFwiLFxuICAgICAgZm9ybUFjdGlvbjogc3RyaXBIYXNoRnJvbVBhdGgocGF0aCksXG4gICAgICBmb3JtRW5jVHlwZTogb3B0cyAmJiBvcHRzLmZvcm1FbmNUeXBlIHx8IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICBmb3JtRGF0YTogb3B0cy5mb3JtRGF0YVxuICAgIH07XG5cbiAgICBpZiAoaXNNdXRhdGlvbk1ldGhvZChzdWJtaXNzaW9uLmZvcm1NZXRob2QpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBzdWJtaXNzaW9uXG4gICAgICB9O1xuICAgIH1cbiAgfSAvLyBGbGF0dGVuIHN1Ym1pc3Npb24gb250byBVUkxTZWFyY2hQYXJhbXMgZm9yIEdFVCBzdWJtaXNzaW9uc1xuXG5cbiAgbGV0IHBhcnNlZFBhdGggPSBwYXJzZVBhdGgocGF0aCk7XG4gIGxldCBzZWFyY2hQYXJhbXMgPSBjb252ZXJ0Rm9ybURhdGFUb1NlYXJjaFBhcmFtcyhvcHRzLmZvcm1EYXRhKTsgLy8gU2luY2UgZmV0Y2hlciBHRVQgc3VibWlzc2lvbnMgb25seSBydW4gYSBzaW5nbGUgbG9hZGVyIChhcyBvcHBvc2VkIHRvXG4gIC8vIG5hdmlnYXRpb24gR0VUIHN1Ym1pc3Npb25zIHdoaWNoIHJ1biBhbGwgbG9hZGVycyksIHdlIG5lZWQgdG8gcHJlc2VydmVcbiAgLy8gYW55IGluY29taW5nID9pbmRleCBwYXJhbXNcblxuICBpZiAoaXNGZXRjaGVyICYmIHBhcnNlZFBhdGguc2VhcmNoICYmIGhhc05ha2VkSW5kZXhRdWVyeShwYXJzZWRQYXRoLnNlYXJjaCkpIHtcbiAgICBzZWFyY2hQYXJhbXMuYXBwZW5kKFwiaW5kZXhcIiwgXCJcIik7XG4gIH1cblxuICBwYXJzZWRQYXRoLnNlYXJjaCA9IFwiP1wiICsgc2VhcmNoUGFyYW1zO1xuICByZXR1cm4ge1xuICAgIHBhdGg6IGNyZWF0ZVBhdGgocGFyc2VkUGF0aCksXG4gICAgc3VibWlzc2lvblxuICB9O1xufSAvLyBGaWx0ZXIgb3V0IGFsbCByb3V0ZXMgYmVsb3cgYW55IGNhdWdodCBlcnJvciBhcyB0aGV5IGFyZW4ndCBnb2luZyB0b1xuLy8gcmVuZGVyIHNvIHdlIGRvbid0IG5lZWQgdG8gbG9hZCB0aGVtXG5cblxuZnVuY3Rpb24gZ2V0TG9hZGVyTWF0Y2hlc1VudGlsQm91bmRhcnkobWF0Y2hlcywgYm91bmRhcnlJZCkge1xuICBsZXQgYm91bmRhcnlNYXRjaGVzID0gbWF0Y2hlcztcblxuICBpZiAoYm91bmRhcnlJZCkge1xuICAgIGxldCBpbmRleCA9IG1hdGNoZXMuZmluZEluZGV4KG0gPT4gbS5yb3V0ZS5pZCA9PT0gYm91bmRhcnlJZCk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgYm91bmRhcnlNYXRjaGVzID0gbWF0Y2hlcy5zbGljZSgwLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kYXJ5TWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gZ2V0TWF0Y2hlc1RvTG9hZChoaXN0b3J5LCBzdGF0ZSwgbWF0Y2hlcywgc3VibWlzc2lvbiwgbG9jYXRpb24sIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQsIGNhbmNlbGxlZERlZmVycmVkUm91dGVzLCBjYW5jZWxsZWRGZXRjaGVyTG9hZHMsIHBlbmRpbmdBY3Rpb25EYXRhLCBwZW5kaW5nRXJyb3IsIGZldGNoTG9hZE1hdGNoZXMpIHtcbiAgbGV0IGFjdGlvblJlc3VsdCA9IHBlbmRpbmdFcnJvciA/IE9iamVjdC52YWx1ZXMocGVuZGluZ0Vycm9yKVswXSA6IHBlbmRpbmdBY3Rpb25EYXRhID8gT2JqZWN0LnZhbHVlcyhwZW5kaW5nQWN0aW9uRGF0YSlbMF0gOiB1bmRlZmluZWQ7XG4gIGxldCBjdXJyZW50VXJsID0gaGlzdG9yeS5jcmVhdGVVUkwoc3RhdGUubG9jYXRpb24pO1xuICBsZXQgbmV4dFVybCA9IGhpc3RvcnkuY3JlYXRlVVJMKGxvY2F0aW9uKTtcbiAgbGV0IGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlID0gLy8gRm9yY2VkIHJldmFsaWRhdGlvbiBkdWUgdG8gc3VibWlzc2lvbiwgdXNlUmV2YWxpZGF0ZSwgb3IgWC1SZW1peC1SZXZhbGlkYXRlXG4gIGlzUmV2YWxpZGF0aW9uUmVxdWlyZWQgfHwgLy8gQ2xpY2tlZCB0aGUgc2FtZSBsaW5rLCByZXN1Ym1pdHRlZCBhIEdFVCBmb3JtXG4gIGN1cnJlbnRVcmwudG9TdHJpbmcoKSA9PT0gbmV4dFVybC50b1N0cmluZygpIHx8IC8vIFNlYXJjaCBwYXJhbXMgYWZmZWN0IGFsbCBsb2FkZXJzXG4gIGN1cnJlbnRVcmwuc2VhcmNoICE9PSBuZXh0VXJsLnNlYXJjaDsgLy8gUGljayBuYXZpZ2F0aW9uIG1hdGNoZXMgdGhhdCBhcmUgbmV0LW5ldyBvciBxdWFsaWZ5IGZvciByZXZhbGlkYXRpb25cblxuICBsZXQgYm91bmRhcnlJZCA9IHBlbmRpbmdFcnJvciA/IE9iamVjdC5rZXlzKHBlbmRpbmdFcnJvcilbMF0gOiB1bmRlZmluZWQ7XG4gIGxldCBib3VuZGFyeU1hdGNoZXMgPSBnZXRMb2FkZXJNYXRjaGVzVW50aWxCb3VuZGFyeShtYXRjaGVzLCBib3VuZGFyeUlkKTtcbiAgbGV0IG5hdmlnYXRpb25NYXRjaGVzID0gYm91bmRhcnlNYXRjaGVzLmZpbHRlcigobWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgaWYgKG1hdGNoLnJvdXRlLmxvYWRlciA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBBbHdheXMgY2FsbCB0aGUgbG9hZGVyIG9uIG5ldyByb3V0ZSBpbnN0YW5jZXMgYW5kIHBlbmRpbmcgZGVmZXIgY2FuY2VsbGF0aW9uc1xuXG5cbiAgICBpZiAoaXNOZXdMb2FkZXIoc3RhdGUubG9hZGVyRGF0YSwgc3RhdGUubWF0Y2hlc1tpbmRleF0sIG1hdGNoKSB8fCBjYW5jZWxsZWREZWZlcnJlZFJvdXRlcy5zb21lKGlkID0+IGlkID09PSBtYXRjaC5yb3V0ZS5pZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gVGhpcyBpcyB0aGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBmb3Igd2hlbiB3ZSByZXZhbGlkYXRlLiAgSWYgdGhlIHJvdXRlXG4gICAgLy8gcHJvdmlkZXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24sIHRoZW4gd2UgZ2l2ZSB0aGVtIGZ1bGwgY29udHJvbCBidXRcbiAgICAvLyBwcm92aWRlIHRoaXMgdmFsdWUgc28gdGhleSBjYW4gbGV2ZXJhZ2UgaXQgaWYgbmVlZGVkIGFmdGVyIHRoZXkgY2hlY2tcbiAgICAvLyB0aGVpciBvd24gc3BlY2lmaWMgdXNlIGNhc2VzXG5cblxuICAgIGxldCBjdXJyZW50Um91dGVNYXRjaCA9IHN0YXRlLm1hdGNoZXNbaW5kZXhdO1xuICAgIGxldCBuZXh0Um91dGVNYXRjaCA9IG1hdGNoO1xuICAgIHJldHVybiBzaG91bGRSZXZhbGlkYXRlTG9hZGVyKG1hdGNoLCBfZXh0ZW5kcyh7XG4gICAgICBjdXJyZW50VXJsLFxuICAgICAgY3VycmVudFBhcmFtczogY3VycmVudFJvdXRlTWF0Y2gucGFyYW1zLFxuICAgICAgbmV4dFVybCxcbiAgICAgIG5leHRQYXJhbXM6IG5leHRSb3V0ZU1hdGNoLnBhcmFtc1xuICAgIH0sIHN1Ym1pc3Npb24sIHtcbiAgICAgIGFjdGlvblJlc3VsdCxcbiAgICAgIGRlZmF1bHRTaG91bGRSZXZhbGlkYXRlOiBkZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZSB8fCBpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudFJvdXRlTWF0Y2gsIG5leHRSb3V0ZU1hdGNoKVxuICAgIH0pKTtcbiAgfSk7IC8vIFBpY2sgZmV0Y2hlci5sb2FkcyB0aGF0IG5lZWQgdG8gYmUgcmV2YWxpZGF0ZWRcblxuICBsZXQgcmV2YWxpZGF0aW5nRmV0Y2hlcnMgPSBbXTtcbiAgZmV0Y2hMb2FkTWF0Y2hlcyAmJiBmZXRjaExvYWRNYXRjaGVzLmZvckVhY2goKGYsIGtleSkgPT4ge1xuICAgIGlmICghbWF0Y2hlcy5zb21lKG0gPT4gbS5yb3V0ZS5pZCA9PT0gZi5yb3V0ZUlkKSkge1xuICAgICAgLy8gVGhpcyBmZXRjaGVyIGlzIG5vdCBnb2luZyB0byBiZSBwcmVzZW50IGluIHRoZSBzdWJzZXF1ZW50IHJlbmRlciBzb1xuICAgICAgLy8gdGhlcmUncyBubyBuZWVkIHRvIHJldmFsaWRhdGUgaXRcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGNhbmNlbGxlZEZldGNoZXJMb2Fkcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAvLyBUaGlzIGZldGNoZXIgd2FzIGNhbmNlbGxlZCBmcm9tIGEgcHJpb3IgYWN0aW9uIHN1Ym1pc3Npb24gLSBmb3JjZSByZWxvYWRcbiAgICAgIHJldmFsaWRhdGluZ0ZldGNoZXJzLnB1c2goX2V4dGVuZHMoe1xuICAgICAgICBrZXlcbiAgICAgIH0sIGYpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmV2YWxpZGF0aW5nIGZldGNoZXJzIGFyZSBkZWNvdXBsZWQgZnJvbSB0aGUgcm91dGUgbWF0Y2hlcyBzaW5jZSB0aGV5XG4gICAgICAvLyBoaXQgYSBzdGF0aWMgaHJlZiwgc28gdGhleSBfYWx3YXlzXyBjaGVjayBzaG91bGRSZXZhbGlkYXRlIGFuZCB0aGVcbiAgICAgIC8vIGRlZmF1bHQgaXMgc3RyaWN0bHkgaWYgYSByZXZhbGlkYXRpb24gaXMgZXhwbGljaXRseSByZXF1aXJlZCAoYWN0aW9uXG4gICAgICAvLyBzdWJtaXNzaW9ucywgdXNlUmV2YWxpZGF0b3IsIFgtUmVtaXgtUmV2YWxpZGF0ZSkuXG4gICAgICBsZXQgc2hvdWxkUmV2YWxpZGF0ZSA9IHNob3VsZFJldmFsaWRhdGVMb2FkZXIoZi5tYXRjaCwgX2V4dGVuZHMoe1xuICAgICAgICBjdXJyZW50VXJsLFxuICAgICAgICBjdXJyZW50UGFyYW1zOiBzdGF0ZS5tYXRjaGVzW3N0YXRlLm1hdGNoZXMubGVuZ3RoIC0gMV0ucGFyYW1zLFxuICAgICAgICBuZXh0VXJsLFxuICAgICAgICBuZXh0UGFyYW1zOiBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucGFyYW1zXG4gICAgICB9LCBzdWJtaXNzaW9uLCB7XG4gICAgICAgIGFjdGlvblJlc3VsdCxcbiAgICAgICAgZGVmYXVsdFNob3VsZFJldmFsaWRhdGVcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgICAgcmV2YWxpZGF0aW5nRmV0Y2hlcnMucHVzaChfZXh0ZW5kcyh7XG4gICAgICAgICAga2V5XG4gICAgICAgIH0sIGYpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW25hdmlnYXRpb25NYXRjaGVzLCByZXZhbGlkYXRpbmdGZXRjaGVyc107XG59XG5cbmZ1bmN0aW9uIGlzTmV3TG9hZGVyKGN1cnJlbnRMb2FkZXJEYXRhLCBjdXJyZW50TWF0Y2gsIG1hdGNoKSB7XG4gIGxldCBpc05ldyA9IC8vIFthXSAtPiBbYSwgYl1cbiAgIWN1cnJlbnRNYXRjaCB8fCAvLyBbYSwgYl0gLT4gW2EsIGNdXG4gIG1hdGNoLnJvdXRlLmlkICE9PSBjdXJyZW50TWF0Y2gucm91dGUuaWQ7IC8vIEhhbmRsZSB0aGUgY2FzZSB0aGF0IHdlIGRvbid0IGhhdmUgZGF0YSBmb3IgYSByZS11c2VkIHJvdXRlLCBwb3RlbnRpYWxseVxuICAvLyBmcm9tIGEgcHJpb3IgZXJyb3Igb3IgZnJvbSBhIGNhbmNlbGxlZCBwZW5kaW5nIGRlZmVycmVkXG5cbiAgbGV0IGlzTWlzc2luZ0RhdGEgPSBjdXJyZW50TG9hZGVyRGF0YVttYXRjaC5yb3V0ZS5pZF0gPT09IHVuZGVmaW5lZDsgLy8gQWx3YXlzIGxvYWQgaWYgdGhpcyBpcyBhIG5ldC1uZXcgcm91dGUgb3Igd2UgZG9uJ3QgeWV0IGhhdmUgZGF0YVxuXG4gIHJldHVybiBpc05ldyB8fCBpc01pc3NpbmdEYXRhO1xufVxuXG5mdW5jdGlvbiBpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkge1xuICBsZXQgY3VycmVudFBhdGggPSBjdXJyZW50TWF0Y2gucm91dGUucGF0aDtcbiAgcmV0dXJuICgvLyBwYXJhbSBjaGFuZ2UgZm9yIHRoaXMgbWF0Y2gsIC91c2Vycy8xMjMgLT4gL3VzZXJzLzQ1NlxuICAgIGN1cnJlbnRNYXRjaC5wYXRobmFtZSAhPT0gbWF0Y2gucGF0aG5hbWUgfHwgLy8gc3BsYXQgcGFyYW0gY2hhbmdlZCwgd2hpY2ggaXMgbm90IHByZXNlbnQgaW4gbWF0Y2gucGF0aFxuICAgIC8vIGUuZy4gL2ZpbGVzL2ltYWdlcy9hdmF0YXIuanBnIC0+IGZpbGVzL2ZpbmFuY2VzLnhsc1xuICAgIGN1cnJlbnRQYXRoICE9IG51bGwgJiYgY3VycmVudFBhdGguZW5kc1dpdGgoXCIqXCIpICYmIGN1cnJlbnRNYXRjaC5wYXJhbXNbXCIqXCJdICE9PSBtYXRjaC5wYXJhbXNbXCIqXCJdXG4gICk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFJldmFsaWRhdGVMb2FkZXIobG9hZGVyTWF0Y2gsIGFyZykge1xuICBpZiAobG9hZGVyTWF0Y2gucm91dGUuc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgIGxldCByb3V0ZUNob2ljZSA9IGxvYWRlck1hdGNoLnJvdXRlLnNob3VsZFJldmFsaWRhdGUoYXJnKTtcblxuICAgIGlmICh0eXBlb2Ygcm91dGVDaG9pY2UgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICByZXR1cm4gcm91dGVDaG9pY2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGFyZy5kZWZhdWx0U2hvdWxkUmV2YWxpZGF0ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsbExvYWRlck9yQWN0aW9uKHR5cGUsIHJlcXVlc3QsIG1hdGNoLCBtYXRjaGVzLCBiYXNlbmFtZSwgaXNTdGF0aWNSZXF1ZXN0LCBpc1JvdXRlUmVxdWVzdCwgcmVxdWVzdENvbnRleHQpIHtcbiAgaWYgKGJhc2VuYW1lID09PSB2b2lkIDApIHtcbiAgICBiYXNlbmFtZSA9IFwiL1wiO1xuICB9XG5cbiAgaWYgKGlzU3RhdGljUmVxdWVzdCA9PT0gdm9pZCAwKSB7XG4gICAgaXNTdGF0aWNSZXF1ZXN0ID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaXNSb3V0ZVJlcXVlc3QgPT09IHZvaWQgMCkge1xuICAgIGlzUm91dGVSZXF1ZXN0ID0gZmFsc2U7XG4gIH1cblxuICBsZXQgcmVzdWx0VHlwZTtcbiAgbGV0IHJlc3VsdDsgLy8gU2V0dXAgYSBwcm9taXNlIHdlIGNhbiByYWNlIGFnYWluc3Qgc28gdGhhdCBhYm9ydCBzaWduYWxzIHNob3J0IGNpcmN1aXRcblxuICBsZXQgcmVqZWN0O1xuICBsZXQgYWJvcnRQcm9taXNlID0gbmV3IFByb21pc2UoKF8sIHIpID0+IHJlamVjdCA9IHIpO1xuXG4gIGxldCBvblJlamVjdCA9ICgpID0+IHJlamVjdCgpO1xuXG4gIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvblJlamVjdCk7XG5cbiAgdHJ5IHtcbiAgICBsZXQgaGFuZGxlciA9IG1hdGNoLnJvdXRlW3R5cGVdO1xuICAgIGludmFyaWFudChoYW5kbGVyLCBcIkNvdWxkIG5vdCBmaW5kIHRoZSBcIiArIHR5cGUgKyBcIiB0byBydW4gb24gdGhlIFxcXCJcIiArIG1hdGNoLnJvdXRlLmlkICsgXCJcXFwiIHJvdXRlXCIpO1xuICAgIHJlc3VsdCA9IGF3YWl0IFByb21pc2UucmFjZShbaGFuZGxlcih7XG4gICAgICByZXF1ZXN0LFxuICAgICAgcGFyYW1zOiBtYXRjaC5wYXJhbXMsXG4gICAgICBjb250ZXh0OiByZXF1ZXN0Q29udGV4dFxuICAgIH0pLCBhYm9ydFByb21pc2VdKTtcbiAgICBpbnZhcmlhbnQocmVzdWx0ICE9PSB1bmRlZmluZWQsIFwiWW91IGRlZmluZWQgXCIgKyAodHlwZSA9PT0gXCJhY3Rpb25cIiA/IFwiYW4gYWN0aW9uXCIgOiBcImEgbG9hZGVyXCIpICsgXCIgZm9yIHJvdXRlIFwiICsgKFwiXFxcIlwiICsgbWF0Y2gucm91dGUuaWQgKyBcIlxcXCIgYnV0IGRpZG4ndCByZXR1cm4gYW55dGhpbmcgZnJvbSB5b3VyIGBcIiArIHR5cGUgKyBcImAgXCIpICsgXCJmdW5jdGlvbi4gUGxlYXNlIHJldHVybiBhIHZhbHVlIG9yIGBudWxsYC5cIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXN1bHRUeXBlID0gUmVzdWx0VHlwZS5lcnJvcjtcbiAgICByZXN1bHQgPSBlO1xuICB9IGZpbmFsbHkge1xuICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhYm9ydFwiLCBvblJlamVjdCk7XG4gIH1cblxuICBpZiAoaXNSZXNwb25zZShyZXN1bHQpKSB7XG4gICAgbGV0IHN0YXR1cyA9IHJlc3VsdC5zdGF0dXM7IC8vIFByb2Nlc3MgcmVkaXJlY3RzXG5cbiAgICBpZiAocmVkaXJlY3RTdGF0dXNDb2Rlcy5oYXMoc3RhdHVzKSkge1xuICAgICAgbGV0IGxvY2F0aW9uID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIik7XG4gICAgICBpbnZhcmlhbnQobG9jYXRpb24sIFwiUmVkaXJlY3RzIHJldHVybmVkL3Rocm93biBmcm9tIGxvYWRlcnMvYWN0aW9ucyBtdXN0IGhhdmUgYSBMb2NhdGlvbiBoZWFkZXJcIik7IC8vIFN1cHBvcnQgcmVsYXRpdmUgcm91dGluZyBpbiBpbnRlcm5hbCByZWRpcmVjdHNcblxuICAgICAgaWYgKCFBQlNPTFVURV9VUkxfUkVHRVgudGVzdChsb2NhdGlvbikpIHtcbiAgICAgICAgbGV0IGFjdGl2ZU1hdGNoZXMgPSBtYXRjaGVzLnNsaWNlKDAsIG1hdGNoZXMuaW5kZXhPZihtYXRjaCkgKyAxKTtcbiAgICAgICAgbGV0IHJvdXRlUGF0aG5hbWVzID0gZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMoYWN0aXZlTWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSk7XG4gICAgICAgIGxldCByZXNvbHZlZExvY2F0aW9uID0gcmVzb2x2ZVRvKGxvY2F0aW9uLCByb3V0ZVBhdGhuYW1lcywgbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWUpO1xuICAgICAgICBpbnZhcmlhbnQoY3JlYXRlUGF0aChyZXNvbHZlZExvY2F0aW9uKSwgXCJVbmFibGUgdG8gcmVzb2x2ZSByZWRpcmVjdCBsb2NhdGlvbjogXCIgKyBsb2NhdGlvbik7IC8vIFByZXBlbmQgdGhlIGJhc2VuYW1lIHRvIHRoZSByZWRpcmVjdCBsb2NhdGlvbiBpZiB3ZSBoYXZlIG9uZVxuXG4gICAgICAgIGlmIChiYXNlbmFtZSkge1xuICAgICAgICAgIGxldCBwYXRoID0gcmVzb2x2ZWRMb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICByZXNvbHZlZExvY2F0aW9uLnBhdGhuYW1lID0gcGF0aCA9PT0gXCIvXCIgPyBiYXNlbmFtZSA6IGpvaW5QYXRocyhbYmFzZW5hbWUsIHBhdGhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2F0aW9uID0gY3JlYXRlUGF0aChyZXNvbHZlZExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzU3RhdGljUmVxdWVzdCkge1xuICAgICAgICAvLyBTdHJpcCBvZmYgdGhlIHByb3RvY29sK29yaWdpbiBmb3Igc2FtZS1vcmlnaW4gYWJzb2x1dGUgcmVkaXJlY3RzLlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3RhdGljIHJlcXVlcywgd2UgY2FuIGxldCBpdCBnbyBiYWNrIHRvIHRoZSBicm93c2VyXG4gICAgICAgIC8vIGFzLWlzXG4gICAgICAgIGxldCBjdXJyZW50VXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gICAgICAgIGxldCB1cmwgPSBsb2NhdGlvbi5zdGFydHNXaXRoKFwiLy9cIikgPyBuZXcgVVJMKGN1cnJlbnRVcmwucHJvdG9jb2wgKyBsb2NhdGlvbikgOiBuZXcgVVJMKGxvY2F0aW9uKTtcblxuICAgICAgICBpZiAodXJsLm9yaWdpbiA9PT0gY3VycmVudFVybC5vcmlnaW4pIHtcbiAgICAgICAgICBsb2NhdGlvbiA9IHVybC5wYXRobmFtZSArIHVybC5zZWFyY2ggKyB1cmwuaGFzaDtcbiAgICAgICAgfVxuICAgICAgfSAvLyBEb24ndCBwcm9jZXNzIHJlZGlyZWN0cyBpbiB0aGUgcm91dGVyIGR1cmluZyBzdGF0aWMgcmVxdWVzdHMgcmVxdWVzdHMuXG4gICAgICAvLyBJbnN0ZWFkLCB0aHJvdyB0aGUgUmVzcG9uc2UgYW5kIGxldCB0aGUgc2VydmVyIGhhbmRsZSBpdCB3aXRoIGFuIEhUVFBcbiAgICAgIC8vIHJlZGlyZWN0LiAgV2UgYWxzbyB1cGRhdGUgdGhlIExvY2F0aW9uIGhlYWRlciBpbiBwbGFjZSBpbiB0aGlzIGZsb3cgc29cbiAgICAgIC8vIGJhc2VuYW1lIGFuZCByZWxhdGl2ZSByb3V0aW5nIGlzIHRha2VuIGludG8gYWNjb3VudFxuXG5cbiAgICAgIGlmIChpc1N0YXRpY1JlcXVlc3QpIHtcbiAgICAgICAgcmVzdWx0LmhlYWRlcnMuc2V0KFwiTG9jYXRpb25cIiwgbG9jYXRpb24pO1xuICAgICAgICB0aHJvdyByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJlc3VsdFR5cGUucmVkaXJlY3QsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIHJldmFsaWRhdGU6IHJlc3VsdC5oZWFkZXJzLmdldChcIlgtUmVtaXgtUmV2YWxpZGF0ZVwiKSAhPT0gbnVsbFxuICAgICAgfTtcbiAgICB9IC8vIEZvciBTU1Igc2luZ2xlLXJvdXRlIHJlcXVlc3RzLCB3ZSB3YW50IHRvIGhhbmQgUmVzcG9uc2VzIGJhY2sgZGlyZWN0bHlcbiAgICAvLyB3aXRob3V0IHVud3JhcHBpbmcuICBXZSBkbyB0aGlzIHdpdGggdGhlIFF1ZXJ5Um91dGVSZXNwb25zZSB3cmFwcGVyXG4gICAgLy8gaW50ZXJmYWNlIHNvIHdlIGNhbiBrbm93IHdoZXRoZXIgaXQgd2FzIHJldHVybmVkIG9yIHRocm93blxuXG5cbiAgICBpZiAoaXNSb3V0ZVJlcXVlc3QpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gICAgICB0aHJvdyB7XG4gICAgICAgIHR5cGU6IHJlc3VsdFR5cGUgfHwgUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgICByZXNwb25zZTogcmVzdWx0XG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCBkYXRhO1xuICAgIGxldCBjb250ZW50VHlwZSA9IHJlc3VsdC5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKTsgLy8gQ2hlY2sgYmV0d2VlbiB3b3JkIGJvdW5kYXJpZXMgaW5zdGVhZCBvZiBzdGFydHNXaXRoKCkgZHVlIHRvIHRoZSBsYXN0XG4gICAgLy8gcGFyYWdyYXBoIG9mIGh0dHBzOi8vaHR0cHdnLm9yZy9zcGVjcy9yZmM5MTEwLmh0bWwjZmllbGQuY29udGVudC10eXBlXG5cbiAgICBpZiAoY29udGVudFR5cGUgJiYgL1xcYmFwcGxpY2F0aW9uXFwvanNvblxcYi8udGVzdChjb250ZW50VHlwZSkpIHtcbiAgICAgIGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gYXdhaXQgcmVzdWx0LnRleHQoKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0VHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogcmVzdWx0VHlwZSxcbiAgICAgICAgZXJyb3I6IG5ldyBFcnJvclJlc3BvbnNlKHN0YXR1cywgcmVzdWx0LnN0YXR1c1RleHQsIGRhdGEpLFxuICAgICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogUmVzdWx0VHlwZS5kYXRhLFxuICAgICAgZGF0YSxcbiAgICAgIHN0YXR1c0NvZGU6IHJlc3VsdC5zdGF0dXMsXG4gICAgICBoZWFkZXJzOiByZXN1bHQuaGVhZGVyc1xuICAgIH07XG4gIH1cblxuICBpZiAocmVzdWx0VHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiByZXN1bHRUeXBlLFxuICAgICAgZXJyb3I6IHJlc3VsdFxuICAgIH07XG4gIH1cblxuICBpZiAocmVzdWx0IGluc3RhbmNlb2YgRGVmZXJyZWREYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFJlc3VsdFR5cGUuZGVmZXJyZWQsXG4gICAgICBkZWZlcnJlZERhdGE6IHJlc3VsdFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IFJlc3VsdFR5cGUuZGF0YSxcbiAgICBkYXRhOiByZXN1bHRcbiAgfTtcbn0gLy8gVXRpbGl0eSBtZXRob2QgZm9yIGNyZWF0aW5nIHRoZSBSZXF1ZXN0IGluc3RhbmNlcyBmb3IgbG9hZGVycy9hY3Rpb25zIGR1cmluZ1xuLy8gY2xpZW50LXNpZGUgbmF2aWdhdGlvbnMgYW5kIGZldGNoZXMuICBEdXJpbmcgU1NSIHdlIHdpbGwgYWx3YXlzIGhhdmUgYVxuLy8gUmVxdWVzdCBpbnN0YW5jZSBmcm9tIHRoZSBzdGF0aWMgaGFuZGxlciAocXVlcnkvcXVlcnlSb3V0ZSlcblxuXG5mdW5jdGlvbiBjcmVhdGVDbGllbnRTaWRlUmVxdWVzdChoaXN0b3J5LCBsb2NhdGlvbiwgc2lnbmFsLCBzdWJtaXNzaW9uKSB7XG4gIGxldCB1cmwgPSBoaXN0b3J5LmNyZWF0ZVVSTChzdHJpcEhhc2hGcm9tUGF0aChsb2NhdGlvbikpLnRvU3RyaW5nKCk7XG4gIGxldCBpbml0ID0ge1xuICAgIHNpZ25hbFxuICB9O1xuXG4gIGlmIChzdWJtaXNzaW9uICYmIGlzTXV0YXRpb25NZXRob2Qoc3VibWlzc2lvbi5mb3JtTWV0aG9kKSkge1xuICAgIGxldCB7XG4gICAgICBmb3JtTWV0aG9kLFxuICAgICAgZm9ybUVuY1R5cGUsXG4gICAgICBmb3JtRGF0YVxuICAgIH0gPSBzdWJtaXNzaW9uO1xuICAgIGluaXQubWV0aG9kID0gZm9ybU1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIGluaXQuYm9keSA9IGZvcm1FbmNUeXBlID09PSBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiID8gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMoZm9ybURhdGEpIDogZm9ybURhdGE7XG4gIH0gLy8gQ29udGVudC1UeXBlIGlzIGluZmVycmVkIChodHRwczovL2ZldGNoLnNwZWMud2hhdHdnLm9yZy8jZG9tLXJlcXVlc3QpXG5cblxuICByZXR1cm4gbmV3IFJlcXVlc3QodXJsLCBpbml0KTtcbn1cblxuZnVuY3Rpb24gY29udmVydEZvcm1EYXRhVG9TZWFyY2hQYXJhbXMoZm9ybURhdGEpIHtcbiAgbGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcblxuICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgZm9ybURhdGEuZW50cmllcygpKSB7XG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjY29udmVydGluZy1hbi1lbnRyeS1saXN0LXRvLWEtbGlzdC1vZi1uYW1lLXZhbHVlLXBhaXJzXG4gICAgc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlIGluc3RhbmNlb2YgRmlsZSA/IHZhbHVlLm5hbWUgOiB2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gc2VhcmNoUGFyYW1zO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzUm91dGVMb2FkZXJEYXRhKG1hdGNoZXMsIG1hdGNoZXNUb0xvYWQsIHJlc3VsdHMsIHBlbmRpbmdFcnJvciwgYWN0aXZlRGVmZXJyZWRzKSB7XG4gIC8vIEZpbGwgaW4gbG9hZGVyRGF0YS9lcnJvcnMgZnJvbSBvdXIgbG9hZGVyc1xuICBsZXQgbG9hZGVyRGF0YSA9IHt9O1xuICBsZXQgZXJyb3JzID0gbnVsbDtcbiAgbGV0IHN0YXR1c0NvZGU7XG4gIGxldCBmb3VuZEVycm9yID0gZmFsc2U7XG4gIGxldCBsb2FkZXJIZWFkZXJzID0ge307IC8vIFByb2Nlc3MgbG9hZGVyIHJlc3VsdHMgaW50byBzdGF0ZS5sb2FkZXJEYXRhL3N0YXRlLmVycm9yc1xuXG4gIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgIGxldCBpZCA9IG1hdGNoZXNUb0xvYWRbaW5kZXhdLnJvdXRlLmlkO1xuICAgIGludmFyaWFudCghaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpLCBcIkNhbm5vdCBoYW5kbGUgcmVkaXJlY3QgcmVzdWx0cyBpbiBwcm9jZXNzTG9hZGVyRGF0YVwiKTtcblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIExvb2sgdXB3YXJkcyBmcm9tIHRoZSBtYXRjaGVkIHJvdXRlIGZvciB0aGUgY2xvc2VzdCBhbmNlc3RvclxuICAgICAgLy8gZXJyb3IgYm91bmRhcnksIGRlZmF1bHRpbmcgdG8gdGhlIHJvb3QgbWF0Y2hcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShtYXRjaGVzLCBpZCk7XG4gICAgICBsZXQgZXJyb3IgPSByZXN1bHQuZXJyb3I7IC8vIElmIHdlIGhhdmUgYSBwZW5kaW5nIGFjdGlvbiBlcnJvciwgd2UgcmVwb3J0IGl0IGF0IHRoZSBoaWdoZXN0LXJvdXRlXG4gICAgICAvLyB0aGF0IHRocm93cyBhIGxvYWRlciBlcnJvciwgYW5kIHRoZW4gY2xlYXIgaXQgb3V0IHRvIGluZGljYXRlIHRoYXRcbiAgICAgIC8vIGl0IHdhcyBjb25zdW1lZFxuXG4gICAgICBpZiAocGVuZGluZ0Vycm9yKSB7XG4gICAgICAgIGVycm9yID0gT2JqZWN0LnZhbHVlcyhwZW5kaW5nRXJyb3IpWzBdO1xuICAgICAgICBwZW5kaW5nRXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGVycm9ycyA9IGVycm9ycyB8fCB7fTsgLy8gUHJlZmVyIGhpZ2hlciBlcnJvciB2YWx1ZXMgaWYgbG93ZXIgZXJyb3JzIGJ1YmJsZSB0byB0aGUgc2FtZSBib3VuZGFyeVxuXG4gICAgICBpZiAoZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdID09IG51bGwpIHtcbiAgICAgICAgZXJyb3JzW2JvdW5kYXJ5TWF0Y2gucm91dGUuaWRdID0gZXJyb3I7XG4gICAgICB9IC8vIENsZWFyIG91ciBhbnkgcHJpb3IgbG9hZGVyRGF0YSBmb3IgdGhlIHRocm93aW5nIHJvdXRlXG5cblxuICAgICAgbG9hZGVyRGF0YVtpZF0gPSB1bmRlZmluZWQ7IC8vIE9uY2Ugd2UgZmluZCBvdXIgZmlyc3QgKGhpZ2hlc3QpIGVycm9yLCB3ZSBzZXQgdGhlIHN0YXR1cyBjb2RlIGFuZFxuICAgICAgLy8gcHJldmVudCBkZWVwZXIgc3RhdHVzIGNvZGVzIGZyb20gb3ZlcnJpZGluZ1xuXG4gICAgICBpZiAoIWZvdW5kRXJyb3IpIHtcbiAgICAgICAgZm91bmRFcnJvciA9IHRydWU7XG4gICAgICAgIHN0YXR1c0NvZGUgPSBpc1JvdXRlRXJyb3JSZXNwb25zZShyZXN1bHQuZXJyb3IpID8gcmVzdWx0LmVycm9yLnN0YXR1cyA6IDUwMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlc3VsdC5oZWFkZXJzKSB7XG4gICAgICAgIGxvYWRlckhlYWRlcnNbaWRdID0gcmVzdWx0LmhlYWRlcnM7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgICAgYWN0aXZlRGVmZXJyZWRzLnNldChpZCwgcmVzdWx0LmRlZmVycmVkRGF0YSk7XG4gICAgICAgIGxvYWRlckRhdGFbaWRdID0gcmVzdWx0LmRlZmVycmVkRGF0YS5kYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9hZGVyRGF0YVtpZF0gPSByZXN1bHQuZGF0YTtcbiAgICAgIH0gLy8gRXJyb3Igc3RhdHVzIGNvZGVzIGFsd2F5cyBvdmVycmlkZSBzdWNjZXNzIHN0YXR1cyBjb2RlcywgYnV0IGlmIGFsbFxuICAgICAgLy8gbG9hZGVycyBhcmUgc3VjY2Vzc2Z1bCB3ZSB0YWtlIHRoZSBkZWVwZXN0IHN0YXR1cyBjb2RlLlxuXG5cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzQ29kZSAhPSBudWxsICYmIHJlc3VsdC5zdGF0dXNDb2RlICE9PSAyMDAgJiYgIWZvdW5kRXJyb3IpIHtcbiAgICAgICAgc3RhdHVzQ29kZSA9IHJlc3VsdC5zdGF0dXNDb2RlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0LmhlYWRlcnMpIHtcbiAgICAgICAgbG9hZGVySGVhZGVyc1tpZF0gPSByZXN1bHQuaGVhZGVycztcbiAgICAgIH1cbiAgICB9XG4gIH0pOyAvLyBJZiB3ZSBkaWRuJ3QgY29uc3VtZSB0aGUgcGVuZGluZyBhY3Rpb24gZXJyb3IgKGkuZS4sIGFsbCBsb2FkZXJzXG4gIC8vIHJlc29sdmVkKSwgdGhlbiBjb25zdW1lIGl0IGhlcmUuICBBbHNvIGNsZWFyIG91dCBhbnkgbG9hZGVyRGF0YSBmb3IgdGhlXG4gIC8vIHRocm93aW5nIHJvdXRlXG5cbiAgaWYgKHBlbmRpbmdFcnJvcikge1xuICAgIGVycm9ycyA9IHBlbmRpbmdFcnJvcjtcbiAgICBsb2FkZXJEYXRhW09iamVjdC5rZXlzKHBlbmRpbmdFcnJvcilbMF1dID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9ycyxcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlIHx8IDIwMCxcbiAgICBsb2FkZXJIZWFkZXJzXG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NMb2FkZXJEYXRhKHN0YXRlLCBtYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBwZW5kaW5nRXJyb3IsIHJldmFsaWRhdGluZ0ZldGNoZXJzLCBmZXRjaGVyUmVzdWx0cywgYWN0aXZlRGVmZXJyZWRzKSB7XG4gIGxldCB7XG4gICAgbG9hZGVyRGF0YSxcbiAgICBlcnJvcnNcbiAgfSA9IHByb2Nlc3NSb3V0ZUxvYWRlckRhdGEobWF0Y2hlcywgbWF0Y2hlc1RvTG9hZCwgcmVzdWx0cywgcGVuZGluZ0Vycm9yLCBhY3RpdmVEZWZlcnJlZHMpOyAvLyBQcm9jZXNzIHJlc3VsdHMgZnJvbSBvdXIgcmV2YWxpZGF0aW5nIGZldGNoZXJzXG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJldmFsaWRhdGluZ0ZldGNoZXJzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGxldCB7XG4gICAgICBrZXksXG4gICAgICBtYXRjaFxuICAgIH0gPSByZXZhbGlkYXRpbmdGZXRjaGVyc1tpbmRleF07XG4gICAgaW52YXJpYW50KGZldGNoZXJSZXN1bHRzICE9PSB1bmRlZmluZWQgJiYgZmV0Y2hlclJlc3VsdHNbaW5kZXhdICE9PSB1bmRlZmluZWQsIFwiRGlkIG5vdCBmaW5kIGNvcnJlc3BvbmRpbmcgZmV0Y2hlciByZXN1bHRcIik7XG4gICAgbGV0IHJlc3VsdCA9IGZldGNoZXJSZXN1bHRzW2luZGV4XTsgLy8gUHJvY2VzcyBmZXRjaGVyIG5vbi1yZWRpcmVjdCBlcnJvcnNcblxuICAgIGlmIChpc0Vycm9yUmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIGxldCBib3VuZGFyeU1hdGNoID0gZmluZE5lYXJlc3RCb3VuZGFyeShzdGF0ZS5tYXRjaGVzLCBtYXRjaC5yb3V0ZS5pZCk7XG5cbiAgICAgIGlmICghKGVycm9ycyAmJiBlcnJvcnNbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF0pKSB7XG4gICAgICAgIGVycm9ycyA9IF9leHRlbmRzKHt9LCBlcnJvcnMsIHtcbiAgICAgICAgICBbYm91bmRhcnlNYXRjaC5yb3V0ZS5pZF06IHJlc3VsdC5lcnJvclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgc3RhdGUuZmV0Y2hlcnMuZGVsZXRlKGtleSk7XG4gICAgfSBlbHNlIGlmIChpc1JlZGlyZWN0UmVzdWx0KHJlc3VsdCkpIHtcbiAgICAgIC8vIFNob3VsZCBuZXZlciBnZXQgaGVyZSwgcmVkaXJlY3RzIHNob3VsZCBnZXQgcHJvY2Vzc2VkIGFib3ZlLCBidXQgd2VcbiAgICAgIC8vIGtlZXAgdGhpcyB0byB0eXBlIG5hcnJvdyB0byBhIHN1Y2Nlc3MgcmVzdWx0IGluIHRoZSBlbHNlXG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiVW5oYW5kbGVkIGZldGNoZXIgcmV2YWxpZGF0aW9uIHJlZGlyZWN0XCIpO1xuICAgIH0gZWxzZSBpZiAoaXNEZWZlcnJlZFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICAvLyBTaG91bGQgbmV2ZXIgZ2V0IGhlcmUsIGRlZmVycmVkIGRhdGEgc2hvdWxkIGJlIGF3YWl0ZWQgZm9yIGZldGNoZXJzXG4gICAgICAvLyBpbiByZXNvbHZlRGVmZXJyZWRSZXN1bHRzXG4gICAgICBpbnZhcmlhbnQoZmFsc2UsIFwiVW5oYW5kbGVkIGZldGNoZXIgZGVmZXJyZWQgZGF0YVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGRvbmVGZXRjaGVyID0ge1xuICAgICAgICBzdGF0ZTogXCJpZGxlXCIsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxuICAgICAgICBmb3JtTWV0aG9kOiB1bmRlZmluZWQsXG4gICAgICAgIGZvcm1BY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybUVuY1R5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgZm9ybURhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgXCIgX2hhc0ZldGNoZXJEb25lQW55dGhpbmcgXCI6IHRydWVcbiAgICAgIH07XG4gICAgICBzdGF0ZS5mZXRjaGVycy5zZXQoa2V5LCBkb25lRmV0Y2hlcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsb2FkZXJEYXRhLFxuICAgIGVycm9yc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxvYWRlckRhdGEobG9hZGVyRGF0YSwgbmV3TG9hZGVyRGF0YSwgbWF0Y2hlcywgZXJyb3JzKSB7XG4gIGxldCBtZXJnZWRMb2FkZXJEYXRhID0gX2V4dGVuZHMoe30sIG5ld0xvYWRlckRhdGEpO1xuXG4gIGZvciAobGV0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICBsZXQgaWQgPSBtYXRjaC5yb3V0ZS5pZDtcblxuICAgIGlmIChuZXdMb2FkZXJEYXRhLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgICAgaWYgKG5ld0xvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWVyZ2VkTG9hZGVyRGF0YVtpZF0gPSBuZXdMb2FkZXJEYXRhW2lkXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxvYWRlckRhdGFbaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1lcmdlZExvYWRlckRhdGFbaWRdID0gbG9hZGVyRGF0YVtpZF07XG4gICAgfVxuXG4gICAgaWYgKGVycm9ycyAmJiBlcnJvcnMuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgICAvLyBEb24ndCBrZWVwIGFueSBsb2FkZXIgZGF0YSBiZWxvdyB0aGUgYm91bmRhcnlcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZWRMb2FkZXJEYXRhO1xufSAvLyBGaW5kIHRoZSBuZWFyZXN0IGVycm9yIGJvdW5kYXJ5LCBsb29raW5nIHVwd2FyZHMgZnJvbSB0aGUgbGVhZiByb3V0ZSAob3IgdGhlXG4vLyByb3V0ZSBzcGVjaWZpZWQgYnkgcm91dGVJZCkgZm9yIHRoZSBjbG9zZXN0IGFuY2VzdG9yIGVycm9yIGJvdW5kYXJ5LFxuLy8gZGVmYXVsdGluZyB0byB0aGUgcm9vdCBtYXRjaFxuXG5cbmZ1bmN0aW9uIGZpbmROZWFyZXN0Qm91bmRhcnkobWF0Y2hlcywgcm91dGVJZCkge1xuICBsZXQgZWxpZ2libGVNYXRjaGVzID0gcm91dGVJZCA/IG1hdGNoZXMuc2xpY2UoMCwgbWF0Y2hlcy5maW5kSW5kZXgobSA9PiBtLnJvdXRlLmlkID09PSByb3V0ZUlkKSArIDEpIDogWy4uLm1hdGNoZXNdO1xuICByZXR1cm4gZWxpZ2libGVNYXRjaGVzLnJldmVyc2UoKS5maW5kKG0gPT4gbS5yb3V0ZS5oYXNFcnJvckJvdW5kYXJ5ID09PSB0cnVlKSB8fCBtYXRjaGVzWzBdO1xufVxuXG5mdW5jdGlvbiBnZXRTaG9ydENpcmN1aXRNYXRjaGVzKHJvdXRlcykge1xuICAvLyBQcmVmZXIgYSByb290IGxheW91dCByb3V0ZSBpZiBwcmVzZW50LCBvdGhlcndpc2Ugc2hpbSBpbiBhIHJvdXRlIG9iamVjdFxuICBsZXQgcm91dGUgPSByb3V0ZXMuZmluZChyID0+IHIuaW5kZXggfHwgIXIucGF0aCB8fCByLnBhdGggPT09IFwiL1wiKSB8fCB7XG4gICAgaWQ6IFwiX19zaGltLWVycm9yLXJvdXRlX19cIlxuICB9O1xuICByZXR1cm4ge1xuICAgIG1hdGNoZXM6IFt7XG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgcGF0aG5hbWU6IFwiXCIsXG4gICAgICBwYXRobmFtZUJhc2U6IFwiXCIsXG4gICAgICByb3V0ZVxuICAgIH1dLFxuICAgIHJvdXRlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEludGVybmFsUm91dGVyRXJyb3Ioc3RhdHVzLCBfdGVtcDQpIHtcbiAgbGV0IHtcbiAgICBwYXRobmFtZSxcbiAgICByb3V0ZUlkLFxuICAgIG1ldGhvZCxcbiAgICB0eXBlXG4gIH0gPSBfdGVtcDQgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA0O1xuICBsZXQgc3RhdHVzVGV4dCA9IFwiVW5rbm93biBTZXJ2ZXIgRXJyb3JcIjtcbiAgbGV0IGVycm9yTWVzc2FnZSA9IFwiVW5rbm93biBAcmVtaXgtcnVuL3JvdXRlciBlcnJvclwiO1xuXG4gIGlmIChzdGF0dXMgPT09IDQwMCkge1xuICAgIHN0YXR1c1RleHQgPSBcIkJhZCBSZXF1ZXN0XCI7XG5cbiAgICBpZiAobWV0aG9kICYmIHBhdGhuYW1lICYmIHJvdXRlSWQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiWW91IG1hZGUgYSBcIiArIG1ldGhvZCArIFwiIHJlcXVlc3QgdG8gXFxcIlwiICsgcGF0aG5hbWUgKyBcIlxcXCIgYnV0IFwiICsgKFwiZGlkIG5vdCBwcm92aWRlIGEgYGxvYWRlcmAgZm9yIHJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIsIFwiKSArIFwic28gdGhlcmUgaXMgbm8gd2F5IHRvIGhhbmRsZSB0aGUgcmVxdWVzdC5cIjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiZGVmZXItYWN0aW9uXCIpIHtcbiAgICAgIGVycm9yTWVzc2FnZSA9IFwiZGVmZXIoKSBpcyBub3Qgc3VwcG9ydGVkIGluIGFjdGlvbnNcIjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDMpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJGb3JiaWRkZW5cIjtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIlJvdXRlIFxcXCJcIiArIHJvdXRlSWQgKyBcIlxcXCIgZG9lcyBub3QgbWF0Y2ggVVJMIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiXCI7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDQpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJOb3QgRm91bmRcIjtcbiAgICBlcnJvck1lc3NhZ2UgPSBcIk5vIHJvdXRlIG1hdGNoZXMgVVJMIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiXCI7XG4gIH0gZWxzZSBpZiAoc3RhdHVzID09PSA0MDUpIHtcbiAgICBzdGF0dXNUZXh0ID0gXCJNZXRob2QgTm90IEFsbG93ZWRcIjtcblxuICAgIGlmIChtZXRob2QgJiYgcGF0aG5hbWUgJiYgcm91dGVJZCkge1xuICAgICAgZXJyb3JNZXNzYWdlID0gXCJZb3UgbWFkZSBhIFwiICsgbWV0aG9kLnRvVXBwZXJDYXNlKCkgKyBcIiByZXF1ZXN0IHRvIFxcXCJcIiArIHBhdGhuYW1lICsgXCJcXFwiIGJ1dCBcIiArIChcImRpZCBub3QgcHJvdmlkZSBhbiBgYWN0aW9uYCBmb3Igcm91dGUgXFxcIlwiICsgcm91dGVJZCArIFwiXFxcIiwgXCIpICsgXCJzbyB0aGVyZSBpcyBubyB3YXkgdG8gaGFuZGxlIHRoZSByZXF1ZXN0LlwiO1xuICAgIH0gZWxzZSBpZiAobWV0aG9kKSB7XG4gICAgICBlcnJvck1lc3NhZ2UgPSBcIkludmFsaWQgcmVxdWVzdCBtZXRob2QgXFxcIlwiICsgbWV0aG9kLnRvVXBwZXJDYXNlKCkgKyBcIlxcXCJcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IEVycm9yUmVzcG9uc2Uoc3RhdHVzIHx8IDUwMCwgc3RhdHVzVGV4dCwgbmV3IEVycm9yKGVycm9yTWVzc2FnZSksIHRydWUpO1xufSAvLyBGaW5kIGFueSByZXR1cm5lZCByZWRpcmVjdCBlcnJvcnMsIHN0YXJ0aW5nIGZyb20gdGhlIGxvd2VzdCBtYXRjaFxuXG5cbmZ1bmN0aW9uIGZpbmRSZWRpcmVjdChyZXN1bHRzKSB7XG4gIGZvciAobGV0IGkgPSByZXN1bHRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbaV07XG5cbiAgICBpZiAoaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcEhhc2hGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXJzZWRQYXRoID0gdHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgocGF0aCkgOiBwYXRoO1xuICByZXR1cm4gY3JlYXRlUGF0aChfZXh0ZW5kcyh7fSwgcGFyc2VkUGF0aCwge1xuICAgIGhhc2g6IFwiXCJcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBpc0hhc2hDaGFuZ2VPbmx5KGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmIGEuaGFzaCAhPT0gYi5oYXNoO1xufVxuXG5mdW5jdGlvbiBpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0LnR5cGUgPT09IFJlc3VsdFR5cGUuZGVmZXJyZWQ7XG59XG5cbmZ1bmN0aW9uIGlzRXJyb3JSZXN1bHQocmVzdWx0KSB7XG4gIHJldHVybiByZXN1bHQudHlwZSA9PT0gUmVzdWx0VHlwZS5lcnJvcjtcbn1cblxuZnVuY3Rpb24gaXNSZWRpcmVjdFJlc3VsdChyZXN1bHQpIHtcbiAgcmV0dXJuIChyZXN1bHQgJiYgcmVzdWx0LnR5cGUpID09PSBSZXN1bHRUeXBlLnJlZGlyZWN0O1xufVxuXG5mdW5jdGlvbiBpc1Jlc3BvbnNlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZS5zdGF0dXMgPT09IFwibnVtYmVyXCIgJiYgdHlwZW9mIHZhbHVlLnN0YXR1c1RleHQgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlLmhlYWRlcnMgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLmJvZHkgIT09IFwidW5kZWZpbmVkXCI7XG59XG5cbmZ1bmN0aW9uIGlzUmVkaXJlY3RSZXNwb25zZShyZXN1bHQpIHtcbiAgaWYgKCFpc1Jlc3BvbnNlKHJlc3VsdCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgc3RhdHVzID0gcmVzdWx0LnN0YXR1cztcbiAgbGV0IGxvY2F0aW9uID0gcmVzdWx0LmhlYWRlcnMuZ2V0KFwiTG9jYXRpb25cIik7XG4gIHJldHVybiBzdGF0dXMgPj0gMzAwICYmIHN0YXR1cyA8PSAzOTkgJiYgbG9jYXRpb24gIT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNRdWVyeVJvdXRlUmVzcG9uc2Uob2JqKSB7XG4gIHJldHVybiBvYmogJiYgaXNSZXNwb25zZShvYmoucmVzcG9uc2UpICYmIChvYmoudHlwZSA9PT0gUmVzdWx0VHlwZS5kYXRhIHx8IFJlc3VsdFR5cGUuZXJyb3IpO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkTWV0aG9kKG1ldGhvZCkge1xuICByZXR1cm4gdmFsaWRSZXF1ZXN0TWV0aG9kcy5oYXMobWV0aG9kKTtcbn1cblxuZnVuY3Rpb24gaXNNdXRhdGlvbk1ldGhvZChtZXRob2QpIHtcbiAgcmV0dXJuIHZhbGlkTXV0YXRpb25NZXRob2RzLmhhcyhtZXRob2QpO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZXNvbHZlRGVmZXJyZWRSZXN1bHRzKGN1cnJlbnRNYXRjaGVzLCBtYXRjaGVzVG9Mb2FkLCByZXN1bHRzLCBzaWduYWwsIGlzRmV0Y2hlciwgY3VycmVudExvYWRlckRhdGEpIHtcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc3VsdHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgbGV0IHJlc3VsdCA9IHJlc3VsdHNbaW5kZXhdO1xuICAgIGxldCBtYXRjaCA9IG1hdGNoZXNUb0xvYWRbaW5kZXhdO1xuICAgIGxldCBjdXJyZW50TWF0Y2ggPSBjdXJyZW50TWF0Y2hlcy5maW5kKG0gPT4gbS5yb3V0ZS5pZCA9PT0gbWF0Y2gucm91dGUuaWQpO1xuICAgIGxldCBpc1JldmFsaWRhdGluZ0xvYWRlciA9IGN1cnJlbnRNYXRjaCAhPSBudWxsICYmICFpc05ld1JvdXRlSW5zdGFuY2UoY3VycmVudE1hdGNoLCBtYXRjaCkgJiYgKGN1cnJlbnRMb2FkZXJEYXRhICYmIGN1cnJlbnRMb2FkZXJEYXRhW21hdGNoLnJvdXRlLmlkXSkgIT09IHVuZGVmaW5lZDtcblxuICAgIGlmIChpc0RlZmVycmVkUmVzdWx0KHJlc3VsdCkgJiYgKGlzRmV0Y2hlciB8fCBpc1JldmFsaWRhdGluZ0xvYWRlcikpIHtcbiAgICAgIC8vIE5vdGU6IHdlIGRvIG5vdCBoYXZlIHRvIHRvdWNoIGFjdGl2ZURlZmVycmVkcyBoZXJlIHNpbmNlIHdlIHJhY2UgdGhlbVxuICAgICAgLy8gYWdhaW5zdCB0aGUgc2lnbmFsIGluIHJlc29sdmVEZWZlcnJlZERhdGEgYW5kIHRoZXknbGwgZ2V0IGFib3J0ZWRcbiAgICAgIC8vIHRoZXJlIGlmIG5lZWRlZFxuICAgICAgYXdhaXQgcmVzb2x2ZURlZmVycmVkRGF0YShyZXN1bHQsIHNpZ25hbCwgaXNGZXRjaGVyKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHJlc3VsdCB8fCByZXN1bHRzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVEZWZlcnJlZERhdGEocmVzdWx0LCBzaWduYWwsIHVud3JhcCkge1xuICBpZiAodW53cmFwID09PSB2b2lkIDApIHtcbiAgICB1bndyYXAgPSBmYWxzZTtcbiAgfVxuXG4gIGxldCBhYm9ydGVkID0gYXdhaXQgcmVzdWx0LmRlZmVycmVkRGF0YS5yZXNvbHZlRGF0YShzaWduYWwpO1xuXG4gIGlmIChhYm9ydGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHVud3JhcCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgICAgIGRhdGE6IHJlc3VsdC5kZWZlcnJlZERhdGEudW53cmFwcGVkRGF0YVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBIYW5kbGUgYW55IFRyYWNrZWRQcm9taXNlLl9lcnJvciB2YWx1ZXMgZW5jb3VudGVyZWQgd2hpbGUgdW53cmFwcGluZ1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogUmVzdWx0VHlwZS5lcnJvcixcbiAgICAgICAgZXJyb3I6IGVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSZXN1bHRUeXBlLmRhdGEsXG4gICAgZGF0YTogcmVzdWx0LmRlZmVycmVkRGF0YS5kYXRhXG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhc05ha2VkSW5kZXhRdWVyeShzZWFyY2gpIHtcbiAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKS5nZXRBbGwoXCJpbmRleFwiKS5zb21lKHYgPT4gdiA9PT0gXCJcIik7XG59IC8vIE5vdGU6IFRoaXMgc2hvdWxkIG1hdGNoIHRoZSBmb3JtYXQgZXhwb3J0ZWQgYnkgdXNlTWF0Y2hlcywgc28gaWYgeW91IGNoYW5nZVxuLy8gdGhpcyBwbGVhc2UgYWxzbyBjaGFuZ2UgdGhhdCA6KSAgRXZlbnR1YWxseSB3ZSdsbCBEUlkgdGhpcyB1cFxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZU1hdGNoZXNNYXRjaChtYXRjaCwgbG9hZGVyRGF0YSkge1xuICBsZXQge1xuICAgIHJvdXRlLFxuICAgIHBhdGhuYW1lLFxuICAgIHBhcmFtc1xuICB9ID0gbWF0Y2g7XG4gIHJldHVybiB7XG4gICAgaWQ6IHJvdXRlLmlkLFxuICAgIHBhdGhuYW1lLFxuICAgIHBhcmFtcyxcbiAgICBkYXRhOiBsb2FkZXJEYXRhW3JvdXRlLmlkXSxcbiAgICBoYW5kbGU6IHJvdXRlLmhhbmRsZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXRNYXRjaChtYXRjaGVzLCBsb2NhdGlvbikge1xuICBsZXQgc2VhcmNoID0gdHlwZW9mIGxvY2F0aW9uID09PSBcInN0cmluZ1wiID8gcGFyc2VQYXRoKGxvY2F0aW9uKS5zZWFyY2ggOiBsb2NhdGlvbi5zZWFyY2g7XG5cbiAgaWYgKG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXS5yb3V0ZS5pbmRleCAmJiBoYXNOYWtlZEluZGV4UXVlcnkoc2VhcmNoIHx8IFwiXCIpKSB7XG4gICAgLy8gUmV0dXJuIHRoZSBsZWFmIGluZGV4IHJvdXRlIHdoZW4gaW5kZXggaXMgcHJlc2VudFxuICAgIHJldHVybiBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV07XG4gIH0gLy8gT3RoZXJ3aXNlIGdyYWIgdGhlIGRlZXBlc3QgXCJwYXRoIGNvbnRyaWJ1dGluZ1wiIG1hdGNoIChpZ25vcmluZyBpbmRleCBhbmRcbiAgLy8gcGF0aGxlc3MgbGF5b3V0IHJvdXRlcylcblxuXG4gIGxldCBwYXRoTWF0Y2hlcyA9IGdldFBhdGhDb250cmlidXRpbmdNYXRjaGVzKG1hdGNoZXMpO1xuICByZXR1cm4gcGF0aE1hdGNoZXNbcGF0aE1hdGNoZXMubGVuZ3RoIC0gMV07XG59IC8vI2VuZHJlZ2lvblxuXG5leHBvcnQgeyBBYm9ydGVkRGVmZXJyZWRFcnJvciwgQWN0aW9uLCBFcnJvclJlc3BvbnNlLCBJRExFX0JMT0NLRVIsIElETEVfRkVUQ0hFUiwgSURMRV9OQVZJR0FUSU9OLCBVTlNBRkVfREVGRVJSRURfU1lNQk9MLCBEZWZlcnJlZERhdGEgYXMgVU5TQUZFX0RlZmVycmVkRGF0YSwgY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcyBhcyBVTlNBRkVfY29udmVydFJvdXRlc1RvRGF0YVJvdXRlcywgZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMgYXMgVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzLCBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlSGFzaEhpc3RvcnksIGNyZWF0ZU1lbW9yeUhpc3RvcnksIGNyZWF0ZVBhdGgsIGNyZWF0ZVJvdXRlciwgY3JlYXRlU3RhdGljSGFuZGxlciwgZGVmZXIsIGdlbmVyYXRlUGF0aCwgZ2V0U3RhdGljQ29udGV4dEZyb21FcnJvciwgZ2V0VG9QYXRobmFtZSwgaW52YXJpYW50LCBpc1JvdXRlRXJyb3JSZXNwb25zZSwgam9pblBhdGhzLCBqc29uLCBtYXRjaFBhdGgsIG1hdGNoUm91dGVzLCBub3JtYWxpemVQYXRobmFtZSwgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVzb2x2ZVBhdGgsIHJlc29sdmVUbywgc3RyaXBCYXNlbmFtZSwgd2FybmluZyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cblxuZXhwb3J0IGNvbnN0IEFkZENhciA9ICh7IGFkZCB9KSA9PiB7XG5cbiAgICBjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgIGJyYW5kOiBcIlwiLFxuICAgICAgICB0eXBlOiBcIlwiLFxuICAgICAgICBocDogXCJcIlxuICAgIH0pXG5cbiAgICBjb25zdCB7IG5hbWUsIGJyYW5kLCB0eXBlLCBocCB9ID0gdmFsdWVzO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBicmFuZCxcbiAgICAgICAgICAgIGVuZ2luZToge1xuICAgICAgICAgICAgICAgIGhwLFxuICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgIHNldFZhbHVlcyhwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBuYW1lPVwibmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBCcmFuZFxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17YnJhbmR9IG5hbWU9XCJicmFuZFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBUeXBlXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt0eXBlfSBuYW1lPVwidHlwZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBIUFxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aHB9IG5hbWU9XCJocFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT17XCJzdWJtaXRcIn0+RG9kYWo8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge0xpbmssIE91dGxldCwgdXNlTmF2aWdhdGV9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0FkZENhcn0gZnJvbSBcIi4vQWRkQ2FyXCI7XG5cbmV4cG9ydCBjb25zdCBVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwNS9jYXJzXCI7XG5cbmV4cG9ydCBjb25zdCBDYXJzTWFuYWdlciA9ICgpID0+IHtcbiAgICBjb25zdCBbY2Fycywgc2V0Q2Fyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goVVJMKVxuICAgICAgICAgICAgLnRoZW4ociA9PiByLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gc2V0Q2FycyhkYXRhKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGlkID0+ICgpID0+IHtcbiAgICAgICAgZmV0Y2goYCR7VVJMfS8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIlxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0Q2FycyhwcmV2ID0+IHByZXYuZmlsdGVyKGVsID0+IGVsLmlkICE9PSBpZCkpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUFkZCA9IGNhciA9PiB7XG4gICAgICAgIGZldGNoKFVSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhcilcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHIgPT4gci5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHNldENhcnMocHJldiA9PiBbLi4ucHJldiwgZGF0YV0pKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgIH1cblxuICAgIGNvbnN0IGdvVG9EZXRhaWxzID0gaWQgPT4gKCkgPT4ge1xuICAgICAgICBuYXZpZ2F0ZShgLyR7aWR9L2RldGFpbHNgKVxuICAgIH1cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxBZGRDYXIgYWRkPXtoYW5kbGVBZGR9IC8+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2NhcnMubWFwKCh7aWQsIG5hbWUsIGJyYW5kLCBlbmdpbmU6IHt0eXBlLCBocH19KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntuYW1lfTwvYj4gLSA8aT57YnJhbmR9PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzbWFsbD57dHlwZX0gfCB7aHB9PC9zbWFsbD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZShpZCl9PlNwcnplZGFqPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z29Ub0RldGFpbHMoaWQpfT5EZXRhaWxzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7VVJMfSBmcm9tIFwiLi4vLi4vLi4vMDdfRHppZW5fNC8wM19KU09OX1NlcnZlci8wMTAxX1phZGFuaWUvanMvQ2Fyc01hbmFnZXJcIjtcblxuY29uc3QgQWRkVXNlciA9ICh7YWRkfSkgPT57XG5cblxuICAgIGNvbnN0IFt2YWx1ZXMsIHNldFZhbHVlc10gPSB1c2VTdGF0ZSh7XG5cbiAgICAgICAgaWQ6IFwiXCIsXG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIHN1cm5hbWU6IFwiXCIsXG4gICAgICAgIGFnZTogXCJcIixcbiAgICAgICAgY2l0eTogXCJcIixcbiAgICAgICAgZ2VuZGVyOiBcIlwiXG4gICAgfSlcblxuICAgIGNvbnN0IHsgaWQsIG5hbWUsIHN1cm5hbWUsIGFnZSwgY2l0eSwgZ2VuZGVyIH0gPSB2YWx1ZXM7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGQoe1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VybmFtZSxcbiAgICAgICAgICAgIGFnZSxcbiAgICAgICAgICAgIGNpdHksXG4gICAgICAgICAgICBnZW5kZXJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSB9KSA9PiB7XG4gICAgICAgIHNldFZhbHVlcyhwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpZH0gbmFtZT1cImlkXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG5hbWU9XCJuYW1lXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIEJyYW5kXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtzdXJuYW1lfSBuYW1lPVwic3VybmFtZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9ICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICBUeXBlXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXthZ2V9IG5hbWU9XCJhZ2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgSFBcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2NpdHl9IG5hbWU9XCJjaXR5XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gIC8+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIEhQXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtnZW5kZXJ9IG5hbWU9XCJnZW5kZXJcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9e1wic3VibWl0XCJ9PkRvZGFqPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFVzZXI7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFkZFVzZXIgZnJvbSBcIi4vQWRkVXNlclwiO1xuY29uc3QgVXNlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICAgLy8gY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICBjb25zdCBoYW5kbGVBZGQgPSAoZGF0KSA9PiB7XG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJzXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXQpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBzZXREYXRhKHByZXYgPT4gWy4uLnByZXYsIC4uLmRhdGFdKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDA1L3VzZXJzXCIpXG4gICAgICAgICAgICAudGhlbihyID0+IHIuanNvbigpKVxuICAgICAgICAgICAgIC50aGVuKHJyID0+IHNldERhdGEocHJldiA9PiBbLi4ucHJldiwgLi4ucnJdKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QWRkVXNlciBhZGQ9e2hhbmRsZUFkZH0+PC9BZGRVc2VyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcChlbCA9PiA8bGk+XG4gICAgICAgICAgICAgICAgICAgIHtlbC5pZH0ge2VsLm5hbWV9IHtlbC5zdXJuYW1lfSB7ZWwuYWdlfSB7ZWwuY2l0eX0ge2VsLmdlbmRlcn1cbiAgICAgICAgICAgICAgICA8L2xpPil9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBVc2VyczsiLCIvKipcbiAqIFJlYWN0IFJvdXRlciB2Ni44LjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuaW1wb3J0IHsgaW52YXJpYW50LCBqb2luUGF0aHMsIG1hdGNoUGF0aCwgVU5TQUZFX2dldFBhdGhDb250cmlidXRpbmdNYXRjaGVzLCB3YXJuaW5nLCByZXNvbHZlVG8sIHBhcnNlUGF0aCwgbWF0Y2hSb3V0ZXMsIEFjdGlvbiwgaXNSb3V0ZUVycm9yUmVzcG9uc2UsIGNyZWF0ZU1lbW9yeUhpc3RvcnksIHN0cmlwQmFzZW5hbWUsIEFib3J0ZWREZWZlcnJlZEVycm9yLCBjcmVhdGVSb3V0ZXIgfSBmcm9tICdAcmVtaXgtcnVuL3JvdXRlcic7XG5leHBvcnQgeyBBYm9ydGVkRGVmZXJyZWRFcnJvciwgQWN0aW9uIGFzIE5hdmlnYXRpb25UeXBlLCBjcmVhdGVQYXRoLCBkZWZlciwgZ2VuZXJhdGVQYXRoLCBpc1JvdXRlRXJyb3JSZXNwb25zZSwganNvbiwgbWF0Y2hQYXRoLCBtYXRjaFJvdXRlcywgcGFyc2VQYXRoLCByZWRpcmVjdCwgcmVzb2x2ZVBhdGggfSBmcm9tICdAcmVtaXgtcnVuL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuLyoqXG4gKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAqL1xuXG5mdW5jdGlvbiBpc1BvbHlmaWxsKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG5jb25zdCBpcyA9IHR5cGVvZiBPYmplY3QuaXMgPT09IFwiZnVuY3Rpb25cIiA/IE9iamVjdC5pcyA6IGlzUG9seWZpbGw7IC8vIEludGVudGlvbmFsbHkgbm90IHVzaW5nIG5hbWVkIGltcG9ydHMgYmVjYXVzZSBSb2xsdXAgdXNlcyBkeW5hbWljXG4vLyBkaXNwYXRjaCBmb3IgQ29tbW9uSlMgaW50ZXJvcCBuYW1lZCBpbXBvcnRzLlxuXG5jb25zdCB7XG4gIHVzZVN0YXRlLFxuICB1c2VFZmZlY3QsXG4gIHVzZUxheW91dEVmZmVjdCxcbiAgdXNlRGVidWdWYWx1ZVxufSA9IFJlYWN0O1xubGV0IGRpZFdhcm5PbGQxOEFscGhhID0gZmFsc2U7XG5sZXQgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSBmYWxzZTsgLy8gRGlzY2xhaW1lcjogVGhpcyBzaGltIGJyZWFrcyBtYW55IG9mIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3Ncbi8vIGJlY2F1c2Ugb2YgYSB2ZXJ5IHBhcnRpY3VsYXIgc2V0IG9mIGltcGxlbWVudGF0aW9uIGRldGFpbHMgYW5kIGFzc3VtcHRpb25zXG4vLyAtLSBjaGFuZ2UgYW55IG9uZSBvZiB0aGVtIGFuZCBpdCB3aWxsIGJyZWFrLiBUaGUgbW9zdCBpbXBvcnRhbnQgYXNzdW1wdGlvblxuLy8gaXMgdGhhdCB1cGRhdGVzIGFyZSBhbHdheXMgc3luY2hyb25vdXMsIGJlY2F1c2UgY29uY3VycmVudCByZW5kZXJpbmcgaXNcbi8vIG9ubHkgYXZhaWxhYmxlIGluIHZlcnNpb25zIG9mIFJlYWN0IHRoYXQgYWxzbyBoYXZlIGEgYnVpbHQtaW5cbi8vIHVzZVN5bmNFeHRlcm5hbFN0b3JlIEFQSS4gQW5kIHdlIG9ubHkgdXNlIHRoaXMgc2hpbSB3aGVuIHRoZSBidWlsdC1pbiBBUElcbi8vIGRvZXMgbm90IGV4aXN0LlxuLy9cbi8vIERvIG5vdCBhc3N1bWUgdGhhdCB0aGUgY2xldmVyIGhhY2tzIHVzZWQgYnkgdGhpcyBob29rIGFsc28gd29yayBpbiBnZW5lcmFsLlxuLy8gVGhlIHBvaW50IG9mIHRoaXMgc2hpbSBpcyB0byByZXBsYWNlIHRoZSBuZWVkIGZvciBoYWNrcyBieSBvdGhlciBsaWJyYXJpZXMuXG5cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDIoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuLy8gUmVhY3QgZG8gbm90IGV4cG9zZSBhIHdheSB0byBjaGVjayBpZiB3ZSdyZSBoeWRyYXRpbmcuIFNvIHVzZXJzIG9mIHRoZSBzaGltXG4vLyB3aWxsIG5lZWQgdG8gdHJhY2sgdGhhdCB0aGVtc2VsdmVzIGFuZCByZXR1cm4gdGhlIGNvcnJlY3QgdmFsdWVcbi8vIGZyb20gYGdldFNuYXBzaG90YC5cbmdldFNlcnZlclNuYXBzaG90KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWRpZFdhcm5PbGQxOEFscGhhKSB7XG4gICAgICBpZiAoXCJzdGFydFRyYW5zaXRpb25cIiBpbiBSZWFjdCkge1xuICAgICAgICBkaWRXYXJuT2xkMThBbHBoYSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgYXJlIHVzaW5nIGFuIG91dGRhdGVkLCBwcmUtcmVsZWFzZSBhbHBoYSBvZiBSZWFjdCAxOCB0aGF0IFwiICsgXCJkb2VzIG5vdCBzdXBwb3J0IHVzZVN5bmNFeHRlcm5hbFN0b3JlLiBUaGUgXCIgKyBcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIHNoaW0gd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuIFVwZ3JhZGUgXCIgKyBcInRvIGEgbmV3ZXIgcHJlLXJlbGVhc2UuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBSZWFkIHRoZSBjdXJyZW50IHNuYXBzaG90IGZyb20gdGhlIHN0b3JlIG9uIGV2ZXJ5IHJlbmRlci4gQWdhaW4sIHRoaXNcbiAgLy8gYnJlYWtzIHRoZSBydWxlcyBvZiBSZWFjdCwgYW5kIG9ubHkgd29ya3MgaGVyZSBiZWNhdXNlIG9mIHNwZWNpZmljXG4gIC8vIGltcGxlbWVudGF0aW9uIGRldGFpbHMsIG1vc3QgaW1wb3J0YW50bHkgdGhhdCB1cGRhdGVzIGFyZVxuICAvLyBhbHdheXMgc3luY2hyb25vdXMuXG5cblxuICBjb25zdCB2YWx1ZSA9IGdldFNuYXBzaG90KCk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGlmICghZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QpIHtcbiAgICAgIGNvbnN0IGNhY2hlZFZhbHVlID0gZ2V0U25hcHNob3QoKTtcblxuICAgICAgaWYgKCFpcyh2YWx1ZSwgY2FjaGVkVmFsdWUpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcmVzdWx0IG9mIGdldFNuYXBzaG90IHNob3VsZCBiZSBjYWNoZWQgdG8gYXZvaWQgYW4gaW5maW5pdGUgbG9vcFwiKTtcbiAgICAgICAgZGlkV2FyblVuY2FjaGVkR2V0U25hcHNob3QgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBCZWNhdXNlIHVwZGF0ZXMgYXJlIHN5bmNocm9ub3VzLCB3ZSBkb24ndCBxdWV1ZSB0aGVtLiBJbnN0ZWFkIHdlIGZvcmNlIGFcbiAgLy8gcmUtcmVuZGVyIHdoZW5ldmVyIHRoZSBzdWJzY3JpYmVkIHN0YXRlIGNoYW5nZXMgYnkgdXBkYXRpbmcgYW4gc29tZVxuICAvLyBhcmJpdHJhcnkgdXNlU3RhdGUgaG9vay4gVGhlbiwgZHVyaW5nIHJlbmRlciwgd2UgY2FsbCBnZXRTbmFwc2hvdCB0byByZWFkXG4gIC8vIHRoZSBjdXJyZW50IHZhbHVlLlxuICAvL1xuICAvLyBCZWNhdXNlIHdlIGRvbid0IGFjdHVhbGx5IHVzZSB0aGUgc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHVzZVN0YXRlIGhvb2ssIHdlXG4gIC8vIGNhbiBzYXZlIGEgYml0IG9mIG1lbW9yeSBieSBzdG9yaW5nIG90aGVyIHN0dWZmIGluIHRoYXQgc2xvdC5cbiAgLy9cbiAgLy8gVG8gaW1wbGVtZW50IHRoZSBlYXJseSBiYWlsb3V0LCB3ZSBuZWVkIHRvIHRyYWNrIHNvbWUgdGhpbmdzIG9uIGEgbXV0YWJsZVxuICAvLyBvYmplY3QuIFVzdWFsbHksIHdlIHdvdWxkIHB1dCB0aGF0IGluIGEgdXNlUmVmIGhvb2ssIGJ1dCB3ZSBjYW4gc3Rhc2ggaXQgaW5cbiAgLy8gb3VyIHVzZVN0YXRlIGhvb2sgaW5zdGVhZC5cbiAgLy9cbiAgLy8gVG8gZm9yY2UgYSByZS1yZW5kZXIsIHdlIGNhbGwgZm9yY2VVcGRhdGUoe2luc3R9KS4gVGhhdCB3b3JrcyBiZWNhdXNlIHRoZVxuICAvLyBuZXcgb2JqZWN0IGFsd2F5cyBmYWlscyBhbiBlcXVhbGl0eSBjaGVjay5cblxuXG4gIGNvbnN0IFt7XG4gICAgaW5zdFxuICB9LCBmb3JjZVVwZGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgaW5zdDoge1xuICAgICAgdmFsdWUsXG4gICAgICBnZXRTbmFwc2hvdFxuICAgIH1cbiAgfSk7IC8vIFRyYWNrIHRoZSBsYXRlc3QgZ2V0U25hcHNob3QgZnVuY3Rpb24gd2l0aCBhIHJlZi4gVGhpcyBuZWVkcyB0byBiZSB1cGRhdGVkXG4gIC8vIGluIHRoZSBsYXlvdXQgcGhhc2Ugc28gd2UgY2FuIGFjY2VzcyBpdCBkdXJpbmcgdGhlIHRlYXJpbmcgY2hlY2sgdGhhdFxuICAvLyBoYXBwZW5zIG9uIHN1YnNjcmliZS5cblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICBpbnN0LmdldFNuYXBzaG90ID0gZ2V0U25hcHNob3Q7IC8vIFdoZW5ldmVyIGdldFNuYXBzaG90IG9yIHN1YnNjcmliZSBjaGFuZ2VzLCB3ZSBuZWVkIHRvIGNoZWNrIGluIHRoZVxuICAgIC8vIGNvbW1pdCBwaGFzZSBpZiB0aGVyZSB3YXMgYW4gaW50ZXJsZWF2ZWQgbXV0YXRpb24uIEluIGNvbmN1cnJlbnQgbW9kZVxuICAgIC8vIHRoaXMgY2FuIGhhcHBlbiBhbGwgdGhlIHRpbWUsIGJ1dCBldmVuIGluIHN5bmNocm9ub3VzIG1vZGUsIGFuIGVhcmxpZXJcbiAgICAvLyBlZmZlY3QgbWF5IGhhdmUgbXV0YXRlZCB0aGUgc3RvcmUuXG5cbiAgICBpZiAoY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSkge1xuICAgICAgLy8gRm9yY2UgYSByZS1yZW5kZXIuXG4gICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgIGluc3RcbiAgICAgIH0pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIH0sIFtzdWJzY3JpYmUsIHZhbHVlLCBnZXRTbmFwc2hvdF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGZvciBjaGFuZ2VzIHJpZ2h0IGJlZm9yZSBzdWJzY3JpYmluZy4gU3Vic2VxdWVudCBjaGFuZ2VzIHdpbGwgYmVcbiAgICAvLyBkZXRlY3RlZCBpbiB0aGUgc3Vic2NyaXB0aW9uIGhhbmRsZXIuXG4gICAgaWYgKGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkpIHtcbiAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgZm9yY2VVcGRhdGUoe1xuICAgICAgICBpbnN0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdG9yZUNoYW5nZSA9ICgpID0+IHtcbiAgICAgIC8vIFRPRE86IEJlY2F1c2UgdGhlcmUgaXMgbm8gY3Jvc3MtcmVuZGVyZXIgQVBJIGZvciBiYXRjaGluZyB1cGRhdGVzLCBpdCdzXG4gICAgICAvLyB1cCB0byB0aGUgY29uc3VtZXIgb2YgdGhpcyBsaWJyYXJ5IHRvIHdyYXAgdGhlaXIgc3Vic2NyaXB0aW9uIGV2ZW50XG4gICAgICAvLyB3aXRoIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzLiBTaG91bGQgd2UgdHJ5IHRvIGRldGVjdCB3aGVuIHRoaXMgaXNuJ3RcbiAgICAgIC8vIHRoZSBjYXNlIGFuZCBwcmludCBhIHdhcm5pbmcgaW4gZGV2ZWxvcG1lbnQ/XG4gICAgICAvLyBUaGUgc3RvcmUgY2hhbmdlZC4gQ2hlY2sgaWYgdGhlIHNuYXBzaG90IGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgdGltZSB3ZVxuICAgICAgLy8gcmVhZCBmcm9tIHRoZSBzdG9yZS5cbiAgICAgIGlmIChjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpKSB7XG4gICAgICAgIC8vIEZvcmNlIGEgcmUtcmVuZGVyLlxuICAgICAgICBmb3JjZVVwZGF0ZSh7XG4gICAgICAgICAgaW5zdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9OyAvLyBTdWJzY3JpYmUgdG8gdGhlIHN0b3JlIGFuZCByZXR1cm4gYSBjbGVhbi11cCBmdW5jdGlvbi5cblxuXG4gICAgcmV0dXJuIHN1YnNjcmliZShoYW5kbGVTdG9yZUNoYW5nZSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW3N1YnNjcmliZV0pO1xuICB1c2VEZWJ1Z1ZhbHVlKHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpIHtcbiAgY29uc3QgbGF0ZXN0R2V0U25hcHNob3QgPSBpbnN0LmdldFNuYXBzaG90O1xuICBjb25zdCBwcmV2VmFsdWUgPSBpbnN0LnZhbHVlO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgbmV4dFZhbHVlID0gbGF0ZXN0R2V0U25hcHNob3QoKTtcbiAgICByZXR1cm4gIWlzKHByZXZWYWx1ZSwgbmV4dFZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBmbG93XG4gKi9cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDEoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpIHtcbiAgLy8gTm90ZTogVGhlIHNoaW0gZG9lcyBub3QgdXNlIGdldFNlcnZlclNuYXBzaG90LCBiZWNhdXNlIHByZS0xOCB2ZXJzaW9ucyBvZlxuICAvLyBSZWFjdCBkbyBub3QgZXhwb3NlIGEgd2F5IHRvIGNoZWNrIGlmIHdlJ3JlIGh5ZHJhdGluZy4gU28gdXNlcnMgb2YgdGhlIHNoaW1cbiAgLy8gd2lsbCBuZWVkIHRvIHRyYWNrIHRoYXQgdGhlbXNlbHZlcyBhbmQgcmV0dXJuIHRoZSBjb3JyZWN0IHZhbHVlXG4gIC8vIGZyb20gYGdldFNuYXBzaG90YC5cbiAgcmV0dXJuIGdldFNuYXBzaG90KCk7XG59XG5cbi8qKlxuICogSW5saW5lZCBpbnRvIHRoZSByZWFjdC1yb3V0ZXIgcmVwbyBzaW5jZSB1c2Utc3luYy1leHRlcm5hbC1zdG9yZSBkb2VzIG5vdFxuICogcHJvdmlkZSBhIFVNRC1jb21wYXRpYmxlIHBhY2thZ2UsIHNvIHdlIG5lZWQgdGhpcyB0byBiZSBhYmxlIHRvIGRpc3RyaWJ1dGVcbiAqIFVNRCByZWFjdC1yb3V0ZXIgYnVuZGxlc1xuICovXG5jb25zdCBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKTtcbmNvbnN0IGlzU2VydmVyRW52aXJvbm1lbnQgPSAhY2FuVXNlRE9NO1xuY29uc3Qgc2hpbSA9IGlzU2VydmVyRW52aXJvbm1lbnQgPyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSQxIDogdXNlU3luY0V4dGVybmFsU3RvcmUkMjtcbmNvbnN0IHVzZVN5bmNFeHRlcm5hbFN0b3JlID0gXCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVwiIGluIFJlYWN0ID8gKG1vZHVsZSA9PiBtb2R1bGUudXNlU3luY0V4dGVybmFsU3RvcmUpKFJlYWN0KSA6IHNoaW07XG5cbmNvbnN0IERhdGFSb3V0ZXJDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgRGF0YVJvdXRlckNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkRhdGFSb3V0ZXJcIjtcbn1cblxuY29uc3QgRGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuZGlzcGxheU5hbWUgPSBcIkRhdGFSb3V0ZXJTdGF0ZVwiO1xufVxuXG5jb25zdCBBd2FpdENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBBd2FpdENvbnRleHQuZGlzcGxheU5hbWUgPSBcIkF3YWl0XCI7XG59XG5cbmNvbnN0IE5hdmlnYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTmF2aWdhdGlvbkNvbnRleHQuZGlzcGxheU5hbWUgPSBcIk5hdmlnYXRpb25cIjtcbn1cblxuY29uc3QgTG9jYXRpb25Db250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTG9jYXRpb25Db250ZXh0LmRpc3BsYXlOYW1lID0gXCJMb2NhdGlvblwiO1xufVxuXG5jb25zdCBSb3V0ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIG91dGxldDogbnVsbCxcbiAgbWF0Y2hlczogW11cbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVcIjtcbn1cblxuY29uc3QgUm91dGVFcnJvckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBSb3V0ZUVycm9yQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiUm91dGVFcnJvclwiO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZ1bGwgaHJlZiBmb3IgdGhlIGdpdmVuIFwidG9cIiB2YWx1ZS4gVGhpcyBpcyB1c2VmdWwgZm9yIGJ1aWxkaW5nXG4gKiBjdXN0b20gbGlua3MgdGhhdCBhcmUgYWxzbyBhY2Nlc3NpYmxlIGFuZCBwcmVzZXJ2ZSByaWdodC1jbGljayBiZWhhdmlvci5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1ocmVmXG4gKi9cblxuZnVuY3Rpb24gdXNlSHJlZih0bywgX3RlbXApIHtcbiAgbGV0IHtcbiAgICByZWxhdGl2ZVxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXA7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2YgdGhlXG4gIC8vIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCJ1c2VIcmVmKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIGJhc2VuYW1lLFxuICAgIG5hdmlnYXRvclxuICB9ID0gUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCk7XG4gIGxldCB7XG4gICAgaGFzaCxcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hcbiAgfSA9IHVzZVJlc29sdmVkUGF0aCh0bywge1xuICAgIHJlbGF0aXZlXG4gIH0pO1xuICBsZXQgam9pbmVkUGF0aG5hbWUgPSBwYXRobmFtZTsgLy8gSWYgd2UncmUgb3BlcmF0aW5nIHdpdGhpbiBhIGJhc2VuYW1lLCBwcmVwZW5kIGl0IHRvIHRoZSBwYXRobmFtZSBwcmlvclxuICAvLyB0byBjcmVhdGluZyB0aGUgaHJlZi4gIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4ganVzdCB1c2UgdGhlIHJhd1xuICAvLyBiYXNlbmFtZSB3aGljaCBhbGxvd3MgdGhlIGJhc2VuYW1lIHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhlIHByZXNlbmNlXG4gIC8vIG9mIGEgdHJhaWxpbmcgc2xhc2ggb24gcm9vdCBsaW5rc1xuXG4gIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICBqb2luZWRQYXRobmFtZSA9IHBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aG5hbWVdKTtcbiAgfVxuXG4gIHJldHVybiBuYXZpZ2F0b3IuY3JlYXRlSHJlZih7XG4gICAgcGF0aG5hbWU6IGpvaW5lZFBhdGhuYW1lLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoXG4gIH0pO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhpcyBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGEgPFJvdXRlcj4uXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtaW4tcm91dGVyLWNvbnRleHRcbiAqL1xuXG5mdW5jdGlvbiB1c2VJblJvdXRlckNvbnRleHQoKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KExvY2F0aW9uQ29udGV4dCkgIT0gbnVsbDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBsb2NhdGlvbiBvYmplY3QsIHdoaWNoIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgVVJMIGluIHdlYlxuICogYnJvd3NlcnMuXG4gKlxuICogTm90ZTogSWYgeW91J3JlIHVzaW5nIHRoaXMgaXQgbWF5IG1lYW4geW91J3JlIGRvaW5nIHNvbWUgb2YgeW91ciBvd25cbiAqIFwicm91dGluZ1wiIGluIHlvdXIgYXBwLCBhbmQgd2UnZCBsaWtlIHRvIGtub3cgd2hhdCB5b3VyIHVzZSBjYXNlIGlzLiBXZSBtYXlcbiAqIGJlIGFibGUgdG8gcHJvdmlkZSBzb21ldGhpbmcgaGlnaGVyLWxldmVsIHRvIGJldHRlciBzdWl0IHlvdXIgbmVlZHMuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2UtbG9jYXRpb25cbiAqL1xuXG5mdW5jdGlvbiB1c2VMb2NhdGlvbigpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZUxvY2F0aW9uKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLmxvY2F0aW9uO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjdXJyZW50IG5hdmlnYXRpb24gYWN0aW9uIHdoaWNoIGRlc2NyaWJlcyBob3cgdGhlIHJvdXRlciBjYW1lIHRvXG4gKiB0aGUgY3VycmVudCBsb2NhdGlvbiwgZWl0aGVyIGJ5IGEgcG9wLCBwdXNoLCBvciByZXBsYWNlIG9uIHRoZSBoaXN0b3J5IHN0YWNrLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW5hdmlnYXRpb24tdHlwZVxuICovXG5cbmZ1bmN0aW9uIHVzZU5hdmlnYXRpb25UeXBlKCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChMb2NhdGlvbkNvbnRleHQpLm5hdmlnYXRpb25UeXBlO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgUGF0aE1hdGNoIG9iamVjdCBpZiB0aGUgZ2l2ZW4gcGF0dGVybiBtYXRjaGVzIHRoZSBjdXJyZW50IFVSTC5cbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBjb21wb25lbnRzIHRoYXQgbmVlZCB0byBrbm93IFwiYWN0aXZlXCIgc3RhdGUsIGUuZy5cbiAqIDxOYXZMaW5rPi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1tYXRjaFxuICovXG5cbmZ1bmN0aW9uIHVzZU1hdGNoKHBhdHRlcm4pIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZU1hdGNoKCkgbWF5IGJlIHVzZWQgb25seSBpbiB0aGUgY29udGV4dCBvZiBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICBsZXQge1xuICAgIHBhdGhuYW1lXG4gIH0gPSB1c2VMb2NhdGlvbigpO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiBtYXRjaFBhdGgocGF0dGVybiwgcGF0aG5hbWUpLCBbcGF0aG5hbWUsIHBhdHRlcm5dKTtcbn1cbi8qKlxuICogVGhlIGludGVyZmFjZSBmb3IgdGhlIG5hdmlnYXRlKCkgZnVuY3Rpb24gcmV0dXJuZWQgZnJvbSB1c2VOYXZpZ2F0ZSgpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyBhbiBpbXBlcmF0aXZlIG1ldGhvZCBmb3IgY2hhbmdpbmcgdGhlIGxvY2F0aW9uLiBVc2VkIGJ5IDxMaW5rPnMsIGJ1dFxuICogbWF5IGFsc28gYmUgdXNlZCBieSBvdGhlciBlbGVtZW50cyB0byBjaGFuZ2UgdGhlIGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW5hdmlnYXRlXG4gKi9cbmZ1bmN0aW9uIHVzZU5hdmlnYXRlKCkge1xuICAhdXNlSW5Sb3V0ZXJDb250ZXh0KCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIC8vIFRPRE86IFRoaXMgZXJyb3IgaXMgcHJvYmFibHkgYmVjYXVzZSB0aGV5IHNvbWVob3cgaGF2ZSAyIHZlcnNpb25zIG9mIHRoZVxuICAvLyByb3V0ZXIgbG9hZGVkLiBXZSBjYW4gaGVscCB0aGVtIHVuZGVyc3RhbmQgaG93IHRvIGF2b2lkIHRoYXQuXG4gIFwidXNlTmF2aWdhdGUoKSBtYXkgYmUgdXNlZCBvbmx5IGluIHRoZSBjb250ZXh0IG9mIGEgPFJvdXRlcj4gY29tcG9uZW50LlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KE5hdmlnYXRpb25Db250ZXh0KTtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUGF0aG5hbWVcbiAgfSA9IHVzZUxvY2F0aW9uKCk7XG4gIGxldCByb3V0ZVBhdGhuYW1lc0pzb24gPSBKU09OLnN0cmluZ2lmeShVTlNBRkVfZ2V0UGF0aENvbnRyaWJ1dGluZ01hdGNoZXMobWF0Y2hlcykubWFwKG1hdGNoID0+IG1hdGNoLnBhdGhuYW1lQmFzZSkpO1xuICBsZXQgYWN0aXZlUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBhY3RpdmVSZWYuY3VycmVudCA9IHRydWU7XG4gIH0pO1xuICBsZXQgbmF2aWdhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAodG8sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhhY3RpdmVSZWYuY3VycmVudCwgXCJZb3Ugc2hvdWxkIGNhbGwgbmF2aWdhdGUoKSBpbiBhIFJlYWN0LnVzZUVmZmVjdCgpLCBub3Qgd2hlbiBcIiArIFwieW91ciBjb21wb25lbnQgaXMgZmlyc3QgcmVuZGVyZWQuXCIpIDogdm9pZCAwO1xuICAgIGlmICghYWN0aXZlUmVmLmN1cnJlbnQpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2YgdG8gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIG5hdmlnYXRvci5nbyh0byk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHBhdGggPSByZXNvbHZlVG8odG8sIEpTT04ucGFyc2Uocm91dGVQYXRobmFtZXNKc29uKSwgbG9jYXRpb25QYXRobmFtZSwgb3B0aW9ucy5yZWxhdGl2ZSA9PT0gXCJwYXRoXCIpOyAvLyBJZiB3ZSdyZSBvcGVyYXRpbmcgd2l0aGluIGEgYmFzZW5hbWUsIHByZXBlbmQgaXQgdG8gdGhlIHBhdGhuYW1lIHByaW9yXG4gICAgLy8gdG8gaGFuZGluZyBvZmYgdG8gaGlzdG9yeS4gIElmIHRoaXMgaXMgYSByb290IG5hdmlnYXRpb24sIHRoZW4gd2VcbiAgICAvLyBuYXZpZ2F0ZSB0byB0aGUgcmF3IGJhc2VuYW1lIHdoaWNoIGFsbG93cyB0aGUgYmFzZW5hbWUgdG8gaGF2ZSBmdWxsXG4gICAgLy8gY29udHJvbCBvdmVyIHRoZSBwcmVzZW5jZSBvZiBhIHRyYWlsaW5nIHNsYXNoIG9uIHJvb3QgbGlua3NcblxuICAgIGlmIChiYXNlbmFtZSAhPT0gXCIvXCIpIHtcbiAgICAgIHBhdGgucGF0aG5hbWUgPSBwYXRoLnBhdGhuYW1lID09PSBcIi9cIiA/IGJhc2VuYW1lIDogam9pblBhdGhzKFtiYXNlbmFtZSwgcGF0aC5wYXRobmFtZV0pO1xuICAgIH1cblxuICAgICghIW9wdGlvbnMucmVwbGFjZSA/IG5hdmlnYXRvci5yZXBsYWNlIDogbmF2aWdhdG9yLnB1c2gpKHBhdGgsIG9wdGlvbnMuc3RhdGUsIG9wdGlvbnMpO1xuICB9LCBbYmFzZW5hbWUsIG5hdmlnYXRvciwgcm91dGVQYXRobmFtZXNKc29uLCBsb2NhdGlvblBhdGhuYW1lXSk7XG4gIHJldHVybiBuYXZpZ2F0ZTtcbn1cbmNvbnN0IE91dGxldENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbi8qKlxuICogUmV0dXJucyB0aGUgY29udGV4dCAoaWYgcHJvdmlkZWQpIGZvciB0aGUgY2hpbGQgcm91dGUgYXQgdGhpcyBsZXZlbCBvZiB0aGUgcm91dGVcbiAqIGhpZXJhcmNoeS5cbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLW91dGxldC1jb250ZXh0XG4gKi9cblxuZnVuY3Rpb24gdXNlT3V0bGV0Q29udGV4dCgpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoT3V0bGV0Q29udGV4dCk7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGVsZW1lbnQgZm9yIHRoZSBjaGlsZCByb3V0ZSBhdCB0aGlzIGxldmVsIG9mIHRoZSByb3V0ZVxuICogaGllcmFyY2h5LiBVc2VkIGludGVybmFsbHkgYnkgPE91dGxldD4gdG8gcmVuZGVyIGNoaWxkIHJvdXRlcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2hvb2tzL3VzZS1vdXRsZXRcbiAqL1xuXG5mdW5jdGlvbiB1c2VPdXRsZXQoY29udGV4dCkge1xuICBsZXQgb3V0bGV0ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpLm91dGxldDtcblxuICBpZiAob3V0bGV0KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KE91dGxldENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjb250ZXh0XG4gICAgfSwgb3V0bGV0KTtcbiAgfVxuXG4gIHJldHVybiBvdXRsZXQ7XG59XG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyBvZiB0aGUgZHluYW1pYyBwYXJhbXMgZnJvbSB0aGUgY3VycmVudFxuICogVVJMIHRoYXQgd2VyZSBtYXRjaGVkIGJ5IHRoZSByb3V0ZSBwYXRoLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLXBhcmFtc1xuICovXG5cbmZ1bmN0aW9uIHVzZVBhcmFtcygpIHtcbiAgbGV0IHtcbiAgICBtYXRjaGVzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gIGxldCByb3V0ZU1hdGNoID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xuICByZXR1cm4gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGFyYW1zIDoge307XG59XG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYXRobmFtZSBvZiB0aGUgZ2l2ZW4gYHRvYCB2YWx1ZSBhZ2FpbnN0IHRoZSBjdXJyZW50IGxvY2F0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vaG9va3MvdXNlLXJlc29sdmVkLXBhdGhcbiAqL1xuXG5mdW5jdGlvbiB1c2VSZXNvbHZlZFBhdGgodG8sIF90ZW1wMikge1xuICBsZXQge1xuICAgIHJlbGF0aXZlXG4gIH0gPSBfdGVtcDIgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAyO1xuICBsZXQge1xuICAgIG1hdGNoZXNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoUm91dGVDb250ZXh0KTtcbiAgbGV0IHtcbiAgICBwYXRobmFtZTogbG9jYXRpb25QYXRobmFtZVxuICB9ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IHJvdXRlUGF0aG5hbWVzSnNvbiA9IEpTT04uc3RyaW5naWZ5KFVOU0FGRV9nZXRQYXRoQ29udHJpYnV0aW5nTWF0Y2hlcyhtYXRjaGVzKS5tYXAobWF0Y2ggPT4gbWF0Y2gucGF0aG5hbWVCYXNlKSk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHJlc29sdmVUbyh0bywgSlNPTi5wYXJzZShyb3V0ZVBhdGhuYW1lc0pzb24pLCBsb2NhdGlvblBhdGhuYW1lLCByZWxhdGl2ZSA9PT0gXCJwYXRoXCIpLCBbdG8sIHJvdXRlUGF0aG5hbWVzSnNvbiwgbG9jYXRpb25QYXRobmFtZSwgcmVsYXRpdmVdKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudCBvZiB0aGUgcm91dGUgdGhhdCBtYXRjaGVkIHRoZSBjdXJyZW50IGxvY2F0aW9uLCBwcmVwYXJlZFxuICogd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0IHRvIHJlbmRlciB0aGUgcmVtYWluZGVyIG9mIHRoZSByb3V0ZSB0cmVlLiBSb3V0ZVxuICogZWxlbWVudHMgaW4gdGhlIHRyZWUgbXVzdCByZW5kZXIgYW4gPE91dGxldD4gdG8gcmVuZGVyIHRoZWlyIGNoaWxkIHJvdXRlJ3NcbiAqIGVsZW1lbnQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9ob29rcy91c2Utcm91dGVzXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVzKHJvdXRlcywgbG9jYXRpb25BcmcpIHtcbiAgIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCAvLyBUT0RPOiBUaGlzIGVycm9yIGlzIHByb2JhYmx5IGJlY2F1c2UgdGhleSBzb21laG93IGhhdmUgMiB2ZXJzaW9ucyBvZiB0aGVcbiAgLy8gcm91dGVyIGxvYWRlZC4gV2UgY2FuIGhlbHAgdGhlbSB1bmRlcnN0YW5kIGhvdyB0byBhdm9pZCB0aGF0LlxuICBcInVzZVJvdXRlcygpIG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgbGV0IHtcbiAgICBuYXZpZ2F0b3JcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTmF2aWdhdGlvbkNvbnRleHQpO1xuICBsZXQgZGF0YVJvdXRlclN0YXRlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlclN0YXRlQ29udGV4dCk7XG4gIGxldCB7XG4gICAgbWF0Y2hlczogcGFyZW50TWF0Y2hlc1xuICB9ID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICBsZXQgcm91dGVNYXRjaCA9IHBhcmVudE1hdGNoZXNbcGFyZW50TWF0Y2hlcy5sZW5ndGggLSAxXTtcbiAgbGV0IHBhcmVudFBhcmFtcyA9IHJvdXRlTWF0Y2ggPyByb3V0ZU1hdGNoLnBhcmFtcyA6IHt9O1xuICBsZXQgcGFyZW50UGF0aG5hbWUgPSByb3V0ZU1hdGNoID8gcm91dGVNYXRjaC5wYXRobmFtZSA6IFwiL1wiO1xuICBsZXQgcGFyZW50UGF0aG5hbWVCYXNlID0gcm91dGVNYXRjaCA/IHJvdXRlTWF0Y2gucGF0aG5hbWVCYXNlIDogXCIvXCI7XG4gIGxldCBwYXJlbnRSb3V0ZSA9IHJvdXRlTWF0Y2ggJiYgcm91dGVNYXRjaC5yb3V0ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgLy8gWW91IHdvbid0IGdldCBhIHdhcm5pbmcgYWJvdXQgMiBkaWZmZXJlbnQgPFJvdXRlcz4gdW5kZXIgYSA8Um91dGU+XG4gICAgLy8gd2l0aG91dCBhIHRyYWlsaW5nICosIGJ1dCB0aGlzIGlzIGEgYmVzdC1lZmZvcnQgd2FybmluZyBhbnl3YXkgc2luY2Ugd2VcbiAgICAvLyBjYW5ub3QgZXZlbiBnaXZlIHRoZSB3YXJuaW5nIHVubGVzcyB0aGV5IGxhbmQgYXQgdGhlIHBhcmVudCByb3V0ZS5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyA8Um91dGVzPlxuICAgIC8vICAgey8qIFRoaXMgcm91dGUgcGF0aCBNVVNUIGVuZCB3aXRoIC8qIGJlY2F1c2Ugb3RoZXJ3aXNlXG4gICAgLy8gICAgICAgaXQgd2lsbCBuZXZlciBtYXRjaCAvYmxvZy9wb3N0LzEyMyAqL31cbiAgICAvLyAgIDxSb3V0ZSBwYXRoPVwiYmxvZ1wiIGVsZW1lbnQ9ezxCbG9nIC8+fSAvPlxuICAgIC8vICAgPFJvdXRlIHBhdGg9XCJibG9nL2ZlZWRcIiBlbGVtZW50PXs8QmxvZ0ZlZWQgLz59IC8+XG4gICAgLy8gPC9Sb3V0ZXM+XG4gICAgLy9cbiAgICAvLyBmdW5jdGlvbiBCbG9nKCkge1xuICAgIC8vICAgcmV0dXJuIChcbiAgICAvLyAgICAgPFJvdXRlcz5cbiAgICAvLyAgICAgICA8Um91dGUgcGF0aD1cInBvc3QvOmlkXCIgZWxlbWVudD17PFBvc3QgLz59IC8+XG4gICAgLy8gICAgIDwvUm91dGVzPlxuICAgIC8vICAgKTtcbiAgICAvLyB9XG4gICAgbGV0IHBhcmVudFBhdGggPSBwYXJlbnRSb3V0ZSAmJiBwYXJlbnRSb3V0ZS5wYXRoIHx8IFwiXCI7XG4gICAgd2FybmluZ09uY2UocGFyZW50UGF0aG5hbWUsICFwYXJlbnRSb3V0ZSB8fCBwYXJlbnRQYXRoLmVuZHNXaXRoKFwiKlwiKSwgXCJZb3UgcmVuZGVyZWQgZGVzY2VuZGFudCA8Um91dGVzPiAob3IgY2FsbGVkIGB1c2VSb3V0ZXMoKWApIGF0IFwiICsgKFwiXFxcIlwiICsgcGFyZW50UGF0aG5hbWUgKyBcIlxcXCIgKHVuZGVyIDxSb3V0ZSBwYXRoPVxcXCJcIiArIHBhcmVudFBhdGggKyBcIlxcXCI+KSBidXQgdGhlIFwiKSArIFwicGFyZW50IHJvdXRlIHBhdGggaGFzIG5vIHRyYWlsaW5nIFxcXCIqXFxcIi4gVGhpcyBtZWFucyBpZiB5b3UgbmF2aWdhdGUgXCIgKyBcImRlZXBlciwgdGhlIHBhcmVudCB3b24ndCBtYXRjaCBhbnltb3JlIGFuZCB0aGVyZWZvcmUgdGhlIGNoaWxkIFwiICsgXCJyb3V0ZXMgd2lsbCBuZXZlciByZW5kZXIuXFxuXFxuXCIgKyAoXCJQbGVhc2UgY2hhbmdlIHRoZSBwYXJlbnQgPFJvdXRlIHBhdGg9XFxcIlwiICsgcGFyZW50UGF0aCArIFwiXFxcIj4gdG8gPFJvdXRlIFwiKSArIChcInBhdGg9XFxcIlwiICsgKHBhcmVudFBhdGggPT09IFwiL1wiID8gXCIqXCIgOiBwYXJlbnRQYXRoICsgXCIvKlwiKSArIFwiXFxcIj4uXCIpKTtcbiAgfVxuXG4gIGxldCBsb2NhdGlvbkZyb21Db250ZXh0ID0gdXNlTG9jYXRpb24oKTtcbiAgbGV0IGxvY2F0aW9uO1xuXG4gIGlmIChsb2NhdGlvbkFyZykge1xuICAgIHZhciBfcGFyc2VkTG9jYXRpb25BcmckcGE7XG5cbiAgICBsZXQgcGFyc2VkTG9jYXRpb25BcmcgPSB0eXBlb2YgbG9jYXRpb25BcmcgPT09IFwic3RyaW5nXCIgPyBwYXJzZVBhdGgobG9jYXRpb25BcmcpIDogbG9jYXRpb25Bcmc7XG4gICAgIShwYXJlbnRQYXRobmFtZUJhc2UgPT09IFwiL1wiIHx8ICgoX3BhcnNlZExvY2F0aW9uQXJnJHBhID0gcGFyc2VkTG9jYXRpb25BcmcucGF0aG5hbWUpID09IG51bGwgPyB2b2lkIDAgOiBfcGFyc2VkTG9jYXRpb25BcmckcGEuc3RhcnRzV2l0aChwYXJlbnRQYXRobmFtZUJhc2UpKSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiV2hlbiBvdmVycmlkaW5nIHRoZSBsb2NhdGlvbiB1c2luZyBgPFJvdXRlcyBsb2NhdGlvbj5gIG9yIGB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbilgLCBcIiArIFwidGhlIGxvY2F0aW9uIHBhdGhuYW1lIG11c3QgYmVnaW4gd2l0aCB0aGUgcG9ydGlvbiBvZiB0aGUgVVJMIHBhdGhuYW1lIHRoYXQgd2FzIFwiICsgKFwibWF0Y2hlZCBieSBhbGwgcGFyZW50IHJvdXRlcy4gVGhlIGN1cnJlbnQgcGF0aG5hbWUgYmFzZSBpcyBcXFwiXCIgKyBwYXJlbnRQYXRobmFtZUJhc2UgKyBcIlxcXCIgXCIpICsgKFwiYnV0IHBhdGhuYW1lIFxcXCJcIiArIHBhcnNlZExvY2F0aW9uQXJnLnBhdGhuYW1lICsgXCJcXFwiIHdhcyBnaXZlbiBpbiB0aGUgYGxvY2F0aW9uYCBwcm9wLlwiKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxvY2F0aW9uID0gcGFyc2VkTG9jYXRpb25Bcmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb24gPSBsb2NhdGlvbkZyb21Db250ZXh0O1xuICB9XG5cbiAgbGV0IHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgXCIvXCI7XG4gIGxldCByZW1haW5pbmdQYXRobmFtZSA9IHBhcmVudFBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXRobmFtZSA6IHBhdGhuYW1lLnNsaWNlKHBhcmVudFBhdGhuYW1lQmFzZS5sZW5ndGgpIHx8IFwiL1wiO1xuICBsZXQgbWF0Y2hlcyA9IG1hdGNoUm91dGVzKHJvdXRlcywge1xuICAgIHBhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwYXJlbnRSb3V0ZSB8fCBtYXRjaGVzICE9IG51bGwsIFwiTm8gcm91dGVzIG1hdGNoZWQgbG9jYXRpb24gXFxcIlwiICsgbG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2ggKyBsb2NhdGlvbi5oYXNoICsgXCJcXFwiIFwiKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKG1hdGNoZXMgPT0gbnVsbCB8fCBtYXRjaGVzW21hdGNoZXMubGVuZ3RoIC0gMV0ucm91dGUuZWxlbWVudCAhPT0gdW5kZWZpbmVkLCBcIk1hdGNoZWQgbGVhZiByb3V0ZSBhdCBsb2NhdGlvbiBcXFwiXCIgKyBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2ggKyBcIlxcXCIgZG9lcyBub3QgaGF2ZSBhbiBlbGVtZW50LiBcIiArIFwiVGhpcyBtZWFucyBpdCB3aWxsIHJlbmRlciBhbiA8T3V0bGV0IC8+IHdpdGggYSBudWxsIHZhbHVlIGJ5IGRlZmF1bHQgcmVzdWx0aW5nIGluIGFuIFxcXCJlbXB0eVxcXCIgcGFnZS5cIikgOiB2b2lkIDA7XG4gIH1cblxuICBsZXQgcmVuZGVyZWRNYXRjaGVzID0gX3JlbmRlck1hdGNoZXMobWF0Y2hlcyAmJiBtYXRjaGVzLm1hcChtYXRjaCA9PiBPYmplY3QuYXNzaWduKHt9LCBtYXRjaCwge1xuICAgIHBhcmFtczogT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50UGFyYW1zLCBtYXRjaC5wYXJhbXMpLFxuICAgIHBhdGhuYW1lOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSwgLy8gUmUtZW5jb2RlIHBhdGhuYW1lcyB0aGF0IHdlcmUgZGVjb2RlZCBpbnNpZGUgbWF0Y2hSb3V0ZXNcbiAgICBuYXZpZ2F0b3IuZW5jb2RlTG9jYXRpb24gPyBuYXZpZ2F0b3IuZW5jb2RlTG9jYXRpb24obWF0Y2gucGF0aG5hbWUpLnBhdGhuYW1lIDogbWF0Y2gucGF0aG5hbWVdKSxcbiAgICBwYXRobmFtZUJhc2U6IG1hdGNoLnBhdGhuYW1lQmFzZSA9PT0gXCIvXCIgPyBwYXJlbnRQYXRobmFtZUJhc2UgOiBqb2luUGF0aHMoW3BhcmVudFBhdGhuYW1lQmFzZSwgLy8gUmUtZW5jb2RlIHBhdGhuYW1lcyB0aGF0IHdlcmUgZGVjb2RlZCBpbnNpZGUgbWF0Y2hSb3V0ZXNcbiAgICBuYXZpZ2F0b3IuZW5jb2RlTG9jYXRpb24gPyBuYXZpZ2F0b3IuZW5jb2RlTG9jYXRpb24obWF0Y2gucGF0aG5hbWVCYXNlKS5wYXRobmFtZSA6IG1hdGNoLnBhdGhuYW1lQmFzZV0pXG4gIH0pKSwgcGFyZW50TWF0Y2hlcywgZGF0YVJvdXRlclN0YXRlQ29udGV4dCB8fCB1bmRlZmluZWQpOyAvLyBXaGVuIGEgdXNlciBwYXNzZXMgaW4gYSBgbG9jYXRpb25BcmdgLCB0aGUgYXNzb2NpYXRlZCByb3V0ZXMgbmVlZCB0b1xuICAvLyBiZSB3cmFwcGVkIGluIGEgbmV3IGBMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXJgIGluIG9yZGVyIGZvciBgdXNlTG9jYXRpb25gXG4gIC8vIHRvIHVzZSB0aGUgc2NvcGVkIGxvY2F0aW9uIGluc3RlYWQgb2YgdGhlIGdsb2JhbCBsb2NhdGlvbi5cblxuXG4gIGlmIChsb2NhdGlvbkFyZyAmJiByZW5kZXJlZE1hdGNoZXMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTG9jYXRpb25Db250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICBsb2NhdGlvbjogX2V4dGVuZHMoe1xuICAgICAgICAgIHBhdGhuYW1lOiBcIi9cIixcbiAgICAgICAgICBzZWFyY2g6IFwiXCIsXG4gICAgICAgICAgaGFzaDogXCJcIixcbiAgICAgICAgICBzdGF0ZTogbnVsbCxcbiAgICAgICAgICBrZXk6IFwiZGVmYXVsdFwiXG4gICAgICAgIH0sIGxvY2F0aW9uKSxcbiAgICAgICAgbmF2aWdhdGlvblR5cGU6IEFjdGlvbi5Qb3BcbiAgICAgIH1cbiAgICB9LCByZW5kZXJlZE1hdGNoZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJlbmRlcmVkTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gRGVmYXVsdEVycm9yRWxlbWVudCgpIHtcbiAgbGV0IGVycm9yID0gdXNlUm91dGVFcnJvcigpO1xuICBsZXQgbWVzc2FnZSA9IGlzUm91dGVFcnJvclJlc3BvbnNlKGVycm9yKSA/IGVycm9yLnN0YXR1cyArIFwiIFwiICsgZXJyb3Iuc3RhdHVzVGV4dCA6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogSlNPTi5zdHJpbmdpZnkoZXJyb3IpO1xuICBsZXQgc3RhY2sgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3Iuc3RhY2sgOiBudWxsO1xuICBsZXQgbGlnaHRncmV5ID0gXCJyZ2JhKDIwMCwyMDAsMjAwLCAwLjUpXCI7XG4gIGxldCBwcmVTdHlsZXMgPSB7XG4gICAgcGFkZGluZzogXCIwLjVyZW1cIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgY29kZVN0eWxlcyA9IHtcbiAgICBwYWRkaW5nOiBcIjJweCA0cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpZ2h0Z3JleVxuICB9O1xuICBsZXQgZGV2SW5mbyA9IG51bGw7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGRldkluZm8gPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiXFx1RDgzRFxcdURDQkYgSGV5IGRldmVsb3BlciBcXHVEODNEXFx1REM0QlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiWW91IGNhbiBwcm92aWRlIGEgd2F5IGJldHRlciBVWCB0aGFuIHRoaXMgd2hlbiB5b3VyIGFwcCB0aHJvd3MgZXJyb3JzIGJ5IHByb3ZpZGluZyB5b3VyIG93blxceEEwXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICBzdHlsZTogY29kZVN0eWxlc1xuICAgIH0sIFwiZXJyb3JFbGVtZW50XCIpLCBcIiBwcm9wcyBvblxceEEwXCIsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgICBzdHlsZTogY29kZVN0eWxlc1xuICAgIH0sIFwiPFJvdXRlPlwiKSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiVW5leHBlY3RlZCBBcHBsaWNhdGlvbiBFcnJvciFcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwge1xuICAgIHN0eWxlOiB7XG4gICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICB9XG4gIH0sIG1lc3NhZ2UpLCBzdGFjayA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicHJlXCIsIHtcbiAgICBzdHlsZTogcHJlU3R5bGVzXG4gIH0sIHN0YWNrKSA6IG51bGwsIGRldkluZm8pO1xufVxuXG5jbGFzcyBSZW5kZXJFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwcm9wcy5sb2NhdGlvbixcbiAgICAgIGVycm9yOiBwcm9wcy5lcnJvclxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBlcnJvclxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgIC8vIFdoZW4gd2UgZ2V0IGludG8gYW4gZXJyb3Igc3RhdGUsIHRoZSB1c2VyIHdpbGwgbGlrZWx5IGNsaWNrIFwiYmFja1wiIHRvIHRoZVxuICAgIC8vIHByZXZpb3VzIHBhZ2UgdGhhdCBkaWRuJ3QgaGF2ZSBhbiBlcnJvci4gQmVjYXVzZSB0aGlzIHdyYXBzIHRoZSBlbnRpcmVcbiAgICAvLyBhcHBsaWNhdGlvbiwgdGhhdCB3aWxsIGhhdmUgbm8gZWZmZWN0LS10aGUgZXJyb3IgcGFnZSBjb250aW51ZXMgdG8gZGlzcGxheS5cbiAgICAvLyBUaGlzIGdpdmVzIHVzIGEgbWVjaGFuaXNtIHRvIHJlY292ZXIgZnJvbSB0aGUgZXJyb3Igd2hlbiB0aGUgbG9jYXRpb24gY2hhbmdlcy5cbiAgICAvL1xuICAgIC8vIFdoZXRoZXIgd2UncmUgaW4gYW4gZXJyb3Igc3RhdGUgb3Igbm90LCB3ZSB1cGRhdGUgdGhlIGxvY2F0aW9uIGluIHN0YXRlXG4gICAgLy8gc28gdGhhdCB3aGVuIHdlIGFyZSBpbiBhbiBlcnJvciBzdGF0ZSwgaXQgZ2V0cyByZXNldCB3aGVuIGEgbmV3IGxvY2F0aW9uXG4gICAgLy8gY29tZXMgaW4gYW5kIHRoZSB1c2VyIHJlY292ZXJzIGZyb20gdGhlIGVycm9yLlxuICAgIGlmIChzdGF0ZS5sb2NhdGlvbiAhPT0gcHJvcHMubG9jYXRpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBwcm9wcy5lcnJvcixcbiAgICAgICAgbG9jYXRpb246IHByb3BzLmxvY2F0aW9uXG4gICAgICB9O1xuICAgIH0gLy8gSWYgd2UncmUgbm90IGNoYW5naW5nIGxvY2F0aW9ucywgcHJlc2VydmUgdGhlIGxvY2F0aW9uIGJ1dCBzdGlsbCBzdXJmYWNlXG4gICAgLy8gYW55IG5ldyBlcnJvcnMgdGhhdCBtYXkgY29tZSB0aHJvdWdoLiBXZSByZXRhaW4gdGhlIGV4aXN0aW5nIGVycm9yLCB3ZSBkb1xuICAgIC8vIHRoaXMgYmVjYXVzZSB0aGUgZXJyb3IgcHJvdmlkZWQgZnJvbSB0aGUgYXBwIHN0YXRlIG1heSBiZSBjbGVhcmVkIHdpdGhvdXRcbiAgICAvLyB0aGUgbG9jYXRpb24gY2hhbmdpbmcuXG5cblxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogcHJvcHMuZXJyb3IgfHwgc3RhdGUuZXJyb3IsXG4gICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb25cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsIGVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZWFjdCBSb3V0ZXIgY2F1Z2h0IHRoZSBmb2xsb3dpbmcgZXJyb3IgZHVyaW5nIHJlbmRlclwiLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5lcnJvciA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHRoaXMucHJvcHMucm91dGVDb250ZXh0XG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVFcnJvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmVycm9yLFxuICAgICAgY2hpbGRyZW46IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgfSkpIDogdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIFJlbmRlcmVkUm91dGUoX3JlZikge1xuICBsZXQge1xuICAgIHJvdXRlQ29udGV4dCxcbiAgICBtYXRjaCxcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZjtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7IC8vIFRyYWNrIGhvdyBkZWVwIHdlIGdvdCBpbiBvdXIgcmVuZGVyIHBhc3MgdG8gZW11bGF0ZSBTU1IgY29tcG9uZW50RGlkQ2F0Y2hcbiAgLy8gaW4gYSBEYXRhU3RhdGljUm91dGVyXG5cbiAgaWYgKGRhdGFSb3V0ZXJDb250ZXh0ICYmIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpYyAmJiBkYXRhUm91dGVyQ29udGV4dC5zdGF0aWNDb250ZXh0ICYmIG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudCkge1xuICAgIGRhdGFSb3V0ZXJDb250ZXh0LnN0YXRpY0NvbnRleHQuX2RlZXBlc3RSZW5kZXJlZEJvdW5kYXJ5SWQgPSBtYXRjaC5yb3V0ZS5pZDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogcm91dGVDb250ZXh0XG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gX3JlbmRlck1hdGNoZXMobWF0Y2hlcywgcGFyZW50TWF0Y2hlcywgZGF0YVJvdXRlclN0YXRlKSB7XG4gIGlmIChwYXJlbnRNYXRjaGVzID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnRNYXRjaGVzID0gW107XG4gIH1cblxuICBpZiAobWF0Y2hlcyA9PSBudWxsKSB7XG4gICAgaWYgKGRhdGFSb3V0ZXJTdGF0ZSAhPSBudWxsICYmIGRhdGFSb3V0ZXJTdGF0ZS5lcnJvcnMpIHtcbiAgICAgIC8vIERvbid0IGJhaWwgaWYgd2UgaGF2ZSBkYXRhIHJvdXRlciBlcnJvcnMgc28gd2UgY2FuIHJlbmRlciB0aGVtIGluIHRoZVxuICAgICAgLy8gYm91bmRhcnkuICBVc2UgdGhlIHByZS1tYXRjaGVkIChvciBzaGltbWVkKSBtYXRjaGVzXG4gICAgICBtYXRjaGVzID0gZGF0YVJvdXRlclN0YXRlLm1hdGNoZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCByZW5kZXJlZE1hdGNoZXMgPSBtYXRjaGVzOyAvLyBJZiB3ZSBoYXZlIGRhdGEgZXJyb3JzLCB0cmltIG1hdGNoZXMgdG8gdGhlIGhpZ2hlc3QgZXJyb3IgYm91bmRhcnlcblxuICBsZXQgZXJyb3JzID0gZGF0YVJvdXRlclN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBkYXRhUm91dGVyU3RhdGUuZXJyb3JzO1xuXG4gIGlmIChlcnJvcnMgIT0gbnVsbCkge1xuICAgIGxldCBlcnJvckluZGV4ID0gcmVuZGVyZWRNYXRjaGVzLmZpbmRJbmRleChtID0+IG0ucm91dGUuaWQgJiYgKGVycm9ycyA9PSBudWxsID8gdm9pZCAwIDogZXJyb3JzW20ucm91dGUuaWRdKSk7XG4gICAgIShlcnJvckluZGV4ID49IDApID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkNvdWxkIG5vdCBmaW5kIGEgbWF0Y2hpbmcgcm91dGUgZm9yIHRoZSBjdXJyZW50IGVycm9yczogXCIgKyBlcnJvcnMpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICByZW5kZXJlZE1hdGNoZXMgPSByZW5kZXJlZE1hdGNoZXMuc2xpY2UoMCwgTWF0aC5taW4ocmVuZGVyZWRNYXRjaGVzLmxlbmd0aCwgZXJyb3JJbmRleCArIDEpKTtcbiAgfVxuXG4gIHJldHVybiByZW5kZXJlZE1hdGNoZXMucmVkdWNlUmlnaHQoKG91dGxldCwgbWF0Y2gsIGluZGV4KSA9PiB7XG4gICAgbGV0IGVycm9yID0gbWF0Y2gucm91dGUuaWQgPyBlcnJvcnMgPT0gbnVsbCA/IHZvaWQgMCA6IGVycm9yc1ttYXRjaC5yb3V0ZS5pZF0gOiBudWxsOyAvLyBPbmx5IGRhdGEgcm91dGVycyBoYW5kbGUgZXJyb3JzXG5cbiAgICBsZXQgZXJyb3JFbGVtZW50ID0gZGF0YVJvdXRlclN0YXRlID8gbWF0Y2gucm91dGUuZXJyb3JFbGVtZW50IHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERlZmF1bHRFcnJvckVsZW1lbnQsIG51bGwpIDogbnVsbDtcbiAgICBsZXQgbWF0Y2hlcyA9IHBhcmVudE1hdGNoZXMuY29uY2F0KHJlbmRlcmVkTWF0Y2hlcy5zbGljZSgwLCBpbmRleCArIDEpKTtcblxuICAgIGxldCBnZXRDaGlsZHJlbiA9ICgpID0+IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlbmRlcmVkUm91dGUsIHtcbiAgICAgIG1hdGNoOiBtYXRjaCxcbiAgICAgIHJvdXRlQ29udGV4dDoge1xuICAgICAgICBvdXRsZXQsXG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH1cbiAgICB9LCBlcnJvciA/IGVycm9yRWxlbWVudCA6IG1hdGNoLnJvdXRlLmVsZW1lbnQgIT09IHVuZGVmaW5lZCA/IG1hdGNoLnJvdXRlLmVsZW1lbnQgOiBvdXRsZXQpOyAvLyBPbmx5IHdyYXAgaW4gYW4gZXJyb3IgYm91bmRhcnkgd2l0aGluIGRhdGEgcm91dGVyIHVzYWdlcyB3aGVuIHdlIGhhdmUgYW5cbiAgICAvLyBlcnJvckVsZW1lbnQgb24gdGhpcyByb3V0ZS4gIE90aGVyd2lzZSBsZXQgaXQgYnViYmxlIHVwIHRvIGFuIGFuY2VzdG9yXG4gICAgLy8gZXJyb3JFbGVtZW50XG5cblxuICAgIHJldHVybiBkYXRhUm91dGVyU3RhdGUgJiYgKG1hdGNoLnJvdXRlLmVycm9yRWxlbWVudCB8fCBpbmRleCA9PT0gMCkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZW5kZXJFcnJvckJvdW5kYXJ5LCB7XG4gICAgICBsb2NhdGlvbjogZGF0YVJvdXRlclN0YXRlLmxvY2F0aW9uLFxuICAgICAgY29tcG9uZW50OiBlcnJvckVsZW1lbnQsXG4gICAgICBlcnJvcjogZXJyb3IsXG4gICAgICBjaGlsZHJlbjogZ2V0Q2hpbGRyZW4oKSxcbiAgICAgIHJvdXRlQ29udGV4dDoge1xuICAgICAgICBvdXRsZXQ6IG51bGwsXG4gICAgICAgIG1hdGNoZXNcbiAgICAgIH1cbiAgICB9KSA6IGdldENoaWxkcmVuKCk7XG4gIH0sIG51bGwpO1xufVxudmFyIERhdGFSb3V0ZXJIb29rO1xuXG4oZnVuY3Rpb24gKERhdGFSb3V0ZXJIb29rKSB7XG4gIERhdGFSb3V0ZXJIb29rW1wiVXNlQmxvY2tlclwiXSA9IFwidXNlQmxvY2tlclwiO1xuICBEYXRhUm91dGVySG9va1tcIlVzZVJldmFsaWRhdG9yXCJdID0gXCJ1c2VSZXZhbGlkYXRvclwiO1xufSkoRGF0YVJvdXRlckhvb2sgfHwgKERhdGFSb3V0ZXJIb29rID0ge30pKTtcblxudmFyIERhdGFSb3V0ZXJTdGF0ZUhvb2s7XG5cbihmdW5jdGlvbiAoRGF0YVJvdXRlclN0YXRlSG9vaykge1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTG9hZGVyRGF0YVwiXSA9IFwidXNlTG9hZGVyRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlQWN0aW9uRGF0YVwiXSA9IFwidXNlQWN0aW9uRGF0YVwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVFcnJvclwiXSA9IFwidXNlUm91dGVFcnJvclwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlTmF2aWdhdGlvblwiXSA9IFwidXNlTmF2aWdhdGlvblwiO1xuICBEYXRhUm91dGVyU3RhdGVIb29rW1wiVXNlUm91dGVMb2FkZXJEYXRhXCJdID0gXCJ1c2VSb3V0ZUxvYWRlckRhdGFcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZU1hdGNoZXNcIl0gPSBcInVzZU1hdGNoZXNcIjtcbiAgRGF0YVJvdXRlclN0YXRlSG9va1tcIlVzZVJldmFsaWRhdG9yXCJdID0gXCJ1c2VSZXZhbGlkYXRvclwiO1xufSkoRGF0YVJvdXRlclN0YXRlSG9vayB8fCAoRGF0YVJvdXRlclN0YXRlSG9vayA9IHt9KSk7XG5cbmZ1bmN0aW9uIGdldERhdGFSb3V0ZXJDb25zb2xlRXJyb3IoaG9va05hbWUpIHtcbiAgcmV0dXJuIGhvb2tOYW1lICsgXCIgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIGRhdGEgcm91dGVyLiAgU2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlcnMvcGlja2luZy1hLXJvdXRlci5cIjtcbn1cblxuZnVuY3Rpb24gdXNlRGF0YVJvdXRlckNvbnRleHQoaG9va05hbWUpIHtcbiAgbGV0IGN0eCA9IFJlYWN0LnVzZUNvbnRleHQoRGF0YVJvdXRlckNvbnRleHQpO1xuICAhY3R4ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gY3R4O1xufVxuXG5mdW5jdGlvbiB1c2VEYXRhUm91dGVyU3RhdGUoaG9va05hbWUpIHtcbiAgbGV0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgIXN0YXRlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBnZXREYXRhUm91dGVyQ29uc29sZUVycm9yKGhvb2tOYW1lKSkgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbmZ1bmN0aW9uIHVzZVJvdXRlQ29udGV4dChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSBSZWFjdC51c2VDb250ZXh0KFJvdXRlQ29udGV4dCk7XG4gICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgZ2V0RGF0YVJvdXRlckNvbnNvbGVFcnJvcihob29rTmFtZSkpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHJvdXRlO1xufVxuXG5mdW5jdGlvbiB1c2VDdXJyZW50Um91dGVJZChob29rTmFtZSkge1xuICBsZXQgcm91dGUgPSB1c2VSb3V0ZUNvbnRleHQoaG9va05hbWUpO1xuICBsZXQgdGhpc1JvdXRlID0gcm91dGUubWF0Y2hlc1tyb3V0ZS5tYXRjaGVzLmxlbmd0aCAtIDFdO1xuICAhdGhpc1JvdXRlLnJvdXRlLmlkID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBob29rTmFtZSArIFwiIGNhbiBvbmx5IGJlIHVzZWQgb24gcm91dGVzIHRoYXQgY29udGFpbiBhIHVuaXF1ZSBcXFwiaWRcXFwiXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHRoaXNSb3V0ZS5yb3V0ZS5pZDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3VycmVudCBuYXZpZ2F0aW9uLCBkZWZhdWx0aW5nIHRvIGFuIFwiaWRsZVwiIG5hdmlnYXRpb24gd2hlblxuICogbm8gbmF2aWdhdGlvbiBpcyBpbiBwcm9ncmVzc1xuICovXG5cblxuZnVuY3Rpb24gdXNlTmF2aWdhdGlvbigpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTmF2aWdhdGlvbik7XG4gIHJldHVybiBzdGF0ZS5uYXZpZ2F0aW9uO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgcmV2YWxpZGF0ZSBmdW5jdGlvbiBmb3IgbWFudWFsbHkgdHJpZ2dlcmluZyByZXZhbGlkYXRpb24sIGFzIHdlbGxcbiAqIGFzIHRoZSBjdXJyZW50IHN0YXRlIG9mIGFueSBtYW51YWwgcmV2YWxpZGF0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHVzZVJldmFsaWRhdG9yKCkge1xuICBsZXQgZGF0YVJvdXRlckNvbnRleHQgPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VSZXZhbGlkYXRvcik7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJldmFsaWRhdG9yKTtcbiAgcmV0dXJuIHtcbiAgICByZXZhbGlkYXRlOiBkYXRhUm91dGVyQ29udGV4dC5yb3V0ZXIucmV2YWxpZGF0ZSxcbiAgICBzdGF0ZTogc3RhdGUucmV2YWxpZGF0aW9uXG4gIH07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGFjdGl2ZSByb3V0ZSBtYXRjaGVzLCB1c2VmdWwgZm9yIGFjY2Vzc2luZyBsb2FkZXJEYXRhIGZvclxuICogcGFyZW50L2NoaWxkIHJvdXRlcyBvciB0aGUgcm91dGUgXCJoYW5kbGVcIiBwcm9wZXJ0eVxuICovXG5cbmZ1bmN0aW9uIHVzZU1hdGNoZXMoKSB7XG4gIGxldCB7XG4gICAgbWF0Y2hlcyxcbiAgICBsb2FkZXJEYXRhXG4gIH0gPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VNYXRjaGVzKTtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4gbWF0Y2hlcy5tYXAobWF0Y2ggPT4ge1xuICAgIGxldCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHBhcmFtc1xuICAgIH0gPSBtYXRjaDsgLy8gTm90ZTogVGhpcyBzdHJ1Y3R1cmUgbWF0Y2hlcyB0aGF0IGNyZWF0ZWQgYnkgY3JlYXRlVXNlTWF0Y2hlc01hdGNoXG4gICAgLy8gaW4gdGhlIEByZW1peC1ydW4vcm91dGVyICwgc28gaWYgeW91IGNoYW5nZSB0aGlzIHBsZWFzZSBhbHNvIGNoYW5nZVxuICAgIC8vIHRoYXQgOikgIEV2ZW50dWFsbHkgd2UnbGwgRFJZIHRoaXMgdXBcblxuICAgIHJldHVybiB7XG4gICAgICBpZDogbWF0Y2gucm91dGUuaWQsXG4gICAgICBwYXRobmFtZSxcbiAgICAgIHBhcmFtcyxcbiAgICAgIGRhdGE6IGxvYWRlckRhdGFbbWF0Y2gucm91dGUuaWRdLFxuICAgICAgaGFuZGxlOiBtYXRjaC5yb3V0ZS5oYW5kbGVcbiAgICB9O1xuICB9KSwgW21hdGNoZXMsIGxvYWRlckRhdGFdKTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbG9hZGVyIGRhdGEgZm9yIHRoZSBuZWFyZXN0IGFuY2VzdG9yIFJvdXRlIGxvYWRlclxuICovXG5cbmZ1bmN0aW9uIHVzZUxvYWRlckRhdGEoKSB7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZUxvYWRlckRhdGEpO1xuICBsZXQgcm91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlTG9hZGVyRGF0YSk7XG5cbiAgaWYgKHN0YXRlLmVycm9ycyAmJiBzdGF0ZS5lcnJvcnNbcm91dGVJZF0gIT0gbnVsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UgY2Fubm90IGB1c2VMb2FkZXJEYXRhYCBpbiBhbiBlcnJvckVsZW1lbnQgKHJvdXRlSWQ6IFwiICsgcm91dGVJZCArIFwiKVwiKTtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlLmxvYWRlckRhdGFbcm91dGVJZF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGxvYWRlckRhdGEgZm9yIHRoZSBnaXZlbiByb3V0ZUlkXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVMb2FkZXJEYXRhKHJvdXRlSWQpIHtcbiAgbGV0IHN0YXRlID0gdXNlRGF0YVJvdXRlclN0YXRlKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVMb2FkZXJEYXRhKTtcbiAgcmV0dXJuIHN0YXRlLmxvYWRlckRhdGFbcm91dGVJZF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGFjdGlvbiBkYXRhIGZvciB0aGUgbmVhcmVzdCBhbmNlc3RvciBSb3V0ZSBhY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiB1c2VBY3Rpb25EYXRhKCkge1xuICBsZXQgc3RhdGUgPSB1c2VEYXRhUm91dGVyU3RhdGUoRGF0YVJvdXRlclN0YXRlSG9vay5Vc2VBY3Rpb25EYXRhKTtcbiAgbGV0IHJvdXRlID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUNvbnRleHQpO1xuICAhcm91dGUgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwidXNlQWN0aW9uRGF0YSBtdXN0IGJlIHVzZWQgaW5zaWRlIGEgUm91dGVDb250ZXh0XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoKHN0YXRlID09IG51bGwgPyB2b2lkIDAgOiBzdGF0ZS5hY3Rpb25EYXRhKSB8fCB7fSlbMF07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIG5lYXJlc3QgYW5jZXN0b3IgUm91dGUgZXJyb3IsIHdoaWNoIGNvdWxkIGJlIGEgbG9hZGVyL2FjdGlvblxuICogZXJyb3Igb3IgYSByZW5kZXIgZXJyb3IuICBUaGlzIGlzIGludGVuZGVkIHRvIGJlIGNhbGxlZCBmcm9tIHlvdXJcbiAqIGVycm9yRWxlbWVudCB0byBkaXNwbGF5IGEgcHJvcGVyIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gdXNlUm91dGVFcnJvcigpIHtcbiAgdmFyIF9zdGF0ZSRlcnJvcnM7XG5cbiAgbGV0IGVycm9yID0gUmVhY3QudXNlQ29udGV4dChSb3V0ZUVycm9yQ29udGV4dCk7XG4gIGxldCBzdGF0ZSA9IHVzZURhdGFSb3V0ZXJTdGF0ZShEYXRhUm91dGVyU3RhdGVIb29rLlVzZVJvdXRlRXJyb3IpO1xuICBsZXQgcm91dGVJZCA9IHVzZUN1cnJlbnRSb3V0ZUlkKERhdGFSb3V0ZXJTdGF0ZUhvb2suVXNlUm91dGVFcnJvcik7IC8vIElmIHRoaXMgd2FzIGEgcmVuZGVyIGVycm9yLCB3ZSBwdXQgaXQgaW4gYSBSb3V0ZUVycm9yIGNvbnRleHQgaW5zaWRlXG4gIC8vIG9mIFJlbmRlckVycm9yQm91bmRhcnlcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH0gLy8gT3RoZXJ3aXNlIGxvb2sgZm9yIGVycm9ycyBmcm9tIG91ciBkYXRhIHJvdXRlciBzdGF0ZVxuXG5cbiAgcmV0dXJuIChfc3RhdGUkZXJyb3JzID0gc3RhdGUuZXJyb3JzKSA9PSBudWxsID8gdm9pZCAwIDogX3N0YXRlJGVycm9yc1tyb3V0ZUlkXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaGFwcHktcGF0aCBkYXRhIGZyb20gdGhlIG5lYXJlc3QgYW5jZXN0b3IgPEF3YWl0IC8+IHZhbHVlXG4gKi9cblxuZnVuY3Rpb24gdXNlQXN5bmNWYWx1ZSgpIHtcbiAgbGV0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChBd2FpdENvbnRleHQpO1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IHZvaWQgMCA6IHZhbHVlLl9kYXRhO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBlcnJvciBmcm9tIHRoZSBuZWFyZXN0IGFuY2VzdG9yIDxBd2FpdCAvPiB2YWx1ZVxuICovXG5cbmZ1bmN0aW9uIHVzZUFzeW5jRXJyb3IoKSB7XG4gIGxldCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoQXdhaXRDb250ZXh0KTtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyB2b2lkIDAgOiB2YWx1ZS5fZXJyb3I7XG59XG5sZXQgYmxvY2tlcklkID0gMDtcbi8qKlxuICogQWxsb3cgdGhlIGFwcGxpY2F0aW9uIHRvIGJsb2NrIG5hdmlnYXRpb25zIHdpdGhpbiB0aGUgU1BBIGFuZCBwcmVzZW50IHRoZVxuICogdXNlciBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgdG8gY29uZmlybSB0aGUgbmF2aWdhdGlvbi4gIE1vc3RseSB1c2VkIHRvIGF2b2lkXG4gKiB1c2luZyBoYWxmLWZpbGxlZCBmb3JtIGRhdGEuICBUaGlzIGRvZXMgbm90IGhhbmRsZSBoYXJkLXJlbG9hZHMgb3JcbiAqIGNyb3NzLW9yaWdpbiBuYXZpZ2F0aW9ucy5cbiAqL1xuXG5mdW5jdGlvbiB1c2VCbG9ja2VyKHNob3VsZEJsb2NrKSB7XG4gIGxldCB7XG4gICAgcm91dGVyXG4gIH0gPSB1c2VEYXRhUm91dGVyQ29udGV4dChEYXRhUm91dGVySG9vay5Vc2VCbG9ja2VyKTtcbiAgbGV0IFtibG9ja2VyS2V5XSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IFN0cmluZygrK2Jsb2NrZXJJZCkpO1xuICBsZXQgYmxvY2tlckZ1bmN0aW9uID0gUmVhY3QudXNlQ2FsbGJhY2soYXJncyA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiBzaG91bGRCbG9jayA9PT0gXCJmdW5jdGlvblwiID8gISFzaG91bGRCbG9jayhhcmdzKSA6ICEhc2hvdWxkQmxvY2s7XG4gIH0sIFtzaG91bGRCbG9ja10pO1xuICBsZXQgYmxvY2tlciA9IHJvdXRlci5nZXRCbG9ja2VyKGJsb2NrZXJLZXksIGJsb2NrZXJGdW5jdGlvbik7IC8vIENsZWFudXAgb24gdW5tb3VudFxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiAoKSA9PiByb3V0ZXIuZGVsZXRlQmxvY2tlcihibG9ja2VyS2V5KSwgW3JvdXRlciwgYmxvY2tlcktleV0pO1xuICByZXR1cm4gYmxvY2tlcjtcbn1cbmNvbnN0IGFscmVhZHlXYXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gd2FybmluZ09uY2Uoa2V5LCBjb25kLCBtZXNzYWdlKSB7XG4gIGlmICghY29uZCAmJiAhYWxyZWFkeVdhcm5lZFtrZXldKSB7XG4gICAgYWxyZWFkeVdhcm5lZFtrZXldID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBtZXNzYWdlKSA6IHZvaWQgMDtcbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGEgUmVtaXggUm91dGVyIGluc3RhbmNlLCByZW5kZXIgdGhlIGFwcHJvcHJpYXRlIFVJXG4gKi9cbmZ1bmN0aW9uIFJvdXRlclByb3ZpZGVyKF9yZWYpIHtcbiAgbGV0IHtcbiAgICBmYWxsYmFja0VsZW1lbnQsXG4gICAgcm91dGVyXG4gIH0gPSBfcmVmO1xuICAvLyBTeW5jIHJvdXRlciBzdGF0ZSB0byBvdXIgY29tcG9uZW50IHN0YXRlIHRvIGZvcmNlIHJlLXJlbmRlcnNcbiAgbGV0IHN0YXRlID0gdXNlU3luY0V4dGVybmFsU3RvcmUocm91dGVyLnN1YnNjcmliZSwgKCkgPT4gcm91dGVyLnN0YXRlLCAvLyBXZSBoYXZlIHRvIHByb3ZpZGUgdGhpcyBzbyBSZWFjdEAxOCBkb2Vzbid0IGNvbXBsYWluIGR1cmluZyBoeWRyYXRpb24sXG4gIC8vIGJ1dCB3ZSBwYXNzIG91ciBzZXJpYWxpemVkIGh5ZHJhdGlvbiBkYXRhIGludG8gdGhlIHJvdXRlciBzbyBzdGF0ZSBoZXJlXG4gIC8vIGlzIGFscmVhZHkgc3luY2VkIHdpdGggd2hhdCB0aGUgc2VydmVyIHNhd1xuICAoKSA9PiByb3V0ZXIuc3RhdGUpO1xuICBsZXQgbmF2aWdhdG9yID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUhyZWY6IHJvdXRlci5jcmVhdGVIcmVmLFxuICAgICAgZW5jb2RlTG9jYXRpb246IHJvdXRlci5lbmNvZGVMb2NhdGlvbixcbiAgICAgIGdvOiBuID0+IHJvdXRlci5uYXZpZ2F0ZShuKSxcbiAgICAgIHB1c2g6ICh0bywgc3RhdGUsIG9wdHMpID0+IHJvdXRlci5uYXZpZ2F0ZSh0bywge1xuICAgICAgICBzdGF0ZSxcbiAgICAgICAgcHJldmVudFNjcm9sbFJlc2V0OiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLnByZXZlbnRTY3JvbGxSZXNldFxuICAgICAgfSksXG4gICAgICByZXBsYWNlOiAodG8sIHN0YXRlLCBvcHRzKSA9PiByb3V0ZXIubmF2aWdhdGUodG8sIHtcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIHByZXZlbnRTY3JvbGxSZXNldDogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5wcmV2ZW50U2Nyb2xsUmVzZXRcbiAgICAgIH0pXG4gICAgfTtcbiAgfSwgW3JvdXRlcl0pO1xuICBsZXQgYmFzZW5hbWUgPSByb3V0ZXIuYmFzZW5hbWUgfHwgXCIvXCI7IC8vIFRoZSBmcmFnbWVudCBhbmQge251bGx9IGhlcmUgYXJlIGltcG9ydGFudCEgIFdlIG5lZWQgdGhlbSB0byBrZWVwIFJlYWN0IDE4J3NcbiAgLy8gdXNlSWQgaGFwcHkgd2hlbiB3ZSBhcmUgc2VydmVyLXJlbmRlcmluZyBzaW5jZSB3ZSBtYXkgaGF2ZSBhIDxzY3JpcHQ+IGhlcmVcbiAgLy8gY29udGFpbmluZyB0aGUgaHlkcmF0ZWQgc2VydmVyLXNpZGUgc3RhdGljQ29udGV4dCAoZnJvbSBTdGF0aWNSb3V0ZXJQcm92aWRlcikuXG4gIC8vIHVzZUlkIHJlbGllcyBvbiB0aGUgY29tcG9uZW50IHRyZWUgc3RydWN0dXJlIHRvIGdlbmVyYXRlIGRldGVybWluaXN0aWMgaWQnc1xuICAvLyBzbyB3ZSBuZWVkIHRvIGVuc3VyZSBpdCByZW1haW5zIHRoZSBzYW1lIG9uIHRoZSBjbGllbnQgZXZlbiB0aG91Z2hcbiAgLy8gd2UgZG9uJ3QgbmVlZCB0aGUgPHNjcmlwdD4gdGFnXG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChEYXRhUm91dGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB7XG4gICAgICByb3V0ZXIsXG4gICAgICBuYXZpZ2F0b3IsXG4gICAgICBzdGF0aWM6IGZhbHNlLFxuICAgICAgLy8gRG8gd2UgbmVlZCB0aGlzP1xuICAgICAgYmFzZW5hbWVcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3RhdGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgYmFzZW5hbWU6IHJvdXRlci5iYXNlbmFtZSxcbiAgICBsb2NhdGlvbjogcm91dGVyLnN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiByb3V0ZXIuc3RhdGUuaGlzdG9yeUFjdGlvbixcbiAgICBuYXZpZ2F0b3I6IG5hdmlnYXRvclxuICB9LCByb3V0ZXIuc3RhdGUuaW5pdGlhbGl6ZWQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXMsIG51bGwpIDogZmFsbGJhY2tFbGVtZW50KSkpLCBudWxsKTtcbn1cblxuLyoqXG4gKiBBIDxSb3V0ZXI+IHRoYXQgc3RvcmVzIGFsbCBlbnRyaWVzIGluIG1lbW9yeS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL3JvdXRlci1jb21wb25lbnRzL21lbW9yeS1yb3V0ZXJcbiAqL1xuZnVuY3Rpb24gTWVtb3J5Um91dGVyKF9yZWYyKSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgaW5pdGlhbEVudHJpZXMsXG4gICAgaW5pdGlhbEluZGV4XG4gIH0gPSBfcmVmMjtcbiAgbGV0IGhpc3RvcnlSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICBpZiAoaGlzdG9yeVJlZi5jdXJyZW50ID09IG51bGwpIHtcbiAgICBoaXN0b3J5UmVmLmN1cnJlbnQgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KHtcbiAgICAgIGluaXRpYWxFbnRyaWVzLFxuICAgICAgaW5pdGlhbEluZGV4LFxuICAgICAgdjVDb21wYXQ6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBoaXN0b3J5ID0gaGlzdG9yeVJlZi5jdXJyZW50O1xuICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgYWN0aW9uOiBoaXN0b3J5LmFjdGlvbixcbiAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvblxuICB9KTtcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGhpc3RvcnkubGlzdGVuKHNldFN0YXRlKSwgW2hpc3RvcnldKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJvdXRlciwge1xuICAgIGJhc2VuYW1lOiBiYXNlbmFtZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uLFxuICAgIG5hdmlnYXRpb25UeXBlOiBzdGF0ZS5hY3Rpb24sXG4gICAgbmF2aWdhdG9yOiBoaXN0b3J5XG4gIH0pO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24uXG4gKlxuICogTm90ZTogVGhpcyBBUEkgaXMgbW9zdGx5IHVzZWZ1bCBpbiBSZWFjdC5Db21wb25lbnQgc3ViY2xhc3NlcyB0aGF0IGFyZSBub3RcbiAqIGFibGUgdG8gdXNlIGhvb2tzLiBJbiBmdW5jdGlvbmFsIGNvbXBvbmVudHMsIHdlIHJlY29tbWVuZCB5b3UgdXNlIHRoZVxuICogYHVzZU5hdmlnYXRlYCBob29rIGluc3RlYWQuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL25hdmlnYXRlXG4gKi9cbmZ1bmN0aW9uIE5hdmlnYXRlKF9yZWYzKSB7XG4gIGxldCB7XG4gICAgdG8sXG4gICAgcmVwbGFjZSxcbiAgICBzdGF0ZSxcbiAgICByZWxhdGl2ZVxuICB9ID0gX3JlZjM7XG4gICF1c2VJblJvdXRlckNvbnRleHQoKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgLy8gVE9ETzogVGhpcyBlcnJvciBpcyBwcm9iYWJseSBiZWNhdXNlIHRoZXkgc29tZWhvdyBoYXZlIDIgdmVyc2lvbnMgb2ZcbiAgLy8gdGhlIHJvdXRlciBsb2FkZWQuIFdlIGNhbiBoZWxwIHRoZW0gdW5kZXJzdGFuZCBob3cgdG8gYXZvaWQgdGhhdC5cbiAgXCI8TmF2aWdhdGU+IG1heSBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgYSA8Um91dGVyPiBjb21wb25lbnQuXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghUmVhY3QudXNlQ29udGV4dChOYXZpZ2F0aW9uQ29udGV4dCkuc3RhdGljLCBcIjxOYXZpZ2F0ZT4gbXVzdCBub3QgYmUgdXNlZCBvbiB0aGUgaW5pdGlhbCByZW5kZXIgaW4gYSA8U3RhdGljUm91dGVyPi4gXCIgKyBcIlRoaXMgaXMgYSBuby1vcCwgYnV0IHlvdSBzaG91bGQgbW9kaWZ5IHlvdXIgY29kZSBzbyB0aGUgPE5hdmlnYXRlPiBpcyBcIiArIFwib25seSBldmVyIHJlbmRlcmVkIGluIHJlc3BvbnNlIHRvIHNvbWUgdXNlciBpbnRlcmFjdGlvbiBvciBzdGF0ZSBjaGFuZ2UuXCIpIDogdm9pZCAwO1xuICBsZXQgZGF0YVJvdXRlclN0YXRlID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyU3RhdGVDb250ZXh0KTtcbiAgbGV0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBBdm9pZCBraWNraW5nIG9mZiBtdWx0aXBsZSBuYXZpZ2F0aW9ucyBpZiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGFcbiAgICAvLyBkYXRhLXJvdXRlciBuYXZpZ2F0aW9uLCBzaW5jZSBjb21wb25lbnRzIGdldCByZS1yZW5kZXJlZCB3aGVuIHdlIGVudGVyXG4gICAgLy8gYSBzdWJtaXR0aW5nL2xvYWRpbmcgc3RhdGVcbiAgICBpZiAoZGF0YVJvdXRlclN0YXRlICYmIGRhdGFSb3V0ZXJTdGF0ZS5uYXZpZ2F0aW9uLnN0YXRlICE9PSBcImlkbGVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5hdmlnYXRlKHRvLCB7XG4gICAgICByZXBsYWNlLFxuICAgICAgc3RhdGUsXG4gICAgICByZWxhdGl2ZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgY2hpbGQgcm91dGUncyBlbGVtZW50LCBpZiB0aGVyZSBpcyBvbmUuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9jb21wb25lbnRzL291dGxldFxuICovXG5mdW5jdGlvbiBPdXRsZXQocHJvcHMpIHtcbiAgcmV0dXJuIHVzZU91dGxldChwcm9wcy5jb250ZXh0KTtcbn1cblxuLyoqXG4gKiBEZWNsYXJlcyBhbiBlbGVtZW50IHRoYXQgc2hvdWxkIGJlIHJlbmRlcmVkIGF0IGEgY2VydGFpbiBVUkwgcGF0aC5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvcm91dGVcbiAqL1xuZnVuY3Rpb24gUm91dGUoX3Byb3BzKSB7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJBIDxSb3V0ZT4gaXMgb25seSBldmVyIHRvIGJlIHVzZWQgYXMgdGhlIGNoaWxkIG9mIDxSb3V0ZXM+IGVsZW1lbnQsIFwiICsgXCJuZXZlciByZW5kZXJlZCBkaXJlY3RseS4gUGxlYXNlIHdyYXAgeW91ciA8Um91dGU+IGluIGEgPFJvdXRlcz4uXCIpIDogaW52YXJpYW50KGZhbHNlKSA7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgbG9jYXRpb24gY29udGV4dCBmb3IgdGhlIHJlc3Qgb2YgdGhlIGFwcC5cbiAqXG4gKiBOb3RlOiBZb3UgdXN1YWxseSB3b24ndCByZW5kZXIgYSA8Um91dGVyPiBkaXJlY3RseS4gSW5zdGVhZCwgeW91J2xsIHJlbmRlciBhXG4gKiByb3V0ZXIgdGhhdCBpcyBtb3JlIHNwZWNpZmljIHRvIHlvdXIgZW52aXJvbm1lbnQgc3VjaCBhcyBhIDxCcm93c2VyUm91dGVyPlxuICogaW4gd2ViIGJyb3dzZXJzIG9yIGEgPFN0YXRpY1JvdXRlcj4gZm9yIHNlcnZlciByZW5kZXJpbmcuXG4gKlxuICogQHNlZSBodHRwczovL3JlYWN0cm91dGVyLmNvbS9yb3V0ZXItY29tcG9uZW50cy9yb3V0ZXJcbiAqL1xuZnVuY3Rpb24gUm91dGVyKF9yZWY0KSB7XG4gIGxldCB7XG4gICAgYmFzZW5hbWU6IGJhc2VuYW1lUHJvcCA9IFwiL1wiLFxuICAgIGNoaWxkcmVuID0gbnVsbCxcbiAgICBsb2NhdGlvbjogbG9jYXRpb25Qcm9wLFxuICAgIG5hdmlnYXRpb25UeXBlID0gQWN0aW9uLlBvcCxcbiAgICBuYXZpZ2F0b3IsXG4gICAgc3RhdGljOiBzdGF0aWNQcm9wID0gZmFsc2VcbiAgfSA9IF9yZWY0O1xuICAhIXVzZUluUm91dGVyQ29udGV4dCgpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBjYW5ub3QgcmVuZGVyIGEgPFJvdXRlcj4gaW5zaWRlIGFub3RoZXIgPFJvdXRlcj4uXCIgKyBcIiBZb3Ugc2hvdWxkIG5ldmVyIGhhdmUgbW9yZSB0aGFuIG9uZSBpbiB5b3VyIGFwcC5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwOyAvLyBQcmVzZXJ2ZSB0cmFpbGluZyBzbGFzaGVzIG9uIGJhc2VuYW1lLCBzbyB3ZSBjYW4gbGV0IHRoZSB1c2VyIGNvbnRyb2xcbiAgLy8gdGhlIGVuZm9yY2VtZW50IG9mIHRyYWlsaW5nIHNsYXNoZXMgdGhyb3VnaG91dCB0aGUgYXBwXG5cbiAgbGV0IGJhc2VuYW1lID0gYmFzZW5hbWVQcm9wLnJlcGxhY2UoL15cXC8qLywgXCIvXCIpO1xuICBsZXQgbmF2aWdhdGlvbkNvbnRleHQgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7XG4gICAgYmFzZW5hbWUsXG4gICAgbmF2aWdhdG9yLFxuICAgIHN0YXRpYzogc3RhdGljUHJvcFxuICB9KSwgW2Jhc2VuYW1lLCBuYXZpZ2F0b3IsIHN0YXRpY1Byb3BdKTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uUHJvcCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxvY2F0aW9uUHJvcCA9IHBhcnNlUGF0aChsb2NhdGlvblByb3ApO1xuICB9XG5cbiAgbGV0IHtcbiAgICBwYXRobmFtZSA9IFwiL1wiLFxuICAgIHNlYXJjaCA9IFwiXCIsXG4gICAgaGFzaCA9IFwiXCIsXG4gICAgc3RhdGUgPSBudWxsLFxuICAgIGtleSA9IFwiZGVmYXVsdFwiXG4gIH0gPSBsb2NhdGlvblByb3A7XG4gIGxldCBsb2NhdGlvbiA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCB0cmFpbGluZ1BhdGhuYW1lID0gc3RyaXBCYXNlbmFtZShwYXRobmFtZSwgYmFzZW5hbWUpO1xuXG4gICAgaWYgKHRyYWlsaW5nUGF0aG5hbWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhdGhuYW1lOiB0cmFpbGluZ1BhdGhuYW1lLFxuICAgICAgc2VhcmNoLFxuICAgICAgaGFzaCxcbiAgICAgIHN0YXRlLFxuICAgICAga2V5XG4gICAgfTtcbiAgfSwgW2Jhc2VuYW1lLCBwYXRobmFtZSwgc2VhcmNoLCBoYXNoLCBzdGF0ZSwga2V5XSk7XG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcobG9jYXRpb24gIT0gbnVsbCwgXCI8Um91dGVyIGJhc2VuYW1lPVxcXCJcIiArIGJhc2VuYW1lICsgXCJcXFwiPiBpcyBub3QgYWJsZSB0byBtYXRjaCB0aGUgVVJMIFwiICsgKFwiXFxcIlwiICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoICsgXCJcXFwiIGJlY2F1c2UgaXQgZG9lcyBub3Qgc3RhcnQgd2l0aCB0aGUgXCIpICsgXCJiYXNlbmFtZSwgc28gdGhlIDxSb3V0ZXI+IHdvbid0IHJlbmRlciBhbnl0aGluZy5cIikgOiB2b2lkIDA7XG5cbiAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZpZ2F0aW9uQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBuYXZpZ2F0aW9uQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhdGlvbkNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgdmFsdWU6IHtcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgbmF2aWdhdGlvblR5cGVcbiAgICB9XG4gIH0pKTtcbn1cblxuLyoqXG4gKiBBIGNvbnRhaW5lciBmb3IgYSBuZXN0ZWQgdHJlZSBvZiA8Um91dGU+IGVsZW1lbnRzIHRoYXQgcmVuZGVycyB0aGUgYnJhbmNoXG4gKiB0aGF0IGJlc3QgbWF0Y2hlcyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2NvbXBvbmVudHMvcm91dGVzXG4gKi9cbmZ1bmN0aW9uIFJvdXRlcyhfcmVmNSkge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIGxvY2F0aW9uXG4gIH0gPSBfcmVmNTtcbiAgbGV0IGRhdGFSb3V0ZXJDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChEYXRhUm91dGVyQ29udGV4dCk7IC8vIFdoZW4gaW4gYSBEYXRhUm91dGVyQ29udGV4dCBfd2l0aG91dF8gY2hpbGRyZW4sIHdlIHVzZSB0aGUgcm91dGVyIHJvdXRlc1xuICAvLyBkaXJlY3RseS4gIElmIHdlIGhhdmUgY2hpbGRyZW4sIHRoZW4gd2UncmUgaW4gYSBkZXNjZW5kYW50IHRyZWUgYW5kIHdlXG4gIC8vIG5lZWQgdG8gdXNlIGNoaWxkIHJvdXRlcy5cblxuICBsZXQgcm91dGVzID0gZGF0YVJvdXRlckNvbnRleHQgJiYgIWNoaWxkcmVuID8gZGF0YVJvdXRlckNvbnRleHQucm91dGVyLnJvdXRlcyA6IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihjaGlsZHJlbik7XG4gIHJldHVybiB1c2VSb3V0ZXMocm91dGVzLCBsb2NhdGlvbik7XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHRvIHVzZSBmb3IgcmVuZGVyaW5nIGxhemlseSBsb2FkZWQgZGF0YSBmcm9tIHJldHVybmluZyBkZWZlcigpXG4gKiBpbiBhIGxvYWRlciBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBBd2FpdChfcmVmNikge1xuICBsZXQge1xuICAgIGNoaWxkcmVuLFxuICAgIGVycm9yRWxlbWVudCxcbiAgICByZXNvbHZlXG4gIH0gPSBfcmVmNjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEF3YWl0RXJyb3JCb3VuZGFyeSwge1xuICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgZXJyb3JFbGVtZW50OiBlcnJvckVsZW1lbnRcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVzb2x2ZUF3YWl0LCBudWxsLCBjaGlsZHJlbikpO1xufVxudmFyIEF3YWl0UmVuZGVyU3RhdHVzO1xuXG4oZnVuY3Rpb24gKEF3YWl0UmVuZGVyU3RhdHVzKSB7XG4gIEF3YWl0UmVuZGVyU3RhdHVzW0F3YWl0UmVuZGVyU3RhdHVzW1wicGVuZGluZ1wiXSA9IDBdID0gXCJwZW5kaW5nXCI7XG4gIEF3YWl0UmVuZGVyU3RhdHVzW0F3YWl0UmVuZGVyU3RhdHVzW1wic3VjY2Vzc1wiXSA9IDFdID0gXCJzdWNjZXNzXCI7XG4gIEF3YWl0UmVuZGVyU3RhdHVzW0F3YWl0UmVuZGVyU3RhdHVzW1wiZXJyb3JcIl0gPSAyXSA9IFwiZXJyb3JcIjtcbn0pKEF3YWl0UmVuZGVyU3RhdHVzIHx8IChBd2FpdFJlbmRlclN0YXR1cyA9IHt9KSk7XG5cbmNvbnN0IG5ldmVyU2V0dGxlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgoKSA9PiB7fSk7XG5cbmNsYXNzIEF3YWl0RXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjogbnVsbFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBlcnJvckluZm8pIHtcbiAgICBjb25zb2xlLmVycm9yKFwiPEF3YWl0PiBjYXVnaHQgdGhlIGZvbGxvd2luZyBlcnJvciBkdXJpbmcgcmVuZGVyXCIsIGVycm9yLCBlcnJvckluZm8pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGVycm9yRWxlbWVudCxcbiAgICAgIHJlc29sdmVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgcHJvbWlzZSA9IG51bGw7XG4gICAgbGV0IHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLnBlbmRpbmc7XG5cbiAgICBpZiAoIShyZXNvbHZlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgIC8vIERpZG4ndCBnZXQgYSBwcm9taXNlIC0gcHJvdmlkZSBhcyBhIHJlc29sdmVkIHByb21pc2VcbiAgICAgIHN0YXR1cyA9IEF3YWl0UmVuZGVyU3RhdHVzLnN1Y2Nlc3M7XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfdHJhY2tlZFwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gdHJ1ZVxuICAgICAgfSk7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZSwgXCJfZGF0YVwiLCB7XG4gICAgICAgIGdldDogKCkgPT4gcmVzb2x2ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmVycm9yKSB7XG4gICAgICAvLyBDYXVnaHQgYSByZW5kZXIgZXJyb3IsIHByb3ZpZGUgaXQgYXMgYSByZWplY3RlZCBwcm9taXNlXG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5lcnJvcjtcbiAgICAgIGxldCByZW5kZXJFcnJvciA9IHRoaXMuc3RhdGUuZXJyb3I7XG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZWplY3QoKS5jYXRjaCgoKSA9PiB7fSk7IC8vIEF2b2lkIHVuaGFuZGxlZCByZWplY3Rpb24gd2FybmluZ3NcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb21pc2UsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiByZW5kZXJFcnJvclxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChyZXNvbHZlLl90cmFja2VkKSB7XG4gICAgICAvLyBBbHJlYWR5IHRyYWNrZWQgcHJvbWlzZSAtIGNoZWNrIGNvbnRlbnRzXG4gICAgICBwcm9taXNlID0gcmVzb2x2ZTtcbiAgICAgIHN0YXR1cyA9IHByb21pc2UuX2Vycm9yICE9PSB1bmRlZmluZWQgPyBBd2FpdFJlbmRlclN0YXR1cy5lcnJvciA6IHByb21pc2UuX2RhdGEgIT09IHVuZGVmaW5lZCA/IEF3YWl0UmVuZGVyU3RhdHVzLnN1Y2Nlc3MgOiBBd2FpdFJlbmRlclN0YXR1cy5wZW5kaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSYXcgKHVudHJhY2tlZCkgcHJvbWlzZSAtIHRyYWNrIGl0XG4gICAgICBzdGF0dXMgPSBBd2FpdFJlbmRlclN0YXR1cy5wZW5kaW5nO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX3RyYWNrZWRcIiwge1xuICAgICAgICBnZXQ6ICgpID0+IHRydWVcbiAgICAgIH0pO1xuICAgICAgcHJvbWlzZSA9IHJlc29sdmUudGhlbihkYXRhID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXNvbHZlLCBcIl9kYXRhXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBkYXRhXG4gICAgICB9KSwgZXJyb3IgPT4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmUsIFwiX2Vycm9yXCIsIHtcbiAgICAgICAgZ2V0OiAoKSA9PiBlcnJvclxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yICYmIHByb21pc2UuX2Vycm9yIGluc3RhbmNlb2YgQWJvcnRlZERlZmVycmVkRXJyb3IpIHtcbiAgICAgIC8vIEZyZWV6ZSB0aGUgVUkgYnkgdGhyb3dpbmcgYSBuZXZlciByZXNvbHZlZCBwcm9taXNlXG4gICAgICB0aHJvdyBuZXZlclNldHRsZWRQcm9taXNlO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yICYmICFlcnJvckVsZW1lbnQpIHtcbiAgICAgIC8vIE5vIGVycm9yRWxlbWVudCwgdGhyb3cgdG8gdGhlIG5lYXJlc3Qgcm91dGUtbGV2ZWwgZXJyb3IgYm91bmRhcnlcbiAgICAgIHRocm93IHByb21pc2UuX2Vycm9yO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09IEF3YWl0UmVuZGVyU3RhdHVzLmVycm9yKSB7XG4gICAgICAvLyBSZW5kZXIgdmlhIG91ciBlcnJvckVsZW1lbnRcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBd2FpdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHByb21pc2UsXG4gICAgICAgIGNoaWxkcmVuOiBlcnJvckVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdGF0dXMgPT09IEF3YWl0UmVuZGVyU3RhdHVzLnN1Y2Nlc3MpIHtcbiAgICAgIC8vIFJlbmRlciBjaGlsZHJlbiB3aXRoIHJlc29sdmVkIHZhbHVlXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQXdhaXRDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBwcm9taXNlLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0pO1xuICAgIH0gLy8gVGhyb3cgdG8gdGhlIHN1c3BlbnNlIGJvdW5kYXJ5XG5cblxuICAgIHRocm93IHByb21pc2U7XG4gIH1cblxufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICogSW5kaXJlY3Rpb24gdG8gbGV2ZXJhZ2UgdXNlQXN5bmNWYWx1ZSBmb3IgYSByZW5kZXItcHJvcCBBUEkgb24gPEF3YWl0PlxuICovXG5cblxuZnVuY3Rpb24gUmVzb2x2ZUF3YWl0KF9yZWY3KSB7XG4gIGxldCB7XG4gICAgY2hpbGRyZW5cbiAgfSA9IF9yZWY3O1xuICBsZXQgZGF0YSA9IHVzZUFzeW5jVmFsdWUoKTtcbiAgbGV0IHRvUmVuZGVyID0gdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCIgPyBjaGlsZHJlbihkYXRhKSA6IGNoaWxkcmVuO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHRvUmVuZGVyKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gVVRJTFNcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcm91dGUgY29uZmlnIGZyb20gYSBSZWFjdCBcImNoaWxkcmVuXCIgb2JqZWN0LCB3aGljaCBpcyB1c3VhbGx5XG4gKiBlaXRoZXIgYSBgPFJvdXRlPmAgZWxlbWVudCBvciBhbiBhcnJheSBvZiB0aGVtLiBVc2VkIGludGVybmFsbHkgYnlcbiAqIGA8Um91dGVzPmAgdG8gY3JlYXRlIGEgcm91dGUgY29uZmlnIGZyb20gaXRzIGNoaWxkcmVuLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vdXRpbHMvY3JlYXRlLXJvdXRlcy1mcm9tLWNoaWxkcmVuXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXNGcm9tQ2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudFBhdGgpIHtcbiAgaWYgKHBhcmVudFBhdGggPT09IHZvaWQgMCkge1xuICAgIHBhcmVudFBhdGggPSBbXTtcbiAgfVxuXG4gIGxldCByb3V0ZXMgPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgaWYgKCEgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAvLyBJZ25vcmUgbm9uLWVsZW1lbnRzLiBUaGlzIGFsbG93cyBwZW9wbGUgdG8gbW9yZSBlYXNpbHkgaW5saW5lXG4gICAgICAvLyBjb25kaXRpb25hbHMgaW4gdGhlaXIgcm91dGUgY29uZmlnLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnR5cGUgPT09IFJlYWN0LkZyYWdtZW50KSB7XG4gICAgICAvLyBUcmFuc3BhcmVudGx5IHN1cHBvcnQgUmVhY3QuRnJhZ21lbnQgYW5kIGl0cyBjaGlsZHJlbi5cbiAgICAgIHJvdXRlcy5wdXNoLmFwcGx5KHJvdXRlcywgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuKGVsZW1lbnQucHJvcHMuY2hpbGRyZW4sIHBhcmVudFBhdGgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQudHlwZSA9PT0gUm91dGUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIltcIiArICh0eXBlb2YgZWxlbWVudC50eXBlID09PSBcInN0cmluZ1wiID8gZWxlbWVudC50eXBlIDogZWxlbWVudC50eXBlLm5hbWUpICsgXCJdIGlzIG5vdCBhIDxSb3V0ZT4gY29tcG9uZW50LiBBbGwgY29tcG9uZW50IGNoaWxkcmVuIG9mIDxSb3V0ZXM+IG11c3QgYmUgYSA8Um91dGU+IG9yIDxSZWFjdC5GcmFnbWVudD5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgICEoIWVsZW1lbnQucHJvcHMuaW5kZXggfHwgIWVsZW1lbnQucHJvcHMuY2hpbGRyZW4pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIkFuIGluZGV4IHJvdXRlIGNhbm5vdCBoYXZlIGNoaWxkIHJvdXRlcy5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGxldCB0cmVlUGF0aCA9IFsuLi5wYXJlbnRQYXRoLCBpbmRleF07XG4gICAgbGV0IHJvdXRlID0ge1xuICAgICAgaWQ6IGVsZW1lbnQucHJvcHMuaWQgfHwgdHJlZVBhdGguam9pbihcIi1cIiksXG4gICAgICBjYXNlU2Vuc2l0aXZlOiBlbGVtZW50LnByb3BzLmNhc2VTZW5zaXRpdmUsXG4gICAgICBlbGVtZW50OiBlbGVtZW50LnByb3BzLmVsZW1lbnQsXG4gICAgICBpbmRleDogZWxlbWVudC5wcm9wcy5pbmRleCxcbiAgICAgIHBhdGg6IGVsZW1lbnQucHJvcHMucGF0aCxcbiAgICAgIGxvYWRlcjogZWxlbWVudC5wcm9wcy5sb2FkZXIsXG4gICAgICBhY3Rpb246IGVsZW1lbnQucHJvcHMuYWN0aW9uLFxuICAgICAgZXJyb3JFbGVtZW50OiBlbGVtZW50LnByb3BzLmVycm9yRWxlbWVudCxcbiAgICAgIGhhc0Vycm9yQm91bmRhcnk6IGVsZW1lbnQucHJvcHMuZXJyb3JFbGVtZW50ICE9IG51bGwsXG4gICAgICBzaG91bGRSZXZhbGlkYXRlOiBlbGVtZW50LnByb3BzLnNob3VsZFJldmFsaWRhdGUsXG4gICAgICBoYW5kbGU6IGVsZW1lbnQucHJvcHMuaGFuZGxlXG4gICAgfTtcblxuICAgIGlmIChlbGVtZW50LnByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByb3V0ZS5jaGlsZHJlbiA9IGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbihlbGVtZW50LnByb3BzLmNoaWxkcmVuLCB0cmVlUGF0aCk7XG4gICAgfVxuXG4gICAgcm91dGVzLnB1c2gocm91dGUpO1xuICB9KTtcbiAgcmV0dXJuIHJvdXRlcztcbn1cbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IG9mIGBtYXRjaFJvdXRlcygpYCBpbnRvIGEgUmVhY3QgZWxlbWVudC5cbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJNYXRjaGVzKG1hdGNoZXMpIHtcbiAgcmV0dXJuIF9yZW5kZXJNYXRjaGVzKG1hdGNoZXMpO1xufVxuLyoqXG4gKiBAcHJpdmF0ZVxuICogV2FsayB0aGUgcm91dGUgdHJlZSBhbmQgYWRkIGhhc0Vycm9yQm91bmRhcnkgaWYgaXQncyBub3QgcHJvdmlkZWQsIHNvIHRoYXRcbiAqIHVzZXJzIHByb3ZpZGluZyBtYW51YWwgcm91dGUgYXJyYXlzIGNhbiBqdXN0IHNwZWNpZnkgZXJyb3JFbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gZW5oYW5jZU1hbnVhbFJvdXRlT2JqZWN0cyhyb3V0ZXMpIHtcbiAgcmV0dXJuIHJvdXRlcy5tYXAocm91dGUgPT4ge1xuICAgIGxldCByb3V0ZUNsb25lID0gX2V4dGVuZHMoe30sIHJvdXRlKTtcblxuICAgIGlmIChyb3V0ZUNsb25lLmhhc0Vycm9yQm91bmRhcnkgPT0gbnVsbCkge1xuICAgICAgcm91dGVDbG9uZS5oYXNFcnJvckJvdW5kYXJ5ID0gcm91dGVDbG9uZS5lcnJvckVsZW1lbnQgIT0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocm91dGVDbG9uZS5jaGlsZHJlbikge1xuICAgICAgcm91dGVDbG9uZS5jaGlsZHJlbiA9IGVuaGFuY2VNYW51YWxSb3V0ZU9iamVjdHMocm91dGVDbG9uZS5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvdXRlQ2xvbmU7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW1vcnlSb3V0ZXIocm91dGVzLCBvcHRzKSB7XG4gIHJldHVybiBjcmVhdGVSb3V0ZXIoe1xuICAgIGJhc2VuYW1lOiBvcHRzID09IG51bGwgPyB2b2lkIDAgOiBvcHRzLmJhc2VuYW1lLFxuICAgIGhpc3Rvcnk6IGNyZWF0ZU1lbW9yeUhpc3Rvcnkoe1xuICAgICAgaW5pdGlhbEVudHJpZXM6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEVudHJpZXMsXG4gICAgICBpbml0aWFsSW5kZXg6IG9wdHMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdHMuaW5pdGlhbEluZGV4XG4gICAgfSksXG4gICAgaHlkcmF0aW9uRGF0YTogb3B0cyA9PSBudWxsID8gdm9pZCAwIDogb3B0cy5oeWRyYXRpb25EYXRhLFxuICAgIHJvdXRlczogZW5oYW5jZU1hbnVhbFJvdXRlT2JqZWN0cyhyb3V0ZXMpXG4gIH0pLmluaXRpYWxpemUoKTtcbn0gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5leHBvcnQgeyBBd2FpdCwgTWVtb3J5Um91dGVyLCBOYXZpZ2F0ZSwgT3V0bGV0LCBSb3V0ZSwgUm91dGVyLCBSb3V0ZXJQcm92aWRlciwgUm91dGVzLCBEYXRhUm91dGVyQ29udGV4dCBhcyBVTlNBRkVfRGF0YVJvdXRlckNvbnRleHQsIERhdGFSb3V0ZXJTdGF0ZUNvbnRleHQgYXMgVU5TQUZFX0RhdGFSb3V0ZXJTdGF0ZUNvbnRleHQsIExvY2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTG9jYXRpb25Db250ZXh0LCBOYXZpZ2F0aW9uQ29udGV4dCBhcyBVTlNBRkVfTmF2aWdhdGlvbkNvbnRleHQsIFJvdXRlQ29udGV4dCBhcyBVTlNBRkVfUm91dGVDb250ZXh0LCBlbmhhbmNlTWFudWFsUm91dGVPYmplY3RzIGFzIFVOU0FGRV9lbmhhbmNlTWFudWFsUm91dGVPYmplY3RzLCBjcmVhdGVNZW1vcnlSb3V0ZXIsIGNyZWF0ZVJvdXRlc0Zyb21DaGlsZHJlbiwgY3JlYXRlUm91dGVzRnJvbUNoaWxkcmVuIGFzIGNyZWF0ZVJvdXRlc0Zyb21FbGVtZW50cywgcmVuZGVyTWF0Y2hlcywgdXNlQmxvY2tlciBhcyB1bnN0YWJsZV91c2VCbG9ja2VyLCB1c2VBY3Rpb25EYXRhLCB1c2VBc3luY0Vycm9yLCB1c2VBc3luY1ZhbHVlLCB1c2VIcmVmLCB1c2VJblJvdXRlckNvbnRleHQsIHVzZUxvYWRlckRhdGEsIHVzZUxvY2F0aW9uLCB1c2VNYXRjaCwgdXNlTWF0Y2hlcywgdXNlTmF2aWdhdGUsIHVzZU5hdmlnYXRpb24sIHVzZU5hdmlnYXRpb25UeXBlLCB1c2VPdXRsZXQsIHVzZU91dGxldENvbnRleHQsIHVzZVBhcmFtcywgdXNlUmVzb2x2ZWRQYXRoLCB1c2VSZXZhbGlkYXRvciwgdXNlUm91dGVFcnJvciwgdXNlUm91dGVMb2FkZXJEYXRhLCB1c2VSb3V0ZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTZhZjgzYzc3MTBkNjg0MmZlNTJcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFkZENhciIsImFkZCIsIm5hbWUiLCJicmFuZCIsInR5cGUiLCJocCIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVuZ2luZSIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicHJldiIsInVzZUVmZmVjdCIsIkxpbmsiLCJPdXRsZXQiLCJ1c2VOYXZpZ2F0ZSIsIlVSTCIsIkNhcnNNYW5hZ2VyIiwiY2FycyIsInNldENhcnMiLCJuYXZpZ2F0ZSIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEZWxldGUiLCJpZCIsIm1ldGhvZCIsImZpbHRlciIsImVsIiwiaGFuZGxlQWRkIiwiY2FyIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ29Ub0RldGFpbHMiLCJtYXAiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2lkdGgiLCJDb21wb25lbnQiLCJBZGRVc2VyIiwic3VybmFtZSIsImFnZSIsImNpdHkiLCJnZW5kZXIiLCJVc2VycyIsInNldERhdGEiLCJkYXQiLCJyciJdLCJzb3VyY2VSb290IjoiIn0=