# Webinar 4 (2019/06/18)
- A11y amendment
    - Use `label for` when you're using `label`
        - ```
            <div class="input-item">
                <label for="myInput">First Name:</div>
                <input id="myInput">
            </div>
    - Use `aria-labelledby` when you're using something like `div` or `span`
        - ```
            <div class="input-item">
                <div id="myLabel">First Name:</div>
                <input aria-labelledby="myLabel">
            </div>
- Intermediate JS
    - Event handlers/listeners
    - Different events (click, change, keyup, keydown)
- Using built-in functions and features
    - Callbacks
    - Scope
    - Template literals
    - Sets
    - Maps
    - Arrow functions
- Walkthrough of key object oriented Javascript concepts
    - Classes and objects
- Ajax calls
    - Zomato example
- Questions about working as a FED
    - What its like to work in the industry in Australia?
    - Is most of the work in full time employment, contract or freelance?
    - Are you expected to do the UI design yourself, or do you get mockups for a design team that you have to implement?
    - How can I find work in front end?
    - What's a typical developer interview process like?
        - Whiteboarding/[Lean Six Sigma](https://en.wikipedia.org/wiki/Lean_Six_Sigma)
        - Pair programming