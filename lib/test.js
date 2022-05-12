import { promisify } from "util";
import figlet from "figlet";
import chalk from "chalk";
const log = (content) => console.log(chalk.green(content));
const co_figlet = promisify(figlet);

export default async () => {
    const data = await co_figlet("ChenQi Welcome You");
    log(data);
};