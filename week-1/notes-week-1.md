## ✅ fundamentals.js Examples

**Variables + typeof:**
```javascript
let num1 = 1;      // number
let boolean = true; // boolean  
let num2 = 1.2;    // number (decimal = number en JS)
let name = 'Aequa';


## Reserved words
- Keywords that CANNOT be used as variable/function names
- Examples: let, const, var, if, else, for, while, function, return, class
- ## 🔗 Useful Tools
- [JS Variable Names Tester](https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0) - Test reserved words & unicode

## 🔒 Reserved Words (Current)
## 🔒 Reserved Words (Future - Avoid)
```
## 🔒 Reserved Words

### Current Reserved Words

| break | case | catch | class | const | continue |
|-------|------|-------|-------|-------|----------|
| debugger | default | delete | do | else | export |
| extends | finally | for | function | if | import |
| in | instanceof | let | new | return | super |
| switch | this | throw | try | typeof | var |
| void | while | with | yield | | |

### Future Reserved Words (Avoid)

| enum | implements | interface | package | private | protected |
|------|------------|-----------|---------|---------|-----------|
| public | static | await | | | |

### Avoid Using (Global Objects)

| null | undefined | true | false | NaN | Infinity |
|-----|-----------|-----|-------|-----|----------|
| isFinite | isNaN | hasOwnProperty | length | toString | Number |
| String | Object | alert | confirm | prompt | | |

### Examples - DON'T Use These Names

```javascript
// ❌ WRONG - using reserved words
let let = 5;           // SyntaxError
let function = "test"; // SyntaxError
const for = true;      // SyntaxError

// ✅ CORRECT
let counter = 5;
let myFunction = "test";
const isActive = true;


```


## 🔢 Arrays I

**Declaration:**
```javascript
let arr =;[1][2][3]
let mixed = [1, 'text', true];  // Can mix types

Key methods:
	•	 push()  - Add to end
	•	 pop()  - Remove from end
	•	 unshift()  - Add to start
	•	 shift()  - Remove from start
	•	 indexOf()  - Find position
	•	 includes()  - Check if exists
	•	 .length  - Get size
Access:  arr  (0-indexed)


### Arrays II - Methods (Day 2)
- `push(item)` → adds to end, returns new length
- `unshift(item)` → adds to start, returns new length  
- `pop()` → removes last, returns removed element
- `shift()` → removes first, returns removed element
- `splice(index, deleteCount)` → removes by position
- `indexOf(item)` → returns index or -1
- `includes(item)` → returns true/false
- `forEach((element, index, array) => {})` → iterate



## Day 2 - Arrays II (Jan 22, 2026)

### Array Mutation Methods
- `push(item)` → adds to end, returns new length
- `unshift(item)` → adds to start, returns new length  
- `pop()` → removes from end, returns removed element
- `shift()` → removes from start, returns removed element
- `splice(index, count)` → removes by position, returns removed elements

### Array Search Methods
- `indexOf(item)` → returns index or -1 if not found
- `includes(item)` → returns true/false

### Array Iteration
- `forEach((element, index, array) => {})` → executes function for each element

### Key Learning
- push/unshift RETURN new length (number)
- pop/shift RETURN removed element
- Use `array.length - 1` for last element
