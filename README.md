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
  
**Test Used ReporTools**
```bash
<!-- #region app-container -->
	<body class="app background:grey justify:content-center align:items-middle">
		<!-- #region root -->
		<div class="root:container width:1000px height:600px scroll:auto">
			<!-- #region header -->
			<header class="group:header">
				<!-- #region title -->
				<section class="section padding:y-100%">
					<div class="size:1">
						<h1 class="letter:extra-large color:white font:family-verdana direction:center">Header</h1>
					</div>
				</section>
				<!-- #endregion title -->

				<!-- #region fields -->
				<section class="section background:purple-light padding:y-100% font:family-monaco">
					<!-- #region nav -->
					<div class="size:6">
						<ul class="list:landscape list:hover height:100% color:black font:size-100% font:transform-uppercase">
							<li class="list:item">
								<a href="#" target="_self">Home</a>
							</li>
							<li class="list:item">
								<a href="#" target="_self">Out Team</a>
							</li>
							<li class="list:item">
								<a href="#" target="_self">Projects</a>
							</li>
							<li class="list:item">
								<a href="#" target="_self">Contact</a>
							</li>
						</ul>
					</div>
					<!-- #endregion nav -->

					<!-- #region search -->
					<div class="size:10">
						<input class="text:extra-large text:hover" type="text" placeholder="Search query" autocomplete="off">
					</div>

					<div class="size:12 margin:x-50%">
						<button class="button:medium button:hover background:black color:white">Go!</button>
					</div>
					<!-- #region search -->
				</section>
				<!-- #endregion fields -->
			</header>
			<!-- #region header -->

			<!-- #region main -->
			<main class="group:body">
				<!-- #region hero -->
				<section class="section">
					<div class="size:5 background:white">
						<ul class="list:portrait">
							<li class="list:item direction:col">
								<h1>Article Heading</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid consequuntur</p>
							</li>
							<li class="list:item direction:col">
								<h2>Subsection</h2>
								<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet blanditiis perferendis, consequuntur cum delectus quae. Debitis impedit dolorum illum pariatur laudantium, ad accusamus deserunt quod at rerum doloremque minima facilis.</p>
							</li>
							<li class="list:item direction:col">
								<h2>Another subsection</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia hic voluptas vitae aspernatur qui error, tempora quod in aliquid quae provident suscipit reiciendis ipsum enim, nesciunt amet. Sequi, deserunt quisquam?</p>
							</li>
						</ul>
					</div>
					<!-- #endregion hero -->

					<!-- #region sidebar -->
					<div class="size:9 background:purple-light">
						<h1>Related</h1>

						<ul class="list:portrait list:hover">
							<li class="list:item">
								Oh i do like yo beside the seaside
							</li>
							<li class="list:item">
								Oh i do like yo beside the sea
							</li>
							<li class="list:item">
								Although in the North of England
							</li>
							<li class="list:item">
								It never stops raining
							</li>
							<li class="list:item">
								Oh well...
							</li>
						</ul>
					</div>
					<!-- #endregion sidebar -->
				</section>
			</main>
			<!-- #endregion main -->

			<!-- #region footer -->
			<footer class="group:footer">
				<section class="section background:white padding:100%">
					<div class="size:6">
						<span class="letter:small direction:start">©Copyright 2050 by nobody. All rights reserved</span>
					</div>
				</section>
			</footer>
			<!-- #endregion footer -->
		</div>
		<!-- #endregion root -->
	</body>
	<!-- #endregion app-container -->
```

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


**Icon's**
  - https://www.flaticon.es/
_____________________________________________________________________________________________________________________
# Contact 

**x3xploi7x**
  - Web: https://exploitnetwork.mx/home
  - Mail: exploitnetworkmx@gmail.com
  - LinkedId: edgar-gonzalez-06033516a
  - Phone: +528123932144
  - Location: Mexico
