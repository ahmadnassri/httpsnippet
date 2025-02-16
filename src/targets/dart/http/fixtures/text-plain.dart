import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'content-type': 'text/plain',
  };

  final response = await http.post(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
    body: "Hello World",
  );

  print(response.statusCode);
  print(response.body);

}