import Foundation

let url = URL(string: "https://httpbin.org/anything")!
var request = URLRequest(url: url)
request.httpMethod = "POST"
request.timeoutInterval = 10
request.allHTTPHeaderFields = ["content-type": "application/json"]

let (data, response) = try await URLSession.shared.data(for: request)
print(String(decoding: data, as: UTF8.self))