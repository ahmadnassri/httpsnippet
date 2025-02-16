import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
  };

  final response = await http.post(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
    body: "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"foo\"; filename=\"hello.txt\"\r\nContent-Type: text/plain\r\n\r\nHello World\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"bar\"\r\n\r\nBonjour le monde\r\n-----011000010111000001101001--\r\n",
  );

  print(response.statusCode);
  print(response.body);

}