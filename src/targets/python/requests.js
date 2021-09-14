/**
 * @description
 * HTTP code snippet generator for Python using Requests
 *
 * @author
 * @montanaflynn
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */

const { format } = require('util');
const CodeBuilder = require('../../helpers/code-builder');
const helpers = require('./helpers');

module.exports = function (source, options) {
  const opts = {
    indent: '    ',
    pretty: true,
    ...options,
  };

  // Start snippet
  const code = new CodeBuilder(opts.indent);

  // Import requests
  code.push('import requests').blank();

  // Set URL
  code.push('url = "%s"', source.fullUrl).blank();

  // Construct payload
  let hasPayload = false;
  let jsonPayload = false;
  if (source.postData.mimeType === 'application/json') {
    if (source.postData.jsonObj) {
      code.push('payload = %s', helpers.literalRepresentation(source.postData.jsonObj, opts));
      jsonPayload = true;
      hasPayload = true;
    }
  } else {
    const payload = JSON.stringify(source.postData.text);
    if (payload) {
      code.push('payload = %s', payload);
      hasPayload = true;
    }
  }

  // Construct headers
  const headers = source.allHeaders;
  const headerCount = Object.keys(headers).length;

  if (headerCount === 1) {
    Object.keys(headers).forEach(header => {
      code.push('headers = {"%s": "%s"}', header, headers[header]).blank();
    });
  } else if (headerCount > 1) {
    let count = 1;

    code.push('headers = {');

    Object.keys(headers).forEach(header => {
      // eslint-disable-next-line no-plusplus
      if (count++ !== headerCount) {
        code.push(1, '"%s": "%s",', header, headers[header]);
      } else {
        code.push(1, '"%s": "%s"', header, headers[header]);
      }
    });

    code.push('}').blank();
  }

  // Construct request
  const method = source.method;
  let request = format('response = requests.request("%s", url', method);

  if (hasPayload) {
    if (jsonPayload) {
      request += ', json=payload';
    } else {
      request += ', data=payload';
    }
  }

  if (headerCount > 0) {
    request += ', headers=headers';
  }

  request += ')';

  code.push(request).blank().push('print(response.text)');

  return code.join();
};

module.exports.info = {
  key: 'requests',
  title: 'Requests',
  link: 'http://docs.python-requests.org/en/latest/api/#requests.request',
  description: 'Requests HTTP library',
};
