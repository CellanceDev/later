/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['array/nextinvalid.js']) {
  _$jscoverage['array/nextinvalid.js'] = [];
  _$jscoverage['array/nextinvalid.js'][13] = 0;
  _$jscoverage['array/nextinvalid.js'][15] = 0;
  _$jscoverage['array/nextinvalid.js'][21] = 0;
  _$jscoverage['array/nextinvalid.js'][22] = 0;
  _$jscoverage['array/nextinvalid.js'][23] = 0;
  _$jscoverage['array/nextinvalid.js'][24] = 0;
  _$jscoverage['array/nextinvalid.js'][27] = 0;
  _$jscoverage['array/nextinvalid.js'][28] = 0;
  _$jscoverage['array/nextinvalid.js'][29] = 0;
  _$jscoverage['array/nextinvalid.js'][32] = 0;
  _$jscoverage['array/nextinvalid.js'][33] = 0;
  _$jscoverage['array/nextinvalid.js'][37] = 0;
}
_$jscoverage['array/nextinvalid.js'].source = ["/**","* Next Invalid","* (c) 2013 Bill, BunKat LLC.","*","* Returns the next invalid value in a range of values, wrapping as needed. Assumes","* the array has already been sorted.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","","later.array.nextInvalid = function (val, values, extent) {","","  var min = extent[0], max = extent[1], len = values.length,","      zeroVal = values[len-1] === 0 &amp;&amp; min !== 0 ? max : 0,","      next = val,","      i = values.indexOf(val),","      start = next;","","  while(next === (values[i] || zeroVal)) {","    next++;","    if(next &gt; max) {","      next = min;","    }","","    i++;","    if(i === len) {","      i = 0;","    }","","    if(next === start) {","      return undefined;","    }","  }","","  return next;","};"];
_$jscoverage['array/nextinvalid.js'][13]++;
later.array.nextInvalid = (function (val, values, extent) {
  _$jscoverage['array/nextinvalid.js'][15]++;
  var min = extent[0], max = extent[1], len = values.length, zeroVal = (((values[(len - 1)] === 0) && (min !== 0))? max: 0), next = val, i = values.indexOf(val), start = next;
  _$jscoverage['array/nextinvalid.js'][21]++;
  while ((next === (values[i] || zeroVal))) {
    _$jscoverage['array/nextinvalid.js'][22]++;
    (next++);
    _$jscoverage['array/nextinvalid.js'][23]++;
    if ((next > max)) {
      _$jscoverage['array/nextinvalid.js'][24]++;
      next = min;
    }
    _$jscoverage['array/nextinvalid.js'][27]++;
    (i++);
    _$jscoverage['array/nextinvalid.js'][28]++;
    if ((i === len)) {
      _$jscoverage['array/nextinvalid.js'][29]++;
      i = 0;
    }
    _$jscoverage['array/nextinvalid.js'][32]++;
    if ((next === start)) {
      _$jscoverage['array/nextinvalid.js'][33]++;
      return undefined;
    }
}
  _$jscoverage['array/nextinvalid.js'][37]++;
  return next;
});