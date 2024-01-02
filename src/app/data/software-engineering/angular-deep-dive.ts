export const angularDeepDiveCards = [
  {
    question: 'Що таке Dependency injection? (injection tree, providedIn vs providers list)',
    answer: `
       <p>Dependency injection is a pattern that manages how and where our dependencies should be instantiated.
       It means that your class is not responsible for direct creating instance of dependency, now it's responsibility of
       some other entities. Using DI we can significantly reduce coupling between our classes and have more readable and maintainable code.</p>

       <p>When Angular tries to resolve some dependency it is looking through injection tree where are injectors are hierarchically located
       It starts from element injectors tree that goes above to module tree. And if no injectors, it throws null injector error.</p>
    `,
    category: 'angular-deep-dive'
  },
  {
    question: 'Що таке Inversion of control?',
    answer: `
      <p>Abbr IoC stands for inversion of control. This pattern includes dependency injection. </p>
      <p>The main idea is: code shouldn't decide when and where to instantiate objects.
      It's better to trust it to a controlling framework, a library, or your dedicated module.
      Either of them is generally called a container.
      So container plays a controlling role: knows and care about objects lifetime, allocates and eliminates them.</p>
    `,
    category: 'angular-deep-dive'
  },
  {
    question: 'Що таке lightweight mechanism?',
    answer: `
      It's a mechanism for bundle optimization. By providing dependency using lightweight injection token we can make these dependency tree-shakable.
    `,
    category: 'angular-deep-dive'
  },
  {
    question: 'Що таке Change Detection? (change detector/ change detector tree)',
    answer: `The main job of the change detection mechanism is to detect the state changes and reflect the change in the User Interface.
    <br> There are two main building blocks of change detection in Angular:
<br>
 - a component view<br>
- the associated bindings<br>
`,
    category: 'angular-deep-dive'
  },
  {
    question: 'Що таке tree-shaking? Чи завжди працює? коли зявилось?',
    answer: `It appeared with Angular 8 with introducing IVY render engine. Tree-shaking it is mechanism to exclude code that is not
     using in final bundle`,
    category: 'angular-deep-dive'
  },
  {
    question: 'Change detection strategies.',
    answer: `
      - Default: trigger CD on everything ( events, input, setTimeout, etc ) <br/ >
      - On Push: triggers only when: input prop reference change, events, asyncPipe, setTimeout.
    `,
    category: 'angular-deep-dive'
  },
  {
    question: 'NgZone/ run out zone, attach/detach?\n',
    answer: `
      - runOutsideAngular add a possibility to run code outside zone context to avoid unnecessary CD triggers <br />
      - attach - make component visible to change detection mechanism <br />
      - detach - make component invisible to change detection mechanism
    `,
    category: 'angular-deep-dive'
  },
  {
    question: 'How to run change detection?',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Change detection ref/ 3 methods',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Monkey patching',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Чи можемо ми повністю викинути zone.js з бандлу і працювати без неї',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'RxJS - Pros & Cons',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'NgRx - Pros & Cons',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Component store',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Security in Angular',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Performance in Angular',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Міграція з 1 до 2 ангуляру + обгрунтування чому. Як переконати замовника \n',
    answer: ``,
    category: 'angular-deep-dive'
  },
  {
    question: 'Нові фічі в ангулярі',
    answer: ``,
    category: 'angular-deep-dive'
  },
]
