final headers = {
  'cookie': 'foo=bar; bar=baz',
  'accept': 'application/json',
  'content-type': 'application/x-www-form-urlencoded',
};

final response = await http.post(
  Uri.parse('http://mockbin.com/har?foo=bar&foo=baz&baz=abc&key=value'),
  headers: headers,
  body: "foo=bar",
);

print(response.statusCode);
print(response.body);