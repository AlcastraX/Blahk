const guideData = {
General: [
    {
        name: "Prequisites",
        desc: `HELLO IM GLAD YOU CAN EXPLORE AND READ.<br>
               So to start, you will be needing to install AHK V2 and TDSmacro Module from Github.<br>
               Dont forget to be smart and read README.md!`
    },
    {
        name: "Blahk?",
        desc: `Blahk is a web dedicated for supporting users to create macro using TDSmacro module.<br>
               Blahk is made with Blockly library (yes, the ones that blockly.games and scratch uses).<br>
               And those block is converted to Ahk Syntaxes. Blockly, Ahk. Y get it???`
    },
    {
        name: "Categories",
        desc: `Categories is an element containing with many functional blocks.<br>
               It serves one purpose. It is to differentiate block functions.<br>
               Imagine While blocks being in one category with Place blocks`
    },
    {
        name: "Blocks",
        desc: `Blocks is what you use to build your macro!<br>
               You dont have to learn the syntax to ahk or TDSmacro.<br>
               Just drag and drop, and make sure there's no bug 😁<br>
               Blocks is then converted to Ahk V2 Syntax.`
    },
    {
        name: "Save Load",
        desc: `It remembers you, even if you dont. <br>
               Save and Load is a system where you can save your progress if you have a life and cannot continue building the macro.<br>
               You later can access your save slot. Btw if you hadn't noticed, you can name your file!<br>
               If you accidentally saved a dumb slot containining the worst code know to man.<br>
               Just delete it 😁. YOUR ACTIONS CANNOT BE UNDONE.<br>
               DOWNLOAD THIS BEFORE MAKING YOUR MACRO`
    },
    {
        name: "Auto Save",
        desc: `As the name said. You shall not worry about your file getting erased when you forgot to save it, or accidentally reloads the page.<br>
               BUTT, Autosave only saved the blocks state which will be converted into codes.<br>
               Btw. Save and Autosave both got saved into <codeline>localStorage</codeline>.<br>
               Which means, you can only use it in one accounts and browser.`
    },
    {
        name: "Github Button",
        desc: `A direct link to TDSmacro github repository made by dajalepep.<br>
               It opens a new tab (dw about it being unsaved) and open the link.<br>
               There, you can open the Strategies folder and see the Strategies example!`
    },
    {
        name: "AHK Button",
        desc: `A direct link to AutoHotkey Download website. This is where you can donwload it.<br>
               Isn't it obvious bru? DOWNLOAD THIS BEFORE MAKING YOUR MACRO`
    },
    {
        name: "Copy & Download",
        desc: `Hello wise man. What a nice time to read.<br>
               Is your macro finished? and you want to use it.<br>
               You shall not worry. Because You can donwload it!<br>
               Press the copy button to copy your whole text.<br>
               Press the Download button to donwload you file.<br>
               Your file will be named after your file name. REMEMBER TO MOVE IT TO <codeline>/Strategies</codeline> folder.<br>
               Dont do any of those if you dont believe this web.<br>
               why would u use this web if you didnt believe it? `
    }
],
Events: [
    {
        name: "When [Key] Pressed",
        desc: `When the desired key is pressed, it will do all the code inside it<br>
               Uhh should i explain more?`

    },
    {
        name:"ExitApp()",
        desc:`It is used if you want to close your macro.<br>
              Usually Combined with When[Key]Pressed.<br>
              Or if you are onto something, you can do it with another block such as \'If\'`
    },
    {
        name:"Strategy Template",
        desc:`Wanna know something? It's Actually just while(true) 😲<br>
              Well with some extras that is not needed to explain.<br>
              It is just for making new coder have a starter idea on how to write it.<br>
              If the starter is complete, the rest is just building the macro which is easy🤑`
    }
],
Actions: [
    { 
        name: "Press [Key]", 
        desc: `Sends a single keypress, just like tapping that key once on your keyboard. <br>
                Useful for simple actions like pressing Enter to confirm something.<br>
                Will Press F1 key for you` 
    },
    { 
        name: "Type [Words]", 
        desc: `Automatically types out the text you enter, character by character, at a fast pace.<br>
                Great for filling in chat messages or text fields without typing manually.<br>
                If you want to type maps in TDSmacro its not needed because RestartMatch() function already handle it.<br>
                Buf if you want to build a new macro without TDSmacro lib, then use it as you like.` 
    },
    { 
        name: "Sleep [ms]", 
        desc: `Pauses the script for a set amount of time (in milliseconds) before moving to the next block.<br>
                1000ms = 1 second. Useful for waiting until something loads, finishes, or just for intentional delay.` 
    },
    { 
        name: "Click X, Y", 
        desc: `Clicks the mouse at a specific screen coordinate.<br>
                X controls the horizontal position. <br>
                Y controls the vertical position.<br> Both measured in pixels from the top-left corner.<br>
                <img src="https://cdn.phototourl.com/free/2026-07-19-607fa447-f7e5-4b33-adaa-cd661f089405.png"` 
    },
    { 
        name: "Move X, Y", 
        desc: `Moves the mouse cursor to a specific coordinate without clicking.<br>
                Handy when you just need to position the cursor first before doing something else.<br>
                X controls the horizontal position. <br>
                Y controls the vertical position. <br>Both measured in pixels from the top-left corner.<br>
                From now and on. I will not be explaining what X and Y okay?` 
    },
    { 
        name: "Hold [Key] For [ms]", 
        desc: `Presses and holds down a key for the duration you set, then releases it automatically.<br>
                Quite handy for actions that require holding a key, like walking to select map or something.` 
    },
    { 
        name: "Scroll Up / Down [times]", 
        desc: `Scrolls the mouse wheel up or down a set number of times.<br>
                Each "time" is one scroll click, similar to physically rolling the wheel once.<br>
                If you want your scroll strength to be increased or decreased. Check your mouse Settings ` 
    }
],
Logic: [
    { 
        name: "If / Else If / Else", 
        desc: `Runs a set of actions only if a condition is true. <br>
                You can add more branches (Else If) to check additional conditions.<br> 
                And for the final, Else that runs if none of them were true. <br>
                You can have as many Else if but only 1 If and one Else(Optional).<br>
                Click the gear icon on the block to add or remove branches.` 
    },
    { 
        name: "Compare", 
        desc: `Compares two numbers using ==, !=, <, >, >=, or <=, and returns true or false based on the result.<br>
                <table class="compareTable">
                <tr>
                    <th>Operator</th>
                    <th>Example</th>
                    <th>Returns</th>
                </tr>
                <tr><td>Equals</td><td>5 == 10</td><td>false</td></tr>
                <tr><td>Not equals</td><td>5 != 10</td><td>true</td></tr>
                <tr><td>Less than</td><td>5 &lt; 10</td><td>true</td></tr>
                <tr><td>Less than or equal</td><td>5 &lt;= 10</td><td>true</td></tr>
                <tr><td>Greater than</td><td>5 &gt; 10</td><td>false</td></tr>
                <tr><td>Greater than or equal</td><td>5 &gt;= 10</td><td>false</td></tr>
                </table>`
                
    },
    { 
        name: "True / False", 
        desc: `A fixed value that's always either true or false.<br>.
                Useful for testing logic, setting default states, or manually forcing a condition on or off.<br>
                To simplify it. true = Yes. false = no.` 
    },
    { 
        name: "AND / OR", 
        desc: `Combines two conditions into one. <br>
                'AND' is represented by && Symbol. It requires both condition to be true.<br>
                While 'OR' is represented by || symbol. It only requires at least one condition to be true
                ` 
    }
],

Loops: [
    { 
        name: "While", 
        desc: `Keeps repeating the actions inside as long as the condition stays true.<br>
                Once the condition becomes false, the loop stops and the script moves on.<br>
                Be careful, if the condition never becomes false, this will loop forever.<br>
                At some cases it can crash your pc lol. <br>
                To make it safe, at least add some Sleep() for intentional delay.
        ` 
    },
    { 
        name: "Loop [Count] times", 
        desc: `Repeats the actions inside for a fixed number of times you specify.<br>
                For example, setting it to 5 will run the actions exactly 5 times, then continue to the next code.<br>
                It's used if you want loop for a set amount of times and not relying on condition.<br>
                Pssssh. Use ArrayList.length + ArrayReference + A_Index` 
    },
    { 
        name: "Iteration/A_Index", 
        desc: `Returns the current repeat number of the loop it's inside, starting from 1 on the first run.<br>
                This block only works when placed inside a Loop block, using it outside will make your macro self destruct🥀` 
    },
    {
        name:"Break",
        desc:`Break is used to Stop Loops statement such as while and Loop.<br>
              <code>Loop 5 {<br>
              if (A_Index == 3) {<br>
              TDSmacro.PlaceTower(100,100,"1",300)<br>
              break<br>
              }</code><br>
              This code right here Place a tower if A_Index is 3, and break the loop.<br>
              Ik this seems pointless but this is just for example capiche?
              `
    }
],

Math: [
    { 
        name: "Arithmetic", 
        desc: `Performs a basic math operation (+, -, /, or *) between two numbers, A and B.<br>
                Select the operation you want from the dropdown, and the result can be used anywhere a number is needed.
                <table class="compareTable">
                <tr>
                    <th>Operator</th>
                    <th>Example</th>
                    <th>Returns</th>
                </tr>
                <tr><td>Addition</td><td>10 + 5</td><td>15</td></tr>
                <tr><td>Subtraction</td><td>10 - 5</td><td>5</td></tr>
                <tr><td>Division</td><td>10 / 5</td><td>2</td></tr>
                <tr><td>Multiplication</td><td>10 * 5</td><td>50</td></tr>
                </table>
                ` 
    },
    { 
        name: "Number", 
        desc: `A fixed numeric value that you type in directly. <br>
                This is the simplest way to give a number to any block that needs one.` 
    },
    { 
        name: "Round Down / Up / Round", 
        desc: `Rounds a decimal number to a whole number.<br>
                Round Down always rounds toward zero (4.9 becomes 4).<br>
                Round Up always rounds away from zero (4.1 becomes 5)<br>
                Round(just Round) rounds to the nearest whole number (4.6 becomes 5).` 
    },
    { 
        name: "Modulo", 
        desc: `Divides A by B and returns only the remainder.<br>
                Useful for cycling through a repeating pattern.
                <table class="compareTable">
                <tr>
                    <th>Example</th>
                    <th>Returns</th>
                </tr>
                <tr><td>Mod(10. 3)</td><td>1</td></tr>
                <tr><td>Mod(15, 4)</td><td>3</td></tr>
                <tr><td>Mod(20, 5)</td><td>0</td></tr>
                </table>` 

    },
    { 
        name: "Screen Height / Width", 
        desc: `Returns your screen's resolution in pixels. <br>
                For example 1080 for height or 1920 for width.<br>
                Use it for calculating positions using your screen height/width instead of hardcoding the numbers.` 
    },
    { 
        name: "Tick Count", 
        desc: `Returns the number of milliseconds since your system started up.<br>
                By saving this value at two different points and subtracting them.<br>
                You can measure how much time has passed between those points.<br>
                In TDSmacro.ahk, it is used to check your Insanity. If the macro is error for an amount of seconds, it will rejoin` 
    }
],

Text: [
    { 
        name: "Comment", 
        desc: `Adds a note inside your script for your own reference.<br>
                It doesn't affect how the script runs at all, purely there to help you remember what a part of your code does.<br>
                Can Also for other people to understands your code more.<br>
                And for Decorations :&gt` 
    },
    { 
        name: "Text", 
        desc: `Holds a fixed piece of text (a string) that you type in.<br>
                Use this whenever a block needs a text value, like a message to display or a word to type.` 
    },
    { 
        name: "Add String", 
        desc: `Joins two pieces of text together into one.<br>
                For example, combining "Hello" and "World" results in "HelloWorld".<br>
                Useful for building dynamic messages out of multiple parts.` 
    },
    { 
        name: "String Length", 
        desc: `Counts how many characters are in a piece of text, including spaces btw.<br>
                For example:<br>
                <table class="compareTable">
                <tr>
                    <th>Example</th>
                    <th>Returns</th>
                </tr>
                <tr><td>"HelloWorld"</td><td>11</td></tr>
                <tr><td>"Get A JOB"</td><td>9</td></tr>
                </table>` 
    }
],
TDS: [
    { 
        name: "Click Ready", 
        desc: `Automatically locates and clicks the Ready button to start the match.<br>
                Your TDSmacro will never do anything if the image hasn't been found` 
    },
    { 
        name: "Calibrate Camera", 
        desc: `Calibrates the camera position so the macro knows exactly where things are on screen.<br>
                This should always be one of the first things your macro does.<br>
                Skipping it may lead to some error with coords and location.<br>
                If your  fps is very low, it might shifts your camera abit left/right` 
    },
    { 
        name: "Restart On Lost/Triumph", 
        desc: `Watches for the end of a match and automatically restarts the macro based on your configured Goal.<br>
                If the outcome doesn't match your goal, it's treated as an error and will rejoin based on how many error you got.` 
    },
    { 
        name: "Place Tower", 
        desc: `Places a tower at the given X, Y location using the specified keybind, and checks that you can afford the given price before placing it.` 
    },
    { 
        name: "Select Tower", 
        desc: `Selects an already-placed tower at the given X, Y location.<br>
                Doing so makes you can perform actions on it like upgrading.` 
    },
    { 
        name: "Upgrade", 
        desc: `Upgrades the currently selected tower repeatedly until it reaches the level you specify.` 
    },
    {
        name: "AutoSkip",
        desc: `Stop all functions, detects the skip button, and then press it.<br>
               You can also set it to false to turn it off if you reach certain step.<br>
                 `
    },
    {
        name: "Change Passive",
        desc: `Change Passive is a function that let you change your tower passive.<br>
               What's passive? passive is like DJ track and merc unit queues!
               <code>TDSmacro.ChangePassive(1, true, 3)</code>
               The code up there will click the 3rd tower passive (Red track/Riots).
               <img src="images/Merc.png">`
    },
    {
        name: "Use Ability [Key]",
        desc: `Use Ablility function. Like it's name, it goes out from the upgrade tab.<br>
               After that it will press the desired key and click the previous tower back.`
    },
    {
        name: "Use AbilityPos",
        desc: `This version of Ability Func is made for easier use of the func.<br>
               Different than UseAbility, this is intended for people who want to
               use Hacker's Clone and Brawler's Repo.<br>
               <code>TDSmacro.UseAbility("F", 500, 200, true)</code><br>
               The code up there is the same with the previous one, but if the 2nd to 4th parameters is filled.<br>
               It will click the position desired. the last params is "place".<br>
               If it's not true, it will not place. But you shall not worry about that if you use this app.`
    }
],

Configuration: [
    { 
        name: "Goal", 
        desc: `Sets whether you're expecting to win (Triumph) or intentionally lose the match. <br>
                This tells the macro what counts as a successful run versus an error.` 
    },
    { 
        name: "Map", 
        desc: `Sets which map the macro should automatically select once a match begins.` 
    },
    { 
        name: "Difficulty", 
        desc: `Sets which difficulty the macro should automatically select when rejoining a match.` 
    },
    { 
        name: "Modifiers List", 
        desc: `A container that holds every Modifier block you want active. Modifier blocks must be placed inside this block to take effect.` 
    },
    {
        name: "Game Modes",
        desc: `Sets of dropdowns containing which gamemode you want to choose.<br>
               Which is Hardcore, PVP, Survival, Special Modes, and Sandbox.<br>
               The most used ones is Survival. Currently can be Hardcore and Survival.<br>
               `
    }
],
Array: [
    { 
        name: "Create ArrayList", 
        desc: `Creates a new list that can hold multiple locations (X, Y pairs).<br>
                Use the gear icon to add or remove how many location slots the list has.<br>
                For now it can only hold locations, idk what's to add more on ArrayList.` 
    },
    { 
        name: "X/Y Pair", 
        desc: `Represents one location entry (an X and Y coordinate) meant to be plugged into an ArrayList slot.` 
    },
    { 
        name: "Array Length", 
        desc: `Returns how many items are currently stored inside the array.<br>
                Useful for looping through every item without hardcoding the count.<br>
                Pssssh. Use ArrayList.length + ArrayReference + A_Index.<br>
                Wait i have said it didn't i?` 
    },
    { 
        name: "Take Value/ArrayReference", 
        desc: `Retrieves one specific value from the array based on the index (position) you specify.<br>
                ArrayList := [[100, 200], [300, 400]] There's 2 Data and each data have 2 values<br>
                ArrayList[1][1]. It will take A Value from Array/Variables named ArrayList,<br>
                Take the first Data, and The first Value. The result will be 100.` 
    },
    { 
        name: "Insert Value", 
        desc: `Adds a new X Y Locations pair into the end of an existing ArrayList. <br>
                Useful for building up a list of locations dynamically while the script runs.<br>
                It is used to make a new Locations using math instead of hardcoding it<br>
                You can see the example code clicking the Example button.` 
    }
],
Variables: [
    { 
        name: "Create Variable", 
        desc: `Creates a new variable through the button in the toolbox. <br>
                Once created, it becomes available in the dropdown of every variable block, and can be reused across your whole script.` 
    },
    { 
        name: "Set [Var] to [Value]", 
        desc: `Assigns a value to a variable, overwriting whatever it held before.<br>
                For example, setting "score" to 100 makes "score" equal 100 from that point onward.` 
    },
    { 
        name: "Change [Var] by [Value]", 
        desc: `Adds a value on top of what the variable already holds, instead of replacing it. <br>
                For example, if "score" is 100 and you change it by 5, "score" becomes 105.` 
    },
    { 
        name: "Get [Var]", 
        desc: `Retrieves the current value stored in a variable, so it can be plugged into other blocks that need a value, like Arithmetic or Compare.` 
    }
],
Functions: [
    { 
        name: "Define Function (no return)", 
        desc: `Creates a reusable group of actions with a name you choose.<br>
                This version doesn't send back any value, it just runs the actions inside it and finishes.<br>
                Great for repeated tasks like a custom placement routine.` 
    },
    { 
        name: "Define Function (with return)", 
        desc: `Same as a regular function, butt ends by sending back a value you specify.<br>
                Use this when you need the function to calculate or fetch something and hand the result back to wherever it was called from.` 
    },
    { 
        name: "Call Function (no return)", 
        desc: `Runs a function you've already defined by name. This version just executes the actions inside, it doesn't give back any value to use elsewhere.` 
    },
    { 
        name: "Call Function (with return)", 
        desc: `Runs a function that sends back a value, and lets you use that returned value directly, for example plugging it into an Arithmetic or Compare block.` 
    },
    { 
        name: "Return If", 
        desc: `MUST be placed inside a function, this checks a condition and immediately exits the function early if it's true.<br>
                Optionally sending back a value on the way out. Useful for stopping a function early once it has what it needs.` 
    },
],
Credits: [
    {
        name: "WebDev",
        desc: `HeeHee. YO. Im Anone the developer of this web.<br>
               Oh damn it was so fun building this web. It feels like 2 weeks of uneployment just go like that.<br>
               Mb all if there's syntax bug or something in this web.<br>
               My way to say sorry is to fix your buggy bugs.<br>
               Feel free to join our Discord Server for bug reports and such`
    },
    {
        name: "ModuleDev",
        desc: `Uhh idk what's to say so im just gonna be fart.<br>
               Im noskilluser or Irregular Essence.<br>
               idk just call me anything you like.`
    },
    {
        name: "Discord Server",
        desc: ` Well maybe the name itself explains it, but its for joining the discord server.<br>
                Discord Link: <a href="https://discord.com/invite/qd3w6GFXAw" target="_blank">Server</a>
                `
    },
    {
        name: `Channels`,
        desc: `The channels of Anone and Irregular Essence!<br>
               Anone: <a href="https://www.youtube.com/@Anone_Ru" target="_blank">Anone_Ru</a><br>
               Irregular: <a href="https://www.youtube.com/@noskilluser" target="_blank">noskilluser</a>`
    }
]
}

const guideBtn = document.getElementById('GuideWrapper');
const guideModal = document.getElementById('guideModal');
const guideTitle = document.getElementById('guideTitle');
const guideBlocks = document.getElementById('guideBlocks');
const guideCategoryList = document.getElementById('guideCategoryList');
const closeGuide = document.getElementById('closeGuide');

Object.keys(guideData).forEach(cat => {
  const btn = document.createElement('button');
  btn.className = 'catBtn';
  btn.textContent = cat;
  btn.dataset.cat = cat;
  btn.addEventListener('click', () => showCategory(cat));
  guideCategoryList.appendChild(btn);
});

function showCategory(cat) {
  guideTitle.textContent = cat;
  guideBlocks.innerHTML = '';
  guideData[cat].forEach(block => {
    const entry = document.createElement('div');
    entry.className = 'blockEntry';
    entry.innerHTML = `<h4>${block.name}</h4><p>${block.desc}</p>`;
    guideBlocks.appendChild(entry);
  });
  document.querySelectorAll('.catBtn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
}

guideBtn.addEventListener('click', () => {
  guideModal.classList.add('open');
  showCategory('Events');
});
closeGuide.addEventListener('click', () => guideModal.classList.remove('open'));
guideModal.addEventListener('click', (e) => {
  if (e.target === guideModal) guideModal.classList.remove('open');
});
