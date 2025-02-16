import 'package:http/http.dart' as http;

void main() async {

  final headers = {
    'content-type': 'application/json',
  };

  final response = await http.post(
    Uri.parse('http://mockbin.com/har'),
    headers: headers,
    body: "{\"number\":1,\"string\":\"f\\\"oo\",\"arr\":[1,2,3],\"nested\":{\"a\":\"b\"},\"arr_mix\":[1,\"a\",{\"arr_mix_nested\":{}}],\"boolean\":false}",
  );

  print(response.statusCode);
  print(response.body);

}