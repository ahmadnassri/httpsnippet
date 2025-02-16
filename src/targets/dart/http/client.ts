/**
 * @description
 * HTTP code snippet generator for Dart http package.
 *
 * @author
 * @AI-Generated
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */

import { CodeBuilder } from '../../../helpers/code-builder';
import { escapeForSingleQuotes } from '../../../helpers/escape';
import { Client } from '../../targets';

export interface DartHttpOptions {
  showBoilerplate?: boolean;
  checkErrors?: boolean;
  printBody?: boolean;
  timeout?: number;
  insecureSkipVerify?: boolean;
}

export const http: Client<DartHttpOptions> = {
  info: {
    key: 'http',
    title: 'HTTP',
    link: 'https://pub.dev/packages/http',
    description: 'Dart HTTP client request using the http package',
  },
  convert: ({ postData, method, allHeaders, fullUrl }, options = {}) => {
    const { blank, push, join } = new CodeBuilder({ indent: '  ' });

    const {
      showBoilerplate = true,
      checkErrors = false,
      printBody = true,
      timeout = -1,
      insecureSkipVerify = false,
    } = options;

    const indent = showBoilerplate ? 1 : 0;

    // Create boilerplate
    if (showBoilerplate) {
      push('import \'package:http/http.dart\' as http;');

      blank();
      push('void main() async {');
      blank();
    }

    // Create client with timeout if specified
    if (timeout > 0) {
      push('final client = http.Client();', indent);
      push(`client.timeout = Duration(seconds: ${timeout});`, indent);
      blank();
    }

    // Add headers setup
    if (Object.keys(allHeaders).length) {
      push('final headers = {', indent);
      Object.keys(allHeaders).forEach(key => {
        push(`'${key}': '${escapeForSingleQuotes(allHeaders[key])}',`, indent + 1);
      });
      push('};', indent);
      blank();
    }

    // Prepare request
    const headersVar = Object.keys(allHeaders).length ? 'headers' : '{}';
    
    if (postData.text) {
      push(`final response = await http.${method.toLowerCase()}(`, indent);
      push(`  Uri.parse('${fullUrl}'),`, indent);
      push(`  headers: ${headersVar},`, indent);
      push(`  body: ${JSON.stringify(postData.text)},`, indent);
      push(');', indent);
    } else {
      push(`final response = await http.${method.toLowerCase()}(`, indent);
      push(`  Uri.parse('${fullUrl}'),`, indent);
      push(`  headers: ${headersVar},`, indent);
      push(');', indent);
    }

    // Print response
    blank();
    push('print(response.statusCode);', indent);
    
    if (printBody) {
      push('print(response.body);', indent);
    }

    // End main block
    if (showBoilerplate) {
      blank();
      push('}');
    }

    return join();
  },
}; 