# Calculator 

Calculator built with Javascript. Runs on command line using node. This is for Nulogy [exercise](http://bit.ly/Link-Apprenticeship-Exercise)


It takes in inputs (dollar amount, # of poeple, materials) and outputs a dollar value.


## Node
Version: Node v4.5.0

## To run calculator on command line

1) Clone or download repo

2) In terminal install Homebrew to download node easier. Download, then follow the instructions given. 

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

3) Install node using Homebrew in terminal 

```
$ brew install node
```

4) Inside copied repo run the code below with your substituted inputs

```
$ node -e "require('./app').total(\"\[a]\", [b], \"[c]\")"
```

[a] Base price in dollars. Example: $1,299.99 <br>
[b] Number of people <br>
[c] Type of material. Use: pharmaceuticals, food, electronics or whatever type you want<br>


## Examples: 

```
$ node -e "require('./app').total(\"\$1,299.99\", 3, \"food\")"

// $1,591.58
```
```
$ node -e "require('./app').total(\"\$12,456.95\", 4, \"books\")"

// $13,707.63
```
