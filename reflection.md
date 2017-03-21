# Reflection

## My general steps to solve this problem

1) Understand the problem
2) Break it down into small steps (pseudo code)
3) Start simple by hardcoding to retrieve the correct outputs
4) Once logic is sound, replace the code with variables. So user can input what they desire. Always test to see if calculator produces the same results as before
5) Make sure the user can retrieve the output easily
6) Once finished, refine the code and check values again


## What I learned

1) In the instructions, it asked for the calculator to run on command line instead of browser. So, I found a way using node and formatting my code with module.exports
2) let & const variables don't work in node.
3) How to format github markdown


## What I considered

### Type
I noticed in the example the type "drugs" falls under "pharmaceuticals." If a user inputs "drugs" into the calculator, it won't recognize it as "pharmaceuticals" and therefore fall underneath "else" type. This shouldn't happen. One option is to guess what words may fall under pharmaceutical umbrella and account for that, but this won't catch everything. So to avoid misinterpretation and also, not produce an error, I suggest in the UI, specific types have to be chosen ie. "pharmaceutical" or "else." 

### Rounding dollar amount
Usually dollars are rounded up. I initially implemented this but when rechecking one of the output examples, the value was not rounded. So I implemented toFix() method for two decimals points.

### Final input/output values
In the example, the price input and output are formatted with dollar signs and commas. I made sure the calculator accounts for this. <br> 

### Validation
If there was a UI input form, I would create validation to catch symbols that might break the calculator. Also, all examples were in lowercase strings so I did not account for capitalization.<br> 

### Additional inputs 
It wasn't specified if user wanted to add more materials or more jobs. Since, each of the examples given had one base price, person input and type, my calculator reflects for those arguments.