import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'Content-Type': 'multipart/form-data',
  };

  final response = await http.post(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
  );

  print(response.statusCode);
  print(response.body);

}