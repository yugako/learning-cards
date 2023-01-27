export const codeQualityCards = [
  {
    question: 'Коли ти ревюваєш код, що ти дивишся?',
    answer: `
    (DRY, KISS, YAGNI, SOLID), should be documented & tested
    `,
    category: 'code-quality'
  },
  {
    question: 'В яких метриках ми можемо поміряти якість коду?',
    answer: `
Код ковередж, сладність коду (щми в сонарі), + кількість залежностей
Багато чого можна глянуть в SonarQube.
    <ul>
<li>
<strong>Reliability</strong>. It relates to the number of defects and availability of the software. The number of defects can be measured by running a static analysis tool. Software availability can be measured using the mean time between failures (MTBF).</li>
<li>
<strong>Maintainability</strong>. You can’t use a single metric to ensure maintainability. Some metrics you may consider to improve maintainability are the number of stylistic warnings and Halstead complexity measures.</li>
<li>
<strong>Testability</strong>. Testability can be measured based on how many test cases you need to find potential faults in the system. The size and complexity of the software can impact testability.</li>
<li>
<strong>Portability</strong>. Portability measures how usable the same software is in different environments. It relates to platform independence. There isn’t a specific measure of portability.</li>
<li>
<strong>Reusability</strong>. Reusability can be measured by the number of interdependencies. Running a static analyzer can help you identify these interdependencies.</li>
</ul>
`,
    category: 'code-quality'
  },
  {
    question: 'Які є типи тестування? + різниця і приклади',
    answer: `
<img alt="" class="ce md me c" width="600"  src="https://miro.medium.com/max/875/1*xFo_YdGdVuueZBC0LEUXGg.jpeg">
<br>
<img width="600" src="https://static.javatpoint.com/tutorial/software-testing/images/types-of-software-testing.png" alt="Types of Software Testing">
    `,
    category: 'code-quality'
  },
  {
    question: 'Як потрібно тестувати компоненти? чи треба тестувати вюшку? Чи тільки тестувати паблік методи чи прайват теж?      ',
    answer: ``,
    category: 'code-quality'
  },
  {
    question: 'ЯК тестувати вюшку?',
    answer: `
    Черз підхід з гетерами, або тестуємо публічні методи з класу які шось генерують на вюшку`,
    category: 'code-quality'
  },
  {
    question: 'Які речі є додатові в тестінг піраміді? або які ще є піраміди?',
    answer: `
Ісе-cream + мануальні тести - Амвей к приклад <br>
    <img alt="" class="ce md me c" width="600" src="https://miro.medium.com/max/875/1*x4mUTSh7ZkYrNZFHO7W9Hw.jpeg">
    `,
    category: 'code-quality'
  },
  {
    question: 'TDD && BDD ',
    answer: `
    TDD (Test Driven Development) — Разработка на основе тестов.
<br>
BDD (Behavior Driven Development) — Разработка на основе поведения.
<br>
BDD, на самом деле, является расширением TDD-подхода. Тем не менее, они предназначены для разных целей и для их реализации используются разные инструменты. В разных командах эти понятия могут интерпретировать по-разному, и часто возникает путаница между ними.`,
    category: 'code-quality'
  },
  {
    question: 'Що саме тестує TDD а що BTD',
    answer: `
    <ul class=""><li id="720e" class="lb lc ig jf b jg kw jk kx jo ld js le jw lf ka lg lh li lj gh" data-selectable-paragraph="">TDD хорошо подходит для юнит-тестирования, т.е. для проверки работы отдельных модулей самих по себе. BDD — для интеграционного (т.е. для проверки, как отдельные модули работают друг с другом) и e2e (т.е. для проверки всей системы целиком) тестирования.</li><li id="253c" class="lb lc ig jf b jg lk jk ll jo lm js ln jw lo ka lg lh li lj gh" data-selectable-paragraph="">TDD: тесты сразу реализуются в коде, для BDD чаще всего описываются шаги на языке, понятном всем, а не только разработчикам.</li><li id="2982" class="lb lc ig jf b jg lk jk ll jo lm js ln jw lo ka lg lh li lj gh" data-selectable-paragraph="">TDD: юнит-тесты пишут сами разработчики. BDD требует объедения усилий разных членов команды. Обычно тест-кейсы (шаги) описываются ручным тестировщиком или аналитиком и воплощаются в код тестировщиком-автоматизатором. В нашей команде мы (фронтенедеры) описываем шаги вместе с тестировщиками, а код тестов пишет фронтенд-команда.</li><li id="f8a8" class="lb lc ig jf b jg lk jk ll jo lm js ln jw lo ka lg lh li lj gh" data-selectable-paragraph="">TDD проверяет работу функций, BDD — пользовательские сценарии.</li></ul>
    `,
    category: 'code-quality'
  },
  {
    question: 'Given-When-Then',
    answer: `

    The essential idea is to break down writing a scenario (or test) into three sections:
    <ul>
<li>The <b>given</b> part describes the state of the world before
    you begin the behavior you're specifying in this scenario. You can
    think of it as the pre-conditions to the test.</li>

<li>The <b>when</b> section is that behavior that you're
    specifying.</li>

<li>Finally the <b>then</b> section describes the changes you
    expect due to the specified behavior. </li>
</ul>
    `,
    category: 'code-quality'
  },
  {
    question: 'Whats FIRST principle?',
    answer: `
    <div class="markdown-body">
                <h1><a id="user-content-first-principles-of-testing" class="anchor" aria-hidden="true" href="#first-principles-of-testing"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>F.I.R.S.T principles of testing</h1>
      <ol>
      <li>Fast</li>
      <li>Isolated/Independent</li>
      <li>Repeatable</li>
      <li>Self-validating</li>
      <li>thorough</li>
      </ol>
      <h2><a id="user-content-fast" class="anchor" aria-hidden="true" href="#fast"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Fast</h2>
      <p>The developer shouldn’t hesitate to run the unit tests. Tests should run in a matter of seconds.</p>
      <h2><a id="user-content-isolatedindependent" class="anchor" aria-hidden="true" href="#isolatedindependent"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Isolated/Independent</h2>
      <ul>
      <li>For any given unit test, for its environment variables or for its setup.</li>
      <li>SHould be divided into three parts according to AAA pattern:
      <ul>
      <li>
      <strong>Arrange</strong>. All the data should be provided to the test when you’re about to run the test and it should not depend on the environment you are running the tests.</li>
      <li>
      <strong>Act</strong>. Invoke the actual method under test.</li>
      <li>
      <strong>Assert</strong>. At any given point, a unit test should only assert one logical outcome, multiple physical assertions can be part of this physical assertion, as long as they all act on the state of the same object.</li>
      </ul>
      </li>
      </ul>
      <h2><a id="user-content-repeatable" class="anchor" aria-hidden="true" href="#repeatable"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Repeatable</h2>
      <ul>
      <li>tests should be repeatable and deterministic, their values shouldn’t change based on being run in different environments.</li>
      <li>Each test should set up its own data and should not depend on any external factors to run its test</li>
      </ul>
      <h2><a id="user-content-self-validating" class="anchor" aria-hidden="true" href="#self-validating"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Self-validating</h2>
      <p>You shouldn’t need to check manually, whether the test passed or not.</p>
      <h2><a id="user-content-thorough" class="anchor" aria-hidden="true" href="#thorough"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Thorough</h2>
      <ul>
      <li>Should cover all the happy paths</li>
      <li>Try covering all the edge cases, where the author would feel the function would fail.</li>
      <li>Test for illegal arguments and variables.</li>
      <li>Test for security and other issues</li>
      <li>Test for large values, what would a large input do their program.</li>
      <li>Should try to cover every use case scenario and not just aim for 100% code coverage.</li>
      </ul>
      <h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
      <ul>
      <li><a href="https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6" rel="nofollow">F.I.R.S.T principles of testing</a></li>
      </ul>

              </div>
    `,
    category: 'code-quality'
  },
  {
    question: 'Unit testing AAA patern',
    answer: `
    he AAA (Arrange-Act-Assert) pattern has become almost a standard across the industry. It suggests that you should divide your test method into three sections: arrange, act and assert. Each one of them only responsible for the part in which they are named after.

So the arrange section you only have code required to setup that specific test. Here objects would be created, mocks setup (if you are using one) and potentially expectations would be set. Then there is the Act, which should be the invocation of the method being tested. And on Assert you would simply check whether the expectations were met.`,
    category: 'code-quality'
  },
  {
    question: 'Які існують Quality Gates?',
    answer: `
    <div class="markdown-body">

    <h2><a id="user-content-code-quality-gates" class="anchor" aria-hidden="true" href="#code-quality-gates"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Code quality gates</h2>
    <img src="code-quality/images/quality-gates.png" width="600px">
    <p>An example is demonstrated in the picture. We can assure performance, linters, validations of tools like Sonar Cube and other things here.</p>
    <h2><a id="user-content-the-way-to-improve-code-quality" class="anchor" aria-hidden="true" href="#the-way-to-improve-code-quality"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>The way to improve code quality</h2>
    <ol>
    <li>Use a coding standard.</li>
    <li>Analyze code — before code reviews (linters).</li>
    <li>Follow code review best practices.</li>
    <li>Refactor legacy code (when necessary).</li>
    </ol>
    <h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
    <ul>
    <li><a href="https://www.perforce.com/blog/sca/what-code-quality-and-how-improve-code-quality" rel="nofollow">What Is Code Quality? And How to Improve Code Quality</a></li>
    </ul>

              </div>
    `,
    category: 'code-quality'
  },
  {
    question: 'Lint VS Prettier - Що за що відповідає',
    answer: `
    <ul class=""><li id="8c52" class="od oe jh lk b ll lm lo lp lr of lv og lz oh md oi oj ok ol gg" data-selectable-paragraph="">ESlint is not only a code formatter, it also helps developers to find coding errors. For Example, ESLint will give you a warning if you use a variable without declaring it. Prettier doesn't have such an ability.</li><li id="3384" class="od oe jh lk b ll om lo on lr oo lv op lz oq md oi oj ok ol gg" data-selectable-paragraph="">Also, ESLint will let you know what’s wrong with your code formatting and give you options to fix the issue. Then you can select one from those options. Prettier, on the other hand, doesn't care about you at all. It simply formats all your code to a different structure format-wise.</li><li id="a895" class="od oe jh lk b ll om lo on lr oo lv op lz oq md oi oj ok ol gg" data-selectable-paragraph="">On the other hand, this whole rewriting process in Prettier prevents the developer from making any mistakes.</li><li id="d20c" class="od oe jh lk b ll om lo on lr oo lv op lz oq md oi oj ok ol gg" data-selectable-paragraph=""><a class="au nj" href="https://eslint.org/docs/rules/max-len" rel="noopener ugc nofollow" target="_blank">max-len</a>, <a class="au nj" href="https://eslint.org/docs/rules/no-mixed-spaces-and-tabs" rel="noopener ugc nofollow" target="_blank">no-mixed-spaces-and-tabs</a>, <a class="au nj" href="https://eslint.org/docs/rules/keyword-spacing" rel="noopener ugc nofollow" target="_blank">keyword-spacing</a>, <a class="au nj" href="https://eslint.org/docs/rules/comma-style" rel="noopener ugc nofollow" target="_blank">comma-style</a> are some popular formatting rules in Prettier.</li><li id="c6d7" class="od oe jh lk b ll om lo on lr oo lv op lz oq md oi oj ok ol gg" data-selectable-paragraph="">In addition to the above type of rules, ESLint also considers code quality rules such as <a class="au nj" href="https://eslint.org/docs/rules/no-unused-vars" rel="noopener ugc nofollow" target="_blank">no-unused-vars</a>, <a class="au nj" href="https://eslint.org/docs/rules/no-extra-bind" rel="noopener ugc nofollow" target="_blank">no-extra-bind</a>, <a class="au nj" href="https://eslint.org/docs/rules/no-implicit-globals" rel="noopener ugc nofollow" target="_blank">no-implicit-globals</a>, <a class="au nj" href="https://eslint.org/docs/rules/prefer-promise-reject-errors" rel="noopener ugc nofollow" target="_blank">prefer-promise-reject-errors</a>.</li></ul>
    `,
    category: 'code-quality'
  },
  {
    question: 'Які є Готові кнфігурації прітієра',
    answer: `A Prettier configuration based off the Airbnb JavaScript style guide, google conf`,
    category: 'code-quality'
  },
  {
    question: 'Які є аналоги сонар кюбу?',
    answer: `<div class="di3YZe"><div class="co8aDb" aria-level="3" role="heading"><b>Top 10 Alternatives to SonarQube</b></div><div class="RqBzHd"><ul class="i8Z77e"><li class="TrT0Xe">Embold.</li><li class="TrT0Xe">GitHub.</li><li class="TrT0Xe">GitLab.</li><li class="TrT0Xe">Coverity.</li><li class="TrT0Xe">Checkmarx.</li><li class="TrT0Xe">Klocwork.</li><li class="TrT0Xe">Veracode Application Security Platform.</li><li class="TrT0Xe">DeepSource.</li></ul><div class="u9iNfb"></div></div></div>`,
    category: 'code-quality'
  },
  {
    question: 'Які ми метрики можемо витягнути з сонару? ',
    answer: ``,
    category: 'code-quality'
  },
  {
    question: 'Що таке код смел? ПРиклади',
    answer: `
Code smells are not bugs or errors. Instead, these are absolute violations of the fundamentals of developing software that decrease the quality of code.
    <ul class="default-list">
 <li>duplicate code</li>
 <li>dead code</li>
 <li>long methods</li>
 <li>long parameter list</li>
 <li>comments</li>
 <li>unnecessary primitive variables</li>
 <li>data clumps</li>
</ul>`,
    category: 'code-quality'
  },
  {
    question: 'What\'s Code Review checklist?',
    answer: `

    Code review checklist. A checklist helps you to create a structured approach to code reviews. Also, they remind you of all the quality checks you need to perform to approve code into the codebase. You can include many specific items into your code review checklist.

<br>

<div id="code_block-139-10331" class="ct-code-block width--full blog-postcontent">

<h2 id="things-to-add">What to Add to Your Code Review Checklist</h2>
<p>Let's start with some of the items I think are indispensable in a code review checklist.</p>

<h5>1. Identify Obvious Bugs</h5>
<h5>2. Look for Possible Security Issues</h5>
<h5>3. Look for "Clever" Code</h5>
<h5>4. Check for Code Duplication</h5>
<h5>5. Check Whether Names Are Descriptive Enough</h5>
<h5>6. Look for Possible Performance Improvements</h5>
<h5>7. Check the Presence and Quality of Tests</h5>
<h5>8. Explain Your Changes</h5>
<h5>9. Optional: Code Documentation</h5>

<h2 id="things-to-remove">What to Remove from Your Code Review Checklist</h2>

<h5>1. Cosmetic Concerns</h5>
<h5>2. Testing</h5>
</div>
    `,
    category: 'code-quality'
  },
  {
    question: 'Whats code quality ladder?',
    answer: `
    <div class="markdown-body">
                <h1><a id="user-content-code-quality-ladder" class="anchor" aria-hidden="true" href="#code-quality-ladder"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Code Quality Ladder</h1>
<p>Let's climb to these steps from level one to four.</p>
<ol>
<li>Correctness</li>
<li>Efficiency</li>
<li>Readability</li>
<li>Extensibility</li>
</ol>
<h2><a id="user-content-correctness" class="anchor" aria-hidden="true" href="#correctness"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Correctness</h2>
<p>Code should be testable. You should understand the way you will test it and all the edge cases. Validate the input. Handle the exceptions.</p>
<h2><a id="user-content-efficiency" class="anchor" aria-hidden="true" href="#efficiency"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Efficiency</h2>
<p>Consider time efficiency, space efficiency, user interaction efficiency, etc.
Time efficiency is <code>O(n)</code> (Big-O notation) with taking into account size <code>n</code> and constant <code>k</code>.</p>
<p>The goal when writing any code is to be as efficient as possible under the given constraints.</p>
<p>Overdoing is bad too. This is known as "premature optimization" and should be avoided. Only optimize what you need to optimize.</p>
<h2><a id="user-content-readability" class="anchor" aria-hidden="true" href="#readability"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Readability</h2>
<p>The code you write is not yours. It belongs to your team (or even other teams).</p>
<p>A common industry practice used to get teams on the same page is called a coding style guide.</p>
<p>The most important thing is for your team’s code to be consistent. Your teammates will be the judge of your code’s readability</p>
<h2><a id="user-content-extensibility" class="anchor" aria-hidden="true" href="#extensibility"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Extensibility</h2>
<p>If you make your code too specific, the use case will be limited and every time the requirement changes, the code will need to be modified. If you make your code too generic, your clients need to do a lot to build on top of your code for their specific needs, and then it’s too difficult to use.</p>
<h2><a id="user-content-links" class="anchor" aria-hidden="true" href="#links"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a><em>Links</em></h2>
<ul>
<li><a href="https://medium.com/leap-ai/climbing-the-code-quality-ladder-babd3198e6e2" rel="nofollow">Climbing The Code Quality Ladder</a></li>
</ul>

              </div>
    `,
    category: 'code-quality'
  },
  {
    question: 'Whats tech debt?',
    answer: `
    “Technical debt is the cost of technical decisions that are made for the immediacy, simplicity, or [budget] that, while easy today, will slow you down or increase your operational costs/risks [over time]. Most often it’s related to technical products, but can be found in most business processes and use cases. Many times this technical debt can turn into ‘human spackle,’ where knowledge workers do repetitive tasks that could be automated.” –Justin Brodley, VP
A good example of this is Uncle Bob's post saying a mess is not a debt. His argument is that messy code, produced by people who are ignorant of good design practices, shouldn't be a debt. Technical Debt should be reserved for cases when people have made a considered decision to adopt a design strategy that isn't sustainable in the longer term, but yields a short term benefit, such as making a release. The point is that the debt yields value sooner, but needs to be paid off as soon as possible.
<br><br>
Deliberate and reckless<br>
Deliberate and reckless technical debt happens when the team knows that a particular decision will result in tech debt but still moves forward because it prioritizes speed over quality.
<br>
Deliberate and prudent<br>
Like the previous type, the deliberate and prudent technical debt happens when the team knows that a decision will cause tech debt but moves forward anyway. But unlike reckless debt, in this case, the decision is made after analyzing all the consequences.
<br>
Inadvertent and reckless<br>
Inadvertent and reckless technical debt is the most harmful type of debt. It happens when the team doesn’t have enough experience and blindly implements a solution without realizing they’re getting into debt.
<br>
Inadvertent and prudent<br>
Inadvertent and prudent technical debt happens when a knowledgeable team applies best practices during the software development but inadvertently generates technical debt due to unseen coding mistakes. However, the team can identify and pay the technical debt later on due to their skills.
    `,
    category: 'code-quality'
  },
  {
    question: 'Як переконати кастомера що нам потрібні тести чи рефакторинг?',
    answer: ``,
    category: 'code-quality'
  },
]
