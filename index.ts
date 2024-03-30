import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import app from "./app/app"; 

async function main() {
  const rl = readline.createInterface({ input, output });

  try {
    const answer = await rl.question('Insert an ID/E-mail or Phone to see data:');
    await app.fullInfo(answer);
    await app.webFullInfo(answer);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
}

main();
