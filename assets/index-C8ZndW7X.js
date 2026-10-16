const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.esm-rKTRkX4c.js","./index.esm-DuxVQT03.js","./index.esm-h8XrRUkU.js","./index.esm-B-3SiZcd.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`---
id: hello
title: Hello, Lua!
part: Foundations
minutes: 10
summary: What code is, how a computer reads it, and your very first line: print.
---
## Welcome, Tina 👋

This app starts from absolute zero. You don't need to know *anything* about programming yet. Every lesson explains **what** to type, **why** it works, and **why not** to do the tempting wrong thing. If something isn't explained enough, that's the app's fault, not yours.

By the end you'll understand the scripts that run your GTA V (FiveM) server: what \`fxmanifest.lua\` is, how the client and server talk with events, how to make commands, and how to keep cheaters out.

## What is code, really?

Code is a list of **instructions** written in a language the computer can follow. Lua is one of those languages. It's small, friendly, and it's the language FiveM uses for server scripts. That's why we're learning it.

The computer reads your code **from top to bottom, one line at a time**, and does exactly what each line says. Not what you *meant*, exactly what you *wrote*. That sounds strict, and it is, but it's also good news: computers are never moody. Same code, same result, every time.

## Your first instruction: \`print\`

\`print\` shows text in the **console** (the output box). It's the simplest way to see what your code is doing.

\`\`\`lua
print("Hello, Los Santos!")
\`\`\`

Press **▶ Run** above. You should see \`Hello, Los Santos!\` appear underneath.

Let's take that line apart, piece by piece:

- \`print\` is the **name** of a built-in function (a ready-made command Lua already knows).
- \`( )\` the round brackets mean "do it now, with this". Without brackets, nothing happens.
- \`"Hello, Los Santos!"\` is **text**. Programmers call text a **string**. The quote marks tell Lua where the text starts and stops.

:::why Why the quote marks?
Without quotes, Lua thinks a word is the *name of something*, like a variable (you'll meet those next lesson). \`print(Hello)\` means "print the thing called Hello", and since nothing is called Hello, you get \`nil\` (Lua's word for "nothing"). The quotes say: "this is literal text, don't try to look it up."
:::

## Several lines

Code runs top to bottom, so the order of your lines is the order things happen:

\`\`\`lua
print("Step 1: wake up")
print("Step 2: coffee")
print("Step 3: script the server")
\`\`\`

You can also print numbers. Numbers **don't** need quotes, because they're not text:

\`\`\`lua
print(42)
print(10 + 5)
print("10 + 5")
\`\`\`

See the difference? \`10 + 5\` without quotes is maths, so Lua calculates \`15\`. With quotes it's just text and is printed as-is.

## Comments: notes for humans

Anything after \`--\` on a line is a **comment**. Lua completely ignores it. Comments are for *you* (and anyone reading your script later).

\`\`\`lua
-- This whole line is a comment. Lua skips it.
print("This runs") -- a comment can also go at the end of a line

--[[
  This is a multi-line comment.
  Handy for longer explanations.
]]
\`\`\`

:::do
- Write comments that explain **why** you did something: \`-- wait 1s so we don't check every frame\`.
- Use comments to temporarily switch off a line while testing: put \`--\` in front of it.
:::

:::dont
- Don't write comments that just repeat the code: \`print("hi") -- prints hi\`. That's noise.
- Don't leave huge blocks of old commented-out code forever. It makes scripts hard to read.
:::

## Errors are your friends

Sooner or later you'll see a red error. **That's normal and it's not a failure.** Professional programmers see errors all day. An error is Lua telling you exactly what confused it and on which line.

Run this. It has a mistake on purpose (the closing quote is missing):

\`\`\`lua error
print("Hello)
\`\`\`

You'll see something like \`your code:1: unfinished string near '"Hello)'\`. Read it like this:

- \`your code:1\` → the problem is on **line 1**.
- \`unfinished string\` → a piece of text was started with \`"\` but never closed.

This app also adds a plain-English explanation under each error. Always read the **line number** first, then look at that line (and the one just above it, because sometimes the real mistake is a line earlier).

:::gta In your GTA server
On a real FiveM server, \`print\` from a **server script** shows up in the server console window (the black txAdmin/FXServer window). \`print\` from a **client script** shows up in the in-game **F8 console**. You'll use \`print\` constantly to check what your scripts are doing.
:::

## Recap

- Code runs top to bottom, exactly as written.
- \`print(...)\` shows something in the console.
- Text (strings) goes in quotes; numbers don't.
- \`--\` starts a comment.
- Errors tell you the line number and the problem. Read them, don't fear them.

=== QUIZ
? What does \`print("5 + 5")\` show?
- 10
+ 5 + 5
- Nothing, it's an error
> The quotes make it text, so Lua shows it exactly as written. Without quotes, \`print(5 + 5)\` would show 10.
? In what order does Lua run your lines?
- In a random order
- From bottom to top
+ From top to bottom, one line at a time
> Lua always starts at the first line and works down. That's why the order of your lines matters.
? What does \`--\` do?
+ Starts a comment that Lua ignores
- Subtracts two numbers twice
- Deletes the line
> Two dashes start a comment. A single \`-\` is minus.
? An error says \`your code:7: ...\`. Where do you look first?
- Line 1
+ Line 7 (and the line just above it)
- The last line
> The number after the colon is the line number. Sometimes the actual mistake is one line earlier, like a missing closing bracket.

=== EXERCISE
title: Your first script
Make the console show **exactly** these two lines:

1. \`Hello, Los Santos!\`
2. \`My name is Tina\`

Then add a comment line anywhere that starts with \`--\`.

\`\`\`lua starter
-- Write your code below this line
print("Hello, Los Santos!")
\`\`\`

\`\`\`lua solution
-- My very first script
print("Hello, Los Santos!")
print("My name is Tina")
\`\`\`

\`\`\`lua test
__check(__printedLine("Hello, Los Santos!"), 'Show the line: Hello, Los Santos!')
__check(__printedLine("My name is Tina"), 'Show the line: My name is Tina')
local out = __output()
__check(out[1] == "Hello, Los Santos!" and out[2] == "My name is Tina", 'The two lines should appear in this order (Hello first)')
\`\`\`

match: --  :: Add at least one comment (a line with --)
hint: You need a second \`print(...)\` line under the first one.
hint: Copy the first line and change the text inside the quotes. Spelling, capitals and the comma all count.
`,t=`---
id: read-code
title: Reading code & error messages
part: Foundations
minutes: 20
summary: How to read a script calmly, what names tell you, the two kinds of errors, and how to fix code step by step.
---
## Reading comes before writing

Most of your time as a scripter is spent **reading** code: your own from last week, a free resource you downloaded, an example from the FiveM forum. Reading well is a skill, and it's the first one to build.

Here's how experienced people read a script they've never seen:

1. **Look at the shape first**, not the details. Indented blocks show what belongs together. Every \`if\`, \`for\`, \`while\` and \`function\` has a matching \`end\` at the same indentation.
2. **Find the names**: what values are there, and what are they called?
3. **Follow it top to bottom**, the same way Lua does, saying each line out loud in plain words.

\`\`\`lua
-- Pay everyone who is on duty
local SALARY = 250
local onDuty = true
local cash = 1000

if onDuty then
  cash = cash + SALARY
  print("Paid! Cash is now " .. cash)
end
\`\`\`

Read in plain words: *"SALARY is 250. onDuty is true. cash is 1000. If on duty, then: cash becomes cash plus salary, and print a message. End of the if."* Run it and check you predicted the output **before** it appears. Predicting is how you train your brain.

:::tip Say it out loud
It sounds silly, but reading code aloud (or in your head) in plain English is what professionals do when they're stuck. It's called *rubber duck debugging*: explain the code line by line to a rubber duck and you'll often hear the mistake yourself.
:::

## What names tell you

Lua doesn't care what you call things, but **people** do. Scripters follow naming habits (called *conventions*) so you can tell what something is just by how it's written:

| Looks like | Usually means | Example |
|---|---|---|
| \`lowerCamelCase\` | a normal variable or your own function | \`playerName\`, \`giveSalary\` |
| \`UPPER_SNAKE_CASE\` | a constant: set once, never changed | \`MAX_SPEED\`, \`SALARY\` |
| \`PascalCase\` (call) | a FiveM/GTA function (a *native*) | \`GetPlayerName\`, \`SetPedArmour\` |
| \`PascalCase\` (table) | a big shared table, often settings | \`Config\`, \`Config.Shops\` |
| \`"res:action"\` | an event name (text) | \`"garage:storeVehicle"\` |
| \`_\` | "I don't need this value" | \`for _, car in ipairs(cars)\` |

FiveM natives are always \`PascalCase\`, so if you see \`GetEntityCoords(...)\` you instantly know "that's a game function, look it up on docs.fivem.net", while \`getCarPrice(...)\` is something the script author wrote themselves.

:::do
- Use **descriptive** names: \`vehiclePrice\`, not \`vp\` or \`x\`.
- Name true/false values like questions: \`isAdmin\`, \`hasLicense\`, \`canRob\`.
- Put units in names when it matters: \`cooldownMs\`, \`distanceMeters\`.
- Pick one style (lowerCamelCase is the FiveM community favourite) and stick to it in a script.
:::

:::dont
- Don't use one-letter names except tiny loop counters like \`i\`.
- Don't reuse a name for something different later in the script; make a new variable.
- Don't name things after Lua words or built-ins (\`table\`, \`string\`, \`type\`, \`print\`): you'd hide the real ones.
:::

## Two kinds of errors

Errors come in two flavours, and knowing which one you have tells you where to look.

**1. Syntax errors**: the code isn't valid Lua (a missing \`end\`, quote or bracket). Lua checks the whole script *before* running it, so **nothing runs at all**, not even line 1:

\`\`\`lua error
print("This line never prints")
if 5 > 3
  print("big")
end
\`\`\`

Notice the first \`print\` didn't happen. The message says \`'then' expected near 'print'\`: Lua was waiting for the word \`then\` after the condition on line 2 and found \`print\` instead.

**2. Runtime errors**: the code is valid, but something goes wrong **while it runs** (maths with a missing value, calling something that doesn't exist). Everything **before** the bad line has already happened:

\`\`\`lua error
print("Step 1 runs")
local wallet = nil
print("Step 2 runs")
local total = wallet + 50
print("Step 3 never runs")
\`\`\`

Steps 1 and 2 printed, then line 4 crashed: \`attempt to perform arithmetic on a nil value (local 'wallet')\`.

:::why Why does this difference matter?
If **nothing** printed, suspect a syntax error: look for an unclosed \`if\`, \`(\`, \`"\` or \`{\`, often a line or two *above* the reported line. If **some** output appeared, it's a runtime error: the bug is on the reported line, usually a value that isn't what you think. Print it just before that line to see.
:::

## Taking an error message apart

\`your code:4: attempt to perform arithmetic on a nil value (local 'wallet')\`

- \`your code\` → which file (in FiveM this would be a file path).
- \`4\` → the **line number**. Go there first.
- \`attempt to perform arithmetic on a nil value\` → **what** went wrong: maths with nil.
- \`(local 'wallet')\` → **which name** was the problem. Gold dust: now you know exactly what to check.

The messages you'll see most as a beginner:

| Message contains | Usually means |
|---|---|
| \`attempt to call a nil value (global 'Prnt')\` | typo in a function name, or it doesn't exist on this side |
| \`attempt to index a nil value\` | you did \`x.something\` but \`x\` is nil |
| \`attempt to perform arithmetic on a nil value\` | maths with something missing |
| \`attempt to concatenate a nil value\` | \`..\` with something missing |
| \`'end' expected\` | an \`if\`/\`for\`/\`function\` has no \`end\` |
| \`unexpected symbol\` | a typo: stray character, \`!=\` instead of \`~=\` |

:::gta In your GTA server
On a FiveM server, errors look like this in the server console or F8:

\`SCRIPT ERROR: @my_garage/server/main.lua:42: attempt to index a nil value (local 'vehicle')\`

Same parts! \`@my_garage\` is the resource, \`server/main.lua\` is the file, \`42\` is the line. When asking for help on a forum or Discord, always paste the **whole** error line and the code around that line number.
:::

## A fixing routine that always works

1. **Read the line number** and go there (and look one line above).
2. **Read the "what"** part of the message and the **name** in brackets.
3. **Print** the suspicious value just before that line: \`print("wallet is", wallet)\`.
4. **Fix one thing**, run again. Never change five things at once; you won't know which one helped.
5. Repeat. A new error is **progress**: it means the old one is gone.

=== QUIZ
? Your script shows nothing at all, just an error about \`'end' expected\`. What kind of error is it?
+ A syntax error: Lua refused to run anything
- A runtime error on the last line
- A problem with the console
> Syntax errors stop the script before it starts, so not even the first print happens. Look for a missing \`end\`.
? What does \`SALARY\` written in capitals usually tell you?
- It's a FiveM native
+ It's a constant: set once and never changed
- It's a global variable that must be capitals
> Capitals are a human convention for constants. Lua itself treats it like any other name.
? An error says \`attempt to call a nil value (global 'GetPlayerNmae')\`. What's most likely wrong?
- The player has no name
+ The function name is misspelt, so it doesn't exist
- You need more brackets
> "Call a nil value" means the thing before \`( )\` doesn't exist. Here: a typo, \`Nmae\` instead of \`Name\`.
? You fixed one bug and now get a *different* error further down. Is that good or bad?
+ Good: the first bug is gone and Lua got further
- Bad: you made it worse
- It means the first fix was wrong
> Errors are fixed one at a time. A new error on a later line usually means progress.

=== EXERCISE
title: Fix the broken payday script
This script has **three bugs**. Fix them one at a time using the error messages, until it prints exactly:

1. \`Payday for Tina\`
2. \`Salary: 250\`
3. \`New balance: 1250\`

Don't just retype everything: run it, read the error, fix **that** line, run again. That's the skill.

\`\`\`lua starter
local playerName = "Tina"
local SALARY = 250
local balance = 1000

print("Payday for " .. playerNmae)
if SALARY > 0
  print("Salary: " .. SALARY)
end
balance = balance + SALARY
print("New balance: " + balance)
\`\`\`

\`\`\`lua solution
local playerName = "Tina"
local SALARY = 250
local balance = 1000

print("Payday for " .. playerName)
if SALARY > 0 then
  print("Salary: " .. SALARY)
end
balance = balance + SALARY
print("New balance: " .. balance)
\`\`\`

\`\`\`lua test
local out = __output()
__check(out[1] == "Payday for Tina", 'Line 1 should be: Payday for Tina (check the spelling of the variable name)')
__check(out[2] == "Salary: 250", 'Line 2 should be: Salary: 250')
__check(out[3] == "New balance: 1250", 'Line 3 should be: New balance: 1250 (join text with .., not +)')
\`\`\`

nomatch: playerNmae :: Fix the typo playerNmae → playerName
hint: The first error is a syntax error: what word must come after an \`if\` condition?
hint: After that, the error names a variable that is nil. Compare its spelling with line 1.
hint: The last one: in Lua \`+\` is only for maths. What joins text?
`,n=`---
id: variables
title: Variables & local
part: Foundations
minutes: 15
summary: Boxes with names, why = is not "equals", and why you should almost always write local.
---
## A variable is a labelled box

A **variable** is a name that holds a value, like a labelled box you can put something in and look at later.

\`\`\`lua
local playerName = "Tina"
local money = 500

print(playerName)
print(money)
\`\`\`

Reading the first line out loud: *"make a local box called \`playerName\` and put the text \`"Tina"\` in it."*

- \`local\` → this box belongs only to this part of the script (more on that below; it's important).
- \`playerName\` → the label (name) you chose.
- \`=\` → **put the value on the right into the box on the left**.
- \`"Tina"\` → the value.

## \`=\` does NOT mean "equals"

This trips up almost everyone. In maths, \`=\` means "both sides are the same". In Lua, a single \`=\` is an **action**: *assign*. It means "store this value".

\`\`\`lua
local money = 500
money = money + 100   -- take what's in money (500), add 100, store it back
print(money)           -- 600
\`\`\`

In maths \`money = money + 100\` is nonsense. In code it's perfectly normal: the right side is calculated first using the *old* value, then the result goes into the box.

:::why Why does it work right-to-left?
Lua always finishes the right side first (\`money + 100\` → \`600\`), and only *then* puts the result into the variable on the left. So the old value is used up before it's replaced.
:::

When you want to *compare* two things ("are these the same?"), you use **two** equals signs \`==\`. That's the *Decisions* lesson. For now, remember: \`=\` stores, \`==\` asks.

## Changing a variable

Once a variable exists, you change it **without** \`local\` again:

\`\`\`lua
local wantedLevel = 0
print("Wanted:", wantedLevel)

wantedLevel = 3
print("Wanted:", wantedLevel)
\`\`\`

Notice \`print("Wanted:", wantedLevel)\`: you can give \`print\` several things separated by commas, and it prints them side by side.

:::warn Don't re-declare by accident
Writing \`local wantedLevel = 3\` a second time creates a *brand new* box with the same name, which hides the first one. It usually works by luck, but it causes confusing bugs later. Use \`local\` once, when the variable is born. After that, just \`name = value\`.
:::

## Naming rules

- Letters, digits and \`_\` only. No spaces, no \`-\`.
- Can't start with a digit: \`2fast\` ✗, \`fast2\` ✓.
- **Case-sensitive**: \`money\`, \`Money\` and \`MONEY\` are three different variables.
- Can't be a Lua keyword like \`local\`, \`end\`, \`if\`, \`function\`, \`nil\`, \`true\`.

Choose names that say what's inside: \`playerMoney\` beats \`pm\`, \`x\` or \`thing\`. In six months you'll thank yourself.

:::do
- Use clear names: \`vehicleModel\`, \`jobName\`, \`maxSpeed\`.
- Pick one style and stick to it. FiveM scripts usually use \`camelCase\` (\`playerName\`) for variables.
:::

:::dont
- Don't use names that differ only by capitals (\`money\` vs \`Money\`). You *will* mix them up.
- Don't use one-letter names except for tiny loop counters like \`i\`.
:::

## \`local\` vs global: the big one

If you forget \`local\`, Lua creates a **global** variable instead:

\`\`\`lua
score = 10        -- global (no local)
local lives = 3   -- local
print(score, lives)
\`\`\`

Both work here. So why care? Because a global is visible to **everything** in the whole script (and, in FiveM, to every file of your resource that runs on the same side). That causes real problems:

1. **Accidental collisions.** You write \`count = 0\` in one file, a friend writes \`count = 0\` in another file of the same resource for something else. They silently overwrite each other. Now two features are broken and neither file looks wrong.
2. **Typos become new variables.** With globals, a typo like \`playrName = "Bob"\` doesn't error. It just quietly makes a *new* variable, and the old one never changes. These bugs can take hours to find.
3. **Speed.** Lua finds local variables faster than globals. In a loop that runs every frame in GTA, that adds up.
4. **Memory.** Locals disappear when they're no longer needed. Globals stick around forever.

:::why So the rule is:
**Always write \`local\` unless you have a specific reason to share something globally.** (A good reason you'll meet later: a \`Config\` table that several files of your resource need to read.)
:::

This app helps: after each run, it tells you if your code created any globals. Try running the example above and look at the note at the bottom of the console.

:::gta In your GTA server
FiveM loads all client files of a resource into one shared Lua world, and all server files into another. A global in \`client/main.lua\` can be accidentally overwritten by \`client/utils.lua\`. Experienced FiveM developers write \`local\` everywhere, and you'll look like one too.
:::

## Variables can hold the result of something

\`\`\`lua
local price = 250
local amount = 4
local total = price * amount   -- * means multiply
print("Total:", total)
\`\`\`

The value can come from maths, from another variable, or (later) from a FiveM function like \`GetPlayerName(...)\`.

=== QUIZ
? What does \`money = money + 50\` do if money was 100?
- It's an error because 100 isn't 150
+ Stores 150 in money
- Compares money with money + 50
> The right side is worked out first (100 + 50 = 150), then stored in money. A single = means "store".
? Which line should you normally use to create a new variable?
- \`count = 0\`
+ \`local count = 0\`
- \`local = count 0\`
> Use \`local\` when a variable is first created. Without it you get a global, which can clash with other code.
? Are \`Money\` and \`money\` the same variable?
- Yes, capitals don't matter
+ No, Lua is case-sensitive
> Lua treats capital letters as different characters. \`Money\` and \`money\` are two separate boxes.
? Why are typos dangerous with globals?
+ A typo silently creates a new variable instead of giving an error
- Typos delete your whole script
- They make Lua run faster
> \`playrName = "Bob"\` (typo) just creates a new global. The real variable never changes, and nothing warns you.

=== EXERCISE
title: The player card
Create **three local variables**:

- \`name\` containing the text \`"Tina"\`
- \`job\` containing the text \`"Mechanic"\`
- \`cash\` containing the number \`750\`

Then **add 250 to cash** (change the existing variable, don't make a new one), and print it like this:

\`Tina Mechanic 1000\`

Tip: \`print(name, job, cash)\` prints them side by side.

\`\`\`lua starter
-- 1. create the three local variables here


-- 2. add 250 to cash


-- 3. print them
\`\`\`

\`\`\`lua solution
local name = "Tina"
local job = "Mechanic"
local cash = 750

cash = cash + 250

print(name, job, cash)
\`\`\`

\`\`\`lua test
__check(name == "Tina", 'name should contain "Tina"')
__check(job == "Mechanic", 'job should contain "Mechanic"')
__check(cash == 1000, 'cash should end up as 1000 (750 + 250)')
__check(__printedMatch("Tina%s+Mechanic%s+1000"), 'Print name, job and cash in one print(...)')
local g = __globals()
__check(#g == 0, 'Use local for all three variables (this code created globals: ' .. table.concat(g, ', ') .. ')')
\`\`\`

match: cash\\s*=\\s*cash\\s*\\+\\s*250 :: Add 250 by changing the variable: cash = cash + 250
nomatch: local\\s+cash\\s*=\\s*1000 :: Don't just type 1000. Start at 750 and add 250, so the computer does the work.
hint: A local variable looks like: \`local name = "Tina"\`
hint: To add to a variable that already exists: \`cash = cash + 250\` (no \`local\` this time!)
`,r=`---
id: types
title: Types, nil & true/false
part: Foundations
minutes: 15
summary: The different kinds of values, what nil really means, and Lua's simple truth rule.
---
## Every value has a type

A value isn't just "a thing". It's a *kind* of thing, and the kind decides what you can do with it. You can multiply numbers, but not names. Lua has a handful of types, and you only need these for now:

| Type | Example | What it's for |
|---|---|---|
| \`number\` | \`42\`, \`3.5\`, \`-10\` | amounts, health, coordinates |
| \`string\` | \`"Tina"\`, \`"adder"\` | text: names, messages, model names |
| \`boolean\` | \`true\`, \`false\` | yes/no: is the door locked? |
| \`nil\` | \`nil\` | "nothing here", "no value" |
| \`table\` | \`{ 1, 2, 3 }\` | a collection (see the two Tables lessons) |
| \`function\` | \`print\` | a piece of code you can run (the *Functions* lesson) |

You can ask Lua what type something is with \`type(...)\`:

\`\`\`lua
print(type(42))
print(type("Tina"))
print(type(true))
print(type(nil))
print(type(print))
\`\`\`

:::why Why should you care about types?
Most beginner bugs are **type mix-ups**. For example, everything a player types in a chat command arrives as a **string**, even numbers. \`"50"\` (text) is not \`50\` (number). If you forget, maths fails or comparisons give the wrong answer. Knowing the type of every value is half of debugging.
:::

## \`nil\`: the value that means "nothing"

\`nil\` is special. It means **no value at all**. Not zero, not empty text: *nothing*.

\`\`\`lua
local car
print(car)          -- nil: we made the box but never put anything in

local fuel = 0
print(fuel)         -- 0 is a real number, not nil
\`\`\`

You get \`nil\` in many situations:

- A variable that was never given a value.
- A variable name that doesn't exist (often a **typo**!).
- A function that had nothing to give back.
- In FiveM: asking for something that isn't there, like the name of a player who already left.

\`\`\`lua
local playerName = "Tina"
print(playername)   -- typo: lowercase n. This is a different (non-existent) variable, so nil
\`\`\`

:::warn The most common error in Lua
Using \`nil\` as if it were something gives errors like **"attempt to index a nil value"** or **"attempt to perform arithmetic on a nil value"**. When you see those, ask: *"which variable here is nil, and why?"* The answer is usually a typo, or something that didn't exist yet.
:::

## Booleans: \`true\` and \`false\`

A boolean is a yes/no value. You'll use them for switches and decisions:

\`\`\`lua
local isOnDuty = true
local hasLicense = false
print("On duty?", isOnDuty)
print("Has license?", hasLicense)
\`\`\`

Note: \`true\` and \`false\` have **no quotes**. \`"true"\` with quotes is just text that happens to spell *true*.

## Lua's truth rule (simple, but surprising)

When Lua needs to decide yes or no (in an \`if\`, next lessons), it uses one rule:

**Only \`false\` and \`nil\` count as "no". Everything else counts as "yes".**

That includes \`0\` and empty text \`""\`! This is different from many other languages (JavaScript, Python, C), where 0 counts as false.

:::why Why does this matter?
If a player has \`0\` money, \`if money then ... end\` is still **true** in Lua, because 0 is a real value. If you mean "has more than zero", you must write \`if money > 0 then\`. Being exact here avoids bugs where broke players can still buy things.
:::

## Changing types on purpose

Two built-in helpers convert between strings and numbers:

\`\`\`lua
local typed = "50"              -- what a player typed (text!)
local amount = tonumber(typed)  -- turn it into the number 50
print(type(typed), type(amount))

print(tonumber("hello"))        -- not a number: gives nil
print(tostring(123) .. "!")     -- number to text
\`\`\`

\`tonumber\` gives \`nil\` if the text isn't a number. That's useful: it lets you **detect bad input** instead of crashing.

:::do
- When something comes from a player (commands, menus, events), convert it with \`tonumber\` and check the result isn't \`nil\`.
- Use \`type(x)\` with \`print\` when you're not sure what you've got.
:::

:::dont
- Don't write \`"true"\` or \`"nil"\` in quotes when you mean the real values.
- Don't assume 0 or \`""\` count as false. In Lua they're true.
:::

:::gta In your GTA server
Player IDs are a classic trap. On the server, \`GetPlayers()\` gives you IDs as **strings** (\`"1"\`, \`"2"\`), while \`source\` in an event is a **number**. Comparing \`"1" == 1\` is \`false\`! You'll often see \`tonumber(...)\` in good FiveM scripts for exactly this reason.
:::

=== QUIZ
? What is \`type("42")\`?
- number
+ string
- nil
> The quotes make it text. \`type(42)\` without quotes would be number.
? Which of these count as "false" in an if-check in Lua?
- 0
- "" (empty text)
+ nil
> Only \`nil\` and \`false\` count as false in Lua. 0 and "" count as true, unlike in many other languages.
? What does \`tonumber("abc")\` give?
- 0
+ nil
- an error that stops the script
> When the text isn't a number, tonumber gives nil. You can check for that to catch bad input.
? You print a variable and get \`nil\`. What's a likely cause?
+ A typo in the variable name, or it was never given a value
- The number was too big
- print is broken
> nil means "nothing here". Most often it's a misspelled name (Lua is case-sensitive) or a variable that was never set.

=== EXERCISE
title: Check the input
A player typed an amount in a command. It arrives as text in \`input\`.

1. Make a local variable \`amount\` that is \`input\` converted to a **number**.
2. Print \`type(amount)\` so the console shows \`number\`.
3. Make a local variable \`bad\` with \`tonumber("lots")\` and print it (it should show \`nil\`).

\`\`\`lua starter
local input = "250"

-- your code here
\`\`\`

\`\`\`lua solution
local input = "250"

local amount = tonumber(input)
print(type(amount))

local bad = tonumber("lots")
print(bad)
\`\`\`

\`\`\`lua test
__check(amount == 250, 'amount should be the number 250 (use tonumber(input))')
__check(__printedLine("number"), 'Print type(amount), which should show: number')
__check(bad == nil, 'bad should be tonumber("lots"), which is nil')
__check(__printedLine("nil"), 'Print bad, so the console shows: nil')
\`\`\`

match: tonumber\\s*\\(\\s*input\\s*\\) :: Convert with tonumber(input), don't just type 250
hint: \`local amount = tonumber(input)\`
hint: \`print(type(amount))\` shows what kind of value amount is.
`,i='---\nid: strings\ntitle: Strings (text)\npart: Foundations\nminutes: 20\nsummary: Joining text with .., length, formatting messages, and the handy string functions.\n---\n## Strings are text\n\nA **string** is any text in quotes. Lua accepts double `"..."` or single `\'...\'` quotes. They mean the same thing, so pick whichever makes your text easier:\n\n```lua\nprint("Tina\'s garage")          -- double quotes, so the \' inside is fine\nprint(\'She said "hello"\')       -- single quotes, so the " inside is fine\nprint("Line one\\nLine two")     -- \\n means "new line"\n```\n\nThe backslash `\\` starts an **escape**: a special character. `\\n` is a new line, `\\"` is a quote inside double quotes, `\\\\` is a real backslash.\n\n## Joining text: `..` (two dots)\n\nTo glue strings together, Lua uses **two dots**, not `+`:\n\n```lua\nlocal first = "Tina"\nlocal greeting = "Welcome to the server, " .. first .. "!"\nprint(greeting)\n```\n\n:::why Why not `+` like other languages?\nIn Lua `+` is *only* for maths. `"5" + "5"` actually gives the number `10` (Lua converts the text to numbers), while `"5" .. "5"` gives the text `"55"`. Having two different symbols means Lua never has to guess what you meant. Clear beats clever.\n:::\n\nYou can join numbers too; Lua turns them into text:\n\n```lua\nlocal cash = 500\nprint("You have $" .. cash)\n```\n\nBut you **can\'t** join `nil` or `true/false` directly. This errors:\n\n```lua error\nlocal rank\nprint("Your rank is " .. rank)   -- rank is nil!\n```\n\nThe fix is to make sure the value exists, or convert with `tostring(...)`, which always works:\n\n```lua\nlocal rank\nprint("Your rank is " .. tostring(rank))\nlocal isAdmin = true\nprint("Admin: " .. tostring(isAdmin))\n```\n\n## Length: `#`\n\nPut `#` in front of a string to get how many characters it has:\n\n```lua\nlocal plate = "TINA 01"\nprint(#plate)   -- 7 (the space counts)\n```\n\nGTA number plates allow up to 8 characters, so `#plate <= 8` is a real check you\'d write.\n\n## `string.format`: tidy messages\n\nLong `..` chains get messy. `string.format` lets you write the message with **placeholders** and fill them in:\n\n```lua\nlocal name, cash = "Tina", 1250.5\nlocal msg = string.format("%s has $%.2f", name, cash)\nprint(msg)\n```\n\n- `%s` → put a value here as text\n- `%d` → a whole number\n- `%.2f` → a number with exactly 2 decimals (great for money)\n\nThe values after the text fill the placeholders **in order**.\n\n## Useful string functions\n\nLua has a `string` toolbox. You can call them as `string.upper(s)` or the shorter `s:upper()` (the colon passes `s` in for you):\n\n```lua\nlocal msg = "  Hello Los Santos  "\nprint(msg:upper())                 -- HELLO LOS SANTOS\nprint(msg:lower())\nprint(msg:len())                   -- same as #msg\nprint(("ab"):rep(3))               -- ababab\nprint(("adder"):sub(1, 3))         -- characters 1 to 3: add\nprint(("TINA 01"):find("01"))      -- where "01" starts and ends: 6 7\nprint(("Hello Bob"):gsub("Bob", "Tina"))  -- replace: Hello Tina   1\n```\n\n`gsub` gives back two things: the new text, and how many replacements it made. That\'s why you see `1` at the end.\n\n:::warn Patterns: `.` `-` `%` and friends are special\n`find`, `gsub` and `match` use **Lua patterns**, where some characters have special meaning: `. % + - * ? [ ] ^ $ ( )`. Searching for a literal `.` or `-` can give weird results. To search for plain text, pass `true` as the 4th value of `find`: `s:find(".", 1, true)`. Or put `%` before the special character: `"%."`.\n:::\n\n:::do\n- Use `string.format` for messages with several values; it\'s easier to read.\n- Use `tostring(x)` when joining something that might be `nil` or boolean (while debugging).\n- Trim player input before checking it: `input:match("^%s*(.-)%s*$")` removes spaces at both ends.\n:::\n\n:::dont\n- Don\'t use `+` to join text.\n- Don\'t trust text from players to be the length or format you expect. Check it (`#text`, `tonumber`).\n:::\n\n:::gta In your GTA server\nYou\'ll build strings constantly: chat messages (`"^2[Garage]^7 Vehicle stored"`, where `^2` is a colour code in FiveM chat), notifications, log lines (`string.format("%s bought %s for $%d", name, item, price)`), and event names like `"garage:storeVehicle"`.\n:::\n\n=== QUIZ\n? What does `"5" .. "5"` give?\n- 10\n+ "55"\n- an error\n> `..` joins text, so you get "55". `+` would do maths and give 10.\n? What does `#"Adder"` give?\n- 1\n+ 5\n- "Adder"\n> `#` gives the length: A-d-d-e-r is 5 characters.\n? Why does `"Rank: " .. rank` crash when rank is nil?\n+ You can\'t join nil to text; use tostring(rank) or make sure it has a value\n- Because the colon is not allowed in strings\n- Because .. only works with numbers\n> Joining with nil (or a boolean) is an error. tostring always turns a value into text.\n? In `string.format("%s has $%d", name, cash)`, what fills `%d`?\n- name\n+ cash\n- nothing, it\'s literal\n> Values fill the placeholders in order: name goes to %s, cash goes to %d.\n\n=== EXERCISE\ntitle: The welcome banner\nUsing the variables given, print this **exact** line using `string.format`:\n\n`Welcome Tina! You have $1250.50 and your plate is TINA 01 (7 chars)`\n\nUse `%s` for text, `%.2f` for the money, `%d` for the length, and `#plate` for the length.\n\n```lua starter\nlocal name = "Tina"\nlocal cash = 1250.5\nlocal plate = "TINA 01"\n\n-- print the banner with string.format\n```\n\n```lua solution\nlocal name = "Tina"\nlocal cash = 1250.5\nlocal plate = "TINA 01"\n\nprint(string.format("Welcome %s! You have $%.2f and your plate is %s (%d chars)", name, cash, plate, #plate))\n```\n\n```lua test\n__check(__printedLine("Welcome Tina! You have $1250.50 and your plate is TINA 01 (7 chars)"), \'Print exactly: Welcome Tina! You have $1250.50 and your plate is TINA 01 (7 chars)\')\n```\n\nmatch: string\\.format|:format\\( :: Use string.format for this one\nmatch: #plate :: Use #plate for the length instead of typing 7\nhint: Start with: `print(string.format("Welcome %s! ...", name, ...))`\nhint: The order of values must match the order of placeholders: name, cash, plate, #plate.\n',a='---\nid: string-format\ntitle: Formatting text like a pro\npart: Foundations\nminutes: 25\nsummary: Concatenation in depth, every useful string.format placeholder, padding columns, money with commas, and building long text efficiently.\n---\n## Why spend a whole lesson on text?\n\nAlmost everything a player sees from your scripts is text: chat messages, notifications, help prompts, receipts, admin logs. Badly formatted text (`You paid $4.0000000001`, `Bobnil`) makes a server look broken. And the **server console logs** you\'ll read when something goes wrong are only useful if they\'re tidy.\n\n## Concatenation (`..`) in depth\n\n`..` joins two values into **new** text. Numbers are converted automatically; `nil`, booleans and tables are **not**:\n\n```lua\nlocal name, cash = "Tina", 500\nprint(name .. " has $" .. cash)     -- numbers are fine\nprint("Admin: " .. tostring(true))  -- booleans need tostring\nprint("Rank: " .. tostring(nil))    -- nil needs tostring\n```\n\n:::warn Dots next to numbers\n`print(1 .. 2)` works (gives `12`), but `print(1..2)` is a **syntax error**: Lua reads `1.` as the start of a decimal number. Always put spaces around `..`. It\'s easier to read anyway.\n:::\n\n## `string.format`: the template way\n\n`string.format(template, values...)` takes a template with **placeholders** that start with `%`, and fills them in order:\n\n```lua\nlocal name, item, price = "Bob", "burger", 8\nprint(string.format("%s bought a %s for $%d", name, item, price))\n\n-- the same thing, shorter: call format ON the template text\nprint(("%s bought a %s for $%d"):format(name, item, price))\n```\n\nThe placeholders you\'ll actually use:\n\n| Placeholder | Means | Example | Result |\n|---|---|---|---|\n| `%s` | anything, as text | `("%s"):format("hi")` | `hi` |\n| `%d` | whole number | `("%d"):format(42)` | `42` |\n| `%.2f` | number with 2 decimals | `("%.2f"):format(3.14159)` | `3.14` |\n| `%5d` | whole number, at least 5 wide (right aligned) | `("[%5d]"):format(42)` | `[   42]` |\n| `%-8s` | text at least 8 wide, left aligned | `("[%-8s]"):format("ab")` | `[ab      ]` |\n| `%03d` | pad with zeros to 3 digits | `("%03d"):format(7)` | `007` |\n| `%x` | hexadecimal | `("%x"):format(255)` | `ff` |\n| `%q` | text with quotes, safe to print | `("%q"):format(\'a"b\')` | `"a\\"b"` |\n| `%%` | a real % sign | `("%d%%"):format(50)` | `50%` |\n\n```lua\nprint(("[%5d]"):format(42))\nprint(("[%-8s]"):format("ab"))\nprint(("Plate %03d"):format(7))\nprint(("Discount: %d%%"):format(25))\nprint(("Fuel: %.1f litres"):format(37.456))\n```\n\n:::why Why is `%s` safer than `..`?\n`%s` runs `tostring` for you, so `("%s"):format(nil)` gives `nil` instead of crashing. That makes `string.format` great for **log lines**, where one missing value should never crash your script. (`%d` still needs a real number.)\n:::\n\n## The `%d` trap\n\n`%d` only accepts numbers that are **whole**. A decimal crashes:\n\n```lua error\nlocal price = 9.99\nprint(string.format("Price: $%d", price))\n```\n\n`bad argument #2 to \'format\' (number has no integer representation)`. Fix it by choosing the right placeholder (`%.2f` for money with cents), or round first with `math.floor(price)`.\n\n## Neat columns: padding\n\nPadding makes lists line up, which matters for receipts, scoreboards and admin tools:\n\n```lua\nlocal cars = { { "adder", 1000000 }, { "faggio", 4000 }, { "sultan", 35000 } }\nfor _, c in ipairs(cars) do\n  print(("%-8s $%8d"):format(c[1], c[2]))\nend\n```\n\n`%-8s` pads the name to 8 characters on the right; `%8d` right-aligns the price in 8 characters, so the digits line up.\n\n## Money with thousands separators\n\nGTA players love big numbers: `$1,000,000` is much easier to read than `$1000000`. Lua has no built-in for this, so here\'s a classic little function. Don\'t worry about every symbol yet; just see that functions can hide the messy part:\n\n```lua\nlocal function formatMoney(n)\n  local s = tostring(math.floor(n))\n  local formatted = s:reverse():gsub("(%d%d%d)", "%1,"):reverse()\n  return "$" .. formatted:gsub("^,", "")\nend\n\nprint(formatMoney(1000000))\nprint(formatMoney(35000))\nprint(formatMoney(999))\n```\n\n## Building long text: don\'t `..` in a loop\n\nEvery `..` creates a **brand new** string and throws the old one away. Joining inside a big loop makes thousands of throwaway strings. The better way: collect pieces in a list and glue them once with `table.concat`:\n\n```lua bad\nlocal names = { "Tina", "Bob", "Steve" }\nlocal text = ""\nfor i, n in ipairs(names) do\n  text = text .. n .. ", "        -- new string every time, and a trailing comma\nend\nprint(text)\n```\n\n```lua good\nlocal names = { "Tina", "Bob", "Steve" }\nprint(table.concat(names, ", "))   -- one join, separator only BETWEEN items\n```\n\nFor 3 names it doesn\'t matter, but for a 500-line log or a big player list it does. And notice the bonus: `table.concat` doesn\'t leave an ugly `, ` at the end.\n\n:::do\n- Use `string.format` when a message has more than one or two values.\n- Use `%.2f` for money with cents, `%d` for whole numbers, `%s` for everything else.\n- Use `table.concat(list, ", ")` to join many pieces.\n:::\n\n:::dont\n- Don\'t use `%d` with values that might have decimals.\n- Don\'t write `1..2`; always space your `..`.\n- Don\'t build big strings with `..` inside a loop.\n:::\n\n:::gta In your GTA server\n- **FiveM chat** colours text with `^` codes: `^1` red, `^2` green, `^3` yellow, `^7` white (reset). `("^2[Bank]^7 You deposited $%d"):format(amount)`.\n- **GTA\'s own text** (notifications, help boxes) uses `~` codes: `~g~` green, `~r~` red, `~s~` reset, `~INPUT_CONTEXT~` shows the E key icon: `"Press ~INPUT_CONTEXT~ to open the garage"`.\n- **Server logs**: `print(("[shop] %s (%s) bought %dx %s for $%d"):format(name, license, amount, item, cost))`. When something goes wrong at 3am, a log like this tells you exactly who did what.\n:::\n\n=== QUIZ\n? What does `("%05d"):format(42)` give?\n- 42000\n+ 00042\n- 42.000\n> `%05d` means "whole number, at least 5 digits wide, padded with zeros on the left".\n? Why does `string.format("%d", 2.5)` error?\n+ `%d` only accepts whole numbers; use `%.2f` or round first\n- 2.5 is not a number\n- format needs two values\n> `%d` is for integers. A decimal has "no integer representation".\n? What\'s the best way to join 200 player names with commas?\n- `..` inside a loop\n+ Put them in a list and use `table.concat(list, ", ")`\n- `string.format` 200 times\n> table.concat joins everything in one go and only puts the separator between items.\n? Which placeholder prints a percent sign?\n- `%p`\n- `\\%`\n+ `%%`\n> In format templates `%` is special, so a real percent sign is written twice.\n\n=== EXERCISE\ntitle: The receipt printer\nWrite a function `receiptLine(item, qty, unitPrice)` that **returns** (not prints) one receipt line in exactly this format:\n\n- the item name padded to **10** characters, left aligned (`%-10s`)\n- then ` x` and the quantity as a whole number\n- then two spaces and the **total** (`qty * unitPrice`) with `$` and **2 decimals**\n\nSo `receiptLine("water", 2, 1.5)` returns `"water      x2  $3.00"`.\n\nThen print the receipt for the `basket` with a loop, and finally print `Items: water, burger, phone` using `table.concat` on a list of the item names.\n\n```lua starter\nlocal basket = {\n  { item = "water", qty = 2, price = 1.5 },\n  { item = "burger", qty = 1, price = 8 },\n  { item = "phone", qty = 1, price = 149.99 },\n}\n\nlocal function receiptLine(item, qty, unitPrice)\n  return item .. " x" .. qty .. " $" .. qty * unitPrice\nend\n```\n\n```lua solution\nlocal basket = {\n  { item = "water", qty = 2, price = 1.5 },\n  { item = "burger", qty = 1, price = 8 },\n  { item = "phone", qty = 1, price = 149.99 },\n}\n\nlocal function receiptLine(item, qty, unitPrice)\n  return ("%-10s x%d  $%.2f"):format(item, qty, qty * unitPrice)\nend\n\nlocal names = {}\nfor _, line in ipairs(basket) do\n  print(receiptLine(line.item, line.qty, line.price))\n  table.insert(names, line.item)\nend\nprint("Items: " .. table.concat(names, ", "))\n```\n\n```lua test\n__check(type(receiptLine) == "function", \'Keep the local function receiptLine\')\nif type(receiptLine) == "function" then\n  __check(receiptLine("water", 2, 1.5) == "water      x2  $3.00", \'receiptLine("water", 2, 1.5) should return "water      x2  $3.00" (got \' .. tostring(receiptLine("water", 2, 1.5)) .. \')\')\n  __check(receiptLine("phone", 1, 149.99) == "phone      x1  $149.99", \'receiptLine("phone", 1, 149.99) should return "phone      x1  $149.99"\')\n  __check(receiptLine("radio", 3, 10) == "radio      x3  $30.00", \'Works for any item: receiptLine("radio", 3, 10) → "radio      x3  $30.00"\')\nend\n__check(__printedLine("burger     x1  $8.00"), \'Print a receipt line for every item in the basket (burger     x1  $8.00 is missing)\')\n__check(__printedLine("Items: water, burger, phone"), \'Print: Items: water, burger, phone\')\n```\n\nmatch: format :: Use string.format (or ("..."):format) in receiptLine\nmatch: table\\.concat :: Use table.concat for the Items line\nhint: The template is `"%-10s x%d  $%.2f"` with three values: item, qty and the total.\nhint: In the loop, `table.insert(names, line.item)` collects the names; after the loop, `print("Items: " .. table.concat(names, ", "))`.\n',o=`---
id: numbers
title: Numbers & maths
part: Foundations
minutes: 15
summary: Arithmetic, whole vs decimal numbers in Lua 5.4, rounding, random numbers and keeping values in range.
---
## The maths symbols

| Symbol | Meaning | Example | Result |
|---|---|---|---|
| \`+\` | add | \`5 + 2\` | \`7\` |
| \`-\` | subtract | \`5 - 2\` | \`3\` |
| \`*\` | multiply | \`5 * 2\` | \`10\` |
| \`/\` | divide | \`5 / 2\` | \`2.5\` |
| \`//\` | divide and round down | \`5 // 2\` | \`2\` |
| \`%\` | remainder ("modulo") | \`5 % 2\` | \`1\` |
| \`^\` | power | \`5 ^ 2\` | \`25.0\` |

\`\`\`lua
print(5 + 2, 5 - 2, 5 * 2)
print(5 / 2, 5 // 2, 5 % 2)
print(2 + 3 * 4)      -- 14: * happens before +
print((2 + 3) * 4)    -- 20: brackets first
\`\`\`

:::why Why does \`2 + 3 * 4\` give 14?
Same as school maths: multiply and divide happen before add and subtract. When in doubt, **add brackets**. They cost nothing and make your intention obvious to anyone reading.
:::

## Whole numbers vs decimals (Lua 5.4)

FiveM uses **Lua 5.4** (you turn it on with \`lua54 'yes'\` in the manifest). Lua 5.4 has two flavours of number: **integers** (whole: \`10\`) and **floats** (decimals: \`10.0\`, \`2.5\`).

\`\`\`lua
print(10 / 2)          -- 5.0  ( / always gives a float)
print(10 // 2)         -- 5    ( // gives an integer when both sides are integers)
print(math.type(5), math.type(5.0))
print(5 == 5.0)        -- true: same value, even though they print differently
\`\`\`

:::warn Why does my money show \`500.0\`?
Because somewhere a \`/\` produced a float. It's the same value, it just *prints* with \`.0\`. Use \`math.floor(x)\` to get a whole number, or \`string.format("%d", x)\` when the value is whole.
:::

## The \`math\` toolbox

\`\`\`lua
print(math.floor(3.7))     -- 3   round DOWN
print(math.ceil(3.2))      -- 4   round UP
print(math.floor(3.5 + 0.5)) -- 4  normal rounding trick
print(math.abs(-12))       -- 12  remove the minus
print(math.max(3, 9, 4))   -- 9   biggest
print(math.min(3, 9, 4))   -- 3   smallest
print(math.sqrt(16))       -- 4.0
print(math.pi)
\`\`\`

## Keeping a value in range ("clamping")

This is one of the most useful patterns in game scripting. Health, armour, fuel, prices: they all have a minimum and maximum. **Clamping** forces a value into that range:

\`\`\`lua
local function clamp(value, low, high)
  return math.max(low, math.min(high, value))
end

print(clamp(150, 0, 100))   -- 100 (too high, cut down)
print(clamp(-20, 0, 100))   -- 0   (too low, raised)
print(clamp(42, 0, 100))    -- 42  (fine, unchanged)
\`\`\`

(You'll learn exactly how \`local function\` works in the *Functions* lesson. For now, just see what it does.)

:::gta In your GTA server
In GTA V a ped's health normally goes from **100 (dead)** to **200 (full)**, and armour from 0 to 100. If a script sets health to 500 because someone typed \`/heal 500\`, weird things happen. Clamping input is cheap insurance.
:::

## Random numbers

\`\`\`lua
local roll = math.random(1, 6)        -- a whole number from 1 to 6
print("Dice:", roll)
local chance = math.random()          -- a decimal between 0 and 1
print(chance < 0.25 and "lucky!" or "not this time")
\`\`\`

\`math.random(1, 6)\` includes both 1 and 6. The last line uses a trick explained in the *Decisions* lesson.

## Counting up and down shortcuts

Lua has **no** \`x++\` or \`x += 1\` (some other languages do). You always write it out:

\`\`\`lua
local kills = 0
kills = kills + 1
kills = kills + 1
print(kills)
\`\`\`

:::do
- Use brackets to make the order of maths obvious.
- Use \`math.floor\` when you need whole numbers (money, counts).
- Clamp any number that comes from a player.
:::

:::dont
- Don't write \`x++\` or \`x += 1\`. It's not Lua and gives an error.
- Don't compare decimals for exact equality after maths: \`0.1 + 0.2 == 0.3\` is **false** (tiny rounding errors). Compare with a small margin, or work in whole numbers (e.g. store money in cents).
:::

\`\`\`lua
print(0.1 + 0.2 == 0.3)                      -- false!
print(math.abs((0.1 + 0.2) - 0.3) < 0.0001)  -- true: "close enough"
\`\`\`

=== QUIZ
? What does \`7 % 3\` give?
- 2.33
+ 1
- 21
> % is the remainder: 7 divided by 3 is 2, remainder 1.
? What does \`10 / 2\` print in Lua 5.4?
- 5
+ 5.0
- an error
> \`/\` always gives a float, so it prints 5.0 (same value as 5).
? How do you add 1 to \`score\`?
- \`score++\`
- \`score += 1\`
+ \`score = score + 1\`
> Lua has no ++ or +=. Write it out in full.
? A player asks to set their armour to 999. Max armour is 100. What should your script do?
+ Clamp it: math.min(100, value) (and math.max(0, ...) for negatives)
- Trust the player
- Crash on purpose
> Never trust numbers from players. Clamp them into the allowed range.

=== EXERCISE
title: Speeding ticket calculator
A speed camera fines **$15 for every km/h over the limit**, but the fine is **at least $50** and **at most $1000**.

Write code that calculates the fine for \`speed\` and \`limit\`, store it in a local variable \`fine\`, and print it.

With speed 132 and limit 80, that's 52 over → 52 × 15 = 780 → print \`780\`.

The checker will also try other speeds, so use the variables, don't type 780!

\`\`\`lua starter
local speed = 132
local limit = 80

-- calculate fine here (remember min 50, max 1000)
local fine = 0

print(fine)
\`\`\`

\`\`\`lua solution
local speed = 132
local limit = 80

local over = speed - limit
local fine = over * 15
fine = math.max(50, math.min(1000, fine))

print(fine)
\`\`\`

\`\`\`lua test
__check(fine == 780, 'With speed 132 and limit 80 the fine should be 780')
__check(__printedLine("780"), 'Print the fine')
\`\`\`

variant: local speed = 132 => local speed = 82 :: fine == 50 :: With speed 82 (2 over = $30) the fine must be raised to the minimum: 50
variant: local speed = 132 => local speed = 200 :: fine == 1000 :: With speed 200 (120 over = $1800) the fine must be cut to the maximum: 1000
variant: local speed = 132 => local speed = 90 :: fine == 150 :: With speed 90 (10 over) the fine should be 150

nomatch: fine\\s*=\\s*780 :: Calculate the fine, don't just type 780
match: math\\.(max|min) :: Use math.max / math.min to keep the fine between 50 and 1000
hint: First work out how much over the limit: \`local over = speed - limit\`
hint: Then \`local fine = over * 15\`, then clamp: \`fine = math.max(50, math.min(1000, fine))\`
`,s=`---
id: decisions
title: Decisions: if, ==, and/or
part: Core Lua
minutes: 20
summary: Making your script choose, comparing values the right way, and combining conditions.
---
## Scripts need to make choices

"If the player is a cop, open the armoury. Otherwise, say no." That's an \`if\`:

\`\`\`lua
local job = "police"

if job == "police" then
  print("Armoury unlocked")
end
\`\`\`

The shape is always: \`if\` **condition** \`then\` ... \`end\`. The lines between \`then\` and \`end\` only run when the condition is true.

:::why Why the \`end\`?
Lua needs to know where the "only if" part stops. Everything up to the matching \`end\` belongs to the \`if\`. Indent (push in) those lines with 2 spaces so you can *see* what belongs where. Lua doesn't need the indentation, but **you** do; badly indented code hides bugs.
:::

## \`==\` asks, \`=\` stores

This is the most famous mix-up in programming:

- \`job = "police"\` **stores** "police" in job.
- \`job == "police"\` **asks** "is job equal to police?" and gives \`true\` or \`false\`.

\`\`\`lua
local job = "mechanic"
print(job == "police")    -- false
print(job == "mechanic")  -- true
\`\`\`

In Lua, writing \`if job = "police" then\` is a **syntax error**, which is actually kind: Lua refuses to guess. (In some languages it silently stores the value and breaks everything.)

## All the comparisons

| Write | Means |
|---|---|
| \`a == b\` | equal |
| \`a ~= b\` | **not** equal (Lua uses \`~=\`, not \`!=\`) |
| \`a < b\` / \`a > b\` | smaller / bigger |
| \`a <= b\` / \`a >= b\` | smaller-or-equal / bigger-or-equal |

:::warn Types must match
\`"5" == 5\` is **false**: text is never equal to a number, even if it looks the same. And \`"5" < 10\` is an **error** (Lua won't compare text with numbers). Convert first with \`tonumber\`.
:::

## else and elseif

\`\`\`lua
local cash = 300
local price = 500

if cash >= price then
  print("Purchase complete")
else
  print("Not enough money. You need $" .. (price - cash) .. " more")
end
\`\`\`

For more than two options, chain with \`elseif\` (one word!):

\`\`\`lua
local wanted = 3

if wanted == 0 then
  print("You're clean")
elseif wanted <= 2 then
  print("Police are looking")
elseif wanted <= 4 then
  print("Helicopters incoming")
else
  print("Military. Good luck.")
end
\`\`\`

Lua checks from the top and runs **only the first** matching branch, then jumps past \`end\`. That's why \`wanted <= 2\` doesn't need "and greater than 0": we already know it isn't 0.

## Combining conditions: \`and\`, \`or\`, \`not\`

- \`a and b\` → true only if **both** are true.
- \`a or b\` → true if **at least one** is true.
- \`not a\` → flips true/false.

\`\`\`lua
local job = "police"
local onDuty = true
local isAdmin = false

if job == "police" and onDuty then
  print("Can use the police garage")
end

if isAdmin or job == "police" then
  print("Can see the wanted list")
end

if not onDuty then
  print("Clock in first")
else
  print("You're on duty")
end
\`\`\`

Use brackets when mixing \`and\` and \`or\`, so it's obvious which goes together: \`if (job == "police" or job == "ems") and onDuty then\`.

## The \`x and y or z\` shortcut (with a trap)

You'll see this in FiveM scripts a lot. It's a one-line "if":

\`\`\`lua
local health = 80
local status = health > 100 and "alive" or "dead"
print(status)
\`\`\`

Read it as: *if \`health > 100\`, use "alive", otherwise "dead"*.

:::warn The trap
It breaks if the middle value is \`false\` or \`nil\`: \`cond and false or "x"\` always gives \`"x"\`. So only use the shortcut when the middle value is a real value (text, number). When unsure, write a normal \`if\`.
:::

## Guard clauses: say "no" early

Instead of nesting \`if\` inside \`if\` inside \`if\`, check the bad cases first and stop:

\`\`\`lua good
local function buyCar(cash, price, hasLicense)
  if not hasLicense then return "You need a driver's license" end
  if cash < price then return "Not enough money" end
  return "Enjoy your new car!"
end

print(buyCar(1000, 500, false))
print(buyCar(100, 500, true))
print(buyCar(1000, 500, true))
\`\`\`

(\`return\` stops a function and hands back a value. The *Functions* lesson covers functions properly.)

:::do
- Indent the inside of every \`if\` by 2 spaces.
- Use \`~=\` for "not equal".
- Check the "bad" cases first and stop early (guard clauses). It's easier to read and harder to get wrong.
:::

:::dont
- Don't write \`=\` when you mean \`==\`.
- Don't write \`!=\` (that's other languages) or \`else if\` with a space (that opens a *second* \`if\` that needs its own \`end\`).
- Don't compare strings and numbers. Convert first.
:::

:::gta In your GTA server
Almost every server script is a stack of checks: *is this player allowed? are they close enough? do they have the money? is the item valid?* Writing clean guard clauses is the foundation of the **security lesson** later: the server checks everything and says no early.
:::

=== QUIZ
? Which line asks "is cash equal to 100"?
- \`if cash = 100 then\`
+ \`if cash == 100 then\`
- \`if cash equals 100 then\`
> \`==\` compares. A single \`=\` stores and is a syntax error inside an if.
? How do you write "not equal" in Lua?
- \`!=\`
+ \`~=\`
- \`<>\`
> Lua uses ~= for not equal.
? What does \`true and false\` give?
- true
+ false
> \`and\` needs both sides to be true.
? \`local x = 10\` — which branch runs? \`if x > 5 then A elseif x > 8 then B else C end\`
+ Only A
- A and B
- Only B
> Lua runs only the first branch whose condition is true, then skips to end.

=== EXERCISE
title: The garage door
Write a **local function** \`canEnter(job, onDuty, rank)\` that **returns** a text answer:

- If \`job\` is not \`"mechanic"\` → return \`"No entry"\`
- Else, if not \`onDuty\` → return \`"Clock in first"\`
- Else, if \`rank\` is **3 or higher** → return \`"Welcome, boss"\`
- Otherwise → return \`"Welcome"\`

The starter already has the function shape and prints. Fill in the inside using guard clauses.

\`\`\`lua starter
local function canEnter(job, onDuty, rank)
  -- your checks here
  return "Welcome"
end

print(canEnter("police", true, 5))
print(canEnter("mechanic", false, 1))
print(canEnter("mechanic", true, 3))
print(canEnter("mechanic", true, 1))
\`\`\`

\`\`\`lua solution
local function canEnter(job, onDuty, rank)
  if job ~= "mechanic" then return "No entry" end
  if not onDuty then return "Clock in first" end
  if rank >= 3 then return "Welcome, boss" end
  return "Welcome"
end

print(canEnter("police", true, 5))
print(canEnter("mechanic", false, 1))
print(canEnter("mechanic", true, 3))
print(canEnter("mechanic", true, 1))
\`\`\`

\`\`\`lua test
__check(canEnter("police", true, 5) == "No entry", 'A police officer should get "No entry"')
__check(canEnter("ems", true, 9) == "No entry", 'Any job other than mechanic should get "No entry"')
__check(canEnter("mechanic", false, 4) == "Clock in first", 'A mechanic who is NOT on duty should get "Clock in first"')
__check(canEnter("mechanic", true, 3) == "Welcome, boss", 'Rank 3 is "3 or higher", so "Welcome, boss"')
__check(canEnter("mechanic", true, 7) == "Welcome, boss", 'Rank 7 mechanic on duty: "Welcome, boss"')
__check(canEnter("mechanic", true, 2) == "Welcome", 'Rank 2 mechanic on duty: "Welcome"')
\`\`\`

hint: First check: \`if job ~= "mechanic" then return "No entry" end\`
hint: "3 or higher" is \`rank >= 3\`
hint: Order matters: check job, then duty, then rank.
`,c=`---
id: loops
title: Loops: doing things again and again
part: Core Lua
minutes: 20
summary: for, while and repeat loops, break, and why a loop that never stops freezes everything.
---
## Why loops?

Imagine printing a countdown from 5 to 1. You *could* write five \`print\` lines. But what about 100? Or "for every player on the server"? Loops repeat code for you.

## The counting loop: \`for\`

\`\`\`lua
for i = 1, 5 do
  print("Lap", i)
end
\`\`\`

Read it as: *"for \`i\` going from 1 to 5, do this"*. \`i\` is a **loop variable**: it's 1 the first time, 2 the next, up to 5. Then the loop ends and Lua carries on after \`end\`.

A third number is the **step**. Use a negative step to count down:

\`\`\`lua
for i = 5, 1, -1 do
  print(i .. "...")
end
print("GO!")

for i = 0, 100, 25 do
  print("Progress " .. i .. "%")
end
\`\`\`

:::why Why is \`i\` local automatically?
The loop variable only exists inside the loop. You can't use it after \`end\`, and changing it inside the loop doesn't change how many times it runs. That's on purpose: it keeps loops predictable.
:::

## Adding things up in a loop

A super common pattern: start a total at 0, add to it each time round.

\`\`\`lua
local total = 0
for i = 1, 10 do
  total = total + i
end
print("1 + 2 + ... + 10 =", total)
\`\`\`

## \`while\`: repeat as long as something is true

Use \`while\` when you don't know in advance how many times:

\`\`\`lua
local fuel = 100
local km = 0
while fuel > 0 do
  fuel = fuel - 15
  km = km + 1
end
print("Drove " .. km .. " km before running out")
\`\`\`

The condition is checked **before** each round. The moment it's false, the loop stops.

## \`repeat ... until\`: at least once

\`\`\`lua
local attempts = 0
repeat
  attempts = attempts + 1
  local roll = math.random(1, 6)
  print("Rolled", roll)
until roll == 6 or attempts >= 10
print("Done after " .. attempts .. " tries")
\`\`\`

This checks at the **end**, so the body always runs at least once. (Note: \`until\` can see locals made inside the loop, like \`roll\`.)

## \`break\`: get out early

\`\`\`lua
for i = 1, 100 do
  if i * i > 50 then
    print("First number whose square is over 50:", i)
    break
  end
end
\`\`\`

\`break\` exits the loop immediately. Lua has no \`continue\`; you simply wrap the rest in an \`if\` instead.

## The danger: loops that never end

If the condition never becomes false, the loop runs **forever**. The computer does nothing else. The page (or in FiveM, the whole game or server) **freezes**.

\`\`\`lua error
local fuel = 100
while fuel > 0 do
  print("vroom")   -- oops: we forgot to reduce fuel!
end
\`\`\`

Run it: this app stops it and explains. In a real FiveM server there's no friendly stop button: the server hangs and players get kicked.

:::why Why does it freeze everything?
A Lua script in FiveM shares time with everything else on that side (the game's frame on the client, the server's tick on the server). While your loop runs, nothing else gets a turn. FiveM's way to "take a breath" inside long-running loops is \`Wait(...)\`, which you'll learn in the **Threads & Wait** lesson.
:::

:::do
- Make sure something in a \`while\` loop changes the condition so it can become false.
- Use \`for i = 1, n\` when you know how many times.
- Use \`break\` to stop as soon as you've found what you need (saves work).
:::

:::dont
- Don't write \`while true do\` without a \`break\` or, in FiveM, a \`Wait(...)\` inside.
- Don't change the \`for\` loop variable \`i\` yourself to "skip" steps; use the step number or an \`if\`.
:::

:::gta In your GTA server
Loops are everywhere: "for each player, check their distance to the bank", "for each item in the shop, show it in the menu". And the infamous \`while true do ... Wait(0) end\` loop runs every frame. Getting loops right is the core of a fast server.
:::

=== QUIZ
? How many times does \`for i = 2, 10, 2 do ... end\` run?
- 10
+ 5
- 4
> i is 2, 4, 6, 8, 10: five times.
? What's the difference between \`while\` and \`repeat ... until\`?
+ repeat always runs at least once; while may run zero times
- There is no difference
- while is faster
> while checks before each round; repeat checks after, so its body runs at least once.
? What happens to a \`while\` loop whose condition never becomes false (and has no break)?
- It stops after 100 rounds
+ It runs forever and freezes the program
- Lua skips it
> It never ends. In FiveM that freezes the game or server.
? How do you leave a loop early?
- \`stop\`
- \`continue\`
+ \`break\`
> break jumps out of the loop straight away.

=== EXERCISE
title: Payday for the crew
1. Use a \`for\` loop from 1 to 4 to print \`Paying worker 1\`, \`Paying worker 2\`, ... \`Paying worker 4\`.
2. Each worker gets **$150**. Add it up in a local variable \`total\` inside the loop.
3. After the loop, print \`Total paid: 600\`.

\`\`\`lua starter
local total = 0

-- your loop here

print("Total paid: " .. total)
\`\`\`

\`\`\`lua solution
local total = 0

for i = 1, 4 do
  print("Paying worker " .. i)
  total = total + 150
end

print("Total paid: " .. total)
\`\`\`

\`\`\`lua test
for i = 1, 4 do __check(__printedLine("Paying worker " .. i), 'Print: Paying worker ' .. i) end
__check(total == 600, 'total should be 600 after the loop (4 x 150)')
__check(__printedLine("Total paid: 600"), 'Print: Total paid: 600')
__check(not __printedLine("Paying worker 5") and not __printedLine("Paying worker 0"), 'Only workers 1 to 4')
\`\`\`

match: for\\s+\\w+\\s*=\\s*1\\s*,\\s*4 :: Use a for loop from 1 to 4
hint: \`for i = 1, 4 do ... end\`
hint: Inside the loop: \`print("Paying worker " .. i)\` and \`total = total + 150\`
`,l=`---
id: functions
title: Functions: reusable recipes
part: Core Lua
minutes: 25
summary: Writing your own functions, parameters, return values, multiple returns, and why functions make scripts better.
---
## What is a function?

A **function** is a named recipe: a block of code you write once and run (*call*) whenever you want. You've been using one since the first lesson: \`print\`. Now you'll make your own.

\`\`\`lua
local function greet()
  print("Welcome to the server!")
end

greet()
greet()
\`\`\`

- \`local function greet()\` → create a recipe called \`greet\`.
- The lines up to \`end\` are the recipe. **Nothing happens yet!** Defining a function just stores it.
- \`greet()\` → *now* run it. The \`()\` is what makes it run.

:::why Why bother with functions?
1. **No copy-paste.** Write the logic once. If it has a bug, you fix it in *one* place, not ten.
2. **Names explain code.** \`if isNearShop(coords) then\` reads like English.
3. **Small pieces are easier to test.** You can check one function at a time.
4. In FiveM, events and commands are *built* on functions: you hand FiveM a function and it calls it when something happens.
:::

## Parameters: giving the function information

\`\`\`lua
local function greet(name)
  print("Welcome to the server, " .. name .. "!")
end

greet("Tina")
greet("Bob")
\`\`\`

\`name\` is a **parameter**: a local variable that gets filled with whatever you pass in the brackets when calling. Several parameters are separated by commas:

\`\`\`lua
local function pay(name, amount)
  print(name .. " was paid $" .. amount)
end

pay("Tina", 500)
pay("Bob", 120)
\`\`\`

:::warn Missing values become nil
If you call \`pay("Tina")\` without an amount, \`amount\` is \`nil\` inside the function, and joining \`nil\` with \`..\` errors. Lua doesn't check how many values you pass. You can give a default: \`amount = amount or 0\` at the top of the function.
:::

## \`return\`: giving a value back

Many functions *calculate* something and hand it back with \`return\`:

\`\`\`lua
local function addTax(price)
  return price * 1.2
end

local total = addTax(100)
print(total)
print(addTax(50) + addTax(50))
\`\`\`

\`return\` immediately ends the function. Any code after it in that block never runs. That's why guard clauses (\`if bad then return end\`) work so well.

:::why print vs return: what's the difference?
\`print\` **shows** something to a human. \`return\` **hands** a value back to the code that called the function, so it can keep using it. A function that only prints can't be used in maths. Prefer returning values; print them outside when you need to see them.
:::

## Returning more than one value

Lua functions can return several values. This is used a lot, e.g. "did it work, and why not?":

\`\`\`lua
local function withdraw(balance, amount)
  if amount > balance then
    return false, "Insufficient funds"
  end
  return true, balance - amount
end

local ok, result = withdraw(100, 30)
print(ok, result)

local ok2, err = withdraw(100, 500)
print(ok2, err)
\`\`\`

## Local functions and order

Just like variables, functions should be \`local\`. And a function must be defined **above** the line that calls it (Lua reads top to bottom):

\`\`\`lua error
sayHi()   -- error: sayHi doesn't exist YET at this point
local function sayHi() print("hi") end
\`\`\`

:::tip Calling a function from inside itself
A function can call itself (that's called *recursion*). With \`local function name()\` this works because the name exists inside the body. You won't need it much, but now you know.
:::

## Functions are values

In Lua a function is a value just like a number. You can store it in a variable, or pass it to another function. This is **exactly** how FiveM events work:

\`\`\`lua
local function onArrive(place)
  print("Arrived at " .. place)
end

local function drive(destination, whenDone)
  print("Driving to " .. destination .. "...")
  whenDone(destination)   -- call the function we were given
end

drive("Legion Square", onArrive)

-- or write the function right there, without a name (an "anonymous function"):
drive("the airport", function(place)
  print("Plane spotted at " .. place)
end)
\`\`\`

When you later write \`RegisterCommand("heal", function(source, args) ... end)\`, you're handing FiveM a function to call **later**, when someone types \`/heal\`. Same idea!

:::do
- Give functions verb names that say what they do: \`giveMoney\`, \`isNearShop\`, \`formatPrice\`.
- Keep functions short and focused on one job.
- Return values instead of printing inside, so the function is reusable.
:::

:::dont
- Don't forget the \`()\` when calling: \`greet\` alone just *mentions* the function; \`greet()\` runs it.
- Don't define the same global function name in two files of a resource; the later one silently replaces the earlier one. Use \`local\`.
:::

=== QUIZ
? What happens when Lua reaches \`local function test() print("x") end\`?
- It prints x
+ It stores the function; nothing is printed until you call test()
- It errors
> Defining a function only stores the recipe. Calling it with test() runs it.
? What's the difference between print and return?
+ print shows a value to you; return hands the value back to the code that called the function
- They are the same
- return also prints
> Use return when other code needs the result.
? You call \`pay("Tina")\` but pay expects (name, amount). What is amount inside?
- 0
+ nil
- "Tina"
> Missing values are nil. Give defaults with \`amount = amount or 0\` if needed.
? What does \`local ok, msg = check()\` do if check returns \`false, "too far"\`?
+ ok is false and msg is "too far"
- ok is "too far"
- It only keeps the first value
> Multiple returned values go into the variables in order.

=== EXERCISE
title: The mechanic's invoice
Write a **local function** \`repairCost(damage, isMember)\` that **returns** the price:

- The price is \`damage * 10\` dollars.
- If \`isMember\` is \`true\`, take **25% off** (multiply by 0.75).
- The price is **never more than 2000**.
- **Return** the price (don't just print it).

Then print \`repairCost(50, false)\` → \`500\` and \`repairCost(50, true)\` → \`375.0\`.

\`\`\`lua starter
local function repairCost(damage, isMember)
  -- calculate and return the price
end

print(repairCost(50, false))
print(repairCost(50, true))
\`\`\`

\`\`\`lua solution
local function repairCost(damage, isMember)
  local price = damage * 10
  if isMember then
    price = price * 0.75
  end
  return math.min(price, 2000)
end

print(repairCost(50, false))
print(repairCost(50, true))
\`\`\`

\`\`\`lua test
__check(type(repairCost) == "function", 'Keep the function called repairCost')
__check(repairCost(50, false) == 500, 'repairCost(50, false) should return 500')
__check(repairCost(50, true) == 375, 'repairCost(50, true) should return 375 (25% off 500)')
__check(repairCost(1000, false) == 2000, 'repairCost(1000, false) should be capped at 2000')
__check(repairCost(400, true) == 2000, 'repairCost(400, true): 4000 x 0.75 = 3000, capped to 2000')
__check(repairCost(0, true) == 0, 'repairCost(0, true) should be 0')
\`\`\`

match: return :: Use return to hand the price back
hint: Start with \`local price = damage * 10\`
hint: \`if isMember then price = price * 0.75 end\`
hint: Finish with \`return math.min(price, 2000)\`
`,u=`---
id: tables-lists
title: Tables I: lists
part: Core Lua
minutes: 25
summary: Storing many values in order, why Lua counts from 1, adding/removing, and looping with ipairs.
---
## One box, many values

So far each variable held one value. A **table** holds many. The simplest kind of table is a **list**: values in order.

\`\`\`lua
local cars = { "adder", "zentorno", "sultan" }

print(cars[1])   -- adder
print(cars[2])   -- zentorno
print(cars[3])   -- sultan
print(#cars)     -- 3: how many items
\`\`\`

- Curly brackets \`{ }\` make a table. Items are separated by commas.
- \`cars[1]\` means "item number 1 in cars". The number in square brackets is the **index** (position).
- \`#cars\` gives the length, just like \`#\` on a string.

## Lua counts from 1 (not 0)

In Lua, the **first** item is \`[1]\`. Many other languages (JavaScript, C#, Python) start at 0, so if you ever copy code or advice from those, watch out.

\`\`\`lua
local jobs = { "police", "ems", "mechanic" }
print(jobs[0])         -- nil: there is nothing at position 0
print(jobs[1])         -- police
print(jobs[#jobs])     -- the LAST item: mechanic
print(jobs[4])         -- nil: past the end
\`\`\`

:::why Why does this matter so much?
Off-by-one mistakes are the classic list bug. Asking for \`[0]\` or \`[#list + 1]\` doesn't error, it quietly gives \`nil\`, and then a few lines later something like \`"Your job: " .. job\` crashes with "attempt to concatenate a nil value". The crash is far away from the real mistake. Remember: **first is 1, last is \`#list\`**.
:::

## Changing, adding and removing

\`\`\`lua
local garage = { "adder", "sultan" }

garage[2] = "elegy"                 -- replace item 2
table.insert(garage, "banshee")     -- add to the END
table.insert(garage, 1, "faggio")   -- add at position 1 (others shift up)
print(table.concat(garage, ", "))

local removed = table.remove(garage, 1)  -- remove item 1 (others shift down)
print("Removed:", removed)
table.remove(garage)                -- remove the LAST item
print(table.concat(garage, ", "), #garage)
\`\`\`

\`table.concat(list, ", ")\` joins a list of strings/numbers into one text. Perfect for printing.

## Looping through a list: \`ipairs\`

You'll do this constantly. \`ipairs\` gives you each **position and value** in order:

\`\`\`lua
local players = { "Tina", "Bob", "Steve" }

for index, name in ipairs(players) do
  print(index, name)
end
\`\`\`

If you don't need the index, the convention is to name it \`_\` ("I don't care about this"):

\`\`\`lua
local prices = { 100, 250, 75 }
local total = 0
for _, price in ipairs(prices) do
  total = total + price
end
print("Total:", total)
\`\`\`

You can also use a counting loop: \`for i = 1, #prices do ... prices[i] ... end\`. Both are fine; \`ipairs\` reads nicer.

## Holes: don't put \`nil\` in the middle

\`\`\`lua
local list = { "a", "b", "c", "d" }
list[2] = nil        -- makes a HOLE
for i, v in ipairs(list) do print(i, v) end   -- stops at the hole! only prints 1 a
\`\`\`

\`ipairs\` stops at the first \`nil\`, and \`#list\` becomes unreliable when there are holes.

:::do
- Use \`table.insert\` / \`table.remove\` to add and remove; they keep the list without holes.
- Use \`#list\` for "how many" and \`list[#list]\` for "the last one".
- Name the loop parts clearly: \`for _, vehicle in ipairs(vehicles) do\`.
:::

:::dont
- Don't start at 0: \`list[0]\` is \`nil\`.
- Don't remove items by setting them to \`nil\` in a list; use \`table.remove\`.
- Don't \`table.remove\` items while looping *forwards* over the same list with \`ipairs\`; you'll skip items. Loop backwards instead: \`for i = #list, 1, -1 do\`.
:::

:::gta In your GTA server
On the server, \`GetPlayers()\` gives you a **list** of player IDs. Looping over it with \`ipairs\` is how you do anything "for every player": announcements, payday, checking who's near a robbery. Shop items, spawn points and allowed vehicles are usually lists in a config file.
:::

=== QUIZ
? \`local t = {"a", "b", "c"}\` — what is \`t[1]\`?
+ "a"
- "b"
- nil
> Lua lists start at 1, so t[1] is the first item.
? How do you get the last item of a list \`t\`?
- \`t[0]\`
- \`t[-1]\`
+ \`t[#t]\`
> #t is the length, which is also the position of the last item.
? What does \`table.insert(t, "x")\` do?
+ Adds "x" to the end of t
- Replaces the first item with "x"
- Deletes x from t
> Without a position, table.insert adds to the end.
? Why not remove an item with \`t[2] = nil\`?
- It's a syntax error
+ It leaves a hole; ipairs stops there and # becomes unreliable
- It removes all items
> Use table.remove(t, 2), which shifts the later items down and keeps the list tidy.

=== EXERCISE
title: The spawn list
You have a list of allowed vehicles.

1. Add \`"banshee"\` to the **end** of \`allowed\` using \`table.insert\`.
2. Remove the **first** item (\`"faggio"\`) with \`table.remove\`.
3. Loop over the list with \`ipairs\` and print each one as \`1: sultan\`, \`2: elegy\`, \`3: banshee\`.
4. Print how many there are: \`Count: 3\`.

\`\`\`lua starter
local allowed = { "faggio", "sultan", "elegy" }

-- 1. add banshee to the end

-- 2. remove the first item

-- 3. print each item as "position: name"

-- 4. print the count
\`\`\`

\`\`\`lua solution
local allowed = { "faggio", "sultan", "elegy" }

table.insert(allowed, "banshee")
table.remove(allowed, 1)

for i, model in ipairs(allowed) do
  print(i .. ": " .. model)
end

print("Count: " .. #allowed)
\`\`\`

\`\`\`lua test
__check(#allowed == 3 and allowed[1] == "sultan" and allowed[3] == "banshee", 'allowed should end up as sultan, elegy, banshee')
__check(__printedLine("1: sultan") and __printedLine("2: elegy") and __printedLine("3: banshee"), 'Print each item like "1: sultan"')
__check(__printedLine("Count: 3"), 'Print "Count: 3" using #allowed')
\`\`\`

match: table\\.insert :: Use table.insert to add banshee
match: table\\.remove :: Use table.remove to remove faggio
match: ipairs :: Loop with ipairs
match: #allowed :: Use #allowed for the count
hint: \`table.insert(allowed, "banshee")\` and \`table.remove(allowed, 1)\`
hint: \`for i, model in ipairs(allowed) do print(i .. ": " .. model) end\`
`,d=`---
id: tables-dicts
title: Tables II: dictionaries & nesting
part: Core Lua
minutes: 25
summary: Tables with named keys, dot vs brackets, pairs, nested data, and the "tables are shared" surprise.
---
## Named slots instead of numbers

A list uses positions 1, 2, 3. But often you want to look things up by **name**. Tables can do that too. These are called *dictionaries* (or "maps", or "key/value tables"):

\`\`\`lua
local player = {
  name = "Tina",
  job = "mechanic",
  cash = 500,
  onDuty = true,
}

print(player.name)       -- Tina
print(player["job"])     -- mechanic (same thing, different writing)
print(player.cash + 100)
\`\`\`

Each line inside is **key = value**. The key (\`name\`) is the label, the value (\`"Tina"\`) is what's stored. The comma after the last item is allowed and makes adding lines easier.

## Dot vs square brackets

\`player.name\` and \`player["name"]\` mean exactly the same thing. Use the dot when you know the key while writing the code. Use brackets when the key is in a **variable**:

\`\`\`lua
local prices = { adder = 1000000, sultan = 12000, faggio = 400 }

local wanted = "sultan"
print(prices[wanted])   -- 12000: looks up the key stored in 'wanted'
print(prices.wanted)    -- nil! This looks for a key literally called "wanted"
\`\`\`

:::why This is a very common bug
\`prices.wanted\` is shorthand for \`prices["wanted"]\`, the text "wanted". It does **not** use the variable. When the key comes from a variable (player input, a loop, an event), you **must** use brackets.
:::

## Adding, changing, removing keys

\`\`\`lua
local car = { model = "adder", plate = "TINA01" }

car.color = "pink"     -- add a new key
car.plate = "LS-777"   -- change one
car.model = nil        -- remove a key (setting to nil deletes it)

print(car.color, car.plate, car.model)
\`\`\`

For dictionaries, setting a key to \`nil\` is the **correct** way to remove it (unlike lists, where it makes holes).

## Looping over every key: \`pairs\`

\`\`\`lua
local stock = { water = 12, burger = 3, phone = 0 }

for item, amount in pairs(stock) do
  print(item, amount)
end
\`\`\`

:::warn pairs has NO guaranteed order
\`pairs\` visits every key, but in an unpredictable order. It can change between runs. If order matters (menus!), use a **list**, or a list of tables (below).
:::

Rule of thumb: **\`ipairs\` for lists, \`pairs\` for dictionaries.**

## Checking if a key exists

\`\`\`lua
local allowedJobs = { police = true, ems = true, mechanic = true }

local job = "mechanic"
if allowedJobs[job] then
  print(job .. " is allowed")
end
if not allowedJobs["taxi"] then
  print("taxi is not allowed")
end
\`\`\`

This "set" pattern (\`name = true\`) is *much* faster than looping through a list to search, and it's how good FiveM scripts check whitelists.

## Nesting: tables inside tables

Real data is layered. A shop has items, each item has a label and price:

\`\`\`lua
local shop = {
  name = "24/7",
  items = {
    { name = "water",  label = "Water bottle", price = 2 },
    { name = "burger", label = "Burger",       price = 8 },
  },
}

print(shop.items[2].label)         -- Burger
for _, item in ipairs(shop.items) do
  print(item.label .. " costs $" .. item.price)
end
\`\`\`

Read \`shop.items[2].label\` left to right: *shop → its items → the second one → its label*.

## Surprise: tables are shared, not copied

\`\`\`lua
local a = { cash = 100 }
local b = a          -- b is NOT a copy. It's another name for the SAME table.
b.cash = 999
print(a.cash)        -- 999!
\`\`\`

A variable holding a table really holds a *reference* (an address) to it. Two variables can point to the same table. To get a real copy you have to build a new table:

\`\`\`lua
local function copy(t)
  local c = {}
  for k, v in pairs(t) do c[k] = v end
  return c
end

local original = { cash = 100 }
local clone = copy(original)
clone.cash = 5
print(original.cash, clone.cash)   -- 100   5
\`\`\`

(This is a *shallow* copy: tables inside are still shared. Good enough most of the time.)

:::do
- Use dictionaries for "things with properties": a player, a vehicle, a shop item.
- Use \`name = true\` sets for whitelists and quick "is it allowed?" checks.
- Use a **list of tables** when you need both order and properties.
:::

:::dont
- Don't write \`t.key\` when the key is in a variable; use \`t[key]\`.
- Don't rely on \`pairs\` order.
- Don't assume \`local b = a\` copies a table.
:::

:::gta In your GTA server
Nearly all FiveM data is nested tables: \`Config.Shops\`, a player's inventory, vehicle properties, coordinates. When you later send data in an event (\`TriggerClientEvent("shop:open", src, shop)\`), FiveM sends a **copy** to the other side, so changing it there doesn't change the original. Inside the *same* side, though, tables are shared, exactly as above.
:::

=== QUIZ
? \`local key = "cash"\` — which line reads player's cash?
- \`player.key\`
+ \`player[key]\`
- \`player."cash"\`
> player.key looks for a key literally named "key". Brackets use the variable's value.
? How do you remove the key \`color\` from a dictionary \`car\`?
+ \`car.color = nil\`
- \`table.remove(car, color)\`
- \`car.color = ""\`
> In dictionaries, setting a key to nil removes it.
? Does \`pairs\` go through keys in a fixed order?
- Yes, alphabetical
- Yes, the order you wrote them
+ No, the order is not guaranteed
> Use a list if you need order.
? After \`local b = a; b.x = 1\`, what is \`a.x\`?
+ 1, because a and b are the same table
- nil
- an error
> Assigning a table to another variable doesn't copy it.

=== EXERCISE
title: The vehicle shop
Using the \`catalog\` table:

1. Write a **local function** \`getPrice(model)\` that returns the price of a model, or \`nil\` if the model isn't in the catalog. (Use brackets with the parameter!)
2. Add a new car \`banshee\` costing \`90000\` to the catalog.
3. Print \`getPrice("sultan")\` and \`getPrice("banshee")\`.

\`\`\`lua starter
local catalog = {
  adder = 1000000,
  sultan = 12000,
  faggio = 400,
}

local function getPrice(model)
  -- return the price of this model
end

-- add banshee here

print(getPrice("sultan"))
print(getPrice("banshee"))
\`\`\`

\`\`\`lua solution
local catalog = {
  adder = 1000000,
  sultan = 12000,
  faggio = 400,
}

local function getPrice(model)
  return catalog[model]
end

catalog.banshee = 90000

print(getPrice("sultan"))
print(getPrice("banshee"))
\`\`\`

\`\`\`lua test
__check(getPrice("sultan") == 12000, 'getPrice("sultan") should return 12000')
__check(getPrice("adder") == 1000000, 'getPrice("adder") should return 1000000')
__check(getPrice("banshee") == 90000, 'banshee should be in the catalog for 90000')
__check(getPrice("rocketship") == nil, 'An unknown model should give nil')
__check(__printedLine("12000") and __printedLine("90000"), 'Print both prices')
\`\`\`

nomatch: catalog\\.model :: catalog.model looks for a key literally named "model". Use catalog[model].
hint: Inside getPrice: \`return catalog[model]\`
hint: Add a key: \`catalog.banshee = 90000\`
`,f=`---
id: iterating
title: Looping over tables like a pro
part: Core Lua
minutes: 30
summary: Numeric for with steps, ipairs vs pairs (and why pairs has no order), removing while looping, nested loops, and why to avoid goto.
---
## Three ways to walk through data

You already know loops and tables. Now we put them together properly, because **almost every FiveM script loops over tables**: all players, all shops, all items in an inventory, all garages in the config.

| Loop | Use it for | Order |
|---|---|---|
| \`for i = 1, #list do\` | lists, when you need the position or a custom step | 1, 2, 3 ... |
| \`for i, v in ipairs(list) do\` | lists, the everyday way | 1, 2, 3 ... stops at the first \`nil\` |
| \`for k, v in pairs(t) do\` | dictionaries (named keys), or "every key" | **no guaranteed order** |

## Numeric for, with steps

\`\`\`lua
for i = 1, 10, 3 do print("every 3rd:", i) end     -- 1 4 7 10
for i = 5, 1, -1 do print("countdown:", i) end      -- 5 4 3 2 1
for i = 1, 0 do print("never runs") end            -- start > end: zero times
\`\`\`

The loop variable \`i\` is a fresh **local** that only exists inside the loop. Changing it inside the loop does **not** change how many times it runs, which surprises people:

\`\`\`lua
for i = 1, 3 do
  print("i is", i)
  i = 100   -- only changes this round's copy; the loop carries on with 2, 3
end
\`\`\`

:::dont
- Don't change the loop variable to "skip ahead". Use \`while\` if you need that kind of control.
- Don't use \`#list\` in the loop header if the loop removes items (see below).
:::

## \`ipairs\`: lists, in order, until a gap

\`ipairs\` gives you the **position** and the **value**, from 1 upwards, and **stops at the first \`nil\`**:

\`\`\`lua
local garage = { "adder", "sultan", nil, "faggio" }
for i, car in ipairs(garage) do
  print(i, car)
end
-- prints adder and sultan only: the nil at position 3 ends the loop
\`\`\`

That's another reason never to leave holes in lists.

## \`pairs\`: every key, in no particular order

\`pairs\` visits **every key** of any table, including named keys. But the order is **not defined**. It might look sorted today and come out differently after you add a key, or on another machine:

\`\`\`lua
local prices = { water = 2, burger = 8, phone = 150, radio = 40 }
for item, price in pairs(prices) do
  print(item, price)
end
\`\`\`

:::why Why doesn't pairs keep an order?
Dictionaries are stored as a *hash table*: Lua puts each key wherever it can find it fastest, not in the order you wrote it. That's what makes \`prices["phone"]\` instant even with 10,000 items. The price is that "every key" has no natural order.
:::

When order matters (a menu, a leaderboard), collect the keys into a list and **sort** it:

\`\`\`lua
local prices = { water = 2, burger = 8, phone = 150, radio = 40 }
local names = {}
for item in pairs(prices) do names[#names + 1] = item end
table.sort(names)                       -- alphabetical
for _, item in ipairs(names) do
  print(("%-7s $%d"):format(item, prices[item]))
end
\`\`\`

:::warn \`#\` doesn't count dictionaries
\`#prices\` above is \`0\`! \`#\` only counts the **list part** (1, 2, 3...). To count named keys, loop with \`pairs\` and add 1 each time.
:::

## Removing items while looping: go backwards

Say you want to remove every impounded car from a list. Removing while going **forwards** skips items, because everything after the removed one shifts down a place:

\`\`\`lua bad
local cars = { "adder", "impounded", "impounded", "sultan" }
for i = 1, #cars do
  if cars[i] == "impounded" then table.remove(cars, i) end
end
print(table.concat(cars, ", "))   -- one "impounded" survived (and #cars was wrong too)
\`\`\`

Go **backwards** instead. Removing item 3 only shifts items *after* 3, which you've already checked:

\`\`\`lua good
local cars = { "adder", "impounded", "impounded", "sultan" }
for i = #cars, 1, -1 do
  if cars[i] == "impounded" then table.remove(cars, i) end
end
print(table.concat(cars, ", "))
\`\`\`

With \`pairs\`, you may set **existing** keys to \`nil\` during the loop (that's allowed), but never **add new** keys while looping with \`pairs\`: Lua says the result is undefined.

## Nested loops and \`break\`

A loop inside a loop runs the inner one completely for **each** round of the outer one. \`break\` only leaves the **innermost** loop:

\`\`\`lua
local shops = {
  { name = "24/7", stock = { "water", "burger" } },
  { name = "Ammu-Nation", stock = { "pistol", "armour" } },
}
local wanted = "armour"
local foundIn = nil
for _, shop in ipairs(shops) do
  for _, item in ipairs(shop.stock) do
    if item == wanted then
      foundIn = shop.name
      break            -- leaves the INNER loop only
    end
  end
  if foundIn then break end   -- so we break the outer one too
end
print(wanted .. " is sold at " .. tostring(foundIn))
\`\`\`

:::tip Even cleaner: a function with \`return\`
\`return\` leaves the **whole function** immediately, from any depth of loops. "Find something" loops are much clearer as a small function: \`local function findShop(item) for ... for ... if item == wanted then return shop.name end end end return nil end\`.
:::

## "continue" and why to avoid \`goto\`

Other languages have \`continue\` ("skip to the next round"). Lua doesn't. It has \`goto\`, and you'll see \`goto continue\` in some scripts:

\`\`\`lua
for i = 1, 5 do
  if i % 2 == 0 then goto continue end
  print("odd:", i)
  ::continue::
end
\`\`\`

It works, but \`goto\` makes code jump around, which gets hard to follow and has odd rules (you can't jump into the scope of a local). The beginner-friendly way is simply to **wrap the work in an \`if\`**:

\`\`\`lua good
for i = 1, 5 do
  if i % 2 ~= 0 then
    print("odd:", i)
  end
end
\`\`\`

:::gta In your GTA server
- \`GetPlayers()\` on the server returns a list of player IDs **as strings**: \`for _, id in ipairs(GetPlayers()) do local src = tonumber(id) ... end\`.
- A player who leaves mid-loop is normal on a busy server: check the data still exists inside the loop (\`if GetPlayerName(src) then ...\`).
- Config files are often dictionaries (\`Config.Shops = { legion = {...}, sandy = {...} }\`). Use \`pairs\` to set them all up; if you show them in a menu, sort first.
:::

=== QUIZ
? What does \`for i, v in ipairs({ "a", nil, "c" })\` print?
+ Only \`1 a\`, because ipairs stops at the first nil
- \`1 a\` and \`3 c\`
- An error
> ipairs walks 1, 2, 3... and stops at the first gap. Lists shouldn't have holes.
? In what order does \`pairs\` visit the keys of a dictionary?
- Alphabetical
- The order you wrote them
+ No guaranteed order
> Hash tables have no natural order. Collect the keys and table.sort them if order matters.
? Why loop backwards (\`for i = #t, 1, -1\`) when removing items?
+ Removing shifts later items down; going backwards means you've already checked those
- Lua requires it for table.remove
- It's faster
> Going forwards skips the item right after each removed one.
? What does \`break\` do inside a loop that is inside another loop?
- Leaves both loops
+ Leaves only the inner loop
- Stops the whole script
> break exits the innermost loop. Use a flag or return from a function to get out of both.

=== EXERCISE
title: The wanted list
The server keeps a list of online players. Write the code that:

1. Adds up everyone's \`cash\` into a variable \`total\` (use \`ipairs\`).
2. **Removes** every player with \`wanted = true\` from \`players\`, looping **backwards**.
3. After that, finds the **first** remaining player with more than 1000 cash and stores their name in \`rich\` (use \`break\` once found). If nobody has more than 1000, \`rich\` stays \`nil\`.
4. Prints \`Total: 7350\`, then \`Clean: Tina, Bob, Kim\` (the names left, joined with \`table.concat\`).

\`\`\`lua starter
local players = {
  { name = "Tina", cash = 500, wanted = false },
  { name = "Steve", cash = 5000, wanted = true },
  { name = "Bob", cash = 1200, wanted = false },
  { name = "Rico", cash = 250, wanted = true },
  { name = "Kim", cash = 400, wanted = false },
}
local total = 0
local rich = nil

-- 1. add up the cash

-- 2. remove wanted players (backwards!)

-- 3. find the first player with more than 1000

-- 4. print the two lines
\`\`\`

\`\`\`lua solution
local players = {
  { name = "Tina", cash = 500, wanted = false },
  { name = "Steve", cash = 5000, wanted = true },
  { name = "Bob", cash = 1200, wanted = false },
  { name = "Rico", cash = 250, wanted = true },
  { name = "Kim", cash = 400, wanted = false },
}
local total = 0
local rich = nil

for _, p in ipairs(players) do
  total = total + p.cash
end

for i = #players, 1, -1 do
  if players[i].wanted then
    table.remove(players, i)
  end
end

for _, p in ipairs(players) do
  if p.cash > 1000 then
    rich = p.name
    break
  end
end

local names = {}
for _, p in ipairs(players) do names[#names + 1] = p.name end
print("Total: " .. total)
print("Clean: " .. table.concat(names, ", "))
\`\`\`

\`\`\`lua test
__check(total == 7350, 'total should be 7350 (got ' .. tostring(total) .. ')')
__check(#players == 3, 'After removing wanted players, 3 should be left (got ' .. #players .. ')')
local okNames = #players == 3 and players[1].name == "Tina" and players[2].name == "Bob" and players[3].name == "Kim"
__check(okNames, 'The players left should be Tina, Bob, Kim in that order')
__check(rich == "Bob", 'rich should be "Bob" (Steve had more, but he was removed first) (got ' .. tostring(rich) .. ')')
__check(__printedLine("Total: 7350"), 'Print: Total: 7350')
__check(__printedLine("Clean: Tina, Bob, Kim"), 'Print: Clean: Tina, Bob, Kim')
\`\`\`

match: ipairs :: Use ipairs for the list loops
match: ,\\s*1\\s*,\\s*-1\\s+do :: Remove wanted players with a backwards loop: for i = #players, 1, -1 do
match: break :: Use break once the rich player is found
hint: Step 2: \`for i = #players, 1, -1 do if players[i].wanted then table.remove(players, i) end end\`
hint: Step 3 must come after step 2, otherwise Steve (who is wanted) would be found.
hint: For the names: make an empty list, \`names[#names + 1] = p.name\` in a loop, then \`table.concat(names, ", ")\`.
`,p=`---
id: table-library
title: The table toolbox
part: Core Lua
minutes: 30
summary: table.insert at any position, table.remove's return value, sorting with your own rule, concat, unpack, and copying tables properly.
---
## Why learn the toolbox?

You *could* write every list operation by hand with loops. But the \`table\` library is tested, fast, and instantly readable to every other Lua scripter. \`table.sort(list)\` says what it does; a 15-line hand-written sort says "here be bugs".

## \`table.insert\`: end or anywhere

\`\`\`lua
local queue = { "Bob", "Kim" }
table.insert(queue, "Rico")        -- at the END: Bob, Kim, Rico
table.insert(queue, 1, "Tina")     -- at position 1: Tina, Bob, Kim, Rico
print(table.concat(queue, ", "))
\`\`\`

With **two** values it adds to the end. With **three**, the middle one is the position, and everything from there shifts up one place. \`queue[#queue + 1] = "x"\` is a common shortcut for adding to the end.

## \`table.remove\`: and what it gives back

\`table.remove(list, pos)\` removes the item at \`pos\`, shifts the rest down, and **returns the removed item**. Without a position it removes the **last** item:

\`\`\`lua
local queue = { "Tina", "Bob", "Kim" }
local first = table.remove(queue, 1)   -- take from the front
print("Serving " .. first)            -- Serving Tina
local last = table.remove(queue)      -- take from the end
print("Last in line was " .. last)    -- Kim
print("Still waiting: " .. table.concat(queue, ", "))
\`\`\`

:::why Why is the return value useful?
"Take the next one" is a very common job: the next customer at the mechanic, the next delivery on a route, the oldest log line. \`local nextJob = table.remove(jobs, 1)\` removes and hands it to you in one step. If the list is empty you get \`nil\`, so check: \`if not nextJob then ... end\`.
:::

:::dont
- Don't do \`list[2] = nil\` to remove from a list: it leaves a hole and breaks \`#\` and \`ipairs\`. Use \`table.remove(list, 2)\`.
- Don't use \`table.remove\` on dictionaries. For named keys, \`t.key = nil\` is correct.
:::

## \`table.sort\`: your order, your rule

\`table.sort(list)\` sorts numbers smallest first and text alphabetically (capital letters before lowercase!). It changes the list **in place** and returns nothing:

\`\`\`lua
local prices = { 150, 2, 40, 8 }
table.sort(prices)
print(table.concat(prices, " "))   -- 2 8 40 150
\`\`\`

For anything else, give it a **comparison function**: \`function(a, b) return true if a should come BEFORE b end\`:

\`\`\`lua
local players = {
  { name = "Bob", cash = 1200 },
  { name = "Tina", cash = 5000 },
  { name = "Kim", cash = 1200 },
}
table.sort(players, function(a, b)
  if a.cash ~= b.cash then return a.cash > b.cash end   -- richest first
  return a.name < b.name                                 -- tie: alphabetical
end)
for i, p in ipairs(players) do print(i, p.name, p.cash) end
\`\`\`

:::warn The "invalid order function" crash
The comparison must answer **"strictly before?"**. Using \`>=\` or \`<=\` instead of \`>\`/\`<\` can crash with \`invalid order function for sorting\`, because for two equal values both "a before b" and "b before a" would be true. Always use \`<\` or \`>\`, and add a tie-breaker like the name.
:::

\`\`\`lua error
local scores = {}
for i = 1, 50 do scores[i] = 5 end            -- lots of equal values
table.sort(scores, function(a, b) return a >= b end)
\`\`\`

## \`table.concat\`: list to text

\`table.concat(list, separator)\` joins **strings and numbers** (not booleans or tables) with the separator **between** them:

\`\`\`lua
print(table.concat({ "a", "b", "c" }, " | "))
print(table.concat({ 1, 2, 3 }))     -- no separator: 123
\`\`\`

## \`table.unpack\`: list to separate values

\`table.unpack(list)\` spreads a list into separate values. Handy for coordinates stored in a list:

\`\`\`lua
local spot = { 215.7, -810.1, 30.7 }
local x, y, z = table.unpack(spot)
print(x, y, z)
print(math.max(table.unpack({ 4, 99, 12 })))   -- 99
\`\`\`

## Copying a table (it isn't automatic!)

Remember: \`local b = a\` doesn't copy a table, both names point at the **same** table. To get an independent copy, make a new table and copy each key across:

\`\`\`lua
local function shallowCopy(t)
  local c = {}
  for k, v in pairs(t) do c[k] = v end
  return c
end

local defaults = { fuel = 100, colour = "black" }
local myCar = shallowCopy(defaults)
myCar.colour = "pink"
print(defaults.colour, myCar.colour)   -- black  pink
\`\`\`

It's called *shallow* because tables **inside** the table are still shared. For nested data, copy those too (a *deep copy*, which calls itself for inner tables).

:::do
- Use \`table.remove\` (not \`= nil\`) to take items out of lists.
- Always write sort comparisons with \`<\` or \`>\` and a tie-breaker.
- Copy config defaults before changing them per player, so one player's change doesn't leak to everyone.
:::

:::gta In your GTA server
A classic bug: \`local data = Config.DefaultLoadout\` and then \`data.armour = 0\` for one player... and now **every** player's default loadout has 0 armour, because \`data\` and \`Config.DefaultLoadout\` are the same table. Copy first. Leaderboards, "nearest 3 garages", and job queues all use \`table.sort\` and \`table.remove\`.
:::

=== QUIZ
? What does \`table.insert(t, 1, "x")\` do?
+ Puts "x" at position 1 and shifts the others up
- Replaces item 1 with "x"
- Adds "x" at the end, once
> With three values, the middle one is the position. Everything from there moves up.
? What does \`table.remove(queue, 1)\` give back?
- true
+ The item that was removed (or nil if the list was empty)
- The new length
> That's why \`local nextCustomer = table.remove(queue, 1)\` works.
? Which sort comparison is safe for sorting by cash, richest first?
- \`return a.cash >= b.cash\`
+ \`return a.cash > b.cash\`
- \`return a.cash == b.cash\`
> Use strict > or <. >= can cause "invalid order function" errors.
? After \`local b = a\` (a is a table) and \`b.x = 1\`, what is \`a.x\`?
+ 1, because a and b are the same table
- nil
- an error
> Assigning a table never copies it. Use a copy function to get an independent table.

=== EXERCISE
title: The mechanic's queue and leaderboard
Two small jobs:

**A. The queue.** Customers wait in \`queue\`. Add \`"Rico"\` to the **end** and \`"Chief"\` (a VIP) to the **front**. Then take the next customer out with \`table.remove\` and store them in \`serving\`. Print \`Serving: Chief\` and \`Waiting: Bob, Kim, Rico\`.

**B. The leaderboard.** Write a function \`leaderboard(players)\` that sorts the list **richest first** (ties: name A→Z) and **returns** a text like \`1. Tina ($5000), 2. Bob ($1200), 3. Kim ($1200)\` using \`table.concat\` with \`", "\`.

\`\`\`lua starter
local queue = { "Bob", "Kim" }
local serving = nil

-- A: insert Rico at the end, Chief at the front, then remove the first into serving


local function leaderboard(players)
  -- B: sort, then build the text
  return ""
end

print(leaderboard({
  { name = "Kim", cash = 1200 }, { name = "Tina", cash = 5000 }, { name = "Bob", cash = 1200 },
}))
\`\`\`

\`\`\`lua solution
local queue = { "Bob", "Kim" }
local serving = nil

table.insert(queue, "Rico")
table.insert(queue, 1, "Chief")
serving = table.remove(queue, 1)
print("Serving: " .. serving)
print("Waiting: " .. table.concat(queue, ", "))

local function leaderboard(players)
  table.sort(players, function(a, b)
    if a.cash ~= b.cash then return a.cash > b.cash end
    return a.name < b.name
  end)
  local parts = {}
  for i, p in ipairs(players) do
    parts[#parts + 1] = ("%d. %s ($%d)"):format(i, p.name, p.cash)
  end
  return table.concat(parts, ", ")
end

print(leaderboard({
  { name = "Kim", cash = 1200 }, { name = "Tina", cash = 5000 }, { name = "Bob", cash = 1200 },
}))
\`\`\`

\`\`\`lua test
__check(serving == "Chief", 'serving should be "Chief" (got ' .. tostring(serving) .. ')')
__check(table.concat(queue, ",") == "Bob,Kim,Rico", 'queue should end up as Bob, Kim, Rico (got ' .. table.concat(queue, ", ") .. ')')
__check(__printedLine("Serving: Chief"), 'Print: Serving: Chief')
__check(__printedLine("Waiting: Bob, Kim, Rico"), 'Print: Waiting: Bob, Kim, Rico')
local r = leaderboard({ { name = "Kim", cash = 1200 }, { name = "Tina", cash = 5000 }, { name = "Bob", cash = 1200 } })
__check(r == "1. Tina ($5000), 2. Bob ($1200), 3. Kim ($1200)", 'leaderboard should return "1. Tina ($5000), 2. Bob ($1200), 3. Kim ($1200)" (got "' .. tostring(r) .. '")')
local many = {}
for i = 1, 40 do many[i] = { name = "P" .. string.format("%02d", i), cash = (i % 3) * 100 } end
local ok, r2 = pcall(leaderboard, many)
__check(ok and type(r2) == "string" and r2:sub(1, 15) == "1. P02 ($200), ", 'leaderboard must work with many equal values (use > or <, not >=) and break ties by name')
\`\`\`

match: table\\.insert :: Use table.insert for the queue
match: table\\.remove :: Use table.remove to take the next customer
match: table\\.sort :: Use table.sort in leaderboard
hint: \`table.insert(queue, 1, "Chief")\` puts Chief at the front. \`serving = table.remove(queue, 1)\` takes him out again.
hint: Comparison: \`if a.cash ~= b.cash then return a.cash > b.cash end return a.name < b.name\`
hint: Build a list of pieces with \`("%d. %s ($%d)"):format(i, p.name, p.cash)\` and join them with \`table.concat(parts, ", ")\`.
`,m=`---
id: scope-errors
title: Scope, errors & debugging
part: Core Lua
minutes: 25
summary: Where variables live, how to read errors, how to catch them with pcall, and a calm debugging routine.
---
## Scope: where a variable can be seen

A \`local\` variable lives in the **block** where it's created, and in blocks inside that one. A block is the code between \`do\`/\`then\`/\`function\` and its \`end\`. When the block ends, its locals disappear.

\`\`\`lua
local outside = "I'm visible below"

if true then
  local inside = "I only exist in this if"
  print(outside)   -- works: inner blocks can see outer locals
  print(inside)    -- works
end

print(outside)     -- works
print(inside)      -- nil: 'inside' died at the 'end'
\`\`\`

:::why Why is that a good thing?
Small scopes mean fewer surprises. A variable that only exists for 5 lines can't be accidentally changed by line 300. It's the main reason \`local\` is so valuable.
:::

## The "I declared it inside" mistake

\`\`\`lua bad
local cash = 100
if cash > 50 then
  local message = "rich"
end
print(message)   -- nil, because message only lived inside the if
\`\`\`

Fix: create the variable **before** the block, and only *change* it inside:

\`\`\`lua good
local cash = 100
local message = "poor"
if cash > 50 then
  message = "rich"   -- no 'local' here: we change the outer one
end
print(message)
\`\`\`

## Shadowing

If you write \`local x\` inside a block when an outer \`x\` already exists, you make a **new** \`x\` that hides the outer one inside that block. Usually that's an accident:

\`\`\`lua
local count = 0
for i = 1, 3 do
  local count = count + 1   -- oops: a NEW count each time, the outer one never changes
end
print(count)                 -- still 0
\`\`\`

## Reading errors like a pro

Every error has the same shape: **where : what**.

\`your code:12: attempt to index a nil value (local 'player')\`

- **Line 12.**
- **attempt to index a nil value** → you used \`something.x\` or \`something[x]\` but \`something\` was \`nil\`.
- **(local 'player')** → the nil thing is the local variable \`player\`.

The most common messages and what they really mean:

| Message | Meaning |
|---|---|
| attempt to call a nil value (global 'Foo') | \`Foo\` doesn't exist: typo, wrong capitals, or defined below this line |
| attempt to index a nil value | you did \`x.y\` but \`x\` is nil |
| attempt to perform arithmetic on a nil value | maths with something that's nil |
| attempt to concatenate a nil value | \`..\` with something that's nil |
| attempt to compare number with nil | \`<\` or \`>\` with something nil (or text vs number) |
| 'end' expected | an \`if\`/\`for\`/\`function\` is missing its \`end\` |
| unexpected symbol near ... | a typo in the line: missing quote, bracket, or comma |

## Making your own errors: \`error\` and \`assert\`

You can stop on purpose when something is wrong, with a clear message:

\`\`\`lua error
local function setHealth(value)
  if type(value) ~= "number" then
    error("setHealth needs a number, got " .. type(value))
  end
  print("Health set to " .. value)
end

setHealth(150)
setHealth("lots")
\`\`\`

\`assert(condition, message)\` is a short form: "if the condition is false or nil, error with this message".

## Catching errors: \`pcall\`

Normally an error stops the code. \`pcall\` ("protected call") runs a function and **catches** any error, so you can deal with it:

\`\`\`lua
local function risky()
  local player = nil
  return player.name     -- will error
end

local ok, err = pcall(risky)
print("Worked?", ok)
print("Error was:", err)
print("...and the script keeps going!")
\`\`\`

\`pcall\` returns \`true\` plus the function's results if it worked, or \`false\` plus the error message if it didn't.

:::why When should you use pcall?
Use it around things that can fail for reasons **outside your control**, like decoding JSON that came from a file or a player, or calling into another resource that may not be started. Don't wrap *everything* in pcall to hide bugs: an error you can't see is a bug you can't fix.
:::

\`\`\`lua
local ok, data = pcall(json.decode, '{"cash": 500}')
print(ok, data and data.cash)
\`\`\`

## A calm debugging routine

When something doesn't work:

1. **Read the error.** Line number first. Look at that line and the one above.
2. **Print what you think is true.** \`print("cash is", cash, type(cash))\`. Nine bugs out of ten are "that value wasn't what I thought".
3. **Label your prints** so you know which print you're looking at: \`print("[shop] before buy:", cash)\`.
4. **Change one thing at a time**, then run again.
5. **Shrink the problem**: comment out half the code (\`--\`) to see which half the bug is in.

:::do
- Declare variables in the widest scope that needs them, and no wider.
- Use \`error\`/\`assert\` with clear messages for situations that should never happen.
- Use \`pcall\` around JSON decoding and other things that may legitimately fail.
:::

:::dont
- Don't silence errors with \`pcall\` and ignore the result.
- Don't leave hundreds of debug prints in a finished script; remove them or put them behind a \`Config.Debug\` switch.
:::

:::gta In your GTA server
In FiveM an error in one event handler or thread only stops **that** handler or thread, but the feature it powers is now broken for everyone. The error appears in the server console (server scripts) or F8 (client scripts) as \`SCRIPT ERROR: @your_resource/server/main.lua:12: attempt to index a nil value\`. Same format as here: resource, file, line, message.
:::

=== QUIZ
? A \`local\` created inside an \`if ... end\` block can be used...
- anywhere in the file
+ only inside that block (and blocks inside it)
- only on the next line
> Locals live until the end of the block they were created in.
? \`attempt to index a nil value (local 'car')\` means:
+ You used car.something but car was nil
- car is too big
- You forgot quotes around car
> "Index" means using . or [ ]. The thing you indexed was nil.
? What does \`pcall(f)\` return if f errors?
- Nothing; the script stops
+ false and the error message
- true and nil
> pcall catches the error: first value false, second value the message.
? What's the best first step when a value seems wrong?
- Rewrite the whole script
+ print it (with a label) and check its type
- Add pcall everywhere
> Most bugs are "that value wasn't what I thought". Print it and see.

=== EXERCISE
title: Safe salary loader
\`loadSalary(text)\` turns a JSON text into a salary. Bad text must **not** crash the script.

Write \`loadSalary\` so that it:

1. Uses \`pcall(json.decode, text)\` to decode safely.
2. If decoding failed **or** the result is \`nil\` **or** \`data.salary\` isn't a number → **return 0**.
3. Otherwise return \`data.salary\`.

Also fix the scope bug at the bottom so it prints \`Total: 1500\`.

\`\`\`lua starter
local function loadSalary(text)
  local data = json.decode(text)
  return data.salary
end

print(loadSalary('{"salary": 1500}'))
print(loadSalary('this is not json'))

local total
if true then
  local total = loadSalary('{"salary": 1500}')
end
print("Total: " .. tostring(total))
\`\`\`

\`\`\`lua solution
local function loadSalary(text)
  local ok, data = pcall(json.decode, text)
  if not ok or type(data) ~= "table" or type(data.salary) ~= "number" then
    return 0
  end
  return data.salary
end

print(loadSalary('{"salary": 1500}'))
print(loadSalary('this is not json'))

local total
if true then
  total = loadSalary('{"salary": 1500}')
end
print("Total: " .. tostring(total))
\`\`\`

\`\`\`lua test
__check(loadSalary('{"salary": 1500}') == 1500, 'Good JSON: return the salary (1500)')
__check(loadSalary('garbage') == 0, 'Bad text: return 0 instead of crashing')
__check(loadSalary('{"name": "Tina"}') == 0, 'JSON without a salary: return 0')
__check(loadSalary('{"salary": "lots"}') == 0, 'A salary that is not a number: return 0')
__check(__printedLine("Total: 1500"), 'Fix the scope bug so it prints Total: 1500')
\`\`\`

match: pcall :: Use pcall to decode safely
hint: \`local ok, data = pcall(json.decode, text)\`
hint: Then: \`if not ok or type(data) ~= "table" or type(data.salary) ~= "number" then return 0 end\`
hint: Scope bug: inside the if, remove the word \`local\` so it changes the outer total.
`,h=`---
id: closures
title: Functions II: varargs, multiple returns & closures
part: Intermediate Lua
minutes: 35
summary: Functions that take any number of values, give back several, and remember things. The tools behind every FiveM callback.
---
## Where we are

You can write functions with parameters and \`return\`. This lesson covers three ideas that make functions far more powerful, and that you'll meet in **every** FiveM resource: handlers that take any number of values, functions that return "ok or why not", and callbacks that remember the player they were made for.

## Multiple returns, properly

A function can return several values, separated by commas. The classic use is **"did it work, and if not, why?"**:

\`\`\`lua
local function buyCar(cash, price)
  if cash < price then
    return false, "Not enough money"
  end
  return true, cash - price
end

local ok, result = buyCar(500, 1000)
print(ok, result)            -- false   Not enough money
ok, result = buyCar(5000, 1000)
print(ok, result)            -- true    4000
\`\`\`

Rules worth knowing:

- Extra return values you don't catch are **dropped**: \`local ok = buyCar(500, 1000)\` just gets \`false\`.
- Missing ones become \`nil\`: \`local a, b, c = buyCar(5000, 1000)\` gives \`c = nil\`.
- Only the **last** call in a list keeps all its values:

\`\`\`lua
local function two() return 1, 2 end
print(two(), "end")    -- 1   end    (two() is not last, so it's cut to 1 value)
print("start", two())  -- start  1  2
\`\`\`

:::why Why "ok, reason" instead of just printing an error?
The function that *detects* a problem often isn't the one that should *tell the player*. \`buyCar\` doesn't know whether it's used by a chat command, a menu or an admin tool. Returning \`false, "Not enough money"\` lets the caller decide: show a notification, log it, or try something else.
:::

## Varargs: \`...\` means "any number of values"

Put \`...\` as the last parameter and the function accepts any number of extra values:

\`\`\`lua
local function log(level, ...)
  local parts = { ... }                          -- collect them into a list
  print("[" .. level .. "] " .. table.concat(parts, " "))
end

log("INFO", "Tina", "joined")
log("WARN", "Bob", "tried", "to", "buy", "-50", "water")
\`\`\`

Two tools for working with \`...\`:

\`\`\`lua
local function count(...)
  return select("#", ...)        -- how many values were passed (including nils!)
end
print(count(1, 2, 3), count(), count(nil, nil))

local function second(...)
  return (select(2, ...))        -- select(n, ...) gives values from n onwards; ( ) keeps only the first
end
print(second("a", "b", "c"))

local packed = table.pack(1, nil, 3)
print(packed.n, packed[1], packed[2], packed[3])  -- n is the true count: 3
\`\`\`

:::warn \`{...}\` loses trailing nils
\`#{ ... }\` can be wrong when some values are \`nil\` (holes!). If nils matter, use \`select("#", ...)\` or \`table.pack(...).n\`. In FiveM, event data from a client can absolutely contain \`nil\`s.
:::

You can pass \`...\` straight on to another function, which is how "wrapper" functions work:

\`\`\`lua
local function debugPrint(...)
  local DEBUG = true
  if DEBUG then print("[debug]", ...) end
end
debugPrint("cash is", 500, "and job is", "mechanic")
\`\`\`

## Closures: functions that remember

A function created **inside** another function can use the outer function's local variables, even **after** the outer function has finished. That's a **closure**:

\`\`\`lua
local function makeCounter()
  local count = 0                -- this local lives on inside the returned function
  return function()
    count = count + 1
    return count
  end
end

local robberies = makeCounter()
local arrests = makeCounter()
print(robberies(), robberies(), robberies())   -- 1 2 3
print(arrests())                               -- 1: a separate count!
\`\`\`

Every call to \`makeCounter()\` creates a **new** \`count\`, so each counter has its own private memory. Nobody else can touch \`count\`: there's no way to reach it except through the function. That's real privacy.

:::why Why is this so important in FiveM?
Every time you write \`RegisterCommand("x", function(...) ... end)\` or \`SetTimeout(1000, function() ... end)\`, you're making a closure. The function runs **later**, and it still remembers the local variables around it at the time you created it:

\`\`\`lua
local function remindLater(name, seconds)
  SetTimeout(seconds * 1000, function()
    print(name .. ", your parking ticket expires now!")   -- remembers name
  end)
end
remindLater("Tina", 2)
remindLater("Bob", 1)
\`\`\`
:::

## Closures in loops: each round gets its own copy

In Lua, the loop variable is a **fresh local every round**, so closures made in a loop each remember their own value:

\`\`\`lua
local announcements = {}
for i = 1, 3 do
  announcements[i] = function() print("Announcement number " .. i) end
end
announcements[1]()
announcements[3]()
\`\`\`

(If you ever learn JavaScript you'll find that's not true there with \`var\`, a famous bug. Lua gets it right.)

## A closure with a job: the cooldown

\`\`\`lua
local function makeCooldown(ms)
  local lastUse = -math.huge
  return function()
    local now = GetGameTimer()
    if now - lastUse < ms then return false end
    lastUse = now
    return true
  end
end

local canHonk = makeCooldown(1000)
CreateThread(function()
  for i = 1, 6 do
    print(("t=%d ms  honk allowed? %s"):format(GetGameTimer(), tostring(canHonk())))
    Wait(400)
  end
end)
\`\`\`

:::gta In your GTA server: \`source\` and closures
In a server event handler, \`source\` is a **global** that FiveM sets just before calling your handler. After a \`Wait\` (or a database query), another event may have run and changed it! That's why every good handler starts with \`local src = source\`: the local is captured safely, the global isn't.

\`\`\`lua norun
RegisterNetEvent("garage:takeOut", function(plate)
  local src = source              -- captured now, safe forever
  local car = MySQL.single.await("SELECT * FROM owned_vehicles WHERE plate = ?", { plate })
  -- 'source' could belong to someone else by now; 'src' still means the right player
  TriggerClientEvent("garage:spawn", src, car)
end)
\`\`\`
:::

:::do
- Return \`true, value\` / \`false, "reason"\` from functions that can fail for normal reasons.
- Use \`select("#", ...)\` when you need the true number of varargs.
- Use closures for private state: counters, cooldowns, per-player helpers.
:::

:::dont
- Don't print errors deep inside helper functions; return them and let the caller decide.
- Don't use \`#{...}\` when values might be nil.
- Don't rely on the global \`source\` after any \`Wait\`; copy it into a local first.
:::

=== QUIZ
? What does \`local a = f()\` get if \`f\` returns \`1, 2, 3\`?
+ 1 (the extra values are dropped)
- 3
- a list {1, 2, 3}
> Extra return values are dropped when there aren't enough variables to catch them.
? What does \`select("#", nil, nil)\` give?
- 0
+ 2
- nil
> select("#", ...) counts every value passed, including nils.
? Two counters are made with \`makeCounter()\`. Do they share the same \`count\`?
- Yes, there's only one count
+ No, each call to makeCounter creates a new count
> Each call runs \`local count = 0\` again, so each returned function has its own.
? Why write \`local src = source\` at the start of a server event handler?
- It's faster
+ The global \`source\` can change after a Wait; the local keeps the right player
- Lua requires it
> Closures capture locals. The global source is only reliable until the handler first pauses.

=== EXERCISE
title: Tools for the police station
Write three functions:

1. \`sumFines(...)\` adds up **all** the numbers passed to it and **ignores** anything that isn't a number (text, nil). \`sumFines(100, "oops", 250, nil, 50)\` returns \`400\`. Use \`select("#", ...)\` so nils in the middle don't stop you.
2. \`minMax(list)\` returns **two values**: the smallest and the largest number in a list. For an empty list return \`nil, nil\`.
3. \`makeCaseNumbers(prefix)\` returns a function. Each time you call **that** function it returns the next case number as text: \`"LSPD-1"\`, \`"LSPD-2"\`, ... Each maker has its **own** count.

\`\`\`lua starter
local function sumFines(...)
  local total = 0
  -- loop over every value
  return total
end

local function minMax(list)
  return nil, nil
end

local function makeCaseNumbers(prefix)
  -- return a function that remembers its own count
end
\`\`\`

\`\`\`lua solution
local function sumFines(...)
  local total = 0
  for i = 1, select("#", ...) do
    local v = select(i, ...)
    if type(v) == "number" then total = total + v end
  end
  return total
end

local function minMax(list)
  if #list == 0 then return nil, nil end
  local lo, hi = list[1], list[1]
  for _, v in ipairs(list) do
    if v < lo then lo = v end
    if v > hi then hi = v end
  end
  return lo, hi
end

local function makeCaseNumbers(prefix)
  local count = 0
  return function()
    count = count + 1
    return prefix .. "-" .. count
  end
end
\`\`\`

\`\`\`lua test
__check(type(sumFines) == "function" and sumFines(100, "oops", 250, nil, 50) == 400, 'sumFines(100, "oops", 250, nil, 50) should be 400 (got ' .. tostring(type(sumFines) == "function" and sumFines(100, "oops", 250, nil, 50)) .. ')')
__check(sumFines() == 0, 'sumFines() with nothing should be 0')
__check(sumFines(nil, nil, 10) == 10, 'sumFines(nil, nil, 10) should be 10 (nils at the start must not stop the loop)')
local lo, hi = minMax({ 40, 7, 99, 12 })
__check(lo == 7 and hi == 99, 'minMax({40, 7, 99, 12}) should return 7, 99 (got ' .. tostring(lo) .. ', ' .. tostring(hi) .. ')')
local a, b = minMax({})
__check(a == nil and b == nil, 'minMax({}) should return nil, nil')
local lspd, ems = makeCaseNumbers("LSPD"), makeCaseNumbers("EMS")
__check(type(lspd) == "function", 'makeCaseNumbers("LSPD") must return a function')
if type(lspd) == "function" and type(ems) == "function" then
  local x1, x2 = lspd(), lspd()
  local e1 = ems()
  local x3 = lspd()
  __check(x1 == "LSPD-1" and x2 == "LSPD-2" and x3 == "LSPD-3", 'Calling the LSPD function 3 times gives LSPD-1, LSPD-2, LSPD-3')
  __check(e1 == "EMS-1", 'A second maker has its own count: EMS-1')
end
\`\`\`

match: select\\s*\\(\\s*["']#["'] :: Use select("#", ...) in sumFines
hint: \`for i = 1, select("#", ...) do local v = select(i, ...) ... end\`
hint: minMax: start \`lo\` and \`hi\` at \`list[1]\` and compare every value.
hint: makeCaseNumbers: \`local count = 0\` then \`return function() count = count + 1 return prefix .. "-" .. count end\`
`,g=`---
id: error-handling
title: Error handling in depth
part: Intermediate Lua
minutes: 35
summary: When to throw errors vs return "false, reason", error levels, xpcall tracebacks, and keeping data safe when something fails halfway.
---
## Two kinds of "something went wrong"

In the *Scope & errors* lesson you met \`error\`, \`assert\` and \`pcall\`. Now the real question: **when** should you use which? It depends on what kind of problem it is.

| Kind | Example | What to do |
|---|---|---|
| **Expected failure** (normal life) | not enough money, item sold out, player too far away | \`return false, "reason"\` |
| **Bug / impossible state** | a function called with no player ID, config missing a required value | \`error("...")\` so it's loud and gets fixed |

:::why Why not just \`error\` everywhere?
An error **stops** the function and everything that called it. "Not enough money" happens to honest players a hundred times a day; it's not a crash, it's an answer. If you use \`error\` for it, every caller has to wrap you in \`pcall\` and your console fills with scary red text for normal events. Errors are for things that should **never** happen if the code is right.
:::

\`\`\`lua
-- expected failure: return it
local function withdraw(account, amount)
  if account.balance < amount then
    return false, "Insufficient funds"
  end
  account.balance = account.balance - amount
  return true
end

-- bug: shout about it
local function payJob(jobName)
  local pay = ({ mechanic = 300, police = 450 })[jobName]
  if not pay then error("payJob: unknown job '" .. tostring(jobName) .. "'") end
  return pay
end

local acc = { balance = 100 }
print(withdraw(acc, 500))
print(payJob("police"))
print(pcall(payJob, "astronaut"))
\`\`\`

## Error levels: blame the right line

\`error(message, level)\` decides which line is blamed. Level \`1\` (the default) blames the line with \`error\`. Level \`2\` blames **the caller**, the line that called your function with bad values. That's much more useful for helpers:

\`\`\`lua error
local function setFuel(vehicle, litres)
  if type(litres) ~= "number" then
    error("setFuel: litres must be a number, got " .. type(litres), 2)
  end
  vehicle.fuel = litres
end

local car = {}
setFuel(car, 50)       -- fine
setFuel(car, "full")   -- the error points HERE (line 10), where the mistake really is
\`\`\`

## Errors can carry tables

\`error\` can throw any value, not just text. A table lets the code that catches it see **what** went wrong without reading text:

\`\`\`lua
local function loadGarage(id)
  if id > 10 then error({ code = "NOT_FOUND", id = id }) end
  return { id = id, slots = 5 }
end

local ok, err = pcall(loadGarage, 42)
if not ok and type(err) == "table" and err.code == "NOT_FOUND" then
  print("No garage with id " .. err.id)
end
\`\`\`

## \`xpcall\`: catch it AND see where it came from

\`pcall\` gives you the message. \`xpcall(fn, handler)\` also lets a handler run **at the moment of the error**, before the information about where it happened is lost. With \`debug.traceback\` you get the full chain of calls:

\`\`\`lua
local function inner()
  local t = nil
  local x = t.x          -- line 3: the actual crash
  return x
end
local function middle()
  local result = inner() -- line 7: middle called inner
  return result
end

local ok, trace = xpcall(middle, debug.traceback)
print(ok)
print(trace)
\`\`\`

The *stack traceback* reads bottom to top: who called whom, ending at the line that broke. In big scripts this is how you find out **which** of fifty callers sent the bad value.

## The most important idea: check first, change last

Imagine a car purchase: take the money, then give the car. If giving the car **errors** after the money is taken, the player has paid for nothing. FiveM catches errors per handler (the server keeps running), but it can't undo *half* of your work.

\`\`\`lua bad
local cash = { [1] = 50000 }
local cars = { [1] = {} }
local function giveCar(src, model)
  if model == "tank" then error("no such dealership model") end
  table.insert(cars[src], model)
end

local function buy(src, model, price)
  cash[src] = cash[src] - price      -- changed first...
  giveCar(src, model)                -- ...then this errors
end

print(pcall(buy, 1, "tank", 20000))
print("Cash left:", cash[1], "Cars:", #cars[1])   -- paid 20000, got nothing!
\`\`\`

Two fixes, use both:

1. **Validate everything before changing anything.** All the checks first, all the changes at the end, where nothing can fail any more.
2. If a risky step can still fail (saving to a database, another resource), wrap it in \`pcall\` and **undo** your changes if it fails.

\`\`\`lua good
local cash = { [1] = 50000 }
local cars = { [1] = {} }
local DEALERSHIP = { adder = true, sultan = true }

local function buy(src, model, price)
  if not DEALERSHIP[model] then return false, "Unknown model" end      -- check
  if cash[src] < price then return false, "Not enough money" end       -- check
  cash[src] = cash[src] - price                                       -- change
  local ok, err = pcall(table.insert, cars[src], model)
  if not ok then
    cash[src] = cash[src] + price                                     -- undo!
    return false, "Something went wrong, you were refunded"
  end
  return true
end

print(buy(1, "tank", 20000))
print(buy(1, "adder", 20000))
print("Cash left:", cash[1], "Cars:", #cars[1])
\`\`\`

## \`assert\`: quick checks for programmers

\`assert(value, message)\` errors if \`value\` is \`nil\`/\`false\`, otherwise returns it. Great for things that must exist when your resource starts:

\`\`\`lua
local Config = { Salary = 250 }
local salary = assert(Config.Salary, "Config.Salary is missing in config.lua")
print("Salary is", salary)
\`\`\`

:::dont
- Don't use \`assert\` or \`error\` on **player input**. A player typing \`/pay abc\` is normal; answer with a friendly message, don't crash the handler.
- Don't wrap *everything* in \`pcall\` "just in case". It hides real bugs. Use it around risky outside things (decoding saved data, other resources, databases).
- Don't ignore the second value of \`pcall\`; at least \`print\` it so you know what failed.
:::

:::do
- Return \`false, "reason"\` for normal failures; \`error\` for bugs.
- Use \`error(msg, 2)\` in helpers so the blame lands on the caller.
- Do all checks first, all changes last. Undo if a late step fails.
:::

:::gta In your GTA server
A server error appears as \`SCRIPT ERROR: @resource/file.lua:LINE: message\` followed by a traceback, in the server console. The resource keeps running, but **that** handler stopped halfway, so anything it already changed stays changed. That's exactly how money "disappears" or "duplicates" on badly written servers. Check first, change last.
:::

=== QUIZ
? A player tries to buy a car they can't afford. What should \`buyCar\` do?
- \`error("not enough money")\`
+ \`return false, "Not enough money"\`
- Crash the resource so an admin notices
> It's a normal situation, not a bug. Return a reason so the caller can tell the player nicely.
? What does level \`2\` in \`error("bad value", 2)\` do?
+ Blames the line that called the function, not the line with error
- Makes the error twice as serious
- Prints the error twice
> Level 2 points at the caller, which is usually where the mistake was made.
? Why use \`xpcall(fn, debug.traceback)\` instead of \`pcall(fn)\`?
- It's faster
+ You also get the chain of function calls that led to the error
- It stops errors from happening
> The traceback shows who called whom, which is how you find where a bad value came from.
? A handler takes the player's money, then errors before giving the item. What's the best prevention?
- Wrap the whole server in pcall
+ Do all checks first and change data only at the end; undo if a late step fails
- Give the item first, always
> Errors stop the handler halfway. Order your code so nothing can fail after you've started changing data.

=== EXERCISE
title: A transfer that can't lose money
Write \`transfer(accounts, from, to, amount)\` for a bank. It must **never error** and **never lose money**:

1. Return \`false, "invalid amount"\` if \`amount\` isn't a number, is less than 1, or isn't whole.
2. Return \`false, "unknown account"\` if \`accounts[from]\` or \`accounts[to]\` doesn't exist.
3. Return \`false, "insufficient funds"\` if \`from\` doesn't have enough.
4. Move the money, then call \`saveAccounts(accounts)\` inside **\`pcall\`**. If saving fails, **undo** the move and return \`false, "save failed"\`.
5. Otherwise return \`true\`.

\`saveAccounts\` is provided and fails whenever \`SAVE_BROKEN\` is true (the checker switches it on).

\`\`\`lua preamble
SAVE_BROKEN = false
function saveAccounts(acc)
  if SAVE_BROKEN then error("database is offline") end
end
\`\`\`

\`\`\`lua starter
local accounts = { tina = 1000, bob = 50 }

local function transfer(accounts, from, to, amount)
  accounts[from] = accounts[from] - amount
  accounts[to] = accounts[to] + amount
  saveAccounts(accounts)
  return true
end
\`\`\`

\`\`\`lua solution
local accounts = { tina = 1000, bob = 50 }

local function transfer(accounts, from, to, amount)
  if type(amount) ~= "number" or amount < 1 or amount ~= math.floor(amount) then
    return false, "invalid amount"
  end
  if not accounts[from] or not accounts[to] then return false, "unknown account" end
  if accounts[from] < amount then return false, "insufficient funds" end

  accounts[from] = accounts[from] - amount
  accounts[to] = accounts[to] + amount
  local ok = pcall(saveAccounts, accounts)
  if not ok then
    accounts[from] = accounts[from] + amount
    accounts[to] = accounts[to] - amount
    return false, "save failed"
  end
  return true
end
\`\`\`

\`\`\`lua test
local function try(...) local r = table.pack(pcall(transfer, ...)) return r end
local acc = { tina = 1000, bob = 50 }
local r = try(acc, "tina", "bob", 200)
__check(r[1] and r[2] == true and acc.tina == 800 and acc.bob == 250, 'A normal transfer of 200 should return true and move the money (tina 800, bob 250)')
r = try(acc, "tina", "bob", -5)
__check(r[1] and r[2] == false and r[3] == "invalid amount" and acc.tina == 800, 'Negative amounts: return false, "invalid amount"')
r = try(acc, "tina", "bob", "100")
__check(r[1] and r[2] == false and r[3] == "invalid amount", 'Text amounts like "100": return false, "invalid amount" (and do not error)')
r = try(acc, "tina", "bob", 2.5)
__check(r[1] and r[2] == false and r[3] == "invalid amount", 'Fractions: return false, "invalid amount"')
r = try(acc, "tina", "ghost", 10)
__check(r[1] and r[2] == false and r[3] == "unknown account" and acc.tina == 800, 'Unknown account: return false, "unknown account" without changing anything')
r = try(acc, "bob", "tina", 1000)
__check(r[1] and r[2] == false and r[3] == "insufficient funds" and acc.bob == 250, 'Not enough money: return false, "insufficient funds"')
SAVE_BROKEN = true
r = try(acc, "tina", "bob", 100)
__check(r[1], 'When saving fails, transfer must NOT error (use pcall around saveAccounts)')
__check(r[2] == false and r[3] == "save failed", 'When saving fails, return false, "save failed"')
__check(acc.tina == 800 and acc.bob == 250, 'When saving fails, undo the move (tina back to 800, bob back to 250; got ' .. tostring(acc.tina) .. ', ' .. tostring(acc.bob) .. ')')
SAVE_BROKEN = false
\`\`\`

match: pcall :: Call saveAccounts inside pcall
hint: Do the three checks first, each with its own \`return false, "..."\`.
hint: \`local ok = pcall(saveAccounts, accounts)\` (no brackets after saveAccounts: you pass the function and its argument separately).
hint: If not ok, reverse both changes: add the amount back to \`from\` and take it off \`to\`.
`,_=`---
id: metatables
title: Metatables: giving tables superpowers
part: Intermediate Lua
minutes: 30
summary: What a metatable is, default values with __index, guarding writes with __newindex, nice printing with __tostring, and why vector3 maths works.
---
## The idea in one sentence

A **metatable** is a second table that tells Lua how a table should behave in special situations: when you read a key that doesn't exist, when you write to it, when you \`print\` it, when you use \`+\` on it.

You've already used one without knowing: \`vector3(1, 2, 3) + vector3(1, 1, 1)\` works because vectors have a metatable that says what \`+\` means. This lesson shows you how that works so the magic stops being magic.

:::why Why learn this as a beginner?
You won't write metatables every day. But you'll **read** them in frameworks and libraries (QBCore, ox_lib, ESX all use them), and two patterns (*defaults* and *classes*, next lesson) are genuinely useful. Knowing them means fewer "how on earth does this work?" moments.
:::

## \`setmetatable\` and the special keys

\`setmetatable(t, mt)\` attaches \`mt\` to \`t\` and returns \`t\`. Inside \`mt\`, keys starting with two underscores (\`__index\`, \`__tostring\`, ...) are the special behaviours, called **metamethods**.

## \`__index\`: what to do when a key is missing

Normally reading a missing key gives \`nil\`. With \`__index\` set to another table, Lua looks there **instead**:

\`\`\`lua
local DEFAULTS = { fuel = 100, colour = "black", locked = true }
local myCar = setmetatable({ colour = "pink" }, { __index = DEFAULTS })

print(myCar.colour)   -- pink   (myCar has it)
print(myCar.fuel)     -- 100    (missing → looked up in DEFAULTS)
print(myCar.locked)   -- true
print(rawget(myCar, "fuel"))   -- nil: rawget skips the metatable, it really isn't in myCar
\`\`\`

:::tip Why this beats copying
Every car shares **one** \`DEFAULTS\` table, and only stores what's different. Change \`DEFAULTS.fuel = 50\` and every car without its own fuel value sees 50 at once. That's also exactly how classes will work in the next lesson.
:::

\`__index\` can also be a **function** \`(t, key)\` that calculates the missing value:

\`\`\`lua
local prices = setmetatable({ water = 2 }, {
  __index = function(t, item)
    print("(no price for " .. item .. ", using 0)")
    return 0
  end,
})
print(prices.water, prices.unicorn)
\`\`\`

## \`__newindex\`: what to do when someone adds a key

\`__newindex\` runs when you assign to a key that **doesn't exist yet**. Use it to protect or watch a table:

\`\`\`lua error
local function readOnly(t)
  return setmetatable({}, {
    __index = t,
    __newindex = function(_, key)
      error("Config is read-only (tried to change '" .. tostring(key) .. "')", 2)
    end,
  })
end

local Config = readOnly({ MaxSpeed = 120, Salary = 250 })
print(Config.Salary)    -- reading works
Config.Salary = 99999   -- writing errors, on THIS line
\`\`\`

Notice the trick: the returned table is **empty**, so every write is a "new key" and triggers \`__newindex\`, while reads fall through to the real table via \`__index\`. (\`rawset(t, k, v)\` would bypass it, so it's a seatbelt against mistakes, not real security.)

## \`__tostring\`: print it nicely

\`\`\`lua
local plateMeta = { __tostring = function(p) return "[" .. p.text .. "]" end }
local plate = setmetatable({ text = "TINA 01" }, plateMeta)
print(plate)                          -- [TINA 01] instead of table: 0x55...
print("Plate: " .. tostring(plate))
\`\`\`

## Maths and comparison: \`__add\`, \`__eq\`, \`__lt\`, ...

You can define what operators mean. This is how FiveM's \`vector3\` works:

\`\`\`lua
local Money = {}
Money.__index = Money
Money.__add = function(a, b) return setmetatable({ cents = a.cents + b.cents }, Money) end
Money.__eq = function(a, b) return a.cents == b.cents end
Money.__lt = function(a, b) return a.cents < b.cents end
Money.__tostring = function(m) return ("$%.2f"):format(m.cents / 100) end

local function money(dollars) return setmetatable({ cents = math.floor(dollars * 100 + 0.5) }, Money) end

local total = money(1.10) + money(2.20)
print(total, total == money(3.30), money(1) < money(2))
\`\`\`

(Storing money as whole **cents** avoids \`0.1 + 0.2 = 0.30000000000000004\` surprises.)

And here's the real thing in the practice world:

\`\`\`lua
local a = vector3(10.0, 0.0, 0.0)
local b = vector3(13.0, 4.0, 0.0)
print(a + b, b - a, #(b - a))   -- #(b - a) uses __len: the distance, 5.0
\`\`\`

:::dont
- Don't use metatables to be clever. If a plain table and a function would do, use those: they're easier to debug.
- Don't forget that \`__index\` hides missing keys. A typo like \`car.feul\` might quietly return a default instead of \`nil\`.
- Don't use \`__newindex\` as "security" against cheaters; it only guards against your own mistakes.
:::

:::do
- Use \`__index\` for defaults and (next lesson) classes.
- Use \`__tostring\` on your own objects so \`print\` and logs show something useful.
- Use \`rawget\`/\`rawset\` when you need to see what's *really* in the table.
:::

:::gta In your GTA server
- \`vector3\`/\`vector4\` maths (\`+\`, \`-\`, \`*\`, \`#\`) is metatables.
- \`exports.some_resource:Fn()\` works because \`exports\` has an \`__index\` that finds the resource for you.
- State bags (\`Player(src).state.job\`) use metatables to fetch and send values behind the scenes.
:::

=== QUIZ
? \`local car = setmetatable({}, { __index = { fuel = 100 } })\`. What is \`car.fuel\`?
- nil
+ 100
- an error
> car has no fuel key, so Lua looks in the __index table and finds 100.
? When does \`__newindex\` run?
- Every time you read a key
+ When you assign to a key that doesn't exist in the table yet
- When the table is printed
> Writes to existing keys go straight in. Only new keys trigger __newindex.
? Why does \`#(b - a)\` give a distance for vectors?
+ The vector metatable defines \`__sub\` for minus and \`__len\` for #
- Lua knows about vectors natively
- # always measures distance
> Vectors are tables with metamethods for maths, length and printing.
? What does \`rawget(t, key)\` do?
- Gets the key from the metatable
+ Gets the key from t itself, ignoring __index
- Deletes the key
> raw functions skip metamethods, so you see what's really stored.

=== EXERCISE
title: Vehicle settings with defaults
1. Write \`withDefaults(settings, defaults)\` that returns \`settings\` with a metatable so that **missing** keys come from \`defaults\` (use \`__index\`).
2. Write \`locked(t)\` that returns a **read-only** view of \`t\`: reading works, but any assignment **errors** with a message containing \`read-only\`.
3. Give \`withDefaults\` results a \`__tostring\` that returns \`"Vehicle(<model>)"\`, using the model (which may come from the defaults).

\`\`\`lua starter
local DEFAULTS = { model = "blista", fuel = 100, colour = "white" }

local function withDefaults(settings, defaults)
  return settings
end

local function locked(t)
  return t
end
\`\`\`

\`\`\`lua solution
local DEFAULTS = { model = "blista", fuel = 100, colour = "white" }

local function withDefaults(settings, defaults)
  return setmetatable(settings, {
    __index = defaults,
    __tostring = function(v) return "Vehicle(" .. v.model .. ")" end,
  })
end

local function locked(t)
  return setmetatable({}, {
    __index = t,
    __newindex = function(_, k) error("this table is read-only (" .. tostring(k) .. ")", 2) end,
  })
end
\`\`\`

\`\`\`lua test
local car = withDefaults({ colour = "pink" }, DEFAULTS)
__check(car.colour == "pink", 'Own values win: car.colour should be "pink"')
__check(car.fuel == 100 and car.model == "blista", 'Missing values come from the defaults: fuel 100, model "blista"')
__check(rawget(car, "fuel") == nil, 'Do not copy the defaults in: use a metatable with __index')
__check(tostring(car) == "Vehicle(blista)", 'tostring(car) should be "Vehicle(blista)" (got ' .. tostring(car) .. ')')
__check(tostring(withDefaults({ model = "adder" }, DEFAULTS)) == "Vehicle(adder)", 'tostring uses the car\\'s own model when it has one: "Vehicle(adder)"')
local cfg = locked({ Salary = 250 })
__check(cfg.Salary == 250, 'locked(t): reading still works (cfg.Salary == 250)')
local ok, err = pcall(function() cfg.Salary = 9999 end)
__check(not ok and tostring(err):find("read%-only") ~= nil, 'locked(t): writing must error with a message containing "read-only"')
__check(cfg.Salary == 250, 'locked(t): the value must not change after a failed write')
local ok2 = pcall(function() cfg.NewKey = 1 end)
__check(not ok2, 'locked(t): adding a brand new key must also error')
\`\`\`

match: setmetatable :: Use setmetatable
match: __index :: Use __index for the defaults
match: __newindex :: Use __newindex to block writes
hint: \`return setmetatable(settings, { __index = defaults, __tostring = function(v) ... end })\`
hint: For locked: return an **empty** table whose metatable has \`__index = t\` and a \`__newindex\` function that calls \`error(...)\`.
`,v=`---
id: oop
title: Objects & classes (OOP-style Lua)
part: Intermediate Lua
minutes: 35
summary: The colon and self, building a class with a metatable, constructors, methods, a little inheritance, and how frameworks use objects.
---
## Why objects?

Your server has many **similar things**: vehicles, shops, bank accounts, players. Each has its **own data** (this car's plate and fuel) but they all share the **same behaviour** (refuel, lock, describe). An *object* bundles data and behaviour together; a *class* is the blueprint for making many objects of the same kind.

Lua has no \`class\` keyword. Instead you build classes from things you already know: tables, functions and the \`__index\` metatable from the last lesson.

## The colon and \`self\`

First, a small piece of syntax. These two lines are **exactly the same**:

\`\`\`lua
local car = { fuel = 20 }
function car.refuel(self, litres) self.fuel = self.fuel + litres end

car.refuel(car, 30)   -- dot: you pass the car yourself
car:refuel(10)        -- colon: Lua passes car as 'self' for you
print(car.fuel)       -- 60
\`\`\`

And when **defining**, \`function car:refuel(litres)\` is shorthand for \`function car.refuel(self, litres)\`. The colon adds a hidden first parameter called \`self\`: "the object this was called on".

:::warn The #1 OOP error
Calling a colon-method with a dot: \`car.refuel(10)\`. Now \`self\` is \`10\` and \`litres\` is \`nil\`, giving \`attempt to index a number value (local 'self')\`. If you see an error mentioning \`self\`, check **dot vs colon** first.
:::

## Building a class, step by step

\`\`\`lua
local Vehicle = {}
Vehicle.__index = Vehicle          -- 1. objects look up missing keys (methods) in Vehicle

function Vehicle.new(model, plate) -- 2. the constructor: makes a new object
  local self = setmetatable({}, Vehicle)
  self.model = model               -- 3. per-object data lives in the object
  self.plate = plate
  self.fuel = 100
  return self
end

function Vehicle:drive(km)         -- 4. methods live in the class, shared by all
  self.fuel = math.max(0, self.fuel - km * 2)
end

function Vehicle:describe()
  return ("%s [%s] fuel %d%%"):format(self.model, self.plate, self.fuel)
end

local a = Vehicle.new("adder", "TINA 01")
local b = Vehicle.new("faggio", "BOB 007")
a:drive(10)
print(a:describe())
print(b:describe())
\`\`\`

How it works: \`a\` only contains \`model\`, \`plate\` and \`fuel\`. When you call \`a:drive(10)\`, Lua looks for \`a.drive\`, doesn't find it, and follows \`__index\` to \`Vehicle\`, where it is. Two objects, one copy of the methods.

:::why Why \`Vehicle.new\` with a dot but \`a:drive\` with a colon?
\`new\` is called on the **class** to make an object; there's no object yet, so no \`self\` to pass. \`drive\` is called on an **object**, so it needs \`self\`. Convention: constructors use a dot, methods use a colon.
:::

:::dont Don't put per-object data in the class
\`\`\`lua bad
local Shop = { stock = {} }        -- ONE stock table...
Shop.__index = Shop
function Shop.new() return setmetatable({}, Shop) end
local s1, s2 = Shop.new(), Shop.new()
table.insert(s1.stock, "water")    -- s1.stock is found via __index: it's Shop.stock!
print(#s2.stock)                   -- 1: s2 got water too. Every shop shares one stock.
\`\`\`
Always create tables like \`stock\` **inside** \`new\`: \`self.stock = {}\`.
:::

## Inheritance (a little)

A class can borrow another class's methods by pointing its own metatable at it:

\`\`\`lua
local Vehicle = {}
Vehicle.__index = Vehicle
function Vehicle.new(model) return setmetatable({ model = model, fuel = 100 }, Vehicle) end
function Vehicle:describe() return self.model .. " (fuel " .. self.fuel .. ")" end

local PoliceCar = setmetatable({}, { __index = Vehicle })  -- missing methods → Vehicle
PoliceCar.__index = PoliceCar
function PoliceCar.new(model, unit)
  local self = Vehicle.new(model)
  self.unit = unit
  return setmetatable(self, PoliceCar)
end
function PoliceCar:siren() return "Unit " .. self.unit .. ": WEE-WOO" end

local cop = PoliceCar.new("police", "1-ADAM-12")
print(cop:describe())   -- inherited from Vehicle
print(cop:siren())      -- its own
\`\`\`

Keep inheritance shallow (one level). Deep chains of classes are hard to follow; often a plain table field (\`car.siren = true\`) is simpler.

:::do
- Use classes when you have **many** things of the same kind with their own data.
- Constructors with a dot (\`Thing.new\`), methods with a colon (\`thing:method()\`).
- Create every per-object table inside the constructor.
- Add \`__tostring\` to your class for readable logs.
:::

:::gta In your GTA server
Frameworks hand you player objects. Which syntax they use depends on how they were written, so **always check their docs**:

- ESX: \`local xPlayer = ESX.GetPlayerFromId(src)\` then \`xPlayer.getMoney()\`, \`xPlayer.addMoney(100)\` (dot: these are closures that already know the player).
- QBCore: \`local Player = QBCore.Functions.GetPlayer(src)\` then \`Player.Functions.AddMoney("cash", 100)\`.
- ox_lib / many modern resources: colon methods like \`vehicle:setFuel(50)\`.

Using a colon where a dot is expected (or the other way round) is one of the most common framework errors.
:::

=== QUIZ
? \`function car:honk() ... end\` is shorthand for what?
+ \`function car.honk(self) ... end\`
- \`function honk(car) ... end\`
- \`car.honk = nil\`
> The colon adds a hidden first parameter named self.
? Where should methods like \`drive\` live?
- Copied into every object
+ In the class table, found through \`__index\`
- In a global variable
> One shared copy in the class; each object finds it through its metatable.
? An error says \`attempt to index a number value (local 'self')\`. What's the likely cause?
+ A colon-method was called with a dot, so self got the wrong value
- The object has no metatable
- self is a reserved word
> obj.method(10) passes 10 as self. Use obj:method(10).
? Why is \`local Shop = { stock = {} }\` as a class a bug?
- Tables can't be inside classes
+ All shops share that one stock table through \`__index\`
- It makes the shop read-only
> Create per-object tables inside the constructor: self.stock = {}.

=== EXERCISE
title: A bank account class
Build an \`Account\` class:

1. \`Account.new(owner, balance)\` creates an account (\`balance\` defaults to \`0\` if not given). Each account has its **own** \`history\` list.
2. \`account:deposit(amount)\` adds money and inserts \`"+<amount>"\` into \`history\`. Returns the new balance.
3. \`account:withdraw(amount)\` returns \`false, "insufficient funds"\` if there isn't enough; otherwise subtracts, inserts \`"-<amount>"\` into \`history\`, and returns \`true\`.
4. \`tostring(account)\` gives \`"Tina: $500"\` (use \`__tostring\` in the class).

\`\`\`lua starter
local Account = {}

function Account.new(owner, balance)
  return { owner = owner, balance = balance }
end
\`\`\`

\`\`\`lua solution
local Account = {}
Account.__index = Account
Account.__tostring = function(a) return a.owner .. ": $" .. a.balance end

function Account.new(owner, balance)
  local self = setmetatable({}, Account)
  self.owner = owner
  self.balance = balance or 0
  self.history = {}
  return self
end

function Account:deposit(amount)
  self.balance = self.balance + amount
  table.insert(self.history, "+" .. amount)
  return self.balance
end

function Account:withdraw(amount)
  if self.balance < amount then return false, "insufficient funds" end
  self.balance = self.balance - amount
  table.insert(self.history, "-" .. amount)
  return true
end
\`\`\`

\`\`\`lua test
local t = Account.new("Tina", 500)
local b = Account.new("Bob")
__check(type(t) == "table" and t.balance == 500 and t.owner == "Tina", 'Account.new("Tina", 500) makes an account with owner "Tina" and balance 500')
__check(type(b) == "table" and b.balance == 0, 'Account.new("Bob") with no balance should start at 0')
__check(type(t.deposit) == "function" and type(t.withdraw) == "function", 'Accounts need deposit and withdraw methods (put them in Account and set Account.__index = Account)')
__check(rawget(t, "deposit") == nil, 'Methods should live in the class, not be copied into each account')
if type(t.deposit) == "function" and type(t.withdraw) == "function" then
  __check(t:deposit(250) == 750, 't:deposit(250) should return the new balance 750')
  local ok, why = b:withdraw(10)
  __check(ok == false and why == "insufficient funds" and b.balance == 0, 'b:withdraw(10) with $0 should return false, "insufficient funds" and change nothing')
  __check(t:withdraw(100) == true and t.balance == 650, 't:withdraw(100) should return true and leave 650')
  __check(type(t.history) == "table" and t.history[1] == "+250" and t.history[2] == "-100", 'Tina\\'s history should be { "+250", "-100" }')
  __check(type(b.history) == "table" and #b.history == 0, 'Bob\\'s history must be his own (still empty). Create history inside new!')
  __check(tostring(t) == "Tina: $650", 'tostring(account) should be "Tina: $650" (got ' .. tostring(t) .. ')')
end
\`\`\`

match: setmetatable :: Use setmetatable in the constructor
match: Account\\.__index\\s*=\\s*Account :: Set Account.__index = Account so objects find the methods
hint: Start with \`Account.__index = Account\` and in \`new\`: \`local self = setmetatable({}, Account)\`.
hint: \`self.balance = balance or 0\` handles the missing balance. \`self.history = {}\` gives each account its own list.
hint: Methods: \`function Account:deposit(amount) ... end\`. The \`__tostring\` goes on \`Account\` too, because Account is the metatable.
`,y=`---
id: modules
title: Modules: organising code into pieces
part: Intermediate Lua
minutes: 30
summary: Splitting a script into modules, the module table pattern, private vs public functions, require vs FiveM's file loading, and keeping globals under control.
---
## The problem with one giant file

A real resource grows: a garage has spawning, saving, menus, permissions, config. One 2000-line file means scrolling forever, names clashing (\`open\` the menu or \`open\` the door?), and every change risking something unrelated.

The fix is **modules**: group related code behind **one name**, and hide the helper details inside.

## The module table pattern

A module is just a table holding functions (and maybe data). Everything else stays \`local\`, so it's private:

\`\`\`lua
local Garage = {}                 -- the module: the only public name

local MAX_SLOTS = 5               -- private: only code in this file sees it
local stored = {}

local function isFull(owner)      -- private helper
  return #(stored[owner] or {}) >= MAX_SLOTS
end

function Garage.store(owner, plate)   -- public: part of the module
  if isFull(owner) then return false, "Garage full" end
  stored[owner] = stored[owner] or {}
  table.insert(stored[owner], plate)
  return true
end

function Garage.list(owner)
  return stored[owner] or {}
end

print(Garage.store("tina", "TINA 01"))
print(table.concat(Garage.list("tina"), ", "))
print(Garage.isFull)              -- nil: the helper is private
\`\`\`

:::why Why hide things?
If \`stored\` were public, any other code could do \`Garage.stored = nil\` and break everything, or bypass the 5-slot limit. When the only way in is \`Garage.store\`, the rules are always enforced and you can rewrite the inside later without breaking anyone who uses the module. Small public surface, big private inside.
:::

## Standard Lua: \`require\` and \`return\`

In normal Lua, each module is its own file that **returns** its table, and other files load it with \`require\`:

\`\`\`lua norun
-- garage.lua
local Garage = {}
function Garage.store(owner, plate) ... end
return Garage

-- main.lua
local Garage = require("garage")
Garage.store("tina", "TINA 01")
\`\`\`

\`require\` runs the file once, remembers the returned table, and gives the same table to everyone who requires it again.

You can imitate a file with a function that builds and returns the module. It's the same idea in one place, and you'll see it in single-file scripts:

\`\`\`lua
local Fuel = (function()
  local M = {}
  local prices = { petrol = 1.5, diesel = 1.3 }   -- private
  function M.cost(kind, litres) return (prices[kind] or 0) * litres end
  return M
end)()

print(Fuel.cost("petrol", 40))
\`\`\`

## How it works in FiveM

FiveM does it differently, and it trips people up:

- Every file listed in \`fxmanifest.lua\` for one side (say \`client_scripts\`) is loaded **in that order** into the **same environment** for that resource. A **global** made in \`client/utils.lua\` is visible in \`client/main.lua\`. A **local** is not.
- Each **resource** has its own separate environment. Globals never leak between resources; to share between resources you use **exports** (a later lesson).
- Plain \`require\` isn't available for your resource files by default (libraries like **ox_lib** add a \`require\` that works).

So the FiveM habit is: **one global table per module**, everything else local:

\`\`\`lua norun
-- client/garage.lua   (listed before client/main.lua in the manifest)
Garage = {}                       -- the one deliberate global
local function helper() end       -- private to this file
function Garage.open() helper() end

-- client/main.lua
Garage.open()                     -- works: same resource, same side, loaded after
\`\`\`

:::warn Load order matters
If \`client/main.lua\` is listed **before** \`client/garage.lua\`, then \`Garage\` is still \`nil\` when main.lua runs its top-level code: \`attempt to index a nil value (global 'Garage')\`. Shared things (config, utils) go first in the manifest. (Code inside functions and threads that runs *later* is fine.)
:::

## Keep globals few and named clearly

Every global is visible to every file of that side in the resource. Two files both using a global \`data\` or \`open\` will silently overwrite each other. The practice world shows you which globals your code created; aim for **one per module**.

:::do
- Make one table per area of your script (\`Garage\`, \`Shop\`, \`Utils\`) and put its functions in it.
- Keep helpers and state \`local\` to the file.
- In FiveM, list shared/config/util files before the files that use them.
:::

:::dont
- Don't make loose global functions like \`function open()\`; make them \`local\` or put them in your module table.
- Don't rely on \`require\` in FiveM unless you've added a library that provides it.
- Don't reach into another module's private data; add a function to the module instead.
:::

:::gta In your GTA server
A typical tidy resource:

\`\`\`lua norun
-- fxmanifest.lua
shared_scripts { 'config.lua', 'shared/utils.lua' }
client_scripts { 'client/garage.lua', 'client/main.lua' }
server_scripts { 'server/storage.lua', 'server/main.lua' }
\`\`\`

\`Config\` and \`Utils\` are globals on both sides, \`Garage\` is a client global, \`Storage\` a server global. Each file starts by building or using exactly those names.
:::

=== QUIZ
? In the module table pattern, what's public?
+ Only what you put inside the module table
- Every function in the file
- Only local functions
> Locals stay private to the file. The module table is the public surface.
? In FiveM, can \`client/main.lua\` see a **local** variable from \`client/utils.lua\`?
- Yes, files of one resource share everything
+ No, only globals are shared between files of the same side
- Only if both are in shared_scripts
> Files of one side share the same global environment, but locals are always private to their file.
? \`client/main.lua\` errors with \`attempt to index a nil value (global 'Garage')\` at the top level. Likely cause?
+ It's listed before \`client/garage.lua\` in the manifest, so Garage doesn't exist yet
- Garage must be local
- Client scripts can't use tables
> Files load in manifest order. Put the module file first.
? How do two different resources share functions?
- Through globals
+ Through exports
- With require
> Each resource has its own environment. Exports are the bridge.

=== EXERCISE
title: The inventory module
Build an \`Inventory\` module. The checker requires that **\`Inventory\` is the only global** your code creates.

1. A private table \`items\` (a \`local\`) holds counts by item name.
2. A private helper \`local function valid(name, count)\` returns true only if \`name\` is a non-empty string and \`count\` is a whole number of at least 1.
3. Public \`Inventory.add(name, count)\`: if not valid return \`false\`; else add and return \`true\`.
4. Public \`Inventory.remove(name, count)\`: if not valid, or not enough of that item, return \`false\`; else subtract (when it reaches 0, set it to \`nil\`) and return \`true\`.
5. Public \`Inventory.count(name)\` returns the amount (0 if none).

\`\`\`lua starter
Inventory = {}

items = {}

function valid(name, count)
  return true
end

function Inventory.add(name, count)
  items[name] = (items[name] or 0) + count
end
\`\`\`

\`\`\`lua solution
Inventory = {}

local items = {}

local function valid(name, count)
  return type(name) == "string" and name ~= "" and type(count) == "number"
    and count >= 1 and count == math.floor(count)
end

function Inventory.add(name, count)
  if not valid(name, count) then return false end
  items[name] = (items[name] or 0) + count
  return true
end

function Inventory.remove(name, count)
  if not valid(name, count) then return false end
  local have = items[name] or 0
  if have < count then return false end
  items[name] = have - count
  if items[name] == 0 then items[name] = nil end
  return true
end

function Inventory.count(name)
  return items[name] or 0
end
\`\`\`

\`\`\`lua test
local g = __globals()
__check(#g == 1 and g[1] == "Inventory", 'Only one global should be created: Inventory (you created: ' .. table.concat(g, ", ") .. ')')
__check(type(Inventory) == "table" and Inventory.items == nil and Inventory.valid == nil, 'items and valid must stay private (local), not inside Inventory')
if type(Inventory.add) == "function" and type(Inventory.remove) == "function" and type(Inventory.count) == "function" then
  __check(Inventory.add("water", 3) == true and Inventory.count("water") == 3, 'add("water", 3) returns true; count("water") is then 3')
  __check(Inventory.add("water", -2) == false and Inventory.count("water") == 3, 'add with a negative count returns false and changes nothing')
  __check(Inventory.add("", 1) == false and Inventory.add("burger", 1.5) == false, 'add with an empty name or a fraction returns false')
  __check(Inventory.remove("water", 5) == false and Inventory.count("water") == 3, 'remove more than you have returns false')
  __check(Inventory.remove("water", 3) == true and Inventory.count("water") == 0, 'remove("water", 3) returns true; count is then 0')
  __check(Inventory.count("unicorn") == 0, 'count of an item you never had is 0')
else
  __check(false, 'Inventory needs add, remove and count functions')
end
\`\`\`

hint: Put \`local\` in front of \`items\` and of \`function valid\`. That alone fixes the globals check.
hint: valid: \`type(name) == "string" and name ~= "" and type(count) == "number" and count >= 1 and count == math.floor(count)\`
hint: remove: \`local have = items[name] or 0\`, refuse if \`have < count\`, then subtract and clear to nil at 0.
`,ee=`---
id: lua-mistakes
title: Common beginner mistakes (and how to spot them)
part: Intermediate Lua
minutes: 30
summary: A review of the mistakes everybody makes when learning Lua, why each one happens, and the habit that prevents it. Ends with a bug hunt.
---
## Why a whole lesson on mistakes?

Everybody makes the same dozen mistakes when learning Lua. Recognising them on sight saves you hours. For each one: what it looks like, **why** it happens, and the habit that prevents it.

## 1. Habits from other languages

| You wrote | Lua wants | Why |
|---|---|---|
| \`if a != b\` | \`if a ~= b\` | Lua's "not equal" is \`~=\` |
| \`x += 1\`, \`x++\` | \`x = x + 1\` | Lua has no shortcut operators |
| \`"Hi " + name\` | \`"Hi " .. name\` | \`+\` is only maths |
| \`list[0]\` | \`list[1]\` | Lua lists start at 1 |
| \`if (x) { ... }\` | \`if x then ... end\` | blocks use words, not braces |
| \`null\`, \`undefined\` | \`nil\` | Lua's "nothing" |
| \`&&\`, double pipe, \`!\` | \`and\`, \`or\`, \`not\` | words, not symbols |

## 2. Forgetting \`local\`

\`\`\`lua bad
function giveCash(amount)
  total = (total or 0) + amount     -- 'total' is a global: visible everywhere
end
giveCash(50)
print(total)
\`\`\`

It "works", which is the danger. Globals can be overwritten by any other file of your resource, and they never get cleaned up. **Habit:** type \`local\` before every new variable and function, unless you deliberately want a module table.

## 3. \`=\` in a condition

\`\`\`lua error
local job = "police"
if job = "police" then print("cop") end
\`\`\`

\`'then' expected near '='\`: \`=\` stores, \`==\` asks. Lua refuses to guess.

## 4. Text that looks like a number

\`\`\`lua
local fromChat = "5"          -- command args are always text
print(fromChat == 5)          -- false! "5" (text) is not 5 (number)
print(tonumber(fromChat) == 5)
\`\`\`

**Habit:** \`tonumber(...)\` everything that comes from a player, then check it's not \`nil\`.

## 5. \`#\` on a dictionary

\`\`\`lua
local garage = { adder = true, sultan = true }
print(#garage)                -- 0, because # only counts list positions 1, 2, 3...
local n = 0
for _ in pairs(garage) do n = n + 1 end
print(n)                      -- 2
\`\`\`

## 6. Holes in lists

\`\`\`lua
local queue = { "a", "b", "c" }
queue[2] = nil                -- a hole!
for i, v in ipairs(queue) do print(i, v) end   -- stops at the hole: only "a"
\`\`\`

**Habit:** \`table.remove(list, i)\` for lists; \`= nil\` only for named keys.

## 7. Using a value before it exists

\`\`\`lua error
greet("Tina")                 -- line 1: greet doesn't exist YET
local function greet(name) print("Hi " .. name) end
\`\`\`

Lua runs top to bottom; functions must be defined above the line that calls them (at the top level).

## 8. Dot vs colon

\`\`\`lua error
local s = "hello"
print(s:upper())              -- fine: colon passes s
local car = { fuel = 10 }
function car:refuel(n) self.fuel = self.fuel + n end
car.refuel(20)                -- dot: self is 20, n is nil → crash
\`\`\`

## 9. Tables are shared, not copied

\`\`\`lua
local defaults = { fuel = 100 }
local myCar = defaults        -- NOT a copy
myCar.fuel = 5
print(defaults.fuel)          -- 5: you changed the defaults too
\`\`\`

## 10. Comparing floats exactly

\`\`\`lua
print(0.1 + 0.2 == 0.3)                    -- false!
print(math.abs((0.1 + 0.2) - 0.3) < 0.0001) -- true: compare with a tolerance
\`\`\`

Decimals are stored in binary and can't be exact. For money, store whole cents; for positions, compare distances with \`<\` instead of \`==\`.

## 11. The \`a and b or c\` trap

\`\`\`lua
local isAdmin = true
local label = isAdmin and false or "no"   -- wanted false, got "no"
print(label)
\`\`\`

If the middle value can be \`false\`/\`nil\`, use a real \`if\`.

## 12. Infinite loops

\`while x < 10 do ... end\` where nothing inside changes \`x\`, or \`while true do\` without \`Wait\` in FiveM. **Habit:** before running a loop, point at the line that eventually makes it stop.

:::do The habits that prevent almost all of these
- \`local\` everything.
- \`tonumber\` and \`type\` checks on anything from outside.
- Read the error's line number and name, then print values just before it.
- Run your code often, after small changes, so you know which change broke it.
:::

:::gta In your GTA server
FiveM adds its own classics (covered in the *Common FiveM mistakes* lesson): \`while true do\` without \`Wait\`, trusting client data, forgetting \`RegisterNetEvent\`, using \`source\` after a \`Wait\`, natives on the wrong side. Same cure: small steps, read errors, never trust input.
:::

=== QUIZ
? Which line correctly checks "not equal"?
- \`if a != b then\`
+ \`if a ~= b then\`
- \`if a <> b then\`
> Lua uses ~= for "not equal".
? \`print(#{ adder = true, sultan = true })\` shows?
+ 0
- 2
- an error
> # only counts the list part. Count named keys with pairs.
? \`local b = a\` where \`a\` is a table, then \`b.x = 1\`. What happened to \`a\`?
- Nothing
+ \`a.x\` is now 1 too: a and b are the same table
- It errors
> Assigning a table shares it. Copy it if you need an independent one.
? What's the safest way to compare two decimal numbers?
- \`a == b\`
+ Check the difference is tiny: \`math.abs(a - b) < 0.0001\`
- Convert both to text
> Decimals can't be stored exactly, so allow a tiny tolerance.

=== EXERCISE
title: Bug hunt at the dealership
This script has **six** classic mistakes. Fix them all so it prints exactly:

1. \`Stock: 3 models\`
2. \`Cheapest: faggio\`
3. \`Bob can afford: faggio, sultan\`
4. \`Order total: 39000\`

And the script must create **no global variables**.

\`\`\`lua starter
local stock = { adder = 1000000, faggio = 4000, sultan = 35000 }

-- 1. count the models
print("Stock: " .. #stock .. " models")

-- 2. find the cheapest
cheapest = nil
for model, price in pairs(stock) do
  if cheapest == nil or price < stock[cheapest] then cheapest = model end
end
print("Cheapest: " .. cheapest)

-- 3. what can Bob afford? (sorted A-Z)
local bobCash = "50000"        -- this came from a chat command
local canAfford = {}
for model, price in pairs(stock) do
  if price <= bobCash then table.insert(canAfford, model) end
end
table.sort(canAfford)
print("Bob can afford: " + table.concat(canAfford, ", "))

-- 4. an order of one faggio and one sultan
local order = { "faggio", "sultan" }
local total = 0
for i = 0, #order do
  total += stock[order[i]]
end
print("Order total: " .. total)
\`\`\`

\`\`\`lua solution
local stock = { adder = 1000000, faggio = 4000, sultan = 35000 }

local count = 0
for _ in pairs(stock) do count = count + 1 end
print("Stock: " .. count .. " models")

local cheapest = nil
for model, price in pairs(stock) do
  if cheapest == nil or price < stock[cheapest] then cheapest = model end
end
print("Cheapest: " .. cheapest)

local bobCash = tonumber("50000")
local canAfford = {}
for model, price in pairs(stock) do
  if price <= bobCash then table.insert(canAfford, model) end
end
table.sort(canAfford)
print("Bob can afford: " .. table.concat(canAfford, ", "))

local order = { "faggio", "sultan" }
local total = 0
for i = 1, #order do
  total = total + stock[order[i]]
end
print("Order total: " .. total)
\`\`\`

\`\`\`lua test
local out = __output()
__check(__printedLine("Stock: 3 models"), 'Line 1: Stock: 3 models (# doesn\\'t count dictionaries)')
__check(__printedLine("Cheapest: faggio"), 'Line 2: Cheapest: faggio')
__check(__printedLine("Bob can afford: faggio, sultan"), 'Line 3: Bob can afford: faggio, sultan (compare numbers with numbers; join text with ..)')
__check(__printedLine("Order total: 39000"), 'Line 4: Order total: 39000 (lists start at 1)')
local g = __globals()
__check(#g == 0, 'Create no globals (found: ' .. table.concat(g, ", ") .. ')')
\`\`\`

nomatch: \\+= :: Lua has no += (write total = total + ...)
nomatch: #stock :: #stock is 0 for a dictionary: count with pairs
hint: The \`+=\` is a syntax error, so fix that first (nothing runs until you do).
hint: Then: \`#\` on a dictionary, a missing \`local\`, text vs number (\`tonumber\`), \`+\` for text, and a loop starting at 0.
`,te=`---
id: resources
title: FiveM resources & fxmanifest.lua
part: FiveM basics
minutes: 25
side: manifest
summary: What a resource is, the folder layout, the manifest file, and the big idea: client vs server.
---
## Welcome to the GTA part 🚗

Everything you've learned so far is plain Lua, and it all works the same inside FiveM. Now we add the FiveM-specific pieces. This lesson is mostly about **how a server is organised**, because once that clicks, everything else makes sense.

## What's a resource?

A **resource** is one folder that adds one feature to your server: a garage, a job, a HUD, a car pack. Your server is basically a big list of resources.

A typical small Lua resource looks like this:

\`\`\`text
resources/
  [local]/
    my_garage/
      fxmanifest.lua      <- the "ID card" of the resource
      config.lua          <- settings (shared)
      client/
        main.lua          <- runs on each PLAYER's PC
      server/
        main.lua          <- runs on the SERVER
\`\`\`

The \`[local]\` folder with square brackets is just a category folder for tidiness; FiveM looks inside it automatically.

## The two sides: client and server

This is **the** most important idea in FiveM scripting:

- **Client scripts** run on *each player's own computer*, inside their GTA. One copy per player. They can see and change that player's game world: their ped, their car, what's on their screen, which keys they press.
- **Server scripts** run *once*, on the server machine. They see all players, decide what's allowed, and store data (money, items, saved cars).

They are **two separate programs**. A variable on the client does not exist on the server, and the other way round. They can only talk by sending **events** (the *Events* lesson).

:::why Why split it like this?
Speed and trust. The client is right there in the game, so drawing markers or reacting to keys must happen there, with no network delay. But the client is the **player's** computer, and players can modify their own computer (cheat). So anything important (money, items, permissions) must be decided on the **server**, which players can't touch. You'll hear this again in the security lesson, because it's the #1 rule of server scripting.
:::

| Job | Side | Why |
|---|---|---|
| Show a marker / help text | client | it's on that player's screen |
| Detect a key press | client | keys are pressed on the player's PC |
| Give money or items | **server** | must not be cheatable |
| Check if a player is an admin | **server** | permissions live on the server |
| Save data | **server** | one place, safe from players |
| Spawn a car near the player | client (or server with checks) | it's in their world |

## \`fxmanifest.lua\`: the resource's ID card

Every resource needs a \`fxmanifest.lua\`. It tells FiveM which files are client, server or shared. It **is** Lua, but written in a special "list of statements" style:

\`\`\`lua manifest
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'Tina'
description 'My first garage'
version '1.0.0'

shared_script 'config.lua'
client_script 'client/main.lua'
server_script 'server/main.lua'
\`\`\`

Line by line:

- \`fx_version 'cerulean'\` → which manifest version to use. \`'cerulean'\` is the current one; use it for new resources.
- \`game 'gta5'\` → this resource is for GTA V (FiveM also runs RDR2 via RedM).
- \`lua54 'yes'\` → use Lua 5.4 (newer, faster, what this app teaches). **Always add this.**
- \`author\`, \`description\`, \`version\` → information for humans.
- \`shared_script\` → loaded on **both** sides (great for config).
- \`client_script\` → loaded on each player's PC.
- \`server_script\` → loaded on the server only.

:::tip What's with \`fx_version 'cerulean'\` with no brackets?
In Lua, when you call a function with exactly one string (or one table), you may leave out the round brackets. \`fx_version 'cerulean'\` is the same as \`fx_version('cerulean')\`. FiveM's manifest uses that style so it reads like a settings file.
:::

Several files at once use the plural form with a table:

\`\`\`lua manifest
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

client_scripts {
  'client/main.lua',
  'client/menu.lua',
}

server_scripts {
  'server/main.lua',
}
\`\`\`

:::warn Files load in order
Files load in the order you list them, shared first. If \`client/menu.lua\` uses a function from \`client/main.lua\` while loading, main must be listed first. And \`config.lua\` should be a \`shared_script\` so both sides can read it before their own files run.
:::

## Starting your resource

1. Put the folder in your server's \`resources\` folder.
2. In \`server.cfg\` add the line \`ensure my_garage\` (the folder name).
3. Restart the server, or in the server console type \`refresh\` then \`ensure my_garage\`.

\`ensure\` starts a resource (or restarts it if it's already running). While developing, typing \`ensure my_garage\` in the server console reloads your changes without restarting everything. Handy!

## Where do my prints go?

- **Server script** \`print\` → the server console (txAdmin "Live Console", or the FXServer window).
- **Client script** \`print\` → the player's in-game **F8** console.

If you print in a client script and look in the server console, you'll see nothing and think your code is broken. Check the right console!

:::do
- One feature = one resource, with a clear name like \`tina_garage\`.
- Always include \`fx_version 'cerulean'\`, \`game 'gta5'\` and \`lua54 'yes'\`.
- Put shared settings in \`config.lua\` as a \`shared_script\`.
:::

:::dont
- Don't put secret things (webhook URLs, passwords, admin lists) in client or shared files. **Client and shared files are downloaded to every player's PC** and can be read.
- Don't name folders with spaces or capitals; use \`lowercase_with_underscores\`.
- Don't forget to \`ensure\` the resource in \`server.cfg\`, or it never starts.
:::

=== QUIZ
? Where does a client script run?
- On the server machine
+ On each player's own computer
- Only on admins' computers
> Client scripts run inside each player's GTA, one copy per player.
? Which side should decide "give this player $500"?
- Client
+ Server
> Players can change their own PC, so anything valuable must be decided on the server.
? Why is config.lua usually a shared_script?
+ So both client and server files can read the same settings
- Because shared files are secret
- Because it's required by FiveM
> Shared files load on both sides. (They are sent to players, so no secrets!)
? What does \`ensure my_garage\` do?
+ Starts the resource, or restarts it if it is already running
- Deletes the resource
- Only checks for errors
> It's how you start resources in server.cfg and reload them while developing.

=== EXERCISE
title: Write a manifest
Write the \`fxmanifest.lua\` for a resource called **tina_garage**. It must:

- use \`fx_version 'cerulean'\` and \`game 'gta5'\`
- turn on Lua 5.4
- have author \`'Tina'\`
- load \`config.lua\` on **both** sides
- load \`client/main.lua\` on the client
- load \`server/main.lua\` on the server

\`\`\`lua starter
-- fxmanifest.lua
fx_version 'cerulean'

\`\`\`

\`\`\`lua solution
-- fxmanifest.lua
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'Tina'
description 'Tina garage'
version '1.0.0'

shared_script 'config.lua'
client_script 'client/main.lua'
server_script 'server/main.lua'
\`\`\`

\`\`\`lua test
local m = __manifest()
local function has(list, f) for _, x in ipairs(list or {}) do if x == f then return true end end return false end
__check(m.fx_version == 'cerulean', "fx_version should be 'cerulean'")
__check(m.game == 'gta5', "game should be 'gta5'")
__check(m.lua54 == 'yes', "Turn on Lua 5.4 with: lua54 'yes'")
__check(m.author == 'Tina', "author should be 'Tina'")
__check(has(m.shared_scripts, 'config.lua'), "config.lua should be a shared_script")
__check(has(m.client_scripts, 'client/main.lua'), "client/main.lua should be a client_script")
__check(has(m.server_scripts, 'server/main.lua'), "server/main.lua should be a server_script")
__check(not has(m.client_scripts, 'server/main.lua') and not has(m.shared_scripts, 'server/main.lua'), "Never send server/main.lua to the client!")
\`\`\`

side: manifest
hint: \`game 'gta5'\` and \`lua54 'yes'\` go right under fx_version.
hint: \`shared_script 'config.lua'\` loads on both sides.
`,ne=`---
id: manifest-deep
title: fxmanifest.lua in detail
part: FiveM basics
minutes: 25
summary: Every manifest line you'll meet, globs, files for UIs, using libraries like ox_lib and oxmysql, dependencies, and the mistakes that stop resources from starting.
---
## Why the manifest deserves a second look

In the *Resources* lesson you wrote a small manifest. Real resources have bigger ones, and when a resource "doesn't work at all", the manifest is the first suspect: a file not listed is a file that **never runs**, and nobody tells you.

## The full shape of a real manifest

\`\`\`lua manifest
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'tina_garage'
author 'Tina'
description 'Store and take out vehicles'
version '1.2.0'

shared_scripts {
  '@ox_lib/init.lua',     -- a file from ANOTHER resource (the @ means "from resource ox_lib")
  'config.lua',
}

client_scripts {
  'client/*.lua',         -- every .lua file directly in client/
}

server_scripts {
  '@oxmysql/lib/MySQL.lua',  -- gives this resource the MySQL object
  'server/main.lua',
}

ui_page 'html/index.html'
files {
  'html/index.html',
  'html/style.css',
  'html/app.js',
}

dependencies {
  'ox_lib',
  'oxmysql',
}
\`\`\`

Each part, and **why** it's there:

| Line | Why |
|---|---|
| \`fx_version 'cerulean'\` | Which manifest rules apply. Older values (\`adamant\`, \`bodacious\`) exist in old scripts; use \`cerulean\` for new work. |
| \`game 'gta5'\` | It's a GTA V resource (RedM uses \`rdr3\`). |
| \`lua54 'yes'\` | Run your Lua as 5.4. Without it you get the older Lua 5.3 behaviour. |
| \`name\`, \`author\`, \`description\`, \`version\` | For humans and tools. \`version\` helps you know what's deployed. |
| \`shared_scripts\` | Run on **both** sides, **before** client/server files. Config goes here. |
| \`'@ox_lib/init.lua'\` | \`@resource/path\` loads a file **from another resource** into yours. That's how libraries add their functions to your resource. |
| \`client_scripts\` / \`server_scripts\` | What runs on players' PCs / on the server. |
| \`'client/*.lua'\` | A **glob**: all matching files. \`'client/**/*.lua'\` also includes sub-folders. |
| \`ui_page\` | The HTML page used for this resource's NUI (in-game web UI). |
| \`files\` | Extra files **sent to players**: the UI's HTML/CSS/JS, data files. Client scripts are sent automatically; other files are not unless listed here. |
| \`dependencies\` | Resources that must be started first. If one is missing, yours refuses to start with a clear message instead of failing strangely. |

:::why Why does order matter so much?
FiveM runs the files of each side **in the order listed** (shared ones first). Top-level code runs immediately when the file loads. If \`client/main.lua\` uses \`Config.Garages\` at the top level but \`config.lua\` isn't listed (or comes later), \`Config\` is \`nil\` at that moment and you get \`attempt to index a nil value (global 'Config')\`. With globs, files load in alphabetical order, so if order matters, list them by name.
:::

## The two library lines you'll copy most

- **ox_lib**: \`shared_script '@ox_lib/init.lua'\` (plus \`dependency 'ox_lib'\`). Gives you \`lib.*\` helpers (notifications, menus, callbacks, a \`require\`).
- **oxmysql**: \`server_script '@oxmysql/lib/MySQL.lua'\` (plus \`dependency 'oxmysql'\`). Gives the server the \`MySQL\` object for database queries. **Server only**: the database must never be reachable from clients.

Library docs always tell you the exact line to add. If a function from a library is \`nil\`, check you added its line to the manifest.

## Try a manifest with mistakes

The practice world records what your manifest declares. Run this one and look at what's wrong:

\`\`\`lua manifest bad
fx_version 'cerulean'
game 'gta5'

client_script 'client/main.lua'
client_script 'server/main.lua'
shared_script 'config.lua'
files { 'html/index.html' }
\`\`\`

Problems:

1. No \`lua54 'yes'\`.
2. \`server/main.lua\` is a **client** script: it gets sent to every player (who can read it) and runs on their PC, where server functions don't exist.
3. \`ui_page\` is missing, so the HTML is downloaded but never shown.
4. \`config.lua\` is listed *after* client files. (FiveM still runs shared files first, but writing them first makes your intent obvious.)

:::do
- Start every manifest with \`fx_version 'cerulean'\`, \`game 'gta5'\`, \`lua54 'yes'\`.
- List shared/config first, then the files that use them, in the order they depend on each other.
- Add every library you use to both the scripts list (if its docs say so) and \`dependencies\`.
- List every UI file in \`files\`.
:::

:::dont
- Don't put server files in \`client_scripts\` or \`shared_scripts\`. Everything there is downloaded by players.
- Don't use \`'**/*.lua'\` as a lazy "load everything" in one list: it would mix client and server files.
- Don't forget to restart the resource (\`ensure name\`) after changing the manifest; it's only read at start.
:::

:::gta In your GTA server
When a resource fails to start, the server console usually says why: \`Couldn't start resource tina_garage\` with a reason like a missing dependency, or \`Could not open resource metadata file\` (the manifest is missing or misnamed: it must be exactly \`fxmanifest.lua\`). Old resources may still have \`__resource.lua\`: that's the outdated format, convert it to \`fxmanifest.lua\`.
:::

=== QUIZ
? What does \`'@ox_lib/init.lua'\` in shared_scripts mean?
+ Load the file init.lua from the ox_lib resource into this resource
- Email the ox_lib author
- Skip ox_lib
> The @ prefix means "a file from another resource". That's how libraries plug in.
? Where must \`'@oxmysql/lib/MySQL.lua'\` go?
- client_scripts
- shared_scripts
+ server_scripts
> Database access is server-only. Clients must never talk to the database.
? Your resource has an HTML menu but nothing shows in game. What two lines should you check?
- \`lua54\` and \`game\`
+ \`ui_page\` and \`files\`
- \`author\` and \`version\`
> ui_page says which page to use, files makes sure the HTML/CSS/JS are sent to players.
? What does \`dependencies { 'oxmysql' }\` do?
+ Makes sure oxmysql is started first, or refuses to start with a clear message
- Downloads oxmysql from the internet
- Copies oxmysql into your resource
> Dependencies are a start-order and safety check, not a downloader.

=== EXERCISE
title: The phone shop manifest
Write the manifest for **tina_phoneshop**. It must:

1. Have \`fx_version 'cerulean'\`, \`game 'gta5'\`, \`lua54 'yes'\`, and a \`version\`.
2. Load ox_lib's init file **and** \`config.lua\` on both sides (ox_lib first).
3. Load \`client/main.lua\` and \`client/nui.lua\` on the client.
4. Load oxmysql's \`lib/MySQL.lua\` and then \`server/main.lua\` on the server.
5. Use \`html/index.html\` as the UI page, and send \`html/index.html\`, \`html/app.js\` and \`html/style.css\` as files.
6. Depend on \`ox_lib\` and \`oxmysql\`.

\`\`\`lua starter
fx_version 'cerulean'
game 'gta5'

client_scripts {
  'client/main.lua',
}
\`\`\`

\`\`\`lua solution
fx_version 'cerulean'
game 'gta5'
lua54 'yes'

name 'tina_phoneshop'
author 'Tina'
version '1.0.0'

shared_scripts {
  '@ox_lib/init.lua',
  'config.lua',
}

client_scripts {
  'client/main.lua',
  'client/nui.lua',
}

server_scripts {
  '@oxmysql/lib/MySQL.lua',
  'server/main.lua',
}

ui_page 'html/index.html'
files {
  'html/index.html',
  'html/app.js',
  'html/style.css',
}

dependencies {
  'ox_lib',
  'oxmysql',
}
\`\`\`

\`\`\`lua test
local m = __manifest()
local function idx(list, f) for i, x in ipairs(list or {}) do if x == f then return i end end return nil end
__check(m.fx_version == 'cerulean' and m.game == 'gta5' and m.lua54 == 'yes', "Start with fx_version 'cerulean', game 'gta5', lua54 'yes'")
__check(m.version ~= nil, "Add a version, e.g. version '1.0.0'")
local ox, cfg = idx(m.shared_scripts, '@ox_lib/init.lua'), idx(m.shared_scripts, 'config.lua')
__check(ox and cfg and ox < cfg, "shared_scripts: '@ox_lib/init.lua' first, then 'config.lua'")
__check(idx(m.client_scripts, 'client/main.lua') and idx(m.client_scripts, 'client/nui.lua'), "client_scripts: client/main.lua and client/nui.lua")
local sql, main = idx(m.server_scripts, '@oxmysql/lib/MySQL.lua'), idx(m.server_scripts, 'server/main.lua')
__check(sql and main and sql < main, "server_scripts: '@oxmysql/lib/MySQL.lua' first, then 'server/main.lua'")
__check(not idx(m.client_scripts, '@oxmysql/lib/MySQL.lua') and not idx(m.shared_scripts, '@oxmysql/lib/MySQL.lua'), "MySQL must be server-only")
__check(m.ui_page == 'html/index.html', "ui_page 'html/index.html'")
__check(idx(m.files, 'html/index.html') and idx(m.files, 'html/app.js') and idx(m.files, 'html/style.css'), "files: index.html, app.js and style.css from html/")
__check(idx(m.dependencies, 'ox_lib') and idx(m.dependencies, 'oxmysql'), "dependencies: 'ox_lib' and 'oxmysql'")
\`\`\`

side: manifest
hint: Plural lists use \`{ ... }\` with commas: \`shared_scripts { '@ox_lib/init.lua', 'config.lua' }\`
hint: \`ui_page 'html/index.html'\` is a single value; \`files { ... }\` and \`dependencies { ... }\` are lists.
`,re=`---
id: sides
title: Client, server & shared: who does what
part: FiveM basics
minutes: 30
summary: What really runs where, why shared files run twice, how to tell which side you're on, and a simple way to decide where each piece of code belongs.
---
## One resource, many copies

When 32 players are on your server and your resource has a client script, there are **33 copies** of your code running: **one** server script on the server machine, and **one client script on each player's PC**. Each copy has its own variables. Nothing is shared unless you *send* it with an event.

\`\`\`lua norun
-- client/main.lua
local visits = 0
visits = visits + 1      -- each player has their OWN visits counter

-- server/main.lua
local totalVisits = 0    -- ONE counter for the whole server
\`\`\`

:::why Why does this matter?
Beginners often expect \`local money = 500\` in a client file to be "the player's money". It's just a number in **that player's** game, which they can change with a cheat tool. The *real* money must live on the server, in **one** place, where it can't be touched. The client only gets a copy to **display**.
:::

## What each side can do

| | Client (player's PC) | Server |
|---|---|---|
| Sees | the game world around that player, their keys, their screen | all players, all identifiers, the database |
| Typical natives | \`PlayerPedId\`, \`IsControlJustPressed\`, \`DrawMarker\`, \`SetNuiFocus\` | \`GetPlayers\`, \`GetPlayerIdentifiers\`, \`DropPlayer\`, \`IsPlayerAceAllowed\` |
| Both | \`GetEntityCoords\`, \`GetHashKey\`, \`vector3\`, \`json\`, \`Wait\`, events | |
| Trust | **never** (the player controls it) | **always** (you control it) |
| Good for | drawing, input, sounds, menus, smooth effects | money, items, jobs, permissions, saving, anti-cheat |

Using a function on the wrong side gives \`attempt to call a nil value\`, because on that side it simply doesn't exist. The practice world explains it more kindly:

\`\`\`lua server error
local ped = PlayerPedId()   -- a CLIENT native, running as a server script
\`\`\`

## Shared files run twice

A \`shared_script\` isn't "one file that both sides share". It's loaded **separately** on the server **and** on every client. Two copies, two sets of variables. That's perfect for **settings** (both sides read the same config) and **helper functions**.

If a shared file needs to behave differently per side, ask \`IsDuplicityVersion()\`: it's \`true\` on the server and \`false\` on a client. (The odd name is historic: *Duplicity* was the codename of the server.)

\`\`\`lua
Config = { ShopName = "24/7", Prices = { water = 2 } }

local function formatMoney(n) return ("$%d"):format(n) end

if IsDuplicityVersion() then
  print("[server] shop prices loaded: water costs " .. formatMoney(Config.Prices.water))
else
  print("[client] I can show prices in the menu: " .. formatMoney(Config.Prices.water))
end
\`\`\`

Run it here (practice mode is "shared", where the server answer is \`false\`). In a real server you'd see the \`[server]\` line in the server console and the \`[client]\` line in every player's F8.

## Deciding where code goes: three questions

1. **Does it need the player's screen, keyboard, camera or nearby world?** → client.
2. **Does it change anything valuable or check permissions?** (money, items, jobs, bans, saving) → server. If the client is involved, it only **asks** via an event, and the server checks everything.
3. **Is it data or a pure helper both sides need?** (prices for the menu, a format function) → shared. But **only** if it's fine for players to read it.

Most features end up **split**: the client shows the marker and catches the key press, then asks the server; the server checks and decides; the server tells the client the result.

:::do
- Keep the "truth" (money, inventory, job) on the server; send the client copies to display.
- Put settings that both sides need in a shared \`config.lua\`.
- Use \`IsDuplicityVersion()\` in shared files when one part should only run on one side.
:::

:::dont
- Don't store anything valuable only on the client.
- Don't put secrets (webhooks, admin lists, prices that must stay hidden) in shared files: they're downloaded by everyone.
- Don't expect a variable on one side to exist on the other. Send it with an event.
:::

:::gta In your GTA server
A cash display is a perfect example: the **server** holds \`cash[src] = 500\`. When it changes, the server sends \`TriggerClientEvent("hud:setCash", src, 500)\`, and the **client** just draws "$500". If a cheater changes their client's number to 1,000,000, only their screen changes; the server still knows it's 500.
:::

=== QUIZ
? 20 players are online. How many copies of your client script are running?
- 1
+ 20, one on each player's PC
- 21
> Each player runs their own copy. (The server runs the server scripts once.)
? What does \`IsDuplicityVersion()\` return in a server script?
+ true
- false
- the server name
> true on the server, false on a client. Useful inside shared files.
? Where should "is this player allowed to open the police armoury?" be decided?
- Client, so the button can be hidden
+ Server (the client may also hide the button, but the server must check)
- Shared
> Hiding buttons is nice for players, but only a server check stops cheaters.
? A shared config holds \`Config.Webhook = "https://discord..."\`. What's wrong?
+ Shared files are downloaded by every player, so anyone can read the webhook
- Webhooks must be numbers
- Nothing
> Secrets belong in server-only files (or server convars).

=== EXERCISE
title: Sort the jobs
1. Write \`whereAmI()\` that returns \`"server"\` or \`"client"\` using \`IsDuplicityVersion()\` (this exercise runs as a **client** script).
2. Fill in the \`Where\` table: for each job, the value must be \`"client"\`, \`"server"\` or \`"shared"\` (use \`"shared"\` only for settings/helpers both sides need and that are fine for players to read).

\`\`\`lua starter
local function whereAmI()
  return "server"
end

local Where = {
  drawShopMarker = "?",        -- a marker drawn at the shop on the player's screen
  removeMoney = "?",           -- taking $50 from the player for a purchase
  readKeyPress = "?",          -- noticing the player pressed E
  savePlayerData = "?",        -- writing the inventory to the database
  shopPricesForMenu = "?",     -- a price list the menu displays and the server also uses
  banCheater = "?",            -- kicking someone who sent impossible data
  formatMoneyHelper = "?",     -- a function that turns 1500 into "$1,500"
  discordWebhookUrl = "?",     -- a secret URL for admin logs
}
\`\`\`

\`\`\`lua solution
local function whereAmI()
  if IsDuplicityVersion() then return "server" end
  return "client"
end

local Where = {
  drawShopMarker = "client",
  removeMoney = "server",
  readKeyPress = "client",
  savePlayerData = "server",
  shopPricesForMenu = "shared",
  banCheater = "server",
  formatMoneyHelper = "shared",
  discordWebhookUrl = "server",
}
\`\`\`

\`\`\`lua test
__check(type(whereAmI) == "function" and whereAmI() == "client", 'whereAmI() should return "client" when running as a client script')
local W = Where or {}
__check(W.drawShopMarker == "client", 'drawShopMarker: drawing on the screen happens on the client')
__check(W.readKeyPress == "client", 'readKeyPress: keys are pressed on the player\\'s PC (client)')
__check(W.removeMoney == "server", 'removeMoney: money is valuable, so the server decides')
__check(W.savePlayerData == "server", 'savePlayerData: saving is server-only')
__check(W.banCheater == "server", 'banCheater: only the server can (and should) kick')
__check(W.shopPricesForMenu == "shared", 'shopPricesForMenu: both sides need it and it is fine for players to see (shared)')
__check(W.formatMoneyHelper == "shared", 'formatMoneyHelper: a pure helper both sides can use (shared)')
__check(W.discordWebhookUrl == "server", 'discordWebhookUrl: a secret, never in client or shared files (server)')
\`\`\`

side: client
match: IsDuplicityVersion\\s*\\(\\s*\\) :: Use IsDuplicityVersion() in whereAmI
hint: \`if IsDuplicityVersion() then return "server" end return "client"\`
hint: Ask the three questions: screen/keys? → client. Valuable or a secret? → server. Harmless data/helper both need? → shared.
`,ie=`---
id: threads
title: Threads & Wait
part: FiveM basics
minutes: 30
side: client
summary: Running loops in the background without freezing GTA, what Wait(0) really costs, and how to choose the right wait.
---
## The problem: loops freeze the game

From the loops lesson you know \`while true do ... end\` never stops. In FiveM, your script shares the game's time. A loop that never pauses means **GTA can never draw the next frame**. The game freezes, and FiveM eventually kills the script.

But games *need* things that keep checking forever: "is the player near the shop?", "did they press E?", "update the speedometer". The answer is **threads** and **Wait**.

## A thread is a loop that takes turns

\`\`\`lua client
Citizen.CreateThread(function()
  print("Thread started")
  for i = 1, 3 do
    print("Tick", i, "at", GetGameTimer(), "ms")
    Wait(1000)   -- pause THIS thread for 1000 ms (1 second)
  end
  print("Thread finished")
end)

print("This prints FIRST, because the thread runs alongside")
\`\`\`

- \`Citizen.CreateThread(function() ... end)\` starts a **thread**: a piece of code that runs "in the background", taking turns with everything else. (\`CreateThread\` without \`Citizen.\` works too.)
- \`Wait(1000)\` means: *"pause me for 1000 milliseconds and let everyone else run"*. 1000 ms = 1 second.
- \`GetGameTimer()\` gives the game time in ms. In this practice world the time is simulated, so a 5-second test finishes instantly.

:::why Why does the last print come first?
\`CreateThread\` doesn't run the function right away: it *schedules* it. Your file finishes loading first, and on the next tick the thread starts. Threads take turns: each one runs until it hits \`Wait\`, then the next gets a go. That "taking turns" is called **cooperative multitasking**: every thread must *cooperate* by calling \`Wait\`, or nobody else gets a turn.
:::

## The classic FiveM loop

\`\`\`lua client
Citizen.CreateThread(function()
  while true do
    -- check something
    Wait(500)   -- every half second
  end
end)
\`\`\`

\`while true do\` runs forever (until the resource stops), and the \`Wait\` inside makes it safe.

:::warn Wait must be INSIDE the loop
If the \`Wait\` is outside the \`while\`, the loop body never pauses. That's an instant freeze. Put the \`Wait\` inside, usually at the start or end of the loop.
:::

## \`Wait(0)\`: every single frame

\`Wait(0)\` means "wait until the next frame". GTA runs at about 60 frames per second, so a \`Wait(0)\` loop runs **about 60 times every second**, for every player, forever.

\`\`\`lua client
Citizen.CreateThread(function()
  while true do
    Wait(0)
    if IsControlJustPressed(0, 38) then   -- 38 is the E key
      print("You pressed E at " .. GetGameTimer() .. " ms")
    end
  end
end)
\`\`\`

Run it: this practice world pretends you press E at about 1.2 s and 3.5 s. The console also shows a ⚠ **performance note**, because this thread woke up hundreds of times in 5 seconds.

:::why When is Wait(0) actually needed?
Only for things that must happen **every frame**, or they'd flicker or be missed:
- drawing markers, 3D text or help text (they disappear if not drawn every frame)
- checking \`IsControlJustPressed\` (a key press lasts one frame; check less often and you miss it)
- disabling controls every frame
For everything else (checking distance, timers, updating a HUD number), wait longer: 250 ms, 500 ms, 1000 ms or more.
:::

Try this: the same key check with \`Wait(500)\`. The presses are missed, because they happened between checks:

\`\`\`lua client
Citizen.CreateThread(function()
  while true do
    Wait(500)
    if IsControlJustPressed(0, 38) then
      print("You pressed E")
    end
  end
end)
print("Waiting for E... (with Wait(500) we'll probably miss it)")
\`\`\`

## The smart pattern: wait less only when it matters

The best FiveM scripts **change their wait time**. Far from the shop? Check rarely. Close to it? Check every frame so the marker and key press work.

\`\`\`lua client
local shop = vector3(25.7, -1347.3, 29.5)

Citizen.CreateThread(function()
  while true do
    local sleep = 1000                    -- default: relax, check once a second
    local coords = GetEntityCoords(PlayerPedId())
    local distance = #(coords - shop)

    if distance < 20.0 then
      sleep = 0                           -- close: every frame (draw marker, check E)
      -- DrawMarker(...), IsControlJustPressed(...) would go here
    end

    Wait(sleep)
  end
end)
print("Started the shop loop")
\`\`\`

You're far away in this example (the player is at Legion Square), so the loop only wakes once per second: no performance note. That's the goal. (\`#(a - b)\` is the distance between two positions; the *Natives* lesson explains it.)

## Other timing tools

\`\`\`lua client
SetTimeout(2000, function()
  print("Two seconds later, once:", GetGameTimer())
end)
print("Timer set")
\`\`\`

\`SetTimeout(ms, function)\` runs a function **once** after a delay. Use it instead of a thread when you don't need a loop.

:::do
- Put a \`Wait\` inside every \`while true do\` loop. No exceptions.
- Use the **largest wait that still feels right**. Start with 500 or 1000.
- Use the "sleep" pattern: \`local sleep = 1000\`, lower it only when the player is close.
- Use \`SetTimeout\` for one-off delays.
:::

:::dont
- Don't use \`Wait(0)\` "just to be safe". It's the opposite of safe: it costs performance on every player's PC.
- Don't create a new thread every time something happens (e.g. in a loop) unless that thread ends quickly.
- Don't call \`Wait\` outside a thread or handler at the top of a file; start a thread for timed work.
:::

:::gta In your GTA server
Players with low-end PCs feel every wasteful \`Wait(0)\` loop as lower FPS. FiveM has a built-in tool to find them: type \`resmon 1\` in F8 to see how many milliseconds each resource uses per frame. A well-written idle resource shows **0.00 ms** to **0.01 ms**. If yours shows 0.10+ while nothing is happening, look for \`Wait(0)\` loops.
:::

=== QUIZ
? What does \`Wait(1000)\` do inside a thread?
+ Pauses that thread for 1 second and lets everything else run
- Freezes the whole game for 1 second
- Waits 1000 frames
> Wait pauses only the current thread, so the game and other threads keep going.
? About how often does a \`while true do Wait(0) ... end\` loop run?
- Once a second
+ About 60 times a second (every frame)
- Only once
> Wait(0) means "next frame". At 60 FPS that's 60 runs per second, on every player's PC.
? Which job really needs Wait(0)?
- Checking the player's distance to a shop once
+ Drawing a marker or checking a key press
- Saving data every few minutes
> Markers and key presses happen per frame. Everything else should wait longer.
? What happens with \`while true do print("x") end\` in FiveM (no Wait)?
- It prints x once a second
+ The game or server freezes
- FiveM adds a Wait automatically
> Without Wait the thread never gives up its turn, so nothing else can run.

=== EXERCISE
title: The fuel gauge thread
Write a **client** thread that drains fuel:

- Start with \`local fuel = 100\` (already there).
- In a thread, loop **while fuel is above 0**: reduce fuel by **20**, print \`Fuel: 80\` (etc.), then **Wait 1000 ms**.
- After the loop, print \`Out of fuel!\`

Don't use \`Wait(0)\`: once a second is plenty for a fuel gauge. The checker runs the simulation for 10 seconds.

\`\`\`lua starter
local fuel = 100

Citizen.CreateThread(function()
  -- your loop here
end)
\`\`\`

\`\`\`lua solution
local fuel = 100

Citizen.CreateThread(function()
  while fuel > 0 do
    fuel = fuel - 20
    print("Fuel: " .. fuel)
    Wait(1000)
  end
  print("Out of fuel!")
end)
\`\`\`

\`\`\`lua test
Wait(9000)
for _, f in ipairs({80, 60, 40, 20, 0}) do __check(__printedLine("Fuel: " .. f), 'Print "Fuel: ' .. f .. '"') end
__check(__printedLine("Out of fuel!"), 'Print "Out of fuel!" after the loop ends')
local th = __threads()
__check(#th >= 1, 'Use Citizen.CreateThread')
local busy = false
for _, t in ipairs(th) do if t.wait0 > 0 or t.wakes > 20 then busy = true end end
__check(not busy, 'The thread should Wait(1000) each round, not Wait(0)')
__check(__now() >= 4000, 'Each round should wait about a second (the 5 rounds should take ~5 seconds of game time)')
\`\`\`

side: client
duration: 10000
nomatch: Wait\\(\\s*0\\s*\\) :: No Wait(0) here. A fuel gauge doesn't need to update 60 times a second.
hint: \`while fuel > 0 do ... end\` inside the thread function.
hint: Inside the loop: \`fuel = fuel - 20\`, \`print("Fuel: " .. fuel)\`, \`Wait(1000)\`
`,ae=`---
id: commands
title: Commands (/slash commands)
part: FiveM basics
minutes: 25
side: client
summary: RegisterCommand, why arguments are always text, checking input, and restricting commands to admins.
---
## Your first command

A command is what a player types in chat (or F8), like \`/hello\`. You create one with \`RegisterCommand\`:

\`\`\`lua client
RegisterCommand("hello", function(source, args, rawCommand)
  print("Hello from the command! You typed: " .. rawCommand)
end, false)
\`\`\`

That registers \`/hello\`. To try commands in this app, run the code, then type the command in the **console input box** under the output (e.g. \`/hello there\`). The practice world will run it as Tina.

The three parts of \`RegisterCommand(name, handler, restricted)\`:

1. \`"hello"\` → the command name, **without** the \`/\`.
2. \`function(source, args, rawCommand) ... end\` → the function FiveM calls when someone types it (you learned about passing functions in the *Functions* lesson).
3. \`false\` → \`restricted\`. \`false\` means anyone can use it; \`true\` means only players with permission (see below).

The handler gets three values:

- \`source\` → **who** typed it. On the server: that player's ID (or \`0\` if typed in the server console). On the client it's always \`0\` (it's always "you").
- \`args\` → a **list** of the words after the command. \`/give water 5\` → \`args[1] = "water"\`, \`args[2] = "5"\`.
- \`rawCommand\` → the whole text that was typed: \`"give water 5"\`.

## Arguments are ALWAYS strings

This is the #1 command bug. Even if the player types a number, \`args[2]\` is the text \`"5"\`, not the number \`5\`.

\`\`\`lua client
RegisterCommand("double", function(source, args)
  local n = tonumber(args[1])          -- convert, and check!
  if not n then
    print("Usage: /double <number>")
    return
  end
  print(n .. " doubled is " .. n * 2)
end, false)

ExecuteCommand("double 21")
ExecuteCommand("double banana")
ExecuteCommand("double")
\`\`\`

(\`ExecuteCommand("...")\` runs a command from code. Useful for testing, and that's what we do here.)

:::why Why check for nil?
A player can type *anything*: nothing, letters, a huge number, a negative number. \`tonumber("banana")\` and \`tonumber(nil)\` both give \`nil\`. If you skip the check, the next line does maths with nil and the command errors. A good command **never** crashes on bad input; it explains how to use it instead.
:::

## Validate, clamp, then act

The safe recipe for any command with a number:

1. Convert with \`tonumber\`.
2. If it's \`nil\`, show a usage message and \`return\`.
3. Clamp it into the allowed range (the *Numbers* lesson).
4. Only now do the thing.

\`\`\`lua client
RegisterCommand("armour", function(source, args)
  local amount = tonumber(args[1])
  if not amount then
    print("Usage: /armour <0-100>")
    return
  end
  amount = math.floor(math.max(0, math.min(100, amount)))
  SetPedArmour(PlayerPedId(), amount)
  print("Armour set to " .. amount)
end, false)

ExecuteCommand("armour 250")
\`\`\`

## Telling the player something

\`print\` goes to the F8 console, which players rarely look at. For messages they'll actually see, use the chat:

\`\`\`lua client
RegisterCommand("where", function()
  local c = GetEntityCoords(PlayerPedId())
  TriggerEvent("chat:addMessage", { args = { "GPS", string.format("You are at %.1f, %.1f", c.x, c.y) } })
end, false)

ExecuteCommand("where")
\`\`\`

\`chat:addMessage\` is an event provided by FiveM's default \`chat\` resource. You'll understand events fully in the next lesson; for now, just copy this shape.

## Restricted (admin) commands

Commands that change the world for everyone (announce, kick, give items) must be **server-side** and **restricted**:

\`\`\`lua server
RegisterCommand("announce", function(source, args, raw)
  local message = table.concat(args, " ")
  if message == "" then
    print("Usage: /announce <message>")
    return
  end
  TriggerClientEvent("chat:addMessage", -1, { args = { "^1ANNOUNCEMENT", message } })
end, true)  -- true = restricted

ExecuteCommand("announce Server restart in 5 minutes")
\`\`\`

With \`true\`, FiveM only lets a player run it if they have the permission (an **ACE**) \`command.announce\`. You give that in \`server.cfg\`:

\`\`\`text
add_ace group.admin command.announce allow
add_principal identifier.license:YOUR_LICENSE_HERE group.admin
\`\`\`

:::why Why server-side for admin commands?
A client-side "restricted" check runs on the **player's** PC, where a cheater can simply skip it. A server-side restricted command is checked by the server, which the player can't change. If a command does anything powerful, register it on the server.
:::

:::do
- Name commands clearly and in lowercase: \`/engine\`, \`/givecar\`.
- Always \`tonumber\` number arguments and check for \`nil\`.
- Show a "Usage: ..." message when input is wrong.
- Make powerful commands server-side and restricted.
:::

:::dont
- Don't do maths with \`args[1]\` directly; it's text.
- Don't trust that \`args[1]\` exists; a player can type the command with nothing after it.
- Don't make "give money" or "spawn item" commands client-side.
:::

=== QUIZ
? A player types \`/give 5\`. What is \`args[1]\`?
- the number 5
+ the text "5"
- "give"
> Arguments are always strings. Convert with tonumber.
? What should a command do when the input is invalid?
- Crash so the admin notices
+ Show a usage message and return
- Use the input anyway
> Never crash on player input. Explain how to use it and stop.
? What does the 3rd value \`true\` in \`RegisterCommand("kick", fn, true)\` do?
+ Makes the command restricted: only players with the ACE permission can run it
- Runs the command 3 times
- Hides the command from chat
> Restricted commands need command.<name> permission, given with add_ace in server.cfg.
? Where should an admin-only command that gives items be registered?
- Client
+ Server
> Client checks can be bypassed by cheaters. The server can't be.

=== EXERCISE
title: A safe /armour command
Write a **client** command \`/armour\` that sets the player's armour:

1. Convert \`args[1]\` with \`tonumber\`.
2. If it isn't a number, \`print\` a message containing \`Usage\` and **return** (don't change armour).
3. Clamp the value between **0 and 100**.
4. Set it with \`SetPedArmour(PlayerPedId(), amount)\`.

The checker will type \`/armour 50\`, \`/armour abc\`, \`/armour 500\` and \`/armour\` (with nothing).

\`\`\`lua starter
RegisterCommand("armour", function(source, args)
  local amount = args[1]
  SetPedArmour(PlayerPedId(), amount)
end, false)
\`\`\`

\`\`\`lua solution
RegisterCommand("armour", function(source, args)
  local amount = tonumber(args[1])
  if not amount then
    print("Usage: /armour <0-100>")
    return
  end
  amount = math.max(0, math.min(100, amount))
  SetPedArmour(PlayerPedId(), amount)
end, false)
\`\`\`

\`\`\`lua test
__check(__commandExists("armour"), 'Register a command called "armour" (no slash)')
__command(1, "/armour 50"); Wait(50)
__check(__player(1).armour == 50, '/armour 50 should set armour to 50')
__command(1, "/armour abc"); Wait(50)
__check(__player(1).armour == 50, '/armour abc must NOT change the armour')
__check(__printed("Usage"), '/armour abc should print a Usage message')
__command(1, "/armour 500"); Wait(50)
__check(__player(1).armour == 100, '/armour 500 should be clamped to 100')
__command(1, "/armour -20"); Wait(50)
__check(__player(1).armour == 0, '/armour -20 should be clamped to 0')
__command(1, "/armour"); Wait(50)
__check(__player(1).armour == 0, '/armour with nothing must not crash or change armour')
\`\`\`

side: client
hint: \`local amount = tonumber(args[1])\` then \`if not amount then print("Usage: /armour <0-100>") return end\`
hint: Clamp: \`amount = math.max(0, math.min(100, amount))\`
`,oe=`---
id: events
title: Events: client ↔ server
part: FiveM basics
minutes: 30
side: server
summary: How the two sides talk: RegisterNetEvent, AddEventHandler, TriggerServerEvent, TriggerClientEvent and source.
---
## Why events?

Client and server are separate programs (the *Resources* lesson). The only way for them to talk is to **send messages** to each other. FiveM calls those messages **events**.

An event has:

- a **name** (a string, like \`"garage:storeVehicle"\`)
- optional **data** sent along (numbers, strings, tables)
- one or more **handlers**: functions that run when the event arrives

Think of it like a radio: one side *transmits* on a channel name, the other side *listens* on that channel.

## Listening: RegisterNetEvent + AddEventHandler

On the receiving side, you say *"I accept this event from the network, and here's what to do with it"*:

\`\`\`lua server
RegisterNetEvent("garage:hello")
AddEventHandler("garage:hello", function(message)
  print("A player said: " .. message)
end)
\`\`\`

There's a shorter form that does both at once, which you'll see a lot:

\`\`\`lua server
RegisterNetEvent("garage:hello", function(message)
  print("A player said: " .. message)
end)
\`\`\`

:::why Why RegisterNetEvent at all?
\`AddEventHandler\` alone listens to **local** events (from the same side). \`RegisterNetEvent\` says "this event may also come **over the network** from the other side". Without it, FiveM drops network events with that name. It's a safety feature: only events you deliberately open up can be triggered by the other side.
:::

## Sending: client → server

On a client, \`TriggerServerEvent(name, data...)\` sends to the server:

\`\`\`lua norun
-- client/main.lua
TriggerServerEvent("garage:hello", "Hi from Tina's PC!")
\`\`\`

## \`source\`: who sent it?

On the server, inside a handler for a client event, the special variable **\`source\`** holds the **ID of the player who sent it**. The client doesn't send it; the server fills it in, so it can't be faked.

\`\`\`lua server
RegisterNetEvent("garage:hello", function(message)
  local src = source                       -- copy it right away!
  local name = GetPlayerName(src)
  print(name .. " (id " .. src .. ") says: " .. message)
end)
\`\`\`

:::warn Copy \`source\` into a local immediately
\`source\` is a global that FiveM changes every time *any* event arrives. If your handler does a \`Wait(...)\` (or calls something slow, like a database), \`source\` may now belong to a **different player's** event. Always write \`local src = source\` as the very first line and use \`src\` from then on.
:::

## Sending: server → client

The server answers with \`TriggerClientEvent(name, target, data...)\`. The **target** is a player ID, or \`-1\` for **everyone**:

\`\`\`lua server
RegisterNetEvent("garage:requestCount", function()
  local src = source
  local count = 3   -- pretend we looked this up
  TriggerClientEvent("garage:count", src, count)        -- only to the sender
  TriggerClientEvent("chat:addMessage", -1, { args = { "Garage", GetPlayerName(src) .. " checked their garage" } })  -- everyone
end)
\`\`\`

And the client listens just like the server did:

\`\`\`lua norun
-- client/main.lua
RegisterNetEvent("garage:count", function(count)
  print("You have " .. count .. " cars stored")
end)
\`\`\`

## Watch a full round trip

In the real game these two halves live in different files on different computers. This practice block runs **both halves in one place** (in "shared" mode) so you can watch the conversation in the console:

\`\`\`lua shared
-- SERVER half
RegisterNetEvent("garage:requestCount", function()
  local src = source
  print("[server] " .. GetPlayerName(src) .. " asked for their car count")
  TriggerClientEvent("garage:count", src, 3)
end)

-- CLIENT half
RegisterNetEvent("garage:count", function(count)
  print("[client] Server says I have " .. count .. " cars")
end)

TriggerServerEvent("garage:requestCount")   -- client asks...
\`\`\`

Read the 📡 lines in the console: the client sends, the server receives (with \`source\` = 1, Tina), the server answers, the client receives.

## Local events

\`TriggerEvent(name, ...)\` sends an event to handlers on the **same** side (no network). Different resources on the same side use it to talk to each other. That's exactly what \`TriggerEvent("chat:addMessage", ...)\` does on the client: your resource asks the \`chat\` resource to show a message.

## Naming events

Use **\`resourcename:action\`**: \`"tina_garage:storeVehicle"\`, \`"tina_garage:vehicleStored"\`. This prevents clashes: if two resources both used \`"store"\`, both handlers would run for each other's events.

:::do
- Name events \`resource:action\`.
- \`local src = source\` as the first line of every server handler.
- Send only the data the other side needs (small tables, IDs, names), not huge tables every frame.
:::

:::dont
- Don't forget \`RegisterNetEvent\` on the receiving side; the event is silently dropped.
- Don't use \`source\` after a \`Wait\`. Use your \`src\` copy.
- Don't trigger server events every frame from a \`Wait(0)\` loop. Network traffic adds up fast. Send when something *changes*.
:::

=== QUIZ
? Which function sends an event from a client to the server?
+ TriggerServerEvent
- TriggerClientEvent
- TriggerEvent
> TriggerServerEvent sends client → server. TriggerClientEvent sends server → client.
? In a server event handler, what does \`source\` hold?
- The event name
+ The ID of the player who sent the event
- Always 0
> The server fills in source with the sender's player ID.
? Why copy \`source\` into \`local src\` straight away?
+ source can change to another player's ID after a Wait or slow call
- Because source is read-only
- It makes the event faster
> source is a global that changes with every incoming event.
? What target sends a client event to every player?
- 0
+ -1
- "all"
> -1 means everyone.

=== EXERCISE
title: The welcome desk
Write the **server** side of a greeting system:

1. Register the network event \`"desk:hello"\`.
2. In the handler, copy \`source\` into \`local src\` first.
3. Get the player's name with \`GetPlayerName(src)\`.
4. Send \`TriggerClientEvent("desk:reply", src, "Welcome, " .. name .. "!")\` back to **only** that player.

The checker pretends players Bob (id 2) and Tina (id 1) press the desk button.

\`\`\`lua starter
-- server/main.lua
AddEventHandler("desk:hello", function()

end)
\`\`\`

\`\`\`lua solution
-- server/main.lua
RegisterNetEvent("desk:hello", function()
  local src = source
  local name = GetPlayerName(src)
  TriggerClientEvent("desk:reply", src, "Welcome, " .. name .. "!")
end)
\`\`\`

\`\`\`lua test
__check(__isNet("desk:hello"), 'Use RegisterNetEvent("desk:hello", ...) so clients are allowed to send it')
__fakeClient(2, "desk:hello")
__fakeClient(1, "desk:hello")
Wait(200)
local replies = __events("toClient", "desk:reply")
__check(#replies == 2, 'Send exactly one "desk:reply" back for each hello (got ' .. #replies .. ')')
local okBob, okTina = false, false
for _, r in ipairs(replies) do
  if r.target == 2 and r.args[1] == "Welcome, Bob!" then okBob = true end
  if r.target == 1 and r.args[1] == "Welcome, Tina!" then okTina = true end
end
__check(okBob, 'Bob (id 2) should get "Welcome, Bob!" sent to target 2')
__check(okTina, 'Tina (id 1) should get "Welcome, Tina!" sent to target 1')
for _, r in ipairs(replies) do __check(r.target ~= -1, 'Reply only to the sender, not to everyone (-1)') end
\`\`\`

side: server
match: local\\s+src\\s*=\\s*source :: Copy source into a local first: local src = source
hint: \`RegisterNetEvent("desk:hello", function() ... end)\`
hint: Inside: \`local src = source\`, \`local name = GetPlayerName(src)\`
hint: \`TriggerClientEvent("desk:reply", src, "Welcome, " .. name .. "!")\`
`,se=`---
id: security
title: Security: never trust the client
part: FiveM basics
minutes: 35
side: server
summary: Why cheaters can trigger your events with any data, and how the server checks everything.
---
## The uncomfortable truth

Everything that runs on a player's PC can be changed by that player. With cheat tools ("executors"), a cheater can:

- run their **own** Lua code on their client,
- trigger **any** of your network events, as often as they like,
- with **any data** they choose: negative numbers, huge numbers, wrong types, items that don't exist.

They can read all your client and shared files too (those are downloaded to their PC). So for the server, every incoming client event is a message from a **stranger who might be lying**.

:::why Why does this matter so much?
One insecure event can ruin a server's economy in seconds. A classic real-world disaster:

\`TriggerServerEvent("bank:deposit", 99999999)\`

If the server just adds whatever amount it's sent, every cheater is a billionaire, and your honest players' progress is worthless. Server owners lose communities over this.
:::

## The golden rule

**The client may only ASK. The server DECIDES.**

The client says *"I'd like to buy 2 waters"*. The server checks everything and decides the price, whether it's allowed, and what happens. The client never says *"take $4 and give me 2 waters"*.

## An insecure event (don't do this!)

\`\`\`lua shared bad
local money = { [1] = 100 }

RegisterNetEvent("shop:buy", function(item, amount, price)
  local src = source
  money[src] = money[src] - price * amount     -- trusts the client's price!
  print(GetPlayerName(src) .. " bought " .. amount .. " " .. item)
end)

-- Practice only: a cheater's client sends a negative price...
TriggerServerEvent("shop:buy", "water", 1, -1000)
SetTimeout(100, function() print("Tina's money is now: " .. money[1]) end)
\`\`\`

Run it: the "shop" just *gave* Tina $1000. This block runs both halves in one place (shared practice mode) so you can watch the exploit happen.

What's wrong:

1. **The price comes from the client.** A cheater sends price \`0\` (free stuff) or \`-1000\` (the shop *pays them*).
2. **The amount isn't checked.** \`-50\` waters? \`1e9\` waters? \`"lots"\`? (That one crashes the handler.)
3. **The item isn't checked.** \`"admin_gun"\` that doesn't exist in the shop? Accepted.
4. **Nobody checks the money.** Players can go negative.

## The secure version

\`\`\`lua shared good
local Prices = { water = 2, burger = 8, phone = 150 }   -- lives on the SERVER
local money = { [1] = 100 }

RegisterNetEvent("shop:buy", function(item, amount)
  local src = source

  -- 1. Check types: is the data even the right kind?
  if type(item) ~= "string" or type(amount) ~= "number" then return end

  -- 2. Check the item exists (server's own list)
  local price = Prices[item]
  if not price then return end

  -- 3. Check the amount is a sensible whole number
  if amount < 1 or amount > 10 or amount ~= math.floor(amount) then return end

  -- 4. The SERVER calculates the cost and checks the balance
  local cost = price * amount
  if (money[src] or 0) < cost then
    TriggerClientEvent("chat:addMessage", src, { args = { "Shop", "Not enough money" } })
    return
  end

  -- 5. Only now, change things
  money[src] = money[src] - cost
  print(("%s bought %d x %s for $%d"):format(GetPlayerName(src), amount, item, cost))
end)

-- Practice only: a normal request, then three cheats
TriggerServerEvent("shop:buy", "water", 2)        -- fine: costs $4
TriggerServerEvent("shop:buy", "water", -50)      -- refused: negative amount
TriggerServerEvent("shop:buy", "admin_gun", 1)    -- refused: not in the shop
TriggerServerEvent("shop:buy", "phone", 1)        -- refused: not enough money
SetTimeout(200, function() print("Tina's money is now: " .. money[1]) end)
\`\`\`

Notice the pattern: **check, check, check, then act**, using guard clauses from the *Decisions* lesson. Each \`return\` quietly refuses a bad request.

## A security checklist for every server event

1. **Types**: \`type(x) == "number"\` / \`"string"\` / \`"table"\` for every value.
2. **Ranges**: amounts within sensible limits; whole numbers where needed.
3. **Existence**: items, vehicles, jobs looked up in the **server's own** tables.
4. **Permission**: is this player allowed? (job, admin ACE, owns this car?)
5. **Distance**: are they actually *at* the shop/ATM/garage? Check \`#(GetEntityCoords(GetPlayerPed(src)) - shopCoords)\` on the server.
6. **Rate**: can they spam it? Remember the last time each player used it and refuse if too soon.
7. **Never accept prices, rewards, or permissions from the client.**

\`\`\`lua server
local lastUse = {}

RegisterNetEvent("job:collectPay", function()
  local src = source
  local now = GetGameTimer()
  if lastUse[src] and now - lastUse[src] < 60000 then   -- once a minute
    print(GetPlayerName(src) .. " is spamming job:collectPay (ignored)")
    return
  end
  lastUse[src] = now
  print("Paying " .. GetPlayerName(src))
end)
\`\`\`

:::gta What about kicking cheaters?
When a check fails in a way an honest player could never cause (e.g. amount \`-999999\`), you can log it and even \`DropPlayer(src, "reason")\`. Be careful: kick only for things that are *impossible* legitimately, never for things like "not enough money", which happen to normal players.
:::

:::do
- Treat every value from \`TriggerServerEvent\` as possibly fake.
- Keep prices, rewards, and permissions in **server** files only.
- Use \`source\` (copied to \`src\`) to know who's asking; never accept a player ID as event data for "who am I".
- Log suspicious requests with the player's name and identifiers.
:::

:::dont
- Don't make events like \`giveMoney(amount)\`, \`addItem(item, count)\` or \`setJob(job)\` that the client can trigger.
- Don't check permissions only on the client (e.g. "the menu button is hidden for non-cops"); also check on the server.
- Don't put admin lists, webhook URLs or API keys in client/shared files.
:::

=== QUIZ
? A client sends \`TriggerServerEvent("shop:buy", "water", 1, 0)\` where the last value is the price. What should the server do with that price?
- Use it
+ Ignore it and use the server's own price list
- Double it
> The client must never decide prices. The server looks up the price itself.
? Which data from a client event can you trust without checking?
- Numbers
- Item names
+ None of it (only \`source\` is filled in by the server)
> Everything in the event data can be faked. source is set by the server.
? Why check \`amount ~= math.floor(amount)\`?
+ To reject fractions like 1.5 that could cause weird maths or exploits
- It makes the code faster
- Lua requires it
> Amounts of items should be whole numbers. Cheaters will try 0.0001 or 1.5.
? Where should the list of shop prices live?
- In a client file
- In a shared file
+ In a server file (or decided on the server)
> Client and shared files are downloaded to players and they can be modified on the client.

=== EXERCISE
title: Lock down the ATM
This ATM withdraw event is wide open. Make it secure. The handler must:

1. Use \`local src = source\`.
2. Reject (just \`return\`) if \`amount\` is **not a number**, is **less than 1**, is **more than 5000**, or is **not a whole number**.
3. Reject if the player's \`bank[src]\` is less than \`amount\`.
4. Otherwise move the money: \`bank[src] = bank[src] - amount\` and \`cash[src] = cash[src] + amount\`.
5. **Ignore** any extra value the client sends (the starter trusts a \`fee\` from the client; the fee is always **$5**, decided by the server, and is taken from the bank too, so the bank check is \`amount + 5\`).

The checker plays a normal player and several cheaters.

\`\`\`lua starter
local bank = { [1] = 10000, [2] = 300, [3] = 50 }
local cash = { [1] = 0, [2] = 0, [3] = 0 }

RegisterNetEvent("atm:withdraw", function(amount, fee)
  bank[source] = bank[source] - amount - fee
  cash[source] = cash[source] + amount
end)
\`\`\`

\`\`\`lua solution
local bank = { [1] = 10000, [2] = 300, [3] = 50 }
local cash = { [1] = 0, [2] = 0, [3] = 0 }
local FEE = 5

RegisterNetEvent("atm:withdraw", function(amount)
  local src = source
  if type(amount) ~= "number" then return end
  if amount < 1 or amount > 5000 or amount ~= math.floor(amount) then return end
  if (bank[src] or 0) < amount + FEE then return end

  bank[src] = bank[src] - amount - FEE
  cash[src] = cash[src] + amount
end)
\`\`\`

\`\`\`lua test
__fakeClient(1, "atm:withdraw", 1000, 5); Wait(100)
__check(bank[1] == 8995 and cash[1] == 1000, 'Normal withdraw of 1000: bank 10000 -> 8995 (1000 + $5 fee), cash 1000 (got bank ' .. tostring(bank[1]) .. ', cash ' .. tostring(cash[1]) .. ')')
__fakeClient(2, "atm:withdraw", 100, -500); Wait(100)
__check(bank[2] == 195 and cash[2] == 100, 'Cheater sends fee -500: ignore it, the fee is always 5 (Bob should have bank 195, cash 100)')
__fakeClient(3, "atm:withdraw", -1000000); Wait(100)
__check(bank[3] == 50 and cash[3] == 0, 'Negative amount must be rejected')
__fakeClient(3, "atm:withdraw", 40.5); Wait(100)
__check(bank[3] == 50 and cash[3] == 0, 'Fractions like 40.5 must be rejected')
__fakeClient(3, "atm:withdraw", "40"); Wait(100)
__check(bank[3] == 50 and cash[3] == 0, 'Text like "40" must be rejected (check the type)')
__fakeClient(3, "atm:withdraw", 50); Wait(100)
__check(bank[3] == 50 and cash[3] == 0, 'Steve has 50 in the bank: withdrawing 50 + 5 fee must be rejected')
__fakeClient(3, "atm:withdraw", 45); Wait(100)
__check(bank[3] == 0 and cash[3] == 45, 'Withdrawing 45 + 5 fee from 50 is allowed (bank 0, cash 45)')
__fakeClient(1, "atm:withdraw", 6000); Wait(100)
__check(bank[1] == 8995, 'More than 5000 at once must be rejected')
__fakeClient(1, "atm:withdraw", nil); Wait(100)
__check(bank[1] == 8995, 'No amount at all must be rejected without crashing')
\`\`\`

side: server
match: local\\s+src\\s*=\\s*source :: Copy source first: local src = source
match: type\\s*\\(\\s*amount\\s*\\) :: Check the type: type(amount) ~= "number"
hint: Start the handler with \`local src = source\` and \`if type(amount) ~= "number" then return end\`
hint: Whole number check: \`amount ~= math.floor(amount)\`
hint: Use your own fee: \`local FEE = 5\` outside the handler, and remove \`fee\` from the function's parameters.
`,ce=`---
id: natives
title: Natives, entities & vectors
part: FiveM basics
minutes: 30
side: client
summary: What natives are, peds and entities, positions as vector3, measuring distance, and model hashes.
---
## What's a native?

GTA V itself has thousands of built-in functions, written by Rockstar, for everything the game can do: get a position, spawn a car, set health, play an animation. FiveM lets your Lua call them. These are called **natives**.

Native names are in \`PascalCase\` (each word capitalised): \`GetEntityCoords\`, \`SetPedArmour\`, \`CreateVehicle\`. They're listed with explanations at **[docs.fivem.net/natives](https://docs.fivem.net/natives/)**, which you'll use constantly.

:::tip How to read the native docs
Each native page shows its name, the values it takes (with types), what it returns, and whether it works on the client, the server, or both. A native marked **client** doesn't exist in server scripts and vice versa. If you get \`attempt to call a nil value (global 'SomeNative')\`, check the name's spelling and capitals first, then check you're on the right side.
:::

## Entities, peds and IDs

Everything that exists in the game world (people, cars, objects) is an **entity**, and your script refers to it by a **number** (a "handle").

- A **ped** is a person (pedestrian). Your character is a ped.
- \`PlayerPedId()\` (client) gives the handle of **your** ped.
- On the server, \`GetPlayerPed(playerId)\` gives a player's ped.

\`\`\`lua client
local ped = PlayerPedId()
print("My ped handle:", ped)
print("Health:", GetEntityHealth(ped))
print("Armour:", GetPedArmour(ped))
print("In a car?", IsPedInAnyVehicle(ped, false))
\`\`\`

:::why Why is my ped just a number?
The game owns the real ped; your script just holds a "ticket" (the handle) to ask the game about it. That's also why handles can become invalid: if the ped dies and respawns, or a car is deleted, the old number may point to nothing. Use \`DoesEntityExist(entity)\` before using an old handle.
:::

## Positions: vector3

A position in GTA has three numbers: **x** (east/west), **y** (north/south) and **z** (height). FiveM packs them into a **vector3**:

\`\`\`lua client
local pos = GetEntityCoords(PlayerPedId())
print(pos)
print("x:", pos.x, "y:", pos.y, "z:", pos.z)

local bank = vector3(150.26, -1040.20, 29.37)   -- make your own
print("The bank is at", bank)
\`\`\`

You can add and subtract vectors, and multiply them by a number:

\`\`\`lua client
local a = vector3(10.0, 0.0, 0.0)
local b = vector3(4.0, 3.0, 0.0)
print(a + b)
print(a - b)
print(b * 2)
\`\`\`

## Distance: \`#(a - b)\`

The distance between two positions is the **length** of their difference. In FiveM Lua the length of a vector is written with \`#\`, the same symbol as the length of a string or list:

\`\`\`lua client
local me = GetEntityCoords(PlayerPedId())
local shop = vector3(25.7, -1347.3, 29.5)

local distance = #(me - shop)
print(string.format("The shop is %.1f metres away", distance))

if distance < 3.0 then
  print("Press E to shop")
else
  print("Too far away")
end
\`\`\`

:::why Why \`#(a - b)\` instead of a distance native?
There *is* a native (\`GetDistanceBetweenCoords\`), but \`#(a - b)\` is calculated inside Lua without asking the game, so it's **much faster**. In loops that run often, that matters. It's the modern, recommended way.
:::

## Model hashes

Models (cars, peds, weapons, objects) are identified by a **hash**: a number made from the model's name. \`GetHashKey("adder")\` turns the name into that number. FiveM Lua also has a shortcut: write the name between **backtick** characters (the key left of 1 on most keyboards) instead of quotes, and it's turned into the hash before the script even runs. You'll see that in other people's scripts; \`GetHashKey\` does the same job and is easier to read.

\`\`\`lua client
local hash = GetHashKey("adder")
print("adder =", hash)
print("Same every time:", GetHashKey("ADDER") == hash)   -- names aren't case-sensitive
\`\`\`

## Spawning a vehicle (client)

Spawning follows a fixed recipe. The model must be **loaded** before you can use it:

\`\`\`lua client
local function spawnCar(modelName)
  local model = GetHashKey(modelName)
  if not IsModelInCdimage(model) then
    print("No such model: " .. modelName)
    return
  end

  RequestModel(model)
  while not HasModelLoaded(model) do
    Wait(10)                           -- wait (not freeze!) until it's loaded
  end

  local ped = PlayerPedId()
  local pos = GetEntityCoords(ped)
  local car = CreateVehicle(model, pos.x, pos.y, pos.z, GetEntityHeading(ped), true, false)
  SetPedIntoVehicle(ped, car, -1)      -- -1 = driver seat
  SetModelAsNoLongerNeeded(model)      -- free the memory, the car keeps existing
  return car
end

Citizen.CreateThread(function()
  spawnCar("adder")
end)
\`\`\`

Notice: we called \`spawnCar\` inside a thread, because it uses \`Wait\` while the model loads.

:::do
- Look up every native on docs.fivem.net/natives to check its values and side.
- Use \`#(a - b)\` for distances.
- Request models and wait for \`HasModelLoaded\` before spawning; release them after.
- Check \`DoesEntityExist\` before using an old handle.
:::

:::dont
- Don't call client natives (like \`PlayerPedId\`) in server scripts, or server natives (like \`GetPlayers\`) in client scripts.
- Don't spawn things in a loop without a limit. One bug and the server is full of cars.
- Don't trust coordinates sent by a client for important checks; on the server, read the ped's position yourself.
:::

=== QUIZ
? What does \`PlayerPedId()\` give you?
+ A number (handle) that refers to your own character
- Your player name
- Your server ID
> Entities are referred to by handle numbers.
? How do you get the distance between positions a and b in FiveM Lua?
- \`a - b\`
+ \`#(a - b)\`
- \`distance(a, b)\`
> The length (#) of the difference is the distance. It's fast because Lua computes it directly.
? Why use \`Wait(10)\` in \`while not HasModelLoaded(model) do\`?
+ Loading takes a few frames; without Wait the loop would freeze the game
- To make the car faster
- It's optional decoration
> Any waiting loop needs a Wait inside.
? You get \`attempt to call a nil value (global 'GetPlayers')\` in a client script. Why?
- GetPlayers is spelled wrong
+ GetPlayers is a server native; it doesn't exist on the client
- The server is offline
> Natives belong to a side. Check docs.fivem.net/natives.

=== EXERCISE
title: Am I near the garage?
Write a **local function** \`nearGarage(maxDistance)\` that returns \`true\` if the player is within \`maxDistance\` metres of the garage, otherwise \`false\`.

- Get your position with \`GetEntityCoords(PlayerPedId())\`.
- Measure with \`#(position - garage)\`.

The player starts at Legion Square, about **25 m** from the garage. The checker also moves the player around.

\`\`\`lua starter
local garage = vector3(215.0, -785.0, 30.8)

local function nearGarage(maxDistance)
  -- your code
end

print(nearGarage(50))   -- should print true
print(nearGarage(10))   -- should print false
\`\`\`

\`\`\`lua solution
local garage = vector3(215.0, -785.0, 30.8)

local function nearGarage(maxDistance)
  local position = GetEntityCoords(PlayerPedId())
  return #(position - garage) <= maxDistance
end

print(nearGarage(50))   -- should print true
print(nearGarage(10))   -- should print false
\`\`\`

\`\`\`lua test
__check(nearGarage(50) == true, 'About 25 m away: nearGarage(50) should be true')
__check(nearGarage(10) == false, 'About 25 m away: nearGarage(10) should be false')
__setCoords(1, 215.0, -786.0, 30.8)
__check(nearGarage(2) == true, 'Standing 1 m from the garage: nearGarage(2) should be true')
__setCoords(1, 1000.0, 1000.0, 30.0)
__check(nearGarage(500) == false, 'Far away: nearGarage(500) should be false')
\`\`\`

match: #\\s*\\( :: Measure distance with #(a - b)
match: GetEntityCoords :: Read the position with GetEntityCoords(PlayerPedId())
hint: \`local position = GetEntityCoords(PlayerPedId())\`
hint: \`return #(position - garage) <= maxDistance\`
`,le=`---
id: identifiers
title: Player identifiers: who is this, really?
part: FiveM basics
minutes: 30
summary: Server IDs vs permanent identifiers, which one to save data under, ban checks while a player connects, and cleaning up when they leave.
---
## Two kinds of "player ID"

This is one of the most important ideas in FiveM scripting, and one of the most common sources of bugs:

| | Server ID (\`source\`) | Identifier |
|---|---|---|
| Looks like | \`1\`, \`2\`, \`57\` | \`license:1a2b3c...\`, \`discord:1234...\` |
| Lasts | only for **this connection** | **permanently** (same every time they join) |
| Use for | talking to the player right now: events, natives | **saving** data, bans, permissions |

When Tina joins she might be \`1\`. She leaves, Bob joins and gets \`1\`. Tina comes back as \`7\`. If you saved Tina's money under \`1\`, Bob just inherited it.

:::why Why not use the player's name?
Players choose their name in FiveM settings and can change it anytime, to anything, including someone else's name. Names are for **display only**. Never save, ban or give permissions by name.
:::

## The identifier types

\`\`\`lua server
for _, id in ipairs(GetPlayerIdentifiers(1)) do
  print(id)
end
print("license only:", GetPlayerIdentifierByType(1, "license"))
print("Steve's discord:", GetPlayerIdentifierByType(3, "discord"))   -- nil: Steve has no Discord linked
\`\`\`

| Prefix | What it is | Notes |
|---|---|---|
| \`license:\` | Rockstar license | **Always present** on a normal FiveM server. The standard key for saving data. |
| \`license2:\` | a second Rockstar license | Present on newer clients; some frameworks use it. |
| \`fivem:\` | Cfx.re forum account | Only if the player linked it. |
| \`discord:\` | Discord user ID | Only if Discord is running and linked. Great for Discord roles. |
| \`steam:\` | Steam ID (hex) | Only if Steam is running. Not guaranteed. |
| \`xbl:\`, \`live:\` | Xbox / Microsoft | Rare. |
| \`ip:\` | IP address | **Never** save by IP: it changes, and it's personal data. |

:::warn Always handle "not there"
Only \`license\` is reliable. \`GetPlayerIdentifierByType(src, "discord")\` returns \`nil\` for players without Discord. Code like \`local discord = GetPlayerIdentifierByType(src, "discord"):sub(9)\` crashes for them. Check for \`nil\` first.
:::

There's also an older pair: \`GetNumPlayerIdentifiers(src)\` and \`GetPlayerIdentifier(src, i)\`, where \`i\` starts at **0** (one of the few 0-based things in FiveM). \`GetPlayerIdentifierByType\` is simpler and clearer.

## A helper you'll write in every resource

\`\`\`lua server
local function getLicense(src)
  return GetPlayerIdentifierByType(src, "license")
end

local saved = {}   -- pretend database: license → money
RegisterCommand("savecash", function(source, args)
  local license = getLicense(source)
  if not license then print("No license?!") return end
  saved[license] = tonumber(args[1]) or 0
  print(("Saved $%d for %s (%s)"):format(saved[license], GetPlayerName(source), license))
end, false)

ExecuteCommand("savecash 500")
\`\`\`

## When a player connects: \`playerConnecting\`

On the server, \`playerConnecting\` fires while someone is joining, before they're in the game. It's where ban checks and whitelists live. You get \`deferrals\`, which let you **pause** the connection, show a message, and then accept or refuse:

\`\`\`lua server
local Bans = { ["license:0badc0ffee"] = "Money exploit (appeal on Discord)" }

AddEventHandler("playerConnecting", function(name, setKickReason, deferrals)
  local src = source
  deferrals.defer()                -- "hold on, I'm checking"
  Wait(0)                          -- FiveM needs a tick after defer()
  deferrals.update("Checking your ban status, " .. name .. "...")

  local license = GetPlayerIdentifierByType(src, "license")
  if not license then
    deferrals.done("No Rockstar license found. Restart FiveM.")
    return
  end
  local reason = Bans[license]
  if reason then
    deferrals.done("You are banned: " .. reason)   -- done WITH text = refuse
    return
  end
  deferrals.done()                                  -- done with nothing = let them in
end)

-- practice: the checker can simulate players joining
print("Steve:", __connect(3).state)
print("Tina:", __connect(1).state)
\`\`\`

:::warn The temporary ID
During \`playerConnecting\`, \`source\` is a **temporary** ID. The player gets their real server ID only once they've actually joined. So in \`playerConnecting\`, look up identifiers and decide, but don't store things under \`source\`.
:::

## When a player leaves: \`playerDropped\`

\`playerDropped\` fires on the server when a player disconnects (for any reason: quit, crash, kick). \`source\` is still the leaving player, and the reason is passed in. This is the place to **save their data** and **clean up** any tables keyed by their server ID:

\`\`\`lua server
local sessions = { [1] = { joined = 0 }, [2] = { joined = 0 } }

AddEventHandler("playerDropped", function(reason)
  local src = source
  print(("%s left (%s), cleaning up"):format(GetPlayerName(src) or src, reason))
  sessions[src] = nil
end)

__drop(2, "Exiting")
SetTimeout(100, function() print("Bob's session:", sessions[2]) end)
\`\`\`

:::why Why clean up?
Server IDs get reused. If \`sessions[2]\` stays after Bob leaves, the next player who gets ID 2 inherits Bob's session: his cooldowns, his job duty status, his "is in a robbery" flag. Also, tables that only grow are a slow memory leak on a server that runs for days.
:::

:::do
- Save data under the \`license\` identifier.
- Check for \`nil\` before using optional identifiers (discord, steam, fivem).
- Clean up every per-player table in \`playerDropped\`.
- Show a helpful message when refusing a connection.
:::

:::dont
- Don't save anything under the server ID or the name.
- Don't use IP addresses as keys or put them in public logs.
- Don't forget \`deferrals.done()\`: the player waits forever on "connecting" if you never call it.
:::

:::gta In your GTA server
Frameworks wrap all this: ESX has \`xPlayer.identifier\`, QBCore has \`Player.PlayerData.license\` and a \`citizenid\` (one per character, since one license can have several characters). Under the hood they do exactly what you just learned.
:::

=== QUIZ
? Which value should you save a player's money under?
- Their server ID (\`source\`)
- Their name
+ Their \`license\` identifier
> Server IDs change every connection and names can be changed by the player. The license stays the same.
? What does \`GetPlayerIdentifierByType(src, "discord")\` return for a player without Discord?
+ nil
- an empty string
- their license
> Optional identifiers can be missing. Check for nil.
? What happens if your \`playerConnecting\` handler calls \`deferrals.defer()\` but never \`deferrals.done()\`?
- The player is let in after 1 second
+ The player is stuck on the connecting screen
- The server crashes
> done() is what finishes the check. Always call it, on every path.
? Why set \`sessions[src] = nil\` in \`playerDropped\`?
+ So the next player who gets the same server ID doesn't inherit old data (and memory doesn't grow forever)
- FiveM requires it
- To kick the player
> Server IDs are reused. Clean up anything keyed by them.

=== EXERCISE
title: The bouncer and the cleaner
Write two **server** handlers:

1. **\`playerConnecting\`**: \`defer()\`, \`Wait(0)\`, then look up the player's \`license\`. If it's in \`Bans\`, refuse with a message that **contains** \`banned\` and the reason. If they have no license, refuse with any message. Otherwise accept with \`deferrals.done()\`.
2. **\`playerDropped\`**: remove the leaving player's entry from \`onDuty\` (by their server ID) and **print** \`<name> went off duty\`.

The checker connects Steve (banned) and Tina, then makes Bob leave.

\`\`\`lua starter
local Bans = { ["license:0badc0ffee"] = "money exploit" }
local onDuty = { [1] = "mechanic", [2] = "police" }

AddEventHandler("playerConnecting", function(name, setKickReason, deferrals)
  -- check the ban list here
end)

-- add the playerDropped handler here
\`\`\`

\`\`\`lua solution
local Bans = { ["license:0badc0ffee"] = "money exploit" }
local onDuty = { [1] = "mechanic", [2] = "police" }

AddEventHandler("playerConnecting", function(name, setKickReason, deferrals)
  local src = source
  deferrals.defer()
  Wait(0)
  local license = GetPlayerIdentifierByType(src, "license")
  if not license then
    deferrals.done("No license found")
    return
  end
  if Bans[license] then
    deferrals.done("You are banned: " .. Bans[license])
    return
  end
  deferrals.done()
end)

AddEventHandler("playerDropped", function(reason)
  local src = source
  onDuty[src] = nil
  print(GetPlayerName(src) .. " went off duty")
end)
\`\`\`

\`\`\`lua test
local steve = __connect(3)
__check(steve.state == "rejected", 'Sneaky_Steve (license:0badc0ffee) is banned and must be refused (state was ' .. tostring(steve.state) .. ')')
__check(steve.reason and steve.reason:lower():find("banned") and steve.reason:find("money exploit"), 'The refusal message should contain "banned" and the reason "money exploit" (got ' .. tostring(steve.reason) .. ')')
__check(steve.deferred == true, 'Call deferrals.defer() first')
local tina = __connect(1)
__check(tina.state == "accepted", 'Tina is not banned and must be let in with deferrals.done() (state was ' .. tostring(tina.state) .. ')')
__drop(2, "Exiting")
Wait(100)
__check(onDuty[2] == nil, 'When Bob (2) leaves, remove onDuty[2]')
__check(onDuty[1] == "mechanic", 'Only the leaving player is removed: Tina (1) is still on duty')
__check(__printedLine("Bob went off duty"), 'Print: Bob went off duty')
\`\`\`

side: server
match: GetPlayerIdentifierByType :: Use GetPlayerIdentifierByType(src, "license")
match: playerDropped :: Add an AddEventHandler("playerDropped", ...)
hint: Copy the structure from the lesson: \`local src = source\`, \`deferrals.defer()\`, \`Wait(0)\`, then the license lookup.
hint: Refuse with \`deferrals.done("You are banned: " .. Bans[license])\` and \`return\`. Accept with \`deferrals.done()\`.
hint: In playerDropped: \`local src = source\`, \`onDuty[src] = nil\`, then print with \`GetPlayerName(src)\`.
`,ue=`---
id: ace
title: Permissions with ACE
part: FiveM basics
minutes: 30
summary: FiveM's built-in permission system: principals, groups, add_ace and add_principal, restricted commands, and checking permissions in server code.
---
## Why a permission system?

Your server has admins, police, mechanics and normal players. Admins can kick and teleport, police can open the armoury, mechanics can repair for free. You *could* hard-code \`if license == "license:abc" then\`, but then every new admin means editing scripts in five resources.

FiveM has a built-in system called **ACE** (Access Control Entries). You set permissions **once** in \`server.cfg\`, and every resource can ask "is this player allowed to do X?".

## The words

- **Principal**: *who*. A player (\`identifier.license:1a2b...\`), or a **group** (\`group.admin\`, \`group.police\`).
- **Ace** (object): *what*. A name like \`command.kick\`, \`police.armory\`, \`admin\`. Dots make a hierarchy: allowing \`command\` allows \`command.kick\`, \`command.tp\`, and every other \`command.*\`.
- **Allow / deny**: the decision.

## The two \`server.cfg\` lines

\`\`\`lua norun
# what a group may do
add_ace group.admin command allow          # admins may use every restricted command
add_ace group.admin admin allow            # ...and anything your scripts call "admin.*"
add_ace group.police police allow          # police may do "police.*" things

# who is in which group (by permanent identifier!)
add_principal identifier.license:1a2b3c4d5e group.admin    # Tina is an admin
add_principal identifier.license:9f8e7d6c5b group.police   # Bob is police

# groups can be in groups: admins get everything police get
add_principal group.admin group.police
\`\`\`

(In \`server.cfg\`, \`#\` starts a comment.) The practice world is set up with exactly these lines.

:::why Why groups instead of individual players?
When Kim becomes an admin, you add **one** line (\`add_principal identifier.license:... group.admin\`) and she instantly gets every admin permission in every resource. When she steps down, you remove one line. Permissions per player would mean dozens of lines to keep in sync.
:::

## Restricted commands use ACE automatically

The third value of \`RegisterCommand\` is \`restricted\`. When it's \`true\`, FiveM only lets players with the ace \`command.<name>\` run it:

\`\`\`lua server
RegisterCommand("announce", function(source, args, raw)
  local text = table.concat(args, " ")
  TriggerClientEvent("chat:addMessage", -1, { args = { "^1ANNOUNCEMENT", text } })
end, true)   -- restricted: needs command.announce

__command(1, "/announce Server restart in 5 minutes")   -- Tina: admin, allowed
__command(2, "/announce I am the boss now")             -- Bob: police, denied
\`\`\`

## Checking permissions in your own code

For anything that isn't a command (an event, a menu option, a door), ask with \`IsPlayerAceAllowed(src, ace)\` on the **server**:

\`\`\`lua server
RegisterNetEvent("armory:open", function()
  local src = source
  if not IsPlayerAceAllowed(src, "police.armory") then
    print(GetPlayerName(src) .. " tried to open the armory without permission")
    return
  end
  print(GetPlayerName(src) .. " opened the armory")
end)

__fakeClient(2, "armory:open")   -- Bob: group.police has "police", so police.armory is allowed
__fakeClient(3, "armory:open")   -- Steve: no groups
\`\`\`

You make up the ace names for your own scripts (\`police.armory\`, \`mechanic.freerepair\`, \`admin.noclip\`). Use a clear \`area.action\` style, and **document** them in your resource's README so the server owner knows what to add to \`server.cfg\`.

## Changing permissions while the server runs

The same lines can be typed into the **server console**, or run from server code with \`ExecuteCommand\`:

\`\`\`lua server
print("Steve armory before:", IsPlayerAceAllowed(3, "police.armory"))
ExecuteCommand("add_principal identifier.license:0badc0ffee group.police")
print("Steve armory after:", IsPlayerAceAllowed(3, "police.armory"))
\`\`\`

Changes made like this are **not saved**: after a restart only \`server.cfg\` counts. Put permanent permissions in \`server.cfg\`.

## Deny beats allow

\`add_ace group.police police.armory deny\` would block the armory for police even though \`police\` is allowed: a more specific deny wins. Use deny sparingly; it makes permissions harder to reason about.

:::do
- Give permissions to **groups**, and put players into groups by \`identifier.license:...\`.
- Use \`restricted = true\` for admin commands.
- Check \`IsPlayerAceAllowed\` on the **server** in every event that does something privileged.
- Name your aces \`area.action\` and document them.
:::

:::dont
- Don't add players by **name** or server ID (\`player.1\`): names can be faked, IDs change.
- Don't check permissions only on the client (hiding a menu button). Always check on the server too.
- Don't give \`add_ace group.admin command allow\` to a group lots of people are in: \`command\` includes every restricted command, like \`quit\` and \`stop\`.
:::

:::gta In your GTA server
txAdmin and frameworks use ACE too. QBCore checks \`QBCore.Functions.HasPermission(src, "admin")\`, which is ACE underneath; ESX uses groups like \`group.admin\`. The built-in \`command.*\` aces also control console commands like \`ensure\`, \`stop\` and \`restart\` when players type them in F8.
:::

=== QUIZ
? \`add_ace group.admin command allow\` gives admins what?
+ Every restricted command (\`command.kick\`, \`command.tp\`, ...)
- Only a command called "command"
- Nothing until they relog
> Aces are hierarchical: allowing "command" allows everything under "command.".
? How should you add Tina to the admin group?
- \`add_principal player.Tina group.admin\`
+ \`add_principal identifier.license:<her license> group.admin\`
- \`add_ace Tina admin allow\`
> Use a permanent identifier. Names can be changed by anyone.
? What does the \`true\` in \`RegisterCommand("kick", fn, true)\` do?
+ Only players with the ace \`command.kick\` can run it
- Makes the command run twice
- Hides it from the console
> restricted = true makes FiveM check command.<name> before your function runs.
? A menu button for the armory is hidden for non-police. Is that enough?
- Yes, they can't click it
+ No, the server event must also check \`IsPlayerAceAllowed\`
> Cheaters can trigger the event directly. The server must check.

=== EXERCISE
title: The mechanics' workshop
Set up permissions for mechanics and protect their free-repair event:

1. Use \`ExecuteCommand\` to run two permission lines: give **\`group.mechanic\`** the ace **\`mechanic\`** (allow), and add **Sneaky_Steve** (\`identifier.license:0badc0ffee\`) to \`group.mechanic\`.
2. Register a **restricted** command \`repairall\` that prints \`All vehicles repaired\`.
3. Register a net event \`mechanic:freeRepair\` that checks \`IsPlayerAceAllowed(src, "mechanic.repair")\`. If allowed, print \`Free repair for <name>\`; if not, print \`<name> is not a mechanic\`.

The checker: Tina and Bob try \`/repairall\` (admin only), then Steve and Bob trigger the event.

\`\`\`lua starter
-- 1. permissions


-- 2. restricted command


-- 3. the event
RegisterNetEvent("mechanic:freeRepair", function()
  print("Free repair for " .. GetPlayerName(source))
end)
\`\`\`

\`\`\`lua solution
ExecuteCommand("add_ace group.mechanic mechanic allow")
ExecuteCommand("add_principal identifier.license:0badc0ffee group.mechanic")

RegisterCommand("repairall", function(source, args)
  print("All vehicles repaired")
end, true)

RegisterNetEvent("mechanic:freeRepair", function()
  local src = source
  if not IsPlayerAceAllowed(src, "mechanic.repair") then
    print(GetPlayerName(src) .. " is not a mechanic")
    return
  end
  print("Free repair for " .. GetPlayerName(src))
end)
\`\`\`

\`\`\`lua test
__check(__ace(3, "mechanic.repair"), 'Steve should have mechanic.repair after your two permission lines (add_ace group.mechanic mechanic allow + add_principal identifier.license:0badc0ffee group.mechanic)')
__check(not __ace(2, "mechanic.repair"), 'Bob must NOT be a mechanic')
__check(__commandExists("repairall"), 'Register the command "repairall"')
__clearOutput()
__command(2, "/repairall"); Wait(50)
__check(not __printed("All vehicles repaired"), 'Bob is not an admin: /repairall must be restricted (third value true)')
__command(1, "/repairall"); Wait(50)
__check(__printed("All vehicles repaired"), 'Tina is an admin: /repairall should work for her')
__fakeClient(3, "mechanic:freeRepair"); Wait(100)
__check(__printedLine("Free repair for Sneaky_Steve"), 'Steve is a mechanic: print "Free repair for Sneaky_Steve"')
__fakeClient(2, "mechanic:freeRepair"); Wait(100)
__check(__printedLine("Bob is not a mechanic"), 'Bob is not: print "Bob is not a mechanic"')
__check(not __printedLine("Free repair for Bob"), 'Bob must not get a free repair')
\`\`\`

side: server
match: IsPlayerAceAllowed :: Check IsPlayerAceAllowed in the event
hint: \`ExecuteCommand("add_ace group.mechanic mechanic allow")\` and \`ExecuteCommand("add_principal identifier.license:0badc0ffee group.mechanic")\`
hint: Restricted command: \`RegisterCommand("repairall", function(source, args) ... end, true)\`
hint: In the event: \`local src = source\`, then \`if not IsPlayerAceAllowed(src, "mechanic.repair") then ... return end\`
`,de=`---
id: config
title: Config files & shared code
part: FiveM basics
minutes: 25
side: shared
summary: Moving settings into config.lua, the Config table, what belongs in shared vs server-only config.
---
## Why a config file?

Imagine your garage script has the garage location, the price to store a car, and the allowed jobs written all over \`client/main.lua\` and \`server/main.lua\`. Now you want to move the garage. You have to hunt through every file, and you'll miss one.

A **config file** collects all the settings in one place, so you (or a non-coder helping run the server) can change them **without touching the logic**.

## The Config table

The FiveM convention is a single global table called \`Config\`, in \`config.lua\`, loaded as a **shared_script** so both sides can read it:

\`\`\`lua
-- config.lua
Config = {}

Config.Debug = false
Config.StorePrice = 100
Config.AllowedJobs = { mechanic = true, police = true }

Config.Garages = {
  { name = "Legion Square", coords = vector3(215.0, -785.0, 30.8), blip = true },
  { name = "Sandy Shores",  coords = vector3(1737.6, 3710.2, 34.1), blip = false },
}

print("Config loaded with " .. #Config.Garages .. " garages")
\`\`\`

:::why Why is \`Config\` global, when we always say "use local"?
Because it's one of the rare things that **must** be shared between files: \`config.lua\` creates it, and \`client/main.lua\` and \`server/main.lua\` read it. Since each file is a separate chunk, a \`local\` in config.lua would be invisible to the others. One clearly named global (capital C, so it stands out) is the accepted exception. Everything else stays local.
:::

## Using the config

Your scripts read the values instead of hard-coding them:

\`\`\`lua
Config = {
  StorePrice = 100,
  AllowedJobs = { mechanic = true, police = true },
  Garages = {
    { name = "Legion Square", coords = vector3(215.0, -785.0, 30.8) },
    { name = "Sandy Shores",  coords = vector3(1737.6, 3710.2, 34.1) },
  },
}

local function canUseGarage(job)
  return Config.AllowedJobs[job] == true
end

for _, garage in ipairs(Config.Garages) do
  print(garage.name .. " at " .. tostring(garage.coords))
end
print("Mechanic allowed?", canUseGarage("mechanic"))
print("Taxi allowed?", canUseGarage("taxi"))
print("Storing costs $" .. Config.StorePrice)
\`\`\`

Now moving a garage or adding a third one is a one-line change in config.lua, and the loop picks it up automatically.

## Debug switch

A \`Config.Debug\` flag lets you keep useful prints without spamming the console on the live server:

\`\`\`lua
Config = { Debug = true }

local function debugPrint(...)
  if Config.Debug then
    print("[tina_garage]", ...)
  end
end

debugPrint("Player entered the garage zone")
Config.Debug = false
debugPrint("This one is hidden")
\`\`\`

## What NOT to put in a shared config

Remember (the *Resources* lesson): **shared and client files are downloaded to every player's PC.** Anyone can open them. So a shared config must only hold things that are fine to be public: positions, labels, colours, which keys to use.

Secret or sensitive things go in a **server-only** config file:

\`\`\`lua norun
-- fxmanifest.lua
shared_script 'config.lua'          -- public settings
server_scripts {
  'server/config_server.lua',       -- secrets: Discord webhooks, admin lists, reward amounts
  'server/main.lua',
}
\`\`\`

:::warn Prices: public or private?
Showing prices in a menu (client) is fine. But the **server** must use its own price when charging (security lesson). It's okay for the price to be in shared config *as long as the server reads it from its own copy* of \`Config\`, never from a value the client sends. Because the server loads config.lua itself, a cheater editing their copy changes nothing on the server.
:::

:::do
- Put every "magic number" (prices, distances, timers, coordinates) in \`Config\`.
- Add a short comment next to each setting explaining what it does and its units: \`Config.Radius = 3.0 -- metres\`.
- Keep secrets in a server-only file.
:::

:::dont
- Don't put Discord webhooks, API keys, passwords or admin identifiers in \`config.lua\` if it's shared.
- Don't let the client send config values back to the server to be used ("the price is 5").
- Don't create lots of other globals; \`Config\` is the exception, not the rule.
:::

=== QUIZ
? Why is config.lua usually a shared_script?
+ So client and server files can both read the same settings
- So it stays secret
- Because FiveM requires one
> Shared scripts load on both sides.
? Why is \`Config\` written as a global?
+ It's created in config.lua but read by other files, which can't see config.lua's locals
- Globals are faster
- local doesn't work with tables
> Each file is its own chunk. A shared global is the deliberate exception.
? Where should a Discord webhook URL go?
- In config.lua (shared)
- In client/main.lua
+ In a server-only file
> Shared and client files are sent to every player.
? A cheater edits their downloaded config.lua to make cars cost $0. What happens on a well-written server?
+ Nothing: the server uses its own copy of the config when charging
- Cars become free for everyone
- The server crashes
> The server loads config.lua itself and never takes prices from the client.

=== EXERCISE
title: Configurable payday
Create the config and use it:

1. Make a global \`Config\` table with \`Config.Salary = { police = 300, ems = 250, mechanic = 200 }\` and \`Config.DefaultSalary = 50\`.
2. Write a **local function** \`getSalary(job)\` that returns the salary for that job from \`Config.Salary\`, or \`Config.DefaultSalary\` if the job isn't listed.
3. Print \`getSalary("police")\` and \`getSalary("taxi")\`.

The checker will change the config values to make sure you **read** them instead of typing numbers.

\`\`\`lua starter
-- 1. Config here


-- 2. getSalary here


print(getSalary("police"))
print(getSalary("taxi"))
\`\`\`

\`\`\`lua solution
Config = {}
Config.Salary = { police = 300, ems = 250, mechanic = 200 }
Config.DefaultSalary = 50

local function getSalary(job)
  return Config.Salary[job] or Config.DefaultSalary
end

print(getSalary("police"))
print(getSalary("taxi"))
\`\`\`

\`\`\`lua test
__check(type(Config) == "table" and type(Config.Salary) == "table", 'Create a global Config table with Config.Salary')
__check(getSalary("police") == 300 and getSalary("ems") == 250 and getSalary("mechanic") == 200, 'getSalary should return the Config.Salary value for each job')
__check(getSalary("taxi") == 50, 'An unlisted job should get Config.DefaultSalary (50)')
Config.Salary.police = 999
Config.DefaultSalary = 7
__check(getSalary("police") == 999, 'getSalary must READ Config.Salary (the checker changed police to 999)')
__check(getSalary("taxi") == 7, 'getSalary must READ Config.DefaultSalary (the checker changed it to 7)')
\`\`\`

hint: \`Config = {}\` then \`Config.Salary = { police = 300, ems = 250, mechanic = 200 }\`
hint: The \`or\` trick from the *Decisions* lesson: \`return Config.Salary[job] or Config.DefaultSalary\`
`,fe=`---
id: saving
title: Saving data: JSON & KVP
part: FiveM basics
minutes: 30
side: server
summary: Turning tables into text with JSON, storing it with KVP, loading it safely, and when to use a real database.
---
## The problem: everything is forgotten

Variables live in memory. When the resource restarts (or the server does), every table is gone: cash, saved cars, stats. To keep data you have to **store it somewhere** and **load it back** when the script starts.

Storage can only hold **text** (or simple numbers). Your data is in **tables**. So we need a way to turn a table into text and back. That's **JSON**.

## JSON: tables as text

JSON is a standard text format for data that almost every program understands. FiveM gives you \`json.encode\` (table → text) and \`json.decode\` (text → table):

\`\`\`lua
local player = { name = "Tina", cash = 500, cars = { "adder", "sultan" } }

local text = json.encode(player)
print(text)
print(type(text))           -- string: now it can be saved

local back = json.decode(text)
print(back.name, back.cash, back.cars[2])
\`\`\`

:::warn What JSON can't store
JSON knows numbers, strings, true/false, lists and dictionaries. It can **not** store functions, and a \`vector3\` doesn't come back as a vector: save positions as plain numbers (\`{ x = pos.x, y = pos.y, z = pos.z }\`) and rebuild them with \`vector3(d.x, d.y, d.z)\` after loading. Mixed tables (some numbered keys, some named) may not come back exactly the same. Keep saved data simple: plain values and plain tables.
:::

## KVP: FiveM's built-in mini storage

**KVP** (Key-Value Pairs) is a small storage area each resource gets for free. You save a value under a **key** (a name) and read it back later, even after restarts:

\`\`\`lua
SetResourceKvp("motd", "Welcome to Unbound RP!")          -- save text
SetResourceKvpInt("restarts", GetResourceKvpInt("restarts") + 1)  -- save a whole number

print(GetResourceKvpString("motd"))
print("Restarts counted:", GetResourceKvpInt("restarts"))
print(GetResourceKvpString("does_not_exist"))             -- nil when missing
\`\`\`

Press Run several times: the restart counter keeps going up, because this practice world keeps KVP data in your browser, like a real server keeps it on disk. (The Playground has a button to wipe it.)

| Function | Saves / returns |
|---|---|
| \`SetResourceKvp(key, text)\` | text (strings only) |
| \`SetResourceKvpInt(key, n)\` / \`GetResourceKvpInt(key)\` | whole numbers (0 if missing) |
| \`SetResourceKvpFloat(key, n)\` / \`GetResourceKvpFloat(key)\` | decimals |
| \`GetResourceKvpString(key)\` | text, or \`nil\` if missing |
| \`DeleteResourceKvp(key)\` | removes the key |

## Saving a table: JSON + KVP together

\`\`\`lua
local function saveStats(id, stats)
  SetResourceKvp("stats:" .. id, json.encode(stats))
end

local function loadStats(id)
  local text = GetResourceKvpString("stats:" .. id)
  if not text then
    return { kills = 0, deaths = 0 }      -- nothing saved yet: start fresh
  end
  local ok, data = pcall(json.decode, text)
  if not ok or type(data) ~= "table" then
    return { kills = 0, deaths = 0 }      -- corrupted: start fresh instead of crashing
  end
  return data
end

local stats = loadStats("license:1a2b3c4d5e")
stats.kills = stats.kills + 1
saveStats("license:1a2b3c4d5e", stats)
print("Kills so far:", stats.kills)
\`\`\`

Two important habits there:

1. **A default when nothing is saved** (first time a player joins).
2. **pcall around decode**, so one broken save can't crash the whole resource (the *Scope & errors* lesson).

## Which key for which player?

Player IDs like \`1\` or \`2\` are **temporary**: they're handed out when someone connects and reused after they leave. Never save data under the server ID! Use a permanent **identifier**, like their license:

\`\`\`lua
local id = GetPlayerIdentifierByType(1, "license")
print("Save Tina's data under:", id)
\`\`\`

## Server or client KVP?

KVP exists on both sides, but they are **completely different storages**:

- **Server KVP** is on the server. Use it for anything that matters: money, items, ownership.
- **Client KVP** is on the **player's PC**. Only for harmless preferences (HUD position, "don't show this tip again"). A player can edit or delete it.

## When to use a real database

KVP is great for small things and for learning. Bigger servers use a **database** (MySQL/MariaDB), usually through the \`oxmysql\` resource, for player accounts, inventories and vehicles. The ideas are exactly the same as here: decide what to save, save it on the **server**, use permanent identifiers, load with defaults, and don't save every second.

:::do
- Save on the server, keyed by a permanent identifier (license).
- Load with a default and \`pcall(json.decode, ...)\`.
- Save when data changes, every few minutes, or when the player leaves (\`playerDropped\` event).
- Prefix keys so they're organised: \`"stats:" .. license\`.
:::

:::dont
- Don't save under the temporary server ID.
- Don't trust client KVP for anything valuable.
- Don't save in a \`Wait(0)\` loop; disk writes are slow.
- Don't store functions or huge tables; keep saved data lean.
:::

=== QUIZ
? What does \`json.encode(t)\` do?
+ Turns a table into a text (string) that can be saved
- Saves the table to disk
- Encrypts the table
> encode = table → text, decode = text → table.
? What does \`GetResourceKvpString("missing")\` return when nothing was saved?
- ""
- 0
+ nil
> Missing text keys give nil, so always provide a default.
? Why not save player data under their server ID (like 3)?
+ Server IDs are temporary and get reused by other players
- Numbers can't be keys
- It's slower
> Use a permanent identifier like license:... instead.
? Where should a player's money be saved?
- Client KVP
+ Server side (server KVP or a database)
> The client can be edited by the player.

=== EXERCISE
title: The playtime tracker
Write two **local functions** for the server:

1. \`loadPlaytime(license)\` → reads KVP key \`"playtime:" .. license\` with \`GetResourceKvpString\`, decodes it with **pcall + json.decode**, and returns the table. If nothing is saved, or the text is broken, return \`{ minutes = 0 }\`.
2. \`addPlaytime(license, minutes)\` → loads, adds \`minutes\` to \`.minutes\`, saves back with \`SetResourceKvp(key, json.encode(data))\`, and returns the new total.

Then call \`addPlaytime("license:1a2b3c4d5e", 30)\` twice and print the result (should end at \`60\`).

\`\`\`lua starter
local function loadPlaytime(license)
  -- load from KVP
end

local function addPlaytime(license, minutes)
  -- load, add, save, return total
end

print(addPlaytime("license:1a2b3c4d5e", 30))
print(addPlaytime("license:1a2b3c4d5e", 30))
\`\`\`

\`\`\`lua solution
local function loadPlaytime(license)
  local text = GetResourceKvpString("playtime:" .. license)
  if not text then return { minutes = 0 } end
  local ok, data = pcall(json.decode, text)
  if not ok or type(data) ~= "table" or type(data.minutes) ~= "number" then
    return { minutes = 0 }
  end
  return data
end

local function addPlaytime(license, minutes)
  local data = loadPlaytime(license)
  data.minutes = data.minutes + minutes
  SetResourceKvp("playtime:" .. license, json.encode(data))
  return data.minutes
end

print(addPlaytime("license:1a2b3c4d5e", 30))
print(addPlaytime("license:1a2b3c4d5e", 30))
\`\`\`

\`\`\`lua test
__check(__printedLine("60"), 'After adding 30 twice the total should print 60')
local saved = __kvp("playtime:license:1a2b3c4d5e")
__check(type(saved) == "string" and saved:find("60"), 'The KVP key "playtime:license:1a2b3c4d5e" should hold JSON text with 60 minutes')
__check(loadPlaytime("license:nobody").minutes == 0, 'A player with no save should load { minutes = 0 }')
SetResourceKvp("playtime:license:broken", "{{{ not json")
__check(loadPlaytime("license:broken").minutes == 0, 'Broken saved text should load { minutes = 0 } instead of crashing')
__check(addPlaytime("license:9f8e7d6c5b", 15) == 15, 'A new player adding 15 minutes should return 15')
\`\`\`

match: pcall :: Decode with pcall so broken data can't crash the script
match: json\\.encode :: Save the table as text with json.encode
hint: Key: \`local key = "playtime:" .. license\`
hint: Load: \`local text = GetResourceKvpString(key)\`, then \`if not text then return { minutes = 0 } end\`
hint: Save: \`SetResourceKvp(key, json.encode(data))\`
`,pe=`---
id: performance
title: Performance: a fast, friendly server
part: FiveM intermediate
minutes: 30
side: client
summary: Distance-based sleeping, caching, not spamming the network, and measuring with resmon.
---
## Why performance is your job

Every client script runs on **every** player's PC, all the time. If your shop script wastes 0.5 ms per frame, every single player loses FPS, even when they're nowhere near a shop. Ten sloppy resources and the server feels laggy. Good performance is mostly a few habits.

## Measure first: resmon

In game, open F8 and type \`resmon 1\`. You'll see each resource's **CPU time per frame**:

- \`0.00–0.02 ms\` → excellent (idle resource)
- \`0.05–0.10 ms\` → okay while something is happening
- \`0.20+ ms\` while idle → something's wrong (usually a \`Wait(0)\` loop)

On the server console, \`profiler\` tools exist too, but resmon catches most problems.

## Habit 1: sleep when nothing's happening

You met this in the Threads lesson. It's the most important habit, so here's the full version:

\`\`\`lua client good
local shops = {
  vector3(25.7, -1347.3, 29.5),
  vector3(-48.5, -1757.5, 29.4),
  vector3(1135.8, -982.2, 46.4),
}

Citizen.CreateThread(function()
  while true do
    local sleep = 1500                         -- far from everything: check rarely
    local pos = GetEntityCoords(PlayerPedId())  -- ask the game ONCE per round

    for _, shop in ipairs(shops) do
      local dist = #(pos - shop)
      if dist < 30.0 then sleep = 500 end      -- getting close: check more often
      if dist < 5.0 then
        sleep = 0                              -- right there: every frame
        -- DrawMarker(...) and the E-key check would go here
      end
    end

    Wait(sleep)
  end
end)
\`\`\`

Far from every shop (where players spend 99% of their time), this loop costs almost nothing.

:::why Why three levels?
Checking every 1.5 s is plenty to notice "you're getting close". From 30 m you'll arrive in a few seconds, so check every 0.5 s. Only within a few metres does the marker need drawing every frame. The loop speeds up just in time.
:::

## Habit 2: don't repeat expensive work

\`\`\`lua client bad
Citizen.CreateThread(function()
  for i = 1, 3 do
    Wait(0)
    for _, shop in ipairs({ vector3(1, 2, 3), vector3(4, 5, 6) }) do   -- builds a new table every frame!
      local d = #(GetEntityCoords(PlayerPedId()) - shop)                 -- asks the game every time
    end
  end
end)
\`\`\`

\`\`\`lua client good
local shops = { vector3(1, 2, 3), vector3(4, 5, 6) }   -- built ONCE, outside the loop

Citizen.CreateThread(function()
  for i = 1, 3 do
    Wait(0)
    local pos = GetEntityCoords(PlayerPedId())   -- asked ONCE per frame
    for _, shop in ipairs(shops) do
      local d = #(pos - shop)
    end
  end
end)
\`\`\`

Rules of thumb:

- Create tables, strings and vectors **outside** loops when they don't change.
- Call a native **once** and store the result in a local, instead of calling it again and again.
- Use \`local\` variables (faster than globals, the *Variables* lesson).

## Habit 3: one loop, not many

Ten separate \`Wait(0)\` threads cost more than one thread that does ten things. If several features need per-frame work in the same place, combine them, or better, only run the per-frame part while it's needed.

## Habit 4: be gentle with the network

Each \`TriggerServerEvent\` is a network message. Players' upload and the server's processing are limited.

:::do
- Send events when something **changes** ("I entered the zone"), not continuously.
- Send small data: an ID or a name, not the whole inventory.
- On the server, use \`Wait\` in long loops over all players too, and don't do heavy work every tick.
:::

:::dont
- Don't \`TriggerServerEvent\` inside a \`Wait(0)\` loop.
- Don't \`TriggerClientEvent(..., -1, ...)\` (everyone) with big tables often.
- Don't save to a database or file every second; save on change, on a timer (every few minutes), or when the player leaves.
:::

## Habit 5: stop threads you don't need

A thread doesn't have to live forever. When the job's done, let the function end:

\`\`\`lua client
local robberyActive = true
SetTimeout(3000, function() robberyActive = false end)   -- robbery ends after 3 s

Citizen.CreateThread(function()
  while robberyActive do
    Wait(1000)
    print("Robbery in progress...")
  end
  print("Robbery over, thread ends and costs nothing now")
end)
\`\`\`

=== QUIZ
? Players are far from all shops 99% of the time. What should your shop loop do then?
+ Sleep for a long time (e.g. Wait(1000) or more)
- Wait(0) to be ready
- Stop the resource
> Only speed up when the player is close.
? Why call \`GetEntityCoords(PlayerPedId())\` once per round instead of for every shop?
+ It's the same answer each time; asking the game repeatedly wastes time
- It only works once per frame
- To get different positions
> Store results in a local and reuse them.
? What does \`resmon 1\` show?
+ How much CPU time each resource uses per frame
- How many players are online
- The server's RAM size
> Use it to spot resources that waste time while idle.
? Which is a network-friendly habit?
- Sending the player's position to the server every frame
+ Sending an event only when something changes
- Broadcasting the whole inventory to everyone every second
> Events cost network and server time. Send small, meaningful messages.

=== EXERCISE
title: Fix the hungry loop
This client loop checks the distance to the ATM **every frame**, forever, even when the player is far away. That's wasteful.

Rewrite it with the **sleep pattern**:

- default \`local sleep = 1000\` at the start of each round
- only if the distance is **less than 10.0**, set \`sleep = 0\`
- \`Wait(sleep)\` at the end of each round
- keep printing \`Near ATM\` when close (only when close)

The player starts far away. The checker simulates 10 seconds, then walks the player to the ATM.

\`\`\`lua starter
local atm = vector3(147.6, -1035.8, 29.3)

Citizen.CreateThread(function()
  while true do
    Wait(0)
    local pos = GetEntityCoords(PlayerPedId())
    if #(pos - atm) < 10.0 then
      print("Near ATM")
    end
  end
end)
\`\`\`

\`\`\`lua solution
local atm = vector3(147.6, -1035.8, 29.3)

Citizen.CreateThread(function()
  while true do
    local sleep = 1000
    local pos = GetEntityCoords(PlayerPedId())
    if #(pos - atm) < 10.0 then
      sleep = 0
      print("Near ATM")
    end
    Wait(sleep)
  end
end)
\`\`\`

\`\`\`lua test
__setCoords(1, 1500.0, 1500.0, 30.0)
Wait(10000)
local th = __threads()
local wakes = 0
for _, t in ipairs(th) do wakes = wakes + t.wakes end
__check(#th >= 1, 'Keep the thread')
__check(wakes <= 15, 'While far away, the loop should only wake about once per second (it woke ' .. wakes .. ' times in 10 s)')
__check(not __printed("Near ATM"), 'Only print "Near ATM" when actually near')
__setCoords(1, 148.0, -1036.0, 29.3)
Wait(3000)
__check(__printed("Near ATM"), 'When the player walks up to the ATM, it should print "Near ATM"')
local wakes2 = 0
for _, t in ipairs(__threads()) do wakes2 = wakes2 + t.wakes end
__check(wakes2 - wakes >= 20, 'When near (under 10 m), the loop should run every frame (sleep = 0)')
\`\`\`

side: client
duration: 10000
match: local\\s+sleep :: Use a local sleep variable
match: Wait\\s*\\(\\s*sleep\\s*\\) :: Wait(sleep) at the end of the loop
hint: At the top of the loop: \`local sleep = 1000\`
hint: Inside the \`if\` (when close): \`sleep = 0\`
hint: Replace \`Wait(0)\` at the top with \`Wait(sleep)\` at the bottom.
`,me=`---
id: debugging
title: Debugging FiveM scripts
part: FiveM intermediate
minutes: 30
summary: Where output goes, a debug switch for prints, printing tables, the "nothing happens" checklist, reading SCRIPT ERRORs, and finding slow code with resmon.
---
## Debugging is a skill, not bad luck

Every scripter spends more time **finding** problems than writing code. The good news: FiveM problems fall into a handful of patterns, and a calm routine finds almost all of them. This lesson is that routine.

## Step 0: look in the right place

| Output from | Appears in |
|---|---|
| server script \`print\` and errors | the **server console** (txAdmin → Live Console, or the FXServer window) |
| client script \`print\` and errors | the player's **F8 console** in game |
| NUI (HTML/JS) \`console.log\` | the NUI devtools: open \`http://localhost:13172\` in a browser while the game runs |

Half of all "my print doesn't work" problems are looking at the wrong console.

## Step 1: the "nothing happens at all" checklist

No error, no output, nothing. Check in this order:

1. **Is the resource started?** In the server console: \`ensure tina_garage\`. Watch for \`Started resource tina_garage\`, or an error telling you why not.
2. **Is the file in the manifest**, on the **right side**? A file not listed never runs.
3. Put \`print("server/main.lua loaded")\` as the **first line** of the file. No print → the file isn't loading (back to 1 and 2).
4. **Event names match exactly?** \`"garage:store"\` vs \`"garage:Store"\` vs \`"garage:stor"\` are three different events. Copy-paste names, don't retype them.
5. Net event from a client? The server needs \`RegisterNetEvent\` for it.
6. Did you **restart** after editing? \`ensure tina_garage\` reloads it (client files are re-downloaded too).

## Step 2: prints with a switch

Prints are the most useful debugging tool there is. But a live server shouldn't spam the console, so make prints you can **switch off**:

\`\`\`lua
local DEBUG = true
local RESOURCE = GetCurrentResourceName()

local function dbg(...)
  if not DEBUG then return end
  local parts = {}
  for i = 1, select("#", ...) do
    local v = select(i, ...)
    parts[#parts + 1] = type(v) == "table" and json.encode(v) or tostring(v)
  end
  print(("[%s] %s"):format(RESOURCE, table.concat(parts, " ")))
end

dbg("player data:", { name = "Tina", cash = 500 }, "nil value:", nil)
\`\`\`

Why it's built like this:

- The **prefix** shows which resource printed it, among the noise of 100 resources.
- **Tables** go through \`json.encode\`, because \`print(t)\` only shows \`table: 0x55d1...\`, which tells you nothing.
- \`tostring\` makes \`nil\` and booleans safe to print.
- One switch: set \`DEBUG = false\` (or read it from config / a convar like \`GetConvar("tina_debug", "false") == "true"\`) and every debug print goes quiet.

## Step 3: read the SCRIPT ERROR

\`\`\`
SCRIPT ERROR: @tina_garage/server/main.lua:42: attempt to index a nil value (local 'vehicle')
> handler (@tina_garage/server/main.lua:42)
\`\`\`

The first line is the message you already know how to read: file, **line 42**, what, which name. The lines below (\`>\`) are the traceback: which function was running and what called it. Go to line 42, then print \`vehicle\` just before it, and work out **why** it's nil (a failed lookup? a wrong key? data from a client that didn't send it?).

## Step 4: trace the conversation

For events, print on **both** sides with the data:

\`\`\`lua
RegisterNetEvent("garage:store", function(plate)
  local src = source
  print(("[garage] store request from %s, plate=%s (%s)"):format(src, tostring(plate), type(plate)))
end)

TriggerServerEvent("garage:store", "TINA 01")
TriggerServerEvent("garage:store", 1234)     -- printing the TYPE catches this kind of bug
\`\`\`

If the client says "sent" and the server never says "received", it's the name or \`RegisterNetEvent\`. If the server receives the wrong thing, the bug is in what the client sends.

## Step 5: cut the problem in half

When a big script misbehaves and you have no idea where: comment out half (put \`--[[\` and \`]]\` around it). Still broken? The problem is in the other half. Repeat. Ten rounds narrows 1000 lines down to one. It's boring and it always works.

## Step 6: slow, not broken? resmon

\`resmon 1\` in F8 shows each resource's time per frame (see the *Performance* lesson). A resource at \`0.30 ms\` while you're standing still almost always has a \`while true do ... Wait(0)\` loop that doesn't need to run every frame. The practice world flags those for you after each run.

:::do
- Read the full error line, then go to that line number first.
- Print **values and types** around the problem, on both sides of an event.
- Keep a \`DEBUG\` switch and turn it off on the live server.
- Change one thing at a time and re-test.
:::

:::dont
- Don't guess and rewrite big chunks. Find the line first.
- Don't print whole tables with \`print(t)\`; use \`json.encode(t)\`.
- Don't leave chatty debug prints running on a live server (or ever print player IPs/tokens to public logs).
:::

:::gta Useful console commands
\`ensure name\` / \`restart name\` / \`stop name\` (resources), \`refresh\` (find new resource folders), \`resmon 1\` (F8, performance), \`quit\` (server). On txAdmin you can also restart a single resource from the web panel.
:::

=== QUIZ
? A client script prints "hello" but you don't see it in txAdmin's live console. Why?
+ Client prints show in the player's F8 console, not the server console
- print doesn't work in client scripts
- You need to restart the server
> Server and client have separate consoles.
? What's the first thing to add when a file seems to do nothing at all?
- More events
+ A print on the very first line, to see if the file loads
- A Wait(0) loop
> If that print doesn't appear, the problem is the manifest or the resource not starting.
? Why print \`type(plate)\` as well as \`plate\` in an event handler?
+ The value might look right but be the wrong type (number vs string)
- type() makes the event faster
- FiveM requires it
> \`1234\` and \`"1234"\` print the same but behave differently.
? How do you see the contents of a table in a print?
- \`print(t)\`
+ \`print(json.encode(t))\`
- \`print(#t)\`
> print(t) only shows a memory address. json.encode turns it into readable text.

=== EXERCISE
title: A debug helper and a silent bug
1. Write \`dbg(...)\` that does **nothing** when \`DEBUG\` is false, and otherwise prints one line starting with \`[tina_garage]\` followed by all values separated by spaces. Tables must be printed with \`json.encode\`, everything else with \`tostring\`. Keep the line \`local DEBUG = true\` (the checker also runs your code with it set to false).
2. The garage below has a **silent bug**: nothing is ever stored and there's no error. Find it and fix it (don't rename the handler's event). Use \`dbg\` in the handler to print the plate.

The final output must contain \`Stored TINA 01\`.

\`\`\`lua starter
local DEBUG = true

local function dbg(...)
  print(...)
end

local stored = {}
RegisterNetEvent("garage:storeVehicle", function(plate)
  table.insert(stored, plate)
  print("Stored " .. plate)
end)

TriggerServerEvent("garage:storevehicle", "TINA 01")
\`\`\`

\`\`\`lua solution
local DEBUG = true

local function dbg(...)
  if not DEBUG then return end
  local parts = {}
  for i = 1, select("#", ...) do
    local v = select(i, ...)
    parts[#parts + 1] = type(v) == "table" and json.encode(v) or tostring(v)
  end
  print("[tina_garage] " .. table.concat(parts, " "))
end

local stored = {}
RegisterNetEvent("garage:storeVehicle", function(plate)
  dbg("store request, plate =", plate)
  table.insert(stored, plate)
  print("Stored " .. plate)
end)

TriggerServerEvent("garage:storeVehicle", "TINA 01")
\`\`\`

\`\`\`lua test
Wait(200)
__check(__printedLine("Stored TINA 01"), 'The vehicle should be stored: print "Stored TINA 01" (compare the two event names letter by letter)')
__clearOutput()
dbg("a", 1, nil, true, { x = 1 })
__check(__printedLine('[tina_garage] a 1 nil true {"x":1}'), 'dbg("a", 1, nil, true, { x = 1 }) should print exactly: [tina_garage] a 1 nil true {"x":1}')
__check(__printedMatch("^%[tina_garage%]") ~= nil, 'dbg lines start with [tina_garage]')
\`\`\`

variant: local DEBUG = true => local DEBUG = false :: (function() __clearOutput() dbg("hidden") return not __printed("hidden") end)() :: With DEBUG = false, dbg must print nothing
match: dbg\\s*\\( :: Use dbg(...) somewhere in the handler
hint: The silent bug: event names are case-sensitive. Compare \`storeVehicle\` and \`storevehicle\`.
hint: dbg: \`if not DEBUG then return end\`, then loop \`for i = 1, select("#", ...) do\` so nils are kept.
hint: Build a list of pieces and print \`"[tina_garage] " .. table.concat(parts, " ")\`.
`,he=`---
id: exports
title: Exports: resources working together
part: FiveM intermediate
minutes: 30
summary: Offering functions to other resources with exports, calling them with the colon, resource names with dashes, checking a resource is running, and what to expose.
---
## Why exports?

Each resource has its own private world: its globals are invisible to other resources (see the *Modules* lesson). That's good for safety, but resources need to cooperate: your shop needs the **bank** resource to take money; your garage needs the **fuel** resource to know how full a car is.

**Exports** are a resource's public functions: "other resources may call these". They're a direct function call, not a network message, so they're fast and return a value immediately.

## Offering an export

\`\`\`lua server
local fuel = { ["TINA 01"] = 64 }

exports("GetFuel", function(plate)
  return fuel[plate] or 0
end)

-- inside the same resource you can call it like anyone else would:
print(exports.my_first_resource:GetFuel("TINA 01"))
\`\`\`

\`exports("Name", function ... end)\` registers it. Other resources call \`exports.<resourceName>:<Name>(...)\`.

:::warn Exports are per side
An export registered in a **server** script exists only for other **server** scripts; a client export only for other client scripts on the same player's PC. There's no cross-side export: client ↔ server still means events.
:::

You can also export with the manifest (\`server_export 'GetFuel'\` pointing at a global function), but the \`exports(...)\` call is clearer and keeps the function local.

## Calling an export: the colon matters

The practice world has two fake resources: \`practice_bank\` (server: \`GetMoney\`, \`AddMoney\`, \`RemoveMoney\`) and \`practice-notify\` (\`Notify\`).

\`\`\`lua server
local cash = exports.practice_bank:GetMoney(1)
print("Tina has", cash)

local ok = exports.practice_bank:RemoveMoney(1, 300)
print("Paid 300?", ok, "now", exports.practice_bank:GetMoney(1))

print(exports.practice_bank.GetMoney(1))   -- DOT: wrong! watch the warning
\`\`\`

:::why Why the colon?
\`exports.practice_bank\` is a small object, and FiveM's export call expects to be called **on** it, like a method. With a colon, Lua passes that object as a hidden first value, and FiveM throws it away, so the export gets exactly \`(1)\`. With a **dot**, your \`1\` becomes the hidden value and gets thrown away, so the export receives **nothing**. No error, just a wrong answer. Always: **colon**.
:::

## Names with dashes need brackets

\`exports.practice-notify:Notify(...)\` is maths to Lua (\`practice\` minus \`notify\`). Use square brackets with the name as text:

\`\`\`lua server
exports["practice-notify"]:Notify("Your car has been stored", "success")
\`\`\`

## Is the other resource even running?

If the resource you call isn't started, the call errors. For required resources, list them in \`dependencies\` (so yours won't start without them). For **optional** integrations, check first:

\`\`\`lua server
local function notify(text)
  if GetResourceState("practice-notify") == "started" then
    exports["practice-notify"]:Notify(text)
  else
    print("[fallback] " .. text)        -- still works without the notify resource
  end
end

notify("Hello!")
print(GetResourceState("some_missing_resource"))
\`\`\`

\`GetResourceState\` returns \`"started"\`, \`"stopped"\`, \`"starting"\`, \`"missing"\` and a few others.

## What should you export?

:::do
- Export a **small**, stable set of functions other resources really need: \`GetFuel\`, \`SetFuel\`, \`IsOnDuty\`.
- **Validate** inputs inside exports, just like events: another resource may pass \`nil\` or wrong types.
- Return clear results: a value, or \`true\` / \`false, "reason"\`.
- Document your exports in a README: name, values, what it returns.
:::

:::dont
- Don't export your internal tables (\`exports("GetAllData", function() return data end)\`); others could change them. Return copies or specific values.
- Don't put powerful actions (give money, set job) in **client** exports. Any client-side code on that PC, including a cheater's injected Lua, can call client exports.
- Don't use a dot to call exports.
:::

:::gta In your GTA server
You'll use exports all the time: \`exports.ox_inventory:AddItem(src, "water", 2)\`, \`exports.oxmysql:...\` (older style), \`exports["qb-core"]:GetCoreObject()\`. Framework and library docs list their exports and which side they're on.
:::

=== QUIZ
? How do you call the export \`GetFuel\` from resource \`tina_fuel\`?
+ \`exports.tina_fuel:GetFuel(plate)\`
- \`exports.tina_fuel.GetFuel(plate)\`
- \`TriggerEvent("tina_fuel:GetFuel", plate)\`
> Exports are called with a colon on exports.<resource>.
? A resource is called \`lb-phone\`. How do you reach its exports?
- \`exports.lb-phone:Fn()\`
+ \`exports["lb-phone"]:Fn()\`
- \`exports.lb_phone:Fn()\`
> A dash would be read as minus. Brackets with the name as a string work for any name.
? Can a client script call an export registered in a server script?
- Yes, exports work everywhere
+ No, exports are per side; use events between client and server
> Each side has its own exports.
? Why must a client export not give money?
+ Any client-side code on that PC (including cheats) can call it
- Client exports are slower
- Money can only be a string on the client
> Client-side anything is under the player's control.

=== EXERCISE
title: Fuel station, paid through the bank
Build a small **server** fuel station:

1. A local table \`fuel\` already holds fuel per plate.
2. Export \`GetFuel(plate)\`: returns the fuel for that plate, or \`0\` if unknown.
3. Export \`SetFuel(plate, amount)\`: if \`plate\` isn't a string or \`amount\` isn't a number, return \`false\`. Otherwise clamp \`amount\` to **0..100**, store it, return \`true\`.
4. A command \`/refuel <plate>\` that costs **$100**: first check \`GetResourceState("practice_bank") == "started"\`, then take the money with \`exports.practice_bank:RemoveMoney(source, 100)\` (colon!). If that returns \`true\`, set the plate's fuel to 100 and print \`Refuelled <plate>\`; otherwise print \`Payment failed\`.

The checker refuels as Tina (has money) and as Steve (has $0).

\`\`\`lua starter
local fuel = { ["TINA01"] = 20, ["STEVE1"] = 5 }

exports("GetFuel", function(plate)
  return fuel[plate]
end)
\`\`\`

\`\`\`lua solution
local fuel = { ["TINA01"] = 20, ["STEVE1"] = 5 }

exports("GetFuel", function(plate)
  return fuel[plate] or 0
end)

exports("SetFuel", function(plate, amount)
  if type(plate) ~= "string" or type(amount) ~= "number" then return false end
  fuel[plate] = math.max(0, math.min(100, amount))
  return true
end)

RegisterCommand("refuel", function(source, args)
  local plate = args[1]
  if not plate then print("Usage: /refuel <plate>") return end
  if GetResourceState("practice_bank") ~= "started" then print("Bank offline") return end
  if exports.practice_bank:RemoveMoney(source, 100) then
    fuel[plate] = 100
    print("Refuelled " .. plate)
  else
    print("Payment failed")
  end
end, false)
\`\`\`

\`\`\`lua test
local E = exports.my_first_resource
local okGet, v = pcall(function() return E:GetFuel("TINA01") end)
__check(okGet and v == 20, 'GetFuel("TINA01") should return 20')
local okU, u = pcall(function() return E:GetFuel("NOPE") end)
__check(okU and u == 0, 'GetFuel of an unknown plate should return 0 (not nil)')
local okS, s1 = pcall(function() return E:SetFuel("TINA01", 150) end)
__check(okS and s1 == true and E:GetFuel("TINA01") == 100, 'SetFuel("TINA01", 150) should return true and clamp to 100')
local okS2, s2 = pcall(function() return E:SetFuel("TINA01", "full") end)
__check(okS2 and s2 == false and E:GetFuel("TINA01") == 100, 'SetFuel with a non-number amount returns false and changes nothing')
pcall(function() E:SetFuel("TINA01", -5) end)
__check(E:GetFuel("TINA01") == 0, 'SetFuel("TINA01", -5) should clamp to 0')
__command(1, "/refuel TINA01"); Wait(100)
__check(__bank(1) == 2400, 'Tina had $2500 in practice_bank: /refuel should take $100 (now ' .. tostring(__bank(1)) .. ')')
__check(E:GetFuel("TINA01") == 100 and __printedLine("Refuelled TINA01"), 'After paying, TINA01 has 100 fuel and "Refuelled TINA01" is printed')
__command(3, "/refuel STEVE1"); Wait(100)
__check(__printedLine("Payment failed") and E:GetFuel("STEVE1") == 5, 'Steve has $0: print "Payment failed" and do not refuel')
\`\`\`

side: server
match: GetResourceState :: Check GetResourceState("practice_bank") first
match: exports\\.practice_bank:RemoveMoney :: Call exports.practice_bank:RemoveMoney with a colon
nomatch: exports\\.practice_bank\\.RemoveMoney :: Use a colon, not a dot, to call exports
hint: \`return fuel[plate] or 0\` fixes GetFuel.
hint: SetFuel clamp: \`fuel[plate] = math.max(0, math.min(100, amount))\`
hint: In the command: \`if exports.practice_bank:RemoveMoney(source, 100) then ... else print("Payment failed") end\`
`,ge=`---
id: callbacks
title: Callbacks: asking the server a question
part: FiveM intermediate
minutes: 35
summary: Why events can't return values, the request/response pattern with IDs, waiting with promises, timeouts, and the callback helpers in ox_lib and frameworks.
---
## The problem: events are one-way

\`TriggerServerEvent("bank:getBalance")\` sends a message. It does **not** return an answer; the function returns immediately, long before the server has even received it. But clients need answers all the time: *"How much money do I have?" "Which cars are in my garage?" "Can I afford this?"*

The solution is a **callback**: the client asks with one event, the server answers with another, and the client **waits** for that specific answer.

:::why Why not just read the answer from a global?
Two reasons. **Timing**: the answer arrives some milliseconds later, so you need to *wait* for it, not hope it's there. **Mix-ups**: if the client asks two questions quickly (open the garage while the bank app refreshes), two answers come back. Without a way to tell them apart, the garage might show the bank balance.
:::

## Step 1: request and response events with an ID

Give each question a unique **request ID**. The server sends the ID back with the answer, so the client knows which question it belongs to:

\`\`\`lua
-- SERVER side
local cash = { [1] = 500 }
RegisterNetEvent("bank:request", function(requestId)
  local src = source
  TriggerClientEvent("bank:response", src, requestId, cash[src] or 0)
end)

-- CLIENT side
RegisterNetEvent("bank:response", function(requestId, balance)
  print(("answer to request #%d: $%d"):format(requestId, balance))
end)
TriggerServerEvent("bank:request", 1)
TriggerServerEvent("bank:request", 2)
\`\`\`

(Practice mode runs both sides in one place. In a real resource the top half is in \`server/main.lua\` and the bottom half in \`client/main.lua\`.)

## Step 2: wait for the answer with a promise

A **promise** is a box that will hold a value *later*. \`Citizen.Await(p)\` pauses the current thread until someone calls \`p:resolve(value)\`, then gives you the value. Combine it with the ID and a table of "questions waiting for answers":

\`\`\`lua
-- SERVER
local cash = { [1] = 500 }
RegisterNetEvent("bank:request", function(requestId)
  local src = source
  TriggerClientEvent("bank:response", src, requestId, cash[src] or 0)
end)

-- CLIENT
local pending, nextId = {}, 0

RegisterNetEvent("bank:response", function(requestId, balance)
  local p = pending[requestId]
  if not p then return end        -- unknown or already answered: ignore
  pending[requestId] = nil
  p:resolve(balance)
end)

local function getBalance()
  nextId = nextId + 1
  local id = nextId
  local p = promise.new()
  pending[id] = p
  TriggerServerEvent("bank:request", id)
  return Citizen.Await(p)          -- pauses THIS thread until resolved
end

CreateThread(function()
  local balance = getBalance()
  print("My balance is $" .. balance)
end)
\`\`\`

Now \`getBalance()\` *feels* like a normal function that returns a value, even though a network round trip happens inside. That's the whole trick behind every callback library.

:::warn Await needs a thread
\`Citizen.Await\` pauses, so (like \`Wait\`) it only works inside a thread, an event handler or a command. Calling it at the top level of a file errors.
:::

## Step 3: never wait forever

What if the server never answers (the resource restarted, a bug, the server ignored a bad request)? Your thread would hang forever. Add a **timeout** that resolves with \`nil\`:

\`\`\`lua norun
local function getBalance()
  nextId = nextId + 1
  local id = nextId
  local p = promise.new()
  pending[id] = p
  SetTimeout(5000, function()
    if pending[id] then pending[id] = nil p:resolve(nil) end   -- give up after 5 s
  end)
  TriggerServerEvent("bank:request", id)
  return Citizen.Await(p)
end
\`\`\`

The caller then handles "no answer": \`local balance = getBalance() if not balance then print("Bank unavailable") return end\`.

## Security doesn't change

A callback request is still a client event. Cheaters can send it with any data, as often as they like. On the server: use \`source\` for "who", validate every value, rate-limit expensive ones, and **never** answer with things that player shouldn't see (another player's inventory, admin data).

:::do
- Use callbacks when the client needs an answer; use plain events when it doesn't.
- Match answers to questions with a request ID.
- Always add a timeout.
- Validate callback requests on the server exactly like any other event.
:::

:::dont
- Don't call a callback every frame. Ask once, keep the answer, ask again when something changes.
- Don't return secrets or other players' data just because a client asked.
- Don't use \`Wait(100)\` loops checking a global "until the answer arrives"; that's what promises are for.
:::

:::gta In your GTA server
You rarely write this by hand: libraries do it for you, built exactly like this lesson.

\`\`\`lua norun
-- ox_lib
lib.callback.register("bank:getBalance", function(source) return cash[source] or 0 end)   -- server
local balance = lib.callback.await("bank:getBalance", false)                              -- client

-- QBCore
QBCore.Functions.CreateCallback("bank:getBalance", function(source, cb) cb(cash[source] or 0) end)
QBCore.Functions.TriggerCallback("bank:getBalance", function(balance) print(balance) end)
\`\`\`

Now you know what's inside, so when one hangs or returns the wrong thing, you know where to look.
:::

=== QUIZ
? What does \`TriggerServerEvent\` return?
- The server's answer
+ Nothing useful: the message is sent and the function returns immediately
- true when the server has handled it
> Events are one-way. That's why callbacks exist.
? Why does each request get an ID?
+ So the client can match each answer to the right question
- The server requires numbered events
- To make it faster
> Several questions can be in flight at once; the ID says which answer belongs to which.
? What does \`Citizen.Await(p)\` do?
+ Pauses the current thread until the promise is resolved, then returns its value
- Waits exactly 1 second
- Sends the promise to the server
> It's like Wait, but it waits for a value instead of a time.
? Why add a timeout to a callback?
- To make the server answer faster
+ So the thread doesn't wait forever if no answer ever comes
- FiveM requires it
> Without one, a lost answer freezes that thread forever.

=== EXERCISE
title: Build your own callback system
The **server** half is done. Write the **client** half:

1. A \`pending\` table and a \`nextId\` counter.
2. A net event \`cb:response\` with \`(id, result)\`: find \`pending[id]\`; if it exists, remove it from \`pending\` and resolve it with \`result\`.
3. \`awaitCallback(name, ...)\`: makes a new ID and promise, stores it in \`pending\`, starts a **3000 ms** timeout that resolves \`nil\` if it's still pending, sends \`TriggerServerEvent("cb:request", name, id, ...)\`, and returns \`Citizen.Await(p)\`.

The checker asks \`getMoney\` and \`getJob\` at the same time from two threads, then asks for a callback that doesn't exist (the server never answers that one).

\`\`\`lua preamble
-- (server half, already written)
local Callbacks = {
  getMoney = function(src) return 500 end,
  getJob = function(src, detailed) if detailed then return { name = "mechanic", grade = 2 } end return "mechanic" end,
}
RegisterNetEvent("cb:request", function(name, id, ...)
  local src = source
  local fn = Callbacks[name]
  if type(fn) ~= "function" then return end   -- unknown: no answer at all
  local args = table.pack(...)
  SetTimeout(name == "getMoney" and 300 or 100, function()   -- getMoney is slow, so answers come back out of order
    TriggerClientEvent("cb:response", src, id, fn(src, table.unpack(args, 1, args.n)))
  end)
end)
\`\`\`

\`\`\`lua starter
local pending = {}
local nextId = 0

local function awaitCallback(name, ...)
  TriggerServerEvent("cb:request", name, 1, ...)
  return nil
end
\`\`\`

\`\`\`lua solution
local pending = {}
local nextId = 0

RegisterNetEvent("cb:response", function(id, result)
  local p = pending[id]
  if not p then return end
  pending[id] = nil
  p:resolve(result)
end)

local function awaitCallback(name, ...)
  nextId = nextId + 1
  local id = nextId
  local p = promise.new()
  pending[id] = p
  SetTimeout(3000, function()
    if pending[id] then
      pending[id] = nil
      p:resolve(nil)
    end
  end)
  TriggerServerEvent("cb:request", name, id, ...)
  return Citizen.Await(p)
end
\`\`\`

\`\`\`lua test
local money, job, detail, missing = "unset", "unset", "unset", "unset"
CreateThread(function() money = awaitCallback("getMoney") end)
CreateThread(function() job = awaitCallback("getJob") end)
CreateThread(function() detail = awaitCallback("getJob", true) end)
CreateThread(function() missing = awaitCallback("doesNotExist") end)
Wait(1000)
__check(money == 500, 'awaitCallback("getMoney") should return 500 (got ' .. tostring(money) .. ')')
__check(job == "mechanic", 'awaitCallback("getJob") should return "mechanic", even though getMoney was asked first and answers later (got ' .. tostring(job) .. ')')
__check(type(detail) == "table" and detail.grade == 2, 'Extra values are passed on: awaitCallback("getJob", true) returns the detailed table')
__check(missing == "unset", 'Before 3 s, the unanswered callback is still waiting')
Wait(3000)
__check(missing == nil, 'After the 3000 ms timeout, an unanswered callback returns nil (got ' .. tostring(missing) .. ')')
local leftover = 0 for _ in pairs(pending) do leftover = leftover + 1 end
__check(leftover == 0, 'Every answered or timed-out request is removed from pending (' .. leftover .. ' left)')
\`\`\`

duration: 8000
match: promise\\.new :: Use promise.new()
match: Citizen\\.Await :: Return Citizen.Await(p)
match: SetTimeout :: Add a timeout with SetTimeout
hint: Each call: \`nextId = nextId + 1\`, \`local id = nextId\`, \`local p = promise.new()\`, \`pending[id] = p\`.
hint: The response handler: \`local p = pending[id] if not p then return end pending[id] = nil p:resolve(result)\`
hint: Timeout: \`SetTimeout(3000, function() if pending[id] then pending[id] = nil p:resolve(nil) end end)\`
`,_e=`---
id: statebags
title: State bags: shared values on players & entities
part: FiveM intermediate
minutes: 30
summary: Player(src).state, Entity(ent).state and GlobalState, replicated vs local values, reacting to changes, and why the server must own anything important.
---
## The problem state bags solve

Some facts need to be known by **many** scripts and **many** players, and stay true until they change: *Is Bob cuffed? Is Tina on duty? Who owns this car? What's the server weather?* With events you'd have to send them to everyone, re-send to players who join later, and keep a copy everywhere.

**State bags** are little key/value stores attached to a player, an entity (car, ped, object) or the whole server. Set a value once and FiveM keeps it synced to everyone who needs it, including players who join later.

## The three kinds

| Bag | Write it like | For |
|---|---|---|
| Player | \`Player(src).state\` (server), \`LocalPlayer.state\` (client, yourself) | job, on duty, cuffed, dead |
| Entity | \`Entity(vehicle).state\` | owner, fuel, locked, plate info |
| Global | \`GlobalState\` | weather, police online count, event active |

## Setting and reading

\`\`\`lua server
-- set: key, value, replicated?
Player(1).state:set("job", "mechanic", true)
Player(2).state:set("onDuty", true, true)
GlobalState.policeOnline = 1          -- assigning on the server = replicated

-- read: just like a table
print(Player(1).state.job, Player(2).state.onDuty, GlobalState.policeOnline)
print(Player(3).state.job)             -- never set → nil
\`\`\`

\`:set(key, value, true)\` with **replicated = true** sends the value to clients too. With \`false\`, it stays on the side that set it (useful for server-only notes). Values can be numbers, strings, booleans or tables (anything that can be serialized: no functions).

:::why Why \`:set\` with a colon?
\`state\` is an object, and \`set\` is its method (see the *Objects* lesson). \`Player(1).state.set(...)\` with a dot would pass the wrong values. Assigning (\`state.job = "x"\`) also works and replicates by default; \`:set\` makes the replicated choice explicit.
:::

## Reacting to changes

Instead of checking a value in a loop, let FiveM tell you when it changes:

\`\`\`lua server
AddStateBagChangeHandler("onDuty", nil, function(bagName, key, value)
  local src = GetPlayerFromStateBagName(bagName)   -- "player:2" → 2
  print(("%s is now %s"):format(GetPlayerName(src), value and "ON duty" or "off duty"))
end)

Player(2).state:set("onDuty", true, true)
Player(2).state:set("onDuty", false, true)
\`\`\`

The handler gets the **bag name** (\`"player:2"\`, \`"entity:12345"\`, \`"global"\`), the key and the new value. \`GetPlayerFromStateBagName\` / \`GetEntityFromStateBagName\` turn the bag name back into an ID.

## The security rule

By default, a **client may set state on its own player and on entities it controls**, and those values replicate. A cheater can therefore write \`LocalPlayer.state:set("job", "police", true)\`. So:

- **The server sets** anything that matters: job, duty, permissions, ownership, money-related flags.
- **The server never trusts** a state value that a client could have written for decisions about money, items or permissions. Read from your **server-side** data (or values only your server sets) instead.
- Client-set state is fine for **cosmetic** things: "is typing", "current radio station", "walking style".

\`\`\`lua client
LocalPlayer.state:set("isTyping", true, true)    -- harmless: fine from the client
LocalPlayer.state:set("job", "police", true)     -- a cheater could do this: the server must not believe it
\`\`\`

:::do
- Use state bags for **persistent facts** many scripts need (duty, cuffed, vehicle owner, weather).
- Set important values on the **server** only.
- Use change handlers instead of polling loops.
- Keep values small: a job name, not the whole inventory.
:::

:::dont
- Don't use state bags for one-off actions ("play this sound now"): that's what events are for.
- Don't put secrets or big tables in replicated state; every client receives them.
- Don't let the server make decisions based on values a client can set.
:::

:::gta In your GTA server
Lots of popular resources use state bags: \`Player(src).state.isDead\` for ambulance jobs, \`Entity(veh).state.fuel\` for fuel scripts, \`GlobalState.weather\` for weather sync. Open the F8 console and you can inspect them, which is also a reminder that **players can see replicated values**.
:::

=== QUIZ
? Which bag would you use for "how many police are online", visible to everyone?
- \`Player(src).state\`
- \`Entity(veh).state\`
+ \`GlobalState\`
> GlobalState holds server-wide values everyone can read.
? What does the third value \`true\` in \`state:set("job", "mechanic", true)\` mean?
+ Replicate it: send it to clients too
- Make it permanent across restarts
- Lock it so nobody can change it
> replicated = true syncs the value. State bags are not saved across restarts.
? A server event gives a discount if \`Player(src).state.job == "police"\`. Who set that value matters because...
+ A client could set its own player state, so the server should only trust values the server itself set
- State bags are always encrypted
- It doesn't matter
> Clients can write to their own bag. Important values must come from the server.
? Instead of a loop checking \`Player(src).state.cuffed\` every second, you should...
- Use Wait(0)
+ Use AddStateBagChangeHandler to react when it changes
- Use GlobalState
> Change handlers run exactly when a value changes, costing nothing in between.

=== EXERCISE
title: Police duty with state bags
Write the **server** side of a duty system:

1. A local \`onDutyCount\` (starts at 0).
2. Command \`/duty\`: only players with the ace \`police\` may use it (check \`IsPlayerAceAllowed(source, "police")\`; otherwise print \`Not police\` and stop).
3. It **toggles** the player's \`onDuty\` state (\`Player(source).state.onDuty\`): set it with \`:set("onDuty", newValue, true)\`.
4. Keep \`onDutyCount\` correct (add 1 when going on duty, subtract 1 when going off) and copy it into \`GlobalState.policeOnDuty\`.

Tina (admin, also in the police group) and Bob (police) can go on duty; Steve can't.

\`\`\`lua starter
local onDutyCount = 0

RegisterCommand("duty", function(source, args)
  Player(source).state:set("onDuty", true, true)
end, false)
\`\`\`

\`\`\`lua solution
local onDutyCount = 0

RegisterCommand("duty", function(source, args)
  local src = source
  if not IsPlayerAceAllowed(src, "police") then
    print("Not police")
    return
  end
  local state = Player(src).state
  local newValue = not state.onDuty
  state:set("onDuty", newValue, true)
  if newValue then onDutyCount = onDutyCount + 1 else onDutyCount = onDutyCount - 1 end
  GlobalState.policeOnDuty = onDutyCount
end, false)
\`\`\`

\`\`\`lua test
__command(2, "/duty"); Wait(50)
__check(__state("player:2", "onDuty") == true, 'Bob types /duty: Player(2).state.onDuty should become true')
__check(__state("global", "policeOnDuty") == 1, 'GlobalState.policeOnDuty should be 1 after Bob goes on duty')
__command(1, "/duty"); Wait(50)
__check(__state("global", "policeOnDuty") == 2, 'Tina goes on duty too: policeOnDuty should be 2')
__command(2, "/duty"); Wait(50)
__check(__state("player:2", "onDuty") == false, 'Bob types /duty again: onDuty toggles back to false')
__check(__state("global", "policeOnDuty") == 1, 'Bob off duty: policeOnDuty back to 1')
__command(3, "/duty"); Wait(50)
__check(__state("player:3", "onDuty") == nil and __printed("Not police"), 'Steve is not police: print "Not police" and do not set his state')
__check(__state("global", "policeOnDuty") == 1, 'Steve must not change the count')
\`\`\`

side: server
match: IsPlayerAceAllowed :: Check the police permission with IsPlayerAceAllowed
match: :set\\s*\\(\\s*["']onDuty["'] :: Use state:set("onDuty", value, true)
hint: Toggle: \`local newValue = not Player(src).state.onDuty\` (nil counts as false, so the first /duty gives true).
hint: After changing the count: \`GlobalState.policeOnDuty = onDutyCount\`
`,ve=`---
id: database
title: Databases with oxmysql (the basics)
part: FiveM intermediate
minutes: 40
summary: Tables, rows and columns, the oxmysql functions, ? placeholders and SQL injection, awaiting results, and the load-cache-save pattern that keeps servers fast.
---
## Why a database?

KVP (the *Saving data* lesson) is great for small things. A real server has thousands of players, each with money, characters, vehicles, inventory, and you need to **search** that data (*"all cars owned by Tina"*, *"the 10 richest players"*). That's what a **database** is for. FiveM servers almost always use **MySQL/MariaDB** through the **oxmysql** resource.

## Tables, rows, columns

A database holds **tables** (nothing to do with Lua tables). Each table is like a spreadsheet: **columns** are the fields, **rows** are the records. The practice world has a \`users\` table:

| id | identifier | name | money | bank | job |
|---|---|---|---|---|---|
| 1 | license:1a2b3c4d5e | Tina | 500 | 2500 | mechanic |
| 2 | license:9f8e7d6c5b | Bob | 200 | 800 | police |
| 3 | license:0badc0ffee | Sneaky_Steve | 50 | 0 | unemployed |

plus \`owned_vehicles\` (owner, plate, model, stored) and \`bans\` (identifier, reason). It's fresh every run.

## SQL in four sentences

You talk to the database in **SQL**, a separate little language written as Lua strings:

- \`SELECT money, bank FROM users WHERE identifier = ?\` → read columns from matching rows.
- \`UPDATE users SET money = ? WHERE identifier = ?\` → change matching rows.
- \`INSERT INTO owned_vehicles (owner, plate, model) VALUES (?, ?, ?)\` → add a row.
- \`DELETE FROM owned_vehicles WHERE plate = ?\` → remove matching rows.

Each \`?\` is a **placeholder**, filled in **in order** from the parameters table you pass alongside.

## The oxmysql functions

| Function | Returns | Use for |
|---|---|---|
| \`MySQL.query.await(sql, params)\` | list of rows (SELECT) or a result table | general queries |
| \`MySQL.single.await(sql, params)\` | the first row, or \`nil\` | "get this one player" |
| \`MySQL.scalar.await(sql, params)\` | one value from the first row | "just their bank balance" |
| \`MySQL.insert.await(sql, params)\` | the new row's \`id\` | adding rows |
| \`MySQL.update.await(sql, params)\` | how many rows changed | UPDATE / DELETE |

\`\`\`lua server
local license = GetPlayerIdentifierByType(1, "license")

local row = MySQL.single.await("SELECT name, money, bank, job FROM users WHERE identifier = ?", { license })
print(row.name, row.money, row.bank, row.job)

local bank = MySQL.scalar.await("SELECT bank FROM users WHERE identifier = ?", { license })
print("bank:", bank)

local changed = MySQL.update.await("UPDATE users SET money = money + ? WHERE identifier = ?", { 100, license })
print("rows changed:", changed)

local id = MySQL.insert.await("INSERT INTO owned_vehicles (owner, plate, model) VALUES (?, ?, ?)", { license, "TINA 02", "adder" })
print("new vehicle row id:", id)

local cars = MySQL.query.await("SELECT plate, model FROM owned_vehicles WHERE owner = ?", { license })
for _, car in ipairs(cars) do print(car.plate, car.model) end
\`\`\`

:::why Why \`.await\`?
A database is a separate program, often on another machine. Asking it takes time (milliseconds, sometimes more). \`.await\` **pauses your thread** until the answer arrives, then continues with the result, just like \`Citizen.Await\` in the *Callbacks* lesson. So, like \`Wait\`, it only works inside a thread, event handler or command. The rest of the server keeps running meanwhile. (Without \`.await\` you can pass a callback function: \`MySQL.query(sql, params, function(rows) ... end)\`.)
:::

## SQL injection: the most dangerous database mistake

Never build SQL by **joining strings** with player input. Look what a player can do with a "name":

\`\`\`lua server bad
local name = "x' OR '1'='1"     -- typed by a player into a "search player" menu
local rows = MySQL.query.await("SELECT * FROM users WHERE name = '" .. name .. "'")
print("rows returned:", #rows)   -- EVERY user, not zero!
\`\`\`

The quote in the input ended the text early, and the rest became part of the **SQL command**. With a little more effort an attacker can read, change or delete anything: \`'; DELETE FROM users; --\` style attacks are real. This is called **SQL injection**.

With a placeholder, the database treats the value as **just data**, never as SQL, however many quotes it contains:

\`\`\`lua server good
local name = "x' OR '1'='1"
local rows = MySQL.query.await("SELECT * FROM users WHERE name = ?", { name })
print("rows returned:", #rows)   -- 0: nobody is literally called that
\`\`\`

## The pattern that keeps servers fast: load, cache, save

Databases are fast, but not "every frame for 100 players" fast. The standard design:

1. **Load** a player's data **once** when they join (or when your resource starts for players already online).
2. Keep it in a Lua table (**cache**) keyed by server ID, and use that for every read.
3. **Save** when something important changes (a purchase), periodically (every few minutes), and in \`playerDropped\`. Then clear the cache entry.

\`\`\`lua server
local cache = {}

local function loadPlayer(src)
  local license = GetPlayerIdentifierByType(src, "license")
  local row = MySQL.single.await("SELECT money, bank FROM users WHERE identifier = ?", { license })
  cache[src] = { license = license, money = row and row.money or 0, bank = row and row.bank or 0 }
end

local function savePlayer(src)
  local d = cache[src]
  if not d then return end
  MySQL.update.await("UPDATE users SET money = ?, bank = ? WHERE identifier = ?", { d.money, d.bank, d.license })
end

loadPlayer(1)
for i = 1, 5 do cache[1].money = cache[1].money + 10 end   -- 5 changes, 0 queries
savePlayer(1)                                             -- 1 query
print("money in DB:", MySQL.scalar.await("SELECT money FROM users WHERE id = ?", { 1 }))
\`\`\`

:::do
- Always use \`?\` placeholders for every value.
- Load once, cache in Lua, save on change / timer / drop.
- Check the result: \`single\` returns \`nil\` when no row matches (a new player!).
- Keep the database **server-only**: only server scripts load \`@oxmysql/lib/MySQL.lua\`.
:::

:::dont
- Don't join player input into SQL strings with \`..\`. Ever.
- Don't query inside loops that run often (\`Wait(0)\`, every player every second).
- Don't \`UPDATE\` or \`DELETE\` without a \`WHERE\`: it changes **every** row.
- Don't trust that a query succeeded; a missing row or a database restart happens.
:::

:::gta In your GTA server
Frameworks (ESX, QBCore, Qbox) create these tables for you (\`users\`, \`players\`, \`owned_vehicles\`, \`player_vehicles\`...) and load/save players automatically. You'll mostly write small queries for your own features, like a \`tina_garage\` table. You create real tables with \`CREATE TABLE\` in a tool like HeidiSQL; the practice database creates a table the first time you \`INSERT\` into it.
:::

=== QUIZ
? Why use \`?\` instead of \`"... WHERE name = '" .. name .. "'"\`?
+ Placeholders keep player input as data, so it can't change the SQL (SQL injection)
- \`?\` is shorter
- oxmysql doesn't support strings
> Joining input into SQL lets a player write their own SQL. Placeholders make that impossible.
? What does \`MySQL.single.await\` return if no row matches?
- An empty string
+ nil
- An error
> Always handle nil: it usually means a new player or a wrong identifier.
? Where should you read a player's money while they play?
- From the database, every time it's needed
+ From a Lua cache table loaded when they joined
- From the client
> Load once, then use the cache. Save back on change, on a timer, and on drop.
? Why can't you use \`MySQL.query.await\` at the top level of a file?
+ \`.await\` pauses, so it must run inside a thread, handler or command
- Top-level code can't use tables
- MySQL only works in client scripts
> Like Wait and Citizen.Await, .await needs something that can pause.

=== EXERCISE
title: The bank, backed by a database
Build the **server** side of a small bank that uses the \`users\` table:

1. \`loadPlayer(src)\`: look up the player's \`license\`, load \`money\` and \`bank\` with **one** \`MySQL.single.await\` and store them in \`cache[src]\` (also store the license). If there's no row, use \`0\` for both.
2. Net event \`bank:deposit\` with \`amount\`: validate (a whole number ≥ 1, and not more than the player's cash). If the player isn't in \`cache\` yet, call \`loadPlayer\` first. Move the money from \`money\` to \`bank\` in the cache, then save **both** columns with **one** \`MySQL.update.await\` using \`?\` placeholders.
3. Never join values into SQL with \`..\`.

The checker deposits twice as Tina and tries two cheats.

\`\`\`lua starter
local cache = {}

local function loadPlayer(src)
end

RegisterNetEvent("bank:deposit", function(amount)
  local src = source
  MySQL.update.await("UPDATE users SET bank = bank + " .. amount .. " WHERE name = '" .. GetPlayerName(src) .. "'")
end)
\`\`\`

\`\`\`lua solution
local cache = {}

local function loadPlayer(src)
  local license = GetPlayerIdentifierByType(src, "license")
  local row = MySQL.single.await("SELECT money, bank FROM users WHERE identifier = ?", { license })
  cache[src] = { license = license, money = row and row.money or 0, bank = row and row.bank or 0 }
end

RegisterNetEvent("bank:deposit", function(amount)
  local src = source
  if type(amount) ~= "number" or amount < 1 or amount ~= math.floor(amount) then return end
  if not cache[src] then loadPlayer(src) end
  local d = cache[src]
  if d.money < amount then return end
  d.money = d.money - amount
  d.bank = d.bank + amount
  MySQL.update.await("UPDATE users SET money = ?, bank = ? WHERE identifier = ?", { d.money, d.bank, d.license })
end)
\`\`\`

\`\`\`lua test
local function user(id) for _, r in ipairs(__db("users")) do if r.id == id then return r end end end
__fakeClient(1, "bank:deposit", 200); Wait(200)
__check(user(1).money == 300 and user(1).bank == 2700, 'Tina deposits 200: database should show money 300, bank 2700 (got ' .. user(1).money .. ', ' .. user(1).bank .. ')')
__fakeClient(1, "bank:deposit", 100); Wait(200)
__check(user(1).money == 200 and user(1).bank == 2800, 'Second deposit of 100: money 200, bank 2800')
local selects = 0
for _, q in ipairs(__queries()) do if q.sql:upper():find("^%s*SELECT") then selects = selects + 1 end end
__check(selects == 1, 'Tina should be loaded from the database only ONCE, then served from the cache (' .. selects .. ' SELECTs ran)')
__fakeClient(1, "bank:deposit", 5000); Wait(200)
__check(user(1).money == 200 and user(1).bank == 2800, 'Depositing more cash than she has (5000) must be refused')
__fakeClient(1, "bank:deposit", "1; DROP TABLE users"); Wait(200)
__check(user(1).bank == 2800 and #__db("users") == 3, 'A text "amount" must be refused')
__fakeClient(3, "bank:deposit", 50); Wait(200)
__check(user(3).money == 0 and user(3).bank == 50, 'Steve deposits his 50: money 0, bank 50 (he is loaded on his first deposit)')
local quoted = false
for _, q in ipairs(__queries()) do if q.sql:find("'", 1, true) then quoted = true end end
__check(not quoted, 'No values written into the SQL text: use ? placeholders')
\`\`\`

side: server
nomatch: MySQL[^\\n]*"\\s*\\.\\. :: Never build SQL with .. (use ? placeholders)
match: MySQL\\.single\\.await :: Load with MySQL.single.await
match: MySQL\\.update\\.await :: Save with MySQL.update.await
hint: Load: \`MySQL.single.await("SELECT money, bank FROM users WHERE identifier = ?", { license })\`
hint: Validate like the Security lesson: type, whole number, at least 1, and \`cache[src].money >= amount\`.
hint: Save both columns at once: \`"UPDATE users SET money = ?, bank = ? WHERE identifier = ?"\` with \`{ d.money, d.bank, d.license }\`
`,ye=`---
id: chat-nui
title: Talking to players: chat, notifications & NUI
part: FiveM intermediate
minutes: 35
summary: chat:addMessage with colours and templates, command suggestions, GTA notifications, and the basics of NUI web menus with SendNUIMessage, RegisterNUICallback and focus.
---
## Three ways to show players something

| Tool | Feels like | Good for |
|---|---|---|
| **Chat** messages | the chat box | command replies, announcements, roleplay /me |
| **GTA notifications / help text** | the game's own pop-ups | "Vehicle stored", "Press E to open" |
| **NUI** | a web page drawn over the game | menus, phones, shops, HUDs |

## Chat messages

The default \`chat\` resource listens for the local event \`chat:addMessage\`. From a **client** you trigger it locally; from the **server** you send it to a player (or \`-1\` for everyone):

\`\`\`lua
TriggerEvent("chat:addMessage", { args = { "Garage", "Your car has been stored." } })
TriggerEvent("chat:addMessage", { color = { 255, 200, 0 }, args = { "^3[Warning]", "^7Fuel low" } })
TriggerEvent("chat:addMessage", { template = "<b>{0}</b>: {1}", args = { "Dispatch", "10-31 at Legion Square" } })
\`\`\`

- \`args\` is a list: the first item is shown like a name, the rest as the message.
- \`color\` is \`{ red, green, blue }\` (0-255) for the name part.
- \`^0\`-\`^9\` inside text change colour: \`^1\` red, \`^2\` green, \`^3\` yellow, \`^5\` blue, \`^7\` white.
- \`template\` uses \`{0}\`, \`{1}\`... for the args, and can contain HTML.

\`\`\`lua server
TriggerClientEvent("chat:addMessage", -1, { args = { "^1SERVER", "Restart in 5 minutes" } })   -- everyone
TriggerClientEvent("chat:addMessage", 2, { args = { "Bank", "You received $250" } })           -- only Bob
\`\`\`

:::warn Never put raw player text into HTML
If a template includes text a player typed (their message, their name), they can type HTML like \`<img src=x onerror=...>\` and it may run in **everyone's** chat. Pass player text only through \`args\` (which the chat shows as text), keep templates for **your** fixed formatting, and limit message length.
:::

Help players discover commands with suggestions (client side):

\`\`\`lua
TriggerEvent("chat:addSuggestion", "/repair", "Repair your vehicle at a mechanic", {
  { name = "type", help = "engine or body" },
})
\`\`\`

## GTA's own notifications and help text

\`\`\`lua client
-- the small notification above the minimap
BeginTextCommandThefeedPost("STRING")
AddTextComponentSubstringPlayerName("~g~Vehicle stored~s~ in Legion garage")
EndTextCommandThefeedPostTicker(false, true)

-- the black help box top-left (must be shown EVERY frame you want it visible)
BeginTextCommandDisplayHelp("STRING")
AddTextComponentSubstringPlayerName("Press ~INPUT_CONTEXT~ to open the garage")
EndTextCommandDisplayHelp(0, false, true, -1)
\`\`\`

Wrap these in small functions (\`notify(text)\`, \`helpText(text)\`) so the rest of your code stays readable.

## NUI: web pages in the game

NUI is a real HTML/CSS/JavaScript page (listed with \`ui_page\` and \`files\` in the manifest) drawn over the game. Lua and the page talk in two directions:

| Direction | Lua side | JS side |
|---|---|---|
| Lua → page | \`SendNUIMessage({ action = "open", items = ... })\` | \`window.addEventListener("message", e => e.data.action ...)\` |
| page → Lua | \`RegisterNUICallback("buy", function(data, cb) ... cb({ ok = true }) end)\` | \`fetch("https://my_resource/buy", { method: "POST", body: JSON.stringify({...}) })\` |
| mouse/keyboard | \`SetNuiFocus(true, true)\` to let the page use them, \`SetNuiFocus(false, false)\` to give them back | |

\`\`\`lua client
local isOpen = false

local function openShop()
  isOpen = true
  SendNUIMessage({ action = "open", items = { { name = "water", price = 2 }, { name = "burger", price = 8 } } })
  SetNuiFocus(true, true)
end

RegisterNUICallback("close", function(data, cb)
  isOpen = false
  SetNuiFocus(false, false)
  SendNUIMessage({ action = "close" })
  cb("ok")
end)

openShop()
__nui("close", {})   -- practice: pretend the page's close button was clicked
\`\`\`

:::why Why must every NUI callback call \`cb(...)\`?
The page's \`fetch(...)\` is waiting for an answer. If your Lua never calls \`cb\`, the page waits forever and its buttons can seem dead. Always call \`cb\`, even if it's just \`cb("ok")\` or \`cb({ ok = false })\`.
:::

:::warn The page is on the player's PC
NUI pages can be opened and edited with browser devtools, and a cheater can call your NUI callbacks with any data. Treat an NUI callback exactly like a client event: it may only **ask**. Validate the data, then \`TriggerServerEvent\`, and let the **server** check everything again.
:::

:::do
- Use \`args\` for player text in chat; keep HTML templates for your own fixed formatting.
- Always give the player a way to close NUI (a close button and Escape), and release focus with \`SetNuiFocus(false, false)\`.
- Call \`cb\` in every NUI callback.
- Send small, specific data to the page; never secrets.
:::

:::dont
- Don't leave \`SetNuiFocus(true, true)\` on after closing: the player can't move or use the keyboard (the "stuck mouse" bug).
- Don't trust anything that comes from the NUI page.
- Don't send chat messages to \`-1\` in loops; it's spam for every player.
:::

:::gta In your GTA server
Popular resources wrap all of this: \`ox_lib\` has \`lib.notify\`, menus and dialogs; frameworks have \`QBCore.Functions.Notify\`. Underneath they use exactly these tools. When a menu gets "stuck", the cause is almost always focus that was never released, or a callback that never called \`cb\`.
:::

=== QUIZ
? How does a server send a chat message to only player 2?
- \`TriggerEvent("chat:addMessage", 2, ...)\`
+ \`TriggerClientEvent("chat:addMessage", 2, { args = { ... } })\`
- \`print\` with the number 2
> The server sends the chat event to that player's client.
? What does \`SetNuiFocus(true, true)\` do?
+ Gives the mouse and keyboard to the NUI page
- Opens the F8 console
- Draws the page
> Remember to call SetNuiFocus(false, false) when the page closes.
? An NUI callback forgets to call \`cb\`. What happens?
- Nothing, it's optional
+ The page's request never gets an answer and waits forever
- The game crashes
> Always answer with cb(...), even if it's just "ok".
? Data from an NUI callback says \`{ item = "water", price = 0 }\`. What should the client do?
- Charge price 0
+ Only ask the server to buy "water"; the server decides the price
- Reject all NUI data
> The page is under the player's control. The server decides prices.

=== EXERCISE
title: The NUI vending machine
Write the **client** side of a vending machine UI:

1. \`openMachine()\`: send the page \`{ action = "open", items = Items }\` and give it focus with \`SetNuiFocus(true, true)\`.
2. NUI callback \`buy\`: \`data.item\` must be a string that exists in \`Items\` and \`data.amount\` must be a whole number from 1 to 5. If not, answer \`cb({ ok = false })\`. If valid, \`TriggerServerEvent("vending:buy", data.item, data.amount)\` (**don't** send a price!) and answer \`cb({ ok = true })\`.
3. NUI callback \`close\`: release focus with \`SetNuiFocus(false, false)\`, send \`{ action = "close" }\`, answer \`cb("ok")\`.
4. A command \`/vending\` that calls \`openMachine()\`.

\`\`\`lua starter
local Items = { water = 2, cola = 3, sandwich = 6 }

local function openMachine()
  SendNUIMessage({ action = "open" })
end

RegisterNUICallback("buy", function(data, cb)
  TriggerServerEvent("vending:buy", data.item, data.amount, data.price)
end)
\`\`\`

\`\`\`lua solution
local Items = { water = 2, cola = 3, sandwich = 6 }

local function openMachine()
  SendNUIMessage({ action = "open", items = Items })
  SetNuiFocus(true, true)
end

RegisterNUICallback("buy", function(data, cb)
  local item, amount = data.item, data.amount
  if type(item) ~= "string" or not Items[item] then cb({ ok = false }) return end
  if type(amount) ~= "number" or amount < 1 or amount > 5 or amount ~= math.floor(amount) then cb({ ok = false }) return end
  TriggerServerEvent("vending:buy", item, amount)
  cb({ ok = true })
end)

RegisterNUICallback("close", function(data, cb)
  SetNuiFocus(false, false)
  SendNUIMessage({ action = "close" })
  cb("ok")
end)

RegisterCommand("vending", function()
  openMachine()
end, false)
\`\`\`

\`\`\`lua test
__command(1, "/vending"); Wait(50)
local msgs = __nuiMessages()
__check(#msgs >= 1 and msgs[1].action == "open" and type(msgs[1].items) == "table" and msgs[1].items.cola == 3, '/vending should send the page { action = "open", items = Items }')
local kb, mouse = __nuiFocus()
__check(kb and mouse, 'Opening should call SetNuiFocus(true, true)')
local r1, a1 = __nui("buy", { item = "cola", amount = 2, price = 0 })
__check(a1 and type(r1) == "table" and r1.ok == true, 'A valid buy (cola x2) should answer cb({ ok = true })')
local sent = __events("toServer", "vending:buy")
__check(#sent == 1 and sent[1].args[1] == "cola" and sent[1].args[2] == 2, 'A valid buy should TriggerServerEvent("vending:buy", "cola", 2)')
__check(#sent == 1 and sent[1].args.n == 2, 'Send only the item and amount, never a price from the page')
local r2, a2 = __nui("buy", { item = "gold_bar", amount = 1 })
__check(a2 and type(r2) == "table" and r2.ok == false, 'An unknown item must answer cb({ ok = false })')
local r3, a3 = __nui("buy", { item = "water", amount = 50 })
__check(a3 and type(r3) == "table" and r3.ok == false, 'amount 50 is too many: answer cb({ ok = false })')
local r4, a4 = __nui("buy", { item = "water", amount = 1.5 })
__check(a4 and r4 and r4.ok == false and #__events("toServer", "vending:buy") == 1, 'amount 1.5 must be refused and nothing sent to the server')
local r5, a5 = __nui("close", {})
local kb2, mouse2 = __nuiFocus()
__check(a5 and not kb2 and not mouse2, 'close must answer cb and release focus with SetNuiFocus(false, false)')
\`\`\`

side: client
match: SetNuiFocus\\s*\\(\\s*true :: Give the page focus with SetNuiFocus(true, true)
match: SetNuiFocus\\s*\\(\\s*false :: Release focus with SetNuiFocus(false, false)
hint: Validate like a server event: \`type(item) ~= "string" or not Items[item]\` → \`cb({ ok = false }) return\`.
hint: Every path through a callback must call \`cb(...)\` exactly once.
hint: The command: \`RegisterCommand("vending", function() openMachine() end, false)\`
`,be=`---
id: spawning
title: Spawning vehicles & peds safely
part: FiveM intermediate
minutes: 35
summary: Validating models, loading them with a timeout, spawning on the client or server, network IDs, cleaning up old entities, and NPCs that stay put.
---
## Why spawning needs care

Spawning looks like one line: \`CreateVehicle(...)\`. But careless spawning causes some of the most common server problems: endless loops waiting for a model that never loads, 400 abandoned cars on the map, players spawning tanks through an unprotected event, and NPCs wandering off. Here's the safe recipe.

## Step 1: validate the model

Never assume a model name is real. Players type typos, configs get edited, and cheaters send whatever they like:

\`\`\`lua client
local function checkModel(name)
  local hash = GetHashKey(name)
  if not IsModelInCdimage(hash) then return false, "no such model" end
  if not IsModelAVehicle(hash) then return false, "not a vehicle" end
  return true, hash
end

print(checkModel("sultan"))
print(checkModel("sultna"))               -- typo
print(checkModel("a_m_y_business_01"))    -- a ped, not a vehicle
\`\`\`

## Step 2: load it, but never wait forever

On the **client**, a model must be loaded into memory before it can be created. The *Natives* lesson used \`while not HasModelLoaded(model) do Wait(10) end\`. That has a hidden danger: if the model **never** loads (a broken custom car, a missing streamed file), that loop runs **forever**. Add a timeout:

\`\`\`lua client
local function loadModel(hash, timeoutMs)
  RequestModel(hash)
  local started = GetGameTimer()
  while not HasModelLoaded(hash) do
    if GetGameTimer() - started > timeoutMs then
      return false                       -- give up instead of hanging
    end
    Wait(10)
  end
  return true
end

CreateThread(function()
  print("sultan loaded?", loadModel(GetHashKey("sultan"), 5000))
  print("tina_custom loaded?", loadModel(GetHashKey("tina_custom"), 2000))   -- a 'broken' mod in the practice world
end)
\`\`\`

:::why Why a timeout instead of just trusting the game?
Your spawn function might be called from a command, a menu or a job. If it hangs, that thread never finishes, the player gets no car and no error, and every retry adds **another** stuck thread. A timeout turns a silent freeze into a clear "couldn't load model" message you can debug.
:::

## Step 3: create it, then release the model

\`\`\`lua client
CreateThread(function()
  local hash = GetHashKey("sultan")
  RequestModel(hash)
  while not HasModelLoaded(hash) do Wait(10) end

  local ped = PlayerPedId()
  local pos = GetEntityCoords(ped)
  local veh = CreateVehicle(hash, pos.x + 3.0, pos.y, pos.z, GetEntityHeading(ped), true, false)
  SetModelAsNoLongerNeeded(hash)      -- the car stays; we just don't need the model locked in memory
  SetVehicleNumberPlateText(veh, "TINA 01")
  SetVehicleOnGroundProperly(veh)
  print("spawned", veh, GetVehicleNumberPlateText(veh), "net id", NetworkGetNetworkIdFromEntity(veh))
end)
\`\`\`

The 6th value \`true\` makes it **networked** (other players see it). The returned handle is only valid on **this** PC; to tell the server or other players *which* car you mean, send the **network ID** (\`NetworkGetNetworkIdFromEntity\`), and they convert it back with \`NetworkGetEntityFromNetworkId\`.

## Client or server spawning?

| | Client spawn | Server spawn |
|---|---|---|
| How | \`RequestModel\` + \`CreateVehicle\` on the client | \`CreateVehicle\` (or \`CreateVehicleServerSetter\`) in a server script, no model loading needed |
| Who decides | the player's PC (cheatable) | the server |
| Use for | personal, harmless things (preview car in a showroom) | anything players **own** or that costs money: garages, job vehicles, rentals |

For valuable vehicles, the client **asks** ("take out my car with plate X"), the server checks ownership in the database and spawns it, then tells the client the network ID so it can be warped in:

\`\`\`lua server
local owned = { ["TINA 01"] = { owner = 1, model = "sultan" } }

RegisterNetEvent("garage:takeOut", function(plate)
  local src = source
  local car = owned[plate]
  if type(plate) ~= "string" or not car or car.owner ~= src then return end   -- not yours
  local pos = GetEntityCoords(GetPlayerPed(src))
  local veh = CreateVehicle(GetHashKey(car.model), pos.x + 3.0, pos.y, pos.z, 0.0, true, true)
  SetVehicleNumberPlateText(veh, plate)
  TriggerClientEvent("garage:spawned", src, NetworkGetNetworkIdFromEntity(veh))
end)

__fakeClient(1, "garage:takeOut", "TINA 01")   -- practice: Tina asks for her car
__fakeClient(2, "garage:takeOut", "TINA 01")   -- Bob tries to take Tina's car
\`\`\`

## Step 4: clean up

Every spawned entity stays until someone deletes it. Players respawning cars every few minutes can fill the map:

- Keep track of what you spawned (\`currentVehicle[src] = veh\`).
- Before spawning a new one for the same player, **delete the old one** if it still exists (\`DoesEntityExist\`).
- Delete job/rental vehicles when the job ends, and in \`playerDropped\`.
- Delete your resource's entities when the resource stops (\`AddEventHandler("onResourceStop", function(res) if res == GetCurrentResourceName() then ... end end)\`).

## Peds that stay put (shop NPCs)

\`\`\`lua client
CreateThread(function()
  local hash = GetHashKey("s_m_y_dealer_01")
  RequestModel(hash)
  while not HasModelLoaded(hash) do Wait(10) end
  local npc = CreatePed(4, hash, 25.7, -1347.3, 28.5, 270.0, false, true)   -- not networked: each client makes its own
  SetModelAsNoLongerNeeded(hash)
  FreezeEntityPosition(npc, true)              -- don't walk off
  SetEntityInvincible(npc, true)               -- don't die
  SetBlockingOfNonTemporaryEvents(npc, true)   -- don't run away from gunshots
  print("shopkeeper ped", npc)
end)
\`\`\`

:::do
- Validate models with \`IsModelInCdimage\` (and \`IsModelAVehicle\` / \`IsModelAPed\`).
- Load models with a **timeout**, then \`SetModelAsNoLongerNeeded\`.
- Spawn owned or paid vehicles on the **server** after checking ownership.
- Track and delete what you spawn.
:::

:::dont
- Don't make a net event like \`spawnVehicle(model)\` that any client can trigger with any model.
- Don't spawn inside a loop without a limit.
- Don't use an entity handle after a \`Wait\` without checking \`DoesEntityExist\`.
- Never \`DeleteEntity\` a player's ped.
:::

:::gta In your GTA server
Server-side spawning with \`CreateVehicle\` needs OneSync (on by default on modern servers). Some servers prefer \`CreateVehicleServerSetter(model, "automobile", x, y, z, heading)\` which is more reliable for server-created vehicles. Frameworks wrap this (\`QBCore.Functions.SpawnVehicle\`, \`ESX.Game.SpawnVehicle\`, ox_lib's \`lib.requestModel\` with a timeout built in).
:::

=== QUIZ
? Why add a timeout to the model loading loop?
+ A model that never loads would otherwise make the loop (and the thread) wait forever
- Models load faster with a timeout
- FiveM requires it
> Broken or missing models happen. A timeout turns a silent hang into a clear failure.
? What should you send to the server to say which vehicle you mean?
- The entity handle
+ The network ID (\`NetworkGetNetworkIdFromEntity\`)
- The model name
> Handles are only valid on one PC. Network IDs are the same everywhere.
? A garage lets players take out their owned cars. Where should the car be spawned?
- On the client, whatever model it asks for
+ On the server, after checking the player owns that car
> Spawning valuable things must be decided by the server.
? What does \`SetModelAsNoLongerNeeded\` do to the car you just spawned?
- Deletes it
+ Nothing: it only releases the model from memory; the car stays
- Makes it invisible
> The entity keeps existing. You're just telling the game you're done with the model.

=== EXERCISE
title: A safe spawn function
Write a **client** function \`spawnVehicle(modelName)\` that:

1. Returns \`nil\` if the model doesn't exist **or** isn't a vehicle.
2. Requests the model and waits for it with **\`Wait\`**, but gives up after **3000 ms** and returns \`nil\`.
3. If the player already has a car in \`currentVehicle\` that still exists (\`DoesEntityExist\`), deletes it first.
4. Creates the vehicle 3 metres beside the player (x + 3.0), networked, stores it in \`currentVehicle\`, releases the model with \`SetModelAsNoLongerNeeded\`, and returns the handle.

The checker spawns a sultan, then an adder (the sultan must disappear), then a typo, a ped model, and the broken \`tina_custom\` mod.

\`\`\`lua starter
local currentVehicle = nil

local function spawnVehicle(modelName)
  local hash = GetHashKey(modelName)
  local pos = GetEntityCoords(PlayerPedId())
  local veh = CreateVehicle(hash, pos.x + 3.0, pos.y, pos.z, 0.0, true, false)
  currentVehicle = veh
  return veh
end
\`\`\`

\`\`\`lua solution
local currentVehicle = nil

local function spawnVehicle(modelName)
  local hash = GetHashKey(modelName)
  if not IsModelInCdimage(hash) or not IsModelAVehicle(hash) then return nil end

  RequestModel(hash)
  local started = GetGameTimer()
  while not HasModelLoaded(hash) do
    if GetGameTimer() - started > 3000 then return nil end
    Wait(10)
  end

  if currentVehicle and DoesEntityExist(currentVehicle) then
    DeleteEntity(currentVehicle)
  end

  local ped = PlayerPedId()
  local pos = GetEntityCoords(ped)
  local veh = CreateVehicle(hash, pos.x + 3.0, pos.y, pos.z, GetEntityHeading(ped), true, false)
  SetModelAsNoLongerNeeded(hash)
  currentVehicle = veh
  return veh
end
\`\`\`

\`\`\`lua test
local function vehicles() return __entities("vehicle") end
local r = {}
CreateThread(function()
  r.sultan = spawnVehicle("sultan")
  r.adder = spawnVehicle("adder")
  r.typo = spawnVehicle("sultna") or false
  r.ped = spawnVehicle("a_m_y_business_01") or false
  r.t0 = GetGameTimer()
  r.custom = spawnVehicle("tina_custom") or false
  r.t1 = GetGameTimer()
  r.done = true
end)
Wait(5000)
__check(r.done, 'spawnVehicle must always finish (it should give up on tina_custom after ~3 s)')
__check(type(r.sultan) == "number" and r.sultan ~= 0, 'spawnVehicle("sultan") should return a vehicle handle')
local v = vehicles()
__check(#v == 1 and v[1].id == r.adder, 'After spawning the adder, only ONE vehicle should exist: delete the old sultan first (' .. #v .. ' vehicles exist)')
__check(r.typo == false, 'A model that does not exist ("sultna") should return nil')
__check(r.ped == false, 'A ped model is not a vehicle: return nil')
__check(r.custom == false, 'tina_custom never loads: return nil after the timeout')
__check(r.t1 and r.t0 and r.t1 - r.t0 >= 2900 and r.t1 - r.t0 <= 3500, 'Give up after about 3000 ms (took ' .. tostring(r.t1 and r.t0 and r.t1 - r.t0) .. ' ms)')
__check(#__natives("SetModelAsNoLongerNeeded") >= 2, 'Release each model with SetModelAsNoLongerNeeded after creating the car')
\`\`\`

side: client
duration: 8000
match: IsModelInCdimage :: Check the model exists with IsModelInCdimage
match: IsModelAVehicle :: Check it's a vehicle with IsModelAVehicle
match: GetGameTimer :: Use GetGameTimer for the timeout
hint: Validation: \`if not IsModelInCdimage(hash) or not IsModelAVehicle(hash) then return nil end\`
hint: Loading loop with timeout: \`local started = GetGameTimer() while not HasModelLoaded(hash) do if GetGameTimer() - started > 3000 then return nil end Wait(10) end\`
hint: Clean up: \`if currentVehicle and DoesEntityExist(currentVehicle) then DeleteEntity(currentVehicle) end\`
`,xe=`---
id: drawing
title: Blips, markers & 3D text without the lag
part: FiveM intermediate
minutes: 35
summary: What must be drawn every frame and what mustn't, map blips done once, markers and help text only when near, 3D text, and the distance patterns that keep it cheap.
---
## Two very different kinds of "drawing"

This is the key idea of the lesson, and it explains most laggy scripts:

| Kind | Examples | How long it lasts | So you call it... |
|---|---|---|---|
| **Persistent** | map blips, peds, vehicles | until you remove it | **once** |
| **Per-frame** | markers, 3D text, help text, rectangles | **one frame** only (~16 ms) | **every frame** while it should be visible |

Persistent things in a loop = you create a new blip 60 times a second (thousands of blips!). Per-frame things in a slow loop = they flicker or are invisible. Per-frame things every frame **everywhere** = constant cost for every player all the time.

## Map blips: create once

\`\`\`lua client
local Garages = {
  { label = "Legion Garage", pos = vector3(215.0, -790.0, 30.8) },
  { label = "Sandy Garage", pos = vector3(1737.0, 3710.0, 34.1) },
}

CreateThread(function()   -- runs once when the resource starts
  for _, g in ipairs(Garages) do
    local blip = AddBlipForCoord(g.pos.x, g.pos.y, g.pos.z)
    SetBlipSprite(blip, 357)          -- the garage icon (see the blip list on docs.fivem.net)
    SetBlipColour(blip, 3)            -- blue
    SetBlipScale(blip, 0.8)
    SetBlipAsShortRange(blip, true)   -- only shows on the minimap when nearby: less clutter
    BeginTextCommandSetBlipName("STRING")
    AddTextComponentString(g.label)
    EndTextCommandSetBlipName(blip)   -- the name shown in the map legend
    g.blip = blip                     -- keep the handle so you can RemoveBlip later
  end
end)
\`\`\`

Keep the handle if blips can change (a job blip that should disappear when the job ends: \`RemoveBlip(blip)\`).

## Markers: every frame, but only when near

\`DrawMarker\` draws a 3D shape for **one frame**. So it must be inside a \`Wait(0)\` loop, but only while the player is close enough to see it:

\`\`\`lua client
local garage = vector3(215.0, -790.0, 30.8)

CreateThread(function()
  while true do
    local sleep = 1000
    local dist = #(GetEntityCoords(PlayerPedId()) - garage)
    if dist < 25.0 then
      sleep = 0
      DrawMarker(36, garage.x, garage.y, garage.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        1.0, 1.0, 1.0, 0, 120, 255, 160, false, true, 2, false, nil, nil, false)
      if dist < 2.0 then
        BeginTextCommandDisplayHelp("STRING")
        AddTextComponentSubstringPlayerName("Press ~INPUT_CONTEXT~ to open the garage")
        EndTextCommandDisplayHelp(0, false, true, -1)
      end
    end
    Wait(sleep)
  end
end)
\`\`\`

Tina is about 20 m from this garage in the practice world, so it draws every frame: notice the performance note after running. That's **correct** here (she's close), and the moment she walks away the loop drops back to once a second.

The many \`DrawMarker\` values: type, position, direction, rotation, scale, colour (r, g, b, alpha), bob up and down, face camera, ... Look them up on docs.fivem.net; copy a working line and change the type, position and colour.

## 3D text above a point

There's no single native for floating text. The usual helper projects the text into the world with \`SetDrawOrigin\`:

\`\`\`lua client
local function drawText3D(pos, text)
  SetTextScale(0.35, 0.35)
  SetTextFont(4)
  SetTextColour(255, 255, 255, 215)
  SetTextCentre(true)
  SetTextOutline()
  SetDrawOrigin(pos.x, pos.y, pos.z, 0)
  BeginTextCommandDisplayText("STRING")
  AddTextComponentSubstringPlayerName(text)
  EndTextCommandDisplayText(0.0, 0.0)
  ClearDrawOrigin()
end

CreateThread(function()
  for i = 1, 3 do              -- normally: every frame, while near
    drawText3D(vector3(215.0, -790.0, 31.8), "~b~Garage~s~ [E]")
    Wait(0)
  end
  print("drew text", #__natives("DrawText"), "times")
end)
\`\`\`

It's about 9 natives per call: cheap once, but it adds up if you draw text for 40 things every frame. Draw only what's **near**.

## Patterns that keep it cheap

1. **Tiered sleep**: far → \`Wait(1000)\`, approaching → \`Wait(500)\`, near → \`Wait(0)\`. (The *Performance* lesson.)
2. **Nearest only**: with many points, find the **closest** one in the slow loop, and only draw that one in the fast part.
3. **Read coordinates once per round** into a local, not once per point.
4. **Skip the square root?** You'll see code comparing squared distances to avoid \`math.sqrt\`. In Lua, \`#(a - b)\` on vectors is already fast; readable code wins.

\`\`\`lua client
local Points = {}
for i = 1, 50 do Points[i] = vector3(i * 100.0, 0.0, 30.0) end   -- 50 places on the map
Points[51] = vector3(220.0, -805.0, 30.7)                         -- one near Tina

CreateThread(function()
  for round = 1, 3 do
    local pos = GetEntityCoords(PlayerPedId())   -- once per round
    local nearest, nearestDist = nil, math.huge
    for _, p in ipairs(Points) do
      local d = #(pos - p)
      if d < nearestDist then nearest, nearestDist = p, d end
    end
    print(("round %d: nearest point is %.1f m away"):format(round, nearestDist))
    Wait(1000)   -- the search runs once a second; only the nearest would be drawn every frame
  end
end)
\`\`\`

:::do
- Create blips **once** (at start, or when a job begins) and keep their handles.
- Draw markers, text and help prompts **only when near**, every frame while near.
- Use one loop per feature with tiered sleeps; find the nearest point in the slow part.
:::

:::dont
- Don't call \`AddBlipForCoord\` inside a loop.
- Don't draw markers everywhere on the map every frame "just in case".
- Don't draw help text for something the player isn't standing next to.
:::

:::gta In your GTA server
Libraries like **ox_lib** provide \`lib.points\` and \`lib.zones\` that do the nearest/sleep logic for you, and **ox_target** replaces markers with "look at it and press Alt". They're efficient because of exactly these patterns. Check with \`resmon 1\`: a marker script idling far away should be at **0.00–0.01 ms**.
:::

=== QUIZ
? How often should you call \`AddBlipForCoord\` for a fixed shop?
+ Once, when the resource starts
- Every frame
- Every second
> Blips are persistent. Creating them in a loop makes thousands of blips.
? Why must \`DrawMarker\` be called every frame?
+ A marker only lasts for one frame
- It's faster that way
- It isn't, once is enough
> Per-frame draws disappear after one frame, so they must be repeated while visible.
? A script draws markers for 30 shops every frame, wherever the player is. Best fix?
- Use Wait(100) so they flicker less
+ Only draw (and only Wait(0)) when the player is near a shop; sleep longer when far
- Use blips instead of markers everywhere
> Per-frame work only where it's visible. Far away, sleep.
? What does \`SetBlipAsShortRange(blip, true)\` do?
+ The blip only shows on the minimap when the player is nearby
- The blip is smaller
- The blip is removed after a short time
> It keeps the minimap tidy. It still shows on the big map.

=== EXERCISE
title: Garage markers done right
Write the **client** code for three garages from \`Config.Garages\`:

1. **Once**, create a blip for every garage: sprite **357**, name \`"Garage"\` (with \`BeginTextCommandSetBlipName\` / \`AddTextComponentString\` / \`EndTextCommandSetBlipName\`), short range.
2. One thread: find the **distance to the nearest garage**. If it's more than **20 m**, \`Wait(1000)\`. If it's **20 m or less**, draw a marker at that garage with \`DrawMarker\` and \`Wait(0)\`. If it's **2 m or less**, also show the help text \`Press ~INPUT_CONTEXT~ to park\`.

The checker leaves Tina far away for 3 seconds (no markers, almost no wake-ups), then moves her next to the first garage.

\`\`\`lua starter
Config = {
  Garages = {
    vector3(-340.0, -874.0, 31.3),
    vector3(1737.0, 3710.0, 34.1),
    vector3(110.0, 6610.0, 31.8),
  },
}

CreateThread(function()
  while true do
    Wait(0)
    for _, g in ipairs(Config.Garages) do
      local blip = AddBlipForCoord(g.x, g.y, g.z)
      DrawMarker(36, g.x, g.y, g.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0, 120, 255, 160, false, true, 2, false, nil, nil, false)
    end
  end
end)
\`\`\`

\`\`\`lua solution
Config = {
  Garages = {
    vector3(-340.0, -874.0, 31.3),
    vector3(1737.0, 3710.0, 34.1),
    vector3(110.0, 6610.0, 31.8),
  },
}

for _, g in ipairs(Config.Garages) do
  local blip = AddBlipForCoord(g.x, g.y, g.z)
  SetBlipSprite(blip, 357)
  SetBlipAsShortRange(blip, true)
  BeginTextCommandSetBlipName("STRING")
  AddTextComponentString("Garage")
  EndTextCommandSetBlipName(blip)
end

CreateThread(function()
  while true do
    local pos = GetEntityCoords(PlayerPedId())
    local nearest, nearestDist = nil, math.huge
    for _, g in ipairs(Config.Garages) do
      local d = #(pos - g)
      if d < nearestDist then nearest, nearestDist = g, d end
    end

    if nearestDist <= 20.0 then
      DrawMarker(36, nearest.x, nearest.y, nearest.z, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0, 120, 255, 160, false, true, 2, false, nil, nil, false)
      if nearestDist <= 2.0 then
        BeginTextCommandDisplayHelp("STRING")
        AddTextComponentSubstringPlayerName("Press ~INPUT_CONTEXT~ to park")
        EndTextCommandDisplayHelp(0, false, true, -1)
      end
      Wait(0)
    else
      Wait(1000)
    end
  end
end)
\`\`\`

\`\`\`lua test
Wait(3000)
local blips = __blips()
__check(#blips == 3, 'Create exactly 3 blips, once (found ' .. #blips .. ')')
local okBlips = #blips == 3
for _, b in ipairs(blips) do if b.sprite ~= 357 or b.name ~= "Garage" or not b.shortRange then okBlips = false end end
__check(okBlips, 'Every blip: sprite 357, name "Garage", short range')
__check(#__natives("DrawMarker") == 0, 'Far from every garage, draw no markers (drew ' .. #__natives("DrawMarker") .. ')')
local wakes = 0
for _, t in ipairs(__threads()) do wakes = wakes + t.wakes end
__check(wakes <= 10, 'Far away, the thread should sleep about 1 s between checks (it woke up ' .. wakes .. ' times in 3 s)')
__setCoords(1, -340.5, -873.0, 31.3)
Wait(1000)
__check(#__natives("DrawMarker") >= 40, 'Near a garage, DrawMarker should run every frame (about 60 per second; got ' .. #__natives("DrawMarker") .. ')')
__check(#__blips() == 3, 'Still only 3 blips after moving (do not create blips in the loop)')
\`\`\`

side: client
duration: 6000
match: SetBlipSprite\\s*\\([^)]*357 :: Use sprite 357 for the blips
match: SetBlipAsShortRange :: Make the blips short range
match: EndTextCommandDisplayHelp :: Show the help text when within 2 m
hint: Move the blip code **out** of the loop: a plain \`for\` loop at the top level runs once.
hint: In the thread, find the nearest garage first: \`local d = #(pos - g)\` and keep the smallest.
hint: \`if nearestDist <= 20.0 then DrawMarker(...) ... Wait(0) else Wait(1000) end\`
`,Se=`---
id: cooldowns
title: Time, cooldowns & anti-spam
part: FiveM intermediate
minutes: 35
summary: GetGameTimer vs os.time vs os.date, per-player cooldowns, global cooldowns, rate-limiting events, cleaning up, and why the server must enforce it.
---
## Why this matters

Without limits, a player (or a cheat script) can trigger your \`job:collectPay\` event 500 times a second, rob the same store every 10 seconds, or spam \`/me\` until chat is unreadable. **Cooldowns** ("you can do this again in 30 s") and **rate limits** ("at most 3 per 10 s") are how servers stay fair and stable. They all start with knowing what time it is.

## Three clocks

| Clock | Gives | Where | Use for |
|---|---|---|---|
| \`GetGameTimer()\` | milliseconds since the game/server started | client **and** server | cooldowns, timeouts, measuring how long something took |
| \`os.time()\` | seconds since 1 Jan 1970 (a "Unix timestamp") | **server only** | real dates: bans until Friday, daily rewards, saving "last seen" |
| \`os.date(format, t)\` | a timestamp as readable text | **server only** | logs, messages |

\`\`\`lua server
print("game timer (ms):", GetGameTimer())
print("unix time (s):", os.time() > 1700000000)
local t = os.time({ year = 2026, month = 10, day = 31, hour = 20, min = 0 })
print("Halloween party starts:", os.date("%d/%m/%Y at %H:%M", t))
print("a week later:", os.date("%A %d %B", t + 7 * 24 * 60 * 60))
\`\`\`

Common \`os.date\` codes: \`%Y\` year, \`%m\` month, \`%d\` day, \`%H\` hour (24h), \`%M\` minute, \`%S\` second, \`%A\` weekday name, \`%B\` month name. Start the format with \`!\` (\`"!%Y-%m-%d"\`) for UTC instead of the server's local time.

:::warn \`os\` doesn't exist in client scripts
FiveM removes the \`os\` library from **client** scripts (for players' safety: \`os\` can touch their computer). \`os.time()\` there gives \`attempt to index a nil value (global 'os')\`. Clients use \`GetGameTimer()\`, or ask the server for the real time.
:::

\`\`\`lua client error
print(os.time())
\`\`\`

:::why Which clock for a cooldown?
\`GetGameTimer()\` for anything short that doesn't need to survive a restart: it's in milliseconds, it exists on both sides, and it can't be confused by someone changing the server's clock. \`os.time()\` for anything that must survive a restart or be tied to the calendar ("daily reward", "banned for 3 days"), because you can **save** it to the database and compare it after a restart. (\`GetGameTimer\` starts again from 0 when the server restarts.)
:::

## A per-player cooldown

The pattern: remember **when** each player last did the thing. When they try again, compare.

\`\`\`lua server
local lastRepair = {}            -- [src] = GetGameTimer() of the last repair
local REPAIR_COOLDOWN = 3000     -- 3 s for practice (a real server might use 30000 or more)

RegisterCommand("repair", function(source)
  local src = source
  local now = GetGameTimer()
  local last = lastRepair[src]
  if last and now - last < REPAIR_COOLDOWN then
    local left = math.ceil((REPAIR_COOLDOWN - (now - last)) / 1000)
    print(("%s must wait %d more seconds"):format(GetPlayerName(src), left))
    return
  end
  lastRepair[src] = now
  print(GetPlayerName(src) .. " repaired their vehicle")
end, false)

CreateThread(function()          -- practice: Tina types /repair three times
  __command(1, "/repair")
  Wait(1000)
  __command(1, "/repair")        -- 1 s later: too soon
  Wait(2500)
  __command(1, "/repair")        -- 3.5 s after the first: allowed again
end)
\`\`\`

Notice it records the time **only when the action actually happens**, not when it's refused. Otherwise a spamming player would keep resetting their own cooldown (some servers do that on purpose as a punishment; choose deliberately).

## A global cooldown

Some things should only happen once for the **whole server** in a while: a bank heist, an airdrop. Then it's one variable, not a table:

\`\`\`lua norun
local lastHeist = -math.huge
local HEIST_COOLDOWN = 45 * 60 * 1000   -- 45 minutes
if GetGameTimer() - lastHeist < HEIST_COOLDOWN then return end
lastHeist = GetGameTimer()
\`\`\`

## Rate limiting: "at most N per window"

A cooldown allows **one** action per time. A **rate limit** allows a few, but not a flood. For chat-like events: keep each player's recent timestamps, forget the old ones, count the rest:

\`\`\`lua
local recent = {}               -- [src] = { timestamps }
local LIMIT, WINDOW = 3, 2000   -- 3 messages per 2 s (short, so you can watch it here)

local function allowed(src)
  local now = GetGameTimer()
  local list = recent[src] or {}
  recent[src] = list
  for i = #list, 1, -1 do       -- backwards: we remove while looping
    if now - list[i] > WINDOW then table.remove(list, i) end
  end
  if #list >= LIMIT then return false end
  list[#list + 1] = now
  return true
end

CreateThread(function()
  for i = 1, 5 do print("message " .. i, allowed(1) and "sent" or "BLOCKED") Wait(100) end
  Wait(2000)
  print("2 s later", allowed(1) and "sent" or "BLOCKED")
end)
\`\`\`

## The server enforces, the client is just polite

You can **also** add a cooldown on the client (to grey out a button, or avoid sending pointless events), and that's nice for honest players. But a cheater skips client code entirely and calls \`TriggerServerEvent\` directly. **The server-side check is the one that counts.**

When a player hits a limit far beyond anything a human could do (50 pay requests in a second), that's not impatience, it's a cheat. Log it with their identifiers; consider \`DropPlayer\`. For ordinary limits (a second \`/repair\` after 10 s), just say "wait X seconds".

:::do
- Use \`GetGameTimer()\` for cooldowns; \`os.time()\` (server) for anything saved or calendar-based.
- Record the time only when the action really happens.
- Put cooldowns and rate limits on **every** server event that gives something or costs performance.
- Clear per-player cooldown tables in \`playerDropped\`.
:::

:::dont
- Don't rely on client-side cooldowns for anything valuable.
- Don't use \`os.time()\` in client scripts.
- Don't store cooldowns by player name; use the server ID while online and the license for saved ones.
:::

:::gta In your GTA server
Robbery scripts usually combine all three: a **global** cooldown per store (\`lastRobbed[storeId]\`), a **per-player** cooldown, and a minimum number of police online. Daily rewards save \`os.time()\` in the database and compare \`os.time() - lastClaim >= 24 * 60 * 60\` when the player next claims.
:::

=== QUIZ
? You want a 30-second repair cooldown in a client script. Which clock?
+ \`GetGameTimer()\`
- \`os.time()\`
- \`os.date()\`
> os doesn't exist on the client, and GetGameTimer is in milliseconds, perfect for short cooldowns.
? A "daily reward" must still work after a server restart. Which clock?
- \`GetGameTimer()\`, because it's more precise
+ \`os.time()\`, saved in the database
> GetGameTimer restarts at 0 with the server. A saved Unix timestamp survives.
? A cooldown is only checked on the client. What can a cheater do?
+ Trigger the server event directly, as often as they like
- Nothing, the client check stops them
- Only change the cooldown length
> Cheaters skip client code. The server must enforce limits.
? What should happen to \`lastRepair[src]\` when the player leaves?
+ Remove it in playerDropped, so the next player with that ID starts fresh
- Keep it forever
- Set it to 0 for everyone
> Server IDs are reused. Clean up per-player tables.

=== EXERCISE
title: Cooldowns and a radio rate limit
Write the **server** code:

1. \`onCooldown(src, action, ms)\`: returns \`true\` if this player did \`action\` less than \`ms\` milliseconds ago. Otherwise it **records** now for that player and action and returns \`false\`. Store it as \`cooldowns[src][action]\`. Different actions and different players are independent.
2. Net event \`radio:message\` with \`text\`: allow at most **3 messages per 10 seconds** per player. Allowed: print \`<name>: <text>\`. Over the limit: print \`Rate limited <name>\` and ignore it.
3. \`playerDropped\`: remove the leaving player from \`cooldowns\` **and** from your rate-limit table.
4. \`formatTime(ts)\` returns the UTC date like \`2026-10-31 20:00\` (use \`os.date("!%Y-%m-%d %H:%M", ts)\`).

\`\`\`lua starter
local cooldowns = {}
local radio = {}

local function onCooldown(src, action, ms)
  return false
end

RegisterNetEvent("radio:message", function(text)
  print(GetPlayerName(source) .. ": " .. text)
end)

local function formatTime(ts)
  return tostring(ts)
end
\`\`\`

\`\`\`lua solution
local cooldowns = {}
local radio = {}

local function onCooldown(src, action, ms)
  local now = GetGameTimer()
  cooldowns[src] = cooldowns[src] or {}
  local last = cooldowns[src][action]
  if last and now - last < ms then return true end
  cooldowns[src][action] = now
  return false
end

RegisterNetEvent("radio:message", function(text)
  local src = source
  local now = GetGameTimer()
  local list = radio[src] or {}
  radio[src] = list
  for i = #list, 1, -1 do
    if now - list[i] > 10000 then table.remove(list, i) end
  end
  if #list >= 3 then
    print("Rate limited " .. GetPlayerName(src))
    return
  end
  list[#list + 1] = now
  print(GetPlayerName(src) .. ": " .. tostring(text))
end)

AddEventHandler("playerDropped", function()
  local src = source
  cooldowns[src] = nil
  radio[src] = nil
end)

local function formatTime(ts)
  return os.date("!%Y-%m-%d %H:%M", ts)
end
\`\`\`

\`\`\`lua test
__check(onCooldown(1, "repair", 5000) == false, 'First use: onCooldown(1, "repair", 5000) returns false (not on cooldown)')
__check(onCooldown(1, "repair", 5000) == true, 'Right after: onCooldown(1, "repair", 5000) returns true')
__check(onCooldown(1, "refuel", 5000) == false, 'A different action has its own cooldown')
__check(onCooldown(2, "repair", 5000) == false, 'A different player has their own cooldown')
Wait(5100)
__check(onCooldown(1, "repair", 5000) == false, 'After 5.1 s, repair is allowed again')
for i = 1, 5 do __fakeClient(2, "radio:message", "10-4 #" .. i) Wait(200) end
Wait(200)
__check(__printedLine("Bob: 10-4 #3"), 'Bob\\'s first 3 messages go through')
__check(not __printedLine("Bob: 10-4 #4") and __printed("Rate limited Bob"), 'The 4th and 5th message within 10 s are rate limited')
Wait(10500)
__fakeClient(2, "radio:message", "back again"); Wait(200)
__check(__printedLine("Bob: back again"), 'After the window has passed, Bob can talk again')
__drop(2, "Exiting"); Wait(100)
__check(cooldowns[2] == nil, 'playerDropped must clear cooldowns[2]')
local leftover = false
for k, v in pairs(radio) do if k == 2 then leftover = true end end
__check(not leftover, 'playerDropped must clear Bob from the radio rate-limit table')
__check(formatTime(1793476800) == "2026-10-31 20:00", 'formatTime(1793476800) should be "2026-10-31 20:00" (got ' .. tostring(formatTime(1793476800)) .. ')')
\`\`\`

side: server
duration: 30000
match: GetGameTimer :: Use GetGameTimer for the cooldowns
match: os\\.date :: Use os.date in formatTime
match: playerDropped :: Clean up in playerDropped
hint: onCooldown: \`cooldowns[src] = cooldowns[src] or {}\` then compare \`now - last < ms\`.
hint: Rate limit: keep a list of timestamps per player, remove ones older than 10000 ms (loop backwards), refuse if 3 are left.
hint: formatTime: \`return os.date("!%Y-%m-%d %H:%M", ts)\` (the \`!\` means UTC).
`,Ce=`---
id: fivem-mistakes
title: Common FiveM mistakes & anti-patterns
part: FiveM intermediate
minutes: 35
summary: The mistakes that break real servers (lag, exploits, lost data, stuck players), why each one happens, and the fix. Ends with repairing a broken payday resource.
---
## Learn from everyone else's bugs

Every one of these has broken real servers. Each comes with **why** it's a problem and the **fix**, so you can spot them in your own code and in resources you download. Many free resources online contain several of them.

## Performance

**1. \`while true do\` without \`Wait\`.** The loop never lets anything else run: the game (or the whole server!) freezes.
Fix: every endless loop needs a \`Wait(...)\` inside, on **every** path through the loop.

**2. \`Wait(0)\` when nothing needs every frame.** 60 runs per second on every player's PC, all the time.
Fix: tiered sleeps; \`Wait(0)\` only while drawing or reading keys near something.

**3. Creating persistent things in loops** (blips, peds, vehicles, event handlers). Thousands of copies.
Fix: create once; keep the handle.

**4. Querying the database or sending events every frame/second.**
Fix: cache in Lua; send on change; save on a timer and on drop.

## Security

**5. Trusting client data.** \`RegisterNetEvent("pay", function(amount) money[src] = money[src] + amount end)\` is a free-money button.
Fix: the client **asks**, the server **decides**. Prices, rewards and permissions come from server files.

**6. Events that do powerful things with no checks**: \`admin:kick(target)\`, \`inventory:addItem(item, count)\`, \`vehicle:spawn(model)\`.
Fix: check permission (\`IsPlayerAceAllowed\`), distance, job, ownership, rate. Or don't make such an event at all.

**7. Secrets in client/shared files** (webhooks, API keys, admin lists).
Fix: server-only files or server convars.

**8. Permissions checked only on the client** (a hidden button).
Fix: check again on the server, always.

## Correctness

**9. Using \`source\` after a \`Wait\` or \`.await\`.** \`source\` is a global and may belong to another event by then.
Fix: \`local src = source\` as the first line of every server handler.

**10. Forgetting \`RegisterNetEvent\`.** The server silently ignores the client's event.
Fix: every event that crosses the network is registered on the receiving side.

**11. \`GetPlayers()\` returns strings.** \`onDuty["2"]\` is not \`onDuty[2]\`, so lookups silently fail.
Fix: \`local src = tonumber(id)\` inside the loop.

**12. Natives on the wrong side** (\`PlayerPedId\` on the server, \`GetPlayerIdentifiers\` on the client).
Fix: check the side on docs.fivem.net; server uses \`GetPlayerPed(src)\`.

**13. Saving data by server ID or name.** The next player with that ID gets it.
Fix: save by \`license\`; clean per-player tables in \`playerDropped\`.

**14. Never cleaning up**: tables keyed by player that grow forever, spawned cars left on the map, NUI focus never released.
Fix: \`playerDropped\`, \`onResourceStop\`, \`SetNuiFocus(false, false)\` on every close path.

**15. Copy-pasting code you don't understand.** It "works" until it doesn't, and you can't fix it.
Fix: read it line by line (you can now!), and test it on a local server first.

## See a few in action

\`\`\`lua server bad
local onDuty = { [2] = true }
for _, id in ipairs(GetPlayers()) do
  if onDuty[id] then print("Paying " .. GetPlayerName(id)) end   -- never runs: id is "2", not 2
end
print("nobody was paid")
\`\`\`

\`\`\`lua server good
local onDuty = { [2] = true }
for _, id in ipairs(GetPlayers()) do
  local src = tonumber(id)
  if onDuty[src] then print("Paying " .. GetPlayerName(src)) end
end
\`\`\`

\`\`\`lua bad
-- forgot RegisterNetEvent: the server never hears this
AddEventHandler("garage:store", function(plate) print("stored", plate) end)
TriggerServerEvent("garage:store", "TINA 01")
\`\`\`

:::why Why do these survive testing?
Most of them only show up with **many players**, **over time**, or with **someone malicious**: the string-key bug only matters when a second player joins; the memory leak after a week; the exploit only when a cheater finds it. Testing alone on a local server hides them. That's why you learn the patterns instead of waiting for them to bite.
:::

:::do A pre-release checklist for every resource
- Every \`while true\` has a \`Wait\`, and idles at 0.00–0.02 ms in resmon.
- Every server event: \`local src = source\`, type checks, range checks, permission/distance/ownership, rate limit.
- No secrets or prices-that-matter in client/shared files.
- Data saved by license; per-player tables cleaned in \`playerDropped\`.
- Entities and blips you create are removed when no longer needed.
:::

:::gta In your GTA server
When you download a resource, skim it for exactly these things before adding it to a live server: search for \`TriggerServerEvent\` and look at what the server does with the data; search for \`Wait(0)\`; look for webhooks in client files. Ten minutes of reading can save your server's economy.
:::

=== QUIZ
? A server loop does \`for _, id in ipairs(GetPlayers()) do if jobs[id] ...\` but nobody matches. Why?
+ GetPlayers returns IDs as strings; the table is keyed by numbers
- GetPlayers only works on the client
- jobs must be global
> Convert with tonumber(id) inside the loop.
? Why copy \`source\` into a local at the very start of a handler?
+ After a Wait or database call, the global source might belong to someone else
- Locals are required for events
- It makes the event register
> source is only reliable before the handler first pauses.
? Which event design is safe?
- \`shop:buy(item, price)\`
- \`money:add(amount)\`
+ \`shop:buy(item)\`, with the price looked up on the server
> The client only names what it wants. Everything valuable is decided by the server.
? A resource runs fine alone on your test server but lags a full server. Most likely cause?
+ Per-frame or per-second work that scales with players (Wait(0) loops, queries, events)
- Too many comments
- Using local variables
> Costs multiply by players and time. Look for loops that run too often.

=== EXERCISE
title: Repair the payday resource
This server resource has four of the classic mistakes. Rewrite it so that:

1. The exploitable \`job:paycheck\` event (client sends the amount!) is **removed** completely.
2. A net event \`job:toggleDuty\` (no data) toggles \`onDuty[src]\`, with a **5 second** per-player cooldown so it can't be spammed (spam inside 5 s is ignored).
3. The payday thread pays every on-duty player \`Salary[jobs[src]]\` every \`PAY_INTERVAL\` ms. It must use \`Wait(PAY_INTERVAL)\` (it currently freezes the server) and convert the IDs from \`GetPlayers()\` with \`tonumber\`.
4. Every handler starts with \`local src = source\`.

\`\`\`lua starter
local Salary = { police = 450, mechanic = 300 }
local jobs = { [1] = "mechanic", [2] = "police", [3] = "mechanic" }
local money = { [1] = 0, [2] = 0, [3] = 0 }
local onDuty = {}
local PAY_INTERVAL = 2000   -- short for practice; a real server might use 10 minutes

RegisterNetEvent("job:paycheck", function(amount)
  money[source] = money[source] + amount
end)

RegisterNetEvent("job:toggleDuty", function()
  Wait(10)
  onDuty[source] = not onDuty[source]
end)

CreateThread(function()
  while true do
    for _, id in ipairs(GetPlayers()) do
      if onDuty[id] then money[id] = money[id] + Salary[jobs[id]] end
    end
  end
end)
\`\`\`

\`\`\`lua solution
local Salary = { police = 450, mechanic = 300 }
local jobs = { [1] = "mechanic", [2] = "police", [3] = "mechanic" }
local money = { [1] = 0, [2] = 0, [3] = 0 }
local onDuty = {}
local PAY_INTERVAL = 2000   -- short for practice; a real server might use 10 minutes
local lastToggle = {}

RegisterNetEvent("job:toggleDuty", function()
  local src = source
  local now = GetGameTimer()
  if lastToggle[src] and now - lastToggle[src] < 5000 then return end
  lastToggle[src] = now
  onDuty[src] = not onDuty[src]
end)

CreateThread(function()
  while true do
    Wait(PAY_INTERVAL)
    for _, id in ipairs(GetPlayers()) do
      local src = tonumber(id)
      if onDuty[src] and Salary[jobs[src]] then
        money[src] = money[src] + Salary[jobs[src]]
      end
    end
  end
end)
\`\`\`

\`\`\`lua test
__fakeClient(1, "job:paycheck", 999999); Wait(50)
__check(money[1] == 0, 'job:paycheck must be gone: a client must not be able to send its own pay')
__fakeClient(2, "job:toggleDuty"); Wait(50)
__check(onDuty[2] == true, 'Bob toggles duty: onDuty[2] should be true')
__fakeClient(2, "job:toggleDuty"); Wait(50)
__fakeClient(2, "job:toggleDuty"); Wait(50)
__check(onDuty[2] == true, 'Spamming job:toggleDuty within 5 s must be ignored (Bob should still be on duty)')
Wait(2100)
__check(money[2] == 450, 'After one PAY_INTERVAL, Bob (police, on duty) should have $450 (got ' .. tostring(money[2]) .. ')')
__check(money[1] == 0 and money[3] == 0, 'Players who are not on duty are not paid')
Wait(5000)
__fakeClient(2, "job:toggleDuty"); Wait(50)
__check(onDuty[2] == false, 'After the 5 s cooldown, Bob can go off duty again')
local before = money[2]
Wait(2500)
__check(money[2] == before, 'Off duty: no more pay')
\`\`\`

side: server
duration: 15000
nomatch: job:paycheck :: Remove the job:paycheck event completely
match: tonumber :: Convert GetPlayers() ids with tonumber
match: Wait\\s*\\(\\s*PAY_INTERVAL\\s*\\) :: Use Wait(PAY_INTERVAL) in the payday loop
match: local\\s+src\\s*=\\s*source :: Start handlers with local src = source
hint: Delete the whole \`job:paycheck\` handler. Pay only comes from the server's own Salary table.
hint: Cooldown: a \`lastToggle\` table and \`GetGameTimer()\`, like the Cooldowns lesson.
hint: In the loop: \`Wait(PAY_INTERVAL)\` first, then \`local src = tonumber(id)\` for each player.
`,we=`---
id: proj-bank
title: Project: Maze Bank (pure Lua)
part: Projects
minutes: 50
summary: Build a small bank step by step, combining tables, classes, closures, error handling, sorting and string formatting. No GTA needed, every piece is plain Lua.
---
## What you'll build

A bank for Los Santos: open accounts, deposit, transfer with proper "no, because..." answers, print a statement, and show a leaderboard. It's pure Lua, so it can run on the server of any framework later. Every step uses something from an earlier lesson; the lesson name is in brackets so you can look back.

Work through the steps **in the exercise editor** below, checking as you go. Don't try to write everything at once.

## Step 1: design the data first

Before writing functions, decide what you store. Good data design makes the code obvious.

\`\`\`lua norun
accounts = {
  ["tina"] = { owner = "tina", balance = 500, history = { "+500 opening" } },
  ["bob"]  = { owner = "bob",  balance = 0,   history = {} },
}
\`\`\`

- A **dictionary** keyed by owner, so finding an account is instant: \`accounts[owner]\` *(Tables II)*.
- Money as **whole numbers** (dollars or cents), never decimals *(Common mistakes, #10)*.
- A **history** list per account, created inside the constructor so it's not shared *(Objects & classes)*.

## Step 2: one place that changes balances

All money movement goes through **one private function**. If every feature changes \`balance\` directly, one forgotten check somewhere is a bug. With one function, the rules live in one place:

\`\`\`lua
local function move(account, amount, note)
  account.balance = account.balance + amount     -- amount may be negative
  table.insert(account.history, ("%+d %s"):format(amount, note))
end

local acc = { balance = 100, history = {} }
move(acc, 50, "deposit")
move(acc, -20, "atm")
print(acc.balance, table.concat(acc.history, " | "))
\`\`\`

\`%+d\` always shows the sign: \`+50\`, \`-20\` *(Formatting text)*.

## Step 3: validate with "ok, reason"

Every public function checks its input and returns \`false, "reason"\` instead of erroring *(Error handling in depth)*:

\`\`\`lua
local function validAmount(n)
  return type(n) == "number" and n >= 1 and n == math.floor(n)
end
print(validAmount(50), validAmount(-5), validAmount(2.5), validAmount("10"))
\`\`\`

## Step 4: transfer = check everything, then change

\`\`\`lua norun
function Bank.transfer(from, to, amount)
  if not validAmount(amount) then return false, "invalid amount" end
  local a, b = accounts[from], accounts[to]
  if not a or not b then return false, "unknown account" end
  if a == b then return false, "same account" end
  if a.balance < amount then return false, "insufficient funds" end
  move(a, -amount, "to " .. to)        -- only now do we change anything
  move(b, amount, "from " .. from)
  return true
end
\`\`\`

## Step 5: the statement and the leaderboard

A statement is just the history joined into lines; the leaderboard is a sorted list of accounts *(The table toolbox)*:

\`\`\`lua
local list = { { owner = "bob", balance = 300 }, { owner = "tina", balance = 900 }, { owner = "kim", balance = 300 } }
table.sort(list, function(a, b)
  if a.balance ~= b.balance then return a.balance > b.balance end
  return a.owner < b.owner
end)
for i, a in ipairs(list) do print(("%d. %-6s $%d"):format(i, a.owner, a.balance)) end
\`\`\`

:::tip Build in small steps
Write \`Bank.open\` and check. Then \`Bank.deposit\` and check. The checker's list shows which parts already work. That's how real projects are built: one working piece at a time.
:::

:::gta Where this goes in FiveM
This module would live in a **server** file. Server events (\`bank:transfer\`) would call \`Bank.transfer(license, targetLicense, amount)\` after the usual \`local src = source\` and permission/distance checks, and \`TriggerClientEvent\` would send the result message back. The bank itself never needs to know about players or events. That separation is what makes it easy to test, and reuse.
:::

=== QUIZ
? Why route all balance changes through one \`move\` function?
+ The rules and the history logging live in one place, so no feature can forget them
- Lua requires a single function for numbers
- It makes the code longer, which is safer
> One door for all changes means one place to get right.
? In \`transfer\`, why are all the checks before the first \`move\`?
+ So a failed check never leaves the money half-moved
- Checks are faster at the top
- move() can only be called once
> Check first, change last.
? What does \`("%+d"):format(-20)\` give?
- 20
+ -20
- +20
> %+d always shows the sign: +50 or -20.
? Why is \`accounts\` a dictionary keyed by owner instead of a list?
+ Finding one account is instant: \`accounts[owner]\`, no loop needed
- Lists can't hold tables
- Dictionaries are sorted
> Look-ups by key are what dictionaries are for. Sort a copy into a list when you need order.

=== EXERCISE
title: Maze Bank
Complete the \`Bank\` module. Rules:

- \`Bank.open(owner, initial)\`: \`initial\` defaults to 0 and must be a whole number ≥ 0. If the owner already has an account, return \`false, "account exists"\`. Otherwise create it (with its own \`history\`; if \`initial > 0\` add the history line \`+<initial> opening\`) and return \`true\`.
- \`Bank.deposit(owner, amount)\`: \`false, "invalid amount"\` / \`false, "unknown account"\`, else add (history \`+<amount> deposit\`) and return \`true\`.
- \`Bank.transfer(from, to, amount)\`: as in step 4 (reasons: \`invalid amount\`, \`unknown account\`, \`same account\`, \`insufficient funds\`). History lines \`-<amount> to <to>\` and \`+<amount> from <from>\`.
- \`Bank.balance(owner)\`: the balance, or \`nil\` if there's no account.
- \`Bank.statement(owner)\`: one string: \`Statement for <owner>\`, then every history line, then \`Balance: $<balance>\`, joined with \`"\\n"\`.
- \`Bank.richest(n)\`: a list of the top \`n\` **owner names**, richest first, ties A→Z.

\`\`\`lua starter
local Bank = {}
local accounts = {}

local function validAmount(n)
  return type(n) == "number" and n >= 1 and n == math.floor(n)
end

local function move(account, amount, note)
  account.balance = account.balance + amount
  table.insert(account.history, ("%+d %s"):format(amount, note))
end

function Bank.open(owner, initial)
  -- step 1
end

function Bank.deposit(owner, amount)
  -- step 2
end

function Bank.transfer(from, to, amount)
  -- step 3
end

function Bank.balance(owner)
end

function Bank.statement(owner)
end

function Bank.richest(n)
end
\`\`\`

\`\`\`lua solution
local Bank = {}
local accounts = {}

local function validAmount(n)
  return type(n) == "number" and n >= 1 and n == math.floor(n)
end

local function move(account, amount, note)
  account.balance = account.balance + amount
  table.insert(account.history, ("%+d %s"):format(amount, note))
end

function Bank.open(owner, initial)
  initial = initial or 0
  if type(initial) ~= "number" or initial < 0 or initial ~= math.floor(initial) then return false, "invalid amount" end
  if accounts[owner] then return false, "account exists" end
  local acc = { owner = owner, balance = 0, history = {} }
  accounts[owner] = acc
  if initial > 0 then move(acc, initial, "opening") end
  return true
end

function Bank.deposit(owner, amount)
  if not validAmount(amount) then return false, "invalid amount" end
  local acc = accounts[owner]
  if not acc then return false, "unknown account" end
  move(acc, amount, "deposit")
  return true
end

function Bank.transfer(from, to, amount)
  if not validAmount(amount) then return false, "invalid amount" end
  local a, b = accounts[from], accounts[to]
  if not a or not b then return false, "unknown account" end
  if a == b then return false, "same account" end
  if a.balance < amount then return false, "insufficient funds" end
  move(a, -amount, "to " .. to)
  move(b, amount, "from " .. from)
  return true
end

function Bank.balance(owner)
  local acc = accounts[owner]
  return acc and acc.balance or nil
end

function Bank.statement(owner)
  local acc = accounts[owner]
  if not acc then return nil end
  local lines = { "Statement for " .. owner }
  for _, h in ipairs(acc.history) do lines[#lines + 1] = h end
  lines[#lines + 1] = "Balance: $" .. acc.balance
  return table.concat(lines, "\\n")
end

function Bank.richest(n)
  local list = {}
  for _, acc in pairs(accounts) do list[#list + 1] = acc end
  table.sort(list, function(a, b)
    if a.balance ~= b.balance then return a.balance > b.balance end
    return a.owner < b.owner
  end)
  local names = {}
  for i = 1, math.min(n, #list) do names[i] = list[i].owner end
  return names
end
\`\`\`

\`\`\`lua test
local function r(...) return table.pack(pcall(...)) end
local x = r(Bank.open, "tina", 500)
__check(x[1] and x[2] == true and Bank.balance and Bank.balance("tina") == 500, 'Bank.open("tina", 500) returns true; Bank.balance("tina") is 500')
x = r(Bank.open, "tina", 10)
__check(x[1] and x[2] == false and x[3] == "account exists", 'Opening a second account for tina returns false, "account exists"')
x = r(Bank.open, "bob")
__check(x[1] and x[2] == true and Bank.balance("bob") == 0, 'Bank.open("bob") with no amount starts at 0')
Bank.open("kim", 300)
x = r(Bank.deposit, "bob", 300)
__check(x[1] and x[2] == true and Bank.balance("bob") == 300, 'Bank.deposit("bob", 300) works')
x = r(Bank.deposit, "bob", -5)
__check(x[1] and x[2] == false and x[3] == "invalid amount", 'deposit -5 → false, "invalid amount"')
x = r(Bank.deposit, "ghost", 5)
__check(x[1] and x[2] == false and x[3] == "unknown account", 'deposit to an unknown account → false, "unknown account"')
x = r(Bank.transfer, "bob", "tina", 1000)
__check(x[1] and x[2] == false and x[3] == "insufficient funds" and Bank.balance("bob") == 300, 'transfer more than you have → false, "insufficient funds", nothing changes')
x = r(Bank.transfer, "tina", "tina", 10)
__check(x[1] and x[2] == false and x[3] == "same account", 'transfer to yourself → false, "same account"')
x = r(Bank.transfer, "tina", "nobody", 10)
__check(x[1] and x[2] == false and x[3] == "unknown account" and Bank.balance("tina") == 500, 'transfer to an unknown account → false, "unknown account", tina keeps 500')
x = r(Bank.transfer, "tina", "bob", 2.5)
__check(x[1] and x[2] == false and x[3] == "invalid amount", 'transfer 2.5 → false, "invalid amount"')
x = r(Bank.transfer, "tina", "bob", 200)
__check(x[1] and x[2] == true and Bank.balance("tina") == 300 and Bank.balance("bob") == 500, 'transfer 200 tina → bob: tina 300, bob 500')
local okS, s = pcall(Bank.statement, "tina")
__check(okS and s == "Statement for tina\\n+500 opening\\n-200 to bob\\nBalance: $300", 'Bank.statement("tina") should be:\\nStatement for tina\\n+500 opening\\n-200 to bob\\nBalance: $300\\n(got: ' .. tostring(s) .. ')')
local okB, sb = pcall(Bank.statement, "bob")
__check(okB and sb == "Statement for bob\\n+300 deposit\\n+200 from tina\\nBalance: $500", 'Bob\\'s statement has his own history (+300 deposit, +200 from tina)')
local okR, top = pcall(Bank.richest, 3)
__check(okR and type(top) == "table" and table.concat(top, ",") == "bob,kim,tina", 'Bank.richest(3) → { "bob", "kim", "tina" } (bob 500; kim and tina 300, so A→Z) (got ' .. (okR and type(top) == "table" and table.concat(top, ",") or tostring(top)) .. ')')
local okR2, top2 = pcall(Bank.richest, 1)
__check(okR2 and type(top2) == "table" and #top2 == 1 and top2[1] == "bob", 'Bank.richest(1) → { "bob" }')
\`\`\`

hint: Do one function at a time and press Check after each: the list shows which parts pass.
hint: open: \`initial = initial or 0\`, refuse if \`accounts[owner]\` exists, then \`accounts[owner] = { owner = owner, balance = 0, history = {} }\` and \`move(...)\` the opening amount.
hint: statement: build a list \`{ "Statement for " .. owner }\`, add each history line, add the balance line, \`table.concat(lines, "\\n")\`.
hint: richest: copy accounts into a list with \`pairs\`, \`table.sort\` (balance desc, owner asc), then take the first \`n\` owners.
`,Te=`---
id: proj-shop
title: Project: a secure shop with inventory
part: Projects
minutes: 60
summary: Design item and inventory data, then build a server-side shop that checks distance, money, weight and spam before it sells anything. The economy lessons, all in one.
---
## What you'll build

The server half of a 24/7 store: the client asks "I'd like 2 waters", and the server decides everything. It's the most copied kind of resource in FiveM, and the most often exploited. Yours won't be.

## Step 1: design the item data (once, on the server)

Every item in your economy is described **once**, in one registry. Everything else refers to items by their **name** (a short id):

\`\`\`lua norun
Items = {
  water    = { label = "Water",    price = 2,   weight = 1, maxStack = 10 },
  burger   = { label = "Burger",   price = 8,   weight = 2, maxStack = 5  },
  phone    = { label = "Phone",    price = 150, weight = 1, maxStack = 1  },
  lockpick = { label = "Lockpick", price = 50,  weight = 1, maxStack = 3  },
}
\`\`\`

:::why Why a registry?
If prices and weights are scattered through your code, the burger costs $8 in the shop, $6 in the vending machine and weighs nothing in the trunk. With one table, every feature agrees, and balancing your economy means editing one line. Prices live on the **server**; a copy without anything secret can be sent to clients for the menu.
:::

## Step 2: design the inventory data

An inventory belongs to a **character**, so key it by the permanent identifier, never by server ID *(Player identifiers)*. Store **counts by item name**, not a list of item objects:

\`\`\`lua norun
inventories = {
  ["license:1a2b3c4d5e"] = { water = 3, phone = 1 },
}
\`\`\`

That makes "how many waters?" instant (\`inv.water or 0\`) and adding easy. The total weight is calculated from the registry:

\`\`\`lua
local Items = { water = { weight = 1 }, burger = { weight = 2 } }
local function inventoryWeight(inv)
  local total = 0
  for name, count in pairs(inv) do
    total = total + (Items[name] and Items[name].weight or 0) * count
  end
  return total
end
print(inventoryWeight({ water = 3, burger = 2 }))   -- 3*1 + 2*2 = 7
\`\`\`

## Step 3: the order of checks in \`shop:buy\`

This is the heart of the project. **All** checks first, **then** all changes *(Security; Error handling in depth)*:

1. \`local src = source\`, find their license and data.
2. **Rate limit** (one purchase per second is plenty for a human) *(Cooldowns)*.
3. **Types and ranges**: item is a string that exists in \`Items\`; amount is a whole number 1–10.
4. **Distance**: the player's ped (server side: \`GetEntityCoords(GetPlayerPed(src))\`) is within a few metres of the shop *(Natives)*.
5. **Stack limit**: they won't have more than \`maxStack\`.
6. **Weight**: new total weight ≤ the limit.
7. **Money**: the server calculates the cost and checks the balance.
8. Only now: take the money, add the items, log it, tell the client.

:::warn Distance on the server
Never accept "I'm at the shop" from the client. The server can read the player's position itself. (It's not perfect against teleport cheats, but it stops the lazy "buy from anywhere" exploit, which is the most common one.)
:::

## Step 4: answer the client

Tell the player what happened with \`TriggerClientEvent("shop:result", src, ok, message)\`. The client shows a notification. Keep messages friendly for honest failures ("Not enough money") and quiet for impossible requests (just log them).

:::gta In a real server
Here \`money\` and \`inventories\` are plain tables. In a real server they'd be loaded from the database and cached *(Databases)*, or you'd call your framework or inventory resource: \`exports.ox_inventory:CanCarryItem(src, item, amount)\` and \`exports.ox_inventory:AddItem(src, item, amount)\`. The checks and their order stay exactly the same.
:::

=== QUIZ
? Why store inventories as \`{ water = 3 }\` instead of \`{ "water", "water", "water" }\`?
+ Counting and adding are instant and simple; no loops needed
- Lists can't hold strings
- It's required by FiveM
> Counts by name are the simplest correct shape for stackable items.
? Who decides the price of a purchase?
- The client, from the menu
+ The server, from its Items registry
- Whatever is lower
> Prices from the client are an exploit waiting to happen.
? Why key inventories by license and not by server ID?
+ Server IDs change every connection and are reused
- Licenses are shorter
- Server IDs are secret
> Permanent data needs a permanent key.
? How does the server know the player is at the shop?
- The client sends \`atShop = true\`
+ It reads the ped's position with \`GetEntityCoords(GetPlayerPed(src))\` and measures the distance
- It can't know
> The server can check positions itself. Never trust "I'm there" from the client.

=== EXERCISE
title: The 24/7 store
Complete \`shop:buy(item, amount)\` on the **server** following step 3. The shop is at \`SHOP\`; allow buying within **5 m**. Limits: amount 1-10, \`maxStack\` per item, total weight ≤ \`MAX_WEIGHT\`, one purchase per **1000 ms** per player.

On success: take the money, add the items, and \`TriggerClientEvent("shop:result", src, true, "Bought <amount>x <label>")\`. On an honest failure, send \`false\` and one of: \`"Too far from the shop"\`, \`"Not enough money"\`, \`"You can't carry that"\`, \`"You can't hold more <label>"\`. Invalid data (unknown item, bad amount) and spam: just \`return\`.

Tina is next to the shop with $100. Steve is in Sandy Shores with $1000.

\`\`\`lua starter
local Items = {
  water    = { label = "Water",    price = 2,   weight = 1, maxStack = 10 },
  burger   = { label = "Burger",   price = 8,   weight = 2, maxStack = 5 },
  phone    = { label = "Phone",    price = 150, weight = 1, maxStack = 1 },
  lockpick = { label = "Lockpick", price = 50,  weight = 1, maxStack = 3 },
}
local SHOP = vector3(213.0, -808.0, 30.7)
local MAX_WEIGHT = 12
local money = { ["license:1a2b3c4d5e"] = 100, ["license:0badc0ffee"] = 1000 }
local inventories = { ["license:1a2b3c4d5e"] = { water = 8 }, ["license:0badc0ffee"] = {} }
local lastBuy = {}

local function inventoryWeight(inv)
  local total = 0
  for name, count in pairs(inv) do
    total = total + (Items[name] and Items[name].weight or 0) * count
  end
  return total
end

RegisterNetEvent("shop:buy", function(item, amount, price)
  local license = GetPlayerIdentifierByType(source, "license")
  money[license] = money[license] - price * amount
  inventories[license][item] = (inventories[license][item] or 0) + amount
end)
\`\`\`

\`\`\`lua solution
local Items = {
  water    = { label = "Water",    price = 2,   weight = 1, maxStack = 10 },
  burger   = { label = "Burger",   price = 8,   weight = 2, maxStack = 5 },
  phone    = { label = "Phone",    price = 150, weight = 1, maxStack = 1 },
  lockpick = { label = "Lockpick", price = 50,  weight = 1, maxStack = 3 },
}
local SHOP = vector3(213.0, -808.0, 30.7)
local MAX_WEIGHT = 12
local money = { ["license:1a2b3c4d5e"] = 100, ["license:0badc0ffee"] = 1000 }
local inventories = { ["license:1a2b3c4d5e"] = { water = 8 }, ["license:0badc0ffee"] = {} }
local lastBuy = {}

local function inventoryWeight(inv)
  local total = 0
  for name, count in pairs(inv) do
    total = total + (Items[name] and Items[name].weight or 0) * count
  end
  return total
end

local function reply(src, ok, msg) TriggerClientEvent("shop:result", src, ok, msg) end

RegisterNetEvent("shop:buy", function(item, amount)
  local src = source
  local license = GetPlayerIdentifierByType(src, "license")
  if not license or not money[license] then return end
  local inv = inventories[license]

  local now = GetGameTimer()
  if lastBuy[src] and now - lastBuy[src] < 1000 then return end

  if type(item) ~= "string" or not Items[item] then return end
  if type(amount) ~= "number" or amount < 1 or amount > 10 or amount ~= math.floor(amount) then return end
  local def = Items[item]
  lastBuy[src] = now

  if #(GetEntityCoords(GetPlayerPed(src)) - SHOP) > 5.0 then return reply(src, false, "Too far from the shop") end
  if (inv[item] or 0) + amount > def.maxStack then return reply(src, false, "You can't hold more " .. def.label) end
  if inventoryWeight(inv) + def.weight * amount > MAX_WEIGHT then return reply(src, false, "You can't carry that") end
  local cost = def.price * amount
  if money[license] < cost then return reply(src, false, "Not enough money") end

  money[license] = money[license] - cost
  inv[item] = (inv[item] or 0) + amount
  print(("[shop] %s bought %dx %s for $%d"):format(GetPlayerName(src), amount, item, cost))
  reply(src, true, ("Bought %dx %s"):format(amount, def.label))
end)
\`\`\`

\`\`\`lua test
local T, S = "license:1a2b3c4d5e", "license:0badc0ffee"
local function lastResult() local ev = __events("toClient", "shop:result") local e = ev[#ev] return e and e.args[1], e and e.args[2], #ev end
__fakeClient(1, "shop:buy", "burger", 1, 0); Wait(1100)
local ok, msg = lastResult()
__check(money[T] == 92 and inventories[T].burger == 1, 'Tina buys 1 burger: $8 taken by the SERVER price (ignore the client\\'s price 0), burger added')
__check(ok == true and msg == "Bought 1x Burger", 'Send shop:result true, "Bought 1x Burger" (got ' .. tostring(ok) .. ', ' .. tostring(msg) .. ')')
__fakeClient(1, "shop:buy", "water", 3); Wait(1100)
ok, msg = lastResult()
__check(ok == false and msg == "You can't hold more Water" and inventories[T].water == 8, 'Tina has 8 water (max 10): buying 3 → false, "You can\\'t hold more Water"')
__fakeClient(1, "shop:buy", "lockpick", 3); Wait(1100)
ok, msg = lastResult()
__check(ok == false and msg == "You can't carry that" and inventories[T].lockpick == nil, 'Weight: 8 water (8) + 1 burger (2) = 10; 3 lockpicks would make 13 > 12 → false, "You can\\'t carry that"')
__fakeClient(1, "shop:buy", "phone", 1); Wait(1100)
ok, msg = lastResult()
__check(ok == false and msg == "Not enough money" and money[T] == 92, 'Phone costs $150, Tina has $92 → false, "Not enough money"')
local n0 = select(3, lastResult())
__fakeClient(1, "shop:buy", "gold_bar", 1); Wait(1100)
__fakeClient(1, "shop:buy", "water", -5); Wait(1100)
__fakeClient(1, "shop:buy", "water", 1.5); Wait(1100)
__fakeClient(1, "shop:buy", "water", "1"); Wait(1100)
__check(select(3, lastResult()) == n0 and money[T] == 92, 'Invalid item or amount: just return (no reply, nothing changes)')
__fakeClient(3, "shop:buy", "water", 1); Wait(1100)
ok, msg = lastResult()
__check(ok == false and msg == "Too far from the shop" and money[S] == 1000, 'Steve is in Sandy Shores: false, "Too far from the shop"')
__setCoords(3, 214.0, -807.0, 30.7)
__fakeClient(3, "shop:buy", "water", 2)
__fakeClient(3, "shop:buy", "water", 2)
__fakeClient(3, "shop:buy", "water", 2); Wait(200)
__check(inventories[S].water == 2 and money[S] == 996, 'Spam: 3 purchases at once → only the first goes through (1 per second)')
\`\`\`

side: server
duration: 20000
match: GetEntityCoords\\s*\\(\\s*GetPlayerPed :: Check the distance on the server with GetEntityCoords(GetPlayerPed(src))
match: local\\s+src\\s*=\\s*source :: Start with local src = source
hint: Copy the order from step 3. Write a helper \`local function reply(src, ok, msg) TriggerClientEvent("shop:result", src, ok, msg) end\` and use \`return reply(...)\` for each failure.
hint: Distance: \`#(GetEntityCoords(GetPlayerPed(src)) - SHOP) > 5.0\`
hint: Weight: \`inventoryWeight(inv) + def.weight * amount > MAX_WEIGHT\`. Stack: \`(inv[item] or 0) + amount > def.maxStack\`.
hint: Rate limit: \`lastBuy[src]\` with \`GetGameTimer()\`. Record it once the request is valid.
`,Ee=`---
id: proj-job
title: Project: a delivery job system
part: Projects
minutes: 60
summary: A complete job loop: start the job, get a route, deliver, get paid through another resource, and clean up. The server stays in charge at every step, so it can't be farmed.
---
## What you'll build

GoPostal-style deliveries. The player types \`/startjob\`, gets a GPS route, drives there, and is paid when they deliver. This project ties together commands, events, state bags, exports, cooldowns and cleanup: almost every FiveM lesson.

## Step 1: who owns what

Before any code, decide which side does what *(Client, server & shared)*:

| Thing | Side | Why |
|---|---|---|
| Choosing the destination | server | Otherwise a cheater picks the one next to them |
| Remembering the active job and start time | server | The only copy you can trust |
| Blip, route, marker, "Press E" | client | Purely visual, per player |
| Checking "are they really there?" | server | \`GetEntityCoords(GetPlayerPed(src))\` |
| Paying | server, through the bank's export | One resource owns money *(Exports)* |

The client only ever says two things: "I'd like a job" (the command) and "I'm done" (an event with **no data**: the server already knows everything it needs).

## Step 2: config

\`\`\`lua norun
Config = {
  Pay = 250,
  MinTime = 4000,        -- ms; a real server would use ~60000 (no one drives across the map in 4 s)
  Cooldown = 10000,      -- between jobs
  Deliveries = {
    { label = "Paleto Bay Post Office", coords = vector3(-120.5, 6370.2, 31.5) },
    { label = "Sandy Shores Airfield",  coords = vector3(1700.0, 3290.0, 41.1) },
  },
}
\`\`\`

## Step 3: start the job

\`\`\`lua norun
local jobs = {}        -- [src] = { dest = <delivery>, started = <ms> }

RegisterCommand("startjob", function(source)
  local src = source
  if src == 0 then return end
  if jobs[src] then return notify(src, "You already have a delivery") end
  local dest = Config.Deliveries[math.random(#Config.Deliveries)]
  jobs[src] = { dest = dest, started = GetGameTimer() }
  Player(src).state:set("onJob", true, true)       -- other scripts (HUD, phone) can see it
  TriggerClientEvent("delivery:route", src, dest.label, dest.coords)
end, false)
\`\`\`

The client handler for \`delivery:route\` creates a blip with \`SetBlipRoute\` *(Blips, markers & 3D text)* and draws a marker when near.

## Step 4: complete the job: check, then pay

The checks, in order: is there a job? Are they close to **their** destination? Has enough time passed (teleport/farming guard)? Only then pay, clear the job, set the cooldown and tell the client.

\`\`\`lua server
local dropOff = vector3(-120.5, 6370.2, 31.5)
local started = GetGameTimer()
Wait(1500)
local pos = GetEntityCoords(GetPlayerPed(1))       -- Tina, still in the city
print(("Distance: %.0f m, elapsed: %d ms"):format(#(pos - dropOff), GetGameTimer() - started))
print("Close enough?", #(pos - dropOff) <= 10.0)
\`\`\`

:::why Why is time a check?
Distance alone stops "complete from anywhere", but a teleport cheat can jump to the destination instantly. Real driving takes time, so "faster than possible" is a strong signal. Refuse it and log it.
:::

## Step 5: clean up

When a player leaves, \`jobs[src]\` must go, or the next player who gets that server ID inherits a job *(Common FiveM mistakes)*. On the client, remove the blip when the job ends or the resource stops.

:::gta Making it your own
Ideas once it works: spawn a van with \`CreateVehicle\` and give its plate to the player (delete it at the end), pay by distance, chain several stops, add a job-only ACE or a "mailman" job check, save completed deliveries to the database for a leaderboard.
:::

=== QUIZ
? Why does the client send \`delivery:complete\` with no arguments?
+ The server already knows the destination and start time; anything the client sends could be faked
- Events can't carry arguments
- To save bandwidth
> Give the client nothing to lie about.
? What stops a teleport cheat who jumps straight to the destination?
- The distance check
+ The minimum-time check: no one drives there in a few seconds
- The blip
> Distance plus a realistic minimum time is a solid, simple guard.
? Why pay through \`exports.practice_bank:AddMoney(src, amount)\` instead of a local money table?
+ One resource owns money; everyone else asks it, so balances stay consistent
- Exports are faster
- Local tables can't hold numbers
> Single owner of money, as in the exports lesson.
? What must happen in \`playerDropped\`?
+ Remove their entry from \`jobs\` (and cooldowns), because server IDs are reused
- Nothing; the table empties itself
- Pay them for the unfinished job
> Per-player tables keyed by server ID must be cleaned up when the player leaves.

=== EXERCISE
title: GoPostal
Finish the **server** side:

- \`/startjob\`: if they already have a job → \`notify(src, "You already have a delivery")\`. If they finished one less than \`Config.Cooldown\` ms ago → \`notify(src, "Take a break first")\`. Otherwise store the job (destination + \`GetGameTimer()\`), set \`Player(src).state\` \`onJob\` to \`true\` (replicated) and \`TriggerClientEvent("delivery:route", src, dest.label, dest.coords)\`.
- \`delivery:complete\` (no arguments!): reply with \`TriggerClientEvent("delivery:result", src, false, reason)\` for \`"No active delivery"\`, \`"You're not at the drop-off"\` (more than 10 m away) and \`"Too fast"\` (less than \`Config.MinTime\`). On success: \`exports.practice_bank:AddMoney(src, Config.Pay)\`, clear the job, set \`onJob\` to \`false\`, remember the finish time for the cooldown, and reply \`true, "Paid $250"\`.
- \`playerDropped\`: clear the player's job and cooldown.

For the practice, there's only one destination so the route is predictable.

\`\`\`lua starter
Config = {
  Pay = 250,
  MinTime = 4000,
  Cooldown = 10000,
  Deliveries = {
    { label = "Paleto Bay Post Office", coords = vector3(-120.5, 6370.2, 31.5) },
  },
}

local jobs = {}
local lastDone = {}

local function notify(src, msg) TriggerClientEvent("delivery:notify", src, msg) end
local function result(src, ok, msg) TriggerClientEvent("delivery:result", src, ok, msg) end

RegisterCommand("startjob", function(source)
  local src = source
  local dest = Config.Deliveries[math.random(#Config.Deliveries)]
  -- TODO
end, false)

RegisterNetEvent("delivery:complete", function(paid)
  exports.practice_bank:AddMoney(source, paid)
end)
\`\`\`

\`\`\`lua solution
Config = {
  Pay = 250,
  MinTime = 4000,
  Cooldown = 10000,
  Deliveries = {
    { label = "Paleto Bay Post Office", coords = vector3(-120.5, 6370.2, 31.5) },
  },
}

local jobs = {}
local lastDone = {}

local function notify(src, msg) TriggerClientEvent("delivery:notify", src, msg) end
local function result(src, ok, msg) TriggerClientEvent("delivery:result", src, ok, msg) end

RegisterCommand("startjob", function(source)
  local src = source
  if src == 0 then return end
  if jobs[src] then return notify(src, "You already have a delivery") end
  local now = GetGameTimer()
  if lastDone[src] and now - lastDone[src] < Config.Cooldown then return notify(src, "Take a break first") end
  local dest = Config.Deliveries[math.random(#Config.Deliveries)]
  jobs[src] = { dest = dest, started = now }
  Player(src).state:set("onJob", true, true)
  TriggerClientEvent("delivery:route", src, dest.label, dest.coords)
end, false)

RegisterNetEvent("delivery:complete", function()
  local src = source
  local job = jobs[src]
  if not job then return result(src, false, "No active delivery") end
  local pos = GetEntityCoords(GetPlayerPed(src))
  if #(pos - job.dest.coords) > 10.0 then return result(src, false, "You're not at the drop-off") end
  local now = GetGameTimer()
  if now - job.started < Config.MinTime then
    print(("[delivery] %s finished in %d ms: suspicious"):format(GetPlayerName(src), now - job.started))
    return result(src, false, "Too fast")
  end
  jobs[src] = nil
  lastDone[src] = now
  Player(src).state:set("onJob", false, true)
  exports.practice_bank:AddMoney(src, Config.Pay)
  result(src, true, ("Paid $%d"):format(Config.Pay))
end)

AddEventHandler("playerDropped", function()
  local src = source
  jobs[src] = nil
  lastDone[src] = nil
end)
\`\`\`

\`\`\`lua test
local function last(name) local ev = __events("toClient", name) local e = ev[#ev] return e and e.args[1], e and e.args[2], #ev end
local start = __bank(1)
__fakeClient(1, "delivery:complete", 99999); Wait(50)
local ok, msg = last("delivery:result")
__check(ok == false and msg == "No active delivery" and __bank(1) == start, 'Completing with no job → false, "No active delivery" (and never trust the amount the client sends)')
__command(1, "/startjob"); Wait(50)
local label = last("delivery:route")
__check(label == "Paleto Bay Post Office", '/startjob sends "delivery:route" to Tina with the label and coords')
__check(__state("player:1", "onJob") == true, 'Player(1).state.onJob should be true after /startjob')
__command(1, "/startjob"); Wait(50)
__check(select(1, last("delivery:notify")) == "You already have a delivery", 'A second /startjob → notify "You already have a delivery"')
__fakeClient(1, "delivery:complete"); Wait(50)
ok, msg = last("delivery:result")
__check(ok == false and msg == "You're not at the drop-off", 'Tina is still in the city: false, "You\\'re not at the drop-off"')
__setCoords(1, -118.0, 6372.0, 31.5)
__fakeClient(1, "delivery:complete"); Wait(50)
ok, msg = last("delivery:result")
__check(ok == false and msg == "Too fast" and __bank(1) == start, 'Teleported there instantly: false, "Too fast", no pay')
Wait(4000)
__fakeClient(1, "delivery:complete"); Wait(50)
ok, msg = last("delivery:result")
__check(ok == true and msg == "Paid $250" and __bank(1) == start + 250, 'After 4 s at the drop-off: paid $250 through exports.practice_bank:AddMoney')
__check(__state("player:1", "onJob") == false, 'onJob goes back to false after delivering')
__fakeClient(1, "delivery:complete"); Wait(50)
ok, msg = last("delivery:result")
__check(ok == false and __bank(1) == start + 250, 'Completing twice pays only once')
__command(1, "/startjob"); Wait(50)
__check(select(1, last("delivery:notify")) == "Take a break first", 'Right after a delivery, /startjob → "Take a break first" (cooldown)')
__command(2, "/startjob"); Wait(50)
__drop(2); Wait(50)
__check(jobs[2] == nil, 'When Bob leaves, his job is removed (playerDropped)')
\`\`\`

side: server
duration: 20000
nomatch: function\\s*\\(\\s*paid :: Don't accept the amount from the client: "delivery:complete" takes no arguments
match: GetEntityCoords\\s*\\(\\s*GetPlayerPed :: Check the player's position on the server with GetEntityCoords(GetPlayerPed(src))
hint: Start each handler with \`local src = source\`. For completing, \`local job = jobs[src]\` and check \`if not job then return result(src, false, "No active delivery") end\`.
hint: Distance: \`#(GetEntityCoords(GetPlayerPed(src)) - job.dest.coords) > 10.0\`. Time: \`GetGameTimer() - job.started < Config.MinTime\`.
hint: Pay with a colon: \`exports.practice_bank:AddMoney(src, Config.Pay)\`.
hint: \`AddEventHandler("playerDropped", function() local src = source jobs[src] = nil lastDone[src] = nil end)\`
`;function De(e,t=``){e=e.replace(/\r\n/g,`
`);let n=e.match(/^---\n([\s\S]*?)\n---\n/);if(!n)throw Error(`Missing front matter in `+t);let r={};for(let e of n[1].split(`
`)){let t=e.match(/^(\w+):\s*(.*)$/);t&&(r[t[1]]=t[2].trim())}let i=e.slice(n[0].length).split(/^=== (QUIZ|EXERCISE)\s*$/m),a=i[0],o=``,s=``;for(let e=1;e<i.length;e+=2)i[e]===`QUIZ`?o=i[e+1]:s=i[e+1];return{id:r.id,title:r.title,part:r.part||`Lua basics`,minutes:Number(r.minutes||10),side:r.side||`shared`,summary:r.summary||``,body:a,quiz:Oe(o,t),exercise:s?ke(s,r):null}}function Oe(e,t){let n=[],r=null;for(let t of e.split(`
`)){let e=t.trimEnd();if(e.startsWith(`? `))r={q:e.slice(2),options:[],answer:-1,why:``},n.push(r);else if(r)e.startsWith(`- `)?r.options.push(e.slice(2)):e.startsWith(`+ `)?(r.answer=r.options.length,r.options.push(e.slice(2))):e.startsWith(`> `)&&(r.why+=(r.why?` `:``)+e.slice(2));else continue}for(let e of n)if(e.answer<0)throw Error(`Quiz question without answer in `+t+`: `+e.q);return n}function ke(e,t){let n={title:``,prompt:``,starter:``,solution:``,test:``,preamble:``,hints:[],match:[],nomatch:[],variants:[],side:t.side||`shared`,duration:5e3},r=e.split(`
`),i=[];for(let e=0;e<r.length;e++){let t=r[e],a=t.match(/^```lua (starter|solution|test|preamble)\s*$/);if(a){let t=[];for(e++;e<r.length&&r[e]!=="```";)t.push(r[e]),e++;n[a[1]]=t.join(`
`);continue}let o;(o=t.match(/^title:\s*(.*)$/))?n.title=o[1]:(o=t.match(/^hint:\s*(.*)$/))?n.hints.push(o[1]):(o=t.match(/^match:\s*(.*?)\s*::\s*(.*)$/))?n.match.push({re:o[1],msg:o[2]}):(o=t.match(/^nomatch:\s*(.*?)\s*::\s*(.*)$/))?n.nomatch.push({re:o[1],msg:o[2]}):(o=t.match(/^variant:\s*(.*?)\s+=>\s+(.*?)\s+::\s+(.*?)\s+::\s+(.*)$/))?n.variants.push({find:o[1],replace:o[2],expr:o[3],msg:o[4]}):(o=t.match(/^side:\s*(\w+)\s*$/))?n.side=o[1]:(o=t.match(/^duration:\s*(\d+)\s*$/))?n.duration=Number(o[1]):i.push(t)}return n.prompt=i.join(`
`).trim(),n}var Ae=Object.assign({"./lessons/010-hello.md":e,"./lessons/020-read-code.md":t,"./lessons/030-variables.md":n,"./lessons/040-types.md":r,"./lessons/050-strings.md":i,"./lessons/060-string-format.md":a,"./lessons/070-numbers.md":o,"./lessons/080-decisions.md":s,"./lessons/090-loops.md":c,"./lessons/100-functions.md":l,"./lessons/110-tables-lists.md":u,"./lessons/120-tables-dicts.md":d,"./lessons/130-iterating.md":f,"./lessons/140-table-library.md":p,"./lessons/150-scope-errors.md":m,"./lessons/160-closures.md":h,"./lessons/180-error-handling.md":g,"./lessons/190-metatables.md":_,"./lessons/200-oop.md":v,"./lessons/210-modules.md":y,"./lessons/230-lua-mistakes.md":ee,"./lessons/240-resources.md":te,"./lessons/250-manifest-deep.md":ne,"./lessons/260-sides.md":re,"./lessons/270-threads.md":ie,"./lessons/280-commands.md":ae,"./lessons/290-events.md":oe,"./lessons/300-security.md":se,"./lessons/310-natives.md":ce,"./lessons/320-identifiers.md":le,"./lessons/330-ace.md":ue,"./lessons/340-config.md":de,"./lessons/350-saving.md":fe,"./lessons/360-performance.md":pe,"./lessons/370-debugging.md":me,"./lessons/380-exports.md":he,"./lessons/390-callbacks.md":ge,"./lessons/400-statebags.md":_e,"./lessons/410-database.md":ve,"./lessons/420-chat-nui.md":ye,"./lessons/430-spawning.md":be,"./lessons/440-drawing.md":xe,"./lessons/450-cooldowns.md":Se,"./lessons/460-fivem-mistakes.md":Ce,"./lessons/470-proj-bank.md":we,"./lessons/480-proj-shop.md":Te,"./lessons/490-proj-job.md":Ee}),je=Object.keys(Ae).sort().map((e,t)=>({...De(Ae[e],e),n:t+1})),Me=e=>je.find(t=>t.id===e),Ne=[...new Set(je.map(e=>e.part))],Pe=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`);function Fe(e){return e.split(/(`[^`]+`)/g).map(e=>{if(e.startsWith("`")&&e.endsWith("`")&&e.length>1)return`<code>`+Pe(e.slice(1,-1))+`</code>`;let t=Pe(e);return t=t.replace(/\*\*(.+?)\*\*/g,`<strong>$1</strong>`),t=t.replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g,`$1<em>$2</em>`),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,`<a href="$2" target="_blank" rel="noopener">$1</a>`),t}).join(``)}var Ie={do:[`✅`,`Do`],dont:[`⛔`,`Don't`],why:[`💡`,`Why?`],tip:[`👉`,`Tip`],warn:[`⚠️`,`Watch out`],gta:[`🚓`,`In your GTA server`],try:[`🧪`,`Try it`]},Le=0;function Re(e,{side:t=`shared`}={}){let n=e.replace(/\r\n/g,`
`).split(`
`),r=[],i=0,a=[],o=()=>{a.length&&(r.push(`<p>`+Fe(a.join(` `))+`</p>`),a.length=0)};for(;i<n.length;){let e=n[i],s;if(s=e.match(/^```(\w*)([^\n]*)$/)){o();let e=s[1],a=s[2].trim().split(/\s+/).filter(Boolean),c=[];for(i++;i<n.length&&!/^```\s*$/.test(n[i]);)c.push(n[i]),i++;i++;let l=c.join(`
`),u=e===`lua`&&!a.includes(`norun`),d=a.find(e=>[`client`,`server`,`shared`,`manifest`].includes(e))||t,f=`cb`+ ++Le;r.push(`<div class="codeblock${a.includes(`error`)?` expects-error`:``}" data-side="${d}" id="${f}">`+(a.includes(`bad`)?`<div class="cb-label bad">⛔ Bad example</div>`:a.includes(`good`)?`<div class="cb-label good">✅ Good example</div>`:``)+(d!==`shared`&&e===`lua`?`<div class="cb-side">${d===`manifest`?`fxmanifest.lua`:d+` script`}</div>`:``)+`<pre><code>${Pe(l)}</code></pre>`+(u?`<div class="cb-actions"><button class="btn small run-block">▶ Run</button><button class="btn small ghost edit-block">✏️ Try in playground</button></div><div class="cb-output" hidden></div>`:``)+`</div>`)}else if(s=e.match(/^:::(\w+)\s*(.*)$/)){o();let e=s[1],a=s[2]||(Ie[e]?Ie[e][1]:e),c=[];for(i++;i<n.length&&n[i].trim()!==`:::`;)c.push(n[i]),i++;i++;let l=Ie[e]?Ie[e][0]:`•`;r.push(`<div class="box box-${e}"><div class="box-title">${l} ${Fe(a)}</div>${Re(c.join(`
`),{side:t})}</div>`)}else if(s=e.match(/^(#{2,4})\s+(.*)$/)){o();let e=s[1].length+1;r.push(`<h${e}>${Fe(s[2])}</h${e}>`),i++}else if(/^\s*[-*]\s+/.test(e)||/^\s*\d+\.\s+/.test(e)){o();let t=/^\s*\d+\./.test(e),a=[];for(;i<n.length&&(/^\s*[-*]\s+/.test(n[i])||/^\s*\d+\.\s+/.test(n[i])||/^\s{2,}\S/.test(n[i])&&a.length);)/^\s{2,}\S/.test(n[i])&&!/^\s*([-*]|\d+\.)\s+/.test(n[i])?a[a.length-1]+=` `+n[i].trim():a.push(n[i].replace(/^\s*([-*]|\d+\.)\s+/,``)),i++;let s=t?`ol`:`ul`;r.push(`<${s}>`+a.map(e=>`<li>`+Fe(e)+`</li>`).join(``)+`</${s}>`)}else if(/^\|.*\|\s*$/.test(e)){o();let e=[];for(;i<n.length&&/^\|.*\|\s*$/.test(n[i]);)e.push(n[i]),i++;let t=e=>e.trim().slice(1,-1).split(`|`).map(e=>e.trim()),a=t(e[0]),s=e.slice(1).filter(e=>!/^\|[\s:-|]+\|$/.test(e.trim()));r.push(`<div class="table-wrap"><table><thead><tr>`+a.map(e=>`<th>`+Fe(e)+`</th>`).join(``)+`</tr></thead><tbody>`+s.map(e=>`<tr>`+t(e).map(e=>`<td>`+Fe(e)+`</td>`).join(``)+`</tr>`).join(``)+`</tbody></table></div>`)}else e.trim()===``?(o(),i++):(a.push(e.trim()),i++)}return o(),r.join(`
`)}var ze=[],Be=[];(()=>{let e=`lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,1n,9,16,o,,x,1i,3,,i,,7,a,2,t,3,1k,,,7,2,2,2,3,9,,a,2,q,,2,3,1k,,,5,4,2,2,3,3,,u,2,3,,b,3,1k,,,8,,3,,3,k,2,m,6,,3,1k,,,7,2,2,2,3,7,3,a,2,u,,1n,5,3,3,,4,9,,14,5,1j,,,7,,3,,4,7,2,b,2,t,3,1k,,,7,,3,,4,7,2,b,2,f,,c,4,1j,2,,7,,3,,4,9,,a,2,t,3,1y,,4,6,,,,8,i,2,1p,,,8,c,8,2q,,,a,b,7,21,2,r,,,,,,4,2,1d,k,,2,5,b,,10,9,,2u,b,,6,n,4,4,3,g,4,d,,,3,6,,f,,jj,3,qa,4,s,3,t,2,u,2,1s,w,9,,19,3,,,39,2,y,,3a,c,4,c,63,5,1l,a,,,,,2,o,2,,1c,1a,2,c,k,5,1b,h,12,9,c,3,u,d,1k,e,1c,k,48,3,,l,4,,6,,2,3,5i,1s,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,n,5,4,,2b,2,1e,i,q,i,d,,12,8,p,d,18,4,1b,e,10,,1v,e,c,,8,2,1a,,1f,,,3,2,2,5,2,,,15,5,5,2,6k,8,,2,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,1t,5,8t,2,25,6,1y,b,1d,4,3e,3,1h,f,15,,2,2,a,4,19,b,7,,1p,3,10,e,g,2,18,,c,3,1c,e,8,4,,2,2k,c,6,,2,,4d,c,l,4,1j,2,,7,2,2,2,3,9,,a,2,2,7,3,5,1v,9,,,2,,,4,,5,,,e,2,2a,i,n,,29,k,6j,7,2,9,r,2,2a,h,2y,d,2t,3,2,a,74,f,6t,6,,2,2,4,,,,2,3x,7,2,7,3,,s,a,14,7,,4,8,,9,b,1a,g,5i,8,5j,8,,8,2a,m,,e,3e,6,3,,,2,,7,,,1u,5,,2,,5,9n,4,9,2,,,1c,7,3,5,n,,44l,,6,f,8ug,i,1xc,5,1n,7,t4,,,1j,7,4,29,,b,2,f57,2,3mp,1a,2,n,f2,5,3,6,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,2s,,4g,7,af,,1p,4,e4,4,72,2,6r,,2,,7,2,5,,d6,7,31,7,240,5`.split(`,`).map(e=>e?parseInt(e,36):1);for(let t=0,n=0;t<e.length;t++)(t%2?Be:ze).push(n+=e[t])})();function Ve(e){if(e<768)return!1;for(let t=0,n=ze.length;;){let r=t+n>>1;if(e<ze[r])n=r;else if(e>=Be[r])t=r+1;else return!0;if(t==n)return!1}}function He(e){return e>=127462&&e<=127487}var Ue=8205;function We(e,t,n=!0,r=!0){return(n?Ge:Ke)(e,t,r)}function Ge(e,t,n){if(t==e.length)return t;t&&Je(e.charCodeAt(t))&&Ye(e.charCodeAt(t-1))&&t--;let r=qe(e,t);for(t+=Xe(r);t<e.length;){let i=qe(e,t);if(r==Ue||i==Ue||n&&Ve(i))t+=Xe(i),r=i;else if(He(i)){let n=0,r=t-2;for(;r>=0&&He(qe(e,r));)n++,r-=2;if(n%2==0)break;t+=2}else break}return t}function Ke(e,t,n){for(;t>1;){let r=Ge(e,t-2,n);if(r<t)return r;t--}return 0}function qe(e,t){let n=e.charCodeAt(t);if(!Ye(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return Je(r)?(n-55296<<10)+(r-56320)+65536:n}function Je(e){return e>=56320&&e<57344}function Ye(e){return e>=55296&&e<56320}function Xe(e){return e<65536?1:2}var b=class e{lineAt(e){if(e<0||e>this.length)throw RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=ot(this,e,t);let r=[];return this.decompose(0,e,r,2),n.length&&n.decompose(0,n.length,r,3),this.decompose(t,this.length,r,1),Qe.from(r,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=ot(this,e,t);let n=[];return this.decompose(e,t,n,0),Qe.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),r=new nt(this),i=new nt(e);for(let e=t,a=t;;){if(r.next(e),i.next(e),e=0,r.lineBreak!=i.lineBreak||r.done!=i.done||r.value!=i.value)return!1;if(a+=r.value.length,r.done||a>=n)return!0}}iter(e=1){return new nt(this,e)}iterRange(e,t=this.length){return new rt(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t??(t=this.lines+1);let r=this.line(e).from;n=this.iterRange(r,Math.max(r,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new it(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(t){if(t.length==0)throw RangeError(`A document must have at least one line`);return t.length==1&&!t[0]?e.empty:t.length<=32?new Ze(t):Qe.from(Ze.split(t,[]))}},Ze=class e extends b{constructor(e,t=$e(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.text[i],o=r+a.length;if((t?n:o)>=e)return new at(r,o,n,a);r=o+1,n++}}decompose(t,n,r,i){let a=t<=0&&n>=this.length?this:new e(tt(this.text,t,n),Math.min(n,this.length)-Math.max(0,t));if(i&1){let t=r.pop(),n=et(a.text,t.text.slice(),0,a.length);if(n.length<=32)r.push(new e(n,t.length+a.length));else{let t=n.length>>1;r.push(new e(n.slice(0,t)),new e(n.slice(t)))}}else r.push(a)}replace(t,n,r){if(!(r instanceof e))return super.replace(t,n,r);[t,n]=ot(this,t,n);let i=et(this.text,et(r.text,tt(this.text,0,t)),n),a=this.length+r.length-(n-t);return i.length<=32?new e(i,a):Qe.from(e.split(i,[]),a)}sliceString(e,t=this.length,n=`
`){[e,t]=ot(this,e,t);let r=``;for(let i=0,a=0;i<=t&&a<this.text.length;a++){let o=this.text[a],s=i+o.length;i>e&&a&&(r+=n),e<s&&t>i&&(r+=o.slice(Math.max(0,e-i),t-i)),i=s+1}return r}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(t,n){let r=[],i=-1;for(let a of t)r.push(a),i+=a.length+1,r.length==32&&(n.push(new e(r,i)),r=[],i=-1);return i>-1&&n.push(new e(r,i)),n}},Qe=class e extends b{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let t of e)this.lines+=t.lines}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.children[i],o=r+a.length,s=n+a.lines-1;if((t?s:o)>=e)return a.lineInner(e,t,n,r);r=o+1,n=s+1}}decompose(e,t,n,r){for(let i=0,a=0;a<=t&&i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(e<=s&&t>=a){let i=r&(a<=e|(s>=t?2:0));a>=e&&s<=t&&!i?n.push(o):o.decompose(e-a,t-a,n,i)}a=s+1}}replace(t,n,r){if([t,n]=ot(this,t,n),r.lines<this.lines)for(let i=0,a=0;i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(t>=a&&n<=s){let c=o.replace(t-a,n-a,r),l=this.lines-o.lines+c.lines;if(c.lines<l>>4&&c.lines>l>>6){let a=this.children.slice();return a[i]=c,new e(a,this.length-(n-t)+r.length)}return super.replace(a,s,c)}a=s+1}return super.replace(t,n,r)}sliceString(e,t=this.length,n=`
`){[e,t]=ot(this,e,t);let r=``;for(let i=0,a=0;i<this.children.length&&a<=t;i++){let o=this.children[i],s=a+o.length;a>e&&i&&(r+=n),e<s&&t>a&&(r+=o.sliceString(e-a,t-a,n)),a=s+1}return r}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(t,n){if(!(t instanceof e))return 0;let r=0,[i,a,o,s]=n>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1];for(;;i+=n,a+=n){if(i==o||a==s)return r;let e=this.children[i],c=t.children[a];if(e!=c)return r+e.scanIdentical(c,n);r+=e.length+1}}static from(t,n=t.reduce((e,t)=>e+t.length+1,-1)){let r=0;for(let e of t)r+=e.lines;if(r<32){let e=[];for(let n of t)n.flatten(e);return new Ze(e,n)}let i=Math.max(32,r>>5),a=i<<1,o=i>>1,s=[],c=0,l=-1,u=[];function d(t){let n;if(t.lines>a&&t instanceof e)for(let e of t.children)d(e);else t.lines>o&&(c>o||!c)?(f(),s.push(t)):t instanceof Ze&&c&&(n=u[u.length-1])instanceof Ze&&t.lines+n.lines<=32?(c+=t.lines,l+=t.length+1,u[u.length-1]=new Ze(n.text.concat(t.text),n.length+1+t.length)):(c+t.lines>i&&f(),c+=t.lines,l+=t.length+1,u.push(t))}function f(){c!=0&&(s.push(u.length==1?u[0]:e.from(u,l)),l=-1,c=u.length=0)}for(let e of t)d(e);return f(),s.length==1?s[0]:new e(s,n)}};b.empty=new Ze([``],0);function $e(e){let t=-1;for(let n of e)t+=n.length+1;return t}function et(e,t,n=0,r=1e9){for(let i=0,a=0,o=!0;a<e.length&&i<=r;a++){let s=e[a],c=i+s.length;c>=n&&(c>r&&(s=s.slice(0,r-i)),i<n&&(s=s.slice(n-i)),o?(t[t.length-1]+=s,o=!1):t.push(s)),i=c+1}return t}function tt(e,t,n){return et(e,[``],t,n)}var nt=class{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value=``,this.nodes=[e],this.offsets=[t>0?1:(e instanceof Ze?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,r=this.nodes[n],i=this.offsets[n],a=i>>1,o=r instanceof Ze?r.text.length:r.children.length;if(a==(t>0?o:0)){if(n==0)return this.done=!0,this.value=``,this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((i&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(r instanceof Ze){let i=r.text[a+(t<0?-1:0)];if(this.offsets[n]+=t,i.length>Math.max(0,e))return this.value=e==0?i:t>0?i.slice(e):i.slice(0,i.length-e),this;e-=i.length}else{let i=r.children[a+(t<0?-1:0)];e>i.length?(e-=i.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(i),this.offsets.push(t>0?1:(i instanceof Ze?i.text.length:i.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}},rt=class{constructor(e,t,n){this.value=``,this.done=!1,this.cursor=new nt(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value=``,this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:r}=this.cursor.next(e);return this.pos+=(r.length+e)*t,this.value=r.length<=n?r:t<0?r.slice(r.length-n):r.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=``}},it=class{constructor(e){this.inner=e,this.afterBreak=!0,this.value=``,this.done=!1}next(e=0){let{done:t,lineBreak:n,value:r}=this.inner.next(e);return t&&this.afterBreak?(this.value=``,this.afterBreak=!1):t?(this.done=!0,this.value=``):n?this.afterBreak?this.value=``:(this.afterBreak=!0,this.next()):(this.value=r,this.afterBreak=!1),this}get lineBreak(){return!1}};typeof Symbol<`u`&&(b.prototype[Symbol.iterator]=function(){return this.iter()},nt.prototype[Symbol.iterator]=rt.prototype[Symbol.iterator]=it.prototype[Symbol.iterator]=function(){return this});var at=class{constructor(e,t,n,r){this.from=e,this.to=t,this.number=n,this.text=r}get length(){return this.to-this.from}};function ot(e,t,n){return t=Math.max(0,Math.min(e.length,t)),[t,Math.max(t,Math.min(e.length,n))]}function x(e,t,n=!0,r=!0){return We(e,t,n,r)}function st(e){return e>=56320&&e<57344}function ct(e){return e>=55296&&e<56320}function lt(e,t){let n=e.charCodeAt(t);if(!ct(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return st(r)?(n-55296<<10)+(r-56320)+65536:n}function ut(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10)+55296,(e&1023)+56320))}function dt(e){return e<65536?1:2}var ft=/\r\n?|\n/,pt=(function(e){return e[e.Simple=0]=`Simple`,e[e.TrackDel=1]=`TrackDel`,e[e.TrackBefore=2]=`TrackBefore`,e[e.TrackAfter=3]=`TrackAfter`,e})(pt||(pt={})),mt=class e{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,r=0;t<this.sections.length;){let i=this.sections[t++],a=this.sections[t++];a<0?(e(n,r,i),r+=i):r+=a,n+=i}}iterChangedRanges(e,t=!1){vt(this,e,t)}get invertedDesc(){let t=[];for(let e=0;e<this.sections.length;){let n=this.sections[e++],r=this.sections[e++];r<0?t.push(n,r):t.push(r,n)}return new e(t)}composeDesc(e){return this.empty?e:e.empty?this:bt(this,e)}mapDesc(e,t=!1){return e.empty?this:yt(this,e,t)}mapPos(e,t=-1,n=pt.Simple){let r=0,i=0;for(let a=0;a<this.sections.length;){let o=this.sections[a++],s=this.sections[a++],c=r+o;if(s<0){if(c>e)return i+(e-r);i+=o}else{if(n!=pt.Simple&&c>=e&&(n==pt.TrackDel&&r<e&&c>e||n==pt.TrackBefore&&r<e||n==pt.TrackAfter&&c>e))return null;if(c>e||c==e&&t<0&&!o)return e==r||t<0?i:i+s;i+=s}r=c}if(e>r)throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);return i}touchesRange(e,t=e){for(let n=0,r=0;n<this.sections.length&&r<=t;){let i=this.sections[n++],a=this.sections[n++],o=r+i;if(a>=0&&r<=t&&o>=e)return r<e&&o>t?`cover`:!0;r=o}return!1}toString(){let e=``;for(let t=0;t<this.sections.length;){let n=this.sections[t++],r=this.sections[t++];e+=(e?` `:``)+n+(r>=0?`:`+r:``)}return e}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(e=>typeof e!=`number`))throw RangeError(`Invalid JSON representation of ChangeDesc`);return new e(t)}static create(t){return new e(t)}},ht=class e extends mt{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw RangeError(`Applying change set to a document with the wrong length`);return vt(this,(t,n,r,i,a)=>e=e.replace(r,r+(n-t),a),!1),e}mapDesc(e,t=!1){return yt(this,e,t,!0)}invert(t){let n=this.sections.slice(),r=[];for(let e=0,i=0;e<n.length;e+=2){let a=n[e],o=n[e+1];if(o>=0){n[e]=o,n[e+1]=a;let s=e>>1;for(;r.length<s;)r.push(b.empty);r.push(a?t.slice(i,i+a):b.empty)}i+=a}return new e(n,r)}compose(e){return this.empty?e:e.empty?this:bt(this,e,!0)}map(e,t=!1){return e.empty?this:yt(this,e,t,!0)}iterChanges(e,t=!1){vt(this,e,t)}get desc(){return mt.create(this.sections)}filter(t){let n=[],r=[],i=[],a=new xt(this);done:for(let e=0,o=0;;){let s=e==t.length?1e9:t[e++];for(;o<s||o==s&&a.len==0;){if(a.done)break done;let e=Math.min(a.len,s-o);gt(i,e,-1);let t=a.ins==-1?-1:a.off==0?a.ins:0;gt(n,e,t),t>0&&_t(r,n,a.text),a.forward(e),o+=e}let c=t[e++];for(;o<c;){if(a.done)break done;let e=Math.min(a.len,c-o);gt(n,e,-1),gt(i,e,a.ins==-1?-1:a.off==0?a.ins:0),a.forward(e),o+=e}}return{changes:new e(n,r),filtered:mt.create(i)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],r=this.sections[t+1];r<0?e.push(n):r==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(t,n,r){let i=[],a=[],o=0,s=null;function c(t=!1){if(!t&&!i.length)return;o<n&&gt(i,n-o,-1);let r=new e(i,a);s=s?s.compose(r.map(s)):r,i=[],a=[],o=0}function l(t){if(Array.isArray(t))for(let e of t)l(e);else if(t instanceof e){if(t.length!=n)throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);c(),s=s?s.compose(t.map(s)):t}else{let{from:e,to:s=e,insert:l}=t;if(e>s||e<0||s>n)throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);let u=l?typeof l==`string`?b.of(l.split(r||ft)):l:b.empty,d=u.length;if(e==s&&d==0)return;e<o&&c(),e>o&&gt(i,e-o,-1),gt(i,s-e,d),_t(a,i,u),o=s}}return l(t),c(!s),s}static empty(t){return new e(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw RangeError(`Invalid JSON representation of ChangeSet`);let n=[],r=[];for(let e=0;e<t.length;e++){let i=t[e];if(typeof i==`number`)n.push(i,-1);else if(!Array.isArray(i)||typeof i[0]!=`number`||i.some((e,t)=>t&&typeof e!=`string`))throw RangeError(`Invalid JSON representation of ChangeSet`);else if(i.length==1)n.push(i[0],0);else{for(;r.length<e;)r.push(b.empty);r[e]=b.of(i.slice(1)),n.push(i[0],r[e].length)}}return new e(n,r)}static createSet(t,n){return new e(t,n)}};function gt(e,t,n,r=!1){if(t==0&&n<=0)return;let i=e.length-2;i>=0&&n<=0&&n==e[i+1]?e[i]+=t:i>=0&&t==0&&e[i]==0?e[i+1]+=n:r?(e[i]+=t,e[i+1]+=n):e.push(t,n)}function _t(e,t,n){if(n.length==0)return;let r=t.length-2>>1;if(r<e.length)e[e.length-1]=e[e.length-1].append(n);else{for(;e.length<r;)e.push(b.empty);e.push(n)}}function vt(e,t,n){let r=e.inserted;for(let i=0,a=0,o=0;o<e.sections.length;){let s=e.sections[o++],c=e.sections[o++];if(c<0)i+=s,a+=s;else{let l=i,u=a,d=b.empty;for(;l+=s,u+=c,c&&r&&(d=d.append(r[o-2>>1])),!(n||o==e.sections.length||e.sections[o+1]<0);)s=e.sections[o++],c=e.sections[o++];t(i,l,a,u,d),i=l,a=u}}}function yt(e,t,n,r=!1){let i=[],a=r?[]:null,o=new xt(e),s=new xt(t);for(let e=-1;;)if(o.done&&s.len||s.done&&o.len)throw Error(`Mismatched change set lengths`);else if(o.ins==-1&&s.ins==-1){let e=Math.min(o.len,s.len);gt(i,e,-1),o.forward(e),s.forward(e)}else if(s.ins>=0&&(o.ins<0||e==o.i||o.off==0&&(s.len<o.len||s.len==o.len&&!n))){let t=s.len;for(gt(i,s.ins,-1);t;){let n=Math.min(o.len,t);o.ins>=0&&e<o.i&&o.len<=n&&(gt(i,0,o.ins),a&&_t(a,i,o.text),e=o.i),o.forward(n),t-=n}s.next()}else if(o.ins>=0){let t=0,n=o.len;for(;n;)if(s.ins==-1){let e=Math.min(n,s.len);t+=e,n-=e,s.forward(e)}else if(s.ins==0&&s.len<n)n-=s.len,s.next();else break;gt(i,t,e<o.i?o.ins:0),a&&e<o.i&&_t(a,i,o.text),e=o.i,o.forward(o.len-n)}else if(o.done&&s.done)return a?ht.createSet(i,a):mt.create(i);else throw Error(`Mismatched change set lengths`)}function bt(e,t,n=!1){let r=[],i=n?[]:null,a=new xt(e),o=new xt(t);for(let e=!1;;)if(a.done&&o.done)return i?ht.createSet(r,i):mt.create(r);else if(a.ins==0)gt(r,a.len,0,e),a.next();else if(o.len==0&&!o.done)gt(r,0,o.ins,e),i&&_t(i,r,o.text),o.next();else if(a.done||o.done)throw Error(`Mismatched change set lengths`);else{let t=Math.min(a.len2,o.len),n=r.length;if(a.ins==-1){let n=o.ins==-1?-1:o.off?0:o.ins;gt(r,t,n,e),i&&n&&_t(i,r,o.text)}else o.ins==-1?(gt(r,a.off?0:a.len,t,e),i&&_t(i,r,a.textBit(t))):(gt(r,a.off?0:a.len,o.off?0:o.ins,e),i&&!o.off&&_t(i,r,o.text));e=(a.ins>t||o.ins>=0&&o.len>t)&&(e||r.length>n),a.forward2(t),o.forward(t)}}var xt=class{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?b.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?b.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}},St=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.flags=n,this.goalColumn=r}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get undirectional(){return(this.flags&64)>0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}map(t,n=-1){let r,i;return this.empty?r=i=t.mapPos(this.from,n):(r=t.mapPos(this.from,1),i=t.mapPos(this.to,-1)),r==this.from&&i==this.to?this:new e(r,i,this.flags,this.goalColumn)}extend(e,t=e,n=0){if(e<=this.anchor&&t>=this.anchor)return S.range(e,t,void 0,void 0,n);let r=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return S.range(this.anchor,r,void 0,void 0,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!=`number`||typeof e.head!=`number`)throw RangeError(`Invalid JSON representation for SelectionRange`);return S.range(e.anchor,e.head)}static create(t,n,r,i){return new e(t,n,r,i)}},S=class e{constructor(e,t){this.ranges=e,this.mainIndex=t}map(t,n=-1){return t.empty?this:e.create(this.ranges.map(e=>e.map(t,n)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new e([this.main],0)}addRange(t,n=!0){return e.create([t].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(t,n=this.mainIndex){let r=this.ranges.slice();return r[n]=t,e.create(r,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||typeof t.main!=`number`||t.main>=t.ranges.length)throw RangeError(`Invalid JSON representation for EditorSelection`);return new e(t.ranges.map(e=>St.fromJSON(e)),t.main)}static single(t,n=t){return new e([e.range(t,n)],0)}static create(t,n=0){if(t.length==0)throw RangeError(`A selection needs at least one range`);for(let r=0,i=0;i<t.length;i++){let a=t[i];if(a.empty?a.from<=r:a.from<r)return e.normalized(t.slice(),n);r=a.to}return new e(t,n)}static cursor(e,t=0,n,r){return St.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n)),r)}static range(e,t,n,r,i){let a=r==null?7:Math.min(6,r);return!i&&e!=t&&(i=t<e?1:-1),i&&(a|=i<0?8:16),t<e?St.create(t,e,a|32,n):St.create(e,t,a,n)}static undirectionalRange(e,t){return St.create(e,t,64,void 0)}static normalized(t,n=0){let r=t[n];t.sort((e,t)=>e.from-t.from),n=t.indexOf(r);for(let r=1;r<t.length;r++){let i=t[r],a=t[r-1];if(i.empty?i.from<=a.to:i.from<a.to){let o=a.from,s=Math.max(i.to,a.to);r<=n&&n--,t.splice(--r,2,i.anchor>i.head?e.range(s,o):e.range(o,s))}}return new e(t,n)}};function Ct(e,t){for(let n of e.ranges)if(n.to>t)throw RangeError(`Selection points outside of document`)}var wt=0,C=class e{constructor(e,t,n,r,i){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=r,this.id=wt++,this.default=e([]),this.extensions=typeof i==`function`?i(this):i}get reader(){return this}static define(t={}){return new e(t.combine||(e=>e),t.compareInput||((e,t)=>e===t),t.compare||(t.combine?(e,t)=>e===t:Tt),!!t.static,t.enables)}of(e){return new Et([],this,0,e)}compute(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Et(e,this,1,t)}computeN(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Et(e,this,2,t)}from(e,t){return t||(t=e=>e),this.compute([e],n=>t(n.field(e)))}};function Tt(e,t){return e==t||e.length==t.length&&e.every((e,n)=>e===t[n])}var Et=class{constructor(e,t,n,r){this.dependencies=e,this.facet=t,this.type=n,this.value=r,this.id=wt++}dynamicSlot(e){let t=this.value,n=this.facet.compareInput,r=this.id,i=e[r]>>1,a=this.type==2,o=!1,s=!1,c=[];for(let t of this.dependencies)t==`doc`?o=!0:t==`selection`?s=!0:(e[t.id]??1)&1||c.push(e[t.id]);return{create(e){return e.values[i]=t(e),1},update(e,r){if(o&&r.docChanged||s&&(r.docChanged||r.selection)||Ot(e,c)){let r=t(e);if(a?!Dt(r,e.values[i],n):!n(r,e.values[i]))return e.values[i]=r,1}return 0},reconfigure:(e,o)=>{let s,c=o.config.address[r];if(c!=null){let r=Vt(o,c);if(this.dependencies.every(t=>t instanceof C?o.facet(t)===e.facet(t):t instanceof jt?o.field(t,!1)==e.field(t,!1):!0)||(a?Dt(s=t(e),r,n):n(s=t(e),r)))return e.values[i]=r,0}else s=t(e);return e.values[i]=s,1}}}get extension(){return this}};function Dt(e,t,n){if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function Ot(e,t){let n=!1;for(let r of t)Bt(e,r)&1&&(n=!0);return n}function kt(e,t,n){let r=n.map(t=>e[t.id]),i=n.map(e=>e.type),a=r.filter(e=>!(e&1)),o=e[t.id]>>1;function s(e){let n=[];for(let t=0;t<r.length;t++){let a=Vt(e,r[t]);if(i[t]==2)for(let e of a)n.push(e);else n.push(a)}return t.combine(n)}return{create(e){for(let t of r)Bt(e,t);return e.values[o]=s(e),1},update(e,n){if(!Ot(e,a))return 0;let r=s(e);return t.compare(r,e.values[o])?0:(e.values[o]=r,1)},reconfigure(e,i){let a=Ot(e,r),c=i.config.facets[t.id],l=i.facet(t);if(c&&!a&&Tt(n,c))return e.values[o]=l,0;let u=s(e);return t.compare(u,l)?(e.values[o]=l,0):(e.values[o]=u,1)}}}var At=C.define({static:!0}),jt=class e{constructor(e,t,n,r,i){this.id=e,this.createF=t,this.updateF=n,this.compareF=r,this.spec=i,this.provides=void 0}static define(t){let n=new e(wt++,t.create,t.update,t.compare||((e,t)=>e===t),t);return t.provide&&(n.provides=t.provide(n)),n}create(e){return(e.facet(At).find(e=>e.field==this)?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:e=>(e.values[t]=this.create(e),1),update:(e,n)=>{let r=e.values[t],i=this.updateF(r,n);return this.compareF(r,i)?0:(e.values[t]=i,1)},reconfigure:(e,n)=>{let r=e.facet(At),i=n.facet(At),a;return(a=r.find(e=>e.field==this))&&a!=i.find(e=>e.field==this)?(e.values[t]=a.create(e),1):n.config.address[this.id]==null?(e.values[t]=this.create(e),1):(e.values[t]=n.field(this),0)}}}init(e){return[this,At.of({field:this,create:e})]}get extension(){return this}},Mt={lowest:4,low:3,default:2,high:1,highest:0};function Nt(e){return t=>new Ft(t,e)}var Pt={highest:Nt(Mt.highest),high:Nt(Mt.high),default:Nt(Mt.default),low:Nt(Mt.low),lowest:Nt(Mt.lowest)},Ft=class{constructor(e,t){this.inner=e,this.prec=t}get extension(){return this}},It=class e{of(e){return new Lt(this,e)}reconfigure(t){return e.reconfigure.of({compartment:this,extension:t})}get(e){return e.config.compartments.get(this)}},Lt=class{constructor(e,t){this.compartment=e,this.inner=t}get extension(){return this}},Rt=class e{constructor(e,t,n,r,i,a){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=r,this.staticValues=i,this.facets=a,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(t,n,r){let i=[],a=Object.create(null),o=new Map;for(let e of zt(t,n,o))e instanceof jt?i.push(e):(a[e.facet.id]||(a[e.facet.id]=[])).push(e);let s=Object.create(null),c=[],l=[];for(let e of i)s[e.id]=l.length<<1,l.push(t=>e.slot(t));let u=r?.config.facets;for(let e in a){let t=a[e],n=t[0].facet,i=u&&u[e]||[];if(t.every(e=>e.type==0)){if(s[n.id]=c.length<<1|1,Tt(i,t))c.push(r.facet(n));else{let e=n.combine(t.map(e=>e.value));c.push(r&&n.compare(e,r.facet(n))?r.facet(n):e)}}else{for(let e of t)e.type==0?(s[e.id]=c.length<<1|1,c.push(e.value)):(s[e.id]=l.length<<1,l.push(t=>e.dynamicSlot(t)));s[n.id]=l.length<<1,l.push(e=>kt(e,n,t))}}let d=l.map(e=>e(s));return new e(t,o,d,s,c,a)}};function zt(e,t,n){let r=[[],[],[],[],[]],i=new Map;function a(e,o){let s=i.get(e);if(s!=null){if(s<=o)return;let t=r[s].indexOf(e);t>-1&&r[s].splice(t,1),e instanceof Lt&&n.delete(e.compartment)}if(i.set(e,o),Array.isArray(e))for(let t of e)a(t,o);else if(e instanceof Lt){if(n.has(e.compartment))throw RangeError(`Duplicate use of compartment in extensions`);let r=t.get(e.compartment)||e.inner;n.set(e.compartment,r),a(r,o)}else if(e instanceof Ft)a(e.inner,e.prec);else if(e instanceof jt)r[o].push(e),e.provides&&a(e.provides,o);else if(e instanceof Et)r[o].push(e),e.facet.extensions&&a(e.facet.extensions,Mt.default);else{let t=e.extension;if(!t)throw Error(`Unrecognized extension value in extension set (${e}).`);if(t==e)throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);a(t,o)}}return a(e,Mt.default),r.reduce((e,t)=>e.concat(t))}function Bt(e,t){if(t&1)return 2;let n=t>>1,r=e.status[n];if(r==4)throw Error(`Cyclic dependency between fields and/or facets`);if(r&2)return r;e.status[n]=4;let i=e.computeSlot(e,e.config.dynamicSlots[n]);return e.status[n]=2|i}function Vt(e,t){return t&1?e.config.staticValues[t>>1]:e.values[t>>1]}var Ht=C.define(),Ut=C.define({combine:e=>e.some(e=>e),static:!0}),Wt=C.define({combine:e=>e.length?e[0]:void 0,static:!0}),Gt=C.define(),Kt=C.define(),qt=C.define(),Jt=C.define({combine:e=>e.length?e[0]:!1}),Yt=class{constructor(e,t){this.type=e,this.value=t}static define(){return new Xt}},Xt=class{of(e){return new Yt(this,e)}},Zt=class{constructor(e){this.map=e}of(e){return new w(this,e)}},w=class e{constructor(e,t){this.type=e,this.value=t}map(t){let n=this.type.map(this.value,t);return n===void 0?void 0:n==this.value?this:new e(this.type,n)}is(e){return this.type==e}static define(e={}){return new Zt(e.map||(e=>e))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let r of e){let e=r.map(t);e&&n.push(e)}return n}};w.reconfigure=w.define(),w.appendConfig=w.define();var Qt=class e{constructor(t,n,r,i,a,o){this.startState=t,this.changes=n,this.selection=r,this.effects=i,this.annotations=a,this.scrollIntoView=o,this._doc=null,this._state=null,r&&Ct(r,n.newLength),a.some(t=>t.type==e.time)||(this.annotations=a.concat(e.time.of(Date.now())))}static create(t,n,r,i,a,o){return new e(t,n,r,i,a,o)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let n=this.annotation(e.userEvent);return!!(n&&(n==t||n.length>t.length&&n.slice(0,t.length)==t&&n[t.length]==`.`))}};Qt.time=Yt.define(),Qt.userEvent=Yt.define(),Qt.addToHistory=Yt.define(),Qt.remote=Yt.define();function $t(e,t){let n=[];for(let r=0,i=0;;){let a,o;if(r<e.length&&(i==t.length||t[i]>=e[r]))a=e[r++],o=e[r++];else if(i<t.length)a=t[i++],o=t[i++];else return n;!n.length||n[n.length-1]<a?n.push(a,o):n[n.length-1]<o&&(n[n.length-1]=o)}}function en(e,t,n){let r,i,a;return n?(r=t.changes,i=ht.empty(t.changes.length),a=e.changes.compose(t.changes)):(r=t.changes.map(e.changes),i=e.changes.mapDesc(t.changes,!0),a=e.changes.compose(r)),{changes:a,selection:t.selection?t.selection.map(i):e.selection?.map(r),effects:w.mapEffects(e.effects,r).concat(w.mapEffects(t.effects,i)),annotations:e.annotations.length?e.annotations.concat(t.annotations):t.annotations,scrollIntoView:e.scrollIntoView||t.scrollIntoView}}function tn(e,t,n){let r=t.selection,i=sn(t.annotations);return t.userEvent&&(i=i.concat(Qt.userEvent.of(t.userEvent))),{changes:t.changes instanceof ht?t.changes:ht.of(t.changes||[],n,e.facet(Wt)),selection:r&&(r instanceof S?r:S.single(r.anchor,r.head)),effects:sn(t.effects),annotations:i,scrollIntoView:!!t.scrollIntoView}}function nn(e,t,n){let r=tn(e,t.length?t[0]:{},e.doc.length);t.length&&t[0].filter===!1&&(n=!1);for(let i=1;i<t.length;i++){t[i].filter===!1&&(n=!1);let a=!!t[i].sequential;r=en(r,tn(e,t[i],a?r.changes.newLength:e.doc.length),a)}let i=Qt.create(e,r.changes,r.selection,r.effects,r.annotations,r.scrollIntoView);return an(n?rn(i):i)}function rn(e){let t=e.startState,n=!0;for(let r of t.facet(Gt)){let t=r(e);if(t===!1){n=!1;break}Array.isArray(t)&&(n=n===!0?t:$t(n,t))}if(n!==!0){let r,i;if(n===!1)i=e.changes.invertedDesc,r=ht.empty(t.doc.length);else{let t=e.changes.filter(n);r=t.changes,i=t.filtered.mapDesc(t.changes).invertedDesc}e=Qt.create(t,r,e.selection&&e.selection.map(i),w.mapEffects(e.effects,i),e.annotations,e.scrollIntoView)}let r=t.facet(Kt);for(let n=r.length-1;n>=0;n--){let i=r[n](e);e=i instanceof Qt?i:Array.isArray(i)&&i.length==1&&i[0]instanceof Qt?i[0]:nn(t,sn(i),!1)}return e}function an(e){let t=e.startState,n=t.facet(qt),r=e;for(let i=n.length-1;i>=0;i--){let a=n[i](e);a&&Object.keys(a).length&&(r=en(r,tn(t,a,e.changes.newLength),!0))}return r==e?e:Qt.create(t,e.changes,e.selection,r.effects,r.annotations,r.scrollIntoView)}var on=[];function sn(e){return e==null?on:Array.isArray(e)?e:[e]}var T=(function(e){return e[e.Word=0]=`Word`,e[e.Space=1]=`Space`,e[e.Other=2]=`Other`,e})(T||(T={})),cn=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,ln;try{ln=RegExp(`[\\p{Alphabetic}\\p{Number}_]`,`u`)}catch{}function un(e){if(ln)return ln.test(e);for(let t=0;t<e.length;t++){let n=e[t];if(/\w/.test(n)||n>``&&(n.toUpperCase()!=n.toLowerCase()||cn.test(n)))return!0}return!1}function dn(e){return t=>{if(!/\S/.test(t))return T.Space;if(un(t))return T.Word;for(let n=0;n<e.length;n++)if(t.indexOf(e[n])>-1)return T.Word;return T.Other}}var E=class e{constructor(e,t,n,r,i,a){this.config=e,this.doc=t,this.selection=n,this.values=r,this.status=e.statusTemplate.slice(),this.computeSlot=i,a&&(a._state=this);for(let e=0;e<this.config.dynamicSlots.length;e++)Bt(this,e<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw RangeError(`Field is not present in this state`)}else return Bt(this,n),Vt(this,n)}update(...e){return nn(this,e,!0)}applyTransaction(t){let n=this.config,{base:r,compartments:i}=n;for(let e of t.effects)e.is(It.reconfigure)?(n&&(i=new Map,n.compartments.forEach((e,t)=>i.set(t,e)),n=null),i.set(e.value.compartment,e.value.extension)):e.is(w.reconfigure)?(n=null,r=e.value):e.is(w.appendConfig)&&(n=null,r=sn(r).concat(e.value));let a;n?a=t.startState.values.slice():(n=Rt.resolve(r,i,this),a=new e(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(e,t)=>t.reconfigure(e,this),null).values);let o=t.startState.facet(Ut)?t.newSelection:t.newSelection.asSingle();new e(n,t.newDoc,o,a,(e,n)=>n.update(e,t),t)}replaceSelection(e){return typeof e==`string`&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:S.cursor(t.from+e.length,-1)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),r=this.changes(n.changes),i=[n.range],a=sn(n.effects);for(let n=1;n<t.ranges.length;n++){let o=e(t.ranges[n]),s=this.changes(o.changes),c=s.map(r);for(let e=0;e<n;e++)i[e]=i[e].map(c);let l=r.mapDesc(s,!0);i.push(o.range.map(l)),r=r.compose(c),a=w.mapEffects(a,c).concat(w.mapEffects(sn(o.effects),l))}return{changes:r,selection:S.create(i,t.mainIndex),effects:a}}changes(t=[]){return t instanceof ht?t:ht.of(t,this.doc.length,this.facet(e.lineSeparator))}toText(t){return b.of(t.split(this.facet(e.lineSeparator)||ft))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(Bt(this,t),Vt(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let r=e[n];r instanceof jt&&this.config.address[r.id]!=null&&(t[n]=r.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(t,n={},r){if(!t||typeof t.doc!=`string`)throw RangeError(`Invalid JSON representation for EditorState`);let i=[];if(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(t,e)){let n=r[e],a=t[e];i.push(n.init(e=>n.spec.fromJSON(a,e)))}}return e.create({doc:t.doc,selection:S.fromJSON(t.selection),extensions:n.extensions?i.concat([n.extensions]):i})}static create(t={}){let n=Rt.resolve(t.extensions||[],new Map),r=t.doc instanceof b?t.doc:b.of((t.doc||``).split(n.staticFacet(e.lineSeparator)||ft)),i=t.selection?t.selection instanceof S?t.selection:S.single(t.selection.anchor,t.selection.head):S.single(0);return Ct(i,r.length),n.staticFacet(Ut)||(i=i.asSingle()),new e(n,r,i,n.dynamicSlots.map(()=>null),(e,t)=>t.create(e),null)}get tabSize(){return this.facet(e.tabSize)}get lineBreak(){return this.facet(e.lineSeparator)||`
`}get readOnly(){return this.facet(Jt)}phrase(t,...n){for(let n of this.facet(e.phrases))if(Object.prototype.hasOwnProperty.call(n,t)){t=n[t];break}return n.length&&(t=t.replace(/\$(\$|\d*)/g,(e,t)=>{if(t==`$`)return`$`;let r=+(t||1);return!r||r>n.length?e:n[r-1]})),t}languageDataAt(e,t,n=-1){let r=[];for(let i of this.facet(Ht))for(let a of i(this,t,n))Object.prototype.hasOwnProperty.call(a,e)&&r.push(a[e]);return r}charCategorizer(e){let t=this.languageDataAt(`wordChars`,e);return dn(t.length?t[0]:``)}wordAt(e){let{text:t,from:n,length:r}=this.doc.lineAt(e),i=this.charCategorizer(e),a=e-n,o=e-n;for(;a>0;){let e=x(t,a,!1);if(i(t.slice(e,a))!=T.Word)break;a=e}for(;o<r;){let e=x(t,o);if(i(t.slice(o,e))!=T.Word)break;o=e}return a==o?null:S.range(a+n,o+n)}};E.allowMultipleSelections=Ut,E.tabSize=C.define({combine:e=>e.length?e[0]:4}),E.lineSeparator=Wt,E.readOnly=Jt,E.phrases=C.define({compare(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length==r.length&&n.every(n=>e[n]==t[n])}}),E.languageData=Ht,E.changeFilter=Gt,E.transactionFilter=Kt,E.transactionExtender=qt,It.reconfigure=w.define();function fn(e,t,n={}){let r={};for(let t of e)for(let e of Object.keys(t)){let i=t[e],a=r[e];if(a===void 0)r[e]=i;else if(a!==i&&i!==void 0){if(Object.hasOwnProperty.call(n,e))r[e]=n[e](a,i);else throw Error(`Config merge conflict for field `+e)}}for(let e in t)r[e]===void 0&&(r[e]=t[e]);return r}var pn=class{eq(e){return this==e}range(e,t=e){return hn.create(e,t,this)}};pn.prototype.startSide=pn.prototype.endSide=0,pn.prototype.point=!1,pn.prototype.mapMode=pt.TrackDel;function mn(e,t){return e==t||e.constructor==t.constructor&&e.eq(t)}var hn=class e{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(t,n,r){return new e(t,n,r)}};function gn(e,t){return e.from-t.from||e.value.startSide-t.value.startSide}var _n=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.value=n,this.maxPoint=r}get length(){return vn(this.to)}findIndex(e,t,n,r=0){let i=n?this.to:this.from;for(let a=r,o=i.length;;){if(a==o)return a;let r=a+o>>1,s=i[r]-e||(n?this.value[r].endSide:this.value[r].startSide)-t;if(r==a)return s>=0?a:o;s>=0?o=r:a=r+1}}between(e,t,n,r){for(let i=this.findIndex(t,-1e9,!0),a=this.findIndex(n,1e9,!1,i);i<a;i++)if(r(this.from[i]+e,this.to[i]+e,this.value[i])===!1)return!1}map(t,n,r,i,a){let o=[],s=[],c=[],l=-1,u=-1;iter:for(let e=0;e<this.value.length;e++){let d=this.value[e],f=this.from[e]+t,p=this.to[e]+t,m,h;if(f==p){let e=n.mapPos(f,d.startSide,d.mapMode);if(e==null||(m=h=e,d.startSide!=d.endSide&&(h=n.mapPos(f,d.endSide),h<m)))continue}else if(m=n.mapPos(f,d.startSide),h=n.mapPos(p,d.endSide),m>h||m==h&&d.startSide>0&&d.endSide<=0)continue;if(!((h-m||d.endSide-d.startSide)<0)){if(l<0&&(l=m),d.point&&(u=Math.max(u,h-m)),(m-r||d.startSide-i)>=0)o.push(d),s.push(m-l),c.push(h-l),r=h,i=d.endSide;else{if(m==h)for(let e=o.length;e>0;e--){if((m-(c[e-1]+l)||d.startSide-o[e-1].endSide)>=0){o.splice(e,0,d),s.splice(e,0,m-l),c.splice(e,0,h-l);continue iter}if((m-(s[e-1]+l)||d.endSide-o[e-1].startSide)>0)break}a(m,h,d)}}}return{mapped:o.length?new e(s,c,o,u):null,pos:l}}},D=class e{constructor(e,t,n,r){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=r}static create(t,n,r,i){return new e(t,n,r,i)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(t){let{add:n=[],sort:r=!1,filterFrom:i=0,filterTo:a=this.length}=t,o=t.filter;if(n.length==0&&!o)return this;if(r&&(n=n.slice().sort(gn)),this.isEmpty)return n.length?e.of(n):this;let s=new Sn(this,null,-1).goto(0),c=0,l=[],u=new bn;for(;s.value||c<n.length;)if(c<n.length&&(s.from-n[c].from||s.startSide-n[c].value.startSide)>=0){let e=n[c++];u.addInner(e.from,e.to,e.value,!1)||l.push(e)}else s.rangeIndex==1&&s.chunkIndex<this.chunk.length&&(c==n.length||this.chunkEnd(s.chunkIndex)<n[c].from)&&(!o||i>this.chunkEnd(s.chunkIndex)||a<this.chunkPos[s.chunkIndex])&&u.addChunk(this.chunkPos[s.chunkIndex],this.chunk[s.chunkIndex])?s.nextChunk():((!o||i>s.to||a<s.from||o(s.from,s.to,s.value))&&(u.addInner(s.from,s.to,s.value,!1)||l.push(hn.create(s.from,s.to,s.value))),s.next());return u.finishInner(this.nextLayer.isEmpty&&!l.length?e.empty:this.nextLayer.update({add:l,filter:o,filterFrom:i,filterTo:a}))}map(t){if(t.empty||this.isEmpty)return this;let n=[],r=[],i=-1,a,o=(e,t,n)=>{a||(a=new bn),a.addRange(e,t,n,!1)};for(let e=0;e<this.chunk.length;e++){let a=this.chunkPos[e],s=this.chunk[e],c=t.touchesRange(a,a+s.length);if(c===!1)i=Math.max(i,s.maxPoint),n.push(s),r.push(t.mapPos(a));else if(c===!0){let[e,c]=n.length?[vn(r)+vn(n).length,vn(vn(n).value).endSide]:[-1,-1],{mapped:l,pos:u}=s.map(a,t,e,c,o);l&&(i=Math.max(i,l.maxPoint),n.push(l),r.push(u))}}let s=this.nextLayer.map(t);return a&&(s=a.finishInner(s)),n.length==0?s:new e(r,n,s||e.empty,i)}between(e,t,n){if(!this.isEmpty){for(let r=0;r<this.chunk.length;r++){let i=this.chunkPos[r],a=this.chunk[r];if(t>=i&&e<=i+a.length&&a.between(i,e-i,t-i,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return Cn.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return Cn.from(e).goto(t)}static compare(e,t,n,r,i=-1){let a=e.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),o=t.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),s=xn(a,o,n),c=new Tn(a,s,i),l=new Tn(o,s,i);n.iterGaps((e,t,n)=>En(c,e,l,t,n,r)),n.empty&&n.length==0&&En(c,0,l,0,0,r)}static eq(e,t,n=0,r){r??(r=1e9-1);let i=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0),a=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0);if(i.length!=a.length)return!1;if(!i.length)return!0;let o=xn(i,a),s=new Tn(i,o,0).goto(n),c=new Tn(a,o,0).goto(n);for(;;){if(s.to!=c.to||!Dn(s.active,c.active)||s.point&&(!c.point||!mn(s.point,c.point)))return!1;if(s.to>r)return!0;s.next(),c.next()}}static spans(e,t,n,r,i=-1){let a=new Tn(e,null,i).goto(t),o=t,s=a.openStart;for(;;){let e=Math.min(a.to,n);if(a.point){let n=a.activeForPoint(a.to),i=a.pointFrom<t?n.length+1:a.point.startSide<0?n.length:Math.min(n.length,s);r.point(o,e,a.point,n,i,a.pointRank),s=Math.min(a.openEnd(e),n.length)}else e>o&&(r.span(o,e,a.active,s),s=a.openEnd(e));if(a.to>n)return s+(a.point&&a.to>n?1:0);o=a.to,a.next()}}static of(e,t=!1){let n=new bn;for(let r of e instanceof hn?[e]:t?yn(e):e)n.add(r.from,r.to,r.value);return n.finish()}static join(t){if(!t.length)return e.empty;let n=vn(t);for(let r=t.length-2;r>=0;r--)for(let i=t[r];i!=e.empty;i=i.nextLayer)n=new e(i.chunkPos,i.chunk,n,Math.max(i.maxPoint,n.maxPoint));return n}};D.empty=new D([],[],null,-1);function vn(e){return e[e.length-1]}function yn(e){if(e.length>1)for(let t=e[0],n=1;n<e.length;n++){let r=e[n];if(gn(t,r)>0)return e.slice().sort(gn);t=r}return e}D.empty.nextLayer=D.empty;var bn=class e{finishChunk(e){this.chunks.push(new _n(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,n){this.addRange(e,t,n,!0)}addRange(t,n,r,i){this.addInner(t,n,r,i)||(this.nextLayer||(this.nextLayer=new e)).addRange(t,n,r,i)}addInner(e,t,n,r){let i=e-this.lastTo||n.startSide-this.last.endSide;if(r&&i<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw Error("Ranges must be added sorted by `from` position and `startSide`");return i<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(D.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=D.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}};function xn(e,t,n){let r=new Map;for(let t of e)for(let e=0;e<t.chunk.length;e++)t.chunk[e].maxPoint<=0&&r.set(t.chunk[e],t.chunkPos[e]);let i=new Set;for(let e of t)for(let t=0;t<e.chunk.length;t++){let a=r.get(e.chunk[t]);a!=null&&(n?n.mapPos(a):a)==e.chunkPos[t]&&!n?.touchesRange(a,a+e.chunk[t].length)&&i.add(e.chunk[t])}return i}var Sn=class{constructor(e,t,n,r=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=r}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let t=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(t)||this.layer.chunkEnd(this.chunkIndex)<e||t.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let r=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<r)&&this.setRangeIndex(r)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}},Cn=class e{constructor(e){this.heap=e}static from(t,n=null,r=-1){let i=[];for(let e=0;e<t.length;e++)for(let a=t[e];!a.isEmpty;a=a.nextLayer)a.maxPoint>=r&&i.push(new Sn(a,n,r,e));return i.length==1?i[0]:new e(i)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let e=this.heap.length>>1;e>=0;e--)wn(this.heap,e);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let e=this.heap.length>>1;e>=0;e--)wn(this.heap,e);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),wn(this.heap,0)}}};function wn(e,t){for(let n=e[t];;){let r=(t<<1)+1;if(r>=e.length)break;let i=e[r];if(r+1<e.length&&i.compare(e[r+1])>=0&&(i=e[r+1],r++),n.compare(i)<0)break;e[r]=n,e[t]=i,t=r}}var Tn=class{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=Cn.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){On(this.active,e),On(this.activeTo,e),On(this.activeRank,e),this.minActive=An(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:r,rank:i}=this.cursor;for(;t<this.activeRank.length&&(i-this.activeRank[t]||r-this.activeTo[t])>0;)t++;kn(this.active,t,n),kn(this.activeTo,t,r),kn(this.activeRank,t,i),e&&kn(e,t,this.cursor.from),this.minActive=An(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let r=this.minActive;if(r>-1&&(this.activeTo[r]-this.cursor.from||this.active[r].endSide-this.cursor.startSide)<0){if(this.activeTo[r]>e){this.to=this.activeTo[r],this.endSide=this.active[r].endSide;break}this.removeActive(r),n&&On(n,r)}else if(!this.cursor.value){this.to=this.endSide=1e9;break}else if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let e=this.cursor.value;if(!e.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=e,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=e.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}}if(n){this.openStart=0;for(let t=n.length-1;t>=0&&n[t]<e;t--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}};function En(e,t,n,r,i,a){e.goto(t),n.goto(r);let o=r+i,s=r,c=r-t,l=!!a.boundChange;for(let t=!1;;){let r=e.to+c-n.to,i=r||e.endSide-n.endSide,u=i<0?e.to+c:n.to,d=Math.min(u,o);if(e.point||n.point?(e.point&&n.point&&mn(e.point,n.point)&&Dn(e.activeForPoint(e.to),n.activeForPoint(n.to))||a.comparePoint(s,d,e.point,n.point),t=!1):(t&&(a.boundChange(s),t=!1),d>s&&!Dn(e.active,n.active)&&a.compareRange(s,d,e.active,n.active),l&&d<o&&(r||e.openEnd(u)!=n.openEnd(u))&&(t=!0)),u>o)break;s=u,i<=0&&e.next(),i>=0&&n.next()}}function Dn(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n]&&!mn(e[n],t[n]))return!1;return!0}function On(e,t){for(let n=t,r=e.length-1;n<r;n++)e[n]=e[n+1];e.pop()}function kn(e,t,n){for(let n=e.length-1;n>=t;n--)e[n+1]=e[n];e[t]=n}function An(e,t){let n=-1,r=1e9;for(let i=0;i<t.length;i++)(t[i]-r||e[i].endSide-e[n].endSide)<0&&(n=i,r=t[i]);return n}function jn(e,t,n=e.length){let r=0;for(let i=0;i<n&&i<e.length;)e.charCodeAt(i)==9?(r+=t-r%t,i++):(r++,i=x(e,i));return r}function Mn(e,t,n,r){for(let r=0,i=0;;){if(i>=t)return r;if(r==e.length)break;i+=e.charCodeAt(r)==9?n-i%n:1,r=x(e,r)}return r===!0?-1:e.length}for(var Nn=`ͼ`,Pn=typeof Symbol>`u`?`__ͼ`:Symbol.for(Nn),Fn=typeof Symbol>`u`?`__styleSet`+Math.floor(Math.random()*1e8):Symbol(`styleSet`),In=typeof globalThis<`u`?globalThis:typeof window<`u`?window:{},Ln=class{constructor(e,t){this.rules=[];let{finish:n}=t||{};function r(e){return/^@/.test(e)?[e]:e.split(/,\s*/)}function i(e,t,a,o){let s=[],c=/^@(\w+)\b/.exec(e[0]),l=c&&c[1]==`keyframes`;if(c&&t==null)return a.push(e[0]+`;`);for(let n in t){let o=t[n];if(/&/.test(n))i(n.split(/,\s*/).map(t=>e.map(e=>t.replace(/&/,e))).reduce((e,t)=>e.concat(t)),o,a);else if(o&&typeof o==`object`){if(!c)throw RangeError(`The value of a property (`+n+`) should be a primitive value.`);i(r(n),o,s,l)}else o!=null&&s.push(n.replace(/_.*/,``).replace(/[A-Z]/g,e=>`-`+e.toLowerCase())+`: `+o+`;`)}(s.length||l)&&a.push((n&&!c&&!o?e.map(n):e).join(`, `)+` {`+s.join(` `)+`}`)}for(let t in e)i(r(t),e[t],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=In[Pn]||1;return In[Pn]=e+1,Nn+e.toString(36)}static mount(e,t,n){let r=e[Fn],i=n&&n.nonce;r?i&&r.setNonce(i):r=new zn(e,i),r.mount(Array.isArray(t)?t:[t],e)}},Rn=new Map,zn=class{constructor(e,t){let n=e.ownerDocument||e,r=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&r.CSSStyleSheet){let t=Rn.get(n);if(t)return e[Fn]=t;this.sheet=new r.CSSStyleSheet,Rn.set(n,this)}else this.styleTag=n.createElement(`style`),t&&this.styleTag.setAttribute(`nonce`,t);this.modules=[],e[Fn]=this}mount(e,t){let n=this.sheet,r=0,i=0,a=!1;for(let t=0;t<e.length;t++){let o=e[t],s=this.modules.indexOf(o);if(s<i&&s>-1&&(this.modules.splice(s,1),a=!0,i--,s=-1),s==-1){if(this.modules.splice(i++,0,o),a=!0,n)for(let e=0;e<o.rules.length;e++)n.insertRule(o.rules[e],r++)}else{for(;i<s;)r+=this.modules[i++].rules.length;r+=o.rules.length,i++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{if(a){let e=``;for(let t=0;t<this.modules.length;t++)e+=this.modules[t].getRules()+`
`;this.styleTag.textContent=e}let e=t.head||t;this.styleTag.parentNode!=e&&e.insertBefore(this.styleTag,e.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute(`nonce`)!=e&&this.styleTag.setAttribute(`nonce`,e)}},Bn={8:`Backspace`,9:`Tab`,10:`Enter`,12:`NumLock`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,44:`PrintScreen`,45:`Insert`,46:`Delete`,59:`;`,61:`=`,91:`Meta`,92:`Meta`,106:`*`,107:`+`,108:`,`,109:`-`,110:`.`,111:`/`,144:`NumLock`,145:`ScrollLock`,160:`Shift`,161:`Shift`,162:`Control`,163:`Control`,164:`Alt`,165:`Alt`,173:`-`,186:`;`,187:`=`,188:`,`,189:`-`,190:`.`,191:`/`,192:"`",219:`[`,220:`\\`,221:`]`,222:`'`},Vn={48:`)`,49:`!`,50:`@`,51:`#`,52:`$`,53:`%`,54:`^`,55:`&`,56:`*`,57:`(`,59:`:`,61:`+`,173:`_`,186:`:`,187:`+`,188:`<`,189:`_`,190:`>`,191:`?`,192:`~`,219:`{`,220:`|`,221:`}`,222:`"`},Hn=typeof navigator<`u`&&/Mac/.test(navigator.platform),Un=typeof navigator<`u`&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Wn=0;Wn<10;Wn++)Bn[48+Wn]=Bn[96+Wn]=String(Wn);for(var Wn=1;Wn<=24;Wn++)Bn[Wn+111]=`F`+Wn;for(var Wn=65;Wn<=90;Wn++)Bn[Wn]=String.fromCharCode(Wn+32),Vn[Wn]=String.fromCharCode(Wn);for(var Gn in Bn)Vn.hasOwnProperty(Gn)||(Vn[Gn]=Bn[Gn]);function Kn(e){var t=!(Hn&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||Un&&e.shiftKey&&e.key&&e.key.length==1||e.key==`Unidentified`)&&e.key||(e.shiftKey?Vn:Bn)[e.keyCode]||e.key||`Unidentified`;return t==`Esc`&&(t=`Escape`),t==`Del`&&(t=`Delete`),t==`Left`&&(t=`ArrowLeft`),t==`Up`&&(t=`ArrowUp`),t==`Right`&&(t=`ArrowRight`),t==`Down`&&(t=`ArrowDown`),t}function O(){var e=arguments[0];typeof e==`string`&&(e=document.createElement(e));var t=1,n=arguments[1];if(n&&typeof n==`object`&&n.nodeType==null&&!Array.isArray(n)){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r];typeof i==`string`?e.setAttribute(r,i):i!=null&&(e[r]=i)}t++}for(;t<arguments.length;t++)qn(e,arguments[t]);return e}function qn(e,t){if(typeof t==`string`)e.appendChild(document.createTextNode(t));else if(t!=null){if(t.nodeType!=null)e.appendChild(t);else if(Array.isArray(t))for(var n=0;n<t.length;n++)qn(e,t[n]);else throw RangeError(`Unsupported child node: `+t)}}var Jn=typeof navigator<`u`?navigator:{userAgent:``,vendor:``,platform:``},Yn=typeof document<`u`?document:{documentElement:{style:{}}},Xn=/Edge\/(\d+)/.exec(Jn.userAgent),Zn=/MSIE \d/.test(Jn.userAgent),Qn=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Jn.userAgent),$n=!!(Zn||Qn||Xn),er=!$n&&/gecko\/(\d+)/i.test(Jn.userAgent),tr=!$n&&/Chrome\/(\d+)/.exec(Jn.userAgent),nr=`webkitFontSmoothing`in Yn.documentElement.style,rr=!$n&&/Apple Computer/.test(Jn.vendor),ir=rr&&(/Mobile\/\w+/.test(Jn.userAgent)||Jn.maxTouchPoints>2),k={mac:ir||/Mac/.test(Jn.platform),windows:/Win/.test(Jn.platform),linux:/Linux|X11/.test(Jn.platform),ie:$n,ie_version:Zn?Yn.documentMode||6:Qn?+Qn[1]:Xn?+Xn[1]:0,gecko:er,gecko_version:er?+(/Firefox\/(\d+)/.exec(Jn.userAgent)||[0,0])[1]:0,chrome:!!tr,chrome_version:tr?+tr[1]:0,ios:ir,android:/Android\b/.test(Jn.userAgent),webkit:nr,webkit_version:nr?+(/\bAppleWebKit\/(\d+)/.exec(Jn.userAgent)||[0,0])[1]:0,safari:rr,safari_version:rr?+(/\bVersion\/(\d+(\.\d+)?)/.exec(Jn.userAgent)||[0,0])[1]:0,tabSize:Yn.documentElement.style.tabSize==null?`-moz-tab-size`:`tab-size`};function ar(e,t){for(let n in e)n==`class`&&t.class?t.class+=` `+e.class:n==`style`&&t.style?t.style+=`;`+e.style:t[n]=e[n];return t}var or=Object.create(null);function sr(e,t,n){if(e==t)return!0;e||(e=or),t||(t=or);let r=Object.keys(e),i=Object.keys(t);if(r.length-0!=i.length-0)return!1;for(let a of r)if(a!=n&&(i.indexOf(a)==-1||e[a]!==t[a]))return!1;return!0}function cr(e,t){for(let n=e.attributes.length-1;n>=0;n--){let r=e.attributes[n].name;t[r]??e.removeAttribute(r)}for(let n in t){let r=t[n];n==`style`?e.style.cssText=r:e.getAttribute(n)!=r&&e.setAttribute(n,r)}}function lr(e,t,n){let r=!1;if(t)for(let i in t)n&&i in n||(r=!0,i==`style`?e.style.cssText=``:e.removeAttribute(i));if(n)for(let i in n)t&&t[i]==n[i]||(r=!0,i==`style`?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return r}function ur(e){let t=Object.create(null);for(let n=0;n<e.attributes.length;n++){let r=e.attributes[n];t[r.name]=r.value}return t}var dr=class{eq(e){return!1}updateDOM(e,t,n){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}},A=(function(e){return e[e.Text=0]=`Text`,e[e.WidgetBefore=1]=`WidgetBefore`,e[e.WidgetAfter=2]=`WidgetAfter`,e[e.WidgetRange=3]=`WidgetRange`,e})(A||(A={})),j=class extends pn{constructor(e,t,n,r){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=r}get heightRelevant(){return!1}static mark(e){return new fr(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new mr(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,r;if(e.isBlockGap)n=-5e8,r=4e8;else{let{start:i,end:a}=hr(e,t);n=(i?t?-3e8:-1:5e8)-1,r=(a?t?2e8:1:-6e8)+1}return new mr(e,n,r,t,e.widget||null,!0)}static line(e){return new pr(e)}static set(e,t=!1){return D.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}};j.none=D.empty;var fr=class e extends j{constructor(e){let{start:t,end:n}=hr(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||`span`,this.attrs=e.class&&e.attributes?ar(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||or}eq(t){return this==t||t instanceof e&&this.tagName==t.tagName&&sr(this.attrs,t.attrs)}range(e,t=e){if(e>=t)throw RangeError(`Mark decorations may not be empty`);return super.range(e,t)}};fr.prototype.point=!1;var pr=class e extends j{constructor(e){super(-2e8,-2e8,null,e)}eq(t){return t instanceof e&&this.spec.class==t.spec.class&&sr(this.spec.attributes,t.spec.attributes)}range(e,t=e){if(t!=e)throw RangeError(`Line decoration ranges must be zero-length`);return super.range(e,t)}};pr.prototype.mapMode=pt.TrackBefore,pr.prototype.point=!0;var mr=class e extends j{constructor(e,t,n,r,i,a){super(t,n,i,e),this.block=r,this.isReplace=a,this.mapMode=r?t<=0?pt.TrackBefore:pt.TrackAfter:pt.TrackDel}get type(){return this.startSide==this.endSide?this.startSide<=0?A.WidgetBefore:A.WidgetAfter:A.WidgetRange}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof e&&gr(this.widget,t.widget)&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw RangeError(`Invalid range for replacement decoration`);if(!this.isReplace&&t!=e)throw RangeError(`Widget decorations can only have zero-length ranges`);return super.range(e,t)}};mr.prototype.point=!0;function hr(e,t=!1){let{inclusiveStart:n,inclusiveEnd:r}=e;return n??(n=e.inclusive),r??(r=e.inclusive),{start:n??t,end:r??t}}function gr(e,t){return e==t||!!(e&&t&&e.compare(t))}function _r(e,t,n,r=0){let i=n.length-1;i>=0&&n[i]+r>=e?n[i]=Math.max(n[i],t):n.push(e,t)}var vr=class e extends pn{constructor(e,t,n){super(),this.tagName=e,this.attributes=t,this.rank=n}eq(t){return t==this||t instanceof e&&this.tagName==t.tagName&&sr(this.attributes,t.attributes)}static create(t){return new e(t.tagName,t.attributes||or,t.rank==null?50:Math.max(0,Math.min(t.rank,100)))}static set(e,t=!1){return D.of(e,t)}};vr.prototype.startSide=vr.prototype.endSide=-1;var M=e=>e.nodeType==1,yr=e=>e.nodeType==3;function br(e){let t;return t=e.nodeType==11?e.getSelection?e:e.ownerDocument:e,t.getSelection()}function xr(e,t){return t?e==t||e.contains(t.nodeType==1?t:t.parentNode):!1}function Sr(e,t){if(!t.anchorNode)return!1;try{return xr(e,t.anchorNode)}catch{return!1}}function Cr(e){return yr(e)?Br(e,0,e.nodeValue.length).getClientRects():M(e)?e.getClientRects():[]}function wr(e,t,n,r){return n?Dr(e,t,n,r,-1)||Dr(e,t,n,r,1):!1}function Tr(e){for(var t=0;;t++)if(e=e.previousSibling,!e)return t}function Er(e){return M(e)&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName)}function Dr(e,t,n,r,i){for(;;){if(e==n&&t==r)return!0;if(t==(i<0?0:Or(e))){if(e.nodeName==`DIV`)return!1;let n=e.parentNode;if(!n||!M(n))return!1;t=Tr(e)+(i<0?0:1),e=n}else if(M(e)){if(e=e.childNodes[t+(i<0?-1:0)],M(e)&&(e.nodeName==`IMG`||e.nodeName==`BR`||e.contentEditable==`false`))return!1;t=i<0?Or(e):0}else return!1}}function Or(e){return yr(e)?e.nodeValue.length:e.childNodes.length}function kr(e,t){let{left:n,right:r}=e;if(n==r)return e;let i=t?n:r;return{left:i,right:i,top:e.top,bottom:e.bottom}}function Ar(e){let t=e.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}function jr(e,t){let n=t.width/e.offsetWidth,r=t.height/e.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(t.width-e.offsetWidth)<1)&&(n=1),(r>.995&&r<1.005||!isFinite(r)||Math.abs(t.height-e.offsetHeight)<1)&&(r=1),{scaleX:n,scaleY:r}}function Mr(e,t,n,r,i,a,o,s){let c=e.ownerDocument,l=c.defaultView||window;for(let u=e,d=!1;u&&!d;)if(M(u)){let e,f=u==c.body,p=1,m=1;if(f)e=Ar(l);else{if(/^(fixed|sticky)$/.test(getComputedStyle(u).position)&&(d=!0),u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth){u=u.assignedSlot||u.parentNode;continue}let t=u.getBoundingClientRect();({scaleX:p,scaleY:m}=jr(u,t)),e={left:t.left,right:t.left+u.clientWidth*p,top:t.top,bottom:t.top+u.clientHeight*m}}let h=0,g=0;if(i==`nearest`)t.top<e.top+o?(g=t.top-(e.top+o),n>0&&t.bottom>e.bottom+g&&(g=t.bottom-e.bottom+o)):t.bottom>e.bottom-o&&(g=t.bottom-e.bottom+o,n<0&&t.top-g<e.top&&(g=t.top-(e.top+o)));else{let r=t.bottom-t.top,a=e.bottom-e.top;g=(i==`center`&&r<=a?t.top+r/2-a/2:i==`start`||i==`center`&&n<0?t.top-o:t.bottom-a+o)-e.top}if(r==`nearest`?t.left<e.left+a?(h=t.left-(e.left+a),n>0&&t.right>e.right+h&&(h=t.right-e.right+a)):t.right>e.right-a&&(h=t.right-e.right+a,n<0&&t.left<e.left+h&&(h=t.left-(e.left+a))):h=(r==`center`?t.left+(t.right-t.left)/2-(e.right-e.left)/2:r==`start`==s?t.left-a:t.right-(e.right-e.left)+a)-e.left,h||g){if(f)l.scrollBy(h,g);else{let e=0,n=0;if(g){let e=u.scrollTop;u.scrollTop+=g/m,n=(u.scrollTop-e)*m}if(h){let t=u.scrollLeft;u.scrollLeft+=h/p,e=(u.scrollLeft-t)*p}t={left:t.left-e,top:t.top-n,right:t.right-e,bottom:t.bottom-n},e&&Math.abs(e-h)<1&&(r=`nearest`),n&&Math.abs(n-g)<1&&(i=`nearest`)}}if(f)break;(t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)&&(t={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)}),u=u.assignedSlot||u.parentNode}else if(u.nodeType==11)u=u.host;else break}function Nr(e,t=!0){let n=e.ownerDocument,r=null,i=null;for(let a=e.parentNode;a&&!(a==n.body||(!t||r)&&i);)if(M(a))!i&&a.scrollHeight>a.clientHeight&&(i=a),t&&!r&&a.scrollWidth>a.clientWidth&&(r=a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;return{x:r,y:i}}var Pr=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?Or(t):0),n,Math.min(e.focusOffset,n?Or(n):0))}set(e,t,n,r){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=r}};function Fr(e){let t=[];for(let n=e;n;n=n.nodeType==11?n.host:n.parentNode)M(n)&&t.push({node:n,left:n.scrollLeft,top:n.scrollTop});return t}function Ir(e,t=!0){for(let{node:n,left:r,top:i}of e)t&&n.scrollTop!=i&&(n.scrollTop=i),n.scrollLeft!=r&&(n.scrollLeft=r)}var Lr=null;k.safari&&k.safari_version>=26&&(Lr=!1);function Rr(e){if(e.setActive)return e.setActive();if(Lr)return e.focus(Lr);let t=Fr(e);e.focus(Lr==null?{get preventScroll(){return Lr={preventScroll:!0},!0}}:void 0),Lr||(Lr=!1,Ir(t))}var zr;function Br(e,t,n=t){let r=zr||(zr=document.createRange());return r.setEnd(e,n),r.setStart(e,t),r}function Vr(e,t,n,r){let i={key:t,code:t,keyCode:n,which:n,cancelable:!0};r&&({altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}=r);let a=new KeyboardEvent(`keydown`,i);a.synthetic=!0,e.dispatchEvent(a);let o=new KeyboardEvent(`keyup`,i);return o.synthetic=!0,e.dispatchEvent(o),a.defaultPrevented||o.defaultPrevented}function Hr(e){for(;e;){if(e&&(e.nodeType==9||e.nodeType==11&&e.host))return e;e=e.assignedSlot||e.parentNode}return null}function Ur(e,t){let n=t.focusNode,r=t.focusOffset;if(!n||t.anchorNode!=n||t.anchorOffset!=r)return!1;for(r=Math.min(r,Or(n));;)if(r){if(!M(n))return!1;let e=n.childNodes[r-1];e.contentEditable==`false`?r--:(n=e,r=Or(n))}else if(n==e)return!0;else r=Tr(n),n=n.parentNode}function Wr(e){return e instanceof Window?e.pageYOffset>Math.max(0,e.document.documentElement.scrollHeight-e.innerHeight-4):e.scrollTop>Math.max(1,e.scrollHeight-e.clientHeight-4)}function Gr(e,t){for(let n=e,r=t;;)if(yr(n)&&r>0)return{node:n,offset:r};else if(M(n)&&r>0){if(n.contentEditable==`false`)return null;n=n.childNodes[r-1],r=Or(n)}else if(n.parentNode&&!Er(n))r=Tr(n),n=n.parentNode;else return null}function Kr(e,t){for(let n=e,r=t;;)if(yr(n)&&r<n.nodeValue.length)return{node:n,offset:r};else if(M(n)&&r<n.childNodes.length){if(n.contentEditable==`false`)return null;n=n.childNodes[r],r=0}else if(n.parentNode&&!Er(n))r=Tr(n)+1,n=n.parentNode;else return null}var qr=class e{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(t,n){return new e(t.parentNode,Tr(t),n)}static after(t,n){return new e(t.parentNode,Tr(t)+1,n)}},N=(function(e){return e[e.LTR=0]=`LTR`,e[e.RTL=1]=`RTL`,e})(N||(N={})),Jr=N.LTR,Yr=N.RTL;function Xr(e){let t=[];for(let n=0;n<e.length;n++)t.push(1<<e[n]);return t}var Zr=Xr(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`),Qr=Xr(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`),$r=Object.create(null),ei=[];for(let e of[`()`,`[]`,`{}`]){let t=e.charCodeAt(0),n=e.charCodeAt(1);$r[t]=n,$r[n]=-t}function ti(e){return e<=247?Zr[e]:1424<=e&&e<=1524?2:1536<=e&&e<=1785?Qr[e-1536]:1774<=e&&e<=2220?4:8192<=e&&e<=8204?256:64336<=e&&e<=65023?4:1}var ni=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/,ri=class{get dir(){return this.level%2?Yr:Jr}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,r){let i=-1;for(let a=0;a<e.length;a++){let o=e[a];if(o.from<=t&&o.to>=t){if(o.level==n)return a;(i<0||(r==0?e[i].level>o.level:r<0?o.from<t:o.to>t))&&(i=a)}}if(i<0)throw RangeError(`Index out of range`);return i}};function ii(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.direction!=i.direction||!ii(r.inner,i.inner))return!1}return!0}var P=[];function ai(e,t,n,r,i){for(let a=0;a<=r.length;a++){let o=a?r[a-1].to:t,s=a<r.length?r[a].from:n,c=a?256:i;for(let t=o,n=c,r=c;t<s;t++){let i=ti(e.charCodeAt(t));i==512?i=n:i==8&&r==4&&(i=16),P[t]=i==4?2:i,i&7&&(r=i),n=i}for(let e=o,t=c,r=c;e<s;e++){let i=P[e];if(i==128)e<s-1&&t==P[e+1]&&t&24?i=P[e]=t:P[e]=256;else if(i==64){let i=e+1;for(;i<s&&P[i]==64;)i++;let a=e&&t==8||i<n&&P[i]==8?r==1?1:8:256;for(let t=e;t<i;t++)P[t]=a;e=i-1}else i==8&&r==1&&(P[e]=1);t=i,i&7&&(r=i)}}}function oi(e,t,n,r,i){let a=i==1?2:1;for(let o=0,s=0,c=0;o<=r.length;o++){let l=o?r[o-1].to:t,u=o<r.length?r[o].from:n;for(let t=l,n,r,o;t<u;t++)if(r=$r[n=e.charCodeAt(t)]){if(r<0){for(let e=s-3;e>=0;e-=3)if(ei[e+1]==-r){let n=ei[e+2],r=n&2?i:n&4?n&1?a:i:0;r&&(P[t]=P[ei[e]]=r),s=e;break}}else if(ei.length==189)break;else ei[s++]=t,ei[s++]=n,ei[s++]=c}else if((o=P[t])==2||o==1){let e=o==i;c=+!e;for(let t=s-3;t>=0;t-=3){let n=ei[t+2];if(n&2)break;if(e)ei[t+2]|=2;else{if(n&4)break;ei[t+2]|=4}}}}}function si(e,t,n,r){for(let i=0,a=r;i<=n.length;i++){let o=i?n[i-1].to:e,s=i<n.length?n[i].from:t;for(let c=o;c<s;){let o=P[c];if(o==256){let o=c+1;for(;;)if(o==s){if(i==n.length)break;o=n[i++].to,s=i<n.length?n[i].from:t}else if(P[o]==256)o++;else break;let l=a==1,u=l==((o<t?P[o]:r)==1)?l?1:2:r;for(let t=o,r=i,a=r?n[r-1].to:e;t>c;)t==a&&(t=n[--r].from,a=r?n[r-1].to:e),P[--t]=u;c=o}else a=o,c++}}}function ci(e,t,n,r,i,a,o){let s=r%2?2:1;if(r%2==i%2)for(let c=t,l=0;c<n;){let t=!0,u=!1;if(l==a.length||c<a[l].from){let e=P[c];e!=s&&(t=!1,u=e==16)}let d=!t&&s==1?[]:null,f=t?r:r+1,p=c;run:for(;;)if(l<a.length&&p==a[l].from){if(u)break run;let m=a[l];if(!t)for(let e=m.to,t=l+1;;){if(e==n)break run;if(t<a.length&&a[t].from==e)e=a[t++].to;else if(P[e]==s)break run;else break}l++,d?d.push(m):(m.from>c&&o.push(new ri(c,m.from,f)),li(e,m.direction==Jr==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.to),p=m.to}else if(p==n||(t?P[p]!=s:P[p]==s))break;else p++;d?ci(e,c,p,r+1,i,d,o):c<p&&o.push(new ri(c,p,f)),c=p}else for(let c=n,l=a.length;c>t;){let n=!0,u=!1;if(!l||c>a[l-1].to){let e=P[c-1];e!=s&&(n=!1,u=e==16)}let d=!n&&s==1?[]:null,f=n?r:r+1,p=c;run:for(;;)if(l&&p==a[l-1].to){if(u)break run;let m=a[--l];if(!n)for(let e=m.from,n=l;;){if(e==t)break run;if(n&&a[n-1].to==e)e=a[--n].from;else if(P[e-1]==s)break run;else break}d?d.push(m):(m.to<c&&o.push(new ri(m.to,c,f)),li(e,m.direction==Jr==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.from),p=m.from}else if(p==t||(n?P[p-1]!=s:P[p-1]==s))break;else p--;d?ci(e,p,c,r+1,i,d,o):p<c&&o.push(new ri(p,c,f)),c=p}}function li(e,t,n,r,i,a,o){let s=t%2?2:1;ai(e,i,a,r,s),oi(e,i,a,r,s),si(i,a,r,s),ci(e,i,a,t,n,r,o)}function ui(e,t,n){if(!e)return[new ri(0,0,+(t==Yr))];if(t==Jr&&!n.length&&!ni.test(e))return di(e.length);if(n.length)for(;e.length>P.length;)P[P.length]=256;let r=[],i=t==Jr?0:1;return li(e,i,i,n,0,e.length,r),r}function di(e){return[new ri(0,e,0)]}var fi=``;function pi(e,t,n,r,i){if(!e.length)return null;let a=r.head-e.from,o;if(r.head==e.from&&r.assoc<0){if(!i)return null;a=t[o=0].side(!1,n)}else if(r.head==e.to&&r.assoc>0){if(i)return null;a=t[o=t.length-1].side(!0,n)}else o=ri.find(t,a,r.bidiLevel??-1,r.assoc);let s=t[o],c=s.side(i,n);if(a==c){let e=o+=i?1:-1;if(e<0||e>=t.length)return null;s=t[o=e],a=s.side(!i,n),c=s.side(i,n)}let l=x(e.text,a,s.forward(i,n));(l<s.from||l>s.to)&&(l=c),fi=e.text.slice(Math.min(a,l),Math.max(a,l));let u=o==(i?t.length-1:0)?null:t[o+(i?1:-1)];if(l==c){if(!u)return i?S.cursor(e.to,1):S.cursor(e.from,-1);if(u.level+ +!i<s.level)return S.cursor(u.side(!i,n)+e.from,u.forward(i,n)?1:-1,u.level)}return S.cursor(l+e.from,s.forward(i,n)?-1:1,s.level)}function mi(e,t,n){for(let r=t;r<n;r++){let t=ti(e.charCodeAt(r));if(t==1)return Jr;if(t==2||t==4)return Yr}return Jr}var hi=C.define(),gi=C.define(),_i=C.define(),vi=C.define(),yi=C.define(),bi=C.define(),xi=C.define(),Si=C.define(),Ci=C.define(),wi=C.define({combine:e=>e.some(e=>e)}),Ti=C.define({combine:e=>e.some(e=>e)}),Ei=C.define(),Di=class e{constructor(e,t,n,r,i,a=!1){this.range=e,this.y=t,this.x=n,this.yMargin=r,this.xMargin=i,this.isSnapshot=a}map(t){return t.empty?this:new e(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(t){return this.range.to<=t.doc.length?this:new e(S.cursor(t.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}},Oi=w.define({map:(e,t)=>e.map(t)}),ki=w.define();function Ai(e,t,n){let r=e.facet(vi);r.length?r[0](t):window.onerror&&window.onerror(String(t),n,void 0,void 0,t)||(n?console.error(n+`:`,t):console.error(t))}var ji=C.define({combine:e=>!e.length||e[0]}),Mi=0,Ni=C.define({combine(e){return e.filter((t,n)=>{for(let r=0;r<n;r++)if(e[r].plugin==t.plugin)return!1;return!0})}}),F=class e{constructor(e,t,n,r,i){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=r,this.baseExtensions=i(this),this.extension=this.baseExtensions.concat(Ni.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(Ni.of({plugin:this,arg:e}))}static define(t,n){let{eventHandlers:r,eventObservers:i,provide:a,decorations:o}=n||{};return new e(Mi++,t,r,i,e=>{let t=[];return o&&t.push(Li.of(t=>{let n=t.plugin(e);return n?o(n):j.none})),a&&t.push(a(e)),t})}static fromClass(t,n){return e.define((e,n)=>new t(e,n),n)}},Pi=class{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(!this.value){if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){Ai(e.state,t,`CodeMirror plugin crashed`),this.deactivate()}}else if(this.mustUpdate){let e=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(e)}catch(t){if(Ai(e.state,t,`CodeMirror plugin crashed`),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}return this}destroy(e){if(this.value?.destroy)try{this.value.destroy()}catch(t){Ai(e.state,t,`CodeMirror plugin crashed`)}}deactivate(){this.spec=this.value=null}},Fi=C.define(),Ii=C.define(),Li=C.define(),Ri=C.define(),zi=C.define(),Bi=C.define(),Vi=C.define();function Hi(e,t){let n=e.state.facet(Vi);if(!n.length)return n;let r=n.map(t=>t instanceof Function?t(e):t),i=[];return D.spans(r,t.from,t.to,{point(){},span(e,n,r,a){let o=e-t.from,s=n-t.from,c=i;for(let e=r.length-1;e>=0;e--,a--){let n=r[e].spec.bidiIsolate,i;if(n??(n=mi(t.text,o,s)),a>0&&c.length&&(i=c[c.length-1]).to==o&&i.direction==n)i.to=s,c=i.inner;else{let e={from:o,to:s,direction:n,inner:[]};c.push(e),c=e.inner}}}}),i}var Ui=C.define();function Wi(e){let t=0,n=0,r=0,i=0;for(let a of e.state.facet(Ui)){let o=a(e);o&&(o.left!=null&&(t=Math.max(t,o.left)),o.right!=null&&(n=Math.max(n,o.right)),o.top!=null&&(r=Math.max(r,o.top)),o.bottom!=null&&(i=Math.max(i,o.bottom)))}return{left:t,right:n,top:r,bottom:i}}var Gi=C.define(),Ki=class e{constructor(e,t,n,r){this.fromA=e,this.toA=t,this.fromB=n,this.toB=r}join(t){return new e(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let r=e[t-1];if(!(r.fromA>n.toA)){if(r.toA<n.fromA)break;n=n.join(r),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(t,n){if(n.length==0)return t;let r=[];for(let i=0,a=0,o=0;;){let s=i<t.length?t[i].fromB:1e9,c=a<n.length?n[a]:1e9,l=Math.min(s,c);if(l==1e9)break;let u=l+o,d=l,f=u;for(;;)if(a<n.length&&n[a]<=d){let e=n[a+1];a+=2,d=Math.max(d,e);for(let e=i;e<t.length&&t[e].fromB<=d;e++)o=t[e].toA-t[e].toB;f=Math.max(f,e+o)}else if(i<t.length&&t[i].fromB<=d){let e=t[i++];d=Math.max(d,e.toB),f=Math.max(f,e.toA),o=e.toA-e.toB}else break;r.push(new e(u,f,l,d))}return r}},qi=class e{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=ht.empty(this.startState.doc.length);for(let e of n)this.changes=this.changes.compose(e.changes);let r=[];this.changes.iterChangedRanges((e,t,n,i)=>r.push(new Ki(e,t,n,i))),this.changedRanges=r}static create(t,n,r){return new e(t,n,r)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}},Ji=[],I=class{constructor(e,t,n=0){this.dom=e,this.length=t,this.flags=n,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return Ji}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let e=this.domAttrs;e&&cr(this.dom,e)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:``)+(this.breakAfter?`#`:``)}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,t=this.posAtStart){let n=t;for(let t of this.children){if(t==e)return n;n+=t.length+t.breakAfter}throw RangeError(`Invalid child in posBefore`)}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,t,n){return null}domPosFor(e,t){let n=Tr(this.dom),r=this.length?e>0:t>0;return new qr(this.parent.dom,n+ +!!r,e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof Zi)return e;return null}static get(e){return e.cmTile}},Yi=class extends I{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let t=this.dom,n=null,r,i=e?.node==t?e:null,a=0;for(let o of this.children){if(o.sync(e),a+=o.length+o.breakAfter,r=n?n.nextSibling:t.firstChild,i&&r!=o.dom&&(i.written=!0),o.dom.parentNode==t)for(;r&&r!=o.dom;)r=Xi(r);else t.insertBefore(o.dom,r);n=o.dom}for(r=n?n.nextSibling:t.firstChild,i&&r&&(i.written=!0);r;)r=Xi(r);this.length=a}};function Xi(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}var Zi=class extends Yi{constructor(e,t){super(t),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let t=I.get(e);if(t&&this.owns(t))return t;e=e.parentNode}}blockTiles(e){for(let t=[],n=this,r=0,i=0;;)if(r==n.children.length){if(!t.length)return;n=n.parent,n.breakAfter&&i++,r=t.pop()}else{let a=n.children[r++];if(a instanceof Qi)t.push(r),n=a,r=0;else{let t=i+a.length,n=e(a,i);if(n!==void 0)return n;i=t+a.breakAfter}}}resolveBlock(e,t){let n,r=-1,i,a=-1;if(this.blockTiles((o,s)=>{let c=s+o.length;if(e>=s&&e<=c){if(o.isWidget()&&t>=-1&&t<=1){if(o.flags&32)return!0;o.flags&16&&(n=void 0)}(s<e||e==c&&(t<-1?o.length:o.covers(1)))&&(!n||!o.isWidget()&&n.isWidget())&&(n=o,r=e-s),(c>e||e==s&&(t>1?o.length:o.covers(-1)))&&(!i||!o.isWidget()&&i.isWidget())&&(i=o,a=e-s)}}),!n&&!i)throw Error(`No tile at position `+e);return n&&t<0||!i?{tile:n,offset:r}:{tile:i,offset:a}}},Qi=class e extends Yi{constructor(e,t){super(e),this.wrapper=t}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},$i=class e extends Yi{constructor(e,t){super(e),this.attrs=t}isLine(){return!0}static start(t,n,r){let i=new e(n||document.createElement(`div`),t);return(!n||!r)&&(i.flags|=4),i}get domAttrs(){return this.attrs}resolveInline(e,t,n=!1){let r=null,i=-1,a=null,o=-1;function s(e,c){for(let l=0,u=0;l<e.children.length&&u<=c;l++){let d=e.children[l],f=u+d.length;f>=c&&(d.isComposite()?s(d,c-u):(!a||n&&a.isHidden&&(t>0&&!(a.flags&32)||n&&ta(a,d)))&&(f>c||d.flags&32&&t<=1)?(a=d,o=c-u):(u<c||d.flags&16&&!(n&&d.isHidden)&&t>=-1)&&(r=d,i=c-u)),u=f}}s(this,e);let c=(t<0?r:a)||r||a;return c?{tile:c,offset:c==r?i:o}:null}coordsIn(e,t,n){let r=this.resolveInline(e,t,!0);return r?r.tile.coordsIn(Math.max(0,r.offset),t,n):ea(this)}domIn(e,t){let n=this.resolveInline(e,t);if(n){let{tile:e,offset:r}=n;if(this.dom.contains(e.dom))return e.isText()?new qr(e.dom,Math.min(e.dom.nodeValue.length,r)):e.domPosFor(r,e.flags&16?1:e.flags&32?-1:t);let i=n.tile.parent,a=!1;for(let e of i.children){if(a)return new qr(e.dom,0);e==n.tile&&(a=!0)}}return new qr(this.dom,0)}};function ea(e){let t=e.dom.lastChild;if(!t)return e.dom.getBoundingClientRect();let n=Cr(t);return n[n.length-1]||null}function ta(e,t){let n=e.coordsIn(0,1),r=t.coordsIn(0,1);return n&&r&&r.top<n.bottom}var na=class e extends Yi{constructor(e,t){super(e),this.mark=t}get domAttrs(){return this.mark.attrs}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},ra=class e extends I{constructor(e,t){super(e,t.length),this.text=t}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,t,n){let r=this.dom.nodeValue.length;e>r&&(e=r);let i=e,a=e,o=0;e==0&&t<0||e==r&&t>=0?k.chrome||k.gecko||(e?(i--,o=1):a<r&&(a++,o=-1)):t<0?i--:a<r&&a++;let s=Br(this.dom,i,a).getClientRects();if(!s.length)return null;let c=s[(o?o<0:t>=0)?0:s.length-1];return k.safari&&!o&&c.width==0&&(c=Array.prototype.find.call(s,e=>e.width)||c),n==null?c:kr(c,(o?o>0:t<0)==n)}static of(t,n){let r=new e(n||document.createTextNode(t),t);return n||(r.flags|=2),r}},ia=class e extends I{constructor(e,t,n,r){super(e,t,r),this.widget=n}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,t){return this.coordsInWidget(e,t,!1)}coordsInWidget(e,t,n){let r=this.widget.coordsAt(this.dom,e,t);if(r)return r;if(n)return kr(this.dom.getBoundingClientRect(),this.length?e==0:t<=0);{let t=this.dom.getClientRects(),n=null;if(!t.length)return null;let r=this.flags&16?!0:this.flags&32?!1:e>0;for(let i=r?t.length-1:0;n=t[i],!(e>0?i==0:i==t.length-1||n.top<n.bottom);i+=r?-1:1);return kr(n,!r)}}get overrideDOMText(){if(!this.length)return b.empty;let{root:e}=this;if(!e)return b.empty;let t=this.posAtStart;return e.view.state.doc.slice(t,t+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(t,n,r,i,a){return a||(a=t.toDOM(n),t.editable||(a.contentEditable=`false`)),new e(a,r,t,i)}},aa=class extends I{constructor(e){let t=document.createElement(`img`);t.className=`cm-widgetBuffer`,t.setAttribute(`aria-hidden`,`true`),super(t,0,e)}get isHidden(){return!0}get overrideDOMText(){return b.empty}coordsIn(e,t,n){let r=this.dom.getBoundingClientRect();return n==null?r:kr(r,t>0==n)}},oa=class{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,t,n){let{tile:r,index:i,beforeBreak:a,parents:o}=this;for(;e||t>0;)if(!r.isComposite()){let t=r.length;if(i<t&&e){let a=Math.min(e,t-i);n&&n.skip(r,i,i+a),e-=a,i+=a}if(i==t)a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++;else if(!e)break}else if(a){if(!e)break;n&&n.break(),e--,a=!1}else if(i==r.children.length){if(!e&&!o.length)break;n&&n.leave(r),a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++}else{let s=r.children[i],c=s.breakAfter;(t>0?s.length<=e:s.length<e)&&(!n||n.skip(s,0,s.length)!==!1||!s.isComposite)?(a=!!c,i++,e-=s.length):(o.push({tile:r,index:i}),r=s,i=0,n&&s.isComposite()&&n.enter(s))}return this.tile=r,this.index=i,this.beforeBreak=a,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}},sa=class{constructor(e,t,n,r){this.from=e,this.to=t,this.wrapper=n,this.rank=r}},ca=class{constructor(e,t,n){this.cache=e,this.root=t,this.blockWrappers=n,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,t,n,r){this.flushBuffer();let i=this.ensureMarks(t,n),a=i.lastChild;if(a&&a.isText()&&!(a.flags&8)&&a.length+e.length<512){this.cache.reused.set(a,2);let t=i.children[i.children.length-1]=new ra(a.dom,a.text+e);t.parent=i}else i.append(r||ra.of(e,this.cache.find(ra)?.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,t){let n=this.curLine;n.dom!=t.line.dom&&(n.setDOM(this.cache.reused.has(t.line)?va(t.line.dom):t.line.dom),this.cache.reused.set(t.line,2));let r=n;for(let e=t.marks.length-1;e>=0;e--){let n=t.marks[e],i=r.lastChild;if(i instanceof na&&i.mark.eq(n.mark))i.dom!=n.dom&&i.setDOM(va(n.dom)),r=i;else{let{dom:e}=n;this.cache.reused.get(n)&&I.get(n.dom)&&(e=va(n.dom));let t=na.of(n.mark,e);r.append(t),r=t}this.cache.reused.set(n,2)}let i=I.get(e.text);i&&this.cache.reused.set(i,2);let a=new ra(e.text,e.text.nodeValue);a.flags|=8,this.pos=e.range.toB,r.append(a)}addInlineWidget(e,t,n){let r=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);r||this.flushBuffer();let i=this.ensureMarks(t,n);!r&&!(e.flags&16)&&i.append(this.getBuffer(1)),i.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,t,n){this.flushBuffer(),this.ensureMarks(t,n).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let t=this.afterWidget||this.lastBlock;t.length+=e,this.pos+=e}addLineStart(e,t){e||(e=ha);let n=$i.start(e,t||this.cache.find($i)?.dom,!!t);this.getBlockPos().append(this.lastBlock=this.curLine=n)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,t){let n=this.curLine;for(let r=e.length-1;r>=0;r--){let i=e[r],a;if(t>0&&(a=n.lastChild)&&a instanceof na&&a.mark.eq(i))n=a,t--;else{let e=na.of(i,this.cache.find(na,e=>e.mark.eq(i))?.dom);n.append(e),n=e,t=0}}return n}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!pa(this.curLine,!1)||e.dom.nodeName!=`BR`&&e.isWidget()&&!(k.ios&&pa(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(ba,0,32)||new ia(ba.toDOM(),0,ba,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let t=e.rank*102+e.value.rank,n=new sa(e.from,e.to,e.value,t),r=this.wrappers.length;for(;r>0&&(this.wrappers[r-1].rank-n.rank||this.wrappers[r-1].to-n.to)<0;)r--;this.wrappers.splice(r,0,n)}this.wrapperPos=this.pos}getBlockPos(){this.updateBlockWrappers();let e=this.root;for(let t of this.wrappers){let n=e.lastChild;if(t.from<this.pos&&n instanceof Qi&&n.wrapper.eq(t.wrapper))e=n;else{let n=Qi.of(t.wrapper,this.cache.find(Qi,e=>e.wrapper.eq(t.wrapper))?.dom);e.append(n),e=n}}return e}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let t=2|(e<0?16:32),n=this.cache.find(aa,void 0,1);return n&&(n.flags=t),n||new aa(t)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}},la=class{constructor(e){this.skipCount=0,this.text=``,this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text=``,this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:t,lineBreak:n,done:r}=this.cursor.next(this.skipCount);if(this.skipCount=0,r)throw Error(`Ran out of text content when drawing inline views`);this.text=t;let i=this.textOff=Math.min(e,t.length);return n?null:t.slice(0,i)}let t=Math.min(this.text.length,this.textOff+e),n=this.text.slice(this.textOff,t);return this.textOff=t,n}},ua=[ia,$i,ra,na,aa,Qi,Zi];for(let e=0;e<ua.length;e++)ua[e].bucket=e;var da=class{constructor(e){this.view=e,this.buckets=ua.map(()=>[]),this.index=ua.map(()=>0),this.reused=new Map}add(e){let t=e.constructor.bucket,n=this.buckets[t];n.length<6?n.push(e):n[this.index[t]=(this.index[t]+1)%6]=e}find(e,t,n=2){let r=e.bucket,i=this.buckets[r],a=this.index[r];for(let e=0;e<i.length;e++){let o=(e+a)%i.length,s=i[o];if((!t||t(s))&&!this.reused.has(s))return i.splice(o,1),o<a&&this.index[r]--,this.reused.set(s,n),s}return null}findWidget(e,t,n){let r=this.buckets[0];if(r.length)for(let i=0,a=0;;i++){if(i==r.length){if(a)return null;a=1,i=0}let o=r[i];if(!this.reused.has(o)&&(a==0?o.widget.compare(e):o.widget.constructor==e.constructor&&e.updateDOM(o.dom,this.view,o.widget)))return r.splice(i,1),i<this.index[0]&&this.index[0]--,o.widget==e&&o.length==t&&(o.flags&497)==n?(this.reused.set(o,1),o):(this.reused.set(o,2),new ia(o.dom,t,e,o.flags&-498|n))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,t=2){if(!this.reused.has(e))return this.reused.set(e,t),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}},fa=class{constructor(e,t,n,r,i){this.view=e,this.decorations=r,this.disallowBlockEffectsFor=i,this.openWidget=!1,this.openMarks=0,this.cache=new da(e),this.text=new la(e.state.doc),this.builder=new ca(this.cache,new Zi(e,e.contentDOM),D.iter(n)),this.cache.reused.set(t,2),this.old=new oa(t),this.reuseWalker={skip:(e,t,n)=>{if(this.cache.add(e),e.isComposite())return!1},enter:e=>this.cache.add(e),leave:()=>{},break:()=>{}}}run(e,t){let n=t&&this.getCompositionContext(t.text);for(let r=0,i=0,a=0;;){let o=a<e.length?e[a++]:null,s=o?o.fromA:this.old.root.length;if(s>r){let e=s-r;this.preserve(e,!a,!o),r=s,i+=e}if(!o)break;t&&o.fromA<=t.range.fromA&&o.toA>=t.range.toA?(this.forward(o.fromA,t.range.fromA,t.range.fromA<t.range.toA?1:-1),this.emit(i,t.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(t,n),this.text.skip(t.range.toB-t.range.fromB),this.forward(t.range.fromA,o.toA),this.emit(t.range.toB,o.toB)):(this.forward(o.fromA,o.toA),this.emit(i,o.toB)),i=o.toB,r=o.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,t,n){let r=_a(this.old),i=this.openMarks;this.old.advance(e,n?1:-1,{skip:(e,t,n)=>{if(e.isWidget()){if(this.openWidget)this.builder.continueWidget(n-t);else{let a=n>0||t<e.length?ia.of(e.widget,this.view,n-t,e.flags&496,this.cache.maybeReuse(e)):this.cache.reuse(e);a.flags&256?(a.flags&=-2,this.builder.addBlockWidget(a)):(this.builder.ensureLine(null),this.builder.addInlineWidget(a,r,i),i=r.length)}}else if(e.isText())this.builder.ensureLine(null),!t&&n==e.length&&!this.cache.reused.has(e)?this.builder.addText(e.text,r,i,this.cache.reuse(e)):(this.cache.add(e),this.builder.addText(e.text.slice(t,n),r,i)),i=r.length;else if(e.isLine())e.flags&=-2,this.cache.reused.set(e,1),this.builder.addLine(e);else if(e instanceof aa)this.cache.add(e);else if(e instanceof na)this.builder.ensureLine(null),this.builder.addMark(e,r,i),this.cache.reused.set(e,1),i=r.length;else return!1;this.openWidget=!1},enter:e=>{e.isLine()?this.builder.addLineStart(e.attrs,this.cache.maybeReuse(e)):(this.cache.add(e),e instanceof na&&r.unshift(e.mark)),this.openWidget=!1},leave:e=>{e.isLine()?r.length&&(r.length=i=0):e instanceof na&&(r.shift(),i=Math.min(i,r.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,t){let n=null,r=this.builder,i=-1,a=D.spans(this.decorations,e,t,{point:(e,t,a,o,s,c)=>{if(a instanceof mr){if(this.disallowBlockEffectsFor[c]){if(a.block)throw RangeError(`Block decorations may not be specified via plugins`);if(t>this.view.state.doc.lineAt(e).to)throw RangeError(`Decorations that replace line breaks may not be specified via plugins`)}if(i=o.length,s>o.length)r.continueWidget(t-e);else{let i=a.widget||(a.block?ya.block:ya.inline),c=ma(a),l=this.cache.findWidget(i,t-e,c)||ia.of(i,this.view,t-e,c);a.block?(a.startSide>0&&r.addLineStartIfNotCovered(n),r.addBlockWidget(l)):(r.ensureLine(n),r.addInlineWidget(l,o,s))}n=null}else n=ga(n,a);t>e&&this.text.skip(t-e)},span:(e,t,a,o)=>{for(let i=e;i<t;){let s=this.text.next(Math.min(512,t-i));s==null?(r.addLineStartIfNotCovered(n),r.addBreak(),i++):(r.ensureLine(n),r.addText(s,a,i==e?o:a.length),i+=s.length),n=null}i=a.length}});i>-1&&(this.openWidget=a>i),this.openWidget||r.addLineStartIfNotCovered(n),this.openMarks=a}forward(e,t,n=1){t-e<=10?this.old.advance(t-e,n,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(t-e-10,-1),this.old.advance(5,n,this.reuseWalker))}getCompositionContext(e){let t=[],n=null;for(let r=e.parentNode;;r=r.parentNode){let e=I.get(r);if(r==this.view.contentDOM)break;e instanceof na?t.push(e):e?.isLine()?n=e:e instanceof Qi||(r.nodeName==`DIV`&&!n?n=new $i(r,ha):n||t.push(na.of(new fr({tagName:r.nodeName.toLowerCase(),attributes:ur(r)}),r)))}return n?{line:n,marks:t}:null}};function pa(e,t){let n=e=>{for(let r of e.children)if((t?r.isText():r.length)||n(r))return!0;return!1};return n(e)}function ma(e){let t=e.isReplace?(e.startSide<0?64:0)|(e.endSide>0?128:0):e.startSide>0?32:16;return e.block&&(t|=256),t}var ha={class:`cm-line`};function ga(e,t){let n=t.spec.attributes,r=t.spec.class;return!n&&!r||(e||(e={class:`cm-line`}),n&&ar(n,e),r&&(e.class+=` `+r)),e}function _a(e){let t=[];for(let n=e.parents.length;n>1;n--){let r=n==e.parents.length?e.tile:e.parents[n].tile;r instanceof na&&t.push(r.mark)}return t}function va(e){let t=I.get(e);return t&&t.setDOM(e.cloneNode()),e}var ya=class extends dr{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}};ya.inline=new ya(`span`),ya.block=new ya(`div`);var ba=new class extends dr{toDOM(){return document.createElement(`br`)}get isHidden(){return!0}get editable(){return!0}},xa=class{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=j.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new Zi(e,e.contentDOM),this.updateInner([new Ki(0,0,0,e.state.doc.length)],null)}update(e){let t=e.changedRanges;this.minWidth>0&&t.length&&(t.every(({fromA:e,toA:t})=>t<this.minWidthFrom||e>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let n=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(this.domChanged?.newSel?n=this.domChanged.newSel.head:!Ma(e.changes,this.hasComposition)&&!e.selectionSet&&(n=e.state.selection.main.head));let r=n>-1?Ta(this.view,e.changes,n):null;if(this.domChanged=null,this.hasComposition){let{from:n,to:r}=this.hasComposition;t=new Ki(n,r,e.changes.mapPos(n,-1),e.changes.mapPos(r,1)).addToSet(t.slice())}this.hasComposition=r?{from:r.range.fromB,to:r.range.toB}:null,(k.ie||k.chrome)&&!r&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let i=this.decorations,a=this.blockWrappers;this.updateDeco();let o=Oa(i,this.decorations,e.changes);o.length&&(t=Ki.extendWithRanges(t,o));let s=Aa(a,this.blockWrappers,e.changes);return s.length&&(t=Ki.extendWithRanges(t,s)),r&&!t.some(e=>e.fromA<=r.range.fromA&&e.toA>=r.range.toA)&&(t=r.range.addToSet(t.slice())),this.tile.flags&2&&t.length==0?!1:(this.updateInner(t,r),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t){this.view.viewState.mustMeasureContent=!0;let{observer:n}=this.view;n.ignore(()=>{if(t||e.length){let n=this.tile,r=new fa(this.view,n,this.blockWrappers,this.decorations,this.dynamicDecorationMap);t&&I.get(t.text)&&r.cache.reused.set(I.get(t.text),2),this.tile=r.run(e,t),Sa(n,r.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+`px`,this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+`px`:``;let r=k.chrome||k.ios?{node:n.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(r),r&&(r.written||n.selectionRange.focusNode!=r.node||!this.tile.dom.contains(r.node))&&(this.forceSelection=!0),this.tile.dom.style.height=``});let r=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let e of this.tile.children)e.isWidget()&&e.widget instanceof Na&&r.push(e.dom);n.updateGaps(r)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let e of t.effects)e.is(ki)&&(this.editContextFormatting=e.value)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:n}=this.tile,r=this.view.root.activeElement,i=r==n,a=!i&&!(this.view.state.facet(ji)||n.tabIndex>-1)&&Sr(n,this.view.observer.selectionRange)&&!(r&&n.contains(r));if(!(i||t||a))return;let o=this.forceSelection;this.forceSelection=!1;let s=this.view.state.selection.main,c,l;if(s.empty?l=c=this.inlineDOMNearPos(s.anchor,s.assoc||1):(l=this.inlineDOMNearPos(s.head,s.head==s.from?1:-1),c=this.inlineDOMNearPos(s.anchor,s.anchor==s.from?1:-1)),k.gecko&&s.empty&&!this.hasComposition&&Ca(c)){let e=document.createTextNode(``);this.view.observer.ignore(()=>c.node.insertBefore(e,c.node.childNodes[c.offset]||null)),c=l=new qr(e,0),o=!0}let u=this.view.observer.selectionRange;(o||!u.focusNode||(!wr(c.node,c.offset,u.anchorNode,u.anchorOffset)||!wr(l.node,l.offset,u.focusNode,u.focusOffset))&&!this.suppressWidgetCursorChange(u,s))&&(this.view.observer.ignore(()=>{k.android&&k.chrome&&n.contains(u.focusNode)&&ja(u.focusNode,n)&&(n.blur(),n.focus({preventScroll:!0}));let e=br(this.view.root);if(e){if(s.empty){if(k.gecko){let e=Ea(c.node,c.offset);if(e&&e!=3){let t=(e==1?Gr:Kr)(c.node,c.offset);t&&(c=new qr(t.node,t.offset))}}e.collapse(c.node,c.offset),s.bidiLevel!=null&&e.caretBidiLevel!==void 0&&(e.caretBidiLevel=s.bidiLevel)}else if(e.extend){e.collapse(c.node,c.offset);try{e.extend(l.node,l.offset)}catch{}}else{let t=document.createRange();s.anchor>s.head&&([c,l]=[l,c]),t.setEnd(l.node,l.offset),t.setStart(c.node,c.offset),e.removeAllRanges(),e.addRange(t)}}a&&this.view.root.activeElement==n&&(n.blur(),r&&r.focus())}),this.view.observer.setSelectionRange(c,l)),this.impreciseAnchor=c.precise?null:new qr(u.anchorNode,u.anchorOffset),this.impreciseHead=l.precise?null:new qr(u.focusNode,u.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&wr(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=br(e.root),{anchorNode:r,anchorOffset:i}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let a=this.lineAt(t.head,t.assoc);if(!a)return;let o=a.posAtStart;if(t.head==o||t.head==o+a.length)return;let s=this.coordsAt(t.head,-1),c=this.coordsAt(t.head,1);if(!s||!c||s.bottom>c.top)return;let l=this.domAtPos(t.head+t.assoc,t.assoc);n.collapse(l.node,l.offset),n.modify(`move`,t.assoc<0?`forward`:`backward`,`lineboundary`),e.observer.readSelectionRange();let u=e.observer.selectionRange;e.docView.posFromDOM(u.anchorNode,u.anchorOffset)!=t.from&&n.collapse(r,i)}posFromDOM(e,t){let n=this.tile.nearest(e);if(!n)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let r=n.posAtStart;if(n.isComposite()){let i;if(e==n.dom)i=n.dom.childNodes[t];else{let r=Or(e)==0?0:t==0?-1:1;for(;;){let t=e.parentNode;if(t==n.dom)break;r==0&&t.firstChild!=t.lastChild&&(r=e==t.firstChild?-1:1),e=t}i=r<0?e:e.nextSibling}if(i==n.dom.firstChild)return r;for(;i&&!I.get(i);)i=i.nextSibling;if(!i)return r+n.length;for(let e=0,t=r;;e++){let r=n.children[e];if(r.dom==i)return t;t+=r.length+r.breakAfter}}else if(n.isText())return e==n.dom?r+t:r+(t?n.length:0);else return r}domAtPos(e,t){let{tile:n,offset:r}=this.tile.resolveBlock(e,t);return n.isWidget()?n.domPosFor(r,t):n.domIn(r,t)}inlineDOMNearPos(e,t){let n,r=-1,i=!1,a,o=-1,s=!1;return this.tile.blockTiles((t,c)=>{if(t.isWidget()){if(t.flags&32&&c>=e)return!0;t.flags&16&&(i=!0)}else{let l=c+t.length;if(c<=e&&(n=t,r=e-c,i=l<e),l>=e&&!a&&(a=t,o=e-c,s=c>e),c>e&&a)return!0}}),!n&&!a?this.domAtPos(e,t):(i&&a?n=null:s&&n&&(a=null),n&&t<0||!a?n.domIn(r,t):a.domIn(o,t))}coordsAt(e,t,n){let{tile:r,offset:i}=this.tile.resolveBlock(e,t);return r.isWidget()?r.widget instanceof Na?null:r.coordsInWidget(i,t,!0):r.coordsIn(i,t,n)}lineAt(e,t){let{tile:n}=this.tile.resolveBlock(e,t);return n.isLine()?n:null}coordsForChar(e){let{tile:t,offset:n}=this.tile.resolveBlock(e,1);if(!t.isLine())return null;function r(e,t){if(e.isComposite())for(let n of e.children){if(n.length>=t){let e=r(n,t);if(e)return e}if(t-=n.length,t<0)break}else if(e.isText()&&t<e.length){let n=x(e.text,t);if(n==t)return null;let r=Br(e.dom,t,n).getClientRects();for(let e=0;e<r.length;e++){let t=r[e];if(e==r.length-1||t.top<t.bottom&&t.left<t.right)return t}}return null}return r(t,n)}measureVisibleLineHeights(e){let t=[],{from:n,to:r}=e,i=this.view.contentDOM.clientWidth,a=i>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,o=-1,s=this.view.textDirection==N.LTR,c=0,l=(e,u,d)=>{for(let f=0;f<e.children.length&&!(u>r);f++){let r=e.children[f],p=u+r.length,m=r.dom.getBoundingClientRect(),{height:h}=m;if(d&&!f&&(c+=m.top-d.top),r instanceof Qi)p>n&&l(r,u,m);else if(u>=n&&(c>0&&t.push(-c),t.push(h+c),c=0,a)){let e=r.dom.lastChild,t=e?Cr(e):[];if(t.length){let e=t[t.length-1],n=s?e.right-m.left:m.right-e.left;n>o&&(o=n,this.minWidth=i,this.minWidthFrom=u,this.minWidthTo=p)}}d&&f==e.children.length-1&&(c+=d.bottom-m.bottom),u=p+r.breakAfter}};return l(this.tile,0,null),t}textDirectionAt(e){let{tile:t}=this.tile.resolveBlock(e,1);return getComputedStyle(t.dom).direction==`rtl`?N.RTL:N.LTR}measureTextSize(){let e=this.tile.blockTiles(e=>{if(e.isLine()&&e.children.length&&e.length<=20){let t=0,n;for(let r of e.children){if(!r.isText()||/[^ -~]/.test(r.text))return;let e=Cr(r.dom);if(e.length!=1)return;t+=e[0].width,n=e[0].height}if(t)return{lineHeight:e.dom.getBoundingClientRect().height,charWidth:t/e.length,textHeight:n}}});if(e)return e;let t=document.createElement(`div`),n,r,i;return t.className=`cm-line`,t.style.width=`99999px`,t.style.position=`absolute`,t.textContent=`abc def ghi jkl mno pqr stu`,this.view.observer.ignore(()=>{this.tile.dom.appendChild(t);let e=Cr(t.firstChild)[0];n=t.getBoundingClientRect().height,r=e&&e.width?e.width/27:7,i=e&&e.height?e.height:n,t.remove()}),{lineHeight:n,charWidth:r,textHeight:i}}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,r=0;;r++){let i=r==t.viewports.length?null:t.viewports[r],a=i?i.from-1:this.view.state.doc.length;if(a>n){let r=(t.lineBlockAt(a).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(j.replace({widget:new Na(r),block:!0,inclusive:!0,isBlockGap:!0}).range(n,a))}if(!i)break;n=i.to+1}return j.set(e)}updateDeco(){let e=1,t=this.view.state.facet(Li).map(t=>(this.dynamicDecorationMap[e++]=typeof t==`function`)?t(this.view):t),n=!1,r=this.view.state.facet(zi).map((e,t)=>{let r=typeof e==`function`;return r&&(n=!0),r?e(this.view):e});for(r.length&&(this.dynamicDecorationMap[e++]=n,t.push(D.join(r))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(Ri).map(e=>typeof e==`function`?e(this.view):e)}scrollIntoView(e){if(e.isSnapshot){let t=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=t.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let t of this.view.state.facet(Ei))try{if(t(this.view,e.range,e))return!0}catch(e){Ai(this.view.state,e,`scroll handler`)}let{range:t}=e,n=this.coordsAt(t.head,t.assoc||(t.head>t.anchor?-1:1)),r;if(!n)return;!t.empty&&(r=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,r.left),top:Math.min(n.top,r.top),right:Math.max(n.right,r.right),bottom:Math.max(n.bottom,r.bottom)});let i=Wi(this.view),a={left:n.left-i.left,top:n.top-i.top,right:n.right+i.right,bottom:n.bottom+i.bottom},{offsetWidth:o,offsetHeight:s}=this.view.scrollDOM;if(Mr(this.view.scrollDOM,a,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,o),-o),Math.max(Math.min(e.yMargin,s),-s),this.view.textDirection==N.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(n.top>window.visualViewport.offsetTop+window.visualViewport.height||n.bottom<window.visualViewport.offsetTop)){let e=this.view.docView.lineAt(t.head,1);if(e){let t=Fr(e.dom);e.dom.scrollIntoView({block:`nearest`}),Ir(t,!1)}}}lineHasWidget(e){let t=e=>e.isWidget()||e.children.some(t);return t(this.tile.resolveBlock(e,1).tile)}destroy(){Sa(this.tile)}};function Sa(e,t){let n=t?.get(e);if(n!=1){n??e.destroy();for(let n of e.children)Sa(n,t)}}function Ca(e){return M(e.node)&&e.node.firstChild&&(e.offset==0||e.node.childNodes[e.offset-1].contentEditable==`false`)&&(e.offset==e.node.childNodes.length||e.node.childNodes[e.offset].contentEditable==`false`)}function wa(e,t){let n=e.observer.selectionRange;if(!n.focusNode)return null;let r=Gr(n.focusNode,n.focusOffset),i=Kr(n.focusNode,n.focusOffset),a=r||i;if(i&&r&&i.node!=r.node){let t=I.get(i.node);if(!t||t.isText()&&t.text!=i.node.nodeValue)a=i;else if(e.docView.lastCompositionAfterCursor){let e=I.get(r.node);!e||e.isText()&&e.text!=r.node.nodeValue||(a=i)}}if(e.docView.lastCompositionAfterCursor=a!=r,!a)return null;let o=t-a.offset;return{from:o,to:o+a.node.nodeValue.length,node:a.node}}function Ta(e,t,n){let r=wa(e,n);if(!r)return null;let{node:i,from:a,to:o}=r,s=i.nodeValue;if(/[\n\r]/.test(s)||e.state.doc.sliceString(r.from,r.to)!=s)return null;let c=t.invertedDesc;return{range:new Ki(c.mapPos(a),c.mapPos(o),a,o),text:i}}function Ea(e,t){return M(e)?(t&&e.childNodes[t-1].contentEditable==`false`?1:0)|(t<e.childNodes.length&&e.childNodes[t].contentEditable==`false`?2:0):0}var Da=class{constructor(){this.changes=[]}compareRange(e,t){_r(e,t,this.changes)}comparePoint(e,t){_r(e,t,this.changes)}boundChange(e){_r(e,e,this.changes)}};function Oa(e,t,n){let r=new Da;return D.compare(e,t,n,r),r.changes}var ka=class{constructor(){this.changes=[]}compareRange(e,t){_r(e,t,this.changes)}comparePoint(){}boundChange(e){_r(e,e,this.changes)}};function Aa(e,t,n){let r=new ka;return D.compare(e,t,n,r),r.changes}function ja(e,t){for(let n=e;n&&n!=t;n=n.assignedSlot||n.parentNode)if(M(n)&&n.contentEditable==`false`)return!0;return!1}function Ma(e,t){let n=!1;return t&&e.iterChangedRanges((e,r)=>{e<t.to&&r>t.from&&(n=!0)}),n}var Na=class extends dr{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement(`div`);return e.className=`cm-gap`,this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+`px`,!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}};function Pa(e,t,n=1){let r=e.charCategorizer(t),i=e.doc.lineAt(t),a=t-i.from;if(i.length==0)return S.cursor(t);a==0?n=1:a==i.length&&(n=-1);let o=a,s=a;n<0?o=x(i.text,a,!1):s=x(i.text,a);let c=r(i.text.slice(o,s));for(;o>0;){let e=x(i.text,o,!1);if(r(i.text.slice(e,o))!=c)break;o=e}for(;s<i.length;){let e=x(i.text,s);if(r(i.text.slice(s,e))!=c)break;s=e}return S.undirectionalRange(o+i.from,s+i.from)}function Fa(e,t,n,r,i){let a=Math.round((r-t.left)*e.defaultCharacterWidth);if(e.lineWrapping&&n.height>e.defaultLineHeight*1.5){let t=e.viewState.heightOracle.textHeight,r=Math.floor((i-n.top-(e.defaultLineHeight-t)*.5)/t);a+=r*e.viewState.heightOracle.lineLength}let o=e.state.sliceDoc(n.from,n.to);return n.from+Mn(o,a,e.state.tabSize)}function Ia(e,t,n){let r=e.lineBlockAt(t);if(Array.isArray(r.type)){let e;for(let i of r.type){if(i.from>t)break;if(!(i.to<t)){if(i.from<t&&i.to>t)return i;(!e||i.type==A.Text&&(e.type!=i.type||(n<0?i.from<t:i.to>t)))&&(e=i)}}return e||r}return r}function La(e,t,n,r){let i=Ia(e,t.head,t.assoc||-1),a=!r||i.type!=A.Text||!(e.lineWrapping||i.widgetLineBreaks)?null:e.coordsAtPos(t.assoc<0&&t.head>i.from?t.head-1:t.head);if(a){let t=e.dom.getBoundingClientRect(),r=e.textDirectionAt(i.from),o=e.posAtCoords({x:n==(r==N.LTR)?t.right-1:t.left+1,y:(a.top+a.bottom)/2});if(o!=null)return S.cursor(o,n?-1:1)}return S.cursor(n?i.to:i.from,n?-1:1)}function Ra(e,t,n,r){let i=e.state.doc.lineAt(t.head),a=e.bidiSpans(i),o=e.textDirectionAt(i.from);for(let s=t,c=null;;){let t=pi(i,a,o,s,n),l=fi;if(!t){if(i.number==(n?e.state.doc.lines:1))return s;l=`
`,i=e.state.doc.line(i.number+(n?1:-1)),a=e.bidiSpans(i),t=n?S.cursor(i.from,-1):S.cursor(i.to,1)}if(!c){if(!r)return t;c=r(l)}else if(!c(l))return s;s=t}}function za(e,t,n){let r=e.state.charCategorizer(t),i=r(n);return e=>{let t=r(e);return i==T.Space&&(i=t),i==t}}function Ba(e,t,n,r){let i=t.head,a=n?1:-1;if(i==(n?e.state.doc.length:0))return S.cursor(i,t.assoc);let o=t.goalColumn,s,c=e.contentDOM.getBoundingClientRect(),l=e.coordsAtPos(i,t.assoc||((t.empty?n:t.head==t.from)?1:-1)),u=e.documentTop;if(l)o??(o=l.left-c.left),s=a<0?l.top:l.bottom;else{let t=e.viewState.lineBlockAt(i);o??(o=Math.min(c.right-c.left,e.defaultCharacterWidth*(i-t.from))),s=(a<0?t.top:t.bottom)+u}let d=c.left+o,f=e.viewState.heightOracle.textHeight>>1,p=r??f;for(let t=0;;t+=f){let r=s+(p+t)*a,i=Ga(e,{x:d,y:r},!1,a);if(n?r>c.bottom:r<c.top)return S.cursor(i.pos,i.assoc);let l=e.coordsAtPos(i.pos,i.assoc),u=l?(l.top+l.bottom)/2:0;if(!l||(n?u>s:u<s))return S.cursor(i.pos,i.assoc,void 0,o)}}function Va(e,t,n){for(;;){let r=0;for(let i of e)i.between(t-1,t+1,(e,i,a)=>{if(t>e&&t<i){let a=r||n||(t-e<i-t?-1:1);t=a<0?e:i,r=a}});if(!r)return t}}function Ha(e,t){let n=null;for(let r=0;r<t.ranges.length;r++){let i=t.ranges[r],a=null;if(i.empty){let t=Va(e,i.from,0);t!=i.from&&(a=S.cursor(t,-1))}else{let t=Va(e,i.from,-1),n=Va(e,i.to,1);(t!=i.from||n!=i.to)&&(a=i.undirectional?S.undirectionalRange(i.from,i.to):S.range(i.from==i.anchor?t:n,i.from==i.head?t:n))}a&&(n||(n=t.ranges.slice()),n[r]=a)}return n?S.create(n,t.mainIndex):t}function Ua(e,t,n){let r=Va(e.state.facet(Bi).map(t=>t(e)),n.from,t.head>n.from?-1:1);return r==n.from?n:S.cursor(r,r<n.from?1:-1)}var Wa=class{constructor(e,t){this.pos=e,this.assoc=t}};function Ga(e,t,n,r){let i=e.contentDOM.getBoundingClientRect(),a=i.top+e.viewState.paddingTop,{x:o,y:s}=t,c=s-a,l;for(;;){if(c<0)return new Wa(0,1);if(c>e.viewState.docHeight)return new Wa(e.state.doc.length,-1);if(l=e.elementAtHeight(c),r==null)break;if(l.type==A.Text){if(r<0?l.to<e.viewport.from:l.from>e.viewport.to)break;let t=e.docView.coordsAt(r<0?l.from:l.to,r>0?-1:1);if(t&&(r<0?t.top<=c+a:t.bottom>=c+a))break}let t=e.viewState.heightOracle.textHeight/2;c=r>0?l.bottom+t:l.top-t}if(e.viewport.from>=l.to||e.viewport.to<=l.from){if(n)return null;if(l.type==A.Text){let t=Fa(e,i,l,o,s);return new Wa(t,t==l.from?1:-1)}}if(l.type!=A.Text)return c<(l.top+l.bottom)/2?new Wa(l.from,1):new Wa(l.to,-1);let u=e.docView.lineAt(l.from,2);return(!u||u.length!=l.length)&&(u=e.docView.lineAt(l.from,-2)),new Ka(e,o,s,e.textDirectionAt(l.from)).scanTile(u,l.from)}var Ka=class{constructor(e,t,n,r){this.view=e,this.x=t,this.y=n,this.baseDir=r,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[ri.find(r,e-n.from,-1,t)].level==this.baseDir}dirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[ri.find(r,e-n.from,-1,t)].dir}bidiIn(e,t){let{spans:n,line:r}=this.bidiSpansAt(e);return n.length>1||n.length&&(n[0].level!=this.baseDir||n[0].to+r.from<t)}scan(e,t,n=!1){let r=0,i=e.length-1,a=new Set,o=this.bidiIn(e[0],e[i]),s,c,l=-1,u=1e9,d;search:for(;r<i;){let n=i-r,f=r+i>>1;adjust:if(a.has(f)){for(let e=1;e<n;e++){let t=f+e;if(t>=i&&(t-=n),!a.has(t)){f=t;break adjust}}break search}a.add(f);let p=t(f),m=0;if(p)for(let e=0;e<p.length;e++){let t=p[e];if(!(t.width==0&&p.length>1)){if(t.bottom<this.y)(!s||s.bottom<t.bottom)&&(s=t),m=1;else if(t.top>this.y)(!c||c.top>t.top)&&(c=t),m=-1;else{let e=t.left>this.x?this.x-t.left:t.right<this.x?this.x-t.right:0,n=Math.abs(e);n<u&&(l=f,u=n,d=t),e&&(m=e<0==(this.baseDir==N.LTR)?-1:1)}}}m==-1&&(!o||this.baseDirAt(e[f],1))?i=f:m==1&&(!o||this.baseDirAt(e[f+1],-1))&&(r=f+1)}if(!d){if(!c&&!s)return{i:0,after:!1};let n=s&&(!c||this.y-s.bottom<c.top-this.y)?s:c;return this.y=(n.top+n.bottom)/2,this.scan(e,t,!0)}if(u&&!n){let{top:n,bottom:r}=d;if(s&&s.bottom>(n+n+r)/3)return this.y=s.bottom-1,this.scan(e,t,!0);if(c&&c.top<(n+r+r)/3)return this.y=c.top+1,this.scan(e,t,!0)}let f=(o?this.dirAt(e[l],1):this.baseDir)==N.LTR;return{i:l,after:this.x>(d.left+d.right)/2==f}}scanText(e,t){let n=[];for(let r=0;r<e.length;r=x(e.text,r))n.push(t+r);n.push(t+e.length);let r=this.scan(n,r=>{let i=n[r]-t,a=n[r+1]-t;return Br(e.dom,i,a).getClientRects()});return r.after?new Wa(n[r.i+1],-1):new Wa(n[r.i],1)}scanTile(e,t){if(!e.length)return new Wa(t,1);if(e.children.length==1){let n=e.children[0];if(n.isText())return this.scanText(n,t);if(n.isComposite())return this.scanTile(n,t)}let n=[t];for(let r=0,i=t;r<e.children.length;r++)n.push(i+=e.children[r].length);let r=this.scan(n,t=>{let n=e.children[t];return n.flags&48?null:(M(n.dom)?n.dom:Br(n.dom,0,n.length)).getClientRects()}),i=e.children[r.i],a=n[r.i];return i.isText()?this.scanText(i,a):i.isComposite()?this.scanTile(i,a):r.after?new Wa(n[r.i+1],-1):new Wa(a,1)}},qa=`￿`,Ja=class{constructor(e,t){this.points=e,this.view=t,this.text=``,this.lineSeparator=t.state.facet(E.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=qa}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let r=e;;){this.findPointBefore(n,r);let e=this.text.length;this.readNode(r);let i=I.get(r),a=r.nextSibling;if(a==t){i?.breakAfter&&!a&&n!=this.view.contentDOM&&this.lineBreak();break}let o=I.get(a);(i&&o?i.breakAfter:(i?i.breakAfter:Er(r))||Er(a)&&(r.nodeName!=`BR`||i?.isWidget())&&this.text.length>e)&&!Xa(a,t)&&this.lineBreak(),r=a}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,r=this.lineSeparator?null:/\r\n?|\n/g;;){let i=-1,a=1,o;if(this.lineSeparator?(i=t.indexOf(this.lineSeparator,n),a=this.lineSeparator.length):(o=r.exec(t))&&(i=o.index,a=o[0].length),this.append(t.slice(n,i<0?t.length:i)),i<0)break;if(this.lineBreak(),a>1)for(let t of this.points)t.node==e&&t.pos>this.text.length&&(t.pos-=a-1);n=i+a}}readNode(e){let t=I.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let e=n.iter();!e.next().done;)e.lineBreak?this.lineBreak():this.append(e.value)}else yr(e)?this.readTextNode(e):e.nodeName==`BR`?e.nextSibling&&this.lineBreak():M(e)&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(yr(e)?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(Ya(e,n.node,n.offset)?t:0))}};function Ya(e,t,n){for(;;){if(!t||n<Or(t))return!1;if(t==e)return!0;n=Tr(t)+1,t=t.parentNode}}function Xa(e,t){let n;for(;e!=t&&e;e=e.nextSibling){let t=I.get(e);if(!t?.isWidget())return!1;t&&(n||(n=[])).push(t)}if(n){for(let e of n)if(e.overrideDOMText?.length)return!1}return!0}var Za=class{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}},Qa=class{constructor(e,t,n,r){this.typeOver=r,this.bounds=null,this.text=``,this.domChanged=t>-1;let{impreciseHead:i,impreciseAnchor:a}=e.docView,o=e.state.selection;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=$a(e.docView.tile,t,n,0))){let t=i||a?[]:io(e),n=new Ja(t,e);n.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=n.text,this.newSel=ao(t,this.bounds.from)}else{let t=e.observer.selectionRange,n=i&&i.node==t.focusNode&&i.offset==t.focusOffset||!xr(e.contentDOM,t.focusNode)?o.main.head:e.docView.posFromDOM(t.focusNode,t.focusOffset),r=a&&a.node==t.anchorNode&&a.offset==t.anchorOffset||!xr(e.contentDOM,t.anchorNode)?o.main.anchor:e.docView.posFromDOM(t.anchorNode,t.anchorOffset),s=e.viewport;if((k.ios||k.chrome)&&n!=r&&Math.min(n,r)<=o.main.from&&Math.max(n,r)>=o.main.to&&(s.from>0||s.to<e.state.doc.length)){let t=Math.min(n,r),i=Math.max(n,r),a=s.from-t,o=s.to-i;(a==0||a==1||t==0)&&(o==0||o==-1||i==e.state.doc.length)&&(n=0,r=e.state.doc.length)}if(e.inputState.composing>-1&&o.ranges.length>1)this.newSel=o.replaceRange(S.range(r,n));else if(e.lineWrapping&&r==n&&!(o.main.empty&&o.main.head==n)&&e.inputState.lastTouchTime>Date.now()-100){let t=e.coordsAtPos(n,-1),r=0;t&&(r=e.inputState.lastTouchY<=t.bottom?-1:1),this.newSel=S.create([S.cursor(n,r)])}else this.newSel=S.single(r,n)}}};function $a(e,t,n,r){if(e.isComposite()){let i=-1,a=-1,o=-1,s=-1;for(let c=0,l=r,u=r;c<e.children.length;c++){let r=e.children[c],d=l+r.length;if(l<t&&d>n)return $a(r,t,n,l);if(d>=t&&i==-1&&(i=c,a=l),l>n&&r.dom.parentNode==e.dom){o=c,s=u;break}u=d,l=d+r.breakAfter}return{from:a,to:s<0?r+e.length:s,startDOM:(i?e.children[i-1].dom.nextSibling:null)||e.dom.firstChild,endDOM:o<e.children.length&&o>=0?e.children[o].dom:null}}return e.isText()?{from:r,to:r+e.length,startDOM:e.dom,endDOM:e.dom.nextSibling}:null}function eo(e,t){let n,{newSel:r}=t,{state:i}=e,a=i.selection.main,o=e.inputState.lastKeyTime>Date.now()-100?e.inputState.lastKeyCode:-1;if(t.bounds){let{from:e,to:r}=t.bounds,s=a.from,c=null;(o===8||k.android&&t.text.length<r-e)&&(s=a.to,c=`end`);let l=i.doc.sliceString(e,r,qa),u,d;!a.empty&&a.from>=e&&a.to<=r&&(t.typeOver||l!=t.text)&&l.slice(0,a.from-e)==t.text.slice(0,a.from-e)&&l.slice(a.to-e)==t.text.slice(u=t.text.length-(l.length-(a.to-e)))?n={from:a.from,to:a.to,insert:b.of(t.text.slice(a.from-e,u).split(qa))}:(d=ro(l,t.text,s-e,c))&&(k.chrome&&o==13&&d.toB==d.from+2&&t.text.slice(d.from,d.toB)==`￿￿`&&d.toB--,n={from:e+d.from,to:e+d.toA,insert:b.of(t.text.slice(d.from,d.toB).split(qa))})}else r&&(!e.hasFocus&&i.facet(ji)||oo(r,a))&&(r=null);if(!n&&!r)return!1;if((k.mac||k.android)&&n&&n.from==n.to&&n.from==a.head-1&&/^\. ?$/.test(n.insert.toString())&&e.contentDOM.getAttribute(`autocorrect`)==`off`?(r&&n.insert.length==2&&(r=S.single(r.main.anchor-1,r.main.head-1)),n={from:n.from,to:n.to,insert:b.of([n.insert.toString().replace(`.`,` `)])}):i.doc.lineAt(a.from).to<a.to&&e.docView.lineHasWidget(a.to)&&e.inputState.insertingTextAt>Date.now()-50?n={from:a.from,to:a.to,insert:i.toText(e.inputState.insertingText)}:k.chrome&&n&&n.from==n.to&&n.from==a.head&&n.insert.toString()==`
 `&&e.lineWrapping&&(r&&(r=S.single(r.main.anchor-1,r.main.head-1)),n={from:a.from,to:a.to,insert:b.of([` `])}),n)return to(e,n,r,o);if(r&&!oo(r,a)){let t=!1,n=`select`;return e.inputState.lastSelectionTime>Date.now()-50&&(e.inputState.lastSelectionOrigin==`select`&&(t=!0),n=e.inputState.lastSelectionOrigin,n==`select.pointer`&&(r=Ha(i.facet(Bi).map(t=>t(e)),r))),e.dispatch({selection:r,scrollIntoView:t,userEvent:n}),!0}return!1}function to(e,t,n,r=-1){if(k.ios&&e.inputState.flushIOSKey(t))return!0;let i=e.state.selection.main;if(k.android&&(t.to==i.to&&(t.from==i.from||t.from==i.from-1&&e.state.sliceDoc(t.from,i.from)==` `)&&t.insert.length==1&&t.insert.lines==2&&Vr(e.contentDOM,`Enter`,13)||(t.from==i.from-1&&t.to==i.to&&t.insert.length==0||r==8&&t.insert.length<t.to-t.from&&t.to>i.head)&&Vr(e.contentDOM,`Backspace`,8)||t.from==i.from&&t.to==i.to+1&&t.insert.length==0&&Vr(e.contentDOM,`Delete`,46)))return!0;let a=t.insert.toString();e.inputState.composing>=0&&e.inputState.composing++;let o,s=()=>o||(o=no(e,t,n));return e.state.facet(bi).some(n=>n(e,t.from,t.to,a,s))||e.dispatch(s()),!0}function no(e,t,n){let r,i=e.state,a=i.selection.main,o=-1;if(t.from==t.to&&t.from<a.from||t.from>a.to){let n=t.from<a.from?-1:1,r=n<0?a.from:a.to,s=Va(i.facet(Bi).map(t=>t(e)),r,n);t.from==s&&(o=s)}if(o>-1)r={changes:t,selection:S.cursor(t.from+t.insert.length,-1)};else if(t.from>=a.from&&t.to<=a.to&&t.to-t.from>=(a.to-a.from)/3&&(!n||n.main.empty&&n.main.from==t.from+t.insert.length)&&e.inputState.composing<0){let n=a.from<t.from?i.sliceDoc(a.from,t.from):``,o=a.to>t.to?i.sliceDoc(t.to,a.to):``;r=i.replaceSelection(e.state.toText(n+t.insert.sliceString(0,void 0,e.state.lineBreak)+o))}else{let o=i.changes(t),s=n&&n.main.to<=o.newLength?n.main:void 0;if(i.selection.ranges.length>1&&(e.inputState.composing>=0||e.inputState.compositionPendingChange)&&t.to<=a.to+10&&t.to>=a.to-10){let c=e.state.sliceDoc(t.from,t.to),l,u=n&&wa(e,n.main.head);if(u){let e=t.insert.length-(t.to-t.from);l={from:u.from,to:u.to-e}}else l=e.state.doc.lineAt(a.head);let d=a.to-t.to;r=i.changeByRange(n=>{if(n.from==a.from&&n.to==a.to)return{changes:o,range:s||n.map(o)};let r=n.to-d,u=r-c.length;if(e.state.sliceDoc(u,r)!=c||r>=l.from&&u<=l.to)return{range:n};let f=i.changes({from:u,to:r,insert:t.insert}),p=n.to-a.to;return{changes:f,range:s?S.range(Math.max(0,s.anchor+p),Math.max(0,s.head+p)):n.map(f)}})}else r={changes:o,selection:s&&i.selection.replaceRange(s)}}let s=`input.type`;return(e.composing||e.inputState.compositionPendingChange&&e.inputState.compositionEndedAt>Date.now()-50)&&(e.inputState.compositionPendingChange=!1,s+=`.compose`,e.inputState.compositionFirstChange&&(s+=`.start`,e.inputState.compositionFirstChange=!1)),i.update(r,{userEvent:s,scrollIntoView:!0})}function ro(e,t,n,r){let i=Math.min(e.length,t.length),a=0;for(;a<i&&e.charCodeAt(a)==t.charCodeAt(a);)a++;if(a==i&&e.length==t.length)return null;let o=e.length,s=t.length;for(;o>0&&s>0&&e.charCodeAt(o-1)==t.charCodeAt(s-1);)o--,s--;if(r==`end`){let e=Math.max(0,a-Math.min(o,s));n-=o+e-a}if(o<a&&e.length<t.length){let e=n<=a&&n>=o?a-n:0;a-=e,s=a+(s-o),o=a}else if(s<a){let e=n<=a&&n>=s?a-n:0;a-=e,o=a+(o-s),s=a}return{from:a,toA:o,toB:s}}function io(e){let t=[];if(e.root.activeElement!=e.contentDOM)return t;let{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}=e.observer.selectionRange;return n&&(t.push(new Za(n,r)),(i!=n||a!=r)&&t.push(new Za(i,a))),t}function ao(e,t){if(e.length==0)return null;let n=e[0].pos,r=e.length==2?e[1].pos:n;return n<0||r<0?null:n==r?S.create([S.cursor(r+t,-1)]):S.single(n+t,r+t)}function oo(e,t){return t.head==e.main.head&&t.anchor==e.main.anchor}var so=class{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.touchActive=!1,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.lastIOSMomentumScroll=0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText=``,this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,k.safari&&e.contentDOM.addEventListener(`input`,()=>null),k.gecko&&Go(e.contentDOM.ownerDocument)}handleEvent(e){So(this.view,e)&&!this.ignoreDuringComposition(e)&&(e.type==`keydown`&&this.keydown(e)||(this.view.updateState==0?this.runHandlers(e.type,e):Promise.resolve().then(()=>this.runHandlers(e.type,e))))}runHandlers(e,t){let n=this.handlers[e];if(n){for(let e of n.observers)e(this.view,t);for(let e of n.handlers){if(t.defaultPrevented)break;if(e(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=uo(e),n=this.handlers,r=this.view.contentDOM;for(let e in t)if(e!=`scroll`){let i=!t[e].handlers.length,a=n[e];a&&i!=!a.handlers.length&&(r.removeEventListener(e,this.handleEvent),a=null),a||r.addEventListener(e,this.handleEvent,{passive:i})}for(let e in n)e!=`scroll`&&!t[e]&&r.removeEventListener(e,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&mo.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),k.android&&k.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;if(k.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&(fo.some(t=>t.keyCode==e.keyCode)&&!e.ctrlKey||po.indexOf(e.key)>-1&&e.ctrlKey)){let t={ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey,shiftKey:e.shiftKey};t.shiftKey&&k.ios&&!/^(off|none)$/.test(this.view.contentDOM.autocapitalize)&&co(this.view.win)&&(t.shiftKey=!1);let n=this.pendingIOSKey={key:e.key,keyCode:e.keyCode,mods:t};return setTimeout(()=>{this.pendingIOSKey==n&&this.flushIOSKey()},50),!0}return e.keyCode!=229&&this.view.observer.forceFlush(),!1}flushIOSKey(e){let t=this.pendingIOSKey;return!t||this.view.observer.pendingRecords().length||t.key==`Enter`&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,Vr(this.view.contentDOM,t.key,t.keyCode,t.mods))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:k.safari&&!k.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}};function co(e){return e.visualViewport?e.visualViewport.height*e.visualViewport.scale/e.document.documentElement.clientHeight<.85:!1}function lo(e,t){return(n,r)=>{try{return t.call(e,r,n)}catch(e){Ai(n.state,e)}}}function uo(e){let t=Object.create(null);function n(e){return t[e]||(t[e]={observers:[],handlers:[]})}for(let t of e){let e=t.spec,r=e&&e.plugin.domEventHandlers,i=e&&e.plugin.domEventObservers;if(r)for(let e in r){let i=r[e];i&&n(e).handlers.push(lo(t.value,i))}if(i)for(let e in i){let r=i[e];r&&n(e).observers.push(lo(t.value,r))}}for(let e in Co)n(e).handlers.push(Co[e]);for(let e in wo)n(e).observers.push(wo[e]);return t}var fo=[{key:`Backspace`,keyCode:8,inputType:`deleteContentBackward`},{key:`Enter`,keyCode:13,inputType:`insertParagraph`},{key:`Enter`,keyCode:13,inputType:`insertLineBreak`},{key:`Delete`,keyCode:46,inputType:`deleteContentForward`}],po=`dthko`,mo=[16,17,18,20,91,92,224,225],ho=6;function go(e){return Math.max(0,e)*.7+8}function _o(e,t){return Math.max(Math.abs(e.clientX-t.clientX),Math.abs(e.clientY-t.clientY))}var vo=class{constructor(e,t,n,r){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=r,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=Nr(e.contentDOM),this.atoms=e.state.facet(Bi).map(t=>t(e));let i=e.contentDOM.ownerDocument;i.addEventListener(`mousemove`,this.move=this.move.bind(this)),i.addEventListener(`mouseup`,this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(E.allowMultipleSelections)&&yo(e,t),this.dragging=xo(e,t)&&Po(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&_o(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,n=0,r=0,i=0,a=this.view.win.innerWidth,o=this.view.win.innerHeight;this.scrollParents.x&&({left:r,right:a}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:i,bottom:o}=this.scrollParents.y.getBoundingClientRect());let s=Wi(this.view);e.clientX-s.left<=r+ho?t=-go(r-e.clientX):e.clientX+s.right>=a-ho&&(t=go(e.clientX-a)),e.clientY-s.top<=i+ho?n=-go(i-e.clientY):e.clientY+s.bottom>=o-ho&&(n=go(e.clientY-o)),this.setScrollSpeed(t,n)}up(e){this.dragging??this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener(`mousemove`,this.move),e.removeEventListener(`mouseup`,this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,n=Ha(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:`select.pointer`}),this.mustSelect=!1}update(e){e.transactions.some(e=>e.isUserEvent(`input.type`))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}};function yo(e,t){let n=e.state.facet(hi);return n.length?n[0](t):k.mac?t.metaKey:t.ctrlKey}function bo(e,t){let n=e.state.facet(gi);return n.length?n[0](t):k.mac?!t.altKey:!t.ctrlKey}function xo(e,t){let{main:n}=e.state.selection;if(n.empty)return!1;let r=br(e.root);if(!r||r.rangeCount==0)return!0;let i=r.getRangeAt(0).getClientRects();for(let e=0;e<i.length;e++){let n=i[e];if(n.left<=t.clientX&&n.right>=t.clientX&&n.top<=t.clientY&&n.bottom>=t.clientY)return!0}return!1}function So(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let n=t.target,r;n!=e.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(r=I.get(n))&&r.isWidget()&&!r.isHidden&&r.widget.ignoreEvent(t))return!1;return!0}var Co=Object.create(null),wo=Object.create(null),To=k.ie&&k.ie_version<15||k.ios&&k.webkit_version<604;function Eo(e){let t=e.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement(`textarea`));n.style.cssText=`position: fixed; left: -10000px; top: 10px`,n.focus(),setTimeout(()=>{e.focus(),n.remove(),Oo(e,n.value)},50)}function Do(e,t,n){for(let r of e.facet(t))n=r(n,e);return n}function Oo(e,t){t=Do(e.state,Si,t);let{state:n}=e,r,i=1,a=n.toText(t),o=a.lines==n.selection.ranges.length;if(Bo!=null&&n.selection.ranges.every(e=>e.empty)&&Bo==a.toString()){let e=-1;r=n.changeByRange(r=>{let s=n.doc.lineAt(r.from);if(s.from==e)return{range:r};e=s.from;let c=n.toText((o?a.line(i++).text:t)+n.lineBreak);return{changes:{from:s.from,insert:c},range:S.cursor(r.from+c.length,-1)}})}else r=o?n.changeByRange(e=>{let t=a.line(i++);return{changes:{from:e.from,to:e.to,insert:t.text},range:S.cursor(e.from+t.length,-1)}}):n.replaceSelection(a);e.dispatch(r,{userEvent:`input.paste`,scrollIntoView:!0})}wo.scroll=e=>{let t=e.inputState;t.lastScrollTop=e.scrollDOM.scrollTop,t.lastScrollLeft=e.scrollDOM.scrollLeft,k.ios&&!t.touchActive&&(t.lastIOSMomentumScroll=Date.now())},wo.wheel=wo.mousewheel=e=>{e.inputState.lastWheelEvent=Date.now()},Co.keydown=(e,t)=>(e.inputState.setSelectionOrigin(`select`),t.keyCode==27&&e.inputState.tabFocusMode!=0&&(e.inputState.tabFocusMode=Date.now()+2e3),!1),wo.touchstart=(e,t)=>{let n=e.inputState,r=t.targetTouches[0];n.touchActive=!0,n.lastTouchTime=Date.now(),r&&(n.lastTouchX=r.clientX,n.lastTouchY=r.clientY),n.setSelectionOrigin(`select.pointer`)},wo.touchmove=e=>{e.inputState.setSelectionOrigin(`select.pointer`)},wo.touchend=(e,t)=>{e.inputState.touchActive=!1},Co.mousedown=(e,t)=>{if(e.observer.flush(),e.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let r of e.state.facet(_i))if(n=r(e,t),n)break;if(!n&&t.button==0&&(n=Fo(e,t)),n){let r=!e.hasFocus;e.inputState.startMouseSelection(new vo(e,t,n,r)),r&&e.observer.ignore(()=>{Rr(e.contentDOM);let t=e.root.activeElement;t&&!t.contains(e.contentDOM)&&t.blur()});let i=e.inputState.mouseSelection;if(i)return i.start(t),i.dragging===!1}else e.inputState.setSelectionOrigin(`select.pointer`);return!1};function ko(e,t,n,r){if(r==1)return S.cursor(t,n);if(r==2)return Pa(e.state,t,n);{let r=e.docView.lineAt(t,n),i=e.state.doc.lineAt(r?r.posAtEnd:t),a=r?r.posAtStart:i.from,o=r?r.posAtEnd:i.to;return o<e.state.doc.length&&o==i.to&&o++,S.undirectionalRange(a,o)}}var Ao=k.ie&&k.ie_version<=11,jo=null,Mo=0,No=0;function Po(e){if(!Ao)return e.detail;let t=jo,n=No;return jo=e,No=Date.now(),Mo=!t||n>Date.now()-400&&Math.abs(t.clientX-e.clientX)<2&&Math.abs(t.clientY-e.clientY)<2?(Mo+1)%3:1}function Fo(e,t){let n=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),r=Po(t),i=e.state.selection;return{update(e){e.docChanged&&(n.pos=e.changes.mapPos(n.pos),i=i.map(e.changes))},get(t,a,o){let s=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),c,l=ko(e,s.pos,s.assoc,r);if(n.pos!=s.pos&&!a){let t=ko(e,n.pos,n.assoc,r),i=Math.min(t.from,l.from),a=Math.max(t.to,l.to);l=i<l.from?S.range(i,a,l.assoc):S.range(a,i,l.assoc)}return a?i.replaceRange(i.main.extend(l.from,l.to,l.assoc)):o&&r==1&&i.ranges.length>1&&(c=Io(i,s.pos))?c:o?i.addRange(l):S.create([l])}}}function Io(e,t){for(let n=0;n<e.ranges.length;n++){let{from:r,to:i}=e.ranges[n];if(r<=t&&i>=t)return S.create(e.ranges.slice(0,n).concat(e.ranges.slice(n+1)),e.mainIndex==n?0:e.mainIndex-+(e.mainIndex>n))}return null}Co.dragstart=(e,t)=>{let{selection:{main:n}}=e.state;if(t.target.draggable){let r=e.docView.tile.nearest(t.target);if(r&&r.isWidget()){let e=r.posAtStart,t=e+r.length;(e>=n.to||t<=n.from)&&(n=S.undirectionalRange(e,t))}}let{inputState:r}=e;return r.mouseSelection&&(r.mouseSelection.dragging=!0),r.draggedContent=n,t.dataTransfer&&(t.dataTransfer.setData(`Text`,Do(e.state,Ci,e.state.sliceDoc(n.from,n.to))),t.dataTransfer.effectAllowed=`copyMove`),!1},Co.dragend=e=>(e.inputState.draggedContent=null,!1);function Lo(e,t,n,r){if(n=Do(e.state,Si,n),!n)return;let i=e.posAtCoords({x:t.clientX,y:t.clientY},!1),{draggedContent:a}=e.inputState,o=r&&a&&bo(e,t)?{from:a.from,to:a.to}:null,s={from:i,insert:n},c=e.state.changes(o?[o,s]:s);e.focus(),e.dispatch({changes:c,selection:{anchor:c.mapPos(i,-1),head:c.mapPos(i,1)},userEvent:o?`move.drop`:`input.drop`}),e.inputState.draggedContent=null}Co.drop=(e,t)=>{if(!t.dataTransfer)return!1;if(e.state.readOnly)return!0;let n=t.dataTransfer.files;if(n&&n.length){let r=Array(n.length),i=0,a=()=>{++i==n.length&&Lo(e,t,r.filter(e=>e!=null).join(e.state.lineBreak),!1)};for(let e=0;e<n.length;e++){let t=new FileReader;t.onerror=a,t.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(t.result)||(r[e]=t.result),a()},t.readAsText(n[e])}return!0}{let n=t.dataTransfer.getData(`Text`);if(n)return Lo(e,t,n,!0),!0}return!1},Co.paste=(e,t)=>{if(e.state.readOnly)return!0;e.observer.flush();let n=To?null:t.clipboardData;return n?(Oo(e,n.getData(`text/plain`)||n.getData(`text/uri-list`)),!0):(Eo(e),!1)};function Ro(e,t){let n=e.dom.parentNode;if(!n)return;let r=n.appendChild(document.createElement(`textarea`));r.style.cssText=`position: fixed; left: -10000px; top: 10px`,r.value=t,r.focus(),r.selectionEnd=t.length,r.selectionStart=0,setTimeout(()=>{r.remove(),e.focus()},50)}function zo(e){let t=[],n=[],r=!1;for(let r of e.selection.ranges)r.empty||(t.push(e.sliceDoc(r.from,r.to)),n.push(r));if(!t.length){let i=-1;for(let{from:r}of e.selection.ranges){let a=e.doc.lineAt(r);a.number>i&&(t.push(a.text),n.push({from:a.from,to:Math.min(e.doc.length,a.to+1)})),i=a.number}r=!0}return{text:Do(e,Ci,t.join(e.lineBreak)),ranges:n,linewise:r}}var Bo=null;Co.copy=Co.cut=(e,t)=>{if(!Sr(e.contentDOM,e.observer.selectionRange))return!1;let{text:n,ranges:r,linewise:i}=zo(e.state);if(!n&&!i)return!1;Bo=i?n:null,t.type==`cut`&&!e.state.readOnly&&e.dispatch({changes:r,scrollIntoView:!0,userEvent:`delete.cut`});let a=To?null:t.clipboardData;return a?(a.clearData(),a.setData(`text/plain`,n),!0):(Ro(e,n),!1)};var Vo=Yt.define();function Ho(e,t){let n=[];for(let r of e.facet(xi)){let i=r(e,t);i&&n.push(i)}return n.length?e.update({effects:n,annotations:Vo.of(!0)}):null}function Uo(e){setTimeout(()=>{let t=e.hasFocus;if(t!=e.inputState.notifiedFocused){let n=Ho(e.state,t);n?e.dispatch(n):e.update([])}},10)}wo.focus=e=>{e.inputState.lastFocusTime=Date.now(),!e.scrollDOM.scrollTop&&(e.inputState.lastScrollTop||e.inputState.lastScrollLeft)&&(e.scrollDOM.scrollTop=e.inputState.lastScrollTop,e.scrollDOM.scrollLeft=e.inputState.lastScrollLeft),Uo(e)},wo.blur=e=>{e.observer.clearSelectionRange(),Uo(e)},wo.compositionstart=wo.compositionupdate=(e,t)=>{if(!e.observer.editContext&&(e.inputState.compositionFirstChange??(e.inputState.compositionFirstChange=!0),e.inputState.composing<0)){let{main:t}=e.state.selection;!t.empty&&e.lineBlockAt(t.from).from!=e.lineBlockAt(t.to).from&&!e.state.readOnly&&e.dispatch({changes:e.state.selection.ranges.filter(e=>!e.empty).map(e=>({from:e.from,to:e.to})),userEvent:`input`}),e.inputState.composing=0}},wo.compositionend=e=>{e.observer.editContext||(e.inputState.composing=-1,e.inputState.compositionEndedAt=Date.now(),e.inputState.compositionPendingKey=!0,e.inputState.compositionPendingChange=e.observer.pendingRecords().length>0,e.inputState.compositionFirstChange=null,k.chrome&&k.android?e.observer.flushSoon():e.inputState.compositionPendingChange?Promise.resolve().then(()=>e.observer.flush()):setTimeout(()=>{e.inputState.composing<0&&e.docView.hasComposition&&e.update([])},50))},wo.contextmenu=e=>{e.inputState.lastContextMenu=Date.now()},Co.beforeinput=(e,t)=>{if((t.inputType==`insertText`||t.inputType==`insertCompositionText`)&&(e.inputState.insertingText=t.data,e.inputState.insertingTextAt=Date.now()),t.inputType==`insertReplacementText`&&e.observer.editContext){let n=t.dataTransfer?.getData(`text/plain`),r=t.getTargetRanges();if(n&&r.length){let t=r[0];return to(e,{from:e.posAtDOM(t.startContainer,t.startOffset),to:e.posAtDOM(t.endContainer,t.endOffset),insert:e.state.toText(n)},null),!0}}let n;if(k.chrome&&k.android&&(n=fo.find(e=>e.inputType==t.inputType))&&(e.observer.delayAndroidKey(n.key,n.keyCode),n.key==`Backspace`||n.key==`Delete`)){let t=window.visualViewport?.height||0;setTimeout(()=>{(window.visualViewport?.height||0)>t+10&&e.hasFocus&&(e.contentDOM.blur(),e.focus())},100)}return k.ios&&t.inputType==`deleteContentForward`&&e.observer.flushSoon(),k.safari&&t.inputType==`insertText`&&e.inputState.composing>=0&&setTimeout(()=>wo.compositionend(e,t),20),!1};var Wo=new Set;function Go(e){Wo.has(e)||(Wo.add(e),e.addEventListener(`copy`,()=>{}),e.addEventListener(`cut`,()=>{}))}var Ko=[`pre-wrap`,`normal`,`pre-line`,`break-spaces`],qo=!1;function Jo(){qo=!1}var Yo=class{constructor(e){this.lineWrapping=e,this.doc=b.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return Ko.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];r<0?n++:this.heightSamples[Math.floor(r*10)]||(t=!0,this.heightSamples[Math.floor(r*10)]=!0)}return t}refresh(e,t,n,r,i,a){let o=Ko.indexOf(e)>-1,s=Math.abs(t-this.lineHeight)>.3||this.lineWrapping!=o;if(this.lineWrapping=o,this.lineHeight=t,this.charWidth=n,this.textHeight=r,this.lineLength=i,s){this.heightSamples={};for(let e=0;e<a.length;e++){let t=a[e];t<0?e++:this.heightSamples[Math.floor(t*10)]=!0}}return s}},Xo=class{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}},Zo=class e{constructor(e,t,n,r,i){this.from=e,this.length=t,this.top=n,this.height=r,this._content=i}get type(){return typeof this._content==`number`?A.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof mr?this._content.widget:null}get widgetLineBreaks(){return typeof this._content==`number`?this._content:0}join(t){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t]);return new e(this.from,this.length+t.length,this.top,this.height+t.height,n)}},L=(function(e){return e[e.ByPos=0]=`ByPos`,e[e.ByHeight=1]=`ByHeight`,e[e.ByPosNoHeight=2]=`ByPosNoHeight`,e})(L||(L={})),Qo=.001,$o=class e{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>Qo&&(qo=!0),this.height=e)}replace(t,n,r){return e.of(r)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,r){let i=this,a=n.doc;for(let o=r.length-1;o>=0;o--){let{fromA:s,toA:c,fromB:l,toB:u}=r[o],d=i.lineAt(s,L.ByPosNoHeight,n.setDoc(t),0,0),f=d.to>=c?d:i.lineAt(c,L.ByPosNoHeight,n,0,0);for(u+=f.to-c,c=f.to;o>0&&d.from<=r[o-1].toA;)s=r[o-1].fromA,l=r[o-1].fromB,o--,s<d.from&&(d=i.lineAt(s,L.ByPosNoHeight,n,0,0));l+=d.from-s,s=d.from;let p=cs.build(n.setDoc(a),e,l,u);i=es(i,i.replace(s,c,p))}return i.updateHeight(n,0)}static empty(){return new rs(0,0,0)}static of(t){if(t.length==1)return t[0];let n=0,r=t.length,i=0,a=0;for(;;)if(n==r){if(i>a*2){let e=t[n-1];e.break?t.splice(--n,1,e.left,null,e.right):t.splice(--n,1,e.left,e.right),r+=1+e.break,i-=e.size}else if(a>i*2){let e=t[r];e.break?t.splice(r,1,e.left,null,e.right):t.splice(r,1,e.left,e.right),r+=2+e.break,a-=e.size}else break}else if(i<a){let e=t[n++];e&&(i+=e.size)}else{let e=t[--r];e&&(a+=e.size)}let o=!1;return t[n-1]==null?(o=!0,n--):t[n]??(o=!0,r++),new as(e.of(t.slice(0,n)),o,e.of(t.slice(r)))}};function es(e,t){return e==t?e:(e.constructor!=t.constructor&&(qo=!0),t)}$o.prototype.size=1;var ts=j.replace({}),ns=class extends $o{constructor(e,t,n){super(e,t),this.deco=n,this.spaceAbove=0}mainBlock(e,t){return new Zo(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,t,n,r){return this.spaceAbove&&e<n+this.spaceAbove?new Zo(r,0,n,this.spaceAbove,ts):this.mainBlock(n,r)}lineAt(e,t,n,r,i){let a=this.mainBlock(r,i);return this.spaceAbove?this.blockAt(0,n,r,i).join(a):a}forEachLine(e,t,n,r,i,a){e<=i+this.length&&t>=i&&a(this.lineAt(0,L.ByPos,n,r,i))}setMeasuredHeight(e){let t=e.heights[e.index++];t<0?(this.spaceAbove=-t,t=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(t)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more&&this.setMeasuredHeight(r),this.outdated=!1,this}toString(){return`block(${this.length})`}},rs=class e extends ns{constructor(e,t,n){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=n}mainBlock(e,t){return new Zo(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(t,n,r){let i=r[0];return r.length==1&&(i instanceof e||i instanceof is&&i.flags&4)&&Math.abs(this.length-i.length)<10?(i instanceof is?i=new e(i.length,this.height,this.spaceAbove):i.height=this.height,this.outdated||(i.outdated=!1),i):$o.of(r)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more?this.setMeasuredHeight(r):(n||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:``}${this.widgetHeight?`:`+this.widgetHeight:``})`}},is=class e extends $o{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,r=e.doc.lineAt(t+this.length).number,i=r-n+1,a,o=0;if(e.lineWrapping){let t=Math.min(this.height,e.lineHeight*i);a=t/i,this.length>i+1&&(o=(this.height-t)/(this.length-i-1))}else a=this.height/i;return{firstLine:n,lastLine:r,perLine:a,perChar:o}}blockAt(e,t,n,r){let{firstLine:i,lastLine:a,perLine:o,perChar:s}=this.heightMetrics(t,r);if(t.lineWrapping){let i=r+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),a=t.doc.lineAt(i),c=o+a.length*s,l=Math.max(n,e-c/2);return new Zo(a.from,a.length,l,c,0)}{let r=Math.max(0,Math.min(a-i,Math.floor((e-n)/o))),{from:s,length:c}=t.doc.line(i+r);return new Zo(s,c,n+o*r,o,0)}}lineAt(e,t,n,r,i){if(t==L.ByHeight)return this.blockAt(e,n,r,i);if(t==L.ByPosNoHeight){let{from:t,to:r}=n.doc.lineAt(e);return new Zo(t,r-t,0,0,0)}let{firstLine:a,perLine:o,perChar:s}=this.heightMetrics(n,i),c=n.doc.lineAt(e),l=o+c.length*s,u=c.number-a,d=r+o*u+s*(c.from-i-u);return new Zo(c.from,c.length,Math.max(r,Math.min(d,r+this.height-l)),l,0)}forEachLine(e,t,n,r,i,a){e=Math.max(e,i),t=Math.min(t,i+this.length);let{firstLine:o,perLine:s,perChar:c}=this.heightMetrics(n,i);for(let l=e,u=r;l<=t;){let t=n.doc.lineAt(l);if(l==e){let n=t.number-o;u+=s*n+c*(e-i-n)}let r=s+c*t.length;a(new Zo(t.from,t.length,u,r,0)),u+=r,l=t.to+1}}replace(t,n,r){let i=this.length-n;if(i>0){let t=r[r.length-1];t instanceof e?r[r.length-1]=new e(t.length+i):r.push(null,new e(i-1))}if(t>0){let n=r[0];n instanceof e?r[0]=new e(t+n.length):r.unshift(new e(t-1),null)}return $o.of(r)}decomposeLeft(t,n){n.push(new e(t-1),null)}decomposeRight(t,n){n.push(null,new e(this.length-t-1))}updateHeight(t,n=0,r=!1,i){let a=n+this.length;if(i&&i.from<=n+this.length&&i.more){let r=[],o=Math.max(n,i.from),s=-1;for(i.from>n&&r.push(new e(i.from-n-1).updateHeight(t,n));o<=a&&i.more;){let e=t.doc.lineAt(o).length;r.length&&r.push(null);let n=i.heights[i.index++],a=0;n<0&&(a=-n,n=i.heights[i.index++]),s==-1?s=n:Math.abs(n-s)>=Qo&&(s=-2);let c=new rs(e,n,a);c.outdated=!1,r.push(c),o+=e+1}o<=a&&r.push(null,new e(a-o).updateHeight(t,o));let c=$o.of(r);return(s<0||Math.abs(c.height-this.height)>=Qo||Math.abs(s-this.heightMetrics(t,n).perLine)>=Qo)&&(qo=!0),es(this,c)}return(r||this.outdated)&&(this.setHeight(t.heightForGap(n,n+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}},as=class extends $o{constructor(e,t,n){super(e.length+ +!!t+n.length,e.height+n.height,+!!t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,r){let i=n+this.left.height;return e<i?this.left.blockAt(e,t,n,r):this.right.blockAt(e,t,i,r+this.left.length+this.break)}lineAt(e,t,n,r,i){let a=r+this.left.height,o=i+this.left.length+this.break,s=t==L.ByHeight?e<a:e<o,c=s?this.left.lineAt(e,t,n,r,i):this.right.lineAt(e,t,n,a,o);if(this.break||(s?c.to<o:c.from>o))return c;let l=t==L.ByPosNoHeight?L.ByPosNoHeight:L.ByPos;return s?c.join(this.right.lineAt(o,l,n,a,o)):this.left.lineAt(o,l,n,r,i).join(c)}forEachLine(e,t,n,r,i,a){let o=r+this.left.height,s=i+this.left.length+this.break;if(this.break)e<s&&this.left.forEachLine(e,t,n,r,i,a),t>=s&&this.right.forEachLine(e,t,n,o,s,a);else{let c=this.lineAt(s,L.ByPos,n,r,i);e<c.from&&this.left.forEachLine(e,Math.min(t,c.from-1),n,r,i,a),c.to>=e&&c.from<=t&&a(c),t>c.to&&this.right.forEachLine(Math.max(e,c.to+1),t,n,o,s,a)}}replace(e,t,n){let r=this.left.length+this.break;if(t<r)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-r,t-r,n));let i=[];e>0&&this.decomposeLeft(e,i);let a=i.length;for(let e of n)i.push(e);if(e>0&&os(i,a-1),t<this.length){let e=i.length;this.decomposeRight(t,i),os(i,e)}return $o.of(i)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,r=n+this.break;if(e>=r)return this.right.decomposeRight(e-r,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<r&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?$o.of(this.break?[e,null,t]:[e,t]):(this.left=es(this.left,e),this.right=es(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,r){let{left:i,right:a}=this,o=t+i.length+this.break,s=null;return r&&r.from<=t+i.length&&r.more?s=i=i.updateHeight(e,t,n,r):i.updateHeight(e,t,n),r&&r.from<=o+a.length&&r.more?s=a=a.updateHeight(e,o,n,r):a.updateHeight(e,o,n),s?this.balanced(i,a):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?` `:`-`)+this.right}};function os(e,t){let n,r;e[t]==null&&(n=e[t-1])instanceof is&&(r=e[t+1])instanceof is&&e.splice(t-1,3,new is(n.length+1+r.length))}var ss=5,cs=class e{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let e=Math.min(t,this.lineEnd),n=this.nodes[this.nodes.length-1];n instanceof rs?n.length+=e-this.pos:(e>this.pos||!this.isCovered)&&this.nodes.push(new rs(e-this.pos,-1,0)),this.writtenTo=e,t>e&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let r=n.widget?n.widget.estimatedHeight:0,i=n.widget?n.widget.lineBreaks:0;r<0&&(r=this.oracle.lineHeight);let a=t-e;n.block?this.addBlock(new ns(a,r,n)):(a||i||r>=ss)&&this.addLineDeco(r,i,a)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new rs(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,t){let n=new is(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof rs)return e;let t=new rs(0,-1,0);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos+=e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let r=this.ensureLine();r.length+=n,r.collapsed+=n,r.widgetHeight=Math.max(r.widgetHeight,e),r.breaks+=t,this.writtenTo=this.pos+=n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof rs)&&!this.isCovered?this.nodes.push(new rs(0,-1,0)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let e of this.nodes)e instanceof rs&&e.updateHeight(this.oracle,n),n+=e?e.length:1;return this.nodes}static build(t,n,r,i){let a=new e(r,t);return D.spans(n,r,i,a,0),a.finish(r)}};function ls(e,t,n){let r=new us;return D.compare(e,t,n,r,0),r.changes}var us=class{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,r){(e<t||n&&n.heightRelevant||r&&r.heightRelevant)&&_r(e,t,this.changes,5)}};function ds(e,t){let n=e.getBoundingClientRect(),r=e.ownerDocument,i=r.defaultView||window,a=Math.max(0,n.left),o=Math.min(i.innerWidth,n.right),s=Math.max(0,n.top),c=Math.min(i.innerHeight,n.bottom);for(let t=e.parentNode;t&&t!=r.body;)if(M(t)){let n=window.getComputedStyle(t);if((t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth)&&n.overflow!=`visible`){let n=t.getBoundingClientRect();a=Math.max(a,n.left),o=Math.min(o,n.right),s=Math.max(s,n.top),c=Math.min(t==e.parentNode?i.innerHeight:c,n.bottom)}t=n.position==`absolute`||n.position==`fixed`?t.offsetParent:t.parentNode}else if(t.nodeType==11)t=t.host;else break;return{left:a-n.left,right:Math.max(a,o)-n.left,top:s-(n.top+t),bottom:Math.max(s,c)-(n.top+t)}}function fs(e){let t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView||window;return t.left<n.innerWidth&&t.right>0&&t.top<n.innerHeight&&t.bottom>0}function ps(e,t){let n=e.getBoundingClientRect();return{left:0,right:n.right-n.left,top:t,bottom:n.bottom-(n.top+t)}}var ms=class{constructor(e,t,n,r){this.from=e,this.to=t,this.size=n,this.displaySize=r}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.size!=i.size)return!1}return!0}draw(e,t){return j.replace({widget:new hs(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}},hs=class extends dr{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement(`div`);return this.vertical?e.style.height=this.size+`px`:(e.style.width=this.size+`px`,e.style.height=`2px`,e.style.display=`inline-block`),e}get estimatedHeight(){return this.vertical?this.size:-1}},gs=class{constructor(e,t){this.view=e,this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=Ss,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=N.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let n=t.facet(Ii).some(e=>typeof e!=`function`&&e.class==`cm-lineWrapping`);this.heightOracle=new Yo(n),this.stateDeco=Cs(t),this.heightMap=$o.empty().applyChanges(this.stateDeco,b.empty,this.heightOracle.setDoc(t.doc),[new Ki(0,0,0,t.doc.length)]);for(let e=0;e<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());e++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=j.set(this.lineGaps.map(e=>e.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let r=n?t.head:t.anchor;if(!e.some(({from:e,to:t})=>r>=e&&r<=t)){let{from:t,to:n}=this.lineBlockAt(r);e.push(new _s(t,n))}}return this.viewports=e.sort((e,t)=>e.from-t.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?Ss:new ws(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Ts(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=Cs(this.state);let r=e.changedRanges,i=Ki.extendWithRanges(r,ls(n,this.stateDeco,e?e.changes:ht.empty(this.state.doc.length))),a=this.heightMap.height,o=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);Jo(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),i),(this.heightMap.height!=a||qo)&&(e.flags|=2),o?(this.scrollAnchorPos=e.changes.mapPos(o.from,-1),this.scrollAnchorHeight=o.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=a);let s=i.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<s.from||t.range.head>s.to)||!this.viewportIsAppropriate(s))&&(s=this.getViewport(0,t));let c=s.from!=this.viewport.from||s.to!=this.viewport.to;this.viewport=s,e.flags|=this.updateForViewport(),(c||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(Ti)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,t=e.contentDOM,n=window.getComputedStyle(t),r=this.heightOracle,i=n.whiteSpace;this.defaultTextDirection=n.direction==`rtl`?N.RTL:N.LTR;let a=this.heightOracle.mustRefreshForWrapping(i)||this.mustMeasureContent===`refresh`,o=t.getBoundingClientRect(),s=a||this.mustMeasureContent||this.contentDOMHeight!=o.height;this.contentDOMHeight=o.height,this.mustMeasureContent=!1;let c=0,l=0;if(o.width&&o.height){let{scaleX:e,scaleY:n}=jr(t,o);(e>.005&&Math.abs(this.scaleX-e)>.005||n>.005&&Math.abs(this.scaleY-n)>.005)&&(this.scaleX=e,this.scaleY=n,c|=16,a=s=!0)}let u=(parseInt(n.paddingTop)||0)*this.scaleY,d=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=u||this.paddingBottom!=d)&&(this.paddingTop=u,this.paddingBottom=d,c|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(r.lineWrapping&&(s=!0),this.editorWidth=e.scrollDOM.clientWidth,c|=16);let f=Nr(this.view.contentDOM,!1).y;f!=this.scrollParent&&(this.scrollParent=f,this.scrollAnchorHeight=-1,this.scrollOffset=0);let p=this.getScrollOffset();this.scrollOffset!=p&&(this.scrollAnchorHeight=-1,this.scrollOffset=p),this.scrolledToBottom=Wr(this.scrollParent||e.win);let m=(this.printing?ps:ds)(t,this.paddingTop),h=m.top-this.pixelViewport.top,g=m.bottom-this.pixelViewport.bottom;this.pixelViewport=m;let _=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(_!=this.inView&&(this.inView=_,_&&(s=!0)),!this.inView&&!this.scrollTarget&&!fs(e.dom))return 0;let v=o.width;if((this.contentDOMWidth!=v||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=o.width,this.editorHeight=e.scrollDOM.clientHeight,c|=16),s){let t=e.docView.measureVisibleLineHeights(this.viewport);if(r.mustRefreshForHeights(t)&&(a=!0),a||r.lineWrapping&&Math.abs(v-this.contentDOMWidth)>r.charWidth){let{lineHeight:n,charWidth:o,textHeight:s}=e.docView.measureTextSize();a=n>0&&r.refresh(i,n,o,s,Math.max(5,v/o),t),a&&(e.docView.minWidth=0,c|=16)}h>0&&g>0?l=Math.max(h,g):h<0&&g<0&&(l=Math.min(h,g)),Jo();for(let n of this.viewports){let i=n.from==this.viewport.from?t:e.docView.measureVisibleLineHeights(n);this.heightMap=(a?$o.empty().applyChanges(this.stateDeco,b.empty,this.heightOracle,[new Ki(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(r,0,a,new Xo(n.from,i))}qo&&(c|=2)}let y=!this.viewportIsAppropriate(this.viewport,l)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return y&&(c&2&&(c|=this.updateScaler()),this.viewport=this.getViewport(l,this.scrollTarget),c|=this.updateForViewport()),(c&2||y)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(a?[]:this.lineGaps,e)),c|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),c}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),r=this.heightMap,i=this.heightOracle,{visibleTop:a,visibleBottom:o}=this,s=new _s(r.lineAt(a-n*1e3,L.ByHeight,i,0,0).from,r.lineAt(o+(1-n)*1e3,L.ByHeight,i,0,0).to);if(t){let{head:e}=t.range;if(e<s.from||e>s.to){let n=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),a=r.lineAt(e,L.ByPos,i,0,0),o;o=t.y==`center`?(a.top+a.bottom)/2-n/2:t.y==`start`||t.y==`nearest`&&e<s.from?a.top:a.bottom-n,s=new _s(r.lineAt(o-500,L.ByHeight,i,0,0).from,r.lineAt(o+n+500,L.ByHeight,i,0,0).to)}}return s}mapViewport(e,t){let n=t.mapPos(e.from,-1),r=t.mapPos(e.to,1);return new _s(this.heightMap.lineAt(n,L.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(r,L.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:r}=this.heightMap.lineAt(e,L.ByPos,this.heightOracle,0,0),{bottom:i}=this.heightMap.lineAt(t,L.ByPos,this.heightOracle,0,0),{visibleTop:a,visibleBottom:o}=this;return(e==0||r<=a-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||i>=o+Math.max(10,Math.min(n,250)))&&r>a-2e3&&i<o+2e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let r of e)t.touchesRange(r.from,r.to)||n.push(new ms(t.mapPos(r.from),t.mapPos(r.to),r.size,r.displaySize));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,r=n?1e4:2e3,i=r>>1,a=r<<1;if(this.defaultTextDirection!=N.LTR&&!n)return[];let o=[],s=(r,a,c,l)=>{if(a-r<i)return;let u=this.state.selection.main,d=[u.from];u.empty||d.push(u.to);for(let e of d)if(e>r&&e<a){s(r,e-10,c,l),s(e+10,a,c,l);return}let f=xs(e,e=>e.from>=c.from&&e.to<=c.to&&Math.abs(e.from-r)<i&&Math.abs(e.to-a)<i&&!d.some(t=>e.from<t&&e.to>t));if(!f){if(a<c.to&&t&&n&&t.visibleRanges.some(e=>e.from<=a&&e.to>=a)){let e=t.moveToLineBoundary(S.cursor(a),!1,!0).head;e>r&&(a=e)}let e=this.gapSize(c,r,a,l);f=new ms(r,a,e,n||e<2e6?e:2e6)}o.push(f)},c=t=>{if(t.length<a||t.type!=A.Text)return;let i=vs(t.from,t.to,this.stateDeco);if(i.total<a)return;let o=this.scrollTarget?this.scrollTarget.range.head:null,c,l;if(n){let e=r/this.heightOracle.lineLength*this.heightOracle.lineHeight,n,a;if(o!=null){let r=bs(i,o),s=((this.visibleBottom-this.visibleTop)/2+e)/t.height;n=r-s,a=r+s}else n=(this.visibleTop-t.top-e)/t.height,a=(this.visibleBottom-t.top+e)/t.height;c=ys(i,n),l=ys(i,a)}else{let n=i.total*this.heightOracle.charWidth,a=r*this.heightOracle.charWidth,s=0;if(n>2e6)for(let n of e)n.from>=t.from&&n.from<t.to&&n.size!=n.displaySize&&n.from*this.heightOracle.charWidth+s<this.pixelViewport.left&&(s=n.size-n.displaySize);let u=this.pixelViewport.left+s,d=this.pixelViewport.right+s,f,p;if(o!=null){let e=bs(i,o),t=((d-u)/2+a)/n;f=e-t,p=e+t}else f=(u-a)/n,p=(d+a)/n;c=ys(i,f),l=ys(i,p)}c>t.from&&s(t.from,c,t,i),l<t.to&&s(l,t.to,t,i)};for(let e of this.viewportLines)Array.isArray(e.type)?e.type.forEach(c):c(e);return o}gapSize(e,t,n,r){let i=bs(r,n)-bs(r,t);return this.heightOracle.lineWrapping?e.height*i:r.total*this.heightOracle.charWidth*i}updateLineGaps(e){ms.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=j.set(e.map(e=>e.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let n=[];D.spans(t,this.viewport.from,this.viewport.to,{span(e,t){n.push({from:e,to:t})},point(){}},20);let r=0;if(n.length!=this.visibleRanges.length)r=12;else for(let t=0;t<n.length&&!(r&8);t++){let i=this.visibleRanges[t],a=n[t];(i.from!=a.from||i.to!=a.to)&&(r|=4,e&&e.mapPos(i.from,-1)==a.from&&e.mapPos(i.to,1)==a.to||(r|=8))}return this.visibleRanges=n,r}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||Ts(this.heightMap.lineAt(e,L.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||Ts(this.heightMap.lineAt(this.scaler.fromDOM(e),L.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop*this.scaleY:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return Ts(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}},_s=class{constructor(e,t){this.from=e,this.to=t}};function vs(e,t,n){let r=[],i=e,a=0;return D.spans(n,e,t,{span(){},point(e,t){e>i&&(r.push({from:i,to:e}),a+=e-i),i=t}},20),i<t&&(r.push({from:i,to:t}),a+=t-i),{total:a,ranges:r}}function ys({total:e,ranges:t},n){if(n<=0)return t[0].from;if(n>=1)return t[t.length-1].to;let r=Math.floor(e*n);for(let e=0;;e++){let{from:n,to:i}=t[e],a=i-n;if(r<=a)return n+r;r-=a}}function bs(e,t){let n=0;for(let{from:r,to:i}of e.ranges){if(t<=i){n+=t-r;break}n+=i-r}return n/e.total}function xs(e,t){for(let n of e)if(t(n))return n}var Ss={toDOM(e){return e},fromDOM(e){return e},scale:1,eq(e){return e==this}};function Cs(e){let t=e.facet(Li).filter(e=>typeof e!=`function`),n=e.facet(zi).filter(e=>typeof e!=`function`);return n.length&&t.push(D.join(n)),t}var ws=class e{constructor(e,t,n){let r=0,i=0,a=0;this.viewports=n.map(({from:n,to:i})=>{let a=t.lineAt(n,L.ByPos,e,0,0).top,o=t.lineAt(i,L.ByPos,e,0,0).bottom;return r+=o-a,{from:n,to:i,top:a,bottom:o,domTop:0,domBottom:0}}),this.scale=(7e6-r)/(t.height-r);for(let e of this.viewports)e.domTop=a+(e.top-i)*this.scale,a=e.domBottom=e.domTop+(e.bottom-e.top),i=e.bottom}toDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.top)return r+(e-n)*this.scale;if(e<=i.bottom)return i.domTop+(e-i.top);n=i.bottom,r=i.domBottom}}fromDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.domTop)return n+(e-r)/this.scale;if(e<=i.domBottom)return i.top+(e-i.domTop);n=i.bottom,r=i.domBottom}}eq(t){return t instanceof e&&this.scale==t.scale&&this.viewports.length==t.viewports.length&&this.viewports.every((e,n)=>e.from==t.viewports[n].from&&e.to==t.viewports[n].to)}};function Ts(e,t){if(t.scale==1)return e;let n=t.toDOM(e.top),r=t.toDOM(e.bottom);return new Zo(e.from,e.length,n,r-n,Array.isArray(e._content)?e._content.map(e=>Ts(e,t)):e._content)}var Es=C.define({combine:e=>e.join(` `)}),Ds=C.define({combine:e=>e.indexOf(!0)>-1}),Os=Ln.newName(),ks=Ln.newName(),As=Ln.newName(),js={"&light":`.`+ks,"&dark":`.`+As};function Ms(e,t,n){return new Ln(t,{finish(t){return/&/.test(t)?t.replace(/&\w*/,t=>{if(t==`&`)return e;if(!n||!n[t])throw RangeError(`Unsupported selector: ${t}`);return n[t]}):e+` `+t}})}var Ns=Ms(`.`+Os,{"&":{position:`relative !important`,boxSizing:`border-box`,"&.cm-focused":{outline:`1px dotted #212121`},display:`flex !important`,flexDirection:`column`},".cm-scroller":{display:`flex !important`,alignItems:`flex-start !important`,fontFamily:`monospace`,lineHeight:1.4,height:`100%`,overflowX:`auto`,position:`relative`,zIndex:0,overflowAnchor:`none`},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:`block`,whiteSpace:`pre`,wordWrap:`normal`,boxSizing:`border-box`,minHeight:`100%`,padding:`4px 0`,outline:`none`,"&[contenteditable=true]":{WebkitUserModify:`read-write-plaintext-only`}},".cm-lineWrapping":{whiteSpace_fallback:`pre-wrap`,whiteSpace:`break-spaces`,wordBreak:`break-word`,overflowWrap:`anywhere`,flexShrink:1},"&light .cm-content":{caretColor:`black`},"&dark .cm-content":{caretColor:`white`},".cm-line":{display:`block`,padding:`0 2px 0 6px`},".cm-layer":{userSelect:`none`,position:`absolute`,left:0,top:0,contain:`size style`,"& > *":{position:`absolute`}},"&light .cm-selectionBackground":{background:`#d9d9d9`},"&dark .cm-selectionBackground":{background:`#222`},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#d7d4f0`},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#233`},".cm-cursorLayer":{pointerEvents:`none`},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:`steps(1) cm-blink 1.2s infinite`},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:`1.2px solid black`,marginLeft:`-0.6px`,pointerEvents:`none`},".cm-cursor":{display:`none`},"&dark .cm-cursor":{borderLeftColor:`#ddd`},".cm-selectionHandle":{backgroundColor:`currentColor`,width:`1.5px`},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:`""`,backgroundColor:`inherit`,borderRadius:`50%`,width:`8px`,height:`8px`,position:`absolute`,left:`-3.25px`},".cm-selectionHandle-start::before":{top:`-8px`},".cm-selectionHandle-end::before":{bottom:`-8px`},".cm-dropCursor":{position:`absolute`},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:`block`},".cm-iso":{unicodeBidi:`isolate`},".cm-announced":{position:`fixed`,top:`-10000px`},"@media print":{".cm-announced":{display:`none`}},"&light .cm-activeLine":{backgroundColor:`#cceeff44`},"&dark .cm-activeLine":{backgroundColor:`#99eeff33`},"&light .cm-specialChar":{color:`red`},"&dark .cm-specialChar":{color:`#f78`},".cm-gutters":{flexShrink:0,display:`flex`,height:`100%`,boxSizing:`border-box`,zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:`#f5f5f5`,color:`#6c6c6c`,border:`0px solid #ddd`,"&.cm-gutters-before":{borderRightWidth:`1px`},"&.cm-gutters-after":{borderLeftWidth:`1px`}},"&dark .cm-gutters":{backgroundColor:`#333338`,color:`#ccc`},".cm-gutter":{display:`flex !important`,flexDirection:`column`,flexShrink:0,boxSizing:`border-box`,minHeight:`100%`,overflow:`hidden`},".cm-gutterElement":{boxSizing:`border-box`},".cm-lineNumbers .cm-gutterElement":{padding:`0 3px 0 5px`,minWidth:`20px`,textAlign:`right`,whiteSpace:`nowrap`},"&light .cm-activeLineGutter":{backgroundColor:`#e2f2ff`},"&dark .cm-activeLineGutter":{backgroundColor:`#222227`},".cm-panels":{boxSizing:`border-box`,position:`sticky`,left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:`#f5f5f5`,color:`black`},".cm-panels-top":{top:`0`},".cm-panels-bottom":{bottom:`0`},"&light .cm-panels-top":{borderBottom:`1px solid #ddd`},"&light .cm-panels-bottom":{borderTop:`1px solid #ddd`},"&dark .cm-panels":{backgroundColor:`#333338`,color:`white`},".cm-dialog":{padding:`2px 19px 4px 6px`,position:`relative`,"& label":{fontSize:`80%`}},".cm-dialog-close":{position:`absolute`,top:`3px`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,fontSize:`14px`,padding:`0`},".cm-tab":{display:`inline-block`,overflow:`hidden`,verticalAlign:`bottom`},".cm-widgetBuffer":{verticalAlign:`baseline`,height:`1em`,width:0,display:`inline`},".cm-placeholder":{color:`#888`,display:`inline-block`,verticalAlign:`top`,userSelect:`none`},".cm-highlightSpace":{background:`radial-gradient(circle at 50% 55%, #aaa 20%, transparent 0) no-repeat`,backgroundSize:`.4em`,backgroundPosition:`calc(min(50%, 0px)) center`},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:`auto 100%`,backgroundPosition:`right 90%`,backgroundRepeat:`no-repeat`},".cm-trailingSpace":{backgroundColor:`#ff332255`},".cm-button":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,padding:`.2em 1em`,borderRadius:`1px`},"&light .cm-button":{backgroundImage:`linear-gradient(#eff1f5, #d9d9df)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#b4b4b4, #d0d3d6)`}},"&dark .cm-button":{backgroundImage:`linear-gradient(#393939, #111)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#111, #333)`}},".cm-textfield":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,border:`1px solid silver`,padding:`.2em .5em`},"&light .cm-textfield":{backgroundColor:`white`},"&dark .cm-textfield":{border:`1px solid #555`,backgroundColor:`inherit`}},js),Ps={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},Fs=k.ie&&k.ie_version<=11,Is=class{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new Pr,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let e of t)this.queue.push(e);(k.ie&&k.ie_version<=11||k.ios&&e.composing)&&t.some(e=>e.type==`childList`&&e.removedNodes.length||e.type==`characterData`&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&k.android&&e.constructor.EDIT_CONTEXT!==!1&&!(k.chrome&&k.chrome_version<126)&&(this.editContext=new Bs(e),e.state.facet(ji)&&(e.contentDOM.editContext=this.editContext.editContext)),Fs&&(this.onCharData=e=>{this.queue.push({target:e.target,type:`characterData`,oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia(`print`)),typeof ResizeObserver==`function`&&(this.resizeScroll=new ResizeObserver(()=>{this.view.docView?.lastUpdate<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver==`function`&&(this.intersection=new IntersectionObserver(e=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),e.length>0&&e[e.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent(`Event`)))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(e=>{e.length>0&&e[e.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent(`Event`))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers(`scroll`,e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type!=`change`&&e.type||e.matches)&&(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,r=this.selectionRange;if(n.state.facet(ji)?n.root.activeElement!=this.dom:!Sr(this.dom,r))return;let i=r.anchorNode&&n.docView.tile.nearest(r.anchorNode);i&&i.isWidget()&&i.widget.ignoreEvent(e)?t||(this.selectionChanged=!1):(k.ie&&k.ie_version<=11||k.android&&k.chrome)&&!n.state.selection.main.empty&&r.focusNode&&wr(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=br(e.root);if(!t)return!1;let n=k.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&zs(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let r=Sr(this.dom,n);return r&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&Ur(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),r&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(M(n))!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);for(let e of this.scrollTargets=t)e.addEventListener(`scroll`,this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,Ps),Fs&&this.dom.addEventListener(`DOMCharacterDataModified`,this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),Fs&&this.dom.removeEventListener(`DOMCharacterDataModified`,this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){if(!this.delayedAndroidKey){let e=()=>{let e=this.delayedAndroidKey;e&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=e.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&e.force&&Vr(this.dom,e.key,e.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(e)}(!this.delayedAndroidKey||e==`Enter`)&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!this.delayedAndroidKey?.force})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,r=!1;for(let i of e){let e=this.readMutation(i);e&&(e.typeOver&&(r=!0),t==-1?{from:t,to:n}=e:(t=Math.min(e.from,t),n=Math.max(e.to,n)))}return{from:t,to:n,typeOver:r}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),r=this.selectionChanged&&Sr(this.dom,this.selectionRange);if(e<0&&!r)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let i=new Qa(this.view,e,t,n);return this.view.docView.domChanged={newSel:i.newSel?i.newSel.main:null},i}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.selectionChanged,n=this.readChange();if(!n)return this.view.requestMeasure(),!1;let r=this.view.state,i=eo(this.view,n);return this.view.state==r&&(n.domChanged||t)&&this.view.update([]),i}readMutation(e){let t=this.view.docView.tile.nearest(e.target);if(!t||t.isWidget())return null;if(t.markDirty(e.type==`attributes`),e.type==`childList`){let n=Ls(t,e.previousSibling||e.target.previousSibling,-1),r=Ls(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:r?t.posBefore(r):t.posAtEnd,typeOver:!1}}return e.type==`characterData`?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener(`change`,this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener(`beforeprint`,this.onPrint),e.addEventListener(`scroll`,this.onScroll),e.document.addEventListener(`selectionchange`,this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener(`scroll`,this.onScroll),e.removeEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener(`change`,this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener(`beforeprint`,this.onPrint),e.document.removeEventListener(`selectionchange`,this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(ji)!=e.state.facet(ji)&&(e.view.contentDOM.editContext=e.state.facet(ji)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)==null||e.disconnect(),(t=this.gapIntersection)==null||t.disconnect(),(n=this.resizeScroll)==null||n.disconnect();for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}};function Ls(e,t,n){for(;t;){let r=I.get(t);if(r&&r.parent==e)return r;let i=t.parentNode;t=i==e.dom?n>0?t.nextSibling:t.previousSibling:i}return null}function Rs(e,t){let n=t.startContainer,r=t.startOffset,i=t.endContainer,a=t.endOffset,o=e.docView.domAtPos(e.state.selection.main.anchor,1);return wr(o.node,o.offset,i,a)&&([n,r,i,a]=[i,a,n,r]),{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}}function zs(e,t){if(t.getComposedRanges){let n=t.getComposedRanges(e.root)[0];if(n)return Rs(e,n)}let n=null;function r(e){e.preventDefault(),e.stopImmediatePropagation(),n=e.getTargetRanges()[0]}return e.contentDOM.addEventListener(`beforeinput`,r,!0),e.dom.ownerDocument.execCommand(`indent`),e.contentDOM.removeEventListener(`beforeinput`,r,!0),n?Rs(e,n):null}var Bs=class{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=n=>{let r=e.state.selection.main,{anchor:i,head:a}=r,o=this.toEditorPos(n.updateRangeStart),s=this.toEditorPos(n.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:n.updateRangeStart,editorBase:o,drifted:!1});let c=s-o>n.text.length;o==this.from&&i<this.from?o=i:s==this.to&&i>this.to&&(s=i);let l=ro(e.state.sliceDoc(o,s),n.text,(c?r.from:r.to)-o,c?`end`:null);if(!l){let t=S.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd));oo(t,r)||e.dispatch({selection:t,userEvent:`select`});return}let u={from:l.from+o,to:l.toA+o,insert:b.of(n.text.slice(l.from,l.toB).split(`
`))};if((k.mac||k.android)&&u.from==a-1&&/^\. ?$/.test(n.text)&&e.contentDOM.getAttribute(`autocorrect`)==`off`&&(u={from:o,to:s,insert:b.of([n.text.replace(`.`,` `)])}),this.pendingContextChange=u,!e.state.readOnly){let t=this.to-this.from+(u.to-u.from+u.insert.length);to(e,u,S.single(this.toEditorPos(n.selectionStart,t),this.toEditorPos(n.selectionEnd,t)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),u.from<u.to&&!u.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,n.updateRangeStart-1),Math.min(t.text.length,n.updateRangeStart+1)))&&this.handlers.compositionend(n)},this.handlers.characterboundsupdate=n=>{let r=[],i=null;for(let t=this.toEditorPos(n.rangeStart),a=this.toEditorPos(n.rangeEnd);t<a;t++){let n=e.coordsForChar(t);i=n&&new DOMRect(n.left,n.top,n.right-n.left,n.bottom-n.top)||i||new DOMRect,r.push(i)}t.updateCharacterBounds(n.rangeStart,r)},this.handlers.textformatupdate=t=>{let n=[];for(let e of t.getTextFormats()){let t=e.underlineStyle,r=e.underlineThickness;if(!/none/i.test(t)&&!/none/i.test(r)){let i=this.toEditorPos(e.rangeStart),a=this.toEditorPos(e.rangeEnd);if(i<a){let e=`text-decoration: underline ${/^[a-z]/.test(t)?t+` `:t==`Dashed`?`dashed `:t==`Squiggle`?`wavy `:``}${/thin/i.test(r)?1:2}px`;n.push(j.mark({attributes:{style:e}}).range(i,a))}}}e.dispatch({effects:ki.of(j.set(n))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:t}=this.composing;this.composing=null,t&&this.reset(e.state)}};for(let e in this.handlers)t.addEventListener(e,this.handlers[e]);this.measureReq={read:e=>{let t=br(e.root);t&&t.rangeCount&&this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,r=this.pendingContextChange;return e.changes.iterChanges((i,a,o,s,c)=>{if(n)return;let l=c.length-(a-i);if(r&&a>=r.to){if(r.from==i&&r.to==a&&r.insert.eq(c)){r=this.pendingContextChange=null,t+=l,this.to+=l;return}r=null,this.revertPending(e.state)}if(i+=t,a+=t,a<=this.from)this.from+=l,this.to+=l;else if(i<this.to){if(i<this.from||a>this.to||this.to-this.from+c.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(i),this.toContextPos(a),c.toString()),this.to+=l}t+=l}),r&&!n&&this.revertPending(e.state),!n}update(e){let t=this.pendingContextChange,n=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(n.from,n.to)&&e.transactions.some(e=>!e.isUserEvent(`input.type`)&&e.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),r=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=r)&&this.editContext.updateSelection(n,r)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>3e4)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let n=this.composing;return n&&n.drifted?n.editorBase+(e-n.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}},R=class e{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.clearAnnouncement=-1,this.contentDOM=document.createElement(`div`),this.scrollDOM=document.createElement(`div`),this.scrollDOM.tabIndex=-1,this.scrollDOM.className=`cm-scroller`,this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement(`div`),this.announceDOM.className=`cm-announced`,this.announceDOM.setAttribute(`aria-live`,`polite`),this.dom=document.createElement(`div`),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:t}=e;this.dispatchTransactions=e.dispatchTransactions||t&&(e=>e.forEach(e=>t(e,this)))||(e=>this.update(e)),this.dispatch=this.dispatch.bind(this),this._root=e.root||Hr(e.parent)||document,this.viewState=new gs(this,e.state||E.create(e)),e.scrollTo&&e.scrollTo.is(Oi)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(Ni).map(e=>new Pi(e));for(let e of this.plugins)e.update(this);this.observer=new Is(this),this.inputState=new so(this),this.inputState.ensureHandlers(this.plugins),this.docView=new xa(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),document.fonts?.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent=`refresh`,this.requestMeasure()})}dispatch(...e){let t=e.length==1&&e[0]instanceof Qt?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(t){if(this.updateState!=0)throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);let n=!1,r=!1,i,a=this.state;for(let e of t){if(e.startState!=a)throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);a=e.state}if(this.destroyed){this.viewState.state=a;return}let o=this.hasFocus,s=0,c=null;t.some(e=>e.annotation(Vo))?(this.inputState.notifiedFocused=o,s=1):o!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=o,c=Ho(a,o),c||(s=1));let l=this.observer.delayedAndroidKey,u=null;if(l?(this.observer.clearDelayedAndroidKey(),u=this.observer.readChange(),(u&&!this.state.doc.eq(a.doc)||!this.state.selection.eq(a.selection))&&(u=null)):this.observer.clear(),a.facet(E.phrases)!=this.state.facet(E.phrases))return this.setState(a);i=qi.create(this,a,t),i.flags|=s;let d=this.viewState.scrollTarget;try{this.updateState=2;for(let n of t){if(d&&(d=d.map(n.changes)),n.scrollIntoView){let{main:t}=n.state.selection,{x:r,y:i}=this.state.facet(e.cursorScrollMargin);d=new Di(t.empty?t:S.cursor(t.head,t.head>t.anchor?-1:1),`nearest`,`nearest`,i,r)}for(let e of n.effects)e.is(Oi)&&(d=e.value.clip(this.state))}this.viewState.update(i,d),this.bidiCache=Us.update(this.bidiCache,i.changes),i.empty||(this.updatePlugins(i),this.inputState.update(i)),n=this.docView.update(i),this.state.facet(Gi)!=this.styleModules&&this.mountStyles(),r=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(n,t.some(e=>e.isUserEvent(`select.pointer`)))}finally{this.updateState=0}if(i.startState.facet(Es)!=i.state.facet(Es)&&(this.viewState.mustMeasureContent=!0),(n||r||d||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!i.empty)for(let e of this.state.facet(yi))try{e(i)}catch(e){Ai(this.state,e,`update listener`)}(c||u)&&Promise.resolve().then(()=>{c&&this.state==c.startState&&this.dispatch(c),u&&!eo(this,u)&&l.force&&Vr(this.contentDOM,l.key,l.keyCode)})}setState(e){if(this.updateState!=0)throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let e of this.plugins)e.destroy(this);this.viewState=new gs(this,e),this.plugins=e.facet(Ni).map(e=>new Pi(e)),this.pluginMap.clear();for(let e of this.plugins)e.update(this);this.docView.destroy(),this.docView=new xa(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(Ni),n=e.state.facet(Ni);if(t!=n){let r=[];for(let i of n){let n=t.indexOf(i);if(n<0)r.push(new Pi(i));else{let t=this.plugins[n];t.mustUpdate=e,r.push(t)}}for(let t of this.plugins)t.mustUpdate!=e&&t.destroy(this);this.plugins=r,this.pluginMap.clear()}else for(let t of this.plugins)t.mustUpdate=e;for(let e=0;e<this.plugins.length;e++)this.plugins[e].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(e){Ai(this.state,e,`doc view update listener`)}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.viewState.scrollParent,r=this.viewState.getScrollOffset(),{scrollAnchorPos:i,scrollAnchorHeight:a,scaleY:o}=this.viewState;Math.abs(r-this.viewState.scrollOffset)>1&&(a=-1),this.viewState.scrollAnchorHeight=-1;try{for(let e=0;;e++){if(a<0){if(Wr(n||this.win))i=-1,a=this.viewState.heightMap.height/this.viewState.scaleY;else{let e=this.viewState.scrollAnchorAt(r);i=e.from,a=e.top}o=this.viewState.scaleY}this.updateState=1;let s=this.viewState.measure();if(!s&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(e>5){console.warn(this.measureRequests.length?`Measure loop restarted more than 5 times`:`Viewport failed to stabilize`);break}let c=[];s&4||([this.measureRequests,c]=[c,this.measureRequests]);let l=c.map(e=>{try{return e.read(this)}catch(e){return Ai(this.state,e),Hs}}),u=qi.create(this,this.state,[]),d=!1;u.flags|=s,t?t.flags|=s:t=u,this.updateState=2,u.empty||(this.updatePlugins(u),this.inputState.update(u),this.updateAttrs(),d=this.docView.update(u),d&&this.docViewUpdate());for(let e=0;e<c.length;e++)if(l[e]!=Hs)try{let t=c[e];t.write&&t.write(l[e],this)}catch(e){Ai(this.state,e)}if(d&&this.docView.updateSelection(!0),!u.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,a=-1;continue}{let e=(i<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(i).top)/this.viewState.scaleY-a/o;if((e>1||e<-1)&&!(k.ios&&this.inputState.lastIOSMomentumScroll>Date.now()-100)&&(n==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){r+=e,n?i<0?n.scrollTop=n.scrollHeight:n.scrollTop+=e:this.win.scrollBy(0,e),a=-1;continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let e of this.state.facet(yi))e(t)}get themeClasses(){return Os+` `+(this.state.facet(Ds)?As:ks)+` `+this.state.facet(Es)}updateAttrs(){let e=Ws(this,Fi,{class:`cm-editor`+(this.hasFocus?` cm-focused `:` `)+this.themeClasses}),t={spellcheck:`false`,autocorrect:`off`,autocapitalize:`off`,writingsuggestions:`false`,translate:`no`,contenteditable:this.state.facet(ji)?`true`:`false`,class:`cm-content`,style:`${k.tabSize}: ${this.state.tabSize}`,role:`textbox`,"aria-multiline":`true`};this.state.readOnly&&(t[`aria-readonly`]=`true`),Ws(this,Ii,t);let n=this.observer.ignore(()=>{let n=lr(this.contentDOM,this.contentAttrs,t),r=lr(this.dom,this.editorAttrs,e);return n||r});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(t){let n=!0;for(let r of t)for(let t of r.effects)if(t.is(e.announce)){n&&(this.announceDOM.textContent=``,this.win.clearTimeout(this.clearAnnouncement),this.clearAnnouncement=this.win.setTimeout(()=>{this.announceDOM.textContent=`\xA0`},200),n=!1);let e=this.announceDOM.appendChild(document.createElement(`div`));e.textContent=t.value}}mountStyles(){this.styleModules=this.state.facet(Gi);let t=this.state.facet(e.cspNonce);Ln.mount(this.root,this.styleModules.concat(Ns).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(this.updateState==2)throw Error(`Reading the editor layout isn't allowed during an update`);this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(t=>t.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return Ua(this,e,Ra(this,e,t,n))}moveByGroup(e,t){return Ua(this,e,Ra(this,e,t,t=>za(this,e.head,t)))}visualLineSide(e,t){return t?S.cursor(e.to,1):S.cursor(e.from,-1)}moveToLineBoundary(e,t,n=!0){return La(this,e,t,n)}moveVertically(e,t,n){return Ua(this,e,Ba(this,e,t,n))}domAtPos(e,t=1){return this.docView.domAtPos(e,t)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){this.readMeasured();let n=Ga(this,e,t);return n&&n.pos}posAndSideAtCoords(e,t=!0){return this.readMeasured(),Ga(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.state.doc.lineAt(e),r=this.bidiSpans(n),i=r[ri.find(r,e-n.from,-1,t)];return n.length&&(e==n.from&&t<0||e==n.to&&t>0)&&i.dir!=this.textDirectionAt(n.from)&&(e==n.to?(e=n.from+i.from,t=1):(e=n.from+i.to,t=-1)),this.docView.coordsAt(e,t,i.dir==N.RTL)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(wi)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>Vs)return di(e.length);let t=this.textDirectionAt(e.from),n;for(let r of this.bidiCache)if(r.from==e.from&&r.dir==t&&(r.fresh||ii(r.isolates,n=Hi(this,e))))return r.order;n||(n=Hi(this,e));let r=ui(e.text,t,n);return this.bidiCache.push(new Us(e.from,e.to,t,n,!0,r)),r}get hasFocus(){return(this.dom.ownerDocument.hasFocus()||k.safari&&this.inputState?.lastContextMenu>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{Rr(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.win.clearTimeout(this.clearAnnouncement),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return Oi.of(new Di(typeof e==`number`?S.cursor(e):e,t.y??`nearest`,t.x??`nearest`,t.yMargin??5,t.xMargin??5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return Oi.of(new Di(S.cursor(n.from),`start`,`start`,n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e==`boolean`?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return F.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return F.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=Ln.newName(),r=[Es.of(n),Gi.of(Ms(`.${n}`,e))];return t&&t.dark&&r.push(Ds.of(!0)),r}static baseTheme(e){return Pt.lowest(Gi.of(Ms(`.`+Os,e,js)))}static findFromDOM(e){let t=e.querySelector(`.cm-content`);return(t&&I.get(t)||I.get(e))?.root?.view||null}};R.styleModule=Gi,R.inputHandler=bi,R.clipboardInputFilter=Si,R.clipboardOutputFilter=Ci,R.scrollHandler=Ei,R.focusChangeEffect=xi,R.perLineTextDirection=wi,R.exceptionSink=vi,R.updateListener=yi,R.editable=ji,R.mouseSelectionStyle=_i,R.dragMovesSelection=gi,R.clickAddsSelectionRange=hi,R.decorations=Li,R.blockWrappers=Ri,R.outerDecorations=zi,R.atomicRanges=Bi,R.bidiIsolatedRanges=Vi,R.cursorScrollMargin=C.define({combine:e=>{let t=5,n=5;for(let r of e)typeof r==`number`?t=n=r:{x:t,y:n}=r;return{x:t,y:n}}}),R.scrollMargins=Ui,R.darkTheme=Ds,R.cspNonce=C.define({combine:e=>e.length?e[0]:``}),R.contentAttributes=Ii,R.editorAttributes=Fi,R.lineWrapping=R.contentAttributes.of({class:`cm-lineWrapping`}),R.announce=w.define();var Vs=4096,Hs={},Us=class e{constructor(e,t,n,r,i,a){this.from=e,this.to=t,this.dir=n,this.isolates=r,this.fresh=i,this.order=a}static update(t,n){if(n.empty&&!t.some(e=>e.fresh))return t;let r=[],i=t.length?t[t.length-1].dir:N.LTR;for(let a=Math.max(0,t.length-10);a<t.length;a++){let o=t[a];o.dir==i&&!n.touchesRange(o.from,o.to)&&r.push(new e(n.mapPos(o.from,1),n.mapPos(o.to,-1),o.dir,o.isolates,!1,o.order))}return r}};function Ws(e,t,n){for(let r=e.state.facet(t),i=r.length-1;i>=0;i--){let t=r[i],a=typeof t==`function`?t(e):t;a&&ar(a,n)}return n}var Gs=k.mac?`mac`:k.windows?`win`:k.linux?`linux`:`key`;function Ks(e,t){let n=e.split(/-(?!$)/),r=n[n.length-1];r==`Space`&&(r=` `);let i,a,o,s;for(let e=0;e<n.length-1;++e){let r=n[e];if(/^(cmd|meta|m)$/i.test(r))s=!0;else if(/^a(lt)?$/i.test(r))i=!0;else if(/^(c|ctrl|control)$/i.test(r))a=!0;else if(/^s(hift)?$/i.test(r))o=!0;else if(/^mod$/i.test(r))t==`mac`?s=!0:a=!0;else throw Error(`Unrecognized modifier name: `+r)}return i&&(r=`Alt-`+r),a&&(r=`Ctrl-`+r),s&&(r=`Meta-`+r),o&&(r=`Shift-`+r),r}function qs(e,t,n){return t.altKey&&(e=`Alt-`+e),t.ctrlKey&&(e=`Ctrl-`+e),t.metaKey&&(e=`Meta-`+e),n!==!1&&t.shiftKey&&(e=`Shift-`+e),e}var Js=Pt.default(R.domEventHandlers({keydown(e,t){return rc(Zs(t.state),e,t,`editor`)}})),Ys=C.define({enables:Js}),Xs=new WeakMap;function Zs(e){let t=e.facet(Ys),n=Xs.get(t);return n||Xs.set(t,n=tc(t.reduce((e,t)=>e.concat(t),[]))),n}function Qs(e,t,n){return rc(Zs(e.state),t,e,n)}var $s=null,ec=4e3;function tc(e,t=Gs){let n=Object.create(null),r=Object.create(null),i=(e,t)=>{let n=r[e];if(n==null)r[e]=t;else if(n!=t)throw Error(`Key binding `+e+` is used both as a regular binding and as a multi-stroke prefix`)},a=(e,r,a,o,s)=>{let c=n[e]||(n[e]=Object.create(null)),l=r.split(/ (?!$)/).map(e=>Ks(e,t));for(let t=1;t<l.length;t++){let n=l.slice(0,t).join(` `);i(n,!0),c[n]||(c[n]={preventDefault:!0,stopPropagation:!1,run:[t=>{let r=$s={view:t,prefix:n,scope:e};return setTimeout(()=>{$s==r&&($s=null)},ec),!0}]})}let u=l.join(` `);i(u,!1);let d=c[u]||(c[u]={preventDefault:!1,stopPropagation:!1,run:(c._any?.run)?.slice()||[]});a&&d.run.push(a),o&&(d.preventDefault=!0),s&&(d.stopPropagation=!0)};for(let r of e){let e=r.scope?r.scope.split(` `):[`editor`];if(r.any)for(let t of e){let e=n[t]||(n[t]=Object.create(null));e._any||(e._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:i}=r;for(let t in e)e[t].run.push(e=>i(e,nc))}let i=r[t]||r.key;if(i)for(let t of e)a(t,i,r.run,r.preventDefault,r.stopPropagation),r.shift&&a(t,`Shift-`+i,r.shift,r.preventDefault,r.stopPropagation)}return n}var nc=null;function rc(e,t,n,r){nc=t;let i=Kn(t),a=dt(lt(i,0))==i.length&&i!=` `,o=``,s=!1,c=!1,l=!1;$s&&$s.view==n&&$s.scope==r&&(o=$s.prefix+` `,mo.indexOf(t.keyCode)<0&&(c=!0,$s=null));let u=new Set,d=e=>{if(e){for(let t of e.run)if(!u.has(t)&&(u.add(t),t(n)))return e.stopPropagation&&(l=!0),!0;e.preventDefault&&(e.stopPropagation&&(l=!0),c=!0)}return!1},f=e[r],p,m;return f&&(d(f[o+qs(i,t,!a)])?s=!0:a&&(t.altKey||t.metaKey||t.ctrlKey)&&!(k.windows&&t.ctrlKey&&t.altKey)&&!(k.mac&&t.altKey&&!(t.ctrlKey||t.metaKey))&&(p=Bn[t.keyCode])&&p!=i?(d(f[o+qs(p,t,!0)])||t.shiftKey&&(m=Vn[t.keyCode])!=i&&m!=p&&d(f[o+qs(m,t,!1)]))&&(s=!0):a&&t.shiftKey&&d(f[o+qs(i,t,!0)])&&(s=!0),!s&&d(f._any)&&(s=!0)),c&&(s=!0),s&&l&&t.stopPropagation(),nc=null,s}var ic=class e{constructor(e,t,n,r,i){this.className=e,this.left=t,this.top=n,this.width=r,this.height=i}draw(){let e=document.createElement(`div`);return e.className=this.className,this.adjust(e),e}update(e,t){return t.className==this.className&&(this.adjust(e),!0)}adjust(e){e.style.left=this.left+`px`,e.style.top=this.top+`px`,this.width!=null&&(e.style.width=this.width+`px`),e.style.height=this.height+`px`}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(t,n,r){if(r.empty){let i=t.coordsAtPos(r.head,r.assoc||1);if(!i)return[];let a=ac(t);return[new e(n,i.left-a.left,i.top-a.top,null,i.bottom-i.top)]}return sc(t,n,r)}};function ac(e){let t=e.scrollDOM.getBoundingClientRect();return{left:(e.textDirection==N.LTR?t.left:t.right-e.scrollDOM.clientWidth*e.scaleX)-e.scrollDOM.scrollLeft*e.scaleX,top:t.top-e.scrollDOM.scrollTop*e.scaleY}}function oc(e,t,n,r){let i=e.coordsAtPos(t,n*2);if(!i)return r;let a=e.dom.getBoundingClientRect(),o=(i.top+i.bottom)/2,s=e.posAtCoords({x:a.left+1,y:o}),c=e.posAtCoords({x:a.right-1,y:o});return s==null||c==null?r:{from:Math.max(r.from,Math.min(s,c)),to:Math.min(r.to,Math.max(s,c))}}function sc(e,t,n){if(n.to<=e.viewport.from||n.from>=e.viewport.to)return[];let r=Math.max(n.from,e.viewport.from),i=Math.min(n.to,e.viewport.to),a=e.textDirection==N.LTR,o=e.contentDOM,s=o.getBoundingClientRect(),c=ac(e),l=o.querySelector(`.cm-line`),u=l&&window.getComputedStyle(l),d=s.left+(u?parseInt(u.paddingLeft)+Math.min(0,parseInt(u.textIndent)):0),f=s.right-(u?parseInt(u.paddingRight):0),p=Ia(e,r,1),m=Ia(e,i,-1),h=p.type==A.Text?p:null,g=m.type==A.Text?m:null;if(h&&(e.lineWrapping||p.widgetLineBreaks)&&(h=oc(e,r,1,h)),g&&(e.lineWrapping||m.widgetLineBreaks)&&(g=oc(e,i,-1,g)),h&&g&&h.from==g.from&&h.to==g.to)return v(y(n.from,n.to,h));{let t=h?y(n.from,null,h):ee(p,!1),r=g?y(null,n.to,g):ee(m,!0),i=[];return(h||p).to<(g||m).from-(h&&g?1:0)||p.widgetLineBreaks>1&&t.bottom+e.defaultLineHeight/2<r.top?i.push(_(d,t.bottom,f,r.top)):t.bottom<r.top&&e.elementAtHeight((t.bottom+r.top)/2).type==A.Text&&(t.bottom=r.top=(t.bottom+r.top)/2),v(t).concat(i).concat(v(r))}function _(e,n,r,i){return new ic(t,e-c.left,n-c.top,Math.max(0,r-e),i-n)}function v({top:e,bottom:t,horizontal:n}){let r=[];for(let i=0;i<n.length;i+=2)r.push(_(n[i],e,n[i+1],t));return r}function y(t,n,r){let i=1e9,o=-1e9,s=[];function c(t,n,c,l,u){let p=e.coordsAtPos(t,t==r.to?-2:2),m=e.coordsAtPos(c,c==r.from?2:-2);p&&m&&(i=Math.min(p.top,m.top,i),o=Math.max(p.bottom,m.bottom,o),u==N.LTR?s.push(a&&n?d:p.left,a&&l?f:m.right):s.push(!a&&l?d:m.left,!a&&n?f:p.right))}let l=t??r.from,u=n??r.to;for(let r of e.visibleRanges)if(r.to>l&&r.from<u)for(let i=Math.max(r.from,l),a=Math.min(r.to,u);;){let r=e.state.doc.lineAt(i);for(let o of e.bidiSpans(r)){let e=o.from+r.from,s=o.to+r.from;if(e>=a)break;s>i&&c(Math.max(e,i),t==null&&e<=l,Math.min(s,a),n==null&&s>=u,o.dir)}if(i=r.to+1,i>=a)break}return s.length==0&&c(l,t==null,u,n==null,e.textDirection),{top:i,bottom:o,horizontal:s}}function ee(e,t){let n=s.top+(t?e.top:e.bottom);return{top:n,bottom:n,horizontal:[]}}}function cc(e,t){return e.constructor==t.constructor&&e.eq(t)}var lc=class{constructor(e,t){this.view=e,this.layer=t,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement(`div`)),this.dom.classList.add(`cm-layer`),t.above&&this.dom.classList.add(`cm-layer-above`),t.class&&this.dom.classList.add(t.class),this.scale(),this.dom.setAttribute(`aria-hidden`,`true`),this.setOrder(e.state),e.requestMeasure(this.measureReq),t.mount&&t.mount(this.dom,e)}update(e){e.startState.facet(uc)!=e.state.facet(uc)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let t=0,n=e.facet(uc);for(;t<n.length&&n[t]!=this.layer;)t++;this.dom.style.zIndex=String((this.layer.above?150:-1)-t)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:t}=this.view;(e!=this.scaleX||t!=this.scaleY)&&(this.scaleX=e,this.scaleY=t,this.dom.style.transform=`scale(${1/e}, ${1/t})`)}draw(e){if(e.length!=this.drawn.length||e.some((e,t)=>!cc(e,this.drawn[t]))){let t=this.dom.firstChild,n=0;for(let r of e)r.update&&t&&r.constructor&&this.drawn[n].constructor&&r.update(t,this.drawn[n])?(t=t.nextSibling,n++):this.dom.insertBefore(r.draw(),t);for(;t;){let e=t.nextSibling;t.remove(),t=e}this.drawn=e,k.webkit&&(this.dom.style.display=this.dom.firstChild?``:`none`)}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}},uc=C.define();function dc(e){return[F.define(t=>new lc(t,e)),uc.of(e)]}var fc=!k.ios,pc=C.define({combine(e){return fn(e,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,t)=>Math.min(e,t),drawRangeCursor:(e,t)=>e||t})}});function mc(e={}){return[pc.of(e),gc,vc,bc,Ti.of(!0)]}function hc(e){return e.startState.facet(pc)!=e.state.facet(pc)}var gc=dc({above:!0,markers(e){let{state:t}=e,n=t.facet(pc),r=[];for(let i of t.selection.ranges){let a=i==t.selection.main;if(i.empty||n.drawRangeCursor&&!(a&&k.ios&&n.iosSelectionHandles)){let t=a?`cm-cursor cm-cursor-primary`:`cm-cursor cm-cursor-secondary`,n=i.empty?i:S.cursor(i.head,i.assoc);for(let i of ic.forRange(e,t,n))r.push(i)}}return r},update(e,t){e.transactions.some(e=>e.selection)&&(t.style.animationName=t.style.animationName==`cm-blink`?`cm-blink2`:`cm-blink`);let n=hc(e);return n&&_c(e.state,t),e.docChanged||e.selectionSet||n},mount(e,t){_c(t.state,e)},class:`cm-cursorLayer`});function _c(e,t){t.style.animationDuration=e.facet(pc).cursorBlinkRate+`ms`}var vc=dc({above:!1,markers(e){let t=[],{main:n,ranges:r}=e.state.selection;for(let i of r)if(!i.empty&&(fc||i!=n))for(let n of ic.forRange(e,`cm-selectionBackground`,i))t.push(n);if(k.ios&&!n.empty&&e.state.facet(pc).iosSelectionHandles){for(let r of ic.forRange(e,`cm-selectionHandle cm-selectionHandle-start`,S.cursor(n.from,1)))t.push(r);for(let r of ic.forRange(e,`cm-selectionHandle cm-selectionHandle-end`,S.cursor(n.to,1)))t.push(r)}return t},update(e,t){return e.docChanged||e.selectionSet||e.viewportChanged||hc(e)},class:`cm-selectionLayer`}),yc=k.gecko&&k.gecko_version==153?`#ffffff01`:`transparent`,bc=Pt.highest(R.theme({".cm-line":{...fc?{"& ::selection, &::selection":{backgroundColor:`${yc} !important`}}:{},caretColor:`transparent !important`},".cm-content":{caretColor:`transparent !important`,"& :focus":{caretColor:`initial !important`,...fc?{"&::selection, & ::selection":{backgroundColor:`Highlight !important`}}:{}}}})),xc=w.define({map(e,t){return e==null?null:t.mapPos(e)}}),Sc=jt.define({create(){return null},update(e,t){return e!=null&&(e=t.changes.mapPos(e)),t.effects.reduce((e,t)=>t.is(xc)?t.value:e,e)}}),Cc=F.fromClass(class{constructor(e){this.view=e,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(e){var t;let n=e.state.field(Sc);n==null?this.cursor!=null&&((t=this.cursor)==null||t.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement(`div`)),this.cursor.className=`cm-dropCursor`),(e.startState.field(Sc)!=n||e.docChanged||e.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let{view:e}=this,t=e.state.field(Sc),n=t!=null&&e.coordsAtPos(t);if(!n)return null;let r=e.scrollDOM.getBoundingClientRect();return{left:n.left-r.left+e.scrollDOM.scrollLeft*e.scaleX,top:n.top-r.top+e.scrollDOM.scrollTop*e.scaleY,height:n.bottom-n.top}}drawCursor(e){if(this.cursor){let{scaleX:t,scaleY:n}=this.view;e?(this.cursor.style.left=e.left/t+`px`,this.cursor.style.top=e.top/n+`px`,this.cursor.style.height=e.height/n+`px`):this.cursor.style.left=`-100000px`}}destroy(){this.cursor&&this.cursor.remove()}setDropPos(e){this.view.state.field(Sc)!=e&&this.view.dispatch({effects:xc.of(e)})}},{eventObservers:{dragover(e){this.setDropPos(this.view.posAtCoords({x:e.clientX,y:e.clientY}))},dragleave(e){(e.target==this.view.contentDOM||!this.view.contentDOM.contains(e.relatedTarget))&&this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}});function wc(){return[Sc,Cc]}function Tc(e,t,n,r,i){t.lastIndex=0;for(let a=e.iterRange(n,r),o=n,s;!a.next().done;o+=a.value.length)if(!a.lineBreak)for(;s=t.exec(a.value);)i(o+s.index,s)}function Ec(e,t){let n=e.visibleRanges;if(n.length==1&&n[0].from==e.viewport.from&&n[0].to==e.viewport.to)return n;let r=[];for(let{from:i,to:a}of n)i=Math.max(e.state.doc.lineAt(i).from,i-t),a=Math.min(e.state.doc.lineAt(a).to,a+t),r.length&&r[r.length-1].to>=i?r[r.length-1].to=a:r.push({from:i,to:a});return r}var Dc=class{constructor(e){let{regexp:t,decoration:n,decorate:r,boundary:i,maxLength:a=1e3}=e;if(!t.global)throw RangeError(`The regular expression given to MatchDecorator should have its 'g' flag set`);if(this.regexp=t,r)this.addMatch=(e,t,n,i)=>r(i,n,n+e[0].length,e,t);else if(typeof n==`function`)this.addMatch=(e,t,r,i)=>{let a=n(e,t,r);a&&i(r,r+e[0].length,a)};else if(n)this.addMatch=(e,t,r,i)=>i(r,r+e[0].length,n);else throw RangeError(`Either 'decorate' or 'decoration' should be provided to MatchDecorator`);this.boundary=i,this.maxLength=a}createDeco(e){let t=new bn,n=t.add.bind(t);for(let{from:t,to:r}of Ec(e,this.maxLength))Tc(e.state.doc,this.regexp,t,r,(t,r)=>this.addMatch(r,e,t,n));return t.finish()}updateDeco(e,t){let n=1e9,r=-1;return e.docChanged&&e.changes.iterChanges((t,i,a,o)=>{o>=e.view.viewport.from&&a<=e.view.viewport.to&&(n=Math.min(a,n),r=Math.max(o,r))}),e.viewportMoved||r-n>1e3?this.createDeco(e.view):r>-1?this.updateRange(e.view,t.map(e.changes),n,r):t}updateRange(e,t,n,r){for(let i of e.visibleRanges){let a=Math.max(i.from,n),o=Math.min(i.to,r);if(o>=a){let n=e.state.doc.lineAt(a),r=n.to<o?e.state.doc.lineAt(o):n,s=Math.max(i.from,n.from),c=Math.min(i.to,r.to);if(this.boundary){for(;a>n.from;a--)if(this.boundary.test(n.text[a-1-n.from])){s=a;break}for(;o<r.to;o++)if(this.boundary.test(r.text[o-r.from])){c=o;break}}let l=[],u,d=(e,t,n)=>l.push(n.range(e,t));if(n==r)for(this.regexp.lastIndex=s-n.from;(u=this.regexp.exec(n.text))&&u.index<c-n.from;)this.addMatch(u,e,u.index+n.from,d);else Tc(e.state.doc,this.regexp,s,c,(t,n)=>this.addMatch(n,e,t,d));t=t.update({filterFrom:s,filterTo:c,filter:(e,t)=>e<s||t>c,add:l})}}return t}},Oc=/x/.unicode==null?`g`:`gu`,kc=RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]`,Oc),Ac={0:`null`,7:`bell`,8:`backspace`,10:`newline`,11:`vertical tab`,13:`carriage return`,27:`escape`,8203:`zero width space`,8204:`zero width non-joiner`,8205:`zero width joiner`,8206:`left-to-right mark`,8207:`right-to-left mark`,8232:`line separator`,8237:`left-to-right override`,8238:`right-to-left override`,8294:`left-to-right isolate`,8295:`right-to-left isolate`,8297:`pop directional isolate`,8233:`paragraph separator`,65279:`zero width no-break space`,65532:`object replacement`},jc=null;function Mc(){if(jc==null&&typeof document<`u`&&document.body){let e=document.body.style;jc=(e.tabSize??e.MozTabSize)!=null}return jc||!1}var Nc=C.define({combine(e){let t=fn(e,{render:null,specialChars:kc,addSpecialChars:null});return(t.replaceTabs=!Mc())&&(t.specialChars=RegExp(`	|`+t.specialChars.source,Oc)),t.addSpecialChars&&(t.specialChars=RegExp(t.specialChars.source+`|`+t.addSpecialChars.source,Oc)),t}});function Pc(e={}){return[Nc.of(e),Ic()]}var Fc=null;function Ic(){return Fc||(Fc=F.fromClass(class{constructor(e){this.view=e,this.decorations=j.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(e.state.facet(Nc)),this.decorations=this.decorator.createDeco(e)}makeDecorator(e){return new Dc({regexp:e.specialChars,decoration:(t,n,r)=>{let{doc:i}=n.state,a=lt(t[0],0);if(a==9){let e=i.lineAt(r),t=n.state.tabSize,a=jn(e.text,t,r-e.from);return j.replace({widget:new Bc((t-a%t)*this.view.defaultCharacterWidth/this.view.scaleX)})}return this.decorationCache[a]||(this.decorationCache[a]=j.replace({widget:new zc(e,a)}))},boundary:e.replaceTabs?void 0:/[^]/})}update(e){let t=e.state.facet(Nc);e.startState.facet(Nc)==t?this.decorations=this.decorator.updateDeco(e,this.decorations):(this.decorator=this.makeDecorator(t),this.decorations=this.decorator.createDeco(e.view))}},{decorations:e=>e.decorations}))}var Lc=`•`;function Rc(e){return e>=32?Lc:e==10?`␤`:String.fromCharCode(9216+e)}var zc=class extends dr{constructor(e,t){super(),this.options=e,this.code=t}eq(e){return e.code==this.code}toDOM(e){let t=Rc(this.code),n=e.state.phrase(`Control character`)+` `+(Ac[this.code]||`0x`+this.code.toString(16)),r=this.options.render&&this.options.render(this.code,n,t);if(r)return r;let i=document.createElement(`span`);return i.textContent=t,i.title=n,i.setAttribute(`aria-label`,n),i.className=`cm-specialChar`,i}ignoreEvent(){return!1}},Bc=class extends dr{constructor(e){super(),this.width=e}eq(e){return e.width==this.width}toDOM(){let e=document.createElement(`span`);return e.textContent=`	`,e.className=`cm-tab`,e.style.width=this.width+`px`,e}ignoreEvent(){return!1}};function Vc(){return Uc}var Hc=j.line({class:`cm-activeLine`}),Uc=F.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.docChanged||e.selectionSet)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=-1,n=[];for(let r of e.state.selection.ranges){let i=e.lineBlockAt(r.head);i.from>t&&(n.push(Hc.range(i.from)),t=i.from)}return j.set(n)}},{decorations:e=>e.decorations}),Wc=2e3;function Gc(e,t,n){let r=Math.min(t.line,n.line),i=Math.max(t.line,n.line),a=[];if(t.off>Wc||n.off>Wc||t.col<0||n.col<0){let o=Math.min(t.off,n.off),s=Math.max(t.off,n.off);for(let t=r;t<=i;t++){let n=e.doc.line(t);n.length<=s&&a.push(S.range(n.from+o,n.to+s))}}else{let o=Math.min(t.col,n.col),s=Math.max(t.col,n.col);for(let t=r;t<=i;t++){let n=e.doc.line(t),r=Mn(n.text,o,e.tabSize,!0);if(r<0)a.push(S.cursor(n.to));else{let t=Mn(n.text,s,e.tabSize);a.push(S.range(n.from+r,n.from+t))}}}return a}function Kc(e,t){let n=e.coordsAtPos(e.viewport.from);return n?Math.round(Math.abs((n.left-t)/e.defaultCharacterWidth)):-1}function qc(e,t){let n=e.posAtCoords({x:t.clientX,y:t.clientY},!1),r=e.state.doc.lineAt(n),i=n-r.from,a=i>Wc?-1:i==r.length?Kc(e,t.clientX):jn(r.text,e.state.tabSize,n-r.from);return{line:r.number,col:a,off:i}}function Jc(e,t){let n=qc(e,t),r=e.state.selection;return n?{update(e){if(e.docChanged){let t=e.changes.mapPos(e.startState.doc.line(n.line).from),i=e.state.doc.lineAt(t);n={line:i.number,col:n.col,off:Math.min(n.off,i.length)},r=r.map(e.changes)}},get(t,i,a){let o=qc(e,t);if(!o)return r;let s=Gc(e.state,n,o);return s.length?a?S.create(s.concat(r.ranges)):S.create(s):r}}:null}function Yc(e){let t=e?.eventFilter||(e=>e.altKey&&e.button==0);return R.mouseSelectionStyle.of((e,n)=>t(n)?Jc(e,n):null)}var Xc={Alt:[18,e=>!!e.altKey],Control:[17,e=>!!e.ctrlKey],Shift:[16,e=>!!e.shiftKey],Meta:[91,e=>!!e.metaKey]},Zc={style:`cursor: crosshair`};function Qc(e={}){let[t,n]=Xc[e.key||`Alt`],r=F.fromClass(class{constructor(e){this.view=e,this.isDown=!1}set(e){this.isDown!=e&&(this.isDown=e,this.view.update([]))}},{eventObservers:{keydown(e){this.set(e.keyCode==t||n(e))},keyup(e){(e.keyCode==t||!n(e))&&this.set(!1)},mousemove(e){this.set(n(e))}}});return[r,R.contentAttributes.of(e=>e.plugin(r)?.isDown?Zc:null)]}var $c=`-10000px`,el=class{constructor(e,t,n,r){this.facet=t,this.createTooltipView=n,this.removeTooltipView=r,this.input=e.state.facet(t),this.tooltips=this.input.filter(e=>e);let i=null;this.tooltipViews=this.tooltips.map(e=>i=n(e,i))}update(e,t){var n;let r=e.state.facet(this.facet),i=r.filter(e=>e);if(r===this.input){for(let t of this.tooltipViews)t.update&&t.update(e);return!1}let a=[],o=t?[]:null;for(let n=0;n<i.length;n++){let r=i[n],s=-1;if(r){for(let e=0;e<this.tooltips.length;e++){let t=this.tooltips[e];t&&t.create==r.create&&(s=e)}if(s<0)a[n]=this.createTooltipView(r,n?a[n-1]:null),o&&(o[n]=!!r.above);else{let r=a[n]=this.tooltipViews[s];o&&(o[n]=t[s]),r.update&&r.update(e)}}}for(let e of this.tooltipViews)a.indexOf(e)<0&&(this.removeTooltipView(e),(n=e.destroy)==null||n.call(e));return t&&(o.forEach((e,n)=>t[n]=e),t.length=o.length),this.input=r,this.tooltips=i,this.tooltipViews=a,!0}};function tl(e){let t=e.dom.ownerDocument.documentElement,n=t.clientWidth,r=getComputedStyle(t);if(!/stable/.test(r.scrollbarGutter||``))return{left:0,right:n};let i=t.getBoundingClientRect(),a=e.win.scrollX;return{left:Math.max(0,i.left+a-parseFloat(r.marginLeft)),right:Math.min(n,i.right+a+parseFloat(r.marginRight))}}function nl(e){let{left:t,right:n}=tl(e);return{top:0,left:t,right:n,bottom:e.dom.ownerDocument.documentElement.clientHeight}}var rl=C.define({combine:e=>({position:k.ios?`absolute`:e.find(e=>e.position)?.position||`fixed`,parent:e.find(e=>e.parent)?.parent||null,tooltipSpace:e.find(e=>e.tooltipSpace)?.tooltipSpace||nl})}),il=new WeakMap,al=F.fromClass(class{constructor(e){this.view=e,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let t=e.state.facet(rl);this.position=t.position,this.parent=t.parent,this.classes=e.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver=typeof ResizeObserver==`function`?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new el(e,ll,(e,t)=>this.createTooltip(e,t),e=>{this.resizeObserver&&this.resizeObserver.unobserve(e.dom),e.dom.remove()}),this.above=this.manager.tooltips.map(e=>!!e.above),this.intersectionObserver=typeof IntersectionObserver==`function`?new IntersectionObserver(e=>{Date.now()>this.lastTransaction-50&&e.length>0&&e[e.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),e.win.addEventListener(`resize`,this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement(`div`),this.container.style.position=`relative`,this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let e of this.manager.tooltipViews)this.intersectionObserver.observe(e.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(e){e.transactions.length&&(this.lastTransaction=Date.now());let t=this.manager.update(e,this.above);t&&this.observeIntersection();let n=t||e.geometryChanged,r=e.state.facet(rl);if(r.position!=this.position&&!this.madeAbsolute){this.position=r.position;for(let e of this.manager.tooltipViews)e.dom.style.position=this.position;n=!0}if(r.parent!=this.parent){this.parent&&this.container.remove(),this.parent=r.parent,this.createContainer();for(let e of this.manager.tooltipViews)this.container.appendChild(e.dom);n=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);n&&this.maybeMeasure()}createTooltip(e,t){let n=e.create(this.view),r=t?t.dom:null;if(n.dom.classList.add(`cm-tooltip`),e.arrow&&!n.dom.querySelector(`.cm-tooltip > .cm-tooltip-arrow`)){let e=document.createElement(`div`);e.className=`cm-tooltip-arrow`,n.dom.appendChild(e)}return n.dom.style.position=this.position,n.dom.style.top=$c,n.dom.style.left=`0px`,this.container.insertBefore(n.dom,r),n.mount&&n.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(n.dom),n}destroy(){var e,t,n;this.view.win.removeEventListener(`resize`,this.measureSoon);for(let t of this.manager.tooltipViews)t.dom.remove(),(e=t.destroy)==null||e.call(t);this.parent&&this.container.remove(),(t=this.resizeObserver)==null||t.disconnect(),(n=this.intersectionObserver)==null||n.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let e=1,t=1,n=!1,r=0;if(this.position==`fixed`&&this.manager.tooltipViews.length){let{dom:e}=this.manager.tooltipViews[0];if(k.safari){let t=e.getBoundingClientRect();n=Math.abs(t.top+1e4)>1||Math.abs(t.left)>1}else n=!!e.offsetParent&&e.offsetParent!=this.container.ownerDocument.body}if(n||this.position==`absolute`){if(this.parent){let n=this.parent.getBoundingClientRect();n.width&&n.height&&(e=n.width/this.parent.offsetWidth,t=n.height/this.parent.offsetHeight)}else({scaleX:e,scaleY:t}=this.view.viewState)}else r=tl(this.view).left;let i=this.view.scrollDOM.getBoundingClientRect(),a=Wi(this.view);return{visible:{left:i.left+a.left,top:i.top+a.top,right:i.right-a.right,bottom:i.bottom-a.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((e,t)=>{let n=this.manager.tooltipViews[t];return n.getCoords?n.getCoords(e.pos):this.view.coordsAtPos(e.pos)}),size:this.manager.tooltipViews.map(({dom:e})=>e.getBoundingClientRect()),space:this.view.state.facet(rl).tooltipSpace(this.view),scaleX:e,scaleY:t,makeAbsolute:n,fixedLeft:r}}writeMeasure(e){if(e.makeAbsolute){this.madeAbsolute=!0,this.position=`absolute`;for(let e of this.manager.tooltipViews)e.dom.style.position=`absolute`}let{visible:t,space:n,scaleX:r,scaleY:i}=e,a=[];for(let o=0;o<this.manager.tooltips.length;o++){let s=this.manager.tooltips[o],c=this.manager.tooltipViews[o],{dom:l}=c,u=e.pos[o],d=e.size[o];if(!u||s.clip!==!1&&(u.bottom<=Math.max(t.top,n.top)||u.top>=Math.min(t.bottom,n.bottom)||u.right<Math.max(t.left,n.left)-.1||u.left>Math.min(t.right,n.right)+.1)){l.style.top=$c;continue}let f=s.arrow?c.dom.querySelector(`.cm-tooltip-arrow`):null,p=f?7:0,m=d.right-d.left,h=il.get(c)??d.bottom-d.top,g=c.offset||cl,_=this.view.textDirection==N.LTR,v=d.width>n.right-n.left?_?n.left:n.right-d.width:_?Math.max(n.left,Math.min(u.left-(f?14:0)+g.x,n.right-m)):Math.min(Math.max(n.left,u.left-m+(f?14:0)-g.x),n.right-m),y=this.above[o];!s.strictSide&&(y?u.top-h-p-g.y<n.top:u.bottom+h+p+g.y>n.bottom)&&y==n.bottom-u.bottom>u.top-n.top&&(y=this.above[o]=!y);let ee=(y?u.top-n.top:n.bottom-u.bottom)-p;if(ee<h&&c.resize!==!1){if(ee<this.view.defaultLineHeight){l.style.top=$c;continue}il.set(c,h),l.style.height=(h=ee)/i+`px`}else l.style.height&&(l.style.height=``);let te=y?u.top-h-p-g.y:u.bottom+p+g.y,ne=v+m;if(c.overlap!==!0)for(let e of a)e.left<ne&&e.right>v&&e.top<te+h&&e.bottom>te&&(te=y?e.top-h-2-p:e.bottom+p+2);if(this.position==`absolute`?(l.style.top=(te-e.parent.top)/i+`px`,ol(l,(v-e.parent.left)/r)):(l.style.top=te/i+`px`,ol(l,(v-e.fixedLeft)/r)),f){let e=u.left+(_?g.x:-g.x)-(v+14-7);f.style.left=e/r+`px`}c.overlap!==!0&&a.push({left:v,top:te,right:ne,bottom:te+h}),l.classList.toggle(`cm-tooltip-above`,y),l.classList.toggle(`cm-tooltip-below`,!y),c.positioned&&c.positioned(e.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let e of this.manager.tooltipViews)e.dom.style.top=$c}},{eventObservers:{scroll(){this.maybeMeasure()}}});function ol(e,t){let n=parseInt(e.style.left,10);(isNaN(n)||Math.abs(t-n)>1)&&(e.style.left=t+`px`)}var sl=R.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:`border-box`},"&light .cm-tooltip":{border:`1px solid #bbb`,backgroundColor:`#f5f5f5`},"&light .cm-tooltip-section:not(:first-child)":{borderTop:`1px solid #bbb`},"&dark .cm-tooltip":{backgroundColor:`#333338`,color:`white`},".cm-tooltip-arrow":{height:`7px`,width:`14px`,position:`absolute`,zIndex:-1,overflow:`hidden`,"&:before, &:after":{content:`''`,position:`absolute`,width:0,height:0,borderLeft:`7px solid transparent`,borderRight:`7px solid transparent`},".cm-tooltip-above &":{bottom:`-7px`,"&:before":{borderTop:`7px solid #bbb`},"&:after":{borderTop:`7px solid #f5f5f5`,bottom:`1px`}},".cm-tooltip-below &":{top:`-7px`,"&:before":{borderBottom:`7px solid #bbb`},"&:after":{borderBottom:`7px solid #f5f5f5`,top:`1px`}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:`#333338`,borderBottomColor:`#333338`},"&:after":{borderTopColor:`transparent`,borderBottomColor:`transparent`}}}),cl={x:0,y:0},ll=C.define({enables:[al,sl]}),ul=C.define({combine:e=>e.reduce((e,t)=>e.concat(t),[])}),dl=class e{static create(t){return new e(t)}constructor(e){this.view=e,this.mounted=!1,this.dom=document.createElement(`div`),this.dom.classList.add(`cm-tooltip-hover`),this.manager=new el(e,ul,(e,t)=>this.createHostedView(e,t),e=>e.dom.remove())}createHostedView(e,t){let n=e.create(this.view);return n.dom.classList.add(`cm-tooltip-section`),this.dom.insertBefore(n.dom,t?t.dom.nextSibling:this.dom.firstChild),this.mounted&&n.mount&&n.mount(this.view),n}mount(e){for(let t of this.manager.tooltipViews)t.mount&&t.mount(e);this.mounted=!0}positioned(e){for(let t of this.manager.tooltipViews)t.positioned&&t.positioned(e)}update(e){this.manager.update(e)}destroy(){var e;for(let t of this.manager.tooltipViews)(e=t.destroy)==null||e.call(t)}passProp(e){let t;for(let n of this.manager.tooltipViews){let r=n[e];if(r!==void 0){if(t===void 0)t=r;else if(t!==r)return}}return t}get offset(){return this.passProp(`offset`)}get getCoords(){return this.passProp(`getCoords`)}get overlap(){return this.passProp(`overlap`)}get resize(){return this.passProp(`resize`)}},fl=ll.compute([ul],e=>{let t=e.facet(ul);return t.length===0?null:{pos:Math.min(...t.map(e=>e.pos)),end:Math.max(...t.map(e=>e.end??e.pos)),create:dl.create,above:t[0].above,arrow:t.some(e=>e.arrow)}}),pl=C.define(),ml=class{constructor(e,t,n,r,i,a){this.view=e,this.source=t,this.field=n,this.locked=r,this.setHover=i,this.hoverTime=a,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:e.dom,time:0},this.checkHover=this.checkHover.bind(this),e.dom.addEventListener(`mouseleave`,this.mouseleave=this.mouseleave.bind(this)),e.dom.addEventListener(`mousemove`,this.mousemove=this.mousemove.bind(this))}update(e){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active.length)return;let e=Date.now()-this.lastMove.time;e<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-e):this.startHover()}startHover(){clearTimeout(this.restartTimeout);let{view:e,lastMove:t}=this,n=e.docView.tile.nearest(t.target);if(!n)return;let r,i=1;if(n.isWidget())r=n.posAtStart;else{if(r=e.posAtCoords(t),r==null)return;let n=e.coordsAtPos(r);if(!n||t.y<n.top||t.y>n.bottom||t.x<n.left-e.defaultCharacterWidth||t.x>n.right+e.defaultCharacterWidth)return;let a=e.bidiSpans(e.state.doc.lineAt(r)).find(e=>e.from<=r&&e.to>=r),o=a&&a.dir==N.RTL?-1:1;i=t.x<n.left?-o:o}this.activateHover(e,r,i)}activateHover(e,t,n,r){let i=this.source(e,t,n),a=t=>{if(t&&(!Array.isArray(t)||t.length)){let n=Array.isArray(t)?t:[t];r&&this.locked.set(n,r),e.dispatch({effects:this.setHover.of(n)})}};if(i&&`then`in i){let n=this.pending={pos:t};i.then(e=>{this.pending==n&&(this.pending=null,a(e))},t=>Ai(e.state,t,`hover tooltip`))}else a(i)}get tooltip(){let e=this.view.plugin(al),t=e?e.manager.tooltips.findIndex(e=>e.create==dl.create):-1;return t>-1?e.manager.tooltipViews[t]:null}mousemove(e){this.lastMove={x:e.clientX,y:e.clientY,target:e.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime));let{active:t,tooltip:n}=this;if(t.length&&!this.locked.has(t)&&n&&!gl(n.dom,e)||this.pending){let{pos:n}=t[0]||this.pending,r=t[0]?.end??n;(n==r?this.view.posAtCoords(this.lastMove)!=n:!_l(this.view,n,r,e.clientX,e.clientY))&&(this.view.dispatch({effects:this.setHover.of([])}),this.pending=null)}}mouseleave(e){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1;let{active:t}=this;if(t.length&&!this.locked.has(t)){let{tooltip:t}=this;t&&t.dom.contains(e.relatedTarget)?this.watchTooltipLeave(t.dom):this.view.dispatch({effects:this.setHover.of([])})}}watchTooltipLeave(e){let t=n=>{e.removeEventListener(`mouseleave`,t);let{active:r}=this;r.length&&!this.locked.has(r)&&!this.view.dom.contains(n.relatedTarget)&&this.view.dispatch({effects:this.setHover.of([])})};e.addEventListener(`mouseleave`,t)}destroy(){clearTimeout(this.hoverTimeout),clearTimeout(this.restartTimeout),this.view.dom.removeEventListener(`mouseleave`,this.mouseleave),this.view.dom.removeEventListener(`mousemove`,this.mousemove)}},hl=4;function gl(e,t){let{left:n,right:r,top:i,bottom:a}=e.getBoundingClientRect(),o;if(o=e.querySelector(`.cm-tooltip-arrow`)){let e=o.getBoundingClientRect();i=Math.min(e.top,i),a=Math.max(e.bottom,a)}return t.clientX>=n-hl&&t.clientX<=r+hl&&t.clientY>=i-hl&&t.clientY<=a+hl}function _l(e,t,n,r,i,a){let o=e.scrollDOM.getBoundingClientRect(),s=e.documentTop+e.documentPadding.top+e.contentHeight;if(o.left>r||o.right<r||o.top>i||Math.min(o.bottom,s)<i)return!1;let c=e.posAtCoords({x:r,y:i},!1);return c>=t&&c<=n}function vl(e,t={}){let n=w.define(),r=new WeakMap,i=jt.define({create(){return[]},update(e,a){let o=r.get(e);if(e.length&&(t.hideOnChange&&(a.docChanged||a.selection)||o&&o(a)?e=[]:t.hideOn&&(e=e.filter(e=>!t.hideOn(a,e)))),a.docChanged&&e.length){let t=[];for(let n of e){let e=a.changes.mapPos(n.pos,-1,pt.TrackDel);if(e!=null){let r=Object.assign(Object.create(null),n);r.pos=e,r.end!=null&&(r.end=a.changes.mapPos(r.end)),t.push(r)}}e=t}for(let t of a.effects)t.is(n)&&(e=t.value,o=void 0),(t.is(xl)&&!t.value||t.value==i)&&(e=[]);return e.length&&o&&r.set(e,o),e},provide:e=>ul.from(e)}),a=F.define(a=>new ml(a,e,i,r,n,t.hoverTime||300));return{active:i,extension:[i,a,pl.of(a),fl]}}function yl(e,t,n,r={}){let i=e.state.facet(pl).map(t=>e.plugin(t)).filter(e=>!!e);if(r.tooltip&&r.tooltip.active){let e=i.find(e=>e.field==r.tooltip.active);e&&(i=[e])}for(let a of i)a.activateHover(e,t,n,r.until??(()=>!1))}function bl(e,t){let n=e.plugin(al);if(!n)return null;let r=n.manager.tooltips.indexOf(t);return r<0?null:n.manager.tooltipViews[r]}var xl=w.define(),Sl=C.define({combine(e){let t,n;for(let r of e)t=t||r.topContainer,n=n||r.bottomContainer;return{topContainer:t,bottomContainer:n}}});function Cl(e,t){let n=e.plugin(wl),r=n?n.specs.indexOf(t):-1;return r>-1?n.panels[r]:null}var wl=F.fromClass(class{constructor(e){this.input=e.state.facet(Dl),this.specs=this.input.filter(e=>e),this.panels=this.specs.map(t=>t(e));let t=e.state.facet(Sl);this.top=new Tl(e,!0,t.topContainer),this.bottom=new Tl(e,!1,t.bottomContainer),this.top.sync(this.panels.filter(e=>e.top)),this.bottom.sync(this.panels.filter(e=>!e.top));for(let e of this.panels)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}update(e){let t=e.state.facet(Sl);this.top.container!=t.topContainer&&(this.top.sync([]),this.top=new Tl(e.view,!0,t.topContainer)),this.bottom.container!=t.bottomContainer&&(this.bottom.sync([]),this.bottom=new Tl(e.view,!1,t.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let n=e.state.facet(Dl);if(n!=this.input){let t=n.filter(e=>e),r=[],i=[],a=[],o=[];for(let n of t){let t=this.specs.indexOf(n),s;t<0?(s=n(e.view),o.push(s)):(s=this.panels[t],s.update&&s.update(e)),r.push(s),(s.top?i:a).push(s)}this.specs=t,this.panels=r,this.top.sync(i),this.bottom.sync(a);for(let e of o)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}else for(let t of this.panels)t.update&&t.update(e)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:e=>R.scrollMargins.of(t=>{let n=t.plugin(e);return n&&{top:n.top.scrollMargin(),bottom:n.bottom.scrollMargin()}})}),Tl=class{constructor(e,t,n){this.view=e,this.top=t,this.container=n,this.dom=void 0,this.classes=``,this.panels=[],this.syncClasses()}sync(e){for(let t of this.panels)t.destroy&&e.indexOf(t)<0&&t.destroy();this.panels=e,this.syncDOM()}syncDOM(){if(this.panels.length==0){this.dom&&(this.dom.remove(),this.dom=void 0);return}if(!this.dom){this.dom=document.createElement(`div`),this.dom.className=this.top?`cm-panels cm-panels-top`:`cm-panels cm-panels-bottom`;let e=this.container||this.view.dom;e.insertBefore(this.dom,this.top?e.firstChild:null)}let e=this.dom.firstChild;for(let t of this.panels)if(t.dom.parentNode==this.dom){for(;e!=t.dom;)e=El(e);e=e.nextSibling}else this.dom.insertBefore(t.dom,e);for(;e;)e=El(e)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let e of this.classes.split(` `))e&&this.container.classList.remove(e);for(let e of(this.classes=this.view.themeClasses).split(` `))e&&this.container.classList.add(e)}}};function El(e){let t=e.nextSibling;return e.remove(),t}var Dl=C.define({enables:wl});function Ol(e,t){let n,r=new Promise(e=>n=e),i=e=>Nl(e,t,n);e.state.field(Al,!1)?e.dispatch({effects:jl.of(i)}):e.dispatch({effects:w.appendConfig.of(Al.init(()=>[i]))});let a=Ml.of(i);return{close:a,result:r.then(t=>((e.win.queueMicrotask||(t=>e.win.setTimeout(t,10)))(()=>{e.state.field(Al).indexOf(i)>-1&&e.dispatch({effects:a})}),t))}}function kl(e,t){let n=e.state.field(Al,!1)||[];for(let r of n){let n=Cl(e,r);if(n&&n.dom.classList.contains(t))return n}return null}var Al=jt.define({create(){return[]},update(e,t){for(let n of t.effects)n.is(jl)?e=[n.value].concat(e):n.is(Ml)&&(e=e.filter(e=>e!=n.value));return e},provide:e=>Dl.computeN([e],t=>t.field(e))}),jl=w.define(),Ml=w.define();function Nl(e,t,n){let r=t.content?t.content(e,()=>o(null)):null;if(!r){if(r=O(`form`),t.input){let e=O(`input`,t.input);/^(text|password|number|email|tel|url)$/.test(e.type)&&e.classList.add(`cm-textfield`),e.name||(e.name=`input`),r.appendChild(O(`label`,(t.label||``)+`: `,e))}else r.appendChild(document.createTextNode(t.label||``));r.appendChild(document.createTextNode(` `)),r.appendChild(O(`button`,{class:`cm-button`,type:`submit`},t.submitLabel||`OK`))}let i=r.nodeName==`FORM`?[r]:r.querySelectorAll(`form`);for(let e=0;e<i.length;e++){let t=i[e];t.addEventListener(`keydown`,e=>{e.keyCode==27?(e.preventDefault(),o(null)):e.keyCode==13&&(e.preventDefault(),o(t))}),t.addEventListener(`submit`,e=>{e.preventDefault(),o(t)})}let a=O(`div`,r,O(`button`,{onclick:()=>o(null),"aria-label":e.state.phrase(`close`),class:`cm-dialog-close`,type:`button`},[`×`]));t.class&&(a.className=t.class),a.classList.add(`cm-dialog`);function o(t){a.contains(a.ownerDocument.activeElement)&&e.focus(),n(t)}return{dom:a,top:t.top,mount:()=>{if(t.focus){let e;e=typeof t.focus==`string`?r.querySelector(t.focus):r.querySelector(`input`)||r.querySelector(`button`),e&&`select`in e?e.select():e&&`focus`in e&&e.focus()}}}}var Pl=class extends pn{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}};Pl.prototype.elementClass=``,Pl.prototype.toDOM=void 0,Pl.prototype.mapMode=pt.TrackBefore,Pl.prototype.startSide=Pl.prototype.endSide=-1,Pl.prototype.point=!0;var Fl=C.define(),Il=C.define(),Ll={class:``,renderEmptyElements:!1,elementStyle:``,markers:()=>D.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{},side:`before`},Rl=C.define();function zl(e){return[Vl(),Rl.of({...Ll,...e})]}var Bl=C.define({combine:e=>e.some(e=>e)});function Vl(e){let t=[Hl];return e&&e.fixed===!1&&t.push(Bl.of(!0)),t}var Hl=F.fromClass(class{constructor(e){this.view=e,this.domAfter=null,this.prevViewport=e.viewport,this.dom=document.createElement(`div`),this.dom.className=`cm-gutters cm-gutters-before`,this.dom.setAttribute(`aria-hidden`,`true`),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.gutters=e.state.facet(Rl).map(t=>new Kl(e,t)),this.fixed=!e.state.facet(Bl);for(let e of this.gutters)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position=`sticky`),this.syncGutters(!1),e.scrollDOM.insertBefore(this.dom,e.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement(`div`),this.domAfter.className=`cm-gutters cm-gutters-after`,this.domAfter.setAttribute(`aria-hidden`,`true`),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.domAfter.style.position=this.fixed?`sticky`:``,this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(e){if(this.updateGutters(e)){let t=this.prevViewport,n=e.view.viewport,r=Math.min(t.to,n.to)-Math.max(t.from,n.from);this.syncGutters(r<(n.to-n.from)*.8)}if(e.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+`px`;this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(Bl)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?`sticky`:``,this.domAfter&&(this.domAfter.style.position=this.fixed?`sticky`:``)),this.prevViewport=e.view.viewport}syncGutters(e){let t=this.dom.nextSibling;e&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let n=D.iter(this.view.state.facet(Fl),this.view.viewport.from),r=[],i=this.gutters.map(e=>new Gl(e,this.view.viewport,-this.view.documentPadding.top));for(let e of this.view.viewportLineBlocks)if(r.length&&(r=[]),Array.isArray(e.type)){let t=!0;for(let a of e.type)if(a.type==A.Text&&t){Wl(n,r,a.from);for(let e of i)e.line(this.view,a,r);t=!1}else if(a.widget)for(let e of i)e.widget(this.view,a)}else if(e.type==A.Text){Wl(n,r,e.from);for(let t of i)t.line(this.view,e,r)}else if(e.widget)for(let t of i)t.widget(this.view,e);for(let e of i)e.finish();e&&(this.view.scrollDOM.insertBefore(this.dom,t),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(e){let t=e.startState.facet(Rl),n=e.state.facet(Rl),r=e.docChanged||e.heightChanged||e.viewportChanged||!D.eq(e.startState.facet(Fl),e.state.facet(Fl),e.view.viewport.from,e.view.viewport.to);if(t==n)for(let t of this.gutters)t.update(e)&&(r=!0);else{r=!0;let i=[];for(let r of n){let n=t.indexOf(r);n<0?i.push(new Kl(this.view,r)):(this.gutters[n].update(e),i.push(this.gutters[n]))}for(let e of this.gutters)e.dom.remove(),i.indexOf(e)<0&&e.destroy();for(let e of i)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.gutters=i}return r}destroy(){for(let e of this.gutters)e.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:e=>R.scrollMargins.of(t=>{let n=t.plugin(e);if(!n||n.gutters.length==0||!n.fixed)return null;let r=n.dom.offsetWidth*t.scaleX,i=n.domAfter?n.domAfter.offsetWidth*t.scaleX:0;return t.textDirection==N.LTR?{left:r,right:i}:{right:r,left:i}})});function Ul(e){return Array.isArray(e)?e:[e]}function Wl(e,t,n){for(;e.value&&e.from<=n;)e.from==n&&t.push(e.value),e.next()}var Gl=class{constructor(e,t,n){this.gutter=e,this.height=n,this.i=0,this.cursor=D.iter(e.markers,t.from)}addElement(e,t,n){let{gutter:r}=this,i=(t.top-this.height)/e.scaleY,a=t.height/e.scaleY;if(this.i==r.elements.length){let t=new ql(e,a,i,n);r.elements.push(t),r.dom.appendChild(t.dom)}else r.elements[this.i].update(e,a,i,n);this.height=t.bottom,this.i++}line(e,t,n){let r=[];Wl(this.cursor,r,t.from),n.length&&(r=r.concat(n));let i=this.gutter.config.lineMarker(e,t,r);i&&r.unshift(i);let a=this.gutter;(r.length!=0||a.config.renderEmptyElements)&&this.addElement(e,t,r)}widget(e,t){let n=this.gutter.config.widgetMarker(e,t.widget,t),r=n?[n]:null;for(let n of e.state.facet(Il)){let i=n(e,t.widget,t);i&&(r||(r=[])).push(i)}r&&this.addElement(e,t,r)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let t=e.elements.pop();e.dom.removeChild(t.dom),t.destroy()}}},Kl=class{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement(`div`),this.dom.className=`cm-gutter`+(this.config.class?` `+this.config.class:``);for(let n in t.domEventHandlers)this.dom.addEventListener(n,r=>{let i=r.target,a;if(i!=this.dom&&this.dom.contains(i)){for(;i.parentNode!=this.dom;)i=i.parentNode;let e=i.getBoundingClientRect();a=(e.top+e.bottom)/2}else a=r.clientY;let o=e.lineBlockAtHeight(a-e.documentTop);t.domEventHandlers[n](e,o,r)&&r.preventDefault()});this.markers=Ul(t.markers(e)),t.initialSpacer&&(this.spacer=new ql(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+=`visibility: hidden; pointer-events: none`)}update(e){let t=this.markers;if(this.markers=Ul(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let t=this.config.updateSpacer(this.spacer.markers[0],e);t!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[t])}let n=e.view.viewport;return!D.eq(this.markers,t,n.from,n.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}},ql=class{constructor(e,t,n,r){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement(`div`),this.dom.className=`cm-gutterElement`,this.update(e,t,n,r)}update(e,t,n,r){this.height!=t&&(this.height=t,this.dom.style.height=t+`px`),this.above!=n&&(this.dom.style.marginTop=(this.above=n)?n+`px`:``),Jl(this.markers,r)||this.setMarkers(e,r)}setMarkers(e,t){let n=`cm-gutterElement`,r=this.dom.firstChild;for(let i=0,a=0;;){let o=a,s=i<t.length?t[i++]:null,c=!1;if(s){let e=s.elementClass;e&&(n+=` `+e);for(let e=a;e<this.markers.length;e++)if(this.markers[e].compare(s)){o=e,c=!0;break}}else o=this.markers.length;for(;a<o;){let e=this.markers[a++];if(e.toDOM){e.destroy(r);let t=r.nextSibling;r.remove(),r=t}}if(!s)break;s.toDOM&&(c?r=r.nextSibling:this.dom.insertBefore(s.toDOM(e),r)),c&&a++}this.dom.className=n,this.markers=t}destroy(){this.setMarkers(null,[])}};function Jl(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].compare(t[n]))return!1;return!0}var Yl=C.define(),Xl=C.define(),Zl=C.define({combine(e){return fn(e,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let n=Object.assign({},e);for(let e in t){let r=n[e],i=t[e];n[e]=r?(e,t,n)=>r(e,t,n)||i(e,t,n):i}return n}})}}),Ql=class extends Pl{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}};function $l(e,t){return e.state.facet(Zl).formatNumber(t,e.state)}var eu=Rl.compute([Zl],e=>({class:`cm-lineNumbers`,renderEmptyElements:!1,markers(e){return e.state.facet(Yl)},lineMarker(e,t,n){return n.some(e=>e.toDOM)?null:new Ql($l(e,e.state.doc.lineAt(t.from).number))},widgetMarker:(e,t,n)=>{for(let r of e.state.facet(Xl)){let i=r(e,t,n);if(i)return i}return null},lineMarkerChange:e=>e.startState.facet(Zl)!=e.state.facet(Zl),initialSpacer(e){return new Ql($l(e,nu(e.state.doc.lines)))},updateSpacer(e,t){let n=$l(t.view,nu(t.view.state.doc.lines));return n==e.number?e:new Ql(n)},domEventHandlers:e.facet(Zl).domEventHandlers,side:`before`}));function tu(e={}){return[Zl.of(e),Vl(),eu]}function nu(e){let t=9;for(;t<e;)t=t*10+9;return t}var ru=new class extends Pl{constructor(){super(...arguments),this.elementClass=`cm-activeLineGutter`}},iu=Fl.compute([`selection`],e=>{let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.head).from;i>n&&(n=i,t.push(ru.range(i)))}return D.of(t)});function au(){return iu}var ou=1024,su=0,cu=class{constructor(e,t){this.from=e,this.to=t}},z=class{constructor(e={}){this.id=su++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=du.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}};z.closedBy=new z({deserialize:e=>e.split(` `)}),z.openedBy=new z({deserialize:e=>e.split(` `)}),z.group=new z({deserialize:e=>e.split(` `)}),z.isolate=new z({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),z.contextHash=new z({perNode:!0}),z.lookAhead=new z({perNode:!0}),z.mounted=new z({perNode:!0});var lu=class{constructor(e,t,n,r=!1){this.tree=e,this.overlay=t,this.parser=n,this.bracketed=r}static get(e){return e&&e.props&&e.props[z.mounted.id]}},uu=Object.create(null),du=class e{constructor(e,t,n,r=0){this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){let n=t.props&&t.props.length?Object.create(null):uu,r=+!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(let e of t.props)if(Array.isArray(e)||(e=e(i)),e){if(e[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[e[0].id]=e[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;let t=this.prop(z.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let r of n.split(` `))t[r]=e[n];return e=>{for(let n=e.prop(z.group),r=-1;r<(n?n.length:0);r++){let i=t[r<0?e.name:n[r]];if(i)return i}}}};du.none=new du(``,Object.create(null),0,8);var fu=class e{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw RangeError(`Node type ids should correspond to array positions when creating a node set`)}extend(...t){let n=[];for(let e of this.types){let r=null;for(let n of t){let t=n(e);if(t){r||(r=Object.assign({},e.props));let n=t[1],i=t[0];i.combine&&i.id in r&&(n=i.combine(r[i.id],n)),r[i.id]=n}}n.push(r?new du(e.name,r,e.id,e.flags):e)}return new e(n)}},pu=new WeakMap,mu=new WeakMap,B;(function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`})(B||(B={}));var V=class e{constructor(e,t,n,r,i){if(this.type=e,this.children=t,this.positions=n,this.length=r,this.props=null,i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props[typeof e==`number`?e:e.id]=t}}toString(){let e=lu.get(this);if(e&&!e.overlay)return e.tree.toString();let t=``;for(let e of this.children){let n=e.toString();n&&(t&&(t+=`,`),t+=n)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?`(`+t+`)`:``):t}cursor(e=0){return new Ou(this.topNode,e)}cursorAt(e,t=0,n=0){let r=new Ou(pu.get(this)||this.topNode);return r.moveTo(e,t),pu.set(this,r._tree),r}get topNode(){return new bu(this,0,0,null)}resolve(e,t=0){let n=vu(pu.get(this)||this.topNode,e,t,!1);return pu.set(this,n),n}resolveInner(e,t=0){let n=vu(mu.get(this)||this.topNode,e,t,!0);return mu.set(this,n),n}resolveStack(e,t=0){return Du(this,e,t)}iterate(e){let{enter:t,leave:n,from:r=0,to:i=this.length}=e,a=e.mode||0,o=(a&B.IncludeAnonymous)>0;for(let e=this.cursor(a|B.IncludeAnonymous);;){let a=!1;if(e.from<=i&&e.to>=r&&(!o&&e.type.isAnonymous||t(e)!==!1)){if(e.firstChild())continue;a=!0}for(;a&&n&&(o||!e.type.isAnonymous)&&n(e),!e.nextSibling();){if(!e.parent())return;a=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(t={}){return this.children.length<=8?this:Nu(du.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,r)=>new e(this.type,t,n,r,this.propValues),t.makeTree||((t,n,r)=>new e(du.none,t,n,r)))}static build(e){return Au(e)}};V.empty=new V(du.none,[],[],0);var hu=class e{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new e(this.buffer,this.index)}},gu=class e{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return du.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(`,`)}childString(e){let t=this.buffer[e],n=this.buffer[e+3],r=this.set.types[t],i=r.name;if(/\W/.test(i)&&!r.isError&&(i=JSON.stringify(i)),e+=4,n==e)return i;let a=[];for(;e<n;)a.push(this.childString(e)),e=this.buffer[e+3];return i+`(`+a.join(`,`)+`)`}findChild(e,t,n,r,i){let{buffer:a}=this,o=-1;for(let s=e;s!=t&&!(_u(i,r,a[s+1],a[s+2])&&(o=s,n>0));s=a[s+3]);return o}slice(t,n,r){let i=this.buffer,a=new Uint16Array(n-t),o=0;for(let e=t,s=0;e<n;){a[s++]=i[e++],a[s++]=i[e++]-r;let n=a[s++]=i[e++]-r;a[s++]=i[e++]-t,o=Math.max(o,n)}return new e(a,o,this.set)}};function _u(e,t,n,r){switch(e){case-2:return n<t;case-1:return r>=t&&n<t;case 0:return n<t&&r>t;case 1:return n<=t&&r>t;case 2:return r>t;case 4:return!0}}function vu(e,t,n,r){for(;e.from==e.to||(n<1?e.from>=t:e.from>t)||(n>-1?e.to<=t:e.to<t);){let t=!r&&e instanceof bu&&e.index<0?null:e.parent;if(!t)return e;e=t}let i=r?0:B.IgnoreOverlays;if(r)for(let r=e,a=r.parent;a;r=a,a=r.parent)r instanceof bu&&r.index<0&&a.enter(t,n,i)?.from!=r.from&&(e=a);for(;;){let r=e.enter(t,n,i);if(!r)return e;e=r}}var yu=class{cursor(e=0){return new Ou(this,e)}getChild(e,t=null,n=null){let r=xu(this,e,t,n);return r.length?r[0]:null}getChildren(e,t=null,n=null){return xu(this,e,t,n)}resolve(e,t=0){return vu(this,e,t,!1)}resolveInner(e,t=0){return vu(this,e,t,!0)}matchContext(e){return Su(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(n=t,t=e.prevSibling):t=e}return n}get node(){return this}get next(){return this.parent}},bu=class e extends yu{constructor(e,t,n,r){super(),this._tree=e,this.from=t,this.index=n,this._parent=r}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,n,r,i,a=0){for(let o=this;;){for(let{children:s,positions:c}=o._tree,l=n>0?s.length:-1;t!=l;t+=n){let l=s[t],u=c[t]+o.from,d;if(a&B.EnterBracketed&&l instanceof V&&(d=lu.get(l))&&!d.overlay&&d.bracketed&&r>=u&&r<=u+l.length||_u(i,r,u,u+l.length)){if(l instanceof gu){if(a&B.ExcludeBuffers)continue;let e=l.findChild(0,l.buffer.length,n,r-u,i);if(e>-1)return new wu(new Cu(o,l,t,u),null,e)}else if(a&B.IncludeAnonymous||!l.type.isAnonymous||ku(l)){let s;if(!(a&B.IgnoreMounts)&&(s=lu.get(l))&&!s.overlay)return new e(s.tree,u,t,o);let c=new e(l,u,t,o);return a&B.IncludeAnonymous||!c.type.isAnonymous?c:c.nextChild(n<0?l.children.length-1:0,n,r,i,a)}}}if(a&B.IncludeAnonymous||!o.type.isAnonymous||(t=o.index>=0?o.index+n:n<0?-1:o._parent._tree.children.length,o=o._parent,!o))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(t,n,r=0){let i;if(!(r&B.IgnoreOverlays)&&(i=lu.get(this._tree))&&i.overlay){let a=t-this.from,o=r&B.EnterBracketed&&i.bracketed;for(let{from:t,to:r}of i.overlay)if((n>0||o?t<=a:t<a)&&(n<0||o?r>=a:r>a))return new e(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,n,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}};function xu(e,t,n,r){let i=e.cursor(),a=[];if(!i.firstChild())return a;if(n!=null){for(let e=!1;!e;)if(e=i.type.is(n),!i.nextSibling())return a}for(;;){if(r!=null&&i.type.is(r))return a;if(i.type.is(t)&&a.push(i.node),!i.nextSibling())return r==null?a:[]}}function Su(e,t,n=t.length-1){for(let r=e;n>=0;r=r.parent){if(!r)return!1;if(!r.type.isAnonymous){if(t[n]&&t[n]!=r.name)return!1;n--}}return!0}var Cu=class{constructor(e,t,n,r){this.parent=e,this.buffer=t,this.index=n,this.start=r}},wu=class e extends yu{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(t,n,r){let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],t,n-this.context.start,r);return a<0?null:new e(this.context,this,a)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(t,n,r=0){if(r&B.ExcludeBuffers)return null;let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],n>0?1:-1,t-this.context.start,n);return a<0?null:new e(this.context,this,a)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:t}=this.context,n=t.buffer[this.index+3];return n<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new e(this.context,this._parent,n):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,n=this._parent?this._parent.index+4:0;return this.index==n?this.externalSibling(-1):new e(this.context,this._parent,t.findChild(n,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,r=this.index+4,i=n.buffer[this.index+3];if(i>r){let a=n.buffer[this.index+1];e.push(n.slice(r,i,a)),t.push(0)}return new V(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}};function Tu(e){if(!e.length)return null;let t=0,n=e[0];for(let r=1;r<e.length;r++){let i=e[r];(i.from>n.from||i.to<n.to)&&(n=i,t=r)}let r=n instanceof bu&&n.index<0?null:n.parent,i=e.slice();return r?i[t]=r:i.splice(t,1),new Eu(i,n)}var Eu=class{constructor(e,t){this.heads=e,this.node=t}get next(){return Tu(this.heads)}};function Du(e,t,n){let r=e.resolveInner(t,n),i=null;for(let e=r instanceof bu?r:r.context.parent;e;e=e.parent)if(e.index<0){let a=e.parent;(i||(i=[r])).push(a.resolve(t,n)),e=a}else{let a=lu.get(e.tree);if(a&&a.overlay&&a.overlay[0].from<=t&&a.overlay[a.overlay.length-1].to>=t){let o=new bu(a.tree,a.overlay[0].from+e.from,-1,e);(i||(i=[r])).push(vu(o,t,n,!1))}}return i?Tu(i):r}var Ou=class{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~B.EnterBracketed,e instanceof bu)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:r}=this.buffer;return this.type=t||r.set.types[r.buffer[e]],this.from=n+r.buffer[e+1],this.to=n+r.buffer[e+2],!0}yield(e){return e?e instanceof bu?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:r}=this.buffer,i=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.buffer.start,n);return i<0?!1:(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&B.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&B.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&B.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let e=n<0?0:this.stack[n]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(e)}return n<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:r}=this;if(r){if(e>0){if(this.index<r.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(r.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:n}=r)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let r=t+e,i=e<0?-1:n._tree.children.length;r!=i;r+=e){let e=n._tree.children[r];if(this.mode&B.IncludeAnonymous||e instanceof gu||!e.type.isAnonymous||ku(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)scan:for(let r=this.index,i=this.stack.length;i>=0;){for(let a=e;a;a=a._parent)if(a.index==r){if(r==this.index)return a;t=a,n=i+1;break scan}r=this.stack[--i]}for(let e=n;e<this.stack.length;e++)t=new wu(this.buffer,t,this.stack[e]);return this.bufferNode=new wu(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let r=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(r=!0)}for(;;){if(r&&t&&t(this),r=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,r=!0}}}matchContext(e){if(!this.buffer)return Su(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let r=e.length-1,i=this.stack.length-1;r>=0;i--){if(i<0)return Su(this._tree,e,r);let a=n[t.buffer[this.stack[i]]];if(!a.isAnonymous){if(e[r]&&e[r]!=a.name)return!1;r--}}return!0}};function ku(e){return e.children.some(e=>e instanceof gu||!e.type.isAnonymous||ku(e))}function Au(e){let{buffer:t,nodeSet:n,maxBufferLength:r=ou,reused:i=[],minRepeatType:a=n.types.length}=e,o=Array.isArray(t)?new hu(t,t.length):t,s=n.types,c=0,l=0;function u(e,t,_,v,y,ee){let{id:te,start:ne,end:re,size:ie}=o,ae=l,oe=c;if(ie<0){if(o.next(),ie==-1){let t=i[te];_.push(t),v.push(ne-e);return}if(ie==-3){c=te;return}if(ie==-4){l=te;return}throw RangeError(`Unrecognized record size: ${ie}`)}let se=s[te],ce,le,ue=ne-e;if(re-ne<=r&&(le=h(o.pos-t,y))){let t=new Uint16Array(le.size-le.skip),r=o.pos-le.size,i=t.length;for(;o.pos>r;)i=g(le.start,t,i);ce=new gu(t,re-le.start,n),ue=le.start-e}else{let e=o.pos-ie;o.next();let t=[],n=[],i=te>=a?te:-1,s=0,c=re;for(;o.pos>e;)i>=0&&o.id==i&&o.size>=0?(o.end<=c-r&&(p(t,n,ne,s,o.end,c,i,ae,oe),s=t.length,c=o.end),o.next()):ee>2500?d(ne,e,t,n):u(ne,e,t,n,i,ee+1);if(i>=0&&s>0&&s<t.length&&p(t,n,ne,s,ne,c,i,ae,oe),t.reverse(),n.reverse(),i>-1&&s>0){let e=f(se,oe);ce=Nu(se,t,n,0,t.length,0,re-ne,e,e)}else ce=m(se,t,n,re-ne,ae-re,oe)}_.push(ce),v.push(ue)}function d(e,t,i,a){let s=[],c=0,l=-1;for(;o.pos>t;){let{id:e,start:t,end:n,size:i}=o;if(i>4)o.next();else if(l>-1&&t<l)break;else l<0&&(l=n-r),s.push(e,t,n),c++,o.next()}if(c){let t=new Uint16Array(c*4),r=s[s.length-2];for(let e=s.length-3,n=0;e>=0;e-=3)t[n++]=s[e],t[n++]=s[e+1]-r,t[n++]=s[e+2]-r,t[n++]=n;i.push(new gu(t,s[2]-r,n)),a.push(r-e)}}function f(e,t){return(n,r,i)=>{let a=0,o=n.length-1,s,c;if(o>=0&&(s=n[o])instanceof V){if(!o&&s.type==e&&s.length==i)return s;(c=s.prop(z.lookAhead))&&(a=r[o]+s.length+c)}return m(e,n,r,i,a,t)}}function p(e,t,r,i,a,o,s,c,l){let u=[],d=[];for(;e.length>i;)u.push(e.pop()),d.push(t.pop()+r-a);e.push(m(n.types[s],u,d,o-a,c-o,l)),t.push(a-r)}function m(e,t,n,r,i,a,o){if(a){let e=[z.contextHash,a];o=o?[e].concat(o):[e]}if(i>25){let e=[z.lookAhead,i];o=o?[e].concat(o):[e]}return new V(e,t,n,r,o)}function h(e,t){let n=o.fork(),i=0,s=0,c=0,l=n.end-r,u={size:0,start:0,skip:0};scan:for(let r=n.pos-e;n.pos>r;){let e=n.size;if(n.id==t&&e>=0){u.size=i,u.start=s,u.skip=c,c+=4,i+=4,n.next();continue}let o=n.pos-e;if(e<0||o<r||n.start<l)break;let d=n.id>=a?4:0,f=n.start;for(n.next();n.pos>o;){if(n.size<0){if(n.size==-3||n.size==-4)d+=4;else break scan}else n.id>=a&&(d+=4);n.next()}s=f,i+=e,c+=d}return(t<0||i==e)&&(u.size=i,u.start=s,u.skip=c),u.size>4?u:void 0}function g(e,t,n){let{id:r,start:i,end:s,size:u}=o;if(o.next(),u>=0&&r<a){let a=n;if(u>4){let r=o.pos-(u-4);for(;o.pos>r;)n=g(e,t,n)}t[--n]=a,t[--n]=s-e,t[--n]=i-e,t[--n]=r}else u==-3?c=r:u==-4&&(l=r);return n}let _=[],v=[];for(;o.pos>0;)u(e.start||0,e.bufferStart||0,_,v,-1,0);let y=e.length??(_.length?v[0]+_[0].length:0);return new V(s[e.topID],_.reverse(),v.reverse(),y)}var ju=new WeakMap;function Mu(e,t){if(!e.isAnonymous||t instanceof gu||t.type!=e)return 1;let n=ju.get(t);if(n==null){n=1;for(let r of t.children){if(r.type!=e||!(r instanceof V)){n=1;break}n+=Mu(e,r)}ju.set(t,n)}return n}function Nu(e,t,n,r,i,a,o,s,c){let l=0;for(let n=r;n<i;n++)l+=Mu(e,t[n]);let u=Math.ceil(l*1.5/8),d=[],f=[];function p(t,n,r,i,o){for(let s=r;s<i;){let r=s,l=n[s],m=Mu(e,t[s]);for(s++;s<i;s++){let n=Mu(e,t[s]);if(m+n>=u)break;m+=n}if(s==r+1){if(m>u){let e=t[r];p(e.children,e.positions,0,e.children.length,n[r]+o);continue}d.push(t[r])}else{let i=n[s-1]+t[s-1].length-l;d.push(Nu(e,t,n,r,s,l,i,null,c))}f.push(l+o-a)}}return p(t,n,r,i,0),(s||c)(d,f,o)}var Pu=class e{constructor(e,t,n,r,i=!1,a=!1){this.from=e,this.to=t,this.tree=n,this.offset=r,this.open=!!i|(a?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(t,n=[],r=!1){let i=[new e(0,t.length,t,0,!1,r)];for(let e of n)e.to>t.length&&i.push(e);return i}static applyChanges(t,n,r=128){if(!n.length)return t;let i=[],a=1,o=t.length?t[0]:null;for(let s=0,c=0,l=0;;s++){let u=s<n.length?n[s]:null,d=u?u.fromA:1e9;if(d-c>=r)for(;o&&o.from<d;){let n=o;if(c>=n.from||d<=n.to||l){let t=Math.max(n.from,c)-l,r=Math.min(n.to,d)-l;n=t>=r?null:new e(t,r,n.tree,n.offset+l,s>0,!!u)}if(n&&i.push(n),o.to>d)break;o=a<t.length?t[a++]:null}if(!u)break;c=u.toA,l=u.toA-u.toB}return i}},Fu=class{startParse(e,t,n){return typeof e==`string`&&(e=new Iu(e)),n=n?n.length?n.map(e=>new cu(e.from,e.to)):[new cu(0,0)]:[new cu(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let r=this.startParse(e,t,n);for(;;){let e=r.advance();if(e)return e}}},Iu=class{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}};new z({perNode:!0});var Lu=0,Ru=class e{constructor(e,t,n,r){this.name=e,this.set=t,this.base=n,this.modified=r,this.id=Lu++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(t,n){let r=typeof t==`string`?t:`?`;if(t instanceof e&&(n=t),n?.base)throw Error(`Can not derive from a modified tag`);let i=new e(r,[],null,[]);if(i.set.push(i),n)for(let e of n.set)i.set.push(e);return i}static defineModifier(e){let t=new Bu(e);return e=>e.modified.indexOf(t)>-1?e:Bu.get(e.base||e,e.modified.concat(t).sort((e,t)=>e.id-t.id))}},zu=0,Bu=class e{constructor(e){this.name=e,this.instances=[],this.id=zu++}static get(t,n){if(!n.length)return t;let r=n[0].instances.find(e=>e.base==t&&Vu(n,e.modified));if(r)return r;let i=[],a=new Ru(t.name,i,t,n);for(let e of n)e.instances.push(a);let o=Hu(n);for(let n of t.set)if(!n.modified.length)for(let t of o)i.push(e.get(n,t));return a}};function Vu(e,t){return e.length==t.length&&e.every((e,n)=>e==t[n])}function Hu(e){let t=[[]];for(let n=0;n<e.length;n++)for(let r=0,i=t.length;r<i;r++)t.push(t[r].concat(e[n]));return t.sort((e,t)=>t.length-e.length)}function Uu(e){let t=Object.create(null);for(let n in e){let r=e[n];Array.isArray(r)||(r=[r]);for(let e of n.split(` `))if(e){let n=[],i=2,a=e;for(let t=0;;){if(a==`...`&&t>0&&t+3==e.length){i=1;break}let r=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!r)throw RangeError(`Invalid path: `+e);if(n.push(r[0]==`*`?``:r[0][0]==`"`?JSON.parse(r[0]):r[0]),t+=r[0].length,t==e.length)break;let o=e[t++];if(t==e.length&&o==`!`){i=0;break}if(o!=`/`)throw RangeError(`Invalid path: `+e);a=e.slice(t)}let o=n.length-1,s=n[o];if(!s)throw RangeError(`Invalid path: `+e);t[s]=new Gu(r,i,o>0?n.slice(0,o):null).sort(t[s])}}return Wu.add(t)}var Wu=new z({combine(e,t){let n,r,i;for(;e||t;){if(!e||t&&e.depth<=t.depth?(i=t,t=t.next):(i=e,e=e.next),n&&n.mode==i.mode&&!i.context&&!n.context)continue;let a=new Gu(i.tags,i.mode,i.context);n?n.next=a:r=a,n=a}return r}}),Gu=class{constructor(e,t,n,r){this.tags=e,this.mode=t,this.context=n,this.next=r}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}};Gu.empty=new Gu([],2,null);function Ku(e,t){let n=Object.create(null);for(let t of e)if(!Array.isArray(t.tag))n[t.tag.id]=t.class;else for(let e of t.tag)n[e.id]=t.class;let{scope:r,all:i=null}=t||{};return{style:e=>{let t=i;for(let r of e)for(let e of r.set){let r=n[e.id];if(r){t=t?t+` `+r:r;break}}return t},scope:r}}function qu(e,t){let n=null;for(let r of e){let e=r.style(t);e&&(n=n?n+` `+e:e)}return n}function Ju(e,t,n,r=0,i=e.length){let a=new Xu(r,Array.isArray(t)?t:[t],n);a.highlightRange(e.cursor(),r,i,``,a.highlighters),a.flush(i)}function Yu(e,t,n,r,i,a=0,o=e.length){let s=a;function c(t,n){if(!(t<=s)){for(let a=e.slice(s,t),o=0;;){let e=a.indexOf(`
`,o),t=e<0?a.length:e;if(t>o&&r(a.slice(o,t),n),e<0)break;i(),o=e+1}s=t}}Ju(t,n,(e,t,n)=>{c(e,``),c(t,n)},a,o),c(o,``)}var Xu=class{constructor(e,t,n){this.at=e,this.highlighters=t,this.span=n,this.class=``}startSpan(e,t){t!=this.class&&(this.flush(e),e>this.at&&(this.at=e),this.class=t)}flush(e){e>this.at&&this.class&&this.span(this.at,e,this.class)}highlightRange(e,t,n,r,i){let{type:a,from:o,to:s}=e;if(o>=n||s<=t)return;a.isTop&&(i=this.highlighters.filter(e=>!e.scope||e.scope(a)));let c=r,l=Zu(e)||Gu.empty,u=qu(i,l.tags);if(u&&(c&&(c+=` `),c+=u,l.mode==1&&(r+=(r?` `:``)+u)),this.startSpan(Math.max(t,o),c),l.opaque)return;let d=e.tree&&e.tree.prop(z.mounted);if(d&&d.overlay){let a=e.node.enter(d.overlay[0].from+o,1),l=this.highlighters.filter(e=>!e.scope||e.scope(d.tree.type)),u=e.firstChild();for(let f=0,p=o;;f++){let m=f<d.overlay.length?d.overlay[f]:null,h=m?m.from+o:s,g=Math.max(t,p),_=Math.min(n,h);if(g<_&&u)for(;e.from<_&&(this.highlightRange(e,g,_,r,i),this.startSpan(Math.min(_,e.to),c),!(e.to>=h||!e.nextSibling())););if(!m||h>n)break;p=m.to+o,p>t&&(this.highlightRange(a.cursor(),Math.max(t,m.from+o),Math.min(n,p),``,l),this.startSpan(Math.min(n,p),c))}u&&e.parent()}else if(e.firstChild()){d&&(r=``);do if(!(e.to<=t)){if(e.from>=n)break;this.highlightRange(e,t,n,r,i),this.startSpan(Math.min(n,e.to),c)}while(e.nextSibling());e.parent()}}};function Zu(e){let t=e.type.prop(Wu);for(;t&&t.context&&!e.matchContext(t.context);)t=t.next;return t||null}var H=Ru.define,Qu=H(),$u=H(),ed=H($u),td=H($u),nd=H(),rd=H(nd),id=H(nd),ad=H(),od=H(ad),sd=H(),cd=H(),ld=H(),ud=H(ld),dd=H(),U={comment:Qu,lineComment:H(Qu),blockComment:H(Qu),docComment:H(Qu),name:$u,variableName:H($u),typeName:ed,tagName:H(ed),propertyName:td,attributeName:H(td),className:H($u),labelName:H($u),namespace:H($u),macroName:H($u),literal:nd,string:rd,docString:H(rd),character:H(rd),attributeValue:H(rd),number:id,integer:H(id),float:H(id),bool:H(nd),regexp:H(nd),escape:H(nd),color:H(nd),url:H(nd),keyword:sd,self:H(sd),null:H(sd),atom:H(sd),unit:H(sd),modifier:H(sd),operatorKeyword:H(sd),controlKeyword:H(sd),definitionKeyword:H(sd),moduleKeyword:H(sd),operator:cd,derefOperator:H(cd),arithmeticOperator:H(cd),logicOperator:H(cd),bitwiseOperator:H(cd),compareOperator:H(cd),updateOperator:H(cd),definitionOperator:H(cd),typeOperator:H(cd),controlOperator:H(cd),punctuation:ld,separator:H(ld),bracket:ud,angleBracket:H(ud),squareBracket:H(ud),paren:H(ud),brace:H(ud),content:ad,heading:od,heading1:H(od),heading2:H(od),heading3:H(od),heading4:H(od),heading5:H(od),heading6:H(od),contentSeparator:H(ad),list:H(ad),quote:H(ad),emphasis:H(ad),strong:H(ad),link:H(ad),monospace:H(ad),strikethrough:H(ad),inserted:H(),deleted:H(),changed:H(),invalid:H(),meta:dd,documentMeta:H(dd),annotation:H(dd),processingInstruction:H(dd),definition:Ru.defineModifier(`definition`),constant:Ru.defineModifier(`constant`),function:Ru.defineModifier(`function`),standard:Ru.defineModifier(`standard`),local:Ru.defineModifier(`local`),special:Ru.defineModifier(`special`)};for(let e in U){let t=U[e];t instanceof Ru&&(t.name=e)}var fd=Ku([{tag:U.link,class:`tok-link`},{tag:U.heading,class:`tok-heading`},{tag:U.emphasis,class:`tok-emphasis`},{tag:U.strong,class:`tok-strong`},{tag:U.keyword,class:`tok-keyword`},{tag:U.atom,class:`tok-atom`},{tag:U.bool,class:`tok-bool`},{tag:U.url,class:`tok-url`},{tag:U.labelName,class:`tok-labelName`},{tag:U.inserted,class:`tok-inserted`},{tag:U.deleted,class:`tok-deleted`},{tag:U.literal,class:`tok-literal`},{tag:U.string,class:`tok-string`},{tag:U.number,class:`tok-number`},{tag:[U.regexp,U.escape,U.special(U.string)],class:`tok-string2`},{tag:U.variableName,class:`tok-variableName`},{tag:U.local(U.variableName),class:`tok-variableName tok-local`},{tag:U.definition(U.variableName),class:`tok-variableName tok-definition`},{tag:U.special(U.variableName),class:`tok-variableName2`},{tag:U.definition(U.propertyName),class:`tok-propertyName tok-definition`},{tag:U.typeName,class:`tok-typeName`},{tag:U.namespace,class:`tok-namespace`},{tag:U.className,class:`tok-className`},{tag:U.macroName,class:`tok-macroName`},{tag:U.propertyName,class:`tok-propertyName`},{tag:U.operator,class:`tok-operator`},{tag:U.comment,class:`tok-comment`},{tag:U.meta,class:`tok-meta`},{tag:U.invalid,class:`tok-invalid`},{tag:U.punctuation,class:`tok-punctuation`}]);function pd(e,t,n,r=0,i=0){t??(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length));let a=i;for(let i=r;i<t;i++)e.charCodeAt(i)==9?a+=n-a%n:a++;return a}var md=class{constructor(e,t,n,r){this.string=e,this.tabSize=t,this.indentUnit=n,this.overrideIndent=r,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(e){let t=this.string.charAt(this.pos),n;if(n=typeof e==`string`?t==e:t&&(e instanceof RegExp?e.test(t):e(t)),n)return++this.pos,t}eatWhile(e){let t=this.pos;for(;this.eat(e););return this.pos>t}eatSpace(){let e=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e}skipToEnd(){this.pos=this.string.length}skipTo(e){let t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0}backUp(e){this.pos-=e}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=pd(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){return this.overrideIndent??pd(this.string,null,this.tabSize)}match(e,t,n){if(typeof e==`string`){let r=e=>n?e.toLowerCase():e;return r(this.string.substr(this.pos,e.length))==r(e)?(t!==!1&&(this.pos+=e.length),!0):null}{let n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}}current(){return this.string.slice(this.start,this.pos)}},hd=new z;function gd(e){return C.define({combine:e?t=>t.concat(e):void 0})}var _d=new z,vd=class{constructor(e,t,n=[],r=``){this.data=e,this.name=r,E.prototype.hasOwnProperty(`tree`)||Object.defineProperty(E.prototype,"tree",{get(){return W(this)}}),this.parser=t,this.extension=[Od.of(this),E.languageData.of((e,t,n)=>{let r=yd(e,t,n),i=r.type.prop(hd);if(!i)return[];let a=e.facet(i),o=r.type.prop(_d);if(o){let i=r.resolve(t-r.from,n);for(let t of o)if(t.test(i,e)){let n=e.facet(t.facet);return t.type==`replace`?n:n.concat(a)}}return a})].concat(n)}isActiveAt(e,t,n=-1){return yd(e,t,n).type.prop(hd)==this.data}findRegions(e){let t=e.facet(Od);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],r=(e,t)=>{if(e.prop(hd)==this.data){n.push({from:t,to:t+e.length});return}let i=e.prop(z.mounted);if(i){if(i.tree.prop(hd)==this.data){if(i.overlay)for(let e of i.overlay)n.push({from:e.from+t,to:e.to+t});else n.push({from:t,to:t+e.length});return}if(i.overlay){let e=n.length;if(r(i.tree,i.overlay[0].from+t),n.length>e)return}}for(let n=0;n<e.children.length;n++){let i=e.children[n];i instanceof V&&r(i,e.positions[n]+t)}};return r(W(e),0),n}get allowsNesting(){return!0}};vd.setState=w.define();function yd(e,t,n){let r=e.facet(Od),i=W(e).topNode;if(!r||r.allowsNesting)for(let e=i;e;e=e.enter(t,n,B.ExcludeBuffers|B.EnterBracketed))e.type.isTop&&(i=e);return i}function W(e){let t=e.field(vd.state,!1);return t?t.tree:V.empty}var bd=class{constructor(e){this.doc=e,this.cursorPos=0,this.string=``,this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}},xd=null,Sd=class e{constructor(e,t,n=[],r,i,a,o,s){this.parser=e,this.state=t,this.fragments=n,this.tree=r,this.treeLen=i,this.viewport=a,this.skipped=o,this.scheduleOn=s,this.parse=null,this.tempSkipped=[]}static create(t,n,r){return new e(t,n,[],V.empty,0,r,[],null)}startParse(){return this.parser.startParse(new bd(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=V.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{if(typeof e==`number`){let t=Date.now()+e;e=()=>Date.now()>t}for(this.parse||(this.parse=this.startParse()),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let n=this.parse.advance();if(n){if(this.fragments=this.withoutTempSkipped(Pu.addTree(n,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=this.parse.stoppedAt??this.state.doc.length,this.tree=n,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0}if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(Pu.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=xd;xd=this;try{return e()}finally{xd=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=Cd(e,t.from,t.to);return e}changes(t,n){let{fragments:r,tree:i,treeLen:a,viewport:o,skipped:s}=this;if(this.takeTree(),!t.empty){let e=[];if(t.iterChangedRanges((t,n,r,i)=>e.push({fromA:t,toA:n,fromB:r,toB:i})),r=Pu.applyChanges(r,e),i=V.empty,a=0,o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)},this.skipped.length){s=[];for(let e of this.skipped){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);n<r&&s.push({from:n,to:r})}}}return new e(this.parser,n,r,i,a,o,s,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let t=0;t<this.skipped.length;t++){let{from:n,to:r}=this.skipped[t];n<e.to&&r>e.from&&(this.fragments=Cd(this.fragments,n,r),this.skipped.splice(t--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends Fu{createParse(t,n,r){let i=r[0].from,a=r[r.length-1].to;return{parsedPos:i,advance(){let t=xd;if(t){for(let e of r)t.tempSkipped.push(e);e&&(t.scheduleOn=t.scheduleOn?Promise.all([t.scheduleOn,e]):e)}return this.parsedPos=a,new V(du.none,[],[],a-i)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return xd}};function Cd(e,t,n){return Pu.applyChanges(e,[{fromA:t,toA:n,fromB:t,toB:n}])}var wd=class e{constructor(e){this.context=e,this.tree=e.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let n=this.context.changes(t.changes,t.state),r=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),n.viewport.to);return n.work(20,r)||n.takeTree(),new e(n)}static init(t){let n=Math.min(3e3,t.doc.length),r=Sd.create(t.facet(Od).parser,t,{from:0,to:n});return r.work(20,n)||r.takeTree(),new e(r)}};vd.state=jt.define({create:wd.init,update(e,t){for(let e of t.effects)if(e.is(vd.setState))return e.value;return t.startState.facet(Od)==t.state.facet(Od)?e.apply(t):wd.init(t.state)}});var Td=e=>{let t=setTimeout(()=>e(),500);return()=>clearTimeout(t)};typeof requestIdleCallback<`u`&&(Td=e=>{let t=-1,n=setTimeout(()=>{t=requestIdleCallback(e,{timeout:400})},100);return()=>t<0?clearTimeout(n):cancelIdleCallback(t)});var Ed=typeof navigator<`u`&&navigator.scheduling?.isInputPending?()=>navigator.scheduling.isInputPending():null,Dd=F.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(vd.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(vd.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=Td(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:r}}=this.view,i=n.field(vd.state);if(i.tree==i.context.tree&&i.context.isDone(r+1e5))return;let a=Date.now()+Math.min(this.chunkBudget,100,e&&!Ed?Math.max(25,e.timeRemaining()-5):1e9),o=i.context.treeLen<r&&n.doc.length>r+1e3,s=i.context.work(()=>Ed&&Ed()||Date.now()>a,r+(o?0:1e5));this.chunkBudget-=Date.now()-t,(s||this.chunkBudget<=0)&&(i.context.takeTree(),this.view.dispatch({effects:vd.setState.of(new wd(i.context))})),this.chunkBudget>0&&(!s||o)&&this.scheduleWork(),this.checkAsyncSchedule(i.context)}checkAsyncSchedule(e){e.scheduleOn&&(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(e=>Ai(this.view.state,e)).then(()=>this.workScheduled--),e.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),Od=C.define({combine(e){return e.length?e[0]:null},enables:e=>[vd.state,Dd,R.contentAttributes.compute([e],t=>{let n=t.facet(e);return n&&n.name?{"data-language":n.name}:{}})]}),kd=C.define(),Ad=C.define({combine:e=>{if(!e.length)return`  `;let t=e[0];if(!t||/\S/.test(t)||Array.from(t).some(e=>e!=t[0]))throw Error(`Invalid indent unit: `+JSON.stringify(e[0]));return t}});function jd(e){let t=e.facet(Ad);return t.charCodeAt(0)==9?e.tabSize*t.length:t.length}function Md(e,t){let n=``,r=e.tabSize,i=e.facet(Ad)[0];if(i==`	`){for(;t>=r;)n+=`	`,t-=r;i=` `}for(let e=0;e<t;e++)n+=i;return n}function Nd(e,t){e instanceof E&&(e=new Pd(e));for(let n of e.state.facet(kd)){let r=n(e,t);if(r!==void 0)return r}let n=W(e.state);return n.length>=t?Id(e,n,t):null}var Pd=class{constructor(e,t={}){this.state=e,this.options=t,this.unit=jd(e)}lineAt(e,t=1){let n=this.state.doc.lineAt(e),{simulateBreak:r,simulateDoubleBreak:i}=this.options;return r!=null&&r>=n.from&&r<=n.to?i&&r==e?{text:``,from:e}:(t<0?r<e:r<=e)?{text:n.text.slice(r-n.from),from:r}:{text:n.text.slice(0,r-n.from),from:n.from}:n}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return``;let{text:n,from:r}=this.lineAt(e,t);return n.slice(e-r,Math.min(n.length,e+100-r))}column(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.countColumn(n,e-r),a=this.options.overrideIndentation?this.options.overrideIndentation(r):-1;return a>-1&&(i+=a-this.countColumn(n,n.search(/\S|$/))),i}countColumn(e,t=e.length){return jn(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.options.overrideIndentation;if(i){let e=i(r);if(e>-1)return e}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}},Fd=new z;function Id(e,t,n){let r=t.resolveStack(n),i=t.resolveInner(n,-1).resolve(n,0).enterUnfinishedNodesBefore(n);if(i!=r.node){let e=[];for(let t=i;t&&!(t.from<r.node.from||t.to>r.node.to||t.from==r.node.from&&t.type==r.node.type);t=t.parent)e.push(t);for(let t=e.length-1;t>=0;t--)r={node:e[t],next:r}}return Ld(r,e,n)}function Ld(e,t,n){for(let r=e;r;r=r.next){let e=zd(r.node);if(e)return e(Vd.create(t,n,r))}return 0}function Rd(e){return e.pos==e.options.simulateBreak&&e.options.simulateDoubleBreak}function zd(e){let t=e.type.prop(Fd);if(t)return t;let n=e.firstChild,r;if(n&&(r=n.type.prop(z.closedBy))){let t=e.lastChild,n=t&&r.indexOf(t.name)>-1;return e=>Wd(e,!0,1,void 0,n&&!Rd(e)?t.from:void 0)}return e.parent==null?Bd:null}function Bd(){return 0}var Vd=class e extends Pd{constructor(e,t,n){super(e.state,e.options),this.base=e,this.pos=t,this.context=n}get node(){return this.context.node}static create(t,n,r){return new e(t,n,r)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let n=e.resolve(t.from);for(;n.parent&&n.parent.from==n.from;)n=n.parent;if(Hd(n,e))break;t=this.state.doc.lineAt(n.from)}return this.lineIndent(t.from)}continue(){return Ld(this.context.next,this.base,this.pos)}};function Hd(e,t){for(let n=t;n;n=n.parent)if(e==n)return!0;return!1}function Ud(e){let t=e.node,n=t.childAfter(t.from),r=t.lastChild;if(!n)return null;let i=e.options.simulateBreak,a=e.state.doc.lineAt(n.from),o=i==null||i<=a.from?a.to:Math.min(a.to,i);for(let e=n.to;;){let i=t.childAfter(e);if(!i||i==r)return null;if(!i.type.isSkipped){if(i.from>=o)return null;let e=/^ */.exec(a.text.slice(n.to-a.from))[0].length;return{from:n.from,to:n.to+e}}e=i.to}}function Wd(e,t,n,r,i){let a=e.textAfter,o=a.match(/^\s*/)[0].length,s=r&&a.slice(o,o+r.length)==r||i==e.pos+o,c=t?Ud(e):null;return c?s?e.column(c.from):e.column(c.to):e.baseIndent+(s?0:e.unit*n)}var Gd=200;function Kd(){return E.transactionFilter.of(e=>{if(!e.docChanged||!e.isUserEvent(`input.type`)&&!e.isUserEvent(`input.complete`))return e;let t=e.startState.languageDataAt(`indentOnInput`,e.startState.selection.main.head);if(!t.length)return e;let n=e.newDoc,{head:r}=e.newSelection.main,i=n.lineAt(r);if(r>i.from+Gd)return e;let a=n.sliceString(i.from,r);if(!t.some(e=>e.test(a)))return e;let{state:o}=e,s=-1,c=[];for(let{head:e}of o.selection.ranges){let t=o.doc.lineAt(e);if(t.from==s)continue;s=t.from;let n=Nd(o,t.from);if(n==null)continue;let r=/^\s*/.exec(t.text)[0],i=Md(o,n);r!=i&&c.push({from:t.from,to:t.from+r.length,insert:i})}return c.length?[e,{changes:c,sequential:!0}]:e})}var qd=C.define(),Jd=new z;function Yd(e,t,n){let r=W(e);if(r.length<n)return null;let i=r.resolveStack(n,1),a=null;for(let o=i;o;o=o.next){let i=o.node;if(i.to<=n||i.from>n)continue;if(a&&i.from<t)break;let s=i.type.prop(Jd);if(s&&(i.to<r.length-50||r.length==e.doc.length||!Xd(i))){let r=s(i,e);r&&r.from<=n&&r.from>=t&&r.to>n&&(a=r)}}return a}function Xd(e){let t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function Zd(e,t,n){for(let r of e.facet(qd)){let i=r(e,t,n);if(i)return i}return Yd(e,t,n)}function Qd(e,t){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);return n>=r?void 0:{from:n,to:r}}var $d=w.define({map:Qd}),ef=w.define({map:Qd});function tf(e){let t=[];for(let{head:n}of e.state.selection.ranges)t.some(e=>e.from<=n&&e.to>=n)||t.push(e.lineBlockAt(n));return t}var nf=jt.define({create(){return j.none},update(e,t){t.isUserEvent(`delete`)&&t.changes.iterChangedRanges((t,n)=>e=rf(e,t,n)),e=e.map(t.changes);let n=[];for(let r of t.effects)r.is($d)&&!of(e,r.value.from,r.value.to)?n.push(r.value):r.is(ef)&&(e=e.update({filter:(e,t)=>r.value.from!=e||r.value.to!=t,filterFrom:r.value.from,filterTo:r.value.to}));if(n.length){let{preparePlaceholder:r}=t.state.facet(pf),i=n.map(e=>(r?j.replace({widget:new _f(r(t.state,e))}):gf).range(e.from,e.to));e=e.update({add:i})}return t.selection&&(e=rf(e,t.selection.main.head)),e},provide:e=>R.decorations.from(e),toJSON(e,t){let n=[];return e.between(0,t.doc.length,(e,t)=>{n.push(e,t)}),n},fromJSON(e){if(!Array.isArray(e)||e.length%2)throw RangeError(`Invalid JSON for fold state`);let t=[];for(let n=0;n<e.length;){let r=e[n++],i=e[n++];if(typeof r!=`number`||typeof i!=`number`)throw RangeError(`Invalid JSON for fold state`);t.push(gf.range(r,i))}return j.set(t,!0)}});function rf(e,t,n=t){let r=!1;return e.between(t,n,(e,i)=>{e<n&&i>t&&(r=!0)}),r?e.update({filterFrom:t,filterTo:n,filter:(e,r)=>e>=n||r<=t}):e}function af(e,t,n){var r;let i=null;return(r=e.field(nf,!1))==null||r.between(t,n,(e,t)=>{(!i||i.from>e)&&(i={from:e,to:t})}),i}function of(e,t,n){let r=!1;return e.between(t,t,(e,i)=>{e==t&&i==n&&(r=!0)}),r}function sf(e,t){return e.field(nf,!1)?t:t.concat(w.appendConfig.of(mf()))}var cf=e=>{for(let t of tf(e)){let n=Zd(e.state,t.from,t.to);if(n)return e.dispatch({effects:sf(e.state,[$d.of(n),uf(e,n)])}),!0}return!1},lf=e=>{if(!e.state.field(nf,!1))return!1;let t=[];for(let n of tf(e)){let r=af(e.state,n.from,n.to);r&&t.push(ef.of(r),uf(e,r,!1))}return t.length&&e.dispatch({effects:t}),t.length>0};function uf(e,t,n=!0){let r=e.state.doc.lineAt(t.from).number,i=e.state.doc.lineAt(t.to).number;return R.announce.of(`${e.state.phrase(n?`Folded lines`:`Unfolded lines`)} ${r} ${e.state.phrase(`to`)} ${i}.`)}var df=[{key:`Ctrl-Shift-[`,mac:`Cmd-Alt-[`,run:cf},{key:`Ctrl-Shift-]`,mac:`Cmd-Alt-]`,run:lf},{key:`Ctrl-Alt-[`,run:e=>{let{state:t}=e,n=[];for(let r=0;r<t.doc.length;){let i=e.lineBlockAt(r),a=Zd(t,i.from,i.to);a&&n.push($d.of(a)),r=(a?e.lineBlockAt(a.to):i).to+1}return n.length&&e.dispatch({effects:sf(e.state,n)}),!!n.length}},{key:`Ctrl-Alt-]`,run:e=>{let t=e.state.field(nf,!1);if(!t||!t.size)return!1;let n=[];return t.between(0,e.state.doc.length,(e,t)=>{n.push(ef.of({from:e,to:t}))}),e.dispatch({effects:n}),!0}}],ff={placeholderDOM:null,preparePlaceholder:null,placeholderText:`…`},pf=C.define({combine(e){return fn(e,ff)}});function mf(e){let t=[nf,xf];return e&&t.push(pf.of(e)),t}function hf(e,t){let{state:n}=e,r=n.facet(pf),i=t=>{let n=e.lineBlockAt(e.posAtDOM(t.target)),r=af(e.state,n.from,n.to);r&&e.dispatch({effects:ef.of(r)}),t.preventDefault()};if(r.placeholderDOM)return r.placeholderDOM(e,i,t);let a=document.createElement(`span`);return a.textContent=r.placeholderText,a.setAttribute(`aria-label`,n.phrase(`folded code`)),a.title=n.phrase(`unfold`),a.className=`cm-foldPlaceholder`,a.onclick=i,a}var gf=j.replace({widget:new class extends dr{toDOM(e){return hf(e,null)}}}),_f=class extends dr{constructor(e){super(),this.value=e}eq(e){return this.value==e.value}toDOM(e){return hf(e,this.value)}},vf={openText:`⌄`,closedText:`›`,markerDOM:null,domEventHandlers:{},foldingChanged:()=>!1},yf=class extends Pl{constructor(e,t){super(),this.config=e,this.open=t}eq(e){return this.config==e.config&&this.open==e.open}toDOM(e){if(this.config.markerDOM)return this.config.markerDOM(this.open);let t=document.createElement(`span`);return t.textContent=this.open?this.config.openText:this.config.closedText,t.title=e.state.phrase(this.open?`Fold line`:`Unfold line`),t}};function bf(e={}){let t={...vf,...e},n=new yf(t,!0),r=new yf(t,!1),i=F.fromClass(class{constructor(e){this.from=e.viewport.from,this.markers=this.buildMarkers(e)}update(e){(e.docChanged||e.viewportChanged||e.startState.facet(Od)!=e.state.facet(Od)||e.startState.field(nf,!1)!=e.state.field(nf,!1)||W(e.startState)!=W(e.state)||t.foldingChanged(e))&&(this.markers=this.buildMarkers(e.view))}buildMarkers(e){let t=new bn;for(let i of e.viewportLineBlocks){let a=af(e.state,i.from,i.to)?r:Zd(e.state,i.from,i.to)?n:null;a&&t.add(i.from,i.from,a)}return t.finish()}}),{domEventHandlers:a}=t;return[i,zl({class:`cm-foldGutter`,markers(e){return e.plugin(i)?.markers||D.empty},initialSpacer(){return new yf(t,!1)},domEventHandlers:{...a,click:(e,t,n)=>{if(a.click&&a.click(e,t,n))return!0;let r=af(e.state,t.from,t.to);if(r)return e.dispatch({effects:ef.of(r)}),!0;let i=Zd(e.state,t.from,t.to);return i?(e.dispatch({effects:$d.of(i)}),!0):!1}}}),mf()]}var xf=R.baseTheme({".cm-foldPlaceholder":{backgroundColor:`#eee`,border:`1px solid #ddd`,color:`#888`,borderRadius:`.2em`,margin:`0 1px`,padding:`0 1px`,cursor:`pointer`},".cm-foldGutter span":{padding:`0 1px`,cursor:`pointer`}}),Sf=class e{constructor(e,t){this.specs=e;let n;function r(e){let t=Ln.newName();return(n||(n=Object.create(null)))[`.`+t]=e,t}let i=typeof t.all==`string`?t.all:t.all?r(t.all):void 0,a=t.scope;this.scope=a instanceof vd?e=>e.prop(hd)==a.data:a?e=>e==a:void 0,this.style=Ku(e.map(e=>({tag:e.tag,class:e.class||r(Object.assign({},e,{tag:null}))})),{all:i}).style,this.module=n?new Ln(n):null,this.themeType=t.themeType}static define(t,n){return new e(t,n||{})}},Cf=C.define(),wf=C.define({combine(e){return e.length?[e[0]]:null}});function Tf(e){let t=e.facet(Cf);return t.length?t:e.facet(wf)}function Ef(e,t){let n=[Of],r;return e instanceof Sf&&(e.module&&n.push(R.styleModule.of(e.module)),r=e.themeType),t?.fallback?n.push(wf.of(e)):r?n.push(Cf.computeN([R.darkTheme],t=>t.facet(R.darkTheme)==(r==`dark`)?[e]:[])):n.push(Cf.of(e)),n}var Df=class{constructor(e){this.markCache=Object.create(null),this.tree=W(e.state),this.decorations=this.buildDeco(e,Tf(e.state)),this.decoratedTo=e.viewport.to}update(e){let t=W(e.state),n=Tf(e.state),r=n!=Tf(e.startState),{viewport:i}=e.view,a=e.changes.mapPos(this.decoratedTo,1);t.length<i.to&&!r&&t.type==this.tree.type&&a>=i.to?(this.decorations=this.decorations.map(e.changes),this.decoratedTo=a):(t!=this.tree||e.viewportChanged||r)&&(this.tree=t,this.decorations=this.buildDeco(e.view,n),this.decoratedTo=i.to)}buildDeco(e,t){if(!t||!this.tree.length)return j.none;let n=new bn;for(let{from:r,to:i}of e.visibleRanges)Ju(this.tree,t,(e,t,r)=>{n.add(e,t,this.markCache[r]||(this.markCache[r]=j.mark({class:r})))},r,i);return n.finish()}},Of=Pt.high(F.fromClass(Df,{decorations:e=>e.decorations})),kf=Sf.define([{tag:U.meta,color:`#404740`},{tag:U.link,textDecoration:`underline`},{tag:U.heading,textDecoration:`underline`,fontWeight:`bold`},{tag:U.emphasis,fontStyle:`italic`},{tag:U.strong,fontWeight:`bold`},{tag:U.strikethrough,textDecoration:`line-through`},{tag:U.keyword,color:`#708`},{tag:[U.atom,U.bool,U.url,U.contentSeparator,U.labelName],color:`#219`},{tag:[U.literal,U.inserted],color:`#164`},{tag:[U.string,U.deleted],color:`#a11`},{tag:[U.regexp,U.escape,U.special(U.string)],color:`#e40`},{tag:U.definition(U.variableName),color:`#00f`},{tag:U.local(U.variableName),color:`#30a`},{tag:[U.typeName,U.namespace],color:`#085`},{tag:U.className,color:`#167`},{tag:[U.special(U.variableName),U.macroName],color:`#256`},{tag:U.definition(U.propertyName),color:`#00c`},{tag:U.comment,color:`#940`},{tag:U.invalid,color:`#f00`}]),Af=R.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:`#328c8252`},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:`#bb555544`}}),jf=1e4,Mf=`()[]{}`,Nf=C.define({combine(e){return fn(e,{afterCursor:!0,brackets:Mf,maxScanDistance:jf,renderMatch:If})}}),Pf=j.mark({class:`cm-matchingBracket`}),Ff=j.mark({class:`cm-nonmatchingBracket`});function If(e){let t=[],n=e.matched?Pf:Ff;return t.push(n.range(e.start.from,e.start.to)),e.end&&t.push(n.range(e.end.from,e.end.to)),t}function Lf(e){let t=[],n=e.facet(Nf);for(let r of e.selection.ranges){if(!r.empty)continue;let i=Uf(e,r.head,-1,n)||r.head>0&&Uf(e,r.head-1,1,n)||n.afterCursor&&(Uf(e,r.head,1,n)||r.head<e.doc.length&&Uf(e,r.head+1,-1,n));i&&(t=t.concat(n.renderMatch(i,e)))}return j.set(t,!0)}var Rf=[F.fromClass(class{constructor(e){this.paused=!1,this.decorations=Lf(e.state)}update(e){(e.docChanged||e.selectionSet||this.paused)&&(e.view.composing?(this.decorations=this.decorations.map(e.changes),this.paused=!0):(this.decorations=Lf(e.state),this.paused=!1))}},{decorations:e=>e.decorations}),Af];function zf(e={}){return[Nf.of(e),Rf]}var Bf=new z;function Vf(e,t,n){let r=e.prop(t<0?z.openedBy:z.closedBy);if(r)return r;if(e.name.length==1){let r=n.indexOf(e.name);if(r>-1&&r%2==+(t<0))return[n[r+t]]}return null}function Hf(e){let t=e.type.prop(Bf);return t?t(e.node):e}function Uf(e,t,n,r={}){let i=r.maxScanDistance||jf,a=r.brackets||Mf,o=W(e),s=o.resolveInner(t,n);for(let r=s;r;r=r.parent){let i=Vf(r.type,n,a);if(i&&r.from<r.to){let o=Hf(r);if(o&&(n>0?t>=o.from&&t<o.to:t>o.from&&t<=o.to))return Wf(e,t,n,r,o,i,a)}}return Gf(e,t,n,o,s.type,i,a)}function Wf(e,t,n,r,i,a,o){let s=r.parent,c={from:i.from,to:i.to},l=0,u=s?.cursor();if(u&&(n<0?u.childBefore(r.from):u.childAfter(r.to)))do if(n<0?u.to<=r.from:u.from>=r.to){if(l==0&&a.indexOf(u.type.name)>-1&&u.from<u.to){let e=Hf(u);return{start:c,end:e?{from:e.from,to:e.to}:void 0,matched:!0}}if(Vf(u.type,n,o))l++;else if(Vf(u.type,-n,o)){if(l==0){let e=Hf(u);return{start:c,end:e&&e.from<e.to?{from:e.from,to:e.to}:void 0,matched:!1}}l--}}while(n<0?u.prevSibling():u.nextSibling());return{start:c,matched:!1}}function Gf(e,t,n,r,i,a,o){if(n<0?!t:t==e.doc.length)return null;let s=n<0?e.sliceDoc(t-1,t):e.sliceDoc(t,t+1),c=o.indexOf(s);if(c<0||c%2==0!=n>0)return null;let l={from:n<0?t-1:t,to:n>0?t+1:t},u=e.doc.iterRange(t,n>0?e.doc.length:0),d=0;for(let e=0;!u.next().done&&e<=a;){let a=u.value;n<0&&(e+=a.length);let s=t+e*n;for(let e=n>0?0:a.length-1,t=n>0?a.length:-1;e!=t;e+=n){let t=o.indexOf(a[e]);if(!(t<0||r.resolveInner(s+e,1).type!=i)){if(t%2==0==n>0)d++;else if(d==1)return{start:l,end:{from:s+e,to:s+e+1},matched:t>>1==c>>1};else d--}}n>0&&(e+=a.length)}return u.done?{start:l,matched:!1}:null}function Kf(e){return{name:e.name||``,token:e.token,blankLine:e.blankLine||(()=>{}),startState:e.startState||(()=>!0),copyState:e.copyState||qf,indent:e.indent||(()=>null),languageData:e.languageData||{},tokenTable:e.tokenTable||tp,mergeTokens:e.mergeTokens!==!1}}function qf(e){if(typeof e!=`object`)return e;let t={};for(let n in e){let r=e[n];t[n]=r instanceof Array?r.slice():r}return t}var Jf=new WeakMap,Yf=class e extends vd{constructor(e){let t=gd(e.languageData),n=Kf(e),r,i=new class extends Fu{createParse(e,t,n){return new $f(r,e,t,n)}};super(t,i,[],e.name),this.topNode=dp(t,this),r=this,this.streamParser=n,this.stateAfter=new z({perNode:!0}),this.tokenTable=e.tokenTable?new sp(n.tokenTable):cp}static define(t){return new e(t)}getIndent(e){let t,{overrideIndentation:n}=e.options;n&&(t=Jf.get(e.state),t!=null&&t<e.pos-1e4&&(t=void 0));let r=Xf(this,e.node.tree,e.node.from,e.node.from,t??e.pos),i,a;if(r?(a=r.state,i=r.pos+1):(a=this.streamParser.startState(e.unit),i=e.node.from),e.pos-i>1e4)return null;for(;i<e.pos;){let t=e.state.doc.lineAt(i),r=Math.min(e.pos,t.to);if(t.length){let i=n?n(t.from):-1,o=new md(t.text,e.state.tabSize,e.unit,i<0?void 0:i);for(;o.pos<r-t.from;)ep(this.streamParser.token,o,a)}else this.streamParser.blankLine(a,e.unit);if(r==e.pos)break;i=t.to+1}let o=e.lineAt(e.pos);return n&&t==null&&Jf.set(e.state,o.from),this.streamParser.indent(a,/^\s*(.*)/.exec(o.text)[1],e)}get allowsNesting(){return!1}};function Xf(e,t,n,r,i){let a=n>=r&&n+t.length<=i&&t.prop(e.stateAfter);if(a)return{state:e.streamParser.copyState(a),pos:n+t.length};for(let a=t.children.length-1;a>=0;a--){let o=t.children[a],s=n+t.positions[a],c=o instanceof V&&s<i&&Xf(e,o,s,r,i);if(c)return c}return null}function Zf(e,t,n,r,i){if(i&&n<=0&&r>=t.length)return t;!i&&n==0&&t.type==e.topNode&&(i=!0);for(let a=t.children.length-1;a>=0;a--){let o=t.positions[a],s=t.children[a],c;if(o<r&&s instanceof V){if(!(c=Zf(e,s,n-o,r-o,i)))break;return i?new V(t.type,t.children.slice(0,a).concat(c),t.positions.slice(0,a+1),o+c.length):c}}return null}function Qf(e,t,n,r,i){for(let i of t){let t=i.from+(i.openStart?25:0),a=i.to-(i.openEnd?25:0),o=t<=n&&a>n&&Xf(e,i.tree,0-i.offset,n,a),s;if(o&&o.pos<=r&&(s=Zf(e,i.tree,n+i.offset,o.pos+i.offset,!1)))return{state:o.state,tree:s}}return{state:e.streamParser.startState(i?jd(i):4),tree:V.empty}}var $f=class{constructor(e,t,n,r){this.lang=e,this.input=t,this.fragments=n,this.ranges=r,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=r[r.length-1].to;let i=Sd.get(),a=r[0].from,{state:o,tree:s}=Qf(e,n,a,this.to,i?.state);this.state=o,this.parsedPos=this.chunkStart=a+s.length;for(let e=0;e<s.children.length;e++)this.chunks.push(s.children[e]),this.chunkPos.push(s.positions[e]);i&&this.parsedPos<i.viewport.from-1e5&&r.some(e=>e.from<=i.viewport.from&&e.to>=i.viewport.from)&&(this.state=this.lang.streamParser.startState(jd(i.state)),i.skipUntilInView(this.parsedPos,i.viewport.from),this.parsedPos=i.viewport.from),this.moveRangeIndex()}advance(){let e=Sd.get(),t=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt),n=Math.min(t,this.chunkStart+512);for(e&&(n=Math.min(n,e.viewport.to));this.parsedPos<n;)this.parseLine(e);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=t?this.finish():e&&this.parsedPos>=e.viewport.to?(e.skipUntilInView(this.parsedPos,t),this.finish()):null}stopAt(e){this.stoppedAt=e}lineAfter(e){let t=this.input.chunk(e);if(this.input.lineChunks)t==`
`&&(t=``);else{let e=t.indexOf(`
`);e>-1&&(t=t.slice(0,e))}return e+t.length<=this.to?t:t.slice(0,this.to-e)}nextLine(){let e=this.parsedPos,t=this.lineAfter(e),n=e+t.length;for(let e=this.rangeIndex;;){let r=this.ranges[e].to;if(r>=n||(t=t.slice(0,r-(n-t.length)),e++,e==this.ranges.length))break;let i=this.ranges[e].from,a=this.lineAfter(i);t+=a,n=i+a.length}return{line:t,end:n}}skipGapsTo(e,t,n){for(;;){let r=this.ranges[this.rangeIndex].to,i=e+t;if(n>0?r>i:r>=i)break;let a=this.ranges[++this.rangeIndex].from;t+=a-r}return t}moveRangeIndex(){for(;this.ranges[this.rangeIndex].to<this.parsedPos;)this.rangeIndex++}emitToken(e,t,n,r){let i=4;if(this.ranges.length>1){r=this.skipGapsTo(t,r,1),t+=r;let e=this.chunk.length;r=this.skipGapsTo(n,r,-1),n+=r,i+=this.chunk.length-e}let a=this.chunk.length-4;return this.lang.streamParser.mergeTokens&&i==4&&a>=0&&this.chunk[a]==e&&this.chunk[a+2]==t?this.chunk[a+2]=n:this.chunk.push(e,t,n,i),r}parseLine(e){let{line:t,end:n}=this.nextLine(),r=0,{streamParser:i}=this.lang,a=new md(t,e?e.state.tabSize:4,e?jd(e.state):2);if(a.eol())i.blankLine(this.state,a.indentUnit);else for(;!a.eol();){let e=ep(i.token,a,this.state);if(e&&(r=this.emitToken(this.lang.tokenTable.resolve(e),this.parsedPos+a.start,this.parsedPos+a.pos,r)),a.start>1e4)break}this.parsedPos=n,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}finishChunk(){let e=V.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:rp,topID:0,maxBufferLength:512,reused:this.chunkReused});e=new V(e.type,e.children,e.positions,e.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(e),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}finish(){return new V(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}};function ep(e,t,n){t.start=t.pos;for(let r=0;r<10;r++){let r=e(t,n);if(t.pos>t.start)return r}throw Error(`Stream parser failed to advance stream.`)}var tp=Object.create(null),np=[du.none],rp=new fu(np),ip=[],ap=Object.create(null),op=Object.create(null);for(let[e,t]of[[`variable`,`variableName`],[`variable-2`,`variableName.special`],[`string-2`,`string.special`],[`def`,`variableName.definition`],[`tag`,`tagName`],[`attribute`,`attributeName`],[`type`,`typeName`],[`builtin`,`variableName.standard`],[`qualifier`,`modifier`],[`error`,`invalid`],[`header`,`heading`],[`property`,`propertyName`]])op[e]=up(tp,t);var sp=class{constructor(e){this.extra=e,this.table=Object.assign(Object.create(null),op)}resolve(e){return e?this.table[e]||(this.table[e]=up(this.extra,e)):0}},cp=new sp(tp);function lp(e,t){ip.indexOf(e)>-1||(ip.push(e),console.warn(t))}function up(e,t){let n=[];for(let r of t.split(` `)){let t=[];for(let n of r.split(`.`)){let r=e[n]||U[n];r?typeof r==`function`?t.length?t=t.map(r):lp(n,`Modifier ${n} used at start of tag`):t.length?lp(n,`Tag ${n} used as modifier`):t=Array.isArray(r)?r:[r]:lp(n,`Unknown highlighting tag ${n}`)}for(let e of t)n.push(e)}if(!n.length)return 0;let r=t.replace(/ /g,`_`),i=r+` `+n.map(e=>e.id),a=ap[i];if(a)return a.id;let o=ap[i]=du.define({id:np.length,name:r,props:[Uu({[r]:n})]});return np.push(o),o.id}function dp(e,t){let n=du.define({id:np.length,name:`Document`,props:[hd.add(()=>e),Fd.add(()=>e=>t.getIndent(e))],top:!0});return np.push(n),n}N.RTL,N.LTR;var fp=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=_p(e.state,n.from);return r.line?mp(e):r.block?gp(e):!1};function pp(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let i=e(t,n);return i?(r(n.update(i)),!0):!1}}var mp=pp(Sp,0),hp=pp(xp,0),gp=pp((e,t)=>xp(e,t,bp(t)),0);function _p(e,t){let n=e.languageDataAt(`commentTokens`,t,1);return n.length?n[0]:{}}var vp=50;function yp(e,{open:t,close:n},r,i){let a=e.sliceDoc(r-vp,r),o=e.sliceDoc(i,i+vp),s=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(o)[0].length,l=a.length-s;if(a.slice(l-t.length,l)==t&&o.slice(c,c+n.length)==n)return{open:{pos:r-s,margin:s&&1},close:{pos:i+c,margin:c&&1}};let u,d;i-r<=100?u=d=e.sliceDoc(r,i):(u=e.sliceDoc(r,r+vp),d=e.sliceDoc(i-vp,i));let f=/^\s*/.exec(u)[0].length,p=/\s*$/.exec(d)[0].length,m=d.length-p-n.length;return u.slice(f,f+t.length)==t&&d.slice(m,m+n.length)==n?{open:{pos:r+f+t.length,margin:+!!/\s/.test(u.charAt(f+t.length))},close:{pos:i-p-n.length,margin:+!!/\s/.test(d.charAt(m-1))}}:null}function bp(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),i=n.to<=r.to?r:e.doc.lineAt(n.to);i.from>r.from&&i.from==n.to&&(i=n.to==r.to+1?r:e.doc.lineAt(n.to-1));let a=t.length-1;a>=0&&t[a].to>r.from?t[a].to=i.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:i.to})}return t}function xp(e,t,n=t.selection.ranges){let r=n.map(e=>_p(t,e.from).block);if(!r.every(e=>e))return null;let i=n.map((e,n)=>yp(t,r[n],e.from,e.to));if(e!=2&&!i.every(e=>e))return{changes:t.changes(n.map((e,t)=>i[t]?[]:[{from:e.from,insert:r[t].open+` `},{from:e.to,insert:` `+r[t].close}]))};if(e!=1&&i.some(e=>e)){let e=[];for(let t=0,n;t<i.length;t++)if(n=i[t]){let i=r[t],{open:a,close:o}=n;e.push({from:a.pos-i.open.length,to:a.pos+a.margin},{from:o.pos-o.margin,to:o.pos+i.close.length})}return{changes:e}}return null}function Sp(e,t,n=t.selection.ranges){let r=[],i=-1;ranges:for(let{from:e,to:a}of n){let n=r.length,o=1e9,s;for(let n=e;n<=a;){let c=t.doc.lineAt(n);if(s==null&&(s=_p(t,c.from).line,!s))continue ranges;if(c.from>i&&(e==a||a>c.from)){i=c.from;let e=/^\s*/.exec(c.text)[0].length,t=e==c.length,n=c.text.slice(e,e+s.length)==s?e:-1;e<c.text.length&&e<o&&(o=e),r.push({line:c,comment:n,token:s,indent:e,empty:t,single:!1})}n=c.to+1}if(o<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=o);r.length==n+1&&(r[n].single=!0)}if(e!=2&&r.some(e=>e.comment<0&&(!e.empty||e.single))){let e=[];for(let{line:t,token:n,indent:i,empty:a,single:o}of r)(o||!a)&&e.push({from:t.from+i,insert:n+` `});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}if(e!=1&&r.some(e=>e.comment>=0)){let e=[];for(let{line:t,comment:n,token:i}of r)if(n>=0){let r=t.from+n,a=r+i.length;t.text[a-t.from]==` `&&a++,e.push({from:r,to:a})}return{changes:e}}return null}var Cp=Yt.define(),wp=Yt.define(),Tp=C.define(),Ep=C.define({combine(e){return fn(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}}),Dp=jt.define({create(){return Kp.empty},update(e,t){let n=t.state.facet(Ep),r=t.annotation(Cp);if(r){let i=Pp.fromTransaction(t,r.selection),a=r.side,o=a==0?e.undone:e.done;return o=i?Fp(o,o.length,n.minDepth,i):Vp(o,t.startState.selection),new Kp(a==0?r.rest:o,a==0?o:r.rest)}let i=t.annotation(wp);if((i==`full`||i==`before`)&&(e=e.isolate()),t.annotation(Qt.addToHistory)===!1)return t.changes.empty?e:e.addMapping(t.changes.desc);let a=Pp.fromTransaction(t),o=t.annotation(Qt.time),s=t.annotation(Qt.userEvent);return a?e=e.addChanges(a,o,s,n,t):t.selection&&(e=e.addSelection(t.startState.selection,o,s,n.newGroupDelay)),(i==`full`||i==`after`)&&(e=e.isolate()),e},toJSON(e){return{done:e.done.map(e=>e.toJSON()),undone:e.undone.map(e=>e.toJSON())}},fromJSON(e){return new Kp(e.done.map(Pp.fromJSON),e.undone.map(Pp.fromJSON))}});function Op(e={}){return[Dp,Ep.of(e),R.domEventHandlers({beforeinput(e,t){let n=e.inputType==`historyUndo`?Ap:e.inputType==`historyRedo`?jp:null;return n?(e.preventDefault(),n(t)):!1}})]}function kp(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return!1;let i=n.field(Dp,!1);if(!i)return!1;let a=i.pop(e,n,t);return a?(r(a),!0):!1}}var Ap=kp(0,!1),jp=kp(1,!1),Mp=kp(0,!0),Np=kp(1,!0),Pp=class e{constructor(e,t,n,r,i){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=i}setSelAfter(t){return new e(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){return{changes:this.changes?.toJSON(),mapped:this.mapped?.toJSON(),startSelection:this.startSelection?.toJSON(),selectionsAfter:this.selectionsAfter.map(e=>e.toJSON())}}static fromJSON(t){return new e(t.changes&&ht.fromJSON(t.changes),[],t.mapped&&mt.fromJSON(t.mapped),t.startSelection&&S.fromJSON(t.startSelection),t.selectionsAfter.map(S.fromJSON))}static fromTransaction(t,n){let r=zp;for(let e of t.startState.facet(Tp)){let n=e(t);n.length&&(r=r.concat(n))}return!r.length&&t.changes.empty?null:new e(t.changes.invert(t.startState.doc),r,void 0,n||t.startState.selection,zp)}static selection(t){return new e(void 0,zp,void 0,void 0,t)}};function Fp(e,t,n,r){let i=t+1>n+20?t-n-1:0,a=e.slice(i,t);return a.push(r),a}function Ip(e,t){let n=[],r=!1;return e.iterChangedRanges((e,t)=>n.push(e,t)),t.iterChangedRanges((e,t,i,a)=>{for(let e=0;e<n.length;){let t=n[e++],o=n[e++];a>=t&&i<=o&&(r=!0)}}),r}function Lp(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter((e,n)=>e.empty!=t.ranges[n].empty).length===0}function Rp(e,t){return e.length?t.length?e.concat(t):e:t}var zp=[],Bp=200;function Vp(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-Bp));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),Fp(e,e.length-1,1e9,n.setSelAfter(r)))}return[Pp.selection([t])]}function Hp(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function Up(e,t){if(!e.length)return e;let n=e.length,r=zp;for(;n;){let i=Wp(e[n-1],t,r);if(i.changes&&!i.changes.empty||i.effects.length){let t=e.slice(0,n);return t[n-1]=i,t}t=i.mapped,n--,r=i.selectionsAfter}return r.length?[Pp.selection(r)]:zp}function Wp(e,t,n){let r=Rp(e.selectionsAfter.length?e.selectionsAfter.map(e=>e.map(t)):zp,n);if(!e.changes)return Pp.selection(r);let i=e.changes.map(t),a=t.mapDesc(e.changes,!0),o=e.mapped?e.mapped.composeDesc(a):a;return new Pp(i,w.mapEffects(e.effects,t),o,e.startSelection.map(a),r)}var Gp=/^(input\.type|delete)($|\.)/,Kp=class e{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new e(this.done,this.undone):this}addChanges(t,n,r,i,a){let o=this.done,s=o[o.length-1];return o=s&&s.changes&&!s.changes.empty&&t.changes&&(!r||Gp.test(r))&&(!s.selectionsAfter.length&&n-this.prevTime<i.newGroupDelay&&i.joinToEvent(a,Ip(s.changes,t.changes))||r==`input.type.compose`)?Fp(o,o.length-1,i.minDepth,new Pp(t.changes.compose(s.changes),Rp(w.mapEffects(t.effects,s.changes),s.effects),s.mapped,s.startSelection,zp)):Fp(o,o.length,i.minDepth,t),new e(o,zp,n,r)}addSelection(t,n,r,i){let a=this.done.length?this.done[this.done.length-1].selectionsAfter:zp;return a.length>0&&n-this.prevTime<i&&r==this.prevUserEvent&&r&&/^select($|\.)/.test(r)&&Lp(a[a.length-1],t)?this:new e(Vp(this.done,t),this.undone,n,r)}addMapping(t){return new e(Up(this.done,t),Up(this.undone,t),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=e==0?this.done:this.undone;if(r.length==0)return null;let i=r[r.length-1],a=i.selectionsAfter[0]||(i.startSelection?i.startSelection.map(i.changes.invertedDesc,1):t.selection);if(n&&i.selectionsAfter.length)return t.update({selection:i.selectionsAfter[i.selectionsAfter.length-1],annotations:Cp.of({side:e,rest:Hp(r),selection:a}),userEvent:e==0?`select.undo`:`select.redo`,scrollIntoView:!0});if(i.changes){let n=r.length==1?zp:r.slice(0,r.length-1);return i.mapped&&(n=Up(n,i.mapped)),t.update({changes:i.changes,selection:i.startSelection,effects:i.effects,annotations:Cp.of({side:e,rest:n,selection:a}),filter:!1,userEvent:e==0?`undo`:`redo`,scrollIntoView:!0})}return null}};Kp.empty=new Kp(zp,zp);var qp=[{key:`Mod-z`,run:Ap,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:jp,preventDefault:!0},{linux:`Ctrl-Shift-z`,run:jp,preventDefault:!0},{key:`Mod-u`,run:Mp,preventDefault:!0},{key:`Alt-u`,mac:`Mod-Shift-u`,run:Np,preventDefault:!0}];function Jp(e,t){return S.create(e.ranges.map(t),e.mainIndex)}function Yp(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:`select`})}function Xp({state:e,dispatch:t},n){let r=Jp(e.selection,n);return!r.eq(e.selection,!0)&&(t(Yp(e,r)),!0)}function Zp(e,t){return S.cursor(t?e.to:e.from)}function Qp(e,t){return Xp(e,n=>n.empty?e.moveByChar(n,t):Zp(n,t))}function G(e){return e.textDirectionAt(e.state.selection.main.head)==N.LTR}var $p=e=>Qp(e,!G(e)),em=e=>Qp(e,G(e));function tm(e,t){return Xp(e,n=>n.empty?e.moveByGroup(n,t):Zp(n,t))}var nm=e=>tm(e,!G(e)),rm=e=>tm(e,G(e));typeof Intl<`u`&&Intl.Segmenter;function im(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function am(e,t,n){let r=W(e).resolveInner(t.head),i=n?z.closedBy:z.openedBy;for(let a=t.head;;){let t=n?r.childAfter(a):r.childBefore(a);if(!t)break;im(e,t,i)?r=t:a=n?t.to:t.from}let a=r.type.prop(i),o,s;return s=a&&(o=n?Uf(e,r.from,1):Uf(e,r.to,-1))&&o.matched?n?o.end.to:o.end.from:n?r.to:r.from,S.cursor(s,n?-1:1)}var om=e=>Xp(e,t=>am(e.state,t,!G(e))),sm=e=>Xp(e,t=>am(e.state,t,G(e)));function cm(e,t){return Xp(e,n=>{if(!n.empty)return Zp(n,t);let r=e.moveVertically(n,t);return r.head==n.head?e.moveToLineBoundary(n,t):r})}var lm=e=>cm(e,!1),um=e=>cm(e,!0);function dm(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,n=0,r=0,i;if(t){for(let t of e.state.facet(R.scrollMargins)){let i=t(e);i?.top&&(n=Math.max(i?.top,n)),i?.bottom&&(r=Math.max(i?.bottom,r))}i=e.scrollDOM.clientHeight-n-r}else i=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:n,marginBottom:r,selfScroll:t,height:Math.max(e.defaultLineHeight,i-5)}}function fm(e,t){let n=dm(e),{state:r}=e,i=Jp(r.selection,r=>r.empty?e.moveVertically(r,t,n.height):Zp(r,t));if(i.eq(r.selection))return!1;let a;if(n.selfScroll){let t=e.coordsAtPos(r.selection.main.head),o=e.scrollDOM.getBoundingClientRect(),s=o.top+n.marginTop,c=o.bottom-n.marginBottom;t&&t.top>s&&t.bottom<c&&(a=R.scrollIntoView(i.main.head,{y:`start`,yMargin:t.top-s}))}return e.dispatch(Yp(r,i),{effects:a}),!0}var pm=e=>fm(e,!1),mm=e=>fm(e,!0);function hm(e,t,n){let r=e.lineBlockAt(t.head),i=e.moveToLineBoundary(t,n);if(i.head==t.head&&i.head!=(n?r.to:r.from)&&(i=e.moveToLineBoundary(t,n,!1)),!n&&i.head==r.from&&r.length){let n=/^\s*/.exec(e.state.sliceDoc(r.from,Math.min(r.from+100,r.to)))[0].length;n&&t.head!=r.from+n&&(i=S.cursor(r.from+n))}return i}var gm=e=>Xp(e,t=>hm(e,t,!0)),_m=e=>Xp(e,t=>hm(e,t,!1)),vm=e=>Xp(e,t=>hm(e,t,!G(e))),ym=e=>Xp(e,t=>hm(e,t,G(e))),bm=e=>Xp(e,t=>e.moveToLineBoundary(t,!1,!1)),xm=e=>Xp(e,t=>e.moveToLineBoundary(t,!0,!1));function Sm(e,t,n){let r=!1,i=Jp(e.selection,t=>{let i=Uf(e,t.head,-1)||Uf(e,t.head,1)||t.head>0&&Uf(e,t.head-1,1)||t.head<e.doc.length&&Uf(e,t.head+1,-1);if(!i||!i.end)return t;r=!0;let a=i.start.from==t.head?i.end.to:i.end.from;return n?S.range(t.anchor,a):S.cursor(a)});return r?(t(Yp(e,i)),!0):!1}var Cm=({state:e,dispatch:t})=>Sm(e,t,!1);function wm(e,t,n){let r=Jp(e.state.selection,e=>{e.undirectional&&e.head>=e.anchor!=t&&(e=S.range(e.head,e.anchor));let r=n(e);return S.range(e.anchor,r.head,r.goalColumn,r.bidiLevel||void 0,r.assoc)});return!r.eq(e.state.selection)&&(e.dispatch(Yp(e.state,r)),!0)}function Tm(e,t){return wm(e,t,n=>e.moveByChar(n,t))}var Em=e=>Tm(e,!G(e)),Dm=e=>Tm(e,G(e));function Om(e,t){return wm(e,t,n=>e.moveByGroup(n,t))}var km=e=>Om(e,!G(e)),Am=e=>Om(e,G(e)),jm=e=>{let t=!G(e);return wm(e,t,n=>am(e.state,n,t))},Mm=e=>{let t=G(e);return wm(e,t,n=>am(e.state,n,t))};function Nm(e,t){return wm(e,t,n=>e.moveVertically(n,t))}var Pm=e=>Nm(e,!1),Fm=e=>Nm(e,!0);function Im(e,t){return wm(e,t,n=>e.moveVertically(n,t,dm(e).height))}var Lm=e=>Im(e,!1),Rm=e=>Im(e,!0),zm=e=>wm(e,!0,t=>hm(e,t,!0)),Bm=e=>wm(e,!1,t=>hm(e,t,!1)),Vm=e=>{let t=!G(e);return wm(e,t,n=>hm(e,n,t))},Hm=e=>{let t=G(e);return wm(e,t,n=>hm(e,n,t))},Um=e=>wm(e,!1,t=>S.cursor(e.lineBlockAt(t.head).from)),Wm=e=>wm(e,!0,t=>S.cursor(e.lineBlockAt(t.head).to)),Gm=({state:e,dispatch:t})=>(t(Yp(e,{anchor:0})),!0),Km=({state:e,dispatch:t})=>(t(Yp(e,{anchor:e.doc.length})),!0),qm=({state:e,dispatch:t})=>(t(Yp(e,{anchor:e.selection.main.anchor,head:0})),!0),Jm=({state:e,dispatch:t})=>(t(Yp(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),Ym=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:`select`})),!0),Xm=({state:e,dispatch:t})=>{let n=hh(e).map(({from:t,to:n})=>S.undirectionalRange(t,Math.min(n+1,e.doc.length)));return t(e.update({selection:S.create(n),userEvent:`select`})),!0},Zm=({state:e,dispatch:t})=>{let n=Jp(e.selection,t=>{let n=W(e),r=n.resolveStack(t.from,1);if(t.empty){let e=n.resolveStack(t.from,-1);e.node.from>=r.node.from&&e.node.to<=r.node.to&&(r=e)}for(let e=r;e;e=e.next){let{node:n}=e;if((n.from<t.from&&n.to>=t.to||n.to>t.to&&n.from<=t.from)&&e.next)return S.undirectionalRange(n.from,n.to)}return t});return!n.eq(e.selection)&&(t(Yp(e,n)),!0)};function Qm(e,t){let{state:n}=e,r=n.selection,i=n.selection.ranges.slice();for(let r of n.selection.ranges){let a=n.doc.lineAt(r.head);if(t?a.to<e.state.doc.length:a.from>0)for(let n=r;;){let r=e.moveVertically(n,t);if(r.head<a.from||r.head>a.to){i.some(e=>e.head==r.head)||i.push(r);break}if(r.head==n.head)break;n=r}}return i.length!=r.ranges.length&&(e.dispatch(Yp(n,S.create(i,i.length-1))),!0)}var $m=e=>Qm(e,!1),eh=e=>Qm(e,!0),th=({state:e,dispatch:t})=>{let n=e.selection,r=null;return n.ranges.length>1?r=S.create([n.main]):n.main.empty||(r=S.create([S.cursor(n.main.head)])),r?(t(Yp(e,r)),!0):!1};function nh(e,t){if(e.state.readOnly)return!1;let n=`delete.selection`,{state:r}=e,i=r.changeByRange(r=>{let{from:i,to:a}=r;if(i==a){let o=t(r);o<i?(n=`delete.backward`,o=rh(e,o,!1)):o>i&&(n=`delete.forward`,o=rh(e,o,!0)),i=Math.min(i,o),a=Math.max(a,o)}else i=rh(e,i,!1),a=rh(e,a,!0);return i==a?{range:r}:{changes:{from:i,to:a},range:S.cursor(i,i<r.head?-1:1)}});return!i.changes.empty&&(e.dispatch(r.update(i,{scrollIntoView:!0,userEvent:n,effects:n==`delete.selection`?R.announce.of(r.phrase(`Selection deleted`)):void 0})),!0)}function rh(e,t,n){if(e instanceof R)for(let r of e.state.facet(R.atomicRanges).map(t=>t(e)))r.between(t,t,(e,r)=>{e<t&&r>t&&(t=n?r:e)});return t}var ih=(e,t,n)=>nh(e,r=>{let i=r.from,{state:a}=e,o=a.doc.lineAt(i),s,c;if(n&&!t&&i>o.from&&i<o.from+200&&!/[^ \t]/.test(s=o.text.slice(0,i-o.from))){if(s[s.length-1]==`	`)return i-1;let e=jn(s,a.tabSize)%jd(a)||jd(a);for(let t=0;t<e&&s[s.length-1-t]==` `;t++)i--;c=i}else c=x(o.text,i-o.from,t,t)+o.from,c==i&&o.number!=(t?a.doc.lines:1)?c+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(o.text.slice(c-o.from,i-o.from))&&(c=x(o.text,c-o.from,!1,!1)+o.from);return c}),ah=e=>ih(e,!1,!0),oh=e=>ih(e,!0,!1),sh=(e,t)=>nh(e,n=>{let r=n.head,{state:i}=e,a=i.doc.lineAt(r),o=i.charCategorizer(r);for(let e=null;;){if(r==(t?a.to:a.from)){r==n.head&&a.number!=(t?i.doc.lines:1)&&(r+=t?1:-1);break}let s=x(a.text,r-a.from,t)+a.from,c=a.text.slice(Math.min(r,s)-a.from,Math.max(r,s)-a.from),l=o(c);if(e!=null&&l!=e)break;(c!=` `||r!=n.head)&&(e=l),r=s}return r}),ch=e=>sh(e,!1),lh=e=>sh(e,!0),uh=e=>nh(e,t=>{let n=e.lineBlockAt(t.head).to;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),dh=e=>nh(e,t=>{let n=e.moveToLineBoundary(t,!1).head;return t.head>n?n:Math.max(0,t.head-1)}),fh=e=>nh(e,t=>{let n=e.moveToLineBoundary(t,!0).head;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),ph=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:b.of([``,``])},range:S.cursor(e.from)}));return t(e.update(n,{scrollIntoView:!0,userEvent:`input`})),!0},mh=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(t=>{if(!t.empty||t.from==0||t.from==e.doc.length)return{range:t};let n=t.from,r=e.doc.lineAt(n),i=n==r.from?n-1:x(r.text,n-r.from,!1)+r.from,a=n==r.to?n+1:x(r.text,n-r.from,!0)+r.from;return{changes:{from:i,to:a,insert:e.doc.slice(n,a).append(e.doc.slice(i,n))},range:S.cursor(a)}});return!n.changes.empty&&(t(e.update(n,{scrollIntoView:!0,userEvent:`move.character`})),!0)};function hh(e){let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.from),a=e.doc.lineAt(r.to);if(!r.empty&&r.to==a.from&&(a=e.doc.lineAt(r.to-1)),n>=i.number){let e=t[t.length-1];e.to=a.to,e.ranges.push(r)}else t.push({from:i.from,to:a.to,ranges:[r]});n=a.number+1}return t}function gh(e,t,n){if(e.readOnly)return!1;let r=[],i=[];for(let t of hh(e)){if(n?t.to==e.doc.length:t.from==0)continue;let a=e.doc.lineAt(n?t.to+1:t.from-1),o=a.length+1;if(n){r.push({from:t.to,to:a.to},{from:t.from,insert:a.text+e.lineBreak});for(let n of t.ranges)i.push(S.range(Math.min(e.doc.length,n.anchor+o),Math.min(e.doc.length,n.head+o)))}else{r.push({from:a.from,to:t.from},{from:t.to,insert:e.lineBreak+a.text});for(let e of t.ranges)i.push(S.range(e.anchor-o,e.head-o))}}return r.length?(t(e.update({changes:r,scrollIntoView:!0,selection:S.create(i,e.selection.mainIndex),userEvent:`move.line`})),!0):!1}var _h=({state:e,dispatch:t})=>gh(e,t,!1),vh=({state:e,dispatch:t})=>gh(e,t,!0);function yh(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of hh(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});let i=e.changes(r);return t(e.update({changes:i,selection:e.selection.map(i,n?1:-1),scrollIntoView:!0,userEvent:`input.copyline`})),!0}var bh=({state:e,dispatch:t})=>yh(e,t,!1),xh=({state:e,dispatch:t})=>yh(e,t,!0),Sh=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(hh(t).map(({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n}))),r=Jp(t.selection,t=>{let n;if(e.lineWrapping){let r=e.lineBlockAt(t.head),i=e.coordsAtPos(t.head,t.assoc||1);i&&(n=r.bottom+e.documentTop-i.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,n)}).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:`delete.line`}),!0};function Ch(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n=W(e).resolveInner(t),r=n.childBefore(t),i=n.childAfter(t),a;return r&&i&&r.to<=t&&i.from>=t&&(a=r.type.prop(z.closedBy))&&a.indexOf(i.name)>-1&&e.doc.lineAt(r.to).from==e.doc.lineAt(i.from).from&&!/\S/.test(e.sliceDoc(r.to,i.from))?{from:r.to,to:i.from}:null}var wh=Eh(!1),Th=Eh(!0);function Eh(e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let r=t.changeByRange(n=>{let{from:r,to:i}=n,a=t.doc.lineAt(r),o=!e&&r==i&&Ch(t,r);e&&(r=i=(i<=a.to?a:t.doc.lineAt(i)).to);let s=new Pd(t,{simulateBreak:r,simulateDoubleBreak:!!o}),c=Nd(s,r);for(c??(c=jn(/^\s*/.exec(t.doc.lineAt(r).text)[0],t.tabSize));i<a.to&&/\s/.test(a.text[i-a.from]);)i++;o?{from:r,to:i}=o:r>a.from&&r<a.from+100&&!/\S/.test(a.text.slice(0,r))&&(r=a.from);let l=[``,Md(t,c)];return o&&l.push(Md(t,s.lineIndent(a.from,-1))),{changes:{from:r,to:i,insert:b.of(l)},range:S.cursor(r+1+l[1].length)}});return n(t.update(r,{scrollIntoView:!0,userEvent:`input`})),!0}}function Dh(e,t){let n=-1;return e.changeByRange(r=>{let i=[];for(let a=r.from;a<=r.to;){let o=e.doc.lineAt(a);o.number>n&&(r.empty||r.to>o.from)&&(t(o,i,r),n=o.number),a=o.to+1}let a=e.changes(i);return{changes:i,range:S.range(a.mapPos(r.anchor,1),a.mapPos(r.head,1))}})}var Oh=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new Pd(e,{overrideIndentation:e=>n[e]??-1}),i=Dh(e,(t,i,a)=>{let o=Nd(r,t.from);if(o==null)return;/\S/.test(t.text)||(o=0);let s=/^\s*/.exec(t.text)[0],c=Md(e,o);(s!=c||a.from<t.from+s.length)&&(n[t.from]=o,i.push({from:t.from,to:t.from+s.length,insert:c}))});return i.changes.empty||t(e.update(i,{userEvent:`indent`})),!0},kh=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(Dh(e,(t,n)=>{n.push({from:t.from,insert:e.facet(Ad)})}),{userEvent:`input.indent`})),!0),Ah=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(Dh(e,(t,n)=>{let r=/^\s*/.exec(t.text)[0];if(!r)return;let i=jn(r,e.tabSize),a=0,o=Md(e,Math.max(0,i-jd(e)));for(;a<r.length&&a<o.length&&r.charCodeAt(a)==o.charCodeAt(a);)a++;n.push({from:t.from+a,to:t.from+r.length,insert:o.slice(a)})}),{userEvent:`delete.dedent`})),!0),jh=e=>(e.setTabFocusMode(),!0),Mh=[{key:`Ctrl-b`,run:$p,shift:Em,preventDefault:!0},{key:`Ctrl-f`,run:em,shift:Dm},{key:`Ctrl-p`,run:lm,shift:Pm},{key:`Ctrl-n`,run:um,shift:Fm},{key:`Ctrl-a`,run:bm,shift:Um},{key:`Ctrl-e`,run:xm,shift:Wm},{key:`Ctrl-d`,run:oh},{key:`Ctrl-h`,run:ah},{key:`Ctrl-k`,run:uh},{key:`Ctrl-Alt-h`,run:ch},{key:`Ctrl-o`,run:ph},{key:`Ctrl-t`,run:mh},{key:`Ctrl-v`,run:mm}],Nh=[{key:`ArrowLeft`,run:$p,shift:Em,preventDefault:!0},{key:`Mod-ArrowLeft`,mac:`Alt-ArrowLeft`,run:nm,shift:km,preventDefault:!0},{mac:`Cmd-ArrowLeft`,run:vm,shift:Vm,preventDefault:!0},{key:`ArrowRight`,run:em,shift:Dm,preventDefault:!0},{key:`Mod-ArrowRight`,mac:`Alt-ArrowRight`,run:rm,shift:Am,preventDefault:!0},{mac:`Cmd-ArrowRight`,run:ym,shift:Hm,preventDefault:!0},{key:`ArrowUp`,run:lm,shift:Pm,preventDefault:!0},{mac:`Cmd-ArrowUp`,run:Gm,shift:qm},{mac:`Ctrl-ArrowUp`,run:pm,shift:Lm},{key:`ArrowDown`,run:um,shift:Fm,preventDefault:!0},{mac:`Cmd-ArrowDown`,run:Km,shift:Jm},{mac:`Ctrl-ArrowDown`,run:mm,shift:Rm},{key:`PageUp`,run:pm,shift:Lm},{key:`PageDown`,run:mm,shift:Rm},{key:`Home`,run:_m,shift:Bm,preventDefault:!0},{key:`Mod-Home`,run:Gm,shift:qm},{key:`End`,run:gm,shift:zm,preventDefault:!0},{key:`Mod-End`,run:Km,shift:Jm},{key:`Enter`,run:wh,shift:wh},{key:`Mod-a`,run:Ym},{key:`Backspace`,run:ah,shift:ah,preventDefault:!0},{key:`Delete`,run:oh,preventDefault:!0},{key:`Mod-Backspace`,mac:`Alt-Backspace`,run:ch,preventDefault:!0},{key:`Mod-Delete`,mac:`Alt-Delete`,run:lh,preventDefault:!0},{mac:`Mod-Backspace`,run:dh,preventDefault:!0},{mac:`Mod-Delete`,run:fh,preventDefault:!0}].concat(Mh.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),Ph=[{key:`Alt-ArrowLeft`,mac:`Ctrl-ArrowLeft`,run:om,shift:jm},{key:`Alt-ArrowRight`,mac:`Ctrl-ArrowRight`,run:sm,shift:Mm},{key:`Alt-ArrowUp`,run:_h},{key:`Shift-Alt-ArrowUp`,run:bh},{key:`Alt-ArrowDown`,run:vh},{key:`Shift-Alt-ArrowDown`,run:xh},{key:`Mod-Alt-ArrowUp`,run:$m},{key:`Mod-Alt-ArrowDown`,run:eh},{key:`Escape`,run:th},{key:`Mod-Enter`,run:Th},{key:`Alt-l`,mac:`Ctrl-l`,run:Xm},{key:`Mod-i`,run:Zm,preventDefault:!0},{key:`Mod-[`,run:Ah},{key:`Mod-]`,run:kh},{key:`Mod-Alt-\\`,run:Oh},{key:`Shift-Mod-k`,run:Sh},{key:`Shift-Mod-\\`,run:Cm},{key:`Mod-/`,run:fp},{key:`Alt-A`,mac:`Ctrl-A`,run:hp},{key:`Ctrl-m`,mac:`Shift-Alt-m`,run:jh}].concat(Nh),Fh={key:`Tab`,run:kh,shift:Ah},Ih=typeof String.prototype.normalize==`function`?e=>e.normalize(`NFKD`):e=>e,Lh=class{constructor(e,t,n=0,r=e.length,i,a){this.test=a,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer=``,this.bufferPos=0,this.iter=e.iterRange(n,r),this.bufferStart=n,this.normalize=i?e=>i(Ih(e)):Ih,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return lt(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=ut(e),n=this.bufferStart+this.bufferPos;this.bufferPos+=dt(e);let r=this.normalize(t);if(r.length)for(let e=0,i=n,a=!0;;e++){let n=r.charCodeAt(e),o=this.match(n,i,a,this.bufferPos+this.bufferStart,e==r.length-1);if(o)return this.value=o,this;if(e==r.length-1)break;a&&e<t.length&&t.charCodeAt(e)==n?i++:a=!1}}}match(e,t,n,r,i){let a=null;for(let t=0;t<this.matches.length;){let n=this.matches[t],o=!1;this.query.charCodeAt(n.index)==e&&(n.index==this.query.length-1?a={from:n.from,to:r,precise:i&&n.precise}:(n.index++,o=!0)),o?t++:this.matches.splice(t,1)}return this.query.charCodeAt(0)==e&&(this.query.length==1?a={from:t,to:r,precise:n&&i}:this.matches.push({from:t,index:1,precise:n})),a&&this.test&&!this.test(a.from,a.to,this.buffer,this.bufferStart)&&(a=null),a}};typeof Symbol<`u`&&(Lh.prototype[Symbol.iterator]=function(){return this});var Rh={from:-1,to:-1,match:/.*/.exec(``),precise:!0},zh=`gm`+(/x/.unicode==null?``:`u`),Bh=class{constructor(e,t,n,r=0,i=e.length){if(this.text=e,this.to=i,this.curLine=``,this.done=!1,this.value=Rh,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new Uh(e,t,n,r,i);this.re=new RegExp(t,zh+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.iter=e.iter();let a=e.lineAt(r);this.curLineStart=a.from,this.matchPos=Gh(e,r),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine=``:(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine=``:this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let n=this.curLineStart+t.index,r=n+t[0].length;if(this.matchPos=Gh(this.text,r+ +(n==r)),n==this.curLineStart+this.curLine.length&&this.nextLine(),(n<r||n>this.value.to)&&(!this.test||this.test(n,r,t)))return this.value={from:n,to:r,precise:!0,match:t},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}},Vh=new WeakMap,Hh=class e{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(t,n,r){let i=Vh.get(t);if(!i||i.from>=r||i.to<=n){let i=new e(n,t.sliceString(n,r));return Vh.set(t,i),i}if(i.from==n&&i.to==r)return i;let{text:a,from:o}=i;return o>n&&(a=t.sliceString(n,o)+a,o=n),i.to<r&&(a+=t.sliceString(i.to,r)),Vh.set(t,new e(o,a)),new e(n,a.slice(n-o,r-o))}},Uh=class{constructor(e,t,n,r,i){this.text=e,this.to=i,this.done=!1,this.value=Rh,this.matchPos=Gh(e,r),this.re=new RegExp(t,zh+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.flat=Hh.get(e,r,this.chunkEnd(r+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let e=this.flat.from+t.index,n=e+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(e,n,t)))return this.value={from:e,to:n,precise:!0,match:t},this.matchPos=Gh(this.text,n+ +(e==n)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=Hh.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}};typeof Symbol<`u`&&(Bh.prototype[Symbol.iterator]=Uh.prototype[Symbol.iterator]=function(){return this});function Wh(e){try{return new RegExp(e,zh),!0}catch{return!1}}function Gh(e,t){if(t>=e.length)return t;let n=e.lineAt(t),r;for(;t<n.to&&(r=n.text.charCodeAt(t-n.from))>=56320&&r<57344;)t++;return t}var Kh=e=>{let t=kl(e,`cm-goto-line`);if(t){let e=t.dom.querySelector(`input[type=text]`);return e&&e.select(),!0}let{state:n}=e,r=String(n.doc.lineAt(e.state.selection.main.head).number),{close:i,result:a}=Ol(e,{class:`cm-goto-line`,label:n.phrase(`Go to line`),input:{type:`text`,name:`line`,value:r},focus:!0,submitLabel:n.phrase(`go`)});return a.then(t=>{let r=t&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.elements.line.value);if(!r){e.dispatch({effects:i});return}let a=n.doc.lineAt(n.selection.main.head),[,o,s,c,l]=r,u=c?+c.slice(1):0,d=s?+s:a.number;if(s&&l){let e=d/100;o&&(e=e*(o==`-`?-1:1)+a.number/n.doc.lines),d=Math.round(n.doc.lines*e)}else s&&o&&(d=d*(o==`-`?-1:1)+a.number);let f=n.doc.line(Math.max(1,Math.min(n.doc.lines,d))),p=S.cursor(f.from+Math.max(0,Math.min(u,f.length)));e.dispatch({effects:[i,R.scrollIntoView(p.from,{y:`center`})],selection:p})}),!0},qh={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},Jh=C.define({combine(e){return fn(e,qh,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})}});function Yh(e){let t=[tg,eg];return e&&t.push(Jh.of(e)),t}var Xh=j.mark({class:`cm-selectionMatch`}),Zh=j.mark({class:`cm-selectionMatch cm-selectionMatch-main`});function Qh(e,t,n,r){return(n==0||e(t.sliceDoc(n-1,n))!=T.Word)&&(r==t.doc.length||e(t.sliceDoc(r,r+1))!=T.Word)}function $h(e,t,n,r){return e(t.sliceDoc(n,n+1))==T.Word&&e(t.sliceDoc(r-1,r))==T.Word}var eg=F.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.selectionSet||e.docChanged||e.viewportChanged)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=e.state.facet(Jh),{state:n}=e,r=n.selection;if(r.ranges.length>1)return j.none;let i=r.main,a,o=null;if(i.empty){if(!t.highlightWordAroundCursor)return j.none;let e=n.wordAt(i.head);if(!e)return j.none;o=n.charCategorizer(i.head),a=n.sliceDoc(e.from,e.to)}else{let e=i.to-i.from;if(e<t.minSelectionLength||e>200)return j.none;if(t.wholeWords){if(a=n.sliceDoc(i.from,i.to),o=n.charCategorizer(i.head),!(Qh(o,n,i.from,i.to)&&$h(o,n,i.from,i.to)))return j.none}else if(a=n.sliceDoc(i.from,i.to),!a)return j.none}let s=[];for(let r of e.visibleRanges){let e=new Lh(n.doc,a,r.from,r.to);for(;!e.next().done;){let{from:r,to:a}=e.value;if((!o||Qh(o,n,r,a))&&(i.empty&&r<=i.from&&a>=i.to?s.push(Zh.range(r,a)):(r>=i.to||a<=i.from)&&s.push(Xh.range(r,a)),s.length>t.maxMatches))return j.none}}return j.set(s)}},{decorations:e=>e.decorations}),tg=R.baseTheme({".cm-selectionMatch":{backgroundColor:`#99ff7780`},".cm-searchMatch .cm-selectionMatch":{backgroundColor:`transparent`}}),ng=({state:e,dispatch:t})=>{let{selection:n}=e,r=S.create(n.ranges.map(t=>e.wordAt(t.head)||S.cursor(t.head)),n.mainIndex);return!r.eq(n)&&(t(e.update({selection:r})),!0)};function rg(e,t){let{main:n,ranges:r}=e.selection,i=e.wordAt(n.head),a=i&&i.from==n.from&&i.to==n.to;for(let n=!1,i=new Lh(e.doc,t,r[r.length-1].to);;)if(i.next(),i.done){if(n)return null;i=new Lh(e.doc,t,0,Math.max(0,r[r.length-1].from-1)),n=!0}else{if(n&&r.some(e=>e.from==i.value.from))continue;if(a){let t=e.wordAt(i.value.from);if(!t||t.from!=i.value.from||t.to!=i.value.to)continue}return i.value}}var ig=({state:e,dispatch:t})=>{let{ranges:n}=e.selection;if(n.some(e=>e.from===e.to))return ng({state:e,dispatch:t});let r=e.sliceDoc(n[0].from,n[0].to);if(e.selection.ranges.some(t=>e.sliceDoc(t.from,t.to)!=r))return!1;let i=rg(e,r);return i?(t(e.update({selection:e.selection.addRange(S.range(i.from,i.to),!1),effects:R.scrollIntoView(i.to)})),!0):!1},ag=C.define({combine(e){return fn(e,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new zg(e),scrollToMatch:e=>R.scrollIntoView(e)})}}),og=class{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||``,this.valid=!!this.search&&(!this.regexp||Wh(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord,this.test=e.test}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(e,t)=>t==`n`?`
`:t==`r`?`\r`:t==`t`?`	`:`\\`)}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord&&this.test==e.test}create(){return this.regexp?new _g(this):new dg(this)}getCursor(e,t=0,n){let r=e.doc?e:E.create({doc:e});return n??(n=r.doc.length),this.regexp?pg(this,r,t,n):lg(this,r,t,n)}},sg=class{constructor(e){this.spec=e}};function cg(e,t,n){return(r,i,a,o)=>n&&!n(r,i,a,o)?!1:e(r>=o&&i<=o+a.length?a.slice(r-o,i-o):t.doc.sliceString(r,i),t,r,i)}function lg(e,t,n,r){let i;return e.wholeWord&&(i=ug(t.doc,t.charCategorizer(t.selection.main.head))),e.test&&(i=cg(e.test,t,i)),new Lh(t.doc,e.unquoted,n,r,e.caseSensitive?void 0:e=>e.toLowerCase(),i)}function ug(e,t){return(n,r,i,a)=>((a>n||a+i.length<r)&&(a=Math.max(0,n-2),i=e.sliceString(a,Math.min(e.length,r+2))),(t(mg(i,n-a))!=T.Word||t(hg(i,n-a))!=T.Word)&&(t(hg(i,r-a))!=T.Word||t(mg(i,r-a))!=T.Word))}var dg=class extends sg{constructor(e){super(e)}nextMatch(e,t,n){let r=lg(this.spec,e,n,e.doc.length).nextOverlapping();if(r.done){let n=Math.min(e.doc.length,t+this.spec.unquoted.length);r=lg(this.spec,e,0,n).nextOverlapping()}return r.done||r.value.from==t&&r.value.to==n?null:r.value}prevMatchInRange(e,t,n){for(let r=n;;){let n=Math.max(t,r-1e4-this.spec.unquoted.length),i=lg(this.spec,e,n,r),a=null;for(;!i.nextOverlapping().done;)a=i.value;if(a)return a;if(n==t)return null;r-=1e4}}prevMatch(e,t,n){let r=this.prevMatchInRange(e,0,t);return r||(r=this.prevMatchInRange(e,Math.max(0,n-this.spec.unquoted.length),e.doc.length)),r&&(r.from!=t||r.to!=n)?r:null}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let n=lg(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=lg(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(n+this.spec.unquoted.length,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}};function fg(e,t,n){return(r,i,a)=>(!n||n(r,i,a))&&e(a[0],t,r,i)}function pg(e,t,n,r){let i;return e.wholeWord&&(i=gg(t.charCategorizer(t.selection.main.head))),e.test&&(i=fg(e.test,t,i)),new Bh(t.doc,e.search,{ignoreCase:!e.caseSensitive,test:i},n,r)}function mg(e,t){return e.slice(x(e,t,!1),t)}function hg(e,t){return e.slice(t,x(e,t))}function gg(e){return(t,n,r)=>!r[0].length||(e(mg(r.input,r.index))!=T.Word||e(hg(r.input,r.index))!=T.Word)&&(e(hg(r.input,r.index+r[0].length))!=T.Word||e(mg(r.input,r.index+r[0].length))!=T.Word)}var _g=class extends sg{nextMatch(e,t,n){let r=pg(this.spec,e,n,e.doc.length).next();return r.done&&(r=pg(this.spec,e,0,t).next()),r.done?null:r.value}prevMatchInRange(e,t,n){for(let r=1;;r++){let i=Math.max(t,n-r*1e4),a=pg(this.spec,e,i,n),o=null;for(;!a.next().done;)o=a.value;if(o&&(i==t||o.from>i+10))return o;if(i==t)return null}}prevMatch(e,t,n){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(t,n)=>{if(n==`&`)return e.match[0];if(n==`$`)return`$`;for(let t=n.length;t>0;t--){let r=+n.slice(0,t);if(r>0&&r<e.match.length)return e.match[r]+n.slice(t)}return t})}matchAll(e,t){let n=pg(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=pg(this.spec,e,Math.max(0,t-250),Math.min(n+250,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}},vg=w.define(),yg=w.define(),bg=jt.define({create(e){return new xg(Ng(e).create(),null)},update(e,t){for(let n of t.effects)n.is(vg)?e=new xg(n.value.create(),e.panel):n.is(yg)&&(e=new xg(e.query,n.value?Mg:null));return e},provide:e=>Dl.from(e,e=>e.panel)}),xg=class{constructor(e,t){this.query=e,this.panel=t}},Sg=j.mark({class:`cm-searchMatch`}),Cg=j.mark({class:`cm-searchMatch cm-searchMatch-selected`}),wg=F.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(bg))}update(e){let t=e.state.field(bg);(t!=e.startState.field(bg)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(t))}highlight({query:e,panel:t}){if(!t||!e.spec.valid)return j.none;let{view:n}=this,r=new bn;for(let t=0,i=n.visibleRanges,a=i.length;t<a;t++){let{from:o,to:s}=i[t];for(;t<a-1&&s>i[t+1].from-500;)s=i[++t].to;e.highlight(n.state,o,s,(e,t)=>{let i=n.state.selection.ranges.some(n=>n.from==e&&n.to==t);r.add(e,t,i?Cg:Sg)})}return r.finish()}},{decorations:e=>e.decorations});function Tg(e){return t=>{let n=t.state.field(bg,!1);return n&&n.query.spec.valid?e(t,n):Ig(t)}}var Eg=Tg((e,{query:t})=>{let{to:n}=e.state.selection.main,r=t.nextMatch(e.state,n,n);if(!r)return!1;let i=S.single(r.from,r.to),a=e.state.facet(ag);return e.dispatch({selection:i,effects:[Ug(e,r),a.scrollToMatch(i.main,e)],userEvent:`select.search`}),Fg(e),!0}),Dg=Tg((e,{query:t})=>{let{state:n}=e,{from:r}=n.selection.main,i=t.prevMatch(n,r,r);if(!i)return!1;let a=S.single(i.from,i.to),o=e.state.facet(ag);return e.dispatch({selection:a,effects:[Ug(e,i),o.scrollToMatch(a.main,e)],userEvent:`select.search`}),Fg(e),!0}),Og=Tg((e,{query:t})=>{let n=t.matchAll(e.state,1e3);return!n||!n.length?!1:(e.dispatch({selection:S.create(n.map(e=>S.range(e.from,e.to))),userEvent:`select.search.matches`}),!0)}),kg=({state:e,dispatch:t})=>{let n=e.selection;if(n.ranges.length>1||n.main.empty)return!1;let{from:r,to:i}=n.main,a=[],o=0;for(let t=new Lh(e.doc,e.sliceDoc(r,i));!t.next().done;){if(a.length>1e3)return!1;t.value.from==r&&(o=a.length),a.push(S.range(t.value.from,t.value.to))}return t(e.update({selection:S.create(a,o),userEvent:`select.search.matches`})),!0},Ag=Tg((e,{query:t})=>{let{state:n}=e,{from:r,to:i}=n.selection.main;if(n.readOnly)return!1;let a=t.nextMatch(n,r,r);if(!a)return!1;let o=a,s=[],c,l,u=[];o.precise?o.from==r&&o.to==i&&(l=n.toText(t.getReplacement(o)),s.push({from:o.from,to:o.to,insert:l}),o=t.nextMatch(n,o.from,o.to),u.push(R.announce.of(n.phrase(`replaced match on line $`,n.doc.lineAt(r).number)+`.`))):o=t.nextMatch(n,o.from,o.to);let d=e.state.changes(s);return o&&(c=S.single(o.from,o.to).map(d),u.push(Ug(e,o)),u.push(n.facet(ag).scrollToMatch(c.main,e))),e.dispatch({changes:d,selection:c,effects:u,userEvent:`input.replace`}),!0}),jg=Tg((e,{query:t})=>{if(e.state.readOnly)return!1;let n=[];for(let r of t.matchAll(e.state,1e9)){let{from:e,to:i,precise:a}=r;a&&n.push({from:e,to:i,insert:t.getReplacement(r)})}if(!n.length)return!1;let r=e.state.phrase(`replaced $ matches`,n.length)+`.`;return e.dispatch({changes:n,effects:R.announce.of(r),userEvent:`input.replace.all`}),!0});function Mg(e){return e.state.facet(ag).createPanel(e)}function Ng(e,t){let n=e.selection.main,r=n.empty||n.to>n.from+100?``:e.sliceDoc(n.from,n.to);if(t&&!r)return t;let i=e.facet(ag);return new og({search:t?.literal??i.literal?r:r.replace(/\n/g,`\\n`),caseSensitive:t?.caseSensitive??i.caseSensitive,literal:t?.literal??i.literal,regexp:t?.regexp??i.regexp,wholeWord:t?.wholeWord??i.wholeWord})}function Pg(e){let t=Cl(e,Mg);return t&&t.dom.querySelector(`[main-field]`)}function Fg(e){let t=Pg(e);t&&t==e.root.activeElement&&t.select()}var Ig=e=>{let t=e.state.field(bg,!1);if(t&&t.panel){let n=Pg(e);if(n&&n!=e.root.activeElement){let r=Ng(e.state,t.query.spec);r.valid&&e.dispatch({effects:vg.of(r)}),n.focus(),n.select()}}else e.dispatch({effects:[yg.of(!0),t?vg.of(Ng(e.state,t.query.spec)):w.appendConfig.of(Gg)]});return!0},Lg=e=>{let t=e.state.field(bg,!1);if(!t||!t.panel)return!1;let n=Cl(e,Mg);return n&&n.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:yg.of(!1)}),!0},Rg=[{key:`Mod-f`,run:Ig,scope:`editor search-panel`},{key:`F3`,run:Eg,shift:Dg,scope:`editor search-panel`,preventDefault:!0},{key:`Mod-g`,run:Eg,shift:Dg,scope:`editor search-panel`,preventDefault:!0},{key:`Escape`,run:Lg,scope:`editor search-panel`},{key:`Mod-Shift-l`,run:kg},{key:`Mod-Alt-g`,run:Kh},{key:`Mod-d`,run:ig,preventDefault:!0}],zg=class{constructor(e){this.view=e;let t=this.query=e.state.field(bg).query.spec;this.commit=this.commit.bind(this),this.searchField=O(`input`,{value:t.search,placeholder:Bg(e,`Find`),"aria-label":Bg(e,`Find`),class:`cm-textfield`,name:`search`,form:``,"main-field":`true`,onchange:this.commit,onkeyup:this.commit}),this.replaceField=O(`input`,{value:t.replace,placeholder:Bg(e,`Replace`),"aria-label":Bg(e,`Replace`),class:`cm-textfield`,name:`replace`,form:``,onchange:this.commit,onkeyup:this.commit}),this.caseField=O(`input`,{type:`checkbox`,name:`case`,form:``,checked:t.caseSensitive,onchange:this.commit}),this.reField=O(`input`,{type:`checkbox`,name:`re`,form:``,checked:t.regexp,onchange:this.commit}),this.wordField=O(`input`,{type:`checkbox`,name:`word`,form:``,checked:t.wholeWord,onchange:this.commit});function n(e,t,n){return O(`button`,{class:`cm-button`,name:e,onclick:t,type:`button`},n)}this.dom=O(`div`,{onkeydown:e=>this.keydown(e),class:`cm-search`},[this.searchField,n(`next`,()=>Eg(e),[Bg(e,`next`)]),n(`prev`,()=>Dg(e),[Bg(e,`previous`)]),n(`select`,()=>Og(e),[Bg(e,`all`)]),O(`label`,null,[this.caseField,Bg(e,`match case`)]),O(`label`,null,[this.reField,Bg(e,`regexp`)]),O(`label`,null,[this.wordField,Bg(e,`by word`)]),...e.state.readOnly?[]:[O(`br`),this.replaceField,n(`replace`,()=>Ag(e),[Bg(e,`replace`)]),n(`replaceAll`,()=>jg(e),[Bg(e,`replace all`)])],O(`button`,{name:`close`,onclick:()=>Lg(e),"aria-label":Bg(e,`close`),type:`button`},[`×`])])}commit(){let e=new og({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:vg.of(e)}))}keydown(e){Qs(this.view,e,`search-panel`)?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?Dg:Eg)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),Ag(this.view))}update(e){for(let t of e.transactions)for(let e of t.effects)e.is(vg)&&!e.value.eq(this.query)&&this.setQuery(e.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(ag).top}};function Bg(e,t){return e.state.phrase(t)}var Vg=30,Hg=/[\s\.,:;?!]/;function Ug(e,{from:t,to:n}){let r=e.state.doc.lineAt(t),i=e.state.doc.lineAt(n).to,a=Math.max(r.from,t-Vg),o=Math.min(i,n+Vg),s=e.state.sliceDoc(a,o);if(a!=r.from){for(let e=0;e<Vg;e++)if(!Hg.test(s[e+1])&&Hg.test(s[e])){s=s.slice(e);break}}if(o!=i){for(let e=s.length-1;e>s.length-Vg;e--)if(!Hg.test(s[e-1])&&Hg.test(s[e])){s=s.slice(0,e);break}}return R.announce.of(`${e.state.phrase(`current match`)}. ${s} ${e.state.phrase(`on line`)} ${r.number}.`)}var Wg=R.baseTheme({".cm-panel.cm-search":{padding:`2px 6px 4px`,position:`relative`,"& [name=close]":{position:`absolute`,top:`0`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0},"& input, & button, & label":{margin:`.2em .6em .2em 0`},"& input[type=checkbox]":{marginRight:`.2em`},"& label":{fontSize:`80%`,whiteSpace:`pre`}},"&light .cm-searchMatch":{backgroundColor:`#ffff0054`},"&dark .cm-searchMatch":{backgroundColor:`#00ffff8a`},"&light .cm-searchMatch-selected":{backgroundColor:`#ff6a0054`},"&dark .cm-searchMatch-selected":{backgroundColor:`#ff00ff8a`}}),Gg=[bg,Pt.low(wg),Wg],Kg=class{constructor(e,t,n,r){this.state=e,this.pos=t,this.explicit=n,this.view=r,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=W(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),r=t.text.slice(n-t.from,this.pos-t.from),i=r.search(Qg(e,!1));return i<0?null:{from:n+i,to:this.pos,text:r.slice(i)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e==`abort`&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}};function qg(e){let t=Object.keys(e).join(``),n=/\w/.test(t);return n&&(t=t.replace(/\w/g,``)),`[${n?`\\w`:``}${t.replace(/[^\w\s]/g,`\\$&`)}]`}function Jg(e){let t=Object.create(null),n=Object.create(null);for(let{label:r}of e){t[r[0]]=!0;for(let e=1;e<r.length;e++)n[r[e]]=!0}let r=qg(t)+qg(n)+`*$`;return[RegExp(`^`+r),new RegExp(r)]}function Yg(e){let t=e.map(e=>typeof e==`string`?{label:e}:e),[n,r]=t.every(e=>/^\w+$/.test(e.label))?[/\w*$/,/\w+$/]:Jg(t);return e=>{let i=e.matchBefore(r);return i||e.explicit?{from:i?i.from:e.pos,options:t,validFor:n}:null}}var Xg=class{constructor(e,t,n,r){this.completion=e,this.source=t,this.match=n,this.score=r}};function Zg(e){return e.selection.main.from}function Qg(e,t){let{source:n}=e,r=t&&n[0]!=`^`,i=n[n.length-1]!=`$`;return!r&&!i?e:RegExp(`${r?`^`:``}(?:${n})${i?`$`:``}`,e.flags??(e.ignoreCase?`i`:``))}var $g=Yt.define();function e_(e,t,n,r){let{main:i}=e.selection,a=n-i.from,o=r-i.from;return{...e.changeByRange(s=>{if(s!=i&&n!=r&&e.sliceDoc(s.from+a,s.from+o)!=e.sliceDoc(n,r))return{range:s};let c=e.toText(t);return{changes:{from:s.from+a,to:r==i.from?s.to:s.from+o,insert:c},range:S.cursor(s.from+a+c.length)}}),scrollIntoView:!0,userEvent:`input.complete`}}var t_=new WeakMap;function n_(e){if(!Array.isArray(e))return e;let t=t_.get(e);return t||t_.set(e,t=Yg(e)),t}var r_=w.define(),i_=w.define(),a_=class{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=lt(e,t),r=dt(n);this.chars.push(n);let i=e.slice(t,t+r),a=i.toUpperCase();this.folded.push(lt(a==i?i.toLowerCase():a,0)),t+=r}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:r,precise:i,byWord:a}=this;if(t.length==1){let r=lt(e,0),i=dt(r),a=i==e.length?0:-100;if(r!=t[0]){if(r==n[0])a+=-200;else return null}return this.ret(a,[0,i])}let o=e.indexOf(this.pattern);if(o==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let s=t.length,c=0;if(o<0){for(let i=0,a=Math.min(e.length,200);i<a&&c<s;){let a=lt(e,i);(a==t[c]||a==n[c])&&(r[c++]=i),i+=dt(a)}if(c<s)return null}let l=0,u=0,d=!1,f=0,p=-1,m=-1,h=/[a-z]/.test(e),g=!0;for(let r=0,c=Math.min(e.length,200),_=0;r<c&&u<s;){let c=lt(e,r);o<0&&(l<s&&c==t[l]&&(i[l++]=r),f<s&&(c==t[f]||c==n[f]?(f==0&&(p=r),m=r+1,f++):f=0));let v,y=c<255?c>=48&&c<=57||c>=97&&c<=122?2:+(c>=65&&c<=90):(v=ut(c))==v.toLowerCase()?v==v.toUpperCase()?0:2:1;(!r||y==1&&h||_==0&&y!=0)&&(t[u]==c||n[u]==c&&(d=!0)?a[u++]=r:a.length&&(g=!1)),_=y,r+=dt(c)}return u==s&&a[0]==0&&g?this.result(-100+(d?-200:0),a,e):f==s&&p==0?this.ret(-200-e.length+(m==e.length?0:-100),[0,m]):o>-1?this.ret(-700-e.length,[o,o+this.pattern.length]):f==s?this.ret(-900-e.length,[p,m]):u==s?this.result(-100+(d?-200:0)+-700+(g?0:-1100),a,e):t.length==2?null:this.result((r[0]?-700:0)+-200+-1100,r,e)}result(e,t,n){let r=[],i=0;for(let e of t){let t=e+(this.astral?dt(lt(n,e)):1);i&&r[i-1]==e?r[i-1]=t:(r[i++]=e,r[i++]=t)}return this.ret(e-n.length,r)}},o_=class{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}},K=C.define({combine(e){return fn(e,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>``,optionClass:()=>``,aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:c_,filterStrict:!1,compareCompletions:(e,t)=>(e.sortText||e.label).localeCompare(t.sortText||t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>s_(e(n),t(n)),optionClass:(e,t)=>n=>s_(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function s_(e,t){return e?t?e+` `+t:e:t}function c_(e,t,n,r,i,a){let o=e.textDirection==N.RTL,s=o,c=!1,l=`top`,u,d,f=t.left-i.left,p=i.right-t.right,m=r.right-r.left,h=r.bottom-r.top;if(s&&f<Math.min(m,p)?s=!1:!s&&p<Math.min(m,f)&&(s=!0),m<=(s?f:p))u=Math.max(i.top,Math.min(n.top,i.bottom-h))-t.top,d=Math.min(400,s?f:p);else{c=!0,d=Math.min(400,(o?t.right:i.right-t.left)-30);let e=i.bottom-t.bottom;e>=h||e>t.top?u=n.bottom-t.top:(l=`bottom`,u=t.bottom-n.top)}let g=(t.bottom-t.top)/a.offsetHeight,_=(t.right-t.left)/a.offsetWidth;return{style:`${l}: ${u/g}px; max-width: ${d/_}px`,class:`cm-completionInfo-`+(c?o?`left-narrow`:`right-narrow`:s?`left`:`right`)}}var l_=w.define();function u_(e){let t=e.addToOptions.slice();return e.icons&&t.push({render(e){let t=document.createElement(`div`);return t.classList.add(`cm-completionIcon`),e.type&&t.classList.add(...e.type.split(/\s+/g).map(e=>`cm-completionIcon-`+e)),t.setAttribute(`aria-hidden`,`true`),t},position:20}),t.push({render(e,t,n,r){let i=document.createElement(`span`);i.className=`cm-completionLabel`;let a=e.displayLabel||e.label,o=0;for(let e=0;e<r.length;){let t=r[e++],n=r[e++];t>o&&i.appendChild(document.createTextNode(a.slice(o,t)));let s=i.appendChild(document.createElement(`span`));s.appendChild(document.createTextNode(a.slice(t,n))),s.className=`cm-completionMatchedText`,o=n}return o<a.length&&i.appendChild(document.createTextNode(a.slice(o))),i},position:50},{render(e){if(!e.detail)return null;let t=document.createElement(`span`);return t.className=`cm-completionDetail`,t.textContent=e.detail,t},position:80}),t.sort((e,t)=>e.position-t.position).map(e=>e.render)}function d_(e,t,n){if(e<=n)return{from:0,to:e};if(t<0&&(t=0),t<=e>>1){let e=Math.floor(t/n);return{from:e*n,to:(e+1)*n}}let r=Math.ceil((e-t)/n);return{from:e-r*n,to:e-(r-1)*n}}var f_=class{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:e=>this.placeInfo(e),key:this},this.space=null,this.currentClass=``;let r=e.state.field(t),{options:i,selected:a}=r.open,o=e.state.facet(K);this.optionContent=u_(o),this.optionClass=o.optionClass,this.tooltipClass=o.tooltipClass,this.range=d_(i.length,a,o.maxRenderedOptions),this.dom=document.createElement(`div`),this.dom.className=`cm-tooltip-autocomplete`,this.updateTooltipClass(e.state),this.dom.addEventListener(`mousedown`,n=>{let{options:r}=e.state.field(t).open;for(let t=n.target,i;t&&t!=this.dom;t=t.parentNode)if(t.nodeName==`LI`&&(i=/-(\d+)$/.exec(t.id))&&+i[1]<r.length){this.applyCompletion(e,r[+i[1]]),n.preventDefault();return}if(n.target==this.list){let t=this.list.classList.contains(`cm-completionListIncompleteTop`)&&n.clientY<this.list.firstChild.getBoundingClientRect().top?this.range.from-1:this.list.classList.contains(`cm-completionListIncompleteBottom`)&&n.clientY>this.list.lastChild.getBoundingClientRect().bottom?this.range.to:null;t!=null&&(e.dispatch({effects:l_.of(t)}),n.preventDefault())}}),this.dom.addEventListener(`focusout`,t=>{let n=e.state.field(this.stateField,!1);n&&n.tooltip&&e.state.facet(K).closeOnBlur&&t.relatedTarget!=e.contentDOM&&e.dispatch({effects:i_.of(null)})}),this.showOptions(i,r.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener(`scroll`,()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){let t=e.state.field(this.stateField),n=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),t!=n){let{options:r,selected:i,disabled:a}=t.open;(!n.open||n.open.options!=r)&&(this.range=d_(r.length,i,e.state.facet(K).maxRenderedOptions),this.showOptions(r,t.id)),this.updateSel(),a!=n.open?.disabled&&this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`,!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let e of this.currentClass.split(` `))e&&this.dom.classList.remove(e);for(let e of t.split(` `))e&&this.dom.classList.add(e);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;(t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=d_(t.options.length,t.selected,this.view.state.facet(K).maxRenderedOptions),this.showOptions(t.options,e.id));let n=this.updateSelectedOption(t.selected);if(n){this.destroyInfo();let{completion:r}=t.options[t.selected],{info:i}=r;if(!i)return;let a=typeof i==`string`?document.createTextNode(i):i(r);if(!a)return;`then`in a?a.then(t=>{t&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(t,r)}).catch(e=>Ai(this.view.state,e,`completion info`)):(this.addInfoPane(a,r),n.setAttribute(`aria-describedby`,this.info.id))}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement(`div`);if(n.className=`cm-tooltip cm-completionInfo`,n.id=`cm-completionInfo-`+Math.floor(Math.random()*65535).toString(16),e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:t,destroy:r}=e;n.appendChild(t),this.infoDestroy=r||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,r=this.range.from;n;n=n.nextSibling,r++)n.nodeName!=`LI`||!n.id?r--:r==e?n.hasAttribute(`aria-selected`)||(n.setAttribute(`aria-selected`,`true`),t=n):n.hasAttribute(`aria-selected`)&&(n.removeAttribute(`aria-selected`),n.removeAttribute(`aria-describedby`));return t&&m_(this.list,t),t}measureInfo(){let e=this.dom.querySelector(`[aria-selected]`);if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),r=e.getBoundingClientRect(),i=this.space;if(!i){let e=this.dom.ownerDocument.documentElement;i={left:0,top:0,right:e.clientWidth,bottom:e.clientHeight}}return r.top>Math.min(i.bottom,t.bottom)-10||r.bottom<Math.max(i.top,t.top)+10?null:this.view.state.facet(K).positionInfo(this.view,t,r,n,i,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className=`cm-tooltip cm-completionInfo `+(e.class||``)):this.info.style.cssText=`top: -1e6px`)}createListBox(e,t,n){let r=document.createElement(`ul`);r.id=t,r.setAttribute(`role`,`listbox`),r.setAttribute(`aria-expanded`,`true`),r.setAttribute(`aria-label`,this.view.state.phrase(`Completions`)),r.addEventListener(`mousedown`,e=>{e.target==r&&e.preventDefault()});let i=null;for(let a=n.from;a<n.to;a++){let{completion:o,match:s}=e[a],{section:c}=o;if(c){let e=typeof c==`string`?c:c.name;if(e!=i&&(a>n.from||n.from==0)){if(i=e,typeof c!=`string`&&c.header)r.appendChild(c.header(c));else{let t=r.appendChild(document.createElement(`completion-section`));t.textContent=e}}}let l=r.appendChild(document.createElement(`li`));l.id=t+`-`+a,l.setAttribute(`role`,`option`);let u=this.optionClass(o);u&&(l.className=u);for(let e of this.optionContent){let t=e(o,this.view.state,this.view,s);t&&l.appendChild(t)}}return n.from&&r.classList.add(`cm-completionListIncompleteTop`),n.to<e.length&&r.classList.add(`cm-completionListIncompleteBottom`),r}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}};function p_(e,t){return n=>new f_(n,e,t)}function m_(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.height/e.offsetHeight;r.top<n.top?e.scrollTop-=(n.top-r.top)/i:r.bottom>n.bottom&&(e.scrollTop+=(r.bottom-n.bottom)/i)}function h_(e){return(e.boost||0)*100+(e.apply?10:0)+(e.info?5:0)+ +!!e.type}function g_(e,t){let n=[],r=null,i=null,a=e=>{n.push(e);let{section:t}=e.completion;if(t){r||(r=[]);let e=typeof t==`string`?t:t.name;r.some(t=>t.name==e)||r.push(typeof t==`string`?{name:e}:t)}},o=t.facet(K);for(let r of e)if(r.hasResult()){let e=r.result.getMatch;if(r.result.filter===!1)for(let t of r.result.options)a(new Xg(t,r.source,e?e(t):[],1e9-n.length));else{let n=t.sliceDoc(r.from,r.to),s,c=o.filterStrict?new o_(n):new a_(n);for(let t of r.result.options)if(s=c.match(t.label)){let n=t.displayLabel?e?e(t,s.matched):[]:s.matched,o=s.score+(t.boost||0);if(a(new Xg(t,r.source,n,o)),typeof t.section==`object`&&t.section.rank===`dynamic`){let{name:e}=t.section;i||(i=Object.create(null)),i[e]=Math.max(o,i[e]||-1e9)}}}}if(r){let e=Object.create(null),t=0,a=(e,t)=>(e.rank===`dynamic`&&t.rank===`dynamic`?i[t.name]-i[e.name]:0)||(typeof e.rank==`number`?e.rank:1e9)-(typeof t.rank==`number`?t.rank:1e9)||(e.name<t.name?-1:1);for(let n of r.sort(a))t-=1e5,e[n.name]=t;for(let t of n){let{section:n}=t.completion;n&&(t.score+=e[typeof n==`string`?n:n.name])}}let s=[],c=null,l=o.compareCompletions;for(let e of n.sort((e,t)=>t.score-e.score||l(e.completion,t.completion))){let t=e.completion;!c||c.label!=t.label||c.detail!=t.detail||c.type!=null&&t.type!=null&&c.type!=t.type||c.apply!=t.apply||c.boost!=t.boost?s.push(e):h_(e.completion)>h_(c)&&(s[s.length-1]=e),c=e.completion}return s}var __=class e{constructor(e,t,n,r,i,a){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=r,this.selected=i,this.disabled=a}setSelected(t,n){return t==this.selected||t>=this.options.length?this:new e(this.options,S_(n,t),this.tooltip,this.timestamp,t,this.disabled)}static build(t,n,r,i,a,o){if(i&&!o&&t.some(e=>e.isPending))return i.setDisabled();let s=g_(t,n);if(!s.length)return i&&t.some(e=>e.isPending)?i.setDisabled():null;let c=n.facet(K).selectOnOpen?0:-1;if(i&&i.selected!=c&&i.selected!=-1){let e=i.options[i.selected].completion;for(let t=0;t<s.length;t++)if(s[t].completion==e){c=t;break}}return new e(s,S_(r,c),{pos:t.reduce((e,t)=>t.hasResult()?Math.min(e,t.from):e,1e8),create:j_,above:a.aboveCursor},i?i.timestamp:Date.now(),c,!1)}map(t){return new e(this.options,this.attrs,{...this.tooltip,pos:t.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new e(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}},v_=class e{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new e(C_,`cm-ac-`+Math.floor(Math.random()*2e6).toString(36),null)}update(t){let{state:n}=t,r=n.facet(K),i=(r.override||n.languageDataAt(`autocomplete`,Zg(n)).map(n_)).map(e=>(this.active.find(t=>t.source==e)||new T_(e,+!!this.active.some(e=>e.state!=0))).update(t,r));i.length==this.active.length&&i.every((e,t)=>e==this.active[t])&&(i=this.active);let a=this.open,o=t.effects.some(e=>e.is(O_));a&&t.docChanged&&(a=a.map(t.changes)),t.selection||i.some(e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to))||!y_(i,this.active)||o?a=__.build(i,n,this.id,a,r,o):a&&a.disabled&&!i.some(e=>e.isPending)&&(a=null),!a&&i.every(e=>!e.isPending)&&i.some(e=>e.hasResult())&&(i=i.map(e=>e.hasResult()?new T_(e.source,0):e));for(let e of t.effects)e.is(l_)&&(a=a&&a.setSelected(e.value,this.id));return i==this.active&&a==this.open?this:new e(i,this.id,a)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?b_:x_}};function y_(e,t){if(e==t)return!0;for(let n=0,r=0;;){for(;n<e.length&&!e[n].hasResult();)n++;for(;r<t.length&&!t[r].hasResult();)r++;let i=n==e.length,a=r==t.length;if(i||a)return i==a;if(e[n++].result!=t[r++].result)return!1}}var b_={"aria-autocomplete":`list`},x_={};function S_(e,t){let n={"aria-autocomplete":`list`,"aria-haspopup":`listbox`,"aria-controls":e};return t>-1&&(n[`aria-activedescendant`]=e+`-`+t),n}var C_=[];function w_(e,t){if(e.isUserEvent(`input.complete`)){let n=e.annotation($g);if(n&&t.activateOnCompletion(n))return 12}let n=e.isUserEvent(`input.type`);return n&&t.activateOnTyping?5:n?1:e.isUserEvent(`delete.backward`)?2:e.selection?8:e.docChanged?16:0}var T_=class e{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(t,n){let r=w_(t,n),i=this;(r&8||r&16&&this.touches(t))&&(i=new e(i.source,0)),r&4&&i.state==0&&(i=new e(this.source,1)),i=i.updateFor(t,r);for(let n of t.effects)if(n.is(r_))i=new e(i.source,1,n.value);else if(n.is(i_))i=new e(i.source,0);else if(n.is(O_))for(let e of n.value)e.source==i.source&&(i=e);return i}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(Zg(e.state))}},E_=class e extends T_{constructor(e,t,n,r,i,a){super(e,3,t),this.limit=n,this.result=r,this.from=i,this.to=a}hasResult(){return!0}updateFor(t,n){if(!(n&3))return this.map(t.changes);let r=this.result;r.map&&!t.changes.empty&&(r=r.map(r,t.changes));let i=t.changes.mapPos(this.from),a=t.changes.mapPos(this.to,1),o=Zg(t.state);if(o>a||!r||n&2&&(Zg(t.startState)==this.from||o<this.limit))return new T_(this.source,n&4?1:0);let s=t.changes.mapPos(this.limit);return D_(r.validFor,t.state,i,a)?new e(this.source,this.explicit,s,r,i,a):r.update&&(r=r.update(r,i,a,new Kg(t.state,o,!1)))?new e(this.source,this.explicit,s,r,r.from,r.to??Zg(t.state)):new T_(this.source,1,this.explicit)}map(t){if(t.empty)return this;let n=this.result.map?this.result.map(this.result,t):this.result;return n?new e(this.source,this.explicit,t.mapPos(this.limit),n,t.mapPos(this.from),t.mapPos(this.to,1)):new T_(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}};function D_(e,t,n,r){if(!e)return!1;let i=t.sliceDoc(n,r);return typeof e==`function`?e(i,n,r,t):Qg(e,!0).test(i)}var O_=w.define({map(e,t){return e.map(e=>e.map(t))}}),k_=jt.define({create(){return v_.start()},update(e,t){return e.update(t)},provide:e=>[ll.from(e,e=>e.tooltip),R.contentAttributes.from(e,e=>e.attrs)]});function A_(e,t){let n=t.completion.apply||t.completion.label,r=e.state.field(k_).active.find(e=>e.source==t.source);return r instanceof E_&&(typeof n==`string`?e.dispatch({...e_(e.state,n,r.from,r.to),annotations:$g.of(t.completion)}):n(e,t.completion,r.from,r.to),!0)}var j_=p_(k_,A_);function M_(e,t=`option`){return n=>{let r=n.state.field(k_,!1);if(!r||!r.open||r.open.disabled||Date.now()-r.open.timestamp<n.state.facet(K).interactionDelay)return!1;let i=1,a;t==`page`&&(a=bl(n,r.open.tooltip))&&(i=Math.max(2,Math.floor(a.dom.offsetHeight/a.dom.querySelector(`li`).offsetHeight)-1));let{length:o}=r.open.options,s=r.open.selected>-1?r.open.selected+i*(e?1:-1):e?0:o-1;return s<0?s=t==`page`?0:o-1:s>=o&&(s=t==`page`?o-1:0),n.dispatch({effects:l_.of(s)}),!0}}var N_=e=>{let t=e.state.field(k_,!1);return e.state.readOnly||!t||!t.open||t.open.selected<0||t.open.disabled||Date.now()-t.open.timestamp<e.state.facet(K).interactionDelay?!1:A_(e,t.open.options[t.open.selected])},P_=e=>e.state.field(k_,!1)?(e.dispatch({effects:r_.of(!0)}),!0):!1,F_=e=>{let t=e.state.field(k_,!1);return!t||!t.active.some(e=>e.state!=0)?!1:(e.dispatch({effects:i_.of(null)}),!0)},I_=class{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}},L_=50,R_=1e3,z_=F.fromClass(class{constructor(e){this.view=e,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let t of e.state.field(k_).active)t.isPending&&this.startQuery(t)}update(e){let t=e.state.field(k_),n=e.state.facet(K);if(!e.selectionSet&&!e.docChanged&&e.startState.field(k_)==t)return;let r=e.transactions.some(e=>{let t=w_(e,n);return t&8||(e.selection||e.docChanged)&&!(t&3)});for(let t=0;t<this.running.length;t++){let n=this.running[t];if(r||n.context.abortOnDocChange&&e.docChanged||n.updates.length+e.transactions.length>L_&&Date.now()-n.time>R_){for(let e of n.context.abortListeners)try{e()}catch(e){Ai(this.view.state,e)}n.context.abortListeners=null,this.running.splice(t--,1)}else n.updates.push(...e.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),e.transactions.some(e=>e.effects.some(e=>e.is(r_)))&&(this.pendingStart=!0);let i=this.pendingStart?50:n.activateOnTypingDelay;if(this.debounceUpdate=t.active.some(e=>e.isPending&&!this.running.some(t=>t.active.source==e.source))?setTimeout(()=>this.startUpdate(),i):-1,this.composing!=0)for(let t of e.transactions)t.isUserEvent(`input.type`)?this.composing=2:this.composing==2&&t.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:e}=this.view,t=e.field(k_);for(let e of t.active)e.isPending&&!this.running.some(t=>t.active.source==e.source)&&this.startQuery(e);this.running.length&&t.open&&t.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(K).updateSyncTime))}startQuery(e){let{state:t}=this.view,n=new Kg(t,Zg(t),e.explicit,this.view),r=new I_(e,n);this.running.push(r),Promise.resolve(e.source(n)).then(e=>{r.context.aborted||(r.done=e||null,this.scheduleAccept())},e=>{this.view.dispatch({effects:i_.of(null)}),Ai(this.view.state,e)})}scheduleAccept(){this.running.every(e=>e.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(K).updateSyncTime))}accept(){this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(K),n=this.view.state.field(k_);for(let r=0;r<this.running.length;r++){let i=this.running[r];if(i.done===void 0)continue;if(this.running.splice(r--,1),i.done){let n=Zg(i.updates.length?i.updates[0].startState:this.view.state),r=Math.min(n,i.done.from+ +!i.active.explicit),a=new E_(i.active.source,i.active.explicit,r,i.done,i.done.from,i.done.to??n);for(let e of i.updates)a=a.update(e,t);if(a.hasResult()){e.push(a);continue}}let a=n.active.find(e=>e.source==i.active.source);if(a&&a.isPending){if(i.done==null){let n=new T_(i.active.source,0);for(let e of i.updates)n=n.update(e,t);n.isPending||e.push(n)}else this.startQuery(a)}}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:O_.of(e)})}},{eventHandlers:{blur(e){let t=this.view.state.field(k_,!1);if(t&&t.tooltip&&this.view.state.facet(K).closeOnBlur){let n=t.open&&bl(this.view,t.open.tooltip);(!n||!n.dom.contains(e.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:i_.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:r_.of(!1)}),20),this.composing=0}}}),B_=typeof navigator==`object`&&/Win/.test(navigator.platform),V_=Pt.highest(R.domEventHandlers({keydown(e,t){let n=t.state.field(k_,!1);if(!n||!n.open||n.open.disabled||n.open.selected<0||e.key.length>1||e.ctrlKey&&!(B_&&e.altKey)||e.metaKey)return!1;let r=n.open.options[n.open.selected],i=n.active.find(e=>e.source==r.source),a=r.completion.commitCharacters||i.result.commitCharacters;return a&&a.indexOf(e.key)>-1&&A_(t,r),!1}})),H_=R.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:`monospace`,whiteSpace:`nowrap`,overflow:`hidden auto`,maxWidth_fallback:`700px`,maxWidth:`min(700px, 95vw)`,minWidth:`250px`,maxHeight:`10em`,height:`100%`,listStyle:`none`,margin:0,padding:0,"& > li, & > completion-section":{padding:`1px 3px`,lineHeight:1.2},"& > li":{overflowX:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`},"& > completion-section":{display:`list-item`,borderBottom:`1px solid silver`,paddingLeft:`0.5em`,opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#17c`,color:`white`},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#777`},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#347`,color:`white`},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#444`},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:`"···"`,opacity:.5,display:`block`,textAlign:`center`,cursor:`pointer`},".cm-tooltip.cm-completionInfo":{position:`absolute`,padding:`3px 9px`,width:`max-content`,maxWidth:`400px`,boxSizing:`border-box`,whiteSpace:`pre-line`},".cm-completionInfo.cm-completionInfo-left":{right:`100%`},".cm-completionInfo.cm-completionInfo-right":{left:`100%`},".cm-completionInfo.cm-completionInfo-left-narrow":{right:`30px`},".cm-completionInfo.cm-completionInfo-right-narrow":{left:`30px`},"&light .cm-snippetField":{backgroundColor:`#00000022`},"&dark .cm-snippetField":{backgroundColor:`#ffffff22`},".cm-snippetFieldPosition":{verticalAlign:`text-top`,width:0,height:`1.15em`,display:`inline-block`,margin:`0 -0.7px -.7em`,borderLeft:`1.4px dotted #888`},".cm-completionMatchedText":{textDecoration:`underline`},".cm-completionDetail":{marginLeft:`0.5em`,fontStyle:`italic`},".cm-completionIcon":{fontSize:`90%`,width:`.8em`,display:`inline-block`,textAlign:`center`,paddingRight:`.6em`,opacity:`0.6`,boxSizing:`content-box`},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:`'ƒ'`}},".cm-completionIcon-class":{"&:after":{content:`'○'`}},".cm-completionIcon-interface":{"&:after":{content:`'◌'`}},".cm-completionIcon-variable":{"&:after":{content:`'𝑥'`}},".cm-completionIcon-constant":{"&:after":{content:`'𝐶'`}},".cm-completionIcon-type":{"&:after":{content:`'𝑡'`}},".cm-completionIcon-enum":{"&:after":{content:`'∪'`}},".cm-completionIcon-property":{"&:after":{content:`'□'`}},".cm-completionIcon-keyword":{"&:after":{content:`'🔑︎'`}},".cm-completionIcon-namespace":{"&:after":{content:`'▢'`}},".cm-completionIcon-text":{"&:after":{content:`'abc'`,fontSize:`50%`,verticalAlign:`middle`}}}),U_={brackets:[`(`,`[`,`{`,`'`,`"`],before:`)]}:;>`,stringPrefixes:[]},W_=w.define({map(e,t){return t.mapPos(e,-1,pt.TrackAfter)??void 0}}),G_=new class extends pn{};G_.startSide=1,G_.endSide=-1;var K_=jt.define({create(){return D.empty},update(e,t){if(e=e.map(t.changes),t.selection){let n=t.state.doc.lineAt(t.selection.main.head);e=e.update({filter:e=>e>=n.from&&e<=n.to})}for(let n of t.effects)n.is(W_)&&(e=e.update({add:[G_.range(n.value,n.value+1)]}));return e}});function q_(){return[Q_,K_]}var J_=`()[]{}<>«»»«［］｛｝`;function Y_(e){for(let t=0;t<16;t+=2)if(J_.charCodeAt(t)==e)return J_.charAt(t+1);return ut(e<128?e:e+1)}function X_(e,t){return e.languageDataAt(`closeBrackets`,t)[0]||U_}var Z_=typeof navigator==`object`&&/Android\b/.test(navigator.userAgent),Q_=R.inputHandler.of((e,t,n,r)=>{if((Z_?e.composing:e.compositionStarted)||e.state.readOnly)return!1;let i=e.state.selection.main;if(r.length>2||r.length==2&&dt(lt(r,0))==1||t!=i.from||n!=i.to)return!1;let a=ev(e.state,r);return a?(e.dispatch(a),!0):!1}),$_=[{key:`Backspace`,run:({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=X_(e,e.selection.main.head).brackets||U_.brackets,r=null,i=e.changeByRange(t=>{if(t.empty){let r=rv(e.doc,t.head);for(let i of n)if(i==r&&nv(e.doc,t.head)==Y_(lt(i,0)))return{changes:{from:t.head-i.length,to:t.head+i.length},range:S.cursor(t.head-i.length)}}return{range:r=t}});return r||t(e.update(i,{scrollIntoView:!0,userEvent:`delete.backward`})),!r}}];function ev(e,t){let n=X_(e,e.selection.main.head),r=n.brackets||U_.brackets;for(let i of r){let a=Y_(lt(i,0));if(t==i)return a==i?ov(e,i,r.indexOf(i+i+i)>-1,n):iv(e,i,a,n.before||U_.before);if(t==a&&tv(e,e.selection.main.from))return av(e,i,a)}return null}function tv(e,t){let n=!1;return e.field(K_).between(0,e.doc.length,e=>{e==t&&(n=!0)}),n}function nv(e,t){let n=e.sliceString(t,t+2);return n.slice(0,dt(lt(n,0)))}function rv(e,t){let n=e.sliceString(t-2,t);return dt(lt(n,0))==n.length?n:n.slice(1)}function iv(e,t,n,r){let i=null,a=e.changeByRange(a=>{if(!a.empty)return{changes:[{insert:t,from:a.from},{insert:n,from:a.to}],effects:W_.of(a.to+t.length),range:S.range(a.anchor+t.length,a.head+t.length)};let o=nv(e.doc,a.head);return!o||/\s/.test(o)||r.indexOf(o)>-1?{changes:{insert:t+n,from:a.head},effects:W_.of(a.head+t.length),range:S.cursor(a.head+t.length)}:{range:i=a}});return i?null:e.update(a,{scrollIntoView:!0,userEvent:`input.type`})}function av(e,t,n){let r=null,i=e.changeByRange(t=>t.empty&&nv(e.doc,t.head)==n?{changes:{from:t.head,to:t.head+n.length,insert:n},range:S.cursor(t.head+n.length)}:r={range:t});return r?null:e.update(i,{scrollIntoView:!0,userEvent:`input.type`})}function ov(e,t,n,r){let i=r.stringPrefixes||U_.stringPrefixes,a=null,o=e.changeByRange(r=>{if(!r.empty)return{changes:[{insert:t,from:r.from},{insert:t,from:r.to}],effects:W_.of(r.to+t.length),range:S.range(r.anchor+t.length,r.head+t.length)};let o=r.head,s=nv(e.doc,o),c;if(s==t){if(sv(e,o))return{changes:{insert:t+t,from:o},effects:W_.of(o+t.length),range:S.cursor(o+t.length)};if(tv(e,o)){let r=n&&e.sliceDoc(o,o+t.length*3)==t+t+t?t+t+t:t;return{changes:{from:o,to:o+r.length,insert:r},range:S.cursor(o+r.length)}}}else if(n&&e.sliceDoc(o-2*t.length,o)==t+t&&(c=lv(e,o-2*t.length,i))>-1&&sv(e,c))return{changes:{insert:t+t+t+t,from:o},effects:W_.of(o+t.length),range:S.cursor(o+t.length)};else if(e.charCategorizer(o)(s)!=T.Word&&lv(e,o,i)>-1&&!cv(e,o,t,i))return{changes:{insert:t+t,from:o},effects:W_.of(o+t.length),range:S.cursor(o+t.length)};return{range:a=r}});return a?null:e.update(o,{scrollIntoView:!0,userEvent:`input.type`})}function sv(e,t){let n=W(e).resolveInner(t+1);return n.parent&&n.from==t}function cv(e,t,n,r){let i=W(e).resolveInner(t,-1),a=r.reduce((e,t)=>Math.max(e,t.length),0);for(let o=0;o<5;o++){let o=e.sliceDoc(i.from,Math.min(i.to,i.from+n.length+a)),s=o.indexOf(n);if(!s||s>-1&&r.indexOf(o.slice(0,s))>-1){let t=i.firstChild;for(;t&&t.from==i.from&&t.to-t.from>n.length+s;){if(e.sliceDoc(t.to-n.length,t.to)==n)return!1;t=t.firstChild}return!0}let c=i.to==t&&i.parent;if(!c)break;i=c}return!1}function lv(e,t,n){let r=e.charCategorizer(t);if(r(e.sliceDoc(t-1,t))!=T.Word)return t;for(let i of n){let n=t-i.length;if(e.sliceDoc(n,t)==i&&r(e.sliceDoc(n-1,n))!=T.Word)return n}return-1}function uv(e={}){return[V_,k_,K.of(e),z_,fv,H_]}var dv=[{key:`Ctrl-Space`,run:P_},{mac:"Alt-`",run:P_},{mac:`Alt-i`,run:P_},{key:`Escape`,run:F_},{key:`ArrowDown`,run:M_(!0)},{key:`ArrowUp`,run:M_(!1)},{key:`PageDown`,run:M_(!0,`page`)},{key:`PageUp`,run:M_(!1,`page`)},{key:`Enter`,run:N_}],fv=Pt.highest(Ys.computeN([K],e=>e.facet(K).defaultKeymap?[dv]:[])),pv=class{constructor(e,t,n){this.from=e,this.to=t,this.diagnostic=n}},mv=class e{constructor(e,t,n){this.diagnostics=e,this.panel=t,this.selected=n}static init(t,n,r){let i=r.facet(Ov).markerFilter;i&&(t=i(t,r));let a=t.slice().sort((e,t)=>e.from-t.from||e.to-t.to),o=new bn,s=[],c=0,l=r.doc.iter(),u=0,d=r.doc.length;for(let e=0;;){let t=e==a.length?null:a[e];if(!t&&!s.length)break;let n,r;if(s.length)n=c,r=s.reduce((e,t)=>Math.min(e,t.to),t&&t.from>n?t.from:1e8);else{if(n=t.from,n>d)break;r=t.to,s.push(t),e++}for(;e<a.length;){let t=a[e];if(t.from==n&&(t.to>t.from||t.to==n))s.push(t),e++,r=Math.min(t.to,r);else{r=Math.min(t.from,r);break}}r=Math.min(r,d);let i=!1;if(s.some(e=>e.from==n&&(e.to==r||r==d))&&(i=n==r,!i&&r-n<10)){let e=n-(u+l.value.length);e>0&&(l.next(e),u=n);for(let e=n;;){if(e>=r){i=!0;break}if(!l.lineBreak&&u+l.value.length>e)break;e=u+l.value.length,u+=l.value.length,l.next()}}let f=zv(s);if(i)o.add(n,n,j.widget({widget:new Mv(f),diagnostics:s.slice()}));else{let e=s.reduce((e,t)=>t.markClass?e+` `+t.markClass:e,``);o.add(n,r,j.mark({class:`cm-lintRange cm-lintRange-`+f+e,diagnostics:s.slice(),inclusiveEnd:s.some(e=>e.to>r)}))}if(c=r,c==d)break;for(let e=0;e<s.length;e++)s[e].to<=c&&s.splice(e--,1)}let f=o.finish();return new e(f,n,hv(f))}};function hv(e,t=null,n=0){let r=null;return e.between(n,1e9,(e,n,{spec:i})=>{if(!(t&&i.diagnostics.indexOf(t)<0)){if(!r)r=new pv(e,n,t||i.diagnostics[0]);else if(i.diagnostics.indexOf(r.diagnostic)<0)return!1;else r=new pv(r.from,n,r.diagnostic)}}),r}function gv(e,t){let n=t.pos,r=t.end||n,i=e.state.facet(Ov).hideOn(e,n,r);if(i!=null)return i;let a=e.startState.doc.lineAt(t.pos);return!!(e.effects.some(e=>e.is(vv))||e.changes.touchesRange(a.from,Math.max(a.to,r)))}function _v(e,t){return e.field(xv,!1)?t:t.concat(w.appendConfig.of(Vv))}var vv=w.define(),yv=w.define(),bv=w.define(),xv=jt.define({create(){return new mv(j.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let n=e.diagnostics.map(t.changes),r=null,i=e.panel;if(e.selected){let i=t.changes.mapPos(e.selected.from,1);r=hv(n,e.selected.diagnostic,i)||hv(n,null,i)}!n.size&&i&&t.state.facet(Ov).autoPanel&&(i=null),e=new mv(n,i,r)}for(let n of t.effects)if(n.is(vv)){let r=t.state.facet(Ov).autoPanel?n.value.length?Pv.open:null:e.panel;e=mv.init(n.value,r,t.state)}else n.is(yv)?e=new mv(e.diagnostics,n.value?Pv.open:null,e.selected):n.is(bv)&&(e=new mv(e.diagnostics,e.panel,n.value));return e},provide:e=>[Dl.from(e,e=>e.panel),R.decorations.from(e,e=>e.diagnostics)]}),Sv=j.mark({class:`cm-lintRange cm-lintRange-active`});function Cv(e,t,n){let{diagnostics:r}=e.state.field(xv),i,a=-1,o=-1;r.between(t-+(n<0),t+ +(n>0),(e,r,{spec:s})=>{if(t>=e&&t<=r&&(e==r||(t>e||n>0)&&(t<r||n<0)))return i=s.diagnostics,a=e,o=r,!1});let s=e.state.facet(Ov).tooltipFilter;return i&&s&&(i=s(i,e.state)),i?{pos:a,end:o,above:!0,create(){return{dom:wv(e,i)}}}:null}function wv(e,t){return O(`ul`,{class:`cm-tooltip-lint`},t.map(t=>jv(e,t,!1)))}var Tv=e=>{let t=e.state.field(xv,!1);(!t||!t.panel)&&e.dispatch({effects:_v(e.state,[yv.of(!0)])});let n=Cl(e,Pv.open);return n&&n.dom.querySelector(`.cm-panel-lint ul`).focus(),!0},Ev=e=>{let t=e.state.field(xv,!1);return!t||!t.panel?!1:(e.dispatch({effects:yv.of(!1)}),!0)},Dv=[{key:`Mod-Shift-m`,run:Tv,preventDefault:!0},{key:`F8`,run:e=>{let t=e.state.field(xv,!1);if(!t)return!1;let n=e.state.selection.main,r=hv(t.diagnostics,null,n.to+1);return!r&&(r=hv(t.diagnostics,null,0),!r||r.from==n.from&&r.to==n.to)?!1:(e.dispatch({selection:{anchor:r.from,head:r.to},scrollIntoView:!0}),yl(e,r.from,1,{tooltip:Bv,until:e=>e.docChanged||e.newSelection.main.head<r.from||e.newSelection.main.head>r.to}),!0)}}],Ov=C.define({combine(e){return{sources:e.map(e=>e.source).filter(e=>e!=null),...fn(e.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:kv,tooltipFilter:kv,needsRefresh:(e,t)=>e?t?n=>e(n)||t(n):e:t,hideOn:(e,t)=>e?t?(n,r,i)=>e(n,r,i)||t(n,r,i):e:t,autoPanel:(e,t)=>e||t})}}});function kv(e,t){return e?t?(n,r)=>t(e(n,r),r):e:t}function Av(e){let t=[];if(e)actions:for(let{name:n}of e){for(let e=0;e<n.length;e++){let r=n[e];if(/[a-zA-Z]/.test(r)&&!t.some(e=>e.toLowerCase()==r.toLowerCase())){t.push(r);continue actions}}t.push(``)}return t}function jv(e,t,n){let r=n?Av(t.actions):[];return O(`li`,{class:`cm-diagnostic cm-diagnostic-`+t.severity},O(`span`,{class:`cm-diagnosticText`},t.renderMessage?t.renderMessage(e):t.message),t.actions?.map((n,i)=>{let a=!1,o=r=>{if(r.preventDefault(),a)return;a=!0;let i=hv(e.state.field(xv).diagnostics,t);i&&n.apply(e,i.from,i.to)},{name:s}=n,c=r[i]?s.indexOf(r[i]):-1,l=c<0?s:[s.slice(0,c),O(`u`,s.slice(c,c+1)),s.slice(c+1)];return O(`button`,{type:`button`,class:`cm-diagnosticAction`+(n.markClass?` `+n.markClass:``),onclick:o,onmousedown:o,"aria-label":` Action: ${s}${c<0?``:` (access key "${r[i]})"`}.`},l)}),t.source&&O(`div`,{class:`cm-diagnosticSource`},t.source))}var Mv=class extends dr{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return O(`span`,{class:`cm-lintPoint cm-lintPoint-`+this.sev})}},Nv=class{constructor(e,t){this.diagnostic=t,this.id=`item_`+Math.floor(Math.random()*4294967295).toString(16),this.dom=jv(e,t,!0),this.dom.id=this.id,this.dom.setAttribute(`role`,`option`)}},Pv=class e{constructor(e){this.view=e,this.items=[];let t=t=>{if(!(t.ctrlKey||t.altKey||t.metaKey)){if(t.keyCode==27)Ev(this.view),this.view.focus();else if(t.keyCode==38||t.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(t.keyCode==40||t.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(t.keyCode==36)this.moveSelection(0);else if(t.keyCode==35)this.moveSelection(this.items.length-1);else if(t.keyCode==13)this.view.focus();else if(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:n}=this.items[this.selectedIndex],r=Av(n.actions);for(let i=0;i<r.length;i++)if(r[i].toUpperCase().charCodeAt(0)==t.keyCode){let t=hv(this.view.state.field(xv).diagnostics,n);t&&n.actions[i].apply(e,t.from,t.to)}}else return;t.preventDefault()}},n=e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)};this.list=O(`ul`,{tabIndex:0,role:`listbox`,"aria-label":this.view.state.phrase(`Diagnostics`),onkeydown:t,onclick:n}),this.dom=O(`div`,{class:`cm-panel-lint`},this.list,O(`button`,{type:`button`,name:`close`,"aria-label":this.view.state.phrase(`close`),onclick:()=>Ev(this.view)},`×`)),this.update()}get selectedIndex(){let e=this.view.state.field(xv).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(xv),n=0,r=!1,i=null,a=new Set;for(e.between(0,this.view.state.doc.length,(e,o,{spec:s})=>{for(let e of s.diagnostics){if(a.has(e))continue;a.add(e);let o=-1,s;for(let t=n;t<this.items.length;t++)if(this.items[t].diagnostic==e){o=t;break}o<0?(s=new Nv(this.view,e),this.items.splice(n,0,s),r=!0):(s=this.items[o],o>n&&(this.items.splice(n,o-n),r=!0)),t&&s.diagnostic==t.diagnostic?s.dom.hasAttribute(`aria-selected`)||(s.dom.setAttribute(`aria-selected`,`true`),i=s):s.dom.hasAttribute(`aria-selected`)&&s.dom.removeAttribute(`aria-selected`),n++}});n<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)r=!0,this.items.pop();this.items.length==0&&(this.items.push(new Nv(this.view,{from:-1,to:-1,severity:`info`,message:this.view.state.phrase(`No diagnostics`)})),r=!0),i?(this.list.setAttribute(`aria-activedescendant`,i.id),this.view.requestMeasure({key:this,read:()=>({sel:i.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let n=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/n:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/n)}})):this.selectedIndex<0&&this.list.removeAttribute(`aria-activedescendant`),r&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let n of this.items)if(n.dom.parentNode==this.list){for(;e!=n.dom;)t();e=n.dom.nextSibling}else this.list.insertBefore(n.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=hv(this.view.state.field(xv).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:bv.of(t)})}static open(t){return new e(t)}};function Fv(e,t=`viewBox="0 0 40 40"`){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function Iv(e){return Fv(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,`width="6" height="3"`)}var Lv=R.baseTheme({".cm-diagnostic":{padding:`3px 6px 3px 8px`,marginLeft:`-1px`,display:`block`,whiteSpace:`pre-wrap`},".cm-diagnostic-error":{borderLeft:`5px solid #d11`},".cm-diagnostic-warning":{borderLeft:`5px solid orange`},".cm-diagnostic-info":{borderLeft:`5px solid #999`},".cm-diagnostic-hint":{borderLeft:`5px solid #66d`},".cm-diagnosticAction":{font:`inherit`,border:`none`,padding:`2px 4px`,backgroundColor:`#444`,color:`white`,borderRadius:`3px`,marginLeft:`8px`,cursor:`pointer`},".cm-diagnosticSource":{fontSize:`70%`,opacity:.7},".cm-lintRange":{backgroundPosition:`left bottom`,backgroundRepeat:`repeat-x`,paddingBottom:`0.7px`},".cm-lintRange-error":{backgroundImage:Iv(`#f11`)},".cm-lintRange-warning":{backgroundImage:Iv(`orange`)},".cm-lintRange-info":{backgroundImage:Iv(`#999`)},".cm-lintRange-hint":{backgroundImage:Iv(`#66d`)},".cm-lintRange-active":{backgroundColor:`#ffdd9980`},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:`relative`,"&:after":{content:`""`,position:`absolute`,bottom:0,left:`-2px`,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,borderBottom:`4px solid #d11`}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:`orange`}},".cm-lintPoint-info":{"&:after":{borderBottomColor:`#999`}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:`#66d`}},".cm-panel.cm-panel-lint":{position:`relative`,"& ul":{maxHeight:`100px`,overflowY:`auto`,"& [aria-selected]":{backgroundColor:`#ddd`,"& u":{textDecoration:`underline`}},"&:focus [aria-selected]":{background_fallback:`#bdf`,backgroundColor:`Highlight`,color_fallback:`white`,color:`HighlightText`},"& u":{textDecoration:`none`},padding:0,margin:0},"& [name=close]":{position:`absolute`,top:`0`,right:`2px`,background:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:`#86714a80`},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:`#2e343e`}}});function Rv(e){return e==`error`?4:e==`warning`?3:e==`info`?2:1}function zv(e){let t=`hint`,n=1;for(let r of e){let e=Rv(r.severity);e>n&&(n=e,t=r.severity)}return t}var Bv=vl(Cv,{hideOn:gv}),Vv=[xv,R.decorations.compute([xv],e=>{let{selected:t,panel:n}=e.field(xv);return!t||!n||t.from==t.to?j.none:j.set([Sv.range(t.from,t.to)])}),Bv,Lv],Hv=[tu(),au(),Pc(),Op(),bf(),mc(),wc(),E.allowMultipleSelections.of(!0),Kd(),Ef(kf,{fallback:!0}),zf(),q_(),uv(),Yc(),Qc(),Vc(),Yh(),Ys.of([...$_,...Ph,...Rg,...qp,...df,...dv,...Dv])];function Uv(e){return RegExp(`^(?:`+e.join(`|`)+`)`,`i`)}function Wv(e){return RegExp(`^(?:`+e.join(`|`)+`)$`,`i`)}var Gv=Wv(`_G,_VERSION,assert,collectgarbage,dofile,error,getfenv,getmetatable,ipairs,load,loadfile,loadstring,module,next,pairs,pcall,print,rawequal,rawget,rawset,require,select,setfenv,setmetatable,tonumber,tostring,type,unpack,xpcall,coroutine.create,coroutine.resume,coroutine.running,coroutine.status,coroutine.wrap,coroutine.yield,debug.debug,debug.getfenv,debug.gethook,debug.getinfo,debug.getlocal,debug.getmetatable,debug.getregistry,debug.getupvalue,debug.setfenv,debug.sethook,debug.setlocal,debug.setmetatable,debug.setupvalue,debug.traceback,close,flush,lines,read,seek,setvbuf,write,io.close,io.flush,io.input,io.lines,io.open,io.output,io.popen,io.read,io.stderr,io.stdin,io.stdout,io.tmpfile,io.type,io.write,math.abs,math.acos,math.asin,math.atan,math.atan2,math.ceil,math.cos,math.cosh,math.deg,math.exp,math.floor,math.fmod,math.frexp,math.huge,math.ldexp,math.log,math.log10,math.max,math.min,math.modf,math.pi,math.pow,math.rad,math.random,math.randomseed,math.sin,math.sinh,math.sqrt,math.tan,math.tanh,os.clock,os.date,os.difftime,os.execute,os.exit,os.getenv,os.remove,os.rename,os.setlocale,os.time,os.tmpname,package.cpath,package.loaded,package.loaders,package.loadlib,package.path,package.preload,package.seeall,string.byte,string.char,string.dump,string.find,string.format,string.gmatch,string.gsub,string.len,string.lower,string.match,string.rep,string.reverse,string.sub,string.upper,table.concat,table.insert,table.maxn,table.remove,table.sort`.split(`,`)),Kv=Wv([`and`,`break`,`elseif`,`false`,`nil`,`not`,`or`,`return`,`true`,`function`,`end`,`if`,`then`,`else`,`do`,`while`,`repeat`,`until`,`for`,`in`,`local`]),qv=Wv([`function`,`if`,`repeat`,`do`,`\\(`,`{`]),Jv=Wv([`end`,`until`,`\\)`,`}`]),Yv=Uv([`end`,`until`,`\\)`,`}`,`else`,`elseif`]);function Xv(e){for(var t=0;e.eat(`=`);)++t;return e.eat(`[`),t}function Zv(e,t){var n=e.next();return n==`-`&&e.eat(`-`)?e.eat(`[`)&&/[\[=]/.test(e.peek())?(t.cur=Qv(Xv(e),`comment`))(e,t):(e.skipToEnd(),`comment`):n==`"`||n==`'`?(t.cur=$v(n))(e,t):n==`[`&&/[\[=]/.test(e.peek())?(t.cur=Qv(Xv(e),`string`))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),`number`):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),`variable`):null}function Qv(e,t){return function(n,r){for(var i=null,a;(a=n.next())!=null;)if(i==null)a==`]`&&(i=0);else if(a==`=`)++i;else if(a==`]`&&i==e){r.cur=Zv;break}else i=null;return t}}function $v(e){return function(t,n){for(var r=!1,i;(i=t.next())!=null&&(i!=e||r);)r=!r&&i==`\\`;return r||(n.cur=Zv),`string`}}var ey={name:`lua`,startState:function(){return{basecol:0,indentDepth:0,cur:Zv}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),r=e.current();return n==`variable`&&(Kv.test(r)?n=`keyword`:Gv.test(r)&&(n=`builtin`)),n!=`comment`&&n!=`string`&&(qv.test(r)?++t.indentDepth:Jv.test(r)&&--t.indentDepth),n},indent:function(e,t,n){var r=Yv.test(t);return e.basecol+n.unit*(e.indentDepth-+!!r)},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:`--`,block:{open:`--[[`,close:`]]--`}}}},ty=`#e5c07b`,ny=`#e06c75`,ry=`#56b6c2`,iy=`#ffffff`,ay=`#abb2bf`,oy=`#7d8799`,sy=`#61afef`,cy=`#98c379`,ly=`#d19a66`,uy=`#c678dd`,dy=`#21252b`,fy=`#2c313a`,py=`#282c34`,my=`#353a42`,hy=`#3E4451`,gy=`#528bff`,_y=[R.theme({"&":{color:ay,backgroundColor:py},".cm-content":{caretColor:gy},".cm-cursor, .cm-dropCursor":{borderLeftColor:gy},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:hy},".cm-panels":{backgroundColor:dy,color:ay},".cm-panels.cm-panels-top":{borderBottom:`2px solid black`},".cm-panels.cm-panels-bottom":{borderTop:`2px solid black`},".cm-searchMatch":{backgroundColor:`#72a1ff59`,outline:`1px solid #457dff`},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:`#6199ff2f`},".cm-activeLine":{backgroundColor:`#6699ff0b`},".cm-selectionMatch":{backgroundColor:`#aafe661a`},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:`#bad0f847`},".cm-gutters":{backgroundColor:py,color:oy,border:`none`},".cm-activeLineGutter":{backgroundColor:fy},".cm-foldPlaceholder":{backgroundColor:`transparent`,border:`none`,color:`#ddd`},".cm-tooltip":{border:`none`,backgroundColor:my},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:`transparent`,borderBottomColor:`transparent`},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:my,borderBottomColor:my},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:fy,color:ay}}},{dark:!0}),Ef(Sf.define([{tag:U.keyword,color:uy},{tag:[U.name,U.deleted,U.character,U.propertyName,U.macroName],color:ny},{tag:[U.function(U.variableName),U.labelName],color:sy},{tag:[U.color,U.constant(U.name),U.standard(U.name)],color:ly},{tag:[U.definition(U.name),U.separator],color:ay},{tag:[U.typeName,U.className,U.number,U.changed,U.annotation,U.modifier,U.self,U.namespace],color:ty},{tag:[U.operator,U.operatorKeyword,U.url,U.escape,U.regexp,U.link,U.special(U.string)],color:ry},{tag:[U.meta,U.comment],color:oy},{tag:U.strong,fontWeight:`bold`},{tag:U.emphasis,fontStyle:`italic`},{tag:U.strikethrough,textDecoration:`line-through`},{tag:U.link,color:oy,textDecoration:`underline`},{tag:U.heading,fontWeight:`bold`,color:ny},{tag:[U.atom,U.bool,U.special(U.variableName)],color:ly},{tag:[U.processingInstruction,U.string,U.inserted],color:cy},{tag:U.invalid,color:iy}]))],vy=[[`General`,[[`print(...)`,`both`,`Shows values in the console.`],[`Citizen.CreateThread(fn) / CreateThread(fn)`,`both`,`Starts a background thread (simulated time).`],[`Wait(ms) / Citizen.Wait(ms)`,`both`,`Pauses the current thread. Wait(0) = next frame (~16 ms).`],[`SetTimeout(ms, fn)`,`both`,`Runs fn once after ms.`],[`GetGameTimer()`,`both`,`Simulated time in ms since the run started.`],[`IsDuplicityVersion()`,`both`,`true on the server side, false on the client.`],[`GetCurrentResourceName()`,`both`,`Always "my_first_resource" here.`],[`json.encode(t) / json.decode(s)`,`both`,`Table ↔ JSON text.`],[`vector3(x, y, z), vector4, vector2`,`both`,`Positions. #(a - b) is the distance.`],[`GetHashKey(name) / joaat(name)`,`both`,`Model name → hash number (real algorithm).`]]],[`Events & commands`,[[`RegisterNetEvent(name [, fn])`,`both`,`Allow an event from the network (and optionally handle it).`],[`AddEventHandler(name, fn)`,`both`,`Run fn when the event arrives.`],[`RemoveEventHandler(handle)`,`both`,`Stop listening.`],[`TriggerEvent(name, ...)`,`both`,`Local event on the same side. "chat:addMessage" shows a chat line.`],[`TriggerServerEvent(name, ...)`,`client`,`Client → server. source on the server = 1 (Tina).`],[`TriggerClientEvent(name, target, ...)`,`server`,`Server → client. target -1 = everyone.`],[`RegisterCommand(name, fn(source, args, raw), restricted)`,`both`,`Creates /name. Type commands in the console box after running.`],[`ExecuteCommand("name args")`,`both`,`Runs a command from code.`],[`IsPlayerAceAllowed(id, ace)`,`server`,`Real ACE rules: Tina (1) is group.admin, Bob (2) is group.police, Steve (3) has nothing.`],[`source`,`both`,`Inside handlers: who sent the event / typed the command.`]]],[`Players & peds`,[[`PlayerId()`,`client`,`Your player index (0).`],[`GetPlayerServerId(PlayerId())`,`client`,`Your server ID (1).`],[`PlayerPedId()`,`client`,`Your ped handle (1001).`],[`GetPlayerName(id)`,`both`,`1 = Tina, 2 = Bob, 3 = Sneaky_Steve.`],[`GetPlayers()`,`server`,`List of IDs as STRINGS: {"1", "2", "3"}.`],[`GetPlayerPed(id)`,`both`,`A player's ped handle.`],[`GetPlayerIdentifiers(id) / GetPlayerIdentifierByType(id, "license")`,`server`,`Permanent IDs like license:...`],[`DropPlayer(id, reason)`,`server`,`Pretends to kick.`],[`GetEntityCoords(ent) / SetEntityCoords(ent, x, y, z)`,`both`,`Position of a ped/vehicle.`],[`GetEntityHealth / SetEntityHealth(ent, hp)`,`both / client`,`Health 100 (dead) to 200 (full).`],[`GetPedArmour / SetPedArmour(ped, n)`,`both`,`Armour 0 to 100.`],[`GetEntityHeading, SetEntityHeading, DoesEntityExist, IsEntityDead`,`both`,``],[`IsPedInAnyVehicle, GetVehiclePedIsIn`,`both`,`Always on foot here.`],[`GiveWeaponToPed, RemoveAllPedWeapons`,`both`,`Prints what would happen.`]]],[`Vehicles, models & input`,[[`RequestModel, HasModelLoaded, SetModelAsNoLongerNeeded`,`client`,`A requested model loads after ~50 ms. "tina_custom" exists but never loads (practise timeouts).`],[`IsModelInCdimage, IsModelValid, IsModelAVehicle, IsModelAPed`,`both`,`Known: adder, sultan, zentorno, t20, faggio, blista, taxi, police, ambulance, bati, burrito, mule, flatbed, ... and ped models.`],[`CreateVehicle(model, x, y, z, heading, isNet, mission)`,`both`,`Client: returns 0 if the model isn't loaded. Server: no loading needed.`],[`CreatePed(type, model, x, y, z, heading, isNet, mission), CreateVehicleServerSetter`,`both / server`,``],[`SetPedIntoVehicle, TaskWarpPedIntoVehicle, DeleteEntity, DeleteVehicle, DeletePed`,`both`,`DeleteEntity refuses to delete a player ped.`],[`GetEntityModel, GetEntityType, GetAllVehicles, GetAllPeds`,`both / server`,``],[`SetVehicleNumberPlateText / GetVehicleNumberPlateText, SetVehicleDoorsLocked, SetVehicleOnGroundProperly`,`both`,``],[`FreezeEntityPosition, SetEntityInvincible, SetBlockingOfNonTemporaryEvents`,`both`,``],[`NetworkGetNetworkIdFromEntity, NetworkGetEntityFromNetworkId, NetToVeh, NetToPed, VehToNet, PedToNet`,`both`,`Network ID = entity + 70000.`],[`IsControlJustPressed(0, 38)`,`client`,`The practice player presses E (38) at ~1.2 s and ~3.5 s.`],[`DrawMarker(...)`,`client`,`Does nothing visible (counted).`],[`BeginTextCommandDisplayHelp / AddTextComponentSubstringPlayerName / EndTextCommandDisplayHelp`,`client`,`Shows [help box] text.`],[`BeginTextCommandThefeedPost / ... / EndTextCommandThefeedPostTicker`,`client`,`Shows a [notification].`]]],[`Blips, markers & text`,[[`AddBlipForCoord, AddBlipForEntity, AddBlipForRadius`,`client`,`Returns a blip handle (recorded, see the checker).`],[`SetBlipSprite, SetBlipColour, SetBlipScale, SetBlipAsShortRange, SetBlipDisplay, SetBlipRoute, SetBlipAlpha`,`client`,``],[`BeginTextCommandSetBlipName / AddTextComponentString / EndTextCommandSetBlipName`,`client`,`Sets the blip's map name.`],[`DoesBlipExist, RemoveBlip, SetNewWaypoint`,`client`,``],[`SetTextFont, SetTextScale, SetTextColour, SetTextCentre, SetTextOutline`,`client`,``],[`BeginTextCommandDisplayText / EndTextCommandDisplayText(x, y)`,`client`,`Draws on-screen text (counted per frame).`],[`SetDrawOrigin, ClearDrawOrigin, DrawRect, GetScreenCoordFromWorldCoord`,`client`,`For 3D text.`]]],[`Chat & NUI`,[[`TriggerEvent("chat:addMessage", { color, args | template })`,`client`,`Shows a chat line (^ colour codes stripped).`],[`TriggerEvent("chat:addSuggestion", "/cmd", help, params)`,`client`,`Printed.`],[`SendNUIMessage(table)`,`client`,`Recorded as a message to the page.`],[`RegisterNUICallback(name, fn(data, cb))`,`client`,`Always call cb(...).`],[`SetNuiFocus(hasFocus, hasCursor), IsNuiFocused`,`client`,``]]],[`Exports, callbacks & promises`,[[`exports("Name", fn)`,`both`,`Export a function from my_first_resource.`],[`exports.practice_bank:GetMoney(id) / AddMoney(id, n) / RemoveMoney(id, n)`,`server`,`A fake bank resource. Bank: Tina 2500, Bob 800, Steve 0. Use a colon!`],[`exports["practice-notify"]:Notify(id, text)`,`both`,`A fake notification resource.`],[`GetResourceState(name)`,`both`,`"started" for the fake resources, "missing" otherwise.`],[`promise.new(), p:resolve(v), p:reject(e), Citizen.Await(p)`,`both`,`Await must run inside a thread or handler.`]]],[`State bags`,[[`GlobalState.key / GlobalState:set(key, value, replicated)`,`both`,`Clients can read but not set it.`],[`Player(id).state, Entity(ent).state, LocalPlayer.state`,`both`,`:set(key, value, true) replicates.`],[`AddStateBagChangeHandler(key, bagFilter, fn(bag, key, value)), RemoveStateBagChangeHandler`,`both`,``],[`GetPlayerFromStateBagName(bag), GetEntityFromStateBagName(bag)`,`both`,`e.g. "player:2" → 2`]]],[`Permissions, convars & identifiers`,[[`ExecuteCommand("add_ace group.police police allow")`,`server`,`Also add_principal, remove_ace, remove_principal.`],[`IsPlayerAceAllowed(id, ace), IsPrincipalAceAllowed(principal, ace)`,`server`,`Hierarchical: "command" covers "command.kick". deny wins.`],[`RegisterCommand(name, fn, true)`,`server`,`Restricted: needs ace command.<name>.`],[`GetConvar(name, default), GetConvarInt(name, default), SetConvar(name, value)`,`server`,``],[`GetNumPlayerIdentifiers(id), GetPlayerIdentifier(id, index)`,`server`,`index starts at 0.`],[`GetPlayerEndpoint(id), GetPlayerTokens(id)`,`server`,``]]],[`Database (fake oxmysql)`,[[`MySQL.query.await(sql, params)`,`server`,`Rows as a list. Must run in a thread/handler. Tables: users, owned_vehicles, bans.`],[`MySQL.single.await / MySQL.scalar.await`,`server`,`First row / first value (or nil).`],[`MySQL.insert.await / MySQL.update.await`,`server`,`New id / number of rows changed.`],[`MySQL.prepare.await, and the callback forms MySQL.query(sql, params, cb)`,`server`,``],[`? and @name placeholders`,`server`,`Always use them: building SQL with .. is flagged as an injection risk.`]]],[`Connecting & leaving`,[[`AddEventHandler("playerConnecting", fn(name, setKickReason, deferrals))`,`server`,`deferrals.defer / update / done(reason). source is a temporary ID.`],[`AddEventHandler("playerDropped", fn(reason))`,`server`,`source = the player who left.`]]],[`Time (os is server-only)`,[[`os.time(), os.date(fmt, t), os.clock(), os.difftime(a, b)`,`server`,`Not available on the client: use GetGameTimer() there.`]]],[`Storage (KVP)`,[[`SetResourceKvp(key, text) / GetResourceKvpString(key)`,`both`,`Kept in this browser between runs.`],[`SetResourceKvpInt / GetResourceKvpInt`,`both`,`Whole numbers (0 if missing).`],[`SetResourceKvpFloat / GetResourceKvpFloat`,`both`,`Decimals.`],[`DeleteResourceKvp(key)`,`both`,``]]],[`fxmanifest.lua (side: manifest)`,[[`fx_version, game, lua54, author, description, version`,`manifest`,`Recorded and printed.`],[`client_script(s), server_script(s), shared_script(s), files, dependencies`,`manifest`,``],[`ui_page, loadscreen, this_is_a_map, provide, escrow_ignore, node_version`,`manifest`,``]]]],yy=`Citizen.CreateThread,CreateThread,Wait,Citizen.Wait,SetTimeout,GetGameTimer,IsDuplicityVersion,GetCurrentResourceName,vector3,GetHashKey,RegisterNetEvent,AddEventHandler,RemoveEventHandler,TriggerEvent,TriggerServerEvent,TriggerClientEvent,RegisterCommand,ExecuteCommand,IsPlayerAceAllowed,PlayerId,GetPlayerServerId,PlayerPedId,GetPlayerName,GetPlayers,GetPlayerPed,GetPlayerIdentifiers,GetPlayerIdentifierByType,DropPlayer,GetEntityCoords,SetEntityCoords,GetEntityHealth,SetEntityHealth,GetPedArmour,SetPedArmour,GetEntityHeading,SetEntityHeading,DoesEntityExist,IsEntityDead,IsPedInAnyVehicle,GetVehiclePedIsIn,GiveWeaponToPed,RemoveAllPedWeapons,RequestModel,HasModelLoaded,IsModelInCdimage,SetModelAsNoLongerNeeded,CreateVehicle,SetPedIntoVehicle,DeleteEntity,IsControlJustPressed,DrawMarker,BeginTextCommandDisplayHelp,AddTextComponentSubstringPlayerName,EndTextCommandDisplayHelp,BeginTextCommandThefeedPost,EndTextCommandThefeedPostTicker,SetResourceKvp,GetResourceKvpString,SetResourceKvpInt,GetResourceKvpInt,SetResourceKvpFloat,GetResourceKvpFloat,DeleteResourceKvp,json.encode,json.decode,IsModelValid,IsModelAVehicle,IsModelAPed,CreatePed,CreateVehicleServerSetter,TaskWarpPedIntoVehicle,DeleteVehicle,DeletePed,GetEntityModel,GetEntityType,GetAllVehicles,GetAllPeds,SetVehicleNumberPlateText,GetVehicleNumberPlateText,SetVehicleDoorsLocked,SetVehicleOnGroundProperly,FreezeEntityPosition,SetEntityInvincible,SetBlockingOfNonTemporaryEvents,NetworkGetNetworkIdFromEntity,NetworkGetEntityFromNetworkId,NetToVeh,NetToPed,VehToNet,PedToNet,AddBlipForCoord,AddBlipForEntity,AddBlipForRadius,SetBlipSprite,SetBlipColour,SetBlipScale,SetBlipAsShortRange,SetBlipDisplay,SetBlipRoute,SetBlipAlpha,BeginTextCommandSetBlipName,AddTextComponentString,EndTextCommandSetBlipName,DoesBlipExist,RemoveBlip,SetNewWaypoint,SetTextFont,SetTextScale,SetTextColour,SetTextCentre,SetTextOutline,BeginTextCommandDisplayText,EndTextCommandDisplayText,SetDrawOrigin,ClearDrawOrigin,DrawRect,GetScreenCoordFromWorldCoord,SendNUIMessage,RegisterNUICallback,SetNuiFocus,IsNuiFocused,exports,GetResourceState,promise.new,Citizen.Await,GlobalState,Player,Entity,LocalPlayer,AddStateBagChangeHandler,RemoveStateBagChangeHandler,GetPlayerFromStateBagName,GetEntityFromStateBagName,IsPrincipalAceAllowed,GetConvar,GetConvarInt,SetConvar,GetNumPlayerIdentifiers,GetPlayerIdentifier,GetPlayerEndpoint,GetPlayerTokens,MySQL.query.await,MySQL.single.await,MySQL.scalar.await,MySQL.insert.await,MySQL.update.await,MySQL.prepare.await,os.time,os.date,os.clock`.split(`,`),by=w.define(),xy=j.line({class:`cm-errline`}),Sy=jt.define({create:()=>j.none,update(e,t){e=e.map(t.changes);for(let n of t.effects)if(n.is(by)){if(n.value==null)e=j.none;else{let r=Math.min(Math.max(1,n.value),t.state.doc.lines);e=j.set([xy.range(t.state.doc.line(r).from)])}}return t.docChanged&&(e=j.none),e},provide:e=>R.decorations.from(e)}),Cy=[...[`local`,`function`,`end`,`if`,`then`,`else`,`elseif`,`for`,`in`,`do`,`while`,`repeat`,`until`,`return`,`break`,`nil`,`true`,`false`,`and`,`or`,`not`].map(e=>({label:e,type:`keyword`})),...`print,type,tostring,tonumber,pairs,ipairs,pcall,error,assert,select,string.format,string.upper,string.lower,string.sub,string.find,string.gsub,string.rep,table.insert,table.remove,table.concat,table.sort,math.floor,math.ceil,math.max,math.min,math.random,math.abs,math.sqrt,json.encode,json.decode`.split(`,`).map(e=>({label:e,type:`function`})),...yy.map(e=>({label:e,type:`function`}))];function wy(e,{doc:t=``,onChange:n,onRun:r}={}){let i=new R({parent:e,state:E.create({doc:t,extensions:[Hv,Ys.of([Fh,{key:`Mod-Enter`,run:()=>(r&&r(),!0)}]),Yf.define(ey),Ad.of(`  `),E.tabSize.of(2),_y,Sy,uv({override:[Yg(Cy)],activateOnTyping:!0}),R.lineWrapping,R.contentAttributes.of({autocapitalize:`off`,autocorrect:`off`,spellcheck:`false`}),R.updateListener.of(e=>{e.docChanged&&n&&n(e.state.doc.toString())})]})});return{view:i,get:()=>i.state.doc.toString(),set:e=>i.dispatch({changes:{from:0,to:i.state.doc.length,insert:e}}),markError:e=>i.dispatch({effects:by.of(e)}),insert(e){let t=i.state.selection.main;i.dispatch({changes:{from:t.from,to:t.to,insert:e},selection:{anchor:t.from+e.length}}),i.focus()},undo:()=>Ap(i),redo:()=>jp(i),focus:()=>i.focus(),destroy:()=>i.destroy()}}var Ty=Yf.define(ey);function Ey(e){e.querySelectorAll(`pre > code:not(.hl)`).forEach(e=>{let t=e.textContent,n=Ty.parser.parse(t),r=document.createDocumentFragment();Yu(t,n,fd,(e,t)=>{if(t){let n=document.createElement(`span`);n.className=t,n.textContent=e,r.appendChild(n)}else r.appendChild(document.createTextNode(e))},()=>r.appendChild(document.createTextNode(`
`))),e.textContent=``,e.appendChild(r),e.classList.add(`hl`)})}var q=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function Dy(e){let t=String(e).match(/your code:(\d+):/);return t?Number(t[1]):null}function Oy(e,{userLines:t=1/0}={}){if(e=String(e),e.startsWith(`LONGRUN::`))return{title:`Your code ran too long without pausing`,text:`The practice world stopped <b>${q(e.slice(9))}</b> after millions of steps without a <code>Wait()</code>. That is almost always a loop that never ends: a <code>while</code> whose condition never becomes false, or a <code>while true do</code> without <code>Wait(...)</code> inside. In a real FiveM server this would <b>freeze the game or the server</b>. Make sure something in the loop changes the condition, or add <code>Wait(500)</code> (or similar) inside the loop.`};let n=Dy(e),r=n&&n>t,i=[[/attempt to index a nil value \(global 'os'\)/,()=>`In FiveM the <code>os</code> library (<code>os.time</code>, <code>os.date</code>) only exists in <b>server</b> scripts. Client scripts measure time with <code>GetGameTimer()</code>, or ask the server for the real date and time.`],[/No such export (\S+) in resource (\S+)/,e=>`The resource <code>${q(e[2])}</code> has no export called <code>${q(e[1])}</code>. Check the spelling and capital letters, and that the other resource really calls <code>exports('${q(e[1])}', ...)</code>.`],[/No such resource "([^"]+)"/,e=>`There is no started resource called <code>${q(e[1])}</code>. Check the folder name (exactly, including <code>-</code> vs <code>_</code>), that it is ensured in server.cfg, and add it to <code>dependencies</code> in your fxmanifest.`],[/MySQL[^:]*: (.*)|MySQL syntax error(.*)/,e=>`The database didn't understand the query: ${q(e[1]||e[2]||``)}. Check the table and column names and that every value is a <code>?</code> with a matching entry in the parameters table.`],[/attempt to call a nil value \((global|local|field|method|upvalue) '([^']+)'\)/,e=>`You tried to <b>run</b> <code>${q(e[2])}(...)</code> like a function, but <code>${q(e[2])}</code> is <b>nil</b> (it doesn't exist at that moment). Common causes: a typo or wrong capital letters (Lua is case-sensitive: <code>GetPlayerName</code> ≠ <code>getPlayerName</code>), the function is defined <i>below</i> the line that calls it, it was made <code>local</code> inside another block, or it is a native that only exists on the other side (client vs server).`],[/attempt to call a (\w+) value/,e=>`You put <code>( )</code> after something that is a <b>${q(e[1])}</b>, not a function. Only functions can be called.`],[/attempt to index a nil value \((global|local|field|upvalue) '([^']+)'\)/,e=>`You used <code>${q(e[2])}.something</code> or <code>${q(e[2])}[...]</code>, but <code>${q(e[2])}</code> is <b>nil</b>. Check: is the name spelled exactly right? Was it given a value before this line? If it comes from a table lookup or function, did that actually return something?`],[/attempt to index a nil value/,()=>`You used <code>x.something</code> or <code>x[...]</code> on something that is <b>nil</b>. Print the value just before this line to see which part is missing.`],[/attempt to index a (\w+) value/,e=>`You used <code>.</code> or <code>[ ]</code> on a <b>${q(e[1])}</b>. Only tables (and strings, for string functions) can be indexed.`],[/attempt to perform arithmetic on a nil value(?: \((\w+) '([^']+)'\))?/,e=>`Maths with <b>nil</b>${e[2]?` (<code>${q(e[2])}</code>)`:``}: one of the values in the calculation doesn't exist. Check spelling, and make sure it was set before this line. If it came from a player (command/event), use <code>tonumber</code> and check it isn't nil.`],[/attempt to perform arithmetic on a (\w+) value(?: \((\w+) '([^']+)'\))?/,e=>`Maths with a <b>${q(e[1])}</b>${e[3]?` (<code>${q(e[3])}</code>)`:``}. ${e[1]===`string`?`Text that isn't a number can't be used in maths. Convert it first with <code>tonumber(...)</code>. To <i>join</i> text use <code>..</code>, not <code>+</code>.`:`Only numbers can be used in maths.`}`],[/attempt to concatenate a (\w+) value(?: \((\w+) '([^']+)'\))?/,e=>`You used <code>..</code> to join text with a <b>${q(e[1])}</b>${e[3]?` (<code>${q(e[3])}</code>)`:``}. Only strings and numbers can be joined. `+(e[1]===`nil`?`The value is missing: check spelling and that it was set. While debugging, <code>tostring(x)</code> always works.`:`Wrap it in <code>tostring(...)</code> first.`)],[/attempt to compare (\w+) with (\w+)/,e=>`You compared a <b>${q(e[1])}</b> with a <b>${q(e[2])}</b> using <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code> or <code>&gt;=</code>. Both sides must be numbers (or both text). `+(e[1]===`nil`||e[2]===`nil`?`One side is nil: it was never set, or it is misspelled.`:`Convert text with <code>tonumber(...)</code> first.`)],[/attempt to get length of a (\w+) value/,e=>`You used <code>#</code> on a <b>${q(e[1])}</b>. <code>#</code> only works on strings, tables (lists) and vectors.`],[/'end' expected(?: \(to close '(\w+)' at line (\d+)\))?/,e=>`Lua reached the end but something is still open. ${e[1]?`The <code>${q(e[1])}</code> on <b>line ${e[2]}</b> needs a matching <code>end</code>.`:`An <code>if</code>, <code>for</code>, <code>while</code> or <code>function</code> is missing its <code>end</code>.`} Tip: indent your code so every block lines up with its <code>end</code>.`],[/'then' expected/,()=>`After an <code>if</code> (or <code>elseif</code>) condition you need the word <code>then</code>. Also check you used <code>==</code> (compare) and not <code>=</code> (store) in the condition.`],[/'do' expected/,()=>`A <code>for</code> or <code>while</code> line must end with <code>do</code>. Check the loop line, e.g. <code>for i = 1, 10 do</code>.`],[/'=' expected/,()=>`Lua expected a <code>=</code>. Often this means a typo turned a word into something Lua reads as a variable name, a missing <code>(</code>, or a missing <code>..</code> between pieces of text. Look closely at that line.`],[/unfinished string/,()=>`A piece of text was started with a quote but never closed. Every <code>"</code> needs a matching <code>"</code> on the same line (same for <code>'</code>).`],[/unexpected symbol near '?([^']*)'?/,e=>`Lua found something it didn't expect${e[1]?` near <code>${q(e[1])}</code>`:``}. Usually a typo: a missing quote, bracket or comma, <code>!=</code> instead of <code>~=</code>, or <code>x++</code>/<code>+=</code> (not Lua). Check this line and the one above.`],[/'<eof>' expected/,()=>`There is an extra <code>end</code> (or a stray word) that doesn't belong to anything. Count your blocks: each <code>if/for/while/function</code> needs exactly one <code>end</code>.`],[/'\)' expected/,()=>`A <code>(</code> was opened but not closed with <code>)</code>, or a comma is missing between values.`],[/'}' expected/,()=>`A table <code>{</code> was opened but not closed, or a comma is missing between items.`],[/malformed number/,()=>`Something that starts with a digit isn't a valid number. Variable names can't start with a digit, and numbers use a dot for decimals: <code>2.5</code>.`],[/bad argument #(\d+) to '([^']+)' \(([^)]*)\)/,e=>`The value number ${e[1]} you passed to <code>${q(e[2])}</code> is wrong: ${q(e[3])}.`],[/stack overflow/,()=>`A function kept calling itself (or two functions kept calling each other) forever. Every recursive function needs a way to stop.`],[/only exists on the (\w+) side/,e=>`Client and server have different functions. Run this as a ${q(e[1])} script (use the side selector in the Playground), or move this code to a ${q(e[1])} file.`],[/Wait\(\) can only be used inside a thread/,()=>`Put timed code inside <code>Citizen.CreateThread(function() ... end)</code> and call <code>Wait</code> in there.`]];for(let[t,a]of i){let i=e.match(t);if(i)return{title:r?`Error inside the checker (your code probably left something missing)`:n?`Problem on line ${n}`:`Problem`,text:a(i),line:r?null:n}}return{title:n?`Problem on line ${n}`:`Problem`,text:`Read the message above: it names the line and what confused Lua. Look at that line and the one above it.`,line:r?null:n}}var ky=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function Ay(e,{onCommand:t,onErrorLine:n}={}){e.classList.add(`console`),e.innerHTML=`<div class="console-out" role="log" aria-live="polite"></div>
    <form class="console-cmd" hidden><span class="prompt">Tina&gt;</span><input type="text" placeholder="type a command, e.g. /hello" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="send"><button class="btn small">Send</button></form>`;let r=e.querySelector(`.console-out`),i=e.querySelector(`.console-cmd`),a=i.querySelector(`input`),o=1/0;i.addEventListener(`submit`,e=>{e.preventDefault();let n=a.value.trim();n&&(a.value=``,t&&t(n.startsWith(`/`)?n:`/`+n))});let s={clear(){r.innerHTML=``},setUserLines(e){o=e||1/0},line(e){if(e.kind===`err`)return s.error(e.text);let t=document.createElement(`div`);t.className=`cl cl-`+e.kind,t.textContent=e.text===``?`\xA0`:e.text,r.appendChild(t),r.scrollTop=r.scrollHeight},error(e){let t=Oy(e,{userLines:o}),i=document.createElement(`div`);i.className=`cl cl-err`,i.innerHTML=`<div class="err-raw">❌ ${ky(e.startsWith(`LONGRUN::`)?`Stopped: endless loop (no Wait / condition never false)`:e)}</div><div class="err-help"><b>${ky(t.title)}</b><br>${t.text}</div>`,r.appendChild(i),r.scrollTop=r.scrollHeight,t.line&&n&&n(t.line)},note(e,t=`cl-note`){let n=document.createElement(`div`);n.className=`cl `+t,n.innerHTML=e,r.appendChild(n),r.scrollTop=r.scrollHeight},summary(e,{quietGlobals:t=!1}={}){if(e&&!e.timeout){!e.lines.length&&!(e.errors||[]).length&&s.note(`(no output: your code ran but didn't print anything)`,`cl-dim`);for(let t of e.busy||[])s.note(`⚠ <b>Performance:</b> the ${ky(t.name)} ran every frame (<code>Wait(0)</code>) <b>${t.wait0}</b> times in ${(e.simTime/1e3).toFixed(1)} s of game time. That's about 60 times per second on every player's PC. Fine for drawing markers/text or reading key presses; for anything else use a bigger Wait (500, 1000...).`,`cl-perf`);!t&&(e.globals||[]).length&&s.note(`ℹ Global variable(s) created: <code>${e.globals.map(ky).join(`</code>, <code>`)}</code>. Unless you meant to share them (like <code>Config</code>), add <code>local</code> in front (lesson 2 explains why).`,`cl-info`),e.alive>0&&s.note(`⏱ ${e.alive} thread(s) still running when the ${(e.simTime/1e3).toFixed(1)} s simulation stopped (normal for <code>while true</code> loops).`,`cl-dim`)}},showCommand(e){i.hidden=!e},focusCommand(){a.focus()}};return s}var jy=15e3,My=null,Ny=0,Py=new Map;function Fy(){My=new Worker(new URL(new URL(`worker-9-BUXeq9.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),My.onmessage=e=>{let t=Py.get(e.data.id);t&&(e.data.type===`line`?t.onLine&&t.onLine(e.data.line):(clearTimeout(t.timer),Py.delete(e.data.id),t.resolve(e.data.res)))},My.onerror=e=>{for(let[t,n]of Py)clearTimeout(n.timer),n.resolve({internal:!0,errors:[`The Lua engine failed to start: `+(e.message||`unknown error`)],lines:[]});Py.clear(),My=null}}function Iy(e,t){My||Fy();let n=++Ny;return new Promise(r=>{let i=setTimeout(()=>{try{My.terminate()}catch{}My=null,Py.delete(n),r({timeout:!0,errors:[`LONGRUN::your code`],lines:[]})},jy);Py.set(n,{resolve:r,onLine:t,timer:i}),My.postMessage({...e,id:n})})}var Ly={run:(e,t,n)=>Iy({type:`run`,code:e,opts:t},n),check:(e,t,n,r)=>Iy({type:`check`,ex:e,code:t,opts:n},r),command:(e,t)=>Iy({type:`command`,line:e,pid:1},t),warmup:()=>Iy({type:`ping`}),busy:()=>Py.size>0},Ry=`luaLearn.v1`,zy=new Set;function By(){return{progress:{completed:{},quiz:{},lastLesson:null,updatedAt:0},code:{},dirty:{progress:!1,code:{}},kvp:`{}`,lastSync:0}}var J=Vy();function Vy(){try{let e=JSON.parse(localStorage.getItem(Ry));if(e&&e.progress){let t=By();return{...t,...e,progress:{...t.progress,...e.progress},dirty:{...t.dirty,...e.dirty||{}}}}}catch{}return By()}function Hy(){try{localStorage.setItem(Ry,JSON.stringify(J))}catch(e){console.warn(`localStorage full?`,e)}}function Uy(e){for(let t of zy)t(e)}var Y={get state(){return J},onChange(e){return zy.add(e),()=>zy.delete(e)},isComplete:e=>!!J.progress.completed[e],completedCount:()=>Object.keys(J.progress.completed).length,setComplete(e,t=!0){if(t){if(J.progress.completed[e])return;J.progress.completed[e]=Date.now()}else delete J.progress.completed[e];J.progress.updatedAt=Date.now(),J.dirty.progress=!0,Hy(),Uy(`progress`)},setQuiz(e,t,n){let r=J.progress.quiz[e];r&&r.best>=t||(J.progress.quiz[e]={best:t,total:n,ts:Date.now()},J.progress.updatedAt=Date.now(),J.dirty.progress=!0,Hy(),Uy(`progress`))},setLastLesson(e){J.progress.lastLesson!==e&&(J.progress.lastLesson=e,J.progress.updatedAt=Date.now(),J.dirty.progress=!0,Hy(),Uy(`progress-quiet`))},getCode:e=>{let t=J.code[e];return t&&!t.deleted?t:null},listSnippets:()=>Object.entries(J.code).filter(([e,t])=>e.startsWith(`play-`)&&!t.deleted).map(([e,t])=>({key:e,...t})).sort((e,t)=>t.updatedAt-e.updatedAt),saveCode(e,t,n={}){let r=J.code[e]||{};(r.code!==t||r.deleted||n.title)&&(J.code[e]={...r,...n,code:t,updatedAt:Date.now(),deleted:!1},J.dirty.code[e]=!0,Hy(),Uy(`code-quiet`))},renameCode(e,t){J.code[e]&&(J.code[e]={...J.code[e],title:t,updatedAt:Date.now()},J.dirty.code[e]=!0,Hy(),Uy(`code`))},deleteCode(e){J.code[e]&&(J.code[e]={code:``,title:J.code[e].title||``,deleted:!0,updatedAt:Date.now()},J.dirty.code[e]=!0,Hy(),Uy(`code`))},get kvp(){return J.kvp||`{}`},setKvp(e){J.kvp=e||`{}`,Hy()},mergeRemote(e,t){let n=!1;if(e){let t=J.progress;for(let[r,i]of Object.entries(e.completed||{}))t.completed[r]?i<t.completed[r]&&(t.completed[r]=i):(t.completed[r]=i,n=!0);for(let[r,i]of Object.entries(e.quiz||{}))(!t.quiz[r]||i&&i.best>t.quiz[r].best)&&(t.quiz[r]=i,n=!0);(e.updatedAt||0)>(t.updatedAt||0)&&e.lastLesson&&(t.lastLesson!==e.lastLesson&&(n=!0),t.lastLesson=e.lastLesson,t.updatedAt=e.updatedAt);let r=e.completed||{};(Object.keys(t.completed).some(e=>!r[e])||Object.entries(t.quiz).some(([t,n])=>!(e.quiz||{})[t]||e.quiz[t].best<n.best))&&(J.dirty.progress=!0)}else J.dirty.progress=!0;for(let[e,r]of Object.entries(t||{})){let t=J.code[e];!t||(r.updatedAt||0)>(t.updatedAt||0)?(J.code[e]=r,delete J.dirty.code[e],n=!0):(t.updatedAt||0)>(r.updatedAt||0)&&(J.dirty.code[e]=!0)}for(let e of Object.keys(J.code))t&&!(e in t)&&(J.dirty.code[e]=!0);return Hy(),n&&Uy(`remote`),n},mergeCodeChanges(e){let t=!1;for(let[n,r]of Object.entries(e)){let e=J.code[n];(!e||(r.updatedAt||0)>(e.updatedAt||0))&&(J.code[n]=r,delete J.dirty.code[n],t=!0)}t&&(Hy(),Uy(`remote`))},takeDirty(){return{progress:J.dirty.progress,code:Object.keys(J.dirty.code)}},clearDirty(e,t){e&&(J.dirty.progress=!1);for(let e of t||[])delete J.dirty.code[e];J.lastSync=Date.now(),Hy(),Uy(`sync`)},exportJson(){return JSON.stringify({app:`lua-learn`,version:1,progress:J.progress,code:J.code},null,2)},importJson(e){let t=JSON.parse(e);if(!t||t.app!==`lua-learn`)throw Error(`This is not a Lua for Los Santos backup file.`);this.mergeRemote(t.progress,t.code),J.dirty.progress=!0;for(let e of Object.keys(t.code||{}))J.dirty.code[e]=!0;Hy(),Uy(`remote`)},resetAll(){J={...By(),dirty:{progress:!0,code:{}}},Hy(),Uy(`remote`)}},Wy={apiKey:`AIzaSyAA211KylOSj2F3TXQFjsGpENXikI5L9uk`,authDomain:`vtm-app-d344b.firebaseapp.com`,projectId:`vtm-app-d344b`,storageBucket:`vtm-app-d344b.firebasestorage.app`,messagingSenderId:`134964010590`,appId:`1:134964010590:web:d13222be39206fdbfd9ecf`},Gy=`modulepreload`,Ky=function(e,t){return new URL(e,t).href},qy={},Jy=function(e){return e.pathname.endsWith(`.css`)},Yy=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Xy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ky(t,n);let r=s(t),i=Jy(r);return Yy(qy,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Gy,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Zy=1200,Qy=5e3,$y=2e4,eb=[3,10,30,60,120,300],X=null,tb=null,nb=!1,rb=[],ib=null,ab=0,ob=null,sb=0,cb=0,lb=null,ub=Number(localStorage.getItem(`luaLearn.lastCloudSave`))||0,db=new Set,fb={state:Wy?`loading`:`unconfigured`,message:``};function pb(e,t=``){fb={state:e,message:t},mb()}function mb(){for(let e of db)try{e(fb,tb)}catch(e){console.warn(e)}}var hb=()=>{let e=Y.takeDirty();return+!!e.progress+e.code.length},Z={get user(){return tb},get status(){return fb},get authResolved(){return nb},get pending(){return hb()},get lastCloudSave(){return ub},get retryAt(){return sb},onStatus(e){return db.add(e),e(fb,tb),()=>db.delete(e)},available:()=>!!Wy,async init(){if(!Wy)return;Y.onChange(e=>{e!==`remote`&&e!==`sync`&&(tb&&fb.state!==`denied`?fb.state!==`saving`&&pb(`saving`):mb(),Sb())}),window.addEventListener(`online`,()=>{tb&&this.fullSync()}),window.addEventListener(`offline`,()=>{tb&&pb(`offline`,`You are offline. Changes are saved on this device and will upload automatically when you are back online.`)});let e=()=>{tb&&hb()&&Cb()};document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?e():tb&&(fb.state===`error`||fb.state===`denied`||fb.state===`offline`)&&this.fullSync()}),window.addEventListener(`pagehide`,e);try{await gb()}catch{nb=!0,pb(`offline`,`Cloud saving could not load (offline?). Your progress is saved on this device.`),window.addEventListener(`online`,()=>location.reload(),{once:!0});return}X.onAuthStateChanged(X.auth,async e=>{tb=e,nb=!0,rb.forEach(e=>e()),rb=[],clearTimeout(ob),sb=0,cb=0,e?await this.fullSync():pb(`signed-out`)})},async signIn(e,t){return await gb(),X.signInWithEmailAndPassword(X.auth,e,t)},async signUp(e,t){return await gb(),X.createUserWithEmailAndPassword(X.auth,e,t)},async reset(e){return await gb(),X.sendPasswordResetEmail(X.auth,e)},async signOut(){X&&(await Cb().catch(()=>{}),await X.signOut(X.auth))},async fullSync(){if(tb&&X){if(clearTimeout(ob),sb=0,!navigator.onLine)pb(`offline`,`You are offline. Changes are saved on this device and will upload automatically when you are back online.`);else{pb(`saving`);try{let{doc:e,getDoc:t,getDocs:n,collection:r}=X,i=e(X.db,`luaLearn`,tb.uid),[a,o]=await _b(Promise.all([t(i),n(r(i,`code`))])),s={};if(o.forEach(e=>{s[e.id]=e.data()}),Y.mergeRemote(a.exists()?a.data():null,s),await Cb()===!1)return;rb.forEach(e=>e()),rb=[],xb(),cb=0,vb()}catch(e){yb(e,`full`)}}}}};async function gb(){if(X)return X;let[{initializeApp:e},t,n]=await Promise.all([Xy(()=>import(`./index.esm-rKTRkX4c.js`),__vite__mapDeps([0,1]),import.meta.url),Xy(()=>import(`./index.esm-h8XrRUkU.js`),__vite__mapDeps([2,1]),import.meta.url),Xy(()=>import(`./index.esm-B-3SiZcd.js`),__vite__mapDeps([3,1]),import.meta.url)]),r=e(Wy,`lua-learn`),i=t.getAuth(r);await t.setPersistence(i,t.browserLocalPersistence).catch(()=>{});let a=n.getFirestore(r);return(/^(localhost|127\.0\.0\.1)$/.test(location.hostname)||location.protocol===`app:`)&&new URLSearchParams(location.search).has(`emu`)&&(t.connectAuthEmulator(i,`http://127.0.0.1:9099`,{disableWarnings:!0}),n.connectFirestoreEmulator(a,`127.0.0.1`,8087)),X={...t,...n,auth:i,db:a},X}function _b(e){let t;return Promise.race([e,new Promise((e,n)=>{t=setTimeout(()=>n(Object.assign(Error(`timeout`),{code:`deadline-exceeded`})),$y)})]).finally(()=>clearTimeout(t))}function vb(){ub=Date.now();try{localStorage.setItem(`luaLearn.lastCloudSave`,String(ub))}catch{}pb(hb()?`saving`:`synced`),hb()&&Sb()}function yb(e,t){console.warn(`cloud save failed (`+t+`)`,e);let n=e&&e.code||``;!navigator.onLine||n===`unavailable`||n===`deadline-exceeded`?pb(`offline`,`Can't reach the cloud right now. Your changes are safe on this device and will upload automatically.`):n===`permission-denied`?pb(`denied`,`The cloud database refused to save (permission denied). The Lua for Los Santos rules are not published in Firebase yet.`):n===`unauthenticated`||n===`auth/user-token-expired`?pb(`error`,`Your sign-in expired. Please sign in again.`):pb(`error`,wb(e)),bb()}function bb(){clearTimeout(ob);let e=eb[Math.min(cb,eb.length-1)];cb++,sb=Date.now()+e*1e3,ob=setTimeout(()=>{sb=0,Z.fullSync()},e*1e3),mb()}function xb(){let{doc:e,collection:t,onSnapshot:n}=X,r=e(X.db,`luaLearn`,tb.uid),i=e=>{e&&e.code===`permission-denied`&&yb(e,`listen`)};rb.push(n(r,e=>{e.exists()&&!e.metadata.hasPendingWrites&&Y.mergeRemote(e.data(),null)},i)),rb.push(n(t(r,`code`),e=>{if(e.metadata.hasPendingWrites)return;let t={};e.docChanges().forEach(e=>{e.type!==`removed`&&(t[e.doc.id]=e.doc.data())}),Object.keys(t).length&&Y.mergeCodeChanges(t)},i))}function Sb(){if(!tb||fb.state===`denied`)return;clearTimeout(ib),ab||(ab=Date.now());let e=Math.max(0,Math.min(Zy,ab+Qy-Date.now()));ib=setTimeout(Cb,e)}async function Cb(){if(clearTimeout(ib),ab=0,lb&&(await lb.catch(()=>{}),!hb()))return!0;if(!tb||!X)return;if(!navigator.onLine)return pb(`offline`,`You are offline. Changes are saved on this device and will upload automatically when you are back online.`),!1;let e=Y.takeDirty();if(!e.progress&&!e.code.length)return;let{doc:t,writeBatch:n}=X,r=t(X.db,`luaLearn`,tb.uid),i=e.code.slice(0,400),a=Y.state.progress.updatedAt,o=Object.fromEntries(i.map(e=>[e,(Y.state.code[e]||{}).updatedAt]));lb=(async()=>{fb.state!==`saving`&&pb(`saving`);let s=n(X.db);if(e.progress){let e=Y.state.progress;s.set(r,{completed:e.completed,quiz:e.quiz,lastLesson:e.lastLesson||null,updatedAt:e.updatedAt||Date.now(),app:`lua-learn`})}for(let e of i){let n=Y.state.code[e];n&&s.set(t(r,`code`,e),{code:String(n.code||``).slice(0,2e5),title:n.title||``,lessonId:n.lessonId||null,side:n.side||null,from:n.from||null,updatedAt:n.updatedAt||Date.now(),deleted:!!n.deleted})}await _b(s.commit()),Y.clearDirty(e.progress&&Y.state.progress.updatedAt===a,i.filter(e=>(Y.state.code[e]||{}).updatedAt===o[e]))})();try{return await lb,cb=0,vb(),!0}catch(e){return yb(e,`push`),!1}finally{lb=null}}function wb(e){return{"auth/invalid-credential":`Email or password is wrong.`,"auth/wrong-password":`Email or password is wrong.`,"auth/user-not-found":`No account with that email. Use "Create account" (or the same login as your VTM app).`,"auth/invalid-email":`That email address doesn't look right.`,"auth/email-already-in-use":`That email already has an account. Use "Sign in" instead (the same login as your VTM app works).`,"auth/weak-password":`Password must be at least 6 characters.`,"auth/too-many-requests":`Too many attempts. Wait a few minutes and try again.`,"auth/network-request-failed":`No internet connection.`,"auth/unauthorized-domain":`This app address isn't allowed to sign in yet. Add it in Firebase console → Authentication → Settings → Authorized domains.`,"auth/operation-not-allowed":`Email/password sign-in is turned off in the Firebase project.`,"permission-denied":`The cloud database refused to save (permission denied). The Lua for Los Santos rules are not published in Firebase yet. See Account → "Fix cloud saving".`,unavailable:`The cloud is unreachable right now (offline?). Your progress is safe on this device.`}[e&&e.code||``]||e&&e.message||`Something went wrong with cloud saving.`}var Tb=`    // ================================================================ Lua for Los Santos (lua-learn)
    // Separate learning app sharing this project. Only the signed-in owner may read/write their own
    // progress doc luaLearn/{uid} and everything below it (luaLearn/{uid}/code/{snippet}).
    match /luaLearn/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
      match /{document=**} {
        allow read, write: if request.auth != null && request.auth.uid == uid;
      }
    }
`,Eb=`https://console.firebase.google.com/project/vtm-app-d344b/firestore/rules`,Db=`2.1.0`,Q=(e,t=document)=>t.querySelector(e),$=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),Ob=(e,t)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}},kb=Q(`#view`),Ab=[];function jb(e){document.querySelectorAll(`[data-nav]`).forEach(t=>t.classList.toggle(`active`,t.dataset.nav===e))}var Mb={unconfigured:[`local`,`On this device`,`Saved on this device (cloud saving is not set up in this copy).`],loading:[`syncing`,`Connecting…`,`Connecting to your account…`],"signed-out":[`local`,`Not signed in`,`Not signed in: saved on this device only. Tap to sign in and save to the cloud.`],saving:[`syncing`,`Saving…`,`Saving to the cloud…`],synced:[`ok`,`Saved to cloud`,`Everything is saved to your account.`],offline:[`offline`,`Offline`,`Offline: saved on this device, will upload automatically.`],denied:[`error`,`Rules not published`,`Cloud saving blocked: Firestore rules not published yet. Tap for the fix.`],error:[`error`,`Not saved · retrying`,`Cloud saving failed, retrying automatically.`]},Nb=null;function Pb(e,t){let n=Q(`#syncDot`),[r,i,a]=Mb[e.state]||Mb.unconfigured;n.className=`sync-pill `+r,n.dataset.state=e.state,n.querySelector(`.lbl`).textContent=i,n.title=a+(e.message?` `+e.message:``),n.setAttribute(`aria-label`,a),Lb(),location.hash.startsWith(`#/account`)&&((t?t.uid:`none`)+(Z.authResolved?``:`?`)!==Nb||!Q(`#acctStatus`)?cx():ax())}var Fb=`luaLearn.signinPromptDismissed`,Ib=!1;function Lb(){let e=Q(`#syncBanner`);if(!e)return;let t=Z.status,n=location.hash.startsWith(`#/account`),r=``;if(t.state===`signed-out`&&!n&&Date.now()-(Number(localStorage.getItem(Fb))||0)>2592e5){let e=Z.pending;r=`<div class="banner info" data-banner="signin"><span>☁️ <b>Save your progress to the cloud.</b> Sign in so your lessons and code are kept safe and shared between your phone and PC${e?` (${e} change${e===1?``:`s`} waiting)`:``}.</span>
      <span class="banner-actions"><a class="btn primary small" href="#/account" id="bannerSignIn">Sign in</a><button class="btn ghost small" id="bannerLater">Not now</button></span></div>`}else t.state===`denied`&&!n&&!Ib&&(r=`<div class="banner err" data-banner="denied"><span>⚠️ <b>Cloud saving is blocked:</b> the database rules aren't published yet. Your work is safe on this device and uploads automatically once it's fixed.</span>
      <span class="banner-actions"><a class="btn small" href="#/account" id="bannerFix">How to fix</a><button class="btn ghost small" id="bannerHide">Hide</button></span></div>`);e.innerHTML=r,e.hidden=!r;let i=Q(`#bannerLater`);i&&(i.onclick=()=>{localStorage.setItem(Fb,String(Date.now())),Lb()});let a=Q(`#bannerHide`);a&&(a.onclick=()=>{Ib=!0,Lb()})}function Rb(){Ab.forEach(e=>{try{e()}catch{}}),Ab=[];let[e,t]=location.hash.replace(/^#\/?/,``).split(`/`);window.scrollTo(0,0),e===`lesson`&&Me(t)?(jb(`lessons`),Jb(Me(t))):e===`play`?(jb(`play`),ex()):e===`ref`?(jb(`ref`),tx()):e===`account`?(jb(`account`),cx()):(jb(`lessons`),Wb()),Lb()}window.addEventListener(`hashchange`,Rb),Y.onChange(e=>{if(e===`remote`){let e=location.hash;(!e||e===`#/`||e===`#`)&&Wb()}});var zb=null;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),zb=e;let t=Q(`#installBtn`);t&&(t.hidden=!1)});var Bb=()=>matchMedia(`(display-mode: standalone)`).matches||navigator.standalone,Vb=()=>/iphone|ipad|ipod/i.test(navigator.userAgent),Hb=()=>!!(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform())||/Electron/.test(navigator.userAgent);function Ub(){let e=Y.state.progress.lastLesson,t=je.find(e=>!Y.isComplete(e.id));return e&&Me(e)&&!Y.isComplete(e)?Me(e):t||je[0]}function Wb(){let e=je.filter(e=>Y.isComplete(e.id)).length,t=Math.round(e/je.length*100),n=Ub(),r=!!Z.user;kb.innerHTML=`
    <section class="hero card">
      <h1>Hi Tina! 👋</h1>
      <p>Learn Lua from zero and script your own GTA V server. Every step explains <b>why</b>, with small exercises you run right here.</p>
      <div class="progress"><div class="bar" style="width:${t}%"></div></div>
      <p class="muted">${e} of ${je.length} lessons complete (${t}%)</p>
      <div class="row">
        <a class="btn primary" href="#/lesson/${n.id}">${e===0?`Start lesson 1`:e===je.length?`Review lessons`:`Continue: `+$(n.title)}</a>
        <a class="btn ghost" href="#/play">Open playground</a>
        <button class="btn ghost" id="installBtn" ${zb?``:`hidden`}>📲 Install app</button>
      </div>
      ${!Hb()&&!Bb()&&Vb()?`<p class="muted small">📲 To install on iPhone: tap <b>Share</b> then <b>Add to Home Screen</b>.</p>`:``}
      ${Z.available()&&!r?`<p class="muted small">☁️ <a href="#/account">Sign in</a> to sync your progress and code between your phone and computer. Without signing in, everything is still saved on this device.</p>`:``}
    </section>
    ${Ne.map(e=>`
      <section class="part">
        <h2>${$(e)}</h2>
        <ol class="lesson-list">
          ${je.filter(t=>t.part===e).map(e=>{let t=Y.state.progress.quiz[e.id],n=Y.isComplete(e.id);return`<li><a class="lesson-card ${n?`done`:``}" href="#/lesson/${e.id}">
              <span class="num">${n?`✓`:e.n}</span>
              <span class="lc-body"><span class="lc-title">${$(e.title)}</span>
              <span class="lc-sum">${$(e.summary)}</span>
              <span class="lc-meta">${e.minutes} min${t?` · quiz ${t.best}/${t.total}`:``}${n?` · exercise done`:``}</span></span>
            </a></li>`}).join(``)}
        </ol>
      </section>`).join(``)}
    <p class="muted small center">Lua 5.4 runs for real in your browser (WebAssembly). The GTA functions are a practice imitation: see <a href="#/ref">Reference</a>.</p>`;let i=Q(`#installBtn`);i&&(i.onclick=async()=>{zb&&(zb.prompt(),await zb.userChoice,zb=null,i.hidden=!0)})}var Gb=`⇥ ( ) " = . , : { } [ ] .. # ~= == _ -- ' < > + - * / ^ %`.split(` `);function Kb(e){let t=document.createElement(`div`);return t.className=`keybar`,t.innerHTML=`<button data-act="undo" aria-label="Undo">↶</button><button data-act="redo" aria-label="Redo">↷</button>`+Gb.map(e=>`<button data-k="${$(e)}">${$(e)}</button>`).join(``),t.addEventListener(`mousedown`,e=>e.preventDefault()),t.addEventListener(`click`,t=>{let n=t.target.closest(`button`);if(!n)return;if(n.dataset.act===`undo`)return e.undo();if(n.dataset.act===`redo`)return e.redo();let r=n.dataset.k;e.insert(r===`⇥`?`  `:r)}),t}async function qb(e,t,n,{check:r=null,button:i=null}={}){e.clear(),e.setUserLines(t.split(`
`).length);let a=i?[].concat(i):[];a.forEach(e=>{e.disabled=!0,e.dataset.label=e.dataset.label||e.textContent,e.textContent=`⏳ Running…`});let o;try{o=r?await Ly.check(r,t,{kvp:`{}`,...n},t=>e.line(t)):await Ly.run(t,{kvp:Y.kvp,...n},t=>e.line(t))}finally{a.forEach(e=>{e.disabled=!1,e.textContent=e.dataset.label})}let s=r&&o.res||o;return s.timeout&&e.error(`LONGRUN::your code`),!r&&s.kvp&&Y.setKvp(s.kvp),e.summary(s),e.showCommand(/RegisterCommand/.test(t)&&!s.syntax),o}function Jb(e){Y.setLastLesson(e.id);let t=je.indexOf(e),n=je[t-1],r=je[t+1],i=e.exercise;kb.innerHTML=`
    <article class="lesson">
      <div class="crumbs"><a href="#/">Lessons</a> › ${$(e.part)} › ${e.n}</div>
      <h1>${e.n}. ${$(e.title)}</h1>
      <p class="muted">${$(e.summary)} · about ${e.minutes} min ${Y.isComplete(e.id)?`· <span class="badge ok">✓ completed</span>`:``}</p>
      <div class="lesson-body">${Re(e.body,{side:e.side})}</div>

      <section class="quiz card" id="quiz"><h2>🧠 Quick quiz</h2><div class="quiz-qs"></div><div class="quiz-score"></div></section>

      ${i?`<section class="exercise card" id="exercise">
        <h2>🛠 Exercise: ${$(i.title)}</h2>
        <div class="ex-prompt">${Re(i.prompt,{side:i.side})}</div>
        <p class="muted small">Runs as: <b>${i.side===`manifest`?`fxmanifest.lua`:i.side+` script`}</b>. Your code is saved automatically${Z.user?` and synced`:``}.</p>
        <div class="editor-wrap"><div class="editor" id="exEditor"></div></div>
        <div class="row ex-actions">
          <button class="btn" id="exRun">▶ Run</button>
          <button class="btn primary" id="exCheck">✔ Check my answer</button>
          <button class="btn ghost" id="exHint">💡 Hint</button>
          <button class="btn ghost" id="exReset">↺ Reset</button>
          <button class="btn ghost" id="exSol">👀 Solution</button>
        </div>
        <div class="hints" id="exHints"></div>
        <div id="exConsole"></div>
        <div class="results" id="exResults"></div>
        <div class="solution" id="exSolution" hidden></div>
      </section>`:``}

      <nav class="pager">
        ${n?`<a class="btn ghost" href="#/lesson/${n.id}">← ${$(n.title)}</a>`:`<span></span>`}
        ${r?`<a class="btn ghost" href="#/lesson/${r.id}">${$(r.title)} →</a>`:`<a class="btn ghost" href="#/">All lessons</a>`}
      </nav>
    </article>`,Yb(kb.querySelector(`.lesson-body`),e),Ey(kb),Xb(e),i&&Zb(e,i,r)}function Yb(e,t){e.querySelectorAll(`.codeblock`).forEach(e=>{let n=e.querySelector(`.run-block`);if(!n)return;let r=e.querySelector(`code`).textContent,i=e.dataset.side||`shared`,a=null;n.onclick=async()=>{let t=e.querySelector(`.cb-output`);t.hidden=!1,a||(a=Ay(t,{onCommand:async e=>{let t=await Ly.command(e,e=>a.line(e));t&&t.kvp&&Y.setKvp(t.kvp),t&&t.errors&&t.errors.length&&!t.lines.length&&a.error(t.errors[0])}})),await qb(a,r,{side:i,duration:5e3},{button:n})},e.querySelector(`.edit-block`).onclick=()=>{sessionStorage.setItem(`luaLearn.import`,JSON.stringify({code:r,side:i,from:t.title})),location.hash=`#/play`}})}function Xb(e){let t=Q(`#quiz .quiz-qs`),n=Q(`#quiz .quiz-score`),r=Array(e.quiz.length).fill(null);t.innerHTML=e.quiz.map((e,t)=>`
    <div class="q" data-q="${t}">
      <p class="q-text"><b>${t+1}.</b> ${Fe(e.q)}</p>
      <div class="opts">${e.options.map((e,t)=>`<button class="opt" data-o="${t}">${Fe(e)}</button>`).join(``)}</div>
      <div class="q-why" hidden></div>
    </div>`).join(``),t.addEventListener(`click`,t=>{let i=t.target.closest(`.opt`);if(!i)return;let a=i.closest(`.q`),o=Number(a.dataset.q);if(r[o]!==null)return;let s=e.quiz[o],c=Number(i.dataset.o);r[o]=c===s.answer,a.querySelectorAll(`.opt`).forEach((e,t)=>{e.disabled=!0,t===s.answer?e.classList.add(`right`):t===c&&e.classList.add(`wrong`)});let l=a.querySelector(`.q-why`);if(l.hidden=!1,l.innerHTML=(r[o]?`✅ <b>Right!</b> `:`❌ <b>Not quite.</b> `)+Fe(s.why||``),r.every(e=>e!==null)){let t=r.filter(Boolean).length;Y.setQuiz(e.id,t,e.quiz.length),n.innerHTML=`<p><b>Score: ${t} / ${e.quiz.length}</b> ${t===e.quiz.length?`🎉 Perfect!`:`— read the explanations above, then try again if you like.`}</p><button class="btn ghost small" id="quizAgain">Try the quiz again</button>`,Q(`#quizAgain`).onclick=()=>Xb(e)}},{once:!1}),n.innerHTML=``}function Zb(e,t,n){let r=`ex-`+e.id,i=Y.getCode(r),a=Ob(t=>Y.saveCode(r,t,{lessonId:e.id,title:`Exercise: `+e.title}),500),o={side:t.side,duration:t.duration},s,c=Ay(Q(`#exConsole`),{onErrorLine:e=>s&&s.markError(e),onCommand:async e=>{let t=await Ly.command(e,e=>c.line(e));t&&t.errors&&t.errors.length&&!t.lines.length&&c.error(t.errors[0])}});s=wy(Q(`#exEditor`),{doc:i?i.code:t.starter,onChange:a,onRun:()=>Q(`#exRun`).click()}),Q(`#exEditor`).parentElement.appendChild(Kb(s)),Ab.push(()=>{Y.saveCode(r,s.get(),{lessonId:e.id,title:`Exercise: `+e.title}),s.destroy()}),Q(`#exRun`).onclick=()=>qb(c,s.get(),o,{button:Q(`#exRun`)}),Q(`#exCheck`).onclick=async()=>{let i=Q(`#exResults`);i.innerHTML=``;let a=s.get();Y.saveCode(r,a,{lessonId:e.id,title:`Exercise: `+e.title});let l=await qb(c,a,o,{check:t,button:[Q(`#exCheck`),Q(`#exRun`)]});if(l.timeout||!l.results){i.innerHTML=`<div class="result-box fail"><b>Not yet.</b> Your code didn't finish (see the console).</div>`;return}let u=l.results.map(e=>`<li class="${e.ok?`ok`:`no`}">${e.ok?`✅`:`⬜`} ${$(e.msg)}</li>`).join(``);if(l.passed){let t=!Y.isComplete(e.id);Y.setComplete(e.id),i.innerHTML=`<div class="result-box pass"><h3>🎉 ${t?`Exercise complete!`:`Still passing!`}</h3><ul>${u}</ul>
        ${n?`<a class="btn primary" href="#/lesson/${n.id}">Next: ${$(n.title)} →</a>`:`<p><b>You finished every lesson.</b> Amazing work, Tina! Try building your own resource in the Playground.</p>`}</div>`}else i.innerHTML=`<div class="result-box fail"><b>Not yet, keep going!</b> Here's what the checker looked for:<ul>${u}</ul><p class="muted small">Stuck? Use 💡 Hint. Each hint reveals a bit more.</p></div>`;i.scrollIntoView({behavior:`smooth`,block:`nearest`})};let l=0;Q(`#exHint`).onclick=()=>{let e=Q(`#exHints`);t.hints.length?(l<t.hints.length&&(l++,e.innerHTML=t.hints.slice(0,l).map((e,n)=>`<div class="hint">💡 <b>Hint ${n+1}/${t.hints.length}:</b> ${Fe(e)}</div>`).join(``)),l>=t.hints.length&&(Q(`#exHint`).disabled=!0)):e.innerHTML=`<p class="muted">No hints for this one. Re-read the lesson boxes above.</p>`},Q(`#exReset`).onclick=()=>{confirm(`Replace your code with the starter code? (Your current code will be lost.)`)&&(s.set(t.starter),Y.saveCode(r,t.starter,{lessonId:e.id}))},Q(`#exSol`).onclick=()=>{let e=Q(`#exSolution`);e.hidden?confirm(`Have a real try first: you learn far more by struggling a little. Show the solution anyway?`)&&(e.hidden=!1,e.innerHTML=`<h3>One possible solution</h3><p class="muted small">Other answers can be right too. Read it line by line and make sure you understand <b>why</b> each line is there.</p>
      <pre><code>${$(t.solution)}</code></pre><button class="btn small" id="copySol">Copy into my editor</button>`,Ey(e),Q(`#copySol`).onclick=()=>{confirm(`Replace your code with the solution?`)&&s.set(t.solution)}):e.hidden=!0}}var Qb=[[`shared`,`Shared (both sides, practice)`],[`client`,`Client script`],[`server`,`Server script`],[`manifest`,`fxmanifest.lua`]],$b=`-- Playground: experiment freely! Your code is saved automatically.
-- Pick the side (client/server) above. Ctrl+Enter runs.

local name = "Tina"
print("Hello, " .. name .. "!")

RegisterCommand("hello", function(source, args)
  local who = args[1] or "stranger"
  print("Hello, " .. who .. "! (typed by player " .. tostring(source) .. ")")
end, false)

-- After pressing Run, type /hello Bob in the box under the console.
`;function ex(){let e=sessionStorage.getItem(`luaLearn.import`);if(e){sessionStorage.removeItem(`luaLearn.import`);let t=JSON.parse(e);Y.saveCode(`play-scratch`,t.code,{title:`Scratchpad`,side:t.side,from:t.from}),localStorage.setItem(`luaLearn.currentSnippet`,`play-scratch`)}Y.getCode(`play-scratch`)||Y.saveCode(`play-scratch`,$b,{title:`Scratchpad`,side:`shared`});let t=localStorage.getItem(`luaLearn.currentSnippet`)||`play-scratch`;Y.getCode(t)||(t=`play-scratch`),kb.innerHTML=`
    <section class="play">
      <h1>🧪 Playground</h1>
      <p class="muted">Write any Lua and run it in the practice GTA world. Fake players: 1 Tina, 2 Bob, 3 Sneaky_Steve. See <a href="#/ref">Reference</a> for every available function.</p>
      <div class="row play-bar">
        <label class="field">Snippet <select id="snip"></select></label>
        <label class="field">Runs as <select id="side">${Qb.map(([e,t])=>`<option value="${e}">${t}</option>`).join(``)}</select></label>
      </div>
      <div class="row play-bar">
        <button class="btn ghost small" id="snipNew">＋ New</button>
        <button class="btn ghost small" id="snipCopy">⧉ Save as new</button>
        <button class="btn ghost small" id="snipRename">✎ Rename</button>
        <button class="btn ghost small" id="snipDel">🗑 Delete</button>
        <button class="btn ghost small" id="kvpReset" title="Wipe the fake server's saved KVP data">💾 Wipe fake KVP</button>
      </div>
      <p class="muted small" id="snipNote"></p>
      <div class="editor-wrap"><div class="editor tall" id="playEditor"></div></div>
      <div class="row"><button class="btn primary" id="playRun">▶ Run</button><span class="muted small">Ctrl/⌘ + Enter also runs</span></div>
      <div id="playConsole"></div>
    </section>`;let n=Q(`#snip`),r=Q(`#side`),i=()=>{let e=Y.listSnippets(),r=e.find(e=>e.key===`play-scratch`),i=e.filter(e=>e.key!==`play-scratch`);n.innerHTML=[r,...i].filter(Boolean).map(e=>`<option value="${e.key}">${$(e.title||`Untitled`)}</option>`).join(``),n.value=t,Q(`#snipDel`).disabled=t===`play-scratch`,Q(`#snipRename`).disabled=t===`play-scratch`;let a=Y.getCode(t);Q(`#snipNote`).textContent=t===`play-scratch`?`Scratchpad is replaced when you click "Try in playground" in a lesson. Use "Save as new" to keep something.`+(a&&a.from?` (Loaded from: ${a.from})`:``):``},a,o=Ob((e,t,n)=>Y.saveCode(e,t,{side:n}),500),s=e=>o(t,e,r.value),c=Ay(Q(`#playConsole`),{onErrorLine:e=>a&&a.markError(e),onCommand:async e=>{let t=await Ly.command(e,e=>c.line(e));t&&t.kvp&&Y.setKvp(t.kvp),t&&t.errors&&t.errors.length&&!t.lines.length&&c.error(t.errors[0])}}),l=e=>{t=e,localStorage.setItem(`luaLearn.currentSnippet`,e);let n=Y.getCode(e);a.set(n?n.code:``),r.value=n&&n.side||`shared`,i()};a=wy(Q(`#playEditor`),{doc:(Y.getCode(t)||{}).code||``,onChange:s,onRun:()=>Q(`#playRun`).click()}),Q(`#playEditor`).parentElement.appendChild(Kb(a)),r.value=(Y.getCode(t)||{}).side||`shared`,i(),Ab.push(()=>{Y.saveCode(t,a.get(),{side:r.value}),a.destroy()}),n.onchange=()=>{Y.saveCode(t,a.get(),{side:r.value}),l(n.value)},r.onchange=()=>Y.saveCode(t,a.get(),{side:r.value,title:(Y.getCode(t)||{}).title}),Q(`#playRun`).onclick=()=>qb(c,a.get(),{side:r.value,duration:5e3},{button:Q(`#playRun`)}),Q(`#snipNew`).onclick=()=>{let e=prompt(`Name for the new snippet:`,`My script`);if(e===null)return;Y.saveCode(t,a.get(),{side:r.value});let n=`play-`+Date.now().toString(36);Y.saveCode(n,`-- `+e+`
`,{title:e||`Untitled`,side:`shared`}),l(n)},Q(`#snipCopy`).onclick=()=>{let e=prompt(`Save a copy as:`,((Y.getCode(t)||{}).title||`Copy`)+` (copy)`);if(e===null)return;let n=`play-`+Date.now().toString(36);Y.saveCode(n,a.get(),{title:e||`Untitled`,side:r.value}),l(n)},Q(`#snipRename`).onclick=()=>{let e=Y.getCode(t),n=prompt(`New name:`,e?e.title:``);n&&(Y.renameCode(t,n),i())},Q(`#snipDel`).onclick=()=>{t!==`play-scratch`&&confirm(`Delete this snippet? This also deletes it on your other devices.`)&&(Y.deleteCode(t),l(`play-scratch`))},Q(`#kvpReset`).onclick=()=>{confirm(`Wipe all fake KVP data saved by your practice scripts?`)&&(Y.setKvp(`{}`),c.clear(),c.note(`💾 Fake KVP storage wiped.`,`cl-info`))}}function tx(){kb.innerHTML=`
    <section class="ref">
      <h1>📚 Reference</h1>
      <div class="card">
        <h2>Lua cheat sheet</h2>
        <div class="lesson-body">${Re(nx)}</div>
      </div>
      <div class="card">
        <h2>The practice GTA world</h2>
        <p>This app runs <b>real Lua 5.4</b>. The FiveM functions below are an <b>imitation</b> with fake data, so you can practise the shapes safely. Real behaviour can differ in details. Always check <a href="https://docs.fivem.net/natives/" target="_blank" rel="noopener">docs.fivem.net/natives</a> for the real thing.</p>
        <div class="table-wrap"><table><thead><tr><th>Player</th><th>Server ID</th><th>Ped</th><th>Health / Armour</th><th>Where</th></tr></thead><tbody>
          <tr><td>Tina (you, admin)</td><td>1</td><td>1001</td><td>200 / 0</td><td>Legion Square</td></tr>
          <tr><td>Bob</td><td>2</td><td>1002</td><td>150 / 50</td><td>Airport</td></tr>
          <tr><td>Sneaky_Steve</td><td>3</td><td>1003</td><td>120 / 0</td><td>Sandy Shores</td></tr>
        </tbody></table></div>
        <p class="small muted">Time is simulated: a run lasts 5 s of game time but finishes instantly. <code>Wait(0)</code> = one frame (16 ms). Type commands into the box under the console after running.</p>
        ${vy.map(([e,t])=>`<h3>${$(e)}</h3><div class="table-wrap"><table class="api"><thead><tr><th>Function</th><th>Side</th><th>Notes</th></tr></thead><tbody>
          ${t.map(([e,t,n])=>`<tr><td><code>${$(e)}</code></td><td>${$(t)}</td><td>${$(n)}</td></tr>`).join(``)}</tbody></table></div>`).join(``)}
      </div>
      <div class="card">
        <h2>Real documentation</h2>
        <ul>
          <li><a href="https://docs.fivem.net/docs/scripting-manual/" target="_blank" rel="noopener">FiveM scripting manual</a></li>
          <li><a href="https://docs.fivem.net/natives/" target="_blank" rel="noopener">FiveM natives reference</a></li>
          <li><a href="https://docs.fivem.net/docs/scripting-reference/resource-manifest/resource-manifest/" target="_blank" rel="noopener">fxmanifest.lua reference</a></li>
          <li><a href="https://www.lua.org/manual/5.4/" target="_blank" rel="noopener">Lua 5.4 manual</a> (dense, but complete)</li>
        </ul>
      </div>
    </section>`}var nx='\n| Thing | Write it like |\n|---|---|\n| comment | `-- note` |\n| variable | `local cash = 500` |\n| change it | `cash = cash + 100` |\n| text / join | `"Hi " .. name` |\n| compare | `==`, `~=`, `<`, `>`, `<=`, `>=` |\n| logic | `and`, `or`, `not` |\n| if | `if x > 5 then ... elseif ... else ... end` |\n| count loop | `for i = 1, 10 do ... end` |\n| while loop | `while cond do ... end` |\n| function | `local function add(a, b) return a + b end` |\n| list | `local t = { "a", "b" }`, `t[1]`, `#t` |\n| add / remove | `table.insert(t, v)`, `table.remove(t, i)` |\n| dictionary | `local p = { name = "Tina" }`, `p.name`, `p[key]` |\n| loop list | `for i, v in ipairs(t) do ... end` |\n| loop dict | `for k, v in pairs(t) do ... end` |\n| convert | `tonumber("5")`, `tostring(5)` |\n| safe call | `local ok, err = pcall(fn)` |\n| thread | `CreateThread(function() while true do Wait(500) end end)` |\n| event | `RegisterNetEvent("res:name", function(...) local src = source end)` |\n| command | `RegisterCommand("name", function(source, args) end, false)` |\n\nOnly `nil` and `false` are "false". `0` and `""` are true. Lists start at **1**.\n',rx=e=>{if(!e)return`never`;let t=Math.round((Date.now()-e)/1e3);return t<10?`just now`:t<90?t+` seconds ago`:t<5400?Math.round(t/60)+` minutes ago`:new Date(e).toLocaleString()};function ix(){let e=Z.status,t=Z.pending,[n,r]=Mb[e.state]||Mb.unconfigured,i=Z.retryAt?Math.max(0,Math.round((Z.retryAt-Date.now())/1e3)):0,a={loading:`Connecting to your account…`,saving:`Uploading your latest changes…`,synced:`Your progress and code are saved in your account. Changes upload a second after you make them.`,offline:e.message||`Offline. Changes are kept on this device and upload automatically.`,denied:`Firestore answered <b>permission denied</b>: the Lua for Los Santos rules are not published in your Firebase project yet, so nothing can be saved to the cloud. Your work is <b>safe on this device</b> and is queued: it uploads by itself as soon as the rules are published. Follow <b>Fix cloud saving</b> below (2 minutes, on your computer).`,error:$(e.message||`Cloud saving failed.`)+` Your work is safe on this device and will be retried.`}[e.state]||``;return`<p class="cloud-state"><span class="sync-pill ${n} static"><span class="dot"></span><span class="lbl">${$(r)}</span></span></p>
    <p class="small">${a}</p>
    <p class="muted small">Last saved to cloud: <b>${$(rx(Z.lastCloudSave))}</b> · Waiting to upload: <b id="pendingCount">${t}</b>${i?` · next try in ${i}s`:``}</p>`}function ax(){let e=Q(`#cloudState`);e&&(e.innerHTML=ix());let t=Q(`#fixRules`);t&&Z.status.state===`denied`&&(t.open=!0)}function ox(e){return`<details class="card fix" id="fixRules" ${e?`open`:``}>
    <summary><b>🔧 Fix cloud saving</b> <span class="muted small">(one-time Firebase setup, ~2 minutes, on your computer)</span></summary>
    <p>Cloud saving needs one small block of rules in your Firebase project <code>vtm-app-d344b</code>. It only lets <b>you</b> (signed in) read and write <b>your own</b> Lua progress. It does not change your Kindred Companion or Storyteller Vault rules.</p>
    <ol class="steps">
      <li>Click <b>Copy rules block</b> (below).</li>
      <li>Open <a href="${Eb}" target="_blank" rel="noopener">the Firebase Rules page</a> (Firebase console → <b>Firestore Database</b> → <b>Rules</b> tab), signed in with the Google account that owns the project.</li>
      <li>In the rules editor, scroll to the <b>very bottom</b>. The last two lines are <code>&nbsp;&nbsp;}</code> and <code>}</code>.</li>
      <li>Click at the <b>start of the second-to-last line</b> (the <code>&nbsp;&nbsp;}</code>), press <b>Enter</b>, press <b>↑</b> (up arrow) once, then paste with <b>Ctrl+V</b>.</li>
      <li>Click <b>Publish</b> and wait for "Rules published". <span class="muted">(Don't delete anything else. If a red error mark appears, press Ctrl+Z and paste again in the right place.)</span></li>
      <li>Come back here and click <b>Check again</b>. The status at the top turns green: <b>Saved to cloud</b>. (It can take up to a minute after publishing.)</li>
    </ol>
    <div class="row"><button class="btn primary" id="copyRules">📋 Copy rules block</button>
      <a class="btn ghost" href="${Eb}" target="_blank" rel="noopener">Open Firebase Rules ↗</a>
      ${Z.user?`<button class="btn ghost" id="checkAgain">⟳ Check again</button>`:``}
      <span class="small" id="copyMsg" role="status"></span></div>
    <pre><code id="rulesText">${$(Tb)}</code></pre>
    <p class="muted small">After pasting, the end of your rules looks like: <code>… match /luaLearn/{uid} { … } }</code> followed by the original <code>&nbsp;&nbsp;}</code> and <code>}</code>.</p>
  </details>`}async function sx(e){try{return await navigator.clipboard.writeText(e),!0}catch{}let t=document.createElement(`textarea`);t.value=e,t.setAttribute(`readonly`,``),t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand(`copy`)}catch{}return t.remove(),n}function cx(){let e=Z.user,t=Z.status;if(!location.hash.startsWith(`#/account`))return;Nb=(e?e.uid:`none`)+(Z.authResolved?``:`?`),kb.innerHTML=`
    <section class="account">
      <h1>👤 Account & cloud saving</h1>
      <div class="card" id="acctStatus">
        ${Z.available()?Z.authResolved?e?`<p>Signed in as <b>${$(e.email)}</b>.</p><div id="cloudState">${ix()}</div>
              <div class="row"><button class="btn" id="syncNow">⟳ Save / sync now</button><button class="btn ghost" id="signOut">Sign out</button></div>`:`<p><b>Not signed in.</b> Your progress is saved on this device only${Z.pending?` (${Z.pending} change${Z.pending===1?``:`s`} waiting to upload)`:``}.
               Sign in to save it to the cloud and share it between your phone and computer. Use the <b>same email and password as your VTM app</b> (same Firebase project).</p>
              <form id="authForm" class="auth">
                <label class="field">Email <input type="email" id="email" autocomplete="username" required></label>
                <label class="field">Password <input type="password" id="pw" autocomplete="current-password" minlength="6" required></label>
                <div class="row"><button class="btn primary" type="submit">Sign in</button><button class="btn ghost" type="button" id="signUp">Create account</button><button class="btn ghost small" type="button" id="forgot">Forgot password?</button></div>
                <p class="auth-msg" id="authMsg" role="alert"></p>
              </form>
              ${t.state===`offline`||t.state===`error`?`<p class="warn-text">${$(t.message)}</p>`:``}`:`<p class="muted">Connecting…</p>`:`<p>Cloud saving isn't configured in this copy of the app. Everything is saved on this device.</p>`}
      </div>
      ${Z.available()?ox(t.state===`denied`):``}
      <div class="card">
        <h2>Your data</h2>
        <p>${Y.completedCount()} lessons complete, ${Object.values(Y.state.code).filter(e=>!e.deleted).length} saved code files. Everything is always saved on this device first, so the app works offline. When you're signed in, every change is uploaded automatically about a second later (and retried if it fails).</p>
        <div class="row">
          <button class="btn ghost" id="exportBtn">⬇ Download backup</button>
          <label class="btn ghost">⬆ Restore backup<input type="file" id="importFile" accept="application/json,.json" hidden></label>
          <button class="btn ghost danger" id="resetBtn">Reset all progress</button>
        </div>
      </div>
      <p class="muted small">Lua for Los Santos · v${Db}${Hb()?window.Capacitor?` · Android app`:` · desktop app`:``} · Lua 5.4 via wasmoon</p>
    </section>`;let n=e=>{let t=Q(`#authMsg`);t&&(t.textContent=e)},r=Q(`#authForm`);if(r){let e=()=>[Q(`#email`).value.trim(),Q(`#pw`).value];r.onsubmit=async t=>{t.preventDefault(),n(`Signing in…`);try{await Z.signIn(...e())}catch(e){n(wb(e))}},Q(`#signUp`).onclick=async()=>{if(r.reportValidity()){n(`Creating account…`);try{await Z.signUp(...e())}catch(e){n(wb(e))}}},Q(`#forgot`).onclick=async()=>{let e=Q(`#email`).value.trim();if(!e)return n(`Type your email first.`);try{await Z.reset(e),n(`Password reset email sent (check spam too).`)}catch(e){n(wb(e))}},Q(`#email`).value||setTimeout(()=>{let e=Q(`#email`);e&&document.activeElement===document.body&&matchMedia(`(hover: hover)`).matches&&e.focus()},50)}let i=Q(`#signOut`);i&&(i.onclick=()=>Z.signOut());let a=Q(`#syncNow`);a&&(a.onclick=()=>Z.fullSync());let o=Q(`#checkAgain`);o&&(o.onclick=()=>Z.fullSync());let s=Q(`#copyRules`);s&&(s.onclick=async()=>{let e=await sx(Tb);if(Q(`#copyMsg`).textContent=e?`✅ Copied! Now paste it in the Firebase Rules editor.`:`Copy failed: select the text in the box below and copy it by hand.`,!e){let e=document.createRange();e.selectNodeContents(Q(`#rulesText`));let t=getSelection();t.removeAllRanges(),t.addRange(e)}}),Q(`#exportBtn`).onclick=()=>{let e=new Blob([Y.exportJson()],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`lua-learn-backup-${new Date().toISOString().slice(0,10)}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),2e3)},Q(`#importFile`).onchange=async e=>{let t=e.target.files[0];if(t)try{Y.importJson(await t.text()),alert(`Backup restored (merged with what was here).`),cx()}catch(e){alert(e.message)}},Q(`#resetBtn`).onclick=()=>{confirm(`Reset ALL progress and saved code on this device?`)&&(!Z.user||confirm(`You are signed in: this also clears progress in your account. Really reset?`))&&(Y.resetAll(),cx())}}setInterval(()=>{location.hash.startsWith(`#/account`)&&Z.user&&ax()},5e3),Rb(),Z.onStatus(Pb),Z.init(),Ly.warmup(),`serviceWorker`in navigator&&!Hb()&&/^https?:$/.test(location.protocol)&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(e=>console.warn(`SW failed`,e)));