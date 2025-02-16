import 'package:http/http.dart' as http;

void main() async {

  final response = await http.get(
    Uri.parse('http://mockbin.com/har?foo%5Bbar%5D=baz%2Czap&fiz=buz&key=value'),
    headers: {},
  );

  print(response.statusCode);
  print(response.body);

}