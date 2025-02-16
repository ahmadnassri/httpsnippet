import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'content-type': 'application/x-www-form-urlencoded',
  };

  final response = await http.post(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
    body: "foo=bar&hello=world",
  );

  print(response.statusCode);
  print(response.body);

}