/* global describe, it, before, after */

require('chai').should()


describe('rewrite', function () {
})

/*
  it('rewrites a single old-style URL', () => {
    var doc = `
    {
      "name": "tiny-tarball",
      "versions": {
        "1.0.0": {
          "dist": {
            "shasum": "bbf102d5ae73afe2c553295e0fb02230216f65b1",
            "tarball": "https://registry.npmjs.org/tiny-tarball/-/tiny-tarball-1.0.0.tgz"
          },
          "directories": {}
        }
      }
    }`
  })
})

var doc = `
{
  "name": "tiny-tarball",
  "versions": {
    "1.0.0": {
      "dist": {
        "shasum": "bbf102d5ae73afe2c553295e0fb02230216f65b1",
        "tarball": "https://registry.npmjs.org/@bcoe/awesomeify/-/awesomeify-28.0.0.tgz"
      },
      "directories": {}
    },
    "1.2.0": {
      "dist": {
        "shasum": "bbf102d5ae73afe2c553295e0fb02230216f65b1",
        "tarball": "https://registry.npmjs.org/@bcoe/awesomeify/-/awesomeify-29.0.0.tgz"
      },
      "directories": {}
    }
  }
}`
doc.replace(oldregex, '"tarball": "http://www.foo.com/$4/$3/_attachments/$6"')

var doc2 = `
{
  "name": "tiny-tarball",
  "versions": {
    "1.0.0": {
      "dist": {
        "shasum": "bbf102d5ae73afe2c553295e0fb02230216f65b1",
        "tarball": "https://registry.internal.npmjs.com/@/@npm/restify-monitor/_attachments/restify-monitor-1.3.1.tgz"
      },
      "directories": {}
    }
  }
}`

var doc3 = `
{
  "name": "tiny-tarball",
  "versions": {
    "1.0.0": {
      "dist": {
        "shasum": "bbf102d5ae73afe2c553295e0fb02230216f65b1",
        "tarball": "https://registry.npmjs.org/tiny-tarball/-/tiny-tarball-1.0.0.tgz"
      },
      "directories": {}
    }
  }
}`

var doc4 = `
{
  "name": "tiny-tarball",
  "versions": {
    "1.0.0": {
      "dist": {
        "shasum": "bbf102d5ae73afe2c553295e0fb02230216f65b1",
        "tarball": "http://www.example.com/t/tiny-tarball/_attachments/tiny-tarball-1.0.0.tgz"
      },
      "directories": {}
    },
    "1.2.0": {
      "dist": {
        "shasum": "bbf102d5ae73afe2c553295e0fb02230216f65b1",
        "tarball": "http://www.example.com/t/tiny-tarball/_attachments/tiny-tarball-1.2.0.tgz"
      },
      "directories": {}
    }
  }
}`
doc4.replace(newregex, '"tarball": "http://www.foo.com/$5/$4/_attachments/$7"')
*/
