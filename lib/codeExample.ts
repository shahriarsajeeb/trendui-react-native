export const codeExamples = {
    basics: `// Basic VintLang Operations
    let name = "VintLang"
    s = name.split("") 
    for i in s { 
        print(i)
    }
    
    // Type conversion
    age = "10"
    convert(age, "INTEGER")
    print(type(age))`,
      
    functions: `// Function Definition in VintLang
    let printDetails = func(name, age, height) {
        print("My name is " + name + 
              ", I am " + age + 
              " years old, and my height is " + 
              height + " feet.")
    }
    
    // Function call
    printDetails("VintLang", "10", "6.0")`,
      
    timeAndNet: `// Time and Network Operations
    import time
    import net
    
    // Time operations
    print(time.format(time.now(), "02-01-2006 15:04:05"))
    print(time.add(time.now(), "1h"))
    
    // Network request
    let res = net.get("https://example.com")
    print(res)`,
  
    jsonModule: `// JSON Module Examples in VintLang
    import json
    
    // Example 1: Decode a JSON string
    print("=== Example 1: Decode ===")
    raw_json = '{"name": "John", "age": 30, "isAdmin": false, "friends": ["Jane", "Doe"]}'
    decoded = json.decode(raw_json) 
    print("Decoded Object:", decoded)
    
    // Example 2: Encode a Vint object to JSON
    print("\\n=== Example 2: Encode ===")
    data = {
      "language": "Vint",
      "version": 1.0,
      "features": ["custom modules", "native objects"]
    }
    encoded_json = json.encode(data)
    print("Encoded JSON:", encoded_json)
    
    // Example 3: Pretty print a JSON string
    print("\\n=== Example 3: Pretty Print ===")
    raw_json_pretty = '{"name":"John","age":30,"friends":["Jane","Doe"]}'
    pretty_json = json.pretty(raw_json_pretty)
    print("Pretty JSON:\\n", pretty_json)
    
    // Example 4: Merge two JSON objects
    print("\\n=== Example 4: Merge ===")
    json1 = {"name": "John", "age": 30}
    json2 = {"city": "New York", "age": 35}
    merged_json = json.merge(json1, json2)
    print("Merged JSON:", merged_json)
    
    // Example 5: Get a value by key from a JSON object
    print("\\n=== Example 5: Get Value by Key ===")
    json_object = {"name": "John", "age": 30, "city": "New York"}
    value = json.get(json_object, "age")
    print("Age Value:", value)`
  };
  