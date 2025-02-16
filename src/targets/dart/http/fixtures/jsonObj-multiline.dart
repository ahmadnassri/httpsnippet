import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'content-type': 'application/json',
  };

  final response = await http.post(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
    body: "{\n  \"foo\": \"bar\"\n}",
  );

  print(response.statusCode);
  print(response.body);

}