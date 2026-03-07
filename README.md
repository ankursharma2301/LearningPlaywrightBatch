# Learning Playwright Batch

A comprehensive learning resource covering JavaScript fundamentals and Playwright testing with example scripts and real-world scenarios.

## Project Structure

### Chapter 1: Basics
- **Topics**: Basic JavaScript setup, step-by-step examples, environment verification, and hot code reloading
- **Files**: 01_basic.js, 02_JS_Step_By_Step.js, 03_verify_setup.js, 04_hot_code.js
- **Key Concepts**: Getting started with JavaScript, environment setup verification

### Chapter 2: JavaScript Concepts & Hoisting
- **Topics**: Comments, identifiers, variable declarations (var, let, const), hoisting behavior
- **Files**: 05_Core_Comments_JS.js, 06_Core_Identifier_JS.js, 07_var_let_const.js, 09_Hoisting.js, 14_let_hoisting.js, 18_const.js
- **Key Concepts**:
  - Variable scoping and declaration methods
  - Hoisting with var, let, and const
  - Function and block-level hoisting
  - Temporal Dead Zone
  - Const and immutable variables

### Chapter 3: Identifiers, Literals, Operators & Statements
- **Topics**: Identifier naming conventions, literal values (strings, numbers, booleans), operators, null/undefined
- **Files**: 19_Identifier.js, 20_literla.js, 21_literals_all.js, 22_nul_typepf.js, 23_null_undefined.js, 24_equla_triequal.js, 25_IQ.js
- **Key Concepts**:
  - Identifier rules and naming conventions
  - Different literal types
  - Equality operators (==, ===)
  - Type checking

### Chapter 4: Operators
- **Topics**: Assignment, comparison, logical, string, ternary, and type operators
- **Files**: 26_Assigned_Operator.js, 27_Assignment_Operators.js, 28_Comparsion_Operators.js, 29_Logical_Operators.js, 30_String_Operators.js, 31_Ternary_Operators.js, 31_Type_Operators.js, 32_Null_Optinal_Value.js
- **Key Concepts**:
  - Assignment operators and compound assignments
  - Comparison operators
  - Logical operators (&&, ||, !)
  - String concatenation and operations
  - Ternary conditional operator
  - Type checking operators

### Chapter 5: Conditional Statements (If/Else)
- **Topics**: If-else statements, nested conditions, real-world applications, API response handling
- **Files**: 33_Statement.js, 34_If_else_If.js, 35_REAL_LIVE_Example.js, 36_API_IF_ELSE.js, 37_IQ_IF_ESLE.js, 38_Logical_Op_IF_ELSE.js, 40_REAL_IF_ELSE.js
- **Key Concepts**:
  - Conditional branching
  - If-else-if chains
  - Real-world decision making
  - API response validation

### Chapter 6: Switch Statements
- **Topics**: Switch case syntax, break statements, default cases, grouped cases, real examples
- **Files**: 42_Switch.js, 43_Switch_with_Break.js, 44_Switch_with_Default.js, 45_Switch_REAL_EXAMPLE.js, 46_Switch_GroupCase.js
- **Key Concepts**:
  - Switch statement structure
  - Case fallthrough
  - Default handling
  - Grouped cases
  - When to use switch vs if-else

### Chapter 7: Loops
- **Topics**: For loops, while loops, do-while loops, increment operators, loop control
- **Files**: 53_Loops.js, 54_Incremnt_operator.js, 56_For_Loops.js, 57_For_Loop.js, 59_While_Loop.js, 61_DO_while.js
- **Key Concepts**:
  - For loop iterations
  - While and do-while loops
  - Pre and post increment operators
  - Loop control flow

### Chapter 8: Arrays
- **Topics**: Array declarations, methods (push, pop, shift, unshift, splice, slice), sorting, mapping, filtering
- **Files**: Chapter 8 files
- **Key Concepts**:
  - Basic array operations
  - Powerful array manipulation methods
  - Iterating over arrays

## Additional Resources

- **Interview Questions**: Task_Interview_Coding_Questions/ - Practical coding challenges (grade calculator, FizzBuzz, etc.)
- **Playwright Tests**: PW_JS_Test_1/ - Test automation examples

## Prerequisites

- Node.js (14+ recommended)
- npm or yarn

## Quick Start

1. **Install dependencies**:
```bash
npm install
npm install -D @playwright/test
```

2. **Install Playwright browsers** (if using Playwright):
```bash
npx playwright install
```

3. **Run Playwright tests** (if applicable):
```bash
npx playwright test
```

4. **Run JavaScript examples**:
```bash
node chapter_01_Basics/01_basic.js
node chapter_02_Java_Concepts/07_var_let_const.js
# etc.
```

## Learning Path

Follow chapters 1-8 sequentially to build a solid foundation in JavaScript fundamentals:
1. Start with Chapter 1 for environment setup
2. Master variable concepts in Chapter 2
3. Learn identifiers and operators in Chapters 3-4
4. Understand control flow with Chapters 5-6
5. Practice iteration with Chapter 7
6. Learn arrays in Chapter 8
7. Apply knowledge to interview questions

## License

ISC
