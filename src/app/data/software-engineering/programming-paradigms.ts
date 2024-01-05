export const programmingParadigmsCards = [
  {
    question: 'Що таке Abstraction?',
    answer: `The process of generalization (also modeling). We replace a particular thing by its more general model. Allow us not to be coupled with implementation details, to use any implementation, satisfying specific interface.
An abstract class is a class with at least one abstract method. Abstract class's non-abstract methods can have implementations, but a class itself can't.
An interface is an abstract class, which methods are only abstract.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Polymorphism?',
    answer: `Is an ability to have different forms for the same object's property. Applicable to the OOP, it's a possibility to call a method with a specific name and get different results depending on the call's details.
We can determine:
static (compile-time) polymorphism / overloading:
one method of one class has several implementations depending on its params;
dynamic (run time) polymorphism / overriding
several methods in the relations subclass-superclass can have different implementations with exactly the same name and params, so subclass's method overrides superclass's method.
In JS, classes are all runtime, so there is no static polymorphism. But we can have it for TS as well with interfaces.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Inheritance?',
    answer: `Is an ability of a class/object to take some properties from another class/object. In both classical OOP, and JS we can inherit a whole method. As for fields: in classical OOP, we can only inherit its name and type - in JS, we can inherit a field value in addition.
Types:
single (superclass -> subclass)
multilevel (superclass -> subclass -> subsubclass)
hierarchical (superclass -> (subclass1 subclass2))
multiple ((superclass1 superclass2) -> subclass)
hybrid (mix of above)`,
    category: "programming-paradigms"

  },
  {
    question: 'Що таке Encapsulation?',
    answer: 'Is hiding information inside a particular namespace (container) to limit direct communication with it. We can have one object/class consisting of different variables and functions. Encapsulation prevents or restricts (e.g., read but not write) interaction with some of them.',
    category: "programming-paradigms"
  },
  {
    question: 'Типи Поліморфізму.',
    answer: 'We can determine:<br>' +
      '<br>' +
      'static (compile-time) polymorphism / overloading:<br>' +
      'one method of one class has several implementations depending on its params;<br>' +
      'dynamic (run time) polymorphism / overriding<br>' +
      'several methods in the relations subclass-superclass can have different implementations with exactly the same name and params, so subclass\'s method overrides superclass\'s method.<br>' +
      'In JS, classes are all runtime, so there is no static polymorphism. But we can have it for TS as well with interfaces.`<br>',
    category: "programming-paradigms"

  },
  {
    question: 'Що таке композиція? В контексті програмування',
    answer: 'Function composition is the process of combining two or more functions in order to produce a new function or perform some computation. For example, the composition f . g (the dot means “composed with”) is equivalent to f(g(x)) in JavaScript. Understanding function composition is an important step towards understanding how software is constructed using the functional programming. ' +
      '' +
      'OR'+
      `is a mechanism for combining functions, in which the output of each function is passed into the next one, and the output of the last function is the final result.
Sometimes it's hard to read multiply nested functions in a composition, so it's a bit more clear with the helpers like compose.
A useful method for function composition in JavaScript is reduceRight.`,
    category: "programming-paradigms"

  },
  {
    question: 'Обєктна композиція що це таке?',
    answer: '',
    category: "programming-paradigms"

  },
  {
    question: 'Composition over inheritance<br>',
    answer: `Software development is mostly about a function composition or an object composition. Hence we compare it with inheritance let's talk about object composition here. It refers to combining objects into more complex ones.
Cons of inheritance:
The tight coupling problem: Because child classes are dependent on the implementation of the parent class, class inheritance is the tightest coupling available in object-oriented design.
The fragile base class problem: Due to tight coupling, changes to the base class can potentially break a large number of descendant classes — potentially in code managed by third parties. The author could break code they’re not aware of.
The inflexible hierarchy problem: With single ancestor taxonomies, given enough time and evolution, all class taxonomies are eventually wrong for new use-cases.
The duplication by necessity problem: Due to inflexible hierarchies, new use cases are often implemented by duplication, rather than extension, leading to similar classes which are unexpectedly divergent. Once duplication sets in, it’s not obvious which class new classes should descend from or why.
The gorilla/banana problem: “…the problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle.” ~ Joe Armstrong, “Coders at Work”
Function composition is very similar to object composition and has its pros over an inheritance.`,
    category: "programming-paradigms"
  },
  {
    question: 'Як можна атоматизувати функціональну композицію?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Pure function?',
    answer: `Pure function is a function which returns the same result for the same arguments and dont have
     any side effects. We can decide as side effects such things console.log or reassigning some variable in another scope.
     So, should not write any data in console, alerts etc and it should not interact with other scopes.
     `,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке ідемпотична функція?',
    answer: 'A function is said to be idempotent if it returns the same output for the same input or does what we expect it to do. Idempotence is different from pure function as it allows side effects. An example could be calling an API with an input and returning the same output no matter how many times it has been called.',
    category: "programming-paradigms"

  },
  {
    question: 'Whats referential transparency?',
    answer: `Referential transparency
is a property of an expression to stay the same after replacing it with its corresponding value (and vice-versa). Pure functions are always referentially transparent, and we can easily replace them with their output.`,
    category: "programming-paradigms"

  },
  {
    question: 'Що таке first class functions/ citizens?',
    answer: 'In case of first class functions we decide function like an variable and can operate it',
    category: "programming-paradigms"
  },
  {
    question: 'Як зрозуміти що мова володіє фірс-класс фанкшинами?',
    answer: 'To check whether programming language supports first-class functions we can create variable and assign some function to it. If it works OK, this means that language supports first class functions',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке high order functions (HOF)?',
    answer: 'HOF is a function which accepts function and/or return another function. Examples: array methods (map, filter), bind, pipe',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке immutability? ',
    answer: `Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values
      Immutables are the objects whose state cannot be changed once the object is created.
      One of great examples is NgRx store which returns the new instance of store state.
      We can use Object.freeze to make object immutable. Also we can use defineProperty object function to set such properties as writeable and configurable to config some elements in object or array`
      + '<br><br> Another explanation: <br>'  +`Immutability in OOP and FP is a property of an object state being unable to change.
<br><br>
Weak immutability
The state of an object consists of two parts: its fields (shape/type) and its values (appearance/instance). If an object's shape cannot be changed but its appearance can - we call this weak immutability. In JavaScript, objects are high mutable by design. We can alter their shape as well as their appearance.
<br><br>
Strong immutability
In contrast, strong immutability means the impossibility of changing anything about an object's state, neither fields nor values. In JavaScript, under the hood, e.g., strings are strongly immutable (but in the language user's point of view, all the primitives in JS are weakly immutable till you do not force them to strong immutability with the const keyword).`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Шеред стейт?',
    answer: 'A shared state is any variable, object, or memory space that exists in a shared scope. Any non-constant variable used by multiple separate scopes, including the global scope and closure scopes, is considered to be in a shared state. In functional programming, shared states should be avoided. A shared state prevents a function from being pure. When the shared state rule is violated and the program modifies a variable, a side effect is created. In OOP, shared states are often passed around as objects. OOP functions may modify the shared state. This is very much against functional programming rules.',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Raise condition?',
    answer: 'A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly.<br>' +
      '<br>' +
      'A simple example of race condition would be one light source that is attached to two different light controllers. When we target the light source with two simultaneous actions - one switches on, and the other switches off. The uncertain end result whether the light source is on or off.<br>' +
      '<br>' +
      'JavaScript asynchronization can\'t be in parallel as JavaScript executes on a single thread, but it works with concurrency.'+
      `This is why usually it is better to combine both solutions.
Cancel the previous unneeded request: it will free up the server of handling the unneeded request
In a case that only the last request is needed, save a session object and handle only the request with the correct session.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке рекурсія?',
    answer: `Recursion is a process of calling itself. A function that calls itself is called a recursive function.
    A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely.<br>
Tailed recursion<br>
is about a recursive function which calls itself in exactly the last step of executing.
<br>
Pros and Cons
+ If it's pure, intermediate results can be cached.
+ Tailed recursive function can be transformed to cycle by compiler (in some languages, including JavaScript).
+ Easier to read solution of problem.
- Possible performance issues (each step allocates the whole function environment in memory again).
- Limited in calls number.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що вигідніше рекурсія чи ітерація?',
    answer: 'Iteration. If we are not running through some tree',
    category: "programming-paradigms"
  },
  {
    question: 'Execution context stack',
    answer: 'The Execution Stack, also known as the Call Stack, keeps track of all the Execution Contexts created during the life cycle of a script. JavaScript is a single-threaded language, which means that it is capable of only executing a single task at a time.',
    category: "programming-paradigms"
  },
  {
    question: 'Чого бракує в джс для рекурсії на відміну від інших функціональних мов?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'What is tail call optimization?',
    answer: `Tail Call Optimization is related to a specific type of optimization that can occur with function calls. According to Kyle Simpson, a tail call is a function call that appears at the tail of another function, such that after the call finishes, there’s nothing left to do.
Tail code optimization takes a recursive function and generate an iterative function using “goto” internally, and then execute it. It does not limit the stack calls because there are none and the function is not a recursive function more. The performance of this iterative function is equivalent to its recursive function.
In other words, tail call optimization means that it is possible to call a function from another function without growing the call stack.`,
    category: "programming-paradigms"
  },
  {
    question: 'Що таке Currying and Partially Application?',
    answer: 'Currying: A function returning another function that might return another function, but every returned function must take only one parameter at a time. Partial application: A function returning another function that might return another function, but each returned function can take several parameters.',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке фанктор?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке МОнада?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Плюси і мінуси ООП',
    answer: `
    Advantages:
    We can reuse the code multiple times using class
    Inherit the class to subclass for data redundancy
    It is easy to maintain and modify
    It maintains the security of data
    Low-cost development
    Disadvantages
    Size is larger than other programs
    It required a lot of effort to create
    It is slower than other programs
    It is not suitable for some sorts of problems
    It takes time to get used to it.`,
    category: "programming-paradigms"
  },
  {
    question: 'Плюси і мінуси функціонального програмування',
    answer: `FP pros and cons
Disadvantages
There is no efficient vocabulary for functional languages. Purely functional vocabularies work slower than the hash tables, and for some applications, this can be critical. Secondly, there is no purely functional weak hash map. Nevertheless, for most developers, this defect may remain unnoticed.
Functional programming is not suitable for algorithms in graphs (due to slow work) and in general for those solutions that for decades were based on imperative programming.
Check the lists of FP disadvantages on Quora and in the article by Alexander Alvin too.
Okay, the last point we mentioned is not very related to cons because we cannot blame functional programming for what it was not meant to be.
Advantages
Functional programming is famous for its high-level abstractions that hide a large number of details of such routine operations like iterating. This makes the code shorter and, as a consequence, guarantees a smaller number of errors that can be tolerated.
In the functional programming, there is a smaller number of language primitives. Well-known classes are not used in FP. Instead of creating a unique description of an object with operations in the form of methods, in functional programming, there are several basic language primitives that are well optimized inside.
Due to the language and structures flexibility, as a functional programming developer, you can bring the language closer to the problem. And not vice versa. In addition, FP offers some new and interesting tools for solving complex tasks that OOP developers often neglect.
Working with functional languages provides accurate and fast code writing, facilitates testing and debugging. You’re working with high-level programs, and the functions signatures are more informative.`,
    category: "programming-paradigms"
  },
  {
    question: 'Реактивне програмування. Що це таке? в чому його суть?',
    answer: 'Reactive programming is a programming paradigm for writing code, mainly concerned with asynchronous data streams. It is a programming of event streams that happens in time.',
    category: "programming-paradigms"
  },
  {
    question: 'Що таке реактивне функціональне програмування?',
    answer: 'The main idea of (functional) reactive programming is to build programs in a declarative way, by defining the streams, how they are linked together, and what happens if a new stream value arrives over time.' +
      `ORRRR
    Reactive programming is mostly like Functional programming where functions and data are combined with time and called streams. We can create a stream from anything: array, primitive value, etc. We can merge streams, composite them, have HoS (high order stream) which takes another stream as an input or gives as a result.
  A stream is a sequence of ongoing events ordered in time. Streams can emit three things: a value (of some type), an error, or a "completed" signal. To capture these emits you subscribe to a stream passing a function called observers (Observer design pattern).
On top of that ideas, we have a bunch of functions to help us handle streams with all the power of functionality.`,
    category: "programming-paradigms"
  },
  {
    question: 'Які можуть бути стріми в реактивному програмуванні?',
    answer: `Хот і колд і теплі (мікс хот і колд)
Приклад темплого обсервебла - якщо 2-3 рази підпишешсся. то він піде 3 рази. а так через мультикастинг , навітьякщо підпишемся 3 рази, то тіки запит піде 1 раз, а інши його будуть переюзувати`,
    category: "programming-paradigms"
  },
  {
    question: 'порівняння обсервеблів з промісом. Відмінності',
    answer: `
    Observables - Promises  -| <br>
    Emit multiple values over a period of time. - Emit a single value at a time.<br>
Are lazy: they’re not executed until we subscribe to them using the subscribe() method. - Are not lazy: execute immediately after creation. <br>
Have subscriptions that are cancellable using the unsubscribe() method, which stops the listener from receiving further values. - Are not cancellable. <br>
Provide the map for forEach, filter, reduce, retry, and retryWhen operators. - Don’t provide any operations. <br>
Deliver errors to the subscribers. - Push errors to the child promises.`,
    category: "programming-paradigms"
  },
  {
    question: 'що таке депенденсі інджекшин патерн?',
    answer: 'A direct instantiating object inside a class (e.g., in a constructor) leads to tight coupling and hard maintenance and is better to be avoided. Instead, we pass an object as an argument to a class method. At the same time, we lower coupling using an interface as a parameter type of this method.',
    category: "programming-paradigms"
  },
  {
    question: 'Які проблеми вирішує депенденсі інджекшин? які створює?',
    answer: '',
    category: "programming-paradigms"
  },
  {
    question: 'Інверсія контролю. +  Приклади',
    answer: 'Abbr IoC stands for inversion of control. This pattern includes dependency injection. The main idea is: code shouldn\'t decide when and where to instantiate objects. It\'s better to trust it to a controlling framework, a library, or your dedicated module. Either of them is generally called a container. So container plays a controlling role: knows and care about objects lifetime, allocates and eliminates them.',
    category: "programming-paradigms"
  },
  {
    question: `Pros and cons of reactive programming`,
    answer: `The most common example of RP in the JavaScript world is RxJS.
Pros:
writing declarative code
avoiding callback hell
purity
avoiding implementation details with a focus on business goals
Cons:
only hard debugging
making documentation
memory consumption,
time to start
managing concurrency
complexity of testing
a learning curve`,
    category: "programming-paradigms"
  },
  {
    question: 'Як відбувається комунікація в компютері?',
    answer: '',
    category: "programming-paradigms"
  },
];
