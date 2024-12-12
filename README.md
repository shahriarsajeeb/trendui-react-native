# VintLang Installation Guide

## Installing vintLang on Linux

You can install **vintLang** on your Linux computer using the following steps. This guide will walk you through downloading, extracting, and confirming the installation.

### Step 1: Download the vintLang Binary

First, download the binary release of vintLang for Linux using the following `curl` command:

```bash
curl -O -L https://github.com/ekilie/vint-lang/releases/download/0.1.0/vintLang_linux_amd64_v0.1.2.tar.gz
```

### Step 2: Extract the Binary to a Global Location

Once the download is complete, extract the file and place the binary in a directory that is globally available (`/usr/local/bin` is typically used for this purpose):

```bash
sudo tar -C /usr/local/bin -xzvf vintLang_linux_amd64_v0.1.2.tar.gz
```

This will unpack the binary and make the `vintLang` command available to all users on your system.

### Step 3: Confirm the Installation

To verify that **vintLang** has been installed correctly, run the following command to check its version:

```bash
vint -v
```

If the installation was successful, this command will output the version of **vintLang** that was installed.

---



### How to Install `vintLang`:
1. Open your terminal.
2. Run the `curl` command to download the `vintLang` binary.
3. Extract the downloaded archive to a globally accessible directory (`/usr/local/bin`).
4. Confirm the installation by checking the version with `vint -v`.

This guide should be easy to follow for installing `vintLang` on Linux!

Now you can start using **vintLang** on your Linux system!


## Sample Code

Here are some sample code snippets that show how to use **vintLang**. More examples are located in the `./vintLang` folder of the codebase.

### Example 1: String Splitting and Printing

```vint
// Importing modules
import net       // Importing networking module for HTTP operations
import time      // Importing time module to work with date and time

// Main logic to split and print characters of a string
let name = "VintLang"
s = name.split("") 
for i in s { 
    print(i)
}
```

### Example 2: Type Conversion and Conditional Statements

```vint
// Demonstrating type conversion and conditional statements
age = "10"
convert(age, "INTEGER")  // Convert age string to integer
print(type(age))          // Uncomment to check the type of ageInInt

// Conditional statements to compare the age variable
if (age == 20) {
    print(age)
} else if (age == 10) {
    print("Age is " + age)
} else {
    print((age == "20"))
}
```

### Example 3: Working with Height Variable

```vint
// Working with height variable
height = "6.0" // Height in feet
print("My name is " + name)

// Define a function to print details
let printDetails = func(name, age, height) {
    print("My name is " + name + ", I am " + age + " years old, and my height is " + height + " feet.")
}

// Calling the printDetails function with initial values
printDetails(name, age, height)

// Update height and call the function again
height = "7"
printDetails(name, age, height)
```

### Example 4: Time-Related Operations

```vint
// Print the current timestamp
print(time.now())

// Function to greet a user based on the time of the day
let greet = func(nameParam) {
    let currentTime = time.now()  // Get the current time
    print(currentTime)            // Print the current time
    if (true) {                   // Placeholder condition, modify for actual logic
        print("Good morning, " + nameParam + "!")
    } else {
        print("Good evening, " + nameParam + "!")
    }
}

// Time-related operations
year = 2024
print("Is", year, "Leap year:", time.isLeapYear(year))
print(time.format(time.now(), "02-01-2006 15:04:05"))
print(time.add(time.now(), "1h"))
print(time.subtract(time.now(), "2h30m45s"))

// Call the greet function with a sample name
greet("John")
```

### Example 5: Networking with HTTP GET Request

```vint
// Example of a GET request using the net module
let res = net.get("https://tachera.com")
print(res)
```

### Example 6: Built-in Functions and Output

```vint
// Built-in functions
print(type(123))             // Print the type of an integer
let a = "123"                // Initialize a string variable
convert(a, "INTEGER")        // Convert the string to an integer
type(a)
print(a)                     // Check the type of the variable
print("Hello", "World")      // Print multiple values
write("Hello World")         // Write a string (useful in returning output)
```

### Step 4: Run the Sample Code

Once you have the sample code files saved, you can run them using the following command:

```bash
vint <filename>.vint
```

Replace `<filename>` with the actual name of the file you want to run (e.g., `hello.vint`, `fibonacci.vint`, etc.).

---
