const core = require('@actions/core')

try {
  const meuImput = core.getInput('my-input');
  console.log('Hello ${meuInput}!')
  core.setOutput ("my-output", 'Hello ${meuInput}!')
} catch (e) {
  core.setFailed('Ação falhou com erro: ${error.message}')
}
