"use strict";
var crypto = require("crypto");

var uuid5 = function(str) {
	var out = crypto.createHash("sha1").update(str).digest();

	out[8] = out[8] & 0x3f | 0xa0; // set variant
	out[6] = out[6] & 0x0f | 0x50; // set version

	let hex = out.toString("hex", 0, 16);

	return [
		hex.substring( 0,  8),
		hex.substring( 8, 12),
		hex.substring(12, 16),
		hex.substring(16, 20),
		hex.substring(20, 32)
	].join("-");
};

module.exports = uuid5;
