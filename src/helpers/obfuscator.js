import Obfuscator from 'string-obfuscator'

const obfuscator = new Obfuscator({
  algorithm: 'aes-256-ctr'
})

export default obfuscator
