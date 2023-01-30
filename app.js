#!/usr/bin/env node
'use strict';

const fs = require('fs');
const hjson = require('hjson');
const program = require('commander');
const xml2js = require('xml2js');

function runApp(args) {
    try {
        program
            .option('-i, --input <input>', 'input HJSON file')
            .option('-o, --output <output>', 'Output XML file name.  Default value: {input file name}.xml')
            .option('-h, --help', 'Show the usage/help documentation.')
            .action(action => {
                program.input = action.input
                program.output = action.output || action.input + '.xml';
            })
            .parse(args);

        if (!program.input) {
            console.error('Error: Required option -i, --input <input> not specified');
            console.error('');
            console.error('Usage: hjson-to-xml -i, --input <input> [options]');
            console.error('');
            console.error('');
            console.error('Options:');
            console.error('-i, --input <input>  Input HJSON file');
            console.error('-o, --output <output>  Output XML file name. Default value: hjson.xml');
            console.error('-h, --help     Output usage information');
            console.error('');
            
            process.exit(1);
        }

        // Read the input HJSON file
        console.error(program.input)
        const input = fs.readFileSync(program.input, 'utf-8');

        console.error(input);

        // Parse the input and generate the object
        const obj = hjson.parse(input);

        // Convert the object to XML
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(obj);

        // Write the XML to the output file
        fs.writeFileSync(program.output, xml);

    } catch (err) {
        console.error(err);
    }    
}

runApp(process.argv)

module.exports = { runApp };
