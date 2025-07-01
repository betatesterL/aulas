const core = require('@actions/core')

try {
  const meuInput = core.getInput('my-input');
  console.log(`Hello ${meuInput}!`);
  core.setOutput ("my-output", `Hello ${meuInput}!`);
} catch (error) {
  core.setFailed(`Ação falhou com erro: ${error.message}`);
}
