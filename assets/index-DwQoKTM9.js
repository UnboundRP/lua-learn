const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index.esm-rKTRkX4c.js","./index.esm-DuxVQT03.js","./index.esm-h8XrRUkU.js","./index.esm-B-3SiZcd.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`---
id: hello
title: Hello, Lua!
part: Lua basics
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
id: variables
title: Variables & local
part: Lua basics
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

When you want to *compare* two things ("are these the same?"), you use **two** equals signs \`==\`. That's lesson 6. For now, remember: \`=\` stores, \`==\` asks.

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
`,n=`---
id: types
title: Types, nil & true/false
part: Lua basics
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
| \`table\` | \`{ 1, 2, 3 }\` | a collection (lessons 9 and 10) |
| \`function\` | \`print\` | a piece of code you can run (lesson 8) |

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
`,r='---\nid: strings\ntitle: Strings (text)\npart: Lua basics\nminutes: 20\nsummary: Joining text with .., length, formatting messages, and the handy string functions.\n---\n## Strings are text\n\nA **string** is any text in quotes. Lua accepts double `"..."` or single `\'...\'` quotes. They mean the same thing, so pick whichever makes your text easier:\n\n```lua\nprint("Tina\'s garage")          -- double quotes, so the \' inside is fine\nprint(\'She said "hello"\')       -- single quotes, so the " inside is fine\nprint("Line one\\nLine two")     -- \\n means "new line"\n```\n\nThe backslash `\\` starts an **escape**: a special character. `\\n` is a new line, `\\"` is a quote inside double quotes, `\\\\` is a real backslash.\n\n## Joining text: `..` (two dots)\n\nTo glue strings together, Lua uses **two dots**, not `+`:\n\n```lua\nlocal first = "Tina"\nlocal greeting = "Welcome to the server, " .. first .. "!"\nprint(greeting)\n```\n\n:::why Why not `+` like other languages?\nIn Lua `+` is *only* for maths. `"5" + "5"` actually gives the number `10` (Lua converts the text to numbers), while `"5" .. "5"` gives the text `"55"`. Having two different symbols means Lua never has to guess what you meant. Clear beats clever.\n:::\n\nYou can join numbers too; Lua turns them into text:\n\n```lua\nlocal cash = 500\nprint("You have $" .. cash)\n```\n\nBut you **can\'t** join `nil` or `true/false` directly. This errors:\n\n```lua error\nlocal rank\nprint("Your rank is " .. rank)   -- rank is nil!\n```\n\nThe fix is to make sure the value exists, or convert with `tostring(...)`, which always works:\n\n```lua\nlocal rank\nprint("Your rank is " .. tostring(rank))\nlocal isAdmin = true\nprint("Admin: " .. tostring(isAdmin))\n```\n\n## Length: `#`\n\nPut `#` in front of a string to get how many characters it has:\n\n```lua\nlocal plate = "TINA 01"\nprint(#plate)   -- 7 (the space counts)\n```\n\nGTA number plates allow up to 8 characters, so `#plate <= 8` is a real check you\'d write.\n\n## `string.format`: tidy messages\n\nLong `..` chains get messy. `string.format` lets you write the message with **placeholders** and fill them in:\n\n```lua\nlocal name, cash = "Tina", 1250.5\nlocal msg = string.format("%s has $%.2f", name, cash)\nprint(msg)\n```\n\n- `%s` → put a value here as text\n- `%d` → a whole number\n- `%.2f` → a number with exactly 2 decimals (great for money)\n\nThe values after the text fill the placeholders **in order**.\n\n## Useful string functions\n\nLua has a `string` toolbox. You can call them as `string.upper(s)` or the shorter `s:upper()` (the colon passes `s` in for you):\n\n```lua\nlocal msg = "  Hello Los Santos  "\nprint(msg:upper())                 -- HELLO LOS SANTOS\nprint(msg:lower())\nprint(msg:len())                   -- same as #msg\nprint(("ab"):rep(3))               -- ababab\nprint(("adder"):sub(1, 3))         -- characters 1 to 3: add\nprint(("TINA 01"):find("01"))      -- where "01" starts and ends: 6 7\nprint(("Hello Bob"):gsub("Bob", "Tina"))  -- replace: Hello Tina   1\n```\n\n`gsub` gives back two things: the new text, and how many replacements it made. That\'s why you see `1` at the end.\n\n:::warn Patterns: `.` `-` `%` and friends are special\n`find`, `gsub` and `match` use **Lua patterns**, where some characters have special meaning: `. % + - * ? [ ] ^ $ ( )`. Searching for a literal `.` or `-` can give weird results. To search for plain text, pass `true` as the 4th value of `find`: `s:find(".", 1, true)`. Or put `%` before the special character: `"%."`.\n:::\n\n:::do\n- Use `string.format` for messages with several values; it\'s easier to read.\n- Use `tostring(x)` when joining something that might be `nil` or boolean (while debugging).\n- Trim player input before checking it: `input:match("^%s*(.-)%s*$")` removes spaces at both ends.\n:::\n\n:::dont\n- Don\'t use `+` to join text.\n- Don\'t trust text from players to be the length or format you expect. Check it (`#text`, `tonumber`).\n:::\n\n:::gta In your GTA server\nYou\'ll build strings constantly: chat messages (`"^2[Garage]^7 Vehicle stored"`, where `^2` is a colour code in FiveM chat), notifications, log lines (`string.format("%s bought %s for $%d", name, item, price)`), and event names like `"garage:storeVehicle"`.\n:::\n\n=== QUIZ\n? What does `"5" .. "5"` give?\n- 10\n+ "55"\n- an error\n> `..` joins text, so you get "55". `+` would do maths and give 10.\n? What does `#"Adder"` give?\n- 1\n+ 5\n- "Adder"\n> `#` gives the length: A-d-d-e-r is 5 characters.\n? Why does `"Rank: " .. rank` crash when rank is nil?\n+ You can\'t join nil to text; use tostring(rank) or make sure it has a value\n- Because the colon is not allowed in strings\n- Because .. only works with numbers\n> Joining with nil (or a boolean) is an error. tostring always turns a value into text.\n? In `string.format("%s has $%d", name, cash)`, what fills `%d`?\n- name\n+ cash\n- nothing, it\'s literal\n> Values fill the placeholders in order: name goes to %s, cash goes to %d.\n\n=== EXERCISE\ntitle: The welcome banner\nUsing the variables given, print this **exact** line using `string.format`:\n\n`Welcome Tina! You have $1250.50 and your plate is TINA 01 (7 chars)`\n\nUse `%s` for text, `%.2f` for the money, `%d` for the length, and `#plate` for the length.\n\n```lua starter\nlocal name = "Tina"\nlocal cash = 1250.5\nlocal plate = "TINA 01"\n\n-- print the banner with string.format\n```\n\n```lua solution\nlocal name = "Tina"\nlocal cash = 1250.5\nlocal plate = "TINA 01"\n\nprint(string.format("Welcome %s! You have $%.2f and your plate is %s (%d chars)", name, cash, plate, #plate))\n```\n\n```lua test\n__check(__printedLine("Welcome Tina! You have $1250.50 and your plate is TINA 01 (7 chars)"), \'Print exactly: Welcome Tina! You have $1250.50 and your plate is TINA 01 (7 chars)\')\n```\n\nmatch: string\\.format|:format\\( :: Use string.format for this one\nmatch: #plate :: Use #plate for the length instead of typing 7\nhint: Start with: `print(string.format("Welcome %s! ...", name, ...))`\nhint: The order of values must match the order of placeholders: name, cash, plate, #plate.\n',i=`---
id: numbers
title: Numbers & maths
part: Lua basics
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

(You'll learn exactly how \`local function\` works in lesson 8. For now, just see what it does.)

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

\`math.random(1, 6)\` includes both 1 and 6. The last line uses a trick explained in lesson 6.

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
`,a=`---
id: decisions
title: Decisions: if, ==, and/or
part: Lua basics
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

(\`return\` stops a function and hands back a value. Lesson 8 covers functions properly.)

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
`,o=`---
id: loops
title: Loops: doing things again and again
part: Lua basics
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
`,s=`---
id: functions
title: Functions: reusable recipes
part: Lua basics
minutes: 25
summary: Writing your own functions, parameters, return values, multiple returns, and why functions make scripts better.
---
## What is a function?

A **function** is a named recipe: a block of code you write once and run (*call*) whenever you want. You've been using one since lesson 1: \`print\`. Now you'll make your own.

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
`,c=`---
id: tables-lists
title: Tables I: lists
part: Lua basics
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
`,l=`---
id: tables-dicts
title: Tables II: dictionaries & nesting
part: Lua basics
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
`,u=`---
id: scope-errors
title: Scope, errors & debugging
part: Lua basics
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
`,d=`---
id: resources
title: FiveM resources & fxmanifest.lua
part: GTA V / FiveM
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

They are **two separate programs**. A variable on the client does not exist on the server, and the other way round. They can only talk by sending **events** (lesson 15).

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
`,f=`---
id: threads
title: Threads & Wait
part: GTA V / FiveM
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

You're far away in this example (the player is at Legion Square), so the loop only wakes once per second: no performance note. That's the goal. (\`#(a - b)\` is the distance between two positions; lesson 17 explains it.)

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
`,p=`---
id: commands
title: Commands (/slash commands)
part: GTA V / FiveM
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
2. \`function(source, args, rawCommand) ... end\` → the function FiveM calls when someone types it (you learned about passing functions in lesson 8).
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
3. Clamp it into the allowed range (lesson 5).
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
`,m=`---
id: events
title: Events: client ↔ server
part: GTA V / FiveM
minutes: 30
side: server
summary: How the two sides talk: RegisterNetEvent, AddEventHandler, TriggerServerEvent, TriggerClientEvent and source.
---
## Why events?

Client and server are separate programs (lesson 12). The only way for them to talk is to **send messages** to each other. FiveM calls those messages **events**.

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
`,h=`---
id: security
title: Security: never trust the client
part: GTA V / FiveM
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

Notice the pattern: **check, check, check, then act**, using guard clauses from lesson 6. Each \`return\` quietly refuses a bad request.

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
`,g=`---
id: natives
title: Natives, entities & vectors
part: GTA V / FiveM
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
`,_=`---
id: performance
title: Performance: a fast, friendly server
part: GTA V / FiveM
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
- Use \`local\` variables (faster than globals, lesson 2).

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
`,v=`---
id: config
title: Config files & shared code
part: GTA V / FiveM
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

Remember (lesson 12): **shared and client files are downloaded to every player's PC.** Anyone can open them. So a shared config must only hold things that are fine to be public: positions, labels, colours, which keys to use.

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
hint: The \`or\` trick from lesson 6: \`return Config.Salary[job] or Config.DefaultSalary\`
`,y=`---
id: saving
title: Saving data: JSON & KVP
part: GTA V / FiveM
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
2. **pcall around decode**, so one broken save can't crash the whole resource (lesson 11).

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
`;function ee(e,t=``){e=e.replace(/\r\n/g,`
`);let n=e.match(/^---\n([\s\S]*?)\n---\n/);if(!n)throw Error(`Missing front matter in `+t);let r={};for(let e of n[1].split(`
`)){let t=e.match(/^(\w+):\s*(.*)$/);t&&(r[t[1]]=t[2].trim())}let i=e.slice(n[0].length).split(/^=== (QUIZ|EXERCISE)\s*$/m),a=i[0],o=``,s=``;for(let e=1;e<i.length;e+=2)i[e]===`QUIZ`?o=i[e+1]:s=i[e+1];return{id:r.id,title:r.title,part:r.part||`Lua basics`,minutes:Number(r.minutes||10),side:r.side||`shared`,summary:r.summary||``,body:a,quiz:te(o,t),exercise:s?ne(s,r):null}}function te(e,t){let n=[],r=null;for(let t of e.split(`
`)){let e=t.trimEnd();if(e.startsWith(`? `))r={q:e.slice(2),options:[],answer:-1,why:``},n.push(r);else if(r)e.startsWith(`- `)?r.options.push(e.slice(2)):e.startsWith(`+ `)?(r.answer=r.options.length,r.options.push(e.slice(2))):e.startsWith(`> `)&&(r.why+=(r.why?` `:``)+e.slice(2));else continue}for(let e of n)if(e.answer<0)throw Error(`Quiz question without answer in `+t+`: `+e.q);return n}function ne(e,t){let n={title:``,prompt:``,starter:``,solution:``,test:``,preamble:``,hints:[],match:[],nomatch:[],variants:[],side:t.side||`shared`,duration:5e3},r=e.split(`
`),i=[];for(let e=0;e<r.length;e++){let t=r[e],a=t.match(/^```lua (starter|solution|test|preamble)\s*$/);if(a){let t=[];for(e++;e<r.length&&r[e]!=="```";)t.push(r[e]),e++;n[a[1]]=t.join(`
`);continue}let o;(o=t.match(/^title:\s*(.*)$/))?n.title=o[1]:(o=t.match(/^hint:\s*(.*)$/))?n.hints.push(o[1]):(o=t.match(/^match:\s*(.*?)\s*::\s*(.*)$/))?n.match.push({re:o[1],msg:o[2]}):(o=t.match(/^nomatch:\s*(.*?)\s*::\s*(.*)$/))?n.nomatch.push({re:o[1],msg:o[2]}):(o=t.match(/^variant:\s*(.*?)\s+=>\s+(.*?)\s+::\s+(.*?)\s+::\s+(.*)$/))?n.variants.push({find:o[1],replace:o[2],expr:o[3],msg:o[4]}):(o=t.match(/^side:\s*(\w+)\s*$/))?n.side=o[1]:(o=t.match(/^duration:\s*(\d+)\s*$/))?n.duration=Number(o[1]):i.push(t)}return n.prompt=i.join(`
`).trim(),n}var re=Object.assign({"./lessons/01-hello.md":e,"./lessons/02-variables.md":t,"./lessons/03-types.md":n,"./lessons/04-strings.md":r,"./lessons/05-numbers.md":i,"./lessons/06-if.md":a,"./lessons/07-loops.md":o,"./lessons/08-functions.md":s,"./lessons/09-tables-lists.md":c,"./lessons/10-tables-dicts.md":l,"./lessons/11-scope-errors.md":u,"./lessons/12-resources.md":d,"./lessons/13-threads.md":f,"./lessons/14-commands.md":p,"./lessons/15-events.md":m,"./lessons/16-security.md":h,"./lessons/17-natives.md":g,"./lessons/18-performance.md":_,"./lessons/19-config.md":v,"./lessons/20-saving.md":y}),b=Object.keys(re).sort().map((e,t)=>({...ee(re[e],e),n:t+1})),ie=e=>b.find(t=>t.id===e),ae=[...new Set(b.map(e=>e.part))],oe=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`);function se(e){return e.split(/(`[^`]+`)/g).map(e=>{if(e.startsWith("`")&&e.endsWith("`")&&e.length>1)return`<code>`+oe(e.slice(1,-1))+`</code>`;let t=oe(e);return t=t.replace(/\*\*(.+?)\*\*/g,`<strong>$1</strong>`),t=t.replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g,`$1<em>$2</em>`),t=t.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,`<a href="$2" target="_blank" rel="noopener">$1</a>`),t}).join(``)}var ce={do:[`✅`,`Do`],dont:[`⛔`,`Don't`],why:[`💡`,`Why?`],tip:[`👉`,`Tip`],warn:[`⚠️`,`Watch out`],gta:[`🚓`,`In your GTA server`],try:[`🧪`,`Try it`]},le=0;function ue(e,{side:t=`shared`}={}){let n=e.replace(/\r\n/g,`
`).split(`
`),r=[],i=0,a=[],o=()=>{a.length&&(r.push(`<p>`+se(a.join(` `))+`</p>`),a.length=0)};for(;i<n.length;){let e=n[i],s;if(s=e.match(/^```(\w*)([^\n]*)$/)){o();let e=s[1],a=s[2].trim().split(/\s+/).filter(Boolean),c=[];for(i++;i<n.length&&!/^```\s*$/.test(n[i]);)c.push(n[i]),i++;i++;let l=c.join(`
`),u=e===`lua`&&!a.includes(`norun`),d=a.find(e=>[`client`,`server`,`shared`,`manifest`].includes(e))||t,f=`cb`+ ++le;r.push(`<div class="codeblock${a.includes(`error`)?` expects-error`:``}" data-side="${d}" id="${f}">`+(a.includes(`bad`)?`<div class="cb-label bad">⛔ Bad example</div>`:a.includes(`good`)?`<div class="cb-label good">✅ Good example</div>`:``)+(d!==`shared`&&e===`lua`?`<div class="cb-side">${d===`manifest`?`fxmanifest.lua`:d+` script`}</div>`:``)+`<pre><code>${oe(l)}</code></pre>`+(u?`<div class="cb-actions"><button class="btn small run-block">▶ Run</button><button class="btn small ghost edit-block">✏️ Try in playground</button></div><div class="cb-output" hidden></div>`:``)+`</div>`)}else if(s=e.match(/^:::(\w+)\s*(.*)$/)){o();let e=s[1],a=s[2]||(ce[e]?ce[e][1]:e),c=[];for(i++;i<n.length&&n[i].trim()!==`:::`;)c.push(n[i]),i++;i++;let l=ce[e]?ce[e][0]:`•`;r.push(`<div class="box box-${e}"><div class="box-title">${l} ${se(a)}</div>${ue(c.join(`
`),{side:t})}</div>`)}else if(s=e.match(/^(#{2,4})\s+(.*)$/)){o();let e=s[1].length+1;r.push(`<h${e}>${se(s[2])}</h${e}>`),i++}else if(/^\s*[-*]\s+/.test(e)||/^\s*\d+\.\s+/.test(e)){o();let t=/^\s*\d+\./.test(e),a=[];for(;i<n.length&&(/^\s*[-*]\s+/.test(n[i])||/^\s*\d+\.\s+/.test(n[i])||/^\s{2,}\S/.test(n[i])&&a.length);)/^\s{2,}\S/.test(n[i])&&!/^\s*([-*]|\d+\.)\s+/.test(n[i])?a[a.length-1]+=` `+n[i].trim():a.push(n[i].replace(/^\s*([-*]|\d+\.)\s+/,``)),i++;let s=t?`ol`:`ul`;r.push(`<${s}>`+a.map(e=>`<li>`+se(e)+`</li>`).join(``)+`</${s}>`)}else if(/^\|.*\|\s*$/.test(e)){o();let e=[];for(;i<n.length&&/^\|.*\|\s*$/.test(n[i]);)e.push(n[i]),i++;let t=e=>e.trim().slice(1,-1).split(`|`).map(e=>e.trim()),a=t(e[0]),s=e.slice(1).filter(e=>!/^\|[\s:-|]+\|$/.test(e.trim()));r.push(`<div class="table-wrap"><table><thead><tr>`+a.map(e=>`<th>`+se(e)+`</th>`).join(``)+`</tr></thead><tbody>`+s.map(e=>`<tr>`+t(e).map(e=>`<td>`+se(e)+`</td>`).join(``)+`</tr>`).join(``)+`</tbody></table></div>`)}else e.trim()===``?(o(),i++):(a.push(e.trim()),i++)}return o(),r.join(`
`)}var de=[],fe=[];(()=>{let e=`lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,1n,9,16,o,,x,1i,3,,i,,7,a,2,t,3,1k,,,7,2,2,2,3,9,,a,2,q,,2,3,1k,,,5,4,2,2,3,3,,u,2,3,,b,3,1k,,,8,,3,,3,k,2,m,6,,3,1k,,,7,2,2,2,3,7,3,a,2,u,,1n,5,3,3,,4,9,,14,5,1j,,,7,,3,,4,7,2,b,2,t,3,1k,,,7,,3,,4,7,2,b,2,f,,c,4,1j,2,,7,,3,,4,9,,a,2,t,3,1y,,4,6,,,,8,i,2,1p,,,8,c,8,2q,,,a,b,7,21,2,r,,,,,,4,2,1d,k,,2,5,b,,10,9,,2u,b,,6,n,4,4,3,g,4,d,,,3,6,,f,,jj,3,qa,4,s,3,t,2,u,2,1s,w,9,,19,3,,,39,2,y,,3a,c,4,c,63,5,1l,a,,,,,2,o,2,,1c,1a,2,c,k,5,1b,h,12,9,c,3,u,d,1k,e,1c,k,48,3,,l,4,,6,,2,3,5i,1s,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,n,5,4,,2b,2,1e,i,q,i,d,,12,8,p,d,18,4,1b,e,10,,1v,e,c,,8,2,1a,,1f,,,3,2,2,5,2,,,15,5,5,2,6k,8,,2,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,1t,5,8t,2,25,6,1y,b,1d,4,3e,3,1h,f,15,,2,2,a,4,19,b,7,,1p,3,10,e,g,2,18,,c,3,1c,e,8,4,,2,2k,c,6,,2,,4d,c,l,4,1j,2,,7,2,2,2,3,9,,a,2,2,7,3,5,1v,9,,,2,,,4,,5,,,e,2,2a,i,n,,29,k,6j,7,2,9,r,2,2a,h,2y,d,2t,3,2,a,74,f,6t,6,,2,2,4,,,,2,3x,7,2,7,3,,s,a,14,7,,4,8,,9,b,1a,g,5i,8,5j,8,,8,2a,m,,e,3e,6,3,,,2,,7,,,1u,5,,2,,5,9n,4,9,2,,,1c,7,3,5,n,,44l,,6,f,8ug,i,1xc,5,1n,7,t4,,,1j,7,4,29,,b,2,f57,2,3mp,1a,2,n,f2,5,3,6,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,2s,,4g,7,af,,1p,4,e4,4,72,2,6r,,2,,7,2,5,,d6,7,31,7,240,5`.split(`,`).map(e=>e?parseInt(e,36):1);for(let t=0,n=0;t<e.length;t++)(t%2?fe:de).push(n+=e[t])})();function pe(e){if(e<768)return!1;for(let t=0,n=de.length;;){let r=t+n>>1;if(e<de[r])n=r;else if(e>=fe[r])t=r+1;else return!0;if(t==n)return!1}}function me(e){return e>=127462&&e<=127487}var he=8205;function ge(e,t,n=!0,r=!0){return(n?_e:ve)(e,t,r)}function _e(e,t,n){if(t==e.length)return t;t&&be(e.charCodeAt(t))&&xe(e.charCodeAt(t-1))&&t--;let r=ye(e,t);for(t+=Se(r);t<e.length;){let i=ye(e,t);if(r==he||i==he||n&&pe(i))t+=Se(i),r=i;else if(me(i)){let n=0,r=t-2;for(;r>=0&&me(ye(e,r));)n++,r-=2;if(n%2==0)break;t+=2}else break}return t}function ve(e,t,n){for(;t>1;){let r=_e(e,t-2,n);if(r<t)return r;t--}return 0}function ye(e,t){let n=e.charCodeAt(t);if(!xe(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return be(r)?(n-55296<<10)+(r-56320)+65536:n}function be(e){return e>=56320&&e<57344}function xe(e){return e>=55296&&e<56320}function Se(e){return e<65536?1:2}var x=class e{lineAt(e){if(e<0||e>this.length)throw RangeError(`Invalid position ${e} in document of length ${this.length}`);return this.lineInner(e,!1,1,0)}line(e){if(e<1||e>this.lines)throw RangeError(`Invalid line number ${e} in ${this.lines}-line document`);return this.lineInner(e,!0,1,0)}replace(e,t,n){[e,t]=Me(this,e,t);let r=[];return this.decompose(0,e,r,2),n.length&&n.decompose(0,n.length,r,3),this.decompose(t,this.length,r,1),we.from(r,this.length-(t-e)+n.length)}append(e){return this.replace(this.length,this.length,e)}slice(e,t=this.length){[e,t]=Me(this,e,t);let n=[];return this.decompose(e,t,n,0),we.from(n,t-e)}eq(e){if(e==this)return!0;if(e.length!=this.length||e.lines!=this.lines)return!1;let t=this.scanIdentical(e,1),n=this.length-this.scanIdentical(e,-1),r=new Oe(this),i=new Oe(e);for(let e=t,a=t;;){if(r.next(e),i.next(e),e=0,r.lineBreak!=i.lineBreak||r.done!=i.done||r.value!=i.value)return!1;if(a+=r.value.length,r.done||a>=n)return!0}}iter(e=1){return new Oe(this,e)}iterRange(e,t=this.length){return new ke(this,e,t)}iterLines(e,t){let n;if(e==null)n=this.iter();else{t??(t=this.lines+1);let r=this.line(e).from;n=this.iterRange(r,Math.max(r,t==this.lines+1?this.length:t<=1?0:this.line(t-1).to))}return new Ae(n)}toString(){return this.sliceString(0)}toJSON(){let e=[];return this.flatten(e),e}constructor(){}static of(t){if(t.length==0)throw RangeError(`A document must have at least one line`);return t.length==1&&!t[0]?e.empty:t.length<=32?new Ce(t):we.from(Ce.split(t,[]))}},Ce=class e extends x{constructor(e,t=Te(e)){super(),this.text=e,this.length=t}get lines(){return this.text.length}get children(){return null}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.text[i],o=r+a.length;if((t?n:o)>=e)return new je(r,o,n,a);r=o+1,n++}}decompose(t,n,r,i){let a=t<=0&&n>=this.length?this:new e(De(this.text,t,n),Math.min(n,this.length)-Math.max(0,t));if(i&1){let t=r.pop(),n=Ee(a.text,t.text.slice(),0,a.length);if(n.length<=32)r.push(new e(n,t.length+a.length));else{let t=n.length>>1;r.push(new e(n.slice(0,t)),new e(n.slice(t)))}}else r.push(a)}replace(t,n,r){if(!(r instanceof e))return super.replace(t,n,r);[t,n]=Me(this,t,n);let i=Ee(this.text,Ee(r.text,De(this.text,0,t)),n),a=this.length+r.length-(n-t);return i.length<=32?new e(i,a):we.from(e.split(i,[]),a)}sliceString(e,t=this.length,n=`
`){[e,t]=Me(this,e,t);let r=``;for(let i=0,a=0;i<=t&&a<this.text.length;a++){let o=this.text[a],s=i+o.length;i>e&&a&&(r+=n),e<s&&t>i&&(r+=o.slice(Math.max(0,e-i),t-i)),i=s+1}return r}flatten(e){for(let t of this.text)e.push(t)}scanIdentical(){return 0}static split(t,n){let r=[],i=-1;for(let a of t)r.push(a),i+=a.length+1,r.length==32&&(n.push(new e(r,i)),r=[],i=-1);return i>-1&&n.push(new e(r,i)),n}},we=class e extends x{constructor(e,t){super(),this.children=e,this.length=t,this.lines=0;for(let t of e)this.lines+=t.lines}lineInner(e,t,n,r){for(let i=0;;i++){let a=this.children[i],o=r+a.length,s=n+a.lines-1;if((t?s:o)>=e)return a.lineInner(e,t,n,r);r=o+1,n=s+1}}decompose(e,t,n,r){for(let i=0,a=0;a<=t&&i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(e<=s&&t>=a){let i=r&(a<=e|(s>=t?2:0));a>=e&&s<=t&&!i?n.push(o):o.decompose(e-a,t-a,n,i)}a=s+1}}replace(t,n,r){if([t,n]=Me(this,t,n),r.lines<this.lines)for(let i=0,a=0;i<this.children.length;i++){let o=this.children[i],s=a+o.length;if(t>=a&&n<=s){let c=o.replace(t-a,n-a,r),l=this.lines-o.lines+c.lines;if(c.lines<l>>4&&c.lines>l>>6){let a=this.children.slice();return a[i]=c,new e(a,this.length-(n-t)+r.length)}return super.replace(a,s,c)}a=s+1}return super.replace(t,n,r)}sliceString(e,t=this.length,n=`
`){[e,t]=Me(this,e,t);let r=``;for(let i=0,a=0;i<this.children.length&&a<=t;i++){let o=this.children[i],s=a+o.length;a>e&&i&&(r+=n),e<s&&t>a&&(r+=o.sliceString(e-a,t-a,n)),a=s+1}return r}flatten(e){for(let t of this.children)t.flatten(e)}scanIdentical(t,n){if(!(t instanceof e))return 0;let r=0,[i,a,o,s]=n>0?[0,0,this.children.length,t.children.length]:[this.children.length-1,t.children.length-1,-1,-1];for(;;i+=n,a+=n){if(i==o||a==s)return r;let e=this.children[i],c=t.children[a];if(e!=c)return r+e.scanIdentical(c,n);r+=e.length+1}}static from(t,n=t.reduce((e,t)=>e+t.length+1,-1)){let r=0;for(let e of t)r+=e.lines;if(r<32){let e=[];for(let n of t)n.flatten(e);return new Ce(e,n)}let i=Math.max(32,r>>5),a=i<<1,o=i>>1,s=[],c=0,l=-1,u=[];function d(t){let n;if(t.lines>a&&t instanceof e)for(let e of t.children)d(e);else t.lines>o&&(c>o||!c)?(f(),s.push(t)):t instanceof Ce&&c&&(n=u[u.length-1])instanceof Ce&&t.lines+n.lines<=32?(c+=t.lines,l+=t.length+1,u[u.length-1]=new Ce(n.text.concat(t.text),n.length+1+t.length)):(c+t.lines>i&&f(),c+=t.lines,l+=t.length+1,u.push(t))}function f(){c!=0&&(s.push(u.length==1?u[0]:e.from(u,l)),l=-1,c=u.length=0)}for(let e of t)d(e);return f(),s.length==1?s[0]:new e(s,n)}};x.empty=new Ce([``],0);function Te(e){let t=-1;for(let n of e)t+=n.length+1;return t}function Ee(e,t,n=0,r=1e9){for(let i=0,a=0,o=!0;a<e.length&&i<=r;a++){let s=e[a],c=i+s.length;c>=n&&(c>r&&(s=s.slice(0,r-i)),i<n&&(s=s.slice(n-i)),o?(t[t.length-1]+=s,o=!1):t.push(s)),i=c+1}return t}function De(e,t,n){return Ee(e,[``],t,n)}var Oe=class{constructor(e,t=1){this.dir=t,this.done=!1,this.lineBreak=!1,this.value=``,this.nodes=[e],this.offsets=[t>0?1:(e instanceof Ce?e.text.length:e.children.length)<<1]}nextInner(e,t){for(this.done=this.lineBreak=!1;;){let n=this.nodes.length-1,r=this.nodes[n],i=this.offsets[n],a=i>>1,o=r instanceof Ce?r.text.length:r.children.length;if(a==(t>0?o:0)){if(n==0)return this.done=!0,this.value=``,this;t>0&&this.offsets[n-1]++,this.nodes.pop(),this.offsets.pop()}else if((i&1)==(t>0?0:1)){if(this.offsets[n]+=t,e==0)return this.lineBreak=!0,this.value=`
`,this;e--}else if(r instanceof Ce){let i=r.text[a+(t<0?-1:0)];if(this.offsets[n]+=t,i.length>Math.max(0,e))return this.value=e==0?i:t>0?i.slice(e):i.slice(0,i.length-e),this;e-=i.length}else{let i=r.children[a+(t<0?-1:0)];e>i.length?(e-=i.length,this.offsets[n]+=t):(t<0&&this.offsets[n]--,this.nodes.push(i),this.offsets.push(t>0?1:(i instanceof Ce?i.text.length:i.children.length)<<1))}}}next(e=0){return e<0&&(this.nextInner(-e,-this.dir),e=this.value.length),this.nextInner(e,this.dir)}},ke=class{constructor(e,t,n){this.value=``,this.done=!1,this.cursor=new Oe(e,t>n?-1:1),this.pos=t>n?e.length:0,this.from=Math.min(t,n),this.to=Math.max(t,n)}nextInner(e,t){if(t<0?this.pos<=this.from:this.pos>=this.to)return this.value=``,this.done=!0,this;e+=Math.max(0,t<0?this.pos-this.to:this.from-this.pos);let n=t<0?this.pos-this.from:this.to-this.pos;e>n&&(e=n),n-=e;let{value:r}=this.cursor.next(e);return this.pos+=(r.length+e)*t,this.value=r.length<=n?r:t<0?r.slice(r.length-n):r.slice(0,n),this.done=!this.value,this}next(e=0){return e<0?e=Math.max(e,this.from-this.pos):e>0&&(e=Math.min(e,this.to-this.pos)),this.nextInner(e,this.cursor.dir)}get lineBreak(){return this.cursor.lineBreak&&this.value!=``}},Ae=class{constructor(e){this.inner=e,this.afterBreak=!0,this.value=``,this.done=!1}next(e=0){let{done:t,lineBreak:n,value:r}=this.inner.next(e);return t&&this.afterBreak?(this.value=``,this.afterBreak=!1):t?(this.done=!0,this.value=``):n?this.afterBreak?this.value=``:(this.afterBreak=!0,this.next()):(this.value=r,this.afterBreak=!1),this}get lineBreak(){return!1}};typeof Symbol<`u`&&(x.prototype[Symbol.iterator]=function(){return this.iter()},Oe.prototype[Symbol.iterator]=ke.prototype[Symbol.iterator]=Ae.prototype[Symbol.iterator]=function(){return this});var je=class{constructor(e,t,n,r){this.from=e,this.to=t,this.number=n,this.text=r}get length(){return this.to-this.from}};function Me(e,t,n){return t=Math.max(0,Math.min(e.length,t)),[t,Math.max(t,Math.min(e.length,n))]}function S(e,t,n=!0,r=!0){return ge(e,t,n,r)}function Ne(e){return e>=56320&&e<57344}function Pe(e){return e>=55296&&e<56320}function Fe(e,t){let n=e.charCodeAt(t);if(!Pe(n)||t+1==e.length)return n;let r=e.charCodeAt(t+1);return Ne(r)?(n-55296<<10)+(r-56320)+65536:n}function Ie(e){return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10)+55296,(e&1023)+56320))}function Le(e){return e<65536?1:2}var Re=/\r\n?|\n/,ze=(function(e){return e[e.Simple=0]=`Simple`,e[e.TrackDel=1]=`TrackDel`,e[e.TrackBefore=2]=`TrackBefore`,e[e.TrackAfter=3]=`TrackAfter`,e})(ze||(ze={})),Be=class e{constructor(e){this.sections=e}get length(){let e=0;for(let t=0;t<this.sections.length;t+=2)e+=this.sections[t];return e}get newLength(){let e=0;for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t+1];e+=n<0?this.sections[t]:n}return e}get empty(){return this.sections.length==0||this.sections.length==2&&this.sections[1]<0}iterGaps(e){for(let t=0,n=0,r=0;t<this.sections.length;){let i=this.sections[t++],a=this.sections[t++];a<0?(e(n,r,i),r+=i):r+=a,n+=i}}iterChangedRanges(e,t=!1){Ue(this,e,t)}get invertedDesc(){let t=[];for(let e=0;e<this.sections.length;){let n=this.sections[e++],r=this.sections[e++];r<0?t.push(n,r):t.push(r,n)}return new e(t)}composeDesc(e){return this.empty?e:e.empty?this:Ge(this,e)}mapDesc(e,t=!1){return e.empty?this:We(this,e,t)}mapPos(e,t=-1,n=ze.Simple){let r=0,i=0;for(let a=0;a<this.sections.length;){let o=this.sections[a++],s=this.sections[a++],c=r+o;if(s<0){if(c>e)return i+(e-r);i+=o}else{if(n!=ze.Simple&&c>=e&&(n==ze.TrackDel&&r<e&&c>e||n==ze.TrackBefore&&r<e||n==ze.TrackAfter&&c>e))return null;if(c>e||c==e&&t<0&&!o)return e==r||t<0?i:i+s;i+=s}r=c}if(e>r)throw RangeError(`Position ${e} is out of range for changeset of length ${r}`);return i}touchesRange(e,t=e){for(let n=0,r=0;n<this.sections.length&&r<=t;){let i=this.sections[n++],a=this.sections[n++],o=r+i;if(a>=0&&r<=t&&o>=e)return r<e&&o>t?`cover`:!0;r=o}return!1}toString(){let e=``;for(let t=0;t<this.sections.length;){let n=this.sections[t++],r=this.sections[t++];e+=(e?` `:``)+n+(r>=0?`:`+r:``)}return e}toJSON(){return this.sections}static fromJSON(t){if(!Array.isArray(t)||t.length%2||t.some(e=>typeof e!=`number`))throw RangeError(`Invalid JSON representation of ChangeDesc`);return new e(t)}static create(t){return new e(t)}},Ve=class e extends Be{constructor(e,t){super(e),this.inserted=t}apply(e){if(this.length!=e.length)throw RangeError(`Applying change set to a document with the wrong length`);return Ue(this,(t,n,r,i,a)=>e=e.replace(r,r+(n-t),a),!1),e}mapDesc(e,t=!1){return We(this,e,t,!0)}invert(t){let n=this.sections.slice(),r=[];for(let e=0,i=0;e<n.length;e+=2){let a=n[e],o=n[e+1];if(o>=0){n[e]=o,n[e+1]=a;let s=e>>1;for(;r.length<s;)r.push(x.empty);r.push(a?t.slice(i,i+a):x.empty)}i+=a}return new e(n,r)}compose(e){return this.empty?e:e.empty?this:Ge(this,e,!0)}map(e,t=!1){return e.empty?this:We(this,e,t,!0)}iterChanges(e,t=!1){Ue(this,e,t)}get desc(){return Be.create(this.sections)}filter(t){let n=[],r=[],i=[],a=new Ke(this);done:for(let e=0,o=0;;){let s=e==t.length?1e9:t[e++];for(;o<s||o==s&&a.len==0;){if(a.done)break done;let e=Math.min(a.len,s-o);C(i,e,-1);let t=a.ins==-1?-1:a.off==0?a.ins:0;C(n,e,t),t>0&&He(r,n,a.text),a.forward(e),o+=e}let c=t[e++];for(;o<c;){if(a.done)break done;let e=Math.min(a.len,c-o);C(n,e,-1),C(i,e,a.ins==-1?-1:a.off==0?a.ins:0),a.forward(e),o+=e}}return{changes:new e(n,r),filtered:Be.create(i)}}toJSON(){let e=[];for(let t=0;t<this.sections.length;t+=2){let n=this.sections[t],r=this.sections[t+1];r<0?e.push(n):r==0?e.push([n]):e.push([n].concat(this.inserted[t>>1].toJSON()))}return e}static of(t,n,r){let i=[],a=[],o=0,s=null;function c(t=!1){if(!t&&!i.length)return;o<n&&C(i,n-o,-1);let r=new e(i,a);s=s?s.compose(r.map(s)):r,i=[],a=[],o=0}function l(t){if(Array.isArray(t))for(let e of t)l(e);else if(t instanceof e){if(t.length!=n)throw RangeError(`Mismatched change set length (got ${t.length}, expected ${n})`);c(),s=s?s.compose(t.map(s)):t}else{let{from:e,to:s=e,insert:l}=t;if(e>s||e<0||s>n)throw RangeError(`Invalid change range ${e} to ${s} (in doc of length ${n})`);let u=l?typeof l==`string`?x.of(l.split(r||Re)):l:x.empty,d=u.length;if(e==s&&d==0)return;e<o&&c(),e>o&&C(i,e-o,-1),C(i,s-e,d),He(a,i,u),o=s}}return l(t),c(!s),s}static empty(t){return new e(t?[t,-1]:[],[])}static fromJSON(t){if(!Array.isArray(t))throw RangeError(`Invalid JSON representation of ChangeSet`);let n=[],r=[];for(let e=0;e<t.length;e++){let i=t[e];if(typeof i==`number`)n.push(i,-1);else if(!Array.isArray(i)||typeof i[0]!=`number`||i.some((e,t)=>t&&typeof e!=`string`))throw RangeError(`Invalid JSON representation of ChangeSet`);else if(i.length==1)n.push(i[0],0);else{for(;r.length<e;)r.push(x.empty);r[e]=x.of(i.slice(1)),n.push(i[0],r[e].length)}}return new e(n,r)}static createSet(t,n){return new e(t,n)}};function C(e,t,n,r=!1){if(t==0&&n<=0)return;let i=e.length-2;i>=0&&n<=0&&n==e[i+1]?e[i]+=t:i>=0&&t==0&&e[i]==0?e[i+1]+=n:r?(e[i]+=t,e[i+1]+=n):e.push(t,n)}function He(e,t,n){if(n.length==0)return;let r=t.length-2>>1;if(r<e.length)e[e.length-1]=e[e.length-1].append(n);else{for(;e.length<r;)e.push(x.empty);e.push(n)}}function Ue(e,t,n){let r=e.inserted;for(let i=0,a=0,o=0;o<e.sections.length;){let s=e.sections[o++],c=e.sections[o++];if(c<0)i+=s,a+=s;else{let l=i,u=a,d=x.empty;for(;l+=s,u+=c,c&&r&&(d=d.append(r[o-2>>1])),!(n||o==e.sections.length||e.sections[o+1]<0);)s=e.sections[o++],c=e.sections[o++];t(i,l,a,u,d),i=l,a=u}}}function We(e,t,n,r=!1){let i=[],a=r?[]:null,o=new Ke(e),s=new Ke(t);for(let e=-1;;)if(o.done&&s.len||s.done&&o.len)throw Error(`Mismatched change set lengths`);else if(o.ins==-1&&s.ins==-1){let e=Math.min(o.len,s.len);C(i,e,-1),o.forward(e),s.forward(e)}else if(s.ins>=0&&(o.ins<0||e==o.i||o.off==0&&(s.len<o.len||s.len==o.len&&!n))){let t=s.len;for(C(i,s.ins,-1);t;){let n=Math.min(o.len,t);o.ins>=0&&e<o.i&&o.len<=n&&(C(i,0,o.ins),a&&He(a,i,o.text),e=o.i),o.forward(n),t-=n}s.next()}else if(o.ins>=0){let t=0,n=o.len;for(;n;)if(s.ins==-1){let e=Math.min(n,s.len);t+=e,n-=e,s.forward(e)}else if(s.ins==0&&s.len<n)n-=s.len,s.next();else break;C(i,t,e<o.i?o.ins:0),a&&e<o.i&&He(a,i,o.text),e=o.i,o.forward(o.len-n)}else if(o.done&&s.done)return a?Ve.createSet(i,a):Be.create(i);else throw Error(`Mismatched change set lengths`)}function Ge(e,t,n=!1){let r=[],i=n?[]:null,a=new Ke(e),o=new Ke(t);for(let e=!1;;)if(a.done&&o.done)return i?Ve.createSet(r,i):Be.create(r);else if(a.ins==0)C(r,a.len,0,e),a.next();else if(o.len==0&&!o.done)C(r,0,o.ins,e),i&&He(i,r,o.text),o.next();else if(a.done||o.done)throw Error(`Mismatched change set lengths`);else{let t=Math.min(a.len2,o.len),n=r.length;if(a.ins==-1){let n=o.ins==-1?-1:o.off?0:o.ins;C(r,t,n,e),i&&n&&He(i,r,o.text)}else o.ins==-1?(C(r,a.off?0:a.len,t,e),i&&He(i,r,a.textBit(t))):(C(r,a.off?0:a.len,o.off?0:o.ins,e),i&&!o.off&&He(i,r,o.text));e=(a.ins>t||o.ins>=0&&o.len>t)&&(e||r.length>n),a.forward2(t),o.forward(t)}}var Ke=class{constructor(e){this.set=e,this.i=0,this.next()}next(){let{sections:e}=this.set;this.i<e.length?(this.len=e[this.i++],this.ins=e[this.i++]):(this.len=0,this.ins=-2),this.off=0}get done(){return this.ins==-2}get len2(){return this.ins<0?this.len:this.ins}get text(){let{inserted:e}=this.set,t=this.i-2>>1;return t>=e.length?x.empty:e[t]}textBit(e){let{inserted:t}=this.set,n=this.i-2>>1;return n>=t.length&&!e?x.empty:t[n].slice(this.off,e==null?void 0:this.off+e)}forward(e){e==this.len?this.next():(this.len-=e,this.off+=e)}forward2(e){this.ins==-1?this.forward(e):e==this.ins?this.next():(this.ins-=e,this.off+=e)}},qe=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.flags=n,this.goalColumn=r}get anchor(){return this.flags&32?this.to:this.from}get head(){return this.flags&32?this.from:this.to}get empty(){return this.from==this.to}get assoc(){return this.flags&8?-1:this.flags&16?1:0}get undirectional(){return(this.flags&64)>0}get bidiLevel(){let e=this.flags&7;return e==7?null:e}map(t,n=-1){let r,i;return this.empty?r=i=t.mapPos(this.from,n):(r=t.mapPos(this.from,1),i=t.mapPos(this.to,-1)),r==this.from&&i==this.to?this:new e(r,i,this.flags,this.goalColumn)}extend(e,t=e,n=0){if(e<=this.anchor&&t>=this.anchor)return w.range(e,t,void 0,void 0,n);let r=Math.abs(e-this.anchor)>Math.abs(t-this.anchor)?e:t;return w.range(this.anchor,r,void 0,void 0,n)}eq(e,t=!1){return this.anchor==e.anchor&&this.head==e.head&&this.goalColumn==e.goalColumn&&(!t||!this.empty||this.assoc==e.assoc)}toJSON(){return{anchor:this.anchor,head:this.head}}static fromJSON(e){if(!e||typeof e.anchor!=`number`||typeof e.head!=`number`)throw RangeError(`Invalid JSON representation for SelectionRange`);return w.range(e.anchor,e.head)}static create(t,n,r,i){return new e(t,n,r,i)}},w=class e{constructor(e,t){this.ranges=e,this.mainIndex=t}map(t,n=-1){return t.empty?this:e.create(this.ranges.map(e=>e.map(t,n)),this.mainIndex)}eq(e,t=!1){if(this.ranges.length!=e.ranges.length||this.mainIndex!=e.mainIndex)return!1;for(let n=0;n<this.ranges.length;n++)if(!this.ranges[n].eq(e.ranges[n],t))return!1;return!0}get main(){return this.ranges[this.mainIndex]}asSingle(){return this.ranges.length==1?this:new e([this.main],0)}addRange(t,n=!0){return e.create([t].concat(this.ranges),n?0:this.mainIndex+1)}replaceRange(t,n=this.mainIndex){let r=this.ranges.slice();return r[n]=t,e.create(r,this.mainIndex)}toJSON(){return{ranges:this.ranges.map(e=>e.toJSON()),main:this.mainIndex}}static fromJSON(t){if(!t||!Array.isArray(t.ranges)||typeof t.main!=`number`||t.main>=t.ranges.length)throw RangeError(`Invalid JSON representation for EditorSelection`);return new e(t.ranges.map(e=>qe.fromJSON(e)),t.main)}static single(t,n=t){return new e([e.range(t,n)],0)}static create(t,n=0){if(t.length==0)throw RangeError(`A selection needs at least one range`);for(let r=0,i=0;i<t.length;i++){let a=t[i];if(a.empty?a.from<=r:a.from<r)return e.normalized(t.slice(),n);r=a.to}return new e(t,n)}static cursor(e,t=0,n,r){return qe.create(e,e,(t==0?0:t<0?8:16)|(n==null?7:Math.min(6,n)),r)}static range(e,t,n,r,i){let a=r==null?7:Math.min(6,r);return!i&&e!=t&&(i=t<e?1:-1),i&&(a|=i<0?8:16),t<e?qe.create(t,e,a|32,n):qe.create(e,t,a,n)}static undirectionalRange(e,t){return qe.create(e,t,64,void 0)}static normalized(t,n=0){let r=t[n];t.sort((e,t)=>e.from-t.from),n=t.indexOf(r);for(let r=1;r<t.length;r++){let i=t[r],a=t[r-1];if(i.empty?i.from<=a.to:i.from<a.to){let o=a.from,s=Math.max(i.to,a.to);r<=n&&n--,t.splice(--r,2,i.anchor>i.head?e.range(s,o):e.range(o,s))}}return new e(t,n)}};function Je(e,t){for(let n of e.ranges)if(n.to>t)throw RangeError(`Selection points outside of document`)}var Ye=0,T=class e{constructor(e,t,n,r,i){this.combine=e,this.compareInput=t,this.compare=n,this.isStatic=r,this.id=Ye++,this.default=e([]),this.extensions=typeof i==`function`?i(this):i}get reader(){return this}static define(t={}){return new e(t.combine||(e=>e),t.compareInput||((e,t)=>e===t),t.compare||(t.combine?(e,t)=>e===t:Xe),!!t.static,t.enables)}of(e){return new Ze([],this,0,e)}compute(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Ze(e,this,1,t)}computeN(e,t){if(this.isStatic)throw Error(`Can't compute a static facet`);return new Ze(e,this,2,t)}from(e,t){return t||(t=e=>e),this.compute([e],n=>t(n.field(e)))}};function Xe(e,t){return e==t||e.length==t.length&&e.every((e,n)=>e===t[n])}var Ze=class{constructor(e,t,n,r){this.dependencies=e,this.facet=t,this.type=n,this.value=r,this.id=Ye++}dynamicSlot(e){let t=this.value,n=this.facet.compareInput,r=this.id,i=e[r]>>1,a=this.type==2,o=!1,s=!1,c=[];for(let t of this.dependencies)t==`doc`?o=!0:t==`selection`?s=!0:(e[t.id]??1)&1||c.push(e[t.id]);return{create(e){return e.values[i]=t(e),1},update(e,r){if(o&&r.docChanged||s&&(r.docChanged||r.selection)||$e(e,c)){let r=t(e);if(a?!Qe(r,e.values[i],n):!n(r,e.values[i]))return e.values[i]=r,1}return 0},reconfigure:(e,o)=>{let s,c=o.config.address[r];if(c!=null){let r=ft(o,c);if(this.dependencies.every(t=>t instanceof T?o.facet(t)===e.facet(t):t instanceof nt?o.field(t,!1)==e.field(t,!1):!0)||(a?Qe(s=t(e),r,n):n(s=t(e),r)))return e.values[i]=r,0}else s=t(e);return e.values[i]=s,1}}}get extension(){return this}};function Qe(e,t,n){if(e.length!=t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function $e(e,t){let n=!1;for(let r of t)dt(e,r)&1&&(n=!0);return n}function et(e,t,n){let r=n.map(t=>e[t.id]),i=n.map(e=>e.type),a=r.filter(e=>!(e&1)),o=e[t.id]>>1;function s(e){let n=[];for(let t=0;t<r.length;t++){let a=ft(e,r[t]);if(i[t]==2)for(let e of a)n.push(e);else n.push(a)}return t.combine(n)}return{create(e){for(let t of r)dt(e,t);return e.values[o]=s(e),1},update(e,n){if(!$e(e,a))return 0;let r=s(e);return t.compare(r,e.values[o])?0:(e.values[o]=r,1)},reconfigure(e,i){let a=$e(e,r),c=i.config.facets[t.id],l=i.facet(t);if(c&&!a&&Xe(n,c))return e.values[o]=l,0;let u=s(e);return t.compare(u,l)?(e.values[o]=l,0):(e.values[o]=u,1)}}}var tt=T.define({static:!0}),nt=class e{constructor(e,t,n,r,i){this.id=e,this.createF=t,this.updateF=n,this.compareF=r,this.spec=i,this.provides=void 0}static define(t){let n=new e(Ye++,t.create,t.update,t.compare||((e,t)=>e===t),t);return t.provide&&(n.provides=t.provide(n)),n}create(e){return(e.facet(tt).find(e=>e.field==this)?.create||this.createF)(e)}slot(e){let t=e[this.id]>>1;return{create:e=>(e.values[t]=this.create(e),1),update:(e,n)=>{let r=e.values[t],i=this.updateF(r,n);return this.compareF(r,i)?0:(e.values[t]=i,1)},reconfigure:(e,n)=>{let r=e.facet(tt),i=n.facet(tt),a;return(a=r.find(e=>e.field==this))&&a!=i.find(e=>e.field==this)?(e.values[t]=a.create(e),1):n.config.address[this.id]==null?(e.values[t]=this.create(e),1):(e.values[t]=n.field(this),0)}}}init(e){return[this,tt.of({field:this,create:e})]}get extension(){return this}},rt={lowest:4,low:3,default:2,high:1,highest:0};function it(e){return t=>new ot(t,e)}var at={highest:it(rt.highest),high:it(rt.high),default:it(rt.default),low:it(rt.low),lowest:it(rt.lowest)},ot=class{constructor(e,t){this.inner=e,this.prec=t}get extension(){return this}},st=class e{of(e){return new ct(this,e)}reconfigure(t){return e.reconfigure.of({compartment:this,extension:t})}get(e){return e.config.compartments.get(this)}},ct=class{constructor(e,t){this.compartment=e,this.inner=t}get extension(){return this}},lt=class e{constructor(e,t,n,r,i,a){for(this.base=e,this.compartments=t,this.dynamicSlots=n,this.address=r,this.staticValues=i,this.facets=a,this.statusTemplate=[];this.statusTemplate.length<n.length;)this.statusTemplate.push(0)}staticFacet(e){let t=this.address[e.id];return t==null?e.default:this.staticValues[t>>1]}static resolve(t,n,r){let i=[],a=Object.create(null),o=new Map;for(let e of ut(t,n,o))e instanceof nt?i.push(e):(a[e.facet.id]||(a[e.facet.id]=[])).push(e);let s=Object.create(null),c=[],l=[];for(let e of i)s[e.id]=l.length<<1,l.push(t=>e.slot(t));let u=r?.config.facets;for(let e in a){let t=a[e],n=t[0].facet,i=u&&u[e]||[];if(t.every(e=>e.type==0)){if(s[n.id]=c.length<<1|1,Xe(i,t))c.push(r.facet(n));else{let e=n.combine(t.map(e=>e.value));c.push(r&&n.compare(e,r.facet(n))?r.facet(n):e)}}else{for(let e of t)e.type==0?(s[e.id]=c.length<<1|1,c.push(e.value)):(s[e.id]=l.length<<1,l.push(t=>e.dynamicSlot(t)));s[n.id]=l.length<<1,l.push(e=>et(e,n,t))}}let d=l.map(e=>e(s));return new e(t,o,d,s,c,a)}};function ut(e,t,n){let r=[[],[],[],[],[]],i=new Map;function a(e,o){let s=i.get(e);if(s!=null){if(s<=o)return;let t=r[s].indexOf(e);t>-1&&r[s].splice(t,1),e instanceof ct&&n.delete(e.compartment)}if(i.set(e,o),Array.isArray(e))for(let t of e)a(t,o);else if(e instanceof ct){if(n.has(e.compartment))throw RangeError(`Duplicate use of compartment in extensions`);let r=t.get(e.compartment)||e.inner;n.set(e.compartment,r),a(r,o)}else if(e instanceof ot)a(e.inner,e.prec);else if(e instanceof nt)r[o].push(e),e.provides&&a(e.provides,o);else if(e instanceof Ze)r[o].push(e),e.facet.extensions&&a(e.facet.extensions,rt.default);else{let t=e.extension;if(!t)throw Error(`Unrecognized extension value in extension set (${e}).`);if(t==e)throw Error(`Unrecognized extension value in extension set (${e}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);a(t,o)}}return a(e,rt.default),r.reduce((e,t)=>e.concat(t))}function dt(e,t){if(t&1)return 2;let n=t>>1,r=e.status[n];if(r==4)throw Error(`Cyclic dependency between fields and/or facets`);if(r&2)return r;e.status[n]=4;let i=e.computeSlot(e,e.config.dynamicSlots[n]);return e.status[n]=2|i}function ft(e,t){return t&1?e.config.staticValues[t>>1]:e.values[t>>1]}var pt=T.define(),mt=T.define({combine:e=>e.some(e=>e),static:!0}),ht=T.define({combine:e=>e.length?e[0]:void 0,static:!0}),gt=T.define(),_t=T.define(),vt=T.define(),yt=T.define({combine:e=>e.length?e[0]:!1}),bt=class{constructor(e,t){this.type=e,this.value=t}static define(){return new xt}},xt=class{of(e){return new bt(this,e)}},St=class{constructor(e){this.map=e}of(e){return new E(this,e)}},E=class e{constructor(e,t){this.type=e,this.value=t}map(t){let n=this.type.map(this.value,t);return n===void 0?void 0:n==this.value?this:new e(this.type,n)}is(e){return this.type==e}static define(e={}){return new St(e.map||(e=>e))}static mapEffects(e,t){if(!e.length)return e;let n=[];for(let r of e){let e=r.map(t);e&&n.push(e)}return n}};E.reconfigure=E.define(),E.appendConfig=E.define();var Ct=class e{constructor(t,n,r,i,a,o){this.startState=t,this.changes=n,this.selection=r,this.effects=i,this.annotations=a,this.scrollIntoView=o,this._doc=null,this._state=null,r&&Je(r,n.newLength),a.some(t=>t.type==e.time)||(this.annotations=a.concat(e.time.of(Date.now())))}static create(t,n,r,i,a,o){return new e(t,n,r,i,a,o)}get newDoc(){return this._doc||(this._doc=this.changes.apply(this.startState.doc))}get newSelection(){return this.selection||this.startState.selection.map(this.changes)}get state(){return this._state||this.startState.applyTransaction(this),this._state}annotation(e){for(let t of this.annotations)if(t.type==e)return t.value}get docChanged(){return!this.changes.empty}get reconfigured(){return this.startState.config!=this.state.config}isUserEvent(t){let n=this.annotation(e.userEvent);return!!(n&&(n==t||n.length>t.length&&n.slice(0,t.length)==t&&n[t.length]==`.`))}};Ct.time=bt.define(),Ct.userEvent=bt.define(),Ct.addToHistory=bt.define(),Ct.remote=bt.define();function wt(e,t){let n=[];for(let r=0,i=0;;){let a,o;if(r<e.length&&(i==t.length||t[i]>=e[r]))a=e[r++],o=e[r++];else if(i<t.length)a=t[i++],o=t[i++];else return n;!n.length||n[n.length-1]<a?n.push(a,o):n[n.length-1]<o&&(n[n.length-1]=o)}}function Tt(e,t,n){let r,i,a;return n?(r=t.changes,i=Ve.empty(t.changes.length),a=e.changes.compose(t.changes)):(r=t.changes.map(e.changes),i=e.changes.mapDesc(t.changes,!0),a=e.changes.compose(r)),{changes:a,selection:t.selection?t.selection.map(i):e.selection?.map(r),effects:E.mapEffects(e.effects,r).concat(E.mapEffects(t.effects,i)),annotations:e.annotations.length?e.annotations.concat(t.annotations):t.annotations,scrollIntoView:e.scrollIntoView||t.scrollIntoView}}function Et(e,t,n){let r=t.selection,i=jt(t.annotations);return t.userEvent&&(i=i.concat(Ct.userEvent.of(t.userEvent))),{changes:t.changes instanceof Ve?t.changes:Ve.of(t.changes||[],n,e.facet(ht)),selection:r&&(r instanceof w?r:w.single(r.anchor,r.head)),effects:jt(t.effects),annotations:i,scrollIntoView:!!t.scrollIntoView}}function Dt(e,t,n){let r=Et(e,t.length?t[0]:{},e.doc.length);t.length&&t[0].filter===!1&&(n=!1);for(let i=1;i<t.length;i++){t[i].filter===!1&&(n=!1);let a=!!t[i].sequential;r=Tt(r,Et(e,t[i],a?r.changes.newLength:e.doc.length),a)}let i=Ct.create(e,r.changes,r.selection,r.effects,r.annotations,r.scrollIntoView);return kt(n?Ot(i):i)}function Ot(e){let t=e.startState,n=!0;for(let r of t.facet(gt)){let t=r(e);if(t===!1){n=!1;break}Array.isArray(t)&&(n=n===!0?t:wt(n,t))}if(n!==!0){let r,i;if(n===!1)i=e.changes.invertedDesc,r=Ve.empty(t.doc.length);else{let t=e.changes.filter(n);r=t.changes,i=t.filtered.mapDesc(t.changes).invertedDesc}e=Ct.create(t,r,e.selection&&e.selection.map(i),E.mapEffects(e.effects,i),e.annotations,e.scrollIntoView)}let r=t.facet(_t);for(let n=r.length-1;n>=0;n--){let i=r[n](e);e=i instanceof Ct?i:Array.isArray(i)&&i.length==1&&i[0]instanceof Ct?i[0]:Dt(t,jt(i),!1)}return e}function kt(e){let t=e.startState,n=t.facet(vt),r=e;for(let i=n.length-1;i>=0;i--){let a=n[i](e);a&&Object.keys(a).length&&(r=Tt(r,Et(t,a,e.changes.newLength),!0))}return r==e?e:Ct.create(t,e.changes,e.selection,r.effects,r.annotations,r.scrollIntoView)}var At=[];function jt(e){return e==null?At:Array.isArray(e)?e:[e]}var D=(function(e){return e[e.Word=0]=`Word`,e[e.Space=1]=`Space`,e[e.Other=2]=`Other`,e})(D||(D={})),Mt=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Nt;try{Nt=RegExp(`[\\p{Alphabetic}\\p{Number}_]`,`u`)}catch{}function Pt(e){if(Nt)return Nt.test(e);for(let t=0;t<e.length;t++){let n=e[t];if(/\w/.test(n)||n>``&&(n.toUpperCase()!=n.toLowerCase()||Mt.test(n)))return!0}return!1}function Ft(e){return t=>{if(!/\S/.test(t))return D.Space;if(Pt(t))return D.Word;for(let n=0;n<e.length;n++)if(t.indexOf(e[n])>-1)return D.Word;return D.Other}}var O=class e{constructor(e,t,n,r,i,a){this.config=e,this.doc=t,this.selection=n,this.values=r,this.status=e.statusTemplate.slice(),this.computeSlot=i,a&&(a._state=this);for(let e=0;e<this.config.dynamicSlots.length;e++)dt(this,e<<1);this.computeSlot=null}field(e,t=!0){let n=this.config.address[e.id];if(n==null){if(t)throw RangeError(`Field is not present in this state`)}else return dt(this,n),ft(this,n)}update(...e){return Dt(this,e,!0)}applyTransaction(t){let n=this.config,{base:r,compartments:i}=n;for(let e of t.effects)e.is(st.reconfigure)?(n&&(i=new Map,n.compartments.forEach((e,t)=>i.set(t,e)),n=null),i.set(e.value.compartment,e.value.extension)):e.is(E.reconfigure)?(n=null,r=e.value):e.is(E.appendConfig)&&(n=null,r=jt(r).concat(e.value));let a;n?a=t.startState.values.slice():(n=lt.resolve(r,i,this),a=new e(n,this.doc,this.selection,n.dynamicSlots.map(()=>null),(e,t)=>t.reconfigure(e,this),null).values);let o=t.startState.facet(mt)?t.newSelection:t.newSelection.asSingle();new e(n,t.newDoc,o,a,(e,n)=>n.update(e,t),t)}replaceSelection(e){return typeof e==`string`&&(e=this.toText(e)),this.changeByRange(t=>({changes:{from:t.from,to:t.to,insert:e},range:w.cursor(t.from+e.length,-1)}))}changeByRange(e){let t=this.selection,n=e(t.ranges[0]),r=this.changes(n.changes),i=[n.range],a=jt(n.effects);for(let n=1;n<t.ranges.length;n++){let o=e(t.ranges[n]),s=this.changes(o.changes),c=s.map(r);for(let e=0;e<n;e++)i[e]=i[e].map(c);let l=r.mapDesc(s,!0);i.push(o.range.map(l)),r=r.compose(c),a=E.mapEffects(a,c).concat(E.mapEffects(jt(o.effects),l))}return{changes:r,selection:w.create(i,t.mainIndex),effects:a}}changes(t=[]){return t instanceof Ve?t:Ve.of(t,this.doc.length,this.facet(e.lineSeparator))}toText(t){return x.of(t.split(this.facet(e.lineSeparator)||Re))}sliceDoc(e=0,t=this.doc.length){return this.doc.sliceString(e,t,this.lineBreak)}facet(e){let t=this.config.address[e.id];return t==null?e.default:(dt(this,t),ft(this,t))}toJSON(e){let t={doc:this.sliceDoc(),selection:this.selection.toJSON()};if(e)for(let n in e){let r=e[n];r instanceof nt&&this.config.address[r.id]!=null&&(t[n]=r.spec.toJSON(this.field(e[n]),this))}return t}static fromJSON(t,n={},r){if(!t||typeof t.doc!=`string`)throw RangeError(`Invalid JSON representation for EditorState`);let i=[];if(r){for(let e in r)if(Object.prototype.hasOwnProperty.call(t,e)){let n=r[e],a=t[e];i.push(n.init(e=>n.spec.fromJSON(a,e)))}}return e.create({doc:t.doc,selection:w.fromJSON(t.selection),extensions:n.extensions?i.concat([n.extensions]):i})}static create(t={}){let n=lt.resolve(t.extensions||[],new Map),r=t.doc instanceof x?t.doc:x.of((t.doc||``).split(n.staticFacet(e.lineSeparator)||Re)),i=t.selection?t.selection instanceof w?t.selection:w.single(t.selection.anchor,t.selection.head):w.single(0);return Je(i,r.length),n.staticFacet(mt)||(i=i.asSingle()),new e(n,r,i,n.dynamicSlots.map(()=>null),(e,t)=>t.create(e),null)}get tabSize(){return this.facet(e.tabSize)}get lineBreak(){return this.facet(e.lineSeparator)||`
`}get readOnly(){return this.facet(yt)}phrase(t,...n){for(let n of this.facet(e.phrases))if(Object.prototype.hasOwnProperty.call(n,t)){t=n[t];break}return n.length&&(t=t.replace(/\$(\$|\d*)/g,(e,t)=>{if(t==`$`)return`$`;let r=+(t||1);return!r||r>n.length?e:n[r-1]})),t}languageDataAt(e,t,n=-1){let r=[];for(let i of this.facet(pt))for(let a of i(this,t,n))Object.prototype.hasOwnProperty.call(a,e)&&r.push(a[e]);return r}charCategorizer(e){let t=this.languageDataAt(`wordChars`,e);return Ft(t.length?t[0]:``)}wordAt(e){let{text:t,from:n,length:r}=this.doc.lineAt(e),i=this.charCategorizer(e),a=e-n,o=e-n;for(;a>0;){let e=S(t,a,!1);if(i(t.slice(e,a))!=D.Word)break;a=e}for(;o<r;){let e=S(t,o);if(i(t.slice(o,e))!=D.Word)break;o=e}return a==o?null:w.range(a+n,o+n)}};O.allowMultipleSelections=mt,O.tabSize=T.define({combine:e=>e.length?e[0]:4}),O.lineSeparator=ht,O.readOnly=yt,O.phrases=T.define({compare(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length==r.length&&n.every(n=>e[n]==t[n])}}),O.languageData=pt,O.changeFilter=gt,O.transactionFilter=_t,O.transactionExtender=vt,st.reconfigure=E.define();function It(e,t,n={}){let r={};for(let t of e)for(let e of Object.keys(t)){let i=t[e],a=r[e];if(a===void 0)r[e]=i;else if(a!==i&&i!==void 0){if(Object.hasOwnProperty.call(n,e))r[e]=n[e](a,i);else throw Error(`Config merge conflict for field `+e)}}for(let e in t)r[e]===void 0&&(r[e]=t[e]);return r}var Lt=class{eq(e){return this==e}range(e,t=e){return zt.create(e,t,this)}};Lt.prototype.startSide=Lt.prototype.endSide=0,Lt.prototype.point=!1,Lt.prototype.mapMode=ze.TrackDel;function Rt(e,t){return e==t||e.constructor==t.constructor&&e.eq(t)}var zt=class e{constructor(e,t,n){this.from=e,this.to=t,this.value=n}static create(t,n,r){return new e(t,n,r)}};function Bt(e,t){return e.from-t.from||e.value.startSide-t.value.startSide}var Vt=class e{constructor(e,t,n,r){this.from=e,this.to=t,this.value=n,this.maxPoint=r}get length(){return Ht(this.to)}findIndex(e,t,n,r=0){let i=n?this.to:this.from;for(let a=r,o=i.length;;){if(a==o)return a;let r=a+o>>1,s=i[r]-e||(n?this.value[r].endSide:this.value[r].startSide)-t;if(r==a)return s>=0?a:o;s>=0?o=r:a=r+1}}between(e,t,n,r){for(let i=this.findIndex(t,-1e9,!0),a=this.findIndex(n,1e9,!1,i);i<a;i++)if(r(this.from[i]+e,this.to[i]+e,this.value[i])===!1)return!1}map(t,n,r,i,a){let o=[],s=[],c=[],l=-1,u=-1;iter:for(let e=0;e<this.value.length;e++){let d=this.value[e],f=this.from[e]+t,p=this.to[e]+t,m,h;if(f==p){let e=n.mapPos(f,d.startSide,d.mapMode);if(e==null||(m=h=e,d.startSide!=d.endSide&&(h=n.mapPos(f,d.endSide),h<m)))continue}else if(m=n.mapPos(f,d.startSide),h=n.mapPos(p,d.endSide),m>h||m==h&&d.startSide>0&&d.endSide<=0)continue;if(!((h-m||d.endSide-d.startSide)<0)){if(l<0&&(l=m),d.point&&(u=Math.max(u,h-m)),(m-r||d.startSide-i)>=0)o.push(d),s.push(m-l),c.push(h-l),r=h,i=d.endSide;else{if(m==h)for(let e=o.length;e>0;e--){if((m-(c[e-1]+l)||d.startSide-o[e-1].endSide)>=0){o.splice(e,0,d),s.splice(e,0,m-l),c.splice(e,0,h-l);continue iter}if((m-(s[e-1]+l)||d.endSide-o[e-1].startSide)>0)break}a(m,h,d)}}}return{mapped:o.length?new e(s,c,o,u):null,pos:l}}},k=class e{constructor(e,t,n,r){this.chunkPos=e,this.chunk=t,this.nextLayer=n,this.maxPoint=r}static create(t,n,r,i){return new e(t,n,r,i)}get length(){let e=this.chunk.length-1;return e<0?0:Math.max(this.chunkEnd(e),this.nextLayer.length)}get size(){if(this.isEmpty)return 0;let e=this.nextLayer.size;for(let t of this.chunk)e+=t.value.length;return e}chunkEnd(e){return this.chunkPos[e]+this.chunk[e].length}update(t){let{add:n=[],sort:r=!1,filterFrom:i=0,filterTo:a=this.length}=t,o=t.filter;if(n.length==0&&!o)return this;if(r&&(n=n.slice().sort(Bt)),this.isEmpty)return n.length?e.of(n):this;let s=new Kt(this,null,-1).goto(0),c=0,l=[],u=new Wt;for(;s.value||c<n.length;)if(c<n.length&&(s.from-n[c].from||s.startSide-n[c].value.startSide)>=0){let e=n[c++];u.addInner(e.from,e.to,e.value,!1)||l.push(e)}else s.rangeIndex==1&&s.chunkIndex<this.chunk.length&&(c==n.length||this.chunkEnd(s.chunkIndex)<n[c].from)&&(!o||i>this.chunkEnd(s.chunkIndex)||a<this.chunkPos[s.chunkIndex])&&u.addChunk(this.chunkPos[s.chunkIndex],this.chunk[s.chunkIndex])?s.nextChunk():((!o||i>s.to||a<s.from||o(s.from,s.to,s.value))&&(u.addInner(s.from,s.to,s.value,!1)||l.push(zt.create(s.from,s.to,s.value))),s.next());return u.finishInner(this.nextLayer.isEmpty&&!l.length?e.empty:this.nextLayer.update({add:l,filter:o,filterFrom:i,filterTo:a}))}map(t){if(t.empty||this.isEmpty)return this;let n=[],r=[],i=-1,a,o=(e,t,n)=>{a||(a=new Wt),a.addRange(e,t,n,!1)};for(let e=0;e<this.chunk.length;e++){let a=this.chunkPos[e],s=this.chunk[e],c=t.touchesRange(a,a+s.length);if(c===!1)i=Math.max(i,s.maxPoint),n.push(s),r.push(t.mapPos(a));else if(c===!0){let[e,c]=n.length?[Ht(r)+Ht(n).length,Ht(Ht(n).value).endSide]:[-1,-1],{mapped:l,pos:u}=s.map(a,t,e,c,o);l&&(i=Math.max(i,l.maxPoint),n.push(l),r.push(u))}}let s=this.nextLayer.map(t);return a&&(s=a.finishInner(s)),n.length==0?s:new e(r,n,s||e.empty,i)}between(e,t,n){if(!this.isEmpty){for(let r=0;r<this.chunk.length;r++){let i=this.chunkPos[r],a=this.chunk[r];if(t>=i&&e<=i+a.length&&a.between(i,e-i,t-i,n)===!1)return}this.nextLayer.between(e,t,n)}}iter(e=0){return qt.from([this]).goto(e)}get isEmpty(){return this.nextLayer==this}static iter(e,t=0){return qt.from(e).goto(t)}static compare(e,t,n,r,i=-1){let a=e.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),o=t.filter(e=>e.maxPoint>0||!e.isEmpty&&e.maxPoint>=i),s=Gt(a,o,n),c=new Yt(a,s,i),l=new Yt(o,s,i);n.iterGaps((e,t,n)=>Xt(c,e,l,t,n,r)),n.empty&&n.length==0&&Xt(c,0,l,0,0,r)}static eq(e,t,n=0,r){r??(r=1e9-1);let i=e.filter(e=>!e.isEmpty&&t.indexOf(e)<0),a=t.filter(t=>!t.isEmpty&&e.indexOf(t)<0);if(i.length!=a.length)return!1;if(!i.length)return!0;let o=Gt(i,a),s=new Yt(i,o,0).goto(n),c=new Yt(a,o,0).goto(n);for(;;){if(s.to!=c.to||!Zt(s.active,c.active)||s.point&&(!c.point||!Rt(s.point,c.point)))return!1;if(s.to>r)return!0;s.next(),c.next()}}static spans(e,t,n,r,i=-1){let a=new Yt(e,null,i).goto(t),o=t,s=a.openStart;for(;;){let e=Math.min(a.to,n);if(a.point){let n=a.activeForPoint(a.to),i=a.pointFrom<t?n.length+1:a.point.startSide<0?n.length:Math.min(n.length,s);r.point(o,e,a.point,n,i,a.pointRank),s=Math.min(a.openEnd(e),n.length)}else e>o&&(r.span(o,e,a.active,s),s=a.openEnd(e));if(a.to>n)return s+(a.point&&a.to>n?1:0);o=a.to,a.next()}}static of(e,t=!1){let n=new Wt;for(let r of e instanceof zt?[e]:t?Ut(e):e)n.add(r.from,r.to,r.value);return n.finish()}static join(t){if(!t.length)return e.empty;let n=Ht(t);for(let r=t.length-2;r>=0;r--)for(let i=t[r];i!=e.empty;i=i.nextLayer)n=new e(i.chunkPos,i.chunk,n,Math.max(i.maxPoint,n.maxPoint));return n}};k.empty=new k([],[],null,-1);function Ht(e){return e[e.length-1]}function Ut(e){if(e.length>1)for(let t=e[0],n=1;n<e.length;n++){let r=e[n];if(Bt(t,r)>0)return e.slice().sort(Bt);t=r}return e}k.empty.nextLayer=k.empty;var Wt=class e{finishChunk(e){this.chunks.push(new Vt(this.from,this.to,this.value,this.maxPoint)),this.chunkPos.push(this.chunkStart),this.chunkStart=-1,this.setMaxPoint=Math.max(this.setMaxPoint,this.maxPoint),this.maxPoint=-1,e&&(this.from=[],this.to=[],this.value=[])}constructor(){this.chunks=[],this.chunkPos=[],this.chunkStart=-1,this.last=null,this.lastFrom=-1e9,this.lastTo=-1e9,this.from=[],this.to=[],this.value=[],this.maxPoint=-1,this.setMaxPoint=-1,this.nextLayer=null}add(e,t,n){this.addRange(e,t,n,!0)}addRange(t,n,r,i){this.addInner(t,n,r,i)||(this.nextLayer||(this.nextLayer=new e)).addRange(t,n,r,i)}addInner(e,t,n,r){let i=e-this.lastTo||n.startSide-this.last.endSide;if(r&&i<=0&&(e-this.lastFrom||n.startSide-this.last.startSide)<0)throw Error("Ranges must be added sorted by `from` position and `startSide`");return i<0?!1:(this.from.length==250&&this.finishChunk(!0),this.chunkStart<0&&(this.chunkStart=e),this.from.push(e-this.chunkStart),this.to.push(t-this.chunkStart),this.last=n,this.lastFrom=e,this.lastTo=t,this.value.push(n),n.point&&(this.maxPoint=Math.max(this.maxPoint,t-e)),!0)}addChunk(e,t){if((e-this.lastTo||t.value[0].startSide-this.last.endSide)<0)return!1;this.from.length&&this.finishChunk(!0),this.setMaxPoint=Math.max(this.setMaxPoint,t.maxPoint),this.chunks.push(t),this.chunkPos.push(e);let n=t.value.length-1;return this.last=t.value[n],this.lastFrom=t.from[n]+e,this.lastTo=t.to[n]+e,!0}finish(){return this.finishInner(k.empty)}finishInner(e){if(this.from.length&&this.finishChunk(!1),this.chunks.length==0)return e;let t=k.create(this.chunkPos,this.chunks,this.nextLayer?this.nextLayer.finishInner(e):e,this.setMaxPoint);return this.from=null,t}};function Gt(e,t,n){let r=new Map;for(let t of e)for(let e=0;e<t.chunk.length;e++)t.chunk[e].maxPoint<=0&&r.set(t.chunk[e],t.chunkPos[e]);let i=new Set;for(let e of t)for(let t=0;t<e.chunk.length;t++){let a=r.get(e.chunk[t]);a!=null&&(n?n.mapPos(a):a)==e.chunkPos[t]&&!n?.touchesRange(a,a+e.chunk[t].length)&&i.add(e.chunk[t])}return i}var Kt=class{constructor(e,t,n,r=0){this.layer=e,this.skip=t,this.minPoint=n,this.rank=r}get startSide(){return this.value?this.value.startSide:0}get endSide(){return this.value?this.value.endSide:0}goto(e,t=-1e9){return this.chunkIndex=this.rangeIndex=0,this.gotoInner(e,t,!1),this}gotoInner(e,t,n){for(;this.chunkIndex<this.layer.chunk.length;){let t=this.layer.chunk[this.chunkIndex];if(!(this.skip&&this.skip.has(t)||this.layer.chunkEnd(this.chunkIndex)<e||t.maxPoint<this.minPoint))break;this.chunkIndex++,n=!1}if(this.chunkIndex<this.layer.chunk.length){let r=this.layer.chunk[this.chunkIndex].findIndex(e-this.layer.chunkPos[this.chunkIndex],t,!0);(!n||this.rangeIndex<r)&&this.setRangeIndex(r)}this.next()}forward(e,t){(this.to-e||this.endSide-t)<0&&this.gotoInner(e,t,!0)}next(){for(;;)if(this.chunkIndex==this.layer.chunk.length){this.from=this.to=1e9,this.value=null;break}else{let e=this.layer.chunkPos[this.chunkIndex],t=this.layer.chunk[this.chunkIndex],n=e+t.from[this.rangeIndex];if(this.from=n,this.to=e+t.to[this.rangeIndex],this.value=t.value[this.rangeIndex],this.setRangeIndex(this.rangeIndex+1),this.minPoint<0||this.value.point&&this.to-this.from>=this.minPoint)break}}setRangeIndex(e){if(e==this.layer.chunk[this.chunkIndex].value.length){if(this.chunkIndex++,this.skip)for(;this.chunkIndex<this.layer.chunk.length&&this.skip.has(this.layer.chunk[this.chunkIndex]);)this.chunkIndex++;this.rangeIndex=0}else this.rangeIndex=e}nextChunk(){this.chunkIndex++,this.rangeIndex=0,this.next()}compare(e){return this.from-e.from||this.startSide-e.startSide||this.rank-e.rank||this.to-e.to||this.endSide-e.endSide}},qt=class e{constructor(e){this.heap=e}static from(t,n=null,r=-1){let i=[];for(let e=0;e<t.length;e++)for(let a=t[e];!a.isEmpty;a=a.nextLayer)a.maxPoint>=r&&i.push(new Kt(a,n,r,e));return i.length==1?i[0]:new e(i)}get startSide(){return this.value?this.value.startSide:0}goto(e,t=-1e9){for(let n of this.heap)n.goto(e,t);for(let e=this.heap.length>>1;e>=0;e--)Jt(this.heap,e);return this.next(),this}forward(e,t){for(let n of this.heap)n.forward(e,t);for(let e=this.heap.length>>1;e>=0;e--)Jt(this.heap,e);(this.to-e||this.value.endSide-t)<0&&this.next()}next(){if(this.heap.length==0)this.from=this.to=1e9,this.value=null,this.rank=-1;else{let e=this.heap[0];this.from=e.from,this.to=e.to,this.value=e.value,this.rank=e.rank,e.value&&e.next(),Jt(this.heap,0)}}};function Jt(e,t){for(let n=e[t];;){let r=(t<<1)+1;if(r>=e.length)break;let i=e[r];if(r+1<e.length&&i.compare(e[r+1])>=0&&(i=e[r+1],r++),n.compare(i)<0)break;e[r]=n,e[t]=i,t=r}}var Yt=class{constructor(e,t,n){this.minPoint=n,this.active=[],this.activeTo=[],this.activeRank=[],this.minActive=-1,this.point=null,this.pointFrom=0,this.pointRank=0,this.to=-1e9,this.endSide=0,this.openStart=-1,this.cursor=qt.from(e,t,n)}goto(e,t=-1e9){return this.cursor.goto(e,t),this.active.length=this.activeTo.length=this.activeRank.length=0,this.minActive=-1,this.to=e,this.endSide=t,this.openStart=-1,this.next(),this}forward(e,t){for(;this.minActive>-1&&(this.activeTo[this.minActive]-e||this.active[this.minActive].endSide-t)<0;)this.removeActive(this.minActive);this.cursor.forward(e,t)}removeActive(e){Qt(this.active,e),Qt(this.activeTo,e),Qt(this.activeRank,e),this.minActive=en(this.active,this.activeTo)}addActive(e){let t=0,{value:n,to:r,rank:i}=this.cursor;for(;t<this.activeRank.length&&(i-this.activeRank[t]||r-this.activeTo[t])>0;)t++;$t(this.active,t,n),$t(this.activeTo,t,r),$t(this.activeRank,t,i),e&&$t(e,t,this.cursor.from),this.minActive=en(this.active,this.activeTo)}next(){let e=this.to,t=this.point;this.point=null;let n=this.openStart<0?[]:null;for(;;){let r=this.minActive;if(r>-1&&(this.activeTo[r]-this.cursor.from||this.active[r].endSide-this.cursor.startSide)<0){if(this.activeTo[r]>e){this.to=this.activeTo[r],this.endSide=this.active[r].endSide;break}this.removeActive(r),n&&Qt(n,r)}else if(!this.cursor.value){this.to=this.endSide=1e9;break}else if(this.cursor.from>e){this.to=this.cursor.from,this.endSide=this.cursor.startSide;break}else{let e=this.cursor.value;if(!e.point)this.addActive(n),this.cursor.next();else if(t&&this.cursor.to==this.to&&this.cursor.from<this.cursor.to)this.cursor.next();else{this.point=e,this.pointFrom=this.cursor.from,this.pointRank=this.cursor.rank,this.to=this.cursor.to,this.endSide=e.endSide,this.cursor.next(),this.forward(this.to,this.endSide);break}}}if(n){this.openStart=0;for(let t=n.length-1;t>=0&&n[t]<e;t--)this.openStart++}}activeForPoint(e){if(!this.active.length)return this.active;let t=[];for(let n=this.active.length-1;n>=0&&!(this.activeRank[n]<this.pointRank);n--)(this.activeTo[n]>e||this.activeTo[n]==e&&this.active[n].endSide>=this.point.endSide)&&t.push(this.active[n]);return t.reverse()}openEnd(e){let t=0;for(let n=this.activeTo.length-1;n>=0&&this.activeTo[n]>e;n--)t++;return t}};function Xt(e,t,n,r,i,a){e.goto(t),n.goto(r);let o=r+i,s=r,c=r-t,l=!!a.boundChange;for(let t=!1;;){let r=e.to+c-n.to,i=r||e.endSide-n.endSide,u=i<0?e.to+c:n.to,d=Math.min(u,o);if(e.point||n.point?(e.point&&n.point&&Rt(e.point,n.point)&&Zt(e.activeForPoint(e.to),n.activeForPoint(n.to))||a.comparePoint(s,d,e.point,n.point),t=!1):(t&&(a.boundChange(s),t=!1),d>s&&!Zt(e.active,n.active)&&a.compareRange(s,d,e.active,n.active),l&&d<o&&(r||e.openEnd(u)!=n.openEnd(u))&&(t=!0)),u>o)break;s=u,i<=0&&e.next(),i>=0&&n.next()}}function Zt(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!=t[n]&&!Rt(e[n],t[n]))return!1;return!0}function Qt(e,t){for(let n=t,r=e.length-1;n<r;n++)e[n]=e[n+1];e.pop()}function $t(e,t,n){for(let n=e.length-1;n>=t;n--)e[n+1]=e[n];e[t]=n}function en(e,t){let n=-1,r=1e9;for(let i=0;i<t.length;i++)(t[i]-r||e[i].endSide-e[n].endSide)<0&&(n=i,r=t[i]);return n}function tn(e,t,n=e.length){let r=0;for(let i=0;i<n&&i<e.length;)e.charCodeAt(i)==9?(r+=t-r%t,i++):(r++,i=S(e,i));return r}function nn(e,t,n,r){for(let r=0,i=0;;){if(i>=t)return r;if(r==e.length)break;i+=e.charCodeAt(r)==9?n-i%n:1,r=S(e,r)}return r===!0?-1:e.length}for(var rn=`ͼ`,an=typeof Symbol>`u`?`__ͼ`:Symbol.for(rn),on=typeof Symbol>`u`?`__styleSet`+Math.floor(Math.random()*1e8):Symbol(`styleSet`),sn=typeof globalThis<`u`?globalThis:typeof window<`u`?window:{},cn=class{constructor(e,t){this.rules=[];let{finish:n}=t||{};function r(e){return/^@/.test(e)?[e]:e.split(/,\s*/)}function i(e,t,a,o){let s=[],c=/^@(\w+)\b/.exec(e[0]),l=c&&c[1]==`keyframes`;if(c&&t==null)return a.push(e[0]+`;`);for(let n in t){let o=t[n];if(/&/.test(n))i(n.split(/,\s*/).map(t=>e.map(e=>t.replace(/&/,e))).reduce((e,t)=>e.concat(t)),o,a);else if(o&&typeof o==`object`){if(!c)throw RangeError(`The value of a property (`+n+`) should be a primitive value.`);i(r(n),o,s,l)}else o!=null&&s.push(n.replace(/_.*/,``).replace(/[A-Z]/g,e=>`-`+e.toLowerCase())+`: `+o+`;`)}(s.length||l)&&a.push((n&&!c&&!o?e.map(n):e).join(`, `)+` {`+s.join(` `)+`}`)}for(let t in e)i(r(t),e[t],this.rules)}getRules(){return this.rules.join(`
`)}static newName(){let e=sn[an]||1;return sn[an]=e+1,rn+e.toString(36)}static mount(e,t,n){let r=e[on],i=n&&n.nonce;r?i&&r.setNonce(i):r=new un(e,i),r.mount(Array.isArray(t)?t:[t],e)}},ln=new Map,un=class{constructor(e,t){let n=e.ownerDocument||e,r=n.defaultView;if(!e.head&&e.adoptedStyleSheets&&r.CSSStyleSheet){let t=ln.get(n);if(t)return e[on]=t;this.sheet=new r.CSSStyleSheet,ln.set(n,this)}else this.styleTag=n.createElement(`style`),t&&this.styleTag.setAttribute(`nonce`,t);this.modules=[],e[on]=this}mount(e,t){let n=this.sheet,r=0,i=0,a=!1;for(let t=0;t<e.length;t++){let o=e[t],s=this.modules.indexOf(o);if(s<i&&s>-1&&(this.modules.splice(s,1),a=!0,i--,s=-1),s==-1){if(this.modules.splice(i++,0,o),a=!0,n)for(let e=0;e<o.rules.length;e++)n.insertRule(o.rules[e],r++)}else{for(;i<s;)r+=this.modules[i++].rules.length;r+=o.rules.length,i++}}if(n)t.adoptedStyleSheets.indexOf(this.sheet)<0&&(t.adoptedStyleSheets=[this.sheet,...t.adoptedStyleSheets]);else{if(a){let e=``;for(let t=0;t<this.modules.length;t++)e+=this.modules[t].getRules()+`
`;this.styleTag.textContent=e}let e=t.head||t;this.styleTag.parentNode!=e&&e.insertBefore(this.styleTag,e.firstChild)}}setNonce(e){this.styleTag&&this.styleTag.getAttribute(`nonce`)!=e&&this.styleTag.setAttribute(`nonce`,e)}},dn={8:`Backspace`,9:`Tab`,10:`Enter`,12:`NumLock`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,44:`PrintScreen`,45:`Insert`,46:`Delete`,59:`;`,61:`=`,91:`Meta`,92:`Meta`,106:`*`,107:`+`,108:`,`,109:`-`,110:`.`,111:`/`,144:`NumLock`,145:`ScrollLock`,160:`Shift`,161:`Shift`,162:`Control`,163:`Control`,164:`Alt`,165:`Alt`,173:`-`,186:`;`,187:`=`,188:`,`,189:`-`,190:`.`,191:`/`,192:"`",219:`[`,220:`\\`,221:`]`,222:`'`},fn={48:`)`,49:`!`,50:`@`,51:`#`,52:`$`,53:`%`,54:`^`,55:`&`,56:`*`,57:`(`,59:`:`,61:`+`,173:`_`,186:`:`,187:`+`,188:`<`,189:`_`,190:`>`,191:`?`,192:`~`,219:`{`,220:`|`,221:`}`,222:`"`},pn=typeof navigator<`u`&&/Mac/.test(navigator.platform),mn=typeof navigator<`u`&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),hn=0;hn<10;hn++)dn[48+hn]=dn[96+hn]=String(hn);for(var hn=1;hn<=24;hn++)dn[hn+111]=`F`+hn;for(var hn=65;hn<=90;hn++)dn[hn]=String.fromCharCode(hn+32),fn[hn]=String.fromCharCode(hn);for(var gn in dn)fn.hasOwnProperty(gn)||(fn[gn]=dn[gn]);function _n(e){var t=!(pn&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||mn&&e.shiftKey&&e.key&&e.key.length==1||e.key==`Unidentified`)&&e.key||(e.shiftKey?fn:dn)[e.keyCode]||e.key||`Unidentified`;return t==`Esc`&&(t=`Escape`),t==`Del`&&(t=`Delete`),t==`Left`&&(t=`ArrowLeft`),t==`Up`&&(t=`ArrowUp`),t==`Right`&&(t=`ArrowRight`),t==`Down`&&(t=`ArrowDown`),t}function A(){var e=arguments[0];typeof e==`string`&&(e=document.createElement(e));var t=1,n=arguments[1];if(n&&typeof n==`object`&&n.nodeType==null&&!Array.isArray(n)){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){var i=n[r];typeof i==`string`?e.setAttribute(r,i):i!=null&&(e[r]=i)}t++}for(;t<arguments.length;t++)vn(e,arguments[t]);return e}function vn(e,t){if(typeof t==`string`)e.appendChild(document.createTextNode(t));else if(t!=null){if(t.nodeType!=null)e.appendChild(t);else if(Array.isArray(t))for(var n=0;n<t.length;n++)vn(e,t[n]);else throw RangeError(`Unsupported child node: `+t)}}var yn=typeof navigator<`u`?navigator:{userAgent:``,vendor:``,platform:``},bn=typeof document<`u`?document:{documentElement:{style:{}}},xn=/Edge\/(\d+)/.exec(yn.userAgent),Sn=/MSIE \d/.test(yn.userAgent),Cn=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(yn.userAgent),wn=!!(Sn||Cn||xn),Tn=!wn&&/gecko\/(\d+)/i.test(yn.userAgent),En=!wn&&/Chrome\/(\d+)/.exec(yn.userAgent),Dn=`webkitFontSmoothing`in bn.documentElement.style,On=!wn&&/Apple Computer/.test(yn.vendor),kn=On&&(/Mobile\/\w+/.test(yn.userAgent)||yn.maxTouchPoints>2),j={mac:kn||/Mac/.test(yn.platform),windows:/Win/.test(yn.platform),linux:/Linux|X11/.test(yn.platform),ie:wn,ie_version:Sn?bn.documentMode||6:Cn?+Cn[1]:xn?+xn[1]:0,gecko:Tn,gecko_version:Tn?+(/Firefox\/(\d+)/.exec(yn.userAgent)||[0,0])[1]:0,chrome:!!En,chrome_version:En?+En[1]:0,ios:kn,android:/Android\b/.test(yn.userAgent),webkit:Dn,webkit_version:Dn?+(/\bAppleWebKit\/(\d+)/.exec(yn.userAgent)||[0,0])[1]:0,safari:On,safari_version:On?+(/\bVersion\/(\d+(\.\d+)?)/.exec(yn.userAgent)||[0,0])[1]:0,tabSize:bn.documentElement.style.tabSize==null?`-moz-tab-size`:`tab-size`};function An(e,t){for(let n in e)n==`class`&&t.class?t.class+=` `+e.class:n==`style`&&t.style?t.style+=`;`+e.style:t[n]=e[n];return t}var jn=Object.create(null);function Mn(e,t,n){if(e==t)return!0;e||(e=jn),t||(t=jn);let r=Object.keys(e),i=Object.keys(t);if(r.length-0!=i.length-0)return!1;for(let a of r)if(a!=n&&(i.indexOf(a)==-1||e[a]!==t[a]))return!1;return!0}function Nn(e,t){for(let n=e.attributes.length-1;n>=0;n--){let r=e.attributes[n].name;t[r]??e.removeAttribute(r)}for(let n in t){let r=t[n];n==`style`?e.style.cssText=r:e.getAttribute(n)!=r&&e.setAttribute(n,r)}}function Pn(e,t,n){let r=!1;if(t)for(let i in t)n&&i in n||(r=!0,i==`style`?e.style.cssText=``:e.removeAttribute(i));if(n)for(let i in n)t&&t[i]==n[i]||(r=!0,i==`style`?e.style.cssText=n[i]:e.setAttribute(i,n[i]));return r}function Fn(e){let t=Object.create(null);for(let n=0;n<e.attributes.length;n++){let r=e.attributes[n];t[r.name]=r.value}return t}var In=class{eq(e){return!1}updateDOM(e,t,n){return!1}compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}get estimatedHeight(){return-1}get lineBreaks(){return 0}ignoreEvent(e){return!0}coordsAt(e,t,n){return null}get isHidden(){return!1}get editable(){return!1}destroy(e){}},M=(function(e){return e[e.Text=0]=`Text`,e[e.WidgetBefore=1]=`WidgetBefore`,e[e.WidgetAfter=2]=`WidgetAfter`,e[e.WidgetRange=3]=`WidgetRange`,e})(M||(M={})),N=class extends Lt{constructor(e,t,n,r){super(),this.startSide=e,this.endSide=t,this.widget=n,this.spec=r}get heightRelevant(){return!1}static mark(e){return new Ln(e)}static widget(e){let t=Math.max(-1e4,Math.min(1e4,e.side||0)),n=!!e.block;return t+=n&&!e.inlineOrder?t>0?3e8:-4e8:t>0?1e8:-1e8,new zn(e,t,t,n,e.widget||null,!1)}static replace(e){let t=!!e.block,n,r;if(e.isBlockGap)n=-5e8,r=4e8;else{let{start:i,end:a}=Bn(e,t);n=(i?t?-3e8:-1:5e8)-1,r=(a?t?2e8:1:-6e8)+1}return new zn(e,n,r,t,e.widget||null,!0)}static line(e){return new Rn(e)}static set(e,t=!1){return k.of(e,t)}hasHeight(){return this.widget?this.widget.estimatedHeight>-1:!1}};N.none=k.empty;var Ln=class e extends N{constructor(e){let{start:t,end:n}=Bn(e);super(t?-1:5e8,n?1:-6e8,null,e),this.tagName=e.tagName||`span`,this.attrs=e.class&&e.attributes?An(e.attributes,{class:e.class}):e.class?{class:e.class}:e.attributes||jn}eq(t){return this==t||t instanceof e&&this.tagName==t.tagName&&Mn(this.attrs,t.attrs)}range(e,t=e){if(e>=t)throw RangeError(`Mark decorations may not be empty`);return super.range(e,t)}};Ln.prototype.point=!1;var Rn=class e extends N{constructor(e){super(-2e8,-2e8,null,e)}eq(t){return t instanceof e&&this.spec.class==t.spec.class&&Mn(this.spec.attributes,t.spec.attributes)}range(e,t=e){if(t!=e)throw RangeError(`Line decoration ranges must be zero-length`);return super.range(e,t)}};Rn.prototype.mapMode=ze.TrackBefore,Rn.prototype.point=!0;var zn=class e extends N{constructor(e,t,n,r,i,a){super(t,n,i,e),this.block=r,this.isReplace=a,this.mapMode=r?t<=0?ze.TrackBefore:ze.TrackAfter:ze.TrackDel}get type(){return this.startSide==this.endSide?this.startSide<=0?M.WidgetBefore:M.WidgetAfter:M.WidgetRange}get heightRelevant(){return this.block||!!this.widget&&(this.widget.estimatedHeight>=5||this.widget.lineBreaks>0)}eq(t){return t instanceof e&&Vn(this.widget,t.widget)&&this.block==t.block&&this.startSide==t.startSide&&this.endSide==t.endSide}range(e,t=e){if(this.isReplace&&(e>t||e==t&&this.startSide>0&&this.endSide<=0))throw RangeError(`Invalid range for replacement decoration`);if(!this.isReplace&&t!=e)throw RangeError(`Widget decorations can only have zero-length ranges`);return super.range(e,t)}};zn.prototype.point=!0;function Bn(e,t=!1){let{inclusiveStart:n,inclusiveEnd:r}=e;return n??(n=e.inclusive),r??(r=e.inclusive),{start:n??t,end:r??t}}function Vn(e,t){return e==t||!!(e&&t&&e.compare(t))}function Hn(e,t,n,r=0){let i=n.length-1;i>=0&&n[i]+r>=e?n[i]=Math.max(n[i],t):n.push(e,t)}var Un=class e extends Lt{constructor(e,t,n){super(),this.tagName=e,this.attributes=t,this.rank=n}eq(t){return t==this||t instanceof e&&this.tagName==t.tagName&&Mn(this.attributes,t.attributes)}static create(t){return new e(t.tagName,t.attributes||jn,t.rank==null?50:Math.max(0,Math.min(t.rank,100)))}static set(e,t=!1){return k.of(e,t)}};Un.prototype.startSide=Un.prototype.endSide=-1;var P=e=>e.nodeType==1,Wn=e=>e.nodeType==3;function Gn(e){let t;return t=e.nodeType==11?e.getSelection?e:e.ownerDocument:e,t.getSelection()}function Kn(e,t){return t?e==t||e.contains(t.nodeType==1?t:t.parentNode):!1}function qn(e,t){if(!t.anchorNode)return!1;try{return Kn(e,t.anchorNode)}catch{return!1}}function Jn(e){return Wn(e)?dr(e,0,e.nodeValue.length).getClientRects():P(e)?e.getClientRects():[]}function Yn(e,t,n,r){return n?Qn(e,t,n,r,-1)||Qn(e,t,n,r,1):!1}function Xn(e){for(var t=0;;t++)if(e=e.previousSibling,!e)return t}function Zn(e){return P(e)&&/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(e.nodeName)}function Qn(e,t,n,r,i){for(;;){if(e==n&&t==r)return!0;if(t==(i<0?0:$n(e))){if(e.nodeName==`DIV`)return!1;let n=e.parentNode;if(!n||!P(n))return!1;t=Xn(e)+(i<0?0:1),e=n}else if(P(e)){if(e=e.childNodes[t+(i<0?-1:0)],P(e)&&(e.nodeName==`IMG`||e.nodeName==`BR`||e.contentEditable==`false`))return!1;t=i<0?$n(e):0}else return!1}}function $n(e){return Wn(e)?e.nodeValue.length:e.childNodes.length}function er(e,t){let{left:n,right:r}=e;if(n==r)return e;let i=t?n:r;return{left:i,right:i,top:e.top,bottom:e.bottom}}function tr(e){let t=e.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.innerWidth,top:0,bottom:e.innerHeight}}function nr(e,t){let n=t.width/e.offsetWidth,r=t.height/e.offsetHeight;return(n>.995&&n<1.005||!isFinite(n)||Math.abs(t.width-e.offsetWidth)<1)&&(n=1),(r>.995&&r<1.005||!isFinite(r)||Math.abs(t.height-e.offsetHeight)<1)&&(r=1),{scaleX:n,scaleY:r}}function rr(e,t,n,r,i,a,o,s){let c=e.ownerDocument,l=c.defaultView||window;for(let u=e,d=!1;u&&!d;)if(P(u)){let e,f=u==c.body,p=1,m=1;if(f)e=tr(l);else{if(/^(fixed|sticky)$/.test(getComputedStyle(u).position)&&(d=!0),u.scrollHeight<=u.clientHeight&&u.scrollWidth<=u.clientWidth){u=u.assignedSlot||u.parentNode;continue}let t=u.getBoundingClientRect();({scaleX:p,scaleY:m}=nr(u,t)),e={left:t.left,right:t.left+u.clientWidth*p,top:t.top,bottom:t.top+u.clientHeight*m}}let h=0,g=0;if(i==`nearest`)t.top<e.top+o?(g=t.top-(e.top+o),n>0&&t.bottom>e.bottom+g&&(g=t.bottom-e.bottom+o)):t.bottom>e.bottom-o&&(g=t.bottom-e.bottom+o,n<0&&t.top-g<e.top&&(g=t.top-(e.top+o)));else{let r=t.bottom-t.top,a=e.bottom-e.top;g=(i==`center`&&r<=a?t.top+r/2-a/2:i==`start`||i==`center`&&n<0?t.top-o:t.bottom-a+o)-e.top}if(r==`nearest`?t.left<e.left+a?(h=t.left-(e.left+a),n>0&&t.right>e.right+h&&(h=t.right-e.right+a)):t.right>e.right-a&&(h=t.right-e.right+a,n<0&&t.left<e.left+h&&(h=t.left-(e.left+a))):h=(r==`center`?t.left+(t.right-t.left)/2-(e.right-e.left)/2:r==`start`==s?t.left-a:t.right-(e.right-e.left)+a)-e.left,h||g){if(f)l.scrollBy(h,g);else{let e=0,n=0;if(g){let e=u.scrollTop;u.scrollTop+=g/m,n=(u.scrollTop-e)*m}if(h){let t=u.scrollLeft;u.scrollLeft+=h/p,e=(u.scrollLeft-t)*p}t={left:t.left-e,top:t.top-n,right:t.right-e,bottom:t.bottom-n},e&&Math.abs(e-h)<1&&(r=`nearest`),n&&Math.abs(n-g)<1&&(i=`nearest`)}}if(f)break;(t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)&&(t={left:Math.max(t.left,e.left),right:Math.min(t.right,e.right),top:Math.max(t.top,e.top),bottom:Math.min(t.bottom,e.bottom)}),u=u.assignedSlot||u.parentNode}else if(u.nodeType==11)u=u.host;else break}function ir(e,t=!0){let n=e.ownerDocument,r=null,i=null;for(let a=e.parentNode;a&&!(a==n.body||(!t||r)&&i);)if(P(a))!i&&a.scrollHeight>a.clientHeight&&(i=a),t&&!r&&a.scrollWidth>a.clientWidth&&(r=a),a=a.assignedSlot||a.parentNode;else if(a.nodeType==11)a=a.host;else break;return{x:r,y:i}}var ar=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}eq(e){return this.anchorNode==e.anchorNode&&this.anchorOffset==e.anchorOffset&&this.focusNode==e.focusNode&&this.focusOffset==e.focusOffset}setRange(e){let{anchorNode:t,focusNode:n}=e;this.set(t,Math.min(e.anchorOffset,t?$n(t):0),n,Math.min(e.focusOffset,n?$n(n):0))}set(e,t,n,r){this.anchorNode=e,this.anchorOffset=t,this.focusNode=n,this.focusOffset=r}};function or(e){let t=[];for(let n=e;n;n=n.nodeType==11?n.host:n.parentNode)P(n)&&t.push({node:n,left:n.scrollLeft,top:n.scrollTop});return t}function sr(e,t=!0){for(let{node:n,left:r,top:i}of e)t&&n.scrollTop!=i&&(n.scrollTop=i),n.scrollLeft!=r&&(n.scrollLeft=r)}var cr=null;j.safari&&j.safari_version>=26&&(cr=!1);function lr(e){if(e.setActive)return e.setActive();if(cr)return e.focus(cr);let t=or(e);e.focus(cr==null?{get preventScroll(){return cr={preventScroll:!0},!0}}:void 0),cr||(cr=!1,sr(t))}var ur;function dr(e,t,n=t){let r=ur||(ur=document.createRange());return r.setEnd(e,n),r.setStart(e,t),r}function fr(e,t,n,r){let i={key:t,code:t,keyCode:n,which:n,cancelable:!0};r&&({altKey:i.altKey,ctrlKey:i.ctrlKey,shiftKey:i.shiftKey,metaKey:i.metaKey}=r);let a=new KeyboardEvent(`keydown`,i);a.synthetic=!0,e.dispatchEvent(a);let o=new KeyboardEvent(`keyup`,i);return o.synthetic=!0,e.dispatchEvent(o),a.defaultPrevented||o.defaultPrevented}function pr(e){for(;e;){if(e&&(e.nodeType==9||e.nodeType==11&&e.host))return e;e=e.assignedSlot||e.parentNode}return null}function mr(e,t){let n=t.focusNode,r=t.focusOffset;if(!n||t.anchorNode!=n||t.anchorOffset!=r)return!1;for(r=Math.min(r,$n(n));;)if(r){if(!P(n))return!1;let e=n.childNodes[r-1];e.contentEditable==`false`?r--:(n=e,r=$n(n))}else if(n==e)return!0;else r=Xn(n),n=n.parentNode}function hr(e){return e instanceof Window?e.pageYOffset>Math.max(0,e.document.documentElement.scrollHeight-e.innerHeight-4):e.scrollTop>Math.max(1,e.scrollHeight-e.clientHeight-4)}function gr(e,t){for(let n=e,r=t;;)if(Wn(n)&&r>0)return{node:n,offset:r};else if(P(n)&&r>0){if(n.contentEditable==`false`)return null;n=n.childNodes[r-1],r=$n(n)}else if(n.parentNode&&!Zn(n))r=Xn(n),n=n.parentNode;else return null}function _r(e,t){for(let n=e,r=t;;)if(Wn(n)&&r<n.nodeValue.length)return{node:n,offset:r};else if(P(n)&&r<n.childNodes.length){if(n.contentEditable==`false`)return null;n=n.childNodes[r],r=0}else if(n.parentNode&&!Zn(n))r=Xn(n)+1,n=n.parentNode;else return null}var vr=class e{constructor(e,t,n=!0){this.node=e,this.offset=t,this.precise=n}static before(t,n){return new e(t.parentNode,Xn(t),n)}static after(t,n){return new e(t.parentNode,Xn(t)+1,n)}},F=(function(e){return e[e.LTR=0]=`LTR`,e[e.RTL=1]=`RTL`,e})(F||(F={})),yr=F.LTR,br=F.RTL;function xr(e){let t=[];for(let n=0;n<e.length;n++)t.push(1<<e[n]);return t}var Sr=xr(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`),Cr=xr(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`),wr=Object.create(null),Tr=[];for(let e of[`()`,`[]`,`{}`]){let t=e.charCodeAt(0),n=e.charCodeAt(1);wr[t]=n,wr[n]=-t}function Er(e){return e<=247?Sr[e]:1424<=e&&e<=1524?2:1536<=e&&e<=1785?Cr[e-1536]:1774<=e&&e<=2220?4:8192<=e&&e<=8204?256:64336<=e&&e<=65023?4:1}var Dr=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/,Or=class{get dir(){return this.level%2?br:yr}constructor(e,t,n){this.from=e,this.to=t,this.level=n}side(e,t){return this.dir==t==e?this.to:this.from}forward(e,t){return e==(this.dir==t)}static find(e,t,n,r){let i=-1;for(let a=0;a<e.length;a++){let o=e[a];if(o.from<=t&&o.to>=t){if(o.level==n)return a;(i<0||(r==0?e[i].level>o.level:r<0?o.from<t:o.to>t))&&(i=a)}}if(i<0)throw RangeError(`Index out of range`);return i}};function kr(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.direction!=i.direction||!kr(r.inner,i.inner))return!1}return!0}var I=[];function Ar(e,t,n,r,i){for(let a=0;a<=r.length;a++){let o=a?r[a-1].to:t,s=a<r.length?r[a].from:n,c=a?256:i;for(let t=o,n=c,r=c;t<s;t++){let i=Er(e.charCodeAt(t));i==512?i=n:i==8&&r==4&&(i=16),I[t]=i==4?2:i,i&7&&(r=i),n=i}for(let e=o,t=c,r=c;e<s;e++){let i=I[e];if(i==128)e<s-1&&t==I[e+1]&&t&24?i=I[e]=t:I[e]=256;else if(i==64){let i=e+1;for(;i<s&&I[i]==64;)i++;let a=e&&t==8||i<n&&I[i]==8?r==1?1:8:256;for(let t=e;t<i;t++)I[t]=a;e=i-1}else i==8&&r==1&&(I[e]=1);t=i,i&7&&(r=i)}}}function jr(e,t,n,r,i){let a=i==1?2:1;for(let o=0,s=0,c=0;o<=r.length;o++){let l=o?r[o-1].to:t,u=o<r.length?r[o].from:n;for(let t=l,n,r,o;t<u;t++)if(r=wr[n=e.charCodeAt(t)]){if(r<0){for(let e=s-3;e>=0;e-=3)if(Tr[e+1]==-r){let n=Tr[e+2],r=n&2?i:n&4?n&1?a:i:0;r&&(I[t]=I[Tr[e]]=r),s=e;break}}else if(Tr.length==189)break;else Tr[s++]=t,Tr[s++]=n,Tr[s++]=c}else if((o=I[t])==2||o==1){let e=o==i;c=+!e;for(let t=s-3;t>=0;t-=3){let n=Tr[t+2];if(n&2)break;if(e)Tr[t+2]|=2;else{if(n&4)break;Tr[t+2]|=4}}}}}function Mr(e,t,n,r){for(let i=0,a=r;i<=n.length;i++){let o=i?n[i-1].to:e,s=i<n.length?n[i].from:t;for(let c=o;c<s;){let o=I[c];if(o==256){let o=c+1;for(;;)if(o==s){if(i==n.length)break;o=n[i++].to,s=i<n.length?n[i].from:t}else if(I[o]==256)o++;else break;let l=a==1,u=l==((o<t?I[o]:r)==1)?l?1:2:r;for(let t=o,r=i,a=r?n[r-1].to:e;t>c;)t==a&&(t=n[--r].from,a=r?n[r-1].to:e),I[--t]=u;c=o}else a=o,c++}}}function Nr(e,t,n,r,i,a,o){let s=r%2?2:1;if(r%2==i%2)for(let c=t,l=0;c<n;){let t=!0,u=!1;if(l==a.length||c<a[l].from){let e=I[c];e!=s&&(t=!1,u=e==16)}let d=!t&&s==1?[]:null,f=t?r:r+1,p=c;run:for(;;)if(l<a.length&&p==a[l].from){if(u)break run;let m=a[l];if(!t)for(let e=m.to,t=l+1;;){if(e==n)break run;if(t<a.length&&a[t].from==e)e=a[t++].to;else if(I[e]==s)break run;else break}l++,d?d.push(m):(m.from>c&&o.push(new Or(c,m.from,f)),Pr(e,m.direction==yr==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.to),p=m.to}else if(p==n||(t?I[p]!=s:I[p]==s))break;else p++;d?Nr(e,c,p,r+1,i,d,o):c<p&&o.push(new Or(c,p,f)),c=p}else for(let c=n,l=a.length;c>t;){let n=!0,u=!1;if(!l||c>a[l-1].to){let e=I[c-1];e!=s&&(n=!1,u=e==16)}let d=!n&&s==1?[]:null,f=n?r:r+1,p=c;run:for(;;)if(l&&p==a[l-1].to){if(u)break run;let m=a[--l];if(!n)for(let e=m.from,n=l;;){if(e==t)break run;if(n&&a[n-1].to==e)e=a[--n].from;else if(I[e-1]==s)break run;else break}d?d.push(m):(m.to<c&&o.push(new Or(m.to,c,f)),Pr(e,m.direction==yr==!(f%2)?r:r+1,i,m.inner,m.from,m.to,o),c=m.from),p=m.from}else if(p==t||(n?I[p-1]!=s:I[p-1]==s))break;else p--;d?Nr(e,p,c,r+1,i,d,o):p<c&&o.push(new Or(p,c,f)),c=p}}function Pr(e,t,n,r,i,a,o){let s=t%2?2:1;Ar(e,i,a,r,s),jr(e,i,a,r,s),Mr(i,a,r,s),Nr(e,i,a,t,n,r,o)}function Fr(e,t,n){if(!e)return[new Or(0,0,+(t==br))];if(t==yr&&!n.length&&!Dr.test(e))return Ir(e.length);if(n.length)for(;e.length>I.length;)I[I.length]=256;let r=[],i=t==yr?0:1;return Pr(e,i,i,n,0,e.length,r),r}function Ir(e){return[new Or(0,e,0)]}var Lr=``;function Rr(e,t,n,r,i){if(!e.length)return null;let a=r.head-e.from,o;if(r.head==e.from&&r.assoc<0){if(!i)return null;a=t[o=0].side(!1,n)}else if(r.head==e.to&&r.assoc>0){if(i)return null;a=t[o=t.length-1].side(!0,n)}else o=Or.find(t,a,r.bidiLevel??-1,r.assoc);let s=t[o],c=s.side(i,n);if(a==c){let e=o+=i?1:-1;if(e<0||e>=t.length)return null;s=t[o=e],a=s.side(!i,n),c=s.side(i,n)}let l=S(e.text,a,s.forward(i,n));(l<s.from||l>s.to)&&(l=c),Lr=e.text.slice(Math.min(a,l),Math.max(a,l));let u=o==(i?t.length-1:0)?null:t[o+(i?1:-1)];if(l==c){if(!u)return i?w.cursor(e.to,1):w.cursor(e.from,-1);if(u.level+ +!i<s.level)return w.cursor(u.side(!i,n)+e.from,u.forward(i,n)?1:-1,u.level)}return w.cursor(l+e.from,s.forward(i,n)?-1:1,s.level)}function zr(e,t,n){for(let r=t;r<n;r++){let t=Er(e.charCodeAt(r));if(t==1)return yr;if(t==2||t==4)return br}return yr}var Br=T.define(),Vr=T.define(),Hr=T.define(),Ur=T.define(),Wr=T.define(),Gr=T.define(),Kr=T.define(),qr=T.define(),Jr=T.define(),Yr=T.define({combine:e=>e.some(e=>e)}),Xr=T.define({combine:e=>e.some(e=>e)}),Zr=T.define(),Qr=class e{constructor(e,t,n,r,i,a=!1){this.range=e,this.y=t,this.x=n,this.yMargin=r,this.xMargin=i,this.isSnapshot=a}map(t){return t.empty?this:new e(this.range.map(t),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}clip(t){return this.range.to<=t.doc.length?this:new e(w.cursor(t.doc.length),this.y,this.x,this.yMargin,this.xMargin,this.isSnapshot)}},$r=E.define({map:(e,t)=>e.map(t)}),ei=E.define();function ti(e,t,n){let r=e.facet(Ur);r.length?r[0](t):window.onerror&&window.onerror(String(t),n,void 0,void 0,t)||(n?console.error(n+`:`,t):console.error(t))}var ni=T.define({combine:e=>!e.length||e[0]}),ri=0,ii=T.define({combine(e){return e.filter((t,n)=>{for(let r=0;r<n;r++)if(e[r].plugin==t.plugin)return!1;return!0})}}),L=class e{constructor(e,t,n,r,i){this.id=e,this.create=t,this.domEventHandlers=n,this.domEventObservers=r,this.baseExtensions=i(this),this.extension=this.baseExtensions.concat(ii.of({plugin:this,arg:void 0}))}of(e){return this.baseExtensions.concat(ii.of({plugin:this,arg:e}))}static define(t,n){let{eventHandlers:r,eventObservers:i,provide:a,decorations:o}=n||{};return new e(ri++,t,r,i,e=>{let t=[];return o&&t.push(ci.of(t=>{let n=t.plugin(e);return n?o(n):N.none})),a&&t.push(a(e)),t})}static fromClass(t,n){return e.define((e,n)=>new t(e,n),n)}},ai=class{constructor(e){this.spec=e,this.mustUpdate=null,this.value=null}get plugin(){return this.spec&&this.spec.plugin}update(e){if(!this.value){if(this.spec)try{this.value=this.spec.plugin.create(e,this.spec.arg)}catch(t){ti(e.state,t,`CodeMirror plugin crashed`),this.deactivate()}}else if(this.mustUpdate){let e=this.mustUpdate;if(this.mustUpdate=null,this.value.update)try{this.value.update(e)}catch(t){if(ti(e.state,t,`CodeMirror plugin crashed`),this.value.destroy)try{this.value.destroy()}catch{}this.deactivate()}}return this}destroy(e){if(this.value?.destroy)try{this.value.destroy()}catch(t){ti(e.state,t,`CodeMirror plugin crashed`)}}deactivate(){this.spec=this.value=null}},oi=T.define(),si=T.define(),ci=T.define(),li=T.define(),ui=T.define(),di=T.define(),fi=T.define();function pi(e,t){let n=e.state.facet(fi);if(!n.length)return n;let r=n.map(t=>t instanceof Function?t(e):t),i=[];return k.spans(r,t.from,t.to,{point(){},span(e,n,r,a){let o=e-t.from,s=n-t.from,c=i;for(let e=r.length-1;e>=0;e--,a--){let n=r[e].spec.bidiIsolate,i;if(n??(n=zr(t.text,o,s)),a>0&&c.length&&(i=c[c.length-1]).to==o&&i.direction==n)i.to=s,c=i.inner;else{let e={from:o,to:s,direction:n,inner:[]};c.push(e),c=e.inner}}}}),i}var mi=T.define();function hi(e){let t=0,n=0,r=0,i=0;for(let a of e.state.facet(mi)){let o=a(e);o&&(o.left!=null&&(t=Math.max(t,o.left)),o.right!=null&&(n=Math.max(n,o.right)),o.top!=null&&(r=Math.max(r,o.top)),o.bottom!=null&&(i=Math.max(i,o.bottom)))}return{left:t,right:n,top:r,bottom:i}}var gi=T.define(),_i=class e{constructor(e,t,n,r){this.fromA=e,this.toA=t,this.fromB=n,this.toB=r}join(t){return new e(Math.min(this.fromA,t.fromA),Math.max(this.toA,t.toA),Math.min(this.fromB,t.fromB),Math.max(this.toB,t.toB))}addToSet(e){let t=e.length,n=this;for(;t>0;t--){let r=e[t-1];if(!(r.fromA>n.toA)){if(r.toA<n.fromA)break;n=n.join(r),e.splice(t-1,1)}}return e.splice(t,0,n),e}static extendWithRanges(t,n){if(n.length==0)return t;let r=[];for(let i=0,a=0,o=0;;){let s=i<t.length?t[i].fromB:1e9,c=a<n.length?n[a]:1e9,l=Math.min(s,c);if(l==1e9)break;let u=l+o,d=l,f=u;for(;;)if(a<n.length&&n[a]<=d){let e=n[a+1];a+=2,d=Math.max(d,e);for(let e=i;e<t.length&&t[e].fromB<=d;e++)o=t[e].toA-t[e].toB;f=Math.max(f,e+o)}else if(i<t.length&&t[i].fromB<=d){let e=t[i++];d=Math.max(d,e.toB),f=Math.max(f,e.toA),o=e.toA-e.toB}else break;r.push(new e(u,f,l,d))}return r}},vi=class e{constructor(e,t,n){this.view=e,this.state=t,this.transactions=n,this.flags=0,this.startState=e.state,this.changes=Ve.empty(this.startState.doc.length);for(let e of n)this.changes=this.changes.compose(e.changes);let r=[];this.changes.iterChangedRanges((e,t,n,i)=>r.push(new _i(e,t,n,i))),this.changedRanges=r}static create(t,n,r){return new e(t,n,r)}get viewportChanged(){return(this.flags&4)>0}get viewportMoved(){return(this.flags&8)>0}get heightChanged(){return(this.flags&2)>0}get geometryChanged(){return this.docChanged||(this.flags&18)>0}get focusChanged(){return(this.flags&1)>0}get docChanged(){return!this.changes.empty}get selectionSet(){return this.transactions.some(e=>e.selection)}get empty(){return this.flags==0&&this.transactions.length==0}},yi=[],R=class{constructor(e,t,n=0){this.dom=e,this.length=t,this.flags=n,this.parent=null,e.cmTile=this}get breakAfter(){return this.flags&1}get children(){return yi}isWidget(){return!1}get isHidden(){return!1}isComposite(){return!1}isLine(){return!1}isText(){return!1}isBlock(){return!1}get domAttrs(){return null}sync(e){if(this.flags|=2,this.flags&4){this.flags&=-5;let e=this.domAttrs;e&&Nn(this.dom,e)}}toString(){return this.constructor.name+(this.children.length?`(${this.children})`:``)+(this.breakAfter?`#`:``)}destroy(){this.parent=null}setDOM(e){this.dom=e,e.cmTile=this}get posAtStart(){return this.parent?this.parent.posBefore(this):0}get posAtEnd(){return this.posAtStart+this.length}posBefore(e,t=this.posAtStart){let n=t;for(let t of this.children){if(t==e)return n;n+=t.length+t.breakAfter}throw RangeError(`Invalid child in posBefore`)}posAfter(e){return this.posBefore(e)+e.length}covers(e){return!0}coordsIn(e,t,n){return null}domPosFor(e,t){let n=Xn(this.dom),r=this.length?e>0:t>0;return new vr(this.parent.dom,n+ +!!r,e==0||e==this.length)}markDirty(e){this.flags&=-3,e&&(this.flags|=4),this.parent&&this.parent.flags&2&&this.parent.markDirty(!1)}get overrideDOMText(){return null}get root(){for(let e=this;e;e=e.parent)if(e instanceof Si)return e;return null}static get(e){return e.cmTile}},bi=class extends R{constructor(e){super(e,0),this._children=[]}isComposite(){return!0}get children(){return this._children}get lastChild(){return this.children.length?this.children[this.children.length-1]:null}append(e){this.children.push(e),e.parent=this}sync(e){if(this.flags&2)return;super.sync(e);let t=this.dom,n=null,r,i=e?.node==t?e:null,a=0;for(let o of this.children){if(o.sync(e),a+=o.length+o.breakAfter,r=n?n.nextSibling:t.firstChild,i&&r!=o.dom&&(i.written=!0),o.dom.parentNode==t)for(;r&&r!=o.dom;)r=xi(r);else t.insertBefore(o.dom,r);n=o.dom}for(r=n?n.nextSibling:t.firstChild,i&&r&&(i.written=!0);r;)r=xi(r);this.length=a}};function xi(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}var Si=class extends bi{constructor(e,t){super(t),this.view=e}owns(e){for(;e;e=e.parent)if(e==this)return!0;return!1}isBlock(){return!0}nearest(e){for(;;){if(!e)return null;let t=R.get(e);if(t&&this.owns(t))return t;e=e.parentNode}}blockTiles(e){for(let t=[],n=this,r=0,i=0;;)if(r==n.children.length){if(!t.length)return;n=n.parent,n.breakAfter&&i++,r=t.pop()}else{let a=n.children[r++];if(a instanceof Ci)t.push(r),n=a,r=0;else{let t=i+a.length,n=e(a,i);if(n!==void 0)return n;i=t+a.breakAfter}}}resolveBlock(e,t){let n,r=-1,i,a=-1;if(this.blockTiles((o,s)=>{let c=s+o.length;if(e>=s&&e<=c){if(o.isWidget()&&t>=-1&&t<=1){if(o.flags&32)return!0;o.flags&16&&(n=void 0)}(s<e||e==c&&(t<-1?o.length:o.covers(1)))&&(!n||!o.isWidget()&&n.isWidget())&&(n=o,r=e-s),(c>e||e==s&&(t>1?o.length:o.covers(-1)))&&(!i||!o.isWidget()&&i.isWidget())&&(i=o,a=e-s)}}),!n&&!i)throw Error(`No tile at position `+e);return n&&t<0||!i?{tile:n,offset:r}:{tile:i,offset:a}}},Ci=class e extends bi{constructor(e,t){super(e),this.wrapper=t}isBlock(){return!0}covers(e){return this.children.length?e<0?this.children[0].covers(-1):this.lastChild.covers(1):!1}get domAttrs(){return this.wrapper.attributes}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},wi=class e extends bi{constructor(e,t){super(e),this.attrs=t}isLine(){return!0}static start(t,n,r){let i=new e(n||document.createElement(`div`),t);return(!n||!r)&&(i.flags|=4),i}get domAttrs(){return this.attrs}resolveInline(e,t,n=!1){let r=null,i=-1,a=null,o=-1;function s(e,c){for(let l=0,u=0;l<e.children.length&&u<=c;l++){let d=e.children[l],f=u+d.length;f>=c&&(d.isComposite()?s(d,c-u):(!a||n&&a.isHidden&&(t>0&&!(a.flags&32)||n&&Ei(a,d)))&&(f>c||d.flags&32&&t<=1)?(a=d,o=c-u):(u<c||d.flags&16&&!(n&&d.isHidden)&&t>=-1)&&(r=d,i=c-u)),u=f}}s(this,e);let c=(t<0?r:a)||r||a;return c?{tile:c,offset:c==r?i:o}:null}coordsIn(e,t,n){let r=this.resolveInline(e,t,!0);return r?r.tile.coordsIn(Math.max(0,r.offset),t,n):Ti(this)}domIn(e,t){let n=this.resolveInline(e,t);if(n){let{tile:e,offset:r}=n;if(this.dom.contains(e.dom))return e.isText()?new vr(e.dom,Math.min(e.dom.nodeValue.length,r)):e.domPosFor(r,e.flags&16?1:e.flags&32?-1:t);let i=n.tile.parent,a=!1;for(let e of i.children){if(a)return new vr(e.dom,0);e==n.tile&&(a=!0)}}return new vr(this.dom,0)}};function Ti(e){let t=e.dom.lastChild;if(!t)return e.dom.getBoundingClientRect();let n=Jn(t);return n[n.length-1]||null}function Ei(e,t){let n=e.coordsIn(0,1),r=t.coordsIn(0,1);return n&&r&&r.top<n.bottom}var Di=class e extends bi{constructor(e,t){super(e),this.mark=t}get domAttrs(){return this.mark.attrs}static of(t,n){let r=new e(n||document.createElement(t.tagName),t);return n||(r.flags|=4),r}},Oi=class e extends R{constructor(e,t){super(e,t.length),this.text=t}sync(e){this.flags&2||(super.sync(e),this.dom.nodeValue!=this.text&&(e&&e.node==this.dom&&(e.written=!0),this.dom.nodeValue=this.text))}isText(){return!0}toString(){return JSON.stringify(this.text)}coordsIn(e,t,n){let r=this.dom.nodeValue.length;e>r&&(e=r);let i=e,a=e,o=0;e==0&&t<0||e==r&&t>=0?j.chrome||j.gecko||(e?(i--,o=1):a<r&&(a++,o=-1)):t<0?i--:a<r&&a++;let s=dr(this.dom,i,a).getClientRects();if(!s.length)return null;let c=s[(o?o<0:t>=0)?0:s.length-1];return j.safari&&!o&&c.width==0&&(c=Array.prototype.find.call(s,e=>e.width)||c),n==null?c:er(c,(o?o>0:t<0)==n)}static of(t,n){let r=new e(n||document.createTextNode(t),t);return n||(r.flags|=2),r}},ki=class e extends R{constructor(e,t,n,r){super(e,t,r),this.widget=n}isWidget(){return!0}get isHidden(){return this.widget.isHidden}covers(e){return this.flags&48?!1:(this.flags&(e<0?64:128))>0}coordsIn(e,t){return this.coordsInWidget(e,t,!1)}coordsInWidget(e,t,n){let r=this.widget.coordsAt(this.dom,e,t);if(r)return r;if(n)return er(this.dom.getBoundingClientRect(),this.length?e==0:t<=0);{let t=this.dom.getClientRects(),n=null;if(!t.length)return null;let r=this.flags&16?!0:this.flags&32?!1:e>0;for(let i=r?t.length-1:0;n=t[i],!(e>0?i==0:i==t.length-1||n.top<n.bottom);i+=r?-1:1);return er(n,!r)}}get overrideDOMText(){if(!this.length)return x.empty;let{root:e}=this;if(!e)return x.empty;let t=this.posAtStart;return e.view.state.doc.slice(t,t+this.length)}destroy(){super.destroy(),this.widget.destroy(this.dom)}static of(t,n,r,i,a){return a||(a=t.toDOM(n),t.editable||(a.contentEditable=`false`)),new e(a,r,t,i)}},Ai=class extends R{constructor(e){let t=document.createElement(`img`);t.className=`cm-widgetBuffer`,t.setAttribute(`aria-hidden`,`true`),super(t,0,e)}get isHidden(){return!0}get overrideDOMText(){return x.empty}coordsIn(e,t,n){let r=this.dom.getBoundingClientRect();return n==null?r:er(r,t>0==n)}},ji=class{constructor(e){this.index=0,this.beforeBreak=!1,this.parents=[],this.tile=e}advance(e,t,n){let{tile:r,index:i,beforeBreak:a,parents:o}=this;for(;e||t>0;)if(!r.isComposite()){let t=r.length;if(i<t&&e){let a=Math.min(e,t-i);n&&n.skip(r,i,i+a),e-=a,i+=a}if(i==t)a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++;else if(!e)break}else if(a){if(!e)break;n&&n.break(),e--,a=!1}else if(i==r.children.length){if(!e&&!o.length)break;n&&n.leave(r),a=!!r.breakAfter,{tile:r,index:i}=o.pop(),i++}else{let s=r.children[i],c=s.breakAfter;(t>0?s.length<=e:s.length<e)&&(!n||n.skip(s,0,s.length)!==!1||!s.isComposite)?(a=!!c,i++,e-=s.length):(o.push({tile:r,index:i}),r=s,i=0,n&&s.isComposite()&&n.enter(s))}return this.tile=r,this.index=i,this.beforeBreak=a,this}get root(){return this.parents.length?this.parents[0].tile:this.tile}},Mi=class{constructor(e,t,n,r){this.from=e,this.to=t,this.wrapper=n,this.rank=r}},Ni=class{constructor(e,t,n){this.cache=e,this.root=t,this.blockWrappers=n,this.curLine=null,this.lastBlock=null,this.afterWidget=null,this.pos=0,this.wrappers=[],this.wrapperPos=0}addText(e,t,n,r){this.flushBuffer();let i=this.ensureMarks(t,n),a=i.lastChild;if(a&&a.isText()&&!(a.flags&8)&&a.length+e.length<512){this.cache.reused.set(a,2);let t=i.children[i.children.length-1]=new Oi(a.dom,a.text+e);t.parent=i}else i.append(r||Oi.of(e,this.cache.find(Oi)?.dom));this.pos+=e.length,this.afterWidget=null}addComposition(e,t){let n=this.curLine;n.dom!=t.line.dom&&(n.setDOM(this.cache.reused.has(t.line)?Ui(t.line.dom):t.line.dom),this.cache.reused.set(t.line,2));let r=n;for(let e=t.marks.length-1;e>=0;e--){let n=t.marks[e],i=r.lastChild;if(i instanceof Di&&i.mark.eq(n.mark))i.dom!=n.dom&&i.setDOM(Ui(n.dom)),r=i;else{let{dom:e}=n;this.cache.reused.get(n)&&R.get(n.dom)&&(e=Ui(n.dom));let t=Di.of(n.mark,e);r.append(t),r=t}this.cache.reused.set(n,2)}let i=R.get(e.text);i&&this.cache.reused.set(i,2);let a=new Oi(e.text,e.text.nodeValue);a.flags|=8,this.pos=e.range.toB,r.append(a)}addInlineWidget(e,t,n){let r=this.afterWidget&&e.flags&48&&(this.afterWidget.flags&48)==(e.flags&48);r||this.flushBuffer();let i=this.ensureMarks(t,n);!r&&!(e.flags&16)&&i.append(this.getBuffer(1)),i.append(e),this.pos+=e.length,this.afterWidget=e}addMark(e,t,n){this.flushBuffer(),this.ensureMarks(t,n).append(e),this.pos+=e.length,this.afterWidget=null}addBlockWidget(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}continueWidget(e){let t=this.afterWidget||this.lastBlock;t.length+=e,this.pos+=e}addLineStart(e,t){e||(e=Bi);let n=wi.start(e,t||this.cache.find(wi)?.dom,!!t);this.getBlockPos().append(this.lastBlock=this.curLine=n)}addLine(e){this.getBlockPos().append(e),this.pos+=e.length,this.lastBlock=e,this.endLine()}addBreak(){this.lastBlock.flags|=1,this.endLine(),this.pos++}addLineStartIfNotCovered(e){this.blockPosCovered()||this.addLineStart(e)}ensureLine(e){this.curLine||this.addLineStart(e)}ensureMarks(e,t){let n=this.curLine;for(let r=e.length-1;r>=0;r--){let i=e[r],a;if(t>0&&(a=n.lastChild)&&a instanceof Di&&a.mark.eq(i))n=a,t--;else{let e=Di.of(i,this.cache.find(Di,e=>e.mark.eq(i))?.dom);n.append(e),n=e,t=0}}return n}endLine(){if(this.curLine){this.flushBuffer();let e=this.curLine.lastChild;(!e||!Ri(this.curLine,!1)||e.dom.nodeName!=`BR`&&e.isWidget()&&!(j.ios&&Ri(this.curLine,!0)))&&this.curLine.append(this.cache.findWidget(Gi,0,32)||new ki(Gi.toDOM(),0,Gi,32)),this.curLine=this.afterWidget=null}}updateBlockWrappers(){this.wrapperPos>this.pos+1e4&&(this.blockWrappers.goto(this.pos),this.wrappers.length=0);for(let e=this.wrappers.length-1;e>=0;e--)this.wrappers[e].to<this.pos&&this.wrappers.splice(e,1);for(let e=this.blockWrappers;e.value&&e.from<=this.pos;e.next())if(e.to>=this.pos){let t=e.rank*102+e.value.rank,n=new Mi(e.from,e.to,e.value,t),r=this.wrappers.length;for(;r>0&&(this.wrappers[r-1].rank-n.rank||this.wrappers[r-1].to-n.to)<0;)r--;this.wrappers.splice(r,0,n)}this.wrapperPos=this.pos}getBlockPos(){this.updateBlockWrappers();let e=this.root;for(let t of this.wrappers){let n=e.lastChild;if(t.from<this.pos&&n instanceof Ci&&n.wrapper.eq(t.wrapper))e=n;else{let n=Ci.of(t.wrapper,this.cache.find(Ci,e=>e.wrapper.eq(t.wrapper))?.dom);e.append(n),e=n}}return e}blockPosCovered(){let e=this.lastBlock;return e!=null&&!e.breakAfter&&(!e.isWidget()||(e.flags&160)>0)}getBuffer(e){let t=2|(e<0?16:32),n=this.cache.find(Ai,void 0,1);return n&&(n.flags=t),n||new Ai(t)}flushBuffer(){this.afterWidget&&!(this.afterWidget.flags&32)&&(this.afterWidget.parent.append(this.getBuffer(-1)),this.afterWidget=null)}},Pi=class{constructor(e){this.skipCount=0,this.text=``,this.textOff=0,this.cursor=e.iter()}skip(e){this.textOff+e<=this.text.length?this.textOff+=e:(this.skipCount+=e-(this.text.length-this.textOff),this.text=``,this.textOff=0)}next(e){if(this.textOff==this.text.length){let{value:t,lineBreak:n,done:r}=this.cursor.next(this.skipCount);if(this.skipCount=0,r)throw Error(`Ran out of text content when drawing inline views`);this.text=t;let i=this.textOff=Math.min(e,t.length);return n?null:t.slice(0,i)}let t=Math.min(this.text.length,this.textOff+e),n=this.text.slice(this.textOff,t);return this.textOff=t,n}},Fi=[ki,wi,Oi,Di,Ai,Ci,Si];for(let e=0;e<Fi.length;e++)Fi[e].bucket=e;var Ii=class{constructor(e){this.view=e,this.buckets=Fi.map(()=>[]),this.index=Fi.map(()=>0),this.reused=new Map}add(e){let t=e.constructor.bucket,n=this.buckets[t];n.length<6?n.push(e):n[this.index[t]=(this.index[t]+1)%6]=e}find(e,t,n=2){let r=e.bucket,i=this.buckets[r],a=this.index[r];for(let e=0;e<i.length;e++){let o=(e+a)%i.length,s=i[o];if((!t||t(s))&&!this.reused.has(s))return i.splice(o,1),o<a&&this.index[r]--,this.reused.set(s,n),s}return null}findWidget(e,t,n){let r=this.buckets[0];if(r.length)for(let i=0,a=0;;i++){if(i==r.length){if(a)return null;a=1,i=0}let o=r[i];if(!this.reused.has(o)&&(a==0?o.widget.compare(e):o.widget.constructor==e.constructor&&e.updateDOM(o.dom,this.view,o.widget)))return r.splice(i,1),i<this.index[0]&&this.index[0]--,o.widget==e&&o.length==t&&(o.flags&497)==n?(this.reused.set(o,1),o):(this.reused.set(o,2),new ki(o.dom,t,e,o.flags&-498|n))}}reuse(e){return this.reused.set(e,1),e}maybeReuse(e,t=2){if(!this.reused.has(e))return this.reused.set(e,t),e.dom}clear(){for(let e=0;e<this.buckets.length;e++)this.buckets[e].length=this.index[e]=0}},Li=class{constructor(e,t,n,r,i){this.view=e,this.decorations=r,this.disallowBlockEffectsFor=i,this.openWidget=!1,this.openMarks=0,this.cache=new Ii(e),this.text=new Pi(e.state.doc),this.builder=new Ni(this.cache,new Si(e,e.contentDOM),k.iter(n)),this.cache.reused.set(t,2),this.old=new ji(t),this.reuseWalker={skip:(e,t,n)=>{if(this.cache.add(e),e.isComposite())return!1},enter:e=>this.cache.add(e),leave:()=>{},break:()=>{}}}run(e,t){let n=t&&this.getCompositionContext(t.text);for(let r=0,i=0,a=0;;){let o=a<e.length?e[a++]:null,s=o?o.fromA:this.old.root.length;if(s>r){let e=s-r;this.preserve(e,!a,!o),r=s,i+=e}if(!o)break;t&&o.fromA<=t.range.fromA&&o.toA>=t.range.toA?(this.forward(o.fromA,t.range.fromA,t.range.fromA<t.range.toA?1:-1),this.emit(i,t.range.fromB),this.builder.flushBuffer(),this.cache.clear(),this.builder.addComposition(t,n),this.text.skip(t.range.toB-t.range.fromB),this.forward(t.range.fromA,o.toA),this.emit(t.range.toB,o.toB)):(this.forward(o.fromA,o.toA),this.emit(i,o.toB)),i=o.toB,r=o.toA}return this.builder.curLine&&this.builder.endLine(),this.builder.root}preserve(e,t,n){let r=Hi(this.old),i=this.openMarks;this.old.advance(e,n?1:-1,{skip:(e,t,n)=>{if(e.isWidget()){if(this.openWidget)this.builder.continueWidget(n-t);else{let a=n>0||t<e.length?ki.of(e.widget,this.view,n-t,e.flags&496,this.cache.maybeReuse(e)):this.cache.reuse(e);a.flags&256?(a.flags&=-2,this.builder.addBlockWidget(a)):(this.builder.ensureLine(null),this.builder.addInlineWidget(a,r,i),i=r.length)}}else if(e.isText())this.builder.ensureLine(null),!t&&n==e.length&&!this.cache.reused.has(e)?this.builder.addText(e.text,r,i,this.cache.reuse(e)):(this.cache.add(e),this.builder.addText(e.text.slice(t,n),r,i)),i=r.length;else if(e.isLine())e.flags&=-2,this.cache.reused.set(e,1),this.builder.addLine(e);else if(e instanceof Ai)this.cache.add(e);else if(e instanceof Di)this.builder.ensureLine(null),this.builder.addMark(e,r,i),this.cache.reused.set(e,1),i=r.length;else return!1;this.openWidget=!1},enter:e=>{e.isLine()?this.builder.addLineStart(e.attrs,this.cache.maybeReuse(e)):(this.cache.add(e),e instanceof Di&&r.unshift(e.mark)),this.openWidget=!1},leave:e=>{e.isLine()?r.length&&(r.length=i=0):e instanceof Di&&(r.shift(),i=Math.min(i,r.length))},break:()=>{this.builder.addBreak(),this.openWidget=!1}}),this.text.skip(e)}emit(e,t){let n=null,r=this.builder,i=-1,a=k.spans(this.decorations,e,t,{point:(e,t,a,o,s,c)=>{if(a instanceof zn){if(this.disallowBlockEffectsFor[c]){if(a.block)throw RangeError(`Block decorations may not be specified via plugins`);if(t>this.view.state.doc.lineAt(e).to)throw RangeError(`Decorations that replace line breaks may not be specified via plugins`)}if(i=o.length,s>o.length)r.continueWidget(t-e);else{let i=a.widget||(a.block?Wi.block:Wi.inline),c=zi(a),l=this.cache.findWidget(i,t-e,c)||ki.of(i,this.view,t-e,c);a.block?(a.startSide>0&&r.addLineStartIfNotCovered(n),r.addBlockWidget(l)):(r.ensureLine(n),r.addInlineWidget(l,o,s))}n=null}else n=Vi(n,a);t>e&&this.text.skip(t-e)},span:(e,t,a,o)=>{for(let i=e;i<t;){let s=this.text.next(Math.min(512,t-i));s==null?(r.addLineStartIfNotCovered(n),r.addBreak(),i++):(r.ensureLine(n),r.addText(s,a,i==e?o:a.length),i+=s.length),n=null}i=a.length}});i>-1&&(this.openWidget=a>i),this.openWidget||r.addLineStartIfNotCovered(n),this.openMarks=a}forward(e,t,n=1){t-e<=10?this.old.advance(t-e,n,this.reuseWalker):(this.old.advance(5,-1,this.reuseWalker),this.old.advance(t-e-10,-1),this.old.advance(5,n,this.reuseWalker))}getCompositionContext(e){let t=[],n=null;for(let r=e.parentNode;;r=r.parentNode){let e=R.get(r);if(r==this.view.contentDOM)break;e instanceof Di?t.push(e):e?.isLine()?n=e:e instanceof Ci||(r.nodeName==`DIV`&&!n?n=new wi(r,Bi):n||t.push(Di.of(new Ln({tagName:r.nodeName.toLowerCase(),attributes:Fn(r)}),r)))}return n?{line:n,marks:t}:null}};function Ri(e,t){let n=e=>{for(let r of e.children)if((t?r.isText():r.length)||n(r))return!0;return!1};return n(e)}function zi(e){let t=e.isReplace?(e.startSide<0?64:0)|(e.endSide>0?128:0):e.startSide>0?32:16;return e.block&&(t|=256),t}var Bi={class:`cm-line`};function Vi(e,t){let n=t.spec.attributes,r=t.spec.class;return!n&&!r||(e||(e={class:`cm-line`}),n&&An(n,e),r&&(e.class+=` `+r)),e}function Hi(e){let t=[];for(let n=e.parents.length;n>1;n--){let r=n==e.parents.length?e.tile:e.parents[n].tile;r instanceof Di&&t.push(r.mark)}return t}function Ui(e){let t=R.get(e);return t&&t.setDOM(e.cloneNode()),e}var Wi=class extends In{constructor(e){super(),this.tag=e}eq(e){return e.tag==this.tag}toDOM(){return document.createElement(this.tag)}updateDOM(e){return e.nodeName.toLowerCase()==this.tag}get isHidden(){return!0}};Wi.inline=new Wi(`span`),Wi.block=new Wi(`div`);var Gi=new class extends In{toDOM(){return document.createElement(`br`)}get isHidden(){return!0}get editable(){return!0}},Ki=class{constructor(e){this.view=e,this.decorations=[],this.blockWrappers=[],this.dynamicDecorationMap=[!1],this.domChanged=null,this.hasComposition=null,this.editContextFormatting=N.none,this.lastCompositionAfterCursor=!1,this.minWidth=0,this.minWidthFrom=0,this.minWidthTo=0,this.impreciseAnchor=null,this.impreciseHead=null,this.forceSelection=!1,this.lastUpdate=Date.now(),this.updateDeco(),this.tile=new Si(e,e.contentDOM),this.updateInner([new _i(0,0,0,e.state.doc.length)],null)}update(e){let t=e.changedRanges;this.minWidth>0&&t.length&&(t.every(({fromA:e,toA:t})=>t<this.minWidthFrom||e>this.minWidthTo)?(this.minWidthFrom=e.changes.mapPos(this.minWidthFrom,1),this.minWidthTo=e.changes.mapPos(this.minWidthTo,1)):this.minWidth=this.minWidthFrom=this.minWidthTo=0),this.updateEditContextFormatting(e);let n=-1;this.view.inputState.composing>=0&&!this.view.observer.editContext&&(this.domChanged?.newSel?n=this.domChanged.newSel.head:!ra(e.changes,this.hasComposition)&&!e.selectionSet&&(n=e.state.selection.main.head));let r=n>-1?Xi(this.view,e.changes,n):null;if(this.domChanged=null,this.hasComposition){let{from:n,to:r}=this.hasComposition;t=new _i(n,r,e.changes.mapPos(n,-1),e.changes.mapPos(r,1)).addToSet(t.slice())}this.hasComposition=r?{from:r.range.fromB,to:r.range.toB}:null,(j.ie||j.chrome)&&!r&&e&&e.state.doc.lines!=e.startState.doc.lines&&(this.forceSelection=!0);let i=this.decorations,a=this.blockWrappers;this.updateDeco();let o=$i(i,this.decorations,e.changes);o.length&&(t=_i.extendWithRanges(t,o));let s=ta(a,this.blockWrappers,e.changes);return s.length&&(t=_i.extendWithRanges(t,s)),r&&!t.some(e=>e.fromA<=r.range.fromA&&e.toA>=r.range.toA)&&(t=r.range.addToSet(t.slice())),this.tile.flags&2&&t.length==0?!1:(this.updateInner(t,r),e.transactions.length&&(this.lastUpdate=Date.now()),!0)}updateInner(e,t){this.view.viewState.mustMeasureContent=!0;let{observer:n}=this.view;n.ignore(()=>{if(t||e.length){let n=this.tile,r=new Li(this.view,n,this.blockWrappers,this.decorations,this.dynamicDecorationMap);t&&R.get(t.text)&&r.cache.reused.set(R.get(t.text),2),this.tile=r.run(e,t),qi(n,r.cache.reused)}this.tile.dom.style.height=this.view.viewState.contentHeight/this.view.scaleY+`px`,this.tile.dom.style.flexBasis=this.minWidth?this.minWidth+`px`:``;let r=j.chrome||j.ios?{node:n.selectionRange.focusNode,written:!1}:void 0;this.tile.sync(r),r&&(r.written||n.selectionRange.focusNode!=r.node||!this.tile.dom.contains(r.node))&&(this.forceSelection=!0),this.tile.dom.style.height=``});let r=[];if(this.view.viewport.from||this.view.viewport.to<this.view.state.doc.length)for(let e of this.tile.children)e.isWidget()&&e.widget instanceof ia&&r.push(e.dom);n.updateGaps(r)}updateEditContextFormatting(e){this.editContextFormatting=this.editContextFormatting.map(e.changes);for(let t of e.transactions)for(let e of t.effects)e.is(ei)&&(this.editContextFormatting=e.value)}updateSelection(e=!1,t=!1){(e||!this.view.observer.selectionRange.focusNode)&&this.view.observer.readSelectionRange();let{dom:n}=this.tile,r=this.view.root.activeElement,i=r==n,a=!i&&!(this.view.state.facet(ni)||n.tabIndex>-1)&&qn(n,this.view.observer.selectionRange)&&!(r&&n.contains(r));if(!(i||t||a))return;let o=this.forceSelection;this.forceSelection=!1;let s=this.view.state.selection.main,c,l;if(s.empty?l=c=this.inlineDOMNearPos(s.anchor,s.assoc||1):(l=this.inlineDOMNearPos(s.head,s.head==s.from?1:-1),c=this.inlineDOMNearPos(s.anchor,s.anchor==s.from?1:-1)),j.gecko&&s.empty&&!this.hasComposition&&Ji(c)){let e=document.createTextNode(``);this.view.observer.ignore(()=>c.node.insertBefore(e,c.node.childNodes[c.offset]||null)),c=l=new vr(e,0),o=!0}let u=this.view.observer.selectionRange;(o||!u.focusNode||(!Yn(c.node,c.offset,u.anchorNode,u.anchorOffset)||!Yn(l.node,l.offset,u.focusNode,u.focusOffset))&&!this.suppressWidgetCursorChange(u,s))&&(this.view.observer.ignore(()=>{j.android&&j.chrome&&n.contains(u.focusNode)&&na(u.focusNode,n)&&(n.blur(),n.focus({preventScroll:!0}));let e=Gn(this.view.root);if(e){if(s.empty){if(j.gecko){let e=Zi(c.node,c.offset);if(e&&e!=3){let t=(e==1?gr:_r)(c.node,c.offset);t&&(c=new vr(t.node,t.offset))}}e.collapse(c.node,c.offset),s.bidiLevel!=null&&e.caretBidiLevel!==void 0&&(e.caretBidiLevel=s.bidiLevel)}else if(e.extend){e.collapse(c.node,c.offset);try{e.extend(l.node,l.offset)}catch{}}else{let t=document.createRange();s.anchor>s.head&&([c,l]=[l,c]),t.setEnd(l.node,l.offset),t.setStart(c.node,c.offset),e.removeAllRanges(),e.addRange(t)}}a&&this.view.root.activeElement==n&&(n.blur(),r&&r.focus())}),this.view.observer.setSelectionRange(c,l)),this.impreciseAnchor=c.precise?null:new vr(u.anchorNode,u.anchorOffset),this.impreciseHead=l.precise?null:new vr(u.focusNode,u.focusOffset)}suppressWidgetCursorChange(e,t){return this.hasComposition&&t.empty&&Yn(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)&&this.posFromDOM(e.focusNode,e.focusOffset)==t.head}enforceCursorAssoc(){if(this.hasComposition)return;let{view:e}=this,t=e.state.selection.main,n=Gn(e.root),{anchorNode:r,anchorOffset:i}=e.observer.selectionRange;if(!n||!t.empty||!t.assoc||!n.modify)return;let a=this.lineAt(t.head,t.assoc);if(!a)return;let o=a.posAtStart;if(t.head==o||t.head==o+a.length)return;let s=this.coordsAt(t.head,-1),c=this.coordsAt(t.head,1);if(!s||!c||s.bottom>c.top)return;let l=this.domAtPos(t.head+t.assoc,t.assoc);n.collapse(l.node,l.offset),n.modify(`move`,t.assoc<0?`forward`:`backward`,`lineboundary`),e.observer.readSelectionRange();let u=e.observer.selectionRange;e.docView.posFromDOM(u.anchorNode,u.anchorOffset)!=t.from&&n.collapse(r,i)}posFromDOM(e,t){let n=this.tile.nearest(e);if(!n)return this.tile.dom.compareDocumentPosition(e)&2?0:this.view.state.doc.length;let r=n.posAtStart;if(n.isComposite()){let i;if(e==n.dom)i=n.dom.childNodes[t];else{let r=$n(e)==0?0:t==0?-1:1;for(;;){let t=e.parentNode;if(t==n.dom)break;r==0&&t.firstChild!=t.lastChild&&(r=e==t.firstChild?-1:1),e=t}i=r<0?e:e.nextSibling}if(i==n.dom.firstChild)return r;for(;i&&!R.get(i);)i=i.nextSibling;if(!i)return r+n.length;for(let e=0,t=r;;e++){let r=n.children[e];if(r.dom==i)return t;t+=r.length+r.breakAfter}}else if(n.isText())return e==n.dom?r+t:r+(t?n.length:0);else return r}domAtPos(e,t){let{tile:n,offset:r}=this.tile.resolveBlock(e,t);return n.isWidget()?n.domPosFor(r,t):n.domIn(r,t)}inlineDOMNearPos(e,t){let n,r=-1,i=!1,a,o=-1,s=!1;return this.tile.blockTiles((t,c)=>{if(t.isWidget()){if(t.flags&32&&c>=e)return!0;t.flags&16&&(i=!0)}else{let l=c+t.length;if(c<=e&&(n=t,r=e-c,i=l<e),l>=e&&!a&&(a=t,o=e-c,s=c>e),c>e&&a)return!0}}),!n&&!a?this.domAtPos(e,t):(i&&a?n=null:s&&n&&(a=null),n&&t<0||!a?n.domIn(r,t):a.domIn(o,t))}coordsAt(e,t,n){let{tile:r,offset:i}=this.tile.resolveBlock(e,t);return r.isWidget()?r.widget instanceof ia?null:r.coordsInWidget(i,t,!0):r.coordsIn(i,t,n)}lineAt(e,t){let{tile:n}=this.tile.resolveBlock(e,t);return n.isLine()?n:null}coordsForChar(e){let{tile:t,offset:n}=this.tile.resolveBlock(e,1);if(!t.isLine())return null;function r(e,t){if(e.isComposite())for(let n of e.children){if(n.length>=t){let e=r(n,t);if(e)return e}if(t-=n.length,t<0)break}else if(e.isText()&&t<e.length){let n=S(e.text,t);if(n==t)return null;let r=dr(e.dom,t,n).getClientRects();for(let e=0;e<r.length;e++){let t=r[e];if(e==r.length-1||t.top<t.bottom&&t.left<t.right)return t}}return null}return r(t,n)}measureVisibleLineHeights(e){let t=[],{from:n,to:r}=e,i=this.view.contentDOM.clientWidth,a=i>Math.max(this.view.scrollDOM.clientWidth,this.minWidth)+1,o=-1,s=this.view.textDirection==F.LTR,c=0,l=(e,u,d)=>{for(let f=0;f<e.children.length&&!(u>r);f++){let r=e.children[f],p=u+r.length,m=r.dom.getBoundingClientRect(),{height:h}=m;if(d&&!f&&(c+=m.top-d.top),r instanceof Ci)p>n&&l(r,u,m);else if(u>=n&&(c>0&&t.push(-c),t.push(h+c),c=0,a)){let e=r.dom.lastChild,t=e?Jn(e):[];if(t.length){let e=t[t.length-1],n=s?e.right-m.left:m.right-e.left;n>o&&(o=n,this.minWidth=i,this.minWidthFrom=u,this.minWidthTo=p)}}d&&f==e.children.length-1&&(c+=d.bottom-m.bottom),u=p+r.breakAfter}};return l(this.tile,0,null),t}textDirectionAt(e){let{tile:t}=this.tile.resolveBlock(e,1);return getComputedStyle(t.dom).direction==`rtl`?F.RTL:F.LTR}measureTextSize(){let e=this.tile.blockTiles(e=>{if(e.isLine()&&e.children.length&&e.length<=20){let t=0,n;for(let r of e.children){if(!r.isText()||/[^ -~]/.test(r.text))return;let e=Jn(r.dom);if(e.length!=1)return;t+=e[0].width,n=e[0].height}if(t)return{lineHeight:e.dom.getBoundingClientRect().height,charWidth:t/e.length,textHeight:n}}});if(e)return e;let t=document.createElement(`div`),n,r,i;return t.className=`cm-line`,t.style.width=`99999px`,t.style.position=`absolute`,t.textContent=`abc def ghi jkl mno pqr stu`,this.view.observer.ignore(()=>{this.tile.dom.appendChild(t);let e=Jn(t.firstChild)[0];n=t.getBoundingClientRect().height,r=e&&e.width?e.width/27:7,i=e&&e.height?e.height:n,t.remove()}),{lineHeight:n,charWidth:r,textHeight:i}}computeBlockGapDeco(){let e=[],t=this.view.viewState;for(let n=0,r=0;;r++){let i=r==t.viewports.length?null:t.viewports[r],a=i?i.from-1:this.view.state.doc.length;if(a>n){let r=(t.lineBlockAt(a).bottom-t.lineBlockAt(n).top)/this.view.scaleY;e.push(N.replace({widget:new ia(r),block:!0,inclusive:!0,isBlockGap:!0}).range(n,a))}if(!i)break;n=i.to+1}return N.set(e)}updateDeco(){let e=1,t=this.view.state.facet(ci).map(t=>(this.dynamicDecorationMap[e++]=typeof t==`function`)?t(this.view):t),n=!1,r=this.view.state.facet(ui).map((e,t)=>{let r=typeof e==`function`;return r&&(n=!0),r?e(this.view):e});for(r.length&&(this.dynamicDecorationMap[e++]=n,t.push(k.join(r))),this.decorations=[this.editContextFormatting,...t,this.computeBlockGapDeco(),this.view.viewState.lineGapDeco];e<this.decorations.length;)this.dynamicDecorationMap[e++]=!1;this.blockWrappers=this.view.state.facet(li).map(e=>typeof e==`function`?e(this.view):e)}scrollIntoView(e){if(e.isSnapshot){let t=this.view.viewState.lineBlockAt(e.range.head);this.view.scrollDOM.scrollTop=t.top-e.yMargin,this.view.scrollDOM.scrollLeft=e.xMargin;return}for(let t of this.view.state.facet(Zr))try{if(t(this.view,e.range,e))return!0}catch(e){ti(this.view.state,e,`scroll handler`)}let{range:t}=e,n=this.coordsAt(t.head,t.assoc||(t.head>t.anchor?-1:1)),r;if(!n)return;!t.empty&&(r=this.coordsAt(t.anchor,t.anchor>t.head?-1:1))&&(n={left:Math.min(n.left,r.left),top:Math.min(n.top,r.top),right:Math.max(n.right,r.right),bottom:Math.max(n.bottom,r.bottom)});let i=hi(this.view),a={left:n.left-i.left,top:n.top-i.top,right:n.right+i.right,bottom:n.bottom+i.bottom},{offsetWidth:o,offsetHeight:s}=this.view.scrollDOM;if(rr(this.view.scrollDOM,a,t.head<t.anchor?-1:1,e.x,e.y,Math.max(Math.min(e.xMargin,o),-o),Math.max(Math.min(e.yMargin,s),-s),this.view.textDirection==F.LTR),window.visualViewport&&window.innerHeight-window.visualViewport.height>1&&(n.top>window.visualViewport.offsetTop+window.visualViewport.height||n.bottom<window.visualViewport.offsetTop)){let e=this.view.docView.lineAt(t.head,1);if(e){let t=or(e.dom);e.dom.scrollIntoView({block:`nearest`}),sr(t,!1)}}}lineHasWidget(e){let t=e=>e.isWidget()||e.children.some(t);return t(this.tile.resolveBlock(e,1).tile)}destroy(){qi(this.tile)}};function qi(e,t){let n=t?.get(e);if(n!=1){n??e.destroy();for(let n of e.children)qi(n,t)}}function Ji(e){return P(e.node)&&e.node.firstChild&&(e.offset==0||e.node.childNodes[e.offset-1].contentEditable==`false`)&&(e.offset==e.node.childNodes.length||e.node.childNodes[e.offset].contentEditable==`false`)}function Yi(e,t){let n=e.observer.selectionRange;if(!n.focusNode)return null;let r=gr(n.focusNode,n.focusOffset),i=_r(n.focusNode,n.focusOffset),a=r||i;if(i&&r&&i.node!=r.node){let t=R.get(i.node);if(!t||t.isText()&&t.text!=i.node.nodeValue)a=i;else if(e.docView.lastCompositionAfterCursor){let e=R.get(r.node);!e||e.isText()&&e.text!=r.node.nodeValue||(a=i)}}if(e.docView.lastCompositionAfterCursor=a!=r,!a)return null;let o=t-a.offset;return{from:o,to:o+a.node.nodeValue.length,node:a.node}}function Xi(e,t,n){let r=Yi(e,n);if(!r)return null;let{node:i,from:a,to:o}=r,s=i.nodeValue;if(/[\n\r]/.test(s)||e.state.doc.sliceString(r.from,r.to)!=s)return null;let c=t.invertedDesc;return{range:new _i(c.mapPos(a),c.mapPos(o),a,o),text:i}}function Zi(e,t){return P(e)?(t&&e.childNodes[t-1].contentEditable==`false`?1:0)|(t<e.childNodes.length&&e.childNodes[t].contentEditable==`false`?2:0):0}var Qi=class{constructor(){this.changes=[]}compareRange(e,t){Hn(e,t,this.changes)}comparePoint(e,t){Hn(e,t,this.changes)}boundChange(e){Hn(e,e,this.changes)}};function $i(e,t,n){let r=new Qi;return k.compare(e,t,n,r),r.changes}var ea=class{constructor(){this.changes=[]}compareRange(e,t){Hn(e,t,this.changes)}comparePoint(){}boundChange(e){Hn(e,e,this.changes)}};function ta(e,t,n){let r=new ea;return k.compare(e,t,n,r),r.changes}function na(e,t){for(let n=e;n&&n!=t;n=n.assignedSlot||n.parentNode)if(P(n)&&n.contentEditable==`false`)return!0;return!1}function ra(e,t){let n=!1;return t&&e.iterChangedRanges((e,r)=>{e<t.to&&r>t.from&&(n=!0)}),n}var ia=class extends In{constructor(e){super(),this.height=e}toDOM(){let e=document.createElement(`div`);return e.className=`cm-gap`,this.updateDOM(e),e}eq(e){return e.height==this.height}updateDOM(e){return e.style.height=this.height+`px`,!0}get editable(){return!0}get estimatedHeight(){return this.height}ignoreEvent(){return!1}};function aa(e,t,n=1){let r=e.charCategorizer(t),i=e.doc.lineAt(t),a=t-i.from;if(i.length==0)return w.cursor(t);a==0?n=1:a==i.length&&(n=-1);let o=a,s=a;n<0?o=S(i.text,a,!1):s=S(i.text,a);let c=r(i.text.slice(o,s));for(;o>0;){let e=S(i.text,o,!1);if(r(i.text.slice(e,o))!=c)break;o=e}for(;s<i.length;){let e=S(i.text,s);if(r(i.text.slice(s,e))!=c)break;s=e}return w.undirectionalRange(o+i.from,s+i.from)}function oa(e,t,n,r,i){let a=Math.round((r-t.left)*e.defaultCharacterWidth);if(e.lineWrapping&&n.height>e.defaultLineHeight*1.5){let t=e.viewState.heightOracle.textHeight,r=Math.floor((i-n.top-(e.defaultLineHeight-t)*.5)/t);a+=r*e.viewState.heightOracle.lineLength}let o=e.state.sliceDoc(n.from,n.to);return n.from+nn(o,a,e.state.tabSize)}function sa(e,t,n){let r=e.lineBlockAt(t);if(Array.isArray(r.type)){let e;for(let i of r.type){if(i.from>t)break;if(!(i.to<t)){if(i.from<t&&i.to>t)return i;(!e||i.type==M.Text&&(e.type!=i.type||(n<0?i.from<t:i.to>t)))&&(e=i)}}return e||r}return r}function ca(e,t,n,r){let i=sa(e,t.head,t.assoc||-1),a=!r||i.type!=M.Text||!(e.lineWrapping||i.widgetLineBreaks)?null:e.coordsAtPos(t.assoc<0&&t.head>i.from?t.head-1:t.head);if(a){let t=e.dom.getBoundingClientRect(),r=e.textDirectionAt(i.from),o=e.posAtCoords({x:n==(r==F.LTR)?t.right-1:t.left+1,y:(a.top+a.bottom)/2});if(o!=null)return w.cursor(o,n?-1:1)}return w.cursor(n?i.to:i.from,n?-1:1)}function la(e,t,n,r){let i=e.state.doc.lineAt(t.head),a=e.bidiSpans(i),o=e.textDirectionAt(i.from);for(let s=t,c=null;;){let t=Rr(i,a,o,s,n),l=Lr;if(!t){if(i.number==(n?e.state.doc.lines:1))return s;l=`
`,i=e.state.doc.line(i.number+(n?1:-1)),a=e.bidiSpans(i),t=n?w.cursor(i.from,-1):w.cursor(i.to,1)}if(!c){if(!r)return t;c=r(l)}else if(!c(l))return s;s=t}}function ua(e,t,n){let r=e.state.charCategorizer(t),i=r(n);return e=>{let t=r(e);return i==D.Space&&(i=t),i==t}}function da(e,t,n,r){let i=t.head,a=n?1:-1;if(i==(n?e.state.doc.length:0))return w.cursor(i,t.assoc);let o=t.goalColumn,s,c=e.contentDOM.getBoundingClientRect(),l=e.coordsAtPos(i,t.assoc||((t.empty?n:t.head==t.from)?1:-1)),u=e.documentTop;if(l)o??(o=l.left-c.left),s=a<0?l.top:l.bottom;else{let t=e.viewState.lineBlockAt(i);o??(o=Math.min(c.right-c.left,e.defaultCharacterWidth*(i-t.from))),s=(a<0?t.top:t.bottom)+u}let d=c.left+o,f=e.viewState.heightOracle.textHeight>>1,p=r??f;for(let t=0;;t+=f){let r=s+(p+t)*a,i=ga(e,{x:d,y:r},!1,a);if(n?r>c.bottom:r<c.top)return w.cursor(i.pos,i.assoc);let l=e.coordsAtPos(i.pos,i.assoc),u=l?(l.top+l.bottom)/2:0;if(!l||(n?u>s:u<s))return w.cursor(i.pos,i.assoc,void 0,o)}}function fa(e,t,n){for(;;){let r=0;for(let i of e)i.between(t-1,t+1,(e,i,a)=>{if(t>e&&t<i){let a=r||n||(t-e<i-t?-1:1);t=a<0?e:i,r=a}});if(!r)return t}}function pa(e,t){let n=null;for(let r=0;r<t.ranges.length;r++){let i=t.ranges[r],a=null;if(i.empty){let t=fa(e,i.from,0);t!=i.from&&(a=w.cursor(t,-1))}else{let t=fa(e,i.from,-1),n=fa(e,i.to,1);(t!=i.from||n!=i.to)&&(a=i.undirectional?w.undirectionalRange(i.from,i.to):w.range(i.from==i.anchor?t:n,i.from==i.head?t:n))}a&&(n||(n=t.ranges.slice()),n[r]=a)}return n?w.create(n,t.mainIndex):t}function ma(e,t,n){let r=fa(e.state.facet(di).map(t=>t(e)),n.from,t.head>n.from?-1:1);return r==n.from?n:w.cursor(r,r<n.from?1:-1)}var ha=class{constructor(e,t){this.pos=e,this.assoc=t}};function ga(e,t,n,r){let i=e.contentDOM.getBoundingClientRect(),a=i.top+e.viewState.paddingTop,{x:o,y:s}=t,c=s-a,l;for(;;){if(c<0)return new ha(0,1);if(c>e.viewState.docHeight)return new ha(e.state.doc.length,-1);if(l=e.elementAtHeight(c),r==null)break;if(l.type==M.Text){if(r<0?l.to<e.viewport.from:l.from>e.viewport.to)break;let t=e.docView.coordsAt(r<0?l.from:l.to,r>0?-1:1);if(t&&(r<0?t.top<=c+a:t.bottom>=c+a))break}let t=e.viewState.heightOracle.textHeight/2;c=r>0?l.bottom+t:l.top-t}if(e.viewport.from>=l.to||e.viewport.to<=l.from){if(n)return null;if(l.type==M.Text){let t=oa(e,i,l,o,s);return new ha(t,t==l.from?1:-1)}}if(l.type!=M.Text)return c<(l.top+l.bottom)/2?new ha(l.from,1):new ha(l.to,-1);let u=e.docView.lineAt(l.from,2);return(!u||u.length!=l.length)&&(u=e.docView.lineAt(l.from,-2)),new _a(e,o,s,e.textDirectionAt(l.from)).scanTile(u,l.from)}var _a=class{constructor(e,t,n,r){this.view=e,this.x=t,this.y=n,this.baseDir=r,this.line=null,this.spans=null}bidiSpansAt(e){return(!this.line||this.line.from>e||this.line.to<e)&&(this.line=this.view.state.doc.lineAt(e),this.spans=this.view.bidiSpans(this.line)),this}baseDirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[Or.find(r,e-n.from,-1,t)].level==this.baseDir}dirAt(e,t){let{line:n,spans:r}=this.bidiSpansAt(e);return r[Or.find(r,e-n.from,-1,t)].dir}bidiIn(e,t){let{spans:n,line:r}=this.bidiSpansAt(e);return n.length>1||n.length&&(n[0].level!=this.baseDir||n[0].to+r.from<t)}scan(e,t,n=!1){let r=0,i=e.length-1,a=new Set,o=this.bidiIn(e[0],e[i]),s,c,l=-1,u=1e9,d;search:for(;r<i;){let n=i-r,f=r+i>>1;adjust:if(a.has(f)){for(let e=1;e<n;e++){let t=f+e;if(t>=i&&(t-=n),!a.has(t)){f=t;break adjust}}break search}a.add(f);let p=t(f),m=0;if(p)for(let e=0;e<p.length;e++){let t=p[e];if(!(t.width==0&&p.length>1)){if(t.bottom<this.y)(!s||s.bottom<t.bottom)&&(s=t),m=1;else if(t.top>this.y)(!c||c.top>t.top)&&(c=t),m=-1;else{let e=t.left>this.x?this.x-t.left:t.right<this.x?this.x-t.right:0,n=Math.abs(e);n<u&&(l=f,u=n,d=t),e&&(m=e<0==(this.baseDir==F.LTR)?-1:1)}}}m==-1&&(!o||this.baseDirAt(e[f],1))?i=f:m==1&&(!o||this.baseDirAt(e[f+1],-1))&&(r=f+1)}if(!d){if(!c&&!s)return{i:0,after:!1};let n=s&&(!c||this.y-s.bottom<c.top-this.y)?s:c;return this.y=(n.top+n.bottom)/2,this.scan(e,t,!0)}if(u&&!n){let{top:n,bottom:r}=d;if(s&&s.bottom>(n+n+r)/3)return this.y=s.bottom-1,this.scan(e,t,!0);if(c&&c.top<(n+r+r)/3)return this.y=c.top+1,this.scan(e,t,!0)}let f=(o?this.dirAt(e[l],1):this.baseDir)==F.LTR;return{i:l,after:this.x>(d.left+d.right)/2==f}}scanText(e,t){let n=[];for(let r=0;r<e.length;r=S(e.text,r))n.push(t+r);n.push(t+e.length);let r=this.scan(n,r=>{let i=n[r]-t,a=n[r+1]-t;return dr(e.dom,i,a).getClientRects()});return r.after?new ha(n[r.i+1],-1):new ha(n[r.i],1)}scanTile(e,t){if(!e.length)return new ha(t,1);if(e.children.length==1){let n=e.children[0];if(n.isText())return this.scanText(n,t);if(n.isComposite())return this.scanTile(n,t)}let n=[t];for(let r=0,i=t;r<e.children.length;r++)n.push(i+=e.children[r].length);let r=this.scan(n,t=>{let n=e.children[t];return n.flags&48?null:(P(n.dom)?n.dom:dr(n.dom,0,n.length)).getClientRects()}),i=e.children[r.i],a=n[r.i];return i.isText()?this.scanText(i,a):i.isComposite()?this.scanTile(i,a):r.after?new ha(n[r.i+1],-1):new ha(a,1)}},va=`￿`,ya=class{constructor(e,t){this.points=e,this.view=t,this.text=``,this.lineSeparator=t.state.facet(O.lineSeparator)}append(e){this.text+=e}lineBreak(){this.text+=va}readRange(e,t){if(!e)return this;let n=e.parentNode;for(let r=e;;){this.findPointBefore(n,r);let e=this.text.length;this.readNode(r);let i=R.get(r),a=r.nextSibling;if(a==t){i?.breakAfter&&!a&&n!=this.view.contentDOM&&this.lineBreak();break}let o=R.get(a);(i&&o?i.breakAfter:(i?i.breakAfter:Zn(r))||Zn(a)&&(r.nodeName!=`BR`||i?.isWidget())&&this.text.length>e)&&!xa(a,t)&&this.lineBreak(),r=a}return this.findPointBefore(n,t),this}readTextNode(e){let t=e.nodeValue;for(let n of this.points)n.node==e&&(n.pos=this.text.length+Math.min(n.offset,t.length));for(let n=0,r=this.lineSeparator?null:/\r\n?|\n/g;;){let i=-1,a=1,o;if(this.lineSeparator?(i=t.indexOf(this.lineSeparator,n),a=this.lineSeparator.length):(o=r.exec(t))&&(i=o.index,a=o[0].length),this.append(t.slice(n,i<0?t.length:i)),i<0)break;if(this.lineBreak(),a>1)for(let t of this.points)t.node==e&&t.pos>this.text.length&&(t.pos-=a-1);n=i+a}}readNode(e){let t=R.get(e),n=t&&t.overrideDOMText;if(n!=null){this.findPointInside(e,n.length);for(let e=n.iter();!e.next().done;)e.lineBreak?this.lineBreak():this.append(e.value)}else Wn(e)?this.readTextNode(e):e.nodeName==`BR`?e.nextSibling&&this.lineBreak():P(e)&&this.readRange(e.firstChild,null)}findPointBefore(e,t){for(let n of this.points)n.node==e&&e.childNodes[n.offset]==t&&(n.pos=this.text.length)}findPointInside(e,t){for(let n of this.points)(Wn(e)?n.node==e:e.contains(n.node))&&(n.pos=this.text.length+(ba(e,n.node,n.offset)?t:0))}};function ba(e,t,n){for(;;){if(!t||n<$n(t))return!1;if(t==e)return!0;n=Xn(t)+1,t=t.parentNode}}function xa(e,t){let n;for(;e!=t&&e;e=e.nextSibling){let t=R.get(e);if(!t?.isWidget())return!1;t&&(n||(n=[])).push(t)}if(n){for(let e of n)if(e.overrideDOMText?.length)return!1}return!0}var Sa=class{constructor(e,t){this.node=e,this.offset=t,this.pos=-1}},Ca=class{constructor(e,t,n,r){this.typeOver=r,this.bounds=null,this.text=``,this.domChanged=t>-1;let{impreciseHead:i,impreciseAnchor:a}=e.docView,o=e.state.selection;if(e.state.readOnly&&t>-1)this.newSel=null;else if(t>-1&&(this.bounds=wa(e.docView.tile,t,n,0))){let t=i||a?[]:ka(e),n=new ya(t,e);n.readRange(this.bounds.startDOM,this.bounds.endDOM),this.text=n.text,this.newSel=Aa(t,this.bounds.from)}else{let t=e.observer.selectionRange,n=i&&i.node==t.focusNode&&i.offset==t.focusOffset||!Kn(e.contentDOM,t.focusNode)?o.main.head:e.docView.posFromDOM(t.focusNode,t.focusOffset),r=a&&a.node==t.anchorNode&&a.offset==t.anchorOffset||!Kn(e.contentDOM,t.anchorNode)?o.main.anchor:e.docView.posFromDOM(t.anchorNode,t.anchorOffset),s=e.viewport;if((j.ios||j.chrome)&&n!=r&&Math.min(n,r)<=o.main.from&&Math.max(n,r)>=o.main.to&&(s.from>0||s.to<e.state.doc.length)){let t=Math.min(n,r),i=Math.max(n,r),a=s.from-t,o=s.to-i;(a==0||a==1||t==0)&&(o==0||o==-1||i==e.state.doc.length)&&(n=0,r=e.state.doc.length)}if(e.inputState.composing>-1&&o.ranges.length>1)this.newSel=o.replaceRange(w.range(r,n));else if(e.lineWrapping&&r==n&&!(o.main.empty&&o.main.head==n)&&e.inputState.lastTouchTime>Date.now()-100){let t=e.coordsAtPos(n,-1),r=0;t&&(r=e.inputState.lastTouchY<=t.bottom?-1:1),this.newSel=w.create([w.cursor(n,r)])}else this.newSel=w.single(r,n)}}};function wa(e,t,n,r){if(e.isComposite()){let i=-1,a=-1,o=-1,s=-1;for(let c=0,l=r,u=r;c<e.children.length;c++){let r=e.children[c],d=l+r.length;if(l<t&&d>n)return wa(r,t,n,l);if(d>=t&&i==-1&&(i=c,a=l),l>n&&r.dom.parentNode==e.dom){o=c,s=u;break}u=d,l=d+r.breakAfter}return{from:a,to:s<0?r+e.length:s,startDOM:(i?e.children[i-1].dom.nextSibling:null)||e.dom.firstChild,endDOM:o<e.children.length&&o>=0?e.children[o].dom:null}}return e.isText()?{from:r,to:r+e.length,startDOM:e.dom,endDOM:e.dom.nextSibling}:null}function Ta(e,t){let n,{newSel:r}=t,{state:i}=e,a=i.selection.main,o=e.inputState.lastKeyTime>Date.now()-100?e.inputState.lastKeyCode:-1;if(t.bounds){let{from:e,to:r}=t.bounds,s=a.from,c=null;(o===8||j.android&&t.text.length<r-e)&&(s=a.to,c=`end`);let l=i.doc.sliceString(e,r,va),u,d;!a.empty&&a.from>=e&&a.to<=r&&(t.typeOver||l!=t.text)&&l.slice(0,a.from-e)==t.text.slice(0,a.from-e)&&l.slice(a.to-e)==t.text.slice(u=t.text.length-(l.length-(a.to-e)))?n={from:a.from,to:a.to,insert:x.of(t.text.slice(a.from-e,u).split(va))}:(d=Oa(l,t.text,s-e,c))&&(j.chrome&&o==13&&d.toB==d.from+2&&t.text.slice(d.from,d.toB)==`￿￿`&&d.toB--,n={from:e+d.from,to:e+d.toA,insert:x.of(t.text.slice(d.from,d.toB).split(va))})}else r&&(!e.hasFocus&&i.facet(ni)||ja(r,a))&&(r=null);if(!n&&!r)return!1;if((j.mac||j.android)&&n&&n.from==n.to&&n.from==a.head-1&&/^\. ?$/.test(n.insert.toString())&&e.contentDOM.getAttribute(`autocorrect`)==`off`?(r&&n.insert.length==2&&(r=w.single(r.main.anchor-1,r.main.head-1)),n={from:n.from,to:n.to,insert:x.of([n.insert.toString().replace(`.`,` `)])}):i.doc.lineAt(a.from).to<a.to&&e.docView.lineHasWidget(a.to)&&e.inputState.insertingTextAt>Date.now()-50?n={from:a.from,to:a.to,insert:i.toText(e.inputState.insertingText)}:j.chrome&&n&&n.from==n.to&&n.from==a.head&&n.insert.toString()==`
 `&&e.lineWrapping&&(r&&(r=w.single(r.main.anchor-1,r.main.head-1)),n={from:a.from,to:a.to,insert:x.of([` `])}),n)return Ea(e,n,r,o);if(r&&!ja(r,a)){let t=!1,n=`select`;return e.inputState.lastSelectionTime>Date.now()-50&&(e.inputState.lastSelectionOrigin==`select`&&(t=!0),n=e.inputState.lastSelectionOrigin,n==`select.pointer`&&(r=pa(i.facet(di).map(t=>t(e)),r))),e.dispatch({selection:r,scrollIntoView:t,userEvent:n}),!0}return!1}function Ea(e,t,n,r=-1){if(j.ios&&e.inputState.flushIOSKey(t))return!0;let i=e.state.selection.main;if(j.android&&(t.to==i.to&&(t.from==i.from||t.from==i.from-1&&e.state.sliceDoc(t.from,i.from)==` `)&&t.insert.length==1&&t.insert.lines==2&&fr(e.contentDOM,`Enter`,13)||(t.from==i.from-1&&t.to==i.to&&t.insert.length==0||r==8&&t.insert.length<t.to-t.from&&t.to>i.head)&&fr(e.contentDOM,`Backspace`,8)||t.from==i.from&&t.to==i.to+1&&t.insert.length==0&&fr(e.contentDOM,`Delete`,46)))return!0;let a=t.insert.toString();e.inputState.composing>=0&&e.inputState.composing++;let o,s=()=>o||(o=Da(e,t,n));return e.state.facet(Gr).some(n=>n(e,t.from,t.to,a,s))||e.dispatch(s()),!0}function Da(e,t,n){let r,i=e.state,a=i.selection.main,o=-1;if(t.from==t.to&&t.from<a.from||t.from>a.to){let n=t.from<a.from?-1:1,r=n<0?a.from:a.to,s=fa(i.facet(di).map(t=>t(e)),r,n);t.from==s&&(o=s)}if(o>-1)r={changes:t,selection:w.cursor(t.from+t.insert.length,-1)};else if(t.from>=a.from&&t.to<=a.to&&t.to-t.from>=(a.to-a.from)/3&&(!n||n.main.empty&&n.main.from==t.from+t.insert.length)&&e.inputState.composing<0){let n=a.from<t.from?i.sliceDoc(a.from,t.from):``,o=a.to>t.to?i.sliceDoc(t.to,a.to):``;r=i.replaceSelection(e.state.toText(n+t.insert.sliceString(0,void 0,e.state.lineBreak)+o))}else{let o=i.changes(t),s=n&&n.main.to<=o.newLength?n.main:void 0;if(i.selection.ranges.length>1&&(e.inputState.composing>=0||e.inputState.compositionPendingChange)&&t.to<=a.to+10&&t.to>=a.to-10){let c=e.state.sliceDoc(t.from,t.to),l,u=n&&Yi(e,n.main.head);if(u){let e=t.insert.length-(t.to-t.from);l={from:u.from,to:u.to-e}}else l=e.state.doc.lineAt(a.head);let d=a.to-t.to;r=i.changeByRange(n=>{if(n.from==a.from&&n.to==a.to)return{changes:o,range:s||n.map(o)};let r=n.to-d,u=r-c.length;if(e.state.sliceDoc(u,r)!=c||r>=l.from&&u<=l.to)return{range:n};let f=i.changes({from:u,to:r,insert:t.insert}),p=n.to-a.to;return{changes:f,range:s?w.range(Math.max(0,s.anchor+p),Math.max(0,s.head+p)):n.map(f)}})}else r={changes:o,selection:s&&i.selection.replaceRange(s)}}let s=`input.type`;return(e.composing||e.inputState.compositionPendingChange&&e.inputState.compositionEndedAt>Date.now()-50)&&(e.inputState.compositionPendingChange=!1,s+=`.compose`,e.inputState.compositionFirstChange&&(s+=`.start`,e.inputState.compositionFirstChange=!1)),i.update(r,{userEvent:s,scrollIntoView:!0})}function Oa(e,t,n,r){let i=Math.min(e.length,t.length),a=0;for(;a<i&&e.charCodeAt(a)==t.charCodeAt(a);)a++;if(a==i&&e.length==t.length)return null;let o=e.length,s=t.length;for(;o>0&&s>0&&e.charCodeAt(o-1)==t.charCodeAt(s-1);)o--,s--;if(r==`end`){let e=Math.max(0,a-Math.min(o,s));n-=o+e-a}if(o<a&&e.length<t.length){let e=n<=a&&n>=o?a-n:0;a-=e,s=a+(s-o),o=a}else if(s<a){let e=n<=a&&n>=s?a-n:0;a-=e,o=a+(o-s),s=a}return{from:a,toA:o,toB:s}}function ka(e){let t=[];if(e.root.activeElement!=e.contentDOM)return t;let{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}=e.observer.selectionRange;return n&&(t.push(new Sa(n,r)),(i!=n||a!=r)&&t.push(new Sa(i,a))),t}function Aa(e,t){if(e.length==0)return null;let n=e[0].pos,r=e.length==2?e[1].pos:n;return n<0||r<0?null:n==r?w.create([w.cursor(r+t,-1)]):w.single(n+t,r+t)}function ja(e,t){return t.head==e.main.head&&t.anchor==e.main.anchor}var Ma=class{setSelectionOrigin(e){this.lastSelectionOrigin=e,this.lastSelectionTime=Date.now()}constructor(e){this.view=e,this.lastKeyCode=0,this.lastKeyTime=0,this.touchActive=!1,this.lastTouchTime=0,this.lastTouchX=0,this.lastTouchY=0,this.lastFocusTime=0,this.lastScrollTop=0,this.lastScrollLeft=0,this.lastWheelEvent=0,this.pendingIOSKey=void 0,this.lastIOSMomentumScroll=0,this.tabFocusMode=-1,this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastContextMenu=0,this.scrollHandlers=[],this.handlers=Object.create(null),this.composing=-1,this.compositionFirstChange=null,this.compositionEndedAt=0,this.compositionPendingKey=!1,this.compositionPendingChange=!1,this.insertingText=``,this.insertingTextAt=0,this.mouseSelection=null,this.draggedContent=null,this.handleEvent=this.handleEvent.bind(this),this.notifiedFocused=e.hasFocus,j.safari&&e.contentDOM.addEventListener(`input`,()=>null),j.gecko&&go(e.contentDOM.ownerDocument)}handleEvent(e){Ka(this.view,e)&&!this.ignoreDuringComposition(e)&&(e.type==`keydown`&&this.keydown(e)||(this.view.updateState==0?this.runHandlers(e.type,e):Promise.resolve().then(()=>this.runHandlers(e.type,e))))}runHandlers(e,t){let n=this.handlers[e];if(n){for(let e of n.observers)e(this.view,t);for(let e of n.handlers){if(t.defaultPrevented)break;if(e(this.view,t)){t.preventDefault();break}}}}ensureHandlers(e){let t=Fa(e),n=this.handlers,r=this.view.contentDOM;for(let e in t)if(e!=`scroll`){let i=!t[e].handlers.length,a=n[e];a&&i!=!a.handlers.length&&(r.removeEventListener(e,this.handleEvent),a=null),a||r.addEventListener(e,this.handleEvent,{passive:i})}for(let e in n)e!=`scroll`&&!t[e]&&r.removeEventListener(e,this.handleEvent);this.handlers=t}keydown(e){if(this.lastKeyCode=e.keyCode,this.lastKeyTime=Date.now(),e.keyCode==9&&this.tabFocusMode>-1&&(!this.tabFocusMode||Date.now()<=this.tabFocusMode))return!0;if(this.tabFocusMode>0&&e.keyCode!=27&&Ra.indexOf(e.keyCode)<0&&(this.tabFocusMode=-1),j.android&&j.chrome&&!e.synthetic&&(e.keyCode==13||e.keyCode==8))return this.view.observer.delayAndroidKey(e.key,e.keyCode),!0;if(j.ios&&!e.synthetic&&!e.altKey&&!e.metaKey&&(Ia.some(t=>t.keyCode==e.keyCode)&&!e.ctrlKey||La.indexOf(e.key)>-1&&e.ctrlKey)){let t={ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey,shiftKey:e.shiftKey};t.shiftKey&&j.ios&&!/^(off|none)$/.test(this.view.contentDOM.autocapitalize)&&Na(this.view.win)&&(t.shiftKey=!1);let n=this.pendingIOSKey={key:e.key,keyCode:e.keyCode,mods:t};return setTimeout(()=>{this.pendingIOSKey==n&&this.flushIOSKey()},50),!0}return e.keyCode!=229&&this.view.observer.forceFlush(),!1}flushIOSKey(e){let t=this.pendingIOSKey;return!t||this.view.observer.pendingRecords().length||t.key==`Enter`&&e&&e.from<e.to&&/^\S+$/.test(e.insert.toString())?!1:(this.pendingIOSKey=void 0,fr(this.view.contentDOM,t.key,t.keyCode,t.mods))}ignoreDuringComposition(e){return!/^key/.test(e.type)||e.synthetic?!1:this.composing>0?!0:j.safari&&!j.ios&&this.compositionPendingKey&&Date.now()-this.compositionEndedAt<100?(this.compositionPendingKey=!1,!0):!1}startMouseSelection(e){this.mouseSelection&&this.mouseSelection.destroy(),this.mouseSelection=e}update(e){this.view.observer.update(e),this.mouseSelection&&this.mouseSelection.update(e),this.draggedContent&&e.docChanged&&(this.draggedContent=this.draggedContent.map(e.changes)),e.transactions.length&&(this.lastKeyCode=this.lastSelectionTime=0)}destroy(){this.mouseSelection&&this.mouseSelection.destroy()}};function Na(e){return e.visualViewport?e.visualViewport.height*e.visualViewport.scale/e.document.documentElement.clientHeight<.85:!1}function Pa(e,t){return(n,r)=>{try{return t.call(e,r,n)}catch(e){ti(n.state,e)}}}function Fa(e){let t=Object.create(null);function n(e){return t[e]||(t[e]={observers:[],handlers:[]})}for(let t of e){let e=t.spec,r=e&&e.plugin.domEventHandlers,i=e&&e.plugin.domEventObservers;if(r)for(let e in r){let i=r[e];i&&n(e).handlers.push(Pa(t.value,i))}if(i)for(let e in i){let r=i[e];r&&n(e).observers.push(Pa(t.value,r))}}for(let e in qa)n(e).handlers.push(qa[e]);for(let e in Ja)n(e).observers.push(Ja[e]);return t}var Ia=[{key:`Backspace`,keyCode:8,inputType:`deleteContentBackward`},{key:`Enter`,keyCode:13,inputType:`insertParagraph`},{key:`Enter`,keyCode:13,inputType:`insertLineBreak`},{key:`Delete`,keyCode:46,inputType:`deleteContentForward`}],La=`dthko`,Ra=[16,17,18,20,91,92,224,225],za=6;function Ba(e){return Math.max(0,e)*.7+8}function Va(e,t){return Math.max(Math.abs(e.clientX-t.clientX),Math.abs(e.clientY-t.clientY))}var Ha=class{constructor(e,t,n,r){this.view=e,this.startEvent=t,this.style=n,this.mustSelect=r,this.scrollSpeed={x:0,y:0},this.scrolling=-1,this.lastEvent=t,this.scrollParents=ir(e.contentDOM),this.atoms=e.state.facet(di).map(t=>t(e));let i=e.contentDOM.ownerDocument;i.addEventListener(`mousemove`,this.move=this.move.bind(this)),i.addEventListener(`mouseup`,this.up=this.up.bind(this)),this.extend=t.shiftKey,this.multiple=e.state.facet(O.allowMultipleSelections)&&Ua(e,t),this.dragging=Ga(e,t)&&io(t)==1?null:!1}start(e){this.dragging===!1&&this.select(e)}move(e){if(e.buttons==0)return this.destroy();if(this.dragging||this.dragging==null&&Va(this.startEvent,e)<10)return;this.select(this.lastEvent=e);let t=0,n=0,r=0,i=0,a=this.view.win.innerWidth,o=this.view.win.innerHeight;this.scrollParents.x&&({left:r,right:a}=this.scrollParents.x.getBoundingClientRect()),this.scrollParents.y&&({top:i,bottom:o}=this.scrollParents.y.getBoundingClientRect());let s=hi(this.view);e.clientX-s.left<=r+za?t=-Ba(r-e.clientX):e.clientX+s.right>=a-za&&(t=Ba(e.clientX-a)),e.clientY-s.top<=i+za?n=-Ba(i-e.clientY):e.clientY+s.bottom>=o-za&&(n=Ba(e.clientY-o)),this.setScrollSpeed(t,n)}up(e){this.dragging??this.select(this.lastEvent),this.dragging||e.preventDefault(),this.destroy()}destroy(){this.setScrollSpeed(0,0);let e=this.view.contentDOM.ownerDocument;e.removeEventListener(`mousemove`,this.move),e.removeEventListener(`mouseup`,this.up),this.view.inputState.mouseSelection=this.view.inputState.draggedContent=null}setScrollSpeed(e,t){this.scrollSpeed={x:e,y:t},e||t?this.scrolling<0&&(this.scrolling=setInterval(()=>this.scroll(),50)):this.scrolling>-1&&(clearInterval(this.scrolling),this.scrolling=-1)}scroll(){let{x:e,y:t}=this.scrollSpeed;e&&this.scrollParents.x&&(this.scrollParents.x.scrollLeft+=e,e=0),t&&this.scrollParents.y&&(this.scrollParents.y.scrollTop+=t,t=0),(e||t)&&this.view.win.scrollBy(e,t),this.dragging===!1&&this.select(this.lastEvent)}select(e){let{view:t}=this,n=pa(this.atoms,this.style.get(e,this.extend,this.multiple));(this.mustSelect||!n.eq(t.state.selection,this.dragging===!1))&&this.view.dispatch({selection:n,userEvent:`select.pointer`}),this.mustSelect=!1}update(e){e.transactions.some(e=>e.isUserEvent(`input.type`))?this.destroy():this.style.update(e)&&setTimeout(()=>this.select(this.lastEvent),20)}};function Ua(e,t){let n=e.state.facet(Br);return n.length?n[0](t):j.mac?t.metaKey:t.ctrlKey}function Wa(e,t){let n=e.state.facet(Vr);return n.length?n[0](t):j.mac?!t.altKey:!t.ctrlKey}function Ga(e,t){let{main:n}=e.state.selection;if(n.empty)return!1;let r=Gn(e.root);if(!r||r.rangeCount==0)return!0;let i=r.getRangeAt(0).getClientRects();for(let e=0;e<i.length;e++){let n=i[e];if(n.left<=t.clientX&&n.right>=t.clientX&&n.top<=t.clientY&&n.bottom>=t.clientY)return!0}return!1}function Ka(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let n=t.target,r;n!=e.contentDOM;n=n.parentNode)if(!n||n.nodeType==11||(r=R.get(n))&&r.isWidget()&&!r.isHidden&&r.widget.ignoreEvent(t))return!1;return!0}var qa=Object.create(null),Ja=Object.create(null),Ya=j.ie&&j.ie_version<15||j.ios&&j.webkit_version<604;function Xa(e){let t=e.dom.parentNode;if(!t)return;let n=t.appendChild(document.createElement(`textarea`));n.style.cssText=`position: fixed; left: -10000px; top: 10px`,n.focus(),setTimeout(()=>{e.focus(),n.remove(),Qa(e,n.value)},50)}function Za(e,t,n){for(let r of e.facet(t))n=r(n,e);return n}function Qa(e,t){t=Za(e.state,qr,t);let{state:n}=e,r,i=1,a=n.toText(t),o=a.lines==n.selection.ranges.length;if(uo!=null&&n.selection.ranges.every(e=>e.empty)&&uo==a.toString()){let e=-1;r=n.changeByRange(r=>{let s=n.doc.lineAt(r.from);if(s.from==e)return{range:r};e=s.from;let c=n.toText((o?a.line(i++).text:t)+n.lineBreak);return{changes:{from:s.from,insert:c},range:w.cursor(r.from+c.length,-1)}})}else r=o?n.changeByRange(e=>{let t=a.line(i++);return{changes:{from:e.from,to:e.to,insert:t.text},range:w.cursor(e.from+t.length,-1)}}):n.replaceSelection(a);e.dispatch(r,{userEvent:`input.paste`,scrollIntoView:!0})}Ja.scroll=e=>{let t=e.inputState;t.lastScrollTop=e.scrollDOM.scrollTop,t.lastScrollLeft=e.scrollDOM.scrollLeft,j.ios&&!t.touchActive&&(t.lastIOSMomentumScroll=Date.now())},Ja.wheel=Ja.mousewheel=e=>{e.inputState.lastWheelEvent=Date.now()},qa.keydown=(e,t)=>(e.inputState.setSelectionOrigin(`select`),t.keyCode==27&&e.inputState.tabFocusMode!=0&&(e.inputState.tabFocusMode=Date.now()+2e3),!1),Ja.touchstart=(e,t)=>{let n=e.inputState,r=t.targetTouches[0];n.touchActive=!0,n.lastTouchTime=Date.now(),r&&(n.lastTouchX=r.clientX,n.lastTouchY=r.clientY),n.setSelectionOrigin(`select.pointer`)},Ja.touchmove=e=>{e.inputState.setSelectionOrigin(`select.pointer`)},Ja.touchend=(e,t)=>{e.inputState.touchActive=!1},qa.mousedown=(e,t)=>{if(e.observer.flush(),e.inputState.lastTouchTime>Date.now()-2e3)return!1;let n=null;for(let r of e.state.facet(Hr))if(n=r(e,t),n)break;if(!n&&t.button==0&&(n=ao(e,t)),n){let r=!e.hasFocus;e.inputState.startMouseSelection(new Ha(e,t,n,r)),r&&e.observer.ignore(()=>{lr(e.contentDOM);let t=e.root.activeElement;t&&!t.contains(e.contentDOM)&&t.blur()});let i=e.inputState.mouseSelection;if(i)return i.start(t),i.dragging===!1}else e.inputState.setSelectionOrigin(`select.pointer`);return!1};function $a(e,t,n,r){if(r==1)return w.cursor(t,n);if(r==2)return aa(e.state,t,n);{let r=e.docView.lineAt(t,n),i=e.state.doc.lineAt(r?r.posAtEnd:t),a=r?r.posAtStart:i.from,o=r?r.posAtEnd:i.to;return o<e.state.doc.length&&o==i.to&&o++,w.undirectionalRange(a,o)}}var eo=j.ie&&j.ie_version<=11,to=null,no=0,ro=0;function io(e){if(!eo)return e.detail;let t=to,n=ro;return to=e,ro=Date.now(),no=!t||n>Date.now()-400&&Math.abs(t.clientX-e.clientX)<2&&Math.abs(t.clientY-e.clientY)<2?(no+1)%3:1}function ao(e,t){let n=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),r=io(t),i=e.state.selection;return{update(e){e.docChanged&&(n.pos=e.changes.mapPos(n.pos),i=i.map(e.changes))},get(t,a,o){let s=e.posAndSideAtCoords({x:t.clientX,y:t.clientY},!1),c,l=$a(e,s.pos,s.assoc,r);if(n.pos!=s.pos&&!a){let t=$a(e,n.pos,n.assoc,r),i=Math.min(t.from,l.from),a=Math.max(t.to,l.to);l=i<l.from?w.range(i,a,l.assoc):w.range(a,i,l.assoc)}return a?i.replaceRange(i.main.extend(l.from,l.to,l.assoc)):o&&r==1&&i.ranges.length>1&&(c=oo(i,s.pos))?c:o?i.addRange(l):w.create([l])}}}function oo(e,t){for(let n=0;n<e.ranges.length;n++){let{from:r,to:i}=e.ranges[n];if(r<=t&&i>=t)return w.create(e.ranges.slice(0,n).concat(e.ranges.slice(n+1)),e.mainIndex==n?0:e.mainIndex-+(e.mainIndex>n))}return null}qa.dragstart=(e,t)=>{let{selection:{main:n}}=e.state;if(t.target.draggable){let r=e.docView.tile.nearest(t.target);if(r&&r.isWidget()){let e=r.posAtStart,t=e+r.length;(e>=n.to||t<=n.from)&&(n=w.undirectionalRange(e,t))}}let{inputState:r}=e;return r.mouseSelection&&(r.mouseSelection.dragging=!0),r.draggedContent=n,t.dataTransfer&&(t.dataTransfer.setData(`Text`,Za(e.state,Jr,e.state.sliceDoc(n.from,n.to))),t.dataTransfer.effectAllowed=`copyMove`),!1},qa.dragend=e=>(e.inputState.draggedContent=null,!1);function so(e,t,n,r){if(n=Za(e.state,qr,n),!n)return;let i=e.posAtCoords({x:t.clientX,y:t.clientY},!1),{draggedContent:a}=e.inputState,o=r&&a&&Wa(e,t)?{from:a.from,to:a.to}:null,s={from:i,insert:n},c=e.state.changes(o?[o,s]:s);e.focus(),e.dispatch({changes:c,selection:{anchor:c.mapPos(i,-1),head:c.mapPos(i,1)},userEvent:o?`move.drop`:`input.drop`}),e.inputState.draggedContent=null}qa.drop=(e,t)=>{if(!t.dataTransfer)return!1;if(e.state.readOnly)return!0;let n=t.dataTransfer.files;if(n&&n.length){let r=Array(n.length),i=0,a=()=>{++i==n.length&&so(e,t,r.filter(e=>e!=null).join(e.state.lineBreak),!1)};for(let e=0;e<n.length;e++){let t=new FileReader;t.onerror=a,t.onload=()=>{/[\x00-\x08\x0e-\x1f]{2}/.test(t.result)||(r[e]=t.result),a()},t.readAsText(n[e])}return!0}{let n=t.dataTransfer.getData(`Text`);if(n)return so(e,t,n,!0),!0}return!1},qa.paste=(e,t)=>{if(e.state.readOnly)return!0;e.observer.flush();let n=Ya?null:t.clipboardData;return n?(Qa(e,n.getData(`text/plain`)||n.getData(`text/uri-list`)),!0):(Xa(e),!1)};function co(e,t){let n=e.dom.parentNode;if(!n)return;let r=n.appendChild(document.createElement(`textarea`));r.style.cssText=`position: fixed; left: -10000px; top: 10px`,r.value=t,r.focus(),r.selectionEnd=t.length,r.selectionStart=0,setTimeout(()=>{r.remove(),e.focus()},50)}function lo(e){let t=[],n=[],r=!1;for(let r of e.selection.ranges)r.empty||(t.push(e.sliceDoc(r.from,r.to)),n.push(r));if(!t.length){let i=-1;for(let{from:r}of e.selection.ranges){let a=e.doc.lineAt(r);a.number>i&&(t.push(a.text),n.push({from:a.from,to:Math.min(e.doc.length,a.to+1)})),i=a.number}r=!0}return{text:Za(e,Jr,t.join(e.lineBreak)),ranges:n,linewise:r}}var uo=null;qa.copy=qa.cut=(e,t)=>{if(!qn(e.contentDOM,e.observer.selectionRange))return!1;let{text:n,ranges:r,linewise:i}=lo(e.state);if(!n&&!i)return!1;uo=i?n:null,t.type==`cut`&&!e.state.readOnly&&e.dispatch({changes:r,scrollIntoView:!0,userEvent:`delete.cut`});let a=Ya?null:t.clipboardData;return a?(a.clearData(),a.setData(`text/plain`,n),!0):(co(e,n),!1)};var fo=bt.define();function po(e,t){let n=[];for(let r of e.facet(Kr)){let i=r(e,t);i&&n.push(i)}return n.length?e.update({effects:n,annotations:fo.of(!0)}):null}function mo(e){setTimeout(()=>{let t=e.hasFocus;if(t!=e.inputState.notifiedFocused){let n=po(e.state,t);n?e.dispatch(n):e.update([])}},10)}Ja.focus=e=>{e.inputState.lastFocusTime=Date.now(),!e.scrollDOM.scrollTop&&(e.inputState.lastScrollTop||e.inputState.lastScrollLeft)&&(e.scrollDOM.scrollTop=e.inputState.lastScrollTop,e.scrollDOM.scrollLeft=e.inputState.lastScrollLeft),mo(e)},Ja.blur=e=>{e.observer.clearSelectionRange(),mo(e)},Ja.compositionstart=Ja.compositionupdate=(e,t)=>{if(!e.observer.editContext&&(e.inputState.compositionFirstChange??(e.inputState.compositionFirstChange=!0),e.inputState.composing<0)){let{main:t}=e.state.selection;!t.empty&&e.lineBlockAt(t.from).from!=e.lineBlockAt(t.to).from&&!e.state.readOnly&&e.dispatch({changes:e.state.selection.ranges.filter(e=>!e.empty).map(e=>({from:e.from,to:e.to})),userEvent:`input`}),e.inputState.composing=0}},Ja.compositionend=e=>{e.observer.editContext||(e.inputState.composing=-1,e.inputState.compositionEndedAt=Date.now(),e.inputState.compositionPendingKey=!0,e.inputState.compositionPendingChange=e.observer.pendingRecords().length>0,e.inputState.compositionFirstChange=null,j.chrome&&j.android?e.observer.flushSoon():e.inputState.compositionPendingChange?Promise.resolve().then(()=>e.observer.flush()):setTimeout(()=>{e.inputState.composing<0&&e.docView.hasComposition&&e.update([])},50))},Ja.contextmenu=e=>{e.inputState.lastContextMenu=Date.now()},qa.beforeinput=(e,t)=>{if((t.inputType==`insertText`||t.inputType==`insertCompositionText`)&&(e.inputState.insertingText=t.data,e.inputState.insertingTextAt=Date.now()),t.inputType==`insertReplacementText`&&e.observer.editContext){let n=t.dataTransfer?.getData(`text/plain`),r=t.getTargetRanges();if(n&&r.length){let t=r[0];return Ea(e,{from:e.posAtDOM(t.startContainer,t.startOffset),to:e.posAtDOM(t.endContainer,t.endOffset),insert:e.state.toText(n)},null),!0}}let n;if(j.chrome&&j.android&&(n=Ia.find(e=>e.inputType==t.inputType))&&(e.observer.delayAndroidKey(n.key,n.keyCode),n.key==`Backspace`||n.key==`Delete`)){let t=window.visualViewport?.height||0;setTimeout(()=>{(window.visualViewport?.height||0)>t+10&&e.hasFocus&&(e.contentDOM.blur(),e.focus())},100)}return j.ios&&t.inputType==`deleteContentForward`&&e.observer.flushSoon(),j.safari&&t.inputType==`insertText`&&e.inputState.composing>=0&&setTimeout(()=>Ja.compositionend(e,t),20),!1};var ho=new Set;function go(e){ho.has(e)||(ho.add(e),e.addEventListener(`copy`,()=>{}),e.addEventListener(`cut`,()=>{}))}var _o=[`pre-wrap`,`normal`,`pre-line`,`break-spaces`],vo=!1;function yo(){vo=!1}var bo=class{constructor(e){this.lineWrapping=e,this.doc=x.empty,this.heightSamples={},this.lineHeight=14,this.charWidth=7,this.textHeight=14,this.lineLength=30}heightForGap(e,t){let n=this.doc.lineAt(t).number-this.doc.lineAt(e).number+1;return this.lineWrapping&&(n+=Math.max(0,Math.ceil((t-e-n*this.lineLength*.5)/this.lineLength))),this.lineHeight*n}heightForLine(e){return this.lineWrapping?(1+Math.max(0,Math.ceil((e-this.lineLength)/Math.max(1,this.lineLength-5))))*this.lineHeight:this.lineHeight}setDoc(e){return this.doc=e,this}mustRefreshForWrapping(e){return _o.indexOf(e)>-1!=this.lineWrapping}mustRefreshForHeights(e){let t=!1;for(let n=0;n<e.length;n++){let r=e[n];r<0?n++:this.heightSamples[Math.floor(r*10)]||(t=!0,this.heightSamples[Math.floor(r*10)]=!0)}return t}refresh(e,t,n,r,i,a){let o=_o.indexOf(e)>-1,s=Math.abs(t-this.lineHeight)>.3||this.lineWrapping!=o;if(this.lineWrapping=o,this.lineHeight=t,this.charWidth=n,this.textHeight=r,this.lineLength=i,s){this.heightSamples={};for(let e=0;e<a.length;e++){let t=a[e];t<0?e++:this.heightSamples[Math.floor(t*10)]=!0}}return s}},xo=class{constructor(e,t){this.from=e,this.heights=t,this.index=0}get more(){return this.index<this.heights.length}},So=class e{constructor(e,t,n,r,i){this.from=e,this.length=t,this.top=n,this.height=r,this._content=i}get type(){return typeof this._content==`number`?M.Text:Array.isArray(this._content)?this._content:this._content.type}get to(){return this.from+this.length}get bottom(){return this.top+this.height}get widget(){return this._content instanceof zn?this._content.widget:null}get widgetLineBreaks(){return typeof this._content==`number`?this._content:0}join(t){let n=(Array.isArray(this._content)?this._content:[this]).concat(Array.isArray(t._content)?t._content:[t]);return new e(this.from,this.length+t.length,this.top,this.height+t.height,n)}},z=(function(e){return e[e.ByPos=0]=`ByPos`,e[e.ByHeight=1]=`ByHeight`,e[e.ByPosNoHeight=2]=`ByPosNoHeight`,e})(z||(z={})),Co=.001,wo=class e{constructor(e,t,n=2){this.length=e,this.height=t,this.flags=n}get outdated(){return(this.flags&2)>0}set outdated(e){this.flags=(e?2:0)|this.flags&-3}setHeight(e){this.height!=e&&(Math.abs(this.height-e)>Co&&(vo=!0),this.height=e)}replace(t,n,r){return e.of(r)}decomposeLeft(e,t){t.push(this)}decomposeRight(e,t){t.push(this)}applyChanges(e,t,n,r){let i=this,a=n.doc;for(let o=r.length-1;o>=0;o--){let{fromA:s,toA:c,fromB:l,toB:u}=r[o],d=i.lineAt(s,z.ByPosNoHeight,n.setDoc(t),0,0),f=d.to>=c?d:i.lineAt(c,z.ByPosNoHeight,n,0,0);for(u+=f.to-c,c=f.to;o>0&&d.from<=r[o-1].toA;)s=r[o-1].fromA,l=r[o-1].fromB,o--,s<d.from&&(d=i.lineAt(s,z.ByPosNoHeight,n,0,0));l+=d.from-s,s=d.from;let p=No.build(n.setDoc(a),e,l,u);i=To(i,i.replace(s,c,p))}return i.updateHeight(n,0)}static empty(){return new Oo(0,0,0)}static of(t){if(t.length==1)return t[0];let n=0,r=t.length,i=0,a=0;for(;;)if(n==r){if(i>a*2){let e=t[n-1];e.break?t.splice(--n,1,e.left,null,e.right):t.splice(--n,1,e.left,e.right),r+=1+e.break,i-=e.size}else if(a>i*2){let e=t[r];e.break?t.splice(r,1,e.left,null,e.right):t.splice(r,1,e.left,e.right),r+=2+e.break,a-=e.size}else break}else if(i<a){let e=t[n++];e&&(i+=e.size)}else{let e=t[--r];e&&(a+=e.size)}let o=!1;return t[n-1]==null?(o=!0,n--):t[n]??(o=!0,r++),new Ao(e.of(t.slice(0,n)),o,e.of(t.slice(r)))}};function To(e,t){return e==t?e:(e.constructor!=t.constructor&&(vo=!0),t)}wo.prototype.size=1;var Eo=N.replace({}),Do=class extends wo{constructor(e,t,n){super(e,t),this.deco=n,this.spaceAbove=0}mainBlock(e,t){return new So(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.deco||0)}blockAt(e,t,n,r){return this.spaceAbove&&e<n+this.spaceAbove?new So(r,0,n,this.spaceAbove,Eo):this.mainBlock(n,r)}lineAt(e,t,n,r,i){let a=this.mainBlock(r,i);return this.spaceAbove?this.blockAt(0,n,r,i).join(a):a}forEachLine(e,t,n,r,i,a){e<=i+this.length&&t>=i&&a(this.lineAt(0,z.ByPos,n,r,i))}setMeasuredHeight(e){let t=e.heights[e.index++];t<0?(this.spaceAbove=-t,t=e.heights[e.index++]):this.spaceAbove=0,this.setHeight(t)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more&&this.setMeasuredHeight(r),this.outdated=!1,this}toString(){return`block(${this.length})`}},Oo=class e extends Do{constructor(e,t,n){super(e,t,null),this.collapsed=0,this.widgetHeight=0,this.breaks=0,this.spaceAbove=n}mainBlock(e,t){return new So(t,this.length,e+this.spaceAbove,this.height-this.spaceAbove,this.breaks)}replace(t,n,r){let i=r[0];return r.length==1&&(i instanceof e||i instanceof ko&&i.flags&4)&&Math.abs(this.length-i.length)<10?(i instanceof ko?i=new e(i.length,this.height,this.spaceAbove):i.height=this.height,this.outdated||(i.outdated=!1),i):wo.of(r)}updateHeight(e,t=0,n=!1,r){return r&&r.from<=t&&r.more?this.setMeasuredHeight(r):(n||this.outdated)&&(this.spaceAbove=0,this.setHeight(Math.max(this.widgetHeight,e.heightForLine(this.length-this.collapsed))+this.breaks*e.lineHeight)),this.outdated=!1,this}toString(){return`line(${this.length}${this.collapsed?-this.collapsed:``}${this.widgetHeight?`:`+this.widgetHeight:``})`}},ko=class e extends wo{constructor(e){super(e,0)}heightMetrics(e,t){let n=e.doc.lineAt(t).number,r=e.doc.lineAt(t+this.length).number,i=r-n+1,a,o=0;if(e.lineWrapping){let t=Math.min(this.height,e.lineHeight*i);a=t/i,this.length>i+1&&(o=(this.height-t)/(this.length-i-1))}else a=this.height/i;return{firstLine:n,lastLine:r,perLine:a,perChar:o}}blockAt(e,t,n,r){let{firstLine:i,lastLine:a,perLine:o,perChar:s}=this.heightMetrics(t,r);if(t.lineWrapping){let i=r+(e<t.lineHeight?0:Math.round(Math.max(0,Math.min(1,(e-n)/this.height))*this.length)),a=t.doc.lineAt(i),c=o+a.length*s,l=Math.max(n,e-c/2);return new So(a.from,a.length,l,c,0)}{let r=Math.max(0,Math.min(a-i,Math.floor((e-n)/o))),{from:s,length:c}=t.doc.line(i+r);return new So(s,c,n+o*r,o,0)}}lineAt(e,t,n,r,i){if(t==z.ByHeight)return this.blockAt(e,n,r,i);if(t==z.ByPosNoHeight){let{from:t,to:r}=n.doc.lineAt(e);return new So(t,r-t,0,0,0)}let{firstLine:a,perLine:o,perChar:s}=this.heightMetrics(n,i),c=n.doc.lineAt(e),l=o+c.length*s,u=c.number-a,d=r+o*u+s*(c.from-i-u);return new So(c.from,c.length,Math.max(r,Math.min(d,r+this.height-l)),l,0)}forEachLine(e,t,n,r,i,a){e=Math.max(e,i),t=Math.min(t,i+this.length);let{firstLine:o,perLine:s,perChar:c}=this.heightMetrics(n,i);for(let l=e,u=r;l<=t;){let t=n.doc.lineAt(l);if(l==e){let n=t.number-o;u+=s*n+c*(e-i-n)}let r=s+c*t.length;a(new So(t.from,t.length,u,r,0)),u+=r,l=t.to+1}}replace(t,n,r){let i=this.length-n;if(i>0){let t=r[r.length-1];t instanceof e?r[r.length-1]=new e(t.length+i):r.push(null,new e(i-1))}if(t>0){let n=r[0];n instanceof e?r[0]=new e(t+n.length):r.unshift(new e(t-1),null)}return wo.of(r)}decomposeLeft(t,n){n.push(new e(t-1),null)}decomposeRight(t,n){n.push(null,new e(this.length-t-1))}updateHeight(t,n=0,r=!1,i){let a=n+this.length;if(i&&i.from<=n+this.length&&i.more){let r=[],o=Math.max(n,i.from),s=-1;for(i.from>n&&r.push(new e(i.from-n-1).updateHeight(t,n));o<=a&&i.more;){let e=t.doc.lineAt(o).length;r.length&&r.push(null);let n=i.heights[i.index++],a=0;n<0&&(a=-n,n=i.heights[i.index++]),s==-1?s=n:Math.abs(n-s)>=Co&&(s=-2);let c=new Oo(e,n,a);c.outdated=!1,r.push(c),o+=e+1}o<=a&&r.push(null,new e(a-o).updateHeight(t,o));let c=wo.of(r);return(s<0||Math.abs(c.height-this.height)>=Co||Math.abs(s-this.heightMetrics(t,n).perLine)>=Co)&&(vo=!0),To(this,c)}return(r||this.outdated)&&(this.setHeight(t.heightForGap(n,n+this.length)),this.outdated=!1),this}toString(){return`gap(${this.length})`}},Ao=class extends wo{constructor(e,t,n){super(e.length+ +!!t+n.length,e.height+n.height,+!!t|(e.outdated||n.outdated?2:0)),this.left=e,this.right=n,this.size=e.size+n.size}get break(){return this.flags&1}blockAt(e,t,n,r){let i=n+this.left.height;return e<i?this.left.blockAt(e,t,n,r):this.right.blockAt(e,t,i,r+this.left.length+this.break)}lineAt(e,t,n,r,i){let a=r+this.left.height,o=i+this.left.length+this.break,s=t==z.ByHeight?e<a:e<o,c=s?this.left.lineAt(e,t,n,r,i):this.right.lineAt(e,t,n,a,o);if(this.break||(s?c.to<o:c.from>o))return c;let l=t==z.ByPosNoHeight?z.ByPosNoHeight:z.ByPos;return s?c.join(this.right.lineAt(o,l,n,a,o)):this.left.lineAt(o,l,n,r,i).join(c)}forEachLine(e,t,n,r,i,a){let o=r+this.left.height,s=i+this.left.length+this.break;if(this.break)e<s&&this.left.forEachLine(e,t,n,r,i,a),t>=s&&this.right.forEachLine(e,t,n,o,s,a);else{let c=this.lineAt(s,z.ByPos,n,r,i);e<c.from&&this.left.forEachLine(e,Math.min(t,c.from-1),n,r,i,a),c.to>=e&&c.from<=t&&a(c),t>c.to&&this.right.forEachLine(Math.max(e,c.to+1),t,n,o,s,a)}}replace(e,t,n){let r=this.left.length+this.break;if(t<r)return this.balanced(this.left.replace(e,t,n),this.right);if(e>this.left.length)return this.balanced(this.left,this.right.replace(e-r,t-r,n));let i=[];e>0&&this.decomposeLeft(e,i);let a=i.length;for(let e of n)i.push(e);if(e>0&&jo(i,a-1),t<this.length){let e=i.length;this.decomposeRight(t,i),jo(i,e)}return wo.of(i)}decomposeLeft(e,t){let n=this.left.length;if(e<=n)return this.left.decomposeLeft(e,t);t.push(this.left),this.break&&(n++,e>=n&&t.push(null)),e>n&&this.right.decomposeLeft(e-n,t)}decomposeRight(e,t){let n=this.left.length,r=n+this.break;if(e>=r)return this.right.decomposeRight(e-r,t);e<n&&this.left.decomposeRight(e,t),this.break&&e<r&&t.push(null),t.push(this.right)}balanced(e,t){return e.size>2*t.size||t.size>2*e.size?wo.of(this.break?[e,null,t]:[e,t]):(this.left=To(this.left,e),this.right=To(this.right,t),this.setHeight(e.height+t.height),this.outdated=e.outdated||t.outdated,this.size=e.size+t.size,this.length=e.length+this.break+t.length,this)}updateHeight(e,t=0,n=!1,r){let{left:i,right:a}=this,o=t+i.length+this.break,s=null;return r&&r.from<=t+i.length&&r.more?s=i=i.updateHeight(e,t,n,r):i.updateHeight(e,t,n),r&&r.from<=o+a.length&&r.more?s=a=a.updateHeight(e,o,n,r):a.updateHeight(e,o,n),s?this.balanced(i,a):(this.height=this.left.height+this.right.height,this.outdated=!1,this)}toString(){return this.left+(this.break?` `:`-`)+this.right}};function jo(e,t){let n,r;e[t]==null&&(n=e[t-1])instanceof ko&&(r=e[t+1])instanceof ko&&e.splice(t-1,3,new ko(n.length+1+r.length))}var Mo=5,No=class e{constructor(e,t){this.pos=e,this.oracle=t,this.nodes=[],this.lineStart=-1,this.lineEnd=-1,this.covering=null,this.writtenTo=e}get isCovered(){return this.covering&&this.nodes[this.nodes.length-1]==this.covering}span(e,t){if(this.lineStart>-1){let e=Math.min(t,this.lineEnd),n=this.nodes[this.nodes.length-1];n instanceof Oo?n.length+=e-this.pos:(e>this.pos||!this.isCovered)&&this.nodes.push(new Oo(e-this.pos,-1,0)),this.writtenTo=e,t>e&&(this.nodes.push(null),this.writtenTo++,this.lineStart=-1)}this.pos=t}point(e,t,n){if(e<t||n.heightRelevant){let r=n.widget?n.widget.estimatedHeight:0,i=n.widget?n.widget.lineBreaks:0;r<0&&(r=this.oracle.lineHeight);let a=t-e;n.block?this.addBlock(new Do(a,r,n)):(a||i||r>=Mo)&&this.addLineDeco(r,i,a)}else t>e&&this.span(e,t);this.lineEnd>-1&&this.lineEnd<this.pos&&(this.lineEnd=this.oracle.doc.lineAt(this.pos).to)}enterLine(){if(this.lineStart>-1)return;let{from:e,to:t}=this.oracle.doc.lineAt(this.pos);this.lineStart=e,this.lineEnd=t,this.writtenTo<e&&((this.writtenTo<e-1||this.nodes[this.nodes.length-1]==null)&&this.nodes.push(this.blankContent(this.writtenTo,e-1)),this.nodes.push(null)),this.pos>e&&this.nodes.push(new Oo(this.pos-e,-1,0)),this.writtenTo=this.pos}blankContent(e,t){let n=new ko(t-e);return this.oracle.doc.lineAt(e).to==t&&(n.flags|=4),n}ensureLine(){this.enterLine();let e=this.nodes.length?this.nodes[this.nodes.length-1]:null;if(e instanceof Oo)return e;let t=new Oo(0,-1,0);return this.nodes.push(t),t}addBlock(e){this.enterLine();let t=e.deco;t&&t.startSide>0&&!this.isCovered&&this.ensureLine(),this.nodes.push(e),this.writtenTo=this.pos+=e.length,t&&t.endSide>0&&(this.covering=e)}addLineDeco(e,t,n){let r=this.ensureLine();r.length+=n,r.collapsed+=n,r.widgetHeight=Math.max(r.widgetHeight,e),r.breaks+=t,this.writtenTo=this.pos+=n}finish(e){let t=this.nodes.length==0?null:this.nodes[this.nodes.length-1];this.lineStart>-1&&!(t instanceof Oo)&&!this.isCovered?this.nodes.push(new Oo(0,-1,0)):(this.writtenTo<this.pos||t==null)&&this.nodes.push(this.blankContent(this.writtenTo,this.pos));let n=e;for(let e of this.nodes)e instanceof Oo&&e.updateHeight(this.oracle,n),n+=e?e.length:1;return this.nodes}static build(t,n,r,i){let a=new e(r,t);return k.spans(n,r,i,a,0),a.finish(r)}};function Po(e,t,n){let r=new Fo;return k.compare(e,t,n,r,0),r.changes}var Fo=class{constructor(){this.changes=[]}compareRange(){}comparePoint(e,t,n,r){(e<t||n&&n.heightRelevant||r&&r.heightRelevant)&&Hn(e,t,this.changes,5)}};function Io(e,t){let n=e.getBoundingClientRect(),r=e.ownerDocument,i=r.defaultView||window,a=Math.max(0,n.left),o=Math.min(i.innerWidth,n.right),s=Math.max(0,n.top),c=Math.min(i.innerHeight,n.bottom);for(let t=e.parentNode;t&&t!=r.body;)if(P(t)){let n=window.getComputedStyle(t);if((t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth)&&n.overflow!=`visible`){let n=t.getBoundingClientRect();a=Math.max(a,n.left),o=Math.min(o,n.right),s=Math.max(s,n.top),c=Math.min(t==e.parentNode?i.innerHeight:c,n.bottom)}t=n.position==`absolute`||n.position==`fixed`?t.offsetParent:t.parentNode}else if(t.nodeType==11)t=t.host;else break;return{left:a-n.left,right:Math.max(a,o)-n.left,top:s-(n.top+t),bottom:Math.max(s,c)-(n.top+t)}}function Lo(e){let t=e.getBoundingClientRect(),n=e.ownerDocument.defaultView||window;return t.left<n.innerWidth&&t.right>0&&t.top<n.innerHeight&&t.bottom>0}function Ro(e,t){let n=e.getBoundingClientRect();return{left:0,right:n.right-n.left,top:t,bottom:n.bottom-(n.top+t)}}var zo=class{constructor(e,t,n,r){this.from=e,this.to=t,this.size=n,this.displaySize=r}static same(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++){let r=e[n],i=t[n];if(r.from!=i.from||r.to!=i.to||r.size!=i.size)return!1}return!0}draw(e,t){return N.replace({widget:new Bo(this.displaySize*(t?e.scaleY:e.scaleX),t)}).range(this.from,this.to)}},Bo=class extends In{constructor(e,t){super(),this.size=e,this.vertical=t}eq(e){return e.size==this.size&&e.vertical==this.vertical}toDOM(){let e=document.createElement(`div`);return this.vertical?e.style.height=this.size+`px`:(e.style.width=this.size+`px`,e.style.height=`2px`,e.style.display=`inline-block`),e}get estimatedHeight(){return this.vertical?this.size:-1}},Vo=class{constructor(e,t){this.view=e,this.state=t,this.pixelViewport={left:0,right:window.innerWidth,top:0,bottom:0},this.inView=!0,this.paddingTop=0,this.paddingBottom=0,this.contentDOMWidth=0,this.contentDOMHeight=0,this.editorHeight=0,this.editorWidth=0,this.scaleX=1,this.scaleY=1,this.scrollOffset=0,this.scrolledToBottom=!1,this.scrollAnchorPos=0,this.scrollAnchorHeight=-1,this.scaler=qo,this.scrollTarget=null,this.printing=!1,this.mustMeasureContent=!0,this.defaultTextDirection=F.LTR,this.visibleRanges=[],this.mustEnforceCursorAssoc=!1;let n=t.facet(si).some(e=>typeof e!=`function`&&e.class==`cm-lineWrapping`);this.heightOracle=new bo(n),this.stateDeco=Jo(t),this.heightMap=wo.empty().applyChanges(this.stateDeco,x.empty,this.heightOracle.setDoc(t.doc),[new _i(0,0,0,t.doc.length)]);for(let e=0;e<2&&(this.viewport=this.getViewport(0,null),this.updateForViewport());e++);this.updateViewportLines(),this.lineGaps=this.ensureLineGaps([]),this.lineGapDeco=N.set(this.lineGaps.map(e=>e.draw(this,!1))),this.scrollParent=e.scrollDOM,this.computeVisibleRanges()}updateForViewport(){let e=[this.viewport],{main:t}=this.state.selection;for(let n=0;n<=1;n++){let r=n?t.head:t.anchor;if(!e.some(({from:e,to:t})=>r>=e&&r<=t)){let{from:t,to:n}=this.lineBlockAt(r);e.push(new Ho(t,n))}}return this.viewports=e.sort((e,t)=>e.from-t.from),this.updateScaler()}updateScaler(){let e=this.scaler;return this.scaler=this.heightMap.height<=7e6?qo:new Yo(this.heightOracle,this.heightMap,this.viewports),e.eq(this.scaler)?0:2}updateViewportLines(){this.viewportLines=[],this.heightMap.forEachLine(this.viewport.from,this.viewport.to,this.heightOracle.setDoc(this.state.doc),0,0,e=>{this.viewportLines.push(Xo(e,this.scaler))})}update(e,t=null){this.state=e.state;let n=this.stateDeco;this.stateDeco=Jo(this.state);let r=e.changedRanges,i=_i.extendWithRanges(r,Po(n,this.stateDeco,e?e.changes:Ve.empty(this.state.doc.length))),a=this.heightMap.height,o=this.scrolledToBottom?null:this.scrollAnchorAt(this.scrollOffset);yo(),this.heightMap=this.heightMap.applyChanges(this.stateDeco,e.startState.doc,this.heightOracle.setDoc(this.state.doc),i),(this.heightMap.height!=a||vo)&&(e.flags|=2),o?(this.scrollAnchorPos=e.changes.mapPos(o.from,-1),this.scrollAnchorHeight=o.top):(this.scrollAnchorPos=-1,this.scrollAnchorHeight=a);let s=i.length?this.mapViewport(this.viewport,e.changes):this.viewport;(t&&(t.range.head<s.from||t.range.head>s.to)||!this.viewportIsAppropriate(s))&&(s=this.getViewport(0,t));let c=s.from!=this.viewport.from||s.to!=this.viewport.to;this.viewport=s,e.flags|=this.updateForViewport(),(c||!e.changes.empty||e.flags&2)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps,e.changes))),e.flags|=this.computeVisibleRanges(e.changes),t&&(this.scrollTarget=t),!this.mustEnforceCursorAssoc&&(e.selectionSet||e.focusChanged)&&e.view.lineWrapping&&e.state.selection.main.empty&&e.state.selection.main.assoc&&!e.state.facet(Xr)&&(this.mustEnforceCursorAssoc=!0)}measure(){let{view:e}=this,t=e.contentDOM,n=window.getComputedStyle(t),r=this.heightOracle,i=n.whiteSpace;this.defaultTextDirection=n.direction==`rtl`?F.RTL:F.LTR;let a=this.heightOracle.mustRefreshForWrapping(i)||this.mustMeasureContent===`refresh`,o=t.getBoundingClientRect(),s=a||this.mustMeasureContent||this.contentDOMHeight!=o.height;this.contentDOMHeight=o.height,this.mustMeasureContent=!1;let c=0,l=0;if(o.width&&o.height){let{scaleX:e,scaleY:n}=nr(t,o);(e>.005&&Math.abs(this.scaleX-e)>.005||n>.005&&Math.abs(this.scaleY-n)>.005)&&(this.scaleX=e,this.scaleY=n,c|=16,a=s=!0)}let u=(parseInt(n.paddingTop)||0)*this.scaleY,d=(parseInt(n.paddingBottom)||0)*this.scaleY;(this.paddingTop!=u||this.paddingBottom!=d)&&(this.paddingTop=u,this.paddingBottom=d,c|=18),this.editorWidth!=e.scrollDOM.clientWidth&&(r.lineWrapping&&(s=!0),this.editorWidth=e.scrollDOM.clientWidth,c|=16);let f=ir(this.view.contentDOM,!1).y;f!=this.scrollParent&&(this.scrollParent=f,this.scrollAnchorHeight=-1,this.scrollOffset=0);let p=this.getScrollOffset();this.scrollOffset!=p&&(this.scrollAnchorHeight=-1,this.scrollOffset=p),this.scrolledToBottom=hr(this.scrollParent||e.win);let m=(this.printing?Ro:Io)(t,this.paddingTop),h=m.top-this.pixelViewport.top,g=m.bottom-this.pixelViewport.bottom;this.pixelViewport=m;let _=this.pixelViewport.bottom>this.pixelViewport.top&&this.pixelViewport.right>this.pixelViewport.left;if(_!=this.inView&&(this.inView=_,_&&(s=!0)),!this.inView&&!this.scrollTarget&&!Lo(e.dom))return 0;let v=o.width;if((this.contentDOMWidth!=v||this.editorHeight!=e.scrollDOM.clientHeight)&&(this.contentDOMWidth=o.width,this.editorHeight=e.scrollDOM.clientHeight,c|=16),s){let t=e.docView.measureVisibleLineHeights(this.viewport);if(r.mustRefreshForHeights(t)&&(a=!0),a||r.lineWrapping&&Math.abs(v-this.contentDOMWidth)>r.charWidth){let{lineHeight:n,charWidth:o,textHeight:s}=e.docView.measureTextSize();a=n>0&&r.refresh(i,n,o,s,Math.max(5,v/o),t),a&&(e.docView.minWidth=0,c|=16)}h>0&&g>0?l=Math.max(h,g):h<0&&g<0&&(l=Math.min(h,g)),yo();for(let n of this.viewports){let i=n.from==this.viewport.from?t:e.docView.measureVisibleLineHeights(n);this.heightMap=(a?wo.empty().applyChanges(this.stateDeco,x.empty,this.heightOracle,[new _i(0,0,0,e.state.doc.length)]):this.heightMap).updateHeight(r,0,a,new xo(n.from,i))}vo&&(c|=2)}let y=!this.viewportIsAppropriate(this.viewport,l)||this.scrollTarget&&(this.scrollTarget.range.head<this.viewport.from||this.scrollTarget.range.head>this.viewport.to);return y&&(c&2&&(c|=this.updateScaler()),this.viewport=this.getViewport(l,this.scrollTarget),c|=this.updateForViewport()),(c&2||y)&&this.updateViewportLines(),(this.lineGaps.length||this.viewport.to-this.viewport.from>4e3)&&this.updateLineGaps(this.ensureLineGaps(a?[]:this.lineGaps,e)),c|=this.computeVisibleRanges(),this.mustEnforceCursorAssoc&&(this.mustEnforceCursorAssoc=!1,e.docView.enforceCursorAssoc()),c}get visibleTop(){return this.scaler.fromDOM(this.pixelViewport.top)}get visibleBottom(){return this.scaler.fromDOM(this.pixelViewport.bottom)}getViewport(e,t){let n=.5-Math.max(-.5,Math.min(.5,e/1e3/2)),r=this.heightMap,i=this.heightOracle,{visibleTop:a,visibleBottom:o}=this,s=new Ho(r.lineAt(a-n*1e3,z.ByHeight,i,0,0).from,r.lineAt(o+(1-n)*1e3,z.ByHeight,i,0,0).to);if(t){let{head:e}=t.range;if(e<s.from||e>s.to){let n=Math.min(this.editorHeight,this.pixelViewport.bottom-this.pixelViewport.top),a=r.lineAt(e,z.ByPos,i,0,0),o;o=t.y==`center`?(a.top+a.bottom)/2-n/2:t.y==`start`||t.y==`nearest`&&e<s.from?a.top:a.bottom-n,s=new Ho(r.lineAt(o-500,z.ByHeight,i,0,0).from,r.lineAt(o+n+500,z.ByHeight,i,0,0).to)}}return s}mapViewport(e,t){let n=t.mapPos(e.from,-1),r=t.mapPos(e.to,1);return new Ho(this.heightMap.lineAt(n,z.ByPos,this.heightOracle,0,0).from,this.heightMap.lineAt(r,z.ByPos,this.heightOracle,0,0).to)}viewportIsAppropriate({from:e,to:t},n=0){if(!this.inView)return!0;let{top:r}=this.heightMap.lineAt(e,z.ByPos,this.heightOracle,0,0),{bottom:i}=this.heightMap.lineAt(t,z.ByPos,this.heightOracle,0,0),{visibleTop:a,visibleBottom:o}=this;return(e==0||r<=a-Math.max(10,Math.min(-n,250)))&&(t==this.state.doc.length||i>=o+Math.max(10,Math.min(n,250)))&&r>a-2e3&&i<o+2e3}mapLineGaps(e,t){if(!e.length||t.empty)return e;let n=[];for(let r of e)t.touchesRange(r.from,r.to)||n.push(new zo(t.mapPos(r.from),t.mapPos(r.to),r.size,r.displaySize));return n}ensureLineGaps(e,t){let n=this.heightOracle.lineWrapping,r=n?1e4:2e3,i=r>>1,a=r<<1;if(this.defaultTextDirection!=F.LTR&&!n)return[];let o=[],s=(r,a,c,l)=>{if(a-r<i)return;let u=this.state.selection.main,d=[u.from];u.empty||d.push(u.to);for(let e of d)if(e>r&&e<a){s(r,e-10,c,l),s(e+10,a,c,l);return}let f=Ko(e,e=>e.from>=c.from&&e.to<=c.to&&Math.abs(e.from-r)<i&&Math.abs(e.to-a)<i&&!d.some(t=>e.from<t&&e.to>t));if(!f){if(a<c.to&&t&&n&&t.visibleRanges.some(e=>e.from<=a&&e.to>=a)){let e=t.moveToLineBoundary(w.cursor(a),!1,!0).head;e>r&&(a=e)}let e=this.gapSize(c,r,a,l);f=new zo(r,a,e,n||e<2e6?e:2e6)}o.push(f)},c=t=>{if(t.length<a||t.type!=M.Text)return;let i=Uo(t.from,t.to,this.stateDeco);if(i.total<a)return;let o=this.scrollTarget?this.scrollTarget.range.head:null,c,l;if(n){let e=r/this.heightOracle.lineLength*this.heightOracle.lineHeight,n,a;if(o!=null){let r=Go(i,o),s=((this.visibleBottom-this.visibleTop)/2+e)/t.height;n=r-s,a=r+s}else n=(this.visibleTop-t.top-e)/t.height,a=(this.visibleBottom-t.top+e)/t.height;c=Wo(i,n),l=Wo(i,a)}else{let n=i.total*this.heightOracle.charWidth,a=r*this.heightOracle.charWidth,s=0;if(n>2e6)for(let n of e)n.from>=t.from&&n.from<t.to&&n.size!=n.displaySize&&n.from*this.heightOracle.charWidth+s<this.pixelViewport.left&&(s=n.size-n.displaySize);let u=this.pixelViewport.left+s,d=this.pixelViewport.right+s,f,p;if(o!=null){let e=Go(i,o),t=((d-u)/2+a)/n;f=e-t,p=e+t}else f=(u-a)/n,p=(d+a)/n;c=Wo(i,f),l=Wo(i,p)}c>t.from&&s(t.from,c,t,i),l<t.to&&s(l,t.to,t,i)};for(let e of this.viewportLines)Array.isArray(e.type)?e.type.forEach(c):c(e);return o}gapSize(e,t,n,r){let i=Go(r,n)-Go(r,t);return this.heightOracle.lineWrapping?e.height*i:r.total*this.heightOracle.charWidth*i}updateLineGaps(e){zo.same(e,this.lineGaps)||(this.lineGaps=e,this.lineGapDeco=N.set(e.map(e=>e.draw(this,this.heightOracle.lineWrapping))))}computeVisibleRanges(e){let t=this.stateDeco;this.lineGaps.length&&(t=t.concat(this.lineGapDeco));let n=[];k.spans(t,this.viewport.from,this.viewport.to,{span(e,t){n.push({from:e,to:t})},point(){}},20);let r=0;if(n.length!=this.visibleRanges.length)r=12;else for(let t=0;t<n.length&&!(r&8);t++){let i=this.visibleRanges[t],a=n[t];(i.from!=a.from||i.to!=a.to)&&(r|=4,e&&e.mapPos(i.from,-1)==a.from&&e.mapPos(i.to,1)==a.to||(r|=8))}return this.visibleRanges=n,r}lineBlockAt(e){return e>=this.viewport.from&&e<=this.viewport.to&&this.viewportLines.find(t=>t.from<=e&&t.to>=e)||Xo(this.heightMap.lineAt(e,z.ByPos,this.heightOracle,0,0),this.scaler)}lineBlockAtHeight(e){return e>=this.viewportLines[0].top&&e<=this.viewportLines[this.viewportLines.length-1].bottom&&this.viewportLines.find(t=>t.top<=e&&t.bottom>=e)||Xo(this.heightMap.lineAt(this.scaler.fromDOM(e),z.ByHeight,this.heightOracle,0,0),this.scaler)}getScrollOffset(){return this.scrollParent==this.view.scrollDOM?this.scrollParent.scrollTop*this.scaleY:(this.scrollParent?this.scrollParent.getBoundingClientRect().top:0)-this.view.contentDOM.getBoundingClientRect().top}scrollAnchorAt(e){let t=this.lineBlockAtHeight(e+8);return t.from>=this.viewport.from||this.viewportLines[0].top-e>200?t:this.viewportLines[0]}elementAtHeight(e){return Xo(this.heightMap.blockAt(this.scaler.fromDOM(e),this.heightOracle,0,0),this.scaler)}get docHeight(){return this.scaler.toDOM(this.heightMap.height)}get contentHeight(){return this.docHeight+this.paddingTop+this.paddingBottom}},Ho=class{constructor(e,t){this.from=e,this.to=t}};function Uo(e,t,n){let r=[],i=e,a=0;return k.spans(n,e,t,{span(){},point(e,t){e>i&&(r.push({from:i,to:e}),a+=e-i),i=t}},20),i<t&&(r.push({from:i,to:t}),a+=t-i),{total:a,ranges:r}}function Wo({total:e,ranges:t},n){if(n<=0)return t[0].from;if(n>=1)return t[t.length-1].to;let r=Math.floor(e*n);for(let e=0;;e++){let{from:n,to:i}=t[e],a=i-n;if(r<=a)return n+r;r-=a}}function Go(e,t){let n=0;for(let{from:r,to:i}of e.ranges){if(t<=i){n+=t-r;break}n+=i-r}return n/e.total}function Ko(e,t){for(let n of e)if(t(n))return n}var qo={toDOM(e){return e},fromDOM(e){return e},scale:1,eq(e){return e==this}};function Jo(e){let t=e.facet(ci).filter(e=>typeof e!=`function`),n=e.facet(ui).filter(e=>typeof e!=`function`);return n.length&&t.push(k.join(n)),t}var Yo=class e{constructor(e,t,n){let r=0,i=0,a=0;this.viewports=n.map(({from:n,to:i})=>{let a=t.lineAt(n,z.ByPos,e,0,0).top,o=t.lineAt(i,z.ByPos,e,0,0).bottom;return r+=o-a,{from:n,to:i,top:a,bottom:o,domTop:0,domBottom:0}}),this.scale=(7e6-r)/(t.height-r);for(let e of this.viewports)e.domTop=a+(e.top-i)*this.scale,a=e.domBottom=e.domTop+(e.bottom-e.top),i=e.bottom}toDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.top)return r+(e-n)*this.scale;if(e<=i.bottom)return i.domTop+(e-i.top);n=i.bottom,r=i.domBottom}}fromDOM(e){for(let t=0,n=0,r=0;;t++){let i=t<this.viewports.length?this.viewports[t]:null;if(!i||e<i.domTop)return n+(e-r)/this.scale;if(e<=i.domBottom)return i.top+(e-i.domTop);n=i.bottom,r=i.domBottom}}eq(t){return t instanceof e&&this.scale==t.scale&&this.viewports.length==t.viewports.length&&this.viewports.every((e,n)=>e.from==t.viewports[n].from&&e.to==t.viewports[n].to)}};function Xo(e,t){if(t.scale==1)return e;let n=t.toDOM(e.top),r=t.toDOM(e.bottom);return new So(e.from,e.length,n,r-n,Array.isArray(e._content)?e._content.map(e=>Xo(e,t)):e._content)}var Zo=T.define({combine:e=>e.join(` `)}),Qo=T.define({combine:e=>e.indexOf(!0)>-1}),$o=cn.newName(),es=cn.newName(),ts=cn.newName(),ns={"&light":`.`+es,"&dark":`.`+ts};function rs(e,t,n){return new cn(t,{finish(t){return/&/.test(t)?t.replace(/&\w*/,t=>{if(t==`&`)return e;if(!n||!n[t])throw RangeError(`Unsupported selector: ${t}`);return n[t]}):e+` `+t}})}var is=rs(`.`+$o,{"&":{position:`relative !important`,boxSizing:`border-box`,"&.cm-focused":{outline:`1px dotted #212121`},display:`flex !important`,flexDirection:`column`},".cm-scroller":{display:`flex !important`,alignItems:`flex-start !important`,fontFamily:`monospace`,lineHeight:1.4,height:`100%`,overflowX:`auto`,position:`relative`,zIndex:0,overflowAnchor:`none`},".cm-content":{margin:0,flexGrow:2,flexShrink:0,display:`block`,whiteSpace:`pre`,wordWrap:`normal`,boxSizing:`border-box`,minHeight:`100%`,padding:`4px 0`,outline:`none`,"&[contenteditable=true]":{WebkitUserModify:`read-write-plaintext-only`}},".cm-lineWrapping":{whiteSpace_fallback:`pre-wrap`,whiteSpace:`break-spaces`,wordBreak:`break-word`,overflowWrap:`anywhere`,flexShrink:1},"&light .cm-content":{caretColor:`black`},"&dark .cm-content":{caretColor:`white`},".cm-line":{display:`block`,padding:`0 2px 0 6px`},".cm-layer":{userSelect:`none`,position:`absolute`,left:0,top:0,contain:`size style`,"& > *":{position:`absolute`}},"&light .cm-selectionBackground":{background:`#d9d9d9`},"&dark .cm-selectionBackground":{background:`#222`},"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#d7d4f0`},"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground":{background:`#233`},".cm-cursorLayer":{pointerEvents:`none`},"&.cm-focused > .cm-scroller > .cm-cursorLayer":{animation:`steps(1) cm-blink 1.2s infinite`},"@keyframes cm-blink":{"0%":{},"50%":{opacity:0},"100%":{}},"@keyframes cm-blink2":{"0%":{},"50%":{opacity:0},"100%":{}},".cm-cursor, .cm-dropCursor":{borderLeft:`1.2px solid black`,marginLeft:`-0.6px`,pointerEvents:`none`},".cm-cursor":{display:`none`},"&dark .cm-cursor":{borderLeftColor:`#ddd`},".cm-selectionHandle":{backgroundColor:`currentColor`,width:`1.5px`},".cm-selectionHandle-start::before, .cm-selectionHandle-end::before":{content:`""`,backgroundColor:`inherit`,borderRadius:`50%`,width:`8px`,height:`8px`,position:`absolute`,left:`-3.25px`},".cm-selectionHandle-start::before":{top:`-8px`},".cm-selectionHandle-end::before":{bottom:`-8px`},".cm-dropCursor":{position:`absolute`},"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor":{display:`block`},".cm-iso":{unicodeBidi:`isolate`},".cm-announced":{position:`fixed`,top:`-10000px`},"@media print":{".cm-announced":{display:`none`}},"&light .cm-activeLine":{backgroundColor:`#cceeff44`},"&dark .cm-activeLine":{backgroundColor:`#99eeff33`},"&light .cm-specialChar":{color:`red`},"&dark .cm-specialChar":{color:`#f78`},".cm-gutters":{flexShrink:0,display:`flex`,height:`100%`,boxSizing:`border-box`,zIndex:200},".cm-gutters-before":{insetInlineStart:0},".cm-gutters-after":{insetInlineEnd:0},"&light .cm-gutters":{backgroundColor:`#f5f5f5`,color:`#6c6c6c`,border:`0px solid #ddd`,"&.cm-gutters-before":{borderRightWidth:`1px`},"&.cm-gutters-after":{borderLeftWidth:`1px`}},"&dark .cm-gutters":{backgroundColor:`#333338`,color:`#ccc`},".cm-gutter":{display:`flex !important`,flexDirection:`column`,flexShrink:0,boxSizing:`border-box`,minHeight:`100%`,overflow:`hidden`},".cm-gutterElement":{boxSizing:`border-box`},".cm-lineNumbers .cm-gutterElement":{padding:`0 3px 0 5px`,minWidth:`20px`,textAlign:`right`,whiteSpace:`nowrap`},"&light .cm-activeLineGutter":{backgroundColor:`#e2f2ff`},"&dark .cm-activeLineGutter":{backgroundColor:`#222227`},".cm-panels":{boxSizing:`border-box`,position:`sticky`,left:0,right:0,zIndex:300},"&light .cm-panels":{backgroundColor:`#f5f5f5`,color:`black`},".cm-panels-top":{top:`0`},".cm-panels-bottom":{bottom:`0`},"&light .cm-panels-top":{borderBottom:`1px solid #ddd`},"&light .cm-panels-bottom":{borderTop:`1px solid #ddd`},"&dark .cm-panels":{backgroundColor:`#333338`,color:`white`},".cm-dialog":{padding:`2px 19px 4px 6px`,position:`relative`,"& label":{fontSize:`80%`}},".cm-dialog-close":{position:`absolute`,top:`3px`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,fontSize:`14px`,padding:`0`},".cm-tab":{display:`inline-block`,overflow:`hidden`,verticalAlign:`bottom`},".cm-widgetBuffer":{verticalAlign:`baseline`,height:`1em`,width:0,display:`inline`},".cm-placeholder":{color:`#888`,display:`inline-block`,verticalAlign:`top`,userSelect:`none`},".cm-highlightSpace":{background:`radial-gradient(circle at 50% 55%, #aaa 20%, transparent 0) no-repeat`,backgroundSize:`.4em`,backgroundPosition:`calc(min(50%, 0px)) center`},".cm-highlightTab":{backgroundImage:`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,backgroundSize:`auto 100%`,backgroundPosition:`right 90%`,backgroundRepeat:`no-repeat`},".cm-trailingSpace":{backgroundColor:`#ff332255`},".cm-button":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,padding:`.2em 1em`,borderRadius:`1px`},"&light .cm-button":{backgroundImage:`linear-gradient(#eff1f5, #d9d9df)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#b4b4b4, #d0d3d6)`}},"&dark .cm-button":{backgroundImage:`linear-gradient(#393939, #111)`,border:`1px solid #888`,"&:active":{backgroundImage:`linear-gradient(#111, #333)`}},".cm-textfield":{verticalAlign:`middle`,color:`inherit`,fontSize:`70%`,border:`1px solid silver`,padding:`.2em .5em`},"&light .cm-textfield":{backgroundColor:`white`},"&dark .cm-textfield":{border:`1px solid #555`,backgroundColor:`inherit`}},ns),as={childList:!0,characterData:!0,subtree:!0,attributes:!0,characterDataOldValue:!0},os=j.ie&&j.ie_version<=11,ss=class{constructor(e){this.view=e,this.active=!1,this.editContext=null,this.selectionRange=new ar,this.selectionChanged=!1,this.delayedFlush=-1,this.resizeTimeout=-1,this.queue=[],this.delayedAndroidKey=null,this.flushingAndroidKey=-1,this.lastChange=0,this.scrollTargets=[],this.intersection=null,this.resizeScroll=null,this.intersecting=!1,this.gapIntersection=null,this.gaps=[],this.printQuery=null,this.parentCheck=-1,this.dom=e.contentDOM,this.observer=new MutationObserver(t=>{for(let e of t)this.queue.push(e);(j.ie&&j.ie_version<=11||j.ios&&e.composing)&&t.some(e=>e.type==`childList`&&e.removedNodes.length||e.type==`characterData`&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():this.flush()}),window.EditContext&&j.android&&e.constructor.EDIT_CONTEXT!==!1&&!(j.chrome&&j.chrome_version<126)&&(this.editContext=new ds(e),e.state.facet(ni)&&(e.contentDOM.editContext=this.editContext.editContext)),os&&(this.onCharData=e=>{this.queue.push({target:e.target,type:`characterData`,oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this),this.onResize=this.onResize.bind(this),this.onPrint=this.onPrint.bind(this),this.onScroll=this.onScroll.bind(this),window.matchMedia&&(this.printQuery=window.matchMedia(`print`)),typeof ResizeObserver==`function`&&(this.resizeScroll=new ResizeObserver(()=>{this.view.docView?.lastUpdate<Date.now()-75&&this.onResize()}),this.resizeScroll.observe(e.scrollDOM)),this.addWindowListeners(this.win=e.win),this.start(),typeof IntersectionObserver==`function`&&(this.intersection=new IntersectionObserver(e=>{this.parentCheck<0&&(this.parentCheck=setTimeout(this.listenForScroll.bind(this),1e3)),e.length>0&&e[e.length-1].intersectionRatio>0!=this.intersecting&&(this.intersecting=!this.intersecting,this.intersecting!=this.view.inView&&this.onScrollChanged(document.createEvent(`Event`)))},{threshold:[0,.001]}),this.intersection.observe(this.dom),this.gapIntersection=new IntersectionObserver(e=>{e.length>0&&e[e.length-1].intersectionRatio>0&&this.onScrollChanged(document.createEvent(`Event`))},{})),this.listenForScroll(),this.readSelectionRange()}onScrollChanged(e){this.view.inputState.runHandlers(`scroll`,e),this.intersecting&&this.view.measure()}onScroll(e){this.intersecting&&this.flush(!1),this.editContext&&this.view.requestMeasure(this.editContext.measureReq),this.onScrollChanged(e)}onResize(){this.resizeTimeout<0&&(this.resizeTimeout=setTimeout(()=>{this.resizeTimeout=-1,this.view.requestMeasure()},50))}onPrint(e){(e.type!=`change`&&e.type||e.matches)&&(this.view.viewState.printing=!0,this.view.measure(),setTimeout(()=>{this.view.viewState.printing=!1,this.view.requestMeasure()},500))}updateGaps(e){if(this.gapIntersection&&(e.length!=this.gaps.length||this.gaps.some((t,n)=>t!=e[n]))){this.gapIntersection.disconnect();for(let t of e)this.gapIntersection.observe(t);this.gaps=e}}onSelectionChange(e){let t=this.selectionChanged;if(!this.readSelectionRange()||this.delayedAndroidKey)return;let{view:n}=this,r=this.selectionRange;if(n.state.facet(ni)?n.root.activeElement!=this.dom:!qn(this.dom,r))return;let i=r.anchorNode&&n.docView.tile.nearest(r.anchorNode);i&&i.isWidget()&&i.widget.ignoreEvent(e)?t||(this.selectionChanged=!1):(j.ie&&j.ie_version<=11||j.android&&j.chrome)&&!n.state.selection.main.empty&&r.focusNode&&Yn(r.focusNode,r.focusOffset,r.anchorNode,r.anchorOffset)?this.flushSoon():this.flush(!1)}readSelectionRange(){let{view:e}=this,t=Gn(e.root);if(!t)return!1;let n=j.safari&&e.root.nodeType==11&&e.root.activeElement==this.dom&&us(this.view,t)||t;if(!n||this.selectionRange.eq(n))return!1;let r=qn(this.dom,n);return r&&!this.selectionChanged&&e.inputState.lastFocusTime>Date.now()-200&&e.inputState.lastTouchTime<Date.now()-300&&mr(this.dom,n)?(this.view.inputState.lastFocusTime=0,e.docView.updateSelection(),!1):(this.selectionRange.setRange(n),r&&(this.selectionChanged=!0),!0)}setSelectionRange(e,t){this.selectionRange.set(e.node,e.offset,t.node,t.offset),this.selectionChanged=!1}clearSelectionRange(){this.selectionRange.set(null,0,null,0)}listenForScroll(){this.parentCheck=-1;let e=0,t=null;for(let n=this.dom;n;)if(P(n))!t&&e<this.scrollTargets.length&&this.scrollTargets[e]==n?e++:t||(t=this.scrollTargets.slice(0,e)),t&&t.push(n),n=n.assignedSlot||n.parentNode;else if(n.nodeType==11)n=n.host;else break;if(e<this.scrollTargets.length&&!t&&(t=this.scrollTargets.slice(0,e)),t){for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);for(let e of this.scrollTargets=t)e.addEventListener(`scroll`,this.onScroll)}}ignore(e){if(!this.active)return e();try{return this.stop(),e()}finally{this.start(),this.clear()}}start(){this.active||(this.observer.observe(this.dom,as),os&&this.dom.addEventListener(`DOMCharacterDataModified`,this.onCharData),this.active=!0)}stop(){this.active&&(this.active=!1,this.observer.disconnect(),os&&this.dom.removeEventListener(`DOMCharacterDataModified`,this.onCharData))}clear(){this.processRecords(),this.queue.length=0,this.selectionChanged=!1}delayAndroidKey(e,t){if(!this.delayedAndroidKey){let e=()=>{let e=this.delayedAndroidKey;e&&(this.clearDelayedAndroidKey(),this.view.inputState.lastKeyCode=e.keyCode,this.view.inputState.lastKeyTime=Date.now(),!this.flush()&&e.force&&fr(this.dom,e.key,e.keyCode))};this.flushingAndroidKey=this.view.win.requestAnimationFrame(e)}(!this.delayedAndroidKey||e==`Enter`)&&(this.delayedAndroidKey={key:e,keyCode:t,force:this.lastChange<Date.now()-50||!!this.delayedAndroidKey?.force})}clearDelayedAndroidKey(){this.win.cancelAnimationFrame(this.flushingAndroidKey),this.delayedAndroidKey=null,this.flushingAndroidKey=-1}flushSoon(){this.delayedFlush<0&&(this.delayedFlush=this.view.win.requestAnimationFrame(()=>{this.delayedFlush=-1,this.flush()}))}forceFlush(){this.delayedFlush>=0&&(this.view.win.cancelAnimationFrame(this.delayedFlush),this.delayedFlush=-1),this.flush()}pendingRecords(){for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}processRecords(){let e=this.pendingRecords();e.length&&(this.queue=[]);let t=-1,n=-1,r=!1;for(let i of e){let e=this.readMutation(i);e&&(e.typeOver&&(r=!0),t==-1?{from:t,to:n}=e:(t=Math.min(e.from,t),n=Math.max(e.to,n)))}return{from:t,to:n,typeOver:r}}readChange(){let{from:e,to:t,typeOver:n}=this.processRecords(),r=this.selectionChanged&&qn(this.dom,this.selectionRange);if(e<0&&!r)return null;e>-1&&(this.lastChange=Date.now()),this.view.inputState.lastFocusTime=0,this.selectionChanged=!1;let i=new Ca(this.view,e,t,n);return this.view.docView.domChanged={newSel:i.newSel?i.newSel.main:null},i}flush(e=!0){if(this.delayedFlush>=0||this.delayedAndroidKey)return!1;e&&this.readSelectionRange();let t=this.selectionChanged,n=this.readChange();if(!n)return this.view.requestMeasure(),!1;let r=this.view.state,i=Ta(this.view,n);return this.view.state==r&&(n.domChanged||t)&&this.view.update([]),i}readMutation(e){let t=this.view.docView.tile.nearest(e.target);if(!t||t.isWidget())return null;if(t.markDirty(e.type==`attributes`),e.type==`childList`){let n=cs(t,e.previousSibling||e.target.previousSibling,-1),r=cs(t,e.nextSibling||e.target.nextSibling,1);return{from:n?t.posAfter(n):t.posAtStart,to:r?t.posBefore(r):t.posAtEnd,typeOver:!1}}return e.type==`characterData`?{from:t.posAtStart,to:t.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}:null}setWindow(e){e!=this.win&&(this.removeWindowListeners(this.win),this.win=e,this.addWindowListeners(this.win))}addWindowListeners(e){e.addEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.addEventListener?this.printQuery.addEventListener(`change`,this.onPrint):this.printQuery.addListener(this.onPrint):e.addEventListener(`beforeprint`,this.onPrint),e.addEventListener(`scroll`,this.onScroll),e.document.addEventListener(`selectionchange`,this.onSelectionChange)}removeWindowListeners(e){e.removeEventListener(`scroll`,this.onScroll),e.removeEventListener(`resize`,this.onResize),this.printQuery?this.printQuery.removeEventListener?this.printQuery.removeEventListener(`change`,this.onPrint):this.printQuery.removeListener(this.onPrint):e.removeEventListener(`beforeprint`,this.onPrint),e.document.removeEventListener(`selectionchange`,this.onSelectionChange)}update(e){this.editContext&&(this.editContext.update(e),e.startState.facet(ni)!=e.state.facet(ni)&&(e.view.contentDOM.editContext=e.state.facet(ni)?this.editContext.editContext:null))}destroy(){var e,t,n;this.stop(),(e=this.intersection)==null||e.disconnect(),(t=this.gapIntersection)==null||t.disconnect(),(n=this.resizeScroll)==null||n.disconnect();for(let e of this.scrollTargets)e.removeEventListener(`scroll`,this.onScroll);this.removeWindowListeners(this.win),clearTimeout(this.parentCheck),clearTimeout(this.resizeTimeout),this.win.cancelAnimationFrame(this.delayedFlush),this.win.cancelAnimationFrame(this.flushingAndroidKey),this.editContext&&(this.view.contentDOM.editContext=null,this.editContext.destroy())}};function cs(e,t,n){for(;t;){let r=R.get(t);if(r&&r.parent==e)return r;let i=t.parentNode;t=i==e.dom?n>0?t.nextSibling:t.previousSibling:i}return null}function ls(e,t){let n=t.startContainer,r=t.startOffset,i=t.endContainer,a=t.endOffset,o=e.docView.domAtPos(e.state.selection.main.anchor,1);return Yn(o.node,o.offset,i,a)&&([n,r,i,a]=[i,a,n,r]),{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}}function us(e,t){if(t.getComposedRanges){let n=t.getComposedRanges(e.root)[0];if(n)return ls(e,n)}let n=null;function r(e){e.preventDefault(),e.stopImmediatePropagation(),n=e.getTargetRanges()[0]}return e.contentDOM.addEventListener(`beforeinput`,r,!0),e.dom.ownerDocument.execCommand(`indent`),e.contentDOM.removeEventListener(`beforeinput`,r,!0),n?ls(e,n):null}var ds=class{constructor(e){this.from=0,this.to=0,this.pendingContextChange=null,this.handlers=Object.create(null),this.composing=null,this.resetRange(e.state);let t=this.editContext=new window.EditContext({text:e.state.doc.sliceString(this.from,this.to),selectionStart:this.toContextPos(Math.max(this.from,Math.min(this.to,e.state.selection.main.anchor))),selectionEnd:this.toContextPos(e.state.selection.main.head)});this.handlers.textupdate=n=>{let r=e.state.selection.main,{anchor:i,head:a}=r,o=this.toEditorPos(n.updateRangeStart),s=this.toEditorPos(n.updateRangeEnd);e.inputState.composing>=0&&!this.composing&&(this.composing={contextBase:n.updateRangeStart,editorBase:o,drifted:!1});let c=s-o>n.text.length;o==this.from&&i<this.from?o=i:s==this.to&&i>this.to&&(s=i);let l=Oa(e.state.sliceDoc(o,s),n.text,(c?r.from:r.to)-o,c?`end`:null);if(!l){let t=w.single(this.toEditorPos(n.selectionStart),this.toEditorPos(n.selectionEnd));ja(t,r)||e.dispatch({selection:t,userEvent:`select`});return}let u={from:l.from+o,to:l.toA+o,insert:x.of(n.text.slice(l.from,l.toB).split(`
`))};if((j.mac||j.android)&&u.from==a-1&&/^\. ?$/.test(n.text)&&e.contentDOM.getAttribute(`autocorrect`)==`off`&&(u={from:o,to:s,insert:x.of([n.text.replace(`.`,` `)])}),this.pendingContextChange=u,!e.state.readOnly){let t=this.to-this.from+(u.to-u.from+u.insert.length);Ea(e,u,w.single(this.toEditorPos(n.selectionStart,t),this.toEditorPos(n.selectionEnd,t)))}this.pendingContextChange&&(this.revertPending(e.state),this.setSelection(e.state)),u.from<u.to&&!u.insert.length&&e.inputState.composing>=0&&!/[\\p{Alphabetic}\\p{Number}_]/.test(t.text.slice(Math.max(0,n.updateRangeStart-1),Math.min(t.text.length,n.updateRangeStart+1)))&&this.handlers.compositionend(n)},this.handlers.characterboundsupdate=n=>{let r=[],i=null;for(let t=this.toEditorPos(n.rangeStart),a=this.toEditorPos(n.rangeEnd);t<a;t++){let n=e.coordsForChar(t);i=n&&new DOMRect(n.left,n.top,n.right-n.left,n.bottom-n.top)||i||new DOMRect,r.push(i)}t.updateCharacterBounds(n.rangeStart,r)},this.handlers.textformatupdate=t=>{let n=[];for(let e of t.getTextFormats()){let t=e.underlineStyle,r=e.underlineThickness;if(!/none/i.test(t)&&!/none/i.test(r)){let i=this.toEditorPos(e.rangeStart),a=this.toEditorPos(e.rangeEnd);if(i<a){let e=`text-decoration: underline ${/^[a-z]/.test(t)?t+` `:t==`Dashed`?`dashed `:t==`Squiggle`?`wavy `:``}${/thin/i.test(r)?1:2}px`;n.push(N.mark({attributes:{style:e}}).range(i,a))}}}e.dispatch({effects:ei.of(N.set(n))})},this.handlers.compositionstart=()=>{e.inputState.composing<0&&(e.inputState.composing=0,e.inputState.compositionFirstChange=!0)},this.handlers.compositionend=()=>{if(e.inputState.composing=-1,e.inputState.compositionFirstChange=null,this.composing){let{drifted:t}=this.composing;this.composing=null,t&&this.reset(e.state)}};for(let e in this.handlers)t.addEventListener(e,this.handlers[e]);this.measureReq={read:e=>{let t=Gn(e.root);t&&t.rangeCount&&this.editContext.updateSelectionBounds(t.getRangeAt(0).getBoundingClientRect())}}}applyEdits(e){let t=0,n=!1,r=this.pendingContextChange;return e.changes.iterChanges((i,a,o,s,c)=>{if(n)return;let l=c.length-(a-i);if(r&&a>=r.to){if(r.from==i&&r.to==a&&r.insert.eq(c)){r=this.pendingContextChange=null,t+=l,this.to+=l;return}r=null,this.revertPending(e.state)}if(i+=t,a+=t,a<=this.from)this.from+=l,this.to+=l;else if(i<this.to){if(i<this.from||a>this.to||this.to-this.from+c.length>3e4){n=!0;return}this.editContext.updateText(this.toContextPos(i),this.toContextPos(a),c.toString()),this.to+=l}t+=l}),r&&!n&&this.revertPending(e.state),!n}update(e){let t=this.pendingContextChange,n=e.startState.selection.main;this.composing&&(this.composing.drifted||!e.changes.touchesRange(n.from,n.to)&&e.transactions.some(e=>!e.isUserEvent(`input.type`)&&e.changes.touchesRange(this.from,this.to)))?(this.composing.drifted=!0,this.composing.editorBase=e.changes.mapPos(this.composing.editorBase)):!this.applyEdits(e)||!this.rangeIsValid(e.state)?(this.pendingContextChange=null,this.reset(e.state)):(e.docChanged||e.selectionSet||t)&&this.setSelection(e.state),(e.geometryChanged||e.docChanged||e.selectionSet)&&e.view.requestMeasure(this.measureReq)}resetRange(e){let{head:t}=e.selection.main;this.from=Math.max(0,t-1e4),this.to=Math.min(e.doc.length,t+1e4)}reset(e){this.resetRange(e),this.editContext.updateText(0,this.editContext.text.length,e.doc.sliceString(this.from,this.to)),this.setSelection(e)}revertPending(e){let t=this.pendingContextChange;this.pendingContextChange=null,this.editContext.updateText(this.toContextPos(t.from),this.toContextPos(t.from+t.insert.length),e.doc.sliceString(t.from,t.to))}setSelection(e){let{main:t}=e.selection,n=this.toContextPos(Math.max(this.from,Math.min(this.to,t.anchor))),r=this.toContextPos(t.head);(this.editContext.selectionStart!=n||this.editContext.selectionEnd!=r)&&this.editContext.updateSelection(n,r)}rangeIsValid(e){let{head:t}=e.selection.main;return!(this.from>0&&t-this.from<500||this.to<e.doc.length&&this.to-t<500||this.to-this.from>3e4)}toEditorPos(e,t=this.to-this.from){e=Math.min(e,t);let n=this.composing;return n&&n.drifted?n.editorBase+(e-n.contextBase):e+this.from}toContextPos(e){let t=this.composing;return t&&t.drifted?t.contextBase+(e-t.editorBase):e-this.from}destroy(){for(let e in this.handlers)this.editContext.removeEventListener(e,this.handlers[e])}},B=class e{get state(){return this.viewState.state}get viewport(){return this.viewState.viewport}get visibleRanges(){return this.viewState.visibleRanges}get inView(){return this.viewState.inView}get composing(){return!!this.inputState&&this.inputState.composing>0}get compositionStarted(){return!!this.inputState&&this.inputState.composing>=0}get root(){return this._root}get win(){return this.dom.ownerDocument.defaultView||window}constructor(e={}){this.plugins=[],this.pluginMap=new Map,this.editorAttrs={},this.contentAttrs={},this.bidiCache=[],this.destroyed=!1,this.updateState=2,this.measureScheduled=-1,this.measureRequests=[],this.clearAnnouncement=-1,this.contentDOM=document.createElement(`div`),this.scrollDOM=document.createElement(`div`),this.scrollDOM.tabIndex=-1,this.scrollDOM.className=`cm-scroller`,this.scrollDOM.appendChild(this.contentDOM),this.announceDOM=document.createElement(`div`),this.announceDOM.className=`cm-announced`,this.announceDOM.setAttribute(`aria-live`,`polite`),this.dom=document.createElement(`div`),this.dom.appendChild(this.announceDOM),this.dom.appendChild(this.scrollDOM),e.parent&&e.parent.appendChild(this.dom);let{dispatch:t}=e;this.dispatchTransactions=e.dispatchTransactions||t&&(e=>e.forEach(e=>t(e,this)))||(e=>this.update(e)),this.dispatch=this.dispatch.bind(this),this._root=e.root||pr(e.parent)||document,this.viewState=new Vo(this,e.state||O.create(e)),e.scrollTo&&e.scrollTo.is($r)&&(this.viewState.scrollTarget=e.scrollTo.value.clip(this.viewState.state)),this.plugins=this.state.facet(ii).map(e=>new ai(e));for(let e of this.plugins)e.update(this);this.observer=new ss(this),this.inputState=new Ma(this),this.inputState.ensureHandlers(this.plugins),this.docView=new Ki(this),this.mountStyles(),this.updateAttrs(),this.updateState=0,this.requestMeasure(),document.fonts?.ready&&document.fonts.ready.then(()=>{this.viewState.mustMeasureContent=`refresh`,this.requestMeasure()})}dispatch(...e){let t=e.length==1&&e[0]instanceof Ct?e:e.length==1&&Array.isArray(e[0])?e[0]:[this.state.update(...e)];this.dispatchTransactions(t,this)}update(t){if(this.updateState!=0)throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);let n=!1,r=!1,i,a=this.state;for(let e of t){if(e.startState!=a)throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);a=e.state}if(this.destroyed){this.viewState.state=a;return}let o=this.hasFocus,s=0,c=null;t.some(e=>e.annotation(fo))?(this.inputState.notifiedFocused=o,s=1):o!=this.inputState.notifiedFocused&&(this.inputState.notifiedFocused=o,c=po(a,o),c||(s=1));let l=this.observer.delayedAndroidKey,u=null;if(l?(this.observer.clearDelayedAndroidKey(),u=this.observer.readChange(),(u&&!this.state.doc.eq(a.doc)||!this.state.selection.eq(a.selection))&&(u=null)):this.observer.clear(),a.facet(O.phrases)!=this.state.facet(O.phrases))return this.setState(a);i=vi.create(this,a,t),i.flags|=s;let d=this.viewState.scrollTarget;try{this.updateState=2;for(let n of t){if(d&&(d=d.map(n.changes)),n.scrollIntoView){let{main:t}=n.state.selection,{x:r,y:i}=this.state.facet(e.cursorScrollMargin);d=new Qr(t.empty?t:w.cursor(t.head,t.head>t.anchor?-1:1),`nearest`,`nearest`,i,r)}for(let e of n.effects)e.is($r)&&(d=e.value.clip(this.state))}this.viewState.update(i,d),this.bidiCache=ms.update(this.bidiCache,i.changes),i.empty||(this.updatePlugins(i),this.inputState.update(i)),n=this.docView.update(i),this.state.facet(gi)!=this.styleModules&&this.mountStyles(),r=this.updateAttrs(),this.showAnnouncements(t),this.docView.updateSelection(n,t.some(e=>e.isUserEvent(`select.pointer`)))}finally{this.updateState=0}if(i.startState.facet(Zo)!=i.state.facet(Zo)&&(this.viewState.mustMeasureContent=!0),(n||r||d||this.viewState.mustEnforceCursorAssoc||this.viewState.mustMeasureContent)&&this.requestMeasure(),n&&this.docViewUpdate(),!i.empty)for(let e of this.state.facet(Wr))try{e(i)}catch(e){ti(this.state,e,`update listener`)}(c||u)&&Promise.resolve().then(()=>{c&&this.state==c.startState&&this.dispatch(c),u&&!Ta(this,u)&&l.force&&fr(this.contentDOM,l.key,l.keyCode)})}setState(e){if(this.updateState!=0)throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);if(this.destroyed){this.viewState.state=e;return}this.updateState=2;let t=this.hasFocus;try{for(let e of this.plugins)e.destroy(this);this.viewState=new Vo(this,e),this.plugins=e.facet(ii).map(e=>new ai(e)),this.pluginMap.clear();for(let e of this.plugins)e.update(this);this.docView.destroy(),this.docView=new Ki(this),this.inputState.ensureHandlers(this.plugins),this.mountStyles(),this.updateAttrs(),this.bidiCache=[]}finally{this.updateState=0}t&&this.focus(),this.requestMeasure()}updatePlugins(e){let t=e.startState.facet(ii),n=e.state.facet(ii);if(t!=n){let r=[];for(let i of n){let n=t.indexOf(i);if(n<0)r.push(new ai(i));else{let t=this.plugins[n];t.mustUpdate=e,r.push(t)}}for(let t of this.plugins)t.mustUpdate!=e&&t.destroy(this);this.plugins=r,this.pluginMap.clear()}else for(let t of this.plugins)t.mustUpdate=e;for(let e=0;e<this.plugins.length;e++)this.plugins[e].update(this);t!=n&&this.inputState.ensureHandlers(this.plugins)}docViewUpdate(){for(let e of this.plugins){let t=e.value;if(t&&t.docViewUpdate)try{t.docViewUpdate(this)}catch(e){ti(this.state,e,`doc view update listener`)}}}measure(e=!0){if(this.destroyed)return;if(this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.observer.delayedAndroidKey){this.measureScheduled=-1,this.requestMeasure();return}this.measureScheduled=0,e&&this.observer.forceFlush();let t=null,n=this.viewState.scrollParent,r=this.viewState.getScrollOffset(),{scrollAnchorPos:i,scrollAnchorHeight:a,scaleY:o}=this.viewState;Math.abs(r-this.viewState.scrollOffset)>1&&(a=-1),this.viewState.scrollAnchorHeight=-1;try{for(let e=0;;e++){if(a<0){if(hr(n||this.win))i=-1,a=this.viewState.heightMap.height/this.viewState.scaleY;else{let e=this.viewState.scrollAnchorAt(r);i=e.from,a=e.top}o=this.viewState.scaleY}this.updateState=1;let s=this.viewState.measure();if(!s&&!this.measureRequests.length&&this.viewState.scrollTarget==null)break;if(e>5){console.warn(this.measureRequests.length?`Measure loop restarted more than 5 times`:`Viewport failed to stabilize`);break}let c=[];s&4||([this.measureRequests,c]=[c,this.measureRequests]);let l=c.map(e=>{try{return e.read(this)}catch(e){return ti(this.state,e),ps}}),u=vi.create(this,this.state,[]),d=!1;u.flags|=s,t?t.flags|=s:t=u,this.updateState=2,u.empty||(this.updatePlugins(u),this.inputState.update(u),this.updateAttrs(),d=this.docView.update(u),d&&this.docViewUpdate());for(let e=0;e<c.length;e++)if(l[e]!=ps)try{let t=c[e];t.write&&t.write(l[e],this)}catch(e){ti(this.state,e)}if(d&&this.docView.updateSelection(!0),!u.viewportChanged&&this.measureRequests.length==0){if(this.viewState.editorHeight){if(this.viewState.scrollTarget){this.docView.scrollIntoView(this.viewState.scrollTarget),this.viewState.scrollTarget=null,a=-1;continue}{let e=(i<0?this.viewState.heightMap.height:this.viewState.lineBlockAt(i).top)/this.viewState.scaleY-a/o;if((e>1||e<-1)&&!(j.ios&&this.inputState.lastIOSMomentumScroll>Date.now()-100)&&(n==this.scrollDOM||this.hasFocus||Math.max(this.inputState.lastWheelEvent,this.inputState.lastTouchTime)>Date.now()-100)){r+=e,n?i<0?n.scrollTop=n.scrollHeight:n.scrollTop+=e:this.win.scrollBy(0,e),a=-1;continue}}}break}}}finally{this.updateState=0,this.measureScheduled=-1}if(t&&!t.empty)for(let e of this.state.facet(Wr))e(t)}get themeClasses(){return $o+` `+(this.state.facet(Qo)?ts:es)+` `+this.state.facet(Zo)}updateAttrs(){let e=hs(this,oi,{class:`cm-editor`+(this.hasFocus?` cm-focused `:` `)+this.themeClasses}),t={spellcheck:`false`,autocorrect:`off`,autocapitalize:`off`,writingsuggestions:`false`,translate:`no`,contenteditable:this.state.facet(ni)?`true`:`false`,class:`cm-content`,style:`${j.tabSize}: ${this.state.tabSize}`,role:`textbox`,"aria-multiline":`true`};this.state.readOnly&&(t[`aria-readonly`]=`true`),hs(this,si,t);let n=this.observer.ignore(()=>{let n=Pn(this.contentDOM,this.contentAttrs,t),r=Pn(this.dom,this.editorAttrs,e);return n||r});return this.editorAttrs=e,this.contentAttrs=t,n}showAnnouncements(t){let n=!0;for(let r of t)for(let t of r.effects)if(t.is(e.announce)){n&&(this.announceDOM.textContent=``,this.win.clearTimeout(this.clearAnnouncement),this.clearAnnouncement=this.win.setTimeout(()=>{this.announceDOM.textContent=`\xA0`},200),n=!1);let e=this.announceDOM.appendChild(document.createElement(`div`));e.textContent=t.value}}mountStyles(){this.styleModules=this.state.facet(gi);let t=this.state.facet(e.cspNonce);cn.mount(this.root,this.styleModules.concat(is).reverse(),t?{nonce:t}:void 0)}readMeasured(){if(this.updateState==2)throw Error(`Reading the editor layout isn't allowed during an update`);this.updateState==0&&this.measureScheduled>-1&&this.measure(!1)}requestMeasure(e){if(this.measureScheduled<0&&(this.measureScheduled=this.win.requestAnimationFrame(()=>this.measure())),e){if(this.measureRequests.indexOf(e)>-1)return;if(e.key!=null){for(let t=0;t<this.measureRequests.length;t++)if(this.measureRequests[t].key===e.key){this.measureRequests[t]=e;return}}this.measureRequests.push(e)}}plugin(e){let t=this.pluginMap.get(e);return(t===void 0||t&&t.plugin!=e)&&this.pluginMap.set(e,t=this.plugins.find(t=>t.plugin==e)||null),t&&t.update(this).value}get documentTop(){return this.contentDOM.getBoundingClientRect().top+this.viewState.paddingTop}get documentPadding(){return{top:this.viewState.paddingTop,bottom:this.viewState.paddingBottom}}get scaleX(){return this.viewState.scaleX}get scaleY(){return this.viewState.scaleY}elementAtHeight(e){return this.readMeasured(),this.viewState.elementAtHeight(e)}lineBlockAtHeight(e){return this.readMeasured(),this.viewState.lineBlockAtHeight(e)}get viewportLineBlocks(){return this.viewState.viewportLines}lineBlockAt(e){return this.viewState.lineBlockAt(e)}get contentHeight(){return this.viewState.contentHeight}moveByChar(e,t,n){return ma(this,e,la(this,e,t,n))}moveByGroup(e,t){return ma(this,e,la(this,e,t,t=>ua(this,e.head,t)))}visualLineSide(e,t){return t?w.cursor(e.to,1):w.cursor(e.from,-1)}moveToLineBoundary(e,t,n=!0){return ca(this,e,t,n)}moveVertically(e,t,n){return ma(this,e,da(this,e,t,n))}domAtPos(e,t=1){return this.docView.domAtPos(e,t)}posAtDOM(e,t=0){return this.docView.posFromDOM(e,t)}posAtCoords(e,t=!0){this.readMeasured();let n=ga(this,e,t);return n&&n.pos}posAndSideAtCoords(e,t=!0){return this.readMeasured(),ga(this,e,t)}coordsAtPos(e,t=1){this.readMeasured();let n=this.state.doc.lineAt(e),r=this.bidiSpans(n),i=r[Or.find(r,e-n.from,-1,t)];return n.length&&(e==n.from&&t<0||e==n.to&&t>0)&&i.dir!=this.textDirectionAt(n.from)&&(e==n.to?(e=n.from+i.from,t=1):(e=n.from+i.to,t=-1)),this.docView.coordsAt(e,t,i.dir==F.RTL)}coordsForChar(e){return this.readMeasured(),this.docView.coordsForChar(e)}get defaultCharacterWidth(){return this.viewState.heightOracle.charWidth}get defaultLineHeight(){return this.viewState.heightOracle.lineHeight}get textDirection(){return this.viewState.defaultTextDirection}textDirectionAt(e){return!this.state.facet(Yr)||e<this.viewport.from||e>this.viewport.to?this.textDirection:(this.readMeasured(),this.docView.textDirectionAt(e))}get lineWrapping(){return this.viewState.heightOracle.lineWrapping}bidiSpans(e){if(e.length>fs)return Ir(e.length);let t=this.textDirectionAt(e.from),n;for(let r of this.bidiCache)if(r.from==e.from&&r.dir==t&&(r.fresh||kr(r.isolates,n=pi(this,e))))return r.order;n||(n=pi(this,e));let r=Fr(e.text,t,n);return this.bidiCache.push(new ms(e.from,e.to,t,n,!0,r)),r}get hasFocus(){return(this.dom.ownerDocument.hasFocus()||j.safari&&this.inputState?.lastContextMenu>Date.now()-3e4)&&this.root.activeElement==this.contentDOM}focus(){this.observer.ignore(()=>{lr(this.contentDOM),this.docView.updateSelection()})}setRoot(e){this._root!=e&&(this._root=e,this.observer.setWindow((e.nodeType==9?e:e.ownerDocument).defaultView||window),this.mountStyles())}destroy(){this.root.activeElement==this.contentDOM&&this.contentDOM.blur();for(let e of this.plugins)e.destroy(this);this.plugins=[],this.inputState.destroy(),this.docView.destroy(),this.dom.remove(),this.observer.destroy(),this.win.clearTimeout(this.clearAnnouncement),this.measureScheduled>-1&&this.win.cancelAnimationFrame(this.measureScheduled),this.destroyed=!0}static scrollIntoView(e,t={}){return $r.of(new Qr(typeof e==`number`?w.cursor(e):e,t.y??`nearest`,t.x??`nearest`,t.yMargin??5,t.xMargin??5))}scrollSnapshot(){let{scrollTop:e,scrollLeft:t}=this.scrollDOM,n=this.viewState.scrollAnchorAt(e);return $r.of(new Qr(w.cursor(n.from),`start`,`start`,n.top-e,t,!0))}setTabFocusMode(e){e==null?this.inputState.tabFocusMode=this.inputState.tabFocusMode<0?0:-1:typeof e==`boolean`?this.inputState.tabFocusMode=e?0:-1:this.inputState.tabFocusMode!=0&&(this.inputState.tabFocusMode=Date.now()+e)}static domEventHandlers(e){return L.define(()=>({}),{eventHandlers:e})}static domEventObservers(e){return L.define(()=>({}),{eventObservers:e})}static theme(e,t){let n=cn.newName(),r=[Zo.of(n),gi.of(rs(`.${n}`,e))];return t&&t.dark&&r.push(Qo.of(!0)),r}static baseTheme(e){return at.lowest(gi.of(rs(`.`+$o,e,ns)))}static findFromDOM(e){let t=e.querySelector(`.cm-content`);return(t&&R.get(t)||R.get(e))?.root?.view||null}};B.styleModule=gi,B.inputHandler=Gr,B.clipboardInputFilter=qr,B.clipboardOutputFilter=Jr,B.scrollHandler=Zr,B.focusChangeEffect=Kr,B.perLineTextDirection=Yr,B.exceptionSink=Ur,B.updateListener=Wr,B.editable=ni,B.mouseSelectionStyle=Hr,B.dragMovesSelection=Vr,B.clickAddsSelectionRange=Br,B.decorations=ci,B.blockWrappers=li,B.outerDecorations=ui,B.atomicRanges=di,B.bidiIsolatedRanges=fi,B.cursorScrollMargin=T.define({combine:e=>{let t=5,n=5;for(let r of e)typeof r==`number`?t=n=r:{x:t,y:n}=r;return{x:t,y:n}}}),B.scrollMargins=mi,B.darkTheme=Qo,B.cspNonce=T.define({combine:e=>e.length?e[0]:``}),B.contentAttributes=si,B.editorAttributes=oi,B.lineWrapping=B.contentAttributes.of({class:`cm-lineWrapping`}),B.announce=E.define();var fs=4096,ps={},ms=class e{constructor(e,t,n,r,i,a){this.from=e,this.to=t,this.dir=n,this.isolates=r,this.fresh=i,this.order=a}static update(t,n){if(n.empty&&!t.some(e=>e.fresh))return t;let r=[],i=t.length?t[t.length-1].dir:F.LTR;for(let a=Math.max(0,t.length-10);a<t.length;a++){let o=t[a];o.dir==i&&!n.touchesRange(o.from,o.to)&&r.push(new e(n.mapPos(o.from,1),n.mapPos(o.to,-1),o.dir,o.isolates,!1,o.order))}return r}};function hs(e,t,n){for(let r=e.state.facet(t),i=r.length-1;i>=0;i--){let t=r[i],a=typeof t==`function`?t(e):t;a&&An(a,n)}return n}var gs=j.mac?`mac`:j.windows?`win`:j.linux?`linux`:`key`;function _s(e,t){let n=e.split(/-(?!$)/),r=n[n.length-1];r==`Space`&&(r=` `);let i,a,o,s;for(let e=0;e<n.length-1;++e){let r=n[e];if(/^(cmd|meta|m)$/i.test(r))s=!0;else if(/^a(lt)?$/i.test(r))i=!0;else if(/^(c|ctrl|control)$/i.test(r))a=!0;else if(/^s(hift)?$/i.test(r))o=!0;else if(/^mod$/i.test(r))t==`mac`?s=!0:a=!0;else throw Error(`Unrecognized modifier name: `+r)}return i&&(r=`Alt-`+r),a&&(r=`Ctrl-`+r),s&&(r=`Meta-`+r),o&&(r=`Shift-`+r),r}function vs(e,t,n){return t.altKey&&(e=`Alt-`+e),t.ctrlKey&&(e=`Ctrl-`+e),t.metaKey&&(e=`Meta-`+e),n!==!1&&t.shiftKey&&(e=`Shift-`+e),e}var ys=at.default(B.domEventHandlers({keydown(e,t){return Os(Ss(t.state),e,t,`editor`)}})),bs=T.define({enables:ys}),xs=new WeakMap;function Ss(e){let t=e.facet(bs),n=xs.get(t);return n||xs.set(t,n=Es(t.reduce((e,t)=>e.concat(t),[]))),n}function Cs(e,t,n){return Os(Ss(e.state),t,e,n)}var ws=null,Ts=4e3;function Es(e,t=gs){let n=Object.create(null),r=Object.create(null),i=(e,t)=>{let n=r[e];if(n==null)r[e]=t;else if(n!=t)throw Error(`Key binding `+e+` is used both as a regular binding and as a multi-stroke prefix`)},a=(e,r,a,o,s)=>{let c=n[e]||(n[e]=Object.create(null)),l=r.split(/ (?!$)/).map(e=>_s(e,t));for(let t=1;t<l.length;t++){let n=l.slice(0,t).join(` `);i(n,!0),c[n]||(c[n]={preventDefault:!0,stopPropagation:!1,run:[t=>{let r=ws={view:t,prefix:n,scope:e};return setTimeout(()=>{ws==r&&(ws=null)},Ts),!0}]})}let u=l.join(` `);i(u,!1);let d=c[u]||(c[u]={preventDefault:!1,stopPropagation:!1,run:(c._any?.run)?.slice()||[]});a&&d.run.push(a),o&&(d.preventDefault=!0),s&&(d.stopPropagation=!0)};for(let r of e){let e=r.scope?r.scope.split(` `):[`editor`];if(r.any)for(let t of e){let e=n[t]||(n[t]=Object.create(null));e._any||(e._any={preventDefault:!1,stopPropagation:!1,run:[]});let{any:i}=r;for(let t in e)e[t].run.push(e=>i(e,Ds))}let i=r[t]||r.key;if(i)for(let t of e)a(t,i,r.run,r.preventDefault,r.stopPropagation),r.shift&&a(t,`Shift-`+i,r.shift,r.preventDefault,r.stopPropagation)}return n}var Ds=null;function Os(e,t,n,r){Ds=t;let i=_n(t),a=Le(Fe(i,0))==i.length&&i!=` `,o=``,s=!1,c=!1,l=!1;ws&&ws.view==n&&ws.scope==r&&(o=ws.prefix+` `,Ra.indexOf(t.keyCode)<0&&(c=!0,ws=null));let u=new Set,d=e=>{if(e){for(let t of e.run)if(!u.has(t)&&(u.add(t),t(n)))return e.stopPropagation&&(l=!0),!0;e.preventDefault&&(e.stopPropagation&&(l=!0),c=!0)}return!1},f=e[r],p,m;return f&&(d(f[o+vs(i,t,!a)])?s=!0:a&&(t.altKey||t.metaKey||t.ctrlKey)&&!(j.windows&&t.ctrlKey&&t.altKey)&&!(j.mac&&t.altKey&&!(t.ctrlKey||t.metaKey))&&(p=dn[t.keyCode])&&p!=i?(d(f[o+vs(p,t,!0)])||t.shiftKey&&(m=fn[t.keyCode])!=i&&m!=p&&d(f[o+vs(m,t,!1)]))&&(s=!0):a&&t.shiftKey&&d(f[o+vs(i,t,!0)])&&(s=!0),!s&&d(f._any)&&(s=!0)),c&&(s=!0),s&&l&&t.stopPropagation(),Ds=null,s}var ks=class e{constructor(e,t,n,r,i){this.className=e,this.left=t,this.top=n,this.width=r,this.height=i}draw(){let e=document.createElement(`div`);return e.className=this.className,this.adjust(e),e}update(e,t){return t.className==this.className&&(this.adjust(e),!0)}adjust(e){e.style.left=this.left+`px`,e.style.top=this.top+`px`,this.width!=null&&(e.style.width=this.width+`px`),e.style.height=this.height+`px`}eq(e){return this.left==e.left&&this.top==e.top&&this.width==e.width&&this.height==e.height&&this.className==e.className}static forRange(t,n,r){if(r.empty){let i=t.coordsAtPos(r.head,r.assoc||1);if(!i)return[];let a=As(t);return[new e(n,i.left-a.left,i.top-a.top,null,i.bottom-i.top)]}return Ms(t,n,r)}};function As(e){let t=e.scrollDOM.getBoundingClientRect();return{left:(e.textDirection==F.LTR?t.left:t.right-e.scrollDOM.clientWidth*e.scaleX)-e.scrollDOM.scrollLeft*e.scaleX,top:t.top-e.scrollDOM.scrollTop*e.scaleY}}function js(e,t,n,r){let i=e.coordsAtPos(t,n*2);if(!i)return r;let a=e.dom.getBoundingClientRect(),o=(i.top+i.bottom)/2,s=e.posAtCoords({x:a.left+1,y:o}),c=e.posAtCoords({x:a.right-1,y:o});return s==null||c==null?r:{from:Math.max(r.from,Math.min(s,c)),to:Math.min(r.to,Math.max(s,c))}}function Ms(e,t,n){if(n.to<=e.viewport.from||n.from>=e.viewport.to)return[];let r=Math.max(n.from,e.viewport.from),i=Math.min(n.to,e.viewport.to),a=e.textDirection==F.LTR,o=e.contentDOM,s=o.getBoundingClientRect(),c=As(e),l=o.querySelector(`.cm-line`),u=l&&window.getComputedStyle(l),d=s.left+(u?parseInt(u.paddingLeft)+Math.min(0,parseInt(u.textIndent)):0),f=s.right-(u?parseInt(u.paddingRight):0),p=sa(e,r,1),m=sa(e,i,-1),h=p.type==M.Text?p:null,g=m.type==M.Text?m:null;if(h&&(e.lineWrapping||p.widgetLineBreaks)&&(h=js(e,r,1,h)),g&&(e.lineWrapping||m.widgetLineBreaks)&&(g=js(e,i,-1,g)),h&&g&&h.from==g.from&&h.to==g.to)return v(y(n.from,n.to,h));{let t=h?y(n.from,null,h):ee(p,!1),r=g?y(null,n.to,g):ee(m,!0),i=[];return(h||p).to<(g||m).from-(h&&g?1:0)||p.widgetLineBreaks>1&&t.bottom+e.defaultLineHeight/2<r.top?i.push(_(d,t.bottom,f,r.top)):t.bottom<r.top&&e.elementAtHeight((t.bottom+r.top)/2).type==M.Text&&(t.bottom=r.top=(t.bottom+r.top)/2),v(t).concat(i).concat(v(r))}function _(e,n,r,i){return new ks(t,e-c.left,n-c.top,Math.max(0,r-e),i-n)}function v({top:e,bottom:t,horizontal:n}){let r=[];for(let i=0;i<n.length;i+=2)r.push(_(n[i],e,n[i+1],t));return r}function y(t,n,r){let i=1e9,o=-1e9,s=[];function c(t,n,c,l,u){let p=e.coordsAtPos(t,t==r.to?-2:2),m=e.coordsAtPos(c,c==r.from?2:-2);p&&m&&(i=Math.min(p.top,m.top,i),o=Math.max(p.bottom,m.bottom,o),u==F.LTR?s.push(a&&n?d:p.left,a&&l?f:m.right):s.push(!a&&l?d:m.left,!a&&n?f:p.right))}let l=t??r.from,u=n??r.to;for(let r of e.visibleRanges)if(r.to>l&&r.from<u)for(let i=Math.max(r.from,l),a=Math.min(r.to,u);;){let r=e.state.doc.lineAt(i);for(let o of e.bidiSpans(r)){let e=o.from+r.from,s=o.to+r.from;if(e>=a)break;s>i&&c(Math.max(e,i),t==null&&e<=l,Math.min(s,a),n==null&&s>=u,o.dir)}if(i=r.to+1,i>=a)break}return s.length==0&&c(l,t==null,u,n==null,e.textDirection),{top:i,bottom:o,horizontal:s}}function ee(e,t){let n=s.top+(t?e.top:e.bottom);return{top:n,bottom:n,horizontal:[]}}}function Ns(e,t){return e.constructor==t.constructor&&e.eq(t)}var Ps=class{constructor(e,t){this.view=e,this.layer=t,this.drawn=[],this.scaleX=1,this.scaleY=1,this.measureReq={read:this.measure.bind(this),write:this.draw.bind(this)},this.dom=e.scrollDOM.appendChild(document.createElement(`div`)),this.dom.classList.add(`cm-layer`),t.above&&this.dom.classList.add(`cm-layer-above`),t.class&&this.dom.classList.add(t.class),this.scale(),this.dom.setAttribute(`aria-hidden`,`true`),this.setOrder(e.state),e.requestMeasure(this.measureReq),t.mount&&t.mount(this.dom,e)}update(e){e.startState.facet(Fs)!=e.state.facet(Fs)&&this.setOrder(e.state),(this.layer.update(e,this.dom)||e.geometryChanged)&&(this.scale(),e.view.requestMeasure(this.measureReq))}docViewUpdate(e){this.layer.updateOnDocViewUpdate!==!1&&e.requestMeasure(this.measureReq)}setOrder(e){let t=0,n=e.facet(Fs);for(;t<n.length&&n[t]!=this.layer;)t++;this.dom.style.zIndex=String((this.layer.above?150:-1)-t)}measure(){return this.layer.markers(this.view)}scale(){let{scaleX:e,scaleY:t}=this.view;(e!=this.scaleX||t!=this.scaleY)&&(this.scaleX=e,this.scaleY=t,this.dom.style.transform=`scale(${1/e}, ${1/t})`)}draw(e){if(e.length!=this.drawn.length||e.some((e,t)=>!Ns(e,this.drawn[t]))){let t=this.dom.firstChild,n=0;for(let r of e)r.update&&t&&r.constructor&&this.drawn[n].constructor&&r.update(t,this.drawn[n])?(t=t.nextSibling,n++):this.dom.insertBefore(r.draw(),t);for(;t;){let e=t.nextSibling;t.remove(),t=e}this.drawn=e,j.webkit&&(this.dom.style.display=this.dom.firstChild?``:`none`)}}destroy(){this.layer.destroy&&this.layer.destroy(this.dom,this.view),this.dom.remove()}},Fs=T.define();function Is(e){return[L.define(t=>new Ps(t,e)),Fs.of(e)]}var Ls=!j.ios,Rs=T.define({combine(e){return It(e,{cursorBlinkRate:1200,drawRangeCursor:!0,iosSelectionHandles:!0},{cursorBlinkRate:(e,t)=>Math.min(e,t),drawRangeCursor:(e,t)=>e||t})}});function zs(e={}){return[Rs.of(e),Vs,Us,Gs,Xr.of(!0)]}function Bs(e){return e.startState.facet(Rs)!=e.state.facet(Rs)}var Vs=Is({above:!0,markers(e){let{state:t}=e,n=t.facet(Rs),r=[];for(let i of t.selection.ranges){let a=i==t.selection.main;if(i.empty||n.drawRangeCursor&&!(a&&j.ios&&n.iosSelectionHandles)){let t=a?`cm-cursor cm-cursor-primary`:`cm-cursor cm-cursor-secondary`,n=i.empty?i:w.cursor(i.head,i.assoc);for(let i of ks.forRange(e,t,n))r.push(i)}}return r},update(e,t){e.transactions.some(e=>e.selection)&&(t.style.animationName=t.style.animationName==`cm-blink`?`cm-blink2`:`cm-blink`);let n=Bs(e);return n&&Hs(e.state,t),e.docChanged||e.selectionSet||n},mount(e,t){Hs(t.state,e)},class:`cm-cursorLayer`});function Hs(e,t){t.style.animationDuration=e.facet(Rs).cursorBlinkRate+`ms`}var Us=Is({above:!1,markers(e){let t=[],{main:n,ranges:r}=e.state.selection;for(let i of r)if(!i.empty&&(Ls||i!=n))for(let n of ks.forRange(e,`cm-selectionBackground`,i))t.push(n);if(j.ios&&!n.empty&&e.state.facet(Rs).iosSelectionHandles){for(let r of ks.forRange(e,`cm-selectionHandle cm-selectionHandle-start`,w.cursor(n.from,1)))t.push(r);for(let r of ks.forRange(e,`cm-selectionHandle cm-selectionHandle-end`,w.cursor(n.to,1)))t.push(r)}return t},update(e,t){return e.docChanged||e.selectionSet||e.viewportChanged||Bs(e)},class:`cm-selectionLayer`}),Ws=j.gecko&&j.gecko_version==153?`#ffffff01`:`transparent`,Gs=at.highest(B.theme({".cm-line":{...Ls?{"& ::selection, &::selection":{backgroundColor:`${Ws} !important`}}:{},caretColor:`transparent !important`},".cm-content":{caretColor:`transparent !important`,"& :focus":{caretColor:`initial !important`,...Ls?{"&::selection, & ::selection":{backgroundColor:`Highlight !important`}}:{}}}})),Ks=E.define({map(e,t){return e==null?null:t.mapPos(e)}}),qs=nt.define({create(){return null},update(e,t){return e!=null&&(e=t.changes.mapPos(e)),t.effects.reduce((e,t)=>t.is(Ks)?t.value:e,e)}}),Js=L.fromClass(class{constructor(e){this.view=e,this.cursor=null,this.measureReq={read:this.readPos.bind(this),write:this.drawCursor.bind(this)}}update(e){var t;let n=e.state.field(qs);n==null?this.cursor!=null&&((t=this.cursor)==null||t.remove(),this.cursor=null):(this.cursor||(this.cursor=this.view.scrollDOM.appendChild(document.createElement(`div`)),this.cursor.className=`cm-dropCursor`),(e.startState.field(qs)!=n||e.docChanged||e.geometryChanged)&&this.view.requestMeasure(this.measureReq))}readPos(){let{view:e}=this,t=e.state.field(qs),n=t!=null&&e.coordsAtPos(t);if(!n)return null;let r=e.scrollDOM.getBoundingClientRect();return{left:n.left-r.left+e.scrollDOM.scrollLeft*e.scaleX,top:n.top-r.top+e.scrollDOM.scrollTop*e.scaleY,height:n.bottom-n.top}}drawCursor(e){if(this.cursor){let{scaleX:t,scaleY:n}=this.view;e?(this.cursor.style.left=e.left/t+`px`,this.cursor.style.top=e.top/n+`px`,this.cursor.style.height=e.height/n+`px`):this.cursor.style.left=`-100000px`}}destroy(){this.cursor&&this.cursor.remove()}setDropPos(e){this.view.state.field(qs)!=e&&this.view.dispatch({effects:Ks.of(e)})}},{eventObservers:{dragover(e){this.setDropPos(this.view.posAtCoords({x:e.clientX,y:e.clientY}))},dragleave(e){(e.target==this.view.contentDOM||!this.view.contentDOM.contains(e.relatedTarget))&&this.setDropPos(null)},dragend(){this.setDropPos(null)},drop(){this.setDropPos(null)}}});function Ys(){return[qs,Js]}function Xs(e,t,n,r,i){t.lastIndex=0;for(let a=e.iterRange(n,r),o=n,s;!a.next().done;o+=a.value.length)if(!a.lineBreak)for(;s=t.exec(a.value);)i(o+s.index,s)}function Zs(e,t){let n=e.visibleRanges;if(n.length==1&&n[0].from==e.viewport.from&&n[0].to==e.viewport.to)return n;let r=[];for(let{from:i,to:a}of n)i=Math.max(e.state.doc.lineAt(i).from,i-t),a=Math.min(e.state.doc.lineAt(a).to,a+t),r.length&&r[r.length-1].to>=i?r[r.length-1].to=a:r.push({from:i,to:a});return r}var Qs=class{constructor(e){let{regexp:t,decoration:n,decorate:r,boundary:i,maxLength:a=1e3}=e;if(!t.global)throw RangeError(`The regular expression given to MatchDecorator should have its 'g' flag set`);if(this.regexp=t,r)this.addMatch=(e,t,n,i)=>r(i,n,n+e[0].length,e,t);else if(typeof n==`function`)this.addMatch=(e,t,r,i)=>{let a=n(e,t,r);a&&i(r,r+e[0].length,a)};else if(n)this.addMatch=(e,t,r,i)=>i(r,r+e[0].length,n);else throw RangeError(`Either 'decorate' or 'decoration' should be provided to MatchDecorator`);this.boundary=i,this.maxLength=a}createDeco(e){let t=new Wt,n=t.add.bind(t);for(let{from:t,to:r}of Zs(e,this.maxLength))Xs(e.state.doc,this.regexp,t,r,(t,r)=>this.addMatch(r,e,t,n));return t.finish()}updateDeco(e,t){let n=1e9,r=-1;return e.docChanged&&e.changes.iterChanges((t,i,a,o)=>{o>=e.view.viewport.from&&a<=e.view.viewport.to&&(n=Math.min(a,n),r=Math.max(o,r))}),e.viewportMoved||r-n>1e3?this.createDeco(e.view):r>-1?this.updateRange(e.view,t.map(e.changes),n,r):t}updateRange(e,t,n,r){for(let i of e.visibleRanges){let a=Math.max(i.from,n),o=Math.min(i.to,r);if(o>=a){let n=e.state.doc.lineAt(a),r=n.to<o?e.state.doc.lineAt(o):n,s=Math.max(i.from,n.from),c=Math.min(i.to,r.to);if(this.boundary){for(;a>n.from;a--)if(this.boundary.test(n.text[a-1-n.from])){s=a;break}for(;o<r.to;o++)if(this.boundary.test(r.text[o-r.from])){c=o;break}}let l=[],u,d=(e,t,n)=>l.push(n.range(e,t));if(n==r)for(this.regexp.lastIndex=s-n.from;(u=this.regexp.exec(n.text))&&u.index<c-n.from;)this.addMatch(u,e,u.index+n.from,d);else Xs(e.state.doc,this.regexp,s,c,(t,n)=>this.addMatch(n,e,t,d));t=t.update({filterFrom:s,filterTo:c,filter:(e,t)=>e<s||t>c,add:l})}}return t}},$s=/x/.unicode==null?`g`:`gu`,ec=RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]`,$s),tc={0:`null`,7:`bell`,8:`backspace`,10:`newline`,11:`vertical tab`,13:`carriage return`,27:`escape`,8203:`zero width space`,8204:`zero width non-joiner`,8205:`zero width joiner`,8206:`left-to-right mark`,8207:`right-to-left mark`,8232:`line separator`,8237:`left-to-right override`,8238:`right-to-left override`,8294:`left-to-right isolate`,8295:`right-to-left isolate`,8297:`pop directional isolate`,8233:`paragraph separator`,65279:`zero width no-break space`,65532:`object replacement`},nc=null;function rc(){if(nc==null&&typeof document<`u`&&document.body){let e=document.body.style;nc=(e.tabSize??e.MozTabSize)!=null}return nc||!1}var ic=T.define({combine(e){let t=It(e,{render:null,specialChars:ec,addSpecialChars:null});return(t.replaceTabs=!rc())&&(t.specialChars=RegExp(`	|`+t.specialChars.source,$s)),t.addSpecialChars&&(t.specialChars=RegExp(t.specialChars.source+`|`+t.addSpecialChars.source,$s)),t}});function ac(e={}){return[ic.of(e),sc()]}var oc=null;function sc(){return oc||(oc=L.fromClass(class{constructor(e){this.view=e,this.decorations=N.none,this.decorationCache=Object.create(null),this.decorator=this.makeDecorator(e.state.facet(ic)),this.decorations=this.decorator.createDeco(e)}makeDecorator(e){return new Qs({regexp:e.specialChars,decoration:(t,n,r)=>{let{doc:i}=n.state,a=Fe(t[0],0);if(a==9){let e=i.lineAt(r),t=n.state.tabSize,a=tn(e.text,t,r-e.from);return N.replace({widget:new dc((t-a%t)*this.view.defaultCharacterWidth/this.view.scaleX)})}return this.decorationCache[a]||(this.decorationCache[a]=N.replace({widget:new uc(e,a)}))},boundary:e.replaceTabs?void 0:/[^]/})}update(e){let t=e.state.facet(ic);e.startState.facet(ic)==t?this.decorations=this.decorator.updateDeco(e,this.decorations):(this.decorator=this.makeDecorator(t),this.decorations=this.decorator.createDeco(e.view))}},{decorations:e=>e.decorations}))}var cc=`•`;function lc(e){return e>=32?cc:e==10?`␤`:String.fromCharCode(9216+e)}var uc=class extends In{constructor(e,t){super(),this.options=e,this.code=t}eq(e){return e.code==this.code}toDOM(e){let t=lc(this.code),n=e.state.phrase(`Control character`)+` `+(tc[this.code]||`0x`+this.code.toString(16)),r=this.options.render&&this.options.render(this.code,n,t);if(r)return r;let i=document.createElement(`span`);return i.textContent=t,i.title=n,i.setAttribute(`aria-label`,n),i.className=`cm-specialChar`,i}ignoreEvent(){return!1}},dc=class extends In{constructor(e){super(),this.width=e}eq(e){return e.width==this.width}toDOM(){let e=document.createElement(`span`);return e.textContent=`	`,e.className=`cm-tab`,e.style.width=this.width+`px`,e}ignoreEvent(){return!1}};function fc(){return mc}var pc=N.line({class:`cm-activeLine`}),mc=L.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.docChanged||e.selectionSet)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=-1,n=[];for(let r of e.state.selection.ranges){let i=e.lineBlockAt(r.head);i.from>t&&(n.push(pc.range(i.from)),t=i.from)}return N.set(n)}},{decorations:e=>e.decorations}),hc=2e3;function gc(e,t,n){let r=Math.min(t.line,n.line),i=Math.max(t.line,n.line),a=[];if(t.off>hc||n.off>hc||t.col<0||n.col<0){let o=Math.min(t.off,n.off),s=Math.max(t.off,n.off);for(let t=r;t<=i;t++){let n=e.doc.line(t);n.length<=s&&a.push(w.range(n.from+o,n.to+s))}}else{let o=Math.min(t.col,n.col),s=Math.max(t.col,n.col);for(let t=r;t<=i;t++){let n=e.doc.line(t),r=nn(n.text,o,e.tabSize,!0);if(r<0)a.push(w.cursor(n.to));else{let t=nn(n.text,s,e.tabSize);a.push(w.range(n.from+r,n.from+t))}}}return a}function _c(e,t){let n=e.coordsAtPos(e.viewport.from);return n?Math.round(Math.abs((n.left-t)/e.defaultCharacterWidth)):-1}function vc(e,t){let n=e.posAtCoords({x:t.clientX,y:t.clientY},!1),r=e.state.doc.lineAt(n),i=n-r.from,a=i>hc?-1:i==r.length?_c(e,t.clientX):tn(r.text,e.state.tabSize,n-r.from);return{line:r.number,col:a,off:i}}function yc(e,t){let n=vc(e,t),r=e.state.selection;return n?{update(e){if(e.docChanged){let t=e.changes.mapPos(e.startState.doc.line(n.line).from),i=e.state.doc.lineAt(t);n={line:i.number,col:n.col,off:Math.min(n.off,i.length)},r=r.map(e.changes)}},get(t,i,a){let o=vc(e,t);if(!o)return r;let s=gc(e.state,n,o);return s.length?a?w.create(s.concat(r.ranges)):w.create(s):r}}:null}function bc(e){let t=e?.eventFilter||(e=>e.altKey&&e.button==0);return B.mouseSelectionStyle.of((e,n)=>t(n)?yc(e,n):null)}var xc={Alt:[18,e=>!!e.altKey],Control:[17,e=>!!e.ctrlKey],Shift:[16,e=>!!e.shiftKey],Meta:[91,e=>!!e.metaKey]},Sc={style:`cursor: crosshair`};function Cc(e={}){let[t,n]=xc[e.key||`Alt`],r=L.fromClass(class{constructor(e){this.view=e,this.isDown=!1}set(e){this.isDown!=e&&(this.isDown=e,this.view.update([]))}},{eventObservers:{keydown(e){this.set(e.keyCode==t||n(e))},keyup(e){(e.keyCode==t||!n(e))&&this.set(!1)},mousemove(e){this.set(n(e))}}});return[r,B.contentAttributes.of(e=>e.plugin(r)?.isDown?Sc:null)]}var wc=`-10000px`,Tc=class{constructor(e,t,n,r){this.facet=t,this.createTooltipView=n,this.removeTooltipView=r,this.input=e.state.facet(t),this.tooltips=this.input.filter(e=>e);let i=null;this.tooltipViews=this.tooltips.map(e=>i=n(e,i))}update(e,t){var n;let r=e.state.facet(this.facet),i=r.filter(e=>e);if(r===this.input){for(let t of this.tooltipViews)t.update&&t.update(e);return!1}let a=[],o=t?[]:null;for(let n=0;n<i.length;n++){let r=i[n],s=-1;if(r){for(let e=0;e<this.tooltips.length;e++){let t=this.tooltips[e];t&&t.create==r.create&&(s=e)}if(s<0)a[n]=this.createTooltipView(r,n?a[n-1]:null),o&&(o[n]=!!r.above);else{let r=a[n]=this.tooltipViews[s];o&&(o[n]=t[s]),r.update&&r.update(e)}}}for(let e of this.tooltipViews)a.indexOf(e)<0&&(this.removeTooltipView(e),(n=e.destroy)==null||n.call(e));return t&&(o.forEach((e,n)=>t[n]=e),t.length=o.length),this.input=r,this.tooltips=i,this.tooltipViews=a,!0}};function Ec(e){let t=e.dom.ownerDocument.documentElement,n=t.clientWidth,r=getComputedStyle(t);if(!/stable/.test(r.scrollbarGutter||``))return{left:0,right:n};let i=t.getBoundingClientRect(),a=e.win.scrollX;return{left:Math.max(0,i.left+a-parseFloat(r.marginLeft)),right:Math.min(n,i.right+a+parseFloat(r.marginRight))}}function Dc(e){let{left:t,right:n}=Ec(e);return{top:0,left:t,right:n,bottom:e.dom.ownerDocument.documentElement.clientHeight}}var Oc=T.define({combine:e=>({position:j.ios?`absolute`:e.find(e=>e.position)?.position||`fixed`,parent:e.find(e=>e.parent)?.parent||null,tooltipSpace:e.find(e=>e.tooltipSpace)?.tooltipSpace||Dc})}),kc=new WeakMap,Ac=L.fromClass(class{constructor(e){this.view=e,this.above=[],this.inView=!0,this.madeAbsolute=!1,this.lastTransaction=0,this.measureTimeout=-1;let t=e.state.facet(Oc);this.position=t.position,this.parent=t.parent,this.classes=e.themeClasses,this.createContainer(),this.measureReq={read:this.readMeasure.bind(this),write:this.writeMeasure.bind(this),key:this},this.resizeObserver=typeof ResizeObserver==`function`?new ResizeObserver(()=>this.measureSoon()):null,this.manager=new Tc(e,Pc,(e,t)=>this.createTooltip(e,t),e=>{this.resizeObserver&&this.resizeObserver.unobserve(e.dom),e.dom.remove()}),this.above=this.manager.tooltips.map(e=>!!e.above),this.intersectionObserver=typeof IntersectionObserver==`function`?new IntersectionObserver(e=>{Date.now()>this.lastTransaction-50&&e.length>0&&e[e.length-1].intersectionRatio<1&&this.measureSoon()},{threshold:[1]}):null,this.observeIntersection(),e.win.addEventListener(`resize`,this.measureSoon=this.measureSoon.bind(this)),this.maybeMeasure()}createContainer(){this.parent?(this.container=document.createElement(`div`),this.container.style.position=`relative`,this.container.className=this.view.themeClasses,this.parent.appendChild(this.container)):this.container=this.view.dom}observeIntersection(){if(this.intersectionObserver){this.intersectionObserver.disconnect();for(let e of this.manager.tooltipViews)this.intersectionObserver.observe(e.dom)}}measureSoon(){this.measureTimeout<0&&(this.measureTimeout=setTimeout(()=>{this.measureTimeout=-1,this.maybeMeasure()},50))}update(e){e.transactions.length&&(this.lastTransaction=Date.now());let t=this.manager.update(e,this.above);t&&this.observeIntersection();let n=t||e.geometryChanged,r=e.state.facet(Oc);if(r.position!=this.position&&!this.madeAbsolute){this.position=r.position;for(let e of this.manager.tooltipViews)e.dom.style.position=this.position;n=!0}if(r.parent!=this.parent){this.parent&&this.container.remove(),this.parent=r.parent,this.createContainer();for(let e of this.manager.tooltipViews)this.container.appendChild(e.dom);n=!0}else this.parent&&this.view.themeClasses!=this.classes&&(this.classes=this.container.className=this.view.themeClasses);n&&this.maybeMeasure()}createTooltip(e,t){let n=e.create(this.view),r=t?t.dom:null;if(n.dom.classList.add(`cm-tooltip`),e.arrow&&!n.dom.querySelector(`.cm-tooltip > .cm-tooltip-arrow`)){let e=document.createElement(`div`);e.className=`cm-tooltip-arrow`,n.dom.appendChild(e)}return n.dom.style.position=this.position,n.dom.style.top=wc,n.dom.style.left=`0px`,this.container.insertBefore(n.dom,r),n.mount&&n.mount(this.view),this.resizeObserver&&this.resizeObserver.observe(n.dom),n}destroy(){var e,t,n;this.view.win.removeEventListener(`resize`,this.measureSoon);for(let t of this.manager.tooltipViews)t.dom.remove(),(e=t.destroy)==null||e.call(t);this.parent&&this.container.remove(),(t=this.resizeObserver)==null||t.disconnect(),(n=this.intersectionObserver)==null||n.disconnect(),clearTimeout(this.measureTimeout)}readMeasure(){let e=1,t=1,n=!1,r=0;if(this.position==`fixed`&&this.manager.tooltipViews.length){let{dom:e}=this.manager.tooltipViews[0];if(j.safari){let t=e.getBoundingClientRect();n=Math.abs(t.top+1e4)>1||Math.abs(t.left)>1}else n=!!e.offsetParent&&e.offsetParent!=this.container.ownerDocument.body}if(n||this.position==`absolute`){if(this.parent){let n=this.parent.getBoundingClientRect();n.width&&n.height&&(e=n.width/this.parent.offsetWidth,t=n.height/this.parent.offsetHeight)}else({scaleX:e,scaleY:t}=this.view.viewState)}else r=Ec(this.view).left;let i=this.view.scrollDOM.getBoundingClientRect(),a=hi(this.view);return{visible:{left:i.left+a.left,top:i.top+a.top,right:i.right-a.right,bottom:i.bottom-a.bottom},parent:this.parent?this.container.getBoundingClientRect():this.view.dom.getBoundingClientRect(),pos:this.manager.tooltips.map((e,t)=>{let n=this.manager.tooltipViews[t];return n.getCoords?n.getCoords(e.pos):this.view.coordsAtPos(e.pos)}),size:this.manager.tooltipViews.map(({dom:e})=>e.getBoundingClientRect()),space:this.view.state.facet(Oc).tooltipSpace(this.view),scaleX:e,scaleY:t,makeAbsolute:n,fixedLeft:r}}writeMeasure(e){if(e.makeAbsolute){this.madeAbsolute=!0,this.position=`absolute`;for(let e of this.manager.tooltipViews)e.dom.style.position=`absolute`}let{visible:t,space:n,scaleX:r,scaleY:i}=e,a=[];for(let o=0;o<this.manager.tooltips.length;o++){let s=this.manager.tooltips[o],c=this.manager.tooltipViews[o],{dom:l}=c,u=e.pos[o],d=e.size[o];if(!u||s.clip!==!1&&(u.bottom<=Math.max(t.top,n.top)||u.top>=Math.min(t.bottom,n.bottom)||u.right<Math.max(t.left,n.left)-.1||u.left>Math.min(t.right,n.right)+.1)){l.style.top=wc;continue}let f=s.arrow?c.dom.querySelector(`.cm-tooltip-arrow`):null,p=f?7:0,m=d.right-d.left,h=kc.get(c)??d.bottom-d.top,g=c.offset||Nc,_=this.view.textDirection==F.LTR,v=d.width>n.right-n.left?_?n.left:n.right-d.width:_?Math.max(n.left,Math.min(u.left-(f?14:0)+g.x,n.right-m)):Math.min(Math.max(n.left,u.left-m+(f?14:0)-g.x),n.right-m),y=this.above[o];!s.strictSide&&(y?u.top-h-p-g.y<n.top:u.bottom+h+p+g.y>n.bottom)&&y==n.bottom-u.bottom>u.top-n.top&&(y=this.above[o]=!y);let ee=(y?u.top-n.top:n.bottom-u.bottom)-p;if(ee<h&&c.resize!==!1){if(ee<this.view.defaultLineHeight){l.style.top=wc;continue}kc.set(c,h),l.style.height=(h=ee)/i+`px`}else l.style.height&&(l.style.height=``);let te=y?u.top-h-p-g.y:u.bottom+p+g.y,ne=v+m;if(c.overlap!==!0)for(let e of a)e.left<ne&&e.right>v&&e.top<te+h&&e.bottom>te&&(te=y?e.top-h-2-p:e.bottom+p+2);if(this.position==`absolute`?(l.style.top=(te-e.parent.top)/i+`px`,jc(l,(v-e.parent.left)/r)):(l.style.top=te/i+`px`,jc(l,(v-e.fixedLeft)/r)),f){let e=u.left+(_?g.x:-g.x)-(v+14-7);f.style.left=e/r+`px`}c.overlap!==!0&&a.push({left:v,top:te,right:ne,bottom:te+h}),l.classList.toggle(`cm-tooltip-above`,y),l.classList.toggle(`cm-tooltip-below`,!y),c.positioned&&c.positioned(e.space)}}maybeMeasure(){if(this.manager.tooltips.length&&(this.view.inView&&this.view.requestMeasure(this.measureReq),this.inView!=this.view.inView&&(this.inView=this.view.inView,!this.inView)))for(let e of this.manager.tooltipViews)e.dom.style.top=wc}},{eventObservers:{scroll(){this.maybeMeasure()}}});function jc(e,t){let n=parseInt(e.style.left,10);(isNaN(n)||Math.abs(t-n)>1)&&(e.style.left=t+`px`)}var Mc=B.baseTheme({".cm-tooltip":{zIndex:500,boxSizing:`border-box`},"&light .cm-tooltip":{border:`1px solid #bbb`,backgroundColor:`#f5f5f5`},"&light .cm-tooltip-section:not(:first-child)":{borderTop:`1px solid #bbb`},"&dark .cm-tooltip":{backgroundColor:`#333338`,color:`white`},".cm-tooltip-arrow":{height:`7px`,width:`14px`,position:`absolute`,zIndex:-1,overflow:`hidden`,"&:before, &:after":{content:`''`,position:`absolute`,width:0,height:0,borderLeft:`7px solid transparent`,borderRight:`7px solid transparent`},".cm-tooltip-above &":{bottom:`-7px`,"&:before":{borderTop:`7px solid #bbb`},"&:after":{borderTop:`7px solid #f5f5f5`,bottom:`1px`}},".cm-tooltip-below &":{top:`-7px`,"&:before":{borderBottom:`7px solid #bbb`},"&:after":{borderBottom:`7px solid #f5f5f5`,top:`1px`}}},"&dark .cm-tooltip .cm-tooltip-arrow":{"&:before":{borderTopColor:`#333338`,borderBottomColor:`#333338`},"&:after":{borderTopColor:`transparent`,borderBottomColor:`transparent`}}}),Nc={x:0,y:0},Pc=T.define({enables:[Ac,Mc]}),Fc=T.define({combine:e=>e.reduce((e,t)=>e.concat(t),[])}),Ic=class e{static create(t){return new e(t)}constructor(e){this.view=e,this.mounted=!1,this.dom=document.createElement(`div`),this.dom.classList.add(`cm-tooltip-hover`),this.manager=new Tc(e,Fc,(e,t)=>this.createHostedView(e,t),e=>e.dom.remove())}createHostedView(e,t){let n=e.create(this.view);return n.dom.classList.add(`cm-tooltip-section`),this.dom.insertBefore(n.dom,t?t.dom.nextSibling:this.dom.firstChild),this.mounted&&n.mount&&n.mount(this.view),n}mount(e){for(let t of this.manager.tooltipViews)t.mount&&t.mount(e);this.mounted=!0}positioned(e){for(let t of this.manager.tooltipViews)t.positioned&&t.positioned(e)}update(e){this.manager.update(e)}destroy(){var e;for(let t of this.manager.tooltipViews)(e=t.destroy)==null||e.call(t)}passProp(e){let t;for(let n of this.manager.tooltipViews){let r=n[e];if(r!==void 0){if(t===void 0)t=r;else if(t!==r)return}}return t}get offset(){return this.passProp(`offset`)}get getCoords(){return this.passProp(`getCoords`)}get overlap(){return this.passProp(`overlap`)}get resize(){return this.passProp(`resize`)}},Lc=Pc.compute([Fc],e=>{let t=e.facet(Fc);return t.length===0?null:{pos:Math.min(...t.map(e=>e.pos)),end:Math.max(...t.map(e=>e.end??e.pos)),create:Ic.create,above:t[0].above,arrow:t.some(e=>e.arrow)}}),Rc=T.define(),zc=class{constructor(e,t,n,r,i,a){this.view=e,this.source=t,this.field=n,this.locked=r,this.setHover=i,this.hoverTime=a,this.hoverTimeout=-1,this.restartTimeout=-1,this.pending=null,this.lastMove={x:0,y:0,target:e.dom,time:0},this.checkHover=this.checkHover.bind(this),e.dom.addEventListener(`mouseleave`,this.mouseleave=this.mouseleave.bind(this)),e.dom.addEventListener(`mousemove`,this.mousemove=this.mousemove.bind(this))}update(e){this.pending&&(this.pending=null,clearTimeout(this.restartTimeout),this.restartTimeout=setTimeout(()=>this.startHover(),20))}get active(){return this.view.state.field(this.field)}checkHover(){if(this.hoverTimeout=-1,this.active.length)return;let e=Date.now()-this.lastMove.time;e<this.hoverTime?this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime-e):this.startHover()}startHover(){clearTimeout(this.restartTimeout);let{view:e,lastMove:t}=this,n=e.docView.tile.nearest(t.target);if(!n)return;let r,i=1;if(n.isWidget())r=n.posAtStart;else{if(r=e.posAtCoords(t),r==null)return;let n=e.coordsAtPos(r);if(!n||t.y<n.top||t.y>n.bottom||t.x<n.left-e.defaultCharacterWidth||t.x>n.right+e.defaultCharacterWidth)return;let a=e.bidiSpans(e.state.doc.lineAt(r)).find(e=>e.from<=r&&e.to>=r),o=a&&a.dir==F.RTL?-1:1;i=t.x<n.left?-o:o}this.activateHover(e,r,i)}activateHover(e,t,n,r){let i=this.source(e,t,n),a=t=>{if(t&&(!Array.isArray(t)||t.length)){let n=Array.isArray(t)?t:[t];r&&this.locked.set(n,r),e.dispatch({effects:this.setHover.of(n)})}};if(i&&`then`in i){let n=this.pending={pos:t};i.then(e=>{this.pending==n&&(this.pending=null,a(e))},t=>ti(e.state,t,`hover tooltip`))}else a(i)}get tooltip(){let e=this.view.plugin(Ac),t=e?e.manager.tooltips.findIndex(e=>e.create==Ic.create):-1;return t>-1?e.manager.tooltipViews[t]:null}mousemove(e){this.lastMove={x:e.clientX,y:e.clientY,target:e.target,time:Date.now()},this.hoverTimeout<0&&(this.hoverTimeout=setTimeout(this.checkHover,this.hoverTime));let{active:t,tooltip:n}=this;if(t.length&&!this.locked.has(t)&&n&&!Vc(n.dom,e)||this.pending){let{pos:n}=t[0]||this.pending,r=t[0]?.end??n;(n==r?this.view.posAtCoords(this.lastMove)!=n:!Hc(this.view,n,r,e.clientX,e.clientY))&&(this.view.dispatch({effects:this.setHover.of([])}),this.pending=null)}}mouseleave(e){clearTimeout(this.hoverTimeout),this.hoverTimeout=-1;let{active:t}=this;if(t.length&&!this.locked.has(t)){let{tooltip:t}=this;t&&t.dom.contains(e.relatedTarget)?this.watchTooltipLeave(t.dom):this.view.dispatch({effects:this.setHover.of([])})}}watchTooltipLeave(e){let t=n=>{e.removeEventListener(`mouseleave`,t);let{active:r}=this;r.length&&!this.locked.has(r)&&!this.view.dom.contains(n.relatedTarget)&&this.view.dispatch({effects:this.setHover.of([])})};e.addEventListener(`mouseleave`,t)}destroy(){clearTimeout(this.hoverTimeout),clearTimeout(this.restartTimeout),this.view.dom.removeEventListener(`mouseleave`,this.mouseleave),this.view.dom.removeEventListener(`mousemove`,this.mousemove)}},Bc=4;function Vc(e,t){let{left:n,right:r,top:i,bottom:a}=e.getBoundingClientRect(),o;if(o=e.querySelector(`.cm-tooltip-arrow`)){let e=o.getBoundingClientRect();i=Math.min(e.top,i),a=Math.max(e.bottom,a)}return t.clientX>=n-Bc&&t.clientX<=r+Bc&&t.clientY>=i-Bc&&t.clientY<=a+Bc}function Hc(e,t,n,r,i,a){let o=e.scrollDOM.getBoundingClientRect(),s=e.documentTop+e.documentPadding.top+e.contentHeight;if(o.left>r||o.right<r||o.top>i||Math.min(o.bottom,s)<i)return!1;let c=e.posAtCoords({x:r,y:i},!1);return c>=t&&c<=n}function Uc(e,t={}){let n=E.define(),r=new WeakMap,i=nt.define({create(){return[]},update(e,a){let o=r.get(e);if(e.length&&(t.hideOnChange&&(a.docChanged||a.selection)||o&&o(a)?e=[]:t.hideOn&&(e=e.filter(e=>!t.hideOn(a,e)))),a.docChanged&&e.length){let t=[];for(let n of e){let e=a.changes.mapPos(n.pos,-1,ze.TrackDel);if(e!=null){let r=Object.assign(Object.create(null),n);r.pos=e,r.end!=null&&(r.end=a.changes.mapPos(r.end)),t.push(r)}}e=t}for(let t of a.effects)t.is(n)&&(e=t.value,o=void 0),(t.is(Kc)&&!t.value||t.value==i)&&(e=[]);return e.length&&o&&r.set(e,o),e},provide:e=>Fc.from(e)}),a=L.define(a=>new zc(a,e,i,r,n,t.hoverTime||300));return{active:i,extension:[i,a,Rc.of(a),Lc]}}function Wc(e,t,n,r={}){let i=e.state.facet(Rc).map(t=>e.plugin(t)).filter(e=>!!e);if(r.tooltip&&r.tooltip.active){let e=i.find(e=>e.field==r.tooltip.active);e&&(i=[e])}for(let a of i)a.activateHover(e,t,n,r.until??(()=>!1))}function Gc(e,t){let n=e.plugin(Ac);if(!n)return null;let r=n.manager.tooltips.indexOf(t);return r<0?null:n.manager.tooltipViews[r]}var Kc=E.define(),qc=T.define({combine(e){let t,n;for(let r of e)t=t||r.topContainer,n=n||r.bottomContainer;return{topContainer:t,bottomContainer:n}}});function Jc(e,t){let n=e.plugin(Yc),r=n?n.specs.indexOf(t):-1;return r>-1?n.panels[r]:null}var Yc=L.fromClass(class{constructor(e){this.input=e.state.facet(Qc),this.specs=this.input.filter(e=>e),this.panels=this.specs.map(t=>t(e));let t=e.state.facet(qc);this.top=new Xc(e,!0,t.topContainer),this.bottom=new Xc(e,!1,t.bottomContainer),this.top.sync(this.panels.filter(e=>e.top)),this.bottom.sync(this.panels.filter(e=>!e.top));for(let e of this.panels)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}update(e){let t=e.state.facet(qc);this.top.container!=t.topContainer&&(this.top.sync([]),this.top=new Xc(e.view,!0,t.topContainer)),this.bottom.container!=t.bottomContainer&&(this.bottom.sync([]),this.bottom=new Xc(e.view,!1,t.bottomContainer)),this.top.syncClasses(),this.bottom.syncClasses();let n=e.state.facet(Qc);if(n!=this.input){let t=n.filter(e=>e),r=[],i=[],a=[],o=[];for(let n of t){let t=this.specs.indexOf(n),s;t<0?(s=n(e.view),o.push(s)):(s=this.panels[t],s.update&&s.update(e)),r.push(s),(s.top?i:a).push(s)}this.specs=t,this.panels=r,this.top.sync(i),this.bottom.sync(a);for(let e of o)e.dom.classList.add(`cm-panel`),e.mount&&e.mount()}else for(let t of this.panels)t.update&&t.update(e)}destroy(){this.top.sync([]),this.bottom.sync([])}},{provide:e=>B.scrollMargins.of(t=>{let n=t.plugin(e);return n&&{top:n.top.scrollMargin(),bottom:n.bottom.scrollMargin()}})}),Xc=class{constructor(e,t,n){this.view=e,this.top=t,this.container=n,this.dom=void 0,this.classes=``,this.panels=[],this.syncClasses()}sync(e){for(let t of this.panels)t.destroy&&e.indexOf(t)<0&&t.destroy();this.panels=e,this.syncDOM()}syncDOM(){if(this.panels.length==0){this.dom&&(this.dom.remove(),this.dom=void 0);return}if(!this.dom){this.dom=document.createElement(`div`),this.dom.className=this.top?`cm-panels cm-panels-top`:`cm-panels cm-panels-bottom`;let e=this.container||this.view.dom;e.insertBefore(this.dom,this.top?e.firstChild:null)}let e=this.dom.firstChild;for(let t of this.panels)if(t.dom.parentNode==this.dom){for(;e!=t.dom;)e=Zc(e);e=e.nextSibling}else this.dom.insertBefore(t.dom,e);for(;e;)e=Zc(e)}scrollMargin(){return!this.dom||this.container?0:Math.max(0,this.top?this.dom.getBoundingClientRect().bottom-Math.max(0,this.view.scrollDOM.getBoundingClientRect().top):Math.min(innerHeight,this.view.scrollDOM.getBoundingClientRect().bottom)-this.dom.getBoundingClientRect().top)}syncClasses(){if(this.container&&this.classes!=this.view.themeClasses){for(let e of this.classes.split(` `))e&&this.container.classList.remove(e);for(let e of(this.classes=this.view.themeClasses).split(` `))e&&this.container.classList.add(e)}}};function Zc(e){let t=e.nextSibling;return e.remove(),t}var Qc=T.define({enables:Yc});function $c(e,t){let n,r=new Promise(e=>n=e),i=e=>il(e,t,n);e.state.field(tl,!1)?e.dispatch({effects:nl.of(i)}):e.dispatch({effects:E.appendConfig.of(tl.init(()=>[i]))});let a=rl.of(i);return{close:a,result:r.then(t=>((e.win.queueMicrotask||(t=>e.win.setTimeout(t,10)))(()=>{e.state.field(tl).indexOf(i)>-1&&e.dispatch({effects:a})}),t))}}function el(e,t){let n=e.state.field(tl,!1)||[];for(let r of n){let n=Jc(e,r);if(n&&n.dom.classList.contains(t))return n}return null}var tl=nt.define({create(){return[]},update(e,t){for(let n of t.effects)n.is(nl)?e=[n.value].concat(e):n.is(rl)&&(e=e.filter(e=>e!=n.value));return e},provide:e=>Qc.computeN([e],t=>t.field(e))}),nl=E.define(),rl=E.define();function il(e,t,n){let r=t.content?t.content(e,()=>o(null)):null;if(!r){if(r=A(`form`),t.input){let e=A(`input`,t.input);/^(text|password|number|email|tel|url)$/.test(e.type)&&e.classList.add(`cm-textfield`),e.name||(e.name=`input`),r.appendChild(A(`label`,(t.label||``)+`: `,e))}else r.appendChild(document.createTextNode(t.label||``));r.appendChild(document.createTextNode(` `)),r.appendChild(A(`button`,{class:`cm-button`,type:`submit`},t.submitLabel||`OK`))}let i=r.nodeName==`FORM`?[r]:r.querySelectorAll(`form`);for(let e=0;e<i.length;e++){let t=i[e];t.addEventListener(`keydown`,e=>{e.keyCode==27?(e.preventDefault(),o(null)):e.keyCode==13&&(e.preventDefault(),o(t))}),t.addEventListener(`submit`,e=>{e.preventDefault(),o(t)})}let a=A(`div`,r,A(`button`,{onclick:()=>o(null),"aria-label":e.state.phrase(`close`),class:`cm-dialog-close`,type:`button`},[`×`]));t.class&&(a.className=t.class),a.classList.add(`cm-dialog`);function o(t){a.contains(a.ownerDocument.activeElement)&&e.focus(),n(t)}return{dom:a,top:t.top,mount:()=>{if(t.focus){let e;e=typeof t.focus==`string`?r.querySelector(t.focus):r.querySelector(`input`)||r.querySelector(`button`),e&&`select`in e?e.select():e&&`focus`in e&&e.focus()}}}}var al=class extends Lt{compare(e){return this==e||this.constructor==e.constructor&&this.eq(e)}eq(e){return!1}destroy(e){}};al.prototype.elementClass=``,al.prototype.toDOM=void 0,al.prototype.mapMode=ze.TrackBefore,al.prototype.startSide=al.prototype.endSide=-1,al.prototype.point=!0;var ol=T.define(),sl=T.define(),cl={class:``,renderEmptyElements:!1,elementStyle:``,markers:()=>k.empty,lineMarker:()=>null,widgetMarker:()=>null,lineMarkerChange:null,initialSpacer:null,updateSpacer:null,domEventHandlers:{},side:`before`},ll=T.define();function ul(e){return[fl(),ll.of({...cl,...e})]}var dl=T.define({combine:e=>e.some(e=>e)});function fl(e){let t=[pl];return e&&e.fixed===!1&&t.push(dl.of(!0)),t}var pl=L.fromClass(class{constructor(e){this.view=e,this.domAfter=null,this.prevViewport=e.viewport,this.dom=document.createElement(`div`),this.dom.className=`cm-gutters cm-gutters-before`,this.dom.setAttribute(`aria-hidden`,`true`),this.dom.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.gutters=e.state.facet(ll).map(t=>new _l(e,t)),this.fixed=!e.state.facet(dl);for(let e of this.gutters)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.fixed&&(this.dom.style.position=`sticky`),this.syncGutters(!1),e.scrollDOM.insertBefore(this.dom,e.contentDOM)}getDOMAfter(){return this.domAfter||(this.domAfter=document.createElement(`div`),this.domAfter.className=`cm-gutters cm-gutters-after`,this.domAfter.setAttribute(`aria-hidden`,`true`),this.domAfter.style.minHeight=this.view.contentHeight/this.view.scaleY+`px`,this.domAfter.style.position=this.fixed?`sticky`:``,this.view.scrollDOM.appendChild(this.domAfter)),this.domAfter}update(e){if(this.updateGutters(e)){let t=this.prevViewport,n=e.view.viewport,r=Math.min(t.to,n.to)-Math.max(t.from,n.from);this.syncGutters(r<(n.to-n.from)*.8)}if(e.geometryChanged){let e=this.view.contentHeight/this.view.scaleY+`px`;this.dom.style.minHeight=e,this.domAfter&&(this.domAfter.style.minHeight=e)}this.view.state.facet(dl)!=!this.fixed&&(this.fixed=!this.fixed,this.dom.style.position=this.fixed?`sticky`:``,this.domAfter&&(this.domAfter.style.position=this.fixed?`sticky`:``)),this.prevViewport=e.view.viewport}syncGutters(e){let t=this.dom.nextSibling;e&&(this.dom.remove(),this.domAfter&&this.domAfter.remove());let n=k.iter(this.view.state.facet(ol),this.view.viewport.from),r=[],i=this.gutters.map(e=>new gl(e,this.view.viewport,-this.view.documentPadding.top));for(let e of this.view.viewportLineBlocks)if(r.length&&(r=[]),Array.isArray(e.type)){let t=!0;for(let a of e.type)if(a.type==M.Text&&t){hl(n,r,a.from);for(let e of i)e.line(this.view,a,r);t=!1}else if(a.widget)for(let e of i)e.widget(this.view,a)}else if(e.type==M.Text){hl(n,r,e.from);for(let t of i)t.line(this.view,e,r)}else if(e.widget)for(let t of i)t.widget(this.view,e);for(let e of i)e.finish();e&&(this.view.scrollDOM.insertBefore(this.dom,t),this.domAfter&&this.view.scrollDOM.appendChild(this.domAfter))}updateGutters(e){let t=e.startState.facet(ll),n=e.state.facet(ll),r=e.docChanged||e.heightChanged||e.viewportChanged||!k.eq(e.startState.facet(ol),e.state.facet(ol),e.view.viewport.from,e.view.viewport.to);if(t==n)for(let t of this.gutters)t.update(e)&&(r=!0);else{r=!0;let i=[];for(let r of n){let n=t.indexOf(r);n<0?i.push(new _l(this.view,r)):(this.gutters[n].update(e),i.push(this.gutters[n]))}for(let e of this.gutters)e.dom.remove(),i.indexOf(e)<0&&e.destroy();for(let e of i)e.config.side==`after`?this.getDOMAfter().appendChild(e.dom):this.dom.appendChild(e.dom);this.gutters=i}return r}destroy(){for(let e of this.gutters)e.destroy();this.dom.remove(),this.domAfter&&this.domAfter.remove()}},{provide:e=>B.scrollMargins.of(t=>{let n=t.plugin(e);if(!n||n.gutters.length==0||!n.fixed)return null;let r=n.dom.offsetWidth*t.scaleX,i=n.domAfter?n.domAfter.offsetWidth*t.scaleX:0;return t.textDirection==F.LTR?{left:r,right:i}:{right:r,left:i}})});function ml(e){return Array.isArray(e)?e:[e]}function hl(e,t,n){for(;e.value&&e.from<=n;)e.from==n&&t.push(e.value),e.next()}var gl=class{constructor(e,t,n){this.gutter=e,this.height=n,this.i=0,this.cursor=k.iter(e.markers,t.from)}addElement(e,t,n){let{gutter:r}=this,i=(t.top-this.height)/e.scaleY,a=t.height/e.scaleY;if(this.i==r.elements.length){let t=new vl(e,a,i,n);r.elements.push(t),r.dom.appendChild(t.dom)}else r.elements[this.i].update(e,a,i,n);this.height=t.bottom,this.i++}line(e,t,n){let r=[];hl(this.cursor,r,t.from),n.length&&(r=r.concat(n));let i=this.gutter.config.lineMarker(e,t,r);i&&r.unshift(i);let a=this.gutter;(r.length!=0||a.config.renderEmptyElements)&&this.addElement(e,t,r)}widget(e,t){let n=this.gutter.config.widgetMarker(e,t.widget,t),r=n?[n]:null;for(let n of e.state.facet(sl)){let i=n(e,t.widget,t);i&&(r||(r=[])).push(i)}r&&this.addElement(e,t,r)}finish(){let e=this.gutter;for(;e.elements.length>this.i;){let t=e.elements.pop();e.dom.removeChild(t.dom),t.destroy()}}},_l=class{constructor(e,t){this.view=e,this.config=t,this.elements=[],this.spacer=null,this.dom=document.createElement(`div`),this.dom.className=`cm-gutter`+(this.config.class?` `+this.config.class:``);for(let n in t.domEventHandlers)this.dom.addEventListener(n,r=>{let i=r.target,a;if(i!=this.dom&&this.dom.contains(i)){for(;i.parentNode!=this.dom;)i=i.parentNode;let e=i.getBoundingClientRect();a=(e.top+e.bottom)/2}else a=r.clientY;let o=e.lineBlockAtHeight(a-e.documentTop);t.domEventHandlers[n](e,o,r)&&r.preventDefault()});this.markers=ml(t.markers(e)),t.initialSpacer&&(this.spacer=new vl(e,0,0,[t.initialSpacer(e)]),this.dom.appendChild(this.spacer.dom),this.spacer.dom.style.cssText+=`visibility: hidden; pointer-events: none`)}update(e){let t=this.markers;if(this.markers=ml(this.config.markers(e.view)),this.spacer&&this.config.updateSpacer){let t=this.config.updateSpacer(this.spacer.markers[0],e);t!=this.spacer.markers[0]&&this.spacer.update(e.view,0,0,[t])}let n=e.view.viewport;return!k.eq(this.markers,t,n.from,n.to)||(this.config.lineMarkerChange?this.config.lineMarkerChange(e):!1)}destroy(){for(let e of this.elements)e.destroy()}},vl=class{constructor(e,t,n,r){this.height=-1,this.above=0,this.markers=[],this.dom=document.createElement(`div`),this.dom.className=`cm-gutterElement`,this.update(e,t,n,r)}update(e,t,n,r){this.height!=t&&(this.height=t,this.dom.style.height=t+`px`),this.above!=n&&(this.dom.style.marginTop=(this.above=n)?n+`px`:``),yl(this.markers,r)||this.setMarkers(e,r)}setMarkers(e,t){let n=`cm-gutterElement`,r=this.dom.firstChild;for(let i=0,a=0;;){let o=a,s=i<t.length?t[i++]:null,c=!1;if(s){let e=s.elementClass;e&&(n+=` `+e);for(let e=a;e<this.markers.length;e++)if(this.markers[e].compare(s)){o=e,c=!0;break}}else o=this.markers.length;for(;a<o;){let e=this.markers[a++];if(e.toDOM){e.destroy(r);let t=r.nextSibling;r.remove(),r=t}}if(!s)break;s.toDOM&&(c?r=r.nextSibling:this.dom.insertBefore(s.toDOM(e),r)),c&&a++}this.dom.className=n,this.markers=t}destroy(){this.setMarkers(null,[])}};function yl(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].compare(t[n]))return!1;return!0}var bl=T.define(),xl=T.define(),Sl=T.define({combine(e){return It(e,{formatNumber:String,domEventHandlers:{}},{domEventHandlers(e,t){let n=Object.assign({},e);for(let e in t){let r=n[e],i=t[e];n[e]=r?(e,t,n)=>r(e,t,n)||i(e,t,n):i}return n}})}}),Cl=class extends al{constructor(e){super(),this.number=e}eq(e){return this.number==e.number}toDOM(){return document.createTextNode(this.number)}};function wl(e,t){return e.state.facet(Sl).formatNumber(t,e.state)}var Tl=ll.compute([Sl],e=>({class:`cm-lineNumbers`,renderEmptyElements:!1,markers(e){return e.state.facet(bl)},lineMarker(e,t,n){return n.some(e=>e.toDOM)?null:new Cl(wl(e,e.state.doc.lineAt(t.from).number))},widgetMarker:(e,t,n)=>{for(let r of e.state.facet(xl)){let i=r(e,t,n);if(i)return i}return null},lineMarkerChange:e=>e.startState.facet(Sl)!=e.state.facet(Sl),initialSpacer(e){return new Cl(wl(e,Dl(e.state.doc.lines)))},updateSpacer(e,t){let n=wl(t.view,Dl(t.view.state.doc.lines));return n==e.number?e:new Cl(n)},domEventHandlers:e.facet(Sl).domEventHandlers,side:`before`}));function El(e={}){return[Sl.of(e),fl(),Tl]}function Dl(e){let t=9;for(;t<e;)t=t*10+9;return t}var Ol=new class extends al{constructor(){super(...arguments),this.elementClass=`cm-activeLineGutter`}},kl=ol.compute([`selection`],e=>{let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.head).from;i>n&&(n=i,t.push(Ol.range(i)))}return k.of(t)});function Al(){return kl}var jl=1024,Ml=0,Nl=class{constructor(e,t){this.from=e,this.to=t}},V=class{constructor(e={}){this.id=Ml++,this.perNode=!!e.perNode,this.deserialize=e.deserialize||(()=>{throw Error(`This node type doesn't define a deserialize function`)}),this.combine=e.combine||null}add(e){if(this.perNode)throw RangeError(`Can't add per-node props to node types`);return typeof e!=`function`&&(e=Il.match(e)),t=>{let n=e(t);return n===void 0?null:[this,n]}}};V.closedBy=new V({deserialize:e=>e.split(` `)}),V.openedBy=new V({deserialize:e=>e.split(` `)}),V.group=new V({deserialize:e=>e.split(` `)}),V.isolate=new V({deserialize:e=>{if(e&&e!=`rtl`&&e!=`ltr`&&e!=`auto`)throw RangeError(`Invalid value for isolate: `+e);return e||`auto`}}),V.contextHash=new V({perNode:!0}),V.lookAhead=new V({perNode:!0}),V.mounted=new V({perNode:!0});var Pl=class{constructor(e,t,n,r=!1){this.tree=e,this.overlay=t,this.parser=n,this.bracketed=r}static get(e){return e&&e.props&&e.props[V.mounted.id]}},Fl=Object.create(null),Il=class e{constructor(e,t,n,r=0){this.name=e,this.props=t,this.id=n,this.flags=r}static define(t){let n=t.props&&t.props.length?Object.create(null):Fl,r=+!!t.top|(t.skipped?2:0)|(t.error?4:0)|(t.name==null?8:0),i=new e(t.name||``,n,t.id,r);if(t.props){for(let e of t.props)if(Array.isArray(e)||(e=e(i)),e){if(e[0].perNode)throw RangeError(`Can't store a per-node prop on a node type`);n[e[0].id]=e[1]}}return i}prop(e){return this.props[e.id]}get isTop(){return(this.flags&1)>0}get isSkipped(){return(this.flags&2)>0}get isError(){return(this.flags&4)>0}get isAnonymous(){return(this.flags&8)>0}is(e){if(typeof e==`string`){if(this.name==e)return!0;let t=this.prop(V.group);return t?t.indexOf(e)>-1:!1}return this.id==e}static match(e){let t=Object.create(null);for(let n in e)for(let r of n.split(` `))t[r]=e[n];return e=>{for(let n=e.prop(V.group),r=-1;r<(n?n.length:0);r++){let i=t[r<0?e.name:n[r]];if(i)return i}}}};Il.none=new Il(``,Object.create(null),0,8);var Ll=class e{constructor(e){this.types=e;for(let t=0;t<e.length;t++)if(e[t].id!=t)throw RangeError(`Node type ids should correspond to array positions when creating a node set`)}extend(...t){let n=[];for(let e of this.types){let r=null;for(let n of t){let t=n(e);if(t){r||(r=Object.assign({},e.props));let n=t[1],i=t[0];i.combine&&i.id in r&&(n=i.combine(r[i.id],n)),r[i.id]=n}}n.push(r?new Il(e.name,r,e.id,e.flags):e)}return new e(n)}},Rl=new WeakMap,zl=new WeakMap,H;(function(e){e[e.ExcludeBuffers=1]=`ExcludeBuffers`,e[e.IncludeAnonymous=2]=`IncludeAnonymous`,e[e.IgnoreMounts=4]=`IgnoreMounts`,e[e.IgnoreOverlays=8]=`IgnoreOverlays`,e[e.EnterBracketed=16]=`EnterBracketed`})(H||(H={}));var U=class e{constructor(e,t,n,r,i){if(this.type=e,this.children=t,this.positions=n,this.length=r,this.props=null,i&&i.length){this.props=Object.create(null);for(let[e,t]of i)this.props[typeof e==`number`?e:e.id]=t}}toString(){let e=Pl.get(this);if(e&&!e.overlay)return e.tree.toString();let t=``;for(let e of this.children){let n=e.toString();n&&(t&&(t+=`,`),t+=n)}return this.type.name?(/\W/.test(this.type.name)&&!this.type.isError?JSON.stringify(this.type.name):this.type.name)+(t.length?`(`+t+`)`:``):t}cursor(e=0){return new $l(this.topNode,e)}cursorAt(e,t=0,n=0){let r=new $l(Rl.get(this)||this.topNode);return r.moveTo(e,t),Rl.set(this,r._tree),r}get topNode(){return new Gl(this,0,0,null)}resolve(e,t=0){let n=Ul(Rl.get(this)||this.topNode,e,t,!1);return Rl.set(this,n),n}resolveInner(e,t=0){let n=Ul(zl.get(this)||this.topNode,e,t,!0);return zl.set(this,n),n}resolveStack(e,t=0){return Ql(this,e,t)}iterate(e){let{enter:t,leave:n,from:r=0,to:i=this.length}=e,a=e.mode||0,o=(a&H.IncludeAnonymous)>0;for(let e=this.cursor(a|H.IncludeAnonymous);;){let a=!1;if(e.from<=i&&e.to>=r&&(!o&&e.type.isAnonymous||t(e)!==!1)){if(e.firstChild())continue;a=!0}for(;a&&n&&(o||!e.type.isAnonymous)&&n(e),!e.nextSibling();){if(!e.parent())return;a=!0}}}prop(e){return e.perNode?this.props?this.props[e.id]:void 0:this.type.prop(e)}get propValues(){let e=[];if(this.props)for(let t in this.props)e.push([+t,this.props[t]]);return e}balance(t={}){return this.children.length<=8?this:iu(Il.none,this.children,this.positions,0,this.children.length,0,this.length,(t,n,r)=>new e(this.type,t,n,r,this.propValues),t.makeTree||((t,n,r)=>new e(Il.none,t,n,r)))}static build(e){return tu(e)}};U.empty=new U(Il.none,[],[],0);var Bl=class e{constructor(e,t){this.buffer=e,this.index=t}get id(){return this.buffer[this.index-4]}get start(){return this.buffer[this.index-3]}get end(){return this.buffer[this.index-2]}get size(){return this.buffer[this.index-1]}get pos(){return this.index}next(){this.index-=4}fork(){return new e(this.buffer,this.index)}},Vl=class e{constructor(e,t,n){this.buffer=e,this.length=t,this.set=n}get type(){return Il.none}toString(){let e=[];for(let t=0;t<this.buffer.length;)e.push(this.childString(t)),t=this.buffer[t+3];return e.join(`,`)}childString(e){let t=this.buffer[e],n=this.buffer[e+3],r=this.set.types[t],i=r.name;if(/\W/.test(i)&&!r.isError&&(i=JSON.stringify(i)),e+=4,n==e)return i;let a=[];for(;e<n;)a.push(this.childString(e)),e=this.buffer[e+3];return i+`(`+a.join(`,`)+`)`}findChild(e,t,n,r,i){let{buffer:a}=this,o=-1;for(let s=e;s!=t&&!(Hl(i,r,a[s+1],a[s+2])&&(o=s,n>0));s=a[s+3]);return o}slice(t,n,r){let i=this.buffer,a=new Uint16Array(n-t),o=0;for(let e=t,s=0;e<n;){a[s++]=i[e++],a[s++]=i[e++]-r;let n=a[s++]=i[e++]-r;a[s++]=i[e++]-t,o=Math.max(o,n)}return new e(a,o,this.set)}};function Hl(e,t,n,r){switch(e){case-2:return n<t;case-1:return r>=t&&n<t;case 0:return n<t&&r>t;case 1:return n<=t&&r>t;case 2:return r>t;case 4:return!0}}function Ul(e,t,n,r){for(;e.from==e.to||(n<1?e.from>=t:e.from>t)||(n>-1?e.to<=t:e.to<t);){let t=!r&&e instanceof Gl&&e.index<0?null:e.parent;if(!t)return e;e=t}let i=r?0:H.IgnoreOverlays;if(r)for(let r=e,a=r.parent;a;r=a,a=r.parent)r instanceof Gl&&r.index<0&&a.enter(t,n,i)?.from!=r.from&&(e=a);for(;;){let r=e.enter(t,n,i);if(!r)return e;e=r}}var Wl=class{cursor(e=0){return new $l(this,e)}getChild(e,t=null,n=null){let r=Kl(this,e,t,n);return r.length?r[0]:null}getChildren(e,t=null,n=null){return Kl(this,e,t,n)}resolve(e,t=0){return Ul(this,e,t,!1)}resolveInner(e,t=0){return Ul(this,e,t,!0)}matchContext(e){return ql(this.parent,e)}enterUnfinishedNodesBefore(e){let t=this.childBefore(e),n=this;for(;t;){let e=t.lastChild;if(!e||e.to!=t.to)break;e.type.isError&&e.from==e.to?(n=t,t=e.prevSibling):t=e}return n}get node(){return this}get next(){return this.parent}},Gl=class e extends Wl{constructor(e,t,n,r){super(),this._tree=e,this.from=t,this.index=n,this._parent=r}get type(){return this._tree.type}get name(){return this._tree.type.name}get to(){return this.from+this._tree.length}nextChild(t,n,r,i,a=0){for(let o=this;;){for(let{children:s,positions:c}=o._tree,l=n>0?s.length:-1;t!=l;t+=n){let l=s[t],u=c[t]+o.from,d;if(a&H.EnterBracketed&&l instanceof U&&(d=Pl.get(l))&&!d.overlay&&d.bracketed&&r>=u&&r<=u+l.length||Hl(i,r,u,u+l.length)){if(l instanceof Vl){if(a&H.ExcludeBuffers)continue;let e=l.findChild(0,l.buffer.length,n,r-u,i);if(e>-1)return new Yl(new Jl(o,l,t,u),null,e)}else if(a&H.IncludeAnonymous||!l.type.isAnonymous||eu(l)){let s;if(!(a&H.IgnoreMounts)&&(s=Pl.get(l))&&!s.overlay)return new e(s.tree,u,t,o);let c=new e(l,u,t,o);return a&H.IncludeAnonymous||!c.type.isAnonymous?c:c.nextChild(n<0?l.children.length-1:0,n,r,i,a)}}}if(a&H.IncludeAnonymous||!o.type.isAnonymous||(t=o.index>=0?o.index+n:n<0?-1:o._parent._tree.children.length,o=o._parent,!o))return null}}get firstChild(){return this.nextChild(0,1,0,4)}get lastChild(){return this.nextChild(this._tree.children.length-1,-1,0,4)}childAfter(e){return this.nextChild(0,1,e,2)}childBefore(e){return this.nextChild(this._tree.children.length-1,-1,e,-2)}prop(e){return this._tree.prop(e)}enter(t,n,r=0){let i;if(!(r&H.IgnoreOverlays)&&(i=Pl.get(this._tree))&&i.overlay){let a=t-this.from,o=r&H.EnterBracketed&&i.bracketed;for(let{from:t,to:r}of i.overlay)if((n>0||o?t<=a:t<a)&&(n<0||o?r>=a:r>a))return new e(i.tree,i.overlay[0].from+this.from,-1,this)}return this.nextChild(0,1,t,n,r)}nextSignificantParent(){let e=this;for(;e.type.isAnonymous&&e._parent;)e=e._parent;return e}get parent(){return this._parent?this._parent.nextSignificantParent():null}get nextSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index+1,1,0,4):null}get prevSibling(){return this._parent&&this.index>=0?this._parent.nextChild(this.index-1,-1,0,4):null}get tree(){return this._tree}toTree(){return this._tree}toString(){return this._tree.toString()}};function Kl(e,t,n,r){let i=e.cursor(),a=[];if(!i.firstChild())return a;if(n!=null){for(let e=!1;!e;)if(e=i.type.is(n),!i.nextSibling())return a}for(;;){if(r!=null&&i.type.is(r))return a;if(i.type.is(t)&&a.push(i.node),!i.nextSibling())return r==null?a:[]}}function ql(e,t,n=t.length-1){for(let r=e;n>=0;r=r.parent){if(!r)return!1;if(!r.type.isAnonymous){if(t[n]&&t[n]!=r.name)return!1;n--}}return!0}var Jl=class{constructor(e,t,n,r){this.parent=e,this.buffer=t,this.index=n,this.start=r}},Yl=class e extends Wl{get name(){return this.type.name}get from(){return this.context.start+this.context.buffer.buffer[this.index+1]}get to(){return this.context.start+this.context.buffer.buffer[this.index+2]}constructor(e,t,n){super(),this.context=e,this._parent=t,this.index=n,this.type=e.buffer.set.types[e.buffer.buffer[n]]}child(t,n,r){let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],t,n-this.context.start,r);return a<0?null:new e(this.context,this,a)}get firstChild(){return this.child(1,0,4)}get lastChild(){return this.child(-1,0,4)}childAfter(e){return this.child(1,e,2)}childBefore(e){return this.child(-1,e,-2)}prop(e){return this.type.prop(e)}enter(t,n,r=0){if(r&H.ExcludeBuffers)return null;let{buffer:i}=this.context,a=i.findChild(this.index+4,i.buffer[this.index+3],n>0?1:-1,t-this.context.start,n);return a<0?null:new e(this.context,this,a)}get parent(){return this._parent||this.context.parent.nextSignificantParent()}externalSibling(e){return this._parent?null:this.context.parent.nextChild(this.context.index+e,e,0,4)}get nextSibling(){let{buffer:t}=this.context,n=t.buffer[this.index+3];return n<(this._parent?t.buffer[this._parent.index+3]:t.buffer.length)?new e(this.context,this._parent,n):this.externalSibling(1)}get prevSibling(){let{buffer:t}=this.context,n=this._parent?this._parent.index+4:0;return this.index==n?this.externalSibling(-1):new e(this.context,this._parent,t.findChild(n,this.index,-1,0,4))}get tree(){return null}toTree(){let e=[],t=[],{buffer:n}=this.context,r=this.index+4,i=n.buffer[this.index+3];if(i>r){let a=n.buffer[this.index+1];e.push(n.slice(r,i,a)),t.push(0)}return new U(this.type,e,t,this.to-this.from)}toString(){return this.context.buffer.childString(this.index)}};function Xl(e){if(!e.length)return null;let t=0,n=e[0];for(let r=1;r<e.length;r++){let i=e[r];(i.from>n.from||i.to<n.to)&&(n=i,t=r)}let r=n instanceof Gl&&n.index<0?null:n.parent,i=e.slice();return r?i[t]=r:i.splice(t,1),new Zl(i,n)}var Zl=class{constructor(e,t){this.heads=e,this.node=t}get next(){return Xl(this.heads)}};function Ql(e,t,n){let r=e.resolveInner(t,n),i=null;for(let e=r instanceof Gl?r:r.context.parent;e;e=e.parent)if(e.index<0){let a=e.parent;(i||(i=[r])).push(a.resolve(t,n)),e=a}else{let a=Pl.get(e.tree);if(a&&a.overlay&&a.overlay[0].from<=t&&a.overlay[a.overlay.length-1].to>=t){let o=new Gl(a.tree,a.overlay[0].from+e.from,-1,e);(i||(i=[r])).push(Ul(o,t,n,!1))}}return i?Xl(i):r}var $l=class{get name(){return this.type.name}constructor(e,t=0){if(this.buffer=null,this.stack=[],this.index=0,this.bufferNode=null,this.mode=t&~H.EnterBracketed,e instanceof Gl)this.yieldNode(e);else{this._tree=e.context.parent,this.buffer=e.context;for(let t=e._parent;t;t=t._parent)this.stack.unshift(t.index);this.bufferNode=e,this.yieldBuf(e.index)}}yieldNode(e){return e?(this._tree=e,this.type=e.type,this.from=e.from,this.to=e.to,!0):!1}yieldBuf(e,t){this.index=e;let{start:n,buffer:r}=this.buffer;return this.type=t||r.set.types[r.buffer[e]],this.from=n+r.buffer[e+1],this.to=n+r.buffer[e+2],!0}yield(e){return e?e instanceof Gl?(this.buffer=null,this.yieldNode(e)):(this.buffer=e.context,this.yieldBuf(e.index,e.type)):!1}toString(){return this.buffer?this.buffer.buffer.childString(this.index):this._tree.toString()}enterChild(e,t,n){if(!this.buffer)return this.yield(this._tree.nextChild(e<0?this._tree._tree.children.length-1:0,e,t,n,this.mode));let{buffer:r}=this.buffer,i=r.findChild(this.index+4,r.buffer[this.index+3],e,t-this.buffer.start,n);return i<0?!1:(this.stack.push(this.index),this.yieldBuf(i))}firstChild(){return this.enterChild(1,0,4)}lastChild(){return this.enterChild(-1,0,4)}childAfter(e){return this.enterChild(1,e,2)}childBefore(e){return this.enterChild(-1,e,-2)}enter(e,t,n=this.mode){return this.buffer?n&H.ExcludeBuffers?!1:this.enterChild(1,e,t):this.yield(this._tree.enter(e,t,n))}parent(){if(!this.buffer)return this.yieldNode(this.mode&H.IncludeAnonymous?this._tree._parent:this._tree.parent);if(this.stack.length)return this.yieldBuf(this.stack.pop());let e=this.mode&H.IncludeAnonymous?this.buffer.parent:this.buffer.parent.nextSignificantParent();return this.buffer=null,this.yieldNode(e)}sibling(e){if(!this.buffer)return this._tree._parent?this.yield(this._tree.index<0?null:this._tree._parent.nextChild(this._tree.index+e,e,0,4,this.mode)):!1;let{buffer:t}=this.buffer,n=this.stack.length-1;if(e<0){let e=n<0?0:this.stack[n]+4;if(this.index!=e)return this.yieldBuf(t.findChild(e,this.index,-1,0,4))}else{let e=t.buffer[this.index+3];if(e<(n<0?t.buffer.length:t.buffer[this.stack[n]+3]))return this.yieldBuf(e)}return n<0&&this.yield(this.buffer.parent.nextChild(this.buffer.index+e,e,0,4,this.mode))}nextSibling(){return this.sibling(1)}prevSibling(){return this.sibling(-1)}atLastNode(e){let t,n,{buffer:r}=this;if(r){if(e>0){if(this.index<r.buffer.buffer.length)return!1}else for(let e=0;e<this.index;e++)if(r.buffer.buffer[e+3]<this.index)return!1;({index:t,parent:n}=r)}else({index:t,_parent:n}=this._tree);for(;n;{index:t,_parent:n}=n)if(t>-1)for(let r=t+e,i=e<0?-1:n._tree.children.length;r!=i;r+=e){let e=n._tree.children[r];if(this.mode&H.IncludeAnonymous||e instanceof Vl||!e.type.isAnonymous||eu(e))return!1}return!0}move(e,t){if(t&&this.enterChild(e,0,4))return!0;for(;;){if(this.sibling(e))return!0;if(this.atLastNode(e)||!this.parent())return!1}}next(e=!0){return this.move(1,e)}prev(e=!0){return this.move(-1,e)}moveTo(e,t=0){for(;(this.from==this.to||(t<1?this.from>=e:this.from>e)||(t>-1?this.to<=e:this.to<e))&&this.parent(););for(;this.enterChild(1,e,t););return this}get node(){if(!this.buffer)return this._tree;let e=this.bufferNode,t=null,n=0;if(e&&e.context==this.buffer)scan:for(let r=this.index,i=this.stack.length;i>=0;){for(let a=e;a;a=a._parent)if(a.index==r){if(r==this.index)return a;t=a,n=i+1;break scan}r=this.stack[--i]}for(let e=n;e<this.stack.length;e++)t=new Yl(this.buffer,t,this.stack[e]);return this.bufferNode=new Yl(this.buffer,t,this.index)}get tree(){return this.buffer?null:this._tree._tree}iterate(e,t){for(let n=0;;){let r=!1;if(this.type.isAnonymous||e(this)!==!1){if(this.firstChild()){n++;continue}this.type.isAnonymous||(r=!0)}for(;;){if(r&&t&&t(this),r=this.type.isAnonymous,!n)return;if(this.nextSibling())break;this.parent(),n--,r=!0}}}matchContext(e){if(!this.buffer)return ql(this.node.parent,e);let{buffer:t}=this.buffer,{types:n}=t.set;for(let r=e.length-1,i=this.stack.length-1;r>=0;i--){if(i<0)return ql(this._tree,e,r);let a=n[t.buffer[this.stack[i]]];if(!a.isAnonymous){if(e[r]&&e[r]!=a.name)return!1;r--}}return!0}};function eu(e){return e.children.some(e=>e instanceof Vl||!e.type.isAnonymous||eu(e))}function tu(e){let{buffer:t,nodeSet:n,maxBufferLength:r=jl,reused:i=[],minRepeatType:a=n.types.length}=e,o=Array.isArray(t)?new Bl(t,t.length):t,s=n.types,c=0,l=0;function u(e,t,_,v,y,ee){let{id:te,start:ne,end:re,size:b}=o,ie=l,ae=c;if(b<0){if(o.next(),b==-1){let t=i[te];_.push(t),v.push(ne-e);return}if(b==-3){c=te;return}if(b==-4){l=te;return}throw RangeError(`Unrecognized record size: ${b}`)}let oe=s[te],se,ce,le=ne-e;if(re-ne<=r&&(ce=h(o.pos-t,y))){let t=new Uint16Array(ce.size-ce.skip),r=o.pos-ce.size,i=t.length;for(;o.pos>r;)i=g(ce.start,t,i);se=new Vl(t,re-ce.start,n),le=ce.start-e}else{let e=o.pos-b;o.next();let t=[],n=[],i=te>=a?te:-1,s=0,c=re;for(;o.pos>e;)i>=0&&o.id==i&&o.size>=0?(o.end<=c-r&&(p(t,n,ne,s,o.end,c,i,ie,ae),s=t.length,c=o.end),o.next()):ee>2500?d(ne,e,t,n):u(ne,e,t,n,i,ee+1);if(i>=0&&s>0&&s<t.length&&p(t,n,ne,s,ne,c,i,ie,ae),t.reverse(),n.reverse(),i>-1&&s>0){let e=f(oe,ae);se=iu(oe,t,n,0,t.length,0,re-ne,e,e)}else se=m(oe,t,n,re-ne,ie-re,ae)}_.push(se),v.push(le)}function d(e,t,i,a){let s=[],c=0,l=-1;for(;o.pos>t;){let{id:e,start:t,end:n,size:i}=o;if(i>4)o.next();else if(l>-1&&t<l)break;else l<0&&(l=n-r),s.push(e,t,n),c++,o.next()}if(c){let t=new Uint16Array(c*4),r=s[s.length-2];for(let e=s.length-3,n=0;e>=0;e-=3)t[n++]=s[e],t[n++]=s[e+1]-r,t[n++]=s[e+2]-r,t[n++]=n;i.push(new Vl(t,s[2]-r,n)),a.push(r-e)}}function f(e,t){return(n,r,i)=>{let a=0,o=n.length-1,s,c;if(o>=0&&(s=n[o])instanceof U){if(!o&&s.type==e&&s.length==i)return s;(c=s.prop(V.lookAhead))&&(a=r[o]+s.length+c)}return m(e,n,r,i,a,t)}}function p(e,t,r,i,a,o,s,c,l){let u=[],d=[];for(;e.length>i;)u.push(e.pop()),d.push(t.pop()+r-a);e.push(m(n.types[s],u,d,o-a,c-o,l)),t.push(a-r)}function m(e,t,n,r,i,a,o){if(a){let e=[V.contextHash,a];o=o?[e].concat(o):[e]}if(i>25){let e=[V.lookAhead,i];o=o?[e].concat(o):[e]}return new U(e,t,n,r,o)}function h(e,t){let n=o.fork(),i=0,s=0,c=0,l=n.end-r,u={size:0,start:0,skip:0};scan:for(let r=n.pos-e;n.pos>r;){let e=n.size;if(n.id==t&&e>=0){u.size=i,u.start=s,u.skip=c,c+=4,i+=4,n.next();continue}let o=n.pos-e;if(e<0||o<r||n.start<l)break;let d=n.id>=a?4:0,f=n.start;for(n.next();n.pos>o;){if(n.size<0){if(n.size==-3||n.size==-4)d+=4;else break scan}else n.id>=a&&(d+=4);n.next()}s=f,i+=e,c+=d}return(t<0||i==e)&&(u.size=i,u.start=s,u.skip=c),u.size>4?u:void 0}function g(e,t,n){let{id:r,start:i,end:s,size:u}=o;if(o.next(),u>=0&&r<a){let a=n;if(u>4){let r=o.pos-(u-4);for(;o.pos>r;)n=g(e,t,n)}t[--n]=a,t[--n]=s-e,t[--n]=i-e,t[--n]=r}else u==-3?c=r:u==-4&&(l=r);return n}let _=[],v=[];for(;o.pos>0;)u(e.start||0,e.bufferStart||0,_,v,-1,0);let y=e.length??(_.length?v[0]+_[0].length:0);return new U(s[e.topID],_.reverse(),v.reverse(),y)}var nu=new WeakMap;function ru(e,t){if(!e.isAnonymous||t instanceof Vl||t.type!=e)return 1;let n=nu.get(t);if(n==null){n=1;for(let r of t.children){if(r.type!=e||!(r instanceof U)){n=1;break}n+=ru(e,r)}nu.set(t,n)}return n}function iu(e,t,n,r,i,a,o,s,c){let l=0;for(let n=r;n<i;n++)l+=ru(e,t[n]);let u=Math.ceil(l*1.5/8),d=[],f=[];function p(t,n,r,i,o){for(let s=r;s<i;){let r=s,l=n[s],m=ru(e,t[s]);for(s++;s<i;s++){let n=ru(e,t[s]);if(m+n>=u)break;m+=n}if(s==r+1){if(m>u){let e=t[r];p(e.children,e.positions,0,e.children.length,n[r]+o);continue}d.push(t[r])}else{let i=n[s-1]+t[s-1].length-l;d.push(iu(e,t,n,r,s,l,i,null,c))}f.push(l+o-a)}}return p(t,n,r,i,0),(s||c)(d,f,o)}var au=class e{constructor(e,t,n,r,i=!1,a=!1){this.from=e,this.to=t,this.tree=n,this.offset=r,this.open=!!i|(a?2:0)}get openStart(){return(this.open&1)>0}get openEnd(){return(this.open&2)>0}static addTree(t,n=[],r=!1){let i=[new e(0,t.length,t,0,!1,r)];for(let e of n)e.to>t.length&&i.push(e);return i}static applyChanges(t,n,r=128){if(!n.length)return t;let i=[],a=1,o=t.length?t[0]:null;for(let s=0,c=0,l=0;;s++){let u=s<n.length?n[s]:null,d=u?u.fromA:1e9;if(d-c>=r)for(;o&&o.from<d;){let n=o;if(c>=n.from||d<=n.to||l){let t=Math.max(n.from,c)-l,r=Math.min(n.to,d)-l;n=t>=r?null:new e(t,r,n.tree,n.offset+l,s>0,!!u)}if(n&&i.push(n),o.to>d)break;o=a<t.length?t[a++]:null}if(!u)break;c=u.toA,l=u.toA-u.toB}return i}},ou=class{startParse(e,t,n){return typeof e==`string`&&(e=new su(e)),n=n?n.length?n.map(e=>new Nl(e.from,e.to)):[new Nl(0,0)]:[new Nl(0,e.length)],this.createParse(e,t||[],n)}parse(e,t,n){let r=this.startParse(e,t,n);for(;;){let e=r.advance();if(e)return e}}},su=class{constructor(e){this.string=e}get length(){return this.string.length}chunk(e){return this.string.slice(e)}get lineChunks(){return!1}read(e,t){return this.string.slice(e,t)}};new V({perNode:!0});var cu=0,lu=class e{constructor(e,t,n,r){this.name=e,this.set=t,this.base=n,this.modified=r,this.id=cu++}toString(){let{name:e}=this;for(let t of this.modified)t.name&&(e=`${t.name}(${e})`);return e}static define(t,n){let r=typeof t==`string`?t:`?`;if(t instanceof e&&(n=t),n?.base)throw Error(`Can not derive from a modified tag`);let i=new e(r,[],null,[]);if(i.set.push(i),n)for(let e of n.set)i.set.push(e);return i}static defineModifier(e){let t=new du(e);return e=>e.modified.indexOf(t)>-1?e:du.get(e.base||e,e.modified.concat(t).sort((e,t)=>e.id-t.id))}},uu=0,du=class e{constructor(e){this.name=e,this.instances=[],this.id=uu++}static get(t,n){if(!n.length)return t;let r=n[0].instances.find(e=>e.base==t&&fu(n,e.modified));if(r)return r;let i=[],a=new lu(t.name,i,t,n);for(let e of n)e.instances.push(a);let o=pu(n);for(let n of t.set)if(!n.modified.length)for(let t of o)i.push(e.get(n,t));return a}};function fu(e,t){return e.length==t.length&&e.every((e,n)=>e==t[n])}function pu(e){let t=[[]];for(let n=0;n<e.length;n++)for(let r=0,i=t.length;r<i;r++)t.push(t[r].concat(e[n]));return t.sort((e,t)=>t.length-e.length)}function mu(e){let t=Object.create(null);for(let n in e){let r=e[n];Array.isArray(r)||(r=[r]);for(let e of n.split(` `))if(e){let n=[],i=2,a=e;for(let t=0;;){if(a==`...`&&t>0&&t+3==e.length){i=1;break}let r=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(a);if(!r)throw RangeError(`Invalid path: `+e);if(n.push(r[0]==`*`?``:r[0][0]==`"`?JSON.parse(r[0]):r[0]),t+=r[0].length,t==e.length)break;let o=e[t++];if(t==e.length&&o==`!`){i=0;break}if(o!=`/`)throw RangeError(`Invalid path: `+e);a=e.slice(t)}let o=n.length-1,s=n[o];if(!s)throw RangeError(`Invalid path: `+e);t[s]=new gu(r,i,o>0?n.slice(0,o):null).sort(t[s])}}return hu.add(t)}var hu=new V({combine(e,t){let n,r,i;for(;e||t;){if(!e||t&&e.depth<=t.depth?(i=t,t=t.next):(i=e,e=e.next),n&&n.mode==i.mode&&!i.context&&!n.context)continue;let a=new gu(i.tags,i.mode,i.context);n?n.next=a:r=a,n=a}return r}}),gu=class{constructor(e,t,n,r){this.tags=e,this.mode=t,this.context=n,this.next=r}get opaque(){return this.mode==0}get inherit(){return this.mode==1}sort(e){return!e||e.depth<this.depth?(this.next=e,this):(e.next=this.sort(e.next),e)}get depth(){return this.context?this.context.length:0}};gu.empty=new gu([],2,null);function _u(e,t){let n=Object.create(null);for(let t of e)if(!Array.isArray(t.tag))n[t.tag.id]=t.class;else for(let e of t.tag)n[e.id]=t.class;let{scope:r,all:i=null}=t||{};return{style:e=>{let t=i;for(let r of e)for(let e of r.set){let r=n[e.id];if(r){t=t?t+` `+r:r;break}}return t},scope:r}}function vu(e,t){let n=null;for(let r of e){let e=r.style(t);e&&(n=n?n+` `+e:e)}return n}function yu(e,t,n,r=0,i=e.length){let a=new xu(r,Array.isArray(t)?t:[t],n);a.highlightRange(e.cursor(),r,i,``,a.highlighters),a.flush(i)}function bu(e,t,n,r,i,a=0,o=e.length){let s=a;function c(t,n){if(!(t<=s)){for(let a=e.slice(s,t),o=0;;){let e=a.indexOf(`
`,o),t=e<0?a.length:e;if(t>o&&r(a.slice(o,t),n),e<0)break;i(),o=e+1}s=t}}yu(t,n,(e,t,n)=>{c(e,``),c(t,n)},a,o),c(o,``)}var xu=class{constructor(e,t,n){this.at=e,this.highlighters=t,this.span=n,this.class=``}startSpan(e,t){t!=this.class&&(this.flush(e),e>this.at&&(this.at=e),this.class=t)}flush(e){e>this.at&&this.class&&this.span(this.at,e,this.class)}highlightRange(e,t,n,r,i){let{type:a,from:o,to:s}=e;if(o>=n||s<=t)return;a.isTop&&(i=this.highlighters.filter(e=>!e.scope||e.scope(a)));let c=r,l=Su(e)||gu.empty,u=vu(i,l.tags);if(u&&(c&&(c+=` `),c+=u,l.mode==1&&(r+=(r?` `:``)+u)),this.startSpan(Math.max(t,o),c),l.opaque)return;let d=e.tree&&e.tree.prop(V.mounted);if(d&&d.overlay){let a=e.node.enter(d.overlay[0].from+o,1),l=this.highlighters.filter(e=>!e.scope||e.scope(d.tree.type)),u=e.firstChild();for(let f=0,p=o;;f++){let m=f<d.overlay.length?d.overlay[f]:null,h=m?m.from+o:s,g=Math.max(t,p),_=Math.min(n,h);if(g<_&&u)for(;e.from<_&&(this.highlightRange(e,g,_,r,i),this.startSpan(Math.min(_,e.to),c),!(e.to>=h||!e.nextSibling())););if(!m||h>n)break;p=m.to+o,p>t&&(this.highlightRange(a.cursor(),Math.max(t,m.from+o),Math.min(n,p),``,l),this.startSpan(Math.min(n,p),c))}u&&e.parent()}else if(e.firstChild()){d&&(r=``);do if(!(e.to<=t)){if(e.from>=n)break;this.highlightRange(e,t,n,r,i),this.startSpan(Math.min(n,e.to),c)}while(e.nextSibling());e.parent()}}};function Su(e){let t=e.type.prop(hu);for(;t&&t.context&&!e.matchContext(t.context);)t=t.next;return t||null}var W=lu.define,Cu=W(),wu=W(),Tu=W(wu),Eu=W(wu),Du=W(),Ou=W(Du),ku=W(Du),Au=W(),ju=W(Au),Mu=W(),Nu=W(),Pu=W(),Fu=W(Pu),Iu=W(),G={comment:Cu,lineComment:W(Cu),blockComment:W(Cu),docComment:W(Cu),name:wu,variableName:W(wu),typeName:Tu,tagName:W(Tu),propertyName:Eu,attributeName:W(Eu),className:W(wu),labelName:W(wu),namespace:W(wu),macroName:W(wu),literal:Du,string:Ou,docString:W(Ou),character:W(Ou),attributeValue:W(Ou),number:ku,integer:W(ku),float:W(ku),bool:W(Du),regexp:W(Du),escape:W(Du),color:W(Du),url:W(Du),keyword:Mu,self:W(Mu),null:W(Mu),atom:W(Mu),unit:W(Mu),modifier:W(Mu),operatorKeyword:W(Mu),controlKeyword:W(Mu),definitionKeyword:W(Mu),moduleKeyword:W(Mu),operator:Nu,derefOperator:W(Nu),arithmeticOperator:W(Nu),logicOperator:W(Nu),bitwiseOperator:W(Nu),compareOperator:W(Nu),updateOperator:W(Nu),definitionOperator:W(Nu),typeOperator:W(Nu),controlOperator:W(Nu),punctuation:Pu,separator:W(Pu),bracket:Fu,angleBracket:W(Fu),squareBracket:W(Fu),paren:W(Fu),brace:W(Fu),content:Au,heading:ju,heading1:W(ju),heading2:W(ju),heading3:W(ju),heading4:W(ju),heading5:W(ju),heading6:W(ju),contentSeparator:W(Au),list:W(Au),quote:W(Au),emphasis:W(Au),strong:W(Au),link:W(Au),monospace:W(Au),strikethrough:W(Au),inserted:W(),deleted:W(),changed:W(),invalid:W(),meta:Iu,documentMeta:W(Iu),annotation:W(Iu),processingInstruction:W(Iu),definition:lu.defineModifier(`definition`),constant:lu.defineModifier(`constant`),function:lu.defineModifier(`function`),standard:lu.defineModifier(`standard`),local:lu.defineModifier(`local`),special:lu.defineModifier(`special`)};for(let e in G){let t=G[e];t instanceof lu&&(t.name=e)}var Lu=_u([{tag:G.link,class:`tok-link`},{tag:G.heading,class:`tok-heading`},{tag:G.emphasis,class:`tok-emphasis`},{tag:G.strong,class:`tok-strong`},{tag:G.keyword,class:`tok-keyword`},{tag:G.atom,class:`tok-atom`},{tag:G.bool,class:`tok-bool`},{tag:G.url,class:`tok-url`},{tag:G.labelName,class:`tok-labelName`},{tag:G.inserted,class:`tok-inserted`},{tag:G.deleted,class:`tok-deleted`},{tag:G.literal,class:`tok-literal`},{tag:G.string,class:`tok-string`},{tag:G.number,class:`tok-number`},{tag:[G.regexp,G.escape,G.special(G.string)],class:`tok-string2`},{tag:G.variableName,class:`tok-variableName`},{tag:G.local(G.variableName),class:`tok-variableName tok-local`},{tag:G.definition(G.variableName),class:`tok-variableName tok-definition`},{tag:G.special(G.variableName),class:`tok-variableName2`},{tag:G.definition(G.propertyName),class:`tok-propertyName tok-definition`},{tag:G.typeName,class:`tok-typeName`},{tag:G.namespace,class:`tok-namespace`},{tag:G.className,class:`tok-className`},{tag:G.macroName,class:`tok-macroName`},{tag:G.propertyName,class:`tok-propertyName`},{tag:G.operator,class:`tok-operator`},{tag:G.comment,class:`tok-comment`},{tag:G.meta,class:`tok-meta`},{tag:G.invalid,class:`tok-invalid`},{tag:G.punctuation,class:`tok-punctuation`}]);function Ru(e,t,n,r=0,i=0){t??(t=e.search(/[^\s\u00a0]/),t==-1&&(t=e.length));let a=i;for(let i=r;i<t;i++)e.charCodeAt(i)==9?a+=n-a%n:a++;return a}var zu=class{constructor(e,t,n,r){this.string=e,this.tabSize=t,this.indentUnit=n,this.overrideIndent=r,this.pos=0,this.start=0,this.lastColumnPos=0,this.lastColumnValue=0}eol(){return this.pos>=this.string.length}sol(){return this.pos==0}peek(){return this.string.charAt(this.pos)||void 0}next(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)}eat(e){let t=this.string.charAt(this.pos),n;if(n=typeof e==`string`?t==e:t&&(e instanceof RegExp?e.test(t):e(t)),n)return++this.pos,t}eatWhile(e){let t=this.pos;for(;this.eat(e););return this.pos>t}eatSpace(){let e=this.pos;for(;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>e}skipToEnd(){this.pos=this.string.length}skipTo(e){let t=this.string.indexOf(e,this.pos);if(t>-1)return this.pos=t,!0}backUp(e){this.pos-=e}column(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Ru(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue}indentation(){return this.overrideIndent??Ru(this.string,null,this.tabSize)}match(e,t,n){if(typeof e==`string`){let r=e=>n?e.toLowerCase():e;return r(this.string.substr(this.pos,e.length))==r(e)?(t!==!1&&(this.pos+=e.length),!0):null}{let n=this.string.slice(this.pos).match(e);return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}}current(){return this.string.slice(this.start,this.pos)}},Bu=new V;function Vu(e){return T.define({combine:e?t=>t.concat(e):void 0})}var Hu=new V,Uu=class{constructor(e,t,n=[],r=``){this.data=e,this.name=r,O.prototype.hasOwnProperty(`tree`)||Object.defineProperty(O.prototype,"tree",{get(){return K(this)}}),this.parser=t,this.extension=[$u.of(this),O.languageData.of((e,t,n)=>{let r=Wu(e,t,n),i=r.type.prop(Bu);if(!i)return[];let a=e.facet(i),o=r.type.prop(Hu);if(o){let i=r.resolve(t-r.from,n);for(let t of o)if(t.test(i,e)){let n=e.facet(t.facet);return t.type==`replace`?n:n.concat(a)}}return a})].concat(n)}isActiveAt(e,t,n=-1){return Wu(e,t,n).type.prop(Bu)==this.data}findRegions(e){let t=e.facet($u);if(t?.data==this.data)return[{from:0,to:e.doc.length}];if(!t||!t.allowsNesting)return[];let n=[],r=(e,t)=>{if(e.prop(Bu)==this.data){n.push({from:t,to:t+e.length});return}let i=e.prop(V.mounted);if(i){if(i.tree.prop(Bu)==this.data){if(i.overlay)for(let e of i.overlay)n.push({from:e.from+t,to:e.to+t});else n.push({from:t,to:t+e.length});return}if(i.overlay){let e=n.length;if(r(i.tree,i.overlay[0].from+t),n.length>e)return}}for(let n=0;n<e.children.length;n++){let i=e.children[n];i instanceof U&&r(i,e.positions[n]+t)}};return r(K(e),0),n}get allowsNesting(){return!0}};Uu.setState=E.define();function Wu(e,t,n){let r=e.facet($u),i=K(e).topNode;if(!r||r.allowsNesting)for(let e=i;e;e=e.enter(t,n,H.ExcludeBuffers|H.EnterBracketed))e.type.isTop&&(i=e);return i}function K(e){let t=e.field(Uu.state,!1);return t?t.tree:U.empty}var Gu=class{constructor(e){this.doc=e,this.cursorPos=0,this.string=``,this.cursor=e.iter()}get length(){return this.doc.length}syncTo(e){return this.string=this.cursor.next(e-this.cursorPos).value,this.cursorPos=e+this.string.length,this.cursorPos-this.string.length}chunk(e){return this.syncTo(e),this.string}get lineChunks(){return!0}read(e,t){let n=this.cursorPos-this.string.length;return e<n||t>=this.cursorPos?this.doc.sliceString(e,t):this.string.slice(e-n,t-n)}},Ku=null,qu=class e{constructor(e,t,n=[],r,i,a,o,s){this.parser=e,this.state=t,this.fragments=n,this.tree=r,this.treeLen=i,this.viewport=a,this.skipped=o,this.scheduleOn=s,this.parse=null,this.tempSkipped=[]}static create(t,n,r){return new e(t,n,[],U.empty,0,r,[],null)}startParse(){return this.parser.startParse(new Gu(this.state.doc),this.fragments)}work(e,t){return t!=null&&t>=this.state.doc.length&&(t=void 0),this.tree!=U.empty&&this.isDone(t??this.state.doc.length)?(this.takeTree(),!0):this.withContext(()=>{if(typeof e==`number`){let t=Date.now()+e;e=()=>Date.now()>t}for(this.parse||(this.parse=this.startParse()),t!=null&&(this.parse.stoppedAt==null||this.parse.stoppedAt>t)&&t<this.state.doc.length&&this.parse.stopAt(t);;){let n=this.parse.advance();if(n){if(this.fragments=this.withoutTempSkipped(au.addTree(n,this.fragments,this.parse.stoppedAt!=null)),this.treeLen=this.parse.stoppedAt??this.state.doc.length,this.tree=n,this.parse=null,this.treeLen<(t??this.state.doc.length))this.parse=this.startParse();else return!0}if(e())return!1}})}takeTree(){let e,t;this.parse&&(e=this.parse.parsedPos)>=this.treeLen&&((this.parse.stoppedAt==null||this.parse.stoppedAt>e)&&this.parse.stopAt(e),this.withContext(()=>{for(;!(t=this.parse.advance()););}),this.treeLen=e,this.tree=t,this.fragments=this.withoutTempSkipped(au.addTree(this.tree,this.fragments,!0)),this.parse=null)}withContext(e){let t=Ku;Ku=this;try{return e()}finally{Ku=t}}withoutTempSkipped(e){for(let t;t=this.tempSkipped.pop();)e=Ju(e,t.from,t.to);return e}changes(t,n){let{fragments:r,tree:i,treeLen:a,viewport:o,skipped:s}=this;if(this.takeTree(),!t.empty){let e=[];if(t.iterChangedRanges((t,n,r,i)=>e.push({fromA:t,toA:n,fromB:r,toB:i})),r=au.applyChanges(r,e),i=U.empty,a=0,o={from:t.mapPos(o.from,-1),to:t.mapPos(o.to,1)},this.skipped.length){s=[];for(let e of this.skipped){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);n<r&&s.push({from:n,to:r})}}}return new e(this.parser,n,r,i,a,o,s,this.scheduleOn)}updateViewport(e){if(this.viewport.from==e.from&&this.viewport.to==e.to)return!1;this.viewport=e;let t=this.skipped.length;for(let t=0;t<this.skipped.length;t++){let{from:n,to:r}=this.skipped[t];n<e.to&&r>e.from&&(this.fragments=Ju(this.fragments,n,r),this.skipped.splice(t--,1))}return this.skipped.length>=t?!1:(this.reset(),!0)}reset(){this.parse&&(this.takeTree(),this.parse=null)}skipUntilInView(e,t){this.skipped.push({from:e,to:t})}static getSkippingParser(e){return new class extends ou{createParse(t,n,r){let i=r[0].from,a=r[r.length-1].to;return{parsedPos:i,advance(){let t=Ku;if(t){for(let e of r)t.tempSkipped.push(e);e&&(t.scheduleOn=t.scheduleOn?Promise.all([t.scheduleOn,e]):e)}return this.parsedPos=a,new U(Il.none,[],[],a-i)},stoppedAt:null,stopAt(){}}}}}isDone(e){e=Math.min(e,this.state.doc.length);let t=this.fragments;return this.treeLen>=e&&t.length&&t[0].from==0&&t[0].to>=e}static get(){return Ku}};function Ju(e,t,n){return au.applyChanges(e,[{fromA:t,toA:n,fromB:t,toB:n}])}var Yu=class e{constructor(e){this.context=e,this.tree=e.tree}apply(t){if(!t.docChanged&&this.tree==this.context.tree)return this;let n=this.context.changes(t.changes,t.state),r=this.context.treeLen==t.startState.doc.length?void 0:Math.max(t.changes.mapPos(this.context.treeLen),n.viewport.to);return n.work(20,r)||n.takeTree(),new e(n)}static init(t){let n=Math.min(3e3,t.doc.length),r=qu.create(t.facet($u).parser,t,{from:0,to:n});return r.work(20,n)||r.takeTree(),new e(r)}};Uu.state=nt.define({create:Yu.init,update(e,t){for(let e of t.effects)if(e.is(Uu.setState))return e.value;return t.startState.facet($u)==t.state.facet($u)?e.apply(t):Yu.init(t.state)}});var Xu=e=>{let t=setTimeout(()=>e(),500);return()=>clearTimeout(t)};typeof requestIdleCallback<`u`&&(Xu=e=>{let t=-1,n=setTimeout(()=>{t=requestIdleCallback(e,{timeout:400})},100);return()=>t<0?clearTimeout(n):cancelIdleCallback(t)});var Zu=typeof navigator<`u`&&navigator.scheduling?.isInputPending?()=>navigator.scheduling.isInputPending():null,Qu=L.fromClass(class{constructor(e){this.view=e,this.working=null,this.workScheduled=0,this.chunkEnd=-1,this.chunkBudget=-1,this.work=this.work.bind(this),this.scheduleWork()}update(e){let t=this.view.state.field(Uu.state).context;(t.updateViewport(e.view.viewport)||this.view.viewport.to>t.treeLen)&&this.scheduleWork(),(e.docChanged||e.selectionSet)&&(this.view.hasFocus&&(this.chunkBudget+=50),this.scheduleWork()),this.checkAsyncSchedule(t)}scheduleWork(){if(this.working)return;let{state:e}=this.view,t=e.field(Uu.state);(t.tree!=t.context.tree||!t.context.isDone(e.doc.length))&&(this.working=Xu(this.work))}work(e){this.working=null;let t=Date.now();if(this.chunkEnd<t&&(this.chunkEnd<0||this.view.hasFocus)&&(this.chunkEnd=t+3e4,this.chunkBudget=3e3),this.chunkBudget<=0)return;let{state:n,viewport:{to:r}}=this.view,i=n.field(Uu.state);if(i.tree==i.context.tree&&i.context.isDone(r+1e5))return;let a=Date.now()+Math.min(this.chunkBudget,100,e&&!Zu?Math.max(25,e.timeRemaining()-5):1e9),o=i.context.treeLen<r&&n.doc.length>r+1e3,s=i.context.work(()=>Zu&&Zu()||Date.now()>a,r+(o?0:1e5));this.chunkBudget-=Date.now()-t,(s||this.chunkBudget<=0)&&(i.context.takeTree(),this.view.dispatch({effects:Uu.setState.of(new Yu(i.context))})),this.chunkBudget>0&&(!s||o)&&this.scheduleWork(),this.checkAsyncSchedule(i.context)}checkAsyncSchedule(e){e.scheduleOn&&(this.workScheduled++,e.scheduleOn.then(()=>this.scheduleWork()).catch(e=>ti(this.view.state,e)).then(()=>this.workScheduled--),e.scheduleOn=null)}destroy(){this.working&&this.working()}isWorking(){return!!(this.working||this.workScheduled>0)}},{eventHandlers:{focus(){this.scheduleWork()}}}),$u=T.define({combine(e){return e.length?e[0]:null},enables:e=>[Uu.state,Qu,B.contentAttributes.compute([e],t=>{let n=t.facet(e);return n&&n.name?{"data-language":n.name}:{}})]}),ed=T.define(),td=T.define({combine:e=>{if(!e.length)return`  `;let t=e[0];if(!t||/\S/.test(t)||Array.from(t).some(e=>e!=t[0]))throw Error(`Invalid indent unit: `+JSON.stringify(e[0]));return t}});function nd(e){let t=e.facet(td);return t.charCodeAt(0)==9?e.tabSize*t.length:t.length}function rd(e,t){let n=``,r=e.tabSize,i=e.facet(td)[0];if(i==`	`){for(;t>=r;)n+=`	`,t-=r;i=` `}for(let e=0;e<t;e++)n+=i;return n}function id(e,t){e instanceof O&&(e=new ad(e));for(let n of e.state.facet(ed)){let r=n(e,t);if(r!==void 0)return r}let n=K(e.state);return n.length>=t?sd(e,n,t):null}var ad=class{constructor(e,t={}){this.state=e,this.options=t,this.unit=nd(e)}lineAt(e,t=1){let n=this.state.doc.lineAt(e),{simulateBreak:r,simulateDoubleBreak:i}=this.options;return r!=null&&r>=n.from&&r<=n.to?i&&r==e?{text:``,from:e}:(t<0?r<e:r<=e)?{text:n.text.slice(r-n.from),from:r}:{text:n.text.slice(0,r-n.from),from:n.from}:n}textAfterPos(e,t=1){if(this.options.simulateDoubleBreak&&e==this.options.simulateBreak)return``;let{text:n,from:r}=this.lineAt(e,t);return n.slice(e-r,Math.min(n.length,e+100-r))}column(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.countColumn(n,e-r),a=this.options.overrideIndentation?this.options.overrideIndentation(r):-1;return a>-1&&(i+=a-this.countColumn(n,n.search(/\S|$/))),i}countColumn(e,t=e.length){return tn(e,this.state.tabSize,t)}lineIndent(e,t=1){let{text:n,from:r}=this.lineAt(e,t),i=this.options.overrideIndentation;if(i){let e=i(r);if(e>-1)return e}return this.countColumn(n,n.search(/\S|$/))}get simulatedBreak(){return this.options.simulateBreak||null}},od=new V;function sd(e,t,n){let r=t.resolveStack(n),i=t.resolveInner(n,-1).resolve(n,0).enterUnfinishedNodesBefore(n);if(i!=r.node){let e=[];for(let t=i;t&&!(t.from<r.node.from||t.to>r.node.to||t.from==r.node.from&&t.type==r.node.type);t=t.parent)e.push(t);for(let t=e.length-1;t>=0;t--)r={node:e[t],next:r}}return cd(r,e,n)}function cd(e,t,n){for(let r=e;r;r=r.next){let e=ud(r.node);if(e)return e(fd.create(t,n,r))}return 0}function ld(e){return e.pos==e.options.simulateBreak&&e.options.simulateDoubleBreak}function ud(e){let t=e.type.prop(od);if(t)return t;let n=e.firstChild,r;if(n&&(r=n.type.prop(V.closedBy))){let t=e.lastChild,n=t&&r.indexOf(t.name)>-1;return e=>hd(e,!0,1,void 0,n&&!ld(e)?t.from:void 0)}return e.parent==null?dd:null}function dd(){return 0}var fd=class e extends ad{constructor(e,t,n){super(e.state,e.options),this.base=e,this.pos=t,this.context=n}get node(){return this.context.node}static create(t,n,r){return new e(t,n,r)}get textAfter(){return this.textAfterPos(this.pos)}get baseIndent(){return this.baseIndentFor(this.node)}baseIndentFor(e){let t=this.state.doc.lineAt(e.from);for(;;){let n=e.resolve(t.from);for(;n.parent&&n.parent.from==n.from;)n=n.parent;if(pd(n,e))break;t=this.state.doc.lineAt(n.from)}return this.lineIndent(t.from)}continue(){return cd(this.context.next,this.base,this.pos)}};function pd(e,t){for(let n=t;n;n=n.parent)if(e==n)return!0;return!1}function md(e){let t=e.node,n=t.childAfter(t.from),r=t.lastChild;if(!n)return null;let i=e.options.simulateBreak,a=e.state.doc.lineAt(n.from),o=i==null||i<=a.from?a.to:Math.min(a.to,i);for(let e=n.to;;){let i=t.childAfter(e);if(!i||i==r)return null;if(!i.type.isSkipped){if(i.from>=o)return null;let e=/^ */.exec(a.text.slice(n.to-a.from))[0].length;return{from:n.from,to:n.to+e}}e=i.to}}function hd(e,t,n,r,i){let a=e.textAfter,o=a.match(/^\s*/)[0].length,s=r&&a.slice(o,o+r.length)==r||i==e.pos+o,c=t?md(e):null;return c?s?e.column(c.from):e.column(c.to):e.baseIndent+(s?0:e.unit*n)}var gd=200;function _d(){return O.transactionFilter.of(e=>{if(!e.docChanged||!e.isUserEvent(`input.type`)&&!e.isUserEvent(`input.complete`))return e;let t=e.startState.languageDataAt(`indentOnInput`,e.startState.selection.main.head);if(!t.length)return e;let n=e.newDoc,{head:r}=e.newSelection.main,i=n.lineAt(r);if(r>i.from+gd)return e;let a=n.sliceString(i.from,r);if(!t.some(e=>e.test(a)))return e;let{state:o}=e,s=-1,c=[];for(let{head:e}of o.selection.ranges){let t=o.doc.lineAt(e);if(t.from==s)continue;s=t.from;let n=id(o,t.from);if(n==null)continue;let r=/^\s*/.exec(t.text)[0],i=rd(o,n);r!=i&&c.push({from:t.from,to:t.from+r.length,insert:i})}return c.length?[e,{changes:c,sequential:!0}]:e})}var vd=T.define(),yd=new V;function bd(e,t,n){let r=K(e);if(r.length<n)return null;let i=r.resolveStack(n,1),a=null;for(let o=i;o;o=o.next){let i=o.node;if(i.to<=n||i.from>n)continue;if(a&&i.from<t)break;let s=i.type.prop(yd);if(s&&(i.to<r.length-50||r.length==e.doc.length||!xd(i))){let r=s(i,e);r&&r.from<=n&&r.from>=t&&r.to>n&&(a=r)}}return a}function xd(e){let t=e.lastChild;return t&&t.to==e.to&&t.type.isError}function Sd(e,t,n){for(let r of e.facet(vd)){let i=r(e,t,n);if(i)return i}return bd(e,t,n)}function Cd(e,t){let n=t.mapPos(e.from,1),r=t.mapPos(e.to,-1);return n>=r?void 0:{from:n,to:r}}var wd=E.define({map:Cd}),Td=E.define({map:Cd});function Ed(e){let t=[];for(let{head:n}of e.state.selection.ranges)t.some(e=>e.from<=n&&e.to>=n)||t.push(e.lineBlockAt(n));return t}var Dd=nt.define({create(){return N.none},update(e,t){t.isUserEvent(`delete`)&&t.changes.iterChangedRanges((t,n)=>e=Od(e,t,n)),e=e.map(t.changes);let n=[];for(let r of t.effects)r.is(wd)&&!Ad(e,r.value.from,r.value.to)?n.push(r.value):r.is(Td)&&(e=e.update({filter:(e,t)=>r.value.from!=e||r.value.to!=t,filterFrom:r.value.from,filterTo:r.value.to}));if(n.length){let{preparePlaceholder:r}=t.state.facet(Ld),i=n.map(e=>(r?N.replace({widget:new Vd(r(t.state,e))}):Bd).range(e.from,e.to));e=e.update({add:i})}return t.selection&&(e=Od(e,t.selection.main.head)),e},provide:e=>B.decorations.from(e),toJSON(e,t){let n=[];return e.between(0,t.doc.length,(e,t)=>{n.push(e,t)}),n},fromJSON(e){if(!Array.isArray(e)||e.length%2)throw RangeError(`Invalid JSON for fold state`);let t=[];for(let n=0;n<e.length;){let r=e[n++],i=e[n++];if(typeof r!=`number`||typeof i!=`number`)throw RangeError(`Invalid JSON for fold state`);t.push(Bd.range(r,i))}return N.set(t,!0)}});function Od(e,t,n=t){let r=!1;return e.between(t,n,(e,i)=>{e<n&&i>t&&(r=!0)}),r?e.update({filterFrom:t,filterTo:n,filter:(e,r)=>e>=n||r<=t}):e}function kd(e,t,n){var r;let i=null;return(r=e.field(Dd,!1))==null||r.between(t,n,(e,t)=>{(!i||i.from>e)&&(i={from:e,to:t})}),i}function Ad(e,t,n){let r=!1;return e.between(t,t,(e,i)=>{e==t&&i==n&&(r=!0)}),r}function jd(e,t){return e.field(Dd,!1)?t:t.concat(E.appendConfig.of(Rd()))}var Md=e=>{for(let t of Ed(e)){let n=Sd(e.state,t.from,t.to);if(n)return e.dispatch({effects:jd(e.state,[wd.of(n),Pd(e,n)])}),!0}return!1},Nd=e=>{if(!e.state.field(Dd,!1))return!1;let t=[];for(let n of Ed(e)){let r=kd(e.state,n.from,n.to);r&&t.push(Td.of(r),Pd(e,r,!1))}return t.length&&e.dispatch({effects:t}),t.length>0};function Pd(e,t,n=!0){let r=e.state.doc.lineAt(t.from).number,i=e.state.doc.lineAt(t.to).number;return B.announce.of(`${e.state.phrase(n?`Folded lines`:`Unfolded lines`)} ${r} ${e.state.phrase(`to`)} ${i}.`)}var Fd=[{key:`Ctrl-Shift-[`,mac:`Cmd-Alt-[`,run:Md},{key:`Ctrl-Shift-]`,mac:`Cmd-Alt-]`,run:Nd},{key:`Ctrl-Alt-[`,run:e=>{let{state:t}=e,n=[];for(let r=0;r<t.doc.length;){let i=e.lineBlockAt(r),a=Sd(t,i.from,i.to);a&&n.push(wd.of(a)),r=(a?e.lineBlockAt(a.to):i).to+1}return n.length&&e.dispatch({effects:jd(e.state,n)}),!!n.length}},{key:`Ctrl-Alt-]`,run:e=>{let t=e.state.field(Dd,!1);if(!t||!t.size)return!1;let n=[];return t.between(0,e.state.doc.length,(e,t)=>{n.push(Td.of({from:e,to:t}))}),e.dispatch({effects:n}),!0}}],Id={placeholderDOM:null,preparePlaceholder:null,placeholderText:`…`},Ld=T.define({combine(e){return It(e,Id)}});function Rd(e){let t=[Dd,Gd];return e&&t.push(Ld.of(e)),t}function zd(e,t){let{state:n}=e,r=n.facet(Ld),i=t=>{let n=e.lineBlockAt(e.posAtDOM(t.target)),r=kd(e.state,n.from,n.to);r&&e.dispatch({effects:Td.of(r)}),t.preventDefault()};if(r.placeholderDOM)return r.placeholderDOM(e,i,t);let a=document.createElement(`span`);return a.textContent=r.placeholderText,a.setAttribute(`aria-label`,n.phrase(`folded code`)),a.title=n.phrase(`unfold`),a.className=`cm-foldPlaceholder`,a.onclick=i,a}var Bd=N.replace({widget:new class extends In{toDOM(e){return zd(e,null)}}}),Vd=class extends In{constructor(e){super(),this.value=e}eq(e){return this.value==e.value}toDOM(e){return zd(e,this.value)}},Hd={openText:`⌄`,closedText:`›`,markerDOM:null,domEventHandlers:{},foldingChanged:()=>!1},Ud=class extends al{constructor(e,t){super(),this.config=e,this.open=t}eq(e){return this.config==e.config&&this.open==e.open}toDOM(e){if(this.config.markerDOM)return this.config.markerDOM(this.open);let t=document.createElement(`span`);return t.textContent=this.open?this.config.openText:this.config.closedText,t.title=e.state.phrase(this.open?`Fold line`:`Unfold line`),t}};function Wd(e={}){let t={...Hd,...e},n=new Ud(t,!0),r=new Ud(t,!1),i=L.fromClass(class{constructor(e){this.from=e.viewport.from,this.markers=this.buildMarkers(e)}update(e){(e.docChanged||e.viewportChanged||e.startState.facet($u)!=e.state.facet($u)||e.startState.field(Dd,!1)!=e.state.field(Dd,!1)||K(e.startState)!=K(e.state)||t.foldingChanged(e))&&(this.markers=this.buildMarkers(e.view))}buildMarkers(e){let t=new Wt;for(let i of e.viewportLineBlocks){let a=kd(e.state,i.from,i.to)?r:Sd(e.state,i.from,i.to)?n:null;a&&t.add(i.from,i.from,a)}return t.finish()}}),{domEventHandlers:a}=t;return[i,ul({class:`cm-foldGutter`,markers(e){return e.plugin(i)?.markers||k.empty},initialSpacer(){return new Ud(t,!1)},domEventHandlers:{...a,click:(e,t,n)=>{if(a.click&&a.click(e,t,n))return!0;let r=kd(e.state,t.from,t.to);if(r)return e.dispatch({effects:Td.of(r)}),!0;let i=Sd(e.state,t.from,t.to);return i?(e.dispatch({effects:wd.of(i)}),!0):!1}}}),Rd()]}var Gd=B.baseTheme({".cm-foldPlaceholder":{backgroundColor:`#eee`,border:`1px solid #ddd`,color:`#888`,borderRadius:`.2em`,margin:`0 1px`,padding:`0 1px`,cursor:`pointer`},".cm-foldGutter span":{padding:`0 1px`,cursor:`pointer`}}),Kd=class e{constructor(e,t){this.specs=e;let n;function r(e){let t=cn.newName();return(n||(n=Object.create(null)))[`.`+t]=e,t}let i=typeof t.all==`string`?t.all:t.all?r(t.all):void 0,a=t.scope;this.scope=a instanceof Uu?e=>e.prop(Bu)==a.data:a?e=>e==a:void 0,this.style=_u(e.map(e=>({tag:e.tag,class:e.class||r(Object.assign({},e,{tag:null}))})),{all:i}).style,this.module=n?new cn(n):null,this.themeType=t.themeType}static define(t,n){return new e(t,n||{})}},qd=T.define(),Jd=T.define({combine(e){return e.length?[e[0]]:null}});function Yd(e){let t=e.facet(qd);return t.length?t:e.facet(Jd)}function Xd(e,t){let n=[Qd],r;return e instanceof Kd&&(e.module&&n.push(B.styleModule.of(e.module)),r=e.themeType),t?.fallback?n.push(Jd.of(e)):r?n.push(qd.computeN([B.darkTheme],t=>t.facet(B.darkTheme)==(r==`dark`)?[e]:[])):n.push(qd.of(e)),n}var Zd=class{constructor(e){this.markCache=Object.create(null),this.tree=K(e.state),this.decorations=this.buildDeco(e,Yd(e.state)),this.decoratedTo=e.viewport.to}update(e){let t=K(e.state),n=Yd(e.state),r=n!=Yd(e.startState),{viewport:i}=e.view,a=e.changes.mapPos(this.decoratedTo,1);t.length<i.to&&!r&&t.type==this.tree.type&&a>=i.to?(this.decorations=this.decorations.map(e.changes),this.decoratedTo=a):(t!=this.tree||e.viewportChanged||r)&&(this.tree=t,this.decorations=this.buildDeco(e.view,n),this.decoratedTo=i.to)}buildDeco(e,t){if(!t||!this.tree.length)return N.none;let n=new Wt;for(let{from:r,to:i}of e.visibleRanges)yu(this.tree,t,(e,t,r)=>{n.add(e,t,this.markCache[r]||(this.markCache[r]=N.mark({class:r})))},r,i);return n.finish()}},Qd=at.high(L.fromClass(Zd,{decorations:e=>e.decorations})),$d=Kd.define([{tag:G.meta,color:`#404740`},{tag:G.link,textDecoration:`underline`},{tag:G.heading,textDecoration:`underline`,fontWeight:`bold`},{tag:G.emphasis,fontStyle:`italic`},{tag:G.strong,fontWeight:`bold`},{tag:G.strikethrough,textDecoration:`line-through`},{tag:G.keyword,color:`#708`},{tag:[G.atom,G.bool,G.url,G.contentSeparator,G.labelName],color:`#219`},{tag:[G.literal,G.inserted],color:`#164`},{tag:[G.string,G.deleted],color:`#a11`},{tag:[G.regexp,G.escape,G.special(G.string)],color:`#e40`},{tag:G.definition(G.variableName),color:`#00f`},{tag:G.local(G.variableName),color:`#30a`},{tag:[G.typeName,G.namespace],color:`#085`},{tag:G.className,color:`#167`},{tag:[G.special(G.variableName),G.macroName],color:`#256`},{tag:G.definition(G.propertyName),color:`#00c`},{tag:G.comment,color:`#940`},{tag:G.invalid,color:`#f00`}]),ef=B.baseTheme({"&.cm-focused .cm-matchingBracket":{backgroundColor:`#328c8252`},"&.cm-focused .cm-nonmatchingBracket":{backgroundColor:`#bb555544`}}),tf=1e4,nf=`()[]{}`,rf=T.define({combine(e){return It(e,{afterCursor:!0,brackets:nf,maxScanDistance:tf,renderMatch:sf})}}),af=N.mark({class:`cm-matchingBracket`}),of=N.mark({class:`cm-nonmatchingBracket`});function sf(e){let t=[],n=e.matched?af:of;return t.push(n.range(e.start.from,e.start.to)),e.end&&t.push(n.range(e.end.from,e.end.to)),t}function cf(e){let t=[],n=e.facet(rf);for(let r of e.selection.ranges){if(!r.empty)continue;let i=mf(e,r.head,-1,n)||r.head>0&&mf(e,r.head-1,1,n)||n.afterCursor&&(mf(e,r.head,1,n)||r.head<e.doc.length&&mf(e,r.head+1,-1,n));i&&(t=t.concat(n.renderMatch(i,e)))}return N.set(t,!0)}var lf=[L.fromClass(class{constructor(e){this.paused=!1,this.decorations=cf(e.state)}update(e){(e.docChanged||e.selectionSet||this.paused)&&(e.view.composing?(this.decorations=this.decorations.map(e.changes),this.paused=!0):(this.decorations=cf(e.state),this.paused=!1))}},{decorations:e=>e.decorations}),ef];function uf(e={}){return[rf.of(e),lf]}var df=new V;function ff(e,t,n){let r=e.prop(t<0?V.openedBy:V.closedBy);if(r)return r;if(e.name.length==1){let r=n.indexOf(e.name);if(r>-1&&r%2==+(t<0))return[n[r+t]]}return null}function pf(e){let t=e.type.prop(df);return t?t(e.node):e}function mf(e,t,n,r={}){let i=r.maxScanDistance||tf,a=r.brackets||nf,o=K(e),s=o.resolveInner(t,n);for(let r=s;r;r=r.parent){let i=ff(r.type,n,a);if(i&&r.from<r.to){let o=pf(r);if(o&&(n>0?t>=o.from&&t<o.to:t>o.from&&t<=o.to))return hf(e,t,n,r,o,i,a)}}return gf(e,t,n,o,s.type,i,a)}function hf(e,t,n,r,i,a,o){let s=r.parent,c={from:i.from,to:i.to},l=0,u=s?.cursor();if(u&&(n<0?u.childBefore(r.from):u.childAfter(r.to)))do if(n<0?u.to<=r.from:u.from>=r.to){if(l==0&&a.indexOf(u.type.name)>-1&&u.from<u.to){let e=pf(u);return{start:c,end:e?{from:e.from,to:e.to}:void 0,matched:!0}}if(ff(u.type,n,o))l++;else if(ff(u.type,-n,o)){if(l==0){let e=pf(u);return{start:c,end:e&&e.from<e.to?{from:e.from,to:e.to}:void 0,matched:!1}}l--}}while(n<0?u.prevSibling():u.nextSibling());return{start:c,matched:!1}}function gf(e,t,n,r,i,a,o){if(n<0?!t:t==e.doc.length)return null;let s=n<0?e.sliceDoc(t-1,t):e.sliceDoc(t,t+1),c=o.indexOf(s);if(c<0||c%2==0!=n>0)return null;let l={from:n<0?t-1:t,to:n>0?t+1:t},u=e.doc.iterRange(t,n>0?e.doc.length:0),d=0;for(let e=0;!u.next().done&&e<=a;){let a=u.value;n<0&&(e+=a.length);let s=t+e*n;for(let e=n>0?0:a.length-1,t=n>0?a.length:-1;e!=t;e+=n){let t=o.indexOf(a[e]);if(!(t<0||r.resolveInner(s+e,1).type!=i)){if(t%2==0==n>0)d++;else if(d==1)return{start:l,end:{from:s+e,to:s+e+1},matched:t>>1==c>>1};else d--}}n>0&&(e+=a.length)}return u.done?{start:l,matched:!1}:null}function _f(e){return{name:e.name||``,token:e.token,blankLine:e.blankLine||(()=>{}),startState:e.startState||(()=>!0),copyState:e.copyState||vf,indent:e.indent||(()=>null),languageData:e.languageData||{},tokenTable:e.tokenTable||Ef,mergeTokens:e.mergeTokens!==!1}}function vf(e){if(typeof e!=`object`)return e;let t={};for(let n in e){let r=e[n];t[n]=r instanceof Array?r.slice():r}return t}var yf=new WeakMap,bf=class e extends Uu{constructor(e){let t=Vu(e.languageData),n=_f(e),r,i=new class extends ou{createParse(e,t,n){return new wf(r,e,t,n)}};super(t,i,[],e.name),this.topNode=If(t,this),r=this,this.streamParser=n,this.stateAfter=new V({perNode:!0}),this.tokenTable=e.tokenTable?new Mf(n.tokenTable):Nf}static define(t){return new e(t)}getIndent(e){let t,{overrideIndentation:n}=e.options;n&&(t=yf.get(e.state),t!=null&&t<e.pos-1e4&&(t=void 0));let r=xf(this,e.node.tree,e.node.from,e.node.from,t??e.pos),i,a;if(r?(a=r.state,i=r.pos+1):(a=this.streamParser.startState(e.unit),i=e.node.from),e.pos-i>1e4)return null;for(;i<e.pos;){let t=e.state.doc.lineAt(i),r=Math.min(e.pos,t.to);if(t.length){let i=n?n(t.from):-1,o=new zu(t.text,e.state.tabSize,e.unit,i<0?void 0:i);for(;o.pos<r-t.from;)Tf(this.streamParser.token,o,a)}else this.streamParser.blankLine(a,e.unit);if(r==e.pos)break;i=t.to+1}let o=e.lineAt(e.pos);return n&&t==null&&yf.set(e.state,o.from),this.streamParser.indent(a,/^\s*(.*)/.exec(o.text)[1],e)}get allowsNesting(){return!1}};function xf(e,t,n,r,i){let a=n>=r&&n+t.length<=i&&t.prop(e.stateAfter);if(a)return{state:e.streamParser.copyState(a),pos:n+t.length};for(let a=t.children.length-1;a>=0;a--){let o=t.children[a],s=n+t.positions[a],c=o instanceof U&&s<i&&xf(e,o,s,r,i);if(c)return c}return null}function Sf(e,t,n,r,i){if(i&&n<=0&&r>=t.length)return t;!i&&n==0&&t.type==e.topNode&&(i=!0);for(let a=t.children.length-1;a>=0;a--){let o=t.positions[a],s=t.children[a],c;if(o<r&&s instanceof U){if(!(c=Sf(e,s,n-o,r-o,i)))break;return i?new U(t.type,t.children.slice(0,a).concat(c),t.positions.slice(0,a+1),o+c.length):c}}return null}function Cf(e,t,n,r,i){for(let i of t){let t=i.from+(i.openStart?25:0),a=i.to-(i.openEnd?25:0),o=t<=n&&a>n&&xf(e,i.tree,0-i.offset,n,a),s;if(o&&o.pos<=r&&(s=Sf(e,i.tree,n+i.offset,o.pos+i.offset,!1)))return{state:o.state,tree:s}}return{state:e.streamParser.startState(i?nd(i):4),tree:U.empty}}var wf=class{constructor(e,t,n,r){this.lang=e,this.input=t,this.fragments=n,this.ranges=r,this.stoppedAt=null,this.chunks=[],this.chunkPos=[],this.chunk=[],this.chunkReused=void 0,this.rangeIndex=0,this.to=r[r.length-1].to;let i=qu.get(),a=r[0].from,{state:o,tree:s}=Cf(e,n,a,this.to,i?.state);this.state=o,this.parsedPos=this.chunkStart=a+s.length;for(let e=0;e<s.children.length;e++)this.chunks.push(s.children[e]),this.chunkPos.push(s.positions[e]);i&&this.parsedPos<i.viewport.from-1e5&&r.some(e=>e.from<=i.viewport.from&&e.to>=i.viewport.from)&&(this.state=this.lang.streamParser.startState(nd(i.state)),i.skipUntilInView(this.parsedPos,i.viewport.from),this.parsedPos=i.viewport.from),this.moveRangeIndex()}advance(){let e=qu.get(),t=this.stoppedAt==null?this.to:Math.min(this.to,this.stoppedAt),n=Math.min(t,this.chunkStart+512);for(e&&(n=Math.min(n,e.viewport.to));this.parsedPos<n;)this.parseLine(e);return this.chunkStart<this.parsedPos&&this.finishChunk(),this.parsedPos>=t?this.finish():e&&this.parsedPos>=e.viewport.to?(e.skipUntilInView(this.parsedPos,t),this.finish()):null}stopAt(e){this.stoppedAt=e}lineAfter(e){let t=this.input.chunk(e);if(this.input.lineChunks)t==`
`&&(t=``);else{let e=t.indexOf(`
`);e>-1&&(t=t.slice(0,e))}return e+t.length<=this.to?t:t.slice(0,this.to-e)}nextLine(){let e=this.parsedPos,t=this.lineAfter(e),n=e+t.length;for(let e=this.rangeIndex;;){let r=this.ranges[e].to;if(r>=n||(t=t.slice(0,r-(n-t.length)),e++,e==this.ranges.length))break;let i=this.ranges[e].from,a=this.lineAfter(i);t+=a,n=i+a.length}return{line:t,end:n}}skipGapsTo(e,t,n){for(;;){let r=this.ranges[this.rangeIndex].to,i=e+t;if(n>0?r>i:r>=i)break;let a=this.ranges[++this.rangeIndex].from;t+=a-r}return t}moveRangeIndex(){for(;this.ranges[this.rangeIndex].to<this.parsedPos;)this.rangeIndex++}emitToken(e,t,n,r){let i=4;if(this.ranges.length>1){r=this.skipGapsTo(t,r,1),t+=r;let e=this.chunk.length;r=this.skipGapsTo(n,r,-1),n+=r,i+=this.chunk.length-e}let a=this.chunk.length-4;return this.lang.streamParser.mergeTokens&&i==4&&a>=0&&this.chunk[a]==e&&this.chunk[a+2]==t?this.chunk[a+2]=n:this.chunk.push(e,t,n,i),r}parseLine(e){let{line:t,end:n}=this.nextLine(),r=0,{streamParser:i}=this.lang,a=new zu(t,e?e.state.tabSize:4,e?nd(e.state):2);if(a.eol())i.blankLine(this.state,a.indentUnit);else for(;!a.eol();){let e=Tf(i.token,a,this.state);if(e&&(r=this.emitToken(this.lang.tokenTable.resolve(e),this.parsedPos+a.start,this.parsedPos+a.pos,r)),a.start>1e4)break}this.parsedPos=n,this.moveRangeIndex(),this.parsedPos<this.to&&this.parsedPos++}finishChunk(){let e=U.build({buffer:this.chunk,start:this.chunkStart,length:this.parsedPos-this.chunkStart,nodeSet:Of,topID:0,maxBufferLength:512,reused:this.chunkReused});e=new U(e.type,e.children,e.positions,e.length,[[this.lang.stateAfter,this.lang.streamParser.copyState(this.state)]]),this.chunks.push(e),this.chunkPos.push(this.chunkStart-this.ranges[0].from),this.chunk=[],this.chunkReused=void 0,this.chunkStart=this.parsedPos}finish(){return new U(this.lang.topNode,this.chunks,this.chunkPos,this.parsedPos-this.ranges[0].from).balance()}};function Tf(e,t,n){t.start=t.pos;for(let r=0;r<10;r++){let r=e(t,n);if(t.pos>t.start)return r}throw Error(`Stream parser failed to advance stream.`)}var Ef=Object.create(null),Df=[Il.none],Of=new Ll(Df),kf=[],Af=Object.create(null),jf=Object.create(null);for(let[e,t]of[[`variable`,`variableName`],[`variable-2`,`variableName.special`],[`string-2`,`string.special`],[`def`,`variableName.definition`],[`tag`,`tagName`],[`attribute`,`attributeName`],[`type`,`typeName`],[`builtin`,`variableName.standard`],[`qualifier`,`modifier`],[`error`,`invalid`],[`header`,`heading`],[`property`,`propertyName`]])jf[e]=Ff(Ef,t);var Mf=class{constructor(e){this.extra=e,this.table=Object.assign(Object.create(null),jf)}resolve(e){return e?this.table[e]||(this.table[e]=Ff(this.extra,e)):0}},Nf=new Mf(Ef);function Pf(e,t){kf.indexOf(e)>-1||(kf.push(e),console.warn(t))}function Ff(e,t){let n=[];for(let r of t.split(` `)){let t=[];for(let n of r.split(`.`)){let r=e[n]||G[n];r?typeof r==`function`?t.length?t=t.map(r):Pf(n,`Modifier ${n} used at start of tag`):t.length?Pf(n,`Tag ${n} used as modifier`):t=Array.isArray(r)?r:[r]:Pf(n,`Unknown highlighting tag ${n}`)}for(let e of t)n.push(e)}if(!n.length)return 0;let r=t.replace(/ /g,`_`),i=r+` `+n.map(e=>e.id),a=Af[i];if(a)return a.id;let o=Af[i]=Il.define({id:Df.length,name:r,props:[mu({[r]:n})]});return Df.push(o),o.id}function If(e,t){let n=Il.define({id:Df.length,name:`Document`,props:[Bu.add(()=>e),od.add(()=>e=>t.getIndent(e))],top:!0});return Df.push(n),n}F.RTL,F.LTR;var Lf=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=Hf(e.state,n.from);return r.line?zf(e):r.block?Vf(e):!1};function Rf(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let i=e(t,n);return i?(r(n.update(i)),!0):!1}}var zf=Rf(qf,0),Bf=Rf(Kf,0),Vf=Rf((e,t)=>Kf(e,t,Gf(t)),0);function Hf(e,t){let n=e.languageDataAt(`commentTokens`,t,1);return n.length?n[0]:{}}var Uf=50;function Wf(e,{open:t,close:n},r,i){let a=e.sliceDoc(r-Uf,r),o=e.sliceDoc(i,i+Uf),s=/\s*$/.exec(a)[0].length,c=/^\s*/.exec(o)[0].length,l=a.length-s;if(a.slice(l-t.length,l)==t&&o.slice(c,c+n.length)==n)return{open:{pos:r-s,margin:s&&1},close:{pos:i+c,margin:c&&1}};let u,d;i-r<=100?u=d=e.sliceDoc(r,i):(u=e.sliceDoc(r,r+Uf),d=e.sliceDoc(i-Uf,i));let f=/^\s*/.exec(u)[0].length,p=/\s*$/.exec(d)[0].length,m=d.length-p-n.length;return u.slice(f,f+t.length)==t&&d.slice(m,m+n.length)==n?{open:{pos:r+f+t.length,margin:+!!/\s/.test(u.charAt(f+t.length))},close:{pos:i-p-n.length,margin:+!!/\s/.test(d.charAt(m-1))}}:null}function Gf(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),i=n.to<=r.to?r:e.doc.lineAt(n.to);i.from>r.from&&i.from==n.to&&(i=n.to==r.to+1?r:e.doc.lineAt(n.to-1));let a=t.length-1;a>=0&&t[a].to>r.from?t[a].to=i.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:i.to})}return t}function Kf(e,t,n=t.selection.ranges){let r=n.map(e=>Hf(t,e.from).block);if(!r.every(e=>e))return null;let i=n.map((e,n)=>Wf(t,r[n],e.from,e.to));if(e!=2&&!i.every(e=>e))return{changes:t.changes(n.map((e,t)=>i[t]?[]:[{from:e.from,insert:r[t].open+` `},{from:e.to,insert:` `+r[t].close}]))};if(e!=1&&i.some(e=>e)){let e=[];for(let t=0,n;t<i.length;t++)if(n=i[t]){let i=r[t],{open:a,close:o}=n;e.push({from:a.pos-i.open.length,to:a.pos+a.margin},{from:o.pos-o.margin,to:o.pos+i.close.length})}return{changes:e}}return null}function qf(e,t,n=t.selection.ranges){let r=[],i=-1;ranges:for(let{from:e,to:a}of n){let n=r.length,o=1e9,s;for(let n=e;n<=a;){let c=t.doc.lineAt(n);if(s==null&&(s=Hf(t,c.from).line,!s))continue ranges;if(c.from>i&&(e==a||a>c.from)){i=c.from;let e=/^\s*/.exec(c.text)[0].length,t=e==c.length,n=c.text.slice(e,e+s.length)==s?e:-1;e<c.text.length&&e<o&&(o=e),r.push({line:c,comment:n,token:s,indent:e,empty:t,single:!1})}n=c.to+1}if(o<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=o);r.length==n+1&&(r[n].single=!0)}if(e!=2&&r.some(e=>e.comment<0&&(!e.empty||e.single))){let e=[];for(let{line:t,token:n,indent:i,empty:a,single:o}of r)(o||!a)&&e.push({from:t.from+i,insert:n+` `});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}if(e!=1&&r.some(e=>e.comment>=0)){let e=[];for(let{line:t,comment:n,token:i}of r)if(n>=0){let r=t.from+n,a=r+i.length;t.text[a-t.from]==` `&&a++,e.push({from:r,to:a})}return{changes:e}}return null}var Jf=bt.define(),Yf=bt.define(),Xf=T.define(),Zf=T.define({combine(e){return It(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}}),Qf=nt.define({create(){return _p.empty},update(e,t){let n=t.state.facet(Zf),r=t.annotation(Jf);if(r){let i=ap.fromTransaction(t,r.selection),a=r.side,o=a==0?e.undone:e.done;return o=i?op(o,o.length,n.minDepth,i):fp(o,t.startState.selection),new _p(a==0?r.rest:o,a==0?o:r.rest)}let i=t.annotation(Yf);if((i==`full`||i==`before`)&&(e=e.isolate()),t.annotation(Ct.addToHistory)===!1)return t.changes.empty?e:e.addMapping(t.changes.desc);let a=ap.fromTransaction(t),o=t.annotation(Ct.time),s=t.annotation(Ct.userEvent);return a?e=e.addChanges(a,o,s,n,t):t.selection&&(e=e.addSelection(t.startState.selection,o,s,n.newGroupDelay)),(i==`full`||i==`after`)&&(e=e.isolate()),e},toJSON(e){return{done:e.done.map(e=>e.toJSON()),undone:e.undone.map(e=>e.toJSON())}},fromJSON(e){return new _p(e.done.map(ap.fromJSON),e.undone.map(ap.fromJSON))}});function $f(e={}){return[Qf,Zf.of(e),B.domEventHandlers({beforeinput(e,t){let n=e.inputType==`historyUndo`?tp:e.inputType==`historyRedo`?np:null;return n?(e.preventDefault(),n(t)):!1}})]}function ep(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return!1;let i=n.field(Qf,!1);if(!i)return!1;let a=i.pop(e,n,t);return a?(r(a),!0):!1}}var tp=ep(0,!1),np=ep(1,!1),rp=ep(0,!0),ip=ep(1,!0),ap=class e{constructor(e,t,n,r,i){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=i}setSelAfter(t){return new e(this.changes,this.effects,this.mapped,this.startSelection,t)}toJSON(){return{changes:this.changes?.toJSON(),mapped:this.mapped?.toJSON(),startSelection:this.startSelection?.toJSON(),selectionsAfter:this.selectionsAfter.map(e=>e.toJSON())}}static fromJSON(t){return new e(t.changes&&Ve.fromJSON(t.changes),[],t.mapped&&Be.fromJSON(t.mapped),t.startSelection&&w.fromJSON(t.startSelection),t.selectionsAfter.map(w.fromJSON))}static fromTransaction(t,n){let r=up;for(let e of t.startState.facet(Xf)){let n=e(t);n.length&&(r=r.concat(n))}return!r.length&&t.changes.empty?null:new e(t.changes.invert(t.startState.doc),r,void 0,n||t.startState.selection,up)}static selection(t){return new e(void 0,up,void 0,void 0,t)}};function op(e,t,n,r){let i=t+1>n+20?t-n-1:0,a=e.slice(i,t);return a.push(r),a}function sp(e,t){let n=[],r=!1;return e.iterChangedRanges((e,t)=>n.push(e,t)),t.iterChangedRanges((e,t,i,a)=>{for(let e=0;e<n.length;){let t=n[e++],o=n[e++];a>=t&&i<=o&&(r=!0)}}),r}function cp(e,t){return e.ranges.length==t.ranges.length&&e.ranges.filter((e,n)=>e.empty!=t.ranges[n].empty).length===0}function lp(e,t){return e.length?t.length?e.concat(t):e:t}var up=[],dp=200;function fp(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-dp));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),op(e,e.length-1,1e9,n.setSelAfter(r)))}return[ap.selection([t])]}function pp(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function mp(e,t){if(!e.length)return e;let n=e.length,r=up;for(;n;){let i=hp(e[n-1],t,r);if(i.changes&&!i.changes.empty||i.effects.length){let t=e.slice(0,n);return t[n-1]=i,t}t=i.mapped,n--,r=i.selectionsAfter}return r.length?[ap.selection(r)]:up}function hp(e,t,n){let r=lp(e.selectionsAfter.length?e.selectionsAfter.map(e=>e.map(t)):up,n);if(!e.changes)return ap.selection(r);let i=e.changes.map(t),a=t.mapDesc(e.changes,!0),o=e.mapped?e.mapped.composeDesc(a):a;return new ap(i,E.mapEffects(e.effects,t),o,e.startSelection.map(a),r)}var gp=/^(input\.type|delete)($|\.)/,_p=class e{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new e(this.done,this.undone):this}addChanges(t,n,r,i,a){let o=this.done,s=o[o.length-1];return o=s&&s.changes&&!s.changes.empty&&t.changes&&(!r||gp.test(r))&&(!s.selectionsAfter.length&&n-this.prevTime<i.newGroupDelay&&i.joinToEvent(a,sp(s.changes,t.changes))||r==`input.type.compose`)?op(o,o.length-1,i.minDepth,new ap(t.changes.compose(s.changes),lp(E.mapEffects(t.effects,s.changes),s.effects),s.mapped,s.startSelection,up)):op(o,o.length,i.minDepth,t),new e(o,up,n,r)}addSelection(t,n,r,i){let a=this.done.length?this.done[this.done.length-1].selectionsAfter:up;return a.length>0&&n-this.prevTime<i&&r==this.prevUserEvent&&r&&/^select($|\.)/.test(r)&&cp(a[a.length-1],t)?this:new e(fp(this.done,t),this.undone,n,r)}addMapping(t){return new e(mp(this.done,t),mp(this.undone,t),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=e==0?this.done:this.undone;if(r.length==0)return null;let i=r[r.length-1],a=i.selectionsAfter[0]||(i.startSelection?i.startSelection.map(i.changes.invertedDesc,1):t.selection);if(n&&i.selectionsAfter.length)return t.update({selection:i.selectionsAfter[i.selectionsAfter.length-1],annotations:Jf.of({side:e,rest:pp(r),selection:a}),userEvent:e==0?`select.undo`:`select.redo`,scrollIntoView:!0});if(i.changes){let n=r.length==1?up:r.slice(0,r.length-1);return i.mapped&&(n=mp(n,i.mapped)),t.update({changes:i.changes,selection:i.startSelection,effects:i.effects,annotations:Jf.of({side:e,rest:n,selection:a}),filter:!1,userEvent:e==0?`undo`:`redo`,scrollIntoView:!0})}return null}};_p.empty=new _p(up,up);var vp=[{key:`Mod-z`,run:tp,preventDefault:!0},{key:`Mod-y`,mac:`Mod-Shift-z`,run:np,preventDefault:!0},{linux:`Ctrl-Shift-z`,run:np,preventDefault:!0},{key:`Mod-u`,run:rp,preventDefault:!0},{key:`Alt-u`,mac:`Mod-Shift-u`,run:ip,preventDefault:!0}];function yp(e,t){return w.create(e.ranges.map(t),e.mainIndex)}function bp(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:`select`})}function xp({state:e,dispatch:t},n){let r=yp(e.selection,n);return!r.eq(e.selection,!0)&&(t(bp(e,r)),!0)}function Sp(e,t){return w.cursor(t?e.to:e.from)}function Cp(e,t){return xp(e,n=>n.empty?e.moveByChar(n,t):Sp(n,t))}function wp(e){return e.textDirectionAt(e.state.selection.main.head)==F.LTR}var Tp=e=>Cp(e,!wp(e)),Ep=e=>Cp(e,wp(e));function Dp(e,t){return xp(e,n=>n.empty?e.moveByGroup(n,t):Sp(n,t))}var Op=e=>Dp(e,!wp(e)),kp=e=>Dp(e,wp(e));typeof Intl<`u`&&Intl.Segmenter;function Ap(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function jp(e,t,n){let r=K(e).resolveInner(t.head),i=n?V.closedBy:V.openedBy;for(let a=t.head;;){let t=n?r.childAfter(a):r.childBefore(a);if(!t)break;Ap(e,t,i)?r=t:a=n?t.to:t.from}let a=r.type.prop(i),o,s;return s=a&&(o=n?mf(e,r.from,1):mf(e,r.to,-1))&&o.matched?n?o.end.to:o.end.from:n?r.to:r.from,w.cursor(s,n?-1:1)}var Mp=e=>xp(e,t=>jp(e.state,t,!wp(e))),Np=e=>xp(e,t=>jp(e.state,t,wp(e)));function Pp(e,t){return xp(e,n=>{if(!n.empty)return Sp(n,t);let r=e.moveVertically(n,t);return r.head==n.head?e.moveToLineBoundary(n,t):r})}var Fp=e=>Pp(e,!1),Ip=e=>Pp(e,!0);function Lp(e){let t=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,n=0,r=0,i;if(t){for(let t of e.state.facet(B.scrollMargins)){let i=t(e);i?.top&&(n=Math.max(i?.top,n)),i?.bottom&&(r=Math.max(i?.bottom,r))}i=e.scrollDOM.clientHeight-n-r}else i=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:n,marginBottom:r,selfScroll:t,height:Math.max(e.defaultLineHeight,i-5)}}function Rp(e,t){let n=Lp(e),{state:r}=e,i=yp(r.selection,r=>r.empty?e.moveVertically(r,t,n.height):Sp(r,t));if(i.eq(r.selection))return!1;let a;if(n.selfScroll){let t=e.coordsAtPos(r.selection.main.head),o=e.scrollDOM.getBoundingClientRect(),s=o.top+n.marginTop,c=o.bottom-n.marginBottom;t&&t.top>s&&t.bottom<c&&(a=B.scrollIntoView(i.main.head,{y:`start`,yMargin:t.top-s}))}return e.dispatch(bp(r,i),{effects:a}),!0}var zp=e=>Rp(e,!1),Bp=e=>Rp(e,!0);function Vp(e,t,n){let r=e.lineBlockAt(t.head),i=e.moveToLineBoundary(t,n);if(i.head==t.head&&i.head!=(n?r.to:r.from)&&(i=e.moveToLineBoundary(t,n,!1)),!n&&i.head==r.from&&r.length){let n=/^\s*/.exec(e.state.sliceDoc(r.from,Math.min(r.from+100,r.to)))[0].length;n&&t.head!=r.from+n&&(i=w.cursor(r.from+n))}return i}var Hp=e=>xp(e,t=>Vp(e,t,!0)),Up=e=>xp(e,t=>Vp(e,t,!1)),Wp=e=>xp(e,t=>Vp(e,t,!wp(e))),Gp=e=>xp(e,t=>Vp(e,t,wp(e))),Kp=e=>xp(e,t=>e.moveToLineBoundary(t,!1,!1)),qp=e=>xp(e,t=>e.moveToLineBoundary(t,!0,!1));function Jp(e,t,n){let r=!1,i=yp(e.selection,t=>{let i=mf(e,t.head,-1)||mf(e,t.head,1)||t.head>0&&mf(e,t.head-1,1)||t.head<e.doc.length&&mf(e,t.head+1,-1);if(!i||!i.end)return t;r=!0;let a=i.start.from==t.head?i.end.to:i.end.from;return n?w.range(t.anchor,a):w.cursor(a)});return r?(t(bp(e,i)),!0):!1}var Yp=({state:e,dispatch:t})=>Jp(e,t,!1);function Xp(e,t,n){let r=yp(e.state.selection,e=>{e.undirectional&&e.head>=e.anchor!=t&&(e=w.range(e.head,e.anchor));let r=n(e);return w.range(e.anchor,r.head,r.goalColumn,r.bidiLevel||void 0,r.assoc)});return!r.eq(e.state.selection)&&(e.dispatch(bp(e.state,r)),!0)}function Zp(e,t){return Xp(e,t,n=>e.moveByChar(n,t))}var Qp=e=>Zp(e,!wp(e)),$p=e=>Zp(e,wp(e));function em(e,t){return Xp(e,t,n=>e.moveByGroup(n,t))}var tm=e=>em(e,!wp(e)),nm=e=>em(e,wp(e)),rm=e=>{let t=!wp(e);return Xp(e,t,n=>jp(e.state,n,t))},im=e=>{let t=wp(e);return Xp(e,t,n=>jp(e.state,n,t))};function am(e,t){return Xp(e,t,n=>e.moveVertically(n,t))}var om=e=>am(e,!1),sm=e=>am(e,!0);function cm(e,t){return Xp(e,t,n=>e.moveVertically(n,t,Lp(e).height))}var lm=e=>cm(e,!1),um=e=>cm(e,!0),dm=e=>Xp(e,!0,t=>Vp(e,t,!0)),fm=e=>Xp(e,!1,t=>Vp(e,t,!1)),pm=e=>{let t=!wp(e);return Xp(e,t,n=>Vp(e,n,t))},mm=e=>{let t=wp(e);return Xp(e,t,n=>Vp(e,n,t))},hm=e=>Xp(e,!1,t=>w.cursor(e.lineBlockAt(t.head).from)),gm=e=>Xp(e,!0,t=>w.cursor(e.lineBlockAt(t.head).to)),_m=({state:e,dispatch:t})=>(t(bp(e,{anchor:0})),!0),vm=({state:e,dispatch:t})=>(t(bp(e,{anchor:e.doc.length})),!0),ym=({state:e,dispatch:t})=>(t(bp(e,{anchor:e.selection.main.anchor,head:0})),!0),bm=({state:e,dispatch:t})=>(t(bp(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),xm=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:`select`})),!0),Sm=({state:e,dispatch:t})=>{let n=Vm(e).map(({from:t,to:n})=>w.undirectionalRange(t,Math.min(n+1,e.doc.length)));return t(e.update({selection:w.create(n),userEvent:`select`})),!0},Cm=({state:e,dispatch:t})=>{let n=yp(e.selection,t=>{let n=K(e),r=n.resolveStack(t.from,1);if(t.empty){let e=n.resolveStack(t.from,-1);e.node.from>=r.node.from&&e.node.to<=r.node.to&&(r=e)}for(let e=r;e;e=e.next){let{node:n}=e;if((n.from<t.from&&n.to>=t.to||n.to>t.to&&n.from<=t.from)&&e.next)return w.undirectionalRange(n.from,n.to)}return t});return!n.eq(e.selection)&&(t(bp(e,n)),!0)};function wm(e,t){let{state:n}=e,r=n.selection,i=n.selection.ranges.slice();for(let r of n.selection.ranges){let a=n.doc.lineAt(r.head);if(t?a.to<e.state.doc.length:a.from>0)for(let n=r;;){let r=e.moveVertically(n,t);if(r.head<a.from||r.head>a.to){i.some(e=>e.head==r.head)||i.push(r);break}if(r.head==n.head)break;n=r}}return i.length!=r.ranges.length&&(e.dispatch(bp(n,w.create(i,i.length-1))),!0)}var Tm=e=>wm(e,!1),Em=e=>wm(e,!0),Dm=({state:e,dispatch:t})=>{let n=e.selection,r=null;return n.ranges.length>1?r=w.create([n.main]):n.main.empty||(r=w.create([w.cursor(n.main.head)])),r?(t(bp(e,r)),!0):!1};function Om(e,t){if(e.state.readOnly)return!1;let n=`delete.selection`,{state:r}=e,i=r.changeByRange(r=>{let{from:i,to:a}=r;if(i==a){let o=t(r);o<i?(n=`delete.backward`,o=km(e,o,!1)):o>i&&(n=`delete.forward`,o=km(e,o,!0)),i=Math.min(i,o),a=Math.max(a,o)}else i=km(e,i,!1),a=km(e,a,!0);return i==a?{range:r}:{changes:{from:i,to:a},range:w.cursor(i,i<r.head?-1:1)}});return!i.changes.empty&&(e.dispatch(r.update(i,{scrollIntoView:!0,userEvent:n,effects:n==`delete.selection`?B.announce.of(r.phrase(`Selection deleted`)):void 0})),!0)}function km(e,t,n){if(e instanceof B)for(let r of e.state.facet(B.atomicRanges).map(t=>t(e)))r.between(t,t,(e,r)=>{e<t&&r>t&&(t=n?r:e)});return t}var Am=(e,t,n)=>Om(e,r=>{let i=r.from,{state:a}=e,o=a.doc.lineAt(i),s,c;if(n&&!t&&i>o.from&&i<o.from+200&&!/[^ \t]/.test(s=o.text.slice(0,i-o.from))){if(s[s.length-1]==`	`)return i-1;let e=tn(s,a.tabSize)%nd(a)||nd(a);for(let t=0;t<e&&s[s.length-1-t]==` `;t++)i--;c=i}else c=S(o.text,i-o.from,t,t)+o.from,c==i&&o.number!=(t?a.doc.lines:1)?c+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(o.text.slice(c-o.from,i-o.from))&&(c=S(o.text,c-o.from,!1,!1)+o.from);return c}),jm=e=>Am(e,!1,!0),Mm=e=>Am(e,!0,!1),Nm=(e,t)=>Om(e,n=>{let r=n.head,{state:i}=e,a=i.doc.lineAt(r),o=i.charCategorizer(r);for(let e=null;;){if(r==(t?a.to:a.from)){r==n.head&&a.number!=(t?i.doc.lines:1)&&(r+=t?1:-1);break}let s=S(a.text,r-a.from,t)+a.from,c=a.text.slice(Math.min(r,s)-a.from,Math.max(r,s)-a.from),l=o(c);if(e!=null&&l!=e)break;(c!=` `||r!=n.head)&&(e=l),r=s}return r}),Pm=e=>Nm(e,!1),Fm=e=>Nm(e,!0),Im=e=>Om(e,t=>{let n=e.lineBlockAt(t.head).to;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),Lm=e=>Om(e,t=>{let n=e.moveToLineBoundary(t,!1).head;return t.head>n?n:Math.max(0,t.head-1)}),Rm=e=>Om(e,t=>{let n=e.moveToLineBoundary(t,!0).head;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)}),zm=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(e=>({changes:{from:e.from,to:e.to,insert:x.of([``,``])},range:w.cursor(e.from)}));return t(e.update(n,{scrollIntoView:!0,userEvent:`input`})),!0},Bm=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=e.changeByRange(t=>{if(!t.empty||t.from==0||t.from==e.doc.length)return{range:t};let n=t.from,r=e.doc.lineAt(n),i=n==r.from?n-1:S(r.text,n-r.from,!1)+r.from,a=n==r.to?n+1:S(r.text,n-r.from,!0)+r.from;return{changes:{from:i,to:a,insert:e.doc.slice(n,a).append(e.doc.slice(i,n))},range:w.cursor(a)}});return!n.changes.empty&&(t(e.update(n,{scrollIntoView:!0,userEvent:`move.character`})),!0)};function Vm(e){let t=[],n=-1;for(let r of e.selection.ranges){let i=e.doc.lineAt(r.from),a=e.doc.lineAt(r.to);if(!r.empty&&r.to==a.from&&(a=e.doc.lineAt(r.to-1)),n>=i.number){let e=t[t.length-1];e.to=a.to,e.ranges.push(r)}else t.push({from:i.from,to:a.to,ranges:[r]});n=a.number+1}return t}function Hm(e,t,n){if(e.readOnly)return!1;let r=[],i=[];for(let t of Vm(e)){if(n?t.to==e.doc.length:t.from==0)continue;let a=e.doc.lineAt(n?t.to+1:t.from-1),o=a.length+1;if(n){r.push({from:t.to,to:a.to},{from:t.from,insert:a.text+e.lineBreak});for(let n of t.ranges)i.push(w.range(Math.min(e.doc.length,n.anchor+o),Math.min(e.doc.length,n.head+o)))}else{r.push({from:a.from,to:t.from},{from:t.to,insert:e.lineBreak+a.text});for(let e of t.ranges)i.push(w.range(e.anchor-o,e.head-o))}}return r.length?(t(e.update({changes:r,scrollIntoView:!0,selection:w.create(i,e.selection.mainIndex),userEvent:`move.line`})),!0):!1}var Um=({state:e,dispatch:t})=>Hm(e,t,!1),Wm=({state:e,dispatch:t})=>Hm(e,t,!0);function Gm(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of Vm(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});let i=e.changes(r);return t(e.update({changes:i,selection:e.selection.map(i,n?1:-1),scrollIntoView:!0,userEvent:`input.copyline`})),!0}var Km=({state:e,dispatch:t})=>Gm(e,t,!1),qm=({state:e,dispatch:t})=>Gm(e,t,!0),Jm=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(Vm(t).map(({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n}))),r=yp(t.selection,t=>{let n;if(e.lineWrapping){let r=e.lineBlockAt(t.head),i=e.coordsAtPos(t.head,t.assoc||1);i&&(n=r.bottom+e.documentTop-i.bottom+e.defaultLineHeight/2)}return e.moveVertically(t,!0,n)}).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:`delete.line`}),!0};function Ym(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n=K(e).resolveInner(t),r=n.childBefore(t),i=n.childAfter(t),a;return r&&i&&r.to<=t&&i.from>=t&&(a=r.type.prop(V.closedBy))&&a.indexOf(i.name)>-1&&e.doc.lineAt(r.to).from==e.doc.lineAt(i.from).from&&!/\S/.test(e.sliceDoc(r.to,i.from))?{from:r.to,to:i.from}:null}var Xm=Qm(!1),Zm=Qm(!0);function Qm(e){return({state:t,dispatch:n})=>{if(t.readOnly)return!1;let r=t.changeByRange(n=>{let{from:r,to:i}=n,a=t.doc.lineAt(r),o=!e&&r==i&&Ym(t,r);e&&(r=i=(i<=a.to?a:t.doc.lineAt(i)).to);let s=new ad(t,{simulateBreak:r,simulateDoubleBreak:!!o}),c=id(s,r);for(c??(c=tn(/^\s*/.exec(t.doc.lineAt(r).text)[0],t.tabSize));i<a.to&&/\s/.test(a.text[i-a.from]);)i++;o?{from:r,to:i}=o:r>a.from&&r<a.from+100&&!/\S/.test(a.text.slice(0,r))&&(r=a.from);let l=[``,rd(t,c)];return o&&l.push(rd(t,s.lineIndent(a.from,-1))),{changes:{from:r,to:i,insert:x.of(l)},range:w.cursor(r+1+l[1].length)}});return n(t.update(r,{scrollIntoView:!0,userEvent:`input`})),!0}}function $m(e,t){let n=-1;return e.changeByRange(r=>{let i=[];for(let a=r.from;a<=r.to;){let o=e.doc.lineAt(a);o.number>n&&(r.empty||r.to>o.from)&&(t(o,i,r),n=o.number),a=o.to+1}let a=e.changes(i);return{changes:i,range:w.range(a.mapPos(r.anchor,1),a.mapPos(r.head,1))}})}var eh=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new ad(e,{overrideIndentation:e=>n[e]??-1}),i=$m(e,(t,i,a)=>{let o=id(r,t.from);if(o==null)return;/\S/.test(t.text)||(o=0);let s=/^\s*/.exec(t.text)[0],c=rd(e,o);(s!=c||a.from<t.from+s.length)&&(n[t.from]=o,i.push({from:t.from,to:t.from+s.length,insert:c}))});return i.changes.empty||t(e.update(i,{userEvent:`indent`})),!0},th=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update($m(e,(t,n)=>{n.push({from:t.from,insert:e.facet(td)})}),{userEvent:`input.indent`})),!0),nh=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update($m(e,(t,n)=>{let r=/^\s*/.exec(t.text)[0];if(!r)return;let i=tn(r,e.tabSize),a=0,o=rd(e,Math.max(0,i-nd(e)));for(;a<r.length&&a<o.length&&r.charCodeAt(a)==o.charCodeAt(a);)a++;n.push({from:t.from+a,to:t.from+r.length,insert:o.slice(a)})}),{userEvent:`delete.dedent`})),!0),rh=e=>(e.setTabFocusMode(),!0),ih=[{key:`Ctrl-b`,run:Tp,shift:Qp,preventDefault:!0},{key:`Ctrl-f`,run:Ep,shift:$p},{key:`Ctrl-p`,run:Fp,shift:om},{key:`Ctrl-n`,run:Ip,shift:sm},{key:`Ctrl-a`,run:Kp,shift:hm},{key:`Ctrl-e`,run:qp,shift:gm},{key:`Ctrl-d`,run:Mm},{key:`Ctrl-h`,run:jm},{key:`Ctrl-k`,run:Im},{key:`Ctrl-Alt-h`,run:Pm},{key:`Ctrl-o`,run:zm},{key:`Ctrl-t`,run:Bm},{key:`Ctrl-v`,run:Bp}],ah=[{key:`ArrowLeft`,run:Tp,shift:Qp,preventDefault:!0},{key:`Mod-ArrowLeft`,mac:`Alt-ArrowLeft`,run:Op,shift:tm,preventDefault:!0},{mac:`Cmd-ArrowLeft`,run:Wp,shift:pm,preventDefault:!0},{key:`ArrowRight`,run:Ep,shift:$p,preventDefault:!0},{key:`Mod-ArrowRight`,mac:`Alt-ArrowRight`,run:kp,shift:nm,preventDefault:!0},{mac:`Cmd-ArrowRight`,run:Gp,shift:mm,preventDefault:!0},{key:`ArrowUp`,run:Fp,shift:om,preventDefault:!0},{mac:`Cmd-ArrowUp`,run:_m,shift:ym},{mac:`Ctrl-ArrowUp`,run:zp,shift:lm},{key:`ArrowDown`,run:Ip,shift:sm,preventDefault:!0},{mac:`Cmd-ArrowDown`,run:vm,shift:bm},{mac:`Ctrl-ArrowDown`,run:Bp,shift:um},{key:`PageUp`,run:zp,shift:lm},{key:`PageDown`,run:Bp,shift:um},{key:`Home`,run:Up,shift:fm,preventDefault:!0},{key:`Mod-Home`,run:_m,shift:ym},{key:`End`,run:Hp,shift:dm,preventDefault:!0},{key:`Mod-End`,run:vm,shift:bm},{key:`Enter`,run:Xm,shift:Xm},{key:`Mod-a`,run:xm},{key:`Backspace`,run:jm,shift:jm,preventDefault:!0},{key:`Delete`,run:Mm,preventDefault:!0},{key:`Mod-Backspace`,mac:`Alt-Backspace`,run:Pm,preventDefault:!0},{key:`Mod-Delete`,mac:`Alt-Delete`,run:Fm,preventDefault:!0},{mac:`Mod-Backspace`,run:Lm,preventDefault:!0},{mac:`Mod-Delete`,run:Rm,preventDefault:!0}].concat(ih.map(e=>({mac:e.key,run:e.run,shift:e.shift}))),oh=[{key:`Alt-ArrowLeft`,mac:`Ctrl-ArrowLeft`,run:Mp,shift:rm},{key:`Alt-ArrowRight`,mac:`Ctrl-ArrowRight`,run:Np,shift:im},{key:`Alt-ArrowUp`,run:Um},{key:`Shift-Alt-ArrowUp`,run:Km},{key:`Alt-ArrowDown`,run:Wm},{key:`Shift-Alt-ArrowDown`,run:qm},{key:`Mod-Alt-ArrowUp`,run:Tm},{key:`Mod-Alt-ArrowDown`,run:Em},{key:`Escape`,run:Dm},{key:`Mod-Enter`,run:Zm},{key:`Alt-l`,mac:`Ctrl-l`,run:Sm},{key:`Mod-i`,run:Cm,preventDefault:!0},{key:`Mod-[`,run:nh},{key:`Mod-]`,run:th},{key:`Mod-Alt-\\`,run:eh},{key:`Shift-Mod-k`,run:Jm},{key:`Shift-Mod-\\`,run:Yp},{key:`Mod-/`,run:Lf},{key:`Alt-A`,mac:`Ctrl-A`,run:Bf},{key:`Ctrl-m`,mac:`Shift-Alt-m`,run:rh}].concat(ah),sh={key:`Tab`,run:th,shift:nh},ch=typeof String.prototype.normalize==`function`?e=>e.normalize(`NFKD`):e=>e,lh=class{constructor(e,t,n=0,r=e.length,i,a){this.test=a,this.value={from:0,to:0,precise:!1},this.done=!1,this.matches=[],this.buffer=``,this.bufferPos=0,this.iter=e.iterRange(n,r),this.bufferStart=n,this.normalize=i?e=>i(ch(e)):ch,this.query=this.normalize(t)}peek(){if(this.bufferPos==this.buffer.length){if(this.bufferStart+=this.buffer.length,this.iter.next(),this.iter.done)return-1;this.bufferPos=0,this.buffer=this.iter.value}return Fe(this.buffer,this.bufferPos)}next(){for(;this.matches.length;)this.matches.pop();return this.nextOverlapping()}nextOverlapping(){for(;;){let e=this.peek();if(e<0)return this.done=!0,this;let t=Ie(e),n=this.bufferStart+this.bufferPos;this.bufferPos+=Le(e);let r=this.normalize(t);if(r.length)for(let e=0,i=n,a=!0;;e++){let n=r.charCodeAt(e),o=this.match(n,i,a,this.bufferPos+this.bufferStart,e==r.length-1);if(o)return this.value=o,this;if(e==r.length-1)break;a&&e<t.length&&t.charCodeAt(e)==n?i++:a=!1}}}match(e,t,n,r,i){let a=null;for(let t=0;t<this.matches.length;){let n=this.matches[t],o=!1;this.query.charCodeAt(n.index)==e&&(n.index==this.query.length-1?a={from:n.from,to:r,precise:i&&n.precise}:(n.index++,o=!0)),o?t++:this.matches.splice(t,1)}return this.query.charCodeAt(0)==e&&(this.query.length==1?a={from:t,to:r,precise:n&&i}:this.matches.push({from:t,index:1,precise:n})),a&&this.test&&!this.test(a.from,a.to,this.buffer,this.bufferStart)&&(a=null),a}};typeof Symbol<`u`&&(lh.prototype[Symbol.iterator]=function(){return this});var uh={from:-1,to:-1,match:/.*/.exec(``),precise:!0},dh=`gm`+(/x/.unicode==null?``:`u`),fh=class{constructor(e,t,n,r=0,i=e.length){if(this.text=e,this.to=i,this.curLine=``,this.done=!1,this.value=uh,/\\[sWDnr]|\n|\r|\[\^/.test(t))return new hh(e,t,n,r,i);this.re=new RegExp(t,dh+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.iter=e.iter();let a=e.lineAt(r);this.curLineStart=a.from,this.matchPos=_h(e,r),this.getLine(this.curLineStart)}getLine(e){this.iter.next(e),this.iter.lineBreak?this.curLine=``:(this.curLine=this.iter.value,this.curLineStart+this.curLine.length>this.to&&(this.curLine=this.curLine.slice(0,this.to-this.curLineStart)),this.iter.next())}nextLine(){this.curLineStart=this.curLineStart+this.curLine.length+1,this.curLineStart>this.to?this.curLine=``:this.getLine(0)}next(){for(let e=this.matchPos-this.curLineStart;;){this.re.lastIndex=e;let t=this.matchPos<=this.to&&this.re.exec(this.curLine);if(t){let n=this.curLineStart+t.index,r=n+t[0].length;if(this.matchPos=_h(this.text,r+ +(n==r)),n==this.curLineStart+this.curLine.length&&this.nextLine(),(n<r||n>this.value.to)&&(!this.test||this.test(n,r,t)))return this.value={from:n,to:r,precise:!0,match:t},this;e=this.matchPos-this.curLineStart}else if(this.curLineStart+this.curLine.length<this.to)this.nextLine(),e=0;else return this.done=!0,this}}},ph=new WeakMap,mh=class e{constructor(e,t){this.from=e,this.text=t}get to(){return this.from+this.text.length}static get(t,n,r){let i=ph.get(t);if(!i||i.from>=r||i.to<=n){let i=new e(n,t.sliceString(n,r));return ph.set(t,i),i}if(i.from==n&&i.to==r)return i;let{text:a,from:o}=i;return o>n&&(a=t.sliceString(n,o)+a,o=n),i.to<r&&(a+=t.sliceString(i.to,r)),ph.set(t,new e(o,a)),new e(n,a.slice(n-o,r-o))}},hh=class{constructor(e,t,n,r,i){this.text=e,this.to=i,this.done=!1,this.value=uh,this.matchPos=_h(e,r),this.re=new RegExp(t,dh+(n?.ignoreCase?`i`:``)),this.test=n?.test,this.flat=mh.get(e,r,this.chunkEnd(r+5e3))}chunkEnd(e){return e>=this.to?this.to:this.text.lineAt(e).to}next(){for(;;){let e=this.re.lastIndex=this.matchPos-this.flat.from,t=this.re.exec(this.flat.text);if(t&&!t[0]&&t.index==e&&(this.re.lastIndex=e+1,t=this.re.exec(this.flat.text)),t){let e=this.flat.from+t.index,n=e+t[0].length;if((this.flat.to>=this.to||t.index+t[0].length<=this.flat.text.length-10)&&(!this.test||this.test(e,n,t)))return this.value={from:e,to:n,precise:!0,match:t},this.matchPos=_h(this.text,n+ +(e==n)),this}if(this.flat.to==this.to)return this.done=!0,this;this.flat=mh.get(this.text,this.flat.from,this.chunkEnd(this.flat.from+this.flat.text.length*2))}}};typeof Symbol<`u`&&(fh.prototype[Symbol.iterator]=hh.prototype[Symbol.iterator]=function(){return this});function gh(e){try{return new RegExp(e,dh),!0}catch{return!1}}function _h(e,t){if(t>=e.length)return t;let n=e.lineAt(t),r;for(;t<n.to&&(r=n.text.charCodeAt(t-n.from))>=56320&&r<57344;)t++;return t}var vh=e=>{let t=el(e,`cm-goto-line`);if(t){let e=t.dom.querySelector(`input[type=text]`);return e&&e.select(),!0}let{state:n}=e,r=String(n.doc.lineAt(e.state.selection.main.head).number),{close:i,result:a}=$c(e,{class:`cm-goto-line`,label:n.phrase(`Go to line`),input:{type:`text`,name:`line`,value:r},focus:!0,submitLabel:n.phrase(`go`)});return a.then(t=>{let r=t&&/^([+-])?(\d+)?(:\d+)?(%)?$/.exec(t.elements.line.value);if(!r){e.dispatch({effects:i});return}let a=n.doc.lineAt(n.selection.main.head),[,o,s,c,l]=r,u=c?+c.slice(1):0,d=s?+s:a.number;if(s&&l){let e=d/100;o&&(e=e*(o==`-`?-1:1)+a.number/n.doc.lines),d=Math.round(n.doc.lines*e)}else s&&o&&(d=d*(o==`-`?-1:1)+a.number);let f=n.doc.line(Math.max(1,Math.min(n.doc.lines,d))),p=w.cursor(f.from+Math.max(0,Math.min(u,f.length)));e.dispatch({effects:[i,B.scrollIntoView(p.from,{y:`center`})],selection:p})}),!0},yh={highlightWordAroundCursor:!1,minSelectionLength:1,maxMatches:100,wholeWords:!1},bh=T.define({combine(e){return It(e,yh,{highlightWordAroundCursor:(e,t)=>e||t,minSelectionLength:Math.min,maxMatches:Math.min})}});function xh(e){let t=[Dh,Eh];return e&&t.push(bh.of(e)),t}var Sh=N.mark({class:`cm-selectionMatch`}),Ch=N.mark({class:`cm-selectionMatch cm-selectionMatch-main`});function wh(e,t,n,r){return(n==0||e(t.sliceDoc(n-1,n))!=D.Word)&&(r==t.doc.length||e(t.sliceDoc(r,r+1))!=D.Word)}function Th(e,t,n,r){return e(t.sliceDoc(n,n+1))==D.Word&&e(t.sliceDoc(r-1,r))==D.Word}var Eh=L.fromClass(class{constructor(e){this.decorations=this.getDeco(e)}update(e){(e.selectionSet||e.docChanged||e.viewportChanged)&&(this.decorations=this.getDeco(e.view))}getDeco(e){let t=e.state.facet(bh),{state:n}=e,r=n.selection;if(r.ranges.length>1)return N.none;let i=r.main,a,o=null;if(i.empty){if(!t.highlightWordAroundCursor)return N.none;let e=n.wordAt(i.head);if(!e)return N.none;o=n.charCategorizer(i.head),a=n.sliceDoc(e.from,e.to)}else{let e=i.to-i.from;if(e<t.minSelectionLength||e>200)return N.none;if(t.wholeWords){if(a=n.sliceDoc(i.from,i.to),o=n.charCategorizer(i.head),!(wh(o,n,i.from,i.to)&&Th(o,n,i.from,i.to)))return N.none}else if(a=n.sliceDoc(i.from,i.to),!a)return N.none}let s=[];for(let r of e.visibleRanges){let e=new lh(n.doc,a,r.from,r.to);for(;!e.next().done;){let{from:r,to:a}=e.value;if((!o||wh(o,n,r,a))&&(i.empty&&r<=i.from&&a>=i.to?s.push(Ch.range(r,a)):(r>=i.to||a<=i.from)&&s.push(Sh.range(r,a)),s.length>t.maxMatches))return N.none}}return N.set(s)}},{decorations:e=>e.decorations}),Dh=B.baseTheme({".cm-selectionMatch":{backgroundColor:`#99ff7780`},".cm-searchMatch .cm-selectionMatch":{backgroundColor:`transparent`}}),Oh=({state:e,dispatch:t})=>{let{selection:n}=e,r=w.create(n.ranges.map(t=>e.wordAt(t.head)||w.cursor(t.head)),n.mainIndex);return!r.eq(n)&&(t(e.update({selection:r})),!0)};function kh(e,t){let{main:n,ranges:r}=e.selection,i=e.wordAt(n.head),a=i&&i.from==n.from&&i.to==n.to;for(let n=!1,i=new lh(e.doc,t,r[r.length-1].to);;)if(i.next(),i.done){if(n)return null;i=new lh(e.doc,t,0,Math.max(0,r[r.length-1].from-1)),n=!0}else{if(n&&r.some(e=>e.from==i.value.from))continue;if(a){let t=e.wordAt(i.value.from);if(!t||t.from!=i.value.from||t.to!=i.value.to)continue}return i.value}}var Ah=({state:e,dispatch:t})=>{let{ranges:n}=e.selection;if(n.some(e=>e.from===e.to))return Oh({state:e,dispatch:t});let r=e.sliceDoc(n[0].from,n[0].to);if(e.selection.ranges.some(t=>e.sliceDoc(t.from,t.to)!=r))return!1;let i=kh(e,r);return i?(t(e.update({selection:e.selection.addRange(w.range(i.from,i.to),!1),effects:B.scrollIntoView(i.to)})),!0):!1},jh=T.define({combine(e){return It(e,{top:!1,caseSensitive:!1,literal:!1,regexp:!1,wholeWord:!1,createPanel:e=>new dg(e),scrollToMatch:e=>B.scrollIntoView(e)})}}),Mh=class{constructor(e){this.search=e.search,this.caseSensitive=!!e.caseSensitive,this.literal=!!e.literal,this.regexp=!!e.regexp,this.replace=e.replace||``,this.valid=!!this.search&&(!this.regexp||gh(this.search)),this.unquoted=this.unquote(this.search),this.wholeWord=!!e.wholeWord,this.test=e.test}unquote(e){return this.literal?e:e.replace(/\\([nrt\\])/g,(e,t)=>t==`n`?`
`:t==`r`?`\r`:t==`t`?`	`:`\\`)}eq(e){return this.search==e.search&&this.replace==e.replace&&this.caseSensitive==e.caseSensitive&&this.regexp==e.regexp&&this.wholeWord==e.wholeWord&&this.test==e.test}create(){return this.regexp?new Uh(this):new Lh(this)}getCursor(e,t=0,n){let r=e.doc?e:O.create({doc:e});return n??(n=r.doc.length),this.regexp?zh(this,r,t,n):Fh(this,r,t,n)}},Nh=class{constructor(e){this.spec=e}};function Ph(e,t,n){return(r,i,a,o)=>n&&!n(r,i,a,o)?!1:e(r>=o&&i<=o+a.length?a.slice(r-o,i-o):t.doc.sliceString(r,i),t,r,i)}function Fh(e,t,n,r){let i;return e.wholeWord&&(i=Ih(t.doc,t.charCategorizer(t.selection.main.head))),e.test&&(i=Ph(e.test,t,i)),new lh(t.doc,e.unquoted,n,r,e.caseSensitive?void 0:e=>e.toLowerCase(),i)}function Ih(e,t){return(n,r,i,a)=>((a>n||a+i.length<r)&&(a=Math.max(0,n-2),i=e.sliceString(a,Math.min(e.length,r+2))),(t(Bh(i,n-a))!=D.Word||t(Vh(i,n-a))!=D.Word)&&(t(Vh(i,r-a))!=D.Word||t(Bh(i,r-a))!=D.Word))}var Lh=class extends Nh{constructor(e){super(e)}nextMatch(e,t,n){let r=Fh(this.spec,e,n,e.doc.length).nextOverlapping();if(r.done){let n=Math.min(e.doc.length,t+this.spec.unquoted.length);r=Fh(this.spec,e,0,n).nextOverlapping()}return r.done||r.value.from==t&&r.value.to==n?null:r.value}prevMatchInRange(e,t,n){for(let r=n;;){let n=Math.max(t,r-1e4-this.spec.unquoted.length),i=Fh(this.spec,e,n,r),a=null;for(;!i.nextOverlapping().done;)a=i.value;if(a)return a;if(n==t)return null;r-=1e4}}prevMatch(e,t,n){let r=this.prevMatchInRange(e,0,t);return r||(r=this.prevMatchInRange(e,Math.max(0,n-this.spec.unquoted.length),e.doc.length)),r&&(r.from!=t||r.to!=n)?r:null}getReplacement(e){return this.spec.unquote(this.spec.replace)}matchAll(e,t){let n=Fh(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=Fh(this.spec,e,Math.max(0,t-this.spec.unquoted.length),Math.min(n+this.spec.unquoted.length,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}};function Rh(e,t,n){return(r,i,a)=>(!n||n(r,i,a))&&e(a[0],t,r,i)}function zh(e,t,n,r){let i;return e.wholeWord&&(i=Hh(t.charCategorizer(t.selection.main.head))),e.test&&(i=Rh(e.test,t,i)),new fh(t.doc,e.search,{ignoreCase:!e.caseSensitive,test:i},n,r)}function Bh(e,t){return e.slice(S(e,t,!1),t)}function Vh(e,t){return e.slice(t,S(e,t))}function Hh(e){return(t,n,r)=>!r[0].length||(e(Bh(r.input,r.index))!=D.Word||e(Vh(r.input,r.index))!=D.Word)&&(e(Vh(r.input,r.index+r[0].length))!=D.Word||e(Bh(r.input,r.index+r[0].length))!=D.Word)}var Uh=class extends Nh{nextMatch(e,t,n){let r=zh(this.spec,e,n,e.doc.length).next();return r.done&&(r=zh(this.spec,e,0,t).next()),r.done?null:r.value}prevMatchInRange(e,t,n){for(let r=1;;r++){let i=Math.max(t,n-r*1e4),a=zh(this.spec,e,i,n),o=null;for(;!a.next().done;)o=a.value;if(o&&(i==t||o.from>i+10))return o;if(i==t)return null}}prevMatch(e,t,n){return this.prevMatchInRange(e,0,t)||this.prevMatchInRange(e,n,e.doc.length)}getReplacement(e){return this.spec.unquote(this.spec.replace).replace(/\$([$&]|\d+)/g,(t,n)=>{if(n==`&`)return e.match[0];if(n==`$`)return`$`;for(let t=n.length;t>0;t--){let r=+n.slice(0,t);if(r>0&&r<e.match.length)return e.match[r]+n.slice(t)}return t})}matchAll(e,t){let n=zh(this.spec,e,0,e.doc.length),r=[];for(;!n.next().done;){if(r.length>=t)return null;r.push(n.value)}return r}highlight(e,t,n,r){let i=zh(this.spec,e,Math.max(0,t-250),Math.min(n+250,e.doc.length));for(;!i.next().done;)r(i.value.from,i.value.to)}},Wh=E.define(),Gh=E.define(),Kh=nt.define({create(e){return new qh(ag(e).create(),null)},update(e,t){for(let n of t.effects)n.is(Wh)?e=new qh(n.value.create(),e.panel):n.is(Gh)&&(e=new qh(e.query,n.value?ig:null));return e},provide:e=>Qc.from(e,e=>e.panel)}),qh=class{constructor(e,t){this.query=e,this.panel=t}},Jh=N.mark({class:`cm-searchMatch`}),Yh=N.mark({class:`cm-searchMatch cm-searchMatch-selected`}),Xh=L.fromClass(class{constructor(e){this.view=e,this.decorations=this.highlight(e.state.field(Kh))}update(e){let t=e.state.field(Kh);(t!=e.startState.field(Kh)||e.docChanged||e.selectionSet||e.viewportChanged)&&(this.decorations=this.highlight(t))}highlight({query:e,panel:t}){if(!t||!e.spec.valid)return N.none;let{view:n}=this,r=new Wt;for(let t=0,i=n.visibleRanges,a=i.length;t<a;t++){let{from:o,to:s}=i[t];for(;t<a-1&&s>i[t+1].from-500;)s=i[++t].to;e.highlight(n.state,o,s,(e,t)=>{let i=n.state.selection.ranges.some(n=>n.from==e&&n.to==t);r.add(e,t,i?Yh:Jh)})}return r.finish()}},{decorations:e=>e.decorations});function Zh(e){return t=>{let n=t.state.field(Kh,!1);return n&&n.query.spec.valid?e(t,n):cg(t)}}var Qh=Zh((e,{query:t})=>{let{to:n}=e.state.selection.main,r=t.nextMatch(e.state,n,n);if(!r)return!1;let i=w.single(r.from,r.to),a=e.state.facet(jh);return e.dispatch({selection:i,effects:[hg(e,r),a.scrollToMatch(i.main,e)],userEvent:`select.search`}),sg(e),!0}),$h=Zh((e,{query:t})=>{let{state:n}=e,{from:r}=n.selection.main,i=t.prevMatch(n,r,r);if(!i)return!1;let a=w.single(i.from,i.to),o=e.state.facet(jh);return e.dispatch({selection:a,effects:[hg(e,i),o.scrollToMatch(a.main,e)],userEvent:`select.search`}),sg(e),!0}),eg=Zh((e,{query:t})=>{let n=t.matchAll(e.state,1e3);return!n||!n.length?!1:(e.dispatch({selection:w.create(n.map(e=>w.range(e.from,e.to))),userEvent:`select.search.matches`}),!0)}),tg=({state:e,dispatch:t})=>{let n=e.selection;if(n.ranges.length>1||n.main.empty)return!1;let{from:r,to:i}=n.main,a=[],o=0;for(let t=new lh(e.doc,e.sliceDoc(r,i));!t.next().done;){if(a.length>1e3)return!1;t.value.from==r&&(o=a.length),a.push(w.range(t.value.from,t.value.to))}return t(e.update({selection:w.create(a,o),userEvent:`select.search.matches`})),!0},ng=Zh((e,{query:t})=>{let{state:n}=e,{from:r,to:i}=n.selection.main;if(n.readOnly)return!1;let a=t.nextMatch(n,r,r);if(!a)return!1;let o=a,s=[],c,l,u=[];o.precise?o.from==r&&o.to==i&&(l=n.toText(t.getReplacement(o)),s.push({from:o.from,to:o.to,insert:l}),o=t.nextMatch(n,o.from,o.to),u.push(B.announce.of(n.phrase(`replaced match on line $`,n.doc.lineAt(r).number)+`.`))):o=t.nextMatch(n,o.from,o.to);let d=e.state.changes(s);return o&&(c=w.single(o.from,o.to).map(d),u.push(hg(e,o)),u.push(n.facet(jh).scrollToMatch(c.main,e))),e.dispatch({changes:d,selection:c,effects:u,userEvent:`input.replace`}),!0}),rg=Zh((e,{query:t})=>{if(e.state.readOnly)return!1;let n=[];for(let r of t.matchAll(e.state,1e9)){let{from:e,to:i,precise:a}=r;a&&n.push({from:e,to:i,insert:t.getReplacement(r)})}if(!n.length)return!1;let r=e.state.phrase(`replaced $ matches`,n.length)+`.`;return e.dispatch({changes:n,effects:B.announce.of(r),userEvent:`input.replace.all`}),!0});function ig(e){return e.state.facet(jh).createPanel(e)}function ag(e,t){let n=e.selection.main,r=n.empty||n.to>n.from+100?``:e.sliceDoc(n.from,n.to);if(t&&!r)return t;let i=e.facet(jh);return new Mh({search:t?.literal??i.literal?r:r.replace(/\n/g,`\\n`),caseSensitive:t?.caseSensitive??i.caseSensitive,literal:t?.literal??i.literal,regexp:t?.regexp??i.regexp,wholeWord:t?.wholeWord??i.wholeWord})}function og(e){let t=Jc(e,ig);return t&&t.dom.querySelector(`[main-field]`)}function sg(e){let t=og(e);t&&t==e.root.activeElement&&t.select()}var cg=e=>{let t=e.state.field(Kh,!1);if(t&&t.panel){let n=og(e);if(n&&n!=e.root.activeElement){let r=ag(e.state,t.query.spec);r.valid&&e.dispatch({effects:Wh.of(r)}),n.focus(),n.select()}}else e.dispatch({effects:[Gh.of(!0),t?Wh.of(ag(e.state,t.query.spec)):E.appendConfig.of(_g)]});return!0},lg=e=>{let t=e.state.field(Kh,!1);if(!t||!t.panel)return!1;let n=Jc(e,ig);return n&&n.dom.contains(e.root.activeElement)&&e.focus(),e.dispatch({effects:Gh.of(!1)}),!0},ug=[{key:`Mod-f`,run:cg,scope:`editor search-panel`},{key:`F3`,run:Qh,shift:$h,scope:`editor search-panel`,preventDefault:!0},{key:`Mod-g`,run:Qh,shift:$h,scope:`editor search-panel`,preventDefault:!0},{key:`Escape`,run:lg,scope:`editor search-panel`},{key:`Mod-Shift-l`,run:tg},{key:`Mod-Alt-g`,run:vh},{key:`Mod-d`,run:Ah,preventDefault:!0}],dg=class{constructor(e){this.view=e;let t=this.query=e.state.field(Kh).query.spec;this.commit=this.commit.bind(this),this.searchField=A(`input`,{value:t.search,placeholder:fg(e,`Find`),"aria-label":fg(e,`Find`),class:`cm-textfield`,name:`search`,form:``,"main-field":`true`,onchange:this.commit,onkeyup:this.commit}),this.replaceField=A(`input`,{value:t.replace,placeholder:fg(e,`Replace`),"aria-label":fg(e,`Replace`),class:`cm-textfield`,name:`replace`,form:``,onchange:this.commit,onkeyup:this.commit}),this.caseField=A(`input`,{type:`checkbox`,name:`case`,form:``,checked:t.caseSensitive,onchange:this.commit}),this.reField=A(`input`,{type:`checkbox`,name:`re`,form:``,checked:t.regexp,onchange:this.commit}),this.wordField=A(`input`,{type:`checkbox`,name:`word`,form:``,checked:t.wholeWord,onchange:this.commit});function n(e,t,n){return A(`button`,{class:`cm-button`,name:e,onclick:t,type:`button`},n)}this.dom=A(`div`,{onkeydown:e=>this.keydown(e),class:`cm-search`},[this.searchField,n(`next`,()=>Qh(e),[fg(e,`next`)]),n(`prev`,()=>$h(e),[fg(e,`previous`)]),n(`select`,()=>eg(e),[fg(e,`all`)]),A(`label`,null,[this.caseField,fg(e,`match case`)]),A(`label`,null,[this.reField,fg(e,`regexp`)]),A(`label`,null,[this.wordField,fg(e,`by word`)]),...e.state.readOnly?[]:[A(`br`),this.replaceField,n(`replace`,()=>ng(e),[fg(e,`replace`)]),n(`replaceAll`,()=>rg(e),[fg(e,`replace all`)])],A(`button`,{name:`close`,onclick:()=>lg(e),"aria-label":fg(e,`close`),type:`button`},[`×`])])}commit(){let e=new Mh({search:this.searchField.value,caseSensitive:this.caseField.checked,regexp:this.reField.checked,wholeWord:this.wordField.checked,replace:this.replaceField.value});e.eq(this.query)||(this.query=e,this.view.dispatch({effects:Wh.of(e)}))}keydown(e){Cs(this.view,e,`search-panel`)?e.preventDefault():e.keyCode==13&&e.target==this.searchField?(e.preventDefault(),(e.shiftKey?$h:Qh)(this.view)):e.keyCode==13&&e.target==this.replaceField&&(e.preventDefault(),ng(this.view))}update(e){for(let t of e.transactions)for(let e of t.effects)e.is(Wh)&&!e.value.eq(this.query)&&this.setQuery(e.value)}setQuery(e){this.query=e,this.searchField.value=e.search,this.replaceField.value=e.replace,this.caseField.checked=e.caseSensitive,this.reField.checked=e.regexp,this.wordField.checked=e.wholeWord}mount(){this.searchField.select()}get pos(){return 80}get top(){return this.view.state.facet(jh).top}};function fg(e,t){return e.state.phrase(t)}var pg=30,mg=/[\s\.,:;?!]/;function hg(e,{from:t,to:n}){let r=e.state.doc.lineAt(t),i=e.state.doc.lineAt(n).to,a=Math.max(r.from,t-pg),o=Math.min(i,n+pg),s=e.state.sliceDoc(a,o);if(a!=r.from){for(let e=0;e<pg;e++)if(!mg.test(s[e+1])&&mg.test(s[e])){s=s.slice(e);break}}if(o!=i){for(let e=s.length-1;e>s.length-pg;e--)if(!mg.test(s[e-1])&&mg.test(s[e])){s=s.slice(0,e);break}}return B.announce.of(`${e.state.phrase(`current match`)}. ${s} ${e.state.phrase(`on line`)} ${r.number}.`)}var gg=B.baseTheme({".cm-panel.cm-search":{padding:`2px 6px 4px`,position:`relative`,"& [name=close]":{position:`absolute`,top:`0`,right:`4px`,backgroundColor:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0},"& input, & button, & label":{margin:`.2em .6em .2em 0`},"& input[type=checkbox]":{marginRight:`.2em`},"& label":{fontSize:`80%`,whiteSpace:`pre`}},"&light .cm-searchMatch":{backgroundColor:`#ffff0054`},"&dark .cm-searchMatch":{backgroundColor:`#00ffff8a`},"&light .cm-searchMatch-selected":{backgroundColor:`#ff6a0054`},"&dark .cm-searchMatch-selected":{backgroundColor:`#ff00ff8a`}}),_g=[Kh,at.low(Xh),gg],vg=class{constructor(e,t,n,r){this.state=e,this.pos=t,this.explicit=n,this.view=r,this.abortListeners=[],this.abortOnDocChange=!1}tokenBefore(e){let t=K(this.state).resolveInner(this.pos,-1);for(;t&&e.indexOf(t.name)<0;)t=t.parent;return t?{from:t.from,to:this.pos,text:this.state.sliceDoc(t.from,this.pos),type:t.type}:null}matchBefore(e){let t=this.state.doc.lineAt(this.pos),n=Math.max(t.from,this.pos-250),r=t.text.slice(n-t.from,this.pos-t.from),i=r.search(wg(e,!1));return i<0?null:{from:n+i,to:this.pos,text:r.slice(i)}}get aborted(){return this.abortListeners==null}addEventListener(e,t,n){e==`abort`&&this.abortListeners&&(this.abortListeners.push(t),n&&n.onDocChange&&(this.abortOnDocChange=!0))}};function yg(e){let t=Object.keys(e).join(``),n=/\w/.test(t);return n&&(t=t.replace(/\w/g,``)),`[${n?`\\w`:``}${t.replace(/[^\w\s]/g,`\\$&`)}]`}function bg(e){let t=Object.create(null),n=Object.create(null);for(let{label:r}of e){t[r[0]]=!0;for(let e=1;e<r.length;e++)n[r[e]]=!0}let r=yg(t)+yg(n)+`*$`;return[RegExp(`^`+r),new RegExp(r)]}function xg(e){let t=e.map(e=>typeof e==`string`?{label:e}:e),[n,r]=t.every(e=>/^\w+$/.test(e.label))?[/\w*$/,/\w+$/]:bg(t);return e=>{let i=e.matchBefore(r);return i||e.explicit?{from:i?i.from:e.pos,options:t,validFor:n}:null}}var Sg=class{constructor(e,t,n,r){this.completion=e,this.source=t,this.match=n,this.score=r}};function Cg(e){return e.selection.main.from}function wg(e,t){let{source:n}=e,r=t&&n[0]!=`^`,i=n[n.length-1]!=`$`;return!r&&!i?e:RegExp(`${r?`^`:``}(?:${n})${i?`$`:``}`,e.flags??(e.ignoreCase?`i`:``))}var Tg=bt.define();function Eg(e,t,n,r){let{main:i}=e.selection,a=n-i.from,o=r-i.from;return{...e.changeByRange(s=>{if(s!=i&&n!=r&&e.sliceDoc(s.from+a,s.from+o)!=e.sliceDoc(n,r))return{range:s};let c=e.toText(t);return{changes:{from:s.from+a,to:r==i.from?s.to:s.from+o,insert:c},range:w.cursor(s.from+a+c.length)}}),scrollIntoView:!0,userEvent:`input.complete`}}var Dg=new WeakMap;function Og(e){if(!Array.isArray(e))return e;let t=Dg.get(e);return t||Dg.set(e,t=xg(e)),t}var kg=E.define(),Ag=E.define(),jg=class{constructor(e){this.pattern=e,this.chars=[],this.folded=[],this.any=[],this.precise=[],this.byWord=[],this.score=0,this.matched=[];for(let t=0;t<e.length;){let n=Fe(e,t),r=Le(n);this.chars.push(n);let i=e.slice(t,t+r),a=i.toUpperCase();this.folded.push(Fe(a==i?i.toLowerCase():a,0)),t+=r}this.astral=e.length!=this.chars.length}ret(e,t){return this.score=e,this.matched=t,this}match(e){if(this.pattern.length==0)return this.ret(-100,[]);if(e.length<this.pattern.length)return null;let{chars:t,folded:n,any:r,precise:i,byWord:a}=this;if(t.length==1){let r=Fe(e,0),i=Le(r),a=i==e.length?0:-100;if(r!=t[0]){if(r==n[0])a+=-200;else return null}return this.ret(a,[0,i])}let o=e.indexOf(this.pattern);if(o==0)return this.ret(e.length==this.pattern.length?0:-100,[0,this.pattern.length]);let s=t.length,c=0;if(o<0){for(let i=0,a=Math.min(e.length,200);i<a&&c<s;){let a=Fe(e,i);(a==t[c]||a==n[c])&&(r[c++]=i),i+=Le(a)}if(c<s)return null}let l=0,u=0,d=!1,f=0,p=-1,m=-1,h=/[a-z]/.test(e),g=!0;for(let r=0,c=Math.min(e.length,200),_=0;r<c&&u<s;){let c=Fe(e,r);o<0&&(l<s&&c==t[l]&&(i[l++]=r),f<s&&(c==t[f]||c==n[f]?(f==0&&(p=r),m=r+1,f++):f=0));let v,y=c<255?c>=48&&c<=57||c>=97&&c<=122?2:+(c>=65&&c<=90):(v=Ie(c))==v.toLowerCase()?v==v.toUpperCase()?0:2:1;(!r||y==1&&h||_==0&&y!=0)&&(t[u]==c||n[u]==c&&(d=!0)?a[u++]=r:a.length&&(g=!1)),_=y,r+=Le(c)}return u==s&&a[0]==0&&g?this.result(-100+(d?-200:0),a,e):f==s&&p==0?this.ret(-200-e.length+(m==e.length?0:-100),[0,m]):o>-1?this.ret(-700-e.length,[o,o+this.pattern.length]):f==s?this.ret(-900-e.length,[p,m]):u==s?this.result(-100+(d?-200:0)+-700+(g?0:-1100),a,e):t.length==2?null:this.result((r[0]?-700:0)+-200+-1100,r,e)}result(e,t,n){let r=[],i=0;for(let e of t){let t=e+(this.astral?Le(Fe(n,e)):1);i&&r[i-1]==e?r[i-1]=t:(r[i++]=e,r[i++]=t)}return this.ret(e-n.length,r)}},Mg=class{constructor(e){this.pattern=e,this.matched=[],this.score=0,this.folded=e.toLowerCase()}match(e){if(e.length<this.pattern.length)return null;let t=e.slice(0,this.pattern.length),n=t==this.pattern?0:t.toLowerCase()==this.folded?-200:null;return n==null?null:(this.matched=[0,t.length],this.score=n+(e.length==this.pattern.length?0:-100),this)}},q=T.define({combine(e){return It(e,{activateOnTyping:!0,activateOnCompletion:()=>!1,activateOnTypingDelay:100,selectOnOpen:!0,override:null,closeOnBlur:!0,maxRenderedOptions:100,defaultKeymap:!0,tooltipClass:()=>``,optionClass:()=>``,aboveCursor:!1,icons:!0,addToOptions:[],positionInfo:Pg,filterStrict:!1,compareCompletions:(e,t)=>(e.sortText||e.label).localeCompare(t.sortText||t.label),interactionDelay:75,updateSyncTime:100},{defaultKeymap:(e,t)=>e&&t,closeOnBlur:(e,t)=>e&&t,icons:(e,t)=>e&&t,tooltipClass:(e,t)=>n=>Ng(e(n),t(n)),optionClass:(e,t)=>n=>Ng(e(n),t(n)),addToOptions:(e,t)=>e.concat(t),filterStrict:(e,t)=>e||t})}});function Ng(e,t){return e?t?e+` `+t:e:t}function Pg(e,t,n,r,i,a){let o=e.textDirection==F.RTL,s=o,c=!1,l=`top`,u,d,f=t.left-i.left,p=i.right-t.right,m=r.right-r.left,h=r.bottom-r.top;if(s&&f<Math.min(m,p)?s=!1:!s&&p<Math.min(m,f)&&(s=!0),m<=(s?f:p))u=Math.max(i.top,Math.min(n.top,i.bottom-h))-t.top,d=Math.min(400,s?f:p);else{c=!0,d=Math.min(400,(o?t.right:i.right-t.left)-30);let e=i.bottom-t.bottom;e>=h||e>t.top?u=n.bottom-t.top:(l=`bottom`,u=t.bottom-n.top)}let g=(t.bottom-t.top)/a.offsetHeight,_=(t.right-t.left)/a.offsetWidth;return{style:`${l}: ${u/g}px; max-width: ${d/_}px`,class:`cm-completionInfo-`+(c?o?`left-narrow`:`right-narrow`:s?`left`:`right`)}}var Fg=E.define();function Ig(e){let t=e.addToOptions.slice();return e.icons&&t.push({render(e){let t=document.createElement(`div`);return t.classList.add(`cm-completionIcon`),e.type&&t.classList.add(...e.type.split(/\s+/g).map(e=>`cm-completionIcon-`+e)),t.setAttribute(`aria-hidden`,`true`),t},position:20}),t.push({render(e,t,n,r){let i=document.createElement(`span`);i.className=`cm-completionLabel`;let a=e.displayLabel||e.label,o=0;for(let e=0;e<r.length;){let t=r[e++],n=r[e++];t>o&&i.appendChild(document.createTextNode(a.slice(o,t)));let s=i.appendChild(document.createElement(`span`));s.appendChild(document.createTextNode(a.slice(t,n))),s.className=`cm-completionMatchedText`,o=n}return o<a.length&&i.appendChild(document.createTextNode(a.slice(o))),i},position:50},{render(e){if(!e.detail)return null;let t=document.createElement(`span`);return t.className=`cm-completionDetail`,t.textContent=e.detail,t},position:80}),t.sort((e,t)=>e.position-t.position).map(e=>e.render)}function Lg(e,t,n){if(e<=n)return{from:0,to:e};if(t<0&&(t=0),t<=e>>1){let e=Math.floor(t/n);return{from:e*n,to:(e+1)*n}}let r=Math.ceil((e-t)/n);return{from:e-r*n,to:e-(r-1)*n}}var Rg=class{constructor(e,t,n){this.view=e,this.stateField=t,this.applyCompletion=n,this.info=null,this.infoDestroy=null,this.placeInfoReq={read:()=>this.measureInfo(),write:e=>this.placeInfo(e),key:this},this.space=null,this.currentClass=``;let r=e.state.field(t),{options:i,selected:a}=r.open,o=e.state.facet(q);this.optionContent=Ig(o),this.optionClass=o.optionClass,this.tooltipClass=o.tooltipClass,this.range=Lg(i.length,a,o.maxRenderedOptions),this.dom=document.createElement(`div`),this.dom.className=`cm-tooltip-autocomplete`,this.updateTooltipClass(e.state),this.dom.addEventListener(`mousedown`,n=>{let{options:r}=e.state.field(t).open;for(let t=n.target,i;t&&t!=this.dom;t=t.parentNode)if(t.nodeName==`LI`&&(i=/-(\d+)$/.exec(t.id))&&+i[1]<r.length){this.applyCompletion(e,r[+i[1]]),n.preventDefault();return}if(n.target==this.list){let t=this.list.classList.contains(`cm-completionListIncompleteTop`)&&n.clientY<this.list.firstChild.getBoundingClientRect().top?this.range.from-1:this.list.classList.contains(`cm-completionListIncompleteBottom`)&&n.clientY>this.list.lastChild.getBoundingClientRect().bottom?this.range.to:null;t!=null&&(e.dispatch({effects:Fg.of(t)}),n.preventDefault())}}),this.dom.addEventListener(`focusout`,t=>{let n=e.state.field(this.stateField,!1);n&&n.tooltip&&e.state.facet(q).closeOnBlur&&t.relatedTarget!=e.contentDOM&&e.dispatch({effects:Ag.of(null)})}),this.showOptions(i,r.id)}mount(){this.updateSel()}showOptions(e,t){this.list&&this.list.remove(),this.list=this.dom.appendChild(this.createListBox(e,t,this.range)),this.list.addEventListener(`scroll`,()=>{this.info&&this.view.requestMeasure(this.placeInfoReq)})}update(e){let t=e.state.field(this.stateField),n=e.startState.field(this.stateField);if(this.updateTooltipClass(e.state),t!=n){let{options:r,selected:i,disabled:a}=t.open;(!n.open||n.open.options!=r)&&(this.range=Lg(r.length,i,e.state.facet(q).maxRenderedOptions),this.showOptions(r,t.id)),this.updateSel(),a!=n.open?.disabled&&this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`,!!a)}}updateTooltipClass(e){let t=this.tooltipClass(e);if(t!=this.currentClass){for(let e of this.currentClass.split(` `))e&&this.dom.classList.remove(e);for(let e of t.split(` `))e&&this.dom.classList.add(e);this.currentClass=t}}positioned(e){this.space=e,this.info&&this.view.requestMeasure(this.placeInfoReq)}updateSel(){let e=this.view.state.field(this.stateField),t=e.open;(t.selected>-1&&t.selected<this.range.from||t.selected>=this.range.to)&&(this.range=Lg(t.options.length,t.selected,this.view.state.facet(q).maxRenderedOptions),this.showOptions(t.options,e.id));let n=this.updateSelectedOption(t.selected);if(n){this.destroyInfo();let{completion:r}=t.options[t.selected],{info:i}=r;if(!i)return;let a=typeof i==`string`?document.createTextNode(i):i(r);if(!a)return;`then`in a?a.then(t=>{t&&this.view.state.field(this.stateField,!1)==e&&this.addInfoPane(t,r)}).catch(e=>ti(this.view.state,e,`completion info`)):(this.addInfoPane(a,r),n.setAttribute(`aria-describedby`,this.info.id))}}addInfoPane(e,t){this.destroyInfo();let n=this.info=document.createElement(`div`);if(n.className=`cm-tooltip cm-completionInfo`,n.id=`cm-completionInfo-`+Math.floor(Math.random()*65535).toString(16),e.nodeType!=null)n.appendChild(e),this.infoDestroy=null;else{let{dom:t,destroy:r}=e;n.appendChild(t),this.infoDestroy=r||null}this.dom.appendChild(n),this.view.requestMeasure(this.placeInfoReq)}updateSelectedOption(e){let t=null;for(let n=this.list.firstChild,r=this.range.from;n;n=n.nextSibling,r++)n.nodeName!=`LI`||!n.id?r--:r==e?n.hasAttribute(`aria-selected`)||(n.setAttribute(`aria-selected`,`true`),t=n):n.hasAttribute(`aria-selected`)&&(n.removeAttribute(`aria-selected`),n.removeAttribute(`aria-describedby`));return t&&Bg(this.list,t),t}measureInfo(){let e=this.dom.querySelector(`[aria-selected]`);if(!e||!this.info)return null;let t=this.dom.getBoundingClientRect(),n=this.info.getBoundingClientRect(),r=e.getBoundingClientRect(),i=this.space;if(!i){let e=this.dom.ownerDocument.documentElement;i={left:0,top:0,right:e.clientWidth,bottom:e.clientHeight}}return r.top>Math.min(i.bottom,t.bottom)-10||r.bottom<Math.max(i.top,t.top)+10?null:this.view.state.facet(q).positionInfo(this.view,t,r,n,i,this.dom)}placeInfo(e){this.info&&(e?(e.style&&(this.info.style.cssText=e.style),this.info.className=`cm-tooltip cm-completionInfo `+(e.class||``)):this.info.style.cssText=`top: -1e6px`)}createListBox(e,t,n){let r=document.createElement(`ul`);r.id=t,r.setAttribute(`role`,`listbox`),r.setAttribute(`aria-expanded`,`true`),r.setAttribute(`aria-label`,this.view.state.phrase(`Completions`)),r.addEventListener(`mousedown`,e=>{e.target==r&&e.preventDefault()});let i=null;for(let a=n.from;a<n.to;a++){let{completion:o,match:s}=e[a],{section:c}=o;if(c){let e=typeof c==`string`?c:c.name;if(e!=i&&(a>n.from||n.from==0)){if(i=e,typeof c!=`string`&&c.header)r.appendChild(c.header(c));else{let t=r.appendChild(document.createElement(`completion-section`));t.textContent=e}}}let l=r.appendChild(document.createElement(`li`));l.id=t+`-`+a,l.setAttribute(`role`,`option`);let u=this.optionClass(o);u&&(l.className=u);for(let e of this.optionContent){let t=e(o,this.view.state,this.view,s);t&&l.appendChild(t)}}return n.from&&r.classList.add(`cm-completionListIncompleteTop`),n.to<e.length&&r.classList.add(`cm-completionListIncompleteBottom`),r}destroyInfo(){this.info&&(this.infoDestroy&&this.infoDestroy(),this.info.remove(),this.info=null)}destroy(){this.destroyInfo()}};function zg(e,t){return n=>new Rg(n,e,t)}function Bg(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect(),i=n.height/e.offsetHeight;r.top<n.top?e.scrollTop-=(n.top-r.top)/i:r.bottom>n.bottom&&(e.scrollTop+=(r.bottom-n.bottom)/i)}function Vg(e){return(e.boost||0)*100+(e.apply?10:0)+(e.info?5:0)+ +!!e.type}function Hg(e,t){let n=[],r=null,i=null,a=e=>{n.push(e);let{section:t}=e.completion;if(t){r||(r=[]);let e=typeof t==`string`?t:t.name;r.some(t=>t.name==e)||r.push(typeof t==`string`?{name:e}:t)}},o=t.facet(q);for(let r of e)if(r.hasResult()){let e=r.result.getMatch;if(r.result.filter===!1)for(let t of r.result.options)a(new Sg(t,r.source,e?e(t):[],1e9-n.length));else{let n=t.sliceDoc(r.from,r.to),s,c=o.filterStrict?new Mg(n):new jg(n);for(let t of r.result.options)if(s=c.match(t.label)){let n=t.displayLabel?e?e(t,s.matched):[]:s.matched,o=s.score+(t.boost||0);if(a(new Sg(t,r.source,n,o)),typeof t.section==`object`&&t.section.rank===`dynamic`){let{name:e}=t.section;i||(i=Object.create(null)),i[e]=Math.max(o,i[e]||-1e9)}}}}if(r){let e=Object.create(null),t=0,a=(e,t)=>(e.rank===`dynamic`&&t.rank===`dynamic`?i[t.name]-i[e.name]:0)||(typeof e.rank==`number`?e.rank:1e9)-(typeof t.rank==`number`?t.rank:1e9)||(e.name<t.name?-1:1);for(let n of r.sort(a))t-=1e5,e[n.name]=t;for(let t of n){let{section:n}=t.completion;n&&(t.score+=e[typeof n==`string`?n:n.name])}}let s=[],c=null,l=o.compareCompletions;for(let e of n.sort((e,t)=>t.score-e.score||l(e.completion,t.completion))){let t=e.completion;!c||c.label!=t.label||c.detail!=t.detail||c.type!=null&&t.type!=null&&c.type!=t.type||c.apply!=t.apply||c.boost!=t.boost?s.push(e):Vg(e.completion)>Vg(c)&&(s[s.length-1]=e),c=e.completion}return s}var Ug=class e{constructor(e,t,n,r,i,a){this.options=e,this.attrs=t,this.tooltip=n,this.timestamp=r,this.selected=i,this.disabled=a}setSelected(t,n){return t==this.selected||t>=this.options.length?this:new e(this.options,Jg(n,t),this.tooltip,this.timestamp,t,this.disabled)}static build(t,n,r,i,a,o){if(i&&!o&&t.some(e=>e.isPending))return i.setDisabled();let s=Hg(t,n);if(!s.length)return i&&t.some(e=>e.isPending)?i.setDisabled():null;let c=n.facet(q).selectOnOpen?0:-1;if(i&&i.selected!=c&&i.selected!=-1){let e=i.options[i.selected].completion;for(let t=0;t<s.length;t++)if(s[t].completion==e){c=t;break}}return new e(s,Jg(r,c),{pos:t.reduce((e,t)=>t.hasResult()?Math.min(e,t.from):e,1e8),create:r_,above:a.aboveCursor},i?i.timestamp:Date.now(),c,!1)}map(t){return new e(this.options,this.attrs,{...this.tooltip,pos:t.mapPos(this.tooltip.pos)},this.timestamp,this.selected,this.disabled)}setDisabled(){return new e(this.options,this.attrs,this.tooltip,this.timestamp,this.selected,!0)}},Wg=class e{constructor(e,t,n){this.active=e,this.id=t,this.open=n}static start(){return new e(Yg,`cm-ac-`+Math.floor(Math.random()*2e6).toString(36),null)}update(t){let{state:n}=t,r=n.facet(q),i=(r.override||n.languageDataAt(`autocomplete`,Cg(n)).map(Og)).map(e=>(this.active.find(t=>t.source==e)||new Zg(e,+!!this.active.some(e=>e.state!=0))).update(t,r));i.length==this.active.length&&i.every((e,t)=>e==this.active[t])&&(i=this.active);let a=this.open,o=t.effects.some(e=>e.is(e_));a&&t.docChanged&&(a=a.map(t.changes)),t.selection||i.some(e=>e.hasResult()&&t.changes.touchesRange(e.from,e.to))||!Gg(i,this.active)||o?a=Ug.build(i,n,this.id,a,r,o):a&&a.disabled&&!i.some(e=>e.isPending)&&(a=null),!a&&i.every(e=>!e.isPending)&&i.some(e=>e.hasResult())&&(i=i.map(e=>e.hasResult()?new Zg(e.source,0):e));for(let e of t.effects)e.is(Fg)&&(a=a&&a.setSelected(e.value,this.id));return i==this.active&&a==this.open?this:new e(i,this.id,a)}get tooltip(){return this.open?this.open.tooltip:null}get attrs(){return this.open?this.open.attrs:this.active.length?Kg:qg}};function Gg(e,t){if(e==t)return!0;for(let n=0,r=0;;){for(;n<e.length&&!e[n].hasResult();)n++;for(;r<t.length&&!t[r].hasResult();)r++;let i=n==e.length,a=r==t.length;if(i||a)return i==a;if(e[n++].result!=t[r++].result)return!1}}var Kg={"aria-autocomplete":`list`},qg={};function Jg(e,t){let n={"aria-autocomplete":`list`,"aria-haspopup":`listbox`,"aria-controls":e};return t>-1&&(n[`aria-activedescendant`]=e+`-`+t),n}var Yg=[];function Xg(e,t){if(e.isUserEvent(`input.complete`)){let n=e.annotation(Tg);if(n&&t.activateOnCompletion(n))return 12}let n=e.isUserEvent(`input.type`);return n&&t.activateOnTyping?5:n?1:e.isUserEvent(`delete.backward`)?2:e.selection?8:e.docChanged?16:0}var Zg=class e{constructor(e,t,n=!1){this.source=e,this.state=t,this.explicit=n}hasResult(){return!1}get isPending(){return this.state==1}update(t,n){let r=Xg(t,n),i=this;(r&8||r&16&&this.touches(t))&&(i=new e(i.source,0)),r&4&&i.state==0&&(i=new e(this.source,1)),i=i.updateFor(t,r);for(let n of t.effects)if(n.is(kg))i=new e(i.source,1,n.value);else if(n.is(Ag))i=new e(i.source,0);else if(n.is(e_))for(let e of n.value)e.source==i.source&&(i=e);return i}updateFor(e,t){return this.map(e.changes)}map(e){return this}touches(e){return e.changes.touchesRange(Cg(e.state))}},Qg=class e extends Zg{constructor(e,t,n,r,i,a){super(e,3,t),this.limit=n,this.result=r,this.from=i,this.to=a}hasResult(){return!0}updateFor(t,n){if(!(n&3))return this.map(t.changes);let r=this.result;r.map&&!t.changes.empty&&(r=r.map(r,t.changes));let i=t.changes.mapPos(this.from),a=t.changes.mapPos(this.to,1),o=Cg(t.state);if(o>a||!r||n&2&&(Cg(t.startState)==this.from||o<this.limit))return new Zg(this.source,n&4?1:0);let s=t.changes.mapPos(this.limit);return $g(r.validFor,t.state,i,a)?new e(this.source,this.explicit,s,r,i,a):r.update&&(r=r.update(r,i,a,new vg(t.state,o,!1)))?new e(this.source,this.explicit,s,r,r.from,r.to??Cg(t.state)):new Zg(this.source,1,this.explicit)}map(t){if(t.empty)return this;let n=this.result.map?this.result.map(this.result,t):this.result;return n?new e(this.source,this.explicit,t.mapPos(this.limit),n,t.mapPos(this.from),t.mapPos(this.to,1)):new Zg(this.source,0)}touches(e){return e.changes.touchesRange(this.from,this.to)}};function $g(e,t,n,r){if(!e)return!1;let i=t.sliceDoc(n,r);return typeof e==`function`?e(i,n,r,t):wg(e,!0).test(i)}var e_=E.define({map(e,t){return e.map(e=>e.map(t))}}),t_=nt.define({create(){return Wg.start()},update(e,t){return e.update(t)},provide:e=>[Pc.from(e,e=>e.tooltip),B.contentAttributes.from(e,e=>e.attrs)]});function n_(e,t){let n=t.completion.apply||t.completion.label,r=e.state.field(t_).active.find(e=>e.source==t.source);return r instanceof Qg&&(typeof n==`string`?e.dispatch({...Eg(e.state,n,r.from,r.to),annotations:Tg.of(t.completion)}):n(e,t.completion,r.from,r.to),!0)}var r_=zg(t_,n_);function i_(e,t=`option`){return n=>{let r=n.state.field(t_,!1);if(!r||!r.open||r.open.disabled||Date.now()-r.open.timestamp<n.state.facet(q).interactionDelay)return!1;let i=1,a;t==`page`&&(a=Gc(n,r.open.tooltip))&&(i=Math.max(2,Math.floor(a.dom.offsetHeight/a.dom.querySelector(`li`).offsetHeight)-1));let{length:o}=r.open.options,s=r.open.selected>-1?r.open.selected+i*(e?1:-1):e?0:o-1;return s<0?s=t==`page`?0:o-1:s>=o&&(s=t==`page`?o-1:0),n.dispatch({effects:Fg.of(s)}),!0}}var a_=e=>{let t=e.state.field(t_,!1);return e.state.readOnly||!t||!t.open||t.open.selected<0||t.open.disabled||Date.now()-t.open.timestamp<e.state.facet(q).interactionDelay?!1:n_(e,t.open.options[t.open.selected])},o_=e=>e.state.field(t_,!1)?(e.dispatch({effects:kg.of(!0)}),!0):!1,s_=e=>{let t=e.state.field(t_,!1);return!t||!t.active.some(e=>e.state!=0)?!1:(e.dispatch({effects:Ag.of(null)}),!0)},c_=class{constructor(e,t){this.active=e,this.context=t,this.time=Date.now(),this.updates=[],this.done=void 0}},l_=50,u_=1e3,d_=L.fromClass(class{constructor(e){this.view=e,this.debounceUpdate=-1,this.running=[],this.debounceAccept=-1,this.pendingStart=!1,this.composing=0;for(let t of e.state.field(t_).active)t.isPending&&this.startQuery(t)}update(e){let t=e.state.field(t_),n=e.state.facet(q);if(!e.selectionSet&&!e.docChanged&&e.startState.field(t_)==t)return;let r=e.transactions.some(e=>{let t=Xg(e,n);return t&8||(e.selection||e.docChanged)&&!(t&3)});for(let t=0;t<this.running.length;t++){let n=this.running[t];if(r||n.context.abortOnDocChange&&e.docChanged||n.updates.length+e.transactions.length>l_&&Date.now()-n.time>u_){for(let e of n.context.abortListeners)try{e()}catch(e){ti(this.view.state,e)}n.context.abortListeners=null,this.running.splice(t--,1)}else n.updates.push(...e.transactions)}this.debounceUpdate>-1&&clearTimeout(this.debounceUpdate),e.transactions.some(e=>e.effects.some(e=>e.is(kg)))&&(this.pendingStart=!0);let i=this.pendingStart?50:n.activateOnTypingDelay;if(this.debounceUpdate=t.active.some(e=>e.isPending&&!this.running.some(t=>t.active.source==e.source))?setTimeout(()=>this.startUpdate(),i):-1,this.composing!=0)for(let t of e.transactions)t.isUserEvent(`input.type`)?this.composing=2:this.composing==2&&t.selection&&(this.composing=3)}startUpdate(){this.debounceUpdate=-1,this.pendingStart=!1;let{state:e}=this.view,t=e.field(t_);for(let e of t.active)e.isPending&&!this.running.some(t=>t.active.source==e.source)&&this.startQuery(e);this.running.length&&t.open&&t.open.disabled&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(q).updateSyncTime))}startQuery(e){let{state:t}=this.view,n=new vg(t,Cg(t),e.explicit,this.view),r=new c_(e,n);this.running.push(r),Promise.resolve(e.source(n)).then(e=>{r.context.aborted||(r.done=e||null,this.scheduleAccept())},e=>{this.view.dispatch({effects:Ag.of(null)}),ti(this.view.state,e)})}scheduleAccept(){this.running.every(e=>e.done!==void 0)?this.accept():this.debounceAccept<0&&(this.debounceAccept=setTimeout(()=>this.accept(),this.view.state.facet(q).updateSyncTime))}accept(){this.debounceAccept>-1&&clearTimeout(this.debounceAccept),this.debounceAccept=-1;let e=[],t=this.view.state.facet(q),n=this.view.state.field(t_);for(let r=0;r<this.running.length;r++){let i=this.running[r];if(i.done===void 0)continue;if(this.running.splice(r--,1),i.done){let n=Cg(i.updates.length?i.updates[0].startState:this.view.state),r=Math.min(n,i.done.from+ +!i.active.explicit),a=new Qg(i.active.source,i.active.explicit,r,i.done,i.done.from,i.done.to??n);for(let e of i.updates)a=a.update(e,t);if(a.hasResult()){e.push(a);continue}}let a=n.active.find(e=>e.source==i.active.source);if(a&&a.isPending){if(i.done==null){let n=new Zg(i.active.source,0);for(let e of i.updates)n=n.update(e,t);n.isPending||e.push(n)}else this.startQuery(a)}}(e.length||n.open&&n.open.disabled)&&this.view.dispatch({effects:e_.of(e)})}},{eventHandlers:{blur(e){let t=this.view.state.field(t_,!1);if(t&&t.tooltip&&this.view.state.facet(q).closeOnBlur){let n=t.open&&Gc(this.view,t.open.tooltip);(!n||!n.dom.contains(e.relatedTarget))&&setTimeout(()=>this.view.dispatch({effects:Ag.of(null)}),10)}},compositionstart(){this.composing=1},compositionend(){this.composing==3&&setTimeout(()=>this.view.dispatch({effects:kg.of(!1)}),20),this.composing=0}}}),f_=typeof navigator==`object`&&/Win/.test(navigator.platform),p_=at.highest(B.domEventHandlers({keydown(e,t){let n=t.state.field(t_,!1);if(!n||!n.open||n.open.disabled||n.open.selected<0||e.key.length>1||e.ctrlKey&&!(f_&&e.altKey)||e.metaKey)return!1;let r=n.open.options[n.open.selected],i=n.active.find(e=>e.source==r.source),a=r.completion.commitCharacters||i.result.commitCharacters;return a&&a.indexOf(e.key)>-1&&n_(t,r),!1}})),m_=B.baseTheme({".cm-tooltip.cm-tooltip-autocomplete":{"& > ul":{fontFamily:`monospace`,whiteSpace:`nowrap`,overflow:`hidden auto`,maxWidth_fallback:`700px`,maxWidth:`min(700px, 95vw)`,minWidth:`250px`,maxHeight:`10em`,height:`100%`,listStyle:`none`,margin:0,padding:0,"& > li, & > completion-section":{padding:`1px 3px`,lineHeight:1.2},"& > li":{overflowX:`hidden`,textOverflow:`ellipsis`,cursor:`pointer`},"& > completion-section":{display:`list-item`,borderBottom:`1px solid silver`,paddingLeft:`0.5em`,opacity:.7}}},"&light .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#17c`,color:`white`},"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#777`},"&dark .cm-tooltip-autocomplete ul li[aria-selected]":{background:`#347`,color:`white`},"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]":{background:`#444`},".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":{content:`"···"`,opacity:.5,display:`block`,textAlign:`center`,cursor:`pointer`},".cm-tooltip.cm-completionInfo":{position:`absolute`,padding:`3px 9px`,width:`max-content`,maxWidth:`400px`,boxSizing:`border-box`,whiteSpace:`pre-line`},".cm-completionInfo.cm-completionInfo-left":{right:`100%`},".cm-completionInfo.cm-completionInfo-right":{left:`100%`},".cm-completionInfo.cm-completionInfo-left-narrow":{right:`30px`},".cm-completionInfo.cm-completionInfo-right-narrow":{left:`30px`},"&light .cm-snippetField":{backgroundColor:`#00000022`},"&dark .cm-snippetField":{backgroundColor:`#ffffff22`},".cm-snippetFieldPosition":{verticalAlign:`text-top`,width:0,height:`1.15em`,display:`inline-block`,margin:`0 -0.7px -.7em`,borderLeft:`1.4px dotted #888`},".cm-completionMatchedText":{textDecoration:`underline`},".cm-completionDetail":{marginLeft:`0.5em`,fontStyle:`italic`},".cm-completionIcon":{fontSize:`90%`,width:`.8em`,display:`inline-block`,textAlign:`center`,paddingRight:`.6em`,opacity:`0.6`,boxSizing:`content-box`},".cm-completionIcon-function, .cm-completionIcon-method":{"&:after":{content:`'ƒ'`}},".cm-completionIcon-class":{"&:after":{content:`'○'`}},".cm-completionIcon-interface":{"&:after":{content:`'◌'`}},".cm-completionIcon-variable":{"&:after":{content:`'𝑥'`}},".cm-completionIcon-constant":{"&:after":{content:`'𝐶'`}},".cm-completionIcon-type":{"&:after":{content:`'𝑡'`}},".cm-completionIcon-enum":{"&:after":{content:`'∪'`}},".cm-completionIcon-property":{"&:after":{content:`'□'`}},".cm-completionIcon-keyword":{"&:after":{content:`'🔑︎'`}},".cm-completionIcon-namespace":{"&:after":{content:`'▢'`}},".cm-completionIcon-text":{"&:after":{content:`'abc'`,fontSize:`50%`,verticalAlign:`middle`}}}),h_={brackets:[`(`,`[`,`{`,`'`,`"`],before:`)]}:;>`,stringPrefixes:[]},g_=E.define({map(e,t){return t.mapPos(e,-1,ze.TrackAfter)??void 0}}),__=new class extends Lt{};__.startSide=1,__.endSide=-1;var v_=nt.define({create(){return k.empty},update(e,t){if(e=e.map(t.changes),t.selection){let n=t.state.doc.lineAt(t.selection.main.head);e=e.update({filter:e=>e>=n.from&&e<=n.to})}for(let n of t.effects)n.is(g_)&&(e=e.update({add:[__.range(n.value,n.value+1)]}));return e}});function y_(){return[w_,v_]}var b_=`()[]{}<>«»»«［］｛｝`;function x_(e){for(let t=0;t<16;t+=2)if(b_.charCodeAt(t)==e)return b_.charAt(t+1);return Ie(e<128?e:e+1)}function S_(e,t){return e.languageDataAt(`closeBrackets`,t)[0]||h_}var C_=typeof navigator==`object`&&/Android\b/.test(navigator.userAgent),w_=B.inputHandler.of((e,t,n,r)=>{if((C_?e.composing:e.compositionStarted)||e.state.readOnly)return!1;let i=e.state.selection.main;if(r.length>2||r.length==2&&Le(Fe(r,0))==1||t!=i.from||n!=i.to)return!1;let a=E_(e.state,r);return a?(e.dispatch(a),!0):!1}),T_=[{key:`Backspace`,run:({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=S_(e,e.selection.main.head).brackets||h_.brackets,r=null,i=e.changeByRange(t=>{if(t.empty){let r=k_(e.doc,t.head);for(let i of n)if(i==r&&O_(e.doc,t.head)==x_(Fe(i,0)))return{changes:{from:t.head-i.length,to:t.head+i.length},range:w.cursor(t.head-i.length)}}return{range:r=t}});return r||t(e.update(i,{scrollIntoView:!0,userEvent:`delete.backward`})),!r}}];function E_(e,t){let n=S_(e,e.selection.main.head),r=n.brackets||h_.brackets;for(let i of r){let a=x_(Fe(i,0));if(t==i)return a==i?M_(e,i,r.indexOf(i+i+i)>-1,n):A_(e,i,a,n.before||h_.before);if(t==a&&D_(e,e.selection.main.from))return j_(e,i,a)}return null}function D_(e,t){let n=!1;return e.field(v_).between(0,e.doc.length,e=>{e==t&&(n=!0)}),n}function O_(e,t){let n=e.sliceString(t,t+2);return n.slice(0,Le(Fe(n,0)))}function k_(e,t){let n=e.sliceString(t-2,t);return Le(Fe(n,0))==n.length?n:n.slice(1)}function A_(e,t,n,r){let i=null,a=e.changeByRange(a=>{if(!a.empty)return{changes:[{insert:t,from:a.from},{insert:n,from:a.to}],effects:g_.of(a.to+t.length),range:w.range(a.anchor+t.length,a.head+t.length)};let o=O_(e.doc,a.head);return!o||/\s/.test(o)||r.indexOf(o)>-1?{changes:{insert:t+n,from:a.head},effects:g_.of(a.head+t.length),range:w.cursor(a.head+t.length)}:{range:i=a}});return i?null:e.update(a,{scrollIntoView:!0,userEvent:`input.type`})}function j_(e,t,n){let r=null,i=e.changeByRange(t=>t.empty&&O_(e.doc,t.head)==n?{changes:{from:t.head,to:t.head+n.length,insert:n},range:w.cursor(t.head+n.length)}:r={range:t});return r?null:e.update(i,{scrollIntoView:!0,userEvent:`input.type`})}function M_(e,t,n,r){let i=r.stringPrefixes||h_.stringPrefixes,a=null,o=e.changeByRange(r=>{if(!r.empty)return{changes:[{insert:t,from:r.from},{insert:t,from:r.to}],effects:g_.of(r.to+t.length),range:w.range(r.anchor+t.length,r.head+t.length)};let o=r.head,s=O_(e.doc,o),c;if(s==t){if(N_(e,o))return{changes:{insert:t+t,from:o},effects:g_.of(o+t.length),range:w.cursor(o+t.length)};if(D_(e,o)){let r=n&&e.sliceDoc(o,o+t.length*3)==t+t+t?t+t+t:t;return{changes:{from:o,to:o+r.length,insert:r},range:w.cursor(o+r.length)}}}else if(n&&e.sliceDoc(o-2*t.length,o)==t+t&&(c=F_(e,o-2*t.length,i))>-1&&N_(e,c))return{changes:{insert:t+t+t+t,from:o},effects:g_.of(o+t.length),range:w.cursor(o+t.length)};else if(e.charCategorizer(o)(s)!=D.Word&&F_(e,o,i)>-1&&!P_(e,o,t,i))return{changes:{insert:t+t,from:o},effects:g_.of(o+t.length),range:w.cursor(o+t.length)};return{range:a=r}});return a?null:e.update(o,{scrollIntoView:!0,userEvent:`input.type`})}function N_(e,t){let n=K(e).resolveInner(t+1);return n.parent&&n.from==t}function P_(e,t,n,r){let i=K(e).resolveInner(t,-1),a=r.reduce((e,t)=>Math.max(e,t.length),0);for(let o=0;o<5;o++){let o=e.sliceDoc(i.from,Math.min(i.to,i.from+n.length+a)),s=o.indexOf(n);if(!s||s>-1&&r.indexOf(o.slice(0,s))>-1){let t=i.firstChild;for(;t&&t.from==i.from&&t.to-t.from>n.length+s;){if(e.sliceDoc(t.to-n.length,t.to)==n)return!1;t=t.firstChild}return!0}let c=i.to==t&&i.parent;if(!c)break;i=c}return!1}function F_(e,t,n){let r=e.charCategorizer(t);if(r(e.sliceDoc(t-1,t))!=D.Word)return t;for(let i of n){let n=t-i.length;if(e.sliceDoc(n,t)==i&&r(e.sliceDoc(n-1,n))!=D.Word)return n}return-1}function I_(e={}){return[p_,t_,q.of(e),d_,R_,m_]}var L_=[{key:`Ctrl-Space`,run:o_},{mac:"Alt-`",run:o_},{mac:`Alt-i`,run:o_},{key:`Escape`,run:s_},{key:`ArrowDown`,run:i_(!0)},{key:`ArrowUp`,run:i_(!1)},{key:`PageDown`,run:i_(!0,`page`)},{key:`PageUp`,run:i_(!1,`page`)},{key:`Enter`,run:a_}],R_=at.highest(bs.computeN([q],e=>e.facet(q).defaultKeymap?[L_]:[])),z_=class{constructor(e,t,n){this.from=e,this.to=t,this.diagnostic=n}},B_=class e{constructor(e,t,n){this.diagnostics=e,this.panel=t,this.selected=n}static init(t,n,r){let i=r.facet(ev).markerFilter;i&&(t=i(t,r));let a=t.slice().sort((e,t)=>e.from-t.from||e.to-t.to),o=new Wt,s=[],c=0,l=r.doc.iter(),u=0,d=r.doc.length;for(let e=0;;){let t=e==a.length?null:a[e];if(!t&&!s.length)break;let n,r;if(s.length)n=c,r=s.reduce((e,t)=>Math.min(e,t.to),t&&t.from>n?t.from:1e8);else{if(n=t.from,n>d)break;r=t.to,s.push(t),e++}for(;e<a.length;){let t=a[e];if(t.from==n&&(t.to>t.from||t.to==n))s.push(t),e++,r=Math.min(t.to,r);else{r=Math.min(t.from,r);break}}r=Math.min(r,d);let i=!1;if(s.some(e=>e.from==n&&(e.to==r||r==d))&&(i=n==r,!i&&r-n<10)){let e=n-(u+l.value.length);e>0&&(l.next(e),u=n);for(let e=n;;){if(e>=r){i=!0;break}if(!l.lineBreak&&u+l.value.length>e)break;e=u+l.value.length,u+=l.value.length,l.next()}}let f=dv(s);if(i)o.add(n,n,N.widget({widget:new iv(f),diagnostics:s.slice()}));else{let e=s.reduce((e,t)=>t.markClass?e+` `+t.markClass:e,``);o.add(n,r,N.mark({class:`cm-lintRange cm-lintRange-`+f+e,diagnostics:s.slice(),inclusiveEnd:s.some(e=>e.to>r)}))}if(c=r,c==d)break;for(let e=0;e<s.length;e++)s[e].to<=c&&s.splice(e--,1)}let f=o.finish();return new e(f,n,V_(f))}};function V_(e,t=null,n=0){let r=null;return e.between(n,1e9,(e,n,{spec:i})=>{if(!(t&&i.diagnostics.indexOf(t)<0)){if(!r)r=new z_(e,n,t||i.diagnostics[0]);else if(i.diagnostics.indexOf(r.diagnostic)<0)return!1;else r=new z_(r.from,n,r.diagnostic)}}),r}function H_(e,t){let n=t.pos,r=t.end||n,i=e.state.facet(ev).hideOn(e,n,r);if(i!=null)return i;let a=e.startState.doc.lineAt(t.pos);return!!(e.effects.some(e=>e.is(W_))||e.changes.touchesRange(a.from,Math.max(a.to,r)))}function U_(e,t){return e.field(q_,!1)?t:t.concat(E.appendConfig.of(pv))}var W_=E.define(),G_=E.define(),K_=E.define(),q_=nt.define({create(){return new B_(N.none,null,null)},update(e,t){if(t.docChanged&&e.diagnostics.size){let n=e.diagnostics.map(t.changes),r=null,i=e.panel;if(e.selected){let i=t.changes.mapPos(e.selected.from,1);r=V_(n,e.selected.diagnostic,i)||V_(n,null,i)}!n.size&&i&&t.state.facet(ev).autoPanel&&(i=null),e=new B_(n,i,r)}for(let n of t.effects)if(n.is(W_)){let r=t.state.facet(ev).autoPanel?n.value.length?ov.open:null:e.panel;e=B_.init(n.value,r,t.state)}else n.is(G_)?e=new B_(e.diagnostics,n.value?ov.open:null,e.selected):n.is(K_)&&(e=new B_(e.diagnostics,e.panel,n.value));return e},provide:e=>[Qc.from(e,e=>e.panel),B.decorations.from(e,e=>e.diagnostics)]}),J_=N.mark({class:`cm-lintRange cm-lintRange-active`});function Y_(e,t,n){let{diagnostics:r}=e.state.field(q_),i,a=-1,o=-1;r.between(t-+(n<0),t+ +(n>0),(e,r,{spec:s})=>{if(t>=e&&t<=r&&(e==r||(t>e||n>0)&&(t<r||n<0)))return i=s.diagnostics,a=e,o=r,!1});let s=e.state.facet(ev).tooltipFilter;return i&&s&&(i=s(i,e.state)),i?{pos:a,end:o,above:!0,create(){return{dom:X_(e,i)}}}:null}function X_(e,t){return A(`ul`,{class:`cm-tooltip-lint`},t.map(t=>rv(e,t,!1)))}var Z_=e=>{let t=e.state.field(q_,!1);(!t||!t.panel)&&e.dispatch({effects:U_(e.state,[G_.of(!0)])});let n=Jc(e,ov.open);return n&&n.dom.querySelector(`.cm-panel-lint ul`).focus(),!0},Q_=e=>{let t=e.state.field(q_,!1);return!t||!t.panel?!1:(e.dispatch({effects:G_.of(!1)}),!0)},$_=[{key:`Mod-Shift-m`,run:Z_,preventDefault:!0},{key:`F8`,run:e=>{let t=e.state.field(q_,!1);if(!t)return!1;let n=e.state.selection.main,r=V_(t.diagnostics,null,n.to+1);return!r&&(r=V_(t.diagnostics,null,0),!r||r.from==n.from&&r.to==n.to)?!1:(e.dispatch({selection:{anchor:r.from,head:r.to},scrollIntoView:!0}),Wc(e,r.from,1,{tooltip:fv,until:e=>e.docChanged||e.newSelection.main.head<r.from||e.newSelection.main.head>r.to}),!0)}}],ev=T.define({combine(e){return{sources:e.map(e=>e.source).filter(e=>e!=null),...It(e.map(e=>e.config),{delay:750,markerFilter:null,tooltipFilter:null,needsRefresh:null,hideOn:()=>null},{delay:Math.max,markerFilter:tv,tooltipFilter:tv,needsRefresh:(e,t)=>e?t?n=>e(n)||t(n):e:t,hideOn:(e,t)=>e?t?(n,r,i)=>e(n,r,i)||t(n,r,i):e:t,autoPanel:(e,t)=>e||t})}}});function tv(e,t){return e?t?(n,r)=>t(e(n,r),r):e:t}function nv(e){let t=[];if(e)actions:for(let{name:n}of e){for(let e=0;e<n.length;e++){let r=n[e];if(/[a-zA-Z]/.test(r)&&!t.some(e=>e.toLowerCase()==r.toLowerCase())){t.push(r);continue actions}}t.push(``)}return t}function rv(e,t,n){let r=n?nv(t.actions):[];return A(`li`,{class:`cm-diagnostic cm-diagnostic-`+t.severity},A(`span`,{class:`cm-diagnosticText`},t.renderMessage?t.renderMessage(e):t.message),t.actions?.map((n,i)=>{let a=!1,o=r=>{if(r.preventDefault(),a)return;a=!0;let i=V_(e.state.field(q_).diagnostics,t);i&&n.apply(e,i.from,i.to)},{name:s}=n,c=r[i]?s.indexOf(r[i]):-1,l=c<0?s:[s.slice(0,c),A(`u`,s.slice(c,c+1)),s.slice(c+1)];return A(`button`,{type:`button`,class:`cm-diagnosticAction`+(n.markClass?` `+n.markClass:``),onclick:o,onmousedown:o,"aria-label":` Action: ${s}${c<0?``:` (access key "${r[i]})"`}.`},l)}),t.source&&A(`div`,{class:`cm-diagnosticSource`},t.source))}var iv=class extends In{constructor(e){super(),this.sev=e}eq(e){return e.sev==this.sev}toDOM(){return A(`span`,{class:`cm-lintPoint cm-lintPoint-`+this.sev})}},av=class{constructor(e,t){this.diagnostic=t,this.id=`item_`+Math.floor(Math.random()*4294967295).toString(16),this.dom=rv(e,t,!0),this.dom.id=this.id,this.dom.setAttribute(`role`,`option`)}},ov=class e{constructor(e){this.view=e,this.items=[];let t=t=>{if(!(t.ctrlKey||t.altKey||t.metaKey)){if(t.keyCode==27)Q_(this.view),this.view.focus();else if(t.keyCode==38||t.keyCode==33)this.moveSelection((this.selectedIndex-1+this.items.length)%this.items.length);else if(t.keyCode==40||t.keyCode==34)this.moveSelection((this.selectedIndex+1)%this.items.length);else if(t.keyCode==36)this.moveSelection(0);else if(t.keyCode==35)this.moveSelection(this.items.length-1);else if(t.keyCode==13)this.view.focus();else if(t.keyCode>=65&&t.keyCode<=90&&this.selectedIndex>=0){let{diagnostic:n}=this.items[this.selectedIndex],r=nv(n.actions);for(let i=0;i<r.length;i++)if(r[i].toUpperCase().charCodeAt(0)==t.keyCode){let t=V_(this.view.state.field(q_).diagnostics,n);t&&n.actions[i].apply(e,t.from,t.to)}}else return;t.preventDefault()}},n=e=>{for(let t=0;t<this.items.length;t++)this.items[t].dom.contains(e.target)&&this.moveSelection(t)};this.list=A(`ul`,{tabIndex:0,role:`listbox`,"aria-label":this.view.state.phrase(`Diagnostics`),onkeydown:t,onclick:n}),this.dom=A(`div`,{class:`cm-panel-lint`},this.list,A(`button`,{type:`button`,name:`close`,"aria-label":this.view.state.phrase(`close`),onclick:()=>Q_(this.view)},`×`)),this.update()}get selectedIndex(){let e=this.view.state.field(q_).selected;if(!e)return-1;for(let t=0;t<this.items.length;t++)if(this.items[t].diagnostic==e.diagnostic)return t;return-1}update(){let{diagnostics:e,selected:t}=this.view.state.field(q_),n=0,r=!1,i=null,a=new Set;for(e.between(0,this.view.state.doc.length,(e,o,{spec:s})=>{for(let e of s.diagnostics){if(a.has(e))continue;a.add(e);let o=-1,s;for(let t=n;t<this.items.length;t++)if(this.items[t].diagnostic==e){o=t;break}o<0?(s=new av(this.view,e),this.items.splice(n,0,s),r=!0):(s=this.items[o],o>n&&(this.items.splice(n,o-n),r=!0)),t&&s.diagnostic==t.diagnostic?s.dom.hasAttribute(`aria-selected`)||(s.dom.setAttribute(`aria-selected`,`true`),i=s):s.dom.hasAttribute(`aria-selected`)&&s.dom.removeAttribute(`aria-selected`),n++}});n<this.items.length&&!(this.items.length==1&&this.items[0].diagnostic.from<0);)r=!0,this.items.pop();this.items.length==0&&(this.items.push(new av(this.view,{from:-1,to:-1,severity:`info`,message:this.view.state.phrase(`No diagnostics`)})),r=!0),i?(this.list.setAttribute(`aria-activedescendant`,i.id),this.view.requestMeasure({key:this,read:()=>({sel:i.dom.getBoundingClientRect(),panel:this.list.getBoundingClientRect()}),write:({sel:e,panel:t})=>{let n=t.height/this.list.offsetHeight;e.top<t.top?this.list.scrollTop-=(t.top-e.top)/n:e.bottom>t.bottom&&(this.list.scrollTop+=(e.bottom-t.bottom)/n)}})):this.selectedIndex<0&&this.list.removeAttribute(`aria-activedescendant`),r&&this.sync()}sync(){let e=this.list.firstChild;function t(){let t=e;e=t.nextSibling,t.remove()}for(let n of this.items)if(n.dom.parentNode==this.list){for(;e!=n.dom;)t();e=n.dom.nextSibling}else this.list.insertBefore(n.dom,e);for(;e;)t()}moveSelection(e){if(this.selectedIndex<0)return;let t=V_(this.view.state.field(q_).diagnostics,this.items[e].diagnostic);t&&this.view.dispatch({selection:{anchor:t.from,head:t.to},scrollIntoView:!0,effects:K_.of(t)})}static open(t){return new e(t)}};function sv(e,t=`viewBox="0 0 40 40"`){return`url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(e)}</svg>')`}function cv(e){return sv(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,`width="6" height="3"`)}var lv=B.baseTheme({".cm-diagnostic":{padding:`3px 6px 3px 8px`,marginLeft:`-1px`,display:`block`,whiteSpace:`pre-wrap`},".cm-diagnostic-error":{borderLeft:`5px solid #d11`},".cm-diagnostic-warning":{borderLeft:`5px solid orange`},".cm-diagnostic-info":{borderLeft:`5px solid #999`},".cm-diagnostic-hint":{borderLeft:`5px solid #66d`},".cm-diagnosticAction":{font:`inherit`,border:`none`,padding:`2px 4px`,backgroundColor:`#444`,color:`white`,borderRadius:`3px`,marginLeft:`8px`,cursor:`pointer`},".cm-diagnosticSource":{fontSize:`70%`,opacity:.7},".cm-lintRange":{backgroundPosition:`left bottom`,backgroundRepeat:`repeat-x`,paddingBottom:`0.7px`},".cm-lintRange-error":{backgroundImage:cv(`#f11`)},".cm-lintRange-warning":{backgroundImage:cv(`orange`)},".cm-lintRange-info":{backgroundImage:cv(`#999`)},".cm-lintRange-hint":{backgroundImage:cv(`#66d`)},".cm-lintRange-active":{backgroundColor:`#ffdd9980`},".cm-tooltip-lint":{padding:0,margin:0},".cm-lintPoint":{position:`relative`,"&:after":{content:`""`,position:`absolute`,bottom:0,left:`-2px`,borderLeft:`3px solid transparent`,borderRight:`3px solid transparent`,borderBottom:`4px solid #d11`}},".cm-lintPoint-warning":{"&:after":{borderBottomColor:`orange`}},".cm-lintPoint-info":{"&:after":{borderBottomColor:`#999`}},".cm-lintPoint-hint":{"&:after":{borderBottomColor:`#66d`}},".cm-panel.cm-panel-lint":{position:`relative`,"& ul":{maxHeight:`100px`,overflowY:`auto`,"& [aria-selected]":{backgroundColor:`#ddd`,"& u":{textDecoration:`underline`}},"&:focus [aria-selected]":{background_fallback:`#bdf`,backgroundColor:`Highlight`,color_fallback:`white`,color:`HighlightText`},"& u":{textDecoration:`none`},padding:0,margin:0},"& [name=close]":{position:`absolute`,top:`0`,right:`2px`,background:`inherit`,border:`none`,font:`inherit`,padding:0,margin:0}},"&dark .cm-lintRange-active":{backgroundColor:`#86714a80`},"&dark .cm-panel.cm-panel-lint ul":{"& [aria-selected]":{backgroundColor:`#2e343e`}}});function uv(e){return e==`error`?4:e==`warning`?3:e==`info`?2:1}function dv(e){let t=`hint`,n=1;for(let r of e){let e=uv(r.severity);e>n&&(n=e,t=r.severity)}return t}var fv=Uc(Y_,{hideOn:H_}),pv=[q_,B.decorations.compute([q_],e=>{let{selected:t,panel:n}=e.field(q_);return!t||!n||t.from==t.to?N.none:N.set([J_.range(t.from,t.to)])}),fv,lv],mv=[El(),Al(),ac(),$f(),Wd(),zs(),Ys(),O.allowMultipleSelections.of(!0),_d(),Xd($d,{fallback:!0}),uf(),y_(),I_(),bc(),Cc(),fc(),xh(),bs.of([...T_,...oh,...ug,...vp,...Fd,...L_,...$_])];function hv(e){return RegExp(`^(?:`+e.join(`|`)+`)`,`i`)}function gv(e){return RegExp(`^(?:`+e.join(`|`)+`)$`,`i`)}var _v=gv(`_G,_VERSION,assert,collectgarbage,dofile,error,getfenv,getmetatable,ipairs,load,loadfile,loadstring,module,next,pairs,pcall,print,rawequal,rawget,rawset,require,select,setfenv,setmetatable,tonumber,tostring,type,unpack,xpcall,coroutine.create,coroutine.resume,coroutine.running,coroutine.status,coroutine.wrap,coroutine.yield,debug.debug,debug.getfenv,debug.gethook,debug.getinfo,debug.getlocal,debug.getmetatable,debug.getregistry,debug.getupvalue,debug.setfenv,debug.sethook,debug.setlocal,debug.setmetatable,debug.setupvalue,debug.traceback,close,flush,lines,read,seek,setvbuf,write,io.close,io.flush,io.input,io.lines,io.open,io.output,io.popen,io.read,io.stderr,io.stdin,io.stdout,io.tmpfile,io.type,io.write,math.abs,math.acos,math.asin,math.atan,math.atan2,math.ceil,math.cos,math.cosh,math.deg,math.exp,math.floor,math.fmod,math.frexp,math.huge,math.ldexp,math.log,math.log10,math.max,math.min,math.modf,math.pi,math.pow,math.rad,math.random,math.randomseed,math.sin,math.sinh,math.sqrt,math.tan,math.tanh,os.clock,os.date,os.difftime,os.execute,os.exit,os.getenv,os.remove,os.rename,os.setlocale,os.time,os.tmpname,package.cpath,package.loaded,package.loaders,package.loadlib,package.path,package.preload,package.seeall,string.byte,string.char,string.dump,string.find,string.format,string.gmatch,string.gsub,string.len,string.lower,string.match,string.rep,string.reverse,string.sub,string.upper,table.concat,table.insert,table.maxn,table.remove,table.sort`.split(`,`)),vv=gv([`and`,`break`,`elseif`,`false`,`nil`,`not`,`or`,`return`,`true`,`function`,`end`,`if`,`then`,`else`,`do`,`while`,`repeat`,`until`,`for`,`in`,`local`]),yv=gv([`function`,`if`,`repeat`,`do`,`\\(`,`{`]),bv=gv([`end`,`until`,`\\)`,`}`]),xv=hv([`end`,`until`,`\\)`,`}`,`else`,`elseif`]);function Sv(e){for(var t=0;e.eat(`=`);)++t;return e.eat(`[`),t}function Cv(e,t){var n=e.next();return n==`-`&&e.eat(`-`)?e.eat(`[`)&&/[\[=]/.test(e.peek())?(t.cur=wv(Sv(e),`comment`))(e,t):(e.skipToEnd(),`comment`):n==`"`||n==`'`?(t.cur=Tv(n))(e,t):n==`[`&&/[\[=]/.test(e.peek())?(t.cur=wv(Sv(e),`string`))(e,t):/\d/.test(n)?(e.eatWhile(/[\w.%]/),`number`):/[\w_]/.test(n)?(e.eatWhile(/[\w\\\-_.]/),`variable`):null}function wv(e,t){return function(n,r){for(var i=null,a;(a=n.next())!=null;)if(i==null)a==`]`&&(i=0);else if(a==`=`)++i;else if(a==`]`&&i==e){r.cur=Cv;break}else i=null;return t}}function Tv(e){return function(t,n){for(var r=!1,i;(i=t.next())!=null&&(i!=e||r);)r=!r&&i==`\\`;return r||(n.cur=Cv),`string`}}var Ev={name:`lua`,startState:function(){return{basecol:0,indentDepth:0,cur:Cv}},token:function(e,t){if(e.eatSpace())return null;var n=t.cur(e,t),r=e.current();return n==`variable`&&(vv.test(r)?n=`keyword`:_v.test(r)&&(n=`builtin`)),n!=`comment`&&n!=`string`&&(yv.test(r)?++t.indentDepth:bv.test(r)&&--t.indentDepth),n},indent:function(e,t,n){var r=xv.test(t);return e.basecol+n.unit*(e.indentDepth-+!!r)},languageData:{indentOnInput:/^\s*(?:end|until|else|\)|\})$/,commentTokens:{line:`--`,block:{open:`--[[`,close:`]]--`}}}},Dv=`#e5c07b`,Ov=`#e06c75`,kv=`#56b6c2`,Av=`#ffffff`,jv=`#abb2bf`,Mv=`#7d8799`,Nv=`#61afef`,Pv=`#98c379`,Fv=`#d19a66`,Iv=`#c678dd`,Lv=`#21252b`,Rv=`#2c313a`,zv=`#282c34`,Bv=`#353a42`,Vv=`#3E4451`,Hv=`#528bff`,Uv=[B.theme({"&":{color:jv,backgroundColor:zv},".cm-content":{caretColor:Hv},".cm-cursor, .cm-dropCursor":{borderLeftColor:Hv},"&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":{backgroundColor:Vv},".cm-panels":{backgroundColor:Lv,color:jv},".cm-panels.cm-panels-top":{borderBottom:`2px solid black`},".cm-panels.cm-panels-bottom":{borderTop:`2px solid black`},".cm-searchMatch":{backgroundColor:`#72a1ff59`,outline:`1px solid #457dff`},".cm-searchMatch.cm-searchMatch-selected":{backgroundColor:`#6199ff2f`},".cm-activeLine":{backgroundColor:`#6699ff0b`},".cm-selectionMatch":{backgroundColor:`#aafe661a`},"&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket":{backgroundColor:`#bad0f847`},".cm-gutters":{backgroundColor:zv,color:Mv,border:`none`},".cm-activeLineGutter":{backgroundColor:Rv},".cm-foldPlaceholder":{backgroundColor:`transparent`,border:`none`,color:`#ddd`},".cm-tooltip":{border:`none`,backgroundColor:Bv},".cm-tooltip .cm-tooltip-arrow:before":{borderTopColor:`transparent`,borderBottomColor:`transparent`},".cm-tooltip .cm-tooltip-arrow:after":{borderTopColor:Bv,borderBottomColor:Bv},".cm-tooltip-autocomplete":{"& > ul > li[aria-selected]":{backgroundColor:Rv,color:jv}}},{dark:!0}),Xd(Kd.define([{tag:G.keyword,color:Iv},{tag:[G.name,G.deleted,G.character,G.propertyName,G.macroName],color:Ov},{tag:[G.function(G.variableName),G.labelName],color:Nv},{tag:[G.color,G.constant(G.name),G.standard(G.name)],color:Fv},{tag:[G.definition(G.name),G.separator],color:jv},{tag:[G.typeName,G.className,G.number,G.changed,G.annotation,G.modifier,G.self,G.namespace],color:Dv},{tag:[G.operator,G.operatorKeyword,G.url,G.escape,G.regexp,G.link,G.special(G.string)],color:kv},{tag:[G.meta,G.comment],color:Mv},{tag:G.strong,fontWeight:`bold`},{tag:G.emphasis,fontStyle:`italic`},{tag:G.strikethrough,textDecoration:`line-through`},{tag:G.link,color:Mv,textDecoration:`underline`},{tag:G.heading,fontWeight:`bold`,color:Ov},{tag:[G.atom,G.bool,G.special(G.variableName)],color:Fv},{tag:[G.processingInstruction,G.string,G.inserted],color:Pv},{tag:G.invalid,color:Av}]))],Wv=[[`General`,[[`print(...)`,`both`,`Shows values in the console.`],[`Citizen.CreateThread(fn) / CreateThread(fn)`,`both`,`Starts a background thread (simulated time).`],[`Wait(ms) / Citizen.Wait(ms)`,`both`,`Pauses the current thread. Wait(0) = next frame (~16 ms).`],[`SetTimeout(ms, fn)`,`both`,`Runs fn once after ms.`],[`GetGameTimer()`,`both`,`Simulated time in ms since the run started.`],[`IsDuplicityVersion()`,`both`,`true on the server side, false on the client.`],[`GetCurrentResourceName()`,`both`,`Always "my_first_resource" here.`],[`json.encode(t) / json.decode(s)`,`both`,`Table ↔ JSON text.`],[`vector3(x, y, z), vector4, vector2`,`both`,`Positions. #(a - b) is the distance.`],[`GetHashKey(name) / joaat(name)`,`both`,`Model name → hash number (real algorithm).`]]],[`Events & commands`,[[`RegisterNetEvent(name [, fn])`,`both`,`Allow an event from the network (and optionally handle it).`],[`AddEventHandler(name, fn)`,`both`,`Run fn when the event arrives.`],[`RemoveEventHandler(handle)`,`both`,`Stop listening.`],[`TriggerEvent(name, ...)`,`both`,`Local event on the same side. "chat:addMessage" shows a chat line.`],[`TriggerServerEvent(name, ...)`,`client`,`Client → server. source on the server = 1 (Tina).`],[`TriggerClientEvent(name, target, ...)`,`server`,`Server → client. target -1 = everyone.`],[`RegisterCommand(name, fn(source, args, raw), restricted)`,`both`,`Creates /name. Type commands in the console box after running.`],[`ExecuteCommand("name args")`,`both`,`Runs a command from code.`],[`IsPlayerAceAllowed(id, ace)`,`server`,`Tina (1) is an admin, others are not.`],[`source`,`both`,`Inside handlers: who sent the event / typed the command.`]]],[`Players & peds`,[[`PlayerId()`,`client`,`Your player index (0).`],[`GetPlayerServerId(PlayerId())`,`client`,`Your server ID (1).`],[`PlayerPedId()`,`client`,`Your ped handle (1001).`],[`GetPlayerName(id)`,`both`,`1 = Tina, 2 = Bob, 3 = Sneaky_Steve.`],[`GetPlayers()`,`server`,`List of IDs as STRINGS: {"1", "2", "3"}.`],[`GetPlayerPed(id)`,`both`,`A player's ped handle.`],[`GetPlayerIdentifiers(id) / GetPlayerIdentifierByType(id, "license")`,`server`,`Permanent IDs like license:...`],[`DropPlayer(id, reason)`,`server`,`Pretends to kick.`],[`GetEntityCoords(ent) / SetEntityCoords(ent, x, y, z)`,`both`,`Position of a ped/vehicle.`],[`GetEntityHealth / SetEntityHealth(ent, hp)`,`both / client`,`Health 100 (dead) to 200 (full).`],[`GetPedArmour / SetPedArmour(ped, n)`,`both`,`Armour 0 to 100.`],[`GetEntityHeading, SetEntityHeading, DoesEntityExist, IsEntityDead`,`both`,``],[`IsPedInAnyVehicle, GetVehiclePedIsIn`,`both`,`Always on foot here.`],[`GiveWeaponToPed, RemoveAllPedWeapons`,`both`,`Prints what would happen.`]]],[`Vehicles, models & input`,[[`RequestModel, HasModelLoaded, IsModelInCdimage, SetModelAsNoLongerNeeded`,`client`,`Models load instantly here.`],[`CreateVehicle(model, x, y, z, heading, isNet, mission)`,`both`,`Returns a new entity handle.`],[`SetPedIntoVehicle, DeleteEntity`,`both`,``],[`IsControlJustPressed(0, 38)`,`client`,`The practice player presses E (38) at ~1.2 s and ~3.5 s.`],[`DrawMarker(...)`,`client`,`Does nothing visible (counted).`],[`BeginTextCommandDisplayHelp / AddTextComponentSubstringPlayerName / EndTextCommandDisplayHelp`,`client`,`Shows [help box] text.`],[`BeginTextCommandThefeedPost / ... / EndTextCommandThefeedPostTicker`,`client`,`Shows a [notification].`]]],[`Storage (KVP)`,[[`SetResourceKvp(key, text) / GetResourceKvpString(key)`,`both`,`Kept in this browser between runs.`],[`SetResourceKvpInt / GetResourceKvpInt`,`both`,`Whole numbers (0 if missing).`],[`SetResourceKvpFloat / GetResourceKvpFloat`,`both`,`Decimals.`],[`DeleteResourceKvp(key)`,`both`,``]]],[`fxmanifest.lua (side: manifest)`,[[`fx_version, game, lua54, author, description, version`,`manifest`,`Recorded and printed.`],[`client_script(s), server_script(s), shared_script(s), files, dependencies`,`manifest`,``]]]],Gv=`Citizen.CreateThread,CreateThread,Wait,Citizen.Wait,SetTimeout,GetGameTimer,IsDuplicityVersion,GetCurrentResourceName,vector3,GetHashKey,RegisterNetEvent,AddEventHandler,RemoveEventHandler,TriggerEvent,TriggerServerEvent,TriggerClientEvent,RegisterCommand,ExecuteCommand,IsPlayerAceAllowed,PlayerId,GetPlayerServerId,PlayerPedId,GetPlayerName,GetPlayers,GetPlayerPed,GetPlayerIdentifiers,GetPlayerIdentifierByType,DropPlayer,GetEntityCoords,SetEntityCoords,GetEntityHealth,SetEntityHealth,GetPedArmour,SetPedArmour,GetEntityHeading,SetEntityHeading,DoesEntityExist,IsEntityDead,IsPedInAnyVehicle,GetVehiclePedIsIn,GiveWeaponToPed,RemoveAllPedWeapons,RequestModel,HasModelLoaded,IsModelInCdimage,SetModelAsNoLongerNeeded,CreateVehicle,SetPedIntoVehicle,DeleteEntity,IsControlJustPressed,DrawMarker,BeginTextCommandDisplayHelp,AddTextComponentSubstringPlayerName,EndTextCommandDisplayHelp,BeginTextCommandThefeedPost,EndTextCommandThefeedPostTicker,SetResourceKvp,GetResourceKvpString,SetResourceKvpInt,GetResourceKvpInt,SetResourceKvpFloat,GetResourceKvpFloat,DeleteResourceKvp,json.encode,json.decode`.split(`,`),Kv=E.define(),qv=N.line({class:`cm-errline`}),Jv=nt.define({create:()=>N.none,update(e,t){e=e.map(t.changes);for(let n of t.effects)if(n.is(Kv)){if(n.value==null)e=N.none;else{let r=Math.min(Math.max(1,n.value),t.state.doc.lines);e=N.set([qv.range(t.state.doc.line(r).from)])}}return t.docChanged&&(e=N.none),e},provide:e=>B.decorations.from(e)}),Yv=[...[`local`,`function`,`end`,`if`,`then`,`else`,`elseif`,`for`,`in`,`do`,`while`,`repeat`,`until`,`return`,`break`,`nil`,`true`,`false`,`and`,`or`,`not`].map(e=>({label:e,type:`keyword`})),...`print,type,tostring,tonumber,pairs,ipairs,pcall,error,assert,select,string.format,string.upper,string.lower,string.sub,string.find,string.gsub,string.rep,table.insert,table.remove,table.concat,table.sort,math.floor,math.ceil,math.max,math.min,math.random,math.abs,math.sqrt,json.encode,json.decode`.split(`,`).map(e=>({label:e,type:`function`})),...Gv.map(e=>({label:e,type:`function`}))];function Xv(e,{doc:t=``,onChange:n,onRun:r}={}){let i=new B({parent:e,state:O.create({doc:t,extensions:[mv,bs.of([sh,{key:`Mod-Enter`,run:()=>(r&&r(),!0)}]),bf.define(Ev),td.of(`  `),O.tabSize.of(2),Uv,Jv,I_({override:[xg(Yv)],activateOnTyping:!0}),B.lineWrapping,B.contentAttributes.of({autocapitalize:`off`,autocorrect:`off`,spellcheck:`false`}),B.updateListener.of(e=>{e.docChanged&&n&&n(e.state.doc.toString())})]})});return{view:i,get:()=>i.state.doc.toString(),set:e=>i.dispatch({changes:{from:0,to:i.state.doc.length,insert:e}}),markError:e=>i.dispatch({effects:Kv.of(e)}),insert(e){let t=i.state.selection.main;i.dispatch({changes:{from:t.from,to:t.to,insert:e},selection:{anchor:t.from+e.length}}),i.focus()},undo:()=>tp(i),redo:()=>np(i),focus:()=>i.focus(),destroy:()=>i.destroy()}}var Zv=bf.define(Ev);function Qv(e){e.querySelectorAll(`pre > code:not(.hl)`).forEach(e=>{let t=e.textContent,n=Zv.parser.parse(t),r=document.createDocumentFragment();bu(t,n,Lu,(e,t)=>{if(t){let n=document.createElement(`span`);n.className=t,n.textContent=e,r.appendChild(n)}else r.appendChild(document.createTextNode(e))},()=>r.appendChild(document.createTextNode(`
`))),e.textContent=``,e.appendChild(r),e.classList.add(`hl`)})}var J=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function $v(e){let t=String(e).match(/your code:(\d+):/);return t?Number(t[1]):null}function ey(e,{userLines:t=1/0}={}){if(e=String(e),e.startsWith(`LONGRUN::`))return{title:`Your code ran too long without pausing`,text:`The practice world stopped <b>${J(e.slice(9))}</b> after millions of steps without a <code>Wait()</code>. That is almost always a loop that never ends: a <code>while</code> whose condition never becomes false, or a <code>while true do</code> without <code>Wait(...)</code> inside. In a real FiveM server this would <b>freeze the game or the server</b>. Make sure something in the loop changes the condition, or add <code>Wait(500)</code> (or similar) inside the loop.`};let n=$v(e),r=n&&n>t,i=[[/attempt to call a nil value \((global|local|field|method|upvalue) '([^']+)'\)/,e=>`You tried to <b>run</b> <code>${J(e[2])}(...)</code> like a function, but <code>${J(e[2])}</code> is <b>nil</b> (it doesn't exist at that moment). Common causes: a typo or wrong capital letters (Lua is case-sensitive: <code>GetPlayerName</code> ≠ <code>getPlayerName</code>), the function is defined <i>below</i> the line that calls it, it was made <code>local</code> inside another block, or it is a native that only exists on the other side (client vs server).`],[/attempt to call a (\w+) value/,e=>`You put <code>( )</code> after something that is a <b>${J(e[1])}</b>, not a function. Only functions can be called.`],[/attempt to index a nil value \((global|local|field|upvalue) '([^']+)'\)/,e=>`You used <code>${J(e[2])}.something</code> or <code>${J(e[2])}[...]</code>, but <code>${J(e[2])}</code> is <b>nil</b>. Check: is the name spelled exactly right? Was it given a value before this line? If it comes from a table lookup or function, did that actually return something?`],[/attempt to index a nil value/,()=>`You used <code>x.something</code> or <code>x[...]</code> on something that is <b>nil</b>. Print the value just before this line to see which part is missing.`],[/attempt to index a (\w+) value/,e=>`You used <code>.</code> or <code>[ ]</code> on a <b>${J(e[1])}</b>. Only tables (and strings, for string functions) can be indexed.`],[/attempt to perform arithmetic on a nil value(?: \((\w+) '([^']+)'\))?/,e=>`Maths with <b>nil</b>${e[2]?` (<code>${J(e[2])}</code>)`:``}: one of the values in the calculation doesn't exist. Check spelling, and make sure it was set before this line. If it came from a player (command/event), use <code>tonumber</code> and check it isn't nil.`],[/attempt to perform arithmetic on a (\w+) value(?: \((\w+) '([^']+)'\))?/,e=>`Maths with a <b>${J(e[1])}</b>${e[3]?` (<code>${J(e[3])}</code>)`:``}. ${e[1]===`string`?`Text that isn't a number can't be used in maths. Convert it first with <code>tonumber(...)</code>. To <i>join</i> text use <code>..</code>, not <code>+</code>.`:`Only numbers can be used in maths.`}`],[/attempt to concatenate a (\w+) value(?: \((\w+) '([^']+)'\))?/,e=>`You used <code>..</code> to join text with a <b>${J(e[1])}</b>${e[3]?` (<code>${J(e[3])}</code>)`:``}. Only strings and numbers can be joined. `+(e[1]===`nil`?`The value is missing: check spelling and that it was set. While debugging, <code>tostring(x)</code> always works.`:`Wrap it in <code>tostring(...)</code> first.`)],[/attempt to compare (\w+) with (\w+)/,e=>`You compared a <b>${J(e[1])}</b> with a <b>${J(e[2])}</b> using <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code> or <code>&gt;=</code>. Both sides must be numbers (or both text). `+(e[1]===`nil`||e[2]===`nil`?`One side is nil: it was never set, or it is misspelled.`:`Convert text with <code>tonumber(...)</code> first.`)],[/attempt to get length of a (\w+) value/,e=>`You used <code>#</code> on a <b>${J(e[1])}</b>. <code>#</code> only works on strings, tables (lists) and vectors.`],[/'end' expected(?: \(to close '(\w+)' at line (\d+)\))?/,e=>`Lua reached the end but something is still open. ${e[1]?`The <code>${J(e[1])}</code> on <b>line ${e[2]}</b> needs a matching <code>end</code>.`:`An <code>if</code>, <code>for</code>, <code>while</code> or <code>function</code> is missing its <code>end</code>.`} Tip: indent your code so every block lines up with its <code>end</code>.`],[/'then' expected/,()=>`After an <code>if</code> (or <code>elseif</code>) condition you need the word <code>then</code>. Also check you used <code>==</code> (compare) and not <code>=</code> (store) in the condition.`],[/'do' expected/,()=>`A <code>for</code> or <code>while</code> line must end with <code>do</code>. Check the loop line, e.g. <code>for i = 1, 10 do</code>.`],[/'=' expected/,()=>`Lua expected a <code>=</code>. Often this means a typo turned a word into something Lua reads as a variable name, a missing <code>(</code>, or a missing <code>..</code> between pieces of text. Look closely at that line.`],[/unfinished string/,()=>`A piece of text was started with a quote but never closed. Every <code>"</code> needs a matching <code>"</code> on the same line (same for <code>'</code>).`],[/unexpected symbol near '?([^']*)'?/,e=>`Lua found something it didn't expect${e[1]?` near <code>${J(e[1])}</code>`:``}. Usually a typo: a missing quote, bracket or comma, <code>!=</code> instead of <code>~=</code>, or <code>x++</code>/<code>+=</code> (not Lua). Check this line and the one above.`],[/'<eof>' expected/,()=>`There is an extra <code>end</code> (or a stray word) that doesn't belong to anything. Count your blocks: each <code>if/for/while/function</code> needs exactly one <code>end</code>.`],[/'\)' expected/,()=>`A <code>(</code> was opened but not closed with <code>)</code>, or a comma is missing between values.`],[/'}' expected/,()=>`A table <code>{</code> was opened but not closed, or a comma is missing between items.`],[/malformed number/,()=>`Something that starts with a digit isn't a valid number. Variable names can't start with a digit, and numbers use a dot for decimals: <code>2.5</code>.`],[/bad argument #(\d+) to '([^']+)' \(([^)]*)\)/,e=>`The value number ${e[1]} you passed to <code>${J(e[2])}</code> is wrong: ${J(e[3])}.`],[/stack overflow/,()=>`A function kept calling itself (or two functions kept calling each other) forever. Every recursive function needs a way to stop.`],[/only exists on the (\w+) side/,e=>`Client and server have different functions. Run this as a ${J(e[1])} script (use the side selector in the Playground), or move this code to a ${J(e[1])} file.`],[/Wait\(\) can only be used inside a thread/,()=>`Put timed code inside <code>Citizen.CreateThread(function() ... end)</code> and call <code>Wait</code> in there.`]];for(let[t,a]of i){let i=e.match(t);if(i)return{title:r?`Error inside the checker (your code probably left something missing)`:n?`Problem on line ${n}`:`Problem`,text:a(i),line:r?null:n}}return{title:n?`Problem on line ${n}`:`Problem`,text:`Read the message above: it names the line and what confused Lua. Look at that line and the one above it.`,line:r?null:n}}var ty=e=>String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`);function ny(e,{onCommand:t,onErrorLine:n}={}){e.classList.add(`console`),e.innerHTML=`<div class="console-out" role="log" aria-live="polite"></div>
    <form class="console-cmd" hidden><span class="prompt">Tina&gt;</span><input type="text" placeholder="type a command, e.g. /hello" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="send"><button class="btn small">Send</button></form>`;let r=e.querySelector(`.console-out`),i=e.querySelector(`.console-cmd`),a=i.querySelector(`input`),o=1/0;i.addEventListener(`submit`,e=>{e.preventDefault();let n=a.value.trim();n&&(a.value=``,t&&t(n.startsWith(`/`)?n:`/`+n))});let s={clear(){r.innerHTML=``},setUserLines(e){o=e||1/0},line(e){if(e.kind===`err`)return s.error(e.text);let t=document.createElement(`div`);t.className=`cl cl-`+e.kind,t.textContent=e.text===``?`\xA0`:e.text,r.appendChild(t),r.scrollTop=r.scrollHeight},error(e){let t=ey(e,{userLines:o}),i=document.createElement(`div`);i.className=`cl cl-err`,i.innerHTML=`<div class="err-raw">❌ ${ty(e.startsWith(`LONGRUN::`)?`Stopped: endless loop (no Wait / condition never false)`:e)}</div><div class="err-help"><b>${ty(t.title)}</b><br>${t.text}</div>`,r.appendChild(i),r.scrollTop=r.scrollHeight,t.line&&n&&n(t.line)},note(e,t=`cl-note`){let n=document.createElement(`div`);n.className=`cl `+t,n.innerHTML=e,r.appendChild(n),r.scrollTop=r.scrollHeight},summary(e,{quietGlobals:t=!1}={}){if(e&&!e.timeout){!e.lines.length&&!(e.errors||[]).length&&s.note(`(no output: your code ran but didn't print anything)`,`cl-dim`);for(let t of e.busy||[])s.note(`⚠ <b>Performance:</b> the ${ty(t.name)} ran every frame (<code>Wait(0)</code>) <b>${t.wait0}</b> times in ${(e.simTime/1e3).toFixed(1)} s of game time. That's about 60 times per second on every player's PC. Fine for drawing markers/text or reading key presses; for anything else use a bigger Wait (500, 1000...).`,`cl-perf`);!t&&(e.globals||[]).length&&s.note(`ℹ Global variable(s) created: <code>${e.globals.map(ty).join(`</code>, <code>`)}</code>. Unless you meant to share them (like <code>Config</code>), add <code>local</code> in front (lesson 2 explains why).`,`cl-info`),e.alive>0&&s.note(`⏱ ${e.alive} thread(s) still running when the ${(e.simTime/1e3).toFixed(1)} s simulation stopped (normal for <code>while true</code> loops).`,`cl-dim`)}},showCommand(e){i.hidden=!e},focusCommand(){a.focus()}};return s}var ry=15e3,iy=null,ay=0,oy=new Map;function sy(){iy=new Worker(new URL(new URL(`worker--SGsEuJF.js`,import.meta.url).href,``+import.meta.url),{type:`module`}),iy.onmessage=e=>{let t=oy.get(e.data.id);t&&(e.data.type===`line`?t.onLine&&t.onLine(e.data.line):(clearTimeout(t.timer),oy.delete(e.data.id),t.resolve(e.data.res)))},iy.onerror=e=>{for(let[t,n]of oy)clearTimeout(n.timer),n.resolve({internal:!0,errors:[`The Lua engine failed to start: `+(e.message||`unknown error`)],lines:[]});oy.clear(),iy=null}}function cy(e,t){iy||sy();let n=++ay;return new Promise(r=>{let i=setTimeout(()=>{try{iy.terminate()}catch{}iy=null,oy.delete(n),r({timeout:!0,errors:[`LONGRUN::your code`],lines:[]})},ry);oy.set(n,{resolve:r,onLine:t,timer:i}),iy.postMessage({...e,id:n})})}var ly={run:(e,t,n)=>cy({type:`run`,code:e,opts:t},n),check:(e,t,n,r)=>cy({type:`check`,ex:e,code:t,opts:n},r),command:(e,t)=>cy({type:`command`,line:e,pid:1},t),warmup:()=>cy({type:`ping`}),busy:()=>oy.size>0},uy=`luaLearn.v1`,dy=new Set;function fy(){return{progress:{completed:{},quiz:{},lastLesson:null,updatedAt:0},code:{},dirty:{progress:!1,code:{}},kvp:`{}`,lastSync:0}}var Y=py();function py(){try{let e=JSON.parse(localStorage.getItem(uy));if(e&&e.progress){let t=fy();return{...t,...e,progress:{...t.progress,...e.progress},dirty:{...t.dirty,...e.dirty||{}}}}}catch{}return fy()}function my(){try{localStorage.setItem(uy,JSON.stringify(Y))}catch(e){console.warn(`localStorage full?`,e)}}function hy(e){for(let t of dy)t(e)}var X={get state(){return Y},onChange(e){return dy.add(e),()=>dy.delete(e)},isComplete:e=>!!Y.progress.completed[e],completedCount:()=>Object.keys(Y.progress.completed).length,setComplete(e,t=!0){if(t){if(Y.progress.completed[e])return;Y.progress.completed[e]=Date.now()}else delete Y.progress.completed[e];Y.progress.updatedAt=Date.now(),Y.dirty.progress=!0,my(),hy(`progress`)},setQuiz(e,t,n){let r=Y.progress.quiz[e];r&&r.best>=t||(Y.progress.quiz[e]={best:t,total:n,ts:Date.now()},Y.progress.updatedAt=Date.now(),Y.dirty.progress=!0,my(),hy(`progress`))},setLastLesson(e){Y.progress.lastLesson!==e&&(Y.progress.lastLesson=e,Y.progress.updatedAt=Date.now(),Y.dirty.progress=!0,my(),hy(`progress-quiet`))},getCode:e=>{let t=Y.code[e];return t&&!t.deleted?t:null},listSnippets:()=>Object.entries(Y.code).filter(([e,t])=>e.startsWith(`play-`)&&!t.deleted).map(([e,t])=>({key:e,...t})).sort((e,t)=>t.updatedAt-e.updatedAt),saveCode(e,t,n={}){let r=Y.code[e]||{};(r.code!==t||r.deleted||n.title)&&(Y.code[e]={...r,...n,code:t,updatedAt:Date.now(),deleted:!1},Y.dirty.code[e]=!0,my(),hy(`code-quiet`))},renameCode(e,t){Y.code[e]&&(Y.code[e]={...Y.code[e],title:t,updatedAt:Date.now()},Y.dirty.code[e]=!0,my(),hy(`code`))},deleteCode(e){Y.code[e]&&(Y.code[e]={code:``,title:Y.code[e].title||``,deleted:!0,updatedAt:Date.now()},Y.dirty.code[e]=!0,my(),hy(`code`))},get kvp(){return Y.kvp||`{}`},setKvp(e){Y.kvp=e||`{}`,my()},mergeRemote(e,t){let n=!1;if(e){let t=Y.progress;for(let[r,i]of Object.entries(e.completed||{}))t.completed[r]?i<t.completed[r]&&(t.completed[r]=i):(t.completed[r]=i,n=!0);for(let[r,i]of Object.entries(e.quiz||{}))(!t.quiz[r]||i&&i.best>t.quiz[r].best)&&(t.quiz[r]=i,n=!0);(e.updatedAt||0)>(t.updatedAt||0)&&e.lastLesson&&(t.lastLesson!==e.lastLesson&&(n=!0),t.lastLesson=e.lastLesson,t.updatedAt=e.updatedAt);let r=e.completed||{};(Object.keys(t.completed).some(e=>!r[e])||Object.entries(t.quiz).some(([t,n])=>!(e.quiz||{})[t]||e.quiz[t].best<n.best))&&(Y.dirty.progress=!0)}else Y.dirty.progress=!0;for(let[e,r]of Object.entries(t||{})){let t=Y.code[e];!t||(r.updatedAt||0)>(t.updatedAt||0)?(Y.code[e]=r,delete Y.dirty.code[e],n=!0):(t.updatedAt||0)>(r.updatedAt||0)&&(Y.dirty.code[e]=!0)}for(let e of Object.keys(Y.code))t&&!(e in t)&&(Y.dirty.code[e]=!0);return my(),n&&hy(`remote`),n},mergeCodeChanges(e){let t=!1;for(let[n,r]of Object.entries(e)){let e=Y.code[n];(!e||(r.updatedAt||0)>(e.updatedAt||0))&&(Y.code[n]=r,delete Y.dirty.code[n],t=!0)}t&&(my(),hy(`remote`))},takeDirty(){return{progress:Y.dirty.progress,code:Object.keys(Y.dirty.code)}},clearDirty(e,t){e&&(Y.dirty.progress=!1);for(let e of t||[])delete Y.dirty.code[e];Y.lastSync=Date.now(),my(),hy(`sync`)},exportJson(){return JSON.stringify({app:`lua-learn`,version:1,progress:Y.progress,code:Y.code},null,2)},importJson(e){let t=JSON.parse(e);if(!t||t.app!==`lua-learn`)throw Error(`This is not a Lua for Los Santos backup file.`);this.mergeRemote(t.progress,t.code),Y.dirty.progress=!0;for(let e of Object.keys(t.code||{}))Y.dirty.code[e]=!0;my(),hy(`remote`)},resetAll(){Y={...fy(),dirty:{progress:!0,code:{}}},my(),hy(`remote`)}},gy={apiKey:`AIzaSyAA211KylOSj2F3TXQFjsGpENXikI5L9uk`,authDomain:`vtm-app-d344b.firebaseapp.com`,projectId:`vtm-app-d344b`,storageBucket:`vtm-app-d344b.firebasestorage.app`,messagingSenderId:`134964010590`,appId:`1:134964010590:web:d13222be39206fdbfd9ecf`},_y=`modulepreload`,vy=function(e,t){return new URL(e,t).href},yy={},by=function(e){return e.pathname.endsWith(`.css`)},xy=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Sy=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=vy(t,n);let r=s(t),i=by(r);return xy(yy,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:_y,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{t.addEventListener(`load`,e),t.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${r}`)))})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Z=null,Cy=null,wy=[],Ty=null,Ey=new Set,Dy={state:gy?`signed-out`:`unconfigured`,message:``};function Oy(e,t=``){Dy={state:e,message:t};for(let e of Ey)e(Dy,Cy)}var ky={get user(){return Cy},get status(){return Dy},onStatus(e){return Ey.add(e),e(Dy,Cy),()=>Ey.delete(e)},available:()=>!!gy,async init(){if(gy){try{await Ay()}catch{Oy(`offline`,`Cloud sync could not load (offline?). Your progress is saved on this device.`);return}Z.onAuthStateChanged(Z.auth,async e=>{Cy=e,wy.forEach(e=>e()),wy=[],e?await this.fullSync():Oy(`signed-out`)}),X.onChange(e=>{e!==`remote`&&e!==`sync`&&Ny()}),window.addEventListener(`online`,()=>{Cy&&this.fullSync()}),window.addEventListener(`offline`,()=>{Cy&&Oy(`offline`,`Offline: changes are saved on this device and will sync later.`)})}},async signIn(e,t){return await Ay(),Z.signInWithEmailAndPassword(Z.auth,e,t)},async signUp(e,t){return await Ay(),Z.createUserWithEmailAndPassword(Z.auth,e,t)},async reset(e){return await Ay(),Z.sendPasswordResetEmail(Z.auth,e)},async signOut(){Z&&(await Py(),await Z.signOut(Z.auth))},async fullSync(){if(Cy){if(!navigator.onLine)Oy(`offline`,`Offline: changes are saved on this device and will sync later.`);else{Oy(`syncing`);try{let{doc:e,getDoc:t,getDocs:n,collection:r}=Z,i=e(Z.db,`luaLearn`,Cy.uid),[a,o]=await Promise.all([t(i),n(r(i,`code`))]),s={};o.forEach(e=>{s[e.id]=e.data()}),X.mergeRemote(a.exists()?a.data():null,s),await Py(),jy(),Oy(`synced`)}catch(e){console.warn(`sync failed`,e),Oy(`error`,Fy(e))}}}}};async function Ay(){if(Z)return Z;let[{initializeApp:e},t,n]=await Promise.all([Sy(()=>import(`./index.esm-rKTRkX4c.js`),__vite__mapDeps([0,1]),import.meta.url),Sy(()=>import(`./index.esm-h8XrRUkU.js`),__vite__mapDeps([2,1]),import.meta.url),Sy(()=>import(`./index.esm-B-3SiZcd.js`),__vite__mapDeps([3,1]),import.meta.url)]),r=e(gy,`lua-learn`),i=t.getAuth(r);await t.setPersistence(i,t.browserLocalPersistence).catch(()=>{});let a=n.getFirestore(r);return/^(localhost|127\.0\.0\.1)$/.test(location.hostname)&&new URLSearchParams(location.search).has(`emu`)&&(t.connectAuthEmulator(i,`http://127.0.0.1:9099`,{disableWarnings:!0}),n.connectFirestoreEmulator(a,`127.0.0.1`,8087)),Z={...t,...n,auth:i,db:a},Z}function jy(){let{doc:e,collection:t,onSnapshot:n}=Z,r=e(Z.db,`luaLearn`,Cy.uid);wy.push(n(r,e=>{e.exists()&&!e.metadata.hasPendingWrites&&X.mergeRemote(e.data(),null)},()=>{})),wy.push(n(t(r,`code`),e=>{if(e.metadata.hasPendingWrites)return;let t={};e.docChanges().forEach(e=>{e.type!==`removed`&&(t[e.doc.id]=e.doc.data())}),Object.keys(t).length&&My(t)},()=>{}))}function My(e){X.mergeCodeChanges(e)}function Ny(){Cy&&(clearTimeout(Ty),Ty=setTimeout(Py,1500))}async function Py(){if(clearTimeout(Ty),!Cy||!Z||!navigator.onLine)return;let e=X.takeDirty();if(!e.progress&&!e.code.length)return;let{doc:t,setDoc:n,writeBatch:r}=Z,i=t(Z.db,`luaLearn`,Cy.uid);try{Oy(`syncing`);let n=r(Z.db);if(e.progress){let e=X.state.progress;n.set(i,{completed:e.completed,quiz:e.quiz,lastLesson:e.lastLesson||null,updatedAt:e.updatedAt||Date.now(),app:`lua-learn`})}for(let r of e.code.slice(0,400)){let e=X.state.code[r];e&&n.set(t(i,`code`,r),{code:String(e.code||``).slice(0,2e5),title:e.title||``,lessonId:e.lessonId||null,updatedAt:e.updatedAt||Date.now(),deleted:!!e.deleted})}await n.commit(),X.clearDirty(e.progress,e.code.slice(0,400)),Oy(`synced`)}catch(e){console.warn(`push failed`,e),Oy(`error`,Fy(e))}}function Fy(e){return{"auth/invalid-credential":`Email or password is wrong.`,"auth/wrong-password":`Email or password is wrong.`,"auth/user-not-found":`No account with that email. Use "Create account" (or the same login as your VTM app).`,"auth/invalid-email":`That email address doesn't look right.`,"auth/email-already-in-use":`That email already has an account. Use "Sign in" instead (the same login as your VTM app works).`,"auth/weak-password":`Password must be at least 6 characters.`,"auth/too-many-requests":`Too many attempts. Wait a few minutes and try again.`,"auth/network-request-failed":`No internet connection.`,"auth/unauthorized-domain":`This website address isn't allowed to sign in yet. Add it in Firebase console → Authentication → Settings → Authorized domains.`,"auth/operation-not-allowed":`Email/password sign-in is turned off in the Firebase project.`,"permission-denied":`Firestore refused access. The luaLearn rule probably isn't published yet (see SETUP.md: paste firestore.rules.merged into Firebase console → Firestore → Rules).`,unavailable:`Firestore is unreachable right now (offline?). Your progress is safe on this device.`}[e&&e.code||``]||e&&e.message||`Something went wrong with sync.`}var Q=(e,t=document)=>t.querySelector(e),$=e=>String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`),Iy=(e,t)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}},Ly=Q(`#view`),Ry=[];function zy(e){document.querySelectorAll(`[data-nav]`).forEach(t=>t.classList.toggle(`active`,t.dataset.nav===e))}ky.onStatus((e,t)=>{let n=Q(`#syncDot`),[r,i]={unconfigured:[`local`,`Saved on this device`],"signed-out":[`local`,`Saved on this device (sign in to sync)`],syncing:[`syncing`,`Syncing…`],synced:[`ok`,`Synced to your account`],offline:[`offline`,`Offline: saved on this device`],error:[`error`,`Sync problem: `+e.message]}[e.state]||[`local`,``];n.className=`sync-dot `+r,n.title=i,n.setAttribute(`aria-label`,i),Q(`#acctStatus`)&&ib()});function By(){Ry.forEach(e=>{try{e()}catch{}}),Ry=[];let[e,t]=location.hash.replace(/^#\/?/,``).split(`/`);window.scrollTo(0,0),e===`lesson`&&ie(t)?(zy(`lessons`),Yy(ie(t))):e===`play`?(zy(`play`),tb()):e===`ref`?(zy(`ref`),nb()):e===`account`?(zy(`account`),ib()):(zy(`lessons`),Gy())}window.addEventListener(`hashchange`,By),X.onChange(e=>{if(e===`remote`){let e=location.hash;(!e||e===`#/`||e===`#`)&&Gy()}});var Vy=null;window.addEventListener(`beforeinstallprompt`,e=>{e.preventDefault(),Vy=e;let t=Q(`#installBtn`);t&&(t.hidden=!1)});var Hy=()=>matchMedia(`(display-mode: standalone)`).matches||navigator.standalone,Uy=()=>/iphone|ipad|ipod/i.test(navigator.userAgent);function Wy(){let e=X.state.progress.lastLesson,t=b.find(e=>!X.isComplete(e.id));return e&&ie(e)&&!X.isComplete(e)?ie(e):t||b[0]}function Gy(){let e=b.filter(e=>X.isComplete(e.id)).length,t=Math.round(e/b.length*100),n=Wy(),r=!!ky.user;Ly.innerHTML=`
    <section class="hero card">
      <h1>Hi Tina! 👋</h1>
      <p>Learn Lua from zero and script your own GTA V server. Every step explains <b>why</b>, with small exercises you run right here.</p>
      <div class="progress"><div class="bar" style="width:${t}%"></div></div>
      <p class="muted">${e} of ${b.length} lessons complete (${t}%)</p>
      <div class="row">
        <a class="btn primary" href="#/lesson/${n.id}">${e===0?`Start lesson 1`:e===b.length?`Review lessons`:`Continue: `+$(n.title)}</a>
        <a class="btn ghost" href="#/play">Open playground</a>
        <button class="btn ghost" id="installBtn" ${Vy?``:`hidden`}>📲 Install app</button>
      </div>
      ${!Hy()&&Uy()?`<p class="muted small">📲 To install on iPhone: tap <b>Share</b> then <b>Add to Home Screen</b>.</p>`:``}
      ${ky.available()&&!r?`<p class="muted small">☁️ <a href="#/account">Sign in</a> to sync your progress and code between your phone and computer. Without signing in, everything is still saved on this device.</p>`:``}
    </section>
    ${ae.map(e=>`
      <section class="part">
        <h2>${$(e)}</h2>
        <ol class="lesson-list">
          ${b.filter(t=>t.part===e).map(e=>{let t=X.state.progress.quiz[e.id],n=X.isComplete(e.id);return`<li><a class="lesson-card ${n?`done`:``}" href="#/lesson/${e.id}">
              <span class="num">${n?`✓`:e.n}</span>
              <span class="lc-body"><span class="lc-title">${$(e.title)}</span>
              <span class="lc-sum">${$(e.summary)}</span>
              <span class="lc-meta">${e.minutes} min${t?` · quiz ${t.best}/${t.total}`:``}${n?` · exercise done`:``}</span></span>
            </a></li>`}).join(``)}
        </ol>
      </section>`).join(``)}
    <p class="muted small center">Lua 5.4 runs for real in your browser (WebAssembly). The GTA functions are a practice imitation: see <a href="#/ref">Reference</a>.</p>`;let i=Q(`#installBtn`);i&&(i.onclick=async()=>{Vy&&(Vy.prompt(),await Vy.userChoice,Vy=null,i.hidden=!0)})}var Ky=`⇥ ( ) " = . , : { } [ ] .. # ~= == _ -- ' < > + - * / ^ %`.split(` `);function qy(e){let t=document.createElement(`div`);return t.className=`keybar`,t.innerHTML=`<button data-act="undo" aria-label="Undo">↶</button><button data-act="redo" aria-label="Redo">↷</button>`+Ky.map(e=>`<button data-k="${$(e)}">${$(e)}</button>`).join(``),t.addEventListener(`mousedown`,e=>e.preventDefault()),t.addEventListener(`click`,t=>{let n=t.target.closest(`button`);if(!n)return;if(n.dataset.act===`undo`)return e.undo();if(n.dataset.act===`redo`)return e.redo();let r=n.dataset.k;e.insert(r===`⇥`?`  `:r)}),t}async function Jy(e,t,n,{check:r=null,button:i=null}={}){e.clear(),e.setUserLines(t.split(`
`).length);let a=i?[].concat(i):[];a.forEach(e=>{e.disabled=!0,e.dataset.label=e.dataset.label||e.textContent,e.textContent=`⏳ Running…`});let o;try{o=r?await ly.check(r,t,{kvp:`{}`,...n},t=>e.line(t)):await ly.run(t,{kvp:X.kvp,...n},t=>e.line(t))}finally{a.forEach(e=>{e.disabled=!1,e.textContent=e.dataset.label})}let s=r&&o.res||o;return s.timeout&&e.error(`LONGRUN::your code`),!r&&s.kvp&&X.setKvp(s.kvp),e.summary(s),e.showCommand(/RegisterCommand/.test(t)&&!s.syntax),o}function Yy(e){X.setLastLesson(e.id);let t=b.indexOf(e),n=b[t-1],r=b[t+1],i=e.exercise;Ly.innerHTML=`
    <article class="lesson">
      <div class="crumbs"><a href="#/">Lessons</a> › ${$(e.part)} › ${e.n}</div>
      <h1>${e.n}. ${$(e.title)}</h1>
      <p class="muted">${$(e.summary)} · about ${e.minutes} min ${X.isComplete(e.id)?`· <span class="badge ok">✓ completed</span>`:``}</p>
      <div class="lesson-body">${ue(e.body,{side:e.side})}</div>

      <section class="quiz card" id="quiz"><h2>🧠 Quick quiz</h2><div class="quiz-qs"></div><div class="quiz-score"></div></section>

      ${i?`<section class="exercise card" id="exercise">
        <h2>🛠 Exercise: ${$(i.title)}</h2>
        <div class="ex-prompt">${ue(i.prompt,{side:i.side})}</div>
        <p class="muted small">Runs as: <b>${i.side===`manifest`?`fxmanifest.lua`:i.side+` script`}</b>. Your code is saved automatically${ky.user?` and synced`:``}.</p>
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
    </article>`,Xy(Ly.querySelector(`.lesson-body`),e),Qv(Ly),Zy(e),i&&Qy(e,i,r)}function Xy(e,t){e.querySelectorAll(`.codeblock`).forEach(e=>{let n=e.querySelector(`.run-block`);if(!n)return;let r=e.querySelector(`code`).textContent,i=e.dataset.side||`shared`,a=null;n.onclick=async()=>{let t=e.querySelector(`.cb-output`);t.hidden=!1,a||(a=ny(t,{onCommand:async e=>{let t=await ly.command(e,e=>a.line(e));t&&t.kvp&&X.setKvp(t.kvp),t&&t.errors&&t.errors.length&&!t.lines.length&&a.error(t.errors[0])}})),await Jy(a,r,{side:i,duration:5e3},{button:n})},e.querySelector(`.edit-block`).onclick=()=>{sessionStorage.setItem(`luaLearn.import`,JSON.stringify({code:r,side:i,from:t.title})),location.hash=`#/play`}})}function Zy(e){let t=Q(`#quiz .quiz-qs`),n=Q(`#quiz .quiz-score`),r=Array(e.quiz.length).fill(null);t.innerHTML=e.quiz.map((e,t)=>`
    <div class="q" data-q="${t}">
      <p class="q-text"><b>${t+1}.</b> ${se(e.q)}</p>
      <div class="opts">${e.options.map((e,t)=>`<button class="opt" data-o="${t}">${se(e)}</button>`).join(``)}</div>
      <div class="q-why" hidden></div>
    </div>`).join(``),t.addEventListener(`click`,t=>{let i=t.target.closest(`.opt`);if(!i)return;let a=i.closest(`.q`),o=Number(a.dataset.q);if(r[o]!==null)return;let s=e.quiz[o],c=Number(i.dataset.o);r[o]=c===s.answer,a.querySelectorAll(`.opt`).forEach((e,t)=>{e.disabled=!0,t===s.answer?e.classList.add(`right`):t===c&&e.classList.add(`wrong`)});let l=a.querySelector(`.q-why`);if(l.hidden=!1,l.innerHTML=(r[o]?`✅ <b>Right!</b> `:`❌ <b>Not quite.</b> `)+se(s.why||``),r.every(e=>e!==null)){let t=r.filter(Boolean).length;X.setQuiz(e.id,t,e.quiz.length),n.innerHTML=`<p><b>Score: ${t} / ${e.quiz.length}</b> ${t===e.quiz.length?`🎉 Perfect!`:`— read the explanations above, then try again if you like.`}</p><button class="btn ghost small" id="quizAgain">Try the quiz again</button>`,Q(`#quizAgain`).onclick=()=>Zy(e)}},{once:!1}),n.innerHTML=``}function Qy(e,t,n){let r=`ex-`+e.id,i=X.getCode(r),a=Iy(t=>X.saveCode(r,t,{lessonId:e.id,title:`Exercise: `+e.title}),500),o={side:t.side,duration:t.duration},s,c=ny(Q(`#exConsole`),{onErrorLine:e=>s&&s.markError(e),onCommand:async e=>{let t=await ly.command(e,e=>c.line(e));t&&t.errors&&t.errors.length&&!t.lines.length&&c.error(t.errors[0])}});s=Xv(Q(`#exEditor`),{doc:i?i.code:t.starter,onChange:a,onRun:()=>Q(`#exRun`).click()}),Q(`#exEditor`).parentElement.appendChild(qy(s)),Ry.push(()=>{X.saveCode(r,s.get(),{lessonId:e.id,title:`Exercise: `+e.title}),s.destroy()}),Q(`#exRun`).onclick=()=>Jy(c,s.get(),o,{button:Q(`#exRun`)}),Q(`#exCheck`).onclick=async()=>{let i=Q(`#exResults`);i.innerHTML=``;let a=s.get();X.saveCode(r,a,{lessonId:e.id,title:`Exercise: `+e.title});let l=await Jy(c,a,o,{check:t,button:[Q(`#exCheck`),Q(`#exRun`)]});if(l.timeout||!l.results){i.innerHTML=`<div class="result-box fail"><b>Not yet.</b> Your code didn't finish (see the console).</div>`;return}let u=l.results.map(e=>`<li class="${e.ok?`ok`:`no`}">${e.ok?`✅`:`⬜`} ${$(e.msg)}</li>`).join(``);if(l.passed){let t=!X.isComplete(e.id);X.setComplete(e.id),i.innerHTML=`<div class="result-box pass"><h3>🎉 ${t?`Exercise complete!`:`Still passing!`}</h3><ul>${u}</ul>
        ${n?`<a class="btn primary" href="#/lesson/${n.id}">Next: ${$(n.title)} →</a>`:`<p><b>You finished every lesson.</b> Amazing work, Tina! Try building your own resource in the Playground.</p>`}</div>`}else i.innerHTML=`<div class="result-box fail"><b>Not yet, keep going!</b> Here's what the checker looked for:<ul>${u}</ul><p class="muted small">Stuck? Use 💡 Hint. Each hint reveals a bit more.</p></div>`;i.scrollIntoView({behavior:`smooth`,block:`nearest`})};let l=0;Q(`#exHint`).onclick=()=>{let e=Q(`#exHints`);t.hints.length?(l<t.hints.length&&(l++,e.innerHTML=t.hints.slice(0,l).map((e,n)=>`<div class="hint">💡 <b>Hint ${n+1}/${t.hints.length}:</b> ${se(e)}</div>`).join(``)),l>=t.hints.length&&(Q(`#exHint`).disabled=!0)):e.innerHTML=`<p class="muted">No hints for this one. Re-read the lesson boxes above.</p>`},Q(`#exReset`).onclick=()=>{confirm(`Replace your code with the starter code? (Your current code will be lost.)`)&&(s.set(t.starter),X.saveCode(r,t.starter,{lessonId:e.id}))},Q(`#exSol`).onclick=()=>{let e=Q(`#exSolution`);e.hidden?confirm(`Have a real try first: you learn far more by struggling a little. Show the solution anyway?`)&&(e.hidden=!1,e.innerHTML=`<h3>One possible solution</h3><p class="muted small">Other answers can be right too. Read it line by line and make sure you understand <b>why</b> each line is there.</p>
      <pre><code>${$(t.solution)}</code></pre><button class="btn small" id="copySol">Copy into my editor</button>`,Qv(e),Q(`#copySol`).onclick=()=>{confirm(`Replace your code with the solution?`)&&s.set(t.solution)}):e.hidden=!0}}var $y=[[`shared`,`Shared (both sides, practice)`],[`client`,`Client script`],[`server`,`Server script`],[`manifest`,`fxmanifest.lua`]],eb=`-- Playground: experiment freely! Your code is saved automatically.
-- Pick the side (client/server) above. Ctrl+Enter runs.

local name = "Tina"
print("Hello, " .. name .. "!")

RegisterCommand("hello", function(source, args)
  local who = args[1] or "stranger"
  print("Hello, " .. who .. "! (typed by player " .. tostring(source) .. ")")
end, false)

-- After pressing Run, type /hello Bob in the box under the console.
`;function tb(){let e=sessionStorage.getItem(`luaLearn.import`);if(e){sessionStorage.removeItem(`luaLearn.import`);let t=JSON.parse(e);X.saveCode(`play-scratch`,t.code,{title:`Scratchpad`,side:t.side,from:t.from}),localStorage.setItem(`luaLearn.currentSnippet`,`play-scratch`)}X.getCode(`play-scratch`)||X.saveCode(`play-scratch`,eb,{title:`Scratchpad`,side:`shared`});let t=localStorage.getItem(`luaLearn.currentSnippet`)||`play-scratch`;X.getCode(t)||(t=`play-scratch`),Ly.innerHTML=`
    <section class="play">
      <h1>🧪 Playground</h1>
      <p class="muted">Write any Lua and run it in the practice GTA world. Fake players: 1 Tina, 2 Bob, 3 Sneaky_Steve. See <a href="#/ref">Reference</a> for every available function.</p>
      <div class="row play-bar">
        <label class="field">Snippet <select id="snip"></select></label>
        <label class="field">Runs as <select id="side">${$y.map(([e,t])=>`<option value="${e}">${t}</option>`).join(``)}</select></label>
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
    </section>`;let n=Q(`#snip`),r=Q(`#side`),i=()=>{let e=X.listSnippets(),r=e.find(e=>e.key===`play-scratch`),i=e.filter(e=>e.key!==`play-scratch`);n.innerHTML=[r,...i].filter(Boolean).map(e=>`<option value="${e.key}">${$(e.title||`Untitled`)}</option>`).join(``),n.value=t,Q(`#snipDel`).disabled=t===`play-scratch`,Q(`#snipRename`).disabled=t===`play-scratch`;let a=X.getCode(t);Q(`#snipNote`).textContent=t===`play-scratch`?`Scratchpad is replaced when you click "Try in playground" in a lesson. Use "Save as new" to keep something.`+(a&&a.from?` (Loaded from: ${a.from})`:``):``},a,o=Iy((e,t,n)=>X.saveCode(e,t,{side:n}),500),s=e=>o(t,e,r.value),c=ny(Q(`#playConsole`),{onErrorLine:e=>a&&a.markError(e),onCommand:async e=>{let t=await ly.command(e,e=>c.line(e));t&&t.kvp&&X.setKvp(t.kvp),t&&t.errors&&t.errors.length&&!t.lines.length&&c.error(t.errors[0])}}),l=e=>{t=e,localStorage.setItem(`luaLearn.currentSnippet`,e);let n=X.getCode(e);a.set(n?n.code:``),r.value=n&&n.side||`shared`,i()};a=Xv(Q(`#playEditor`),{doc:(X.getCode(t)||{}).code||``,onChange:s,onRun:()=>Q(`#playRun`).click()}),Q(`#playEditor`).parentElement.appendChild(qy(a)),r.value=(X.getCode(t)||{}).side||`shared`,i(),Ry.push(()=>{X.saveCode(t,a.get(),{side:r.value}),a.destroy()}),n.onchange=()=>{X.saveCode(t,a.get(),{side:r.value}),l(n.value)},r.onchange=()=>X.saveCode(t,a.get(),{side:r.value,title:(X.getCode(t)||{}).title}),Q(`#playRun`).onclick=()=>Jy(c,a.get(),{side:r.value,duration:5e3},{button:Q(`#playRun`)}),Q(`#snipNew`).onclick=()=>{let e=prompt(`Name for the new snippet:`,`My script`);if(e===null)return;X.saveCode(t,a.get(),{side:r.value});let n=`play-`+Date.now().toString(36);X.saveCode(n,`-- `+e+`
`,{title:e||`Untitled`,side:`shared`}),l(n)},Q(`#snipCopy`).onclick=()=>{let e=prompt(`Save a copy as:`,((X.getCode(t)||{}).title||`Copy`)+` (copy)`);if(e===null)return;let n=`play-`+Date.now().toString(36);X.saveCode(n,a.get(),{title:e||`Untitled`,side:r.value}),l(n)},Q(`#snipRename`).onclick=()=>{let e=X.getCode(t),n=prompt(`New name:`,e?e.title:``);n&&(X.renameCode(t,n),i())},Q(`#snipDel`).onclick=()=>{t!==`play-scratch`&&confirm(`Delete this snippet? This also deletes it on your other devices.`)&&(X.deleteCode(t),l(`play-scratch`))},Q(`#kvpReset`).onclick=()=>{confirm(`Wipe all fake KVP data saved by your practice scripts?`)&&(X.setKvp(`{}`),c.clear(),c.note(`💾 Fake KVP storage wiped.`,`cl-info`))}}function nb(){Ly.innerHTML=`
    <section class="ref">
      <h1>📚 Reference</h1>
      <div class="card">
        <h2>Lua cheat sheet</h2>
        <div class="lesson-body">${ue(rb)}</div>
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
        ${Wv.map(([e,t])=>`<h3>${$(e)}</h3><div class="table-wrap"><table class="api"><thead><tr><th>Function</th><th>Side</th><th>Notes</th></tr></thead><tbody>
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
    </section>`}var rb='\n| Thing | Write it like |\n|---|---|\n| comment | `-- note` |\n| variable | `local cash = 500` |\n| change it | `cash = cash + 100` |\n| text / join | `"Hi " .. name` |\n| compare | `==`, `~=`, `<`, `>`, `<=`, `>=` |\n| logic | `and`, `or`, `not` |\n| if | `if x > 5 then ... elseif ... else ... end` |\n| count loop | `for i = 1, 10 do ... end` |\n| while loop | `while cond do ... end` |\n| function | `local function add(a, b) return a + b end` |\n| list | `local t = { "a", "b" }`, `t[1]`, `#t` |\n| add / remove | `table.insert(t, v)`, `table.remove(t, i)` |\n| dictionary | `local p = { name = "Tina" }`, `p.name`, `p[key]` |\n| loop list | `for i, v in ipairs(t) do ... end` |\n| loop dict | `for k, v in pairs(t) do ... end` |\n| convert | `tonumber("5")`, `tostring(5)` |\n| safe call | `local ok, err = pcall(fn)` |\n| thread | `CreateThread(function() while true do Wait(500) end end)` |\n| event | `RegisterNetEvent("res:name", function(...) local src = source end)` |\n| command | `RegisterCommand("name", function(source, args) end, false)` |\n\nOnly `nil` and `false` are "false". `0` and `""` are true. Lists start at **1**.\n';function ib(){let e=ky.user,t=ky.status,n=X.state.lastSync?new Date(X.state.lastSync).toLocaleString():`never`;if(!location.hash.startsWith(`#/account`))return;Ly.innerHTML=`
    <section class="account">
      <h1>👤 Account & sync</h1>
      <div class="card" id="acctStatus">
        ${ky.available()?e?`<p>Signed in as <b>${$(e.email)}</b>.</p><p class="muted small">Status: ${$(ab(t))}. Last synced: ${$(n)}.</p>
              <div class="row"><button class="btn" id="syncNow">⟳ Sync now</button><button class="btn ghost" id="signOut">Sign out</button></div>`:`<p>Sign in to keep your progress and code in sync between your phone and computer. You can use the <b>same email and password as your VTM app</b> (same Firebase project).</p>
              <form id="authForm" class="auth">
                <label class="field">Email <input type="email" id="email" autocomplete="username" required></label>
                <label class="field">Password <input type="password" id="pw" autocomplete="current-password" minlength="6" required></label>
                <div class="row"><button class="btn primary" type="submit">Sign in</button><button class="btn ghost" type="button" id="signUp">Create account</button><button class="btn ghost small" type="button" id="forgot">Forgot password?</button></div>
                <p class="auth-msg" id="authMsg" role="alert"></p>
              </form>
              ${t.state===`offline`||t.state===`error`?`<p class="warn-text">${$(t.message)}</p>`:``}`:`<p>Cloud sync isn't configured in this copy of the app. Everything is saved on this device.</p>`}
        ${e&&t.state===`error`?`<p class="warn-text">${$(t.message)}</p>`:``}
      </div>
      <div class="card">
        <h2>Your data</h2>
        <p>${X.completedCount()} lessons complete, ${Object.values(X.state.code).filter(e=>!e.deleted).length} saved code files. Everything is always saved on this device first, so the app works offline. When you're signed in it syncs automatically.</p>
        <div class="row">
          <button class="btn ghost" id="exportBtn">⬇ Download backup</button>
          <label class="btn ghost">⬆ Restore backup<input type="file" id="importFile" accept="application/json,.json" hidden></label>
          <button class="btn ghost danger" id="resetBtn">Reset all progress</button>
        </div>
      </div>
      <p class="muted small">Lua for Los Santos · v1.0 · Lua 5.4 via wasmoon</p>
    </section>`;let r=e=>{let t=Q(`#authMsg`);t&&(t.textContent=e)},i=Q(`#authForm`);if(i){let e=()=>[Q(`#email`).value.trim(),Q(`#pw`).value];i.onsubmit=async t=>{t.preventDefault(),r(`Signing in…`);try{await ky.signIn(...e())}catch(e){r(Fy(e))}},Q(`#signUp`).onclick=async()=>{if(i.reportValidity()){r(`Creating account…`);try{await ky.signUp(...e())}catch(e){r(Fy(e))}}},Q(`#forgot`).onclick=async()=>{let e=Q(`#email`).value.trim();if(!e)return r(`Type your email first.`);try{await ky.reset(e),r(`Password reset email sent (check spam too).`)}catch(e){r(Fy(e))}}}let a=Q(`#signOut`);a&&(a.onclick=()=>ky.signOut());let o=Q(`#syncNow`);o&&(o.onclick=()=>ky.fullSync()),Q(`#exportBtn`).onclick=()=>{let e=new Blob([X.exportJson()],{type:`application/json`}),t=document.createElement(`a`);t.href=URL.createObjectURL(e),t.download=`lua-learn-backup-${new Date().toISOString().slice(0,10)}.json`,t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),2e3)},Q(`#importFile`).onchange=async e=>{let t=e.target.files[0];if(t)try{X.importJson(await t.text()),alert(`Backup restored (merged with what was here).`),ib()}catch(e){alert(e.message)}},Q(`#resetBtn`).onclick=()=>{confirm(`Reset ALL progress and saved code on this device?`)&&(!ky.user||confirm(`You are signed in: this also clears progress in your account. Really reset?`))&&(X.resetAll(),ib())}}var ab=e=>({syncing:`syncing…`,synced:`up to date`,offline:`offline (will sync later)`,error:`problem`,"signed-out":`signed out`})[e.state]||e.state;By(),ky.init(),ly.warmup(),`serviceWorker`in navigator&&window.addEventListener(`load`,()=>navigator.serviceWorker.register(`./sw.js`).catch(e=>console.warn(`SW failed`,e)));