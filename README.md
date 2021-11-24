# ReporTools
_____________________________________________________________________________________________________________________
**Build Fast - Reports, Page, Intranet To Office.**

**Description**
  - Concept Use Functional Paradigms Not Lost Memory In DOM.
  - Reactivity.
  - WebComponents [PopUp, Spinner, ToolBars, ToolTips].
  - Increase Performance In Coding.


**Usability**
  - Use { element__name } to refers ID in HTML5, most performance & easy research element's in load DOM.
  - Remove var's not use in development.


**Recommendations**
  - Don't use *.js, *.css, recommended .min files to fast performance.
  - Use transitions in input's.
_____________________________________________________________________________________________________________________
# Basic Struct

**Design Struct Used**
  ![image](https://user-images.githubusercontent.com/82796954/143270330-22dd5b86-52c0-4e02-aa5c-e258f5152ec8.png)


```bash
  <!--Root element-->
  <div class="app theme:light"
    <div class="root:container font:family-verdana font:transform-capitalize">
      <!--Specify header content-->
      <header class="group:header">
        <!--Add Rows-->
        <section class="section">
          <div class="size:4">
            <input class="text:small text:hover" type="text" placeholder="User">
            <input class="text:small text:hover" type="password" placeholder="Pass">
            <button class="button:extra-small button:hover background:blue-light">Click Me!</button>
          </div>
        </section>
      </header>
      <!--Specify body content-->
      <main class="group:body scroll:y-auto">
        <section class="section">
          <div class="size:1">
            <table class="table:normal table:stripped">
              <thead class="background:blue-light color:white">
                <tr>
                  <th class="padding:25%" colspan="3">User Information</th>
                </tr>
                <tr>
                  <th class="padding:50%">Name</th>
                  <th class="padding:50%">Last Name</th>
                  <th class="padding:50%">Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="padding:100%">Mark</td>
                  <td class="padding:100%">Zuckerberg</td>
                  <td class="padding:100%">28 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <!--Specify footer content-->
      <footer class="group:footer">
        <section class="section direction:center">
          <div class="size:6">
            <p class="letter:small color:grey-dark">Copyright 2021 @ExploitNetwork</p>
          </div>
        </section>
      </footer>
    </div>
  </div>
```
_____________________________________________________________________________________________________________________
# Examples

**TEST01_HOVER**
![HOVER_ELEMENTS](https://user-images.githubusercontent.com/82796954/137756492-e731443a-786b-4b9e-8844-32de4eec81d5.png)
_____________________________________________________________________________________________________________________
# Route Tree Project

```bash
├───.gitignore
├───build
│   ├───issues
│   └───test
└───src
    ├───dist
    │   ├───css
    │   └───js
    ├───env
    └───util
        └───assets
            ├───css
            │   ├───struct
            │   ├───theme
            │   └───typography
            ├───img
            │   └───Things
            └───js
                └───components
```
_____________________________________________________________________________________________________________________
# References

**Markdown Guide**
  - https://www.markdownguide.org/basic-syntax/


**ITCSS Guide**
  - https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/


**Developer Mozilla guide**
  - https://developer.mozilla.org/en-US/


**Can I Use Guide**
  - https://caniuse.com/
_____________________________________________________________________________________________________________________
# Contact 

**x3xploi7x**
  - Web: https://exploitnetwork.mx/home
  - Mail: exploitnetworkmx@gmail.com
  - LinkedId: edgar-gonzalez-06033516a
  - Phone: +528123932144
  - Location: Mexico
