#!/usr/bin/env node

import program from "commander";
import figlet from "figlet";
import init from "../lib/init.js";
import refresh from "../lib/refresh.js";
import serve from "../lib/serve.js";
import test from "../lib/test.js";


program.command("create <name>").description("create project").action(init);

program.command("refresh").description("refresh routers...").action(refresh);

program.command("serve").description("serve routers...").action(serve);

program.command("test").description("hello chenqi,I'm handsome").action(test);

program.parse(process.argv);
