# hjson-to-xml

hjson-to-xml is a Node.js command-line tool that can parse hjson files and return the data in JSON format.

It allows developers to easily convert hjson files into a structured and easily queriable format, making it simpler to integrate them into their software development workflow.

By converting hjson files to JSON, hjson-to-xml allows developers to import and export them as JSON files, which can be easily read and interpreted by other programs and libraries.

This tool is particularly useful for working with large and complex data that is represented in hjson format, as it helps to structure and organize the data in a way that is more manageable and easier to understand.

## Installation
To install hjson-to-xml, you will need to have Node.js and npm installed on your machine. Once you have these prerequisites installed, you can install hjson-to-xml by running the following command:

`npm install -g hjson-to-xml`

This will install hjson-to-xml globally, allowing you to use it from any directory on your machine.

## Usage
The hjson-to-xml command-line tool has the following options:

-i, --input : Specify the input hjson file to be converted. This option is required.
-o, --output : Specify the output JSON file name. The default value is hjson.xml.

## Examples
Here are some examples of using the hjson-to-xml tool. To convert a hjson file to JSON format, you can use the following command:

`hjson-to-xml -i abc.hjson -o abc.xml`

`hjson-to-xml --input school.hjson --output school.xml`

`hjson-to-xml -i library.hjson`

The first command will parse the hjson file in the abc.hjson file to JSON format, and save the resulting JSON file to abc.xml. The second example converts the school.hjson file to school.xml. The third example converts the library.hjson file to the default output file, hjson.xml.