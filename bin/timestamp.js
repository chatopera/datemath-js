#!/usr/bin/env node
// -*- coding: utf-8 -*-
//===============================================================================
//
// Copyright (c) 2020 <> All Rights Reserved
//
//
// File: /Users/hain/git/datemath-js/bin/dateparser.js
// Author: Hai Liang Wang
// Date: 2020-09-16:20:38:11
//
//===============================================================================
/**
 *
 */
const moment = require('moment-timezone');
const { parse } = require('../lib/index');

const EXEC = process.argv.slice(0, 2).join(' ');
const ARGS = process.argv.slice(2);

if (process.env.TZ) {
  process.env.TZ;
}

function printUsage() {
  console.log(EXEC, 'DATE_STRING [TIMEZONE]');
  console.log('Example', EXEC, 'now');
  console.log('Find details in https://github.com/chatopera/datemath-js');
}

// main function
async function main() {
  if (ARGS.length == 0) {
    throw new Error('Invalid param.');
  } else if (ARGS.length == 2) {
    process.env.TZ = ARGS[1];
  } else if (ARGS.length == 1) {
    // default timestamp
    process.env.TZ = 'Asia/Shanghai';
  }

  var date = moment.tz(parse(ARGS[0]), process.env.TZ);
  console.log(date.unix());
}

// on main entry
if (require.main === module) {
  (async function() {
    try {
      await main();
      process.exit(0);
    } catch (e) {
      printUsage();
      console.log('Error', e);
      process.exit(1);
    }
  })();
}
