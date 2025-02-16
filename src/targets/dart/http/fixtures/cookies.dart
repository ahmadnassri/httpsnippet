import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'cookie': 'foo=bar; bar=baz',
  };

  final response = await http.post(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
  );

  print(response.statusCode);
  print(response.body);

}