import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'accept': 'application/json',
    'x-foo': 'Bar',
    'quoted-value': '"quoted" \'string\'',
  };

  final response = await http.get(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
  );

  print(response.statusCode);
  print(response.body);

}