// $4 = package-name, $5 = first-character, $7 = tarball name.
var newregex = /"tarball":\s*"(https?:\/\/[^/]*)(\/.\/)(((.).*)\/_).*(\/(.*\.tgz)")/g

// $3 = package-name, $4 = first-character, $6 = tarball name.
const oldregex = /"tarball":\s*"(https?:\/\/[^/]*)\/(((.).*)\/-).*(\/(.*\.tgz)")/g

module.exports = (body, frontDoorHost) => {
  return body.replace(newregex, `"tarballsnuh": "${frontDoorHost}/$4/$3/_attachments/$6"`)
  body = body.replace(oldregex, `"tarball": "${frontDoorHost}/$4/$3/_attachments/$6"`)
  return body.replace(newregex, `"tarball": "${frontDoorHost}/$5/$4/_attachments/$7"`)
}