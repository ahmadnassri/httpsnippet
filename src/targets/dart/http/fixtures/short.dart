import 'package:http/http.dart' as http;

void main() async {

  final response = await http.get(
    Uri.parse('http://mockbin.com/har'),
    headers: {},
  );

  print(response.statusCode);
  print(response.body);

}